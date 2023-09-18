// JavaScript-code for validation
function validateForm() {
  
    // Valideer persoonsgegevens
    var naam = document.getElementById("Naam").value;
    var adres = document.getElementById("Adres").value;
    var postcode = document.getElementById("Postcode").value;
    var plaats = document.getElementById("Plaats").value;
    var ontbrekendeGegevens = [];
  
  
  //kleur van de balk wit maken nadat je iets invult//

  document.getElementById("Naam").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.style.backgroundColor = "white"; // Als er tekst is ingevoerd, maak de achtergrond wit
  } else {
    this.style.backgroundColor = "yellow"; // Als het veld leeg is, maak de achtergrond geel
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
  
  
  //main code//
  
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
    var vraag5 = document.querySelector('input[name="vraag5"]:checked');

    var antwoordenJuist = controleerAntwoorden();

    if (!antwoordenJuist) {
        alert("Niet alle quizvragen zijn correct beantwoord.");
        return false;
    }

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

    return true;
}

function controleerAntwoorden() {
    var juisteAntwoorden = {
        vraag1: "Parijs",
        vraag2: "Mars",
        vraag3: "Geel",
        vraag4: ["Vis", "Olifant"], // Een array van juiste antwoorden
        vraag5: "7"
    };

    var antwoorden = {
        vraag1: document.querySelector('input[name="vraag1"]:checked'),
        vraag2: document.querySelector('input[name="vraag2"]:checked'),
        vraag3: document.querySelector('input[name="vraag3"]:checked'),
        vraag4: document.querySelectorAll('input[name="vraag4[]"]:checked'),
        vraag5: document.querySelector('input[name="vraag5"]:checked')
    };

    var juiste = true;

    for (var vraag in juisteAntwoorden) {
        if (Array.isArray(juisteAntwoorden[vraag])) {
            // Controleer checkbox-vragen
            var geselecteerdeOpties = [];
            antwoorden[vraag].forEach(function(optie) {
                geselecteerdeOpties.push(optie.value);
            });
            if (!arraysVergelijken(juisteAntwoorden[vraag], geselecteerdeOpties)) {
                juiste = false;
                break;
            }
        } else {
            // Controleer radiobutton-vragen
            if (antwoorden[vraag].value !== juisteAntwoorden[vraag]) {
                juiste = false;
                break;
            }
        }
    }

    return juiste;
}

function arraysVergelijken(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


function toonJuisteAntwoorden() {
    var juisteAntwoorden = {
        vraag1: "Parijs",
        vraag2: "Mars",
        vraag3: "Geel",
        vraag4: ["Vis"],
        vraag5: "7"
    };

    var juisteAntwoordenTekst = "Juiste antwoorden:\n";
    for (var vraag in juisteAntwoorden) {
        juisteAntwoordenTekst += "Vraag " + vraag.substr(5) + ": " + juisteAntwoorden[vraag] + "\n";
    }

    alert(juisteAntwoordenTekst);
}

