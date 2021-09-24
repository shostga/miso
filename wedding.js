// const displayedImage = document.querySelector('.displayed-img');
// const overlay = document.querySelector('.overlay');
// const btn = document.querySelector('button');
const w3Row = document.querySelector(".w3-row");
// const w3Third = document.querySelector('.w3-third');

let myStrBig = '';
let myStrSmall = '';

// w3Row.insertAdjacentHTML(myStrBig);
// w3Row.innerHTML(myStrBig);

//내코드

/* Looping through images */
//     미션1. 모든 이미지를 순회하고, 각각에 대해 <img> 요소를 페이지에 
//            그 이미지를 끼워 넣는 thumb-bar <div> 내부에 삽입하기.
// 세부미션1. 5개의 모든 이미지를 순회하는 반복문 내부의 "Looping through images" 주석 아래에 
//            코드 섹션 추가하기 — 5개의 숫자를 순회할 필요가 있는데, 각 숫자는 각각의 이미지를 나타냄
// 세부미션2. 각각의 반복에서, xxx 플레이스홀더 값을 각 경우의 이미지 경로와 동일한 문자열으로 
//            대체하세요. 우리는 src 어트리뷰트의 값을 각 경우에서 이 값으로 설정하고 있습니다. 
//            각 경우에서, 이미지는 이미지 디렉토리 내부에 있고 그것의 이름은 pic1.jpg, pic2.jpg 
//            등등 이다.



for(let i=0; i< 25; i++){
    
    // for(let j=0; j<3; j++){
    //     myStrSmall += `<img src="./images/photograph/pic (${i+1}).jpg" style="width:100%" onclick="onClick(this)" alt="A princess in the forest."></img>`;
    // }
    myStrBig += `<div class="w3-third"> <img src="./wedding/pic (${i+1}).jpg" style="width:100%" onclick="onClick(this)" alt="A princess in my life."></img> </div>`;
    // myStrSmall = '';
    
}
// console.log(myStrBig);
// w3Row.setAttribute('text', myStrBig);
// w3Row.setAttribute.textContent = myStrBig;
w3Row.innerHTML = myStrBig;

// let imgTemp = [];
// for(let i=0; i < 3; i++){
//     imgTemp[i] = `./images/photograph/pic (${i+1}).jpg`;

//     const newImage = document.createElement('img');
//     newImage.setAttribute('src', imgTemp[i]);
//     w3Third.appendChild(newImage);

//     // console.log(imgTemp[i]);
// }

/* Wiring up the Darken/Lighten button */
//     미션2. onclick 핸들러를 thumb-bar <div> 내부의 각 <img>에 부착해 그것들이 클릭되었을 때, 
//            해당하는 이미지가 displayed-img <img> 요소에 표시되도록 하기.
// 세부미션1. 각각의 반복에서, 여러분은 onclick 핸들러를 현재의 newImage에 추가할 필요가 있다.
//            — 이 핸들러는 현재 이미지의 src 어트리뷰트의 값을 찾아야만 합니다. 
//            displayed-img <img>의 src 어트리뷰트 값을 매개변수로서 전달된 src 값으로 설정하라.
// 그 대신에, 섬네일 바에 하나의 이벤트 리스너를 추가할 수 있다.

// w3Third.addEventListener('click', widthChangeImage);

// function widthChangeImage(e){
//     displayedImage.setAttribute('src', e.target.getAttribute('src'));

//     // 해설코드의 방식
//     // displayedImage.src = e.target.src;
// }

//     미션3. onclick 핸들러를 <button>에 부착해 이것이 클릭되었을 때, 
//            어두워지는 효과가 전체 크기 이미지에 적용되도록 하기. 
//            이 버튼이 다시 클릭되었을 때, 어두워지는 효과는 다시 사라집니다.
// 세부미션1. <button>에 설정된 현재 클래스명을 확인 — 여러분은 다시 이것을 getAttribute()를 
//            사용함으로써 달성할 수 있습니다.
// 세부미션2. 만약 클래스명이 "dark"라면, <button> 클래스를 "light"로 (setAttribute()를 사용하여), 
//            이것의 텍스트 콘텐츠를 "Lighten"으로, 그리고 덮어씌운 <div>의 background-color를 
//            "rgba(0,0,0,0.5)"로 변경.
// 세부미션3. 만약 클래스명이 "dark"가 아니라면, <button> 클래스를 "dark"로, 이것의 텍스트 콘텐츠를 
//            다시 "Darken"으로, 덮어씌운 <div>의 background-color를 "rgba(0,0,0,0)"로 변경.
// 다음의 코드 라인은 위의 2와 3에서 규정된 변화 달성에 대한 기초를 제공합니다.
// 아래코드를 참고하시오.
// btn.setAttribute('class', xxx);
// btn.textContent = xxx;
// overlay.style.backgroundColor = xxx;

// btn.addEventListener('click', darkOrLight);

// function darkOrLight(e){
//     if(e.target.getAttribute('class') === 'dark'){
//         btn.setAttribute('class', 'light');
//         btn.textContent = 'Lighten';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//         console.log('Dark => Light');
//     }else if(e.target.getAttribute('class') === 'light'){
//         btn.setAttribute('class', 'dark');
//         btn.textContent = 'Darken';
//         overlay.style.backgroundColor = 'rgba(0,0,0,0)';
//         console.log('Light => Dark');
//     }else{
//         console.log('Something is WRONG!!');
//     }



//     // console.log(e.target.getAttribute('class'));
// }

//-------------------------------------------------------------------------


//해설코드
/* Looping through images */

// for(let i = 1; i <= 5; i++) {
//     const newImage = document.createElement('img');
//     newImage.setAttribute('src', 'images/pic' + i + '.jpg');
//     thumbBar.appendChild(newImage);
//     newImage.onclick = function(e) {
//       displayedImage.src = e.target.src;
//     }
//   }
  
//   /* Wiring up the Darken/Lighten button */
  
//   btn.onclick = function() {
//     const btnClass = btn.getAttribute('class');
//     if(btnClass === 'dark') {
//       btn.setAttribute('class','light');
//       btn.textContent = 'Lighten';
//       overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//     } else {
//       btn.setAttribute('class','dark');
//       btn.textContent = 'Darken';
//       overlay.style.backgroundColor = 'rgba(0,0,0,0)';
//     }
//   }