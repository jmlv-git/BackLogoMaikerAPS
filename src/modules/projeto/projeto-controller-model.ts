import { Injectable } from "@nestjs/common";
import { ProjetoService } from "./projeto.service";
import { CreateProjetoDto } from "./dto/create-projeto.dto";


@Injectable()
export default class ProjetoControllerModel {
 
    constructor(private readonly projetoService: ProjetoService) {}

    async cadastrarProjeto(createProjetoDto: CreateProjetoDto) {
      const projeto = await this.projetoService.cadastrarProjeto(createProjetoDto);
      return projeto
    }

}

