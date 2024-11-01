const boxInput = document.querySelectorAll('.box1>input')
const boxInput2 = document.querySelectorAll('.box2>input')
const saat = document.getElementById('saat')
const span=document.querySelector('.toggle>span')
const body=document.querySelector('body')
// console.log(span);

let m = 3
let s = 59



////////input number card///////////


boxInput.forEach((val, i) => {
    val.addEventListener("keyup", (e) => {
        // console.log(val.value+i);
        if (val.value.length >= 4) {
            if (i != 3) {
                val.nextElementSibling.focus()
            } else {
                document.querySelector('.box2>input').focus()
            }
        }
        console.log(e.keyCode);
        if (e.keyCode == 8 && i != 0) {
            if (val.value.length == 0) {
                val.previousElementSibling.focus()
            }
        }
    })
})

boxInput.forEach((val) => {
    val.addEventListener('blur', () => {
        if (val.value.length > 4) {
            val.value = val.value.slice(0, 4)
        }
    })
})



///////////input number date & ccv////////////////

boxInput2.forEach((index, k) => {
    index.addEventListener("keyup", (e) => {
        // console.log(index.value + k);
        if (index.value.length >= 2 && k != 2) {
            index.nextElementSibling.focus()
        }
        if (e.keyCode == 8 && k != 0 && index.value.length == 0) {
            index.previousElementSibling.focus()
        }
    })

})
boxInput2.forEach((index) => {
    index.addEventListener('blur', () => {
        if (index.value.length = 2) {
            index.value = index.value.slice(0, 2)
        }

    })
})








//////////////h2 saat///////////////

setInterval(() => {
    if (s != 0) {
        s--
    } else {
        if (m != 0){
            m--
            s=59
        }
        else{
            alert('Time is up')
        }
    }
    saat.innerHTML=m + " : " + s
}, 1000);






























////mode//////////

const myToggle = () =>{
    span.classList.toggle('left')
    body.classList.toggle('mycolor')
}