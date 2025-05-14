
let btn = document.getElementById("submit");
let items = document.getElementById("items")
// console.log(btn);



btn.addEventListener("click",function(e){
    e.preventDefault()
    let input = document.getElementById("item").value;
    
    
    if(input.length === 0){
        console.log("Please fill the form");
    }else {
        let li = document.createElement("li")
        li.className="list-group-item"
        let button = document.createElement("button")
        button.className="btn btn-danger btn-sm float-right delete"
        button.appendChild(document.createTextNode("X"))
        li.appendChild(document.createTextNode(input))
        li.appendChild(button)
        items.appendChild(li)
        document.getElementById("item").value =''


    }
})

items.addEventListener("click",function(e){
    if("hi",e.target.classList.contains("delete")){
        items.removeChild(e.target.parentElement)
    };
    
})