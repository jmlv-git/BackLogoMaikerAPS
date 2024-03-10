import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit } from '@nestjs/common';
import { CredencialAcessoService } from './credencial-acesso.service';
import { CreateCredencialAcessoDto } from './dto/create-credencial-acesso.dto';
import { UpdateCredencialAcessoDto } from './dto/update-credencial-acesso.dto';
import { FachadaService } from '../fachada/fachada.service';
import { ClientRequest } from 'http';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { CredencialAcesso } from './entities/credencial-acesso.entity';
import { Observable } from 'rxjs';


//CredencialAcessoControlerMVP
@Controller('credencial-acesso')
export class CredencialAcessoController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'user-consumer',
        allowAutoTopicCreation: true
      }
    }
  })

  private client: ClientKafka;

  async onModuleInit() {
    const requestPatters = ['login', 'create-user', 'alter-password'];

    requestPatters.forEach(async pattern => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }
  

  @Post()
  logar(@Body() data: CreateCredencialAcessoDto ): Observable<CredencialAcesso> {
    return this.client.send('login', data);
  }
  @Post('criar')
  criar(@Body() data: CreateCredencialAcessoDto ): Observable<CredencialAcesso> {
    return this.client.send('create-user', data);
  }
  @Post('alterar')
  create(@Body() data: UpdateCredencialAcessoDto ): Observable<CredencialAcesso> {
    return this.client.send('alter-password', data);
  }
}
