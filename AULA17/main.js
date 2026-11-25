import { TextBoxComponent } from "./ComponentescomJs/componentes/componets.js";

document.body.innerHTML = `${new TextBoxComponent({className: "control-3d",
    placeholder:"Digite seu nome",
    label:"Nome",  
}).render()}
${new TextBoxComponent({className: "control-3d dark",
    placeholder:"Digite sua senha",
    type:"password",
    label:"Senha",  
}).render()}`

