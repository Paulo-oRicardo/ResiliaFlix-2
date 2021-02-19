class ViewCadastro{
   static colocaEndereco(cepModel){
      
      document.getElementById('inputCity').value = cepModel.cidade || "City not found"; 
      document.getElementById('inputState').value =  cepModel.bairro || "Neighborhood not found"; 
      document.getElementById('inputAddress').value = cepModel.rua || "Street not found"; 
   }

   //constrói onde cai aparecer o erro 
   static exibeMensagensDeErro(erros){
      let ul = document.getElementById("mensagens-erro");
      ul.innerHTML = " ";
   
      erros.forEach(function(erro) {
          let li = document.createElement("li");
          li.textContent = erro;
          ul.appendChild(li);
   });
}

   //Printa tela de cadastrado com sucesso 
    static deuCerto(mensage){
      let ul = document.getElementById("mensagens-erro");
      ul.innerHTML = " ";
      ul.style.backgroundColor="transparent";
      ul.style.color="#ccc";

      let a = document.createElement("a");
      a.setAttribute("href","../index.html");
      a.innerHTML=" Login";

      let h3 = document.createElement("h3");
      h3.innerHTML = document.querySelector("#inputName").value;
      
          let li = document.createElement("li");
          li.innerHTML = mensage;
          ul.appendChild(h3);
          ul.appendChild(li);
          li.appendChild(a);
      
      let form = document.querySelector(".form-cadastro");
      form.style.display="none";
      
      let footer = document.getElementById("footer");
      footer.style.position="absolute";
   }

}
      //Registro do usúario
