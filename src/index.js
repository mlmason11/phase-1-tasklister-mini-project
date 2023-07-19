
const tasks = document.getElementById('tasks')
// const priorityList = 

// function dateToString() {
//   const dayNum = currentDate.getDay()
//   let dayWeek=''
//   switch(dayNum) {
//     case dayNum === 0:
//       dayWeek = 'Sun'
//       break;
//     case dayNum === 1:
//       dayWeek = 'Mon'
//       break;
//     case dayNum === 2:
//       dayWeek = 'Tue'
//       break;      
//     case dayNum === 3:
//       dayWeek = 'Wed'
//       break;
//     case dayNum === 4:
//       dayWeek = 'Thu'
//       break;
//     case dayNum === 5:
//       dayWeek = 'Fri'
//       break;
//     default:
//       dayWeek = 'Sat'
//   }
//   return dayWeek
// }



// function displayTimeStamp() {
//   const timeStamp = document.createElement('span')
//   const currentDate = new Date()
//   const hours = currentDate.getHours()
//   const minutes = currentDate.getMinutes()
//   const dateNum = currentDate.getDate()
//   const month = currentDate.getMonth()
//   const year = currentDate.getFullYear()

//   if (hours < 10 && minutes < 10) {
//       timeStamp.textContent = `[0${hours}:0${minutes}] on ${month}/${dateNum}/${year}: `
//   }
//   else if (hours < 10 && minutes >= 10) {
//       timeStamp.textContent = `[0${hours}:${minutes}] on ${month}/${dateNum}/${year}: `
//   }
//   else if (hours >= 10 && minutes < 10) {
//       timeStamp.textContent = `[${hours}:0${minutes}] on ${month}/${dateNum}/${year}: `
//   }
//     else {
//         timeStamp.textContent = `[${hours}:${minutes}] on ${month}/${dateNum}/${year}: `
//   }
//   return timeStamp
// }

function displayDueDate(hours, minutes, day, month, year) {
  const dueDate = document.createElement('span')
  const currentDate = new Date()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const dateNum = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  if (hours < 10 && minutes < 10) {
      timeStamp.textContent = `[0${hours}:0${minutes}] on ${month}/${dateNum}/${year}: `
  }
  else if (hours < 10 && minutes >= 10) {
      timeStamp.textContent = `[0${hours}:${minutes}] on ${month}/${dateNum}/${year}: `
  }
  else if (hours >= 10 && minutes < 10) {
      timeStamp.textContent = `[${hours}:0${minutes}] on ${month}/${dateNum}/${year}: `
  }
    else {
        timeStamp.textContent = `[${hours}:${minutes}] on ${month}/${dateNum}/${year}: `
  }
  return timeStamp
}

const createTaskForm = document.getElementById('create-task-form').addEventListener('submit' || 'click', (event) => {
  event.preventDefault()
  console.log(event.target.taskInput.value)
  const newTask = document.createElement('li')
  const taskValue = event.target.taskInput.value
  newTask.innerText = taskValue

  // const newDueDate = document.createElement('span')
  

  const deleteButton = document.createElement('button').addEventListener('click', () => {
    newTask.remove()
  })
  deleteButton.textContent = 'X'
  newTask.append(' ' + deleteButton)

  const priority = event.target.priority.value
  if (priority === 'high') {
    newTask.style.backgroundColor = 'red'
  }
  if (priority === 'medium') {
    newTask.style.backgroundColor = 'yellow'
  }
  if (priority === 'low') {
    newTask.style.backgroundColor = 'green'
  }

  tasks.append(newTask)
})

const sortListForm = document.getElementById('sort-list-form').addEventListener('click', (event) => {
  console.log(event)
  // sortList()
  
})