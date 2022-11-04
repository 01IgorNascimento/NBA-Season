var permissaoGmail = 0
var permissaoSenha = 0
var permissaoConfirmaSenha = 0
var permissaoNome = 0


function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        document.getElementById("msgemail").innerHTML = "";
        permissaoGmail = 1
        alert("AAA")
    } else if (field.value == "") {
        document.getElementById("msgemail").innerHTML = "";

    }
    else {
        document.getElementById("msgemail").innerHTML = "<font color='red'>E-mail inválido </font>";
        permissaoGmail = 0
    }
}


function validacaoSenha() {
    var senha = senha_input.value
    var confirmaSenha = confirmacao_senha_input.value

    if (senha != '' && senha.length < 8) {
        msgSenha.innerHTML = "<font color='red'>A senha deve conter 8 ou mais caracteres</font>"
        permissaoSenha = 0
    } else {
        msgSenha.innerHTML = ""
        permissaoSenha = 1
    }

    if (confirmaSenha != '' && confirmaSenha.length < 8) {
        msg_confirmaSenha.innerHTML = "<font color='red'>A senha deve conter 8 ou mais caracteres</font>"
        permissaoConfirmaSenha = 0
    } else {
        msg_confirmaSenha.innerHTML = ""
        permissaoConfirmaSenha = 1

        if (senha != confirmaSenha) {
            msg_confirmaSenha.innerHTML = "<font color='red'>A senhas devem ser iguais</font>"
            permissaoConfirmaSenha = 0
        }
    }
}

function ValidaCadastrar() {
    var nome = nome_input.value

    if (nome.length == 0) {
        msg_nome.innerHTML = "<font color='red'>O campo responsável não pode estar vazio</font>"
        permissaoNome = 0
    } else if (isNaN(nome)) {
        msg_nome.innerHTML = ""
        permissaoNome = 1
    } else {
        msg_nome.innerHTML = "<font color='red'>O campo responsável não pode ser um número</font>"
        permissaoNome = 0
    }

    // VALIDAÇÃO TOTAL
    if (permissaoGmail == 1 && permissaoSenha == 1 && permissaoConfirmaSenha == 1
        && permissaoNome == 1 &&
        permissaoNome == 1) {
        cadastrar()
    }
    else {
        alert("preencha corretamente os campos que contenham *")
    }
    console.log(permissaoGmail)
    console.log(permissaoSenha)
    console.log(permissaoConfirmaSenha)
    console.log(permissaoNome)
}