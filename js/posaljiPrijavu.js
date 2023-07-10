function posaljiPrijavu() {

    var emailprijava = document.getElementById('emailprijava');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(emailprijava.value)) {
        alert('Unesite ispravnu email adresu');
        emailprijava.focus;
        document.getElementById('emailprijava').value = "";
        return false;
    }
    else {
        alert("Uspesno prijavljeni!");
        document.getElementById('emailprijava').value = "";
        return true;
    }
}
