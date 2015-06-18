chrome.alarms.create({when: Date.now(), periodInMinutes: 5});

chrome.alarms.onAlarm.addListener(function( alarm ) {
  var items = ["你媽知道你還在耍廢嗎", "聽說明天期末考?", "你new柏嘉?"];
  var item = items[Math.floor(Math.random()*items.length)];

  chrome.notifications.create({
    title: '肥宅該洗洗睡啦',
    iconUrl: 'fat.png',
    type: 'basic',
    message: item
  }, function() {});
});

chrome.notifications.onClicked.addListener(function(){
  url = 'https://www.youtube.com/watch?v=xOXDMr043sI';
  chrome.tabs.create({ url: url });
});