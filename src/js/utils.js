export const utils = {}; // eslint-disable-line no-unused-vars

utils.createDOMFromHTML = function(htmlString) {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

utils.initGreenAudioPlayer = function(){
  // eslint-disable-next-line no-undef
  GreenAudioPlayer.init({
    selector: '.gap', // inits Green Audio Player on each audio container that has class "player"
    stopOthersOnPlay: true
  });
};