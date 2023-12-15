import { Injectable } from '@nestjs/common';
import { CreateLogoDto } from './dto/create-logo.dto';
import { UpdateLogoDto } from './dto/update-logo.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class LogoService {
  constructor(
    private prisma: PrismaService
    ) {}
  
    async cadastrarLogo(data: CreateLogoDto) {
      const logo = await this.prisma.repositorioLogo.create({
        data
      })
      return logo;
    }
}
