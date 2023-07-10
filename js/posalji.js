function posalji() {

    var name = document.getElementById('name').value;

    if (name == null || name == '') {
        alert('Unesite Vase ime');
        name.focus;
        return false;
    }

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
        alert('Unesite ispravnu email adresu');
        email.focus;
        document.getElementById('email').value = "";
        return false;
    }
	
	var subject = document.getElementById('subject').value;
	
	if (subject == null || subject == '') {
        alert('Unesite naslov');
        subject.focus;
        return false;
    }

    var message = document.getElementById('message').value;

    if (message == null || message == '') {
        alert('Unesite Vasu poruku');
        message.focus;
        return false;

    }
    else {
        alert("Poruka je uspesno poslata");
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
		document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
        return true;
    }
}