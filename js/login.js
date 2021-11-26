//* SIMULAMOS BASE DE DATOS (USUARIOS)
class User {
  constructor(name, lastname, email, password, country, admin) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.country = country;
    this.admin = admin;
  }
}

let users = [
  new User('Diego', 'Fernández', 'diego@gmail.com', 'diego123', 'Argentina', false),
  new User('Román', 'Gasparini', 'roman@gmail.com', '12345678', 'Argentina', false),
  new User('Juan Ignacio', 'Ramallo', 'waka@gmail.com', '12345678', 'Wakanda', true),
  new User('Pablo', 'Sangenis', 'pablo@gmail.com', '12345678', 'Argentina', false),
  new User('Camila', 'Gonella', 'camila@gmail.com', '12345678', 'Argentina', false)
]

if (!localStorage.getItem('users')) {
  console.log('Avisame');
  let usersJSON = JSON.stringify(users); //Convertimos users a JSON
  localStorage.setItem('users', usersJSON);
}

//* LOGIN

function loginCheck(event) {
  event.preventDefault();
  let email = document.querySelector('#email').value;
  let pass = document.getElementById('pass').value;
  let usersLS = localStorage.getItem('users');
  const usersLSConvertido = JSON.parse(usersLS)
  let userLogged = usersLSConvertido.find(user => user.email === email);
  if (userLogged && userLogged.password == pass) {
    window.location.assign(window.location.origin + '/main.html');
  } else {
    let dataError = document.createElement('div');
    dataError.innerText = 'Los datos ingresados no son correctos';
    dataError.classList.add('alert', 'alert-danger', 'mt-3');
    let form = document.querySelector('form');
    form.appendChild(dataError);
    setTimeout(function () {
      form.removeChild(dataError);
    }, 5000);
  }
}

//* REGISTRO

function register() {
  let email = document.getElementById('register-email').value;
  let lastname = document.getElementById('lastname').value;
  let country = document.getElementById('country').value;
  let password = document.getElementById('password').value;
  let name = document.getElementById('name').value;

  let nameOk = /^[A-Z]+$/i.test(name); //true
  let lastnameOk = /^[A-Z]+$/i.test(lastname); //true
  let countryOk = /^[A-Z]+$/i.test(country); //true
  let passwordOk = /^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}/.test(password);
  let emailOk = /([a-z]\w+@[a-z]+\.[a-z]{2,5})/.test(email);
  

  if(nameOk && lastnameOk && countryOk && emailOk && passwordOk){
    let newUser = new User(name, lastname, email, password, country);
    
    //!Traer de local storage
    let data = localStorage.getItem('users');
    //! Ponerlo en mi idioma
    let usersLS = JSON.parse(data);
    //!Modificar el elemento que trajimos
    usersLS.push(newUser);
    //! Poner en el idioma de LS
  data = JSON.stringify(usersLS);
  //!Volver a enviarlo a local storage
  localStorage.setItem('users', data)
  
  
  window.location.assign(window.location.origin + '/main.html'); //! usamos window.location.origin para no cambiar de pagina
  }else{
    const error = document.createElement('div');
    error.innerText = 'Hay campos erroneos';
    error.classList.add('alert', 'alert-danger', 'mt-3', 'w-50', 'text-center');
    const modal = document.getElementById('registerModal');
    modal.appendChild(error);
    setTimeout(()=>{
      modal.removeChild(error);
    },3000)
  }
}