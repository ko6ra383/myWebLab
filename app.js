//добавление задачи
function addTask(){
    let li = document.createElement('li')
    let inpValue = document.querySelector('#inp').value
    if(!inpValue) return
    let textNode = document.createTextNode(inpValue)
    li.appendChild(textNode)
    document.querySelector('.list').appendChild(li)
    document.querySelector('#inp').value = ''

}