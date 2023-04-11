//------------------ Question no 1------------------
// let addVal = add(5); 

// function add (x) {
//     return function (y) {
//         return x+y;
//     }
// }
// console.log(addVal(5));  
// console.log(addVal(15)); 

 


//------------------------Question no: 2-------------

// function searchArray (arr, value) {
//     if(arr.length === 0){
//         return false;

//     }
//     if (arr[0]===value) {
//         return true;
//     }else {
//         return searchArray(arr.slice(1),value);
//     }
// }
// let myArray = [1,2,3,4,5,6,7,8,9,10]
// let searchVal = 5;
// let valueFound = searchArray(myArray,searchVal);
//  if (valueFound) {
//      console.log("True ")
//  } else {
//      console.log("False")

//  }

//------------------ Question no 3------------------
// function addparagraph (text) {
//     let para = document.createElement("p");
//     let paragrapghText = document.createTextNode(text);
//     para.appendChild(paragrapghText)
//     document.body.appendChild(para)
// }



//------------------ Question no 4------------------

// function addList (text) {
//     let ul = document.getElementById("List");
//     let li = document.createElement("li");
//     let itemText = document.createTextNode(text);

//     ul.appendChild(li);
// }


//------------------ Question no 5------------------

// let myElemet = document.getElementById('myElement');
// changeBackgroundColor (myElemet ,"Red");
//  function changeBackgroundColor (element, color) {
//      element.style.backgroundColor = color;
//  }

   
// -- ------------------ Question no 6------------------ 

// function SaveObject (key , object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }
// let myObject = {
//     name : 'sahil',
//     age:30,
// };
// SaveObject('myObject', myObject);

   
// -- ------------------ Question no 7------------------ 


// function getObject (key) {
//     let jsonString = localStorage.getItem(key);
//     let Object = JSON.parse(jsonString)
//     return Object;
// }
// let myobject = {name: "sahil", age:20};
// localStorage.setItem('myKey', JSON.stringify(myobject));
// let retrivedObject = getObject ('myKey')
// console.log(retrivedObject);



   
// -- ------------------ Question no 8------------------ 

// function object (obj) {
//     for (let prop in obj) {
//         localStorage.setItem(prop, obj[prop])
//     }
//     let newObj = {};
//     for (let i =0;i  < localStorage.length;i++) {
//         let prop = localStorage.key(i);
//         newObj[prop] = localStorage.getItem(prop);
//     }
//     return newObj;
// }

// let MyObj = {
//     name:'sahil',
//     age:'20'
// }
// let saveObj = object(MyObj);
// console.log(saveObj)




let myObj = {
    name:'sahil',
    age:20
}