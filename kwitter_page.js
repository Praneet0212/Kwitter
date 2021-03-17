//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + name +"<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row
//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
      console.log("clicked on like button - " + messge_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firbase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}