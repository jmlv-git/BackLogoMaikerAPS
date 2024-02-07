import { Module } from '@nestjs/common';
import { LogoService } from './logo.service';
import { LogoController } from './logo.controller';
import { PrismaService } from 'src/database/PrismaService';
import CredencialAcessoControllerModel from '../credencial-acesso/credencial-acesso-controller-model';
import { CredencialAcessoService } from '../credencial-acesso/credencial-acesso.service';
import ProjetoControllerModel from '../projeto/projeto-controller-model';
import { ProjetoService } from '../projeto/projeto.service';
import LogoControllerModel from './logo-controller-model';
import { FachadaService } from '../fachada/fachada.service';

@Module({
  controllers: [LogoController],
  providers: [ProjetoService, PrismaService, FachadaService, ProjetoControllerModel, CredencialAcessoControllerModel
    , CredencialAcessoService, LogoControllerModel, LogoService],
})
export class LogoModule {}
