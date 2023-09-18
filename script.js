
// JavaScript-code for validation
function validateForm() {
    // Valideer persoonsgegevens
    var naam = document.getElementById("Naam").value;
    var adres = document.getElementById("Adres").value;
    var postcode = document.getElementById("Postcode").value;
    var plaats = document.getElementById("Plaats").value;
    var ontbrekendeGegevens = [];

    
    // Valideer quizantwoorden
    var vraag1 = document.querySelector('input[name="vraag1"]:checked');
    var vraag2 = document.querySelector('input[name="vraag2"]:checked');
    var vraag3 = document.querySelector('input[name="vraag3"]:checked');
    var vraag4 = document.querySelectorAll('input[name="vraag4[]"]:checked');
    var vraag5 = document.querySelector('input[name="vraag5"]:checked');
  
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
  
document.getElementById("Naam").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.style.backgroundColor = "white"; // Als er tekst is ingevoerd, maak de achtergrond wit
  } else {
    this.style.backgroundColor = "yellow"; // Als het veld leeg is, maak de achtergrond gee//
  };

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



    if (!vraag1) {
        document.querySelector('h5.required-field:nth-of-type(1)').classList.add('required-error');
    } else {
        document.querySelector('h5.required-field:nth-of-type(1)').classList.remove('required-error');
    }

    if (!vraag2) {
        document.querySelector('h5.required-field:nth-of-type(2)').classList.add('required-error');
    } else {
        document.querySelector('h5.required-field:nth-of-type(2)').classList.remove('required-error');
    }

    if (!vraag3) {
        document.querySelector('h5.required-field:nth-of-type(3)').classList.add('required-error');
    } else {
        document.querySelector('h5.required-field:nth-of-type(3)').classList.remove('required-error');
    }

    if (vraag4.length === 0) {
        document.querySelector('h5.required-field:nth-of-type(4)').classList.add('required-error');
    } else {
        document.querySelector('h5.required-field:nth-of-type(4)').classList.remove('required-error');
    }

    if (!vraag5) {
        document.querySelector('h5.required-field:nth-of-type(5)').classList.add('required-error');
    } else {
        document.querySelector('h5.required-field:nth-of-type(5)').classList.remove('required-error');
    }

    if (!vraag1 || !vraag2 || !vraag3 || vraag4.length === 0 || !vraag5) {
        alert("Beantwoord alle quizvragen.");
        return false;
    }

    return true;
}

// Add event listeners for input fields
                                                 

