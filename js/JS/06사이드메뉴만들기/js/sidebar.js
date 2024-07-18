
//안에 넣으면 마지막에 동작한다고 한다
//화면에서 1개만 쓸 수 있음
// window.onload = function name(params) {
//   var menu = document.querySelector(".menuBtn");
//   var side = document.querySelector(".sidenav");


//   menu.addEventListener('click', function (params) {
//     console.log(121);
//   })
// }

var menu = document.querySelector(".menuBtn");
var side = document.querySelector(".sidenav");


menu.addEventListener('click', function (params) {
  console.log("클릭확인하기");

  //클릭할때마다 너비 확인
  var w = side.style.width;
  console.log("현재 width " + w);

  // if (w == "" || w == "0px") {
  //   side.style.width = "200px"; //200px로 만들기
  // } else {
  //   side.style.width = '0px'; //다시 0px로 줄어들기
  // }

  if (window.innerWidth <= 767) { // 브라우저의 너비알기, 767px이하일때
    if (w == "" || w == "0px") {
      side.style.width = "200px"; //200px로 만들기
    } else {
      side.style.width = '0px'; //다시 0px로 줄어들기
    }
  } else { // 767넘을때
    if (w == '0px') { //공백은 제외
      side.style.width = '200px';
    } else {
      side.style.width = '0px';
    }
  }


})







