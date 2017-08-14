var MusicBarUpdating = false;

function MusicbarUpdate()
{
  var soundSource = document.querySelector('.Music-Source');
  var soundBar = document.querySelector('.Music-Bar');

  if(soundSource.currentTime == soundSource.duration)
  {
    soundBar.style.width = "0%";
    MusicPause();
    return;
  }

  if(!MusicBarUpdating) { return; }
  
	soundBar.style.width = soundSource.currentTime / soundSource.duration * 100 + "%";
  setTimeout(function(){ MusicbarUpdate(); }, 10);
}

function MusicPlay()
{
  var soundSource = document.querySelector('.Music-Source');
  var playButton = document.querySelector('.Music-Button-Play');
  var pauseButton = document.querySelector('.Music-Button-Pause');

  soundSource.play();
  pauseButton.style.display = "block";
  playButton.style.display = "none";
  MusicBarUpdating = true;
  MusicbarUpdate();
}

function MusicPause()
{
  var soundSource = document.querySelector('.Music-Source');
  var playButton = document.querySelector('.Music-Button-Play');
  var pauseButton = document.querySelector('.Music-Button-Pause');

  soundSource.pause();
  pauseButton.style.display = "none";
  playButton.style.display = "block";
  MusicBarUpdating = false;
}
