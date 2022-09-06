sheeps = "5241"
cows = ""

button1 = document.getElementById('button1');
button2 = document.getElementById('button2');
button3 = document.getElementById('button3');
button4 = document.getElementById('button4');
button5 = document.getElementById('button5');
cucumberButton = document.getElementById('cucumber');
idk = document.getElementById('idk');
chicken = document.getElementById('chicken');
destroy = document.getElementById("destroy");

button1.onclick = function() {
	cows = cows + "1"
	idk.innerHTML = cows
};
button2.onclick = function() {
	cows = cows + "2"
	idk.innerHTML = cows
};
button3.onclick = function() {
	cows = cows + "3"
	idk.innerHTML = cows
};
button4.onclick = function() {
	cows = cows + "4"
	idk.innerHTML = cows
};
button5.onclick = function() {
	cows = cows + "5"
	idk.innerHTML = cows
};
destroy.onclick = function() {
	cows = ""
	idk.innerHTML = "Press the buttons"
};
cucumberButton.onclick = function() {
	if (sheeps == cows) {
		chicken.innerHTML = "wow"
	}
};