  var fixtures = [];
  var rounds = []
  var selectedRound = 3;

var fixturesComponent = new Vue({
    el: '#v-for-fixtures',
    data: {
      object: this.fixtures
    },  
    created: function () {
      this.loadFixtures();
    },
    methods: {
      loadFixtures: function(){
        fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_" + selectedRound, {
	          "method": "GET",
            "headers": {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key": "b3f656f046mshe5362581d8dedb8p115949jsn1bb5e19947d0"
              }
        })
        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }
            response.json().then(function(data) {
              data.api.fixtures.forEach(function (fixture) {
                let date = new Date(Date.parse(fixture.event_date));
                fixtures.push({
                  eventDate: date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes(),
                  homeTeamLogo: fixture.homeTeam.logo,
                  homeTeamName: fixture.homeTeam.team_name,
                  awayTeamLogo: fixture.awayTeam.logo,
                  awayTeamName: fixture.awayTeam.team_name,
                });
              });
            });
            console.log('2', this.fixtures);
          }
        )
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
            
        }
    }


  });


  new Vue({
    el: '#v-for-rounds',
    data: {
      object: this.rounds
    },
    created: function () {

      fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/rounds/524", {
	          "method": "GET",
            "headers": {
              "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
              "x-rapidapi-key": "b3f656f046mshe5362581d8dedb8p115949jsn1bb5e19947d0"
            }
      })
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          let roundIndex = 1
          response.json().then(function(data) {
            data.api.fixtures.forEach(function (round){
              rounds.push(roundIndex++);
            });
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error:', err);
      });
    },
    methods: {
      switchRound: function(value){
          selectedRound = value;
          fixturesComponent.loadFixtures();
          fixturesComponent.$forceUpdate();
      }
    }
  });