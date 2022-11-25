var permissaoGmail = 0
var permissaoSenha = 0
var permissaoConfirmaSenha = 0
var permissaoNome = 0


function validacaoEmail(campo) {
    var valorEmail = campo.value
    var arrayValorEmail = valorEmail.split('');
    var arroba = arrayValorEmail.indexOf('@');
    var ponto = arrayValorEmail.indexOf('.');
    console.log("Ponto: " + ponto + "Arroba: " + arroba)
    if (arroba != -1 && ponto != -1) {
        permissaoGmail = 1
        msgemail.innerHTML = ""
    }
    if (campo.value == "") {
        msgemail.innerHTML = ""
    }
    else {
        msgemail.innerHTML = "<font color='red'>Digite um E-Mail válido</font>"
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