import { PrismaService } from "src/database/PrismaService";
import IRepositorioCredencialAcesso from "src/interfacesRepositorios/IRepositorioCredencialAcesso";
import IRepositorioLogo from "src/interfacesRepositorios/IRepositorioLogo";
import IRepositorioProjeto from "src/interfacesRepositorios/IRepositorioProjeto";
import { CreateLogoDto } from "src/modules/logo/dto/create-logo.dto";
import { CreateProjetoDto } from "src/modules/projeto/dto/create-projeto.dto";


class RepositorioProjeto  implements IRepositorioProjeto {
    private prisma: PrismaService

    constructor(
      prisma: PrismaService
      ) {this.prisma= prisma}

  async cadastrarProjeto(data: CreateProjetoDto) {
      return await this.prisma.repositorioProjeto.create({
          data
        })
  }

}
  
  
export default RepositorioProjeto;


  
