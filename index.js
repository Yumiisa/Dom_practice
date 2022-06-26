//examine the document object/document.dir(document)
console.log(document.domain)
let myPrac=document.getElementById("header-title")
myPrac.textContent="hi"
myPrac.innerText='pay attention to style'
myPrac.innerHTML='<h2>my fate </h2>'
console.log(myPrac.style.backgroundColor='red')

//innerHtml, innerText, textContent all used to change html content
//changing styles

getElementBYClassItems
let myLists=document.getElementsByClassName('list-group-item');
for(const i of myList){
    console.log(i.style.backgroundColor='red')
}
//get element by tag name
let myList=document.getElementsByTagName('li');
for(const i of myList){
    console.log(i.style.color='blue')
}
//queryselector
let list=document.querySelector('li')
console.log(list.style.border='1px solid red')

let theList=document.querySelector('.list-group-item:nth-Child(2)');
console.log(theList.style.color='red')
//queryselector all
let titles=document.querySelectorAll('.title');
for(const i of titles){
    console.log(i.textContent='hello')
}
let itemList=document.querySelector('#items')
console.log(itemList.parentNode.parentNode.style.background='red')
//parent element
let itemLists=document.querySelector('#items')
console.log(itemLists.parentElement.parentElement.style.background='blue')
//childNode
let item=document.querySelector('#items')
console.log(item.children)
//firstChild
console.log(item.firstChild)
//first element child
console.log(item.firstElementChild.textContent="hello world")
console.log(item.lastElementChild.textContent='We value you')
//sibling
console.log(item.nextSibling)
console.log(item.nextElementSibling)
//previous sibling
console.log(item.previousElementSibling.style.color='grey')

//create element
let newDiv=document.createElement('div')
newDiv.className='hello'
newDiv.id='hi'
newDiv.setAttribute('title', 'hello div')
//create text node
let newDivText=document.createTextNode('hello there')
newDiv.appendChild(newDivText)

//adding created element to dom
let container=document.querySelector('.container' )
let h2=document.querySelector('h2 .card card-body')
console.log(newDiv.style.color='blue')
container.insertBefore(newDiv, h2)
console.log(container)
let button=document.getElementById('button');
button.addEventListener('click',buttonCLicked)
function buttonCLicked(){
    document.getElementById('main-header').textContent='changed'
    document.getElementById('main').style.background='grey'
}
let btn=document.getElementById('button');
btn.addEventListener('click',btnClicked)
function btnClicked(e){
    console.log(e.target)
    console.log(e.target.id)
    console.log(e.target.classList)
    let output=document.getElementById('output')
    output.innerHTML='<h3>'+e.target.id+'<h3>'
    console.log(e.type)
    console.log(e.clientX)
    console.log(e.offsetX)
    console.log(e.offsetY)
    console.log(e.altKey)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
    output.innerHTML='<h3> MouseX: ' +e.offsetX+' </h3><h3>MouseY: '+e.offsetY+ '</h3>'

}
function runEvent(e){
   console.log(e)
}
let butto=document.getElementById('button')
butto.addEventListener('click',runEvent);
butto.addEventListener('mousedown',runEvent);
butto.addEventListener('dblclick',runEvent);
butto.addEventListener('mouseup',runEvent);
let box=document.getElementById('box')
box.addEventListener('mouseenter', runEvent);//element itself
box.addEventListener('mouseleave', runEvent);
box.addEventListener('mouseover', runEvent);//any inner element
box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);
function runEvent(e){
    console.log('event type: '+e.type)
    box.style.backgroundColor="rgb("+e.offsetX+", "+e.offsetY+", 40)"
}
let itemInput=document.querySelector('input[type="text"]')
let form=document.querySelector('form')
itemInput.addEventListener('keydown', runEvents)
itemInput.addEventListener('keypress', runEvents)

function runEvents(e){
    console.log(e.target.value)
    console.log(document.getElementById('output').innerHTML='<h3>' +e.target.value+ '</h3>')
}
//focus and blur events
itemInput.addEventListener('focus', runEvents)
itemInput.addEventListener('blur', runEvents)
itemInput.addEventListener('cut', runEvents)
itemInput.addEventListener('paste', runEvents)
let select=document.querySelector("select")
select.addEventListener('change', runEven)
form.addEventListener('submit', runEven)
function runEven(e){
    e.preventDefault()
    console.log('event type: '+e.type)
    console.log(e.target.value)
}


//itemInput.addEventListener('input', runEvents)
//function runEvents(e){
  // console.log('event type: '+e.type)
//}
