class FilmeController{


    static carregaFilme(nomeFilme){

        

        let filme = new FilmeModel()


        filme.criaMovie(nomeFilme, () => {
            
            if(filme._title == undefined && filme._plot == undefined){
                FilmeView.filmeNaoEncontrado(nomeFilme);
            }else{
                FilmeView.colocaElementos(filme);
            }


        })

        


    }


}



document.getElementById('procuraFilme').addEventListener("click", (event) => {
    event.preventDefault()
    FilmeController.carregaFilme(document.getElementById('pesquisaFilme').value);
})


FilmeController.carregaFilme(localStorage.getItem('filme'))
