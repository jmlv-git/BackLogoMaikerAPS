import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogoService } from './logo.service';
import { CreateLogoDto } from './dto/create-logo.dto';
import { UpdateLogoDto } from './dto/update-logo.dto';
import ProcessadorConverterFormulario from './iProcessadorChainHandlers/ProcessadorConverterFormulario';
import GerarDescricaoGpt from './iProcessadorChainHandlers/ProcessadorGerarDescricao';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Post()
  async create(@Body() createLogoDto: CreateLogoDto) {
    
    let handler_1 = new ProcessadorConverterFormulario ()
    handler_1.setNext(new GerarDescricaoGpt())
    let stringFormulario = "ibama##protecao aos animais##preservação da natureza##verde##um macaco"
    let prompt1 = await handler_1.handler(stringFormulario)

    const logoAux: CreateLogoDto = {
      imagem:  prompt1,
      loginCliente: "fefeberotec"
   }
    
    const logo = await this.logoService.cadastrarLogo(logoAux);
    return logo
  }
  
}
