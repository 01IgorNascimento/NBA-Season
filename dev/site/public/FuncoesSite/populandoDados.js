
const murray = new jogador()
murray.id = 1
murray.nome = "Jamal Murray"
murray.posicao = "PG"
murray.idade = 25
murray.salario = 29467800
murray.overhall = 84
murray.imagemRosto = "img/times/denverNuggets/murrayRosto.webp"
murray.imagem = "img/times/denverNuggets/jammal_murray.webp"

const hyland = new jogador()
hyland.id = 2
hyland.nome = "Bones Hyland"
hyland.posicao = "SG"
hyland.idade = 22
hyland.salario = 2096880
hyland.overhall = 76
hyland.imagemRosto = "img/times/denverNuggets/hylandRosto.png"
hyland.imagem = "img/bones_hyland.jpg"

const porterjr = new jogador()
porterjr.id = 3
porterjr.nome = "Michael Porter JR"
porterjr.posicao = "SF"
porterjr.idade = 24
porterjr.salario = 5258735
porterjr.overhall = 80
porterjr.imagemRosto = "img/times/denverNuggets/porterRosto.webp"
porterjr.imagem = "img/times/denverNuggets/michael_porter_jr.jpg"

const gordon = new jogador()
gordon.id = 4
gordon.nome = "Aaron Gordon"
gordon.posicao = "PF"
gordon.idade = 27
gordon.salario = 16409091
gordon.overhall = 79
gordon.imagemRosto = "img/times/denverNuggets/gordonRosto.webp"
gordon.imagem = "img/times/denverNuggets/aaron_gordon.jpg"

const jokic = new jogador()
jokic.id = 5
jokic.nome = "Nikola Jokic"
jokic.posicao = "C"
jokic.idade = 27
jokic.salario = 31579390
jokic.overhall = 96
jokic.imagemRosto = "img/times/denverNuggets/jokicRosto.png"
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
steph.idade = 34
steph.salario = 45780966
steph.overhall = 96
steph.imagemRosto = "img/times/warriors/stephRosto.png"
steph.imagem = "img/times/warriors/steph.jpg"

const wiggins = new jogador()
wiggins.id = 7
wiggins.nome = "Andrew Wiggins "
wiggins.posicao = "SG"
wiggins.salario = 31579390
wiggins.idade = 27
wiggins.overhall = 84
wiggins.imagemRosto = "img/times/warriors/wiggnsRosto.png"
wiggins.imagem = "img/times/warriors/wiggins.jpg"

const kuminga = new jogador()
kuminga.id = 8
kuminga.nome = "Jonahan Kuminga"
kuminga.posicao = "SF"
kuminga.idade = 20
kuminga.salario = 5466360
kuminga.overhall = 76
kuminga.imagemRosto = "img/times/warriors/kuminga.png"
kuminga.imagem = "img/times/warriors/kuminga.jpg"

const green = new jogador()
green.id = 9
green.nome = "Draymon Green"
green.posicao = "PF"
green.idade = 32
green.salario = 24026712
green.overhall = 83
green.imagemRosto = "img/times/warriors/greenRosto.webp"
green.imagem = "img/times/warriors/green.jpg"

const wiseman = new jogador()
wiseman.id = 10
wiseman.nome = "James Wiseman"
wiseman.posicao = "C"
wiseman.idade = 21
wiseman.salario = 9166800
wiseman.overhall = 76
wiseman.imagemRosto = "img/times/warriors/wiggins.png"
wiseman.imagem = "img/times/warriors/wiseman.jpg"

var warriorsJogadores = [steph, wiggins, kuminga, green, wiseman];

const warriors = new Time()
warriors.nome = "Golden State Warrios"
warriors.id = 2
warriors.logo = "img/times/warriors/logoWarrios.png"
warriors.listaJogadores = warriorsJogadores


const irving = new jogador()
irving.id = 11
irving.nome = "Kyrie Irving"
irving.posicao = "PG"
irving.idade = 30
irving.salario = 36934550
irving.overhall = 92
irving.imagemRosto = "img/times/nets/irvingFace.png"
irving.imagem = "img/times/nets/irving.jpg"

const sethCurry = new jogador()
sethCurry.id = 12
sethCurry.nome = "Seth Curry"
sethCurry.posicao = "SG"
sethCurry.idade = 32
sethCurry.salario = 8496500
sethCurry.overhall = 78
sethCurry.imagemRosto = "img/times/nets/sethCurry.png"
sethCurry.imagem = "img/times/nets/sethCurry.jpg"

const warren = new jogador()
warren.id = 13
warren.nome = "T.J. Warren"
warren.posicao = "SF"
warren.idade = 29
warren.salario = 1836090
warren.overhall = 79
warren.imagemRosto = "img/times/nets/warrenFace.png"
warren.imagem = "img/times/nets/warren.jpg"

const durant = new jogador()
durant.id = 14
durant.nome = "Kevin Durant"
durant.posicao = "PF"
durant.idade = 34
durant.salario = 44119845
durant.overhall = 96
durant.imagemRosto = "img/times/nets/durantFace.png"
durant.imagem = "img/times/nets/durant.jpg"

const claxton = new jogador()
claxton.id = 15
claxton.nome = "Nic Claxton"
claxton.posicao = "C"
claxton.idade = 23
claxton.salario = 8500000
claxton.overhall = 76
claxton.imagemRosto = "img/times/nets/claxton.png"
claxton.imagem = "img/times/nets/claxton.jpg"

var netsJogadores = [irving, sethCurry, warren, durant, claxton];

const nets = new Time()
nets.nome = "Brooklyn Nets"
nets.id = 3
nets.logo = "img/times/nets/netsLogo.png"
nets.listaJogadores = netsJogadores


const Westbrook = new jogador()
Westbrook.id = 16
Westbrook.nome = "Russell Westbrook"
Westbrook.posicao = "PG"
Westbrook.idade = 33
Westbrook.salario = 47063478
Westbrook.overhall = 85
Westbrook.imagemRosto = "img/times/lakers/westbrook.png"
Westbrook.imagem = "img/times/lakers/westbrook.jpg"

const beverley = new jogador()
beverley.id = 17
beverley.nome = "Patrick Beverley"
beverley.posicao = "SG"
beverley.idade = 34
beverley.salario = 13000000
beverley.overhall = 79
beverley.imagemRosto = "img/times/lakers/beverley.png"
beverley.imagem = "img/times/lakers/beverley.jpg"

const lebron = new jogador()
lebron.id = 18
lebron.nome = "Lebron James"
lebron.posicao = "SF"
lebron.idade = 37
lebron.salario = 44474988
lebron.overhall = 96
lebron.imagemRosto = "img/times/lakers/lebron.png"
lebron.imagem = "img/times/lakers/lebron.jpg"

const davis = new jogador()
davis.id = 19
davis.nome = "Anthony Davis"
davis.posicao = "PF"
davis.idade = 29
davis.salario = 37980720
davis.overhall = 90
davis.imagemRosto = "img/times/lakers/davis.png"
davis.imagem = "img/times/lakers/davis.jpg"

const tbryant = new jogador()
tbryant.id = 20
tbryant.nome = "Thomas Bryant"
tbryant.posicao = "C"
tbryant.idade = 25
tbryant.salario = 1836090
tbryant.overhall = 76
tbryant.imagemRosto = "img/times/lakers/tbryant.png"
tbryant.imagem = "img/times/lakers/tbryant.jpg"

var lakersJogadores = [Westbrook, beverley, lebron, davis, tbryant];

const lakers = new Time()
lakers.nome = "Los Angeles Lakers"
lakers.id = 4
lakers.logo = "img/times/lakers/lakersLogo.png"
lakers.listaJogadores = lakersJogadores

const holiday = new jogador()
holiday.id = 21
holiday.nome = "Jrue Holiday"
holiday.posicao = "PG"
holiday.idade = 32
holiday.salario = 33665040
holiday.overhall = 86
holiday.imagemRosto = "img/times/bucks/holiday.png"
holiday.imagem = "img/times/bucks/holiday.webp"

const allen = new jogador()
allen.id = 22
allen.nome = "Grayson Allen"
allen.posicao = "SG"
allen.idade = 27
allen.salario = 8500000
allen.overhall = 75
allen.imagemRosto = "img/times/bucks/allen.png"
allen.imagem = "img/times/bucks/allen.webp"

const middleton = new jogador()
middleton.id = 23
middleton.nome = "Khris Middleton"
middleton.posicao = "SF"
middleton.idade = 31
middleton.salario = 37948276
middleton.overhall = 86
middleton.imagemRosto = "img/times/bucks/middleton.png"
middleton.imagem = "img/times/bucks/middleton.jpg"

const gianis = new jogador()
gianis.id = 24
gianis.nome = "Antetokounmpo"
gianis.posicao = "PF"
gianis.idade = 27
gianis.salario = 42492492
gianis.overhall = 97
gianis.imagemRosto = "img/times/bucks/gianis.png"
gianis.imagem = "img/times/bucks/gianis.jpg"

const lopez = new jogador()
lopez.id = 25
lopez.nome = "Brook Lopez"
lopez.posicao = "C"
lopez.idade = 34
lopez.salario = 13906976
lopez.overhall = 81
lopez.imagemRosto = "img/times/bucks/lopez.png"
lopez.imagem = "img/times/bucks/lopez.jpg"

var bucksJogadores = [holiday, allen, middleton, gianis, lopez];

const bucks = new Time()
bucks.nome = "Milwaukee Bucks"
bucks.id = 5
bucks.logo = "img/times/bucks/bucks.png"
bucks.listaJogadores = bucksJogadores

const brogdon = new jogador()
brogdon.id = 26
brogdon.nome = "Malcolm Brogdon"
brogdon.posicao = "PG"
brogdon.idade = 29
brogdon.salario = 22600000
brogdon.overhall = 82
brogdon.imagemRosto = "img/times/celtics/brogdon.png"
brogdon.imagem = "img/times/celtics/brogdon.jpg"

const smart = new jogador()
smart.id = 27
smart.nome = "Marcus Smart"
smart.posicao = "SG"
smart.idade = 28
smart.salario = 17207141
smart.overhall = 82
smart.imagemRosto = "img/times/celtics/smart.png"
smart.imagem = "img/times/celtics/smart.jpg"

const brown = new jogador()
brown.id = 28
brown.nome = "Jaylen Brown"
brown.posicao = "SF"
brown.idade = 26
brown.salario = 28741071
brown.overhall = 88
brown.imagemRosto = "img/times/celtics/brown.png"
brown.imagem = "img/times/celtics/brown.jpg"

const tatum = new jogador()
tatum.id = 29
tatum.nome = "Jayson Tatum"
tatum.posicao = "PF"
tatum.idade = 26
tatum.salario = 28103500
tatum.overhall = 94
tatum.imagemRosto = "img/times/celtics/tatum.png"
tatum.imagem = "img/times/celtics/tatum.jpg"

const rwillians = new jogador()
rwillians.id = 30
rwillians.nome = "Robert Williams III"
rwillians.posicao = "C"
rwillians.idade = 25
rwillians.salario = 10937502
rwillians.overhall = 85
rwillians.imagemRosto = "img/times/celtics/rwillians.png"
rwillians.imagem = "img/times/celtics/rwillians.jpg"

var celticsJogadores = [brogdon, smart, brown, tatum, rwillians];

const celtics = new Time()
celtics.nome = "Boston Celtics"
celtics.id = 6
celtics.logo = "img/times/celtics/celtics.png"
celtics.listaJogadores = celticsJogadores

const lowry = new jogador()
lowry.id = 31
lowry.nome = "Kyle Lowry"
lowry.posicao = "PG"
lowry.idade = 36
lowry.salario = 28333334
lowry.overhall = 81
lowry.imagemRosto = "img/times/heat/lowry.png"
lowry.imagem = "img/times/heat/lowry.jpg"

const herro = new jogador()
herro.id = 32
herro.nome = "Tyler Herro"
herro.posicao = "SG"
herro.idade = 22
herro.salario = 5722116
herro.overhall = 84
herro.imagemRosto = "img/times/heat/herro.png"
herro.imagem = "img/times/heat/herro.jpg"

const butler = new jogador()
butler.id = 33
butler.nome = "Jimmy Butler"
butler.posicao = "SF"
butler.idade = 33
butler.salario = 37653300
butler.overhall = 93
butler.imagemRosto = "img/times/heat/butler.png"
butler.imagem = "img/times/heat/butler.jpg"

const strus = new jogador()
strus.id = 34
strus.nome = "Max Strus"
strus.posicao = "PF"
strus.idade = 26
strus.salario = 1815677
strus.overhall = 76
strus.imagemRosto = "img/times/heat/strus.png"
strus.imagem = "img/times/heat/strus.jpg"

const adebayo = new jogador()
adebayo.id = 35
adebayo.nome = "Bam Adebayo"
adebayo.posicao = "C"
adebayo.idade = 25
adebayo.salario = 30351780
adebayo.overhall = 86
adebayo.imagemRosto = "img/times/heat/adebayo.png"
adebayo.imagem = "img/times/heat/adebayo.jpg"

var heatJogadores = [lowry, herro, butler, strus, adebayo];

const heat = new Time()
heat.nome = "Miami Heat"
heat.id = 7
heat.logo = "img/times/heat/heat.png"
heat.listaJogadores = heatJogadores

const maxey = new jogador()
maxey.id = 36
maxey.nome = "Tyrese Maxey"
maxey.posicao = "PG"
maxey.idade = 22
maxey.salario = 2726880
maxey.overhall = 86
maxey.imagemRosto = "img/times/76/maxey.png"
maxey.imagem = "img/times/76/maxey.jpg"

const harden = new jogador()
harden.id = 37
harden.nome = "James Harden"
harden.posicao = "SG"
harden.idade = 33
harden.salario = 33000000
harden.overhall = 89
harden.imagemRosto = "img/times/76/harden.png"
harden.imagem = "img/times/76/harden.jpg"

const tharris = new jogador()
tharris.id = 38
tharris.nome = "Tobias Harris"
tharris.posicao = "SF"
tharris.idade = 30
tharris.salario = 37633050
tharris.overhall = 82
tharris.imagemRosto = "img/times/76/harris.png"
tharris.imagem = "img/times/76/harris.jpg"

const tucker = new jogador()
tucker.id = 39
tucker.nome = "P.J. Tucker"
tucker.posicao = "PF"
tucker.idade = 37
tucker.salario = 10490000
tucker.overhall = 77
tucker.imagemRosto = "img/times/76/tucker.png"
tucker.imagem = "img/times/76/tucker.jpg"

const embid = new jogador()
embid.id = 40
embid.nome = "Joel Embiid"
embid.posicao = "C"
embid.idade = 28
embid.salario = 33616770
embid.overhall = 95
embid.imagemRosto = "img/times/76/embid.png"
embid.imagem = "img/times/76/embid.jpg"

var ersJogadores = [maxey, harden, tharris, tucker, embid];

const ers = new Time()
ers.nome = "Philadelphia 76ers"
ers.id = 8
ers.logo = "img/times/76/76.png"
ers.listaJogadores = ersJogadores

const wall = new jogador()
wall.id = 41
wall.nome = "John Wall"
wall.posicao = "PG"
wall.idade = 32
wall.salario = 6479000
wall.overhall = 79
wall.imagemRosto = "img/times/clippers/wall.png"
wall.imagem = "img/times/clippers/wall.jpg"

const pgeorge = new jogador()
pgeorge.id = 42
pgeorge.nome = "Paul George"
pgeorge.posicao = "SG"
pgeorge.idade = 32
pgeorge.salario = 42492492
pgeorge.overhall = 88
pgeorge.imagemRosto = "img/times/clippers/pgeorge.png"
pgeorge.imagem = "img/times/clippers/pgeorge.jpg"

const kleonard = new jogador()
kleonard.id = 43
kleonard.nome = "Kawhi Leonard"
kleonard.posicao = "SF"
kleonard.idade = 31
kleonard.salario = 42492492
kleonard.overhall = 94
kleonard.imagemRosto = "img/times/clippers/leonard.png"
kleonard.imagem = "img/times/clippers/leonard.jpg"

const morris = new jogador()
morris.id = 44
morris.nome = "Marcus Morris "
morris.posicao = "PF"
morris.idade = 33
morris.salario = 16372093
morris.overhall = 77
morris.imagemRosto = "img/times/clippers/morris.png"
morris.imagem = "img/times/clippers/morris.jpg"

const zubac = new jogador()
zubac.id = 45
zubac.nome = "Ivica Zubac"
zubac.posicao = "C"
zubac.idade = 25
zubac.salario = 10123457
zubac.overhall = 77
zubac.imagemRosto = "img/times/clippers/zubac.png"
zubac.imagem = "img/times/clippers/zubac.jpg"

var clippersJogadores = [wall, pgeorge, kleonard, morris, zubac];

const clippers = new Time()
clippers.nome = "Los Angeles Clippers"
clippers.id = 9
clippers.logo = "img/times/clippers/clippers.png"
clippers.listaJogadores = clippersJogadores

const doncic = new jogador()
doncic.id = 46
doncic.nome = "Luka Doncic"
doncic.posicao = "PG"
doncic.idade = 23
doncic.salario = 37095000
doncic.overhall = 96
doncic.imagemRosto = "img/times/mavericks/doncic.png"
doncic.imagem = "img/times/mavericks/doncic.jpg"

const hardaway = new jogador()
hardaway.id = 47
hardaway.nome = "Tim Hardaway Jr"
hardaway.posicao = "SG"
hardaway.idade = 30
hardaway.salario = 19602273
hardaway.overhall = 77
hardaway.imagemRosto = "img/times/mavericks/hardaway.png"
hardaway.imagem = "img/times/mavericks/hardaway.jpg"

const bullok = new jogador()
bullok.id = 48
bullok.nome = "Reggie Bullock"
bullok.posicao = "SF"
bullok.idade = 31
bullok.salario = 10012800
bullok.overhall = 75
bullok.imagemRosto = "img/times/mavericks/bullock.png"
bullok.imagem = "img/times/mavericks/bullock.jpg"

const fsmith = new jogador()
fsmith.id = 49
fsmith.nome = "Dorian Finney-Smith"
fsmith.posicao = "PF"
fsmith.idade = 29
fsmith.salario = 12402000
fsmith.overhall = 77
fsmith.imagemRosto = "img/times/mavericks/fsmith.png"
fsmith.imagem = "img/times/mavericks/fsmith.jpg"

const Wood = new jogador()
Wood.id = 50
Wood.nome = "Christian Wood"
Wood.posicao = "C"
Wood.idade = 27
Wood.salario = 14317460
Wood.overhall = 84
Wood.imagemRosto = "img/times/mavericks/wood.png"
Wood.imagem = "img/times/mavericks/wood.jpg"

var mavericksJogadores = [doncic, hardaway, bullok, fsmith, Wood];

const mavericks = new Time()
mavericks.nome = "Dallas Mavericks"
mavericks.id = 10
mavericks.logo = "img/times/mavericks/mavericks.png"
mavericks.listaJogadores = mavericksJogadores

var listaTodosTimes = [nuggets, warriors, nets, lakers, bucks, celtics, heat, ers, clippers, mavericks]

var timeEscolhido = nuggets
var urlJogadoresEscolhidos = []
var jogadoresEscolhidos = []

var contadorJogadores = 0

function PopulaFk(nomeTime, fk) {

    for (var x = 0; x < listaTodosTimes.length; x++) {
        console.log("Nome Passado: " + nomeTime + "time da vez: " + listaTodosTimes[x])
        if (nomeTime == listaTodosTimes[x]) {
            for (var y = 0; y < listaTodosTimes[x].listaJogadores.length; y++) {

                listaTodosTimes[x].listaJogadores[y].fkTime = fk
                console.log("Fk Time: " + listaTodosTimes[x].listaJogadores[y].fkTime)

            }
        }
    }
}

for (var x = 0; x < listaTodosTimes.length; x++) {
    PopulaFk(listaTodosTimes[x], listaTodosTimes[x].id)
}