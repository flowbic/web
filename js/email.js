function sendMail() {
  let name = document.getElementById('username').value
  let email = document.getElementById('userEmail').value
  let subject = document.getElementById('emailSubject').value
  let message = document.getElementById('emailContent').value

  postData('http://localhost:3000/mail', {
    name,
    email,
    subject,
    message,
  }).then((data) => {
    if (data.status < 400) {
      console.log(data.json()) // JSON data parsed by `response.json()` call
    } else {
      // Throw error or something 
    }
  })
}

async function postData(url = '', data = {}) {
  console.log(data)
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  return response // parses JSON response into native JavaScript objects
}
