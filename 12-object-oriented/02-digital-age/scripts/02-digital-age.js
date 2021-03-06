/**
 * @file: 02-digital-age.js
 * @author: Raul Bercea
 * Using js objects and extending them to create new objects
 * 
 * Functions are used to declare js objects methods get added by using prototype
 * By using call and create we can make a new object that extends an oject that
 * was created previously
 */



/**
 * Constructor fot a video object
 * @param {String} title the title of the video
 * @param {Number} seconds the ammount of time the movie lasts for
 */
function Video(title, seconds) {
	this.title = title || ""; 
	this.seconds = seconds || 0;
}

/**
 * Method of the Video object witch returns how much of the video you have watched
 * @param {Number} watchTime how much time the video has been watched for 
 */
Video.prototype.watch = function (watchTime) {
	if (typeof watchTime === "undefined") {
		console.log(`You watched all ${this.seconds} seconds of "${this.title}"`);
	}
	else{
		console.log(`You watched ${watchTime} seconds of "${this.title}"`);
	}
};
/**
 * Constructor of the MusicVideo object
 * @param {Object} config this constructor gets a configurator object for the title, the seconds watched and the artist 
 */
function MusicVideo({ title, seconds, artist }) {
	Video.call(this, title, seconds);
	this.artist = artist || "";
}

// extending the video witch create
MusicVideo.prototype = Object.create(Video.prototype);

/**
 * Method of the music video that will return to the console the music video you watched
 */
MusicVideo.prototype.play = function () {
	console.log(`You played "${this.title}" by "${this.artist}"`);
};

// array of videos
const videoArray = [
	new Video("Spiderman", 560),
	new MusicVideo({
		title: "Back in Black",
		artist: "AC/DC",
	}),
	new Video("Morbious", 790),
	new MusicVideo({
		title: "Fear of the Dark",
		artist: "Iron Maiden",
	}),
];

// running the watch function for all of the objects in the array
for (const video of videoArray) {
	video.watch();
	// if the video is a music video it plays
	if (video instanceof MusicVideo) {
		video.play();
	}
}