let name = document.getElementById("username");
let button = document.getElementById("my_button");
let label = document.getElementById("my_label");

button.addEventListener('click', () => {
	label.textContent = name.value
});
