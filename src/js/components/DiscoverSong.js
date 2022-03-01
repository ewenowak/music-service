import Song from './Song.js';

class DiscoverSong { 
  constructor(data){
    const thisDiscoverSong = this;

    thisDiscoverSong.data = data;
    thisDiscoverSong.data.songs = data.songs;
    
    thisDiscoverSong.randomSong(data);
      
  }
  
  randomSong(){
    const thisDiscoverSong = this;

    const songsNumber = thisDiscoverSong.data.songs.length;
    
    
    const randomNumber = Math.floor(Math.random() * songsNumber);

    new Song(thisDiscoverSong.data.song[randomNumber]);


  }
 

  
}

export default DiscoverSong;