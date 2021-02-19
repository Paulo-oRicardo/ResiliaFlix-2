let valor = JSON.parse(localStorage.getItem("dados"));


document.getElementById("nome").textContent = valor._name;
document.getElementById("email").textContent = valor._email;
document.getElementById("id").textContent = valor._id;
document.getElementById("digit").textContent = valor._digit;
document.getElementById("zipcode").textContent = valor._zipcode;
document.getElementById("city").textContent = valor._city;
document.getElementById("neighborhood").textContent = valor._neighborhood;
document.getElementById("street").textContent = valor._street;
