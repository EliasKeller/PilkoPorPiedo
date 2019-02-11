chrome.runtime.onInstalled.addListener(function() {
    console.log('test');
  });

  console.log('test');
  

  var request = new XMLHttpRequest();

    request.open('GET', 'https://apifootball.com/api/?action=get_events&from=2019-02-08&to=2019-02-11&league_id=62&APIkey=c6bce5764efe778c7383b54d5b3297e3119f518fe4bf122b1cfece5978244525', true);
    request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(data);
  } else {
    console.log('error');
  }
}

request.send();