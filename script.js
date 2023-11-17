// JavaScript-code voor validatie
function validateForm() {
    // Valideer persoonsgegevens
    var naam = document.getElementById("Naam").value;
    var adres = document.getElementById("Adres").value;
    var postcode = document.getElementById("Postcode").value;
    var plaats = document.getElementById("Plaats").value;
    var ontbrekendeGegevens = [];

    // Voeg event listeners toe om de balk wit te maken wanneer er tekst wordt ingevoerd
    document.getElementById("Naam").addEventListener("input", function () {
        if (this.value.trim() !== "") {
            this.style.backgroundColor = "white";
        } else {
            this.style.backgroundColor = "yellow";
        }
    });

    document.getElementById("Adres").addEventListener("input", function () {
        if (this.value.trim() !== "") {
            this.style.backgroundColor = "white";
        } else {
            this.style.backgroundColor = "yellow";
        }
    });

    document.getElementById("Postcode").addEventListener("input", function () {
        if (this.value.trim() !== "") {
            this.style.backgroundColor = "white";
        } else {
            this.style.backgroundColor = "yellow";
        }
    });

    document.getElementById("Plaats").addEventListener("input", function () {
        if (this.value.trim() !== "") {
            this.style.backgroundColor = "white";
        } else {
            this.style.backgroundColor = "yellow";
        }
    });

    // Valideer persoonsgegevens
    if (naam === "") {
        ontbrekendeGegevens.push("Naam");
        document.getElementById("Naam").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Naam").style.backgroundColor = "white";
    }

    if (adres === "") {
        ontbrekendeGegevens.push("Adres");
        document.getElementById("Adres").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Adres").style.backgroundColor = "white";
    }

    if (postcode === "") {
        ontbrekendeGegevens.push("Postcode");
        document.getElementById("Postcode").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Postcode").style.backgroundColor = "white";
    }

    if (plaats === "") {
        ontbrekendeGegevens.push("Plaats");
        document.getElementById("Plaats").style.backgroundColor = "yellow";
    } else {
        document.getElementById("Plaats").style.backgroundColor = "white";
    }

    if (ontbrekendeGegevens.length > 0) {
        var melding = "Vul de volgende persoonsgegevens in: " + ontbrekendeGegevens.join(", ");
        alert(melding);
        return false;
    }

    // Valideer quizantwoorden
    var vraag1 = document.querySelector('input[name="vraag1"]:checked');
    var vraag2 = document.querySelector('input[name="vraag2"]:checked');
    var vraag3 = document.querySelector('input[name="vraag3"]:checked');
    var vraag4 = document.querySelectorAll('input[name="vraag4[]"]:checked');
    var vraag5 = document.querySelectorAll('input[name="vraag5[]"]:checked');
    var vraag6 = document.querySelector('input[name="vraag6"]:checked');

    // Controleer of alle vragen zijn beantwoord
    if (!vraag1 || !vraag2 || !vraag3 || vraag4.length === 0 || vraag5.length === 0 || !vraag6) {
        alert("Beantwoord alle quizvragen, als je het niet weet kun je altijd gokken ;)");
        return false;
    }

        // Controleer alle vragen en tel correcte antwoorden
    var juisteAntwoorden = {
        vraag1: "Parijs",
        vraag2: "Mercurius",
        vraag3: "Geel",
        vraag4: ["Vis", "Olifant"],
        vraag5: ["Rood", "Geel", "Blauw"],
        vraag6: "7"
    };

    var antwoorden = {
        vraag1: vraag1.value,
        vraag2: vraag2.value,
        vraag3: vraag3.value,
        vraag4: Array.from(vraag4, input => input.value),
        vraag5: Array.from(vraag5, input => input.value),
        vraag6: vraag6.value
    };

    var aantalCorrecteAntwoorden = 0;
    var totaalVragen = 0;
    var aantalVolledigCorrect = 0;

    for (var vraag in juisteAntwoorden) {
        totaalVragen++;
        if (Array.isArray(juisteAntwoorden[vraag])) {
            // Controleer checkbox-vragen
            var juisteOpties = juisteAntwoorden[vraag];
            var gegevenOpties = antwoorden[vraag];
            var juisteOptiesAantal = juisteOpties.length;
            var correcteOpties = 0;

            for (var i = 0; i < juisteOpties.length; i++) {
                if (gegevenOpties.includes(juisteOpties[i])) {
                    correcteOpties++;
                }
            }

            // Bereken punten op basis van het percentage correcte opties
            var punten = (correcteOpties / juisteOptiesAantal) * 100;

            // Als alle opties correct zijn, voeg 100% punten toe
            if (correcteOpties === juisteOptiesAantal) {
                punten = 100;
                aantalVolledigCorrect++;
            }

            aantalCorrecteAntwoorden += punten;
        } else {
            // Controleer radiobutton-vragen
            if (juisteAntwoorden[vraag] === antwoorden[vraag]) {
                aantalCorrecteAntwoorden += 100;
                aantalVolledigCorrect++;
            }
        }
    }

    // Toon een popup met juiste antwoorden en het percentage correcte antwoorden
    var juisteAntwoordenTekst = "Juiste antwoorden waren:\n" +
        "Vraag 1: Parijs\n" +
        "Vraag 2: Mars\n" +
        "Vraag 3: Geel\n" +
        "Vraag 4: Vis, Olifant\n" +
        "Vraag 5: Rood, Geel, Blauw\n" +
        "Vraag 6: 7";

    var percentageCorrect = (aantalCorrecteAntwoorden / (totaalVragen * 100)) * 100;

    var popupTekst = "Succesvol ingeleverd!\n\n" +
        juisteAntwoordenTekst + "\n\n" +
        "Je hebt in totaal " + percentageCorrect.toFixed(2) + "% van alle vragen goed beantwoord.\n" +
        "Je hebt " + aantalVolledigCorrect + " van de " + totaalVragen + " vragen foutloos beantwoord.";

    alert(popupTekst);

    return true;
}

function arraysVergelijken(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++);{
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


//code om inspector keys weg te halen, waar de code vandaan komt https://stackoverflow.com/questions/28575722/how-can-i-block-f12-keyboard-key-in-jquery-for-all-my-pages-and-elements//
//Einde code inspector key weghalen//

window.onload = function () {
        document.addEventListener(
          "contextmenu",
          function (e) {
            e.preventDefault();
          },
          false
        );
        document.addEventListener(
          "keydown",
          function (e) {
            // inspect I key weghalen //
            if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
              disabledEvent(e);
            }
            // inspect J key weghalen//
            if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
              disabledEvent(e);
            }
            //Inspect ctrl shift C key weghalen//
            if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
              disabledEvent(e);
            }
            // S plus command weghalen//
            if (
              e.keyCode == 83 &&
              (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
            ) {
              disabledEvent(e);
            }
            // U key weghalen//
            if (e.ctrlKey && e.keyCode == 85) {
              disabledEvent(e);
            }
            // F12 key weghalen //
            if (event.keyCode == 123) {
              disabledEvent(e);
            }
          },
          false
        );
        function disabledEvent(e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else if (window.event) {
            window.event.cancelBubble = true;
          }
          e.preventDefault();
          return false;
        }
      };
