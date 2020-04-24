function sendEmail() {
  var username = document.getElementById('username').value
  let userEmail = document.getElementById('userEmail').value
  let emailSubject = document.getElementById('emailSubject').value
  let emailContent = document.getElementById('emailContent').value

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'kontakt@flowbic.se',
    Password: '97FB8972A86CED0C0956D21C9370DE490E05',
    To: 'kontakt@flowbic.se',
    From: 'kontakt@flowbic.se',
    Subject: username + ' ' + emailSubject,
    Body: emailContent + ' ' + userEmail,
  }).then((message) => console.log(message))
}
