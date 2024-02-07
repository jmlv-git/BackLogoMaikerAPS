import { Injectable } from "@nestjs/common";
import { LogoService } from "./logo.service";
import { CreateLogoDto } from "./dto/create-logo.dto";
import { DescricaoCompletaDto } from "./dto/descricao-completa";
import ProcessadorConverterFormulario from "./iProcessadorChainHandlers/ProcessadorConverterFormulario";
import GerarDescricaoGpt from "./iProcessadorChainHandlers/ProcessadorGerarDescricao";



@Injectable()
export default class LogoControllerModel {
 
    constructor(private readonly logoService: LogoService) {}

    async create( data: DescricaoCompletaDto) {
    
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
        imagem:  "img",
        loginCliente: 'data.cliente'
     }
      
      const logo = await this.logoService.cadastrarLogo(logoAux);
      return img
    }

}

