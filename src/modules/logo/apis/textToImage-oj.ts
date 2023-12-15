
class textToImage implements ISubsistemaComunicacaoTextToImage {
    
    obterImagemIA(promptBase: string): string {
        
        this.query({"inputs": "Astronaut riding a horse"}).then((response) => {
            // Use image
            
        });
    }

    async query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const resultArrayBuffer = await response.arrayBuffer();
        const resultText = new TextDecoder().decode(resultArrayBuffer);

        return resultText;
    }
    
    
}