function newQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('one').innerHTML = quotes[randomNumber];
  };
  let quotes = [
       'We do not stop playing because we grow old. We grow old because we stop playing.',
       'There are at least two kinds of games. One could be called finite, the other infinite. A finite game is played for the purpose of winning, an infinite game for the purpose of continuing the play.',
       'It is in games that many men discover their paradise.',
       'At the games end we shall see who gaines.',
       `You never win any games you don't play.`,
       `Games are all about taking risks.`,
       `Life is a game. We must keep playing the game. The more we play, the more we will understand the game of life.`,
       `Games in hand are a good thing only if you win them.`,
       `Life is more fun if you play games.`,
       `By playing games you can artificially speed up your learning curve to develop the right kind of thought processes.`,
       `In order to fully realize how bad a popular play can be, it is necessary to see it twice.`
  ];