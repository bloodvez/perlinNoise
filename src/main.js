const GAME_WIDTH = 32
const GAME_HEIGHT = 24
const PIXEL_SIZE = 24

const canvas = document.getElementById('cnvs');
const ctx = canvas.getContext('2d');
canvas.width = GAME_WIDTH * PIXEL_SIZE;
canvas.height = GAME_HEIGHT * PIXEL_SIZE;

const game = new Game(GAME_WIDTH, GAME_HEIGHT, PIXEL_SIZE)

const tilesImage = new Image()
tilesImage.src = 'assets/tiles.png'
tilesImage.addEventListener('load', async e => {
    game.init();
    const imageBitmap = await createImageBitmap(tilesImage, 0, 1 * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE)
    tilesSpritesheet.floor1_texture = ctx.createPattern(imageBitmap, 'repeat')
});

const tilesSpritesheet = {
    wall1: [tilesImage, 0, 0, PIXEL_SIZE, PIXEL_SIZE],
    floor1: [tilesImage, 0, 24, PIXEL_SIZE, PIXEL_SIZE]
}

