{/*      <ul> 
 <div class="todo ">
<li>
    Tapshiriq 1
</li>
<div class="buttonlar">
    <button><i class="fa-solid fa-check-double"></i></button>
    <button><i class="fa-solid fa-trash-can"></i></button>
</div>
</div>     </ul>*/}


const form=document.querySelector("form")
const input=document.querySelector("input")
const plusIcon=document.querySelector(".addbtn")
const todolar=document.querySelector("#todolar")


plusIcon.addEventListener("submit",addTodo)
function addTodo(e){
    e.preventDefault()
// ! DOM ELEMENTLERIN YARADILMASI

const ulElementi=document.createElement("ul")
const todoDivi=document.createElement("div")
todoDivi.classList.add("todo")

const liElementi=document.createElement("li")
liElementi.innerText= input.value
todoDivi.appendChild(liElementi)

const buttonlarinOlduguDiv=documnet.createElement("div")
buttonlarinOlduguDiv.classList.add('buttonlar')

const editBtn=document.createElement("button")
editBtn.innerHTML= '<i class="fa-solid fa-check-double"></i>'

buttonlarinOlduguDiv.appendChild(editBtn)



const deleteBtn=document.createElement("button")
deleteBtn.innerHTML= '<i class="fa-solid fa-trash-can"></i>'

buttonlarinOlduguDiv.appendChild(deleteBtn)
todoDivi.appendChild(buttonlarinOlduguDiv)


ulElementi.appendChild(todoDivi)



todolar.appendChild(ulElementi)


input.value=' '


}