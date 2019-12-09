var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var img = document.getElementById('inventoryItem');
var beschrijving = document.getElementById('description');
var titel = document.getElementById('title');
var makeInventory = document.createElement("DIV");
var x = document.createElement("IMG");
var sleutel = false;

function buttontekst(but1, but2, but3) {
	if (but1 != null) {
		button1.style.display = 'inline';
		button1.innerHTML = but1;
	} else {
		button1.style.display = 'none';
	}
	if (but2 != null) {
		button2.style.display = 'inline';
		button2.innerHTML = but2;
	} else {
		button2.style.display = 'none';
	}
	if (but3 != null) {
		button3.style.display = 'inline';
		button3.innerHTML = but3;
	} else {
		button3.style.display = 'none';
	}
};
function begin() {
	titel.innerHTML = 'Het Verlaten Huis';
	beschrijving.innerHTML = 'Je hebt een wandeling gemaakt door het bos en je nam een zijpaatje. Je bevindt je nu bij een verlaten huis.';
	buttontekst('Play!', null, null);
	img.src = 'images/Start.png'
	btn1.onclick = StartGame;
}
 begin();
function StartGame() {
	titel.innerHTML = 'De poort';
	beschrijving.innerHTML = 'Je staat nu bij de poort van het huis.';
	buttontekst('Ga naar binnen', 'Keer om', null);
	img.src = 'images/Poort.png';
	btn1.onclick = driekanten;
	btn2.onclick = GameOver;
}
function GameOver() {
	titel.innerHTML = 'GameOver';
	img.src = 'images/GameOver.png';
	buttontekst('Opnieuw', null , null);
	btn1.onclick = StartGame;
}
function driekanten() {
	titel.innerHTML = 'Keuze';
	beschrijving.innerHTML = 'Je hebt 3 keuzes om naartoe te gaan';
	buttontekst('Naar Links', 'Rechtdoor', 'Naar rechts');
	img.src = 'images/3weg.png';
	btn1.onclick = bosjes;
	btn2.onclick = deur;
	btn3.onclick = kist;
}
function bosjes() {
	titel.innerHTML = 'Bosjes';
	beschrijving.innerHTML = 'Je hebt nogsteeds honger en er staat een besjesplant';
	buttontekst('Eet het op', 'Terug', null);
	img.src = 'images/bessen.png';
	btn1.onclick = GameOver;
	btn2.onclick = driekanten;
}
function deur() {
	titel.innerHTML = 'Deur';
	beschrijving.innerHTML = 'De deur zit op slot en kan alleen opengemaakt worden met een sleutel.';
	buttontekst('Open de deur', 'Terug', null);
	img.src = 'images/deur.png';
	btn1.onclick = deuropen;
	btn2.onclick = driekanten;
}
function deuropen() {
	if (sleutel == false) {
		beschrijving.innerHTML = 'De sleutel past niet en de deur is gesloten.';
    	text.innerHTML = "de deur is gesloten!";
    	buttontekst('Terug', null, null);
    	btn1.onclick = driekanten;
  	} else if (sleutel == true) {
		titel.innerHTML = 'Deur';
		beschrijving.innerHTML = 'De sleutel past en de deur is open.';
		buttontekst('Naar binnen', 'Terug', null);
		img.src = 'images/deuropen.png';
		btn1.onclick = woonkamer;
		btn2.onclick = driekanten;
} }
function kist() {
	titel.innerHTML = 'Kist';
	beschrijving.innerHTML = 'Er staat een kist open. Misschien zit er iets in.';
	buttontekst('Doe de kist open', 'Terug', null);
	img.src = 'images/kist.png';
	btn1.onclick = ksleutel;
	btn2.onclick = driekanten;
}
function ksleutel() {
	titel.innerHTML = 'Kist';
	beschrijving.innerHTML = 'Je hebt een sleutel gevonden. Misschien is die voor het huis.';
	buttontekst('Terug', null, null);
	img.src = 'images/sleutel.png';
	btn1.onclick = driekanten;
	sleutel = true
}
function woonkamer() {
	titel.innerHTML = 'woonkamer';
	beschrijving.innerHTML = 'Je bent gearriveert in de woonkamer. Je kan de trap op of naar rechts.';
	buttontekst('De trap op', 'Rechts', null);
	img.src = 'images/woonkamer.png';
	btn1.onclick = trap;
	btn2.onclick = keuken;
}
function trap() {
	titel.innerHTML = 'Trap';
	beschrijving.innerHTML = 'Je bent gevallen op de trap en je komt niet meer overeind.';
	buttontekst('Opnieuw', null, null);
	img.src = 'images/GameOver.png';
	btn1.onclick = StartGame;
}
function keuken() {
	titel.innerHTML = 'Keuken';
	beschrijving.innerHTML = 'Je hebt gevonden wat je wilde vinden een koelkast.';
	buttontekst('Doe de koelkast open', null, null);
	img.src = 'images/koelkast.png';
	btn1.onclick = einde;
}
function einde() {
	titel.innerHTML = 'Einde';
	beschrijving.innerHTML = 'Je hebt eten gevonden. Je hebt het overleefd';
	buttontekst('Opnieuw', null, null);
	img.src = 'images/einde.png';
	btn1.onclick = StartGame;
}





