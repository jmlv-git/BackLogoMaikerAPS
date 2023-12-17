import ISubsistemaComunicacaoTextToImage from "../interfaces/ISubsistemaComunicacaoTextToImage";


class FachadaComunicacaoT2I implements ISubsistemaComunicacaoTextToImage {

    async obterImagemIA(data: string): Promise<any> {
  
        console.log("agora vai gerar a logo")
        
        // Método assinc
        const responseOpenJourney = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify({
                    inputs: data
                }),
            }
        )

        let urlImagem = await responseOpenJourney.blob()
        return  URL.createObjectURL(urlImagem); //blob é asinc ???
    
      }
    
    
     

}

export default FachadaComunicacaoT2I;