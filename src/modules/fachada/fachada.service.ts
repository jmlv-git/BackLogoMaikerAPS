// fachada.service.ts
import { Injectable } from '@nestjs/common';
import { CredencialAcessoService } from '../credencial-acesso/credencial-acesso.service';
import { ProjetoService } from '../projeto/projeto.service';
import { LogoService } from '../logo/logo.service';
import { CreateCredencialAcessoDto } from '../credencial-acesso/dto/create-credencial-acesso.dto';
import { CreateProjetoDto } from '../projeto/dto/create-projeto.dto';
import CredencialAcessoControllerModel from '../credencial-acesso/credencial-acesso-controller-model';
import ProjetoControllerModel from '../projeto/projeto-controller-model';
import LogoControllerModel from '../logo/logo-controller-model';
import { DescricaoCompletaDto } from '../logo/dto/descricao-completa';


@Injectable()
export class FachadaService {
  constructor(
    private readonly credencialAcessoControllerModel: CredencialAcessoControllerModel,
    private readonly projetoControllerModel: ProjetoControllerModel,
    private readonly logoControllerModel: LogoControllerModel
    
  ) {}

  // Métodos da Fachada que utilizam os serviços encapsulados
  async existeCredencial(data: CreateCredencialAcessoDto) {

    return await this.credencialAcessoControllerModel.existeCredencial(data)
   
  }

async cadastrarProjeto(createProjetoDto: CreateProjetoDto) {
    const projeto = await this.projetoControllerModel.cadastrarProjeto(createProjetoDto);
    return projeto
}

async criarLogo( data: DescricaoCompletaDto) {
  
  return this.logoControllerModel.create(data)
}

}
