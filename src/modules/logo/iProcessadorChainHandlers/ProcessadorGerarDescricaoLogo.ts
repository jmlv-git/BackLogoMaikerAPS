
class ProcessadorGerarDescricaoLogo implements IProcessadorChain {
    next: IProcessadorChain;

    setNext(processador: IProcessadorChain): void {
        this.next = processador;
    }

    handler(data: string): string {
        
        return 'teste'
    }
    
}