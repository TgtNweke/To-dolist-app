window.onload=()=>{
let form=document.getElementById("addForm");
let item= document.getElementById("item")
let items=document.getElementById ("items");
let submit=document.getElementById("submit");
let editItem=null;
form.addEventListener("submit",add);
items.addEventListener("click",removeItems);
let text=document.getElementById("added")
 

function add(e){
 e.preventDefault();
 if(submit.value!="AddTask"){
editItem.target.parentNode.childNodes[0].data=item.value
  submit.value="AddTask"
  item .value=""
  text.innerHTML="task edited sucessfully"
  setTimeout(()=>{
text.style.display="none";
},2000)
  return false
  }

let newItem=item.value
if(newItem.trim()==""||newItem.trim()==null){
    return false
}
else{
item.value=""
let li=document.createElement("li")

let listEl=document.createTextNode(newItem)

let editButton=document.createElement("button");
editButton.className="Edit";
let deleteButton=document.createElement("button");
deleteButton.className="delete";
let buttontex=document.createTextNode("Edit");
let buttonDel=document.createTextNode("Delete");
editButton.appendChild(buttontex);
deleteButton.appendChild(buttonDel)
li.appendChild(listEl)
li.appendChild(editButton)
li.appendChild(deleteButton)
items.appendChild(li)
}
}
function removeItems(e){
if(e.target.classList.contains("delete")){
   if(confirm ("are you sure")){
let li= e.target.parentNode;
items.removeChild(li);
text.innerHTML="task removed sucessfully";
text.style.color="red"
setTimeout(()=>{
text.style.display="none";
},2000)

 }
 }
    if(e.target.classList.contains("Edit")){
item.value=e.target.parentNode.childNodes[0].data
submit.value="Edit"
submit.style.width="30%";
editItem =e
}
}


}
