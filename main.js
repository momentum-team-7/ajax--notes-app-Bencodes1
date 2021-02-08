const container = document.querySelector(".previous-notes")
const noteButton = document.querySelector(".add-note")
const notesURL = 'http://localhost:300/notes/'

let inputForm = document.querySelector('form')
let note = document.querySelector(".note-input")

window.addEventListener('submit', e => { 
    e.preventDefault()
})


function newNote() {
    let note = document.querySelector(".note-input")
    fetch (notesURL), {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            body: note.value,
            })
        .then(res => res.json())
        .then(data => {
            saveNote(data)
        })    
    }
}


// saveNote(input){
//     //update function
// }
