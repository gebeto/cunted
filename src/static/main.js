var count = 0;
var counterElement = document.getElementById("counter");

function refreshCounter() {
	counterElement.textContent = count;
}

document.body.addEventListener("click", function(e) {
	count++;
	refreshCounter();
});

document.getElementById("reset").addEventListener("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	console.log("ASDASD")

	count = 0;
	refreshCounter();
});