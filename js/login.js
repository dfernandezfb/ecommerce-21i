class User{
  constructor(name, lastname, email, password, country, admin){
    this.name=name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.country = country;
    this.admin = admin;
  }
}

let users=[
  new User('Diego','Fernández','diego@gmail.com','12345678','Argentina',false),
  new User('Román','Gasparini','roman@gmail.com','12345678','Argentina',false),
  new User('Juan Ignacio','Ramallo','waka@gmail.com','12345678','Wakanda',true),
  new User('Pablo','Sangenis','pablo@gmail.com','12345678','Argentina',false),
  new User('Camila','Gonella','camila@gmail.com','12345678','Argentina',false)
]

function loginCheck(event){
  event.preventDefault();
  let email = document.querySelector('#email').value;
  let pass = document.getElementById('pass').value;
  let userLogged = users.find(user=>user.email === email);
  let passLogged = users.find(user=>user.password === pass);
  if(userLogged){
    if(passLogged){
      window.location.assign('http://127.0.0.1:5501/main.html');
    }else{
      let passError = document.createElement('div');
      passError.innerText='La contraseña es incorrecta'
      passError.classList.add('alert','alert-danger', 'mt-3')
      let form = document.querySelector('form');
      form.appendChild(passError);
      setTimeout(function(){
        form.removeChild(passError);
      },5000);
    }
  }else{
    let dataError = document.createElement('div');
      dataError.innerText='Los datos ingresados no son correctos';
      dataError.classList.add('alert','alert-danger', 'mt-3')
      let form = document.querySelector('form');
      form.appendChild(dataError);
      setTimeout(function(){
        form.removeChild(dataError);
      },5000);
  }
}
