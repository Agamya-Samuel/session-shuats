const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
	const data = await response.json();
	const formattedData = `
		<div class="field"><span>ID:</span> ${data.id}</div>
		<div class="field"><span>Title:</span> ${data.title}</div>
		<div class="field"><span>Body:</span> ${data.body}</div>
	`;

	container.innerHTML = formattedData;
}

btn.addEventListener("click", clickHandler);
