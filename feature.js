let name = document.getElementById("username");
let button = document.getElementById("my_button");

button.addEventListener('click', () => {
	console.log("Hello, " + name.value);
});
