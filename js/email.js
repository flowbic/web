function sendMail() {
  var username = document.getElementById('username').value
  let userEmail = document.getElementById('userEmail').value
  let emailSubject = document.getElementById('emailSubject').value
  let emailContent = document.getElementById('emailContent').value

  postData('https://example.com/answer', {
    username: username,
    userEmail: userEmail,
    emailSubject: emailSubject,
    emailContent: emailContent,
  }).then((data) => {
    console.log(data) // JSON data parsed by `response.json()` call
  })
}

async function postData(url = '', data = {}) {
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
  return response.json() // parses JSON response into native JavaScript objects
}


function sendMolnyForm() {
  var name = document.getElementById('username').value
  let email = document.getElementById('userEmail').value
  let message = document.getElementById('emailContent').value
  let phone = document.getElementById('phoneNumber').value
  fetch('https://forms.molny.se/post/9SENCt', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, // required
      email, // required
      message, // required
      phone, // you can add as many more fields as you want
    }),
  })
}