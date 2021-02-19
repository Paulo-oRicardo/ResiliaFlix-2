function mostraUser(){
   let user= localStorage.getItem("user");
   let userCut = user.split(' ',user.length);
   let nomeNavBar = document.getElementById("navbarDropdown");
   if(userCut.length < 2){
      let name = (userCut[0]);
      nomeNavBar.textContent = name;
   }else{
     let nameComplet = (`${userCut[0]} ${userCut[userCut.length - 1]}`);
     nomeNavBar.textContent = nameComplet;
   }
}
mostraUser();
