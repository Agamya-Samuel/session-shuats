const btn = document.getElementById("btn");
const container = document.getElementById("container");

async function clickHandler() {
 
	    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();

        // Display data in a readable format
        container.innerHTML = `
		</br>
		<center>
		<table border="1" cellspacing="0" cellpadding="5">
            <th><td><strong>Details</strong></td></th>
            <tr><td><strong>User ID:</strong></td><td><p> ${data.userId}</p></td></tr>
            <tr><td><strong>ID:</strong></td><td><p> ${data.id}</p></td></tr>
            <tr><td><strong>Title:</strong></td><td> <p>${data.title}</p></td></tr>
            <tr><td><strong>Body:</strong></td><td> <p>${data.body}</p></td></tr>
			</table>
			</center>
        `;
    

    
    }

btn.addEventListener("click", clickHandler);
