// causing errors to see data in bugsnag
analytics.ready(function () {
  x()
})

if (localStorage.getItem('email') && localStorage.getItem('password')) {
  alert('already logged-in!')
  analytics.track('home_authorized_redirect')
  window.location.href = '/profile'
}
