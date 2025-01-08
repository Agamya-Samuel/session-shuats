document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('displayButton');
    const output = document.getElementById('output');
    
//     button.addEventListener('click', function () {
  document.getElementById("displayButton").addEventListener("click", function() {
    console.log("Button clicked!");
      fetch('https://jsonplaceholder.typicode.com/posts/1')  
         .then(response => response.json())  
         .then(data => {
    
          document.getElementById('userId').textContent = data.userId;
          document.getElementById('title').textContent = data.title;
          document.getElementById('body').textContent = data.body;
          document.getElementById('ID').textContent = data.id;
          
          document.getElementById("output").style.display = 'block';
        })
        .catch(error => console.error('Error:', error));
        
        });
     });
