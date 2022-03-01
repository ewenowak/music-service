export const select = {
  templateOf: {
    songWidget: '#template-song-widget'
  },

  containerOf: {
    songList: '#song-list',
    pages: '#pages',
    discover: '#discover-wrapper'
  },

  nav: {
    links: '.main-nav a',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {
  db: {
    url: '//localhost:3131',
    songs: 'songs',
    
  }
};

export const templates = {
  songWidget: Handlebars.compile(document.querySelector(select.templateOf.songWidget).innerHTML)
};

