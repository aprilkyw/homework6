var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.9;
  	console.log("Speed down:" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*(10/9);
  	console.log("Speed up:" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration - video.currentTime <= 5) {
		video.currentTime = 0;
	} else {
		video.currentTime += 5;
	}
	console.log("Current:" + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = "Mute";
		console.log("Unmuted");
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Muted");

	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this.value / 100);
	document.getElementById("volume").innerHTML = this.value + "%";
	video.volume = this.value/100;
	console.log("Volume:" + video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add('oldTime');
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove('oldTime');
});
