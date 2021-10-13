'use strict'

const now = new Date()

const dayName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
const monName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

document.querySelector('.day').textContent = `${
  dayName[now.getDay()]
}, ${now.getDate()}`

document.querySelector('.month').textContent = `${monName[now.getMonth()]}`

console.log(`${dayName[now.getDay()]}, ${now.getDate()}`)
/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
const todoList = []

const todoListElement = document.querySelector('#myUL')

document.querySelector('.button').addEventListener('click', addTodo)
document.querySelector('#myInput').addEventListener('keydown', function (e) {
  if (e.keyCode == 13) {
    addTodo()
  }
})

//-------GETTING VALUES FROM INPUT TO ARRAY OF OBJECTS-------
function addTodo() {
  const todoText = document.querySelector('#myInput').value

  if (todoText == '') {
    alert('You gotta write something, honey!')
  } else {
    const todoObject = {
      id: todoList.length,
      todoText: todoText,
      isDone: false
    }

    //---WITH UNSHIFT WE ADD THE NEW ELEMENT TO THE BEGINNING OF THE ARRAY
    //--SO THAT THE NEW ITEMS SHOW UP ON TOP
    todoList.unshift(todoObject)
    let tnumber = document.querySelector('#todo-total')
    console.log(tnumber)
    tnumber.innerHTML = todoList.length
    displayTodos()
  }

  //const totalnumber = document.querySelector('.total-number').value
  //totalnumber.innerHTML = todoList.length
}

//------CHANGING THE isDone VALUE TO TRUE WHEN THE ELEMENT IS CLICKED
//------OR TO FALSE IF IT WAS TRUE BEFORE
function doneTodo(todoId) {
  const selectedTodoIndex = todoList.findIndex(item => item.id == todoId)

  todoList[selectedTodoIndex].isDone
    ? (todoList[selectedTodoIndex].isDone = false)
    : (todoList[selectedTodoIndex].isDone = true)

  function countDone() {
    let numberOfDone = 0
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].isDone === true) {
        numberOfDone = numberOfDone + 1
      }
    }
    return numberOfDone
  }

  function printCountDone() {
    let f = countDone()
    document.querySelector('#todo-done').innerHTML = f
  }

  printCountDone()

  displayTodos()
}

//----TO DELETE AN ITEM; FROM THE LIST
function deleteItem(x) {
  todoList.splice(
    todoList.findIndex(item => item.id == x),
    1
  )
  let tnumber = document.querySelector('#todo-total')
  console.log(tnumber)
  tnumber.innerHTML = todoList.length
  displayTodos()
}

//---------DISPLAYING THE ENTERED ITEMS ON THE SCREEN------
function displayTodos() {
  todoListElement.innerHTML = ''
  document.querySelector('#myInput').value = ''

  todoList.forEach(item => {
    const listElement = document.createElement('li')
    const delBtn = document.createElement('i')

    listElement.innerHTML = item.todoText
    listElement.setAttribute('data-id', item.id)

    delBtn.setAttribute('data-id', item.id)
    delBtn.classList.add('far')
    delBtn.classList.add('fa-trash-alt')
    delBtn.setAttribute('data-id', item.id)

    if (item.isDone) {
      listElement.classList.add('checked')
    }

    listElement.addEventListener('click', function (e) {
      const selectedId = e.target.getAttribute('data-id')
      doneTodo(selectedId)
    })

    delBtn.addEventListener('click', function (e) {
      const delId = e.target.getAttribute('data-id')
      deleteItem(delId)
    })

    todoListElement.appendChild(listElement)
    listElement.appendChild(delBtn)
  })
}

//tickBtn.classList.add("fas", "fa-check");
//tickBtn.setAttribute("tick-id", tick_item.id);
//liElement.appendChild(tickBtn);

//const currentDate = new Date()
//console.log(currentDate)
//const timeStamp = currentDate.getTime()
//console.log(timeStamp)

//document.querySelector('.button').addEventListener('click', function () {
//document.getElementById('task1-label').value
//document.getElementById('.task1-label').textContent = 'Sleep'
//})
/*
const myNodelist = document.getElementsByTagName("LI");
const i;
for (i = 0; i < myNodelist.length; i++){
  const span = document.createElement("SPAN")
  const txt = document.createTextNode('\u00D7')
  span.className = "close"
  span.appendChild(txt)
  myNodelist[i].appendChild(span)
}

const close = document.getElementsByClassName("close");
const i;
for (i = 0; i < close.length; i++){
  close[i].onClick = function(){
    const div = this.parentElement;
    div.style.display = "none"
  }
}

const newElement = function () {
  const li = document.createElement('li')
  const inputValue = document.getElementById('myInput').value
  const t = document.createTextNode(inputValue)
  console.log(li.appendChild(t))
}
*/
