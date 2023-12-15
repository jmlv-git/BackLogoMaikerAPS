import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @Post()
  async create(@Body() createProjetoDto: CreateProjetoDto) {
    const projeto = await this.projetoService.cadastrarProjeto(createProjetoDto);
    return projeto
  }

  
}
