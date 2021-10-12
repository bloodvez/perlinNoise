const GAME_WIDTH = 32
const GAME_HEIGHT = 24
const PIXEL_SIZE = 24

const game = new Game(GAME_WIDTH, GAME_HEIGHT, PIXEL_SIZE)

const tilesImage = document.createElement('img')
tilesImage.src = 'tiles.png'
tilesImage.addEventListener('load', e => {
    game.init();
});

const tilesSpritesheet = {
    wall1: [tilesImage, 0, 0, PIXEL_SIZE, PIXEL_SIZE],
    floor1: [tilesImage, 0, 24, PIXEL_SIZE, PIXEL_SIZE]
}