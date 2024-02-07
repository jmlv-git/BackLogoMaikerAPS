import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { FachadaService } from '../fachada/fachada.service';

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly fachadaService: FachadaService) {}

  @Post()
  async create(@Body() createProjetoDto: CreateProjetoDto) {
    const projeto = await this.fachadaService.cadastrarProjeto(createProjetoDto);
    return projeto
  }

  
}
