//set initial value for count
let count = 0;
//select value and buttons
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget.classList)
        const styles = e.currentTarget.classList
        
        if (styles.contains('decrease')){
            count--
        } else if (styles.contains('increase')){
            count++
        } else if (styles.contains('-5')){
            count-=5
        } else if (styles.contains('+5')){
            count+=5
        } else if (styles.contains('random')){
            count = Math.floor(Math.random() * 100)
        } else{
            count = 0
        }

        
        if (count > 0){
            value.style.color="green"
        }
        if (count < 0){
            value.style.color="red"
        }
        if (count == 0){
            value.style.color="black"
        }
        value.textContent = count
    })
})
getRandomNumber = ( ) => {
    return Math.floor(Math.random() * 100)
}