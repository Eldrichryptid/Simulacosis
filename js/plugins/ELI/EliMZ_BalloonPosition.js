//============================================================================
// EliMZ_BalloonPosition.js
//============================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦3.0.0♦ Set custom balloon positions for events and players!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-balloon-position-for-rpg-maker-mv/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Features
============================================================================

Changing the position of the balloons:
• Through the filenames.
• Through the notes field.
• Using plugin parameters.
• Using event commands.

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/147Ejt_ptwcVTfqH9fALvbIzQjTDS-OKR68dh2b_HMHQ/edit?usp=sharing

============================================================================

@param templates
@text Templates
@type struct<templateSt>[]
@desc Templates to use on note tag, filenames or plugin commands.
@default []

@command cmd_setBalloonPosition
@text Set Balloon Position
@desc

    @arg id
    @text Character Ids
    @type text
    @desc
    @default

    @arg position
    @text Position X Y
    @type text
    @desc Separate X and Y with a comma. Can use \v[id].
    @default 0, 0

*/

/* -------------------------------- TEMPLATES ------------------------------- */
{

/*~struct~templateSt:

@param id
@text Id
@type text
@desc The id that will point out this balloon position.
@default Player

@param position
@text X Y
@type text
@desc The position of the balloon according for this template.
@default 0,0

*/

}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_BalloonPosition = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.BalloonPosition = {

    Parameters: class{
        constructor(parameters){
            this.templates = this.parseTemplates(JSON.parse(parameters.templates))
        }

        parseTemplates(parameters){
            const templates = []

            for(const param of parameters){
                const template = JSON.parse(param)
                const [x, y] = template.position.split(",")

                templates.push({
                    id: template.id.toLowerCase(),
                    x: Number(x),
                    y: Number(y),
                })
            }

            return templates
        }
    },
    
    initialize(){
        this.initParameters()
        this.initPluginCommands()
    },

    initParameters(){
        const parameters = PluginManager.parameters(Eli.PluginManager.getPluginName())
        this.parameters = new this.Parameters(parameters)
    },

    initPluginCommands(){
        const commands = ["cmd_setBalloonPosition"]
        Eli.PluginManager.registerCommands(this, commands)
    },

    getParam(){
        return this.parameters
    },

    cmd_setBalloonPosition(args){
        const ids = Eli.PluginManager.createIdList(args.id)
        const [x, y] = Eli.PluginManager.parseVariables(args.position).split(",").map(item => Number(item))

        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){
                character.setBalloonPosition(x, y)
            }
        }
    },
}

{

const Plugin = Eli.BalloonPosition
const Alias = {}

Plugin.initialize()

const NOTE_TAG = "<balloonpos:"
const FILE_TAG = "bpos["

/* --------------------------- GAME CHARACTER BASE -------------------------- */
Alias.Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers
Game_CharacterBase.prototype.initMembers = function(){
    Alias.Game_CharacterBase_initMembers.call(this)
    this.initBalloonMembers()
}

Game_CharacterBase.prototype.initBalloonMembers = function(){
    this.balloonX = 0
    this.balloonY = 0
}

Alias.Game_CharacterBase_setImage = Game_CharacterBase.prototype.setImage
Game_CharacterBase.prototype.setImage = function(characterName, characterIndex){
    Alias.Game_CharacterBase_setImage.call(this, characterName, characterIndex)
    this.refreshBalloonPosition("")
}

Game_CharacterBase.prototype.refreshBalloonPosition = function(note){
    const filename = this.characterName().toLowerCase()
    let template = null

    if(template = this.hasBalloonPositionByTemplate(filename, note)){
        this.setBalloonPosition(template.x, template.y)

    }else if(this.hasBalloonPositionTag(filename, "filename")){
        this.setBalloonPositionByTag(filename, FILE_TAG, "]")

    }else if(this.hasBalloonPositionTag(note, "note")){
        this.setBalloonPositionByTag(note, NOTE_TAG, ">")

    }else{
        this.initBalloonMembers()
    }
}

Game_CharacterBase.prototype.hasBalloonPositionByTemplate = function(filename, note){
    return Plugin.getParam().templates.find(item => filename.includes(item.id) || note.includes(item.id))
}

Game_CharacterBase.prototype.hasBalloonPositionTag = function(text = "", type = "filename"){
    const tag = {note: NOTE_TAG, filename: FILE_TAG}[type]
    return text.toLowerCase().includes(tag)
}   

Game_CharacterBase.prototype.setBalloonPositionByTag = function(text, openTag, closeTag) {
    const balloonString = text.replaceAll(" ", "").toLowerCase()
    const start = balloonString.indexOf(openTag) + openTag.length
    const str = balloonString.substring(start)
    const end = str.indexOf(closeTag)
    const data = str.substring(0, end)
    const [x, y] = data.split(",")

    this.setBalloonPosition(Number(x), Number(y))
}

Game_CharacterBase.prototype.setBalloonPosition = function(x, y) {
    this.balloonX = x
    this.balloonY = y
}

Game_CharacterBase.prototype.getBalloonX = function(){
    return this.balloonX
}

Game_CharacterBase.prototype.getBalloonY = function(){
    return this.balloonY
}

/* --------------------------------- PLAYER --------------------------------- */
Alias.Game_Player_refreshBalloonPosition = Game_Player.prototype.refreshBalloonPosition
Game_Player.prototype.refreshBalloonPosition = function(note){
    note = this.getCurrentBattler()?.getDatabase()?.note?.toLowerCase() || ""
    Alias.Game_Player_refreshBalloonPosition.call(this, note)
}

/* -------------------------------- FOLLOWER -------------------------------- */
Alias.Game_Follower_refreshBalloonPosition = Game_Follower.prototype.refreshBalloonPosition
Game_Follower.prototype.refreshBalloonPosition = function(note){
    note = this.getCurrentBattler()?.getDatabase()?.note?.toLowerCase() || ""
    Alias.Game_Follower_refreshBalloonPosition.call(this, note)
}

/* ---------------------------------- EVENT --------------------------------- */
Alias.Game_Event_refreshBalloonPosition = Game_Event.prototype.refreshBalloonPosition
Game_Event.prototype.refreshBalloonPosition = function(note){
    note = this.event().note.toLowerCase()
    Alias.Game_Event_refreshBalloonPosition.call(this, note)
}

/* ---------------------------- SPRITE CHARACTER ---------------------------- */
Sprite_Character.prototype.getBalloonX = function(){
    return this._character.getBalloonX()
}

Sprite_Character.prototype.getBalloonY = function(){
    return this._character.getBalloonY()
}

/* ----------------------------- SPRITE BALLOON ----------------------------- */
Alias.Sprite_Balloon_updatePosition = Sprite_Balloon.prototype.updatePosition
Sprite_Balloon.prototype.updatePosition = function() {
    Alias.Sprite_Balloon_updatePosition.call(this)
    this.updateCustomPosition()
}

Sprite_Balloon.prototype.updateCustomPosition = function() {
    this.x += this._target.getBalloonX()
    this.y += this._target.getBalloonY()
}

}