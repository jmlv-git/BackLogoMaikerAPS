import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredencialAcessoService } from './credencial-acesso.service';
import { CreateCredencialAcessoDto } from './dto/create-credencial-acesso.dto';
import { UpdateCredencialAcessoDto } from './dto/update-credencial-acesso.dto';
import { FachadaService } from '../fachada/fachada.service';



//CredencialAcessoControlerMVP
@Controller('credencial-acesso')
export class CredencialAcessoController {
  constructor(private readonly fachadaService: FachadaService) {}

  @Post()
  async create(@Body() createCredencialAcessoDto: CreateCredencialAcessoDto) {
   
    const credencialAcesso = await this.fachadaService.existeCredencial(createCredencialAcessoDto);
   
    if (!credencialAcesso) {
      throw new Error("Credencial incorreta");
      
    }

    return credencialAcesso

  }

}
