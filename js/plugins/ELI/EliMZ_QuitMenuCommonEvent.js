//============================================================================
// EliMZ_QuitMenuCommonEvent.js
//============================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦5.1.0♦ Play a common event when the menu is closed.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-quitmenucommonevent-rpg-maker-mv

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
• Rate the plugin! Please, is very important to me ^^
https://hakuenstudio.itch.io/eli-quitmenucommonevent-rpg-maker-mv/rate?source=game

• Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
============================================================================
Features
============================================================================

● Common Event Id → The common event that will play when quitting the menu.
● Play/Run order → You can choose to play the quit common event after or 
before all other reserved common events.

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1M1JTulBhpddr0U8CS9AfSDxQ2mNchLqtsxkxdLqV-T0/edit?usp=sharing

============================================================================

@param commonEventId
@text Common Event Id
@type common_event
@desc Select here the common event to play when leaves the menu.
@default 0

@param playOrder
@text Play/Run order
@type select
@option Run first
@option Run last
@desc Choose to play the quit common event after or before all other reserved common events.
@default Run first

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_QuitMenuCommonEvent = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

class Parameters {
    constructor(parameters){
        this.commonEventId = Number(parameters.commonEventId)
        this.playOrder = parameters.playOrder
    }
}

Eli.QuitMenuCommonEvent = {

    version: 5.10,
    url: "https://hakuenstudio.itch.io/eli-quitmenucommonevent-rpg-maker-mv",
    alias: {},
    Parameters: Parameters,
    parameters: new Parameters(PluginManager.parameters("EliMZ_QuitMenuCommonEvent")),

    initialize(){
        this.initPluginCommands()
    },

    initPluginCommands(){},

    param(){
        return this.parameters
    },

}

const Plugin = Eli.QuitMenuCommonEvent
const Alias = Eli.QuitMenuCommonEvent.alias

Plugin.initialize()

/* -------------------------------- GAME TEMP ------------------------------- */

Alias.Game_Temp_reserveCommonEvent = Game_Temp.prototype.reserveCommonEvent
Game_Temp.prototype.reserveCommonEvent = function(commonEventId) {
    Alias.Game_Temp_reserveCommonEvent.call(this, commonEventId)
    const index = this._commonEventQueue.indexOf(Plugin.param().commonEventId)

    if(index > -1){
        Eli.Array.removeElement(this._commonEventQueue, index, 1)

        if(Plugin.param().playOrder === "Run first"){
            this._commonEventQueue.unshift(Plugin.param().commonEventId)
        }else{
            this._commonEventQueue.push(Plugin.param().commonEventId)
        }
    }
}

/* ------------------------------ SCENE MANAGER ----------------------------- */

Alias.SceneManager_goto = SceneManager.goto
SceneManager.goto = function(sceneClass) {
    Alias.SceneManager_goto.call(this, sceneClass)
    this.reserveQuitMenuCommonEvent(sceneClass)
}

SceneManager.reserveQuitMenuCommonEvent = function(sceneClass){
    const isOnSceneMap = this._scene && this._scene.constructor.name === "Scene_Map"
    const isGoingToSceneMenu = sceneClass && sceneClass === Scene_Menu
    
    if(isOnSceneMap && isGoingToSceneMenu){
        const id = Plugin.param().commonEventId
        $gameTemp.reserveCommonEvent(id)
    }
}

/* ----------------------------- SCENE ITEM BASE ---------------------------- */

Alias.Scene_ItemBase_checkCommonEvent = Scene_ItemBase.prototype.checkCommonEvent
Scene_ItemBase.prototype.checkCommonEvent = function() {
    if($gameTemp._commonEventQueue.includes(Plugin.param().commonEventId)){

        if($gameTemp._commonEventQueue.length > 1){
            SceneManager.goto(Scene_Map)
        }
        
    }else{
        Alias.Scene_ItemBase_checkCommonEvent.call(this)
    }
}

}