/*:
 * @target MZ
 * @plugindesc An all-in-one plugin that helps you create high quality action games with ease
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io/
 * 
 * @help
 * Version 1.2.5
 * ----------------------------------------------------------------------------
 * This powerful RPG Maker MZ plugin enables you to create various type of games,
 * like real-time action games, ARPG, top-down shooters, beat 'em up, fighting,
 * farming, survival, simulation, and so much more. Designed for ease of use,
 * it leverages RPG Maker's built-in eventing system so the better you are
 * at RPG Maker, the better game you'll be able to create with this plugin.
 * ----------------------------------------------------------------------------
 * FEATURES
 * - Extended features for eventing, not replacing it with plugin commands
 * - Extended Movement Route and Conditional Branches, allowing you to create
 *   smart enemy or party AI, complex skills and magic casting, and many more.
 *   It's all up to your creativity.
 * - Support nearly all necessary features to create any action game
 * - Support Keyboard, Gamepad and Mouse
 * - Support aiming with Right Stick Gamepad and Mouse
 * - An awesome dev who will support you 24/7
 * - And a lot more, please see the included demo and the manual
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * Please visit this link for the manual, which contents all extended features
 * for Movement Route, Conditional Branches and plugin commands.
 * All extended features: https://rpgmakeractioncombatmanual.blogspot.com/2025/01/all-extended-commands.html
 * Other tutorials: https://rpgmakeractioncombatmanual.blogspot.com
 * Video Trailer: https://www.youtube.com/watch?v=zcXZNgt3V50
 * You still need to learn how to use RPG Maker, especially eventing in order
 * to maximize the potential of this plugin.
 * ----------------------------------------------------------------------------
 * TERMS OF USE
 * ■ Accquiring this plugin legally grants you the permission to use this plugin
 * 	 in both free and commercial projects without credit
 * ■ Modify the plugin as you wish but don't distribute your modification
 * ----------------------------------------------------------------------------
 * For support or feature requests, please reach out:
 * X: https://x.com/sanghendrix96
 * Discord: https://discord.gg/YKPscqHV8b
 * Patreon: https://www.patreon.com/SangHendrix
 * ----------------------------------------------------------------------------
 * 
 * @param axc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1
 * @text ■ DEBUG
 * 
 * @param avd4
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Show Hitboxes
 * @text Debug Mode
 * @desc Show hitboxes, visions, etc, might cause some performance issue.
 * @type boolean
 * @default false
 * 
 * @param axcxcxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1s
 * @text ■ SPAWN EVENTS
 * 
 * @param axcxcxcx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param templateMapId
 * @text Template Map ID
 * @desc The map ID containing your template events
 * @type number
 * @default 0
 * 
 * @param Events To Spawn
 * @text Spawn Events at Start
 * @desc An optional feature where you can spawn events when you enter a map. EvenID or Name. Example: 1, 2 or David, Jack
 * @type string
 * @default 
 * 
 * @param Spawn Actors at Start
 * @text Spawn Actor Events
 * @desc Spawn events that share the same name with any actor in party. Good to make followers system.
 * @type boolean
 * @default false
 * 
 * @param axcx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1x
 * @text ■ Passive Common Event
 * 
 * @param avdx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param NpcTags
 * @text Events Notetags
 * @type struct<NpcTag>[]
 * @desc Any event with this tag will always run these common event in background.
 *
 * @param LimitAreaOfCalling
 * @text Disable Offscreen
 * @type boolean
 * @desc True = only run common events if the event is inside the viewport. False to always run.
 * @default false
 * 
 * @param a
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco1
 * @text ■ ENEMY HP BAR SETUP
 * 
 * @param aa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param barWidth
 * @text Bar Width
 * @type number
 * @desc Width of the HP bar.
 * @default 100
 *
 * @param barHeight
 * @text Bar Height
 * @type number
 * @desc Height of the HP bar.
 * @default 6
 * 
 * @param borderImage
 * @text Border Image
 * @type file
 * @dir img/system/
 * @desc The border image to be used for the HP bar.
 * @default
 * 
 * @param showRadius
 * @text Show Radius
 * @type number
 * @desc When the player comes to this radius of enemy event, it'll display its HP bar. Tile unit. 7 = 7 tiles.
 * @default 7
 * 
 * @param aaa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3z
 * @text ■ DAMAGE TEXT SETUP
 * 
 * @param aaaa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param addValue
 * @text Add Value
 * @type boolean
 * @desc If true, the new value will be added to the existing displayed value. If false, the new value will overwrite the existing value.
 * @default false
 * 
 * @param largeNumberThreshold
 * @text High Damage Threshold
 * @type number
 * @desc Damage >= this will be displayed in a different visual setting
 * @default 15
 * 
 * @param damageTextSettings
 * @text Damage Text Settings
 * @type struct<DamageTextSettings>
 * @desc Settings for damage text appearance
 * @default
 * 
 * @param aaaaz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxc
 * @text ■ PLAYER HITBOX
 * 
 * @param aaaazxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Player Hitbox Width
 * @desc Width of the player's hitbox in tile (Default: 1)
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1
 * 
 * @param Player Hitbox Height
 * @desc Height of the player's hitbox in tile (Default: 1)
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1
 * 
 * @param Player Offset X
 * @type number
 * @default 0
 * @desc Set the X-axis offset of the player's hitbox in pixel
 * @min -999
 * @decimals 2
 * 
 * @param Player Offset Y
 * @type number
 * @default 0
 * @desc Set the Y-axis offset of the player's hitbox in pixel
 * @decimals 2
 * @min -999
 * 
 * @param aaaaazxcxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxcz
 * @text ■ PLAYER GRAPHICS POSITION
 * 
 * @param aaaazxcxcz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Player Graphical Offset X
 * @type number
 * @default 0
 * @desc Adjust the player's graphic X position. Best for sprites with feet not touching the bottom edge.
 * @decimals 2
 * @min -999
 * 
 * @param Player Graphical Offset Y
 * @type number
 * @default 0
 * @desc Adjust the player's graphic Y position. Best for sprites with feet not touching the bottom edge.
 * @decimals 2
 * @min -999
 * 
 * @param aaaaazxcxcxcs
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdwe
 * @text ■ OTHER HELPFUL FEATURES
 * 
 * @param aaaazxcxczxx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Move via Cursor
 * @text Move via Cursor Click
 * @type boolean
 * @desc Enable/disable movement when clicking/touching the map
 * @default false
 * 
 * @param Disable Right Click Menu
 * @text Right Click open Menu
 * @type boolean
 * @desc Prevents opening menu with right click when ON.
 * @default false
 * 
 * @param Gain XP when enemy defeated
 * @text Gain EXP from Enemy
 * @type boolean
 * @desc When an event with <hp: enemy_name> is defeated, party gains EXP from that enemy's database value.
 * @default false
 * 
 * 
 * 
 * @command ----s
 * @text ■ SPAWN EVENTS -----------------
 * 
 * @command spawnEvent
 * @text Spawn Event
 * @desc Spawn an event from template map
 * 
 * @arg eventId
 * @text Event ID/Name
 * @desc ID number or name of the event from template map.
 * @type string
 * @default
 * 
 * @arg x
 * @text X Position
 * @desc Spawn on: this:  current event. player: player. region x: region x. <notetag>, source: this/player/eventId
 * @type string
 * @default this
 * 
 * @arg y
 * @text Y Position
 * @desc  Spawn on: this:  current event. player: player. region x: region x. <notetag>, source: this/player/eventId
 * @type string
 * @default this
 * 
 * @arg startDegree
 * @text Degree
 * @desc The initial rotation degree of the spawned event (0-360).
 * @type string
 * @default
 * 
 * @arg notSpawnOn
 * @text Not Spawn On
 * @desc Format: impassable A3 A4 B C (etc) (tileset), impassable events (events that block movement)
 * @type string
 * @default
 * 
 * @arg permanent
 * @text Permanent Event
 * @desc If ON, the event will persist after map transfer
 * @type boolean
 * @default false
 * 
 * @command destroyEvent
 * @text Destroy Event
 * @desc Destroy spawned events based on ID, name, notetag, or current event
 * 
 * @arg identifier
 * @text Event ID/Name/Notetag
 * @desc ID number, name, notetag (<tag>), or 'this' for current event
 * @type string
 * @default this
 * 
 * @command destroyEventNear
 * @text Destroy Event Near
 * @desc Destroys the nearest event with matching name/notetag to specified event
 * 
 * @arg identifier
 * @text Event Name/Notetag  
 * @desc Event name or notetag to match. Use <tag> format for notetags
 * @type string
 * @default
 * 
 * @arg eventId
 * @text Source Event ID
 * @desc ID of event to check distance from. Use 'this' for current event
 * @type string 
 * @default this
 * 
 * @command spawnEventHitbox
 * @text Create Dynamic Event
 * @desc Creates an event with specified notetag and auto-destroy timer. A good method for lazy people.
 * 
 * @arg notetag
 * @text Notetag
 * @desc Notetag to add to the hitbox event (e.g. <enemyHitbox>, <stuff, <etc>)
 * @type string
 * @default
 * 
 * @arg wait
 * @text Destroy After
 * @desc Number of frames to wait before destroying the hitbox. Empty to make it lives forever.
 * @type number
 * @default
 * 
 * @arg x
 * @text X Position
 * @desc X coordinate. Use 'this' for current event, 'player' for player. Can use math expressions like 'this + 2'.
 * @type string
 * @default this
 * 
 * @arg y
 * @text Y Position
 * @desc Y coordinate. Use 'this' for current event, 'player' for player. Can use math expressions like 'this + 2'.
 * @type string
 * @default this
 * 
 * @command DestroyDynamicEvent
 * @text Destroy Dynamic Event
 * @desc Destroys all dynamic events (created by Create Temporary Event) with the specified notetag.
 * 
 * @arg notetag
 * @text Notetag to Match
 * @desc Events with this notetag will be destroyed. Can include multiple tags separated by comma (e.g. <tag1>, <tag2>)
 * @type string
 * @default
 * 
 * @command aa
 * @text ---------------------------------
 * 
 * @command ---
 * @text ■ ENEMY & PLAYER HP BAR
 * 
 * @command aaa
 * @text ---------------------------------
 * 
 * @command UpdateEventHp
 * @text Increase / Decrease Enemy HP
 * @desc Change the HP of the specified event by the provided value.
 *
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc this: Current event | all: All events with hp bar.
 * @default this
 *
 * @arg value
 * @type string
 * @text HP Change
 * @desc Change in HP (+ 1, - 2, + $gameVariables.value(x), etc). Write  -damage  to decrease value from <dmg: x> notetag
 * 
 * @arg useWeaponAttack
 * @text Use Weapon DMG
 * @type select
 * @text Use Weapon DMG
 * @desc Select which weapon slot's attack value to use for decreasing HP.
 * @default none
 * @option None
 * @value none
 * @option Weapon Slot 1
 * @value slot1
 * @option Weapon Slot 2 (Shield slot)
 * @value slot2
 * 
 * @command UpdatePlayerHp
 * @text Increase / Decrease Actor HP
 * @desc Change the HP of the specified event or player by the provided value.
 * 
 * @arg target
 * @type string
 * @text Actor
 * @desc Actor ID or name of actor. 'self': Auto get ID from notetag <hp: actor, actor ID>. 'player': party leader
 * @default player
 *
 * @arg value
 * @type string
 * @text HP Change
 * @desc Change in HP (+ 1, - 2, + $gameVariables.value(x), etc). Write  damage  to minus value from <dmg: x> notetag
 * 
 * @command EventHPBarVisibility
 * @text HP Bar Visibility
 * @desc Show or hide HP bar for a specific event
 *
 * @arg Status
 * @type boolean
 * @text Show HP Bar
 * @desc Show or hide the HP bar
 * @default true
 * 
 * @arg Target
 * @type text
 * @text Target Event ID
 * @desc The event ID to affect. Use 'this' for current event
 * @default this
 * 
 * @command RemoveEventHpBar
 * @text Remove Event HP Bar
 * @desc Remove the HP bar of the specified event.
 * 
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc this: Current event
 * @default this
 * 
 * @command DamageStatus
 * @text Modify Damage Formula
 * @desc Modifies how damage from <dmg> notetags is calculated
 * 
 * @arg Formula
 * @text Formula
 * @type string
 * @desc (Beta) Formula to modify damage. Use 'default' to reset. Examples: *2, /2, -5, * a.mat
 * @default default
 * 
 * @arg ExcludeNotetag
 * @text Exclude Notetags
 * @type string
 * @desc Events with these notetags won't be affected by formula. Separate with commas. Example: <enemy>, <demon>
 * @default
 * 
 * @command setCollisionStatus
 * @text Collision Status
 * @desc Enable or disable collision checks for this event.
 * 
 * @arg enabled
 * @text Enable Collisions
 * @type boolean
 * @desc If false, all collision checks will return false for this event.
 * @default true
 * 
 * @command aaaa
 * @text ---------------------------------
 *
 * @command --
 * @text ■ POP UP TEXT
 * 
 * @command aaaaa
 * @text ---------------------------------
 * 
 * @command ShowVariableOnEvent
 * @text Pop Text Value
 * @desc Pop up damage text on the screen
 *
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc "this": current event
 * @default this
 *
 * @arg value
 * @type string
 * @text Value
 * @desc Numbers, text, $gameVariables.value(x). dmg, exp (to display value x of <dmg/exp: x>) from event Id
 * @default
 * 
 * @arg weaponAttack
 * @type select
 * @text Weapon Attack
 * @desc Select which weapon slot's attack value to display.
 * @default none
 * @option None
 * @value none
 * @option Weapon Slot 1
 * @value slot1
 * @option Weapon Slot 2
 * @value slot2
 *
 * @arg duration
 * @type number
 * @text Text Duration
 * @desc Duration of the DMG text  (in frame)
 * @min 1
 * @default 80
 * 
 * @arg animation
 * @type select
 * @text Animation Type
 * @desc Choose how the text will animate
 * @default bounce
 * @option Bounce
 * @value bounce
 * @option Move Up
 * @value moveup
 * @option Pop Up
 * @value popup
 *
 * @arg visualSettings
 * @text Visual Settings
 * @type struct<DMGTextVisualSettings>
 * @desc Settings for text appearance and position
 * @default
 * 
 * @command aaaaaa
 * @text ---------------------------------
 * 
 * @command ----
 * @text ■ SPECIAL COMMANDS
 * 
 * @command aaaaaaa
 * @text ---------------------------------
 * 
 * @command BreakCharacter
 * @text Break Character
 * @desc Makes the current event break into pieces and fade away
 * 
 * @command StopQueue
 * @text Whatever you're doing, Stop!
 * @desc Immediately stops whatever the event is doing from Movement Route.
 * 
 * @command AttachToEvent
 * @text Child and Parent
 * @desc Make an event(s) become child of another event or player. Child events will follow their parent.
 * 
 * @arg child
 * @text The Child
 * @desc The event(s) that will become children. Use 'this' for current event, event name, or <notetag>.
 * @type string
 * @default this
 * 
 * @arg parent
 * @text The Parent
 * @desc Use 'this', 'player', event name, event ID, or <notetag>. Child follows nearest parent. 'none' to reset.
 * @type string
 * @default player
 * 
 * @command ChangeHitboxData
 * @text Change Event Hitbox
 * @desc Change the hitbox dimensions and offset of an event
 * 
 * @arg eventId
 * @text Event ID
 * @desc The event to modify. Use 'this' for current event.
 * @type string
 * @default this
 * 
 * @arg width
 * @text Width
 * @desc Width of the hitbox
 * @type string
 * @default 1
 * 
 * @arg height
 * @text Height
 * @desc Height of the hitbox
 * @type string
 * @default 1
 * 
 * @arg offsetX
 * @text X Offset
 * @desc X offset of the hitbox
 * @type string
 * @default 0
 * 
 * @arg offsetY
 * @text Y Offset
 * @desc Y offset of the hitbox
 * @type string
 * @default 0
 * 
 * @command CycleNextWeapon
 * @text Equip Next Weapon
 * @desc Automatically equips the next available weapon from inventory to the party leader.
 * 
 * @command CameraUpdate
 * @text Camera Update
 * @desc Pause or resume camera focus on player.
 * 
 * @arg pauseCamera
 * @text Pause Camera
 * @type boolean
 * @desc If ON, camera movement will be paused. If OFF, camera will resume following player.
 * @default false
 * 
 * @command aaaaaaaaa
 * @text ---------------------------------
 * 
 * @command -----
 * @text ■ SELF SWITCH & VARIABLES
 * 
 * @command aaaaaaaaaaa
 * @text ---------------------------------
 * 
 * @command ControlSelfSwitch
 * @text Control Self Switch
 * @desc Jump to the page with the corresponding Self Switch based on the comment on that page 
 * @arg state
 * @text State
 * @type boolean
 * @desc Set the self switch state to ON or OFF
 * @default true
 * @arg comment
 * @text Comment to search for
 * @type string
 * @desc Jump to page with a self-switch letter that has this comment
 * @arg eventId
 * @text Event ID (optional)
 * @type string
 * @desc Blank: this event. ID: eventID. <notetag>: All event with notetag. nearby <notetag>: Nearest event with notetag
 * 
 * @command SetValue
 * @text Control Local Variable
 * 
 * @arg valueToSet
 * @text Value
 * @type string
 * @desc The value to set. Use +X to add, -X to subtract, or just X to set directly. If randomMax provided, this becomes minimum random value.
 * 
 * @arg id
 * @text Name ID (Optional)
 * @type string
 * @desc An optional feature where you can seperate multiple local variables using a name
 * 
 * @arg randomMax
 * @text Random Max Number (Optional)
 * @type string
 * @desc Optional. If provided, Value will become minimum number and this becomes maximum for random range.
 * @default
 * 
 * @command ResetMapValues
 * @text Reset All Local Variables
 * @desc Resets all local variables for all events on the current map to 0.
 * 
 * @command aaaaaaaaa31
 * @text ---------------------------------
 * 
 * @command -----2
 * @text ■ PLAYER
 * 
 * @command aaaaaaaaaaa31
 * @text ---------------------------------
 * 
 * @command ControlPlayerMovement
 * @text Player Movement
 * @desc Controls whether player movement is allowed or disallowed.
 *
 * @arg allowMovement
 * @type boolean
 * @text Player Movement
 * @desc Allow or disallow player movement
 * @on Allow
 * @off Disallow
 * @default true
 * 
 * @command ChangePlayerHitbox
 * @text Change Player Hitbox
 * @desc Changes the hitbox dimensions of the player
 *
 * @arg width
 * @text Width
 * @desc Width of the player's hitbox in tile
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.0
 *
 * @arg height
 * @text Height
 * @desc Height of the player's hitbox in tile
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.0
 *
 * @arg offsetX
 * @text X Offset
 * @desc X-axis offset of the hitbox in pixel
 * @type number
 * @decimals 2
 * @min -999
 * @default 0
 *
 * @arg offsetY
 * @text Y Offset
 * @desc Y-axis offset of the hitbox in pixel
 * @type number
 * @decimals 2
 * @min -999
 * @default 0
 * 
 * @command SwingWeapon
 * @text Swing Weapon
 * @desc Creates a weapon swing animation using an image file
 * 
 * @arg weaponSprite
 * @text Weapon Sprite
 * @type file
 * @dir img/pictures/
 * @desc Image file for the weapon sprite (if it's a sword, the direction should be left -> right)
 * @default 
 * 
 * @arg eventId
 * @text Event ID
 * @type string
 * @desc 'this' for current event. 'player' for player
 * @default player
 * 
 * @arg offset
 * @text Offset
 * @type string
 * @desc Format: x, y (in pixels). Example: 15, 20
 * @default 0, 0
 * 
 * @arg speed
 * @text Animation Speed
 * @type number
 * @desc Speed of the swing animation (default: 20, lower = faster)
 * @min 1
 * @default 20
 * 
 * @command PlayerJump
 * @text Player Jump
 * @desc Makes the player jump with specified height and power
 * 
 * @arg height
 * @text Jump Height
 * @type number
 * @default 100
 * @desc Height of the jump in pixels
 * 
 * @arg power
 * @text Jump Power
 * @type number
 * @default 12
 * @desc Power/speed of the jump (higher = faster rise and fall)
 * 
 */

/*~struct~NpcTag:
* @param Notetag
* @text Events Notetag
* @type commonEvent
* @desc The notetag to check for in the event's note section
*
* @param CommonEventIds
* @text Common Event Ids
* @type common_event[]
* @desc The IDs of the common events to run in background for these group of events
* @default
*/
/*~struct~DMGTextVisualSettings:
* @param offsetX
* @type number
* @text Offset X
* @desc Horizontal offset
* @min -9999
* @default 0
*
* @param offsetY
* @type number
* @text Offset Y
* @desc Vertical offset
* @min -9999
* @default 0
*
* @param fontColor
* @type string
* @text Font Color
* @desc Text color (e.g. #e6b400)
* @default #e6b400
*
* @param outlineColor
* @type string
* @text Outline Color
* @desc Text outline color (e.g. #900C3F)
* @default #900C3F
*/
/*~struct~DamageTextSettings:
* @param fontFace
* @type string
* @text Font
* @desc File from game's font folder. E.g. Arial.ttf, Something.otf
* @default
*
* @param fontSize
* @type number
* @text Font Size
* @default 28
*
* @param fontColor
* @type string
* @text Font Color
* @desc Font color in hex code
* @default #e6b400
*
* @param outline
* @type boolean
* @text Font Outline
* @default true
*
* @param outlineColor
* @type string
* @text Font Outline Color
* @desc Color in Hex code
* @default #900C3F
*/

var Imported = Imported || {};
Imported.Hendrix_Action_Engine = true;

const HpluginName = "Hendrix_Action_Engine";
const Hparameters = PluginManager.parameters(HpluginName);
const showHitboxes = Hparameters['Show Hitboxes'] === 'true';
const barWidth = parseInt(Hparameters["barWidth"] || 100);
const barHeight = parseInt(Hparameters["barHeight"] || 6);
const borderImage = String(Hparameters["borderImage"] || "");
const defaultRadius = parseInt(Hparameters["showRadius"] || 2);
const largeNumberThreshold = Number(Hparameters['largeNumberThreshold'] || 6);
const limitAreaOfCalling = Hparameters['LimitAreaOfCalling'] === 'true';
const templateMapId = Number(Hparameters['templateMapId'] || 1);
const playerGraphicalOffsetX = Number(Hparameters['Player Graphical Offset X'] || 0);
const playerGraphicalOffsetY = Number(Hparameters['Player Graphical Offset Y'] || 0);
const moveViaCursor = Hparameters['Move via Cursor'] === 'true';
const eventsToSpawn = Hparameters['Events To Spawn']?.split(',').map(e => e.trim()) || [];
const spawnActorsAtStart = Hparameters['Spawn Actors at Start'] === 'true'
const gainExpFromEnemies = Hparameters['Gain XP when enemy defeated'] === 'true';
const disableRightClickMenu = Hparameters['Disable Right Click Menu'] === 'true';

const npcTags = JSON.parse(Hparameters['NpcTags'] || '[]').map(tag => {
	const parsed = JSON.parse(tag);
	parsed.CommonEventIds = JSON.parse(parsed.CommonEventIds).map(Number);
	return parsed;
});

const _brokenSprites = new Map();
let hitboxCache = {};
const _tagSet = new Set();
const _lastHpDecreaseCheck = {};
let _lastLeaderLevel = null;

//============================================================
// INITIALIZATION & FRAMEWORK MODIFICATION
//============================================================
//const DotMoveSystem = PluginManager._scripts.includes('DotMoveSystem');

const H_Game_Player_performTransfer = Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function () {
	if (this.isTransferring()) {
		$gameMap.clearCustomEventHitboxCaches();
	}
	H_Game_Player_performTransfer.call(this);
};

const H_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
	H_Scene_Map_update.call(this);
	if (showHitboxes) {
		this._hitboxLayer.update();
	}
	updateBrokenSprites();
	this.checkClickableEvents();
};

const _Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function () {
	if (!moveViaCursor) return;
	_Scene_Map_processMapTouch.call(this);
};

if (!disableRightClickMenu) {
	const _Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
	Scene_Map.prototype.isMenuCalled = function () {
		if (TouchInput.isCancelled()) {
			return false;
		}
		return _Scene_Map_isMenuCalled.call(this);
	};
}

Game_Party.prototype.maxItems = function () {
	return 9999;
};

//============================================================
// HITBOX & COLLISION
//============================================================

const CollisionManager = {
	collisionData: {},
	playerData: [],

	addCollision: function (targetEventId, damageValue) {
		if (targetEventId === 0) {
			// player damage
			this.playerData.push(damageValue);
		} else {
			// event damage
			if (!this.collisionData[targetEventId]) {
				this.collisionData[targetEventId] = [];
			}
			this.collisionData[targetEventId].push(damageValue);
		}
	},

	getAllDamage: function (targetEventId) {
		if (targetEventId === 0) {
			// Return player damage
			return [...this.playerData];
		}
		// Return event damage
		if (this.collisionData[targetEventId] && this.collisionData[targetEventId].length > 0) {
			return [...this.collisionData[targetEventId]];
		}
		return [];
	},

	addCalculatedDamage: function (targetEventId, calculatedValue) {
		if (targetEventId === 0) {
			this.playerData.push(calculatedValue);
		} else {
			if (!this.collisionData[targetEventId]) {
				this.collisionData[targetEventId] = [];
			}
			this.collisionData[targetEventId].push(calculatedValue);
		}
	},

	getAndClearDamage: function (targetEventId) {
		if (targetEventId === 0) {
			const damages = [...this.playerData];
			this.playerData = [];
			return damages;
		}
		if (this.collisionData[targetEventId] && this.collisionData[targetEventId].length > 0) {
			const damages = this.collisionData[targetEventId];
			delete this.collisionData[targetEventId];
			return damages;
		}
		return [];
	},

	clearCollisions: function (targetEventId) {
		if (targetEventId === 0) {
			this.playerData = [];
		} else if (this.collisionData[targetEventId]) {
			delete this.collisionData[targetEventId];
		}
	}
};

CollisionManager.cleanup = function () {
	for (let eventId in this.collisionData) {
		if (!$gameMap.event(eventId)) {
			delete this.collisionData[eventId];
		}
	}
};

window.CollisionManager = CollisionManager;

Game_Map.prototype.clearCustomEventHitboxCaches = function () {
	hitboxCache = {};
	eventData.clear();
	eventClocks.clear();
	this._removedEventHpBars = {};
	CollisionManager.collisionData = {};
	$gameSystem.collisionTimestamps = {};
	$gameSystem.collidedOnceEvents = {};
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		SceneManager._scene._spriteset.cleanupEventHpBars();
	}
	CollisionManager.cleanup();
};

function rotatePoint(x, y, cx, cy, angle) {
	const radians = angle * Math.PI / 180;
	const cos = Math.cos(radians);
	const sin = Math.sin(radians);
	const nx = (cos * (x - cx)) - (sin * (y - cy)) + cx;
	const ny = (sin * (x - cx)) + (cos * (y - cy)) + cy;
	return { x: nx, y: ny };
}

class HitboxLayer extends PIXI.Container {
	constructor() {
		super();
		this.zIndex = 100;
	}

	update() {
		this.removeChildren();
		$gameMap.events().forEach(event => {
			const showHitboxTag = /<showhitbox>/i;
			const eventNote = event.event().note;
			const showHitbox = eventNote.match(showHitboxTag) || showHitboxes;

			if (showHitboxes && event._lastSoundCheck) {
				const soundData = event._lastSoundCheck;
				const detectionArea = new PIXI.Graphics();
				this.addChild(detectionArea);

				// Draw the detection circle using stored data
				detectionArea.lineStyle(2, 0x0000ff, 0.3);
				detectionArea.beginFill(0x0000ff, 0.1);
				detectionArea.drawCircle(
					soundData.centerX,
					soundData.centerY,
					soundData.radius
				);
				detectionArea.endFill();

				// Draw detected sounds using stored data
				if (soundData.detectedSounds.length > 0) {
					detectionArea.lineStyle(2, 0xff0000, 0.5);
					soundData.detectedSounds.forEach(sound => {
						// Draw sound source indicator
						detectionArea.drawCircle(sound.x, sound.y, 8);

						// Draw line from listener to sound source
						detectionArea.moveTo(soundData.centerX, soundData.centerY);
						detectionArea.lineTo(sound.x, sound.y);

						// Draw volume indicator
						const volumeRadius = (sound.volume / 100) * 15;
						detectionArea.drawCircle(sound.x, sound.y, volumeRadius);
					});
				}
			}

			// Platform
			if (showHitbox) {
				$gameMap.getPlatforms().forEach(platform => {
					const platformArea = new PIXI.Graphics();
					platformArea.lineStyle(2, 0x00ff00, 0.4);
					platformArea.beginFill(0x00ff00, 0.2);

					const platformRange = platform._platformSize / 48;
					const screenRange = platformRange * $gameMap.tileWidth();

					const screenX = platform.screenX();
					const screenY = platform.screenY();

					platformArea.drawCircle(
						screenX,
						screenY,
						screenRange
					);
					platformArea.endFill();

					this.addChild(platformArea);
				});
			}

			if (showHitbox && event._lastCheckRange) {
				const detectionSprite = new PIXI.Graphics();
				this.addChild(detectionSprite);

				// Draw blocked regions if any
				if (event._lastCheckRange.blockRegion > 0) {
					const blockingRegions = new PIXI.Graphics();
					this.addChild(blockingRegions);
					blockingRegions.beginFill(0xFF0000, 0.3);
					blockingRegions.lineStyle(1, 0xFF0000, 0.5);

					for (let x = 0; x < $gameMap.width(); x++) {
						for (let y = 0; y < $gameMap.height(); y++) {
							if ($gameMap.regionId(x, y) === event._lastCheckRange.blockRegion) {
								const screenX = $gameMap.tileWidth() * (x - $gameMap._displayX);
								const screenY = $gameMap.tileHeight() * (y - $gameMap._displayY);
								blockingRegions.drawRect(
									screenX,
									screenY,
									$gameMap.tileWidth(),
									$gameMap.tileHeight()
								);
							}
						}
					}
					blockingRegions.endFill();
				}

				// Basic Range Check (when eyes = 0 or null)
				if (!event._lastCheckRange.eyes) {
					detectionSprite.beginFill(0x00ff00, 0.2);
					detectionSprite.lineStyle(2, 0x00ff00, 0.4);

					const range = event._lastCheckRange.range;
					const centerX = event.x;
					const centerY = event.y;

					for (let dx = -range; dx <= range; dx++) {
						for (let dy = -range; dy <= range; dy++) {
							const distance = Math.sqrt(dx * dx + dy * dy);
							if (distance <= range) {
								// Only draw if line of sight is not blocked
								const targetX = centerX + dx;
								const targetY = centerY + dy;
								if (!event._lastCheckRange.blockRegion ||
									window.hasLineOfSight(centerX, centerY, targetX, targetY, event._lastCheckRange.blockRegion)) {
									const screenX = $gameMap.tileWidth() * (targetX - $gameMap._displayX);
									const screenY = $gameMap.tileHeight() * (targetY - $gameMap._displayY);
									detectionSprite.drawRect(
										screenX,
										screenY,
										$gameMap.tileWidth(),
										$gameMap.tileHeight()
									);
								}
							}
						}
					}
					detectionSprite.endFill();
				}
				// FOV Cone Check
				else if (typeof event._lastCheckRange.eyes === 'number') {
					detectionSprite.clear();

					// First draw the complete cone
					detectionSprite.beginFill(0xff0000, 0.2);
					detectionSprite.lineStyle(0);

					// Get cone points
					const points = getVisionConePoints(
						event.x,
						event.y,
						event.direction(),
						event._lastCheckRange.range,
						event._lastCheckRange.eyes
					);

					// Convert points to screen coordinates
					const screenPoints = points.map(point => ({
						x: point.x - $gameMap._displayX * $gameMap.tileWidth(),
						y: point.y - $gameMap._displayY * $gameMap.tileHeight()
					}));

					// Draw the complete cone
					if (screenPoints.length > 0) {
						detectionSprite.moveTo(screenPoints[0].x, screenPoints[0].y);
						screenPoints.forEach((point, index) => {
							if (index > 0) {
								detectionSprite.lineTo(point.x, point.y);
							}
						});
					}
					detectionSprite.endFill();

					// If have blocking regions, create a mask for blocked areas
					if (event._lastCheckRange.blockRegion > 0) {
						const blockMask = new PIXI.Graphics();
						blockMask.beginFill(0x000000, 0.5);

						// Draw blocked areas
						const range = event._lastCheckRange.range;
						const centerX = event.x;
						const centerY = event.y;

						for (let dx = -range; dx <= range; dx++) {
							for (let dy = -range; dy <= range; dy++) {
								const targetX = centerX + dx;
								const targetY = centerY + dy;

								if (!window.hasLineOfSight(centerX, centerY, targetX, targetY, event._lastCheckRange.blockRegion)) {
									const screenX = $gameMap.tileWidth() * (targetX - $gameMap._displayX);
									const screenY = $gameMap.tileHeight() * (targetY - $gameMap._displayY);
									blockMask.drawRect(
										screenX,
										screenY,
										$gameMap.tileWidth(),
										$gameMap.tileHeight()
									);
								}
							}
						}
						blockMask.endFill();
						this.addChild(blockMask);
					}
				}
			}

			if (showHitbox) {
				const hitboxSprite = new PIXI.Graphics();
				this.addChild(hitboxSprite);

				if (showHitbox) {
					const hitboxData = event.hitboxData();
					const centerX = event.screenX();
					const centerY = event.screenY();

					hitboxSprite.beginFill(0xff0000, 0.5);

					// Only apply rotation if custom rotation is enabled
					if (event._useCustomRotationForMoveTowardPoint && event._rotation !== 0) {
						// Draw regular hitbox
						hitboxSprite.drawRect(
							centerX - $gameMap.tileWidth() / 2 + hitboxData.offsetX,
							centerY - $gameMap.tileHeight() + hitboxData.offsetY,
							hitboxData.width * $gameMap.tileWidth(),
							hitboxData.height * $gameMap.tileHeight()
						);

						// Set the pivot point to the casting event's position relative to the hitbox
						hitboxSprite.pivot.x = centerX - hitboxSprite.x;
						hitboxSprite.pivot.y = (centerY - $gameMap.tileHeight() / 2) - hitboxSprite.y;

						// Position hitbox at event's center
						hitboxSprite.x = centerX;
						hitboxSprite.y = centerY;
						hitboxSprite.rotation = (event._rotation * Math.PI) / 180;
					} else {
						// Draw regular hitbox
						hitboxSprite.drawRect(
							centerX - $gameMap.tileWidth() / 2 + hitboxData.offsetX,
							centerY - $gameMap.tileHeight() + hitboxData.offsetY,
							hitboxData.width * $gameMap.tileWidth(),
							hitboxData.height * $gameMap.tileHeight()
						);
					}
				}
				hitboxSprite.endFill();
			}
		});

		// Draw the player's primary hitbox if enabled
		if (showHitboxes) {
			const playerHitboxSprite = new PIXI.Graphics();
			this.addChild(playerHitboxSprite);
			const playerHitboxData = $gamePlayer.hitboxData();
			playerHitboxSprite.beginFill(0x00ff00, 0.5); // Green color for player
			playerHitboxSprite.drawRect(
				$gamePlayer.screenX() - $gameMap.tileWidth() / 2 + playerHitboxData.offsetX,
				$gamePlayer.screenY() - $gameMap.tileHeight() + playerHitboxData.offsetY,
				playerHitboxData.width * $gameMap.tileWidth(),
				playerHitboxData.height * $gameMap.tileHeight()
			);
			playerHitboxSprite.endFill();
		}
	};
}

const _Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function () {
	_Scene_Map_createDisplayObjects.call(this);
	if (showHitboxes) {
		this._hitboxLayer = new HitboxLayer();
		this.addChild(this._hitboxLayer);
	}
};

Game_Event.prototype.hitboxData = function () {
	if (this._cachedHitboxData) return this._cachedHitboxData;

	// Check for custom hitbox data first
	if (this._customHitboxData) {
		this._cachedHitboxData = this._customHitboxData;
		return this._customHitboxData;
	}

	const note = this.event().note;
	// Match both formats: <hitbox: w, h> and <hitbox: w, h, ox, oy>
	const hitboxMatch = note.match(/<hitbox:\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)(?:\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+))?\s*>/i);

	// Default values
	let width = 1;
	let height = 1;
	let offsetX = 0;
	let offsetY = 0;

	if (hitboxMatch) {
		width = parseFloat(hitboxMatch[1]) || 1;
		height = parseFloat(hitboxMatch[2]) || 1;
		// Only set offsets if they were provided in the tag
		if (hitboxMatch[3] !== undefined && hitboxMatch[4] !== undefined) {
			offsetX = parseFloat(hitboxMatch[3]);
			offsetY = parseFloat(hitboxMatch[4]);
		}
	}

	const hitboxKey = `${width}-${height}-${offsetX}-${offsetY}`;

	if (!hitboxCache[hitboxKey]) {
		hitboxCache[hitboxKey] = {
			width,
			height,
			offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
			offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
		};
	}

	this._cachedHitboxData = hitboxCache[hitboxKey];
	return this._cachedHitboxData;
};

PluginManager.registerCommand(HpluginName, "ChangePlayerHitbox", function (args) {
	const width = parseFloat(args.width) || 1;
	const height = parseFloat(args.height) || 1;
	const offsetX = parseFloat(args.offsetX) || 0;
	const offsetY = parseFloat(args.offsetY) || 0;

	$gamePlayer._customHitboxData = {
		width: width,
		height: height,
		offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
		offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
	};

	$gamePlayer._cachedHitboxData = null;
});

Game_Player.prototype.hitboxData = function () {
	if (this._customHitboxData) {
		return this._customHitboxData;
	}

	const hitboxWidth = parseFloat(PluginManager.parameters(HpluginName)['Player Hitbox Width']) || 1;
	const hitboxHeight = parseFloat(PluginManager.parameters(HpluginName)['Player Hitbox Height']) || 1;
	const offsetX = parseFloat(PluginManager.parameters(HpluginName)['Player Offset X']) || 0;
	const offsetY = parseFloat(PluginManager.parameters(HpluginName)['Player Offset Y']) || 0;

	const centeringOffsetX = ($gameMap.tileWidth() - hitboxWidth * $gameMap.tileWidth()) / 2;
	const centeringOffsetY = ($gameMap.tileHeight() - hitboxHeight * $gameMap.tileHeight()) / 2;

	return {
		width: hitboxWidth,
		height: hitboxHeight,
		offsetX: offsetX + centeringOffsetX,
		offsetY: offsetY + centeringOffsetY
	};
};

PluginManager.registerCommand(HpluginName, "ChangeHitboxData", function (args) {
	const eventId = args.eventId === 'this' ? this._eventId : Number(args.eventId);
	const event = $gameMap.event(eventId);
	if (!event) return;

	const currentData = event.hitboxData();
	const width = parseFloat(args.width) || currentData.width;
	const height = parseFloat(args.height) || currentData.height;
	const offsetX = parseFloat(args.offsetX) || currentData.offsetX;
	const offsetY = parseFloat(args.offsetY) || currentData.offsetY;

	event._customHitboxData = {
		width: width,
		height: height,
		offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
		offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
	};

	event._cachedHitboxData = null;
});

// ============= GET DAMAGE AND COOLDOWN FROM NOTETAG ==============
Game_Event.prototype.getCooldownFromNoteTag = function () {
	const note = this.event().note;
	const match = /<cooldown:\s*(.+?)>/i.exec(note);
	if (!match) return 0;
	const cooldownValue = match[1].trim();
	const variableMatch = /v\[(\d+)\]/i.exec(cooldownValue);

	if (variableMatch) {
		const variableId = parseInt(variableMatch[1]);
		return $gameVariables.value(variableId);
	} else {
		return parseInt(cooldownValue) || 0;
	}
};

Game_Event.prototype.getDamageFromNoteTag = function () {
	const note = this.event().note;
	const match = /<dmg:\s*(.+?)>/i.exec(note);
	if (!match) return 0;

	const damageValue = match[1].trim();
	let damage = 0;

	// Actor parameter format check
	const actorMatch = /actor,\s*(\d+),\s*(\w+)/i.exec(damageValue);
	if (actorMatch) {
		const actorId = parseInt(actorMatch[1]);
		const paramType = actorMatch[2].toLowerCase();
		const actor = $gameActors.actor(actorId);

		if (actor) {
			const paramIndices = {
				'mhp': 0,  // Max HP
				'mmp': 1,  // Max MP
				'atk': 2,  // Attack
				'def': 3,  // Defense
				'mat': 4,  // Magic Attack
				'mdf': 5,  // Magic Defense
				'agi': 6,  // Agility
				'luk': 7   // Luck
			};

			const paramIndex = paramIndices[paramType];
			if (paramIndex !== undefined) {
				damage = actor.param(paramIndex);
			}
		}
		return damage;
	}

	// Skill format check
	const skillMatch = /skill,\s*(.+)/i.exec(damageValue);
	if (skillMatch) {
		const skillName = skillMatch[1].trim();
		const skill = $dataSkills.find(s => s && s.name === skillName);
		if (skill) {
			const a = $gameParty.leader();
			const b = this;
			const v = $gameVariables._data;
			damage = Math.max(eval(skill.damage.formula), 0);
		}
		return damage;
	}

	// Variable reference
	const variableMatch = /v\[(\d+)\]/i.exec(damageValue);
	if (variableMatch) {
		damage = $gameVariables.value(parseInt(variableMatch[1]));
	} else {
		// Range check
		const rangeMatch = /(\d+)\s*-\s*(\d+)/.exec(damageValue);
		if (rangeMatch) {
			const min = parseInt(rangeMatch[1]);
			const max = parseInt(rangeMatch[2]);
			damage = Math.floor(Math.random() * (max - min + 1)) + min;
		} else {
			damage = parseInt(damageValue) || 0;
		}
	}

	// Apply global damage formula if exists
	const formula = $gameSystem._damageFormula;
	if (formula && formula !== 'default') {
		const excludeTags = $gameSystem._excludedDamageTags || [];
		const isExcluded = excludeTags.some(tag => this.event().note.includes(tag));

		if (!isExcluded) {
			const a = $gameParty.leader();
			const b = this;
			const v = $gameVariables._data;
			try {
				damage = Math.max(eval(`${damage}${formula}`), 0);
			} catch (e) {
				console.error("Error in damage formula:", e);
			}
		}
	}

	return damage;
};

PluginManager.registerCommand(HpluginName, "DamageStatus", function (args) {
	$gameSystem._damageFormula = args.Formula;
	$gameSystem._excludedDamageTags = args.ExcludeNotetag ? args.ExcludeNotetag.split(',').map(tag => tag.trim()) : [];
});
// ==============================================================

Game_Map.prototype.getEventsWithTags = function (tags) {
	if (!this._eventMap) return [];

	return Array.from(this._eventMap.values()).filter(event => {
		// Skip if event doesn't exist or has no note
		const note = event?.event()?.note;
		if (!note) return false;

		// Check if any of the tags exist in the note
		return tags.some(tag => note.includes(tag));
	});
};

// =========================== Cache notetag trong map update rồi lấy thông tin từ đây ==================================
// This function checks whether two hitboxes are colliding
Game_Map.prototype.hitboxesAreColliding = function (x1, y1, hitboxData1, x2, y2, hitboxData2, rotation1 = 0, rotation2 = 0) {
	// If neither object is rotated, use simple AABB collision
	if (rotation1 === 0 && rotation2 === 0) {
		const left1 = x1 - $gameMap.tileWidth() / 2 + hitboxData1.offsetX;
		const right1 = left1 + hitboxData1.width * $gameMap.tileWidth();
		const top1 = y1 - $gameMap.tileHeight() + hitboxData1.offsetY;
		const bottom1 = top1 + hitboxData1.height * $gameMap.tileHeight();

		const left2 = x2 - $gameMap.tileWidth() / 2 + hitboxData2.offsetX;
		const right2 = left2 + hitboxData2.width * $gameMap.tileWidth();
		const top2 = y2 - $gameMap.tileHeight() + hitboxData2.offsetY;
		const bottom2 = top2 + hitboxData2.height * $gameMap.tileHeight();

		return left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2;
	}

	// For rotated boxes, use OBB
	const getCorners = (x, y, hitboxData, rotation) => {
		const rect = {
			x: x - $gameMap.tileWidth() / 2 + hitboxData.offsetX,
			y: y - $gameMap.tileHeight() + hitboxData.offsetY,
			width: hitboxData.width * $gameMap.tileWidth(),
			height: hitboxData.height * $gameMap.tileHeight()
		};

		const pivotX = x - rect.x;
		const pivotY = (y - $gameMap.tileHeight() / 2) - rect.y;
		const angleRad = rotation * Math.PI / 180;
		const cos = Math.cos(angleRad);
		const sin = Math.sin(angleRad);

		return [
			{ x: (-pivotX * cos + pivotY * sin) + x, y: (-pivotX * sin - pivotY * cos) + y },
			{ x: ((-pivotX + rect.width) * cos + pivotY * sin) + x, y: ((-pivotX + rect.width) * sin - pivotY * cos) + y },
			{ x: ((-pivotX + rect.width) * cos + (pivotY - rect.height) * sin) + x, y: ((-pivotX + rect.width) * sin - (pivotY - rect.height) * cos) + y },
			{ x: (-pivotX * cos + (pivotY - rect.height) * sin) + x, y: (-pivotX * sin - (pivotY - rect.height) * cos) + y }
		];
	};

	const getOBBAxes = (corners) => {
		const axis1 = {
			x: corners[1].x - corners[0].x,
			y: corners[1].y - corners[0].y
		};
		const axis2 = {
			x: corners[3].x - corners[0].x,
			y: corners[3].y - corners[0].y
		};
		const length1 = Math.sqrt(axis1.x * axis1.x + axis1.y * axis1.y);
		const length2 = Math.sqrt(axis2.x * axis2.x + axis2.y * axis2.y);

		return [
			{ x: axis1.x / length1, y: axis1.y / length1 },
			{ x: axis2.x / length2, y: axis2.y / length2 }
		];
	};

	const projectCornersOnAxis = (corners, axis) => {
		let min = (corners[0].x * axis.x + corners[0].y * axis.y);
		let max = min;
		for (let i = 1; i < corners.length; i++) {
			const projection = corners[i].x * axis.x + corners[i].y * axis.y;
			min = Math.min(min, projection);
			max = Math.max(max, projection);
		}
		return { min, max };
	};

	const corners1 = getCorners(x1, y1, hitboxData1, rotation1);
	const corners2 = getCorners(x2, y2, hitboxData2, rotation2);
	const axes = [...getOBBAxes(corners1), ...getOBBAxes(corners2)];

	for (const axis of axes) {
		const projection1 = projectCornersOnAxis(corners1, axis);
		const projection2 = projectCornersOnAxis(corners2, axis);
		if (projection1.max < projection2.min || projection2.max < projection1.min) {
			return false;
		}
	}

	return true;
};

Game_Event.prototype.checkCollisionStatus = function () {
	return this._collisionEnabled !== false;
};

Game_Map.prototype.taggedEventIsCollidingWithTargetEvent = function (targetId, tags, collisionCooldownInFrames = 0, collisionRange = 6) {
	const targetEvent = targetId === 'player' ? $gamePlayer : this._eventMap.get(targetId);
	if (!targetEvent || targetEvent._x == null || targetEvent._y == null) return false;

	const collisionTimestamps = $gameSystem.collisionTimestamps ||= {};
	const collidedOnceEvents = $gameSystem.collidedOnceEvents ||= {};
	const currentTimeInFrames = Graphics.frameCount;
	const collisionRangeSquared = collisionRange * collisionRange;

	const checkSkipCollision = (event) => {
		if (!(event instanceof Game_Event)) return false;

		if (event._collisionEnabled === true) {
			return false;  // Force collisions on, ignore skip collision tag
		}
		if (event._collisionEnabled === false) {
			return true;   // Force collisions off
		}

		// Check for skip collision tag
		const cacheKey = event._eventId + '-' + event._pageIndex;
		this.skipCollisionCache ||= {};

		if (this.skipCollisionCache[cacheKey] === undefined) {
			if (event._pageIndex >= 0) {
				const currentPage = event.event().pages[event._pageIndex];
				if (currentPage?.list) {
					this.skipCollisionCache[cacheKey] = currentPage.list.some(listItem =>
						listItem.code === 108 && listItem.parameters[0] === '<skip collision>'
					);
				} else {
					this.skipCollisionCache[cacheKey] = false;
				}
			} else {
				this.skipCollisionCache[cacheKey] = false;
			}
		}

		return this.skipCollisionCache[cacheKey];
	};

	// Check for region tag format
	const impassableMatch = typeof tags === 'string' ? tags.match(/^impassable\s+([A-E]+)$/i) : null;

	if (impassableMatch) {
		const tilesetLetters = impassableMatch[1].split('');
		const tilesetRanges = tilesetLetters.map(letter => {
			return {
				'A': [
					//[2048, 2815], // Tilesheet A1
					//[2816, 4351], // Tilesheet A2
					[4352, 5887], // Tilesheet A3
					[5888, 8191], // Tilesheet A4
					//[1536, 1663]  // Tilesheet A5
				],
				'B': [[0, 255]],    // B sheet
				'C': [[256, 511]],  // C sheet
				'D': [[512, 767]],  // D sheet
				'E': [[768, 1023]]  // E sheet
			}[letter];
		}).flat(); // Flatten the array of ranges

		const x = targetEvent._x;
		const y = targetEvent._y;

		// Check current and adjacent tiles
		const positions = [
			[x, y],
			[x + 1, y],
			[x - 1, y],
			[x, y + 1],
			[x, y - 1]
		];

		return positions.some(([checkX, checkY]) => {
			const tiles = this.allTiles(checkX, checkY);
			const flags = this.tilesetFlags();

			return tiles.some(tileId => {
				return tilesetRanges.some(range =>
					tileId >= range[0] &&
					tileId <= range[1] &&
					(flags[tileId] & 0x0f)
				);
			});
		});
	}

	// Check for region tag format
	const regionMatch = typeof tags === 'string' ? tags.match(/^region\s+(\d+)$/i) : null;
	if (regionMatch) {
		const regionId = parseInt(regionMatch[1]);

		const collisionKey = (targetId === 'player' ? 'player' : targetId) + '-region-' + regionId;
		const currentTimeInFrames = Graphics.frameCount;
		const lastCollisionTimeInFrames = $gameSystem.collisionTimestamps[collisionKey] || 0;

		if (currentTimeInFrames - lastCollisionTimeInFrames <= collisionCooldownInFrames) return false;

		const x = targetEvent._x;
		const y = targetEvent._y;
		const currentRegion = this.regionId(x, y);

		// Check if current position is adjacent to the target region
		const isAdjacent = (
			(this.regionId(x + 1, y) === regionId && currentRegion !== regionId) ||
			(this.regionId(x - 1, y) === regionId && currentRegion !== regionId) ||
			(this.regionId(x, y + 1) === regionId && currentRegion !== regionId) ||
			(this.regionId(x, y - 1) === regionId && currentRegion !== regionId)
		);

		if (isAdjacent) {
			$gameSystem.collisionTimestamps[collisionKey] = currentTimeInFrames;
			return true;
		}
		return false;
	}

	const checkCollision = (event, matchingTag) => {
		if (event instanceof Game_Event) {
			// Check skip collision for both the current event and target event
			if (checkSkipCollision(event)) return false;
			if (targetEvent instanceof Game_Event && checkSkipCollision(targetEvent)) return false;
		}

		const collisionKey = (event === $gamePlayer ? 'player' : event._eventId) + '-' +
			(targetId === 'player' ? 'player' : targetId) + '-' +
			matchingTag;

		if (collisionCooldownInFrames === 0 && collidedOnceEvents[collisionKey]) return false;

		let actualCooldown = collisionCooldownInFrames;
		if (collisionCooldownInFrames === "cooldown" && event instanceof Game_Event) {
			actualCooldown = event.getCooldownFromNoteTag();
		}

		const lastCollisionTimeInFrames = collisionTimestamps[collisionKey] || 0;
		if (currentTimeInFrames - lastCollisionTimeInFrames <= actualCooldown) return false;

		if (!this.hitboxesAreColliding(
			event.screenX(),
			event.screenY(),
			event.hitboxData(),
			targetEvent.screenX(),
			targetEvent.screenY(),
			targetId === 'player' ? targetEvent.hitboxData() : targetEvent.hitboxData(),
			event._useCustomRotationForMoveTowardPoint ? event._rotation : 0,
			targetEvent._useCustomRotationForMoveTowardPoint ? targetEvent._rotation : 0
		)) return false;

		collisionTimestamps[collisionKey] = currentTimeInFrames;
		if (collisionCooldownInFrames === 0) collidedOnceEvents[collisionKey] = true;

		if (event instanceof Game_Event) {
			const damageValue = event.getDamageFromNoteTag();
			CollisionManager.addCollision(targetId === 'player' ? 0 : targetId, damageValue);
		}

		return true;
	};

	if (tags === 'player') {
		const dx = Math.abs($gamePlayer._x - targetEvent._x);
		const dy = Math.abs($gamePlayer._y - targetEvent._y);
		if (dx * dx + dy * dy <= collisionRangeSquared) {
			return checkCollision($gamePlayer, 'player');
		}
		return false;
	}

	_tagSet.clear();
	for (const tag of Array.isArray(tags) ? tags : [tags]) _tagSet.add(tag);

	for (const event of this._eventMap.values()) {
		if (checkSkipCollision(event)) continue;
		if (targetId !== 'player' && event._eventId === targetId) continue;

		const eventNote = event.event().note;
		let matchingTag = null;
		for (const tag of _tagSet) {
			if (eventNote.includes(tag)) {
				matchingTag = tag;
				break;
			}
		}
		if (!matchingTag) continue;

		if (checkCollision(event, matchingTag)) return true;
	}

	return false;
};

PluginManager.registerCommand(HpluginName, "setCollisionStatus", function (args) {
	const event = $gameMap.event(this._eventId);
	if (event) {
		event._collisionEnabled = args.enabled === 'true';
	}
});

//============================================================
// DAMAGE TEXT POP UP
//============================================================

const eventData = new Map();
const eventClocks = new Map();
const eventHeightCache = new Map();

const damageTextSettings = JSON.parse(Hparameters['damageTextSettings'] || '{}');

const loadCustomFont = (fontFile) => {
	if (!fontFile) return null;

	const fontFace = fontFile.split('.')[0];
	const fontPath = `fonts/${fontFile}`;

	const customFont = new FontFace(fontFace, `url('${fontPath}')`);
	customFont.load().then(function (loadedFont) {
		document.fonts.add(loadedFont);
	});

	return fontFace;
};

const defaultConfig = {
	fontFace: loadCustomFont(damageTextSettings.fontFace) || "rmmz-mainfont",
	fontSize: Number(damageTextSettings.fontSize) || 28,
	fontColor: damageTextSettings.fontColor || "#e6b400",
	outline: damageTextSettings.outline === 'true',
	outlineColor: damageTextSettings.outlineColor || "#900C3F",
	currentDisplayedValue: ""
};

class Sprite_Variable extends Sprite {
	constructor(config, variableId, duration, offsetX, offsetY, value = null, addValue = false, eventSprite) {
		super();
		this._id = Date.now() + Math.random();
		this._variableId = variableId;
		this._duration = duration;
		this._currentDuration = duration;
		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._addValue = addValue;
		this._config = config;
		this._isDirty = true;
		this._lastValue = null;
		this._lastPosition = { x: 0, y: 0 };
		this._eventSprite = eventSprite;
		this._animationType = config.animationType || 'bounce';

		this.bitmap = new Bitmap(240, 48);
		this.bitmap.fontFace = this._config.fontFace;
		this.bitmap.textColor = this._config.fontColor;
		this.bitmap.fontSize = this._config.fontSize;

		this.setupOutline();

		this.updateValue(value);
		this.anchor.set(0.5, 1);

		this._value = value !== null ? value : $gameVariables.value(variableId);
		this._isLargeNumber = this._value >= largeNumberThreshold;
		this._initialX = eventSprite.x + offsetX;
		this._initialY = eventSprite.y - eventSprite.height / 2 + offsetY;

		if (this._animationType === 'bounce') {
			this._jumpDuration = Math.floor(this._duration * 0.7);
			this._jumpHeight = this._duration * 0.5;
			this._gravity = (2 * this._jumpHeight) / Math.pow(this._jumpDuration / 2, 2);
			this._initialVelocity = -Math.sqrt(2 * this._gravity * this._jumpHeight);
			this._velocity = this._initialVelocity;
			this._jumpY = 0;
			this._jumpAngle = Math.random() * Math.PI * 2;
			this._jumpDistance = this._duration * 0.8;
			this._horizontalVelocity = Math.cos(this._jumpAngle) * (this._jumpDistance / this._jumpDuration);
			this._jumpX = 0;
		} else if (this._animationType === 'moveup') {
			this._initialMoveSpeed = 2.5;
			this._totalMoveDistance = 0;
			this._maxMoveDistance = 48;
			this._moveY = 0;
		} else if (this._animationType === 'popup') {
			this._initialMoveSpeed = 2;
			this._totalMoveDistance = 0;
			this._maxMoveDistance = 48;
			this._moveY = 0;
			this._popupPhase = 0;
			this._maxScale = 1.5;
		}

		if (this._isLargeNumber) {
			this._jumpHeight *= 1; // Jump 50% higher
			this._jumpDuration = Math.floor(this._jumpDuration * 1); // Longer jump duration
			this._jumpDistance = this._duration * 1; // Distance scales with duration
		}

		this._fadeOutStart = this._duration * 0.3;
		this._initialScale = this._isLargeNumber ? 1 : 0.8;
		this.scale.set(this._initialScale, this._initialScale);
	}

	setupOutline() {
		if (this._config.outline) {
			this.bitmap.outlineColor = this._config.outlineColor;
			this.bitmap.outlineWidth = 2;
		} else {
			this.bitmap.outlineWidth = 0;
		}
	}

	updateValue(value) {
		if (value !== null) {
			if (this._addValue && typeof value === 'number' && typeof this._config.currentDisplayedValue === 'number') {
				this._config.currentDisplayedValue += value;
			} else {
				this._config.currentDisplayedValue = value;
			}
		} else {
			this._config.currentDisplayedValue = $gameVariables.value(this._variableId);
		}
		this._isDirty = true;
	}

	update() {
		super.update();

		if (this._isDirty) {
			this.redraw();
			this._isDirty = false;
		}

		this._currentDuration--;

		if (this._animationType === 'bounce') {
			// Bounce animation
			if (this._currentDuration > this._duration - this._jumpDuration) {
				this._velocity += this._gravity;
				this._jumpY += this._velocity;
				this._jumpX += this._horizontalVelocity;

				if (this._jumpY > 0) {
					this._jumpY = 0;
					this._velocity = 0;
				}

				if (this._isLargeNumber) {
					const jumpProgress = 1 - ((this._currentDuration - (this._duration - this._jumpDuration)) / this._jumpDuration);
					const scaleMultiplier = 1.7 - (jumpProgress * 0.5);
					this.scale.set(this._initialScale * scaleMultiplier, this._initialScale * scaleMultiplier);
				}
			}
		} else if (this._animationType === 'moveup') {
			// Move up animation
			if (this._totalMoveDistance < this._maxMoveDistance) {
				const progress = this._totalMoveDistance / this._maxMoveDistance;
				const currentSpeed = this._initialMoveSpeed * (1 - progress * progress);
				this._moveY -= currentSpeed;
				this._totalMoveDistance += currentSpeed;
			}
		} else if (this._animationType === 'popup') {
			this._popupPhase = 1 - (this._currentDuration / this._duration);

			if (this._popupPhase < 0.2) {
				// Scale up
				const scaleProgress = this._popupPhase / 0.2;
				const currentScale = 1 + (this._maxScale - 1) * scaleProgress;
				this.scale.set(currentScale, currentScale);
			} else {
				// Scale down
				const scaleProgress = (this._popupPhase - 0.3) / 0.7; // Use remaining time for scale down
				const currentScale = this._maxScale - (this._maxScale - 1) * Math.min(1, scaleProgress);
				this.scale.set(currentScale, currentScale);
			}

			// Upward movement
			if (this._totalMoveDistance < this._maxMoveDistance) {
				const progress = this._totalMoveDistance / this._maxMoveDistance;
				const currentSpeed = this._initialMoveSpeed * (1 - progress * progress);
				this._moveY -= currentSpeed;
				this._totalMoveDistance += currentSpeed;
			}
		}

		// Fade out
		if (this._animationType === 'bounce') {
			if (this._currentDuration <= this._fadeOutStart) {
				this.opacity = (this._currentDuration / this._fadeOutStart) * 255;
			}
		} else if (this._animationType === 'moveup' || this._animationType === 'popup') {
			const fadeStartPercentage = 0.7;
			if (this._currentDuration <= this._duration * fadeStartPercentage) {
				this.opacity = (this._currentDuration / (this._duration * fadeStartPercentage)) * 255;
			}
		}

		this.updatePosition();
		if (!this._isLargeNumber && this._animationType === 'bounce') {
			this.updateScale();
		}

		if (this._currentDuration <= 0) {
			this.parent.removeChild(this);
		}
	}

	updatePosition() {
		if (this._animationType === 'bounce') {
			this.x = this._initialX + this._jumpX;
			this.y = this._initialY + this._jumpY;
		} else if (this._animationType === 'moveup' || this._animationType === 'popup') {
			this.x = this._initialX;
			this.y = this._initialY + this._moveY;
		}
	}

	updateScale() {
		const progress = 1 - (this._currentDuration / this._duration);
		const scale = this._initialScale + Math.sin(progress * Math.PI) * 0.2;
		this.scale.set(scale, scale);
	}

	redraw() {
		this.bitmap.clear();
		this.opacity = this._currentDuration > this._duration * 0.5 ? 255 : (this._currentDuration / (this._duration * 0.5)) * 255;
		const displayText = String(this._config.currentDisplayedValue);
		this.bitmap.drawText(displayText, 0, 0, 240, 48, "center");
	}
}

function updateEventClocks() {
	for (const [eventId, clock] of eventClocks) {
		let currentClock = clock + 1;
		if (currentClock >= 60) {
			const config = eventData.get(eventId);
			if (config) {
				config.currentDisplayedValue = 0;
				currentClock = 0;
			}
		}
		eventClocks.set(eventId, currentClock);
	}

	// Clean up removed events
	for (const eventId of eventClocks.keys()) {
		if (!$gameMap._eventMap.has(eventId)) {
			eventClocks.delete(eventId);
			eventData.delete(eventId);
		}
	}
}

PluginManager.registerCommand(HpluginName, "ShowVariableOnEvent", function (args) {
	let eventIds = [];
	if (args.eventId.toLowerCase() === "player") {
		eventIds.push(0);
	} else if (args.eventId.toLowerCase() === "this") {
		eventIds.push(this._eventId);
	} else {
		eventIds.push(Number(args.eventId));
	}

	const weaponAttack = args.weaponAttack || 'none';
	const duration = Number(args.duration);
	const criticalValue = args.criticalValue ? Number(args.criticalValue) : 0;
	let offsetX = 0;
	let offsetY = 0;
	const addValue = PluginManager.parameters(HpluginName).addValue.toLowerCase() === "true";

	let value = null;

	if (weaponAttack !== 'none') {
		const leader = $gameParty.leader();
		const weapon = weaponAttack === 'slot1' ? leader.equips()[0] : leader.equips()[1];
		if (weapon && DataManager.isWeapon(weapon)) {
			value = weapon.params[2];
		} else {
			return;
		}
	}

	for (const eventId of eventIds) {
		let targetSprite;
		if (eventId === 0) {
			// For player
			targetSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === $gamePlayer
			);
		} else {
			// For events
			const event = $gameMap.event(eventId);
			if (!event) continue;
			targetSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === event
			);
		}
		if (!targetSprite) continue;

		if (args.value === "damage") {
			const actualEventId = this._eventId;
			if (eventId === 0) {
				// For player, get damage from current event's calculation
				const damages = CollisionManager.getAllDamage(actualEventId);
				if (!damages || damages.length === 0) continue;

				const playerDamages = CollisionManager.getAllDamage(0);
				if (!playerDamages || playerDamages.length === 0) continue;

				// Use the player's calculated damage value
				value = Math.abs(playerDamages[playerDamages.length - 1]);
			} else {
				// For events, use normal damage handling
				const damages = CollisionManager.getAllDamage(eventId);
				if (!damages || damages.length === 0) continue;
				value = Math.abs(damages[damages.length - 1]);
			}
		} else if (args.value === "exp") {
			if (eventId !== 0) {
				const event = $gameMap.event(eventId);
				const eventData = event.event();
				const xpMatch = eventData.note.match(/<exp:\s*(.+?)\s*>/i);
				if (xpMatch) {
					const xpValue = xpMatch[1].trim();
					const rangeMatch = xpValue.match(/(\d+)\s*-\s*(\d+)/);
					if (rangeMatch) {
						const min = parseInt(rangeMatch[1]);
						const max = parseInt(rangeMatch[2]);
						value = Math.floor(Math.random() * (max - min + 1)) + min;
					} else {
						value = parseInt(xpValue);
					}
				} else {
					const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
					if (hpMatch) {
						const enemyName = hpMatch[1].trim();
						const enemy = $dataEnemies.find(e => e && e.name === enemyName);
						if (enemy) {
							value = enemy.exp;
						}
					}
				}
				if (value !== null) {
					value = value + "XP";
				}
			}
		} else if (value === null) {
			try {
				value = eval(args.value);
			} catch (e) {
				value = args.value;
			}
		}

		if (typeof value === 'number' && criticalValue !== 0) {
			value += criticalValue;
		}

		let config = { ...defaultConfig };
		if (value >= largeNumberThreshold) {
			config.fontColor = "#fc3223";
			config.outlineColor = "#900C3F";
		} else {
			if (args.visualSettings) {
				const visualSettings = JSON.parse(args.visualSettings);
				if (visualSettings.fontColor?.trim()) config.fontColor = visualSettings.fontColor;
				if (visualSettings.outlineColor?.trim()) config.outlineColor = visualSettings.outlineColor;
				if (visualSettings.offsetX !== undefined && visualSettings.offsetX !== '') offsetX = Number(visualSettings.offsetX);
				if (visualSettings.offsetY !== undefined && visualSettings.offsetY !== '') offsetY = Number(visualSettings.offsetY);
			}
		}
		config.animationType = args.animation || 'bounce';
		const variableSprite = new Sprite_Variable(config, null, duration, offsetX, offsetY, value, addValue, targetSprite);
		SceneManager._scene._spriteset.addChild(variableSprite);
	}
});

const originalSceneMapUpdate = Scene_Map.prototype.update;
Scene_Map.prototype.update = function (sceneActive) {
	originalSceneMapUpdate.call(this, sceneActive);
	updateEventClocks();
};

//==========================================================
// EVENT HP BAR
//==========================================================

const _HGame_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function () {
	_HGame_Map_initialize.call(this);
	this.initializeRemovedEventHpBars();
};

Game_Map.prototype.initializeRemovedEventHpBars = function () {
	this._removedEventHpBars = {};
};

const _HGame_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function (mapId, eventId) {
	_HGame_Event_initialize.call(this, mapId, eventId);
	this.setInitialHp();
	this.setupZIndex();
	this._isHovered = false;
};

Game_Event.prototype.setupZIndex = function () {
	this._zIndex = this.screenZ();
};

Game_Event.prototype.zIndex = function () {
	return this._zIndex;
};

Game_Event.prototype.getHpValueFromNote = function () {
	const eventData = this.event();
	if (!eventData?.note) return null;

	const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
	if (!hpMatch) return null;

	const hpString = hpMatch[1].trim();

	// Check for actor HP format
	const actorMatch = /actor,\s*(\d+)/i.exec(hpString);
	if (actorMatch) {
		const actorId = parseInt(actorMatch[1]);
		const actor = $gameActors.actor(actorId);
		if (actor) {
			this._linkedActorId = actorId;
			return actor.hp;
		}
	}

	// Check for enemy name format
	const enemy = $dataEnemies.find(e => e && e.name === hpString);
	if (enemy) {
		return enemy.params[0];
	}

	// Handle range HP
	const rangeMatch = /(\d+)\s*-\s*(\d+)/.exec(hpString);
	if (rangeMatch) {
		const min = parseInt(rangeMatch[1]);
		const max = parseInt(rangeMatch[2]);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Handle static HP
	return parseInt(hpString) || 0;
};

Game_Event.prototype.setInitialHp = function() {
    const eventData = this.event();
    if (!eventData?.note) return;

    if (eventData.note.match(/<hideHP>/i)) {
        this._noHpBar = true;
        return;
    }
    
    const hpValue = this.getHpValueFromNote();
    if (hpValue !== null) {
        this._hp = hpValue;
    }
};

const _H_Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
Game_Actor.prototype.displayLevelUp = function (newSkills) {
	// Skip level up message if in Scene_Map
	if (SceneManager._scene instanceof Scene_Map) {
		return;
	}
	_H_Game_Actor_displayLevelUp.call(this, newSkills);
};

class EventHpBar extends Sprite {
	constructor(event, hp, offsetY, radius) {

		super();
		this._event = event;
		if (event._linkedActorId) {
			const actor = $gameActors.actor(event._linkedActorId);
			if (actor) {
				this._maxHp = actor.mhp;
				this._currentHp = actor.hp;
				this._targetHp = actor.hp;
			}
		} else {
			this._maxHp = hp;
			this._currentHp = hp;
			this._targetHp = hp;
		}
		this._previousHp = this._currentHp;
		this._offsetY = offsetY || 0;
		this._radius = radius || parseInt(Hparameters["showRadius"]);
		this._scale = this.parseHpScale(event);
		this.bitmap = new Bitmap(barWidth * this._scale, barHeight * this._scale);
		this._bitmapWidth = this.bitmap.width;
		this._bitmapHeight = this.bitmap.height;
		this.anchor.set(0.5, 1);
		this._fadingOut = false;
		this._fadeOutFrames = 0;
		this._maxFadeOutFrames = 13;
		this._hpChangeDuration = 3;
		this._hpChangeFrames = 0;
		this.opacity = 0;
		this._fadeInFrames = 0;
		this._maxFadeInFrames = 13;
		this._shouldDisplay = false;
		this._gaugeYOffset = 0;
		this.z = event.zIndex() + 1;
		this.anchor.set(0.5, 0.5);

		this._borderSprite = new Sprite();
		this.addChild(this._borderSprite);
		this._borderSprite.anchor.set(0.5, 0.5);
		if (borderImage) {
			this._borderSprite.bitmap = ImageManager.loadSystem(borderImage);
		}

		this.visible = false; // Hide HP bar when created
		this._removedEventHpBars = new Set();
		this._lastDrawnHp = null;
		this._lastEventScreenPos = null;
		this._lastEventScreenPosY = null;
		this._lastCharacterName = null;
		this._lastCharacterIndex = null;
		this.refresh();
	}

	parseHpScale(event) {
		const scaleMatch = event.event().note.match(/<hpScale:\s*(\d*\.?\d+)\s*>/i);
		return scaleMatch ? parseFloat(scaleMatch[1]) : 1;
	}

	update() {
		super.update();
		this.updatePosition();
		this.updateVisibility();
		if (this._fadingOut) {
			this.updateFadeOut();
		} else if (this._shouldDisplay && this._fadeInFrames < this._maxFadeInFrames) {
			this.updateFadeIn();
		}
		this.updateHpChange();
		this.updateFlash();
	}

	startFadeOut() {
		this._fadingOut = true;
	}

	updateFadeIn() {
		if (this._fadeInFrames < this._maxFadeInFrames) {
			this.opacity = (this._fadeInFrames / this._maxFadeInFrames) * 255;
			this._fadeInFrames++;
		} else {
			this.visible = true;
			this._fadeInFrames = this._maxFadeInFrames;
		}
	}

	updateVisibility() {
		if (!this._event || !$gamePlayer || SceneManager._scene instanceof Scene_Menu || this._event._noHpBar) {
			this.visible = false;
			this._shouldDisplay = false;
			return;
		}

		if (this._manuallyHidden) {
			this.visible = false;
			this._shouldDisplay = false;
			return;
		}

		const dx = this._event.x - $gamePlayer.x;
		const dy = this._event.y - $gamePlayer.y;
		const distanceSquared = dx * dx + dy * dy;
		const radiusSquared = this._radius * this._radius;

		if (distanceSquared <= radiusSquared) {
			if (!this.visible && !this._fadingOut) {
				this.visible = true;
				this._fadeInFrames = 0;
			}
			this._shouldDisplay = true;
			this._fadeOutFrames = 0;
		} else if (this.visible && !this._fadingOut) {
			this._shouldDisplay = false;
			this.startFadeOut();
			this._fadeInFrames = 0;
		}

		if (this._borderSprite) {
			this._borderSprite.opacity = this.opacity;
		}
	}

	startFadeOut() {
		this._fadingOut = true;
	}

	updateFadeOut() {
		if (this._fadeOutFrames < this._maxFadeOutFrames) {
			this.opacity = (1 - this._fadeOutFrames / this._maxFadeOutFrames) * 255;
			this._fadeOutFrames++;
		} else {
			this._fadingOut = false;
			this.visible = false;
			this._fadeOutFrames = 0;
		}
	}

	updatePosition() {
		if (!this._event) {
			return;
		}

		const eventScreenPos = this._event.screenX();
		const eventScreenPosY = this._event.screenY();
		const characterName = this._event.characterName();
		const characterIndex = this._event.characterIndex();

		// Always update position
		const spriteHeight = this.getEventSpriteHeight(characterName, characterIndex);
		this.x = eventScreenPos;
		this.y = eventScreenPosY - spriteHeight + this._offsetY - 15;

		// Update last known values
		this._lastEventScreenPos = eventScreenPos;
		this._lastEventScreenPosY = eventScreenPosY;
		this._lastCharacterName = characterName;
		this._lastCharacterIndex = characterIndex;

		// Update border sprite position if it exists
		if (this._borderSprite) {
			this._borderSprite.x = 0;
			this._borderSprite.y = 0;
			this._borderSprite.scale.set(this._scale, this._scale);
		}
	}

	getEventSpriteHeight(characterName, characterIndex) {
		if (!characterName) return 48;

		if (eventHeightCache.has(characterName)) {
			return eventHeightCache.get(characterName);
		}

		const bitmap = ImageManager.loadCharacter(characterName);
		const defaultHeight = ImageManager.isBigCharacter(characterName) ? 64 : 48;
		eventHeightCache.set(characterName, defaultHeight);

		bitmap.addLoadListener(() => {
			const big = ImageManager.isBigCharacter(characterName);
			const charWidth = big ? bitmap.width / 3 : bitmap.width / 12;
			const charHeight = big ? bitmap.height / 4 : bitmap.height / 8;

			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = charWidth;
			canvas.height = charHeight;

			const sx = (characterIndex % 4 * 3) * charWidth;
			const sy = Math.floor(characterIndex / 4) * 4 * charHeight;
			ctx.drawImage(bitmap._canvas || bitmap._image,
				sx, sy, charWidth, charHeight,
				0, 0, charWidth, charHeight);

			const imageData = ctx.getImageData(0, 0, charWidth, charHeight);
			const data = imageData.data;

			// Find the highest non-transparent pixel
			let topPixel = charHeight;
			for (let y = 0; y < charHeight; y++) {
				for (let x = 0; x < charWidth; x++) {
					const alpha = data[(y * charWidth + x) * 4 + 3];
					if (alpha > 0) {
						topPixel = y;
						y = charHeight;
						break;
					}
				}
			}

			// Find the lowest non-transparent pixel
			let bottomPixel = 0;
			for (let y = charHeight - 1; y >= 0; y--) {
				for (let x = 0; x < charWidth; x++) {
					const alpha = data[(y * charWidth + x) * 4 + 3];
					if (alpha > 0) {
						bottomPixel = y + 1;
						y = -1;
						break;
					}
				}
			}

			// Calculate actual height and cache it
			const actualHeight = bottomPixel - topPixel;
			eventHeightCache.set(characterName, actualHeight > 0 ? actualHeight : defaultHeight);

			// Force position update after height calculation
			this.updatePosition();
		});

		return eventHeightCache.get(characterName);
	}

	refresh() {
		const currentHp = Math.floor(this._currentHp);
		if (this._lastDrawnHp === currentHp) {
			return; // No change in HP, skip redraw
		}

		const width = this._bitmapWidth;
		const height = this._bitmapHeight;
		const rate = this._currentHp / this._maxHp;
		const fillW = Math.floor(width * rate);

		this.bitmap.clear();

		// Draw background
		this.bitmap.fillRect(0, 0, width, height, '#000000');

		if (fillW > 0) {
			// Create crisp two-color gradient
			const ctx = this.bitmap.context;
			const gradient = ctx.createLinearGradient(0, 0, 0, height);

			// Check for custom color in event note
			let topColor = '#ff4a0d';
			let bottomColor = '#e60505';

			if (this._event) {
				const colorMatch = this._event.event().note.match(/<hpColor:\s*([#a-fA-F0-9]+)\s*>/i);
				if (colorMatch) {
					topColor = colorMatch[1];
					// Create slightly darker version for bottom color
					const rgb = this.hexToRgb(topColor);
					bottomColor = this.rgbToHex(
						Math.max(0, rgb.r - 40),
						Math.max(0, rgb.g - 40),
						Math.max(0, rgb.b - 40)
					);
				}
			}

			// Top color
			gradient.addColorStop(0, topColor);
			gradient.addColorStop(0.49, topColor);

			// Bottom color
			gradient.addColorStop(0.5, bottomColor);
			gradient.addColorStop(1, bottomColor);

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, fillW, height);
		}

		this._lastDrawnHp = currentHp;
	}

	hexToRgb(hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	rgbToHex(r, g, b) {
		return '#' + [r, g, b].map(x => {
			const hex = x.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		}).join('');
	}

	setHp(value) {
		this._targetHp = Math.max(0, Math.min(value, this._maxHp));
		this._hpChangeFrames = this._hpChangeDuration;
	}

	addHp(value) {
		this._targetHp = Math.max(0, this._targetHp + value);
		this._hpChangeFrames = this._hpChangeDuration;
	}

	updateHpChange() {
		if (this._hpChangeFrames > 0) {
			const prevHp = this._currentHp;
			this._currentHp += (this._targetHp - this._currentHp) / this._hpChangeFrames;

			if (this._currentHp < prevHp) {
				this._flashFrames = 15;
				this.updateFlash();
			}

			// If HP dropped to 0, gain Exp
			if (Math.floor(this._currentHp) <= 0 && Math.floor(prevHp) > 0 && gainExpFromEnemies) {
				const eventData = this._event.event();
				let totalExp = 0;

				// Enemy HP notetag
				const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
				if (hpMatch) {
					const enemyName = hpMatch[1].trim();
					const enemy = $dataEnemies.find(e => e && e.name === enemyName);
					if (enemy) {
						totalExp += enemy.exp;
					}
				}

				// Direct XP notetag
				const xpMatch = eventData.note.match(/<exp:\s*(.+?)\s*>/i);
				if (xpMatch) {
					const xpValue = xpMatch[1].trim();
					const rangeMatch = xpValue.match(/(\d+)\s*-\s*(\d+)/);
					if (rangeMatch) {
						const min = parseInt(rangeMatch[1]);
						const max = parseInt(rangeMatch[2]);
						totalExp += Math.floor(Math.random() * (max - min + 1)) + min;
					} else {
						totalExp += parseInt(xpValue);
					}
				}

				// Give total EXP if any was determined
				if (totalExp > 0) {
					$gameParty.members().forEach(actor => {
						actor.gainExp(totalExp);
					});
				}
			}

			this.refresh();
			this._hpChangeFrames--;
		}
		this._previousHp = this._currentHp;
	}

	hasHpDecreased() {
		return this._currentHp < this._previousHp;
	}

	updateFlash() {
		if (this._flashFrames > 0) {
			const color = "white";
			const intensity = 200 * Math.sin((this._flashFrames % 6) * Math.PI / 15);
			this.setBlendColor([255, 255, 255, intensity]);
			this._flashFrames--;
		} else {
			this.setBlendColor([0, 0, 0, 0]);
		}
	}
}

const _Game_Actor_setHp = Game_Actor.prototype.setHp;
Game_Actor.prototype.setHp = function (hp) {
	_Game_Actor_setHp.call(this, hp);

	// Update HP bars of linked events
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const spriteset = SceneManager._scene._spriteset;
		spriteset._eventHpBars.forEach(hpBar => {
			if (hpBar._event._linkedActorId === this._actorId) {
				hpBar.setHp(this.hp);
			}
		});
	}
};

const _Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function () {
	_Spriteset_Map_update.call(this);
	if (Graphics.frameCount % 3 === 0) {
		const len = this._eventHpBars.length;
		for (let i = 0; i < len; i++) {
			this._eventHpBars[i].update();
		}
	}
	this.updateVariableSprites();
};

Spriteset_Map.prototype.updateVariableSprites = function () {
	this.children.forEach(child => {
		if (child instanceof Sprite_Variable) {
			child.update();
			if (child._currentDuration <= 0) {
				this.removeChild(child);
			}
		}
	});
};

Spriteset_Map.prototype.cleanupEventHpBars = function () {
	this._eventHpBars = this._eventHpBars.filter(hpBar => {
		if (!$gameMap.events().includes(hpBar._event)) {
			this._tilemap.removeChild(hpBar);
			return false;
		}
		return true;
	});
};

Game_Interpreter.prototype.currentEvent = function () {
	return this.isOnCurrentMap() ? $gameMap.event(this._eventId) : null;
};

const _Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
	_Spriteset_Map_createCharacters.call(this);
	this._eventHpBars = [];

	const events = $gameMap.events();
	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		if (!event || event._noHpBar) continue;

		let eventData;
		if (event instanceof Hendrix_TemplateEvent) {
			eventData = $dataTemplateMap.events[event._templateEventId];
		} else if (typeof event.event === 'function') {
			eventData = event.event();
		} else {
			continue;
		}
		if (!event._noHpBar) {
			const eventData = event.event();
			if (eventData && eventData.note) {
				const hpValue = event.getHpValueFromNote();
				const hpYMatch = eventData.note.match(/<hpy:\s*(-?\d+)\s*>/i);
				const radiusMatch = eventData.note.match(/<radius:\s*(\d+)\s*>/i);
				if (hpValue !== null) {
					const offsetY = hpYMatch ? parseInt(hpYMatch[1]) : 0;
					const radius = radiusMatch ? parseInt(radiusMatch[1]) : defaultRadius;
					const hpBar = new EventHpBar(event, hpValue, offsetY, radius);
					this._eventHpBars.push(hpBar);
					this._tilemap.addChild(hpBar);
				}
			}
		}
	}
};

Game_Map.prototype.getCurrentEventHp = function (eventId) {
	const event = this.event(eventId);
	if (!event) return null;

	// Check HP bar if available
	if (SceneManager._scene instanceof Scene_Map &&
		SceneManager._scene._spriteset?._eventHpBars) {
		const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
			bar => bar._event === event
		);
		if (hpBar) {
			return Math.max(0, hpBar._currentHp);
		}
	}

	// Check notetag value last
	const hpValue = event.getHpValueFromNote();
	if (hpValue !== null) {
        return hpValue;
    }

	return null;
};

Game_Interpreter.prototype.updateEventHp = function (eventId, value) {
    const event = eventId === "this" ? this.currentEvent() : $gameMap.event(eventId);
    if (!event) return;

    if (SceneManager._scene instanceof Scene_Map &&
        SceneManager._scene._spriteset?._eventHpBars) {
        const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
            bar => bar._event === event
        );
        if (hpBar) {
            const newHp = Math.max(0, hpBar._currentHp + value);
            hpBar._targetHp = newHp;
            hpBar._currentHp = newHp;
            hpBar._hpChangeFrames = hpBar._hpChangeDuration;
            hpBar.refresh();
        }
    }
};

Game_Map.prototype.hasHpDecreased = function (eventId) {
	const event = this.event(eventId);
	if (!event) return false;
	const currentHp = this.getCurrentEventHp(eventId);
	const originalHp = parseInt(event.event().meta.hp || 0);
	return currentHp < originalHp;
};

PluginManager.registerCommand(HpluginName, "UpdateEventHp", function (args) {
	const eventIdArg = args.eventId;
	const useWeaponAttack = args.useWeaponAttack;

	const updateHp = (eventId) => {
		let actualEventId = eventId;
		if (eventId === "this") {
			actualEventId = this._eventId;
		}

		let hpChange = 0;
		if (args.value.includes('damage')) {
			const damages = CollisionManager.getAllDamage(actualEventId);
			if (damages && damages.length > 0) {
				let latestDamage = damages[damages.length - 1];
				//console.log('Base damage:', latestDamage);

				let def = 0, mdef = 0;
				if (args.value.includes('def') || args.value.includes('mdef')) {
					const event = $gameMap.event(actualEventId);
					if (event) {
						const note = event.event().note;
						//console.log('Event note:', note);
						const enemyMatch = note.match(/<hp:\s*(.+?)\s*>/i);
						if (enemyMatch) {
							const enemyName = enemyMatch[1].trim();
							//console.log('Found enemy name:', enemyName);
							const enemy = $dataEnemies.find(e => e && e.name === enemyName);
							if (enemy) {
								def = enemy.params[3];
								mdef = enemy.params[5];
								//console.log('Enemy stats - DEF:', def, 'MDEF:', mdef);
							}
						}
					}
				}

				let expression = args.value;
				const parenRegex = /\((.*?)\)/g;
				expression = expression.replace(parenRegex, (match, innerContent) => {
					if (innerContent.includes('damage')) {
						const evalInner = innerContent
							.replace('damage', latestDamage.toString())
							.replace('def', def.toString())
							.replace('mdef', mdef.toString());
						try {
							// Evaluate inner expression and ensure it doesn't go below 0
							const innerResult = Math.max(0, eval(evalInner));
							return `(${innerResult})`;
						} catch (e) {
							return `(${latestDamage})`;
						}
					}
					return match;
				});

				// Handle any remaining damage/def/mdef outside parentheses
				expression = expression
					.replace('damage', latestDamage.toString())
					.replace('def', def.toString())
					.replace('mdef', mdef.toString());

				expression = expression.replace(/\s+/g, '');

				//console.log('Final expression to evaluate:', expression);

				try {
					hpChange = eval(expression);
					// Store the calculated value
					CollisionManager.addCalculatedDamage(actualEventId, hpChange);
				} catch (e) {
					//console.error('Invalid damage expression:', expression);
					hpChange = -latestDamage;
					CollisionManager.addCalculatedDamage(actualEventId, hpChange);
				}
			}
		} else if (useWeaponAttack !== 'none') {
			const equippedWeapons = $gameParty.leader().equips();
			let weaponAttack = 0;

			if (useWeaponAttack === 'slot1' && equippedWeapons[0]) {
				weaponAttack = equippedWeapons[0].params[2];
			} else if (useWeaponAttack === 'slot2' && equippedWeapons[1] && DataManager.isWeapon(equippedWeapons[1])) {
				weaponAttack = equippedWeapons[1].params[2];
			}

			if (weaponAttack > 0) {
				hpChange = -weaponAttack;
			}
		} else if (args.value) {
			hpChange = eval(args.value);
		}

		if (hpChange !== 0) {
			this.updateEventHp(actualEventId, hpChange);
		}
	};

	if (eventIdArg === "all") {
		// Update HP for all events with HP bar
		$gameMap.events().forEach((event) => {
			if (event.event().note.match(/<hp:\s*(.+?)\s*>/i)) {
				updateHp(event._eventId);
			}
		});
	} else if (eventIdArg === "this") {
		updateHp("this");
	} else {
		// If eventIdArg is not "all", "this", parse it as an integer and update HP
		const eventId = parseInt(eventIdArg);
		updateHp(eventId);
	}
});

PluginManager.registerCommand(HpluginName, "UpdatePlayerHp", function (args) {
	const updateHp = () => {
		const actualEventId = this._eventId;
		let hpChange = 0;

		if (args.value.includes('damage')) {
			const damages = CollisionManager.getAllDamage(actualEventId);
			if (damages && damages.length > 0) {
				let latestDamage = damages[damages.length - 1];

				// Get defense values based on target
				let def = 0, mdef = 0;
				if (!args.target || args.target === 'player') {
					// Get from party leader
					const leader = $gameParty.leader();
					def = leader.def;
					mdef = leader.mdf;
				} else if (args.target === 'self') {
					// Get from event's actor notetag
					const event = $gameMap.event(actualEventId);
					if (event) {
						const note = event.event().note;
						const match = note.match(/<hp:\s*actor,\s*(\d+)>/i);
						if (match) {
							const actorId = parseInt(match[1]);
							const actor = $gameActors.actor(actorId);
							if (actor) {
								def = actor.def;
								mdef = actor.mdf;
							}
						}
					}
				} else {
					// Get from specified actor
					let targetActor = null;
					const actorId = parseInt(args.target);

					if (!isNaN(actorId)) {
						// Number = Actor ID
						targetActor = $gameActors.actor(actorId);
					} else {
						// String = Actor Name
						targetActor = $gameActors._data.find(actor =>
							actor && actor._name === args.target
						);
					}

					if (targetActor) {
						def = targetActor.def;
						mdef = targetActor.mdf;
					}
				}

				let expression = args.value;
				const parenRegex = /\((.*?)\)/g;
				expression = expression.replace(parenRegex, (match, innerContent) => {
					if (innerContent.includes('damage')) {
						const evalInner = innerContent
							.replace('damage', latestDamage.toString())
							.replace('def', def.toString())
							.replace('mdef', mdef.toString());
						try {
							const innerResult = Math.max(0, eval(evalInner));
							return `(${innerResult})`;
						} catch (e) {
							return `(${latestDamage})`;
						}
					}
					return match;
				});

				// Then handle any remaining damage/def/mdef outside parentheses
				expression = expression
					.replace('damage', latestDamage.toString())
					.replace('def', def.toString())
					.replace('mdef', mdef.toString());

				expression = expression.replace(/\s+/g, '');

				try {
					hpChange = eval(expression);
					CollisionManager.addCalculatedDamage(0, hpChange);
				} catch (e) {
					//console.error('Invalid damage expression:', expression);
					hpChange = -latestDamage;
					CollisionManager.addCalculatedDamage(0, hpChange);
				}
			}
		} else {
			hpChange = eval(args.value);
		}

		if (hpChange !== 0) {
			if (!args.target || args.target === 'player') {
				$gameParty.leader().gainHp(hpChange);
			} else if (args.target === 'self') {
				const event = $gameMap.event(actualEventId);
				if (event) {
					const note = event.event().note;
					const match = note.match(/<hp:\s*actor,\s*(\d+)>/i);
					if (match) {
						const actorId = parseInt(match[1]);
						const targetActor = $gameActors.actor(actorId);
						if (targetActor) {
							targetActor.gainHp(hpChange);
						}
					}
				}
			} else {
				let targetActor = null;
				const actorId = parseInt(args.target);

				if (!isNaN(actorId)) {
					targetActor = $gameActors.actor(actorId);
				} else {
					targetActor = $gameActors._data.find(actor =>
						actor && actor._name === args.target
					);
				}

				if (targetActor) {
					targetActor.gainHp(hpChange);
				}
			}
		}
	};

	updateHp();
});

Game_Interpreter.prototype.removeEventHpBar = function (eventId) {
	const event = $gameMap.event(eventId);
	if (!event) return;

	const spriteset = SceneManager._scene._spriteset;
	const hpBarIndex = spriteset._eventHpBars.findIndex(hpBar => hpBar._event === event);

	if (hpBarIndex > -1) {
		const hpBar = spriteset._eventHpBars[hpBarIndex];
		hpBar.startFadeOut();

		const mapId = $gameMap.mapId();
		if (!Array.isArray($gameMap._removedEventHpBars[mapId])) {
			$gameMap._removedEventHpBars[mapId] = [];
		}
		$gameMap._removedEventHpBars[mapId].push(event._eventId);

		setTimeout(() => {
			const hpBarIndex = spriteset._eventHpBars.findIndex(hpBar => hpBar._event === event);
			if (hpBarIndex > -1) {
				spriteset._tilemap.removeChild(hpBar);
				spriteset._eventHpBars.splice(hpBarIndex, 1);
			}
		}, hpBar._maxFadeOutFrames * 1000 / 60);
	}
};

PluginManager.registerCommand(HpluginName, "RemoveEventHpBar", function (args) {
	if (args.eventId === "this") {
		this.removeEventHpBar(this._eventId);
	} else {
		const eventId = parseInt(args.eventId);
		this.removeEventHpBar(eventId);
	}
});

Game_Map.prototype.getCharacterDistance = function (character1, character2) {
	const dx = Math.abs(character1.x - character2.x);
	const dy = Math.abs(character1.y - character2.y);
	return Math.sqrt(dx * dx + dy * dy);
};

Spriteset_Map.prototype.refreshEventHpBars = function () {
	const mapId = $gameMap.mapId();
	const removedEventHpBars = $gameMap._removedEventHpBars[mapId] || [];
	const eventsWithHpBar = new Set(this._eventHpBars.map(hpBar => hpBar._event._eventId));

	$gameMap.events().forEach(event => {
		if (!removedEventHpBars.includes(event._eventId) && !eventsWithHpBar.has(event._eventId)) {
			const hpValue = event.getHpValueFromNote();
			if (hpValue !== null) {
				const eventData = event.event();
				const offsetY = parseInt(eventData.note.match(/<hpy:\s*(-?\d+)\s*>/i)?.[1] || 0);
				const radius = parseInt(eventData.note.match(/<radius:\s*(\d+)\s*>/i)?.[1] || defaultRadius);
				const hpBar = new EventHpBar(event, hpValue, offsetY, radius);
				this._eventHpBars.push(hpBar);
				this._tilemap.addChild(hpBar);
			}
		}
	});
};

PluginManager.registerCommand(HpluginName, 'refreshEventHpBars', () => {
	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.refreshEventHpBars();
	}
});

Game_Event.prototype.resetHpToOriginal = function () {
	const originalHp = this.getHpValueFromNote();
	if (originalHp !== null) {
		let hpBar = SceneManager._scene._spriteset._eventHpBars.find(hpBar => hpBar._event === this);
		if (!hpBar) {
			const offsetY = parseInt(this.event().meta.hpy || 0);
			const radius = parseInt(this.event().meta.radius || defaultRadius);
			hpBar = new EventHpBar(this, originalHp, offsetY, radius);
			SceneManager._scene._spriteset._eventHpBars.push(hpBar);
			SceneManager._scene._spriteset.addChild(hpBar);
		}
		hpBar.setHp(originalHp);
	}
};

PluginManager.registerCommand(HpluginName, "ResetEventHpToOriginal", function (args) {
	const mapId = $gameMap.mapId();
	$gameMap._removedEventHpBars[mapId] = [];

	$gameMap.events().forEach(event => {
		event.resetHpToOriginal();
	});
});

PluginManager.registerCommand(HpluginName, "EventHPBarVisibility", function (args) {
	const status = args.Status === 'true';
	const eventId = args.Target === "this" ? this._eventId : parseInt(args.Target);

	const event = $gameMap.event(eventId);
	if (!event) return;

	const spriteset = SceneManager._scene._spriteset;
	if (!spriteset) return;

	const hpBar = spriteset._eventHpBars.find(bar => bar._event === event);
	if (!hpBar) return;

	hpBar.setVisibility(status);
});

EventHpBar.prototype.setVisibility = function (visible) {
	this._manuallyHidden = !visible;
	this._noHpBar = !visible;
	this.visible = visible;
	this._shouldDisplay = visible;
	if (visible) {
		this._fadeInFrames = 0;
		this._fadingOut = false;
		this.opacity = 255;
	} else {
		this.opacity = 0;
	}
};

const _Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function () {
	_Scene_Map_start.call(this);
	$gameMap.buildEventMap();
	$gameMap.clearCustomEventHitboxCaches();
};

Scene_Map.prototype.clearRemovedEventHpBars = function () {
	const mapId = $gameMap.mapId();
	const removedEventHpBars = $gameMap._removedEventHpBars[mapId];
	if (!removedEventHpBars) return;

	const existingEventIds = new Set(this._spriteset._eventHpBars.map(hpBar => hpBar._event._eventId));

	for (const eventId in removedEventHpBars) {
		if (!existingEventIds.has(parseInt(eventId))) {
			delete removedEventHpBars[eventId];
			const event = $gameMap.event(parseInt(eventId));
			if (event) {
				event.setInitialHp();
			}
		}
	}
};

Game_Map.prototype.buildEventMap = function () {
	this._eventMap = new Map();
	if (!this._events) return;

	for (let i = 0; i < this._events.length; i++) {
		const event = this._events[i];
		if (event && event._eventId) {
			this._eventMap.set(event._eventId, event);
		}
	}
};

const _Game_Map_refreshIfNeeded = Game_Map.prototype.refreshIfNeeded;
Game_Map.prototype.refreshIfNeeded = function () {
	_Game_Map_refreshIfNeeded.call(this);
	this.buildEventMap();
};

const _Game_Map_event = Game_Map.prototype.event;
Game_Map.prototype.event = function (eventId) {
	if (!this._eventMap) this.buildEventMap();
	if (this._eventMap && this._eventMap.has(eventId)) {
		return this._eventMap.get(eventId);
	} else {
		return _Game_Map_event.call(this, eventId);
	}
};

//==========================================================
// EVENT CHILD
//==========================================================

Game_Event.prototype.setupPlayerChild = function () {
	if (!this.page()) return;

	if (this._wasAttachedByCommand) return;

	// Look for any attach to comment
	const attachComment = this.list().find(command =>
		(command.code === 108 || command.code === 408) &&
		command.parameters[0].match(/<child\s+of:\s*(.+?)>/i)
	);

	if (!attachComment) {
		if (!this._wasAttachedByCommand) {
			this._isPlayerChild = false;
			this._parentEvent = null;
		}
		return;
	}

	const [, target] = attachComment.parameters[0].match(/<child\s+of:\s*(.+?)>/i);

	let parentEvent = null;

	if (target.toLowerCase() === 'player') {
		parentEvent = $gamePlayer;
	} else if (target.startsWith('<') && target.endsWith('>')) {
		// Find nearest event with matching notetag
		let nearestDistance = Infinity;
		$gameMap.events().forEach(event => {
			if (event !== this && event.event().note.includes(target)) {
				const distance = Math.sqrt(
					Math.pow(this.x - event.x, 2) +
					Math.pow(this.y - event.y, 2)
				);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					parentEvent = event;
				}
			}
		});
	} else if (!isNaN(target)) {
		// If it's a number, treat as event ID
		parentEvent = $gameMap.event(Number(target));
	} else {
		// Find nearest event with matching name
		let nearestDistance = Infinity;
		$gameMap.events().forEach(event => {
			if (event !== this && event.event().name === target) {
				const distance = Math.sqrt(
					Math.pow(this.x - event.x, 2) +
					Math.pow(this.y - event.y, 2)
				);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					parentEvent = event;
				}
			}
		});
	}

	if (parentEvent) {
		// Check for manual offset override
		const offsetMatch = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<child offset:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)>/i)
		);

		if (offsetMatch) {
			const [, x, y] = offsetMatch.parameters[0].match(/<child offset:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)>/i);
			this._childOffsetX = -Number(x);
			this._childOffsetY = -Number(y);
		}

		this._isPlayerChild = parentEvent === $gamePlayer;
		this._parentEvent = parentEvent;

		// Set initial last positions
		if (this._isPlayerChild) {
			this._lastPlayerX = $gamePlayer._realX + this._childOffsetX;
			this._lastPlayerY = $gamePlayer._realY + this._childOffsetY;
		} else {
			this._lastParentX = parentEvent._realX + this._childOffsetX;
			this._lastParentY = parentEvent._realY + this._childOffsetY;
		}

		// Calculate initial offset
		if (DotMoveSystem) {
			const parentPos = parentEvent.positionPoint();
			const eventPos = this.positionPoint();
			this._childOffsetX = eventPos.x - parentPos.x;
			this._childOffsetY = eventPos.y - parentPos.y;
		} else {
			this._childOffsetX = this._realX - parentEvent._realX;
			this._childOffsetY = this._realY - parentEvent._realY;
		}

	} else {
		this._isPlayerChild = false;
		this._parentEvent = null;
	}
};

PluginManager.registerCommand(HpluginName, "AttachToEvent", function (args) {
	let sourceEvents = [];
	const source = args.child || 'this';

	if (source === 'this' || source === '') {
		sourceEvents = [this.character(0)];
	} else if (source.startsWith('<') && source.endsWith('>')) {
		// Find all events with matching notetag
		sourceEvents = $gameMap.events().filter(event =>
			event && event.event().note.includes(source)
		);
	} else if (!isNaN(source)) {
		// If it's a number, treat as event ID
		const event = $gameMap.event(Number(source));
		if (event) sourceEvents = [event];
	} else {
		// Find all events with matching name
		sourceEvents = $gameMap.events().filter(event =>
			event && event.event().name === source
		);
	}

	if (args.parent === 'none') {
		sourceEvents.forEach(sourceEvent => {
			if (sourceEvent) {
				sourceEvent._isPlayerChild = false;
				sourceEvent._parentEvent = null;
				sourceEvent._childOffsetX = 0;
				sourceEvent._childOffsetY = 0;
				sourceEvent._wasAttachedByCommand = false;
			}
		});
		return;
	}

	// Get potential parent events
	let parentEvents = [];
	const attachTo = args.parent || 'this';

	if (attachTo === 'player') {
		parentEvents = [$gamePlayer];
	} else if (attachTo === 'this') {
		parentEvents = [this.character(0)];
	} else if (attachTo.startsWith('<') && attachTo.endsWith('>')) {
		// Find all events with matching notetag
		parentEvents = $gameMap.events().filter(event =>
			event && event.event().note.includes(attachTo)
		);
	} else if (!isNaN(attachTo)) {
		// If it's a number, treat as event ID
		const event = $gameMap.event(Number(attachTo));
		if (event) parentEvents = [event];
	} else {
		// Find all events with matching name
		parentEvents = $gameMap.events().filter(event =>
			event && event.event().name === attachTo
		);
	}

	let commandOffsetX = 0, commandOffsetY = 0;
	if (args.offset) {
		const offsetMatch = args.offset.match(/\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*/);
		if (offsetMatch) {
			commandOffsetX = Number(offsetMatch[1]) || 0;
			commandOffsetY = Number(offsetMatch[2]) || 0;
		}
	}

	// For each source event, find the nearest parent and attach to it
	sourceEvents.forEach(sourceEvent => {
		if (!sourceEvent) return;

		let nearestParent = null;
		let shortestDistance = Infinity;

		parentEvents.forEach(parentEvent => {
			if (!parentEvent || parentEvent === sourceEvent) return;

			const distance = Math.sqrt(
				Math.pow(sourceEvent.x - parentEvent.x, 2) +
				Math.pow(sourceEvent.y - parentEvent.y, 2)
			);

			if (distance < shortestDistance) {
				shortestDistance = distance;
				nearestParent = parentEvent;
			}
		});

		if (nearestParent) {
			// Set up the parent-child relationship
			sourceEvent._isPlayerChild = false; // Clear any previous player child status
			sourceEvent._parentEvent = nearestParent;
			sourceEvent._lastParentX = nearestParent._realX;
			sourceEvent._lastParentY = nearestParent._realY;

			// Calculate initial offset
			if (DotMoveSystem) {
				const parentPos = nearestParent.positionPoint();
				const eventPos = sourceEvent.positionPoint();
				sourceEvent._childOffsetX = eventPos.x - parentPos.x;
				sourceEvent._childOffsetY = eventPos.y - parentPos.y;
			} else {
				sourceEvent._childOffsetX = sourceEvent._realX - nearestParent._realX;
				sourceEvent._childOffsetY = sourceEvent._realY - nearestParent._realY;
			}

			if (args.offset) {
				sourceEvent._childOffsetX = commandOffsetX;
				sourceEvent._childOffsetY = commandOffsetY;
			}
			sourceEvent._wasAttachedByCommand = true;
		}
	});
});

//==========================================================
// PASSIVE COMMON EVENT FOR EVENTS
//==========================================================

let commonEventNameCache = null;

const _DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function () {
	if (!_DataManager_isDatabaseLoaded.call(this)) return false;

	// Build name cache
	commonEventNameCache = {};
	$dataCommonEvents.forEach(event => {
		if (event) commonEventNameCache[event.name.toLowerCase()] = event.id;
	});

	return true;
};

Game_Event.prototype.resolveCommonEventId = function (identifier) {
	// If it's a number, return it directly
	if (!isNaN(identifier.trim())) {
		return parseInt(identifier.trim());
	}

	// Use the cache for name lookup
	const eventName = identifier.trim().toLowerCase();
	return commonEventNameCache[eventName] || 0;
};

const _Game_Event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function () {
	_Game_Event_setupPage.call(this);
	this._independentCommonEventInterpreters = [];
	this._wasNearScreen = false;
	this._commonEventIds = [];
	this._passiveBlocked = false;
	this.applyCommonEventsFromNotetag();
	this.setupFrameSpeed();
	this.setupPlayerChild();
	this.setupClickable();
};

Game_Event.prototype.applyCommonEventsFromNotetag = function () {
	if (!this.event()) return;

	const note = this.event().note;
	const callCommonIds = this.extractCommonEventIds(note);
	const customTagIds = this.extractCommonEventIdsFromCustomTags(note);
	const pageCommonIds = this.extractCommonEventIdsFromPage();

	// Combine all IDs and remove duplicates
	this._commonEventIds = [...new Set([...callCommonIds, ...customTagIds, ...pageCommonIds])];

	// Check if passive events are blocked for this page
	this._passiveBlocked = this.currentPageHasTag("<no passive>");

	if (this._commonEventIds.length > 0 && !this._passiveBlocked) {
		if (!limitAreaOfCalling || this.isNearScreen()) {
			this.setupCommonEventInterpreters();
		}
	}
};

Game_Event.prototype.isNearScreen = function () {
	const bufferInTiles = 6;
	const sx = $gameMap.adjustX(this.x);
	const sy = $gameMap.adjustY(this.y);
	const screenTileWidth = Graphics.width / $gameMap.tileWidth();
	const screenTileHeight = Graphics.height / $gameMap.tileHeight();
	return sx >= -bufferInTiles && sx <= screenTileWidth + bufferInTiles &&
		sy >= -bufferInTiles && sy <= screenTileHeight + bufferInTiles;
};

Game_Event.prototype.extractCommonEventIds = function (note) {
	const match = /<CommonId:\s*(.+?)\s*>/i.exec(note);
	if (!match) return [];

	const identifiers = match[1].split(',');
	return identifiers
		.map(id => this.resolveCommonEventId(id))
		.filter(id => id > 0);
};

Game_Event.prototype.extractCommonEventIdsFromCustomTags = function (note) {
	return npcTags.reduce((ids, tag) => {
		if (note.includes(tag.Notetag)) {
			ids.push(...tag.CommonEventIds);
		}
		return ids;
	}, []);
};

Game_Event.prototype.extractCommonEventIdsFromPage = function () {
	const page = this.page();
	if (!page) return [];

	const ids = [];
	page.list.forEach(command => {
		if (command.code !== 108 && command.code !== 408) return;
		const match = /<passive:\s*(.+?)\s*>/i.exec(command.parameters[0]);
		if (match) {
			const identifiers = match[1].split(',');
			const resolvedIds = identifiers
				.map(id => this.resolveCommonEventId(id))
				.filter(id => id > 0);
			ids.push(...resolvedIds);
		}
	});
	return ids;
};

Game_Event.prototype.currentPageHasTag = function (tag) {
	const page = this.page();
	if (!page) return false;
	return page.list.some(command => (command.code === 108 || command.code === 408) && command.parameters[0].includes(tag));
};

Game_Event.prototype.setupCommonEventInterpreters = function () {
	this._independentCommonEventInterpreters = this._commonEventIds
		.filter(id => $dataCommonEvents && $dataCommonEvents[id])
		.map(id => {
			const interpreter = new Game_Interpreter();
			interpreter.setup($dataCommonEvents[id].list, this._eventId);
			return interpreter;
		});
};

const _Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function () {
	_Game_Event_update.call(this);

	if (this._isPlayerChild && $gamePlayer) {
		// Player child
		const deltaX = $gamePlayer._realX - this._lastPlayerX;
		const deltaY = $gamePlayer._realY - this._lastPlayerY;

		if (deltaX !== 0 || deltaY !== 0) {
			// Keep base position relative to parent with offset
			const baseX = $gamePlayer._realX + this._childOffsetX;
			const baseY = $gamePlayer._realY + this._childOffsetY;

			// Autonomous movement offset
			const autoX = this._realX - (this._lastPlayerX + this._childOffsetX);
			const autoY = this._realY - (this._lastPlayerY + this._childOffsetY);

			// Combine both
			this._realX = baseX + autoX;
			this._realY = baseY + autoY;
		}

		this._lastPlayerX = $gamePlayer._realX;
		this._lastPlayerY = $gamePlayer._realY;
	} else if (this._parentEvent) {
		// Event child
		const deltaX = this._parentEvent._realX - this._lastParentX;
		const deltaY = this._parentEvent._realY - this._lastParentY;

		if (deltaX !== 0 || deltaY !== 0) {
			// Keep base position relative to parent with offset
			const baseX = this._parentEvent._realX + this._childOffsetX;
			const baseY = this._parentEvent._realY + this._childOffsetY;

			// Autonomous movement offset
			const autoX = this._realX - (this._lastParentX + this._childOffsetX);
			const autoY = this._realY - (this._lastParentY + this._childOffsetY);

			// Combine both
			this._realX = baseX + autoX;
			this._realY = baseY + autoY;
		}

		this._lastParentX = this._parentEvent._realX;
		this._lastParentY = this._parentEvent._realY;
	}

	if (this._commonEventIds.length === 0 || this._passiveBlocked) return;

	const isNearScreen = (!limitAreaOfCalling || this.isNearScreen());

	if (this._wasNearScreen !== isNearScreen) {
		this._wasNearScreen = isNearScreen;
		if (isNearScreen) {
			if (!this._independentCommonEventInterpreters.length) {
				this.setupCommonEventInterpreters();
			}
		}
	}

	if (isNearScreen) {
		this.updateIndependentCommonEventInterpreters();
	}

};

Game_Event.prototype.updateIndependentCommonEventInterpreters = function () {
	this._independentCommonEventInterpreters.forEach((interpreter, index) => {
		if (!interpreter.isRunning()) {
			const commonEventId = this._commonEventIds[index];
			if (commonEventId && $dataCommonEvents[commonEventId]) {
				interpreter.setup($dataCommonEvents[commonEventId].list, this._eventId);
			}
		}
		interpreter.update();
	});
};

//==========================================================
// BREAK ANIMATION
//==========================================================

PluginManager.registerCommand(HpluginName, "BreakCharacter", function () {
	const event = $gameMap.event(this._eventId);
	if (event) {
		createBreakEffect(event);
	}
});

function findEventSprite(event) {
	const spriteset = SceneManager._scene._spriteset;
	return spriteset._characterSprites.find(
		sprite => sprite._character === event
	);
}

function createBreakEffect(event) {
	const sprite = findEventSprite(event);
	if (!sprite) return;

	const initialPos = {
		x: sprite.x,
		y: sprite.y - sprite.height,
		width: sprite.width,
		height: sprite.height
	};

	const gridSize = 5;
	const pieceWidth = initialPos.width / gridSize;
	const pieceHeight = initialPos.height / gridSize;

	// Store original bitmap pieces
	const pieces = [];
	const pieceBitmaps = [];
	const bitmap = sprite.bitmap;

	// Get the actual sprite center position
	const centerX = initialPos.x;
	const centerY = initialPos.y + initialPos.height / 2;  // Calculate true center Y

	// Create separate bitmap for each piece
	for (let y = 0; y < gridSize; y++) {
		for (let x = 0; x < gridSize; x++) {
			const pieceBitmap = new Bitmap(pieceWidth, pieceHeight);
			pieceBitmap.blt(
				bitmap,
				x * pieceWidth,
				y * pieceHeight,
				pieceWidth,
				pieceHeight,
				0,
				0
			);
			pieceBitmaps.push(pieceBitmap);

			// Position pieces relative to the character's center
			pieces.push({
				x: centerX + (x - gridSize / 2) * pieceWidth,
				y: centerY + (y - gridSize / 2) * pieceHeight,
				width: pieceWidth,
				height: pieceHeight,
				index: pieces.length,
				velocity: {
					x: (Math.random() - 0.5) * 8,
					y: (Math.random() - 0.5) * 8
				},
			});
		}
	}

	// Create composite sprite with much larger bitmap
	const extraSpace = Math.max(initialPos.width, initialPos.height) * 3; // Space for pieces to spread
	const compositeBitmap = new Bitmap(
		initialPos.width + extraSpace,
		initialPos.height + extraSpace
	);
	const compositeSprite = new Sprite(compositeBitmap);

	// Position composite sprite, accounting for the extra space
	compositeSprite.x = centerX - (compositeBitmap.width / 2);
	compositeSprite.y = centerY - (compositeBitmap.height / 2);
	compositeSprite.opacity = 255;

	// Store data with initial position
	_brokenSprites.set(event.eventId(), {
		sprite: compositeSprite,
		pieces: pieces,
		pieceBitmaps: pieceBitmaps,
		frames: 0,
		maxFrames: 50,
		initialPos: initialPos
	});

	// Hide original sprite and add composite
	sprite.visible = false;
	SceneManager._scene._spriteset._tilemap.addChild(compositeSprite);
}

function updateBrokenSprites() {
	for (const [eventId, data] of _brokenSprites.entries()) {
		data.frames++;
		data.sprite.opacity = Math.max(0, 255 * (1 - data.frames / data.maxFrames));

		// Clear and redraw pieces
		const bitmap = data.sprite.bitmap;
		bitmap.clear();

		// Update and redraw each piece
		data.pieces.forEach((piece, index) => {
			piece.x += piece.velocity.x;
			piece.y += piece.velocity.y;

			bitmap.blt(
				data.pieceBitmaps[index],
				0,
				0,
				piece.width,
				piece.height,
				piece.x - data.sprite.x,
				piece.y - data.sprite.y
			);
		});

		// Remove when complete
		if (data.frames >= data.maxFrames) {
			data.pieceBitmaps.forEach(b => b.destroy());
			if (data.sprite.parent) {
				data.sprite.parent.removeChild(data.sprite);
			}
			_brokenSprites.delete(eventId);
		}
	}
}

const _Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function () {
	_Scene_Map_terminate.call(this);
	_brokenSprites.clear();
};

//============================================================
// SPAWN EVENTS
//============================================================

const matchEventIdentifier = (event, identifier) => {
	if (!event || !event.event) return false;

	// For numeric ID
	if (!isNaN(identifier)) {
		return event.eventId() === Number(identifier);
	}

	const eventData = event.event();
	// For notetag
	if (identifier.startsWith('<') && identifier.endsWith('>')) {
		return eventData?.note?.includes(identifier);
	}
	// For name
	return eventData?.name === identifier;
};

const getTargetEventId = (identifier, context) => {
	if (identifier === 'this') {
		return context._eventId || null;
	}
	return Number(identifier) || null;
};


function Hendrix_TemplateEvent() {
	this.initialize.apply(this, arguments);
}

Hendrix_TemplateEvent.prototype = Object.create(Game_Event.prototype);
Hendrix_TemplateEvent.prototype.constructor = Hendrix_TemplateEvent;

Hendrix_TemplateEvent.prototype.initialize = function (mapId, eventId, templateEventId, x, y, saveEvent, startDegree) {
	this._spawnX = x;
	this._spawnY = y;
	this._templateEventId = templateEventId;
	this.isSpawnEvent = true;
	this.isSavedEvent = saveEvent;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
	DataManager.extractMetadata(this.event());
	if (startDegree) {
		this._useCustomRotationForMoveTowardPoint = false;
		this.setRotation(Number(startDegree));
	}
};

Hendrix_TemplateEvent.prototype.event = function () {
	return $dataTemplateMap.events[this._templateEventId];
};

Hendrix_TemplateEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

Game_Map.prototype.getNextEventId = function () {
	if (!this._events) return 1;

	// Get all valid event IDs (non-null events)
	const eventIds = Object.keys(this._events)
		.map(Number)
		.filter(id => !isNaN(id));

	return eventIds.length > 0 ? Math.max(...eventIds) + 1 : 1;
};

Game_Map.prototype.spawnEvent = function (templateEventId, x, y, isPermanent = false, startDegree = null) {
	if (!$dataTemplateMap?.events[templateEventId]) return null;

	const eventId = this.getNextEventId();
	const event = new Hendrix_TemplateEvent(this._mapId, eventId, templateEventId, x, y, isPermanent, startDegree);
	this._events[eventId] = event;

	if (isPermanent) {
		if (!$gameSystem._permanentEvents[this._mapId]) {
			$gameSystem._permanentEvents[this._mapId] = {};
		}
		$gameSystem._permanentEvents[this._mapId][eventId] = {
			templateEventId,
			x,
			y,
			startDegree
		};
	}

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_Character(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	}

	return eventId;
};


Game_Map.prototype.respawnPermanentEvents = function () {
	const permanentEvents = $gameSystem._permanentEvents[this._mapId];
	if (!permanentEvents) return;

	Object.entries(permanentEvents).forEach(([eventId, eventData]) => {
		const { templateEventId, x, y } = eventData;

		const event = new Hendrix_TemplateEvent(
			this._mapId,
			Number(eventId),
			templateEventId,
			x,
			y,
			true
		);

		this._events[Number(eventId)] = event;

		if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
			const sprite = new Sprite_Character(event);
			SceneManager._scene._spriteset._characterSprites.push(sprite);
			SceneManager._scene._spriteset._tilemap.addChild(sprite);
		}
	});
};

const _Game_Map_clearEvents = Game_Map.prototype.clearEvents;
Game_Map.prototype.clearEvents = function () {
	if (SceneManager._scene instanceof Scene_Map) {
		this.events().forEach(event => {
			if (event instanceof Hendrix_TemplateEvent) {
				SceneManager._scene._spriteset.unspawnEvent(event._eventId);
			}
		});
		this._platformCache = null;
		this._lastPlatformCacheFrame = 0;
	}

	_Game_Map_clearEvents.call(this);
};

Spriteset_Map.prototype.unspawnEvent = function (eventId) {
	const spriteIndex = this._characterSprites.findIndex(sprite =>
		sprite._character instanceof Hendrix_TemplateEvent &&
		sprite._character._eventId === eventId
	);
	if (spriteIndex >= 0) {
		const sprite = this._characterSprites[spriteIndex];
		this._tilemap.removeChild(sprite);
	}
};

Game_Map.prototype.unspawnEvent = function (eventId) {
	const event = this._events[eventId];
	if (!(event instanceof Hendrix_TemplateEvent)) return;

	// Handle sprite cleanup
	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.unspawnEvent(eventId);
	}

	// Clear self switches
	['A', 'B', 'C', 'D'].forEach(letter => {
		$gameSelfSwitches.setValue([this._mapId, eventId, letter], false);
	});

	// Remove from permanent storage
	if ($gameSystem._permanentEvents[this._mapId]) {
		delete $gameSystem._permanentEvents[this._mapId][eventId];
	}

	this._events[eventId] = null;
};

const _Sprite_Animation_targetSpritePosition = Sprite_Animation.prototype.targetSpritePosition;
Sprite_Animation.prototype.targetSpritePosition = function (sprite) {
	if (!sprite || !sprite.parent) {
		return new Point(this._targets[0].x, this._targets[0].y);
	}
	return _Sprite_Animation_targetSpritePosition.call(this, sprite);
};

PluginManager.registerCommand(HpluginName, "spawnEvent", function (args) {
	const idNum = Number(args.eventId);
	const id = !isNaN(idNum) ? idNum :
		$dataTemplateMap.events.findIndex(e => e?.name === args.eventId);

	if (id <= 0) return;

	const checkForbiddenTile = (x, y, letters, checkEvents) => {
		if (checkEvents) {
			const events = $gameMap.eventsXy(x, y);
			const hasImpassableEvent = events.some(event =>
				event._priorityType === 1 &&
				!event.isThrough()
			);
			if (hasImpassableEvent) return true;
		}

		if (!letters || letters.length === 0) return false;

		const tiles = $gameMap.allTiles(x, y);
		const flags = $gameMap.tilesetFlags();

		// Get a list of impassable tiles
		const impassableTiles = tiles.filter(tileId => (flags[tileId] & 0x0f));
		if (impassableTiles.length === 0) return false;

		// If no specific letters requested, block any impassable tile
		if (!letters || letters.length === 0) return true;

		// Check each impassable tile against forbidden ranges
		return impassableTiles.some(tileId => {
			if (!(flags[tileId] & 0x0f)) return false;
			return letters.some(letter => {
				const ranges = {
					'A1': [[2048, 2815]],
					'A2': [[2816, 4351]],
					'A3': [[4352, 5887]],
					'A4': [[5888, 8191]],
					'A5': [[1536, 1663]],
					'B': [[0, 255]],
					'C': [[256, 511]],
					'D': [[512, 767]],
					'E': [[768, 1023]]
				}[letter];

				return ranges?.some(([min, max]) => tileId >= min && tileId <= max);
			});
		});
	};

	// Extract forbidden tile types
	const notSpawnMatch = args.notSpawnOn?.toLowerCase();
	const forbiddenTiles = notSpawnMatch ?
		notSpawnMatch.split(/,\s*/).reduce((acc, part) => {
			if (part.includes('impassable events')) {
				acc.checkEvents = true;
			} else if (part.startsWith('impassable')) {
				acc.tiles = part
					.replace('impassable', '')
					.trim()
					.split(/\s+/)
					.map(tile => tile.toUpperCase())
					.filter(tile => /^[A-E][1-5]?$/.test(tile));
			}
			return acc;
		}, { tiles: [], checkEvents: false }) :
		{ tiles: [], checkEvents: false };

	const spawnIfValid = (x, y) => {
		if (!checkForbiddenTile(x, y, forbiddenTiles.tiles, forbiddenTiles.checkEvents)) {
			const eventId = $gameMap.spawnEvent(id, x, y, args.permanent === 'true', 0);
			if (args.startDegree) {
				if (['cursor', 'right stick', 'mouse or gamepad'].includes(args.startDegree.toLowerCase())) {
					$gameMap.event(eventId).rotateTo(args.startDegree);
				} else if (args.startDegree.startsWith('<') && args.startDegree.endsWith('>')) {
					// notetag
					let closestEvent = null;
					let minDistance = Infinity;
					const spawnedEvent = $gameMap.event(eventId);

					$gameMap.events().forEach(event => {
						if (event !== spawnedEvent && event.event().note.includes(args.startDegree)) {
							const distance = Math.sqrt(
								Math.pow(event.x - spawnedEvent.x, 2) +
								Math.pow(event.y - spawnedEvent.y, 2)
							);
							if (distance < minDistance) {
								closestEvent = event;
								minDistance = distance;
							}
						}
					});

					if (closestEvent) {
						const dx = closestEvent.x - spawnedEvent.x;
						const dy = closestEvent.y - spawnedEvent.y;
						const angle = Math.atan2(dy, dx) * 180 / Math.PI;
						spawnedEvent.setRotation(angle);
					}
				} else {
					// number degree
					$gameMap.event(eventId).setRotation(Number(args.startDegree));
				}
			}
		}
	};

	// Handle cursor spawn
	const cursorRegex = /cursor(?:\s*\+\s*([\d.]+))?/i;
	const xMatch = args.x.match(cursorRegex);
	const yMatch = args.y.match(cursorRegex);

	if (xMatch && yMatch) {
		const distance = Number(xMatch[1] || yMatch[1] || 0);
		const cursorX = $gameMap.canvasToMapX(TouchInput.x);
		const cursorY = $gameMap.canvasToMapY(TouchInput.y);

		if (DotMoveSystem) {
			const playerX = $gamePlayer.centerPositionPoint().x - 0.5;
			const playerY = $gamePlayer.centerPositionPoint().y - 0.5;
			const angle = Math.atan2(cursorY - playerY, cursorX - playerX);
			const spawnX = playerX + Math.cos(angle) * distance;
			const spawnY = playerY + Math.sin(angle) * distance;
			spawnIfValid(spawnX, spawnY);
		} else {
			const playerX = $gamePlayer.x;
			const playerY = $gamePlayer.y;
			const angle = Math.atan2(cursorY - playerY, cursorX - playerX);
			const spawnX = playerX + Math.round(Math.cos(angle) * distance);
			const spawnY = playerY + Math.round(Math.sin(angle) * distance);
			spawnIfValid(spawnX, spawnY);
		}
	}
	// Handle right stick spawn
	else if (args.x.match(/right stick(?:\s*\+\s*([\d.]+))?/i) && args.y.match(/right stick(?:\s*\+\s*([\d.]+))?/i)) {
		const rightStickRegex = /right stick(?:\s*\+\s*([\d.]+))?/i;
		const xMatch = args.x.match(rightStickRegex);
		const yMatch = args.y.match(rightStickRegex);

		if (xMatch && yMatch) {
			const distance = Number(xMatch[1] || yMatch[1] || 0);
			const gamepad = navigator.getGamepads()[0];
			if (gamepad && gamepad.connected) {
				let rightX = gamepad.axes[2];
				let rightY = gamepad.axes[3];

				if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
					const angle = Math.atan2(rightY, rightX);

					if (DotMoveSystem) {
						const playerX = $gamePlayer.centerPositionPoint().x - 0.5;
						const playerY = $gamePlayer.centerPositionPoint().y - 0.5;
						const spawnX = playerX + Math.cos(angle) * distance;
						const spawnY = playerY + Math.sin(angle) * distance;
						spawnIfValid(spawnX, spawnY);
					} else {
						const spawnX = $gamePlayer.x + Math.round(Math.cos(angle) * distance);
						const spawnY = $gamePlayer.y + Math.round(Math.sin(angle) * distance);
						spawnIfValid(spawnX, spawnY);
					}
				}
			}
		}
	}
	// Handle region spawn
	else if (args.x.match(/region\s+(\d+)/i) && args.y.match(/region\s+(\d+)/i)) {
		const xMatch = args.x.match(/region\s+(\d+)/i);
		const yMatch = args.y.match(/region\s+(\d+)/i);
		const regionId = Number(xMatch[1]);

		if (regionId === Number(yMatch[1])) {
			for (let tileX = 0; tileX < $gameMap.width(); tileX++) {
				for (let tileY = 0; tileY < $gameMap.height(); tileY++) {
					if ($gameMap.regionId(tileX, tileY) === regionId) {
						spawnIfValid(tileX, tileY);
					}
				}
			}
		}
	}

	// Handle notetag-based spawn with source
	else if (args.x.match(/<.*>,\s*source:\s*.*/) && args.y.match(/<.*>,\s*source:\s*.*/)) {
		const parseArg = (arg) => {
			const match = arg.match(/<(.*)>,\s*source:\s*(.*)/);
			return {
				notetag: `<${match[1]}>`,
				source: match[2].trim()
			};
		};

		const xParsed = parseArg(args.x);
		const yParsed = parseArg(args.y);

		if (xParsed.notetag === yParsed.notetag && xParsed.source === yParsed.source) {
			const notetag = xParsed.notetag;
			const source = xParsed.source;

			let sourceX, sourceY;
			if (source === 'player') {
				if (DotMoveSystem) {
					sourceX = $gamePlayer.centerPositionPoint().x - 0.5;
					sourceY = $gamePlayer.centerPositionPoint().y - 0.5;
				} else {
					sourceX = $gamePlayer.x;
					sourceY = $gamePlayer.y;
				}
			} else if (source === 'this') {
				const thisEvent = $gameMap.event(this._eventId);
				if (DotMoveSystem) {
					sourceX = thisEvent.centerPositionPoint().x - 0.5;
					sourceY = thisEvent.centerPositionPoint().y - 0.5;
				} else {
					sourceX = thisEvent.x;
					sourceY = thisEvent.y;
				}
			} else {
				const eventId = Number(source);
				const sourceEvent = $gameMap.event(eventId);
				if (sourceEvent) {
					if (DotMoveSystem) {
						sourceX = sourceEvent.centerPositionPoint().x - 0.5;
						sourceY = sourceEvent.centerPositionPoint().y - 0.5;
					} else {
						sourceX = sourceEvent.x;
						sourceY = sourceEvent.y;
					}
				} else {
					return;
				}
			}

			let closestEvent = null;
			let minDistance = Infinity;

			if (DotMoveSystem) {
				$gameMap.events().forEach(event => {
					if (event.event().note.includes(notetag)) {
						const eventX = event.centerPositionPoint().x - 0.5;
						const eventY = event.centerPositionPoint().y - 0.5;
						const distance = Math.sqrt(
							Math.pow(eventX - sourceX, 2) +
							Math.pow(eventY - sourceY, 2)
						);
						if (distance < minDistance) {
							closestEvent = event;
							minDistance = distance;
						}
					}
				});

				if (closestEvent) {
					const spawnX = closestEvent.centerPositionPoint().x - 0.5;
					const spawnY = closestEvent.centerPositionPoint().y - 0.5;
					spawnIfValid(spawnX, spawnY);
				}
			} else {
				// Grid-based movement
				$gameMap.events().forEach(event => {
					if (event.event().note.includes(notetag)) {
						const distance = Math.sqrt(
							Math.pow(event.x - sourceX, 2) +
							Math.pow(event.y - sourceY, 2)
						);
						if (distance < minDistance) {
							closestEvent = event;
							minDistance = distance;
						}
					}
				});

				if (closestEvent) {
					spawnIfValid(closestEvent.x, closestEvent.y);
				}
			}
		}
	}

	// Handle coordinate-based spawn
	else {
		let xExp = args.x
			.replace(/this/g, '$gameMap.event(this._eventId).centerPositionPoint().x - 0.5')
			.replace(/localVar\((.*?)\)/g, 'localVar(this._eventId, "$1")')
			.replace(/\blocalVar\b(?!\()/g, 'localVar(this._eventId)');

		let yExp = args.y
			.replace(/this/g, '$gameMap.event(this._eventId).centerPositionPoint().y - 0.5')
			.replace(/localVar\((.*?)\)/g, 'localVar(this._eventId, "$1")')
			.replace(/\blocalVar\b(?!\()/g, 'localVar(this._eventId)');

		if (DotMoveSystem) {
			if (xExp.includes('grid player') || yExp.includes('grid player')) {
				// Grid-based
				xExp = xExp.startsWith('grid player')
					? xExp.replace('grid player', '$gamePlayer.x')
					: xExp.replace(/grid player\s*([+\-*/].*)/g, '$gamePlayer.x $1');
				yExp = yExp.startsWith('grid player')
					? yExp.replace('grid player', '$gamePlayer.y')
					: yExp.replace(/grid player\s*([+\-*/].*)/g, '$gamePlayer.y $1');
			} else {
				// pixe
				xExp = xExp.replace(/player/g, '$gamePlayer.centerPositionPoint().x - 0.5');
				yExp = yExp.replace(/player/g, '$gamePlayer.centerPositionPoint().y - 0.5');
			}
		} else {
			xExp = xExp.replace(/player/g, '$gamePlayer.x');
			yExp = yExp.replace(/player/g, '$gamePlayer.y');
		}

		const x = eval(xExp);
		const y = eval(yExp);
		spawnIfValid(x, y);
	}

	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.refreshEventHpBars();
	}
});

function Game_DynamicEvent() {
	this.initialize.apply(this, arguments);
}

Game_DynamicEvent.prototype = Object.create(Game_Event.prototype);
Game_DynamicEvent.prototype.constructor = Game_DynamicEvent;

Game_DynamicEvent.prototype.initialize = function (mapId, eventId, x, y, note, waitTime) {
	this._spawnX = x;
	this._spawnY = y;
	this._note = note;
	this._waitTime = waitTime;
	this.isDynamicEvent = true;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
};

Game_DynamicEvent.prototype.event = function () {
	let eventList;
	if (this._waitTime) {
		eventList = [
			{ code: 230, indent: 0, parameters: [Number(this._waitTime)] },
			{
				code: 355, indent: 0, parameters: [
					`const thisEventId = ${this._eventId};
                    const cleanup = () => {
                        if (SceneManager._scene instanceof Scene_Map) {
                            SceneManager._scene._spriteset?.unspawnEvent(thisEventId);
                        }
                        
                        // Clean up HP bar if exists
                        if (SceneManager._scene._spriteset) {
                            const spriteset = SceneManager._scene._spriteset;
                            const hpBarIndex = spriteset._eventHpBars?.findIndex(bar => 
                                bar._event._eventId === thisEventId
                            );
                            if (hpBarIndex > -1) {
                                const hpBar = spriteset._eventHpBars[hpBarIndex];
                                spriteset._tilemap.removeChild(hpBar);
                                spriteset._eventHpBars.splice(hpBarIndex, 1);
                            }
                        }
    
                        // Clear collision data
                        if (CollisionManager) {
                            CollisionManager.clearCollisions(thisEventId);
                        }
    
                        // Remove event
                        if ($gameMap._events[thisEventId]) {
                            $gameMap._events[thisEventId] = null;
                        }
                    };
                    cleanup();`
				]
			},
			{ code: 0, indent: 0, parameters: [] }
		];
	} else {
		eventList = [
			{ code: 0, indent: 0, parameters: [] }
		];
	}

	return {
		id: this._eventId,
		name: "DynamicHitbox",
		note: this._note || "",
		x: this._spawnX,
		y: this._spawnY,
		pages: [{
			conditions: {
				actorId: 1, actorValid: false,
				itemId: 1, itemValid: false,
				selfSwitchCh: "A", selfSwitchValid: false,
				switch1Id: 1, switch1Valid: false,
				switch2Id: 1, switch2Valid: false,
				variableId: 1, variableValid: false,
				variableValue: 0
			},
			image: {
				tileId: 0,
				characterName: "",
				direction: 2,
				pattern: 1,
				characterIndex: 0
			},
			list: eventList,
			moveFrequency: 3,
			moveRoute: {
				list: [{ code: 0, parameters: [] }],
				repeat: true,
				skippable: false,
				wait: false
			},
			moveSpeed: 3,
			moveType: 0,
			priorityType: 0,
			stepAnime: false,
			through: true,
			trigger: 4,
			walkAnime: true
		}]
	};
};

Game_DynamicEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

PluginManager.registerCommand(HpluginName, "spawnEventHitbox", function (args) {
	let xExp = args.x || 'this';
	let yExp = args.y || 'this';

	xExp = xExp
		.replace(/this/g, '$gameMap.event(this._eventId).x')
		.replace(/localVar\((.*?)\)/g, 'localVar(this._eventId, "$1")')
		.replace(/\blocalVar\b(?!\()/g, 'localVar(this._eventId)');

	yExp = yExp
		.replace(/this/g, '$gameMap.event(this._eventId).y')
		.replace(/localVar\((.*?)\)/g, 'localVar(this._eventId, "$1")')
		.replace(/\blocalVar\b(?!\()/g, 'localVar(this._eventId)');

	if (DotMoveSystem) {
		xExp = xExp.replace(/player/g, '$gamePlayer.centerPositionPoint().x - 0.5');
		yExp = yExp.replace(/player/g, '$gamePlayer.centerPositionPoint().y - 0.5');
	} else {
		xExp = xExp.replace(/player/g, '$gamePlayer.x');
		yExp = yExp.replace(/player/g, '$gamePlayer.y');
	}

	const x = eval(xExp);
	const y = eval(yExp);

	const notetags = args.notetag ? args.notetag.split('>, ')
		.map(tag => tag.trim() + (tag.trim().endsWith('>') ? '' : '>')).join('') : '';

	// Find next available event ID
	const eventId = $gameMap.getNextEventId();

	// Create the dynamic event
	const event = new Game_DynamicEvent($gameMap._mapId, eventId, x, y, notetags, args.wait);
	$gameMap._events[eventId] = event;

	// Add sprite if in Scene_Map
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_Character(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
		SceneManager._scene._spriteset.refreshEventHpBars();
	}

	return eventId;
});

PluginManager.registerCommand(HpluginName, "DestroyDynamicEvent", function (args) {
	// Split multiple notetags if provided
	const notetags = args.notetag.split(',').map(tag => {
		tag = tag.trim();
		if (!tag.startsWith('<')) tag = '<' + tag;
		if (!tag.endsWith('>')) tag = tag + '>';
		return tag;
	});

	// Find and process events
	$gameMap.events().forEach(event => {
		if (!event || !event.event()) return;

		// Only target events created by spawnEventHitbox (named "DynamicHitbox")
		if (event.event().name !== "DynamicHitbox") return;
		if (notetags.some(tag => event.event().note.includes(tag))) {
			const eventId = event.eventId();

			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset?.unspawnEvent(eventId);
			}

			// Clean up HP bar
			if (SceneManager._scene._spriteset) {
				const spriteset = SceneManager._scene._spriteset;
				const hpBarIndex = spriteset._eventHpBars?.findIndex(bar =>
					bar._event._eventId === eventId
				);
				if (hpBarIndex > -1) {
					const hpBar = spriteset._eventHpBars[hpBarIndex];
					spriteset._tilemap.removeChild(hpBar);
					spriteset._eventHpBars.splice(hpBarIndex, 1);
				}
			}

			// Clear collision data
			if (CollisionManager) {
				CollisionManager.clearCollisions(eventId);
			}

			// Small delay before removing event data to ensure collision check completes
			setTimeout(() => {
				if ($gameMap._events[eventId]) {
					$gameMap._events[eventId] = null;
				}
				if ($dataMap && $dataMap.events && $dataMap.events[eventId]) {
					$dataMap.events[eventId] = null;
				}
			}, 50);
		}
	});
});

PluginManager.registerCommand(HpluginName, "destroyEvent", function (args) {
	const targetId = getTargetEventId(args.identifier, this);

	if (targetId !== null) {
		if ($gameMap._events[targetId]) {
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(targetId);
			}
			$gameMap.unspawnEvent(targetId);

			this.removeEventHpBar(targetId);
		}
		return;
	}

	// Check for events matching names or notetags
	$gameMap.events().forEach(event => {
		if (!event || !(event instanceof Game_Event)) return;

		if (matchEventIdentifier(event, args.identifier)) {
			const eventId = event.eventId();
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(eventId);
			}
			$gameMap.unspawnEvent(eventId);
			this.removeEventHpBar(eventId);
		}
	});
});

PluginManager.registerCommand(HpluginName, "destroyEventNear", function (args) {
	const sourceEventId = getTargetEventId(args.eventId, this);
	const sourceEvent = $gameMap.event(sourceEventId);

	if (!sourceEvent) return false;

	let nearestEventId = null;
	let minDistance = Number.MAX_VALUE;

	$gameMap.events().forEach(event => {
		if (!event || event.eventId() === sourceEventId) return;

		if (matchEventIdentifier(event, args.identifier)) {
			const distance = Math.sqrt(
				Math.pow(event.x - sourceEvent.x, 2) +
				Math.pow(event.y - sourceEvent.y, 2)
			);

			if (distance < minDistance) {
				minDistance = distance;
				nearestEventId = event.eventId();
			}
		}
	});

	if (nearestEventId !== null) {
		if (SceneManager._scene instanceof Scene_Map) {
			SceneManager._scene._spriteset.unspawnEvent(nearestEventId);
		}
		$gameMap.unspawnEvent(nearestEventId);
		this.removeEventHpBar(nearestEventId);

		return true;
	}
	return false;
});

DataManager.loadTemplateMapData = function () {
	if (templateMapId > 0) {
		this.loadDataFile('$dataTemplateMap', 'Map%1.json'.format(templateMapId.padZero(3)));
	}
};

DataManager.loadTemplateMapData();

const _Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
	_Game_System_initialize.call(this);
	this.collisionTimestamps = {};
	this._playerHitboxCollisions = {};
	this._permanentEvents = {};
};

const H_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function (mapId) {
	this.clearCustomEventHitboxCaches();
	H_Game_Map_setup.call(this, mapId);
	this._platformCache = null;
	this._lastPlatformCacheFrame = 0;
	this.respawnPermanentEvents();
	// Initialize new map's events
	if (this._events) {
        this._events.forEach(event => {
            if (event && !event._noHpBar) {
                event.setInitialHp();
            }
        });
    }
	if (spawnActorsAtStart) {
		setTimeout(() => {
			$gameParty.members().forEach(actor => {
				const actorName = actor.name();
				const id = $dataTemplateMap.events.findIndex(e => e?.name === actorName);
				if (id > 0) {
					$gameMap.spawnEvent(id, $gamePlayer.x, $gamePlayer.y, false);
				}
			});
		}, 50);
	}

	eventsToSpawn.forEach(identifier => {
		const idNum = Number(identifier);
		const id = !isNaN(idNum) ? idNum :
			$dataTemplateMap.events.findIndex(e => e?.name === identifier);

		if (id > 0) {
			$gameMap.spawnEvent(id, 0, 0, false);
		}
	});
	for (const key in _lastHpDecreaseCheck) {
		delete _lastHpDecreaseCheck[key];
	}
	this.buildEventMap();
	passageCache = {};
	const platforms = this.getPlatforms();
	platforms.forEach(platform => {
		platform._lastPosition = null;
		platform._attachedCharacters = new Map();
	});
};

const _DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
	_DataManager_extractSaveContents.call(this, contents);
	if ($gameMap) {
		$gameMap.buildEventMap();
	}
	LocalVarManager.loadLocalVars();

	// Clean up any temporary hitbox events from $dataMap
	if ($dataMap && $dataMap.events) {
		for (let i = 0; i < $dataMap.events.length; i++) {
			const event = $dataMap.events[i];
			if (event && event.name === "DynamicHitbox") {
				$dataMap.events[i] = null;
				if ($gameMap._events[i]) {
					// Clean up any remaining event instances
					if (SceneManager._scene instanceof Scene_Map) {
						SceneManager._scene._spriteset?.unspawnEvent(i);
					}
					$gameMap._events[i] = null;
					CollisionManager.clearCollisions(i);
				}
			}
		}
	}
};

//============================================================
// DETECTION AND CUSTOM MOVEMENT
//============================================================

//Path finding, override default moveTowardPlayer
Game_Character.prototype.moveTowardPlayer = function () {
	const d = this.findDirectionTo($gamePlayer.x, $gamePlayer.y);
	if (d === 0) return;  // No path found

	let horz = 0;
	let vert = 0;

	switch (d) {
		case 1: horz = 4; vert = 2; break;
		case 2: vert = 2; break;
		case 3: horz = 6; vert = 2; break;
		case 4: horz = 4; break;
		case 6: horz = 6; break;
		case 7: horz = 4; vert = 8; break;
		case 8: vert = 8; break;
		case 9: horz = 6; vert = 8; break;
	}

	// Set the character's direction for sprite orientation
	if (horz !== 0) {
		this.setDirection(horz);
	} else {
		this.setDirection(vert);
	}

	// Move
	if (horz !== 0 && vert !== 0) {
		this.moveDiagonally(horz, vert);
	} else {
		this.moveStraight(d);
	}
};

Game_Event.prototype.searchLimit = function () {
	return 13;
};

//------------------------ CHECK IN RANGE FEATURE ----------------------------------------------

const getVisionConePoints = (x, y, direction, range, fov) => {
	const tileWidth = $gameMap.tileWidth();
	const tileHeight = $gameMap.tileHeight();

	// Convert to pixel coordinates
	const pixelSourceX = (x + 0.5) * tileWidth;
	const pixelSourceY = (y + 0.5) * tileHeight;

	// Calculate base angle based on direction
	const baseAngle = (direction === 2) ? 90 : // Down
		(direction === 4) ? 180 : // Left
			(direction === 6) ? 0 : // Right
				270; // Up (8)

	// Calculate start and end angles for the cone
	const startAngle = ((baseAngle - fov / 2) * Math.PI / 180);
	const endAngle = ((baseAngle + fov / 2) * Math.PI / 180);
	const pixelRange = range * tileWidth;

	// Function to check if a point is in the cone
	getVisionConePoints.isInCone = (targetX, targetY) => {
		// Convert target position to pixels
		const pixelTargetX = (targetX + 0.5) * tileWidth;
		const pixelTargetY = (targetY + 0.5) * tileHeight;

		// Calculate distance
		const dx = pixelTargetX - pixelSourceX;
		const dy = pixelTargetY - pixelSourceY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		// Check range
		if (distance > pixelRange) return false;

		// Calculate angle to target
		let pointAngle = Math.atan2(dy, dx);
		if (pointAngle < 0) pointAngle += Math.PI * 2;

		// Normalize angles for comparison
		let normalizedStartAngle = startAngle;
		if (normalizedStartAngle < 0) normalizedStartAngle += Math.PI * 2;
		let normalizedEndAngle = endAngle;
		if (normalizedEndAngle < 0) normalizedEndAngle += Math.PI * 2;

		// Handle angle wrap-around
		if (normalizedStartAngle > normalizedEndAngle) {
			return pointAngle >= normalizedStartAngle || pointAngle <= normalizedEndAngle;
		} else {
			return pointAngle >= normalizedStartAngle && pointAngle <= normalizedEndAngle;
		}
	};

	// Create points array for visualization
	const points = [];

	// Add center point
	points.push({
		x: pixelSourceX,
		y: pixelSourceY
	});

	// Add points along the arc
	const segments = 32;
	for (let i = 0; i <= segments; i++) {
		const currentAngle = startAngle + (endAngle - startAngle) * (i / segments);
		const x = pixelSourceX + Math.cos(currentAngle) * pixelRange;
		const y = pixelSourceY + Math.sin(currentAngle) * pixelRange;
		points.push({
			x: x,
			y: y
		});
	}

	return points;
};

window.hasLineOfSight = function (x0, y0, x1, y1, blockRegion) {
	if (blockRegion <= 0) return true;

	let dx = Math.abs(x1 - x0);
	let dy = Math.abs(y1 - y0);
	let x = x0;
	let y = y0;
	let n = 1 + dx + dy;
	let x_inc = (x1 > x0) ? 1 : -1;
	let y_inc = (y1 > y0) ? 1 : -1;
	let error = dx - dy;
	dx *= 2;
	dy *= 2;

	for (; n > 0; --n) {
		if ($gameMap.regionId(x, y) === blockRegion) {
			return false;
		}
		if (error > 0) {
			x += x_inc;
			error -= dy;
		} else {
			y += y_inc;
			error += dx;
		}
	}
	return true;
};

Game_System.prototype.checkInRange = function (source, range, target, eyes = 0, blockRegion = 0, exception = null) {
	let sourceX, sourceY, sourceDirection;
	let sourceEvent;

	// Get source position and direction
	if (source === 'player') {
		sourceX = $gamePlayer.x;
		sourceY = $gamePlayer.y;
		sourceDirection = $gamePlayer.direction();
	} else if (source === 'this') {
		const event = $gameMap.event(this._eventId);
		if (!event) return false;
		sourceX = event.x;
		sourceY = event.y;
		sourceDirection = event.direction();
	} else {
		const event = $gameMap.event(source);
		if (!event) return false;
		sourceX = event.x;
		sourceY = event.y;
		sourceDirection = event.direction();
	}

	if (source === 'player') {
		sourceEvent = $gamePlayer;
	} else if (source === 'this') {
		sourceEvent = $gameMap.event(this._eventId);
	} else {
		sourceEvent = $gameMap.event(source);
	}

	if (sourceEvent) {
		// Store last check info for visualization
		sourceEvent._lastCheckRange = {
			range: range,
			eyes: eyes,
			blockRegion: blockRegion
		};
	}

	getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);

	const isTargetInRangeAndVisible = (sx, sy, sDirection, tx, ty, range, eyesParam) => {
		const dx = tx - sx;
		const dy = ty - sy;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > range) return false;

		// Check line of sight first
		if (!window.hasLineOfSight(sx, sy, tx, ty, blockRegion)) return false;

		if (!eyesParam || eyesParam === 0) return true;

		if (eyesParam > 0) {
			getVisionConePoints(sx, sy, sDirection, range, eyesParam);
			return getVisionConePoints.isInCone(tx, ty);
		}

		const visionPoints = getVisionConePoints(sx, sy, sDirection, range, eyesParam);
		return visionPoints.some(point => point.x === tx && point.y === ty);
	};

	// Check target based on type
	if (target === "player") {
		return isTargetInRangeAndVisible(sourceX, sourceY, sourceDirection,
			$gamePlayer.x, $gamePlayer.y, range, eyes);
	} else if (target === 'this') {
		const event = $gameMap.event(this._eventId);
		if (!event) return false;
		return isTargetInRangeAndVisible(sourceX, sourceY, sourceDirection,
			event.x, event.y, range, eyes);
	} else {
		return $gameMap.events().some(otherEvent => {
			if (otherEvent.event().note.includes(target)) {
				const currentPage = otherEvent.page();
				const hasAttackNotetag = currentPage && currentPage.list.some(command =>
					command.code === 108 && command.parameters[0].includes('<detectable>')
				);

				if (exception && otherEvent.event().note.includes(exception) && !hasAttackNotetag) {
					return false;
				}
				return isTargetInRangeAndVisible(sourceX, sourceY, sourceDirection,
					otherEvent.x, otherEvent.y, range, eyes);
			}
			return false;
		});
	}
};

Game_System.prototype.isTargetInRangeAndVisible = function (sourceX, sourceY, sourceDirection, targetX, targetY, range, eyes) {
	const distance = Math.sqrt(Math.pow(targetX - sourceX, 2) + Math.pow(targetY - sourceY, 2));
	if (distance > range) return false;

	if (eyes) {
		switch (sourceDirection) {
			case 2:
				return targetY >= sourceY;
			case 4:
				return targetX <= sourceX;
			case 6:
				return targetX >= sourceX;
			case 8:
				return targetY <= sourceY;
		}
	}

	return true;
};

// Movement -------------------------------------------------------

Game_System.prototype.moveAroundEvent = function (eventId, notetag, maxDistance, minDistance) {
	const event = $gameMap.event(eventId);
	if (!event) {
		return;
	}

	let targetX = $gamePlayer.x;
	let targetY = $gamePlayer.y;

	if (notetag !== 'player') {
		let closestEvent = null;
		let distanceToClosest = Infinity;

		$gameMap.events().forEach(otherEvent => {
			if (otherEvent.event().meta[notetag]) {
				const distance = Math.sqrt(Math.pow(otherEvent.x - event.x, 2) + Math.pow(otherEvent.y - event.y, 2));
				if (distance < distanceToClosest) {
					closestEvent = otherEvent;
					distanceToClosest = distance;
				}
			}
		});

		if (!closestEvent) return;

		targetX = closestEvent.x;
		targetY = closestEvent.y;
	}

	let newX, newY, distanceToNew;

	do {
		const angle = Math.random() * 2 * Math.PI;
		newX = targetX + Math.round(maxDistance * Math.cos(angle));
		newY = targetY + Math.round(maxDistance * Math.sin(angle));
		distanceToNew = Math.sqrt(Math.pow(newX - targetX, 2) + Math.pow(newY - targetY, 2));
	} while (distanceToNew < minDistance || (newX === targetX && newY === targetY) || (newX === event.x && newY === event.y));

	const horz = newX > event.x ? 6 : newX < event.x ? 4 : 0;
	const vert = newY > event.y ? 2 : newY < event.y ? 8 : 0;

	if (horz && vert) {
		event.moveDiagonally(horz, vert);
	} else if (horz) {
		event.moveStraight(horz);
	} else if (vert) {
		event.moveStraight(vert);
	}
};

Game_Character.prototype.shareDirection = function (target) {
	// Handle player case
	if (target === 'player') {
		this.setDirection($gamePlayer.direction());
		return;
	}

	// Event ID or name
	if (!isNaN(target)) {
		const event = $gameMap.event(Number(target));
		if (event) {
			this.setDirection(event.direction());
		}
		return;
	}

	let closestEvent = null;
	let minDistance = Infinity;

	$gameMap.events().forEach(event => {
		// Check both event name and note tag
		if (event.event().name === target || event.event().note.includes(target)) {
			const distance = Math.sqrt(
				Math.pow(event.x - this.x, 2) +
				Math.pow(event.y - this.y, 2)
			);
			if (distance < minDistance) {
				closestEvent = event;
				minDistance = distance;
			}
		}
	});

	if (closestEvent) {
		this.setDirection(closestEvent.direction());
	}
};

// TELEPORT -------------------------------------------------------------------

Game_Character.prototype.isValidPosition = function (x, y) {
	// Check if position is within map bounds
	if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) {
		return false;
	}

	// Check if position is passable from all directions
	return $gameMap.isPassable(x, y, 2) && $gameMap.isPassable(x, y, 4) &&
		$gameMap.isPassable(x, y, 6) && $gameMap.isPassable(x, y, 8);
};

Game_Character.prototype.findNearestValidPosition = function (startX, startY) {
	// If start position is valid, return it
	if (this.isValidPosition(startX, startY)) {
		return { x: startX, y: startY };
	}

	// Search in expanding square pattern
	for (let radius = 1; radius < Math.max($gameMap.width(), $gameMap.height()); radius++) {
		for (let dx = -radius; dx <= radius; dx++) {
			for (let dy = -radius; dy <= radius; dy++) {
				const newX = startX + dx;
				const newY = startY + dy;
				if (this.isValidPosition(newX, newY)) {
					return { x: newX, y: newY };
				}
			}
		}
	}
	return null; // If no valid position found
};

Game_Character.prototype.teleportTo = function (notetag, minDistance = null, maxDistance = null) {

	const isValidForTeleport = (x, y, forbiddenTiles) => {
		// Check map bounds
		if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) {
			return false;
		}

		// If no forbidden tiles specified, use normal passability check
		if (!forbiddenTiles) {
			return $gameMap.isPassable(x, y, 2) && $gameMap.isPassable(x, y, 4) &&
				$gameMap.isPassable(x, y, 6) && $gameMap.isPassable(x, y, 8);
		}

		const tilesetRanges = forbiddenTiles.split(' ').map(letter => {
			return {
				'A1': [[2048, 2815]],
				'A2': [[2816, 4351]],
				'A3': [[4352, 5887]],
				'A4': [[5888, 8191]],
				'A5': [[1536, 1663]],
				'B': [[0, 255]],
				'C': [[256, 511]],
				'D': [[512, 767]],
				'E': [[768, 1023]]
			}[letter];
		}).filter(range => range);

		const tiles = $gameMap.allTiles(x, y);
		const flags = $gameMap.tilesetFlags();

		return !tiles.some(tileId => {
			return tilesetRanges.some(ranges => {
				return ranges.some(([min, max]) =>
					tileId >= min && tileId <= max && (flags[tileId] & 0x0f)
				);
			});
		});
	};

	if (notetag === 'forward' && typeof minDistance === 'number') {
		let dx = 0;
		let dy = 0;

		if (this === $gamePlayer) {
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				// Virtual stick
				let degree = $virtualStickController.deg();
				this.setDirection(this.convertAngleToDirection(degree));
				let rad = (degree - 90) * Math.PI / 180;
				dx = Math.sign(Math.cos(rad));
				dy = Math.sign(Math.sin(rad)) * -1;
				if (dx === 0 && dy === 0) return;

			} else {
				// Keyboard
				const isUp = Input.isPressed('up');
				const isDown = Input.isPressed('down');
				const isLeft = Input.isPressed('left');
				const isRight = Input.isPressed('right');

				if (isUp && isRight) {
					dx = 1; dy = -1;
					this.setDirection(6);
				} else if (isUp && isLeft) {
					dx = -1; dy = -1;
					this.setDirection(4);
				} else if (isDown && isRight) {
					dx = 1; dy = 1;
					this.setDirection(6);
				} else if (isDown && isLeft) {
					dx = -1; dy = 1;
					this.setDirection(4);
				} else if (isUp) {
					dy = -1;
					this.setDirection(8);
				} else if (isDown) {
					dy = 1;
					this.setDirection(2);
				} else if (isLeft) {
					dx = -1;
					this.setDirection(4);
				} else if (isRight) {
					dx = 1;
					this.setDirection(6);
				} else {
					// Use current direction if no key is pressed
					switch (this.direction()) {
						case 8: dy = -1; break;
						case 2: dy = 1; break;
						case 4: dx = -1; break;
						case 6: dx = 1; break;
					}
				}
			}
		} else {
			// Non-player character
			switch (this.direction()) {
				case 8: dy = -1; break;
				case 2: dy = 1; break;
				case 4: dx = -1; break;
				case 6: dx = 1; break;
			}
		}

		if (dx !== 0 || dy !== 0) {
			let validX = this.x;
			let validY = this.y;

			for (let i = 1; i <= minDistance; i++) {
				const nextX = this.x + (dx * i);
				const nextY = this.y + (dy * i);

				if (isValidForTeleport(nextX, nextY, maxDistance)) {
					validX = nextX;
					validY = nextY;
				} else {
					break;
				}
			}

			if (validX !== this.x || validY !== this.y) {
				this.setPosition(validX, validY);
			}
		}
		return;
	}

	// Handle the case where notetag contains player X and minDistance contains player Y
	if (typeof notetag === 'number' && typeof minDistance === 'number') {
		const validPos = this.findNearestValidPosition(notetag, minDistance);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	// If no distances provided, teleport directly to nearest target
	if (minDistance === null && maxDistance === null) {
		if (notetag === 'player') {
			if (this.isValidPosition($gamePlayer.x, $gamePlayer.y)) {
				this.setPosition($gamePlayer.x, $gamePlayer.y);
			}
			return;
		}

		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(otherEvent => {
			if (otherEvent.event().note.includes(notetag)) {
				const distance = Math.sqrt(Math.pow(otherEvent.x - this.x, 2) + Math.pow(otherEvent.y - this.y, 2));
				if (distance < minDistance) {
					closestEvent = otherEvent;
					minDistance = distance;
				}
			}
		});

		if (closestEvent && this.isValidPosition(closestEvent.x, closestEvent.y)) {
			this.setPosition(closestEvent.x, closestEvent.y);
		}
		return;
	}

	// When distances are provided
	let targetX = $gamePlayer.x;
	let targetY = $gamePlayer.y;

	if (notetag !== 'player') {
		let closestEvent = null;
		let minDistanceToClosest = Infinity;
		$gameMap.events().forEach(otherEvent => {
			if (otherEvent.event().note.includes(notetag)) {
				const distance = Math.sqrt(Math.pow(otherEvent.x - this.x, 2) + Math.pow(otherEvent.y - this.y, 2));
				if (distance < minDistanceToClosest) {
					closestEvent = otherEvent;
					minDistanceToClosest = distance;
				}
			}
		});

		if (!closestEvent) return;

		targetX = closestEvent.x;
		targetY = closestEvent.y;
	}

	let newX, newY;
	let attempts = 50;  // Prevent infinite loop

	do {
		const angle = Math.random() * 2 * Math.PI;
		const distance = minDistance + Math.random() * (maxDistance - minDistance);
		newX = Math.round(targetX + distance * Math.cos(angle));
		newY = Math.round(targetY + distance * Math.sin(angle));
		attempts--;
	} while (!this.isValidPosition(newX, newY) && attempts > 0);

	if (this.isValidPosition(newX, newY)) {
		this.setPosition(newX, newY);
	}
};

// Same as move to Position but this one doesn't move using Dot Move System and support perfect pathfinding
Game_Character.prototype.moveToClosest = function (notetag, perfectPathfinding = false, waitTillFinish = false, exception = null) {
	const x1 = this.x;
	const y1 = this.y;
	let closestEvent = null;
	let minDistance = Infinity;

	$gameMap.events().forEach(otherEvent => {
		if (otherEvent.event().note.includes(notetag)) {
			const currentPage = otherEvent.page();
			const hasAttackNotetag = currentPage && currentPage.list.some(command =>
				command.code === 108 && command.parameters[0].includes('<ignore>')
			);

			if (exception && otherEvent.event().note.includes(exception) && !hasAttackNotetag) {
				return;
			}

			const x2 = otherEvent.x;
			const y2 = otherEvent.y;
			const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
			if (distance < minDistance) {
				closestEvent = otherEvent;
				minDistance = distance;
			}
		}
	});

	if (closestEvent) {
		if (waitTillFinish) {
			const dx = Math.abs(closestEvent.x - this.x);
			const dy = Math.abs(closestEvent.y - this.y);
			const steps = Math.max(dx, dy);

			const route = {
				list: [],
				repeat: this._moveRoute ? this._moveRoute.repeat : false,
				skippable: this._moveRoute ? this._moveRoute.skippable : true,
				wait: this._moveRoute ? this._moveRoute.wait : true
			};

			for (let i = 0; i < steps; i++) {
				route.list.push({
					code: 45,
					parameters: [`this.moveToClosest('${notetag}', ${perfectPathfinding})`]
				});
			}
			route.list.push({ code: 0 });

			this._moveRoute = route;
			this._moveRouteIndex = 0;
			this._moveRouteForcing = true;
		} else {
			if (perfectPathfinding) {
				const d = this.findDirectionTo(closestEvent.x, closestEvent.y);
				if (d === 0) return;

				let horz = 0;
				let vert = 0;

				switch (d) {
					case 1: horz = 4; vert = 2; break;
					case 2: vert = 2; break;
					case 3: horz = 6; vert = 2; break;
					case 4: horz = 4; break;
					case 6: horz = 6; break;
					case 7: horz = 4; vert = 8; break;
					case 8: vert = 8; break;
					case 9: horz = 6; vert = 8; break;
				}

				if (horz !== 0) {
					this.setDirection(horz);
				} else {
					this.setDirection(vert);
				}

				if (horz !== 0 && vert !== 0) {
					this.moveDiagonally(horz, vert);
				} else {
					this.moveStraight(d);
				}
			} else {
				const horz = closestEvent.x > this.x ? 6 : closestEvent.x < this.x ? 4 : 0;
				const vert = closestEvent.y > this.y ? 2 : closestEvent.y < this.y ? 8 : 0;
				if (horz && vert) {
					this.moveDiagonally(horz, vert);
				} else if (horz) {
					this.moveStraight(horz);
				} else if (vert) {
					this.moveStraight(vert);
				}
			}
		}
	}
};

// A versatile move feature. Can move to anywhere or any notetag using Dot Move System (pixel movement)
Game_Character.prototype.moveToPosition = function (targetX, targetY, rotate = false) {
	// Handle case where targetY is used as the rotate parameter
	if (typeof targetY === 'boolean') {
		rotate = targetY;
		targetY = undefined;
	}

	// Case X: Comment search case
	if (typeof targetX === 'string' && targetX.startsWith('comment:')) {
		const searchComment = targetX.slice(8).trim();
		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (!event || !event.page()) return;

			// Search current page for matching comment
			const hasComment = event.list().some(command =>
				(command.code === 108 || command.code === 408) &&
				command.parameters[0].includes(searchComment)
			);

			if (hasComment) {
				const distance = Math.sqrt(
					Math.pow(event.x - this.x, 2) +
					Math.pow(event.y - this.y, 2)
				);
				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			if (rotate) {
				const startPoint = this.positionPoint();
				const targetPoint = this.positionPoint();
				targetPoint.x = closestEvent.x;
				targetPoint.y = closestEvent.y;
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			this.moveToTarget(closestEvent.x, closestEvent.y);
			return;
		}
		return;
	}

	if (targetX === 'mouse or gamepad') {
		const stickInput = checkGamepadInput();

		if (stickInput) {
			// right stick when gamepad is connected
			const angle = Math.atan2(stickInput.x, -stickInput.y);
			let degrees = (angle * 180 / Math.PI);
			degrees = (degrees + 360) % 360;

			if (rotate) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this._useCustomRotationForMoveTowardPoint = true;
				this.setRotation(degrees);
			}

			this.dotMoveByDeg(degrees);
		} else {
			// cursor when no gamepad is connected
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);

			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = cursorX;
			targetPoint.y = cursorY;

			const targetDeg = startPoint.calcDeg(targetPoint).value;

			if (rotate) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this._useCustomRotationForMoveTowardPoint = true;
				this.setRotation(targetDeg);
			}

			const dx = targetPoint.x - startPoint.x;
			const dy = targetPoint.y - startPoint.y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > 1) {
				this.dotMoveByDeg(targetDeg);
			}
		}
		return;
	}

	// Case 0: Right Stick gamepad
	if (targetX === 'right stick') {
		const gamepad = navigator.getGamepads()[0];
		if (gamepad && gamepad.connected) {
			let rightX = gamepad.axes[2];
			let rightY = gamepad.axes[3];

			// Only move if stick is being moved beyond deadzone
			if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
				// Calculate angle from stick position
				const angle = Math.atan2(rightX, -rightY);
				let degrees = (angle * 180 / Math.PI);
				degrees = (degrees + 360) % 360;

				// Set rotation if requested
				if (rotate) {
					this.setOriginPoint('center');
					this.setCustomRotation(false);
					this._useCustomRotationForMoveTowardPoint = true;
					this.setRotation(degrees);
				}

				// Move in the calculated direction
				this.dotMoveByDeg(degrees);
			}
		}
		return;
	}

	// Case 1: Handle cursor movement (with optional rotation)
	if (targetX === 'cursor') {
		const cursorX = $gameMap.canvasToMapX(TouchInput.x);
		const cursorY = $gameMap.canvasToMapY(TouchInput.y);

		const startPoint = this.positionPoint();
		const targetPoint = this.positionPoint();
		targetPoint.x = cursorX;
		targetPoint.y = cursorY;

		const targetDeg = startPoint.calcDeg(targetPoint).value;

		if (rotate) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this._useCustomRotationForMoveTowardPoint = true;

			const currentDeg = this._rotation || 0;

			// Smooth rotation
			let angleDiff = targetDeg - currentDeg;
			if (angleDiff > 180) angleDiff -= 360;
			if (angleDiff < -180) angleDiff += 360;

			const smoothingFactor = 0.75;
			const smoothDeg = currentDeg + (angleDiff * smoothingFactor);

			this.setRotation(smoothDeg);
		}

		// Calculate distance to cursor
		const dx = targetPoint.x - startPoint.x;
		const dy = targetPoint.y - startPoint.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		// Only move if cursor is more than 1 tile away
		if (distance > 1) {
			this.dotMoveByDeg(targetDeg);
		}
		return;
	}

	// Case 2: Move forward in current rotation direction
	if (targetX === 'forward') {
		const currentRotation = this._rotation || 0;
		this.dotMoveByDeg(currentRotation);
		return;
	}

	// Case 3: Move to player
	if (targetX === 'player') {
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = $gamePlayer.x;
			targetPoint.y = $gamePlayer.y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTarget($gamePlayer.x, $gamePlayer.y);
		return;
	}

	// Case 3.5: Move to player but pixel perfect
	if ((typeof targetX === 'string' && targetX.includes('player pixel')) ||
		(typeof targetY === 'string' && targetY.includes('player pixel'))) {

		let finalX = targetX === 'player pixel'
			? $gamePlayer.centerPositionPoint().x - 0.5
			: targetX.startsWith('player pixel')
				? eval(`${$gamePlayer.centerPositionPoint().x - 0.5} ${targetX.replace('player pixel', '')}`)
				: targetX;

		let finalY = targetY === 'player pixel'
			? $gamePlayer.centerPositionPoint().y - 0.5
			: targetY.startsWith('player pixel')
				? eval(`${$gamePlayer.centerPositionPoint().y - 0.5} ${targetY.replace('player pixel', '')}`)
				: targetY;

		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = finalX;
			targetPoint.y = finalY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTarget(finalX, finalY);
		return;
	}

	// Case 4: Move to event with notetag
	if (typeof targetX === 'string' && targetX !== 'cursor' && targetX !== 'player') {
		const searchTag = targetX.startsWith('<') ? targetX : `<${targetX}>`;
		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (event.event().note.includes(searchTag)) {
				const distance = Math.sqrt(
					Math.pow(event.x - this.x, 2) +
					Math.pow(event.y - this.y, 2)
				);

				if (distance < minDistance) {
					closestEvent = event;
					minDistance = distance;
				}
			}
		});

		if (closestEvent) {
			if (rotate) {
				const startPoint = this.positionPoint();
				const targetPoint = this.positionPoint();
				targetPoint.x = closestEvent.x;
				targetPoint.y = closestEvent.y;
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			this.moveToTarget(closestEvent.x, closestEvent.y);
		}
		return;
	}

	// Case 5: Default coordinate-based movement
	if (typeof targetX === 'number' && typeof targetY === 'number') {
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = targetX;
			targetPoint.y = targetY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTarget(targetX, targetY);
		return;
	}
};

Game_Character.prototype.rotateTo = function (x, y) {
	if (x === 'mouse or gamepad') {
		if (DotMoveSystem) {
			const stickInput = checkGamepadInput();

			if (stickInput) {
				// right stick when gamepad is connected
				const angle = Math.atan2(stickInput.x, -stickInput.y);
				let degrees = (angle * 180 / Math.PI);
				degrees = (degrees + 360) % 360;

				this.setOriginPoint(y || 'center');
				this.setCustomRotation(false);
				this._useCustomRotationForMoveTowardPoint = true;
				this.setRotation(degrees);
			} else {
				// cursor when no gamepad is connected
				const cursorX = $gameMap.canvasToMapX(TouchInput.x);
				const cursorY = $gameMap.canvasToMapY(TouchInput.y);
				this.setOriginPoint(y || 'center');
				this.setCustomRotation(false);
				this._useCustomRotationForMoveTowardPoint = true;
				const startPoint = this.positionPoint();
				const targetPoint = this.positionPoint();
				targetPoint.x = cursorX;
				targetPoint.y = cursorY;
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			return;
		}
	}

	// Case: rotateTo('right stick') - Rotate based on right stick direction
	if (x === 'right stick') {
		if (DotMoveSystem) {
			const gamepad = navigator.getGamepads()[0];
			if (gamepad && gamepad.connected) {
				// Get right stick values and swap X/Y
				let rightX = gamepad.axes[2];
				let rightY = gamepad.axes[3];

				// Only rotate if stick is being moved
				if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
					// Swap X and Y in the atan2 calculation and adjust signs
					const angle = Math.atan2(rightX, -rightY);
					let degrees = (angle * 180 / Math.PI);
					degrees = (degrees + 360) % 360;

					// Debug output
					//console.log(`Stick Values - X: ${rightX.toFixed(2)}, Y: ${rightY.toFixed(2)}`);
					//console.log(`Rotation Angle: ${degrees.toFixed(2)} degrees`);

					this.setOriginPoint(y || 'center');
					this.setCustomRotation(false);
					this._useCustomRotationForMoveTowardPoint = true;
					this.setRotation(degrees);
				}
			}
		}
		return;
	}

	// Case: rotateTo('player moving direction') - Rotate to player's movement direction
	if (x === 'player moving direction') {
		if (DotMoveSystem) {
			// Check if virtual stick is being used
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				// Get virtual stick degree
				let degree = $virtualStickController.deg();
				this.setRotation(degree);
			} else {
				// Handle keyboard input
				const isUp = Input.isPressed('up');
				const isDown = Input.isPressed('down');
				const isLeft = Input.isPressed('left');
				const isRight = Input.isPressed('right');
				let direction = null;

				if (isUp && isRight) {
					direction = 9;
				} else if (isUp && isLeft) {
					direction = 7;
				} else if (isDown && isRight) {
					direction = 3;
				} else if (isDown && isLeft) {
					direction = 1;
				} else if (isUp) {
					direction = 8;
				} else if (isDown) {
					direction = 2;
				} else if (isLeft) {
					direction = 4;
				} else if (isRight) {
					direction = 6;
				}

				if (direction !== null) {
					const deg = DotMoveSystemClassAlias.Degree.fromDirection(direction);
					this.setRotation(deg.value);
				}
			}
			return;
		}
	}

	if (x === 'cursor') {
		if (DotMoveSystem) {
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);
			this.setOriginPoint(y || 'center');
			this.setCustomRotation(false);
			this._useCustomRotationForMoveTowardPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = cursorX;
			targetPoint.y = cursorY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		return;
	}

	// Case 1: rotateTo(x, y) - Rotate to specific coordinates
	if (typeof x === 'number' && typeof y === 'number') {
		if (DotMoveSystem) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this._useCustomRotationForMoveTowardPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = x;
			targetPoint.y = y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		return;
	}

	// Case 2: rotateTo(eventId) - Rotate to specific event
	if (typeof x === 'number' && y === undefined) {
		const targetEvent = $gameMap.event(x);
		if (targetEvent) {
			if (DotMoveSystem) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this._useCustomRotationForMoveTowardPoint = true;
				const startPoint = this.positionPoint();
				const targetPoint = targetEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
		}
		return;
	}

	// Case 3: rotateTo(notetag, range) - Rotate to nearest event with notetag within range
	if (typeof x === 'string' && x !== 'player' && x !== 'cursor') {
		const searchTag = x.startsWith('<') ? x : `<${x}>`;
		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (event.event().note.includes(searchTag)) {
				const distance = Math.sqrt(
					Math.pow(event.x - this.x, 2) +
					Math.pow(event.y - this.y, 2)
				);

				// Check if within range (if specified)
				if (typeof y === 'number' && distance > y) return;

				if (distance < minDistance) {
					closestEvent = event;
					minDistance = distance;
				}
			}
		});

		if (closestEvent) {
			if (DotMoveSystem) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this._useCustomRotationForMoveTowardPoint = true;
				const startPoint = this.positionPoint();
				const targetPoint = closestEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
		}
		return;
	}

	// Case 4: rotateTo('player') - Rotate to player
	if (x === 'player') {
		if (DotMoveSystem) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this._useCustomRotationForMoveTowardPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = $gamePlayer.positionPoint();
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		return;
	}
};

Game_Character.prototype.turnToward = function (target, forceDirection = false, maxDistance = null) {
	// Store original direction fix state if forcing direction
	const originalDirectionFix = this.isDirectionFixed();

	// Temporarily unlock direction if forcing
	if (forceDirection && originalDirectionFix) {
		this.setDirectionFix(false);
	}

	if (target === 'mouse or gamepad') {
		const stickInput = checkGamepadInput();

		if (stickInput) {
			// right stick when gamepad
			if (Math.abs(stickInput.x) > Math.abs(stickInput.y)) {
				this.setDirection(stickInput.x > 0 ? 6 : 4);
			} else {
				this.setDirection(stickInput.y > 0 ? 2 : 8);
			}
		} else {
			// cursor when no gamepad
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);

			// If maxDistance is specified, check if cursor is within range
			if (maxDistance) {
				const distance = Math.sqrt(
					Math.pow(cursorX - this.x, 2) +
					Math.pow(cursorY - this.y, 2)
				);
				if (distance > maxDistance) {
					if (forceDirection) {
						this.setDirectionFix(originalDirectionFix);
					}
					return;
				}
			}

			const dx = cursorX - this.x;
			const dy = cursorY - this.y;

			if (Math.abs(dx) > Math.abs(dy)) {
				this.setDirection(dx > 0 ? 6 : 4);
			} else if (dy !== 0) {
				this.setDirection(dy > 0 ? 2 : 8);
			}
		}
	}

	// Handle cursor case
	if (target === 'cursor') {
		const cursorX = $gameMap.canvasToMapX(TouchInput.x);
		const cursorY = $gameMap.canvasToMapY(TouchInput.y);

		if (maxDistance) {
			const distance = Math.sqrt(
				Math.pow(cursorX - this.x, 2) +
				Math.pow(cursorY - this.y, 2)
			);
			if (distance > maxDistance) return;
		}

		const dx = cursorX - this.x;
		const dy = cursorY - this.y;

		if (Math.abs(dx) > Math.abs(dy)) {
			this.setDirection(dx > 0 ? 6 : 4);
		} else if (dy !== 0) {
			this.setDirection(dy > 0 ? 2 : 8);
		}
	}
	// Handle right stick case
	else if (target === 'right stick') {
		const gamepad = navigator.getGamepads()[0];
		if (gamepad && gamepad.connected) {
			let rightX = gamepad.axes[2];
			let rightY = gamepad.axes[3];

			if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
				if (Math.abs(rightX) > Math.abs(rightY)) {
					this.setDirection(rightX > 0 ? 6 : 4);
				} else {
					this.setDirection(rightY > 0 ? 2 : 8);
				}
			}
		}
	}
	// Handle event ID case
	else if (!isNaN(target)) {
		const eventId = Number(target);
		const event = $gameMap.event(eventId);
		if (event) {
			const distance = Math.sqrt(
				Math.pow(event.x - this.x, 2) +
				Math.pow(event.y - this.y, 2)
			);
			if (!maxDistance || distance <= maxDistance) {
				this.turnTowardCharacter(event);
			}
		}
	}
	// Handle note tag case
	else {
		const x1 = this.x;
		const y1 = this.y;

		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(otherEvent => {
			if (otherEvent.event().note.includes(target)) {
				const distance = Math.sqrt(
					Math.pow(otherEvent.x - x1, 2) +
					Math.pow(otherEvent.y - y1, 2)
				);
				if (distance < minDistance && (!maxDistance || distance <= maxDistance)) {
					closestEvent = otherEvent;
					minDistance = distance;
				}
			}
		});

		if (closestEvent) {
			this.turnTowardCharacter(closestEvent);
		}
	}

	// Restore direction fix state
	if (forceDirection) {
		this.setDirectionFix(true);
	}
	else if (originalDirectionFix) {
		this.setDirectionFix(true);
	}
};

Game_Character.prototype.sucking = function (notetag, range, speedBoost = 4.5) {
	if (notetag === 'player') {
		const dx = $gamePlayer.x - this.x;
		const dy = $gamePlayer.y - this.y;

		if (Math.abs(dx) <= range && Math.abs(dy) <= range) {
			const distanceSquared = dx * dx + dy * dy;
			if (distanceSquared <= range * range) {
				const d4 = dx > 0 ? 4 : 6;
				const d8 = dy > 0 ? 8 : 2;

				if (dx !== 0 && dy !== 0) {
					$gamePlayer.moveDiagonally(d4, d8);
				} else if (dx !== 0) {
					$gamePlayer.moveStraight(d4);
				} else if (dy !== 0) {
					$gamePlayer.moveStraight(d8);
				}
			}
		}
		return;
	}

	const events = $gameMap.events();

	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		if (notetag !== 'all') {
			const note = event.event().note;
			const searchTag = notetag.startsWith('<') && notetag.endsWith('>') ?
				notetag : `<${notetag}>`;
			const exactMatch = note.includes(searchTag);
			if (!exactMatch) continue;
		}

		const dx = event.x - this.x;
		const dy = event.y - this.y;

		if (Math.abs(dx) > range || Math.abs(dy) > range) continue;

		const distanceSquared = dx * dx + dy * dy;
		if (distanceSquared <= range * range) {
			const baseSpeed = event.moveSpeed();
			let speedMultiplier = 1;
			if (baseSpeed === 1) speedMultiplier = 4;
			else if (baseSpeed === 2) speedMultiplier = 3;
			else if (baseSpeed === 3) speedMultiplier = 2;

			const extraMoves = Math.floor((speedBoost * speedMultiplier) / 2);

			for (let j = 0; j <= extraMoves; j++) {
				const d4 = dx > 0 ? 4 : 6;
				const d8 = dy > 0 ? 8 : 2;

				if (dx !== 0 && dy !== 0) {
					event.moveDiagonally(d4, d8);
				} else if (dx !== 0) {
					event.moveStraight(d4);
				} else if (dy !== 0) {
					event.moveStraight(d8);
				}
			}
		}
	}
};

Game_Character.prototype.jumpToNearby = function (maxDistance, jumpOnOtherEvent = false) {
	let passableTiles = [];
	for (let dx = -maxDistance; dx <= maxDistance; dx++) {
		for (let dy = -maxDistance; dy <= maxDistance; dy++) {
			const newX = this.x + dx;
			const newY = this.y + dy;

			// Check if the tile is within the game map, passable, and not occupied by another event
			if ($gameMap.isValid(newX, newY) && $gameMap.isPassable(newX, newY, 5)) {
				const isTileOccupied = $gameMap.eventsXy(newX, newY).length > 0;
				if (jumpOnOtherEvent || !isTileOccupied) {
					passableTiles.push({ x: newX, y: newY });
				}
			}
		}
	}

	if (passableTiles.length > 0) {
		const randomTile = passableTiles[Math.floor(Math.random() * passableTiles.length)];
		const jumpX = randomTile.x - this.x;
		const jumpY = randomTile.y - this.y;
		this.jump(jumpX, jumpY);
	}
};

Game_Character.prototype.jumpTo = function (x, y) {
	// Case 1: jumpTo(eventId) - Jump to specific event
	if (typeof x === 'number' && y === undefined) {
		const targetEvent = $gameMap.event(x);
		if (targetEvent) {
			const xDist = targetEvent.x - this.x;
			const yDist = targetEvent.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 3: jumpTo(x, y) - Jump to specific coordinates
	if (typeof x === 'number' && typeof y === 'number') {
		// Verify coordinates are within map bounds
		if (x >= 0 && x < $gameMap.width() && y >= 0 && y < $gameMap.height()) {
			const xDist = x - this.x;
			const yDist = y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 4: jumpTo('player') - Jump to player position
	if (x === 'player' && y === undefined) {
		const xDist = $gamePlayer.x - this.x;
		const yDist = $gamePlayer.y - this.y;
		this.jump(xDist, yDist);
		return;
	}

	// Case 5: jumpTo('forward'/'backward'/'away', distance) - Directional jumping
	if ((x === 'forward' || x === 'backward' || x === 'away') && typeof y === 'number') {
		const direction = this.direction();
		let jumpX = 0;
		let jumpY = 0;

		if (x === 'away') {
			const playerX = $gamePlayer.x;
			const playerY = $gamePlayer.y;
			const deltaX = this.x - playerX;
			const deltaY = this.y - playerY;

			if (Math.abs(deltaX) > Math.abs(deltaY)) {
				jumpX = deltaX > 0 ? y : -y;
			} else {
				jumpY = deltaY > 0 ? y : -y;
			}

			const newDirection = Math.abs(deltaX) > Math.abs(deltaY)
				? (deltaX > 0 ? 4 : 6)
				: (deltaY > 0 ? 8 : 2);
			this.setDirection(newDirection);
		} else {
			switch (direction) {
				case 2:
					jumpY = x === 'forward' ? y : -y;
					break;
				case 4:
					jumpX = x === 'forward' ? -y : y;
					break;
				case 6:
					jumpX = x === 'forward' ? y : -y;
					break;
				case 8:
					jumpY = x === 'forward' ? -y : y;
					break;
			}
		}

		const newX = this.x + jumpX;
		const newY = this.y + jumpY;

		// Check if the target tile is passable and not occupied by another event
		if ($gameMap.isValid(newX, newY) &&
			(this.isThrough() ||
				($gameMap.isPassable(newX, newY, 5) &&
					$gameMap.eventsXy(newX, newY).length === 0))) {
			this.jump(jumpX, jumpY);
			this.setDirection(direction);
		}
		return;
	}

	// Case 2: jumpTo(notetag, range) - Jump to nearest event with notetag within range
	if (typeof x === 'string' && (y === undefined || typeof y === 'number')) {
		let closestEvent = null;
		let minDistance = Infinity;

		const searchTag = x.startsWith('<') ? x : `<${x}>`;

		$gameMap.events().forEach(event => {
			if (event.event().note.includes(searchTag)) {
				const distance = Math.sqrt(
					Math.pow(event.x - this.x, 2) +
					Math.pow(event.y - this.y, 2)
				);

				// If y (range) is provided, only consider events within that range
				if ((y === undefined || distance <= y) && distance < minDistance) {
					closestEvent = event;
					minDistance = distance;
				}
			}
		});

		if (closestEvent) {
			const xDist = closestEvent.x - this.x;
			const yDist = closestEvent.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}
};

//============================================================
// DOT MOVE ADD-ON FEATURES
//============================================================

Game_Character.prototype.dash = function (steps) {
	if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
		typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
		// Virtual stick is being used
		let degree = $virtualStickController.deg();
		this.setDirection(this.convertAngleToDirection(degree));

		// Convert degree to radians
		let rad = (degree - 90) * Math.PI / 180;

		// Calculate x and y components
		let x = Math.cos(rad);
		let y = -Math.sin(rad);

		// Only dash if the stick is being pushed significantly
		if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
			const distance = steps * this.distancePerFrame() * 3;
			const deg = DotMoveSystemClassAlias.Degree.fromDirection(this.direction());
			this.mover().startContinuousMove(distance, deg);
		}
	} else {
		// Keyboard input for 8-direction movement
		const isUp = Input.isPressed('up');
		const isDown = Input.isPressed('down');
		const isLeft = Input.isPressed('left');
		const isRight = Input.isPressed('right');
		let direction = null;

		if (isUp && isRight) {
			direction = 9;
			this.setDirection(6);
		} else if (isUp && isLeft) {
			direction = 7;
			this.setDirection(4);
		} else if (isDown && isRight) {
			direction = 3;
			this.setDirection(6);
		} else if (isDown && isLeft) {
			direction = 1;
			this.setDirection(4);
		} else if (isUp) {
			direction = 8;
			this.setDirection(8);
		} else if (isDown) {
			direction = 2;
			this.setDirection(2);
		} else if (isLeft) {
			direction = 4;
			this.setDirection(4);
		} else if (isRight) {
			direction = 6;
			this.setDirection(6);
		} else {
			direction = this.direction();
		}

		if (direction !== null) {
			const distance = steps * this.distancePerFrame() * 3;
			const deg = DotMoveSystemClassAlias.Degree.fromDirection(direction);
			this.mover().startContinuousMove(distance, deg);
		}
	}
};

Game_Character.prototype.convertAngleToDirection = function (angle) {
	angle = ((angle % 360) + 360) % 360;

	if (angle >= 315 || angle < 45) return 6;     // Right
	if (angle >= 45 && angle < 135) return 8;     // Up
	if (angle >= 135 && angle < 225) return 4;    // Left
	return 2;                                     // Down (225-315)
};

//============================================================
// SELF SWITCH
//============================================================

const processSelSwitch = function (state, comment, eventId, sourceInterpreter) {
	const mapId = $gameMap.mapId();

	// nearby <notetag>
	if (typeof eventId === 'string' && eventId.startsWith('nearby ')) {
		const tag = eventId.slice(7);
		let nearestEvent = null;
		let minDistance = Infinity;
		const sourceEvent = $gameMap.event(sourceInterpreter._eventId);

		if (!sourceEvent) return;

		$gameMap.events().forEach(event => {
			if (event && event !== sourceEvent && event.event().note.includes(tag)) {
				const distance = Math.sqrt(
					Math.pow(event.x - sourceEvent.x, 2) +
					Math.pow(event.y - sourceEvent.y, 2)
				);
				if (distance < minDistance) {
					minDistance = distance;
					nearestEvent = event;
				}
			}
		});

		if (nearestEvent) {
			processEvent(nearestEvent, comment, state, mapId);
		}
	}
	// Process all events with notetag
	else if (typeof eventId === 'string' && eventId.startsWith('<') && eventId.endsWith('>')) {
		$gameMap.events().forEach(event => {
			if (event && event.event().note.includes(eventId)) {
				processEvent(event, comment, state, mapId);
			}
		});
	}
	// Process single event
	else {
		const event = $gameMap.event(eventId);
		if (event) {
			processEvent(event, comment, state, mapId);
		}
	}
};

const processEvent = function (event, comment, state, mapId) {
	const eventData = event.event();

	for (let i = 0; i < eventData.pages.length; i++) {
		const page = eventData.pages[i];
		const hasComment = page.list.some(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].includes(comment)
		);

		if (hasComment) {
			// Check if page uses a switch named "self switch X"
			if (page.conditions.switch1Valid) {
				const switchName = $dataSystem.switches[page.conditions.switch1Id];
				if (switchName?.toLowerCase().startsWith('self switch')) {
					$gameSelfSwitches.setValue([mapId, event.eventId(),
						`SW_${page.conditions.switch1Id}`], state);
					event.refresh();
					return;
				}
			}

			// Check abcd self switch
			if (page.conditions.selfSwitchValid) {
				$gameSelfSwitches.setValue([mapId, event.eventId(),
					page.conditions.selfSwitchCh], state);
				event.refresh();
				return;
			}
		}
	}
};

PluginManager.registerCommand(HpluginName, "ControlSelfSwitch", function (args) {
	const eventId = args.eventId === '' || args.eventId === '0' ? this.eventId() : args.eventId;
	const state = args.state === 'true';
	processSelSwitch(state, args.comment, eventId, this);
});

const H_Game_SelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
Game_SelfSwitches.prototype.setValue = function (key, value) {
	const switchId = key[2];

	if (switchId.startsWith('SW_')) {
		const actualSwitchId = parseInt(switchId.replace('SW_', ''));
		if (!isNaN(actualSwitchId)) {
			$gameSwitches.setValue(actualSwitchId, value);
		}
	}

	H_Game_SelfSwitches_setValue.call(this, key, value);
};

//============================================================
// SELF VARIABLES
//============================================================

var LocalVarManager = LocalVarManager || {};
LocalVarManager.localVars = {};
window.LocalVarManager = LocalVarManager;

PluginManager.registerCommand(HpluginName, "SetValue", function (args) {
	const eventId = `${$gameMap.mapId()}_${this._eventId}`;
	const id = args.id || 'default';
	const valueStr = String(args.valueToSet);
	const randomMax = args.randomMax;

	LocalVarManager.localVars[eventId] = LocalVarManager.localVars[eventId] || {};
	const currentValue = LocalVarManager.localVars[eventId][id] || 0;

	let newValue;

	// Random value
	if (randomMax && randomMax.trim() !== '') {
		const min = Number(valueStr);
		const max = Number(randomMax);
		newValue = Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		// Remove all spaces from the input for maximum UX
		const cleanValue = valueStr.replace(/\s+/g, '');

		if (cleanValue.startsWith('+')) {
			newValue = currentValue + Number(cleanValue.slice(1));
		} else if (cleanValue.startsWith('-')) {
			newValue = Math.max(currentValue - Number(cleanValue.slice(1)), 0);
		} else {
			// Convert to number, if fails then use the string
			const num = Number(cleanValue);
			newValue = isNaN(num) ? valueStr : num;
		}
	}

	LocalVarManager.localVars[eventId][id] = newValue;
	LocalVarManager.saveLocalVars();
});

PluginManager.registerCommand(HpluginName, "ResetMapValues", function () {
	const currentMapId = $gameMap.mapId();
	const mapPrefix = `${currentMapId}_`;

	for (const key in LocalVarManager.localVars) {
		if (key.startsWith(mapPrefix)) {
			LocalVarManager.localVars[key] = {};
		}
	}

	LocalVarManager.saveLocalVars();
});

LocalVarManager.saveLocalVars = function () {
	if ($gameVariables) {
		$gameVariables.setValue(9999, JSON.stringify(LocalVarManager.localVars));
	}
};

LocalVarManager.loadLocalVars = function () {
	if ($gameVariables) {
		const savedData = $gameVariables.value(9999);
		LocalVarManager.localVars = savedData ? JSON.parse(savedData) : {};
	}
};

window.localVariable = function (eventId, expression, id = 'default') {
	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	const localVarValue = LocalVarManager.localVars[uniqueId] ? LocalVarManager.localVars[uniqueId][id] : undefined;

	// Handle string expression format ">=5", ">5", "==5" etc.
	if (typeof expression === 'string') {
		const match = expression.match(/([<>]=?|==?)(\d+)/);
		if (match) {
			const [, condition, valueStr] = match;
			const value = Number(valueStr);

			if (typeof localVarValue === 'number') {
				switch (condition) {
					case '>': return localVarValue > value;
					case '>=': return localVarValue >= value;
					case '<': return localVarValue < value;
					case '<=': return localVarValue <= value;
					case '==': return localVarValue === value;
				}
			}
		}
		return localVarValue === expression;
	}

	if (arguments.length === 3) {
		return localVariable(eventId, `${arguments[1]}${arguments[2]}`);
	}

	return localVarValue === expression;
};

window.eventLocalVariable = function (eventId, value, id = 'default', direction = null) {
	let sourceX, sourceY;

	if (eventId === 'player') {
		sourceX = $gamePlayer.x;
		sourceY = $gamePlayer.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch ($gamePlayer.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch ($gamePlayer.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	} else if (typeof eventId === 'string' && eventId.startsWith('<')) {
		let nearestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (event.event().note.includes(eventId)) {
				const dx = Math.abs(event.x - $gamePlayer.x);
				const dy = Math.abs(event.y - $gamePlayer.y);
				const distance = dx + dy;
				if (distance < minDistance) {
					minDistance = distance;
					nearestEvent = event;
				}
			}
		});

		if (!nearestEvent) return false;
		sourceX = nearestEvent.x;
		sourceY = nearestEvent.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch (nearestEvent.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch (nearestEvent.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	} else {
		const sourceEvent = $gameMap.event(eventId);
		if (!sourceEvent) return false;
		sourceX = sourceEvent.x;
		sourceY = sourceEvent.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch (sourceEvent.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch (sourceEvent.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	}

	const eventsAtPosition = $gameMap.eventsXy(sourceX, sourceY);

	const otherEvents = typeof eventId === 'number' ?
		eventsAtPosition.filter(event => event.eventId() !== eventId) :
		eventsAtPosition;

	return otherEvents.some(event => {
		const uniqueId = `${$gameMap.mapId()}_${event.eventId()}`;
		const localVarValue = LocalVarManager.localVars[uniqueId] ?
			LocalVarManager.localVars[uniqueId][id] :
			undefined;

		if (typeof value === 'string') {
			const match = value.match(/([<>]=?|==?)(\d+)/);
			if (match) {
				const [, condition, valueStr] = match;
				const numValue = Number(valueStr);

				if (typeof localVarValue === 'number') {
					switch (condition) {
						case '>': return localVarValue > numValue;
						case '>=': return localVarValue >= numValue;
						case '<': return localVarValue < numValue;
						case '<=': return localVarValue <= numValue;
						case '==': return localVarValue === numValue;
					}
				}
			}
			return localVarValue === value;
		}

		return localVarValue === value;
	});
};

window.localPercentage = function (eventId, percentage) {
	if (eventId === 'player') {
		return Math.random() * 100 < percentage;
	}

	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	const randomValue = Math.random() * 100;

	LocalVarManager.localVars[uniqueId] = LocalVarManager.localVars[uniqueId] || {};
	LocalVarManager.localVars[uniqueId]['percentageValue'] = randomValue;

	return randomValue < percentage;
};

// Helper, to use in other expressions when you want to access the local var of the event
// Usage: 
// $gamePlayer.x + localVar()  // for default Name ID
// $gamePlayer.x + localVar('coins') 
window.localVar = function (eventId, id = 'default') {
	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	return LocalVarManager.localVars[uniqueId] ? LocalVarManager.localVars[uniqueId][id] || 0 : 0;
};

//============================================================
// WEAPON SWING
//============================================================
PluginManager.registerCommand(HpluginName, "SwingWeapon", function (args) {
	const eventId = args.eventId === 'this' ? this._eventId : args.eventId === 'player' ? 0 : parseInt(args.eventId);
	const source = eventId === 0 ? $gamePlayer : $gameMap.event(eventId);
	if (!source) return;

	let [offsetX, offsetY] = args.offset.split(',').map(v => parseInt(v.trim()) || 0);
	const speed = parseInt(args.speed) || 20;

	if (source.direction() === 2 || source.direction() === 4 || source.direction() === 6) {
		offsetY += 28;
	}

	const sprite = new Sprite_WeaponSwing(args.weaponSprite, source, offsetX, offsetY, speed);
	SceneManager._scene._spriteset.addChild(sprite);
});

class Sprite_WeaponSwing extends Sprite {
	constructor(weaponImage, source, offsetX, offsetY, duration) {
		super();
		this.bitmap = ImageManager.loadPicture(weaponImage);
		this._source = source;
		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._duration = duration;
		this._totalDuration = duration;
		this.anchor.x = 0;
		this.anchor.y = 0.5;
		this.x = source.screenX() + offsetX;
		this.y = source.screenY() + offsetY;

		this._setupAnglesByDirection();
	}

	_setupAnglesByDirection() {
		const direction = this._source.direction();
		const toRadians = angle => (angle * Math.PI) / 180;
		switch (direction) {
			case 2:
				this._startAngle = toRadians(0);
				this._endAngle = toRadians(180);
				break;
			case 4:
				this._startAngle = toRadians(270);
				this._endAngle = toRadians(90);
				break;
			case 6:
				this.scale.x = -1;
				this._startAngle = toRadians(90);
				this._endAngle = toRadians(270);
				break;
			case 8:
				this._startAngle = toRadians(180);
				this._endAngle = toRadians(360);
				break;
		}
		this.rotation = this._startAngle;
	}

	update() {
		super.update();
		if (this._duration > 0) {
			this._duration--;
			const progress = (this._totalDuration - this._duration) / this._totalDuration;
			this.rotation = this._startAngle + (this._endAngle - this._startAngle) * progress;

			const screenX = this._source.screenX() + this._offsetX;
			const screenY = this._source.screenY() + this._offsetY;
			this.x = screenX;
			this.y = screenY;

			if (this._duration === 0) {
				this.parent.removeChild(this);
			}
		}
	}
}

//============================================================
// MINOR STUFF
//============================================================

PluginManager.registerCommand(HpluginName, "StopQueue", function () {
	const event = this.character(0);
	if (event && event instanceof Game_Event) {
		event.stopQueue();
		$gameMap._interpreter._waitMode = '';
		event._waitCount = 0;
	}
});

Game_Event.prototype.stopQueue = function () {
	// Stop movement and clear route
	this._moveRouteForcing = false;
	this._moveRoute = null;
	this._moveRouteIndex = 0;
	// Clear any remaining commands
	this.clearMovementWait();
};

Game_Event.prototype.clearMovementWait = function () {
	this._waitCount = 0;
	this._moving = false;
	// Reset any animation or stepping animations
	this.resetStopCount();
	this.straighten();
};

PluginManager.registerCommand(HpluginName, "CycleNextWeapon", function () {
	const leader = $gameParty.leader();
	const weapons = $gameParty.weapons().filter(weapon => leader.canEquip(weapon));
	if (weapons.length === 0) return;
	const currentWeapon = leader.equips()[0];

	let nextWeapon;
	if (!currentWeapon) {
		nextWeapon = weapons[0];
	} else {
		const currentIndex = weapons.findIndex(w => w.id === currentWeapon.id);
		if (currentIndex === -1) {
			nextWeapon = weapons[0];
		} else {
			nextWeapon = weapons[(currentIndex + 1) % weapons.length];
		}
	}

	if (nextWeapon) {
		leader.forceChangeEquip(0, nextWeapon);
	}
});

PluginManager.registerCommand(HpluginName, "CameraUpdate", function (args) {
	const pauseCamera = args.pauseCamera === 'true';

	if (pauseCamera) {
		$gameMap.scrollDown = function (distance) { return; };
		$gameMap.scrollLeft = function (distance) { return; };
		$gameMap.scrollRight = function (distance) { return; };
		$gameMap.scrollUp = function (distance) { return; };
	} else {
		// Restore original scroll functions
		$gameMap.scrollDown = Game_Map.prototype.scrollDown;
		$gameMap.scrollLeft = Game_Map.prototype.scrollLeft;
		$gameMap.scrollRight = Game_Map.prototype.scrollRight;
		$gameMap.scrollUp = Game_Map.prototype.scrollUp;

		// Smooth transition
		const targetX = $gamePlayer.x - $gameMap.screenTileX() / 2;
		const targetY = $gamePlayer.y - $gameMap.screenTileY() / 2;
		const duration = 15; // Speed (higher = slower)
		const dx = (targetX - $gameMap._displayX) / duration;
		const dy = (targetY - $gameMap._displayY) / duration;

		let count = 0;
		const smoothScroll = () => {
			if (count < duration) {
				$gameMap.setDisplayPos($gameMap._displayX + dx, $gameMap._displayY + dy);
				count++;
				requestAnimationFrame(smoothScroll);
			}
		};
		smoothScroll();
	}
});

//============================================================
// SOUND DETECTION
//============================================================

window._activeSounds = new Map();

const _AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function (se) {
	if (se) {
		// Store the sound with its volume and the event that played it
		const eventId = $gameMap._interpreter ? $gameMap._interpreter._eventId : null;
		if (eventId) {
			window._activeSounds.set(eventId, {
				volume: se.volume,
				timestamp: Graphics.frameCount
			});
		}
	}
	_AudioManager_playSe.call(this, se);
};

// Clean up old sounds (sounds older than 2 frames)
const cleanupOldSounds = () => {
	const currentFrame = Graphics.frameCount;
	for (const [eventId, soundData] of window._activeSounds.entries()) {
		if (currentFrame - soundData.timestamp > 2) {
			window._activeSounds.delete(eventId);
		}
	}
};

window.checkSound = function (listenerEventId, volumeThreshold, maxRange) {
	cleanupOldSounds();

	const listenerEvent = $gameMap.event(listenerEventId);
	if (!listenerEvent) return false;

	// Get center position of listener
	const listenerScreenX = listenerEvent.screenX();
	const listenerScreenY = listenerEvent.screenY() - $gameMap.tileHeight() / 2;
	const maxRangeInPixels = maxRange * $gameMap.tileWidth();

	if (showHitboxes) {
		listenerEvent._lastSoundCheck = {
			centerX: listenerScreenX,
			centerY: listenerScreenY,
			radius: maxRangeInPixels,
			threshold: volumeThreshold,
			detectedSounds: []
		};
	}

	let soundDetected = false;

	for (const [sourceEventId, soundData] of window._activeSounds.entries()) {
		if (soundData.volume < volumeThreshold) continue;

		const sourceEvent = $gameMap.event(sourceEventId);
		if (!sourceEvent) continue;

		// Get center position of source event
		const sourceScreenX = sourceEvent.screenX();
		const sourceScreenY = sourceEvent.screenY() - $gameMap.tileHeight() / 2;

		const dx = sourceScreenX - listenerScreenX;
		const dy = sourceScreenY - listenerScreenY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance <= maxRangeInPixels) {
			soundDetected = true;

			if (showHitboxes && listenerEvent._lastSoundCheck) {
				listenerEvent._lastSoundCheck.detectedSounds.push({
					x: sourceScreenX,
					y: sourceScreenY,
					volume: soundData.volume
				});
			}
		}
	}

	return soundDetected;
};

//============================================================
// DOT MOVE ADD ON
//============================================================

const _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function () {
	_Game_CharacterBase_initMembers.call(this);
	this._rotation = 0;
	this._originPoint = "center";
	this._useCustomRotation = false;
};

Game_CharacterBase.prototype.rotation = function () {
	if (this._useCustomRotation) {
		return this._rotation;
	}
	return this._rotation;
};
Game_CharacterBase.prototype.setRotation = function (deg) {
	this._rotation = deg;
};

Game_CharacterBase.prototype.originPoint = function () {
	return this._originPoint;
};

Game_CharacterBase.prototype.setOriginPoint = function (origin) {
	this._originPoint = origin;
};

Game_CharacterBase.prototype.setCustomRotation = function (enabled) {
	this._useCustomRotation = enabled;
};

const _Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function () {
	_Sprite_Character_updatePosition.call(this);

	if (this._character === $gamePlayer && (playerGraphicalOffsetX !== 0 || playerGraphicalOffsetY !== 0)) {
		this.x += playerGraphicalOffsetX;
		this.y += playerGraphicalOffsetY;
	}

	if (this._character && this._character._useCustomRotationForMoveTowardPoint) {
		this.rotation = (this._character.rotation() * Math.PI) / 180;

		const origin = this._character.originPoint();
		const offsetDistance = 24;

		// Check if this is one of the special origins that should flip
		const shouldCheckFlip = origin === 'player' ||
			(!isNaN(origin)) ||
			origin.startsWith('<') ||
			$gameMap.events().some(event => event.event().name === origin);

		if (shouldCheckFlip) {
			// Get the current rotation angle
			let currentAngle = this._character.rotation() % 360;
			if (currentAngle < 0) currentAngle += 360;

			// Flip sprite if rotation is between 179 and 359 degrees
			this.scale.x = (currentAngle >= 179 && currentAngle <= 359) ? -1 : 1;
		}

		if (origin === 'player') {
			this.x = $gamePlayer.screenX();
			this.y = $gamePlayer.screenY() - offsetDistance;
		} else if (!isNaN(origin)) {
			// Event ID
			const event = $gameMap.event(Number(origin));
			if (event) {
				this.x = event.screenX();
				this.y = event.screenY() - offsetDistance;
			}
		} else if (origin.startsWith('<')) {
			// Notetag case
			let nearest = null;
			let minDist = Infinity;
			$gameMap.events().forEach(event => {
				if (event.event().note.includes(origin)) {
					const dist = Math.sqrt(
						Math.pow(event.x - this._character.x, 2) +
						Math.pow(event.y - this._character.y, 2)
					);
					if (dist < minDist) {
						minDist = dist;
						nearest = event;
					}
				}
			});
			if (nearest) {
				this.x = nearest.screenX();
				this.y = nearest.screenY() - offsetDistance;
			}
		} else {
			// Check if it matches any event name
			const namedEvent = $gameMap.events().find(event => event.event().name === origin);
			if (namedEvent) {
				this.x = namedEvent.screenX();
				this.y = namedEvent.screenY() - offsetDistance;
			} else {
				switch (origin) {
					case "top-left":
						this.anchor.x = 0;
						this.anchor.y = 0;
						break;
					case "top":
						this.anchor.x = 0.5;
						this.anchor.y = 0;
						break;
					case "top-right":
						this.anchor.x = 1;
						this.anchor.y = 0;
						break;
					case "right":
						this.anchor.x = 1;
						this.anchor.y = 0.5;
						break;
					case "bottom-right":
						this.anchor.x = 1;
						this.anchor.y = 1;
						break;
					case "bottom":
						this.anchor.x = 0.5;
						this.anchor.y = 1;
						break;
					case "bottom-left":
						this.anchor.x = 0;
						this.anchor.y = 1;
						break;
					case "left":
						this.anchor.x = 0;
						this.anchor.y = 0.5;
						break;
					case "center":
					default:
						this.anchor.x = 0.5;
						this.anchor.y = 0.5;
						break;
				}
			}
		}
	} else {
		this.rotation = 0;
	}
};

if (DotMoveSystem) {
	Game_CharacterBase.prototype.collisionRect = function () {
		const width = this.width();
		const height = this.height();
		// Calculate offsets to center the collision box
		const offsetX = (width - 1) / 2;
		const offsetY = (height - 1) / 2;
		return new DotMoveSystem.DotMoveRectangle(
			this._realX - offsetX,
			this._realY - offsetY,
			width,
			height
		);
	};
}

//============================================================
// PLAYER MOVEMENT (BLOCK OR UNBLOCK)
//============================================================

let playerMovementDisabled = false;
const movementKeys = ["left", "up", "right", "down", "downLeft", "downRight", "upLeft", "upRight"];

const originalInput_isPressed = Input.isPressed;
Input.isPressed = function (keyName) {
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return originalInput_isPressed.call(this, keyName);
};

const originalInput_isRepeated = Input.isRepeated;
Input.isRepeated = function (keyName) {
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return originalInput_isRepeated.call(this, keyName);
};

const originalInput_isLongPressed = Input.isLongPressed;
Input.isLongPressed = function (keyName) {
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return originalInput_isLongPressed.call(this, keyName);
};

const originalInput__pollGamepads = Input._pollGamepads;
Input._pollGamepads = function () {
	if (playerMovementDisabled) return;
	originalInput__pollGamepads.call(this);
};

PluginManager.registerCommand(HpluginName, "ControlPlayerMovement", args => {
	playerMovementDisabled = !(args.allowMovement === 'true');
});

//============================================================
// PASSABLE TILES AND EVENTS
//============================================================

var passageCache = {};

// Generate a unique key for each tile
function generateCacheKey(x, y, bit) {
	return `${x},${y},${bit}`;
}

Game_Map.prototype.checkPassage = function (x, y, bit) {
	var cacheKey = generateCacheKey(x, y, bit);

	// Check if the result is already in the cache
	if (passageCache.hasOwnProperty(cacheKey)) {
		return passageCache[cacheKey];
	}

	var regionId = this.regionId(x, y);
	if (regionId === 250) {
		// Allow passage if the region ID is 250
		passageCache[cacheKey] = true;
		return true;
	}

	// Check for events with <pass> notetag
	var events = this.eventsXy(x, y);
	for (var i = 0; i < events.length; i++) {
		if (events[i].event().note.includes('<pass>')) {
			passageCache[cacheKey] = true;
			return true;
		}
	}

	var flags = this.tilesetFlags();
	var tiles = this.allTiles(x, y);
	for (var i = 0; i < tiles.length; i++) {
		var flag = flags[tiles[i]];
		if ((flag & 0x10) !== 0)  // [*] No effect on passage
			continue;
		if ((flag & bit) === bit) { // [x] Impassable
			passageCache[cacheKey] = false;
			return false;
		}
	}

	passageCache[cacheKey] = true;
	return true;
};

var _Game_Map_isPassable = Game_Map.prototype.isPassable;
Game_Map.prototype.isPassable = function (x, y, d) {
	var events = this.eventsXy(x, y);
	for (var i = 0; i < events.length; i++) {
		if (events[i].event().note.includes('<pass>')) {
			return true;
		}
	}
	return _Game_Map_isPassable.call(this, x, y, d);
};

// Clear cache manually
Game_Map.prototype.clearPassageCache = function () {
	passageCache = {};
};

//============================================================
// EVENT FRAME ANIMATION SPEED
//============================================================

const _Game_Event_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function () {
	_Game_Event_initMembers.call(this);
	this._frameASpeed = null;
	this._isPlayerChild = false;
	this._childOffsetX = 0;
	this._childOffsetY = 0;
};

Game_Event.prototype.setupFrameSpeed = function () {
	if (this.page()) {
		const frameSpeed = this.extractFrameSpeedFromComment();
		this._frameASpeed = frameSpeed !== null ? frameSpeed : null;
	}
};

Game_Event.prototype.extractFrameSpeedFromComment = function () {
	const list = this.list();
	for (const command of list) {
		if (command.code === 108 || command.code === 408) {
			const regex = /<stepping speed:\s*(\d+)>/i;
			const match = regex.exec(command.parameters[0]);
			if (match) {
				return parseInt(match[1]);
			}
		}
	}
	return null;
};

Game_Event.prototype.customAnimationWait = function () {
	if (this._frameASpeed !== null) {
		return this._frameASpeed;
	} else {
		return null;
	}
};

const _Sprite_Character_updatePattern = Sprite_Character.prototype.updatePattern;
Sprite_Character.prototype.updatePattern = function () {
	if (this._character instanceof Game_Event && this._character.customAnimationWait() !== null) {
		const frameSpeed = this._character.customAnimationWait();
		this._patternCounter = (this._patternCounter + 1) % frameSpeed;
		if (this._patternCounter === 0) {
			this._character.setPattern((this._character.pattern() + 1) % this._character.maxPattern());
		}
	} else {
		_Sprite_Character_updatePattern.call(this);
	}
};

const _Game_CharacterBase_animationWait = Game_CharacterBase.prototype.animationWait;
Game_CharacterBase.prototype.animationWait = function () {
	if (this instanceof Game_Event && this.customAnimationWait() !== null) {
		return this.customAnimationWait();
	} else {
		return _Game_CharacterBase_animationWait.call(this);
	}
};

//=============================================================================
// Clickable Events with Outline Effect
//=============================================================================

window._eventsWithOutline = new Map();

const _Sprite_Character_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function (character) {
	_Sprite_Character_initialize.call(this, character);
	this._outlineSprite = new Sprite();
	this._outlineSprite.visible = false;
	this._outlineSprite.alpha = 0.8;
	this.addChild(this._outlineSprite);
};

Sprite_Character.prototype.createEventOutline = function () {
	if (!this.bitmap?.isReady()) return;

	const pw = this.patternWidth();
	const ph = this.patternHeight();
	const sx = this.characterBlockX() + this.characterPatternX() * pw;
	const sy = this.characterBlockY() + this.characterPatternY() * ph;

	const thickness = 2;
	const padding = thickness * 2;
	const tempCanvas = document.createElement('canvas');
	const tempCtx = tempCanvas.getContext('2d');
	[tempCanvas.width, tempCanvas.height] = [pw + padding, ph + padding];

	tempCtx.drawImage(this.bitmap._canvas || this.bitmap._image,
		sx, sy, pw, ph,
		padding / 2, padding / 2, pw, ph);

	const pixels = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data;
	const outlineData = tempCtx.createImageData(tempCanvas.width, tempCanvas.height);

	for (let y = 0; y < tempCanvas.height; y++) {
		for (let x = 0; x < tempCanvas.width; x++) {
			const i = (y * tempCanvas.width + x) * 4;
			if (pixels[i + 3] < 128) {
				const hasNonTransparentNeighbor = Array.from({ length: thickness }, (_, d) => d + 1).some(d => {
					const positions = [
						[x + d, y], [x - d, y],
						[x, y + d], [x, y - d],
						[x + d, y + d], [x - d, y - d],
						[x + d, y - d], [x - d, y + d]
					];

					return positions.some(([checkX, checkY]) => {
						const validX = checkX >= 0 && checkX < tempCanvas.width;
						const validY = checkY >= 0 && checkY < tempCanvas.height;
						if (!validX || !validY) return false;
						const checkI = (checkY * tempCanvas.width + checkX) * 4;
						return pixels[checkI + 3] >= 128;
					});
				});

				if (hasNonTransparentNeighbor) {
					outlineData.data.set([255, 255, 0, 255], i);
				}
			}
		}
	}

	const outlineBitmap = new Bitmap(tempCanvas.width, tempCanvas.height);
	outlineBitmap.context.putImageData(outlineData, 0, 0);
	this._outlineSprite.bitmap = outlineBitmap;

	this._outlineSprite.anchor.x = this.anchor.x;
	this._outlineSprite.anchor.y = this.anchor.y;
	this._outlineSprite.x = 0;
	this._outlineSprite.y = 2;
	this._outlineSprite.scale.x = this.scale.x;
	this._outlineSprite.scale.y = this.scale.y;
};

Sprite_Character.prototype.updateEventOutline = function () {
	if (!(this._character instanceof Game_Event)) return;
	if (Graphics.frameCount % 4 !== 0) return;

	const shouldShow = this.shouldHaveEventOutline() && this.isEventHovered();

	if (shouldShow && (!this._outlineSprite.bitmap ||
		this._character._pattern !== this._lastOutlinePattern ||
		this._character._direction !== this._lastOutlineDirection)) {

		this.createEventOutline();
		this._lastOutlinePattern = this._character._pattern;
		this._lastOutlineDirection = this._character._direction;
	}

	this._outlineSprite.visible = shouldShow;
};

Sprite_Character.prototype.shouldHaveEventOutline = function () {
	if (!this._character?.event) return false;

	const eventId = this._character.eventId();
	const checkInRange = (id, range) => {
		if (range === Infinity) return true;
		const dx = Math.abs(this._character.x - $gamePlayer.x);
		const dy = Math.abs(this._character.y - $gamePlayer.y);
		return dx <= range && dy <= range;  // Square range
	};

	if (window._eventsWithOutline.has(eventId)) {
		return checkInRange(eventId, window._eventsWithOutline.get(eventId));
	}

	return false;
};

Sprite_Character.prototype.isEventHovered = function () {
	if (navigator.getGamepads && navigator.getGamepads()[0]) {
		const event = this._character;
		const range = window._eventsWithOutline.get(event._eventId) || 1;

		const dx = Math.abs(event.x - $gamePlayer.x);
		const dy = Math.abs(event.y - $gamePlayer.y);
		return dx <= range && dy <= range;
	}

	const screenX = this._character.screenX();
	const screenY = this._character.screenY();
	const hitbox = this._character.hitboxData();

	return TouchInput.x >= screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX &&
		TouchInput.x <= screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX + hitbox.width * $gameMap.tileWidth() &&
		TouchInput.y >= screenY - $gameMap.tileHeight() + hitbox.offsetY &&
		TouchInput.y <= screenY - $gameMap.tileHeight() + hitbox.offsetY + hitbox.height * $gameMap.tileHeight();
};

Game_Event.prototype.isBeingHovered = function () {
	const screenX = this.screenX();
	const screenY = this.screenY();
	const hitbox = this.hitboxData();

	const left = screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX;
	const top = screenY - $gameMap.tileHeight() + hitbox.offsetY;
	const right = left + hitbox.width * $gameMap.tileWidth();
	const bottom = top + hitbox.height * $gameMap.tileHeight();

	let range = 1;
	if (window._eventsWithOutline.has(this._eventId)) {
		range = window._eventsWithOutline.get(this._eventId);
	}
	const dx = Math.abs(this.x - $gamePlayer.x);
	const dy = Math.abs(this.y - $gamePlayer.y);
	const inRange = dx <= range && dy <= range;

	// Check if mouse is over hitbox
	const isOver = TouchInput.x >= left && TouchInput.x <= right &&
		TouchInput.y >= top && TouchInput.y <= bottom;

	return inRange && isOver;
};

Game_Event.prototype.setupClickable = function () {
	if (this.page()) {
		const clickableComment = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<clickable(?::\s*(\d+))?>/i)
		);

		if (clickableComment) {
			const match = clickableComment.parameters[0].match(/<clickable(?::\s*(\d+))?>/i);
			const range = match[1] ? Number(match[1]) : 1;
			window._eventsWithOutline.set(this._eventId, range);
		} else {
			window._eventsWithOutline.delete(this._eventId);
		}
	}
}

Scene_Map.prototype.checkClickableEvents = function () {
	if ($gameMap.isEventRunning()) {
		return;
	}
	$gameMap.events().forEach(event => {
		if (!event || !event.page()) return;

		const clickableComment = event.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<clickable(?::\s*(\d+))?>/i)
		);

		if (clickableComment) {
			event._isHovered = event.isBeingHovered();
			if (TouchInput.isTriggered() && event._isHovered) {
				event.start();
			}
		}
	});
};

const _Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function () {
	_Sprite_Character_update.call(this);
	this.updateEventOutline();
};

//============================================================
// PLATFORM
//============================================================

Game_Map.prototype._platformCache = null;
Game_Map.prototype._lastPlatformCacheFrame = 0;

const _Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function (sceneActive) {
	_Game_Map_update.call(this, sceneActive);
	this.updatePlatforms();
};

Game_Map.prototype.getPlatforms = function () {
	const currentFrame = Graphics.frameCount;
	if (!this._platformCache || currentFrame - this._lastPlatformCacheFrame >= 4) {
		this._platformCache = this.events().filter(event => {
			const note = event?.event().note;
			return note.includes('<platform');
		}).map(event => {
			const note = event.event().note;
			let size = 48;

			if (note.match(/<platform:\s*(\d+)>/i)) {
				size = parseInt(RegExp.$1);
			}

			event._platformSize = size;
			return event;
		});
		this._lastPlatformCacheFrame = currentFrame;
	}
	return this._platformCache;
};

Game_Map.prototype.getNearestPlatform = function (character) {
	const platforms = this.getPlatforms();
	if (platforms.length <= 0) return null;

	const distances = platforms.map(platform => {
		const deltaX = platform._realX - character._realX;
		const deltaY = platform._realY - character._realY;
		const platformRange = platform._platformSize / 48;
		const distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

		return {
			platform: platform,
			distance: distance,
			inRange: distance <= platformRange
		};
	});

	// Find the closest platform that's in range
	const inRange = distances.filter(d => d.inRange);
	if (inRange.length === 0) return null;

	return inRange.reduce((a, b) => a.distance < b.distance ? a : b).platform;
};

Game_Map.prototype.updatePlatforms = function () {
	const platforms = this.getPlatforms();

	platforms.forEach(platform => {
		if (!platform._lastX) {
			platform._lastX = platform._realX;
			platform._lastY = platform._realY;
			return;
		}

		const deltaX = platform._realX - platform._lastX;
		const deltaY = platform._realY - platform._lastY;

		if (deltaX !== 0 || deltaY !== 0) {
			const characters = [$gamePlayer, ...this.events()];

			characters.forEach(char => {
				if (char !== platform) {
					const nearestPlatform = this.getNearestPlatform(char);

					if (nearestPlatform === platform) {
						char._realX += deltaX;
						char._realY += deltaY;
						char._x = Math.round(char._realX);
						char._y = Math.round(char._realY);

						// Update camera if the player is moved
						if (char === $gamePlayer) {
							this._displayX += deltaX;
							this._displayY += deltaY;

							// Keep within bounds
							this._displayX = Math.max(0, Math.min(this._displayX, this.width() - this.screenTileX()));
							this._displayY = Math.max(0, Math.min(this._displayY, this.height() - this.screenTileY()));
						}
					}
				}
			});
		}

		platform._lastX = platform._realX;
		platform._lastY = platform._realY;
	});
};

window.onPlatform = function (identifier) {
	let character;
	if (identifier === 'player') {
		character = $gamePlayer;
	} else if (identifier === 'this') {
		const interpreter = $gameMap._interpreter;
		if (!interpreter) return false;
		character = $gameMap.event(interpreter._eventId);
	} else if (typeof identifier === 'string' && identifier.startsWith('<')) {
		let nearestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (event && event.event().note.includes(identifier)) {
				const distance = Math.abs(event.x - $gamePlayer.x) + Math.abs(event.y - $gamePlayer.y);
				if (distance < minDistance) {
					minDistance = distance;
					nearestEvent = event;
				}
			}
		});

		character = nearestEvent;
	} else {
		character = $gameMap.event(identifier);
	}

	if (!character) return false;

	const platforms = $gameMap.getPlatforms();

	for (const platform of platforms) {
		const deltaX = character._realX - platform._realX;
		const deltaY = character._realY - platform._realY;
		const platformRange = platform._platformSize / 48;

		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		if (distance <= platformRange) {
			return true;
		}
	}

	return false;
};

//============================================================
// JUMP
//============================================================

const H_Game_Player_screenY = Game_Player.prototype.screenY;
Game_Player.prototype.screenY = function () {
	return H_Game_Player_screenY.call(this) + this._jumpY;
};

const H_Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function (sceneActive) {
	H_Game_Player_update.call(this, sceneActive);
	this.updateJumpPhysics();
};

const H_Game_Player_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function () {
	H_Game_Player_initMembers.call(this);
	this._jumping = false;
	this._jumpVelocity = 0;
	this._jumpGravity = 0.4;
	this._jumpY = 0;
	this._maxJumpHeight = 0;
};

Game_Player.prototype.updateJumpPhysics = function () {
	if (!this._jumping) {
		this._jumpY = 0;
		return;
	}

	// Apply gravity to velocity
	this._jumpVelocity += this._jumpGravity;

	// Update position
	this._jumpY += this._jumpVelocity;

	// Check if at peak height to change sprite priority
	if (Math.abs(this._jumpY) > this._maxJumpHeight / 3) { // Smaller number = Change priority later
		this.setPriorityType(3);
	} else {
		this.setPriorityType(1);
	}

	// Check landing
	if (this._jumpY >= 0) {
		this._jumping = false;
		this._jumpY = 0;
		this._jumpVelocity = 0;
		this.setPriorityType(1);
	}
};

Game_Player.prototype.startJump = function (height, power) {
	if (this._jumping) return;

	this._jumping = true;
	this._maxJumpHeight = height;

	// Calculate initial velocity based on desired height and gravity
	this._jumpGravity = 0.4 * (power / 12); // Scale gravity based on power
	this._jumpVelocity = -Math.sqrt(2 * this._jumpGravity * height);
	this._jumpY = 0;
};

PluginManager.registerCommand(HpluginName, "PlayerJump", function (args) {
	const height = parseInt(args.height) || 30;
	const power = parseInt(args.power) || 12;

	if (!$gamePlayer._jumping) {
		$gamePlayer.startJump(height, power);
	}
});

let previousJumpState = false;

window.playerJumping = function () {
	return $gamePlayer._jumping;
};

window.playerStartedJump = function () {
	const currentlyJumping = window.playerJumping();
	const justStarted = currentlyJumping && !previousJumpState;
	previousJumpState = currentlyJumping;
	return justStarted;
};

window.playerLanded = function () {
	const currentlyJumping = window.playerJumping();
	const justLanded = !currentlyJumping && previousJumpState;
	previousJumpState = currentlyJumping;
	return justLanded;
};

//============================================================
// BACKEND MOVEMENT ROUTE COMMAND
//============================================================

const _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function (command) {
	if (command.code === Game_Character.ROUTE_SCRIPT) {
		const script = command.parameters[0];
		if (script.match(/^(selfSwitch|dash|turnToward|rotateTo|setMoveSpeed|jumpToNearby|teleportTo|moveToPosition|jumpTo|playFrames|toFrame|shareDirection|sucking|moveToClosest|moveToTarget)/)) {
			eval(`this.${script}`);
			return;
		}
	}
	_Game_Character_processMoveCommand.call(this, command);
};

//============================================================
// COMMANDS CHECK
//============================================================

window.gotHit = function (eventId) {
	const damages = CollisionManager.getAndClearDamage(eventId);
	return damages && damages.length > 0;
}

window.HP = function (eventId) {
	return $gameMap.getCurrentEventHp(eventId) || 0;
};

window.hpDecreased = function (eventId) {
	const currentHp = $gameMap.getCurrentEventHp(eventId);
	if (currentHp === null) {
		return false;
	}
	if (_lastHpDecreaseCheck[eventId] === undefined) {
		_lastHpDecreaseCheck[eventId] = currentHp;
		return false;
	}
	if (currentHp < _lastHpDecreaseCheck[eventId]) {
		_lastHpDecreaseCheck[eventId] = currentHp;
		return true;
	}
	if (currentHp > _lastHpDecreaseCheck[eventId]) {
		_lastHpDecreaseCheck[eventId] = currentHp;
	}
	return false;
};

// Get damage from event just collided with notetag <dmg: x>. eventId should be this._eventId
window.damage = function (eventId) {
	return CollisionManager.getAllDamage(eventId)[CollisionManager.getAllDamage(eventId).length - 1] || 0;
};

// To Check Collision
window.checkCollide = function (targetId, tags, collisionCooldownInFrames = 0, collisionRange = 8) {
	return $gameMap.taggedEventIsCollidingWithTargetEvent(targetId, tags, collisionCooldownInFrames, collisionRange);
};

// To Check Range: checkRange(this/player, range, target, (optional: only detect in eyes direction?, if the target has this notetag then ignore it))
window.checkRange = function (source, range, target, eyes = false, exception = null) {
	return $gameSystem.checkInRange(source, range, target, eyes, exception);
};

// ========================================================================
// WEAPON CHECKS
// ========================================================================
const getSlotIndex = (slot = 1) => {
	if (slot === 2) return 1;
	return 0;
};

window.equippedWeapon = function (search, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return false;
	return !isNaN(search) ? weapon.id === Number(search) : weapon.name === search;
};

window.equippedWeaponDmg = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	return weapon ? weapon.params[2] : null;
};

window.equippedWeaponType = function (search, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return false;

	const wtypeId = weapon.wtypeId;
	if (!isNaN(search)) {
		return wtypeId === Number(search);
	}
	// Get weapon type name from database
	const weaponTypes = $dataSystem.weaponTypes;
	return weaponTypes[wtypeId] === search;
};

window.equippedWeaponNotetag = function (notetag, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return null;

	const regex = new RegExp(`<${notetag}:\\s*(.+?)\\s*>`, 'i');
	const match = weapon.note.match(regex);

	if (match) {
		const value = match[1];
		return isNaN(value) ? value : Number(value);
	}
	return null;
};

window.equippedWeaponParam = function (param, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return null;

	const paramMap = {
		'mhp': 0, 'hp': 0, 'maxhp': 0,
		'mmp': 1, 'mp': 1, 'maxmp': 1,
		'atk': 2, 'attack': 2,
		'def': 3, 'defense': 3,
		'mat': 4, 'matk': 4, 'magic': 4,
		'mdf': 5, 'mdef': 5,
		'agi': 6, 'spd': 6, 'speed': 6,
		'luk': 7, 'luck': 7
	};

	const paramIndex = paramMap[param.toLowerCase()];
	return paramIndex !== undefined ? weapon.params[paramIndex] : null;
};

window.equippedShield = function() {
    const shield = $gameParty.leader().equips()[1];
    if (!shield) return false;
    return shield.etypeId === 2;
};
// ========================================================================

window.amount = function (type, identifier) {
	if (!['item', 'weapon', 'armor'].includes(type)) return 0;

	let item;
	if (typeof identifier === 'number') {
		// Search by ID
		switch (type) {
			case 'item':
				item = $dataItems[identifier];
				break;
			case 'weapon':
				item = $dataWeapons[identifier];
				break;
			case 'armor':
				item = $dataArmors[identifier];
				break;
		}
	} else {
		// Search by name
		const database = type === 'item' ? $dataItems :
			type === 'weapon' ? $dataWeapons : $dataArmors;

		item = Object.values(database).find(i => i && i.name === identifier);
	}

	return item ? $gameParty.numItems(item) : 0;
};


window.notetag = function (eventIdOrTag, notetagParam) {
	// Case 1: Searching for a notetag in any event
	if (typeof eventIdOrTag === 'string' && notetagParam === undefined) {
		let searchTag = eventIdOrTag;
		if (!searchTag.startsWith('<')) searchTag = '<' + searchTag;
		if (!searchTag.endsWith('>')) searchTag = searchTag + '>';

		const events = $gameMap.events();
		for (const event of events) {
			if (event && event.event() && event.event().note.includes(searchTag)) {
				return true;
			}
		}
		return false;
	}

	// Case 2: If positions overlap (both parameters are notetags)
	if (typeof eventIdOrTag === 'string' && typeof notetagParam === 'string') {
		let searchTag = eventIdOrTag;
		let targetTag = notetagParam;

		if (notetagParam === 'player') {
			// Check for events with searchTag at player's position
			if (!searchTag.startsWith('<')) searchTag = '<' + searchTag;
			if (!searchTag.endsWith('>')) searchTag = searchTag + '>';

			const eventsAtPosition = $gameMap.eventsXy($gamePlayer.x, $gamePlayer.y);
			return eventsAtPosition.some(event =>
				event && event.event() && event.event().note.includes(searchTag)
			);
		}

		if (!searchTag.startsWith('<')) searchTag = '<' + searchTag;
		if (!searchTag.endsWith('>')) searchTag = searchTag + '>';
		if (!targetTag.startsWith('<')) targetTag = '<' + targetTag;
		if (!targetTag.endsWith('>')) targetTag = targetTag + '>';

		const targetEvents = $gameMap.events().filter(event =>
			event && event.event() && event.event().note.includes(targetTag)
		);

		return targetEvents.some(targetEvent => {
			const eventsAtPosition = $gameMap.eventsXy(targetEvent.x, targetEvent.y);
			return eventsAtPosition.some(event =>
				event !== targetEvent &&
				event && event.event() &&
				event.event().note.includes(searchTag)
			);
		});
	}

	// Case 3: If there's an event with notetag at eventId's position
	if (typeof eventIdOrTag === 'string' && (typeof notetagParam === 'number' || notetagParam === 'player')) {
		let searchTag = eventIdOrTag;
		let x, y;

		if (notetagParam === 'player') {
			x = $gamePlayer.x;
			y = $gamePlayer.y;
		} else {
			const targetEvent = $gameMap.event(notetagParam);
			if (!targetEvent) return false;
			x = targetEvent.x;
			y = targetEvent.y;
		}

		if (!searchTag.startsWith('<')) searchTag = '<' + searchTag;
		if (!searchTag.endsWith('>')) searchTag = searchTag + '>';

		const eventsAtPosition = $gameMap.eventsXy(x, y);
		return eventsAtPosition.some(event =>
			event && event.event() && event.event().note.includes(searchTag)
		);
	}

	// Case 4: If map has an event with notetag
	const event = $gameMap.event(eventIdOrTag);
	if (!event || !event.event()) return false;

	if (!notetagParam.startsWith('<')) notetagParam = '<' + notetagParam;
	if (!notetagParam.endsWith('>')) notetagParam = notetagParam + '>';

	return event.event().note.includes(notetagParam);
};

// To use Control Self Switch feature using a script call
window.setSelfSwitchComment = function (state, comment, eventId) {
	eventId = eventId === 0 ? $gameMap.events()[$gameTemp.getLastPluginCommandInterpreter().eventId()] : eventId;
	processSelSwitch(state, comment, eventId);
};

//setSelfSwitch(this._eventId, 'I', true);
window.setSelfSwitch = function (eventId, letter, value) {
	const actualEventId = eventId === 'this' ? this._eventId : eventId;

	if (['A', 'B', 'C', 'D'].includes(letter)) {
		$gameSelfSwitches.setValue([$gameMap.mapId(), actualEventId, letter], value);
	} else {
		// Get the switch ID from database that matches "self switch X"
		const switchId = $dataSystem.switches.findIndex(name =>
			name?.toLowerCase() === `self switch ${letter.toLowerCase()}`
		);

		if (switchId > 0) {
			$gameSelfSwitches.setValue([$gameMap.mapId(), actualEventId, `SW_${switchId}`], value);
		}
	}
};

window.sucking = function (eventId, type, range = 15, speed = 5.4) {
	$gameMap.event(eventId).sucking(type, range, speed);
};

window.checkGamepad = function () {
	return navigator.getGamepads && navigator.getGamepads()[0] !== null;
};

window.checkGamepadInput = function () {
	const gamepad = navigator.getGamepads()[0];
	if (gamepad && gamepad.connected) {
		const rightX = gamepad.axes[2];
		const rightY = gamepad.axes[3];
		if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
			return { x: rightX, y: rightY };
		}
	}
	return null;
};

window.isRightStickPushed = function () {
	const gamepad = navigator.getGamepads()[0];
	if (gamepad && gamepad.connected) {
		const rightX = gamepad.axes[2];
		const rightY = gamepad.axes[3];
		return Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1;
	}
	return false;
};

Game_CharacterBase.prototype.selfSwitch = function (letter, value) {
	const mapId = $gameMap.mapId();
	const eventId = this._eventId;
	const key = [mapId, eventId, letter.toUpperCase()];
	$gameSelfSwitches.setValue(key, value);
};

window.inViewport = function (eventId, pixelRange = 5) {
	const event = $gameMap.event(eventId);
	if (!event) return false;

	const screenX = Math.round(event.screenX());
	const screenY = Math.round(event.screenY());

	// Get viewport bounds with buffer
	return screenX >= -pixelRange &&
		screenY >= -pixelRange &&
		screenX <= Graphics.width + pixelRange &&
		screenY <= Graphics.height + pixelRange;
};

window.checkLevelUp = function () {
	const leader = $gameParty.leader();
	if (!leader) return false;

	if (_lastLeaderLevel === null) {
		_lastLeaderLevel = leader.level;
		return false;
	}

	if (leader.level > _lastLeaderLevel) {
		_lastLeaderLevel = leader.level;
		return true;
	}

	_lastLeaderLevel = leader.level;
	return false;
};

window.partyLeader = function (identifier) {
	if (typeof identifier === 'number') {
		return $gameActors.actor(identifier);
	}
	return $gameActors._data.find(actor => actor && actor._name === identifier) || null;
};