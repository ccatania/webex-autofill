chrome.storage.local.get(null, (res) => {
  var name = "";
  if (res.name) {
    name = res.name;
  }
  var email = "";
  if (res.email) {
    email = res.email;
  }
  document.getElementById('attendeeName').value = name;
  document.getElementById('attendeeEmail').value = email;
});