//==========================================================================
// EliMZ_CharManager.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book
@orderAfter VisuMZ_1_EventsMoveCore
@orderAfter GALV_CharacterShadowsMZ

@plugindesc ♦2.2.0♦ Changes a lot of character's sprite configurations.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-character-manager-for-rpg-maker/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Features
============================================================================

● Change the following characters configurations:
• Hue Color, Blend Color, Tone Color.
• Fade In/Out Characters
• Scale, Angle, Rotation, Offset, Skew
• Pattern/Frame

● You can change them by:
• Plugin Commands
• Event Notes
• Event Comments

● Works for:
• Events, Players, Followers, and Vehicles!

● Plays a common event when the character has a specific text on his 
filename.

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1nrypK787j7TLfvHKv77X5xxMJSBecPvvBDPCe5V6_Pw/edit?usp=sharing

============================================================================

@param persistentEventData
@text Persistent Event Data
@type boolean
@desc Set to true if you want to keep saving all event data across maps.
@default true

@param filenameSettings
@text Filename Settings
@type struct<filenameSettingsST>[]
@desc A list of common events to be played according to character filenames.
@default []

@command cmd_changeExtraProp
@text Change Extra Prop
@desc Change the extra properties values.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg prop
    @text Property
    @type select
    @option alpha
    @option offsetX
    @option offsetY
    @option zIndex
    @option angle
    @option rotationSpeed
    @option scaleX
    @option scaleY
    @option skewX
    @option skewY
    @option hueColor
    @desc The property you want to change.
    @default alpha

    @arg operation
    @text Operation
    @type select
    @option Set
    @option Add
    @desc Select if you want to set a value or add a value into the property.
    @default Set

    @arg value
    @text Value
    @type multiline_string
    @desc You can use formulas and \v[id] here. Must always end with: return value
    @default const value = 0
    return value

    @arg duration
    @text Duration
    @type text
    @desc Set here the duration in frames. You can use \V[id] or numbers.
    @default 1

    @arg easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Choose the easing type. Can use \v[id].
    @default linear

    @arg loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc How many times the animation will play again.
    @default 0

    @arg direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc See help file for this.
    @default normal

    @arg wait
    @text Wait for finish
    @type boolean
    @desc If set to true, the event interpreter will wait until the command is done.
    @default false

@command cmd_changeMultipleExtraProps
@text Change Multiple Extra Props
@desc Change more than one extra prop for one or more characters.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg propList
    @text Prop List
    @type struct<extraPropST>[]
    @desc All props you want to change
    @default []
    
    @arg wait
    @text Wait for finish
    @type boolean
    @desc If set to true, the event interpreter will wait until the command is done.
    @default false

    @arg -- Defaults --

    @arg operation
    @text Operation
    @type select
    @option Set
    @option Add
    @desc Select if you want to set a value or add a value into the property.
    @default Set

    @arg duration
    @text Duration
    @type text
    @desc Set here the duration in frames. You can use \V[id] or numbers.
    @default 1

    @arg easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Choose the easing type. Can use \v[id].
    @default linear

    @arg loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc How many times the animation will play again.
    @default 0

    @arg direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc See help file for this.
    @default normal

@command cmd_changeProp
@text Change Prop
@desc Change the default properties of the characters.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg prop
    @text Property
    @type select
    @option _x
    @option _y
    @option _realX
    @option _realY
    @option _moveSpeed
    @option _moveFrequency
    @option _blendMode
    @option _bushDepth
    @option _characterIndex
    @desc The property you want to change.
    @default _x

    @arg operation
    @text Operation
    @type select
    @option Set
    @option Add
    @desc Select if you want to set a value or add a value into the property.
    @default Set

    @arg value
    @text Value
    @type multiline_string
    @desc You can use formulas and \v[id] here. Must always end with: return value
    @default const value = 0
    return value

    @arg duration
    @text Duration
    @type text
    @desc Set here the duration in frames. You can use \V[id] or numbers.
    @default 1

    @arg easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Choose the easing type. Can use \v[id].
    @default linear

    @arg loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc How many times the animation will play again.
    @default 0

    @arg direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc See help file for this.
    @default normal

    @arg wait
    @text Wait for finish
    @type boolean
    @desc If set to true, the event interpreter will wait until the command is done.
    @default false

@command cmd_changeMultipleProps
@text Change Multiple Props
@desc Change more than one prop for one or more characters.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg propList
    @text Prop List
    @type struct<regularPropST>[]
    @desc All props you want to change
    @default []
    
    @arg wait
    @text Wait for finish
    @type boolean
    @desc If set to true, the event interpreter will wait until the command is done.
    @default false

    @arg -- Defaults --

    @arg operation
    @text Operation
    @type select
    @option Set
    @option Add
    @desc Select if you want to set a value or add a value into the property.
    @default Set

    @arg duration
    @text Duration
    @type text
    @desc Set here the duration in frames. You can use \V[id] or numbers.
    @default 1

    @arg easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Choose the easing type. Can use \v[id].
    @default linear

    @arg loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc How many times the animation will play again.
    @default 0

    @arg direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc See help file for this.
    @default normal

@command cmd_changeColor
@text Change Blend/Tone Color
@desc Change the Blend and Tone Color.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg prop
    @text Color Type
    @type select
    @option blendColor
    @option toneColor
    @desc 
    @default blendColor

    @arg value
    @text Value
    @type text
    @desc Blend Color: R,G,B,A
    Tone Color: R,G,B,Gray
    @default 0,0,0,0

    @arg duration
    @text Duration
    @type text
    @desc Set here the duration in frames. You can use \V[id] or numbers.
    @default 60

    @arg easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Choose the easing type. Can use \v[id].
    @default linear

    @arg loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc How many times the animation will play again.
    @default 0

    @arg direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc See help file for this.
    @default normal

    @arg wait
    @text Wait for finish
    @type boolean
    @desc If set to true, the event interpreter will wait until the command is done.
    @default false

@command cmd_changeHue
@text Change Hue Color
@desc Change the hue color.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg value
    @text Value
    @type text
    @desc From 0 to 360.
    @default 0

    @arg duration
    @text Duration
    @type text
    @desc Set here the duration in frames. You can use \V[id] or numbers.
    @default 60

    @arg easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Choose the easing type. Can use \v[id].
    @default linear

    @arg loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc How many times the animation will play again.
    @default 0

    @arg direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc See help file for this.
    @default normal

    @arg wait
    @text Wait for finish
    @type boolean
    @desc If set to true, the event interpreter will wait until the command is done.
    @default false

@command cmd_removeAnime
@text Stop/Remove Animation
@desc Remove the animations, making it stop playing.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg prop
    @text Property
    @type select
    @option alpha
    @option offsetX
    @option offsetY
    @option zIndex
    @option angle
    @option rotationSpeed
    @option scaleX
    @option scaleY
    @option skewX
    @option skewY
    @option hueColor
    @option blendColor
    @option toneColor
    @option _x
    @option _y
    @option _realX
    @option _realY
    @option _moveSpeed
    @option _moveFrequency
    @option _blendMode
    @option _bushDepth
    @option _characterIndex
    @desc The property you want to stop animating.
    @default alpha

@command cmd_extraPropToVariable
@text Extra Prop To Variable
@desc Stores a character property into a variable.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg prop
    @text Property
    @type select
    @option alpha
    @option offsetX
    @option offsetY
    @option zIndex
    @option angle
    @option rotationSpeed
    @option scaleX
    @option scaleY
    @option skewX
    @option skewY
    @option hueColor
    @option toneRed
    @option toneGreen
    @option toneBlue
    @option toneGray
    @option blendRed
    @option blendGreen
    @option blendBlue
    @option blendAlpha
    @desc The property you want to store into the variable.
    @default alpha

    @arg variable
    @text Variable Id
    @type variable
    @desc The variable Id that will hold the property.
    @default 0

@command cmd_setPatternAnimation
@text Change Pattern / Pattern Animation
@desc Change the pattern of the character.

    @arg id
    @text Character Id
    @type text
    @desc -2 = First Follower | -1 = Player | 0 = This event 
    1 >= Event Id | 'boat', 'ship', 'airship' Vehicle name
    @default 0

    @arg patternList
    @text Pattern List
    @type combo
    @option None
    @option Auto
    @desc Separate each one with a comma.
    @default Auto

    @arg reverse
    @text Reverse Pattern List
    @type boolean
    @desc If true, it will reverse the pattern list above.
    @default false

    @arg freeze
    @text Freeze Pattern
    @type boolean
    @desc Otionally, set this to true if you for the character to freeze on the last pattern.
    @default false

@command deleteCharColorFilter
@text Delete color filter
@desc Delete a character color filter. Separate each one with a comma or set a range like this: [minId, maxId].

    @arg id
    @text Character Id
    @type text
    @desc 0 Current Event | 1, 2... Event Id
    'boat', 'ship', 'airship' Vehicles | -1 Player | -2 First Follower
    @default 0

@command deleteAllColorFilters
@text Delete all color filters
@desc Delete all characters color filter.

*/

/*~struct~filenameSettingsST:

    @param tags
    @text Tags
    @type text
    @desc The tags to check on the filename. A tag cannot use space, it is case-sensitive. Separate each one with a comma.
    @default

    @param commonEvent
    @text Common Event
    @type common_event
    @desc The common event to be executed when the filename matches one of these tags.
    @default 

*/

/*~struct~extraPropST:

    @param prop
    @text Property
    @type select
    @option alpha
    @option offsetX
    @option offsetY
    @option zIndex
    @option angle
    @option rotationSpeed
    @option scaleX
    @option scaleY
    @option skewX
    @option skewY
    @option hueColor
    @desc The property you want to change.
    @default alpha

    @param value
    @text Value
    @type multiline_string
    @desc You can use formulas and \v[id] here. Must always end with: return value
    @default const value = 0
    return value

    @param operation
    @text Operation
    @type select
    @option Set
    @option Add
    @desc Leave blank to get the default value.
    @default

    @param duration
    @text Duration
    @type text
    @desc Leave blank to get the default value.
    @default

    @param easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Leave blank to get the default value.
    @default

    @param loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc Leave blank to get the default value.
    @default

    @param direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc Leave blank to get the default value.
    @default

*/

/*~struct~regularPropST:

    @param prop
    @text Property
    @type select
    @option _x
    @option _y
    @option _realX
    @option _realY
    @option _moveSpeed
    @option _moveFrequency
    @option _blendMode
    @option _bushDepth
    @option _characterIndex
    @desc The property you want to change.
    @default _x

    @param value
    @text Value
    @type multiline_string
    @desc You can use formulas and \v[id] here. Must always end with: return value
    @default const value = 0
    return value

    @param operation
    @text Operation
    @type select
    @option Set
    @option Add
    @desc Leave blank to get the default value.
    @default

    @param duration
    @text Duration
    @type text
    @desc Leave blank to get the default value.
    @default

    @param easing
    @text Easing
    @type combo
    @option linear @option --- In --- @option easeInQuad @option easeInCubic @option easeInQuart @option easeInQuint @option easeInSine @option easeInExpo @option easeInCirc @option easeInBack @option easeInBounce @option easeInElastic @option --- Out --- @option easeOutQuad @option easeOutCubic @option easeOutQuart @option easeOutQuint @option easeOutSine @option easeOutExpo @option easeOutCirc @option easeOutBack @option easeOutBounce @option easeOutElastic @option --- In / Out --- @option easeInOutQuad @option easeInOutCubic @option easeInOutQuart @option easeInOutQuint @option easeInOutSine @option easeInOutExpo @option easeInOutCirc @option easeInOutBack @option easeInOutBounce @option easeInOutElastic @option --- Out / In --- @option easeOutInQuad @option easeOutInCubic @option easeOutInQuart @option easeOutInQuint @option easeOutInSine @option easeOutInCirc @option easeOutInExpo @option easeOutInBack @option easeOutInBounce @option easeOutInElastic 
    @desc Leave blank to get the default value.
    @default

    @param loop
    @text Loop
    @type combo
    @option 0
    @option Infinity
    @desc Leave blank to get the default value.
    @default

    @param direction
    @text Direction
    @type select
    @option normal
    @option alternate
    @desc Leave blank to get the default value.
    @default

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_CharManager = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.CharManager = {

    filenameCommonEventChars: [],
    animationsHoldingEvent: [],
    Parameters: class {

        constructor(parameters){
            this.persistentEventData = parameters.persistentEventData
            this.filenameSettings = this.parseFilenameSettings(JSON.parse(parameters.filenameSettings || "[]"))
        }

        parseFilenameSettings(parameters){
            return parameters.map(param => {
                const {tags, commonEvent} = JSON.parse(param)
                return {
                    tags: tags.replaceAll(" ", "").split(","),
                    commonEvent: Number(commonEvent)
                }
            })
        }
    },

    initialize(){
        this.initParameters()
        this.registerPluginCommands()
    },

    initParameters(){
        const parameters = PluginManager.parameters(Eli.PluginManager.getPluginName())
        this.parameters = new this.Parameters(parameters)
    },

    registerPluginCommands(){
        const commands = [
            "cmd_changeExtraProp", "cmd_changeProp", "cmd_changeColor",
            "cmd_changeHue", "cmd_removeAnime",
            "cmd_setPatternAnimation", "cmd_extraPropToVariable", 
            "deleteAllColorFilters", "deleteCharColorFilter",
            "cmd_changeMultipleExtraProps", "cmd_changeMultipleProps",
        ]
        Eli.PluginManager.registerCommands(this, commands)
    },

    getParam(){
        return this.parameters
    },

    cmd_changeExtraProp(args){
        this.changeProp(args, this.getExtraPropFrom, "extraAnimeProps")
    },

    cmd_changeProp(args){
        this.changeProp(args, this.getRegularProp, "animeProps")
    },

    changeProp(args, getPropMethod, propType){
        const ids = Eli.PluginManager.createIdList(args.id)
        const duration = Number(args.duration)
        const loop = args.loop === "Infinity" ? Infinity : Number(args.loop)
        const isAdd = args.operation === "Add"
        const valueFunc = new Function(args.value)
        const allAnimes = []

        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){
                const initialValue = getPropMethod(character)[args.prop]
                let value = valueFunc.bind(character)()

                if(isAdd){
                    value += initialValue
                }

                const anime = new CharManagerAnime(initialValue, args.prop, value, duration, args.easing, args.direction, loop)
                const index = character[propType].findIndex(anime => anime.propName === args.prop)

                if(index > -1){
                    Eli.Array.removeElement(character[propType], index, 1)
                }

                character[propType].push(anime)
                allAnimes.push(anime)
            }
        }

        if(args.wait === "true"){
            Eli.PluginManager.currentInterpreter.charAnimes.push(...allAnimes.filter(anime => anime.loop !== Infinity))
        }

    },

    cmd_changeMultipleExtraProps(args){
        this.changeMultipleProps(args, this.getExtraPropFrom, "extraAnimeProps")
    },

    cmd_changeMultipleProps(args){
        this.changeMultipleProps(args, this.getRegularProp, "animeProps")
    },

    changeMultipleProps(args, getPropMethod, propType){
        const ids = Eli.PluginManager.createIdList(args.id)
        const defaultDuration = Number(args.duration)
        const defaultLoop = args.loop === "Infinity" ? Infinity : Number(args.loop)
        const defaultIsAdd = args.operation === "Add"
        const defaultEasing = args.easing
        const defaultDirection = args.direction
        const allAnimes = []

        const propList = JSON.parse(args.propList).map(item => {
            const prop = JSON.parse(item)
            prop.duration = prop.duration ? Number(prop.duration) : defaultDuration
            prop.loop = prop.loop ? (prop.loop === "Infinity" ? Infinity : Number(prop.loop)) : defaultLoop
            prop.operation = prop.operation ? prop.operation === "Add" : defaultIsAdd
            prop.easing = prop.easing || defaultEasing
            prop.direction = prop.direction || defaultDirection
            prop.valueFunc = new Function(prop.value)

            return prop
        })

        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){

                for(const property of propList){
                    const isAdd = property.operation
                    const initialValue = getPropMethod(character)[property.prop]
                    let value = property.valueFunc.bind(character)()

                    if(isAdd){
                        value += initialValue
                    }

                    const anime = new CharManagerAnime(initialValue, property.prop, value, property.duration, property.easing, property.direction, property.loop)
                    const index = character[propType].findIndex(anime => anime.propName === property.prop)

                    if(index > -1){
                        Eli.Array.removeElement(character[propType], index, 1)
                    }

                    character[propType].push(anime)
                    allAnimes.push(anime)
                }
            }
        }

        if(args.wait === "true"){
            Eli.PluginManager.currentInterpreter.charAnimes.push(...allAnimes.filter(anime => anime.loop !== Infinity))
        }
    },

    cmd_changeColor(args){
        const ids = Eli.PluginManager.createIdList(args.id)
        const duration = Number(args.duration)
        const loop = args.loop === "Infinity" ? Infinity : Number(args.loop)
        const allAnimes = []
        let props, values

        if(args.prop === "toneColor"){
            props = ["toneRed", "toneGreen", "toneBlue", "toneGray"]
            values = Eli.ColorManager.getRgbForTone(args.value)
        }else{
            props = ["blendRed", "blendGreen", "blendBlue", "blendAlpha"]
            values = Eli.ColorManager.getRgbForBlend(args.value)
        }
        
        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){
                this.getExtraPropFrom(character).needColorFilter = true

                for(let i = 0; i < 4; i++){
                    const prop = props[i]
                    const initialValue = this.getExtraPropFrom(character)[prop]
                    const anime = new CharManagerAnime(initialValue, prop, values[i], duration, args.easing, args.direction, loop)
                    const index = character.extraAnimeProps.findIndex(anime => anime.propName === args.prop)

                    if(index > -1){
                        Eli.Array.removeElement(character.extraAnimeProps, index, 1)
                    }

                    character.extraAnimeProps.push(anime)
                    allAnimes.push(anime)
                }
            }
        }

        if(args.wait === "true"){
            Eli.PluginManager.currentInterpreter.charAnimes.push(...allAnimes.filter(anime => anime.loop !== Infinity))
        }
    },

    cmd_changeHue(args){
        const ids = Eli.PluginManager.createIdList(args.id)
        const duration = Number(args.duration)
        const loop = args.loop === "Infinity" ? Infinity : Number(args.loop)
        const value = Number(Eli.PluginManager.parseVariables(args.value))
        const allAnimes = []

        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){
                const initialValue = this.getExtraPropFrom(character).hueColor
                const anime = new CharManagerAnime(initialValue, "hueColor", value, duration, args.easing, args.direction, loop)
                const index = character.extraAnimeProps.findIndex(anime => anime.propName === args.prop)

                if(index > -1){
                    Eli.Array.removeElement(character.extraAnimeProps, index, 1)
                }

                this.getExtraPropFrom(character).needColorFilter = true
                character.extraAnimeProps.push(anime)
                allAnimes.push(anime)
            }
        }

        if(args.wait === "true"){
            Eli.PluginManager.currentInterpreter.charAnimes.push(...allAnimes.filter(anime => anime.loop !== Infinity))
        }
    },

    cmd_removeAnime(args){
        const ids = Eli.PluginManager.createIdList(args.id)
        const extraAnimeProps = [
            "alpha", "offsetX", "offsetY", "zIndex", "angle", "rotationSpeed", 
            "scaleX", "scaleY", "skewX", "skewY", "hueColor", "blendColor", "toneColor"
        ]
        const propType = extraAnimeProps.includes(args.prop) ? "extraAnimeProps" : "animeProps"
        const props = []

        if(args.prop === "tone"){
            props.push("toneRed", "toneGreen", "toneBlue", "toneGray")
        }else if(args.prop === "blend"){
            props.push("blendRed", "blendGreen", "blendBlue", "blendAlpha")
        }else{
            props.push(args.prop)
        }

        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){

                for(const prop of props){
                    const index = character[propType].findIndex(anime => anime.propName === prop)

                    if(index > -1){
                        Eli.Array.removeElement(character[propType], index, 1)
                    }
                }
            }
        }
    },

    cmd_extraPropToVariable(args){
        const [id] = Eli.PluginManager.createIdList(args.id)
        const character = Eli.Utils.getMapCharacter(id)

        if(character){
            const value = this.getExtraPropFrom(character)[args.prop]
            $gameVariables.setValue(Number(args.variable), value)
        }
    },

    cmd_setPatternAnimation(args){
        const ids = Eli.PluginManager.createIdList(args.id)
        const reverse = args.reverse === "true"
        const freeze = args.freeze === "true"
        const patternList = args.patternList.split(",").map(item => isNaN(item) ? item : Number(item))

        if(patternList[0] === "None"){
            patternList.pop()
        }

        for(const id of ids){
            const char = Eli.Utils.getMapCharacter(id)

            if(char){
                char.setPatternAnimationList(patternList, freeze, reverse)
            }
        }
    },

    deleteAllColorFilters(){
        $gameMap.events().forEach(item => item.deleteColorFilter())
        $gamePlayer.deleteColorFilter()
        $gamePlayer.followers()._data.forEach(item => item.deleteColorFilter())
        $gameMap.vehicles().forEach(item => item.deleteColorFilter())
    },

    deleteCharColorFilter(args){
        const ids = Eli.PluginManager.createIdList(args.id)

        for(const id of ids){
            const character = Eli.Utils.getMapCharacter(id)

            if(character){
                character.deleteColorFilter()
            }
        }
    },

    initExtraPropsFor(subject){
        const key = subject.getGlobalKey()

        if(!$eliData.characterManager[key]){
            $eliData.characterManager[key] = this.createExtraProps()
        }
    },

    createExtraProps(){
        return {
            alpha: 1,

            needColorFilter: false,

            toneRed: 0,
            toneGreen: 0,
            toneBlue: 0,
            toneGray: 0,

            blendRed: 0,
            blendGreen: 0,
            blendBlue: 0,
            blendAlpha: 0,

            hueColor: 0,

            offsetX: 0,
            offsetY: 0,

            angle: 0,
            rotationSpeed: 0,

            scaleX: 1,
            scaleY: 1,
        
            skewX: 0,
            skewY: 0,
        
            zIndex: 0,
        }
    },

    getExtraPropFrom(subject){
        return $eliData.characterManager[subject.getGlobalKey()]
    },

    getRegularProp(subject){
        return subject
    },

}

function CharManagerAnime() {
    this.initialize(...arguments)
}

{

const Plugin = Eli.CharManager
const Alias = {}

Plugin.initialize()

/* --------------------------- CHAR MANAGER ANIME --------------------------- */

CharManagerAnime.prototype = Object.create(Eli.AnimeTiny.prototype)
CharManagerAnime.prototype.constructor = CharManagerAnime

CharManagerAnime.prototype.initialize = function(initialValue, propName, targetValue, duration, easing, direction, loop){
    this.propName = propName
    this.easing = easing
    this.targetDuration = duration
    this.targetDirection = direction
    this.targetValue = targetValue
    this.initialValue = initialValue
    this.loop = loop
    this.direction = "normal"
    this.duration = 0
    this.running = true
}

CharManagerAnime.prototype.setPropValue = function(targetObj, value){
    targetObj[this.propName] = value
}

CharManagerAnime.prototype.update = function(targetObj){
    if(this.duration < this.targetDuration){
        this.updateValue(targetObj)
    }else if(this.loop !== 0){
        this.reverse()
    }else{
        this.running = false
    }
}

CharManagerAnime.prototype.updateValue = function(targetObj){
    this.duration++
    const elapsedTime = this.calculateTime()
    const value = this.processValue(this.getStartValue(), elapsedTime, this.getTargetValue())
    this.setPropValue(targetObj, value)
    this.running = true
}

/* -------------------------------- SAVE DATA ------------------------------- */
Alias.Eli_SavedContents_initialize = Eli_SavedContents.prototype.initialize
Eli_SavedContents.prototype.initialize = function(){
    Alias.Eli_SavedContents_initialize.call(this)
    this.characterManager = {}
}

/* --------------------------- GAME CHARACTER BASE -------------------------- */
Alias.Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers
Game_CharacterBase.prototype.initMembers = function() {
    Alias.Game_CharacterBase_initMembers.call(this)
    this.initExtraProperties()
}

Game_CharacterBase.prototype.initExtraProperties = function() {
    Plugin.initExtraPropsFor(this)
    this.initAnimationPattern()
    this.extraAnimeProps = []
    this.animeProps = []
}

Game_CharacterBase.prototype.updateAnimeProps = function() {
    for(const anime of this.animeProps){
        anime.update(this)

        if(!anime.isRunning()){
            Eli.Array.remove(this.animeProps, anime)
        }
    }

    for(const anime of this.extraAnimeProps){
        anime.update(this.getExtraProps())

        if(!anime.isRunning()){
            Eli.Array.remove(this.extraAnimeProps, anime)
        }
    }
}

Game_CharacterBase.prototype.getExtraProps = function() {
    return Plugin.getExtraPropFrom(this)
}

Game_CharacterBase.prototype.initAnimationPattern = function() {
    this.patternAnimationList = []
    this.patternFreeze = false
}

Game_CharacterBase.prototype.setToneColor = function(tone){
    const data = this.getExtraProps()
    const [red, green, blue, gray] = tone
    data.toneRed = red
    data.toneGreen = green
    data.toneBlue = blue
    data.toneGray = gray
    data.needColorFilter = true
}

Game_CharacterBase.prototype.setBlendColor = function(blendColor){
    const data = this.getExtraProps()
    const [red, green, blue, alpha] = blendColor
    data.blendRed = red
    data.blendGreen = green
    data.blendBlue = blue
    data.blendAlpha = alpha
    data.needColorFilter = true
}

Game_CharacterBase.prototype.setHueColor = function(hue){
    const data = this.getExtraProps()

    data.hueColor = hue
    data.needColorFilter = true
}

Game_CharacterBase.prototype.setCoordOffset = function(x, y){
    this.getExtraProps().offsetX = x
    this.getExtraProps().offsetY = y
}

Game_CharacterBase.prototype.addCoordOffset = function(x, y){
    this.getExtraProps().offsetX += x
    this.getExtraProps().offsetY += y
}

Game_CharacterBase.prototype.setAngle = function(angle) {
    this.getExtraProps().angle = angle   
}

Game_CharacterBase.prototype.addAngle = function(angle) {
    this.getExtraProps().angle += angle   
}

Game_CharacterBase.prototype.setAngleRotationSpeed = function(angle) {
    this.getExtraProps().rotationSpeed = angle   
}

Game_CharacterBase.prototype.addAngleRotationSpeed = function(angle) {
    this.getExtraProps().rotationSpeed += angle   
}

Game_CharacterBase.prototype.setScale = function(x, y) {
    this.getExtraProps().scaleX = x
    this.getExtraProps().scaleY = y
}

Game_CharacterBase.prototype.addScale = function(x, y) {
    this.getExtraProps().scaleX += x
    this.getExtraProps().scaleY += y  
}

Game_CharacterBase.prototype.setSkew = function(x, y) {
    this.getExtraProps().skewX = x
    this.getExtraProps().skewY = y
}

Game_CharacterBase.prototype.addSkew = function(x, y) {
    this.getExtraProps().skewX += x
    this.getExtraProps().skewY += y  
}

Game_CharacterBase.prototype.setExtraZIndex = function(value) {
    this.getExtraProps().zIndex = value
}

Game_CharacterBase.prototype.addExtraZIndex = function(value) {
    this.getExtraProps().zIndex += value 
}

Game_CharacterBase.prototype.setFreezePattern = function(value) {
    this.patternFreeze = value
    this._animationCount = 0
}

Game_CharacterBase.prototype.setPatternAnimationList = function(patternArray, freeze = false, reverse = false) {
    if(patternArray[0] === "Auto"){
        this.patternAnimationList = Eli.Array.createProgressiveNumbers(0, this.maxPattern()-1)  
    }else{
        this.patternAnimationList = [...patternArray]
    }

    if(reverse){
        this.patternAnimationList.reverse()
    }

    this.setFreezePattern(freeze)
}

Game_CharacterBase.prototype.updateAngleRotation = function() {
    if(this.getExtraProps().rotationSpeed !== 0){
        let angle = this.getExtraProps().angle

        if(angle === 360 || angle === -360) {
            angle = 0
        }

        angle = (angle + this.getExtraProps().rotationSpeed).clamp(-360, 360)
        this.getExtraProps().angle = angle
    }
}

Game_CharacterBase.prototype.deleteColorFilter = function(){
    this.clearCharManagerColors()
    this.getMapSprite().deleteColorFilter()
}

Game_CharacterBase.prototype.clearCharManagerColors = function(){
    const data = this.getExtraProps()

    data.hueColor = 0
    data.toneRed = 0
    data.toneGreen = 0
    data.toneBlue = 0
    data.toneGray = 0
    data.blendRed = 0
    data.blendGreen = 0
    data.blendBlue = 0
    data.blendAlpha = 0
    data.needColorFilter = false
}

Game_CharacterBase.prototype.canAutoDeleteColorFilter = function(duration){
    return this.getExtraProps().autoDeleteColorFilter && duration <= 0
}

Alias.Game_CharacterBase_screenZ = Game_CharacterBase.prototype.screenZ
Game_CharacterBase.prototype.screenZ = function() {
    return Alias.Game_CharacterBase_screenZ.call(this) + this.getExtraProps().zIndex
}

Alias.Game_CharacterBase_updateAnimationCount = Game_CharacterBase.prototype.updateAnimationCount
Game_CharacterBase.prototype.updateAnimationCount = function() {
    if(this.patternAnimationList.length > 0){
        this._animationCount += this.maxPattern() * 0.5
    }else{
        Alias.Game_CharacterBase_updateAnimationCount.call(this)
    }
}

Alias.Game_CharacterBase_updatePattern = Game_CharacterBase.prototype.updatePattern
Game_CharacterBase.prototype.updatePattern = function() {
    if(this.patternAnimationList.length > 0){
        this.updatePatternAnimations()
        
    }else if(this.patternFreeze){
        this.updatePatternFreeze()
    }else{
        Alias.Game_CharacterBase_updatePattern.call(this)
    }
}

Game_CharacterBase.prototype.updatePatternAnimations = function(){
    const pattern = this.patternAnimationList.shift()
    this._pattern = pattern
}

Game_CharacterBase.prototype.updatePatternFreeze = function(){}

Alias.Game_CharacterBase_setImage = Game_CharacterBase.prototype.setImage
Game_CharacterBase.prototype.setImage = function(characterName, characterIndex) {
    const isFilenameChanged = this.characterName() !== characterName
    Alias.Game_CharacterBase_setImage.call(this, characterName, characterIndex)
    const filenameSettings = Plugin.getParam().filenameSettings.find(setting => setting.tags.some(tag => this._characterName.includes(tag)))

    if(isFilenameChanged && filenameSettings){
        Plugin.filenameCommonEventChars.push(this)
        $gameMap._commonEvents.push(new Game_CommonEvent(filenameSettings.commonEvent))
    }
}

/* ------------------------------- GAME EVENT ------------------------------- */
Alias.Game_Event_initExtraProperties = Game_Event.prototype.initExtraProperties
Game_Event.prototype.initExtraProperties = function() {
    Alias.Game_Event_initExtraProperties.call(this)
    $gameMap.charManagerData.keys.push(this.getGlobalKey())
}

Game_Event.prototype.parseMeta_Hue = function(string) {
    const data = string.split(",")
    const color = Number(data[0]) || 0
    const duration = 1

    this.setHueColor(color, duration)

    return [color, duration]
}

Game_Event.prototype.parseMeta_BlendColor = function(string) {
    const color = Eli.ColorManager.getRgbForBlend(Eli.String.removeSpaces(string))
    const duration = 1
    
    this.setBlendColor(color, duration)
    
    return [color, duration]
}

Game_Event.prototype.parseMeta_Tone = function(string) {
    const color = Eli.ColorManager.getRgbForTone(Eli.String.removeSpaces(string))
    const duration = 1

    this.setToneColor(color, duration)
    
    return [color, duration]
}

Game_Event.prototype.parseMeta_Offset = function(string) {
    const [x, y] = string.split(",").map(coord => Number(coord) || 0)
    this.setCoordOffset(x, y)

    return [x, y]
}

Game_Event.prototype.parseMeta_Angle = function(value) {
    const angle = Number(value)
    this.setAngle(angle)

    return angle
}

Game_Event.prototype.parseMeta_Rotation = function(value) {
    const rotation = Number(value)
    this.setAngleRotationSpeed(rotation)

    return rotation
}

Game_Event.prototype.parseMeta_Scale = function(string) {
    const [x, y] = string.split(",").map(coord => Number(coord) || 1)
    this.setScale(x, y)

    return [x, y]
}

Game_Event.prototype.parseMeta_Skew = function(string) {
    const [x, y] = string.split(",").map(coord => Number(coord) || 0)
    this.setSkew(x, y)

    return [x, y]
}

Game_Event.prototype.parseMeta_ExtraZ = function(value) {
    const zIndex = Number(value)
    this.setExtraZIndex(zIndex)

    return zIndex
}

if(Imported.VisuMZ_1_EventsMoveCore){

    Game_Event.prototype.getExtraProps = function() {
        if(!Plugin.getExtraPropFrom(this)){
            Plugin.initExtraPropsFor(this)
        }
        return Plugin.getExtraPropFrom(this)
    }

}

/* -------------------------------- GAME MAP -------------------------------- */
Alias.Game_Map_initialize = Game_Map.prototype.initialize
Game_Map.prototype.initialize = function(mapId) {
    this.charManagerData = {
        erase: false,
        keys:[],
    }
    Alias.Game_Map_initialize.call(this, mapId)
}

Alias.Game_Map_setup = Game_Map.prototype.setup
Game_Map.prototype.setup = function(mapId) {
    this.eraseCharManagerData()
    Alias.Game_Map_setup.call(this, mapId)

    if($dataMap.meta.hasOwnProperty("EraseCharManager")){
        this.charManagerData.erase = $dataMap.meta.EraseCharManager.toLowerCase().replaceAll(" ", "") === "true"
    }else{
        this.charManagerData.erase = Plugin.getParam().persistentData
    }
}

Game_Map.prototype.eraseCharManagerData = function() {
    if(this.charManagerData.erase){

        while(this.charManagerData.keys.length > 0){
            const key = this.charManagerData.keys.pop()
            delete $eliData.characterManager[key]
        }

    }
    this.charManagerKeys = []
}

/* ------------------------------ COMMON EVENT ------------------------------ */
Alias.Game_CommonEvent_isActive = Game_CommonEvent.prototype.isActive
Game_CommonEvent.prototype.isActive = function(){
    const alias = Alias.Game_CommonEvent_isActive.call(this)
    return alias || Plugin.getParam().filenameSettings.some(item => item.commonEvent === this.event().id)
}

/* ---------------------------- GAME_INTERPRETER ---------------------------- */
Alias.Game_Interpreter_initialize = Game_Interpreter.prototype.initialize
Game_Interpreter.prototype.initialize = function(depth) {
    Alias.Game_Interpreter_initialize.call(this, depth)
    this.initFilenameCharacter()
}

Alias.Game_Interpreter_clear = Game_Interpreter.prototype.clear
Game_Interpreter.prototype.clear = function() {
    Alias.Game_Interpreter_clear.call(this)
    this.charAnimes = []
}

Game_Interpreter.prototype.initFilenameCharacter = function() {
    this.filenameCharacter = null
}

Alias.Game_Interpreter_setup = Game_Interpreter.prototype.setup
Game_Interpreter.prototype.setup = function(list, eventId) {
    Alias.Game_Interpreter_setup.call(this, list, eventId)
    this.setupFilenameCharacter()
}

Game_Interpreter.prototype.setupFilenameCharacter = function() {
    if(this.isFilenameCommonEvent()){
        this.filenameCharacter = Plugin.filenameCommonEventChars.shift()
    }
}

Game_Interpreter.prototype.isFilenameCommonEvent = function(){
    return Plugin.getParam().filenameSettings.some(item => item.commonEvent === this._commonEventId)
}

Alias.Game_Interpreter_onCommonEventEnd = Game_Interpreter.prototype.onCommonEventEnd
Game_Interpreter.prototype.onCommonEventEnd = function(){
    Alias.Game_Interpreter_onCommonEventEnd.call(this)

    if(this.isFilenameCommonEvent()){
        this.endFilenameCommonEvent()
    }
}

Game_Interpreter.prototype.endFilenameCommonEvent = function(){
    const id = this._commonEventId
    const index = $gameMap._commonEvents.findIndex(item => item._commonEventId === id)
    $gameMap._commonEvents.splice(index, 1)
}

Alias.Game_Interpreter_character = Game_Interpreter.prototype.character
Game_Interpreter.prototype.character = function(param) {
    if(this.isFilenameCommonEvent() && param == 0 && this.filenameCharacter){
        return this.filenameCharacter
    }else{
        return Alias.Game_Interpreter_character.call(this, param)
    }
}

Alias.Game_Interpreter_updateWait = Game_Interpreter.prototype.updateWait
Game_Interpreter.prototype.updateWait = function() {
    return Alias.Game_Interpreter_updateWait.call(this) || this.charAnimes.some(anime => anime.running)
}

Alias.Game_Interpreter_onInterpreterEnd = Game_Interpreter.prototype.onInterpreterEnd
Game_Interpreter.prototype.onInterpreterEnd = function(){
    this.charAnimes = []
    Alias.Game_Interpreter_onInterpreterEnd.call(this)
}

/* ---------------------------- SPRITE CHARACTER ---------------------------- */
Alias.Sprite_Character_initMembers = Sprite_Character.prototype.initMembers
Sprite_Character.prototype.initMembers = function() {
    Alias.Sprite_Character_initMembers.call(this)
    this.pivotAdjust = 0
}

Alias.Sprite_Character_setCharacter = Sprite_Character.prototype.setCharacter
Sprite_Character.prototype.setCharacter = function(character){
    Alias.Sprite_Character_setCharacter.call(this, character)
    this.checkColorFilter(character)
}

Sprite_Character.prototype.checkColorFilter = function(character){
    if(character.getExtraProps().needColorFilter){

        if(!this._colorFilter){
            this._createColorFilter()
        }

        this.refreshColorFilter()
    }
}

Sprite_Character.prototype.refreshColorFilter = function() {
    const {
        blendRed, blendGreen, blendBlue, blendAlpha, 
        toneRed, toneGreen, toneBlue, toneGray, hueColor
    } = this._character.getExtraProps()

    this.setBlendColor([blendRed, blendGreen, blendBlue, blendAlpha])
    this.setColorTone([toneRed, toneGreen, toneBlue, toneGray])
    this.setHue(hueColor)
}

Alias.Sprite_Character_onTileBitmapLoad = Sprite_Character.prototype.onTileBitmapLoad
Sprite_Character.prototype.onTileBitmapLoad = function() {
    Alias.Sprite_Character_onTileBitmapLoad.call(this)
    this.setPivotAdjustment()
}

Alias.Sprite_Character_onCharacterBitmapLoad = Sprite_Character.prototype.onCharacterBitmapLoad
Sprite_Character.prototype.onCharacterBitmapLoad = function() {
    Alias.Sprite_Character_onCharacterBitmapLoad.call(this)
    this.setPivotAdjustment()
}

Sprite_Character.prototype.setPivotAdjustment = function(){
    this.pivotAdjust = this.patternHeight() / 2 
}

Alias.Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition
Sprite_Character.prototype.updatePosition = function() {
    Alias.Sprite_Character_updatePosition.call(this)
    this.updateCoordOffset()
}

Sprite_Character.prototype.updateCoordOffset = function(){
    this.x += this._character.getExtraProps().offsetX
    this.y += this._character.getExtraProps().offsetY
}

Alias.Sprite_Character_updateOther = Sprite_Character.prototype.updateOther
Sprite_Character.prototype.updateOther = function() {
    Alias.Sprite_Character_updateOther.call(this)
    this.updateCharManagerFeatures()
}

Sprite_Character.prototype.updateCharManagerFeatures = function(){
    this._character.updateAnimeProps()
    this.updateColors()
    this.updateAngleRotation()
    this.updateAngle()
    this.updateScale()
    this.updateSkew()
    this.updateAlpha()
}

Sprite_Character.prototype.updateColors = function(){
    if(this._character.getExtraProps().needColorFilter && !this._colorFilter){
        this._createColorFilter()
    }

    if(this._colorFilter){

        const {
            blendRed, blendGreen, blendBlue, blendAlpha, 
            toneRed, toneGreen, toneBlue, toneGray, hueColor
        } = this._character.getExtraProps()
    
        const targetBlend = [blendRed, blendGreen, blendBlue, blendAlpha]
        const targetTone = [toneRed, toneGreen, toneBlue, toneGray]
        
        let needUpdateColorFilter = false
    
        if(!Eli.Array.isEqual(this._blendColor, targetBlend)){
            this._blendColor = targetBlend
            needUpdateColorFilter = true
        }
    
        if(!Eli.Array.isEqual(this._colorTone, targetTone)){
            this._colorTone = targetTone
            needUpdateColorFilter = true
        }
    
        if(this._hue !== hueColor){
            needUpdateColorFilter = true
            this._hue = hueColor
        }
        
        if(needUpdateColorFilter){
            this._updateColorFilter()
        }
    }
}

Sprite_Character.prototype.updateAngleRotation = function(){
    this._character.updateAngleRotation()
}

Sprite_Character.prototype.updateAngle = function(){
    this.angle = this._character.getExtraProps().angle
    
    if(this.angle !== 0){
        this.adjustPositionForAngle()
    }else{
        this.pivot.y = 0
    }
}

Sprite_Character.prototype.adjustPositionForAngle = function(){
    this.pivot.y = -(this.pivotAdjust / this.scale.y)
    this.y -= this.pivotAdjust
}

Sprite_Character.prototype.updateScale = function(){
    this.scale.x = this._character.getExtraProps().scaleX
    this.scale.y = this._character.getExtraProps().scaleY
}

Sprite_Character.prototype.updateSkew = function(){
    this.skew.x = this._character.getExtraProps().skewX
    this.skew.y = this._character.getExtraProps().skewY
}

Sprite_Character.prototype.updateAlpha = function(){
    this.alpha = this._character.getExtraProps().alpha
}

Sprite_Character.prototype.deleteColorFilter = function(){
    if(this._colorFilter){
        const index = this.filters.indexOf(this._colorFilter)
        //this.refreshColorFilter()
        this._hue = 0
        this._blendColor = [0,0,0,0]
        this._colorTone = [0,0,0,0]
        this.filters.splice(index, 1)
        this._colorFilter = null
        
    }
}

/* ------------------------------- KC MIRRORS ------------------------------- */
if(window?.KCDev?.Mirrors){
    
    KCDev.Mirrors.Sprite_Reflect.prototype.checkColorFilter = function(){
        // Do nothing.
    }
}

/* ------------------------------ GALV SHADOWS ------------------------------ */
if(Imported.Galv_BasicEventShadows){

    Alias.Sprite_BasicShadow_update = Sprite_BasicShadow.prototype.update
    Sprite_BasicShadow.prototype.update = function() {
        Alias.Sprite_BasicShadow_update.call(this)
        const spr = this._character.getMapSprite()

        if(spr){
            this.x = spr.x
            this.y += (spr.scale.y * Galv.BES.os) - Galv.BES.os
            this.scale.x = spr.scale.x
            this.scale.y = spr.scale.y
            this.skew.x = spr.skew.x
            this.skew.y = spr.skew.y
            this.angle = spr.angle
            this.pivot.y = spr.pivot.y
        }
    }

}

}