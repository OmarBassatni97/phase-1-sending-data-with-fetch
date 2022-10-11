// Add your code here
const body = document.querySelector('body')
const p = document.createElement('p')
body.appendChild(p)
const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })

    }).then(response => response.json())
    .then(data => p.innerHTML = data.id)
    .catch(error => p.innerHTML = error)
}

 