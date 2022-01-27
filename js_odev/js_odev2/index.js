const form = document.getElementById("form");
const input = document.getElementById("task");
const ul = document.getElementById("liste");
const div = document.getElementById("liveToasterr");
const div2 = document.getElementById("liveToastsuc");
const div3 = document.getElementById("todos");


form.addEventListener("submit",todoadd);
div3.addEventListener("click",deletetodo);
div3.addEventListener("click",idid);
//tamamla.addEventListener("click",idid);
document.addEventListener("DOMContentLoaded",loadtodos);

function loadtodos(){
    let todos = getstorage();
    todos.forEach((todo) => todotoUI(todo))
}


function todoadd(e){
    const newtodo = input.value.trim() ;
   if(newtodo === ''){
       //alert
       
       div.className = 'toast error show' ;
       //closeAlert();
           

   } else {
    todotoUI(newtodo);
    todotostorage(newtodo);
    div2.className = 'toast success show' ;
    //closeAlert();
   }

    e.preventDefault();
}

function todotoUI(newtodo){
    const li = document.createElement('li');
    const link = document.createElement("a");
    const btn = document.createElement("button");
    link.href = "#" ;
    link.className = "delete" ;
    link.innerHTML = `
        <i class = "fa fa-remove"></i>
    `
    btn.className = "btn btn-danger";
    btn.textContent = "TAMAMLA" ;
    li.appendChild(document.createTextNode(newtodo));
    li.appendChild(link);
    li.appendChild(btn);

    ul.appendChild(li);
    
}
   
function closeAlert(){
    const closebtn = document.getElementsByClassName("close");
    //closebtn.addEventListener("click",
    
}

function getstorage(){
    let todos ;
    if (localStorage.getItem("todos") === null){
        todos = [] ;
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos ;

}

function todotostorage(todo){
    let todos = getstorage();
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deletetodo(e){
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deletetodostorage(e.target.parentElement.parentElement.textContent);
    }
}
function deletetodostorage(li){
    let todos = getstorage() ;
    todos.forEach((todo,index) => {
        if (todo === li){
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos));
}
    

function idid(e){
    if (e.target.className === "btn btn-danger"){
        e.target.parentElement.style = "background: green";
        
    }
}