import ProcessadorConverterFormulario from "./iProcessadorChainHandlers/ProcessadorConverterFormulario";
import GerarDescricaoGpt from "./iProcessadorChainHandlers/ProcessadorGerarDescricao";


(async () => {

let handler_1 = new ProcessadorConverterFormulario ()
handler_1.setNext(new GerarDescricaoGpt())
let stringFormulario = "ibama##protecao aos animais##preservação da natureza##verde##um macaco"
let prompt1 = await handler_1.handler(stringFormulario)



console.log("nossa imagem deveria ser isso (blob) ->", prompt1)
    
})();


