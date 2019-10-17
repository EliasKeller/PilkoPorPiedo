  var fixtures = [];

  new Vue({
    el: '#v-for-object',
    data: {
      object: this.fixtures
    },
    created: function () {
      var data;

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          data = this.response;
          console.log(data)

          data.api.fixtures.forEach(function (fixture) {
            let date = new Date(Date.parse(fixture.event_date));
            fixtures.push({
              eventDate: date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes(),
              homeTeamLogo: fixture.homeTeam.logo,
              homeTeamName: fixture.homeTeam.team_name,
              awayTeamLogo: fixture.awayTeam.logo,
              awayTeamName: fixture.awayTeam.team_name,
            })
          });    

        }
      });

      xhr.responseType = 'json';
      xhr.open("GET", "https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_1");
      xhr.setRequestHeader("x-rapidapi-host", "api-football-v1.p.rapidapi.com");
      xhr.setRequestHeader("x-rapidapi-key", "b3f656f046mshe5362581d8dedb8p115949jsn1bb5e19947d0");

      xhr.send(data);
    }
  });



