document.getElementById("procuraFilmeHome").addEventListener("click", (event) => {
  event.preventDefault()

  let movie = document.getElementById('pesquisaFilme').value;
  localStorage.setItem("filme",movie); 

   window.location.href="movies.html";

} ) 