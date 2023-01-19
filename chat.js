// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBKhQt1mQiu1NO_YippbUgKb5AypaQiYMc",
    authDomain: "lets-chat-web-app-e71fa.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-e71fa-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-e71fa",
    storageBucket: "lets-chat-web-app-e71fa.appspot.com",
    messagingSenderId: "283124839060",
    appId: "1:283124839060:web:e67fae7a90a3eed9513a81"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      Room_names=childKey;
      console.log("Room Name-"+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}




