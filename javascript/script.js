const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const dataToJson = await data.json();
    const formattedOutput = JSON.stringify(dataToJson, null, 2); // Add indentation and line breaks
    container.innerHTML = `<pre>${formattedOutput}</pre>`; // <pre> tag to preserve formatting
}

btn.addEventListener("click", clickHandler);