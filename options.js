function saveOptions(e) {
  chrome.storage.local.set({
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value
  });
}

function restoreOptions() {
  chrome.storage.local.get("name", (res) => {
    document.querySelector("#name").value = res.name || "";
  });
  chrome.storage.local.get("email", (res) => {
    document.querySelector("#email").value = res.email || "";
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);