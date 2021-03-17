//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD_7A_JPnb1l0vWxlz3YxLAqiiHU7tHfEI",
      authDomain: "kwitter-app-a2df1.firebaseapp.com",
      databaseURL: "https://kwitter-app-a2df1-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-a2df1",
      storageBucket: "kwitter-app-a2df1.appspot.com",
      messagingSenderId: "952474226394",
      appId: "1:952474226394:web:e424ae732cd3e040e4dfe3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id='"+ Room_names+"' onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}