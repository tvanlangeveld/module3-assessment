let requestBtn = document.querySelector('#request-btn')


requestBtn.addEventListener('click', () => {
  const foodOptions = ['jcw','fiveguys','blanco']
  let selectedFood = Math.floor(Math.random() * foodOptions.length)
alert(foodOptions[selectedFood])
})


