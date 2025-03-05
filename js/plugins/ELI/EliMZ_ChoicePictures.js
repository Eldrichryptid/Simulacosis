//============================================================================
// Eli_ChoicePictures.js
//============================================================================

/*:
@target MZ
@base EliMZ_Book
@orderAfter EliMZ_EasingPicture

@plugindesc ♦5.0.2♦ Show different pictures for each choice.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-choice-pictures-for-rpg-maker-mz

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

● Show different pictures depending on what choice is highlighted.
● Super easy to use with simple plugin command and event interface!

============================================================================
How to use
============================================================================

On the plugin parameters, you can choose a switch that will be responsible 
for enabling/disabling the plugin functionality.

♦ Plugin Command: Setup Choice Pictures ♦

Setup a picture ID and a picture file for the choice.
After that, you can set up the Select / Unselect behaviors of the 
choice pictures.

• Selected → When a choice is selected, these settings will be applied 
to the picture.

• Unselected → When a choice is unselected, these settings will be 
applied to the picture.

Use always before the choice command.

NOTE: If you are using Eli_EasingPictures, you can use the plugin command 
to set the easing type by Id before setup each picture.

● In the picture name field, you can go to the text tab and use a formula 
there, like $gameVariables.value(1). But it must return the right file 
path to load the picture.

♦ Plugin Command: Choice Pictures by Event ♦

This is another way of attaching pictures to choices.
This plugin command will prepare the engine to use the default move 
picture event command to apply the configurations to the choice pictures.

You just need to attach a picture ID and NAME to a choice.
After that, to configure the Select/Unselect behaviors of the pictures, 
you just need to call the Move Picture command and, each one of them 
will apply their settings to the choice pictures.

Just need to remember that they will be applied in that order:
1º Move Picture Command: Unselect Behavior
2º Move Picture Command: Select Behavior

So, two commands for each choice.

NOTE: The picture ID and WAIT behavior are ignored.

============================================================================
Update Log
============================================================================

https://tinyurl.com/choicePictures

============================================================================

@param switch
@text Switch to Enable Plugin
@type switch
@desc If this switch is true, the plugin is enabled.
@default 0

@command setupPictures
@text Setup Choice Pictures
@desc Setup each pictures for each choice.

    @arg pictures
    @text All pictures
    @type struct<picturesSt>[]
    @desc Choose the default pictures for each index.
    @default ["{\"id\":\"1\",\"name\":\"pictures/actors/Actor1_1\",\"onSelect\":\"{\\\"duration\\\":\\\"1\\\",\\\"easeType\\\":\\\"linear\\\",\\\"easeMove\\\":\\\"In\\\",\\\"x\\\":\\\"\\\",\\\"y\\\":\\\"\\\",\\\"scaleX\\\":\\\"\\\",\\\"scaleY\\\":\\\"\\\",\\\"blendMode\\\":\\\"\\\",\\\"origin\\\":\\\"\\\",\\\"opacity\\\":\\\"\\\",\\\"tint\\\":\\\"\\\"}\",\"onUnselect\":\"{\\\"duration\\\":\\\"1\\\",\\\"easeType\\\":\\\"linear\\\",\\\"easeMove\\\":\\\"In\\\",\\\"x\\\":\\\"\\\",\\\"y\\\":\\\"\\\",\\\"scaleX\\\":\\\"\\\",\\\"scaleY\\\":\\\"\\\",\\\"blendMode\\\":\\\"\\\",\\\"origin\\\":\\\"\\\",\\\"opacity\\\":\\\"\\\",\\\"tint\\\":\\\"\\\"}\"}","{\"id\":\"2\",\"name\":\"pictures/actors/Actor1_2\",\"onSelect\":\"{\\\"duration\\\":\\\"1\\\",\\\"easeType\\\":\\\"linear\\\",\\\"easeMove\\\":\\\"In\\\",\\\"x\\\":\\\"\\\",\\\"y\\\":\\\"\\\",\\\"scaleX\\\":\\\"\\\",\\\"scaleY\\\":\\\"\\\",\\\"blendMode\\\":\\\"\\\",\\\"origin\\\":\\\"\\\",\\\"opacity\\\":\\\"\\\",\\\"tint\\\":\\\"\\\"}\",\"onUnselect\":\"{\\\"duration\\\":\\\"1\\\",\\\"easeType\\\":\\\"linear\\\",\\\"easeMove\\\":\\\"In\\\",\\\"x\\\":\\\"\\\",\\\"y\\\":\\\"\\\",\\\"scaleX\\\":\\\"\\\",\\\"scaleY\\\":\\\"\\\",\\\"blendMode\\\":\\\"\\\",\\\"origin\\\":\\\"\\\",\\\"opacity\\\":\\\"\\\",\\\"tint\\\":\\\"\\\"}\"}","{\"id\":\"3\",\"name\":\"pictures/actors/Actor1_3\",\"onSelect\":\"{\\\"duration\\\":\\\"1\\\",\\\"easeType\\\":\\\"linear\\\",\\\"easeMove\\\":\\\"In\\\",\\\"x\\\":\\\"\\\",\\\"y\\\":\\\"\\\",\\\"scaleX\\\":\\\"\\\",\\\"scaleY\\\":\\\"\\\",\\\"blendMode\\\":\\\"\\\",\\\"origin\\\":\\\"\\\",\\\"opacity\\\":\\\"\\\",\\\"tint\\\":\\\"\\\"}\",\"onUnselect\":\"{\\\"duration\\\":\\\"1\\\",\\\"easeType\\\":\\\"linear\\\",\\\"easeMove\\\":\\\"In\\\",\\\"x\\\":\\\"\\\",\\\"y\\\":\\\"\\\",\\\"scaleX\\\":\\\"\\\",\\\"scaleY\\\":\\\"\\\",\\\"blendMode\\\":\\\"\\\",\\\"origin\\\":\\\"\\\",\\\"opacity\\\":\\\"\\\",\\\"tint\\\":\\\"\\\"}\"}"]

@command cmd_setPicToChoice
@text Choice Pictures by Event
@desc Setup each pictures for each choice.

    @arg eventChoicePic
    @text Picture Settings
    @type struct<eventChoicePicSt>[]
    @desc The choice index that the next Show/Move picture commands will be attached.
    @default 

*/

/* -------------------------------- PICTURES -------------------------------- */
{

/*~struct~picturesSt:

@param id
@text Picture Id
@type text
@desc The picture Id
@default 1

@param name
@text Picture Image
@type file
@dir img/pictures/
@desc The image to be used as a picture.
@default 1

@param onUnselect
@text Unselect
@type struct<pictureSettingsSt>
@desc Set a property to change when unselecting a picture. Leave empty or "" to not change.
@default {"duration":"1","easing":"linear","x":"","y":"","scaleX":"","scaleY":"","blendMode":"","origin":"","opacity":"","tint":""}

@param onSelect
@text Select
@type struct<pictureSettingsSt>
@desc Set a property to change when selecting a picture. Leave empty or "" to not change.
@default {"duration":"1","easing":"linear","x":"","y":"","scaleX":"","scaleY":"","blendMode":"","origin":"","opacity":"","tint":""}

*/

}

/* ----------------------------- SELECT SETTINGS ---------------------------- */
{
/*~struct~pictureSettingsSt:

@param duration
@text Duration (Frames)
@type text
@desc Need to be above 0 for the easing movement to work.
@default 1

@param easing
@text Easing
@type select
@option --- Defaults --- @option linear @option slowStart @option slowEnd @option slowStartEnd @option --- In --- @option quadIn @option cubicIn @option quartIn @option quintIn @option sineIn @option expoIn @option circIn @option backIn @option bounceIn @option --- Out --- @option quadOut @option cubicOut @option quartOut @option quintOut @option sineOut @option expoOut @option circOut @option backOut @option bounceOut @option --- In / Out --- @option quadInOut @option cubicInOut @option quartInOut @option quintInOut @option sineInOut @option expoInOut @option circInOut @option backInOut @option bounceInOut
@desc Choose the easing type. The Duration need to be above 0.
@default linear
@parent duration

@param x
@text Position X
@type text
@desc Change picture X position.
@default ""

@param y
@text Position Y
@type text
@desc Change picture Y position.
@default ""

@param scaleX
@text Scale X
@type text
@desc Change picture scale in % values
@default ""

@param scaleY
@text Scale Y
@type text
@desc Change picture scale in % values
@default ""

@param blendMode
@text Blend Mode
@type select
@option Normal
@option Additive
@option Multiply
@option Screen
@desc Change the picture blend mode.
@default ""

@param origin
@text Origin
@type select
@option --- Defaults --- 
@option UpperLeft 
@option Center 
@option --- Extras --- 
@option UpperCenter 
@option UpperRight 
@option CenterLeft 
@option CenterRight 
@option LowLeft 
@option LowCenter 
@option LowRight
@desc Change picture origin.
@default ""

@param opacity
@text Opacity
@type text
@desc Change the picture opacity.
@default ""

@param tint
@text Tint
@type text
@desc Tint picture. Red, Blue, Green, Gray
@default ""

*/
}

/* -------------------------- EVENT CHOICE PICTURE -------------------------- */
{
/*~struct~eventChoicePicSt:

    @param id
    @text Picture Id
    @type text
    @desc The picture Id
    @default 0

    @param name
    @text Picture File
    @type file
    @dir img/pictures/
    @desc The image to be used as a picture.
    @default ""

*/
}

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_ChoicePictures = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
{

Eli.ChoicePictures = {

    version: 5.02,
    url: "https://hakuenstudio.itch.io/eli-choice-pictures-for-rpg-maker-mz",
    parameters: {
        switch: 0,
    },
    alias: {},
    choicePicEventSettings: [{
        index: 0, 
        behaviors:["onUnselect", "onSelect"]
    }],
    oldIndex: -1,
    list: [{
        id: 0,
        name: "",
        onUnselect: {  
            origin: 0, 
            x: 0, y: 0, 
            scaleX: 100, scaleY: 100, 
            opacity: 255, 
            blendMode: 0, 
            duration: 1, 
            easing: 0, 
            tint: [0, 0, 0, 0]
        },
        onSelect: {
            origin: 0, 
            x: 0, y: 0, 
            scaleX: 100, scaleY: 100, 
            opacity: 255, 
            blendMode: 0, 
            duration: 1, 
            easing: 0, 
            tint: [0, 0, 0, 0]
        }
    }],

    initialize(){
        this.initParameters()
        this.initPluginCommands()
        this.createList()
        this.choicePicEventSettings = []
    },

    initParameters(){
        const parameters = PluginManager.parameters("EliMZ_ChoicePictures")
        this.parameters.switch = Number(parameters.switch)
    },

    initPluginCommands(){
        const commands = ["setupPictures", "cmd_setPicToChoice"]
        Eli.PluginManager.registerCommands(this, commands)
    },

    createList(){
        for(let i = 0; i < 50; i++){
            this.list[i] = this.createInitialSettings()
        }
    },

    getPicOrigin(origin){
        const anchors = {
            
            UpperLeft: 0, // Default
            UpperCenter: 4,
            UpperRight: 2,

            CenterLeft: 3,
            Center: 1, // Default
            CenterRight: 5,
            
            LowLeft: 6,
            LowCenter: 7,
            LowRight: 8,
        }

        return anchors[origin]
    },

    getBlendMode(blendMode){
        return {
            Normal: 0,
            Additive: 1,
            Multiply: 2,
            Screen: 3
        }[blendMode]
    },

    getEasingType(type){
        const easing = {linear: 0, slowStart: 1, slowEnd: 2, slowStartEnd: 3}
        return easing[type] ?? type
    },

    clearList(){
        for(let i = 0; i < 50; i++){
            $gameScreen.erasePicture(this.list[i].id)
            this.list[i] = this.createInitialSettings()
        }
    },

    createInitialSettings(){
        return {
            id: 0,
            name: "",
            onUnselect: {  
                origin: 0, 
                x: 0, y: 0, 
                scaleX: 100, scaleY: 100, 
                opacity: 255, 
                blendMode: 0, 
                duration: 1, 
                easing: 0, 
                tint: [0, 0, 0, 0]
            },
            onSelect: {
                origin: 0, 
                x: 0, y: 0, 
                scaleX: 100, scaleY: 100, 
                opacity: 255, 
                blendMode: 0, 
                duration: 1, 
                easing: 0, 
                tint: [0, 0, 0, 0]
            }
        }
    },

    isEnable(){
        const id = this.parameters.switch
        return $gameSwitches.value(id)
    },

    resetAllSettings(){
        if(Imported.Eli_EasingPicture){
            Eli.EasingPicture.resetEasing(this.choiceIndex)
        }
        
        this.clearList()
        this.choicePicEventSettings = []
        this.oldIndex = -1
    },

    getPictureCoordinates(params){
        if(params[3] === 0){  // Direct designation
            return {
                x: params[4], 
                y: params[5]
            }
        }else{  // Designation with variables
            return {
                x: $gameVariables.value(params[4]), 
                y: $gameVariables.value(params[5])
            }
        }
    },

/* ----------------------------- PLUGIN COMMANDS ---------------------------- */

    setupPictures(args){
        const allPictures = JSON.parse(args.pictures)

        for(let i = 0; i < allPictures.length; i++){
            const picture = JSON.parse(allPictures[i])
            picture.id = Number(Eli.Utils.convertEscapeVariablesOnly(picture.id))
            picture.name = Eli.Utils.processEscapeVarOrFormula(picture.name)

            ImageManager.loadPicture(picture.name)

            picture.onSelect = this.processPictureSettings(picture.onSelect)
            picture.onUnselect = this.processPictureSettings(picture.onUnselect)

            this.list[i] = picture
        }
    },

    processPictureSettings(settings){
        settings = JSON.parse(settings)
        settings.origin = this.getPicOrigin(settings.origin)
        settings.x = Number(Eli.Utils.processEscapeVarOrFormula(settings.x))
        settings.y = Number(Eli.Utils.processEscapeVarOrFormula(settings.y))
        settings.scaleX = Number(Eli.Utils.processEscapeVarOrFormula(settings.scaleX))
        settings.scaleY = Number(Eli.Utils.processEscapeVarOrFormula(settings.scaleY))
        settings.opacity = Number(Eli.Utils.processEscapeVarOrFormula(settings.opacity))
        settings.blendMode = this.getBlendMode(settings.blendMode)
        settings.duration = Number(settings.duration)
        settings.easing = this.getEasingType(settings.easing)
        settings.tint = Eli.ColorManager.getRgb(settings.tint)

        return settings
    },

    cmd_setPicToChoice(args){
        const choicePicSettings = JSON.parse(args.eventChoicePic)

        //const choicePicSettings = Eli.PluginManager.convertParameters(args.eventChoicePic)
        
        for(let i = 0; i < choicePicSettings.length; i++){
            const {id, name} = JSON.parse(choicePicSettings[i])
            const behaviors = ["onUnselect", "onSelect"]

            this.list[i].id = Number(id)
            this.list[i].name = Eli.Utils.processEscapeVarOrFormula(name)

            this.choicePicEventSettings[i] = {index: i, behaviors: behaviors}
        }
    },

}

const Plugin = Eli.ChoicePictures
const Alias = Eli.ChoicePictures.alias

Plugin.initialize()

/* ---------------------------- GAME INTERPRETER ---------------------------- */
{

// Move Picture
Alias.Game_Interpreter_command232 = Game_Interpreter.prototype.command232
Game_Interpreter.prototype.command232 = function(params) {
    if(this.isChoicePicturesModeOn()){
        this.setChoicePictureBehaviorSettings(params)
        return true
    }else{
        return Alias.Game_Interpreter_command232.call(this, params)
    }
}

Game_Interpreter.prototype.setChoicePictureBehaviorSettings = function(params){
    const choiceIndex = Plugin.choicePicEventSettings[0].index
    const behavior = Plugin.choicePicEventSettings[0].behaviors.shift()
    const choicePic = Plugin.list[choiceIndex]
    const settings = choicePic[behavior]
    const {x, y} = Plugin.getPictureCoordinates(params)

    settings.origin = params[2]
    settings.x = x
    settings.y = y
    settings.scaleX = params[6]
    settings.scaleY = params[7]
    settings.opacity = params[8]
    settings.blendMode = params[9]
    settings.duration = params[10]
    settings.easing = params[12]

    if(Plugin.choicePicEventSettings[0].behaviors.length === 0){
        Plugin.choicePicEventSettings.shift()
    }

}

Game_Interpreter.prototype.isChoicePicturesModeOn = function() {
    return Plugin.choicePicEventSettings.length > 0
}

}

/* --------------------------- WINDOW CHOICE LIST --------------------------- */
{

Alias.Window_ChoiceList_start = Window_ChoiceList.prototype.start
Window_ChoiceList.prototype.start = function() {
    Alias.Window_ChoiceList_start.call(this)
    
    if(Plugin.isEnable()){
        this.startPictures()
    }
}

Alias.Window_ChoiceList_select = Window_ChoiceList.prototype.select
Window_ChoiceList.prototype.select = function(index) {
    Alias.Window_ChoiceList_select.call(this, index)
    
    if(Plugin.isEnable()){
        this.operatePictureSelection(index)
    }
}

Alias.Window_ChoiceList_close = Window_ChoiceList.prototype.close
Window_ChoiceList.prototype.close = function() {
    Alias.Window_ChoiceList_close.call(this)
    Plugin.resetAllSettings()
}

Window_ChoiceList.prototype.startPictures = function(){
    for(let i = 0; i < this.maxItems(); i++){
        this.showPicture(i)
    }
    if($gameMessage.choiceDefaultType() > -1){
        this.selectPicture($gameMessage.choiceDefaultType())
    }
}

Window_ChoiceList.prototype.operatePictureSelection = function(index){
    if(Plugin.oldIndex > -1){
        this.unselectPicture(Plugin.oldIndex)
    }

    if(index > -1){
        this.selectPicture(index)
        Plugin.oldIndex = index
    }
}

Window_ChoiceList.prototype.showPicture = function(index){
    const choicePic = Plugin.list[index]
    const behavior = choicePic.onUnselect
    const {origin, x, y, scaleX, scaleY, opacity, blendMode} = behavior

    if(choicePic.id > 0){
        $gameScreen.showPicture(choicePic.id, choicePic.name, origin, x, y, scaleX, scaleY, opacity, blendMode)
    }

}

Window_ChoiceList.prototype.unselectPicture = function(index){
    const choicePic = Plugin.list[index]
    const behavior = choicePic.onUnselect
    const {origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easing} = behavior

    $gameScreen.movePicture(choicePic.id, origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easing)
}

Window_ChoiceList.prototype.selectPicture = function(index){
    const choicePic = Plugin.list[index]
    const behavior = choicePic.onSelect
    const {origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easing} = behavior

    $gameScreen.movePicture(choicePic.id, origin, x, y, scaleX, scaleY, opacity, blendMode, duration, easing)
}

}

}