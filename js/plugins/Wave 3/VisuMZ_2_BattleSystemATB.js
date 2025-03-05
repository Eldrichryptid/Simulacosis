//=============================================================================
// VisuStella MZ - Battle System - ATB - Active Turn Battle
// VisuMZ_2_BattleSystemATB.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BattleSystemATB = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleSystemATB = VisuMZ.BattleSystemATB || {};
VisuMZ.BattleSystemATB.version = 1.33;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.33] [BattleSystemATB]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_System_-_ATB_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The RPG Maker MZ Time Progress Battle (TPB) system is only a few steps away
 * from the acclaimed Active Turn Battle (ATB) system. This plugin will grant
 * it the various features needed to turn it from TPB into ATB.
 * 
 * This plugin will grant control over how the various mechanics work, ranging
 * from penalties to calculations, to actions that can manipulate the ATB gauge
 * of battlers. Battlers that are in the middle of casting a spell can also be
 * interrupted with specific notetag traits.
 * 
 * ATB Gauges can also be displayed on enemies and/or allies, giving the player
 * full access to the current battle state. The ATB Gauges are also improved,
 * showing different colors for different states and showing a new gauge for
 * the casting state.
 * 
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Full control over the TPB/ATB mechanics such as speed, calculations, etc.
 * * Notetags that give skills and items access to ATB Gauge manipulation, by
 *   altering how filled they are.
 * * Interrupts can be used on battlers in the middle of casting a skill.
 * * Visual ATB Gauges can be displayed over battlers' heads.
 * * ATB Gauges have extra coloring options added to them to let the player
 *   quickly know the current speed state of the ATB Gauge.
 * * A field-wide ATB Gauge that positions actor and enemy markers on it to
 *   show how far along actors and enemies are relative to each other's turns.
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
 * - VisuMZ_1_BattleCore
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
 * *NOTE* You will need to set the game project to run in either TPB mode,
 * Time Progress (Active) or Time Progress (Wait), for these new ATB effects
 * to work. You can find this setting in Database > System 1.
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
 * ATB Gauges
 * 
 * The gauges are now revamped to show different colors to depict the various
 * ATB states a battler can be in. These various states include the following:
 * 
 * - When a battler's speed is fully stopped.
 * - When a battler's speed is slower/faster past a specific rating.
 * - When a battler is ready for an action.
 * - When a battler is casting an action (those with negative speed values).
 * 
 * The colors used for these states can be found and altered in the Plugin
 * Parameters under Gauge Color Settings.
 *
 * ---
 * 
 * Skill & Item Speeds
 * 
 * With TPB, skills and items with negative speed values will cause the battler
 * to enter a "casting" state, meaning they have to wait extra time before the
 * action takes off. With this delayed action execution, one might assume that
 * if there is a positive speed value, the battler would require less time for
 * their next turn.
 * 
 * However, this isn't the case with RPG Maker MZ's TPB. By changing it to ATB,
 * skills and items with positive speed values will have an impact on how full
 * their ATB Gauges will be in the following turn. A value of 2000 will put the
 * gauge at 50% full, 1000 will put the gauge at 25% full, 500 will put it at
 * 12.5% full, and so on. Notetags can also be used to influence this.
 * 
 * ---
 * 
 * JS Calculation Mechanics
 * 
 * While the calculation mechanics aren't changed from their original RPG Maker
 * MZ formulas, the functions for them have been overwritten to allow you, the
 * game developer, to alter them as you see fit.
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
 * VisuMZ_0_CoreEngine
 *
 * - ATB Interrupts can have animations played when they trigger if the
 * VisuStella Core Engine is installed.
 *
 * ---
 * 
 * VisuMZ_1_OptionsCore
 * 
 * - Having the VisuStella Options Core available will allow you to adjust the
 * speed at which the ATB gauges fill up.
 * 
 * - The VisuStella Options Core also gives the player the option to toggle
 * between Active and Wait-based ATB.
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
 * === General ATB-Related Notetags ===
 * 
 * These notetags are general purpose notetags that have became available
 * through this plugin.
 *
 * ---
 * 
 * <ATB Help>
 *  description
 *  description
 * </ATB Help>
 *
 * - Used for: Skill, Item Notetags
 * - If your game happens to support the ability to change battle systems, this
 *   notetag lets you change how the skill/item's help description text will
 *   look under TPB/ATB.
 * - This is primarily used if the skill behaves differently in TPB/ATB versus
 *   any other battle system.
 * - Replace 'description' with help text that's only displayed if the game's
 *   battle system is set to TPB/ATB.
 * 
 * ---
 *
 * <Hide ATB Gauge>
 *
 * - Used for: Enemy Notetags
 * - If you don't want an enemy to show their ATB Gauge, use this notetag.
 * 
 * ---
 * 
 * === ATB Field Gauge-Related Notetags ===
 * 
 * These notetags only work if the ATB Field Gauge is enabled.
 * 
 * ---
 *
 * <ATB Field Gauge Icon: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the battler to a specific icon.
 * - Replace 'x' with the icon index to be used.
 * 
 * ---
 *
 * <ATB Field Gauge Face: filename, index>
 *
 * - Used for: Actor, Enemy Notetags
 * - Changes the marker graphic used for the enemy to a specific face.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Replace 'index' with the index of the face. Index values start at 0.
 * - Example: <ATB Field Gauge Face: Monster, 1>
 * 
 * ---
 * 
 * === ATB Gauge Manipulation-Related Notetags ===
 * 
 * These notetags are used for ATB Gauge manipulation purposes.
 * 
 * ---
 *
 * <ATB After Gauge: x%>
 *
 * - Used for: Skill, Item Notetags
 * - After using the skill/item, the user's ATB Gauge will be set to x%.
 * - Replace 'x' with a percentile value representing the amount you want the
 *   ATB Gauge to reset to after the skill/item's usage.
 * 
 * ---
 * 
 * <ATB Charge Gauge: x%>
 * <ATB Charge Gauge: +x%>
 * <ATB Charge Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a charging state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a charging state.
 * 
 * ---
 * 
 * <ATB Cast Gauge: x%>
 * <ATB Cast Gauge: +x%>
 * <ATB Cast Gauge: -x%>
 *
 * - Used for: Skill, Item Notetags
 * - If the target is in a casting state, change the target's gauge amount to
 *   x% or by x% (if using the +/- variants).
 * - Replace 'x' with a percentile value representing the amount of the ATB
 *   Gauge you wish to alter it to/by.
 * - This only affects targets who are in a casting state.
 * 
 * ---
 *
 * <ATB Interrupt>
 *
 * - Used for: Skill, Item Notetags
 * - If this skill/item hits a target who is in a casting state, interrupt that
 *   action to cancel it and reset the target's ATB Gauge to 0%.
 * 
 * ---
 *
 * <ATB Cannot Be Interrupted>
 *
 * - Used for: Skill, Item Notetags
 * - Makes the skill/item immune to ATB Interruptions.
 * 
 * ---
 * 
 * <ATB Battle Start Gauge: +x%>
 * <ATB Battle Start Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Determine how much extra or less ATB Gauge the battler will start with if
 *   associated with one of these database objects.
 * - Replace 'x' with a percentile value determining how much extra or less ATB
 *   Gauge value the battler will start battle with.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * <ATB After Gauge: +x%>
 * <ATB After Gauge: -x%>
 *
 * - Used for: Actor, Class, Skill, Item, Weapon, Armor, Enemy, State Notetags
 * - Determine how much influence there is on the ATB Gauge after finishing a
 *   skill/item. Increase or decrease the amount after each action.
 * - Replace 'x' with a percentile value determining how much influence there
 *   is on the ATB Gauge after the skill/item has finished performing.
 * - These values are additive when stacked.
 *
 * ---
 * 
 * === JavaScript Notetags: ATB Gauge Manipulation ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * give more control over conditional ATB Gauge Manipulation.
 * 
 * ---
 * 
 * <JS ATB Charge Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Charge Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a charging state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a charging state.
 * 
 * ---
 * 
 * <JS ATB Cast Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB Cast Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to if the target is in a casting state.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to the target's current ATB Gauge rate
 *   if the target is in a casting state.
 * 
 * ---
 * 
 * <JS ATB After Gauge>
 *  code
 *  code
 *  rate = code;
 * </JS ATB After Gauge>
 *
 * - Used for: Skill, Item Notetags
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   ATB Gauge to after performing this skill/item action.
 * - The 'rate' variable represents rate value the ATB Gauge will change to
 *   between the values of 0 and 1.
 * - The 'rate' variable will default to 0.
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
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Field Gauge Icon
 * - Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 * 
 * Actor: Change Field Gauge Face
 * - Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 *   Face Name:
 *   - This is the filename for the target face graphic.
 * 
 *   Face Index:
 *   - This is the index for the target face graphic.
 * 
 * ---
 *
 * Actor: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the actor(s).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Field Gauge Icon
 * - Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Icon:
 *   - Changes the graphic to this icon.
 *
 * ---
 *
 * Enemy: Change Field Gauge Face
 * - Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 *   Face Name:
 *   - This is the filename for the target face graphic.
 *
 *   Face Index:
 *   - This is the index for the target face graphic.
 *
 * ---
 *
 * Enemy: Clear Field Gauge Graphic
 * - Clears the ATB Field Gauge graphics for the enemy(ies).
 * - The settings will revert to the Plugin Parameter settings.
 *
 *   Enemy Index(es):
 *   - Select which enemy index(es) to affect.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 * 
 * System: ATB Field Gauge Visibility
 * - Determine the visibility of the ATB Field Gauge.
 * 
 *   Visibility:
 *   - Changes the visibility of the ATB Field Gauge.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Mechanics Settings
 * ============================================================================
 *
 * Mechanics settings used for Battle System ATB. The majority of these are
 * JavaScript-based and will require knowledge of JavaScript to fully utilize
 * the plugin parameters.
 *
 * ---
 *
 * Mechanics
 * 
 *   Escape Fail Penalty:
 *   - Gauge penalty if an escape attempt fails.
 * 
 *   Stuns Reset Gauge?:
 *   - Should stuns reset the ATB Gauge?
 *     - Charm, Berserk, and Confusion states will still reset the ATB Gauge.
 * 
 *   JS: Initial Gauge:
 *   - JavaScript code to determine how much ATB gauge to give each battler at
 *     the start of battle.
 * 
 *   JS: Speed:
 *   - JavaScript code to determine how much speed a battler has.
 * 
 *   JS: Base Speed:
 *   - JavaScript code to determine how much base speed a battler has.
 * 
 *   JS: Relative Speed:
 *   - JavaScript code to determine what is the relative speed of a battler.
 * 
 *   JS: Acceleration:
 *   - JavaScript code to determine how much gauges accelerate by relative to
 *     reference time.
 * 
 *   JS: Cast Time:
 *   - JavaScript code to determine how much cast time is used for skills/items
 *     with negative speed modifiers.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Interrupt Settings
 * ============================================================================
 *
 * Interrupt settings used for Battle System ATB.
 *
 * ---
 *
 * Interrupt
 * 
 *   Animation ID:
 *   - Play this animation when a unit is interrupted.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mirror Animation:
 *     - Mirror the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mute Animation:
 *     - Mute the interrupt animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *   Text Popup:
 *   - Text used for popup when interrupts happen.
 *   - Leave empty for no popup.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *     Flash Color:
 *     - Adjust the popup's flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *     Flash Duration:
 *     - What is the frame duration of the flash effect?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Gauge Settings
 * ============================================================================
 *
 * General gauge settings used for ATB Gauges.
 *
 * ---
 *
 * General
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Where do you want the ATB Gauge sprite's anchor X/Y to be?
 *   - Use values between 0 and 1 to be safe.
 * 
 *   Scale:
 *   - How large/small do you want the ATB Gauge to be scaled?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How many pixels to offset the ATB Gauge's X/Y by?
 *
 * ---
 *
 * AGI Gauge Rates
 * 
 *   Slow Rate:
 *   - How much should the AGI rate be at to be considered slow?
 * 
 *   Fast Rate:
 *   - How much should the AGI rate be at to be considered fast?
 *
 * ---
 *
 * Actors
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the actor sprites' heads?
 *   - Requires SV Actors to be visible.
 * 
 *   Show Status Gauges:
 *   - Show ATB Gauges in the status window?
 *   - Applies only to sideview.
 *
 * ---
 *
 * Enemies
 * 
 *   Show Sprite Gauges:
 *   - Show ATB Gauges over the enemy sprites' heads?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Field Gauge Settings
 * ============================================================================
 * 
 * The ATB Field Gauge is a large gauge placed on the screen with all of the
 * current battle's active participants shown on it. The participants are
 * represented by a marker. Each marker's position on the gauge indicates its
 * battler's ATB progress towards a turn.
 * 
 * In order for this feature to work, enable "Use Field Gauge?" in the
 * Plugin Parameters.
 *
 * ---
 *
 * General
 * 
 *   Use Field Gauge?:
 *   - This value must be set to true in order for the ATB Field Gauge
 *     to appear.
 *   - This needs to be on in order for this feature to work.
 * 
 *   Display Position:
 *   - Select where the Field Gauge will appear on the screen.
 *   - Top
 *   - Bottom
 *   - Left
 *   - Right
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset the X/Y coordinates by.
 * 
 *   Reposition for Help?:
 *   - If the display position is at the top, reposition the gauge when the
 *     help window is open?
 * 
 *   Forward Direction:
 *   - Decide on the direction of the Field Gauge.
 *   - Settings may vary depending on position.
 *   - Left to Right
 *   - Right to Left
 *   - Up to Down
 *   - Down to Up
 *
 * ---
 *
 * Field Gauge Settings
 * 
 *   Gauge Skin:
 *   - Optional. Select an image to place behind the gauge.
 *   - This will be centered on the Field Gauge's position.
 * 
 *   Show Gauge?:
 *   - Decide if you want the gauge to be shown.
 * 
 *   Horizontal Length:
 *   - The length of the Field Gauge if placed horizontally.
 * 
 *   Vertical Length:
 *   - The length of the Field Gauge if placed vertically.
 * 
 *   Thickness:
 *   - The thickness of the Field Gauge for either direction.
 * 
 *   Split Location:
 *   - Determine where the gauge should split.
 *   - Use 0.00 for the start. Use 1.00 for the end.
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actor Marker Side:
 *   - Which side do you want the actor markers to appear?
 * 
 *   Enemy Marker Side:
 *   - Which side do you want the enemy markers to appear?
 * 
 *   Marker Offset:
 *   - How many pixels do you want to offset the markers by?
 * 
 *   Marker Size:
 *   - How pixels wide and tall do you want the markers to be?
 * 
 *   Marker Speed:
 *   - How many pixels maximum can a marker travel in one frame?
 * 
 *   Opacity Rate:
 *   - If a marker has to change opacity, how fast should it change by?
 *
 * ---
 *
 * Marker Border
 * 
 *   Show Border?:
 *   - Show borders for the marker sprites?
 * 
 *   Border Thickness:
 *   - How many pixels thick should the colored portion of the border be?
 * 
 *   Actors
 *   Enemies
 * 
 *     Border Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Border Skin:
 *     - Optional. Place a skin on the actor/enemy borders instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Sprites
 * 
 *   Actors
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the actor graphic.
 *     - Face Graphic - Show the actor's face.
 *     - Icon - Show a specified icon.
 *     - Sideview Actor - Show the actor's sideview battler.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for actors by default?
 * 
 *   Enemies
 * 
 *     Sprite Type:
 *     - Select the type of sprite used for the enemy graphic.
 *     - Face Graphic - Show a specified face graphic.
 *     - Icon - Show a specified icon.
 *     - Enemy - Show the enemy's graphic or sideview battler.
 * 
 *     Default Face Name:
 *     - Use this default face graphic if there is no specified face.
 * 
 *     Default Face Index:
 *     - Use this default face index if there is no specified index.
 * 
 *     Default Icon:
 *     - Which icon do you want to use for enemies by default?
 * 
 *     Match Hue?:
 *     - Match the hue for enemy battlers?
 *     - Does not apply if there's a sideview battler.
 *
 * ---
 *
 * Marker Letter
 * 
 *   Show Enemy Letter?:
 *   - Show the enemy's letter on the marker sprite?
 * 
 *   Font Name:
 *   - The font name used for the text of the Letter.
 *   - Leave empty to use the default game's font.
 * 
 *   Font Size:
 *   - The font size used for the text of the Letter.
 *
 * ---
 *
 * Marker Background
 * 
 *   Show Background?:
 *   - Show the background on the marker sprite?
 * 
 *   Actors
 *   Enemies
 * 
 *     Background Color 1:
 *     Background Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *     Background Skin:
 *     - Optional. Use a skin for the actor background instead of
 *       rendering them?
 *
 * ---
 *
 * Marker Arrow
 * 
 *   Show Arrow?:
 *   - Show the arrow sprite pointing towards the Field Gauge?
 * 
 *   Arrow Skin:
 *   - Pick a window skin to draw arrows from.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gauge Color Settings
 * ============================================================================
 *
 * Gauge color settings used for ATB Gauges.
 *
 * ---
 *
 * Colors
 * 
 *   Default Color 1:
 *   Default Color 2:
 *   Full Color 1:
 *   Full Color 2:
 *   Cast Color 1:
 *   Cast Color 2:
 *   Fast Color 1:
 *   Fast Color 2:
 *   Slow Color 1:
 *   Slow Color 2:
 *   Stop Color 1:
 *   Stop Color 2:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * Options settings used for Battle System ATB.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Show ATB Gauges' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * Version 1.33: January 16, 2025
 * * Bug Fixes!
 * ** Fixed an actor softlock issue where if charm, berserk, and confusion can
 *    lock a 100% charged actor for Active ATB.
 * * Documentation Update!
 * ** Added extra clarification for Plugin Parameter "Stuns Reset Gauge?":
 * *** Charm, Berserk, and Confusion states will still reset the ATB Gauge.
 * 
 * Version 1.32: December 19, 2024
 * * Bug Fixes!
 * ** Fixed a few features that bled over into CTB if the game project used
 *    both ATB and CTB battle systems simultaneously. Fix made by Olivia.
 * * Feature Update!
 * ** "Stuns Reset Gauge" set to "Don't Reset" should now work as expected for
 *    both actors and enemies, instead of just actors, while they are in the
 *    casting state. Update made by Olivia.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.31: April 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where sideview battlers would have misplaced ATB gauge
 *    positions. Fix made by Olivia.
 * 
 * Version 1.30: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause multi-actions under restrictions to
 *    desynchronize skill speeds and result in softlocks. Fix made by Olivia.
 * ** Fixed an error that would cause slow speeds to all equal one another.
 *    Fix made by Olivia.
 * 
 * Version 1.29: July 13, 2023
 * * Bug Fixes!
 * ** Fixed an error with casting times for battlers not working properly when
 *    the numeric values are too small. Fix made by Olivia.
 * 
 * Version 1.28: June 15, 2023
 * * Bug Fixes!
 * ** Crash should no longer occur for the end of ATB actions. Fix made
 *    by Olivia.
 * 
 * Version 1.27: May 18, 2023
 * * Bug Fixes!
 * ** Enemies no longer soft-lock themselves if they get stunned via a counter
 *    attack with an attack-state that applies stun. Fix made by Olivia.
 * 
 * Version 1.26: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that caused a clash when loaded together with certain
 *    combinations of plugins. Fix made by Olivia.
 * 
 * Version 1.25: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented initial ATB Gauge settings and features from
 *    working properly. Fix made by Irina.
 * 
 * Version 1.24: December 15, 2022
 * * Bug Fixes!
 * ** The Battle Core's <JS Pre-Start Turn> and <JS Post-Start Turn> notetags
 *    were previously disabled by this plugin. They should now be working again
 *    without problems. Fix made by Olivia.
 * 
 * Version 1.23: November 10, 2022
 * * Bug Fixes!
 * ** ATB Gauges will now display for ANIMATED sideview enemies depending on
 *    the Show Enemy Gauge setting. Fix made by Olivia.
 * 
 * Version 1.22: September 29, 2022
 * * Bug Fixes!
 * ** After enemies recover from a stun, enemies no longer take an immediate
 *    action regardless of their time gauge state. Fix made by Olivia.
 * 
 * Version 1.21: August 25, 2022
 * * Bug Fixes!
 * ** Restricted enemies will no longer be action-locked after removing the
 *    restriction state. Fix made by Olivia.
 * 
 * Version 1.20: August 18, 2022
 * * Bug Fixes!
 * ** Fixed bugs that caused the ATB Field Gauge faces and icons to not change
 *    properly for actors and enemies. Fix made by Olivia.
 * 
 * Version 1.19: July 21, 2022
 * * Bug Fixes!
 * ** Battlers under a "Cannot Move" state will no longer reset their ATB gauge
 *    after their "turn" comes up to update it. Fix made by Olivia.
 * 
 * Version 1.18: June 2, 2022
 * * Bug Fixes!
 * ** Notetag effect for <ATB After Gauge: x%> should now be working properly.
 *    Fix made by Olivia.
 * ** Notetag effect for <JS ATB After Gauge> should now be working properly.
 *    Fix made by Olivia.
 * 
 * Version 1.17: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.16: August 13, 2021
 * * Bug Fixes!
 * ** Crash prevented with certain Plugin Parameter combinations enabled when
 *    the ATB Gauge is filled up. Fix made by Irina.
 * 
 * Version 1.15: July 23, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly for SV Enemies, too. Fix made by Irina.
 * 
 * Version 1.14: July 16, 2021
 * * Bug Fixes!
 * ** When enemies appear out from a troop event, Visual ATB Gauges above their
 *    heads should now appear properly. Fix made by Olivia.
 * 
 * Version 1.13: May 21, 2021
 * * Bug Fixes!
 * ** When slip damage is allowed to kill, dying actors will have their TPB
 *    state reset to charging in order to prevent lock-ups. Fix by Olivia.
 * 
 * Version 1.12: May 7, 2021
 * * Feature Update!
 * ** Actions with 0 or positive speed will now act immediately without
 *    allowing a single gauge tick pass through. Update made by Olivia.
 * 
 * Version 1.11: April 16, 2021
 * * Bug Fixes!
 * ** ATB Gauge visibility is now properly updated across various events such
 *    as party removal and other obstruction effects. Fix made by Olivia.
 * 
 * Version 1.10: March 12, 2021
 * * Hot Fix!
 * ** Fixed calculation errors due to field gauge. Fix made by Olivia.
 * * Feature Update!
 * ** Slight change to the way calculations are made for the bottom aligned
 *    field gauge position. Update made by Olivia.
 * 
 * Version 1.09: January 1, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.08: November 22, 2020
 * * Feature Update!
 * ** ATB Interrupts will not clear all actions (including queued ones) for
 *    mechanical compatibility. Change made by Yanfly.
 * 
 * Version 1.07: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: November 1, 2020
 * * Documentation Update!
 * ** Help file updated with new features.
 * * New Features!
 * ** New Plugin Command by Irina!
 * *** Actor: Change Field Gauge Face
 * **** Changes the faces used for the specific actor(s) on the ATB
 *      Field Gauge.
 * 
 * Version 1.05: October 25, 2020
 * * Bug Fixes!
 * ** Plugin should now be compatible with older saves when changing to a save
 *    that didn't use a Field Gauge to one that does. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated with new features.
 * * Feature Update!
 * ** <ATB Field Gauge Face: filename, index> notetag now works with actors.
 *    Update made by Irina.
 *
 * Version 1.04: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.03: October 11, 2020
 * * Documentation Update
 * ** Help file updated with new features.
 * * Feature Update!
 * ** Enemy letters are no longer drawn on the Field Gauge unless there are
 *    multiple enemies of the same type. Added by Arisu.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and Yanfly.
 * *** Plugin Parameters > Field Gauge > Offset X and Y
 * **** How much to offset the X/Y coordinates of the Field Gauge by.
 * 
 * Version 1.02: October 4, 2020
 * * New Features!
 * ** New Plugin Command added "System: ATB Field Gauge Visibility" to let you
 *    show or hide the Field Gauge during battle. Added by Arisu.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** ATB Cast and Charge notetags no longer cause crashes. Fix made by Olivia.
 * * New Features!
 * ** New plugin parameter added by Olivia.
 * *** Plugin Parameters > Mechanics > Stuns Reset Gauge?
 * **** Should stuns reset the ATB Gauge?
 *
 * Version 1.00: September 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorIcon
 * @text Actor: Change Field Gauge Icon
 * @desc Changes the icons used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 84
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeActorFace
 * @text Actor: Change Field Gauge Face
 * @desc Changes the faces used for the specific actor(s) on the ATB Field Gauge.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Actor1
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearActorGraphic
 * @text Actor: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the actor(s).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyIcon
 * @text Enemy: Change Field Gauge Icon
 * @desc Changes the icons used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg IconIndex:num
 * @text Icon
 * @desc Changes the graphic to this icon.
 * @default 298
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeEnemyFace
 * @text Enemy: Change Field Gauge Face
 * @desc Changes the faces used for the specific enemy(ies) on the ATB Field Gauge.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @arg FaceName:str
 * @text Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc This is the filename for the target face graphic.
 * @default Monster
 *
 * @arg FaceIndex:num
 * @text Face Index
 * @parent EnemySprite
 * @type number
 * @desc This is the index for the target face graphic.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FieldGaugeClearEnemyGraphic
 * @text Enemy: Clear Field Gauge Graphic
 * @desc Clears the ATB Field Gauge graphics for the enemy(ies).
 * The settings will revert to the Plugin Parameter settings.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @desc Select which enemy index(es) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemFieldGaugeVisibility
 * @text System: ATB Field Gauge Visibility
 * @desc Determine the visibility of the ATB Field Gauge.
 *
 * @arg Visible:eval
 * @text Visibility
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Changes the visibility of the ATB Field Gauge.
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
 * @param BattleSystemATB
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Mechanics:struct
 * @text Mechanics Settings
 * @type struct<Mechanics>
 * @desc Mechanics settings used for Battle System ATB.
 * @default {"General":"","EscapeFailPenalty:num":"-1.00","StunsResetGauge:eval":"true","JavaScript":"","InitialGaugeJS:str":"Math.random() * 0.5","TpbSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\n\\n// Process Calculation\\nlet speed = Math.sqrt(user.agi) + 1;\\n\\n// Return Value\\nreturn speed;\"","TpbBaseSpeedCalcJS:func":"\"// Declare Constants\\nconst user = this;\\nconst baseAgility = user.paramBasePlus(6);\\n\\n// Process Calculation\\nlet speed = Math.sqrt(baseAgility) + 1;\\n\\n// Return Value\\nreturn speed;\"","BattlerRelativeSpeedJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbSpeed()\\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\\n\\n// Process Calculation\\nlet relativeSpeed = speed / partyBaseSpeed;\\n\\n// Return Value\\nreturn relativeSpeed;\"","TpbAccelerationJS:func":"\"// Declare Constants\\nconst user = this;\\nconst speed = user.tpbRelativeSpeed();\\nconst referenceTime = $gameParty.tpbReferenceTime();\\n\\n// Process Calculation\\nlet acceleration = speed / referenceTime;\\n\\n// Return Value\\nreturn acceleration;\"","TpbCastTimeJS:func":"\"// Declare Constants\\nconst user = this;\\nconst actions = user._actions.filter(action => action.isValid());\\nconst items = actions.map(action => action.item());\\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\\n\\n// Process Calculation\\nlet time = Math.sqrt(delay) / user.tpbSpeed();\\n\\n// Return Value\\nreturn time;\""}
 *
 * @param Interrupt:struct
 * @text Interrupt Settings
 * @type struct<Interrupt>
 * @desc Interrupt settings used for Battle System ATB.
 * @default {"Interrupt":"","InterruptAnimationID:num":"11","InterruptMirror:eval":"false","InterruptMute:eval":"false","InterruptText:str":"INTERRUPTED!","InterruptTextColor:str":"0","InterruptFlashColor:eval":"[255, 0, 0, 160]","InterruptFlashDuration:num":"60"}
 *
 * @param Gauge:struct
 * @text General Gauge Settings
 * @type struct<Gauge>
 * @desc General gauge settings used for ATB Gauges.
 * @default {"General":"","AnchorX:num":"0.5","AnchorY:num":"1.0","Scale:num":"0.5","OffsetX:num":"0","OffsetY:num":"2","AGIGaugeRates":"","SlowRate:num":"0.60","FastRate:num":"1.40","Actors":"","ShowActorGauge:eval":"true","ShowStatusGauge:eval":"false","Enemies":"","ShowEnemyGauge:eval":"true"}
 *
 * @param FieldGauge:struct
 * @text Field Gauge Settings
 * @type struct<FieldGauge>
 * @desc Make a field-wide ATB gauge for all the battlers.
 * @default {"General":"","UseFieldGauge:eval":"false","DisplayPosition:str":"top","DisplayOffsetX:num":"0","DisplayOffsetY:num":"0","RepositionTopForHelp:eval":"true","GaugeDirection:eval":"true","Gauge":"","GaugeSystemSkin:str":"","DrawGauge:eval":"true","GaugeLengthHorz:num":"600","GaugeLengthVert:num":"400","GaugeThick:num":"16","GaugeSplit:num":"0.70","Reposition":"","RepositionTopHelpX:num":"0","RepositionTopHelpY:num":"48","Markers":"","ActorSide:eval":"true","EnemySide:eval":"false","MarkerOffset:num":"28","MarkerSize:num":"32","MarkerSpeed:num":"36","OpacityRate:num":"4","BorderThickness:num":"2","Border":"","ShowMarkerBorder:eval":"true","BorderActor":"","ActorBorderColor:str":"4","ActorSystemBorder:str":"","BorderEnemy":"","EnemyBorderColor:str":"2","EnemySystemBorder:str":"","Sprite":"","ActorSprite":"","ActorBattlerType:str":"face","ActorBattlerIcon:num":"84","EnemySprite":"","EnemyBattlerType:str":"enemy","EnemyBattlerFaceName:str":"Monster","EnemyBattlerFaceIndex:num":"1","EnemyBattlerIcon:num":"298","EnemyBattlerMatchHue:eval":"true","Letter":"","EnemyBattlerDrawLetter:eval":"true","EnemyBattlerFontFace:str":"","EnemyBattlerFontSize:num":"16","Background":"","ShowMarkerBg:eval":"true","BackgroundActor":"","ActorBgColor1:str":"1","ActorBgColor2:str":"9","ActorSystemBg:str":"","BackgroundEnemy":"","EnemyBgColor1:str":"10","EnemyBgColor2:str":"18","EnemySystemBg:str":"","Arrow":"","ShowMarkerArrow:eval":"true","MarkerArrowWindowSkin:str":"Window"}
 *
 * @param Color:struct
 * @text Gauge Color Settings
 * @type struct<Color>
 * @desc Gauge color settings used for ATB Gauges.
 * @default {"default1:str":"26","default2:str":"27","full1:str":"14","full2:str":"6","cast1:str":"2","cast2:str":"10","fast1:str":"27","fast2:str":"18","slow1:str":"22","slow2:str":"23","stop1:str":"7","stop2:str":"8"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options settings used for Battle System ATB.
 * @default {"Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Show ATB Gauges"}
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
 * Mechanics Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Mechanics:
 *
 * @param General
 * 
 * @param EscapeFailPenalty:num
 * @text Escape Fail Penalty
 * @parent General
 * @desc Gauge penalty if an escape attempt fails.
 * @default -1.00
 *
 * @param StunsResetGauge:eval
 * @text Stuns Reset Gauge?
 * @parent General
 * @type boolean
 * @on Reset Gauge
 * @off Don't Reset
 * @desc Should stuns reset the ATB Gauge?
 * @default true
 *
 * @param JavaScript
 *
 * @param InitialGaugeJS:str
 * @text JS: Initial Gauge
 * @parent JavaScript
 * @desc JavaScript code to determine how much ATB gauge to give
 * each battler at the start of battle.
 * @default Math.random() * 0.5
 *
 * @param TpbSpeedCalcJS:func
 * @text JS: Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much speed a battler has.
 * @default "// Declare Constants\nconst user = this;\n\n// Process Calculation\nlet speed = Math.sqrt(user.agi) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param TpbBaseSpeedCalcJS:func
 * @text JS: Base Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much base speed a battler has.
 * @default "// Declare Constants\nconst user = this;\nconst baseAgility = user.paramBasePlus(6);\n\n// Process Calculation\nlet speed = Math.sqrt(baseAgility) + 1;\n\n// Return Value\nreturn speed;"
 * 
 * @param BattlerRelativeSpeedJS:func
 * @text JS: Relative Speed
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine what is the relative speed of a battler.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbSpeed()\nconst partyBaseSpeed = $gameParty.tpbBaseSpeed();\n\n// Process Calculation\nlet relativeSpeed = speed / partyBaseSpeed;\n\n// Return Value\nreturn relativeSpeed;"
 * 
 * @param TpbAccelerationJS:func
 * @text JS: Acceleration
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much gauges accelerate by relative to reference time.
 * @default "// Declare Constants\nconst user = this;\nconst speed = user.tpbRelativeSpeed();\nconst referenceTime = $gameParty.tpbReferenceTime();\n\n// Process Calculation\nlet acceleration = speed / referenceTime;\n\n// Return Value\nreturn acceleration;"
 * 
 * @param TpbCastTimeJS:func
 * @text JS: Cast Time
 * @parent JavaScript
 * @type note
 * @desc JavaScript code to determine how much cast time is used for skills/items with negative speed modifiers.
 * @default "// Declare Constants\nconst user = this;\nconst actions = user._actions.filter(action => action.isValid());\nconst items = actions.map(action => action.item());\nconst delay = items.reduce((r, item) => r + Math.max(0, -item.speed), 0);\n\n// Process Calculation\nlet time = Math.sqrt(delay) / user.tpbSpeed();\n\n// Return Value\nreturn time;"
 * 
 */
/* ----------------------------------------------------------------------------
 * Interrupt Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Interrupt:
 *
 * @param Interrupt
 *
 * @param InterruptAnimationID:num
 * @text Animation ID
 * @parent Interrupt
 * @type animation
 * @desc Play this animation when a unit is interrupted.
 * Requires VisuMZ_0_CoreEngine.
 * @default 11
 *
 * @param InterruptMirror:eval
 * @text Mirror Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptMute:eval
 * @text Mute Animation
 * @parent InterruptAnimationID:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the interrupt animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param InterruptText:str
 * @text Text Popup
 * @parent Interrupt
 * @desc Text used for popup when interrupts happen.
 * Leave empty for no popup.
 * @default INTERRUPTED!
 *
 * @param InterruptTextColor:str
 * @text Text Color
 * @parent InterruptText:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param InterruptFlashColor:eval
 * @text Flash Color
 * @parent InterruptText:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param InterruptFlashDuration:num
 * @text Flash Duration
 * @parent InterruptText:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
/* ----------------------------------------------------------------------------
 * Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gauge:
 *
 * @param General
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor X to be?
 * Use values between 0 and 1 to be safe.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent General
 * @desc Where do you want the ATB Gauge sprite's anchor Y to be?
 * Use values between 0 and 1 to be safe.
 * @default 1.0
 *
 * @param Scale:num
 * @text Scale
 * @parent General
 * @desc How large/small do you want the ATB Gauge to be scaled?
 * @default 0.5
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's X by?
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent General
 * @desc How many pixels to offset the ATB Gauge's Y by?
 * @default 2
 *
 * @param AGIGaugeRates
 * @text AGI Gauge Rates
 *
 * @param SlowRate:num
 * @text Slow Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered slow?
 * @default 0.60
 *
 * @param FastRate:num
 * @text Fast Rate
 * @parent AGIGaugeRates
 * @desc How much should the AGI rate be at to be considered fast?
 * @default 1.40
 *
 * @param Actors
 *
 * @param ShowActorGauge:eval
 * @text Show Sprite Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the actor sprites' heads?
 * Requires SV Actors to be visible.
 * @default true
 *
 * @param ShowStatusGauge:eval
 * @text Show Status Gauges
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges in the status window?
 * Applies only to sideview.
 * @default false
 *
 * @param Enemies
 *
 * @param ShowEnemyGauge:eval
 * @text Show Sprite Gauges
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show ATB Gauges over the enemy sprites' heads?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param default1:str
 * @text Default Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param default2:str
 * @text Default Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param full1:str
 * @text Full Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param full2:str
 * @text Full Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param cast1:str
 * @text Cast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param cast2:str
 * @text Cast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param fast1:str
 * @text Fast Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param fast2:str
 * @text Fast Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param slow1:str
 * @text Slow Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param slow2:str
 * @text Slow Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param stop1:str
 * @text Stop Color 1
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param stop2:str
 * @text Stop Color 2
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 8
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Show ATB Gauges' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Show ATB Gauges
 *
 */
/* ----------------------------------------------------------------------------
 * Field Gauge Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FieldGauge:
 *
 * @param General
 *
 * @param UseFieldGauge:eval
 * @text Use Field Gauge?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc This value must be set to true in order for the ATB Field Gauge to appear.
 * @default false
 *
 * @param DisplayPosition:str
 * @text Display Position
 * @parent General
 * @type select
 * @option top
 * @option bottom
 * @option left
 * @option right
 * @desc Select where the Field Gauge will appear on the screen.
 * @default top
 * 
 * @param DisplayOffsetX:num
 * @text Offset X
 * @parent DisplayPosition:str
 * @desc How much to offset the X coordinate by.
 * Negative: left. Positive: right.
 * @default 0
 * 
 * @param DisplayOffsetY:num
 * @text Offset Y
 * @parent DisplayPosition:str
 * @desc How much to offset the Y coordinate by.
 * Negative: up. Positive: down.
 * @default 0
 *
 * @param RepositionTopForHelp:eval
 * @text Reposition for Help?
 * @parent DisplayPosition:str
 * @type boolean
 * @on Reposition
 * @off Stay
 * @desc If the display position is at the top, reposition the
 * gauge when the help window is open?
 * @default true
 *
 * @param GaugeDirection:eval
 * @text Forward Direction
 * @parent General
 * @type boolean
 * @on Left to Right / Up to Down
 * @off Right to Left / Down to Up
 * @desc Decide on the direction of the Field Gauge.
 * Settings may vary depending on position.
 * @default true
 *
 * @param Gauge
 * @text Field Gauge Settings
 *
 * @param GaugeSystemSkin:str
 * @text Gauge Skin
 * @parent Gauge
 * @type file
 * @dir img/system/
 * @desc Optional. Select an image to place behind the gauge.
 * This will be centered on the Field Gauge's position.
 * @default 
 *
 * @param DrawGauge:eval
 * @text Show Gauge?
 * @parent Gauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Decide if you want the gauge to be shown.
 * @default true
 *
 * @param GaugeLengthHorz:num
 * @text Horizontal Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed horizontally.
 * @default 600
 *
 * @param GaugeLengthVert:num
 * @text Vertical Length
 * @parent Gauge
 * @type number
 * @min 10
 * @desc The length of the Field Gauge if placed vertically.
 * @default 400
 *
 * @param GaugeThick:num
 * @text Thickness
 * @parent Gauge
 * @type number
 * @min 3
 * @desc The thickness of the Field Gauge for either direction.
 * @default 16
 *
 * @param GaugeSplit:num
 * @text Split Location
 * @parent Gauge
 * @desc Determine where the gauge should split.
 * Use 0.00 for the start. Use 1.00 for the end.
 * @default 0.70
 * 
 * @param Reposition
 * @text Reposition For Help
 *
 * @param RepositionTopHelpX:num
 * @text Repostion X By
 * @parent Reposition
 * @desc Reposition the gauge's X coordinates by this much when
 * the Help Window is visible.
 * @default 0
 *
 * @param RepositionTopHelpY:num
 * @text Repostion Y By
 * @parent Reposition
 * @desc Reposition the gauge's Y coordinates by this much when
 * the Help Window is visible.
 * @default 48
 *
 * @param Markers
 * @text Marker Sprites
 *
 * @param ActorSide:eval
 * @text Actor Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the actor markers to appear?
 * @default true
 *
 * @param EnemySide:eval
 * @text Enemy Marker Side
 * @parent Markers
 * @type boolean
 * @on Top / Right
 * @off Bottom / Left
 * @desc Which side do you want the enemy markers to appear?
 * @default false
 *
 * @param MarkerOffset:num
 * @text Marker Offset
 * @parent Markers
 * @desc How many pixels do you want to offset the markers by?
 * @default 28
 *
 * @param MarkerSize:num
 * @text Marker Size
 * @parent Markers
 * @type number
 * @min 10
 * @desc How pixels wide and tall do you want the markers to be?
 * @default 32
 *
 * @param MarkerSpeed:num
 * @text Marker Speed
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels maximum can a marker travel in one frame?
 * @default 36
 *
 * @param OpacityRate:num
 * @text Opacity Rate
 * @parent Markers
 * @type number
 * @min 1
 * @desc If a marker has to change opacity, how fast should it change by?
 * @default 4
 *
 * @param Border
 * @text Marker Border
 *
 * @param ShowMarkerBorder:eval
 * @text Show Border?
 * @parent Border
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show borders for the marker sprites?
 * @default true
 *
 * @param BorderThickness:num
 * @text Border Thickness
 * @parent Markers
 * @type number
 * @min 1
 * @desc How many pixels thick should the colored portion of the border be?
 * @default 2
 *
 * @param BorderActor
 * @text Actors
 * @parent Border
 *
 * @param ActorBorderColor:str
 * @text Border Color
 * @parent BorderActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 4
 *
 * @param ActorSystemBorder:str
 * @text Border Skin
 * @parent BorderActor
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the actor borders instead of rendering them?
 * @default 
 *
 * @param BorderEnemy
 * @text Enemies
 * @parent Border
 *
 * @param EnemyBorderColor:str
 * @text Border Color
 * @parent BorderEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param EnemySystemBorder:str
 * @text Border Skin
 * @parent BorderEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Place a skin on the enemy borders instead of rendering them?
 * @default 
 *
 * @param Sprite
 * @text Marker Sprites
 *
 * @param ActorSprite
 * @text Actors
 * @parent Sprite
 *
 * @param ActorBattlerType:str
 * @text Sprite Type
 * @parent ActorSprite
 * @type select
 * @option Face Graphic - Show the actor's face.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Sideview Actor - Show the actor's sideview battler.
 * @value svactor
 * @desc Select the type of sprite used for the actor graphic.
 * @default face
 *
 * @param ActorBattlerIcon:num
 * @text Default Icon
 * @parent ActorSprite
 * @desc Which icon do you want to use for actors by default?
 * @default 84
 *
 * @param EnemySprite
 * @text Enemies
 * @parent Sprite
 *
 * @param EnemyBattlerType:str
 * @text Sprite Type
 * @parent EnemySprite
 * @type select
 * @option Face Graphic - Show a specified face graphic.
 * @value face
 * @option Icon - Show a specified icon.
 * @value icon
 * @option Enemy - Show the enemy's graphic or sideview battler.
 * @value enemy
 * @desc Select the type of sprite used for the enemy graphic.
 * @default enemy
 *
 * @param EnemyBattlerFaceName:str
 * @text Default Face Name
 * @parent EnemySprite
 * @type file
 * @dir img/faces/
 * @desc Use this default face graphic if there is no specified face.
 * @default Monster
 *
 * @param EnemyBattlerFaceIndex:num
 * @text Default Face Index
 * @parent EnemySprite
 * @type number
 * @desc Use this default face index if there is no specified index.
 * @default 1
 *
 * @param EnemyBattlerIcon:num
 * @text Default Icon
 * @parent EnemySprite
 * @desc Which icon do you want to use for enemies by default?
 * @default 298
 *
 * @param EnemyBattlerMatchHue:eval
 * @text Match Hue?
 * @parent EnemySprite
 * @type boolean
 * @on Match
 * @off Don't Match
 * @desc Match the hue for enemy battlers?
 * Does not apply if there's a sideview battler.
 * @default true
 *
 * @param Letter
 * @text Marker Letter
 *
 * @param EnemyBattlerDrawLetter:eval
 * @text Show Enemy Letter?
 * @parent Letter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the enemy's letter on the marker sprite?
 * @default true
 *
 * @param EnemyBattlerFontFace:str
 * @text Font Name
 * @parent Letter
 * @desc The font name used for the text of the Letter.
 * Leave empty to use the default game's font.
 * @default 
 *
 * @param EnemyBattlerFontSize:num
 * @text Font Size
 * @parent Letter
 * @min 1
 * @desc The font size used for the text of the Letter.
 * @default 16
 *
 * @param Background
 * @text Marker Background
 *
 * @param ShowMarkerBg:eval
 * @text Show Background?
 * @parent Background
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the background on the marker sprite?
 * @default true
 *
 * @param BackgroundActor
 * @text Actors
 * @parent Background
 *
 * @param ActorBgColor1:str
 * @text Background Color 1
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 1
 *
 * @param ActorBgColor2:str
 * @text Background Color 2
 * @parent BackgroundActor
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 9
 *
 * @param ActorSystemBg:str
 * @text Background Skin
 * @parent BackgroundActor
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the actor background instead of rendering them?
 * @default 
 *
 * @param BackgroundEnemy
 * @text Enemies
 * @parent Background
 *
 * @param EnemyBgColor1:str
 * @text Background Color 1
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 10
 *
 * @param EnemyBgColor2:str
 * @text Background Color 2
 * @parent BackgroundEnemy
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param EnemySystemBg:str
 * @text Background Skin
 * @parent BackgroundEnemy
 * @type file
 * @dir img/system/
 * @desc Optional. Use a skin for the enemy background instead of rendering them?
 * @default 
 *
 * @param Arrow
 * @text Marker Arrow
 *
 * @param ShowMarkerArrow:eval
 * @text Show Arrow?
 * @parent Arrow
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the arrow sprite pointing towards the Field Gauge?
 * @default true
 *
 * @param MarkerArrowWindowSkin:str
 * @text Arrow Skin
 * @parent Arrow
 * @type file
 * @dir img/system/
 * @desc Pick a window skin to draw arrows from.
 * @default Window
 *
 */
//=============================================================================

const _0x56cca2=_0x1b6e;(function(_0x13850a,_0x52756f){const _0x50c1b7=_0x1b6e,_0x3b7e05=_0x13850a();while(!![]){try{const _0x50b9c5=-parseInt(_0x50c1b7(0x28d))/0x1+parseInt(_0x50c1b7(0x2a1))/0x2+parseInt(_0x50c1b7(0x18d))/0x3+-parseInt(_0x50c1b7(0xfe))/0x4*(parseInt(_0x50c1b7(0x13e))/0x5)+parseInt(_0x50c1b7(0x149))/0x6*(-parseInt(_0x50c1b7(0x12b))/0x7)+parseInt(_0x50c1b7(0xdf))/0x8*(-parseInt(_0x50c1b7(0x174))/0x9)+parseInt(_0x50c1b7(0xc5))/0xa;if(_0x50b9c5===_0x52756f)break;else _0x3b7e05['push'](_0x3b7e05['shift']());}catch(_0x309fb0){_0x3b7e05['push'](_0x3b7e05['shift']());}}}(_0x59e7,0x4d14b));var label=_0x56cca2(0x17d),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins['filter'](function(_0x1f5ce4){const _0x4f3962=_0x56cca2;return _0x1f5ce4['status']&&_0x1f5ce4[_0x4f3962(0x1ba)][_0x4f3962(0x153)]('['+label+']');})[0x0];VisuMZ[label][_0x56cca2(0x286)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x56cca2(0x27b)]=function(_0x31db15,_0x2c4a08){const _0x34928c=_0x56cca2;for(const _0x12269d in _0x2c4a08){if(_0x12269d['match'](/(.*):(.*)/i)){const _0x5c1a6a=String(RegExp['$1']),_0x4f7885=String(RegExp['$2'])[_0x34928c(0x120)]()[_0x34928c(0x1e0)]();let _0x3a8e8c,_0x55a24c,_0x3fe286;switch(_0x4f7885){case _0x34928c(0x241):_0x3a8e8c=_0x2c4a08[_0x12269d]!==''?Number(_0x2c4a08[_0x12269d]):0x0;break;case _0x34928c(0x248):_0x55a24c=_0x2c4a08[_0x12269d]!==''?JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d]):[],_0x3a8e8c=_0x55a24c[_0x34928c(0x119)](_0x3a09a3=>Number(_0x3a09a3));break;case _0x34928c(0x278):_0x3a8e8c=_0x2c4a08[_0x12269d]!==''?eval(_0x2c4a08[_0x12269d]):null;break;case _0x34928c(0x159):_0x55a24c=_0x2c4a08[_0x12269d]!==''?JSON['parse'](_0x2c4a08[_0x12269d]):[],_0x3a8e8c=_0x55a24c[_0x34928c(0x119)](_0x5e42f1=>eval(_0x5e42f1));break;case'JSON':_0x3a8e8c=_0x2c4a08[_0x12269d]!==''?JSON['parse'](_0x2c4a08[_0x12269d]):'';break;case _0x34928c(0x110):_0x55a24c=_0x2c4a08[_0x12269d]!==''?JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d]):[],_0x3a8e8c=_0x55a24c[_0x34928c(0x119)](_0x498dc4=>JSON[_0x34928c(0x1f1)](_0x498dc4));break;case'FUNC':_0x3a8e8c=_0x2c4a08[_0x12269d]!==''?new Function(JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d])):new Function(_0x34928c(0x116));break;case _0x34928c(0x24a):_0x55a24c=_0x2c4a08[_0x12269d]!==''?JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d]):[],_0x3a8e8c=_0x55a24c[_0x34928c(0x119)](_0x3ec9ce=>new Function(JSON[_0x34928c(0x1f1)](_0x3ec9ce)));break;case _0x34928c(0x269):_0x3a8e8c=_0x2c4a08[_0x12269d]!==''?String(_0x2c4a08[_0x12269d]):'';break;case _0x34928c(0x1ce):_0x55a24c=_0x2c4a08[_0x12269d]!==''?JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d]):[],_0x3a8e8c=_0x55a24c[_0x34928c(0x119)](_0x4e6b44=>String(_0x4e6b44));break;case _0x34928c(0xe2):_0x3fe286=_0x2c4a08[_0x12269d]!==''?JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d]):{},_0x3a8e8c=VisuMZ[_0x34928c(0x27b)]({},_0x3fe286);break;case _0x34928c(0x20c):_0x55a24c=_0x2c4a08[_0x12269d]!==''?JSON[_0x34928c(0x1f1)](_0x2c4a08[_0x12269d]):[],_0x3a8e8c=_0x55a24c[_0x34928c(0x119)](_0x1cfec0=>VisuMZ[_0x34928c(0x27b)]({},JSON['parse'](_0x1cfec0)));break;default:continue;}_0x31db15[_0x5c1a6a]=_0x3a8e8c;}}return _0x31db15;},(_0x2a1ca6=>{const _0x411627=_0x56cca2,_0x493e02=_0x2a1ca6[_0x411627(0xe1)];for(const _0x14ccaf of dependencies){if(!Imported[_0x14ccaf]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x411627(0x11d)](_0x493e02,_0x14ccaf)),SceneManager['exit']();break;}}const _0x552543=_0x2a1ca6[_0x411627(0x1ba)];if(_0x552543[_0x411627(0x196)](/\[Version[ ](.*?)\]/i)){const _0x21eb5d=Number(RegExp['$1']);_0x21eb5d!==VisuMZ[label][_0x411627(0x104)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x411627(0x11d)](_0x493e02,_0x21eb5d)),SceneManager['exit']());}if(_0x552543[_0x411627(0x196)](/\[Tier[ ](\d+)\]/i)){const _0x1253e0=Number(RegExp['$1']);_0x1253e0<tier?(alert(_0x411627(0x164)[_0x411627(0x11d)](_0x493e02,_0x1253e0,tier)),SceneManager[_0x411627(0x24d)]()):tier=Math['max'](_0x1253e0,tier);}VisuMZ[_0x411627(0x27b)](VisuMZ[label]['Settings'],_0x2a1ca6['parameters']);})(pluginData),PluginManager['registerCommand'](pluginData[_0x56cca2(0xe1)],_0x56cca2(0x18a),_0x331875=>{const _0x43d04e=_0x56cca2;VisuMZ['ConvertParams'](_0x331875,_0x331875);const _0x780f3c=_0x331875[_0x43d04e(0x29b)],_0x334661=_0x331875[_0x43d04e(0xe8)];for(const _0x2ac580 of _0x780f3c){const _0x4e800e=$gameActors['actor'](_0x2ac580);if(!_0x4e800e)continue;_0x4e800e['_fieldAtbGaugeGraphicType']=_0x43d04e(0x27f),_0x4e800e[_0x43d04e(0x296)]=_0x334661;}}),PluginManager[_0x56cca2(0xdc)](pluginData[_0x56cca2(0xe1)],'FieldGaugeActorFace',_0x47802f=>{const _0x5efbc8=_0x56cca2;VisuMZ[_0x5efbc8(0x27b)](_0x47802f,_0x47802f);const _0x1d3762=_0x47802f[_0x5efbc8(0x29b)],_0x29abdb=_0x47802f[_0x5efbc8(0x244)],_0x364a75=_0x47802f[_0x5efbc8(0x25c)];for(const _0x4f0de0 of _0x1d3762){const _0x487e37=$gameActors[_0x5efbc8(0x1aa)](_0x4f0de0);if(!_0x487e37)continue;_0x487e37[_0x5efbc8(0x284)]=_0x5efbc8(0x1f8),_0x487e37['_fieldAtbGaugeFaceName']=_0x29abdb,_0x487e37[_0x5efbc8(0x267)]=_0x364a75;}}),PluginManager[_0x56cca2(0xdc)](pluginData['name'],_0x56cca2(0x1ca),_0x3b959f=>{const _0x19d302=_0x56cca2;VisuMZ[_0x19d302(0x27b)](_0x3b959f,_0x3b959f);const _0x512ec0=_0x3b959f[_0x19d302(0x29b)];for(const _0x42b355 of _0x512ec0){const _0x3519b9=$gameActors[_0x19d302(0x1aa)](_0x42b355);if(!_0x3519b9)continue;_0x3519b9[_0x19d302(0x12c)]();}}),PluginManager['registerCommand'](pluginData['name'],_0x56cca2(0x169),_0x1beb3b=>{const _0x15a00b=_0x56cca2;VisuMZ[_0x15a00b(0x27b)](_0x1beb3b,_0x1beb3b);const _0x5c856a=_0x1beb3b[_0x15a00b(0x13a)],_0x35d7ae=_0x1beb3b[_0x15a00b(0xe8)];for(const _0x298d39 of _0x5c856a){const _0x373494=$gameTroop[_0x15a00b(0x297)]()[_0x298d39];if(!_0x373494)continue;_0x373494[_0x15a00b(0x284)]=_0x15a00b(0x27f),_0x373494['_fieldAtbGaugeIconIndex']=_0x35d7ae;}}),PluginManager[_0x56cca2(0xdc)](pluginData[_0x56cca2(0xe1)],_0x56cca2(0x184),_0x4bd2f9=>{const _0x2272d1=_0x56cca2;VisuMZ[_0x2272d1(0x27b)](_0x4bd2f9,_0x4bd2f9);const _0x580a6f=_0x4bd2f9[_0x2272d1(0x13a)],_0xd26ea2=_0x4bd2f9['FaceName'],_0x3e13b7=_0x4bd2f9[_0x2272d1(0x25c)];for(const _0x4161fd of _0x580a6f){const _0x4c22b5=$gameTroop['members']()[_0x4161fd];if(!_0x4c22b5)continue;_0x4c22b5[_0x2272d1(0x284)]=_0x2272d1(0x1f8),_0x4c22b5[_0x2272d1(0x118)]=_0xd26ea2,_0x4c22b5[_0x2272d1(0x267)]=_0x3e13b7;}}),PluginManager[_0x56cca2(0xdc)](pluginData[_0x56cca2(0xe1)],_0x56cca2(0x235),_0x458023=>{const _0x529c76=_0x56cca2;VisuMZ['ConvertParams'](_0x458023,_0x458023);const _0xd4a081=_0x458023['Enemies'];for(const _0x5d70d2 of _0xd4a081){const _0x2d05eb=$gameTroop[_0x529c76(0x297)]()[_0x5d70d2];if(!_0x2d05eb)continue;_0x2d05eb[_0x529c76(0x12c)]();}}),PluginManager[_0x56cca2(0xdc)](pluginData['name'],_0x56cca2(0x1ae),_0xb83e3a=>{const _0x20bfbf=_0x56cca2;VisuMZ['ConvertParams'](_0xb83e3a,_0xb83e3a);const _0x3ff5f9=_0xb83e3a[_0x20bfbf(0x276)];$gameSystem['setBattleSystemATBFieldGaugeVisible'](_0x3ff5f9);}),VisuMZ['BattleSystemATB'][_0x56cca2(0x14e)]=Scene_Boot[_0x56cca2(0x271)][_0x56cca2(0x1e2)],Scene_Boot[_0x56cca2(0x271)][_0x56cca2(0x1e2)]=function(){const _0x4d3767=_0x56cca2;this[_0x4d3767(0x256)](),VisuMZ[_0x4d3767(0x17d)]['Scene_Boot_onDatabaseLoaded'][_0x4d3767(0x1d4)](this),this[_0x4d3767(0x111)]();},VisuMZ['BattleSystemATB'][_0x56cca2(0x242)]={},Scene_Boot[_0x56cca2(0x271)][_0x56cca2(0x256)]=function(){const _0x8a255f=_0x56cca2,_0x268bcb=VisuMZ['BattleCore'][_0x8a255f(0x242)],_0x48bc13=_0x8a255f(0x16d),_0x5ef130=[_0x8a255f(0x25f),_0x8a255f(0x28e),_0x8a255f(0xe6)];for(const _0x50fdad of _0x5ef130){const _0x150470=_0x48bc13[_0x8a255f(0x11d)](_0x50fdad[_0x8a255f(0x120)]()['trim'](),'(?:ATB|TPB)',_0x8a255f(0x1a8)),_0x24a8cb=new RegExp(_0x150470,'i');VisuMZ[_0x8a255f(0x17d)][_0x8a255f(0x242)][_0x50fdad]=_0x24a8cb;}},Scene_Boot[_0x56cca2(0x271)][_0x56cca2(0x111)]=function(){const _0x5093b7=_0x56cca2;if(VisuMZ['ParseAllNotetags'])return;const _0xced49f=$dataSkills[_0x5093b7(0x1b1)]($dataItems);for(const _0x528a0b of _0xced49f){if(!_0x528a0b)continue;VisuMZ[_0x5093b7(0x17d)][_0x5093b7(0xc7)](_0x528a0b);}},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x29d)]=VisuMZ[_0x56cca2(0x29d)],VisuMZ[_0x56cca2(0x29d)]=function(_0x4e461e){const _0x578767=_0x56cca2;VisuMZ['BattleSystemATB'][_0x578767(0x29d)][_0x578767(0x1d4)](this,_0x4e461e),VisuMZ[_0x578767(0x17d)][_0x578767(0xc7)](_0x4e461e);},VisuMZ[_0x56cca2(0x17d)]['ParseItemNotetags']=VisuMZ[_0x56cca2(0x19a)],VisuMZ[_0x56cca2(0x19a)]=function(_0xc0a5df){const _0x4429e5=_0x56cca2;VisuMZ[_0x4429e5(0x17d)][_0x4429e5(0x19a)][_0x4429e5(0x1d4)](this,_0xc0a5df),VisuMZ[_0x4429e5(0x17d)][_0x4429e5(0xc7)](_0xc0a5df);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0xc7)]=function(_0x3bd16c){const _0x54fbbb=_0x56cca2,_0x5bd9c2=['Charge',_0x54fbbb(0x28e),_0x54fbbb(0xe6)];for(const _0x1fb237 of _0x5bd9c2){VisuMZ[_0x54fbbb(0x17d)][_0x54fbbb(0x23d)](_0x3bd16c,_0x1fb237);}},VisuMZ[_0x56cca2(0x17d)]['JS']={},VisuMZ['BattleSystemATB']['createJS']=function(_0x113da5,_0x27ed80){const _0x471b03=_0x56cca2,_0x5637ca=_0x113da5['note'];if(_0x5637ca['match'](VisuMZ['BattleSystemATB']['RegExp'][_0x27ed80])){const _0x5f9be9=String(RegExp['$1']),_0x89bd74=_0x471b03(0x13b)[_0x471b03(0x11d)](_0x5f9be9,_0x27ed80),_0x7a82d4=VisuMZ[_0x471b03(0x17d)][_0x471b03(0xce)](_0x113da5,_0x27ed80);VisuMZ[_0x471b03(0x17d)]['JS'][_0x7a82d4]=new Function(_0x89bd74);}},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0xce)]=function(_0x45fc69,_0x14d78e){const _0x19953c=_0x56cca2;if(VisuMZ[_0x19953c(0xce)])return VisuMZ[_0x19953c(0xce)](_0x45fc69,_0x14d78e);let _0x1980d3='';if($dataActors[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0x12e)[_0x19953c(0x11d)](_0x45fc69['id'],_0x14d78e);if($dataClasses[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0xfc)[_0x19953c(0x11d)](_0x45fc69['id'],_0x14d78e);if($dataSkills[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0x17c)[_0x19953c(0x11d)](_0x45fc69['id'],_0x14d78e);if($dataItems[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0x10a)[_0x19953c(0x11d)](_0x45fc69['id'],_0x14d78e);if($dataWeapons['includes'](_0x45fc69))_0x1980d3='Weapon-%1-%2'[_0x19953c(0x11d)](_0x45fc69['id'],_0x14d78e);if($dataArmors[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0x13c)['format'](_0x45fc69['id'],_0x14d78e);if($dataEnemies[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0x175)['format'](_0x45fc69['id'],_0x14d78e);if($dataStates[_0x19953c(0x153)](_0x45fc69))_0x1980d3=_0x19953c(0x1fb)['format'](_0x45fc69['id'],_0x14d78e);return _0x1980d3;},ConfigManager['visualAtbGauge']=!![],VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x250)]=ConfigManager[_0x56cca2(0x29e)],ConfigManager[_0x56cca2(0x29e)]=function(){const _0x42b22a=_0x56cca2,_0x18399d=VisuMZ[_0x42b22a(0x17d)][_0x42b22a(0x250)]['call'](this);return _0x18399d[_0x42b22a(0x181)]=this[_0x42b22a(0x181)],_0x18399d;},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x19d)]=ConfigManager['applyData'],ConfigManager[_0x56cca2(0x140)]=function(_0x1619eb){const _0x4dda9f=_0x56cca2;VisuMZ['BattleSystemATB'][_0x4dda9f(0x19d)][_0x4dda9f(0x1d4)](this,_0x1619eb),_0x4dda9f(0x181)in _0x1619eb?this[_0x4dda9f(0x181)]=_0x1619eb[_0x4dda9f(0x181)]:this['visualAtbGauge']=!![];},ImageManager[_0x56cca2(0x155)]=ImageManager[_0x56cca2(0x155)]||0x9,ImageManager[_0x56cca2(0x237)]=ImageManager['svActorVertCells']||0x6,TextManager[_0x56cca2(0x181)]=VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x286)][_0x56cca2(0x18f)][_0x56cca2(0x1ad)],VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x274)]=ColorManager['loadWindowskin'],ColorManager[_0x56cca2(0x147)]=function(){const _0xd4e347=_0x56cca2;VisuMZ[_0xd4e347(0x17d)][_0xd4e347(0x274)][_0xd4e347(0x1d4)](this),this['_windowskin'][_0xd4e347(0x264)](this['setupBattleSystemATBColors'][_0xd4e347(0x124)](this));},ColorManager[_0x56cca2(0xc6)]=function(_0x1f6f35){const _0x324cee=_0x56cca2;return _0x1f6f35=String(_0x1f6f35),_0x1f6f35['match'](/#(.*)/i)?_0x324cee(0x1ed)[_0x324cee(0x11d)](String(RegExp['$1'])):this[_0x324cee(0x190)](Number(_0x1f6f35));},ColorManager['setupBattleSystemATBColors']=function(){const _0x4908ee=_0x56cca2,_0x50f570=[_0x4908ee(0x14b),'full',_0x4908ee(0x28f),'fast',_0x4908ee(0x15e),_0x4908ee(0x290)],_0x2a705b=VisuMZ['BattleSystemATB']['Settings']['Color'];this[_0x4908ee(0x1d5)]={};for(const _0x334f4b of _0x50f570){for(let _0x19ff3e=0x1;_0x19ff3e<=0x2;_0x19ff3e++){const _0x25e043=_0x334f4b+_0x19ff3e;this[_0x4908ee(0x1d5)][_0x25e043]=this[_0x4908ee(0xc6)](_0x2a705b[_0x25e043]);}}},ColorManager[_0x56cca2(0xe4)]=function(_0x2fc29d){const _0x9ee8df=_0x56cca2;if(this[_0x9ee8df(0x1d5)]===undefined)this['setupBattleSystemATBColors']();return this['_atbColors'][_0x2fc29d]||_0x9ee8df(0x117);},SceneManager[_0x56cca2(0x233)]=function(){const _0x162acd=_0x56cca2;return this[_0x162acd(0xe3)]&&this[_0x162acd(0xe3)]['constructor']===Scene_Battle;},BattleManager[_0x56cca2(0x1dd)]=function(){const _0x3cb745=_0x56cca2;if(Imported[_0x3cb745(0x2a2)]&&this[_0x3cb745(0x158)]())return![];return this['isTpb']();},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x14c)]=BattleManager['isActiveTpb'],BattleManager[_0x56cca2(0x223)]=function(){const _0xb3e03d=_0x56cca2;if(!this[_0xb3e03d(0x17b)]())return![];else return ConfigManager&&ConfigManager[_0xb3e03d(0x270)]!==undefined?ConfigManager[_0xb3e03d(0x270)]:VisuMZ[_0xb3e03d(0x17d)][_0xb3e03d(0x14c)]['call'](this);},VisuMZ['BattleSystemATB'][_0x56cca2(0x23f)]=Game_System[_0x56cca2(0x271)][_0x56cca2(0x14a)],Game_System['prototype'][_0x56cca2(0x14a)]=function(){const _0x538105=_0x56cca2;VisuMZ[_0x538105(0x17d)][_0x538105(0x23f)][_0x538105(0x1d4)](this),this['initBattleSystemATB']();},Game_System['prototype']['initBattleSystemATB']=function(){const _0x1a54dd=_0x56cca2;this[_0x1a54dd(0x182)]=!![];},Game_System['prototype'][_0x56cca2(0xf1)]=function(){const _0x3c3536=_0x56cca2;return this[_0x3c3536(0x182)]===undefined&&this[_0x3c3536(0x1f3)](),this[_0x3c3536(0x182)];},Game_System['prototype'][_0x56cca2(0x16b)]=function(_0xc8ed0f){const _0x20b639=_0x56cca2;this['_atbFieldGaugeVisible']===undefined&&this[_0x20b639(0x1f3)](),this[_0x20b639(0x182)]=_0xc8ed0f;},VisuMZ['BattleSystemATB'][_0x56cca2(0x125)]=Game_Action[_0x56cca2(0x271)][_0x56cca2(0x1bc)],Game_Action['prototype'][_0x56cca2(0x1bc)]=function(_0x5dc62f){const _0x1e230d=_0x56cca2;VisuMZ[_0x1e230d(0x17d)][_0x1e230d(0x125)][_0x1e230d(0x1d4)](this,_0x5dc62f),this[_0x1e230d(0x14d)](_0x5dc62f);},Game_Action[_0x56cca2(0x271)][_0x56cca2(0x14d)]=function(_0x54328d){const _0x52bcf5=_0x56cca2;if(!SceneManager[_0x52bcf5(0x233)]())return;if(!BattleManager[_0x52bcf5(0x1dd)]())return;if(this[_0x52bcf5(0x1cf)]())this['applyItemBattleSystemATBUserEffect'](_0x54328d);},Game_Action[_0x56cca2(0x271)]['applyItemBattleSystemATBUserEffect']=function(_0x383ccc){const _0x571989=_0x56cca2,_0x364cd5=this['item']()[_0x571989(0xe5)];if(_0x383ccc[_0x571989(0x1bb)]()){const _0x53fd67=VisuMZ['BattleSystemATB'][_0x571989(0xce)](this['item'](),_0x571989(0x25f));if(VisuMZ[_0x571989(0x17d)]['JS'][_0x53fd67]){const _0x300f4b=VisuMZ[_0x571989(0x17d)]['JS'][_0x53fd67][_0x571989(0x1d4)](this,this[_0x571989(0x130)](),_0x383ccc);_0x383ccc['setAtbChargeTime'](_0x300f4b);}_0x364cd5['match'](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x383ccc[_0x571989(0x1b9)](Number(RegExp['$1'])*0.01),_0x364cd5[_0x571989(0x196)](/<(?:ATB|TPB) CHARGE (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x383ccc[_0x571989(0x10e)](Number(RegExp['$1'])*0.01);}else{if(_0x383ccc['isAtbCastingState']()){const _0x5332eb=VisuMZ[_0x571989(0x17d)]['createKeyJS'](this[_0x571989(0x1cf)](),'Cast');if(VisuMZ[_0x571989(0x17d)]['JS'][_0x5332eb]){const _0x4b1d7f=VisuMZ[_0x571989(0x17d)]['JS'][_0x5332eb][_0x571989(0x1d4)](this,this[_0x571989(0x130)](),_0x383ccc);_0x383ccc[_0x571989(0x1b7)](_0x4b1d7f);}_0x364cd5[_0x571989(0x196)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&_0x383ccc[_0x571989(0x1b7)](Number(RegExp['$1'])*0.01),_0x364cd5[_0x571989(0x196)](/<(?:ATB|TPB) CAST (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i)&&_0x383ccc['changeAtbCastTime'](Number(RegExp['$1'])*0.01),_0x364cd5[_0x571989(0x196)](/<(?:ATB|TPB) INTERRUPT>/i)&&_0x383ccc[_0x571989(0x299)]();}}},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x160)]=Game_Action[_0x56cca2(0x271)][_0x56cca2(0x224)],Game_Action[_0x56cca2(0x271)]['applyGlobal']=function(){const _0x1dc0c0=_0x56cca2;VisuMZ['BattleSystemATB'][_0x1dc0c0(0x160)][_0x1dc0c0(0x1d4)](this),this[_0x1dc0c0(0x229)]();},Game_Action['prototype'][_0x56cca2(0x229)]=function(){const _0x39c4a9=_0x56cca2;if(!this[_0x39c4a9(0x1cf)]())return;if(!BattleManager[_0x39c4a9(0x1dd)]())return;const _0x4cf862=this['item']()['note'];let _0x5819ad=0x0;this[_0x39c4a9(0x21a)]&&(_0x5819ad=this[_0x39c4a9(0x130)]()[_0x39c4a9(0x29a)]);const _0x25aaa1=VisuMZ[_0x39c4a9(0x17d)][_0x39c4a9(0xce)](this['item'](),_0x39c4a9(0xe6));VisuMZ[_0x39c4a9(0x17d)]['JS'][_0x25aaa1]&&(_0x5819ad=VisuMZ[_0x39c4a9(0x17d)]['JS'][_0x25aaa1]['call'](this,this[_0x39c4a9(0x130)](),this[_0x39c4a9(0x130)]()));let _0x286baf=this['item']()[_0x39c4a9(0x176)]>0x0?this[_0x39c4a9(0x1cf)]()[_0x39c4a9(0x176)]:0x0;if(this[_0x39c4a9(0x285)]())_0x286baf+=this[_0x39c4a9(0x130)]()[_0x39c4a9(0x180)]();_0x5819ad+=(_0x286baf/0xfa0)[_0x39c4a9(0x1d1)](0x0,0x1);this[_0x39c4a9(0x1cf)]()[_0x39c4a9(0xe5)]['match'](/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ](\d+)([%％])>/i)&&(_0x5819ad=Number(RegExp['$1'])*0.01);const _0x2d70d7=this[_0x39c4a9(0x130)]()[_0x39c4a9(0x1f6)]()['concat'](this[_0x39c4a9(0x130)]()[_0x39c4a9(0x26c)]()),_0x271e5a=/<(?:ATB|TPB) AFTER (?:GAUGE|TIME|SPEED):[ ]([\+\-]\d+)([%％])>/i,_0x476613=_0x2d70d7['map'](_0x18edac=>_0x18edac&&_0x18edac['note'][_0x39c4a9(0x196)](_0x271e5a)?Number(RegExp['$1'])*0.01:0x0);_0x5819ad=_0x476613['reduce']((_0x1b7cfd,_0x4172b7)=>_0x1b7cfd+_0x4172b7,_0x5819ad),this[_0x39c4a9(0x1cf)]()[_0x39c4a9(0xe5)][_0x39c4a9(0x196)](/<(?:ATB|TPB) INSTANT>/i)&&(_0x5819ad=0xa),this[_0x39c4a9(0x130)]()[_0x39c4a9(0x150)](_0x5819ad);},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x1b9)]=function(_0x1e5062){const _0x59d20f=_0x56cca2;this[_0x59d20f(0x29a)]=_0x1e5062[_0x59d20f(0x1d1)](0x0,0x1);},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x10e)]=function(_0x2d36ff){this['setAtbChargeTime'](this['_tpbChargeTime']+_0x2d36ff);},Game_BattlerBase['prototype'][_0x56cca2(0x1b7)]=function(_0x14836a){const _0x3871da=_0x56cca2,_0x330de9=this['tpbRequiredCastTime']();this[_0x3871da(0xc4)]=(_0x330de9*_0x14836a)['clamp'](0x0,_0x330de9);},Game_BattlerBase[_0x56cca2(0x271)]['changeAtbCastTime']=function(_0x2fde1d){const _0x549c1c=_0x56cca2,_0x2fff3b=this[_0x549c1c(0x295)](),_0x16d522=_0x2fff3b*_0x2fde1d;this[_0x549c1c(0xc4)]=(this[_0x549c1c(0xc4)]+_0x16d522)['clamp'](0x0,_0x2fff3b);},VisuMZ[_0x56cca2(0x17d)]['Game_BattlerBase_die']=Game_BattlerBase['prototype']['die'],Game_BattlerBase['prototype']['die']=function(){const _0x4c2312=_0x56cca2;VisuMZ['BattleSystemATB']['Game_BattlerBase_die'][_0x4c2312(0x1d4)](this),BattleManager['isATB']()&&this[_0x4c2312(0x129)]();},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x1e7)]=Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x27c)],Game_BattlerBase['prototype'][_0x56cca2(0x27c)]=function(){const _0x277983=_0x56cca2;VisuMZ[_0x277983(0x17d)][_0x277983(0x1e7)]['call'](this),BattleManager[_0x277983(0x1dd)]()&&this[_0x277983(0x129)]();},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x1cd)]=Game_Battler['prototype'][_0x56cca2(0x1ea)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x1ea)]=function(_0x22f073){const _0x4157e2=_0x56cca2;BattleManager[_0x4157e2(0x1dd)]()?this[_0x4157e2(0x1bf)](_0x22f073):VisuMZ[_0x4157e2(0x17d)]['Game_Battler_initTpbChargeTime'][_0x4157e2(0x1d4)](this,_0x22f073);},Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x1bf)]=function(_0x4c69d8){const _0x138b08=_0x56cca2,_0x53a32d=VisuMZ[_0x138b08(0x17d)][_0x138b08(0x286)]['Mechanics'];let _0x8b6f46=this[_0x138b08(0x127)]()*eval(_0x53a32d[_0x138b08(0xec)]);const _0x39d91d=this[_0x138b08(0x1f6)]()[_0x138b08(0x1b1)](this['skills']()),_0x5da736=/<(?:ATB|TPB) (?:BATTLE START|START) (?:GAUGE|TIME|SPEED): ([\+\-]\d+)([%％])>/i,_0x1ed2d7=_0x39d91d[_0x138b08(0x119)](_0x503afc=>_0x503afc&&_0x503afc[_0x138b08(0xe5)][_0x138b08(0x196)](_0x5da736)?Number(RegExp['$1'])*0.01:0x0);_0x8b6f46=_0x1ed2d7[_0x138b08(0xed)]((_0x3a3aa2,_0xad7898)=>_0x3a3aa2+_0xad7898,_0x8b6f46),this[_0x138b08(0x16c)]=_0x138b08(0x121),this['_tpbChargeTime']=(_0x4c69d8?0x1:_0x8b6f46)[_0x138b08(0x1d1)](0x0,0x1),this[_0x138b08(0x25d)]()&&(this[_0x138b08(0x29a)]=0x0);},Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x1bb)]=function(){const _0x4b4917=_0x56cca2;return this[_0x4b4917(0x16c)]==='charging';},Game_Battler['prototype'][_0x56cca2(0x202)]=function(){const _0x59c66e=_0x56cca2;return this[_0x59c66e(0x16c)]===_0x59c66e(0x16f)&&this[_0x59c66e(0x218)]()&&this[_0x59c66e(0x218)]()[_0x59c66e(0x1cf)]()&&this[_0x59c66e(0x218)]()['item']()[_0x59c66e(0x176)]<0x0;},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x114)]=function(){const _0x1b915b=_0x56cca2;return this[_0x1b915b(0x202)]()?this[_0x1b915b(0xc4)]/this['tpbRequiredCastTime']():0x0;},Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x12a)]=function(){const _0x1547ee=_0x56cca2;return!this[_0x1547ee(0x1c6)]();},Game_Battler['prototype'][_0x56cca2(0x150)]=function(_0x1e6365){this['_atbAfterSpeed']=_0x1e6365;},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x131)]=BattleManager[_0x56cca2(0x1a0)],BattleManager[_0x56cca2(0x1a0)]=function(_0x55e293){const _0x5460f9=_0x56cca2;this[_0x5460f9(0x1dd)]()&&!_0x55e293['canMove']()&&(_0x55e293[_0x5460f9(0x108)]=!![]),VisuMZ['BattleSystemATB'][_0x5460f9(0x131)]['call'](this,_0x55e293),_0x55e293[_0x5460f9(0xef)]()&&this[_0x5460f9(0x1dd)]()&&!_0x55e293[_0x5460f9(0x1c6)]()&&(_0x55e293[_0x5460f9(0x108)]=![]);},VisuMZ['BattleSystemATB']['Game_Battler_clearTpbChargeTime']=Game_Battler[_0x56cca2(0x271)]['clearTpbChargeTime'],Game_Battler[_0x56cca2(0x271)]['clearTpbChargeTime']=function(){const _0x573441=_0x56cca2;if(this[_0x573441(0x108)])return;VisuMZ['BattleSystemATB'][_0x573441(0x187)][_0x573441(0x1d4)](this),this['_tpbChargeTime']+=this[_0x573441(0x22b)]||0x0;},Game_Battler['prototype'][_0x56cca2(0x299)]=function(){const _0x2308f8=_0x56cca2;if(!this[_0x2308f8(0x202)]())return;if(!this[_0x2308f8(0x218)]())return;if(!this[_0x2308f8(0x218)]()[_0x2308f8(0x1cf)]())return;if(this[_0x2308f8(0x218)]()[_0x2308f8(0x1cf)]()[_0x2308f8(0xe5)][_0x2308f8(0x196)](/<(?:ATB|TPB) CANNOT (?:BE INTERRUPTED|INTERRUPT)>/i))return;this[_0x2308f8(0x27e)](),this[_0x2308f8(0x129)](),this[_0x2308f8(0xc4)]=0x0,this[_0x2308f8(0x29c)]();},Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x29c)]=function(){const _0x44791c=_0x56cca2,_0x1b715b=VisuMZ[_0x44791c(0x17d)]['Settings'][_0x44791c(0x145)];if(Imported[_0x44791c(0x19b)]){const _0x24608a=_0x1b715b['InterruptAnimationID'],_0x296964=_0x1b715b[_0x44791c(0x26b)],_0x45a8f2=_0x1b715b[_0x44791c(0x23a)];$gameTemp[_0x44791c(0x291)]([this],_0x24608a,_0x296964,_0x45a8f2);}if(this['battler']()&&_0x1b715b[_0x44791c(0x11c)][_0x44791c(0x107)]>0x0){const _0x11102=_0x1b715b[_0x44791c(0x11c)],_0x278718={'textColor':ColorManager['getColor'](_0x1b715b[_0x44791c(0x11f)]),'flashColor':_0x1b715b[_0x44791c(0x1b5)],'flashDuration':_0x1b715b[_0x44791c(0x10f)]};this[_0x44791c(0x1a1)](_0x11102,_0x278718);}},VisuMZ[_0x56cca2(0x17d)]['Game_Battler_startTpbCasting']=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x215)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x215)]=function(){const _0x4efcbb=_0x56cca2;VisuMZ['BattleSystemATB'][_0x4efcbb(0x185)][_0x4efcbb(0x1d4)](this),BattleManager['isATB']()&&(this[_0x4efcbb(0xc4)]>=this[_0x4efcbb(0x295)]()&&(this['_tpbState']=_0x4efcbb(0x288)));},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x24f)]=Game_Unit['prototype'][_0x56cca2(0x21b)],Game_Unit[_0x56cca2(0x271)][_0x56cca2(0x21b)]=function(){const _0x459474=_0x56cca2;if(BattleManager['isATB']()){if(BattleManager[_0x459474(0x1a6)]()[_0x459474(0x1d8)](_0x167c0a=>_0x167c0a&&_0x167c0a[_0x459474(0x100)]()&&_0x167c0a['isAppeared']()&&_0x167c0a[_0x459474(0x16c)]==='ready'))return;}VisuMZ[_0x459474(0x17d)][_0x459474(0x24f)][_0x459474(0x1d4)](this);},VisuMZ[_0x56cca2(0x17d)]['Game_Battler_onRestrict']=Game_Battler['prototype'][_0x56cca2(0x292)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x292)]=function(){const _0x47c48f=_0x56cca2,_0x89572b=VisuMZ[_0x47c48f(0x17d)][_0x47c48f(0x286)]['Mechanics'],_0x505394=this[_0x47c48f(0x289)]();!_0x89572b[_0x47c48f(0xd8)]&&_0x505394>=0x4&&(this[_0x47c48f(0x108)]=BattleManager[_0x47c48f(0x1dd)]()),VisuMZ['BattleSystemATB'][_0x47c48f(0x10d)]['call'](this),BattleManager[_0x47c48f(0x1dd)]()&&this[_0x47c48f(0x16c)]===_0x47c48f(0x282)&&this[_0x47c48f(0xef)]()&&(this[_0x47c48f(0x18b)]=!![]),this['_onRestrictBypassAtbReset']=undefined;},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x293)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x27e)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x27e)]=function(){const _0x5dc897=_0x56cca2;if(this['_onRestrictBypassAtbReset']&&BattleManager[_0x5dc897(0x1dd)]())return;VisuMZ[_0x5dc897(0x17d)][_0x5dc897(0x293)]['call'](this);},VisuMZ['BattleSystemATB'][_0x56cca2(0x1c2)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x1c4)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x1c4)]=function(_0x29d2dc){const _0x201f79=_0x56cca2,_0x33a86f=!this[_0x201f79(0x1c6)]()&&BattleManager['isATB'](),_0x25331a=this[_0x201f79(0x1d9)](_0x29d2dc);VisuMZ[_0x201f79(0x17d)][_0x201f79(0x1c2)][_0x201f79(0x1d4)](this,_0x29d2dc);if(!BattleManager['isATB']())return;if(this[_0x201f79(0xef)]()&&_0x25331a&&!this[_0x201f79(0x1d9)](_0x29d2dc))_0x33a86f&&this[_0x201f79(0x1c6)]()&&this['_needsAtbClear']&&(this[_0x201f79(0x129)](),this[_0x201f79(0x27e)](),this[_0x201f79(0xc4)]=0x0),this[_0x201f79(0x275)](_0x201f79(0x24c));else _0x33a86f&&this[_0x201f79(0x1c6)]()&&this['numActions']()<=0x0&&(this[_0x201f79(0x1b0)](),this[_0x201f79(0x16c)]=_0x201f79(0x121),this[_0x201f79(0x108)]=undefined);},Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x194)]=function(){const _0x2b1a2d=_0x56cca2;this[_0x2b1a2d(0x206)](_0x2b1a2d(0x252)),this[_0x2b1a2d(0x188)]=![],this[_0x2b1a2d(0xf2)]++,this[_0x2b1a2d(0x20d)]=0x0,this[_0x2b1a2d(0x1e9)]()&&this[_0x2b1a2d(0x228)](),this[_0x2b1a2d(0x206)](_0x2b1a2d(0x26e));},Game_Battler['prototype'][_0x56cca2(0x1e9)]=function(){const _0x44f082=_0x56cca2;if(this['numActions']()!==0x0)return![];if(BattleManager[_0x44f082(0x1dd)]()){if(this[_0x44f082(0xef)]()){if(!this[_0x44f082(0x19c)]())return![];}}return!![];},VisuMZ['BattleSystemATB'][_0x56cca2(0x246)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0xd3)],Game_Battler[_0x56cca2(0x271)]['applyTpbPenalty']=function(){const _0x1ce1c3=_0x56cca2;BattleManager[_0x1ce1c3(0x1dd)]()?this[_0x1ce1c3(0x230)]():VisuMZ[_0x1ce1c3(0x17d)][_0x1ce1c3(0x246)]['call'](this);},Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x230)]=function(){const _0x2ec40a=_0x56cca2;this[_0x2ec40a(0x16c)]=_0x2ec40a(0x121),this['_tpbChargeTime']+=VisuMZ[_0x2ec40a(0x17d)][_0x2ec40a(0x286)][_0x2ec40a(0x15d)][_0x2ec40a(0x10c)]||0x0;},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x26d)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x21e)],Game_Battler['prototype'][_0x56cca2(0x21e)]=function(){const _0x82c13e=_0x56cca2;return BattleManager[_0x82c13e(0x1dd)]()?VisuMZ[_0x82c13e(0x17d)]['Settings'][_0x82c13e(0x15d)]['TpbSpeedCalcJS']['call'](this,this):VisuMZ[_0x82c13e(0x17d)][_0x82c13e(0x26d)][_0x82c13e(0x1d4)](this);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x280)]=Game_Battler['prototype'][_0x56cca2(0x22d)],Game_Battler['prototype'][_0x56cca2(0x22d)]=function(){const _0x294558=_0x56cca2;return BattleManager[_0x294558(0x1dd)]()?VisuMZ[_0x294558(0x17d)][_0x294558(0x286)][_0x294558(0x15d)][_0x294558(0x189)][_0x294558(0x1d4)](this,this):VisuMZ[_0x294558(0x17d)][_0x294558(0x280)][_0x294558(0x1d4)](this);},VisuMZ['BattleSystemATB'][_0x56cca2(0x193)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x127)],Game_Battler['prototype'][_0x56cca2(0x127)]=function(){const _0x121db1=_0x56cca2;return BattleManager['isATB']()?VisuMZ[_0x121db1(0x17d)][_0x121db1(0x286)]['Mechanics'][_0x121db1(0x26a)]['call'](this,this):VisuMZ['BattleSystemATB'][_0x121db1(0x193)][_0x121db1(0x1d4)](this);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x28a)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x238)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x238)]=function(){const _0x4a894f=_0x56cca2;return BattleManager[_0x4a894f(0x1dd)]()?this['atbAcceleration']():VisuMZ[_0x4a894f(0x17d)][_0x4a894f(0x28a)][_0x4a894f(0x1d4)](this);},Game_Battler[_0x56cca2(0x271)]['atbAcceleration']=function(){const _0x37bb23=_0x56cca2;let _0x458b92=VisuMZ[_0x37bb23(0x17d)]['Settings'][_0x37bb23(0x15d)][_0x37bb23(0x1eb)][_0x37bb23(0x1d4)](this,this);if(ConfigManager&&ConfigManager['atbSpeed']!==undefined){const _0x2cbed9=ConfigManager[_0x37bb23(0x1b8)]-0x3;if(_0x2cbed9>0x0)return _0x458b92*(_0x2cbed9*0x2);else{if(_0x2cbed9<0x0)return _0x458b92*(0x1/(_0x2cbed9*-0x2));}}return _0x458b92;},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x1c7)]=Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x295)],Game_Battler[_0x56cca2(0x271)][_0x56cca2(0x295)]=function(){const _0x3ec5d9=_0x56cca2;if(BattleManager[_0x3ec5d9(0x1dd)]()){const _0x212993=this[_0x3ec5d9(0xdb)][_0x3ec5d9(0x119)](_0x50bde9=>_0x50bde9[_0x3ec5d9(0x1cf)]());for(const _0x187cda of _0x212993){if(!_0x187cda)continue;_0x187cda[_0x3ec5d9(0x281)]=_0x187cda[_0x3ec5d9(0x281)]??_0x187cda['speed'];}let _0x4e05a6=VisuMZ[_0x3ec5d9(0x17d)]['Settings'][_0x3ec5d9(0x15d)][_0x3ec5d9(0x1be)][_0x3ec5d9(0x1d4)](this,this);for(const _0x8ac2f of _0x212993){if(!_0x8ac2f)continue;_0x8ac2f['speed']=_0x8ac2f[_0x3ec5d9(0x281)];}return _0x4e05a6;}else return VisuMZ[_0x3ec5d9(0x17d)][_0x3ec5d9(0x1c7)][_0x3ec5d9(0x1d4)](this);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0xf4)]=Scene_Options[_0x56cca2(0x271)]['maxCommands'],Scene_Options[_0x56cca2(0x271)]['maxCommands']=function(){const _0x477b39=_0x56cca2;let _0x460b44=VisuMZ[_0x477b39(0x17d)][_0x477b39(0xf4)]['call'](this);const _0x562f2e=VisuMZ[_0x477b39(0x17d)][_0x477b39(0x286)];if(_0x562f2e[_0x477b39(0x18f)][_0x477b39(0xf5)]&&_0x562f2e[_0x477b39(0x18f)][_0x477b39(0x287)]&&BattleManager[_0x477b39(0x1dd)]())_0x460b44++;return _0x460b44;},Sprite_Battler[_0x56cca2(0x271)][_0x56cca2(0xd4)]=function(){const _0x1fdd41=_0x56cca2;if(!BattleManager[_0x1fdd41(0x1dd)]())return;if(!ConfigManager[_0x1fdd41(0x181)])return;const _0x561993=VisuMZ[_0x1fdd41(0x17d)][_0x1fdd41(0x286)][_0x1fdd41(0x205)],_0x3a1c6a=new Sprite_Gauge();_0x3a1c6a[_0x1fdd41(0x11e)]['x']=_0x561993[_0x1fdd41(0x247)],_0x3a1c6a[_0x1fdd41(0x11e)]['y']=_0x561993[_0x1fdd41(0x152)],_0x3a1c6a[_0x1fdd41(0x26f)]['x']=_0x3a1c6a[_0x1fdd41(0x26f)]['y']=_0x561993[_0x1fdd41(0xda)],this[_0x1fdd41(0x172)]=_0x3a1c6a,this[_0x1fdd41(0x216)](this[_0x1fdd41(0x172)]);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0xd9)]=Sprite_Battler['prototype'][_0x56cca2(0x136)],Sprite_Battler[_0x56cca2(0x271)][_0x56cca2(0x136)]=function(_0x49966e){const _0x23470b=_0x56cca2;VisuMZ[_0x23470b(0x17d)][_0x23470b(0xd9)][_0x23470b(0x1d4)](this,_0x49966e),this['setupAtbGaugeSprite'](_0x49966e),this[_0x23470b(0x1f5)]();},Sprite_Battler[_0x56cca2(0x271)][_0x56cca2(0x173)]=function(_0x5a6ca7){const _0x439ad4=_0x56cca2;if(!_0x5a6ca7)return;if(!this[_0x439ad4(0x172)])return;if(_0x5a6ca7[_0x439ad4(0x1ab)]()){}else{if(_0x5a6ca7[_0x439ad4(0xef)]()){if(this[_0x439ad4(0x198)]===Sprite_Enemy&&_0x5a6ca7[_0x439ad4(0x27d)]())return;if(this['constructor']===Sprite_SvEnemy&&!_0x5a6ca7[_0x439ad4(0x27d)]())return;}}this[_0x439ad4(0x172)]['setup'](_0x5a6ca7,_0x439ad4(0x1f9));},Sprite_Battler['prototype'][_0x56cca2(0x1f5)]=function(){const _0x10a5e2=_0x56cca2;if(!this[_0x10a5e2(0x172)])return;const _0x3af344=this['_battler']&&this[_0x10a5e2(0x208)][_0x10a5e2(0x171)]()&&!this['_battler'][_0x10a5e2(0x262)]();this[_0x10a5e2(0x172)][_0x10a5e2(0x1bd)]=_0x3af344,this['_svBattlerSprite']&&this[_0x10a5e2(0x1b6)][_0x10a5e2(0x172)]&&(this[_0x10a5e2(0x1b6)][_0x10a5e2(0x172)][_0x10a5e2(0x1bd)]=_0x3af344);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x211)]=Sprite_Battler['prototype']['updateMain'],Sprite_Battler['prototype'][_0x56cca2(0xcf)]=function(){const _0x4445d2=_0x56cca2;VisuMZ[_0x4445d2(0x17d)][_0x4445d2(0x211)][_0x4445d2(0x1d4)](this),this[_0x4445d2(0x115)]();},Sprite_Battler[_0x56cca2(0x271)][_0x56cca2(0x115)]=function(){const _0x38744c=_0x56cca2;if(!this[_0x38744c(0x208)])return;if(!this['_atbGaugeSprite'])return;if(this[_0x38744c(0x208)]&&this[_0x38744c(0x208)][_0x38744c(0xef)]()&&this[_0x38744c(0x208)]['hasSvBattler']()){if(this[_0x38744c(0x198)]===Sprite_Enemy)return;}const _0x541150=VisuMZ[_0x38744c(0x17d)]['Settings'][_0x38744c(0x205)],_0xf4c00d=this['_atbGaugeSprite'];let _0x4f94ef=_0x541150[_0x38744c(0xeb)];this[_0x38744c(0x208)][_0x38744c(0x13d)]&&(_0x4f94ef+=this[_0x38744c(0x208)][_0x38744c(0x13d)]());let _0x2e2770=_0x541150[_0x38744c(0x1a5)];this[_0x38744c(0x208)][_0x38744c(0x219)]&&(_0x2e2770+=this[_0x38744c(0x208)][_0x38744c(0x219)]());_0xf4c00d['x']=_0x4f94ef;let _0x1742cc=this['height'];this[_0x38744c(0x208)]&&this['_battler'][_0x38744c(0xef)]()&&this[_0x38744c(0x208)]['hasSvBattler']()&&(_0x1742cc=this[_0x38744c(0x208)]['svBattlerData']()['height']||0x1),_0xf4c00d['y']=-_0x1742cc+_0x2e2770,this[_0x38744c(0x208)][_0x38744c(0xef)]()&&(this[_0x38744c(0x208)][_0x38744c(0x27a)]()[_0x38744c(0xe5)][_0x38744c(0x196)](/<HIDE (?:ATB|TPB) GAUGE>/i)&&(_0xf4c00d[_0x38744c(0x1bd)]=![])),this[_0x38744c(0x1e6)]()&&(_0xf4c00d['y']+=_0xf4c00d[_0x38744c(0x143)]()*_0x541150['Scale']-0x1),this[_0x38744c(0x26f)]['x']<0x0&&(_0xf4c00d['scale']['x']=-Math['abs'](_0xf4c00d['scale']['x']));},Sprite_Battler['prototype'][_0x56cca2(0x1e6)]=function(){const _0x2f039a=_0x56cca2;if(!Imported[_0x2f039a(0x154)])return![];if(this[_0x2f039a(0x208)]&&this[_0x2f039a(0x208)][_0x2f039a(0xef)]())return![];const _0x15edbc=VisuMZ[_0x2f039a(0x135)][_0x2f039a(0x286)][_0x2f039a(0x201)];if(!_0x15edbc[_0x2f039a(0xd6)])return![];if(!ConfigManager[_0x2f039a(0x139)])return![];const _0x29ad4c=VisuMZ[_0x2f039a(0x17d)][_0x2f039a(0x286)][_0x2f039a(0x205)];return _0x15edbc[_0x2f039a(0xda)]===_0x29ad4c[_0x2f039a(0xda)]&&_0x15edbc['AnchorX']===_0x29ad4c['AnchorX']&&_0x15edbc['AnchorY']===_0x29ad4c[_0x2f039a(0x152)]&&_0x15edbc[_0x2f039a(0xeb)]===_0x29ad4c[_0x2f039a(0xeb)]&&_0x15edbc['OffsetY']===_0x29ad4c[_0x2f039a(0x1a5)]&&!![];},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0xde)]=Sprite_Battler['prototype']['update'],Sprite_Battler[_0x56cca2(0x271)][_0x56cca2(0x151)]=function(){const _0x1c858b=_0x56cca2;VisuMZ['BattleSystemATB']['Sprite_Battler_update'][_0x1c858b(0x1d4)](this),!this[_0x1c858b(0x208)]&&this[_0x1c858b(0x172)]&&(this[_0x1c858b(0x172)]['visible']=![],this['_svBattlerSprite']&&(this[_0x1c858b(0x1b6)][_0x1c858b(0x172)]['visible']=![]));},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x126)]=Sprite_Actor[_0x56cca2(0x271)][_0x56cca2(0x17e)],Sprite_Actor[_0x56cca2(0x271)]['createStateSprite']=function(){const _0x759dcf=_0x56cca2;VisuMZ[_0x759dcf(0x17d)][_0x759dcf(0x126)][_0x759dcf(0x1d4)](this),this['isShowAtbGauge']()&&this[_0x759dcf(0xd4)]();},Sprite_Actor[_0x56cca2(0x271)][_0x56cca2(0xd5)]=function(){const _0x594207=_0x56cca2;return VisuMZ[_0x594207(0x17d)]['Settings'][_0x594207(0x205)]['ShowActorGauge'];},Sprite_SvEnemy['prototype']['isShowAtbGauge']=function(){const _0x4fa7ef=_0x56cca2;return VisuMZ[_0x4fa7ef(0x17d)][_0x4fa7ef(0x286)][_0x4fa7ef(0x205)]['ShowEnemyGauge'];},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x1f7)]=Sprite_Enemy[_0x56cca2(0x271)][_0x56cca2(0x178)],Sprite_Enemy['prototype'][_0x56cca2(0x178)]=function(){const _0xb69e76=_0x56cca2;VisuMZ[_0xb69e76(0x17d)][_0xb69e76(0x286)][_0xb69e76(0x205)]['ShowEnemyGauge']&&this['createAtbGaugeSprite'](),VisuMZ['BattleSystemATB'][_0xb69e76(0x1f7)]['call'](this);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x22f)]=Sprite_Enemy[_0x56cca2(0x271)][_0x56cca2(0xdd)],Sprite_Enemy[_0x56cca2(0x271)]['startEffect']=function(_0x1483f4){const _0x5bd13f=_0x56cca2;VisuMZ[_0x5bd13f(0x17d)][_0x5bd13f(0x22f)][_0x5bd13f(0x1d4)](this,_0x1483f4),(_0x1483f4==='appear'||_0x5bd13f(0x170))&&this[_0x5bd13f(0x1f5)]();},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x25e)]=Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x163)],Game_BattlerBase['prototype']['appear']=function(){const _0x10b534=_0x56cca2;VisuMZ['BattleSystemATB'][_0x10b534(0x25e)]['call'](this),this[_0x10b534(0xef)]()&&BattleManager[_0x10b534(0x1dd)]()&&this[_0x10b534(0xf8)]()&&this[_0x10b534(0xf8)]()['updateAtbGaugeSpriteVisibility']();},VisuMZ[_0x56cca2(0x17d)]['Sprite_Gauge_gaugeColor1']=Sprite_Gauge[_0x56cca2(0x271)][_0x56cca2(0x29f)],Sprite_Gauge['prototype'][_0x56cca2(0x29f)]=function(){const _0xcd5df1=_0x56cca2;if(this['_statusType']==='time')return this['atbGaugeColor'](0x1);return VisuMZ['BattleSystemATB'][_0xcd5df1(0x273)]['call'](this);},VisuMZ[_0x56cca2(0x17d)]['Sprite_Gauge_gaugeColor2']=Sprite_Gauge[_0x56cca2(0x271)][_0x56cca2(0x20a)],Sprite_Gauge[_0x56cca2(0x271)]['gaugeColor2']=function(){const _0x554aab=_0x56cca2;if(this[_0x554aab(0x1a9)]==='time')return this[_0x554aab(0x161)](0x2);return VisuMZ[_0x554aab(0x17d)]['Sprite_Gauge_gaugeColor2'][_0x554aab(0x1d4)](this);},Sprite_Gauge[_0x56cca2(0x271)]['atbGaugeColor']=function(_0x481cb4){const _0x51bae3=_0x56cca2;if(!this[_0x51bae3(0x208)])return ColorManager['atbColor'](_0x51bae3(0x2a0)[_0x51bae3(0x11d)](_0x481cb4));if(this[_0x51bae3(0x208)][_0x51bae3(0x12a)]())return ColorManager[_0x51bae3(0xe4)](_0x51bae3(0x1df)['format'](_0x481cb4));if(this[_0x51bae3(0x208)]['isAtbCastingState']())return ColorManager['atbColor']('cast%1'[_0x51bae3(0x11d)](_0x481cb4));if(this[_0x51bae3(0x168)]()>=0x1)return ColorManager[_0x51bae3(0xe4)](_0x51bae3(0x221)['format'](_0x481cb4));const _0x5f3465=VisuMZ[_0x51bae3(0x17d)][_0x51bae3(0x286)][_0x51bae3(0x205)],_0x376bf1=this[_0x51bae3(0x208)][_0x51bae3(0xe0)](0x6)*this['_battler'][_0x51bae3(0x106)](0x6);if(_0x376bf1<=_0x5f3465[_0x51bae3(0x265)])return ColorManager[_0x51bae3(0xe4)]('slow%1'['format'](_0x481cb4));if(_0x376bf1>=_0x5f3465[_0x51bae3(0xcc)])return ColorManager[_0x51bae3(0xe4)](_0x51bae3(0x144)[_0x51bae3(0x11d)](_0x481cb4));return ColorManager[_0x51bae3(0xe4)]('default%1'['format'](_0x481cb4));},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x1fc)]=Sprite_Gauge[_0x56cca2(0x271)]['currentValue'],Sprite_Gauge['prototype'][_0x56cca2(0x138)]=function(){const _0xffaa3=_0x56cca2;if(this[_0xffaa3(0x208)]&&this[_0xffaa3(0x1a9)]==='time')return this[_0xffaa3(0x17a)]();return VisuMZ[_0xffaa3(0x17d)]['Sprite_Gauge_currentValue'][_0xffaa3(0x1d4)](this);},Sprite_Gauge[_0x56cca2(0x271)][_0x56cca2(0x17a)]=function(){const _0x56ab7d=_0x56cca2;return this[_0x56ab7d(0x208)][_0x56ab7d(0x202)]()?Math[_0x56ab7d(0x191)](this[_0x56ab7d(0x208)][_0x56ab7d(0xc4)],0x0):VisuMZ[_0x56ab7d(0x17d)]['Sprite_Gauge_currentValue'][_0x56ab7d(0x1d4)](this);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x22a)]=Sprite_Gauge['prototype']['currentMaxValue'],Sprite_Gauge[_0x56cca2(0x271)][_0x56cca2(0x263)]=function(){const _0x53179e=_0x56cca2;if(this['_battler']&&this[_0x53179e(0x1a9)]===_0x53179e(0x1f9))return this['atbCurrentMaxValue']();return VisuMZ['BattleSystemATB'][_0x53179e(0x22a)][_0x53179e(0x1d4)](this);},Sprite_Gauge['prototype'][_0x56cca2(0x1c8)]=function(){const _0x114775=_0x56cca2;return this[_0x114775(0x208)]['isAtbCastingState']()?Math[_0x114775(0x191)](this[_0x114775(0x208)]['tpbRequiredCastTime'](),1e-9):VisuMZ[_0x114775(0x17d)][_0x114775(0x22a)][_0x114775(0x1d4)](this);},VisuMZ['BattleSystemATB'][_0x56cca2(0x128)]=Window_Help[_0x56cca2(0x271)][_0x56cca2(0x1ff)],Window_Help[_0x56cca2(0x271)][_0x56cca2(0x1ff)]=function(_0x15ee6e){const _0x126cba=_0x56cca2;BattleManager[_0x126cba(0x1dd)]()&&_0x15ee6e&&_0x15ee6e['note']&&_0x15ee6e[_0x126cba(0xe5)][_0x126cba(0x196)](/<(?:ATB|TPB) HELP>\s*([\s\S]*)\s*<\/(?:ATB|TPB) HELP>/i)?this[_0x126cba(0x109)](String(RegExp['$1'])):VisuMZ['BattleSystemATB'][_0x126cba(0x128)][_0x126cba(0x1d4)](this,_0x15ee6e);},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x20b)]=Window_StatusBase[_0x56cca2(0x271)][_0x56cca2(0xf9)],Window_StatusBase[_0x56cca2(0x271)]['placeGauge']=function(_0x417a66,_0x418502,_0x4d2656,_0xa18a61){const _0x2d570a=_0x56cca2;if(!this[_0x2d570a(0x18e)](_0x418502))return;VisuMZ['BattleSystemATB'][_0x2d570a(0x20b)]['call'](this,_0x417a66,_0x418502,_0x4d2656,_0xa18a61);},Window_StatusBase[_0x56cca2(0x271)]['showVisualAtbGauge']=function(_0x13da68){const _0x5f493b=_0x56cca2;if(_0x13da68!==_0x5f493b(0x1f9))return!![];if(![_0x5f493b(0x12d),_0x5f493b(0xee)][_0x5f493b(0x153)](this[_0x5f493b(0x198)][_0x5f493b(0xe1)]))return![];if(!BattleManager[_0x5f493b(0x1dd)]())return![];if(!ConfigManager['visualAtbGauge'])return![];return VisuMZ['BattleSystemATB'][_0x5f493b(0x286)][_0x5f493b(0x205)][_0x5f493b(0x19f)];},VisuMZ[_0x56cca2(0x17d)][_0x56cca2(0x14f)]=Window_Options[_0x56cca2(0x271)]['addGeneralOptions'],Window_Options[_0x56cca2(0x271)][_0x56cca2(0x102)]=function(){const _0x1e6992=_0x56cca2;VisuMZ[_0x1e6992(0x17d)][_0x1e6992(0x14f)]['call'](this),this['addBattleSystemATBCommands']();},Window_Options[_0x56cca2(0x271)][_0x56cca2(0x260)]=function(){const _0x467a23=_0x56cca2;if(!BattleManager[_0x467a23(0x1dd)]())return;VisuMZ['BattleSystemATB'][_0x467a23(0x286)]['Options']['AddOption']&&this[_0x467a23(0x15f)]();},Window_Options[_0x56cca2(0x271)]['addBattleSystemATBShowGaugeCommand']=function(){const _0x1805bb=_0x56cca2,_0x5e1468=TextManager[_0x1805bb(0x181)],_0x57d3ed=_0x1805bb(0x181);this[_0x1805bb(0x232)](_0x5e1468,_0x57d3ed);},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x12c)]=function(){const _0x5329d6=_0x56cca2;delete this['_fieldAtbGaugeGraphicType'],delete this[_0x5329d6(0x118)],delete this[_0x5329d6(0x267)],delete this[_0x5329d6(0x296)];},Game_BattlerBase['prototype'][_0x56cca2(0x23b)]=function(){const _0x595421=_0x56cca2;return this['_fieldAtbGaugeGraphicType']===undefined&&(this['_fieldAtbGaugeGraphicType']=this[_0x595421(0x18c)]()),this[_0x595421(0x284)];},Game_BattlerBase['prototype'][_0x56cca2(0x18c)]=function(){const _0xde64e5=_0x56cca2;return Sprite_FieldGaugeATB['Settings'][_0xde64e5(0xff)];},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x257)]=function(){const _0x1f1b90=_0x56cca2;return this[_0x1f1b90(0x118)]===undefined&&(this[_0x1f1b90(0x118)]=this[_0x1f1b90(0x1af)]()),this['_fieldAtbGaugeFaceName'];},Game_BattlerBase['prototype'][_0x56cca2(0x1af)]=function(){return Sprite_FieldGaugeATB['Settings']['EnemyBattlerFaceName'];},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x23c)]=function(){const _0x3c69ce=_0x56cca2;return this['_fieldAtbGaugeFaceIndex']===undefined&&(this['_fieldAtbGaugeFaceIndex']=this[_0x3c69ce(0x1ee)]()),this[_0x3c69ce(0x267)];},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x1ee)]=function(){const _0x469b2d=_0x56cca2;return Sprite_FieldGaugeATB['Settings'][_0x469b2d(0x1fa)];},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x255)]=function(){const _0x27788c=_0x56cca2;return this[_0x27788c(0x296)]===undefined&&(this[_0x27788c(0x296)]=this['createFieldAtbGraphicIconIndex']()),this[_0x27788c(0x296)];},Game_BattlerBase[_0x56cca2(0x271)]['createFieldAtbGraphicIconIndex']=function(){const _0x3c98a7=_0x56cca2;return Sprite_FieldGaugeATB[_0x3c98a7(0x286)][_0x3c98a7(0x1d6)];},Game_BattlerBase[_0x56cca2(0x271)][_0x56cca2(0x1c3)]=function(_0x4d3614){const _0x314236=_0x56cca2;this[_0x314236(0x296)]=_0x4d3614;},Game_Actor['prototype'][_0x56cca2(0x18c)]=function(){const _0x4d7778=_0x56cca2,_0x25b9ad=this[_0x4d7778(0x1aa)]()[_0x4d7778(0xe5)];if(_0x25b9ad[_0x4d7778(0x196)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return'face';else{if(_0x25b9ad[_0x4d7778(0x196)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return _0x4d7778(0x27f);}return Sprite_FieldGaugeATB[_0x4d7778(0x286)][_0x4d7778(0x225)];},Game_Actor[_0x56cca2(0x271)][_0x56cca2(0x1af)]=function(){const _0x5b4dec=_0x56cca2,_0x4ebd87=this[_0x5b4dec(0x1aa)]()['note'];if(_0x4ebd87[_0x5b4dec(0x196)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return this['faceName']();},Game_Actor[_0x56cca2(0x271)]['createFieldAtbGraphicFaceIndex']=function(){const _0x51858c=_0x56cca2,_0x191c8a=this[_0x51858c(0x1aa)]()[_0x51858c(0xe5)];if(_0x191c8a[_0x51858c(0x196)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return this[_0x51858c(0x15b)]();},Game_Actor[_0x56cca2(0x271)][_0x56cca2(0x243)]=function(){const _0x56f0a0=_0x56cca2,_0x34d3f3=this['actor']()[_0x56f0a0(0xe5)];if(_0x34d3f3[_0x56f0a0(0x196)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB[_0x56f0a0(0x286)]['ActorBattlerIcon'];},Game_Enemy[_0x56cca2(0x271)][_0x56cca2(0x18c)]=function(){const _0x5872a2=_0x56cca2,_0x3c883c=this[_0x5872a2(0x27a)]()[_0x5872a2(0xe5)];if(_0x3c883c[_0x5872a2(0x196)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return _0x5872a2(0x1f8);else{if(_0x3c883c[_0x5872a2(0x196)](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return'icon';}return Sprite_FieldGaugeATB['Settings'][_0x5872a2(0xff)];},Game_Enemy[_0x56cca2(0x271)]['createFieldAtbGraphicFaceName']=function(){const _0x36021b=_0x56cca2,_0x5300fb=this[_0x36021b(0x27a)]()['note'];if(_0x5300fb[_0x36021b(0x196)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return String(RegExp['$1']);return Sprite_FieldGaugeATB[_0x36021b(0x286)]['EnemyBattlerFaceName'];},Game_Enemy[_0x56cca2(0x271)][_0x56cca2(0x1ee)]=function(){const _0x421b9d=_0x56cca2,_0xec4297=this['enemy']()[_0x421b9d(0xe5)];if(_0xec4297[_0x421b9d(0x196)](/<ATB FIELD GAUGE FACE:[ ](.*),[ ](\d+)>/i))return Number(RegExp['$2']);return Sprite_FieldGaugeATB[_0x421b9d(0x286)][_0x421b9d(0x1fa)];},Game_Enemy[_0x56cca2(0x271)][_0x56cca2(0x243)]=function(){const _0x2ad233=_0x56cca2,_0x4dacdb=this[_0x2ad233(0x27a)]()['note'];if(_0x4dacdb['match'](/<ATB FIELD GAUGE ICON:[ ](\d+)>/i))return Number(RegExp['$1']);return Sprite_FieldGaugeATB['Settings'][_0x2ad233(0x1d6)];},VisuMZ['BattleSystemATB']['Scene_Battle_createAllWindows']=Scene_Battle['prototype']['createAllWindows'],Scene_Battle[_0x56cca2(0x271)][_0x56cca2(0x16a)]=function(){const _0x39edd9=_0x56cca2;this[_0x39edd9(0x1cb)](),VisuMZ[_0x39edd9(0x17d)][_0x39edd9(0xfa)][_0x39edd9(0x1d4)](this),this[_0x39edd9(0x200)]();},Scene_Battle['prototype'][_0x56cca2(0x1cb)]=function(){const _0x5861f9=_0x56cca2;if(!BattleManager['isATB']())return;if(!Sprite_FieldGaugeATB[_0x5861f9(0x286)][_0x5861f9(0x186)])return;if(!ConfigManager['visualAtbGauge'])return;this[_0x5861f9(0x20f)]=new Window_Base(new Rectangle(0x0,0x0,0x0,0x0));const _0x182cef=this[_0x5861f9(0x1fd)](this[_0x5861f9(0x11a)]);this['addChildAt'](this[_0x5861f9(0x20f)],_0x182cef);},Scene_Battle[_0x56cca2(0x271)]['createFieldGaugeSpriteATB']=function(){const _0x2366c5=_0x56cca2;if(!BattleManager[_0x2366c5(0x1dd)]())return;if(!Sprite_FieldGaugeATB[_0x2366c5(0x286)]['UseFieldGauge'])return;if(!ConfigManager[_0x2366c5(0x181)])return;this[_0x2366c5(0x1f4)]=new Sprite_FieldGaugeATB(),this[_0x2366c5(0x20f)][_0x2366c5(0x216)](this['_fieldGaugeATB']);};function Sprite_FieldGaugeATB(){const _0x39b7a9=_0x56cca2;this[_0x39b7a9(0x14a)](...arguments);}Sprite_FieldGaugeATB[_0x56cca2(0x271)]=Object[_0x56cca2(0x195)](Sprite[_0x56cca2(0x271)]),Sprite_FieldGaugeATB[_0x56cca2(0x271)]['constructor']=Sprite_FieldGaugeATB,Sprite_FieldGaugeATB[_0x56cca2(0x286)]=JsonEx[_0x56cca2(0x240)](VisuMZ['BattleSystemATB'][_0x56cca2(0x286)]['FieldGauge']),Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0x14a)]=function(){const _0x4d9b25=_0x56cca2;Sprite[_0x4d9b25(0x271)]['initialize'][_0x4d9b25(0x1d4)](this),this[_0x4d9b25(0xc2)](),this['setHomeLocation'](),this['createChildren']();},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0xc2)]=function(){const _0xd430c5=_0x56cca2;this['anchor']['x']=0.5,this[_0xd430c5(0x11e)]['y']=0.5;},Sprite_FieldGaugeATB[_0x56cca2(0x271)]['isGaugeHorizontal']=function(){const _0x6db585=_0x56cca2;if(this[_0x6db585(0x1f2)]!==undefined)return this['_horz'];const _0x31ae07=Sprite_FieldGaugeATB[_0x6db585(0x286)][_0x6db585(0xf0)];return this[_0x6db585(0x1f2)]=[_0x6db585(0xe9),_0x6db585(0x156)][_0x6db585(0x153)](_0x31ae07),this[_0x6db585(0x1f2)];},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0x12f)]=function(){const _0x5d49d6=_0x56cca2,_0x4ca8fe=Sprite_FieldGaugeATB['Settings'][_0x5d49d6(0xf0)]['toLowerCase']()[_0x5d49d6(0x1e0)](),_0x4a22c6=Window_Base[_0x5d49d6(0x271)][_0x5d49d6(0x1ef)](),_0x1faec4=SceneManager['_scene'][_0x5d49d6(0xea)][_0x5d49d6(0x165)]+Math[_0x5d49d6(0x1de)](_0x4a22c6*0.5);this['_homeX']=0x0,this[_0x5d49d6(0x148)]=0x0;switch(_0x4ca8fe){case _0x5d49d6(0xe9):this[_0x5d49d6(0x15c)]=Math[_0x5d49d6(0x1de)](Graphics['boxWidth']*0.5),this[_0x5d49d6(0x148)]=0x60;break;case _0x5d49d6(0x156):this[_0x5d49d6(0x15c)]=Math[_0x5d49d6(0x1de)](Graphics['boxWidth']*0.5),this[_0x5d49d6(0x148)]=Graphics[_0x5d49d6(0x142)]-_0x1faec4;break;case _0x5d49d6(0x231):this[_0x5d49d6(0x15c)]=0x50,this[_0x5d49d6(0x148)]=Math[_0x5d49d6(0x1de)]((Graphics[_0x5d49d6(0x142)]-_0x1faec4)/0x2);break;case'right':this[_0x5d49d6(0x15c)]=Graphics['boxWidth']-0x50,this[_0x5d49d6(0x148)]=Math['round']((Graphics[_0x5d49d6(0x142)]-_0x1faec4)/0x2);break;}this[_0x5d49d6(0x15c)]+=Sprite_FieldGaugeATB[_0x5d49d6(0x286)]['DisplayOffsetX']||0x0,this[_0x5d49d6(0x148)]+=Sprite_FieldGaugeATB[_0x5d49d6(0x286)][_0x5d49d6(0xf3)]||0x0,this['x']=this[_0x5d49d6(0x15c)],this['y']=this[_0x5d49d6(0x148)];},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0xcb)]=function(){const _0x11030e=_0x56cca2;this['createFieldGaugeSkin'](),this[_0x11030e(0x239)](),this[_0x11030e(0x259)]();},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0x24e)]=function(){const _0x305532=_0x56cca2;this[_0x305532(0x192)]=new Sprite(),this['_skinSprite'][_0x305532(0x11e)]['x']=0.5,this['_skinSprite'][_0x305532(0x11e)]['y']=0.5,this['addChild'](this[_0x305532(0x192)]);const _0x327e60=Sprite_FieldGaugeATB[_0x305532(0x286)]['GaugeSystemSkin'];if(_0x327e60)this[_0x305532(0x192)]['bitmap']=ImageManager[_0x305532(0x162)](_0x327e60);},Sprite_FieldGaugeATB['prototype'][_0x56cca2(0x239)]=function(){const _0x34f093=_0x56cca2;this[_0x34f093(0x1d2)]=new Sprite(),this[_0x34f093(0x216)](this[_0x34f093(0x1d2)]),this['createGaugeBitmap']();},Sprite_FieldGaugeATB[_0x56cca2(0x271)]['createGaugeBitmap']=function(){const _0x1ce7cf=_0x56cca2,_0x2b0434=Sprite_FieldGaugeATB[_0x1ce7cf(0x286)],_0x1eb59b=this['isGaugeHorizontal'](),_0x2b3e6a=_0x1eb59b?_0x2b0434[_0x1ce7cf(0x10b)]:_0x2b0434[_0x1ce7cf(0x122)],_0x550d3f=_0x1eb59b?_0x2b0434[_0x1ce7cf(0x122)]:_0x2b0434[_0x1ce7cf(0x28b)];this[_0x1ce7cf(0x1d2)][_0x1ce7cf(0x177)]=new Bitmap(_0x2b3e6a,_0x550d3f),this['drawGaugeBitmap'](),this[_0x1ce7cf(0x1d2)]['x']=Math[_0x1ce7cf(0x134)](_0x2b3e6a/-0x2),this[_0x1ce7cf(0x1d2)]['y']=Math['ceil'](_0x550d3f/-0x2);},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0x1fe)]=function(){const _0x40c746=_0x56cca2;if(!Sprite_FieldGaugeATB['Settings'][_0x40c746(0x1c0)])return;const _0x2e1c02=Sprite_FieldGaugeATB[_0x40c746(0x286)],_0x35ec63=this[_0x40c746(0x1d2)][_0x40c746(0x177)],_0x4aff82=_0x35ec63[_0x40c746(0x1ec)],_0x368c4b=_0x35ec63['height'],_0x4f95a0=ColorManager['gaugeBackColor'](),_0x245155=ColorManager[_0x40c746(0x13f)](),_0x36513f=ColorManager['ctGaugeColor2'](),_0x22f817=ColorManager[_0x40c746(0xe4)](_0x40c746(0x112)),_0x45a848=ColorManager['atbColor'](_0x40c746(0x261)),_0x39bad7=this[_0x40c746(0x217)](),_0x2a07ca=_0x2e1c02['GaugeDirection'],_0x21045f=_0x2e1c02['GaugeSplit']['clamp'](0x0,0x1),_0x43ccda=Math[_0x40c746(0x134)](((_0x39bad7?_0x4aff82:_0x368c4b)-0x2)*_0x21045f);_0x35ec63[_0x40c746(0x1ac)](0x0,0x0,_0x4aff82,_0x368c4b,_0x4f95a0);let _0x2b3478=0x0,_0x2828e2=0x0,_0x72f75e=0x0,_0x808e03=0x0;if(_0x39bad7&&_0x2a07ca)_0x2b3478=_0x43ccda-0x1,_0x72f75e=_0x4aff82-0x3-_0x2b3478,_0x35ec63[_0x40c746(0x1a2)](0x1,0x1,_0x2b3478,_0x368c4b-0x2,_0x245155,_0x36513f,![]),_0x35ec63['gradientFillRect'](0x2+_0x2b3478,0x1,_0x72f75e,_0x368c4b-0x2,_0x22f817,_0x45a848,![]);else{if(_0x39bad7&&!_0x2a07ca)_0x2b3478=_0x43ccda-0x1,_0x72f75e=_0x4aff82-0x3-_0x2b3478,_0x35ec63[_0x40c746(0x1a2)](0x2+_0x72f75e,0x1,_0x2b3478,_0x368c4b-0x2,_0x245155,_0x36513f,![]),_0x35ec63[_0x40c746(0x1a2)](0x1,0x1,_0x72f75e,_0x368c4b-0x2,_0x22f817,_0x45a848,![]);else{if(!_0x39bad7&&_0x2a07ca)_0x2828e2=_0x43ccda-0x1,_0x808e03=_0x368c4b-0x3-_0x2828e2,_0x35ec63[_0x40c746(0x1a2)](0x1,0x1,_0x4aff82-0x2,_0x2828e2,_0x245155,_0x36513f,!![]),_0x35ec63[_0x40c746(0x1a2)](0x1,0x2+_0x2828e2,_0x4aff82-0x2,_0x808e03,_0x22f817,_0x45a848,!![]);else!_0x39bad7&&!_0x2a07ca&&(_0x2828e2=_0x43ccda-0x1,_0x808e03=_0x368c4b-0x3-_0x2828e2,_0x35ec63[_0x40c746(0x1a2)](0x1,0x2+_0x808e03,_0x4aff82-0x2,_0x2828e2,_0x245155,_0x36513f,!![]),_0x35ec63[_0x40c746(0x1a2)](0x1,0x1,_0x4aff82-0x2,_0x808e03,_0x22f817,_0x45a848,!![]));}}},Sprite_FieldGaugeATB[_0x56cca2(0x271)]['createBattlerContainer']=function(){const _0x1e24e7=_0x56cca2;this[_0x1e24e7(0x123)]&&this[_0x1e24e7(0x1d2)][_0x1e24e7(0xc3)](this['_battlerContainer']),this[_0x1e24e7(0x123)]=new Sprite(),this['_gaugeSprite']['addChild'](this['_battlerContainer']),this[_0x1e24e7(0xfd)]();},Sprite_FieldGaugeATB['prototype']['createBattlerSprites']=function(){const _0x48ffaf=_0x56cca2;this[_0x48ffaf(0x1e8)](),this['createActorSprites']();},Sprite_FieldGaugeATB[_0x56cca2(0x271)]['createEnemySprites']=function(){const _0x4f9a3d=_0x56cca2,_0x1b6491=$gameTroop[_0x4f9a3d(0x297)](),_0x4d9e1c=_0x1b6491[_0x4f9a3d(0x107)];for(let _0x331b89=0x0;_0x331b89<_0x4d9e1c;_0x331b89++){this['createBattlerSprite'](_0x331b89,$gameTroop);}},Sprite_FieldGaugeATB['prototype'][_0x56cca2(0x166)]=function(){const _0xd2e5ff=_0x56cca2,_0x26d47c=$gameParty[_0xd2e5ff(0x101)]();for(let _0x3ebb77=0x0;_0x3ebb77<_0x26d47c;_0x3ebb77++){this['createBattlerSprite'](_0x3ebb77,$gameParty);}},Sprite_FieldGaugeATB[_0x56cca2(0x271)]['createBattlerSprite']=function(_0x5b64b1,_0x43446e){const _0x931bcb=_0x56cca2,_0x337e70=new Sprite_FieldMarkerATB(_0x5b64b1,_0x43446e,this[_0x931bcb(0x1d2)]);this[_0x931bcb(0x123)][_0x931bcb(0x216)](_0x337e70);},Sprite_FieldGaugeATB['prototype'][_0x56cca2(0x151)]=function(){const _0x50f457=_0x56cca2;Sprite[_0x50f457(0x271)][_0x50f457(0x151)][_0x50f457(0x1d4)](this),this[_0x50f457(0x212)](),this[_0x50f457(0x1e4)](),this['updateVisibility']();},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0x212)]=function(){const _0x51cf5b=_0x56cca2,_0x2a8b19=Sprite_FieldGaugeATB['Settings'];if(_0x2a8b19[_0x51cf5b(0xf0)]!==_0x51cf5b(0xe9))return;if(!_0x2a8b19['RepositionTopForHelp'])return;const _0x4e45ad=SceneManager['_scene'][_0x51cf5b(0x28c)];if(!_0x4e45ad)return;_0x4e45ad[_0x51cf5b(0x1bd)]?(this['x']=this['_homeX']+(_0x2a8b19[_0x51cf5b(0xd1)]||0x0),this['y']=this[_0x51cf5b(0x148)]+(_0x2a8b19[_0x51cf5b(0x24b)]||0x0)):(this['x']=this[_0x51cf5b(0x15c)],this['y']=this[_0x51cf5b(0x148)]);const _0x47c2a4=SceneManager[_0x51cf5b(0xe3)][_0x51cf5b(0x11a)];this['x']+=_0x47c2a4['x'],this['y']+=_0x47c2a4['y'];},Sprite_FieldGaugeATB[_0x56cca2(0x271)]['updateBattleContainerOrder']=function(){const _0x5c2d9e=_0x56cca2;if(!this[_0x5c2d9e(0x123)])return;const _0x17b92e=this['_battlerContainer'][_0x5c2d9e(0x199)];if(!_0x17b92e)return;_0x17b92e[_0x5c2d9e(0x279)](this[_0x5c2d9e(0x197)][_0x5c2d9e(0x124)](this));},Sprite_FieldGaugeATB[_0x56cca2(0x271)][_0x56cca2(0x197)]=function(_0x310a8e,_0x40cb47){const _0x1d3b4e=_0x56cca2,_0x4a9334=this[_0x1d3b4e(0x217)](),_0x50272a=Sprite_FieldGaugeATB[_0x1d3b4e(0x286)][_0x1d3b4e(0x1c5)];if(_0x4a9334&&_0x50272a)return _0x310a8e['x']-_0x40cb47['x'];else{if(_0x4a9334&&!_0x50272a)return _0x40cb47['x']-_0x310a8e['x'];else{if(!_0x4a9334&&_0x50272a)return _0x310a8e['y']-_0x40cb47['y'];else{if(!_0x4a9334&&!_0x50272a)return _0x40cb47['y']-_0x310a8e['y'];}}}},Sprite_FieldGaugeATB['prototype'][_0x56cca2(0x1c9)]=function(){const _0x452a6f=_0x56cca2;this[_0x452a6f(0x1bd)]=$gameSystem[_0x452a6f(0xf1)]();};function _0x59e7(){const _0x5c99e6=['removeState','GaugeDirection','canMove','Game_Battler_tpbRequiredCastTime','atbCurrentMaxValue','updateVisibility','FieldGaugeClearActorGraphic','createFieldGaugeContainerATB','setupArrowSprite','Game_Battler_initTpbChargeTime','ARRAYSTR','item','OpacityRate','clamp','_gaugeSprite','EnemyBattlerFontFace','call','_atbColors','EnemyBattlerIcon','IconSet','some','isStateAffected','%1SystemBorder','ShowMarkerArrow','faceHeight','isATB','round','stop%1','trim','battlerName','onDatabaseLoaded','changeSvActorGraphicBitmap','updateBattleContainerOrder','_graphicEnemy','checkAggroControlSystemOffsetYAdjustment','Game_BattlerBase_revive','createEnemySprites','canMakeTpbActionsAtStartTpbTurn','initTpbChargeTime','TpbAccelerationJS','width','#%1','createFieldAtbGraphicFaceIndex','lineHeight','createBorderSprite','parse','_horz','initBattleSystemATB','_fieldGaugeATB','updateAtbGaugeSpriteVisibility','traitObjects','Sprite_Enemy_createStateIconSprite','face','time','EnemyBattlerFaceIndex','State-%1-%2','Sprite_Gauge_currentValue','getChildIndex','drawGaugeBitmap','setItem','createFieldGaugeSpriteATB','Aggro','isAtbCastingState','_unit','GaugeSplit','Gauge','processBattleCoreJS','createLetterSprite','_battler','_index','gaugeColor2','Window_StatusBase_placeGauge','ARRAYSTRUCT','_tpbIdleTime','_letterSprite','_fieldGaugeATB_Container','_arrowSprite','Sprite_Battler_updateMain','updatePosition','_graphicSprite','setHue','startTpbCasting','addChild','isGaugeHorizontal','currentAction','battleUIOffsetY','_forcing','updateTpb','MarkerOffset','mainFontFace','tpbSpeed','Actor','loadFace','full%1','opacity','isActiveTpb','applyGlobal','ActorBattlerType','ShowMarkerBorder','changeEnemyGraphicBitmap','makeTpbActions','applyGlobalBattleSystemATBEffects','Sprite_Gauge_currentMaxValue','_atbAfterSpeed','isSideView','tpbBaseSpeed','targetOpacity','Sprite_Enemy_startEffect','applyATBPenalty','left','addCommand','isSceneBattle','updateGraphic','FieldGaugeClearEnemyGraphic','%1BgColor1','svActorVertCells','tpbAcceleration','createGaugeSprite','InterruptMute','fieldAtbGraphicType','fieldAtbGraphicFaceIndex','createJS','_graphicFaceIndex','Game_System_initialize','makeDeepCopy','NUM','RegExp','createFieldAtbGraphicIconIndex','FaceName','updateGraphicHue','Game_Battler_applyTpbPenalty','AnchorX','ARRAYNUM','fontSize','ARRAYFUNC','RepositionTopHelpY','undecided','exit','createFieldGaugeSkin','Game_Unit_updateTpb','ConfigManager_makeData','_subject','PreStartTurnJS','updateSelectionEffect','iconHeight','fieldAtbGraphicIconIndex','process_VisuMZ_BattleSystemATB_CreateRegExp','fieldAtbGraphicFaceName','changeFaceGraphicBitmap','createBattlerContainer','updateLetter','processUpdateGraphic','FaceIndex','isRestricted','Game_BattlerBase_appear','Charge','addBattleSystemATBCommands','cast2','isHidden','currentMaxValue','addLoadListener','SlowRate','clear','_fieldAtbGaugeFaceIndex','iconWidth','STR','BattlerRelativeSpeedJS','InterruptMirror','skills','Game_Battler_tpbSpeed','PostStartTurnJS','scale','atbActive','prototype','EnemyBattlerFontSize','Sprite_Gauge_gaugeColor1','ColorManager_loadWindowskin','setActionState','Visible','setFrame','EVAL','sort','enemy','ConvertParams','revive','hasSvBattler','clearActions','icon','Game_Battler_tpbBaseSpeed','_originalSpeed','acting','ShowMarkerBg','_fieldAtbGaugeGraphicType','isAttack','Settings','AdjustRect','ready','restriction','Game_Battler_tpbAcceleration','GaugeLengthVert','_helpWindow','480601tliZbr','Cast','cast','stop','requestFauxAnimation','onRestrict','Game_Battler_clearActions','svactor','tpbRequiredCastTime','_fieldAtbGaugeIconIndex','members','_backgroundSprite','atbInterrupt','_tpbChargeTime','Actors','onAtbInterrupt','ParseSkillNotetags','makeData','gaugeColor1','default%1','422256ilGPmV','VisuMZ_2_BattleSystemCTB','min','getStateTooltipBattler','initMembers','removeChild','_tpbCastTime','14628890yccbdS','getColor','Parse_Notetags_CreateJS','_blendColor','isDead','MarkerSize','createChildren','FastRate','createBackgroundSprite','createKeyJS','updateMain','targetPositionOnGauge','RepositionTopHelpX','svBattlerName','applyTpbPenalty','createAtbGaugeSprite','isShowAtbGauge','VisibleGauge','EnemyBattlerDrawLetter','StunsResetGauge','Sprite_Battler_setBattler','Scale','_actions','registerCommand','startEffect','Sprite_Battler_update','2054776jPtFUu','paramRate','name','STRUCT','_scene','atbColor','note','After','tpbChargeTime','IconIndex','top','_statusWindow','OffsetX','InitialGaugeJS','reduce','Window_SideviewUiBattleStatus','isEnemy','DisplayPosition','isBattleSystemATBFieldGaugeVisible','_tpbTurnCount','DisplayOffsetY','Scene_Options_maxCommands','AddOption','_letter','blt','battler','placeGauge','Scene_Battle_createAllWindows','Enemy','Class-%1-%2','createBattlerSprites','4040arhZfC','EnemyBattlerType','isAlive','maxBattleMembers','addGeneralOptions','battlerHue','version','loadSvActor','paramBuffRate','length','_onRestrictBypassAtbReset','setText','Item-%1-%2','GaugeLengthHorz','EscapeFailPenalty','Game_Battler_onRestrict','changeAtbChargeTime','InterruptFlashDuration','ARRAYJSON','process_VisuMZ_BattleSystemATB_JS_Notetags','cast1','updatePositionOffset','getAtbCastTimeRate','updateAtbGaugeSpritePosition','return\x200','#000000','_fieldAtbGaugeFaceName','map','_windowLayer','%1Side','InterruptText','format','anchor','InterruptTextColor','toUpperCase','charging','GaugeThick','_battlerContainer','bind','Game_Action_applyItemUserEffect','Sprite_Actor_createStateSprite','tpbRelativeSpeed','Window_Help_setItem','clearTpbChargeTime','atbStopped','7889IGWuqw','clearFieldAtbGraphics','Window_BattleStatus','Actor-%1-%2','setHomeLocation','subject','BattleManager_endBattlerActions','MarkerSpeed','loadEnemy','ceil','AggroControlSystem','setBattler','_graphicType','currentValue','aggroGauge','Enemies','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20keyType\x20=\x20\x27%2\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20rate\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(keyType\x20===\x20\x27Charge\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbChargeTime;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20else\x20if\x20(keyType\x20===\x20\x27Cast\x27)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20target._tpbCastTime\x20/\x20Math.max(target.tpbRequiredCastTime(),\x201);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20originalValue\x20=\x20rate;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20NaN\x20Check\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(isNaN(rate)){\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27NaN\x20rate\x20created\x20by\x20%2\x27.format(\x27\x27,obj.name));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27Restoring\x20rate\x20to\x20%2\x27.format(\x27\x27,originalValue));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20rate\x20=\x20originalValue;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20rate;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Armor-%1-%2','battleUIOffsetX','1870ukihPj','ctGaugeColor1','applyData','MarkerArrowWindowSkin','boxHeight','gaugeHeight','fast%1','Interrupt','setBlendColor','loadWindowskin','_homeY','942OMtOYs','initialize','default','BattleManager_isActiveTpb','applyBattleSystemATBUserEffect','Scene_Boot_onDatabaseLoaded','Window_Options_addGeneralOptions','setAtbAfterSpeed','update','AnchorY','includes','VisuMZ_2_AggroControlSystem','svActorHorzCells','bottom','battleMembers','isCTB','ARRAYEVAL','_graphicHue','faceIndex','_homeX','Mechanics','slow','addBattleSystemATBShowGaugeCommand','Game_Action_applyGlobal','atbGaugeColor','loadSystem','appear','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','height','createActorSprites','_graphicIconIndex','gaugeRate','FieldGaugeEnemyIcon','createAllWindows','setBattleSystemATBFieldGaugeVisible','_tpbState','<JS\x20%2\x20%1\x20%3>\x5cs*([\x5cs\x5cS]*)\x5cs*<\x5c/JS\x20%2\x20%1\x20%3>','changeIconGraphicBitmap','casting','disappear','isAppeared','_atbGaugeSprite','setupAtbGaugeSprite','18vuRrMh','Enemy-%1-%2','speed','bitmap','createStateIconSprite','BorderThickness','atbCurrentValue','isTpb','Skill-%1-%2','BattleSystemATB','createStateSprite','createArrowSprite','attackSpeed','visualAtbGauge','_atbFieldGaugeVisible','updatePositionOnGauge','FieldGaugeEnemyFace','Game_Battler_startTpbCasting','UseFieldGauge','Game_Battler_clearTpbChargeTime','_tpbTurnEnd','TpbBaseSpeedCalcJS','FieldGaugeActorIcon','_needsAtbClear','createFieldAtbGraphicType','572040RPWQmR','showVisualAtbGauge','Options','textColor','max','_skinSprite','Game_Battler_tpbRelativeSpeed','startTpbTurn','create','match','compareBattlerSprites','constructor','children','ParseItemNotetags','VisuMZ_0_CoreEngine','isTpbCharged','ConfigManager_applyData','clearRect','ShowStatusGauge','endBattlerActions','setupTextPopup','gradientFillRect','_graphicFaceName','faceWidth','OffsetY','allBattleMembers','floor','(?:GAUGE|TIME|SPEED)','_statusType','actor','isActor','fillRect','Name','SystemFieldGaugeVisibility','createFieldAtbGraphicFaceName','makeActions','concat','right','_graphicSv','updateOpacity','InterruptFlashColor','_svBattlerSprite','setAtbCastTime','atbSpeed','setAtbChargeTime','description','isAtbChargingState','applyItemUserEffect','visible','TpbCastTimeJS','initTpbChargeTimeATB','DrawGauge','_plural','Game_Battler_removeState','setAtbGraphicIconIndex'];_0x59e7=function(){return _0x5c99e6;};return _0x59e7();}function _0x1b6e(_0x2f0fef,_0x30dbde){const _0x59e74f=_0x59e7();return _0x1b6e=function(_0x1b6e70,_0x5ee8a5){_0x1b6e70=_0x1b6e70-0xc2;let _0x4ed206=_0x59e74f[_0x1b6e70];return _0x4ed206;},_0x1b6e(_0x2f0fef,_0x30dbde);}function Sprite_FieldMarkerATB(){this['initialize'](...arguments);}Sprite_FieldMarkerATB[_0x56cca2(0x271)]=Object[_0x56cca2(0x195)](Sprite_Clickable[_0x56cca2(0x271)]),Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x198)]=Sprite_FieldMarkerATB,Sprite_FieldMarkerATB['prototype'][_0x56cca2(0x14a)]=function(_0x2d8712,_0x508970,_0x905e05){const _0x348682=_0x56cca2;this['_index']=_0x2d8712,this[_0x348682(0x203)]=_0x508970,this[_0x348682(0x1d2)]=_0x905e05,Sprite_Clickable[_0x348682(0x271)][_0x348682(0x14a)][_0x348682(0x1d4)](this),this[_0x348682(0xc2)](),this[_0x348682(0xcb)](),this['opacity']=this['targetOpacity']();},Sprite_FieldMarkerATB[_0x56cca2(0x271)]['initMembers']=function(){const _0x14d865=_0x56cca2;this[_0x14d865(0x11e)]['x']=0.5,this[_0x14d865(0x11e)]['y']=0.5;},Sprite_FieldMarkerATB['prototype'][_0x56cca2(0xcb)]=function(){const _0x4205ca=_0x56cca2;this['createBackgroundSprite'](),this['createGraphicSprite'](),this[_0x4205ca(0x1f0)](),this[_0x4205ca(0x207)](),this[_0x4205ca(0x17f)](),this['updatePositionOnGauge'](!![]);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0xcd)]=function(){const _0x1070dd=_0x56cca2;if(!Sprite_FieldGaugeATB['Settings'][_0x1070dd(0x283)])return;const _0xbe1a32=Sprite_FieldGaugeATB[_0x1070dd(0x286)],_0x3a9956=this[_0x1070dd(0x203)]===$gameParty?_0x1070dd(0x21f):_0x1070dd(0xfb),_0x56cb67='%1SystemBg'[_0x1070dd(0x11d)](_0x3a9956),_0x456263=new Sprite();_0x456263[_0x1070dd(0x11e)]['x']=this[_0x1070dd(0x11e)]['x'],_0x456263[_0x1070dd(0x11e)]['y']=this['anchor']['y'];if(_0xbe1a32[_0x56cb67])_0x456263['bitmap']=ImageManager[_0x1070dd(0x162)](_0xbe1a32[_0x56cb67]);else{const _0x531cce=_0xbe1a32[_0x1070dd(0xca)];_0x456263[_0x1070dd(0x177)]=new Bitmap(_0x531cce,_0x531cce);const _0x1f9841=ColorManager[_0x1070dd(0xc6)](_0xbe1a32[_0x1070dd(0x236)[_0x1070dd(0x11d)](_0x3a9956)]),_0x3c4ba3=ColorManager[_0x1070dd(0xc6)](_0xbe1a32['%1BgColor2'['format'](_0x3a9956)]);_0x456263['bitmap']['gradientFillRect'](0x0,0x0,_0x531cce,_0x531cce,_0x1f9841,_0x3c4ba3,!![]);}this['_backgroundSprite']=_0x456263,this['addChild'](this[_0x1070dd(0x298)]),this[_0x1070dd(0x1ec)]=this['_backgroundSprite']['width'],this['height']=this[_0x1070dd(0x298)][_0x1070dd(0x165)];},Sprite_FieldMarkerATB[_0x56cca2(0x271)]['createGraphicSprite']=function(){const _0xc4ec78=_0x56cca2,_0x3651c3=new Sprite();_0x3651c3[_0xc4ec78(0x11e)]['x']=this['anchor']['x'],_0x3651c3[_0xc4ec78(0x11e)]['y']=this[_0xc4ec78(0x11e)]['y'],this[_0xc4ec78(0x213)]=_0x3651c3,this[_0xc4ec78(0x216)](this[_0xc4ec78(0x213)]),this[_0xc4ec78(0x25b)]();},Sprite_FieldMarkerATB['prototype'][_0x56cca2(0x1f0)]=function(){const _0x476e8f=_0x56cca2;if(!Sprite_FieldGaugeATB[_0x476e8f(0x286)][_0x476e8f(0x226)])return;const _0x3e0a2b=Sprite_FieldGaugeATB[_0x476e8f(0x286)],_0x384f75=this[_0x476e8f(0x203)]===$gameParty?_0x476e8f(0x21f):'Enemy',_0x12ccce=_0x476e8f(0x1da)[_0x476e8f(0x11d)](_0x384f75),_0x1fa4f4=new Sprite();_0x1fa4f4[_0x476e8f(0x11e)]['x']=this[_0x476e8f(0x11e)]['x'],_0x1fa4f4[_0x476e8f(0x11e)]['y']=this['anchor']['y'];if(_0x3e0a2b[_0x12ccce])_0x1fa4f4['bitmap']=ImageManager[_0x476e8f(0x162)](_0x3e0a2b[_0x12ccce]);else{let _0x244a92=_0x3e0a2b[_0x476e8f(0xca)],_0x22ca50=_0x3e0a2b[_0x476e8f(0x179)];_0x1fa4f4[_0x476e8f(0x177)]=new Bitmap(_0x244a92,_0x244a92);const _0x28588a=_0x476e8f(0x117),_0x86613c=ColorManager[_0x476e8f(0xc6)](_0x3e0a2b['%1BorderColor'[_0x476e8f(0x11d)](_0x384f75)]);_0x1fa4f4[_0x476e8f(0x177)]['fillRect'](0x0,0x0,_0x244a92,_0x244a92,_0x28588a),_0x244a92-=0x2,_0x1fa4f4[_0x476e8f(0x177)][_0x476e8f(0x1ac)](0x1,0x1,_0x244a92,_0x244a92,_0x86613c),_0x244a92-=_0x22ca50*0x2,_0x1fa4f4[_0x476e8f(0x177)][_0x476e8f(0x1ac)](0x1+_0x22ca50,0x1+_0x22ca50,_0x244a92,_0x244a92,_0x28588a),_0x244a92-=0x2,_0x22ca50+=0x1,_0x1fa4f4[_0x476e8f(0x177)][_0x476e8f(0x19e)](0x1+_0x22ca50,0x1+_0x22ca50,_0x244a92,_0x244a92);}this[_0x476e8f(0x298)]=_0x1fa4f4,this[_0x476e8f(0x216)](this[_0x476e8f(0x298)]);},Sprite_FieldMarkerATB['prototype']['createLetterSprite']=function(){const _0x365c1f=_0x56cca2,_0x2d1fa1=Sprite_FieldGaugeATB[_0x365c1f(0x286)];if(!_0x2d1fa1[_0x365c1f(0xd7)])return;if(this[_0x365c1f(0x203)]===$gameParty)return;const _0xce7402=_0x2d1fa1[_0x365c1f(0xca)],_0x2a540a=new Sprite();_0x2a540a[_0x365c1f(0x11e)]['x']=this[_0x365c1f(0x11e)]['x'],_0x2a540a[_0x365c1f(0x11e)]['y']=this[_0x365c1f(0x11e)]['y'],_0x2a540a[_0x365c1f(0x177)]=new Bitmap(_0xce7402,_0xce7402),this[_0x365c1f(0x20e)]=_0x2a540a,this[_0x365c1f(0x216)](this[_0x365c1f(0x20e)]);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x17f)]=function(){const _0x49730c=_0x56cca2,_0x40e340=Sprite_FieldGaugeATB[_0x49730c(0x286)];if(!_0x40e340[_0x49730c(0x1db)])return;const _0x3c6e07=new Sprite();_0x3c6e07[_0x49730c(0x11e)]['x']=this[_0x49730c(0x11e)]['x'],_0x3c6e07[_0x49730c(0x11e)]['y']=this[_0x49730c(0x11e)]['y'],this[_0x49730c(0x1cc)](_0x3c6e07),this[_0x49730c(0x210)]=_0x3c6e07,this['addChild'](this[_0x49730c(0x210)]);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x1cc)]=function(_0x539fc4){const _0x23ed57=_0x56cca2,_0x3bfeb5=Sprite_FieldGaugeATB[_0x23ed57(0x286)],_0x33381f=_0x3bfeb5[_0x23ed57(0xca)],_0x129b8b=Math[_0x23ed57(0x1de)](_0x33381f/0x2),_0x36bfc9=this[_0x23ed57(0x217)](),_0x169211=this[_0x23ed57(0x203)]===$gameParty?_0x23ed57(0x21f):'Enemy',_0x561e09=_0x3bfeb5[_0x23ed57(0x11b)[_0x23ed57(0x11d)](_0x169211)];_0x539fc4[_0x23ed57(0x177)]=ImageManager['loadSystem'](_0x3bfeb5[_0x23ed57(0x141)]);const _0x2823ea=0x18,_0x5207c6=_0x2823ea/0x2,_0x33d9d8=0x60+_0x2823ea,_0x45e9fc=0x0+_0x2823ea;if(_0x36bfc9&&_0x561e09)_0x539fc4['setFrame'](_0x33d9d8+_0x5207c6,_0x45e9fc+_0x5207c6+_0x2823ea,_0x2823ea,_0x5207c6),_0x539fc4['y']+=_0x129b8b,_0x539fc4[_0x23ed57(0x11e)]['y']=0x0;else{if(_0x36bfc9&&!_0x561e09)_0x539fc4['setFrame'](_0x33d9d8+_0x5207c6,_0x45e9fc,_0x2823ea,_0x5207c6),_0x539fc4['y']-=_0x129b8b,_0x539fc4['anchor']['y']=0x1;else{if(!_0x36bfc9&&_0x561e09)_0x539fc4[_0x23ed57(0x277)](_0x33d9d8,_0x45e9fc+_0x5207c6,_0x5207c6,_0x2823ea),_0x539fc4['x']-=Math['ceil'](_0x129b8b*1.75),_0x539fc4['anchor']['x']=0x0;else!_0x36bfc9&&!_0x561e09&&(_0x539fc4[_0x23ed57(0x277)](_0x33d9d8+_0x2823ea+_0x5207c6,_0x45e9fc+_0x5207c6,_0x5207c6,_0x2823ea),_0x539fc4['x']+=Math[_0x23ed57(0x134)](_0x129b8b*1.75),_0x539fc4[_0x23ed57(0x11e)]['x']=0x1);}}},Sprite_FieldMarkerATB['prototype'][_0x56cca2(0xf8)]=function(){const _0x27dc4a=_0x56cca2;return this['_unit']===$gameParty?$gameParty[_0x27dc4a(0x157)]()[this[_0x27dc4a(0x209)]]:$gameTroop['members']()[this['_index']];},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x151)]=function(){const _0x4998bf=_0x56cca2;Sprite_Clickable[_0x4998bf(0x271)][_0x4998bf(0x151)]['call'](this),this[_0x4998bf(0x1b4)](),this[_0x4998bf(0x113)](),this[_0x4998bf(0x183)](),this[_0x4998bf(0x234)](),this[_0x4998bf(0x245)](),this[_0x4998bf(0x25a)](),this[_0x4998bf(0x253)]();},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x1b4)]=function(){const _0x3fdcba=_0x56cca2,_0x1a8205=this[_0x3fdcba(0x22e)](),_0xd4ad5c=Sprite_FieldGaugeATB[_0x3fdcba(0x286)][_0x3fdcba(0x1d0)];if(this[_0x3fdcba(0x222)]>_0x1a8205)this['opacity']=Math['max'](_0x1a8205,this[_0x3fdcba(0x222)]-_0xd4ad5c);else this[_0x3fdcba(0x222)]<_0x1a8205&&(this[_0x3fdcba(0x222)]=Math[_0x3fdcba(0x2a3)](_0x1a8205,this[_0x3fdcba(0x222)]+_0xd4ad5c));},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x22e)]=function(){const _0x164092=_0x56cca2,_0x3a3e4e=this[_0x164092(0xf8)]();if(!_0x3a3e4e)return 0x0;if(_0x3a3e4e['isHidden']())return 0x0;if(_0x3a3e4e[_0x164092(0xc9)]())return 0x0;return 0xff;},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x217)]=function(){const _0x55253e=_0x56cca2;if(this[_0x55253e(0x1f2)]!==undefined)return this['_horz'];const _0x2b821a=Sprite_FieldGaugeATB[_0x55253e(0x286)][_0x55253e(0xf0)];return this[_0x55253e(0x1f2)]=[_0x55253e(0xe9),_0x55253e(0x156)][_0x55253e(0x153)](_0x2b821a),this[_0x55253e(0x1f2)];},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x113)]=function(){const _0x4ed7fc=_0x56cca2,_0x32321c=Sprite_FieldGaugeATB[_0x4ed7fc(0x286)],_0xec662a=this['isGaugeHorizontal'](),_0x316fe8=this['_unit']===$gameParty?_0x4ed7fc(0x21f):'Enemy',_0x581cc2=_0x32321c[_0x4ed7fc(0x21c)],_0x95594e=_0x32321c[_0x4ed7fc(0x11b)['format'](_0x316fe8)];_0xec662a?(this['y']=_0x32321c['GaugeThick']/0x2,this['y']+=_0x95594e?-_0x581cc2:_0x581cc2):(this['x']=_0x32321c['GaugeThick']/0x2,this['x']+=_0x95594e?_0x581cc2:-_0x581cc2);},Sprite_FieldMarkerATB['prototype']['updatePositionOnGauge']=function(_0x41d9eb){const _0x194d81=_0x56cca2,_0x156e4d=this[_0x194d81(0xf8)]();if(!_0x156e4d)return;const _0x789ee1=_0x156e4d[_0x194d81(0x114)]();if(_0x789ee1>=Infinity)return;const _0x2b7e52=Sprite_FieldGaugeATB[_0x194d81(0x286)],_0x177952=this[_0x194d81(0x217)](),_0x2efd30=this[_0x194d81(0xd0)](),_0x3288b9=_0x41d9eb?Infinity:_0x2b7e52[_0x194d81(0x132)];if(_0x177952&&this['x']!==_0x2efd30){if(this['x']>_0x2efd30)this['x']=Math[_0x194d81(0x191)](_0x2efd30,this['x']-_0x3288b9);if(this['x']<_0x2efd30)this['x']=Math[_0x194d81(0x2a3)](_0x2efd30,this['x']+_0x3288b9);}else{if(!_0x177952&&this['x']!==_0x2efd30){if(this['y']>_0x2efd30)this['y']=Math[_0x194d81(0x191)](_0x2efd30,this['y']-_0x3288b9);if(this['y']<_0x2efd30)this['y']=Math[_0x194d81(0x2a3)](_0x2efd30,this['y']+_0x3288b9);}}},Sprite_FieldMarkerATB[_0x56cca2(0x271)]['targetPositionOnGauge']=function(){const _0x32fd2b=_0x56cca2,_0x4f96d6=Sprite_FieldGaugeATB[_0x32fd2b(0x286)],_0x4ac5ee=this[_0x32fd2b(0xf8)](),_0x3f060f=this[_0x32fd2b(0x217)](),_0x47c581=this[_0x32fd2b(0x1d2)][_0x32fd2b(0x177)]['width'],_0x3ae9f7=this[_0x32fd2b(0x1d2)][_0x32fd2b(0x177)][_0x32fd2b(0x165)],_0x3b17ce=_0x4f96d6[_0x32fd2b(0x204)]['clamp'](0x0,0x1),_0x1bca39=_0x4f96d6[_0x32fd2b(0x1c5)];let _0x350230=_0x4ac5ee[_0x32fd2b(0xe7)]()*_0x3b17ce;_0x350230+=(0x1-_0x3b17ce)*_0x4ac5ee[_0x32fd2b(0x114)]();if(_0x4ac5ee===BattleManager[_0x32fd2b(0x251)])_0x350230=0x1;if(!_0x1bca39)_0x350230=0x1-_0x350230;let _0x3ed4a1=0x0;if(_0x3f060f)_0x3ed4a1=_0x350230*_0x47c581;else!_0x3f060f&&(_0x3ed4a1=_0x350230*_0x3ae9f7);return Math[_0x32fd2b(0x1de)](_0x3ed4a1);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x234)]=function(){const _0x47368b=_0x56cca2,_0x262764=this[_0x47368b(0xf8)]();if(!_0x262764)return;const _0x1c2483=Sprite_FieldGaugeATB['Settings'],_0x3f5b43=this[_0x47368b(0x203)]===$gameParty?'Actor':_0x47368b(0xfb);let _0x4ed2d0=_0x262764['fieldAtbGraphicType']();if(_0x262764[_0x47368b(0x1ab)]()&&_0x4ed2d0===_0x47368b(0x27a))_0x4ed2d0=_0x47368b(0x1f8);else _0x262764[_0x47368b(0xef)]()&&_0x4ed2d0===_0x47368b(0x294)&&(_0x4ed2d0='enemy');if(this[_0x47368b(0x137)]!==_0x4ed2d0)return this[_0x47368b(0x25b)]();switch(this[_0x47368b(0x137)]){case _0x47368b(0x1f8):if(this[_0x47368b(0x1a3)]!==_0x262764[_0x47368b(0x257)]())return this['processUpdateGraphic']();if(this[_0x47368b(0x23e)]!==_0x262764['fieldAtbGraphicFaceIndex']())return this[_0x47368b(0x25b)]();break;case _0x47368b(0x27f):if(this['_graphicIconIndex']!==_0x262764[_0x47368b(0x255)]())return this[_0x47368b(0x25b)]();break;case _0x47368b(0x27a):if(_0x262764[_0x47368b(0x27d)]()){if(this['_graphicSv']!==_0x262764[_0x47368b(0xd2)]())return this['processUpdateGraphic']();}else{if(this[_0x47368b(0x1e5)]!==_0x262764['battlerName']())return this['processUpdateGraphic']();}break;case _0x47368b(0x294):if(_0x262764[_0x47368b(0x1ab)]()){if(this[_0x47368b(0x1b3)]!==_0x262764[_0x47368b(0x1e1)]())return this['processUpdateGraphic']();}else{if(this[_0x47368b(0x1e5)]!==_0x262764[_0x47368b(0x1e1)]())return this[_0x47368b(0x25b)]();}break;}},Sprite_FieldMarkerATB['prototype']['processUpdateGraphic']=function(){const _0x311dd3=_0x56cca2,_0x37e49f=this[_0x311dd3(0xf8)]();if(!_0x37e49f)return;this['_graphicType']=_0x37e49f[_0x311dd3(0x23b)]();if(_0x37e49f['isActor']()&&this[_0x311dd3(0x137)]===_0x311dd3(0x27a))this[_0x311dd3(0x137)]='face';else _0x37e49f[_0x311dd3(0xef)]()&&this['_graphicType']===_0x311dd3(0x294)&&(this[_0x311dd3(0x137)]=_0x311dd3(0x27a));let _0x53cdba;switch(this[_0x311dd3(0x137)]){case _0x311dd3(0x1f8):this['_graphicFaceName']=_0x37e49f['fieldAtbGraphicFaceName'](),this['_graphicFaceIndex']=_0x37e49f['fieldAtbGraphicFaceIndex'](),_0x53cdba=ImageManager[_0x311dd3(0x220)](this[_0x311dd3(0x1a3)]),_0x53cdba['addLoadListener'](this[_0x311dd3(0x258)]['bind'](this,_0x53cdba));break;case _0x311dd3(0x27f):this['_graphicIconIndex']=_0x37e49f[_0x311dd3(0x255)](),_0x53cdba=ImageManager[_0x311dd3(0x162)](_0x311dd3(0x1d7)),_0x53cdba['addLoadListener'](this[_0x311dd3(0x16e)][_0x311dd3(0x124)](this,_0x53cdba));break;case _0x311dd3(0x27a):if(_0x37e49f[_0x311dd3(0x27d)]())this['_graphicSv']=_0x37e49f[_0x311dd3(0xd2)](),_0x53cdba=ImageManager['loadSvActor'](this[_0x311dd3(0x1b3)]),_0x53cdba[_0x311dd3(0x264)](this['changeSvActorGraphicBitmap'][_0x311dd3(0x124)](this,_0x53cdba));else $gameSystem[_0x311dd3(0x22c)]()?(this[_0x311dd3(0x1e5)]=_0x37e49f[_0x311dd3(0x1e1)](),_0x53cdba=ImageManager['loadSvEnemy'](this[_0x311dd3(0x1e5)]),_0x53cdba[_0x311dd3(0x264)](this[_0x311dd3(0x227)][_0x311dd3(0x124)](this,_0x53cdba))):(this[_0x311dd3(0x1e5)]=_0x37e49f[_0x311dd3(0x1e1)](),_0x53cdba=ImageManager[_0x311dd3(0x133)](this[_0x311dd3(0x1e5)]),_0x53cdba['addLoadListener'](this[_0x311dd3(0x227)]['bind'](this,_0x53cdba)));break;case _0x311dd3(0x294):this['_graphicSv']=_0x37e49f[_0x311dd3(0x1e1)](),_0x53cdba=ImageManager[_0x311dd3(0x105)](this[_0x311dd3(0x1b3)]),_0x53cdba[_0x311dd3(0x264)](this[_0x311dd3(0x1e3)][_0x311dd3(0x124)](this,_0x53cdba));break;}},Sprite_FieldMarkerATB['prototype']['changeFaceGraphicBitmap']=function(_0x206007){const _0x1483e9=_0x56cca2,_0xdc6059=Sprite_FieldGaugeATB['Settings'],_0x4ff84e=_0xdc6059[_0x1483e9(0xca)],_0x2862de=this['_graphicFaceIndex'];this[_0x1483e9(0x213)][_0x1483e9(0x177)]=new Bitmap(_0x4ff84e,_0x4ff84e);const _0x245bf5=this[_0x1483e9(0x213)][_0x1483e9(0x177)],_0xd0699e=ImageManager[_0x1483e9(0x1a4)],_0x3ff98b=ImageManager[_0x1483e9(0x1dc)],_0x258af9=ImageManager[_0x1483e9(0x1a4)],_0x1059cd=ImageManager[_0x1483e9(0x1dc)],_0x4b4501=_0x2862de%0x4*_0xd0699e+(_0xd0699e-_0x258af9)/0x2,_0x3cfb36=Math[_0x1483e9(0x1a7)](_0x2862de/0x4)*_0x3ff98b+(_0x3ff98b-_0x1059cd)/0x2;_0x245bf5['blt'](_0x206007,_0x4b4501,_0x3cfb36,_0x258af9,_0x1059cd,0x0,0x0,_0x4ff84e,_0x4ff84e);},Sprite_FieldMarkerATB['prototype']['changeIconGraphicBitmap']=function(_0x214718){const _0x48f284=_0x56cca2,_0x25a653=Sprite_FieldGaugeATB['Settings'],_0x191c15=_0x25a653[_0x48f284(0xca)],_0x22c74a=this[_0x48f284(0x167)];this['_graphicSprite'][_0x48f284(0x177)]=new Bitmap(_0x191c15,_0x191c15);const _0x341603=this[_0x48f284(0x213)][_0x48f284(0x177)],_0x4b60f7=ImageManager[_0x48f284(0x268)],_0x290cd2=ImageManager[_0x48f284(0x254)],_0x58bf12=_0x22c74a%0x10*_0x4b60f7,_0x5b8fa6=Math[_0x48f284(0x1a7)](_0x22c74a/0x10)*_0x290cd2;_0x341603[_0x48f284(0xf7)](_0x214718,_0x58bf12,_0x5b8fa6,_0x4b60f7,_0x290cd2,0x0,0x0,_0x191c15,_0x191c15);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x1e3)]=function(_0x49657e){const _0x5a9cd8=_0x56cca2,_0x2ae528=Sprite_FieldGaugeATB[_0x5a9cd8(0x286)],_0x1b3b1e=_0x2ae528[_0x5a9cd8(0xca)];this[_0x5a9cd8(0x213)][_0x5a9cd8(0x177)]=new Bitmap(_0x1b3b1e,_0x1b3b1e);const _0x48d722=this['_graphicSprite']['bitmap'],_0x226062=this[_0x5a9cd8(0x1b3)][_0x5a9cd8(0x196)](/\$/i),_0xd16c44=_0x226062?0x1:ImageManager[_0x5a9cd8(0x155)],_0x2b1882=_0x226062?0x1:ImageManager['svActorVertCells'],_0x2c31b1=_0x49657e[_0x5a9cd8(0x1ec)]/_0xd16c44,_0x2fc72b=_0x49657e['height']/_0x2b1882,_0x10759a=Math['min'](0x1,_0x1b3b1e/_0x2c31b1,_0x1b3b1e/_0x2fc72b),_0x1623fc=_0x2c31b1*_0x10759a,_0x139790=_0x2fc72b*_0x10759a,_0x108ac7=Math[_0x5a9cd8(0x1de)]((_0x1b3b1e-_0x1623fc)/0x2),_0x28756a=Math[_0x5a9cd8(0x1de)]((_0x1b3b1e-_0x139790)/0x2);_0x48d722['blt'](_0x49657e,0x0,0x0,_0x2c31b1,_0x2fc72b,_0x108ac7,_0x28756a,_0x1623fc,_0x139790);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x227)]=function(_0x2f8af9){const _0x163888=_0x56cca2,_0x24138d=Sprite_FieldGaugeATB[_0x163888(0x286)],_0x342b4a=_0x24138d['MarkerSize'];this['_graphicSprite'][_0x163888(0x177)]=new Bitmap(_0x342b4a,_0x342b4a);const _0xb055e3=this[_0x163888(0x213)][_0x163888(0x177)],_0x1d57d6=Math[_0x163888(0x2a3)](0x1,_0x342b4a/_0x2f8af9[_0x163888(0x1ec)],_0x342b4a/_0x2f8af9['height']),_0x6c25ac=_0x2f8af9[_0x163888(0x1ec)]*_0x1d57d6,_0x5966b1=_0x2f8af9['height']*_0x1d57d6,_0x474a89=Math[_0x163888(0x1de)]((_0x342b4a-_0x6c25ac)/0x2),_0x120a04=Math['round']((_0x342b4a-_0x5966b1)/0x2);_0xb055e3[_0x163888(0xf7)](_0x2f8af9,0x0,0x0,_0x2f8af9[_0x163888(0x1ec)],_0x2f8af9[_0x163888(0x165)],_0x474a89,_0x120a04,_0x6c25ac,_0x5966b1);},Sprite_FieldMarkerATB[_0x56cca2(0x271)]['updateGraphicHue']=function(){const _0x20fe2c=_0x56cca2,_0x34e79d=this['battler']();if(!_0x34e79d)return;if(!_0x34e79d[_0x20fe2c(0xef)]())return;if(this[_0x20fe2c(0x15a)]===_0x34e79d[_0x20fe2c(0x103)]())return;this[_0x20fe2c(0x15a)]=_0x34e79d[_0x20fe2c(0x103)](),this[_0x20fe2c(0x213)][_0x20fe2c(0x214)](_0x34e79d['hasSvBattler']()?0x0:this[_0x20fe2c(0x15a)]);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x25a)]=function(){const _0x19d63a=_0x56cca2;if(!this[_0x19d63a(0x20e)])return;const _0x3fbfa5=this['battler']();if(!_0x3fbfa5)return;if(this[_0x19d63a(0xf6)]===_0x3fbfa5[_0x19d63a(0xf6)]&&this[_0x19d63a(0x1c1)]===_0x3fbfa5[_0x19d63a(0x1c1)])return;this['_letter']=_0x3fbfa5['_letter'],this[_0x19d63a(0x1c1)]=_0x3fbfa5[_0x19d63a(0x1c1)];const _0x3bf0c8=Sprite_FieldGaugeATB[_0x19d63a(0x286)],_0x3ec2a7=_0x3bf0c8[_0x19d63a(0xca)],_0xd6a749=Math[_0x19d63a(0x1a7)](_0x3ec2a7/0x2),_0x536842=this[_0x19d63a(0x20e)][_0x19d63a(0x177)];_0x536842[_0x19d63a(0x266)]();if(!this['_plural'])return;_0x536842['fontFace']=_0x3bf0c8[_0x19d63a(0x1d3)]||$gameSystem[_0x19d63a(0x21d)](),_0x536842[_0x19d63a(0x249)]=_0x3bf0c8[_0x19d63a(0x272)]||0x10,_0x536842['drawText'](this[_0x19d63a(0xf6)],0x2,_0xd6a749,_0x3ec2a7-0x4,_0xd6a749-0x2,_0x19d63a(0x1b2));},Sprite_FieldMarkerATB['prototype']['updateSelectionEffect']=function(){const _0x38a66c=_0x56cca2,_0x1bdfee=this[_0x38a66c(0xf8)]();if(!_0x1bdfee)return;const _0x56b96d=_0x1bdfee[_0x38a66c(0xf8)]();if(!_0x56b96d)return;const _0x5496d0=_0x56b96d['mainSprite']();if(!_0x5496d0)return;this[_0x38a66c(0x146)](_0x5496d0[_0x38a66c(0xc8)]);},Sprite_FieldMarkerATB[_0x56cca2(0x271)][_0x56cca2(0x2a4)]=function(){const _0xd5a987=_0x56cca2;return this[_0xd5a987(0xf8)]();};