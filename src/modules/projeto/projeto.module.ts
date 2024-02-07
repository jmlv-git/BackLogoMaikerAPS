import { Module } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { ProjetoController } from './projeto.controller';
import { PrismaService } from 'src/database/PrismaService';
import ProjetoControllerModel from './projeto-controller-model';
import { CredencialAcessoModule } from '../credencial-acesso/credencial-acesso.module';
import CredencialAcessoControllerModel from '../credencial-acesso/credencial-acesso-controller-model';
import { CredencialAcessoService } from '../credencial-acesso/credencial-acesso.service';
import LogoControllerModel from '../logo/logo-controller-model';
import { LogoService } from '../logo/logo.service';
import { FachadaService } from '../fachada/fachada.service';

@Module({
  //imports: [CredencialAcessoModule],
  controllers: [ProjetoController],
  providers: [ProjetoService, PrismaService, ProjetoControllerModel, CredencialAcessoControllerModel
  , CredencialAcessoService, LogoControllerModel, LogoService, FachadaService],
})
export class ProjetoModule {}
