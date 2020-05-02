(function(window){
	var hellospeaker = new Object();
	var speakword ="hello";
	hellospeaker.speak = function speak(name){
	 	console.log(speakword+" "+name);
	};
	window.hellospeaker = hellospeaker;
})(window);