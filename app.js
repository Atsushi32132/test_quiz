//クイズの内容
const quiz = [
  {
   question:'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
   answers: [
    'スーパーファミコン',
    'プレイステーション2', 
    'ニンテンドースイッチ', 
    'ニンテンドーDS'
  ],
correct : 'ニンテンドーDS'
},{
  
  question:'糸井重里が企画に関わった、任天堂の看板ゲームと言えば？',
answers: [
 'MOTHER2',
 'スーパーマリオブラザーズ3', 
 'スーパードンキーコング', 
 '星のカービィ'
],
correct : 'MOTHER2'

},{

  question:'ファイナルファンタジーⅣの主人公の名前は？',
answers: [
 'フリ二オール',
 'クラウド', 
 'ティーダ', 
 'セシル'
],
correct : 'セシル'

},{
  question:'しろたんの誕生日は？',
  answers: [
    '8/8',
    '9/24',
    '3/17',
    '2/14'
],
correct: '8/8'
}]


const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonlength = $button.length;

//クイズの問題文、選択肢を定義

const setupQuiz = () => {
  document.getElementById ('js-question').textContent= quiz[quizIndex].question;

let buttonIndex = 0;
while(buttonIndex <  buttonlength){

  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
 }
}
setupQuiz ();



const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！！');
    score++;
      }else {
    window.alert('不正解！'+'正解は'+ quiz[quizIndex].correct);
      }
quizIndex++;

if(quizIndex <quizlength){
setupQuiz();
}else{
  window.alert('終了！あなたの正解数は'+ score + '/' + quizlength+ 'です！');
}

};

//各選択肢について選択された場合の正誤を判断
let handlerIndex = 0;

while (handlerIndex < buttonlength){

  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });

  handlerIndex++;
}

//length は個数！、~~indexは0から始まる
//$button[0~]
