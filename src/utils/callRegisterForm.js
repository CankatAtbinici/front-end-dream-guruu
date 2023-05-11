import Swal from "sweetalert2"

 const  callRegisterForm = () => {
    Swal.fire({
      title: 'Hemen Kayıt Ol',
      html:
        '<input id="name" class="swal2-input" placeholder="İsim">' +
        '<input id="lastname" class="swal2-input" placeholder="Soyisim">' +
        '<input id="phoneNumber" class="swal2-input" placeholder="Telefon numarası">' +
        '<input id="email" class="swal2-input" placeholder="Email">'+
        '<input id="password" class="swal2-input" placeholder="Parola oluştur">'+
        '<input id="repassword" class="swal2-input" placeholder="Prola tekrar">',
      focusConfirm: false,
      confirmButtonText: "Kayıt ol",
      confirmButtonColor:"black",
      preConfirm: () => {
        const name = document.getElementById('name').value
        const lastName = document.getElementById('lastname').value
        const phoneNumber = document.getElementById('phoneNumber').value
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const rePassword = document.getElementById('repassword').value
        return { name: name, lastName: lastName, phoneNumber: phoneNumber, email: email  , password : password , repassword : rePassword}
      }
    }).then((result) => {
      console.log(result)
     
    })
  }
  export default callRegisterForm;