import { settings, select, classNames } from './settings.js';

import Song from './components/Song.js';
import SearchWidget from './components/SearchWidget.js';
import DiscoverSong from './components/DiscoverSong.js';
import { utils } from './utils.js';


const app = {

  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    thisApp.activatePage(idFromHash);

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }
    
    thisApp.activatePage(pageMatchingHash);
    
    for (let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        
        const id = clickedElement.getAttribute('href').replace('#', '');
        
        /* run thisApp.activatePage with id */

        thisApp.activatePage(id);

        /* change URL hash */

        window.location.hash = '#/' + id;
      });
    }
  },

  

  activatePage: function(pageId){
    const thisApp = this;

    /* add class active to matching page, remove from non-matching */
    
    for (let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    console.log('pageID', pageId);

    /* add class active to matching page, remove from non-matching */
    for (let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
    
  },

  initData: function(){
    const thisApp = this;
    
    const url = settings.db.url + '/' + settings.db.songs;
    thisApp.data = {};

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){

        thisApp.data.songs = parsedResponse;
       
        thisApp.initSongs();
        
        thisApp.initDiscoverSong();
        
        thisApp.initSearchWidget();
        utils.initGreenAudioPlayer();
      });
  },

  initSongs(){
    const thisApp = this;

    const homeWrapper = document.querySelector(select.containerOf.home);
    for(let song in thisApp.data.songs){

      new Song(thisApp.data.songs[song], homeWrapper);
    }

    // eslint-disable-next-line no-undef
    //utils.initGreenAudioPlayer();
  },

  initDiscoverSong(){
    const thisApp = this;
    new DiscoverSong(thisApp.data);
  },

  initSearchWidget(){
    const thisApp = this;
    new SearchWidget(thisApp.data);
  },



  init: function(){
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
  }
};
app.init();