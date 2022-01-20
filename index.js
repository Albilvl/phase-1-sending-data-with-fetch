// Add your code here
function submitData(name, email){
   return fetch (`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'       
        },
        body : JSON.stringify({
            name,
            email
        })
    })
    .then (res => res.json())
    .then (data => document.body.textcontent = data[`id`])
    .catch((error) =>document.body.textContent =error.message)
}
