var partnum = document.getElementById("p2-partnum");
var title = document.getElementById("p2-title");
var subtitle = document.getElementById("p2-subtitle");
var paragraph = document.getElementById("p2-paragraph");

var button_down = document.getElementById("p2-down");
var button_up = document.getElementById("p2-up");



button_down.onclick = function() {

    if(title.className == "pt1 ms-5 pt-4"){
        //  SE NELLA PARTE 1
        //  VADO ALLA PARTE 2
        setTimeout(()=>{
            partnum.className = "pt2 titolo me-5";
            partnum.innerHTML = "2";

            title.className = "pt2 ms-5 pt-4";
            title.innerHTML = "Home Banking e Mobile Banking";

            subtitle.className = "pt2 fs-5";
            subtitle.innerHTML = "TANTI SERVIZI INNOVATIVI";

            paragraph.className = "pt2";
            paragraph.innerHTML = "Un design moderno, funzionalità innovative e una navigazione intuitiva e veloce disponibile tramite Computer e App";

            button_up.innerHTML = "<img src='images/slider-up-blue.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt2 ms-5 pt-4"){
        //  SE NELLA PARTE 2
        //  VADO ALLA PARTE 3
        setTimeout(()=>{
            partnum.className = "pt3 titolo me-5";
            partnum.innerHTML = "3";

            title.className = "pt3 ms-5 pt-4";
            title.innerHTML = "Carta di debito PagoBANCOMAT";

            subtitle.className = "pt3 fs-5";
            subtitle.innerHTML = "PER I TUOI PAGAMENTI IN TOTALE SICUREZZA";

            paragraph.className = "pt3";
            paragraph.innerHTML = "La tua carta di debito per acquistare prodotti e/o servizi presso i negozi e per prelevare denaro contante presso tutti gli ATM";

            //button_up.innerHTML = "<img src='/images/slider-up-blue.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt3 ms-5 pt-4"){
        //  SE NELLA PARTE 3
        //  VADO ALLA PARTE 4
        setTimeout(()=>{
            partnum.className = "pt4 titolo me-5";
            partnum.innerHTML = "4";

            title.className = "pt4 ms-5 pt-4";
            title.innerHTML = "SMS Alert";

            subtitle.className = "pt4 fs-5";
            subtitle.innerHTML = "I TUOI MOVIMENTI SOTTO CONTROLLO";

            paragraph.className = "pt4";
            paragraph.innerHTML = "Ad ogni movimento sul tuo conto riceverai un SMS sul tuo cellulare. La tua sicurezza ci sta a cuore!";

            //button_up.innerHTML = "<img src='/images/slider-up-blue.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt4 ms-5 pt-4"){
        //  SE NELLA PARTE 4
        //  VADDO ALLA PARTE 5
        setTimeout(()=>{
            partnum.className = "pt5 titolo me-5";
            partnum.innerHTML = "5";

            title.className = "pt5 ms-5 pt-4";
            title.innerHTML = "PFM (Personal Financial Manager)";

            subtitle.className = "pt5 fs-5";
            subtitle.innerHTML = "UN NUOVO MODO DI GESTIRE LE TUE OPERAZIONI";

            paragraph.className = "pt5";
            paragraph.innerHTML = "Con il PFM hai a disposizione un Personal Trainer Finanziario che ti aiuta con consigli mirati per la gestione delle tue entrare ed uscite";

            button_down.innerHTML = "<img src='images/slider-down.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else{

    }
}





button_up.onclick = function() {

    if(title.className == "pt5 ms-5 pt-4"){
        //  SONO NELLA PARTE 5
        //  VADO ALLA PARTE 4
        setTimeout(()=>{
            partnum.className = "pt4 titolo me-5";
            partnum.innerHTML = "4";

            title.className = "pt4 ms-5 pt-4";
            title.innerHTML = "SMS Alert";

            subtitle.className = "pt4 fs-5";
            subtitle.innerHTML = "I TUOI MOVIMENTI SOTTO CONTROLLO";

            paragraph.className = "pt4";
            paragraph.innerHTML = "Ad ogni movimento sul tuo conto riceverai un SMS sul tuo cellulare. La tua sicurezza ci sta a cuore!";

            button_down.innerHTML = "<img src='images/slider-down-blue.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt4 ms-5 pt-4"){
        //  SONO NELLA PARTE 4
        //  VADO ALLA PARTE 3
        setTimeout(()=>{
            partnum.className = "pt3 titolo me-5";
            partnum.innerHTML = "3";

            title.className = "pt3 ms-5 pt-4";
            title.innerHTML = "Carta di debito PagoBANCOMAT";

            subtitle.className = "pt3 fs-5";
            subtitle.innerHTML = "PER I TUOI PAGAMENTI IN TOTALE SICUREZZA";

            paragraph.className = "pt3";
            paragraph.innerHTML = "La tua carta di debito per acquistare prodotti e/o servizi presso i negozi e per prelevare denaro contante presso tutti gli ATM";

            //button_up.innerHTML = "<img src='/images/slider-up-blue.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt3 ms-5 pt-4"){
        //  SONO NELLA PARTE 3
        //  VADO ALLA PARTE 2
        setTimeout(()=>{
            partnum.className = "pt2 titolo me-5";
            partnum.innerHTML = "2";

            title.className = "pt2 ms-5 pt-4";
            title.innerHTML = "Home Banking e Mobile Banking";

            subtitle.className = "pt2 fs-5";
            subtitle.innerHTML = "TANTI SERVIZI INNOVATIVI";

            paragraph.className = "pt2";
            paragraph.innerHTML = "Un design moderno, funzionalità innovative e una navigazione intuitiva e veloce disponibile tramite Computer e App";

            button_up.innerHTML = "<img src='images/slider-up-blue.svg' class='mb-3'> "
        },700);

        //ANIMAZIONE FADE
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt2 ms-5 pt-4"){
        //  SONO NELLA PARTE 2
        //  VADO ALLA PARTE 1
        setTimeout(()=>{
            partnum.className = "pt1 titolo me-5";
             partnum.innerHTML = "1";

             title.className = "pt1 ms-5 pt-4";
             title.innerHTML = "Conto Corrente";

             subtitle.className = "pt1 fs-5";
             subtitle.innerHTML = "TUTTO A PORTATA DI CLICK";

             paragraph.className = "pt1";
             paragraph.innerHTML = "Con conto [nome] gestire i tuoi risparmi e sempre più facile e veloce";

             button_up.innerHTML = "<img src='images/slider-up.svg' class='mb-3'> "
         },700);

        //ANIMAZIONE FADE
        partnum.className = "p2 titolo col-sm-2 me-5 fade-out";
        title.className = "p2 col-sm-5 ms-5 fade-out";
         subtitle.className = "p2 fs-5 fade-out";
         paragraph.className = "p2 fade-out";
    }

}





var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");

var answers = document.getElementById("answers");

if(question1.className != "acceso" && question2.className != "acceso" && question3.className != "acceso"){
    question1.className = "acceso";
    question2.className = "spento";
    question3.className = "spento";
    answers.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p>"
}
question1.onclick = function() {
    if(question1.className != "acceso"){
        question1.className = "acceso";

        question2.className = "spento";
        question3.className = "spento";

        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p>"
    }
}

question2.onclick = function() {
    if(question2.className != "acceso"){
        question2.className = "acceso";

        question1.className = "spento";
        question3.className = "spento";

        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "<h3>Chiamaci per assistenza Home Banking</h3><ul><li>dalle ore 8.00 alle ore 22.00 dal lunedì al venerdì</li><li>dalle ore 8.00 alle ore 14.00 il sabato</li></ul><ul><li>numero verde 800.955.540 per chiamate da telefono fisso</li><li>+39 0521 19 22 211 per chiamate da cellulare e dall'estero</li></ul>"
    }
}

question3.onclick = function() {
    if(question3.className != "acceso"){
        question3.className = "acceso";

        question1.className = "spento";
        question2.className = "spento";
        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "<form> <div class='mb-3 col-auto'> <label for='name' class='form-label'>Nome e Cognome</label> <input type='text' class='form-control' id='name'> </div> <div class='mb-3 col-auto'> <label for='email' class='form-label'>Email</label> <input type='email' class='form-control' id='email' aria-describedby='emailHelp'></div><div class='mb-3 col-auto'><label for='message' class='form-label'>Messaggio</label><textarea type='text' class='form-control' id='message' rows='5'></textarea></div><div class='mb-3 form-check col-auto'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='check'>Confermo la presa visione dell'Informativa fornita ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679</label></div><div class='d-flex justify-content-end'><button type='submit' class='submit mt-3'>Invia</button></div></form>"
    }
}
