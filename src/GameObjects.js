class GameObject {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    update(){
    }
}

class Tile extends GameObject{
    constructor(x, y){
        super(x, y)
        this.passable = true;
        this.texture = tilesSpritesheet.floor1
    }
}

class WallTile extends Tile{
    constructor(x, y){
        super(x, y)
        this.passable = false;
        this.texture = tilesSpritesheet.wall1
    }
}