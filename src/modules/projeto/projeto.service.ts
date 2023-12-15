import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { PrismaService } from 'src/database/PrismaService';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Injectable()
export class ProjetoService {

  constructor(
    private prisma: PrismaService
    ) {}

  async cadastrarProjeto(data: CreateProjetoDto) {
    const projeto = await this.prisma.repositorioProjeto.create({
      data
    })
    
    return projeto
  }

  

 
}
