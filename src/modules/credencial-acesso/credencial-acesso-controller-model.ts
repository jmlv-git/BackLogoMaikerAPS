import { Injectable } from "@nestjs/common";
import { CredencialAcessoService } from "./credencial-acesso.service";
import { CreateCredencialAcessoDto } from "./dto/create-credencial-acesso.dto";

@Injectable()
export default class CredencialAcessoControllerModel {
 
    constructor(private readonly credencialAcessoService: CredencialAcessoService) {}

    async existeCredencial(data: CreateCredencialAcessoDto) {

        return await this.credencialAcessoService.existeCredencial(data)
       
      }

}

