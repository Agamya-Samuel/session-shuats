const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        const dataToJson = await data.json();
        
        const formattedData = Object.entries(dataToJson)
            .map(([key, value]) => `<strong>${key}</strong>: ${value}`)
            .join('<br>');

        container.innerHTML = formattedData;
    } catch (error) {
        container.innerHTML = `Error: ${error.message}`;
    }
}

function mouseOverHandler() {
    clickHandler();
}

function mouseOutHandler() {
    container.innerHTML = ""; 
}

btn.addEventListener("click", clickHandler);
btn.addEventListener("mouseover", mouseOverHandler);
btn.addEventListener("mouseout", mouseOutHandler);