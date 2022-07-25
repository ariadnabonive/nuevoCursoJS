
//switch
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//if, else, if else
function conseguirSuscripcion(suscripcion){
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } else if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } else if(suscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } else if(suscripcion == "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    } 
    console.warn("Ese tipo de suscripción no existe");
}
conseguirSuscripcion('kkkk');


//if 
const tiposDeSuscripciones = {
    Free: 'Solo puedes tomar los cursos gratis.', 
    Basic:'Puedes tomar casi todos los cursos de Platzi durante un mes.', 
    Expert:'Puedes tomar casi todos los cursos de Platzi durante un año.',
    ExpertPlus:'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.'
}
    
function conseguirTipoSuscripcion(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("Ese tipo de suscripción no existe");
}

conseguirTipoSuscripcion('Free');