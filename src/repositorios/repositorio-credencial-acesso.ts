import { PrismaService } from "src/database/PrismaService";
import IRepositorioCredencialAcesso from "src/interfacesRepositorios/IRepositorioCredencialAcesso";
import IRepositorioLogo from "src/interfacesRepositorios/IRepositorioLogo";
import { CreateLogoDto } from "src/modules/logo/dto/create-logo.dto";


class RepositorioCredencialAcesso  implements IRepositorioCredencialAcesso {
    private prisma: PrismaService

    constructor(
        prisma: PrismaService
        ) {this.prisma= prisma}

    async getCredencial(login: string, senha: string) {
        return await this.prisma.repositorioAcesso.findFirst({
            where: {
              login: login,
              senha: senha
            }
          })
    }

}
  
  
export default RepositorioCredencialAcesso;


  
