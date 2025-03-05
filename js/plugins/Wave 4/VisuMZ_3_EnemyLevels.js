//=============================================================================
// VisuStella MZ - Enemy Levels
// VisuMZ_3_EnemyLevels.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_EnemyLevels = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EnemyLevel = VisuMZ.EnemyLevel || {};
VisuMZ.EnemyLevel.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.06] [EnemyLevel]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Enemy_Levels_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Enemies in RPG Maker MZ do not have levels by default, but instead are given
 * static parameters that do not change throughout the game. This plugin adds
 * the functionality to apply levels and level-based parameter changes to all
 * of your enemies, along with control over how their levels are handled.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign levels to each enemy from exact values to dynamic values based on
 *   the party's levels, variables, etc.
 * * Level variance and and bonus modifiers to make enemies dynamically leveled
 *   even if they're in the same battle.
 * * Decide enemy levels based on the map the player is in.
 * * Have enemies use different images based on what level they are.
 * * Skill effects, item effects, and Plugin Commands that alter the levels
 *   of enemies mid-battle.
 * * Notetags to prevent certain skills from being used until the enemy reaches
 *   a specific level.
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
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
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
 * enemy.level
 *
 * - A new property, 'level' is defined for Game_Enemy and it used to determine
 * the enemy's current level. This allows you, the game dev, to use a.level or
 * b.level in damage formulas and other calculations.
 *
 * ---
 *
 * ============================================================================
 * Parameter Calculations
 * ============================================================================
 *
 * To understand how parameter calculations are made, refer to the formula
 * below for all base parameters, EXP, gold, and drop rate.
 *
 * ---
 *
 * base + (level * base * rate) + (level * flat)
 *
 * Where:
 * - 'base' is the original base value of the parameter found in the database.
 * - 'level' is the previous level of the enemy (minimum: 0).
 * - 'rate' is the rate of growth determined by notetags or Plugin Parameters.
 * - 'flat' is the flat growth value also determined by notetags/parameters.
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
 * === Setup Enemy Level Notetags ===
 *
 * These are the notetags that determine an enemy's level upon creation.
 *
 * ---
 *
 * <Show Level>
 * <Hide Level>
 *
 * - Used for: Enemy Notetags
 * - Lets you show or hide an enemy's level from their name.
 * - This will override the Plugin Parameters => General => Show Enemy Level?
 *   setting.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a static level of 'x' whenever it's created.
 * - Replace 'x' with a numeric value representing its level.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level: x to y>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a level between 'x' and 'y'  whenever the enemy
 *   is created.
 * - Replace 'x' and 'y' with a numeric values representing its level range.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level Variable: x>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a level represented by the value used inside
 *   Game Variable x.
 * - Replace 'x' with the ID of the Game Variable to reference its value.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level: Highest Actor Level>
 * <Level: Highest Party Level>
 *
 * <Level: Average Actor Level>
 * <Level: Average Party Level>
 *
 * <Level: Lowest Actor Level>
 * <Level: Lowest Party Level>
 *
 * - Used for: Enemy Notetags
 * - Sets the base level of this enemy equal to either (respectively:
 *   - The highest level of any actor in the player's party.
 *   - The highest level of any actor in the battling party.
 *   - The average level of any actor in the player's party.
 *   - The average level of any actor in the battling party.
 *   - The lowest level of any actor in the player's party.
 *   - The lowest level of any actor in the battling party.
 * - This will bypass the default level settings and ignore map levels.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Level Bonus: +x>
 * <Level Bonus: -x>
 *
 * - Used for: Enemy
 * - This will add/subtrack the base level decided using the above notetags
 *   with a specific value.
 * - Replace 'x' with a numeric value on how much to adjust the base level by.
 *
 * ---
 *
 * <Level Variance: x>
 *
 * - Used for: Enemy Notetags
 * - This can allow the level range for the enemy to be anywhere from 'x' less
 *   than the base to 'x' more than the base.
 * - Replace 'x' with a numeric value indicating how much level variance there
 *   is from the base level.
 *
 * ---
 *
 * <Positive Level Variance: x>
 * <Negative Level Variance: x>
 *
 * - Used for: Enemy Notetags
 * - This specifies the positive and negative level variances applied to the
 *   base level, specifying a change anywhere between the negative and positive
 *   modifiers to the base level.
 * - Replace 'x' with a numeric value indicating how much level variance there
 *   is from the base level (negatively or positively).
 *
 * ---
 *
 * <Minimum Level: x>
 * <Maximum Level: x>
 *
 * - Used for: Enemy Notetags
 * - These notetags determine the absolute lowest and absolute highest level
 *   the enemy can be after all other modifiers.
 * - Even if the bonus, variance, and manual level changes are applied, the
 *   enemy's level cannot be less than the minimum or larger than the maximum.
 * - Replace 'x' with numeric values representing the limits of the enemy's
 *   level ranges.
 *
 * ---
 *
 * === JavaScript Notetags: Setup Enemy Level ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine dynamic enemy level setup notetags.
 *
 * ---
 *
 * <JS Level: code>
 *
 * - Used for: Enemy Notetags
 * - Sets the enemy's level to a static level determined by code whenever
 *   it's created.
 * - Replace 'code' with JavaScript code to determine the enemy's base level.
 *
 * ---
 *
 * <JS Level Bonus: code>
 *
 * - Used for: Enemy Notetags
 * - This will add/subtrack the base level decided using the above notetags
 *   by a value determined by JavaScript code.
 * - Replace 'code' with JavaScript code to determine the level bonus.
 *
 * ---
 *
 * <JS Level Variance: code>
 *
 * - Used for: Enemy Notetags
 * - This can allow the level range for the enemy determined by JavaScript code
 *   as variance.
 * - Replace 'code' with JavaScript code to determine the level variance.
 *
 * ---
 *
 * <JS Positive Level Variance: code>
 * <JS Negative Level Variance: code>
 *
 * - Used for: Enemy Notetags
 * - This specifies the positive and negative level variances applied to the
 *   base level, specifying a change anywhere between the negative and positive
 *   modifiers to the base level.
 * - Replace 'code' with JavaScript code to determine the level variance.
 *
 * ---
 * 
 * === Enemy Appearance-Related Notetags ===
 * 
 * These notetags allow you to adjust how enemies look based on their level.
 * These settings will always start with level 1 being the default appearance
 * while changing appearances once they reach a specific level.
 * 
 * ---
 * 
 * <Level x Image: filename>
 *
 * - Used for: Enemy Notetags
 * - Once the enemy reaches level 'x' and above, its image will change to
 *   whatever 'filename' is used until it reaches the next appearance setting.
 * - Replace 'x' with a number representing the level required to reach.
 * - Replace 'filename' with the filename of the enemy in the img/enemies/
 *   and/or img/sv_enemies folder.
 * - Insert multiples of these notetags to give them different image settings
 *   throughout various levels.
 * - If multiple notetags are used, the settings will be arranged from lowest
 *   to highest, giving priority to the highest met level.
 * 
 * ---
 * 
 * <Level Images>
 *  x: filename
 *  x: filename
 *  x: filename
 * </Level Images>
 *
 * - Used for: Enemy Notetags
 * - Once the enemy reaches level 'x' and above, its image will change to
 *   whatever 'filename' is used until it reaches the next appearance setting.
 * - Replace 'x' with a number representing the level required to reach.
 * - Replace 'filename' with the filename of the enemy in the img/enemies/
 *   and/or img/sv_enemies folder.
 * - Insert multiple lines of the 'x: filename' portion of the notetag to
 *   designate multiple settings.
 * - If multiple settings are used, the settings will be arranged from lowest
 *   to highest, giving priority to the highest met level.
 * 
 * ---
 *
 * === Map Notetags that Determine Enemy Levels ===
 *
 * The following are notetags that are placed inside of a map's notebox to
 * determine the levels of enemies fought on that map. These notetags cannot
 * bypass the <Level: x> notetags but will take priority over the default
 * Plugin Parameter settings.
 *
 * ---
 *
 * <Enemy Level: x>
 *
 * - Used for: Map Notetags
 * - Sets the levels of the map's enemies to a static level of 'x' whenever
 *   they're created.
 * - Replace 'x' with a numeric value representing its level.
 * - This will bypass the default level settings but cannot bypass any of the
 *   <Level: x> notetags.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Enemy Level: x to y>
 *
 * - Used for: Map Notetags
 * - Sets the map's enemy levels to a level between 'x' and 'y'  whenever they
 *   are created.
 * - Replace 'x' and 'y' with a numeric values representing its level range.
 * - This will bypass the default level settings but cannot bypass any of the
 *   <Level: x> notetags.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * <Enemy Level: Highest Actor Level>
 * <Enemy Level: Highest Party Level>
 *
 * <Enemy Level: Average Actor Level>
 * <Enemy Level: Average Party Level>
 *
 * <Enemy Level: Lowest Actor Level>
 * <Enemy Level: Lowest Party Level>
 *
 * - Used for: Map Notetags
 * - Sets the base level of this map's levels equal to either (respectively:
 *   - The highest level of any actor in the player's party.
 *   - The highest level of any actor in the battling party.
 *   - The average level of any actor in the player's party.
 *   - The average level of any actor in the battling party.
 *   - The lowest level of any actor in the player's party.
 *   - The lowest level of any actor in the battling party.
 * - This will bypass the default level settings but cannot bypass any of the
 *   <Level: x> notetags.
 * - This is affected by the Level Bonus and Level Variance modifiers.
 *
 * ---
 *
 * === JavaScript Notetags: Map Notetags that Determine Enemy Levels ===
 *
 * The following are notetags made for users with JavaScript knowledge to make
 * map-related notetags that determine enemy levels. These notetags cannot
 * bypass the <Level: x> notetags but will take priority over the default
 * Plugin Parameter settings.
 *
 * ---
 *
 * <JS Enemy Level: code>
 *
 * - Used for: Map Notetags
 * - Sets the levels of the map enemies to a static level determined by code
 *   whenever it's created.
 * - Replace 'code' with JavaScript code to determine the enemy's base level.
 *
 * ---
 *
 * === Enemy Level Parameter Notetags ===
 *
 * The growth rate and flat growth amounts can be determined by default in
 * Plugin Parameters => Parameters Growth. However, if you wish for enemies to
 * have special or unique growth, use the following notetags.
 *
 * ---
 *
 * <Growth Rate Per Level>
 *  MaxHP: +x.x
 *  MaxMP: +x.x
 *  ATK: +x.x
 *  DEF: +x.x
 *  MAT: +x.x
 *  MDF: +x.x
 *  AGI: +x.x
 *  LUK: +x.x
 *  EXP: +x.x
 *  Gold: +x.x
 *  Drop: +x.x
 * </Growth Rate Per Level>
 *
 * - Used for: Enemy Notetags
 * - Changes the rate of growth per level for the enemy.
 * - Replace 'x.x' with a positive or negative value on how much to raise the
 *   parameter by for each level relative to the base value.
 *
 * ---
 *
 * <Growth Flat Per Level>
 *  MaxHP: +x.x
 *  MaxMP: +x.x
 *  ATK: +x.x
 *  DEF: +x.x
 *  MAT: +x.x
 *  MDF: +x.x
 *  AGI: +x.x
 *  LUK: +x.x
 *  EXP: +x.x
 *  Gold: +x.x
 *  Drop: +x.x
 * </Growth Flat Per Level>
 *
 * - Used for: Enemy Notetags
 * - Changes the flat growth value per level for the enemy.
 * - Replace 'x.x' with a positive or negative value on how much to raise the
 *   parameter by for each level as a flat value.
 *
 * ---
 *
 * <Static Level Parameters>
 *
 * - Used for: Enemy Notetags
 * - Insert this notetag if you do not wish for the growth modifiers to affect
 *   the enemy and just use the database's parameters as its current parameters
 *   no matter the level.
 *
 * ---
 * 
 * === Enemy Level Skill Requirement Notetags ===
 * 
 * ---
 * 
 * <Enemy Skill id Require Level: x>
 * <Enemy Skill name Require Level: x>
 *
 * - Used for: Enemy Notetags
 * - To make actions for enemies require specific levels, use the above notetag
 *   to define what level the enemy can use the identified skill at.
 * - Replace 'id' with the ID of the skill to assign a level to.
 * - Replace 'name' with the name of the skill to assign a level to.
 * - Insert multiples of this notetag to assign levels to multiple skills.
 * 
 * ---
 *
 * === Enemy Level Change Notetags ===
 *
 * These notetags affect mid-battle level changing effects for enemies.
 *
 * ---
 *
 * <Change Enemy Level: +x>
 * <Change Enemy Level: -x>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the enemy's level by 'x' positively or negatively mid-battle.
 * - This will also alter the enemy's parameters.
 * - Replace 'x' with the amount to raise/drop the level by.
 *
 * ---
 *
 * <Reset Enemy Level>
 *
 * - Used for: Skill, Item Notetags
 * - Resets any level changes made to the enemy from the start of battle.
 *
 * ---
 *
 * <Resist Level Change>
 *
 * - Used for: Enemy, State Notetags
 * - Makes the affected enemy resist level changes.
 *
 * ---
 *
 * === JavaScript Notetags: Enemy Level Change ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * affect mid-battle level changing effects for enemies.
 *
 * ---
 *
 * <JS Change Enemy Level: code>
 *
 * - Used for: Skill, Item Notetags
 * - Changes the enemy's level by a value determined by JavaScript code either
 *   positively or negatively mid-battle.
 * - This will also alter the enemy's parameters.
 * - Replace 'code' with JavaScript code to determine the amount to change the
 *   enemy's level by.
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
 * === Enemy-Related Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Change Level
 * - Change target enemy(ies) level by a value.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to affect.
 *
 *   Level:
 *   - Changes level by this value.
 *   - You may use JavaScript code.
 *
 *   Bypass Resist?:
 *   - Bypasses <Resist Level Change> effect?
 *
 * ---
 *
 * Enemy: Reset Level
 * - Reset target enemy(ies) level to its original level.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to affect.
 *
 *   Bypass Resist?:
 *   - Bypasses <Resist Level Change> effect?
 *
 * ---
 *
 * Enemy: Set Level
 * - Set target enemy(ies) level to a specific value.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to affect.
 *
 *   Level:
 *   - Sets level to this value.
 *   - You may use JavaScript code.
 *
 *   Bypass Resist?:
 *   - Bypasses <Resist Level Change> effect?
 *
 * ---
 * 
 * === Debug-Related Plugin Commands ===
 * 
 * ---
 *
 * DEBUG: View Level Stats
 * - View the stats of specific enemies for each level.
 * - This will appear in the Debug Console.
 *
 *   Enemy Index(es):
 *   - Select which enemy(ies) to view.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings that pertain to enemy levels, letting you
 * adjust the defaults to how some mechanics work as well as the vocabulary
 * shown for the enemy levels.
 *
 * ---
 *
 * Levels
 * 
 *   Level Type:
 *   - Choose the default level type for all enemies.
 *     - Highest Actor Level
 *     - Highest Party Level
 *     - Average Actor Level
 *     - Average Party Level
 *     - Lowest Actor Level
 *     - Lowest Party Level
 *     - Variable x
 *     - Static x
 *   - Replace 'x' with a number if present.
 * 
 *   Minimum Level:
 *   - Default minimum level for enemies.
 * 
 *   Maximum Level:
 *   - Default maximum level for enemies.
 * 
 *   Negative Variance:
 *   - Default negative level variance.
 * 
 *   Positive Variance:
 *   - Default positive level variance.
 *
 * ---
 *
 * Mechanics
 * 
 *   Preserve HP/MP Rates?:
 *   - If level changing, preserve the enemy's HP/MP rates?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Show Enemy Level?:
 *   - Show enemy levels by default? Use the notetags <Show Level> and
 *     <Hide Level> to determine otherwise.
 * 
 *   Enemy Name Format:
 *   - Text format used for enemy names in battle.
 *   - %1 - Level, %2 - Enemy's Name
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Growth Settings
 * ============================================================================
 *
 * Determine how much growth for each parameter enemies gain by default. These
 * growth settings can be relative to the enemy's base value or increases at a
 * flat amount each level. The formula for each increase is the following:
 *
 *   base + (level * base * rate) + (level * flat)
 *
 * Where:
 * - 'base' is the original base value of the parameter found in the database.
 * - 'level' is the previous level of the enemy (minimum: 0).
 * - 'rate' is the rate of growth determined by notetags or Plugin Parameters.
 * - 'flat' is the flat growth value also determined by notetags/parameters.
 *
 * Build around that formula for the best results.
 *
 * ---
 *
 * MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK, EXP, Gold, Drop Rate
 * 
 *   Growth Rate:
 *   - Default rate of growth relative to parameter base value.
 * 
 *   Flat Growth:
 *   - Default flat growth amount based on level.
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
 * Version 1.06: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a bug where this plugin would suppress Elements & Status Menu Core
 *    trait image properties.
 * * Documentation Update!
 * ** Added notes for <Level x Image: filename> and <Level Images>
 * *** If using VisuMZ_1_ElementStatusCore and the enemy uses a custom trait-
 *     related notetag that alters its battler, this notetag will be suppressed
 *     unless it's the original battler name being used.
 * 
 * Version 1.05: June 16, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.04: January 1, 2021
 * * Bug Fixes!
 * ** Average Actor/Party Levels should now work properly. Fix made by Yanfly.
 * 
 * Version 1.03: November 29, 2020
 * * Feature Update!
 * ** Minimum level can no longer go under 1 for calculation purposes. Change
 *    made by Arisu. Anything below is unintended usage.
 * 
 * Version 1.02: October 25, 2020
 * * Bug Fixes!
 * ** Average Actor Level and Average Party Level will now calculate levels
 *    properly if there is only one actor in the party. Fix made by Irina.
 * 
 * Version 1.01: October 18, 2020
 * * Documentation Update!
 * ** Added notetag information for <Enemy Skill id Require Level: x> which
 *    was previously left out by accident. Update made by Yanfly.
 *
 * Version 1.00 Official Release: October 21, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyLevelChange
 * @text Enemy: Change Level
 * @desc Change target enemy(ies) level by a value.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to affect.
 * @default ["0"]
 *
 * @arg Level:eval
 * @text Level
 * @desc Changes level by this value.
 * You may use JavaScript code.
 * @default +1
 *
 * @arg BypassResist:eval
 * @text Bypass Resist?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypasses <Resist Level Change> effect?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyLevelReset
 * @text Enemy: Reset Level
 * @desc Reset target enemy(ies) level to its original level.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to affect.
 * @default ["0"]
 *
 * @arg BypassResist:eval
 * @text Bypass Resist?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypasses <Resist Level Change> effect?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyLevelSet
 * @text Enemy: Set Level
 * @desc Set target enemy(ies) level to a specific value.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to affect.
 * @default ["0"]
 *
 * @arg Level:eval
 * @text Level
 * @desc Sets level to this value.
 * You may use JavaScript code.
 * @default 1
 *
 * @arg BypassResist:eval
 * @text Bypass Resist?
 * @type boolean
 * @on Bypass
 * @off Normal
 * @desc Bypasses <Resist Level Change> effect?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugEnemyLevels
 * @text DEBUG: View Level Stats
 * @desc View the stats of specific enemies for each level.
 * This will appear in the Debug Console.
 *
 * @arg Enemies:arraynum
 * @text Enemy Index(es)
 * @type number[]
 * @min 0
 * @desc Select which enemy(ies) to view.
 * @default ["0"]
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
 * @param EnemyLevel
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
 * @desc General settings regarding enemy levels.
 * @default {"Levels":"","DefaultLevelType:str":"Highest Actor Level","DefaultMinLevel:num":"1","DefaultMaxLevel:num":"99","DefaultNegLevelVariance:num":"2","DefaultPositiveVariance:num":"2","Mechanics":"","PreserveRates:eval":"true","Vocabulary":"","ShowEnemyLv:eval":"true","EnemyNameFmt:str":"Lv%1 %2"}
 *
 * @param Param:struct
 * @text Parameter Growth
 * @type struct<Param>
 * @desc The default parameter growth values for Enemy Levels.
 * @default {"MaxHP":"","MaxHP_Rate:num":"0.32","MaxHP_Flat:num":"0.00","MaxMP":"","MaxMP_Rate:num":"0.16","MaxMP_Flat:num":"0.00","ATK":"","ATK_Rate:num":"0.08","ATK_Flat:num":"0.00","DEF":"","DEF_Rate:num":"0.08","DEF_Flat:num":"0.00","MAT":"","MAT_Rate:num":"0.08","MAT_Flat:num":"0.00","MDF":"","MDF_Rate:num":"0.08","MDF_Flat:num":"0.00","AGI":"","AGI_Rate:num":"0.08","AGI_Flat:num":"0.00","LUK":"","LUK_Rate:num":"0.08","LUK_Flat:num":"0.00","EXP":"","EXP_Rate:num":"0.12","EXP_Flat:num":"0.00","Gold":"","Gold_Rate:num":"0.16","Gold_Flat:num":"0.00","Drop":"","Drop_Rate:num":"0.00","Drop_Flat:num":"0.008"}
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
 * @param Levels
 *
 * @param DefaultLevelType:str
 * @text Level Type
 * @parent Levels
 * @type combo
 * @option Highest Actor Level
 * @option Highest Party Level
 * @option Average Actor Level
 * @option Average Party Level
 * @option Lowest Actor Level
 * @option Lowest Party Level
 * @option Variable x
 * @option Static x
 * @desc Choose the default level type for all enemies.
 * Replace 'x' with a number if present.
 * @default Highest Actor Level
 *
 * @param DefaultMinLevel:num
 * @text Minimum Level
 * @parent Levels
 * @desc Default minimum level for enemies.
 * @default 1
 *
 * @param DefaultMaxLevel:num
 * @text Maximum Level
 * @parent Levels
 * @desc Default maximum level for enemies.
 * @default 99
 *
 * @param DefaultNegLevelVariance:num
 * @text Negative Variance
 * @parent Levels
 * @desc Default negative level variance.
 * @default 2
 *
 * @param DefaultPositiveVariance:num
 * @text Positive Variance
 * @parent Levels
 * @desc Default positive level variance.
 * @default 2
 *
 * @param Mechanics
 *
 * @param PreserveRates:eval
 * @text Preserve HP/MP Rates?
 * @parent Mechanics
 * @type boolean
 * @on Preserve
 * @off Don't
 * @desc If level changing, preserve the enemy's HP/MP rates?
 * @default true
 *
 * @param Vocabulary
 *
 * @param ShowEnemyLv:eval
 * @text Show Enemy Level?
 * @parent Vocabulary
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show enemy levels by default? Use the notetags
 * <Show Level> and <Hide Level> to determine otherwise.
 * @default true
 *
 * @param EnemyNameFmt:str
 * @text Enemy Name Format
 * @parent Vocabulary
 * @desc Text format used for enemy names in battle.
 * %1 - Level, %2 - Enemy's Name
 * @default Lv%1 %2
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Growth Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param MaxHP
 *
 * @param MaxHP_Rate:num
 * @text Growth Rate
 * @parent MaxHP
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.32
 *
 * @param MaxHP_Flat:num
 * @text Flat Growth
 * @parent MaxHP
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param MaxMP
 *
 * @param MaxMP_Rate:num
 * @text Growth Rate
 * @parent MaxMP
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.16
 *
 * @param MaxMP_Flat:num
 * @text Flat Growth
 * @parent MaxMP
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param ATK
 *
 * @param ATK_Rate:num
 * @text Growth Rate
 * @parent ATK
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param ATK_Flat:num
 * @text Flat Growth
 * @parent ATK
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param DEF
 *
 * @param DEF_Rate:num
 * @text Growth Rate
 * @parent DEF
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param DEF_Flat:num
 * @text Flat Growth
 * @parent DEF
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param MAT
 *
 * @param MAT_Rate:num
 * @text Growth Rate
 * @parent MAT
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param MAT_Flat:num
 * @text Flat Growth
 * @parent MAT
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param MDF
 *
 * @param MDF_Rate:num
 * @text Growth Rate
 * @parent MDF
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param MDF_Flat:num
 * @text Flat Growth
 * @parent MDF
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param AGI
 *
 * @param AGI_Rate:num
 * @text Growth Rate
 * @parent AGI
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param AGI_Flat:num
 * @text Flat Growth
 * @parent AGI
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param LUK
 *
 * @param LUK_Rate:num
 * @text Growth Rate
 * @parent LUK
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.08
 *
 * @param LUK_Flat:num
 * @text Flat Growth
 * @parent LUK
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param EXP
 *
 * @param EXP_Rate:num
 * @text Growth Rate
 * @parent EXP
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.12
 *
 * @param EXP_Flat:num
 * @text Flat Growth
 * @parent EXP
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param Gold
 *
 * @param Gold_Rate:num
 * @text Growth Rate
 * @parent Gold
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.16
 *
 * @param Gold_Flat:num
 * @text Flat Growth
 * @parent Gold
 * @desc Default flat growth amount based on level.
 * @default 0.00
 *
 * @param Drop
 *
 * @param Drop_Rate:num
 * @text Growth Rate
 * @parent Drop
 * @desc Default rate of growth relative to parameter base value.
 * @default 0.00
 *
 * @param Drop_Flat:num
 * @text Flat Growth
 * @parent Drop
 * @desc Default flat growth amount based on level.
 * @default 0.008
 *
 */
//=============================================================================

const _0x204e93=_0x48bc;function _0x48bc(_0x177c18,_0x3fb5a1){const _0x2d7668=_0x2d76();return _0x48bc=function(_0x48bcad,_0x1b2dc2){_0x48bcad=_0x48bcad-0x89;let _0xf40dcf=_0x2d7668[_0x48bcad];return _0xf40dcf;},_0x48bc(_0x177c18,_0x3fb5a1);}(function(_0x327e40,_0x430e44){const _0x23994c=_0x48bc,_0x448999=_0x327e40();while(!![]){try{const _0x3b9e84=-parseInt(_0x23994c(0xc4))/0x1*(parseInt(_0x23994c(0xd7))/0x2)+parseInt(_0x23994c(0xde))/0x3+-parseInt(_0x23994c(0x112))/0x4*(-parseInt(_0x23994c(0x120))/0x5)+parseInt(_0x23994c(0xed))/0x6*(-parseInt(_0x23994c(0xeb))/0x7)+-parseInt(_0x23994c(0x8c))/0x8+parseInt(_0x23994c(0xc1))/0x9+parseInt(_0x23994c(0x97))/0xa;if(_0x3b9e84===_0x430e44)break;else _0x448999['push'](_0x448999['shift']());}catch(_0x384ed0){_0x448999['push'](_0x448999['shift']());}}}(_0x2d76,0xf0b6c));function _0x2d76(){const _0x39aed8=['applyItemUserEffectEnemyLevel','mpRate','ARRAYJSON','_originalLevel','ceil','MDF','image','round','_enemyLevel_GrowthRate','Drop_Flat','setup','Game_Enemy_gold','registerCommand','dropItemRateApplyEnemyLevel','jsLevel','ConvertParams','Gold_Rate','createLevelModifiers','EnemyLevelReset','includes','EXP_Rate','_specialBattler','DROP','allMembers','paramBase','1862760MWzmaj','expApplyEnemyLevel','_levelImages','recoverAll','DefaultNegLevelVariance','General','Game_Enemy_exp','hasSetEnemyLevels','ARRAYFUNC','createJS','setMp','9522250sIfsnv','Scene_Boot_onDatabaseLoaded','createLevel','DebugEnemyLevels','defaultEnemyLevel','transform','level','mhp','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','LOWEST\x20PARTY\x20LEVEL','split','meetsSkillConditions','Game_Action_applyItemUserEffect','_levelMax','meetsSkillConditionsEnemyLevel','enemyLevel','LUK_Flat','ARRAYNUM','AGI','EXP_Flat','ATK_Rate','sort','JSON','params','mmp','map','maxLevel','_enemyLevelRequired_SkillID','AVERAGE\x20ACTOR\x20LEVEL','minLevel','length','MAT','VisuMZ_0_CoreEngine','createLevelBonus','battlerName','Drop_Rate','floor','name','paramBaseApplyEnemyLevel','match','some','ATK','6529347KgEBYB','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20value\x20=\x201;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20value\x20=\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Value\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20value;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Weapon-%1-%2','1FyGiMW','createOriginalLevel','MAXMP','getLevelType','ARRAYEVAL','DEF_Flat','enemy','createEnemyLevelParamGrowth','ARRAYSTR','description','ARRAYSTRUCT','Settings','createKeyJS','clamp','DEF_Rate','members','goldApplyEnemyLevel','DEF','MDF_Flat','1719674asoLoB','setLevel','Game_Enemy_dropItemRate','LUK_Rate','trim','max','toUpperCase','2806482xaDFSD','MaxMP_Flat','filter','_enemyLevelRequired_SkillName','setupEnemyLevels','Game_Enemy_name','createBaseLevel','isPlaytest','log','ATK_Flat','otherParamBaseModifiers','applyItemUserEffect','format','7VGuLEe','parameters','6451020JdHCqB','EXP','LOWEST\x20ACTOR\x20LEVEL','Skill-%1-%2','MAT_Rate','PreserveRates','call','Game_Enemy_battlerName','MaxMP_Rate','AVERAGE\x20PARTY\x20LEVEL','traitObjects','isStaticLevelParameters','EnemyNameFmt','drop','item','min','enemyLevelNameFmt','value','status','gold','_levelMin','Game_BattlerBase_meetsSkillConditions','STR','Enemies','exit','createLevelImages','indexOf','MDF_Rate','isResistLevelChange','_levelBattlerName','push','exp','prototype','remove','AGI_Rate','_level','HIGHEST\x20ACTOR\x20LEVEL','4daNkGL','process_VisuMZ_EnemyLevel_JS','onDatabaseLoaded','Level','inBattle','parse','EnemyLevel','RegExp','MAXHP','DefaultMinLevel','_enemyLevel_GrowthFlat','BypassResist','gainLevel','note','2703070FghWPq','refreshLevelImages','createEnemyLevelSkillRequirements','MAT_Flat','process_VisuMZ_EnemyLevel_Notetags','resetLevel','dropItemRate','randomInt','clampLevel','isShowEnemyLevel','DefaultPositiveVariance','parseLevelImageNotetags','AGI_Flat','hpRate','LUK','Item-%1-%2','concat','version','reduce','Game_Enemy_transform','refresh','Game_Enemy_paramBase','setHp'];_0x2d76=function(){return _0x39aed8;};return _0x2d76();}var label=_0x204e93(0x118),tier=tier||0x0,dependencies=[_0x204e93(0xb7)],pluginData=$plugins['filter'](function(_0x53b9b5){const _0xe7365=_0x204e93;return _0x53b9b5[_0xe7365(0xff)]&&_0x53b9b5[_0xe7365(0xcd)][_0xe7365(0x14a)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x204e93(0xcf)]||{},VisuMZ[_0x204e93(0x146)]=function(_0x4e7075,_0x57150b){const _0x2484ce=_0x204e93;for(const _0x242e4c in _0x57150b){if(_0x242e4c[_0x2484ce(0xbe)](/(.*):(.*)/i)){const _0x4b21a4=String(RegExp['$1']),_0x217b9d=String(RegExp['$2'])['toUpperCase']()[_0x2484ce(0xdb)]();let _0x483df6,_0x182325,_0xaad3a8;switch(_0x217b9d){case'NUM':_0x483df6=_0x57150b[_0x242e4c]!==''?Number(_0x57150b[_0x242e4c]):0x0;break;case _0x2484ce(0xa8):_0x182325=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):[],_0x483df6=_0x182325['map'](_0x14513b=>Number(_0x14513b));break;case'EVAL':_0x483df6=_0x57150b[_0x242e4c]!==''?eval(_0x57150b[_0x242e4c]):null;break;case _0x2484ce(0xc8):_0x182325=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):[],_0x483df6=_0x182325[_0x2484ce(0xb0)](_0x25bc49=>eval(_0x25bc49));break;case _0x2484ce(0xad):_0x483df6=_0x57150b[_0x242e4c]!==''?JSON['parse'](_0x57150b[_0x242e4c]):'';break;case _0x2484ce(0x139):_0x182325=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):[],_0x483df6=_0x182325[_0x2484ce(0xb0)](_0x2fb9f3=>JSON['parse'](_0x2fb9f3));break;case'FUNC':_0x483df6=_0x57150b[_0x242e4c]!==''?new Function(JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c])):new Function('return\x200');break;case _0x2484ce(0x94):_0x182325=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):[],_0x483df6=_0x182325[_0x2484ce(0xb0)](_0x27eed5=>new Function(JSON[_0x2484ce(0x117)](_0x27eed5)));break;case _0x2484ce(0x103):_0x483df6=_0x57150b[_0x242e4c]!==''?String(_0x57150b[_0x242e4c]):'';break;case _0x2484ce(0xcc):_0x182325=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):[],_0x483df6=_0x182325[_0x2484ce(0xb0)](_0x2a9413=>String(_0x2a9413));break;case'STRUCT':_0xaad3a8=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):{},_0x483df6=VisuMZ[_0x2484ce(0x146)]({},_0xaad3a8);break;case _0x2484ce(0xce):_0x182325=_0x57150b[_0x242e4c]!==''?JSON[_0x2484ce(0x117)](_0x57150b[_0x242e4c]):[],_0x483df6=_0x182325[_0x2484ce(0xb0)](_0x4371af=>VisuMZ[_0x2484ce(0x146)]({},JSON[_0x2484ce(0x117)](_0x4371af)));break;default:continue;}_0x4e7075[_0x4b21a4]=_0x483df6;}}return _0x4e7075;},(_0x179475=>{const _0x1b9e10=_0x204e93,_0x2fbb87=_0x179475['name'];for(const _0x30b083 of dependencies){if(!Imported[_0x30b083]){alert(_0x1b9e10(0x9f)['format'](_0x2fbb87,_0x30b083)),SceneManager[_0x1b9e10(0x105)]();break;}}const _0xcaf314=_0x179475[_0x1b9e10(0xcd)];if(_0xcaf314[_0x1b9e10(0xbe)](/\[Version[ ](.*?)\]/i)){const _0x8b03d1=Number(RegExp['$1']);_0x8b03d1!==VisuMZ[label][_0x1b9e10(0x131)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x1b9e10(0xea)](_0x2fbb87,_0x8b03d1)),SceneManager[_0x1b9e10(0x105)]());}if(_0xcaf314[_0x1b9e10(0xbe)](/\[Tier[ ](\d+)\]/i)){const _0x585c59=Number(RegExp['$1']);_0x585c59<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x1b9e10(0xea)](_0x2fbb87,_0x585c59,tier)),SceneManager[_0x1b9e10(0x105)]()):tier=Math[_0x1b9e10(0xdc)](_0x585c59,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x1b9e10(0xcf)],_0x179475[_0x1b9e10(0xec)]);})(pluginData),PluginManager[_0x204e93(0x143)](pluginData['name'],'EnemyLevelChange',_0x177501=>{const _0x5d2dbd=_0x204e93;if(!$gameParty[_0x5d2dbd(0x116)]())return;VisuMZ[_0x5d2dbd(0x146)](_0x177501,_0x177501);const _0x1402e6=_0x177501[_0x5d2dbd(0x104)][_0x5d2dbd(0xb0)](_0x5ebfef=>$gameTroop[_0x5d2dbd(0xd3)]()[_0x5ebfef])[_0x5d2dbd(0x10e)](null),_0x504677=_0x177501[_0x5d2dbd(0x115)],_0x4daefe=_0x177501[_0x5d2dbd(0x11d)];for(const _0x544367 of _0x1402e6){if(!_0x544367)continue;if(!_0x4daefe&&_0x544367['isResistLevelChange']())continue;_0x544367[_0x5d2dbd(0x11e)](_0x504677);}}),PluginManager[_0x204e93(0x143)](pluginData[_0x204e93(0xbc)],_0x204e93(0x149),_0x52ad82=>{const _0x295560=_0x204e93;if(!$gameParty[_0x295560(0x116)]())return;VisuMZ[_0x295560(0x146)](_0x52ad82,_0x52ad82);const _0xf5ee2f=_0x52ad82['Enemies']['map'](_0x2570ba=>$gameTroop[_0x295560(0xd3)]()[_0x2570ba])[_0x295560(0x10e)](null),_0x14458e=_0x52ad82[_0x295560(0x11d)];for(const _0x1b0aaf of _0xf5ee2f){if(!_0x1b0aaf)continue;if(!_0x14458e&&_0x1b0aaf[_0x295560(0x109)]())continue;_0x1b0aaf['resetLevel']();}}),PluginManager['registerCommand'](pluginData[_0x204e93(0xbc)],'EnemyLevelSet',_0x1ec936=>{const _0x364376=_0x204e93;if(!$gameParty['inBattle']())return;VisuMZ[_0x364376(0x146)](_0x1ec936,_0x1ec936);const _0x51d147=_0x1ec936[_0x364376(0x104)][_0x364376(0xb0)](_0x30c918=>$gameTroop[_0x364376(0xd3)]()[_0x30c918])[_0x364376(0x10e)](null),_0x146d6f=_0x1ec936[_0x364376(0x115)],_0x17a8af=_0x1ec936[_0x364376(0x11d)];for(const _0x1aaa1d of _0x51d147){if(!_0x1aaa1d)continue;if(!_0x17a8af&&_0x1aaa1d['isResistLevelChange']())continue;_0x1aaa1d[_0x364376(0xd8)](_0x146d6f);}}),PluginManager[_0x204e93(0x143)](pluginData[_0x204e93(0xbc)],_0x204e93(0x9a),_0x3c8c36=>{const _0xb1c613=_0x204e93;if(!$gameParty[_0xb1c613(0x116)]())return;if(!$gameTemp['isPlaytest']())return;VisuMZ[_0xb1c613(0x146)](_0x3c8c36,_0x3c8c36);const _0x5de940=_0x3c8c36['Enemies']['map'](_0x5375f4=>$gameTroop[_0xb1c613(0xd3)]()[_0x5375f4])['remove'](null);for(const _0x187ec7 of _0x5de940){if(!_0x187ec7)continue;const _0x5ee0e8=[];for(let _0x259253=_0x187ec7['minLevel']();_0x259253<=_0x187ec7[_0xb1c613(0xb1)]();_0x259253++){const _0x36fb5d=_0x187ec7[_0xb1c613(0xca)](),_0x3ca697=_0x259253-0x1,_0x324cb3={'MaxHP':Math[_0xb1c613(0x13e)](_0x187ec7[_0xb1c613(0xbd)](0x0,_0x3ca697,_0x36fb5d['params'][0x0])),'MaxMP':Math['round'](_0x187ec7['paramBaseApplyEnemyLevel'](0x1,_0x3ca697,_0x36fb5d['params'][0x1])),'ATK':Math[_0xb1c613(0x13e)](_0x187ec7[_0xb1c613(0xbd)](0x2,_0x3ca697,_0x36fb5d[_0xb1c613(0xae)][0x2])),'DEF':Math['round'](_0x187ec7[_0xb1c613(0xbd)](0x3,_0x3ca697,_0x36fb5d['params'][0x3])),'MAT':Math['round'](_0x187ec7[_0xb1c613(0xbd)](0x4,_0x3ca697,_0x36fb5d['params'][0x4])),'MDF':Math[_0xb1c613(0x13e)](_0x187ec7[_0xb1c613(0xbd)](0x5,_0x3ca697,_0x36fb5d['params'][0x5])),'AGI':Math[_0xb1c613(0x13e)](_0x187ec7[_0xb1c613(0xbd)](0x6,_0x3ca697,_0x36fb5d[_0xb1c613(0xae)][0x6])),'LUK':Math[_0xb1c613(0x13e)](_0x187ec7['paramBaseApplyEnemyLevel'](0x7,_0x3ca697,_0x36fb5d[_0xb1c613(0xae)][0x7])),'Exp':Math[_0xb1c613(0x13e)](_0x187ec7[_0xb1c613(0x8d)](_0x36fb5d[_0xb1c613(0x10c)],_0x3ca697)),'Gold':Math[_0xb1c613(0x13e)](_0x187ec7[_0xb1c613(0xd4)](_0x36fb5d['gold'],_0x3ca697)),'Drop':Math[_0xb1c613(0x13e)](_0x187ec7['dropItemRateApplyEnemyLevel'](0x1,_0x3ca697)*0x64)+'%'};_0x5ee0e8[_0x259253]=_0x324cb3;}console['log'](_0x187ec7['name']()+'\x27s\x20Base\x20Parameters\x20for\x20Each\x20Level'),console['table'](_0x5ee0e8);}}),VisuMZ['EnemyLevel']['RegExp']={'jsLevel':/<JS LEVEL: (.*)>/i},VisuMZ[_0x204e93(0x118)][_0x204e93(0x98)]=Scene_Boot[_0x204e93(0x10d)][_0x204e93(0x114)],Scene_Boot[_0x204e93(0x10d)][_0x204e93(0x114)]=function(){const _0x4cfba8=_0x204e93;VisuMZ[_0x4cfba8(0x118)]['Scene_Boot_onDatabaseLoaded'][_0x4cfba8(0xf3)](this),this[_0x4cfba8(0x124)]();},Scene_Boot[_0x204e93(0x10d)][_0x204e93(0x124)]=function(){const _0x2148db=_0x204e93;this[_0x2148db(0x113)]();},VisuMZ['EnemyLevel']['JS']={},Scene_Boot[_0x204e93(0x10d)][_0x204e93(0x113)]=function(){const _0x101887=_0x204e93,_0x43daa3=$dataActors[_0x101887(0x130)]($dataClasses,$dataSkills,$dataItems,$dataWeapons,$dataArmors,$dataEnemies,$dataStates);for(const _0x1a0bf3 of _0x43daa3){if(!_0x1a0bf3)continue;const _0x58e793=_0x101887(0x145),_0x55f6af=VisuMZ[_0x101887(0x118)][_0x101887(0x119)][_0x101887(0x145)];VisuMZ[_0x101887(0x118)][_0x101887(0x95)](_0x1a0bf3,_0x58e793,_0x55f6af);}},VisuMZ[_0x204e93(0x118)][_0x204e93(0x95)]=function(_0x1243a0,_0x318238,_0x451383){const _0x24aba3=_0x204e93,_0x4a8355=_0x1243a0[_0x24aba3(0x11f)];if(_0x4a8355[_0x24aba3(0xbe)](_0x451383)){const _0x196846=String(RegExp['$1']),_0x134bf8=_0x24aba3(0xc2)[_0x24aba3(0xea)](_0x196846),_0x13ffe9=VisuMZ[_0x24aba3(0x118)][_0x24aba3(0xd0)](_0x1243a0,_0x318238);VisuMZ[_0x24aba3(0x118)]['JS'][_0x13ffe9]=new Function(_0x134bf8);}},VisuMZ[_0x204e93(0x118)][_0x204e93(0xd0)]=function(_0x5e71fc,_0xa1ff4a){const _0x4cee65=_0x204e93;if(VisuMZ[_0x4cee65(0xd0)])return VisuMZ[_0x4cee65(0xd0)](_0x5e71fc,_0xa1ff4a);let _0x570144='';if($dataActors[_0x4cee65(0x14a)](_0x5e71fc))_0x570144='Actor-%1-%2'['format'](_0x5e71fc['id'],_0xa1ff4a);if($dataClasses[_0x4cee65(0x14a)](_0x5e71fc))_0x570144='Class-%1-%2'[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);if($dataSkills[_0x4cee65(0x14a)](_0x5e71fc))_0x570144=_0x4cee65(0xf0)[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);if($dataItems['includes'](_0x5e71fc))_0x570144=_0x4cee65(0x12f)[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);if($dataWeapons['includes'](_0x5e71fc))_0x570144=_0x4cee65(0xc3)[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);if($dataArmors[_0x4cee65(0x14a)](_0x5e71fc))_0x570144='Armor-%1-%2'[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);if($dataEnemies[_0x4cee65(0x14a)](_0x5e71fc))_0x570144='Enemy-%1-%2'[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);if($dataStates[_0x4cee65(0x14a)](_0x5e71fc))_0x570144='State-%1-%2'[_0x4cee65(0xea)](_0x5e71fc['id'],_0xa1ff4a);return _0x570144;},TextManager[_0x204e93(0xfd)]=VisuMZ['EnemyLevel'][_0x204e93(0xcf)][_0x204e93(0x91)][_0x204e93(0xf9)],VisuMZ[_0x204e93(0x118)]['Game_Action_applyItemUserEffect']=Game_Action[_0x204e93(0x10d)][_0x204e93(0xe9)],Game_Action[_0x204e93(0x10d)][_0x204e93(0xe9)]=function(_0x42f25a){const _0x4532ca=_0x204e93;VisuMZ[_0x4532ca(0x118)][_0x4532ca(0xa3)][_0x4532ca(0xf3)](this,_0x42f25a),this[_0x4532ca(0x137)](_0x42f25a);},Game_Action[_0x204e93(0x10d)][_0x204e93(0x137)]=function(_0x322f5b){const _0x1f2f2f=_0x204e93;if(!_0x322f5b)return;if(!_0x322f5b['isEnemy']())return;if(_0x322f5b[_0x1f2f2f(0x109)]())return;const _0x27ad3c=this[_0x1f2f2f(0xfb)]()[_0x1f2f2f(0x11f)];if(_0x27ad3c['match'](/<CHANGE ENEMY LEVEL: ([\+\-]\d+)>/i))_0x322f5b[_0x1f2f2f(0x11e)](Number(RegExp['$1']));else{if(_0x27ad3c[_0x1f2f2f(0xbe)](/<JS CHANGE ENEMY LEVEL: (.*)>/i))try{_0x322f5b[_0x1f2f2f(0x11e)](eval(RegExp['$1'])||0x0);}catch(_0x204219){if($gameTemp[_0x1f2f2f(0xe5)]())console['log'](_0x204219);}}_0x27ad3c[_0x1f2f2f(0xbe)](/<RESET ENEMY LEVEL>/i)&&_0x322f5b['resetLevel']();},VisuMZ[_0x204e93(0x118)][_0x204e93(0x102)]=Game_BattlerBase[_0x204e93(0x10d)][_0x204e93(0xa2)],Game_BattlerBase['prototype'][_0x204e93(0xa2)]=function(_0x1a4be6){const _0xc6c7c8=_0x204e93;return this[_0xc6c7c8(0xa5)](_0x1a4be6)&&VisuMZ[_0xc6c7c8(0x118)]['Game_BattlerBase_meetsSkillConditions'][_0xc6c7c8(0xf3)](this,_0x1a4be6);},Game_BattlerBase[_0x204e93(0x10d)][_0x204e93(0xa5)]=function(_0x7e7e15){return!![];},Object['defineProperty'](Game_Enemy[_0x204e93(0x10d)],_0x204e93(0x9d),{'get':function(){return this['getLevel']();},'configurable':!![]}),Game_Enemy[_0x204e93(0x10d)]['getLevel']=function(){const _0x4dcaab=_0x204e93;return this['_level']=this['_level']||this[_0x4dcaab(0x99)](),this[_0x4dcaab(0x128)]();},VisuMZ[_0x204e93(0x118)]['Game_Enemy_setup']=Game_Enemy['prototype'][_0x204e93(0x141)],Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x141)]=function(_0x166f92,_0x2f9426,_0x1d130b){const _0x2a45cd=_0x204e93;VisuMZ['EnemyLevel']['Game_Enemy_setup'][_0x2a45cd(0xf3)](this,_0x166f92,_0x2f9426,_0x1d130b),this[_0x2a45cd(0xe2)]();},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xe2)]=function(){const _0x1205eb=_0x204e93;this[_0x1205eb(0x99)](),this[_0x1205eb(0x106)](),this[_0x1205eb(0xcb)](![]),this['createEnemyLevelSkillRequirements'](![]),this[_0x1205eb(0x134)](),this[_0x1205eb(0x8f)]();},Game_Enemy['prototype'][_0x204e93(0x99)]=function(){const _0xe355e6=_0x204e93;this['createBaseLevel'](),this[_0xe355e6(0xb8)](),this[_0xe355e6(0x148)](),this['createOriginalLevel']();},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xe4)]=function(){const _0x3da391=_0x204e93,_0x3c9666=this[_0x3da391(0xca)]()[_0x3da391(0x11f)];this[_0x3da391(0x110)]=this[_0x3da391(0x9b)]();const _0x39cc28=VisuMZ[_0x3da391(0x118)][_0x3da391(0xd0)](this['enemy'](),_0x3da391(0x145));if(_0x3c9666[_0x3da391(0xbe)](/<LEVEL: (\d+)>/i))this[_0x3da391(0x110)]=Number(RegExp['$1'])||0x1;else{if(_0x3c9666[_0x3da391(0xbe)](/<LEVEL: (\d+) TO (\d+)>/i)){const _0x56f518=Number(RegExp['$1']),_0x11f5c3=Number(RegExp['$2']),_0x21f12d=Math['min'](_0x56f518,_0x11f5c3),_0x1773a6=Math[_0x3da391(0xdc)](_0x56f518,_0x11f5c3);this['_level']=Math[_0x3da391(0xbb)](_0x21f12d+Math[_0x3da391(0x127)](_0x1773a6-_0x21f12d+0x1));}else{if(_0x3c9666[_0x3da391(0xbe)](/LEVEL VARIABLE: (\d+)/i))this[_0x3da391(0x110)]=$gameVariables[_0x3da391(0xfe)](Number(RegExp['$1'])||0x1);else{if(_0x3c9666[_0x3da391(0xbe)](/<LEVEL: (.*)>/i)){const _0xb43cd7=String(RegExp['$1'])[_0x3da391(0xdd)]()[_0x3da391(0xdb)]();this['_level']=$gameParty[_0x3da391(0xc7)](_0xb43cd7)||0x1;}else{if(VisuMZ[_0x3da391(0x118)]['JS'][_0x39cc28])this['_level']=Math[_0x3da391(0xbb)](VisuMZ[_0x3da391(0x118)]['JS'][_0x39cc28]['call'](this,this,this))||0x1;else $gameMap&&$gameMap[_0x3da391(0x93)]()&&(this[_0x3da391(0x110)]=$gameMap[_0x3da391(0xa6)]());}}}}},Game_Enemy['prototype'][_0x204e93(0x9b)]=function(){const _0x2a3314=_0x204e93,_0x6fda1a=VisuMZ['EnemyLevel'][_0x2a3314(0xcf)]['General']['DefaultLevelType'][_0x2a3314(0xdd)]()[_0x2a3314(0xdb)]();if(_0x6fda1a[_0x2a3314(0xbe)](/STATIC (\d+)/i))return Number(RegExp['$1'])||0x1;else{if(_0x6fda1a[_0x2a3314(0xbe)](/VARIABLE (\d+)/i))return $gameVariables[_0x2a3314(0xfe)](Number(RegExp['$1'])||0x1);else return _0x6fda1a[_0x2a3314(0xbe)](/(ACTOR|PARTY) LEVEL/i)?$gameParty[_0x2a3314(0xc7)](_0x6fda1a):0x1;}},Game_Enemy['prototype'][_0x204e93(0xb8)]=function(){const _0xc2fb00=_0x204e93,_0x5997f5=this[_0xc2fb00(0xca)]()[_0xc2fb00(0x11f)];if(_0x5997f5[_0xc2fb00(0xbe)](/<LEVEL BONUS: ([\+\-]\d+)>/i))this[_0xc2fb00(0x110)]+=Number(RegExp['$1']);else{if(_0x5997f5['match'](/<JS LEVEL BONUS: (.*)>/i))try{this[_0xc2fb00(0x110)]+=Math['floor'](Number(eval(RegExp['$1'])||0x0));}catch(_0x29d6f2){if($gameTemp[_0xc2fb00(0xe5)]())console[_0xc2fb00(0xe6)](_0x29d6f2);}}},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x148)]=function(){const _0x4c201c=_0x204e93;let _0x25df4a=VisuMZ['EnemyLevel'][_0x4c201c(0xcf)]['General'][_0x4c201c(0x90)]*-0x1,_0x11988a=VisuMZ['EnemyLevel'][_0x4c201c(0xcf)][_0x4c201c(0x91)][_0x4c201c(0x12a)];const _0x507751=this[_0x4c201c(0xca)]()[_0x4c201c(0x11f)];if(_0x507751[_0x4c201c(0xbe)](/<LEVEL VARIANCE: (\d+)>/i))_0x25df4a=-0x1*Number(RegExp['$1']),_0x11988a=Number(RegExp['$1']);else{if(_0x507751[_0x4c201c(0xbe)](/<JS LEVEL VARIANCE: (.*)>/i)){let _0x1384c8=0x0;try{_0x1384c8=Math[_0x4c201c(0xbb)](eval(RegExp['$1'])||0x0);}catch(_0xa28d79){if($gameTemp[_0x4c201c(0xe5)]())console[_0x4c201c(0xe6)](_0xa28d79);}_0x25df4a=-0x1*_0x1384c8,_0x11988a=_0x1384c8;}}if(_0x507751[_0x4c201c(0xbe)](/<NEGATIVE LEVEL VARIANCE: (\d+)>/i))_0x25df4a=-0x1*Number(RegExp['$1']);else{if(_0x507751[_0x4c201c(0xbe)](/<JS NEGATIVE LEVEL VARIANCE: (.*)>/i))try{_0x25df4a=-0x1*Math[_0x4c201c(0xbb)](eval(RegExp['$1'])||0x0);}catch(_0x45dfb6){if($gameTemp[_0x4c201c(0xe5)]())console[_0x4c201c(0xe6)](_0x45dfb6);}}if(_0x507751[_0x4c201c(0xbe)](/<POSITIVE LEVEL VARIANCE: (\d+)>/i))_0x11988a=Number(RegExp['$1']);else{if(_0x507751[_0x4c201c(0xbe)](/<JS POSITIVE LEVEL VARIANCE: (.*)>/i))try{_0x11988a=Math[_0x4c201c(0xbb)](eval(RegExp['$1'])||0x0);}catch(_0x36b5c5){if($gameTemp['isPlaytest']())console['log'](_0x36b5c5);}}if(_0x25df4a>_0x11988a)_0x11988a=_0x25df4a;this[_0x4c201c(0x110)]+=Math[_0x4c201c(0xbb)](_0x25df4a+Math['randomInt'](_0x11988a-_0x25df4a+0x1));},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xc5)]=function(){const _0x47d2fa=_0x204e93;this[_0x47d2fa(0x13a)]=this[_0x47d2fa(0x110)];},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x125)]=function(){const _0x57e767=_0x204e93;this[_0x57e767(0xd8)](this[_0x57e767(0x13a)]);},Game_Enemy['prototype'][_0x204e93(0x128)]=function(){const _0x1edd1f=_0x204e93;if(this['_level']===undefined)this['createLevel']();return this['_level']=this[_0x1edd1f(0x110)][_0x1edd1f(0xd1)](this[_0x1edd1f(0xb4)](),this[_0x1edd1f(0xb1)]()),this['_level'];},Game_Enemy[_0x204e93(0x10d)]['minLevel']=function(){const _0xf407f3=_0x204e93;if(this[_0xf407f3(0x101)]!==undefined)return this['_levelMin'];const _0x4fd736=this['enemy']()[_0xf407f3(0x11f)],_0x423873=this;this['_levelMin']=VisuMZ[_0xf407f3(0x118)]['Settings'][_0xf407f3(0x91)][_0xf407f3(0x11b)];if(_0x4fd736['match'](/<MINIMUM LEVEL: (\d+)>/i))this[_0xf407f3(0x101)]=Number(RegExp['$1'])||0x1;else{if(_0x4fd736[_0xf407f3(0xbe)](/<JS MINIMUM LEVEL: (.*)>/i))try{this[_0xf407f3(0x101)]=Math[_0xf407f3(0xbb)](eval(RegExp['$1'])||0x1);}catch(_0x504605){if($gameTemp[_0xf407f3(0xe5)]())console[_0xf407f3(0xe6)](_0x504605);}}return this[_0xf407f3(0x101)]=Math['max'](0x1,this['_levelMin']),this[_0xf407f3(0x101)];},Game_Enemy['prototype']['maxLevel']=function(){const _0x30b0d3=_0x204e93;if(this[_0x30b0d3(0xa4)]!==undefined)return this[_0x30b0d3(0xa4)];const _0x252999=this[_0x30b0d3(0xca)]()[_0x30b0d3(0x11f)],_0x59fdf5=this;this[_0x30b0d3(0xa4)]=VisuMZ[_0x30b0d3(0x118)][_0x30b0d3(0xcf)][_0x30b0d3(0x91)]['DefaultMaxLevel'];if(_0x252999[_0x30b0d3(0xbe)](/<MAXIMUM LEVEL: (\d+)>/i))this['_levelMax']=Number(RegExp['$1'])||0x1;else{if(_0x252999[_0x30b0d3(0xbe)](/<JS MAXIMUM LEVEL: (.*)>/i))try{this[_0x30b0d3(0xa4)]=Math[_0x30b0d3(0xbb)](eval(RegExp['$1'])||0x1);}catch(_0x322d2d){if($gameTemp[_0x30b0d3(0xe5)]())console['log'](_0x322d2d);}}return this[_0x30b0d3(0xa4)];},Game_Enemy['prototype'][_0x204e93(0xd8)]=function(_0x5a2362){const _0x3621a8=_0x204e93;if(this[_0x3621a8(0x110)]===undefined)this[_0x3621a8(0x99)]();const _0x2f832e=this[_0x3621a8(0x12d)](),_0x51f979=this[_0x3621a8(0x138)]();this[_0x3621a8(0x110)]=_0x5a2362,this[_0x3621a8(0x128)](),this[_0x3621a8(0x121)](),VisuMZ[_0x3621a8(0x118)][_0x3621a8(0xcf)]['General'][_0x3621a8(0xf2)]?(this[_0x3621a8(0x136)](Math[_0x3621a8(0x13b)](this[_0x3621a8(0x9e)]*_0x2f832e)),this[_0x3621a8(0x96)](Math[_0x3621a8(0x13b)](this[_0x3621a8(0xaf)]*_0x51f979))):this['refresh']();},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x11e)]=function(_0x14215e){const _0x3fb230=_0x204e93;if(this['_level']===undefined)this[_0x3fb230(0x99)]();this['setLevel'](this['_level']+_0x14215e);},Game_Enemy['prototype'][_0x204e93(0x109)]=function(){const _0x3f32a4=_0x204e93;return this[_0x3f32a4(0xf7)]()[_0x3f32a4(0xbf)](_0x552eb8=>_0x552eb8&&_0x552eb8[_0x3f32a4(0x11f)][_0x3f32a4(0xbe)](/<RESIST LEVEL CHANGE>/i));},VisuMZ['EnemyLevel'][_0x204e93(0xe3)]=Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xbc)],Game_Enemy['prototype'][_0x204e93(0xbc)]=function(){const _0x1f92cc=_0x204e93,_0x2fec8f=VisuMZ[_0x1f92cc(0x118)]['Game_Enemy_name'][_0x1f92cc(0xf3)](this);if(!this[_0x1f92cc(0x129)]())return _0x2fec8f;return TextManager['enemyLevelNameFmt'][_0x1f92cc(0xea)](this[_0x1f92cc(0x9d)],_0x2fec8f);},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x129)]=function(){const _0x1c1c4c=_0x204e93,_0x368f93=this[_0x1c1c4c(0xca)]()['note'];if(_0x368f93[_0x1c1c4c(0xbe)](/<SHOW LEVEL>/i))return!![];else return _0x368f93['match'](/<HIDE LEVEL>/i)?![]:VisuMZ[_0x1c1c4c(0x118)][_0x1c1c4c(0xcf)]['General']['ShowEnemyLv'];},Game_Enemy['prototype'][_0x204e93(0xf8)]=function(){const _0x3d378d=_0x204e93;return this[_0x3d378d(0xca)]()&&this[_0x3d378d(0xca)]()[_0x3d378d(0x11f)][_0x3d378d(0xbe)](/<STATIC LEVEL PARAMETERS>/i);},VisuMZ[_0x204e93(0x118)][_0x204e93(0x135)]=Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x8b)],Game_Enemy['prototype'][_0x204e93(0x8b)]=function(_0x19d5d0){const _0x17eb10=_0x204e93,_0x147079=VisuMZ['EnemyLevel']['Game_Enemy_paramBase'][_0x17eb10(0xf3)](this,_0x19d5d0),_0x1ca177=this[_0x17eb10(0xe8)](),_0x2ed942=this[_0x17eb10(0x9d)]-0x1;return this['paramBaseApplyEnemyLevel'](_0x19d5d0,_0x2ed942,_0x147079+_0x1ca177);},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xe8)]=function(_0xb03c14){return 0x0;},Game_Enemy[_0x204e93(0x10d)]['createLevelImages']=function(){const _0x541193=_0x204e93;this['_levelImages']=[{'level':0x1,'image':this[_0x541193(0xca)]()['battlerName']}],this[_0x541193(0x12b)](),this[_0x541193(0x8e)][_0x541193(0xac)]((_0x3dc284,_0x3f7d50)=>_0x3dc284[_0x541193(0x9d)]-_0x3f7d50[_0x541193(0x9d)]),this[_0x541193(0x121)]();},Game_Enemy['prototype'][_0x204e93(0x12b)]=function(){const _0x54989f=_0x204e93,_0x3a8070=this[_0x54989f(0xca)]()[_0x54989f(0x11f)],_0x211b74=_0x3a8070[_0x54989f(0xbe)](/<LEVEL[ ](\d+)[ ]IMAGE:[ ](.*)>/gi);if(_0x211b74)for(const _0x194b84 of _0x211b74){if(!_0x194b84)continue;_0x194b84[_0x54989f(0xbe)](/<LEVEL[ ](\d+)[ ]IMAGE:[ ](.*)>/i);const _0x43024a=Number(RegExp['$1'])||0x1,_0x14389d=String(RegExp['$2']);this[_0x54989f(0x8e)][_0x54989f(0x10b)]({'level':_0x43024a,'image':_0x14389d});}if(_0x3a8070[_0x54989f(0xbe)](/<LEVEL (?:IMAGE|IMAGES)>\s*([\s\S]*)\s*<\/LEVEL (?:IMAGE|IMAGES)>/i)){const _0x3f0e11=String(RegExp['$1'])[_0x54989f(0xa1)](/[\r\n]+/);for(const _0x317286 of _0x3f0e11){if(!_0x317286)continue;if(_0x317286[_0x54989f(0xbe)](/(\d+):[ ](.*)/i)){const _0x3d3d33=Number(RegExp['$1'])||0x1,_0x4126b3=String(RegExp['$2']);this[_0x54989f(0x8e)][_0x54989f(0x10b)]({'level':_0x3d3d33,'image':_0x4126b3});}}}},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x121)]=function(){const _0x1ad515=_0x204e93;this['_levelBattlerName']=this[_0x1ad515(0xca)]()[_0x1ad515(0xb9)];for(const _0x241c0b of this[_0x1ad515(0x8e)]){if(!_0x241c0b)continue;this[_0x1ad515(0x110)]>=_0x241c0b['level']&&(this[_0x1ad515(0x10a)]=_0x241c0b[_0x1ad515(0x13d)]);}},VisuMZ[_0x204e93(0x118)]['Game_Enemy_battlerName']=Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xb9)],Game_Enemy[_0x204e93(0x10d)]['battlerName']=function(){const _0x4618ad=_0x204e93;if(this[_0x4618ad(0x14c)]!==undefined&&this[_0x4618ad(0x14c)]['name']!==this[_0x4618ad(0xca)]()[_0x4618ad(0xb9)]){return VisuMZ[_0x4618ad(0x118)][_0x4618ad(0xf4)][_0x4618ad(0xf3)](this);;}return this[_0x4618ad(0x10a)]||VisuMZ[_0x4618ad(0x118)][_0x4618ad(0xf4)][_0x4618ad(0xf3)](this);},Game_Enemy['prototype'][_0x204e93(0xcb)]=function(_0x1ebde6){const _0x155e4e=_0x204e93;if(_0x1ebde6&&this[_0x155e4e(0x13f)]&&this['_enemyLevel_GrowthFlat'])return;const _0x4adbb3=VisuMZ['EnemyLevel'][_0x155e4e(0xcf)]['Param'];this['_enemyLevel_GrowthRate']={0x0:_0x4adbb3['MaxHP_Rate'],0x1:_0x4adbb3[_0x155e4e(0xf5)],0x2:_0x4adbb3[_0x155e4e(0xab)],0x3:_0x4adbb3[_0x155e4e(0xd2)],0x4:_0x4adbb3[_0x155e4e(0xf1)],0x5:_0x4adbb3[_0x155e4e(0x108)],0x6:_0x4adbb3[_0x155e4e(0x10f)],0x7:_0x4adbb3[_0x155e4e(0xda)],'exp':_0x4adbb3[_0x155e4e(0x14b)],'gold':_0x4adbb3[_0x155e4e(0x147)],'drop':_0x4adbb3[_0x155e4e(0xba)]},this[_0x155e4e(0x11c)]={0x0:_0x4adbb3['MaxHP_Flat'],0x1:_0x4adbb3[_0x155e4e(0xdf)],0x2:_0x4adbb3[_0x155e4e(0xe7)],0x3:_0x4adbb3[_0x155e4e(0xc9)],0x4:_0x4adbb3[_0x155e4e(0x123)],0x5:_0x4adbb3[_0x155e4e(0xd6)],0x6:_0x4adbb3[_0x155e4e(0x12c)],0x7:_0x4adbb3[_0x155e4e(0xa7)],'exp':_0x4adbb3[_0x155e4e(0xaa)],'gold':_0x4adbb3['Gold_Flat'],'drop':_0x4adbb3[_0x155e4e(0x140)]};const _0x5deb10=[_0x155e4e(0x11a),_0x155e4e(0xc6),_0x155e4e(0xc0),_0x155e4e(0xd5),_0x155e4e(0xb6),_0x155e4e(0x13c),_0x155e4e(0xa9),_0x155e4e(0x12e),_0x155e4e(0xee),'GOLD',_0x155e4e(0x89)],_0x35420a=this[_0x155e4e(0xca)]()[_0x155e4e(0x11f)];if(_0x35420a[_0x155e4e(0xbe)](/<GROWTH RATE PER LEVEL>\s*([\s\S]*)\s*<\/GROWTH RATE PER LEVEL>/i)){const _0x57a16e=String(RegExp['$1'])[_0x155e4e(0xa1)](/[\r\n]+/);for(const _0x4703dd of _0x57a16e){if(_0x4703dd[_0x155e4e(0xbe)](/(.*): (.*)/i)){const _0x29e86b=String(RegExp['$1'])['toUpperCase']()[_0x155e4e(0xdb)](),_0x30895f=Number(eval(RegExp['$2'])||0x0),_0x3501dd=_0x5deb10[_0x155e4e(0x107)](_0x29e86b);if(_0x3501dd<0x8)this['_enemyLevel_GrowthRate'][_0x3501dd]=_0x30895f;else{if(_0x3501dd===0x8)this[_0x155e4e(0x13f)][_0x155e4e(0x10c)]=_0x30895f;else{if(_0x3501dd===0x9)this['_enemyLevel_GrowthRate']['gold']=_0x30895f;else{if(_0x3501dd===0xa)this[_0x155e4e(0x13f)][_0x155e4e(0xfa)]=_0x30895f;else continue;}}}}}}if(_0x35420a[_0x155e4e(0xbe)](/<GROWTH FLAT PER LEVEL>\s*([\s\S]*)\s*<\/GROWTH FLAT PER LEVEL>/i)){const _0x45084a=String(RegExp['$1'])[_0x155e4e(0xa1)](/[\r\n]+/);for(const _0x22190b of _0x45084a){if(_0x22190b[_0x155e4e(0xbe)](/(.*): (.*)/i)){const _0x6db28c=String(RegExp['$1'])[_0x155e4e(0xdd)]()[_0x155e4e(0xdb)](),_0x3d122d=Number(eval(RegExp['$2'])||0x0),_0x3e8a46=_0x5deb10[_0x155e4e(0x107)](_0x6db28c);if(_0x3e8a46<0x8)this['_enemyLevel_GrowthFlat'][_0x3e8a46]=_0x3d122d;else{if(_0x3e8a46===0x8)this['_enemyLevel_GrowthFlat'][_0x155e4e(0x10c)]=_0x3d122d;else{if(_0x3e8a46===0x9)this[_0x155e4e(0x11c)]['gold']=_0x3d122d;else{if(_0x3e8a46===0xa)this[_0x155e4e(0x11c)][_0x155e4e(0xfa)]=_0x3d122d;else continue;}}}}}}},Game_Enemy['prototype'][_0x204e93(0xbd)]=function(_0xad86b5,_0x3b929a,_0xd43d84){const _0x37a63a=_0x204e93;if(this[_0x37a63a(0xf8)]())return _0xd43d84;this[_0x37a63a(0xcb)](!![]);const _0x31422c=this;let _0x55020b=_0xd43d84;const _0x59375d=this[_0x37a63a(0x13f)][_0xad86b5],_0x2f0083=this['_enemyLevel_GrowthFlat'][_0xad86b5];return _0x55020b=_0xd43d84+_0x3b929a*_0xd43d84*_0x59375d+_0x3b929a*_0x2f0083,_0x55020b;},VisuMZ['EnemyLevel'][_0x204e93(0x92)]=Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x10c)],Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x10c)]=function(){const _0x1fb333=_0x204e93,_0x3945a0=VisuMZ['EnemyLevel'][_0x1fb333(0x92)][_0x1fb333(0xf3)](this),_0x5c643d=this[_0x1fb333(0x9d)]-0x1;return this['expApplyEnemyLevel'](_0x3945a0,_0x5c643d);},Game_Enemy['prototype'][_0x204e93(0x8d)]=function(_0x548e4e,_0x3f2986){const _0x819421=_0x204e93;if(this[_0x819421(0xf8)]())return _0x548e4e;this[_0x819421(0xcb)](!![]);const _0x1b8405=this;let _0xa03f87=_0x548e4e;const _0x11dcbf=this[_0x819421(0x13f)][_0x819421(0x10c)],_0x22e64c=this[_0x819421(0x11c)][_0x819421(0x10c)];return _0xa03f87=_0x548e4e+_0x3f2986*_0x548e4e*_0x11dcbf+_0x3f2986*_0x22e64c,Math[_0x819421(0x13e)](_0xa03f87);},VisuMZ[_0x204e93(0x118)][_0x204e93(0x142)]=Game_Enemy[_0x204e93(0x10d)]['gold'],Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x100)]=function(){const _0x458b27=_0x204e93,_0x1e4799=VisuMZ[_0x458b27(0x118)]['Game_Enemy_gold']['call'](this),_0x16ab90=this[_0x458b27(0x9d)]-0x1;return this[_0x458b27(0xd4)](_0x1e4799,_0x16ab90);},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0xd4)]=function(_0x163873,_0x2f409f){const _0x3d4937=_0x204e93;if(this['isStaticLevelParameters']())return _0x163873;this[_0x3d4937(0xcb)](!![]);const _0x64fd3d=this;let _0x2836ec=_0x163873;const _0x4835e5=this['_enemyLevel_GrowthRate']['gold'],_0x222c4f=this[_0x3d4937(0x11c)][_0x3d4937(0x100)];return _0x2836ec=_0x163873+_0x2f409f*_0x163873*_0x4835e5+_0x2f409f*_0x222c4f,Math[_0x3d4937(0x13e)](_0x2836ec);},VisuMZ[_0x204e93(0x118)][_0x204e93(0xd9)]=Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x126)],Game_Enemy[_0x204e93(0x10d)]['dropItemRate']=function(){const _0x385f31=_0x204e93,_0x1bc0f7=VisuMZ['EnemyLevel'][_0x385f31(0xd9)][_0x385f31(0xf3)](this),_0x53bb1d=this[_0x385f31(0x9d)]-0x1;return this[_0x385f31(0x144)](_0x1bc0f7,_0x53bb1d);},Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x144)]=function(_0x3f4e6e,_0x557b3b){const _0x3d9875=_0x204e93;if(this[_0x3d9875(0xf8)]())return _0x3f4e6e;this[_0x3d9875(0xcb)](!![]);const _0x594a48=this;let _0x262d5b=_0x3f4e6e;const _0x1514ec=this[_0x3d9875(0x13f)][_0x3d9875(0xfa)],_0x6f7e14=this[_0x3d9875(0x11c)][_0x3d9875(0xfa)];return _0x262d5b=_0x3f4e6e+_0x557b3b*_0x3f4e6e*_0x1514ec+_0x557b3b*_0x6f7e14,_0x262d5b;},Game_Enemy[_0x204e93(0x10d)]['meetsSkillConditionsEnemyLevel']=function(_0x3a2649){const _0x5e1962=_0x204e93;if(!_0x3a2649)return![];this[_0x5e1962(0x122)](!![]);const _0x4f4b46=_0x3a2649[_0x5e1962(0xbc)]['toUpperCase']()[_0x5e1962(0xdb)]();if(this[_0x5e1962(0xe1)][_0x4f4b46])return this[_0x5e1962(0x9d)]>=this['_enemyLevelRequired_SkillName'][_0x4f4b46];const _0x21b3a0=_0x3a2649['id'];if(this[_0x5e1962(0xb2)][_0x21b3a0])return this['level']>=this[_0x5e1962(0xb2)][_0x21b3a0];return!![];},Game_Enemy['prototype']['createEnemyLevelSkillRequirements']=function(_0x22e567){const _0x11b445=_0x204e93;if(_0x22e567&&this[_0x11b445(0xe1)]&&this[_0x11b445(0xb2)])return;this[_0x11b445(0xe1)]={},this[_0x11b445(0xb2)]={};const _0x22861c=this[_0x11b445(0xca)]()[_0x11b445(0x11f)][_0x11b445(0xbe)](/<ENEMY SKILL (.*) REQUIRE LEVEL: (\d+)>/gi);if(_0x22861c)for(const _0x16ef7c of _0x22861c){_0x16ef7c[_0x11b445(0xbe)](/<ENEMY SKILL (.*) REQUIRE LEVEL: (\d+)>/i);const _0x319904=String(RegExp['$1'])[_0x11b445(0xdd)]()['trim'](),_0x4c18e1=Number(RegExp['$2']);_0x319904[_0x11b445(0xbe)](/\b(\d+)\b/i)?this[_0x11b445(0xb2)][_0x319904]=_0x4c18e1:this['_enemyLevelRequired_SkillName'][_0x319904]=_0x4c18e1;}},VisuMZ[_0x204e93(0x118)][_0x204e93(0x133)]=Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x9c)],Game_Enemy[_0x204e93(0x10d)][_0x204e93(0x9c)]=function(_0x25c221){const _0x340be5=_0x204e93;VisuMZ[_0x340be5(0x118)][_0x340be5(0x133)][_0x340be5(0xf3)](this,_0x25c221),this[_0x340be5(0x106)](),this['createEnemyLevelParamGrowth'](![]),this['createEnemyLevelSkillRequirements'](![]);},Game_Party[_0x204e93(0x10d)]['getLevelType']=function(_0x20e1b4){const _0x17d845=_0x204e93,_0x552727=this[_0x17d845(0x8a)]()['filter'](_0x217446=>!!_0x217446)[_0x17d845(0xb0)](_0x5d2486=>_0x5d2486[_0x17d845(0x9d)]),_0x168678=this['battleMembers']()[_0x17d845(0xe0)](_0x1afa2d=>!!_0x1afa2d)[_0x17d845(0xb0)](_0x1e3716=>_0x1e3716[_0x17d845(0x9d)]);switch(_0x20e1b4[_0x17d845(0xdd)]()[_0x17d845(0xdb)]()){case _0x17d845(0x111):return Math['max'](..._0x552727);break;case'HIGHEST\x20PARTY\x20LEVEL':return Math[_0x17d845(0xdc)](..._0x168678);break;case _0x17d845(0xb3):if(_0x552727[_0x17d845(0xb5)]<=0x1)return _0x552727[0x0]||0x1;return Math[_0x17d845(0x13e)](_0x552727[_0x17d845(0x132)]((_0x362505,_0x2ba700)=>_0x362505+_0x2ba700)/_0x552727[_0x17d845(0xb5)]);break;case _0x17d845(0xf6):if(_0x168678[_0x17d845(0xb5)]<=0x1)return _0x168678[0x0]||0x1;return Math[_0x17d845(0x13e)](_0x168678[_0x17d845(0x132)]((_0x93be9b,_0x141544)=>_0x93be9b+_0x141544)/_0x168678[_0x17d845(0xb5)]);break;case _0x17d845(0xef):return Math[_0x17d845(0xfc)](..._0x552727['map'](_0x436882=>_0x436882));break;case _0x17d845(0xa0):return Math[_0x17d845(0xfc)](..._0x168678[_0x17d845(0xb0)](_0x2a717c=>_0x2a717c));break;default:return 0x1;break;}},Game_Map[_0x204e93(0x10d)][_0x204e93(0x93)]=function(){const _0x58a063=_0x204e93;if(!$dataMap)return![];return!!this[_0x58a063(0xa6)]();},Game_Map['prototype'][_0x204e93(0xa6)]=function(){const _0x3c775c=_0x204e93;if(!$dataMap)return 0x0;const _0x3cbf7b=$dataMap['note'];if(_0x3cbf7b[_0x3c775c(0xbe)](/<ENEMY LEVEL: (\d+)>/i))return Number(RegExp['$1'])||0x1;else{if(_0x3cbf7b[_0x3c775c(0xbe)](/<ENEMY LEVEL: (\d+) TO (\d+)>/i)){const _0x1c4d5a=Number(RegExp['$1']),_0x146692=Number(RegExp['$2']),_0x36fe4f=Math[_0x3c775c(0xfc)](_0x1c4d5a,_0x146692),_0x140800=Math[_0x3c775c(0xdc)](_0x1c4d5a,_0x146692);return Math[_0x3c775c(0xbb)](_0x36fe4f+Math[_0x3c775c(0x127)](_0x140800-_0x36fe4f+0x1));}else{if(_0x3cbf7b[_0x3c775c(0xbe)](/<ENEMY LEVEL: (.*)>/i)){const _0x54ce06=String(RegExp['$1'])[_0x3c775c(0xdd)]()[_0x3c775c(0xdb)]();this[_0x3c775c(0x110)]=$gameParty[_0x3c775c(0xc7)](_0x54ce06)||0x1;}else{if(_0x3cbf7b['match'](/<JS ENEMY LEVEL: (.*)>/i))try{return Math[_0x3c775c(0xbb)](eval(RegExp['$1'])||0x0);}catch(_0x57bbc6){if($gameTemp['isPlaytest']())console[_0x3c775c(0xe6)](_0x57bbc6);return 0x0;}else return 0x0;}}}};