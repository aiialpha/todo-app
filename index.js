let form1 = document.getElementById("form1");
let theField = document.getElementById("todo");
let list1 = document.getElementById("lists");
let adder = document.querySelector("#adder");
let checkBox = ""
let Arr = [];
let theEdit = "";
let aa ="";
let aaa = "" ;
let inp = "";
let aIndex ="";
theField.focus();

// checkBox.addEventListerner('click', ()=>{})
document.addEventListener('onload', getValues())
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  theField.focus();
  if (theField.value != "" && adder.value == "Add") {
    addToList(theField.value);

  } else if (adder.value == "Edit" && theField.value != "") {
    edited(theField.value);
    // console.log(theField.value)
    theEdit =theField.value
    adder.value = "Add";
  } else {
    alert("Please add an Input cannot add nothing to do");
  }
});

// checkBox.addEventListener('click', () => {
//   let test = document.querySelector("li").style
//   console.log(test)
// })

function addToList(x) {

  Arr.push(x)
  let myHtml = `<div class='added'> <li>${x}</li> <span><button onclick=del(this)>Remove</button> <input type='Button' onclick=edit(this) value="Edit"></button></span> </div>`;
  list1.insertAdjacentHTML("beforeend", myHtml);
      // Arr.push(list1)
  theField.value = ""
  
  theField.focus();
  // console.log('new todo added')
}

function edited(x) {

  inp.value = "Edit";
  aa = theField.value
  Arr.splice(aIndex,1,aa)
  theEdit.textContent = x
  theField.value = ""

}

function del(element) {
  element.parentNode.parentNode.remove();
  let value = element.parentNode.parentNode.firstChild.nextSibling.textContent
  theField.focus();
  for (let x of Arr){
    if (x == value){
      let ind = Arr.indexOf(value)
      Arr.splice(ind,1)
      // console.log(Arr)
    }else{
      // console.log('not    found')
    }
    // console.log(x);
    // return
  }
  // Arr
  // console.log("a todo removed")
}

function edit(a) {
  inp = a
  // console.log(Arr);
  theEdit = a.parentNode.parentNode.firstChild.nextSibling;
  aa = theEdit.textContent
  aIndex = Arr.indexOf(aa)
  theField.value  = theEdit.textContent;
  theField.focus();
  if (adder.value == "Add") {
    adder.value = "Edit";
    a.value = "X";
    aa.contentEditable=true
    // inp = a
    // console.log(aaa)
  } else {
    adder.value = "Add";
    a.value = "Edit";
    inp = "Edit"
    theField.value = "";
  }
}
function save(){
  // alert(JSON.stringify(Arr))
  localStorage.setItem('load',JSON.stringify(Arr))
  Arr = JSON.parse(localStorage.getItem('load'))
  // console.log(Arr)
}

function getValues(){
  let values = localStorage.getItem('load')
  Arr = JSON.parse(values)
  let pValues =  JSON.parse(values)
  if (yourArray !== null && yourArray !== undefined) {
  pValues.forEach(element => {
    let myHtml = `<div class='added'> <li>${element}</li> <span><button onclick=del(this)>Remove</button> <input type='Button' onclick=edit(this) value="Edit"></button></span> </div>`;
    list1.insertAdjacentHTML('beforeend', myHtml)
  });
}else{
  console.log('The array is null or undefined.')
}

}