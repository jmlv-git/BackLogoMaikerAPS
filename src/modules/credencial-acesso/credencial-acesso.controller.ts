import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredencialAcessoService } from './credencial-acesso.service';
import { CreateCredencialAcessoDto } from './dto/create-credencial-acesso.dto';
import { UpdateCredencialAcessoDto } from './dto/update-credencial-acesso.dto';

//CredencialAcessoControler
@Controller('credencial-acesso')
export class CredencialAcessoController {
  constructor(private readonly credencialAcessoService: CredencialAcessoService) {}

  @Post()
  async create(@Body() createCredencialAcessoDto: CreateCredencialAcessoDto) {
   
    const credencialAcesso = await this.credencialAcessoService.existeCredencial(createCredencialAcessoDto);
   
    if (!credencialAcesso) {
      throw new Error("Credencial incorreta");
      
    }

    return credencialAcesso

  }

}
