chrome.storage.local.get(null, (res) => {
  var name = "";
  if (res.name) {
    name = res.name;
  }
  var email = "";
  if (res.email) {
    email = res.email;
  }

  if (document.getElementById('attendeeName') !== null && document.getElementById('attendeeEmail') !== null) {
    document.getElementById('attendeeName').value = name;
    document.getElementById('attendeeEmail').value = email;
  } else if (document.getElementById('mc-input-screenname') !== null && document.getElementById('mc-input-email') !== null) {
    document.getElementById('mc-input-screenname').value = name;
    document.getElementById('mc-input-email').value = email;
  }
});