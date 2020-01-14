
'use strict';

//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');


//config your firebase push
const config = {
      apiKey: "AIzaSyDOKGSt3omsraMZUxatBymFUoOJadW2AZ0",
    authDomain: "fbw-d80e4.firebaseapp.com",
    databaseURL: "https://fbw-d80e4.firebaseio.com",
    projectId: "fbw-d80e4",
    storageBucket: "fbw-d80e4.appspot.com",
    messagingSenderId: "976096865050",
    appId: "1:976096865050:web:2e5df022ee00ca6d15daa3",
    measurementId: "G-VYM4BBCT5E"
};


//create a functions to push
    function firebasePush(input) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }