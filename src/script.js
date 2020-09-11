var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//per pimpolla1
var pimx1 = window.innerWidth/2;
var pimy1 = window.innerHeight/2;
var pimdx1 = 0.5;
var pimdy1 = 0.5;
//per pimpolla2
var pimx2 = window.innerWidth-100;
var pimy2 = window.innerHeight/2;
var pimdx2 = -1;
var pimdy2 = -0.5;
//
var numPimpolles = 2;
var jocActiu = 1;
//per niguls 1
var nigul1;
var nigulx1 = 10;
var niguly1 = 10;
var nigulx1sum = 0.5;
var niguly1sum = 0.5;
//per niguls 2
var nigul2;
var nigulx2 = window.innerWidth-100;
var niguly2 = window.innerHeight-100;
var nigulx2sum = 1;
var niguly2sum = 1;
//per niguls 3
var nigul3;
var nigulx3 = window.innerWidth-100;
var niguly3 = window.innerHeight-100;
var nigulx3sum = 2;
var niguly3sum = 1;
//per niguls 4
var nigul4;
var nigulx4 = 50;
var niguly4 = 50;
var nigulx4sum = 1;
var niguly4sum = 2;
//operacions
var operador1 = 5;
var operador2 = 7;
var temps = 10;
var tempsmax = 10;
var puntuacio = 1300;
var nivell = 1;

function glog(txt) {
	console.log('multi-'+txt);
}

function IniciaParametres() {
	glog('iniciaParametres()');
	//lert('iniciant parametres ...');
	canvas.width = window.innerWidth; //ajustam al tamany de la finestra
	canvas.height = window.innerHeight; //ajustam al tamant de la finestra
	nigul1 = new Image();  //per nigul1
	nigul1.src = '../img/m_cloud_cleanpngcom.png';
	nigul2 = new Image();  //per nigul1
	nigul2.src = '../img/m_cloud_cleanpngcom.png';
	nigul3 = new Image();  //per nigul1
	nigul3.src = '../img/m_cloud_cleanpngcom.png';
	nigul4 = new Image();  //per nigul1
	nigul4.src = '../img/m_cloud_cleanpngcom.png';
	CambiaOperadors();
	glog('FIiniciaParametres()');
}

function Prova() {
	ctx.beginPath();
	ctx.rect(20, 40, 50, 50);
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(240, 160, 20, 0, Math.PI*2, false);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.rect(160, 10, 100, 40);
	ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
	ctx.stroke();
	ctx.closePath();
}

function PintaPimpolla1() {
    ctx.beginPath();
    ctx.arc(pimx1, pimy1, 30, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    //text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "30px Verdana black";
    ctx.fillText(operador1, pimx1-6, pimy1+7);
}

function PintaPimpolla2() {
    ctx.beginPath();
    ctx.arc(pimx2, pimy2, 30, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    //text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "30px Verdana black";
    ctx.fillText(operador2, pimx2-6, pimy2+7);
}

function PintaCel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //el deixam en blanc
    //lògica per nígul 1
    ctx.drawImage(nigul1, nigulx1, niguly1);
	nigulx1 += nigulx1sum;
	niguly1 += niguly1sum;
	if (nigulx1 > (canvas.width-100)) 	{ nigulx1sum *= -1; }
	if (nigulx1 < 5) 					{ nigulx1sum *= -1; }
	if (niguly1 > canvas.height-100) 	{ niguly1sum *= -1; }
	if (niguly1 < 0) 					{ niguly1sum *= -1; }
	//if (nigulx1 < 5) { nigulx1sum *= -1; }
	//lògica per nígul 2
    ctx.drawImage(nigul2, nigulx2, niguly2);
	nigulx2 += nigulx2sum;
	niguly2 += niguly2sum;
	if (nigulx2 > (canvas.width-100)) 	{ nigulx2sum *= -1; }
	if (nigulx2 < 5) 					{ nigulx2sum *= -1; }
	if (niguly2 > (canvas.height-100)) 	{ niguly2sum *= -1; }
	if (niguly2 < 0) 					{ niguly2sum *= -1; }
	//lògica per nígul 3
    ctx.drawImage(nigul3, nigulx3, niguly3);
	nigulx3 += nigulx3sum;
	niguly3 += niguly3sum;
	if (nigulx3 > (canvas.width-100)) 	{ nigulx3sum *= -1; }
	if (nigulx3 < 5) 					{ nigulx3sum *= -1; }
	if (niguly3 > (canvas.height-100)) 	{ niguly3sum *= -1; }
	if (niguly3 < 0) 					{ niguly3sum *= -1; }
	//lògica per nígul 4
    ctx.drawImage(nigul4, nigulx4, niguly4);
	nigulx4 += nigulx4sum;
	niguly4 += niguly4sum;
	if (nigulx4 > (canvas.width-100)) 	{ nigulx4sum *= -1; }
	if (nigulx4 < 5) 					{ nigulx4sum *= -1; }
	if (niguly4 > (canvas.height-100)) 	{ niguly4sum *= -1; }
	if (niguly4 < 0) 					{ niguly4sum *= -1; }
}

function ComencaJoc() {
	if (jocActiu == 1) {
		PintaCel();
		ctx.fillStyle = "#FFFFFF";
    	ctx.font = "30px Verdana black";
		ctx.fillText("Temps: ",10,50);
		if (temps <= 5) { ctx.fillStyle = "#FF3356"; }
		ctx.fillText(temps,110,50);
		ctx.fillStyle = "#FFFFFF";
		ctx.fillText("Puntuació: ",10,90); ctx.fillText(puntuacio,150,90);
		ctx.fillText("Nivell:",10,130); ctx.fillText(nivell,100,130);
		if (numPimpolles >= 1) { PintaPimpolla1(); }
		if (numPimpolles >= 2) { PintaPimpolla2(); }
		//lògica per pimpolla 1
		pimx1 += pimdx1;
    	pimy1 += pimdy1;
    	if (pimx1 > (canvas.width-100)) 	{ pimdx1 *= -1; }
		if (pimx1 < 5) 						{ pimdx1 *= -1; }
		if (pimy1 >(canvas.height-100)) 	{ pimdy1 *= -1; }
		if (pimy1 < 0) 						{ pimdy1 *= -1; }
		//lògica per pimpolla 2
		pimx2 += pimdx2;
    	pimy2 += pimdy2;
    	if (pimx2 > (canvas.width-100)) 	{ pimdx2 *= -1; }
		if (pimx2 < 5) 						{ pimdx2 *= -1; }
		if (pimy2 >(canvas.height-100)) 	{ pimdy2 *= -1; }
		if (pimy2 < 0) 						{ pimdy2 *= -1; }
	}
}

function DecrementaTemps() {
	temps--;
	if (temps == -1) {
		temps = tempsmax;
		CambiaOperadors();
	}
}

function CambiaOperadors() {
	operador1 = Math.floor((Math.random() * 10) + 1); //un número entre 1 i 10
	operador2 = Math.floor((Math.random() * 10) + 1); //un número entre 1 i 10
}

function MenuInicial() {
	//aquí anirà el menu per a triar jugador i/o nivell
}


//********************************************
//******************* MAIN *******************
//********************************************
IniciaParametres();
MenuInicial();
Prova();
setInterval(DecrementaTemps,1000); //executa a cada segon
setInterval(ComencaJoc, 10); //executa ComencaJoc cada 10 ms
//alert('aquí!');