const firebaseConfig = {
    apiKey: "AIzaSyAxfuUjENRSjUSkinZAlsAyGOBC1YZuRCk",
    authDomain: "paginaweb2-f7eac.firebaseapp.com",
    projectId: "paginaweb2-f7eac",
    storageBucket: "paginaweb2-f7eac.appspot.com",
    messagingSenderId: "750976218230",
    appId: "1:750976218230:web:20211b2d16a32403605b57"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

//llamando al dom
const btnpublicar = document.getElementById("btnpublicar");
const btninprimircomentarios = document.getElementById("btninprimircomentarios");

//Función Publicar o agregar datos
btnpublicar.addEventListener('click', () => {
    db.collection("comentarios").add({
        titulo: txttitulo = document.getElementById('txttitulo').value,
        descripcion: txtdescrip = document.getElementById('txtdescrip').value,

    })
        .then((docRef) => {
            console.log("Se creo tu comentario correctamente");
            inprimircomentarios();
        })
        .catch((error) => {
            console.error("No se creo tu comentario", error);
        });

})

// función leer datos de firestore 
function inprimircomentarios() {
    db.collection("comentarios").get().then((querySnapshot) => {
        let html = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().titulo}`);
            console.log(`${doc.data().descripcion}`);
            var listarDatos = `
                   <li class="listarDatos"> 
                        <h5 class="listarDatosH5"> ${doc.data().titulo} </h5>
                        <p> ${doc.data().descripcion} </p>
                   </li>
                `;
            html += listarDatos;
        }); document.getElementById('inprimircomentarios').innerHTML = html;
    });
}