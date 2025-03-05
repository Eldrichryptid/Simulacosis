//=============================================================================
// VisuStella MZ - Party System
// VisuMZ_2_PartySystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PartySystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PartySystem = VisuMZ.PartySystem || {};
VisuMZ.PartySystem.version = 1.32;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.32] [PartySystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Party_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ only gives game projects the ability to switch party members
 * within the main menu and nothing more. There's no inherent functionality to
 * lock party members, make party members required, and/or give players the
 * ability to switch party members mid-battle.
 *
 * This plugin will add in all of those functions as well as a dedicated scene
 * for switching party members. Party switching will allow party members to be
 * removed, swapped, and sorted. Through the usage of Plugin Commands, party
 * members can also be locked and/or required for party presence.
 *
 * Those using the VisuStella MZ Battle Core will also have access to features
 * in this plugin that aren't available otherwise. These features give players
 * the functionality to switch out the whole party lineup mid-battle and/or
 * individual party member switching.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Custom scene dedicated to party management.
 * * Change the maximum number of party members that can participate in battle.
 * * Plugin Commands to lock party members.
 * * Plugin Commands to make certain party members required.
 * * Added functionality with Battle Core to switch party members mid-battle.
 * * This comes in the form of changing either the whole party at once.
 * * Or switching individual members out one at a time.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
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
 * Main Menu Formation Command
 *
 * - This command is now changed to send the player to Scene_Party for the
 * player to have a dedicated scene for changing the party.
 *
 * ---
 *
 * Battle Members Array
 *
 * - Previously, the battle members are decided by which actors are lined up
 * first in the party roster. This has been changed to give players the freedom
 * to have a party size less than the maximum. This change is made by changing
 * the way the battle members are determined by using a new array. However, any
 * and all functions utilize the $gameParty.battleMembers() function will still
 * behave as normal.
 *
 * ---
 *
 * Formation Change OK Function
 *
 * - RPG Maker MZ did not do anything with the Game_Actor.isFormationChangeOk
 * function so this plugin overwrote it completely to allow for the new
 * lock and require features to work.
 *
 * ---
 * 
 * Temporary Parties
 * 
 * Temporary parties are very specific parties that will overwrite whatever the
 * player has set as a party. These can include current party members or even
 * actors that haven't joined. The temporary party cannot be changed nor can
 * the positions of said party members can be changed.
 * 
 * When a temporary party is present, menu and battle commands involving
 * changing party members will be disabled.
 * 
 * Once the temporary party is disbanded, the player's selected party will be
 * available once again as well as all of the functions to change party members
 * and their positions.
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
 * VisuMZ_1_BattleCore
 *
 * - If the VisuStella MZ Battle Core plugin is present, players are able to 
 * access party switching functionality mid-battle at will. This can be in the
 * form of switching out the entire active party roster at once or individually
 * for each actor.
 *
 * - Switching Entire Rosters: This can be done by going into this plugin's
 * Plugin Parameters => General => Party Command Window => Add Party Command.
 * If the Party Command Window is accessible, the player will be able to see
 * the option between 'Auto Battle' and 'Options'.
 *
 * - Individual Member Switching: This requires going to VisuMZ_1_BattleCore's
 * Plugin Parameters => Actor Command Window => Battle Commands => Command List
 * and add in the "party" option. The "party" option can also be added to the
 * <Battle Commands> notetag.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_BattleSystemOTB
 * 
 * With Battle System - OTB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Order Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
 * 
 * ---
 * 
 * VisuMZ_2_BattleSystemSTB
 * 
 * With Battle System - STB, the player cannot change entire parties at once
 * from the Party Command Window. The feature will be unaccessible while
 * Standard Turn Battle is in play. However, the player can still change party
 * members through the Actor Command Window by having actors replace other
 * actors. Party changing is also available through battle events, Common
 * Events, and script calls.
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
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Call Party Scene
 * - Calls the party changing scene.
 *
 * ---
 *
 * Party: Change Max Battle Members
 * - Changes the number of max battle members possible.
 * - Cannot be use mid-battle.
 *
 *   Max Members:
 *   - Changes the number of max battle members possible.
 *   - Use 0 for the game's default number.
 *
 * ---
 *
 * Party: Lock/Unlock Member(s)
 * - Allows you to lock/unlock a party member.
 * - Locked actors cannot change their party position.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to lock/unlock.
 *   - Locked actors cannot change their party position.
 *
 *   Lock?:
 *   - Lock the selected actor(s)?
 *
 * ---
 * 
 * Party: Move Actor(s) to Active
 * - Map Only.
 * - Moves an actor to the active party if there is room.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the active party if there is room.
 * 
 * ---
 * 
 * Party: Move Actor(s) to Reserve
 * - Map Only.
 * - Moves an actor to the reserve party.
 * - Must be 1 actor left.
 * - The actor needs to have joined the party.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to move to the reserve party.
 * 
 * ---
 * 
 * Party: Move Party Index to Reserve
 * - Map only.
 * - Moves an actor in a specific party index to reserve.
 * - Must be 1 actor left.
 * 
 *   Index:
 *   - Type in which index to move.
 *   - Index values start at 0.
 *   - You may use JavaScript code.
 * 
 * ---
 * 
 * Party: Move Random Reserve to Active
 * - Map only.
 * - Moves a random actor from the reserve party to active.
 * - Must be enough space in active party.
 * 
 * ---
 *
 * Party: Require Member(s)
 * - Allows you to require/free a party member.
 * - Required actors must be in the party to exit the scene.
 *
 *   Actor ID(s):
 *   - Select which actor(s) to require/free.
 *   - Required actors must be in the party to exit the scene.
 *
 *   Require?:
 *   - Make the selected actor(s) required?
 *
 * ---
 * 
 * === Temporary Parties Plugin Commands ===
 * 
 * Temporary parties are very specific parties that will overwrite whatever the
 * player has set as a party. These can include current party members or even
 * actors that haven't joined. The temporary party cannot be changed nor can
 * the positions of said party members can be changed.
 * 
 * When a temporary party is present, menu and battle commands involving
 * changing party members will be disabled.
 * 
 * Once the temporary party is disbanded, the player's selected party will be
 * available once again as well as all of the functions to change party members
 * and their positions.
 * 
 * ---
 * 
 * Temp: Create Temporary Party (Normal)
 * - Creates a temporary party with specific actors.
 * - Can't be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which actor(s) to be added to the temporary party until the
 *     temporary party is disbanded.
 * 
 * ---
 * 
 * Temp: Create Temporary Party (JS)
 * - Creates a temporary party selected with JavaScript.
 * - Can't be used in battle.
 * 
 *   JS: Actor ID(s):
 *   - Use JavaScript to determine which actor(s) are added to the temporary
 *     party until disbanded.
 * 
 * ---
 * 
 * Temp: Disband Temporary Party
 * - Clears temporary party.
 * - Can't be used in battle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These Plugin Parameters control the overall behaviors pertaining to the
 * Party System added with this plugin. These behaviors range from the maximum
 * number of members that can participate in battle to the availability of the
 * party switching mechanics.
 *
 * ---
 *
 * General
 * 
 *   Max Battle Members:
 *   - Maximum number of battle members.
 *
 * ---
 *
 * Party Scene
 * 
 *   Add Remove Command:
 *   - Add the 'Remove' command to the party scene?
 * 
 *   Locked Member Icon:
 *   - Icon used for a locked party member.
 * 
 *   Required Member Icon:
 *   - Icon used for a required party member.
 *
 * ---
 *
 * Party Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Party Command:
 *   - Add the 'Party' command to the Party Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 *
 * ---
 *
 * Actor Command Window
 * - These require VisuMZ_1_BattleCore!
 * 
 *   Add Switch Command:
 *   - Add the 'Switch' command to the Actor Command Window?
 * 
 *   Command Cooldown:
 *   - Cooldown (in turns) for this command to be available again.
 * 
 *   Switch Out Animation?:
 *   - Show the sprites switching out when using individual party
 *     member switching?
 * 
 *   TPB: Immediate Action:
 *   - Allow actors to immediate act upon switching in for TPB battle systems?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These Plugin Parameters control the text that you see in-game related to the
 * Party System plugin.
 *
 * ---
 *
 * General
 * 
 *   Active Party:
 *   - Vocabulary used to represent the Active Party.
 * 
 *   Reserve Party:
 *   - Vocabulary used to represent the Reserve Party.
 * 
 *   Status:
 *   - Vocabulary used to represent the Status Window.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Party Scene > Windows
 * 
 *   Empty:
 *   - For the party and status windows when no actor is selected.
 * 
 *   Remove:
 *   - For the remove option.
 *
 * ---
 *
 * Party Scene > Button Assist
 * 
 *   Swap Positions:
 *   - Button assist text for the page up/down commands.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Remove:
 *   - Button assist text for the removal command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Sort:
 *   - Button assist text for the sort command.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap In:
 *   - Button assist text for swapping in actors.
 *   - Requires VisuMZ_0_CoreEngine!
 * 
 *   Swap Out:
 *   - Button assist text for swapping out actors.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Battle Scene
 * 
 *   Party Command:
 *   - Command text for entering Party Scene.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Formation:
 *   - Help text for Formation command.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Queue Message:
 *   - Message to say the Party Scene is queued.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Switch Command:
 *   - Command text for switching out members.
 *   - Requires VisuMZ_1_BattleCore!
 * 
 *   Help: Switch:
 *   - Help text for Switch command.
 *   - Requires VisuMZ_1_BattleCore!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_Party.
 *
 * ---
 *
 * Background Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * If you don't like the locations of the windows in Scene_Party, change them
 * up with these Plugin Parameters, provided that you have an understanding of
 * JavaScript code.
 *
 * ---
 *
 * Active Party Label
 * Active Party Window
 * Reserve Party Label
 * Reserve Party Window
 * Status Label
 * Status Window
 * Battle Switch Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Columns:
 *   - Available only for the Reserve Party Window.
 *   - How many columns do you want there to be for the window?
 * 
 *   Actor Graphic:
 *   - Available only for Active Party Window and Reserve Party Window.
 *   - Choose how the actor graphics appear in the specific windows.
 *     - Face
 *     - Map Sprite
 *     - Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * 
 *     Map Sprite:
 *     Sideview Battler:
 * 
 *       Offset X:
 *       Offset Y:
 *       - If showing map sprites, offset the x or y coordinates.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
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
 * Version 1.32: December 19, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause a crash upon adding new members if the
 *    VisuStella Core Engine wasn't installed. Fix made by Arisu.
 * 
 * Version 1.31: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** New section added to "Major Changes":
 * *** Temporary Parties
 * **** Temporary parties are very specific parties that will overwrite
 *      whatever the player has set as a party. These can include current party
 *      members or even actors that haven't joined. The temporary party cannot
 *      be changed nor can the positions of said party members can be changed.
 * **** When a temporary party is present, menu and battle commands involving
 *      changing party members will be disabled.
 * **** Once the temporary party is disbanded, the player's selected party will
 *      be available once again as well as all of the functions to change party
 *      members and their positions.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Temp: Create Temporary Party (Normal)
 * **** Creates a temporary party with specific actors.
 * *** Temp: Create Temporary Party (JS)
 * **** Creates a temporary party selected with JavaScript.
 * *** Temp: Disband Temporary Party
 * **** Clears temporary party.
 * 
 * Version 1.30: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with FTB, ETB, and PTB did not replace
 *    the newely added party member on the turn order timeline. Fix by Olivia.
 * 
 * Version 1.29: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where party changes with PTB did not register correctly.
 *    Fix made by Olivia.
 * 
 * Version 1.28: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: February 16, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * Feature Update!
 * ** When holding the "up" keyboard button with the reserve window active, the
 *    return to the active party window will no longer happen unless the "up"
 *    key is released and then pressed again. Update made by Olivia.
 * 
 * Version 1.26: January 20, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.25: July 28, 2022
 * * Bug Fixes!
 * ** Changing party members via actor command with a less than max battle size
 *    after removing a middle member midway through battle will no longer cause
 *    weird results when switching. Fix made by Arisu.
 * ** Party members that were switched out during battle animations with active
 *    TPB/ATB will no longer cause damage popup crashes when switched back in a
 *    follow up battle. Fix made by Arisu.
 * 
 * Version 1.24: March 24, 2022
 * * Compatibility Update!
 * ** Compatibility update with Skills & States Core Passive Conditions
 *    involving the party leader. Update made by Arisu.
 * 
 * Version 1.23: January 13, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: July 16, 2021
 * * Feature Update!
 * ** Added a fail safe that prevents on-battle start events from triggering
 *    when adding party members outside of battle under evented circumstances
 *    that function as a bridge between event and battle. Fix by Irina.
 * 
 * Version 1.21: July 9, 2021
 * * Bug Fixes!
 * ** When using TPB-based battle systems, adding actors to the main party
 *    would not enable them to move. This should be fixed. Fix made by Irina.
 * 
 * Version 1.20: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.19: June 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.18: April 16, 2021
 * * Documentation Update!
 * ** Fixed typo. Fix made by Arisu.
 * 
 * Version 1.17: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_BattleSystemOTB plugin.
 * 
 * Version 1.16: March 19, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.15: March 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Gneral > Battle Scene > Battle Party Icon
 * **** For some reason, we never had a setting that lets you change the party
 *      icon. Well, now there is!
 * 
 * Version 1.14: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Party Index to Reserve
 * **** Moves an actor in a specific party index to reserve.
 *      Map only. Must be 1 actor left. You may use code.
 * *** Party: Move Random Reserve to Active
 * **** Moves a random actor from the reserve party to active.
 *      Map only. Must be enough space in active party.
 * 
 * Version 1.13: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Party: Move Actor(s) to Active
 * **** Map only. Moves an actor to the active party if there is room.
 * *** Party: Move Actor(s) to Reserve
 * **** Map only. Moves an actor to the reserve party.
 * 
 * Version 1.12: January 15, 2021
 * * Bug Fixes!
 * ** For battle testing, if the number of battle test members exceeds the
 *    maximum battle member slots, trim them until they match. Fix by Olivia.
 * 
 * Version 1.11: January 1, 2021
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.10: December 25, 2020
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.09: December 18, 2020
 * * Bug Fixes!
 * ** Removing party members in the active party by event command will now be
 *    properly removed from the party. Fix made by Yanfly.
 * 
 * Version 1.08: December 4, 2020
 * * Bug Fixes!
 * ** With TPB battle systems, after switching out party members, the battle
 *    system will no longer carry over any previous active battle members in
 *    the command window. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** With Active TPB, switching out a party member mid-action is no longer
 *    possible to prevent bugs. Intead, there party switching action will be
 *    queued and take effect after the action has been completed. Fix made by
 *    Yanfly.
 * * Compatibility Update!
 * ** Game_Party.swapOrder function now works with this plugin. However, keep
 *    in mind that due to how this party system plugin allows you have empty
 *    slots in the active battle party, this function will fill in the empty
 *    slots upon usage. Update made by Yanfly.
 *
 * Version 1.06: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin Command "Party: Change Max Battle Members" now works again.
 *    Fix made by Arisu.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Adding party members during battle through the party window command will
 *    no longer cause crashes after they input an action. Fix made by Yanfly.
 * 
 * Version 1.02: October 4, 2020
 * * Bug Fixes!
 * ** Adding party members during test play should now work again.
 *    Fix made by Irina.
 * ** Changing party members mid-battle through the actor command should now
 *    refresh the party followers afterwards. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Arisu!
 * *** General > Party Command Window > TPB: Immediate Action
 * **** Allow actors to immediate act upon switching in for TPB battle systems?
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** When switching actors with states, buffs, and/or debuffs already applied,
 *    the state icons found in the status window will now switch over properly,
 *    too. Fix made by Arisu.
 *
 * Version 1.00: September 7, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CallPartyScene
 * @text Party: Call Party Scene
 * @desc Calls the party changing scene.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChangeMaxBattleMembers
 * @text Party: Change Max Battle Members
 * @desc Changes the number of max battle members possible.
 * Cannot be use mid-battle.
 *
 * @arg Value:eval
 * @text Max Members
 * @desc Changes the number of max battle members possible.
 * Use 0 for the game's default number.
 * @default 4
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LockPartyMembers
 * @text Party: Lock/Unlock Member(s)
 * @desc Allows you to lock/unlock a party member.
 * Locked actors cannot change their party position.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to lock/unlock.
 * Locked actors cannot change their party position.
 * @default ["1"]
 * 
 * @arg Lock:eval
 * @text Lock?
 * @type boolean
 * @on Lock
 * @off Unlock
 * @desc Lock the selected actor(s)?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToActive
 * @text Party: Move Actor(s) to Active
 * @desc Moves an actor to the active party if there is room.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the active party if there is room.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveActorsToReserve
 * @text Party: Move Actor(s) to Reserve
 * @desc Moves an actor to the reserve party. Must be 1 actor left.
 * Map only. The actor needs to have joined the party.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to move to the reserve party.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MovePartyIndexToReserve
 * @text Party: Move Party Index to Reserve
 * @desc Moves an actor in a specific party index to reserve.
 * Map only. Must be 1 actor left.
 *
 * @arg Index:eval
 * @text Party Index
 * @desc Type in which index to move. Index values start at 0.
 * You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MoveRandomToActive
 * @text Party: Move Random Reserve to Active
 * @desc Moves a random actor from the reserve party to active.
 * Map only. Must be enough space in active party.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RequirePartyMembers
 * @text Party: Require Member(s)
 * @desc Allows you to require/free a party member.
 * Required actors must be in the party to exit the scene.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to require/free.
 * Required actors must be in the party to exit the scene.
 * @default ["1"]
 * 
 * @arg Require:eval
 * @text Require?
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Make the selected actor(s) required?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Temp
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempCreatePartyNormal
 * @text Temp: Create Temporary Party (Normal)
 * @desc Creates a temporary party with specific actors.
 * Can't be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which actor(s) to be added to the temporary party
 * until the temporary party is disbanded.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempCreatePartyJS
 * @text Temp: Create Temporary Party (JS)
 * @desc Creates a temporary party selected with JavaScript.
 * Can't be used in battle.
 *
 * @arg ActorsJS:func
 * @text JS: Actor ID(s)
 * @type note
 * @desc Use JavaScript to determine which actor(s) are added to
 * the temporary party until disbanded.
 * @default "// Declare Actor ID's\nconst actorIDs = [];\n\n// Add Actor ID's\nactorIDs.push(1);\nactorIDs.push(2);\nactorIDs.push(3);\nactorIDs.push(4);\n\n// Return Actor IDs\nreturn actorIDs;"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TempDisbandTempParty
 * @text Temp: Disband Temporary Party
 * @desc Clears temporary party.
 * Can't be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param PartySystem
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
 * @desc General settings pertaining to Party-related mechanics.
 * @default {"General":"","MaxBattleMembers:num":"4","PartyScene":"","AddRemoveCmd:eval":"true","LockIcon:num":"195","RequireIcon:num":"87","DrawBackRect:eval":"true","BackRectColor:str":"19","PartyCmdWin":"","PartyCmdWinAddParty:eval":"false","PartyCmdCooldown:num":"1","tpbImmediateAction:eval":"true","ActorCmdWin":"","ActorCmdWinAddParty:eval":"true","ActorCmdCooldown:num":"1","SwitchOutAnimation:eval":"true"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"General":"","ActiveParty:str":"Active Party","ReserveParty:str":"Reserve Party","Status:str":"Status","PartyScene":"","Windows":"","Empty:str":"- Empty -","Remove:str":"Remove","ButtonAssist":"","AssistSwapPosition:str":"Quick Swap","AssistRemove:str":"Remove","AssistSort:str":"Sort","AssistSwapIn:str":"Swap In","AssistSwapOut:str":"Swap Out","BattleScene":"","BattlePartyCmd:str":"Party","BattleHelpFormation:json":"\"Change up your party formation.\"","QueuePartyScene:str":"%1 Menu queued after action is complete.","BattleSwitchOut:str":"Switch","BattleHelpSwitch:json":"\"Switch out this party member with another.\""}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_Party.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc These settings let you control how the windows appear in Scene_Party.
 * @default {"ActivePartyLabel":"","ActivePartyLabelBgType:num":"0","ActivePartyLabelRect:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ActivePartyWindow":"","ActivePartyWindowBgType:num":"0","ActivePartyGraphic:str":"face","ActivePartyMapSprite":"","ActiveSpriteOffsetX:num":"0","ActiveSpriteOffsetY:num":"4","ActivePartySvBattler":"","ActiveBattlerOffsetX:num":"0","ActiveBattlerOffsetY:num":"4","ActivePartyWindowRect:func":"\"const wx = 0;\\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyLabel":"","ReservePartyLabelBgType:num":"0","ReservePartyLabelRect:func":"\"const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","ReservePartyWindow":"","ReservePartyWindowBgType:num":"0","ReserveItemThickness:num":"2","ReservePartyGraphic:str":"face","ReservePartyMapSprite":"","ReserveSpriteOffsetX:num":"24","ReserveSpriteOffsetY:num":"4","ReservePartySvBattler":"","ReserveBattlerOffsetX:num":"48","ReserveBattlerOffsetY:num":"4","ReservePartyWindowRect:func":"\"const ww = this._reservePartyLabel.width;\\nconst wx = this._reservePartyLabel.x;\\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusLabel":"","StatusLabelBgType:num":"0","StatusLabelRect:func":"\"const ww = Graphics.boxWidth - this._reservePartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\\nconst wh = Window_Base.prototype.lineHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","StatusWindow":"","StatusWindowBgType:num":"0","StatusWindowDraw:func":"\"// Draw Empty\\nif (!this._actor) {\\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\\n    this.changeTextColor(ColorManager.systemColor());\\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\\n    return;\\n}\\n\\n// Draw Face and Simple Status\\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\\n\\n// Declare Constants\\nconst lineHeight = this.lineHeight();\\nconst params = this.actorParams();\\nconst paramWidth = Math.round(this.innerWidth / 2);\\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\\nconst baseX = 0;\\nlet x = 0;\\nlet y = ImageManager.faceHeight + lineHeight / 2;\\n\\n// Draw Parameters\\nfor (const param of params) {\\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\\n    this.drawParamName(param, x, y, paramWidth);\\n    this.drawParamValue(param, x, y, paramWidth);\\n\\n    if (x === baseX) {\\n        x += paramWidth;\\n    } else {\\n        x = baseX;\\n        y += lineHeight;\\n    }\\n}\"","StatusWindowRect:func":"\"const ww = this._statusPartyLabel.width;\\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\\nconst wy = this._reservePartyWindow.y;\\nconst wh = this._reservePartyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","BattleSwitchWindow":"","BattleSwitchWindowBgType:num":"0","BattleSwitchWindowRect:func":"\"const padding = $gameSystem.windowPadding() * 2;\\nlet ww = 516 + padding;\\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\\nreturn new Rectangle(wx, wy, ww, wh);\""}
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
 * @param General
 *
 * @param MaxBattleMembers:num
 * @text Max Battle Members
 * @parent General
 * @type number
 * @min 1
 * @desc Maximum number of battle members.
 * @default 4
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyIcon:num
 * @text Battle Party Icon
 * @parent BattleScene
 * @desc Icon used for changing party members.
 * @default 75
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param AddRemoveCmd:eval
 * @text Add Remove Command
 * @parent PartyScene
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Remove' command to the party scene?
 * @default true
 *
 * @param LockIcon:num
 * @text Locked Member Icon
 * @parent PartyScene
 * @desc Icon used for a locked party member.
 * @default 195
 *
 * @param RequireIcon:num
 * @text Required Member Icon
 * @parent PartyScene
 * @desc Icon used for a required party member.
 * @default 87
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent PartyScene
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param PartyCmdWin
 * @text Party Command Window
 *
 * @param PartyCmdWinAddParty:eval
 * @text Add Party Command
 * @parent PartyCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Party' command to the Party Command Window?
 * @default false
 *
 * @param PartyCmdCooldown:num
 * @text Command Cooldown
 * @parent PartyCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param ActorCmdWin
 * @text Actor Command Window
 *
 * @param ActorCmdWinAddParty:eval
 * @text Add Switch Command
 * @parent ActorCmdWin
 * @type boolean
 * @on Add Command
 * @off Don't Add
 * @desc Add the 'Switch' command to the Actor Command Window?
 * @default true
 *
 * @param ActorCmdCooldown:num
 * @text Command Cooldown
 * @parent ActorCmdWin
 * @desc Cooldown (in turns) for this command to be available again.
 * @default 1
 *
 * @param SwitchOutAnimation:eval
 * @text Switch Out Animation?
 * @parent ActorCmdWin
 * @type boolean
 * @on Show
 * @off Don't
 * @desc Show the sprites switching out when using individual party member switching?
 * @default true
 *
 * @param tpbImmediateAction:eval
 * @text TPB: Immediate Action
 * @parent ActorCmdWin
 * @type boolean
 * @on Immediate Action
 * @off Empty Gauge
 * @desc Allow actors to immediate act upon switching in for TPB battle systems?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param ActiveParty:str
 * @text Active Party
 * @parent General
 * @desc Vocabulary used to represent the Active Party.
 * @default Active Party
 *
 * @param ReserveParty:str
 * @text Reserve Party
 * @parent General
 * @desc Vocabulary used to represent the Reserve Party.
 * @default Reserve Party
 *
 * @param Status:str
 * @text Status
 * @parent General
 * @desc Vocabulary used to represent the Status Window.
 * @default Status
 *
 * @param PartyScene
 * @text Party Scene
 *
 * @param Windows
 * @parent PartyScene
 *
 * @param Empty:str
 * @text Empty
 * @parent Windows
 * @desc For the party and status windows when no actor is selected.
 * @default - Empty -
 *
 * @param Remove:str
 * @text Remove
 * @parent Windows
 * @desc For the remove option.
 * @default Remove
 *
 * @param ButtonAssist
 * @text Button Assist
 * @parent PartyScene
 *
 * @param AssistSwapPosition:str
 * @text Swap Positions
 * @parent ButtonAssist
 * @desc Button assist text for the page up/down commands.
 * Requires VisuMZ_0_CoreEngine!
 * @default Quick Swap
 *
 * @param AssistRemove:str
 * @text Remove
 * @parent ButtonAssist
 * @desc Button assist text for the removal command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Remove
 *
 * @param AssistSort:str
 * @text Sort
 * @parent ButtonAssist
 * @desc Button assist text for the sort command.
 * Requires VisuMZ_0_CoreEngine!
 * @default Sort
 *
 * @param AssistSwapIn:str
 * @text Swap In
 * @parent ButtonAssist
 * @desc Button assist text for swapping in actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap In
 *
 * @param AssistSwapOut:str
 * @text Swap Out
 * @parent ButtonAssist
 * @desc Button assist text for swapping out actors.
 * Requires VisuMZ_0_CoreEngine!
 * @default Swap Out
 *
 * @param BattleScene
 * @text Battle Scene
 *
 * @param BattlePartyCmd:str
 * @text Party Command
 * @parent BattleScene
 * @desc Command text for entering Party Scene.
 * Requires VisuMZ_1_BattleCore!
 * @default Party
 *
 * @param BattleHelpFormation:json
 * @text Help: Formation
 * @parent BattlePartyCmd:str
 * @type note
 * @desc Help text for Formation command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Change up your party formation."
 *
 * @param QueuePartyScene:str
 * @text Queue Message
 * @parent BattlePartyCmd:str
 * @desc Message to say the Party Scene is queued.
 * Requires VisuMZ_1_BattleCore!
 * @default %1 Menu queued after action is complete.
 *
 * @param BattleSwitchOut:str
 * @text Switch Command
 * @parent BattleScene
 * @desc Command text for switching out members.
 * Requires VisuMZ_1_BattleCore!
 * @default Switch
 *
 * @param BattleHelpSwitch:json
 * @text Help: Switch
 * @parent BattleSwitchOut:str
 * @type note
 * @desc Help text for Switch command.
 * Requires VisuMZ_1_BattleCore!
 * @default "Switch out this party member with another."
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param ActivePartyLabel
 * @text Active Party Label
 *
 * @param ActivePartyLabelBgType:num
 * @text Background Type
 * @parent ActivePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ActivePartyWindow
 * @text Active Party Window
 *
 * @param ActivePartyWindowBgType:num
 * @text Background Type
 * @parent ActivePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActivePartyGraphic:str
 * @text Actor Graphic
 * @parent ActivePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the active party menu.
 * @default face
 *
 * @param ActivePartyMapSprite
 * @text Map Sprite
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveSpriteOffsetX:num
 * @text Offset X
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveSpriteOffsetY:num
 * @text Offset Y
 * @parent ActivePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartySvBattler
 * @text Sideview Battler
 * @parent ActivePartyGraphic:str
 *
 * @param ActiveBattlerOffsetX:num
 * @text Offset X
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from center.
 * @default 0
 *
 * @param ActiveBattlerOffsetY:num
 * @text Offset Y
 * @parent ActivePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ActivePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ActivePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._activePartyLabel.y + this._activePartyLabel.height;\nconst ww = Graphics.boxWidth;\nconst wh = ImageManager.faceHeight + $gameSystem.windowPadding() * 2 + 2;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyLabel
 * @text Reserve Party Label
 *
 * @param ReservePartyLabelBgType:num
 * @text Background Type
 * @parent ReservePartyLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReservePartyLabelRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Math.max(240, Math.min(Graphics.boxWidth - 576, Math.round(Graphics.boxWidth / 2)));\nconst wx = this.isRightInputMode() ? (Graphics.boxWidth - ww) : 0;\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ReservePartyWindow
 * @text Reserve Party Window
 *
 * @param ReservePartyWindowBgType:num
 * @text Background Type
 * @parent ReservePartyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ReserveCol:num
 * @text Columns
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many columns do you want there to be for the window?
 * @default 1
 *
 * @param ReserveItemThickness:num
 * @text Row Thickness
 * @parent ReservePartyWindow
 * @type number
 * @min 1
 * @desc How many rows thick do you want selectable items to be?
 * @default 2
 *
 * @param ReservePartyGraphic:str
 * @text Actor Graphic
 * @parent ReservePartyWindow
 * @type select
 * @option None
 * @value none
 * @option Face
 * @value face
 * @option Map Sprite
 * @value sprite
 * @option Sideview Battler (Requires VisuMZ_1_MainMenuCore)
 * @value svbattler
 * @desc Choose how the actor graphics appear in the reserve party menu.
 * @default face
 *
 * @param ReservePartyMapSprite
 * @text Map Sprite
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveSpriteOffsetX:num
 * @text Offset X
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the x coordinate here from left.
 * @default 24
 *
 * @param ReserveSpriteOffsetY:num
 * @text Offset Y
 * @parent ReservePartyMapSprite
 * @desc If showing map sprites, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartySvBattler
 * @text Sideview Battler
 * @parent ReservePartyGraphic:str
 *
 * @param ReserveBattlerOffsetX:num
 * @text Offset X
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the x coordinate here from left.
 * @default 48
 *
 * @param ReserveBattlerOffsetY:num
 * @text Offset Y
 * @parent ReservePartySvBattler
 * @desc If showing sideview battlers, offset the y coordinate here from bottom.
 * @default 4
 *
 * @param ReservePartyWindowRect:func
 * @text JS: X, Y, W, H
 * @parent ReservePartyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._reservePartyLabel.width;\nconst wx = this._reservePartyLabel.x;\nconst wy = this._reservePartyLabel.y + this._reservePartyLabel.height;\nconst wh = this.mainAreaHeight() - this._reservePartyLabel.height - this._activePartyWindow.height - this._activePartyLabel.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusLabel
 * @text Status Label
 *
 * @param StatusLabelBgType:num
 * @text Background Type
 * @parent StatusLabel
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusLabelRect:func
 * @text JS: X, Y, W, H
 * @parent StatusLabel
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth - this._reservePartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._activePartyWindow.y + this._activePartyWindow.height;\nconst wh = Window_Base.prototype.lineHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusWindowBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusWindowDraw:func
 * @text JS: Draw Data
 * @parent StatusWindow
 * @type note
 * @desc Code used to draw the display data in the Status Window.
 * @default "// Draw Empty\nif (!this._actor) {\n    this.drawItemDarkRect(0, 0, this.innerWidth, this.innerHeight);\n    const y = Math.round((this.innerHeight - this.lineHeight()) / 2);\n    this.changeTextColor(ColorManager.systemColor());\n    this.drawText(TextManager.emptyPartyMember, 0, y, this.innerWidth, 'center');\n    return;\n}\n\n// Draw Face and Simple Status\nthis.drawActorFace(this._actor, 1, 0, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorSimpleStatus(this._actor, ImageManager.faceWidth + 36, 0);\n\n// Declare Constants\nconst lineHeight = this.lineHeight();\nconst params = this.actorParams();\nconst paramWidth = Math.round(this.innerWidth / 2);\nconst paramHeight = Math.ceil(params.length / 2) * lineHeight;\nconst baseX = 0;\nlet x = 0;\nlet y = ImageManager.faceHeight + lineHeight / 2;\n\n// Draw Parameters\nfor (const param of params) {\n    this.drawItemDarkRect(x, y, paramWidth, lineHeight);\n    this.drawParamName(param, x, y, paramWidth);\n    this.drawParamValue(param, x, y, paramWidth);\n\n    if (x === baseX) {\n        x += paramWidth;\n    } else {\n        x = baseX;\n        y += lineHeight;\n    }\n}"
 *
 * @param StatusWindowRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = this._statusPartyLabel.width;\nconst wx = this.isRightInputMode() ? 0 : (Graphics.boxWidth - ww);\nconst wy = this._reservePartyWindow.y;\nconst wh = this._reservePartyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param BattleSwitchWindow
 * @text Battle Switch Window
 *
 * @param BattleSwitchWindowBgType:num
 * @text Background Type
 * @parent BattleSwitchWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BattleSwitchWindowRect:func
 * @text JS: X, Y, W, H
 * @parent BattleSwitchWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * Does not apply to Border Battle Layout style.
 * @default "const padding = $gameSystem.windowPadding() * 2;\nlet ww = 516 + padding;\nlet wh = Window_PartyBattleSwitch.prototype.itemHeight() * 4 + padding;\nlet wx = Math.round(Graphics.boxWidth - ww) / 2;\nlet wy = Math.round(Graphics.boxHeight - wh - this._statusWindow.height) / 2;\nwy = wy.clamp(0, Graphics.boxHeight - wh - this._statusWindow.height);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
//=============================================================================

const _0x59bccc=_0x3353;(function(_0x2af7ac,_0x35b73e){const _0x31fc7f=_0x3353,_0x50d77f=_0x2af7ac();while(!![]){try{const _0x2b5587=-parseInt(_0x31fc7f(0x2a8))/0x1*(-parseInt(_0x31fc7f(0x2cb))/0x2)+-parseInt(_0x31fc7f(0x140))/0x3+-parseInt(_0x31fc7f(0x1e2))/0x4*(-parseInt(_0x31fc7f(0x2ed))/0x5)+parseInt(_0x31fc7f(0x2a2))/0x6*(-parseInt(_0x31fc7f(0x240))/0x7)+parseInt(_0x31fc7f(0x2c6))/0x8+parseInt(_0x31fc7f(0x2bf))/0x9*(-parseInt(_0x31fc7f(0x12d))/0xa)+parseInt(_0x31fc7f(0x17d))/0xb;if(_0x2b5587===_0x35b73e)break;else _0x50d77f['push'](_0x50d77f['shift']());}catch(_0x50b713){_0x50d77f['push'](_0x50d77f['shift']());}}}(_0x5852,0xabd02));var label='PartySystem',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x59bccc(0x283)](function(_0x5058ac){const _0x10dc27=_0x59bccc;return _0x5058ac[_0x10dc27(0x123)]&&_0x5058ac[_0x10dc27(0x315)]['includes']('['+label+']');})[0x0];function _0x5852(){const _0x50b3ae=['_tpbChargeTime','VisuMZ_2_BattleSystemSTB','VisuMZ_2_BattleSystemCTB','BgFilename2','AssistSwapOut','stepForward','sortActors','_partySwitchDuration','_partyRequired','_partySystemBattleCommandCooldown','gridFlank','statusParty','setPartyRequirement','_pagedownButton','canSwitchPartyInBattle','SnapshotOpacity','updateTargetsForPartySwitch','VisuMZ_2_BattleSystemBTB','setupBattleTestMembers','isFormationCommandEnabled','filter','bind','ActorsJS','close','_actor','dimColor1','Empty','selectActor','drawItemStatus','createStatusWindow','initPartySystem','Game_System_isFormationEnabled_FP','popScene','changeLevel','actor','loadFace','ReserveSpriteOffsetY','onReserveOk','ensureCursorVisible','isBTB','actor%1-stateIcon','includes','#%1','changeMaxBattleMembers','_battleMaxSize','_clickHandler','FUNC','iconWidth','setup','createActivePartyLabel','processShiftRemoveShortcut','156JDBHZw','create','faceWidth','getBackgroundOpacity','clearDamagePopup','Game_Unit_inBattle','37689yZWSlo','_spriteset','_battleSystemIncompatibilityError','getPartySystemBackColor','battleLayoutStyle','_target','MoveRandomToActive','faceHeight','drawActorName','VisuMZ_2_BattleSystemFTB','Game_Troop_increaseTurn','random','_activePartyWindow','isAppeared','nameStartPosition','registerCommand','Scene_Base_isAutosaveEnabled','VisuMZ_2_BattleGridSystem','buttonAssistText1','Actors','ReservePartyGraphic','requestRefresh','MoveActorsToActive','9ZJhyxz','BattleSwitchOut','isPreviousSceneBattleTransitionable','AssistSort','_actionBattlers','smoothSelect','cursorVisible','1967968PNIGNE','param','Scene_Battle_isTimeActive','\x5cI[%1]%2','remove','46gHnHQE','isTimeActive','Scene_Battle_createActorCommandWindow','call','Scene_Battle_createAllWindows','preparePartySwitchMember','Game_Party_initialize','clear','reserveTransfer','addRemoveCommand','version','reservePartyWindowRect','iconHeight','drawSvActor','isFormationChangeOk','playEquip','drawParamText','_partySwitchTargetActor','WARNING:\x20Party\x20Change\x20command\x20is\x20unavailable\x20for\x20Window_PartyCommand\x20for\x20this\x20Battle\x20System','assistSwapPositions','min','textColor','setActor','createStatusLabel','checkShiftSortShortcut','Game_Party_removeActor','addActorToBattleMembersAtIndex','StatusWindowBgType','ActivePartyLabelBgType','removeActor','checkShiftRemoveShortcut','increaseTurn','ActiveSpriteOffsetX','activePartyWindowRect','798085UnMnWb','createReservePartyWindow','_statusPartyWindow','isShiftShortcutEnabled','return\x200','drawItemImageSprite','text','MoveActorsToReserve','battlerName','ARRAYNUM','PartyCmdWinAddParty','Value','drawDarkRect','bitmap','_partySystemSwitchOut','_scene','battlePartyChangeCmdHelp','_currentActor','commandStyle','innerWidth','Game_Battler_onBattleStart','cancel','switchStateIconActor','removeActionBattlersOTB','drawIcon','_callSceneParty','updatePartySwitch','startOpacity','changePaintOpacity','uiMenuStyle','allMembers','updateHelp','createCustomBackgroundImages','isFormationCommandAdded','VisuMZ_2_BattleSystemOTB','_partyMemberSwitchWindow','ActorCmdCooldown','recoverAll','parse','trim','description','Temp:\x20Create\x20Temporary\x20Party\x20(JS)\x20Error','rearrangePartyActors','removePartyMember','onBattleStart','buttonAssistText4','emptyPartyMember','tpbImmediateAction','itemRectWithPadding','addFormationCommand','BgFilename1','MaxBattleMembers','isShowPartySwitchOutAnimation','initEquips','Vocab','_actors','face','center','partySwitchWindowRect','startSwitchOutAnimation','windowPadding','statusWindowRect','indexOf','Scene_Battle_createPartyCommandWindowBattleCore','Window','buttonAssistText3','openness','Game_Party_canSwitchPartyInBattle_FP','isRightInputMode','allowEarlySwapOrderBreak','ConvertParams','_callPartyMemberSwitch','contents','pendingIndex','playCursorSound','SwitchOutAnimation','setHandler','_statusWindow','processDrawItem','status','ReserveBattlerOffsetX','needsPageButtons','callUpdateHelp','NUM','slice','_statusPartyLabel','hasBattleSystemIncompatibilities','SceneManager_isNextSceneBattleTransitionable','getInputButtonString','24580WrwVzh','quickSwap','initialize','isNextScene','height','createBackground','createAllWindows','pop','partySwitchWindowRectBorder','currentSymbol','_reservePartyWindow','ActiveBattlerOffsetX','ActorCmdWinAddParty','addText','testBattlers','_battleMembers','innerHeight','formation','maxBattleMembers','4128486BrIEjj','postPartySwitchMenuTurnBased','ReserveBattlerOffsetY','mapId','processPartySwitchMember','updatePadding','createInnerSprite','CoreEngine','battleMembers','Scene_BattleGridTactics','processOk','setupBattleTest','clearPartyBattleCommandCooldown','systemColor','ARRAYFUNC','clearForcedParty','map','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','changeTextColor','_targets','BattleHelpFormation','swapOrder','setBattler','isCancelEnabled','isQueueFormationMenu','itemLineRect','drawActorPartyIcons','helpAreaHeight','makeActionOrders','followers','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','refreshAllWindows','LockIcon','isImmediateTpb','General','isRequiredInParty','battlePartyChangeCmd','makeActions','SceneManager_isPreviousSceneBattleTransitionable','removePartyCommand','postPartySwitchMenuTpb','ReserveParty','cursorDown','right','snapForBackground','addActorToBattleMembers','exit','callFormation','removeActorFromBattleMembers','cursorPageup','_backSprite2','Game_Battler_regenerateAll','Game_Party_setupBattleTest','select','isEnabled','addChild','drawActorSimpleStatus','PartySystem','RequirePartyMembers','setText','deselect','4271663cjlVKV','playOkSound','applyBattlePartySwitchCooldown','findSymbol','ReserveSpriteOffsetX','clearPartySwitchCommandCooldown','Window_ActorCommand_updateHelp','clamp','Game_Party_rawBattleMembers_FP','onActiveOk','_inputting','floor','BattleSwitchWindowRect','itemPadding','actorId','Game_Party_setupStartingMembers','Param','isActiveTpb','processCursorMove','onBattlePartySwitch','addPartyCommand','partyChangeRefresh','currentActor','round','createReservePartyLabel','lineHeight','ActiveBattlerOffsetY','cursorPagedown','itemHeight','AssistSwapIn','onPartySwitchOk','toLowerCase','anyRequiredPartyMembersInReserve','VisuMZ_2_BattleSystemETB','StatusLabelBgType','isSceneMap','_forcedPartyActors','AssistSwapPosition','updateBattlePartySwitchCooldown','gradientFillRect','paintOpacity','border','addCommand','isAlive','terminate','getColor','drawParamName','actorParams','clone','drawActorPartyIconsVert','isPlaytest','isPreviousScene','_tpbState','_forcedBattleGridTactics','VisuMZ_1_BattleCore','drawActorPartyIconsHorz','activeParty','Settings','isCurrentItemEnabled','assistSwapInPartyMember','_activePartyLabel','StatusWindowDraw','Game_Party_allMembers_FP','ReservePartyLabelRect','isActor','push','Window_PartyCommand_updateHelp','deactivate','toUpperCase','drawItemImageSvActor','Game_Party_reserveMembers_FP','activePartyLabelRect','format','_partySwitchBattleCommandCooldown','isAnyInputWindowActive','_partyCommandWindow','maxItems','Status','commandPartyMemberSwitch','index','uiInputPosition','VisuMZ_2_BattleSystemPTB','isAutosaveEnabled','ActivePartyWindowBgType','EVAL','_subject','MovePartyIndexToReserve','checkInitBattleMembers','Require','Game_Party_addActor','processCancel','isUsingGridSystem','length','isCTB','replaceActionBattlersPartySwitch','_lastIndex','onPartySwitchCancel','svbattler','updateTurnOrderCTB','Scene_Battle_isAnyInputWindowActive','startSwitchInAnimation','16OdVFYE','addWindow','drawText','createPartySwitchWindow','swapOrderPartySystemPlugin','_reservePartyLabel','reserveMembers','reserveParty','AssistRemove','otbReturnBattlerToTurnOrders','drawItemImageFace','_windowLayer','drawParamValue','isPTB','ARRAYEVAL','ChangeMaxBattleMembers','charged','initMaxBattleMembers','isPartyCommandEnabled','sort','battlePartySwitchCmdHelp','initBattleMembers','addNonBattleTestMembers','BgSettings','createActorCommandWindow','setupStartingMembers','setBackgroundOpacity','_actorGraphic','Index','refresh','resetFontSettings','requiredPartyMemberIcon','sprite','_bypassAutoSavePartySystem','drawItem','isShiftRemoveShortcutEnabled','drawItemEmpty','gaugeBackColor','shift','lockPartyMemberIcon','createPageButtons','setStatusWindow','StatusLabelRect','createForcedParty','constructor','BattlePartyIcon','max','defaultMaxBattleMembers','clearTpbChargeTime','ReservePartyLabelBgType','cursorUp','getParamValue','isPartyCommandAdded','active','update','setBackgroundType','BackRectColor','addActor','itemRect','prototype','activate','drawItemDarkRect','loadSvActor','_actorCommandWindow','teamBasedFirstAvailableMember','fillRect','_partyLocked','skillItemWindowRectBorderStyle','BattlePartyCmd','ReserveCol','isTpb','Game_Party_swapOrder','onReserveCancel','battlePartyChangeIcon','TempDisbandTempParty','_rowThickness','ActiveParty','StatusWindowRect','isTriggered','Game_Actor_setup','processShiftSortShortcut','ActiveTpbFormationMessage','padding','assistRemovePartyMember','battlePartySwitchCmd','drawActorFace','Game_Actor_canSwitchPartyInBattle_FP','updateBattleProcess','isNextSceneBattleTransitionable','setPartyLock','loadCharacter','updateTurnOrderSTB','sortActionOrdersBTB','statusLabelRect','15421cPgeSq','rawBattleMembers','BattleHelpSwitch','_backSprite1','_pageupButton','addLoadListener','Remove','isSTB','createPartyCommandWindowBattleCore','isSceneGridTactics','maxCols','concat','assistSortPartyMembers','STR','assistSwapOutPartyMember','Scene_Battle_updateBattleProcess','match','members','VisuMZ_1_MainMenuCore','BattleManager_setup','isFormationEnabled','loadPartyImages','inBattle','QueuePartyScene','ActivePartyGraphic','isETB','Sprite_Actor_update','width','isFTB','adjustSprite','isSceneBattle','faceName','_logWindow','dimColor2','reservePartyLabelRect','LockPartyMembers','setBattlePartySwitchCooldown','reselect','callPartyMemberSwitch','placeBasicGauges','isOTB','ARRAYSTR','name','clearBypassAutoSave','_otb_actionBattlersNext','drawItemImage','level'];_0x5852=function(){return _0x50b3ae;};return _0x5852();}VisuMZ[label][_0x59bccc(0x1b6)]=VisuMZ[label][_0x59bccc(0x1b6)]||{},VisuMZ[_0x59bccc(0x11a)]=function(_0x3afd25,_0x434383){const _0x38cb94=_0x59bccc;for(const _0x20fd8a in _0x434383){if(_0x20fd8a[_0x38cb94(0x250)](/(.*):(.*)/i)){const _0x55d83b=String(RegExp['$1']),_0x48effc=String(RegExp['$2'])[_0x38cb94(0x1c1)]()[_0x38cb94(0x314)]();let _0x2db2f0,_0x222c0c,_0x55f443;switch(_0x48effc){case _0x38cb94(0x127):_0x2db2f0=_0x434383[_0x20fd8a]!==''?Number(_0x434383[_0x20fd8a]):0x0;break;case _0x38cb94(0x2f6):_0x222c0c=_0x434383[_0x20fd8a]!==''?JSON['parse'](_0x434383[_0x20fd8a]):[],_0x2db2f0=_0x222c0c[_0x38cb94(0x150)](_0x12790c=>Number(_0x12790c));break;case _0x38cb94(0x1d1):_0x2db2f0=_0x434383[_0x20fd8a]!==''?eval(_0x434383[_0x20fd8a]):null;break;case _0x38cb94(0x1f0):_0x222c0c=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):[],_0x2db2f0=_0x222c0c[_0x38cb94(0x150)](_0x503f41=>eval(_0x503f41));break;case'JSON':_0x2db2f0=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):'';break;case'ARRAYJSON':_0x222c0c=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):[],_0x2db2f0=_0x222c0c[_0x38cb94(0x150)](_0x221ebc=>JSON[_0x38cb94(0x313)](_0x221ebc));break;case _0x38cb94(0x29d):_0x2db2f0=_0x434383[_0x20fd8a]!==''?new Function(JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a])):new Function(_0x38cb94(0x2f1));break;case _0x38cb94(0x14e):_0x222c0c=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):[],_0x2db2f0=_0x222c0c['map'](_0x530cfd=>new Function(JSON[_0x38cb94(0x313)](_0x530cfd)));break;case _0x38cb94(0x24d):_0x2db2f0=_0x434383[_0x20fd8a]!==''?String(_0x434383[_0x20fd8a]):'';break;case _0x38cb94(0x269):_0x222c0c=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):[],_0x2db2f0=_0x222c0c[_0x38cb94(0x150)](_0x424ad5=>String(_0x424ad5));break;case'STRUCT':_0x55f443=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):{},_0x2db2f0=VisuMZ[_0x38cb94(0x11a)]({},_0x55f443);break;case'ARRAYSTRUCT':_0x222c0c=_0x434383[_0x20fd8a]!==''?JSON[_0x38cb94(0x313)](_0x434383[_0x20fd8a]):[],_0x2db2f0=_0x222c0c[_0x38cb94(0x150)](_0xda3338=>VisuMZ['ConvertParams']({},JSON['parse'](_0xda3338)));break;default:continue;}_0x3afd25[_0x55d83b]=_0x2db2f0;}}return _0x3afd25;},(_0x3c431d=>{const _0x424200=_0x59bccc,_0x411b5f=_0x3c431d['name'];for(const _0x46ec9a of dependencies){if(!Imported[_0x46ec9a]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x411b5f,_0x46ec9a)),SceneManager[_0x424200(0x16e)]();break;}}const _0x437f4b=_0x3c431d[_0x424200(0x315)];if(_0x437f4b[_0x424200(0x250)](/\[Version[ ](.*?)\]/i)){const _0x501320=Number(RegExp['$1']);_0x501320!==VisuMZ[label][_0x424200(0x2d5)]&&(alert(_0x424200(0x151)[_0x424200(0x1c5)](_0x411b5f,_0x501320)),SceneManager['exit']());}if(_0x437f4b[_0x424200(0x250)](/\[Tier[ ](\d+)\]/i)){const _0x319904=Number(RegExp['$1']);_0x319904<tier?(alert(_0x424200(0x15e)[_0x424200(0x1c5)](_0x411b5f,_0x319904,tier)),SceneManager[_0x424200(0x16e)]()):tier=Math[_0x424200(0x210)](_0x319904,tier);}VisuMZ[_0x424200(0x11a)](VisuMZ[label][_0x424200(0x1b6)],_0x3c431d['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData['name'],'CallPartyScene',_0x2c77e9=>{SceneManager['push'](Scene_Party);}),PluginManager[_0x59bccc(0x2b7)](pluginData[_0x59bccc(0x26a)],_0x59bccc(0x1f1),_0xf0f320=>{const _0x5bcce=_0x59bccc;if($gameParty[_0x5bcce(0x256)]())return;VisuMZ[_0x5bcce(0x11a)](_0xf0f320,_0xf0f320);const _0x2b4ab9=_0xf0f320[_0x5bcce(0x2f8)];$gameParty[_0x5bcce(0x29a)](_0x2b4ab9);}),PluginManager['registerCommand'](pluginData[_0x59bccc(0x26a)],_0x59bccc(0x2be),_0x23413c=>{const _0x39181c=_0x59bccc;if(!SceneManager[_0x39181c(0x1a0)]())return;VisuMZ[_0x39181c(0x11a)](_0x23413c,_0x23413c);const _0xe1adad=_0x23413c[_0x39181c(0x2bb)];for(const _0x1d2bf1 of _0xe1adad){$gameParty['addActorToBattleMembers'](_0x1d2bf1);}$gamePlayer['refresh']();}),PluginManager[_0x59bccc(0x2b7)](pluginData['name'],_0x59bccc(0x2f4),_0x4f7a0c=>{const _0x29f566=_0x59bccc;if(!SceneManager[_0x29f566(0x1a0)]())return;VisuMZ[_0x29f566(0x11a)](_0x4f7a0c,_0x4f7a0c);const _0x10f40c=_0x4f7a0c[_0x29f566(0x2bb)];for(const _0xefd886 of _0x10f40c){if($gameParty[_0x29f566(0x148)]()[_0x29f566(0x1d9)]<=0x1)break;$gameParty[_0x29f566(0x170)](_0xefd886);}$gamePlayer['refresh']();}),PluginManager[_0x59bccc(0x2b7)](pluginData[_0x59bccc(0x26a)],_0x59bccc(0x1d3),_0x3c5f3d=>{const _0x4fe6a5=_0x59bccc;if(!SceneManager[_0x4fe6a5(0x1a0)]())return;if($gameParty[_0x4fe6a5(0x148)]()[_0x4fe6a5(0x1d9)]<=0x1)return;if(!$gameParty[_0x4fe6a5(0x13c)])return;if($gameParty[_0x4fe6a5(0x13c)][_0x4fe6a5(0x1d9)]<=0x0)return;VisuMZ[_0x4fe6a5(0x11a)](_0x3c5f3d,_0x3c5f3d);const _0x2bb34b=_0x3c5f3d[_0x4fe6a5(0x1fe)],_0x85c61c=$gameParty[_0x4fe6a5(0x13c)][_0x2bb34b];$gameParty[_0x4fe6a5(0x170)](_0x85c61c),$gamePlayer[_0x4fe6a5(0x1ff)]();}),PluginManager[_0x59bccc(0x2b7)](pluginData[_0x59bccc(0x26a)],_0x59bccc(0x2ae),_0xf9dbe3=>{const _0x7d586b=_0x59bccc;if(!SceneManager[_0x7d586b(0x1a0)]())return;if($gameParty[_0x7d586b(0x148)]()[_0x7d586b(0x1d9)]>=$gameParty[_0x7d586b(0x13f)]())return;if($gameParty[_0x7d586b(0x1e8)]()[_0x7d586b(0x1d9)]<=0x0)return;const _0x254e4f=$gameParty['reserveMembers'](),_0x3319e8=_0x254e4f[Math[_0x7d586b(0x188)](Math[_0x7d586b(0x2b3)]()*_0x254e4f[_0x7d586b(0x1d9)])],_0x19ca18=_0x3319e8[_0x7d586b(0x18b)]();$gameParty[_0x7d586b(0x16d)](_0x19ca18),$gamePlayer[_0x7d586b(0x1ff)]();}),PluginManager[_0x59bccc(0x2b7)](pluginData[_0x59bccc(0x26a)],_0x59bccc(0x263),_0x481fef=>{const _0x2f71be=_0x59bccc;VisuMZ[_0x2f71be(0x11a)](_0x481fef,_0x481fef);const _0x2bc9bd=_0x481fef[_0x2f71be(0x2bb)][_0x2f71be(0x150)](_0x48ba3f=>$gameActors[_0x2f71be(0x291)](_0x48ba3f))[_0x2f71be(0x2ca)](null),_0x13c7be=_0x481fef['Lock'];for(const _0x382505 of _0x2bc9bd){if(!_0x382505)continue;_0x382505[_0x2f71be(0x23b)](_0x13c7be);}}),PluginManager[_0x59bccc(0x2b7)](pluginData['name'],_0x59bccc(0x17a),_0x1c3e39=>{const _0x12b91d=_0x59bccc;VisuMZ['ConvertParams'](_0x1c3e39,_0x1c3e39);const _0x57abfa=_0x1c3e39[_0x12b91d(0x2bb)][_0x12b91d(0x150)](_0x3e62aa=>$gameActors[_0x12b91d(0x291)](_0x3e62aa))[_0x12b91d(0x2ca)](null),_0x5f1cde=_0x1c3e39[_0x12b91d(0x1d5)];for(const _0xe2f168 of _0x57abfa){if(!_0xe2f168)continue;_0xe2f168[_0x12b91d(0x27b)](_0x5f1cde);}}),PluginManager['registerCommand'](pluginData[_0x59bccc(0x26a)],'TempCreatePartyNormal',_0x424b7b=>{const _0x2a8491=_0x59bccc;if($gameParty['inBattle']())return;VisuMZ[_0x2a8491(0x11a)](_0x424b7b,_0x424b7b);const _0x2adf3b=_0x424b7b['Actors']||[];if(_0x2adf3b[_0x2a8491(0x1d9)]<=0x0)return;$gameParty['createForcedParty'](_0x2adf3b);}),PluginManager[_0x59bccc(0x2b7)](pluginData[_0x59bccc(0x26a)],'TempCreatePartyJS',_0x3b223a=>{const _0x230a47=_0x59bccc;if($gameParty[_0x230a47(0x256)]())return;VisuMZ[_0x230a47(0x11a)](_0x3b223a,_0x3b223a);let _0x4f7973=[];try{_0x4f7973=_0x3b223a[_0x230a47(0x285)]()||[];}catch(_0x2bdb71){console['log'](_0x230a47(0x316)),console['log'](_0x2bdb71);return;}if(_0x4f7973['length']<=0x0)return;$gameParty[_0x230a47(0x20d)](_0x4f7973);}),PluginManager[_0x59bccc(0x2b7)](pluginData[_0x59bccc(0x26a)],_0x59bccc(0x22c),_0x32ff27=>{const _0x3f331e=_0x59bccc;if($gameParty[_0x3f331e(0x256)]())return;VisuMZ[_0x3f331e(0x11a)](_0x32ff27,_0x32ff27),$gameParty[_0x3f331e(0x14f)]();}),ImageManager['lockPartyMemberIcon']=VisuMZ[_0x59bccc(0x179)]['Settings'][_0x59bccc(0x162)][_0x59bccc(0x160)],ImageManager[_0x59bccc(0x201)]=VisuMZ['PartySystem']['Settings'][_0x59bccc(0x162)]['RequireIcon'],TextManager[_0x59bccc(0x1b5)]=VisuMZ['PartySystem'][_0x59bccc(0x1b6)]['Vocab'][_0x59bccc(0x22e)],TextManager[_0x59bccc(0x1e9)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x169)],TextManager[_0x59bccc(0x27a)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x1ca)],TextManager[_0x59bccc(0x31b)]=VisuMZ['PartySystem'][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x289)],TextManager[_0x59bccc(0x318)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x246)],TextManager[_0x59bccc(0x2de)]=VisuMZ[_0x59bccc(0x179)]['Settings'][_0x59bccc(0x323)][_0x59bccc(0x1a2)],TextManager[_0x59bccc(0x235)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x1ea)],TextManager[_0x59bccc(0x24c)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x2c2)],TextManager[_0x59bccc(0x1b8)]=VisuMZ['PartySystem'][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x19a)],TextManager['assistSwapOutPartyMember']=VisuMZ[_0x59bccc(0x179)]['Settings'][_0x59bccc(0x323)][_0x59bccc(0x273)],ColorManager[_0x59bccc(0x1aa)]=function(_0x5cf47e){const _0x459da7=_0x59bccc;return _0x5cf47e=String(_0x5cf47e),_0x5cf47e[_0x459da7(0x250)](/#(.*)/i)?_0x459da7(0x299)[_0x459da7(0x1c5)](String(RegExp['$1'])):this[_0x459da7(0x2e0)](Number(_0x5cf47e));},SceneManager[_0x59bccc(0x25e)]=function(){const _0x399311=_0x59bccc;return this[_0x399311(0x2fc)]&&this['_scene'][_0x399311(0x20e)]===Scene_Battle;},SceneManager['isSceneParty']=function(){const _0x231494=_0x59bccc;return this['_scene']&&this[_0x231494(0x2fc)][_0x231494(0x20e)]===Scene_Party;},SceneManager[_0x59bccc(0x1a0)]=function(){const _0x3e67c6=_0x59bccc;return this[_0x3e67c6(0x2fc)]&&this[_0x3e67c6(0x2fc)][_0x3e67c6(0x20e)]===Scene_Map;},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x253)]=BattleManager[_0x59bccc(0x29f)],BattleManager['setup']=function(_0x1a49f2,_0x45b21d,_0x2f4e76){const _0x4ac9ed=_0x59bccc;VisuMZ['PartySystem']['BattleManager_setup'][_0x4ac9ed(0x2ce)](this,_0x1a49f2,_0x45b21d,_0x2f4e76),$gameParty[_0x4ac9ed(0x14c)]();},BattleManager[_0x59bccc(0x27f)]=function(_0x4a46a5,_0x52d315){const _0x3965f5=_0x59bccc;if(_0x4a46a5===_0x52d315)return;if(!_0x4a46a5)return;if(!_0x52d315)return;if(this[_0x3965f5(0x2ad)]===_0x4a46a5)this[_0x3965f5(0x2ad)]=_0x52d315;while(this[_0x3965f5(0x153)][_0x3965f5(0x298)](_0x4a46a5)){const _0x22281c=this[_0x3965f5(0x153)][_0x3965f5(0x112)](_0x4a46a5);this['_targets'][_0x22281c]=_0x52d315;}},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x301)]=Game_Battler[_0x59bccc(0x21d)]['onBattleStart'],Game_Battler['prototype'][_0x59bccc(0x319)]=function(_0x342197){const _0x48c59c=_0x59bccc;VisuMZ[_0x48c59c(0x179)][_0x48c59c(0x301)][_0x48c59c(0x2ce)](this,_0x342197);if(this[_0x48c59c(0x1bd)]())this[_0x48c59c(0x182)]();this[_0x48c59c(0x2a6)]();},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x173)]=Game_Battler['prototype']['regenerateAll'],Game_Battler['prototype']['regenerateAll']=function(){const _0x5682c4=_0x59bccc;VisuMZ[_0x5682c4(0x179)][_0x5682c4(0x173)][_0x5682c4(0x2ce)](this);if(this[_0x5682c4(0x1bd)]()&&$gameParty[_0x5682c4(0x256)]())this[_0x5682c4(0x1a3)]();},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x231)]=Game_Actor[_0x59bccc(0x21d)][_0x59bccc(0x29f)],Game_Actor[_0x59bccc(0x21d)]['setup']=function(_0x3a44a0){const _0x4a9d99=_0x59bccc;VisuMZ['PartySystem'][_0x4a9d99(0x231)]['call'](this,_0x3a44a0),this[_0x4a9d99(0x28d)](),this[_0x4a9d99(0x182)]();},Game_Actor[_0x59bccc(0x21d)]['initPartySystem']=function(){const _0x5d54fe=_0x59bccc;this[_0x5d54fe(0x224)]=![],this[_0x5d54fe(0x277)]=![];},Game_Actor['prototype'][_0x59bccc(0x2d9)]=function(){const _0xb0c57f=_0x59bccc;if(this[_0xb0c57f(0x224)]===undefined)this[_0xb0c57f(0x28d)]();return!this['_partyLocked'];},Game_Actor[_0x59bccc(0x21d)]['setPartyLock']=function(_0x252cad){const _0x4c4103=_0x59bccc;if(this['_partyLocked']===undefined)this[_0x4c4103(0x28d)]();this[_0x4c4103(0x224)]=_0x252cad;},Game_Actor['prototype'][_0x59bccc(0x163)]=function(){const _0x692274=_0x59bccc;if(this[_0x692274(0x277)]===undefined)this['initPartySystem']();return this['_partyRequired'];},Game_Actor[_0x59bccc(0x21d)]['setPartyRequirement']=function(_0xbfdd28){const _0x11758f=_0x59bccc;if(this[_0x11758f(0x277)]===undefined)this['initPartySystem']();this[_0x11758f(0x277)]=_0xbfdd28;},Game_Actor[_0x59bccc(0x21d)]['clearPartySwitchCommandCooldown']=function(){const _0x1e9bd8=_0x59bccc;this[_0x1e9bd8(0x1c6)]=0x0;},Game_Actor[_0x59bccc(0x21d)]['canSwitchPartyInBattle']=function(){const _0x3e3809=_0x59bccc;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0x3e3809(0x182)]();if(!this['isFormationChangeOk']())return![];if(this[_0x3e3809(0x163)]())return![];return this[_0x3e3809(0x1c6)]<=0x0;},Game_Actor[_0x59bccc(0x21d)]['battlePartySwitchCooldown']=function(){const _0x1a10d6=_0x59bccc;if(this['_partySwitchBattleCommandCooldown']===undefined)this[_0x1a10d6(0x182)]();return this['_partySwitchBattleCommandCooldown'];},Game_Actor[_0x59bccc(0x21d)][_0x59bccc(0x264)]=function(_0x19a0f9){const _0xab7d94=_0x59bccc;if(this[_0xab7d94(0x1c6)]===undefined)this['clearPartySwitchCommandCooldown']();this[_0xab7d94(0x1c6)]=_0x19a0f9||0x0;},Game_Actor['prototype'][_0x59bccc(0x17f)]=function(){const _0x5cde5f=_0x59bccc;if(this[_0x5cde5f(0x1c6)]===undefined)this[_0x5cde5f(0x182)]();const _0x5eaede=VisuMZ['PartySystem']['Settings']['General'][_0x5cde5f(0x311)];this[_0x5cde5f(0x264)](_0x5eaede);},Game_Actor[_0x59bccc(0x21d)][_0x59bccc(0x1a3)]=function(){const _0x354437=_0x59bccc;if(this[_0x354437(0x1c6)]===undefined)this[_0x354437(0x182)]();this[_0x354437(0x1c6)]--;},Game_Actor[_0x59bccc(0x21d)][_0x59bccc(0x190)]=function(_0x5c75f9){const _0x1a5a6d=_0x59bccc;Imported[_0x1a5a6d(0x271)]&&BattleManager[_0x1a5a6d(0x1da)]()&&BattleManager[_0x1a5a6d(0x1df)]();Imported['VisuMZ_2_BattleSystemSTB']&&BattleManager[_0x1a5a6d(0x247)]()&&(BattleManager[_0x1a5a6d(0x23d)](),BattleManager['_subject']=this,BattleManager[_0x1a5a6d(0x2fe)]=this);if(Imported[_0x1a5a6d(0x280)]&&BattleManager['isBTB']()){BattleManager[_0x1a5a6d(0x1d2)]=undefined,BattleManager[_0x1a5a6d(0x2fe)]=this;const _0x45b1d1=BattleManager[_0x1a5a6d(0x2c3)]['indexOf'](_0x5c75f9);BattleManager[_0x1a5a6d(0x2c3)][_0x45b1d1]=this,BattleManager[_0x1a5a6d(0x23e)]();}Imported[_0x1a5a6d(0x2b1)]&&BattleManager[_0x1a5a6d(0x25c)]()&&(BattleManager[_0x1a5a6d(0x1d2)]=this,BattleManager[_0x1a5a6d(0x2fe)]=this,BattleManager[_0x1a5a6d(0x1db)](_0x5c75f9,this));Imported[_0x1a5a6d(0x19e)]&&BattleManager[_0x1a5a6d(0x259)]()&&(BattleManager['_subject']=this,BattleManager[_0x1a5a6d(0x2fe)]=this,BattleManager[_0x1a5a6d(0x1db)](_0x5c75f9,this));Imported['VisuMZ_2_BattleSystemPTB']&&BattleManager[_0x1a5a6d(0x1ef)]()&&(BattleManager[_0x1a5a6d(0x1d2)]=this,BattleManager[_0x1a5a6d(0x2fe)]=this,BattleManager[_0x1a5a6d(0x1db)](_0x5c75f9,this));if(Imported[_0x1a5a6d(0x30f)]&&BattleManager[_0x1a5a6d(0x268)]()){BattleManager['_subject']=this,BattleManager[_0x1a5a6d(0x2fe)]=this;for(let _0x7f4d6b=0x0;_0x7f4d6b<BattleManager[_0x1a5a6d(0x2c3)][_0x1a5a6d(0x1d9)];_0x7f4d6b++){const _0x459374=BattleManager[_0x1a5a6d(0x2c3)][_0x7f4d6b];_0x459374===_0x5c75f9&&(BattleManager['_actionBattlers'][_0x7f4d6b]=this);}for(let _0x2d7060=0x0;_0x2d7060<BattleManager[_0x1a5a6d(0x26c)][_0x1a5a6d(0x1d9)];_0x2d7060++){const _0x5472ce=BattleManager[_0x1a5a6d(0x26c)][_0x2d7060];_0x5472ce===_0x5c75f9&&(BattleManager[_0x1a5a6d(0x26c)][_0x2d7060]=this);}}if(Imported[_0x1a5a6d(0x2b9)]&&BattleManager[_0x1a5a6d(0x1d8)]()){const _0x1c3a3e=_0x5c75f9['gridRank'](),_0x365a66=_0x5c75f9[_0x1a5a6d(0x279)]();this['gridMoveTo'](_0x1c3a3e,_0x365a66);}},BattleManager[_0x59bccc(0x1db)]=function(_0x463ed6,_0xde9856){const _0x5e0dd6=_0x59bccc;this[_0x5e0dd6(0x2c3)]=this[_0x5e0dd6(0x2c3)][_0x5e0dd6(0x150)](_0x36d241=>_0x36d241===_0x463ed6?_0xde9856:_0x36d241);},VisuMZ['PartySystem']['Game_Unit_inBattle']=Game_Unit['prototype'][_0x59bccc(0x256)],Game_Unit['prototype'][_0x59bccc(0x256)]=function(){const _0x20fee3=_0x59bccc;if(SceneManager['isSceneParty']())return![];return VisuMZ['PartySystem'][_0x20fee3(0x2a7)][_0x20fee3(0x2ce)](this);},Game_Party[_0x59bccc(0x211)]=VisuMZ['PartySystem']['Settings']['General'][_0x59bccc(0x320)],VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x2d1)]=Game_Party['prototype']['initialize'],Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x12f)]=function(){const _0x46317d=_0x59bccc;VisuMZ[_0x46317d(0x179)][_0x46317d(0x2d1)][_0x46317d(0x2ce)](this),this['clearPartyBattleCommandCooldown'](),this[_0x46317d(0x1f3)](),this[_0x46317d(0x1f7)]();},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x14c)]=function(){const _0x2495a2=_0x59bccc;this[_0x2495a2(0x278)]=0x0;},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x27d)]=function(){const _0x1905a5=_0x59bccc;if(this[_0x1905a5(0x278)]===undefined)this[_0x1905a5(0x14c)]();return this[_0x1905a5(0x278)]<=0x0;},Game_Party[_0x59bccc(0x21d)]['battlePartySwitchCooldown']=function(){const _0x5be39f=_0x59bccc;if(this[_0x5be39f(0x278)]===undefined)this[_0x5be39f(0x14c)]();return this['_partySystemBattleCommandCooldown'];},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x264)]=function(_0x3d8858){const _0x35bb83=_0x59bccc;if(this['_partySystemBattleCommandCooldown']===undefined)this[_0x35bb83(0x14c)]();this[_0x35bb83(0x278)]=_0x3d8858;},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x17f)]=function(){const _0x5e6ba7=_0x59bccc;if(this[_0x5e6ba7(0x278)]===undefined)this[_0x5e6ba7(0x14c)]();this[_0x5e6ba7(0x278)]=VisuMZ[_0x5e6ba7(0x179)][_0x5e6ba7(0x1b6)][_0x5e6ba7(0x162)]['PartyCmdCooldown']||0x0;},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1a3)]=function(){const _0x480322=_0x59bccc;if(this[_0x480322(0x278)]===undefined)this[_0x480322(0x14c)]();this[_0x480322(0x278)]--;},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1f3)]=function(){const _0x423061=_0x59bccc;this[_0x423061(0x29b)]=0x0;},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x29a)]=function(_0x228d49){const _0xdb4357=_0x59bccc;this[_0xdb4357(0x29b)]=_0x228d49,this[_0xdb4357(0x1f7)](!![]),$gamePlayer&&$gamePlayer[_0xdb4357(0x15d)]()&&$gamePlayer[_0xdb4357(0x15d)]()[_0xdb4357(0x29a)]();},Game_Followers[_0x59bccc(0x21d)][_0x59bccc(0x29a)]=function(){const _0x340173=_0x59bccc;if(!SceneManager[_0x340173(0x1a0)]())return;this[_0x340173(0x29f)]();const _0x1978a9=$gameMap[_0x340173(0x143)](),_0x569ef1=$gamePlayer['x'],_0x224935=$gamePlayer['y'],_0x1b9701=$gamePlayer['direction']();$gameTemp['_bypassAutoSavePartySystem']=!![],$gamePlayer[_0x340173(0x2d3)](_0x1978a9,_0x569ef1,_0x224935,_0x1b9701,0x2),setTimeout(this[_0x340173(0x26b)][_0x340173(0x284)](this),0x7d0);},Game_Followers[_0x59bccc(0x21d)][_0x59bccc(0x26b)]=function(){const _0x27a396=_0x59bccc;$gameTemp[_0x27a396(0x203)]=![];},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x2b8)]=Scene_Base[_0x59bccc(0x21d)][_0x59bccc(0x1cf)],Scene_Base[_0x59bccc(0x21d)][_0x59bccc(0x1cf)]=function(){const _0x5d5118=_0x59bccc;if($gameTemp[_0x5d5118(0x203)])return![];return VisuMZ['PartySystem']['Scene_Base_isAutosaveEnabled']['call'](this);},Game_Party[_0x59bccc(0x21d)]['maxBattleMembers']=function(){const _0x1e0c0b=_0x59bccc;if(this[_0x1e0c0b(0x29b)]===undefined)this['initBattleMembers']();let _0x22dcbd=this[_0x1e0c0b(0x29b)]||Game_Party[_0x1e0c0b(0x211)];return Imported[_0x1e0c0b(0x2b9)]&&BattleManager['isUsingBattleGridTactics']()&&(_0x22dcbd=_0x22dcbd[_0x1e0c0b(0x184)](0x1,0x14)),_0x22dcbd;},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1d4)]=function(){const _0x1cc4bc=_0x59bccc;if(this[_0x1cc4bc(0x29b)]===undefined)this[_0x1cc4bc(0x1f7)]();if(!this[_0x1cc4bc(0x13c)])this[_0x1cc4bc(0x1f7)]();while(this[_0x1cc4bc(0x13c)][_0x1cc4bc(0x1d9)]<this[_0x1cc4bc(0x29b)]){this[_0x1cc4bc(0x13c)][_0x1cc4bc(0x1be)](0x0);}},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1f7)]=function(_0x46e5b2){const _0x325287=_0x59bccc;!_0x46e5b2&&(this[_0x325287(0x29b)]=Game_Party[_0x325287(0x211)]);this['_battleMembers']=this[_0x325287(0x324)][_0x325287(0x128)](0x0,this[_0x325287(0x29b)]);while(this[_0x325287(0x13c)][_0x325287(0x1d9)]<this[_0x325287(0x29b)]){this[_0x325287(0x13c)][_0x325287(0x1be)](0x0);}if($gamePlayer)$gamePlayer['refresh']();},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x148)]=function(){const _0x18c9d5=_0x59bccc;if(Imported[_0x18c9d5(0x2b9)]&&SceneManager[_0x18c9d5(0x249)]())return this[_0x18c9d5(0x241)](!![]);return this[_0x18c9d5(0x241)]()['filter'](_0x42b328=>!!_0x42b328);},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x241)]=function(_0x5b568a){const _0x32b17a=_0x59bccc;this[_0x32b17a(0x1d4)]();const _0x1b863a=this[_0x32b17a(0x13c)][_0x32b17a(0x150)](_0x5c2775=>$gameActors[_0x32b17a(0x291)](_0x5c2775));if(_0x5b568a)return _0x1b863a;return SceneManager['isSceneParty']()?_0x1b863a:_0x1b863a[_0x32b17a(0x283)](_0xb6afac=>_0xb6afac&&_0xb6afac[_0x32b17a(0x2b5)]());},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1e8)]=function(){const _0x356c60=_0x59bccc,_0x4da17c=this[_0x356c60(0x148)]();return this[_0x356c60(0x30b)]()[_0x356c60(0x283)](_0x430d6f=>!_0x4da17c[_0x356c60(0x298)](_0x430d6f));},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x18c)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1fb)],Game_Party['prototype']['setupStartingMembers']=function(){const _0x5c7365=_0x59bccc;VisuMZ[_0x5c7365(0x179)][_0x5c7365(0x18c)][_0x5c7365(0x2ce)](this),this['initBattleMembers']();},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x174)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x14b)],Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x14b)]=function(){const _0x51a36a=_0x59bccc;VisuMZ[_0x51a36a(0x179)][_0x51a36a(0x174)][_0x51a36a(0x2ce)](this),this[_0x51a36a(0x1f8)]();},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x281)]=function(){const _0x184665=_0x59bccc;this[_0x184665(0x29b)]=Game_Party[_0x184665(0x211)],this['_battleMembers']=[],this[_0x184665(0x324)]=[];for(const _0x3c1fdc of $dataSystem[_0x184665(0x13b)]){const _0x293bba=$gameActors[_0x184665(0x291)](_0x3c1fdc[_0x184665(0x18b)]);if(!_0x293bba)continue;_0x293bba[_0x184665(0x290)](_0x3c1fdc[_0x184665(0x26e)],![]),_0x293bba[_0x184665(0x322)](_0x3c1fdc['equips']),_0x293bba[_0x184665(0x312)](),this['_battleMembers'][_0x184665(0x1be)](_0x3c1fdc[_0x184665(0x18b)]),this[_0x184665(0x324)]['push'](_0x3c1fdc['actorId']);}this[_0x184665(0x13c)][_0x184665(0x2ca)](0x0);while(this[_0x184665(0x13c)][_0x184665(0x1d9)]<this[_0x184665(0x29b)]){this[_0x184665(0x13c)][_0x184665(0x1be)](0x0);}while(this[_0x184665(0x13c)][_0x184665(0x1d9)]>this[_0x184665(0x13f)]()){this['_battleMembers'][_0x184665(0x134)]();}if($gamePlayer)$gamePlayer['refresh']();},Game_Party['prototype']['addNonBattleTestMembers']=function(){const _0x58366a=_0x59bccc,_0x33a341=this['battleMembers']();for(let _0x55a12f=0x1;_0x55a12f<$dataActors[_0x58366a(0x1d9)];_0x55a12f++){const _0x4491c9=$gameActors[_0x58366a(0x291)](_0x55a12f);if(!_0x4491c9)continue;if(_0x4491c9['name']()[_0x58366a(0x1d9)]<=0x0)continue;if(_0x4491c9['name']()[_0x58366a(0x250)](/-----/i))continue;if(_0x33a341[_0x58366a(0x298)](_0x4491c9))continue;this[_0x58366a(0x324)][_0x58366a(0x1be)](_0x4491c9['actorId']());}},VisuMZ[_0x59bccc(0x179)]['Game_Party_addActor']=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x21b)],Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x21b)]=function(_0x5819b0){const _0x4bf189=_0x59bccc;VisuMZ['PartySystem'][_0x4bf189(0x1d6)][_0x4bf189(0x2ce)](this,_0x5819b0),this['addActorToBattleMembers'](_0x5819b0),SceneManager['isSceneBattle']()&&(Imported['VisuMZ_2_BattleSystemOTB']&&BattleManager[_0x4bf189(0x268)]()&&(BattleManager[_0x4bf189(0x304)](),BattleManager[_0x4bf189(0x1eb)]($gameActors[_0x4bf189(0x291)](_0x5819b0))));},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x16d)]=function(_0x4bc7da){const _0x50a7c5=_0x59bccc;this[_0x50a7c5(0x1d4)]();if(this[_0x50a7c5(0x13c)][_0x50a7c5(0x298)](_0x4bc7da))return;if(!this['_actors'][_0x50a7c5(0x298)](_0x4bc7da))return;if(!this['_battleMembers']['includes'](0x0))return;const _0x14bab6=$gameActors[_0x50a7c5(0x291)](_0x4bc7da);if(!_0x14bab6)return;const _0xd947a3=this[_0x50a7c5(0x13c)][_0x50a7c5(0x112)](0x0);if(_0xd947a3<0x0)return;this[_0x50a7c5(0x13c)][_0xd947a3]=_0x4bc7da,SceneManager[_0x50a7c5(0x25e)]()&&(_0x14bab6[_0x50a7c5(0x319)](),_0x14bab6[_0x50a7c5(0x165)]()),this[_0x50a7c5(0x192)]();},Game_Party['prototype'][_0x59bccc(0x2e5)]=function(_0x2414a3,_0x2683ff){const _0x2127cc=_0x59bccc;this[_0x2127cc(0x1d4)]();if(this[_0x2127cc(0x13c)][_0x2127cc(0x298)](_0x2414a3))return;if(!this[_0x2127cc(0x13c)]['includes'](0x0))return;const _0x1630f0=$gameActors[_0x2127cc(0x291)](_0x2414a3);if(!_0x1630f0)return;this[_0x2127cc(0x13c)][_0x2683ff]=_0x2414a3,_0x1630f0['makeActions'](),this['partyChangeRefresh']();},VisuMZ['PartySystem'][_0x59bccc(0x2e4)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x2e8)],Game_Party[_0x59bccc(0x21d)]['removeActor']=function(_0x199529){const _0x2a1bd2=_0x59bccc;this[_0x2a1bd2(0x170)](_0x199529),VisuMZ[_0x2a1bd2(0x179)]['Game_Party_removeActor'][_0x2a1bd2(0x2ce)](this,_0x199529);},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x170)]=function(_0x5262b6){const _0x269655=_0x59bccc;this['checkInitBattleMembers']();if(!this[_0x269655(0x13c)][_0x269655(0x298)](_0x5262b6))return;if(_0x5262b6<=0x0)return;const _0x1508e9=this[_0x269655(0x13c)][_0x269655(0x112)](_0x5262b6);this[_0x269655(0x13c)][_0x1508e9]=0x0,this['_actors']['remove'](_0x5262b6),this[_0x269655(0x324)]['push'](_0x5262b6),this[_0x269655(0x192)]();},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x192)]=function(){const _0x4c98b5=_0x59bccc;this[_0x4c98b5(0x317)](),$gamePlayer['refresh'](),$gameMap[_0x4c98b5(0x2bd)]();},Game_Party['prototype'][_0x59bccc(0x317)]=function(){const _0x4f7d38=_0x59bccc;this[_0x4f7d38(0x1d4)]();const _0x6bea91=this[_0x4f7d38(0x148)]()[_0x4f7d38(0x24b)](this[_0x4f7d38(0x1e8)]());this['_actors']=_0x6bea91['map'](_0x19c25f=>_0x19c25f?_0x19c25f['actorId']():0x0)[_0x4f7d38(0x2ca)](0x0);},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x275)]=function(){const _0x200dcf=_0x59bccc;this[_0x200dcf(0x324)][_0x200dcf(0x1f5)]((_0x4f5363,_0x2bc25b)=>_0x4f5363-_0x2bc25b),this[_0x200dcf(0x317)](),this[_0x200dcf(0x192)]();},Game_Party['prototype'][_0x59bccc(0x19d)]=function(){const _0x1fc640=_0x59bccc;for(const _0x157857 of this[_0x1fc640(0x1e8)]()){if(!_0x157857)continue;if(_0x157857[_0x1fc640(0x163)]())return!![];}return![];},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x229)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x155)],Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x155)]=function(_0x4acb69,_0x4adc80){const _0xe56fa9=_0x59bccc,_0x39b16b=this['battleMembers']()[_0xe56fa9(0x2ca)](null)[_0xe56fa9(0x2ca)](undefined)[_0xe56fa9(0x1d9)];VisuMZ[_0xe56fa9(0x179)][_0xe56fa9(0x229)]['call'](this,_0x4acb69,_0x4adc80),this[_0xe56fa9(0x1e6)](_0x4acb69,_0x4adc80,_0x39b16b);},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1e6)]=function(_0x52fa0f,_0x42c857,_0x5139e9){const _0x170a98=_0x59bccc;this[_0x170a98(0x13c)]=[];for(let _0xdf511e=0x0;_0xdf511e<this['_actors'][_0x170a98(0x1d9)];_0xdf511e++){if(this['_battleMembers'][_0x170a98(0x1d9)]>=this['maxBattleMembers']())break;if(SceneManager[_0x170a98(0x2fc)][_0x170a98(0x119)]()){if(this[_0x170a98(0x13c)][_0x170a98(0x1d9)]>=_0x5139e9)break;}this[_0x170a98(0x13c)][_0xdf511e]=this['_actors'][_0xdf511e];}$gamePlayer['refresh']();},Scene_MenuBase[_0x59bccc(0x21d)]['allowEarlySwapOrderBreak']=function(){const _0x306a6e=_0x59bccc;if(this['constructor'][_0x306a6e(0x26a)]===_0x306a6e(0x149))return!![];return![];},Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x20d)]=function(_0x358380){const _0x1b8929=_0x59bccc;if(this[_0x1b8929(0x256)]())return;if(!_0x358380)return;if(_0x358380['length']<=0x0)return;this['_forcedPartyActors']=_0x358380[_0x1b8929(0x1ad)](),this[_0x1b8929(0x1a1)]=this['_forcedPartyActors'][_0x1b8929(0x283)](_0x1e8bab=>!!$gameActors[_0x1b8929(0x291)](_0x1e8bab));while(this[_0x1b8929(0x1a1)]['length']>this['maxBattleMembers']()){this[_0x1b8929(0x1a1)][_0x1b8929(0x134)]();}$gamePlayer['refresh'](),$gameMap['requestRefresh']();},Game_Party[_0x59bccc(0x21d)]['clearForcedParty']=function(){const _0x453566=_0x59bccc;if(this[_0x453566(0x256)]())return;this[_0x453566(0x1a1)]=undefined,$gamePlayer[_0x453566(0x1ff)](),$gameMap['requestRefresh']();},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1bb)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x30b)],Game_Party['prototype'][_0x59bccc(0x30b)]=function(){const _0x333f8a=_0x59bccc;if(this['_forcedPartyActors']!==undefined)return this[_0x333f8a(0x1a1)][_0x333f8a(0x150)](_0x490bcd=>$gameActors[_0x333f8a(0x291)](_0x490bcd));return VisuMZ[_0x333f8a(0x179)][_0x333f8a(0x1bb)][_0x333f8a(0x2ce)](this);},VisuMZ['PartySystem'][_0x59bccc(0x185)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x241)],Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x241)]=function(_0x47dcdb){const _0x1980a8=_0x59bccc;if(this[_0x1980a8(0x1a1)]!==undefined)return this['_forcedPartyActors'][_0x1980a8(0x150)](_0x563610=>$gameActors[_0x1980a8(0x291)](_0x563610));return VisuMZ[_0x1980a8(0x179)]['Game_Party_rawBattleMembers_FP'][_0x1980a8(0x2ce)](this,_0x47dcdb);},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1c3)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1e8)],Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x1e8)]=function(){const _0x5ed45=_0x59bccc;if(this['_forcedPartyActors']!==undefined)return[];return VisuMZ[_0x5ed45(0x179)]['Game_Party_reserveMembers_FP'][_0x5ed45(0x2ce)](this);},VisuMZ['PartySystem'][_0x59bccc(0x28e)]=Game_System[_0x59bccc(0x21d)]['isFormationEnabled'],Game_System[_0x59bccc(0x21d)][_0x59bccc(0x254)]=function(){const _0x2eec18=_0x59bccc;if($gameParty[_0x2eec18(0x1a1)]!==undefined)return![];if($gameParty[_0x2eec18(0x1b2)]!==undefined)return![];return VisuMZ[_0x2eec18(0x179)]['Game_System_isFormationEnabled_FP'][_0x2eec18(0x2ce)](this);},VisuMZ['PartySystem'][_0x59bccc(0x238)]=Game_Actor[_0x59bccc(0x21d)][_0x59bccc(0x27d)],Game_Actor['prototype'][_0x59bccc(0x27d)]=function(){const _0x1fe8a0=_0x59bccc;if($gameParty[_0x1fe8a0(0x1a1)]!==undefined)return![];if($gameParty[_0x1fe8a0(0x1b2)]!==undefined)return![];return VisuMZ[_0x1fe8a0(0x179)][_0x1fe8a0(0x238)][_0x1fe8a0(0x2ce)](this);},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x117)]=Game_Party[_0x59bccc(0x21d)][_0x59bccc(0x27d)],Game_Party[_0x59bccc(0x21d)]['canSwitchPartyInBattle']=function(){const _0x586b17=_0x59bccc;if($gameParty['_forcedPartyActors']!==undefined)return![];if($gameParty['_forcedBattleGridTactics']!==undefined)return![];return VisuMZ[_0x586b17(0x179)][_0x586b17(0x117)][_0x586b17(0x2ce)](this);},VisuMZ[_0x59bccc(0x179)]['Game_Troop_increaseTurn']=Game_Troop[_0x59bccc(0x21d)][_0x59bccc(0x2ea)],Game_Troop[_0x59bccc(0x21d)][_0x59bccc(0x2ea)]=function(){const _0x1247da=_0x59bccc;VisuMZ[_0x1247da(0x179)][_0x1247da(0x2b2)][_0x1247da(0x2ce)](this),$gameParty[_0x1247da(0x1a3)]();},Scene_Menu['prototype']['commandFormation']=function(){const _0x259833=_0x59bccc;SceneManager[_0x259833(0x1be)](Scene_Party);};function _0x3353(_0x266e30,_0x3d7c01){const _0x5852e4=_0x5852();return _0x3353=function(_0x33533e,_0x3fa232){_0x33533e=_0x33533e-0x10c;let _0x2499c6=_0x5852e4[_0x33533e];return _0x2499c6;},_0x3353(_0x266e30,_0x3d7c01);}function Scene_Party(){const _0xad5acc=_0x59bccc;this[_0xad5acc(0x12f)](...arguments);}Scene_Party[_0x59bccc(0x21d)]=Object[_0x59bccc(0x2a3)](Scene_MenuBase[_0x59bccc(0x21d)]),Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x20e)]=Scene_Party,Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x12f)]=function(){const _0x357b45=_0x59bccc;this[_0x357b45(0x255)](),Scene_MenuBase[_0x357b45(0x21d)][_0x357b45(0x12f)][_0x357b45(0x2ce)](this);},Scene_Party['prototype'][_0x59bccc(0x118)]=function(){const _0x47f872=_0x59bccc;if(ConfigManager[_0x47f872(0x30a)]&&ConfigManager[_0x47f872(0x1cd)]!==undefined)return ConfigManager[_0x47f872(0x1cd)];else return ConfigManager[_0x47f872(0x30a)]===![]?![]:Scene_MenuBase[_0x47f872(0x21d)][_0x47f872(0x118)][_0x47f872(0x2ce)](this);},Scene_Party['prototype'][_0x59bccc(0x15b)]=function(){return 0x0;},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x125)]=function(){return!![];},Scene_Party[_0x59bccc(0x21d)]['createPageButtons']=function(){const _0x1e1ed7=_0x59bccc;Scene_MenuBase[_0x1e1ed7(0x21d)][_0x1e1ed7(0x20a)][_0x1e1ed7(0x2ce)](this),this[_0x1e1ed7(0x244)][_0x1e1ed7(0x29c)]=undefined,this[_0x1e1ed7(0x27c)][_0x1e1ed7(0x29c)]=undefined;},Scene_Party['prototype'][_0x59bccc(0x255)]=function(){const _0x1ebfa0=_0x59bccc;for(const _0x6d66f0 of $gameParty[_0x1ebfa0(0x251)]()){ImageManager[_0x1ebfa0(0x292)](_0x6d66f0[_0x1ebfa0(0x25f)]()),ImageManager[_0x1ebfa0(0x23c)](_0x6d66f0['characterName']()),ImageManager[_0x1ebfa0(0x220)](_0x6d66f0[_0x1ebfa0(0x2f5)]());}},Scene_Party['prototype'][_0x59bccc(0x2a3)]=function(){const _0x22280e=_0x59bccc;Scene_MenuBase['prototype'][_0x22280e(0x2a3)]['call'](this),this[_0x22280e(0x2a0)](),this['createActivePartyWindow'](),this['createReservePartyLabel'](),this[_0x22280e(0x2ee)](),this[_0x22280e(0x2e2)](),this['createStatusWindow']();},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x2a0)]=function(){const _0x373929=_0x59bccc,_0x4aa2fb=this[_0x373929(0x1c4)]();this['_activePartyLabel']=new Window_PartyLabel(_0x4aa2fb,TextManager[_0x373929(0x1b5)]),this[_0x373929(0x1b9)][_0x373929(0x219)](VisuMZ['PartySystem'][_0x373929(0x1b6)][_0x373929(0x114)][_0x373929(0x2e7)]),this['addWindow'](this[_0x373929(0x1b9)]);},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x1c4)]=function(){const _0x10081e=_0x59bccc;return VisuMZ[_0x10081e(0x179)]['Settings']['Window']['ActivePartyLabelRect'][_0x10081e(0x2ce)](this);},Scene_Party[_0x59bccc(0x21d)]['createActivePartyWindow']=function(){const _0x1da16c=_0x59bccc,_0x47dafb=this[_0x1da16c(0x2ec)]();this[_0x1da16c(0x2b4)]=new Window_PartyActive(_0x47dafb),this[_0x1da16c(0x2b4)][_0x1da16c(0x219)](VisuMZ[_0x1da16c(0x179)][_0x1da16c(0x1b6)]['Window'][_0x1da16c(0x1d0)]),this[_0x1da16c(0x2b4)][_0x1da16c(0x120)]('ok',this[_0x1da16c(0x186)][_0x1da16c(0x284)](this)),this[_0x1da16c(0x2b4)]['setHandler'](_0x1da16c(0x302),this[_0x1da16c(0x28f)][_0x1da16c(0x284)](this)),this['addWindow'](this[_0x1da16c(0x2b4)]);},Scene_Party['prototype'][_0x59bccc(0x2ec)]=function(){const _0x2e434b=_0x59bccc;return VisuMZ[_0x2e434b(0x179)]['Settings']['Window']['ActivePartyWindowRect'][_0x2e434b(0x2ce)](this);},Scene_Party['prototype'][_0x59bccc(0x186)]=function(){const _0xad569a=_0x59bccc;this[_0xad569a(0x137)]['activate'](),this[_0xad569a(0x137)][_0xad569a(0x265)]();},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x195)]=function(){const _0x37a822=_0x59bccc,_0x9d9f1b=this['reservePartyLabelRect']();this['_reservePartyLabel']=new Window_PartyLabel(_0x9d9f1b,TextManager[_0x37a822(0x1e9)]),this[_0x37a822(0x1e7)][_0x37a822(0x219)](VisuMZ[_0x37a822(0x179)][_0x37a822(0x1b6)][_0x37a822(0x114)][_0x37a822(0x213)]),this[_0x37a822(0x1e3)](this[_0x37a822(0x1e7)]);},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x262)]=function(){const _0x1ada9f=_0x59bccc;return VisuMZ[_0x1ada9f(0x179)]['Settings'][_0x1ada9f(0x114)][_0x1ada9f(0x1bc)][_0x1ada9f(0x2ce)](this);},Scene_Party[_0x59bccc(0x21d)]['createReservePartyWindow']=function(){const _0x30d193=_0x59bccc,_0x8ecb2f=this[_0x30d193(0x2d6)]();this[_0x30d193(0x137)]=new Window_PartyReserve(_0x8ecb2f),this[_0x30d193(0x137)][_0x30d193(0x219)](VisuMZ[_0x30d193(0x179)][_0x30d193(0x1b6)][_0x30d193(0x114)]['ReservePartyWindowBgType']),this[_0x30d193(0x137)]['setHandler']('ok',this[_0x30d193(0x294)]['bind'](this)),this[_0x30d193(0x137)][_0x30d193(0x120)](_0x30d193(0x302),this[_0x30d193(0x22a)][_0x30d193(0x284)](this)),this[_0x30d193(0x1e3)](this[_0x30d193(0x137)]);},Scene_Party['prototype'][_0x59bccc(0x2d6)]=function(){const _0x544d44=_0x59bccc;return VisuMZ['PartySystem'][_0x544d44(0x1b6)][_0x544d44(0x114)]['ReservePartyWindowRect'][_0x544d44(0x2ce)](this);},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x294)]=function(){const _0x4aa262=_0x59bccc,_0x47df0e=this['_reservePartyWindow'][_0x4aa262(0x11d)](),_0x2ba670=this[_0x4aa262(0x2b4)][_0x4aa262(0x193)]();if(_0x47df0e<0x0){if(_0x2ba670)$gameParty['removeActorFromBattleMembers'](_0x2ba670[_0x4aa262(0x18b)]());}else{const _0x3a77ea=this[_0x4aa262(0x137)][_0x4aa262(0x193)]()[_0x4aa262(0x18b)](),_0x25e883=this['_activePartyWindow'][_0x4aa262(0x1cc)]();if(_0x2ba670)$gameParty[_0x4aa262(0x170)](_0x2ba670[_0x4aa262(0x18b)]());$gameParty[_0x4aa262(0x2e5)](_0x3a77ea,_0x25e883);}this[_0x4aa262(0x15f)](),this[_0x4aa262(0x22a)]();},Scene_Party[_0x59bccc(0x21d)]['refreshAllWindows']=function(){const _0x4e97e8=_0x59bccc;this[_0x4e97e8(0x2b4)][_0x4e97e8(0x1ff)](),this[_0x4e97e8(0x137)][_0x4e97e8(0x1ff)]();},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x22a)]=function(){const _0x4a838c=_0x59bccc;this['_reservePartyWindow'][_0x4a838c(0x1c0)](),this['_reservePartyWindow'][_0x4a838c(0x17c)](),this['_activePartyWindow'][_0x4a838c(0x21e)]();},Scene_Party[_0x59bccc(0x21d)]['createStatusLabel']=function(){const _0x35ad48=_0x59bccc,_0x2263e4=this['statusLabelRect']();this[_0x35ad48(0x129)]=new Window_PartyLabel(_0x2263e4,TextManager[_0x35ad48(0x27a)]),this[_0x35ad48(0x129)][_0x35ad48(0x219)](VisuMZ[_0x35ad48(0x179)][_0x35ad48(0x1b6)][_0x35ad48(0x114)][_0x35ad48(0x19f)]),this[_0x35ad48(0x1e3)](this[_0x35ad48(0x129)]);},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x23f)]=function(){const _0x1cd9e2=_0x59bccc;return VisuMZ[_0x1cd9e2(0x179)][_0x1cd9e2(0x1b6)]['Window'][_0x1cd9e2(0x20c)][_0x1cd9e2(0x2ce)](this);},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x28c)]=function(){const _0x5e5891=_0x59bccc,_0x5c05fd=this['statusWindowRect']();this['_statusPartyWindow']=new Window_PartyStatus(_0x5c05fd),this[_0x5e5891(0x2ef)][_0x5e5891(0x219)](VisuMZ[_0x5e5891(0x179)][_0x5e5891(0x1b6)][_0x5e5891(0x114)][_0x5e5891(0x2e6)]),this[_0x5e5891(0x1e3)](this[_0x5e5891(0x2ef)]),this[_0x5e5891(0x137)][_0x5e5891(0x20b)](this[_0x5e5891(0x2ef)]),this[_0x5e5891(0x2b4)][_0x5e5891(0x20b)](this['_statusPartyWindow']);},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x111)]=function(){const _0x1d446e=_0x59bccc;return VisuMZ[_0x1d446e(0x179)][_0x1d446e(0x1b6)]['Window'][_0x1d446e(0x22f)][_0x1d446e(0x2ce)](this);},Scene_Party[_0x59bccc(0x21d)]['buttonAssistKey3']=function(){const _0xc7a17c=_0x59bccc;return TextManager[_0xc7a17c(0x12c)](_0xc7a17c(0x208));},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x2ba)]=function(){const _0x3b24cd=_0x59bccc;return TextManager[_0x3b24cd(0x2de)];},Scene_Party['prototype'][_0x59bccc(0x115)]=function(){const _0x565408=_0x59bccc,_0xfc9457=this[_0x565408(0x2b4)],_0x3fc664=this[_0x565408(0x137)];if(_0xfc9457&&_0xfc9457[_0x565408(0x217)]&&_0xfc9457[_0x565408(0x193)]()&&_0xfc9457['isShiftRemoveShortcutEnabled']())return TextManager[_0x565408(0x235)];else return _0x3fc664&&_0x3fc664[_0x565408(0x217)]&&$gameParty[_0x565408(0x1e8)]()[_0x565408(0x1d9)]>0x0?TextManager[_0x565408(0x24c)]:'';},Scene_Party['prototype'][_0x59bccc(0x31a)]=function(){const _0x2c44cc=_0x59bccc;if(this[_0x2c44cc(0x2b4)]&&this[_0x2c44cc(0x2b4)][_0x2c44cc(0x217)])return TextManager[_0x2c44cc(0x24e)];else return this['_reservePartyWindow']&&this['_reservePartyWindow'][_0x2c44cc(0x217)]?TextManager['assistSwapInPartyMember']:Scene_MenuBase[_0x2c44cc(0x21d)]['buttonAssistText4'][_0x2c44cc(0x2ce)](this);},Scene_Party['prototype'][_0x59bccc(0x132)]=function(){const _0x257090=_0x59bccc;Scene_MenuBase[_0x257090(0x21d)][_0x257090(0x132)][_0x257090(0x2ce)](this),this[_0x257090(0x1fc)](this['getBackgroundOpacity']()),this['createCustomBackgroundImages']();},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x2a5)]=function(){const _0x103f2c=_0x59bccc;return VisuMZ[_0x103f2c(0x179)][_0x103f2c(0x1b6)][_0x103f2c(0x1f9)][_0x103f2c(0x27e)];},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x30d)]=function(){const _0x5e841c=_0x59bccc,_0x5cc4ff={'BgFilename1':VisuMZ[_0x5e841c(0x179)][_0x5e841c(0x1b6)][_0x5e841c(0x1f9)][_0x5e841c(0x31f)],'BgFilename2':VisuMZ['PartySystem'][_0x5e841c(0x1b6)][_0x5e841c(0x1f9)][_0x5e841c(0x272)]};_0x5cc4ff&&(_0x5cc4ff[_0x5e841c(0x31f)]!==''||_0x5cc4ff['BgFilename2']!=='')&&(this[_0x5e841c(0x243)]=new Sprite(ImageManager['loadTitle1'](_0x5cc4ff[_0x5e841c(0x31f)])),this[_0x5e841c(0x172)]=new Sprite(ImageManager['loadTitle2'](_0x5cc4ff['BgFilename2'])),this[_0x5e841c(0x177)](this[_0x5e841c(0x243)]),this['addChild'](this[_0x5e841c(0x172)]),this[_0x5e841c(0x243)][_0x5e841c(0x2fa)]['addLoadListener'](this[_0x5e841c(0x25d)][_0x5e841c(0x284)](this,this[_0x5e841c(0x243)])),this['_backSprite2'][_0x5e841c(0x2fa)][_0x5e841c(0x245)](this[_0x5e841c(0x25d)][_0x5e841c(0x284)](this,this[_0x5e841c(0x172)])));},Scene_Party[_0x59bccc(0x21d)][_0x59bccc(0x25d)]=function(_0x373c53){this['scaleSprite'](_0x373c53),this['centerSprite'](_0x373c53);},Scene_Party[_0x59bccc(0x21d)]['terminate']=function(){const _0x350283=_0x59bccc;Scene_MenuBase[_0x350283(0x21d)][_0x350283(0x1a9)]['call'](this),$gameParty[_0x350283(0x192)]();},Window_StatusBase['prototype'][_0x59bccc(0x15a)]=function(_0x5c64e0,_0x24e51a,_0x314404,_0x57056e){const _0x2c5828=_0x59bccc;if(!_0x5c64e0)return;_0x57056e?this[_0x2c5828(0x1ae)](_0x5c64e0,_0x24e51a,_0x314404):this[_0x2c5828(0x1b4)](_0x5c64e0,_0x24e51a,_0x314404);},Window_StatusBase[_0x59bccc(0x21d)][_0x59bccc(0x1b4)]=function(_0x1446f8,_0x34f0b2,_0x3bb3c7){const _0x9ce149=_0x59bccc;_0x3bb3c7+=Math['round']((this[_0x9ce149(0x196)]()-ImageManager[_0x9ce149(0x2d7)])/0x2),!_0x1446f8[_0x9ce149(0x2d9)]()&&(this[_0x9ce149(0x305)](ImageManager[_0x9ce149(0x209)],_0x34f0b2,_0x3bb3c7),_0x34f0b2+=ImageManager[_0x9ce149(0x29e)]+0x4),_0x1446f8[_0x9ce149(0x163)]()&&(this['drawIcon'](ImageManager[_0x9ce149(0x201)],_0x34f0b2,_0x3bb3c7),_0x34f0b2+=ImageManager[_0x9ce149(0x29e)]+0x4);},Window_StatusBase[_0x59bccc(0x21d)][_0x59bccc(0x1ae)]=function(_0x299ba8,_0x29c4dd,_0x4dc17f){const _0x2751a5=_0x59bccc;let _0x4092d0=0x0;if(!_0x299ba8['isFormationChangeOk']())_0x4092d0+=0x1;if(_0x299ba8[_0x2751a5(0x163)]())_0x4092d0+=0x1;if(_0x4092d0<=0x1)return this[_0x2751a5(0x1b4)](_0x299ba8,_0x29c4dd,_0x4dc17f);_0x4dc17f+=Math['round']((this[_0x2751a5(0x196)]()-ImageManager[_0x2751a5(0x2d7)])/0x2),_0x4dc17f-=Math[_0x2751a5(0x194)](this[_0x2751a5(0x196)]()/0x2),this[_0x2751a5(0x305)](ImageManager[_0x2751a5(0x209)],_0x29c4dd,_0x4dc17f),_0x4dc17f+=this[_0x2751a5(0x196)](),this['drawIcon'](ImageManager[_0x2751a5(0x201)],_0x29c4dd,_0x4dc17f);};function Window_PartyLabel(){const _0x88c25d=_0x59bccc;this[_0x88c25d(0x12f)](...arguments);}Window_PartyLabel['prototype']=Object[_0x59bccc(0x2a3)](Window_Base[_0x59bccc(0x21d)]),Window_PartyLabel[_0x59bccc(0x21d)][_0x59bccc(0x20e)]=Window_PartyLabel,Window_PartyLabel['prototype'][_0x59bccc(0x12f)]=function(_0x5ddccc,_0x338056){const _0x42bdfa=_0x59bccc;Window_Base[_0x42bdfa(0x21d)][_0x42bdfa(0x12f)][_0x42bdfa(0x2ce)](this,_0x5ddccc),this[_0x42bdfa(0x17b)](_0x338056);},Window_PartyLabel[_0x59bccc(0x21d)][_0x59bccc(0x145)]=function(){const _0x2bf40f=_0x59bccc;this[_0x2bf40f(0x234)]=0x0;},Window_PartyLabel[_0x59bccc(0x21d)][_0x59bccc(0x17b)]=function(_0x23025c){const _0x9b32d4=_0x59bccc;this[_0x9b32d4(0x11c)][_0x9b32d4(0x2d2)](),this['drawText'](_0x23025c,0x0,0x0,this['innerWidth'],_0x9b32d4(0x10d));};function Window_PartyActive(){const _0x8fefa1=_0x59bccc;this[_0x8fefa1(0x12f)](...arguments);}Window_PartyActive[_0x59bccc(0x21d)]=Object[_0x59bccc(0x2a3)](Window_StatusBase[_0x59bccc(0x21d)]),Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x20e)]=Window_PartyActive,Window_PartyActive[_0x59bccc(0x1fd)]=VisuMZ[_0x59bccc(0x179)]['Settings'][_0x59bccc(0x114)][_0x59bccc(0x258)],Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x12f)]=function(_0xc3dbdf){const _0xefd93a=_0x59bccc;Window_StatusBase['prototype'][_0xefd93a(0x12f)][_0xefd93a(0x2ce)](this,_0xc3dbdf),this[_0xefd93a(0x1ff)](),this[_0xefd93a(0x21e)](),this[_0xefd93a(0x2c4)](0x0);},Window_PartyActive['prototype'][_0x59bccc(0x2d4)]=function(){const _0x47333d=_0x59bccc;return VisuMZ[_0x47333d(0x179)][_0x47333d(0x1b6)]['General']['AddRemoveCmd'];},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x1c9)]=function(){const _0x217cb9=_0x59bccc;return $gameParty[_0x217cb9(0x13f)]();},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x24a)]=function(){const _0x16cf06=_0x59bccc;return $gameParty[_0x16cf06(0x13f)]();},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x199)]=function(){const _0x4b8026=_0x59bccc;return this[_0x4b8026(0x13d)];},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x291)]=function(_0x1ec224){const _0x273246=_0x59bccc;return $gameParty[_0x273246(0x241)]()[_0x1ec224];},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x193)]=function(){const _0x3875f7=_0x59bccc;return this[_0x3875f7(0x291)](this[_0x3875f7(0x1cc)]());},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x1b7)]=function(){const _0x4b5332=_0x59bccc,_0xeeb0f1=this[_0x4b5332(0x291)](this[_0x4b5332(0x1cc)]());return _0xeeb0f1?_0xeeb0f1[_0x4b5332(0x2d9)]():!![];},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x157)]=function(){const _0x29fc4a=_0x59bccc;if($gameParty['members']()[_0x29fc4a(0x1d9)]<=0x0)return!![];if($gameParty[_0x29fc4a(0x19d)]())return![];return $gameParty[_0x29fc4a(0x148)]()[_0x29fc4a(0x1d9)]>0x0;},Window_PartyActive[_0x59bccc(0x21d)]['processCursorMove']=function(){const _0x43acf9=_0x59bccc;Window_StatusBase[_0x43acf9(0x21d)][_0x43acf9(0x18f)]['call'](this),this[_0x43acf9(0x2e9)]();},Window_PartyActive['prototype'][_0x59bccc(0x16a)]=function(_0x5e1a31){const _0x42eb6e=_0x59bccc;this['isOkEnabled']()&&this[_0x42eb6e(0x14a)]();},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x198)]=function(){const _0x387fcc=_0x59bccc,_0x5cdd24=this[_0x387fcc(0x1cc)](),_0xd28b92=_0x5cdd24+0x1>=this[_0x387fcc(0x1c9)]()?0x0:_0x5cdd24+0x1;this['quickSwap'](_0x5cdd24,_0xd28b92);},Window_PartyActive['prototype'][_0x59bccc(0x171)]=function(){const _0x592a2c=_0x59bccc,_0x65d384=this[_0x592a2c(0x1cc)](),_0x3c4d77=_0x65d384-0x1<0x0?this[_0x592a2c(0x1c9)]()-0x1:_0x65d384-0x1;this['quickSwap'](_0x65d384,_0x3c4d77);},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x12e)]=function(_0x56ca17,_0x56f40c){const _0x43b19e=_0x59bccc,_0x48766f=this[_0x43b19e(0x291)](_0x56ca17),_0x28e4de=this[_0x43b19e(0x291)](_0x56f40c);if(_0x48766f&&!_0x48766f['isFormationChangeOk']())return;if(_0x28e4de&&!_0x28e4de[_0x43b19e(0x2d9)]())return;const _0x3ac054=$gameParty[_0x43b19e(0x13c)];_0x3ac054[_0x56ca17]=_0x28e4de?_0x28e4de[_0x43b19e(0x18b)]():0x0,_0x3ac054[_0x56f40c]=_0x48766f?_0x48766f[_0x43b19e(0x18b)]():0x0,this[_0x43b19e(0x1ff)](),this[_0x43b19e(0x11e)](),this[_0x43b19e(0x2c4)](_0x56f40c);},Window_PartyActive['prototype'][_0x59bccc(0x2e9)]=function(){const _0x4b4009=_0x59bccc;if(!this[_0x4b4009(0x205)]())return;if(Input[_0x4b4009(0x230)](_0x4b4009(0x208))){const _0x475aa8=this[_0x4b4009(0x193)]();this[_0x4b4009(0x2a1)]();}},Window_PartyActive['prototype'][_0x59bccc(0x2a1)]=function(){const _0x5011f8=_0x59bccc;SoundManager['playEquip']();const _0x43141c=this[_0x5011f8(0x193)]();$gameParty[_0x5011f8(0x170)](_0x43141c[_0x5011f8(0x18b)]()),this[_0x5011f8(0x126)](),SceneManager[_0x5011f8(0x2fc)]['refreshAllWindows']();},Window_PartyActive[_0x59bccc(0x21d)]['isShiftRemoveShortcutEnabled']=function(){const _0x42945b=_0x59bccc;if(!this['addRemoveCommand']())return![];const _0x82095f=this[_0x42945b(0x193)]();return this['active']&&_0x82095f&&_0x82095f[_0x42945b(0x2d9)]();},Window_PartyActive[_0x59bccc(0x21d)]['drawItem']=function(_0x1f57bf){const _0x5a4d9c=_0x59bccc,_0x1dd828=this[_0x5a4d9c(0x291)](_0x1f57bf);if(!_0x1dd828)return this['drawItemEmpty'](_0x1f57bf);this[_0x5a4d9c(0x200)]();const _0xdb54f4=this[_0x5a4d9c(0x21c)](_0x1f57bf);this[_0x5a4d9c(0x26d)](_0x1f57bf);const _0x101dce=_0xdb54f4['y']+_0xdb54f4[_0x5a4d9c(0x131)]-this[_0x5a4d9c(0x196)]();this['drawDarkRect'](_0xdb54f4['x'],_0x101dce,_0xdb54f4[_0x5a4d9c(0x25b)],0x2),this[_0x5a4d9c(0x15a)](_0x1dd828,_0xdb54f4['x']+0x2,_0xdb54f4['y']),this['drawActorName'](_0x1dd828,_0xdb54f4['x'],_0x101dce,_0xdb54f4[_0x5a4d9c(0x25b)]);},Window_PartyActive['prototype'][_0x59bccc(0x206)]=function(_0x185f0f){const _0x223013=_0x59bccc;this[_0x223013(0x200)]();const _0x1903e5=this[_0x223013(0x21c)](_0x185f0f);this[_0x223013(0x21f)](_0x1903e5['x'],_0x1903e5['y'],_0x1903e5[_0x223013(0x25b)],_0x1903e5[_0x223013(0x131)]);const _0x2a5a43=_0x1903e5['y']+Math[_0x223013(0x194)]((_0x1903e5[_0x223013(0x131)]-this[_0x223013(0x196)]())/0x2);this[_0x223013(0x152)](ColorManager[_0x223013(0x14d)]()),this[_0x223013(0x1e4)](TextManager[_0x223013(0x31b)],_0x1903e5['x'],_0x2a5a43,_0x1903e5[_0x223013(0x25b)],_0x223013(0x10d));},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x21f)]=function(_0x308e0e,_0xf1456b,_0x27f1ac,_0x250cc6,_0x278ccd){const _0x30fd7e=_0x59bccc;_0x278ccd=Math[_0x30fd7e(0x210)](_0x278ccd||0x1,0x1);while(_0x278ccd--){_0x250cc6=_0x250cc6||this[_0x30fd7e(0x196)](),this[_0x30fd7e(0x11c)][_0x30fd7e(0x1a5)]=0xa0;const _0x4125fb=ColorManager[_0x30fd7e(0x207)]();this[_0x30fd7e(0x11c)][_0x30fd7e(0x223)](_0x308e0e+0x1,_0xf1456b+0x1,_0x27f1ac-0x2,_0x250cc6-0x2,_0x4125fb),this[_0x30fd7e(0x11c)][_0x30fd7e(0x1a5)]=0xff;}},Window_PartyActive['prototype']['drawItemImage']=function(_0x259696){const _0x92c6f=_0x59bccc;switch(Window_PartyActive['_actorGraphic']['toLowerCase']()[_0x92c6f(0x314)]()){case _0x92c6f(0x10c):this[_0x92c6f(0x1ec)](_0x259696);break;case _0x92c6f(0x202):this[_0x92c6f(0x2f2)](_0x259696);break;case _0x92c6f(0x1de):Imported[_0x92c6f(0x252)]&&this[_0x92c6f(0x1c2)](_0x259696);break;};},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x1ec)]=function(_0x5c1038){const _0x13856d=_0x59bccc,_0x2650e9=this['actor'](_0x5c1038),_0x25d58a=this['itemRect'](_0x5c1038),_0x1b8331=Math[_0x13856d(0x2df)](ImageManager[_0x13856d(0x2a4)],_0x25d58a[_0x13856d(0x25b)]-0x2),_0x26a85f=_0x25d58a[_0x13856d(0x131)]-0x2;this[_0x13856d(0x309)](_0x2650e9['isFormationChangeOk']());const _0x5564bb=Math[_0x13856d(0x194)](_0x25d58a['x']+(_0x25d58a[_0x13856d(0x25b)]-_0x1b8331)/0x2);this[_0x13856d(0x237)](_0x2650e9,_0x5564bb,_0x25d58a['y']+0x1,_0x1b8331,_0x26a85f),this[_0x13856d(0x309)](!![]);},Window_PartyActive[_0x59bccc(0x21d)]['drawItemImageSprite']=function(_0xf30090){const _0x219264=_0x59bccc,_0x345cf0=this[_0x219264(0x291)](_0xf30090),_0xa60c7d=this[_0x219264(0x21c)](_0xf30090),_0x459b08=VisuMZ[_0x219264(0x179)][_0x219264(0x1b6)][_0x219264(0x114)],_0x595444=_0xa60c7d['x']+Math['round'](_0xa60c7d[_0x219264(0x25b)]/0x2)+_0x459b08[_0x219264(0x2eb)],_0x383fed=_0xa60c7d['y']+_0xa60c7d['height']-this[_0x219264(0x196)]()-_0x459b08['ActiveSpriteOffsetY'];this['drawActorCharacter'](_0x345cf0,_0x595444,_0x383fed);},Window_PartyActive[_0x59bccc(0x21d)]['drawItemImageSvActor']=function(_0x4c7950){const _0x3bfb62=_0x59bccc,_0x1c2536=this[_0x3bfb62(0x291)](_0x4c7950),_0x5df3fb=_0x1c2536['battlerName'](),_0x573f8d=this[_0x3bfb62(0x21c)](_0x4c7950),_0x3b5b15=VisuMZ[_0x3bfb62(0x179)][_0x3bfb62(0x1b6)][_0x3bfb62(0x114)],_0x4c89a4=_0x573f8d['x']+Math['round'](_0x573f8d['width']/0x2)+_0x3b5b15[_0x3bfb62(0x138)],_0x417b47=_0x573f8d['y']+_0x573f8d[_0x3bfb62(0x131)]-this[_0x3bfb62(0x196)]()-_0x3b5b15[_0x3bfb62(0x197)];this[_0x3bfb62(0x2d8)](_0x5df3fb,_0x4c89a4,_0x417b47);},Window_PartyActive[_0x59bccc(0x21d)][_0x59bccc(0x2f9)]=function(_0x3566fa,_0x235def,_0x2d1a9a,_0x54c6bf){const _0x286c5b=_0x59bccc,_0x5dd2ec=ColorManager[_0x286c5b(0x288)](),_0x15d7b0=ColorManager[_0x286c5b(0x261)](),_0x5a99cc=_0x2d1a9a/0x2,_0x14eb4b=this[_0x286c5b(0x196)]();while(_0x54c6bf--){this['contents'][_0x286c5b(0x1a4)](_0x3566fa,_0x235def,_0x5a99cc,_0x14eb4b,_0x15d7b0,_0x5dd2ec),this[_0x286c5b(0x11c)][_0x286c5b(0x1a4)](_0x3566fa+_0x5a99cc,_0x235def,_0x5a99cc,_0x14eb4b,_0x5dd2ec,_0x15d7b0);}},Window_PartyActive[_0x59bccc(0x21d)]['drawActorName']=function(_0x5e2538,_0x9c75fd,_0x4601db,_0x32a67e){const _0x62459b=_0x59bccc;_0x32a67e=_0x32a67e||0xa8,this[_0x62459b(0x152)](ColorManager['hpColor'](_0x5e2538)),this[_0x62459b(0x1e4)](_0x5e2538[_0x62459b(0x26a)](),_0x9c75fd,_0x4601db,_0x32a67e,_0x62459b(0x10d));},Window_PartyActive['prototype'][_0x59bccc(0x20b)]=function(_0x3f48ed){const _0x44c3fe=_0x59bccc;this[_0x44c3fe(0x121)]=_0x3f48ed,this[_0x44c3fe(0x126)]();},Window_PartyActive[_0x59bccc(0x21d)]['callUpdateHelp']=function(){const _0x40ef64=_0x59bccc;if(this[_0x40ef64(0x121)])this['_statusWindow'][_0x40ef64(0x2e1)](this['actor'](this[_0x40ef64(0x1cc)]()));};function Window_PartyReserve(){this['initialize'](...arguments);}Window_PartyReserve['prototype']=Object['create'](Window_StatusBase[_0x59bccc(0x21d)]),Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x20e)]=Window_PartyReserve,Window_PartyReserve[_0x59bccc(0x1fd)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x114)][_0x59bccc(0x2bc)],Window_PartyReserve[_0x59bccc(0x22d)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x114)]['ReserveItemThickness'],Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x12f)]=function(_0x196e2a){const _0x1b646c=_0x59bccc;Window_StatusBase[_0x1b646c(0x21d)][_0x1b646c(0x12f)]['call'](this,_0x196e2a),this[_0x1b646c(0x1dc)]=0x0,this[_0x1b646c(0x1ff)]();},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x24a)]=function(){const _0x4cca7c=_0x59bccc;return VisuMZ['PartySystem']['Settings'][_0x4cca7c(0x114)][_0x4cca7c(0x227)]||0x1;},Window_PartyReserve['prototype'][_0x59bccc(0x199)]=function(){const _0x57cf0f=_0x59bccc;return this[_0x57cf0f(0x196)]()*Window_PartyReserve['_rowThickness']+0x6;},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x2d4)]=function(){const _0x46d6ef=_0x59bccc;return VisuMZ[_0x46d6ef(0x179)][_0x46d6ef(0x1b6)]['General']['AddRemoveCmd'];},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x1c9)]=function(){const _0x83e6ff=_0x59bccc;let _0x3f4b3f=$gameParty[_0x83e6ff(0x1e8)]()[_0x83e6ff(0x1d9)];if(this[_0x83e6ff(0x2d4)]())_0x3f4b3f++;return _0x3f4b3f;},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x291)]=function(_0x3ec094){const _0x37862c=_0x59bccc;return $gameParty[_0x37862c(0x1e8)]()[_0x3ec094];},Window_PartyReserve[_0x59bccc(0x21d)]['currentActor']=function(){return this['actor'](this['index']());},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x17e)]=function(){const _0x1dfb30=_0x59bccc;SoundManager[_0x1dfb30(0x2da)]();},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x1b7)]=function(){const _0x4023b6=_0x59bccc,_0x2a62f6=this[_0x4023b6(0x291)](this['index']());return _0x2a62f6?_0x2a62f6['isFormationChangeOk']():!![];},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x18f)]=function(){const _0x10656d=_0x59bccc;Window_StatusBase[_0x10656d(0x21d)][_0x10656d(0x18f)][_0x10656d(0x2ce)](this),this[_0x10656d(0x2e3)]();},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x214)]=function(_0x14dd9f){const _0x24f176=_0x59bccc;this[_0x24f176(0x1cc)]()<=0x0&&Input[_0x24f176(0x230)]('up')?this[_0x24f176(0x1d7)]():Window_StatusBase[_0x24f176(0x21d)]['cursorUp'][_0x24f176(0x2ce)](this,_0x14dd9f);},Window_PartyReserve['prototype'][_0x59bccc(0x198)]=function(){const _0xfa60cd=_0x59bccc,_0x488d3a=this['index'](),_0xe9fa28=_0x488d3a+0x1>=this[_0xfa60cd(0x1c9)]()-0x1?0x0:_0x488d3a+0x1;this[_0xfa60cd(0x12e)](_0x488d3a,_0xe9fa28);},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x171)]=function(){const _0x5012ed=_0x59bccc,_0x393efe=this[_0x5012ed(0x1cc)](),_0x1f7a65=_0x393efe-0x1<0x0?this[_0x5012ed(0x1c9)]()-0x2:_0x393efe-0x1;this[_0x5012ed(0x12e)](_0x393efe,_0x1f7a65);},Window_PartyReserve[_0x59bccc(0x21d)]['quickSwap']=function(_0x3064fb,_0x3512b1){const _0x502e8f=_0x59bccc,_0x41a53e=this[_0x502e8f(0x291)](_0x3064fb),_0x9307fc=this[_0x502e8f(0x291)](_0x3512b1);if(!_0x41a53e?.['isFormationChangeOk']()||!_0x9307fc?.['isFormationChangeOk']())return;else{if(!_0x41a53e||!_0x9307fc)return;}const _0x53bbce=$gameParty[_0x502e8f(0x324)],_0x24e644=_0x53bbce[_0x502e8f(0x112)](_0x41a53e[_0x502e8f(0x18b)]()),_0x3a4e53=_0x53bbce[_0x502e8f(0x112)](_0x9307fc['actorId']());_0x53bbce[_0x24e644]=_0x9307fc?_0x9307fc[_0x502e8f(0x18b)]():0x0,_0x53bbce[_0x3a4e53]=_0x41a53e?_0x41a53e['actorId']():0x0,this[_0x502e8f(0x1ff)](),this[_0x502e8f(0x11e)](),this['smoothSelect'](_0x3512b1);},Window_PartyReserve[_0x59bccc(0x21d)]['checkShiftSortShortcut']=function(){const _0x289fb2=_0x59bccc;if(!this[_0x289fb2(0x2f0)]())return;Input[_0x289fb2(0x230)](_0x289fb2(0x208))&&this[_0x289fb2(0x232)]();},Window_PartyReserve[_0x59bccc(0x21d)]['processShiftSortShortcut']=function(){const _0x1f6920=_0x59bccc;SoundManager[_0x1f6920(0x2da)](),$gameParty[_0x1f6920(0x275)](),this[_0x1f6920(0x2c4)](0x0),SceneManager[_0x1f6920(0x2fc)][_0x1f6920(0x15f)]();},Window_PartyReserve[_0x59bccc(0x21d)]['isShiftShortcutEnabled']=function(){const _0x1d1a53=_0x59bccc;return this[_0x1d1a53(0x217)];},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x11d)]=function(){const _0x5e1391=_0x59bccc,_0x50dea6=this[_0x5e1391(0x193)]();return _0x50dea6?_0x50dea6['index']():-0x1;},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x175)]=function(_0x2d06ec){const _0x421d39=_0x59bccc;Window_StatusBase['prototype']['select'][_0x421d39(0x2ce)](this,_0x2d06ec);if(_0x2d06ec>=0x0)this[_0x421d39(0x1dc)]=_0x2d06ec;},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x265)]=function(){const _0x50c0df=_0x59bccc;this['_lastIndex']=Math['min'](this[_0x50c0df(0x1dc)],this[_0x50c0df(0x1c9)]()-0x1),this[_0x50c0df(0x2c4)](this[_0x50c0df(0x1dc)]),this[_0x50c0df(0x295)](!![]),this[_0x50c0df(0x2c5)]=!![];},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x204)]=function(_0x3d0297){const _0x161a9a=_0x59bccc,_0x380f3f=this['actor'](_0x3d0297);if(!_0x380f3f)return this['drawRemoveCommand'](_0x3d0297);const _0x4221db=this['itemLineRect'](_0x3d0297);this[_0x161a9a(0x26d)](_0x3d0297);const _0x52565d=0xa8,_0x375752=Window_PartyReserve[_0x161a9a(0x22d)]===0x1,_0x46d21b=ImageManager[_0x161a9a(0x29e)]*(_0x375752?0x2:0x1),_0x5a3bfd=this[_0x161a9a(0x2b6)]()+this[_0x161a9a(0x18a)](),_0x65b77f=_0x4221db[_0x161a9a(0x25b)]-_0x52565d,_0xe8f532=_0x4221db['x']+_0x46d21b+Math[_0x161a9a(0x2df)](_0x5a3bfd,_0x65b77f),_0x17d41a=_0x375752?![]:!![];this['changePaintOpacity'](_0x380f3f['isFormationChangeOk']()),this[_0x161a9a(0x15a)](_0x380f3f,_0x4221db['x'],_0x4221db['y'],_0x17d41a),this[_0x161a9a(0x2b0)](_0x380f3f,_0xe8f532,_0x4221db['y'],_0x52565d),this[_0x161a9a(0x309)](!![]);},Window_PartyReserve['prototype'][_0x59bccc(0x2b6)]=function(){const _0x5bf93c=_0x59bccc,_0x3249ab=VisuMZ[_0x5bf93c(0x179)][_0x5bf93c(0x1b6)][_0x5bf93c(0x114)];switch(Window_PartyReserve['_actorGraphic'][_0x5bf93c(0x19c)]()[_0x5bf93c(0x314)]()){case'face':return ImageManager[_0x5bf93c(0x2a4)];case _0x5bf93c(0x202):return _0x3249ab['ReserveSpriteOffsetX']*0x2;case _0x5bf93c(0x1de):return _0x3249ab[_0x5bf93c(0x124)]*0x2;};},Window_PartyReserve['prototype']['drawRemoveCommand']=function(_0x10a026){const _0x201f3b=_0x59bccc,_0x39c71c=this[_0x201f3b(0x159)](_0x10a026);this[_0x201f3b(0x309)](!![]);const _0x31f5e9=TextManager[_0x201f3b(0x318)];this[_0x201f3b(0x1e4)](_0x31f5e9,_0x39c71c['x'],_0x39c71c['y'],_0x39c71c['width'],_0x201f3b(0x10d));},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x26d)]=function(_0x324c75){const _0x5a0054=_0x59bccc;switch(Window_PartyReserve['_actorGraphic'][_0x5a0054(0x19c)]()[_0x5a0054(0x314)]()){case _0x5a0054(0x10c):this[_0x5a0054(0x1ec)](_0x324c75);break;case'sprite':this['drawItemImageSprite'](_0x324c75);break;case _0x5a0054(0x1de):Imported[_0x5a0054(0x252)]&&this['drawItemImageSvActor'](_0x324c75);break;};},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x1ec)]=function(_0x30730d){const _0x2b4f5b=_0x59bccc,_0x431f60=this[_0x2b4f5b(0x291)](_0x30730d),_0x2b9677=this[_0x2b4f5b(0x21c)](_0x30730d),_0x38fc76=Window_PartyReserve[_0x2b4f5b(0x22d)]===0x1;_0x2b9677['x']+=ImageManager[_0x2b4f5b(0x29e)]*(_0x38fc76?0x2:0x1);const _0x49b34b=ImageManager['faceWidth'],_0x3fb9ae=_0x2b9677['height']-0x2;this[_0x2b4f5b(0x309)](_0x431f60[_0x2b4f5b(0x2d9)]()),this['drawActorFace'](_0x431f60,_0x2b9677['x']+0x1,_0x2b9677['y']+0x1,_0x49b34b,_0x3fb9ae),this['changePaintOpacity'](!![]);},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x2f2)]=function(_0x121b83){const _0x44f5f4=_0x59bccc,_0x6f5a65=this['actor'](_0x121b83),_0x53dd58=this[_0x44f5f4(0x21c)](_0x121b83),_0x2bcfb6=Window_PartyReserve[_0x44f5f4(0x22d)]===0x1;_0x53dd58['x']+=ImageManager['iconWidth']*(_0x2bcfb6?0x2:0x1);const _0x511507=VisuMZ[_0x44f5f4(0x179)][_0x44f5f4(0x1b6)][_0x44f5f4(0x114)],_0x1b3d76=_0x53dd58['x']+_0x511507[_0x44f5f4(0x181)]+this[_0x44f5f4(0x18a)](),_0x1cc92e=_0x53dd58['y']+_0x53dd58[_0x44f5f4(0x131)]-_0x511507[_0x44f5f4(0x293)];this['drawActorCharacter'](_0x6f5a65,_0x1b3d76,_0x1cc92e);},Window_PartyReserve['prototype'][_0x59bccc(0x1c2)]=function(_0x467e84){const _0x3a2692=_0x59bccc,_0x3d542e=this[_0x3a2692(0x291)](_0x467e84),_0x5d98fa=_0x3d542e[_0x3a2692(0x2f5)](),_0x100fe7=this['itemRect'](_0x467e84),_0x3fc7d9=Window_PartyReserve[_0x3a2692(0x22d)]===0x1;_0x100fe7['x']+=ImageManager[_0x3a2692(0x29e)]*(_0x3fc7d9?0x2:0x1);const _0x2b6d88=VisuMZ['PartySystem'][_0x3a2692(0x1b6)][_0x3a2692(0x114)],_0x2a57dd=_0x100fe7['x']+_0x2b6d88[_0x3a2692(0x124)]+this['itemPadding'](),_0x2e88d4=_0x100fe7['y']+_0x100fe7[_0x3a2692(0x131)]-_0x2b6d88[_0x3a2692(0x142)];this['drawSvActor'](_0x5d98fa,_0x2a57dd,_0x2e88d4);},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x20b)]=function(_0x3b837b){this['_statusWindow']=_0x3b837b,this['callUpdateHelp']();},Window_PartyReserve[_0x59bccc(0x21d)][_0x59bccc(0x126)]=function(){const _0x5f13cb=_0x59bccc;this[_0x5f13cb(0x121)]&&this[_0x5f13cb(0x121)]['setActor'](this['actor'](this[_0x5f13cb(0x1cc)]()));};function Window_PartyStatus(){this['initialize'](...arguments);}Window_PartyStatus[_0x59bccc(0x21d)]=Object[_0x59bccc(0x2a3)](Window_StatusBase[_0x59bccc(0x21d)]),Window_PartyStatus[_0x59bccc(0x21d)]['constructor']=Window_PartyStatus,Window_PartyStatus['prototype'][_0x59bccc(0x12f)]=function(_0x579810){const _0x16fb87=_0x59bccc;this[_0x16fb87(0x287)]=null,Window_StatusBase[_0x16fb87(0x21d)][_0x16fb87(0x12f)][_0x16fb87(0x2ce)](this,_0x579810);},Window_PartyStatus[_0x59bccc(0x21d)][_0x59bccc(0x21f)]=function(_0x66e7f1,_0x185517,_0x48bc02,_0x342187,_0x3d174a){const _0x4f7134=_0x59bccc;if(VisuMZ[_0x4f7134(0x179)][_0x4f7134(0x1b6)][_0x4f7134(0x162)]['DrawBackRect']===![])return;_0x3d174a=Math['max'](_0x3d174a||0x1,0x1);while(_0x3d174a--){_0x342187=_0x342187||this[_0x4f7134(0x196)](),this[_0x4f7134(0x11c)][_0x4f7134(0x1a5)]=0xa0;const _0x591683=ColorManager['getPartySystemBackColor']();this[_0x4f7134(0x11c)]['fillRect'](_0x66e7f1+0x1,_0x185517+0x1,_0x48bc02-0x2,_0x342187-0x2,_0x591683),this['contents'][_0x4f7134(0x1a5)]=0xff;}},ColorManager[_0x59bccc(0x2ab)]=function(){const _0x13eaf1=_0x59bccc,_0x1e23de=VisuMZ[_0x13eaf1(0x179)][_0x13eaf1(0x1b6)][_0x13eaf1(0x162)];let _0x56d961=_0x1e23de[_0x13eaf1(0x21a)]!==undefined?_0x1e23de[_0x13eaf1(0x21a)]:0x13;return ColorManager['getColor'](_0x56d961);},Window_PartyStatus[_0x59bccc(0x21d)][_0x59bccc(0x2e1)]=function(_0x4e3fcc){const _0x4b7ec9=_0x59bccc;if(this[_0x4b7ec9(0x287)]===_0x4e3fcc)return;this[_0x4b7ec9(0x287)]=_0x4e3fcc;if(_0x4e3fcc){const _0x42d5be=ImageManager[_0x4b7ec9(0x292)](_0x4e3fcc['faceName']());_0x42d5be[_0x4b7ec9(0x245)](this[_0x4b7ec9(0x1ff)][_0x4b7ec9(0x284)](this));}else this['refresh']();},Window_PartyStatus['prototype'][_0x59bccc(0x1ff)]=function(){const _0x288fe6=_0x59bccc;Window_StatusBase[_0x288fe6(0x21d)][_0x288fe6(0x1ff)][_0x288fe6(0x2ce)](this),this[_0x288fe6(0x11c)][_0x288fe6(0x2d2)](),this[_0x288fe6(0x200)](),VisuMZ[_0x288fe6(0x179)][_0x288fe6(0x1b6)][_0x288fe6(0x114)][_0x288fe6(0x1ba)]['call'](this);},Window_PartyStatus['prototype']['refreshOG']=function(){const _0x1fa784=_0x59bccc;if(!this[_0x1fa784(0x287)]){this[_0x1fa784(0x21f)](0x0,0x0,this[_0x1fa784(0x300)],this[_0x1fa784(0x13d)]);const _0x5ae068=Math[_0x1fa784(0x194)]((this['innerHeight']-this[_0x1fa784(0x196)]())/0x2);this[_0x1fa784(0x152)](ColorManager[_0x1fa784(0x14d)]()),this['drawText'](TextManager[_0x1fa784(0x31b)],0x0,_0x5ae068,this[_0x1fa784(0x300)],_0x1fa784(0x10d));return;}this[_0x1fa784(0x237)](this[_0x1fa784(0x287)],0x1,0x0,ImageManager[_0x1fa784(0x2a4)],ImageManager['faceHeight']),this[_0x1fa784(0x178)](this[_0x1fa784(0x287)],ImageManager['faceWidth']+0x24,0x0);const _0x157553=this[_0x1fa784(0x196)](),_0x2a18da=this[_0x1fa784(0x1ac)](),_0x35fbcd=Math[_0x1fa784(0x194)](this[_0x1fa784(0x300)]/0x2),_0x4fe132=Math['ceil'](_0x2a18da[_0x1fa784(0x1d9)]/0x2)*_0x157553,_0x28095f=0x0;let _0x594a01=0x0,_0x4abc14=ImageManager[_0x1fa784(0x2af)]+_0x157553/0x2;for(const _0x1a76a5 of _0x2a18da){this['drawItemDarkRect'](_0x594a01,_0x4abc14,_0x35fbcd,_0x157553),this[_0x1fa784(0x1ab)](_0x1a76a5,_0x594a01,_0x4abc14,_0x35fbcd),this['drawParamValue'](_0x1a76a5,_0x594a01,_0x4abc14,_0x35fbcd),_0x594a01===_0x28095f?_0x594a01+=_0x35fbcd:(_0x594a01=_0x28095f,_0x4abc14+=_0x157553);}},Window_PartyStatus[_0x59bccc(0x21d)]['actorParams']=function(){const _0x41da5e=_0x59bccc;return Imported['VisuMZ_0_CoreEngine']?VisuMZ[_0x41da5e(0x147)][_0x41da5e(0x1b6)][_0x41da5e(0x18d)]['DisplayedParams']:[0x2,0x3,0x4,0x5,0x6,0x7];},Window_PartyStatus['prototype'][_0x59bccc(0x1ab)]=function(_0xa00619,_0xac0831,_0x1584c1,_0x2f941b){const _0x92687f=_0x59bccc,_0x50f146=this[_0x92687f(0x18a)]();_0x2f941b-=_0x50f146*0x2;if(Imported['VisuMZ_0_CoreEngine'])this[_0x92687f(0x2db)](_0xac0831+_0x50f146,_0x1584c1,_0x2f941b,_0xa00619,![]);else{const _0x998b8=TextManager[_0x92687f(0x2c7)](_0xa00619);this[_0x92687f(0x152)](ColorManager[_0x92687f(0x14d)]()),this[_0x92687f(0x1e4)](_0x998b8,_0xac0831+_0x50f146,_0x1584c1,_0x2f941b);}},Window_PartyStatus[_0x59bccc(0x21d)][_0x59bccc(0x1ee)]=function(_0x44be23,_0x3adde3,_0x96130d,_0x3054f5){const _0x32ae3c=_0x59bccc;this[_0x32ae3c(0x200)]();const _0x2ee02b=this[_0x32ae3c(0x18a)](),_0x3f7129=this[_0x32ae3c(0x215)](_0x44be23);this['drawText'](_0x3f7129,_0x3adde3+_0x2ee02b,_0x96130d,_0x3054f5-_0x2ee02b*0x2,_0x32ae3c(0x16b));},Window_PartyStatus[_0x59bccc(0x21d)][_0x59bccc(0x215)]=function(_0x43750e){const _0x2275b9=_0x59bccc,_0x425248=this['_actor'];return Imported['VisuMZ_0_CoreEngine']?_0x425248['paramValueByName'](_0x43750e,!![]):_0x425248[_0x2275b9(0x2c7)](_0x43750e);};function Window_PartyBattleSwitch(){this['initialize'](...arguments);}Window_PartyBattleSwitch['prototype']=Object['create'](Window_StatusBase[_0x59bccc(0x21d)]),Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x20e)]=Window_PartyBattleSwitch,Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x12f)]=function(_0x27bd71){const _0x38e1ad=_0x59bccc;Window_StatusBase[_0x38e1ad(0x21d)][_0x38e1ad(0x12f)][_0x38e1ad(0x2ce)](this,_0x27bd71),this[_0x38e1ad(0x219)](VisuMZ[_0x38e1ad(0x179)]['Settings'][_0x38e1ad(0x114)]['BattleSwitchWindowBgType']),this[_0x38e1ad(0x116)]=0x0;},Window_PartyBattleSwitch[_0x59bccc(0x21d)]['loadFaceImages']=function(){const _0x455823=_0x59bccc;for(const _0x416922 of $gameParty['allMembers']()){ImageManager[_0x455823(0x292)](_0x416922[_0x455823(0x25f)]());}},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x24a)]=function(){return 0x1;},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x291)]=function(_0x9c68e1){const _0x83487=_0x59bccc;return $gameParty[_0x83487(0x1e8)]()[_0x9c68e1];},Window_PartyBattleSwitch['prototype'][_0x59bccc(0x193)]=function(){const _0x4797d9=_0x59bccc;return this['actor'](this[_0x4797d9(0x1cc)]());},Window_PartyBattleSwitch[_0x59bccc(0x21d)]['itemHeight']=function(){const _0x5e2b0e=_0x59bccc;return this[_0x5e2b0e(0x196)]()*0x2+0x8;},Window_PartyBattleSwitch['prototype'][_0x59bccc(0x1c9)]=function(){const _0x257870=_0x59bccc;return $gameParty[_0x257870(0x1e8)]()['length'];},Window_PartyBattleSwitch[_0x59bccc(0x21d)]['activate']=function(){const _0x199f19=_0x59bccc;Window_StatusBase[_0x199f19(0x21d)]['activate'][_0x199f19(0x2ce)](this),this['open'](),this[_0x199f19(0x1ff)](),this[_0x199f19(0x2c4)](0x0);},Window_PartyBattleSwitch['prototype']['deactivate']=function(){const _0xf173f0=_0x59bccc;Window_StatusBase['prototype'][_0xf173f0(0x1c0)][_0xf173f0(0x2ce)](this),this['close']();},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x1b7)]=function(){const _0x240005=_0x59bccc;return this[_0x240005(0x176)](this[_0x240005(0x193)]());},Window_PartyBattleSwitch['prototype']['isEnabled']=function(_0x24c924){const _0x26cb67=_0x59bccc;if(!_0x24c924)return![];return _0x24c924[_0x26cb67(0x2d9)]()&&_0x24c924[_0x26cb67(0x1a8)]();},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x204)]=function(_0x15f21a){const _0x215dfe=_0x59bccc,_0x189eb5=this['actor'](_0x15f21a);if(!_0x189eb5)return;const _0x2dedd8=ImageManager[_0x215dfe(0x292)](_0x189eb5[_0x215dfe(0x25f)]());_0x2dedd8['addLoadListener'](this[_0x215dfe(0x122)]['bind'](this,_0x15f21a));},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x122)]=function(_0x26be4b){this['drawItemImage'](_0x26be4b),this['drawItemStatus'](_0x26be4b);},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x26d)]=function(_0x1adf92){const _0x4977dc=_0x59bccc,_0x519b4c=this['actor'](_0x1adf92),_0x26bf5a=this['itemRect'](_0x1adf92);this[_0x4977dc(0x309)](this[_0x4977dc(0x176)](_0x519b4c)),this['drawActorFace'](_0x519b4c,_0x26bf5a['x']+0x1,_0x26bf5a['y']+0x1,ImageManager[_0x4977dc(0x2a4)],_0x26bf5a[_0x4977dc(0x131)]-0x2),this[_0x4977dc(0x309)](!![]);},Window_PartyBattleSwitch[_0x59bccc(0x21d)][_0x59bccc(0x28b)]=function(_0x187a50){const _0x248c5d=_0x59bccc,_0x67d350=this['actor'](_0x187a50),_0x1d2c21=this[_0x248c5d(0x31d)](_0x187a50),_0x228c49=_0x1d2c21['x']+ImageManager[_0x248c5d(0x2a4)]+0x24,_0x3c17a8=_0x228c49+0xb4;this['changePaintOpacity'](this[_0x248c5d(0x176)](_0x67d350)),this[_0x248c5d(0x2b0)](_0x67d350,_0x228c49,_0x1d2c21['y']),this['drawActorClass'](_0x67d350,_0x228c49,_0x1d2c21['y']+this['lineHeight']()),this[_0x248c5d(0x267)](_0x67d350,_0x3c17a8,_0x1d2c21['y']),this['changePaintOpacity'](!![]);};Imported[_0x59bccc(0x1b3)]&&(ImageManager[_0x59bccc(0x22b)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x162)][_0x59bccc(0x20f)]??0x4b,TextManager[_0x59bccc(0x164)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x226)],TextManager[_0x59bccc(0x2fd)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x154)],TextManager[_0x59bccc(0x236)]=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x2c0)],TextManager['battlePartySwitchCmdHelp']=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)]['Vocab'][_0x59bccc(0x242)],TextManager['ActiveTpbFormationMessage']=VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x323)][_0x59bccc(0x257)],VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x166)]=SceneManager[_0x59bccc(0x2c1)],SceneManager['isPreviousSceneBattleTransitionable']=function(){const _0x2594d3=_0x59bccc;if(SceneManager[_0x2594d3(0x1b0)](Scene_Party))return!![];return VisuMZ[_0x2594d3(0x179)]['SceneManager_isPreviousSceneBattleTransitionable'][_0x2594d3(0x2ce)](this);},VisuMZ['PartySystem']['SceneManager_isNextSceneBattleTransitionable']=SceneManager['isNextSceneBattleTransitionable'],SceneManager[_0x59bccc(0x23a)]=function(){const _0x3f6407=_0x59bccc;if(SceneManager[_0x3f6407(0x130)](Scene_Party))return!![];return VisuMZ[_0x3f6407(0x179)][_0x3f6407(0x12b)]['call'](this);},SceneManager[_0x59bccc(0x1a0)]=function(){const _0x5e7eee=_0x59bccc;return this['_scene']&&this[_0x5e7eee(0x2fc)][_0x5e7eee(0x20e)]===Scene_Map;},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x2cf)]=Scene_Battle['prototype'][_0x59bccc(0x133)],Scene_Battle['prototype'][_0x59bccc(0x133)]=function(){const _0x43b009=_0x59bccc;VisuMZ[_0x43b009(0x179)][_0x43b009(0x2cf)][_0x43b009(0x2ce)](this),this[_0x43b009(0x1e5)](),this['postPartySwitchMenuTpb'](),this[_0x43b009(0x141)]();},Scene_Battle[_0x59bccc(0x21d)]['createPartySwitchWindow']=function(){const _0x2567c2=_0x59bccc,_0x5275d5=this[_0x2567c2(0x10e)]();this[_0x2567c2(0x310)]=new Window_PartyBattleSwitch(_0x5275d5),this['addWindow'](this['_partyMemberSwitchWindow']),this[_0x2567c2(0x310)][_0x2567c2(0x120)]('ok',this[_0x2567c2(0x19b)]['bind'](this)),this['_partyMemberSwitchWindow'][_0x2567c2(0x120)](_0x2567c2(0x302),this[_0x2567c2(0x1dd)][_0x2567c2(0x284)](this));},Scene_Battle[_0x59bccc(0x21d)]['partySwitchWindowRect']=function(){const _0x25f9e5=_0x59bccc,_0x38648e=this[_0x25f9e5(0x2ac)]();return _0x38648e===_0x25f9e5(0x1a6)?this[_0x25f9e5(0x135)]():this['partySwitchWindowRectStandard']();},Scene_Battle['prototype']['partySwitchWindowRectStandard']=function(){const _0x3ec143=_0x59bccc;return VisuMZ['PartySystem'][_0x3ec143(0x1b6)][_0x3ec143(0x114)][_0x3ec143(0x189)][_0x3ec143(0x2ce)](this);},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x135)]=function(){const _0x5329b1=_0x59bccc,_0x1d461b=this[_0x5329b1(0x225)](),_0x272bd1=$gameSystem[_0x5329b1(0x110)]()*0x2;return _0x1d461b['width']=0x204+_0x272bd1,_0x1d461b;},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1e0)]=Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x1c7)],Scene_Battle['prototype'][_0x59bccc(0x1c7)]=function(){const _0x275f40=_0x59bccc;if(this[_0x275f40(0x310)]&&this[_0x275f40(0x310)][_0x275f40(0x217)])return!![];if(this['_partySystemSwitchOut'])return!![];if(this[_0x275f40(0x11b)])return!![];if(this[_0x275f40(0x306)])return!![];return VisuMZ[_0x275f40(0x179)]['Scene_Battle_isAnyInputWindowActive'][_0x275f40(0x2ce)](this);},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x113)]=Scene_Battle[_0x59bccc(0x21d)]['createPartyCommandWindowBattleCore'],Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x248)]=function(){const _0x3ee306=_0x59bccc;VisuMZ[_0x3ee306(0x179)][_0x3ee306(0x113)][_0x3ee306(0x2ce)](this),this[_0x3ee306(0x1c8)][_0x3ee306(0x120)]('formation',this['commandFormation'][_0x3ee306(0x284)](this));},Scene_Battle[_0x59bccc(0x21d)]['commandFormation']=function(){const _0x525dca=_0x59bccc;this[_0x525dca(0x158)]()?(this[_0x525dca(0x306)]=!![],this['_logWindow']['addText'](TextManager[_0x525dca(0x233)][_0x525dca(0x1c5)](TextManager[_0x525dca(0x13e)]))):this[_0x525dca(0x16f)]();},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x158)]=function(){const _0x4b018f=_0x59bccc;return BattleManager[_0x4b018f(0x18e)]();},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x16f)]=function(){const _0x48a949=_0x59bccc;this[_0x48a949(0x306)]=![],this[_0x48a949(0x2a9)][_0x48a949(0x218)](),this[_0x48a949(0x1ed)]['visible']=![],SceneManager[_0x48a949(0x16c)](),SceneManager[_0x48a949(0x1be)](Scene_Party),$gameParty['applyBattlePartySwitchCooldown'](),BattleManager[_0x48a949(0x228)]()&&(BattleManager['_tpbSceneChangeCacheActor']=BattleManager[_0x48a949(0x291)]());},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x24f)]=Scene_Battle[_0x59bccc(0x21d)]['updateBattleProcess'],Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x239)]=function(){const _0x5b7b48=_0x59bccc;VisuMZ[_0x5b7b48(0x179)][_0x5b7b48(0x24f)]['call'](this),this[_0x5b7b48(0x306)]&&!BattleManager[_0x5b7b48(0x1d2)]&&this[_0x5b7b48(0x16f)](),this['_callPartyMemberSwitch']&&!BattleManager['_subject']&&this[_0x5b7b48(0x266)]();},VisuMZ[_0x59bccc(0x179)]['Scene_Battle_isTimeActive']=Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x2cc)],Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x2cc)]=function(){const _0x29d19f=_0x59bccc;if(BattleManager[_0x29d19f(0x18e)]()){if(this[_0x29d19f(0x310)]&&this[_0x29d19f(0x310)][_0x29d19f(0x217)])return![];}return VisuMZ[_0x29d19f(0x179)][_0x29d19f(0x2c8)][_0x29d19f(0x2ce)](this);},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x2cd)]=Scene_Battle['prototype'][_0x59bccc(0x1fa)],Scene_Battle['prototype'][_0x59bccc(0x1fa)]=function(){const _0x121ac1=_0x59bccc;VisuMZ[_0x121ac1(0x179)][_0x121ac1(0x2cd)][_0x121ac1(0x2ce)](this),this[_0x121ac1(0x221)][_0x121ac1(0x120)]('formation',this[_0x121ac1(0x1cb)]['bind'](this));},Scene_Battle[_0x59bccc(0x21d)]['commandPartyMemberSwitch']=function(){const _0xec03f3=_0x59bccc;this[_0xec03f3(0x158)]()?(this[_0xec03f3(0x11b)]=!![],this[_0xec03f3(0x260)][_0xec03f3(0x13a)](TextManager[_0xec03f3(0x233)][_0xec03f3(0x1c5)](TextManager['formation']))):this[_0xec03f3(0x266)]();},Scene_Battle[_0x59bccc(0x21d)]['callPartyMemberSwitch']=function(){const _0x50ba1a=_0x59bccc;this[_0x50ba1a(0x11b)]=![],this[_0x50ba1a(0x260)][_0x50ba1a(0x2d2)](),BattleManager[_0x50ba1a(0x291)]()&&this[_0x50ba1a(0x310)][_0x50ba1a(0x21e)]();},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x19b)]=function(){const _0x378629=_0x59bccc,_0x325d16=this[_0x378629(0x310)][_0x378629(0x193)]();_0x325d16?this[_0x378629(0x2d0)](_0x325d16):(this[_0x378629(0x310)][_0x378629(0x1c0)](),this[_0x378629(0x221)]['activate']());},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x2d0)]=function(_0x597493){const _0x423008=_0x59bccc,_0xae82bd=BattleManager[_0x423008(0x291)](),_0x26202b=_0xae82bd['battler']();this[_0x423008(0x310)]['deactivate'](),this[_0x423008(0x321)]()&&_0x26202b?(this[_0x423008(0x2fb)]=!![],_0x26202b[_0x423008(0x10f)](_0x597493)):this[_0x423008(0x144)](_0x597493);},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x321)]=function(){const _0x1bc862=_0x59bccc;return VisuMZ[_0x1bc862(0x179)]['Settings']['General'][_0x1bc862(0x11f)];},Scene_Battle['prototype'][_0x59bccc(0x144)]=function(_0x210ec8){const _0x9445de=_0x59bccc;this[_0x9445de(0x2fb)]=![];const _0x3c79c2=BattleManager[_0x9445de(0x291)](),_0x1d5643=_0x3c79c2['battler'](),_0x1fb160=$gameParty[_0x9445de(0x13c)][_0x9445de(0x112)](_0x3c79c2[_0x9445de(0x18b)]());$gameParty[_0x9445de(0x13c)][_0x1fb160]=_0x210ec8[_0x9445de(0x18b)](),$gameParty[_0x9445de(0x192)]();if(this[_0x9445de(0x161)]())_0x210ec8['_tpbChargeTime']=_0x3c79c2[_0x9445de(0x26f)],_0x210ec8[_0x9445de(0x1b1)]=_0x9445de(0x1f2);else BattleManager[_0x9445de(0x228)]()&&_0x210ec8[_0x9445de(0x212)]();BattleManager[_0x9445de(0x2fe)]=_0x210ec8,BattleManager['updateTargetsForPartySwitch'](_0x3c79c2,_0x210ec8),_0x210ec8[_0x9445de(0x17f)](),_0x210ec8[_0x9445de(0x165)](),_0x210ec8[_0x9445de(0x190)](_0x3c79c2),_0x1d5643&&_0x1d5643[_0x9445de(0x156)](_0x210ec8),this[_0x9445de(0x121)]['switchStateIconActor'](_0x3c79c2,_0x210ec8),this[_0x9445de(0x121)][_0x9445de(0x1ff)](),this[_0x9445de(0x221)][_0x9445de(0x29f)](_0x210ec8),this[_0x9445de(0x221)][_0x9445de(0x2c4)](0x0),this[_0x9445de(0x221)][_0x9445de(0x21e)](),this[_0x9445de(0x221)]['_debug']=!![];},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x161)]=function(){const _0x102fa8=_0x59bccc;if(!BattleManager[_0x102fa8(0x228)]())return![];const _0x5e878f=VisuMZ['PartySystem'][_0x102fa8(0x1b6)]['General'];return _0x5e878f['tpbImmediateAction']===undefined&&(_0x5e878f[_0x102fa8(0x31c)]=!![]),_0x5e878f[_0x102fa8(0x31c)];},Window_StatusBase[_0x59bccc(0x21d)][_0x59bccc(0x303)]=function(_0x543a31,_0x5bba40){const _0x213db7=_0x59bccc,_0x4978b4=_0x213db7(0x297)['format'](_0x543a31[_0x213db7(0x18b)]()),_0x482892=this[_0x213db7(0x146)](_0x4978b4,Sprite_StateIcon);_0x482892[_0x213db7(0x29f)](_0x5bba40);},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x1dd)]=function(){const _0x5297fe=_0x59bccc;this['_partyMemberSwitchWindow']['deactivate'](),this['_actorCommandWindow'][_0x5297fe(0x21e)](),this[_0x5297fe(0x221)][_0x5297fe(0x1ff)]();},Scene_Battle[_0x59bccc(0x21d)][_0x59bccc(0x168)]=function(){const _0x1a427e=_0x59bccc;if(!BattleManager['isTpb']())return;if(!SceneManager[_0x1a427e(0x1b0)](Scene_Party))return;this[_0x1a427e(0x1c8)][_0x1a427e(0x1c0)](),this[_0x1a427e(0x1c8)][_0x1a427e(0x286)](),this[_0x1a427e(0x221)][_0x1a427e(0x1c0)](),this[_0x1a427e(0x221)][_0x1a427e(0x286)](),BattleManager[_0x1a427e(0x2fe)]=null,BattleManager['_inputting']=![];},Scene_Battle[_0x59bccc(0x21d)]['postPartySwitchMenuTurnBased']=function(){const _0x51e3eb=_0x59bccc;if(BattleManager[_0x51e3eb(0x228)]())return;if(!SceneManager[_0x51e3eb(0x1b0)](Scene_Party))return;Imported[_0x51e3eb(0x280)]&&BattleManager[_0x51e3eb(0x296)]()&&BattleManager[_0x51e3eb(0x15c)](),Imported[_0x51e3eb(0x2b1)]&&BattleManager['isFTB']()&&(BattleManager[_0x51e3eb(0x15c)](),BattleManager['_currentActor']=$gameParty[_0x51e3eb(0x222)](),BattleManager[_0x51e3eb(0x1d2)]=BattleManager[_0x51e3eb(0x291)](),BattleManager['_inputting']=!![],this[_0x51e3eb(0x221)][_0x51e3eb(0x29f)](BattleManager[_0x51e3eb(0x291)]()),this['_statusWindow'][_0x51e3eb(0x28a)](BattleManager['actor']())),Imported[_0x51e3eb(0x19e)]&&BattleManager[_0x51e3eb(0x259)]()&&(BattleManager[_0x51e3eb(0x15c)](),BattleManager[_0x51e3eb(0x2fe)]=$gameParty['teamBasedFirstAvailableMember'](),BattleManager[_0x51e3eb(0x1d2)]=BattleManager[_0x51e3eb(0x291)](),BattleManager['_inputting']=!![],this[_0x51e3eb(0x221)]['setup'](BattleManager[_0x51e3eb(0x291)]()),this['_statusWindow'][_0x51e3eb(0x28a)](BattleManager[_0x51e3eb(0x291)]())),Imported[_0x51e3eb(0x1ce)]&&BattleManager[_0x51e3eb(0x1ef)]()&&(BattleManager[_0x51e3eb(0x15c)](),BattleManager['_currentActor']=$gameParty[_0x51e3eb(0x222)](),BattleManager['_subject']=BattleManager[_0x51e3eb(0x291)](),BattleManager[_0x51e3eb(0x187)]=!![],this[_0x51e3eb(0x221)][_0x51e3eb(0x29f)](BattleManager['actor']()),this[_0x51e3eb(0x121)][_0x51e3eb(0x28a)](BattleManager['actor']()));},Game_Party['prototype'][_0x59bccc(0x222)]=function(){const _0x247ca4=_0x59bccc;let _0x154515=this[_0x247ca4(0x148)]();return _0x154515[0x0];},Sprite_Actor[_0x59bccc(0x276)]=0xc,Sprite_Actor[_0x59bccc(0x21d)][_0x59bccc(0x10f)]=function(_0x3322c8){const _0x12c0b3=_0x59bccc;this[_0x12c0b3(0x2dc)]=_0x3322c8;const _0x4681d9=Sprite_Actor[_0x12c0b3(0x276)];this['startMove'](0x12c,0x0,_0x4681d9),this[_0x12c0b3(0x308)](0x0,_0x4681d9),this[_0x12c0b3(0x276)]=_0x4681d9;},Sprite_Actor['prototype'][_0x59bccc(0x1e1)]=function(_0x3a6189){const _0x1bcc27=_0x59bccc;if(SceneManager[_0x1bcc27(0x25e)]()){SceneManager['_scene'][_0x1bcc27(0x144)](_0x3a6189);const _0x236d71=Sprite_Actor[_0x1bcc27(0x276)];this[_0x1bcc27(0x274)](),this[_0x1bcc27(0x308)](0xff,_0x236d71);}this[_0x1bcc27(0x2dc)]=null;},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x25a)]=Sprite_Actor['prototype'][_0x59bccc(0x218)],Sprite_Actor[_0x59bccc(0x21d)]['update']=function(){const _0x48fbb3=_0x59bccc;VisuMZ[_0x48fbb3(0x179)][_0x48fbb3(0x25a)]['call'](this);if(this['_partySwitchDuration'])this[_0x48fbb3(0x307)]();},Sprite_Actor[_0x59bccc(0x21d)]['updatePartySwitch']=function(){const _0x14e864=_0x59bccc;this['_partySwitchDuration']=this[_0x14e864(0x276)]||0x0,this[_0x14e864(0x276)]--,this[_0x14e864(0x276)]<=0x0&&this[_0x14e864(0x1e1)](this[_0x14e864(0x2dc)]);},Window_PartyCommand['prototype']['addCustomCommands']=function(){this['addFormationCommand']();},Window_PartyCommand[_0x59bccc(0x21d)][_0x59bccc(0x31e)]=function(){const _0x12bc8c=_0x59bccc;if(!this[_0x12bc8c(0x30e)]())return;if(this[_0x12bc8c(0x12a)]()){$gameTemp[_0x12bc8c(0x1af)]()&&!BattleManager['_battleSystemIncompatibilityError']&&(console['log'](_0x12bc8c(0x2dd)),BattleManager[_0x12bc8c(0x2aa)]=!![]);return;}const _0x1fb282=this[_0x12bc8c(0x2ff)](),_0x1cde95=ImageManager[_0x12bc8c(0x22b)],_0x1bac42=_0x1fb282===_0x12bc8c(0x2f3)?TextManager[_0x12bc8c(0x164)]:_0x12bc8c(0x2c9)[_0x12bc8c(0x1c5)](_0x1cde95,TextManager['battlePartyChangeCmd']),_0x5f3bc5=this[_0x12bc8c(0x282)]();this[_0x12bc8c(0x1a7)](_0x1bac42,'formation',_0x5f3bc5);},Window_PartyCommand[_0x59bccc(0x21d)]['isFormationCommandAdded']=function(){const _0x22c293=_0x59bccc;if(Imported[_0x22c293(0x30f)]&&BattleManager[_0x22c293(0x268)]())return![];if(Imported[_0x22c293(0x270)]&&BattleManager[_0x22c293(0x247)]())return![];if(Imported['VisuMZ_2_BattleGridSystem']&&BattleManager[_0x22c293(0x1d8)]())return![];return VisuMZ[_0x22c293(0x179)]['Settings'][_0x22c293(0x162)][_0x22c293(0x2f7)];},Window_PartyCommand[_0x59bccc(0x21d)][_0x59bccc(0x12a)]=function(){return![];},Window_PartyCommand['prototype'][_0x59bccc(0x282)]=function(){const _0x1f80e5=_0x59bccc;if($gameParty[_0x1f80e5(0x30b)]()[_0x1f80e5(0x1d9)]<=0x1)return![];if(!$gameParty[_0x1f80e5(0x27d)]())return![];return $gameSystem[_0x1f80e5(0x254)]();},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x1bf)]=Window_PartyCommand[_0x59bccc(0x21d)][_0x59bccc(0x30c)],Window_PartyCommand['prototype']['updateHelp']=function(){const _0x450f21=_0x59bccc,_0xae97b0=this[_0x450f21(0x136)]();switch(_0xae97b0){case'formation':this['_helpWindow'][_0x450f21(0x17b)](TextManager[_0x450f21(0x2fd)]);break;default:VisuMZ[_0x450f21(0x179)]['Settings']['Window_PartyCommand_updateHelp'][_0x450f21(0x2ce)](this);break;}},Window_ActorCommand[_0x59bccc(0x21d)][_0x59bccc(0x191)]=function(){const _0x516764=_0x59bccc;if(!this['isPartyCommandAdded']())return;this[_0x516764(0x180)](_0x516764(0x13e))>=0x0&&this[_0x516764(0x167)]();const _0x327890=this['commandStyle'](),_0x35ed24=ImageManager[_0x516764(0x22b)],_0x33a60a=_0x327890===_0x516764(0x2f3)?TextManager[_0x516764(0x236)]:_0x516764(0x2c9)[_0x516764(0x1c5)](_0x35ed24,TextManager[_0x516764(0x164)]),_0x1f9f4c=this[_0x516764(0x1f4)]();this[_0x516764(0x1a7)](_0x33a60a,'formation',_0x1f9f4c);},Window_ActorCommand[_0x59bccc(0x21d)][_0x59bccc(0x216)]=function(){const _0x29731f=_0x59bccc;if(!this[_0x29731f(0x287)])return![];return VisuMZ['PartySystem']['Settings'][_0x29731f(0x162)][_0x29731f(0x139)];},Window_ActorCommand[_0x59bccc(0x21d)][_0x59bccc(0x1f4)]=function(){const _0x1546e0=_0x59bccc;if($gameParty['allMembers']()['length']<=0x1)return![];if(!this[_0x1546e0(0x287)])return![];if(!this[_0x1546e0(0x287)][_0x1546e0(0x27d)]())return![];return this['_actor'][_0x1546e0(0x2d9)]();},VisuMZ[_0x59bccc(0x179)][_0x59bccc(0x1b6)][_0x59bccc(0x183)]=Window_ActorCommand[_0x59bccc(0x21d)][_0x59bccc(0x30c)],Window_ActorCommand[_0x59bccc(0x21d)][_0x59bccc(0x30c)]=function(){const _0x399d32=_0x59bccc,_0x3b8046=this[_0x399d32(0x136)]();if(!_0x3b8046)return;switch(_0x3b8046[_0x399d32(0x19c)]()){case'formation':this['_helpWindow'][_0x399d32(0x17b)](TextManager[_0x399d32(0x1f6)]);break;default:VisuMZ['PartySystem'][_0x399d32(0x1b6)][_0x399d32(0x183)][_0x399d32(0x2ce)](this);break;}},Window_ActorCommand[_0x59bccc(0x21d)][_0x59bccc(0x167)]=function(){const _0x2fc2ca=_0x59bccc;while(this['findSymbol']('formation')>=0x0){const _0x3a68b2=this[_0x2fc2ca(0x180)](_0x2fc2ca(0x13e));this['_list']['splice'](_0x3a68b2,0x1);}});;