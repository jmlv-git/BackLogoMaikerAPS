import { PrismaService } from "src/database/PrismaService";
import { CreateLogoDto } from "src/modules/logo/dto/create-logo.dto";

interface IRepositorioLogo {
  
 
    
  cadastrarLogo(data: CreateLogoDto);
  }


  export default IRepositorioLogo;

  
  
