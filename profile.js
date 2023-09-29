

let favoriteColor = 'red';

let favoriteColorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

favoriteColorBtn.addEventListener('click', () => {
  alert(favoriteColor)
})





function classAdd(){
favoriteColorBtn.classList.add('yellow')
placeBtn.classList.add('yellow')
ritualBtn.classList.add('yellow')

}

favoriteColorBtn.addEventListener('click',classAdd)
placeBtn.addEventListener('click',classAdd)
ritualBtn.addEventListener('click',classAdd)
