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

  function newJoke(){
     var randomNumber = Math.floor(Math.random() * jokes.length);
     document.getElementById('joke').innerHTML = jokes[randomNumber];
   };
   let jokes = [
        `Dear Math, grow up and solve your own problems.`,
        `How does the moon cut his hair?" "Eclipse it.`,
        `What did the zero say to the eight?" "That belt looks good on you.`,
        `Where do fruits go on vacation?" "Pear-is!`,
        `What's the best thing about Switzerland?" "I don't know, but the flag is a big plus.`,
        `Why did Billy get fired from the banana factory? He kept throwing away the bent ones.`,
        `Did you hear the rumor about butter? Well, I'm not going to spread it!`,
        `I don't trust stairs. They're always up to something."`,
        `How do you get a squirrel to like you? Act like a nut`,
        `Where do boats go when they're sick?" "To the boat doc.`,
        `My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!`,
        `milk`,
        `What do you call a poor Santa Claus?" "St. Nickel-less.`,
        `Dad, did you get a haircut?" "No, I got them all cut!`,
        `I only know 25 letters of the alphabet. I don't know y`,
        `What did the janitor say when he jumped out of the closet?" "Supplies!`,
        `What did one wall say to the other?" "I'll meet you at the corner.`,

   ];
