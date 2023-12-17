import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogoService } from './logo.service';
import { UpdateLogoDto } from './dto/update-logo.dto';
import ProcessadorConverterFormulario from './iProcessadorChainHandlers/ProcessadorConverterFormulario';
import GerarDescricaoGpt from './iProcessadorChainHandlers/ProcessadorGerarDescricao';
import { DescricaoCompletaDto } from './dto/descricao-completa';
import { CreateLogoDto } from './dto/create-logo.dto';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Post()
  async create(@Body() data: DescricaoCompletaDto) {
    
    let handler_1 = new ProcessadorConverterFormulario ()
    handler_1.setNext(new GerarDescricaoGpt())
    let stringFormulario = data.tipoOrganizacao+"##"+data.ramoAtuacao+"##"+data.diferenciais;
    if (data.cores) {
      stringFormulario=stringFormulario+"##"+data.cores;
    }
    if (data.elementos) {
      stringFormulario=stringFormulario+"##"+data.elementos;
    }
    let img = await handler_1.handler(stringFormulario)

    const logoAux: CreateLogoDto = {
      imagem:  img,
      loginCliente: data.cliente
   }
    
    const logo = await this.logoService.cadastrarLogo(logoAux);
    return logo
  }
  
}
