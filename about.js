console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submission Sucessful!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duckImg = document.querySelector('img')

duckImg.addEventListener('mouseover', () => {
	alert('This duck loves you!')
})