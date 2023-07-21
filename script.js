let mainbox = document.getElementById('mainbox')
let mainboxWidth = mainbox.getBoundingClientRect().width
let body = document.querySelector('body')
let pix = document.querySelectorAll('.pixel')
let selector = document.getElementById('selector')
let selectorOutput = document.getElementById('selectorOutput')
let button = document.querySelector('button')
console.log(mainboxWidth)

function buildPixel(width) {
    let pixel = document.createElement('div')
    pixel.classList.add("pixel")
    pixel.style.backgroundColor = '#D8D8D8'
    pixel.style.width = width + "px"
    pixel.style.height = pixel.style.width
    pixel.addEventListener('mouseover', function() {
        pixel.style.backgroundColor = '#707070'
        console.log(2)
    })
    mainbox.appendChild(pixel)
}

//buildPixel(mainboxWidth/16)

function buildPixels(size) {
    let counter = 0
    while (counter != (size * size)){
        buildPixel(mainboxWidth/size)
        counter = counter + 1
    }
}
buildPixels(51)



selectorOutput.innerHTML = (selector.value)
selector.addEventListener('input', function() {
    selectorOutput.innerHTML = selector.value
    mainbox.replaceChildren()
    buildPixels(selector.value)
})

button.addEventListener('click', function () {
    mainbox.replaceChildren()
    buildPixels(selectorOutput.innerHTML)
})