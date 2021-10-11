const MAP_SIZE = 24

const gameMap = new GameMap(MAP_SIZE)
const player = new Player()
gameMap.init()
player.init()

gameMap.draw()