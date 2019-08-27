
  /* Vanilla Js */
  var container = document.querySelector(".container");
  var light = document.querySelectorAll(".lightvideo src");
  
  for(var i = 0; i < light.length; i++) {
    light[i].addEventListener("click", openbox);
  }
  
  function closebox(event) {  
    var closex = document.querySelector(".closel");
    var lightboxVideo = document.querySelector(".lightboxVideo");
  
    if(event.target == lightboxVideo || event.target == closex)
      destroyLightboxVideo();
  }
  
  function openbox(event) {
    createLightboxVideo();
  
    var videoPath = event.target.src;
    var lightboxVideo = document.querySelector(".lightboxVideo video");
    var lightbox = document.querySelector(".lightboxVideo");
    var closel = document.querySelector(".closel");
  
    closel.addEventListener("click", closebox);
    lightboxVideo.classList.add("spread");
    lightboxVideo.src = videoPath;
  
    setTimeout(() => {
      lightboxVideo.play();
    }, 1000);
    
    lightbox.addEventListener("click", closebox);
  }
  
  
  function createLightboxVideo() {
    var div = document.createElement("div");
    var video = document.createElement("video");
    var button = document.createElement("button");
    
    div.classList.add("lightboxVideo");
    button.addEventListener("click", closebox);
    button.classList.add("closel");
    button.title = "Close";
    button.textContent = "x";
    div.appendChild(video);
    div.appendChild(button);
    container.appendChild(div);
  }
  
  function destroyLightboxVideo() {
    container.removeChild(document.querySelector(".lightboxVideo"));
  }