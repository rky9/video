
var vid, playbtn, seekslider, fullscreenmode;

 function intializePlayer() {
     vid = document.getElementById("my_video");
     playbtn = document.getElementById("playpausebtn");
     seekslider = document.getElementById("seekslider0");
     //playnextvid = document.getElementById("playnext");
     fullscreenmode = document.getElementById('fullscreenmode');

     playbtn.addEventListener("click", playPause, false);
     seekslider.addEventListener("change", vidSeek, false);
     vid.addEventListener('timeupdate', seektimeupdate, false);
     fullscreenmode.addEventListener( "click", expandFullscreen, false);
     document.getElementById("my_video").addEventListener("ended", switchVideos, false);
     myMove();
     
 }
 window.onload = intializePlayer;


 function playPause() {
     if (vid.paused) {
         vid.play();
         playbtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
     } else {
         vid.pause();
         playbtn.innerHTML = '<i class="fas fa-play"></i> Play';
     }
 }

 function vidSeek() {
     var seekto = vid.duration * (seekslider.value / 100);
     vid.currentTime = seekto;
 }

 function seektimeupdate() {
     var nt = vid.currentTime * (100 / vid.duration);
     seekslider.value = nt;
     
 }
 function switchVideos() {
     vidPlaying++;
     var nextvidplay= vidPlaying%3;
     var player = document.getElementById("my_video");
     var mp4Vid = document.getElementById("mp4src");
     var webmVid = document.getElementById("webmsrc");
     var oggVid = document.getElementById("oggsrc");
     player.pause();
     if (vidPlaying <= vidPlaylist.length) {
         mp4Vid.src = vidPlaylist[nextvidplay][0];;
         webmVid.src = vidPlaylist[nextvidplay][1];
         oggVid.src = vidPlaylist[nextvidplay][2];
         player.load();
         player.play();
         myMove();
         seekslider.value = 0;
         seekslider = document.getElementById('seekslider'+nextvidplay);
         seekslider.addEventListener("change", vidSeek, false);

         }
         if(vidPlaying == vidPlaylist.length){
            vidPlaying = 0;
       
         }
 }
 function myMove() {
    var elem = document.getElementById("my_video");
    var pos = -1500;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos = pos+10;
            elem.style.left = pos + 'px';
            //elem.style.top = pos + 'px';
            
        }
    }
 }
 var vidPlaylist = [
     ["video/GOPR6239_1.mov", "video/GOPR6239_1.webm", "video/GOPR6239_1.mov"], 
     ["video/Ocean_Waves_slow_motion_videvo.mov", "video/Ocean_Waves_slow_motion_videvo.mov","video/Ocean_Waves_slow_motion_videvo.mov"],
     ["http://www.w3schools.com/html/mov_bbb.mp4", "http://www.w3schools.com/html/mov_bbb.mp4", "http://www.w3schools.com/html/mov_bbb.ogg"]
 ]
 var vidPlaying = 0;
 function switchVideosNext(videoNext) {
     vidPlaying = videoNext-1;
     switchVideos();
 }




    function expandFullscreen() {
     // var vid = document.getElementById("my_video");
     if (vid.RequestFullScreen) {
         vid.RequestFullScreen();
     } 
     else if (vid.mozRequestFullScreen) {
         vid.mozRequestFullScreen();
     } else if (vid.webkitRequestFullScreen) {
         vid.webkitRequestFullScreen();
     }
 }

 // animation


