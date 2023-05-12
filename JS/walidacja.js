//Funkcja sprawdza czy wartość wprowadzona do pola tekstowego
//pasuje do wzorca zdefiniowanego za pomocą wyrażenia regularnego
//Parametry funkcji:
//pole_id - id sprawdzanego pola tekstowego
//obiektRegex - wyrażenie regularne
function sprawdzPole(pole_id, obiektRegex) {
    let obiektPole = document.getElementById(pole_id);
    return obiektRegex.test(obiektPole.value);
}

//Funkcja sprawdza czy przycisk typu checkbox
//o identyfikatorze box_id jest zaznaczony
function sprawdzBox(box_id){
    let obiekt=document.getElementById(box_id);
    return obiekt.checked;
}

//Funkcja sprawdza czy wybrano przycisk radio
//z grupy przycisków o nazwie nazwa_radio
function sprawdzRadio(nazwa_radio){
    let obiekt=document.getElementsByName(nazwa_radio);
    let wybrany;
    for (let i = 0; i < obiekt.length; i++) {
        wybrany = obiekt[i].checked;
        if (wybrany) return true;
    }
    return false;
}

//Funkcja realizujaca sprawdzanie całego fomularza
//wykorzystując funkcje pomocnicze
function sprawdz() {
    let ok = true; //zmienna informująca o poprawnym wypełnieniu formularza
    let obiektNazw = /^[a-zA-Z]{2,20}$/;
    let obiektWiek = /^[0-9]{1,2}$/;
    let obiektEmail =
        /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;

    if (!sprawdzPole("naz", obiektNazw)) {
        ok = false;
        document.getElementById("nazw_error").innerHTML= "Wpisz poprawnie nazwisko!";
    }
    else document.getElementById("nazw_error").innerHTML="";

    if (!sprawdzPole("wi", obiektWiek)) {
        ok = false;
        document.getElementById("wiek_error").innerHTML= "Wpisz poprawnie wiek!";
    }
    else document.getElementById("wiek_error").innerHTML="";

    if (!sprawdzPole("em", obiektEmail)) {
        ok = false;
        document.getElementById("email_error").innerHTML= "Wpisz poprawnie e-mail!";
    }
    else document.getElementById("email_error").innerHTML="";

    if (!sprawdzBox("p") && !sprawdzBox("c") && !sprawdzBox("j")) {
        ok = false;
        document.getElementById("produkt_error").innerHTML= "Musisz wybrać produkt!";
    }
    else document.getElementById("produkt_error").innerHTML="";

    if (!sprawdzRadio("pay")) {
        ok = false;
        document.getElementById("zaplata_error").innerHTML= "Musisz wskazać sposób płatności!";
    }
    else document.getElementById("zaplata_error").innerHTML="";

    return ok;
}