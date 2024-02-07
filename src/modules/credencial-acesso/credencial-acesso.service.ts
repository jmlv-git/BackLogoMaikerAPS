import { Injectable } from '@nestjs/common';
import { CreateCredencialAcessoDto } from './dto/create-credencial-acesso.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateCredencialAcessoDto } from './dto/update-credencial-acesso.dto';
import RepositorioCredencialAcesso from 'src/repositorios/repositorio-credencial-acesso';

//CadastroCredencialAcesso
@Injectable()
export class CredencialAcessoService {
  repo: RepositorioCredencialAcesso;
  constructor(
    private prisma: PrismaService
    ) {
      this.repo = new RepositorioCredencialAcesso(prisma)
    }

  async existeCredencial(data: CreateCredencialAcessoDto) {

    return await this.getCredencial(data.login, data.senha)
   
  }

  async getCredencial (login: string, senha: string){
    return this.repo.getCredencial(login, senha)
  }

}
