import "./style.css";

window.onload = () => {
  //write your code here
  let imgElement = document.querySelector("#excuseImg");

  let generateExcuse = () => {
    let who = ["The cat", "His turtle", "Her bird", "The bear"];
    let action = ["ate", "peed", "crushed", "broke", "burned", "lost"];
    let what = ["my homework", "the keys", "the car", "the house", "my phone"];
    let when = [
      "before the class",
      "right on time",
      "at dawn",
      "during my lunch",
      "while I was asleep"
    ];
    let pic = [
      "https://cdn.pixabay.com/photo/2017/08/23/08/33/cats-eyes-2671903_1280.jpg",
      "https://cdn.pixabay.com/photo/2015/11/12/10/45/animal-1039970_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg"
    ];

    let getRandomElement = array => {
      return array[Math.floor(Math.random() * array.length)];
    };

    let randomWho = getRandomElement(who);
    let randomAction = getRandomElement(action);
    let randomWhat = getRandomElement(what);
    let randomWhen = getRandomElement(when);

    let selectedPic = pic[who.indexOf(randomWho)];
    imgElement.src = selectedPic;

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
