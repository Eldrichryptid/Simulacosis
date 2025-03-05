//=============================================================================
// VisuStella MZ - Skill Learn System
// VisuMZ_2_SkillLearnSystem.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_SkillLearnSystem = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillLearnSystem = VisuMZ.SkillLearnSystem || {};
VisuMZ.SkillLearnSystem.version = 1.16;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.16] [SkillLearnSystem]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Learn_System_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin lets your game's actors have an alternative way of learning
 * skills aside from leveling up. Instead, they can learn skills through the
 * in-game skill menu, where they can trade gold, items, or the brand new
 * resources made available by this plugin: Ability Points and/or Skill Points.
 * 
 * Ability Points and Skill Points are new resources provided by this plugin
 * that can be acquired in a variety of ways, of which, you can set through its
 * mechanical settings in the Plugin Parameters. These can be through leveling
 * up, performing actions, and/or defeating enemies.
 * 
 * When learning skills through this plugin's in-game system, skills can have
 * a variety of costs and requirements. These requirements can come in the form
 * of needing to be at a certain level, having specific skills learned, and/or
 * having certain switches on.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Actors can now learn new skills from the in-game skill menu under the
 *   new "Learn" command.
 * * In this new menu, actors can spend various resources to learn new skills.
 * * These resources can be Ability Points, Skill Points, items, and more.
 * * Ability Points and Skill Points are brand new resources added through this
 *   plugin which can be acquired through a variety a means ranging from
 *   participating in battle, defeating enemies, and/or leveling up.
 * * Learnable skills may have requirements that need to be first met even if
 *   the actor has the available resources.
 * * Skill learning requirements can include levels, having other skills
 *   learned, and/or enabled switches.
 * * Play animations upon learning a new skill inside the menu.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * Battle Test
 *
 * When doing a battle test through the database, all of an actor's learnable
 * skills through the Skill Learn System's notetags will become available for
 * the test battle to reduce the need to manually add them.
 *
 * ---
 *
 * VisuMZ_3_VictoryAftermath
 *
 * If VisuStella MZ's Victory Aftermath plugin is installed, the amount of
 * Skill Points and Ability Points earned can be visibly shown in the rewards
 * window.
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
 * === Ability Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting AP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Ability Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Ability Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting AP: x>
 * <Class name Starting AP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Ability Points the actor starts with in a
 *   specific class if Ability Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Ability Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Ability Points for.
 * - Replace 'name' with the name of the class to set starting Ability
 *   Points for.
 *
 * ---
 *
 * <AP Gain: x>
 * <User AP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Ability Points.
 * - Replace 'x' with a number representing the amount of Ability Points for
 *   the user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Ability Points gain from
 *   the Plugin Parameters.
 *
 * ---
 *
 * <Target AP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Ability Points.
 * - Replace 'x' with a number representing the amount of Ability Points for
 *   the target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <AP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Ability Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Ability Points to
 *   grant the player's party each.
 * - This effect will take over the "Per Enemy" Ability Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <AP Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Ability Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Ability
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Ability Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Skill Points-Related Notetags ===
 * 
 * ---
 *
 * <Starting SP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Skill Points the actor starts with in his/her
 *   starting class.
 * - Replace 'x' with a numeric value representing the amount of Skill Points
 *   to start out with.
 *
 * ---
 *
 * <Class id Starting SP: x>
 * <Class name Starting SP: x>
 *
 * - Used for: Actor Notetags
 * - Determines the amount of Skill Points the actor starts with in a specific
 *   class if Skill Points aren't shared across all classes.
 * - Replace 'x' with a numeric value representing the amount of Skill Points
 *   to start out with.
 * - Replace 'id' with the ID of the class to set starting Skill Points for.
 * - Replace 'name' with the name of the class to set starting Skill
 *   Points for.
 *
 * ---
 *
 * <SP Gain: x>
 * <User SP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the user will acquire 'x' amount
 *   of Skill Points.
 * - Replace 'x' with a number representing the amount of Skill Points for the
 *   user to earn upon usage.
 * - This effect will trigger each time per "hit".
 * - This effect will take over the "Per Action Hit" Skill Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Target SP Gain: x>
 *
 * - Used for: Skill, Item Notetags
 * - When this skill/item is used in battle, the target will acquire 'x' amount
 *   of Skill Points.
 * - Replace 'x' with a number representing the amount of Skill Points for the
 *   target to earn upon usage.
 * - This effect will trigger each time per "hit".
 *
 * ---
 *
 * <SP: x>
 *
 * - Used for: Enemy Notetags
 * - Determines the amount of Skill Points the enemy will give the player's
 *   party upon being defeated.
 * - Replace 'x' with a number representing the amount of Skill Points to grant
 *   the player's party each.
 * - This effect will take over the "Per Enemy" Skill Points gain from the
 *   Plugin Parameters.
 *
 * ---
 *
 * <SP Rate: x%>
 *
 * - Used for: Actor, Class, Weapon, Armor, State Notetags
 * - Increases the amount of Skill Points the affected battler will gain by a
 *   percentile value.
 * - Replace 'x' with a percentage number representing the amount of Skill
 *   Points that will be acquired.
 * - This stacks multiplicatively with each other.
 * - This does not apply when Skill Points are directly added, lost, or set.
 *
 * ---
 * 
 * === Learnable Skills-Related Notetags ===
 * 
 * ---
 *
 * <Learn Skill: id>
 * <Learn Skills: id, id, id>
 * 
 * <Learn Skill: name>
 * <Learn Skills: name, name, name>
 *
 * - Used for: Class Notetags
 * - Determines what skills the class can learn through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the skill that can be
 *   learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the skill that can be learned through the
 *   Skill Learn System menu.
 * - Multiple entries are permited.
 *
 * ---
 *
 * <Learn Skills>
 *  id
 *  id
 *  id
 *  name
 *  name
 *  name
 * </Learn Skills>
 *
 * - Used for: Class
 * - Determines what skills the class can learn through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the skill that can be
 *   learned through the Skill Learn System menu.
 * - Replace 'name' with the name of the skill that can be learned through the
 *   Skill Learn System menu.
 * - Multiple middle entries are permited.
 *
 * ---
 * 
 * === Skill Learn Cost-Related Notetags ===
 * 
 * ---
 *
 * <Learn AP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the Ability Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Ability Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Ability Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn CP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Determines the Class Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn JP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Determines the Job Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn SP Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the Skill Point cost needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'x' with a number representing the amount of Skill Points needed
 *   to learn this skill.
 * - If this notetag is not used, then the Skill Point cost will default to
 *   the value found in the settings.
 *
 * ---
 *
 * <Learn Item id Cost: x>
 * <Learn Item name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the items needed to be consumed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the item needed to be 
 *   consumed.
 * - Replace 'name' with the name of the item needed to be consumed.
 * - Replace 'x' with a number representing the amount of the item needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Weapon id Cost: x>
 * <Learn Weapon name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the weapons needed to be consumed for an actor to learn the
 *   skill through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the weapon needed to be 
 *   consumed.
 * - Replace 'name' with the name of the weapon needed to be consumed.
 * - Replace 'x' with a number representing the amount of the weapon needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Armor id Cost: x>
 * <Learn Armor name Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the armors needed to be consumed for an actor to learn the
 *   skill through the Skill Learn System.
 * - Replace 'id' with a number representing the ID of the armor needed to be 
 *   consumed.
 * - Replace 'name' with the name of the armor needed to be consumed.
 * - Replace 'x' with a number representing the amount of the armor needed
 *   to learn this skill.
 * - You may insert multiple copies of this notetag.
 *
 * ---
 *
 * <Learn Gold Cost: x>
 *
 * - Used for: Skill Notetags
 * - Determines the gold cost needed for an actor to learn the skill through
 *   the Skill Learn System.
 * - Replace 'x' with a number representing the amount of gold needed to learn
 *   this skill.
 * - If this notetag is not used, then the gold cost will default to the value
 *   found in the settings.
 *
 * ---
 *
 * <Learn Skill Costs>
 *  AP: x
 * 
 *  SP: x
 * 
 *  Item id: x
 *  Item name: x
 * 
 *  Weapon id: x
 *  Weapon name: x
 * 
 *  Armor id: x
 *  Armor name: x
 *  
 *  Gold: x
 * </Learn Skill Costs>
 *
 * - Used for: Skill Notetags
 * - Determines a group of resources needed for an actor to learn the skill
 *   through the Skill Learn System.
 * - Replace 'id' with the ID's of items, weapons, armors to be consumed.
 * - Replace 'name' with the names of items, weapons, armors to be consumed.
 * - Replace 'x' with the quantities of the designated resource to be consumed.
 * - Insert multiple entries of items, weapons, and armors inside the notetags
 *   to add more resource entries.
 *
 * ---
 * 
 * === JavaScript Notetags: Skill Costs ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic Ability Point and Skill Point costs.
 * 
 * ---
 *
 * <JS Learn AP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn AP Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Ability Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Ability
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn AP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn CP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn CP Cost>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Class Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn CP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn JP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn JP Cost>
 *
 * - Used for: Skill Notetags
 * - Requires VisuMZ_2_ClassChangeSystem
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Job Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn JP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 *
 * <JS Learn SP Cost>
 *  code
 *  code
 *  cost = code;
 * </JS Learn SP Cost>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create dynamically calculated cost
 *   for the required Skill Points in order to learn this skill.
 * - The 'cost' variable will be returned to determine the finalized Skill
 *   Points cost to learn this skill.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - If the <Learn SP Cost: x> is present, this notetag will be ignored.
 *
 * ---
 * 
 * === Show Condition-Related Notetags ===
 * 
 * ---
 *
 * <Learn Show Level: x>
 *
 * - Used for: Skill Notetags
 * - Actors must be at least the required level in order for the skill to even
 *   appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the skill to visibly appear.
 *
 * ---
 *
 * <Learn Show Skill: id>
 * <Learn Show Skill: name>
 * 
 * <Learn Show All Skills: id, id, id>
 * <Learn Show All Skills: name, name, name>
 * 
 * <Learn Show Any Skills: id, id, id>
 * <Learn Show Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - The actor must have already learned the above skills in order for the
 *   learnable skill to appear visibly in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to appear visibly in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable skill will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable skill will appear visibly in the menu.
 *
 * ---
 *
 * <Learn Show Switch: x>
 * 
 * <Learn Show All Switches: x, x, x>
 * 
 * <Learn Show Any Switches: x, x, x>
 *
 * - Used for: Skill Notetags
 * - The switches must be in the ON position in order for the learnable skill
 *   to appear visibly in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to appear visibly in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable skill will appear visibly in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable skill will appear visibly in the menu.
 *
 * ---
 * 
 * === JavaScript Notetags: Show Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic determined show conditions.
 * 
 * ---
 *
 * <JS Learn Show>
 *  code
 *  code
 *  visible = code;
 * </JS Learn Show>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to determine if the skill will be
 *   visibly shown in the Skill Learn System menu.
 * - The 'visible' variable must result in a 'true' or 'false' value to
 *   determine if the skill will be visible.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - Any other show conditions must be met, too.
 *
 * ---
 *
 * <JS Learn Show List Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Show List Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is shown in the Skill Learn System skill list.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 *
 * <JS Learn Show Detail Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Show Detail Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is selected and the Detailed Skill Learn System
 *   resource cost window is opened.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 * 
 * === Require Condition-Related Notetags ===
 * 
 * ---
 *
 * <Learn Require Level: x>
 *
 * - Used for: Skill Notetags
 * - Actors must be at least the required level in order for the skill to be
 *   enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the required level for the actor
 *   in order for the skill to visibly appear.
 *
 * ---
 *
 * <Learn Require Skill: id>
 * <Learn Require Skill: name>
 * 
 * <Learn Require All Skills: id, id, id>
 * <Learn Require All Skills: name, name, name>
 * 
 * <Learn Require Any Skills: id, id, id>
 * <Learn Require Any Skills: name, name, name>
 *
 * - Used for: Skill Notetags
 * - The actor must have already learned the above skills in order for the
 *   learnable skill to be enabled in the Skill Learn System menu.
 * - Replace 'id' with a number representing the ID of the skill required to be
 *   known by the actor in order to be enabled in the menu.
 * - Replace 'name' with the name of the skill required to be known by the
 *   actor in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the listed skills to be known
 *   before the learnable skill will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the listed skills to be known
 *   before the learnable skill will be enabled in the menu.
 *
 * ---
 *
 * <Learn Require Switch: x>
 * 
 * <Learn Require All Switches: x, x, x>
 * 
 * <Learn Require Any Switches: x, x, x>
 *
 * - Used for: Skill Notetags
 * - The switches must be in the ON position in order for the learnable skill
 *   to be enabled in the Skill Learn System menu.
 * - Replace 'x' with a number representing the ID of the switch required to be
 *   in the ON position in order to be enabled in the menu.
 * - The 'All' notetag variant requires all of the switches to be in the ON
 *   position before the learnable skill will be enabled in the menu.
 * - The 'Any' notetag variant requires any of the switches to be in the ON
 *   position before the learnable skill will be enabled in the menu.
 *
 * ---
 * 
 * === JavaScript Notetags: Requirement Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * create dynamic determined learning requirement conditions.
 * 
 * ---
 *
 * <JS Learn Requirements>
 *  code
 *  code
 *  enabled = code;
 * </JS Learn Requirements>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to determine if the skill will be
 *   enabled for learning in the Skill Learn System menu.
 * - The 'enabled' variable must result in a 'true' or 'false' value to
 *   determine if the skill will be enabled.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 * - Any other requirement conditions must be met, too.
 *
 * ---
 *
 * <JS Learn Requirements List Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Requirements List Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is shown in the Skill Learn System skill list
 *   as long as the requirements have to be met.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 *
 * <JS Learn Requirements Detail Text>
 *  code
 *  code
 *  text = code;
 * </JS Learn Requirements Detail Text>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to create custom text that will be
 *   displayed when the skill is selected and the Detailed Skill Learn System
 *   resource cost window is opened as long as the requirements have to be met.
 * - The 'text' variable will determine the text to be shown if it is a string.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
 *
 * ---
 * 
 * === Animation-Related Notetags ===
 * 
 * ---
 *
 * <Learn Skill Animation: id>
 * <Learn Skill Animation: id, id, id>
 * 
 * - Used for: Skill Notetags
 * - Plays the animation(s) when this skill is learned through the Skill Learn
 *   System's menu.
 * - This will override the default animation settings found in the plugin
 *   parameters and use the unique one set through notetags instead.
 * - Replace 'id' with the ID of the animation you wish to play.
 * - If multiple ID's are found, then each animation will play one by one in
 *   the order they are listed.
 *
 * ---
 * 
 * <Learn Skill Fade Speed: x>
 * 
 * - Used for: Skill Notetags
 * - This determines the speed at which the skill's icon fades in during the
 *   skill learning animation.
 * - Replace 'x' with a number value to determine how fast the icon fades in.
 * - Use lower numbers for slower fade speeds and higher numbers for faster
 *   fade speeds.
 * 
 * ---
 * 
 * <Learn Skill Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Skill Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   skill's icon during learning instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of learning skills, too.
 * - The size used for the image will vary based on your game's resolution.
 * 
 * ---
 * 
 * === JavaScript Notetags: On Learning Conditions ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * produce special effects when the skill is learned.
 * 
 * ---
 *
 * <JS On Learn Skill>
 *  code
 *  code
 *  code
 * </JS On Learn Skill>
 *
 * - Used for: Skill Notetags
 * - Replace 'code' with JavaScript code to perform the desired actions when
 *   the skill is learned.
 * - This will apply to any time the skill is learned by an actor, even if it
 *   is through natural leveling or through the Skill Learn System menu.
 * - The 'user' variable can be used to reference the actor who will be
 *   learning the skill.
 * - The 'skill' variable can be used to reference the skill that will be
 *   learned by the actor.
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
 * === Ability Points Plugin Commands ===
 * 
 * ---
 *
 * Ability Points: Gain
 * - The target actor(s) gains Ability Points.
 * - Gained amounts are affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Add
 * - The target actor(s) receives Ability Points.
 * - Received amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Lose
 * - The target actor(s) loses Ability Points.
 * - Lost amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Ability Points: Set
 * - Changes the exact Ability Points for the target actor(s).
 * - Changed amounts are NOT affected by Ability Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Ability Points for.
 *   - Use "0" for the current class.
 *
 *   Ability Points:
 *   - Determine how many Ability Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === Skill Points Plugin Commands ===
 * 
 * ---
 *
 * Skill Points: Gain
 * - The target actor(s) gains Skill Points.
 * - Gained amounts are affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to gain Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be gained.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Add
 * - The target actor(s) receives Skill Points.
 * - Received amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to receive Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be added.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Lose
 * - The target actor(s) loses Skill Points.
 * - Lost amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to lose Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be lost.
 *   - You may use code.
 *
 * ---
 *
 * Skill Points: Set
 * - Changes the exact Skill Points for the target actor(s).
 * - Changed amounts are NOT affected by Skill Point bonus rates.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Class ID(s):
 *   - Select which Class ID(s) to change Skill Points for.
 *   - Use "0" for the current class.
 *
 *   Skill Points:
 *   - Determine how many Skill Points will be set exactly to.
 *   - You may use code.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Show Skill Learn in Skill Menu?
 * - Shows/hides Skill Learn inside the skill menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Skill Learn inside the skill menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Skill Learn System. These determine the settings
 * that are used for the Skill Learn System menu's main screen.
 *
 * ---
 *
 * Visual
 * 
 *   Displayed Costs:
 *   - Select which cost types to display in the skill entry.
 *   - This also determines the order they are displayed.
 *     - AP - Ability Points
 *     - SP - Skill Points
 *     - Item - Item Costs
 *     - Weapon - Weapon Costs
 *     - Armor - Armor Costs
 *     - Gold - Gold Costs
 * 
 *   Separate Skill Type?:
 *   - Separate learnable skills by skill type?
 * 
 *   Hide Learned Skills
 *   - Hide skills after they are learned?
 * 
 *   JS: Draw Status:
 *   - JavaScript code used to draw in Window_SkillStatus when the Skill Learn
 *     System is active.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Learned Text:
 *   - This is the text that appears if the skill has been learned.
 *   - You may use text codes.
 * 
 *   Requirements
 * 
 *     Requirement Header:
 *     - Header for requirements.
 *     - %1 - Requirements (all of them)
 * 
 *     Separation Format:
 *     - This determines how the requirements are separated.
 *     - %1 - Previous Requirement, %2 - Second Requirement
 * 
 *     Level Format:
 *     - This how level is displayed.
 *     - %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * 
 *     Skill Format:
 *     - This how required skills are displayed.
 *     - %1 - Icon, %2 - Skill Name
 * 
 *     Switch Format:
 *     - This how required switches are displayed.
 *     - %1 - Switch Name
 * 
 *   Costs
 * 
 *     Separation Format:
 *     - This determines how the costs are separated from one another.
 *     - %1 - Previous Cost, %2 - Second Cost
 * 
 *     Item Format:
 *     - Determine how items are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Item Name
 * 
 *     Weapon Format:
 *     - Determine how weapons are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Weapon Name
 * 
 *     Armor Format:
 *     - Determine how armors are displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Armor Name
 * 
 *     Gold Format:
 *     - Determine how gold is displayed as a cost.
 *     - %1 - Quantity, %2 - Icon, %3 - Currency Vocabulary
 * 
 *   Separation:
 * 
 *     Indent Skills:
 *     - When separated, indent skills by this many pixels.
 * 
 *     Category Format:
 *     - Skill type category name format
 *     - %1 - Name
 * 
 *     Collapse Format:
 *     - Format for command to collapse skill type.
 *     - %1 - Name
 * 
 *     Expand Format:
 *     - Format for command to expand skill type.
 *     - %1 - Name
 * 
 *     Font Color:
 *     - When separated, indent skills by this many pixels.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Access Settings
 * ============================================================================
 *
 * Menu Access settings for Skill Learn System. The Skill Learn System is
 * accessible normally through the in-game Skill menu.
 *
 * ---
 *
 * Main Access Settings
 * 
 *   Command Name:
 *   - Name of the 'Skill Learn' option in the Menu.
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Skill Learn?
 * 
 *   Show in Menu?:
 *   - Add the 'Skill Learn' option to the Menu by default?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Animation Settings
 * ============================================================================
 *
 * Animation settings for the Skill Learn System. By default, an animation will
 * be played upon learning a skill through the Skill Learn System's menu in
 * order to provide player feedback about learning the said skill.
 *
 * ---
 *
 * General
 * 
 *   Show Animations?:
 *   - Show animations when learning a skill?
 * 
 *   Show Windows?:
 *   - Show windows during a skill learn animation?
 * 
 *   Default Animations:
 *   - Default animation(s) do you want to play when learning.
 *
 * ---
 *
 * Skill Sprite
 * 
 *   Scale:
 *   - How big do you want the skill sprite to be on screen?
 * 
 *   Fade Speed:
 *   - How fast do you want the icon to fade in?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Sound Settings
 * ============================================================================
 *
 * Settings for the sound effect played when learning a new skill through the
 * Skill Learn System.
 *
 * ---
 *
 * Settings
 * 
 *   Filename:
 *   - Filename of the sound effect played.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for the Skill Learn System. There are two new windows added
 * into the Skill menu through this plugin: the Detail Window and the Confirm
 * Window.
 * 
 * The Detail Window will list the required costs of learning a skill in detail
 * in case the icons provided are not clear enough to show what's needed.
 * 
 * The Confirm Window is a window that appears towards the bottom to let the
 * player make a confirmation before deciding to learn the skill.
 *
 * ---
 *
 * Detail Window
 * 
 *   Requirements
 * 
 *     Requirement Title:
 *     - Text used when drawing the learning requirements.
 *     - %1 - Skill Icon, %2 - Skill Name
 * 
 *     Requirement Met:
 *     - This how met requirements look.
 *     - %1 - Requirement Text
 * 
 *     Requirement Not Met:
 *     - This how met requirements look.
 *     - %1 - Requirement Text
 * 
 *     Requirement Level:
 *     - This how level is displayed.
 *     - %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * 
 *     Requirement Skill:
 *     - This how required skills are displayed.
 *     - %1 - Icon, %2 - Skill Name
 * 
 *     Requirement Switch:
 *     - This how required switches are displayed.
 *     - %1 - Switch Name
 * 
 *   Costs
 * 
 *     Cost Title:
 *     - Text used when drawing the learning costs.
 *     - %1 - Skill Icon, %2 - Skill Name
 * 
 *     Cost Name:
 *     - Text used to label the resource being consumed.
 * 
 *     Cost Quantity:
 *     - Text used to label the cost of the resource.
 * 
 *     Cost of Owned:
 *     - Text used to label the amount of the resource in possession.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Confirm Window
 * 
 *   Confirm Text:
 *   - Text used for the Confirm command.
 *   - Text codes can be used.
 * 
 *   Cancel Text:
 *   - Text used for the Cancel command.
 *   - Text codes can be used.
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Ability Points Settings
 * ============================================================================
 *
 * Ability Points are an actor-only resource used as a currency for this
 * plugin. You can determine how they appear in-game, how they're earned, and
 * what kind of mechanics are involved with them. Ability Points can also be 
 * used in other VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Ability Points:
 *   - Do you want Ability Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Ability Points an actor can have?
 *   - Use 0 for unlimited Ability Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Ability Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Ability Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Ability Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Ability Points appears in-game.
 * 
 *   Menu Text Format:
 *   - What is the text format for it to be displayed in windows.
 *   - %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 *
 * ---
 *
 * Gain
 * 
 *   Per Action Hit:
 *   - How many Ability Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Ability Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Ability Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Ability Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much AP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Ability Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Ability Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawAbilityPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorAbilityPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Ability Points aren't shared or if you want the Ability
 *       Points from the actor's current class.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Skill Points Settings
 * ============================================================================
 *
 * Skill Points are an actor-only resource used as a currency for this plugin.
 * You can determine how they appear in-game, how they're earned, and what kind
 * of mechanics are involved with them. Skill Points can also be used in other
 * VisuStella plugins.
 *
 * ---
 *
 * Mechanics
 * 
 *   Shared Skill Points:
 *   - Do you want Skill Points to be shared across all classes?
 *   - Or do you want all classes to have their own?
 * 
 *   Maximum:
 *   - What's the maximum amount of Skill Points an actor can have?
 *   - Use 0 for unlimited Skill Points.
 *
 * ---
 *
 * Visual
 * 
 *   Show In Menus?:
 *   - Do you wish to show Skill Points in menus that allow them?
 * 
 *   Icon:
 *   - What is the icon you want to use to represent Skill Points?
 *
 * ---
 *
 * Vocabulary
 * 
 *   Full Text:
 *   - The full text of how Skill Points appears in-game.
 * 
 *   Abbreviated Text:
 *   - The abbreviation of how Skill Points appears in-game.
 * 
 *   Menu Text Format:
 *   - What is the text format for it to be displayed in windows.
 *   - %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 *
 * ---
 *
 * Gain
 * 
 *   Per Action Hit:
 *   - How many Skill Points should an actor gain per action?
 *   - You may use code.
 * 
 *   Per Level Up:
 *   - How many Skill Points should an actor gain per level up?
 *   - You may use code.
 * 
 *   Per Enemy Defeated:
 *   - How many Skill Points should an actor gain per enemy?
 *   - You may use code.
 * 
 *     Alive Actors?:
 *     - Do actors have to be alive to receive Skill Points from
 *       defeated enemies?
 *
 * ---
 *
 * Victory
 * 
 *   Show During Victory?:
 *   - Show how much SP an actor has earned in battle during the victory phase?
 * 
 *   Victory Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * 
 *   Aftermath Display?:
 *   - Requires VisuMZ_3_VictoryAftermath. 
 *   - Show Skill Points as the main acquired resource in the actor windows?
 * 
 *   Aftermath Text:
 *   - For no Victory Aftermath, this is the text that appears.
 *   - %1 - Earned, %2 - Abbr, %3 - Full Text
 *
 * ---
 * 
 * For those who wish to display how many Skill Points an actor has for a
 * specific class, you can use the following JavaScript code inside of a
 * window object.
 * 
 *   this.drawSkillPoints(value, x, y, width, align);
 *   - The 'value' variable refers to the number you wish to display.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
 * 
 *   this.drawActorSkillPoints(actor, classID, x, y, width, align);
 *   - The 'actor' variable references the actor to get data from.
 *   - The 'classID' variable is the class to get data from.
 *     - Use 0 if Skill Points aren't shared or if you want the Skill
 *       Points from the actor's current class.
 *   - The 'x' variable refers to the x coordinate to draw at.
 *   - The 'y' variable refers to the y coordinate to draw at.
 *   - The 'width' variable refers to the width of the data area.
 *   - Replace 'align' with a string saying 'left', 'center', or 'right' to
 *     determine how you want the data visibly aligned.
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
 * Version 1.16: January 16, 2025
 * * Bug Fixes!
 * ** Fixed a compatibility bug that would cause the last skill of a list to be
 *    removed from learning. Fix made by Irina.
 * 
 * Version 1.15: July 18, 2024
 * * Compatibility Update!
 * ** Added compatibility with new Skills and States Core features!
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** Added new Plugin Parameter by Irina:
 * *** Parameters > General Settings > Hide Learned Skills
 * **** Hide skills after they are learned?
 * 
 * Version 1.14: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where skill ID's could clash with state ID's from Equip
 *    Passive System and preventing states from being learned. Fixed by Irina.
 * 
 * Version 1.13: March 14, 2024
 * * Compatibility Update!
 * ** Fixed a problem where the learn passive notetags from the Equip Passive
 *    System plugin could be blocked by other plugins. Fix made by Irina.
 * 
 * Version 1.12: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.11: May 18, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a visual listing bug effect when 'CP' and 'JP' are listed under
 *    costs but the VisuMZ Class Change System plugin isn't present. Fix made
 *    by Olivia.
 * 
 * Version 1.09: June 9, 2022
 * * Compatibility Update
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: March 24, 2022
 * * Documentation Update!
 * ** Fixed a typo for missing a "/" in the <Learn Skills> group notetag.
 * 
 * Version 1.07: February 10, 2022
 * * Bug Fixes!
 * ** Costs for CP and JP will have better fail safes to not automatically
 *    reduce to 0 under specific conditions when learning skills. Fix by Arisu.
 * 
 * Version 1.06: July 9, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Yanfly.
 * *** <Learn Skill Picture: filename> and <Picture: filename>
 * **** Uses a picture from your project's /img/pictures/ folder instead of the
 *      skill's icon during learning instead.
 * 
 * Version 1.04: December 18, 2020
 * * Bug Fixes!
 * ** Notetags that utilize multiple numeric ID's instead of skill names should
 *    now be working properly. Fix made by Yanfly.
 * 
 * Version 1.03: December 11, 2020
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** The Plugin Parameter for "Displayed Costs" have been updated to contain
 *    compatibility for a future plugin.
 * ** The Plugin Parameter for "JS: Draw Status" has been updated to contain
 *    compatibility for a future plugin.
 * *** To quickly acquire the new changes for the above Plugin Parameters,
 *     delete the "General" settings from the main Plugin Parameters page, then
 *     open them up again. These settings will be defaulted to the new
 *     additions added for the plugin. Warning! Old settings will be lost.
 * * New Features!
 * ** Added <Learn CP Cost: x>, <Learn JP Cost: x>, <JS Learn CP Cost>,
 *    <JS Learn JP Cost> notetags. Added by Arisu.
 * 
 * Version 1.02: November 29, 2020
 * * Bug Fixes!
 * ** The plugin should no longer be dependent on Skills & States Core. Fix
 *    made by Arisu.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Game no longer crashes when displaying AP/SP rewards for those without
 *    the Victory Aftermath plugin. Fix made by Yanfly.
 *
 * Version 1.00: November 30, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsGain
 * @text Ability Points: Gain
 * @desc The target actor(s) gains Ability Points.
 * Gained amounts are affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to gain Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsAdd
 * @text Ability Points: Add
 * @desc The target actor(s) receives Ability Points.
 * Received amounts are NOT affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to receive Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsLose
 * @text Ability Points: Lose
 * @desc The target actor(s) loses Ability Points.
 * Lost amounts are NOT affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to lose Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AbilityPointsSet
 * @text Ability Points: Set
 * @desc Changes the exact Ability Points for the target actor(s).
 * Changed amounts are NOT affected by Ability Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to change Ability Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Ability Points
 * @desc Determine how many Ability Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsGain
 * @text Skill Points: Gain
 * @desc The target actor(s) gains Skill Points.
 * Gained amounts are affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to gain Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be gained.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsAdd
 * @text Skill Points: Add
 * @desc The target actor(s) receives Skill Points.
 * Received amounts are NOT affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to receive Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be added.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsLose
 * @text Skill Points: Lose
 * @desc The target actor(s) loses Skill Points.
 * Lost amounts are NOT affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to lose Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be lost.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SkillPointsSet
 * @text Skill Points: Set
 * @desc Changes the exact Skill Points for the target actor(s).
 * Changed amounts are NOT affected by Skill Point bonus rates.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg Classes:arraynum
 * @text Class ID(s)
 * @type class[]
 * @desc Select which Class ID(s) to change Skill Points for.
 * Use "0" for the current class.
 * @default ["0"]
 *
 * @arg Points:eval
 * @text Skill Points
 * @desc Determine how many Skill Points will be set exactly to.
 * You may use code.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowSkillLearnSystemMenu
 * @text System: Show Skill Learn in Skill Menu?
 * @desc Shows/hides Skill Learn inside the skill menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Skill Learn inside the skill menu.
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
 * @param SkillLearnSystem
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Scene_SkillLearn
 *
 * @param General:struct
 * @text General Settings
 * @parent Scene_SkillLearn
 * @type struct<General>
 * @desc General settings for the Skill Learn System.
 * @default {"Visual":"","DisplayedCosts:arraystr":"[\"AP\",\"SP\",\"Item\",\"Weapon\",\"Armor\",\"Gold\"]","StatusWindowDrawJS:func":"\"// Draw Face\\nconst fx = this.colSpacing() / 2;\\nconst fh = this.innerHeight;\\nconst fy = fh / 2 - this.lineHeight() * 1.5;\\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\\n\\n// Return if Window Size is Too Small\\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\\nlet sw = this.innerWidth - sx - 2;\\nif (sw < 300) return;\\n\\n// Draw Costs\\n// Compatibility Target\\nconst costs = this.getSkillLearnDisplayedCosts();\\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\\nconst maxCol = Math.ceil(costs.length / maxEntries);\\nlet cx = sx;\\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(costs.length / maxCol))) / 2), 0);\\nconst by = cy;\\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\\nif (maxCol === 1) {\\n    cw = Math.min(ImageManager.faceWidth, cw);\\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\\n}\\nfor (const cost of costs) {\\n    switch (cost) {\\n\\n        case 'AP':\\n            this.drawActorAbilityPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            break;\\n\\n        case 'CP':\\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\\n                this.drawActorClassPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            }\\n            break;\\n\\n        case 'JP':\\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\\n                this.drawActorJobPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            }\\n            break;\\n\\n        case 'SP':\\n            this.drawActorSkillPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\\n            break;\\n\\n        case 'Gold':\\n            this.drawCurrencyValue($gameParty.gold(), TextManager.currencyUnit, cx, cy, cw);\\n            break;\\n\\n        default:\\n            continue;\\n    }\\n    cy += this.lineHeight();\\n    if (cy + this.lineHeight() > this.innerHeight) {\\n        cy = by;\\n        cx += cw + (this.itemPadding() * 2);\\n    }\\n}\"","Vocabulary":"","Learned:str":"Learned","Requirements":"","RequireFmt:str":"Requires %1","ReqSeparateFmt:str":"%1, %2","ReqLevelFmt:str":"\\C[16]%3\\C[0]%1","ReqSkillFmt:str":"%1\\C[16]%2\\C[0]","ReqSwitchFmt:str":"\\C[16]%1\\C[0]","Costs":"","SeparationFmt:str":"%1  %2","ItemFmt:str":"×%1%2","WeaponFmt:str":"×%1%2","ArmorFmt:str":"×%1%2","GoldFmt:str":"×%1%2"}
 *
 * @param MenuAccess:struct
 * @text Menu Access Settings
 * @parent Scene_SkillLearn
 * @type struct<MenuAccess>
 * @desc Menu Access settings for Skill Learn System.
 * @default {"Name:str":"Learn","Icon:num":"87","ShowMenu:eval":"true"}
 *
 * @param Animation:struct
 * @text Animation Settings
 * @parent Scene_SkillLearn
 * @type struct<Animation>
 * @desc Animation settings for the Skill Learn System.
 * @default {"General":"","ShowAnimations:eval":"true","ShowWindows:eval":"true","Animations:arraynum":"[\"40\",\"48\"]","Sprite":"","Scale:num":"8.0","FadeSpeed:num":"4"}
 *
 * @param Sound:struct
 * @text Learn Sound Effect
 * @parent Scene_SkillLearn
 * @type struct<Sound>
 * @desc Settings for the sound effect played when learning a new skill through the Skill Learn System.
 * @default {"name:str":"Skill3","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @param Window:struct
 * @text Window Settings
 * @parent Scene_SkillLearn
 * @type struct<Window>
 * @desc Window settings for the Skill Learn System.
 * @default {"DetailWindow":"","Requirements":"","RequirementTitle:str":"\\C[16]%1%2 Requirements\\C[0]","ReqMetFmt:str":"\\C[24]✔ %1\\C[0]","ReqNotMetFmt:str":"\\C[0]✘ %1\\C[0]","ReqLevelFmt:str":"\\I[87]%2 %1 Reached","ReqSkillFmt:str":"%1%2 Learned","ReqSwitchFmt:str":"\\I[160]%1","Costs":"","LearningTitle:str":"\\C[16]Learning\\C[0] %1%2","IngredientName:str":"\\C[16]Resource\\C[0]","IngredientCost:str":"\\C[16]Cost\\C[0]","IngredientOwned:str":"\\C[16]Owned\\C[0]","DetailWindow_BgType:num":"0","DetailWindow_RectJS:func":"\"const skillWindowRect = this.itemWindowRect();\\nconst wx = skillWindowRect.x;\\nconst wy = skillWindowRect.y;\\nconst ww = skillWindowRect.width;\\nconst wh = skillWindowRect.height - this.calcWindowHeight(2, false);\\nreturn new Rectangle(wx, wy, ww, wh);\"","ConfirmWindow":"","ConfirmCmd:str":"\\I[164]Learn","CancelCmd:str":"\\I[168]Cancel","ConfirmWindow_BgType:num":"0","ConfirmWindow_RectJS:func":"\"const skillWindowRect = this.itemWindowRect();\\nconst ww = skillWindowRect.width;\\nconst wh = this.calcWindowHeight(2, false);\\nconst wx = skillWindowRect.x;\\nconst wy = skillWindowRect.y + skillWindowRect.height - wh;\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 * 
 * @param Resources
 *
 * @param AbilityPoints:struct
 * @text Ability Points Settings
 * @parent Resources
 * @type struct<AbilityPoints>
 * @desc Settings for Ability Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"true","DefaultCost:num":"0","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"78","Vocabulary":"","FullText:str":"Ability Points","AbbrText:str":"AP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"10 + Math.randomInt(5)","PerLevelUp:str":"0","PerEnemy:str":"50 + Math.randomInt(10)","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"true","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"true","AftermathText:str":"+%1 %2"}
 *
 * @param SkillPoints:struct
 * @text Skill Points Settings
 * @parent Resources
 * @type struct<SkillPoints>
 * @desc Settings for Skill Points and how they work in-game.
 * @default {"Mechanics":"","SharedResource:eval":"false","DefaultCost:num":"1","MaxResource:num":"0","Visual":"","ShowInMenus:eval":"true","Icon:num":"79","Vocabulary":"","FullText:str":"Skill Points","AbbrText:str":"SP","TextFmt:str":"%1 \\c[5]%2\\c[0]%3","Gain":"","PerAction:str":"0","PerLevelUp:str":"100","PerEnemy:str":"0","AliveActors:eval":"true","Victory":"","ShowVictory:eval":"false","VictoryText:str":"%1 gains %2 %3!","AftermathActorDisplay:eval":"false","AftermathText:str":"+%1 %2"}
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
 * @param Visual
 * 
 * @param DisplayedCosts:arraystr
 * @text Displayed Costs
 * @parent Visual
 * @type select[]
 * @option AP - Ability Points
 * @value AP
 * @option CP - Class Points (Requires VisuMZ_2_ClassChangeSystem)
 * @value CP
 * @option JP - Job Points (Requires VisuMZ_2_ClassChangeSystem)
 * @value JP
 * @option SP - Skill Points
 * @value SP
 * @option Item - Item Costs
 * @value Item
 * @option Weapon - Weapon Costs
 * @value Weapon
 * @option Armor - Armor Costs
 * @value Armor
 * @option Gold - Gold Costs
 * @value Gold
 * @desc Select which cost types to display in the skill entry.
 * This also determines the order they are displayed.
 * @default ["AP","SP","Item","Weapon","Armor","Gold"]
 *
 * @param SeparateByStypeID:eval
 * @text Separate Skill Type?
 * @parent Visual
 * @type boolean
 * @on Separate
 * @off Don't
 * @desc Separate learnable skills by skill type?
 * @default false
 *
 * @param HideLearned:eval
 * @text Hide Learned Skills
 * @parent Visual
 * @type boolean
 * @on Hide
 * @off Show
 * @desc Hide skills after they are learned?
 * @default false
 *
 * @param StatusWindowDrawJS:func
 * @text JS: Draw Status
 * @parent Visual
 * @type note
 * @desc JavaScript code used to draw in Window_SkillStatus when the Skill Learn System is active.
 * @default "// Draw Face\nconst fx = this.colSpacing() / 2;\nconst fh = this.innerHeight;\nconst fy = fh / 2 - this.lineHeight() * 1.5;\nthis.drawActorFace(this._actor, fx + 1, 0, 144, fh);\nthis.drawActorSimpleStatus(this._actor, fx + 180, fy);\n\n// Return if Window Size is Too Small\nlet sx = (this.colSpacing() / 2) + 180 + 180 + 180;\nlet sw = this.innerWidth - sx - 2;\nif (sw < 300) return;\n\n// Draw Costs\n// Compatibility Target\nconst costs = this.getSkillLearnDisplayedCosts();\nconst maxEntries = Math.floor(this.innerHeight / this.lineHeight());\nconst maxCol = Math.ceil(costs.length / maxEntries);\nlet cx = sx;\nlet cy = Math.max(Math.round((this.innerHeight - (this.lineHeight() * Math.ceil(costs.length / maxCol))) / 2), 0);\nconst by = cy;\nlet cw = (this.innerWidth - cx - (this.itemPadding() * 2 * maxCol)) / maxCol;\nif (maxCol === 1) {\n    cw = Math.min(ImageManager.faceWidth, cw);\n    cx += Math.round((this.innerWidth - cx - (this.itemPadding() * 2) - cw) / 2);\n}\nfor (const cost of costs) {\n    switch (cost) {\n\n        case 'AP':\n            this.drawActorAbilityPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            break;\n\n        case 'CP':\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\n                this.drawActorClassPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            }\n            break;\n\n        case 'JP':\n            if (Imported.VisuMZ_2_ClassChangeSystem) {\n                this.drawActorJobPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            }\n            break;\n\n        case 'SP':\n            this.drawActorSkillPoints(this._actor, this._actor.currentClass().id, cx, cy, cw, 'right');\n            break;\n\n        case 'Gold':\n            this.drawCurrencyValue($gameParty.gold(), TextManager.currencyUnit, cx, cy, cw);\n            break;\n\n        default:\n            continue;\n    }\n    cy += this.lineHeight();\n    if (cy + this.lineHeight() > this.innerHeight) {\n        cy = by;\n        cx += cw + (this.itemPadding() * 2);\n    }\n}"
 *
 * @param Vocabulary
 *
 * @param Learned:str
 * @text Learned Text
 * @parent Vocabulary
 * @desc This is the text that appears if the skill has been
 * learned. You may use text codes.
 * @default Learned
 *
 * @param Requirements
 * @parent Vocabulary
 *
 * @param RequireFmt:str
 * @text Requirement Header
 * @parent Requirements
 * @desc Header for requirements.
 * %1 - Requirements (all of them)
 * @default Requires %1
 *
 * @param ReqSeparateFmt:str
 * @text Separation Format
 * @parent Requirements
 * @desc This determines how the requirements are separated.
 * %1 - Previous Requirement, %2 - Second Requirement
 * @default %1, %2
 *
 * @param ReqLevelFmt:str
 * @text Level Format
 * @parent Requirements
 * @desc This how level is displayed.
 * %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * @default \C[16]%3\C[0]%1
 *
 * @param ReqSkillFmt:str
 * @text Skill Format
 * @parent Requirements
 * @desc This how required skills are displayed.
 * %1 - Icon, %2 - Skill Name
 * @default %1\C[16]%2\C[0]
 *
 * @param ReqSwitchFmt:str
 * @text Switch Format
 * @parent Requirements
 * @desc This how required switches are displayed.
 * %1 - Switch Name
 * @default \C[16]%1\C[0]
 *
 * @param Costs
 * @parent Vocabulary
 *
 * @param SeparationFmt:str
 * @text Separation Format
 * @parent Costs
 * @desc This determines how the costs are separated from one another.
 * %1 - Previous Cost, %2 - Second Cost
 * @default %1  %2
 *
 * @param ItemFmt:str
 * @text Item Format
 * @parent Costs
 * @desc Determine how items are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Item Name
 * @default ×%1%2
 *
 * @param WeaponFmt:str
 * @text Weapon Format
 * @parent Costs
 * @desc Determine how weapons are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Weapon Name
 * @default ×%1%2
 *
 * @param ArmorFmt:str
 * @text Armor Format
 * @parent Costs
 * @desc Determine how armors are displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Armor Name
 * @default ×%1%2
 *
 * @param GoldFmt:str
 * @text Gold Format
 * @parent Costs
 * @desc Determine how gold is displayed as a cost.
 * %1 - Quantity, %2 - Icon, %3 - Currency Vocabulary
 * @default ×%1%2
 *
 * @param Separation
 * @parent Vocabulary
 *
 * @param SeparateIndent:num
 * @text Indent Skills
 * @parent Separation
 * @desc When separated, indent skills by this many pixels.
 * @default 16
 *
 * @param SeparateCategoryFmt:str
 * @text Category Format
 * @parent Separation
 * @desc Skill type category name format
 * %1 - Name
 * @default %1
 *
 * @param SeparateCollapseFmt:str
 * @text Collapse Format
 * @parent Separation
 * @desc Format for command to collapse skill type.
 * %1 - Name
 * @default %1 [-]
 *
 * @param SeparateExpandFmt:str
 * @text Expand Format
 * @parent Separation
 * @desc Format for command to expand skill type.
 * %1 - Name
 * @default %1 [+]
 *
 * @param StypeCategoryColor:str
 * @text Font Color
 * @parent Separation
 * @desc Text Color used to display this cost.
 * For a hex color, use #rrggbb with VisuMZ_1_MessageCore
 * @default 16
 *
 */
/* ----------------------------------------------------------------------------
 * MenuAccess Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuAccess:
 *
 * @param Name:str
 * @text Command Name
 * @desc Name of the 'Skill Learn' option in the Menu.
 * @default Learn
 *
 * @param Icon:num
 * @text Icon
 * @desc What is the icon you want to use to represent Skill Learn?
 * @default 87
 *
 * @param ShowMenu:eval
 * @text Show in Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Skill Learn' option to the Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Animation Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Animation:
 *
 * @param General
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @parent General
 * @type boolean
 * @on Show
 * @off Skip
 * @desc Show animations when learning a skill?
 * @default true
 *
 * @param ShowWindows:eval
 * @text Show Windows?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show windows during a skill learn animation?
 * @default false
 *
 * @param Animations:arraynum
 * @text Default Animations
 * @parent General
 * @type animation[]
 * @desc Default animation(s) do you want to play when learning.
 * @default ["40","48"]
 *
 * @param Sprite
 * @text Skill Sprite
 *
 * @param Scale:num
 * @text Scale
 * @parent Sprite
 * @desc How big do you want the skill sprite to be on screen?
 * @default 8.0
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent Sprite
 * @type number
 * @min 1
 * @desc How fast do you want the icon to fade in?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @desc Filename of the sound effect played.
 * @default Skill3
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param DetailWindow
 * @text Detail Window
 * 
 * @param Requirements
 * @parent DetailWindow
 *
 * @param RequirementTitle:str
 * @text Requirement Title
 * @parent Requirements
 * @desc Text used when drawing the learning requirements.
 * %1 - Skill Icon, %2 - Skill Name
 * @default \C[16]%1%2 Requirements\C[0]
 *
 * @param ReqMetFmt:str
 * @text Requirement Met
 * @parent Requirements
 * @desc This how met requirements look.
 * %1 - Requirement Text
 * @default \C[24]✔ %1\C[0]
 *
 * @param ReqNotMetFmt:str
 * @text Requirement Not Met
 * @parent Requirements
 * @desc This how met requirements look.
 * %1 - Requirement Text
 * @default \C[0]✘ %1\C[0]
 *
 * @param ReqLevelFmt:str
 * @text Requirement Level
 * @parent Requirements
 * @desc This how level is displayed.
 * %1 - Level, %2 - Full Level Term, %3 - Abbr Level Term
 * @default \I[87]%2 %1 Reached
 *
 * @param ReqSkillFmt:str
 * @text Requirement Skill
 * @parent Requirements
 * @desc This how required skills are displayed.
 * %1 - Icon, %2 - Skill Name
 * @default %1%2 Learned
 *
 * @param ReqSwitchFmt:str
 * @text Requirement Switch
 * @parent Requirements
 * @desc This how required switches are displayed.
 * %1 - Switch Name
 * @default \I[160]%1
 * 
 * @param Costs
 * @parent DetailWindow
 *
 * @param LearningTitle:str
 * @text Cost Title
 * @parent Costs
 * @desc Text used when drawing the learning costs.
 * %1 - Skill Icon, %2 - Skill Name
 * @default \C[16]Learning\C[0] %1%2
 *
 * @param IngredientName:str
 * @text Cost Name
 * @parent Costs
 * @desc Text used to label the resource being consumed.
 * @default \C[16]Resource\C[0]
 *
 * @param IngredientCost:str
 * @text Cost Quantity
 * @parent Costs
 * @desc Text used to label the cost of the resource.
 * @default \C[16]Cost\C[0]
 *
 * @param IngredientOwned:str
 * @text Cost of Owned
 * @parent Costs
 * @desc Text used to label the amount of the resource in possession.
 * @default \C[16]Owned\C[0]
 *
 * @param DetailWindow_BgType:num
 * @text Background Type
 * @parent DetailWindow
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
 * @param DetailWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent DetailWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillWindowRect = this.itemWindowRect();\nconst wx = skillWindowRect.x;\nconst wy = skillWindowRect.y;\nconst ww = skillWindowRect.width;\nconst wh = skillWindowRect.height - this.calcWindowHeight(2, false);\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param ConfirmWindow
 * @text Confirm Window
 *
 * @param ConfirmCmd:str
 * @text Confirm Text
 * @parent ConfirmWindow
 * @desc Text used for the Confirm command.
 * Text codes can be used.
 * @default \I[164]Learn
 *
 * @param CancelCmd:str
 * @text Cancel Text
 * @parent ConfirmWindow
 * @desc Text used for the Cancel command.
 * Text codes can be used.
 * @default \I[168]Cancel
 *
 * @param ConfirmWindow_BgType:num
 * @text Background Type
 * @parent ConfirmWindow
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
 * @param ConfirmWindow_RectJS:func
 * @text JS: X, Y, W, H
 * @parent ConfirmWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const skillWindowRect = this.itemWindowRect();\nconst ww = skillWindowRect.width;\nconst wh = this.calcWindowHeight(2, false);\nconst wx = skillWindowRect.x;\nconst wy = skillWindowRect.y + skillWindowRect.height - wh;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Ability Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AbilityPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Ability Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Ability Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default true
 *
 * @param DefaultCost:num
 * @text Default Cost
 * @parent Mechanics
 * @type number
 * @desc What's the default AP cost of a skill when trying to learn
 * it through the Skill Learn System?
 * @default 0
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Ability Points an actor can have?
 * Use 0 for unlimited Ability Points.
 * @default 0
 *
 * @param Visual
 *
 * @param ShowInMenus:eval
 * @text Show In Menus?
 * @parent Visual
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Do you wish to show Ability Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Ability Points?
 * @default 78
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Ability Points appears in-game.
 * @default Ability Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Ability Points appears in-game.
 * @default AP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[5]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Ability Points should an actor gain per action?
 * You may use code.
 * @default 10 + Math.randomInt(5)
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Ability Points should an actor gain per level up?
 * You may use code.
 * @default 0
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Ability Points should an actor gain per enemy?
 * You may use code.
 * @default 50 + Math.randomInt(10)
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Ability Points from
 * defeated enemies?
 * @default true
 *
 * @param Victory
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much AP an actor has earned in battle during the
 * victory phase?
 * @default true
 *
 * @param VictoryText:str
 * @text Victory Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * @default %1 gains %2 %3!
 *
 * @param AftermathActorDisplay:eval
 * @text Aftermath Display?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Ability Points as
 * the main acquired resource in the actor windows?
 * @default true
 *
 * @param AftermathText:str
 * @text Aftermath Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Earned, %2 - Abbr, %3 - Full Text
 * @default +%1 %2
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Points Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillPoints:
 *
 * @param Mechanics
 *
 * @param SharedResource:eval
 * @text Shared Skill Points
 * @parent Mechanics
 * @type boolean
 * @on Shared Across Classes
 * @off Classes Separate
 * @desc Do you want Skill Points to be shared across all classes?
 * Or do you want all classes to have their own?
 * @default false
 *
 * @param DefaultCost:num
 * @text Default Cost
 * @parent Mechanics
 * @type number
 * @desc What's the default SP cost of a skill when trying to learn
 * it through the Skill Learn System?
 * @default 1
 *
 * @param MaxResource:num
 * @text Maximum
 * @parent Mechanics
 * @type number
 * @desc What's the maximum amount of Skill Points an actor can have?
 * Use 0 for unlimited Skill Points.
 * @default 0
 *
 * @param Visual
 *
 * @param ShowInMenus:eval
 * @text Show In Menus?
 * @parent Visual
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Do you wish to show Skill Points in menus that allow them?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @parent Visual
 * @desc What is the icon you want to use to represent Skill Points?
 * @default 79
 *
 * @param Vocabulary
 *
 * @param FullText:str
 * @text Full Text
 * @parent Vocabulary
 * @desc The full text of how Skill Points appears in-game.
 * @default Skill Points
 *
 * @param AbbrText:str
 * @text Abbreviated Text
 * @parent Vocabulary
 * @desc The abbreviation of how Skill Points appears in-game.
 * @default SP
 *
 * @param TextFmt:str
 * @text Menu Text Format
 * @parent Vocabulary
 * @desc What is the text format for it to be displayed in windows.
 * %1 - Value, %2 - Abbr, %3 - Icon, %4 - Full Text
 * @default %1 \c[4]%2\c[0]%3
 *
 * @param Gain
 *
 * @param PerAction:str
 * @text Per Action Hit
 * @parent Gain
 * @desc How many Skill Points should an actor gain per action?
 * You may use code.
 * @default 0
 *
 * @param PerLevelUp:str
 * @text Per Level Up
 * @parent Gain
 * @desc How many Skill Points should an actor gain per level up?
 * You may use code.
 * @default 100
 *
 * @param PerEnemy:str
 * @text Per Enemy Defeated
 * @parent Gain
 * @desc How many Skill Points should an actor gain per enemy?
 * You may use code.
 * @default 0
 *
 * @param AliveActors:eval
 * @text Alive Actors?
 * @parent PerEnemy:str
 * @type boolean
 * @on Alive Requirement
 * @off No Requirement
 * @desc Do actors have to be alive to receive Skill Points from
 * defeated enemies?
 * @default true
 *
 * @param Victory
 *
 * @param ShowVictory:eval
 * @text Show During Victory?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show how much SP an actor has earned in battle during the
 * victory phase?
 * @default false
 *
 * @param VictoryText:str
 * @text Victory Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Actor, %2 - Earned, %3 - Abbr, %4 - Full Text
 * @default %1 gains %2 %3!
 *
 * @param AftermathActorDisplay:eval
 * @text Aftermath Display?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Requires VisuMZ_3_VictoryAftermath. Show Skill Points as
 * the main acquired resource in the actor windows?
 * @default false
 *
 * @param AftermathText:str
 * @text Aftermath Text
 * @parent Victory
 * @desc For no Victory Aftermath, this is the text that appears.
 * %1 - Earned, %2 - Abbr, %3 - Full Text
 * @default +%1 %2
 *
 */
//=============================================================================

const _0x54880c=_0x1769;function _0x1769(_0x5e33d0,_0x182130){const _0x40ae91=_0x40ae();return _0x1769=function(_0x176952,_0x226b1a){_0x176952=_0x176952-0xa7;let _0x3362b0=_0x40ae91[_0x176952];return _0x3362b0;},_0x1769(_0x5e33d0,_0x182130);}(function(_0x2586a8,_0x370efa){const _0x5406be=_0x1769,_0x48f679=_0x2586a8();while(!![]){try{const _0x38f5d1=parseInt(_0x5406be(0x23e))/0x1*(parseInt(_0x5406be(0x244))/0x2)+parseInt(_0x5406be(0xf1))/0x3+parseInt(_0x5406be(0x183))/0x4*(parseInt(_0x5406be(0x26f))/0x5)+-parseInt(_0x5406be(0x275))/0x6*(-parseInt(_0x5406be(0x255))/0x7)+-parseInt(_0x5406be(0x29c))/0x8*(-parseInt(_0x5406be(0x2d2))/0x9)+-parseInt(_0x5406be(0x268))/0xa*(parseInt(_0x5406be(0x2b8))/0xb)+-parseInt(_0x5406be(0x136))/0xc;if(_0x38f5d1===_0x370efa)break;else _0x48f679['push'](_0x48f679['shift']());}catch(_0x19cab9){_0x48f679['push'](_0x48f679['shift']());}}}(_0x40ae,0x8af62));var label=_0x54880c(0x296),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x54880c(0xe8)](function(_0x4a4673){const _0x50d2ff=_0x54880c;return _0x4a4673[_0x50d2ff(0x193)]&&_0x4a4673[_0x50d2ff(0x295)][_0x50d2ff(0x152)]('['+label+']');})[0x0];VisuMZ[label][_0x54880c(0x156)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x54880c(0x241)]=function(_0x19fbc6,_0x2d5ac4){const _0x19e877=_0x54880c;for(const _0x46809c in _0x2d5ac4){if(_0x46809c[_0x19e877(0x251)](/(.*):(.*)/i)){const _0x1e3c4c=String(RegExp['$1']),_0xe01068=String(RegExp['$2'])['toUpperCase']()[_0x19e877(0x110)]();let _0x22d99e,_0x546399,_0x10f80a;switch(_0xe01068){case _0x19e877(0xd0):_0x22d99e=_0x2d5ac4[_0x46809c]!==''?Number(_0x2d5ac4[_0x46809c]):0x0;break;case _0x19e877(0x249):_0x546399=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):[],_0x22d99e=_0x546399['map'](_0x13b164=>Number(_0x13b164));break;case _0x19e877(0x2c9):_0x22d99e=_0x2d5ac4[_0x46809c]!==''?eval(_0x2d5ac4[_0x46809c]):null;break;case'ARRAYEVAL':_0x546399=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):[],_0x22d99e=_0x546399['map'](_0x4630f5=>eval(_0x4630f5));break;case _0x19e877(0x277):_0x22d99e=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):'';break;case _0x19e877(0x1bf):_0x546399=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):[],_0x22d99e=_0x546399[_0x19e877(0x216)](_0x1acfd7=>JSON[_0x19e877(0x16e)](_0x1acfd7));break;case _0x19e877(0x1f8):_0x22d99e=_0x2d5ac4[_0x46809c]!==''?new Function(JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c])):new Function(_0x19e877(0x16b));break;case'ARRAYFUNC':_0x546399=_0x2d5ac4[_0x46809c]!==''?JSON['parse'](_0x2d5ac4[_0x46809c]):[],_0x22d99e=_0x546399[_0x19e877(0x216)](_0x3ff774=>new Function(JSON['parse'](_0x3ff774)));break;case'STR':_0x22d99e=_0x2d5ac4[_0x46809c]!==''?String(_0x2d5ac4[_0x46809c]):'';break;case'ARRAYSTR':_0x546399=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):[],_0x22d99e=_0x546399[_0x19e877(0x216)](_0x251b97=>String(_0x251b97));break;case _0x19e877(0x11e):_0x10f80a=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):{},_0x22d99e=VisuMZ[_0x19e877(0x241)]({},_0x10f80a);break;case'ARRAYSTRUCT':_0x546399=_0x2d5ac4[_0x46809c]!==''?JSON[_0x19e877(0x16e)](_0x2d5ac4[_0x46809c]):[],_0x22d99e=_0x546399[_0x19e877(0x216)](_0x365de8=>VisuMZ[_0x19e877(0x241)]({},JSON[_0x19e877(0x16e)](_0x365de8)));break;default:continue;}_0x19fbc6[_0x1e3c4c]=_0x22d99e;}}return _0x19fbc6;},(_0x177619=>{const _0x204025=_0x54880c,_0x24e943=_0x177619['name'];for(const _0x3a34aa of dependencies){if(!Imported[_0x3a34aa]){alert(_0x204025(0x188)['format'](_0x24e943,_0x3a34aa)),SceneManager['exit']();break;}}const _0x234989=_0x177619[_0x204025(0x295)];if(_0x234989[_0x204025(0x251)](/\[Version[ ](.*?)\]/i)){const _0x491a40=Number(RegExp['$1']);_0x491a40!==VisuMZ[label][_0x204025(0x218)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x24e943,_0x491a40)),SceneManager[_0x204025(0x1c9)]());}if(_0x234989[_0x204025(0x251)](/\[Tier[ ](\d+)\]/i)){const _0x1f173f=Number(RegExp['$1']);_0x1f173f<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x204025(0x2ca)](_0x24e943,_0x1f173f,tier)),SceneManager['exit']()):tier=Math[_0x204025(0x27f)](_0x1f173f,tier);}VisuMZ[_0x204025(0x241)](VisuMZ[label][_0x204025(0x156)],_0x177619[_0x204025(0x1e1)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],_0x54880c(0x2a0),_0x3c80c7=>{const _0x985910=_0x54880c;VisuMZ[_0x985910(0x241)](_0x3c80c7,_0x3c80c7);const _0x2b2023=_0x3c80c7[_0x985910(0xd8)][_0x985910(0x216)](_0x4b892e=>$gameActors[_0x985910(0x1e9)](_0x4b892e)),_0x3b7ea6=_0x3c80c7[_0x985910(0x2c4)],_0xfa7704=_0x3c80c7[_0x985910(0x236)];for(const _0x4c72e7 of _0x2b2023){if(!_0x4c72e7)continue;for(const _0x55f0a3 of _0x3b7ea6){_0x4c72e7[_0x985910(0x263)](_0xfa7704,_0x55f0a3);}}}),PluginManager[_0x54880c(0x12c)](pluginData['name'],'AbilityPointsAdd',_0x3a096e=>{const _0x2f5c32=_0x54880c;VisuMZ[_0x2f5c32(0x241)](_0x3a096e,_0x3a096e);const _0x4e94d0=_0x3a096e[_0x2f5c32(0xd8)][_0x2f5c32(0x216)](_0x474de8=>$gameActors[_0x2f5c32(0x1e9)](_0x474de8)),_0xf9ccd4=_0x3a096e[_0x2f5c32(0x2c4)],_0x512f23=_0x3a096e['Points'];for(const _0x53cd5c of _0x4e94d0){if(!_0x53cd5c)continue;for(const _0x16084c of _0xf9ccd4){_0x53cd5c['addAbilityPoints'](_0x512f23,_0x16084c);}}}),PluginManager['registerCommand'](pluginData[_0x54880c(0x271)],'AbilityPointsLose',_0x30fb57=>{const _0x4de3cf=_0x54880c;VisuMZ['ConvertParams'](_0x30fb57,_0x30fb57);const _0x227c87=_0x30fb57['Actors'][_0x4de3cf(0x216)](_0x537eb8=>$gameActors[_0x4de3cf(0x1e9)](_0x537eb8)),_0x301ad4=_0x30fb57[_0x4de3cf(0x2c4)],_0x36bcbe=_0x30fb57[_0x4de3cf(0x236)];for(const _0x22f393 of _0x227c87){if(!_0x22f393)continue;for(const _0x288356 of _0x301ad4){_0x22f393[_0x4de3cf(0x2ab)](_0x36bcbe,_0x288356);}}}),PluginManager['registerCommand'](pluginData[_0x54880c(0x271)],_0x54880c(0x1ac),_0x2a5ba9=>{const _0x5906b8=_0x54880c;VisuMZ['ConvertParams'](_0x2a5ba9,_0x2a5ba9);const _0xf0bb86=_0x2a5ba9[_0x5906b8(0xd8)]['map'](_0x2859ed=>$gameActors[_0x5906b8(0x1e9)](_0x2859ed)),_0x15ff73=_0x2a5ba9[_0x5906b8(0x2c4)],_0x3852dc=_0x2a5ba9[_0x5906b8(0x236)];for(const _0x14781b of _0xf0bb86){if(!_0x14781b)continue;for(const _0x242631 of _0x15ff73){_0x14781b[_0x5906b8(0x1e4)](_0x3852dc,_0x242631);}}}),PluginManager[_0x54880c(0x12c)](pluginData[_0x54880c(0x271)],_0x54880c(0x281),_0x50bc37=>{const _0x2bdcbf=_0x54880c;VisuMZ[_0x2bdcbf(0x241)](_0x50bc37,_0x50bc37);const _0x1cc0b3=_0x50bc37[_0x2bdcbf(0xd8)]['map'](_0x547df6=>$gameActors['actor'](_0x547df6)),_0x2f17f7=_0x50bc37[_0x2bdcbf(0x2c4)],_0x210658=_0x50bc37['Points'];for(const _0x136dce of _0x1cc0b3){if(!_0x136dce)continue;for(const _0x26bbd8 of _0x2f17f7){_0x136dce[_0x2bdcbf(0x1c5)](_0x210658,_0x26bbd8);}}}),PluginManager['registerCommand'](pluginData[_0x54880c(0x271)],_0x54880c(0x15e),_0x5bb398=>{const _0x55611d=_0x54880c;VisuMZ[_0x55611d(0x241)](_0x5bb398,_0x5bb398);const _0x242941=_0x5bb398[_0x55611d(0xd8)][_0x55611d(0x216)](_0x54aa4e=>$gameActors[_0x55611d(0x1e9)](_0x54aa4e)),_0x214974=_0x5bb398['Classes'],_0x413854=_0x5bb398[_0x55611d(0x236)];for(const _0x503b78 of _0x242941){if(!_0x503b78)continue;for(const _0x48b8e5 of _0x214974){_0x503b78[_0x55611d(0x11f)](_0x413854,_0x48b8e5);}}}),PluginManager[_0x54880c(0x12c)](pluginData[_0x54880c(0x271)],_0x54880c(0x1f1),_0x2dcdfe=>{const _0x4079be=_0x54880c;VisuMZ[_0x4079be(0x241)](_0x2dcdfe,_0x2dcdfe);const _0x4162b3=_0x2dcdfe[_0x4079be(0xd8)][_0x4079be(0x216)](_0x24ec19=>$gameActors[_0x4079be(0x1e9)](_0x24ec19)),_0x1e5d6d=_0x2dcdfe[_0x4079be(0x2c4)],_0x4444c0=_0x2dcdfe[_0x4079be(0x236)];for(const _0x431da9 of _0x4162b3){if(!_0x431da9)continue;for(const _0x34dbe5 of _0x1e5d6d){_0x431da9[_0x4079be(0x15a)](_0x4444c0,_0x34dbe5);}}}),PluginManager[_0x54880c(0x12c)](pluginData['name'],_0x54880c(0x13a),_0x19883e=>{const _0x7326e9=_0x54880c;VisuMZ[_0x7326e9(0x241)](_0x19883e,_0x19883e);const _0x12a752=_0x19883e[_0x7326e9(0xd8)][_0x7326e9(0x216)](_0x4f7ee3=>$gameActors[_0x7326e9(0x1e9)](_0x4f7ee3)),_0x36c51b=_0x19883e[_0x7326e9(0x2c4)],_0x2fd3e9=_0x19883e[_0x7326e9(0x236)];for(const _0x561710 of _0x12a752){if(!_0x561710)continue;for(const _0x2649dd of _0x36c51b){_0x561710[_0x7326e9(0x12f)](_0x2fd3e9,_0x2649dd);}}}),PluginManager[_0x54880c(0x12c)](pluginData[_0x54880c(0x271)],'SystemShowSkillLearnSystemMenu',_0x49e2fe=>{const _0x5d0940=_0x54880c;VisuMZ['ConvertParams'](_0x49e2fe,_0x49e2fe),$gameSystem[_0x5d0940(0x1f6)](_0x49e2fe[_0x5d0940(0x132)]);}),VisuMZ[_0x54880c(0x296)]['RegExp']={'StartingAbilityPoints':/<STARTING (?:ABILITY POINTS|AP):[ ](.*)>/i,'StartClassAbilityPoints':/<CLASS (.*) STARTING (?:ABILITY POINTS|AP):[ ](.*)>/gi,'UserGainAbilityPoints':/<(?:ABILITY POINTS|AP|USER ABILITY POINTS|USER AP) GAIN:[ ](.*)>/i,'TargetGainAbilityPoints':/<TARGET (?:ABILITY POINTS|AP) GAIN:[ ](.*)>/i,'EnemyAbilityPoints':/<(?:ABILITY POINTS|AP):[ ](.*)>/i,'AbilityPointsRate':/<(?:ABILITY POINTS|AP) RATE:[ ](\d+)([%％])>/i,'StartingSkillPoints':/<STARTING (?:SKILL POINTS|SP):[ ](.*)>/i,'StartClassSkillPoints':/<CLASS (.*) STARTING (?:SKILL POINTS|SP):[ ](.*)>/gi,'UserGainSkillPoints':/<(?:SKILL POINTS|SP|USER SKILL POINTS|USER SP) GAIN:[ ](.*)>/i,'TargetGainSkillPoints':/<TARGET (?:SKILL POINTS|SP) GAIN:[ ](.*)>/i,'EnemySkillPoints':/<(?:SKILL POINTS|SP):[ ](.*)>/i,'SkillPointsRate':/<(?:SKILL POINTS|SP) RATE:[ ](\d+)([%％])>/i,'LearnSkillA':/<LEARN SKILL(?:|S):[ ](.*)>/gi,'LearnSkillB':/<LEARN SKILL(?:|S)>\s*([\s\S]*)\s*<\/LEARN SKILL(?:|S)>/i,'LearnSkillPassiveA':/<LEARN (?:SKILL |)PASSIVE(?:|S):[ ](.*)>/gi,'LearnSkillPassiveB':/<LEARN (?:SKILL |)PASSIVE(?:|S)>\s*([\s\S]*)\s*<\/LEARN (?:SKILL |)PASSIVE(?:|S)>/i,'LearnApCost':/<LEARN (?:ABILITY POINTS|AP) COST:[ ](\d+)>/i,'LearnCpCost':/<LEARN (?:CLASS POINTS|CP) COST:[ ](\d+)>/i,'LearnJpCost':/<LEARN (?:JOB POINTS|JP) COST:[ ](\d+)>/i,'LearnSpCost':/<LEARN (?:SKILL POINTS|SP) COST:[ ](\d+)>/i,'LearnItemCost':/<LEARN ITEM (.*) COST:[ ](\d+)>/gi,'LearnWeaponCost':/<LEARN WEAPON (.*) COST:[ ](\d+)>/gi,'LearnArmorCost':/<LEARN ARMOR (.*) COST:[ ](\d+)>/gi,'LearnGoldCost':/<LEARN GOLD COST:[ ](\d+)>/i,'LearnCostBatch':/<LEARN SKILL (?:COST|COSTS)>\s*([\s\S]*)\s*<\/LEARN SKILL (?:COST|COSTS)>/i,'LearnShowLevel':/<LEARN SHOW LEVEL:[ ](\d+)>/i,'LearnShowSkillsAll':/<LEARN SHOW (?:SKILL|SKILLS|ALL SKILL|ALL SKILLS):[ ](.*)>/i,'LearnShowSkillsAny':/<LEARN SHOW ANY (?:SKILL|SKILLS):[ ](.*)>/i,'LearnShowSwitchesAll':/<LEARN SHOW (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ](.*)>/i,'LearnShowSwitchesAny':/<LEARN SHOW ANY (?:SWITCH|SWITCHES):[ ](.*)>/i,'LearnReqLevel':/<LEARN REQUIRE LEVEL:[ ](\d+)>/i,'LearnReqSkillsAll':/<LEARN REQUIRE (?:SKILL|SKILLS|ALL SKILL|ALL SKILLS):[ ](.*)>/i,'LearnReqSkillsAny':/<LEARN REQUIRE ANY (?:SKILL|SKILLS):[ ](.*)>/i,'LearnReqSwitchesAll':/<LEARN REQUIRE (?:SWITCH|SWITCHES|ALL SWITCH|ALL SWITCHES):[ ](.*)>/i,'LearnReqSwitchesAny':/<LEARN REQUIRE ANY (?:SWITCH|SWITCHES):[ ](.*)>/i,'animationIDs':/<LEARN SKILL (?:ANIMATION|ANIMATIONS|ANI):[ ](.*)>/i,'opacitySpeed':/<LEARN SKILL FADE SPEED:[ ](\d+)>/i,'learnPicture':/<LEARN SKILL (?:PICTURE|FILENAME):[ ](.*)>/i,'bigPicture':/<PICTURE:[ ](.*)>/i,'jsLearnApCost':/<JS LEARN (?:ABILITY POINTS|AP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:ABILITY POINTS|AP) COST>/i,'jsLearnCpCost':/<JS LEARN (?:CLASS POINTS|CP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:CLASS POINTS|CP) COST>/i,'jsLearnJpCost':/<JS LEARN (?:JOB POINTS|JP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:JOB POINTS|JP) COST>/i,'jsLearnSpCost':/<JS LEARN (?:SKILL POINTS|SP) COST>\s*([\s\S]*)\s*<\/JS LEARN (?:SKILL POINTS|SP) COST>/i,'jsLearnShow':/<JS LEARN (?:SHOW|VISIBLE)>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE)>/i,'jsLearnShowListTxt':/<JS LEARN (?:SHOW|VISIBLE) LIST TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE) LIST TEXT>/i,'jsLearnShowDetailTxt':/<JS LEARN (?:SHOW|VISIBLE) DETAIL TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:SHOW|VISIBLE) DETAIL TEXT>/i,'jsLearnReq':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS)>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS)>/i,'jsLearnReqListTxt':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS) LIST TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS) LIST TEXT>/i,'jsLearnReqDetailTxt':/<JS LEARN (?:REQUIREMENT|REQUIREMENTS) DETAIL TEXT>\s*([\s\S]*)\s*<\/JS LEARN (?:REQUIREMENT|REQUIREMENTS) DETAIL TEXT>/i,'jsOnLearn':/<JS ON LEARN SKILL>\s*([\s\S]*)\s*<\/JS ON LEARN SKILL>/i},VisuMZ[_0x54880c(0x296)][_0x54880c(0x20b)]=Scene_Boot[_0x54880c(0xf9)][_0x54880c(0x19c)],Scene_Boot[_0x54880c(0xf9)][_0x54880c(0x19c)]=function(){const _0x1537f1=_0x54880c;VisuMZ[_0x1537f1(0x296)][_0x1537f1(0x20b)][_0x1537f1(0x2b0)](this),this['process_VisuMZ_SkillLearnSystem_Notetags']();},Scene_Boot[_0x54880c(0xf9)][_0x54880c(0x288)]=function(){const _0x41f563=_0x54880c;if(VisuMZ['ParseAllNotetags'])return;this[_0x41f563(0x1fc)]();},VisuMZ[_0x54880c(0x296)]['JS']={},Scene_Boot[_0x54880c(0xf9)]['process_VisuMZ_SkillLearnSystem_JS']=function(){const _0x472b93=_0x54880c,_0x5a3913=$dataActors[_0x472b93(0x187)]($dataSkills);for(const _0x569943 of _0x5a3913){if(!_0x569943)continue;VisuMZ[_0x472b93(0x296)][_0x472b93(0x117)](_0x569943);}},VisuMZ[_0x54880c(0x296)][_0x54880c(0x2cd)]=VisuMZ[_0x54880c(0x2cd)],VisuMZ['ParseSkillNotetags']=function(_0x1ab1f2){const _0x2763f3=_0x54880c;VisuMZ[_0x2763f3(0x296)]['ParseSkillNotetags'][_0x2763f3(0x2b0)](this,_0x1ab1f2),VisuMZ[_0x2763f3(0x296)][_0x2763f3(0x117)](_0x1ab1f2);},VisuMZ[_0x54880c(0x296)][_0x54880c(0x117)]=function(_0x4c5270){const _0x98c732=_0x54880c,_0x2ef912=VisuMZ['SkillLearnSystem'][_0x98c732(0x25f)];VisuMZ[_0x98c732(0x296)][_0x98c732(0xb6)](_0x4c5270,_0x98c732(0x177),_0x2ef912['jsLearnApCost']),VisuMZ['SkillLearnSystem'][_0x98c732(0xb6)](_0x4c5270,_0x98c732(0x151),_0x2ef912[_0x98c732(0x151)]),VisuMZ['SkillLearnSystem'][_0x98c732(0xb6)](_0x4c5270,'jsLearnJpCost',_0x2ef912[_0x98c732(0x19a)]),VisuMZ[_0x98c732(0x296)][_0x98c732(0xb6)](_0x4c5270,_0x98c732(0xef),_0x2ef912['jsLearnSpCost']),VisuMZ[_0x98c732(0x296)][_0x98c732(0x260)](_0x4c5270,'jsLearnShow',_0x2ef912['jsLearnShow']),VisuMZ['SkillLearnSystem'][_0x98c732(0x1fe)](_0x4c5270,'jsLearnReq',_0x2ef912[_0x98c732(0xb7)]),VisuMZ[_0x98c732(0x296)][_0x98c732(0x291)](_0x4c5270,'jsLearnShowListTxt',_0x2ef912['jsLearnShowListTxt']),VisuMZ[_0x98c732(0x296)][_0x98c732(0x291)](_0x4c5270,'jsLearnShowDetailTxt',_0x2ef912['jsLearnShowDetailTxt']),VisuMZ[_0x98c732(0x296)]['createTextJS'](_0x4c5270,_0x98c732(0xdf),_0x2ef912['jsLearnReqListTxt']),VisuMZ[_0x98c732(0x296)][_0x98c732(0x291)](_0x4c5270,_0x98c732(0x13b),_0x2ef912[_0x98c732(0x13b)]),VisuMZ[_0x98c732(0x296)][_0x98c732(0x26e)](_0x4c5270,'jsOnLearn',_0x2ef912['jsOnLearn']);},VisuMZ['SkillLearnSystem'][_0x54880c(0xb6)]=function(_0x5d1a0a,_0x47f8f9,_0x5a2b04){const _0x14aaaf=_0x54880c,_0x147167=_0x5d1a0a['note'];if(_0x147167[_0x14aaaf(0x251)](_0x5a2b04)){const _0x24a40a=String(RegExp['$1']),_0x3986f8=_0x14aaaf(0x12b)[_0x14aaaf(0x2ca)](_0x24a40a),_0x421d43=VisuMZ[_0x14aaaf(0x296)][_0x14aaaf(0xe4)](_0x5d1a0a,_0x47f8f9);VisuMZ['SkillLearnSystem']['JS'][_0x421d43]=new Function(_0x3986f8);}},VisuMZ[_0x54880c(0x296)][_0x54880c(0x260)]=function(_0x3c79cf,_0x485ee5,_0x593981){const _0x499c60=_0x54880c,_0x1920a6=_0x3c79cf[_0x499c60(0x1e5)];if(_0x1920a6[_0x499c60(0x251)](_0x593981)){const _0x485989=String(RegExp['$1']),_0x4dde5b=_0x499c60(0x1d4)[_0x499c60(0x2ca)](_0x485989),_0x1fac9f=VisuMZ[_0x499c60(0x296)][_0x499c60(0xe4)](_0x3c79cf,_0x485ee5);VisuMZ[_0x499c60(0x296)]['JS'][_0x1fac9f]=new Function(_0x4dde5b);}},VisuMZ[_0x54880c(0x296)][_0x54880c(0x1fe)]=function(_0x4e25ef,_0x2c13c2,_0x889234){const _0x4c203f=_0x54880c,_0x406002=_0x4e25ef[_0x4c203f(0x1e5)];if(_0x406002[_0x4c203f(0x251)](_0x889234)){const _0x418537=String(RegExp['$1']),_0x4250c3=_0x4c203f(0x23b)[_0x4c203f(0x2ca)](_0x418537),_0x22b911=VisuMZ['SkillLearnSystem'][_0x4c203f(0xe4)](_0x4e25ef,_0x2c13c2);VisuMZ['SkillLearnSystem']['JS'][_0x22b911]=new Function(_0x4250c3);}},VisuMZ['SkillLearnSystem']['createTextJS']=function(_0x4e9cdd,_0x59d52b,_0x19355a){const _0x34451f=_0x54880c,_0x1e2340=_0x4e9cdd[_0x34451f(0x1e5)];if(_0x1e2340[_0x34451f(0x251)](_0x19355a)){const _0x4843dc=String(RegExp['$1']),_0x1a5710='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20text\x20=\x20\x27\x27;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Text\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20text;\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x34451f(0x2ca)](_0x4843dc),_0x45b6b0=VisuMZ['SkillLearnSystem'][_0x34451f(0xe4)](_0x4e9cdd,_0x59d52b);VisuMZ[_0x34451f(0x296)]['JS'][_0x45b6b0]=new Function(_0x1a5710);}},VisuMZ[_0x54880c(0x296)][_0x54880c(0x26e)]=function(_0x5e634e,_0x5f4153,_0x307228){const _0x4586d8=_0x54880c,_0x24e7eb=_0x5e634e[_0x4586d8(0x1e5)];if(_0x24e7eb['match'](_0x307228)){const _0x3d218a=String(RegExp['$1']),_0x4ae660='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20'[_0x4586d8(0x2ca)](_0x3d218a),_0x5d576f=VisuMZ['SkillLearnSystem'][_0x4586d8(0xe4)](_0x5e634e,_0x5f4153);VisuMZ[_0x4586d8(0x296)]['JS'][_0x5d576f]=new Function(_0x4ae660);}},VisuMZ[_0x54880c(0x296)][_0x54880c(0xe4)]=function(_0xee7b76,_0x4794d8){const _0x421353=_0x54880c;if(VisuMZ['createKeyJS'])return VisuMZ[_0x421353(0xe4)](_0xee7b76,_0x4794d8);let _0x111fac='';if($dataActors['includes'](_0xee7b76))_0x111fac='Actor-%1-%2'['format'](_0xee7b76['id'],_0x4794d8);if($dataClasses[_0x421353(0x152)](_0xee7b76))_0x111fac='Class-%1-%2'[_0x421353(0x2ca)](_0xee7b76['id'],_0x4794d8);if($dataSkills[_0x421353(0x152)](_0xee7b76))_0x111fac='Skill-%1-%2'[_0x421353(0x2ca)](_0xee7b76['id'],_0x4794d8);if($dataItems[_0x421353(0x152)](_0xee7b76))_0x111fac=_0x421353(0x222)['format'](_0xee7b76['id'],_0x4794d8);if($dataWeapons['includes'](_0xee7b76))_0x111fac='Weapon-%1-%2'['format'](_0xee7b76['id'],_0x4794d8);if($dataArmors[_0x421353(0x152)](_0xee7b76))_0x111fac=_0x421353(0x130)['format'](_0xee7b76['id'],_0x4794d8);if($dataEnemies['includes'](_0xee7b76))_0x111fac=_0x421353(0xbb)['format'](_0xee7b76['id'],_0x4794d8);if($dataStates[_0x421353(0x152)](_0xee7b76))_0x111fac=_0x421353(0x18f)[_0x421353(0x2ca)](_0xee7b76['id'],_0x4794d8);return _0x111fac;},DataManager[_0x54880c(0xbf)]=function(_0x4fecec){const _0x2cef6d=_0x54880c;if(!_0x4fecec)return![];return _0x4fecec[_0x2cef6d(0x1b5)]!==undefined&&_0x4fecec[_0x2cef6d(0x1cd)]!==undefined;},DataManager[_0x54880c(0x10d)]=function(_0x172bfd){const _0xa65e00=_0x54880c;_0x172bfd=_0x172bfd[_0xa65e00(0x16f)]()[_0xa65e00(0x110)](),this[_0xa65e00(0x10c)]=this[_0xa65e00(0x10c)]||{};if(this[_0xa65e00(0x10c)][_0x172bfd])return this['_classIDs'][_0x172bfd];for(const _0x1d549a of $dataClasses){if(!_0x1d549a)continue;let _0x2472c0=_0x1d549a[_0xa65e00(0x271)];_0x2472c0=_0x2472c0['replace'](/\x1I\[(\d+)\]/gi,''),_0x2472c0=_0x2472c0['replace'](/\\I\[(\d+)\]/gi,''),this[_0xa65e00(0x10c)][_0x2472c0[_0xa65e00(0x16f)]()[_0xa65e00(0x110)]()]=_0x1d549a['id'];}return this[_0xa65e00(0x10c)][_0x172bfd]||0x0;},DataManager[_0x54880c(0x174)]=function(_0x54c33c){const _0x5a9e39=_0x54880c;_0x54c33c=_0x54c33c['toUpperCase']()[_0x5a9e39(0x110)](),this[_0x5a9e39(0x2d1)]=this[_0x5a9e39(0x2d1)]||{};if(this[_0x5a9e39(0x2d1)][_0x54c33c])return this[_0x5a9e39(0x2d1)][_0x54c33c];for(const _0x8cce4b of $dataSkills){if(!_0x8cce4b)continue;this[_0x5a9e39(0x2d1)][_0x8cce4b['name'][_0x5a9e39(0x16f)]()[_0x5a9e39(0x110)]()]=_0x8cce4b['id'];}return this[_0x5a9e39(0x2d1)][_0x54c33c]||0x0;},DataManager[_0x54880c(0x213)]=function(_0x1f50b5){const _0x1f363e=_0x54880c;_0x1f50b5=_0x1f50b5[_0x1f363e(0x16f)]()[_0x1f363e(0x110)](),this['_itemIDs']=this['_itemIDs']||{};if(this[_0x1f363e(0xba)][_0x1f50b5])return this[_0x1f363e(0xba)][_0x1f50b5];for(const _0x18fe38 of $dataItems){if(!_0x18fe38)continue;this['_itemIDs'][_0x18fe38['name']['toUpperCase']()[_0x1f363e(0x110)]()]=_0x18fe38['id'];}return this[_0x1f363e(0xba)][_0x1f50b5]||0x0;},DataManager['getWeaponIdWithName']=function(_0x1ee6dd){const _0x1185b0=_0x54880c;_0x1ee6dd=_0x1ee6dd[_0x1185b0(0x16f)]()[_0x1185b0(0x110)](),this['_weaponIDs']=this[_0x1185b0(0x18c)]||{};if(this[_0x1185b0(0x18c)][_0x1ee6dd])return this[_0x1185b0(0x18c)][_0x1ee6dd];for(const _0x4e33d4 of $dataWeapons){if(!_0x4e33d4)continue;this['_weaponIDs'][_0x4e33d4[_0x1185b0(0x271)][_0x1185b0(0x16f)]()['trim']()]=_0x4e33d4['id'];}return this[_0x1185b0(0x18c)][_0x1ee6dd]||0x0;},DataManager[_0x54880c(0x22e)]=function(_0x22eac4){const _0x5a91c7=_0x54880c;_0x22eac4=_0x22eac4[_0x5a91c7(0x16f)]()[_0x5a91c7(0x110)](),this[_0x5a91c7(0x29e)]=this['_armorIDs']||{};if(this['_armorIDs'][_0x22eac4])return this[_0x5a91c7(0x29e)][_0x22eac4];for(const _0x35df6f of $dataArmors){if(!_0x35df6f)continue;this['_armorIDs'][_0x35df6f[_0x5a91c7(0x271)][_0x5a91c7(0x16f)]()[_0x5a91c7(0x110)]()]=_0x35df6f['id'];}return this[_0x5a91c7(0x29e)][_0x22eac4]||0x0;},DataManager['getSkillLearnSkillsFromClass']=function(_0x44befc){const _0xa624b9=_0x54880c;if(!$dataClasses[_0x44befc])return[];const _0x4c5a3e=[],_0x43e74b=$dataClasses[_0x44befc][_0xa624b9(0x1e5)],_0x4068d5=VisuMZ['SkillLearnSystem'][_0xa624b9(0x25f)],_0x35d514=_0x43e74b['match'](_0x4068d5[_0xa624b9(0xc9)]);if(_0x35d514)for(const _0x4ae64f of _0x35d514){if(!_0x4ae64f)continue;_0x4ae64f[_0xa624b9(0x251)](_0x4068d5['LearnSkillA']);const _0x4ed420=String(RegExp['$1'])['split'](',')[_0xa624b9(0x216)](_0x2fbb0d=>_0x2fbb0d[_0xa624b9(0x110)]());;for(let _0x28eec4 of _0x4ed420){_0x28eec4=(String(_0x28eec4)||'')['trim']();if(_0x28eec4[_0xa624b9(0x251)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x129e20=Math['min'](Number(RegExp['$1']),Number(RegExp['$2'])),_0xed83d6=Math[_0xa624b9(0x27f)](Number(RegExp['$1']),Number(RegExp['$2']));for(let _0x48cfd3=_0x129e20;_0x48cfd3<=_0xed83d6;_0x48cfd3++)_0x4c5a3e['push'](_0x48cfd3);continue;}_0x28eec4=(String(_0x28eec4)||'')[_0xa624b9(0x110)]();const _0x96f9bf=/^\d+$/[_0xa624b9(0x15d)](_0x28eec4);_0x96f9bf?_0x4c5a3e[_0xa624b9(0x2c0)](Number(_0x28eec4)):_0x4c5a3e[_0xa624b9(0x2c0)](DataManager[_0xa624b9(0x174)](_0x28eec4));}}const _0x2ce6de=_0x43e74b['match'](_0x4068d5[_0xa624b9(0x2aa)]);if(_0x2ce6de)for(const _0x1a53be of _0x2ce6de){if(!_0x1a53be)continue;_0x1a53be[_0xa624b9(0x251)](_0x4068d5['LearnSkillB']);const _0x41bc6d=String(RegExp['$1'])['split'](/[\r\n]+/);for(let _0x150b90 of _0x41bc6d){_0x150b90=(String(_0x150b90)||'')[_0xa624b9(0x110)]();if(_0x150b90[_0xa624b9(0x251)](/(\d+)[ ](?:THROUGH|to)[ ](\d+)/i)){const _0x40d97c=Math[_0xa624b9(0x1ca)](Number(RegExp['$1']),Number(RegExp['$2'])),_0x379f92=Math['max'](Number(RegExp['$1']),Number(RegExp['$2']));for(let _0x4861df=_0x40d97c;_0x4861df<=_0x379f92;_0x4861df++)_0x4c5a3e[_0xa624b9(0x2c0)](_0x4861df);continue;}const _0x1fd4a3=/^\d+$/[_0xa624b9(0x15d)](_0x150b90);_0x1fd4a3?_0x4c5a3e[_0xa624b9(0x2c0)](Number(_0x150b90)):_0x4c5a3e[_0xa624b9(0x2c0)](DataManager[_0xa624b9(0x174)](_0x150b90));}}return _0x4c5a3e[_0xa624b9(0x282)]((_0x215122,_0x31ac59)=>_0x215122-_0x31ac59),VisuMZ[_0xa624b9(0x10a)]['SortByIDandPriorityUsingIDs']&&VisuMZ['SkillsStatesCore'][_0xa624b9(0xf3)](_0x4c5a3e),_0x4c5a3e[_0xa624b9(0xe8)](_0x489f82=>$dataSkills[_0x489f82]&&$dataSkills[_0x489f82][_0xa624b9(0x271)][_0xa624b9(0x110)]()!=='')[_0xa624b9(0xe8)]((_0x3957f2,_0x3b0c9d,_0x112582)=>_0x112582[_0xa624b9(0x141)](_0x3957f2)===_0x3b0c9d);},DataManager['getSkillLearnAbilityPointCost']=function(_0x33755c){const _0x1024f9=_0x54880c;if(!_0x33755c)return 0x0;if(!DataManager[_0x1024f9(0x15f)](_0x33755c)&&!DataManager[_0x1024f9(0xbf)](_0x33755c))return 0x0;const _0x426e0c=VisuMZ['SkillLearnSystem'][_0x1024f9(0x25f)],_0x4f3732=_0x33755c[_0x1024f9(0x1e5)];if(_0x4f3732[_0x1024f9(0x251)](_0x426e0c['LearnApCost']))return Number(RegExp['$1']);if(_0x4f3732[_0x1024f9(0x251)](_0x426e0c[_0x1024f9(0x173)])){const _0x22ad6f=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x2d6020 of _0x22ad6f){if(_0x2d6020[_0x1024f9(0x251)](/(?:ABILITY POINTS|AP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x583018=VisuMZ[_0x1024f9(0x296)][_0x1024f9(0xe4)](_0x33755c,_0x1024f9(0x177));if(VisuMZ[_0x1024f9(0x296)]['JS'][_0x583018]){const _0x1c5f45=SceneManager[_0x1024f9(0x264)][_0x1024f9(0xb2)]();return VisuMZ[_0x1024f9(0x296)]['JS'][_0x583018]['call'](this,_0x1c5f45,_0x33755c);}return VisuMZ['SkillLearnSystem']['Settings'][_0x1024f9(0x298)]['DefaultCost']||0x0;},DataManager['getSkillLearnClassPointCost']=function(_0x515e03){const _0x58cfcb=_0x54880c;if(!_0x515e03)return 0x0;if(!DataManager[_0x58cfcb(0x15f)](_0x515e03)&&!DataManager[_0x58cfcb(0xbf)](_0x515e03))return 0x0;const _0x1fe80b=VisuMZ[_0x58cfcb(0x296)]['RegExp'],_0x52f282=_0x515e03[_0x58cfcb(0x1e5)];if(_0x52f282[_0x58cfcb(0x251)](_0x1fe80b[_0x58cfcb(0x124)]))return Number(RegExp['$1']);if(_0x52f282['match'](_0x1fe80b[_0x58cfcb(0x173)])){const _0x1a8d29=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x289e4d of _0x1a8d29){if(_0x289e4d['match'](/(?:CLASS POINTS|CP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x285f6f=VisuMZ[_0x58cfcb(0x296)][_0x58cfcb(0xe4)](_0x515e03,_0x58cfcb(0x151));if(VisuMZ[_0x58cfcb(0x296)]['JS'][_0x285f6f]){const _0x263026=SceneManager[_0x58cfcb(0x264)][_0x58cfcb(0xb2)]();return VisuMZ[_0x58cfcb(0x296)]['JS'][_0x285f6f][_0x58cfcb(0x2b0)](this,_0x263026,_0x515e03)||0x0;}return VisuMZ['ClassChangeSystem'][_0x58cfcb(0x156)][_0x58cfcb(0x17e)][_0x58cfcb(0x276)]||0x0;},DataManager[_0x54880c(0x16c)]=function(_0x3b54cc){const _0x3634c3=_0x54880c;if(!_0x3b54cc)return 0x0;if(!DataManager[_0x3634c3(0x15f)](_0x3b54cc)&&!DataManager['isState'](_0x3b54cc))return 0x0;const _0x2755eb=VisuMZ[_0x3634c3(0x296)][_0x3634c3(0x25f)],_0x54b1d3=_0x3b54cc[_0x3634c3(0x1e5)];if(_0x54b1d3['match'](_0x2755eb['LearnJpCost']))return Number(RegExp['$1']);if(_0x54b1d3[_0x3634c3(0x251)](_0x2755eb['LearnCostBatch'])){const _0x3d9016=String(RegExp['$1'])[_0x3634c3(0x1b0)](/[\r\n]+/);for(const _0x4cb3c5 of _0x3d9016){if(_0x4cb3c5[_0x3634c3(0x251)](/(?:JOB POINTS|JP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0xf20e25=VisuMZ['SkillLearnSystem'][_0x3634c3(0xe4)](_0x3b54cc,'jsLearnJpCost');if(VisuMZ['SkillLearnSystem']['JS'][_0xf20e25]){const _0x429f9a=SceneManager['_scene'][_0x3634c3(0xb2)]();return VisuMZ[_0x3634c3(0x296)]['JS'][_0xf20e25]['call'](this,_0x429f9a,_0x3b54cc);}return VisuMZ['ClassChangeSystem'][_0x3634c3(0x156)][_0x3634c3(0x1e2)][_0x3634c3(0x276)]||0x0;},DataManager[_0x54880c(0x23d)]=function(_0x7eada8){const _0x29e332=_0x54880c;if(!_0x7eada8)return 0x0;if(!DataManager[_0x29e332(0x15f)](_0x7eada8)&&!DataManager[_0x29e332(0xbf)](_0x7eada8))return 0x0;const _0x827072=VisuMZ[_0x29e332(0x296)]['RegExp'],_0x255d6a=_0x7eada8[_0x29e332(0x1e5)];if(_0x255d6a['match'](_0x827072['LearnSpCost']))return Number(RegExp['$1']);if(_0x255d6a[_0x29e332(0x251)](_0x827072[_0x29e332(0x173)])){const _0x974ff1=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x5603da of _0x974ff1){if(_0x5603da[_0x29e332(0x251)](/(?:SKILL POINTS|SP):[ ](\d+)/gi))return Number(RegExp['$1']);}}const _0x3d2e58=VisuMZ[_0x29e332(0x296)][_0x29e332(0xe4)](_0x7eada8,_0x29e332(0xef));if(VisuMZ['SkillLearnSystem']['JS'][_0x3d2e58]){const _0x22d8db=SceneManager['_scene']['user']();return VisuMZ['SkillLearnSystem']['JS'][_0x3d2e58][_0x29e332(0x2b0)](this,_0x22d8db,_0x7eada8);}return VisuMZ[_0x29e332(0x296)][_0x29e332(0x156)][_0x29e332(0x198)][_0x29e332(0x276)]||0x0;},DataManager[_0x54880c(0x1f4)]=function(_0x177748){const _0x3be6ee=_0x54880c;if(!_0x177748)return[];if(!DataManager['isSkill'](_0x177748)&&!DataManager[_0x3be6ee(0xbf)](_0x177748))return[];const _0x3a586d=VisuMZ[_0x3be6ee(0x296)][_0x3be6ee(0x25f)],_0x4040d4=_0x177748['note'],_0x3d57a0=[],_0x585462=_0x4040d4[_0x3be6ee(0x251)](_0x3a586d[_0x3be6ee(0x29b)]);if(_0x585462)for(const _0x466292 of _0x585462){if(!_0x466292)continue;_0x466292['match'](_0x3a586d[_0x3be6ee(0x29b)]);const _0x141d8b=String(RegExp['$1']),_0x415732={'id':0x0,'quantity':Number(RegExp['$2'])},_0x44af93=/^\d+$/[_0x3be6ee(0x15d)](_0x141d8b);_0x44af93?_0x415732['id']=Number(_0x141d8b):_0x415732['id']=DataManager[_0x3be6ee(0x213)](_0x141d8b),_0x415732['id']>0x0&&_0x3d57a0[_0x3be6ee(0x2c0)](_0x415732);}if(_0x4040d4[_0x3be6ee(0x251)](_0x3a586d[_0x3be6ee(0x173)])){const _0x1b78cb=String(RegExp['$1'])[_0x3be6ee(0x1b0)](/[\r\n]+/);for(const _0x1e057e of _0x1b78cb){if(_0x1e057e[_0x3be6ee(0x251)](/ITEM[ ](.*):[ ](\d+)/gi)){const _0x11772f=String(RegExp['$1']),_0x45cc34={'id':0x0,'quantity':Number(RegExp['$2'])},_0x41e005=/^\d+$/[_0x3be6ee(0x15d)](_0x11772f);_0x41e005?_0x45cc34['id']=Number(_0x11772f):_0x45cc34['id']=DataManager[_0x3be6ee(0x213)](_0x11772f),_0x45cc34['id']>0x0&&_0x3d57a0['push'](_0x45cc34);}}}return _0x3d57a0;},DataManager['getSkillLearnWeaponCost']=function(_0x496a0d){const _0x2d8ee3=_0x54880c;if(!_0x496a0d)return[];if(!DataManager['isSkill'](_0x496a0d)&&!DataManager['isState'](_0x496a0d))return[];const _0x54e9c9=VisuMZ[_0x2d8ee3(0x296)][_0x2d8ee3(0x25f)],_0xa734dc=_0x496a0d[_0x2d8ee3(0x1e5)],_0x51c192=[],_0x512f55=_0xa734dc[_0x2d8ee3(0x251)](_0x54e9c9[_0x2d8ee3(0x284)]);if(_0x512f55)for(const _0x234779 of _0x512f55){if(!_0x234779)continue;_0x234779[_0x2d8ee3(0x251)](_0x54e9c9['LearnWeaponCost']);const _0x548c34=String(RegExp['$1']),_0x355b65={'id':0x0,'quantity':Number(RegExp['$2'])},_0x533fa2=/^\d+$/[_0x2d8ee3(0x15d)](_0x548c34);_0x533fa2?_0x355b65['id']=Number(_0x548c34):_0x355b65['id']=DataManager['getWeaponIdWithName'](_0x548c34),_0x355b65['id']>0x0&&_0x51c192[_0x2d8ee3(0x2c0)](_0x355b65);}if(_0xa734dc[_0x2d8ee3(0x251)](_0x54e9c9[_0x2d8ee3(0x173)])){const _0x58eaa8=String(RegExp['$1'])[_0x2d8ee3(0x1b0)](/[\r\n]+/);for(const _0x4704d7 of _0x58eaa8){if(_0x4704d7[_0x2d8ee3(0x251)](/WEAPON[ ](.*):[ ](\d+)/gi)){const _0x4143e0=String(RegExp['$1']),_0x314ed6={'id':0x0,'quantity':Number(RegExp['$2'])},_0x1c3a79=/^\d+$/[_0x2d8ee3(0x15d)](_0x4143e0);_0x1c3a79?_0x314ed6['id']=Number(_0x4143e0):_0x314ed6['id']=DataManager['getWeaponIdWithName'](_0x4143e0),_0x314ed6['id']>0x0&&_0x51c192[_0x2d8ee3(0x2c0)](_0x314ed6);}}}return _0x51c192;},DataManager[_0x54880c(0xed)]=function(_0xdddc85){const _0x3ee675=_0x54880c;if(!_0xdddc85)return[];if(!DataManager['isSkill'](_0xdddc85)&&!DataManager[_0x3ee675(0xbf)](_0xdddc85))return[];const _0x3bc07f=VisuMZ['SkillLearnSystem'][_0x3ee675(0x25f)],_0x3504af=_0xdddc85[_0x3ee675(0x1e5)],_0x4a306b=[],_0x1fe7a2=_0x3504af[_0x3ee675(0x251)](_0x3bc07f[_0x3ee675(0x107)]);if(_0x1fe7a2)for(const _0x4baf70 of _0x1fe7a2){if(!_0x4baf70)continue;_0x4baf70[_0x3ee675(0x251)](_0x3bc07f['LearnArmorCost']);const _0x3baf41=String(RegExp['$1']),_0x55c764={'id':0x0,'quantity':Number(RegExp['$2'])},_0x1708ca=/^\d+$/[_0x3ee675(0x15d)](_0x3baf41);_0x1708ca?_0x55c764['id']=Number(_0x3baf41):_0x55c764['id']=DataManager[_0x3ee675(0x22e)](_0x3baf41),_0x55c764['id']>0x0&&_0x4a306b[_0x3ee675(0x2c0)](_0x55c764);}if(_0x3504af[_0x3ee675(0x251)](_0x3bc07f[_0x3ee675(0x173)])){const _0x517ed2=String(RegExp['$1'])[_0x3ee675(0x1b0)](/[\r\n]+/);for(const _0x247e0d of _0x517ed2){if(_0x247e0d[_0x3ee675(0x251)](/ARMOR[ ](.*):[ ](\d+)/gi)){const _0xf350cc=String(RegExp['$1']),_0x885b01={'id':0x0,'quantity':Number(RegExp['$2'])},_0x223eb0=/^\d+$/[_0x3ee675(0x15d)](_0xf350cc);_0x223eb0?_0x885b01['id']=Number(_0xf350cc):_0x885b01['id']=DataManager[_0x3ee675(0x22e)](_0xf350cc),_0x885b01['id']>0x0&&_0x4a306b[_0x3ee675(0x2c0)](_0x885b01);}}}return _0x4a306b;},DataManager[_0x54880c(0x105)]=function(_0x2d101c){const _0x29495c=_0x54880c;if(!_0x2d101c)return 0x0;if(!DataManager['isSkill'](_0x2d101c)&&!DataManager['isState'](_0x2d101c))return 0x0;const _0x4ffc54=VisuMZ[_0x29495c(0x296)][_0x29495c(0x25f)],_0xc7bd97=_0x2d101c[_0x29495c(0x1e5)];if(_0xc7bd97[_0x29495c(0x251)](_0x4ffc54[_0x29495c(0xc2)]))return Number(RegExp['$1']);if(_0xc7bd97[_0x29495c(0x251)](_0x4ffc54['LearnCostBatch'])){const _0x1c4843=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x1f886c of _0x1c4843){if(_0x1f886c[_0x29495c(0x251)](/GOLD:[ ](\d+)/gi))return Number(RegExp['$1']);}}return 0x0;},TextManager[_0x54880c(0xe5)]=VisuMZ[_0x54880c(0x296)]['Settings']['MenuAccess'][_0x54880c(0x143)],ImageManager[_0x54880c(0x120)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)]['AbilityPoints'][_0x54880c(0x143)],ImageManager[_0x54880c(0x195)]=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)][_0x54880c(0x198)][_0x54880c(0x143)],SoundManager[_0x54880c(0x14b)]=function(){const _0x3358a9=_0x54880c;AudioManager[_0x3358a9(0xcb)](VisuMZ[_0x3358a9(0x296)][_0x3358a9(0x156)][_0x3358a9(0x165)]);},TextManager[_0x54880c(0x225)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)]['General']['Learned'],TextManager[_0x54880c(0x2c5)]=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)][_0x54880c(0xd6)]['RequireFmt'],TextManager[_0x54880c(0x154)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0xd6)][_0x54880c(0x28c)],TextManager['skillLearnReqLevelFmt']=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)]['General'][_0x54880c(0x1e0)],TextManager[_0x54880c(0x18a)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0xd6)][_0x54880c(0x229)],TextManager['skillLearnReqSwitchFmt']=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)]['General'][_0x54880c(0x109)],TextManager[_0x54880c(0x2cf)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0xd6)][_0x54880c(0x161)],TextManager['skillLearnItemFmt']=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0xd6)][_0x54880c(0x1a2)],TextManager['skillLearnWeaponFmt']=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0xd6)][_0x54880c(0x289)],TextManager[_0x54880c(0x148)]=VisuMZ[_0x54880c(0x296)]['Settings']['General'][_0x54880c(0x158)],TextManager[_0x54880c(0x2ad)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)]['General'][_0x54880c(0xe3)],TextManager['skillLearnCmd']=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x1e3)][_0x54880c(0x138)],TextManager[_0x54880c(0xb8)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x12a)]['RequirementTitle'],TextManager[_0x54880c(0x176)]=VisuMZ[_0x54880c(0x296)]['Settings'][_0x54880c(0x12a)][_0x54880c(0x266)],TextManager[_0x54880c(0x155)]=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0xbe)],TextManager['skillLearnReqListLevel']=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x1e0)],TextManager[_0x54880c(0x292)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x229)],TextManager[_0x54880c(0x1a9)]=VisuMZ['SkillLearnSystem']['Settings'][_0x54880c(0x12a)]['ReqSwitchFmt'],TextManager[_0x54880c(0x181)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x27a)],TextManager[_0x54880c(0xb5)]=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x1d3)],TextManager[_0x54880c(0x2b6)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x27b)],TextManager['skillLearningOwned']=VisuMZ[_0x54880c(0x296)]['Settings'][_0x54880c(0x12a)][_0x54880c(0x14f)],TextManager[_0x54880c(0x157)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x258)],TextManager[_0x54880c(0x102)]=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)][_0x54880c(0x12a)][_0x54880c(0x11a)],TextManager[_0x54880c(0xfd)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x298)][_0x54880c(0x261)],TextManager[_0x54880c(0x1cb)]=VisuMZ['SkillLearnSystem']['Settings'][_0x54880c(0x298)]['AbbrText'],TextManager['abilityPointsFmt']=VisuMZ[_0x54880c(0x296)]['Settings'][_0x54880c(0x298)]['TextFmt'],TextManager[_0x54880c(0x280)]=VisuMZ[_0x54880c(0x296)]['Settings'][_0x54880c(0x198)][_0x54880c(0x261)],TextManager['skillPointsAbbr']=VisuMZ['SkillLearnSystem'][_0x54880c(0x156)][_0x54880c(0x198)]['AbbrText'],TextManager[_0x54880c(0x1b9)]=VisuMZ[_0x54880c(0x296)]['Settings']['SkillPoints']['TextFmt'],TextManager[_0x54880c(0x164)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x198)][_0x54880c(0x10b)]??'%1',TextManager[_0x54880c(0x223)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)]['SkillPoints']['SeparateCollapseFmt']??'%1\x20[-]',TextManager[_0x54880c(0xca)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x198)][_0x54880c(0x144)]??_0x54880c(0x1d0),TextManager[_0x54880c(0x1b2)]=VisuMZ[_0x54880c(0x296)][_0x54880c(0x156)][_0x54880c(0x198)]['StypeCategoryColor']??'16',VisuMZ[_0x54880c(0x296)]['BattleManager_makeRewards']=BattleManager[_0x54880c(0xdb)],BattleManager['makeRewards']=function(){const _0x8f8ee9=_0x54880c;VisuMZ[_0x8f8ee9(0x296)][_0x8f8ee9(0x2b9)][_0x8f8ee9(0x2b0)](this),this[_0x8f8ee9(0x1f0)](),this['gainRewardsAbilityPoints'](),this[_0x8f8ee9(0x1ce)](),this[_0x8f8ee9(0x175)]();},VisuMZ['SkillLearnSystem']['BattleManager_displayRewards']=BattleManager['displayRewards'],BattleManager[_0x54880c(0x2a6)]=function(){const _0x406454=_0x54880c;VisuMZ[_0x406454(0x296)][_0x406454(0x219)][_0x406454(0x2b0)](this),this['displayRewardsAbilityPoints'](),this['displayRewardsSkillPoints']();},BattleManager[_0x54880c(0x1f0)]=function(){const _0x31dd64=_0x54880c;this[_0x31dd64(0xf4)][_0x31dd64(0x26b)]=$gameTroop[_0x31dd64(0x2a9)]();},BattleManager[_0x54880c(0x118)]=function(){const _0x5dbab9=_0x54880c;if(!this[_0x5dbab9(0x224)]())return;$gameMessage['newPage']();const _0x40d10d=$gameParty[_0x5dbab9(0x1ec)](),_0x35e1b7=VisuMZ['SkillLearnSystem'][_0x5dbab9(0x156)][_0x5dbab9(0x298)],_0x35c8a7=_0x35e1b7[_0x5dbab9(0x115)];for(const _0x297c6e of _0x40d10d){if(!_0x297c6e)continue;const _0x393de5=_0x35c8a7[_0x5dbab9(0x2ca)](_0x297c6e[_0x5dbab9(0x271)](),_0x297c6e['earnedAbilityPoints'](),TextManager['abilityPointsAbbr'],TextManager['abilityPointsFmt']);$gameMessage[_0x5dbab9(0x1f9)]('\x5c.'+_0x393de5);}},BattleManager[_0x54880c(0xd3)]=function(){const _0x269fba=_0x54880c;this[_0x269fba(0xf4)][_0x269fba(0x26b)]=this[_0x269fba(0xf4)][_0x269fba(0x26b)]||0x0;let _0x43fe6f=$gameParty[_0x269fba(0x26d)]();VisuMZ[_0x269fba(0x296)][_0x269fba(0x156)][_0x269fba(0x298)][_0x269fba(0x1d2)]&&(_0x43fe6f=_0x43fe6f[_0x269fba(0xe8)](_0x6e0e54=>_0x6e0e54[_0x269fba(0x147)]()));for(const _0x2f6bae of _0x43fe6f){if(!_0x2f6bae)continue;if(!$dataSystem[_0x269fba(0x168)]&&!_0x2f6bae['isBattleMember']())continue;_0x2f6bae[_0x269fba(0x263)](this['_rewards'][_0x269fba(0x26b)]),_0x2f6bae[_0x269fba(0x197)](this['_rewards'][_0x269fba(0x26b)]);}},BattleManager[_0x54880c(0x224)]=function(){const _0x551a1c=_0x54880c;return VisuMZ['SkillLearnSystem'][_0x551a1c(0x156)][_0x551a1c(0x298)][_0x551a1c(0x24f)];},BattleManager['makeRewardsSkillPoints']=function(){const _0x29e459=_0x54880c;this[_0x29e459(0xf4)][_0x29e459(0x22a)]=$gameTroop[_0x29e459(0x29a)]();},BattleManager[_0x54880c(0x203)]=function(){const _0x259f78=_0x54880c;if(!this[_0x259f78(0x1c0)]())return;$gameMessage[_0x259f78(0x237)]();const _0x4b1fe9=$gameParty[_0x259f78(0x1ec)](),_0x98ff4c=VisuMZ['SkillLearnSystem'][_0x259f78(0x156)]['SkillPoints'],_0x3b432d=_0x98ff4c[_0x259f78(0x115)];for(const _0x29bcb7 of _0x4b1fe9){if(!_0x29bcb7)continue;const _0x2252fb=_0x3b432d[_0x259f78(0x2ca)](_0x29bcb7[_0x259f78(0x271)](),_0x29bcb7['earnedSkillPoints'](),TextManager[_0x259f78(0x1ba)],TextManager[_0x259f78(0x1b9)]);$gameMessage[_0x259f78(0x1f9)]('\x5c.'+_0x2252fb);}},BattleManager[_0x54880c(0x175)]=function(){const _0x15f616=_0x54880c;this['_rewards']['skillPoints']=this[_0x15f616(0xf4)][_0x15f616(0x22a)]||0x0;let _0x10b7a7=$gameParty[_0x15f616(0x26d)]();VisuMZ[_0x15f616(0x296)][_0x15f616(0x156)][_0x15f616(0x198)]['AliveActors']&&(_0x10b7a7=_0x10b7a7[_0x15f616(0xe8)](_0x5c0ca0=>_0x5c0ca0['isAlive']()));for(const _0x4ed653 of _0x10b7a7){if(!_0x4ed653)continue;if(!$dataSystem[_0x15f616(0x168)]&&!_0x4ed653[_0x15f616(0x285)]())continue;_0x4ed653[_0x15f616(0x1c5)](this[_0x15f616(0xf4)][_0x15f616(0x22a)]),_0x4ed653['gainSkillPointsForMulticlasses'](this[_0x15f616(0xf4)][_0x15f616(0x22a)]);}},BattleManager['skillPointsVisible']=function(){const _0x2d30d9=_0x54880c;return VisuMZ[_0x2d30d9(0x296)][_0x2d30d9(0x156)][_0x2d30d9(0x198)][_0x2d30d9(0x24f)];},VisuMZ[_0x54880c(0x296)][_0x54880c(0x123)]=Game_System[_0x54880c(0xf9)]['initialize'],Game_System[_0x54880c(0xf9)]['initialize']=function(){const _0x4cc592=_0x54880c;VisuMZ['SkillLearnSystem'][_0x4cc592(0x123)]['call'](this),this[_0x4cc592(0x1c4)]();},Game_System['prototype'][_0x54880c(0x1c4)]=function(){const _0x459d5c=_0x54880c;this[_0x459d5c(0x1d5)]=VisuMZ['SkillLearnSystem']['Settings'][_0x459d5c(0x1e3)][_0x459d5c(0x19e)];},Game_System['prototype'][_0x54880c(0x211)]=function(){const _0x31f999=_0x54880c;return this['_SkillLearnSystem_MenuAccess']===undefined&&this['initSkillLearnSystemMenuAccess'](),this[_0x31f999(0x1d5)];},Game_System[_0x54880c(0xf9)][_0x54880c(0x1f6)]=function(_0x53839f){const _0x320b50=_0x54880c;this['_SkillLearnSystem_MenuAccess']===undefined&&this[_0x320b50(0x1c4)](),this['_SkillLearnSystem_MenuAccess']=_0x53839f;},VisuMZ[_0x54880c(0x296)][_0x54880c(0x273)]=Game_Action[_0x54880c(0xf9)][_0x54880c(0x256)],Game_Action['prototype'][_0x54880c(0x256)]=function(_0x51befd){const _0x15cb2d=_0x54880c;VisuMZ['SkillLearnSystem'][_0x15cb2d(0x273)][_0x15cb2d(0x2b0)](this,_0x51befd),this['applySkillLearnSystemUserEffect'](_0x51befd);},Game_Action['prototype']['applySkillLearnSystemUserEffect']=function(_0x1df2d9){const _0x58bf33=_0x54880c;if(this[_0x58bf33(0x2c6)]())this[_0x58bf33(0x1f3)](_0x1df2d9);},Game_Action['prototype']['applyItemSkillLearnSystemUserEffect']=function(_0x367ae6){const _0x141f84=_0x54880c,_0x2157a2=VisuMZ[_0x141f84(0x296)][_0x141f84(0x25f)],_0x1693e4=this[_0x141f84(0x2c6)]()[_0x141f84(0x1e5)];if($gameParty[_0x141f84(0x1ed)]()){if(this['subject']()[_0x141f84(0x1aa)]()&&_0x1693e4[_0x141f84(0x251)](_0x2157a2['UserGainAbilityPoints'])){const _0x1a18d0=eval(RegExp['$1']);this[_0x141f84(0xfe)]()[_0x141f84(0x263)](_0x1a18d0);}else this[_0x141f84(0x205)]();if(_0x367ae6[_0x141f84(0x1aa)]()&&_0x1693e4[_0x141f84(0x251)](_0x2157a2[_0x141f84(0xc5)])){const _0x22bf6d=eval(RegExp['$1']);_0x367ae6[_0x141f84(0x263)](_0x22bf6d);}}if($gameParty['inBattle']()){if(this[_0x141f84(0xfe)]()[_0x141f84(0x1aa)]()&&_0x1693e4['match'](_0x2157a2[_0x141f84(0xae)])){const _0x23ca6f=eval(RegExp['$1']);this[_0x141f84(0xfe)]()['gainSkillPoints'](_0x23ca6f);}else this[_0x141f84(0x180)]();if(_0x367ae6[_0x141f84(0x1aa)]()&&_0x1693e4[_0x141f84(0x251)](_0x2157a2[_0x141f84(0x12d)])){const _0x217273=eval(RegExp['$1']);_0x367ae6['gainSkillPoints'](_0x217273);}}if(_0x1693e4[_0x141f84(0x251)](/<NOTETAG>/i)){}},Game_Action[_0x54880c(0xf9)][_0x54880c(0x205)]=function(){const _0x219cdd=_0x54880c;if(!$gameParty[_0x219cdd(0x1ed)]())return;if(!this[_0x219cdd(0xfe)]()[_0x219cdd(0x1aa)]())return;const _0x2880c9=VisuMZ['SkillLearnSystem']['Settings'][_0x219cdd(0x298)];let _0x7fe3fb=0x0;try{_0x7fe3fb=eval(_0x2880c9[_0x219cdd(0x2ac)]);}catch(_0x96dc8c){if($gameTemp['isPlaytest']())console[_0x219cdd(0x12e)](_0x96dc8c);}this[_0x219cdd(0xfe)]()[_0x219cdd(0x263)](_0x7fe3fb);},Game_Action[_0x54880c(0xf9)][_0x54880c(0x180)]=function(){const _0x26f189=_0x54880c;if(!$gameParty[_0x26f189(0x1ed)]())return;if(!this[_0x26f189(0xfe)]()['isActor']())return;const _0x26166f=VisuMZ['SkillLearnSystem']['Settings'][_0x26f189(0x198)];let _0x34e459=0x0;try{_0x34e459=eval(_0x26166f[_0x26f189(0x2ac)]);}catch(_0x3ba469){if($gameTemp['isPlaytest']())console[_0x26f189(0x12e)](_0x3ba469);}this[_0x26f189(0xfe)]()[_0x26f189(0x1c5)](_0x34e459);},VisuMZ[_0x54880c(0x296)][_0x54880c(0x178)]=Game_Battler[_0x54880c(0xf9)][_0x54880c(0x226)],Game_Battler[_0x54880c(0xf9)][_0x54880c(0x226)]=function(_0x44686b){const _0x337257=_0x54880c;VisuMZ['SkillLearnSystem'][_0x337257(0x178)]['call'](this,_0x44686b),this['isActor']()&&(this[_0x337257(0x29d)]=this[_0x337257(0x15c)](),this['_earnedSkillPoints']=this['getSkillPoints']());},VisuMZ[_0x54880c(0x296)][_0x54880c(0x259)]=Game_Actor[_0x54880c(0xf9)]['setup'],Game_Actor[_0x54880c(0xf9)][_0x54880c(0x27c)]=function(_0x4e9fd5){const _0x2d3734=_0x54880c;VisuMZ['SkillLearnSystem'][_0x2d3734(0x259)]['call'](this,_0x4e9fd5),this['initAbilityPoints'](),this[_0x2d3734(0x1bc)](),this[_0x2d3734(0xe0)](),this[_0x2d3734(0x228)]();},VisuMZ[_0x54880c(0x296)][_0x54880c(0x1ef)]=Game_Actor[_0x54880c(0xf9)][_0x54880c(0x1f5)],Game_Actor[_0x54880c(0xf9)][_0x54880c(0x1f5)]=function(_0x42c36a,_0x28946d){const _0x377f53=_0x54880c;this[_0x377f53(0x220)]=!![],VisuMZ[_0x377f53(0x296)]['Game_Actor_changeClass'][_0x377f53(0x2b0)](this,_0x42c36a,_0x28946d),this[_0x377f53(0x220)]=undefined;},VisuMZ[_0x54880c(0x296)][_0x54880c(0x100)]=Game_Actor[_0x54880c(0xf9)]['levelUp'],Game_Actor[_0x54880c(0xf9)][_0x54880c(0x20a)]=function(){const _0x40c664=_0x54880c;VisuMZ[_0x40c664(0x296)][_0x40c664(0x100)][_0x40c664(0x2b0)](this),this[_0x40c664(0x283)](this[_0x40c664(0xcf)]()['id']),this[_0x40c664(0x104)](this[_0x40c664(0xcf)]()['id']);},Game_Actor['prototype'][_0x54880c(0x17d)]=function(){const _0xa3bb92=_0x54880c;this[_0xa3bb92(0x204)]={};},Game_Actor['prototype'][_0x54880c(0x1bc)]=function(){const _0x29fe06=_0x54880c,_0x35a80=VisuMZ[_0x29fe06(0x296)][_0x29fe06(0x25f)],_0x6ea348=this[_0x29fe06(0x1e9)]()[_0x29fe06(0x1e5)];if(_0x6ea348[_0x29fe06(0x251)](_0x35a80[_0x29fe06(0x125)])){const _0xff22d5=eval(RegExp['$1']);this[_0x29fe06(0x263)](_0xff22d5);}const _0x2d1958=VisuMZ[_0x29fe06(0x296)][_0x29fe06(0x156)][_0x29fe06(0x298)];if(!_0x2d1958[_0x29fe06(0x189)])return;const _0x4dd88d=_0x6ea348[_0x29fe06(0x251)](_0x35a80[_0x29fe06(0x106)]);if(_0x4dd88d)for(const _0x554f3d of _0x4dd88d){if(!_0x554f3d)continue;_0x554f3d[_0x29fe06(0x251)](_0x35a80[_0x29fe06(0x106)]);const _0x2c232a=String(RegExp['$1']),_0x957b4d=eval(RegExp['$2']),_0x28dac8=/^\d+$/['test'](_0x2c232a);let _0x7a25df=0x0;_0x28dac8?_0x7a25df=Number(_0x2c232a):_0x7a25df=DataManager[_0x29fe06(0x10d)](_0x2c232a),this[_0x29fe06(0x263)](_0x957b4d,_0x7a25df);}},Game_Actor['prototype'][_0x54880c(0x15c)]=function(_0x3ef193){const _0x2fb46e=_0x54880c;this['_abilityPoints']===undefined&&this[_0x2fb46e(0x17d)]();const _0x3674bd=VisuMZ[_0x2fb46e(0x296)][_0x2fb46e(0x156)][_0x2fb46e(0x298)];return _0x3674bd[_0x2fb46e(0x189)]?_0x3ef193=0x0:_0x3ef193=_0x3ef193||this[_0x2fb46e(0xcf)]()['id'],this[_0x2fb46e(0x204)][_0x3ef193]=this[_0x2fb46e(0x204)][_0x3ef193]||0x0,Math['round'](this['_abilityPoints'][_0x3ef193]);},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x1e4)]=function(_0x27a7a3,_0x629d51){const _0x2d09b4=_0x54880c;this[_0x2d09b4(0x204)]===undefined&&this['initAbilityPoints']();const _0x497ee4=VisuMZ['SkillLearnSystem'][_0x2d09b4(0x156)][_0x2d09b4(0x298)];_0x497ee4['SharedResource']?_0x629d51=0x0:_0x629d51=_0x629d51||this[_0x2d09b4(0xcf)]()['id'];this[_0x2d09b4(0x204)][_0x629d51]=this[_0x2d09b4(0x204)][_0x629d51]||0x0,this['_abilityPoints'][_0x629d51]=Math[_0x2d09b4(0x26c)](_0x27a7a3||0x0);const _0x200241=_0x497ee4[_0x2d09b4(0x1e6)]||Number[_0x2d09b4(0x250)];this[_0x2d09b4(0x204)][_0x629d51]=this['_abilityPoints'][_0x629d51][_0x2d09b4(0x182)](0x0,_0x200241);},Game_Actor['prototype'][_0x54880c(0x263)]=function(_0x2e7298,_0x2b98e8){const _0x274dcf=_0x54880c;_0x2e7298>0x0&&(_0x2e7298*=this[_0x274dcf(0x265)]()),this[_0x274dcf(0x2ba)](_0x2e7298,_0x2b98e8);},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x197)]=function(_0x2f70c5){const _0x28d435=_0x54880c;if(!Imported[_0x28d435(0xe7)])return;_0x2f70c5>0x0&&(_0x2f70c5*=this[_0x28d435(0x265)]()),this[_0x28d435(0x1af)](_0x2f70c5,_0x28d435(0x16a));},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x2ba)]=function(_0x234afa,_0x2ce982){const _0x32312c=_0x54880c,_0x5ea5fc=VisuMZ[_0x32312c(0x296)]['Settings'][_0x32312c(0x298)];_0x5ea5fc[_0x32312c(0x189)]?_0x2ce982=0x0:_0x2ce982=_0x2ce982||this[_0x32312c(0xcf)]()['id'],_0x234afa+=this['getAbilityPoints'](_0x2ce982),this['setAbilityPoints'](_0x234afa,_0x2ce982);},Game_Actor['prototype'][_0x54880c(0x2ab)]=function(_0x42e425,_0x289364){const _0x40ffc8=_0x54880c;this[_0x40ffc8(0x2ba)](-_0x42e425,_0x289364);},Game_Actor[_0x54880c(0xf9)]['abilityPointsRate']=function(){const _0xe48b2a=_0x54880c;return this[_0xe48b2a(0x14c)]()[_0xe48b2a(0xe1)]((_0x5c29ce,_0x17f010)=>{const _0x4f71c1=_0xe48b2a;return _0x17f010&&_0x17f010['note'][_0x4f71c1(0x251)](VisuMZ[_0x4f71c1(0x296)][_0x4f71c1(0x25f)][_0x4f71c1(0x1eb)])?_0x5c29ce*(Number(RegExp['$1'])*0.01):_0x5c29ce;},0x1);},Game_Actor['prototype'][_0x54880c(0x283)]=function(_0x1b4017){const _0x5260bf=_0x54880c;if(this['_SkillLearnSystem_preventLevelUpGain'])return;const _0x4af98b=VisuMZ[_0x5260bf(0x296)][_0x5260bf(0x156)][_0x5260bf(0x298)];let _0x5112cb=0x0;try{_0x5112cb=eval(_0x4af98b[_0x5260bf(0x25e)]);}catch(_0x1dd57b){if($gameTemp[_0x5260bf(0x2bc)]())console[_0x5260bf(0x12e)](_0x1dd57b);}this[_0x5260bf(0x263)](_0x5112cb,_0x1b4017);},Game_Actor[_0x54880c(0xf9)]['earnedAbilityPoints']=function(){const _0x52cb88=_0x54880c;return this[_0x52cb88(0x29d)]=this[_0x52cb88(0x29d)]||0x0,this[_0x52cb88(0x15c)]()-this[_0x52cb88(0x29d)];},Game_Actor[_0x54880c(0xf9)][_0x54880c(0xe0)]=function(){const _0x44c1d0=_0x54880c;this[_0x44c1d0(0x1ae)]={};},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x228)]=function(){const _0x277ac4=_0x54880c,_0x3fe31e=VisuMZ[_0x277ac4(0x296)]['RegExp'],_0x5c5320=this['actor']()[_0x277ac4(0x1e5)];if(_0x5c5320['match'](_0x3fe31e['StartingSkillPoints'])){const _0x5e1004=eval(RegExp['$1']);this[_0x277ac4(0x1c5)](_0x5e1004);}const _0x227a59=VisuMZ[_0x277ac4(0x296)]['Settings'][_0x277ac4(0x198)];if(!_0x227a59['SharedResource'])return;const _0x17d881=_0x5c5320['match'](_0x3fe31e[_0x277ac4(0x1b4)]);if(_0x17d881)for(const _0x56c821 of _0x17d881){if(!_0x56c821)continue;_0x56c821['match'](_0x3fe31e[_0x277ac4(0x1b4)]);const _0x40df43=String(RegExp['$1']),_0x4e1d5e=eval(RegExp['$2']),_0x583a29=/^\d+$/[_0x277ac4(0x15d)](_0x40df43);let _0x6261fa=0x0;_0x583a29?_0x6261fa=Number(_0x40df43):_0x6261fa=DataManager[_0x277ac4(0x10d)](_0x40df43),this['gainSkillPoints'](_0x4e1d5e,_0x6261fa);}},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x2a3)]=function(_0x5276be){const _0x1aa496=_0x54880c;this[_0x1aa496(0x1ae)]===undefined&&this[_0x1aa496(0xe0)]();const _0x334b8f=VisuMZ[_0x1aa496(0x296)][_0x1aa496(0x156)][_0x1aa496(0x198)];return _0x334b8f[_0x1aa496(0x189)]?_0x5276be=0x0:_0x5276be=_0x5276be||this['currentClass']()['id'],this['_skillPoints'][_0x5276be]=this[_0x1aa496(0x1ae)][_0x5276be]||0x0,Math[_0x1aa496(0x26c)](this[_0x1aa496(0x1ae)][_0x5276be]);},Game_Actor[_0x54880c(0xf9)]['setSkillPoints']=function(_0x23f46c,_0x3b4ad1){const _0x2337e3=_0x54880c;this[_0x2337e3(0x1ae)]===undefined&&this[_0x2337e3(0xe0)]();const _0xc91820=VisuMZ[_0x2337e3(0x296)][_0x2337e3(0x156)][_0x2337e3(0x198)];_0xc91820[_0x2337e3(0x189)]?_0x3b4ad1=0x0:_0x3b4ad1=_0x3b4ad1||this[_0x2337e3(0xcf)]()['id'];this['_skillPoints'][_0x3b4ad1]=this[_0x2337e3(0x1ae)][_0x3b4ad1]||0x0,this[_0x2337e3(0x1ae)][_0x3b4ad1]=Math['round'](_0x23f46c||0x0);const _0xae48f0=_0xc91820[_0x2337e3(0x1e6)]||Number[_0x2337e3(0x250)];this['_skillPoints'][_0x3b4ad1]=this[_0x2337e3(0x1ae)][_0x3b4ad1][_0x2337e3(0x182)](0x0,_0xae48f0);},Game_Actor[_0x54880c(0xf9)]['gainSkillPoints']=function(_0x493ca8,_0x9f0f77){const _0x282b06=_0x54880c;_0x493ca8>0x0&&(_0x493ca8*=this['skillPointsRate']()),this[_0x282b06(0x11f)](_0x493ca8,_0x9f0f77);},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x1ff)]=function(_0x2c5045){const _0x26f1c8=_0x54880c;if(!Imported['VisuMZ_2_ClassChangeSystem'])return;_0x2c5045>0x0&&(_0x2c5045*=this[_0x26f1c8(0x159)]()),this['gainMulticlassRewardPoints'](_0x2c5045,_0x26f1c8(0x20c));},Game_Actor['prototype'][_0x54880c(0x11f)]=function(_0x197772,_0x580e96){const _0x3beb80=_0x54880c,_0x5b473d=VisuMZ[_0x3beb80(0x296)][_0x3beb80(0x156)]['SkillPoints'];_0x5b473d[_0x3beb80(0x189)]?_0x580e96=0x0:_0x580e96=_0x580e96||this[_0x3beb80(0xcf)]()['id'],_0x197772+=this[_0x3beb80(0x2a3)](_0x580e96),this[_0x3beb80(0x12f)](_0x197772,_0x580e96);},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x15a)]=function(_0x294850,_0x596c7e){this['addSkillPoints'](-_0x294850,_0x596c7e);},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x159)]=function(){const _0xad66b5=_0x54880c;return this[_0xad66b5(0x14c)]()[_0xad66b5(0xe1)]((_0x316516,_0x4aa8f6)=>{const _0x5b688c=_0xad66b5;return _0x4aa8f6&&_0x4aa8f6[_0x5b688c(0x1e5)][_0x5b688c(0x251)](VisuMZ[_0x5b688c(0x296)][_0x5b688c(0x25f)][_0x5b688c(0x17b)])?_0x316516*(Number(RegExp['$1'])*0.01):_0x316516;},0x1);},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x104)]=function(_0x3df911){const _0x59c44a=_0x54880c;if(this[_0x59c44a(0x220)])return;const _0x7e3fd6=VisuMZ[_0x59c44a(0x296)]['Settings'][_0x59c44a(0x198)];let _0x487029=0x0;try{_0x487029=eval(_0x7e3fd6['PerLevelUp']);}catch(_0x390294){if($gameTemp['isPlaytest']())console[_0x59c44a(0x12e)](_0x390294);}this[_0x59c44a(0x1c5)](_0x487029,_0x3df911);},Game_Actor[_0x54880c(0xf9)]['earnedSkillPoints']=function(){const _0xde210f=_0x54880c;return this[_0xde210f(0x1a0)]=this[_0xde210f(0x1a0)]||0x0,this[_0xde210f(0x2a3)]()-this[_0xde210f(0x1a0)];},Game_Actor[_0x54880c(0xf9)]['meetRequirementsForSkillLearnSystem']=function(_0x477513){const _0x169f3b=_0x54880c;if(!_0x477513)return![];const _0x3ce38e=VisuMZ[_0x169f3b(0x296)]['createKeyJS'](_0x477513,_0x169f3b(0xb7));if(VisuMZ[_0x169f3b(0x296)]['JS'][_0x3ce38e]){if(!VisuMZ[_0x169f3b(0x296)]['JS'][_0x3ce38e]['call'](this,this,_0x477513))return![];}const _0x15855c=VisuMZ[_0x169f3b(0x296)][_0x169f3b(0x25f)],_0x31e5fd=_0x477513[_0x169f3b(0x1e5)];if(_0x31e5fd['match'](_0x15855c['LearnReqLevel'])){const _0x18c6f7=Number(RegExp['$1']);if(_0x18c6f7>this[_0x169f3b(0x2b3)])return![];}if(_0x31e5fd[_0x169f3b(0x251)](_0x15855c[_0x169f3b(0x207)])){const _0x19fe71=String(RegExp['$1'])[_0x169f3b(0x1b0)](',')[_0x169f3b(0x216)](_0x4a59af=>_0x4a59af[_0x169f3b(0x110)]());for(const _0x256a36 of _0x19fe71){let _0x25eb6f=0x0;const _0x20cf6d=/^\d+$/[_0x169f3b(0x15d)](_0x256a36);_0x20cf6d?_0x25eb6f=Number(_0x256a36):_0x25eb6f=DataManager['getSkillIdWithName'](_0x256a36);if(!this[_0x169f3b(0x2a2)](_0x25eb6f))return![];}}if(_0x31e5fd[_0x169f3b(0x251)](_0x15855c[_0x169f3b(0x279)])){const _0x4a8038=String(RegExp['$1'])[_0x169f3b(0x1b0)](',')[_0x169f3b(0x216)](_0x82df40=>_0x82df40[_0x169f3b(0x110)]());let _0xc520f7=![];for(const _0x8f2b18 of _0x4a8038){let _0x5b0e59=0x0;const _0x5aba8f=/^\d+$/[_0x169f3b(0x15d)](_0x8f2b18);_0x5aba8f?_0x5b0e59=Number(_0x8f2b18):_0x5b0e59=DataManager['getSkillIdWithName'](_0x8f2b18);if(this[_0x169f3b(0x2a2)](_0x5b0e59)){_0xc520f7=!![];break;}}if(!_0xc520f7)return![];}if(_0x31e5fd[_0x169f3b(0x251)](_0x15855c[_0x169f3b(0x101)])){const _0x37c5d2=String(RegExp['$1'])[_0x169f3b(0x1b0)](',')[_0x169f3b(0x216)](_0x4c1d81=>Number(_0x4c1d81));for(const _0x575033 of _0x37c5d2){if(!$gameSwitches[_0x169f3b(0x1da)](_0x575033))return![];}}if(_0x31e5fd[_0x169f3b(0x251)](_0x15855c[_0x169f3b(0x17f)])){const _0x12e048=String(RegExp['$1'])[_0x169f3b(0x1b0)](',')['map'](_0x1569c5=>Number(_0x1569c5));let _0x24ab96=![];for(const _0x25c683 of _0x12e048){if($gameSwitches[_0x169f3b(0x1da)](_0x25c683)){_0x24ab96=!![];break;}}if(!_0x24ab96)return![];}return!![];},Game_Actor[_0x54880c(0xf9)][_0x54880c(0x1df)]=function(_0x428dae){const _0x5e266f=_0x54880c;if(!_0x428dae)return![];const _0x46bef9=DataManager[_0x5e266f(0x1e8)](_0x428dae);if(_0x46bef9>this[_0x5e266f(0x15c)]())return![];const _0x3a2180=DataManager[_0x5e266f(0x23d)](_0x428dae);if(_0x3a2180>this[_0x5e266f(0x2a3)]())return![];const _0x10e7c7=DataManager[_0x5e266f(0x105)](_0x428dae);if(_0x10e7c7>$gameParty[_0x5e266f(0x2c7)]())return![];if(Imported['VisuMZ_2_ClassChangeSystem']){const _0x440109=DataManager[_0x5e266f(0x1b7)](_0x428dae);if(_0x440109>this[_0x5e266f(0x1b8)]())return![];const _0x419c47=DataManager[_0x5e266f(0x16c)](_0x428dae);if(_0x419c47>this[_0x5e266f(0x1c3)]())return![];}const _0xaf74dc=DataManager[_0x5e266f(0x1f4)](_0x428dae);for(const _0x39b4fe of _0xaf74dc){if(!_0x39b4fe)continue;const _0x205d7e=$dataItems[_0x39b4fe['id']];if(_0x205d7e&&_0x39b4fe[_0x5e266f(0x1a5)]>$gameParty['numItems'](_0x205d7e))return![];}const _0x5e810d=DataManager['getSkillLearnWeaponCost'](_0x428dae);for(const _0x56a128 of _0x5e810d){if(!_0x56a128)continue;const _0x42166f=$dataWeapons[_0x56a128['id']];if(_0x42166f&&_0x56a128[_0x5e266f(0x1a5)]>$gameParty[_0x5e266f(0x20d)](_0x42166f))return![];}const _0x488a60=DataManager[_0x5e266f(0xed)](_0x428dae);for(const _0x390ec7 of _0x488a60){if(!_0x390ec7)continue;const _0x5032bd=$dataArmors[_0x390ec7['id']];if(_0x5032bd&&_0x390ec7[_0x5e266f(0x1a5)]>$gameParty[_0x5e266f(0x20d)](_0x5032bd))return![];}return!![];},Game_Actor['prototype'][_0x54880c(0x208)]=function(_0x2bf1e4){const _0x2c9596=_0x54880c;if(!_0x2bf1e4)return;const _0x2804db=DataManager[_0x2c9596(0x1e8)](_0x2bf1e4);this[_0x2c9596(0x2ab)](_0x2804db);const _0x18a8e3=DataManager['getSkillLearnSkillPointCost'](_0x2bf1e4);this[_0x2c9596(0x15a)](_0x18a8e3);const _0x16dcba=DataManager['getSkillLearnGoldCost'](_0x2bf1e4);$gameParty[_0x2c9596(0x14a)](_0x16dcba);if(Imported[_0x2c9596(0xe7)]){const _0x7e84fb=DataManager[_0x2c9596(0x1b7)](_0x2bf1e4);this[_0x2c9596(0x20e)](_0x7e84fb);const _0x3e4d3b=DataManager[_0x2c9596(0x16c)](_0x2bf1e4);this[_0x2c9596(0x1db)](_0x3e4d3b);}const _0x5407a0=DataManager[_0x2c9596(0x1f4)](_0x2bf1e4);for(const _0x4e5e00 of _0x5407a0){if(!_0x4e5e00)continue;const _0xbe38c2=$dataItems[_0x4e5e00['id']],_0x267574=_0x4e5e00['quantity'];$gameParty[_0x2c9596(0x240)](_0xbe38c2,_0x267574);}const _0x32e694=DataManager[_0x2c9596(0x13d)](_0x2bf1e4);for(const _0x316a62 of _0x32e694){if(!_0x316a62)continue;const _0x55b527=$dataWeapons[_0x316a62['id']],_0x1abc74=_0x316a62[_0x2c9596(0x1a5)];$gameParty['loseItem'](_0x55b527,_0x1abc74);}const _0x399631=DataManager[_0x2c9596(0xed)](_0x2bf1e4);for(const _0x6dd855 of _0x399631){if(!_0x6dd855)continue;const _0x34cb32=$dataArmors[_0x6dd855['id']],_0x5bec06=_0x6dd855[_0x2c9596(0x1a5)];$gameParty['loseItem'](_0x34cb32,_0x5bec06);}if(DataManager[_0x2c9596(0x15f)](_0x2bf1e4))this['learnSkill'](_0x2bf1e4['id']);else DataManager[_0x2c9596(0xbf)](_0x2bf1e4)&&Imported[_0x2c9596(0x21b)]&&this[_0x2c9596(0x160)](_0x2bf1e4,!![]);this[_0x2c9596(0x1ab)]();},VisuMZ[_0x54880c(0x296)]['Game_Actor_learnSkill']=Game_Actor[_0x54880c(0xf9)][_0x54880c(0x26a)],Game_Actor[_0x54880c(0xf9)][_0x54880c(0x26a)]=function(_0x34a47f){const _0x52df32=_0x54880c,_0x52c668=!this[_0x52df32(0x2a2)](_0x34a47f);VisuMZ[_0x52df32(0x296)][_0x52df32(0xf8)][_0x52df32(0x2b0)](this,_0x34a47f);if(_0x52c668&&this[_0x52df32(0x2a2)](_0x34a47f)){const _0x314c47=$dataSkills[_0x34a47f],_0x25863d=VisuMZ[_0x52df32(0x296)][_0x52df32(0xe4)](_0x314c47,_0x52df32(0x1a8));VisuMZ[_0x52df32(0x296)]['JS'][_0x25863d]&&VisuMZ['SkillLearnSystem']['JS'][_0x25863d][_0x52df32(0x2b0)](this,this,_0x314c47);}},Game_Actor['prototype'][_0x54880c(0x257)]=function(){const _0x5f57c6=_0x54880c,_0x4f0b19=DataManager[_0x5f57c6(0x272)](this[_0x5f57c6(0xcf)]()['id']);for(const _0x5a879a of _0x4f0b19){const _0x5f38af=$dataSkills[_0x5a879a];if(!_0x5f38af)continue;if(_0x5f38af[_0x5f57c6(0x271)][_0x5f57c6(0x110)]()==='')continue;if(_0x5f38af[_0x5f57c6(0x271)][_0x5f57c6(0x251)](/-----/i))continue;this[_0x5f57c6(0x26a)](_0x5a879a);}},Game_Enemy['prototype'][_0x54880c(0x26b)]=function(){const _0x12f572=_0x54880c,_0x5ed99e=VisuMZ['SkillLearnSystem'][_0x12f572(0x156)][_0x12f572(0x298)],_0xe7b3e5=VisuMZ[_0x12f572(0x296)][_0x12f572(0x25f)],_0x3af99b=this[_0x12f572(0x1bd)]()[_0x12f572(0x1e5)];if(_0x3af99b[_0x12f572(0x251)](_0xe7b3e5[_0x12f572(0x287)]))try{return eval(RegExp['$1']);}catch(_0x2f986f){if($gameTemp['isPlaytest']())console[_0x12f572(0x12e)](_0x2f986f);return 0x0;}try{return eval(_0x5ed99e['PerEnemy']);}catch(_0x1786ce){if($gameTemp[_0x12f572(0x2bc)]())console[_0x12f572(0x12e)](_0x1786ce);return 0x0;}},Game_Enemy[_0x54880c(0xf9)][_0x54880c(0x22a)]=function(){const _0x27be55=_0x54880c,_0x232fdc=VisuMZ[_0x27be55(0x296)][_0x27be55(0x156)][_0x27be55(0x198)],_0xc4fdf0=VisuMZ[_0x27be55(0x296)][_0x27be55(0x25f)],_0x315320=this[_0x27be55(0x1bd)]()[_0x27be55(0x1e5)];if(_0x315320['match'](_0xc4fdf0['EnemySkillPoints']))try{return eval(RegExp['$1']);}catch(_0x64e039){if($gameTemp[_0x27be55(0x2bc)]())console[_0x27be55(0x12e)](_0x64e039);return 0x0;}try{return eval(_0x232fdc['PerEnemy']);}catch(_0x3bea74){if($gameTemp[_0x27be55(0x2bc)]())console[_0x27be55(0x12e)](_0x3bea74);return 0x0;}},VisuMZ[_0x54880c(0x296)][_0x54880c(0x215)]=Game_Party[_0x54880c(0xf9)][_0x54880c(0xb9)],Game_Party[_0x54880c(0xf9)]['setupBattleTestMembers']=function(){const _0x3b042b=_0x54880c;VisuMZ[_0x3b042b(0x296)]['Game_Party_setupBattleTestMembers'][_0x3b042b(0x2b0)](this),this[_0x3b042b(0x150)]();},Game_Party[_0x54880c(0xf9)][_0x54880c(0x150)]=function(){const _0x395525=_0x54880c;for(const _0x3e2645 of this[_0x395525(0x26d)]()){if(!_0x3e2645)continue;_0x3e2645[_0x395525(0x257)]();}},Game_Troop['prototype'][_0x54880c(0x2a9)]=function(){const _0x4430ea=_0x54880c;return this[_0x4430ea(0x2bb)]()['reduce']((_0x30dc10,_0x240cae)=>_0x30dc10+_0x240cae[_0x4430ea(0x26b)](),0x0);},Game_Troop[_0x54880c(0xf9)][_0x54880c(0x29a)]=function(){const _0x35ec12=_0x54880c;return this['deadMembers']()[_0x35ec12(0xe1)]((_0x2641d7,_0x140e09)=>_0x2641d7+_0x140e09['skillPoints'](),0x0);},VisuMZ[_0x54880c(0x296)]['Scene_Skill_create']=Scene_Skill['prototype'][_0x54880c(0xe6)],Scene_Skill[_0x54880c(0xf9)][_0x54880c(0xe6)]=function(){const _0x54a951=_0x54880c;VisuMZ['SkillLearnSystem'][_0x54a951(0x1e7)][_0x54a951(0x2b0)](this),this[_0x54a951(0x19d)]();},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x19d)]=function(){const _0x2f680b=_0x54880c;this[_0x2f680b(0xc0)](),this[_0x2f680b(0xce)]();},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0xc0)]=function(){const _0x1a04c0=_0x54880c,_0x29912b=this[_0x1a04c0(0x214)]();this['_skillLearnIngredientsWindow']=new Window_SkillLearnIngredients(_0x29912b),this['addWindow'](this[_0x1a04c0(0x145)]),this[_0x1a04c0(0x145)][_0x1a04c0(0x234)]();const _0x1d415a=VisuMZ['SkillLearnSystem'][_0x1a04c0(0x156)]['Window'][_0x1a04c0(0x186)];this[_0x1a04c0(0x145)]['setBackgroundType'](_0x1d415a);},Scene_Skill['prototype'][_0x54880c(0x214)]=function(){const _0x4cb96f=_0x54880c;if(VisuMZ[_0x4cb96f(0x296)]['Settings'][_0x4cb96f(0x12a)][_0x4cb96f(0xac)])return VisuMZ[_0x4cb96f(0x296)]['Settings'][_0x4cb96f(0x12a)][_0x4cb96f(0xac)][_0x4cb96f(0x2b0)](this);const _0x51e1eb=this[_0x4cb96f(0x1a7)](),_0x545b60=_0x51e1eb['x'],_0x76421f=_0x51e1eb['y'],_0x164ba0=_0x51e1eb['width'],_0x37680b=_0x51e1eb['height']-this[_0x4cb96f(0x121)](0x2,![]);return new Rectangle(_0x545b60,_0x76421f,_0x164ba0,_0x37680b);},Scene_Skill['prototype'][_0x54880c(0xce)]=function(){const _0x14504c=_0x54880c,_0x43e3d7=this[_0x14504c(0x162)]();this[_0x14504c(0x1fd)]=new Window_SkillLearnConfirm(_0x43e3d7),this[_0x14504c(0x199)](this['_skillLearnConfirmWindow']),this[_0x14504c(0x1fd)]['setHandler']('ok',this[_0x14504c(0xf2)][_0x14504c(0x113)](this)),this[_0x14504c(0x1fd)][_0x14504c(0x1b3)](_0x14504c(0x10f),this[_0x14504c(0xbd)][_0x14504c(0x113)](this)),this[_0x14504c(0x1fd)][_0x14504c(0x234)]();const _0x5c12f8=VisuMZ[_0x14504c(0x296)][_0x14504c(0x156)][_0x14504c(0x12a)]['ConfirmWindow_BgType'];this['_skillLearnConfirmWindow']['setBackgroundType'](_0x5c12f8);},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x162)]=function(){const _0x2f580f=_0x54880c;if(VisuMZ[_0x2f580f(0x296)]['Settings'][_0x2f580f(0x12a)]['ConfirmWindow_RectJS'])return VisuMZ[_0x2f580f(0x296)][_0x2f580f(0x156)]['Window'][_0x2f580f(0x179)][_0x2f580f(0x2b0)](this);const _0x5edefb=this[_0x2f580f(0x1a7)](),_0x2ae5a3=_0x5edefb[_0x2f580f(0x14d)],_0xaaaf9e=this[_0x2f580f(0x121)](0x2,![]),_0x3b594f=_0x5edefb['x'],_0x58aace=_0x5edefb['y']+_0x5edefb['height']-_0xaaaf9e;return new Rectangle(_0x3b594f,_0x58aace,_0x2ae5a3,_0xaaaf9e);},VisuMZ['SkillLearnSystem'][_0x54880c(0x2a8)]=Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x238)],Scene_Skill[_0x54880c(0xf9)]['onItemOk']=function(){const _0x1b08ce=_0x54880c;this[_0x1b08ce(0x21c)][_0x1b08ce(0x1c6)]()?this[_0x1b08ce(0x21c)][_0x1b08ce(0x2c6)]()&&this[_0x1b08ce(0x21c)][_0x1b08ce(0x2c6)]()['stypeCategory']?this[_0x1b08ce(0xa7)]():this[_0x1b08ce(0x1dc)]():VisuMZ[_0x1b08ce(0x296)][_0x1b08ce(0x2a8)][_0x1b08ce(0x2b0)](this);},Scene_Skill['prototype']['onSkillLearnCollapseStypeID']=function(){const _0x12afb8=_0x54880c;this[_0x12afb8(0x21c)][_0x12afb8(0x2bf)](),this['_itemWindow'][_0x12afb8(0x1ee)]();},Scene_Skill['prototype']['onSkillLearnItemOk']=function(){const _0x542a8d=_0x54880c;this[_0x542a8d(0x21c)][_0x542a8d(0x234)](),this[_0x542a8d(0x145)][_0x542a8d(0x18b)](),this[_0x542a8d(0x145)][_0x542a8d(0x1ab)](),this[_0x542a8d(0x1fd)][_0x542a8d(0x18b)](),this['_skillLearnConfirmWindow']['refresh'](),this[_0x542a8d(0x1fd)][_0x542a8d(0x1ee)](),this['_skillLearnConfirmWindow'][_0x542a8d(0x2ce)](0x0);},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0xf2)]=function(){const _0x376e24=_0x54880c;VisuMZ['SkillLearnSystem']['Settings'][_0x376e24(0x221)][_0x376e24(0x274)]?this['startSkillLearnAnimation']():this[_0x376e24(0x2b1)]();},Scene_Skill[_0x54880c(0xf9)]['onSkillLearnConfirmCancel']=function(){const _0x29a6cb=_0x54880c;this['_itemWindow'][_0x29a6cb(0x18b)](),this[_0x29a6cb(0x21c)][_0x29a6cb(0x1ee)](),this[_0x29a6cb(0x145)]['hide'](),this[_0x29a6cb(0x1fd)][_0x29a6cb(0x234)]();},Scene_Skill['prototype'][_0x54880c(0x2b1)]=function(){const _0x9adda4=_0x54880c;this[_0x9adda4(0x286)][_0x9adda4(0x2d3)]=!![],this[_0x9adda4(0x2b5)]=![],SoundManager['playSkillLearn'](),this[_0x9adda4(0xb2)]()[_0x9adda4(0x208)](this[_0x9adda4(0x2c6)]()),this[_0x9adda4(0xbd)](),this[_0x9adda4(0x21c)][_0x9adda4(0x1ab)](),this[_0x9adda4(0x20f)][_0x9adda4(0x1ab)]();for(;;){if(this['_itemWindow'][_0x9adda4(0x1d9)]()<=0x0)break;if(this['_itemWindow'][_0x9adda4(0x2c6)]())break;this[_0x9adda4(0x21c)][_0x9adda4(0x227)](Math['max'](this['_itemWindow']['index']()-0x1,0x0));}},VisuMZ[_0x54880c(0x296)][_0x54880c(0x2bd)]=Scene_Skill[_0x54880c(0xf9)]['update'],Scene_Skill['prototype']['update']=function(){const _0x2d3b5a=_0x54880c;VisuMZ[_0x2d3b5a(0x296)]['Scene_Skill_update'][_0x2d3b5a(0x2b0)](this),this['updateSkillLearnAnimation']();},Scene_Skill['prototype'][_0x54880c(0x22b)]=function(){const _0x29d703=_0x54880c;this[_0x29d703(0x2b5)]=!![],this[_0x29d703(0xf6)]=0x14,this['_windowLayer']['visible']=VisuMZ[_0x29d703(0x296)][_0x29d703(0x156)]['Animation'][_0x29d703(0x1ea)]||![],this[_0x29d703(0x129)]();},Scene_Skill['prototype'][_0x54880c(0x129)]=function(){const _0x1905f2=_0x54880c;this[_0x1905f2(0x1d8)]=new Sprite(),this['addChild'](this[_0x1905f2(0x1d8)]),this[_0x1905f2(0x24c)](),this[_0x1905f2(0x254)](),this['setSkillLearnSkillSpritePosition'](),this[_0x1905f2(0x200)](),this[_0x1905f2(0xec)](),this['createSkillLearnAnimation'](this[_0x1905f2(0x149)][_0x1905f2(0x2af)]());},Scene_Skill['prototype'][_0x54880c(0x24c)]=function(){const _0x184bb6=_0x54880c,_0x343ea8=VisuMZ[_0x184bb6(0x296)][_0x184bb6(0x25f)],_0x4eefe0=this['item']()[_0x184bb6(0x1e5)];this[_0x184bb6(0xdc)]='';if(_0x4eefe0[_0x184bb6(0x251)](_0x343ea8[_0x184bb6(0x2cb)]))this[_0x184bb6(0xdc)]=String(RegExp['$1']);else _0x4eefe0['match'](_0x343ea8[_0x184bb6(0x11b)])&&(this[_0x184bb6(0xdc)]=String(RegExp['$1']));this[_0x184bb6(0x209)]=new Sprite();this[_0x184bb6(0xdc)]?this['_skillLearnBitmapSprite'][_0x184bb6(0x21e)]=ImageManager[_0x184bb6(0x29f)](this[_0x184bb6(0xdc)]):(this['_skillLearnBitmapSprite'][_0x184bb6(0x21e)]=ImageManager[_0x184bb6(0x194)](_0x184bb6(0x24d)),this[_0x184bb6(0x209)][_0x184bb6(0x21e)][_0x184bb6(0xf7)]=![]);this[_0x184bb6(0x209)][_0x184bb6(0xe2)]['x']=0.5,this[_0x184bb6(0x209)][_0x184bb6(0xe2)]['y']=0.5;if(!this['_learnPicture']){const _0x4006d7=VisuMZ[_0x184bb6(0x296)][_0x184bb6(0x156)]['Animation'][_0x184bb6(0xc1)]||0x8;this['_skillLearnBitmapSprite'][_0x184bb6(0x21d)]['x']=_0x4006d7,this[_0x184bb6(0x209)][_0x184bb6(0x21d)]['y']=_0x4006d7;}this[_0x184bb6(0x1d8)]['addChild'](this[_0x184bb6(0x209)]);},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x254)]=function(){const _0x4ff663=_0x54880c;if(this[_0x4ff663(0xdc)])return;const _0x1dbac0=this[_0x4ff663(0x2c6)](),_0x55fa0e=_0x1dbac0[_0x4ff663(0xf0)],_0x45730d=ImageManager[_0x4ff663(0xaa)],_0x472e23=ImageManager[_0x4ff663(0x170)],_0x153e09=_0x55fa0e%0x10*_0x45730d,_0x32a04f=Math[_0x4ff663(0x299)](_0x55fa0e/0x10)*_0x472e23;this[_0x4ff663(0x209)][_0x4ff663(0x13c)](_0x153e09,_0x32a04f,_0x45730d,_0x472e23);},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x191)]=function(){const _0x50acce=_0x54880c;this[_0x50acce(0x1d8)]['x']=Math[_0x50acce(0x26c)](Graphics[_0x50acce(0x14d)]/0x2);const _0x58ae8a=Math[_0x50acce(0x26c)](ImageManager[_0x50acce(0x170)]*this['_skillLearnIconSprite']['scale']['y']);this[_0x50acce(0x1d8)]['y']=Math[_0x50acce(0x26c)]((Graphics[_0x50acce(0x25c)]+_0x58ae8a)/0x2);},Scene_Skill[_0x54880c(0xf9)]['setSkillLearnSkillSpriteOpacity']=function(){const _0x30adba=_0x54880c;this[_0x30adba(0x201)]=VisuMZ[_0x30adba(0x296)][_0x30adba(0x156)]['Animation'][_0x30adba(0xb4)]||0x1,this['item']()['note'][_0x30adba(0x251)](VisuMZ[_0x30adba(0x296)][_0x30adba(0x25f)][_0x30adba(0x24b)])&&(this['_skillLearnIconSpriteOpacitySpeed']=Math['max'](Number(RegExp['$1']),0x1)),this['_skillLearnIconSprite'][_0x30adba(0x146)]=0x0;},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0xec)]=function(){const _0x4d6ce2=_0x54880c;this[_0x4d6ce2(0x149)]=[],this[_0x4d6ce2(0x2c6)]()['note']['match'](VisuMZ[_0x4d6ce2(0x296)][_0x4d6ce2(0x25f)][_0x4d6ce2(0x231)])?this[_0x4d6ce2(0x149)]=RegExp['$1'][_0x4d6ce2(0x1b0)](',')[_0x4d6ce2(0x216)](_0x589ae5=>Number(_0x589ae5)):this[_0x4d6ce2(0x149)]=this[_0x4d6ce2(0x149)][_0x4d6ce2(0x187)](VisuMZ[_0x4d6ce2(0x296)][_0x4d6ce2(0x156)]['Animation'][_0x4d6ce2(0x206)]);},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x2a7)]=function(_0x46cef5){const _0x1eeda9=_0x54880c,_0x27a541=$dataAnimations[_0x46cef5];if(!_0x27a541)return;const _0x1ef846=this[_0x1eeda9(0x134)](_0x27a541);this[_0x1eeda9(0x135)]=new(_0x1ef846?Sprite_AnimationMV:Sprite_Animation)();const _0xf42fbf=[this[_0x1eeda9(0x1d8)]],_0x1e5651=0x0;this['_skillLearnAnimationSprite'][_0x1eeda9(0x27c)](_0xf42fbf,_0x27a541,![],_0x1e5651,null),this[_0x1eeda9(0x185)](this['_skillLearnAnimationSprite']);},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x134)]=function(_0x45de62){return!!_0x45de62['frames'];},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x1c7)]=function(){const _0x143081=_0x54880c;if(!this[_0x143081(0x2b5)])return;this[_0x143081(0x192)](),this[_0x143081(0x28d)](),this['isFinishedSkillLearnAnimating']()&&this[_0x143081(0x297)]();},Scene_Skill['prototype'][_0x54880c(0x192)]=function(){this['_skillLearnIconSprite']['opacity']+=this['_skillLearnIconSpriteOpacitySpeed'];},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x28d)]=function(){const _0x3a666c=_0x54880c;if(!this[_0x3a666c(0x135)])return;if(this[_0x3a666c(0x135)][_0x3a666c(0x23a)]())return;this[_0x3a666c(0x139)](),this[_0x3a666c(0x2a7)](this[_0x3a666c(0x149)][_0x3a666c(0x2af)]());},Scene_Skill['prototype']['destroySkillLearnAnimationSprite']=function(){const _0x2248a2=_0x54880c;if(!this[_0x2248a2(0x135)])return;this[_0x2248a2(0x128)](this[_0x2248a2(0x135)]),this[_0x2248a2(0x135)][_0x2248a2(0x171)](),this[_0x2248a2(0x135)]=undefined;},Scene_Skill[_0x54880c(0xf9)][_0x54880c(0x21a)]=function(){const _0x5c045b=_0x54880c;if(!this['_skillLearnIconSprite'])return;this[_0x5c045b(0x128)](this[_0x5c045b(0x1d8)]),this[_0x5c045b(0x1d8)][_0x5c045b(0x171)](),this[_0x5c045b(0x1d8)]=undefined;},Scene_Skill['prototype'][_0x54880c(0x1dd)]=function(){const _0x2cd63e=_0x54880c;if(TouchInput['isReleased']())return!![];if(Input['isTriggered']('ok'))return!![];if(Input[_0x2cd63e(0x169)](_0x2cd63e(0x10f)))return!![];if(this['_skillLearnIconSprite'][_0x2cd63e(0x146)]<0xff)return![];if(this[_0x2cd63e(0x135)])return![];return this[_0x2cd63e(0xf6)]--<=0x0;},Scene_Skill[_0x54880c(0xf9)]['processFinishSkillLearnAnimation']=function(){const _0x4a70e0=_0x54880c;this[_0x4a70e0(0x139)](),this[_0x4a70e0(0x21a)](),this[_0x4a70e0(0x2b1)](),TouchInput[_0x4a70e0(0x112)](),Input[_0x4a70e0(0x112)]();},Window_Base[_0x54880c(0xf9)][_0x54880c(0x22d)]=function(_0x1f598f,_0x1e6b74,_0x53a13a,_0x14c909,_0x218c39){const _0x44c33f=_0x54880c;_0x218c39=_0x218c39||'left';const _0x2766f7=_0x44c33f(0x2ae)[_0x44c33f(0x2ca)](ImageManager[_0x44c33f(0x120)]),_0x47aa30=TextManager[_0x44c33f(0xfb)],_0x39a801=_0x47aa30[_0x44c33f(0x2ca)](_0x1f598f,TextManager[_0x44c33f(0x1cb)],_0x2766f7,TextManager[_0x44c33f(0xfd)]),_0x5f16c4=this[_0x44c33f(0x1a1)](_0x39a801)['width'];if(_0x218c39===_0x44c33f(0x137))_0x1e6b74+=0x0;else _0x218c39===_0x44c33f(0xda)?_0x1e6b74+=Math['round']((_0x14c909-_0x5f16c4)/0x2):_0x1e6b74+=_0x14c909-_0x5f16c4;this['drawTextEx'](_0x39a801,_0x1e6b74,_0x53a13a);},Window_Base[_0x54880c(0xf9)][_0x54880c(0x242)]=function(_0x4d0d8e,_0x41440e,_0x2db6a4,_0x3eed4f,_0x3d574c,_0xff7df5){const _0xd68dd=_0x54880c,_0x538f50=_0x4d0d8e[_0xd68dd(0x15c)](_0x41440e);this[_0xd68dd(0x22d)](_0x538f50,_0x2db6a4,_0x3eed4f,_0x3d574c,_0xff7df5);},Window_Base['prototype']['drawSkillPoints']=function(_0x52a14b,_0x51efb8,_0x1cbe9e,_0x2e509a,_0x5c57a2){const _0x780cc6=_0x54880c;_0x5c57a2=_0x5c57a2||_0x780cc6(0x137);const _0x2f4ff5='\x5cI[%1]'[_0x780cc6(0x2ca)](ImageManager[_0x780cc6(0x195)]),_0x533c13=TextManager['skillPointsFmt'],_0x1d88bf=_0x533c13[_0x780cc6(0x2ca)](_0x52a14b,TextManager[_0x780cc6(0x1ba)],_0x2f4ff5,TextManager['skillPointsFull']),_0x2486e3=this[_0x780cc6(0x1a1)](_0x1d88bf)['width'];if(_0x5c57a2==='left')_0x51efb8+=0x0;else _0x5c57a2===_0x780cc6(0xda)?_0x51efb8+=Math[_0x780cc6(0x26c)]((_0x2e509a-_0x2486e3)/0x2):_0x51efb8+=_0x2e509a-_0x2486e3;this[_0x780cc6(0xfa)](_0x1d88bf,_0x51efb8,_0x1cbe9e);},Window_Base[_0x54880c(0xf9)][_0x54880c(0x1d1)]=function(_0x373e85,_0x2795a7,_0x331e4d,_0x4813bd,_0x4c3982,_0x165aa4){const _0x43ae55=_0x54880c,_0x5b7ebf=_0x373e85[_0x43ae55(0x2a3)](_0x2795a7);this[_0x43ae55(0xab)](_0x5b7ebf,_0x331e4d,_0x4813bd,_0x4c3982,_0x165aa4);},VisuMZ[_0x54880c(0x296)][_0x54880c(0x253)]=Window_SkillType[_0x54880c(0xf9)]['makeCommandList'],Window_SkillType[_0x54880c(0xf9)]['makeCommandList']=function(){const _0x3c3b24=_0x54880c;VisuMZ['SkillLearnSystem'][_0x3c3b24(0x253)][_0x3c3b24(0x2b0)](this),this[_0x3c3b24(0x2a4)]();},Window_SkillType[_0x54880c(0xf9)][_0x54880c(0x2a4)]=function(){const _0x1ae70b=_0x54880c;if(!$gameSystem['isSkillLearnSystemMenuAccess']())return;if(!this[_0x1ae70b(0x108)])return;let _0xe01d5=this[_0x1ae70b(0xd5)]();const _0x48801e=this[_0x1ae70b(0x108)][_0x1ae70b(0x2be)]()[0x0];this[_0x1ae70b(0x184)](_0xe01d5,'skill',!![],_0x1ae70b(0x267));},Window_SkillType[_0x54880c(0xf9)][_0x54880c(0xd5)]=function(){const _0x3f7ff5=_0x54880c;let _0x37c845=TextManager[_0x3f7ff5(0x142)];if(_0x37c845[_0x3f7ff5(0x251)](/\\I\[(\d+)\]/i))return _0x37c845;if(!Imported[_0x3f7ff5(0x27d)])return _0x37c845;if(this['commandStyle']()===_0x3f7ff5(0x24a))return _0x37c845;const _0x1589a9=TextManager[_0x3f7ff5(0xe5)];return _0x3f7ff5(0x217)[_0x3f7ff5(0x2ca)](_0x1589a9,_0x37c845);},VisuMZ[_0x54880c(0x296)][_0x54880c(0x25b)]=Window_SkillStatus[_0x54880c(0xf9)][_0x54880c(0x1ab)],Window_SkillStatus['prototype'][_0x54880c(0x1ab)]=function(){const _0x55cb47=_0x54880c;this['resetFontSettings'](),this[_0x55cb47(0x1c6)]()?this[_0x55cb47(0x11c)]():VisuMZ[_0x55cb47(0x296)]['Window_SkillStatus_refresh'][_0x55cb47(0x2b0)](this);},Window_SkillStatus['prototype'][_0x54880c(0x1c6)]=function(){const _0xde31c3=_0x54880c,_0x3802aa=SceneManager[_0xde31c3(0x264)];if(!_0x3802aa)return![];const _0x4b9ce7=_0x3802aa[_0xde31c3(0x21c)];if(!_0x4b9ce7)return![];return _0x4b9ce7[_0xde31c3(0x1c6)]&&_0x4b9ce7[_0xde31c3(0x1c6)]();},Window_SkillStatus[_0x54880c(0xf9)][_0x54880c(0x11c)]=function(){const _0x4b2318=_0x54880c;if(!this[_0x4b2318(0x108)])return;Window_StatusBase[_0x4b2318(0xf9)][_0x4b2318(0x1ab)]['call'](this);if(VisuMZ[_0x4b2318(0x296)]['Settings'][_0x4b2318(0xd6)][_0x4b2318(0x2c1)]){VisuMZ[_0x4b2318(0x296)][_0x4b2318(0x156)][_0x4b2318(0xd6)][_0x4b2318(0x2c1)][_0x4b2318(0x2b0)](this);return;}const _0x5d564b=this[_0x4b2318(0x167)]()/0x2,_0x3426a7=this['innerHeight'],_0x5c32a4=_0x3426a7/0x2-this[_0x4b2318(0x2cc)]()*1.5;this[_0x4b2318(0x1cf)](this['_actor'],_0x5d564b+0x1,0x0,0x90,_0x3426a7),this[_0x4b2318(0x14e)](this[_0x4b2318(0x108)],_0x5d564b+0xb4,_0x5c32a4);let _0x29a88b=this[_0x4b2318(0x167)]()/0x2+0xb4+0xb4+0xb4,_0x35cd24=this[_0x4b2318(0x243)]-_0x29a88b-0x2;if(_0x35cd24<0x12c)return;const _0x4e355e=this['getSkillLearnDisplayedCosts'](),_0x282e0b=Math['floor'](this[_0x4b2318(0x202)]/this['lineHeight']()),_0x3912ee=Math[_0x4b2318(0x1a6)](_0x4e355e[_0x4b2318(0xb1)]/_0x282e0b);let _0x13fa3e=_0x29a88b,_0x2e7e37=Math['max'](Math[_0x4b2318(0x26c)]((this[_0x4b2318(0x202)]-this[_0x4b2318(0x2cc)]()*Math[_0x4b2318(0x1a6)](_0x4e355e[_0x4b2318(0xb1)]/_0x3912ee))/0x2),0x0);const _0x1bde1f=_0x2e7e37;let _0x3aaec8=(this[_0x4b2318(0x243)]-_0x13fa3e-this['itemPadding']()*0x2*_0x3912ee)/_0x3912ee;_0x3912ee===0x1&&(_0x3aaec8=Math[_0x4b2318(0x1ca)](ImageManager['faceWidth'],_0x3aaec8),_0x13fa3e+=Math[_0x4b2318(0x26c)]((this[_0x4b2318(0x243)]-_0x13fa3e-this[_0x4b2318(0x1de)]()*0x2-_0x3aaec8)/0x2));for(const _0x5a0f4f of _0x4e355e){switch(_0x5a0f4f){case'AP':this['drawActorAbilityPoints'](this['_actor'],this[_0x4b2318(0x108)][_0x4b2318(0xcf)]()['id'],_0x13fa3e,_0x2e7e37,_0x3aaec8,'right');break;case'CP':Imported['VisuMZ_2_ClassChangeSystem']&&this[_0x4b2318(0x239)](this[_0x4b2318(0x108)],this[_0x4b2318(0x108)][_0x4b2318(0xcf)]()['id'],_0x13fa3e,_0x2e7e37,_0x3aaec8,_0x4b2318(0x21f));break;case'JP':Imported['VisuMZ_2_ClassChangeSystem']&&this[_0x4b2318(0x2c8)](this[_0x4b2318(0x108)],this[_0x4b2318(0x108)][_0x4b2318(0xcf)]()['id'],_0x13fa3e,_0x2e7e37,_0x3aaec8,'right');break;case'SP':this[_0x4b2318(0x1d1)](this[_0x4b2318(0x108)],this[_0x4b2318(0x108)]['currentClass']()['id'],_0x13fa3e,_0x2e7e37,_0x3aaec8,_0x4b2318(0x21f));break;case _0x4b2318(0x23f):this[_0x4b2318(0x1be)]($gameParty[_0x4b2318(0x2c7)](),TextManager[_0x4b2318(0x1c8)],_0x13fa3e,_0x2e7e37,_0x3aaec8);break;default:continue;}_0x2e7e37+=this[_0x4b2318(0x2cc)](),_0x2e7e37+this['lineHeight']()>this['innerHeight']&&(_0x2e7e37=_0x1bde1f,_0x13fa3e+=_0x3aaec8+this[_0x4b2318(0x1de)]()*0x2);}},Window_SkillStatus[_0x54880c(0xf9)][_0x54880c(0x2b7)]=function(){const _0x35c2fa=_0x54880c,_0x2d61e9=JsonEx[_0x35c2fa(0x28f)](VisuMZ[_0x35c2fa(0x296)][_0x35c2fa(0x156)][_0x35c2fa(0xd6)][_0x35c2fa(0xc4)]);return!Imported['VisuMZ_2_ClassChangeSystem']&&(_0x2d61e9['remove']('CP'),_0x2d61e9['remove']('JP')),_0x2d61e9[_0x35c2fa(0x278)](_0x35c2fa(0x246))['remove'](_0x35c2fa(0x114))['remove'](_0x35c2fa(0x1bb));},VisuMZ[_0x54880c(0x296)]['Window_SkillList_initialize']=Window_SkillList['prototype'][_0x54880c(0xc3)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0xc3)]=function(_0x56ace2){const _0x116079=_0x54880c;this[_0x116079(0x1b1)]=[],VisuMZ[_0x116079(0x296)]['Window_SkillList_initialize'][_0x116079(0x2b0)](this,_0x56ace2);},Window_SkillList['prototype'][_0x54880c(0x1c6)]=function(){const _0x488308=_0x54880c;return this[_0x488308(0x1a4)]==='skillLearn';},Window_SkillList[_0x54880c(0xf9)]['separateSkillLearnByStypeID']=function(){const _0x587629=_0x54880c;return VisuMZ[_0x587629(0x296)][_0x587629(0x156)]['General'][_0x587629(0x15b)]??![];},Window_SkillList['prototype'][_0x54880c(0x13e)]=function(){const _0x1b9a80=_0x54880c;return VisuMZ['SkillLearnSystem']['Settings'][_0x1b9a80(0xd6)]['SeparateIndent']??0x10;},VisuMZ[_0x54880c(0x296)][_0x54880c(0x131)]=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0xde)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0xde)]=function(_0x2abd3e){const _0x831dc2=_0x54880c;this[_0x831dc2(0x108)]!==_0x2abd3e&&(this['_collapsedStypeIDs']=[]),VisuMZ[_0x831dc2(0x296)][_0x831dc2(0x131)][_0x831dc2(0x2b0)](this,_0x2abd3e);},VisuMZ[_0x54880c(0x296)][_0x54880c(0x23c)]=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x163)],Window_SkillList[_0x54880c(0xf9)]['setStypeId']=function(_0x30119e){const _0xb26cff=_0x54880c,_0x1c40df=this[_0xb26cff(0x1c6)]();VisuMZ[_0xb26cff(0x296)][_0xb26cff(0x23c)][_0xb26cff(0x2b0)](this,_0x30119e);if(_0x1c40df!==this[_0xb26cff(0x1c6)]()){const _0x4e166d=SceneManager[_0xb26cff(0x264)];if(!_0x4e166d)return;const _0x3ac8cb=_0x4e166d[_0xb26cff(0x20f)];if(_0x3ac8cb)_0x3ac8cb[_0xb26cff(0x1ab)]();}},VisuMZ[_0x54880c(0x296)]['Window_SkillList_maxCols']=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0xa8)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0xa8)]=function(){const _0x12b06f=_0x54880c;return this['isSkillLearnMode']()?0x1:VisuMZ['SkillLearnSystem'][_0x12b06f(0x210)]['call'](this);},VisuMZ[_0x54880c(0x296)][_0x54880c(0x269)]=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x232)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x232)]=function(){const _0xa1de86=_0x54880c;this[_0xa1de86(0x108)]&&this['isSkillLearnMode']()?this[_0xa1de86(0x294)]():VisuMZ[_0xa1de86(0x296)][_0xa1de86(0x269)][_0xa1de86(0x2b0)](this);},Window_SkillList[_0x54880c(0xf9)]['makeSkillLearnList']=function(){const _0xb96aef=_0x54880c,_0x32a4a6=this[_0xb96aef(0x22f)](),_0x4a65ab=DataManager[_0xb96aef(0x272)](this[_0xb96aef(0x108)][_0xb96aef(0xcf)]()['id']);_0x32a4a6?this[_0xb96aef(0x119)](_0x4a65ab):this[_0xb96aef(0x28a)]=_0x4a65ab[_0xb96aef(0x216)](_0x12732f=>$dataSkills[_0x12732f])[_0xb96aef(0xe8)](_0x237a2e=>this[_0xb96aef(0x152)](_0x237a2e));if(Imported[_0xb96aef(0x21b)]){let _0x14477c=!![];if(this[_0xb96aef(0x22f)]()){this[_0xb96aef(0xcd)](_0xb96aef(0xc8));if(this['_collapsedStypeIDs']['includes'](_0xb96aef(0xc8)))_0x14477c=![];}const _0x50d1b2=DataManager[_0xb96aef(0x2a5)](this[_0xb96aef(0x108)][_0xb96aef(0xcf)]()['id']),_0x19c9a6=_0x50d1b2[_0xb96aef(0x216)](_0x1ddec4=>$dataStates[_0x1ddec4])[_0xb96aef(0xe8)](_0x427546=>this[_0xb96aef(0x152)](_0x427546));if(_0x19c9a6['length']>0x0&&_0x14477c)this[_0xb96aef(0x103)]();else this['separateSkillLearnByStypeID']()&&_0x19c9a6['length']<=0x0&&this[_0xb96aef(0x28a)][_0xb96aef(0x19b)]();}},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x119)]=function(_0x447613){const _0x3969b6=_0x54880c;this['_data']=[];const _0x318067=_0x447613[_0x3969b6(0x216)](_0x598777=>$dataSkills[_0x598777]?$dataSkills[_0x598777][_0x3969b6(0x27e)]:0x0)[_0x3969b6(0x278)](0x0)[_0x3969b6(0xe8)]((_0x432de6,_0x44bb45,_0xf1a785)=>_0xf1a785[_0x3969b6(0x141)](_0x432de6)===_0x44bb45)['sort']((_0x1ae1c7,_0x18ef7d)=>_0x1ae1c7-_0x18ef7d);for(const _0x27b20d of _0x318067){this[_0x3969b6(0xcd)](_0x27b20d);const _0xd6133c=_0x447613[_0x3969b6(0x216)](_0x3207a2=>$dataSkills[_0x3207a2])[_0x3969b6(0xe8)](_0x45f4c9=>this[_0x3969b6(0x152)](_0x45f4c9)&&_0x45f4c9['stypeId']===_0x27b20d);_0xd6133c[_0x3969b6(0xb1)]<=0x0&&this['_data'][_0x3969b6(0x19b)]();if(this['_collapsedStypeIDs']['includes'](_0x27b20d))continue;this['_data']=this[_0x3969b6(0x28a)][_0x3969b6(0x187)](_0xd6133c);}},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0xcd)]=function(_0x27d55f){const _0x35afdb=_0x54880c,_0x16e17d=VisuMZ[_0x35afdb(0x10a)][_0x35afdb(0x156)][_0x35afdb(0x28b)],_0x91d927=$dataSystem[_0x35afdb(0xcc)][_0x35afdb(0x152)](_0x27d55f);let _0x522705=_0x91d927?_0x16e17d['IconStypeMagic']:_0x16e17d[_0x35afdb(0x127)];_0x27d55f===_0x35afdb(0xc8)&&(_0x522705=ImageManager[_0x35afdb(0x293)]['icon']);let _0x396a18=$dataSystem[_0x35afdb(0x2be)][_0x27d55f];_0x27d55f==='passives'&&(_0x396a18=TextManager['EQUIP_PASSIVE_SYS'][_0x35afdb(0x25d)]),_0x396a18[_0x35afdb(0x251)](/\\I\[(\d+)\]/i)&&(_0x522705=Number(RegExp['$1']),_0x396a18=_0x396a18['replace'](/\\I\[(\d+)\]/gi,'')[_0x35afdb(0x110)]()),_0x27d55f!==_0x35afdb(0xc8)&&(_0x396a18=TextManager['skillLearnStypeCategory']['format'](_0x396a18)),this[_0x35afdb(0x28a)][_0x35afdb(0x2c0)]({'id':-0x1,'name':_0x396a18,'iconIndex':_0x522705,'description':'','disabled':!![],'stypeCategory':!![],'stypeId':_0x27d55f,'note':_0x35afdb(0x1f2)[_0x35afdb(0x2ca)](TextManager[_0x35afdb(0x1b2)])});},VisuMZ[_0x54880c(0x296)]['Window_SkillList_alterSkillName']=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x1cc)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x1cc)]=function(_0x1b73eb){const _0x1635ca=_0x54880c;VisuMZ[_0x1635ca(0x296)][_0x1635ca(0x2a1)]['call'](this,_0x1b73eb);if(!_0x1b73eb)return;if(!_0x1b73eb['stypeCategory'])return;let _0x11837a=_0x1b73eb[_0x1635ca(0x271)];const _0x4a63b2=this[_0x1635ca(0x1b1)][_0x1635ca(0x152)](_0x1b73eb[_0x1635ca(0x27e)]);_0x4a63b2?_0x11837a=TextManager[_0x1635ca(0xca)][_0x1635ca(0x2ca)](_0x11837a):_0x11837a=TextManager['skillLearnStypeCategoryCollapse'][_0x1635ca(0x2ca)](_0x11837a),_0x1b73eb[_0x1635ca(0x271)]=_0x11837a;},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x2bf)]=function(){const _0x34d03a=_0x54880c,_0x56ae7d=this[_0x34d03a(0x2c6)](),_0x102132=_0x56ae7d[_0x34d03a(0x27e)];this['_collapsedStypeIDs'][_0x34d03a(0x152)](_0x102132)?this[_0x34d03a(0x1b1)][_0x34d03a(0x278)](_0x102132):this['_collapsedStypeIDs'][_0x34d03a(0x2c0)](_0x102132),this[_0x34d03a(0x1ab)]();},VisuMZ[_0x54880c(0x296)][_0x54880c(0x2c2)]=Window_SkillList['prototype'][_0x54880c(0x152)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x152)]=function(_0x5368a6){const _0x40d96d=_0x54880c;return this[_0x40d96d(0x1c6)]()?this[_0x40d96d(0xfc)](_0x5368a6):VisuMZ[_0x40d96d(0x296)][_0x40d96d(0x2c2)][_0x40d96d(0x2b0)](this,_0x5368a6);},Window_SkillList[_0x54880c(0xf9)]['skillLearnIncludes']=function(_0x446fe8){const _0x57b7d7=_0x54880c;if(!_0x446fe8)return![];if(_0x446fe8[_0x57b7d7(0x271)]['length']<=0x0)return![];if(_0x446fe8['name'][_0x57b7d7(0x251)](/-----/i))return![];if(VisuMZ[_0x57b7d7(0x296)][_0x57b7d7(0x156)][_0x57b7d7(0xd6)][_0x57b7d7(0xc7)]){if(DataManager[_0x57b7d7(0x15f)](_0x446fe8)){if(this['_actor'][_0x57b7d7(0x2a2)](_0x446fe8['id']))return![];}if(_0x446fe8&&_0x446fe8[_0x57b7d7(0x1b5)]!==undefined&&Imported['VisuMZ_2_EquipPassiveSys']){if(this[_0x57b7d7(0x108)][_0x57b7d7(0x1ad)](_0x446fe8))return![];}}const _0x5b954b=VisuMZ[_0x57b7d7(0x296)][_0x57b7d7(0xe4)](_0x446fe8,'jsLearnShow');if(VisuMZ[_0x57b7d7(0x296)]['JS'][_0x5b954b]){if(!VisuMZ[_0x57b7d7(0x296)]['JS'][_0x5b954b][_0x57b7d7(0x2b0)](this,this[_0x57b7d7(0x108)],_0x446fe8))return![];}const _0x4d6dc1=VisuMZ[_0x57b7d7(0x296)][_0x57b7d7(0x25f)],_0x543642=_0x446fe8[_0x57b7d7(0x1e5)];if(_0x543642[_0x57b7d7(0x251)](_0x4d6dc1['LearnShowLevel'])){const _0x4e9339=Number(RegExp['$1']);if(_0x4e9339>this[_0x57b7d7(0x108)]['level'])return![];}if(_0x543642[_0x57b7d7(0x251)](_0x4d6dc1['LearnShowSkillsAll'])){const _0x4877a1=String(RegExp['$1'])[_0x57b7d7(0x1b0)](',')[_0x57b7d7(0x216)](_0x161b66=>_0x161b66[_0x57b7d7(0x110)]());;for(const _0x2bf403 of _0x4877a1){let _0x439f11=0x0;const _0x1a7395=/^\d+$/['test'](_0x2bf403);_0x1a7395?_0x439f11=Number(_0x2bf403):_0x439f11=DataManager[_0x57b7d7(0x174)](_0x2bf403);if(!this[_0x57b7d7(0x108)]['isLearnedSkill'](_0x439f11))return![];}}if(_0x543642[_0x57b7d7(0x251)](_0x4d6dc1['LearnShowSkillsAny'])){const _0x3019dc=String(RegExp['$1'])['split'](',')[_0x57b7d7(0x216)](_0x43df31=>_0x43df31[_0x57b7d7(0x110)]());;let _0x23f6e9=![];for(const _0x5c7ad9 of _0x3019dc){let _0x441acb=0x0;const _0x1eef85=/^\d+$/[_0x57b7d7(0x15d)](_0x5c7ad9);_0x1eef85?_0x441acb=Number(_0x5c7ad9):_0x441acb=DataManager[_0x57b7d7(0x174)](_0x5c7ad9);if(this['_actor']['isLearnedSkill'](_0x441acb)){_0x23f6e9=!![];break;}}if(!_0x23f6e9)return![];}if(_0x543642['match'](_0x4d6dc1[_0x57b7d7(0x212)])){const _0xda7f93=String(RegExp['$1'])['split'](',')['map'](_0x51859c=>Number(_0x51859c));for(const _0x24e7a2 of _0xda7f93){if(!$gameSwitches[_0x57b7d7(0x1da)](_0x24e7a2))return![];}}if(_0x543642[_0x57b7d7(0x251)](_0x4d6dc1[_0x57b7d7(0x18d)])){const _0x17c5f7=String(RegExp['$1'])[_0x57b7d7(0x1b0)](',')[_0x57b7d7(0x216)](_0x3199ff=>Number(_0x3199ff));let _0x3d3089=![];for(const _0x35cde8 of _0x17c5f7){if($gameSwitches['value'](_0x35cde8)){_0x3d3089=!![];break;}}if(!_0x3d3089)return![];}return _0x446fe8;},VisuMZ[_0x54880c(0x296)][_0x54880c(0x245)]=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x2b4)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x2b4)]=function(_0xc1c750){const _0x43a8f8=_0x54880c;return this[_0x43a8f8(0x108)]&&this[_0x43a8f8(0x1c6)]()?this[_0x43a8f8(0x190)](_0xc1c750):VisuMZ[_0x43a8f8(0x296)][_0x43a8f8(0x245)][_0x43a8f8(0x2b0)](this,_0xc1c750);},VisuMZ['SkillLearnSystem'][_0x54880c(0xaf)]=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x252)],Window_SkillList['prototype'][_0x54880c(0x252)]=function(_0x47936a){const _0x98ce7f=_0x54880c;this[_0x98ce7f(0x17a)]=this[_0x98ce7f(0x1c6)]();if(this[_0x98ce7f(0x1c6)]()&&this[_0x98ce7f(0x22f)]()){const _0x1ed249=this[_0x98ce7f(0x28a)][_0x47936a];this['_indentSkillLearnRect']=!_0x1ed249[_0x98ce7f(0x153)];}VisuMZ[_0x98ce7f(0x296)][_0x98ce7f(0xaf)]['call'](this,_0x47936a),this[_0x98ce7f(0x17a)]=![],this[_0x98ce7f(0x1c6)]()&&this[_0x98ce7f(0x22f)]()&&(this[_0x98ce7f(0x140)]=undefined);},VisuMZ[_0x54880c(0x296)]['Window_SkillList_itemLineRect']=Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x116)],Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x116)]=function(_0x120d1b){const _0x50469b=_0x54880c,_0x76a33f=VisuMZ[_0x50469b(0x296)][_0x50469b(0xbc)]['call'](this,_0x120d1b);if(this[_0x50469b(0x140)]){const _0x3b9535=this[_0x50469b(0x13e)]();_0x76a33f['x']+=_0x3b9535,_0x76a33f[_0x50469b(0x14d)]-=_0x3b9535;}return _0x76a33f;},Window_SkillList['prototype']['isSkillLearnEnabled']=function(_0x20bc2a){const _0x44cb09=_0x54880c;if(!_0x20bc2a)return![];if(_0x20bc2a[_0x44cb09(0x271)][_0x44cb09(0xb1)]<=0x0)return![];if(_0x20bc2a['name'][_0x44cb09(0x251)](/-----/i))return![];if(DataManager[_0x44cb09(0x15f)](_0x20bc2a)){if(this[_0x44cb09(0x108)][_0x44cb09(0x2a2)](_0x20bc2a['id']))return![];}if(Imported[_0x44cb09(0x21b)]&&DataManager[_0x44cb09(0xbf)](_0x20bc2a)){if(this[_0x44cb09(0x108)][_0x44cb09(0x1ad)](_0x20bc2a))return![];}if(this[_0x44cb09(0x17a)]){if(!this[_0x44cb09(0x108)][_0x44cb09(0x1c2)](_0x20bc2a))return![];return this['_actor'][_0x44cb09(0x1df)](_0x20bc2a);}return!![];},VisuMZ[_0x54880c(0x296)]['Window_SkillList_drawSkillCost']=Window_SkillList['prototype'][_0x54880c(0x2b2)],Window_SkillList['prototype'][_0x54880c(0x2b2)]=function(_0x564e25,_0x2f8546,_0xcc5501,_0x47528b){const _0x580f7e=_0x54880c;this[_0x580f7e(0x1c6)]()?this[_0x580f7e(0xd2)](_0x564e25)?this['drawSkillLearnRequirements'](_0x564e25,_0x2f8546,_0xcc5501,_0x47528b):this[_0x580f7e(0x1fb)](_0x564e25,_0x2f8546,_0xcc5501,_0x47528b):VisuMZ[_0x580f7e(0x296)][_0x580f7e(0x10e)]['call'](this,_0x564e25,_0x2f8546,_0xcc5501,_0x47528b);},Window_SkillList['prototype'][_0x54880c(0xd2)]=function(_0x1cf562){const _0x25cbfd=_0x54880c;return this['_actor']&&!this['_actor'][_0x25cbfd(0x1c2)](_0x1cf562);},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x122)]=function(_0x4df6a0,_0x541857,_0x2b9f3e,_0x3ff8c9){const _0x1306aa=_0x54880c,_0x1ea141=this['getSkillLearnRequirementText'](_0x4df6a0),_0x1cc926=this[_0x1306aa(0x1a1)](_0x1ea141)[_0x1306aa(0x14d)];_0x541857+=_0x3ff8c9-_0x1cc926,this[_0x1306aa(0xfa)](_0x1ea141,_0x541857,_0x2b9f3e);},Window_SkillList['prototype'][_0x54880c(0xee)]=function(_0x24aa8c){const _0x332f99=_0x54880c,_0x153228=VisuMZ['SkillLearnSystem'][_0x332f99(0x156)][_0x332f99(0xd6)],_0x5ae95a=TextManager[_0x332f99(0x154)],_0x1df28d=VisuMZ[_0x332f99(0x296)]['RegExp'],_0x26d207=_0x24aa8c[_0x332f99(0x1e5)];let _0x25404b='',_0x596f21='';const _0x111c00=[_0x332f99(0xf5),'SKILLS',_0x332f99(0xa9),_0x332f99(0xdd)];for(const _0x3534a0 of _0x111c00){switch(_0x3534a0){case'LEVEL':if(_0x26d207['match'](_0x1df28d['LearnReqLevel'])){const _0xa56f86=Number(RegExp['$1']);_0x596f21=TextManager[_0x332f99(0x133)][_0x332f99(0x2ca)](_0xa56f86,TextManager['level'],TextManager[_0x332f99(0x235)]),_0x596f21[_0x332f99(0xb1)]>0x0&&(_0x25404b!==''?_0x25404b=_0x5ae95a['format'](_0x25404b,_0x596f21):_0x25404b=_0x596f21);}break;case'SKILLS':if(_0x26d207[_0x332f99(0x251)](_0x1df28d[_0x332f99(0x207)])){const _0x20f319=String(RegExp['$1'])['split'](',')[_0x332f99(0x216)](_0x423db2=>_0x423db2['trim']());;for(const _0x477d33 of _0x20f319){let _0x46b36b=0x0;const _0x10b3f7=/^\d+$/[_0x332f99(0x15d)](_0x477d33);_0x10b3f7?_0x46b36b=Number(_0x477d33):_0x46b36b=DataManager['getSkillIdWithName'](_0x477d33);if($dataSkills[_0x46b36b]){const _0x3e8824=$dataSkills[_0x46b36b];_0x596f21=TextManager['skillLearnReqSkillFmt'][_0x332f99(0x2ca)]('\x5cI[%1]'[_0x332f99(0x2ca)](_0x3e8824[_0x332f99(0xf0)]),_0x3e8824[_0x332f99(0x271)]),_0x596f21[_0x332f99(0xb1)]>0x0&&(_0x25404b!==''?_0x25404b=_0x5ae95a[_0x332f99(0x2ca)](_0x25404b,_0x596f21):_0x25404b=_0x596f21);}}}if(_0x26d207[_0x332f99(0x251)](_0x1df28d[_0x332f99(0x279)])){const _0x45fc6d=String(RegExp['$1'])[_0x332f99(0x1b0)](',')[_0x332f99(0x216)](_0x5ad0eb=>_0x5ad0eb[_0x332f99(0x110)]());;for(const _0x8966b0 of _0x45fc6d){let _0x3911f6=0x0;const _0x2861fe=/^\d+$/['test'](_0x8966b0);_0x2861fe?_0x3911f6=Number(_0x8966b0):_0x3911f6=DataManager[_0x332f99(0x174)](_0x8966b0);if($dataSkills[_0x3911f6]){const _0x2e4a36=$dataSkills[_0x3911f6];_0x596f21=TextManager[_0x332f99(0x18a)][_0x332f99(0x2ca)](_0x332f99(0x2ae)['format'](_0x2e4a36[_0x332f99(0xf0)]),_0x2e4a36[_0x332f99(0x271)]),_0x596f21['length']>0x0&&(_0x25404b!==''?_0x25404b=_0x5ae95a[_0x332f99(0x2ca)](_0x25404b,_0x596f21):_0x25404b=_0x596f21);}}}break;case _0x332f99(0xa9):if(_0x26d207[_0x332f99(0x251)](_0x1df28d['LearnReqSwitchesAll'])){const _0x5a4f45=String(RegExp['$1'])[_0x332f99(0x1b0)](',')[_0x332f99(0x216)](_0x15fde4=>_0x15fde4[_0x332f99(0x110)]());;for(const _0x46aca2 of _0x5a4f45){$dataSystem[_0x332f99(0x1fa)][_0x46aca2]&&(_0x596f21=TextManager['skillLearnReqSwitchFmt'][_0x332f99(0x2ca)]($dataSystem[_0x332f99(0x1fa)][_0x46aca2]||''),_0x596f21['length']>0x0&&(_0x25404b!==''?_0x25404b=_0x5ae95a['format'](_0x25404b,_0x596f21):_0x25404b=_0x596f21));}}if(_0x26d207[_0x332f99(0x251)](_0x1df28d[_0x332f99(0x17f)])){const _0x406269=String(RegExp['$1'])[_0x332f99(0x1b0)](',')['map'](_0x44b2ba=>_0x44b2ba[_0x332f99(0x110)]());;for(const _0x4c7a2b of _0x406269){$dataSystem['switches'][_0x4c7a2b]&&(_0x596f21=TextManager['skillLearnReqSwitchFmt'][_0x332f99(0x2ca)]($dataSystem['switches'][_0x4c7a2b]||''),_0x596f21[_0x332f99(0xb1)]>0x0&&(_0x25404b!==''?_0x25404b=_0x5ae95a['format'](_0x25404b,_0x596f21):_0x25404b=_0x596f21));}}break;case _0x332f99(0xdd):const _0x5f1e55=VisuMZ[_0x332f99(0x296)]['createKeyJS'](_0x24aa8c,_0x332f99(0xdf));VisuMZ[_0x332f99(0x296)]['JS'][_0x5f1e55]&&(_0x596f21=VisuMZ[_0x332f99(0x296)]['JS'][_0x5f1e55]['call'](this,this[_0x332f99(0x108)],_0x24aa8c),_0x596f21[_0x332f99(0xb1)]>0x0&&(_0x25404b!==''?_0x25404b=_0x5ae95a[_0x332f99(0x2ca)](_0x25404b,_0x596f21):_0x25404b=_0x596f21));break;}}return _0x25404b=TextManager[_0x332f99(0x2c5)][_0x332f99(0x2ca)](_0x25404b),_0x25404b['trim']();},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x1fb)]=function(_0xbb67c6,_0x2205e9,_0x181c7c,_0x7ae5f7){const _0x461699=_0x54880c,_0x12b53a=this[_0x461699(0x230)](_0xbb67c6),_0x2b96ab=this[_0x461699(0x1a1)](_0x12b53a)[_0x461699(0x14d)];_0x2205e9+=_0x7ae5f7-_0x2b96ab,this[_0x461699(0xfa)](_0x12b53a,_0x2205e9,_0x181c7c);},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x230)]=function(_0xc8e017){const _0x3a3c75=_0x54880c;if(this[_0x3a3c75(0x108)]){if(DataManager[_0x3a3c75(0x15f)](_0xc8e017)&&this['_actor'][_0x3a3c75(0x2a2)](_0xc8e017['id']))return TextManager[_0x3a3c75(0x225)];if(DataManager['isState'](_0xc8e017)&&this[_0x3a3c75(0x108)][_0x3a3c75(0x1ad)](_0xc8e017))return TextManager[_0x3a3c75(0x225)];}const _0x493b69=VisuMZ[_0x3a3c75(0x296)][_0x3a3c75(0x156)]['General'],_0x349350=TextManager[_0x3a3c75(0x2cf)];let _0x4ce997='';const _0x27a21=JsonEx[_0x3a3c75(0x28f)](_0x493b69['DisplayedCosts']);_0x27a21[_0x3a3c75(0x2c0)](_0x3a3c75(0x17c));for(const _0x5518c7 of _0x27a21){if(!_0x5518c7)continue;const _0x99f4ee=this[_0x3a3c75(0x111)](_0xc8e017,_0x5518c7)[_0x3a3c75(0x110)]();_0x99f4ee[_0x3a3c75(0xb1)]>0x0&&(_0x4ce997!==''?_0x4ce997=_0x349350[_0x3a3c75(0x2ca)](_0x4ce997,_0x99f4ee):_0x4ce997=_0x99f4ee);}return _0x4ce997[_0x3a3c75(0x110)]();},Window_SkillList[_0x54880c(0xf9)][_0x54880c(0x111)]=function(_0x4e39c0,_0x53ecfb){const _0x3cc0e8=_0x54880c;let _0x5757ad=0x0,_0x352efa='',_0x2a55ad='';switch(_0x53ecfb[_0x3cc0e8(0x16f)]()[_0x3cc0e8(0x110)]()){case'AP':_0x5757ad=DataManager['getSkillLearnAbilityPointCost'](_0x4e39c0);if(_0x5757ad>0x0)return _0x352efa=TextManager['abilityPointsFmt'],_0x352efa['format'](_0x5757ad,TextManager['abilityPointsAbbr'],_0x3cc0e8(0x2ae)[_0x3cc0e8(0x2ca)](ImageManager[_0x3cc0e8(0x120)]),TextManager[_0x3cc0e8(0xfd)]);break;case'SP':_0x5757ad=DataManager[_0x3cc0e8(0x23d)](_0x4e39c0);if(_0x5757ad>0x0)return _0x352efa=TextManager['skillPointsFmt'],_0x352efa['format'](_0x5757ad,TextManager[_0x3cc0e8(0x1ba)],'\x5cI[%1]'[_0x3cc0e8(0x2ca)](ImageManager[_0x3cc0e8(0x195)]),TextManager[_0x3cc0e8(0x280)]);break;case _0x3cc0e8(0x13f):_0x5757ad=DataManager[_0x3cc0e8(0x1f4)](_0x4e39c0),_0x352efa=TextManager[_0x3cc0e8(0x196)];for(const _0x8fdd44 of _0x5757ad){if(!_0x8fdd44)continue;const _0x548bbe=$dataItems[_0x8fdd44['id']];if(!_0x548bbe)continue;const _0x16f057=_0x352efa[_0x3cc0e8(0x2ca)](_0x8fdd44[_0x3cc0e8(0x1a5)],'\x5cI[%1]'[_0x3cc0e8(0x2ca)](_0x548bbe[_0x3cc0e8(0xf0)]),_0x548bbe['name']);_0x2a55ad!==''?_0x2a55ad=TextManager['skillLearnSeparationFmt'][_0x3cc0e8(0x2ca)](_0x2a55ad,_0x16f057):_0x2a55ad=_0x16f057;}return _0x2a55ad;case _0x3cc0e8(0xd9):_0x5757ad=DataManager[_0x3cc0e8(0x13d)](_0x4e39c0),_0x352efa=TextManager[_0x3cc0e8(0x25a)];for(const _0x18d092 of _0x5757ad){if(!_0x18d092)continue;const _0x445d54=$dataWeapons[_0x18d092['id']];if(!_0x445d54)continue;const _0x3985e8=_0x352efa['format'](_0x18d092[_0x3cc0e8(0x1a5)],_0x3cc0e8(0x2ae)['format'](_0x445d54[_0x3cc0e8(0xf0)]),_0x445d54[_0x3cc0e8(0x271)]);_0x2a55ad!==''?_0x2a55ad=TextManager[_0x3cc0e8(0x2cf)]['format'](_0x2a55ad,_0x3985e8):_0x2a55ad=_0x3985e8;}return _0x2a55ad;case'ARMOR':_0x5757ad=DataManager[_0x3cc0e8(0xed)](_0x4e39c0),_0x352efa=TextManager['skillLearnArmorFmt'];for(const _0x12f7c7 of _0x5757ad){if(!_0x12f7c7)continue;const _0x24ce7d=$dataArmors[_0x12f7c7['id']];if(!_0x24ce7d)continue;const _0x307fd2=_0x352efa[_0x3cc0e8(0x2ca)](_0x12f7c7['quantity'],_0x3cc0e8(0x2ae)['format'](_0x24ce7d[_0x3cc0e8(0xf0)]),_0x24ce7d[_0x3cc0e8(0x271)]);_0x2a55ad!==''?_0x2a55ad=TextManager['skillLearnSeparationFmt'][_0x3cc0e8(0x2ca)](_0x2a55ad,_0x307fd2):_0x2a55ad=_0x307fd2;}return _0x2a55ad;case _0x3cc0e8(0x2d0):_0x5757ad=DataManager[_0x3cc0e8(0x105)](_0x4e39c0);if(_0x5757ad>0x0)return _0x352efa=TextManager['skillLearnGoldFmt'],_0x352efa[_0x3cc0e8(0x2ca)](_0x5757ad,Imported[_0x3cc0e8(0x166)]?_0x3cc0e8(0x2ae)[_0x3cc0e8(0x2ca)](VisuMZ['CoreEngine'][_0x3cc0e8(0x156)][_0x3cc0e8(0x23f)]['GoldIcon']):TextManager[_0x3cc0e8(0x1c8)],TextManager[_0x3cc0e8(0x1c8)]);break;case _0x3cc0e8(0xdd):const _0x493c92=VisuMZ[_0x3cc0e8(0x296)]['createKeyJS'](_0x4e39c0,_0x3cc0e8(0xe9));if(VisuMZ[_0x3cc0e8(0x296)]['JS'][_0x493c92])return VisuMZ['SkillLearnSystem']['JS'][_0x493c92][_0x3cc0e8(0x2b0)](this,this[_0x3cc0e8(0x108)],_0x4e39c0);break;case'CP':if(Imported[_0x3cc0e8(0xe7)]){_0x5757ad=DataManager[_0x3cc0e8(0x1b7)](_0x4e39c0);if(_0x5757ad>0x0)return _0x352efa=TextManager[_0x3cc0e8(0xea)],_0x352efa[_0x3cc0e8(0x2ca)](_0x5757ad,TextManager[_0x3cc0e8(0x1a3)],_0x3cc0e8(0x2ae)['format'](ImageManager[_0x3cc0e8(0x2c3)]),TextManager['classPointsFull']);break;}case'JP':if(Imported[_0x3cc0e8(0xe7)]){_0x5757ad=DataManager[_0x3cc0e8(0x16c)](_0x4e39c0);if(_0x5757ad>0x0)return _0x352efa=TextManager[_0x3cc0e8(0xd4)],_0x352efa['format'](_0x5757ad,TextManager['jobPointsAbbr'],_0x3cc0e8(0x2ae)['format'](ImageManager[_0x3cc0e8(0xd1)]),TextManager[_0x3cc0e8(0xad)]);break;}}return'';},Window_ActorCommand[_0x54880c(0xf9)][_0x54880c(0x1c6)]=function(){return![];};function Window_SkillLearnIngredients(){const _0x23f678=_0x54880c;this[_0x23f678(0xc3)](...arguments);}Window_SkillLearnIngredients[_0x54880c(0xf9)]=Object[_0x54880c(0xe6)](Window_Base[_0x54880c(0xf9)]),Window_SkillLearnIngredients[_0x54880c(0xf9)][_0x54880c(0x1d7)]=Window_SkillLearnIngredients,Window_SkillLearnIngredients[_0x54880c(0xf9)][_0x54880c(0xc3)]=function(_0x12a5e0){const _0xdb2b52=_0x54880c;Window_Base[_0xdb2b52(0xf9)]['initialize']['call'](this,_0x12a5e0);},Window_SkillLearnIngredients[_0x54880c(0xf9)][_0x54880c(0x1ab)]=function(){const _0x3d8366=_0x54880c;this[_0x3d8366(0xb3)][_0x3d8366(0x112)](),this[_0x3d8366(0x262)](),this['shouldDrawRequirements']()?this[_0x3d8366(0x28e)]():this[_0x3d8366(0xd7)]();},Window_SkillLearnIngredients[_0x54880c(0xf9)]['drawTextExCenterAlign']=function(_0x39b658,_0x20ca5c,_0x1c6794,_0x4c0728){const _0x405285=_0x54880c,_0x40e247=this[_0x405285(0x1a1)](_0x39b658)['width'],_0x474785=_0x20ca5c+Math[_0x405285(0x26c)]((_0x4c0728-_0x40e247)/0x2);this['drawTextEx'](_0x39b658,_0x474785,_0x1c6794);},Window_SkillLearnIngredients[_0x54880c(0xf9)][_0x54880c(0x233)]=function(_0x5d123c,_0x5bd3fa,_0x529fc3,_0x2a2771){const _0x45b02c=_0x54880c,_0x3ecb78=this[_0x45b02c(0x1a1)](_0x5d123c)[_0x45b02c(0x14d)],_0x209002=_0x5bd3fa+Math[_0x45b02c(0x26c)](_0x2a2771-_0x3ecb78);this[_0x45b02c(0xfa)](_0x5d123c,_0x209002,_0x529fc3);},Window_SkillLearnIngredients['prototype'][_0x54880c(0x1b6)]=function(){const _0x4fe31c=_0x54880c,_0x117ff8=SceneManager['_scene'][_0x4fe31c(0x2c6)](),_0x392db9=SceneManager[_0x4fe31c(0x264)][_0x4fe31c(0xb2)]();return _0x392db9&&!_0x392db9[_0x4fe31c(0x1c2)](_0x117ff8);},Window_SkillLearnIngredients[_0x54880c(0xf9)]['drawRequirements']=function(){const _0x549949=_0x54880c,_0x23f39a=SceneManager[_0x549949(0x264)][_0x549949(0x2c6)](),_0x34336d=VisuMZ[_0x549949(0x296)][_0x549949(0x25f)],_0x30a515=_0x23f39a[_0x549949(0x1e5)],_0x577ed8=SceneManager[_0x549949(0x264)][_0x549949(0xb2)](),_0x5cc58c=this[_0x549949(0x2cc)](),_0x5a0c31=TextManager[_0x549949(0x176)],_0x585a58=TextManager[_0x549949(0x155)];let _0x5c3a10=0x0,_0x5bd966=0x0;const _0x4a20a8=_0x549949(0x2ae)[_0x549949(0x2ca)](_0x23f39a[_0x549949(0xf0)]),_0x2066d2=TextManager[_0x549949(0xb8)]['format'](_0x4a20a8,_0x23f39a[_0x549949(0x271)]);this[_0x549949(0x11d)](_0x2066d2,_0x5c3a10,_0x5bd966,this[_0x549949(0x243)]),_0x5bd966+=Math['round'](_0x5cc58c*1.5);let _0x334111='';if(_0x30a515[_0x549949(0x251)](_0x34336d['LearnReqLevel'])){const _0x5c710f=Number(RegExp['$1']),_0x1d3222=TextManager[_0x549949(0x1c1)][_0x549949(0x2ca)](_0x5c710f,TextManager[_0x549949(0x2b3)],TextManager[_0x549949(0x235)]),_0x84f675=_0x577ed8[_0x549949(0x2b3)]>=_0x5c710f?_0x5a0c31:_0x585a58;_0x334111+=_0x84f675[_0x549949(0x2ca)](_0x1d3222)+'\x0a';}if(_0x30a515[_0x549949(0x251)](_0x34336d[_0x549949(0x207)])){const _0x44658f=String(RegExp['$1'])['split'](',')[_0x549949(0x216)](_0xad7e54=>_0xad7e54[_0x549949(0x110)]());;for(const _0x3fb763 of _0x44658f){let _0x7b5ec2=0x0;const _0x43fa44=/^\d+$/[_0x549949(0x15d)](_0x3fb763);_0x43fa44?_0x7b5ec2=Number(_0x3fb763):_0x7b5ec2=DataManager['getSkillIdWithName'](_0x3fb763);const _0xac3a5c=$dataSkills[_0x7b5ec2];if(_0xac3a5c){const _0x34d9ae=TextManager['skillLearnReqListSkill'][_0x549949(0x2ca)](_0x549949(0x2ae)[_0x549949(0x2ca)](_0xac3a5c['iconIndex']),_0xac3a5c['name']),_0x48aff0=_0x577ed8[_0x549949(0x2a2)](_0x7b5ec2)?_0x5a0c31:_0x585a58;_0x334111+=_0x48aff0[_0x549949(0x2ca)](_0x34d9ae)+'\x0a';}}}if(_0x30a515[_0x549949(0x251)](_0x34336d['LearnReqSkillsAny'])){const _0x4ab4f4=String(RegExp['$1'])['split'](',')[_0x549949(0x216)](_0xafd539=>_0xafd539[_0x549949(0x110)]());;for(const _0x23b405 of _0x4ab4f4){let _0xcb5d26=0x0;const _0x4187b5=/^\d+$/[_0x549949(0x15d)](_0x23b405);_0x4187b5?_0xcb5d26=Number(_0x23b405):_0xcb5d26=DataManager['getSkillIdWithName'](_0x23b405);const _0x550f8a=$dataSkills[_0xcb5d26];if(_0x550f8a){const _0x5002bf=TextManager[_0x549949(0x292)][_0x549949(0x2ca)](_0x549949(0x2ae)['format'](_0x550f8a[_0x549949(0xf0)]),_0x550f8a[_0x549949(0x271)]),_0x4ee505=_0x577ed8[_0x549949(0x2a2)](_0xcb5d26)?_0x5a0c31:_0x585a58;_0x334111+=_0x4ee505[_0x549949(0x2ca)](_0x5002bf)+'\x0a';}}}if(_0x30a515['match'](_0x34336d[_0x549949(0x101)])){const _0x3a8cf1=String(RegExp['$1'])[_0x549949(0x1b0)](',')[_0x549949(0x216)](_0x41d16d=>Number(_0x41d16d));for(const _0x26f2d8 of _0x3a8cf1){const _0x4d9b9b=$dataSystem['switches'][_0x26f2d8],_0x2c031e=$gameSwitches[_0x549949(0x1da)](_0x26f2d8)?_0x5a0c31:_0x585a58;_0x334111+=_0x2c031e['format'](_0x4d9b9b)+'\x0a';}}if(_0x30a515[_0x549949(0x251)](_0x34336d[_0x549949(0x17f)])){const _0x135eba=String(RegExp['$1'])[_0x549949(0x1b0)](',')[_0x549949(0x216)](_0x1fdb4f=>Number(_0x1fdb4f));for(const _0x4385fd of _0x135eba){const _0x1aed9e=$dataSystem['switches'][_0x4385fd],_0x23a76c=$gameSwitches[_0x549949(0x1da)](_0x4385fd)?_0x5a0c31:_0x585a58;_0x334111+=_0x23a76c[_0x549949(0x2ca)](_0x1aed9e)+'\x0a';}}const _0x456193=VisuMZ[_0x549949(0x296)][_0x549949(0xe4)](_0x23f39a,_0x549949(0x13b));if(VisuMZ[_0x549949(0x296)]['JS'][_0x456193]){const _0x213c02=VisuMZ[_0x549949(0x296)]['JS'][_0x456193][_0x549949(0x2b0)](this,_0x577ed8,_0x23f39a);_0x334111+=_0x213c02+'\x0a';}this['drawTextExCenterAlign'](_0x334111,_0x5c3a10,_0x5bd966,this['innerWidth']);},Window_SkillLearnIngredients[_0x54880c(0xf9)][_0x54880c(0xd7)]=function(){const _0x396fd0=_0x54880c,_0x5f1818=SceneManager[_0x396fd0(0x264)]['item'](),_0x26d13b=SceneManager[_0x396fd0(0x264)]['user'](),_0x212a52=this['getSkillLearnDisplayedCosts']();let _0x257375=0x0,_0x3b4a04=0x0;const _0x50bec5=this[_0x396fd0(0x2cc)](),_0x26119d=Math['round'](this[_0x396fd0(0x243)]/0x2),_0x22e9fd=Math[_0x396fd0(0x26c)](this[_0x396fd0(0x243)]/0x4),_0xedb24a=0x0,_0x26e572=_0x26119d,_0x142707=_0x26119d+_0x22e9fd;let _0x472d97=_0x396fd0(0x2ae)[_0x396fd0(0x2ca)](_0x5f1818[_0x396fd0(0xf0)]),_0x1f1486=_0x5f1818[_0x396fd0(0x271)];Imported[_0x396fd0(0x21b)]&&DataManager[_0x396fd0(0xbf)](_0x5f1818)&&(_0x472d97=_0x396fd0(0x2ae)['format'](DataManager[_0x396fd0(0x24e)](_0x5f1818)),_0x1f1486=DataManager[_0x396fd0(0xeb)](_0x5f1818));let _0x1fe041=TextManager[_0x396fd0(0x181)][_0x396fd0(0x2ca)](_0x472d97,_0x1f1486);this[_0x396fd0(0x11d)](_0x1fe041,_0x257375,_0x3b4a04,this[_0x396fd0(0x243)]),_0x3b4a04+=_0x50bec5,this[_0x396fd0(0x11d)](TextManager[_0x396fd0(0xb5)],_0xedb24a,_0x3b4a04,_0x26119d),this['drawTextExCenterAlign'](TextManager['skillLearningCost'],_0x26e572,_0x3b4a04,_0x22e9fd),this['drawTextExCenterAlign'](TextManager[_0x396fd0(0x19f)],_0x142707,_0x3b4a04,_0x22e9fd),_0x3b4a04+=_0x50bec5;const _0x1215b5=_0xedb24a+this[_0x396fd0(0x1de)]();for(const _0x55e380 of _0x212a52){this[_0x396fd0(0x262)]();let _0x11f91f='',_0x93c1a4=0x0,_0x520e3c=0x0,_0xdf1e60='';switch(_0x55e380[_0x396fd0(0x16f)]()[_0x396fd0(0x110)]()){case'AP':_0x93c1a4=DataManager[_0x396fd0(0x1e8)](_0x5f1818);if(_0x93c1a4<=0x0)continue;this[_0x396fd0(0x22d)](_0x93c1a4,_0x26e572,_0x3b4a04,_0x22e9fd,'right'),_0x11f91f=_0x396fd0(0x217)[_0x396fd0(0x2ca)](ImageManager['abilityPointsIcon'],TextManager[_0x396fd0(0xfd)]),this[_0x396fd0(0xfa)](_0x11f91f,_0x1215b5,_0x3b4a04),_0x520e3c=_0x26d13b[_0x396fd0(0x15c)](),this[_0x396fd0(0x22d)](_0x520e3c,_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)](),_0x396fd0(0x21f));break;case'SP':_0x93c1a4=DataManager[_0x396fd0(0x23d)](_0x5f1818);if(_0x93c1a4<=0x0)continue;this[_0x396fd0(0xab)](_0x93c1a4,_0x26e572,_0x3b4a04,_0x22e9fd,'right'),_0x11f91f=_0x396fd0(0x217)[_0x396fd0(0x2ca)](ImageManager[_0x396fd0(0x195)],TextManager['skillPointsFull']),this[_0x396fd0(0xfa)](_0x11f91f,_0x1215b5,_0x3b4a04),_0x520e3c=_0x26d13b[_0x396fd0(0x2a3)](),this[_0x396fd0(0xab)](_0x520e3c,_0x142707,_0x3b4a04,_0x22e9fd-this['itemPadding'](),_0x396fd0(0x21f));break;case _0x396fd0(0x2d0):_0x93c1a4=DataManager[_0x396fd0(0x105)](_0x5f1818);if(_0x93c1a4<=0x0)continue;this[_0x396fd0(0x1be)](_0x93c1a4,TextManager[_0x396fd0(0x1c8)],_0x26e572,_0x3b4a04,_0x22e9fd);const _0x44267b=Imported[_0x396fd0(0x166)]?_0x396fd0(0x2ae)[_0x396fd0(0x2ca)](VisuMZ[_0x396fd0(0xff)]['Settings'][_0x396fd0(0x23f)][_0x396fd0(0x18e)]):TextManager['currencyUnit'];_0x11f91f=_0x396fd0(0x16d)[_0x396fd0(0x2ca)](_0x44267b,TextManager[_0x396fd0(0x1c8)]),this[_0x396fd0(0xfa)](_0x11f91f,_0x1215b5,_0x3b4a04),_0x520e3c=$gameParty['gold'](),this[_0x396fd0(0x1be)](_0x520e3c,TextManager[_0x396fd0(0x1c8)],_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)]());break;case _0x396fd0(0x13f):const _0x4f3544=DataManager[_0x396fd0(0x1f4)](_0x5f1818);if(_0x4f3544[_0x396fd0(0xb1)]<=0x0)continue;for(const _0x2abdf2 of _0x4f3544){if(!_0x2abdf2)continue;const _0xa28e3e=$dataItems[_0x2abdf2['id']];_0xdf1e60=TextManager['skillLearnItemFmt'],this[_0x396fd0(0x248)](_0xa28e3e,_0x1215b5,_0x3b4a04,_0x26119d-_0x1215b5),_0x11f91f=_0xdf1e60[_0x396fd0(0x2ca)](_0x2abdf2[_0x396fd0(0x1a5)],_0x396fd0(0x2ae)[_0x396fd0(0x2ca)](_0xa28e3e[_0x396fd0(0xf0)]),_0xa28e3e['name']),this[_0x396fd0(0x233)](_0x11f91f,_0x26e572,_0x3b4a04,_0x22e9fd),_0x11f91f=_0xdf1e60[_0x396fd0(0x2ca)]($gameParty[_0x396fd0(0x20d)](_0xa28e3e),_0x396fd0(0x2ae)[_0x396fd0(0x2ca)](_0xa28e3e[_0x396fd0(0xf0)]),_0xa28e3e[_0x396fd0(0x271)]),this['drawTextExRightAlign'](_0x11f91f,_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)]()),_0x3b4a04+=_0x50bec5;if(_0x3b4a04+_0x50bec5>this[_0x396fd0(0x202)])return;}continue;break;case'WEAPON':const _0x277dae=DataManager[_0x396fd0(0x13d)](_0x5f1818);if(_0x277dae[_0x396fd0(0xb1)]<=0x0)continue;for(const _0x5ad1c9 of _0x277dae){if(!_0x5ad1c9)continue;const _0x14eee6=$dataWeapons[_0x5ad1c9['id']];_0xdf1e60=TextManager[_0x396fd0(0x25a)],this[_0x396fd0(0x248)](_0x14eee6,_0x1215b5,_0x3b4a04,_0x26119d-_0x1215b5),_0x11f91f=_0xdf1e60[_0x396fd0(0x2ca)](_0x5ad1c9[_0x396fd0(0x1a5)],_0x396fd0(0x2ae)[_0x396fd0(0x2ca)](_0x14eee6[_0x396fd0(0xf0)]),_0x14eee6[_0x396fd0(0x271)]),this[_0x396fd0(0x233)](_0x11f91f,_0x26e572,_0x3b4a04,_0x22e9fd),_0x11f91f=_0xdf1e60['format']($gameParty[_0x396fd0(0x20d)](_0x14eee6),'\x5cI[%1]'[_0x396fd0(0x2ca)](_0x14eee6[_0x396fd0(0xf0)]),_0x14eee6[_0x396fd0(0x271)]),this[_0x396fd0(0x233)](_0x11f91f,_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)]()),_0x3b4a04+=_0x50bec5;if(_0x3b4a04+_0x50bec5>this[_0x396fd0(0x202)])return;}continue;break;case'ARMOR':const _0x46a0e1=DataManager[_0x396fd0(0xed)](_0x5f1818);if(_0x46a0e1[_0x396fd0(0xb1)]<=0x0)continue;for(const _0x4e80b2 of _0x46a0e1){if(!_0x4e80b2)continue;const _0x2dcb20=$dataArmors[_0x4e80b2['id']];_0xdf1e60=TextManager[_0x396fd0(0x148)],this['drawItemName'](_0x2dcb20,_0x1215b5,_0x3b4a04,_0x26119d-_0x1215b5),_0x11f91f=_0xdf1e60['format'](_0x4e80b2[_0x396fd0(0x1a5)],'\x5cI[%1]'[_0x396fd0(0x2ca)](_0x2dcb20[_0x396fd0(0xf0)]),_0x2dcb20[_0x396fd0(0x271)]),this[_0x396fd0(0x233)](_0x11f91f,_0x26e572,_0x3b4a04,_0x22e9fd),_0x11f91f=_0xdf1e60[_0x396fd0(0x2ca)]($gameParty[_0x396fd0(0x20d)](_0x2dcb20),'\x5cI[%1]'['format'](_0x2dcb20[_0x396fd0(0xf0)]),_0x2dcb20[_0x396fd0(0x271)]),this[_0x396fd0(0x233)](_0x11f91f,_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)]()),_0x3b4a04+=_0x50bec5;if(_0x3b4a04+_0x50bec5>this[_0x396fd0(0x202)])return;}continue;break;case _0x396fd0(0xdd):const _0x3f78a2=VisuMZ[_0x396fd0(0x296)][_0x396fd0(0xe4)](_0x5f1818,'jsLearnShowDetailTxt');if(VisuMZ['SkillLearnSystem']['JS'][_0x3f78a2])_0x11f91f=VisuMZ[_0x396fd0(0x296)]['JS'][_0x3f78a2][_0x396fd0(0x2b0)](this,_0x26d13b,_0x5f1818),this['drawTextEx'](_0x11f91f,_0x1215b5,_0x3b4a04);else continue;break;case'CP':if(Imported[_0x396fd0(0xe7)]){_0x93c1a4=DataManager[_0x396fd0(0x1b7)](_0x5f1818)||0x0;if(_0x93c1a4<=0x0)continue;this[_0x396fd0(0x270)](_0x93c1a4,_0x26e572,_0x3b4a04,_0x22e9fd,_0x396fd0(0x21f)),_0x11f91f=_0x396fd0(0x217)[_0x396fd0(0x2ca)](ImageManager[_0x396fd0(0x2c3)],TextManager[_0x396fd0(0xb0)]),this['drawTextEx'](_0x11f91f,_0x1215b5,_0x3b4a04),_0x520e3c=_0x26d13b[_0x396fd0(0x1b8)](),this[_0x396fd0(0x270)](_0x520e3c,_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)](),'right');}else continue;break;case'JP':if(Imported['VisuMZ_2_ClassChangeSystem']){_0x93c1a4=DataManager[_0x396fd0(0x16c)](_0x5f1818)||0x0;if(_0x93c1a4<=0x0)continue;this['drawJobPoints'](_0x93c1a4,_0x26e572,_0x3b4a04,_0x22e9fd,_0x396fd0(0x21f)),_0x11f91f='\x5cI[%1]%2'[_0x396fd0(0x2ca)](ImageManager[_0x396fd0(0xd1)],TextManager[_0x396fd0(0xad)]),this[_0x396fd0(0xfa)](_0x11f91f,_0x1215b5,_0x3b4a04),_0x520e3c=_0x26d13b[_0x396fd0(0x1c3)](),this[_0x396fd0(0x1d6)](_0x520e3c,_0x142707,_0x3b4a04,_0x22e9fd-this[_0x396fd0(0x1de)](),_0x396fd0(0x21f));}else continue;break;default:continue;}_0x3b4a04+=_0x50bec5;if(_0x3b4a04+_0x50bec5>this[_0x396fd0(0x202)])return;}},Window_SkillLearnIngredients[_0x54880c(0xf9)][_0x54880c(0x2b7)]=function(){const _0x5c1850=_0x54880c,_0x5619fd=JsonEx[_0x5c1850(0x28f)](VisuMZ[_0x5c1850(0x296)]['Settings']['General'][_0x5c1850(0xc4)]);return _0x5619fd[_0x5c1850(0x2c0)](_0x5c1850(0x17c)),_0x5619fd;},Window_SkillLearnIngredients[_0x54880c(0xf9)]['showVisualGoldDisplay']=function(){return![];};function Window_SkillLearnConfirm(){const _0x52cf1d=_0x54880c;this[_0x52cf1d(0xc3)](...arguments);}function _0x40ae(){const _0x59a700=['jsLearnJpCost','pop','onDatabaseLoaded','createSkillLearnSystemWindows','ShowMenu','skillLearningOwned','_earnedSkillPoints','textSizeEx','ItemFmt','classPointsAbbr','_stypeId','quantity','ceil','itemWindowRect','jsOnLearn','skillLearnReqListSwitch','isActor','refresh','AbilityPointsSet','isLearnedEquippedPassive','_skillPoints','gainMulticlassRewardPoints','split','_collapsedStypeIDs','skillLearnStypeColor','setHandler','StartClassSkillPoints','autoRemovalTiming','shouldDrawRequirements','getSkillLearnClassPointCost','getClassPoints','skillPointsFmt','skillPointsAbbr','Armor','gainStartingAbilityPoints','enemy','drawCurrencyValue','ARRAYJSON','skillPointsVisible','skillLearnReqListLevel','meetRequirementsForSkillLearnSystem','getJobPoints','initSkillLearnSystemMenuAccess','gainSkillPoints','isSkillLearnMode','updateSkillLearnAnimation','currencyUnit','exit','min','abilityPointsAbbr','alterSkillName','maxTurns','makeRewardsSkillPoints','drawActorFace','%1\x20[+]','drawActorSkillPoints','AliveActors','IngredientName','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20visible\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Visible\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20visible;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','_SkillLearnSystem_MenuAccess','drawJobPoints','constructor','_skillLearnIconSprite','index','value','loseJobPoints','onSkillLearnItemOk','isFinishedSkillLearnAnimating','itemPadding','canPayForSkillLearnSystem','ReqLevelFmt','parameters','JobPoints','MenuAccess','setAbilityPoints','note','MaxResource','Scene_Skill_create','getSkillLearnAbilityPointCost','actor','ShowWindows','AbilityPointsRate','members','inBattle','activate','Game_Actor_changeClass','makeRewardsAbilityPoints','SkillPointsLose','<Color:\x20%1>','applyItemSkillLearnSystemUserEffect','getSkillLearnItemCost','changeClass','setSkillLearnSystemMenuAccess','changePaintOpacity','FUNC','add','switches','drawSkillLearnCost','process_VisuMZ_SkillLearnSystem_JS','_skillLearnConfirmWindow','createConditionJS','gainSkillPointsForMulticlasses','setSkillLearnSkillSpriteOpacity','_skillLearnIconSpriteOpacitySpeed','innerHeight','displayRewardsSkillPoints','_abilityPoints','applyAbilityPoints','Animations','LearnReqSkillsAll','processPayForSkillLearnSystem','_skillLearnBitmapSprite','levelUp','Scene_Boot_onDatabaseLoaded','Skill','numItems','loseClassPoints','_statusWindow','Window_SkillList_maxCols','isSkillLearnSystemMenuAccess','LearnShowSwitchesAll','getItemIdWithName','skillLearnIngredientsWindowRect','Game_Party_setupBattleTestMembers','map','\x5cI[%1]%2','version','BattleManager_displayRewards','destroySkillLearnSprite','VisuMZ_2_EquipPassiveSys','_itemWindow','scale','bitmap','right','_SkillLearnSystem_preventLevelUpGain','Animation','Item-%1-%2','skillLearnStypeCategoryCollapse','abilityPointsVisible','skillLearnAlreadyLearned','onBattleStart','smoothSelect','gainStartingSkillPoints','ReqSkillFmt','skillPoints','startSkillLearnAnimation','resetTextColor','drawAbilityPoints','getArmorIdWithName','separateSkillLearnByStypeID','getSkillLearnCostText','animationIDs','makeItemList','drawTextExRightAlign','hide','levelA','Points','newPage','onItemOk','drawActorClassPoints','isPlaying','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Condition\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','Window_SkillList_setStypeId','getSkillLearnSkillPointCost','41XifcGm','Gold','loseItem','ConvertParams','drawActorAbilityPoints','innerWidth','39204DmBSlc','Window_SkillList_isEnabled','Item','itemHeight','drawItemName','ARRAYNUM','text','opacitySpeed','setSkillLearnSkillSpriteBitmap','IconSet','getEquipPassiveIcon','ShowVictory','MAX_SAFE_INTEGER','match','drawItem','Window_SkillType_makeCommandList','setSkillLearnSkillSpriteFrame','455546rjmCum','applyItemUserEffect','onLoadBattleTestSkillLearnSystem','ConfirmCmd','Game_Actor_setup','skillLearnWeaponFmt','Window_SkillStatus_refresh','height','command','PerLevelUp','RegExp','createVisibleJS','FullText','resetFontSettings','gainAbilityPoints','_scene','abilityPointsRate','ReqMetFmt','skillLearn','5822610BqUqhD','Window_SkillList_makeItemList','learnSkill','abilityPoints','round','allMembers','createActionJS','410yLVmAk','drawClassPoints','name','getSkillLearnSkillsFromClass','Game_Action_applyItemUserEffect','ShowAnimations','18ashjFs','DefaultCost','JSON','remove','LearnReqSkillsAny','LearningTitle','IngredientCost','setup','VisuMZ_1_SkillsStatesCore','stypeId','max','skillPointsFull','SkillPointsGain','sort','levelUpGainAbilityPoints','LearnWeaponCost','isBattleMember','_windowLayer','EnemyAbilityPoints','process_VisuMZ_SkillLearnSystem_Notetags','WeaponFmt','_data','Skills','ReqSeparateFmt','updateSkillLearnAnimationSprite','drawRequirements','makeDeepCopy','isConfirmEnabled','createTextJS','skillLearnReqListSkill','EQUIP_PASSIVE_SYS','makeSkillLearnList','description','SkillLearnSystem','processFinishSkillLearnAnimation','AbilityPoints','floor','skillPointsTotal','LearnItemCost','35312yimjeY','_earnedAbilityPoints','_armorIDs','loadPicture','AbilityPointsGain','Window_SkillList_alterSkillName','isLearnedSkill','getSkillPoints','addSkillLearnSystemCommand','getSkillLearnPassiveSkillsFromClass','displayRewards','createSkillLearnAnimation','Scene_Skill_onItemOk','abilityPointsTotal','LearnSkillB','loseAbilityPoints','PerAction','skillLearnGoldFmt','\x5cI[%1]','shift','call','finishSkillLearnAnimation','drawSkillCost','level','isEnabled','_skillLearnAnimationPlaying','skillLearningCost','getSkillLearnDisplayedCosts','11DwWymi','BattleManager_makeRewards','addAbilityPoints','deadMembers','isPlaytest','Scene_Skill_update','skillTypes','toggleSkillLearnStypeCollapse','push','StatusWindowDrawJS','Window_SkillList_includes','classPointsIcon','Classes','skillLearnReqHeaderFmt','item','gold','drawActorJobPoints','EVAL','format','learnPicture','lineHeight','ParseSkillNotetags','select','skillLearnSeparationFmt','GOLD','_skillIDs','1737rwVTGa','visible','onSkillLearnCollapseStypeID','maxCols','SWITCHES','iconWidth','drawSkillPoints','DetailWindow_RectJS','jobPointsFull','UserGainSkillPoints','Window_SkillList_drawItem','classPointsFull','length','user','contents','FadeSpeed','skillLearningName','createCostJS','jsLearnReq','skillLearnReqTitle','setupBattleTestMembers','_itemIDs','Enemy-%1-%2','Window_SkillList_itemLineRect','onSkillLearnConfirmCancel','ReqNotMetFmt','isState','createSkillLearnIngredientsWindow','Scale','LearnGoldCost','initialize','DisplayedCosts','TargetGainAbilityPoints','isCommandEnabled','HideLearned','passives','LearnSkillA','skillLearnStypeCategoryExpand','playStaticSe','magicSkills','makeSkillLearnStypeCategory','createSkillLearnConfirmWindow','currentClass','NUM','jobPointsIcon','shouldDrawSkillLearnRequirements','gainRewardsAbilityPoints','jobPointsFmt','skillLearnSystemCommandName','General','drawIngredients','Actors','WEAPON','center','makeRewards','_learnPicture','CUSTOM','setActor','jsLearnReqListTxt','initSkillPoints','reduce','anchor','GoldFmt','createKeyJS','skillLearnIcon','create','VisuMZ_2_ClassChangeSystem','filter','jsLearnShowListTxt','classPointsFmt','getEquipPassiveName','createSkillLearnAnimationIDs','getSkillLearnArmorCost','getSkillLearnRequirementText','jsLearnSpCost','iconIndex','408777ohNnBg','onSkillLearnConfirmOk','SortByIDandPriorityUsingIDs','_rewards','LEVEL','_skillLearnAnimationWait','smooth','Game_Actor_learnSkill','prototype','drawTextEx','abilityPointsFmt','skillLearnIncludes','abilityPointsFull','subject','CoreEngine','Game_Actor_levelUp','LearnReqSwitchesAll','skillLearnCancelCmd','makeSkillLearnPassivesList','levelUpGainSkillPoints','getSkillLearnGoldCost','StartClassAbilityPoints','LearnArmorCost','_actor','ReqSwitchFmt','SkillsStatesCore','SeparateCategoryFmt','_classIDs','getClassIdWithName','Window_SkillList_drawSkillCost','cancel','trim','createSkillLearnCostText','clear','bind','Weapon','VictoryText','itemLineRect','Parse_Notetags_CreateJS','displayRewardsAbilityPoints','makeSeparatedSkillLearnList','CancelCmd','bigPicture','refreshSkillLearnSystem','drawTextExCenterAlign','STRUCT','addSkillPoints','abilityPointsIcon','calcWindowHeight','drawSkillLearnRequirements','Game_System_initialize','LearnCpCost','StartingAbilityPoints','commandName','IconStypeNorm','removeChild','createSkillLearnSkillSprite','Window','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Declare\x20Variables\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20arguments[0];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20skill\x20=\x20arguments[1];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20cost\x20=\x200;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Process\x20Code\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20//\x20Return\x20Cost\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20cost;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','registerCommand','TargetGainSkillPoints','log','setSkillPoints','Armor-%1-%2','Window_SkillList_setActor','Show','skillLearnReqLevelFmt','isMVAnimation','_skillLearnAnimationSprite','19021320dbjQDn','left','Name','destroySkillLearnAnimationSprite','SkillPointsSet','jsLearnReqDetailTxt','setFrame','getSkillLearnWeaponCost','separateSkillLearnStypeIndent','ITEM','_indentSkillLearnRect','indexOf','skillLearnCmd','Icon','SeparateExpandFmt','_skillLearnIngredientsWindow','opacity','isAlive','skillLearnArmorFmt','_skillLearnAnimationIDs','loseGold','playSkillLearn','traitObjects','width','drawActorSimpleStatus','IngredientOwned','setupBattleTestMembersSkillLearnSystem','jsLearnCpCost','includes','stypeCategory','skillLearnReqSeparatorFmt','skillLearnReqNotMet','Settings','skillLearnConfirmCmd','ArmorFmt','skillPointsRate','loseSkillPoints','SeparateByStypeID','getAbilityPoints','test','SkillPointsAdd','isSkill','learnEquippedPassive','SeparationFmt','skillLearnConfirmWindow','setStypeId','skillLearnStypeCategory','Sound','VisuMZ_0_CoreEngine','colSpacing','optExtraExp','isTriggered','Ability','return\x200','getSkillLearnJobPointCost','%1%2','parse','toUpperCase','iconHeight','destroy','playOkSound','LearnCostBatch','getSkillIdWithName','gainRewardsSkillPoints','skillLearnReqMet','jsLearnApCost','Game_Battler_onBattleStart','ConfirmWindow_RectJS','_skillLearnSystem_drawItemMode','SkillPointsRate','Custom','initAbilityPoints','ClassPoints','LearnReqSwitchesAny','applySkillPoints','skillLearningTitle','clamp','36560VqYqGJ','addCommand','addChild','DetailWindow_BgType','concat','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','SharedResource','skillLearnReqSkillFmt','show','_weaponIDs','LearnShowSwitchesAny','GoldIcon','State-%1-%2','isSkillLearnEnabled','setSkillLearnSkillSpritePosition','updateSkillLearnSpriteOpacity','status','loadSystem','skillPointsIcon','skillLearnItemFmt','gainAbilityPointsForMulticlasses','SkillPoints','addWindow'];_0x40ae=function(){return _0x59a700;};return _0x40ae();}Window_SkillLearnConfirm['prototype']=Object[_0x54880c(0xe6)](Window_HorzCommand[_0x54880c(0xf9)]),Window_SkillLearnConfirm[_0x54880c(0xf9)][_0x54880c(0x1d7)]=Window_SkillLearnConfirm,Window_SkillLearnConfirm[_0x54880c(0xf9)][_0x54880c(0xc3)]=function(_0x1b1ac6){const _0x221b1c=_0x54880c;Window_HorzCommand[_0x221b1c(0xf9)][_0x221b1c(0xc3)][_0x221b1c(0x2b0)](this,_0x1b1ac6);},Window_SkillLearnConfirm[_0x54880c(0xf9)][_0x54880c(0xa8)]=function(){return 0x2;},Window_SkillLearnConfirm[_0x54880c(0xf9)][_0x54880c(0x247)]=function(){const _0x224eb3=_0x54880c;return this[_0x224eb3(0x202)];},Window_SkillLearnConfirm[_0x54880c(0xf9)]['makeCommandList']=function(){const _0x2303df=_0x54880c;this[_0x2303df(0x184)](TextManager[_0x2303df(0x157)],'ok',this[_0x2303df(0x290)]()),this[_0x2303df(0x184)](TextManager[_0x2303df(0x102)],_0x2303df(0x10f));},Window_SkillLearnConfirm[_0x54880c(0xf9)][_0x54880c(0x290)]=function(){const _0x57d174=_0x54880c,_0x53ce01=SceneManager[_0x57d174(0x264)];if(!_0x53ce01)return![];const _0x279c37=_0x53ce01['user']();if(!_0x279c37)return![];const _0x3b83ee=_0x53ce01[_0x57d174(0x2c6)]();if(!_0x3b83ee)return![];if(!_0x279c37[_0x57d174(0x1c2)](_0x3b83ee))return![];return _0x279c37[_0x57d174(0x1df)](_0x3b83ee);},Window_SkillLearnConfirm['prototype']['drawItem']=function(_0x3b479b){const _0x330e80=_0x54880c,_0x2ed323=this[_0x330e80(0x116)](_0x3b479b);this[_0x330e80(0x22c)](),this[_0x330e80(0x1f7)](this[_0x330e80(0xc6)](_0x3b479b));const _0x2c71c9=this[_0x330e80(0x126)](_0x3b479b),_0x1eab8b=this[_0x330e80(0x1a1)](_0x2c71c9)['width'];_0x2ed323['x']+=Math[_0x330e80(0x26c)]((_0x2ed323[_0x330e80(0x14d)]-_0x1eab8b)/0x2),this['drawTextEx'](_0x2c71c9,_0x2ed323['x'],_0x2ed323['y'],_0x1eab8b);},Window_SkillLearnConfirm['prototype']['playOkSound']=function(){const _0x3d62c7=_0x54880c;if(this['currentSymbol']()==='ok'){}else Window_HorzCommand[_0x3d62c7(0xf9)][_0x3d62c7(0x172)]['call'](this);};