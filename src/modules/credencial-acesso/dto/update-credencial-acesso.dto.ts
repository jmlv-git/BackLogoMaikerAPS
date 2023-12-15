import { PartialType } from '@nestjs/mapped-types';
import { CreateCredencialAcessoDto } from './create-credencial-acesso.dto';

export class UpdateCredencialAcessoDto extends PartialType(CreateCredencialAcessoDto) {}
