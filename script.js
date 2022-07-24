console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
  {songName: "love me like you do", filepath:"Spotify/song.mp3", coverPath: "Spotify/cover.jpg" },
  {songName: "million to one", filepath:"Spotify/song2.mp3", coverPath: "Spotify/cover2.jpg" },
  {songName: "we don't talk anymore", filepath:"Spotify/song3.mp3", coverPath: "Spotify/cover3.jpg" },
  {songName: "no scars to your beautiful life", filepath:"Spotify/song4.mp3", coverPath: "Spotify/cover4.jpg" },
  {songName: "it's okay to not be okay", filepath:"Spotify/song5.mp3", coverPath: "Spotify/cover5.jpg" },
]


  

 masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

  }
 })   
  


audioElement.addEventListener('timeupdate', ()=>{
  
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

  
 } )
}



// element is also needed (Element is not defined)
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, index)=>{
  element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id); // <-- comma, typo error
    // Not returning any value here so using array index instead
    
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `song${index+1}.mp3`; // Need backticks `` for variables to work
    // Spotify/ does not work; the songs are in the root
    // so renamed them accordingly
    // I suggest put all songs under /songs or /audio folder
    // All images under /img folder and update the urls
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    


  })

})
document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=5){
    songIndex = 0
  }
  else{
    songIndex += 1;
  }
  audioElement.src = 'Spotify/${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

})

document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
    songIndex = 0
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = 'Spotify/${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

})

