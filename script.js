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




//  ---------- Q&A SECTION ----------

var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var answers1 = document.getElementById("p3-accordion");
var answers2 = document.getElementById("answers2");
var answers3 = document.getElementById("answers3");

var answers = document.getElementById("answers");

if(question1.className != "acceso" && question2.className != "acceso" && question3.className != "acceso"){
    question1.className = "acceso";
    question2.className = "spento";
    question3.className = "spento";
}
question1.onclick = function() {
    if(question1.className != "acceso"){
        question1.className = "acceso";

        question2.className = "spento";
        question3.className = "spento";

        answers1.className = "accordion show";
        answers2.className = "hide";
        answers3.className = "hide";
        //Devo cambiare l'html visualizzato nella risposta
        // answers.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p>"
    }
}

question2.onclick = function() {
    if(question2.className != "acceso"){
        question2.className = "acceso";

        question1.className = "spento";
        question3.className = "spento";

        answers1.className = "accordion hide";
        answers2.className = "show";
        answers3.className = "hide";
        //Devo cambiare l'html visualizzato nella risposta
        //answers.innerHTML = "<h3>Chiamaci per assistenza Home Banking</h3><ul><li>dalle ore 8.00 alle ore 22.00 dal lunedì al venerdì</li><li>dalle ore 8.00 alle ore 14.00 il sabato</li></ul><ul><li>numero verde 800.955.540 per chiamate da telefono fisso</li><li>+39 0521 19 22 211 per chiamate da cellulare e dall'estero</li></ul>"
    }
}

question3.onclick = function() {
    if(question3.className != "acceso"){
        question3.className = "acceso";

        question1.className = "spento";
        question2.className = "spento";

        answers1.className = "accordion hide";
        answers2.className = "hide";
        answers3.className = "show";
        //Devo cambiare l'html visualizzato nella risposta
        //answers.innerHTML = "<form> <div class='mb-3 col-auto'> <label for='name' class='form-label'>Nome e Cognome</label> <input type='text' class='form-control' id='name'> </div> <div class='mb-3 col-auto'> <label for='email' class='form-label'>Email</label> <input type='email' class='form-control' id='email' aria-describedby='emailHelp'></div><div class='mb-3 col-auto'><label for='message' class='form-label'>Messaggio</label><textarea type='text' class='form-control' id='message' rows='5'></textarea></div><div class='mb-3 form-check col-auto'><input type='checkbox' class='form-check-input' id='exampleCheck1'><label class='form-check-label' for='check'>Confermo la presa visione dell'Informativa fornita ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679</label></div><div class='d-flex justify-content-end'><button type='submit' class='submit mt-3'>Invia</button></div></form>"
    }
}




//  ---------- PAGE 1 SLIDER SECTION ----------

var point1 = document.getElementById("point-1");
var point2 = document.getElementById("point-2");
var point3 = document.getElementById("point-3");
var point4 = document.getElementById("point-4");

var content = document.getElementById("p1-content");
var bar = document.getElementById("p1-bar");


function point1_click(){
    content.innerHTML = "<h1>Apri il tuo conto</h1> <h1>in 5 minuti!</h1><h4 class='mt-5'>In pochi step intuitivi e di facile navigazione. Alla fine mettici la faccia con un bel videoselfie!</h4>";

    bar.innerHTML = " <div class='d-flex'><a class='a-point' href=''> <img src='images/p1-point.svg'> </a><img id='p1-slider' src='images/p1-slider.svg'><img id='point-1' class='mt-2' src='images/p1-num2.svg'><a id='point-2' class='a-point' href='#' onclick='point2_click(); return false;'> <img src='images/p1-point.svg'> </a><a id='point-3' class='a-point' href='#' onclick='point3_click(); return false;'> <img src='images/p1-point.svg'> </a><a id='point-4-1' class='a-point' href='#' onclick='point4_click(); return false;'> <img src='images/p1-point.svg'> </a></div>";
}

function point2_click(){
    content.innerHTML = "<h1>Adatto a</h1><h1>tutte le età</h1><h4 class='mt-5'>Un conto perfetto per ogni esigenza</h4>";

    bar.innerHTML = " <div class='d-flex'><a class='a-point' href=''> <img src='images/p1-point.svg'> </a><img id='p1-slider' src='images/p1-slider.svg'><a id='point-1' class='a-point' href='#' onclick='point1_click(); return false;'> <img src='images/p1-point.svg'> </a><img id='point-2' class='mt-2' src='images/p1-num3.svg'><a id='point-3' class='a-point' href='#' onclick='point3_click(); return false;'> <img src='images/p1-point.svg'> </a><a id='point-4-1' class='a-point' href='#' onclick='point4_click(); return false;'> <img src='images/p1-point.svg'> </a></div>";

}

function point3_click(){
    content.innerHTML = "<h1>Funzionalità</h1><h1>innovative e</h1><h1>multidevice</h1><h4 class='mt-5'>Gestisci tutte le operazioni dal Computer, dal Tablet e dallo Smartphone</h4>";

    bar.innerHTML = "<div class='d-flex'><a class='a-point' href=''> <img src='images/p1-point.svg'> </a><img id='p1-slider' src='images/p1-slider.svg'><a id='point-1' class='a-point' href='#' onclick='point1_click(); return false;'> <img src='images/p1-point.svg'> </a><a id='point-2' class='a-point' href='#' onclick='point2_click(); return false;'> <img src='images/p1-point.svg'> </a><img id='point-3' class='mt-2' src='images/p1-num4.svg'><a id='point-4-1' class='a-point' href='#' onclick='point4_click(); return false;'> <img src='images/p1-point.svg'> </a></div>";
}

function point4_click(){
    content.innerHTML = "<h1>L'unione tra</h1> <h1>la Tradizione</h1><h1>ed il Digitale</h1><h4 class='mt-5'>Siamo una Banca che ascolta il territorio con uno sguardo verso il Futuro!</h4>";

    bar.innerHTML = " <div class='d-flex'><a class='a-point' href=''> <img src='images/p1-point.svg'> </a><img id='p1-slider' src='images/p1-slider.svg'><a id='point-1' class='a-point' href='#' onclick='point1_click(); return false;'> <img src='images/p1-point.svg'> </a><a id='point-2' class='a-point' href='#' onclick='point2_click(); return false;'> <img src='images/p1-point.svg'> </a><a id='point-3' class='a-point' href='#' onclick='point3_click(); return false;'> <img src='images/p1-point.svg'> </a><img id='point-4' class='mt-2' src='images/p1-num5.svg'></div>";
}




//  ---------- PAGE 3 ACCORDION ----------
var accordion1 = document.getElementById("accordion1");
var accordion2 = document.getElementById("accordion2");
var accordion3 = document.getElementById("accordion3");
var accordion4 = document.getElementById("accordion4");
var accordion5 = document.getElementById("accordion5");

accordion1.onclick = function() {
    if(accordion1.ariaExpanded == "false"){
        accordion1.innerHTML = "<p class='pe-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p><img class='accordion-arrow' src='images/p3-apri.svg'>"
    }
    if(accordion1.ariaExpanded == "true"){
        accordion1.innerHTML = "<p class='pe-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p><img class='accordion-arrow' src='images/p3-chiudi.svg'>"
        
        accordion2.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion3.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion4.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion5.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"

    }
}
accordion2.onclick = function() {
    if(accordion2.ariaExpanded == "false"){
        accordion2.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
    }
    if(accordion2.ariaExpanded == "true"){
        accordion2.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-chiudi.svg'></img>"
        
        accordion1.innerHTML = "<p class='pe-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p><img class='accordion-arrow' src='images/p3-apri.svg'>"
        accordion3.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion4.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion5.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"

    }
}
accordion3.onclick = function() {
    if(accordion3.ariaExpanded == "false"){
        accordion3.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
    }
    if(accordion3.ariaExpanded == "true"){
        accordion3.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-chiudi.svg'></img>"
    
        accordion1.innerHTML = "<p class='pe-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p><img class='accordion-arrow' src='images/p3-apri.svg'>"
        accordion2.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion4.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion5.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"

    }
}
accordion4.onclick = function() {
    if(accordion4.ariaExpanded == "false"){
        accordion4.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
    }
    if(accordion4.ariaExpanded == "true"){
        accordion4.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-chiudi.svg'></img>"
        
        accordion1.innerHTML = "<p class='pe-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p><img class='accordion-arrow' src='images/p3-apri.svg'>"
        accordion2.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion3.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion5.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
    }
}
accordion5.onclick = function() {
    if(accordion5.ariaExpanded == "false"){
        accordion5.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
    }
    if(accordion5.ariaExpanded == "true"){
        accordion5.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-chiudi.svg'></img>"
        
        accordion1.innerHTML = "<p class='pe-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p><img class='accordion-arrow' src='images/p3-apri.svg'>"
        accordion2.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion3.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
        accordion4.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetuer adipiscing?</p><img class='accordion-arrow' src='images/p3-apri.svg'></img>"
    }
}



