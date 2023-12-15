import { Injectable } from '@nestjs/common';
import { CreateCredencialAcessoDto } from './dto/create-credencial-acesso.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateCredencialAcessoDto } from './dto/update-credencial-acesso.dto';

//CadastroCredencialAcesso
@Injectable()
export class CredencialAcessoService {

  constructor(
    private prisma: PrismaService
    ) {}

  async existeCredencial(data: CreateCredencialAcessoDto) {

    return await this.getCredencial(data.login, data.senha)
   
  }

  getCredencial (login: string, senha: string){
    return this.prisma.repositorioAcesso.findFirst({
      where: {
        login: login,
        senha: senha
      }
    })
  }

}
