const scriptURL = 'https://script.google.com/macros/s/AKfycbyXc8B1nSJntysBoZNeuumQHHe8m0A-OElYAc_kIDlRtIoED3pafatFc7GOM6ZKCPHJ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})