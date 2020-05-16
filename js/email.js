function sendMail() {
  let pText = document.getElementById("contact-text")

  let name = document.getElementById('username').value
  let email = document.getElementById('userEmail').value
  let subject = document.getElementById('emailSubject').value
  let message = document.getElementById('emailContent').value
  let storeData = document.getElementById('dataStorageCheck').checked
  console.log(storeData)


  if (message, email, storeData) {
    postData('http://localhost:3000/mail', {
      name,
      email,
      subject,
      message,
      reciever: "flowbic",
      storeData
    }).then((data) => {
      if (data.status < 400) {
        pText.innerHTML = "Tack för ditt meddelande! Vi svarar så fort vi kan!";
        pText.style.color = null
        // console.log(data.json()) // JSON data parsed by `response.json()` call
      } else if (data.status < 500) {
        pText.innerHTML = "Något gick fel. Är alla fält ifyllda?";
        pText.style.color = "red"
        // Throw error or something 
      } else {
        pText.innerHTML = "Något blev knas på servern. Vi ska ge oss på att fixa felet. Sålänge kan du maila din förfrågan till: kontakt@flowbic.se";
        pText.style.color = "red"
      }
    })
  } else {
    console.log(storeData)
    pText.innerHTML = "Är alla fält ifyllda och har du godkännt datalagring?";
    pText.style.color = "red"
  }
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
