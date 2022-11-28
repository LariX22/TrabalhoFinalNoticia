function validarCadastro(){
    var senha1 = document.forms["cadastro"]
    ["senha"].value;
    var senha2 = document.forms["cadastro"]
    ["confirmesenha"].value;

    if(senha1 != senha2){
        alert("As senhas não conferem!");
    }
    else{
        alert("Cadastro Realizado com Sucesso")
    }
}