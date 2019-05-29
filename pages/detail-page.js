function doesNotPassValidation(name, msg) {
    if (!name && msg) 
        {
        alert('You forgot to fill in your name!')
        return true;
        }
    if (name && !msg) 
        {
        alert('You forgot to fill in your message!')
        return true;
        }
    if (!name && !msg) 
        {
        alert('You forgot to fill in your name and message!')
        return true;
        }
    if (msg.length > 280) {
            alert('Your comment is too long')
        return true
        }
        return false
}


function nameToCapitalIfLower(string) {
       return string.replace(string.charAt(0), string.charAt(0).toUpperCase())
}


function badWordCatcher(msg) {
    if(Boolean(msg.match(/badword|Willem/gi))) {
    alert('Your language is inappropriate')
    return true
    }
    }
        

function submitComment() {
    // gather data
    const inputFieldName = document.getElementById('name')
    const name = nameToCapitalIfLower(inputFieldName.value)                
    const inputFieldMsg = document.getElementById('msg')
    const msg = inputFieldMsg.value

    // Validations
if(doesNotPassValidation(name, msg)){
       return null
       }
    
if(badWordCatcher(msg)){
    return null
}
                
     // create comment elements
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    //create comment 
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)

    //asign comment to section
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)

    // clear input fields
    inputFieldName.value = null
    inputFieldMsg.value = null

}