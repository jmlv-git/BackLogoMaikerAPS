import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogoService } from './logo.service';
import { UpdateLogoDto } from './dto/update-logo.dto';
import ProcessadorConverterFormulario from './iProcessadorChainHandlers/ProcessadorConverterFormulario';
import GerarDescricaoGpt from './iProcessadorChainHandlers/ProcessadorGerarDescricao';
import { DescricaoCompletaDto } from './dto/descricao-completa';
import { CreateLogoDto } from './dto/create-logo.dto';
import { FachadaService } from '../fachada/fachada.service';

@Controller('logo')
export class LogoController {
  constructor(private readonly fachadaService: FachadaService) {}

  @Post()
  async create(@Body() data: DescricaoCompletaDto) {
    
    return this.fachadaService.criarLogo(data);
  }
  
}
