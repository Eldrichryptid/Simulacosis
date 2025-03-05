//=============================================================================
// VisuStella MZ - Battle A.I.
// VisuMZ_3_BattleAI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_BattleAI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BattleAI = VisuMZ.BattleAI || {};
VisuMZ.BattleAI.version = 1.28;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.28] [BattleAI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Battle_AI_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This Battle A.I. plugin changes up how enemies and any Auto Battle actors
 * behave by implementing many new key components to their decision making
 * process in battle. These new compotents are: A.I. Styles, A.I. Levels, 
 * Rating Variance, A.I. Conditions, and Influencing TGR Weight.
 *
 * With these new key components put together, you can transform RPG Maker MZ's
 * highly primitive A.I. into something more intelligent. Auto Battle actors
 * can also base their A.I. patterns off an enemy's A.I. in order to behave in
 * more desirable ways during battle as well.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Different A.I. Styles to allow for various ways to setup enemy A.I.
 * * Set A.I. Levels for enemies and Auto Battle actors.
 * * A.I. Levels can be set on a global scale or individual scale.
 * * Set rating variance levels to prioritize actions or randomize them.
 * * These include notetags to change them on a per individual basis.
 * * Create action conditions to make certain skills usable by the A.I. under
 *   specific circumstances.
 * * Action conditions are split between 'ALL' and 'ANY' types which require
 *   either all conditions to be met or at least one condition to be met.
 * * A large selection of condition notetags to use to help customize the best
 *   case situations on when to use a skill and which target to pick.
 * * Default condition settings can be made in the Plugin Parameters to make an
 *   entire database of skills become conditional for A.I. usage.
 * * Influence TGR weight to make certain targets more desirable for specific
 *   types of actions.
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
 * Auto Battle A.I. for Actors
 *
 * - With this plugin, there is an option to let certain classes reference
 * specific enemy A.I. patterns to decide which skills to use during battle.
 * If the reference option is not used, the actor will use default Auto Battle
 * evaluations to determine which skills to use instead.
 *
 * ---
 * 
 * A.I. Styles
 * 
 * - There are currently four different A.I. Styles. Actors and enemies can
 * default to a different one globally, or changed individually using notetags.
 * Read more about them in the A.I. Styles section.
 * 
 * ---
 *
 * A.I. Levels
 *
 * - Enemies and actors can be given different A.I. Levels. The higher one's
 * A.I. Level, the more they are to follow conditions. With Level 100 A.I.
 * Level, an A.I. will never disobey a condition. On the other hand, lower
 * A.I. Levels may possibly ignore certain conditions and act as if they are
 * fulfilled.
 *
 * ---
 *
 * A.I. Rating Variance
 *
 * - In the RPG Maker database editor, when deciding an enemy's Action Patterns
 * you can decide on the action's "rating". The rating is a value from 1 to 9
 * where 9 gets the highest priority and 1 gets the lowest. RPG Maker, by
 * default, will sometimes dip the rating a few levels lower to allow lower
 * ratings and bypass the priority system.
 *
 * - This plugin allows you to set the variance level through Plugin Parameters
 * on a global scale or notetags on an individual basis to allow for larger,
 * smaller, or no variance on ratings at all.
 *
 * ---
 *
 * A.I. Conditions for Skill Usage
 *
 * - Enemies and any actors that use Auto Battle A.I. with a reference can only
 * use certain skills as long as specific conditions have been met. These
 * conditions are split between 'ALL' condition sets and 'ANY' condition sets.
 *
 * - 'ALL' condition sets require all of the set's conditions to be met in
 * order for the skill to be used by the A.I.
 *
 * - 'ANY' condition sets require at least one of the set's conditions to be
 * met in order for the skill to be used by the A.I.
 *
 * - A variety of conditions can be inserted into each condition set to make
 * for some very specific usage conditions. These will also help filter out
 * which targets to pick from, too.
 *
 * ---
 *
 * TGR Weight on A.I. Target Selection
 *
 * - TGR is a special parameter in RPG Maker MZ that represents "Target Rate".
 * The higher one's TGR, the more likely they are to become the target of an
 * attack. This plugin allows various things to influence the TGR weight to
 * make certain targets more likely to be targets for attack.
 *
 * - Elemental influence rates on the TGR weight mean that if a target receives
 * more damage from an elemental attack, the TGR weight becomes higher for that
 * skill when determining a target. The higher the elemental damage received,
 * the more the TGR weight shifts upward.
 *
 * - Evasion and Magic Evasion rates do the opposite. The higher a potential
 * target's evasion and magic evasion rate is (for physical and magical skills)
 * the lower the TGR weight becomes for that potential target.
 *
 * - By default Plugin Parameter settings, TGR weight shifting requires the
 * enemy troop to have "knowledge" on the party's element rates, evasion, and
 * magic evasion properties. Enemy troops would have to hit actors with element
 * based attacks to learn the actor's resistance levels, physical attacks to
 * learn the actor's evasion, and magical attacks to learn the actor's magic
 * evasion levels.
 *
 * ---
 *
 * ============================================================================
 * A.I. Styles
 * ============================================================================
 * 
 * There are currently four different A.I. Styles. These determine how the
 * A.I. acts and behaves. You can change the A.I. Style used globally through
 * the Plugin Parameters or individually for classes and enemies through the
 * usage of notetags.
 * 
 * Read below to understand each style and its rules:
 * 
 * ---
 * 
 * Classic Style
 * 
 * "Classic" style is the traditional and default RPG Maker MZ A.I. style.
 * It puts emphasis on the Rating system, where skills with higher ratings are
 * given more priority than skills with lower ratings within variance.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions with higher Ratings.
 * - Rating variance will be determined by Plugin Parameters and/or notetags.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - After applying Ratings, Rating Variances, and A.I. Conditions, if there
 *   are still multiple actions to choose from, pick from the remaining actions
 *   randomly.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Gambit Style
 * 
 * - "Gambit" style is the style from Yanfly Engine Plugin's Battle A.I. Core.
 * It goes down the list of skills with top-down priority as long as they meet
 * the Action Pattern conditions and A.I. conditions. Ratings will be ignored.
 * 
 * - Priority starts from top of skill list and goes to bottom of skill list.
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - Priority is given towards actions located higher on the list.
 * - Actions towards the bottom of the list will have lower priority.
 * - Ratings and Rating Variance has no bearing on whether or not an action
 *   will be picked.
 * - A.I. Level can affect whether or not A.I. Conditions would be ignored.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Casual Style
 * 
 * - "Casual" style takes a lighter approach to A.I. It ignores the Ratings
 * system and doesn't care about the order of actions either. Instead, the
 * only thing this A.I. Style cares about are the A.I. Conditions. All valid
 * actions after that are randomly picked from.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions must be met.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
 * 
 * ---
 * 
 * Random Style
 * 
 * - "Random" style simply does not care about ratings or order. It only cares
 * if the skill's can be used (can pay for the cost) and Action Pattern
 * conditions. It does not care about A.I. Conditions, Ratings, or Order.
 * 
 * - Action Pattern conditions must be met.
 * - Skill must be usable (able to pay its cost and it isn't disabled).
 * - Skill A.I. conditions are ignored.
 * - There is no priority system for Ratings or Order.
 * - A.I. Level does not matter here.
 * - A random action will be selected from a group of remaining valid actions.
 * - If no actions are valid, then do nothing.
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
 * === General A.I. Settings Notetags ===
 *
 * These notetags set the general A.I. related settings for enemies and any
 * actors that use A.I. (requires Auto Battle and has a reference A.I.).
 *
 * ---
 * 
 * <AI Style: x>
 * 
 * - Used for: Class, Enemy Notetags
 * - Replace 'x' with 'Classic', 'Gambit', 'Casual', or 'Random' without the
 *   quotes. Example: <AI Style: Gambit>
 * - Determines the A.I. style used. Refer to the A.I. Styles section on the
 *   various types of styles.
 * - For actors, place this inside the associated class's notebox instead.
 * - For actors, this does not apply if there is no referenced enemy A.I. list.
 * - Setup the reference enemy through either the Plugin Parameters or by using
 *   the <Reference AI: Enemy id> notetag found below.
 * 
 * ---
 *
 * <AI Level: x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Designates the unit's A.I. level if A.I. is to be used.
 * - Replace 'x' with a number from 0 to 100.
 * - Units with higher A.I. Levels will be more strict about conditions.
 * - Units with lower A.I. Levels will be more lax about conditions.
 *
 * ---
 *
 * <AI Rating Variance: x>
 * 
 * - Used for: Actor, Enemy Notetags
 * - Sets the variance amount when determining A.I. actions by rating.
 * - Replace 'x' with a number between 0 and 9.
 * - 0 for no variance.
 * - Lower numbers for less variance.
 * - Higher numbers for more variance.
 *
 * ---
 *
 * <Reference AI: Enemy id>
 * <Reference AI: name>
 *
 * - Used for: Class Notetags
 * - Causes any actor using this class that has the Auto Battle trait to use
 *   a specific enemy's attack pattern (ratings, conditions, etc.) to determine
 *   which skill to use in battle.
 * - Replace 'id' with a number representing the enemy's ID to reference.
 * - Replace 'name' with the name the enemy to reference.
 * - Actors are only able to use skills they would normally have access to.
 *   - Actors need to have LEARNED the skill.
 *   - Actors need to be able to access the skill's SKILL TYPE.
 *   - Actors need to have the RESOURCES to pay for the skill.
 * - If you cannot figure out why an auto battle actor cannot use a specific
 *   skill, turn OFF auto battle and see if you can use the skill normally.
 *
 * ---
 *
 * <No Reference AI>
 *
 * - Used for: Class Notetags
 * - Prevents the class from using any enemies as their reference A.I. pattern
 *   (including the one set in the Plugin Parameters).
 *
 * ---
 *
 * === Skill A.I. Condition Notetags ===
 *
 * Insert these notetags into the noteboxes of skills that you'd like to give
 * custom A.I. conditions for. The 'All' version of the notetags require every
 * condition to be met while the 'Any' version of the notetags require only one
 * of the conditions to be met. 
 *
 * If both are used together, then the 'All' conditions must be completely
 * fulfilled while the 'Any' conditions need only one to be fulfilled.
 *
 * ---
 *
 * <All AI Conditions>
 *  condition
 *  condition
 *  condition
 * </All AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - All conditions must be met in order for this to become a valid skill for
 *   the AI to use.
 * - This can be used together with <Any AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'All' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <Any AI Conditions>
 *  condition
 *  condition
 *  condition
 * </Any AI Conditions>
 * 
 * - Used for: Skill
 * - Add/remove as many conditions as needed for the skill.
 * - As long as one condition is met, this becomes a valid skill for the AI
 *   to use. If none of them are met, this skill becomes invalid for AI use.
 * - This can be used together with <All AI Conditions>. If either of these
 *   notetags exist, do not use the Plugin Parameter defaul conditions.
 * - This will not inherit default 'Any' conditions in the Plugin Parameters.
 * - Replace 'condition' with any of the following Condition List below.
 *
 * ---
 *
 * <No AI Conditions>
 * 
 * - Used for: Skill
 * - Removes any default 'All' and 'Any' conditions for this skill.
 * 
 * ---
 *
 * -=-=- Condition List -=-=-
 *
 * Replace 'condition' in the notetags in the above section with any of the
 * following to make conditions. These conditions are also used in the Plugin
 * Parameters for the default conditions, too.
 *
 * ---
 *
 * x >= y
 * x > y
 * x === y
 * x !== y
 * x < y
 * x <= y
 *
 * - Replace 'x' and 'y' with any of the following:
 *
 * - A numeric value representing a hard number.
 * - '50%' or any other percentile number to represent a rate.
 * - '0.5' or any other float number to represent a rate.
 *
 * - 'Variable x' (replace 'x' with a number) for variable x's current value.
 *
 * - 'HP%', 'MP%', 'TP%' for HP, MP, and TP rates respectively.
 * - 'MaxHP', 'MaxMP', 'MaxTP' for the potential target's respective values.
 * - 'Level' for the potential target's level. Requires VisuMZ_0_CoreEngine for
 *   this to affect enemies.
 * - 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK' for the potential target's total
 *   parameter value.
 *
 * - 'param Buff Stacks' for the potential target's current Buff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 * - 'param Debuff Stacks' for the potential target's current Debuff stacks.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * - 'param Buff Turns' for potential target's current buff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that buff.
 * - 'param Debuff Turns' for potential target's current debuff turn duration.
 *   - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *   - Returns 0 if the potential target is not affected by that debuff.
 *
 * - 'State id Turns' or 'State name Turns' for potential target's current turn
 *   duration on that particular state.
 *   - Replace 'id' with a number representing the ID of the state.
 *   - Replace 'name' with the state's name.
 *   - Returns 0 if the potential target is not affected by that state.
 *   - Returns the max safe number value if the potential target is has that
 *     state as a passive state.
 *
 * - 'Element id Rate', 'Element name Rate', 'name Element Rate'
 *   - Returns a (float) value of the potential target's element's rate.
 *   - Replace 'id' with the ID of the element whose rate is to be checked.
 *   - Replace 'name' with the name of the element whose rate is to be checked.
 *     - Ignore any text codes in the element name.
 *
 * - 'Team Alive Members'
 *   - Returns a number value indicating how many alive members there are on
 *     the potential target's team.
 *
 * - 'Team Dead Members'
 *   - Returns a number value indicating how many dead members there are on
 *     the potential target's team.
 * 
 * - When no keyword matches are found, the comparison value will be
 *   interpreted as JavaScript code. If the JavaScript code fails, it will
 *   default to a 0 value.
 * 
 *   *NOTE* JavaScript cannot be used without comparison operators to reduce
 *   error. This means if you want to check if a switch is on or not, don't
 *   simply use "$gameSwitches.value(42)" as it does not have any comparison
 *   operators. Instead, use "$gameSwitches.value(42) === true" to check.
 *
 *   *NOTE* To make any of these conditions base off of the user instead, add
 *   the word 'user' before the condition as such:
 *
 *   user hp% >= 0.50
 *   user atk buff stacks === 2
 *   user team alive members < 3
 *
 * ---
 *
 * Always
 *
 * - Going to be valid no matter what.
 *
 * ---
 *
 * x% Chance
 * 
 * - Replace 'x' with a number value representing the percent chance this skill
 *   would pass as valid.
 *
 * ---
 *
 * Switch x On
 * Switch x Off
 *
 * - Replace 'x' with the ID of the switch to check as ON/OFF.
 *
 * ---
 *
 * User is Actor
 * User is Enemy
 * Target is Actor
 * Target is Enemy
 *
 * - Requires the user or potential target to be an actor/enemy.
 *
 * ---
 *
 * User Has State id
 * User Has State name
 * Target Has State id
 * Target Has State name
 *
 * - Replace 'id' with the ID of the state the user or potential target needs
 *   to have.
 * - Replace 'name' with the name of the state the target needs to have.
 *
 * ---
 *
 * User Not State id
 * User Not State name
 * Target Not State id
 * Target Not State name
 *
 * - Replace 'id' with the ID of the state the user or potential target
 *   cannot have.
 * - Replace 'name' with the name of the state the target cannot have.
 *
 * ---
 *
 * User Has param Buff 
 * User Has param Debuff 
 * Target Has param Buff 
 * Target Has param Debuff 
 *
 * - Requires user or potential target to have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Has param Max Buff 
 * User Has param Max Debuff
 * Target Has param Max Buff 
 * Target Has param Max Debuff
 *
 * - Requires potential user or target to have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Buff 
 * User Not param Debuff 
 * Target Not param Buff 
 * Target Not param Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at any stack level.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * User Not param Max Buff 
 * User Not param Max Debuff 
 * Target Not param Max Buff 
 * Target Not param Max Debuff 
 *
 * - Requires user or potential target to not have the associated parameter 
 *   buff/debuff at maxed out stacks.
 * - Replace 'param' with 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', 'LUK'
 *
 * ---
 *
 * === A.I. => TGR Weight Notetags ===
 *
 * You can set how much influence on TGR weights actors and enemies will place
 * when determining valid targets for their actions.
 *
 * ---
 *
 * <AI Element Rate Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the element rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI Element Rate Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in element rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI EVA Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the EVA rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI EVA Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in EVA rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MEV Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MEV rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MEV Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MEV rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI PDR Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the PDR rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI PDR Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in PDR rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 *
 * <AI MDR Influence: x.x>
 *
 * - Used for: Actor, Enemy Notetags
 * - Sets how much TGR weight influence is given based on the MDR rate.
 * - Replace 'x.x' with a numberic value representing the influence rate.
 *
 * ---
 *
 * <Bypass AI MDR Influence>
 *
 * - Used for: Actor, Enemy Notetags
 * - Makes the actor/enemy not factor in MDR rates when calculating TGR
 *   weights to determine action targets.
 *
 * ---
 * 
 * === Specific A.I. Targeting Notetags ===
 * 
 * Specific A.I. targeting means the user will ignore any TGR influences when
 * it comes to pick out of a group of valid candidates to come down to one
 * target. This only affects skills where the user must select a specific
 * target, meaning it will ignore the effects of random and AoE scopes.
 * 
 * ---
 *
 * <AI Target: type>
 *
 * - Used for: Skill Notetags
 * - Bypasses TGR influence in favor of picking a specific target out of a
 *   group of valid targets (does not pick from outside the valid target group)
 *   for a skill target.
 * - Replace 'type' with any of the following:
 * 
 *   ----------------------------   -------------------------------------------
 *   Type                           Description
 *   ----------------------------   -------------------------------------------
 *   User                           Always picks the user if available
 *   First                          Always picks the first valid candidate
 *   Last                           Always picks the last valid candidate
 *   ----------------------------   -------------------------------------------
 *   Highest Level                  Picks candidate with highest level
 *   ----------------------------   -------------------------------------------
 *   Highest MaxHP                  Picks candidate with highest MaxHP
 *   Highest HP                     Picks candidate with highest current HP
 *   Highest HP%                    Picks candidate with highest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxMP                  Picks candidate with highest MaxMP
 *   Highest MP                     Picks candidate with highest current MP
 *   Highest MP%                    Picks candidate with highest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest MaxTP                  Picks candidate with highest MaxTP
 *   Highest TP                     Picks candidate with highest current TP
 *   Highest TP%                    Picks candidate with highest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Highest ATK                    Picks candidate with highest ATK parameter
 *   Highest DEF                    Picks candidate with highest DEF parameter
 *   Highest MAT                    Picks candidate with highest MAT parameter
 *   Highest MDF                    Picks candidate with highest MDF parameter
 *   Highest AGI                    Picks candidate with highest AGI parameter
 *   Highest LUK                    Picks candidate with highest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Highest HIT                    Picks candidate with highest HIT parameter
 *   Highest EVA                    Picks candidate with highest EVA parameter
 *   Highest CRI                    Picks candidate with highest CRI parameter
 *   Highest CEV                    Picks candidate with highest CEV parameter
 *   Highest MEV                    Picks candidate with highest MEV parameter
 *   Highest MRF                    Picks candidate with highest MRF parameter
 *   Highest CNT                    Picks candidate with highest CNT parameter
 *   Highest HRG                    Picks candidate with highest HRG parameter
 *   Highest MRG                    Picks candidate with highest MRG parameter
 *   Highest TRG                    Picks candidate with highest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Highest TGR                    Picks candidate with highest TGR parameter
 *   Highest GRD                    Picks candidate with highest GRD parameter
 *   Highest REC                    Picks candidate with highest REC parameter
 *   Highest PHA                    Picks candidate with highest PHA parameter
 *   Highest MCR                    Picks candidate with highest MCR parameter
 *   Highest TCR                    Picks candidate with highest TCR parameter
 *   Highest PDR                    Picks candidate with highest PDR parameter
 *   Highest MDR                    Picks candidate with highest MDR parameter
 *   Highest FDR                    Picks candidate with highest FDR parameter
 *   Highest EXR                    Picks candidate with highest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Highest State Count            Picks candidate with most states (any)
 *   Highest Positive State Count   Picks candidate with most positive states
 *   Highest Negative State Count   Picks candidate with most negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 *   Lowest Level                   Picks candidate with lowest level
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxHP                   Picks candidate with lowest MaxHP
 *   Lowest HP                      Picks candidate with lowest current HP
 *   Lowest HP%                     Picks candidate with lowest HP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxMP                   Picks candidate with lowest MaxMP
 *   Lowest MP                      Picks candidate with lowest current MP
 *   Lowest MP%                     Picks candidate with lowest MP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest MaxTP                   Picks candidate with lowest MaxTP
 *   Lowest TP                      Picks candidate with lowest current TP
 *   Lowest TP%                     Picks candidate with lowest TP ratio
 *   ----------------------------   -------------------------------------------
 *   Lowest ATK                     Picks candidate with lowest ATK parameter
 *   Lowest DEF                     Picks candidate with lowest DEF parameter
 *   Lowest MAT                     Picks candidate with lowest MAT parameter
 *   Lowest MDF                     Picks candidate with lowest MDF parameter
 *   Lowest AGI                     Picks candidate with lowest AGI parameter
 *   Lowest LUK                     Picks candidate with lowest LUK parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest HIT                     Picks candidate with lowest HIT parameter
 *   Lowest EVA                     Picks candidate with lowest EVA parameter
 *   Lowest CRI                     Picks candidate with lowest CRI parameter
 *   Lowest CEV                     Picks candidate with lowest CEV parameter
 *   Lowest MEV                     Picks candidate with lowest MEV parameter
 *   Lowest MRF                     Picks candidate with lowest MRF parameter
 *   Lowest CNT                     Picks candidate with lowest CNT parameter
 *   Lowest HRG                     Picks candidate with lowest HRG parameter
 *   Lowest MRG                     Picks candidate with lowest MRG parameter
 *   Lowest TRG                     Picks candidate with lowest TRG parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest TGR                     Picks candidate with lowest TGR parameter
 *   Lowest GRD                     Picks candidate with lowest GRD parameter
 *   Lowest REC                     Picks candidate with lowest REC parameter
 *   Lowest PHA                     Picks candidate with lowest PHA parameter
 *   Lowest MCR                     Picks candidate with lowest MCR parameter
 *   Lowest TCR                     Picks candidate with lowest TCR parameter
 *   Lowest PDR                     Picks candidate with lowest PDR parameter
 *   Lowest MDR                     Picks candidate with lowest MDR parameter
 *   Lowest FDR                     Picks candidate with lowest FDR parameter
 *   Lowest EXR                     Picks candidate with lowest EXR parameter
 *   ----------------------------   -------------------------------------------
 *   Lowest State Count             Picks candidate with least states (any)
 *   Lowest Positive State Count    Picks candidate with least positive states
 *   Lowest Negative State Count    Picks candidate with least negative states
 *   *Note: These require VisuMZ_1_SkillsStatesCore
 *   ----------------------------   -------------------------------------------
 * 
 * ---
 *
 * ============================================================================
 * Regarding $gameTroop.turnCount() for A.I. Conditions
 * ============================================================================
 * 
 * ---
 * 
 * Short Answer:
 *
 * Battle A.I. conditions do NOT support the conditions $gameTroop.turnCount()
 * or user.turnCount() or target.turnCount() for A.I. Conditions.
 * 
 * Instead, use RPG Maker MZ's built-in action editor's turn requirement to
 * make do with the same effect.
 *
 * ---
 * 
 * Long Answer:
 * 
 * The turnCount() functions are not valid for A.I. Conditions and disabled due
 * to all the problems they cause. The reason being is because actions are
 * determined before the turn count increases. This is how RPG Maker MZ handles
 * it by default.
 * 
 * The reason why this does not work is due to the following code found in
 * RPG Maker MZ's core scripts:
 * 
 *   Game_Battler.prototype.turnCount = function() {
 *       if (BattleManager.isTpb()) {
 *           return this._tpbTurnCount;
 *       } else {
 *           return $gameTroop.turnCount() + 1;
 *       }
 *   };
 * 
 * What that means the turn count will always be off by 1. So upon determining
 * the action initially, the match would come off as correct. However, as the
 * turn actually starts and reaches the enemy or actor's turn, the turn count
 * check would read differently and return incorrect information, causing the
 * battler to forfeit their actions.
 * 
 * This facet of RPG Maker MZ can be updated and changed, but it is better that
 * it doesn't in order to maintain compatibility with the rest of the plugins
 * available that utilize the turn counter.
 * 
 * The work around to this problem is, instead, to use the enemy database tab's
 * action editor and apply a Turn Condition to match the required turn instead.
 * You know, the thing with Skill and Rating, where you select which skill for
 * the enemy to use instead.
 * 
 * HOWEVER!
 * 
 * If you are willing to use an "Experimental" feature, aka one that is not
 * heavily tested and may potentially result in unintended side effects, go to:
 * 
 *  Plugin Parameters > A.I. General Settings > Experimental > On-The-Spot A.I.
 * 
 * And set that to "true" without the quotes. This will forcefully remove the
 * +1 towards the count and forcefully make enemies re-evaluate actions upon
 * the start of the string of their actions. This comes with some side effects
 * that will potentially give A.I. advantages or disadvantages depending on the
 * battle system type. Action Speed becomes something that can be abused as it
 * is normally something that is determined based on the queued actions. A.I.
 * can pick a high speed weak action and then switch it for a slow speed strong
 * action. There is no proper fix to this due to how on-the-spot A.I. works as
 * it is ill-fitted for speed-relative battle systems. You have been warned.
 * 
 * In the event that this Plugin Parameter IS enabled, then using the turnCount
 * JavaScript code should work again due to the normalization of how the turn
 * property is calculated.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. General Settings
 * ============================================================================
 *
 * These settings determine the global settings for general Battle A.I. usage.
 *
 * ---
 * 
 * A.I. Style
 * 
 *   Actor Style:
 *   - Which A.I. style do you want for referenced actors to use?
 *   - This does not apply to non-referenced actors.
 * 
 *   Enemy Style:
 *   - Which A.I. style do you want for enemies to use?
 * 
 *   Refer to the A.I. Styles list for a list of valid styles.
 * 
 * ---
 *
 * A.I. Level
 * 
 *   Actor A.I. Level:
 *   - Default A.I. level used for actor A.I.
 *   - Levels: 0-100. Higher is stricter.
 * 
 *   Enemy A.I. Level:
 *   - Default A.I. level used for enemy A.I.
 *   - Levels: 0-100. Higher is stricter.
 *
 * ---
 *
 * A.I. Ratings
 * 
 *   Actor Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 * 
 *   Enemy Rating Variance:
 *   - How much to allow variance from the A.I. rating by?
 *   - 0 for no variance. Higher numbers for more variance.
 *
 * ---
 *
 * Reference
 * 
 *   Actor => AI Reference:
 *   - Which enemy A.I. should the actor reference by default?
 *   - Use 0 for no references.
 *
 * ---
 *
 * Knowledge
 * 
 *   Learn Knowledge:
 *   - Requires enemies/actors to test the knowledge of the opponents before
 *     using specific conditions.
 * 
 *   Unknown Element Rate:
 *   - What should A.I. treat unknown element rates as?
 *
 * ---
 * 
 * Experimental
 * 
 *   On-The-Spot A.I.:
 *   - A.I. enemies/actors determine actions on the spot when it's their turn.
 * 
 *     No Idle Chant:
 *     - Requires On-The-Spot A.I. enabled.
 *     - For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. Default Conditions
 * ============================================================================
 *
 * You can set certain conditions to be used as defaults for all skills that
 * lack the <All AI Conditions> and <Any AI Conditions>. If either of those
 * notetags exist, none of these defaults will be used for those skills. These
 * settings will allow you to set both 'All' and 'Any' conditions for defaults.
 *
 * ---
 *
 * Enable?
 * 
 *   All Conditions:
 *   - Create default 'ALL' conditions for all skills without any AI notetags?
 * 
 *   Any Conditions:
 *   - Create default 'ANY' conditions for all skills without any AI notetags?
 *
 * ---
 *
 * HP Damage
 * MP Damage
 * HP Recover
 * MP Recover
 * HP Drain
 * MP Drain
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *
 * ---
 *
 * Add State
 * Remove State
 * 
 *   All Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 * 
 *   Any Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * Add Buff
 * Remove Buff
 * Add Debuff
 * Remove Debuff
 * 
 *   All Conditions:
 *   - Default 'ANY' conditions used for related skills.
 *   - %1 - Dynamic values (ie param's).
 * 
 *   Any Conditions:
 *   - Default 'ALL' conditions used for related skills.
 *   - %1 - Dynamic values (ie state ID's).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: A.I. => TGR Weight Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you to set whether or not you'd like for 
 * weight influence when deciding targets for actions and how much to influence
 * the TGR weight by.
 *
 * ---
 *
 * Weight
 * 
 *   Element Rate => TGR:
 *   - Makes all A.I. consider elemental rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence elemental rates have on
 *       TGR weight.
 * 
 *   EVA Rate => TGR:
 *   - Makes all A.I. consider EVA rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence EVA rates have on
 *       TGR weight.
 * 
 *   MEV Rate => TGR:
 *   - Makes all A.I. consider MEV rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence MEV rates have on
 *       TGR weight.
 * 
 *   PDR Rate => TGR:
 *   - Makes all A.I. consider PDR rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence PDR rates have on
 *       TGR weight.
 * 
 *   MDR Rate => TGR:
 *   - Makes all A.I. consider MDR rates when considering TGR weight
 *     by default?
 * 
 *     Influence Rate:
 *     - This determines the default level of influence MDR rates have on
 *       TGR weight.
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
 * Version 1.28: Version 1.10: January 16, 2025
 * * Compatibility Update!
 * ** Added better compatibility with Battle Grid System regarding scopes.
 * 
 * Version 1.27: November 14, 2024
 * * Compatibility Update!
 * ** Added better compatibility with Skill Cooldowns' <Once Per Turn> notetag.
 * 
 * Version 1.26: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <AI PDR Influence: x.x>
 * *** <AI MDR Influence: x.x>
 * **** Sets how much TGR weight influence is given based on the PDR/MDR rate.
 * *** <Bypass AI PDR Influence>
 * *** <Bypass AI MDR Influence>
 * **** Makes the actor/enemy not factor in PDR/MDR rates when calculating TGR
 *      weights to determine action targets.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Weights > PDR Rate => TGR
 * *** Parameters > Weights > PDR Rate => TGR > Influence Rate
 * *** Parameters > Weights > MDR Rate => TGR
 * *** Parameters > Weights > MDR Rate => TGR > Influence Rate
 * **** Alters the default PDR/MDR Influence rate.
 * 
 * Version 1.25: June 13, 2024
 * * Feature Updates!
 * ** Reduced AI thinking times. Update made by Olivia.
 * 
 * Version 1.24: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug that would cause an infinite loop with certain battle systems
 *    under on the spot AI setting. Fix made by Olivia.
 * 
 * Version 1.23: January 18, 2024
 * * Compatibility Update!
 * ** Updated better compatibility with Battle System - STB and Auto Skill
 *    Triggers to prevent infinite loops. Update made by Olivia.
 * 
 * Version 1.22: December 14, 2023
 * * Compatibility Update!
 * ** Updated better compatibility for the new Battle System FTB, ETB, and PTB
 *    updates. Update made by Olivia.
 * 
 * Version 1.21: April 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevented enemies from using skills that had the
 *    <Target: x Random Any> notetag. Fix made by Irina.
 * 
 * Version 1.20: February 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.74
 *    new features.
 * 
 * Version 1.19: January 20, 2023
 * * Bug Fixes!
 * ** On-The-Spot A.I. no longer overwrites Forced Actions. Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for Battle Core updated version 1.73
 *    new features.
 * 
 * Version 1.18: May 19, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** General Settings > Experimental > On-The-Spot A.I. > No Idle Chant
 * **** Requires On-The-Spot A.I. enabled.
 * **** For A.I. Battlers, disables idle chant motions due to inconsistency.
 * 
 * Version 1.17: May 12, 2022
 * * Feature Update!
 * ** Better RNG calculation when using the x% Chance conditional. Update made
 *    by Arisu.
 * 
 * Version 1.16: February 24, 2022
 * * Feature Update!
 * ** Randomization between zero variance A.I. is now better.
 * ** A.I. will no longer keep unusable skills in a skill queue and replace
 *    them with new ones.
 * 
 * Version 1.15: December 2, 2021
 * * Compatibility Update!
 * ** AI for skills and items should now work if their scope is
 *    <Target: All Allies But User>. Update made by Irina.
 * 
 * Version 1.14: October 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Notetag section "Condition List" updated with the following:
 * *** *NOTE* JavaScript cannot be used without comparison operators to reduce
 *     error. This means if you want to check if a switch is on or not, don't
 *     simply use "$gameSwitches.value(42)" as it does not have any comparison
 *     operators. Instead, use "$gameSwitches.value(42) === true" to check.
 * ** Updated section "Regarding $gameTroop.turnCount() for A.I. Conditions"
 * * New Experimental Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** A.I. General Settings > Experimental > On-The-Spot A.I.
 * **** A.I. enemies/actors determine actions on the spot when it's their turn.
 * **** Functions akin to YEP's Battle A.I. Core where enemies determine new
 *      actions on the spot. Doing so will forcefully change the way the Turn
 *      Count is handled for Game_Battler to not utilize the +1.
 * **** This will forcefully remove the +1 towards the count and forcefully
 *      make enemies re-evaluate actions upon the start of the string of their
 *      actions. This comes with some side effects that will potentially give
 *      A.I. advantages or disadvantages depending on the battle system type.
 *      Action Speed becomes something that can be abused as it is normally
 *      something that is determined based on the queued actions. A.I. can pick
 *      a high speed weak action and then switch it for a slow speed strong
 *      action. There is no proper fix to this due to how on-the-spot A.I.
 *      works as it is ill-fitted for speed-relative battle systems. You have
 *      been warned.
 * **** In the event that this Plugin Parameter IS enabled, then using the
 *      turnCount JavaScript code should work again due to the normalization of
 *      how the turn property is calculated.
 * * Optimization Update!
 * ** Updated last version's newest change to be more optimized and occur upon
 *    each iteration of a new subject being determined to account for better
 *    check timing. Update made by Yanfly.
 * 
 * Version 1.13: October 13, 2021
 * * Feature Update!
 * ** A.I. Battlers with no currently determined actions, upon the start of the
 *    time frame for what would be their action, will have one more chance of
 *    determining a new action to use as to not waste their turns.
 * ** This does NOT mean that the A.I. Battlers will adjust their actions for
 *    one with a higher rating. The readjustment will only occur if there are
 *    no actions determined for that instance and only a one time window upon
 *    the start of the time frame for what would be their action.
 * ** Update made by Arisu.
 * 
 * Version 1.12: October 7, 2021
 * * Documentation Update!
 * ** Added section "Regarding $gameTroop.turnCount() for A.I. Conditions".
 * * Feature Update!
 * ** Any A.I. Conditions found with "turnCount()" will be automatically
 *    disabled in order to reduce confusion. This is due to how turnCount()
 *    functions do not accurately depict the current Turn Count depending on
 *    when the function runs. Update made by Olivia.
 * 
 * Version 1.11: September 30, 2021
 * * Bug Fixes!
 * ** Patched up a rare occurance of predetermined actions still having
 *    priority despite having no valid targets. Fix made by Olivia.
 * 
 * Version 1.10: September 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Olivia.
 * 
 * Version 1.09: July 9, 2021
 * * Bug Fixes!
 * ** Fixed a bug that caused "highest" and "lowest" target schemes to be
 *    inverted. Fix made by Arisu.
 * 
 * Version 1.08: April 16, 2021
 * * Feature Update!
 * ** Cached randomization seeds should no longer conflict with certain scope
 *    types. Update made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: January 22, 2021
 * * Bug Fixes!
 * ** <AI Target: x> notetags should no longer crashes. Fix made by Irina.
 * 
 * Version 1.06: January 8, 2021
 * * Feature Update!
 * ** For those using classic mode with a variance level of 0, action lists
 *    will be better shuffled to provide more variation between selected
 *    skills. Update made by Irina.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly!
 * *** <AI Target: type>
 * **** Bypasses TGR influence in favor of picking a specific target out of a
 *      group of valid targets (does not pick from outside the valid target
 *      group) for a skill target. Read documentation to see targeting types.
 * 
 * Version 1.04: December 18, 2020
 * * Documentation Update!
 * ** Added documentation for notetag <Reference AI: Enemy id>
 * *** - Actors are only able to use skills they would normally have access to.
 *       - Actors need to have LEARNED the skill.
 *       - Actors need to be able to access the skill's SKILL TYPE.
 *       - Actors need to have the RESOURCES to pay for the skill.
 *     - If you cannot figure out why an auto battle actor cannot use a
 *       specific skill, turn OFF auto battle and see if you can use the skill
 *       normally.
 * 
 * Version 1.03: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.02: November 1, 2020
 * * Bug Fixes!
 * ** Charmed battlers will no longer vanish when attack one another. Fix made
 *    by Yanfly.
 * 
 * Version 1.01: October 18, 2020
 * * Bug Fixes!
 * ** <All AI Conditiosn> and <Any AI Conditions> notetags are now fixed and
 *    should work properly. Fix made by Yanfly.
 *
 * Version 1.00: September 30, 2020
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
 * @param BattleAI
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
 * @text A.I. General Settings
 * @type struct<General>
 * @desc General settings pertaining to A.I.
 * @default {"AIStyle":"","ActorStyleAI:str":"classic","EnemyStyleAI:str":"classic","AILevel":"","ActorAILevel:num":"100","EnemyAILevel:num":"100","AIRating":"","ActorRatingVariance:num":"1","EnemyRatingVariance:num":"3","Reference":"","ActorAIReference:num":"0","Knowledge":"","LearnKnowledge:eval":"true","UnknownElementRate:num":"1.00"}
 *
 * @param Default:struct
 * @text A.I. Default Conditions
 * @type struct<Default>
 * @desc Give certain types of skills default conditions.
 * @default {"Enable?":"","EnableAllCon:eval":"true","EnableAnyCon:eval":"true","HpDamage":"","HpDamageAll:json":"\"\"","HpDamageAny:json":"\"Always\"","MpDamage":"","MpDamageAll:json":"\"Target MP > 0\"","MpDamageAny:json":"\"\"","HpRecover":"","HpRecoverAll:json":"\"\"","HpRecoverAny:json":"\"Target HP < Target MaxHP\"","MpRecover":"","MpRecoverAll:json":"\"\"","MpRecoverAny:json":"\"Target MP < Target MaxMP\"","HpDrain":"","HpDrainAll:json":"\"\"","HpDrainAny:json":"\"User HP < User MaxHP\"","MpDrain":"","MpDrainAll:json":"\"Target MP > 0\"","MpDrainAny:json":"\"\"","AddState":"","AddStateAll:json":"\"\"","AddStateAny:json":"\"Target Not State %1\\nTarget State %1 Turns <= 1\"","RemoveState":"","RemoveStateAll:json":"\"\"","RemoveStateAny:json":"\"Target Has State %1\"","AddBuff":"","AddBuffAll:json":"\"\"","AddBuffAny:json":"\"Target Not %1 Max Buff\\nTarget %1 Buff Turns <= 1\"","RemoveBuff":"","RemoveBuffAll:json":"\"\"","RemoveBuffAny:json":"\"Target Has %1 Buff\"","AddDebuff":"","AddDebuffAll:json":"\"\"","AddDebuffAny:json":"\"Target Not %1 Max Debuff\\nTarget %1 Debuff Turns <= 1\"","RemoveDebuff":"","RemoveDebuffAll:json":"\"\"","RemoveDebuffAny:json":"\"Target Has %1 Debuff\""}
 *
 * @param Weight:struct
 * @text A.I. => TGR Weight
 * @type struct<Weight>
 * @desc How do certain properties translate to TGR weight?
 * @default {"ElementTgr:eval":"true","ElementTgrRate:num":"1.25","EvaTgr:eval":"true","EvaTgrRate:num":"1.50","MevTgr:eval":"true","MevTgrRate:num":"2.00"}
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
 * A.I. General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param AIStyle
 * @text A.I. Style
 *
 * @param ActorStyleAI:str
 * @text Actor Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for referenced actors to use?
 * This does not apply to non-referenced actors.
 * @default classic
 *
 * @param EnemyStyleAI:str
 * @text Enemy Style
 * @parent AIStyle
 * @type select
 * @option Classic (Rating-Based with Rating Variance)
 * @value classic
 * @option Gambit (Order-Based, Ignores Rating System)
 * @value gambit
 * @option Casual (Random but follows A.I. Conditions)
 * @value casual
 * @option Random (Pure Random, ignores A.I. Conditions)
 * @value random
 * @desc Which A.I. style do you want for enemies to use?
 * @default classic
 *
 * @param AILevel
 * @text A.I. Level
 *
 * @param ActorAILevel:num
 * @text Actor A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for actor A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param EnemyAILevel:num
 * @text Enemy A.I. Level
 * @parent AILevel
 * @type number
 * @min 0
 * @max 100
 * @desc Default A.I. level used for enemy A.I.
 * Levels: 0-100. Higher is stricter.
 * @default 100
 *
 * @param AIRating
 * @text A.I. Ratings
 *
 * @param ActorRatingVariance:num
 * @text Actor Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 1
 *
 * @param EnemyRatingVariance:num
 * @text Enemy Rating Variance
 * @parent AIRating
 * @type number
 * @min 0
 * @max 9
 * @desc How much to allow variance from the A.I. rating by?
 * 0 for no variance. Higher numbers for more variance.
 * @default 3
 *
 * @param Reference
 *
 * @param ActorAIReference:num
 * @text Actor => AI Reference
 * @parent Reference
 * @type enemy
 * @desc Which enemy A.I. should the actor reference by default?
 * Use 0 for no references.
 * @default 0
 *
 * @param Knowledge
 *
 * @param LearnKnowledge:eval
 * @text Learn Knowledge
 * @parent Knowledge
 * @type boolean
 * @on Require
 * @off Don't Require
 * @desc Requires enemies/actors to test the knowledge of
 * the opponents before using specific conditions.
 * @default true
 *
 * @param UnknownElementRate:num
 * @text Unknown Element Rate
 * @parent LearnKnowledge:eval
 * @desc What should A.I. treat unknown element rates as?
 * @default 1.00
 * 
 * @param Experimental
 * 
 * @param OnSpotAI:eval
 * @text On-The-Spot A.I.
 * @parent Experimental
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc A.I. enemies/actors determine actions on the
 * spot when it's their turn.
 * @default false
 * 
 * @param SpotRemoveMotions:eval
 * @text No Idle Chant
 * @parent OnSpotAI:eval
 * @type boolean
 * @on Remove Idle Chanting
 * @off Allow Idle Chanting
 * @desc Requires On-The-Spot A.I. enabled. For A.I. Battlers,
 * disables idle chant motions due to inconsistency.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. Default Conditions
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param Enable?
 *
 * @param EnableAllCon:eval
 * @text All Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ALL' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param EnableAnyCon:eval
 * @text Any Conditions
 * @parent Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Create default 'ANY' conditions for all skills
 * without any AI notetags?
 * @default true
 *
 * @param HpDamage
 * @text HP Damage
 * 
 * @param HpDamageAll:json
 * @text All Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ALL' conditions used for HP damage skills.
 * @default ""
 * 
 * @param HpDamageAny:json
 * @text Any Conditions
 * @parent HpDamage
 * @type note
 * @desc Default 'ANY' conditions used for HP damage skills.
 * @default "Always"
 *
 * @param MpDamage
 * @text MP Damage
 * 
 * @param MpDamageAll:json
 * @text All Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ALL' conditions used for MP damage skills.
 * @default "Target MP > 0"
 *
 * @param MpDamageAny:json
 * @text Any Conditions
 * @parent MpDamage
 * @type note
 * @desc Default 'ANY' conditions used for MP damage skills.
 * @default ""
 *
 * @param HpRecover
 * @text HP Recover
 * 
 * @param HpRecoverAll:json
 * @text All Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ALL' conditions used for HP recovery skills.
 * @default ""
 *
 * @param HpRecoverAny:json
 * @text Any Conditions
 * @parent HpRecover
 * @type note
 * @desc Default 'ANY' conditions used for HP recovery skills.
 * @default "Target HP < Target MaxHP"
 *
 * @param MpRecover
 * @text MP Recover
 * 
 * @param MpRecoverAll:json
 * @text All Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ALL' conditions used for MP recovery skills.
 * @default ""
 *
 * @param MpRecoverAny:json
 * @text Any Conditions
 * @parent MpRecover
 * @type note
 * @desc Default 'ANY' conditions used for MP recovery skills.
 * @default "Target MP < Target MaxMP"
 *
 * @param HpDrain
 * @text HP Drain
 * 
 * @param HpDrainAll:json
 * @text All Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ALL' conditions used for HP drain skills.
 * @default ""
 *
 * @param HpDrainAny:json
 * @text Any Conditions
 * @parent HpDrain
 * @type note
 * @desc Default 'ANY' conditions used for HP drain skills.
 * @default "User HP < User MaxHP"
 *
 * @param MpDrain
 * @text MP Drain
 * 
 * @param MpDrainAll:json
 * @text All Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ALL' conditions used for MP drain skills.
 * @default "Target MP > 0"
 *
 * @param MpDrainAny:json
 * @text Any Conditions
 * @parent MpDrain
 * @type note
 * @desc Default 'ANY' conditions used for MP drain skills.
 * @default ""
 *
 * @param AddState
 * @text Add State
 * 
 * @param AddStateAll:json
 * @text All Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ALL' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddStateAny:json
 * @text Any Conditions
 * @parent AddState
 * @type note
 * @desc Default 'ANY' conditions used for adding states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not State %1\nTarget State %1 Turns <= 1"
 *
 * @param RemoveState
 * @text Remove State
 * 
 * @param RemoveStateAll:json
 * @text All Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ALL' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveStateAny:json
 * @text Any Conditions
 * @parent RemoveState
 * @type note
 * @desc Default 'ANY' conditions used for removing states.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has State %1"
 *
 * @param AddBuff
 * @text Add Buff
 * 
 * @param AddBuffAll:json
 * @text All Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ALL' conditions used for adding buffs.
 * %1 - Dynamic values (ie param names).
 * @default ""
 *
 * @param AddBuffAny:json
 * @text Any Conditions
 * @parent AddBuff
 * @type note
 * @desc Default 'ANY' conditions used for adding buffs.
 * %1 - Dynamic values (ie param's).
 * @default "Target Not %1 Max Buff\nTarget %1 Buff Turns <= 1"
 *
 * @param RemoveBuff
 * @text Remove Buff
 * 
 * @param RemoveBuffAll:json
 * @text All Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ALL' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveBuffAny:json
 * @text Any Conditions
 * @parent RemoveBuff
 * @type note
 * @desc Default 'ANY' conditions used for removing buffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Buff"
 *
 * @param AddDebuff
 * @text Add Debuff
 * 
 * @param AddDebuffAll:json
 * @text All Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ALL' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param AddDebuffAny:json
 * @text Any Conditions
 * @parent AddDebuff
 * @type note
 * @desc Default 'ANY' conditions used for adding debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Not %1 Max Debuff\nTarget %1 Debuff Turns <= 1"
 *
 * @param RemoveDebuff
 * @text Remove Debuff
 * 
 * @param RemoveDebuffAll:json
 * @text All Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ALL' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default ""
 *
 * @param RemoveDebuffAny:json
 * @text Any Conditions
 * @parent RemoveDebuff
 * @type note
 * @desc Default 'ANY' conditions used for removing debuffs.
 * %1 - Dynamic values (ie state ID's).
 * @default "Target Has %1 Debuff"
 *
 */
/* ----------------------------------------------------------------------------
 * A.I. => TGR Weight Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Weight:
 *
 * @param ElementTgr:eval
 * @text Element Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider elemental rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param ElementTgrRate:num
 * @text Influence Rate
 * @parent ElementTgr:eval
 * @desc This determines the default level of influence elemental
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param EvaTgr:eval
 * @text EVA Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider EVA rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param EvaTgrRate:num
 * @text Influence Rate
 * @parent EvaTgr:eval
 * @desc This determines the default level of influence EVA
 * rates have on TGR weight.
 * @default 1.50
 *
 * @param MevTgr:eval
 * @text MEV Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MEV rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MevTgrRate:num
 * @text Influence Rate
 * @parent MevTgr:eval
 * @desc This determines the default level of influence MEV
 * rates have on TGR weight.
 * @default 2.00
 *
 * @param PdrTgr:eval
 * @text PDR Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider PDR rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param PdrTgrRate:num
 * @text Influence Rate
 * @parent PdrTgr:eval
 * @desc This determines the default level of influence PDR
 * rates have on TGR weight.
 * @default 1.25
 *
 * @param MdrTgr:eval
 * @text MDR Rate => TGR
 * @type boolean
 * @on Influence
 * @off Normal
 * @desc Makes all A.I. consider MDR rates when considering
 * TGR weight by default?
 * @default true
 *
 * @param MdrTgrRate:num
 * @text Influence Rate
 * @parent MdrTgr:eval
 * @desc This determines the default level of influence MDR
 * rates have on TGR weight.
 * @default 1.50
 *
 */
//=============================================================================

const _0x118809=_0x9f0e;function _0x3be5(){const _0x3d2086=['apply','_rngChance','_aiTgrInfluence','needsSelection','LearnKnowledge','endAction','bypassMevTgr','AI\x20Manager\x20could\x20not\x20determine\x20this\x20value:\x20%1','Game_Action_apply','isStateAffected','canGuard','EFFECT_REMOVE_STATE','isAggroAffected','setAiTgrInfluences','referenceEnemyForAI','currentAction','aiTarget','ActorAIReference','setup','damage','meetsHpCondition','Game_BattlerBase_revive','isDetermineActionByAI','mpRate','_stateTurns','Game_BattlerBase_sparam','makeAutoBattleActionsWithEnemyAI','filter','randomInt','scope','autoRemovalTiming','Game_BattlerBase_die','elementInfluenceRate','revive','ARRAYSTR','isSTB','startAction','SpotRemoveMotions','isFTB','456873WOKzcb','elementId','tpRate','initBattleAI','clearAiTgrInfluence','MAXTP','mdrInfluenceRate','MpRecover%1','selectAllActionsGambit','isEnemy','PdrTgrRate','numActions','usableSkills','BattleManager_startAction','parameters','8FyZbHs','actions','map','actor','VisuMZ_2_BattleSystemETB\x20needs\x20to\x20be\x20updated\x20','LUK','checkSkillTargets','addAIKnowledge','enemy','Game_Battler_turnCount','meetsMpCondition','buff','determineTargetActionByAIisStillValid','elementKnowledgeRate','noCondition','TRG','param','aiLevel','EXR','isForDeadFriend','clearAIKnowledge','CNT','BattleSystemETB','VisuMZ_1_ElementStatusCore','getEnemyIdWithName','slice','MpDrain%1','max','AddState%1','status','elementInfluence','clamp','pdr','isPlaytest','Game_Action_isForOpponentBattleCore','aiApplyMdrTgrInfluenceRate','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','113310vEzsWz','getAllConditions','getElementIdWithName','HIT','aiTgrInfluence','Default','aiElementTgr','EVA','makeActions','selectAllActionsRandom','TP%','BattleSystemPTB','code','508146CwRTwB','meetsTurnCondition','hasElementAIKnowledge','value1','skillId','forcedTargets','initialize','MAXHP','JSON','push','remove','isActionValid','includes','aiMdrTgr','LAST','PHA','elementRate','determineLineValue','15AaaXVW','applyBattleAiTgrInfluences','makeAutoBattleActions','Game_Action_makeTargets','STR','isActor','evaInfluenceRate','rating','doesAIApplyEvaTgrInfluence','HIGHEST','elements','onBattleEnd','createFilterTarget','TGR','effects','DEF','%1\x20%2\x20%3','doesTargetMeetAllConditions','MDR','isForFriend','is%1Affected','CRI','EVAL','determineActionByAIisStillValid','classic','die','bypassElementTgr','doesAIApplyMdrTgrInfluence','states','Any','getDefaultAnyConditions','level','_stateIDs','concat','isSkill','_subject','VisuMZ_2_BattleSystemPTB','UnknownElementRate','isForOpponent','filterForcedTargeting','format','checkTeamBasedTurnCountAI','MevTgr','General','elementIds','addXParamAIKnowledge','length','aiApplyElementalTgrInfluenceRate','MevTgrRate','isForEveryone','Game_Unit_randomTarget','MpDamage%1','USER','evaRates','addElementAIKnowledge','_forceValidTargets','aiStyle','sparam','isDamage','makeDefaultConditions','hasForcedTargets','setSkill','FUNC','name','For\x20more\x20information,\x20view\x20the\x20help\x20file.','1959460whLPRB','Game_Unit_aliveMembers','highestTgrMember','getStateIdWithName','call','HpDamage%1','aiApplyEvaTgrInfluenceRate','MRF','version','HpRecover%1','hasXParamAIKnowledge','ARRAYSTRUCT','181820CdOZWE','NEGATIVE\x20STATE\x20COUNT','MDF','mev','selectAllActions','708431fForSW','makeTargets','CEV','pdrInfluenceRate','3434438Wemori','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','bypassMdrTgr','dataId','makeValidTargets','attackSkillId','setEnemyAction','isPhysical','isTpb','aliveMembers','clearForcedTargets','MEV','aiMevTgr','1035SEFCrM','BattleManager_endAction','isChanting','ARRAYEVAL','note','isForAnyone','ElementTgrRate','charAt','POSITIVE','ConvertParams','itemTargetCandidates','EvaTgr','_aiKnowledge','VisuMZ_2_BattleSystemPTB\x20needs\x20to\x20be\x20updated\x20','currentClass','aiRatingVariance','isForAnyoneFocusOpponents','removeOncePerTurnAction','prototype','ActorStyleAI','value2','POSITIVE\x20STATE\x20COUNT','gambit','All','exit','_regexp','getAnyConditions','aiPdrTgr','xparam','aiApplyMevTgrInfluenceRate','aiKnowledge','mmp','RemoveDebuff%1','OnSpotAI','makeDeepCopy','The\x20reason\x20is\x20due\x20to\x20the\x20turnCount()\x20function.\x0a','EFFECT_ADD_DEBUFF','VisuMZ_4_AggroControl','indexOf','log','ATK','selectAllActionsClassic','MRG','turnCount','Game_Battler_makeActions','AI\x20Manager\x20condition\x20cannot\x20be\x20met:\x20%1','MAT','isMagical','match','replace','randomTarget','Game_Troop_setup','VisuMZ_1_BattleCore','ALWAYS','toUpperCase','Weight','mhp','_applyAIForcedTargetFilters','Game_Battler_onBattleStart','VisuMZ_2_BattleSystemFTB','selectAction','friendsUnit','onAllActionsEnd','isForOpponentBattleCore','BattleManager_getNextSubject','PdrTgr','Game_Actor_makeAutoBattleActions','_forceAction','isForAnyoneFocusFriends','aiApplyPdrTgrInfluenceRate','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_buffTurns','doesTargetMeetCondition','action','trim','The\x20following\x20line\x20is\x20not\x20supported\x20by\x20Battle\x20A.I.:\x0a\x0a','subject','EFFECT_ADD_BUFF','getNextSubject','AGI','mdr','doesTargetMeetAIConditions','MAX_SAFE_INTEGER','aiEvaTgr','isForNotUser','mevInfluenceRate','getDefaultAllConditions','hpRate','item','isAutoBattle','hasValidTargets','Game_Battler_onBattleEnd','determineNewValidAIAction','meetsStateCondition','Settings','doesTargetMeetAnyConditions','maxTp','VisuMZ_2_AggroControlSystem','reduce','NEGATIVE','RemoveBuff%1','EFFECT_RECOVER_HP','MdrTgrRate','onBattleStart','Game_Unit_initialize','doesAIApplyPdrTgrInfluence','value','meetsSwitchCondition','Game_Battler_isChanting','random','parse','ElementTgr','EnemyAILevel','doesAIApplyMevTgrInfluence','EnableAnyCon','guardSkillId','LEVEL','AddBuff%1','TCR','passesAILevel','in\x20order\x20for\x20VisuMZ_3_BattleAI\x20to\x20work.','GRD','canAttack','STATE\x20COUNT','BattleAI','isDebuffAffected','Game_Battler_onAllActionsEnd','ARRAYNUM','deadMembers','_elementIDs','opponentsUnit','MCR','_alertTurnCount','PDR','_onSpotMadeActionsDeterminedByAI','attackElements','casual','bypassPdrTgr','meetsCondition','allCondition','applyBattleAI','isMax%1Affected','EvaTgrRate','enemyId','eva','elementRates','EnemyRatingVariance','EnableAllCon','statesByCategory','description','MAXMP','isConfused','VisuMZ_1_SkillsStatesCore','ActorAILevel','Game_Enemy_isActionValid','toLowerCase','actorId','split','ShuffleArray','ARRAYJSON','doesAIApplyElementalTgrInfluence','VisuMZ_2_BattleSystemETB','mevRates','HP%'];_0x3be5=function(){return _0x3d2086;};return _0x3be5();}(function(_0x53d9d5,_0x26e6a0){const _0x394ee6=_0x9f0e,_0x41dba9=_0x53d9d5();while(!![]){try{const _0x240c7f=-parseInt(_0x394ee6(0x19b))/0x1+-parseInt(_0x394ee6(0x2b8))/0x2+parseInt(_0x394ee6(0x277))/0x3+-parseInt(_0x394ee6(0x18a))/0x4+-parseInt(_0x394ee6(0x2ca))/0x5*(-parseInt(_0x394ee6(0x2ab))/0x6)+parseInt(_0x394ee6(0x19f))/0x7*(-parseInt(_0x394ee6(0x286))/0x8)+parseInt(_0x394ee6(0x1ac))/0x9*(parseInt(_0x394ee6(0x196))/0xa);if(_0x240c7f===_0x26e6a0)break;else _0x41dba9['push'](_0x41dba9['shift']());}catch(_0xf03138){_0x41dba9['push'](_0x41dba9['shift']());}}}(_0x3be5,0x57209));var label='BattleAI',tier=tier||0x0,dependencies=[_0x118809(0x1e0)],pluginData=$plugins[_0x118809(0x26b)](function(_0x3391a1){const _0xe9909c=_0x118809;return _0x3391a1[_0xe9909c(0x2a3)]&&_0x3391a1[_0xe9909c(0x241)][_0xe9909c(0x2c4)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label]['Settings']||{},VisuMZ[_0x118809(0x1b5)]=function(_0x5cd694,_0x15871f){const _0x30acdf=_0x118809;for(const _0x5b4b49 in _0x15871f){if(_0x5b4b49['match'](/(.*):(.*)/i)){const _0x3b2873=String(RegExp['$1']),_0x172d23=String(RegExp['$2'])[_0x30acdf(0x1e2)]()[_0x30acdf(0x1f6)]();let _0x35accc,_0x30e9ae,_0x3826af;switch(_0x172d23){case'NUM':_0x35accc=_0x15871f[_0x5b4b49]!==''?Number(_0x15871f[_0x5b4b49]):0x0;break;case _0x30acdf(0x22b):_0x30e9ae=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):[],_0x35accc=_0x30e9ae['map'](_0x40802e=>Number(_0x40802e));break;case _0x30acdf(0x2e0):_0x35accc=_0x15871f[_0x5b4b49]!==''?eval(_0x15871f[_0x5b4b49]):null;break;case _0x30acdf(0x1af):_0x30e9ae=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):[],_0x35accc=_0x30e9ae[_0x30acdf(0x288)](_0xc45aba=>eval(_0xc45aba));break;case _0x30acdf(0x2c0):_0x35accc=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):'';break;case _0x30acdf(0x24b):_0x30e9ae=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):[],_0x35accc=_0x30e9ae['map'](_0xd0bde5=>JSON[_0x30acdf(0x21a)](_0xd0bde5));break;case _0x30acdf(0x187):_0x35accc=_0x15871f[_0x5b4b49]!==''?new Function(JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49])):new Function('return\x200');break;case'ARRAYFUNC':_0x30e9ae=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):[],_0x35accc=_0x30e9ae[_0x30acdf(0x288)](_0xe63fd9=>new Function(JSON[_0x30acdf(0x21a)](_0xe63fd9)));break;case _0x30acdf(0x2ce):_0x35accc=_0x15871f[_0x5b4b49]!==''?String(_0x15871f[_0x5b4b49]):'';break;case _0x30acdf(0x272):_0x30e9ae=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):[],_0x35accc=_0x30e9ae['map'](_0x5d857e=>String(_0x5d857e));break;case'STRUCT':_0x3826af=_0x15871f[_0x5b4b49]!==''?JSON[_0x30acdf(0x21a)](_0x15871f[_0x5b4b49]):{},_0x35accc=VisuMZ[_0x30acdf(0x1b5)]({},_0x3826af);break;case _0x30acdf(0x195):_0x30e9ae=_0x15871f[_0x5b4b49]!==''?JSON['parse'](_0x15871f[_0x5b4b49]):[],_0x35accc=_0x30e9ae[_0x30acdf(0x288)](_0x203878=>VisuMZ['ConvertParams']({},JSON[_0x30acdf(0x21a)](_0x203878)));break;default:continue;}_0x5cd694[_0x3b2873]=_0x35accc;}}return _0x5cd694;},(_0x54f2b5=>{const _0x5b4c5c=_0x118809,_0x1631fc=_0x54f2b5[_0x5b4c5c(0x188)];for(const _0xdba399 of dependencies){if(!Imported[_0xdba399]){alert(_0x5b4c5c(0x1a0)[_0x5b4c5c(0x171)](_0x1631fc,_0xdba399)),SceneManager['exit']();break;}}const _0x2d0deb=_0x54f2b5[_0x5b4c5c(0x241)];if(_0x2d0deb['match'](/\[Version[ ](.*?)\]/i)){const _0x126bcd=Number(RegExp['$1']);_0x126bcd!==VisuMZ[label][_0x5b4c5c(0x192)]&&(alert(_0x5b4c5c(0x2aa)[_0x5b4c5c(0x171)](_0x1631fc,_0x126bcd)),SceneManager[_0x5b4c5c(0x1c4)]());}if(_0x2d0deb[_0x5b4c5c(0x1dc)](/\[Tier[ ](\d+)\]/i)){const _0x523713=Number(RegExp['$1']);_0x523713<tier?(alert(_0x5b4c5c(0x1f2)[_0x5b4c5c(0x171)](_0x1631fc,_0x523713,tier)),SceneManager['exit']()):tier=Math['max'](_0x523713,tier);}VisuMZ[_0x5b4c5c(0x1b5)](VisuMZ[label][_0x5b4c5c(0x20a)],_0x54f2b5[_0x5b4c5c(0x285)]);})(pluginData);function _0x9f0e(_0x5bb56e,_0x216460){const _0x3be50a=_0x3be5();return _0x9f0e=function(_0x9f0ea2,_0x27cb9e){_0x9f0ea2=_0x9f0ea2-0x171;let _0x48b278=_0x3be50a[_0x9f0ea2];return _0x48b278;},_0x9f0e(_0x5bb56e,_0x216460);}function AIManager(){throw new Error('This\x20is\x20a\x20static\x20class');}AIManager[_0x118809(0x1c5)]={'noCondition':/<NO AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'allCondition':/<ALL AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ALL AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'anyCondition':/<ANY AI (?:TARGETS|CONDITION|CONDITIONS)>\s*([\s\S]*)\s*<\/ANY AI (?:TARGETS|CONDITION|CONDITIONS)>/i,'bypassElementTgr':/<(?:NO|BYPASS) AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE>/i,'bypassEvaTgr':/<(?:NO|BYPASS) AI (?:EVA|EVASION) INFLUENCE>/i,'bypassMevTgr':/<(?:NO|BYPASS) AI (?:MEV|MAGIC EVASION) INFLUENCE>/i,'bypassPdrTgr':/<(?:NO|BYPASS) AI (?:PDR|PHYSICAL DAMAGE RATE) INFLUENCE>/i,'bypassMdrTgr':/<(?:NO|BYPASS) AI (?:MDR|MAGICAL DAMAGE RATE) INFLUENCE>/i,'aiElementTgr':/<AI (?:ELEMENT|ELEMENTAL|ELEMENT RATE) INFLUENCE: (.*)>/i,'aiEvaTgr':/<AI (?:EVA|EVASION) INFLUENCE: (.*)>/i,'aiMevTgr':/<AI (?:MEV|MAGIC EVASION) INFLUENCE: (.*)>/i,'aiPdrTgr':/<AI (?:PDR|PHYSICAL DAMAGE RATE) INFLUENCE: (.*)>/i,'aiMdrTgr':/<AI (?:MDR|MAGICAL DAMAGE RATE) INFLUENCE: (.*)>/i,'aiLevel':/<AI LEVEL: (\d+)>/i,'aiRatingVariance':/<AI RATING VARIANCE: (\d+)>/i,'aiTarget':/<AI (?:TARGET|TARGETS):[ ](.*)>/i,'aiStyle':/<AI STYLE:[ ](.*)>/i},AIManager['isConditionalAI']=function(_0x11ece6){const _0x5e16b4=_0x118809;if(!_0x11ece6)return![];return this[_0x5e16b4(0x2ac)](_0x11ece6)[_0x5e16b4(0x177)]>0x0||this[_0x5e16b4(0x1c6)](_0x11ece6)[_0x5e16b4(0x177)]>0x0;},AIManager[_0x118809(0x2ac)]=function(_0x526fc6){const _0x4851ad=_0x118809;if(_0x526fc6[_0x4851ad(0x1b0)][_0x4851ad(0x1dc)](AIManager[_0x4851ad(0x1c5)]['noCondition']))return[];else return _0x526fc6['note'][_0x4851ad(0x1dc)](AIManager[_0x4851ad(0x1c5)]['allCondition'])?String(RegExp['$1'])[_0x4851ad(0x249)](/[\r\n]+/)[_0x4851ad(0x2c2)](''):this[_0x4851ad(0x202)](_0x526fc6);},AIManager['getAnyConditions']=function(_0x31c904){const _0x371d0e=_0x118809;if(_0x31c904[_0x371d0e(0x1b0)][_0x371d0e(0x1dc)](AIManager['_regexp'][_0x371d0e(0x294)]))return[];else return _0x31c904['note'][_0x371d0e(0x1dc)](AIManager[_0x371d0e(0x1c5)]['anyCondition'])?String(RegExp['$1'])['split'](/[\r\n]+/)[_0x371d0e(0x2c2)](''):this['getDefaultAnyConditions'](_0x31c904);},AIManager['getDefaultAllConditions']=function(_0x3854f2){const _0x2d0ef1=_0x118809;if(!VisuMZ[_0x2d0ef1(0x228)][_0x2d0ef1(0x20a)][_0x2d0ef1(0x2b0)][_0x2d0ef1(0x23f)])return[];if(_0x3854f2[_0x2d0ef1(0x1b0)][_0x2d0ef1(0x1dc)](AIManager[_0x2d0ef1(0x1c5)]['anyCondition']))return[];return this['makeDefaultConditions'](_0x3854f2,_0x2d0ef1(0x1c3));},AIManager[_0x118809(0x2e8)]=function(_0x149f16){const _0xe811c7=_0x118809;if(!VisuMZ[_0xe811c7(0x228)][_0xe811c7(0x20a)][_0xe811c7(0x2b0)][_0xe811c7(0x21e)])return[];if(_0x149f16[_0xe811c7(0x1b0)][_0xe811c7(0x1dc)](AIManager[_0xe811c7(0x1c5)][_0xe811c7(0x237)]))return[];return this[_0xe811c7(0x184)](_0x149f16,_0xe811c7(0x2e7));},AIManager[_0x118809(0x184)]=function(_0x30170e,_0x58194a){const _0x3736c1=_0x118809;if(!_0x30170e)return[];const _0x38e67b=VisuMZ[_0x3736c1(0x228)]['Settings'][_0x3736c1(0x2b0)],_0x23a2a3=[_0x3736c1(0x2bf),_0x3736c1(0x242),_0x3736c1(0x1d4),_0x3736c1(0x2d9),_0x3736c1(0x1da),_0x3736c1(0x198),'AGI','LUK'],_0x49ce84=_0x30170e['damage']['type'],_0x18cac3=_0x30170e[_0x3736c1(0x2d8)];let _0x328ee7=[],_0x319711='',_0x4f6706='';switch(_0x49ce84){case 0x1:_0x319711=_0x3736c1(0x18f)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7['concat'](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case 0x2:_0x319711=_0x3736c1(0x17c)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case 0x3:_0x319711=_0x3736c1(0x193)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7['concat'](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)['remove'](''));break;case 0x4:_0x319711=_0x3736c1(0x27e)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case 0x5:_0x319711='HpDrain%1'[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case 0x6:_0x319711=_0x3736c1(0x2a0)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706['split'](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;}for(const _0x554bc0 of _0x18cac3){if(!_0x554bc0)continue;switch(_0x554bc0[_0x3736c1(0x2b7)]){case Game_Action[_0x3736c1(0x211)]:if(_0x554bc0[_0x3736c1(0x2bb)]>0x0||_0x554bc0[_0x3736c1(0x1c0)]>0x0)_0x319711='HpRecover%1'[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));else(_0x554bc0['value1']<0x0||_0x554bc0['value2']<0x0)&&(_0x319711=_0x3736c1(0x18f)['format'](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)]('')));break;case Game_Action['EFFECT_RECOVER_MP']:if(_0x554bc0['value1']>0x0||_0x554bc0[_0x3736c1(0x1c0)]>0x0)_0x319711='MpRecover%1'[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));else(_0x554bc0[_0x3736c1(0x2bb)]<0x0||_0x554bc0[_0x3736c1(0x1c0)]<0x0)&&(_0x319711=_0x3736c1(0x17c)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711],_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)]('')));break;case Game_Action['EFFECT_ADD_STATE']:if(_0x554bc0[_0x3736c1(0x1a2)]===0x0)continue;_0x319711=_0x3736c1(0x2a2)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711][_0x3736c1(0x171)](_0x554bc0[_0x3736c1(0x1a2)]),_0x328ee7=_0x328ee7['concat'](_0x4f6706['split'](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case Game_Action[_0x3736c1(0x25b)]:_0x319711='RemoveState%1'[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711][_0x3736c1(0x171)](_0x554bc0[_0x3736c1(0x1a2)]),_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case Game_Action[_0x3736c1(0x1f9)]:_0x319711=_0x3736c1(0x221)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711][_0x3736c1(0x171)](_0x23a2a3[_0x554bc0[_0x3736c1(0x1a2)]]),_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706['split'](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case Game_Action[_0x3736c1(0x1d0)]:_0x319711='AddDebuff%1'[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711]['format'](_0x23a2a3[_0x554bc0[_0x3736c1(0x1a2)]]),_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;case Game_Action['EFFECT_REMOVE_BUFF']:_0x319711=_0x3736c1(0x210)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711][_0x3736c1(0x171)](_0x23a2a3[_0x554bc0[_0x3736c1(0x1a2)]]),_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706[_0x3736c1(0x249)](/[\r\n]+/)['remove'](''));break;case Game_Action['EFFECT_REMOVE_DEBUFF']:_0x319711=_0x3736c1(0x1cc)[_0x3736c1(0x171)](_0x58194a),_0x4f6706=_0x38e67b[_0x319711][_0x3736c1(0x171)](_0x23a2a3[_0x554bc0['dataId']]),_0x328ee7=_0x328ee7[_0x3736c1(0x2eb)](_0x4f6706['split'](/[\r\n]+/)[_0x3736c1(0x2c2)](''));break;}}return _0x328ee7;},AIManager['forceValidTargets']=function(_0x3a2561,_0xb9096d){const _0x471332=_0x118809;this[_0x471332(0x180)]=this[_0x471332(0x1a3)](_0x3a2561,_0xb9096d);},AIManager[_0x118809(0x1a9)]=function(){const _0x2a3200=_0x118809;this[_0x2a3200(0x180)]=[];},AIManager[_0x118809(0x2bd)]=function(){const _0x279f24=_0x118809;return this[_0x279f24(0x180)]=this[_0x279f24(0x180)]||[],this[_0x279f24(0x180)];},AIManager[_0x118809(0x185)]=function(){const _0x560d8a=_0x118809;return this[_0x560d8a(0x2bd)]()[_0x560d8a(0x177)]>0x0;},AIManager[_0x118809(0x206)]=function(_0x4dc1c0,_0x437fca){const _0x416dc5=_0x118809;if(!_0x4dc1c0)return![];if(!_0x437fca)return![];if(!DataManager[_0x416dc5(0x2ec)](_0x437fca))return;return this['isConditionalAI'](_0x437fca)?this[_0x416dc5(0x1a3)](_0x4dc1c0,_0x437fca)[_0x416dc5(0x177)]>=0x1:!![];},AIManager['makeValidTargets']=function(_0x334234,_0x39044a){const _0x2117e2=_0x118809;let _0x1a9883=[];if(this['isConditionalAI'](_0x39044a)){const _0x47fff0=this[_0x2117e2(0x2ac)](_0x39044a),_0x47870e=this[_0x2117e2(0x1c6)](_0x39044a),_0x3000f4=new Game_Action(_0x334234);_0x3000f4[_0x2117e2(0x186)](_0x39044a['id']);let _0x4592cc=AIManager[_0x2117e2(0x28c)](_0x334234,_0x3000f4);this[_0x2117e2(0x251)]=Math[_0x2117e2(0x219)](),_0x1a9883=_0x4592cc[_0x2117e2(0x26b)](_0x115897=>this[_0x2117e2(0x1fd)](_0x334234,_0x115897,_0x39044a,_0x47fff0,_0x47870e));}return _0x1a9883;},AIManager['checkSkillTargets']=function(_0x4398b0,_0x3584da){const _0x7f4c63=_0x118809;let _0x4067ff=[];if(Imported[_0x7f4c63(0x20d)]&&_0x3584da[_0x7f4c63(0x25c)]()){const _0x46e9d9=_0x3584da['isForOpponent']()?_0x4398b0['opponentsUnit']():_0x4398b0[_0x7f4c63(0x1e9)]();_0x4067ff=[_0x46e9d9[_0x7f4c63(0x18c)]()];}else{if(_0x3584da[_0x7f4c63(0x17a)]())_0x4067ff=$gameParty['aliveMembers']()[_0x7f4c63(0x2eb)]($gameTroop['aliveMembers']());else{if(_0x3584da[_0x7f4c63(0x1b1)]&&_0x3584da[_0x7f4c63(0x1b1)]()){const _0xcc7bb5=_0x3584da[_0x7f4c63(0x204)]()[_0x7f4c63(0x26d)];if(_0x3584da[_0x7f4c63(0x1bc)]())_0x4067ff=_0x4398b0['opponentsUnit']()['aliveMembers']();else _0x3584da[_0x7f4c63(0x1f0)]()&&(_0x4067ff=_0x4398b0[_0x7f4c63(0x1e9)]()[_0x7f4c63(0x1a8)]());}else{if(_0x3584da[_0x7f4c63(0x2f0)]())_0x4067ff=_0x4398b0[_0x7f4c63(0x22e)]()[_0x7f4c63(0x1a8)]();else{if(_0x3584da[_0x7f4c63(0x299)]())_0x4067ff=_0x4398b0['friendsUnit']()['deadMembers']();else _0x3584da[_0x7f4c63(0x2dd)]()&&!_0x3584da['isForDeadFriend']()&&(_0x4067ff=_0x4398b0[_0x7f4c63(0x1e9)]()[_0x7f4c63(0x1a8)]());}}}}return _0x3584da[_0x7f4c63(0x200)]&&_0x3584da['isForNotUser']()&&_0x4067ff['remove'](_0x4398b0),_0x4067ff;},AIManager[_0x118809(0x1fd)]=function(_0x1296db,_0x3cb853,_0x2171a3,_0x45887b,_0x9dd48){const _0x481854=_0x118809;return this[_0x481854(0x2db)](_0x1296db,_0x3cb853,_0x2171a3,_0x45887b)&&this[_0x481854(0x20b)](_0x1296db,_0x3cb853,_0x2171a3,_0x9dd48);},AIManager[_0x118809(0x2db)]=function(_0x19283f,_0x463761,_0x5c3d52,_0x1b50dc){const _0x2777a2=_0x118809;if(_0x1b50dc['length']<=0x0)return!![];for(const _0x1316b9 of _0x1b50dc){if(!_0x1316b9)continue;if(_0x1316b9['length']<=0x0)continue;if(!this[_0x2777a2(0x223)](_0x19283f))return!![];if(!this[_0x2777a2(0x1f4)](_0x19283f,_0x463761,_0x5c3d52,_0x1316b9))return![];}return!![];},AIManager[_0x118809(0x20b)]=function(_0x548203,_0x17ddb3,_0x2a89b2,_0x53482c){const _0x35ccf2=_0x118809;if(_0x53482c['length']<=0x0)return!![];for(const _0x46b326 of _0x53482c){if(!_0x46b326)continue;if(_0x46b326['length']<=0x0)continue;if(!this[_0x35ccf2(0x223)](_0x548203))return!![];if(this[_0x35ccf2(0x1f4)](_0x548203,_0x17ddb3,_0x2a89b2,_0x46b326))return!![];}return![];},AIManager[_0x118809(0x223)]=function(_0x57e9d7){const _0xf3b67b=_0x118809,_0xeefe33=_0x57e9d7['aiLevel']();return Math[_0xf3b67b(0x26c)](0x64)<_0xeefe33;},AIManager[_0x118809(0x1f4)]=function(_0x539cee,_0x2340b3,_0x22f057,_0x2d5d89){const _0x409551=_0x118809,_0x231cbf=[_0x409551(0x2bf),_0x409551(0x242),_0x409551(0x1d4),'DEF',_0x409551(0x1da),_0x409551(0x198),'AGI',_0x409551(0x28b)];if(_0x2d5d89[_0x409551(0x1e2)]()['trim']()===_0x409551(0x1e1))return!![];const _0x3dad4d=_0x539cee;if(!VisuMZ['BattleAI'][_0x409551(0x20a)][_0x409551(0x174)]['OnSpotAI']){if(_0x2d5d89[_0x409551(0x1dc)](/turnCount\(\)/i)){if($gameTemp['isPlaytest']()&&!this['_alertTurnCount']){let _0x1ec8b6=_0x409551(0x1f7);_0x1ec8b6+=_0x2d5d89+'\x0a\x0a',_0x1ec8b6+=_0x409551(0x1cf),_0x1ec8b6+=_0x409551(0x189),alert(_0x1ec8b6),this[_0x409551(0x230)]=!![];}return![];}}if(_0x2d5d89[_0x409551(0x1dc)](/(.*) (\>=|\>|===|!==|\<|\<=) (.*)/i)){const _0x527a0a=[String(RegExp['$1']),String(RegExp['$2']),String(RegExp['$3'])],_0x14a95a=this[_0x409551(0x2c9)](_0x539cee,_0x2340b3,_0x22f057,_0x527a0a[0x0]),_0x261535=_0x527a0a[0x1],_0x1a2435=this[_0x409551(0x2c9)](_0x539cee,_0x2340b3,_0x22f057,_0x527a0a[0x2]);window['user']=window['a']=window['b']=undefined;const _0x324743=_0x409551(0x2da)[_0x409551(0x171)](_0x14a95a,_0x261535,_0x1a2435);try{return eval(_0x324743);}catch(_0x82b5b0){return $gameTemp[_0x409551(0x2a7)]()&&(console[_0x409551(0x1d3)](_0x409551(0x1d9)[_0x409551(0x171)](_0x2d5d89)),console[_0x409551(0x1d3)](_0x82b5b0)),!![];}}else{if(_0x2d5d89[_0x409551(0x1dc)](/(\d+\.?\d*)([%％]) CHANCE/i)){const _0x21a437=Number(RegExp['$1'])*0.01;return this['_rngChance']<_0x21a437;}else{if(_0x2d5d89[_0x409551(0x1dc)](/SWITCH (\d+) (ON|OFF|TRUE|FALSE)/i)){const _0x3950c5=Number(RegExp['$1']),_0x4cde82=String(RegExp['$2'])['toLowerCase'](),_0x165992=_0x4cde82[_0x409551(0x1dc)](/ON|TRUE/i);return $gameSwitches[_0x409551(0x216)](_0x3950c5)===_0x165992;}else{if(_0x2d5d89[_0x409551(0x1dc)](/(.*) IS ACTOR/i)){const _0x172d8d=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3;return _0x172d8d['isActor']();}else{if(_0x2d5d89[_0x409551(0x1dc)](/(.*) IS ENEMY/i)){const _0x5a43e6=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3;return _0x5a43e6['isEnemy']();}else{if(_0x2d5d89['match'](/(.*) HAS STATE (\d+)/i)){const _0x4b2962=$dataStates[Number(RegExp['$2'])],_0x24102f=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3;return _0x24102f[_0x409551(0x2e6)]()[_0x409551(0x2c4)](_0x4b2962);}else{if(_0x2d5d89[_0x409551(0x1dc)](/(.*) HAS STATE (.*)/i)){const _0x4ee08c=$dataStates[DataManager[_0x409551(0x18d)](RegExp['$2'])],_0x2a5620=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3;return _0x2a5620[_0x409551(0x2e6)]()['includes'](_0x4ee08c);}else{if(_0x2d5d89['match'](/(.*) NOT STATE (\d+)/i)){const _0x3fa936=$dataStates[Number(RegExp['$2'])],_0x181eff=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3;return!_0x181eff[_0x409551(0x2e6)]()[_0x409551(0x2c4)](_0x3fa936);}else{if(_0x2d5d89[_0x409551(0x1dc)](/(.*) NOT STATE (.*)/i)){const _0x117b77=$dataStates[DataManager[_0x409551(0x18d)](RegExp['$2'])],_0x1446b5=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3;return!_0x1446b5['states']()[_0x409551(0x2c4)](_0x117b77);}else{if(_0x2d5d89[_0x409551(0x1dc)](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x110e23=_0x231cbf['indexOf'](String(RegExp['$2'])[_0x409551(0x1e2)]()['trim']()),_0x443a4b=String(RegExp['$3'])[_0x409551(0x247)]()[_0x409551(0x1f6)](),_0x338578=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3,_0x45855f=_0x409551(0x2de)[_0x409551(0x171)](_0x443a4b['charAt'](0x0)['toUpperCase']()+_0x443a4b[_0x409551(0x29f)](0x1));return _0x338578[_0x45855f](_0x110e23);}else{if(_0x2d5d89[_0x409551(0x1dc)](/(.*) HAS (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0x4cf08b=_0x231cbf[_0x409551(0x1d2)](String(RegExp['$2'])[_0x409551(0x1e2)]()[_0x409551(0x1f6)]()),_0x2ae1cd=String(RegExp['$3'])[_0x409551(0x247)]()['trim'](),_0x2526db=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3,_0x5a778c='isMax%1Affected'['format'](_0x2ae1cd[_0x409551(0x1b3)](0x0)['toUpperCase']()+_0x2ae1cd[_0x409551(0x29f)](0x1));return _0x2526db[_0x5a778c](_0x4cf08b);}else{if(_0x2d5d89['match'](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF)/i)){const _0x2465a0=_0x231cbf[_0x409551(0x1d2)](String(RegExp['$2'])[_0x409551(0x1e2)]()[_0x409551(0x1f6)]()),_0x175607=String(RegExp['$3'])[_0x409551(0x247)]()[_0x409551(0x1f6)](),_0x14ff74=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3,_0x219f48='is%1Affected'[_0x409551(0x171)](_0x175607[_0x409551(0x1b3)](0x0)[_0x409551(0x1e2)]()+_0x175607[_0x409551(0x29f)](0x1));return!_0x14ff74[_0x219f48](_0x2465a0);}else{if(_0x2d5d89['match'](/(.*) NOT (MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) MAX (BUFF|DEBUFF)/i)){const _0x277e35=_0x231cbf[_0x409551(0x1d2)](String(RegExp['$2'])[_0x409551(0x1e2)]()['trim']()),_0x599888=String(RegExp['$3'])['toLowerCase']()['trim'](),_0x30a618=String(RegExp['$1'])[_0x409551(0x1dc)](/(?:USER|SUBJECT)/i)?_0x3dad4d:_0x2340b3,_0x163481=_0x409551(0x239)['format'](_0x599888['charAt'](0x0)[_0x409551(0x1e2)]()+_0x599888[_0x409551(0x29f)](0x1));return!_0x30a618[_0x163481](_0x277e35);}}}}}}}}}}}}}return!![];},AIManager[_0x118809(0x2c9)]=function(_0x4f6623,_0xa127c,_0x194829,_0x3b6d3a){const _0x2c9e98=_0x118809,_0x26cdc9=['MAXHP','MAXMP',_0x2c9e98(0x1d4),_0x2c9e98(0x2d9),_0x2c9e98(0x1da),_0x2c9e98(0x198),_0x2c9e98(0x1fb),_0x2c9e98(0x28b)];window['user']=_0x4f6623,window['a']=user,window['b']=_0xa127c;const _0x3aa998=_0x3b6d3a,_0x1eb007=user[_0x2c9e98(0x22e)]();let _0x154f1c=_0x3b6d3a['match'](/(?:USER|SUBJECT)/i)?user:_0xa127c;_0x3b6d3a=_0x3b6d3a[_0x2c9e98(0x1dd)](/\b(\d+)([%％])/gi,(_0x294ec0,_0x1849ea)=>Number(_0x1849ea)*0.01);if(_0x3b6d3a[_0x2c9e98(0x1dc)](/(?:VAR|VARIABLE) (\d+)/i))return $gameVariables[_0x2c9e98(0x216)](Number(RegExp['$1']));if(_0x3b6d3a[_0x2c9e98(0x1dc)](/TEAM ALIVE MEMBERS/i))return _0x154f1c[_0x2c9e98(0x1e9)]()[_0x2c9e98(0x1a8)]()[_0x2c9e98(0x177)];if(_0x3b6d3a[_0x2c9e98(0x1dc)](/TEAM DEAD MEMBERS/i))return _0x154f1c[_0x2c9e98(0x1e9)]()[_0x2c9e98(0x22c)]()['length'];if(_0x3b6d3a[_0x2c9e98(0x1dc)](/ELEMENT (\d+) RATE/i)){const _0x1bae4b=Number(RegExp['$1']);return this['elementKnowledgeRate'](_0x4f6623,_0xa127c,_0x154f1c,_0x1bae4b);}else{if(_0x3b6d3a[_0x2c9e98(0x1dc)](/ELEMENT (.*) RATE/i)){const _0x3faf94=DataManager[_0x2c9e98(0x2ad)](String(RegExp['$1']));return this[_0x2c9e98(0x293)](_0x4f6623,_0xa127c,_0x154f1c,_0x3faf94);}else{if(_0x3b6d3a[_0x2c9e98(0x1dc)](/(.*) ELEMENT RATE/i)){const _0x2ceddf=DataManager[_0x2c9e98(0x2ad)](String(RegExp['$1']));return this[_0x2c9e98(0x293)](_0x4f6623,_0xa127c,_0x154f1c,_0x2ceddf);}}}if(_0x3b6d3a[_0x2c9e98(0x1dc)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:LEVEL|STACK|STACKS)/i)){const _0x3cbd20=_0x26cdc9[_0x2c9e98(0x1d2)](String(RegExp['$1'])[_0x2c9e98(0x1e2)]()[_0x2c9e98(0x1f6)]()),_0x19d06c=String(RegExp['$2'])['toLowerCase']()[_0x2c9e98(0x1f6)]();return _0x154f1c[_0x2c9e98(0x291)](_0x3cbd20)*(_0x19d06c===_0x2c9e98(0x291)?0x1:-0x1);}if(_0x3b6d3a[_0x2c9e98(0x1dc)](/(MAXHP|MAXMP|ATK|DEF|MAT|MDF|AGI|LUK) (BUFF|DEBUFF) (?:TURN|TURNS)/i)){const _0x5314a4=_0x26cdc9[_0x2c9e98(0x1d2)](String(RegExp['$1'])[_0x2c9e98(0x1e2)]()[_0x2c9e98(0x1f6)]()),_0x2aa255=String(RegExp['$2'])[_0x2c9e98(0x247)]()['trim']();if(_0x2aa255===_0x2c9e98(0x291)&&_0x154f1c['isBuffAffected'](_0x5314a4))return _0x154f1c[_0x2c9e98(0x1f3)][_0x5314a4];else{if(_0x2aa255==='debuff'&&_0x154f1c[_0x2c9e98(0x229)](_0x5314a4))return _0x154f1c['_buffTurns'][_0x5314a4];}return 0x0;}if(_0x3b6d3a[_0x2c9e98(0x1dc)](/STATE (\d+) (?:TURN|TURNS)/i)){const _0x2e5c00=Number(RegExp['$1']);if(_0x154f1c[_0x2c9e98(0x259)](_0x2e5c00)){const _0x3287f3=$dataStates[_0x2e5c00];return _0x3287f3&&_0x3287f3[_0x2c9e98(0x26e)]===0x0?Number['MAX_SAFE_INTEGER']:_0x154f1c['_stateTurns'][_0x2e5c00]||0x0;}else return _0x154f1c[_0x2c9e98(0x2e6)]()[_0x2c9e98(0x2c4)]($dataStates[_0x2e5c00])?Number[_0x2c9e98(0x1fe)]:0x0;}else{if(_0x3b6d3a[_0x2c9e98(0x1dc)](/STATE (.*) (?:TURN|TURNS)/i)){const _0x389920=DataManager[_0x2c9e98(0x18d)](RegExp['$1']);if(_0x154f1c[_0x2c9e98(0x259)](_0x389920)){const _0x1aeaea=$dataStates[_0x389920];return _0x1aeaea&&_0x1aeaea[_0x2c9e98(0x26e)]===0x0?Number[_0x2c9e98(0x1fe)]:_0x154f1c[_0x2c9e98(0x268)][_0x389920]||0x0;}else return _0x154f1c['states']()[_0x2c9e98(0x2c4)]($dataStates[_0x389920])?Number['MAX_SAFE_INTEGER']:0x0;}}if(_0x3b6d3a['match'](/\bHP([%％])/i))return _0x154f1c[_0x2c9e98(0x203)]();else{if(_0x3b6d3a[_0x2c9e98(0x1dc)](/\bMP([%％])/i))return _0x154f1c[_0x2c9e98(0x267)]();else{if(_0x3b6d3a['match'](/\bTP([%％])/i))return _0x154f1c[_0x2c9e98(0x279)]();else{if(_0x3b6d3a[_0x2c9e98(0x1dc)](/\b(?:MAXHP|MAX HP|MHP)\b/i))return _0x154f1c[_0x2c9e98(0x1e4)];else{if(_0x3b6d3a['match'](/\b(?:MAXMP|MAX MP|MMP)\b/i))return _0x154f1c[_0x2c9e98(0x1cb)];else{if(_0x3b6d3a['match'](/\b(?:MAXTP|MAX TP|MTP)\b/i))return _0x154f1c[_0x2c9e98(0x20c)]();}}}}}if(_0x3b6d3a[_0x2c9e98(0x1dc)](/\b(LEVEL|HP|MP|TP|ATK|DEF|MAT|MDF|AGI|LUK)\b/i))return _0x154f1c[String(RegExp['$1'])[_0x2c9e98(0x247)]()[_0x2c9e98(0x1f6)]()];try{return eval(_0x3b6d3a);}catch(_0x369001){return $gameTemp[_0x2c9e98(0x2a7)]()&&(console[_0x2c9e98(0x1d3)](_0x2c9e98(0x257)[_0x2c9e98(0x171)](_0x3aa998)),console[_0x2c9e98(0x1d3)](_0x369001)),0x0;}},AIManager[_0x118809(0x293)]=function(_0x51fcac,_0x356276,_0xe16b5a,_0x205696){const _0x31ae00=_0x118809;if(_0x51fcac['isActor']()===_0xe16b5a[_0x31ae00(0x2cf)]())return _0xe16b5a['elementRate'](_0x205696);else return _0xe16b5a[_0x31ae00(0x22e)]()[_0x31ae00(0x2ba)](_0x205696,_0xe16b5a)?_0xe16b5a[_0x31ae00(0x2c8)](_0x205696):VisuMZ[_0x31ae00(0x228)][_0x31ae00(0x20a)][_0x31ae00(0x174)][_0x31ae00(0x2ef)];},AIManager[_0x118809(0x2f1)]=function(_0x2c14ba,_0x2a9d27){const _0x4a1267=_0x118809;if(!_0x2a9d27)return;if(!_0x2a9d27[_0x4a1267(0x1b0)]['match'](AIManager['_regexp'][_0x4a1267(0x260)]))return;const _0x18f520=String(RegExp['$1'])[_0x4a1267(0x1e2)]()[_0x4a1267(0x1f6)]();let _0xc58445=this[_0x4a1267(0x2d6)](_0x2c14ba,_0x18f520);_0xc58445&&(this[_0x4a1267(0x180)]=[_0xc58445]);},AIManager['createFilterTarget']=function(_0x45bbef,_0x3d7ecb){const _0x1b0cf6=_0x118809,_0x23a09f=[_0x1b0cf6(0x2bf),_0x1b0cf6(0x242),_0x1b0cf6(0x1d4),_0x1b0cf6(0x2d9),'MAT',_0x1b0cf6(0x198),_0x1b0cf6(0x1fb),_0x1b0cf6(0x28b)],_0x9e95c2=[_0x1b0cf6(0x2ae),_0x1b0cf6(0x2b2),_0x1b0cf6(0x2df),_0x1b0cf6(0x19d),_0x1b0cf6(0x1aa),_0x1b0cf6(0x191),_0x1b0cf6(0x29b),'HRG',_0x1b0cf6(0x1d6),_0x1b0cf6(0x295)],_0x59d2dd=[_0x1b0cf6(0x2d7),_0x1b0cf6(0x225),'REC',_0x1b0cf6(0x2c7),_0x1b0cf6(0x22f),_0x1b0cf6(0x222),_0x1b0cf6(0x231),_0x1b0cf6(0x2dc),'FDR',_0x1b0cf6(0x298)];let _0x30ec42=null;if(_0x3d7ecb===_0x1b0cf6(0x17d)){if(this[_0x1b0cf6(0x180)][_0x1b0cf6(0x2c4)](_0x45bbef))return _0x45bbef;}else{if(_0x3d7ecb==='FIRST')return this[_0x1b0cf6(0x180)][0x0];else{if(_0x3d7ecb===_0x1b0cf6(0x2c6))return this['_forceValidTargets'][this[_0x1b0cf6(0x180)][_0x1b0cf6(0x177)]-0x1];else{if(_0x3d7ecb[_0x1b0cf6(0x1dc)](/(HIGHEST|LOWEST)[ ](.*)/i)){const _0x2cc83b=String(RegExp['$1'])[_0x1b0cf6(0x1e2)]()[_0x1b0cf6(0x1f6)]()===_0x1b0cf6(0x2d3),_0x4ba347=!_0x2cc83b,_0x371d02=String(RegExp['$2'])['toUpperCase']()[_0x1b0cf6(0x1f6)]();if(_0x23a09f[_0x1b0cf6(0x2c4)](_0x371d02)){const _0x1b621e=_0x23a09f[_0x1b0cf6(0x1d2)](_0x371d02);_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x1b218c of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x1b218c['param'](_0x1b621e)>_0x30ec42[_0x1b0cf6(0x296)](_0x1b621e))_0x30ec42=_0x1b218c;if(_0x4ba347&&_0x1b218c[_0x1b0cf6(0x296)](_0x1b621e)<_0x30ec42[_0x1b0cf6(0x296)](_0x1b621e))_0x30ec42=_0x1b218c;}return _0x30ec42;}if(_0x9e95c2[_0x1b0cf6(0x2c4)](_0x371d02)){const _0x3df11e=_0x9e95c2['indexOf'](_0x371d02);_0x30ec42=this['_forceValidTargets'][0x0];for(const _0x22c6e5 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x22c6e5['xparam'](_0x3df11e)>_0x30ec42[_0x1b0cf6(0x1c8)](_0x3df11e))_0x30ec42=_0x22c6e5;if(_0x4ba347&&_0x22c6e5[_0x1b0cf6(0x1c8)](_0x3df11e)<_0x30ec42['xparam'](_0x3df11e))_0x30ec42=_0x22c6e5;}return _0x30ec42;}if(_0x59d2dd['includes'](_0x371d02)){const _0x48bf27=_0x59d2dd[_0x1b0cf6(0x1d2)](_0x371d02);_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0xeec8d6 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0xeec8d6[_0x1b0cf6(0x182)](_0x48bf27)>_0x30ec42[_0x1b0cf6(0x182)](_0x48bf27))_0x30ec42=_0xeec8d6;if(_0x4ba347&&_0xeec8d6[_0x1b0cf6(0x182)](_0x48bf27)<_0x30ec42[_0x1b0cf6(0x182)](_0x48bf27))_0x30ec42=_0xeec8d6;}return _0x30ec42;}if(_0x371d02==='HP'){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x2d95c8 of this['_forceValidTargets']){if(_0x2cc83b&&_0x2d95c8['hp']>_0x30ec42['hp'])_0x30ec42=_0x2d95c8;if(_0x4ba347&&_0x2d95c8['hp']<_0x30ec42['hp'])_0x30ec42=_0x2d95c8;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x24f)){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x5f2856 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x5f2856[_0x1b0cf6(0x203)]()>_0x30ec42['hpRate']())_0x30ec42=_0x5f2856;if(_0x4ba347&&_0x5f2856['hpRate']()<_0x30ec42[_0x1b0cf6(0x203)]())_0x30ec42=_0x5f2856;}return _0x30ec42;}if(_0x371d02==='MP'){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x498ab4 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x498ab4['mp']>_0x30ec42['mp'])_0x30ec42=_0x498ab4;if(_0x4ba347&&_0x498ab4['mp']<_0x30ec42['mp'])_0x30ec42=_0x498ab4;}return _0x30ec42;}if(_0x371d02==='MP%'){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x557135 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x557135['mpRate']()>_0x30ec42[_0x1b0cf6(0x267)]())_0x30ec42=_0x557135;if(_0x4ba347&&_0x557135[_0x1b0cf6(0x267)]()<_0x30ec42[_0x1b0cf6(0x267)]())_0x30ec42=_0x557135;}return _0x30ec42;}if(_0x371d02==='TP'){_0x30ec42=this['_forceValidTargets'][0x0];for(const _0xbb7f2c of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0xbb7f2c['tp']>_0x30ec42['tp'])_0x30ec42=_0xbb7f2c;if(_0x4ba347&&_0xbb7f2c['tp']<_0x30ec42['tp'])_0x30ec42=_0xbb7f2c;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x2b5)){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x34c77e of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x34c77e[_0x1b0cf6(0x279)]()>_0x30ec42[_0x1b0cf6(0x279)]())_0x30ec42=_0x34c77e;if(_0x4ba347&&_0x34c77e['tpRate']()<_0x30ec42['tpRate']())_0x30ec42=_0x34c77e;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x27c)){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x2c0fb5 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x2c0fb5[_0x1b0cf6(0x20c)]()>_0x30ec42['maxTp']())_0x30ec42=_0x2c0fb5;if(_0x4ba347&&_0x2c0fb5['maxTp']()<_0x30ec42[_0x1b0cf6(0x20c)]())_0x30ec42=_0x2c0fb5;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x220)){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x5184db of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&(_0x5184db[_0x1b0cf6(0x2e9)]||0x0)>(_0x30ec42['level']||0x0))_0x30ec42=_0x5184db;if(_0x4ba347&&(_0x5184db[_0x1b0cf6(0x2e9)]||0x0)<(_0x30ec42[_0x1b0cf6(0x2e9)]||0x0))_0x30ec42=_0x5184db;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x227)&&Imported[_0x1b0cf6(0x244)]){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];for(const _0x1d09a6 of this['_forceValidTargets']){if(_0x2cc83b&&_0x1d09a6[_0x1b0cf6(0x2e6)]()[_0x1b0cf6(0x177)]>_0x30ec42[_0x1b0cf6(0x2e6)]()[_0x1b0cf6(0x177)])_0x30ec42=_0x1d09a6;if(_0x4ba347&&_0x1d09a6['states']()[_0x1b0cf6(0x177)]<_0x30ec42[_0x1b0cf6(0x2e6)]()[_0x1b0cf6(0x177)])_0x30ec42=_0x1d09a6;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x1c1)&&Imported[_0x1b0cf6(0x244)]){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];const _0xd2eca=_0x1b0cf6(0x1b4);for(const _0x6bebcf of this['_forceValidTargets']){if(_0x2cc83b&&_0x6bebcf[_0x1b0cf6(0x240)](_0xd2eca)['length']>_0x30ec42[_0x1b0cf6(0x240)](_0xd2eca)['length'])_0x30ec42=_0x6bebcf;if(_0x4ba347&&_0x6bebcf[_0x1b0cf6(0x240)](_0xd2eca)[_0x1b0cf6(0x177)]<_0x30ec42[_0x1b0cf6(0x240)](_0xd2eca)[_0x1b0cf6(0x177)])_0x30ec42=_0x6bebcf;}return _0x30ec42;}if(_0x371d02===_0x1b0cf6(0x197)&&Imported[_0x1b0cf6(0x244)]){_0x30ec42=this[_0x1b0cf6(0x180)][0x0];const _0x1db26e=_0x1b0cf6(0x20f);for(const _0x3b71f8 of this[_0x1b0cf6(0x180)]){if(_0x2cc83b&&_0x3b71f8['statesByCategory'](_0x1db26e)['length']>_0x30ec42[_0x1b0cf6(0x240)](_0x1db26e)['length'])_0x30ec42=_0x3b71f8;if(_0x4ba347&&_0x3b71f8[_0x1b0cf6(0x240)](_0x1db26e)['length']<_0x30ec42[_0x1b0cf6(0x240)](_0x1db26e)[_0x1b0cf6(0x177)])_0x30ec42=_0x3b71f8;}return _0x30ec42;}}}}}return null;},DataManager[_0x118809(0x2ad)]=function(_0x23782c){const _0x13c168=_0x118809;_0x23782c=_0x23782c[_0x13c168(0x1e2)]()[_0x13c168(0x1f6)](),this[_0x13c168(0x22d)]=this[_0x13c168(0x22d)]||{};if(this[_0x13c168(0x22d)][_0x23782c])return this[_0x13c168(0x22d)][_0x23782c];let _0x18bc9a=0x1;for(const _0xcf1ff1 of $dataSystem[_0x13c168(0x2d4)]){if(!_0xcf1ff1)continue;let _0x5e2100=_0xcf1ff1[_0x13c168(0x1e2)]();_0x5e2100=_0x5e2100[_0x13c168(0x1dd)](/\x1I\[(\d+)\]/gi,''),_0x5e2100=_0x5e2100['replace'](/\\I\[(\d+)\]/gi,''),this[_0x13c168(0x22d)][_0x5e2100]=_0x18bc9a,_0x18bc9a++;}return this[_0x13c168(0x22d)][_0x23782c]||0x0;},DataManager[_0x118809(0x18d)]=function(_0x25c3fe){const _0x57ca49=_0x118809;_0x25c3fe=_0x25c3fe[_0x57ca49(0x1e2)]()[_0x57ca49(0x1f6)](),this[_0x57ca49(0x2ea)]=this[_0x57ca49(0x2ea)]||{};if(this['_stateIDs'][_0x25c3fe])return this[_0x57ca49(0x2ea)][_0x25c3fe];for(const _0x3b98b9 of $dataStates){if(!_0x3b98b9)continue;this['_stateIDs'][_0x3b98b9[_0x57ca49(0x188)]['toUpperCase']()['trim']()]=_0x3b98b9['id'];}return this[_0x57ca49(0x2ea)][_0x25c3fe]||0x0;},VisuMZ[_0x118809(0x228)][_0x118809(0x1ec)]=BattleManager[_0x118809(0x1fa)],BattleManager['getNextSubject']=function(){const _0x52802b=_0x118809,_0x50b1c7=VisuMZ[_0x52802b(0x228)][_0x52802b(0x1ec)]['call'](this);if(_0x50b1c7&&_0x50b1c7['isDetermineActionByAI']()){const _0x252cb2=_0x50b1c7[_0x52802b(0x25f)]();if(!_0x252cb2||_0x252cb2&&!_0x252cb2[_0x52802b(0x204)]())_0x50b1c7[_0x52802b(0x2b3)]();else{if(VisuMZ['BattleAI'][_0x52802b(0x20a)]['General']['OnSpotAI']){if(_0x252cb2&&_0x252cb2['_forceAction'])return _0x50b1c7;_0x50b1c7['makeActions'](),Imported['VisuMZ_2_BattleSystemSTB']&&this[_0x52802b(0x273)]()&&(_0x50b1c7['_onSpotMadeActionsDeterminedByAI']=!![]);}}}return _0x50b1c7;},VisuMZ['BattleAI'][_0x118809(0x284)]=BattleManager['startAction'],BattleManager[_0x118809(0x274)]=function(){const _0x3ac588=_0x118809;this[_0x3ac588(0x2e1)](),this[_0x3ac588(0x2ed)][_0x3ac588(0x25f)]()?VisuMZ[_0x3ac588(0x228)][_0x3ac588(0x284)][_0x3ac588(0x18e)](this):this[_0x3ac588(0x255)]();},VisuMZ[_0x118809(0x228)][_0x118809(0x1ad)]=BattleManager[_0x118809(0x255)],BattleManager[_0x118809(0x255)]=function(){const _0x33745b=_0x118809;this[_0x33745b(0x2e1)](),VisuMZ['BattleAI'][_0x33745b(0x1ad)][_0x33745b(0x18e)](this);},BattleManager[_0x118809(0x2e1)]=function(){const _0x2430d2=_0x118809;this['determineTargetActionByAIisStillValid'](this[_0x2430d2(0x2ed)]);},BattleManager[_0x118809(0x292)]=function(_0x560104){const _0x32b9d5=_0x118809;if(!_0x560104)return;if(_0x560104[_0x32b9d5(0x181)]()==='random')return;if(!_0x560104[_0x32b9d5(0x266)]())return;const _0x128373=_0x560104[_0x32b9d5(0x25f)]();if(!_0x128373)return;if(_0x128373[_0x32b9d5(0x1ef)])return;const _0x12f0db=_0x128373[_0x32b9d5(0x204)]();if(_0x560104['_bypassAiValidCheck'])return;if(AIManager[_0x32b9d5(0x206)](_0x560104,_0x12f0db)&&_0x560104['canUse'](_0x12f0db))return;_0x560104[_0x32b9d5(0x208)]();},VisuMZ['BattleAI']['Game_Temp_initialize']=Game_Temp[_0x118809(0x1be)][_0x118809(0x2be)],Game_Temp['prototype'][_0x118809(0x2be)]=function(){const _0x3505c8=_0x118809;VisuMZ[_0x3505c8(0x228)]['Game_Temp_initialize'][_0x3505c8(0x18e)](this),this['clearAiTgrInfluence']();},Game_Temp[_0x118809(0x1be)][_0x118809(0x27b)]=function(){const _0x15651b=_0x118809;this[_0x15651b(0x252)]={'action':null,'elementInfluence':![],'elementInfluenceRate':0x0,'elementIds':[],'evaInfluenceRate':0x0,'mevInfluenceRate':0x0,'pdrInfluenceRate':0x0,'mdrInfluenceRate':0x0};},Game_Temp[_0x118809(0x1be)][_0x118809(0x2af)]=function(){const _0x1baf01=_0x118809;if(this[_0x1baf01(0x252)]===undefined)this[_0x1baf01(0x27b)]();return this['_aiTgrInfluence'];},Game_Temp[_0x118809(0x1be)][_0x118809(0x25d)]=function(_0x229104,_0xd2071){const _0x1367de=_0x118809;this[_0x1367de(0x27b)]();const _0x49f2c4=this[_0x1367de(0x2af)]();_0x49f2c4[_0x1367de(0x1f5)]=_0xd2071;if(_0x229104[_0x1367de(0x24c)]()){_0x49f2c4[_0x1367de(0x2a4)]=!![],_0x49f2c4[_0x1367de(0x270)]=_0x229104[_0x1367de(0x178)](),_0x49f2c4[_0x1367de(0x175)]=[];if(Imported[_0x1367de(0x29d)])_0x49f2c4[_0x1367de(0x175)]=_0x49f2c4[_0x1367de(0x175)][_0x1367de(0x2eb)](_0xd2071[_0x1367de(0x2d4)]());else _0xd2071[_0x1367de(0x204)]()['damage'][_0x1367de(0x278)]<0x0?_0x49f2c4[_0x1367de(0x175)]=_0x49f2c4['elementIds'][_0x1367de(0x2eb)](_0x229104[_0x1367de(0x233)]()):_0x49f2c4[_0x1367de(0x175)][_0x1367de(0x2c1)](_0xd2071['item']()[_0x1367de(0x263)][_0x1367de(0x278)]);}_0xd2071['isPhysical']()&&_0x229104['doesAIApplyEvaTgrInfluence']()&&(_0x49f2c4[_0x1367de(0x2d0)]=_0x229104['aiApplyEvaTgrInfluenceRate']()),_0xd2071[_0x1367de(0x1a6)]()&&_0xd2071['isDamage']()&&_0x229104['doesAIApplyPdrTgrInfluence']()&&(_0x49f2c4[_0x1367de(0x19e)]=_0x229104[_0x1367de(0x1f1)]()),_0xd2071[_0x1367de(0x1db)]()&&_0x229104[_0x1367de(0x21d)]()&&(_0x49f2c4[_0x1367de(0x201)]=_0x229104[_0x1367de(0x1c9)]()),_0xd2071['isMagical']()&&_0xd2071[_0x1367de(0x183)]()&&_0x229104[_0x1367de(0x2e5)]()&&(_0x49f2c4[_0x1367de(0x27d)]=_0x229104['aiApplyMdrTgrInfluenceRate']());},VisuMZ[_0x118809(0x228)][_0x118809(0x2cd)]=Game_Action['prototype'][_0x118809(0x19c)],Game_Action[_0x118809(0x1be)][_0x118809(0x19c)]=function(){const _0x29845c=_0x118809;this['isSkill']()&&this['subject']()[_0x29845c(0x266)]()&&(AIManager['forceValidTargets'](this[_0x29845c(0x1f8)](),this[_0x29845c(0x204)]()),this[_0x29845c(0x253)]()&&AIManager[_0x29845c(0x2f1)](this[_0x29845c(0x1f8)](),this[_0x29845c(0x204)]()));$gameTemp[_0x29845c(0x25d)](this[_0x29845c(0x1f8)](),this);const _0x76d424=VisuMZ['BattleAI'][_0x29845c(0x2cd)][_0x29845c(0x18e)](this);return $gameTemp[_0x29845c(0x27b)](),AIManager[_0x29845c(0x1a9)](),_0x76d424;},VisuMZ[_0x118809(0x228)]['Game_Action_itemTargetCandidates']=Game_Action[_0x118809(0x1be)][_0x118809(0x1b6)],Game_Action['prototype'][_0x118809(0x1b6)]=function(){const _0x167a24=_0x118809,_0x2a2452=this[_0x167a24(0x1f8)](),_0x9a689a=this['item']();let _0x10bb3e=VisuMZ[_0x167a24(0x228)]['Game_Action_itemTargetCandidates'][_0x167a24(0x18e)](this);if(_0x2a2452[_0x167a24(0x266)]()&&AIManager[_0x167a24(0x206)](_0x2a2452,_0x9a689a)){let _0x14867f=AIManager['makeValidTargets'](_0x2a2452,_0x9a689a);_0x10bb3e=_0x10bb3e[_0x167a24(0x26b)](_0x40091b=>_0x14867f[_0x167a24(0x2c4)](_0x40091b));}return _0x10bb3e;},VisuMZ[_0x118809(0x228)][_0x118809(0x258)]=Game_Action[_0x118809(0x1be)][_0x118809(0x250)],Game_Action[_0x118809(0x1be)][_0x118809(0x250)]=function(_0x451988){const _0x53553a=_0x118809;VisuMZ['BattleAI']['Game_Action_apply'][_0x53553a(0x18e)](this,_0x451988),this[_0x53553a(0x238)](_0x451988);},Game_Action[_0x118809(0x1be)][_0x118809(0x238)]=function(_0x406745){const _0x40a69f=_0x118809;if(!_0x406745)return;if(this['subject']()['isActor']()===_0x406745[_0x40a69f(0x2cf)]())return;let _0x436235=[];if(Imported[_0x40a69f(0x29d)])_0x436235=this['elements']();else this['item']()[_0x40a69f(0x263)][_0x40a69f(0x278)]<0x0?_0x436235=this[_0x40a69f(0x1f8)]()['attackElements']():_0x436235=[this[_0x40a69f(0x204)]()[_0x40a69f(0x263)][_0x40a69f(0x278)]];_0x406745[_0x40a69f(0x28d)](_0x436235,this[_0x40a69f(0x1a6)](),this[_0x40a69f(0x1db)]());},VisuMZ[_0x118809(0x228)][_0x118809(0x2a8)]=Game_Action[_0x118809(0x1be)]['isForOpponentBattleCore'],Game_Action[_0x118809(0x1be)][_0x118809(0x1eb)]=function(){const _0x2d37a3=_0x118809,_0x2045db=this[_0x2d37a3(0x204)]()[_0x2d37a3(0x26d)];if(_0x2045db['match'](/ANY/i)){if(Imported['VisuMZ_2_BattleGridSystem']&&this['isForBattleGrid']()){}else return!![];}return VisuMZ[_0x2d37a3(0x228)][_0x2d37a3(0x2a8)][_0x2d37a3(0x18e)](this);},VisuMZ[_0x118809(0x228)][_0x118809(0x269)]=Game_BattlerBase[_0x118809(0x1be)][_0x118809(0x182)],Game_BattlerBase[_0x118809(0x1be)][_0x118809(0x182)]=function(_0x3546e7){const _0x4762a2=_0x118809;let _0x568ded=VisuMZ[_0x4762a2(0x228)][_0x4762a2(0x269)][_0x4762a2(0x18e)](this,_0x3546e7);return _0x3546e7===0x0&&(_0x568ded*=this[_0x4762a2(0x2cb)]()),_0x568ded;},Game_BattlerBase[_0x118809(0x1be)][_0x118809(0x2cb)]=function(){const _0x203a96=_0x118809,_0x25a0df=$gameTemp[_0x203a96(0x2af)](),_0x3bdddf=this[_0x203a96(0x22e)]();if(Imported[_0x203a96(0x1d1)]){if(_0x25a0df[_0x203a96(0x1f5)]&&_0x25a0df[_0x203a96(0x1f5)][_0x203a96(0x25c)]())return 0x1;}let _0x2d2212=0x1;if(_0x25a0df[_0x203a96(0x2a4)])for(const _0x5caf4f of _0x25a0df[_0x203a96(0x175)]){_0x3bdddf[_0x203a96(0x2ba)](_0x5caf4f,this)&&(_0x2d2212*=this[_0x203a96(0x2c8)](_0x5caf4f)*_0x25a0df[_0x203a96(0x270)]);}_0x3bdddf[_0x203a96(0x194)](_0x203a96(0x23c),this)&&(_0x2d2212*=0x1-this[_0x203a96(0x23c)]*_0x25a0df['evaInfluenceRate']);_0x3bdddf[_0x203a96(0x194)](_0x203a96(0x199),this)&&(_0x2d2212*=0x1-this[_0x203a96(0x199)]*_0x25a0df[_0x203a96(0x201)]);{_0x2d2212*=0x1+((this[_0x203a96(0x2a6)]-0x1)*_0x25a0df[_0x203a96(0x19e)]??0x0),_0x2d2212*=0x1+((this[_0x203a96(0x1fc)]-0x1)*_0x25a0df[_0x203a96(0x27d)]??0x0);}return _0x2d2212['clamp'](0.001,0x3e8);},Game_BattlerBase[_0x118809(0x1be)][_0x118809(0x181)]=function(){const _0x219058=_0x118809;return _0x219058(0x2e2);},VisuMZ[_0x118809(0x228)][_0x118809(0x26f)]=Game_BattlerBase[_0x118809(0x1be)][_0x118809(0x2e3)],Game_BattlerBase['prototype'][_0x118809(0x2e3)]=function(){const _0x25d98b=_0x118809;this[_0x25d98b(0x232)]=![],VisuMZ['BattleAI']['Game_BattlerBase_die'][_0x25d98b(0x18e)](this);},VisuMZ[_0x118809(0x228)][_0x118809(0x265)]=Game_BattlerBase[_0x118809(0x1be)]['revive'],Game_BattlerBase['prototype'][_0x118809(0x271)]=function(){const _0x50b3cc=_0x118809;this[_0x50b3cc(0x232)]=![],VisuMZ[_0x50b3cc(0x228)][_0x50b3cc(0x265)][_0x50b3cc(0x18e)](this);},VisuMZ[_0x118809(0x228)][_0x118809(0x1e6)]=Game_Battler[_0x118809(0x1be)][_0x118809(0x213)],Game_Battler['prototype'][_0x118809(0x213)]=function(_0x1798b9){const _0x3843e8=_0x118809;this[_0x3843e8(0x232)]=![],VisuMZ[_0x3843e8(0x228)][_0x3843e8(0x1e6)][_0x3843e8(0x18e)](this,_0x1798b9);},VisuMZ['BattleAI'][_0x118809(0x207)]=Game_Battler[_0x118809(0x1be)][_0x118809(0x2d5)],Game_Battler[_0x118809(0x1be)][_0x118809(0x2d5)]=function(){const _0x11a582=_0x118809;this[_0x11a582(0x232)]=![],VisuMZ[_0x11a582(0x228)]['Game_Battler_onBattleEnd'][_0x11a582(0x18e)](this);},VisuMZ[_0x118809(0x228)][_0x118809(0x22a)]=Game_Battler[_0x118809(0x1be)]['onAllActionsEnd'],Game_Battler[_0x118809(0x1be)][_0x118809(0x1ea)]=function(){const _0x4b0486=_0x118809;this['_onSpotMadeActionsDeterminedByAI']=![],VisuMZ['BattleAI']['Game_Battler_onAllActionsEnd'][_0x4b0486(0x18e)](this);},VisuMZ[_0x118809(0x228)]['Game_Battler_makeActions']=Game_Battler[_0x118809(0x1be)][_0x118809(0x2b3)],Game_Battler[_0x118809(0x1be)]['makeActions']=function(){const _0x19c670=_0x118809;if(this['_onSpotMadeActionsDeterminedByAI'])return;VisuMZ['BattleAI'][_0x19c670(0x1d8)][_0x19c670(0x18e)](this);},VisuMZ[_0x118809(0x228)][_0x118809(0x218)]=Game_Battler[_0x118809(0x1be)]['isChanting'],Game_Battler[_0x118809(0x1be)][_0x118809(0x1ae)]=function(){const _0xd90b8d=_0x118809;if(this[_0xd90b8d(0x266)]()){const _0x20d1e5=VisuMZ[_0xd90b8d(0x228)][_0xd90b8d(0x20a)][_0xd90b8d(0x174)];if(_0x20d1e5[_0xd90b8d(0x1cd)]&&_0x20d1e5[_0xd90b8d(0x275)])return![];}return VisuMZ[_0xd90b8d(0x228)][_0xd90b8d(0x218)]['call'](this);},Game_Battler[_0x118809(0x1be)][_0x118809(0x266)]=function(){const _0x3e43a6=_0x118809;if(this[_0x3e43a6(0x243)]())return![];return!![];},Game_Battler[_0x118809(0x1be)][_0x118809(0x208)]=function(){},Game_Battler['prototype'][_0x118809(0x24c)]=function(){const _0x1875b2=_0x118809;if(this[_0x1875b2(0x2cf)]()||this[_0x1875b2(0x280)]()){const _0x270e12=this[_0x1875b2(0x2cf)]()?this[_0x1875b2(0x289)]()[_0x1875b2(0x1b0)]:this[_0x1875b2(0x28e)]()[_0x1875b2(0x1b0)];if(_0x270e12[_0x1875b2(0x1dc)](AIManager['_regexp'][_0x1875b2(0x2e4)]))return![];else{if(_0x270e12[_0x1875b2(0x1dc)](AIManager['_regexp'][_0x1875b2(0x2b1)]))return this[_0x1875b2(0x178)]()>0x0;}}return VisuMZ[_0x1875b2(0x228)][_0x1875b2(0x20a)][_0x1875b2(0x1e3)][_0x1875b2(0x21b)];},Game_Battler[_0x118809(0x1be)][_0x118809(0x178)]=function(){const _0x1022e9=_0x118809;if(this[_0x1022e9(0x2cf)]()||this['isEnemy']()){const _0x20a78a=this['isActor']()?this[_0x1022e9(0x289)]()['note']:this[_0x1022e9(0x28e)]()['note'];if(_0x20a78a[_0x1022e9(0x1dc)](AIManager[_0x1022e9(0x1c5)][_0x1022e9(0x2b1)]))return eval(RegExp['$1']);}return VisuMZ[_0x1022e9(0x228)][_0x1022e9(0x20a)][_0x1022e9(0x1e3)][_0x1022e9(0x1b2)];},Game_Battler['prototype'][_0x118809(0x2d2)]=function(){const _0x28be2c=_0x118809;if(this[_0x28be2c(0x2cf)]()||this['isEnemy']()){const _0x1a07f3=this[_0x28be2c(0x2cf)]()?this[_0x28be2c(0x289)]()[_0x28be2c(0x1b0)]:this[_0x28be2c(0x28e)]()[_0x28be2c(0x1b0)];if(_0x1a07f3[_0x28be2c(0x1dc)](AIManager[_0x28be2c(0x1c5)]['bypassEvaTgr']))return![];else{if(_0x1a07f3[_0x28be2c(0x1dc)](AIManager[_0x28be2c(0x1c5)][_0x28be2c(0x1ff)]))return this[_0x28be2c(0x190)]()>0x0;}}return VisuMZ[_0x28be2c(0x228)][_0x28be2c(0x20a)][_0x28be2c(0x1e3)][_0x28be2c(0x1b7)];},Game_Battler[_0x118809(0x1be)][_0x118809(0x190)]=function(){const _0x4e460a=_0x118809;if(this[_0x4e460a(0x2cf)]()||this[_0x4e460a(0x280)]()){const _0x56f401=this[_0x4e460a(0x2cf)]()?this[_0x4e460a(0x289)]()[_0x4e460a(0x1b0)]:this[_0x4e460a(0x28e)]()[_0x4e460a(0x1b0)];if(_0x56f401[_0x4e460a(0x1dc)](AIManager[_0x4e460a(0x1c5)][_0x4e460a(0x1ff)]))return eval(RegExp['$1']);}return VisuMZ[_0x4e460a(0x228)][_0x4e460a(0x20a)][_0x4e460a(0x1e3)][_0x4e460a(0x23a)];},Game_Battler[_0x118809(0x1be)][_0x118809(0x21d)]=function(){const _0x2b24f6=_0x118809;if(this[_0x2b24f6(0x2cf)]()||this[_0x2b24f6(0x280)]()){const _0x3c6db2=this[_0x2b24f6(0x2cf)]()?this[_0x2b24f6(0x289)]()['note']:this[_0x2b24f6(0x28e)]()[_0x2b24f6(0x1b0)];if(_0x3c6db2[_0x2b24f6(0x1dc)](AIManager[_0x2b24f6(0x1c5)][_0x2b24f6(0x256)]))return![];else{if(_0x3c6db2[_0x2b24f6(0x1dc)](AIManager['_regexp']['aiMevTgr']))return this[_0x2b24f6(0x1c9)]()>0x0;}}return VisuMZ[_0x2b24f6(0x228)]['Settings'][_0x2b24f6(0x1e3)][_0x2b24f6(0x173)];},Game_Battler['prototype']['aiApplyMevTgrInfluenceRate']=function(){const _0x192f8a=_0x118809;if(this[_0x192f8a(0x2cf)]()||this[_0x192f8a(0x280)]()){const _0x4f5241=this[_0x192f8a(0x2cf)]()?this['actor']()[_0x192f8a(0x1b0)]:this['enemy']()['note'];if(_0x4f5241['match'](AIManager[_0x192f8a(0x1c5)][_0x192f8a(0x1ab)]))return eval(RegExp['$1']);}return VisuMZ[_0x192f8a(0x228)][_0x192f8a(0x20a)][_0x192f8a(0x1e3)][_0x192f8a(0x179)];},Game_Battler[_0x118809(0x1be)][_0x118809(0x215)]=function(){const _0x50bf23=_0x118809;if(this[_0x50bf23(0x2cf)]()||this[_0x50bf23(0x280)]()){const _0x7ae177=this[_0x50bf23(0x2cf)]()?this[_0x50bf23(0x289)]()[_0x50bf23(0x1b0)]:this[_0x50bf23(0x28e)]()[_0x50bf23(0x1b0)];if(_0x7ae177[_0x50bf23(0x1dc)](AIManager[_0x50bf23(0x1c5)][_0x50bf23(0x235)]))return![];else{if(_0x7ae177['match'](AIManager['_regexp'][_0x50bf23(0x1c7)]))return this[_0x50bf23(0x1f1)]()>0x0;}}return VisuMZ['BattleAI']['Settings'][_0x50bf23(0x1e3)][_0x50bf23(0x1ed)]??!![];},Game_Battler[_0x118809(0x1be)][_0x118809(0x1f1)]=function(){const _0x4dacec=_0x118809;if(this[_0x4dacec(0x2cf)]()||this[_0x4dacec(0x280)]()){const _0x52bdd8=this[_0x4dacec(0x2cf)]()?this[_0x4dacec(0x289)]()[_0x4dacec(0x1b0)]:this[_0x4dacec(0x28e)]()[_0x4dacec(0x1b0)];if(_0x52bdd8[_0x4dacec(0x1dc)](AIManager[_0x4dacec(0x1c5)][_0x4dacec(0x1c7)]))return eval(RegExp['$1']);}return VisuMZ[_0x4dacec(0x228)][_0x4dacec(0x20a)][_0x4dacec(0x1e3)][_0x4dacec(0x281)]??1.25;},Game_Battler[_0x118809(0x1be)][_0x118809(0x2e5)]=function(){const _0x587a98=_0x118809;if(this[_0x587a98(0x2cf)]()||this[_0x587a98(0x280)]()){const _0x5ce80a=this[_0x587a98(0x2cf)]()?this['actor']()[_0x587a98(0x1b0)]:this[_0x587a98(0x28e)]()['note'];if(_0x5ce80a[_0x587a98(0x1dc)](AIManager[_0x587a98(0x1c5)][_0x587a98(0x1a1)]))return![];else{if(_0x5ce80a[_0x587a98(0x1dc)](AIManager[_0x587a98(0x1c5)][_0x587a98(0x2c5)]))return this[_0x587a98(0x2a9)]()>0x0;}}return VisuMZ[_0x587a98(0x228)][_0x587a98(0x20a)][_0x587a98(0x1e3)]['MdrTgr']??!![];},Game_Battler[_0x118809(0x1be)][_0x118809(0x2a9)]=function(){const _0x187b75=_0x118809;if(this[_0x187b75(0x2cf)]()||this[_0x187b75(0x280)]()){const _0x7532bd=this[_0x187b75(0x2cf)]()?this[_0x187b75(0x289)]()[_0x187b75(0x1b0)]:this['enemy']()[_0x187b75(0x1b0)];if(_0x7532bd[_0x187b75(0x1dc)](AIManager['_regexp']['aiMdrTgr']))return eval(RegExp['$1']);}return VisuMZ['BattleAI'][_0x187b75(0x20a)]['Weight'][_0x187b75(0x212)]??1.5;},Game_Battler[_0x118809(0x1be)][_0x118809(0x297)]=function(){const _0x23a188=_0x118809,_0x817914=VisuMZ[_0x23a188(0x228)][_0x23a188(0x20a)][_0x23a188(0x174)];if(this[_0x23a188(0x2cf)]()||this[_0x23a188(0x280)]()){const _0x497be2=this[_0x23a188(0x2cf)]()?this[_0x23a188(0x289)]()[_0x23a188(0x1b0)]:this[_0x23a188(0x28e)]()['note'];if(_0x497be2[_0x23a188(0x1dc)](AIManager[_0x23a188(0x1c5)][_0x23a188(0x297)]))return Number(RegExp['$1'])[_0x23a188(0x2a5)](0x0,0x64);else{if(this['isActor']())return _0x817914[_0x23a188(0x245)];else{if(this[_0x23a188(0x280)]())return _0x817914['EnemyAILevel'];}}}return _0x817914[_0x23a188(0x21c)];},Game_Battler[_0x118809(0x1be)][_0x118809(0x28d)]=function(_0x10952f,_0x40c229,_0x225042){const _0x31d192=_0x118809,_0x51dbe5=this[_0x31d192(0x22e)]();if(_0x10952f&&_0x10952f['length']>0x0)for(const _0x8477df of _0x10952f){_0x51dbe5[_0x31d192(0x17f)](_0x8477df,this);}_0x40c229&&_0x51dbe5[_0x31d192(0x176)](_0x31d192(0x17e),this),_0x225042&&_0x51dbe5[_0x31d192(0x176)](_0x31d192(0x24e),this);},Game_Battler[_0x118809(0x1be)][_0x118809(0x194)]=function(_0x15dbaa){const _0x73a5b8=_0x118809,_0xe5051a=this[_0x73a5b8(0x22e)]();return _0xe5051a[_0x73a5b8(0x194)](_0x15dbaa,this);},Game_Battler[_0x118809(0x1be)][_0x118809(0x1bb)]=function(){const _0x3884f3=_0x118809,_0x1dbf18=VisuMZ[_0x3884f3(0x228)][_0x3884f3(0x20a)][_0x3884f3(0x174)];if(this[_0x3884f3(0x2cf)]()||this[_0x3884f3(0x280)]()){const _0xf08358=this[_0x3884f3(0x2cf)]()?this[_0x3884f3(0x289)]()['note']:this['enemy']()['note'];if(_0xf08358[_0x3884f3(0x1dc)](AIManager[_0x3884f3(0x1c5)][_0x3884f3(0x1bb)]))return Number(RegExp['$1'])[_0x3884f3(0x2a5)](0x0,0x9);else{if(this[_0x3884f3(0x2cf)]())return _0x1dbf18['ActorRatingVariance']['clamp'](0x0,0x9);else{if(this['isEnemy']())return _0x1dbf18[_0x3884f3(0x23e)][_0x3884f3(0x2a5)](0x0,0x9);}}}return _0x1dbf18[_0x3884f3(0x23e)][_0x3884f3(0x2a5)](0x0,0x9);},VisuMZ[_0x118809(0x228)][_0x118809(0x28f)]=Game_Battler['prototype']['turnCount'],Game_Battler[_0x118809(0x1be)][_0x118809(0x1d7)]=function(){const _0x482889=_0x118809;if(BattleManager[_0x482889(0x1a7)]())return VisuMZ['BattleAI']['Game_Battler_turnCount']['call'](this);if(VisuMZ[_0x482889(0x228)][_0x482889(0x20a)][_0x482889(0x174)][_0x482889(0x1cd)]){if(this[_0x482889(0x172)]())return VisuMZ['BattleAI'][_0x482889(0x28f)][_0x482889(0x18e)](this);return $gameTroop['turnCount']();}else return VisuMZ[_0x482889(0x228)][_0x482889(0x28f)]['call'](this);},Game_Battler['prototype']['checkTeamBasedTurnCountAI']=function(){const _0x416993=_0x118809;if(Imported[_0x416993(0x1e7)]&&BattleManager[_0x416993(0x276)]()){if(VisuMZ['BattleSystemFTB']['version']<1.11){let _0x1a05a1='';_0x1a05a1+='VisuMZ_2_BattleSystemFTB\x20needs\x20to\x20be\x20updated\x20',_0x1a05a1+='in\x20order\x20for\x20VisuMZ_3_BattleAI\x20to\x20work.',alert(_0x1a05a1),SceneManager[_0x416993(0x1c4)]();}return!![];}else{if(Imported[_0x416993(0x24d)]&&BattleManager['isFTB']()){if(VisuMZ[_0x416993(0x29c)][_0x416993(0x192)]<1.08){let _0x315c26='';_0x315c26+=_0x416993(0x28a),_0x315c26+=_0x416993(0x224),alert(_0x315c26),SceneManager[_0x416993(0x1c4)]();}return!![];}else{if(Imported[_0x416993(0x2ee)]&&BattleManager[_0x416993(0x276)]()){if(VisuMZ[_0x416993(0x2b6)][_0x416993(0x192)]<1.08){let _0x20aa36='';_0x20aa36+=_0x416993(0x1b9),_0x20aa36+='in\x20order\x20for\x20VisuMZ_3_BattleAI\x20to\x20work.',alert(_0x20aa36),SceneManager[_0x416993(0x1c4)]();}return!![];}}}return![];},Game_Actor['prototype'][_0x118809(0x266)]=function(){const _0x5dd781=_0x118809;if(this['isConfused']())return![];return this[_0x5dd781(0x205)]()&&this['referenceEnemyForAI']();},Game_Actor[_0x118809(0x1be)][_0x118809(0x25e)]=function(){const _0x1af019=_0x118809,_0x5bee02=this[_0x1af019(0x1ba)]()['note'];if(_0x5bee02[_0x1af019(0x1dc)](/<NO REFERENCE AI>/i))return null;else{if(_0x5bee02[_0x1af019(0x1dc)](/<REFERENCE AI: ENEMY (\d+)>/i))return $dataEnemies[Number(RegExp['$1'])];else{if(_0x5bee02['match'](/<REFERENCE AI: (.*)>/i))return $dataEnemies[DataManager[_0x1af019(0x29e)](String(RegExp['$1']))];}}return $dataEnemies[VisuMZ[_0x1af019(0x228)][_0x1af019(0x20a)]['General'][_0x1af019(0x261)]];},Game_Actor['prototype']['aiStyle']=function(){const _0x264795=_0x118809,_0x367dc5=this[_0x264795(0x1ba)]()[_0x264795(0x1b0)];if(_0x367dc5['match'](AIManager[_0x264795(0x1c5)][_0x264795(0x181)]))return String(RegExp['$1'])[_0x264795(0x247)]()[_0x264795(0x1f6)]();return VisuMZ[_0x264795(0x228)][_0x264795(0x20a)][_0x264795(0x174)][_0x264795(0x1bf)];},Game_Actor[_0x118809(0x1be)][_0x118809(0x208)]=function(){const _0x244037=_0x118809;Game_Battler[_0x244037(0x1be)][_0x244037(0x208)][_0x244037(0x18e)](this),this['makeAutoBattleActions']();},VisuMZ['BattleAI'][_0x118809(0x1ee)]=Game_Actor[_0x118809(0x1be)][_0x118809(0x2cc)],Game_Actor['prototype'][_0x118809(0x2cc)]=function(){const _0x551357=_0x118809;this[_0x551357(0x266)]()?this[_0x551357(0x26a)]():VisuMZ[_0x551357(0x228)][_0x551357(0x1ee)][_0x551357(0x18e)](this);},Game_Actor[_0x118809(0x1be)][_0x118809(0x26a)]=function(){const _0xc5525b=_0x118809;if(this[_0xc5525b(0x282)]()>0x0){const _0x7ffc21=this[_0xc5525b(0x283)]();if(this[_0xc5525b(0x226)]())_0x7ffc21[_0xc5525b(0x2c1)]($dataSkills[this[_0xc5525b(0x1a4)]()]);if(this[_0xc5525b(0x25a)]())_0x7ffc21[_0xc5525b(0x2c1)]($dataSkills[this[_0xc5525b(0x21f)]()]);const _0x337c14=this[_0xc5525b(0x25e)](),_0x2a9ea1=JsonEx[_0xc5525b(0x1ce)](_0x337c14[_0xc5525b(0x287)]);for(const _0x39710c of _0x2a9ea1){if(_0x39710c['skillId']===0x1)_0x39710c[_0xc5525b(0x2bc)]=this[_0xc5525b(0x1a4)]();if(_0x39710c[_0xc5525b(0x2bc)]===0x2)_0x39710c[_0xc5525b(0x2bc)]=this[_0xc5525b(0x21f)]();}const _0x2405e3=_0x2a9ea1['filter'](_0x20daf4=>this[_0xc5525b(0x2c3)](_0x20daf4)&&_0x7ffc21['includes']($dataSkills[_0x20daf4[_0xc5525b(0x2bc)]]));if(_0x2405e3[_0xc5525b(0x177)]>0x0){this['selectAllActions'](_0x2405e3);return;}}VisuMZ['BattleAI'][_0xc5525b(0x1ee)][_0xc5525b(0x18e)](this);},Game_Actor[_0x118809(0x1be)][_0x118809(0x236)]=function(_0x25e0b7){const _0x34f2f7=_0x118809;return Game_Enemy[_0x34f2f7(0x1be)][_0x34f2f7(0x236)][_0x34f2f7(0x18e)](this,_0x25e0b7);},Game_Actor[_0x118809(0x1be)][_0x118809(0x2b9)]=function(_0x4c9c33,_0x2d806b){const _0x46a7c9=_0x118809;return Game_Enemy[_0x46a7c9(0x1be)][_0x46a7c9(0x2b9)]['call'](this,_0x4c9c33,_0x2d806b);},Game_Actor['prototype']['meetsHpCondition']=function(_0x2c766d,_0x5d4cca){const _0xc44f2=_0x118809;return Game_Enemy[_0xc44f2(0x1be)][_0xc44f2(0x264)]['call'](this,_0x2c766d,_0x5d4cca);},Game_Actor[_0x118809(0x1be)][_0x118809(0x290)]=function(_0x54ed11,_0x1ef0d9){const _0x2d9b5e=_0x118809;return Game_Enemy[_0x2d9b5e(0x1be)][_0x2d9b5e(0x290)][_0x2d9b5e(0x18e)](this,_0x54ed11,_0x1ef0d9);},Game_Actor[_0x118809(0x1be)][_0x118809(0x209)]=function(_0x541c79){const _0x31a1aa=_0x118809;return Game_Enemy[_0x31a1aa(0x1be)]['meetsStateCondition'][_0x31a1aa(0x18e)](this,_0x541c79);},Game_Actor[_0x118809(0x1be)]['meetsPartyLevelCondition']=function(_0x7cc89e){const _0x381c40=_0x118809;return Game_Enemy[_0x381c40(0x1be)]['meetsPartyLevelCondition'][_0x381c40(0x18e)](this,_0x7cc89e);},Game_Actor['prototype']['meetsSwitchCondition']=function(_0x4300b4){const _0x38029e=_0x118809;return Game_Enemy[_0x38029e(0x1be)][_0x38029e(0x217)][_0x38029e(0x18e)](this,_0x4300b4);},Game_Enemy[_0x118809(0x1be)][_0x118809(0x181)]=function(){const _0x1e519f=_0x118809,_0x598d17=this[_0x1e519f(0x28e)]()['note'];if(_0x598d17[_0x1e519f(0x1dc)](AIManager['_regexp']['aiStyle']))return String(RegExp['$1'])[_0x1e519f(0x247)]()[_0x1e519f(0x1f6)]();return VisuMZ[_0x1e519f(0x228)]['Settings'][_0x1e519f(0x174)]['EnemyStyleAI'];},VisuMZ[_0x118809(0x228)]['Game_Enemy_isActionValid']=Game_Enemy[_0x118809(0x1be)][_0x118809(0x2c3)],Game_Enemy[_0x118809(0x1be)][_0x118809(0x2c3)]=function(_0xaf0062){const _0xee2f77=_0x118809;if(!VisuMZ[_0xee2f77(0x228)][_0xee2f77(0x246)]['call'](this,_0xaf0062))return![];if(this['aiStyle']()===_0xee2f77(0x219))return!![];return AIManager[_0xee2f77(0x206)](this,$dataSkills[_0xaf0062[_0xee2f77(0x2bc)]]);},Game_Actor['prototype'][_0x118809(0x2c3)]=function(_0x4b9dd){const _0x55909b=_0x118809;return Game_Enemy[_0x55909b(0x1be)]['isActionValid']['call'](this,_0x4b9dd);},Game_Enemy[_0x118809(0x1be)][_0x118809(0x1e8)]=function(_0x1dc70e,_0x1cd799){const _0x21f245=_0x118809,_0x5a2f31=_0x1dc70e[_0x21f245(0x20e)]((_0x5537f6,_0x569ecb)=>_0x5537f6+_0x569ecb[_0x21f245(0x2d1)]-_0x1cd799,0x0);if(_0x5a2f31>=0x0){let _0x1683e0=Math[_0x21f245(0x26c)](_0x5a2f31);for(const _0x2ac800 of _0x1dc70e){_0x1683e0-=_0x2ac800[_0x21f245(0x2d1)]-_0x1cd799;if(_0x1683e0<=0x0)return this[_0x21f245(0x1bd)]&&this[_0x21f245(0x1bd)](_0x2ac800),_0x2ac800;}}else return null;},Game_Actor[_0x118809(0x1be)]['selectAction']=function(_0x42b36d,_0x48fd9e){const _0x4d2569=_0x118809;return Game_Enemy['prototype']['selectAction'][_0x4d2569(0x18e)](this,_0x42b36d,_0x48fd9e);},Game_Enemy[_0x118809(0x1be)][_0x118809(0x19a)]=function(_0x3f31af){const _0x5bc16f=_0x118809,_0x4fc38b=String(this['aiStyle']())[_0x5bc16f(0x247)]()[_0x5bc16f(0x1f6)]();if(['random',_0x5bc16f(0x234)][_0x5bc16f(0x2c4)](_0x4fc38b))this['selectAllActionsRandom'](_0x3f31af);else _0x4fc38b===_0x5bc16f(0x1c2)?this[_0x5bc16f(0x27f)](_0x3f31af):this[_0x5bc16f(0x1d5)](_0x3f31af);},Game_Actor[_0x118809(0x1be)]['selectAllActions']=function(_0x42e60e){const _0x3adbbc=_0x118809;Game_Enemy[_0x3adbbc(0x1be)][_0x3adbbc(0x19a)][_0x3adbbc(0x18e)](this,_0x42e60e);},Game_Battler[_0x118809(0x1be)][_0x118809(0x1d5)]=function(_0x59327d){const _0x904314=_0x118809,_0x1150a4=Math[_0x904314(0x2a1)](..._0x59327d[_0x904314(0x288)](_0xa99530=>_0xa99530[_0x904314(0x2d1)])),_0x3581f7=_0x1150a4-this[_0x904314(0x1bb)](),_0x533a50=this['numActions']();_0x59327d=_0x59327d[_0x904314(0x26b)](_0x41ea16=>_0x41ea16[_0x904314(0x2d1)]>=_0x3581f7);for(let _0x1d606c=0x0;_0x1d606c<_0x533a50;_0x1d606c++){_0x59327d=VisuMZ[_0x904314(0x228)][_0x904314(0x24a)](_0x59327d);const _0x42ec40=this[_0x904314(0x1e8)](_0x59327d,_0x3581f7);this[_0x904314(0x1f5)](_0x1d606c)[_0x904314(0x1a5)](_0x42ec40);}},VisuMZ['BattleAI'][_0x118809(0x24a)]=function(_0x2ee66b){var _0x1542ec,_0x2e7d08,_0x3d9325;for(_0x3d9325=_0x2ee66b['length']-0x1;_0x3d9325>0x0;_0x3d9325--){_0x1542ec=Math['floor'](Math['random']()*(_0x3d9325+0x1)),_0x2e7d08=_0x2ee66b[_0x3d9325],_0x2ee66b[_0x3d9325]=_0x2ee66b[_0x1542ec],_0x2ee66b[_0x1542ec]=_0x2e7d08;}return _0x2ee66b;},Game_Battler[_0x118809(0x1be)][_0x118809(0x27f)]=function(_0x31947e){const _0x7b6fdc=_0x118809;for(let _0xee3789=0x0;_0xee3789<this[_0x7b6fdc(0x282)]();_0xee3789++){const _0x4a7174=_0x31947e[0x0];this[_0x7b6fdc(0x1f5)](_0xee3789)[_0x7b6fdc(0x1a5)](_0x4a7174);}},Game_Battler[_0x118809(0x1be)][_0x118809(0x2b4)]=function(_0x3076ce){const _0xa1ed5b=_0x118809;for(let _0xee1bda=0x0;_0xee1bda<this['numActions']();_0xee1bda++){const _0x58ec38=_0x3076ce[Math[_0xa1ed5b(0x26c)](_0x3076ce['length'])];this['action'](_0xee1bda)[_0xa1ed5b(0x1a5)](_0x58ec38);}},Game_Enemy['prototype'][_0x118809(0x208)]=function(){const _0x13c8d8=_0x118809;Game_Battler[_0x13c8d8(0x1be)][_0x13c8d8(0x208)]['call'](this);if(this[_0x13c8d8(0x282)]()>0x0){const _0x411975=this['enemy']()[_0x13c8d8(0x287)][_0x13c8d8(0x26b)](_0x23477e=>this[_0x13c8d8(0x2c3)](_0x23477e));_0x411975[_0x13c8d8(0x177)]>0x0?this[_0x13c8d8(0x19a)](_0x411975):this['clearActions']();}},VisuMZ[_0x118809(0x228)][_0x118809(0x214)]=Game_Unit[_0x118809(0x1be)]['initialize'],Game_Unit[_0x118809(0x1be)][_0x118809(0x2be)]=function(){const _0x571544=_0x118809;VisuMZ[_0x571544(0x228)][_0x571544(0x214)][_0x571544(0x18e)](this),this[_0x571544(0x27a)]();},Game_Unit[_0x118809(0x1be)]['initBattleAI']=function(){const _0x46fd59=_0x118809;this[_0x46fd59(0x1e5)]=![],this[_0x46fd59(0x29a)]();},VisuMZ[_0x118809(0x228)][_0x118809(0x18b)]=Game_Unit[_0x118809(0x1be)]['aliveMembers'],Game_Unit[_0x118809(0x1be)][_0x118809(0x1a8)]=function(){const _0x2d9625=_0x118809;let _0x3dfc99=VisuMZ['BattleAI']['Game_Unit_aliveMembers'][_0x2d9625(0x18e)](this);if(this[_0x2d9625(0x1e5)]){const _0x520b33=AIManager[_0x2d9625(0x2bd)]();_0x3dfc99=_0x3dfc99['filter'](_0x13f640=>_0x520b33[_0x2d9625(0x2c4)](_0x13f640));}return _0x3dfc99;},VisuMZ[_0x118809(0x228)][_0x118809(0x17b)]=Game_Unit['prototype'][_0x118809(0x1de)],Game_Unit['prototype'][_0x118809(0x1de)]=function(){const _0x29f6da=_0x118809;AIManager[_0x29f6da(0x185)]()&&(this['_applyAIForcedTargetFilters']=!![]);const _0x19c6f3=VisuMZ[_0x29f6da(0x228)]['Game_Unit_randomTarget'][_0x29f6da(0x18e)](this);return this['_applyAIForcedTargetFilters']=![],_0x19c6f3;},Game_Unit[_0x118809(0x1be)][_0x118809(0x29a)]=function(){const _0x4baf33=_0x118809;this[_0x4baf33(0x1b8)]={'evaRates':[],'mevRates':[],'elementRates':{}};},Game_Unit[_0x118809(0x1be)][_0x118809(0x1ca)]=function(){const _0x4e0a3c=_0x118809;if(this[_0x4e0a3c(0x1b8)]===undefined)this[_0x4e0a3c(0x29a)]();return this['_aiKnowledge'];},Game_Unit[_0x118809(0x1be)][_0x118809(0x176)]=function(_0x104e4f,_0x21f242){const _0xbd37eb=_0x118809;this[_0xbd37eb(0x1ca)]()[_0x104e4f]=this[_0xbd37eb(0x1ca)]()[_0x104e4f]||[];const _0x13bc95=_0x21f242['isActor']()?_0x21f242[_0xbd37eb(0x248)]():_0x21f242[_0xbd37eb(0x23b)]();!this[_0xbd37eb(0x1ca)]()[_0x104e4f]['includes'](_0x13bc95)&&this[_0xbd37eb(0x1ca)]()[_0x104e4f][_0xbd37eb(0x2c1)](_0x13bc95);},Game_Unit[_0x118809(0x1be)][_0x118809(0x194)]=function(_0x47efa3,_0x1cb53c){const _0xb53291=_0x118809;if(!VisuMZ[_0xb53291(0x228)][_0xb53291(0x20a)][_0xb53291(0x174)][_0xb53291(0x254)])return!![];const _0x29b47c=_0x47efa3['match'](/EVA/i)?_0xb53291(0x17e):'mevRates';this['aiKnowledge']()[_0x29b47c]=this[_0xb53291(0x1ca)]()[_0x29b47c]||[];const _0x5e72f8=_0x1cb53c['isActor']()?_0x1cb53c[_0xb53291(0x248)]():_0x1cb53c[_0xb53291(0x23b)]();return this[_0xb53291(0x1ca)]()[_0x29b47c]['includes'](_0x5e72f8);},Game_Unit['prototype'][_0x118809(0x17f)]=function(_0x1c0718,_0xaa2ece){const _0x2549a0=_0x118809;this[_0x2549a0(0x1ca)]()[_0x2549a0(0x23d)]=this[_0x2549a0(0x1ca)]()[_0x2549a0(0x23d)]||{};const _0x421f02=this[_0x2549a0(0x1ca)]()['elementRates'];_0x421f02[_0x1c0718]=_0x421f02[_0x1c0718]||[];const _0x2ec406=_0xaa2ece['isActor']()?_0xaa2ece['actorId']():_0xaa2ece[_0x2549a0(0x23b)]();!_0x421f02[_0x1c0718]['includes'](_0x2ec406)&&_0x421f02[_0x1c0718][_0x2549a0(0x2c1)](_0x2ec406);},Game_Unit[_0x118809(0x1be)][_0x118809(0x2ba)]=function(_0xc3d9f,_0x3850d8){const _0x548189=_0x118809;if(!VisuMZ[_0x548189(0x228)]['Settings']['General'][_0x548189(0x254)])return!![];this[_0x548189(0x1ca)]()[_0x548189(0x23d)]=this['aiKnowledge']()[_0x548189(0x23d)]||{};const _0x1c743e=this[_0x548189(0x1ca)]()[_0x548189(0x23d)];_0x1c743e[_0xc3d9f]=_0x1c743e[_0xc3d9f]||[];const _0x57d829=_0x3850d8[_0x548189(0x2cf)]()?_0x3850d8[_0x548189(0x248)]():_0x3850d8['enemyId']();return _0x1c743e[_0xc3d9f][_0x548189(0x2c4)](_0x57d829);},VisuMZ[_0x118809(0x228)]['Game_Troop_setup']=Game_Troop[_0x118809(0x1be)]['setup'],Game_Troop['prototype'][_0x118809(0x262)]=function(_0x4e362c){const _0x2b871a=_0x118809;VisuMZ[_0x2b871a(0x228)][_0x2b871a(0x1df)][_0x2b871a(0x18e)](this,_0x4e362c),this[_0x2b871a(0x29a)]();};