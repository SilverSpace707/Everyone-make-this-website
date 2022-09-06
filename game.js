playButton = document.getElementById('play');

playButton.onclick = function() {
  alert("The game has started");
	alert("This is the never ending game of fun")
	while (true){
		if (!confirm("Are you sure you want to play?")){
			return
		}
		prompt("wat is " + Math.round(Math.random() * 100) + " + " + Math.round(Math.random() * 100) + "?")
		alert("wrong, its actually " + Math.random() * 100)
	}
	
};