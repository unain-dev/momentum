//alert("Im JS");


/**
 * 2-1
 */
function sayHello(){
    console.log("Hello!");
}

sayHello();

// 1번
//정상 실행됨
function sayHello1(name){
    console.log(`Hello ${name}`)
}

sayHello1("user1");

//2번
//undefined
const greetUser2 = sayHello1("user2");
console.log(greetUser2);

//3번 
//return이 있으므로 정상 실행됨.
function sayHello3(name){
    return`Hello ${name}`;
}

const greetUser3 = sayHello3("user3");
console.log(greetUser3);

//
const calculator = {
    //변수에 객체를 담고, 그 객체 내부에 함수 선언???
    plus : function(a, b){
        return a+b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);





/**
 * 2-2. JS DOM Function
 */

const title = document.getElementById("hello");

console.log(title);

title.innerHTML = "Hi from JS"




/**
 * 2-3. modifiying js
 */
console.log(title.dir); // title이 가진 객체들을 모두 볼 수 있음.
title.style.color = "red"; // style도 바꿀 수 있음.

//tagName : h1, h2같은 것들.
//querySelector : 노드의 첫번째 자식을 반환
const title2 = document.querySelector(".title2");
title2.style.color="blue";
document.title="I own you now"



/**
 * 2-4. event and event handler
 */
// event 객체를 자동으로 인자로 전달해줌.
function handleResize(event){
    console.log(event);
    //console.log("resizing....");
}

//해당 이벤트와, 이벤트리스너와 핸들러를 연결. 핸들러를 연결할 때에는 함수를 호출 형식으로 지정해주는게 아님.
//handleResize()면 지금 당장 호출하라는 게 되므로 그렇게 하면 안됨.
window.addEventListener("resize", handleResize);

//한번 클릭하면 더이상 이벤트가 발생하지 않음.
function handleClick(){
    title.style.color = "pink";
}
window.addEventListener("click", handleClick);

/**
 * 2-
 */