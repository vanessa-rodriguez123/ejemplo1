var dondeEstas;

if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}

var laHora = new Date().getHours();

var elSaludo;

if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días. ";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes. ";
} else {
    elSaludo = "Buenas noches. ";
}

var elEncabezado = document.querySelector("header");

var loPrincipal = document.querySelector("main");

var lorenIpsum = ["Viaje de Chihiro","Castillo en el cielo","Totoro","Ponyo","Kiki"];

function setup() {
    noCanvas();
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}

function portada() {
    createSpan("Estás en page.html").parent("title");
    createElement('p','Me gustan las películas Ghibli, en espacial '+random(lorenIpsum)).parent(loPrincipal);
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#000000");
}

function pagina() {
    createSpan("Estás en page.html").parent("title");
    createElement('p','Me gustan las películas Ghibli, en espacial '+random(lorenIpsum)).parent(loPrincipal);
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#000000");
}
