document.getElementById("nome").addEventListener("change", () =>{
    let texto = String(document.getElementById("nome").value).toUpperCase()
    document.getElementById("resultado").value = texto   
});
document.getElementById("numero").addEventListener("change", ()=>{
    let anos = parseInt(document.getElementById("numero").value)
    document.getElementById("resultado2").value = `Daqui a 10 anos você terá ${anos + 10}`
})
