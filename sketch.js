let musicFile;

function setup() {

    createCanvas(200, 200);

    soundFormats('mp3', 'ogg');
    musicFile = loadSound('antifragile');
    // musicFile.play();

}

function loadMusic() {

    musicFile.play();
    
}