let promesa = new Promise ((resolve, rejected) => {
    setTimeout(() => {
        //resolve, rejected tipo respuesta, si es resolve se continúa dentro del .then
        // si es rejected se continúa en el catch
        //resolve("Exito total!");
        rejected("Fracaso");
    } , 2000);
});
console.log("inicia promesa");

promesa.then((mensaje)=> {
    console.log(mensaje)
    console.log("Acá termina");
}).catch((error) => {
    console.log(error);
});

