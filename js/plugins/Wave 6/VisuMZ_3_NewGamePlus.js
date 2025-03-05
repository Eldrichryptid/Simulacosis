//=============================================================================
// VisuStella MZ - New Game +
// VisuMZ_3_NewGamePlus.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_NewGamePlus = true;

var VisuMZ = VisuMZ || {};
VisuMZ.NewGamePlus = VisuMZ.NewGamePlus || {};
VisuMZ.NewGamePlus.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.05] [NewGamePlus]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/New_Game_Plus_VisuStella_MZ
 * @base VisuMZ_1_SaveCore
 * @orderAfter VisuMZ_1_SaveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * New Game+ is a great way to provide replay value for your game. It lets the
 * player re-experience the game in a different way with either carried over
 * items, to carried over party members, to carried over skills, switches, and
 * variables even. There exists many options to change how New Game+ will work
 * for your game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Select which switches, variables, actor data, party data, and system data
 *   is carried over into a New Game+.
 * * Use notetags to prevent specific items, weapons, armors, or actors from
 *   carrying over their data.
 * * Two different ways of starting a New Game+.
 * * One way is by saving a New Game+ save file and loading upon it.
 * * The second way is by immediately using the current game's save data and
 *   starting a New Game+ with it.
 * * Run a dedicated Common Event after a New Game+ has started.
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
 * * VisuMZ_1_SaveCore
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
 * So how do you start a New Game+? There are two ways to do it:
 * 
 * ---
 * 
 * Method 1: Save File with New Game+
 * 
 * Use the Plugin Command from this plugin for "Save: New Game+" from the map
 * scene. The save menu will open and prompt the player where to make a save
 * file for the New Game+ file to be at.
 * 
 * When the player loads up that file, a new game will start instead with all
 * of the carry over effects listed in the Plugin Parameters.
 * 
 * ---
 * 
 * Method 2: Transition into New Game+
 * 
 * Use the Plugin Command from this plugin for "Transition: New Game+" from the
 * map scene. The game will immediately fade out and start a new game with all
 * of the carry over effects listed in the Plugin Parameters.
 * 
 * This is useful for the games who have decided to make one save file games.
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
 * VisuMZ_2_ClassChangeSystem
 *
 * VisuMZ_2_SkillLearnSystem
 *
 * This plugin allows the functionality of carrying over AP, CP, JP, SP if you
 * so wish. You can change the settings in this plugin's Plugin Parameters.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === New Game+-Related Notetags ===
 * 
 * ---
 *
 * <No New Game+ Carry Over>
 *
 * - Used for: Actor, Item, Weapon, Armor Notetags
 * - This will prevent the item, weapon, or armor from being carried over to
 *   New Game+. If this is used on an actor, the actor will be in its default
 *   state as if a new game started.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Save Plugin Commands ===
 * 
 * ---
 *
 * Save: New Game+
 * - Opens up the Save menu for the player to save a New Game+ file.
 * - Only works from map scene.
 *
 * ---
 * 
 * === Transition Plugin Commands ===
 * 
 * ---
 *
 * Transition: New Game+
 * - Transitions the current game directly into a New Game+.
 * - Only works from map scene.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Actor Data Settings
 * ============================================================================
 *
 * This contains actor data that will be carried over when starting a
 * New Game+.
 *
 * ---
 *
 * General
 * 
 *   Copy Actor?:
 *   - Carry over all of each actor's settings when starting a New Game+?
 * 
 *   EXP:
 *   - Carry over each actor's EXP data when starting a New Game+?
 * 
 *   Skills:
 *   - Carry over each actor's skills data when starting a New Game+?
 *
 * ---
 *
 * Compatibility
 * 
 *   Ability Points:
 *   - Carry over each actor's AP when starting a New Game+?
 *   - Requires VisuMZ_2_SkillLearnSystem
 * 
 *   Class Points:
 *   - Carry over each actor's CP when starting a New Game+?
 *   - Requires VisuMZ_2_ClassChangeSystem
 * 
 *   Job Points:
 *   - Carry over each actor's JP when starting a New Game+?
 *   - Requires VisuMZ_2_ClassChangeSystem
 * 
 *   Skill Points:
 *   - Carry over each actor's SP when starting a New Game+?
 *   - Requires VisuMZ_2_SkillLearnSystem
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Party Data Settings
 * ============================================================================
 *
 * This contains party data that will be carried over when starting a
 * New Game+.
 *
 * ---
 *
 * Settings
 * 
 *   Gold:
 *   - Carry over gold data when starting a New Game+?
 * 
 *   Items:
 *   - Carry over item data when starting a New Game+?
 * 
 *   Weapons:
 *   - Carry over weapon data when starting a New Game+?
 * 
 *   Armors:
 *   - Carry over armor data when starting a New Game+?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: System Data Settings
 * ============================================================================
 *
 * This contains system data that will be carried over when starting a
 * New Game+.
 *
 * ---
 *
 * Settings
 * 
 *   Playtime:
 *   - Carry over playtime data when starting a New Game+?
 * 
 *   Save Count:
 *   - Carry over save count data when starting a New Game+?
 * 
 *   Step Count:
 *   - Carry over step count data when starting a New Game+?
 * 
 *   Battle Count:
 *   - Carry over battle count data when starting a New Game+?
 * 
 *   Victory Count:
 *   - Carry over victory count data when starting a New Game+?
 * 
 *   Escape Count:
 *   - Carry over escape count data when starting a New Game+?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Carry Over Switches and Variables
 * ============================================================================
 *
 * When starting a New Game+, usually all of the data found in Switches and
 * Variables will be cleared out to an OFF flag and 0 value respectively. These
 * settings allow you to set exceptions for certain Switches and Variables to
 * retain their data when going into a New Game+.
 *
 * ---
 *
 * Settings
 * 
 *   Switches:
 *   - A list of switches to be carried over when starting a New Game+.
 * 
 *   Variables:
 *   - A list of variables to be carried over when starting a New Game+.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Scene_Save Settings
 * ============================================================================
 *
 * The settings for the Save Menu for New Game+ related entities.
 *
 * ---
 *
 * Settings
 * 
 *   Title Format:
 *   - Title format for a New Game+ file.
 *   - %1 - Save File ID
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Save New Game+ Help:
 *   - Text to display in the help file when saving for a New Game+ target.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: New Game+ Common Event Settings
 * ============================================================================
 *
 * When a New Game+ occurs, you can set the game to run a Common Event once
 * loaded into the map.
 *
 * ---
 *
 * Settings
 * 
 *   Common Event:
 *   - Select a Common Event to run after starting a New Game+.
 *   - Use 0 for no Common Event.
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where New Game+ data did not carry over if the starting party
 *    did not have any actors in it. Fix made by Irina.
 * 
 * Version 1.04: May 29, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.03: April 2, 2021
 * * Bug Fixes!
 * ** Carrying over variables for a New Game+ should no longer cause crashes
 *    during the transition phase. Fix made by Arisu.
 * 
 * Version 1.02: February 12, 2021
 * * Bug Fixes!
 * ** Carry-Over Variables Plugin Parameter should now display Variables
 *    instead of Switches. Fix made by Irina.
 * ** Save files will no longer corrupt when carrying over uninitialized
 *    actors. Fix made by Irina.
 * 
 * Version 1.01: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 *
 * Version 1.00: January 20, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SaveNewGamePlus
 * @text Save: New Game+
 * @desc Opens up the Save menu for the player to save a New Game+ file.
 * Only works from map scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TransitionNewGamePlus
 * @text Transition: New Game+
 * @desc Transitions the current game directly into a New Game+.
 * Only works from map scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param NewGamePlus
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param CarryOver
 * @text Carry Over
 *
 * @param Actor:struct
 * @text Actor Data
 * @parent CarryOver
 * @type struct<Actor>
 * @desc This contains actor data that will be carried over when starting a New Game+.
 * @default {"General":"","CopyActor:eval":"true","EXP:eval":"true","Skills:eval":"true","Compatibility":"","AbilityPoints:eval":"true","ClassPoints:eval":"true","JobPoints:eval":"true","SkillPoints:eval":"true"}
 *
 * @param Party:struct
 * @text Party Data
 * @parent CarryOver
 * @type struct<Party>
 * @desc This contains party data that will be carried over when starting a New Game+.
 * @default {"Gold:eval":"true","Items:eval":"true","Weapons:eval":"true","Armors:eval":"true"}
 *
 * @param System:struct
 * @text System Data
 * @parent CarryOver
 * @type struct<System>
 * @desc This contains system data that will be carried over when starting a New Game+.
 * @default {"Playtime:eval":"true","SaveCount:eval":"true","StepCount:eval":"true","BattleCount:eval":"true","VictoryCount:eval":"true","EscapeCount:eval":"true"}
 * 
 * @param Switches:arraynum
 * @text Switches
 * @parent CarryOver
 * @type switch[]
 * @desc A list of switches to be carried over when starting a New Game+.
 * @default []
 * 
 * @param Variables:arraynum
 * @text Variables
 * @parent CarryOver
 * @type variable[]
 * @desc A list of variables to be carried over when starting a New Game+.
 * @default []
 *
 * @param SceneSave:struct
 * @text Scene_Save
 * @type struct<SceneSave>
 * @desc The settings for the Save Menu for New Game+ related entities.
 * @default {"TitleFmt:str":"File %1: NEW GAME+","TextColor:str":"6","SaveNewGamePlusHelp:str":"Which file would you like to save New Game+ to?"}
 * 
 * @param CommonEvent:num
 * @text New Game+ Common Event
 * @type common_event
 * @desc Select a Common Event to run after starting a New Game+.
 * Use 0 for no Common Event.
 * @default 0
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
 * Actor Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Actor:
 *
 * @param General
 *
 * @param CopyActor:eval
 * @text Copy Actor?
 * @parent General
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over all of each actor's settings when starting a New Game+?
 * @default true
 *
 * @param EXP:eval
 * @text EXP
 * @parent General
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's EXP data when starting a New Game+?
 * @default true
 *
 * @param Skills:eval
 * @text Skills
 * @parent General
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's skills data when starting a New Game+?
 * @default true
 * 
 * @param Compatibility
 *
 * @param AbilityPoints:eval
 * @text Ability Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's AP when starting a New Game+?
 * Requires VisuMZ_2_SkillLearnSystem
 * @default true
 *
 * @param ClassPoints:eval
 * @text Class Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's CP when starting a New Game+?
 * Requires VisuMZ_2_ClassChangeSystem
 * @default true
 *
 * @param JobPoints:eval
 * @text Job Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's JP when starting a New Game+?
 * Requires VisuMZ_2_ClassChangeSystem
 * @default true
 *
 * @param SkillPoints:eval
 * @text Skill Points
 * @parent Compatibility
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over each actor's SP when starting a New Game+?
 * Requires VisuMZ_2_SkillLearnSystem
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Party Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Party:
 *
 * @param Gold:eval
 * @text Gold
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over gold data when starting a New Game+?
 * @default true
 *
 * @param Items:eval
 * @text Items
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over item data when starting a New Game+?
 * @default true
 *
 * @param Weapons:eval
 * @text Weapons
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over weapon data when starting a New Game+?
 * @default true
 *
 * @param Armors:eval
 * @text Armors
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over armor data when starting a New Game+?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * System Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~System:
 *
 * @param Playtime:eval
 * @text Playtime
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over playtime data when starting a New Game+?
 * @default true
 *
 * @param SaveCount:eval
 * @text Save Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over save count data when starting a New Game+?
 * @default true
 *
 * @param StepCount:eval
 * @text Step Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over step count data when starting a New Game+?
 * @default true
 *
 * @param BattleCount:eval
 * @text Battle Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over battle count data when starting a New Game+?
 * @default true
 *
 * @param VictoryCount:eval
 * @text Victory Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over victory count data when starting a New Game+?
 * @default true
 *
 * @param EscapeCount:eval
 * @text Escape Count
 * @type boolean
 * @on Carry Over
 * @off Ignore
 * @desc Carry over escape count data when starting a New Game+?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * SceneSave Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SceneSave:
 *
 * @param TitleFmt:str
 * @text Title Format
 * @parent NewGamePlus
 * @desc Title format for a New Game+ file.
 * %1 - Save File ID
 * @default File %1: NEW GAME+
 * 
 * @param TextColor:str
 * @text Text Color
 * @parent NewGamePlus
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param SaveNewGamePlusHelp:str
 * @text Save New Game+ Help
 * @parent NewGamePlus
 * @desc Text to display in the help file when saving for a New Game+ target.
 * @default Which file would you like to save New Game+ to?
 *
 */
//=============================================================================

const _0x4b9dc5=_0x17d1;(function(_0x3ddece,_0x2d19ef){const _0x43bc54=_0x17d1,_0x33461a=_0x3ddece();while(!![]){try{const _0x27c053=parseInt(_0x43bc54(0x7e))/0x1*(-parseInt(_0x43bc54(0x8f))/0x2)+-parseInt(_0x43bc54(0x82))/0x3*(parseInt(_0x43bc54(0x9a))/0x4)+-parseInt(_0x43bc54(0x11e))/0x5+-parseInt(_0x43bc54(0xab))/0x6*(parseInt(_0x43bc54(0x10d))/0x7)+-parseInt(_0x43bc54(0x111))/0x8+-parseInt(_0x43bc54(0xee))/0x9+parseInt(_0x43bc54(0xaa))/0xa;if(_0x27c053===_0x2d19ef)break;else _0x33461a['push'](_0x33461a['shift']());}catch(_0x2c4dec){_0x33461a['push'](_0x33461a['shift']());}}}(_0xa5e4,0x1a432));function _0xa5e4(){const _0x127bd4=['Items','_scene','initClassPoints','#%1','carryOverNewGamePlusSwitches','849708nmAhzY','_weapons','_framesOnSave','BattleCount','initSkills','_battleCount','helpWindowText','helpNewGamePlus','currentExp','drawTitle','SceneSave','numItems','canNewGamePlusCarryOver','length','makeDeepCopy','initEquips','currentLevelExp','parameters','start','EVAL','Settings','_steps','ARRAYFUNC','description','initExp','TransitionNewGamePlus','name','actor','prepareNewGamePlusData','_items','drawText','14VvHwPg','return\x200','push','newGamePlusTitle','404856FWQQnP','_gold','_data','levelUp','VisuMZ_1_SaveCore','ARRAYNUM','goto','exit','ARRAYSTRUCT','ARRAYJSON','makeSavefileInfo','_listWindow','fileNewGamePlus','1014345VDaTTr','isMaxLevel','isSceneMap','reserveCommonEvent','startNewGamePlus','copyNewGamePlusActorData','VisuMZ_2_ClassChangeSystem','carryOverNewGamePlusPartyData','13pUtiEZ','gold','_skills','_saveCount','6KKPpoS','fadeOutAll','Scene_Load_onLoadSuccess','isSceneNewGamePlus','_exp','NewGamePlus','initialize','Switches','gainStartingAbilityPoints','note','TextColor','setNewGamePlusLoops','refresh','26236HdTNKl','items','_newGamePlusLoops','playLoad','trim','TitleFmt','recoverAll','registerCommand','classId','escapecount','max','367664NUPnvx','SaveNewGamePlus','_classId','constructor','_ngpData','STR','_armors','newGamePlusRefresh','removeNewGamePlusNoCarryOverItems','gainStartingSkillPoints','SkillPoints','setNewGamePlusLoaded','itemRectWithPadding','playtime','CopyActor','isNewGamePlus','9377000cTPGaE','383628tnKcFO','create','Party','initNewGamePlusSettings','ConvertParams','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','JSON','gainStartingClassPoints','Scene_Map_needsSlowFadeOut','carryOverNewGamePlusVariables','Gold','savefileInfo','ClassPoints','StepCount','getColor','loops','includes','width','steps','newGamePlus','map','Game_System_initialize','actors','_jobPoints','_classPoints','changeTextColor','FUNC','_newGamePlusLoaded','initAbilityPoints','runNewGamePlusCommonEvent','match','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','DataManager_makeSavefileInfo','needsSlowFadeOut','drawNewGamePlusMarker','parse','carryOverNewGamePlusData','_winCount','call','_abilityPoints','SaveNewGamePlusHelp','format','switches','Weapons','saveCount','_skillPoints','newGamePlusAdjustLevel','levelDown','isNextScene','Window_SavefileList_drawTitle','getNewGamePlusLoops','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isNewGamePlusEnabled','carryOverNewGamePlusSystemData','nextLevelExp','prototype','Skills','setValue','textColor','onLoadSuccess','ARRAYSTR','_escapeCount'];_0xa5e4=function(){return _0x127bd4;};return _0xa5e4();}var label=_0x4b9dc5(0x87),tier=tier||0x0,dependencies=[_0x4b9dc5(0x115)],pluginData=$plugins['filter'](function(_0xb8422e){const _0x25c046=_0x4b9dc5;return _0xb8422e['status']&&_0xb8422e[_0x25c046(0x105)][_0x25c046(0xbb)]('['+label+']');})[0x0];function _0x17d1(_0x37bb2e,_0x37ee56){const _0xa5e42a=_0xa5e4();return _0x17d1=function(_0x17d1c9,_0x422ab1){_0x17d1c9=_0x17d1c9-0x7b;let _0x539bf1=_0xa5e42a[_0x17d1c9];return _0x539bf1;},_0x17d1(_0x37bb2e,_0x37ee56);}VisuMZ[label][_0x4b9dc5(0x102)]=VisuMZ[label][_0x4b9dc5(0x102)]||{},VisuMZ[_0x4b9dc5(0xaf)]=function(_0x10928e,_0x3477e9){const _0x47fbd7=_0x4b9dc5;for(const _0x4badf0 in _0x3477e9){if(_0x4badf0['match'](/(.*):(.*)/i)){const _0x36e0a7=String(RegExp['$1']),_0x3a809f=String(RegExp['$2'])['toUpperCase']()[_0x47fbd7(0x93)]();let _0x3220ff,_0x26ab8c,_0x2802bb;switch(_0x3a809f){case'NUM':_0x3220ff=_0x3477e9[_0x4badf0]!==''?Number(_0x3477e9[_0x4badf0]):0x0;break;case _0x47fbd7(0x116):_0x26ab8c=_0x3477e9[_0x4badf0]!==''?JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0]):[],_0x3220ff=_0x26ab8c[_0x47fbd7(0xbf)](_0x158fc0=>Number(_0x158fc0));break;case _0x47fbd7(0x101):_0x3220ff=_0x3477e9[_0x4badf0]!==''?eval(_0x3477e9[_0x4badf0]):null;break;case'ARRAYEVAL':_0x26ab8c=_0x3477e9[_0x4badf0]!==''?JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0]):[],_0x3220ff=_0x26ab8c[_0x47fbd7(0xbf)](_0x18a21c=>eval(_0x18a21c));break;case _0x47fbd7(0xb1):_0x3220ff=_0x3477e9[_0x4badf0]!==''?JSON['parse'](_0x3477e9[_0x4badf0]):'';break;case _0x47fbd7(0x11a):_0x26ab8c=_0x3477e9[_0x4badf0]!==''?JSON['parse'](_0x3477e9[_0x4badf0]):[],_0x3220ff=_0x26ab8c['map'](_0x13940d=>JSON[_0x47fbd7(0xce)](_0x13940d));break;case _0x47fbd7(0xc5):_0x3220ff=_0x3477e9[_0x4badf0]!==''?new Function(JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0])):new Function(_0x47fbd7(0x10e));break;case _0x47fbd7(0x104):_0x26ab8c=_0x3477e9[_0x4badf0]!==''?JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0]):[],_0x3220ff=_0x26ab8c[_0x47fbd7(0xbf)](_0x16fb96=>new Function(JSON[_0x47fbd7(0xce)](_0x16fb96)));break;case _0x47fbd7(0x9f):_0x3220ff=_0x3477e9[_0x4badf0]!==''?String(_0x3477e9[_0x4badf0]):'';break;case _0x47fbd7(0xe7):_0x26ab8c=_0x3477e9[_0x4badf0]!==''?JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0]):[],_0x3220ff=_0x26ab8c[_0x47fbd7(0xbf)](_0x4b4dfd=>String(_0x4b4dfd));break;case'STRUCT':_0x2802bb=_0x3477e9[_0x4badf0]!==''?JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0]):{},_0x3220ff=VisuMZ[_0x47fbd7(0xaf)]({},_0x2802bb);break;case _0x47fbd7(0x119):_0x26ab8c=_0x3477e9[_0x4badf0]!==''?JSON[_0x47fbd7(0xce)](_0x3477e9[_0x4badf0]):[],_0x3220ff=_0x26ab8c[_0x47fbd7(0xbf)](_0x339dbe=>VisuMZ[_0x47fbd7(0xaf)]({},JSON[_0x47fbd7(0xce)](_0x339dbe)));break;default:continue;}_0x10928e[_0x36e0a7]=_0x3220ff;}}return _0x10928e;},(_0x25ccb7=>{const _0x1a4fe9=_0x4b9dc5,_0x8c0558=_0x25ccb7[_0x1a4fe9(0x108)];for(const _0x3537d6 of dependencies){if(!Imported[_0x3537d6]){alert(_0x1a4fe9(0xde)[_0x1a4fe9(0xd4)](_0x8c0558,_0x3537d6)),SceneManager[_0x1a4fe9(0x118)]();break;}}const _0x23aa72=_0x25ccb7[_0x1a4fe9(0x105)];if(_0x23aa72[_0x1a4fe9(0xc9)](/\[Version[ ](.*?)\]/i)){const _0x4327ea=Number(RegExp['$1']);_0x4327ea!==VisuMZ[label]['version']&&(alert(_0x1a4fe9(0xb0)[_0x1a4fe9(0xd4)](_0x8c0558,_0x4327ea)),SceneManager[_0x1a4fe9(0x118)]());}if(_0x23aa72[_0x1a4fe9(0xc9)](/\[Tier[ ](\d+)\]/i)){const _0x2874bb=Number(RegExp['$1']);_0x2874bb<tier?(alert(_0x1a4fe9(0xca)[_0x1a4fe9(0xd4)](_0x8c0558,_0x2874bb,tier)),SceneManager[_0x1a4fe9(0x118)]()):tier=Math[_0x1a4fe9(0x99)](_0x2874bb,tier);}VisuMZ[_0x1a4fe9(0xaf)](VisuMZ[label][_0x1a4fe9(0x102)],_0x25ccb7[_0x1a4fe9(0xff)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x4b9dc5(0x108)],_0x4b9dc5(0x9b),_0x507acc=>{const _0x1c1244=_0x4b9dc5;if(!SceneManager[_0x1c1244(0x120)]())return;SceneManager[_0x1c1244(0x10f)](Scene_SaveNewGamePlus);}),PluginManager[_0x4b9dc5(0x96)](pluginData['name'],_0x4b9dc5(0x107),_0x4cb57b=>{if(!SceneManager['isSceneMap']())return;SceneManager['push'](Scene_NewGamePlusTransition);}),DataManager['canNewGamePlusCarryOver']=function(_0x3d4e50){const _0x4c1a99=_0x4b9dc5;if(!_0x3d4e50)return![];if(_0x3d4e50[_0x4c1a99(0x8b)][_0x4c1a99(0xc9)](/<NO NEW GAME\+ CARRY OVER>/i))return![];return!![];},VisuMZ['NewGamePlus'][_0x4b9dc5(0xcb)]=DataManager[_0x4b9dc5(0x11b)],DataManager['makeSavefileInfo']=function(){const _0xb77546=_0x4b9dc5;var _0x54fcc4=VisuMZ[_0xb77546(0x87)][_0xb77546(0xcb)][_0xb77546(0xd1)](this);return _0x54fcc4['newGamePlus']=$gameSystem[_0xb77546(0xdf)](),_0x54fcc4;},DataManager[_0x4b9dc5(0x122)]=function(){const _0x2de162=_0x4b9dc5;this[_0x2de162(0x10a)](),this['setupNewGame'](),this['carryOverNewGamePlusData'](),this[_0x2de162(0xc8)]();},DataManager[_0x4b9dc5(0x10a)]=function(){const _0x449a4f=_0x4b9dc5;var _0x200b67=$gameActors[_0x449a4f(0x113)][_0x449a4f(0xfb)];for(var _0x41e47f=0x0;_0x41e47f<_0x200b67;++_0x41e47f){var _0x28bf16=$gameActors[_0x449a4f(0x113)][_0x41e47f];if(_0x28bf16)_0x28bf16['clearEquipments']();}this['_ngpData']={'switches':JsonEx['makeDeepCopy']($gameSwitches[_0x449a4f(0x113)]),'variables':JsonEx[_0x449a4f(0xfc)]($gameVariables[_0x449a4f(0x113)]),'loops':$gameSystem[_0x449a4f(0xdd)](),'playtime':$gameSystem[_0x449a4f(0xf0)],'savecount':$gameSystem[_0x449a4f(0xd7)](),'stepcount':$gameParty[_0x449a4f(0xbd)](),'battlecount':$gameSystem[_0x449a4f(0xf3)],'victorycount':$gameSystem[_0x449a4f(0xd0)],'escapecount':$gameSystem[_0x449a4f(0xe8)],'actors':JsonEx[_0x449a4f(0xfc)]($gameActors[_0x449a4f(0x113)]),'gold':$gameParty[_0x449a4f(0x112)],'items':JsonEx[_0x449a4f(0xfc)]($gameParty[_0x449a4f(0x10b)]),'weapons':JsonEx[_0x449a4f(0xfc)]($gameParty[_0x449a4f(0xef)]),'armors':JsonEx['makeDeepCopy']($gameParty['_armors'])};},DataManager[_0x4b9dc5(0xcf)]=function(){const _0x30fe85=_0x4b9dc5;this[_0x30fe85(0xed)](),this[_0x30fe85(0xb4)](),this[_0x30fe85(0xe0)](),this['carryOverNewGamePlusActors'](),this[_0x30fe85(0x7d)]();},DataManager['carryOverNewGamePlusSwitches']=function(){const _0x3fa27c=_0x4b9dc5;for(const _0x18decf of VisuMZ[_0x3fa27c(0x87)]['Settings'][_0x3fa27c(0x89)]){if(_0x18decf<=0x0)continue;$gameSwitches[_0x3fa27c(0xe4)](_0x18decf,this['_ngpData'][_0x3fa27c(0xd5)][_0x18decf]);}},DataManager[_0x4b9dc5(0xb4)]=function(){const _0x3a080c=_0x4b9dc5;for(const _0x564f39 of VisuMZ['NewGamePlus'][_0x3a080c(0x102)]['Variables']){if(_0x564f39<=0x0)continue;$gameVariables[_0x3a080c(0xe4)](_0x564f39,this[_0x3a080c(0x9e)]['variables'][_0x564f39]);}},DataManager[_0x4b9dc5(0xe0)]=function(){const _0x163b2e=_0x4b9dc5,_0x424317=VisuMZ[_0x163b2e(0x87)][_0x163b2e(0x102)]['System'];$gameSystem[_0x163b2e(0x8d)](this[_0x163b2e(0x9e)][_0x163b2e(0xba)]+0x1),$gameSystem[_0x163b2e(0xa5)](!![]),_0x424317['Playtime']&&($gameSystem[_0x163b2e(0xf0)]=this[_0x163b2e(0x9e)][_0x163b2e(0xa7)],Graphics['frameCount']=this[_0x163b2e(0x9e)][_0x163b2e(0xa7)]),_0x424317['SaveCount']&&($gameSystem[_0x163b2e(0x81)]=this[_0x163b2e(0x9e)]['savecount']),_0x424317[_0x163b2e(0xb8)]&&($gameParty[_0x163b2e(0x103)]=this[_0x163b2e(0x9e)]['stepcount']),_0x424317[_0x163b2e(0xf1)]&&($gameSystem['_battleCount']=this[_0x163b2e(0x9e)]['battlecount']),_0x424317['VictoryCount']&&($gameSystem['_winCount']=this[_0x163b2e(0x9e)]['victorycount']),_0x424317['EscapeCount']&&($gameSystem['_escapeCount']=this[_0x163b2e(0x9e)][_0x163b2e(0x98)]);},DataManager['carryOverNewGamePlusActors']=function(){const _0x32b4bc=_0x4b9dc5;var _0x42a442=this[_0x32b4bc(0x9e)][_0x32b4bc(0xc1)][_0x32b4bc(0xfb)];for(var _0x31a5ba=0x0;_0x31a5ba<_0x42a442;++_0x31a5ba){var _0x679217=$gameActors['actor'](_0x31a5ba);_0x679217&&(_0x679217=this['copyNewGamePlusActorData'](_0x679217,_0x31a5ba),_0x679217[_0x32b4bc(0xa1)]());}},DataManager[_0x4b9dc5(0x7b)]=function(_0x532148,_0x2e4069){const _0x3172c3=_0x4b9dc5;if(!DataManager[_0x3172c3(0xfa)](_0x532148[_0x3172c3(0x109)]()))return _0x532148;if(!this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069])return _0x532148;const _0x293291=VisuMZ[_0x3172c3(0x87)][_0x3172c3(0x102)]['Actor'];return _0x293291[_0x3172c3(0xa8)]&&this['_ngpData']['actors'][_0x2e4069]&&($gameActors[_0x3172c3(0x113)][_0x2e4069]=JsonEx[_0x3172c3(0xfc)](this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069]),_0x532148=$gameActors['_data'][_0x2e4069]),_0x293291['EXP']&&this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0x86)]?(_0x532148[_0x3172c3(0x86)]=JsonEx[_0x3172c3(0xfc)](this['_ngpData'][_0x3172c3(0xc1)][_0x2e4069]['_exp']),_0x532148[_0x3172c3(0xd9)]()):(_0x532148['_level']=_0x532148[_0x3172c3(0x109)]()['initialLevel'],_0x532148[_0x3172c3(0x86)]={},_0x532148[_0x3172c3(0x106)]()),_0x293291[_0x3172c3(0xe3)]&&this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0x80)]?_0x532148['_skills']=JsonEx[_0x3172c3(0xfc)](this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0x80)]):_0x532148[_0x3172c3(0xf2)](),Imported['VisuMZ_2_SkillLearnSystem']&&(_0x293291['AbilityPoints']&&this['_ngpData']['actors'][_0x2e4069][_0x3172c3(0xd2)]?_0x532148[_0x3172c3(0xd2)]=JsonEx[_0x3172c3(0xfc)](this[_0x3172c3(0x9e)]['actors'][_0x2e4069][_0x3172c3(0xd2)]):(_0x532148[_0x3172c3(0xc7)](),_0x532148[_0x3172c3(0x8a)]()),_0x293291[_0x3172c3(0xa4)]&&this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0xd8)]?_0x532148[_0x3172c3(0xd8)]=JsonEx['makeDeepCopy'](this['_ngpData'][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0xd8)]):(_0x532148['initSkillPoints'](),_0x532148[_0x3172c3(0xa3)]())),Imported[_0x3172c3(0x7c)]&&(_0x293291[_0x3172c3(0xb7)]&&this[_0x3172c3(0x9e)]['actors'][_0x2e4069][_0x3172c3(0xc3)]?_0x532148[_0x3172c3(0xc3)]=JsonEx[_0x3172c3(0xfc)](this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069]['_classPoints']):(_0x532148[_0x3172c3(0xeb)](),_0x532148[_0x3172c3(0xb2)]()),_0x293291['JobPoints']&&this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0xc2)]?_0x532148[_0x3172c3(0xc2)]=JsonEx[_0x3172c3(0xfc)](this[_0x3172c3(0x9e)][_0x3172c3(0xc1)][_0x2e4069][_0x3172c3(0xc2)]):(_0x532148['initJobPoints'](),_0x532148['gainStartingJobPoints']())),_0x532148;},DataManager[_0x4b9dc5(0x7d)]=function(){const _0x46e5ab=_0x4b9dc5,_0xb440b0=VisuMZ[_0x46e5ab(0x87)][_0x46e5ab(0x102)][_0x46e5ab(0xad)];_0xb440b0[_0x46e5ab(0xb5)]&&($gameParty[_0x46e5ab(0x112)]=this[_0x46e5ab(0x9e)][_0x46e5ab(0x7f)]),_0xb440b0[_0x46e5ab(0xe9)]&&($gameParty[_0x46e5ab(0x10b)]=this[_0x46e5ab(0x9e)][_0x46e5ab(0x90)]),_0xb440b0[_0x46e5ab(0xd6)]&&($gameParty[_0x46e5ab(0xef)]=this[_0x46e5ab(0x9e)]['weapons']),_0xb440b0['Armors']&&($gameParty[_0x46e5ab(0xa0)]=this[_0x46e5ab(0x9e)]['armors']),$gameParty['removeNewGamePlusNoCarryOverItems']();},DataManager[_0x4b9dc5(0xc8)]=function(){const _0x46cadc=_0x4b9dc5,_0x140dfa=VisuMZ[_0x46cadc(0x87)][_0x46cadc(0x102)],_0x27ccff=_0x140dfa['CommonEvent'];if(_0x27ccff<=0x0)return;$gameTemp[_0x46cadc(0x121)](_0x27ccff);},TextManager[_0x4b9dc5(0x11d)]=VisuMZ[_0x4b9dc5(0x87)][_0x4b9dc5(0x102)][_0x4b9dc5(0xf8)][_0x4b9dc5(0x94)],TextManager[_0x4b9dc5(0xf5)]=VisuMZ['NewGamePlus'][_0x4b9dc5(0x102)][_0x4b9dc5(0xf8)][_0x4b9dc5(0xd3)],ColorManager[_0x4b9dc5(0xb9)]=function(_0x510552){const _0x14ced4=_0x4b9dc5;return _0x510552=String(_0x510552),_0x510552[_0x14ced4(0xc9)](/#(.*)/i)?_0x14ced4(0xec)['format'](String(RegExp['$1'])):this[_0x14ced4(0xe5)](Number(_0x510552));},ColorManager[_0x4b9dc5(0x110)]=function(){const _0x346db7=_0x4b9dc5;return ColorManager[_0x346db7(0xb9)](VisuMZ['NewGamePlus'][_0x346db7(0x102)]['SceneSave'][_0x346db7(0x8c)]);},SceneManager[_0x4b9dc5(0x120)]=function(){const _0x1ab81b=_0x4b9dc5;return this['_scene']&&this[_0x1ab81b(0xea)][_0x1ab81b(0x9d)]===Scene_Map;},SceneManager['isSceneNewGamePlus']=function(){const _0xe7571a=_0x4b9dc5;return this[_0xe7571a(0xea)]&&this['_scene'][_0xe7571a(0x9d)]===Scene_SaveNewGamePlus;},VisuMZ[_0x4b9dc5(0x87)]['Game_System_initialize']=Game_System[_0x4b9dc5(0xe2)]['initialize'],Game_System[_0x4b9dc5(0xe2)][_0x4b9dc5(0x88)]=function(){const _0x5df3a5=_0x4b9dc5;VisuMZ[_0x5df3a5(0x87)][_0x5df3a5(0xc0)][_0x5df3a5(0xd1)](this),this['initNewGamePlusSettings']();},Game_System[_0x4b9dc5(0xe2)][_0x4b9dc5(0xae)]=function(){this['_newGamePlusEnabled']=![],this['_newGamePlusLoops']=0x0,this['_newGamePlusLoaded']=![];},Game_System['prototype'][_0x4b9dc5(0xdf)]=function(){const _0x34f7c8=_0x4b9dc5;return SceneManager[_0x34f7c8(0x85)]();},Game_System[_0x4b9dc5(0xe2)][_0x4b9dc5(0xdd)]=function(){const _0x548148=_0x4b9dc5;if(this[_0x548148(0x91)]===undefined)this[_0x548148(0xae)]();return this[_0x548148(0x91)];},Game_System['prototype'][_0x4b9dc5(0x8d)]=function(_0x591b5f){const _0x1c311b=_0x4b9dc5;if(this[_0x1c311b(0x91)]===undefined)this[_0x1c311b(0xae)]();this[_0x1c311b(0x91)]=_0x591b5f;},Game_System[_0x4b9dc5(0xe2)]['isNewGamePlusLoaded']=function(){const _0x1a0dd6=_0x4b9dc5;if(this['_newGamePlusLoaded']===undefined)this[_0x1a0dd6(0xae)]();return this[_0x1a0dd6(0xc6)];},Game_System[_0x4b9dc5(0xe2)][_0x4b9dc5(0xa5)]=function(_0x2bd99b){const _0x327fc9=_0x4b9dc5;if(this[_0x327fc9(0xc6)]===undefined)this[_0x327fc9(0xae)]();this['_newGamePlusLoaded']=_0x2bd99b;},Game_Actor[_0x4b9dc5(0xe2)][_0x4b9dc5(0xd9)]=function(){const _0x32e5bc=_0x4b9dc5;while(!this[_0x32e5bc(0x11f)]()&&this[_0x32e5bc(0xf6)]()>=this[_0x32e5bc(0xe1)]()){this[_0x32e5bc(0x114)]();}while(this[_0x32e5bc(0xf6)]()<this[_0x32e5bc(0xfe)]()){this[_0x32e5bc(0xda)]();}},Game_Actor[_0x4b9dc5(0xe2)][_0x4b9dc5(0xa1)]=function(){const _0x3b8395=_0x4b9dc5,_0xa331f9=this[_0x3b8395(0x109)]();this[_0x3b8395(0x9c)]=_0xa331f9[_0x3b8395(0x97)],this[_0x3b8395(0xfd)](_0xa331f9['equips']),this[_0x3b8395(0x8e)](),this[_0x3b8395(0x95)]();},Game_Party[_0x4b9dc5(0xe2)][_0x4b9dc5(0xa2)]=function(){const _0x2b0dfb=_0x4b9dc5;var _0x1acad3=$gameParty['allItems'](),_0x1f1f3a=_0x1acad3[_0x2b0dfb(0xfb)];for(var _0x26506c=0x0;_0x26506c<_0x1f1f3a;++_0x26506c){var _0x4548b2=_0x1acad3[_0x26506c];if(!_0x4548b2)continue;if(DataManager[_0x2b0dfb(0xfa)](_0x4548b2))continue;var _0xb047a8=$gameParty[_0x2b0dfb(0xf9)](_0x4548b2);$gameParty['loseItem'](_0x4548b2,_0xb047a8);}},VisuMZ[_0x4b9dc5(0x87)][_0x4b9dc5(0xb3)]=Scene_Map[_0x4b9dc5(0xe2)]['needsSlowFadeOut'],Scene_Map[_0x4b9dc5(0xe2)][_0x4b9dc5(0xcc)]=function(){const _0x283963=_0x4b9dc5;if(SceneManager[_0x283963(0xdb)](Scene_NewGamePlusTransition))return!![];return VisuMZ['NewGamePlus'][_0x283963(0xb3)][_0x283963(0xd1)](this);},VisuMZ[_0x4b9dc5(0x87)]['Scene_Load_onLoadSuccess']=Scene_Load[_0x4b9dc5(0xe2)]['onLoadSuccess'],Scene_Load[_0x4b9dc5(0xe2)][_0x4b9dc5(0xe6)]=function(){const _0x43f250=_0x4b9dc5;this[_0x43f250(0x11c)]&&this[_0x43f250(0x11c)][_0x43f250(0xa9)](this[_0x43f250(0x11c)]['savefileId']())?this[_0x43f250(0x122)]():VisuMZ[_0x43f250(0x87)][_0x43f250(0x84)][_0x43f250(0xd1)](this);},Scene_Load['prototype'][_0x4b9dc5(0x122)]=function(){const _0x30088e=_0x4b9dc5;SoundManager[_0x30088e(0x92)](),DataManager[_0x30088e(0x122)](),this[_0x30088e(0x83)](),SceneManager[_0x30088e(0x117)](Scene_Map);};function Scene_SaveNewGamePlus(){const _0x33281c=_0x4b9dc5;this[_0x33281c(0x88)](...arguments);}Scene_SaveNewGamePlus[_0x4b9dc5(0xe2)]=Object['create'](Scene_Save[_0x4b9dc5(0xe2)]),Scene_SaveNewGamePlus['prototype'][_0x4b9dc5(0x9d)]=Scene_SaveNewGamePlus,Scene_SaveNewGamePlus['prototype'][_0x4b9dc5(0xf4)]=function(){return TextManager['helpNewGamePlus'];};function Scene_NewGamePlusTransition(){this['initialize'](...arguments);}Scene_NewGamePlusTransition['prototype']=Object[_0x4b9dc5(0xac)](Scene_Base[_0x4b9dc5(0xe2)]),Scene_NewGamePlusTransition[_0x4b9dc5(0xe2)][_0x4b9dc5(0x9d)]=Scene_NewGamePlusTransition,Scene_NewGamePlusTransition[_0x4b9dc5(0xe2)][_0x4b9dc5(0x88)]=function(){const _0x30e994=_0x4b9dc5;Scene_Base[_0x30e994(0xe2)][_0x30e994(0x88)][_0x30e994(0xd1)](this);},Scene_NewGamePlusTransition[_0x4b9dc5(0xe2)][_0x4b9dc5(0x100)]=function(){const _0x295100=_0x4b9dc5;DataManager[_0x295100(0x122)](),SceneManager[_0x295100(0x117)](Scene_Map);},Window_SavefileList[_0x4b9dc5(0xe2)][_0x4b9dc5(0xa9)]=function(_0x131277){const _0x21d926=_0x4b9dc5;if(_0x131277===0x0)return![];const _0x589d93=DataManager[_0x21d926(0xb6)](_0x131277);return _0x589d93&&_0x589d93[_0x21d926(0xbe)];},VisuMZ[_0x4b9dc5(0x87)][_0x4b9dc5(0xdc)]=Window_SavefileList[_0x4b9dc5(0xe2)][_0x4b9dc5(0xf7)],Window_SavefileList['prototype'][_0x4b9dc5(0xf7)]=function(_0x196162,_0x4768a9,_0x2ed298){const _0x3c12a2=_0x4b9dc5;this[_0x3c12a2(0xa9)](_0x196162)?this[_0x3c12a2(0xcd)](_0x196162,_0x4768a9,_0x2ed298):VisuMZ['NewGamePlus'][_0x3c12a2(0xdc)]['call'](this,_0x196162,_0x4768a9,_0x2ed298);},Window_SavefileList[_0x4b9dc5(0xe2)][_0x4b9dc5(0xcd)]=function(_0x4b843a,_0x592a94,_0x62bb0b){const _0x2eca40=_0x4b9dc5;if(_0x4b843a===0x0)return;const _0x512724=this[_0x2eca40(0xa6)](_0x4b843a),_0x3638ee=TextManager[_0x2eca40(0x11d)]['format'](_0x4b843a);this[_0x2eca40(0xc4)](ColorManager[_0x2eca40(0x110)]()),this[_0x2eca40(0x10c)](_0x3638ee,_0x592a94,_0x62bb0b,Math[_0x2eca40(0x99)](0xb4,_0x512724[_0x2eca40(0xbc)]-0xb4));};