if (window.location.hostname !== "www.nyxclient.com") {
  // window.location.replace("http://nyxclient.com");
}

function download() {
  window.location.replace("https://cdn.glitch.com/49bb5a74-432a-4d4e-8c1b-d5bfdd488b10%2FTitle_Screen.mp3?v=1605998031181")
}

function partners() {
  window.location.replace("http://nyxclient.com/clients/")
}

function openInvInNewTab() {
  window.open("https://discord.com/api/oauth2/authorize?client_id=779669413338808320&permissions=8&scope=bot", '_blank');
  setTimeout(function(){
    window.open("https://discord.com/api/oauth2/authorize?client_id=779669413338808320&permissions=8&scope=bot", '_blank');
  }, 500)
}