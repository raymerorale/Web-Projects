var td11 = document.getElementById("td11");
var td12 = document.getElementById("td12");
var td13 = document.getElementById("td13");
var td21 = document.getElementById("td21");
var td22 = document.getElementById("td22");
var td23 = document.getElementById("td23");
var td31 = document.getElementById("td31");
var td32 = document.getElementById("td32");
var td33 = document.getElementById("td33");
var pturn = 0;
var det = 0;
var sym = "0";

function endGame(){
	alert(winner+" wins!");
	td11.textContent = "";
	td21.textContent = "";
	td31.textContent = "";
	td12.textContent = "";
	td22.textContent = "";
	td32.textContent = "";
	td13.textContent = "";
	td23.textContent = "";
	td33.textContent = "";
}

function symbol() {
	if (this.textContent == "") {
		pturn++;
		det = pturn%2;
		if(det == 0){
			sym = "X";
			winner="Player 2";
		}
		else {
			sym = "O"
			winner="Player 1";
		}
		this.textContent = sym;
		//--------------
		if (td11.innerText == sym && td12.innerText == sym && td13.innerText == sym){
			endGame();
		}
		if (td21.innerText == sym && td22.innerText == sym && td23.innerText == sym){
			endGame();
		}
		if (td31.innerText == sym && td32.innerText == sym && td33.innerText == sym){
			endGame();
		}
		//---------------
		if (td11.innerText == sym && td21.innerText == sym && td31.innerText == sym){
			endGame();
		}
		if (td12.innerText == sym && td22.innerText == sym && td32.innerText == sym){
			endGame();
		}
		if (td13.innerText == sym && td23.innerText == sym && td33.innerText == sym){
			endGame();
		}
		if (td11.innerText == sym && td22.innerText == sym && td33.innerText == sym){
			endGame();
		}
		if (td13.innerText == sym && td22.innerText == sym && td31.innerText == sym){
			endGame();
		}
	}
}
td11.addEventListener("click",symbol);
td12.addEventListener("click",symbol);
td13.addEventListener("click",symbol);
td21.addEventListener("click",symbol);
td22.addEventListener("click",symbol);
td23.addEventListener("click",symbol);
td31.addEventListener("click",symbol);
td32.addEventListener("click",symbol);
td33.addEventListener("click",symbol);



