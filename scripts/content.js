let old = document.querySelectorAll("p");
// function boldenate();
// const word= {"", ""};
for (let index = 0; index < old.length; index++) {
  console.log(old[index], " Index is : ", index);

  newText = boldenate(old[index].textContent);
  console.log(newText);
  document.querySelectorAll("p")[index].innerHTML = newText;
}

function boldenate(paragraph) {

  const words = paragraph.split(" ");
  for (let l = 0; l < words.length; l++) {
	let word = words[l]
	let midP = Math.round(word.length/3);
	console.log(midP);
	
	// word = "".concat("<b>", word)
	// word = word.length/2;


	// let word = "".concat("<b>", words[l].textContent, "</b>");
    // console.log(word[l]);
  }
  return words;
}

