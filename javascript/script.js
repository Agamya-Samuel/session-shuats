const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
	const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
	const dataToJson = await data.json()
	// console.log(dataToJson)
	const requiredData = {
		userId: dataToJson.userId,
		id: dataToJson.id,
		title: dataToJson.title,
		body: dataToJson.body
	};
	container.innerHTML = `
		userId: ${requiredData.userId} <br>
		id: ${requiredData.id} <br>
		title: ${requiredData.title} <br>
		body: ${requiredData.body}
		`;
	}

function mouseOutHandler() {
	container.innerHTML = "";
}

btn.addEventListener("click", clickHandler);
// btn.addEventListener("mouseover", clickHandler);
// btn.addEventListener("mouseout", mouseOutHandler);