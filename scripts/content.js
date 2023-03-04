// const content = document.querySelectorAll("p");

// console.log(content);
// for (const key in content) {
		// console.log(content[key]);
		// const text = "<b>"+content[key]+"</b>";
		// const text = "<b>"+content+"</b>";
		const old = document.querySelectorAll("p");
for (let index = 0; index < document.querySelectorAll("p").length; index++) {
	// const element = array[index];
	console.log(old[index], " Index is : ", index);
	const newText = "<b>"+old[index]+"</b>";
	// console.log(newText, " new Index is : ", index);
	// document.querySelectorAll("p")[index].innerHTML = "<b>"+document.querySelectorAll("p")[index]+"</b>";
	
}
// }

