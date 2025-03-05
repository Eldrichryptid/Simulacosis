//=============================================================================
// VisuStella MZ - Battle System - FTB - Free Turn Battle
// VisuMZ_2_BattleSystemFTB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemFTB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemFTB = VisuMZ.BattleSystemFTB || {};
VisuMZ.BattleSystemFTB.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.13] [BattleSystemFTB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_FTB_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_ItemsEquipsCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Free Turn Battle (FTB) is a type of battle system made for RPG Maker MZ,
 * where the teams for actors and enemies take turns attacking one another as
 * a whole. During each team's turns, an action count is given to them and they
 * can freely perform actions among their teammates as wanted (or if turned off
 * by the Plugin Parameters, in a cycle). When the action count is depleted or
 * if one team ran out of battler's that can act, the other team begins their
 * turn and so forth.
 * 
 * *NOTE* To use this battle system, you will need the updated version of
 * VisuStella's Core Engine. Go into its Plugin Parameters and change the
 * "Battle System" plugin parameter to "ftb".
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actor and enemy teams take turns attacking each other as a whole.
 * * Action counts are given to each team at the start of each turn to utilize
 *   actions for.
 * * If enabled, actors can be freely switched around to perform actions with.
 * * Alter the mechanics of the Battle System FTB to your liking through the
 *   Plugin Parameters.
 * * An Action Count Display is shown for each side to relay information to the
 *   player about the current state of each turn.
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
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_ItemsEquipsCore
 * * VisuMZ_1_SkillsStatesCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Surprise Attacks and Preemptive Bonuses
 * 
 * Due to the nature of a team-based battle system, surprise attacks and
 * preemptive bonuses no longer prevent the other team from being able to act
 * for a turn as that gives the initiating team too much advantage. Instead,
 * a surprise attack means the enemy team will always start first for each turn
 * while a preemptive bonus means the actor team will always start first for
 * each turn.
 * 
 * ---
 * 
 * Agility and Speed
 * 
 * When there is no surprise attack or preemptive bonus, aka a neutral battle
 * initiative, then the team that goes first is determined by their Agility
 * value at the start of battle (unless determined otherwise through the Plugin
 * Parameters).
 * 
 * However, because of the nature of team-based battle systems, agility and
 * speed have no impact on action speeds as action speeds are now instantly
 * performed.
 * 
 * Agility, however, can influence Action Counts through buffs and debuffs if
 * enabled through the Plugin Parameters. Each stack of Agility buffs will
 * raise the Action Count for a team while each stack of Agility debuffs will
 * decrease them for subsequent turns.
 * 
 * ---
 * 
 * Action Count
 * 
 * Each team will have an allotted number of actions available for usage. This
 * amount is determined by the number of alive members they have available by
 * default multiplied by their action count base.
 * 
 * The amount of actions that can be performed at base value can be determined
 * inside the Plugin Parameters > Mechanics Settings > Base.
 * 
 * The action count can be altered by AGI buffs and/or debuffs depending on the
 * Plugin Parameter settings.
 * 
 * Further action counts can be altered by various notetag effects tied to the
 * trait objects of each battle member.
 * 
 * ---
 * 
 * Action Orders
 * 
 * As team-based battle systems always have teams go between each other, the
 * standard action orders seen for turn-based and tick-based battle systems no
 * longer exist. However, in the event the actor team has berserk, confused, or
 * autobattlers, the actions will be performed in the following order:
 * 
 * 1. Berserk, confused, and auto battlers go first.
 * 2. If any actions are left, inputtable actors go next.
 * 3. If any actions are left, but there are no inputtable actors, berserk,
 *    confused, and auto battlers use up the remaining actions.
 * 4. Switch to the next team.
 * 
 * For enemy teams, enemies will always go in order from left-to-right for the
 * front view or right-to-left for sideview. If there are actions left, the
 * enemy team will cycle back to the first acting enemy.
 * 
 * ---
 * 
 * Free Range Switching
 * 
 * If this is enabled (it's an optional feature) and it's the player's turn,
 * the player can freely switch between actors in his/her party by pressing the
 * left/right buttons or the page up/page down buttons. The Actor Command
 * Window will automatically update to the newly selected actor. This gives the
 * player complete control and freedom over the party and the party's actions.
 * 
 * For touch controls, instead of pressing left/right or page up/page down on
 * the keyboard, click on the Battle Status Window for the target actor to be
 * selected to perform an action. The Actor Command Window will automatically
 * update to the newly selected actor.
 * 
 * ---
 *
 * Turn Structure
 * 
 * Each battle turn is dedicated to one team or the other. You need to design
 * your turns with this in mind. When one team finishes its actions, the next
 * turn will have the other team perform theirs.
 * 
 * As a result, both teams will not benefit from their turn end activities such
 * as regeneration at the end of each battle turn. Instead, they will only
 * occur at the end of their own respective turns.
 * 
 * However, for states and buffs, this is slightly different. States and buffs
 * update at the end of the opposing team's turn. This is so that 1 turn states
 * like Guard will last until the opponent's turn is over instead of being over
 * immediately after the player's turn ends (rendering the effect useless).
 * 
 * The state and buff turn updates can be disabled in the Plugin Parameters.
 * However, the durations must be accounted for if disabled (ie. making Guard
 * last two turns instead of 1).
 * 
 * ---
 * 
 * Turn Count for Enemies
 * 
 * Because the turn structure is changed, enemies will now have a different
 * turn count structure. Their turn count only raises when the enemy troops
 * have a turn instead of every battle turn. This means if an enemy skill page
 * has a Turn Count condition of 3, it'll mean when the enemy team has gotten
 * 3 turns, which will usually be around turn 6 for the whole battle.
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
 * === General FTB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 * 
 * ---
 * 
 * <FTB Help>
 *  description
 *  description
 * </FTB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under FTB.
 * - This is primarily used if the skill behaves differently in FTB versus any
 *   other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to FTB.
 *
 * ---
 * 
 * === Action Cost-Related Notetags ===
 * 
 * ---
 *
 * <FTB Action Cost: x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the FTB action cost of this skill/item to 'x'.
 * - Replace 'x' with a number value representing the action cost required to
 *   perform the skill.
 *
 * ---
 *
 * <FTB Hide Action Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the FTB action cost for this skill/item hidden regardless of Plugin
 *   Parameter settings.
 *
 * ---
 *
 * <FTB Show Action Cost>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the FTB action cost for this skill/item visible regardless of Plugin
 *   Parameter settings.
 *
 * ---
 * 
 * === Mechanics-Related Notetags ===
 * 
 * ---
 *
 * <FTB Pass Turn>
 *
 * - Used for: Skill, Item Notetags
 * - If a battler uses this skill/item, then even if there are actions left for
 *   the team to perform, that battler would no longer be able to input as they
 *   have already passed their turn.
 * - By default, this applies to "Guard". If you don't want it to apply to the
 *   Guard skill, turn it off in the Plugin Parameters for mechanics.
 *
 * ---
 *
 * <FTB Actions: +x>
 * <FTB Actions: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Battlers associated with these trait objects can increase or decrease the
 *   maximum number of actions performed each turn.
 * - Replace 'x' with a number representing the increase or decrease in action
 *   count per turn.
 * - Depending on the Plugin Parameters, altering the max value can result in
 *   gaining or losing remaining actions for the current turn.
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
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: FTB Action Count Visibility
 * - Determine the visibility of the FTB Action Count Display.
 *
 *   Visibility:
 *   - Changes the visibility of the FTB Action Count Display.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Determines the general settings of the FTB Battle System. These settings
 * range from determining how the Action Count resources and costs are
 * displayed to the text that appear during team shifting.
 *
 * ---
 *
 * Action Counts
 * 
 *   Full Name:
 *   - What is the full name of "Action Counts" in your game?
 * 
 *   Abbreviation:
 *   - What is the abbreviation of "Action Counts" in your game?
 * 
 *   Cost Format:
 *   - How are Action Count costs displayed?
 *   - %1 - Cost, %2 - Abbr Text, %3 - Icon
 * 
 * ---
 * 
 * Icons
 * 
 *   Actor Action Icon:
 *   - What icon is used to represent actor actions?
 * 
 *   Enemy Action Icon:
 *   - What icon is used to represent enemy actions?
 * 
 *   Empty Action Icon:
 *   - What icon is used to represent empty actions?
 *
 * ---
 *
 * Team Shift
 * 
 *   Party's Turn:
 *   - Text that appears when it's the party's turn.
 *   - %1 - Party Name
 * 
 *   Enemy's Turn:
 *   - Text that appears when it's the enemy's turn.
 * 
 *   Wait Frames:
 *   - How many frames to wait in between team changes?
 *
 * ---
 *
 * Displayed Costs
 * 
 *   Cost Position Front?:
 *   - Put the action cost at the front of skill/item costs?
 * 
 *   Show Cost: Attack:
 *   - Show the action cost for the Attack command?
 * 
 *   Show Cost: Guard:
 *   - Show the action cost for the Guard command?
 * 
 *   Show Cost: 0 Action:
 *   - Show the action cost when the cost is 0 action?
 * 
 *   Show Cost: 1 Action:
 *   - Show the action cost when the cost is 1 action?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Determines the mechanics of the FTB Battle System. From here, you can
 * enable or disable core mechanics, determine how to determine turn advantage,
 * and how the various supporting mechanics operate.
 *
 * ---
 *
 * Main Mechanics
 * 
 *   Enable Free Switch?:
 *   - Enable free range switching between actors?
 * 
 *     Maintain Same Actor?:
 *     - Requires Free Switching.
 *     - Maintain the same actor after an action or move onto the next
 *       available actor?
 * 
 *   Reset Index New Turns:
 *   - Resets the selected actor whenever a new turn starts?
 *   - Needs "Free Switching" to be off.
 * 
 *   Current Turn Revival Act?:
 *   - Allow revived actors to act the current turn they're revived?
 * 
 *   Guard > Pass Turn?:
 *   - Does guarding cause a battler to pass turn?
 * 
 *   Gain Differences?:
 *   - If the max Action Count for a team changes, gain the difference in value
 *     if positive?
 * 
 *   Lose Differences?:
 *   - If the max Action Count for a team changes, lose the difference in value
 *     if negative?
 * 
 *   State/Buff Updates:
 *   - If enabled, update state/buff turns only on opponent turns.
 *   - Otherwise, they occur every turn.
 *
 * ---
 *
 * Turn Advantage
 * 
 *   Neutral Advantage:
 *   - For a neutral advantage battle, what determines which team goes first?
 *     - Random - 50% chance on which team goes first
 *     - Player - Player's team always goes first.
 *     - Lowest AGI - Battler with lowest AGI's team goes first
 *     - Average AGI - Team with the highest average AGI goes first
 *     - Highest AGI - Battler with highest AGI's team goes first
 *     - Total AGI - Team with highest total AGI goes first
 *
 * ---
 *
 * Action Generation
 * 
 *   Base:
 *   - What is the starting base number of actions that are generated per
 *     battler each turn?
 * 
 *   AGI Buff Influence?:
 *   - Do AGI buffs give +1 for each stack?
 * 
 *   AGI Debuff Influence?:
 *   - Do AGI debuffs give -1 for each stack?
 * 
 *   Maximum Actions:
 *   - What is the absolute maximum number of actions a team can have
 *     each turn?
 * 
 *   Minimum Actions:
 *   - What is the bare minimum number of actions a team can have each turn?
 * 
 *   Allow Overflow?:
 *   - Allow current actions to overflow?
 *   - Or let them cap at the current team max?
 *
 * ---
 *
 * Default Action Costs
 * 
 *   Skills:
 *   - What is the default action cost for skills?
 * 
 *   Items:
 *   - What is the default action cost for items?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Action Count Display Settings
 * ============================================================================
 *
 * Adjust the settings for the Action Count Display. They appear in the upper
 * or lower corners of the screen for the player party and the enemy troop.
 *
 * ---
 *
 * Display Settings
 * 
 *   Draw Horizontally?:
 *   - Which direction do you want the Action Count Display to go?
 * 
 *   Bottom Position?:
 *   - Place the Action Count Display towards the bottom of the screen?
 * 
 *     Offset Top Log Y?:
 *     - If using the top position, offset the log window's Y position.
 * 
 *     Reposition for Help?:
 *     - If using the top position, reposition the display when the help window
 *       is open?
 *
 * ---
 *
 * Reposition For Help
 * 
 *   Repostion X By:
 *   Repostion Y By:
 *   - Reposition the display's X/Y coordinates by this much when the
 *     Help Window is visible.
 *
 * ---
 *
 * Picture Settings
 * 
 *   Actor Action Picture:
 *   Enemy Action Picture:
 *   Empty Action Picture:
 *   - Optional. Place an image for an actor, enemy, or empty action instead of
 *     an icon?
 *
 * ---
 *
 * Coordinates
 * 
 *   Screen Buffer X:
 *   Screen Buffer Y:
 *   - Buffer from the the edge of the screen's X/Y by this much.
 * 
 *   Actor Offset X:
 *   Actor Offset Y:
 *   Enemy Offset X:
 *   Enemy Offset Y:
 *   - Offset the actor/enemy images' X/Y by this much.
 *
 * ---
 *
 * Draw Settings
 * 
 *   Max Actions Visible:
 *   - How many action slots max should be drawn for each team?
 * 
 *   Image Size:
 *   - What is the size of the icons or pictures for the action slots?
 * 
 *   Gap Distance:
 *   - How wide should the gab between each slot be in pixels?
 * 
 *   Icon Smoothing?:
 *   - Smooth the display for icons?
 *   - Or pixelate them?
 * 
 *   Picture Smoothing?:
 *   - Smooth the display for pictures?
 *   - Or pixelate them?
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Show Number?:
 *   - Show a number to display the actions remaining?
 * 
 *   Font Size:
 *   - What font size should be used for this number?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the remaining actions number X/Y.
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
 * Version 1.13: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where if the entire party is completely restricted via stun,
 *    charm, confusion, or berserk, entire turns would be skipped for both
 *    actors and enemies. Fix made by Irina.
 * 
 * Version 1.12: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > Mechanics > Current Turn Revival Act?:
 * **** Allow revived actors to act the current turn they're revived?
 * 
 * Version 1.11: December 14, 2023
 * * Bug Fixes!
 * ** Enemy skills with Turn Count conditions will now apply a local turn count
 *    instead of the battle turn count. Fix made by Olivia.
 * * Documentation Update!
 * ** Updated "Major Changes" section:
 * *** Turn Count for Enemies
 * **** Because the turn structure is changed, enemies will now have a
 *      different turn count structure. Their turn count only raises when the
 *      enemy troops have a turn instead of every battle turn. This means if an
 *      enemy skill page has a Turn Count condition of 3, it'll mean when the
 *      enemy team has gotten 3 turns, which will usually be around turn 6 for
 *      the whole battle.
 * 
 * Version 1.10: October 20, 2022
 * * Bug Fixes!
 * ** Fixed problem with the Action Count Display's Actor Offset Y not working
 *    properly. Fix made by Arisu.
 * 
 * Version 1.09: June 2, 2022
 * * Bug Fixes!
 * ** Fixed a bug where Force Actions do not work when there's only one action
 *    left for the turn. Fix made by Olivia.
 * 
 * Version 1.08: April 21, 2022
 * * Bug Fixes!
 * ** Fixed a bug that prevents the battle system from shifting back to the
 *    default battle system after an enemy counter attack. Fix made by Olivia.
 * 
 * Version 1.07: April 14, 2022
 * * Compatibility Update!
 * ** Now works more compatible with counters. Update made by Olivia.
 * 
 * Verison 1.06: March 17, 2022
 * * Bug Fixes!
 * ** Death by slip damage will now perform the proper death animation.
 *    Fix made by Olivia.
 * 
 * Version 1.05: August 13, 2021
 * * Bug Fixes!
 * ** Fixed some Plugin Parameters that did not work properly when
 *    showing/hiding action costs. Fix made by Irina.
 * 
 * Version 1.04: June 18, 2021
 * * Documentation Update!
 * ** Added "Action Count" section to Major Changes for extra clarity on how
 *    action counts are determined.
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Olivia:
 * *** <FTB Show Action Cost>
 * **** Makes the FTB action cost for this skill/item visible regardless of
 *      Plugin Parameter settings.
 * 
 * Version 1.03: May 28, 2021
 * * Documentation Update!
 * ** Updated the text for Plugin Parameter "Maintain Same Actor?"
 * *** Requires Free Switching. Maintain the same actor after an action or move
 *     onto the next available actor?
 * * Feature Update!
 * ** When there are more actions available than the number of actions that can
 *    be shown at a time, the visible icons displayed will be trimmed to fit
 *    the number of maximum visible icons displayed. Update by Olivia.
 * 
 * Version 1.02: April 2, 2021
 * * Bug Fixes!
 * ** Action costs for FTP will now only take effect if inside battle only.
 *    Fix made by Olivia.
 * 
 * Version 1.01: March 19, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.00 Official Release Date: February 22, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemActionCountVisibility
 * @text System: FTB Action Count Visibility
 * @desc Determine the visibility of the FTB Action Count Display.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the FTB Action Count Display.
 * @default true
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
 * @param BattleSystemFTB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc Determines the general settings of the FTB Battle System.
 * @default {"ActionCounts":"","ActionCountFull:str":"Fight Points","ActionCountAbbr:str":"FP","ActionCountCostFmt:str":"\\FS[22]\\C[0]×%1%3\\C[0]","Icons":"","ActorActionsIcon:num":"165","EnemyActionsIcon:num":"162","EmptyActionsIcon:num":"161","TeamShift":"","PartyTeamShiftFmt:str":"%1's Turn!","TroopTeamShiftFmt:str":"Opponent's Turn!","TeamShiftWait:num":"60","DisplayedCosts":"","CostPosition:eval":"false","ShowCostForAttack:eval":"false","ShowCostForGuard:eval":"false","Show_0_Action_Cost:eval":"true","Show_1_Action_Cost:eval":"true"}
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Determines the mechanics of the FTB Battle System.
 * @default {"Main":"","FreeChange:eval":"true","KeepPrevActor:eval":"true","GuardPass:eval":"true","GainDiff:eval":"true","LoseDiff:eval":"false","StateBuffUpdate:eval":"true","TurnAdvantage":"","NeutralAdvantage:str":"average agi","ActionGeneration":"","GenerateBase:num":"1","AgiBuff:eval":"true","AgiDebuff:eval":"false","MaxActions:num":"99","MinActions:num":"1","AllowOverflow:eval":"false","DefaultCost":"","DefaultCostSkill:num":"1","DefaultCostItem:num":"1"}
 *
 * @param ActionCountDisplay:struct
 * @text Action Count Display
 * @type struct<ActionCountDisplay>
 * @desc Adjust the settings for the Action Count Display.
 * @default {"Display":"","DrawHorz:eval":"true","BottomPosition:eval":"true","LogWindowTopOffsetY:num":"40","RepositionTopForHelp:eval":"true","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"160","Pictures":"","ActorActionPicture:str":"","EnemyActionPicture:str":"","EmptyActionPicture:str":"","Coordinates":"","ScreenBufferX:num":"16","ScreenBufferY:num":"16","ActorOffsetX:num":"0","ActorOffsetY:num":"0","EnemyOffsetX:num":"0","EnemyOffsetY:num":"0","DrawSettings":"","MaxVisible:num":"10","ImageSize:num":"32","ImageGapDistance:num":"2","IconSmoothing:eval":"false","PictureSmoothing:eval":"true","TurnsRemaining":"","DrawActionsRemaining:eval":"true","ActionsRemainingFontSize:num":"26","ActionsRemainingOffsetX:num":"0","ActionsRemainingOffsetY:num":"0"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param ActionCounts
 * @text Action Counts
 *
 * @param ActionCountFull:str
 * @text Full Name
 * @parent ActionCounts
 * @desc What is the full name of "Action Counts" in your game?
 * @default Fight Points
 *
 * @param ActionCountAbbr:str
 * @text Abbreviation
 * @parent ActionCounts
 * @desc What is the abbreviation of "Action Counts" in your game?
 * @default FP
 *
 * @param ActionCountCostFmt:str
 * @text Cost Format
 * @parent ActionCounts
 * @desc How are Action Count costs displayed?
 * %1 - Cost, %2 - Abbr Text, %3 - Icon
 * @default \FS[22]\C[0]×%1%3\C[0]
 *
 * @param Icons
 *
 * @param ActorActionsIcon:num
 * @text Actor Action Icon
 * @parent Icons
 * @desc What icon is used to represent actor actions?
 * @default 165
 *
 * @param EnemyActionsIcon:num
 * @text Enemy Action Icon
 * @parent Icons
 * @desc What icon is used to represent enemy actions?
 * @default 162
 *
 * @param EmptyActionsIcon:num
 * @text Empty Action Icon
 * @parent Icons
 * @desc What icon is used to represent empty actions?
 * @default 161
 *
 * @param TeamShift
 * @text Team Shift
 *
 * @param PartyTeamShiftFmt:str
 * @text Party's Turn
 * @parent TeamShift
 * @desc Text that appears when it's the party's turn.
 * %1 - Party Name
 * @default %1's Turn!
 *
 * @param TroopTeamShiftFmt:str
 * @text Enemy's Turn
 * @parent TeamShift
 * @desc Text that appears when it's the enemy's turn.
 * @default Opponent's Turn!
 *
 * @param TeamShiftWait:num
 * @text Wait Frames
 * @parent TeamShift
 * @type number
 * @desc How many frames to wait in between team changes?
 * @default 60
 *
 * @param DisplayedCosts
 * @text Displayed Costs
 *
 * @param CostPosition:eval
 * @text Cost Position Front?
 * @parent DisplayedCosts
 * @type boolean
 * @on Front
 * @off Back
 * @desc Put the action cost at the front of skill/item costs?
 * @default false
 *
 * @param ShowCostForAttack:eval
 * @text Show Cost: Attack
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost for the Attack command?
 * @default false
 *
 * @param ShowCostForGuard:eval
 * @text Show Cost: Guard
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost for the Guard command?
 * @default false
 *
 * @param Show_0_Action_Cost:eval
 * @text Show Cost: 0 Action
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost when the cost is 0 action?
 * @default true
 *
 * @param Show_1_Action_Cost:eval
 * @text Show Cost: 1 Action
 * @parent DisplayedCosts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the action cost when the cost is 1 action?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param Main
 * @text Main Mechanics
 *
 * @param FreeChange:eval
 * @text Enable Free Switch?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable free range switching between actors?
 * @default true
 *
 * @param KeepPrevActor:eval
 * @text Maintain Same Actor?
 * @parent FreeChange:eval
 * @type boolean
 * @on Maintain
 * @off Next Available
 * @desc Requires Free Switching. Maintain the same actor after
 * an action or move onto the next available actor?
 * @default true
 *
 * @param NewTurnResetIndex:eval
 * @text Reset Index New Turns
 * @parent Main
 * @type boolean
 * @on Reset
 * @off Keep
 * @desc Resets the selected actor whenever a new turn starts?
 * Needs "Free Switching" to be off.
 * @default false
 *
 * @param RevivalAct:eval
 * @text Current Revival Act?
 * @parent Main
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow revived actors to act the current turn they're revived?
 * @default false
 *
 * @param GuardPass:eval
 * @text Guard > Pass Turn?
 * @parent Main
 * @type boolean
 * @on Pass Turn
 * @off Don't Pass
 * @desc Does guarding cause a battler to pass turn?
 * @default true
 *
 * @param GainDiff:eval
 * @text Gain Differences?
 * @parent Main
 * @type boolean
 * @on Gain Differences
 * @off Keep Same
 * @desc If the max Action Count for a team changes,
 * gain the difference in value if positive?
 * @default true
 *
 * @param LoseDiff:eval
 * @text Lose Differences?
 * @parent Main
 * @type boolean
 * @on Lose Differences
 * @off Keep Same
 * @desc If the max Action Count for a team changes,
 * lose the difference in value if negative?
 * @default false
 *
 * @param StateBuffUpdate:eval
 * @text State/Buff Updates
 * @parent Main
 * @type boolean
 * @on Opponent Turns Only
 * @off All Turns
 * @desc If enabled, update state/buff turns only on opponent
 * turns. Otherwise, they occur every turn.
 * @default true
 *
 * @param TurnAdvantage
 * @text Turn Advantage
 *
 * @param NeutralAdvantage:str
 * @text Neutral Advantage
 * @parent TurnAdvantage
 * @type select
 * @option Random - 50% chance on which team goes first
 * @value random
 * @option Player - Player's team always goes first
 * @value player
 * @option Enemy - Enemy's team always goes first
 * @value enemy
 * @option Lowest AGI - Battler with lowest AGI's team goes first
 * @value lowest agi
 * @option Average AGI - Team with the highest average AGI goes first
 * @value average agi
 * @option Highest AGI - Battler with highest AGI's team goes first
 * @value highest agi
 * @option Total AGI - Team with highest total AGI goes first
 * @value total agi
 * @desc For a neutral advantage battle, what determines which team goes first?
 * @default average agi
 *
 * @param ActionGeneration
 * @text Action Generation
 *
 * @param GenerateBase:num
 * @text Base
 * @parent ActionGeneration
 * @type number
 * @desc What is the starting base number of actions that are generated per battler each turn?
 * @default 1
 *
 * @param AgiBuff:eval
 * @text AGI Buff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI buffs give +1 for each stack?
 * @default true
 *
 * @param AgiDebuff:eval
 * @text AGI Debuff Influence?
 * @parent ActionGeneration
 * @type boolean
 * @on Influence
 * @off No Influence
 * @desc Do AGI debuffs give -1 for each stack?
 * @default false
 *
 * @param MaxActions:num
 * @text Maximum Actions
 * @parent ActionGeneration
 * @type number
 * @desc What is the absolute maximum number of actions a team can have each turn?
 * @default 99
 *
 * @param MinActions:num
 * @text Minimum Actions
 * @parent ActionGeneration
 * @type number
 * @desc What is the bare minimum number of actions a team can have each turn?
 * @default 1
 *
 * @param AllowOverflow:eval
 * @text Allow Overflow?
 * @parent ActionGeneration
 * @type boolean
 * @on Allow
 * @off Cap to Max
 * @desc Allow current actions to overflow?
 * Or let them cap at the current team max?
 * @default false
 *
 * @param DefaultCost
 * @text Default Action Costs
 *
 * @param DefaultCostSkill:num
 * @text Skills
 * @parent DefaultCost
 * @type number
 * @desc What is the default action cost for skills?
 * @default 1
 *
 * @param DefaultCostItem:num
 * @text Items
 * @parent DefaultCost
 * @type number
 * @desc What is the default action cost for items?
 * @default 1
 * 
 */
/* ----------------------------------------------------------------------------
 * Action Count Display Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ActionCountDisplay:
 *
 * @param Display
 * @text Display Settings
 *
 * @param DrawHorz:eval
 * @text Draw Horizontally?
 * @parent Display
 * @type boolean
 * @on Horizontal
 * @off Vertical
 * @desc Which direction do you want the Action Count Display to go?
 * @default true
 *
 * @param BottomPosition:eval
 * @text Bottom Position?
 * @parent Display
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Place the Action Count Display towards the bottom of the screen?
 * @default true
 *
 * @param LogWindowTopOffsetY:num
 * @text Offset Top Log Y?
 * @parent BottomPosition:eval
 * @type number
 * @desc If using the top position, offset the log window's Y position.
 * @default 40
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent BottomPosition:eval
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If using the top position, reposition the display when the help window is open?
 * @default true
 *
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the display's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the display's Y coordinates by this much when
 * the Help Window is visible.
 * @default 160
 *
 * @param Pictures
 * @text Picture Settings
 *
 * @param ActorActionPicture:str
 * @text Actor Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an actor action instead of an icon?
 * @default 
 *
 * @param EnemyActionPicture:str
 * @text Enemy Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an enemy action instead of an icon?
 * @default 
 *
 * @param EmptyActionPicture:str
 * @text Empty Action Picture
 * @parent Pictures
 * @type file
 * @dir img/pictures/
 * @desc Optional. Place an image for an empty action instead of an icon?
 * @default 
 *
 * @param Coordinates
 *
 * @param ScreenBufferX:num
 * @text Screen Buffer X
 * @parent Coordinates
 * @desc Buffer from the the edge of the screen's X by this much.
 * @default 16
 *
 * @param ScreenBufferY:num
 * @text Screen Buffer Y
 * @parent Coordinates
 * @desc Buffer from the the edge of the screen's Y by this much.
 * @default 16
 *
 * @param ActorOffsetX:num
 * @text Actor Offset X
 * @parent Coordinates
 * @desc Offset the actor images' X by this much.
 * @default 0
 *
 * @param ActorOffsetY:num
 * @text Actor Offset Y
 * @parent Coordinates
 * @desc Offset the actor images' Y by this much.
 * @default 0
 *
 * @param EnemyOffsetX:num
 * @text Enemy Offset X
 * @parent Coordinates
 * @desc Offset the enemy images' X by this much.
 * @default 0
 *
 * @param EnemyOffsetY:num
 * @text Enemy Offset Y
 * @parent Coordinates
 * @desc Offset the enemy images' Y by this much.
 * @default 0
 *
 * @param DrawSettings
 * @text Draw Settings
 *
 * @param MaxVisible:num
 * @text Max Actions Visible
 * @parent DrawSettings
 * @desc How many action slots max should be drawn for each team?
 * @default 10
 *
 * @param ImageSize:num
 * @text Image Size
 * @parent DrawSettings
 * @desc What is the size of the icons or pictures for the action slots?
 * @default 32
 *
 * @param ImageGapDistance:num
 * @text Gap Distance
 * @parent DrawSettings
 * @desc How wide should the gab between each slot be in pixels?
 * @default 2
 *
 * @param IconSmoothing:eval
 * @text Icon Smoothing?
 * @parent DrawSettings
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for icons?
 * Or pixelate them?
 * @default false
 *
 * @param PictureSmoothing:eval
 * @text Picture Smoothing?
 * @parent DrawSettings
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Smooth the display for pictures?
 * Or pixelate them?
 * @default true
 *
 * @param TurnsRemaining
 * @text Turns Remaining
 *
 * @param DrawActionsRemaining:eval
 * @text Show Number?
 * @parent TurnsRemaining
 * @type boolean
 * @on Show Number
 * @off Don't Show
 * @desc Show a number to display the actions remaining?
 * @default true
 *
 * @param ActionsRemainingFontSize:num
 * @text Font Size
 * @parent DrawActionsRemaining:eval
 * @desc What font size should be used for this number?
 * @default 26
 *
 * @param ActionsRemainingOffsetX:num
 * @text Offset X
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining actions number X.
 * @default 0
 *
 * @param ActionsRemainingOffsetY:num
 * @text Offset Y
 * @parent DrawActionsRemaining:eval
 * @desc Offset the remaining actions number Y.
 * @default 0
 *
 */
//=============================================================================

const _0x227a8c=_0x290e;function _0x4054(){const _0x1f37be=['TeamShiftWait','220639MVRMdC','11157740zYsJLU','updateStateTurnsFTB','RevivalAct','PictureSmoothing','selectNextActor','NewTurnResetIndex','width','finishActorInput','isSkill','updateTurn','NUM','Game_BattlerBase_clearStates','payActionCostFTB','ARRAYFUNC','subject','canDrawActionsRemaining','_FTB_ACTION_BASE','ftbCostFormat','Game_Actor_changeEquip','initMembers','Game_Battler_removeState','changeClass','_FTB_NEUTRAL_TURN_ADVANTAGE','transform','cancel','windowRect','Game_Battler_addBuff','Window_Base_makeAdditionalSkillCostText','ARRAYEVAL','parameters','iconHeight','Scene_Battle_commandFight','checkNeedsUpdate','540lUMvwc','ActionCountDisplay','hitIndex','player','total\x20agi','onTouchSelectFTB','innerHeight','Show_0_Action_Cost','endActionFTB','getBattleSystem','GuardPass','startDamagePopup','match','ftbTotalAgility','Visible','refresh','_currentActor','LogWindowTopOffsetY','setText','performCollapse','EnemyOffsetX','cursorPagedown','onBattleStart','ActionCountFull','Game_Battler_onTurnEnd','startBattle','startActorInput','setBattleSystem','keepPrevSubjectFTB','BattleManager_isTeamBased','isPassingTurnFTB','create','ftbSwitchActorDirection','BattleManager_processTurn','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Show_1_Action_Cost','commandCancelFTB','ActorOffsetX','isAlive','attackSkillId','startBattleFTB','lowest\x20agi','DTB','drawBigIcon','applyGlobal','map','cursorPageup','isPartyCommandWindowDisabled','ItemQuantityFmt','shift','decideRandomTarget','%1ActionPicture','StateBuffUpdate','processSwitchActors','endTurn','contents','FUNC','round','MinActions','_maxActions','_forceAction','pop','endTurnFTB','isActiveTpb','EVAL','isSideView','PassTurn','loadSystem','2yGhITJ','_scene','startInputFTB','applyGlobalFTB','endAllBattlersTurn','commandCancel','_FTB_COST_SHOW_1','endAction','isDead','SystemActionCountVisibility','getMaxActionsFTB','BattleSystemFTB','enemy','enemies','_handlers','version','sort','CostPosition','addBuff','BattleManager_endAction','clamp','includes','actors','push','ftbHighestAgility','select','battler','maxCols','isBattleSystemFTBActionCountVisible','_lastTargetIndex','startTurnFTB','increaseTurnFTB','DrawActionsRemaining','processTouchFTB','canUse','ScreenBufferY','active','FTB','changeEquip','ARRAYSTR','imageSmoothingEnabled','IconSet','ARRAYNUM','createActionCountWindowsFTB','Window_Selectable_cursorPagedown','ImageGapDistance','agility','VisuMZ_1_ItemsEquipsCore','Game_Actor_releaseUnequippableItems','aliveMembers','ShowCostForAttack','getNextSubject','ftbEmptyActionsIcon','processTurn','numItems','clearPassTurnFTB','_FTB_MIN_ACTIONS','ScreenBufferX','registerCommand','reduce','_doubleTouch','members','name','_FTB_GUARD_PASS','Game_Battler_performCollapse','_FTB_RECALC_SUB_DIFF','ARRAYJSON','canMove','commandFight','8FASCdb','passTurnFTB','canActFTB','_forcedBattlers','getCurrentActionsFTB','makeAdditionalSkillCostText','randomInt','Game_BattlerBase_appear','EnemyActionPicture','BattleManager_isTpb','ftbPartyTeamShift','removeStatesAuto','Game_Action_applyGlobal','createActorCommandWindowFTB','forceChangeEquip','_windowLayer','ftbEnemyActionsIcon','return\x200','bind','speed','Scene_Battle_createActorCommandWindow','Game_Actor_changeClass','Scene_Battle_commandCancel','setMaxActionsFTB','getChildIndex','setCurrentActionsFTB','DrawHorz','resetTurnCountFTB','_FTB_COST_SHOW_GUARD','_FTB_BETWEEN_TEAMS_WAIT','performTurnEndFTB','startTurn','_action','resetFontSettings','2911173VzLdPo','exit','textWidth','min','createStartingCoordinates','NeutralAdvantage','BattleManager_isActiveTpb','initialize','length','unshift','drawText','BattleManager_endAllBattlersTurn','battleMembers','Game_Party_canInput','General','height','updateStateTurns','getActionCostFTB','processTouch','EnemyOffsetY','ftbFreeRangeSwitch','EmptyActionsIcon','BattleManager_startBattle','updateBuffTurns','clearStates','repositionLogWindowFTB','_helpWindow','index','VisuMZ_1_BattleCore','textSizeEx','STR','AgiBuff','screenX','loadPicture','createContentsArray','isTeamBased','GainDiff','setBackgroundType','addDebuff','Window_Base_drawItemNumber','setLastFtbIndex','_ftbActionsMax','setUnit','processTurnFTB','random','Game_Action_speed','5JTuLUR','Game_Battler_addDebuff','LoseDiff','Game_Actor_forceChangeEquip','toUpperCase','selectNextActorFTB','Game_BattlerBase_updateStateTurns','changeEquipById','fontSize','canInput','constructor','_bypassStateTurnUpdatesFTB','average\x20agi','ShowCostForGuard','_FTB_RESET_INDEX','isTriggered','AgiDebuff','loseCurrentActionsFTB','_FTB_ACTION_AGI_BUFF','forceActionFTB','ImageSize','VisuMZ_3_BattleAI\x20needs\x20to\x20be\x20updated\x20','_subject','_storedBitmaps','playCursorSound','BattleManager_finishActorInput','Game_Battler_onBattleStart','_FTB_COST_SHOW_0','isTurnBased','makeActions','forceAction','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Game_Battler_useItem','MaxActions','_FTB_STATE_BUFF_TURN_UPDATES_ONLY_ON_OPPONENT_TURNS','_ftbTroopActionCountWindow','onTurnEnd','_unit','battleEnd','max','ftbCreateTeamSwitchText','BattleManager_setup','status','_FTB_ACTION_OVERFLOW','initBattleSystemFTB','BattleManager_startTurn','VisuMZ_1_SkillsStatesCore','_FTB_KEEP_PREV_ACTOR','_FTB_FREE_CHANGE','BattleManager_isTurnBased','Window_Selectable_cursorLeft','iconWidth','_ftbPartyActionCountWindow','KeepPrevActor','blt','4653364vkuRHx','Window_Selectable_cursorRight','Game_Actor_changeEquipById','Game_BattlerBase_hide','ftb%1ActionsIcon','setup','update','PartyTeamShiftFmt','filter','VisuMZ_0_CoreEngine','Game_Actor_discardEquip','_context','_inBattle','BattleManager_forceAction','removeState','BattleManager_selectNextActor','drawImage','RepositionTopForHelp','gainCurrentActionsFTB','ftbActionCount','ftbLowestAgility','_ftbCurrentUnit','isDrawItemNumber','_FTB_COST_POSITION','agi','_turnCountFTB','isTpb','note','trim','RepositionTopHelpY','isItem','_buffs','setItem','selectNextCommand','drawItemNumber','Game_Battler_forceAction','_passedTurnFTB','isSceneBattle','waitCount','useItem','guardSkillId','clear','_ftbTeamEven','_statusWindow','recalculateActionsFTB','setTarget','_ftbActionCountVisible','increaseTurn','Enemy','Game_Battler_removeBuff','item','opacity','makeDeepCopy','clearBuffs','_ftbLastIndex','Window_Selectable_processTouch','createAllWindows','drawItemNumberFTB','in\x20order\x20for\x20VisuMZ_2_BattleSystemFTB\x20to\x20work.','_actor','Empty','Window_Selectable_cursorPageup','call','_surprise','_ftbTurnAdvantageUnit','EmptyActionPicture','BattleManager_makeActionOrders','Game_Actor_selectNextCommand','drawActionsRemaining','ftbTroopTeamShift','updatePadding','invokeCounterAttack','drawPicture','battleSys','description','addState','Game_Unit_onBattleStart','219653uUBlUz','releaseUnequippableItems','skillCostSeparator','format','makeActionOrders','initMembersFTB','Game_Enemy_transform','Game_Troop_increaseTurn','ActionPointTraitPlus','_ftbTeamOdd','hide','_actionBattlers','RegExp','_FTB_COST_SHOW_ATTACK','turnCount','removeActionBattlersFTB','isFTB','prototype','updatePosition','190590XjPeuj','Window_Help_setItem','DefaultCostSkill','Current','createActionsFTB','ftbActionPointsAbbr','parse','reduceActionsFTB','ConvertParams','RepositionTopHelpX','Game_Battler_turnCount','createActorCommandWindow','ftbAliveMembers','_inputting','close','friendsUnit','ActorActionsIcon','_FTB_ACTION_AGI_DEBUFF','3914832VahAAS','canActorBeSelectedFTB','Settings','concat','some','GenerateBase','ActorOffsetY','Mechanics','ActionsRemainingFontSize','Game_Battler_addState','BattleManager_battleSys','_FTB_MAX_ACTIONS','FreeChange','_actions','makeAdditionalCostTextFTB','BattleManager_invokeCounterAttack','_actorCommandWindow','ItemQuantityFontSize','_currentActions','BattleAI','_logWindow','visible','ftbActorActionsIcon','updateVisibility','startInput','Scene_Battle_createAllWindows','isOpen','highest\x20agi','_ftbActionsCur','BattleManager_endTurn','currentAction','innerWidth','MaxVisible','BottomPosition','ARRAYSTRUCT','Nothing','ActionCountCostFmt'];_0x4054=function(){return _0x1f37be;};return _0x4054();}(function(_0x5591b6,_0x3ff1fd){const _0x1e02b2=_0x290e,_0x422c18=_0x5591b6();while(!![]){try{const _0x117b6d=parseInt(_0x1e02b2(0x300))/0x1+-parseInt(_0x1e02b2(0x366))/0x2*(-parseInt(_0x1e02b2(0x203))/0x3)+parseInt(_0x1e02b2(0x268))/0x4*(-parseInt(_0x1e02b2(0x231))/0x5)+parseInt(_0x1e02b2(0x2da))/0x6+-parseInt(_0x1e02b2(0x2b5))/0x7*(-parseInt(_0x1e02b2(0x1e1))/0x8)+-parseInt(_0x1e02b2(0x322))/0x9*(parseInt(_0x1e02b2(0x2c8))/0xa)+parseInt(_0x1e02b2(0x301))/0xb;if(_0x117b6d===_0x3ff1fd)break;else _0x422c18['push'](_0x422c18['shift']());}catch(_0x148370){_0x422c18['push'](_0x422c18['shift']());}}}(_0x4054,0x8e2c4));var label=_0x227a8c(0x371),tier=tier||0x0,dependencies=[_0x227a8c(0x271),_0x227a8c(0x21f),_0x227a8c(0x395),_0x227a8c(0x25f)],pluginData=$plugins[_0x227a8c(0x270)](function(_0x100def){const _0x84d73=_0x227a8c;return _0x100def[_0x84d73(0x25b)]&&_0x100def[_0x84d73(0x2b2)]['includes']('['+label+']');})[0x0];function _0x290e(_0x3d630f,_0x20a92f){const _0x4054ad=_0x4054();return _0x290e=function(_0x290e2f,_0x1d51e6){_0x290e2f=_0x290e2f-0x1cc;let _0x2e0032=_0x4054ad[_0x290e2f];return _0x2e0032;},_0x290e(_0x3d630f,_0x20a92f);}VisuMZ[label]['Settings']=VisuMZ[label][_0x227a8c(0x2dc)]||{},VisuMZ[_0x227a8c(0x2d0)]=function(_0xfeb683,_0x3229c9){const _0x2bd286=_0x227a8c;for(const _0x5ae910 in _0x3229c9){if(_0x5ae910['match'](/(.*):(.*)/i)){const _0x488f40=String(RegExp['$1']),_0x23c5e0=String(RegExp['$2'])[_0x2bd286(0x235)]()['trim']();let _0x207fcd,_0x57ef31,_0x5134af;switch(_0x23c5e0){case _0x2bd286(0x30b):_0x207fcd=_0x3229c9[_0x5ae910]!==''?Number(_0x3229c9[_0x5ae910]):0x0;break;case _0x2bd286(0x390):_0x57ef31=_0x3229c9[_0x5ae910]!==''?JSON[_0x2bd286(0x2ce)](_0x3229c9[_0x5ae910]):[],_0x207fcd=_0x57ef31[_0x2bd286(0x34f)](_0x286bd2=>Number(_0x286bd2));break;case _0x2bd286(0x362):_0x207fcd=_0x3229c9[_0x5ae910]!==''?eval(_0x3229c9[_0x5ae910]):null;break;case _0x2bd286(0x31d):_0x57ef31=_0x3229c9[_0x5ae910]!==''?JSON['parse'](_0x3229c9[_0x5ae910]):[],_0x207fcd=_0x57ef31[_0x2bd286(0x34f)](_0x149cb7=>eval(_0x149cb7));break;case'JSON':_0x207fcd=_0x3229c9[_0x5ae910]!==''?JSON['parse'](_0x3229c9[_0x5ae910]):'';break;case _0x2bd286(0x1de):_0x57ef31=_0x3229c9[_0x5ae910]!==''?JSON[_0x2bd286(0x2ce)](_0x3229c9[_0x5ae910]):[],_0x207fcd=_0x57ef31[_0x2bd286(0x34f)](_0x26eece=>JSON[_0x2bd286(0x2ce)](_0x26eece));break;case _0x2bd286(0x35a):_0x207fcd=_0x3229c9[_0x5ae910]!==''?new Function(JSON[_0x2bd286(0x2ce)](_0x3229c9[_0x5ae910])):new Function(_0x2bd286(0x1f2));break;case _0x2bd286(0x30e):_0x57ef31=_0x3229c9[_0x5ae910]!==''?JSON['parse'](_0x3229c9[_0x5ae910]):[],_0x207fcd=_0x57ef31[_0x2bd286(0x34f)](_0x4f8535=>new Function(JSON['parse'](_0x4f8535)));break;case _0x2bd286(0x221):_0x207fcd=_0x3229c9[_0x5ae910]!==''?String(_0x3229c9[_0x5ae910]):'';break;case _0x2bd286(0x38d):_0x57ef31=_0x3229c9[_0x5ae910]!==''?JSON[_0x2bd286(0x2ce)](_0x3229c9[_0x5ae910]):[],_0x207fcd=_0x57ef31[_0x2bd286(0x34f)](_0x3b77a9=>String(_0x3b77a9));break;case'STRUCT':_0x5134af=_0x3229c9[_0x5ae910]!==''?JSON[_0x2bd286(0x2ce)](_0x3229c9[_0x5ae910]):{},_0x207fcd=VisuMZ[_0x2bd286(0x2d0)]({},_0x5134af);break;case _0x2bd286(0x2fc):_0x57ef31=_0x3229c9[_0x5ae910]!==''?JSON[_0x2bd286(0x2ce)](_0x3229c9[_0x5ae910]):[],_0x207fcd=_0x57ef31[_0x2bd286(0x34f)](_0x5a8809=>VisuMZ[_0x2bd286(0x2d0)]({},JSON[_0x2bd286(0x2ce)](_0x5a8809)));break;default:continue;}_0xfeb683[_0x488f40]=_0x207fcd;}}return _0xfeb683;},(_0xd07243=>{const _0x1d8129=_0x227a8c,_0x43f8ef=_0xd07243[_0x1d8129(0x1da)];for(const _0x55ae43 of dependencies){if(!Imported[_0x55ae43]){alert(_0x1d8129(0x344)[_0x1d8129(0x2b8)](_0x43f8ef,_0x55ae43)),SceneManager[_0x1d8129(0x204)]();break;}}const _0x4ec715=_0xd07243[_0x1d8129(0x2b2)];if(_0x4ec715[_0x1d8129(0x32e)](/\[Version[ ](.*?)\]/i)){const _0x106367=Number(RegExp['$1']);_0x106367!==VisuMZ[label][_0x1d8129(0x375)]&&(alert(_0x1d8129(0x250)['format'](_0x43f8ef,_0x106367)),SceneManager['exit']());}if(_0x4ec715[_0x1d8129(0x32e)](/\[Tier[ ](\d+)\]/i)){const _0x1466e0=Number(RegExp['$1']);_0x1466e0<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1d8129(0x2b8)](_0x43f8ef,_0x1466e0,tier)),SceneManager[_0x1d8129(0x204)]()):tier=Math['max'](_0x1466e0,tier);}VisuMZ[_0x1d8129(0x2d0)](VisuMZ[label][_0x1d8129(0x2dc)],_0xd07243[_0x1d8129(0x31e)]);})(pluginData),PluginManager[_0x227a8c(0x1d6)](pluginData[_0x227a8c(0x1da)],_0x227a8c(0x36f),_0x554ea4=>{const _0x4e59a5=_0x227a8c;VisuMZ[_0x4e59a5(0x2d0)](_0x554ea4,_0x554ea4);const _0x4fd250=_0x554ea4[_0x4e59a5(0x330)];$gameSystem['setBattleSystemFTBActionCountVisible'](_0x4fd250);}),VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2c1)]={'ActionPointCost':/<FTB (?:FP|ACTION) COST:[ ](\d+)>/i,'HideActionPointCost':/<FTB HIDE (?:FP|ACTION) COST>/i,'ShowActionPointCost':/<FTB SHOW (?:FP|ACTION) COST>/i,'PassTurn':/<FTB PASS TURN>/i,'ActionPointTraitPlus':/<FTB (?:FP|ACTION|ACTIONS):[ ]([\+\-]\d+)>/i},DataManager[_0x227a8c(0x214)]=function(_0x16350e){const _0x597926=_0x227a8c;if(!_0x16350e)return 0x0;const _0x3969f3=VisuMZ[_0x597926(0x371)][_0x597926(0x2dc)]['Mechanics'],_0x4b9ef4=VisuMZ[_0x597926(0x371)][_0x597926(0x2c1)],_0x39345b=_0x16350e[_0x597926(0x283)];if(_0x39345b[_0x597926(0x32e)](_0x4b9ef4['ActionPointCost']))return Number(RegExp['$1']);else{if(DataManager[_0x597926(0x309)](_0x16350e))return _0x3969f3[_0x597926(0x2ca)];else return DataManager[_0x597926(0x286)](_0x16350e)?_0x3969f3['DefaultCostItem']:0x0;}},ImageManager['ftbActorActionsIcon']=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x211)][_0x227a8c(0x2d8)],ImageManager[_0x227a8c(0x1f1)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x211)]['EnemyActionsIcon'],ImageManager[_0x227a8c(0x1d0)]=VisuMZ[_0x227a8c(0x371)]['Settings'][_0x227a8c(0x211)][_0x227a8c(0x218)],TextManager['ftbActionPointsFull']=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['General'][_0x227a8c(0x339)],TextManager[_0x227a8c(0x2cd)]=VisuMZ['BattleSystemFTB'][_0x227a8c(0x2dc)][_0x227a8c(0x211)]['ActionCountAbbr'],TextManager[_0x227a8c(0x312)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['General'][_0x227a8c(0x2fe)],TextManager[_0x227a8c(0x1eb)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x211)][_0x227a8c(0x26f)],TextManager[_0x227a8c(0x2ad)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['General']['TroopTeamShiftFmt'],SceneManager[_0x227a8c(0x28d)]=function(){const _0x3a5ceb=_0x227a8c;return this[_0x3a5ceb(0x367)]&&this[_0x3a5ceb(0x367)][_0x3a5ceb(0x23b)]===Scene_Battle;},BattleManager['_FTB_FREE_CHANGE']=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x2e1)][_0x227a8c(0x2e6)],BattleManager[_0x227a8c(0x260)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x2e1)][_0x227a8c(0x266)],BattleManager[_0x227a8c(0x23f)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['Mechanics'][_0x227a8c(0x306)]??![],BattleManager[_0x227a8c(0x1db)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['Mechanics'][_0x227a8c(0x32c)],BattleManager['_FTB_RECALC_ADD_DIFF']=VisuMZ['BattleSystemFTB']['Settings'][_0x227a8c(0x2e1)][_0x227a8c(0x227)],BattleManager[_0x227a8c(0x1dd)]=VisuMZ[_0x227a8c(0x371)]['Settings'][_0x227a8c(0x2e1)][_0x227a8c(0x233)],BattleManager[_0x227a8c(0x317)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x2e1)][_0x227a8c(0x208)],BattleManager[_0x227a8c(0x1fe)]=VisuMZ['BattleSystemFTB'][_0x227a8c(0x2dc)][_0x227a8c(0x211)][_0x227a8c(0x2ff)],BattleManager[_0x227a8c(0x253)]=VisuMZ[_0x227a8c(0x371)]['Settings'][_0x227a8c(0x2e1)][_0x227a8c(0x356)],VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2e4)]=BattleManager[_0x227a8c(0x2b1)],BattleManager['battleSys']=function(){const _0x4233ca=_0x227a8c;if(this[_0x4233ca(0x2c5)]())return _0x4233ca(0x38b);return VisuMZ[_0x4233ca(0x371)][_0x4233ca(0x2e4)][_0x4233ca(0x2a6)](this);},BattleManager[_0x227a8c(0x2c5)]=function(){const _0x1c1aa1=_0x227a8c;return $gameSystem[_0x1c1aa1(0x32b)]()===_0x1c1aa1(0x38b);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x1ea)]=BattleManager[_0x227a8c(0x282)],BattleManager[_0x227a8c(0x282)]=function(){const _0x56918c=_0x227a8c;if(this[_0x56918c(0x2c5)]())return![];return VisuMZ[_0x56918c(0x371)][_0x56918c(0x1ea)][_0x56918c(0x2a6)](this);},VisuMZ['BattleSystemFTB'][_0x227a8c(0x209)]=BattleManager[_0x227a8c(0x361)],BattleManager[_0x227a8c(0x361)]=function(){const _0xa4317c=_0x227a8c;if(this[_0xa4317c(0x2c5)]())return![];return VisuMZ[_0xa4317c(0x371)]['BattleManager_isActiveTpb'][_0xa4317c(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x262)]=BattleManager[_0x227a8c(0x24d)],BattleManager[_0x227a8c(0x24d)]=function(){const _0x3d1851=_0x227a8c;if(this['isFTB']())return!![];return VisuMZ[_0x3d1851(0x371)][_0x3d1851(0x262)][_0x3d1851(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)]['BattleManager_isTeamBased']=BattleManager[_0x227a8c(0x226)],BattleManager[_0x227a8c(0x226)]=function(){const _0x45491b=_0x227a8c;if(this[_0x45491b(0x2c5)]())return!![];return VisuMZ['BattleSystemFTB'][_0x45491b(0x33f)][_0x45491b(0x2a6)](this);},VisuMZ['BattleSystemFTB']['BattleManager_startInput']=BattleManager[_0x227a8c(0x2f2)],BattleManager[_0x227a8c(0x2f2)]=function(){const _0x2c472f=_0x227a8c;if(this['isFTB']())this[_0x2c472f(0x2a7)]=![];VisuMZ['BattleSystemFTB']['BattleManager_startInput'][_0x2c472f(0x2a6)](this);if(this[_0x2c472f(0x2c5)]()&&$gameParty[_0x2c472f(0x23a)]())this[_0x2c472f(0x368)]();},BattleManager[_0x227a8c(0x368)]=function(){const _0x326006=_0x227a8c;this[_0x326006(0x200)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x343)]=BattleManager[_0x227a8c(0x1d1)],BattleManager[_0x227a8c(0x1d1)]=function(){const _0x43be81=_0x227a8c;this['isFTB']()?this[_0x43be81(0x22e)]():VisuMZ[_0x43be81(0x371)]['BattleManager_processTurn'][_0x43be81(0x2a6)](this);},BattleManager[_0x227a8c(0x22e)]=function(){const _0x1987ee=_0x227a8c,_0x301693=this['_subject'];if(_0x301693&&!_0x301693[_0x1987ee(0x2d7)]()[_0x1987ee(0x1e3)]())this['endAction'](),this[_0x1987ee(0x247)]=null,this[_0x1987ee(0x30a)](![]);else{if(_0x301693&&_0x301693['isActor']()&&_0x301693[_0x1987ee(0x23a)]()){const _0x2d01e2=_0x301693[_0x1987ee(0x2f8)]();if(!_0x2d01e2)VisuMZ['BattleSystemFTB'][_0x1987ee(0x343)][_0x1987ee(0x2a6)](this);else _0x2d01e2['_forceAction']?VisuMZ[_0x1987ee(0x371)][_0x1987ee(0x343)][_0x1987ee(0x2a6)](this):(this['_currentActor']=_0x301693,this[_0x1987ee(0x33c)]());}else VisuMZ[_0x1987ee(0x371)][_0x1987ee(0x343)][_0x1987ee(0x2a6)](this);}},VisuMZ[_0x227a8c(0x371)]['BattleManager_finishActorInput']=BattleManager[_0x227a8c(0x308)],BattleManager[_0x227a8c(0x308)]=function(){const _0x3ee495=_0x227a8c;this[_0x3ee495(0x2c5)]()?VisuMZ[_0x3ee495(0x371)][_0x3ee495(0x343)]['call'](this):VisuMZ['BattleSystemFTB'][_0x3ee495(0x24a)][_0x3ee495(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)]['BattleManager_selectNextActor']=BattleManager['selectNextActor'],BattleManager[_0x227a8c(0x305)]=function(){const _0x9fb889=_0x227a8c;this['isFTB']()?this[_0x9fb889(0x236)]():VisuMZ[_0x9fb889(0x371)][_0x9fb889(0x277)][_0x9fb889(0x2a6)](this);},BattleManager[_0x227a8c(0x236)]=function(){const _0xb9e4f8=_0x227a8c;this[_0xb9e4f8(0x332)]=null,this[_0xb9e4f8(0x2d5)]=![];},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x379)]=BattleManager[_0x227a8c(0x36d)],BattleManager[_0x227a8c(0x36d)]=function(){const _0x55af19=_0x227a8c,_0x582360=this['_subject'];VisuMZ['BattleSystemFTB'][_0x55af19(0x379)][_0x55af19(0x2a6)](this),this[_0x55af19(0x32a)](_0x582360);},BattleManager['endActionFTB']=function(_0x581bed){const _0x18b329=_0x227a8c;if(!this['isFTB']())return;if(_0x581bed){const _0x4d2d9e=_0x581bed[_0x18b329(0x2e7)][_0x18b329(0x270)](_0x458664=>_0x458664[_0x18b329(0x35e)]);_0x581bed[_0x18b329(0x24e)]();if(_0x4d2d9e){let _0x363644=_0x4d2d9e['length'];while(_0x363644--){_0x581bed[_0x18b329(0x2e7)][_0x18b329(0x35f)]();}_0x581bed[_0x18b329(0x2e7)]=_0x4d2d9e['concat'](_0x581bed[_0x18b329(0x2e7)]);}}if(this[_0x18b329(0x1e4)][_0x18b329(0x20b)]>0x0)this[_0x18b329(0x247)]&&(!this['_actionBattlers'][_0x18b329(0x37b)](this[_0x18b329(0x247)])&&this[_0x18b329(0x2c0)][_0x18b329(0x20c)](this['_subject'])),this[_0x18b329(0x247)]=this[_0x18b329(0x1cf)]();else this[_0x18b329(0x33e)](_0x581bed)&&(this[_0x18b329(0x247)]=_0x581bed);_0x581bed[_0x18b329(0x2d7)]()[_0x18b329(0x22b)](_0x581bed);},BattleManager['keepPrevSubjectFTB']=function(_0x3d3060){const _0x8317e0=_0x227a8c;if(!_0x3d3060)return![];if(!_0x3d3060['isActor']())return![];if(!_0x3d3060[_0x8317e0(0x1df)]())return![];if(!_0x3d3060[_0x8317e0(0x23a)]())return![];if(_0x3d3060[_0x8317e0(0x340)]())return![];return BattleManager['_FTB_FREE_CHANGE']&&BattleManager[_0x8317e0(0x260)];},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x219)]=BattleManager[_0x227a8c(0x33b)],BattleManager[_0x227a8c(0x33b)]=function(){const _0x231dc0=_0x227a8c;VisuMZ[_0x231dc0(0x371)][_0x231dc0(0x219)][_0x231dc0(0x2a6)](this),this[_0x231dc0(0x34a)]();},BattleManager[_0x227a8c(0x34a)]=function(){const _0x2c40ac=_0x227a8c;if(!this[_0x2c40ac(0x2c5)]())return;if(this['_preemptive'])this[_0x2c40ac(0x2a8)]=_0x2c40ac(0x37c);else this[_0x2c40ac(0x2a7)]?this['_ftbTurnAdvantageUnit']=_0x2c40ac(0x373):this['_ftbTurnAdvantageUnit']=BattleManager[_0x2c40ac(0x317)];this[_0x2c40ac(0x2a8)]=this[_0x2c40ac(0x2a8)]||'random';let _0x17a2bc=0x0,_0xe1b1c2=0x0;switch(this['_ftbTurnAdvantageUnit']['toLowerCase']()[_0x2c40ac(0x284)]()){case _0x2c40ac(0x22f):let _0x394351=[_0x2c40ac(0x37c),_0x2c40ac(0x373)];this[_0x2c40ac(0x2a8)]=_0x394351[Math[_0x2c40ac(0x1e7)](_0x394351[_0x2c40ac(0x20b)])];break;case _0x2c40ac(0x325):this[_0x2c40ac(0x2a8)]='actors';break;case _0x2c40ac(0x372):this[_0x2c40ac(0x2a8)]=_0x2c40ac(0x373);break;case _0x2c40ac(0x34b):_0x17a2bc=$gameParty[_0x2c40ac(0x27c)](),_0xe1b1c2=$gameTroop[_0x2c40ac(0x27c)](),this[_0x2c40ac(0x2a8)]=_0x17a2bc>=_0xe1b1c2?'actors':_0x2c40ac(0x373);break;case _0x2c40ac(0x23d):_0x17a2bc=$gameParty[_0x2c40ac(0x394)](),_0xe1b1c2=$gameTroop['agility'](),this[_0x2c40ac(0x2a8)]=_0x17a2bc>=_0xe1b1c2?_0x2c40ac(0x37c):'enemies';break;case _0x2c40ac(0x2f5):_0x17a2bc=$gameParty[_0x2c40ac(0x37e)](),_0xe1b1c2=$gameTroop[_0x2c40ac(0x37e)](),this[_0x2c40ac(0x2a8)]=_0x17a2bc>=_0xe1b1c2?_0x2c40ac(0x37c):_0x2c40ac(0x373);break;case _0x2c40ac(0x326):_0x17a2bc=$gameParty[_0x2c40ac(0x32f)](),_0xe1b1c2=$gameTroop[_0x2c40ac(0x32f)](),this[_0x2c40ac(0x2a8)]=_0x17a2bc>=_0xe1b1c2?_0x2c40ac(0x37c):_0x2c40ac(0x373);break;}this[_0x2c40ac(0x2be)]=this[_0x2c40ac(0x2a8)]===_0x2c40ac(0x37c)?$gameParty:$gameTroop,this['_ftbTeamEven']=this[_0x2c40ac(0x2a8)]===_0x2c40ac(0x37c)?$gameTroop:$gameParty;},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2aa)]=BattleManager[_0x227a8c(0x2b9)],BattleManager[_0x227a8c(0x2b9)]=function(){const _0x5af7d4=_0x227a8c;this['isFTB']()?this['makeActionOrdersFTB']():VisuMZ[_0x5af7d4(0x371)]['BattleManager_makeActionOrders']['call'](this);},BattleManager['makeActionOrdersFTB']=function(){const _0x5700a5=_0x227a8c;let _0x337e17=[],_0x31cd1c=[],_0x111666=0x0;const _0x1b2610=$gameTroop[_0x5700a5(0x2c3)]();let _0x5c24f2=_0x1b2610%0x2===0x0?this[_0x5700a5(0x292)]:this[_0x5700a5(0x2be)];this[_0x5700a5(0x27d)]=_0x5c24f2;const _0x3c97dc=VisuMZ[_0x5700a5(0x371)][_0x5700a5(0x2dc)][_0x5700a5(0x2e1)];if(_0x5c24f2===$gameParty){const _0x330481=_0x3c97dc[_0x5700a5(0x303)]?$gameParty['battleMembers']():$gameParty[_0x5700a5(0x2d4)]();let _0x241d29=_0x330481['filter'](_0x1e3c60=>_0x1e3c60[_0x5700a5(0x1df)]()&&!_0x1e3c60[_0x5700a5(0x23a)]()),_0x5b919a=_0x330481[_0x5700a5(0x270)](_0x30c74b=>_0x30c74b['canMove']()&&_0x30c74b['canInput']());_0x337e17=_0x337e17[_0x5700a5(0x2dd)](_0x241d29),_0x111666=Game_Unit[_0x5700a5(0x2e5)];while(_0x111666--){_0x337e17=_0x337e17[_0x5700a5(0x2dd)](_0x5b919a);}_0x111666=Game_Unit['_FTB_MAX_ACTIONS']-0x1;while(_0x111666--){_0x337e17=_0x337e17[_0x5700a5(0x2dd)](_0x241d29);}}if(_0x5c24f2===$gameTroop){const _0x2817c8=_0x3c97dc[_0x5700a5(0x303)]?$gameTroop[_0x5700a5(0x1d9)]():$gameTroop[_0x5700a5(0x2d4)]();let _0x5737b7=_0x2817c8[_0x5700a5(0x270)](_0x133977=>_0x133977[_0x5700a5(0x1df)]());$gameSystem[_0x5700a5(0x363)]()?_0x5737b7[_0x5700a5(0x376)]((_0x7932fd,_0x24beac)=>_0x24beac[_0x5700a5(0x223)]()-_0x7932fd[_0x5700a5(0x223)]()):_0x5737b7[_0x5700a5(0x376)]((_0xe8c8c4,_0x447870)=>_0xe8c8c4['screenX']()-_0x447870[_0x5700a5(0x223)]());_0x111666=Game_Unit[_0x5700a5(0x2e5)];while(_0x111666--){_0x31cd1c=_0x31cd1c[_0x5700a5(0x2dd)](_0x5737b7);}$gameTroop[_0x5700a5(0x24e)]();}this[_0x5700a5(0x2c0)]=_0x337e17['concat'](_0x31cd1c);},BattleManager['removeActionBattlersFTB']=function(){const _0x183b65=_0x227a8c;if(!this[_0x183b65(0x2c5)]())return;this[_0x183b65(0x2c0)]=this[_0x183b65(0x2c0)]||[],this[_0x183b65(0x2c0)]=this['_actionBattlers'][_0x183b65(0x270)](_0xe3785f=>_0xe3785f[_0x183b65(0x1df)]()&&!_0xe3785f[_0x183b65(0x340)]());},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x25a)]=BattleManager[_0x227a8c(0x26d)],BattleManager['setup']=function(_0x2f1042,_0x22f90f,_0x51b504){const _0x48f589=_0x227a8c;VisuMZ[_0x48f589(0x371)][_0x48f589(0x25a)][_0x48f589(0x2a6)](this,_0x2f1042,_0x22f90f,_0x51b504),this[_0x48f589(0x2ba)]();},BattleManager['initMembersFTB']=function(){const _0x4df1aa=_0x227a8c;if(!BattleManager[_0x4df1aa(0x2c5)]())return;this['_ftbCurrentUnit']=undefined,$gameParty[_0x4df1aa(0x384)](),$gameTroop[_0x4df1aa(0x384)]();},VisuMZ['BattleSystemFTB'][_0x227a8c(0x25e)]=BattleManager[_0x227a8c(0x200)],BattleManager[_0x227a8c(0x200)]=function(){const _0x1c68dd=_0x227a8c;this[_0x1c68dd(0x384)](),VisuMZ[_0x1c68dd(0x371)][_0x1c68dd(0x25e)][_0x1c68dd(0x2a6)](this),this[_0x1c68dd(0x259)]();},BattleManager[_0x227a8c(0x384)]=function(){const _0x59ba30=_0x227a8c;if(!BattleManager[_0x59ba30(0x2c5)]())return;$gameParty[_0x59ba30(0x1d3)](),$gameTroop[_0x59ba30(0x1d3)]();const _0x2aa20d=$gameTroop['turnCount']()+0x1;let _0x33a687=_0x2aa20d%0x2===0x0?this[_0x59ba30(0x292)]:this[_0x59ba30(0x2be)],_0x46d901=_0x2aa20d%0x2===0x0?this[_0x59ba30(0x2be)]:this['_ftbTeamEven'];_0x2aa20d>0x1&&_0x46d901[_0x59ba30(0x1ff)](),_0x33a687[_0x59ba30(0x302)](),_0x33a687[_0x59ba30(0x384)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2f7)]=BattleManager[_0x227a8c(0x358)],BattleManager['endTurn']=function(){const _0x386a7b=_0x227a8c;VisuMZ['BattleSystemFTB']['BattleManager_endTurn'][_0x386a7b(0x2a6)](this),this[_0x386a7b(0x360)]();},BattleManager['endTurnFTB']=function(){const _0x263993=_0x227a8c;if(!BattleManager[_0x263993(0x2c5)]())return;},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x210)]=Game_Party[_0x227a8c(0x2c6)][_0x227a8c(0x23a)],Game_Party[_0x227a8c(0x2c6)]['canInput']=function(){const _0x308dd4=_0x227a8c;if(BattleManager[_0x308dd4(0x2c5)]())return!![];return VisuMZ['BattleSystemFTB'][_0x308dd4(0x210)][_0x308dd4(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)]['BattleManager_endAllBattlersTurn']=BattleManager['endAllBattlersTurn'],BattleManager[_0x227a8c(0x36a)]=function(){const _0x3dfe4a=_0x227a8c;if(this[_0x3dfe4a(0x2c5)]())return;VisuMZ[_0x3dfe4a(0x371)][_0x3dfe4a(0x20e)][_0x3dfe4a(0x2a6)](this);},BattleManager[_0x227a8c(0x259)]=function(){const _0x56dca9=_0x227a8c;if(!BattleManager['isFTB']())return;let _0x4b66d0='';if(this[_0x56dca9(0x27d)]===$gameParty){let _0x13b86f=$gameParty['name']();_0x4b66d0=TextManager[_0x56dca9(0x1eb)][_0x56dca9(0x2b8)](_0x13b86f);}else _0x4b66d0=TextManager[_0x56dca9(0x2ad)];if(_0x4b66d0!==''){this[_0x56dca9(0x2ee)]['push']('addText',_0x4b66d0);const _0xf8bb8d=BattleManager['_FTB_BETWEEN_TEAMS_WAIT'];this[_0x56dca9(0x2ee)][_0x56dca9(0x37d)](_0x56dca9(0x28e),_0xf8bb8d),this[_0x56dca9(0x2ee)]['push'](_0x56dca9(0x291));}},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x24b)]=Game_Battler[_0x227a8c(0x2c6)]['onBattleStart'],Game_Battler['prototype'][_0x227a8c(0x338)]=function(_0x302b99){const _0x435f01=_0x227a8c;VisuMZ[_0x435f01(0x371)][_0x435f01(0x24b)][_0x435f01(0x2a6)](this,_0x302b99),this[_0x435f01(0x1fc)]();},Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x1fc)]=function(){const _0x4f579f=_0x227a8c;if(!BattleManager[_0x4f579f(0x2c5)]())return;this[_0x4f579f(0x281)]=0x0;},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2d2)]=Game_Battler['prototype'][_0x227a8c(0x2c3)],Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x2c3)]=function(){const _0x4f5b62=_0x227a8c;return BattleManager['isFTB']()?this[_0x4f5b62(0x281)]||0x0:VisuMZ[_0x4f5b62(0x371)][_0x4f5b62(0x2d2)][_0x4f5b62(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2bc)]=Game_Troop[_0x227a8c(0x2c6)][_0x227a8c(0x297)],Game_Troop[_0x227a8c(0x2c6)][_0x227a8c(0x297)]=function(){const _0x2c818c=_0x227a8c;VisuMZ[_0x2c818c(0x371)][_0x2c818c(0x2bc)][_0x2c818c(0x2a6)](this),this[_0x2c818c(0x385)]();},Game_Troop[_0x227a8c(0x2c6)][_0x227a8c(0x385)]=function(){const _0x1479b4=_0x227a8c;if(!BattleManager[_0x1479b4(0x2c5)]())return;if(Imported['VisuMZ_3_BattleAI']&&VisuMZ[_0x1479b4(0x2ed)][_0x1479b4(0x375)]<1.22){let _0x13f491='';_0x13f491+=_0x1479b4(0x246),_0x13f491+=_0x1479b4(0x2a2),alert(_0x13f491),SceneManager['exit']();}let _0x333329=[];BattleManager[_0x1479b4(0x27d)]===$gameParty?_0x333329=$gameParty['allMembers']():_0x333329=$gameTroop[_0x1479b4(0x1d9)]();for(const _0x69284a of _0x333329){_0x69284a[_0x1479b4(0x281)]=_0x69284a[_0x1479b4(0x281)]||0x0,_0x69284a[_0x1479b4(0x281)]++;}},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2e9)]=BattleManager[_0x227a8c(0x2af)],BattleManager[_0x227a8c(0x2af)]=function(_0x569b0c,_0x19b42b){const _0x4f1544=_0x227a8c,_0x394e02=BattleManager['isFTB']();if(_0x394e02)$gameSystem[_0x4f1544(0x33d)](_0x4f1544(0x34c));VisuMZ[_0x4f1544(0x371)][_0x4f1544(0x2e9)]['call'](this,_0x569b0c,_0x19b42b);if(_0x394e02)$gameSystem[_0x4f1544(0x33d)](_0x4f1544(0x38b));},VisuMZ[_0x227a8c(0x371)]['Game_System_initialize']=Game_System[_0x227a8c(0x2c6)][_0x227a8c(0x20a)],Game_System['prototype'][_0x227a8c(0x20a)]=function(){const _0x2ccc65=_0x227a8c;VisuMZ[_0x2ccc65(0x371)]['Game_System_initialize'][_0x2ccc65(0x2a6)](this),this['initBattleSystemFTB']();},Game_System[_0x227a8c(0x2c6)]['initBattleSystemFTB']=function(){const _0x1a78ac=_0x227a8c;this[_0x1a78ac(0x296)]=!![];},Game_System[_0x227a8c(0x2c6)][_0x227a8c(0x382)]=function(){const _0xcd401e=_0x227a8c;if(BattleManager['_phase']===_0xcd401e(0x257))return![];return this[_0xcd401e(0x296)]===undefined&&this[_0xcd401e(0x25d)](),this[_0xcd401e(0x296)];},Game_System['prototype']['setBattleSystemFTBActionCountVisible']=function(_0x27961a){const _0x406733=_0x227a8c;this[_0x406733(0x296)]===undefined&&this['initBattleSystemFTB'](),this[_0x406733(0x296)]=_0x27961a;},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x230)]=Game_Action[_0x227a8c(0x2c6)][_0x227a8c(0x1f4)],Game_Action[_0x227a8c(0x2c6)][_0x227a8c(0x1f4)]=function(){const _0x52de7c=_0x227a8c;return BattleManager['isFTB']()?0x0:VisuMZ['BattleSystemFTB'][_0x52de7c(0x230)][_0x52de7c(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x1ed)]=Game_Action['prototype']['applyGlobal'],Game_Action[_0x227a8c(0x2c6)][_0x227a8c(0x34e)]=function(){const _0x4730a2=_0x227a8c;VisuMZ['BattleSystemFTB'][_0x4730a2(0x1ed)][_0x4730a2(0x2a6)](this),this[_0x4730a2(0x369)]();},Game_Action[_0x227a8c(0x2c6)][_0x227a8c(0x369)]=function(){const _0x56f1bf=_0x227a8c;if(!BattleManager['isFTB']())return;if(!this[_0x56f1bf(0x30f)]())return;if(!this['item']())return;this[_0x56f1bf(0x309)]()&&this[_0x56f1bf(0x29a)]()['id']===this[_0x56f1bf(0x30f)]()[_0x56f1bf(0x290)]()&&(BattleManager[_0x56f1bf(0x1db)]&&this['subject']()[_0x56f1bf(0x1e2)]());const _0x44d564=VisuMZ[_0x56f1bf(0x371)][_0x56f1bf(0x2c1)],_0x1772b8=this[_0x56f1bf(0x29a)]()[_0x56f1bf(0x283)];_0x1772b8['match'](_0x44d564[_0x56f1bf(0x364)])&&this[_0x56f1bf(0x30f)]()[_0x56f1bf(0x1e2)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x26b)]=Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x2bf)],Game_BattlerBase['prototype'][_0x227a8c(0x2bf)]=function(){const _0x51964d=_0x227a8c;VisuMZ[_0x51964d(0x371)][_0x51964d(0x26b)][_0x51964d(0x2a6)](this),BattleManager['removeActionBattlersFTB'](),this[_0x51964d(0x2d7)]()[_0x51964d(0x294)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x1e8)]=Game_BattlerBase[_0x227a8c(0x2c6)]['appear'],Game_BattlerBase[_0x227a8c(0x2c6)]['appear']=function(){const _0x62511b=_0x227a8c;VisuMZ[_0x62511b(0x371)][_0x62511b(0x1e8)]['call'](this),BattleManager[_0x62511b(0x2c4)](),this['friendsUnit']()[_0x62511b(0x294)]();},VisuMZ['BattleSystemFTB'][_0x227a8c(0x1dc)]=Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x335)],Game_Battler['prototype']['performCollapse']=function(){const _0xd74550=_0x227a8c;VisuMZ[_0xd74550(0x371)][_0xd74550(0x1dc)]['call'](this),BattleManager[_0xd74550(0x2c4)](),this[_0xd74550(0x2d7)]()[_0xd74550(0x294)]();},Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x1e2)]=function(){const _0x481a30=_0x227a8c;this[_0x481a30(0x28c)]=!![],BattleManager[_0x481a30(0x2c4)]();},Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x340)]=function(){const _0x22cbdb=_0x227a8c;return!!this[_0x22cbdb(0x28c)];},Game_BattlerBase[_0x227a8c(0x311)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x2e1)][_0x227a8c(0x2df)],Game_BattlerBase[_0x227a8c(0x243)]=VisuMZ['BattleSystemFTB'][_0x227a8c(0x2dc)][_0x227a8c(0x2e1)][_0x227a8c(0x222)],Game_BattlerBase['_FTB_ACTION_AGI_DEBUFF']=VisuMZ[_0x227a8c(0x371)]['Settings'][_0x227a8c(0x2e1)][_0x227a8c(0x241)],Game_BattlerBase[_0x227a8c(0x2c6)]['ftbActionCount']=function(){const _0x1d7055=_0x227a8c;let _0x18fb92=Game_BattlerBase['_FTB_ACTION_BASE'];if(this[_0x1d7055(0x287)]===undefined)this[_0x1d7055(0x29d)]();const _0x41cba9=this[_0x1d7055(0x287)][0x6]||0x0;if(_0x41cba9>0x0&&Game_BattlerBase[_0x1d7055(0x243)])_0x18fb92+=_0x41cba9;else _0x41cba9<0x0&&Game_BattlerBase[_0x1d7055(0x2d9)]&&(_0x18fb92+=_0x41cba9);const _0x2fe2c6=VisuMZ['BattleSystemFTB'][_0x1d7055(0x2c1)],_0x5dd2dd=this['traitObjects']();for(const _0x5151fe of _0x5dd2dd){if(!_0x5151fe)continue;const _0x574007=_0x5151fe['note'];_0x574007[_0x1d7055(0x32e)](_0x2fe2c6[_0x1d7055(0x2bd)])&&(_0x18fb92+=Number(RegExp['$1']));}return Math[_0x1d7055(0x258)](0x0,_0x18fb92);},VisuMZ['BattleSystemFTB'][_0x227a8c(0x30c)]=Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x21b)],Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x21b)]=function(){const _0x2bfdd5=_0x227a8c;VisuMZ[_0x2bfdd5(0x371)][_0x2bfdd5(0x30c)][_0x2bfdd5(0x2a6)](this),this[_0x2bfdd5(0x2d7)]()['recalculateActionsFTB']();},VisuMZ[_0x227a8c(0x371)]['Game_BattlerBase_canUse']=Game_BattlerBase['prototype']['canUse'],Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x388)]=function(_0x592538){const _0x3797ce=_0x227a8c;if(SceneManager[_0x3797ce(0x28d)]()&&BattleManager[_0x3797ce(0x2c5)]()){const _0x577c84=DataManager[_0x3797ce(0x214)](_0x592538);if(_0x577c84>this[_0x3797ce(0x2d7)]()[_0x3797ce(0x1e5)]())return![];}return VisuMZ[_0x3797ce(0x371)]['Game_BattlerBase_canUse'][_0x3797ce(0x2a6)](this,_0x592538);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x251)]=Game_Battler['prototype'][_0x227a8c(0x28f)],Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x28f)]=function(_0x467aa8){const _0x3eb6b1=_0x227a8c;VisuMZ[_0x3eb6b1(0x371)][_0x3eb6b1(0x251)]['call'](this,_0x467aa8),this[_0x3eb6b1(0x30d)](_0x467aa8);},Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x30d)]=function(_0x507ba1){const _0x3a3915=_0x227a8c;if(!_0x507ba1)return;if(!SceneManager['isSceneBattle']())return;if(!BattleManager[_0x3a3915(0x2c5)]())return;const _0x5b0916=BattleManager[_0x3a3915(0x201)];if(_0x5b0916&&_0x5b0916['_forceAction'])return;const _0x1a3ff9=DataManager[_0x3a3915(0x214)](_0x507ba1);this[_0x3a3915(0x2d7)]()[_0x3a3915(0x2cf)](_0x1a3ff9);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x33a)]=Game_Battler['prototype'][_0x227a8c(0x255)],Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x255)]=function(){const _0x366a6a=_0x227a8c;this[_0x366a6a(0x23c)]=BattleManager[_0x366a6a(0x2c5)]()&&BattleManager[_0x366a6a(0x253)],VisuMZ['BattleSystemFTB'][_0x366a6a(0x33a)][_0x366a6a(0x2a6)](this),delete this[_0x366a6a(0x23c)];},VisuMZ[_0x227a8c(0x371)]['Game_BattlerBase_updateStateTurns']=Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x213)],Game_BattlerBase['prototype'][_0x227a8c(0x213)]=function(){const _0x528ee8=_0x227a8c;if(this[_0x528ee8(0x23c)])return;VisuMZ[_0x528ee8(0x371)][_0x528ee8(0x237)][_0x528ee8(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)]['Game_BattlerBase_updateBuffTurns']=Game_BattlerBase[_0x227a8c(0x2c6)][_0x227a8c(0x21a)],Game_BattlerBase['prototype'][_0x227a8c(0x21a)]=function(){const _0x4fa8b4=_0x227a8c;if(this[_0x4fa8b4(0x23c)])return;VisuMZ[_0x4fa8b4(0x371)]['Game_BattlerBase_updateBuffTurns']['call'](this);},VisuMZ[_0x227a8c(0x371)]['Game_Battler_addState']=Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x2b3)],Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x2b3)]=function(_0x48d548){const _0xe90e83=_0x227a8c;VisuMZ['BattleSystemFTB'][_0xe90e83(0x2e3)][_0xe90e83(0x2a6)](this,_0x48d548),this[_0xe90e83(0x2d7)]()[_0xe90e83(0x294)]();},VisuMZ[_0x227a8c(0x371)]['Game_Battler_removeState']=Game_Battler['prototype'][_0x227a8c(0x276)],Game_Battler['prototype'][_0x227a8c(0x276)]=function(_0x425b9a){const _0x38c1bd=_0x227a8c;VisuMZ[_0x38c1bd(0x371)][_0x38c1bd(0x315)]['call'](this,_0x425b9a),this[_0x38c1bd(0x2d7)]()[_0x38c1bd(0x294)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x31b)]=Game_Battler[_0x227a8c(0x2c6)]['addBuff'],Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x378)]=function(_0x817a75,_0x484974){const _0x1bcb78=_0x227a8c;VisuMZ[_0x1bcb78(0x371)]['Game_Battler_addBuff'][_0x1bcb78(0x2a6)](this,_0x817a75,_0x484974),this[_0x1bcb78(0x2d7)]()[_0x1bcb78(0x294)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x232)]=Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x229)],Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x229)]=function(_0x15e32a,_0x3085dc){const _0x59da65=_0x227a8c;VisuMZ[_0x59da65(0x371)][_0x59da65(0x232)][_0x59da65(0x2a6)](this,_0x15e32a,_0x3085dc),this[_0x59da65(0x2d7)]()['recalculateActionsFTB']();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x299)]=Game_Battler[_0x227a8c(0x2c6)]['removeBuff'],Game_Battler['prototype']['removeBuff']=function(_0x5b0d9e){const _0x323906=_0x227a8c;VisuMZ['BattleSystemFTB'][_0x323906(0x299)][_0x323906(0x2a6)](this,_0x5b0d9e),this[_0x323906(0x2d7)]()['recalculateActionsFTB']();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x28b)]=Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x24f)],Game_Battler['prototype'][_0x227a8c(0x24f)]=function(_0x57ce73,_0x32ea0d){const _0x34ee8=_0x227a8c;BattleManager[_0x34ee8(0x2c5)]()?this['forceActionFTB'](_0x57ce73,_0x32ea0d):VisuMZ[_0x34ee8(0x371)]['Game_Battler_forceAction']['call'](this,_0x57ce73,_0x32ea0d);},Game_Battler[_0x227a8c(0x2c6)][_0x227a8c(0x244)]=function(_0x59a8d0,_0x5c15a6){const _0x276640=_0x227a8c,_0x165ea1=new Game_Action(this,!![]);_0x165ea1['setSkill'](_0x59a8d0),_0x165ea1[_0x276640(0x35e)]=!![];if(_0x5c15a6===-0x2)_0x165ea1[_0x276640(0x295)](this[_0x276640(0x383)]);else _0x5c15a6===-0x1?_0x165ea1[_0x276640(0x354)]():_0x165ea1['setTarget'](_0x5c15a6);this[_0x276640(0x2e7)][_0x276640(0x20c)](_0x165ea1);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x275)]=BattleManager[_0x227a8c(0x24f)],BattleManager[_0x227a8c(0x24f)]=function(_0x1a7a4d){const _0xd789c6=_0x227a8c;BattleManager[_0xd789c6(0x2c5)]()?this['forceActionFTB'](_0x1a7a4d):VisuMZ[_0xd789c6(0x371)][_0xd789c6(0x275)][_0xd789c6(0x2a6)](this,_0x1a7a4d);},BattleManager[_0x227a8c(0x244)]=function(_0x57c213){const _0x284fd1=_0x227a8c,_0x47e172=JsonEx[_0x284fd1(0x29c)](_0x57c213[_0x284fd1(0x2f8)]());this[_0x284fd1(0x1e4)]['push']([_0x57c213,_0x47e172]);},VisuMZ['BattleSystemFTB'][_0x227a8c(0x2ab)]=Game_Actor['prototype'][_0x227a8c(0x289)],Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x289)]=function(){const _0x6a7660=_0x227a8c;if(BattleManager[_0x6a7660(0x2c5)]()){if(this[_0x6a7660(0x380)]())this['battler']()['stepForward']();return![];}return VisuMZ[_0x6a7660(0x371)]['Game_Actor_selectNextCommand'][_0x6a7660(0x2a6)](this);},VisuMZ[_0x227a8c(0x371)]['Game_Actor_changeEquip']=Game_Actor[_0x227a8c(0x2c6)]['changeEquip'],Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x38c)]=function(_0x14c82f,_0x3211e7){const _0x5d0185=_0x227a8c;VisuMZ[_0x5d0185(0x371)][_0x5d0185(0x313)][_0x5d0185(0x2a6)](this,_0x14c82f,_0x3211e7),this[_0x5d0185(0x2d7)]()['recalculateActionsFTB']();},VisuMZ[_0x227a8c(0x371)]['Game_Actor_forceChangeEquip']=Game_Actor[_0x227a8c(0x2c6)]['forceChangeEquip'],Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x1ef)]=function(_0x2ff762,_0x4e2cc4){const _0x239a5e=_0x227a8c;VisuMZ['BattleSystemFTB'][_0x239a5e(0x234)][_0x239a5e(0x2a6)](this,_0x2ff762,_0x4e2cc4),this[_0x239a5e(0x2d7)]()[_0x239a5e(0x294)]();},VisuMZ[_0x227a8c(0x371)]['Game_Actor_changeEquipById']=Game_Actor['prototype'][_0x227a8c(0x238)],Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x238)]=function(_0x4c46c9,_0x2272be){const _0x3eae54=_0x227a8c;VisuMZ[_0x3eae54(0x371)][_0x3eae54(0x26a)]['call'](this,_0x4c46c9,_0x2272be),this[_0x3eae54(0x2d7)]()['recalculateActionsFTB']();},VisuMZ[_0x227a8c(0x371)]['Game_Actor_discardEquip']=Game_Actor[_0x227a8c(0x2c6)]['discardEquip'],Game_Actor[_0x227a8c(0x2c6)]['discardEquip']=function(_0x26fc63){const _0x223f7e=_0x227a8c;VisuMZ['BattleSystemFTB'][_0x223f7e(0x272)][_0x223f7e(0x2a6)](this,_0x26fc63),this['friendsUnit']()['recalculateActionsFTB']();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x1cc)]=Game_Actor[_0x227a8c(0x2c6)]['releaseUnequippableItems'],Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x2b6)]=function(_0x37603b){const _0x51c815=_0x227a8c;VisuMZ['BattleSystemFTB'][_0x51c815(0x1cc)][_0x51c815(0x2a6)](this,_0x37603b),this['friendsUnit']()[_0x51c815(0x294)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x1f6)]=Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x316)],Game_Actor[_0x227a8c(0x2c6)][_0x227a8c(0x316)]=function(_0xef6938,_0x1cdeb7){const _0x13f6fe=_0x227a8c;VisuMZ['BattleSystemFTB'][_0x13f6fe(0x1f6)][_0x13f6fe(0x2a6)](this,_0xef6938,_0x1cdeb7),this[_0x13f6fe(0x2d7)]()[_0x13f6fe(0x294)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2bb)]=Game_Enemy[_0x227a8c(0x2c6)][_0x227a8c(0x318)],Game_Enemy['prototype'][_0x227a8c(0x318)]=function(_0xe52c68){const _0x3b287f=_0x227a8c;VisuMZ['BattleSystemFTB']['Game_Enemy_transform'][_0x3b287f(0x2a6)](this,_0xe52c68),this[_0x3b287f(0x2d7)]()['recalculateActionsFTB']();},Game_Unit[_0x227a8c(0x2e5)]=VisuMZ['BattleSystemFTB'][_0x227a8c(0x2dc)]['Mechanics'][_0x227a8c(0x252)],Game_Unit[_0x227a8c(0x1d4)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['Mechanics'][_0x227a8c(0x35c)],Game_Unit[_0x227a8c(0x25c)]=VisuMZ['BattleSystemFTB'][_0x227a8c(0x2dc)][_0x227a8c(0x2e1)]['AllowOverflow'],Game_Unit[_0x227a8c(0x2c6)]['startTurnFTB']=function(){const _0x272681=_0x227a8c;this[_0x272681(0x2cc)](),this[_0x272681(0x1fa)](this[_0x272681(0x370)]());},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x2cc)]=function(){const _0x5d3b0e=_0x227a8c;this[_0x5d3b0e(0x274)]=!![];let _0xdffb1c=0x0,_0x4313a7=this[_0x5d3b0e(0x1cd)]()['filter'](_0x187e08=>_0x187e08[_0x5d3b0e(0x1df)]());_0xdffb1c=_0x4313a7['reduce']((_0x13a3ca,_0xebb310)=>_0x13a3ca+_0xebb310[_0x5d3b0e(0x27b)](),_0xdffb1c),_0xdffb1c=_0xdffb1c['clamp'](Game_Unit[_0x5d3b0e(0x1d4)],Game_Unit[_0x5d3b0e(0x2e5)]),this['_ftbActionsMax']=_0xdffb1c;},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x294)]=function(){const _0x3dbf86=_0x227a8c;if(!BattleManager[_0x3dbf86(0x2c5)]())return;if(!$gameParty['inBattle']())return;const _0x419e21=this['getMaxActionsFTB']();this['createActionsFTB']();let _0xfe1871=this[_0x3dbf86(0x1e5)]();const _0x4f817d=this[_0x3dbf86(0x370)]()-_0x419e21;if(BattleManager['_FTB_RECALC_ADD_DIFF']&&_0x4f817d>0x0)_0xfe1871+=_0x4f817d;if(BattleManager[_0x3dbf86(0x1dd)]&&_0x4f817d<0x0)_0xfe1871+=_0x4f817d;_0xfe1871=Math[_0x3dbf86(0x206)](_0xfe1871,Game_Unit[_0x3dbf86(0x2e5)]),this[_0x3dbf86(0x1fa)](_0xfe1871);},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x1e5)]=function(){const _0x376440=_0x227a8c;return this[_0x376440(0x2f6)]||0x0;},Game_Unit['prototype']['setCurrentActionsFTB']=function(_0x1f9c01){const _0x28f270=_0x227a8c;this[_0x28f270(0x2f6)]=Math[_0x28f270(0x35b)](_0x1f9c01)[_0x28f270(0x37a)](0x0,Game_Unit[_0x28f270(0x2e5)]),!Game_Unit[_0x28f270(0x25c)]&&(this[_0x28f270(0x2f6)]=Math['min'](this['_ftbActionsCur'],this[_0x28f270(0x370)]()));},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x27a)]=function(_0x58f098){const _0xf6c93c=_0x227a8c;this['setCurrentActionsFTB'](this[_0xf6c93c(0x1e5)]()+_0x58f098);},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x242)]=function(_0x570242){this['gainCurrentActionsFTB'](-_0x570242);},Game_Unit[_0x227a8c(0x2c6)]['getMaxActionsFTB']=function(){return this['_ftbActionsMax']||0x0;},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x1f8)]=function(_0x17e3b6){const _0x42cc79=_0x227a8c;this[_0x42cc79(0x22c)]=_0x17e3b6[_0x42cc79(0x37a)](Game_Unit[_0x42cc79(0x1d4)],Game_Unit[_0x42cc79(0x2e5)]);},Game_Unit[_0x227a8c(0x2c6)]['reduceActionsFTB']=function(_0x3bf7f2){const _0x54b44f=_0x227a8c;this[_0x54b44f(0x242)](_0x3bf7f2);},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x1e3)]=function(){const _0x404c8b=_0x227a8c;if(BattleManager['_subject']){if(this[_0x404c8b(0x1d9)]()[_0x404c8b(0x37b)](BattleManager[_0x404c8b(0x247)])){const _0x4a14c4=BattleManager[_0x404c8b(0x247)]['currentAction']();if(_0x4a14c4&&_0x4a14c4[_0x404c8b(0x35e)])return!![];}}return this['_ftbActionsCur']=this[_0x404c8b(0x2f6)]||0x0,this[_0x404c8b(0x2f6)]>0x0;},Game_Unit['prototype'][_0x227a8c(0x1ff)]=function(){const _0x154e55=_0x227a8c;for(const _0x4d3b99 of this[_0x154e55(0x1d9)]()){if(!_0x4d3b99)continue;const _0x3e7039=_0x4d3b99[_0x154e55(0x348)]();_0x4d3b99[_0x154e55(0x255)](),_0x4d3b99[_0x154e55(0x32d)](),_0x3e7039&&_0x4d3b99[_0x154e55(0x36e)]()&&_0x4d3b99['performCollapse']();}},Game_Unit[_0x227a8c(0x2c6)]['meetEndTurnConditionsFTB']=function(){const _0x370225=_0x227a8c;if(this[_0x370225(0x1e5)]()<=0x0)return!![];if(!this['aliveMembers']()[_0x370225(0x2de)](_0x4b0b8d=>_0x4b0b8d['canMove']()))return!![];return![];},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x302)]=function(){const _0x15a960=_0x227a8c;for(const _0x2dadf5 of this[_0x15a960(0x1d9)]()){if(!_0x2dadf5)continue;_0x2dadf5[_0x15a960(0x213)](),_0x2dadf5[_0x15a960(0x1ec)](0x2),_0x2dadf5['updateBuffTurns'](),_0x2dadf5['startDamagePopup']();}},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x1d3)]=function(){const _0x2e98fe=_0x227a8c;for(const _0x1ea174 of this[_0x2e98fe(0x1d9)]()){if(!_0x1ea174)continue;_0x1ea174[_0x2e98fe(0x28c)]=![];}},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x27c)]=function(){const _0x4e3df7=_0x227a8c,_0x50c7ec=this[_0x4e3df7(0x1d9)]();return Math[_0x4e3df7(0x206)](..._0x50c7ec[_0x4e3df7(0x34f)](_0x5c4365=>_0x5c4365[_0x4e3df7(0x280)]));},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x37e)]=function(){const _0x53dd83=_0x227a8c,_0x16f51d=this[_0x53dd83(0x1d9)]();return Math['max'](..._0x16f51d[_0x53dd83(0x34f)](_0x1d70a0=>_0x1d70a0[_0x53dd83(0x280)]));},Game_Unit[_0x227a8c(0x2c6)]['ftbTotalAgility']=function(){const _0x4493c1=_0x227a8c,_0x7407a6=this[_0x4493c1(0x1d9)]();return _0x7407a6[_0x4493c1(0x1d7)]((_0x5c3ab0,_0x37793f)=>_0x5c3ab0+_0x37793f[_0x4493c1(0x280)],0x0);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2b4)]=Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x338)],Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x338)]=function(_0x368c4d){const _0x1e6eed=_0x227a8c;VisuMZ[_0x1e6eed(0x371)]['Game_Unit_onBattleStart'][_0x1e6eed(0x2a6)](this,_0x368c4d),BattleManager['isFTB']()&&(this[_0x1e6eed(0x29e)]=0x0);},Game_Unit[_0x227a8c(0x2c6)][_0x227a8c(0x2d4)]=function(){const _0x50aba6=_0x227a8c,_0x23b849=this['aliveMembers']();if(BattleManager['_FTB_RESET_INDEX'])return _0x23b849;if(BattleManager[_0x50aba6(0x261)])return _0x23b849;this['_ftbLastIndex']=this[_0x50aba6(0x29e)]||0x0;while(!_0x23b849[_0x50aba6(0x2de)](_0x545ea1=>_0x545ea1[_0x50aba6(0x21e)]()===this[_0x50aba6(0x29e)])){const _0x18b6ec=this[_0x50aba6(0x1d9)](),_0x3606c6=_0x18b6ec[this[_0x50aba6(0x29e)]];let _0x26ca64=_0x18b6ec['indexOf'](_0x3606c6)+0x1;if(_0x26ca64>=_0x18b6ec[_0x50aba6(0x20b)])_0x26ca64=0x0;this['_ftbLastIndex']=_0x26ca64;}for(;;){const _0x3fc6d6=_0x23b849[0x0][_0x50aba6(0x21e)]();if(_0x3fc6d6===this[_0x50aba6(0x29e)])break;_0x23b849['push'](_0x23b849[_0x50aba6(0x353)]());}return _0x23b849;},Game_Unit[_0x227a8c(0x2c6)]['setLastFtbIndex']=function(_0xc8fa87){const _0x2f5152=_0x227a8c;this[_0x2f5152(0x29e)]=_0xc8fa87?_0xc8fa87[_0x2f5152(0x21e)]():0x0,this['_ftbLastIndex']++;},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x1f5)]=Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x2d3)],Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x2d3)]=function(){const _0x57c62d=_0x227a8c;VisuMZ[_0x57c62d(0x371)][_0x57c62d(0x1f5)][_0x57c62d(0x2a6)](this),BattleManager['isFTB']()&&this[_0x57c62d(0x1ee)]();},Scene_Battle[_0x227a8c(0x2c6)]['createActorCommandWindowFTB']=function(){const _0x374820=_0x227a8c,_0x2b2288=this[_0x374820(0x2ea)];this[_0x374820(0x351)]()&&delete _0x2b2288[_0x374820(0x374)][_0x374820(0x319)];},VisuMZ[_0x227a8c(0x371)]['Scene_Battle_commandCancel']=Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x36b)],Scene_Battle['prototype']['commandCancel']=function(){const _0xecb7f0=_0x227a8c;BattleManager[_0xecb7f0(0x2c5)]()?this[_0xecb7f0(0x346)]():VisuMZ['BattleSystemFTB'][_0xecb7f0(0x1f7)]['call'](this);},Scene_Battle['prototype'][_0x227a8c(0x346)]=function(){const _0x6c26fd=_0x227a8c;this['_partyCommandWindow']['setup'](),this['_actorCommandWindow'][_0x6c26fd(0x2d6)]();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x320)]=Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x1e0)],Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x1e0)]=function(){const _0x58599c=_0x227a8c;BattleManager['isFTB']()?this['startActorCommandSelection']():VisuMZ[_0x58599c(0x371)]['Scene_Battle_commandFight'][_0x58599c(0x2a6)](this);},VisuMZ['BattleSystemFTB'][_0x227a8c(0x2f3)]=Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x2a0)],Scene_Battle['prototype']['createAllWindows']=function(){const _0x45a393=_0x227a8c;VisuMZ[_0x45a393(0x371)][_0x45a393(0x2f3)][_0x45a393(0x2a6)](this),this['createActionCountWindowsFTB']();},Scene_Battle[_0x227a8c(0x2c6)][_0x227a8c(0x391)]=function(){const _0xf5f31a=_0x227a8c;if(!BattleManager[_0xf5f31a(0x2c5)]())return;const _0x435704=this[_0xf5f31a(0x1f9)](this[_0xf5f31a(0x1f0)]);this[_0xf5f31a(0x254)]=new Window_FTB_ActionCount(),this[_0xf5f31a(0x254)][_0xf5f31a(0x22d)]($gameTroop),this['addChildAt'](this[_0xf5f31a(0x254)],_0x435704),this[_0xf5f31a(0x265)]=new Window_FTB_ActionCount(),this[_0xf5f31a(0x265)]['setUnit']($gameParty),this['addChildAt'](this[_0xf5f31a(0x265)],_0x435704),this[_0xf5f31a(0x21c)]();},Scene_Battle[_0x227a8c(0x2c6)]['repositionLogWindowFTB']=function(){const _0x4a3d6c=_0x227a8c;if(!BattleManager[_0x4a3d6c(0x2c5)]())return;if(!this[_0x4a3d6c(0x2ee)])return;const _0x576351=Window_FTB_ActionCount[_0x4a3d6c(0x2dc)];if(_0x576351[_0x4a3d6c(0x2fb)])return;this['_logWindow']['y']+=_0x576351[_0x4a3d6c(0x333)];},Window_Base[_0x227a8c(0x27f)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x211)][_0x227a8c(0x377)],Window_Base[_0x227a8c(0x2c2)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x211)][_0x227a8c(0x1ce)],Window_Base['_FTB_COST_SHOW_GUARD']=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)]['General'][_0x227a8c(0x23e)],Window_Base[_0x227a8c(0x24c)]=VisuMZ['BattleSystemFTB'][_0x227a8c(0x2dc)][_0x227a8c(0x211)][_0x227a8c(0x329)],Window_Base[_0x227a8c(0x36c)]=VisuMZ[_0x227a8c(0x371)]['Settings'][_0x227a8c(0x211)][_0x227a8c(0x345)],VisuMZ[_0x227a8c(0x371)]['Window_Base_makeAdditionalSkillCostText']=Window_Base[_0x227a8c(0x2c6)][_0x227a8c(0x1e6)],Window_Base['prototype'][_0x227a8c(0x1e6)]=function(_0x3499f6,_0x601131,_0x5d5c1f){const _0x140588=_0x227a8c;return _0x5d5c1f=VisuMZ['BattleSystemFTB'][_0x140588(0x31c)][_0x140588(0x2a6)](this,_0x3499f6,_0x601131,_0x5d5c1f),_0x5d5c1f=this[_0x140588(0x2e8)](_0x3499f6,_0x601131,_0x5d5c1f),_0x5d5c1f;},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x22a)]=Window_Base[_0x227a8c(0x2c6)]['drawItemNumber'],Window_Base[_0x227a8c(0x2c6)][_0x227a8c(0x28a)]=function(_0x4471e8,_0x10b87a,_0x12822b,_0x2d9b72){const _0x970975=_0x227a8c;BattleManager['isFTB']()&&this['constructor']===Window_BattleItem?this[_0x970975(0x2a1)](_0x4471e8,_0x10b87a,_0x12822b,_0x2d9b72):VisuMZ[_0x970975(0x371)][_0x970975(0x22a)][_0x970975(0x2a6)](this,_0x4471e8,_0x10b87a,_0x12822b,_0x2d9b72),this[_0x970975(0x202)]();},Window_Base[_0x227a8c(0x2c6)][_0x227a8c(0x2a1)]=function(_0x55ea6e,_0x550318,_0x3372a4,_0x428e05){const _0x16a478=_0x227a8c,_0x13a065=BattleManager[_0x16a478(0x2a3)]||$gameParty[_0x16a478(0x1d9)]()[0x0],_0x2ab925=this[_0x16a478(0x2e8)](_0x13a065,_0x55ea6e,''),_0x46dc00=this[_0x16a478(0x220)](_0x2ab925)[_0x16a478(0x307)],_0x1bddd6=Window_Base[_0x16a478(0x27f)];let _0x1f37a3=_0x550318+_0x428e05-_0x46dc00;if(_0x2ab925==='')VisuMZ[_0x16a478(0x371)][_0x16a478(0x22a)]['call'](this,_0x55ea6e,_0x550318,_0x3372a4,_0x428e05);else{if(this[_0x16a478(0x27e)](_0x55ea6e)){this[_0x16a478(0x202)]();const _0x36fd9e=VisuMZ['ItemsEquipsCore']['Settings']['ItemScene'];this[_0x16a478(0x359)]['fontSize']=_0x36fd9e[_0x16a478(0x2eb)];if(_0x1bddd6){const _0xccd12f=_0x36fd9e[_0x16a478(0x352)],_0x55ea36=_0xccd12f[_0x16a478(0x2b8)]($gameParty[_0x16a478(0x1d2)](_0x55ea6e)),_0x24a997=this[_0x16a478(0x205)](_0x55ea36+this['skillCostSeparator']());_0x1f37a3-=_0x24a997;}else _0x428e05-=this[_0x16a478(0x205)](this[_0x16a478(0x2b7)]())+_0x46dc00;VisuMZ[_0x16a478(0x371)][_0x16a478(0x22a)][_0x16a478(0x2a6)](this,_0x55ea6e,_0x550318,_0x3372a4,_0x428e05);}}this['drawTextEx'](_0x2ab925,_0x1f37a3,_0x3372a4);},Window_Base['prototype'][_0x227a8c(0x2e8)]=function(_0x30bc5c,_0x3f572e,_0x325a27){const _0x4edf42=_0x227a8c;if(!BattleManager[_0x4edf42(0x2c5)]())return _0x325a27;if(!_0x30bc5c)return _0x325a27;if(!_0x3f572e)return _0x325a27;if(_0x3f572e[_0x4edf42(0x283)]['match'](VisuMZ[_0x4edf42(0x371)][_0x4edf42(0x2c1)]['HideActionPointCost']))return _0x325a27;let _0x3d4e32=DataManager[_0x4edf42(0x214)](_0x3f572e);const _0x46baea=Window_Base['_FTB_COST_POSITION'],_0x4f47f7=Window_Base[_0x4edf42(0x2c2)],_0x38fbaf=Window_Base[_0x4edf42(0x1fd)],_0x50a66d=Window_Base[_0x4edf42(0x24c)],_0x54137b=Window_Base['_FTB_COST_SHOW_1'];if(_0x3f572e[_0x4edf42(0x283)][_0x4edf42(0x32e)](VisuMZ[_0x4edf42(0x371)][_0x4edf42(0x2c1)]['ShowActionPointCost'])){if(_0x3d4e32<0x0)return _0x325a27;}else{if(DataManager[_0x4edf42(0x309)](_0x3f572e)&&this['constructor']===Window_ActorCommand){if(!_0x4f47f7&&_0x3f572e['id']===_0x30bc5c[_0x4edf42(0x349)]())return _0x325a27;if(!_0x38fbaf&&_0x3f572e['id']===_0x30bc5c[_0x4edf42(0x290)]())return _0x325a27;}if(_0x3d4e32<0x0)return _0x325a27;if(!_0x50a66d&&_0x3d4e32===0x0)return _0x325a27;if(!_0x54137b&&_0x3d4e32===0x1)return _0x325a27;}const _0x5661cf='\x5cI[%1]'['format'](ImageManager[_0x4edf42(0x2f0)]),_0x591a4b=TextManager[_0x4edf42(0x2cd)];let _0x1fb387=TextManager[_0x4edf42(0x312)][_0x4edf42(0x2b8)](_0x3d4e32,_0x591a4b,_0x5661cf);if(_0x325a27==='')_0x325a27+=_0x1fb387;else _0x46baea?_0x325a27=_0x1fb387+this['skillCostSeparator']()+_0x325a27:_0x325a27=_0x325a27+this[_0x4edf42(0x2b7)]()+_0x1fb387;return _0x325a27;},VisuMZ[_0x227a8c(0x371)]['Window_Help_setItem']=Window_Help[_0x227a8c(0x2c6)][_0x227a8c(0x288)],Window_Help[_0x227a8c(0x2c6)][_0x227a8c(0x288)]=function(_0x54cb94){const _0x425a24=_0x227a8c;BattleManager[_0x425a24(0x2c5)]()&&_0x54cb94&&_0x54cb94[_0x425a24(0x283)]&&_0x54cb94[_0x425a24(0x283)][_0x425a24(0x32e)](/<(?:FTB) HELP>\s*([\s\S]*)\s*<\/(?:FTB) HELP>/i)?this[_0x425a24(0x334)](String(RegExp['$1'])):VisuMZ[_0x425a24(0x371)][_0x425a24(0x2c9)][_0x425a24(0x2a6)](this,_0x54cb94);},Window_Selectable[_0x227a8c(0x2c6)][_0x227a8c(0x217)]=function(){const _0x34b55d=_0x227a8c;return this['constructor']===Window_ActorCommand&&BattleManager[_0x34b55d(0x2c5)]()&&BattleManager[_0x34b55d(0x261)];},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x269)]=Window_Selectable[_0x227a8c(0x2c6)]['cursorRight'],Window_Selectable[_0x227a8c(0x2c6)]['cursorRight']=function(_0xbff08b){const _0x17ca7e=_0x227a8c;this['ftbFreeRangeSwitch']()&&this['maxCols']()===0x1?this[_0x17ca7e(0x342)](!![]):VisuMZ[_0x17ca7e(0x371)][_0x17ca7e(0x269)][_0x17ca7e(0x2a6)](this,_0xbff08b);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x263)]=Window_Selectable['prototype']['cursorLeft'],Window_Selectable[_0x227a8c(0x2c6)]['cursorLeft']=function(_0x49abd6){const _0x27ca4e=_0x227a8c;this['ftbFreeRangeSwitch']()&&this[_0x27ca4e(0x381)]()===0x1?this[_0x27ca4e(0x342)](![]):VisuMZ[_0x27ca4e(0x371)]['Window_Selectable_cursorLeft'][_0x27ca4e(0x2a6)](this,_0x49abd6);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x392)]=Window_Selectable[_0x227a8c(0x2c6)][_0x227a8c(0x337)],Window_Selectable['prototype'][_0x227a8c(0x337)]=function(){const _0x407064=_0x227a8c;this[_0x407064(0x217)]()?this[_0x407064(0x342)](!![]):VisuMZ['BattleSystemFTB'][_0x407064(0x392)]['call'](this);},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2a5)]=Window_Selectable[_0x227a8c(0x2c6)]['cursorPageup'],Window_Selectable[_0x227a8c(0x2c6)][_0x227a8c(0x350)]=function(){const _0x1f7f2e=_0x227a8c;this[_0x1f7f2e(0x217)]()?this[_0x1f7f2e(0x342)](![]):VisuMZ[_0x1f7f2e(0x371)][_0x1f7f2e(0x2a5)]['call'](this);},Window_ActorCommand[_0x227a8c(0x2c6)][_0x227a8c(0x342)]=function(_0x298336){const _0x18c7ff=_0x227a8c,_0x520b08=BattleManager['_currentActor'];let _0x24684f=$gameParty['battleMembers']()['indexOf'](_0x520b08);const _0x4b5dae=$gameParty[_0x18c7ff(0x20f)]()['length']-0x1;let _0x542398=$gameParty[_0x18c7ff(0x20f)]()[_0x24684f];for(;;){_0x24684f+=_0x298336?0x1:-0x1;if(_0x24684f<0x0)_0x24684f=_0x4b5dae;if(_0x24684f>_0x4b5dae)_0x24684f=0x0;_0x542398=$gameParty[_0x18c7ff(0x20f)]()[_0x24684f];if(_0x542398&&_0x542398['canInput']()&&!_0x542398[_0x18c7ff(0x340)]())break;if(_0x542398===_0x520b08)break;}this[_0x18c7ff(0x357)](_0x520b08,_0x542398);},Window_ActorCommand['prototype']['processSwitchActors']=function(_0x5bcaf0,_0x35f033){const _0x1a2b54=_0x227a8c;if(_0x5bcaf0===_0x35f033)return;if(_0x5bcaf0[_0x1a2b54(0x380)]())_0x5bcaf0[_0x1a2b54(0x380)]()['stepBack']();this[_0x1a2b54(0x249)](),BattleManager['_subject']=_0x35f033,BattleManager[_0x1a2b54(0x332)]=_0x35f033,BattleManager['startActorInput'](),SceneManager['_scene']['startActorCommandSelection']();},VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x29f)]=Window_Selectable[_0x227a8c(0x2c6)]['processTouch'],Window_Selectable[_0x227a8c(0x2c6)][_0x227a8c(0x215)]=function(){const _0x183213=_0x227a8c;BattleManager[_0x183213(0x2c5)]()&&BattleManager['_FTB_FREE_CHANGE']&&this['constructor']===Window_BattleStatus?this['processTouchFTB']():VisuMZ['BattleSystemFTB'][_0x183213(0x29f)][_0x183213(0x2a6)](this);},Window_BattleStatus[_0x227a8c(0x2c6)][_0x227a8c(0x387)]=function(){const _0x16895c=_0x227a8c;this[_0x16895c(0x2f4)]()&&(TouchInput[_0x16895c(0x240)]()&&this[_0x16895c(0x327)](!![]));},Window_BattleStatus[_0x227a8c(0x2c6)][_0x227a8c(0x327)]=function(_0x4d762d){const _0x19cad8=_0x227a8c,_0x9ce563=SceneManager[_0x19cad8(0x367)][_0x19cad8(0x2ea)];if(!_0x9ce563)return;if(!_0x9ce563[_0x19cad8(0x38a)])return;this[_0x19cad8(0x1d8)]=![];const _0x47385a=this[_0x19cad8(0x21e)](),_0x40214e=this[_0x19cad8(0x324)]();if(_0x40214e>=0x0){const _0x40acc9=$gameParty[_0x19cad8(0x20f)]()[_0x47385a],_0x2ff476=$gameParty[_0x19cad8(0x20f)]()[_0x40214e];this[_0x19cad8(0x2db)](_0x2ff476)&&(_0x40214e===this[_0x19cad8(0x21e)]()&&(this[_0x19cad8(0x1d8)]=!![]),this[_0x19cad8(0x37f)](_0x40214e),_0x9ce563[_0x19cad8(0x357)](_0x40acc9,_0x2ff476));}},Window_BattleStatus[_0x227a8c(0x2c6)]['canActorBeSelectedFTB']=function(_0x555ea6){const _0xf829dd=_0x227a8c;if(!_0x555ea6)return![];if(!_0x555ea6['canMove']())return![];if(!_0x555ea6[_0xf829dd(0x23a)]())return![];if(_0x555ea6[_0xf829dd(0x340)]())return![];return!![];};function Window_FTB_ActionCount(){const _0x49057b=_0x227a8c;this[_0x49057b(0x20a)](...arguments);}Window_FTB_ActionCount[_0x227a8c(0x2c6)]=Object[_0x227a8c(0x341)](Window_Base[_0x227a8c(0x2c6)]),Window_FTB_ActionCount[_0x227a8c(0x2c6)]['constructor']=Window_FTB_ActionCount,Window_FTB_ActionCount[_0x227a8c(0x2dc)]=VisuMZ[_0x227a8c(0x371)][_0x227a8c(0x2dc)][_0x227a8c(0x323)],Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x20a)]=function(){const _0x283609=_0x227a8c,_0xefdaf3=this[_0x283609(0x31a)]();Window_Base[_0x283609(0x2c6)]['initialize'][_0x283609(0x2a6)](this,_0xefdaf3),this[_0x283609(0x228)](0x0),this['initMembers'](),this[_0x283609(0x29b)]=0x0;},Window_FTB_ActionCount['prototype'][_0x227a8c(0x31a)]=function(){const _0x416852=_0x227a8c;return new Rectangle(0x0,0x0,Graphics[_0x416852(0x307)],Graphics[_0x416852(0x212)]);},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x314)]=function(){const _0x241024=_0x227a8c;this[_0x241024(0x256)]=null,this['_currentActions']=0x0,this[_0x241024(0x35d)]=0x0;const _0x3c23a0=Window_FTB_ActionCount['Settings'];this[_0x241024(0x248)]={'ActorPicture':_0x3c23a0['ActorActionPicture']?ImageManager[_0x241024(0x224)](_0x3c23a0['ActorActionPicture']):'','EnemyPicture':_0x3c23a0[_0x241024(0x1e9)]?ImageManager[_0x241024(0x224)](_0x3c23a0[_0x241024(0x1e9)]):'','EmptyPicture':_0x3c23a0['EmptyActionPicture']?ImageManager[_0x241024(0x224)](_0x3c23a0[_0x241024(0x2a9)]):''};},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x2ae)]=function(){this['padding']=0x0;},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x22d)]=function(_0x2ebab0){const _0x3b0c27=_0x227a8c;this[_0x3b0c27(0x256)]=_0x2ebab0,this[_0x3b0c27(0x26e)]();},Window_FTB_ActionCount['prototype'][_0x227a8c(0x26e)]=function(){const _0x3d4caf=_0x227a8c;Window_Base[_0x3d4caf(0x2c6)][_0x3d4caf(0x26e)]['call'](this),this['checkNeedsUpdate'](),this[_0x3d4caf(0x2c7)](),this[_0x3d4caf(0x2f1)]();},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x321)]=function(){const _0x40eb71=_0x227a8c;if(!this[_0x40eb71(0x256)])return;(this['_currentActions']!==this[_0x40eb71(0x256)][_0x40eb71(0x1e5)]()||this['_maxActions']!==this[_0x40eb71(0x256)][_0x40eb71(0x370)]())&&(this[_0x40eb71(0x2ec)]=this[_0x40eb71(0x256)][_0x40eb71(0x1e5)](),this[_0x40eb71(0x35d)]=this[_0x40eb71(0x256)][_0x40eb71(0x370)](),this[_0x40eb71(0x331)]());},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x2f1)]=function(){const _0x49690c=_0x227a8c;this['visible']=$gameSystem[_0x49690c(0x382)]();},Window_FTB_ActionCount['prototype']['refresh']=function(){const _0x5ecd03=_0x227a8c;this['contents']['clear']();if(!this['_unit'])return;const _0x43ab28=Window_FTB_ActionCount[_0x5ecd03(0x2dc)];if(!_0x43ab28)return;const _0x168c8b=this['createStartingCoordinates'](),_0x41c27c=this[_0x5ecd03(0x225)](),_0x1a9272=_0x43ab28['ImageSize']+_0x43ab28[_0x5ecd03(0x393)],_0x4318b4=_0x43ab28[_0x5ecd03(0x1fb)];let _0x5df63e=_0x168c8b['x'],_0xe6a4d8=_0x168c8b['y'];while(_0x41c27c[_0x5ecd03(0x20b)]>_0x43ab28[_0x5ecd03(0x2fa)]){_0x41c27c['shift']();}while(_0x41c27c[_0x5ecd03(0x20b)]>0x0){const _0x1a407a=_0x41c27c[_0x5ecd03(0x353)]();this[_0x5ecd03(0x278)](_0x1a407a,_0x5df63e,_0xe6a4d8,_0x41c27c[_0x5ecd03(0x20b)]),_0x4318b4?_0x5df63e+=_0x1a9272:_0xe6a4d8+=_0x1a9272;}},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x207)]=function(){const _0xda4896=_0x227a8c,_0x7dbd6=Window_FTB_ActionCount['Settings'],_0x2aba7c=this[_0xda4896(0x256)]===$gameParty,_0x16b819=_0x7dbd6[_0xda4896(0x245)],_0x232497=_0x16b819*(_0x7dbd6['MaxVisible']-0x1)+_0x7dbd6[_0xda4896(0x393)]*(_0x7dbd6[_0xda4896(0x2fa)]-0x2),_0xefdbf2=_0x7dbd6[_0xda4896(0x1fb)],_0x5c56f3=SceneManager[_0xda4896(0x367)][_0xda4896(0x293)][_0xda4896(0x212)];let _0x22318e=0x0,_0x54ba81=0x0;const _0x28df3f=_0x7dbd6[_0xda4896(0x2fb)];if(_0x28df3f){_0x54ba81=this[_0xda4896(0x328)]-_0x5c56f3-_0x7dbd6['ScreenBufferY']-_0x16b819,_0x22318e=_0x2aba7c?this[_0xda4896(0x2f9)]-_0x7dbd6[_0xda4896(0x1d5)]-_0x16b819:_0x7dbd6['ScreenBufferX'];if(_0xefdbf2&&_0x2aba7c)_0x22318e-=_0x232497;else!_0xefdbf2&&(_0x54ba81-=_0x232497);}else _0x54ba81=_0x7dbd6[_0xda4896(0x389)],_0x22318e=_0x2aba7c?this[_0xda4896(0x2f9)]-_0x7dbd6['ScreenBufferX']-_0x16b819:_0x7dbd6[_0xda4896(0x1d5)],_0xefdbf2&&_0x2aba7c&&(_0x22318e-=_0x232497);return _0x22318e+=_0x2aba7c?_0x7dbd6[_0xda4896(0x347)]:_0x7dbd6[_0xda4896(0x336)],_0x54ba81+=_0x2aba7c?_0x7dbd6[_0xda4896(0x2e0)]:_0x7dbd6[_0xda4896(0x216)],new Point(Math['round'](_0x22318e),Math['round'](_0x54ba81));},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x225)]=function(){const _0x4034a6=_0x227a8c,_0x135dc4=Window_FTB_ActionCount['Settings'];let _0x2b60de=!![];if(_0x135dc4['DrawHorz']){if(this[_0x4034a6(0x256)]===$gameParty)_0x2b60de=!_0x2b60de;}else _0x2b60de=!_0x135dc4[_0x4034a6(0x2fb)];let _0x9ead24=this[_0x4034a6(0x256)]['getCurrentActionsFTB'](),_0x1c7649=Math[_0x4034a6(0x258)](0x0,this[_0x4034a6(0x256)]['getMaxActionsFTB']()-_0x9ead24);const _0x300d7a=[];while(_0x9ead24--){const _0xe957b=_0x4034a6(0x2cb);_0x300d7a['push'](_0xe957b);}while(_0x1c7649--){const _0x56f1f0=_0x4034a6(0x2a4);_0x2b60de?_0x300d7a[_0x4034a6(0x37d)](_0x56f1f0):_0x300d7a[_0x4034a6(0x20c)](_0x56f1f0);}while(_0x300d7a[_0x4034a6(0x20b)]<0xa){const _0x16c6cd=_0x4034a6(0x2fd);_0x2b60de?_0x300d7a[_0x4034a6(0x37d)](_0x16c6cd):_0x300d7a[_0x4034a6(0x20c)](_0x16c6cd);}return _0x300d7a;},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x278)]=function(_0x2f1df5,_0x1d296c,_0x2299ff,_0x555b48){const _0x58f8db=_0x227a8c;if(_0x2f1df5===_0x58f8db(0x2fd))return;if(_0x2f1df5===_0x58f8db(0x2cb))_0x2f1df5=this['_unit']===$gameParty?'Actor':_0x58f8db(0x298);const _0x4b80a9=Window_FTB_ActionCount['Settings'];if(_0x4b80a9[_0x58f8db(0x355)[_0x58f8db(0x2b8)](_0x2f1df5)]){const _0xf9098e=_0x4b80a9['%1ActionPicture'['format'](_0x2f1df5)],_0x12cdf8=ImageManager[_0x58f8db(0x224)](_0xf9098e);_0x12cdf8['addLoadListener'](this[_0x58f8db(0x2b0)][_0x58f8db(0x1f3)](this,_0x12cdf8,_0x1d296c,_0x2299ff,_0x555b48));}else{const _0x3e0d24=ImageManager[_0x58f8db(0x26c)[_0x58f8db(0x2b8)](_0x2f1df5)];this['drawBigIcon'](_0x3e0d24,_0x1d296c,_0x2299ff),this[_0x58f8db(0x310)](_0x555b48)&&this['drawActionsRemaining'](_0x1d296c,_0x2299ff);}},Window_FTB_ActionCount['prototype'][_0x227a8c(0x2b0)]=function(_0x53345e,_0x379bd9,_0x545a13,_0x16220c){const _0x31d749=_0x227a8c;if(!_0x53345e)return;const _0x218361=Window_FTB_ActionCount[_0x31d749(0x2dc)],_0x32c599=_0x218361[_0x31d749(0x245)],_0x59894d=_0x32c599/_0x53345e['width'],_0x36e41c=_0x32c599/_0x53345e[_0x31d749(0x212)],_0x300425=Math[_0x31d749(0x206)](_0x59894d,_0x36e41c,0x1),_0x17122a=_0x53345e[_0x31d749(0x212)],_0x5c1e4c=_0x53345e[_0x31d749(0x212)],_0x267e57=Math[_0x31d749(0x35b)](_0x17122a*_0x300425),_0x4c3b4c=Math[_0x31d749(0x35b)](_0x5c1e4c*_0x300425),_0x49d55d=Math['round'](_0x379bd9+(_0x32c599-_0x267e57)/0x2),_0x5b3b60=Math[_0x31d749(0x35b)](_0x545a13+(_0x32c599-_0x4c3b4c)/0x2);this[_0x31d749(0x359)]['_context'][_0x31d749(0x38e)]=_0x218361[_0x31d749(0x304)],this['contents'][_0x31d749(0x267)](_0x53345e,0x0,0x0,_0x17122a,_0x5c1e4c,_0x49d55d,_0x5b3b60,_0x267e57,_0x4c3b4c),this[_0x31d749(0x359)][_0x31d749(0x273)][_0x31d749(0x38e)]=!![],this[_0x31d749(0x310)](_0x16220c)&&this['drawActionsRemaining'](_0x379bd9,_0x545a13);},Window_FTB_ActionCount['prototype'][_0x227a8c(0x34d)]=function(_0xd0ccef,_0x432994,_0x3d2be4){const _0x2a80c9=_0x227a8c,_0x4d3df0=Window_FTB_ActionCount[_0x2a80c9(0x2dc)];let _0x247502=_0x4d3df0['ImageSize'];const _0x1d2644=ImageManager[_0x2a80c9(0x365)](_0x2a80c9(0x38f)),_0x548036=ImageManager[_0x2a80c9(0x264)],_0x25d381=ImageManager[_0x2a80c9(0x31f)],_0x466284=_0xd0ccef%0x10*_0x548036,_0x3edb8=Math['floor'](_0xd0ccef/0x10)*_0x25d381;this[_0x2a80c9(0x359)]['_context'][_0x2a80c9(0x38e)]=_0x4d3df0['IconSmoothing'],this['contents'][_0x2a80c9(0x267)](_0x1d2644,_0x466284,_0x3edb8,_0x548036,_0x25d381,_0x432994,_0x3d2be4,_0x247502,_0x247502),this['contents']['_context'][_0x2a80c9(0x38e)]=!![];},Window_FTB_ActionCount[_0x227a8c(0x2c6)]['updatePosition']=function(){const _0x449272=_0x227a8c,_0x755c5c=Window_FTB_ActionCount['Settings'];if(_0x755c5c[_0x449272(0x2fb)])return;if(!_0x755c5c[_0x449272(0x279)])return;const _0x21bd65=SceneManager[_0x449272(0x367)][_0x449272(0x21d)];if(!_0x21bd65)return;_0x21bd65[_0x449272(0x2ef)]?(this['x']=_0x755c5c[_0x449272(0x2d1)]||0x0,this['y']=_0x755c5c[_0x449272(0x285)]||0x0):(this['x']=0x0,this['y']=0x0);},Window_FTB_ActionCount['prototype'][_0x227a8c(0x310)]=function(_0x41328f){const _0x430625=_0x227a8c,_0x4ded36=Window_FTB_ActionCount[_0x430625(0x2dc)];if(!_0x4ded36[_0x430625(0x386)])return![];const _0xe2ef2f=_0x4ded36[_0x430625(0x2fb)],_0x53682a=_0x4ded36['DrawHorz'],_0x2b987b=this[_0x430625(0x256)]===$gameParty;if(_0x53682a)return _0x2b987b?_0x41328f===0x0:_0x41328f===_0x4ded36[_0x430625(0x2fa)]-0x1;else return _0xe2ef2f?_0x41328f===0x0:_0x41328f===_0x4ded36['MaxVisible']-0x1;},Window_FTB_ActionCount[_0x227a8c(0x2c6)][_0x227a8c(0x2ac)]=function(_0x1f15c7,_0x68bd5e){const _0x52eb90=_0x227a8c;this[_0x52eb90(0x202)]();const _0x1f85e6=Window_FTB_ActionCount[_0x52eb90(0x2dc)],_0x52e9e6=new Rectangle(_0x1f15c7,_0x68bd5e,_0x1f85e6[_0x52eb90(0x245)],_0x1f85e6[_0x52eb90(0x245)]);_0x52e9e6['x']+=_0x1f85e6['ActionsRemainingOffsetX'],_0x52e9e6['y']+=_0x1f85e6['ActionsRemainingOffsetY'];const _0x29a00d=this[_0x52eb90(0x256)][_0x52eb90(0x1e5)]();this['contents'][_0x52eb90(0x239)]=_0x1f85e6[_0x52eb90(0x2e2)],this[_0x52eb90(0x359)][_0x52eb90(0x20d)](_0x29a00d,_0x52e9e6['x'],_0x52e9e6['y'],_0x52e9e6[_0x52eb90(0x307)],_0x52e9e6[_0x52eb90(0x212)],'center'),this[_0x52eb90(0x202)]();};