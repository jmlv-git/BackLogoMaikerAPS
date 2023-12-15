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
    //se for pra ser certo, cliente e designer precisam existir, então temos que usar o método existe para saber primeiro se podemos criar esse projeto ps: talvez isso possa ser feito só no front msm pq a pessoa não vai conseguir escolher um designer inexistente
    //data solicitação seria um datenow e conclusão passaria pelo front em forma de String pra colocar aqui?
    const projeto = await this.prisma.repositorioProjeto.create({
      data
    })
    return projeto
  }

  

 
}
