if (localStorage.getItem('email') && localStorage.getItem('password')) {
  analytics.track(
    'already_logged_in',
    { user: localStorage.getItem('email') },
    function () { window.location.href = '/profile' }
  )
}

function success (name, email, password) {
  alert('success!')

  // save credentials locally
  localStorage.setItem('name', name)
  localStorage.setItem('email', email)
  localStorage.setItem('password', password)

  analytics.track('signup_successful', {
    name: name,
    email: email
  }, function () {
    window.location.href = '/profile'
  })
}

function failure (email) {
  alert(email + " has no '@' character")
  analytics.track('signup_invalid_email', { email: email })
}

$('#signup').submit(function (event) {
  // no HTTP requests!
  event.preventDefault()

  // input values
  var name = event.target.name.value
  var email = event.target.email.value
  var password = event.target.password.value

  // such validation
  !!~email.indexOf('@')
    ? success(name, email, password)
    : failure(email)
})
