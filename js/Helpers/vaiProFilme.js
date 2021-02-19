function vaiProFilme(nomeDoFilme){
    console.log(nomeDoFilme);

    let movie = nomeDoFilme;
    localStorage.setItem("filme",movie); 

    window.location.href="movies.html";
}