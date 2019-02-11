    const API_KEY = 'c6bce5764efe778c7383b54d5b3297e3119f518fe4bf122b1cfece5978244525'
    var request = new XMLHttpRequest();

    request.open('GET', 'https://apifootball.com/api/?action=get_events&from=2019-02-08&to=2019-02-11&league_id=62&APIkey=' + API_KEY, true);
    request.onload = function () {

  var matchResults = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    console.log(matchResults);
    fillMatchResults(matchResults);
  } else {
    console.log('error');
  }
}

request.send();


function fillMatchResults(matchResults) {
    var app = new Vue({
        el: '#app',
        data: {
            appName: matchResults[0].match_hometeam_name + ' vs ' + matchResults[0].match_awayteam_name
        }
    })
}