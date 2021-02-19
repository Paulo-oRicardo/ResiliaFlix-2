class FilmeView {


    static colocaElementos(elemento){


        document.getElementById('mainInfoMovieDiv').innerHTML = `
        
        <div  class="w3-animate-left" id="mainInfoMovie">
            <h2 id="title"> ${elemento._title} </h2>
            <p id="runtime"><b>Runtime:</b> ${elemento._runtime} | <b>Released:</b> ${elemento._released}| <b>Genre:</b> ${elemento._genre}</p>
        </div>

        <div class="w3-animate-left" id="movieRating">
            <p id="rating"><b>Rating:</b> ${elemento._imdbRating} <i class="fas fa-star"></i></p>
        </div>
        </div>
        `


        document.getElementById('movieContentDiv').innerHTML = `
            <img class="w3-animate-opacity" src="${elemento._poster}" id="poster">
            <div id="movieContent" class="w3-animate-top">
                <p id="plot" class="movieData"><b>Plot: </b>${elemento._plot}</p>
                <br>
                <p id="actors" class="movieData"><b>Actors: </b> ${elemento._actors}</p>
                <br>
                <p id="writer" class="movieData"><b>Writer: </b> ${elemento._writer}</p>
                <br>
                <p id="director" class="movieData"><b>Director:</b> ${elemento._director}</p>
                <br>

                <div class="w3-animate-top" >
                    <button class="play" type="submit"><i class="fas fa-play"></i> Play</button>
                    <button class="play" type="submit">+ My list</button>
                </div>
            </div>
        
        
        `



        document.getElementById('title-page').textContent = `${elemento._title} - ResiliaFlix`;

   }


   static filmeNaoEncontrado(nome){

        document.getElementById('mainInfoMovieDiv').innerHTML = `
        
            <div id="mainInfoMovie" class="w3-animate-left" >
                <h2 id="title"> Content not found <i class="fas fa-robot"></i> </h2>
            </div>
        
        `
        document.getElementById('movieContentDiv').innerHTML = `

            <div class="movieNotFound" > 
         
                <h3 class="w3-animate-top" > The words "${nome}" was not found on our movies/series database  </h3>
            </div>`

        
        document.getElementById('title-page').textContent = `Nada Encontrado por aqui :( - ResiliaFlix`;
   }


}