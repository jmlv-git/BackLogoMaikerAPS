import { Module } from '@nestjs/common';
import { LogoService } from './logo.service';
import { LogoController } from './logo.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [LogoController],
  providers: [LogoService,PrismaService],
})
export class LogoModule {}
