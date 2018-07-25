# SpotifyWig
Source code for Spotify Wig, an interactive wig which turns into a mohawk hairstyle when Spotify plays punk / rock music.

[![](https://img.youtube.com/vi/kdXKRiTPzJ8/0.jpg)](https://www.youtube.com/watch?v=kdXKRiTPzJ8)

# Usage
Access index.html and login with your Spotify account. You should see
* Song name
* Artist name
* Whether its playing or not
* Progress bar
* Artist ID
* Loudness of song
* Tempo of song

It then writes the *loudness, tempo, artist name, whether you're playing or not & artist genre* to a text file on the server, which is read by the processing script that sends serials to the Arduino code.

Depending on whether the music genre is *nu metal* or not, the Arduino applies electric currents to the Bio Metal Fibers on the wig as PWM signals.

If you are playing Linkin Park, it goes into special mode, where the Bio Metal Fiber flips up and down.

`R.I.P Chester Bennington`

#Acknowledgements
The Spotify API part is based on the [spotify-player](https://github.com/JMPerez/spotify-player) wrapper by JMPerez.
