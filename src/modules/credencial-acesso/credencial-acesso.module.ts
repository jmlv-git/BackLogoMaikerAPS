import { Module } from '@nestjs/common';
import { CredencialAcessoService } from './credencial-acesso.service';
import { CredencialAcessoController } from './credencial-acesso.controller';
import { PrismaService } from 'src/database/PrismaService';
import CredencialAcessoControllerModel from './credencial-acesso-controller-model';
import { ProjetoModule } from '../projeto/projeto.module';
import { FachadaModule } from '../fachada/fachada.module';
import { FachadaService } from '../fachada/fachada.service';
import ProjetoControllerModel from '../projeto/projeto-controller-model';
import { ProjetoService } from '../projeto/projeto.service';
import LogoControllerModel from '../logo/logo-controller-model';
import { LogoService } from '../logo/logo.service';


@Module({
  imports:[FachadaModule],
  controllers: [CredencialAcessoController],
  providers: [CredencialAcessoService, PrismaService, FachadaService, CredencialAcessoControllerModel
  , ProjetoControllerModel, ProjetoService, LogoControllerModel, LogoService],
  
})
export class CredencialAcessoModule {}
