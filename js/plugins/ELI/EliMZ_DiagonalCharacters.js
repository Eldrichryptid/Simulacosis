//==========================================================================
// EliMZ_DiagonalCharacters.js
//==========================================================================

/*:

@target MZ
@base EliMZ_Book
@orderAfter EliMZ_CharacterFrames
@orderAfter EliMZ_CharacterPoses
@orderBefore EliMZ_CameraManager
@orderBefore EliMZ_ControlEvents

@plugindesc ♦1.0.1♦ Add support for diagonal movement and diagonal sprites!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/hakuen-studio-diagonal-characters-for-rpg-maker/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Features
============================================================================

● Add diagonal movement and sprite(image) support for all characters: 
Player, follower, events, and vehicles.
● Can enable/disable diagonal movement for each character type using 
switches.
● Can choose if you want to just move diagonally with or without using a 
specific sprite image for it.
● Can reduce the character speed when moving diagonally through a plugin 
parameter value.

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1D4QeVwirMOED_8q-QxXa0UNbROgtkdocRgt6cAvEHHc/edit?usp=sharing

============================================================================

@param diagonalSpeed
@text Diagonal Speed Reduction
@type text
@desc Reduces the movement speed by this amount when moving diagonally.
@default 0.5

@param diagonalMovementTag
@text Diagonal Movement Tag
@type text
@desc If this tag is present on the filename of a character, he will be able to move diagonally.
@default d$

@param diagonalSpriteTag
@text Diagonal Sprite Tag
@type text
@desc If this tag is present on the filename of a character, he will be able to move diagonally and also have a sprite for it.
@default d$$

@param ---Disable Switches---

@param eventSw
@text Event
@type switch
@desc If true, this type of characters will not be able to walk diagonally.
@default 0

@param vehicleSw
@text Vehicle
@type switch
@desc If true, this type of characters will not be able to walk diagonally.
@default 0

@param playerSw
@text Player
@type switch
@desc If true, this type of characters will not be able to walk diagonally. Includes followers.
@default 0

@command cmd_setDiagonalMove
@text Enable/Disable Diagonal Move
@desc Enable or disable diagonal movement for specific characters.

    @arg flag
    @text Flag
    @type select
    @option Enable
    @option Disable
    @option Toggle
    @desc
    @default Disable

    @arg id
    @text Character Id
    @type text
    @desc The character ids to apply the command. Can set more than one. See help file.
    @default 0

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_DiagonalCharacters = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.DiagonalCharacters = {

    Parameters: class {
        constructor(parameters){
            this.eventSw = Number(parameters.eventSw)
            this.vehicleSw = Number(parameters.vehicleSw)
            this.playerSw = Number(parameters.playerSw)
            this.diagonalSpeed = Number(parameters.diagonalSpeed)
            this.diagonalMovementTag = parameters.diagonalMovementTag
            this.diagonalSpriteTag = parameters.diagonalSpriteTag
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
        const commands = ["cmd_setDiagonalMove"]
        Eli.PluginManager.registerCommands(this, commands)
    },

    getParam(){
        return this.parameters
    },

    getRealDirectionWhenMovingDiagonally(diagDir){
        return {
            1: 2,
            3: 4,
            7: 6,
            9: 8,
        }[diagDir]
    },

    getDiagonalDirectionByNormalDirection(horzDir, vertDir){
        const dir = `${horzDir},${vertDir}`
        return {
            "4,2": 1,
            "6,2": 3,
            "4,8": 7,
            "6,8": 9,
        }[dir]
    },

    getNormalDirectionalByDiagonalDirection(diagDir){
        return {
            1: [4, 2],
            3: [6, 2],
            7: [4, 8],
            9: [6, 8],
        }[diagDir]
    },

    cmd_setDiagonalMove(args){
        const ids = Eli.PluginManager.createIdList(args.id)

        for(const id of ids){
            const char = Eli.Utils.getMapCharacter(id)

            if(char){
                const flag = args.flag === "Toggle" ? !char.diagMove : args.flag === "Enable"
                char.diagMove = flag
            }
        }
    }
    
}

{

const Plugin = Eli.DiagonalCharacters
const Alias = {}

Plugin.initialize()

/* --------------------------- GAME CHARACTER BASE -------------------------- */
Alias.Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers
Game_CharacterBase.prototype.initMembers = function() {
    Alias.Game_CharacterBase_initMembers.call(this)
    this.initDiagonalMembers()
}

Game_CharacterBase.prototype.initDiagonalMembers = function() {
    this.diagMove = false
    this.diagSprite = false
    this.diagDir = 0
    this.diagSpeed = 0
}

Game_CharacterBase.prototype.isDiagonalDirection = function(direction){
    return [1, 3, 7, 9].includes(direction)
}

Game_CharacterBase.prototype.isFacingDiagonally = function(){
    return this.diagonalDirection() > 0
}

Game_CharacterBase.prototype.realDirection = function(){
    return this.diagonalDirection() || this.direction()
}

Alias.Game_CharacterBase_setImage = Game_CharacterBase.prototype.setImage
Game_CharacterBase.prototype.setImage = function(characterName, characterIndex) {
    Alias.Game_CharacterBase_setImage.call(this, characterName, characterIndex)
    this.refreshDiagonalDataByFilename(this._characterName)
}

Game_CharacterBase.prototype.refreshDiagonalDataByFilename = function(characterName) {
    if(characterName.includes(Plugin.getParam().diagonalSpriteTag)){
        this.diagSprite = true
        this.diagMove = true
        this._characterIndex = 0
    }else if(characterName.includes(Plugin.getParam().diagonalMovementTag)){
        this.diagSprite = false
        this.diagMove = true
    }else{
        this.diagSprite = false
        this.diagMove = false
        this.setDiagonalDirection(0)
    }
}

Alias.Game_CharacterBase_realMoveSpeed = Game_CharacterBase.prototype.realMoveSpeed
Game_CharacterBase.prototype.realMoveSpeed = function() {
    return Alias.Game_CharacterBase_realMoveSpeed.call(this) + this.diagonalSpeed()
}

Game_CharacterBase.prototype.setDiagonalDirection = function(direction) {
    if (!this.isDirectionFixed()) {
        this.diagDir = direction

        if(direction > 0){
            const realDirection = Plugin.getRealDirectionWhenMovingDiagonally(direction)
            this.setDirection(realDirection)
        }
    }
}

Alias.Game_CharacterBase_moveStraight = Game_CharacterBase.prototype.moveStraight
Game_CharacterBase.prototype.moveStraight = function(direction) {
    Alias.Game_CharacterBase_moveStraight.call(this, direction)
    this.diagSpeed = 0
    this.setDiagonalDirection(0)
}

Alias.Game_CharacterBase_characterIndex = Game_CharacterBase.prototype.characterIndex
Game_CharacterBase.prototype.characterIndex = function() {
    return Alias.Game_CharacterBase_characterIndex.call(this) + this.getDiagonalCharacterIndex()
}

Game_CharacterBase.prototype.getDiagonalCharacterIndex = function() {
    return (this.diagonalDirection() > 0 && this.hasDiagonalSprite()) ? 1 : 0
}

Alias.Game_CharacterBase_moveDiagonally = Game_CharacterBase.prototype.moveDiagonally
Game_CharacterBase.prototype.moveDiagonally = function(horz, vert) {
    Alias.Game_CharacterBase_moveDiagonally.call(this, horz, vert)
    this.refreshDiagonalDirection(horz, vert)
    this.diagSpeed = -Plugin.getParam().diagonalSpeed
}

Game_CharacterBase.prototype.refreshDiagonalDirection = function(horz, vert) {
    if(this.isMovementSucceeded() && this.hasDiagonalSprite()){
        const diagDirection = Plugin.getDiagonalDirectionByNormalDirection(horz, vert)
        this.setDiagonalDirection(diagDirection)
    }else{
        this.setDiagonalDirection(0)
    }
}

Game_CharacterBase.prototype.executeMoveDiagonally = function(direction) {
    const [horz, vert] = Plugin.getNormalDirectionalByDiagonalDirection(direction)
    this.moveDiagonally(horz, vert)
}

Game_CharacterBase.prototype.hasDiagonalMovement = function() {
    return this.diagMove
}

Game_CharacterBase.prototype.hasDiagonalSprite = function() {
    return this.diagSprite
}

Game_CharacterBase.prototype.diagonalDirection = function() {
    return this.diagDir
}

Game_CharacterBase.prototype.diagonalSpeed = function(){
    return this.diagSpeed
}

/* ----------------------------- GAME CHARACTER ----------------------------- */

/* ------------------------------- RANDOM MOVE ------------------------------ */
Alias.Game_Character_moveRandom = Game_Character.prototype.moveRandom
Game_Character.prototype.moveRandom = function() {
    const directions = this.getHorizontalAndVerticalDirectionRandomly()
    
    if(this.canMoveRandomDiagonally(...directions)){
       this.moveDiagonally(...directions)
    }else{
        Alias.Game_Character_moveRandom.call(this)
    }
}

Game_Character.prototype.getHorizontalAndVerticalDirectionRandomly = function() {
    const horz = [0, 4, 6][Math.randomInt(3)]
    const vert = [0, 2, 8][Math.randomInt(3)]

    return [horz, vert]
}

Game_Character.prototype.canMoveRandomDiagonally = function(horz, vert) {
    return  this.hasDiagonalMovement() && horz > 0 && vert > 0 && 
            this.canPassDiagonally(this.x, this.y, horz, vert)
}

/* ------------------------------- MOVE TOWARD ------------------------------ */
Alias.Game_Character_moveTowardCharacter = Game_Character.prototype.moveTowardCharacter
Game_Character.prototype.moveTowardCharacter = function(character) {
    const sx = this.deltaXFrom(character.x)
    const sy = this.deltaYFrom(character.y)
    const horz = sx > 0 ? 4 : 6
    const vert = sy > 0 ? 8 : 2

    if(this.canMoveTowardCharacterDiagonally(sx, sy, horz, vert)){
        this.moveDiagonally(horz, vert)
    }else{
        Alias.Game_Character_moveTowardCharacter.call(this, character)
    }
}

Game_Character.prototype.canMoveTowardCharacterDiagonally = function(sx, sy, horz, vert) {
    return  this.hasDiagonalMovement() && sx !== 0 && sy !== 0 && 
            this.canPassDiagonally(this.x, this.y, horz, vert)
}

/* -------------------------------- MOVE AWAY ------------------------------- */
Alias.Game_Character_moveAwayFromCharacter = Game_Character.prototype.moveAwayFromCharacter
Game_Character.prototype.moveAwayFromCharacter = function(character) {
    const sx = this.deltaXFrom(character.x)
    const sy = this.deltaYFrom(character.y)
    const horz = sx > 0 ? 6 : 4
    const vert = sy > 0 ? 2 : 8

    if(this.canMoveAwayFromCharacterDiagonally(sx, sy, horz, vert)){
        this.moveDiagonally(horz, vert)
    }else{
        Alias.Game_Character_moveAwayFromCharacter.call(this, character)
    }
}

Game_Character.prototype.canMoveAwayFromCharacterDiagonally = function(sx, sy, horz, vert) {
    return  this.hasDiagonalMovement() && sx !== 0 && sy !== 0 && 
            this.canPassDiagonally(this.x, this.y, horz, vert)
}

/* ------------------------------- TURN TOWARD ------------------------------ */
Alias.Game_Character_turnTowardCharacter = Game_Character.prototype.turnTowardCharacter
Game_Character.prototype.turnTowardCharacter = function(character) {
    const sx = this.deltaXFrom(character.x)
    const sy = this.deltaYFrom(character.y)

    if(this.canTurnDiagonally(sx, sy)){
        this.turnTowardCharacterDiagonally(sx, sy)
    }else{
        Alias.Game_Character_turnTowardCharacter.call(this, character)  
    }
}

Game_Character.prototype.canTurnDiagonally = function(sx, sy) {
    return this.hasDiagonalMovement() && sx !== 0 && sy !== 0
}

Game_Character.prototype.turnTowardCharacterDiagonally = function(sx, sy) {
    const horz = sx > 0 ? 4 : 6
    const vert = sy > 0 ? 8 : 2
    const diagDirection = Plugin.getDiagonalDirectionByNormalDirection(horz, vert)

    this.setDiagonalDirection(diagDirection)
}

/* -------------------------------- TURN AWAY ------------------------------- */
Alias.Game_Character_turnAwayFromCharacter = Game_Character.prototype.turnAwayFromCharacter
Game_Character.prototype.turnAwayFromCharacter = function(character) {
    const sx = this.deltaXFrom(character.x)
    const sy = this.deltaYFrom(character.y)

    if(this.canTurnDiagonally(sx, sy)){
        this.turnAwayFromCharacterDiagonally(sx, sy)
    }else{
        Alias.Game_Character_turnAwayFromCharacter.call(this, character)
    }
}

Game_Character.prototype.turnAwayFromCharacterDiagonally = function(sx, sy) {
    const horz = sx > 0 ? 6 : 4
    const vert = sy > 0 ? 2 : 8
    const diagDirection = Plugin.getDiagonalDirectionByNormalDirection(horz, vert)

    this.setDiagonalDirection(diagDirection)
}

/* -------------------------- TURN INTO DIRECTIONS -------------------------- */
Alias.Game_Character_turnRight90 = Game_Character.prototype.turnRight90
Game_Character.prototype.turnRight90 = function() {
    if(this.hasDiagonalMovement()){
        this.turnRight45()
    }else{
        Alias.Game_Character_turnRight90.call(this)
    }
}

Game_Character.prototype.turnRight45 = function() {
    const direction = this.getNextRightDirection()

    if(this.isDiagonalDirection(direction)){
        this.setDiagonalDirection(direction)
    }else{
        this.setDiagonalDirection(0)
        this.setDirection(direction)
    }
}

Game_Character.prototype.getNextRightDirection = function(){
    return {1: 4, 2: 1, 3: 2, 4: 7, 6: 3, 7: 8, 8: 9, 9: 6}[this.realDirection()]
}

Alias.Game_Character_turnLeft90 = Game_Character.prototype.turnLeft90
Game_Character.prototype.turnLeft90 = function() {
    if(this.hasDiagonalMovement()){
        this.turnLeft45()
    }else{
        Alias.Game_Character_turnLeft90.call(this)
    }
}

Game_Character.prototype.turnLeft45 = function() {
    const direction = this.getNextLeftDirection()

    if(this.isDiagonalDirection(direction)){
        this.setDiagonalDirection(direction)
    }else{
        this.setDiagonalDirection(0)
        this.setDirection(direction)
    }
}

Game_Character.prototype.getNextLeftDirection = function(){
    return {1: 2, 2: 3, 3: 6, 4: 1, 6: 9, 7: 4, 8: 7, 9: 8}[this.realDirection()]
}

Alias.Game_Character_turn180 = Game_Character.prototype.turn180
Game_Character.prototype.turn180 = function() {
    if(this.diagonalDirection() > 0){
        this.turn90()
    }else{
        Alias.Game_Character_turn180.call(this)
    }
}

Game_Character.prototype.turn90 = function() {
    this.setDiagonalDirection(this.reverseDir(this.diagonalDirection()))
}

Alias.Game_Character_turnRandom = Game_Character.prototype.turnRandom
Game_Character.prototype.turnRandom = function() {
    if(this.hasDiagonalMovement()){
        this.turnRandomDiagonally()
    }else{
        Alias.Game_Character_turnRandom.call(this)
    }
}

Game_Character.prototype.turnRandomDiagonally = function() {
    const direction = [1, 2, 3, 4, 6, 7, 8, 9][Math.randomInt(8)]

    if(this.isDiagonalDirection(direction)){
        this.setDiagonalDirection(direction)
    }else{
        this.setDiagonalDirection(0)
        this.setDirection(direction)
    }
}

/* ------------------------- MOVE BACKWARD / FORWARD ------------------------ */
Alias.Game_Character_moveForward = Game_Character.prototype.moveForward
Game_Character.prototype.moveForward = function() {
    if(this.isFacingDiagonally()){
        this.moveForwardDiagonally()
    }else{
        Alias.Game_Character_moveForward.call(this)
    }
}

Game_Character.prototype.moveForwardDiagonally = function() {
    const [horz, vert] = Plugin.getNormalDirectionalByDiagonalDirection(this.realDirection())
    this.moveDiagonally(horz, vert)
}

Alias.Game_Character_moveBackward = Game_Character.prototype.moveBackward
Game_Character.prototype.moveBackward = function() {
    if(this.isFacingDiagonally()){
       this.moveBackwardDiagonally()
    }else{
        Alias.Game_Character_moveBackward.call(this)
    }
}

Game_Character.prototype.moveBackwardDiagonally = function() {
    const direction = this.reverseDir(this.realDirection())
    const [horz, vert] = Plugin.getNormalDirectionalByDiagonalDirection(direction)
    const lastDirectionFix = this.isDirectionFixed()

    this.setDirectionFix(true)
    this.moveDiagonally(horz, vert)
    this.setDirectionFix(lastDirectionFix)
}

/* ------------------------------ GAME VEHICLE ------------------------------ */
Alias.Game_Vehicle_hasDiagonalMovement = Game_Vehicle.prototype.hasDiagonalMovement
Game_Vehicle.prototype.hasDiagonalMovement = function() {
    return Alias.Game_Vehicle_hasDiagonalMovement.call(this) && !$gameSwitches.value(Plugin.getParam().vehicleSw)
}

/* ------------------------------- GAME EVENT ------------------------------- */
Alias.Game_Event_hasDiagonalMovement = Game_Event.prototype.hasDiagonalMovement
Game_Event.prototype.hasDiagonalMovement = function() {
    return Alias.Game_Event_hasDiagonalMovement.call(this) && !$gameSwitches.value(Plugin.getParam().eventSw)
}

/* ------------------------------- GAME PLAYER ------------------------------ */
Alias.Game_Player_hasDiagonalMovement = Game_Player.prototype.hasDiagonalMovement
Game_Player.prototype.hasDiagonalMovement = function() {
    return Alias.Game_Player_hasDiagonalMovement.call(this) && !$gameSwitches.value(Plugin.getParam().playerSw)
}

Alias.Game_Player_executeMove = Game_Player.prototype.executeMove
Game_Player.prototype.executeMove = function(direction) {
    if(this.isDiagonalDirection(direction)){
        this.executeMoveDiagonally(direction)
    }else{
        Alias.Game_Player_executeMove.call(this, direction)
    }
}

Alias.Game_Player_getInputDirection = Game_Player.prototype.getInputDirection
Game_Player.prototype.getInputDirection = function() {
    if(this.hasDiagonalMovement()){
        return Input.dir8 || Alias.Game_Player_getInputDirection.call(this)
    }else{
        return Alias.Game_Player_getInputDirection.call(this)
    }
}

/* -------------------------------- FOLLOWER -------------------------------- */
Alias.Game_Follower_hasDiagonalMovement = Game_Follower.prototype.hasDiagonalMovement
Game_Follower.prototype.hasDiagonalMovement = function() {
    return Alias.Game_Follower_hasDiagonalMovement.call(this) && !$gameSwitches.value(Plugin.getParam().playerSw)
}

Game_Follower.prototype.diagonalSpeed = function(){
    return 0
}

/* ---------------------------- GAME INTERPRETER ---------------------------- */
Alias.Game_Interpreter_gameDataOperand = Game_Interpreter.prototype.gameDataOperand
Game_Interpreter.prototype.gameDataOperand = function(type, param1, param2) {
    if(type === 5 && param2 === 2){
        return this.gameDataOperandRealDirection(param1)
    }else{
        return Alias.Game_Interpreter_gameDataOperand.call(this, type, param1, param2)
    }
}

Game_Interpreter.prototype.gameDataOperandRealDirection = function(param1){
    const char = this.character(param1)

    return char?.realDirection() || 0
}

/* ---------------------------- SPRITE CHARACTER ---------------------------- */
Sprite_Character.prototype.hasDiagonalImage = function() {
    return this._isBigCharacter && this._character.hasDiagonalSprite()
}

Sprite_Character.prototype.hasDiagonalMovement = function() {
    return this._isBigCharacter && this._character.hasDiagonalMovement()
}

Alias.Sprite_Character_characterBlockX = Sprite_Character.prototype.characterBlockX
Sprite_Character.prototype.characterBlockX = function() {
    const alias = Alias.Sprite_Character_characterBlockX.call(this)

    if(this.hasDiagonalImage()){
        return this.diagonalCharacterBlockX(alias)
    }else{
        return alias
    }
}

Sprite_Character.prototype.diagonalCharacterBlockX = function(characterBlockX) {
    const char = this._character
    const index = char.characterIndex()
    const maxPattern = char._customFrameKey ? char.maxPattern() : char.maxPattern()-1

    return characterBlockX + (index % 2 === 0 ? 0 : maxPattern)
}

Alias.Sprite_Character_patternWidth = Sprite_Character.prototype.patternWidth
Sprite_Character.prototype.patternWidth = function() {
    const alias = Alias.Sprite_Character_patternWidth.call(this)

    if(this.hasDiagonalImage()){
        return this.diagonalPatternWidth(alias)
    }else{
        return alias
    }
}

Sprite_Character.prototype.diagonalPatternWidth = function(patternWidth) {
    return patternWidth/2
}

Alias.Sprite_Character_characterPatternY = Sprite_Character.prototype.characterPatternY
Sprite_Character.prototype.characterPatternY = function() {
    if(this.hasDiagonalImage()){
        return this.characterPatternYWithDiagonal()
    }else{
        return Alias.Sprite_Character_characterPatternY.call(this)
    }
}

Sprite_Character.prototype.characterPatternYWithDiagonal = function() {
    return {1:0, 2:0, 3:1, 4:1, 6:2, 7:2, 8:3, 9:3}[this._character.realDirection()]
}

}