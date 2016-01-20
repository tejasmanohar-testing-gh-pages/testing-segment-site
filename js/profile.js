// no credentials, no fun
if (!(localStorage.getItem('email') && localStorage.getItem('password'))) {
  alert('nooo! you must be logged-in to view this page.')
  analytics.track('profile_unauthorized')
  window.location.href = '/'
} else {
  analytics.identify(localStorage.getItem('email'), {
    name: localStorage.getItem('name')
  })
}

$('button.choice').click(function (event) {
  analytics.track('chose_ice_cream', { flavor: event.target.id })
  alert('noted! thanks.')
})

$('button#logout').click(function (event) {
  localStorage.clear()
  analytics.track('profile_logout')
  window.location.href = '/'
})
