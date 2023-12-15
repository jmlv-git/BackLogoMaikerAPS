import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/PrismaService';
import { CredencialAcessoModule } from './modules/credencial-acesso/credencial-acesso.module';
import { ProjetoModule } from './modules/projeto/projeto.module';

@Module({
  imports: [CredencialAcessoModule, ProjetoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
