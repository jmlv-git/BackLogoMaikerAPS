// fachada.module.ts
import { Module } from '@nestjs/common';

import { FachadaService } from './fachada.service';
import CredencialAcessoControllerModel from '../credencial-acesso/credencial-acesso-controller-model';
import ProjetoControllerModel from '../projeto/projeto-controller-model';
import { CredencialAcessoService } from '../credencial-acesso/credencial-acesso.service';
import { ProjetoService } from '../projeto/projeto.service';
import { PrismaService } from 'src/database/PrismaService';
import LogoControllerModel from '../logo/logo-controller-model';
import { LogoService } from '../logo/logo.service';


@Module({
  providers: [CredencialAcessoControllerModel, ProjetoControllerModel, FachadaService,
     CredencialAcessoService, ProjetoService, PrismaService, LogoControllerModel, LogoService],
  exports: [FachadaService],
})
export class FachadaModule {}
