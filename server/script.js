var currentLoudness = 0, currentTempo = 0, currentName, currentState, currentGenre;

var mainContainer = document.getElementById('js-main-container'),
    loginContainer = document.getElementById('js-login-container'),
    loginButton = document.getElementById('js-btn-login'),
    background = document.getElementById('js-background');

    var spotifyPlayer = new SpotifyPlayer({
      exchangeHost: 'https://dice-spotify-player.herokuapp.com'
    });

var template = function (data) {
  currentName = data.item.artists[0].name;
  currentState = data.is_playing;
  return `
    <div class="main-wrapper">
      <img class="now-playing__img" src="${data.item.album.images[0].url}">
      <div class="now-playing__side">
        <div class="now-playing__name">${data.item.name}</div>
        <div class="now-playing__artist">${data.item.artists[0].name}</div>
        <div class="now-playing__status">${data.is_playing ? 'Playing' : 'Paused'}</div>
        <div class="progress">
          <div class="progress__bar" style="width:${data.progress_ms * 100 / data.item.duration_ms}%"></div>
        </div>
        <div class="now-playing__feature">Artist ID: ${data.item.artists[0].id}</div>
        <div class="now-playing__feature">Loudness: ${currentLoudness}</div>
        <div class="now-playing__feature">Tempo: ${currentTempo}</div>
      </div>
    </div>
    <div class="background" style="background-image:url(${data.item.album.images[0].url})"></div>
  `;
};

var template2 = function (data) {
    currentLoudness = data.loudness;
    currentTempo = data.tempo;
    var form = new FormData();
    var sendData = currentLoudness + "," + currentTempo + "," + currentName + "," + currentState + "," + currentGenre;
    form.append("loudness" , sendData);
    var xhr = new XMLHttpRequest();
    xhr.open( 'post', 'write.php', true );
    xhr.send(form);
    console.log("POST form sent");
   };

var template3 = function (data) {
  currentGenre = "other";
  for (var j in data.genres) {
       console.log(data.genres[j]);
       if (data.genres[j]=="nu metal") currentGenre = "nu metal";
   }
  };

spotifyPlayer.on('update', response => {
  mainContainer.innerHTML = template(response);
});

spotifyPlayer.on('update2', response => {
  template2(response);
});

spotifyPlayer.on('update3', response => {
  template3(response);
});

spotifyPlayer.on('login', user => {
  if (user === null) {
    loginContainer.style.display = 'block';
    mainContainer.style.display = 'none';
  } else {
    loginContainer.style.display = 'none';
    mainContainer.style.display = 'block';
  }
});

loginButton.addEventListener('click', () => {
    spotifyPlayer.login();
});

spotifyPlayer.init();
