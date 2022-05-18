var partnum = document.getElementById("p2-partnum");
var title = document.getElementById("p2-title");
var subtitle = document.getElementById("p2-subtitle");
var paragraph = document.getElementById("p2-paragraph");
var image = document.getElementById("p2-img");
var image_div = document.getElementById("p2-img-div");

var button_down = document.getElementById("p2-down");
var button_up = document.getElementById("p2-up");



button_down.onclick = function() {

    if(title.className == "pt1 ms-5 pt-4 fade-in" || title.className == "pt1 ms-5 pt-4 fade-in-inv"){
        //  SE NELLA PARTE 1
        //  VADO ALLA PARTE 2
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt2 titolo me-5 fade-in";
                partnum.innerHTML = "2";

                title.className = "pt2 ms-5 pt-4 fade-in";
                title.innerHTML = "Home Banking e Mobile Banking";

                subtitle.className = "pt2 fs-5 fade-in";
                subtitle.innerHTML = "TANTI SERVIZI INNOVATIVI";

                paragraph.className = "pt2 fade-in";
                paragraph.innerHTML = "Un design moderno, funzionalità innovative e una navigazione intuitiva e veloce disponibile tramite Computer e App";

                image.src="images/img_p2-2.png";
                image.className = "p2-img-fade-in";

                button_up.innerHTML = "<img src='/images/slider-up-blue.svg' class='mb-3'> "

            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";
        image.className = "p2-img-fade-out";

    }else if(title.className == "pt2 ms-5 pt-4 fade-in" || title.className == "pt2 ms-5 pt-4 fade-in-inv"){
        //  SE NELLA PARTE 2 
        //  VADO ALLA PARTE 3
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt3 titolo me-5 fade-in";
                partnum.innerHTML = "3";

                title.className = "pt3 ms-5 pt-4 fade-in";
                title.innerHTML = "Carta di debito PagoBANCOMAT";

                subtitle.className = "pt3 fs-5 fade-in";
                subtitle.innerHTML = "PER I TUOI PAGAMENTI IN TOTALE SICUREZZA";

                paragraph.className = "pt3 fade-in";
                paragraph.innerHTML = "La tua carta di debito per acquistare prodotti e/o servizi presso i negozi e per prelevare denaro contante presso tutti gli ATM";
            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt3 ms-5 pt-4 fade-in" || title.className == "pt3 ms-5 pt-4 fade-in-inv"){
        //  SE NELLA PARTE 3
        //  VADO ALLA PARTE 4
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt4 titolo me-5 fade-in";
                partnum.innerHTML = "4";

                title.className = "pt4 ms-5 pt-4 fade-in";
                title.innerHTML = "SMS Alert";

                subtitle.className = "pt4 fs-5 fade-in";
                subtitle.innerHTML = "I TUOI MOVIMENTI SOTTO CONTROLLO";

                paragraph.className = "pt4 fade-in";
                paragraph.innerHTML = "Ad ogni movimento sul tuo conto riceverai un SMS sul tuo cellulare. La tua sicurezza ci sta a cuore!";
            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }else if(title.className == "pt4 ms-5 pt-4 fade-in" || title.className == "pt4 ms-5 pt-4 fade-in-inv"){
        //  SE NELLA PARTE 4
        //  VADDO ALLA PARTE 5
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt5 titolo me-5 fade-in";
                partnum.innerHTML = "5";

                title.className = "pt5 ms-5 pt-4 fade-in";
                title.innerHTML = "PFM (Personal Financial Manager)";

                subtitle.className = "pt5 fs-5 fade-in";
                subtitle.innerHTML = "UN NUOVO MODO DI GESTIRE LE TUE OPERAZIONI";

                paragraph.className = "pt5 fade-in";
                paragraph.innerHTML = "Con il PFM hai a disposizione un Personal Trainer Finanziario che ti aiuta con consigli mirati per la gestione delle tue entrare ed uscite";

                button_down.innerHTML = "<img src='/images/slider-down.svg' class='mb-3'> "
            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out";
        title.className = "col-sm-5 ms-5 fade-out";
        subtitle.className = "fs-5 fade-out";
        paragraph.className = "fade-out";

    }
}





button_up.onclick = function() {

    if(title.className == "pt5 ms-5 pt-4 fade-in" || title.className == "pt5 ms-5 pt-4 fade-in-inv"){
        //  SONO NELLA PARTE 5
        //  VADO ALLA PARTE 4
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt4 titolo me-5 fade-in-inv";
                partnum.innerHTML = "4";

                title.className = "pt4 ms-5 pt-4 fade-in-inv";
                title.innerHTML = "SMS Alert";

                subtitle.className = "pt4 fs-5 fade-in-inv";
                subtitle.innerHTML = "I TUOI MOVIMENTI SOTTO CONTROLLO";

                paragraph.className = "pt4 fade-in-inv";
                paragraph.innerHTML = "Ad ogni movimento sul tuo conto riceverai un SMS sul tuo cellulare. La tua sicurezza ci sta a cuore!";

                button_down.innerHTML = "<img src='/images/slider-down-blue.svg' class='mb-3'> "
            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out-inv";
        title.className = "col-sm-5 ms-5 fade-out-inv";
        subtitle.className = "fs-5 fade-out-inv";
        paragraph.className = "fade-out-inv";

    }else if(title.className == "pt4 ms-5 pt-4 fade-in" || title.className == "pt4 ms-5 pt-4 fade-in-inv"){
        //  SONO NELLA PARTE 4
        //  VADO ALLA PARTE 3
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt3 titolo me-5 fade-in-inv";
                partnum.innerHTML = "3";

                title.className = "pt3 ms-5 pt-4 fade-in-inv";
                title.innerHTML = "Carta di debito PagoBANCOMAT";

                subtitle.className = "pt3 fs-5 fade-in-inv";
                subtitle.innerHTML = "PER I TUOI PAGAMENTI IN TOTALE SICUREZZA";

                paragraph.className = "pt3 fade-in-inv";
                paragraph.innerHTML = "La tua carta di debito per acquistare prodotti e/o servizi presso i negozi e per prelevare denaro contante presso tutti gli ATM";
            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out-inv";
        title.className = "col-sm-5 ms-5 fade-out-inv";
        subtitle.className = "fs-5 fade-out-inv";
        paragraph.className = "fade-out-inv";

    }else if(title.className == "pt3 ms-5 pt-4 fade-in" || title.className == "pt3 ms-5 pt-4 fade-in-inv"){
        //  SONO NELLA PARTE 3
        //  VADO ALLA PARTE 2
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt2 titolo me-5 fade-in-inv";
                partnum.innerHTML = "2";

                title.className = "pt2 ms-5 pt-4 fade-in-inv";
                title.innerHTML = "Home Banking e Mobile Banking";

                subtitle.className = "pt2 fs-5 fade-in-inv";
                subtitle.innerHTML = "TANTI SERVIZI INNOVATIVI";

                paragraph.className = "pt2 fade-in-inv";
                paragraph.innerHTML = "Un design moderno, funzionalità innovative e una navigazione intuitiva e veloce disponibile tramite Computer e App";

                button_up.innerHTML = "<img src='/images/slider-up-blue.svg' class='mb-3'> "
            },333);
            //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
        },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "titolo col-sm-2 me-5 fade-out-inv";
        title.className = "col-sm-5 ms-5 fade-out-inv";
        subtitle.className = "fs-5 fade-out-inv";
        paragraph.className = "fade-out-inv";

    }else if(title.className == "pt2 ms-5 pt-4 fade-in" || title.className == "pt2 ms-5 pt-4 fade-in-inv"){
        //  SONO NELLA PARTE 2
        //  VADO ALLA PARTE 1
        setTimeout(()=>{
            setTimeout(()=>{
                partnum.className = "pt1 titolo me-5 fade-in-inv";
                partnum.innerHTML = "1";

                title.className = "pt1 ms-5 pt-4 fade-in-inv";
                title.innerHTML = "Conto Corrente";

                subtitle.className = "pt1 fs-5 fade-in-inv";
                subtitle.innerHTML = "TUTTO A PORTATA DI CLICK";

                paragraph.className = "pt1 fade-in-inv";
                paragraph.innerHTML = "Con conto [nome] gestire i tuoi risparmi e sempre più facile e veloce";

                image.src = "images/img_p2.png";
                image.className = "p2-img-fade-in";

                button_up.innerHTML = "<img src='/images/slider-up.svg' class='mb-3'> "
            },333);
             //ANIMAZIONE FADE-IN
            partnum.className = "titolo col-sm-2 me-5 fading";
            title.className = "col-sm-5 ms-5 fading";
            subtitle.className = "fs-5 fading";
            paragraph.className = "fading";
         },333);

        //ANIMAZIONE FADE-OUT
        partnum.className = "p2 titolo col-sm-2 me-5 fade-out-inv";
        title.className = "p2 col-sm-5 ms-5 fade-out-inv";
        subtitle.className = "p2 fs-5 fade-out-inv";
        paragraph.className = "p2 fade-out-inv";
        image.className = "p2-img-fade-out"
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
