//============================================================================
// EliMZ_GlobalText.js
//============================================================================

/*:
@target MZ
@base EliMZ_Book
@orderAfter EliMZ_MessageActions

@plugindesc ♦1.0.10♦ You can use escape codes in every window!
@author Hakuen Studio
@url https://hakuenstudio.itch.io/eli-super-text/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^
● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

==============================================================================
Features
==============================================================================

● Activate escape codes to be used in any window!

==============================================================================
How to use
==============================================================================

https://docs.google.com/document/d/1ukZpD4sqzb5gR98Uef6yAP44rm34ncgIflit2pqbBpU/edit?usp=sharing

============================================================================

@param auto
@text Automatic Mode
@type boolean
@desc If you set to false, you will have to put a tag on the first letter of any text.
@default false

@param tag
@text Tag
@type text
@desc The tag used to detect if the text has escape codes. Must be used as first letter(Only for Manual mode).
@default §
@parent mode

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_GlobalText = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.GlobalText = {

    regGlobalEscape: null,

    Parameters: class {
        constructor(parameters){
            this.auto = parameters.auto === "true"
            this.tag = parameters.tag
        }
    },

    initialize(){
        this.initParameters()
        this.regGlobalEscape = new RegExp(this.parameters.tag, "gi")
    },

    initParameters(){
        const parameters = PluginManager.parameters(Eli.PluginManager.getPluginName())
        this.parameters = new this.Parameters(parameters)
    },

    getParam(){
        return this.parameters
    },

}

{

const Plugin = Eli.GlobalText
const Alias = {}

Plugin.initialize()

/* ------------------------------ GAME MESSAGE ------------------------------ */
Alias.Game_Message_add = Game_Message.prototype.add
Game_Message.prototype.add = function(text) {
    text = Eli.Utils.convertEscapeVariablesOnly(text)
    text = text.replace(Plugin.regGlobalEscape, '')
    Alias.Game_Message_add.call(this, text)
}

/* ------------------------------- WINDOW BASE ------------------------------ */
Alias.Window_Base_initialize = Window_Base.prototype.initialize
Window_Base.prototype.initialize = function(rect){
    Alias.Window_Base_initialize.call(this, rect)
    this._globalTag = Plugin.getParam().tag
}

if(Imported.Eli_MessageActions){

    Alias.Window_Base_drawText = Window_Base.prototype.drawText
    Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
        if(this.canDrawGlobalText(String(text))){
            text = String(text).replace(Plugin.regGlobalEscape, '')
            
            this.drawTextEx(text, x, y, maxWidth, align || "left")
        }else{
            Alias.Window_Base_drawText.call(this, text, x, y, maxWidth, align)
        }
    }

    Alias.Window_Base_drawTextEx = Window_Base.prototype.drawTextEx
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
        if(text){
            const align = arguments[4] || this.currentAlign
            text = `\x1bAlign[${align}]${text}`
            text = this.convertEscapeCharacters(text)
            text = text.replace(Plugin.regGlobalEscape, '')
        }

        return Alias.Window_Base_drawTextEx.call(this, text, x, y, width)
    }

    if(Plugin.getParam().auto){
        // Fix Gold and Shop alignments
        Window_Base.prototype.drawCurrencyValue = function(value, unit, x, y, width) {
            const codes = Eli.MessageActions.parameters.txt
            const valueColor = `\x1b${codes.color}[${ColorManager.normalColor()}]`
            const unitColor = `\x1b${codes.color}[${ColorManager.systemColor()}]`
            const text = `${valueColor}${value} ${unitColor}${unit}`

            this.drawTextEx(text, x, y, width, "right")
        }

        // Fix Level Alignments on Status scene
        Window_StatusBase.prototype.drawActorLevel = function(actor, x, y) {
            this.changeTextColor(ColorManager.systemColor())
            this.drawText(`\x1bcolor[${ColorManager.systemColor()}]${TextManager.levelA}`, x, y, 48)
            this.resetTextColor()
            this.drawText(actor.level, x + 84, y, 36, "left")
        }

        // Fix Exp Status
        Window_Status.prototype.drawExpInfo = function(x, y) {
            const lineHeight = this.lineHeight();
            const expTotal = TextManager.expTotal.format(TextManager.exp)
            const expNext = TextManager.expNext.format(TextManager.level)
            const textSpaceWidth = this.contentsWidth() - x
            const expLabelWidth = Math.round(Math.max(this.textWidth(expTotal), this.textWidth(expNext))) + this.textWidth("00")
            
            this.changeTextColor(ColorManager.systemColor())
            this.drawText(`\x1bcolor[${ColorManager.systemColor()}]${expTotal}`, x, y + lineHeight * 0, textSpaceWidth)
            this.drawText(`\x1bcolor[${ColorManager.systemColor()}]${expNext}`, x, y + lineHeight * 2, textSpaceWidth)
            this.resetTextColor()
            this.drawText(this.expTotalValue(), x + expLabelWidth, y + lineHeight * 1, textSpaceWidth, "left")
            this.drawText(this.expNextValue(), x + expLabelWidth, y + lineHeight * 3, textSpaceWidth, "left")
        }
    }
    

}else{

    Alias.Window_Base_drawText = Window_Base.prototype.drawText
    Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {
        if(this.canDrawGlobalText(String(text))){
            text = String(text).replace(Plugin.regGlobalEscape, '')
            this.drawTextEx(text, x, y, maxWidth)
        }else{
            Alias.Window_Base_drawText.call(this, text, x, y, maxWidth, align)
        }
    }

    Alias.Window_Base_drawTextEx = Window_Base.prototype.drawTextEx
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
        if(text){
            text = this.convertEscapeCharacters(text)
            text = text.replace(Plugin.regGlobalEscape, '')
        }

        return Alias.Window_Base_drawTextEx.call(this, text, x, y, width)
    }
}

Window_Base.prototype.isWindow_ShopStatus = function(){
    return this instanceof Window_ShopStatus
}

Window_Base.prototype.isWindow_NumberInput = function(){
    return this instanceof Window_NumberInput
}

Window_Base.prototype.isWindow_ItemOrSkillList = function(){
    return this instanceof Window_ItemList || this instanceof Window_SkillList
}

Window_Base.prototype.isWindow_NameInput = function(){
    return this instanceof Window_NameInput
}

Window_Base.prototype.isValidWindowForGlobalText = function(){
    return  !this.isWindow_ShopStatus() && !this.isWindow_NumberInput() &&
            !this.isWindow_ItemOrSkillList() && !this.isWindow_NameInput()
}

Window_Base.prototype.canDrawGlobalText = function(text){
    const startWithGlobalTag = text.charAt(0) === this._globalTag
    
    return text && (startWithGlobalTag || Plugin.getParam().auto) && this.isValidWindowForGlobalText()
}

}