chrome.storage.local.get(null, (res) => {
  var name = "";
  if (res.name) {
    name = res.name;
  }
  var email = "";
  if (res.email) {
    email = res.email;
  }

  var nameInput = document.getElementById('attendeeName') !== null ? document.getElementById('attendeeName') : frames[1].document.getElementById('mc-input-screenname');
  var emailInput = document.getElementById('attendeeEmail') !== null ? document.getElementById('attendeeEmail') : frames[1].document.getElementById('mc-input-email');
  var joinButton = document.getElementById('mwx-btn-pmr-enter-lobby') !== null ? document.getElementById('mwx-btn-pmr-enter-lobby') : frames[1].document.getElementById('mc-btn-prejoinform');

  nameInput.value = name;
  emailInput.value = email;
  if(joinButton !== null) {
    joinButton.removeAttribute('disabled');
    joinButton.className = joinButton.className.replace(/\bdisabled|btn_join_gray\b/g, '');
  }
});