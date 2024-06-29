const slide = ["lomepal.png", "projetposter.png", "MO 8D.png", "motravels.png"];
const links = ["article1.html", "articleprojetposter.pdf", "articleMO8D.pdf", "articlemotravels.pdf"];
let numero = 0;
let intervalId;

function ChangeSlide(sens) {
    clearInterval(intervalId); // Arrête le défilement automatique lorsque l'utilisateur change de diapositive
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    document.getElementById("imageLink").href = links[numero];
    startAutoSlide(); // Redémarre le défilement automatique après le changement de diapositive
}

function startAutoSlide() {
    intervalId = setInterval(() => {
        numero++;
        if (numero > slide.length - 1)
            numero = 0;
        document.getElementById("slide").src = slide[numero];
        document.getElementById("imageLink").href = links[numero];
    }, 5000); // Change de diapositive toutes les 5 secondes
}

startAutoSlide(); // Démarre le défilement automatique au chargement de la page

