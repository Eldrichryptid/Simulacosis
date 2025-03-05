//=============================================================================
// VisuStella MZ - Message Keywords
// VisuMZ_3_MessageKeywords.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_MessageKeywords = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageKeywords = VisuMZ.MessageKeywords || {};
VisuMZ.MessageKeywords.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [MessageKeywords]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Keywords_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds Keyword support for the Message Window and any others
 * listed in the Plugin Parameters. By having Keyword support, the player can
 * hover their mouse cursor over the Keyword and a tooltip window will appear,
 * explaining further about the Keyword in question. This can be used in the
 * Message Window to explain lore, in the Help Window to go into detail about
 * more complex mechanics, and more!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Setup Keywords within the Plugin Parameters.
 * * Keywords determine how the Keyword marker will be replaced and what kind
 *   of text will be displayed in the tooltip window.
 * * Use Keywords to explain or remind the player about lore heavy topics.
 * * Keywords can be used to explain indepth mechanics inside Help Window.
 * * Alter the tooltip window's settings to your liking.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_1_MessageCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 * 
 * ============================================================================
 * Instructions
 * ============================================================================
 * 
 * Here are the instructions on how to use this plugin.
 * 
 * ---
 * 
 * Step 1:
 * 
 * - Open up the Plugin Parameters for this plugin.
 * - Open up the "Keyword List" Parameter list.
 * - Add your own or modify existing Keywords.
 *   - The "Keyword" is the Keyword Marker that will be referenced when using a
 *     Keyword inside of the Message Window or Help Window. Remember this.
 *   - The "Replacement Text" is the text that appears in place of the Keyword
 *     Marker. This can be used to color code or as a shortcut for Keywords.
 *     - Replacement text does not have to be exactly the same as the Keyword.
 *   - "Tooltip Text" is the text that appears inside the tooltip window when
 *     the player's mouse cursor hovers over the Keyword.
 * - Save your changes.
 * 
 * ---
 * 
 * Step 2:
 * 
 * - Create a new "Show Message" event command or modify a database object's
 *   help "Description".
 * - Insert the Keyword Marker in the following format: ((Keyword))
 *   - Replace "Keyword" with the Keyword Marker mentioned in Step 1.
 *   - To use the default examples, you can type in ((Example)) or ((Ojima)).
 * - Save the changes.
 * - Go view them in game.
 * - Hover the mouse cursor over the specific Keywords and a tooltip window
 *   should appear.
 * 
 * ---
 * 
 * Tooltip window text does not support Word Wrap. It is simply disabled from
 * the very start so any Word Wrap text codes will not work with it.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_ElementStatusCore
 * 
 * VisuMZ_1_ItemsEquipsCore
 *
 * VisuMZ_2_QuestSystem
 * 
 * VisuMZ_3_MessageLog
 * 
 * VisuMZ_3_VisualTextWindows
 *
 * - Custom windows provided by these plugins will have Keyword support as long
 * as their respective window names are listed in the Plugin Parameters.
 *
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Keyword-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Supported Message Windows)
 * --------------------   -----------------------------------------------------
 * 
 * ((Keyword))            Replaces the "Keyword" Marker with the Replacement
 *                        Text found in the Message Keywords Plugin Parameters.
 *                        If the player hovers the mouse cursor over a Keyword,
 *                        a tooltip window will appear explaining about the
 *                        Keyword's lore and/or mechanics. The replacement text
 *                        and tooltip text can be modified inside the Message
 *                        Keywords Plugin Parameters.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyword List
 * ============================================================================
 *
 * This array governs the Keywords that are used for the game.
 *
 * ---
 *
 * Keyword List
 * 
 *   Keyword Marker:
 *   - This is the marker used to determine the tooltip and any associated text
 *   - To use this inside the Message Window or Help Description, type out the
 *     following:
 * 
 *     ((Keyword))
 * 
 *     Where "Keyword" would be the Keyword Marker used. Case does not matter.
 * 
 *   Replacement Text:
 *   - The text displayed as a replacement for the tooltip.
 *   - You may use text codes.
 * 
 *   Tooltip Text:
 *   - The text displayed for this tooltip.
 *   - You may use text codes.
 * 
 *   Cascades:
 *   - Used only for Window_Help Cascades.
 *   - Displays these additional keywords.
 * 
 *     Cascade Family:
 *     - What is the name of this cascade family?
 *     - Same families won't have multiple cascades.
 *     - ie. Multiple cascades in the "Heal" cascade will won't display others.
 *     - If no family is used, its keyword will be its family name.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * Settings for the Message Keyword Tooltips Window.
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
 *   - Negative: up. Positive: down.
 *
 * ---
 * 
 * Help Window Cascade
 * 
 * Cascading tooltips will show all of the available keywords found in the
 * help window and list them off to the side to show off each tooltip at once.
 * This allows players to read keyword definitions without needing to utilize
 * touch inputs.
 * 
 * **WARNING**: The more keywords you use per help description, the more
 * windows will appear on the screen. You need to keep this in mind as you
 * design your help description keywords as to not clutter the screen.
 * 
 * **NOTE**: Cascades will not appear in Scene_Equip when the slot window is
 * currently active in order to make sure the slot items are visible and not
 * obscured. Hovering over keywords is still possible.
 * 
 *   Enable Cascade?:
 *   - Enable Window_Help cascade tooltips?
 *   - Must be enabled to use.
 * 
 *     Attach to Window?:
 *     - Attach cascade windows to Window_Help?
 * 
 *   Activation Style:
 *   - What is the activation style you wish to use for cascading tooltips?
 *     - Always Activated
 *     - Shift Toggles On/Off
 * 
 *     Default Toggle State:
 *     - What is the default toggle state if the shift toggle option is used?
 * 
 *   Offset Position:
 * 
 *     Offset X:
 *     - Offset the cascade X position?
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offset the cascade Y position?
 *     - Negative: up. Positive: down.
 * 
 *   Move Animation:
 * 
 *     Start X:
 *     - Starting offset cascade X position?
 *     - Negative: left. Positive: right.
 * 
 *     Start Y:
 *     - Starting offset cascade Y position?
 *     - Negative: up. Positive: down.
 * 
 *     Duration:
 *     - Duration to move cascading windows into position?
 * 
 *   Toggle Button Prompt:
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *     Prompt Format:
 *     - Prompt display for toggling cascade mode.
 *     - Requires VisuMZ_0_CoreEngine!
 * 
 *     Scale:
 *     - Use a number between 0 and 1 to determine the scale.
 *     - 0 = 0%; 0.5 = 50%; 1.0 = 100%
 * 
 *     Offset X:
 *     - Offset the cascade prompt X position?
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offset the cascade prompt Y position?
 *     - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Supported Windows
 * ============================================================================
 *
 * Message Keyword support will be provided to these windows.
 * Not every window is a valid candidate, however.
 *
 * ---
 *
 * Supported Windows
 * 
 *   String:
 *   - Type in the constructor name of window you wish to add to the supported
 *     Window list.
 *   - Any windows not on the list will not support Keywords in the sense that
 *     tooltips will not appear. However, Keyword Markers can still be used to
 *     offer a quick shortcut to replacement text outside of tooltip windows.
 *   - Any of the windows listed here will have their refresh functions monkey
 *     patched via JavaScript to support Message Keywords.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Keyword List > Keyword > Cascades
 * **** Used only for Window_Help Cascades.
 * **** Displays these additional keywords.
 * *** Parameters > Tooltip Settings > Help Window Cascade
 * **** Cascading tooltips will show all of the available keywords found in the
 *      help window and list them off to the side to show off each tooltip at
 *      once. This allows players to read keyword definitions without needing
 *      to utilize touch inputs.
 * 
 * Version 1.04: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon opening up the log window.
 *    Fix made by Irina.
 * 
 * Version 1.03: August 11, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused games with a sleeping mouse on initialization to
 *    always trigger the tooltip window. Fix made by Arisu.
 * 
 * Version 1.02: April 21, 2022
 * * Compatibility Update!
 * ** Added compatibility update with VisuMZ's Quest Journal System to not
 *    auto-clear the keyword tooltip window when tracking variables are being
 *    updated with the Quest Tracker open. Update made by Arisu.
 * 
 * Version 1.01: February 24, 2022
 * * Feature Update!
 * ** Variables are now parsed before and after the parsing of keywords.
 *    Update made by Arisu.
 * 
 * Version 1.00 Official Release Date: December 8, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MessageKeywords
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Keywords:arraystruct
 * @text Keyword List
 * @parent Keywords
 * @type struct<Keyword>[]
 * @desc This is a list of Keywords used for this plugin.
 * @default ["{\"Keyword:str\":\"Example\",\"Text:str\":\"\\\\c[5]Example\\\\c[0]\",\"Tooltip:json\":\"\\\"This is an example to show how \\\\\\\\c[5]Keywords\\\\\\\\c[0] work.\\\\n\\\\nBy typing \\\\\\\\c[6]((Example))\\\\\\\\c[0] in the \\\\\\\\c[4]Message Window\\\\\\\\c[0],\\\\nit creates an area that the player can hover\\\\nthe \\\\\\\\c[4]mouse\\\\\\\\c[0] over.\\\\n\\\\nOnce hovered, a \\\\\\\\c[4]tooltip\\\\\\\\c[0] will appear displaying\\\\nthis text.\\\"\"}","{\"Keyword:str\":\"Ojima\",\"Text:str\":\"\\\\c[6]Yoji Ojima\\\\c[0]\",\"Tooltip:json\":\"\\\"\\\\\\\\c[6]Yoji Ojima\\\\\\\\c[0] is the creator of many \\\\\\\\c[4]RPG Maker\\\\\\\\c[0] iterations\\\\nincluding \\\\\\\\c[4]RPG Maker MZ\\\\\\\\c[0]. Without him, \\\\\\\\c[4]RPG Maker\\\\\\\\c[0] as we\\\\nknow it would be completely different. \\\\\\\\c[4]RPG Maker MZ\\\\\\\\c[0]'s\\\\nbeautiful and clean core scripts is all thanks to this\\\\nvery talented individual.\\\"\"}"]
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc Settings for the Message Keyword Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0","Cascade":"","EnableCascade:eval":"true","CascadeAttachHelp:eval":"true","CascadeActivation:str":"shift toggle","DefaultToggleState:eval":"false","CascadeOffset":"","CascadeOffsetX:num":"+0","CascadeOffsetY:num":"+0","CascadeMoveAni":"","CascadeStartX:num":"+128","CascadeStartY:num":"+0","CascadeDuration:num":"12","CascadeButtonPrompt":"Requires VisuMZ_0_CoreEngine!","CascadePromptFmt:str":"%1:Keywords","CascadePromptScale:num":"0.8","CascadePromptOffsetX:num":"+0","CascadePromptOffsetY:num":"+0"}
 * 
 * @param SupportedWindows:arraystr
 * @text Supported Windows
 * @type string[]
 * @desc Message Keyword support will be provided to these windows.
 * Not every window is a valid candidate, however.
 * @default ["Window_Help","Window_SkillStatus","Window_EquipStatus","Window_Status","Window_ShopStatus","Window_Message","Window_NameBox","Window_StatusData","Window_QuestLog","Window_QuestTracker","Window_MessageLog","Window_VisualText"]
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Keyword Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Keyword:
 *
 * @param Keyword:str
 * @text Keyword Marker
 * @desc This is the marker used to determine the tooltip and
 * any associated text.
 * @default Untitled
 *
 * @param Text:str
 * @text Replacement Text
 * @type str
 * @desc The text displayed as a replacement for the tooltip.
 * You may use text codes.
 * @default Untitled
 * 
 * @param Tooltip:json
 * @text Tooltip Text
 * @type note
 * @desc The text displayed for this tooltip.
 * You may use text codes.
 * @default ""
 *
 * @param Cascades:arraystr
 * @text Cascades
 * @type string[]
 * @desc Used only for Window_Help Cascades.
 * Displays these additional keywords.
 * @default []
 *
 * @param CascadeFamily:str
 * @text Cascade Family
 * @parent Cascades:arraystr
 * @desc What is the name of this cascade family?
 * Same families won't have multiple cascades.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Cascade
 * @text Help Window Cascade
 *
 * @param EnableCascade:eval
 * @text Enable Cascade?
 * @parent Cascade
 * @type boolean
 * @on Enable
 * @off Don't Enable
 * @desc Enable Window_Help cascade tooltips?
 * @default true
 *
 * @param CascadeAttachHelp:eval
 * @text Attach Help Window?
 * @parent EnableCascade:eval
 * @type boolean
 * @on Attach
 * @off Don't Attach
 * @desc Attach cascade windows to Window_Help?
 * @default true
 *
 * @param CascadeActivation:str
 * @text Activation Style
 * @parent Cascade
 * @type select
 * @option Always Activated
 * @value always
 * @option Shift Toggles On/Off
 * @value shift toggle
 * @desc What is the activation style you wish to use for cascading tooltips?
 * @default shift toggle
 *
 * @param DefaultToggleState:eval
 * @text Default Toggle State
 * @parent CascadeActivation:str
 * @type boolean
 * @on On
 * @off Off
 * @desc What is the default toggle state if the shift toggle option is used?
 * @default false
 *
 * @param CascadeOffset
 * @text Offset Position
 * @parent Cascade
 *
 * @param CascadeOffsetX:num
 * @text Offset X
 * @parent CascadeOffset
 * @desc Offset the cascade X position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param CascadeOffsetY:num
 * @text Offset Y
 * @parent CascadeOffset
 * @desc Offset the cascade Y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param CascadeMoveAni
 * @text Move Animation
 * @parent Cascade
 *
 * @param CascadeStartX:num
 * @text Start X
 * @parent CascadeMoveAni
 * @desc Starting offset cascade X position?
 * Negative: left. Positive: right.
 * @default +100
 *
 * @param CascadeStartY:num
 * @text Start Y
 * @parent CascadeMoveAni
 * @desc Starting offset cascade Y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param CascadeDuration:num
 * @text Duration
 * @parent CascadeMoveAni
 * @desc Duration to move cascading windows into position?
 * @default 12
 *
 * @param CascadeButtonPrompt
 * @text Toggle Button Prompt
 * @parent Cascade
 * @default Requires VisuMZ_0_CoreEngine!
 * 
 * @param CascadePromptFmt:str
 * @text Prompt Format
 * @parent CascadeButtonPrompt
 * @desc Prompt display for toggling cascade mode.
 * Requires VisuMZ_0_CoreEngine!
 * @default %1:Keywords
 *
 * @param CascadePromptScale:num
 * @text Scale
 * @parent CascadeButtonPrompt
 * @desc Use a number between 0 and 1 to determine the scale.
 * 0 = 0%; 0.5 = 50%; 1.0 = 100%
 * @default 0.8
 *
 * @param CascadePromptOffsetX:num
 * @text Offset X
 * @parent CascadeButtonPrompt
 * @desc Offset the cascade prompt X position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param CascadePromptOffsetY:num
 * @text Offset Y
 * @parent CascadeButtonPrompt
 * @desc Offset the cascade prompt Y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

const _0x53493b=_0x40f4;function _0x218d(){const _0x54be8a=['RGJhW','toUpperCas','startKeywo','drawMessag','qBTXP','CIVZT','split','PPVnD','lIewy','_cascadeMo','_text','round','FUNC','iLTWs','Settings','ConvertPar','D<%1>%2\x1bMS','boxWidth','essageCore','GEZjG','EnableCasc','MkYJS','SlXkl','lpWindow','VjRyb','WgbBY','setParentW','isMessageK','dowLayer','MChoC','tyztX','floor','STR','\x20largest\x20t','resizeWind','_createKey','iableEscap','Met','ows','sMclI','ist\x20from\x20s','pCascadeWi','version','lpCascadeX','hOCcI','alignMessa','Window_Hel','eshPatches','prototype','GKPUx','_scene','ywordToolt','ion','updatePosi','WIDTH_BASE','dow','GoxMT','tleUI','_baseY','uDxmK','Mapping','constructo','ndow','acity','UTcGF','ams','wordEndX','setKeyword','ideviewBat','OffsetX','descriptio','rxyDZ','essageKeyw','_cascadeDu','ewLine','ARRAYFUNC','scapeChara','ggleVisibi','IPMKO','match','indow','active','ords','eHelpWindo','nateMessag','ascadeWind','contentsOp','oQxnO','anager.','LxZCJ','deMode','1791786HLvaYR','getInputBu','eContainer','sage_newPa','onditionMe','call(this)','ATWgb','shift\x20togg','createMess','lineHeight','tzsrb','onDatabase','SzFvg','clear','name','ttonString','DXZac','rgetX','_messageKe','_windowLay','Window','show','children','EshnM','Scene_Base','DefaultTog','process_Vi','targetWind','p_update','ywords.%1.','_parentWin','clamp','wordEndY','onMouseEnt','MSGKEYWORD','oggleSuppo','END','playUseSki','Keywords','words','rgetY','applyInver','8237946Gwffsy','adeMotion','GetCascade','update','KQKnq','ivation','allowKeyWo','odeOpacity','always','convertVar','aoPRN','resh','TRksA','ggleKey','6094mqkVZY','CndSn','1|0|4|2|3','convertEsc','e_processN','_clientAre','laZhl','updateMess','jsKeK','ched','canCreateM','NtDJP','bEyFf','startOffse','reorder\x20th','WINDOWS','ndowValid','eKJqH','createCont','install\x20%2','s.\x0aPlease\x20','zZbnw','CascadePro','nexcy','e_processE','loadSystem','45tYvKiu','rdRefresh','CmaRj','%1_refresh','N_FILENAME','other\x20Tier','opacity','YttQB','9949910lemZWy','mcMdm','elpCascade','baseTextRe','sageKeywor','lpCascadeW','ET_Y','sage_termi','cters','return\x200','cter','uYCqu','WINDOW_SCA','SUPPORTED_','odeFmt','UiwBa','OLTIPS','setupText','processTou','7TukLyO','cJtVd','isBeingTou','out','mptFmt','obtainEsca','isTriggere','DidGZ','includes','eGTFE','Windows','deKeywordF','offsetX','SNnqJ','undType','AJkZR','addChild','_keyword','startCasca','Scale','Mrrzv','HKWvm','102756gsNXUA','dObVJ','drawing','n.\x0aPlease\x20','EUlKt','%1:%2','eqOYB','indows','setupMessa','VpMDF','eviewUiLay','WvKHz','_wordWrap','wordStartX','deContaine','TooltipWin','suMZ_Messa','contents','fontSize','ywords','geKeywordC','AXVsK','ration','sCascadeTo','backOpacit','CASCADE_SH','QdFFs','OSyXq','max','create','QNNpj','ers','LtjFz','WindowOpac','asBuq','isMainHelp','%1\x20is\x20inco','_hoverStat','ARRAYJSON','rted','clampPosit','replace','_addWord','ascadeTogg','call','Enabled','offsetY','stTracker','\x20plugin\x20pl','createWind','FfTim','t\x20match\x20pl','isSupportM','yvVaC','NUM','tNtUZ','deToggleVi','height','_cascadeTo','_slotWindo','p_hide','e\x20Plugin\x20M','p_show','%1\x20is\x20miss','MOUSE_OFFS','visible','ily','xtIOU','rdMapping','\x1bMSGKEYWOR','gSelg','windowskin','189caUfwC','cGOwa','lpCascadeY','ET_X','2|4|0|1|3','OffsetY','requestRef','PGMRr','moveDurati','JtlOP','indowWidth','toggleDefa','shift','rtX','lity','ARRAYNUM','ajRyH','nwpRp','amilies','filter','DJZhl','processNew','initialize','geKeywordS','ARRAYSTR','on\x20does\x20no','form','_onDatabas','e_convertE','stLog','mmQuv','ade','textSizeEx','gleState','CascadeFam','_cascadeTa','ezkZR','RSpEB','REoqh','wAkis','YDRvY','CreateRefr','owLayer','ggleNote','isParentWi','tGcIC','ZmTwf','sCascadeSh','\x0a\x20\x20\x20\x20this.','setBackgro','IntoCascad','Line','_reference','tmvnO','RegisterKe','wRYVH','UNTITLED','addCascadi','N_OPACITY','isCascadeC','ARRAYEVAL','580584aEmpcR','WindowSkin','WIDTH_MOVE','scale','parseMessa','\x20\x20\x20\x20VisuMZ','4|0|2|3|1','format','ier\x20number','activation','eLFDe','trim','WZICs','wcBHb','fillRect','\x20into\x20the\x20','ageKeyword','IFT_TOGGLE','sibility','leNote','p_isSuppor','isCascadeM','Fmt','aced\x20over\x20','cadeShiftT','funcPatchC','eWindow','eKeywordsC','Loaded','setX','GKEYWORDEN','ZyxqH','VfDyk','drawTextEx','push','Window_Que','WIIcq','isWordWrap','eWindows','exit','length','messageKey','HelpCascad','e_initiali','eCharacter','CascadeAct','iner','zFPUM','mptOffsetX','ation','_helpWindo','XuTur','hitTest','1|5|2|0|4|','VisuMZ_3_S','Tooltip','setupKeywo','PejYX','16RttOAP','Window_Mes','processEsc','MessageKey','String','hide','4846nHFScU','terminateM','ease\x20updat','ing\x20a\x20requ','ult','refresh','Keyword','wordsCasca','eKeywordHe','ywordConta','GKgkY','removeChil','addMessage','eToggleNot','attachToHe','geKeywordH','yOBOs','FamilyName','ScvbY','prites();\x0a','KeywordHel','toggleHelp','apeCharact','width','WINDOW_SKI','_createWin','skin','tion','updateOpac','wordStartY','FrAhH','parse','parameters','rrectly\x20pl','wordMode','aHySq','peString','kLaCG','geKeywords','wordString','%1:Keyword','ipWindow','2250648Xzktdr','padding','updateCasc','prites','NGYgc','calcMessag','ity','ordsCascad','Window_Bas','CASCADE_TO','mptScale','afmiv','e\x20plugin\x20l','deMotion','yojja','CascadeOff','magenta','PaTnJ','_baseX','iftToggle','clearMessa','resetFontS','jWozE','tMessageKe','eywordsCas','essage','map','onMouseExi','rtY','oreEngine','TarPI','convertMes','_helpCasca','newPage','STRUCT','enabled','itemPaddin','ettings','status','p_refreshC','.MessageKe','ywordToggl','PWcoQ','bitmap'];_0x218d=function(){return _0x54be8a;};return _0x218d();}(function(_0x1b3e31,_0x333b4b){const _0x3fdfbe=_0x40f4,_0x5a46bf=_0x1b3e31();while(!![]){try{const _0x5ccd6c=-parseInt(_0x3fdfbe(0x117))/(-0x12ed+-0x1*-0xed5+0x1*0x419)*(parseInt(_0x3fdfbe(0x194))/(0xf74+0x1790+-0x2702*0x1))+parseInt(_0x3fdfbe(0x245))/(0x1b1f+-0xe87+0x1*-0xc95)+parseInt(_0x3fdfbe(0x154))/(0x1*-0xf98+-0x242f+0x33cb)*(-parseInt(_0x3fdfbe(0x9e))/(-0x1aa5+-0x728+0x21d2))+parseInt(_0x3fdfbe(0x26f))/(-0x1*0x358+-0x20b4+0x2412)*(-parseInt(_0x3fdfbe(0xb9))/(-0x2eb*-0x5+-0x841*0x2+0x1f2*0x1))+-parseInt(_0x3fdfbe(0x18e))/(0x1*0xebc+-0xa67*0x3+0x1081)*(parseInt(_0x3fdfbe(0x1be))/(-0x293*-0xb+0x167a+-0x32c2))+-parseInt(_0x3fdfbe(0xa6))/(-0x12c7+-0x1*-0x121+0x1*0x11b0)+-parseInt(_0x3fdfbe(0x27d))/(-0x174f+-0x1*-0x2621+0x1*-0xec7)*(-parseInt(_0x3fdfbe(0xcf))/(0x20*-0x11d+0x176b+0xc41));if(_0x5ccd6c===_0x333b4b)break;else _0x5a46bf['push'](_0x5a46bf['shift']());}catch(_0x2db698){_0x5a46bf['push'](_0x5a46bf['shift']());}}}(_0x218d,0xad979+0x33*-0x9f9+-0x3*-0xa699));var label=_0x53493b(0x191)+_0x53493b(0x26c),tier=tier||0x327+0x6d3*0x5+-0x16f*0x1a,dependencies=['VisuMZ_1_M'+_0x53493b(0x1fc)],pluginData=$plugins[_0x53493b(0x12a)](function(_0x1f017f){const _0x51cf37=_0x53493b,_0xe86c7d={'RnWaO':function(_0x415525,_0x5d2103){return _0x415525+_0x5d2103;},'fqyYW':function(_0x9cc835,_0xe95768){return _0x9cc835+_0xe95768;}};return _0x1f017f[_0x51cf37(0x1e4)]&&_0x1f017f[_0x51cf37(0x230)+'n'][_0x51cf37(0xc1)](_0xe86c7d['RnWaO'](_0xe86c7d['fqyYW']('[',label),']'));})[-0x171b+-0x1*0x11c2+0x28dd];VisuMZ[label][_0x53493b(0x1f8)]=VisuMZ[label][_0x53493b(0x1f8)]||{},VisuMZ[_0x53493b(0x1f9)+_0x53493b(0x22b)]=function(_0x244fdc,_0x5ce47c){const _0x788fa9=_0x53493b,_0x53512d={'eLFDe':function(_0x541c3c,_0x41adaa){return _0x541c3c(_0x41adaa);},'VfuOo':function(_0x1f8c00,_0x2841cf){return _0x1f8c00(_0x2841cf);},'nexcy':_0x788fa9(0x105),'MChoC':function(_0x2535c3,_0x36a539){return _0x2535c3!==_0x36a539;},'ajRyH':_0x788fa9(0x126),'SNnqJ':'EVAL','jsKeK':_0x788fa9(0x153),'wAkis':'JSON','XuTur':function(_0x54c8ae,_0x5c76ab){return _0x54c8ae!==_0x5c76ab;},'LxZCJ':_0x788fa9(0xf5),'IPnmQ':_0x788fa9(0x1f6),'NGYgc':_0x788fa9(0xaf),'yojja':_0x788fa9(0x235),'GKPUx':function(_0x1a9f4d,_0x1db19a){return _0x1a9f4d!==_0x1db19a;},'GoxMT':_0x788fa9(0x20a),'nwpRp':function(_0x52af86,_0x447e5a){return _0x52af86!==_0x447e5a;},'PWcoQ':_0x788fa9(0x12f),'PGMRr':function(_0x3780a0,_0x40ced7){return _0x3780a0!==_0x40ced7;},'AoeMk':_0x788fa9(0x1e0),'mmQuv':'ARRAYSTRUC'+'T'};for(const _0x55c175 in _0x5ce47c){if(_0x55c175['match'](/(.*):(.*)/i)){const _0x3ed515=_0x53512d[_0x788fa9(0x15e)](String,RegExp['$1']),_0x1ecb6a=_0x53512d['VfuOo'](String,RegExp['$2'])['toUpperCas'+'e']()[_0x788fa9(0x15f)]();let _0x4812f1,_0x8658d8,_0x2d8e08;switch(_0x1ecb6a){case _0x53512d[_0x788fa9(0x9b)]:_0x4812f1=_0x53512d['MChoC'](_0x5ce47c[_0x55c175],'')?_0x53512d[_0x788fa9(0x15e)](Number,_0x5ce47c[_0x55c175]):-0xbc2+-0x1*0x1acd+-0x268f*-0x1;break;case _0x53512d[_0x788fa9(0x127)]:_0x8658d8=_0x53512d[_0x788fa9(0x207)](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):[],_0x4812f1=_0x8658d8[_0x788fa9(0x1d8)](_0x4693d4=>Number(_0x4693d4));break;case _0x53512d[_0x788fa9(0xc6)]:_0x4812f1=_0x53512d['MChoC'](_0x5ce47c[_0x55c175],'')?_0x53512d[_0x788fa9(0x15e)](eval,_0x5ce47c[_0x55c175]):null;break;case _0x53512d[_0x788fa9(0x8c)]:_0x8658d8=_0x53512d['MChoC'](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):[],_0x4812f1=_0x8658d8[_0x788fa9(0x1d8)](_0x524975=>eval(_0x524975));break;case _0x53512d[_0x788fa9(0x13e)]:_0x4812f1=_0x53512d[_0x788fa9(0x187)](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):'';break;case _0x53512d[_0x788fa9(0x243)]:_0x8658d8=_0x53512d['XuTur'](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):[],_0x4812f1=_0x8658d8[_0x788fa9(0x1d8)](_0x32efb7=>JSON[_0x788fa9(0x1b3)](_0x32efb7));break;case _0x53512d['IPnmQ']:_0x4812f1=_0x53512d[_0x788fa9(0x187)](_0x5ce47c[_0x55c175],'')?new Function(JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175])):new Function(_0x53512d[_0x788fa9(0x1c2)]);break;case _0x53512d[_0x788fa9(0x1cc)]:_0x8658d8=_0x53512d['GKPUx'](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):[],_0x4812f1=_0x8658d8[_0x788fa9(0x1d8)](_0x58ab02=>new Function(JSON[_0x788fa9(0x1b3)](_0x58ab02)));break;case _0x53512d[_0x788fa9(0x222)]:_0x4812f1=_0x53512d[_0x788fa9(0x128)](_0x5ce47c[_0x55c175],'')?_0x53512d[_0x788fa9(0x15e)](String,_0x5ce47c[_0x55c175]):'';break;case _0x53512d[_0x788fa9(0x1e8)]:_0x8658d8=_0x53512d[_0x788fa9(0x11e)](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):[],_0x4812f1=_0x8658d8[_0x788fa9(0x1d8)](_0x1baf76=>String(_0x1baf76));break;case _0x53512d['AoeMk']:_0x2d8e08=_0x53512d[_0x788fa9(0x21b)](_0x5ce47c[_0x55c175],'')?JSON['parse'](_0x5ce47c[_0x55c175]):{},_0x4812f1=VisuMZ[_0x788fa9(0x1f9)+_0x788fa9(0x22b)]({},_0x2d8e08);break;case _0x53512d[_0x788fa9(0x135)]:_0x8658d8=_0x53512d['XuTur'](_0x5ce47c[_0x55c175],'')?JSON[_0x788fa9(0x1b3)](_0x5ce47c[_0x55c175]):[],_0x4812f1=_0x8658d8['map'](_0x96d927=>VisuMZ[_0x788fa9(0x1f9)+_0x788fa9(0x22b)]({},JSON[_0x788fa9(0x1b3)](_0x96d927)));break;default:continue;}_0x244fdc[_0x3ed515]=_0x4812f1;}}return _0x244fdc;},(_0x18a6c0=>{const _0x45b3b3=_0x53493b,_0x3f6980={'oQxnO':function(_0x336f2a,_0x228a6b){return _0x336f2a(_0x228a6b);},'wRYVH':_0x45b3b3(0x10e)+_0x45b3b3(0x197)+'ired\x20plugi'+_0x45b3b3(0xd2)+_0x45b3b3(0x97)+_0x45b3b3(0x163)+'Plugin\x20Man'+'ager.','RGJhW':function(_0x4cdf6d,_0x14462d){return _0x4cdf6d(_0x14462d);},'glLBy':function(_0x512f09,_0x7ed127){return _0x512f09!==_0x7ed127;},'WIIcq':'%1\x27s\x20versi'+_0x45b3b3(0x130)+_0x45b3b3(0x102)+'ugin\x27s.\x20Pl'+_0x45b3b3(0x196)+'e\x20it\x20in\x20th'+_0x45b3b3(0x10c)+_0x45b3b3(0x242),'UTcGF':function(_0x4960c1,_0x1c494f){return _0x4960c1<_0x1c494f;},'VfDyk':_0x45b3b3(0xf3)+_0x45b3b3(0x1b5)+'aced\x20on\x20th'+_0x45b3b3(0x1ca)+'ist.\x0aIt\x20is'+'\x20a\x20Tier\x20%2'+_0x45b3b3(0xff)+_0x45b3b3(0x16b)+_0x45b3b3(0xa3)+'\x20%3\x20plugin'+_0x45b3b3(0x98)+_0x45b3b3(0x92)+_0x45b3b3(0x1ca)+_0x45b3b3(0x212)+'mallest\x20to'+_0x45b3b3(0x20b)+_0x45b3b3(0x15c)+'s.'},_0x1abaeb=_0x18a6c0['name'];for(const _0x200eab of dependencies){if(!Imported[_0x200eab]){_0x3f6980['oQxnO'](alert,_0x3f6980[_0x45b3b3(0x14e)][_0x45b3b3(0x15b)](_0x1abaeb,_0x200eab)),SceneManager[_0x45b3b3(0x17b)]();break;}}const _0x5377ab=_0x18a6c0[_0x45b3b3(0x230)+'n'];if(_0x5377ab[_0x45b3b3(0x239)](/\[Version[ ](.*?)\]/i)){const _0x1be370=_0x3f6980[_0x45b3b3(0x1ea)](Number,RegExp['$1']);_0x3f6980['glLBy'](_0x1be370,VisuMZ[label][_0x45b3b3(0x214)])&&(_0x3f6980[_0x45b3b3(0x241)](alert,_0x3f6980[_0x45b3b3(0x178)][_0x45b3b3(0x15b)](_0x1abaeb,_0x1be370)),SceneManager[_0x45b3b3(0x17b)]());}if(_0x5377ab[_0x45b3b3(0x239)](/\[Tier[ ](\d+)\]/i)){const _0x55d9d1=_0x3f6980[_0x45b3b3(0x241)](Number,RegExp['$1']);_0x3f6980[_0x45b3b3(0x22a)](_0x55d9d1,tier)?(_0x3f6980['oQxnO'](alert,_0x3f6980[_0x45b3b3(0x174)]['format'](_0x1abaeb,_0x55d9d1,tier)),SceneManager['exit']()):tier=Math['max'](_0x55d9d1,tier);}VisuMZ[_0x45b3b3(0x1f9)+_0x45b3b3(0x22b)](VisuMZ[label]['Settings'],_0x18a6c0[_0x45b3b3(0x1b4)]);})(pluginData),VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)]['Scene_Boot'+_0x53493b(0x132)+'eLoaded']=Scene_Boot['prototype'][_0x53493b(0x250)+_0x53493b(0x170)],Scene_Boot[_0x53493b(0x21a)]['onDatabase'+_0x53493b(0x170)]=function(){const _0x98dfb0=_0x53493b;VisuMZ[_0x98dfb0(0x191)+_0x98dfb0(0x26c)]['Scene_Boot'+_0x98dfb0(0x132)+'eLoaded']['call'](this),this[_0x98dfb0(0x25f)+'suMZ_Messa'+'geKeywords']();},Scene_Boot[_0x53493b(0x21a)][_0x53493b(0x25f)+_0x53493b(0xdf)+_0x53493b(0x1ba)]=function(){const _0x27c7cc=_0x53493b;VisuMZ[_0x27c7cc(0x191)+_0x27c7cc(0x26c)][_0x27c7cc(0x14d)+'ywords'](),VisuMZ[_0x27c7cc(0x191)+_0x27c7cc(0x26c)][_0x27c7cc(0x140)+_0x27c7cc(0x219)]();},VisuMZ['MessageKey'+_0x53493b(0x26c)][_0x53493b(0x26b)]={},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x14d)+_0x53493b(0xe2)]=function(){const _0x5f4bfb=_0x53493b,_0x3cc2b5={'QNNpj':function(_0x23a00e,_0xe5c938){return _0x23a00e<=_0xe5c938;},'WgbBY':function(_0x48a592,_0xbf19e5){return _0x48a592===_0xbf19e5;},'YDRvY':_0x5f4bfb(0x14f)};for(const _0x465d69 of VisuMZ[_0x5f4bfb(0x191)+'words']['Settings'][_0x5f4bfb(0x26b)]){if(!_0x465d69)continue;if(!_0x465d69[_0x5f4bfb(0x19a)])continue;if(_0x3cc2b5[_0x5f4bfb(0xed)](_0x465d69[_0x5f4bfb(0x19a)][_0x5f4bfb(0x15f)](),0xb00+-0x2383+0x1883))continue;if(_0x3cc2b5[_0x5f4bfb(0x203)](_0x465d69[_0x5f4bfb(0x19a)][_0x5f4bfb(0x1eb)+'e']()[_0x5f4bfb(0x15f)](),_0x3cc2b5[_0x5f4bfb(0x13f)]))continue;_0x465d69[_0x5f4bfb(0x19a)]=_0x465d69[_0x5f4bfb(0x19a)][_0x5f4bfb(0x1eb)+'e']()[_0x5f4bfb(0x15f)](),VisuMZ[_0x5f4bfb(0x191)+_0x5f4bfb(0x26c)][_0x5f4bfb(0x26b)][_0x465d69[_0x5f4bfb(0x19a)]]=_0x465d69;}},VisuMZ['MessageKey'+_0x53493b(0x26c)][_0x53493b(0x16d)+_0x53493b(0xb4)]=_0x53493b(0x147)+_0x53493b(0x1d2)+_0x53493b(0x12e)+_0x53493b(0x1a7)+_0x53493b(0x159)+_0x53493b(0x1e6)+_0x53493b(0x262)+_0x53493b(0x24a)+';\x0a',VisuMZ['MessageKey'+_0x53493b(0x26c)]['CreateRefr'+_0x53493b(0x219)]=function(){const _0x2e128d=_0x53493b,_0x1c4978={'hOCcI':_0x2e128d(0xa1)},_0x110fa6=Window_MessageKeywordTooltip['SUPPORTED_'+_0x2e128d(0x93)];for(const _0x456f84 of _0x110fa6){if(window[_0x456f84]&&window[_0x456f84][_0x2e128d(0x21a)]['refresh']){const _0x2aabb6=_0x1c4978[_0x2e128d(0x216)][_0x2e128d(0x15b)](_0x456f84);VisuMZ[_0x2e128d(0x191)+'words'][_0x2aabb6]=window[_0x456f84][_0x2e128d(0x21a)][_0x2e128d(0x199)];const _0x653006=VisuMZ[_0x2e128d(0x191)+_0x2e128d(0x26c)]['funcPatchC'+_0x2e128d(0xb4)][_0x2e128d(0x15b)](_0x2aabb6);window[_0x456f84][_0x2e128d(0x21a)][_0x2e128d(0x199)]=new Function(_0x653006);}}},VisuMZ[_0x53493b(0x191)+'words']['Scene_Base'+_0x53493b(0x1ad)+_0x53493b(0x206)]=Scene_Base[_0x53493b(0x21a)][_0x53493b(0x100)+_0x53493b(0x141)],Scene_Base['prototype'][_0x53493b(0x100)+_0x53493b(0x141)]=function(){const _0x2a44bb=_0x53493b;VisuMZ['MessageKey'+_0x2a44bb(0x26c)][_0x2a44bb(0x25d)+'_createWin'+_0x2a44bb(0x206)][_0x2a44bb(0xfb)](this),this['createMess'+_0x2a44bb(0x164)+'TooltipWin'+'dow']();},Scene_Base[_0x53493b(0x21a)]['createMess'+_0x53493b(0x164)+_0x53493b(0xde)+_0x53493b(0x221)]=function(){const _0xe91cc8=_0x53493b;this[_0xe91cc8(0x257)+'ywordToolt'+_0xe91cc8(0x1bd)]=new Window_MessageKeywordTooltip(),this['addChild'](this[_0xe91cc8(0x257)+_0xe91cc8(0x21d)+_0xe91cc8(0x1bd)]);},Scene_Base[_0x53493b(0x21a)][_0x53493b(0x24d)+_0x53493b(0x164)+_0x53493b(0x17e)+_0x53493b(0x247)]=function(){const _0x3452fa=_0x53493b;if(this['_helpCasca'+_0x3452fa(0xdd)+'r'])return;this[_0x3452fa(0x1de)+_0x3452fa(0xc4)+_0x3452fa(0x129)]=[],this[_0x3452fa(0x1de)+_0x3452fa(0xdd)+'r']=[];},Scene_Base[_0x53493b(0x21a)]['clearMessa'+_0x53493b(0x1a3)+'elpCascade'+'Windows']=function(){const _0x2e925a=_0x53493b,_0x49d5c6={'YttQB':function(_0x10848c,_0x26709e){return _0x10848c===_0x26709e;}};if(_0x49d5c6[_0x2e925a(0xa5)](this[_0x2e925a(0x1de)+'deContaine'+'r'],undefined))return;for(const _0x48a86b of this[_0x2e925a(0x1de)+'deContaine'+'r']){this[_0x2e925a(0x19f)+'d'](_0x48a86b);}this['_helpCasca'+_0x2e925a(0xc4)+'amilies']=[],this[_0x2e925a(0x1de)+_0x2e925a(0xdd)+'r']=[];},Scene_Base['prototype']['addMessage'+_0x53493b(0x1a8)+'pCascadeWi'+_0x53493b(0x228)]=function(_0x85395c,_0x53005c,_0x56e750){const _0xb13150=_0x53493b,_0x18e5c8={'eqOYB':function(_0x285dc4,_0x196678){return _0x285dc4>_0x196678;}},_0x3b3c80=VisuMZ['MessageKey'+_0xb13150(0x26c)][_0xb13150(0x271)+_0xb13150(0x1a5)](_0x85395c,_0x53005c);if(this[_0xb13150(0x1de)+_0xb13150(0xc4)+_0xb13150(0x129)][_0xb13150(0xc1)](_0x3b3c80))return;const _0x49bdfe=VisuMZ['MessageKey'+_0xb13150(0x26c)][_0xb13150(0x26b)][_0x53005c[_0xb13150(0x1eb)+'e']()[_0xb13150(0x15f)]()];if(_0x49bdfe&&_0x49bdfe['Tooltip']&&_0x18e5c8[_0xb13150(0xd5)](_0x49bdfe[_0xb13150(0x18b)]['length'],0x18d0+-0x104f+-0x881)){const _0x523484=new Window_MessageKeywordTooltip();_0x523484['setupCasca'+'deMode'](_0x53005c,_0x56e750),this[_0xb13150(0xc9)](_0x523484),this[_0xb13150(0x1de)+_0xb13150(0xdd)+'r'][_0xb13150(0x176)](_0x523484);}this[_0xb13150(0x1de)+_0xb13150(0xc4)+_0xb13150(0x129)][_0xb13150(0x176)](_0x3b3c80),this['addCascadi'+'ngKeywords'+_0xb13150(0x17e)+_0xb13150(0x16e)](_0x53005c);},VisuMZ[_0x53493b(0x191)+'words'][_0x53493b(0x271)+_0x53493b(0x1a5)]=function(_0x484084,_0x220d87){const _0x1a1b55=_0x53493b,_0x335800={'VjRyb':function(_0xaeda4e,_0x59bc20){return _0xaeda4e>_0x59bc20;}};let _0x14e234=_0x484084;const _0x5210dd=VisuMZ['MessageKey'+'words'][_0x1a1b55(0x26b)][_0x220d87['toUpperCas'+'e']()['trim']()];return _0x5210dd&&_0x5210dd[_0x1a1b55(0x139)+_0x1a1b55(0x111)]&&_0x335800[_0x1a1b55(0x202)](_0x5210dd[_0x1a1b55(0x139)+_0x1a1b55(0x111)]['length'],0xf9+0x43*-0x45+0x1116)&&(_0x14e234=_0x5210dd[_0x1a1b55(0x139)+_0x1a1b55(0x111)]),_0x14e234[_0x1a1b55(0x1eb)+'e']()['trim']();},Scene_Base[_0x53493b(0x21a)][_0x53493b(0x150)+'ngKeywords'+_0x53493b(0x17e)+_0x53493b(0x16e)]=function(_0x8fc3fa){const _0x233cc4=_0x53493b,_0x4bf25b={'qSTQN':function(_0x18b6a5,_0x1c6a9c){return _0x18b6a5(_0x1c6a9c);},'GBKBu':function(_0x5079f9,_0x80c802){return _0x5079f9(_0x80c802);}},_0x54c90e=VisuMZ[_0x233cc4(0x191)+_0x233cc4(0x26c)][_0x233cc4(0x26b)][_0x8fc3fa[_0x233cc4(0x1eb)+'e']()['trim']()];if(!_0x54c90e)return;const _0x40494b=_0x54c90e['Cascades']||[];for(const _0x129bb8 of _0x40494b){let _0x2d133f=_0x129bb8,_0x42bd33='';_0x2d133f[_0x233cc4(0x239)](/(.*)\:(.*)/i)&&(_0x42bd33=_0x4bf25b['qSTQN'](String,RegExp['$2'])['trim'](),_0x2d133f=_0x4bf25b['GBKBu'](String,RegExp['$1'])[_0x233cc4(0x15f)]()),this[_0x233cc4(0x1a0)+_0x233cc4(0x1a8)+_0x233cc4(0x213)+_0x233cc4(0x228)](_0x129bb8,_0x2d133f,_0x42bd33);}},Scene_Base[_0x53493b(0x21a)]['alignMessa'+_0x53493b(0x1a3)+_0x53493b(0xa8)+'Windows']=function(){const _0x3f9aa5=_0x53493b,_0x36e4cd={'REoqh':function(_0x1e0824,_0x3802b7){return _0x1e0824<=_0x3802b7;},'YTLBw':function(_0x25ff55,_0x2622ad){return _0x25ff55/_0x2622ad;},'WZICs':function(_0x42cdb0,_0x1759af){return _0x42cdb0*_0x1759af;},'xtIOU':function(_0x52a1c8,_0x47d057){return _0x52a1c8*_0x47d057;}},_0x4b76cb=_0x36e4cd[_0x3f9aa5(0x13d)](this[_0x3f9aa5(0x186)+'w']['y'],_0x36e4cd['YTLBw'](Graphics[_0x3f9aa5(0x1fb)],-0x25b7+-0x4*-0xad+0x2305));let _0x2d2ede=this[_0x3f9aa5(0x1c3)+_0x3f9aa5(0x19c)+_0x3f9aa5(0x215)](),_0x574ccd=this['calcMessag'+'eKeywordHe'+_0x3f9aa5(0x119)](_0x4b76cb);for(const _0x393ab2 of this[_0x3f9aa5(0x1de)+_0x3f9aa5(0xdd)+'r']){_0x393ab2[_0x3f9aa5(0x1d0)]=_0x2d2ede,_0x393ab2[_0x3f9aa5(0x224)]=_0x574ccd,_0x393ab2[_0x3f9aa5(0xcb)+_0x3f9aa5(0x1cb)](),_0x574ccd+=_0x36e4cd[_0x3f9aa5(0x160)](_0x4b76cb?-0x1*0x544+-0x2315+0x285a*0x1:-(0x16f3+0x122+0x605*-0x4),Math['ceil'](_0x36e4cd[_0x3f9aa5(0x112)](_0x393ab2['height'],_0x393ab2[_0x3f9aa5(0x157)]['y'])));}},Scene_Base[_0x53493b(0x21a)]['calcMessag'+_0x53493b(0x19c)+_0x53493b(0x215)]=function(){const _0x284fcb=_0x53493b,_0x33e89d={'TGEEO':function(_0x414ded,_0x5b9f81){return _0x414ded+_0x5b9f81;},'JtlOP':function(_0x2f59a9,_0x2bfbb7){return _0x2f59a9+_0x2bfbb7;}};let _0x3f7736=0x6d9*0x3+0x14f+-0x15da;return Window_Help['CASCADE_TO'+_0x284fcb(0xb6)][_0x284fcb(0x1a2)+_0x284fcb(0x201)]&&(_0x3f7736=_0x33e89d['TGEEO'](_0x33e89d[_0x284fcb(0x120)](this['_helpWindo'+'w']['x'],this[_0x284fcb(0x186)+'w']['width']),this[_0x284fcb(0x258)+'er']['x']),_0x3f7736-=this[_0x284fcb(0x1c3)+_0x284fcb(0x19c)+_0x284fcb(0xab)+_0x284fcb(0x121)]()),Imported[_0x284fcb(0x18a)+_0x284fcb(0x22e)+_0x284fcb(0x223)]&&BattleManager['isUsingSid'+_0x284fcb(0xd9)+_0x284fcb(0xbc)]()&&(_0x3f7736-=Window_SideviewUiBattleStatus[_0x284fcb(0x220)],_0x3f7736-=Window_SideviewUiBattleStatus[_0x284fcb(0x156)],_0x3f7736-=this[_0x284fcb(0x186)+'w'][_0x284fcb(0x1e2)+'g']()),_0x3f7736+=Window_Help[_0x284fcb(0x1c7)+'OLTIPS'][_0x284fcb(0xc5)],_0x3f7736;},Scene_Base[_0x53493b(0x21a)][_0x53493b(0x1c3)+_0x53493b(0x19c)+_0x53493b(0x119)]=function(_0x161992){const _0x570cfd=_0x53493b,_0x4a2451={'ZmTwf':function(_0x187dc9,_0x1e2dc5){return _0x187dc9+_0x1e2dc5;}};let _0xae3b01=0x1e3e+-0x1*-0x15e6+-0x3424;if(Window_Help[_0x570cfd(0x1c7)+_0x570cfd(0xb6)][_0x570cfd(0x1a2)+_0x570cfd(0x201)]){_0xae3b01=_0x4a2451[_0x570cfd(0x145)](this[_0x570cfd(0x186)+'w']['y'],this[_0x570cfd(0x258)+'er']['y']);if(_0x161992)_0xae3b01+=this['_helpWindo'+'w']['height'];}return _0xae3b01+=Window_Help['CASCADE_TO'+_0x570cfd(0xb6)][_0x570cfd(0xfd)],_0xae3b01;},Scene_Base[_0x53493b(0x21a)][_0x53493b(0x1c3)+_0x53493b(0x19c)+_0x53493b(0xab)+_0x53493b(0x121)]=function(_0x59ae2a){const _0x1739e4=_0x53493b,_0x28622f={'afmiv':function(_0xa73125,_0x2986b0){return _0xa73125*_0x2986b0;}};let _0x44a08e=-0x17bf+0x122b+0x594;for(const _0x41afc5 of this['_helpCasca'+_0x1739e4(0xdd)+'r']){let _0x3823bb=_0x41afc5[_0x1739e4(0x1ab)];if(!_0x59ae2a)_0x3823bb=Math[_0x1739e4(0x209)](_0x28622f[_0x1739e4(0x1c9)](_0x41afc5['width'],_0x41afc5['scale']['x']));_0x44a08e=Math[_0x1739e4(0xeb)](_0x44a08e,_0x3823bb);}return _0x44a08e;};function _0x40f4(_0x2518ed,_0x1dda1f){const _0x360870=_0x218d();return _0x40f4=function(_0x55bbf8,_0x541914){_0x55bbf8=_0x55bbf8-(-0x153d+0x8ec*-0x1+0x8*0x3d6);let _0x14a7a4=_0x360870[_0x55bbf8];return _0x14a7a4;},_0x40f4(_0x2518ed,_0x1dda1f);}function Sprite_MessageKeywordTooltip(){const _0x1e6c52=_0x53493b;this[_0x1e6c52(0x12d)](...arguments);}Sprite_MessageKeywordTooltip[_0x53493b(0x21a)]=Object[_0x53493b(0xec)](Sprite_Clickable['prototype']),Sprite_MessageKeywordTooltip['prototype'][_0x53493b(0x227)+'r']=Sprite_MessageKeywordTooltip,Sprite_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x12d)]=function(_0xbe72bb,_0x55156a){const _0x29c209=_0x53493b,_0x35870e={'uYCqu':_0x29c209(0x1ce)};this[_0x29c209(0x14b)+'String']=_0xbe72bb,Sprite_Clickable[_0x29c209(0x21a)][_0x29c209(0x12d)]['call'](this),this['setFrame'](-0x502*-0x6+0xe1*-0x2+-0x1*0x1c4a,0x224a+0x1a73*-0x1+0x29d*-0x3,_0x55156a[_0x29c209(0x1ab)],_0x55156a[_0x29c209(0x108)]),this['x']=_0x55156a['x'],this['y']=_0x55156a['y'];let _0x53471a=![];_0x53471a&&(this[_0x29c209(0x1e9)]=new Bitmap(_0x55156a['width'],_0x55156a[_0x29c209(0x108)]),this[_0x29c209(0x1e9)][_0x29c209(0x162)](-0x7*0x13f+-0x1*-0x159d+-0x226*0x6,-0x10*-0x261+0x26c3+0x115*-0x47,_0x55156a[_0x29c209(0x1ab)],_0x55156a['height'],_0x35870e[_0x29c209(0xb1)]),this[_0x29c209(0xa4)]=0x1*0x132e+0x201b+-0x3309);},Sprite_MessageKeywordTooltip['prototype'][_0x53493b(0x204)+_0x53493b(0x23a)]=function(_0x575abf){const _0x13ba7c=_0x53493b;this[_0x13ba7c(0x263)+_0x13ba7c(0x221)]=_0x575abf;},Sprite_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x143)+_0x53493b(0x94)]=function(){const _0x7577c6=_0x53493b,_0x483057={'eKJqH':_0x7577c6(0x189)+'3','PaTnJ':function(_0x21b723,_0xad8f8b){return _0x21b723<=_0xad8f8b;}},_0x42df78=_0x483057[_0x7577c6(0x95)][_0x7577c6(0x1f0)]('|');let _0x3301bb=0x4fe+0x177b+-0x1c79;while(!![]){switch(_0x42df78[_0x3301bb++]){case'0':if(_0x483057[_0x7577c6(0x1cf)](this[_0x7577c6(0x263)+'dow']['contentsOp'+_0x7577c6(0x229)],0xec0+-0x767+-0x759))return![];continue;case'1':if(!this['_parentWin'+_0x7577c6(0x221)])return![];continue;case'2':if(!this['_parentWin'+_0x7577c6(0x221)][_0x7577c6(0x110)])return![];continue;case'3':return!![];case'4':if(this[_0x7577c6(0x152)+_0x7577c6(0x249)+'t']())return![];continue;case'5':if(!this['_parentWin'+_0x7577c6(0x221)]['isOpen']())return![];continue;}break;}},Sprite_MessageKeywordTooltip['prototype']['isCascadeC'+_0x53493b(0x249)+'t']=function(){const _0x246d03=_0x53493b,_0x39c62b={'EshnM':function(_0x35b149,_0x240a45){return _0x35b149===_0x240a45;},'tyztX':function(_0x3ac08c,_0x3d6589){return _0x3ac08c!==_0x3d6589;},'laZhl':'Window_Hel'+'p','UaeLy':_0x246d03(0x277)},_0x438d1a=SceneManager[_0x246d03(0x21c)];if(_0x438d1a&&_0x39c62b[_0x246d03(0x25c)](_0x438d1a['constructo'+'r'],Scene_Equip)){const _0x181694=_0x438d1a['_slotWindo'+'w'];if(_0x181694&&_0x181694[_0x246d03(0x23b)])return![];}if(_0x39c62b[_0x246d03(0x208)](this[_0x246d03(0x263)+_0x246d03(0x221)]['constructo'+'r'][_0x246d03(0x253)],_0x39c62b[_0x246d03(0x8a)]))return![];const _0x48d7cc=Window_Help[_0x246d03(0x1c7)+_0x246d03(0xb6)];if(!_0x48d7cc['enabled'])return![];if(_0x39c62b[_0x246d03(0x25c)](_0x48d7cc[_0x246d03(0x15d)],_0x39c62b['UaeLy']))return!![];return Window_Help[_0x246d03(0xe8)+_0x246d03(0x165)];},Sprite_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x260)+'ow']=function(){const _0xa4ea7f=_0x53493b;return SceneManager[_0xa4ea7f(0x21c)][_0xa4ea7f(0x257)+_0xa4ea7f(0x21d)+_0xa4ea7f(0x1bd)];},Sprite_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x266)+'er']=function(){const _0x506e26=_0x53493b;Sprite_Clickable[_0x506e26(0x21a)][_0x506e26(0x266)+'er']['call'](this);const _0x2228de=this[_0x506e26(0x260)+'ow']();_0x2228de&&this['isParentWi'+_0x506e26(0x94)]()&&_0x2228de[_0x506e26(0x22d)](this[_0x506e26(0x14b)+_0x506e26(0x192)]);},Sprite_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x1d9)+'t']=function(){const _0x5c521d=_0x53493b,_0x154e91={'PPVnD':function(_0x1703dd,_0xa4952){return _0x1703dd===_0xa4952;}};Sprite_Clickable[_0x5c521d(0x21a)][_0x5c521d(0x1d9)+'t']['call'](this);const _0x333de2=this['targetWind'+'ow']();_0x333de2&&_0x154e91[_0x5c521d(0x1f1)](_0x333de2['_keyword'],this[_0x5c521d(0x14b)+_0x5c521d(0x192)])&&_0x333de2[_0x5c521d(0x22d)](null);},Sprite_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0xb8)+'ch']=function(){const _0xc1f10b=_0x53493b,_0x5a1ef5={'aHySq':function(_0x4d688a,_0x2e2a99){return _0x4d688a!==_0x2e2a99;}},_0x747ba6=this[_0xc1f10b(0xf4)+'e'];this[_0xc1f10b(0xf4)+'e']=this[_0xc1f10b(0xbb)+_0xc1f10b(0x8d)](),_0x5a1ef5[_0xc1f10b(0x1b7)](this[_0xc1f10b(0xf4)+'e'],_0x747ba6)&&(this[_0xc1f10b(0xf4)+'e']?this[_0xc1f10b(0x266)+'er']():this[_0xc1f10b(0x1d9)+'t']());},Sprite_MessageKeywordTooltip[_0x53493b(0x21a)]['isBeingTou'+'ched']=function(){const _0xeb1414=_0x53493b,_0xfc3017={'yOBOs':function(_0x29210f,_0x1fb604){return _0x29210f===_0x1fb604;},'bEyFf':function(_0x46bf7,_0x358af4){return _0x46bf7===_0x358af4;}};if(_0xfc3017[_0xeb1414(0x1a4)](TouchInput['x'],0x1454+0x8*0xc7+-0x1a8c)&&_0xfc3017[_0xeb1414(0x90)](TouchInput['y'],0x8+0xf2*-0x1c+0x1a70))return![];const _0x16bd7c=new Point(TouchInput['x'],TouchInput['y']),_0x28e409=this['worldTrans'+_0xeb1414(0x131)][_0xeb1414(0x26e)+'se'](_0x16bd7c);return this[_0xeb1414(0x188)](_0x28e409['x'],_0x28e409['y']);},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1c6)+_0x53493b(0x17f)+'ze']=Window_Base[_0x53493b(0x21a)][_0x53493b(0x12d)],Window_Base[_0x53493b(0x21a)][_0x53493b(0x12d)]=function(_0x2860ff){const _0x27be01=_0x53493b;VisuMZ['MessageKey'+'words'][_0x27be01(0x1c6)+'e_initiali'+'ze'][_0x27be01(0xfb)](this,_0x2860ff),this[_0x27be01(0x1d2)+'geKeywordS'+'prites']();},Window_Base['prototype']['clearMessa'+_0x53493b(0x12e)+_0x53493b(0x1c1)]=function(){const _0x5f5db9=_0x53493b,_0x5cc2c6={'KQKnq':function(_0x113d80,_0x45f4ba){return _0x113d80>_0x45f4ba;}};!this[_0x5f5db9(0x257)+_0x5f5db9(0x19d)+_0x5f5db9(0x182)]&&(this[_0x5f5db9(0x257)+_0x5f5db9(0x19d)+_0x5f5db9(0x182)]=new Sprite(),this[_0x5f5db9(0x89)+'a'][_0x5f5db9(0xc9)](this['_messageKe'+'ywordConta'+_0x5f5db9(0x182)]));while(_0x5cc2c6[_0x5f5db9(0x273)](this[_0x5f5db9(0x257)+_0x5f5db9(0x19d)+_0x5f5db9(0x182)]['children'][_0x5f5db9(0x17c)],0xcf1+-0x14c1+-0x7d0*-0x1)){const _0x38e147=this[_0x5f5db9(0x257)+_0x5f5db9(0x19d)+_0x5f5db9(0x182)][_0x5f5db9(0x25b)][-0x79b+-0x497+-0x619*-0x2];this['_messageKe'+_0x5f5db9(0x19d)+'iner'][_0x5f5db9(0x19f)+'d'](_0x38e147);}if(this['allowKeyWo'+'rdRefresh']()){const _0x286a8e=SceneManager[_0x5f5db9(0x21c)][_0x5f5db9(0x257)+_0x5f5db9(0x21d)+_0x5f5db9(0x1bd)];_0x286a8e&&_0x286a8e['setKeyword'](null);}},Window_Base[_0x53493b(0x21a)][_0x53493b(0x275)+_0x53493b(0x9f)]=function(){const _0x4b74e5=_0x53493b,_0x57c7d4={'BpWtQ':'Window_Que'+_0x4b74e5(0x134),'AJkZR':_0x4b74e5(0x177)+_0x4b74e5(0xfe)},_0x3c6b93=[];return _0x3c6b93[_0x4b74e5(0x176)](_0x57c7d4['BpWtQ'],_0x57c7d4[_0x4b74e5(0xc8)]),!_0x3c6b93[_0x4b74e5(0xc1)](this[_0x4b74e5(0x227)+'r'][_0x4b74e5(0x253)]);},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1c6)+_0x53493b(0x133)+'scapeChara'+_0x53493b(0xae)]=Window_Base['prototype'][_0x53493b(0x87)+_0x53493b(0x1aa)+'ers'],Window_Base[_0x53493b(0x21a)][_0x53493b(0x87)+_0x53493b(0x1aa)+_0x53493b(0xee)]=function(_0x53f28){const _0x3ca27c=_0x53493b;return _0x53f28=this['convertMes'+_0x3ca27c(0xaa)+'ds'](_0x53f28),_0x53f28=VisuMZ[_0x3ca27c(0x191)+_0x3ca27c(0x26c)][_0x3ca27c(0x1c6)+'e_convertE'+'scapeChara'+_0x3ca27c(0xae)][_0x3ca27c(0xfb)](this,_0x53f28),_0x53f28;},Window_Base[_0x53493b(0x21a)][_0x53493b(0x1dd)+_0x53493b(0xaa)+'ds']=function(_0x1c9347){const _0x2857f3=_0x53493b,_0x59b189={'mcMdm':function(_0x199e88,_0x5137f7){return _0x199e88(_0x5137f7);},'tzsrb':function(_0x196eab,_0x149565){return _0x196eab(_0x149565);},'rxyDZ':function(_0xbf452c,_0x1ead6d){return _0xbf452c(_0x1ead6d);},'VpMDF':_0x2857f3(0x114)+_0x2857f3(0x1fa)+_0x2857f3(0x172)+'D[0]'};return _0x1c9347=this[_0x2857f3(0x278)+_0x2857f3(0x20e)+_0x2857f3(0x180)+'s'](_0x1c9347),_0x1c9347=_0x1c9347[_0x2857f3(0xf8)](/\(\((.*?)\)\)/gi,(_0x43fb33,_0x401183)=>{const _0x4afbf8=_0x2857f3,_0x4e0554=_0x59b189[_0x4afbf8(0xa7)](String,_0x401183);let _0x517313=_0x4e0554,_0x28b275='';_0x517313[_0x4afbf8(0x239)](/(.*)\:(.*)/i)&&(_0x28b275=_0x59b189[_0x4afbf8(0x24f)](String,RegExp['$2'])[_0x4afbf8(0x15f)](),_0x517313=_0x59b189[_0x4afbf8(0x231)](String,RegExp['$1'])[_0x4afbf8(0x15f)]());if(VisuMZ[_0x4afbf8(0x191)+_0x4afbf8(0x26c)][_0x4afbf8(0x26b)][_0x517313[_0x4afbf8(0x1eb)+'e']()[_0x4afbf8(0x15f)]()]){const _0x33e66d=VisuMZ['MessageKey'+_0x4afbf8(0x26c)][_0x4afbf8(0x26b)][_0x517313[_0x4afbf8(0x1eb)+'e']()['trim']()],_0x4cb527=_0x33e66d['Text']['format'](_0x28b275)['trim']();return this['isSupportM'+'essageKeyw'+_0x4afbf8(0x23c)]()?_0x59b189[_0x4afbf8(0xd8)][_0x4afbf8(0x15b)](_0x4e0554,_0x4cb527):_0x4cb527;}else return'';}),_0x1c9347;},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1c6)+'e_processE'+_0x53493b(0x236)+_0x53493b(0xb0)]=Window_Base[_0x53493b(0x21a)][_0x53493b(0x190)+_0x53493b(0x1aa)+'er'],Window_Base[_0x53493b(0x21a)][_0x53493b(0x190)+_0x53493b(0x1aa)+'er']=function(_0x39e3f,_0xee9dfb){const _0x175a14=_0x53493b,_0xfab079={'PejYX':_0x175a14(0x267),'aoPRN':_0x175a14(0x267)+_0x175a14(0x269)};switch(_0x39e3f){case _0xfab079[_0x175a14(0x18d)]:_0xee9dfb[_0x175a14(0xd1)]?this[_0x175a14(0x1ec)+_0x175a14(0x113)](_0xee9dfb):this[_0x175a14(0xbe)+_0x175a14(0x1b8)](_0xee9dfb);break;case _0xfab079[_0x175a14(0x279)]:_0xee9dfb[_0x175a14(0xd1)]&&this[_0x175a14(0x20d)+_0x175a14(0x1b6)]&&this['endKeyword'+_0x175a14(0x226)](_0xee9dfb);this[_0x175a14(0xbe)+'peParam'](_0xee9dfb);break;default:return VisuMZ[_0x175a14(0x191)+_0x175a14(0x26c)][_0x175a14(0x1c6)+_0x175a14(0x9c)+_0x175a14(0x236)+'cter']['call'](this,_0x39e3f,_0xee9dfb);break;}},Window_Base[_0x53493b(0x21a)][_0x53493b(0x1ec)+_0x53493b(0x113)]=function(_0x46d918){const _0x389649=_0x53493b,_0x418763=this['obtainEsca'+_0x389649(0x1b8)](_0x46d918);this[_0x389649(0x20d)+_0x389649(0x1bb)]=_0x418763[_0x389649(0x1eb)+'e']()[_0x389649(0x15f)](),this[_0x389649(0x20d)+'wordMode']=!![],this[_0x389649(0x20d)+_0x389649(0xdc)]=_0x46d918['x'],this[_0x389649(0x20d)+_0x389649(0x1b1)]=_0x46d918['y'];},Window_Base[_0x53493b(0x21a)]['endKeyword'+_0x53493b(0x226)]=function(_0x390476){const _0x44fa63=_0x53493b;this[_0x44fa63(0x20d)+_0x44fa63(0x1b6)]=![],this[_0x44fa63(0x20d)+_0x44fa63(0x22c)]=_0x390476['x'],this[_0x44fa63(0x20d)+'wordEndY']=_0x390476['y'],this['addMessage'+_0x44fa63(0x19a)]();},VisuMZ['MessageKey'+_0x53493b(0x26c)][_0x53493b(0x1c6)+_0x53493b(0x88)+_0x53493b(0x234)]=Window_Base['prototype']['processNew'+_0x53493b(0x14a)],Window_Base[_0x53493b(0x21a)][_0x53493b(0x12c)+_0x53493b(0x14a)]=function(_0x33eaa0){const _0x17e859=_0x53493b;_0x33eaa0[_0x17e859(0xd1)]&&this[_0x17e859(0x20d)+_0x17e859(0x1b6)]&&(this[_0x17e859(0x20d)+_0x17e859(0x22c)]=_0x33eaa0['x'],this[_0x17e859(0x20d)+_0x17e859(0x265)]=_0x33eaa0['y'],this[_0x17e859(0x1a0)+'Keyword']()),VisuMZ['MessageKey'+_0x17e859(0x26c)][_0x17e859(0x1c6)+_0x17e859(0x88)+'ewLine']['call'](this,_0x33eaa0),_0x33eaa0[_0x17e859(0xd1)]&&this[_0x17e859(0x20d)+_0x17e859(0x1b6)]&&(this[_0x17e859(0x20d)+_0x17e859(0xdc)]=_0x33eaa0['x'],this[_0x17e859(0x20d)+_0x17e859(0x1b1)]=_0x33eaa0['y']);},Window_Base[_0x53493b(0x21a)][_0x53493b(0x103)+_0x53493b(0x232)+_0x53493b(0x23c)]=function(){const _0x1e0a9a=_0x53493b;return Window_MessageKeywordTooltip[_0x1e0a9a(0xb3)+_0x1e0a9a(0x93)][_0x1e0a9a(0xc1)](this[_0x1e0a9a(0x227)+'r'][_0x1e0a9a(0x253)]);},Window_Base[_0x53493b(0x21a)][_0x53493b(0x1a0)+'Keyword']=function(){const _0x3e7e82=_0x53493b,_0x292a3f={'ScvbY':function(_0x213104,_0x562a9a){return _0x213104+_0x562a9a;},'CIVZT':function(_0x31387b,_0x586faf){return _0x31387b-_0x586faf;},'CndSn':function(_0x4b7695,_0x10eb31){return _0x4b7695+_0x10eb31;},'fuVmp':function(_0x1dcf46,_0x3b2ca4){return _0x1dcf46+_0x3b2ca4;}};if(!this[_0x3e7e82(0x103)+_0x3e7e82(0x232)+_0x3e7e82(0x23c)]())return;const _0xa17d50=this[_0x3e7e82(0x20d)+_0x3e7e82(0x1bb)];let _0x395551=this[_0x3e7e82(0x20d)+_0x3e7e82(0xdc)],_0x5473e9=_0x292a3f[_0x3e7e82(0x1a6)](this[_0x3e7e82(0x20d)+_0x3e7e82(0x1b1)],-0x38+0x1f8+-0x1be),_0x3e766b=_0x292a3f['CIVZT'](this[_0x3e7e82(0x20d)+_0x3e7e82(0x22c)],_0x395551),_0xb7fe69=_0x292a3f[_0x3e7e82(0x1ef)](_0x292a3f[_0x3e7e82(0x27e)](_0x292a3f[_0x3e7e82(0x1ef)](this[_0x3e7e82(0x20d)+_0x3e7e82(0x265)],_0x5473e9),_0x292a3f['fuVmp'](this[_0x3e7e82(0xe0)][_0x3e7e82(0xe1)],-0x52*-0x60+0x681+-0x2537)),0x13ab+-0x2*-0x26b+0x1*-0x187d);const _0x32bd5d=new Rectangle(_0x395551,_0x5473e9,_0x3e766b,_0xb7fe69),_0x165164=new Sprite_MessageKeywordTooltip(_0xa17d50,_0x32bd5d);_0x165164['setParentW'+_0x3e7e82(0x23a)](this),this['_messageKe'+_0x3e7e82(0x19d)+'iner']['addChild'](_0x165164);},Window_Help[_0x53493b(0x1c7)+_0x53493b(0xb6)]={'enabled':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0x1fe)+'ade']??![],'attachToHelpWindow':VisuMZ['MessageKey'+'words']['Settings'][_0x53493b(0x18b)][_0x53493b(0x1fe)+_0x53493b(0x136)]??!![],'activation':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0x181)+_0x53493b(0x274)]??_0x53493b(0x24c)+'le','toggleDefault':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0x25e)+_0x53493b(0x138)]??!![],'offsetX':VisuMZ[_0x53493b(0x191)+'words'][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0x1cd)+_0x53493b(0x171)]??-0xbf*0x33+0x4ca*0x1+0xd*0x28f,'offsetY':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)]['CascadeOff'+'setY']??-0x213f+-0xc*0x77+0x1*0x26d3,'startOffsetX':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)]['CascadeSta'+_0x53493b(0x124)]??-0xecb*-0x1+-0x6d*0x53+-0x1*-0x14f0,'startOffsetY':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)]['Settings'][_0x53493b(0x18b)]['CascadeSta'+_0x53493b(0x1da)]??0x981*0x1+-0x1b2b+0x13*0xee,'moveDuration':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)]['CascadeDur'+_0x53493b(0x185)]??-0x85d+-0x1*0x835+0x109e,'toggleHelpFmt':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0x9a)+_0x53493b(0xbd)]??_0x53493b(0x1bc)+'s','toggleHelpScale':VisuMZ['MessageKey'+_0x53493b(0x26c)]['Settings'][_0x53493b(0x18b)]['CascadePro'+_0x53493b(0x1c8)]??0x21b0+0x60b+-0x27bb+0.8,'toggleHelpOffsetX':VisuMZ['MessageKey'+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)]['CascadePro'+_0x53493b(0x184)]??-0x1f4+0x1*-0x65a+-0x2*-0x427,'toggleHelpOffsetY':VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0x9a)+'mptOffsetY']??-0x1949+-0x85f*0x1+0x21a8},Window_Help[_0x53493b(0xe8)+_0x53493b(0x165)]=Window_Help[_0x53493b(0x1c7)+_0x53493b(0xb6)][_0x53493b(0x122)+_0x53493b(0x198)],VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x218)+'p_isSuppor'+'tMessageKe'+_0x53493b(0xe2)]=Window_Help['prototype'][_0x53493b(0x103)+_0x53493b(0x232)+_0x53493b(0x23c)],Window_Help[_0x53493b(0x21a)][_0x53493b(0x103)+_0x53493b(0x232)+'ords']=function(){const _0x23a98b=_0x53493b;if(Window_Help[_0x23a98b(0x1c7)+_0x23a98b(0xb6)]['enabled'])return!![];return VisuMZ[_0x23a98b(0x191)+'words']['Window_Hel'+_0x23a98b(0x168)+_0x23a98b(0x1d5)+'ywords'][_0x23a98b(0xfb)](this);},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)]['Window_Hel'+_0x53493b(0x10d)]=Window_Help['prototype'][_0x53493b(0x25a)],Window_Help[_0x53493b(0x21a)][_0x53493b(0x25a)]=function(){const _0x1c5f6a=_0x53493b;VisuMZ[_0x1c5f6a(0x191)+_0x1c5f6a(0x26c)][_0x1c5f6a(0x218)+_0x1c5f6a(0x10d)][_0x1c5f6a(0xfb)](this),Window_Help[_0x1c5f6a(0x1c7)+'OLTIPS'][_0x1c5f6a(0x1e1)]&&this['refresh']();},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x218)+_0x53493b(0x10b)]=Window_Help[_0x53493b(0x21a)]['hide'],Window_Help[_0x53493b(0x21a)][_0x53493b(0x193)]=function(){const _0x5f4cd0=_0x53493b;VisuMZ['MessageKey'+_0x5f4cd0(0x26c)]['Window_Hel'+_0x5f4cd0(0x10b)]['call'](this);if(Window_Help['CASCADE_TO'+_0x5f4cd0(0xb6)][_0x5f4cd0(0x1e1)]&&this[_0x5f4cd0(0xf2)+'Window']()){const _0x3bd338=SceneManager['_scene'];_0x3bd338['clearMessa'+_0x5f4cd0(0x1a3)+_0x5f4cd0(0xa8)+_0x5f4cd0(0xc3)]();}},VisuMZ['MessageKey'+'words'][_0x53493b(0x218)+_0x53493b(0x261)]=Window_Help[_0x53493b(0x21a)][_0x53493b(0x272)],Window_Help['prototype'][_0x53493b(0x272)]=function(){const _0xe113fb=_0x53493b;VisuMZ['MessageKey'+'words'][_0xe113fb(0x218)+_0xe113fb(0x261)]['call'](this),this['updateMess'+_0xe113fb(0x164)+_0xe113fb(0xe6)+_0xe113fb(0x142)](),this[_0xe113fb(0x8b)+'ageKeyword'+_0xe113fb(0x146)+_0xe113fb(0x1d1)]();},Window_Help[_0x53493b(0x21a)][_0x53493b(0x8b)+'ageKeyword'+_0x53493b(0x146)+_0x53493b(0x1d1)]=function(){const _0x1cf79c=_0x53493b,_0x2bf4f8={'UiwBa':_0x1cf79c(0x123)};if(!this[_0x1cf79c(0x205)+_0x1cf79c(0x1d6)+_0x1cf79c(0x16c)+_0x1cf79c(0x268)+_0x1cf79c(0xf6)]())return;if(Input[_0x1cf79c(0xbf)+'d'](_0x2bf4f8[_0x1cf79c(0xb5)])){SoundManager[_0x1cf79c(0x26a)+'ll'](),Window_Help['CASCADE_SH'+'IFT_TOGGLE']=!Window_Help[_0x1cf79c(0xe8)+_0x1cf79c(0x165)];if(Window_Help[_0x1cf79c(0xe8)+_0x1cf79c(0x165)]){const _0x46707e=SceneManager[_0x1cf79c(0x21c)];if(_0x46707e){const _0x28379b=_0x46707e[_0x1cf79c(0x257)+_0x1cf79c(0x21d)+_0x1cf79c(0x1bd)];if(_0x28379b)_0x28379b['setKeyword'](null);}}else for(const _0x4a4dae of this[_0x1cf79c(0x257)+_0x1cf79c(0x19d)+_0x1cf79c(0x182)]['children']){_0x4a4dae[_0x1cf79c(0xf4)+'e']=undefined,_0x4a4dae[_0x1cf79c(0xb8)+'ch']();}}},Window_Help['prototype'][_0x53493b(0x205)+_0x53493b(0x1d6)+_0x53493b(0x16c)+_0x53493b(0x268)+_0x53493b(0xf6)]=function(){const _0x12d42a=_0x53493b,_0x229a0e={'tGcIC':function(_0x247cb1,_0xc48f98){return _0x247cb1!==_0xc48f98;},'eGTFE':function(_0x29e9bd,_0x25c687){return _0x29e9bd!==_0x25c687;},'HKWvm':'shift\x20togg'+'le','DXZac':function(_0x5d4f85,_0x434c28){return _0x5d4f85<=_0x434c28;},'gSelg':function(_0x4683ef,_0xf62fca){return _0x4683ef===_0xf62fca;}},_0x3ebbd4=Window_Help[_0x12d42a(0x1c7)+_0x12d42a(0xb6)];if(!_0x3ebbd4[_0x12d42a(0x1e1)])return![];if(_0x229a0e[_0x12d42a(0x144)](this,SceneManager['_scene'][_0x12d42a(0x186)+'w']))return![];if(_0x229a0e[_0x12d42a(0xc2)](_0x3ebbd4['activation'],_0x229a0e[_0x12d42a(0xce)]))return![];if(_0x229a0e[_0x12d42a(0x255)](this['_messageKe'+'ywordConta'+_0x12d42a(0x182)][_0x12d42a(0x25b)]['length'],-0x1a0b+-0x5cb+-0xa3*-0x32))return![];const _0x3dd01b=SceneManager[_0x12d42a(0x21c)];if(_0x229a0e[_0x12d42a(0x115)](_0x3dd01b[_0x12d42a(0x227)+'r'],Scene_Equip)){const _0x3c2c28=_0x3dd01b['_slotWindo'+'w'];if(_0x3c2c28&&_0x3c2c28['active'])return![];}return!![];},Window_Help[_0x53493b(0x21a)][_0x53493b(0xf2)+_0x53493b(0x259)]=function(){const _0x278bfe=_0x53493b,_0x31e77e={'zFPUM':function(_0x1d4840,_0x227a62){return _0x1d4840===_0x227a62;}};if(!SceneManager[_0x278bfe(0x21c)])return![];return _0x31e77e[_0x278bfe(0x183)](SceneManager[_0x278bfe(0x21c)][_0x278bfe(0x186)+'w'],this);},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)]['Window_Hel'+_0x53493b(0x1e5)+'ascade']=Window_Help[_0x53493b(0x21a)]['refresh'],Window_Help[_0x53493b(0x21a)][_0x53493b(0x199)]=function(){const _0x26a949=_0x53493b;if(this[_0x26a949(0xf2)+'Window']()){const _0x4d0db5=SceneManager[_0x26a949(0x21c)];_0x4d0db5['createMess'+_0x26a949(0x164)+_0x26a949(0x17e)+_0x26a949(0x247)]();}VisuMZ[_0x26a949(0x191)+_0x26a949(0x26c)]['Window_Hel'+_0x26a949(0x1e5)+'ascade'][_0x26a949(0xfb)](this),Window_Help['CASCADE_TO'+'OLTIPS']['enabled']&&this[_0x26a949(0xf2)+'Window']()&&this[_0x26a949(0xd7)+_0x26a949(0xe3)+_0x26a949(0x23f)+'ows']();},Window_Help[_0x53493b(0x21a)][_0x53493b(0xd7)+_0x53493b(0xe3)+_0x53493b(0x23f)+_0x53493b(0x210)]=function(){const _0xd5f7eb=_0x53493b;if(!this[_0xd5f7eb(0xf2)+_0xd5f7eb(0x259)]())return;const _0x54b14e=SceneManager[_0xd5f7eb(0x21c)];_0x54b14e[_0xd5f7eb(0x1d2)+'geKeywordH'+_0xd5f7eb(0xa8)+_0xd5f7eb(0xc3)](),this[_0xd5f7eb(0x158)+_0xd5f7eb(0x1ba)+_0xd5f7eb(0x149)+_0xd5f7eb(0x17a)](),_0x54b14e[_0xd5f7eb(0x217)+_0xd5f7eb(0x1a3)+_0xd5f7eb(0xa8)+'Windows']();},Window_Help[_0x53493b(0x21a)]['parseMessa'+_0x53493b(0x1ba)+'IntoCascad'+_0x53493b(0x17a)]=function(){const _0x550bda=_0x53493b,_0x5490a7={'Mrrzv':function(_0x11b58c,_0x3acafb){return _0x11b58c(_0x3acafb);},'ZyxqH':function(_0x106005,_0x4d7664){return _0x106005(_0x4d7664);}},_0x2a9b69=SceneManager[_0x550bda(0x21c)],_0x269d5e=/\(\((.*?)\)\)/gi,_0x3d3f91=this['_text'][_0x550bda(0x239)](_0x269d5e);if(_0x3d3f91)for(const _0x43e80a of _0x3d3f91){_0x43e80a['match'](_0x269d5e);const _0x42713d=_0x5490a7[_0x550bda(0xcd)](String,RegExp['$1']);let _0x28edbe=_0x42713d,_0x4eb55a='';_0x28edbe[_0x550bda(0x239)](/(.*)\:(.*)/i)&&(_0x4eb55a=_0x5490a7[_0x550bda(0x173)](String,RegExp['$2'])['trim'](),_0x28edbe=_0x5490a7['Mrrzv'](String,RegExp['$1'])[_0x550bda(0x15f)]()),VisuMZ[_0x550bda(0x191)+_0x550bda(0x26c)][_0x550bda(0x26b)][_0x28edbe[_0x550bda(0x1eb)+'e']()['trim']()]&&_0x2a9b69[_0x550bda(0x1a0)+_0x550bda(0x1a8)+'pCascadeWi'+_0x550bda(0x228)](_0x42713d,_0x28edbe,_0x4eb55a);}},Window_Help[_0x53493b(0x21a)][_0x53493b(0x8b)+'ageKeyword'+_0x53493b(0xe6)+'ggleNote']=function(){const _0x435d4f=_0x53493b;!this[_0x435d4f(0x257)+_0x435d4f(0x1e7)+_0x435d4f(0x23d)+'w']?this['createMess'+_0x435d4f(0x164)+'sCascadeTo'+_0x435d4f(0x142)]():(this[_0x435d4f(0x1ed)+_0x435d4f(0x16f)+_0x435d4f(0xfa)+_0x435d4f(0x167)](),this['updateMess'+_0x435d4f(0x164)+_0x435d4f(0xe6)+_0x435d4f(0x237)+_0x435d4f(0x125)]());},Window_Help[_0x53493b(0x21a)][_0x53493b(0x8e)+_0x53493b(0x232)+_0x53493b(0x1c5)+_0x53493b(0x1a1)+'e']=function(){const _0x16f119=_0x53493b,_0x356588={'qfHTG':function(_0x4f3a1b,_0x242caf){return _0x4f3a1b===_0x242caf;}};if(!Imported['VisuMZ_0_C'+_0x16f119(0x1db)])return![];if(this[_0x16f119(0x257)+_0x16f119(0x1e7)+_0x16f119(0x23d)+'w'])return![];const _0x418e5e=Window_Help[_0x16f119(0x1c7)+_0x16f119(0xb6)];if(!_0x418e5e[_0x16f119(0x1e1)])return![];const _0x2f6b5a=SceneManager[_0x16f119(0x21c)];if(!_0x2f6b5a)return![];const _0x2308cf=SceneManager[_0x16f119(0x21c)][_0x16f119(0x186)+'w'];if(!_0x2308cf)return![];return _0x356588['qfHTG'](this,_0x2308cf);},Window_Help['prototype'][_0x53493b(0x24d)+_0x53493b(0x164)+_0x53493b(0xe6)+'ggleNote']=function(){const _0x2ed6f8=_0x53493b,_0x43d301={'TRksA':function(_0x4ede4d,_0x34ac24){return _0x4ede4d-_0x34ac24;},'DJZhl':function(_0x4f5211,_0x5a3b87){return _0x4f5211*_0x5a3b87;},'vvlBM':function(_0x3646e5,_0x4cb6fb){return _0x3646e5-_0x4cb6fb;},'GEZjG':function(_0x76623f,_0x5319c9){return _0x76623f/_0x5319c9;},'sMclI':function(_0x594b5f,_0x5e9a32){return _0x594b5f/_0x5e9a32;},'tNtUZ':function(_0x569782,_0x3ca666){return _0x569782*_0x3ca666;}};if(!this['canCreateM'+_0x2ed6f8(0x232)+_0x2ed6f8(0x1c5)+'eToggleNot'+'e']())return;const _0x5d546a=Window_Help[_0x2ed6f8(0x1c7)+_0x2ed6f8(0xb6)],_0x1d807b=new Rectangle(-0xea6+-0x7f9*0x1+0x169f,-0x1ecf+-0xf*-0x11f+-0x6ff*-0x2,this[_0x2ed6f8(0x1ab)],this[_0x2ed6f8(0x108)]),_0x25ba70=new Window_Base(_0x1d807b);_0x25ba70[_0x2ed6f8(0x148)+_0x2ed6f8(0xc7)](0x1f5*-0x6+-0xff5+0x1bb5),_0x25ba70[_0x2ed6f8(0x157)]['x']=_0x25ba70['scale']['y']=_0x5d546a[_0x2ed6f8(0x1a9)+'Scale'],_0x25ba70['x']=_0x43d301[_0x2ed6f8(0x27b)](this[_0x2ed6f8(0x1ab)],_0x43d301[_0x2ed6f8(0x12b)](_0x25ba70[_0x2ed6f8(0x157)]['x'],this[_0x2ed6f8(0x1ab)])),_0x25ba70['x']+=_0x5d546a[_0x2ed6f8(0x1a9)+'OffsetX'],_0x25ba70['y']=_0x43d301['TRksA'](_0x43d301['vvlBM'](this[_0x2ed6f8(0x108)],this[_0x2ed6f8(0x24e)]()),_0x43d301[_0x2ed6f8(0x1fd)](this['itemPaddin'+'g'](),0x132c+-0x1ca0+-0x2*-0x4bb)),_0x25ba70['y']+=_0x5d546a[_0x2ed6f8(0x1a9)+'OffsetY'],Imported[_0x2ed6f8(0x18a)+_0x2ed6f8(0x22e)+_0x2ed6f8(0x223)]&&BattleManager['isUsingSid'+'eviewUiLay'+_0x2ed6f8(0xbc)]()&&(_0x25ba70['x']-=Window_SideviewUiBattleStatus[_0x2ed6f8(0x220)],_0x25ba70['x']-=Window_SideviewUiBattleStatus['WIDTH_MOVE'],_0x25ba70['x']-=this['itemPaddin'+'g'](),_0x25ba70['y']-=Math['ceil'](_0x43d301[_0x2ed6f8(0x211)](_0x43d301[_0x2ed6f8(0x106)](this[_0x2ed6f8(0x1e2)+'g'](),-0x1*-0x11e3+0x157b+-0x275b),-0x44*0x9+-0x1*0x82e+0xa96*0x1))),this[_0x2ed6f8(0x257)+_0x2ed6f8(0x1e7)+'eHelpWindo'+'w']=_0x25ba70,this[_0x2ed6f8(0xc9)](_0x25ba70),this['drawMessag'+'eKeywordsC'+'ascadeTogg'+_0x2ed6f8(0x167)](),this[_0x2ed6f8(0x8b)+_0x2ed6f8(0x164)+_0x2ed6f8(0xe6)+'ggleVisibi'+'lity']();},Window_Help[_0x53493b(0x21a)][_0x53493b(0x1ed)+_0x53493b(0x16f)+_0x53493b(0xfa)+_0x53493b(0x167)]=function(){const _0x5adab6=_0x53493b,_0x199591={'asBuq':function(_0x202f65,_0x5ec5ff){return _0x202f65===_0x5ec5ff;},'jWozE':_0x5adab6(0x123),'FrAhH':function(_0x312eab,_0x1bfeea){return _0x312eab-_0x1bfeea;}};if(_0x199591[_0x5adab6(0xf1)](this[_0x5adab6(0x109)+_0x5adab6(0x27c)],TextManager['getInputBu'+_0x5adab6(0x254)](_0x199591['jWozE'])))return;this[_0x5adab6(0x109)+_0x5adab6(0x27c)]=TextManager[_0x5adab6(0x246)+_0x5adab6(0x254)](_0x199591[_0x5adab6(0x1d4)]);const _0x133629=this[_0x5adab6(0x257)+'ywordToggl'+_0x5adab6(0x23d)+'w'],_0x434582=Window_Help['CASCADE_TO'+_0x5adab6(0xb6)],_0x566c92=_0x434582[_0x5adab6(0x1a9)+_0x5adab6(0x16a)],_0x28ffe2=_0x566c92[_0x5adab6(0x15b)](this[_0x5adab6(0x109)+'ggleKey']),_0xb6430f=this[_0x5adab6(0x137)](_0x28ffe2),_0x2cc87d=_0x199591[_0x5adab6(0x1b2)](_0x199591['FrAhH'](_0x133629['innerWidth'],_0xb6430f[_0x5adab6(0x1ab)]),this[_0x5adab6(0x1e2)+'g']());_0x133629[_0x5adab6(0xe0)][_0x5adab6(0x252)](),_0x133629[_0x5adab6(0x175)](_0x28ffe2,_0x2cc87d,-0x19c6+0xdb9+0xc0d);},Window_Help[_0x53493b(0x21a)][_0x53493b(0x8b)+_0x53493b(0x164)+_0x53493b(0xe6)+'ggleVisibi'+_0x53493b(0x125)]=function(){const _0x5a1b21=_0x53493b,_0x1768f3=this[_0x5a1b21(0x17d)+_0x5a1b21(0x19b)+_0x5a1b21(0x107)+_0x5a1b21(0x166)]();this['_messageKe'+_0x5a1b21(0x1e7)+_0x5a1b21(0x23d)+'w'][_0x5a1b21(0x110)]=_0x1768f3;},Window_Help['prototype'][_0x53493b(0x17d)+_0x53493b(0x19b)+_0x53493b(0x107)+_0x53493b(0x166)]=function(){const _0x213b0d=_0x53493b,_0x4514af={'WJuhu':function(_0x47e654,_0x445da2){return _0x47e654===_0x445da2;},'qnjGN':function(_0x4af4e9,_0x4c5806){return _0x4af4e9<=_0x4c5806;}},_0x2b89b0=SceneManager[_0x213b0d(0x21c)];if(_0x4514af['WJuhu'](_0x2b89b0[_0x213b0d(0x227)+'r'],Scene_Equip)){const _0x2431d8=_0x2b89b0['_slotWindo'+'w'];if(_0x2431d8&&_0x2431d8[_0x213b0d(0x23b)])return![];}if(_0x4514af['qnjGN'](this['_messageKe'+'ywordConta'+'iner'][_0x213b0d(0x25b)][_0x213b0d(0x17c)],-0xce3+0x1352+-0x66f))return![];return!![];},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x18f)+_0x53493b(0x248)+'ge']=Window_Message[_0x53493b(0x21a)][_0x53493b(0x1df)],Window_Message[_0x53493b(0x21a)][_0x53493b(0x1df)]=function(_0x1885b2){const _0x4e778c=_0x53493b;this['clearMessa'+'geKeywordS'+_0x4e778c(0x1c1)](),VisuMZ[_0x4e778c(0x191)+'words'][_0x4e778c(0x18f)+_0x4e778c(0x248)+'ge'][_0x4e778c(0xfb)](this,_0x1885b2);},VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x18f)+_0x53493b(0xad)+'nateMessag'+'e']=Window_Message[_0x53493b(0x21a)][_0x53493b(0x195)+_0x53493b(0x1d7)],Window_Message[_0x53493b(0x21a)][_0x53493b(0x195)+_0x53493b(0x1d7)]=function(){const _0x3848b6=_0x53493b;this['clearMessa'+_0x3848b6(0x12e)+_0x3848b6(0x1c1)](),VisuMZ[_0x3848b6(0x191)+'words'][_0x3848b6(0x18f)+_0x3848b6(0xad)+_0x3848b6(0x23e)+'e']['call'](this);};function Window_MessageKeywordTooltip(){const _0x42c699=_0x53493b;this[_0x42c699(0x12d)](...arguments);}Window_MessageKeywordTooltip[_0x53493b(0x21a)]=Object['create'](Window_Base[_0x53493b(0x21a)]),Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x227)+'r']=Window_MessageKeywordTooltip,Window_MessageKeywordTooltip[_0x53493b(0xb2)+'LE']=VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0xcc)],Window_MessageKeywordTooltip[_0x53493b(0x1ac)+_0x53493b(0xa2)]=VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)]['Tooltip'][_0x53493b(0x155)],Window_MessageKeywordTooltip['WINDOW_SKI'+_0x53493b(0x151)]=VisuMZ[_0x53493b(0x191)+_0x53493b(0x26c)][_0x53493b(0x1f8)][_0x53493b(0x18b)][_0x53493b(0xf0)+_0x53493b(0x1c4)],Window_MessageKeywordTooltip[_0x53493b(0x10f)+'ET_X']=VisuMZ[_0x53493b(0x191)+'words']['Settings']['Tooltip'][_0x53493b(0x22f)],Window_MessageKeywordTooltip['MOUSE_OFFS'+_0x53493b(0xac)]=VisuMZ['MessageKey'+_0x53493b(0x26c)][_0x53493b(0x1f8)]['Tooltip'][_0x53493b(0x11c)],Window_MessageKeywordTooltip[_0x53493b(0xb3)+_0x53493b(0x93)]=VisuMZ['MessageKey'+_0x53493b(0x26c)][_0x53493b(0x1f8)]['SupportedW'+_0x53493b(0xd6)],Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x12d)]=function(){const _0x7867c0=_0x53493b,_0x2c220b=new Rectangle(0x1*-0x3bb+0x2*-0x89f+-0x2ff*-0x7,-0xcbf+-0x3*-0xbc6+-0x1693,Graphics[_0x7867c0(0x1ab)],Graphics[_0x7867c0(0x108)]);Window_Base[_0x7867c0(0x21a)]['initialize'][_0x7867c0(0xfb)](this,_0x2c220b),this[_0x7867c0(0x157)]['x']=this[_0x7867c0(0x157)]['y']=Window_MessageKeywordTooltip['WINDOW_SCA'+'LE'],this['hide'](),this[_0x7867c0(0xca)]='';},Window_MessageKeywordTooltip['prototype']['loadWindow'+_0x53493b(0x1ae)]=function(){const _0x58a0f4=_0x53493b;this[_0x58a0f4(0x116)]=ImageManager[_0x58a0f4(0x9d)](Window_MessageKeywordTooltip['WINDOW_SKI'+_0x58a0f4(0xa2)]);},Window_MessageKeywordTooltip[_0x53493b(0x21a)]['updateBack'+'Opacity']=function(){const _0x2866b9=_0x53493b;this[_0x2866b9(0xe7)+'y']=Window_MessageKeywordTooltip['WINDOW_SKI'+_0x2866b9(0x151)];},Window_MessageKeywordTooltip['prototype']['setKeyword']=function(_0x437a92){const _0x16c396=_0x53493b,_0x15582a={'orAfG':function(_0x337c6a,_0x3ddc69){return _0x337c6a===_0x3ddc69;},'qBTXP':function(_0x2cb36d,_0x58ce89){return _0x2cb36d(_0x58ce89);},'MkYJS':function(_0x5d6502,_0x350363){return _0x5d6502!==_0x350363;},'IPMKO':function(_0x59fc12,_0x323ba5){return _0x59fc12||_0x323ba5;},'bsYjG':function(_0xf2c3ec,_0x4aaa72){return _0xf2c3ec>_0x4aaa72;}};if(_0x15582a['orAfG'](this[_0x16c396(0xca)],_0x437a92))return;let _0x44d4d1=_0x437a92;_0x437a92&&_0x437a92[_0x16c396(0x239)](/(.*)\:(.*)/i)?(this['_addWord']=_0x15582a[_0x16c396(0x1ee)](String,RegExp['$2']),_0x44d4d1=_0x15582a[_0x16c396(0x1ee)](String,RegExp['$1'])):this[_0x16c396(0xf9)]='';if(_0x15582a[_0x16c396(0x1ff)](_0x44d4d1,null)&&!VisuMZ['MessageKey'+_0x16c396(0x26c)]['Keywords'][_0x44d4d1[_0x16c396(0x1eb)+'e']()[_0x16c396(0x15f)]()])return;this[_0x16c396(0xca)]=_0x15582a[_0x16c396(0x238)](_0x437a92,'');if(_0x15582a['bsYjG'](this[_0x16c396(0xca)][_0x16c396(0x15f)]()[_0x16c396(0x17c)],0x1cf+0x1bf*0xe+-0x1a41))this['refresh']();else{if(this['contents'])this[_0x16c396(0xe0)]['clear']();this['hide']();}},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x179)+_0x53493b(0xfc)]=function(){const _0x5d0ef1=_0x53493b;return this[_0x5d0ef1(0xdb)];},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x199)]=function(){const _0x3bbea5=_0x53493b,_0x593214={'mMqsa':function(_0x276ad5,_0x331e58){return _0x276ad5>_0x331e58;}};this[_0x3bbea5(0xe0)][_0x3bbea5(0x252)](),this[_0x3bbea5(0xb7)]();if(_0x593214['mMqsa'](this[_0x3bbea5(0x1f4)]['length'],-0x1*0x2c7+-0xaa+0x371)){this[_0x3bbea5(0x20c)+'ow']();const _0x218808=this[_0x3bbea5(0xa9)+'ct']();this['drawTextEx'](this[_0x3bbea5(0x1f4)],_0x218808['x'],_0x218808['y'],_0x218808[_0x3bbea5(0x1ab)]),this[_0x3bbea5(0x25a)]();}else this['contents']['clear'](),this['hide']();},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x1dd)+'sageKeywor'+'ds']=function(_0x69339f){return _0x69339f;},Window_MessageKeywordTooltip[_0x53493b(0x21a)]['isSupportM'+_0x53493b(0x232)+_0x53493b(0x23c)]=function(){return![];},Window_MessageKeywordTooltip['prototype']['setupText']=function(){const _0x53fb95=_0x53493b;this[_0x53fb95(0x1f4)]='';if(!this[_0x53fb95(0xca)])return;this[_0x53fb95(0x18c)+'rdText'](),this['_text']=this[_0x53fb95(0x1f4)][_0x53fb95(0x15f)]();},Window_MessageKeywordTooltip['prototype'][_0x53493b(0x18c)+'rdText']=function(){const _0x381209=_0x53493b,_0x35e669={'WvKHz':function(_0x5aedeb,_0x478171){return _0x5aedeb(_0x478171);}};let _0x5b1f6c=this[_0x381209(0xca)];_0x5b1f6c['match'](/(.*)\:(.*)/i)&&(_0x5b1f6c=_0x35e669[_0x381209(0xda)](String,RegExp['$1'])[_0x381209(0x15f)]());const _0x28029c=VisuMZ[_0x381209(0x191)+'words'][_0x381209(0x26b)][_0x5b1f6c['toUpperCas'+'e']()[_0x381209(0x15f)]()]||'';this['_text']=_0x28029c[_0x381209(0x18b)][_0x381209(0x15b)](this['_addWord']||'');},Window_MessageKeywordTooltip[_0x53493b(0x21a)]['resizeWind'+'ow']=function(){const _0x589f05=_0x53493b,_0x3aefe8={'iLTWs':function(_0x4bf8ee,_0x3af426){return _0x4bf8ee+_0x3af426;},'dObVJ':function(_0x5ee7ef,_0x3066f1){return _0x5ee7ef*_0x3066f1;},'DidGZ':function(_0x346be7,_0x3487b5){return _0x346be7+_0x3487b5;},'OSyXq':function(_0x4839a0,_0x11653f){return _0x4839a0*_0x11653f;}},_0x3f6232=this[_0x589f05(0x137)](this[_0x589f05(0x1f4)]);this[_0x589f05(0x1ab)]=_0x3aefe8[_0x589f05(0x1f7)](_0x3f6232['width'],_0x3aefe8[_0x589f05(0xd0)](_0x3aefe8[_0x589f05(0xc0)](this['itemPaddin'+'g'](),this[_0x589f05(0x1bf)]),-0xcc6+0x16f3+0xa2b*-0x1)),this[_0x589f05(0x108)]=_0x3aefe8[_0x589f05(0x1f7)](_0x3f6232[_0x589f05(0x108)],_0x3aefe8[_0x589f05(0xea)](this['padding'],0x487*-0x1+0x14cb+0x821*-0x2)),this[_0x589f05(0x96)+'ents'](),this[_0x589f05(0x1d3)+_0x589f05(0x1e3)]();},Window_MessageKeywordTooltip[_0x53493b(0x21a)]['update']=function(){const _0x2fc6c2=_0x53493b,_0x202e0b={'LtjFz':_0x2fc6c2(0x27f)},_0x41dc4d=_0x202e0b[_0x2fc6c2(0xef)][_0x2fc6c2(0x1f0)]('|');let _0x41218c=-0x2152+0xf0d+-0x3*-0x617;while(!![]){switch(_0x41dc4d[_0x41218c++]){case'0':this['_requestRe'+'fresh']&&(this['_requestRe'+'fresh']=![],this[_0x2fc6c2(0x199)]());continue;case'1':Window_Base[_0x2fc6c2(0x21a)][_0x2fc6c2(0x272)][_0x2fc6c2(0xfb)](this);continue;case'2':this[_0x2fc6c2(0x1c0)+'adeMotion']();continue;case'3':this[_0x2fc6c2(0x1b0)+_0x2fc6c2(0x1c4)]();continue;case'4':this[_0x2fc6c2(0x21f)+_0x2fc6c2(0x1af)]();continue;}break;}},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x11d)+_0x53493b(0x27a)]=function(){this['_requestRe'+'fresh']=!![];},Window_MessageKeywordTooltip[_0x53493b(0x21a)]['updatePosi'+'tion']=function(){const _0x107621=_0x53493b,_0x4af00a={'gbjwW':_0x107621(0x15a),'wcBHb':function(_0x545864,_0x44f4f5){return _0x545864+_0x44f4f5;}},_0x4e9573=_0x4af00a['gbjwW'][_0x107621(0x1f0)]('|');let _0x3bba51=0x1*0x2432+0xc*-0xa4+-0x1c82*0x1;while(!![]){switch(_0x4e9573[_0x3bba51++]){case'0':if(this[_0x107621(0x1f3)+'de'])return;continue;case'1':this[_0x107621(0xf7)+'ion']();continue;case'2':this['x']=_0x4af00a[_0x107621(0x161)](TouchInput['x'],Window_MessageKeywordTooltip[_0x107621(0x10f)+_0x107621(0x11a)]);continue;case'3':this['y']=_0x4af00a['wcBHb'](TouchInput['y'],Window_MessageKeywordTooltip[_0x107621(0x10f)+_0x107621(0xac)]);continue;case'4':if(!this[_0x107621(0x110)])return;continue;}break;}},Window_MessageKeywordTooltip[_0x53493b(0x21a)]['clampPosit'+_0x53493b(0x21e)]=function(){const _0x34d398=_0x53493b,_0x2780c3={'ATWgb':function(_0x1e37f0,_0x4528d8){return _0x1e37f0*_0x4528d8;},'UrYyn':function(_0x3a39a7,_0x50a78f){return _0x3a39a7*_0x50a78f;},'cJtVd':function(_0x156450,_0x1b8d6d){return _0x156450-_0x1b8d6d;}},_0x3e3751=_0x2780c3[_0x34d398(0x24b)](this['width'],Window_MessageKeywordTooltip[_0x34d398(0xb2)+'LE']||0x1748+-0x2e*0xb6+0x12*0x86+0.01),_0xae366a=_0x2780c3['UrYyn'](this[_0x34d398(0x108)],Window_MessageKeywordTooltip[_0x34d398(0xb2)+'LE']||0xe19*-0x2+-0x9c+0x1cce+0.01);this['x']=Math[_0x34d398(0x1f5)](this['x'][_0x34d398(0x264)](0x1320+-0x2*0x110b+0x5*0x2fe,_0x2780c3['cJtVd'](Graphics[_0x34d398(0x1ab)],_0x3e3751))),this['y']=Math[_0x34d398(0x1f5)](this['y'][_0x34d398(0x264)](0x134*0xb+0x24f7*0x1+0x3233*-0x1,_0x2780c3[_0x34d398(0xba)](Graphics['height'],_0xae366a)));},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x1b0)+'ity']=function(){const _0x398c7a=_0x53493b,_0x1a1809={'yvVaC':function(_0x702d2d,_0x1ce1bc){return _0x702d2d+_0x1ce1bc;},'EUlKt':function(_0x1a2540,_0x4a99de){return _0x1a2540<=_0x4a99de;},'NtDJP':function(_0xb743dd,_0x507163){return _0xb743dd>=_0x507163;},'GKgkY':function(_0x18d097,_0x165de5){return _0x18d097<=_0x165de5;}};let _0x1883de=0x36b+-0x1d12+-0x471*-0x6;if(this[_0x398c7a(0x1f3)+'de']){if(this[_0x398c7a(0x169)+_0x398c7a(0x276)+_0x398c7a(0x20f)]())_0x1883de=-0x11f9*0x1+0x5*-0x3e9+0x207*0x13;else{_0x1883de=-0x2*-0xc2d+0x4e7*-0x2+-0xe8c;const _0x5af595=Window_Help[_0x398c7a(0x1c7)+_0x398c7a(0xb6)];this['x']=_0x1a1809[_0x398c7a(0x104)](this[_0x398c7a(0x1d0)],_0x5af595[_0x398c7a(0x91)+'tX'])??0x656+0x1931*-0x1+0x12db,this['y']=_0x1a1809[_0x398c7a(0x104)](this['_baseY'],_0x5af595[_0x398c7a(0x91)+'tY'])??0x1936+0x81d*0x3+0x5*-0x9e9,this[_0x398c7a(0x233)+'ration']=_0x5af595[_0x398c7a(0x11f)+'on']??-0xc1d+0x1e61+-0x1238;}}else{if(_0x1a1809[_0x398c7a(0xd3)](TouchInput['x'],-0x260a+-0x24da*0x1+0x12b9*0x4))_0x1883de=-0x23a5+-0x6fd*-0x2+0x15ab;if(_0x1a1809['NtDJP'](TouchInput['x'],Graphics[_0x398c7a(0x1ab)]))_0x1883de=0x147d+-0x17d8+0x35b*0x1;if(_0x1a1809[_0x398c7a(0x19e)](TouchInput['y'],0x1086+0x2326+-0xceb*0x4))_0x1883de=-0x2156+0x1*0xc56+-0x8*-0x2a0;if(_0x1a1809[_0x398c7a(0x8f)](TouchInput['y'],Graphics[_0x398c7a(0x108)]))_0x1883de=0x394*-0x7+0x2*-0xb62+0x2fd0;}this[_0x398c7a(0xa4)]=this[_0x398c7a(0x240)+_0x398c7a(0x229)]=_0x1883de;},Window_MessageKeywordTooltip['prototype'][_0x53493b(0x169)+'odeOpacity'+_0x53493b(0x20f)]=function(){const _0xcdb2d7=_0x53493b,_0x35f04a={'iPzFE':function(_0x4133b4,_0xdeb8aa){return _0x4133b4===_0xdeb8aa;},'FfTim':function(_0x1b6604,_0x2e334b){return _0x1b6604===_0x2e334b;},'uDxmK':'always'},_0x1bafa9=SceneManager['_scene'];if(_0x1bafa9&&_0x35f04a['iPzFE'](_0x1bafa9[_0xcdb2d7(0x227)+'r'],Scene_Equip)){const _0x584c7f=_0x1bafa9[_0xcdb2d7(0x10a)+'w'];if(_0x584c7f&&_0x584c7f[_0xcdb2d7(0x23b)])return![];}const _0x4e05d3=Window_Help[_0xcdb2d7(0x1c7)+_0xcdb2d7(0xb6)];if(_0x35f04a[_0xcdb2d7(0x101)](_0x4e05d3[_0xcdb2d7(0x15d)],_0x35f04a[_0xcdb2d7(0x225)]))return!![];return Window_Help[_0xcdb2d7(0xe8)+_0xcdb2d7(0x165)];},Window_MessageKeywordTooltip['prototype']['setupCasca'+_0x53493b(0x244)]=function(_0x29964e,_0x5e1d11){const _0x39a318=_0x53493b,_0x7337d3={'OcytJ':_0x39a318(0x11b),'zZbnw':function(_0x3bcbe3,_0x12fd53){return _0x3bcbe3||_0x12fd53;},'TarPI':function(_0x24cd08,_0x191bcf){return _0x24cd08>_0x191bcf;},'AXVsK':_0x39a318(0xd4)},_0x228778=_0x7337d3['OcytJ']['split']('|');let _0x4165bb=0x106f*-0x2+-0x1ebf+0x3f9d;while(!![]){switch(_0x228778[_0x4165bb++]){case'0':this[_0x39a318(0x22d)](_0x29964e);continue;case'1':this['show']();continue;case'2':_0x5e1d11=_0x7337d3[_0x39a318(0x99)](_0x5e1d11,'');continue;case'3':this[_0x39a318(0x1f3)+'de']=!![];continue;case'4':if(_0x7337d3[_0x39a318(0x1dc)](_0x5e1d11[_0x39a318(0x17c)],-0x1*-0x92b+0x1417+-0x46*0x6b))_0x29964e=_0x7337d3[_0x39a318(0xe4)]['format'](_0x29964e,_0x5e1d11);continue;}break;}},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0xcb)+_0x53493b(0x1cb)]=function(){const _0x139012=_0x53493b,_0x4dce1b={'RSpEB':function(_0x54dcf5,_0x3dbea3){return _0x54dcf5+_0x3dbea3;},'lIewy':function(_0x255194,_0x1502b8){return _0x255194+_0x1502b8;}},_0x53e2ef=Window_Help[_0x139012(0x1c7)+'OLTIPS'];this[_0x139012(0x13a)+'rgetX']=this[_0x139012(0x1d0)],this[_0x139012(0x13a)+'rgetY']=this[_0x139012(0x224)],this['x']=_0x4dce1b[_0x139012(0x13c)](this['_baseX'],_0x53e2ef[_0x139012(0x91)+'tX'])??0x1*0xe35+-0x258d+0x1758,this['y']=_0x4dce1b[_0x139012(0x1f2)](this[_0x139012(0x224)],_0x53e2ef['startOffse'+'tY'])??-0x92f*-0x2+-0x2f*-0xac+-0x31f2,this['_cascadeDu'+_0x139012(0xe5)]=Window_Help[_0x139012(0x1c7)+'OLTIPS']['moveDurati'+'on']??0x107*0x22+0x12d9+-0x15*0x28f;},Window_MessageKeywordTooltip[_0x53493b(0x21a)][_0x53493b(0x1c0)+_0x53493b(0x270)]=function(){const _0x1a774c=_0x53493b,_0x5e4c6e={'cGOwa':function(_0xd84021,_0x1ebe40){return _0xd84021<=_0x1ebe40;},'tmvnO':function(_0x4cf15a,_0x45008a){return _0x4cf15a<=_0x45008a;},'SlXkl':function(_0x4c5bcc,_0x2aebf7){return _0x4c5bcc/_0x2aebf7;},'QdFFs':function(_0x5689e1,_0x5bde50){return _0x5689e1+_0x5bde50;},'kLaCG':function(_0x2cb89e,_0x585ccf){return _0x2cb89e*_0x585ccf;},'ezkZR':function(_0x5f42bb,_0x406daf){return _0x5f42bb-_0x406daf;},'CmaRj':function(_0x187df3,_0x595440){return _0x187df3+_0x595440;},'SzFvg':function(_0x549de1,_0x3f7f05){return _0x549de1-_0x3f7f05;},'XBEbf':function(_0x29d75b,_0x45f862){return _0x29d75b<=_0x45f862;}};if(!this[_0x1a774c(0x1f3)+'de'])return;if(!this[_0x1a774c(0x233)+_0x1a774c(0xe5)])return;if(_0x5e4c6e[_0x1a774c(0x118)](this[_0x1a774c(0x233)+_0x1a774c(0xe5)],-0xe5c+-0x1a4a+0x2*0x1453))return;if(_0x5e4c6e[_0x1a774c(0x14c)](this['contentsOp'+_0x1a774c(0x229)],0x1*-0x19ce+-0x1fea+0x39b8))return;const _0xeb8bb1=this[_0x1a774c(0x233)+'ration'];this['x']=_0x5e4c6e['SlXkl'](_0x5e4c6e[_0x1a774c(0xe9)](_0x5e4c6e[_0x1a774c(0x1b9)](this['x'],_0x5e4c6e[_0x1a774c(0x13b)](_0xeb8bb1,0x1*0x151a+-0x156e+0x55)),this[_0x1a774c(0x13a)+'rgetX']),_0xeb8bb1),this['y']=_0x5e4c6e[_0x1a774c(0x200)](_0x5e4c6e[_0x1a774c(0xa0)](_0x5e4c6e[_0x1a774c(0x1b9)](this['y'],_0x5e4c6e[_0x1a774c(0x251)](_0xeb8bb1,-0x5*-0x305+0x1ffa+-0x2f12)),this[_0x1a774c(0x13a)+_0x1a774c(0x26d)]),_0xeb8bb1),this[_0x1a774c(0x233)+_0x1a774c(0xe5)]--,_0x5e4c6e['XBEbf'](this['_cascadeDu'+_0x1a774c(0xe5)],0x3de*0x2+-0x1a62+0x12a6)&&(this['x']=this['_cascadeTa'+_0x1a774c(0x256)],this['y']=this[_0x1a774c(0x13a)+'rgetY']);};