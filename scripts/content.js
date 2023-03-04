const old = document.querySelectorAll("p");

for (let index = 0; index < old.length; index++) {
  console.log(old[index], " Index is : ", index);
  const newText = "".concat("<b>", old[index].textContent, "</b>");
  console.log(newText);
  document.querySelectorAll("p")[index].innerHTML = newText;
}
