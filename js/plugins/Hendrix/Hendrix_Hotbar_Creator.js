/*:
 * @target MV MZ
 * @plugindesc A complete package to create Hotbar and Game UI with unlimited slots on the screen.
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io/
 * 
 * @help
 * Version 1.2.2
 * ----------------------------------------------------------------------------
 * This plugin for RPG Maker MV/MZ lets you create an unlimited amount of Hotbar
 * on the screen. Best used for action games or farming, simulation games.
 * With creativity, you can build a lot more with this plugin.
 * ----------------------------------------------------------------------------
 * FEATURES
 * - Easily create a hotbar with unlimited slots onto the screen
 * - Adjust hotbar layout in real time via Mouse Click
 * - The player can equip weapons, items, and skills into any slots
 * - Fully support keyboard, gamepad & mobile touch screen (mobile still in beta)
 * - Eventing extended: Plenty of conditional branches for you to access the slots,
 *   including but not limited to: Check if the slot has a weapon, an item, a skill.
 *   Check if the slot has a weapon named x, a skill named y, or an item named z.
 *   Check if a slot is occupied or a slot is on cooldown, etc
 * - Plugin commands to: flash a white effect to a slot,  set a cooldown for a slot
 * - Highly customizable: Custom images for item/weapon/skill, font setting,
 *   additional text to display on slots, position of each slot, etc
 * - A lot more to be added!
 * - And an awesome dev who will support you 24/7
 * ----------------------------------------------------------------------------
 * CHANGELOG
 * [1.2.2] - New feature: A notetag for database that disallow 
 *           an item/weapon/skill to be equipped to any slot
 *         - Adjustment: Allow skills to be equipped regardless of MP cost
 *         - Adjustment: Remove the autoscale and dmargin feature of custom
 *           images when you use <slot image: x>. Now the image will display
 *           as is. This way you can modify your image file size manually,
 *           which will be more accurate
 * [1.2.1] - Fixed a bug where playing new game still show equipped skill from
 *           previous session
 *         - Fixed a bug when use together with Hendrix Grid Inventory
 * [1.2.0] - New feature: Adjust Hotbar position in-game with button W on keyboard (pagedown)
 * [1.1.3] - Bug fix: Now only buttons assigned via param Button will map to
 *           keyboard and gamepad
 * [1.1.2] - Bug fix: A bug relate to mapping buttons
 * [1.1.1] - Adjustment: To consuming item. Now it should work also call common
 *           event id if you assign it to the item via Database
 * [1.1.0] - The plugin is now compatible with MV
 *         - Adjustment: Make all Hotbar data to be saved in save files
 *         - New plugin command: Start Cooldow to Thing
 * [1.0.1] - Make the plugin compatible with Hendrix Keyboard Gamepad plugin
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * 
 * 1. Open UI Setups > Create a Hotbar > Create Slots
 * Each hotbar can content unlimited amount of slots
 * Usage: A hotbar for item slots, a hotbar for skill slot, a hotbar for weapon slot,
 * it's up to your creatitivy.
 * 2. In-game, press P and start dragging the slots if you want to modify the layout.
 * 3. Check demo if you're not ready to read
 * 
 * ■■ SLOTS PARAMETER EXPLAINATION ■■
 * 
 * - Slot Name:         The name of the slot. When equipping an item or a skill, it'll
 *                      display a list of slot and this name will appear on the list
 * - Button Text:       A text to display on the slot, can be a keyboard/gamepad button
 * - Special Behavior:  
 *   + Display Equipped Weapon: This slot will automatically display equipped weapon
 *   + Display Equipped Shield: Same but for shield
 *   + Item Slot Only: This slot will only avaiable for Items
 *   + Skill Slot Only: Same but for Skills
 * 
 *   + Example:  Slot Name: Slot Q, Slot RB (keyboard, gamepad)
 *               Button Text: Q, RB (keyboard, gamepad)
 *               Special Behavior: none
 *            -> When gamepad is connected, Slot Name will automatically change to Slot RB
 *               and the same goes for Button Text.
 *            -> You can leave the second part (after comma) empty to not use gamepad
 * 
 * ■■ ITEM/WEAPON/SKILL/ARMOR NOTETAG ■■
 * 
 * <slot text: x, (optional: offset x, y)>   # Display a text on a slot that contains this item
 * <slot image: x>                           # Use custom image from folder pictures/slotUI
 * <slot cooldown: seconds, show number?>    # Set cooldown for this item
 * <slot disallow>                           # Disallow the item to be equipped to any slot
 * 
 * Example: <slot text: haha> or <slot text: haha, 0, -30>
 *          <slot image: Potion>
 *          <slot cooldown: 5> or <slot cooldown: 5, false> (not showing countdown)
 * 
 * ■■ GENERAL CONDITIONAL BRANCHES ■■
 * 
 * Slot Name for conditional branches only count the first word.
 * Example: If your Slot Name is 'Slot Q, Slot RB' -> 'slot name' is 'Slot Q'
 * 
 * ■ isSlot('slot name', 'something')       # Check if the slot has anything with said name
 *                                          # 'something' can also be a property like mpCost
 *                                            to return the mpCost of whatever is in the slot
 * ■ isSlotType('slot name', 'type')        # Check if the slot has something with said type
 *                                          # 'type' is the name of type of weapon/skill/element
 * ■ isSlotEmpty('slot name')               # Check if a slot is empty
 * ■ isSlotOnCooldown('slot name')          # Check if a slot is on cooldown
 * ■ isThingOnCooldown('name')              # Check if anything with said name is on cooldown
 * 
 * Example 1: slot('Slot Q', 'Fireball') 
 * Example 2: slot('Slot Q', 'mpCost') 
 * Example 3: slotType('Slot Q', 'Dagger')
 * 
 * ■■ CONDITIONAL BRANCHES FOR GAMEPAD & MOBILE ■■
 * 
 * ■ isGamepad()                            # Check if gamepad is connected
 * ■ isSelectedSlot('name')                 # Check if selected slot has anything with said name
 * ■ isSelectedSlotOnCooldown()             # Check if selected slot is on cooldown
 * ■ isSelectedSlotEmpty()                  # Check if selected slot is empty
 * ■ isGamepadTriggered('gamepad button')   # Check if a gamepad button is being triggered
 * ■ isGamepadPressed('a gamepad button')   # Check if a gamepad button is being pressed
 * 
 * ----------------------------------------------------------------------------
 * ■■ MV PLUGIN COMMANDS ■■
 * 
 * GENERAL
 * StartCooldownForThing [Thing Name] duration showTimer
 *                                               # Start cooldown for anything with said name
 * StartCooldown [slotName] seconds true/false   # Start cooldown on slot (true = show countdown)
 * FlashSlot [slotName]                          # Flash the specified slot
 * SetToSlot [slotName] skillId itemId weaponId  # Set skill/item/weapon to slot
 * RemoveFromSlot [slotName]                     # Remove anything from the slot
 * UseSlot [slotName]                            # Use whatever is in the slot
 * 
 * GAMEPAD
 * 
 * UseSelectedSlot                               # Use selected gamepad slot
 * FlashSelectedSlot                             # Flash the selected gamepad slot
 * StartCooldownSelectedSlot seconds show        # Start cooldown on selected slot
 * PushNextStuff [slotName] type                 # Push next available item of type
 * GamepadPushNextStuff type                     # Push next item to selected slot
 *
 * Type can be: Weapon, Shield, Item, or Skill
 * Examples: FlashSlot [Slot Q]
 *           StartCooldown [Slot Q] 5 true
 *           SetToSlot [Slot Q] 1 0 0
 *           PushNextStuff [Slot Q] Weapon
 * 
 * ----------------------------------------------------------------------------
 * TERMS OF USE
 * Accquiring this plugin legally grants you the permission to use this plugin
 * in both free and commercial projects without giving credit.
 * ----------------------------------------------------------------------------
 * For support or feature requests, please reach out:
 * X: https://x.com/sanghendrix96
 * Discord: https://discord.gg/YKPscqHV8b
 * Patreon: https://www.patreon.com/SangHendrix
 * ----------------------------------------------------------------------------
 * @command aa
 * @text ---------------------------------
 * 
 * @command ---c
 * @text ■ GENERAL USES
 * 
 * @command aaa
 * @text ---------------------------------
 * 
 * @command UseSelectedSlot
 * @text Gamepad  | Use Selected Slot
 * @desc Uses whatever item or skill is equipped in the currently selected slot
 * 
 * @command UseSlot
 * @text Keyboard | Use a Slot
 * @desc Uses whatever item or skill is equipped in the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to use
 * 
 * @command StartCooldownForThing
 * @text Set Cooldown for Thing
 * @desc Start cooldown for anything with the specified name (item/skill/weapon/armor)
 * 
 * @arg Name
 * @type text
 * @text Thing Name
 * @desc Name of the item/skill/weapon/armor to apply cooldown to
 * 
 * @arg Time
 * @type text
 * @text Duration (seconds)
 * @desc Cooldowm time in seconds. Write  notetag  to use from item notetag
 * @default 5
 * 
 * @arg ShowTimer
 * @type boolean
 * @text Show Timer
 * @desc Show countdown
 * @default true
 * 
 * @command aax
 * @text ---------------------------------
 * 
 * @command ---v
 * @text ■ ONLY FOR MANUAL USES
 * 
 * @command aaax
 * @text ---------------------------------
 * 
 * @command SetSkill
 * @text Push to Slot
 * @desc Put something to a slot. Can be an item, a weapon or a skill.
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to set
 * 
 * @arg skillId
 * @type skill
 * @text Skill
 * @desc The skill to set in this slot
 * @default 0
 * 
 * @arg itemId
 * @type item
 * @text Item
 * @desc The item to set in this slot
 * @default 0
 * 
 * @arg weaponId
 * @type weapon
 * @text Weapon
 * @desc The weapon to set in this slot
 * @default 0
 * 
 * @command RemoveFromSlot
 * @text Remove from Slot
 * @desc Removes whatever is in the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to clear
 * 
 * @command FlashSlot
 * @text Keyboard |  Flash a Slot
 * @desc Makes the icon/image in the specified slot flash white for a brief moment.
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to flash
 * 
 * @command StartCooldown
 * @text Keyboard |  Start Cooldown on a Slot
 * @desc Starts a cooldown effect on a slot with grayscale and filling animation.
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to apply cooldown
 * 
 * @arg Seconds
 * @type number
 * @min 1
 * @text Duration (seconds)
 * @desc How long the cooldown lasts in seconds
 * @default 5
 * 
 * @arg ShowTimer
 * @type boolean
 * @text Show Timer
 * @desc Show remaining time on the slot
 * @default false
 * 
 * @command PushNextStuff
 * @text Keyboard |  Push Next Available Item
 * @desc Pushes the next available weapon/shield/item/skill to the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to push to
 * 
 * @arg Type
 * @type select
 * @option Weapon
 * @option Shield
 * @option Item
 * @option Skill
 * @text Item Type
 * @desc Type of item to push to the slot
 * 
 * @command FlashSelectedSlot
 * @text Gamepad  |  Flash Selected Slot
 * @desc Makes the icon/image in the selected slot flash white for a brief moment.
 * 
 * @command StartCooldownSelectedSlot
 * @text Gamepad  |  Start Cooldown at Selected Slot
 * @desc Starts a cooldown effect on the selected slot.
 * 
 * @arg Seconds
 * @type number
 * @min 1
 * @text Duration (seconds)
 * @desc How long the cooldown lasts in seconds
 * @default 5
 * 
 * @arg ShowTimer
 * @type boolean
 * @text Show Timer
 * @desc Show remaining time on the slot
 * @default false
 * 
 * @command GamepadPushNextStuff
 * @text Gamepad  |  Push Next Available Item
 * @desc Pushes the next available weapon/shield/item/skill to the currently selected slot
 * 
 * @arg Type
 * @type select
 * @option Weapon
 * @option Shield
 * @option Item
 * @option Skill
 * @text Item Type
 * @desc Type of item to push to the selected slot
 * 
 * 
 * 
 * @param 5cc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wcc
 * @text ■ SLOT SETTINGS
 * 
 * @param 6cc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param SlotSetups
 * @text Hotbar Setups
 * @type struct<GridConfig>[]
 * @desc Create multiple grid layouts that contents slots
 * 
 * @param GamepadCursorImage
 * @text Gamepad Cursor Image
 * @type file
 * @dir img/system
 * @desc Image to use as cursor when using gamepad
 * @default
 * 
 * @param EmptySlotIcon
 * @text Empty Slot Icon
 * @type icon
 * @desc The icon for unoccupied slot in window slot selection.
 * @default 16
 * 
 * @param 1z
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1
 * @text ■ VISIBILITY SETTINGS
 * 
 * @param 2zz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param VisibilitySwitch
 * @text UI Visibility Switch
 * @type switch
 * @desc If ON, UI will be visible. If OFF, UI will be hidden. 0 to always ON.
 * @default 0
 * 
 * @param HideUIduringMessage
 * @text Hide UI during Message
 * @type boolean
 * @desc If true, UI will fade out when a message window is open
 * @default true
 * 
 * @param 3z
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wz
 * @text ■ TEXT ON SLOT
 * 
 * @param 4zz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param ShowItemQuantity
 * @text Show Item Quantity
 * @type boolean
 * @desc Shows the quantity of items in slots
 * @default true
 * 
 * @param QuantityTextOffsetY
 * @text Quantity Text Offset Y
 * @type number
 * @min -1000
 * @desc Vertical offset for the quantity text
 * @default 0
 * 
 * @param 3zxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wzcv
 * @text ■ WINDOW SELECTION
 * 
 * @param 4zzdd
 * @text --------------------------
 * @default --------------------------
 * 
 * @param WindowSelectionSize
 * @text Window Size
 * @type string
 * @desc Format: Width, number of commands show by default. This window will show when you assign item/skill to hotbar.
 * @default 400, 8
 * 
 * @param 7xczz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wx
 * @text ■ FONT SETTINGS
 * 
 * @param 8xczz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param FontSettings
 * @text Font Settings
 * @type struct<FontSettings>
 * @desc Font settings for UI text
 * 
 */

/*~struct~GridConfig:
 * @param RowColumn
 * @text Row & Column
 * @type text
 * @desc Format: x, y -> Row, Column. Only x -> Same number for all
 * @default 1, 1
 * 
 * @param Padding
 * @type number
 * @min 0
 * @desc Padding between slots
 * @default 4
 * 
 * @param Position
 * @type text
 * @desc X,Y position of the grid on screen (format: x, y)
 * @default Graphics.boxWidth / 2, Graphics.boxHeight - 80
 * 
 * @param BackgroundImage
 * @text Background
 * @type file
 * @dir img/system
 * @desc Background image for this hotbar
 * 
 * @param Slots
 * @text Slots Setup
 * @type struct<SlotConfig>[]
 * @desc Slots in this hotbar
 * 
 * @param ControllableViaGamepad
 * @text Gamepad Controllable
 * @type boolean
 * @desc Enable gamepad cursor control for this hotbar. Only one hotbar can be controlled.
 * @default false
 */

/*~struct~SlotConfig:
 * @param Name
 * @text Slot Name
 * @type text
 * @desc (format: keyboard, gamepad). You only need to do conditional branch for keyboard.
 * @default keyboard name, gamepad name
 * 
 * @param BackgroundImage
 * @text Background
 * @type file
 * @dir img/system
 * @desc Background image for this slot
 * 
 * @param Button
 * @text Button
 * @type text
 * @desc Mapping a button to this slot (format: keyboard, gamepad). gamepad not required.
 * @default Q, RB
 * 
 * @param TextOffsetY
 * @text Button Text Offset Y
 * @type number
 * @min -1000
 * @desc Vertical offset for the button text
 * @default 0
 * 
 * @param SpecialBehavior
 * @text Special Behavior
 * @type select
 * @option None
 * @value none
 * @option Display Equipped Weapon
 * @value display_weapon
 * @option Display Equipped Shield
 * @value display_shield
 * @option Item Slot Only
 * @value item_only
 * @option Skill Slot Only
 * @value skill_only
 * @desc Special behavior for this slot
 * @default none
 */

/*~struct~FontSettings:
 * @param FontFile
 * @text Font File
 * @type string
 * @desc Custom font file (.ttf, .otf) from fonts folder. Leave blank to use default.
 * @default
 * 
 * @param FontSize
 * @text Font Size
 * @type number
 * @desc Font size for UI text. Leave at 0 to use default game setting.
 * @default
 * 
 * @param FontColor
 * @text Font Color
 * @type text
 * @desc Hex color code for text (e.g., #ffffff). Leave blank to use default.
 * @default 
 * 
 * @param OutlineColor
 * @text Font Outline Color
 * @type text
 * @desc Hex color code for text outline (e.g., #000000). Leave blank to use default.
 * @default 
 * 
 * @param TextShadow
 * @text Use Text Shadow
 * @type boolean
 * @desc Use text shadow instead of outline
 * @default false
*/

/*~struct~AdditionalTextDisplay:
 * @param TextToDisplay
 * @text Text to Display
 * @type text
 * @desc Expression to evaluate for text display. Example: $gameVariables.value(1) or 'hello'
 * @default
 * 
 * @param SlotName
 * @text Display at
 * @type text
 * @desc Display at a slot name
 * @default
 * 
 * @param Offset
 * @text Position Offset
 * @type text
 * @desc X,Y offset from default position (format: x, y)
 * @default 0, 0
 * 
 * @param Condition
 * @text Display Condition
 * @type text
 * @desc Condition that must be met to show text. Leave blank to always show.
 * @default
 */

var Imported = Imported || {};
Imported.Hendrix_Hotbar_Creator = true;

(() => {
    const pluginName = "Hendrix_Hotbar_Creator";
    const parameters = PluginManager.parameters(pluginName);
    const visibilitySwitchId = Number(parameters.VisibilitySwitch || 0);
    const hideUIduringMessage = parameters.HideUIduringMessage === 'true';
    const showItemQuantity = parameters.ShowItemQuantity === 'true';
    const quantityTextOffsetY = Number(parameters.QuantityTextOffsetY || 0);
    const gamepadCursorImage = parameters.GamepadCursorImage;
    const emptySlotIcon = Number(parameters.EmptySlotIcon || 0);
    const windowSizeStr = parameters.WindowSelectionSize || '400, 500';
    const [windowWidth, visibleCommands] = windowSizeStr.split(',').map(s => Number(s.trim()));

    const gridSettings = JSON.parse(parameters.SlotSetups || '[]').map(grid => {
        const gridData = JSON.parse(grid);
        gridData.Slots = JSON.parse(gridData.Slots || '[]').map(slot => JSON.parse(slot));
        return gridData;
    });

    const additionalTextDisplays = JSON.parse(parameters.AdditionalTextDisplays || '[]').map(display => {
        const parsed = JSON.parse(display);
        const offset = (parsed.Offset || '0, 0').split(',').map(v => Number(v.trim()));
        return {
            textToDisplay: parsed.TextToDisplay,
            slotName: parsed.SlotName,
            offsetX: offset[0],
            offsetY: offset[1],
            condition: parsed.Condition
        };
    });

    const fontSettings = parameters.FontSettings ? JSON.parse(parameters.FontSettings) : {};
    const fontSize = Number(fontSettings.FontSize || 0);
    const fontColor = fontSettings.FontColor || '';
    const outlineColor = fontSettings.OutlineColor || '';
    const useTextShadow = fontSettings.TextShadow === 'true';
    let isHotbarInitializing = false;
    const fs = require('fs');
    const path = require('path');

    function readUIPositions() {
        const filePath = path.join(process.mainModule.filename, '..', 'data', 'uiPosition.json');
        if (fs.existsSync(filePath)) {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                return JSON.parse(data);
            } catch (e) {
                console.error('Error reading uiPosition.json:', e);
                return {};
            }
        }
        return {};
    }

    function saveUIPositions(positions) {
        const filePath = path.join(process.mainModule.filename, '..', 'data', 'uiPosition.json');
        try {
            fs.writeFileSync(filePath, JSON.stringify(positions, null, 2));
        } catch (e) {
            console.error('Error saving uiPosition.json:', e);
        }
    }

    // Store positions globally
    window.$uiPositions = readUIPositions();

    function isItemDisallowed(item) {
        if (!item || !item.note) return false;
        return item.note.includes('<slot disallow>');
    }

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

    const customFontFace = loadCustomFont(fontSettings.FontFile);

    const applyFontSettings = (bitmap) => {
        if (fontSize > 0) bitmap.fontSize = fontSize;
        if (Utils.RPGMAKER_NAME === "MV") {
            bitmap.fontFace = customFontFace || 'GameFont';
        } else {
            bitmap.fontFace = customFontFace || $gameSystem.mainFontFace();
        }
        bitmap.smooth = false;
        if (fontColor) {
            bitmap.textColor = fontColor;
        } else {
            if (Utils.RPGMAKER_NAME === "MV") {
                bitmap.textColor = '#ffffff';
            } else {
                bitmap.textColor = ColorManager.normalColor();
            }
        }
        if (useTextShadow) {
            bitmap.outlineWidth = 0;
            bitmap._drawTextShadow = true;
        } else {
            bitmap._drawTextShadow = false;
            bitmap.outlineWidth = 4;
            if (outlineColor) {
                bitmap.outlineColor = outlineColor;
            } else {
                bitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';
            }
        }
    };

    if (!Imported.Hendrix_Keyboard_Gamepad) {
        window.GamepadButtons = {
            'A': 0,
            'B': 1,
            'X': 2,
            'Y': 3,
            'LB': 4,
            'RB': 5,
            'LT': 6,
            'RT': 7,
            'Back': 8,
            'Start': 9,
            'LS-Press': 10,
            'RS-Press': 11
        };
    }

    const charToKeyCode = {
        'backspace': 8, 'tab': 9, 'enter': 13, 'shift': 16, 'ctrl': 17, 'alt': 18,
        'esc': 27, 'space': 32, 'pageup': 33, 'pagedown': 34, 'end': 35, 'home': 36,
        'left': 37, 'up': 38, 'right': 39, 'down': 40, 'insert': 45, 'delete': 46,
        '0': 48, '1': 49, '2': 50, '3': 51, '4': 52, '5': 53, '6': 54, '7': 55, '8': 56, '9': 57,
        'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70, 'g': 71, 'h': 72,
        'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79, 'p': 80,
        'q': 81, 'r': 82, 's': 83, 't': 84, 'u': 85, 'v': 86, 'w': 87, 'x': 88,
        'y': 89, 'z': 90
    };

    const initializeKeyMapping = function () {
        if (Imported.Hendrix_Keyboard_Gamepad) {
            return;
        }

        Input.gamepadMapper = {
            ...Input.gamepadMapper,
            12: 'up',
            13: 'down',
            14: 'left',
            15: 'right'
        };

        const mappedKeys = new Set();

        // Only map keys and gamepad buttons that are actually used in slots
        gridSettings.forEach(grid => {
            grid.Slots.forEach(slot => {
                const slotConfig = JSON.parse(slot);
                if (slotConfig.Button) {
                    const [keyboardBtn, gamepadBtn] = slotConfig.Button.split(',').map(b => b.trim());

                    if (keyboardBtn) {
                        const keyboardBtnLower = keyboardBtn.toLowerCase();
                        if (charToKeyCode.hasOwnProperty(keyboardBtnLower)) {
                            const keyCode = charToKeyCode[keyboardBtnLower];
                            if (!mappedKeys.has(keyCode)) {
                                Input.keyMapper[keyCode] = keyboardBtnLower;
                                mappedKeys.add(keyCode);
                            }
                        }
                    }

                    if (gamepadBtn && GamepadButtons.hasOwnProperty(gamepadBtn)) {
                        const buttonCode = GamepadButtons[gamepadBtn];
                        Input.gamepadMapper[buttonCode] = keyboardBtn.toLowerCase();
                    }
                }
            });
        });
    };

    function extractCooldown(notes) {
        const match = /<slot cooldown:\s*(\d+)(?:\s*,\s*(true|false))?\s*>/i.exec(notes);
        if (!match) return { duration: 0, showTimer: true };

        const duration = parseInt(match[1]);
        const showTimer = match[2] ? match[2].toLowerCase() === 'true' : true;

        return { duration, showTimer };
    }

    function getGlobalCooldownKey(type, id) {
        return `${type}_${id}`;
    }

    function isOnGlobalCooldown(type, id) {
        const key = getGlobalCooldownKey(type, id);
        const remainingFrames = _globalCooldowns.get(key);
        return remainingFrames && remainingFrames > 0;
    }

    function setGlobalCooldown(type, id, duration, showTimer) {
        const key = getGlobalCooldownKey(type, id);
        const frames = Math.floor(duration * 60);
        _globalCooldowns.set(key, frames);

        // Find all slots with this item/skill/weapon and start their cooldown
        ALL_AVAILABLE_SLOTS.forEach(slotData => {
            const slot = slotData.slot;
            const data = _slotData.get(slotData.name);
            if (data && data.type === type && data.id === id) {
                // Store in _cooldownStates when starting cooldown
                _cooldownStates.set(slotData.name, {
                    duration: duration,
                    total: duration,
                    showTimer: showTimer
                });
                SceneManager._scene._skillUI.startCooldown(slotData.name, duration, showTimer);
            }
        });
    }

    function updateGlobalCooldowns() {
        for (const [key, frames] of _globalCooldowns.entries()) {
            if (frames <= 0) {
                _globalCooldowns.delete(key);
            }
        }
    }

    //-----------------------------------------------------------------------------

    const _slotData = new Map();
    const _cooldownStates = new Map();
    const _globalCooldowns = new Map();
    const ALL_AVAILABLE_SLOTS = [];

    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.call(this);
        this._uiSlotData = {};
        this._slotPositions = {};
    };

    ConfigManager.slotPositions = {};

    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        const config = _ConfigManager_makeData.call(this);
        config.slotPositions = this.slotPositions;
        return config;
    };

    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _ConfigManager_applyData.call(this, config);
        this.slotPositions = config.slotPositions || {};
    };

    //-----------------------------------------------------------------------------
    // Sprite_SkillSlot
    //
    // The sprite for displaying a skill slot

    function Sprite_SkillSlot() {
        this.initialize(...arguments);
    }

    Sprite_SkillSlot.prototype = Object.create(Sprite.prototype);
    Sprite_SkillSlot.prototype.constructor = Sprite_SkillSlot;

    Sprite_SkillSlot.prototype.initialize = function (config) {
        Sprite.prototype.initialize.call(this);
        const nameConfig = config.Name.split(',').map(n => n.trim());
        this._keyboardName = nameConfig[0];
        this._gamepadName = nameConfig[1] || nameConfig[0];

        config.Name = this._keyboardName;
        this._config = config;
        this._skillId = 0;
        this._iconIndex = 0;
        this._itemQuantity = 0;
        this._lastItemId = null;
        this._lastItemType = null;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this._flashDuration = 0;
        this._flashColor = [0, 0, 0, 0];

        this._cooldownContainer = new PIXI.Container();
        this.addChild(this._cooldownContainer);

        this._cooldownDuration = 0;
        this._cooldownTotal = 0;
        this._inCooldown = false;
        this._bounceDuration = 0;

        this._touching = false;
        this._touchHandler = this.handleTouch.bind(this);
        this.on('touchstart', this._touchHandler);
        this.on('click', this._touchHandler);
        this.on('mouseover', this._touchHandler);

        const specialBehavior = this._config.SpecialBehavior || 'none';
        if (
            (specialBehavior === 'none' ||
                specialBehavior === 'item_only' ||
                specialBehavior === 'skill_only') &&
            !ALL_AVAILABLE_SLOTS.some(slot => slot.name === config.Name)
        ) {
            ALL_AVAILABLE_SLOTS.push({
                name: config.Name,
                slot: this,
                specialBehavior: specialBehavior
            });
        }

        this.createBackground();
        this.createIcon();
        this.createButtonText();
        if (showItemQuantity) {
            this.createQuantityText();
        }

        const slotData = _slotData.get(this._config.Name);
        if (slotData) {
            this._lastItemId = slotData.id;
            this._lastItemType = slotData.type;
        }
        this.createAdditionalTexts();
        this.initializeDrag();
    };

    Sprite_SkillSlot.prototype.initializeDrag = function () {
        this._isDragging = false;
        this._dragOffsetX = 0;
        this._dragOffsetY = 0;
    };

    Sprite_SkillSlot.prototype.updateDrag = function () {
        if (!SceneManager._scene._isDragMode || !Utils.isOptionValid('test')) return;

        if (!this._isDragging && TouchInput.isTriggered()) {
            const touchX = TouchInput.x;
            const touchY = TouchInput.y;
            const slotRect = new Rectangle(
                this.x - this.width / 2,
                this.y - this.height / 2,
                this.width,
                this.height
            );

            if (touchX >= slotRect.x && touchX <= slotRect.x + slotRect.width &&
                touchY >= slotRect.y && touchY <= slotRect.y + slotRect.height) {
                this._isDragging = true;
                this._dragOffsetX = this.x - touchX;
                this._dragOffsetY = this.y - touchY;
            }
        }

        if (this._isDragging) {
            if (TouchInput.isPressed()) {
                this.x = TouchInput.x + this._dragOffsetX;
                this.y = TouchInput.y + this._dragOffsetY;

                // Keep slot within screen bounds
                this.x = Math.max(this.width / 2, Math.min(Graphics.width - this.width / 2, this.x));
                this.y = Math.max(this.height / 2, Math.min(Graphics.height - this.height / 2, this.y));
            } else {
                this._isDragging = false;
                // Update position in memory (actual save happens when exiting drag mode)
                if (!window.$uiPositions) window.$uiPositions = {};
                window.$uiPositions[this._config.Name] = {
                    x: this.x,
                    y: this.y
                };
            }
        }
    };

    Scene_Map.prototype.createResetButton = function () {
        this._resetButton = new Sprite();
        this._resetButton.bitmap = new Bitmap(100, 40);
        this._resetButton.x = (Graphics.width - 100) / 2;
        this._resetButton.y = 20;

        this._resetButton.bitmap.fillRect(0, 0, 100, 40, '#666666');
        this._resetButton.bitmap.fontSize = 20;
        this._resetButton.textColor = '#ffffff';
        this._resetButton.bitmap.drawText('RESET', 0, 0, 100, 40, 'center');
        this._resetButton.visible = false;

        this._resetButton.z = 5;
        this.addChild(this._resetButton);
    };

    Scene_Map.prototype.updateResetButton = function () {
        if (!this._isDragMode || !this._resetButton) return;

        if (TouchInput.isTriggered()) {
            const x = TouchInput.x;
            const y = TouchInput.y;
            if (x >= this._resetButton.x && x <= this._resetButton.x + 100 &&
                y >= this._resetButton.y && y <= this._resetButton.y + 40) {
                this.resetSlotPositions();
            }
        }
    };

    Scene_Map.prototype.resetSlotPositions = function () {
        if (!this._skillUI) return;

        gridSettings.forEach(grid => {
            const rows = (grid.RowColumn || '1, 1').toString().split(',').map(v => Number(v.trim()));
            const cols = rows.length > 1 ? rows[1] : rows[0];
            const padding = Number(grid.Padding) || 4;
            const defaultPosition = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
            const gridX = defaultPosition[0] || 0;
            const gridY = defaultPosition[1] || 0;

            // Reset grid background if exists
            if (this._skillUI._gridBackgrounds) {
                const gridBg = this._skillUI._gridBackgrounds.find(bg => bg._grid === grid);
                if (gridBg) {
                    gridBg.x = gridX;
                    gridBg.y = gridY;
                }
            }

            const firstSlot = this._skillUI._slots.get(grid.Slots[0].Name);
            if (!firstSlot) return;

            const width = firstSlot.width;
            const height = firstSlot.height;
            const gridWidth = (cols - 1) * (width + padding) + width;
            const gridHeight = (rows[0] - 1) * (height + padding) + height;
            const centerX = gridX - (gridWidth / 2) + (width / 2);
            const centerY = gridY - (gridHeight / 2) + (height / 2);

            grid.Slots.forEach((slotConfig, i) => {
                const slot = this._skillUI._slots.get(slotConfig.Name);
                if (slot) {
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    slot.x = centerX + (col * width) + (col * padding);
                    slot.y = centerY + (row * height) + (row * padding);
                }
            });
        });

        window.$uiPositions = {};
        saveUIPositions({});
    };

    Sprite_SkillSlot.prototype.handleTouch = function () {
        if (SceneManager._scene && SceneManager._scene._skillUI) {
            const ui = SceneManager._scene._skillUI;

            // Find which grid this slot belongs to
            for (let i = 0; i < ui._gamepadGrids.length; i++) {
                const grid = ui._gamepadGrids[i];
                const slotIndex = grid.slots.findIndex(slot => slot.Name === this._config.Name);

                if (slotIndex !== -1) {
                    // Found the grid and slot, update cursor
                    ui._gamepadCursor._currentGridIndex = i;
                    ui._gamepadCursor._currentSlotIndex = slotIndex;
                    ui.updateCursorTarget();
                    break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.destroy = function () {
        Sprite.prototype.destroy.call(this);

        this._slots.forEach(slot => {
            slot.off('touchstart', slot._touchHandler);
            slot.off('click', slot._touchHandler);
            slot.off('mouseover', slot._touchHandler);
        });
    };

    Sprite_SkillSlot.prototype.createQuantityText = function () {
        this._quantitySprite = new Sprite();
        this._quantitySprite.bitmap = new Bitmap(96, 32);
        this._quantitySprite.anchor.x = 0.5;
        this._quantitySprite.y = 1;
        this.addChild(this._quantitySprite);

        // Wait for background to load before positioning text
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionQuantityText());
        } else {
            // For default background
            this.positionQuantityText();
        }
    };

    Sprite_SkillSlot.prototype.positionQuantityText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._quantitySprite.y = -bitmap.height / 2 + quantityTextOffsetY;
        } else {
            // No background
            this._quantitySprite.y += -48 + quantityTextOffsetY;
        }
    };

    Sprite_SkillSlot.prototype.refreshQuantity = function () {
        if (!showItemQuantity) return;

        const data = _slotData.get(this._config.Name);
        if (!data) {
            if (this._quantitySprite) {
                this._quantitySprite.bitmap.clear();
            }
            return;
        }

        let quantity = 0;
        if (data.type === 'item') {
            const item = $dataItems[data.id];
            if (item) {
                quantity = $gameParty.numItems(item);
            }
        }

        // Only update if quantity has changed
        if (this._itemQuantity !== quantity) {
            this._itemQuantity = quantity;
            this._quantitySprite.bitmap.clear();
            if (quantity > 0) {
                applyFontSettings(this._quantitySprite.bitmap);
                this._quantitySprite.bitmap.drawText(quantity.toString(), 0, 0, 96, 32, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.update = function () {
        this.refreshQuantity();
        this.updateAdditionalTexts();
        this.updateFlash();
        this.updateCooldown();
        this.updateDrag();
    };

    Sprite_SkillSlot.prototype.createButtonText = function () {
        this._buttonSprite = new Sprite();
        this._buttonSprite.bitmap = new Bitmap(128, 32);
        this._buttonSprite.anchor.x = 0.5;
        this._buttonSprite.anchor.y = 0.5;
        this.addChild(this._buttonSprite);
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionButtonText());
        } else {
            this.positionButtonText();
        }
        this.refreshButtonText();
    };

    Sprite_SkillSlot.prototype.positionButtonText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._buttonSprite.y = bitmap.height / 2;
        }
        const offsetY = Number(this._config.TextOffsetY || 0);
        this._buttonSprite.y += offsetY;
    };

    Sprite_SkillSlot.prototype.refreshButtonText = function () {
        if (this._config.Button) {
            const buttons = this._config.Button.split(',').map(b => b.trim());
            const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

            // Get the appropriate button text based on mode
            const buttonText = isGamepadMode ?
                (buttons.length > 1 ? buttons[1] : '') :
                buttons[0];

            // Map the button to the appropriate input
            if (isGamepadMode && buttons.length > 1) {
                // Handle gamepad mapping
                const gamepadButton = buttons[1];
                if (GamepadButtons.hasOwnProperty(gamepadButton)) {
                    const buttonCode = GamepadButtons[gamepadButton];
                    if (!Imported.Hendrix_Keyboard_Gamepad) {
                        // Only map if keyboard plugin isn't present
                        Input.gamepadMapper[buttonCode] = buttons[0].toLowerCase();
                    }
                }
            } else if (!isGamepadMode && !Imported.Hendrix_Keyboard_Gamepad) {
                // Handle keyboard mapping only in standalone mode
                const keyboardButton = buttons[0].toLowerCase();
                if (charToKeyCode.hasOwnProperty(keyboardButton)) {
                    const keyCode = charToKeyCode[keyboardButton];
                    Input.keyMapper[keyCode] = keyboardButton;
                }
            }

            // Draw the button text
            this._buttonSprite.bitmap.clear();
            applyFontSettings(this._buttonSprite.bitmap);
            this._buttonSprite.bitmap.drawText(buttonText, 0, 0, 128, 32, 'center');
        }
    };

    const extractSlotTextTags = (notesString) => {
        const results = [];
        const regex = /<slot text:\s*(.+?)(?:\s*,\s*(-?\d+)\s*,\s*(-?\d+))?\s*>/g;
        let match;

        while (match = regex.exec(notesString)) {
            results.push({
                text: match[1],
                offsetX: Number(match[2] || 0),
                offsetY: Number(match[3] || 0)
            });
        }

        return results;
    };

    Sprite_SkillSlot.prototype.createAdditionalTexts = function () {
        // Clear all existing text sprites first
        if (this._additionalTextSprites) {
            for (const sprite of this._additionalTextSprites.values()) {
                if (sprite.parent) {
                    sprite.parent.removeChild(sprite);
                }
            }
        }
        this._additionalTextSprites = new Map();
        let allDisplays = [];

        const parameterDisplays = additionalTextDisplays.filter(display => {
            // Check for exact slot name match
            if (display.slotName === this._config.Name) {
                return true;
            }

            const slotData = _slotData.get(this._config.Name);
            if (!slotData) return false;

            const slotNameLower = display.slotName.toLowerCase();

            if (slotData.type === 'weapon') {
                const weapon = $dataWeapons[slotData.id];
                if (!weapon) return false;

                if (slotNameLower.startsWith('weapon type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const weaponTypeName = $dataSystem.weaponTypes[weapon.wtypeId].toLowerCase();
                    return weaponTypeName === targetType;
                }

                if (slotNameLower.startsWith('weapon name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return weapon.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('weapon id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return weapon.id === targetId;
                }
            }

            if (slotData.type === 'armor') {
                const armor = $dataArmors[slotData.id];
                if (!armor) return false;

                if (slotNameLower.startsWith('armor type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const armorTypeName = $dataSystem.armorTypes[armor.atypeId].toLowerCase();
                    return armorTypeName === targetType;
                }

                if (slotNameLower.startsWith('equipment type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const equipTypeName = $dataSystem.equipTypes[armor.etypeId].toLowerCase();
                    return equipTypeName === targetType;
                }

                if (slotNameLower.startsWith('armor name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return armor.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('armor id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return armor.id === targetId;
                }
            }

            if (slotData.type === 'skill') {
                const skill = $dataSkills[slotData.id];
                if (!skill) return false;

                if (slotNameLower.startsWith('skill name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return skill.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('skill id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return skill.id === targetId;
                }

                if (slotNameLower.startsWith('skill type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const skillTypeName = $dataSystem.skillTypes[skill.stypeId].toLowerCase();
                    return skillTypeName === targetType;
                }

                if (slotNameLower.startsWith('skill element:')) {
                    const targetElement = display.slotName.split(':')[1].trim().toLowerCase();
                    if (skill.damage && skill.damage.elementId > 0) {
                        const elementName = $dataSystem.elements[skill.damage.elementId].toLowerCase();
                        return elementName === targetElement;
                    }
                    return false;
                }
            }

            if (slotData.type === 'item') {
                const item = $dataItems[slotData.id];
                if (!item) return false;

                if (slotNameLower.startsWith('item name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return item.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('item id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return item.id === targetId;
                }
            }

            return false;
        });

        allDisplays = [...parameterDisplays];

        // Notetag displays
        const slotData = _slotData.get(this._config.Name);
        if (slotData) {
            let item;
            switch (slotData.type) {
                case 'weapon':
                    item = $dataWeapons[slotData.id];
                    break;
                case 'skill':
                    item = $dataSkills[slotData.id];
                    break;
                case 'item':
                    item = $dataItems[slotData.id];
                    break;
                case 'armor':
                    item = $dataArmors[slotData.id];
                    break;
            }

            if (item && item.note) {
                const notetagDisplays = extractSlotTextTags(item.note).map(tag => ({
                    textToDisplay: tag.text,
                    slotName: this._config.Name,
                    offsetX: tag.offsetX,
                    offsetY: tag.offsetY
                }));
                allDisplays = [...allDisplays, ...notetagDisplays];
            }
        }

        // Wait for background to load before positioning text
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionAdditionalTexts(allDisplays));
        } else {
            this.positionAdditionalTexts(allDisplays);
        }
    };

    Sprite_SkillSlot.prototype.positionAdditionalTexts = function (slotDisplays) {
        for (const display of slotDisplays) {
            const sprite = new Sprite();
            sprite.bitmap = new Bitmap(96, 20);
            sprite.anchor.x = 0.5;

            // Position at top middle of background
            if (this._config.BackgroundImage) {
                const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
                sprite.y = -bitmap.height / 2;
            } else {
                sprite.y = -48;
            }

            sprite.x += display.offsetX;
            sprite.y += display.offsetY;

            this.addChild(sprite);
            this._additionalTextSprites.set(display, sprite);
        }
    };

    Sprite_SkillSlot.prototype.updateAdditionalTexts = function () {
        const slotData = _slotData.get(this._config.Name);
        const currentId = slotData ? slotData.id : null;
        const currentType = slotData ? slotData.type : null;

        // Check if item has changed
        if (this._lastItemId !== currentId || this._lastItemType !== currentType) {
            this._lastItemId = currentId;
            this._lastItemType = currentType;
            this.createAdditionalTexts();
            return;
        }

        // Update existing text displays
        for (const [display, sprite] of this._additionalTextSprites.entries()) {
            let text = display.textToDisplay;
            try {
                // Evaluate if it looks like a formula
                if (text.includes('$game') || text.includes('eval(')) {
                    text = eval(text);
                }

                // Only update if text changed
                if (sprite._currentText !== text) {
                    sprite._currentText = text;
                    sprite.bitmap.clear();
                    applyFontSettings(sprite.bitmap);
                    sprite.bitmap.drawText(String(text), 0, 0, 96, 20, 'center');
                }
            } catch (e) {
                console.error(`Error evaluating text: ${text}`, e);
                sprite.bitmap.clear();
                sprite._currentText = '';
            }
        }
    };

    Sprite_SkillSlot.prototype.createBackground = function () {
        if (this._config.BackgroundImage) {
            this.bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
        } else {
            this.bitmap = new Bitmap(48, 48);
            this.bitmap.fillRect(0, 0, 48, 48, 'rgba(0,0,0,0.5)');
        }
    };

    Sprite_SkillSlot.prototype.createIcon = function () {
        this._iconSprite = new Sprite();
        this._iconSprite.bitmap = ImageManager.loadSystem('IconSet');
        this._iconSprite.anchor.x = 0.5;
        this._iconSprite.anchor.y = 0.5;
        this.addChild(this._iconSprite);
        this._iconSprite.visible = false;

        this._customImageSprite = new Sprite();
        this._customImageSprite.anchor.x = 0.5;
        this._customImageSprite.anchor.y = 0.5;
        this.addChild(this._customImageSprite);
        this._customImageSprite.visible = false;
    };

    Sprite_SkillSlot.prototype.setSkill = function (skillId, iconIndex, quantity = 0) {
        this._skillId = skillId;
        this._iconIndex = iconIndex;

        // Reset both sprites initially
        this._iconSprite.visible = false;
        this._customImageSprite.visible = false;

        if (this._skillId > 0) {
            let item;
            const slotData = _slotData.get(this._config.Name);

            if (slotData) {
                switch (slotData.type) {
                    case 'skill':
                        item = $dataSkills[this._skillId];
                        break;
                    case 'item':
                        item = $dataItems[this._skillId];
                        break;
                    case 'weapon':
                        item = $dataWeapons[this._skillId];
                        break;
                    case 'armor':
                        item = $dataArmors[this._skillId];
                        break;
                }
            }

            if (item) {
                const notedata = item.note.split(/[\r\n]+/);
                let customImage = '';

                for (const line of notedata) {
                    if (line.match(/<slot image:\s*(.+)>/i)) {
                        customImage = RegExp.$1.trim();
                        break;
                    }
                }

                if (customImage) {
                    // If using custom image, completely ignore icon sprite
                    this._iconSprite.visible = false;
                    this._isUsingCustomImage = true;

                    const bitmap = ImageManager.loadBitmap('img/pictures/slotUI/', customImage);
                    bitmap.addLoadListener(() => {
                        if (!this._customImageSprite || !this.parent) return;

                        // If bitmap failed to load (width or height is 0)
                        if (bitmap.width === 0 || bitmap.height === 0) {
                            this._isUsingCustomImage = false;
                            this._iconSprite.visible = true;
                            this.refreshIcon();
                            return;
                        }

                        this._customImageSprite.bitmap = bitmap;
                        this._customImageSprite.visible = true;
                        this._customImageSprite.scale.x = 1;
                        this._customImageSprite.scale.y = 1;
                    });
                } else {
                    // If using icon, completely ignore custom image sprite
                    this._customImageSprite.visible = false;
                    this._isUsingCustomImage = false;
                    this._iconSprite.visible = true;
                    this.refreshIcon();
                }

                if (slotData.type === 'item' && showItemQuantity) {
                    this.refreshQuantity(quantity);
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.refreshIcon = function () {
        const pw = 32;
        const ph = 32;
        if (Utils.RPGMAKER_NAME === "MV") {
            const sx = (this._iconIndex % 16) * pw;
            const sy = Math.floor(this._iconIndex / 16) * ph;
            this._iconSprite.setFrame(sx, sy, pw, ph);
        } else {
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (this._iconIndex % 16) * pw;
            const sy = Math.floor(this._iconIndex / 16) * ph;
            this._iconSprite.setFrame(sx, sy, pw, ph);
        }
    };

    //-----------------------------------------------------------------------------
    // Spriteset_SkillUI
    //
    // The set of sprites for the skill UI

    function Spriteset_SkillUI() {
        this.initialize(...arguments);
    }

    Spriteset_SkillUI.prototype = Object.create(Sprite.prototype);
    Spriteset_SkillUI.prototype.constructor = Spriteset_SkillUI;

    Spriteset_SkillUI.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._slots = new Map();
        this._fadeOpacity = 255;
        this._gamepadGrids = [];
        this.createGrids();
        this.createGamepadCursor();
    };

    Spriteset_SkillUI.prototype.createGamepadCursor = function () {
        this._gamepadCursor = new Sprite();
        if (gamepadCursorImage) {
            this._gamepadCursor.bitmap = ImageManager.loadSystem(gamepadCursorImage);
            this._gamepadCursor.bitmap.addLoadListener(() => {
                this.initializeGamepadCursor();
            });
        } else {
            this._gamepadCursor.bitmap = new Bitmap(48, 48);
            const ctx = this._gamepadCursor.bitmap._context;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 48, 48);
            this.initializeGamepadCursor();
        }
    };

    Spriteset_SkillUI.prototype.initializeGamepadCursor = function () {
        this._gamepadCursor.anchor.x = 0.5;
        this._gamepadCursor.anchor.y = 0.5;
        this._gamepadCursor._targetSlot = null;
        this._gamepadCursor._currentGridIndex = -1;
        this._gamepadCursor._currentSlotIndex = -1;
        this.addChild(this._gamepadCursor);
        this._gamepadCursor.visible = false;

        if (this._gamepadGrids.length > 0) {
            this._gamepadCursor._currentGridIndex = 0;
            this._gamepadCursor._currentSlotIndex = 0;
            this.updateCursorTarget();
        }
    };

    Spriteset_SkillUI.prototype.update = function () {
        Sprite.prototype.update.call(this);

        const isVisible = visibilitySwitchId === 0 || $gameSwitches.value(visibilitySwitchId);
        this.visible = isVisible;

        if (isVisible) {
            if (hideUIduringMessage) {
                this.updateVisibility();
            }
            if (this._gridBackgrounds) {
                this.updateGridDragging();
            }
        }
        this.updateGamepadNavigation();
    };

    Spriteset_SkillUI.prototype.updateGridDragging = function () {
        if (!SceneManager._scene._isDragMode || !Utils.isOptionValid('test')) return;

        // Check if any slot is being dragged
        let slotBeingDragged = false;
        this._slots.forEach(slot => {
            if (slot._isDragging) {
                slotBeingDragged = true;
            }
        });

        // Not allow grid dragging if a slot is being dragged
        if (slotBeingDragged) return;

        this._gridBackgrounds.forEach(background => {
            if (!background._isDragging && TouchInput.isTriggered()) {
                const touchX = TouchInput.x;
                const touchY = TouchInput.y;

                // Check if clicking on a slot
                let clickingOnSlot = false;
                background._gridSlots.forEach(slot => {
                    const slotRect = new Rectangle(
                        slot.x - slot.width / 2,
                        slot.y - slot.height / 2,
                        slot.width,
                        slot.height
                    );

                    if (touchX >= slotRect.x && touchX <= slotRect.x + slotRect.width &&
                        touchY >= slotRect.y && touchY <= slotRect.y + slotRect.height) {
                        clickingOnSlot = true;
                    }
                });

                // Only start grid drag if not clicking on a slot
                if (!clickingOnSlot) {
                    const gridRect = new Rectangle(
                        background.x - background.width / 2,
                        background.y - background.height / 2,
                        background.width,
                        background.height
                    );

                    if (touchX >= gridRect.x && touchX <= gridRect.x + gridRect.width &&
                        touchY >= gridRect.y && touchY <= gridRect.y + gridRect.height) {
                        background._isDragging = true;
                        background._dragOffsetX = background.x - touchX;
                        background._dragOffsetY = background.y - touchY;

                        // Get all slots for this grid if not already stored
                        if (background._gridSlots.length === 0) {
                            background._grid.Slots.forEach(slotConfig => {
                                const slot = this._slots.get(slotConfig.Name);
                                if (slot) {
                                    background._gridSlots.push(slot);
                                }
                            });
                        }

                        // Store current relative positions of all slots
                        background._gridSlots.forEach(slot => {
                            slot._gridOffsetX = slot.x - background.x;
                            slot._gridOffsetY = slot.y - background.y;
                        });
                    }
                }
            }

            if (background._isDragging) {
                if (TouchInput.isPressed()) {
                    const newX = TouchInput.x + background._dragOffsetX;
                    const newY = TouchInput.y + background._dragOffsetY;

                    background.x = Math.max(background.width / 2,
                        Math.min(Graphics.width - background.width / 2, newX));
                    background.y = Math.max(background.height / 2,
                        Math.min(Graphics.height - background.height / 2, newY));

                    background._gridSlots.forEach(slot => {
                        slot.x = background.x + slot._gridOffsetX;
                        slot.y = background.y + slot._gridOffsetY;
                    });
                } else {
                    background._isDragging = false;

                    // Save all current positions
                    const currentPositions = window.$uiPositions || {};

                    // Save grid position
                    currentPositions['grid_' + background._grid.Slots[0].Name] = {
                        x: background.x,
                        y: background.y
                    };

                    // Save all slot positions
                    background._gridSlots.forEach(slot => {
                        currentPositions[slot._config.Name] = {
                            x: slot.x,
                            y: slot.y
                        };
                    });

                    console.log('Saving positions after grid drag:', currentPositions);
                    window.$uiPositions = currentPositions;
                    saveUIPositions(currentPositions);
                }
            }
        });
    };

    Spriteset_SkillUI.prototype.updateGamepadNavigation = function () {
        if (this._gamepadGrids.length === 0) {
            this._gamepadCursor.visible = false;
            return;
        }

        const isGamepadConnected = navigator.getGamepads && navigator.getGamepads()[0];
        this._gamepadCursor.visible = !!isGamepadConnected;

        if (!isGamepadConnected) return;

        this._gamepadCursor.visible = true;
        let moveRight, moveLeft, moveDown, moveUp;

        if (Imported.Hendrix_Keyboard_Gamepad) {
            moveRight = Input.isPressed('right');
            moveLeft = Input.isPressed('left');
            moveDown = Input.isPressed('down');
            moveUp = Input.isPressed('up');
        } else {
            const gamepad = navigator.getGamepads()[0];
            if (Utils.RPGMAKER_NAME === "MV") {
                const isButtonPressed = (index) => {
                    if (!gamepad.buttons[index]) return false;
                    if (typeof gamepad.buttons[index] === 'object') {
                        return gamepad.buttons[index].pressed;
                    }
                    return gamepad.buttons[index] === 1;
                };

                // Check D-pad
                moveRight = isButtonPressed(15);
                moveLeft = isButtonPressed(14);
                moveDown = isButtonPressed(13);
                moveUp = isButtonPressed(12);
            } else {
                moveRight = gamepad.buttons[15] && gamepad.buttons[15].pressed;
                moveLeft = gamepad.buttons[14] && gamepad.buttons[14].pressed;
                moveDown = gamepad.buttons[13] && gamepad.buttons[13].pressed;
                moveUp = gamepad.buttons[12] && gamepad.buttons[12].pressed;
            }
        }

        if (!this._lastMoveTime) this._lastMoveTime = 0;
        const currentTime = Date.now();
        if (currentTime - this._lastMoveTime < 200) return;

        const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
        if (!currentGrid) return;

        let newIndex = this._gamepadCursor._currentSlotIndex;
        const cols = currentGrid.cols;

        if (moveRight && newIndex % cols < cols - 1) {
            newIndex++;
            this._lastMoveTime = currentTime;
        } else if (moveLeft && newIndex % cols > 0) {
            newIndex--;
            this._lastMoveTime = currentTime;
        } else if (moveDown && newIndex + cols < currentGrid.slots.length) {
            newIndex += cols;
            this._lastMoveTime = currentTime;
        } else if (moveUp && newIndex - cols >= 0) {
            newIndex -= cols;
            this._lastMoveTime = currentTime;
        }

        if (newIndex !== this._gamepadCursor._currentSlotIndex) {
            this._gamepadCursor._currentSlotIndex = newIndex;
            this.updateCursorTarget();
        }
    };

    const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
    Game_Player.prototype.getInputDirection = function () {
        const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
        if (gamepad) {
            const scene = SceneManager._scene;
            if (scene._skillUI && scene._skillUI._gamepadGrids.length > 0) {
                if (Utils.RPGMAKER_NAME === "MV") {
                    const isButtonPressed = (index) => {
                        if (!gamepad.buttons[index]) return false;
                        if (typeof gamepad.buttons[index] === 'object') {
                            return gamepad.buttons[index].pressed;
                        }
                        return gamepad.buttons[index] === 1;
                    };

                    if (isButtonPressed(12) || isButtonPressed(13) ||
                        isButtonPressed(14) || isButtonPressed(15)) {
                        return 0;  // Block player movement only when using D-pad
                    }
                } else {
                    if ((gamepad.buttons[12] && gamepad.buttons[12].pressed) ||
                        (gamepad.buttons[13] && gamepad.buttons[13].pressed) ||
                        (gamepad.buttons[14] && gamepad.buttons[14].pressed) ||
                        (gamepad.buttons[15] && gamepad.buttons[15].pressed)) {
                        return 0;
                    }
                }
            }
        }
        return _Game_Player_getInputDirection.call(this);
    };

    Spriteset_SkillUI.prototype.updateCursorTarget = function () {
        const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
        if (!currentGrid) return;

        const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return;

        const slot = this._slots.get(slotConfig.Name);
        if (slot) {
            this._gamepadCursor._targetSlot = slot;
            this._gamepadCursor.visible = true;
            this._gamepadCursor.x = slot.x;
            this._gamepadCursor.y = slot.y;
        }
    };

    Spriteset_SkillUI.prototype.updateVisibility = function () {
        const messageWindow = SceneManager._scene._messageWindow;
        if (messageWindow && messageWindow.isOpen()) {
            // Fade out
            this._fadeOpacity = Math.max(0, this._fadeOpacity - 30);
        } else {
            // Fade in
            this._fadeOpacity = Math.min(255, this._fadeOpacity + 30);
        }
        this.opacity = this._fadeOpacity;
    };

    Spriteset_SkillUI.prototype.createGrids = function () {
        for (const grid of gridSettings) {
            this.createGridBackground(grid);
            this.createGridSlots(grid);
        }
        this._gamepadGrids = gridSettings.filter(grid => {
            return grid.ControllableViaGamepad === 'true';
        }).map((grid, index) => {
            const slots = grid.Slots;
            const rowCol = (grid.RowColumn || '1, 1').toString();
            let rows = 1, cols = 1;
            if (rowCol.includes(',')) {
                [rows, cols] = rowCol.split(',').map(v => Number(v.trim()));
            } else {
                rows = cols = Number(rowCol.trim());
            }
            return {
                slots,
                rows,
                cols,
                index
            };
        });
    };

    Spriteset_SkillUI.prototype.createGridSlots = function (grid) {
        let rows = 1, cols = 1;
        const rowColConfig = (grid.RowColumn || '1, 1').toString();
        if (rowColConfig.includes(',')) {
            [rows, cols] = rowColConfig.split(',').map(v => Number(v.trim()));
        } else {
            rows = cols = Number(rowColConfig.trim());
        }

        const padding = Number(grid.Padding) || 4;
        let defaultPosition = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
        const gridX = defaultPosition[0] || 0;
        const gridY = defaultPosition[1] || 0;

        if (grid.Slots.length === 0) return;

        const firstSlot = new Sprite_SkillSlot(grid.Slots[0], grid.Type);

        firstSlot.bitmap.addLoadListener(() => {
            const slotWidth = firstSlot.bitmap.width;
            const slotHeight = firstSlot.bitmap.height;

            // Calculate grid dimensions
            const gridWidth = (cols - 1) * (slotWidth + padding) + slotWidth;
            const gridHeight = (rows - 1) * (slotHeight + padding) + slotHeight;
            const centerX = gridX - (gridWidth / 2) + (slotWidth / 2);
            const centerY = gridY - (gridHeight / 2) + (slotHeight / 2);

            // Position the first slot
            if (window.$uiPositions[grid.Slots[0].Name]) {
                firstSlot.x = window.$uiPositions[grid.Slots[0].Name].x;
                firstSlot.y = window.$uiPositions[grid.Slots[0].Name].y;
            } else {
                firstSlot.x = centerX;
                firstSlot.y = centerY;
            }

            this._slots.set(grid.Slots[0].Name, firstSlot);
            this.addChild(firstSlot);

            // Create remaining slots
            for (let i = 1; i < grid.Slots.length; i++) {
                const slotConfig = grid.Slots[i];
                const slot = new Sprite_SkillSlot(slotConfig, grid.Type);

                // Check for saved position first
                if (window.$uiPositions[slotConfig.Name]) {
                    slot.x = window.$uiPositions[slotConfig.Name].x;
                    slot.y = window.$uiPositions[slotConfig.Name].y;
                } else {
                    // Use default grid position if no saved position exists
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    slot.x = centerX + (col * slotWidth) + (col * padding);
                    slot.y = centerY + (row * slotHeight) + (row * padding);
                }

                this._slots.set(slotConfig.Name, slot);
                this.addChild(slot);
            }
        });
    };

    Spriteset_SkillUI.prototype.createGridBackground = function (grid) {
        if (grid.BackgroundImage) {
            const background = new Sprite();
            background.bitmap = ImageManager.loadSystem(grid.BackgroundImage);

            // Load position - check saved position first, fallback to default position
            let position;
            if (window.$uiPositions && window.$uiPositions['grid_' + grid.Slots[0].Name]) {
                position = [
                    window.$uiPositions['grid_' + grid.Slots[0].Name].x,
                    window.$uiPositions['grid_' + grid.Slots[0].Name].y
                ];
            } else {
                position = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
            }

            background.x = position[0] || 0;
            background.y = position[1] || 0;
            background.anchor.x = 0.5;
            background.anchor.y = 0.5;

            // Drag functionality of background
            background._isDragging = false;
            background._dragOffsetX = 0;
            background._dragOffsetY = 0;
            background._gridSlots = [];
            background._grid = grid;

            this.addChild(background);
            this._gridBackgrounds = this._gridBackgrounds || [];
            this._gridBackgrounds.push(background);
        }
    };

    Spriteset_SkillUI.prototype.createBackground = function () {
        if (gridSettings.BackgroundImage) {
            this._background = new Sprite();
            this._background.bitmap = ImageManager.loadSystem(gridSettings.BackgroundImage);
            this.addChild(this._background);
        }
    };

    Spriteset_SkillUI.prototype.createSlots = function () {
        const rows = parseInt(gridSettings.Rows) || 1;
        const cols = parseInt(gridSettings.Columns) || 4;
        const padding = parseInt(gridSettings.Padding) || 4;

        for (let i = 0; i < slotsConfig.length; i++) {
            const config = slotsConfig[i];
            const slot = new Sprite_SkillSlot(config);
            const row = Math.floor(i / cols);
            const col = i % cols;
            slot.x = col * (40 + padding);
            slot.y = row * (40 + padding);
            this._slots.set(config.Name, slot);
            this.addChild(slot);
        }
    };

    Spriteset_SkillUI.prototype.setSkill = function (slotName, skillId, itemId, weaponId) {
        const slot = this._slots.get(slotName);
        if (slot) {
            if (skillId > 0) {
                const skill = $dataSkills[skillId];
                if (skill) {
                    slot.setSkill(skillId, skill.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'skill', id: skillId });
                }
            }
            else if (itemId > 0) {
                const item = $dataItems[itemId];
                if (item) {
                    slot.setSkill(itemId, item.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'item', id: itemId });
                }
            }
            else if (weaponId > 0) {
                const weapon = $dataWeapons[weaponId];
                if (weapon) {
                    slot.setSkill(weaponId, weapon.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'weapon', id: weaponId });
                }
            }
            saveToSystem();
        }
    };

    Spriteset_SkillUI.prototype.refreshSlots = function () {
        for (const [slotName, data] of _slotData.entries()) {
            const slot = this._slots.get(slotName);
            if (slot) {
                switch (data.type) {
                    case 'skill':
                        const skill = $dataSkills[data.id];
                        if (skill) slot.setSkill(data.id, skill.iconIndex);
                        break;
                    case 'item':
                        const item = $dataItems[data.id];
                        if (item) slot.setSkill(data.id, item.iconIndex);
                        break;
                    case 'weapon':
                        const weapon = $dataWeapons[data.id];
                        if (weapon) slot.setSkill(data.id, weapon.iconIndex);
                        break;
                    case 'armor':
                        const armor = $dataArmors[data.id];
                        if (armor) slot.setSkill(data.id, armor.iconIndex);
                        break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.refreshSlotsVisual = function () {
        for (const [slotName, data] of _slotData.entries()) {
            const slot = this._slots.get(slotName);
            if (slot && !slot._inCooldown) {
                switch (data.type) {
                    case 'skill':
                        const skill = $dataSkills[data.id];
                        if (skill) slot.setSkill(data.id, skill.iconIndex);
                        break;
                    case 'item':
                        const item = $dataItems[data.id];
                        if (item) slot.setSkill(data.id, item.iconIndex);
                        break;
                    case 'weapon':
                        const weapon = $dataWeapons[data.id];
                        if (weapon) slot.setSkill(data.id, weapon.iconIndex);
                        break;
                    case 'armor':
                        const armor = $dataArmors[data.id];
                        if (armor) slot.setSkill(data.id, armor.iconIndex);
                        break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.getEmptySlot = function (type) {
        for (const [name, slot] of this._slots.entries()) {
            if (!_slotData.has(name) && slot._gridType === type) {
                return name;
            }
        }
        return null;
    };

    Spriteset_SkillUI.prototype.refreshSpecialSlots = function () {
        for (const [slotName, slot] of this._slots.entries()) {
            const specialBehavior = slot._config.SpecialBehavior || 'none';
            if (specialBehavior === 'display_weapon') {
                const weapon = $gameParty.leader().weapons()[0];
                if (weapon) {
                    slot.setSkill(weapon.id, weapon.iconIndex);
                    _slotData.set(slotName, { type: 'weapon', id: weapon.id });
                } else {
                    slot.setSkill(0, 0);
                    _slotData.delete(slotName);
                }
            }
            else if (specialBehavior === 'display_shield') {
                const shield = $gameActors.actor(1).equips()[1];
                if (shield) {
                    slot.setSkill(shield.id, shield.iconIndex);
                    _slotData.set(slotName, { type: 'armor', id: shield.id });
                } else {
                    slot.setSkill(0, 0);
                    _slotData.delete(slotName);
                }
            }
            saveToSystem();
        }
    };

    //-----------------------------------------------------------------------------
    // Scene_Map modifications

    const saveToSystem = function () {
        $gameSystem._uiSlotData = {};
        _slotData.forEach((value, key) => {
            $gameSystem._uiSlotData[key] = value;
        });
    };

    const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        _Scene_Map_createAllWindows.call(this);
        this.createSkillUI();
    };

    Scene_Map.prototype.createSkillUI = function () {
        this.createDarkOverlay();
        this._skillUI = new Spriteset_SkillUI();
        this.addChild(this._skillUI);
        this._skillUI.refreshSlots();
        if ($gameSystem._uiSlotData) {
            _slotData.clear();
            Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                _slotData.set(key, value);
            });
        }
        this.createResetButton();
        this._isDragMode = false;
    };

    Scene_Map.prototype.createDarkOverlay = function () {
        this._darkOverlay = new PIXI.Graphics();
        this._darkOverlay.beginFill(0x000000, 0.5);
        this._darkOverlay.drawRect(0, 0, Graphics.width, Graphics.height);
        this._darkOverlay.endFill();
        this._darkOverlay.visible = false;
        this.addChild(this._darkOverlay);
    };

    Scene_Map.prototype.toggleDragMode = function () {
        if (!Utils.isOptionValid('test')) return;

        this._isDragMode = !this._isDragMode;
        this._darkOverlay.visible = this._isDragMode;

        if (this._isDragMode) {
            // When entering drag mode, get latest positions
            window.$uiPositions = readUIPositions();
        } else {
            // When exiting drag mode, save current positions
            const currentPositions = {};

            // Save slot positions
            this._skillUI._slots.forEach((slot, name) => {
                currentPositions[name] = {
                    x: slot.x,
                    y: slot.y
                };
            });

            // Save grid positions
            if (this._skillUI._gridBackgrounds) {
                this._skillUI._gridBackgrounds.forEach(bg => {
                    currentPositions['grid_' + bg._grid.Slots[0].Name] = {
                        x: bg.x,
                        y: bg.y
                    };
                });
            }

            console.log('Saving all positions:', currentPositions);
            saveUIPositions(currentPositions);
        }

        if (this._resetButton) {
            this._resetButton.visible = this._isDragMode;
        }
    };

    const _Scene_Map_initialize = Scene_Map.prototype.initialize;
    Scene_Map.prototype.initialize = function () {
        _Scene_Map_initialize.call(this);
    };
    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _Scene_Map_update.call(this);
        if (this._skillUI) {
            this._skillUI.update();
            this._skillUI.refreshSpecialSlots();
            if (Graphics.frameCount % 4 === 0) {
                this._skillUI.refreshSlotsVisual();
            }
            // Refresh button text when gamepad mode changes
            for (const slot of this._skillUI._slots.values()) {
                slot.refreshButtonText();
            }
            for (const [key, frames] of _globalCooldowns.entries()) {
                if (frames > 0) {
                    _globalCooldowns.set(key, frames - 1);
                }
            }
            updateGlobalCooldowns();
        }
        if (Input.isTriggered('pagedown') && Utils.isOptionValid('test')) {
            this.toggleDragMode();
        }
        if (Utils.isOptionValid('test')) {
            this.updateResetButton();
        }
    };

    //-----------------------------------------------------------------------------
    // Window_SkillSlotSelect
    //
    // Window for selecting which slot to assign a skill to

    function Window_SkillSlotSelect() {
        this.initialize(...arguments);
    }

    Window_SkillSlotSelect.prototype = Object.create(Window_Command.prototype);
    Window_SkillSlotSelect.prototype.constructor = Window_SkillSlotSelect;

    Window_SkillSlotSelect.prototype.initialize = function (rect) {
        if (Utils.RPGMAKER_NAME === "MV") {
            Window_Command.prototype.initialize.call(this, rect.x, rect.y);
            this.width = rect.width;
            this.height = rect.height;
        } else {
            Window_Command.prototype.initialize.call(this, rect);
        }
        this._skill = null;
        this.deactivate();
        this.hide();
    };

    Window_SkillSlotSelect.prototype.setSkill = function (skill) {
        this._skill = skill;
        this.refresh();
    };

    Window_SkillSlotSelect.prototype.makeCommandList = function () {
        this.addCommand("Use Now", 'use_now');

        const isSkillScene = SceneManager._scene instanceof Scene_Skill;
        const isItemScene = SceneManager._scene instanceof Scene_Item;

        this._availableSlots = ALL_AVAILABLE_SLOTS.filter(slotData => {
            const specialBehavior = slotData.specialBehavior || 'none';
            return specialBehavior === 'none' ||
                (isSkillScene && specialBehavior === 'skill_only') ||
                (isItemScene && specialBehavior === 'item_only');
        });

        this._availableSlots.forEach(slotData => {
            this.addCommand(slotData.name, 'slot', true, slotData.name);
        });
    };

    Window_SkillSlotSelect.prototype.drawItem = function (index) {
        if (Utils.RPGMAKER_NAME === "MV") {
            var rect = this.itemRectForText(index);
            const command = this._list[index];

            if (command.symbol === 'use_now') {
                this.changePaintOpacity(command.enabled);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            if (command.symbol === 'separator') {
                this.changePaintOpacity(true);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            var slotData = this._availableSlots[index - 1];
            var slot = slotData.slot;
            var data = _slotData.get(slotData.name);

            // Draw Icon
            var iconIndex = emptySlotIcon;
            if (data) {
                var item;
                switch (data.type) {
                    case 'skill':
                        item = $dataSkills[data.id];
                        break;
                    case 'item':
                        item = $dataItems[data.id];
                        break;
                    case 'weapon':
                        item = $dataWeapons[data.id];
                        break;
                    case 'armor':
                        item = $dataArmors[data.id];
                        break;
                }
                if (item) {
                    iconIndex = item.iconIndex;
                }
            }
            this.drawIcon(iconIndex, rect.x, rect.y);

            // Draw Slot Name
            var displayName = navigator.getGamepads && navigator.getGamepads()[0] ?
                slot._gamepadName : slot._keyboardName;
            var nameX = rect.x + 40;
            this.changeTextColor(this.normalColor());
            this.drawText(displayName, nameX, rect.y, 120);

            // Draw Item Name
            var itemName = "Empty";
            if (data && item) {
                itemName = item.name;
                this.changeTextColor(this.textColor(14));
            } else {
                this.changeTextColor(this.normalColor());
            }
            this.drawText(itemName, nameX + 115, rect.y, 200);

        } else {
            // MZ Version
            let rect = this.itemLineRect(index);
            const command = this._list[index];

            if (command.symbol === 'use_now') {
                this.changePaintOpacity(command.enabled);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            if (command.symbol === 'separator') {
                this.changePaintOpacity(true);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            const slotData = this._availableSlots[index - 1];
            const slot = slotData.slot;
            const data = _slotData.get(slotData.name);
            let iconIndex = emptySlotIcon;
            let itemName = "Empty";

            if (data) {
                let item;
                switch (data.type) {
                    case 'skill':
                        item = $dataSkills[data.id];
                        break;
                    case 'item':
                        item = $dataItems[data.id];
                        break;
                    case 'weapon':
                        item = $dataWeapons[data.id];
                        break;
                    case 'armor':
                        item = $dataArmors[data.id];
                        break;
                }
                if (item) {
                    iconIndex = item.iconIndex;
                    itemName = item.name;
                }
            }

            this.drawIcon(iconIndex, rect.x, rect.y);
            const iconPadding = ImageManager.iconWidth + 4;
            const baseX = rect.x + iconPadding;

            const displayName = navigator.getGamepads && navigator.getGamepads()[0] ?
                slot._gamepadName : slot._keyboardName;
            this.drawText(displayName, baseX, rect.y);

            const textX = baseX + this.textWidth(displayName + " ");
            if (data) {
                this.changeTextColor(ColorManager.textColor(14));
                this.drawText(itemName, textX, rect.y);
                this.resetTextColor();
            } else {
                this.drawText(itemName, textX, rect.y);
            }
        }
    };

    //-----------------------------------------------------------------------------
    // Scene_Skill and Item modifications

    const _Window_SkillList_isCurrentItemEnabled = Window_SkillList.prototype.isCurrentItemEnabled;
    Window_SkillList.prototype.isCurrentItemEnabled = function () {
        // Allow selection of disabled items
        if (SceneManager._scene instanceof Scene_Skill) {
            return true;
        }
        return _Window_SkillList_isCurrentItemEnabled.call(this);
    };

    const _Scene_Skill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function () {
        _Scene_Skill_create.call(this);
        this.createSlotSelectWindow();
    };

    Scene_Skill.prototype.createSlotSelectWindow = function () {
        const rect = this.slotSelectWindowRect();
        this._slotSelectWindow = new Window_SkillSlotSelect(rect);
        this._slotSelectWindow.setHandler('ok', this.onSlotSelectOk.bind(this));
        this._slotSelectWindow.setHandler('cancel', this.onSlotSelectCancel.bind(this));
        this.addWindow(this._slotSelectWindow);
    };

    Scene_Skill.prototype.slotSelectWindowRect = function () {
        const ww = windowWidth || 400;
        const wh = Utils.RPGMAKER_NAME === "MV" ?
            Window_Base.prototype.fittingHeight(visibleCommands || 6) :
            this.calcWindowHeight(visibleCommands || 6, true);
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = (Graphics.boxHeight - wh) / 2;
        if (Utils.RPGMAKER_NAME === "MV") {
            return { x: wx, y: wy, width: ww, height: wh };
        }
        return new Rectangle(wx, wy, ww, wh);
    };


    Scene_Skill.prototype.onItemOk = function () {
        this._slotSelectWindow.setSkill(this.item());
        this._slotSelectWindow.show();
        this._slotSelectWindow.activate();
        this._slotSelectWindow.select(0);
        this._itemWindow.deactivate();
        this._slotSelectWindow.refresh();
    };

    Scene_Skill.prototype.onSlotSelectOk = function () {
        if (this._slotSelectWindow.currentSymbol() === 'use_now') {
            const skill = this.item();
            if (this.actor().canUse(skill)) {
                if (this.itemTargetsValid()) {
                    this._slotSelectWindow.hide();
                    this._slotSelectWindow.deactivate();
                    this.determineItem();
                } else {
                    SoundManager.playBuzzer();
                }
            } else {
                SoundManager.playBuzzer();
                this._slotSelectWindow.activate();
            }
            return;
        }

        const item = this.item();
        if (isItemDisallowed(item)) {
            SoundManager.playBuzzer();
            this._itemWindow.deactivate();
            this._slotSelectWindow.activate();
            return;
        }

        const slotName = this._slotSelectWindow.currentExt();
        const skillId = this.item().id;

        const slot = ALL_AVAILABLE_SLOTS.find(s => s.name === slotName);
        if (slot) {
            slot.slot.setSkill(skillId, this.item().iconIndex);
            _slotData.set(slotName, { type: 'skill', id: skillId });
            saveToSystem();
        }

        this.onSlotSelectCancel();
        this._itemWindow.activate();
    };

    Scene_Skill.prototype.onSlotSelectCancel = function () {
        this._slotSelectWindow.hide();
        this._slotSelectWindow.deactivate();
        this._itemWindow.activate();
    };

    const _Scene_Item_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function () {
        isHotbarInitializing = true;
        _Scene_Item_create.call(this);
        isHotbarInitializing = false;
    };

    Scene_Item.prototype.createSlotSelectWindow = function () {
        const rect = this.slotSelectWindowRect();
        this._slotSelectWindow = new Window_SkillSlotSelect(rect);
        this._slotSelectWindow.setHandler('ok', this.onSlotSelectOk.bind(this));
        this._slotSelectWindow.setHandler('cancel', this.onSlotSelectCancel.bind(this));
        this.addWindow(this._slotSelectWindow);
    };

    Scene_Item.prototype.slotSelectWindowRect = function () {
        const ww = windowWidth || 400;
        const wh = Utils.RPGMAKER_NAME === "MV" ?
            Window_Base.prototype.fittingHeight(visibleCommands || 6) :
            this.calcWindowHeight(visibleCommands || 6, true);
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = (Graphics.boxHeight - wh) / 2;
        if (Utils.RPGMAKER_NAME === "MV") {
            return { x: wx, y: wy, width: ww, height: wh };
        }
        return new Rectangle(wx, wy, ww, wh);
    };

    const _Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;

    Scene_Item.prototype.onItemOk = function () {
        if (isHotbarInitializing) {
            _Scene_Item_onItemOk.call(this);
            return;
        }

        if (!this._slotSelectWindow) {
            this.createSlotSelectWindow();
        }

        if (this._slotSelectWindow) {
            this._slotSelectWindow.setSkill(this.item());
            this._slotSelectWindow.show();
            this._slotSelectWindow.activate();
            this._slotSelectWindow.select(0);
            this._itemWindow.deactivate();
            this._slotSelectWindow.refresh();
        } else {
            _Scene_Item_onItemOk.call(this);
        }
    };

    Scene_Item.prototype.itemTargetsValid = function () {
        const item = this.item();
        if (!item) return false;
        return item.scope === 0 || $gameParty.members().length > 0;
    };

    Scene_Skill.prototype.itemTargetsValid = function () {
        const item = this.item();
        if (!item) return false;
        return item.scope === 0 || this.actor().isSkillWtypeOk(item);
    };

    Scene_Item.prototype.onSlotSelectOk = function () {
        if (this._slotSelectWindow.currentSymbol() === 'use_now') {
            if (this.itemTargetsValid()) {
                this._slotSelectWindow.hide();
                this._slotSelectWindow.deactivate();
                this.determineItem();
            } else {
                SoundManager.playBuzzer();
            }
            return;
        }

        const item = this.item();
        if (isItemDisallowed(item)) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            this._slotSelectWindow.activate();
            return;
        }

        const slotName = this._slotSelectWindow.currentExt();
        const itemId = this.item().id;

        const slot = ALL_AVAILABLE_SLOTS.find(s => s.name === slotName);
        if (slot) {
            slot.slot.setSkill(itemId, this.item().iconIndex);
            _slotData.set(slotName, { type: 'item', id: itemId });
            saveToSystem();
        }

        this.onSlotSelectCancel();
        this._itemWindow.activate();
    };

    Scene_Item.prototype.onSlotSelectCancel = function () {
        this._slotSelectWindow.hide();
        this._slotSelectWindow.deactivate();
        this._itemWindow.activate();
    };

    //-----------------------------------------------------------------------------
    // Special Commands

    Sprite_SkillSlot.prototype.startFlash = function () {
        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        this._flashDuration = 15;
        this._flashColor = [255, 255, 255, 255];
        targetSprite._flashDuration = 15;
    };

    Sprite_SkillSlot.prototype.updateFlash = function () {
        if (this._flashDuration > 0) {
            const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
            const d = this._flashDuration--;
            this._flashColor[3] = (d / 15) * 255;
            targetSprite.setBlendColor(this._flashColor);
        }
    };

    Spriteset_SkillUI.prototype.flashSlot = function (slotName) {
        const slot = this._slots.get(slotName);
        if (slot && _slotData.has(slotName)) {
            slot.startFlash();
        }
    };

    Sprite_SkillSlot.prototype.startCooldown = function (seconds, showTimer = false) {
        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.bitmap) return;

        const loadListener = () => {
            if (!this.parent) return;

            this._cooldownDuration = seconds;
            this._cooldownTotal = seconds;
            this._inCooldown = true;
            this._showTimer = showTimer;

            // Create timer text sprite if showing timer
            if (this._showTimer) {
                if (!this._timerSprite) {
                    this._timerSprite = new Sprite();
                    this._timerSprite.bitmap = new Bitmap(48, 32);
                    this._timerSprite.anchor.x = 0.5;
                    this._timerSprite.anchor.y = 0.5;
                    this.addChild(this._timerSprite);
                }
            }

            _cooldownStates.set(this._config.Name, {
                duration: seconds,
                total: seconds,
                showTimer: showTimer
            });

            this.createCooldownEffect();
        };

        if (targetSprite.bitmap.isReady()) {
            loadListener();
        } else {
            targetSprite.bitmap.addLoadListener(loadListener);
        }
    };

    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.call(this);
        if (this._skillUI) {
            // Recreate cooldown effects for all slots that need them
            for (const [slotName, cooldownData] of _cooldownStates.entries()) {
                const slot = this._skillUI._slots.get(slotName);
                if (slot) {
                    slot._cooldownDuration = cooldownData.duration;
                    slot._cooldownTotal = cooldownData.total;
                    slot._inCooldown = true;
                    slot._showTimer = cooldownData.showTimer;
                    slot.createCooldownEffect();

                    if (cooldownData.showTimer) {
                        slot._timerSprite = new Sprite();
                        slot._timerSprite.bitmap = new Bitmap(48, 32);
                        slot._timerSprite.anchor.x = 0.5;
                        slot._timerSprite.anchor.y = 0.5;
                        slot.addChild(slot._timerSprite);
                    }
                }
            }
        }
        if (this._skillUI && this._skillUI._gamepadGrids.length > 0) {
            this._skillUI.initializeGamepadCursor();
        }
    };

    Sprite_SkillSlot.prototype.createCooldownEffect = function () {
        const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.visible) return;

        // Store original scale before starting cooldown
        this._originalScale = {
            x: targetSprite.scale.x,
            y: targetSprite.scale.y
        };

        const setupCooldown = () => {
            // Create grayscale base
            this._grayscaleClone = new PIXI.Sprite(targetSprite.texture);
            this._grayscaleClone.anchor = targetSprite.anchor;
            this._grayscaleClone.scale = targetSprite.scale;
            this._grayscaleClone.x = targetSprite.x;
            this._grayscaleClone.y = targetSprite.y;

            // Apply grayscale
            this._grayscaleClone.filters = [new PIXI.filters.ColorMatrixFilter()];
            this._grayscaleClone.filters[0].desaturate();

            // Create colored clone
            this._coloredClone = new PIXI.Sprite(targetSprite.texture);
            this._coloredClone.anchor = targetSprite.anchor;
            this._coloredClone.scale = targetSprite.scale;
            this._coloredClone.x = targetSprite.x;
            this._coloredClone.y = targetSprite.y;

            // Setup container
            this._cooldownContainer.removeChildren();
            this._cooldownContainer.addChild(this._grayscaleClone);
            this._cooldownContainer.addChild(this._coloredClone);

            // Create mask
            this._colorMask = new PIXI.Graphics();
            this._cooldownContainer.addChild(this._colorMask);
            this._coloredClone.mask = this._colorMask;

            // Hide only the target sprite
            targetSprite.visible = false;
        };

        if (this._isUsingCustomImage && !targetSprite.bitmap.isReady()) {
            targetSprite.bitmap.addLoadListener(setupCooldown);
        } else {
            setupCooldown();
        }
    };

    Sprite_SkillSlot.prototype.cleanupCooldownEffects = function () {
        const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;

        // Remove and destroy all cooldown-related sprites
        if (this._grayscaleClone) {
            this._cooldownContainer.removeChild(this._grayscaleClone);
            this._grayscaleClone.destroy();
            this._grayscaleClone = null;
        }

        if (this._coloredClone) {
            this._cooldownContainer.removeChild(this._coloredClone);
            this._coloredClone.destroy();
            this._coloredClone = null;
        }

        if (this._colorMask) {
            this._cooldownContainer.removeChild(this._colorMask);
            this._colorMask.destroy();
            this._colorMask = null;
        }

        targetSprite.visible = true;

        this._cooldownContainer.removeChildren();
    };

    Sprite_SkillSlot.prototype.updateCooldown = function () {
        if (!this._inCooldown && this._bounceDuration === 0) return;

        if (this._inCooldown) {
            const key = getGlobalCooldownKey(this._lastItemType, this._lastItemId);
            const remainingFrames = _globalCooldowns.get(key);

            if (!remainingFrames || remainingFrames <= 0) {
                this._inCooldown = false;
                this._bounceDuration = 20;

                if (this._timerSprite) {
                    this.removeChild(this._timerSprite);
                    this._timerSprite = null;
                }

                _cooldownStates.delete(this._config.Name);
                this.cleanupCooldownEffects();
                return;
            }

            // Calculate progress based on remaining frames
            const progress = 1 - (remainingFrames / (this._cooldownTotal * 60));

            // Update timer display if showing
            if (this._showTimer && this._timerSprite) {
                this._timerSprite.bitmap.clear();
                applyFontSettings(this._timerSprite.bitmap);
                const timeText = Math.ceil(remainingFrames / 60).toString();
                this._timerSprite.bitmap.drawText(timeText, 0, 0, 48, 32, 'center');
            }

            // Update mask
            const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
            if (targetSprite && this._colorMask) {
                const height = this._isUsingCustomImage ? targetSprite.height * targetSprite.scale.y : targetSprite.height;
                const width = this._isUsingCustomImage ? targetSprite.width * targetSprite.scale.x : targetSprite.width;
                const maskHeight = height * progress;

                this._colorMask.clear();
                this._colorMask.beginFill(0xFFFFFF);

                const x = targetSprite.x - (width * targetSprite.anchor.x);
                const y = targetSprite.y + height - maskHeight - (height * targetSprite.anchor.y);

                this._colorMask.drawRect(x, y, width, maskHeight);
                this._colorMask.endFill();
            }
        }

        // Update bounce animation
        if (this._bounceDuration > 0) {
            this._bounceDuration--;
            const bounceProgress = this._bounceDuration / 20;
            const bounceScale = 1 + Math.sin(bounceProgress * Math.PI) * (this._isUsingCustomImage ? 0.3 : 0.3);

            const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
            if (targetSprite && this._originalScale) {
                const currentScale = {
                    x: targetSprite.scale.x,
                    y: targetSprite.scale.y
                };

                const targetScale = {
                    x: this._originalScale.x * bounceScale,
                    y: this._originalScale.y * bounceScale
                };

                targetSprite.scale.x = currentScale.x + (targetScale.x - currentScale.x) * 0.4;
                targetSprite.scale.y = currentScale.y + (targetScale.y - currentScale.y) * 0.4;

                if (this._bounceDuration === 0) {
                    targetSprite.scale.x = this._originalScale.x;
                    targetSprite.scale.y = this._originalScale.y;
                    this._originalScale = null;
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.startCooldown = function (seconds, showTimer = false) {
        const data = _slotData.get(this._config.Name);
        if (data) {
            this._lastItemType = data.type;
            this._lastItemId = data.id;
        }

        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.bitmap) return;

        const loadListener = () => {
            if (!this.parent) return;

            this._cooldownTotal = seconds;
            this._inCooldown = true;
            this._showTimer = showTimer;

            if (this._showTimer) {
                if (!this._timerSprite) {
                    this._timerSprite = new Sprite();
                    this._timerSprite.bitmap = new Bitmap(48, 32);
                    this._timerSprite.anchor.x = 0.5;
                    this._timerSprite.anchor.y = 0.5;
                    this.addChild(this._timerSprite);
                }
            }

            this.createCooldownEffect();
        };

        if (targetSprite.bitmap.isReady()) {
            loadListener();
        } else {
            targetSprite.bitmap.addLoadListener(loadListener);
        }
    };

    Spriteset_SkillUI.prototype.startCooldown = function (slotName, seconds, showTimer) {
        const slot = this._slots.get(slotName);
        if (slot && _slotData.has(slotName)) {
            slot.startCooldown(seconds, showTimer);
        }
    };

    //-----------------------------------------------------------------------------
    // Sprite_GamepadCursor
    //
    // The sprite for displaying the gamepad cursor

    function Sprite_GamepadCursor() {
        this.initialize(...arguments);
    }

    Sprite_GamepadCursor.prototype = Object.create(Sprite.prototype);
    Sprite_GamepadCursor.prototype.constructor = Sprite_GamepadCursor;

    Sprite_GamepadCursor.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._targetSlot = null;
        this._currentGrid = null;
        this._currentGridIndex = -1;
        this._currentSlotIndex = -1;
        this.createCursor();
    };

    Sprite_GamepadCursor.prototype.createCursor = function () {
        if (gamepadCursorImage) {
            this.bitmap = ImageManager.loadSystem(gamepadCursorImage);
        } else {
            this.bitmap = new Bitmap(40, 40);
            const ctx = this.bitmap._context;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 38, 38);
        }
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.visible = false;
    };

    Sprite_GamepadCursor.prototype.update = function () {
        Sprite.prototype.update.call(this);
        if (!this._targetSlot || !navigator.getGamepads || !navigator.getGamepads()[0]) {
            this.visible = false;
            return;
        }
        this.visible = true;
        this.x = this._targetSlot.x;
        this.y = this._targetSlot.y;
    };

    //-----------------------------------------------------------------------------
    // Plugin Commands
    if (Utils.RPGMAKER_NAME === "MZ") {
        PluginManager.registerCommand(pluginName, "FlashSlot", function (args) {
            if (SceneManager._scene._skillUI) {
                SceneManager._scene._skillUI.flashSlot(args.Name);
            }
        });

        PluginManager.registerCommand(pluginName, "StartCooldown", function (args) {
            if (SceneManager._scene._skillUI) {
                SceneManager._scene._skillUI.startCooldown(args.Name, Number(args.Seconds), args.ShowTimer === 'true');
            }
        });

        PluginManager.registerCommand(pluginName, "SetSkill", function (args) {
            if (SceneManager._scene._skillUI) {
                SceneManager._scene._skillUI.setSkill(
                    args.Name,
                    Number(args.skillId || 0),
                    Number(args.itemId || 0),
                    Number(args.weaponId || 0)
                );
            }
        });

        PluginManager.registerCommand(pluginName, "RemoveFromSlot", function (args) {
            if (SceneManager._scene._skillUI) {
                const slot = SceneManager._scene._skillUI._slots.get(args.Name);
                if (slot) {
                    slot.setSkill(0, 0);
                    _slotData.delete(args.Name);
                    saveToSystem();
                }
            }
        });

        PluginManager.registerCommand(pluginName, "UseSlot", function (args) {
            if (!SceneManager._scene._skillUI || $gameMessage.isBusy()) return;

            const slotData = _slotData.get(args.Name);
            if (!slotData) return;

            if (isOnGlobalCooldown(slotData.type, slotData.id)) {
                return;
            }

            const actor = $gameParty.leader();
            let success = false;
            let cooldownData = { duration: 0, showTimer: true };

            switch (slotData.type) {
                case 'skill':
                    const skill = $dataSkills[slotData.id];
                    if (skill && actor.canUse(skill)) {
                        const action = new Game_Action(actor);
                        action.setSkill(slotData.id);
                        action.setTarget(0);
                        action.apply(actor);
                        cooldownData = extractCooldown(skill.note);
                        success = true;
                    }
                    break;
                case 'item':
                    const item = $dataItems[slotData.id];
                    if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                        if (item.effects) {
                            const commonEventEffect = item.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        actor.useItem(item);

                        const action = new Game_Action(actor);
                        action.setItemObject(item);
                        action.setTarget(actor.index());
                        action.apply(actor);

                        cooldownData = extractCooldown(item.note);
                        success = true;
                    }
                    break;
                case 'weapon':
                    const weapon = $dataWeapons[slotData.id];
                    if (weapon) {
                        cooldownData = extractCooldown(weapon.note);
                        success = true;
                    }
                    break;
            }

            if (success) {
                $gameParty.members().forEach(member => member.refresh());
                SceneManager._scene._skillUI.flashSlot(args.Name);

                if (cooldownData.duration > 0) {
                    setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                }
            }
        });

        PluginManager.registerCommand(pluginName, "UseSelectedSlot", function (args) {
            if (!SceneManager._scene._skillUI || $gameMessage.isBusy()) return;

            const ui = SceneManager._scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            const slotName = slotConfig.Name;
            const slotData = _slotData.get(slotName);
            if (!slotData) return;

            // Check global cooldown first
            if (isOnGlobalCooldown(slotData.type, slotData.id)) {
                return; // Exit if on cooldown
            }

            const actor = $gameParty.leader();
            let success = false;
            let cooldownData = { duration: 0, showTimer: true };

            switch (slotData.type) {
                case 'skill':
                    const skill = $dataSkills[slotData.id];
                    if (skill && actor.canUse(skill)) {
                        const action = new Game_Action(actor);
                        action.setSkill(slotData.id);
                        action.setTarget(0);
                        action.apply(actor);
                        cooldownData = extractCooldown(skill.note);
                        success = true;
                    }
                    break;
                case 'item':
                    const item = $dataItems[slotData.id];
                    if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                        if (item.effects) {
                            const commonEventEffect = item.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        actor.useItem(item);

                        const action = new Game_Action(actor);
                        action.setItemObject(item);
                        action.setTarget(actor.index());
                        action.apply(actor);

                        cooldownData = extractCooldown(item.note);
                        success = true;
                    }
                    break;
                case 'weapon':
                    const weapon = $dataWeapons[slotData.id];
                    if (weapon) {
                        cooldownData = extractCooldown(weapon.note);
                        success = true;
                    }
                    break;
            }

            if (success) {
                $gameParty.members().forEach(member => member.refresh());
                SceneManager._scene._skillUI.flashSlot(slotName);

                if (cooldownData.duration > 0) {
                    setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                }
            }
        });

        PluginManager.registerCommand(pluginName, "FlashSelectedSlot", function (args) {
            const scene = SceneManager._scene;
            if (!scene || !scene._skillUI) return;

            const ui = scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            ui.flashSlot(slotConfig.Name);
        });

        PluginManager.registerCommand(pluginName, "StartCooldownSelectedSlot", function (args) {
            const scene = SceneManager._scene;
            if (!scene || !scene._skillUI) return;

            const ui = scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            ui.startCooldown(slotConfig.Name, Number(args.Seconds), args.ShowTimer === 'true');
        });

        PluginManager.registerCommand(pluginName, "PushNextStuff", function (args) {
            if (!SceneManager._scene._skillUI) return;

            const slot = SceneManager._scene._skillUI._slots.get(args.Name);
            if (!slot) return;

            const actor = $gameParty.leader();
            if (!actor) return;

            switch (args.Type) {
                case 'Weapon':
                    const currentWeaponId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableWeapons = $gameParty.weapons().filter(weapon =>
                        actor.canEquip(weapon)
                    );

                    if (availableWeapons.length > 0) {
                        let nextWeapon = null;
                        if (currentWeaponId === 0) {
                            nextWeapon = availableWeapons[0];
                        } else {
                            const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                            if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                nextWeapon = availableWeapons[currentIndex + 1];
                            } else {
                                nextWeapon = availableWeapons[0];
                            }
                        }

                        if (nextWeapon) {
                            slot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                            _slotData.set(args.Name, { type: 'weapon', id: nextWeapon.id });

                            actor.changeEquip(0, nextWeapon);
                        }
                    }
                    break;

                case 'Shield':
                    const currentShieldId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableShields = $gameParty.armors().filter(armor =>
                        armor.atypeId === 1 && actor.canEquip(armor)
                    );

                    if (availableShields.length > 0) {
                        let nextShield = null;
                        if (currentShieldId === 0) {
                            nextShield = availableShields[0];
                        } else {
                            const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                            if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                nextShield = availableShields[currentIndex + 1];
                            } else {
                                nextShield = availableShields[0];
                            }
                        }

                        if (nextShield) {
                            slot.setSkill(nextShield.id, nextShield.iconIndex);
                            _slotData.set(args.Name, { type: 'armor', id: nextShield.id });

                            actor.changeEquip(1, nextShield);
                        }
                    }
                    break;

                case 'Item':
                    const currentItemId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableItems = $gameParty.items().filter(item =>
                        actor.canUse(item)
                    );

                    if (availableItems.length > 0) {
                        let nextItem = null;
                        if (currentItemId === 0) {
                            nextItem = availableItems[0];
                        } else {
                            const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                            if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                nextItem = availableItems[currentIndex + 1];
                            } else {
                                nextItem = availableItems[0];
                            }
                        }

                        if (nextItem) {
                            slot.setSkill(nextItem.id, nextItem.iconIndex);
                            _slotData.set(args.Name, { type: 'item', id: nextItem.id });
                        }
                    }
                    break;

                case 'Skill':
                    const currentSkillId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableSkills = actor.skills().filter(skill =>
                        actor.canUse(skill)
                    );

                    if (availableSkills.length > 0) {
                        let nextSkill = null;
                        if (currentSkillId === 0) {
                            nextSkill = availableSkills[0];
                        } else {
                            const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                            if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                nextSkill = availableSkills[currentIndex + 1];
                            } else {
                                nextSkill = availableSkills[0];
                            }
                        }

                        if (nextSkill) {
                            slot.setSkill(nextSkill.id, nextSkill.iconIndex);
                            _slotData.set(args.Name, { type: 'skill', id: nextSkill.id });
                        }
                    }
                    break;
            }
            saveToSystem();
        });

        PluginManager.registerCommand(pluginName, "GamepadPushNextStuff", function (args) {
            const scene = SceneManager._scene;
            if (!scene || !scene._skillUI) return;

            const ui = scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            const slotName = slotConfig.Name;
            const slot = ui._slots.get(slotName);
            if (!slot) return;

            const actor = $gameParty.leader();
            if (!actor) return;

            switch (args.Type) {
                case 'Weapon':
                    const currentWeaponId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableWeapons = $gameParty.weapons().filter(weapon =>
                        actor.canEquip(weapon)
                    );

                    if (availableWeapons.length > 0) {
                        let nextWeapon = null;
                        if (currentWeaponId === 0) {
                            nextWeapon = availableWeapons[0];
                        } else {
                            const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                            if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                nextWeapon = availableWeapons[currentIndex + 1];
                            } else {
                                nextWeapon = availableWeapons[0];
                            }
                        }

                        if (nextWeapon) {
                            slot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                            _slotData.set(slotName, { type: 'weapon', id: nextWeapon.id });

                            actor.changeEquip(0, nextWeapon);
                        }
                    }
                    break;

                case 'Shield':
                    const currentShieldId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableShields = $gameParty.armors().filter(armor =>
                        armor.atypeId === 1 && actor.canEquip(armor)
                    );

                    if (availableShields.length > 0) {
                        let nextShield = null;
                        if (currentShieldId === 0) {
                            nextShield = availableShields[0];
                        } else {
                            const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                            if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                nextShield = availableShields[currentIndex + 1];
                            } else {
                                nextShield = availableShields[0];
                            }
                        }

                        if (nextShield) {
                            slot.setSkill(nextShield.id, nextShield.iconIndex);
                            _slotData.set(slotName, { type: 'armor', id: nextShield.id });

                            actor.changeEquip(1, nextShield);
                        }
                    }
                    break;

                case 'Item':
                    const currentItemId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableItems = $gameParty.items().filter(item =>
                        actor.canUse(item)
                    );

                    if (availableItems.length > 0) {
                        let nextItem = null;
                        if (currentItemId === 0) {
                            nextItem = availableItems[0];
                        } else {
                            const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                            if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                nextItem = availableItems[currentIndex + 1];
                            } else {
                                nextItem = availableItems[0];
                            }
                        }

                        if (nextItem) {
                            slot.setSkill(nextItem.id, nextItem.iconIndex);
                            _slotData.set(slotName, { type: 'item', id: nextItem.id });
                        }
                    }
                    break;

                case 'Skill':
                    const currentSkillId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableSkills = actor.skills().filter(skill =>
                        actor.canUse(skill)
                    );

                    if (availableSkills.length > 0) {
                        let nextSkill = null;
                        if (currentSkillId === 0) {
                            nextSkill = availableSkills[0];
                        } else {
                            const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                            if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                nextSkill = availableSkills[currentIndex + 1];
                            } else {
                                nextSkill = availableSkills[0];
                            }
                        }

                        if (nextSkill) {
                            slot.setSkill(nextSkill.id, nextSkill.iconIndex);
                            _slotData.set(slotName, { type: 'skill', id: nextSkill.id });
                        }
                    }
                    break;
            }
            saveToSystem();
        });

        PluginManager.registerCommand(pluginName, "StartCooldownForThing", function (args) {
            var name = args.Name;
            var duration = args.Time === 'notetag' ? null : Number(args.Time);
            var showTimer = args.ShowTimer === 'true';
            var found = false;
            var itemData;

            for (var i = 1; i < $dataItems.length; i++) {
                if ($dataItems[i] && $dataItems[i].name === name) {
                    itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataItems[i].note);
                    setGlobalCooldown('item', i, itemData.duration, showTimer);
                    found = true;
                    break;
                }
            }

            if (!found) {
                for (var i = 1; i < $dataSkills.length; i++) {
                    if ($dataSkills[i] && $dataSkills[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataSkills[i].note);
                        setGlobalCooldown('skill', i, itemData.duration, showTimer);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (var i = 1; i < $dataWeapons.length; i++) {
                    if ($dataWeapons[i] && $dataWeapons[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataWeapons[i].note);
                        setGlobalCooldown('weapon', i, itemData.duration, showTimer);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (var i = 1; i < $dataArmors.length; i++) {
                    if ($dataArmors[i] && $dataArmors[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataArmors[i].note);
                        setGlobalCooldown('armor', i, itemData.duration, showTimer);
                        break;
                    }
                }
            }
        });
    }

    //-----------------------------------------------------------------------------
    // Conditional Branch commands

    // Check if a Slot Name contains something
    // isSlot('Slot Button G', 'Fire Disc') -> Return true if Slot Button G has a skill named Fire Disc
    // isSlot('Slot Button G', 'mpCost') -> Return the MP cost of the skill in Slot Button G
    // isSlot('Slot Button G', 'Iron Sword') -> Return true if Slot Button G has weapon Iron Sword
    window.isSlot = function (slotName, query) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let equippedItem;
        switch (slotData.type) {
            case 'skill':
                equippedItem = $dataSkills[slotData.id];
                if (query === 'mpCost' && equippedItem) {
                    return $gameParty.leader().skillMpCost(equippedItem);
                }
                break;
            case 'item':
                equippedItem = $dataItems[slotData.id];
                break;
            case 'weapon':
                equippedItem = $dataWeapons[slotData.id];
                break;
            case 'armor':
                equippedItem = $dataArmors[slotData.id];
                break;
        }

        if (!equippedItem) return false;

        if (typeof query === 'number') {
            return slotData.id === query;
        } else if (typeof query === 'string') {
            return equippedItem.name.toLowerCase() === query.toLowerCase();
        } else {
            return equippedItem[query];
        }
    };

    window.isSlotType = function (slotName, typeName) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let item;
        if ($dataSkills[slotData.id]) {
            item = $dataSkills[slotData.id];
        } else if ($dataWeapons[slotData.id]) {
            item = $dataWeapons[slotData.id];
        } else if ($dataItems[slotData.id]) {
            item = $dataItems[slotData.id];
        } else if ($dataArmors[slotData.id]) {
            item = $dataArmors[slotData.id];
        }
        if (!item) return false;

        const query = typeName.toLowerCase();

        // Skill type check
        if (item.stypeId) {
            const skillTypeName = $dataSystem.skillTypes[item.stypeId];
            if (skillTypeName.toLowerCase() === query) return true;
        }

        // Weapon type check
        if (item.wtypeId) {
            const weaponTypeName = $dataSystem.weaponTypes[item.wtypeId];
            if (weaponTypeName.toLowerCase() === query) return true;
        }

        // Armor type check
        if (item.atypeId) {
            const armorTypeName = $dataSystem.armorTypes[item.atypeId];
            if (armorTypeName.toLowerCase() === query) return true;
        }

        // Equipment type check for armors
        if (item.etypeId) {
            const equipTypeName = $dataSystem.equipTypes[item.etypeId];
            if (equipTypeName.toLowerCase() === query) return true;
        }

        // Element check
        const elements = (item.damage ? item.damage.elementId : null);
        if (elements) {
            const elementName = $dataSystem.elements[elements];
            if (elementName.toLowerCase() === query) return true;
        }

        return false;
    };

    window.isSlotEmpty = function (slotName) {
        return !_slotData.has(slotName);
    };

    window.isSlotOnCooldown = function (slotName) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return 0;

        const slot = scene._skillUI._slots.get(slotName);
        if (!slot || !slot._inCooldown) return 0;

        return slot._cooldownDuration || 0;
    };

    window.isSlotMpCost = function (slotName) {
        const data = _slotData.get(slotName);
        if (!data || data.type !== 'skill') return 0;

        const skill = $dataSkills[data.id];
        return skill ? $gameParty.leader().skillMpCost(skill) : 0;
    };

    window.isSelectedSlot = function (name) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return false;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return false;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return false;

        const slotName = slotConfig.Name;
        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let item;
        switch (slotData.type) {
            case 'skill':
                item = $dataSkills[slotData.id];
                break;
            case 'item':
                item = $dataItems[slotData.id];
                break;
            case 'weapon':
                item = $dataWeapons[slotData.id];
                break;
            case 'armor':
                item = $dataArmors[slotData.id];
                break;
        }

        if (!item) return false;

        return item.name.toLowerCase() === name.toLowerCase();
    };

    window.isSelectedSlotOnCooldown = function () {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return false;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return false;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return false;

        const slot = ui._slots.get(slotConfig.Name);
        if (!slot || !slot._inCooldown) return 0;

        return slot._cooldownDuration || 0;
    };

    window.isSelectedSlotEmpty = function () {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return true;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return true;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return true;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return true;

        const slotName = slotConfig.Name;
        return !_slotData.has(slotName);
    };

    window.isGamepad = function () {
        const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
        return !!gamepad;
    };

    window.isGamepadTriggered = function (buttonName) {
        const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
        if (!gamepad) return false;

        const buttonIndex = GamepadButtons[buttonName];
        if (buttonIndex === undefined) return false;

        const button = gamepad.buttons[buttonIndex];
        if (!button) return false;

        if (!window._prevGamepadStates) window._prevGamepadStates = {};
        const wasPressed = window._prevGamepadStates[buttonName];
        window._prevGamepadStates[buttonName] = button.pressed;

        return button.pressed && !wasPressed;
    };

    window.isGamepadPressed = function (buttonName) {
        const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
        if (!gamepad) return false;

        const buttonIndex = GamepadButtons[buttonName];
        if (buttonIndex === undefined) return false;

        const button = gamepad.buttons[buttonIndex];
        return button ? button.pressed : false;
    };

    window.isThingOnCooldown = function (name) {
        var found = false;

        for (var i = 1; i < $dataItems.length; i++) {
            if ($dataItems[i] && $dataItems[i].name === name) {
                if (isOnGlobalCooldown('item', i)) {
                    return true;
                }
                found = true;
                break;
            }
        }

        if (!found) {
            for (var i = 1; i < $dataSkills.length; i++) {
                if ($dataSkills[i] && $dataSkills[i].name === name) {
                    if (isOnGlobalCooldown('skill', i)) {
                        return true;
                    }
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            for (var i = 1; i < $dataWeapons.length; i++) {
                if ($dataWeapons[i] && $dataWeapons[i].name === name) {
                    if (isOnGlobalCooldown('weapon', i)) {
                        return true;
                    }
                    found = true;
                    break;
                }
            }
        }

        if (!found) {
            for (var i = 1; i < $dataArmors.length; i++) {
                if ($dataArmors[i] && $dataArmors[i].name === name) {
                    if (isOnGlobalCooldown('armor', i)) {
                        return true;
                    }
                    found = true;
                    break;
                }
            }
        }

        return false;
    };

    // MV SCRIPT CALLS ==========================================================
    if (Utils.RPGMAKER_NAME === "MV") {
        const parseSlotName = function (args) {
            // Join all arguments to handle potential spaces
            const fullText = args.join(' ');

            // Look for text within square brackets
            const matches = fullText.match(/\[(.*?)\]/);
            if (matches) {
                // Return the text within brackets
                return matches[1];
            }

            // If no brackets found, return the first argument
            return args[0];
        };


        const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand.call(this, command, args);

            switch (command) {
                case 'FlashSlot':
                    if (SceneManager._scene._skillUI) {
                        SceneManager._scene._skillUI.flashSlot(parseSlotName(args));
                    }
                    break;

                case 'StartCooldown':
                    if (SceneManager._scene._skillUI) {
                        SceneManager._scene._skillUI.startCooldown(
                            parseSlotName(args),
                            Number(args[1]), // Seconds 
                            args[2] === 'true' // ShowTimer
                        );
                    }
                    break;

                case 'StartCooldownForThing':
                    var thingName = parseSlotName(args);
                    var duration = args[1] === 'notetag' ? null : Number(args[1]);
                    var showTimer = args[2] === 'true';
                    var found = false;
                    var itemData;

                    for (var i = 1; i < $dataItems.length; i++) {
                        if ($dataItems[i] && $dataItems[i].name === thingName) {
                            itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataItems[i].note);
                            setGlobalCooldown('item', i, itemData.duration, showTimer);
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        for (var i = 1; i < $dataSkills.length; i++) {
                            if ($dataSkills[i] && $dataSkills[i].name === thingName) {
                                itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataSkills[i].note);
                                setGlobalCooldown('skill', i, itemData.duration, showTimer);
                                found = true;
                                break;
                            }
                        }
                    }

                    if (!found) {
                        for (var i = 1; i < $dataWeapons.length; i++) {
                            if ($dataWeapons[i] && $dataWeapons[i].name === thingName) {
                                itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataWeapons[i].note);
                                setGlobalCooldown('weapon', i, itemData.duration, showTimer);
                                found = true;
                                break;
                            }
                        }
                    }

                    if (!found) {
                        for (var i = 1; i < $dataArmors.length; i++) {
                            if ($dataArmors[i] && $dataArmors[i].name === thingName) {
                                itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataArmors[i].note);
                                setGlobalCooldown('armor', i, itemData.duration, showTimer);
                                break;
                            }
                        }
                    }
                    break;

                case 'SetToSlot':
                    if (SceneManager._scene._skillUI) {
                        SceneManager._scene._skillUI.setSkill(
                            parseSlotName(args), // Name
                            Number(args[1] || 0), // skillId
                            Number(args[2] || 0), // itemId
                            Number(args[3] || 0)  // weaponId
                        );
                    }
                    break;

                case 'RemoveFromSlot':
                    if (SceneManager._scene._skillUI) {
                        const slot = SceneManager._scene._skillUI._slots.get(parseSlotName(args));
                        if (slot) {
                            slot.setSkill(0, 0);
                            _slotData.delete(parseSlotName(args));
                            saveToSystem();
                        }
                    }
                    break;

                case 'UseSlot':
                    if (!SceneManager._scene._skillUI || $gameMessage.isBusy()) return;

                    const slotData = _slotData.get(parseSlotName(args));
                    if (!slotData) return;

                    if (isOnGlobalCooldown(slotData.type, slotData.id)) return;

                    const actor = $gameParty.leader();
                    let success = false;
                    let cooldownData = { duration: 0, showTimer: true };

                    switch (slotData.type) {
                        case 'skill':
                            const skill = $dataSkills[slotData.id];
                            if (skill && actor.canUse(skill)) {
                                const action = new Game_Action(actor);
                                action.setSkill(slotData.id);
                                action.setTarget(0);
                                action.apply(actor);
                                cooldownData = extractCooldown(skill.note);
                                success = true;
                            }
                            break;
                        case 'item':
                            const item = $dataItems[slotData.id];
                            if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                                if (item.effects) {
                                    const commonEventEffect = item.effects.find(effect => effect.code === 44);
                                    if (commonEventEffect && $gameMap._interpreter) {
                                        $gameMap._interpreter.clear();
                                        $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                    }
                                }

                                actor.useItem(item);

                                const action = new Game_Action(actor);
                                action.setItemObject(item);
                                action.setTarget(actor.index());
                                action.apply(actor);

                                cooldownData = extractCooldown(item.note);
                                success = true;
                            }
                            break;
                        case 'weapon':
                            const weapon = $dataWeapons[slotData.id];
                            if (weapon) {
                                cooldownData = extractCooldown(weapon.note);
                                success = true;
                            }
                            break;
                    }

                    if (success) {
                        $gameParty.members().forEach(member => member.refresh());
                        SceneManager._scene._skillUI.flashSlot(parseSlotName(args));

                        if (cooldownData.duration > 0) {
                            setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                        }
                    }
                    break;

                case 'UseSelectedSlot':
                    if (!SceneManager._scene._skillUI || $gameMessage.isBusy()) return;

                    const ui = SceneManager._scene._skillUI;
                    if (!ui._gamepadCursor._targetSlot) return;

                    const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
                    if (!currentGrid) return;

                    const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
                    if (!slotConfig) return;

                    const selectedSlotName = slotConfig.Name;
                    const selectedSlotData = _slotData.get(selectedSlotName);
                    if (!selectedSlotData) return;

                    if (isOnGlobalCooldown(selectedSlotData.type, selectedSlotData.id)) return;

                    const selectedActor = $gameParty.leader();
                    let selectedSuccess = false;
                    let selectedCooldownData = { duration: 0, showTimer: true };

                    switch (selectedSlotData.type) {
                        case 'skill':
                            const skill = $dataSkills[selectedSlotData.id];
                            if (skill && selectedActor.canUse(skill)) {
                                const action = new Game_Action(selectedActor);
                                action.setSkill(selectedSlotData.id);
                                action.setTarget(0);
                                action.apply(selectedActor);
                                selectedCooldownData = extractCooldown(skill.note);
                                selectedSuccess = true;
                            }
                            break;
                        case 'item':
                            const item = $dataItems[selectedSlotData.id];
                            if (item && $gameParty.hasItem(item) && selectedActor.canUse(item)) {
                                if (item.effects) {
                                    const commonEventEffect = item.effects.find(effect => effect.code === 44);
                                    if (commonEventEffect && $gameMap._interpreter) {
                                        $gameMap._interpreter.clear();
                                        $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                    }
                                }

                                selectedActor.useItem(item);

                                const action = new Game_Action(selectedActor);
                                action.setItemObject(item);
                                action.setTarget(selectedActor.index());
                                action.apply(selectedActor);

                                selectedCooldownData = extractCooldown(item.note);
                                selectedSuccess = true;
                            }
                            break;
                        case 'weapon':
                            const weapon = $dataWeapons[selectedSlotData.id];
                            if (weapon) {
                                selectedCooldownData = extractCooldown(weapon.note);
                                selectedSuccess = true;
                            }
                            break;
                    }

                    if (selectedSuccess) {
                        $gameParty.members().forEach(member => member.refresh());
                        SceneManager._scene._skillUI.flashSlot(selectedSlotName);

                        if (selectedCooldownData.duration > 0) {
                            setGlobalCooldown(selectedSlotData.type, selectedSlotData.id, selectedCooldownData.duration, selectedCooldownData.showTimer);
                        }
                    }
                    break;

                case 'FlashSelectedSlot':
                    const flashScene = SceneManager._scene;
                    if (!flashScene || !flashScene._skillUI) return;

                    const flashUi = flashScene._skillUI;
                    if (!flashUi._gamepadCursor._targetSlot) return;

                    const flashGrid = flashUi._gamepadGrids[flashUi._gamepadCursor._currentGridIndex];
                    if (!flashGrid) return;

                    const flashSlotConfig = flashGrid.slots[flashUi._gamepadCursor._currentSlotIndex];
                    if (!flashSlotConfig) return;

                    flashUi.flashSlot(flashSlotConfig.Name);
                    break;

                case 'StartCooldownSelectedSlot':
                    const cooldownScene = SceneManager._scene;
                    if (!cooldownScene || !cooldownScene._skillUI) return;

                    const cooldownUi = cooldownScene._skillUI;
                    if (!cooldownUi._gamepadCursor._targetSlot) return;

                    const cooldownGrid = cooldownUi._gamepadGrids[cooldownUi._gamepadCursor._currentGridIndex];
                    if (!cooldownGrid) return;

                    const cooldownSlotConfig = cooldownGrid.slots[cooldownUi._gamepadCursor._currentSlotIndex];
                    if (!cooldownSlotConfig) return;

                    cooldownUi.startCooldown(
                        cooldownSlotConfig.Name,
                        Number(args[0]), // Seconds
                        args[1] === 'true' // ShowTimer
                    );
                    break;

                case 'PushNextStuff':
                    if (!SceneManager._scene._skillUI) return;

                    const pushSlot = SceneManager._scene._skillUI._slots.get(parseSlotName(args));
                    if (!pushSlot) return;

                    const pushActor = $gameParty.leader();
                    if (!pushActor) return;

                    switch (args[1]) {
                        case 'Weapon':
                            const currentWeaponId = (_slotData.get(parseSlotName(args)) ? _slotData.get(parseSlotName(args)).id : 0);
                            const availableWeapons = $gameParty.weapons().filter(weapon =>
                                pushActor.canEquip(weapon)
                            );

                            if (availableWeapons.length > 0) {
                                let nextWeapon = null;
                                if (currentWeaponId === 0) {
                                    nextWeapon = availableWeapons[0];
                                } else {
                                    const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                                    if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                        nextWeapon = availableWeapons[currentIndex + 1];
                                    } else {
                                        nextWeapon = availableWeapons[0];
                                    }
                                }

                                if (nextWeapon) {
                                    pushSlot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                                    _slotData.set(parseSlotName(args), { type: 'weapon', id: nextWeapon.id });
                                    pushActor.changeEquip(0, nextWeapon);
                                }
                            }
                            break;

                        case 'Shield':
                            const currentShieldId = (_slotData.get(parseSlotName(args)) ? _slotData.get(parseSlotName(args)).id : 0);
                            const availableShields = $gameParty.armors().filter(armor =>
                                armor.atypeId === 1 && pushActor.canEquip(armor)
                            );

                            if (availableShields.length > 0) {
                                let nextShield = null;
                                if (currentShieldId === 0) {
                                    nextShield = availableShields[0];
                                } else {
                                    const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                                    if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                        nextShield = availableShields[currentIndex + 1];
                                    } else {
                                        nextShield = availableShields[0];
                                    }
                                }

                                if (nextShield) {
                                    pushSlot.setSkill(nextShield.id, nextShield.iconIndex);
                                    _slotData.set(parseSlotName(args), { type: 'armor', id: nextShield.id });
                                    pushActor.changeEquip(1, nextShield);
                                }
                            }
                            break;

                        case 'Item':
                            const currentItemId = (_slotData.get(parseSlotName(args)) ? _slotData.get(parseSlotName(args)).id : 0);
                            const availableItems = $gameParty.items().filter(item =>
                                pushActor.canUse(item)
                            );

                            if (availableItems.length > 0) {
                                let nextItem = null;
                                if (currentItemId === 0) {
                                    nextItem = availableItems[0];
                                } else {
                                    const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                                    if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                        nextItem = availableItems[currentIndex + 1];
                                    } else {
                                        nextItem = availableItems[0];
                                    }
                                }

                                if (nextItem) {
                                    pushSlot.setSkill(nextItem.id, nextItem.iconIndex);
                                    _slotData.set(parseSlotName(args), { type: 'item', id: nextItem.id });
                                }
                            }
                            break;

                        case 'Skill':
                            const currentSkillId = (_slotData.get(parseSlotName(args)) ? _slotData.get(parseSlotName(args)).id : 0);
                            const availableSkills = pushActor.skills().filter(skill =>
                                pushActor.canUse(skill)
                            );

                            if (availableSkills.length > 0) {
                                let nextSkill = null;
                                if (currentSkillId === 0) {
                                    nextSkill = availableSkills[0];
                                } else {
                                    const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                                    if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                        nextSkill = availableSkills[currentIndex + 1];
                                    } else {
                                        nextSkill = availableSkills[0];
                                    }
                                }

                                if (nextSkill) {
                                    pushSlot.setSkill(nextSkill.id, nextSkill.iconIndex);
                                    _slotData.set(parseSlotName(args), { type: 'skill', id: nextSkill.id });
                                }
                            }
                            break;
                    }
                    saveToSystem();
                    break;

                case 'GamepadPushNextStuff':
                    const gamepadScene = SceneManager._scene;
                    if (!gamepadScene || !gamepadScene._skillUI) return;

                    const gamepadUi = gamepadScene._skillUI;
                    if (!gamepadUi._gamepadCursor._targetSlot) return;

                    const gamepadGrid = gamepadUi._gamepadGrids[gamepadUi._gamepadCursor._currentGridIndex];
                    if (!gamepadGrid) return;

                    const gamepadSlotConfig = gamepadGrid.slots[gamepadUi._gamepadCursor._currentSlotIndex];
                    if (!gamepadSlotConfig) return;

                    const gamepadSlotName = gamepadSlotConfig.Name;
                    const gamepadSlot = gamepadUi._slots.get(gamepadSlotName);
                    if (!gamepadSlot) return;

                    const gamepadActor = $gameParty.leader();
                    if (!gamepadActor) return;

                    switch (args[0]) { // Type
                        case 'Weapon':
                            const currentWeaponId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableWeapons = $gameParty.weapons().filter(weapon =>
                                gamepadActor.canEquip(weapon)
                            );

                            if (availableWeapons.length > 0) {
                                let nextWeapon = null;
                                if (currentWeaponId === 0) {
                                    nextWeapon = availableWeapons[0];
                                } else {
                                    const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                                    if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                        nextWeapon = availableWeapons[currentIndex + 1];
                                    } else {
                                        nextWeapon = availableWeapons[0];
                                    }
                                }

                                if (nextWeapon) {
                                    gamepadSlot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'weapon', id: nextWeapon.id });
                                    gamepadActor.changeEquip(0, nextWeapon);
                                }
                            }
                            break;

                        case 'Shield':
                            const currentShieldId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableShields = $gameParty.armors().filter(armor =>
                                armor.atypeId === 1 && gamepadActor.canEquip(armor)
                            );

                            if (availableShields.length > 0) {
                                let nextShield = null;
                                if (currentShieldId === 0) {
                                    nextShield = availableShields[0];
                                } else {
                                    const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                                    if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                        nextShield = availableShields[currentIndex + 1];
                                    } else {
                                        nextShield = availableShields[0];
                                    }
                                }

                                if (nextShield) {
                                    gamepadSlot.setSkill(nextShield.id, nextShield.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'armor', id: nextShield.id });
                                    gamepadActor.changeEquip(1, nextShield);
                                }
                            }
                            break;

                        case 'Item':
                            const currentItemId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableItems = $gameParty.items().filter(item =>
                                gamepadActor.canUse(item)
                            );

                            if (availableItems.length > 0) {
                                let nextItem = null;
                                if (currentItemId === 0) {
                                    nextItem = availableItems[0];
                                } else {
                                    const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                                    if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                        nextItem = availableItems[currentIndex + 1];
                                    } else {
                                        nextItem = availableItems[0];
                                    }
                                }

                                if (nextItem) {
                                    gamepadSlot.setSkill(nextItem.id, nextItem.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'item', id: nextItem.id });
                                }
                            }
                            break;

                        case 'Skill':
                            const currentSkillId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableSkills = gamepadActor.skills().filter(skill =>
                                gamepadActor.canUse(skill)
                            );

                            if (availableSkills.length > 0) {
                                let nextSkill = null;
                                if (currentSkillId === 0) {
                                    nextSkill = availableSkills[0];
                                } else {
                                    const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                                    if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                        nextSkill = availableSkills[currentIndex + 1];
                                    } else {
                                        nextSkill = availableSkills[0];
                                    }
                                }

                                if (nextSkill) {
                                    gamepadSlot.setSkill(nextSkill.id, nextSkill.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'skill', id: nextSkill.id });
                                }
                            }
                            break;
                    }

                    saveToSystem();
                    break;
            }
        };
    }

    // Clear data when new game and load game
    const _DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _DataManager_createGameObjects.call(this);
        _slotData.clear();
        _cooldownStates.clear();
        _globalCooldowns.clear();
        if (SceneManager._scene && SceneManager._scene._skillUI) {
            SceneManager._scene._skillUI._slots.forEach(slot => {
                slot.setSkill(0, 0);
            });
        }
    };

    const _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _DataManager_extractSaveContents.call(this, contents);
        _slotData.clear();
        _cooldownStates.clear();
        _globalCooldowns.clear();

        // Restore from saved data after cleared
        if ($gameSystem._uiSlotData) {
            Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                _slotData.set(key, value);
            });
        }
    };

    initializeKeyMapping();

    // param AdditionalTextDisplays
    // text Additional Text Displays
    // type struct<AdditionalTextDisplay>[]
    // desc Show text on slots, only for hardcore people. Pls use simpler method which is notetag <slot text: text>
    // default []
})();

