import { PrismaService } from "src/database/PrismaService";
import IRepositorioLogo from "src/interfacesRepositorios/IRepositorioLogo";
import { CreateLogoDto } from "src/modules/logo/dto/create-logo.dto";


class RepositorioLogo  implements IRepositorioLogo {
    private prisma: PrismaService

    constructor(
        prisma: PrismaService
        ) {this.prisma= prisma}

    async cadastrarLogo(data: CreateLogoDto) {
        return await this.prisma.repositorioLogo.create({
            data
          })
    }
   

  


}
  
  
export default RepositorioLogo;


  
