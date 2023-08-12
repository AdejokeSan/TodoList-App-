const input = document.getElementById("input");
const listContainer = document.getElementById("list-container");
const popup = document.getElementById("popup");

function displayDate(){
   let date = new Date()
   date = date.toString().split(" ");
   document.querySelector("#date").innerHTML = date[1] + "," + date[2] + " " + date[3]   
}
window.onload = function(){
    displayDate();
}



function saveList(){
    localStorage.setItem("list",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("list");
}
showList();

function add(){
    if(input.value === ''){
        popup.classList.add('open-slide');
    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = " ";
    saveList();
}
listContainer.addEventListener("click", function(event){
   if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
    saveList();
   }
   else if(event.target.tagName === "SPAN"){
    event.target.parentElement.remove();
    saveList();
   }
}, false);

function closeSlide(){
    popup.classList.remove('open-slide')
}