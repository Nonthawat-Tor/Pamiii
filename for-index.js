let progress = document.getElementById("progress")
     let songcake = document.getElementById("song-cake")
     let controlsIcon = document.getElementById("controlsIcon")

     songcake.onloadedmetadata = function(){
        progress.max = songcake.duration;
        progress.value = songcake.currentTime;
     }

     function playPause(){
        if(controlsIcon.classList.contains("fa-play")){
            songcake.play();
            controlsIcon.classList.add("fa-pause")
            controlsIcon.classList.remove("fa-play")
        }
        else{
            songcake.pause();
            controlsIcon.classList.remove("fa-pause")
            controlsIcon.classList.add("fa-play")
        }
     }

     if(songcake.play()){
        setInterval(()=>{
            progress.value = songcake.currentTime;
        },500);
     }

     progress.onchange = function(){
        songcake.play();
        songcake.currentTime = progress.value
        controlsIcon.classList.add("fa-pause");
        controlsIcon.classList.remove("fa-play")
     }
