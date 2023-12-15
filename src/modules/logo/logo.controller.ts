import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogoService } from './logo.service';
import { CreateLogoDto } from './dto/create-logo.dto';
import { UpdateLogoDto } from './dto/update-logo.dto';

@Controller('logo')
export class LogoController {
  constructor(private readonly logoService: LogoService) {}

  @Post()
  async create(@Body() createLogoDto: CreateLogoDto) {
    const logo = await this.logoService.cadastrarLogo(createLogoDto);
    return logo
  }
  
}
