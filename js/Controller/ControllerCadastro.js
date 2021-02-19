class ControlerCadastro{
   static searchCep(cep){
    
      let cepModel = new ModelCadastro();
      cepModel.cepRequest(cep, () => {
 
       ViewCadastro.colocaEndereco(cepModel);
      });
   }
   
   static confereErro(){
      let erros = ControlerCadastro.validaCampos();
      if (erros.length > 0) {
        ViewCadastro.exibeMensagensDeErro(erros);
         return true;
      }
   }
  
   static validaCampos() {
      
      let erros = [];
   
      if (document.getElementById("inputEmail").value.length < 11) {
          erros.push("Insert the E-mail correctly");
      }
      if (document.getElementById("inputRG").value.length < 8) {
          erros.push("Insert the ID correctly");
      }
      if (document.getElementById("inputCep").value.length < 8) {
          erros.push("Enter the correct zip code");
      }
      if (document.getElementById("inputCity").value == "City not found") {
         erros.push("City not found");
      }
     if (document.getElementById("inputState").value == "Neighborhood not found") {
      erros.push("Neighborhood  not found");
      }
      if (document.getElementById("inputAddress").value == "Street not found") {
      erros.push("Street not found");
      }
      if(confirm == 0){
         erros.push("Passwords must be the same");
      }
      return erros;
   }

   static guardar(){
      const email = document.getElementById("inputEmail").value;
      const password = document.getElementById("inputPassword").value;
      const nome = document.getElementById("inputName").value;
      const entrada = {
         email,
         password
      }
      const dados = {
         _name: document.getElementById("inputName").value,
         _email: document.getElementById("inputEmail").value,
         _id: document.getElementById("inputRG").value,
         _digit: document.getElementById("inputDigito").value,
         _zipcode: document.getElementById("inputCep").value,
         _city: document.getElementById("inputCity").value,
         _neighborhood: document.getElementById("inputState").value,
         _street: document.getElementById("inputAddress").value
      }


      localStorage.setItem("dados", JSON.stringify(dados))
      localStorage.setItem("entrar",JSON.stringify(entrada));
      localStorage.setItem("user",nome);

   }
 }

 let confirm = [];
      //Confirmação de senha 
 document.getElementById("inputConfirmPass").addEventListener("change",()=>{
    let inputPass = document.getElementById("inputPassword");
    let inputPassConf = document.getElementById("inputConfirmPass");
    if(inputPass.value == inputPassConf.value){
      confirm = 1
      inputPass.classList.remove("is-invalid");
      inputPassConf.classList.remove("is-invalid");
      inputPass.classList.add("is-valid");
      inputPassConf.classList.add("is-valid");

    }
    else{
       confirm = 0
      inputPass.classList.remove("is-valid");
      inputPassConf.classList.remove("is-valid"); 
      inputPass.classList.add("is-invalid");
      inputPassConf.classList.add("is-invalid");
    }
 })

      //Inserção do Cep
 document.getElementById("inputCep").addEventListener("input",()=>{
   ControlerCadastro.searchCep(document.getElementById("inputCep").value.toString());
})

      //Registra usuario
 document.getElementById("btnCadastro").addEventListener("click",(event)=>{
   event.preventDefault();

   ControlerCadastro.guardar();
      //Confere erros 
   if(ControlerCadastro.confereErro())
      ControlerCadastro.confereErro();
   else
      ViewCadastro.deuCerto(`Congratulations your registration was successful, now I log in`);
 }) 










