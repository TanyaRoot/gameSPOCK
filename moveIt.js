document.addEventListener('DOMContentLoaded', () => {
	var promoGo = document.getElementById("space1");
	promoGo.addEventListener("click", function() {
		document.getElementById("space1").style.display = "none";
		document.getElementById("space2").style.display = "block";
	});
	
	var goNext = document.getElementById("space2");
	goNext.addEventListener("click", function() {
		document.getElementById("space2").style.display = "none";
		document.getElementById("space3").style.display = "block";
		document.getElementById("countLast").innerHTML = "<p>РАУНД: 1</p>";
	});
	
	var count = 1;
	var goOn = document.getElementById("space3");
	goOn.addEventListener("click", function() {
		var a = ['1', '2', '3', '4', '5'];
		var ar = Math.floor(Math.random () * a.length);
		document.getElementById("space3").innerHTML = "<img src='img/"+ a[ar] +".jpg' id='pics'>";
		count++;
		document.getElementById("countLast").innerHTML = "<p>РАУНД: " + count +"</p>";
	});
	
	var btnReset = document.getElementById("reset");
	btnReset.addEventListener("click", function(){
		document.getElementById("space1").style.display = "block";
		document.getElementById("space2").style.display = "none";
		document.getElementById("space3").style.display = "none";
		document.getElementById("countLast").innerHTML = "<p>РАУНД: " + 0 +"</p>";
		count = 0;
	});

} );