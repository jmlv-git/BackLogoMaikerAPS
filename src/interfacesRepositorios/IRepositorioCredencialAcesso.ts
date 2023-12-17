import { PrismaService } from "src/database/PrismaService";
import { CreateLogoDto } from "src/modules/logo/dto/create-logo.dto";

interface IRepositorioCredencialAcesso {
  
  
    
  getCredencial(login: string, senha: string);
  }


  export default IRepositorioCredencialAcesso;

  
  
