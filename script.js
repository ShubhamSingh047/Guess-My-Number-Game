'use strict';


let secretNumber =Math.floor(Math.random()*20)+1;

let Score = 20; 

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input!
  if (!guess) {
    document.querySelector('.message').testContaent = '⛔️ No Number!';
  }
  //when the user will win!
  else if(guess === secretNumber){
      document.querySelector('.message').innerText = '🏆  Correct Number!';

      //this shows the number which is genreated by maths randon funtion;
      document.querySelector('.number').innerText = secretNumber;


//only in consdition is true that user win we will acess style propert for css to chnage backgroud color to green
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      // for highscore;
      if(Score > highscore){
        highscore = Score;
        document.querySelector('.highscore').innerText = highscore;
      }
  }
  //when user has gussed bigger number!
  else if(guess > secretNumber){
      if(Score >1){
        document.querySelector('.message').innerText = '😅 Guessed number is bigger!' 
        Score--;
        document.querySelector('.score').innerText = Score;
      }
    //   when we want to show lost message after 20 attemt ans display score 0 at the same time!
      else{
        document.querySelector('.message').innerText = "YOU LOST! 🤡 ";
        document.querySelector('.score').innerText = 0;
        document.querySelector('body').style.backgroundColor ='#FF0000';
      }

 //when user has gussed smaller number!
  }else if(guess < secretNumber){
      if(Score >1){
        document.querySelector('.message').innerText = '😅 Guessed number is smaller!' 
        Score--;
        document.querySelector('.score').innerText = Score;
      }
      //   when we want to show lost message after 20 attemt ans display score 0 at the same time!
      else{
        document.querySelector('.message').innerText = "YOU LOST! 🤡 ";
        document.querySelector('.score').innerText = 0;
        document.querySelector('body').style.backgroundColor ='#FF0000';
      }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    Score =20;
    secretNumber =Math.floor(Math.random()*20)+1;

     document.querySelector('.message').innerText ='Start guessing...';
     document.querySelector('.score').innerText =Score;
     document.querySelector('.number').innerText = '?';
     document.querySelector('.guess').value = '';

     document.querySelector('body').style.backgroundColor ='#000';
     document.querySelector('.number').style.width = '15rem';
});