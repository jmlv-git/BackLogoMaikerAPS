
interface IProcessadorChain {
    next: IProcessadorChain;
    
    setNext(processador: IProcessadorChain): void;
    handler(prompt: string): string;
  }

  
  
