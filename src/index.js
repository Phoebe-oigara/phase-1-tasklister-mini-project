document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    createToDo(e.target.new_task_description.value)
    
  })
});

function createToDo(todo){
  console.log(todo)
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'delete(X)'
  p.textContent = `${todo}  `
  p.appendChild(btn)
  document.querySelector("#list").appendChild(p);
  
}

function handleDelete(e) {
  e.target.parentNode.remove()
}