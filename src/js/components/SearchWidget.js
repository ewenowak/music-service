import {select} from '../settings.js';
import { utils } from '../utils.js';
import Song from './Song.js';

class SearchWidget{
  constructor(data){
    const thisWidget = this;

    thisWidget.data = data;

    thisWidget.dom = {};

    thisWidget.getElements();
    thisWidget.initActions();
  }

  getElements(){
    const thisWidget = this;


    thisWidget.dom.input = document.querySelector(select.form.input);
    thisWidget.dom.button = document.querySelector(select.form.button);
    thisWidget.dom.searchWrapper = document.querySelector(select.containerOf.search);
  }

  initActions(){
    const thisWidget = this;

    thisWidget.dom.button.addEventListener('click', function(event){
      event.preventDefault();
      
      thisWidget.initSearch();

    });
  }

  initSearch(){
    const thisWidget = this;


    thisWidget.value = document.getElementById(select.form.input).value;
    console.log(thisWidget.value);
  
    let valueRegExp = new RegExp(thisWidget.value, 'i');
   
    for (let song in thisWidget.data.songs){
       
      let filename = thisWidget.data.songs[song].filename;
      console.log('filename', filename);

      const findAmount = filename.search(valueRegExp); 

      if(findAmount >= 0){
        new Song(thisWidget.data.songs[song], thisWidget.dom.searchWrapper);
        utils.initGreenAudioPlayer();
      }
    }
  } 
    
}
    





export default SearchWidget;