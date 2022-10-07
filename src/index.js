const init = () => {
    const inputForm = document.querySelector('form'); // Here we are selecting our "form" element

    inputForm.addEventListener('submit', (event) => { // Here we are adding a "submit" event listener to "form".
    event.preventDefault(); // Here we are preventing the default thing to happen when button is submitted which would be to reload page 
    const input = document.querySelector('input#searchByID') // Here we are going after the "input" element and it's "searchbyid" child
   
    fetch(`http://localhost:3000/movies/${input.value}`) // Here we fetch the movies API
    .then(response => response.json()) // Here we convert it to a readable format by using ".json".
    .then(data => {
       
        const title = document.querySelector("section#movieDetails h4") // Here we are selecting the "h4" line witht the ID of "#movieDetails", which is inside out "section" element.
        const summary = document.querySelector("section#movieDetails p")

        title.innerText = data.title // Here we are pushing the "title" of our API into "title" (which is now inside of "h4")
        summary.innerText = data.summary // Here we are pushing the "summary" of our API into our "summmary" variable which is inside of "p"
        // console.log(data) // Here we will be able to see the data of the movies API if we click submit
    })

  })
}




document.addEventListener('DOMContentLoaded', init);