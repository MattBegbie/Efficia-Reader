let old = document.querySelectorAll("p");
for (let index = 0; index < old.length; index++) {
  newText = boldenate(old[index].textContent);
  document.querySelectorAll("p")[index].innerHTML = newText;
}

function boldenate(paragraph) {
  const words = paragraph.split(" ");
  let newWords = "";
  for (let l = 0; l < words.length; l++) {
    let word = words[l];
    let point = Math.round(word.length / 3);
    word = "<b>" + word.slice(0, point) + "</b>" + word.slice(point);
    newWords = newWords + " " + word;
  }
  return newWords;
}

