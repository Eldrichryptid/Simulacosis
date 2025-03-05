//=============================================================================
// TAA_GameCursor.js
// Author: taaspider
//=============================================================================

var TAA = TAA || {};
TAA.gcr = {};
TAA.gcr.Version = "1.0.1";
TAA.gcr.PluginName = "TAA_GameCursor";
TAA.gcr.alias = {};
var Imported = Imported || {};

/*:
 * @target MV MZ
 * 
 * @plugindesc [1.0.0] Game Cursor
 * @author T. A. A. (taaspider)
 * @url http://taaspider.itch.io/ 
 * 
 * 
 * @help
 * ============================================================================
 * Terms of Use
 * ============================================================================
 * Any plugins developed by taaspider are free for use for both commercial and 
 * noncommercial RPG Maker games, unless specified otherwise. Just remember to
 * credit "Taaspider".
 * 
 * Redistribution of parts or the whole of taaspider plugins is forbidden, unless
 * it comes from the official website: http://taaspider.itch.io. You are allowed 
 * to edit and change the plugin code for your own use, but you're definitely not 
 * allowed to sell or reuse any part of the code as your own. Although not 
 * required to use my plugins, a free copy of your game would be nice!
 * 
 * If you enjoy my work, consider offering a donation when downloading my plugins, 
 * or offering a monthly pledge to my Patreon account. It would be of great help!
 * Also, follow me on facebook to get firsthand news on my activities!
 *  Facebook: https://www.facebook.com/taaspider 
 *  Patreon: https://www.patreon.com/taaspider
 * 
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * WARNING: This plugin requires RPG Maker MV 1.5.0 or above! Please make sure 
 * your RPG Maker MV software is up to date before using this plugin.
 * You don't need any specific version if you're using MZ.
 * 
 * -----------------------------------------------------------------------------
 * 
 * This plugins gives extended control over game cursors. It provides functions
 * to customize both the global mouse cursor and menu selection cursors. You can
 * define cursor patterns using a picture, icon or character spritesheet (for an
 * animated cursor), and apply different patterns to different scenes and windows
 * to your liking.
 * 
 * Other effects are also available, like rotating the cursor image, choosing 
 * whether the cursor stands at the left, right, above or below the selected item,
 * add offsets to better position the cursor image, or even add a bounce effect to it.
 * 
 * ============================================================================
 * Cursor Patterns
 * ============================================================================
 * 
 * You can define as many patterns as you want. Each one has the following 
 * components:
 * 
 *  Name
 *      - This is an optional setting. You can use it to easily identify the
 *        pattern. It can be used to reference the pattern in plugin commands.
 *        Keep in mind this has to be unique for each pattern. Also, avoid
 *        using names with blank spaces, as it can lead to unforeseen behaviors
 *        (specially for MV users).
 * 
 *  Cursor Position
 *      - This applies only for the menu cursors. It determines how the cursor
 *        will be positioned related to the currently selected item.
 * 
 *  Cursor Offsets
 *      - This parameters allows you to add an offset to the cursor image,
 *        allowing for a more precise visual placement, as each cursor can
 *        behave differently depending on the image size.
 * 
 *  Bounce Effect
 *      - This is used to configure a simple bounce animation for this cursor
 *        pattern. X and Y Range can be either positive or negative numbers. If
 *        negative, the movement will happen to the left and back (in the X axis)
 *        and up and back (in the Y axis). If positive, it will happen right and 
 *        back (X axis) and down and back (Y axis). Finally, Speed determines
 *        how fast the effect is played (in number of frames). If you don't want
 *        a bounce effect for your cursor, just set Speed to zero.
 * 
 *  Cursor Rotation
 *      - Determines the cursor image rotation in grads (from 0 to 359).
 * 
 *  Cursor Type
 *      - Determines if this pattern uses a picture, icon or an animated 
 *        spritesheet as cursor. The value on this parameter determines which
 *        of the next set of parameters are actually used.
 * 
 *  Cursor File (Picture Settings)
 *      - If Cursor Type is set to Picture, use this parameter to select an image
 *        in the img/pictures/ folder to use as a cursor.
 * 
 *  Cursor Icon (Icon Settings)
 *      - If Cursor Type is set to Icon, use this parameter to set which icon number
 *        to use as cursor.
 * 
 *  Character File (Animated Settings)
 *      - If Cursor Type is set to Animated, use this parameter to select a character
 *        spritesheet to configure your cursor.
 * 
 *  Character Index (Animated Settings)
 *      - If Cursor Type is set to Animated, use this parameter to determine which
 *        character index to load from the given spritesheet. It must be a number 
 *        between 0 and 7.
 * 
 *  Character Direction (Animated Settings)
 *      - If Cursor Type is set to Animated, use this parameter to select which 
 *        character direction to use from the selected spritesheet.
 * 
 *  Number of Frames (Animated Settings)
 *      - If Cursor Type is set to Animated, use this parameter to determine how
 *        many frames are present for each movement set in the selected spritesheet.
 *        The default value is 3, but if you have more than that you can use this
 *        parameter to ensure the plugin uses all of them.
 * 
 *  Animation Speed (Animated Settings)
 *      - If Cursor Type is set to Animated, use this parameter to determine how
 *        fast the animated sprites are swapped to create the animation. This refers
 *        to the number of frames each sprite remains onscreen before rotating its
 *        frames.
 * 
 * ============================================================================
 * Menu Cursor Highlight
 * ============================================================================
 * 
 * This section provides parameters to customize the item selection highlight on
 * all menu and selection windows.
 * 
 * WARNING: The highlight feature is tightly dependent on your system's window
 * image pattern. By customizing your system file, you may turn any settings on
 * this parameters irrelevant!
 * 
 *  Enable Selection Highlight
 *      - Enables or disables the selection highlight entirely.
 * 
 *  Highlight Blink Length
 *      - Determines how many different opacity stages are used for the blink effect.
 * 
 *  Highlight Blink Speed
 *      - Determines how fast the blink animation is played in frames.
 * 
 * ============================================================================
 * Global Cursor
 * ============================================================================
 * 
 * This parameters allows you to configure the global cursor, which is, basically,
 * the PC mouse pointer.
 * 
 *  Enable Global Cursor
 *      - Enables or disables the customized cursor.
 * 
 *  Default Global Cursor
 *      - Determines which cursor pattern is used for the global cursor by default.
 * 
 *  Hide Mouse Pointer
 *      - Determines if the plugin will hide the default mouse pointer and display
 *        only the custom cursor. At least for testing purposes it is strongly
 *        advised to set it to SHOW, what allows offsets to be more easily configured
 *        for a perfect placement.
 * 
 * ============================================================================
 * Scene Cursors
 * ============================================================================
 * 
 * This settings allows you to set a specific cursor pattern for individual scenes
 * and windows. By using this feature, the plugin will automatically swap cursor 
 * patterns whenever the player enters that specific scene, or even when a specific
 * window becomes active. This affects only the menu cursor, and does not change the 
 * global cursor pattern.
 * 
 * The plugin already lists all default scenes and windows, even those that may
 * not have a selectable window, in case you have customized it in any way. You can,
 * however, specify a custom scene or window and the plugin will recognize it (as
 * long as the object has its constructor properly built in the code). If your custom
 * scene or window follows the engine default pattern, you can omit the "Scene_" and 
 * "window_" prefixes, as the plugin will fill it up for you. If you custom object
 * do not follow this pattern, simply add a ! before the constructor name so the
 * plugin doesn't automatically add a prefix.
 * 
 * For example, if you have a custom scene with an object named MyCustomScene, you
 * will need to set the Scene Name parameter to !MyCustomScene. However, if your
 * custom scene object is named Scene_MyCustom, set the Scene Name parameter to
 * just MyCustom.
 * 
 * ============================================================================
 * Misc
 * ============================================================================
 * 
 * Check Files First
 *  - If enabled, the plugin will make sure an image file exists and is available
 *    before trying to load it, thus preventing crashes.
 * 
 * ============================================================================
 * Script Calls
 * ============================================================================
 * 
 * $gameSystem.getDefaultCursorPattern()
 *  Returns the default cursor pattern name or ID, according to how it was set.
 * 
 * $gameSystem.getGlobalCursorPatter()
 *  Returns the active global cursor pattern name or ID, according to how it was set.
 * 
 * $gameSystem.setDefaultCursorPattern(pattern)
 *  Changes the default cursor pattern to that specified in the parameter. If the
 * given parameter does not match a valid cursor name or ID, the default cursor
 * pattern is not altered.
 * 
 * $gameSystem.setGlobalCursorPattern(pattern)
 *  Changes the global cursor pattern to that specified in the parameter. If the
 * given parameter does not match a valid cursor name or ID, the global cursor
 * pattern is not altered.
 * 
 * $gameSystem.enableGlobalCursor()
 *  Enables the global cursor feature.
 * 
 * $gameSystem.disableGlobalCursor()
 *  Disables the global cursor feature.
 * 
 * $gameSystem.hideMousePointer()
 *  Turns off the default mouse pointer in the game when playing in the PC.
 * 
 * $gameSystem.showMousePointer()
 *  Turns on the default mouse pointer in the game when playing in the PC.
 * 
 * $gameSystem.isMousePointerVisible()
 *  Returns true if the mouse pointer is visible. Otherwise, returns false.
 * 
 * $gameSystem.enableCursorHighlight()
 *  Turns on the cursor highlight feature in selectable windows.
 * 
 * $gameSystem.disableCursorHighlight()
 *  Turns off the cursor highlight feature in selectable windows.
 * 
 * $gameSystem.isCursorHighlightEnabled()
 *  Returns true if the cursor highlight is enabled, otherwise false.
 * 
 * $gameSystem.setCursorHighlightLength(len)
 *  Changes the cursor highlight length to the specified numeric value.
 * 
 * $gameSystem.getCursorHighlightLength()
 *  Returns the current setting for the cursor highlight length.
 * 
 * $gameSystem.setCursorHighlightSpeed(speed)
 *  Changes the cursor highlight speed to the specified numeric value.
 * 
 * $gameSystem.getCursorHighlightSpeed()
 *  Returns the current setting for the cursor highlight speed.
 * 
 * $gameSystem.getCursorType(pattern)
 *  Returns the cursor type for the given pattern name or ID. The return value
 * is an enumeration with the following possible values: 0 for picture cursor,
 * 1 for icon cursor, and 2 for animated cursor.
 * 
 * $gameSystem.getCursorPosition(pattern)
 *  Returns the cursor position for the given pattern name or ID. The return
 * value is an enumeration with the following possible values: 2 = below, 
 * 4 = left, 6 = right, and 8 = above.
 * 
 * $gameSystem.getCursorOffsetX(pattern)
 *  Returns the cursor horizontal offset for the given pattern name or ID.
 * 
 * $gameSystem.getCursorOffsetY(pattern)
 *  Returns the cursor vertical offset for the given pattern name or ID.
 * 
 * $gameSystem.getCursorBounce(pattern)
 *  Returns an object with the cursor bounce animation settings for the given
 * pattern name or ID.
 * 
 * $gameSystem.getCursorIconIndex(pattern)
 *  Returns the icon index set for the given pattern name or ID. If the provided
 * pattern is not an icon type, returns null.
 * 
 * $gameSystem.getCursorRotation(pattern)
 *  Returns the rotation value set for the given pattern name or ID.
 * 
 * ============================================================================
 * Plugin Commands (MV)
 * ============================================================================
 * 
 * CursorHighlight enable|disable
 *  Enables or disables the menu cursor highlight.
 * 
 * CursorHighlight speed|length <value>
 *  Changes the cursor highlight speed or length for the numeric value of <value>.
 * You can specify a variable by swapping <value> with v[<N>], where <N> is the
 * variable number.
 * 
 * CursorDefaultPattern <name or ID>
 *  Changes the default cursor pattern to the given pattern name or ID.
 * 
 * GlobalCursor enable|disable
 *  Enables or disables the global cursor.
 * 
 * GlobalCursor set <name or ID>
 *  Changes the global cursor to the given pattern name or ID.
 * 
 * MousePointer hide|show
 *  Hide or show the default mouse pointer when playing on PC.
 *
 * ============================================================================
 * Plugin Commands (MZ)
 * ============================================================================
 * 
 * Cursor Highlight State
 *  Allows you to enable or disable the menu cursor highlight feature.
 * 
 * Cursor Highlight Settings
 *  Allows you to change the menu cursor highlight speed and length.
 * 
 * Set Default Cursor Pattern
 *  Changes the default cursor pattern to the given pattern name or ID.
 * 
 * Global Cursor State
 *  Allows you to enable or disable the global cursor.
 * 
 * Global Cursor Pattern
 *  Changes the global cursor pattern to the given pattern name or ID.
 * 
 * Mouse Pointer State
 *  Hide or show the default mouse pointer when playing on PC.
 * 
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 0.5.0:
 *  - Beta release;
 * Version 1.0.0:
 *  - Official release;
 * Version 1.0.1:
 *  - Fixed a bug that would mess with the cursor coordinates in fullscreen mode;
 * 
 * ============================================================================
 * End of Help
 * ============================================================================
 * 
 * 
 * 
 * =================================================================================
 * Commands (MZ)
 * =================================================================================
 * 
 * @command highlightState
 * @text Cursor Highlight State
 * @desc Enable or disable the cursor highlight.
 * 
 * @arg command
 * @text Command
 * @type boolean
 * @on ENABLE
 * @off DISABLE
 * @default true
 * @desc Choose whether to enable or disable the cursor highlight.
 * 
 * @command highlightSettings
 * @text Cursor Highlight Settings
 * @desc Change cursor highlight settings
 * 
 * @arg length
 * @text Length
 * @type number
 * @min -1
 * @max 999
 * @default -1
 * @desc Sets a new value for the cursor highlight length. No changes are applied if set to -1.
 * 
 * @arg speed
 * @text Speed
 * @type number
 * @min -1
 * @max 999
 * @default -1
 * @desc Sets a new value for the cursor highlight speed. No changes are applied if set to -1.
 * 
 * @command setDefaultPattern
 * @text Set Default Cursor Pattern
 * @desc Change the default cursor pattern.
 * 
 * @arg pattern
 * @text Pattern
 * @type text
 * @default
 * @desc Pattern name or ID to set as the new default.
 * 
 * @command globalCursorState
 * @text Global Cursor State
 * @desc Enable or disable global cursor.
 * 
 * @arg command
 * @text Command
 * @type boolean
 * @on ENABLE
 * @off DISABLE
 * @default true
 * @desc Choose whether to enable or disable the global cursor.
 * 
 * @command setGlobalPattern
 * @text Set Global Cursor Pattern
 * @desc Change the global cursor pattern.
 * 
 * @arg pattern
 * @text Pattern
 * @type text
 * @default
 * @desc Pattern name or ID to set as the new global cursor pattern.
 * 
 * @command mousePointerState
 * @text Mouse Pointer State
 * @desc Hide or show mouse pointer.
 * 
 * @arg command
 * @text Command
 * @type boolean
 * @on HIDE
 * @off SHOW
 * @default true
 * @desc Choose whether to hide or show the mouse pointer.
 * 
 * 
 * =================================================================================
 * Parameters
 * =================================================================================
 * 
 * @param ---Main Settings---
 * @default
 * 
 * @param Cursor Patterns
 * @parent ---Main Settings---
 * @type struct<CursorPattern>[]
 * @default []
 * @desc Define cursor patterns to be used in different scenes and windows.
 * 
 * @param Default Cursor Pattern
 * @parent ---Main Settings---
 * @type text
 * @default 1
 * @desc Default cursor pattern to use if no pattern is explicitly defined.
 * 
 * @param ---Menu Cursor Highlight---
 * @parent ---Main Settings---
 * @default --------------------
 * 
 * @param Enable Selection Highlight
 * @parent ---Menu Cursor Highlight---
 * @type boolean
 * @on Enable
 * @off Disable
 * @default true
 * @desc Determines if the cursor highlight is enable in all menu command windows.
 * 
 * @param Highlight Blink Length
 * @parent ---Menu Cursor Highlight---
 * @type number
 * @min 0
 * @max 999
 * @default 40
 * @desc Determines how many frames the blink effect lasts (full cycle, both blink in and out).
 * 
 * @param Highlight Blink Speed
 * @parent ---Menu Cursor Highlight---
 * @type number
 * @min 0
 * @max 999
 * @default 40
 * @desc Determines  how fast the cursor blink effect is animated.
 * 
 * @param ---Global Cursor---
 * @parent ---Main Settings---
 * @default --------------------
 * 
 * @param Enable Global Cursor
 * @parent ---Global Cursor---
 * @type boolean
 * @on ENABLE
 * @off DISABLE
 * @default false
 * @desc Determines if the global cursor is activated.
 * 
 * @param Default Global Cursor Pattern
 * @parent ---Global Cursor---
 * @type text
 * @default 1
 * @desc Default cursor pattern to use for the global cursor.
 * 
 * @param Hide Mouse Pointer
 * @parent ---Global Cursor---
 * @type boolean
 * @on HIDE
 * @off SHOW
 * @default false
 * @desc Set to HIDE to not show windows mouse pointer.
 * 
 * @param ---Scene Customization---
 * @default ======================
 * 
 * @param Scene Cursors
 * @parent ---Scene Customization---
 * @type struct<CustomSceneCursor>[]
 * @default []
 * @desc Customize different cursor patterns for specific scenes.
 * 
 * @param ---Misc---
 * @default ======================
 * 
 * @param Check Files First
 * @parent ---Misc---
 * @type boolean
 * @on Enabled
 * @off Disable
 * @default true
 * @desc If enabled, the plugin will check if an inline image file exists in game's directory before loading it up.
 * 
 */

/*~struct~CursorOffsets:
 * @param X Offset
 * @type text
 * @default -20
 * @desc X offset for cursor positioning.
 * 
 * @param Y Offset
 * @type text
 * @default 0
 * @desc Y offset for cursor positioning.
 */

/*~struct~CursorBounce:
 * @param X Range
 * @type number
 * @min -50
 * @max 50
 * @default 10
 * @desc Range of horizontal motion for the bounce effect.
 * 
 * @param Y Range
 * @type number
 * @min -50
 * @max 50
 * @default 0
 * @desc Range of vertical motion for the bounce effect.
 * 
 * @param Speed
 * @type number
 * @min 0
 * @max 999
 * @default 45
 * @desc Speed settings for the bounce effect (number of frames for a complete cycle).
 */

/*~struct~CustomWindowCursor:
 * @param Window Name
 * @type combo
 * @option ActorCommand
 * @option BattleActor
 * @option BattleEnemy
 * @option BattleItem
 * @option BattleSkill
 * @option ChoiceList
 * @option EquipCommand
 * @option EquipItem
 * @option EquipSlot
 * @option GameEnd
 * @option ItemCategory
 * @option ItemList
 * @option Input
 * @option MenuActor
 * @option MenuCommand
 * @option Options
 * @option PartyCommand
 * @option SavefileList
 * @option ShopBuy
 * @option ShopCommand
 * @option ShopSell
 * @option SkillType
 * @option SkillList
 * @option TitleCommand
 * @default
 * @desc Select a window to customize its cursor (use the prefix "!" for a different pattern).
 * 
 * @param Cursor Pattern
 * @type text
 * @default 1
 * @desc Default cursor pattern to use for this window.
 * 
 */

/*~struct~CustomSceneCursor:
 * @param Scene Name
 * @type combo
 * @option Battle
 * @option Equip
 * @option Item
 * @option Load
 * @option GameEnd
 * @option Map
 * @option Menu
 * @option Name
 * @option Options
 * @option Save
 * @option Shop
 * @option Skill
 * @option Status
 * @option Title
 * @default
 * @desc Select a scene to customize its cursor  (use the prefix "!" for a different pattern).
 * 
 * @param Scene Cursor Pattern
 * @type text
 * @default 1
 * @desc Default cursor pattern to use for this scene.
 * 
 * @param Custom Window Patterns
 * @type struct<CustomWindowCursor>[]
 * @default []
 * @desc Select custom patterns to apply to specific windows within the scene.
 * 
 */

/*~struct~CursorPattern:
 * @param ---Main Settings---
 * @default 
 * 
 * @param Name
 * @parent ---Main Settings---
 * @type text
 * @default 
 * @desc Define a name for an easy reference to this cursor pattern.
 * 
 * @param Cursor Position
 * @parent ---Main Settings---
 * @type combo
 * @option Left
 * @option Right
 * @option Above
 * @option Below
 * @default Left
 * @desc Determines the cursor position related to the selected item.
 * 
 * @param Cursor Offsets
 * @parent ---Main Settings---
 * @type struct<CursorOffsets>
 * @default {"X Offset":"-20","Y Offset":"0"}
 * @desc Determines x and y offsets for cursor positioning.
 * 
 * @param Bounce Effect
 * @parent ---Main Settings---
 * @type struct<CursorBounce>
 * @default {"X Range":"10","Y Range":"0","Speed":"45"}
 * @desc Bounce effect settings.
 * 
 * @param Cursor Rotation
 * @parent ---Main Settings---
 * @type number
 * @min 0
 * @max 359
 * @default 0
 * @desc Determines the cursor image standard rotation.
 * 
 * @param Cursor Type
 * @parent ---Main Settings---
 * @type combo
 * @option Picture
 * @option Icon
 * @option Animated
 * @default Picture
 * @desc Determines the type of cursor to use. This determines which set of parameters below are used.
 * 
 * @param ---Picture Settings---
 * @parent ---Main Settings---
 * @default ======================
 * 
 * @param Cursor File
 * @parent ---Picture Settings---
 * @type file
 * @dir img/pictures
 * @require 1
 * @default
 * @desc Determines which picture to use as your cursor (only if type is set to picture).
 * 
 * @param ---Icon Settings---
 * @parent ---Main Settings---
 * @default ======================
 * 
 * @param Cursor Icon
 * @parent ---Icon Settings---
 * @type number
 * @min 0
 * @max 9999
 * @default 
 * @desc Determines which icon to use as your menu cursor (only if type is set to icon).
 * 
 * @param ---Animated Settings---
 * @parent ---Main Settings---
 * @default ======================
 * 
 * @param Character File
 * @parent ---Animated Settings---
 * @type file
 * @dir img/characters
 * @require 1
 * @default
 * @desc Determines which sprite sheet to use for your cursor (only if type is set to animated).
 * 
 * @param Character Index
 * @parent ---Animated Settings---
 * @type number
 * @min 0
 * @max 7
 * @default 0
 * @desc Determines which index references the cursor sprites (only if type is set to animated).
 * 
 * @param Character Direction
 * @parent ---Animated Settings---
 * @type combo
 * @option up
 * @option down
 * @option left
 * @option right
 * @default down
 * @desc Determines which character direction to use from the sprite sheet (only if type is set to animated)
 * 
 * @param Number of Frames
 * @parent ---Animated Settings---
 * @type number
 * @min 3
 * @max 10
 * @default 3
 * @desc The number of frames in the character sheet for the animated cursor.
 * 
 * @param Animation Speed
 * @parent ---Animated Settings---
 * @type number
 * @min 1
 * @max 999
 * @default 20
 * @desc Movement speed, in number of frames per sprite.
 */
//=============================================================================
// Enums
//=============================================================================

TAA.gcr.Enums= TAA.gcr.Enums || {};
TAA.gcr.Enums.CursorPosition = {
    "left": 4,
    "right": 6,
    "above": 8,
    "below": 2,
    "up": 8,
    "down": 2
};

TAA.gcr.Enums.CursorType = {
    "picture": 0,
    "icon": 1,
    "animated": 2
};

//=============================================================================
// Local Functions
//=============================================================================

TAA.gcr.functions = TAA.gcr.functions || {};
TAA.gcr.functions.translateCursorPositioning = function(text){
    if(Object.keys(TAA.gcr.Enums.CursorPosition).includes(text.toLowerCase()))
        return TAA.gcr.Enums.CursorPosition[text.toLowerCase()];
    return 4;
};

TAA.gcr.functions.translateCursorType = function(text){
    if(Object.keys(TAA.gcr.Enums.CursorType).includes(text.toLowerCase()))
        return TAA.gcr.Enums.CursorType[text.toLowerCase()];
    return 0;
};

TAA.gcr.functions.parseCursorOffsetsObj = function(obj){
    let returnObj = {x:"0",y:"0"};
    let parsedObj = {};
    try{
        parsedObj = JSON.parse(obj);
    } catch(e){
        console.error("TAA_GameCursor - parseCursorOffsetsObj: Failed to parse object: '" + obj + "'");
        console.error(e);
        parsedObj = {"X Offset":"0", "Y Offset":"0"};
    }
    returnObj.x = parsedObj["X Offset"];
    returnObj.y = parsedObj["Y Offset"];

    return returnObj;
};

TAA.gcr.functions.parseCursorBounceObj = function(obj){
    let returnObj = {"x":10,"y":0,"speed":45};
    let parsedObj = {};
    try{
        parsedObj = JSON.parse(obj);
    } catch(e){
        console.error("TAA_GameCursor - parseCursorBounceObj: Failed to parse object: '" + obj + "'");
        console.error(e);
        parsedObj = {"X Range":"10", "Y Range":"0", "Speed":"45"};
    }

    returnObj.x = !isNaN(parsedObj["X Range"]) ? parseInt(parsedObj["X Range"]) : 10;
    returnObj.y = !isNaN(parsedObj["Y Range"]) ? parseInt(parsedObj["Y Range"]) : 0;
    returnObj.speed = !isNaN(parsedObj["Speed"]) ? parseInt(parsedObj["Speed"]) : 45;

    return returnObj;
};

TAA.gcr.functions.parseCursorPatterns = function(listObj){
    let result = [];
    let list = [];
    let index = {};
    let knownNames = [];
    try{
        list = JSON.parse(listObj);
    } catch(e){
        console.error("TAA_GameCursor - parseCursorPatterns: failed to parse pattern list parameter: '" + listObj + "'");
        console.error(e);
        return result;
    }

    for(var i=0; i<list.length; i++){
        let obj = {};
        let parsedObj = {};
        try{
            obj = JSON.parse(list[i]);
        } catch(e){
            console.error("TAA_GameCursor - parseCursorPatterns: Failed to parse a cursor pattern object: '" + list[i] + "'");
            console.error(e);
            result.push(null);
            continue;
        }

        parsedObj.name = ([undefined, null, ""].includes(obj.Name) || knownNames.includes(obj.Name)) ? i+1 : obj.Name;
        parsedObj.position = this.translateCursorPositioning(obj['Cursor Position']);
        parsedObj.offsets = this.parseCursorOffsetsObj(obj['Cursor Offsets']);
        parsedObj.bounce = this.parseCursorBounceObj(obj['Bounce Effect']);
        parsedObj.type = this.translateCursorType(obj['Cursor Type']);
        parsedObj.rotation = !isNaN(obj['Cursor Rotation']) ? parseInt(obj['Cursor Rotation']) : 0;
        
        parsedObj.picture = parsedObj.picture || {};
        parsedObj.picture.file = obj['Cursor File'];

        parsedObj.icon = parsedObj.icon || {};
        parsedObj.icon.number = (!isNaN(obj['Cursor Icon']) && obj['Cursor Icon'] !== "") ? parseInt(obj['Cursor Icon']) : 0;
        
        parsedObj.animated = parsedObj.animated || {};
        parsedObj.animated.file = obj['Character File'];
        parsedObj.animated.index = (!isNaN(obj['Character Index']) && obj['Character Index'] !== "") ? parseInt(obj['Character Index']) : 0;
        parsedObj.animated.direction = [null, undefined, ""].includes(obj['Character Direction']) ? 2 : this.translateCursorPositioning(obj['Character Direction']);
        parsedObj.animated.frames = !isNaN(obj['Number of Frames']) ? parseInt(obj['Number of Frames']) : 3;
        parsedObj.animated.speed = !isNaN(obj['Animation Speed']) ? parseInt(obj['Animation Speed']) : 20;

        result.push(parsedObj);
        knownNames.push(parsedObj.name);
        index[parsedObj.name] = i;
    }

    result.push(index);
    return result;
}

TAA.gcr.functions.parseSceneSettings = function(listObj){
    let result = {};
    let list = [];
    let customFormatReg = new RegExp("^\s*!", "i");
    try{
        list = JSON.parse(listObj);
    } catch(e){
        console.error("TAA_GameCursor - parseSceneSettings: Failed to parse scene list object: '" + listObj + "'");
        console.error(e);
        return result;
    }

    for(var i=0; i<list.length; i++){
        let obj = {};
        let parsedObj = {};
        try{
            obj = JSON.parse(list[i]);
        } catch(e){
            console.error("TAA_GameCursor - parseSceneSettings: Failed to parse settings for a scene item: '" + list[i] +"'");
            console.error(e);
            continue;
        }

        if(obj["Scene Name"].match(customFormatReg)){
            parsedObj.constructor = obj["Scene Name"].slice(1);
        }
        else{
            parsedObj.constructor = "Scene_" + obj["Scene Name"];
        }
        parsedObj.pattern = obj["Scene Cursor Pattern"];

        let windows = [];
        let processedWindows = {};
        try{
            windows = JSON.parse(obj["Custom Window Patterns"]);
        } catch(e){
            console.error("TAA_GameCursor - parseSceneSettings: Failed to parse the window list object: '" + obj["Custom Window Patterns"] + "'");
            console.error(e);
            windows = [];
        }

        for(var j=0; j<windows.length; j++){
            let windObj = {};
            let key, value;
            try{
                windObj = JSON.parse(windows[j]);
            } catch(e){
                console.error("TAA_GameCursor - parseSceneSettings: Failed to parse window object from list: '" + windows[j] + "'");
                console.error (e);
                continue;
            }

            if(windObj["Window Name"].match(customFormatReg)){
                key = windObj["Window Name"].slice(1);
            }
            else{
                key = "Window_" + windObj["Window Name"];
            }
            value = windObj["Cursor Pattern"];
            processedWindows[key] = value;
        }
        
        if([null, undefined].includes(result[parsedObj.constructor])){
            result[parsedObj.constructor] = {};
            result[parsedObj.constructor].pattern = parsedObj.pattern;
            result[parsedObj.constructor].windows = processedWindows;
        }
    }
    return result;
};

//=============================================================================
// Parameters
//=============================================================================

TAA.gcr.Parameters = TAA.gcr.Parameters || {};
var Parameters = PluginManager.parameters(TAA.gcr.PluginName);

TAA.gcr.Parameters.Main = TAA.gcr.Parameters.Main || {};
TAA.gcr.Parameters.Main.Patterns = TAA.gcr.functions.parseCursorPatterns(Parameters['Cursor Patterns']);
TAA.gcr.Parameters.Main.DefaultPattern = Parameters['Default Cursor Pattern'];

TAA.gcr.Parameters.Main.Highlight = TAA.gcr.Parameters.Main.Highlight || {};
TAA.gcr.Parameters.Main.Highlight.Enabled = Parameters['Enable Selection Highlight'] === "true";
TAA.gcr.Parameters.Main.Highlight.Length = !isNaN(Parameters['Highlight Blink Length']) ? parseInt(Parameters['Highlight Blink Length']) : 40;
TAA.gcr.Parameters.Main.Highlight.Speed = !isNaN(Parameters['Highligh Blink Speed']) ? parseInt(Parameters['Highligh Blink Speed']) : 40;

TAA.gcr.Parameters.Main.Global = TAA.gcr.Parameters.Main.Global || {};
TAA.gcr.Parameters.Main.Global.Enabled = Parameters['Enable Global Cursor'] === 'true';
TAA.gcr.Parameters.Main.Global.DefaultPattern = Parameters['Default Global Cursor Pattern'];
TAA.gcr.Parameters.Main.Global.HidePointer = Parameters['Hide Mouse Pointer'] === 'true';

TAA.gcr.Parameters.Scenes = TAA.gcr.functions.parseSceneSettings(Parameters['Scene Cursors']);

TAA.gcr.Parameters.Misc = TAA.gcr.Parameters.Misc || {};
TAA.gcr.Parameters.Misc.CheckFiles = Parameters['Check Files First'] === 'true';

//=============================================================================
// TAACursorCache
//=============================================================================

if(!TAACursorCache){
    function TAACursorCache() {
        throw new Error('This is a static class');
    };
}

/**
 * Initializes TAACursorCache
 * 
 * @static
 * @method initialize
 */
TAACursorCache.initialize = function(){
    this._invalidFileList = [];
    this._existingFileList = [];
    this._pictureCursorCache = {};
    this._pictureTextureCache = {};
    this._iconCursorCache = {};
    this._animatedCursorCache = {};
    this._cursorPatternIndex = TAA.gcr.Parameters.Main.Patterns[TAA.gcr.Parameters.Main.Patterns.length-1];
    this._cursorPatterns = TAA.gcr.Parameters.Main.Patterns.slice(0, TAA.gcr.Parameters.Main.Patterns.length-1);

    const pictureDir = "img/pictures/";
    const characterDir = "img/characters/";
    const iconSheet = ImageManager.loadSystem("IconSet");

    for(var i=0; i<this._cursorPatterns.length; i++){
        let item = this._cursorPatterns[i];
        if(item.type === 0 && item.picture && item.picture.file && this.imgExists(item.picture.file, pictureDir) && [null, undefined].includes(this._pictureCursorCache[item.picture.file])){
            this._pictureCursorCache[item.picture.file] = ImageManager.loadPicture(item.picture.file);

            this._pictureTextureCache[item.picture.file] = new PIXI.Texture.from(pictureDir + item.picture.file + ".png");
        }
        if(item.type === 1 && item.icon && !isNaN(item.icon.number) && [null, undefined].includes(this._iconCursorCache[item.icon.number])){
            let pw, ph;
            let iconIndex = parseInt(item.icon.number);
            if(Utils.RPGMAKER_NAME === 'MV'){
                pw = Window_Base._iconWidth;
                ph = Window_Base._iconHeight;
            }
            else{
                pw = ImageManager.iconWidth;
                ph = ImageManager.iconHeight;
            }
            const sx = iconIndex % 16 * pw;
            const sy = Math.floor(iconIndex / 16) * ph;

            let bitmap = new Bitmap(pw, ph);
            bitmap.blt(iconSheet, sx, sy, pw, ph, 0, 0);

            this._iconCursorCache[iconIndex] = bitmap;

        }
        if(item.type === 2 && item.animated && item.animated.file && this.imgExists(item.animated.file, characterDir) && [null, undefined].includes(this._animatedCursorCache[item.picture.file])){
            let spritesheet = ImageManager.loadCharacter(item.animated.file);
            this._animatedCursorCache[item.animated.file] = spritesheet;
        }
    }

    this._initialized = true;
};

/**
 * Function that ensures an image file exists before trying to load it from the file system
 * 
 * @static
 * @method imgExists
 */
TAACursorCache.imgExists = function(file, folder){
    if(TAA.gcr.Parameters.Misc.CheckFiles !== true)
        return true;
    if(!file || file === "" || this._invalidFileList.contains(file))
        return false;
    if(this._existingFileList.contains(file))
        return true;
    try{
        var http = new XMLHttpRequest();
        http.open('HEAD', folder + file + ".png", false);
        http.send();
        if(http.status >= 400){
            this._invalidFileList.push(file);
            return false;
        }
        this._existingFileList.push(file);
        return true;
    } catch(e){
        this._invalidFileList.push(file);
        console.error(e);
        return false;
    }
};

/**
 * Returns the cursor pattern data for the given ID
 * 
 * @static
 * @method getPattern
 */
TAACursorCache.getPattern = function(patternId){
    let id = this.checkPatternIndex(patternId, "getPattern");
    if(id === null) return null;

    return this._cursorPatterns[id];
};

/**
 * Checks if the given ID or cursor name has its corresponding patter data.
 * 
 * @static
 * @method checkPatternIndex
 */
TAACursorCache.checkPatternIndex = function(patternId, caller){
    let id;
    id = this._cursorPatternIndex[patternId];
    if([null, undefined].includes(id) || [null, undefined].includes(this._cursorPatterns[id]) && !isNaN(patternId))
        id = patternId-1;

    if([null, undefined].includes(id) || [null, undefined].includes(this._cursorPatterns[id])){
        console.error("TAA_GameCursor - TAACursorCache." + caller + ": Invalid pattern id provided: '" + patternId + "'. No pattern found.");
        return null;
    }
    return id;
};

/**
 * Returns the cursor type object for the given cursor pattern ID. 0=picture, 1=icon, 2=animated
 * 
 * @static
 * @method getCursorType
 */
TAACursorCache.getCursorType = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorType");
    if(id === null) return null;
    return this._cursorPatterns[id].type;
};

/**
 * Returns the picture bitmap for the given cursor pattern ID.
 * 
 * @static
 * @method getCursorPicture
 */
TAACursorCache.getCursorPicture = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorType");
    if(id === null) return null;
    if(this._cursorPatterns[id].picture && this._cursorPatterns[id].picture.file && this._cursorPatterns[id].picture.file !== ""){
        let file = this._cursorPatterns[id].picture.file;
        this._pictureCursorCache[file].baseTexture = this._pictureTextureCache[file].clone();
        return this._pictureCursorCache[file];
    }
    return null;
};

/**
 * Returns the icon bitmap for the given cursor pattern ID.
 * 
 * @static
 * @method getCursorIcon
 */
TAACursorCache.getCursorIcon = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorType");
    if(id === null) return null;
    if(this._cursorPatterns[id].icon && !isNaN(this._cursorPatterns[id].icon.number) && this._cursorPatterns[id].icon.number >= 0){
        let index = this._cursorPatterns[id].icon.number;
        return this._iconCursorCache[index];
    }
    return null;
};

/**
 * Returns an array with the sprites used for animating the cursor for the given pattern ID
 * 
 * @static
 * @method getCursorAnimatedArray
 */
TAACursorCache.getCursorAnimatedArray = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorType");
    if(id === null) return [];
    let item = this._cursorPatterns[id];

    if(item.animated && ![null, undefined].includes(item.animated.file) && !isNaN(item.animated.index)){
        let bitmapArray = [];        
        let spritesheet = this._animatedCursorCache[item.animated.file];

        const charIndex = parseInt(item.animated.index);
        const numOfFrames = parseInt(item.animated.frames);
        const direction = parseInt(item.animated.direction);
        const sheetWidth = item.animated.file.charAt(0) === "$" ? spritesheet.width : spritesheet.width / 4;
        const sheetHeight = item.animated.file.charAt(0) === "$" ? spritesheet.height : spritesheet.height / 2;
        const itemWidth = sheetWidth / numOfFrames;
        const itemHeight = sheetHeight / 4;

        const baseX = charIndex % 4 * sheetWidth;
        const sy = Math.floor(charIndex/4) * sheetHeight + (direction/2 - 1) * itemHeight;

        for(var k=0; k<numOfFrames; k++){
            let sx = baseX + k * itemWidth;
            let bitmap = new Bitmap(itemWidth, itemHeight);
            bitmap.blt(spritesheet, sx, sy, itemWidth, itemHeight, 0, 0);
            bitmapArray.push(bitmap);
        }

        return bitmapArray;
    }
    return [];
};

/**
 * Returns the position for the cursor pattern. 2=down, 4=left, 6=right, 8=up
 * 
 * @static
 * @method getCursorPosition
 */
TAACursorCache.getCursorPosition = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorPosition");
    if(id === null) return null;
    return this._cursorPatterns[id].position;
};

/**
 * Returns the offset object for the cursor pattern.
 * 
 * @static
 * @method getCursorOffsets
 */
TAACursorCache.getCursorOffsets = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorOffsets");
    if(id === null) return null;
    return this._cursorPatterns[id].offsets;
};

/**
 * Returns the offset X value for the cursor pattern.
 * 
 * @static
 * @method getCursorOffsetX
 */
TAACursorCache.getCursorOffsetX = function(patternId){
    let offsets = this.getCursorOffsets(patternId);
    if(offsets === null)
        return 0;
    return offsets.x;
};

/**
 * Returns the offset Y value for the cursor pattern.
 * 
 * @static
 * @method getCursorOffsetY
 */
TAACursorCache.getCursorOffsetY = function(patternId){
    let offsets = this.getCursorOffsets(patternId);
    if(offsets === null)
        return 0;
    return offsets.y;
};

/**
 * Returns the bounce object for the cursor pattern.
 * 
 * @static
 * @method getCursorBounce
 */
TAACursorCache.getCursorBounce = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorBounce");
    if(id === null) return null;
    return this._cursorPatterns[id].bounce;
};

/**
 * Returns the icon index for the giver pattern.
 * 
 * @static
 * @method getCursorIconIndex
 */
TAACursorCache.getCursorIconIndex = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorIconIndex");
    if(id === null) return null;


    if(this._cursorPatterns[id].icon && !isNaN(this._cursorPatterns[id].icon.number))
        return this._cursorPatterns[id].icon.number;
    return null;
};

/**
 * Returns the cursor rotation for the giver pattern.
 * 
 * @static
 * @method getCursorImgRotation
 */
TAACursorCache.getCursorImgRotation = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorImgRotation");
    if(id === null) return null;
    return this._cursorPatterns[id].rotation;
};

/**
 * Returns the cursor animation speed for the giver pattern, if it is of the animated type.
 * 
 * @static
 * @method getCursorAnimationSpeed
 */
TAACursorCache.getCursorAnimationSpeed = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorAnimationSpeed");
    if(id === null) return 0;
    return this._cursorPatterns[id].animated && this._cursorPatterns[id].animated.speed ? this._cursorPatterns[id].animated.speed : 20;
};

/**
 * Returns the cursor animation frame count for the giver pattern, if it is of the animated type.
 * 
 * @static
 * @method getCursorAnimatedFrameCount
 */
TAACursorCache.getCursorAnimatedFrameCount = function(patternId){
    let id = this.checkPatternIndex(patternId, "getCursorAnimatedFrameCount");
    if(id === null) return 0;
    return this._cursorPatterns[id].animated && this._cursorPatterns[id].animated.frames ? this._cursorPatterns[id].animated.frames : 3;
};

//=============================================================================
// Game_System
//=============================================================================

TAA.gcr.alias.Game_System = TAA.gcr.alias.Game_System || {};

TAA.gcr.alias.Game_System.initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function(){
    TAA.gcr.alias.Game_System.initialize.call(this);
    if(!TAACursorCache._initialized)
        TAACursorCache.initialize();

    this._taaCursorHighlightEnabled = TAA.gcr.Parameters.Main.Highlight.Enabled;
    this._taaCursorHighlightLength = TAA.gcr.Parameters.Main.Highlight.Length;
    this._taaCursorHighlightSpeed = TAA.gcr.Parameters.Main.Highlight.Speed;

    this._taaDefaultCursorPattern = TAA.gcr.Parameters.Main.DefaultPattern;

    this._taaSceneCursorSettings = TAA.gcr.Parameters.Scenes;

    this._taaGlobalCursorState = TAA.gcr.Parameters.Main.Global.Enabled;
    this._taaGlobalCursorPattern = TAA.gcr.Parameters.Main.Global.DefaultPattern;
    this._taaHideMousePointer = TAA.gcr.Parameters.Main.Global.HidePointer;

    if(this._taaHideMousePointer && this._taaGlobalCursorState)
        document.body.style.cursor = 'none';

    this._taaGlobalCursorX = Graphics.width / 2;
    this._taaGlobalCursorY = Graphics.height / 2;
};

Game_System.prototype.setGlobalCursorPosition = function(x, y){
    this._taaGlobalCursorX = x;
    this._taaGlobalCursorY = y;
};

Game_System.prototype.getGlobalCursorPosition = function(){
    let position = {
        x: this._taaGlobalCursorX,
        y: this._taaGlobalCursorY
    };
    return position;
};

Game_System.prototype.getDefaultCursorPattern = function(){
    return this._taaDefaultCursorPattern;
};

Game_System.prototype.getGlobalCursorPattern = function(){
    return this._taaGlobalCursorPattern;
};

Game_System.prototype.setDefaultCursorPattern = function(pattern){
    let id = TAACursorCache.checkPatternIndex(pattern, "setDefaultCursorPattern");
    if(id === null){
        console.error("TAA_GameCursor - Game_System.setDefaultCursorPattern: Invalid pattern id provided. Keeping previous value.");
        return;
    }
    this._taaDefaultCursorPattern = pattern;
};

Game_System.prototype.setGlobalCursorPattern = function(pattern){
    let id = TAACursorCache.checkPatternIndex(pattern, "setGlobalCursorPattern");
    if(id === null){
        console.error("TAA_GameCursor - Game_System.setGlobalCursorPattern: Invalid pattern id provided. Keeping previous value.");
        return;
    }
    this._taaGlobalCursorPattern = pattern;
    SceneManager._scene.updateGlobalCursorPattern();
};

Game_System.prototype.enableGlobalCursor = function(){
    this._taaGlobalCursorState = true;
    if(TAA.gcr.Parameters.Main.Global.HidePointer)
        document.body.style.cursor = 'none';
};

Game_System.prototype.disableGlobalCursor = function(){
    this._taaGlobalCursorState = false;
    document.body.style.cursor = 'default';
};

Game_System.prototype.hideMousePointer = function(){
    this._taaHideMousePointer = true;
    document.body.style.cursor = 'none';
};

Game_System.prototype.showMousePointer = function(){
    this._taaHideMousePointer = false;
    if(document.body.style.cursor === 'none')
        document.body.style.cursor = 'default';
};

Game_System.prototype.isMousePointerVisible = function(){
    return !this._taaHideMousePointer;
};

Game_System.prototype.isGlobalCursorEnabled = function(){
    return this._taaGlobalCursorState && SceneManager._scene.isGlobalCursorEnabled();
};

Game_System.prototype.enableCursorHighlight = function(){
    this._taaCursorHighlightEnabled = true;
};

Game_System.prototype.disableCursorHighlight = function(){
    this._taaCursorHighlightEnabled = false;
};

Game_System.prototype.isCursorHighlightEnabled = function(){
    return this._taaCursorHighlightEnabled;
};

Game_System.prototype.setCursorHighlightLength = function(len){
    let match;
    if(isNaN(len)){
        if(match = len.match(/v\[([0-9]+)\]/, "i")){
            let varNum = match[1];
            len = $gameVariables.value(varNum);
        }
    }
    if(!isNaN(len))
        this._taaCursorHighlightLength = parseInt(len);
};

Game_System.prototype.getCursorHighlightLength = function(){
    return this._taaCursorHighlightLength;
};

Game_System.prototype.setCursorHighlightSpeed = function(speed){
    let match;
    if(isNaN(speed)){
        if(match = speed.match(/v\[([0-9]+)\]/, "i")){
            let varNum = match[1];
            speed = $gameVariables.value(varNum);
        }
    }
    if(!isNaN(speed))
        this._taaCursorHighlightSpeed = parseInt(speed);
};

Game_System.prototype.getCursorHighlightSpeed = function(){
    return this._taaCursorHighlightSpeed;
};

Game_System.prototype.getCursorType = function(pattern){
    return TAACursorCache.getCursorType(pattern);
};

Game_System.prototype.getCursorPosition = function(pattern){
    return TAACursorCache.getCursorPosition(pattern);
};

Game_System.prototype.getCursorOffsetX = function(pattern){
    return TAACursorCache.getCursorOffsetX(pattern);
};

Game_System.prototype.getCursorOffsetY = function(pattern){
    return TAACursorCache.getCursorOffsetY(pattern);
};

Game_System.prototype.getCursorOffsets = function(pattern){
    return TAACursorCache.getCursorOffsets(pattern);
};

Game_System.prototype.getCursorBounce = function(pattern){
    return TAACursorCache.getCursorBounce(pattern);
};

Game_System.prototype.getCursorIconIndex = function(pattern){
    return TAACursorCache.getCursorIconIndex(pattern);
};

Game_System.prototype.getCursorRotation = function(pattern){
    return TAACursorCache.getCursorImgRotation(pattern);
};

Game_System.prototype.getCustomCursor = function(name, win){
    let scene = this._taaSceneCursorSettings[name];
    if([null, undefined].includes(scene)){
        return this.getDefaultCursorPattern();
    }

    let pattern = scene.pattern;
    let window = scene.windows[win];
    if(![null, undefined, ""].includes(window)){
        pattern = window;
    }

    return pattern;
};

//=============================================================================
// Game_Interpreter (MV)
//=============================================================================

TAA.gcr.alias.Game_Interpreter = TAA.gcr.alias.Game_Interpreter || {};
TAA.gcr.alias.Game_Interpreter.pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args){
    TAA.gcr.alias.Game_Interpreter.pluginCommand.call(this, command, args);
    if(command.toLowerCase() === 'cursorhighlight'){
        if(args[0] && args[0].toLowerCase() === 'enable')
            $gameSystem.enableCursorHighlight();
        else if(args[0] && args[0].toLowerCase() === 'disable')
            $gameSystem.disableCursorHighlight();
        else if(args[0] && args[0].toLowerCase() === 'length'){
            $gameSystem.setCursorHighlightLength(args[1]);
        }
        else if(args[0] && args[0].toLowerCase() === 'speed'){
            $gameSystem.setCursorHighlightSpeed(args[1]);
        }
    }
    else if(command.toLowerCase() === 'cursordefaultpattern'){
        if(args[0])
            $gameSystem.setDefaultCursorPattern(args[0]);
    }
    else if(command.toLowerCase() === 'globalcursor'){
        if(args[0] && args[0].toLowerCase() === 'enable'){
            $gameSystem.enableGlobalCursor();
        }
        else if(args[0] && args[0].toLowerCase() === 'disable'){
            $gameSystem.disableGlobalCursor();
        }
        else if(args[0] && args[0].toLowerCase() === 'set'){
            $gameSystem.setGlobalCursorPattern(args[1]);
        }
    }
    else if(command.toLowerCase() === 'mousepointer'){
        if(args[0] && args[0].toLowerCase() === 'hide'){
            $gameSystem.hideMousePointer();
        }
        else if(args[0] && args[0].toLowerCase() === 'show'){
            $gameSystem.showMousePointer();
        }
    }
};

//=============================================================================
// Plugin Commands (MZ)
//=============================================================================

if(Utils.RPGMAKER_NAME === 'MZ'){
    PluginManager.registerCommand(TAA.gcr.PluginName, 'highlightState', args => {
        const command = args.command === "true";
        if(command)
            $gameSystem.enableCursorHighlight();
        else
            $gameSystem.disableCursorHighlight();
    });

    PluginManager.registerCommand(TAA.gcr.PluginName, 'highlightSettings', args => {
        const len = !isNaN(args.length) ? parseInt(args.length) : -1;
        const speed = !isNaN(args.speed) ? parseInt(args.speed) : -1;

        if(len > 0)
            $gameSystem.setCursorHighlightLength(len);
        if(speed >= 0)
            $gameSystem.setCursorHighlightSpeed(speed);
    });

    PluginManager.registerCommand(TAA.gcr.PluginName, 'setDefaultPattern', args => {
        const pattern = ![null, undefined, ""].includes(args.pattern ) ? args.pattern : null;

        if(pattern !== null){
            $gameSystem.setDefaultCursorPattern(pattern);
        }
    });
    
    PluginManager.registerCommand(TAA.gcr.PluginName, 'globalCursorState', args => {
        const command = args.command === "true";
        if(command)
            $gameSystem.enableGlobalCursor();
        else
            $gameSystem.disableGlobalCursor();
    });

    PluginManager.registerCommand(TAA.gcr.PluginName, 'setGlobalPattern', args => {
        const pattern = ![null, undefined, ""].includes(args.pattern ) ? args.pattern : null;

        if(pattern !== null){
            $gameSystem.setGlobalCursorPattern(pattern);
        }
    });
    
    PluginManager.registerCommand(TAA.gcr.PluginName, 'mousePointerState', args => {
        const command = args.command === "true";
        if(command)
            $gameSystem.hideMousePointer();
        else
            $gameSystem.showMousePointer();
    });
    // TO DO: TESTING
}



//=============================================================================
// TAASpriteCursor
//=============================================================================

function TAASpriteCursor(){
    this.initialize.apply(this, arguments);
};

TAASpriteCursor.prototype = Object.create(Sprite.prototype);
TAASpriteCursor.prototype.constructor = TAASpriteCursor;

TAASpriteCursor.prototype.initialize = function(pattern){
    Sprite.prototype.initialize.call(this);
    if([null, undefined].includes(pattern))
        pattern = $gameSystem.getDefaultCursorPattern();

    this._currentPattern = pattern;
    this._isGlobal = false;
    this.loadCursorData();
};

TAASpriteCursor.prototype.loadCursorData = function(){
    this._type = $gameSystem.getCursorType(this._currentPattern);
    this._offsetData = $gameSystem.getCursorOffsets(this._currentPattern);
    this._position = $gameSystem.getCursorPosition(this._currentPattern);
    this._bounceSettings = $gameSystem.getCursorBounce(this._currentPattern);
    this._iconIndex = -1;
    this._animatedCurrentIndex = 0;
    this._animatedMaxFrames = 3;
    this._animatedCacheArray = [];
    this._animatedCounter = 0;
    this._animatedSpeed = 0;
    this.x = 0;
    this.y = 0;

    let r = $gameSystem.getCursorRotation(this._currentPattern);
    if(!isNaN(r))
        this.rotation = Math.PI / 180 * r;

    let x;
    let y;
    try{
        x = eval(this._offsetData.x);
        y = eval(this._offsetData.y);
    } catch(e){
        console.error("TAA_GameCursor - TAASpriteCursor.loadCursorData: Failed to eval offsets. X: '" + this._offsetData.x + "', Y: '" + this._offsetData.y + "'");
        console.error(e);
        x = 0;
        y = 0;
    }
    
    if(this._isGlobal){
        this.anchor.x = 0.5
        this.anchor.y = 0.5;
        let pos = $gameSystem.getGlobalCursorPosition();
        x += pos.x;
        y += pos.y;
    }
    else{
        if([4, 6].includes(this._position)){
            this.anchor.x = 0;
            this.anchor.y = 0.5;
        }
        else if([2, 8].includes(this._position)){
            this.anchor.x = 0.5;
            this.anchor.y = 0;
        }
    }

    switch(this._type){
        case 1:
            // cursor is an Icon
            this.bitmap = TAACursorCache.getCursorIcon(this._currentPattern);
            break;
        case 2:
            // cursor is animated
            this._animatedCacheArray = TAACursorCache.getCursorAnimatedArray(this._currentPattern);
            if(this._animatedCacheArray === null) this._animatedCacheArray = [];
            this._animatedMaxFrames = TAACursorCache.getCursorAnimatedFrameCount(this._currentPattern);
            this._animatedSpeed = TAACursorCache.getCursorAnimationSpeed(this._currentPattern);
            this.bitmap = this._animatedCacheArray[this._animatedCurrentIndex];
            break;
        case 0:
            // cursor is a picture
            this.bitmap = TAACursorCache.getCursorPicture(this._currentPattern);
            // let texture = TAACursorCache.getCursorPicture(this._currentPattern);
            break;
        default:
            console.error("TAA_GameCursor - TAASpriteCursor.initialize: cursor type has an invalid type: " + this._type);
            this.bitmap = null;
    }

    // For compatibility with VisuStella's Engine
    // this can't happen for our Sprite, otherwise our cache is gone. So we overwrite the bitmap destroy function
    this.bitmap.destroy = function(){};
    // End of compatibility adjustments with VisuStella


    this._offsetData.xTxt = this._offsetData.x;
    this._offsetData.x = x;
    this._offsetData.yTxt = this._offsetData.y;
    this._offsetData.y = y;
    this.x = x;
    this.y = y;
    this._currentX = this.x;
    this._currentY = this.y;
    this._centerX = this.x;
    this._centerY = this.y;
    this._targetX = this.x;
    this._targetY = this.y;
    this._bounceCounter = 0;
};

TAASpriteCursor.prototype.setGlobal = function(state){
    state = state === true;
    this._isGlobal = state;
    if(this._isGlobal){
        this.anchor.x = 0.5
        this.anchor.y = 0.5;
    }
    else{
        if([4, 6].includes(this._position)){
            this.anchor.x = 0;
            this.anchor.y = 0.5;
        }
        else if([2, 8].includes(this._position)){
            this.anchor.x = 0.5;
            this.anchor.y = 0;
        }
    }
    this.visible = $gameSystem.isGlobalCursorEnabled() ? true : false;
};

TAASpriteCursor.prototype.setNewPattern = function(pattern){
    if([null, undefined].includes(pattern) || TAACursorCache.checkPatternIndex(pattern) === null){
        console.error("TAA_GameCursor - TAASpriteCursor.setNewPattern: The provided pattern is invalid: '" + pattern + "'. Keeping previously set pattern.");
        return;
    }

    if(this._currentPattern === pattern){
        // new pattern is the same one already defined
        return;
    }

    this._currentPattern = pattern;
    this.loadCursorData();
};

TAASpriteCursor.prototype.update = function(newX, newY, width, height){
    if(this._isGlobal){
        this.visible = $gameSystem.isGlobalCursorEnabled() ? true : false;
    }
    if(!this.visible) return;

    if(this._type === 2 && this.bitmap._loadingState !== 'loaded'){
        this._animatedCacheArray = TAACursorCache.getCursorAnimatedArray(this._currentPattern);
        if(this._animatedCacheArray === null) this._animatedCacheArray = [];
        this.bitmap = this._animatedCacheArray[this._animatedCurrentIndex];
    }

    if(isNaN(width) || isNaN(height))
        return;
    if(!isNaN(newX)){
        if([2, 8].includes(this._position))
            newX += Math.floor(width / 2);
        if(this._position === 6)
            this._targetX = newX + this._offsetData.x + width;
        else if(this._centerX !== newX)
            this._targetX = newX + this._offsetData.x;
    }
    if(!isNaN(newY)){
        if([4, 6].includes(this._position))
            newY += Math.floor(height / 2);
        if(this._position === 2)
            this._targetY = newY + this._offsetData.y + height;
        else if(this._position === 8)
            this._targetY = newY + this._offsetData.y - Math.floor(height/2);
        else if(this._centerY !== newY)
            this._targetY = newY + this._offsetData.y;
    }

    let bounceSpeed = this._bounceSettings.speed >= 0 ? this._bounceSettings.speed : 0;
    this._centerX = this._targetX;
    this._centerY = this._targetY;

    if(bounceSpeed === 0){
        this._currentX = this._centerX;
        this._currentY = this._centerY;
    }
    else if(this._bounceCounter/bounceSpeed < 1){
        this._currentX = this._centerX + this._bounceSettings.x * (this._bounceCounter/bounceSpeed);
        this._currentY = this._centerY + this._bounceSettings.y * (this._bounceCounter/bounceSpeed);
    }
    else{
        this._currentX = this._centerX + this._bounceSettings.x * (1 - (this._bounceCounter - bounceSpeed)/bounceSpeed);
        this._currentY = this._centerY + this._bounceSettings.y * (1 - (this._bounceCounter - bounceSpeed)/bounceSpeed);
    }
    if(this._bounceCounter/bounceSpeed >= 2)
        this._bounceCounter = -1;
    this._bounceCounter++;
    this.x = this._currentX;
    this.y = this._currentY;

    this.updateAnimation();
};

TAASpriteCursor.prototype.updateAnimation = function(){
    if(this._type !== 2) return;

    this._animatedCounter++;
    if(this._animatedCounter >= this._animatedSpeed){
        this._animatedCounter = 0;
        this._animatedCurrentIndex = (this._animatedCurrentIndex + 1) % this._animatedMaxFrames;
        this.bitmap = this._animatedCacheArray[this._animatedCurrentIndex];
    }
};

//=============================================================================
// Window_Selectable
//=============================================================================

TAA.gcr.alias.Window_Selectable = TAA.gcr.alias.Window_Selectable || {};
// Adding an MZ function if we're using MV, so code can be cleaner going forward
if(Utils.RPGMAKER_NAME === 'MV'){
    Window_Selectable.prototype._makeCursorAlpha = function(){
        const blinkCount = this._animationCount % 40;
        const baseAlpha = this.contentsOpacity / 255;
        if (this.active) {
            if (blinkCount < 20) {
                return baseAlpha - blinkCount / 32;
            } else {
                return baseAlpha - (40 - blinkCount) / 32;
            }
        }
        return baseAlpha;
    }

    Window_Selectable.prototype._updateCursor = function() {
        this._windowCursorSprite.alpha = this._makeCursorAlpha();
        this._windowCursorSprite.visible = this.isOpen() && this.cursorVisible;
    };
} // end of MZ -> MV adjustments
// Adding an MV function if we're using MZ, so code can be cleaner going forward
if(Utils.RPGMAKER_NAME === 'MZ'){
    Window_Selectable.prototype.isCursorVisible = function(){
        return this.cursorVisible;
    }
} // end of MV -> MZ adjustments

TAA.gcr.alias.Window_Selectable.initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(x, y, width, height){
    TAA.gcr.alias.Window_Selectable.initialize.call(this, x, y, width, height);
    if(Utils.RPGMAKER_NAME === 'MV'){
        this.cursorVisible = true;
    }
    this._cursorHighlightBlinkLength = $gameSystem.getCursorHighlightLength();
    this._cursorHighlightBlinkSpeed = $gameSystem.getCursorHighlightSpeed();
    this._cursorHighlightVisible = $gameSystem.isCursorHighlightEnabled();

    if(this._windowCursorSprite === undefined)
        this._windowCursorSprite = this._cursorSprite;
};


TAA.gcr.alias.Window_Selectable._makeCursorAlpha = Window_Selectable.prototype._makeCursorAlpha;
Window_Selectable.prototype._makeCursorAlpha = function(){
    const blinkCount = this._animationCount % this._cursorHighlightBlinkLength;
    const baseAlpha = this.contentsOpacity / 255;
    if (this.active) {
        if (blinkCount < (this._cursorHighlightBlinkLength/2)) {
            return baseAlpha - blinkCount / this._cursorHighlightBlinkSpeed;
        } else {
            return baseAlpha - (this._cursorHighlightBlinkLength - blinkCount) / this._cursorHighlightBlinkSpeed;
        }
    }
    return baseAlpha;
};

TAA.gcr.alias.Window_Selectable._updateCursor = Window_Selectable.prototype._updateCursor;
Window_Selectable.prototype._updateCursor = function(){
    TAA.gcr.alias.Window_Selectable._updateCursor.call(this);

    // to ensure values are updated if the settings are changed in the current scene
    this._cursorHighlightBlinkLength = $gameSystem.getCursorHighlightLength();
    this._cursorHighlightBlinkSpeed = $gameSystem.getCursorHighlightSpeed();
    this._cursorHighlightVisible = $gameSystem.isCursorHighlightEnabled();

    this._windowCursorSprite.visible = this.isOpen() && this.cursorVisible && this._cursorHighlightVisible;
    if(this.active === true){
        if(SceneManager._scene.updateCursor){
            let padding = this.standardPadding ? this.standardPadding() : this._padding;
            SceneManager._scene.updateCursor(this.itemRect(this.index()), padding, this.x, this.y, this.constructor.name);
        }
        if(!this.isCursorVisible() && SceneManager._scene.hideTaaCursor){
            SceneManager._scene.hideTaaCursor();
        }
        if(this.isCursorVisible() && SceneManager._scene.showTaaCursor)
            SceneManager._scene.showTaaCursor();
    }

};

TAA.gcr.alias.Window_Selectable.refreshCursor = Window_Selectable.prototype.refreshCursor;
Window_Selectable.prototype.refreshCursor = function(){
    this._cursorHighlightVisible = $gameSystem.isCursorHighlightEnabled();
    this._cursorHighlightBlinkLength = $gameSystem.getCursorHighlightLength();
    this._cursorHighlightBlinkSpeed = $gameSystem.getCursorHighlightSpeed();
    TAA.gcr.alias.Window_Selectable.refreshCursor.call(this);
};

//=============================================================================
// Scene_Base
//=============================================================================

TAA.gcr.alias.Scene_Base = TAA.gcr.alias.Scene_Base || {};
TAA.gcr.alias.Scene_Base.create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function(){
    TAA.gcr.alias.Scene_Base.create.call(this);

    // skip for certain scenes
    if(["Scene_Boot"].includes(this.constructor.name)){
        return;
    }
    this._taaGameCursor = new TAASpriteCursor();
    let index = this.children.length;
    this.addChildAt(this._taaGameCursor, index);

    this._taaGlobalCursor = new TAASpriteCursor();
    this.addChildAt(this._taaGlobalCursor, index+1);
    this._taaGlobalCursor.setNewPattern($gameSystem.getGlobalCursorPattern());
    this._taaGlobalCursor.setGlobal(true);

    let pos = $gameSystem.getGlobalCursorPosition();
    this._taaGlobalCursorX = pos.x;
    this._taaGlobalCursorY = pos.y;

    this._taaDisableGlobalCursor = false;
};

Scene_Base.prototype.globalCursorDisable = function(){
    this._taaDisableGlobalCursor = true;
    this._taaGlobalCursor.visible = false;
};

Scene_Base.prototype.globalCursorEnable = function(){
    this._taaDisableGlobalCursor = false;
    this._taaGlobalCursor.visible = true;
};

Scene_Base.prototype.isGlobalCursorEnabled = function(){
    return !this._taaDisableGlobalCursor;
};

Scene_Base.prototype.ensureCursorZIndex = function(){
    let index = this.children.indexOf(this._taaGameCursor);
    let globalIndex = this.children.indexOf(this._taaGlobalCursor);
    let requiredPosition = this.children.length-1;
    if($gameSystem.isGlobalCursorEnabled()){
        requiredPosition--;
    }
    if(index >= 0 && index < requiredPosition){
        this.removeChild(this._taaGameCursor);
        index = this.children.length;
        this.addChildAt(this._taaGameCursor, index);
    }
    if($gameSystem.isGlobalCursorEnabled() && globalIndex >= 0 && globalIndex < (requiredPosition+1)){
        this.removeChild(this._taaGlobalCursor);
        globalIndex = this.children.length;
        this.addChildAt(this._taaGlobalCursor, globalIndex);
    }
};

TAA.gcr.alias.Scene_Base.update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function(){
    TAA.gcr.alias.Scene_Base.update.call(this);
    this.ensureCursorZIndex();
    this.moveGlobalCursor();
};

Scene_Base.prototype.updateCursor = function(rect, pad, windowX, windowY, callerWindow){
    if(!this.isGlobalCursorEnabled()){
        this._taaGlobalCursor.visible = false;
        return;
    }

    if(rect === undefined || isNaN(rect.x) || isNaN(rect.y) || isNaN(rect.width) || isNaN(rect.height))
        return;

    let newPattern = $gameSystem.getCustomCursor(this.constructor.name, callerWindow);
    
    this._taaGameCursor.setNewPattern(newPattern);
    this._taaGameCursor.update(rect.x + pad + windowX, rect.y + pad + windowY, rect.width, rect.height);
};

Scene_Base.prototype.updateGlobalCursorPattern = function(){
    let newGlobalPattern = $gameSystem.getGlobalCursorPattern();
    this._taaGlobalCursor.setNewPattern(newGlobalPattern);
};

Scene_Base.prototype.updateGlobalCursorPosition = function(x, y){
    this._taaGlobalCursorX = !isNaN(x) ? x : this._taaGlobalCursorX;
    this._taaGlobalCursorY = !isNaN(y) ? y : this._taaGlobalCursorY;
    this.moveGlobalCursor();
};

Scene_Base.prototype.hideTaaCursor = function(){
    this._taaGameCursor.visible = false;
};

Scene_Base.prototype.showTaaCursor = function(){
    if(this.isGlobalCursorEnabled())
        this._taaGameCursor.visible = true;
};

Scene_Base.prototype.moveGlobalCursor = function(){
    if($gameSystem && $gameSystem.isGlobalCursorEnabled() && this._taaGlobalCursor){
        let w = this._taaGlobalCursor.width;
        let h = this._taaGlobalCursor.height;
        this._taaGlobalCursor.update(this._taaGlobalCursorX, this._taaGlobalCursorY, w, h);
    }
};

//=============================================================================
// TouchInput
//=============================================================================

TAA.gcr.alias.TouchInput = TAA.gcr.alias.TouchInput || {};
TAA.gcr.alias.TouchInput._onMouseMove = TouchInput._onMouseMove;
TouchInput._onMouseMove = function(event){
    TAA.gcr.alias.TouchInput._onMouseMove.call(this, event);
    if(SceneManager._scene && SceneManager._scene.updateGlobalCursorPosition)
        SceneManager._scene.updateGlobalCursorPosition(this._x, this._y);
};

TAA.gcr.alias.TouchInput._onTouchMove = TouchInput._onTouchMove;
TouchInput._onTouchMove = function(event){
    TAA.gcr.alias.TouchInput._onTouchMove.call(this, event);
    if(SceneManager._scene && SceneManager._scene.updateGlobalCursorPosition)
        SceneManager._scene.updateGlobalCursorPosition(this._x, this._y);
};

//=============================================================================
// Scene_Battle
//=============================================================================

TAA.gcr.alias.Scene_Battle = TAA.gcr.alias.Scene_Battle || {};
TAA.gcr.alias.Scene_Battle.update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function(){
    TAA.gcr.alias.Scene_Battle.update.call(this);
    if(this.isAnyInputWindowActive() && this.cursorVisible)
        this.showTaaCursor();
    else if(!this.isAnyInputWindowActive())
        this.hideTaaCursor();
};

//=============================================================================
// Scene_Map
//=============================================================================

TAA.gcr.alias.Scene_Map = TAA.gcr.alias.Scene_Map || {};
TAA.gcr.alias.Scene_Map.update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function(){
    TAA.gcr.alias.Scene_Map.update.call(this);
    if(this.choiceWindow && this.choiceWindow.active && this.cursorVisible)
        this.showTaaCursor();
    else if(!this.choiceWindow || !this.choiceWindow.active)
        this.hideTaaCursor();
};

TAA.gcr.alias.Scene_Map.calLMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function(){
    this.removeChild(this._taaGlobalCursor);
    TAA.gcr.alias.Scene_Map.calLMenu.call(this);
};

//=============================================================================
// SceneManager
//=============================================================================

TAA.gcr.alias.SceneManager = TAA.gcr.alias.SceneManager || {};
TAA.gcr.alias.SceneManager.push = SceneManager.push;
SceneManager.push = function(sceneClass){
    if(!isNaN(this._scene._taaGlobalCursorX) && !isNaN(this._scene._taaGlobalCursorY))
        $gameSystem.setGlobalCursorPosition(this._scene._taaGlobalCursorX, this._scene._taaGlobalCursorY);
    TAA.gcr.alias.SceneManager.push.call(this, sceneClass);
};

TAA.gcr.alias.SceneManager.pop = SceneManager.pop;
SceneManager.pop = function(){
    if(!isNaN(this._scene._taaGlobalCursorX) && !isNaN(this._scene._taaGlobalCursorY))
        $gameSystem.setGlobalCursorPosition(this._scene._taaGlobalCursorX, this._scene._taaGlobalCursorY);
    TAA.gcr.alias.SceneManager.pop.call(this);
};