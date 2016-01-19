// no credentials, no fun
if (!(localStorage.getItem('email') && localStorage.getItem('password'))) {
  alert('nooo! you must be logged-in to view this page.')
  analytics.track(
    'profile_unauthorized',
    function () { window.location.href = '/' }
  )
} else {
  analytics.identify(localStorage.getItem('email'), {
    name: localStorage.getItem('name')
  })
}

$('button').click(function (event) {
  analytics.track(
    'chose_ice_cream',
    { flavor: event.target.id },
    function () {
      alert('noted! thanks.')
    }
  )
})
