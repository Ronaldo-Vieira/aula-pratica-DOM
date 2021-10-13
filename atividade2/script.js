document.getElementById("soma").addEventListener("click", () => {
    var campo1 = parseInt(document.getElementById("campo1").value)
    var campo2 = parseInt(document.getElementById("campo2").value)
    if(campo1 && campo2 < 2 || campo1 && campo2 > 10) {
        window.alert("Por favor digite apenas valores entre 2 e 10 !")
    }
    document.getElementById("resultado").value = `${campo1 + campo2}`
});
    /* console.log(typeof(contInput)) */
