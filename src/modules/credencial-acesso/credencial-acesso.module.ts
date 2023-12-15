import { Module } from '@nestjs/common';
import { CredencialAcessoService } from './credencial-acesso.service';
import { CredencialAcessoController } from './credencial-acesso.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [CredencialAcessoController],
  providers: [CredencialAcessoService, PrismaService],
})
export class CredencialAcessoModule {}
