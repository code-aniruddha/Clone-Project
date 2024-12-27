function clickAnchor(){
  var link = document.getElementById('next');
  link.click();
}
function goToError(){
  var link = document.querySelector('#error');
  link.click();
}
function changeVideo1to2(){
  let video = document.getElementById('bgvideo');
  video.src = "Video/bg2.mp4";
  document.getElementById('changeVideo1').style.display = "none";
  document.getElementById('changeVideo2').style.display = "block";
}
function changeVideo2to1(){
  let video = document.getElementById('bgvideo');
  video.src = "Video/bg.mp4";
  document.getElementById('changeVideo2').style.display = "none";
  document.getElementById('changeVideo1').style.display = "block";
}