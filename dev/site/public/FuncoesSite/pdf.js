var stringNomeUsuario = sessionStorage.NOME_USUARIO
stringNomeUsuario = stringNomeUsuario.toUpperCase()
stringNomeUsuario = stringNomeUsuario.split(' ').slice(0, 2).join(' ');

document.querySelector('#titulo').innerHTML = stringNomeUsuario
var h1 = document.querySelector('#titulo')
var listaUsuario1 = document.querySelector('#listaDadosUsuario1')
var listaUsuario2 = document.querySelector('#listaDadosUsuario2')
var sub1 = document.querySelector('#subTitulo1')
var sub2 = document.querySelector('#subTitulo2')
h1.style.display = 'none'
sub1.style.display = 'none'
sub2.style.display = 'none'
listaUsuario1.style.display = 'none'
listaUsuario2.style.display = 'none'



function gerarPDF() {
    var doc = new jsPDF()



    doc.setFillColor(0, 0, 0)



    doc.rect(0, 0, 220, 50, 'F')

    doc.setTextColor(255, 255, 255)

    doc.fromHTML(h1, 85, 18)
    doc.fromHTML(sub1, 55, 65)
    doc.fromHTML(sub2, 55, 175)
    doc.fromHTML(listaUsuario1, 5, 90)
    doc.fromHTML(listaUsuario2, 5, 195)
    doc.addImage(teste, 10, 5, 60, 40)
    doc.addImage(userImg64, 135, 60, 20, 20)
    doc.addImage(logoNba64, 138, 170, 20, 20)


    doc.save('analytics.pdf')
}