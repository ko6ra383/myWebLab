//добавление задачи
function addTask(){
    let li = document.createElement('li')
    let inpValue = document.querySelector('#inp').value
    if(!inpValue) return
    let textNode = document.createTextNode(inpValue)
    li.appendChild(textNode)
    document.querySelector('.list').appendChild(li)
    document.querySelector('#inp').value = ''

    let span = document.createElement('span')
    let char = document.createTextNode('\u2715')
    span.appendChild(char)
    span.className = 'closeBtn'
    li.appendChild(span)
    span.onclick = () => {
        let parent = span.parentElement
        parent.style.display = 'none'
    }
}

function addCloseButtons(){
    let list = document.querySelectorAll('li')
    for (const el of list) {
        let span = document.createElement('span')
        let char = document.createTextNode('\u2715')
        span.appendChild(char)
        span.className = 'closeBtn'
        el.appendChild(span)
        span.onclick = () => {
            let parent = span.parentElement
            parent.style.display = 'none'
        }
    }
}

addCloseButtons()