import { Injectable } from '@nestjs/common';
import { CreateLogoDto } from './dto/create-logo.dto';
import { UpdateLogoDto } from './dto/update-logo.dto';
import { PrismaService } from 'src/database/PrismaService';
import RepositorioLogo from 'src/repositorios/repositorio-logo';

@Injectable()
export class LogoService {
  repo: RepositorioLogo;
  constructor(
    private prisma: PrismaService
    ) {
      this.repo = new RepositorioLogo(prisma)
    }
  
    async cadastrarLogo(data: CreateLogoDto) {
      const logo = await this.repo.cadastrarLogo(
        data
      )
      return logo;
    }
}
