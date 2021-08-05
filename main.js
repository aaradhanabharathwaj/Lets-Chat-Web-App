function login(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="kwitter_room.html";    
}
function login(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}
const firebaseConfig = {
    apiKey: "AIzaSyCc6hnHwqoVUWlflbQ3i4akZhxKM4ek9uU",
    authDomain: "kwitter-19d5a.firebaseapp.com",
    projectId: "kwitter-19d5a",
    storageBucket: "kwitter-19d5a.appspot.com",
    messagingSenderId: "1028292840202",
    appId: "1:1028292840202:web:9cafbf47fd94327aba88f3"
};
  firebase.initializeApp(firebaseConfig);
  localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
function getData(){
    firebase.database().ref("/").on('value', function(snapshot){
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
        childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - "+Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
   });});}
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_login.html";
}
function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"Adding a Room Name"
    });
username=localStorage.getItem("user_name");
document.getElementById("user_h3").innerHTML="Welcome "+user_name+"!";
}
function redirecttoroomname(name){
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}