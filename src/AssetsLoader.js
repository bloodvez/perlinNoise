assetsFileInput.addEventListener('change', (e) => {
    let spritesheetJSON = ''
    Array.from(e.target.files).forEach(async elem => {
        if (elem.name === "spritesheet.json") {
            let reader = new FileReader();
            reader.onload = (e) => {
                spritesheetJSON = e.target.result
            };
            reader.readAsText(elem);
            console.log("Loaded spritesheet JSON");
        } else if (elem.name === "spritesheet.png") {
            const imageBitmapPromise = await createImageBitmap(elem);
            let fooTex = PIXI.Texture.from(imageBitmapPromise);
            const sheet = new PIXI.Spritesheet(fooTex, JSON.parse(spritesheetJSON), 'spritesheet.json')
            sheet._processFrames(0)
            sheet._processAnimations()
            SPRITES = sheet
            console.log("Loaded spritesheet image");
            assetsFileInput.remove()
            game.init()
        } else {
            console.log('wrong files');
        }
    })
});