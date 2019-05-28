function submitComment() {
    // gather data
    const inputFieldName = document.getElementById('name')
    const name = inputFieldName.value
    const inputFieldMsg = document.getElementById('msg')
    const msg = inputFieldMsg.value
    
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
