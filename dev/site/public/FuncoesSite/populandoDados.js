const murray = new jogador()
murray.id = 1
murray.nome = "Jamal Murray"
murray.posicao = "PG"
murray.overhall = 84
murray.imagemRosto = ""
murray.imagem = "img/times/denverNuggets/jammal_murray.webp"

const hyland = new jogador()
hyland.id = 2
hyland.nome = "Bones Hyland"
hyland.posicao = "SG"
hyland.overhall = 76
hyland.imagemRosto = ""
hyland.imagem = "img/bones_hyland.jpg"

const porterjr = new jogador()
porterjr.id = 3
porterjr.nome = "Michael Porter JR"
porterjr.posicao = "SF"
porterjr.overhall = 80
porterjr.imagemRosto = ""
porterjr.imagem = "img/times/denverNuggets/michael_porter_jr.jpg"

const gordon = new jogador()
gordon.id = 4
gordon.nome = "Aaron Gordon"
gordon.posicao = "PF"
gordon.overhall = 79
gordon.imagemRosto = ""
gordon.imagem = "img/times/denverNuggets/aaron_gordon.jpg"

const jokic = new jogador()
jokic.id = 5
jokic.nome = "Nikola Jokic"
jokic.posicao = "C"
jokic.overhall = 96
jokic.imagemRosto = ""
jokic.imagem = "img/times/denverNuggets/Nikola_Jokic.jpg"

var nuggetsJogadores = [murray, hyland, porterjr, gordon, jokic];

const nuggets = new Time()
nuggets.nome = "Denver Nuggets"
nuggets.id = 1
nuggets.logo = "img/times/denverNuggets/Denver-Nuggets-Logo.png"
nuggets.listaJogadores = nuggetsJogadores



const steph = new jogador()
steph.id = 6
steph.nome = "Stephen Curry"
steph.posicao = "PG"
steph.overhall = 96
steph.imagemRosto = ""
steph.imagem = "img/times/warriors/steph.jpg"

const wiggins = new jogador()
wiggins.id = 7
wiggins.nome = "Andrew Wiggins "
wiggins.posicao = "SG"
wiggins.overhall = 84
wiggins.imagemRosto = ""
wiggins.imagem = "img/times/warriors/wiggins.jpg"

const kuminga = new jogador()
kuminga.id = 8
kuminga.nome = "Jonahan Kuminga"
kuminga.posicao = "SF"
kuminga.overhall = 76
kuminga.imagemRosto = ""
kuminga.imagem = "img/times/warriors/kuminga.jpg"

const green = new jogador()
green.id = 9
green.nome = "Draymon Green"
green.posicao = "PF"
green.overhall = 83
green.imagemRosto = ""
green.imagem = "img/times/warriors/green.jpg"

const wiseman = new jogador()
wiseman.id = 10
wiseman.nome = "James Wiseman"
wiseman.posicao = "C"
wiseman.overhall = 76
wiseman.imagemRosto = ""
wiseman.imagem = "img/times/warriors/wiseman.jpg"

var warriorsJogadores = [steph, wiggins, kuminga, green, wiseman];

const warriors = new Time()
warriors.nome = "Golden State Warrios"
warriors.id = 2
warriors.logo = "img/times/warriors/logoWarrios.png"
warriors.listaJogadores = warriorsJogadores


var listaTodosTimes = [nuggets, warriors]
var timeEscolhido = nuggets
timeEscolhido.listaJogadores

var jogadoresEscolhidos = []

var contadorJogadores = 0