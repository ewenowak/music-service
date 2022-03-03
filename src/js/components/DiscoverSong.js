import { select } from '../settings.js';
//import { utils } from '../utils.js';
import Song from './Song.js';

class DiscoverSong { 
  constructor(data){
    const thisDiscoverSong = this;

    thisDiscoverSong.data = data;
   
    
    thisDiscoverSong.randomSong();
      
  }
  
  randomSong(){
    const thisDiscoverSong = this;

    const songsNumber = thisDiscoverSong.data.songs.length;
    
    
    const randomNumber = Math.floor(Math.random() * songsNumber);
    const discoverWrapper = document.querySelector(select.containerOf.discover);
    
    new Song(thisDiscoverSong.data.songs[randomNumber], discoverWrapper);


    // eslint-disable-next-line no-undef
    //utils.initGreenAudioPlayer();

  }
}

export default DiscoverSong;