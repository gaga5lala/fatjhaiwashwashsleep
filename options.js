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

function switchAlarms() {
  var status = document.getElementById('switchAlarms').value;
  chrome.storage.local.set({
    status: status
  }, function() {
    document.getElementById('switchAlarms').value = (status == 'start' ? 'stop' : 'start');
  });
}

function restore_options() {
  chrome.storage.local.get({
    interval: 5,
    status: 'start'
  }, function(items) {
    document.getElementById('interval').value = items.interval;
    document.getElementById('switchAlarms').value = (items.status == 'start' ? 'stop' : 'start');
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('switchAlarms').addEventListener('click', switchAlarms);
document.getElementById('save').addEventListener('click',save_options);