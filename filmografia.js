var nodoAvanti;
var nodoIndietro;
var nodoLocandina;
var nodoTitolo;
var nodoDescrizione;
var indice;
const delay=2000;
var contatore;
var automatico;
var ciclo;
var film;

function Auto(){
    try {
        if (automatico) {
           nodoAuto.value = "Scorri automaticamente";
           automatico = false;
           clearInterval(ciclo);
        } else {
           nodoAuto.value = "Stop";
           automatico = true;
           ciclo=setInterval(fotoAvanti, delay);
        }
     } catch ( e ) {
        alert("Auto" + e);
     }
}


function fotoAvanti(){
    try {
        contatore+=1;
        if (contatore>indice)
            contatore=0;
        var foto=film[contatore]["foto"];
        var descrizione=film[contatore]["descrizione"];
        var titolo=film[contatore]["titolo"];
        var anno=film[contatore]["anno"];
        var regista=film[contatore]["regista"];
        nodoRegista.firstChild.nodeValue=regista;
        nodoAnno.firstChild.nodeValue=anno;
        nodoTitolo.firstChild.nodeValue=titolo;
        nodoDescrizione.firstChild.nodeValue=descrizione;
        document.getElementById("locandina").src=foto;
        } catch ( e ) {
            alert("fotoAvanti" + e);
        }
}

function fotoIndietro(){
    try {
        contatore-=1;
        if (contatore<0)
            contatore=indice;
        var foto=film[contatore]["foto"];
        var descrizione=film[contatore]["descrizione"];
        var titolo=film[contatore]["titolo"];
        var anno=film[contatore]["anno"];
        var regista=film[contatore]["regista"];
        nodoRegista.firstChild.nodeValue=regista;
        nodoAnno.firstChild.nodeValue=anno;
        nodoTitolo.firstChild.nodeValue=titolo;
        nodoDescrizione.firstChild.nodeValue=descrizione;
        document.getElementById("locandina").src=foto;
        } catch ( e ) {
            alert("fotoIndietro" + e);
        }
}

function gestoreLoad(){
    try{
        contatore=0;
        automatico=false;
        film =[
            {
                titolo: "La Città Incantata",
                foto: "foto_sito/locandine/spirited_away.jpg",
                descrizione: "Chihiro è una bambina di dieci anni molto capricciosa e viziata e quando i suoi genitori le dicono che devono trasferirsi, ovviamente reagisce in modo irritante, arrabbiandosi. Durante il viaggio per raggiungere la nuova casa, i tre si fermano in una città fantasma governata da una strega malvagia con al suo seguito antiche divinità e creature magiche.",
                regista:"Hayao Miyazaki",
                anno:"2003"
            },
            {
                titolo: "I sospiri del mio cuore",
                foto: "foto_sito/locandine/sospiri.jpg",
                descrizione: "Durante le vacanze estive Shizuku, una studentessa delle medie appassionata di romanzi, si reca spesso in biblioteca per prendere in prestito numerosi volumi. Un giorno, si accorge che nella lista del giorno stranamente ricorre sempre un cognome prima del suo: Amasawa, ed incomincia quindi a fantasticare su chi sia questo ragazzo che sembra avere i suoi stessi gusti letterari.",
                regista:"Yoshifumi Kondō",
                anno:"1995"
            },
            {
                titolo: "I racconti di Terramare",
                foto: "foto_sito/locandine/terramare.jpg",
                descrizione: "L'equilibrio del mondo sta cambiando da quando i draghi, che controllano il confine estremo di Terramare, si spingono minacciosamente fino alle terre abitate dagli esseri umani. Per Ged, un giovane mago, comincia così il lungo viaggio alla ricerca della misteriosa e terribile forza che sta minacciando il pianeta intero.",
                regista:"Gorō Miyazaki",
                anno:"2006"
            },
            {
                titolo: "La storia della principessa splendente",
                foto: "foto_sito/locandine/principessasplendente.jpg",
                descrizione: "Un giorno di Primavera, Okina, un anziano tagliatore di bambù, trova nel germoglio di una pianta una creatura luminosa che ha le sembianze di una principessa. Portata a casa dal giardiniere, questa si trasforma in una neonata, che viene adottata immediatamente. La piccola cresce molto in fretta, mentre l'uomo trova costantemente nello stesso campo alcune pepite d'oro e vestiti.",
                regista:"Isao Takahata",
                anno:"2014" 
            },
            {
                titolo: "Il Castello Errante di Howl",
                foto: "foto_sito/locandine/locandina_howl.jpg",
                descrizione: "Sophie è una semplice ragazza di diciotto anni che gestisce il negozio di cappelli del defunto padre. Durante una delle sue rare uscite in città, viene importunata da due gendarmi presenti a causa della guerra, ma è prontamente salvata dal bellissimo mago Howl, il quale prova subito simpatia per lei.",
                regista:"Hayao Miyazaki",
                anno:"2004"
            },
            {
                titolo: "Laputa - Castello nel Cielo",
                foto: "foto_sito/locandine/laputa.jpg",
                descrizione: "La giovane Sheeta è tenuta prigioniera dal cinico colonnello Muska a bordo di un'aeronave diretta verso la fortezza Tedis. Durante il volo, in una notte rischiarata dalla luna, il veicolo viene attaccato da una banda di pirati guidata dall'intrepida Dola, che vuole impossessarsi del ciondolo che la ragazzina porta al collo. Questo oggetto ha infatti un valore inestimabile poiché permette di vincere la forza di gravità.",
                regista:"Hayao Miyazaki & Isao Takahata",
                anno:"1986"
            },
            {
                titolo: "Si alza il vento",
                foto: "foto_sito/locandine/sialzailvento.jpg",
                descrizione: "Jiro sogna di volare e progettare aeroplani ispirandosi al famoso maestro italiano Gianni Caproni. Miope fin dalla giovane età e pertanto impossibilitato a diventare pilota, nel 1927 entra a lavorare in una delle principali società giapponesi di ingegneria aeronautica dove ha l'opportunità di mostrare a tutti il proprio talento incredibile.",
                regista:"Hayao Miyazaki",
                anno:"2013"
            },
            {
                titolo: "Si sente il mare",
                foto: "foto_sito/locandine/oceanwaves.webp",
                descrizione: "Muto Rikako, una ragazza presuntuosa, viziata ma molto brava a scuola, si è appena trasferita da Tokyo a Kochi. La giovane viene subito notata da Matsuno Yutaka, che si prende una cotta per lei. Il suo migliore amico, Morisaki, prova anch'egli dei sentimenti particolari per la compagna ed il rapporto fra i tre si trasforma in un gioco di affetto ed invidia.",
                regista:"Tomomi Mochizuki",
                anno:"1993"
            },
            {
                titolo: "Porco Rosso",
                foto: "foto_sito/locandine/porcorosso.jpg",
                descrizione: "Marco Pagot è un asso dell'aviazione militare italiana che, in seguito ad un misterioso incidente durante la Prima Guerra Mondiale, assume per magia l'aspetto di un maiale antropomorfo. Con il nome di battaglia di Porco Rosso, a bordo del suo idrovolante vermiglio, decide di ritirarsi dal campo di battaglia e di guadagnarsi da vivere facendo il cacciatore di taglie. Ma l'arrivo del pilota americano Curtis cambia i suoi piani.",
                regista:"Hayao Miyazaki",
                anno:"1992"
            },
            {
                titolo: "Una tomba per le lucciole",
                foto: "foto_sito/locandine/unatombaperlelucciole.jpg",
                descrizione: "Il film racconta la storia di Seita e Setsuko, due fratellini giapponesi che vivono il dramma del bombardamento di Kobe durante la seconda guerra mondiale. La sera del 21 Settembre 1945 il giovane ragazzo muore di stenti in una stazione ferroviaria. Nelle sue mani tiene solo una scatola di latta che contiene i resti della sorellina. Gli spiriti dei due bambini rivivono gli avvenimenti dei propri ultimi mesi alla flebile luce delle lucciole.",
                regista:"Isao Takahata",
                anno:"1988"
            }
        
        ];
        indice=(film.length-1);
        nodoAvanti=document.getElementById("avanti");
        nodoIndietro=document.getElementById("indietro");
        nodoLocandina=document.getElementById("locandina");
        nodoDescrizione=document.getElementById("desc_film");
        nodoTitolo=document.getElementById("titolo_film");
        nodoRegista=document.getElementById("regista");
        nodoAnno=document.getElementById("anno");
        nodoAuto=document.getElementById("auto");
        nodoAuto.onclick=Auto;
        nodoAvanti.onclick=fotoAvanti;
        nodoIndietro.onclick=fotoIndietro;
            }
     catch (e){
          alert ("gestoreLoad"+e)
      }
  }
  window.onload=gestoreLoad;