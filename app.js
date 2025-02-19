function changeColor() {
    document.body.style.backgroundColor = "#a3c9f7"; 
}

(function($) {

    var DAWG = [  
      {url: 'https://24.media.tumblr.com/74b74b64a621a94f5206f7f57f18e616/tumblr_mog1589t3Q1s5djgpo1_500.gif', bg: '#ebebeb'},
      {url: 'https://24.media.tumblr.com/99122b95cbb0f35c5d03460461378cfe/tumblr_moxq0knr0N1rl90hgo1_500.gif', bg: '#f4f4f4'},
      {url: 'https://25.media.tumblr.com/tumblr_lwwdi8p8Gq1qmba7lo1_250.gif', bg: '#f6f6f4'},
      {url: 'http://i1.kym-cdn.com/photos/images/original/000/550/467/036.gif'},
      {url: 'https://25.media.tumblr.com/tumblr_m41l5eBdSt1rtdf6do1_500.gif', bg: '#fcfcfc'}
    ],
        
    WEED = [
      'I keep hearing about mutha f***ing Harry Potter. Who is this mutha****er?',
      'If the ride is more fly, then you must buy.',
      'Drop It Like It\'s Hot',
      'We want people who hate to lose, like myself. Now marinate on that.',
      'When I\'m not longer rapping, I want to open up an ice cream parlor and call myself Scoop Dogg.',
      'If you stop at general math, you\'re only going to make general math money.',
      'I like going to areas where the murder rate is high and dropping it.',
      'Barack Obama makes me feel good to be a black man.'
    ]; 
  
    body = $('body'),
    quote = $('#quote'),
    dogg = $('#dogg'),
    button = $('#button');
    
    function init() {
      refresh();
      button.click(refresh);
    }
    
    function refresh() {
      setDogg();
      setQuote();
    }
    
    function whoAmI( yo ) {
      var mamma = parseInt(Math.random() * DAWG.length, 10);
      return yo[mamma];
    }
    
    function setDogg() {
      var whatIsMyName = whoAmI(DAWG);
      dogg.empty();
      dogg.append('<img src="' + whatIsMyName.url + '">');
      body.css('background', whatIsMyName.bg || 'white');
    }
  
    function setQuote() {
      quote.text(whoAmI(WEED));
    }
    
    $(function() {
      init();
    });
    
  })(Zepto);