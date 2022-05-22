function video(config) {
	(this.title = config.title), (this.seconds = config.seconds);
}

video.prototype.watch = function (watchTime) {
	if (watchTime != undefined) {
		console.log(`You watched ${watchTime} seconds of ${this.title}`);
	} else {
		console.log(`You watched ${this.seconds} seconds of ${this.title}`);
	}
};

let test = new video({ title: "mogus", seconds: 69 });

test.watch(22);
