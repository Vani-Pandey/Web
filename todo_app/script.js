const input=document.querySelector('input');
const todoList = document.querySelector('.todo_list');

input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        if(e.target.value===''){
            alert("No value entered");
        }
        else {
            const text=e.target.value;
            e.target.value='';
            const todo=createTodo(text);
            todoList.append(todo);
        }
    }
})
function createTodo(text){
    const todo =document.createElement('div');
    todo.classList.add('todo');
    todo.innerHTML = `<div class="section1">
                        <input type="checkbox" class="input">
                        <span class="">${text} </span>
                    </div>
                    <div class="section2">
                        <i class="up">⬆️</i>
                        <i class="trash-bin">🗑️</i>
                        <i class=" down">⬇️</i>
                    </div>`
    return todo;
}
todoList.addEventListener('click',(e)=>{
    const element =e.target;
    if(element.classList.contains('trash-bin')){
        element.parentElement.parentElement.remove();
    }
    else if(element.classList.contains('down')){
        const currtodo= element.parentElement.parentElement
        const nexttodo=currtodo.nextElementSibling;
        if(nexttodo) nexttodo.after(currtodo);
    }
    else if(element.classList.contains('up')){
        const currtodo= element.parentElement.parentElement;
        const prevtodo=currtodo.previousElementSibling;
        if(prevtodo) prevtodo.before(currtodo);
    }
    else if(element.classList.contains('input')){
        if (element.parentElement.style.textDecoration!='line-through'){
            element.parentElement.style.textDecoration='line-through';
        }
        else{
            element.parentElement.style.textDecoration='none';
        }
    }

})