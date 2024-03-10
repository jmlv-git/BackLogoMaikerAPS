import { Controller, Get, Post, Body, Patch, Param, Delete, OnModuleInit } from '@nestjs/common';

import { Client, ClientKafka, Transport } from '@nestjs/microservices';

import { Observable } from 'rxjs';
import { Logo } from './entities/logo.entity';
import { DescricaoCompletaDto } from './dto/descricao-completa';


//CredencialAcessoControlerMVP
@Controller('logo')
export class LogoController implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'logo',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'logo-consumer',
        allowAutoTopicCreation: true
      }
    }
  })

  private client: ClientKafka;

  async onModuleInit() {
    const requestPatters = ['create-logo', 'get-all'];

    requestPatters.forEach(async pattern => {
      this.client.subscribeToResponseOf(pattern);
      await this.client.connect();
    });
  }
  

  @Post()
  logar(@Body() data: DescricaoCompletaDto): Observable<any> {
    return this.client.send('create-logo', data);
  }
  @Post('get')
  criar(@Body() login: string ): Observable<Logo> {
    return this.client.send('get-all', login);
  }
}
