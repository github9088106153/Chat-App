 var firebaseConfig = {
      apiKey: "AIzaSyA2xDX4t5YVY9vyldJCf2zZNw5oMG7LVbI",
      authDomain: "kwitter-40b1a.firebaseapp.com",
      databaseURL: "https://kwitter-40b1a-default-rtdb.firebaseio.com",
      projectId: "kwitter-40b1a",
      storageBucket: "kwitter-40b1a.appspot.com",
      messagingSenderId: "371510162190",
      appId: "1:371510162190:web:5c014412d2cda6bb37dd5f",
      measurementId: "G-3WCBQ9WV6V"
    };
    
   firebase.initializeApp(firebaseConfig);

function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot) 
       {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) 
             {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });
     });
      }
getData();
function logout()
{
      window.location="index.html";
}
