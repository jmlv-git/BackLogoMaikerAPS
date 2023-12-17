import { PrismaService } from "src/database/PrismaService";
import { CreateLogoDto } from "src/modules/logo/dto/create-logo.dto";
import { CreateProjetoDto } from "src/modules/projeto/dto/create-projeto.dto";

interface IRepositorioProjeto {
  
  
    
  cadastrarProjeto(data: CreateProjetoDto);
  }


  export default IRepositorioProjeto;

  
  
