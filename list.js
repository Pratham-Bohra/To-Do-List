const button = document.querySelector('.btn')
const input = document.querySelector('.search')
const list = document.querySelector('.content')

button.addEventListener('click', function(e){
    console.log(e);
    console.log(list);
    
    let text = input.value

    if(text !== ''){
    let newTask = document.createElement('li') 
    newTask.innerHTML = text
    list.appendChild(newTask)
    input.value = ''

    let unList = document.createElement('button')
    unList.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    unList.style.marginLeft = '15px'
    unList.style.borderRadius = '10px'
    unList.style.backgroundColor = 'white'
    unList.style.border = 'none'
    unList.style.color = 'gray'

    unList.addEventListener('mouseover', function() {
        unList.style.backgroundColor = 'lightgray'; 
    });
    
    unList.addEventListener('mouseout', function() {
        unList.style.backgroundColor = 'white'; 
    });
    
    newTask.appendChild(unList)

    unList.addEventListener('click', function(e){
            newTask.remove() 
    })

    } 
    else{
        alert('Please enter a task in your to-do list')
    }
});

    list.addEventListener('click', function(e){
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked"); 
        } 
        
    })



