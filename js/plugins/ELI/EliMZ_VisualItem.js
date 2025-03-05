//==========================================================================
// EliMZ_VisualItem.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦5.0.1♦ Display a picture when selecting Skills.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-visual-items-for-rpg-maker

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Features
============================================================================

● Displays a picture when selecting items on map, menu, shop, and 
battle.[PRO]
● Displays a picture when selecting equipments on menu, and shop. [PRO]
● Displays a picture when selecting skills on menu and battle.
● You can adjust the picture position on each scene.

============================================================================
How to use
============================================================================

You can show pictures for each item, skill and equipment anywhere on the 
screen on the following occasions:

• On the Map scene, when selecting/hovering the items of the select item window.
• On the Menu, in the item/skill/equip scene, when selecting/hovering the 
items/skills/equips.
• On the battle scene, when selecting/hovering the items/skills.
• On the shop scene, when selecting/hovering the items.

You can optionally disable the visual images in any of these occasions 
in the plugin parameters.

There is a plugin parameter for each one of these options for you to set 
the position of the pictures on the screen.
After that, you need to set a note tag on the note field of the items, 
skills, and equipment you want to use a picture for:

<VisualImage: filename>

You can choose to put the images on any folder inside the img folder. 
Just make sure to type the path correctly in the plugin parameters.

Note¹: The note tag and the filename are case sensitive!

============================================================================
Update Log
============================================================================

https://tinyurl.com/visualItem

============================================================================

@param skillPath
@text Skill Path
@type text
@desc The folder you will load your visual pictures for skills.
@default img/pictures/visual_skills/

@param skill
@text Skill Settings
@type struct<skillSt>
@desc Visual Skill Image Settings
@default {"menuEnabled":"true","menuPos":"{\"alignX\":\"left\",\"offsetX\":\"0\",\"alignY\":\"top\",\"offsetY\":\"0\",\"scale\":\"1\"}","battleEnabled":"true","battlePos":"{\"alignX\":\"right\",\"offsetX\":\"0\",\"alignY\":\"center\",\"offsetY\":\"0\",\"scale\":\"1\"}"}

*/

/* ---------------------------------- SKILL --------------------------------- */
{

/*~struct~skillSt:

@param menuEnabled
@text Enable on Skill Scene
@type boolean
@desc Enable the usage of visual pictures when on Scene Skill.
@default true

@param menuPos
@text Image Position
@type struct<positionSt>
@desc Set the position of the pictures.
@default {"alignX":"left","offsetX":"0","alignY":"bottom","offsetY":"0","scale":"1"}
@parent menuEnabled

@param battleEnabled
@text Enable on Battle
@type boolean
@desc Enable the usage of visual pictures when on Scene Battle.
@default true

@param battlePos
@text Image Position
@type struct<positionSt>
@desc Set the position of the pictures.
@default {"alignX":"left","offsetX":"0","alignY":"bottom","offsetY":"0","scale":"1"}
@parent battleEnabled

*/

}

/* -------------------------------- POSITION -------------------------------- */
{
/*~struct~positionSt:

@param alignX
@text Align X
@type select
@option left
@option center
@option right
@desc Select none to only use offset value.
@default left

@param offsetX
@text Position X
@type text
@desc The Offset X position.
@default 0
@parent alignX

@param alignY
@text Align Y
@type select
@option top
@option center
@option bottom
@desc Select none to only use offset value.
@default top

@param offsetY
@text Position Y
@type text
@desc The offset Y position.
@default 0
@parent alignY

@param scale
@text Image Scale
@type text
@desc The scale of the image.
@default 1

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_VisualItem = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

class Sprite_VisualItem extends Sprite{

    initialize(bitmap){
        super.initialize(bitmap)
        this.imageWindows = []
    }

    setImageWindow(win){
        this.imageWindows = []
        this.imageWindows.push(...win)
    }

    update(){
        super.update()
        this.visible = this.imageWindows.some(item => item.isOpenAndActive())
    }
}

Eli.VisualItem = {

    version: 5.01,
    url: "https://hakuenstudio.itch.io/eli-visual-items-for-rpg-maker",
    parameters: {
        skillPath: '',
        skill: {
            menuEnabled: false,
            menuPos: {alignX: '', offsetX: 0, alignY: '', offsetY: 0, scale: 1},
            battleEnabled: false,
            battlePos: {alignX: '', offsetX: 0, alignY: '', offsetY: 0, scale: 1},
        },
    },
    alias: {},
    imageSprite: null,
    Sprite_VisualItem: Sprite_VisualItem,

    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        this.parameters = Eli.PluginManager.createParameters()
    },

    initPluginCommands(){
        const commands = []
        Eli.PluginManager.registerCommands(this, commands)
    },

    param(){
        return this.parameters
    },

    getImageSprite(){
        return this.imageSprite
    },

    getSkillPosition(){
        const isBattle = SceneManager._scene.constructor.name === "Scene_Battle"
        const pos = isBattle ? this.param().skill.battlePos : this.param().skill.menuPos

        return pos
    },  
}

const Plugin = Eli.VisualItem
const Alias = Eli.VisualItem.alias

Plugin.initialize()

const metaTag = "VisualImage"

/* ------------------------------- SCENE SKILL ------------------------------ */
{

Alias.Scene_Skill_create = Scene_Skill.prototype.create
Scene_Skill.prototype.create = function() {
    Alias.Scene_Skill_create.call(this)
    if(Plugin.param().skill.menuEnabled){
        this.createVisualItem()
    }else{
        Plugin.imageSprite = null
    }
}

Scene_Skill.prototype.createVisualItem = function() {
    const bitmap = new Bitmap(Graphics.width, Graphics.height)
    this.visualItem = new Sprite_VisualItem(bitmap)
    this.visualItem.setImageWindow([this._itemWindow])
    Plugin.imageSprite = this.visualItem
    this.addChild(this.visualItem)
}

}

/* ------------------------------ SCENE BATTLE ------------------------------ */
{

Alias.Scene_Battle_createSpriteset = Scene_Battle.prototype.createSpriteset
Scene_Battle.prototype.createSpriteset = function() {
    Alias.Scene_Battle_createSpriteset.call(this)
    if(Plugin.param().skill.battleEnabled){
        this.createVisualItem()
    }else{
        Plugin.imageSprite = null
    }
}

Alias.Scene_Battle_update = Scene_Battle.prototype.update
Scene_Battle.prototype.update = function() {
    Alias.Scene_Battle_update.call(this)
    if(this.visualItem){
        this.updateVisualItemSprite()
    }
}

Scene_Battle.prototype.updateVisualItemSprite = function() {
    if(this.canUpdateVisualImageForSkills()){
        this.visualItem.setImageWindow([this._skillWindow, this._enemyWindow, this._actorWindow])

    }else if(this._skillWindow.isClosed()){
        this.visualItem.setImageWindow([])
    }
}

Scene_Battle.prototype.canUpdateVisualImageForSkills = function(){
    return this._skillWindow.isOpenAndActive() && Plugin.param().skill.battleEnabled
}

Scene_Battle.prototype.createVisualItem = function() {
    const bitmap = new Bitmap(Graphics.width, Graphics.height)
    this.visualItem = new Sprite_VisualItem(bitmap)
    Plugin.imageSprite = this.visualItem
    this.addChild(this.visualItem)
}

}

/* ---------------------------- WINDOW SKILL LIST --------------------------- */
{

Alias.Window_SkillList_select = Window_SkillList.prototype.select
Window_SkillList.prototype.select = function(index) {
    Alias.Window_SkillList_select.call(this, index)
    if(Plugin.getImageSprite()){
        this.refreshVisualImage(index)
    }
}

Window_SkillList.prototype.refreshVisualImage = function(index){
    if(this.canShowPictureSkill(index)){
        this.drawSkillVisualImage()
    }else{
        Plugin.getImageSprite().bitmap.clear()
    }
}

Window_SkillList.prototype.createVisualItemPosition = function(bitmap, settings){
    const {alignX, offsetX, alignY, offsetY} = settings
    const x = Eli.Utils.calculateScreenPosition(alignX, offsetX, bitmap.width, "x")
    const y = Eli.Utils.calculateScreenPosition(alignY, offsetY, bitmap.height, "y")

    return [x, y]
}

Window_SkillList.prototype.drawSkillVisualImage = function(){
    const file = Eli.String.removeSpaces(this.item().meta[metaTag])
    const folder = Plugin.param().skillPath
    const bitmap = ImageManager.loadBitmap(folder, file)
    const param = Plugin.getSkillPosition()

    bitmap.addLoadListener(()=> {
        const sx = 0
        const sy = 0
        const sw = bitmap.width
        const sh = bitmap.height
        const [dx, dy] = this.createVisualItemPosition(bitmap, param)
        const dw = sw * param.scale
        const dh = sh * param.scale
        Plugin.getImageSprite().bitmap.clear()
        Plugin.getImageSprite().bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy, dw, dh)
    })
}

Window_SkillList.prototype.canShowPictureSkill = function(index){
    return index > -1 && this.item() && this.hasSkillPicture(this.item())
}

Window_SkillList.prototype.hasSkillPicture = function(item){
    return item.meta.hasOwnProperty(metaTag)
}

}

}