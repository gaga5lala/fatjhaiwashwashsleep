// Saves options to chrome.storage
function save_options() {
  var interval = document.getElementById('interval').value;

  chrome.storage.local.set({
    interval: interval
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.local.get({
    interval: 5
  }, function(items) {
    document.getElementById('interval').value = items.interval;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',save_options);