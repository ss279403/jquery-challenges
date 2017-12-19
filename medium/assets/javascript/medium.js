/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function () {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function () {

    const reset = $("#reset");
    const teamoneShoot = $("#teamone-shoot");
    const teamtwoShoot = $("#teamtwo-shoot");

    const teamoneNumShots = $("#teamone-numshots");
    const teamtwoNumShots = $("#teamtwo-numshots");
    const numResets = $("#num-resets");

    const teamoneGoals = $("#teamone-numhits");
    const teamtwoGoals = $("#teamtwo-numhits");

    const body = $("#body");
    const left = $(".left");
    const right = $(".right");
    const resets = $(".resets");
    const gifs = $("#gifs");

    const cheer = new Audio('sounds/Cheers.m4a');
    const aww = new Audio('sounds/Awww.m4a');
    const fanfare = new Audio('sounds/Fanfare.m4a');
    fanfare.volume = 0.1;
    const champions = new Audio('sounds/Champions.m4a');

    fanfare.play();

    function getRandom() {
      return Math.random();
    }

    teamoneShoot.click(function () {

      teamoneNumShots.html(parseInt(teamoneNumShots.html()) + 1);
      if (getRandom() > 0.5) {
        teamoneGoals.html(parseInt(teamoneGoals.html()) + 1);
        left.css("background-color", "red");
        body.css("backgroundImage", 'url("https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/238px-Columbus_Blue_Jackets_logo.svg.png")');
        gifs.css("backgroundImage", 'url("https://media.giphy.com/media/3o84TPzhfmcoQgVoNa/giphy.gif")');
        resets.css("background-color", "black");
        resets.css("color", "white");
        cheer.play();

      } else {
        body.css("background-color", "white");
        body.css("backgroundImage", "none")
        gifs.css("backgroundImage", 'url("https://media.giphy.com/media/5qThrC6JttNHa/giphy.gif")');
        left.css("background-color", "white");
        right.css("background-color", "white");
        resets.css("background-color", "white");
        resets.css("color", "black");
        aww.play();
      }

      if (teamoneGoals.html() >= 5) {
        champions.play();
        gifs.css("backgroundImage", 'url("https://media.giphy.com/media/26xBKbWoZWqbWbrlm/giphy.gif")');
        teamoneGoals.html("WINS with 5 Goals!");
        teamtwoGoals.html("LOSER!!!!");
        teamoneShoot.off('click');
        teamtwoShoot.off('click');
      }

    })

    teamtwoShoot.click(function () {
      teamtwoNumShots.html(parseInt(teamtwoNumShots.html()) + 1);
      if (getRandom() > 0.5) {
        teamtwoGoals.html(parseInt(teamtwoGoals.html()) + 1);
        right.css("background-color", "yellow");
        body.css("backgroundImage", 'url("https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/131px-Pittsburgh_Penguins_logo_%282016%29.svg.png")');
        gifs.css("backgroundImage", 'url("https://media.giphy.com/media/xUA7bhZz9UJULaTYeA/giphy.gif")');
        resets.css("background-color", "black");
        resets.css("color", "white");
        cheer.play();
      } else {
        body.css("background-color", "white");
        body.css("backgroundImage", "none")
        gifs.css("backgroundImage", 'url("https://media.giphy.com/media/5qThrC6JttNHa/giphy.gif")');
        right.css("background-color", "white");
        left.css("background-color", "white");
        resets.css("background-color", "white");
        resets.css("color", "black");
        aww.play();
      }

      if (teamtwoGoals.html() >= 5) {
        champions.play();
        gifs.css("backgroundImage", 'url("https://media.giphy.com/media/xUA7b2aspOf28pPDTq/giphy.gif")');
        teamoneGoals.html("LOSER!!!!");
        teamtwoGoals.html("WINS with 5 Goals!");
        teamoneShoot.off('click');
        teamtwoShoot.off('click');
      }

    })

    reset.click(function () {
      numResets.html(parseInt(numResets.html()) + 1);
      teamoneNumShots.html(0);
      teamtwoNumShots.html(0);
      teamoneGoals.html(0);
      teamtwoGoals.html(0);
      body.css("background-color", "white");
      body.css("backgroundImage", "none");
      gifs.css("backgroundImage", "none");
      right.css("background-color", "white");
      left.css("background-color", "white");
      resets.css("background-color", "white");
      resets.css("color", "black");
      fanfare.play();
      teamoneShoot.click(function () {

        teamoneNumShots.html(parseInt(teamoneNumShots.html()) + 1);
        if (getRandom() > 0.5) {
          teamoneGoals.html(parseInt(teamoneGoals.html()) + 1);
          left.css("background-color", "red");
          body.css("backgroundImage", 'url("https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Columbus_Blue_Jackets_logo.svg/238px-Columbus_Blue_Jackets_logo.svg.png")');
          gifs.css("backgroundImage", 'url("https://media.giphy.com/media/3o84TPzhfmcoQgVoNa/giphy.gif")');
          resets.css("background-color", "black");
          resets.css("color", "white");
          cheer.play();

        } else {
          body.css("background-color", "white");
          body.css("backgroundImage", "none")
          gifs.css("backgroundImage", 'url("https://media.giphy.com/media/5qThrC6JttNHa/giphy.gif")');
          left.css("background-color", "white");
          right.css("background-color", "white");
          resets.css("background-color", "white");
          resets.css("color", "black");
          aww.play();
        }

        if (teamoneGoals.html() >= 5) {
          champions.play();
          gifs.css("backgroundImage", 'url("https://media.giphy.com/media/26xBKbWoZWqbWbrlm/giphy.gif")');
          teamoneGoals.html("WINS with 5 Goals!");
          teamtwoGoals.html("LOSER!!!!");
          teamoneShoot.off('click');
          teamtwoShoot.off('click');
        }

      })
      teamtwoShoot.click(function () {
        teamtwoNumShots.html(parseInt(teamtwoNumShots.html()) + 1);
        if (getRandom() > 0.5) {
          teamtwoGoals.html(parseInt(teamtwoGoals.html()) + 1);
          right.css("background-color", "yellow");
          body.css("backgroundImage", 'url("https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg/131px-Pittsburgh_Penguins_logo_%282016%29.svg.png")');
          gifs.css("backgroundImage", 'url("https://media.giphy.com/media/xUA7bhZz9UJULaTYeA/giphy.gif")');
          resets.css("background-color", "black");
          resets.css("color", "white");
          cheer.play();
        } else {
          body.css("background-color", "white");
          body.css("backgroundImage", "none")
          gifs.css("backgroundImage", 'url("https://media.giphy.com/media/5qThrC6JttNHa/giphy.gif")');
          right.css("background-color", "white");
          left.css("background-color", "white");
          resets.css("background-color", "white");
          resets.css("color", "black");
          aww.play();
        }

        if (teamtwoGoals.html() >= 5) {
          champions.play();
          gifs.css("backgroundImage", 'url("https://media.giphy.com/media/xUA7b2aspOf28pPDTq/giphy.gif")');
          teamoneGoals.html("LOSER!!!!");
          teamtwoGoals.html("WINS with 5 Goals!");
          teamoneShoot.off('click');
          teamtwoShoot.off('click');
        }

      })
    })

  })

})();
