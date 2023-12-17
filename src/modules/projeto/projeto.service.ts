import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import RepositorioProjeto from 'src/repositorios/repositorio-projeto';

@Injectable()
export class ProjetoService {

  repo: RepositorioProjeto;
  constructor(
    private prisma: PrismaService
    ) {
      this.repo = new RepositorioProjeto(prisma)
    }
  
    async cadastrarProjeto(data: CreateProjetoDto) {
      const logo = await this.repo.cadastrarProjeto(
        data
      )
      return logo;
    }
  

 
}
