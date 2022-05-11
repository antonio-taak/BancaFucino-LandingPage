var partnum = document.getElementById("p2-partnum");
var title = document.getElementById("p2-title");
var subtitle = document.getElementById("p2-subtitle");
var paragraph = document.getElementById("p2-paragraph");

var button_down = document.getElementById("p2-down");
var button_up = document.getElementById("p2-up");

button_down.onclick = function() {

    if(title.className == "pt2" && subtitle.className == "pt2" && paragraph.className == "pt2"){
        //Se sono nella parte 2 passo alla parte 3 
        title.className = "pt3";
        subtitle.className = "pt3";
        paragraph.className = "pt3";

    }else{
        //Se ancora nella parte 1 passo alla parte 2
        partnum.className = "pt2 titolo col-sm-2 me-5";
        partnum.innerHTML = "02"

        title.className = "pt2 col-sm-5 ms-5";
        title.innerHTML = "trading online con la nuova applicazione";

        subtitle.className = "pt2 fs-5";
        subtitle.innerHTML = "TRADING FACILE";

        paragraph.className = "pt2";
        paragraph.innerHTML = "Fucino conto ti da la possibilità di accedere e operare in tempo reale h24 sui mercati mondiali";
    }
}

button_up.onclick = function() {

    if(title.className == "pt1"){
        //Sono già nella parte 1 
        //Dovrei renderlo disabilitato
    }else{
        //Sono nella parte 2
        partnum.className = "pt1 titolo col-sm-2 me-5";
        partnum.innerHTML = "01";

        title.className = "pt1 col-sm-5 ms-5";
        title.innerHTML = "gestione fondi semplificata sul portale web";

        subtitle.className = "pt1 fs-5";
        subtitle.innerHTML = "TUTTO A PORTATA DI CLICK";

        paragraph.className = "pt1";
        paragraph.innerHTML = "Con fucino conto la gestione dei fondi di investimento online non è mai stata così semplice";

    }
}


var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");

var answers = document.getElementById("answers");

if(question1.className != "acceso" && question2.className != "acceso" && question3.className != "acceso" && question4.className != "acceso"){
    question1.className = "acceso";
    question2.className = "spento";
    question3.className = "spento";
    question4.className = "spento";
    answers.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p>"
}
question1.onclick = function() {
    if(question1.className != "acceso"){
        question1.className = "acceso";
        question2.className = "spento";
        question3.className = "spento";
        question4.className = "spento";

        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, natus placeat. Debitis dolor quas nostrum mollitia.</p>"
    }
}

question2.onclick = function() {
    if(question2.className != "acceso"){
        question2.className = "acceso";

        question1.className = "spento";
        question3.className = "spento";
        question4.className = "spento";
        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "<h3>Parla con un nostro operatore</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad.</p> <button class='scopri-white mt-4'>Apri una chat</button>";
    }
}

question3.onclick = function() {
    if(question3.className != "acceso"){
        question3.className = "acceso";

        question1.className = "spento";
        question2.className = "spento";
        question4.className = "spento";
        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "<h3>Chiamaci per parlare direttamente con un nostro operatore</h3> <ul> <li>Informazioni: 800 955 540</li> <li>Informazioni: 800 955 540</li> </ul>";
    }
}

question4.onclick = function() {
    if(question4.className != "acceso"){
        question4.className = "acceso";

        question1.className = "spento";
        question2.className = "spento";
        question3.className = "spento";
        //Devo cambiare l'html visualizzato nella risposta
        answers.innerHTML = "";
    }
}