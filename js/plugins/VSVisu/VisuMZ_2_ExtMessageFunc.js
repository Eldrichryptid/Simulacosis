//=============================================================================
// VisuStella MZ - Extended Message Functionality
// VisuMZ_2_ExtMessageFunc.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_ExtMessageFunc = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ExtMessageFunc = VisuMZ.ExtMessageFunc || {};
VisuMZ.ExtMessageFunc.version = 1.18;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.18] [ExtMessageFunc]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Extended_Message_Functionality_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Extended Message Function plugin adds onto RPG Maker MZ's Message Window
 * and adds in various features you would normally see found in modern RPG's.
 * Things like automatically moving the text forward after a set amount of time
 * or fast forward are available. Saving and loading during a message is also
 * possible as well as going to the Options menu or returning back to the title
 * screen. These options are only available to the Message Window on the map
 * scene and do not work in battle.
 *
 * Features include all (but not limited to) the following:
 * 
 * * The Button Console appears on the Message Window let the player activate
 *   various commands via touch/click.
 * * Extended Fast Forward Mode is an expanded feature upon the Message Core's
 *   Fast Forward function to fast forward all events and not just messages.
 *   This can be optionally disabled.
 * * A Message Cursor will appear where the text has ended for those who want
 *   that kind of aesthetic in their game.
 * * Auto-Forward will automatically move messages onward after a certain
 *   amount of time has passed. Time required will be determined based on the
 *   length of the message in question.
 * * Saving and Loading can be done from the Message Window akin to how many
 *   visual novels work. Requires the Save Core, but you're already using that,
 *   right? Right?
 * * Also be able to jump straight into the Options scene from the Message
 *   Window to change any settings on the fly. Requires the Options Core, but
 *   you're using that, too, correct?
 * * And for those who want to jump back to the title screen, they can do so
 *   by selecting a Game End option, too.
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
 * VisuMZ_1_OptionsCore
 *
 * The Options Core is a required plugin in order to make use of the "Options"
 * (aka "Config") button found in the Button Console.
 *
 * ---
 *
 * VisuMZ_1_SaveCore
 *
 * The Options Core is a required plugin in order to make use of the "Save" and
 * "Load" buttons found in the Button Console.
 *
 * ---
 * 
 * VisuMZ_3_MessageLog
 * 
 * The Message Log plugin enables the "Log" button found in the Button Console
 * to let the player go and review the text that has been displayed in the map
 * scene. This does not include the text found in battle to avoid conflicting
 * logged messages across different situations.
 * 
 * ---
 * 
 * VisuMZ_4_MessageVisibility
 * 
 * The Message Visibility plugin enables the "Hide" button found in the
 * Button Console to make the Message Window visible or invisible.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Button Console-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Hide Buttons>         Hides the Button Console from this current Message
 *                        Window's text assuming that nothing else is hiding
 *                        the Button Console from view.
 * 
 * ---
 * 
 * === Message Tail-Related Text Codes ===
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect (Message Window Only)
 * --------------------   -----------------------------------------------------
 * 
 * <Tail Bottom Left: x>  Creates a message tail at x coordinate pointing to
 *                        the bottom left.
 * <Tail Bottom Right: x> Creates a message tail at x coordinate pointing to
 *                        the bottom right.
 * <Tail Upper Left: x>   Creates a message tail at x coordinate pointing to
 *                        the upper left.
 * <Tail Upper Right: x>  Creates a message tail at x coordinate pointing to
 *                        the upper right.
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
 * === Fast Forward Plugin Commands ===
 * 
 * ---
 *
 * Fast Forward: Allow/Disallow
 * - Change whether or not Fast Forward is allowed/disallowed.
 * - Must be enabled by the Plugin Parameters.
 *
 *   Allow?:
 *   - Allow or disallow the Extended Fast Forward feature?
 *   - Must be enabled by the Plugin Parameters.
 *
 * ---
 * 
 * === Message Button Console Plugin Commands ===
 * 
 * ---
 *
 * Message Button Console: Show/Hide
 * - Determine if the Message Button Console is visible or hidden.
 * - Only appears on the map. 
 * - Does not appear in battle.
 *
 *   Visible?:
 *   - Show or hide the Message Button Console feature?
 *   - Only appears on the map.
 *   - Does not appear in battle.
 *
 * ---
 * 
 * === Message Cursor Plugin Commands ===
 * 
 * ---
 *
 * Message Cursor: Change Settings
 * - Change the Message Cursor settings used.
 *
 *   Change Settings:
 *   - Change the Message Cursor settings.
 *   - Settings are the same as the ones found in the Plugin Parameters.
 *
 * ---
 * 
 * === Message Tail Plugin Commands ===
 * 
 * ---
 * 
 * Message Tail: Change Settings
 * - Change the Message Tail settings.
 * 
 *   Message Tail Settings:
 *   - Message Tail settings used for Message Windows.
 *   - Requires images and text codes to appear.
 *   - See Plugin Parameters. They have the same parameters.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Forward Settings
 * ============================================================================
 *
 * Auto-Forward settings used for this game. Auto-Forward is a feature that
 * once enabled, the game will automatically move the "Show Text" event
 * commands forward after a certain amount of time. The amount of time will be
 * determined by how many characters are displayed on the screen. There is a
 * lower boundary, where if the wait time does not meet the amount, the timer
 * will be set to the minimum wait value instead.
 *
 * ---
 *
 * Settings
 * 
 *   Wait per Character:
 *   - How many frames should the game wait per character?
 *   - Average: 60 frames per second.
 * 
 *   Minimum Wait:
 *   - What is the minimum amount of frames to wait?
 *   - Average: 60 frames per second.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Fast Forward (Extended) Settings
 * ============================================================================
 *
 * Extended Fast Forward settings used for this game. If enabled, this will
 * replace the Message Core's Fast Forward functionality. The Extended Fast
 * Forward feature will not only fast forward through messages but any running
 * events that are not found in a parallel event.
 * 
 * It can also be activated the Message Core's Fast Forward shortcut key.
 *
 * ---
 *
 * Settings
 * 
 *   Enable?:
 *   - Enable or disable the Extended Fast Forward feature?
 * 
 *   Speed:
 *   - What is the speed at which Extended Fast Forward works at?
 *   - Higher numbers are faster.
 * 
 *   Reset on Scene Change?:
 *   - Reset Fast Forward setting on scene changes (ie battle, menu, or
 *     map transfers)?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Button Console Settings
 * ============================================================================
 *
 * Message Button Console settings used for this game.
 * 
 * It will only appear in the Message Window on the map scene. It will NOT
 * appear in battle. The reason it won't appear in battle is because many of
 * the functions there will clash with how the battle scene behaves.
 * 
 * The Button Console will add extra padding to the Message Window and appear
 * at either the top of bottom of the Message Window (your choice). A row of
 * buttons will appear each with a different functionality.
 * 
 * These Plugin Parameters also allow you to customize the appearance of how
 * the buttons look in-game. Adjust them accordingly.
 *
 * ---
 *
 * General
 * 
 *   Show by Default?:
 *   - Show or hide the Message Button Console by default?
 * 
 *   Position:
 *   - Where do you wish to display the Message Button Console?
 *     - Top of Message Window
 *     - Bottom of Message Window
 * 
 *   Auto-Size Hide?:
 *   - Hide the button console when using auto-size text codes?
 *
 * ---
 *
 * Appearance
 * 
 *   Window Skin:
 *   - What is the window skin used for the buttons?
 *   - Ignore if using Background Images.
 * 
 *   Font Name:
 *   - What font do you wish to use for the Message Button Console?
 * 
 *     Font Size:
 *     - What font size do you wish to use for the Message Button Console?
 * 
 *   Text Colors:
 * 
 *     Normal Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Toggled Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Disabled Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *   Visuals:
 * 
 *     Offset X:
 *     - Offsets the buttons x position.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offsets the buttons y position.
 *     - Negative: up. Positive: down.
 * 
 *     Width:
 *     - What is the width of each button?
 * 
 *     Height:
 *     - What is the height of each button?
 * 
 *     Buffer:
 *     - What is the buffer between each button?
 * 
 *   Background Images:
 * 
 *     Disabled Image:
 *     Enabled Image:
 *     Toggled Image:
 *     - Filename of the background image when the button is disabled,
 *       enabled, or toggled.
 *     - This will hide the window skin for this button.
 * 
 *     Offset X:
 *     - Offsets the X position of this image.
 *     - Negative: left; Positive: right
 * 
 *     Offset Y:
 *     - Offsets the Y position of this image.
 *     - Negative: up; Positive: down
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Button Settings
 * ============================================================================
 *
 * Settings for which buttons appear and how they appear. These settings will
 * determine which buttons appear (provided that their required plugins are
 * available), what shortcut keys are applied to them, and what kind of text
 * will be displayed to represent them.
 * 
 * In case you are wondering where the Fast Forward shortcut key is, that
 * setting is found in the Message Core.
 *
 * ---
 *
 * General
 * 
 *   List:
 *   - Which buttons appear and in what order?
 *   - Some commands require certain plugins installed.
 *
 * ---
 *
 * Shortcut Keys
 * 
 *   Auto-Forward Key:
 *   - This is the key used for auto-forwarding messages.
 * 
 *   Save Key:
 *   - This is the key used for quick saving.
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Load Key:
 *   - This is the key used for quick load.
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Options Key:
 *   - This is the key used for opening options.
 *   - Requires VisuMZ_1_OptionsCore!
 * 
 *   Game End Key:
 *   - This is the key used for ending the game.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Auto-Forward:
 *   - How is this option's text displayed in-game?
 * 
 *   Fast Forward:
 *   - How is this option's text displayed in-game?
 * 
 *   Save Game:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Load Game:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_SaveCore!
 * 
 *   Options:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_1_OptionsCore!
 * 
 *   Game End:
 *   - How is this option's text displayed in-game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Cursor Settings
 * ============================================================================
 *
 * Message Cursor settings used for this game. The cursor, if enabled, will
 * appear where the text is currently displayed at and adds a new type of
 * aesthetic to the game.
 *
 * ---
 *
 * General
 * 
 *   Enable?:
 *   - Enable or disable the message cursor?
 * 
 *   Graphic Type:
 *   - What is the cursor's graphic type?
 *     - Icon - From img/system/IconSet.png
 *     - Image - An animated image from img/system/
 *     - Window Skin - Use the default Window Skin cursor
 *
 * ---
 *
 * Icon
 * 
 *   Icon Index:
 *   - This is icon used for the Message Cursor.
 * 
 *   Flip Speed Multiplier:
 *   - What is the flip speed multiplier for the Message Cursor?
 *   - Use 0 for no flipping.
 *
 * ---
 *
 * Image
 * 
 *   Filename:
 *   - Filename of the image found inside the img/system/ folder.
 * 
 *   Image Rows:
 *   - How many rows are there for the image?
 * 
 *   Image Columns:
 *   - How many columns are there for the image?
 * 
 *   Frame Delay:
 *   - How many frames delayed are there per animated cell?
 *
 * ---
 *
 * Appearance
 * 
 *   Anchor X:
 *   Anchor Y:
 *   - Determine the Message Cursor's X/Y position.
 *   - Use a number between 0 and 1 for best results.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset the Message Cursor's X/Y position by how many pixels?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Message Tail Settings
 * ============================================================================
 *
 * Message Tails can be made to appear from the Message Window and point
 * towards the speaker, similar to how speech bubbles in comics point towards
 * their speakers. The Message Tails do not appear on their own, and only come
 * out when using auto-position text codes (if enabled) such as <Auto Player>
 * or when text codes are used to make them appear such as <Tail Upper Left: x>
 * and <Tail Lower Right: x>.
 * 
 * These settings require custom graphics that this plugin does not come with.
 * You will need to add them on your own or else they will not appear.
 *
 * ---
 *
 * Auto-Position
 * 
 *   Enable?:
 *   - Show Message Tails with Auto-Position text codes?
 *   - Message Tails will appear when using the following text codes:
 *     - <Auto Actor: x>
 *     - <Auto Party: x>
 *     - <Auto Player>
 *     - <Auto Event: x>
 *     - <Auto Enemy: x>
 * 
 *   Face Left?:
 *   - Which direction does the Message Tail point to?
 *   - Left or right?
 * 
 *   Offset X:
 *   Offset Y:
 *   - Message Window's X offset with auto-position.
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 *
 * Tail Directions
 * Tail Directions > Bottom Left
 * Tail Directions > Bottom Right
 * Tail Directions > Upper Left
 * Tail Directions > Upper Right
 * 
 *   Filename:
 *   - Filename of the Message Tail graphic going towards the
 *     specified direction.
 * 
 *   Anchor X:
 *   - Anchor value X. Use a number between 0 and 1.
 *   - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *   Anchor Y:
 *   - Anchor value Y. Use a number between 0 and 1.
 *   - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *   Offset X:
 *   - Offset the Message Tail's X position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Message Tail's Y position.
 *   - Negative: left. Positive: right.
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
 * Version 1.18: December 19, 2024
 * * Bug Fixes!
 * ** Fixed a bug where if the button console was top positioned and the
 *    buttons were hidden, the rest of the text would not readjust. Fix made
 *    by Irina.
 * 
 * Version 1.17: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Message Button Console > Button Visuals > Offset X
 * *** Parameters > Message Button Console > Button Visuals > Offset Y
 * **** Adjusts the X/Y position of the buttons.
 * 
 * Version 1.16: March 14, 2024
 * * Bug Fixes!
 * ** Fixed a text positioning issue with the message window when shown in
 *    battle and a top-aligned button console. Fix made by Irina.
 * 
 * Version 1.15: December 14, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.14: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that made hidden buttons via <Hide Button Console> still able
 *    to be pressed. Fix made by Irina.
 * 
 * Version 1.13: February 16, 2023
 * * Bug Fixes!
 * ** Fixed a bug that prevents <Hide Button Console> from working when word
 *    wrap is enabled. Fix made by Irina.
 * 
 * Version 1.12: December 15, 2022
 * * Bug Fixes!
 * ** Fixed a bug where the menu background settings from VisuMZ Core Engine
 *    did not carry over to the save menu when accessing it through the Message
 *    Button Console. Fix made by Olivia.
 * 
 * Version 1.11: November 10, 2022
 * * Bug Fixes!
 * ** Plugin Command "Message Cursor: Change Settings" no longer leaves behind
 *    the old cursor sprite when a new one is selected. Fix made by Irina.
 * 
 * Version 1.10: August 11, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina
 * *** Plugin Parameters > Fast Forward > Reset on Scene Change?
 * **** Reset Fast Forward setting on scene changes (ie battle, menu, or
 *      map transfers)?
 * 
 * Version 1.09: April 7, 2022
 * * Bug Fixes!
 * ** Default message cursor no longer appears in the wrong place when no
 *    message cursor skin is used for auto-sized messages. Fix by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter option added by Arisu and sponsored by Archeia:
 * *** Plugin Parameters > Message Cursor Settings > Graphics Type
 * **** New option added: Window Skin - Use the default Window Skin cursor
 * **** This is for those who wish to use the default window skin cursor
 *      instead of icons or images.
 * 
 * Version 1.08: March 17, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands, Text Codes, and Plugin Parameters added by Irina
 *    and sponsored by Archeia!
 * *** Message Tails can be made to appear from the Message Window and point
 *     towards the speaker, similar to how speech bubbles in comics point
 *     towards their speakers. The Message Tails do not appear on their own,
 *     and only come out when using auto-position text codes (if enabled) such
 *     as <Auto Player> or when text codes are used to make them appear such as
 *     <Tail Upper Left: x> and <Tail Lower Right: x>.
 * *** These settings require custom graphics that this plugin does not come
 *     with. You will need to add them on your own or else they will not
 *     appear.
 * *** Text Codes added: <Tail Bottom Left: x>, <Tail Bottom Right: x>,
 *     <Tail Upper Left: x>, <Tail Upper Right: x>
 * *** Plugin Command Added: Message Tail: Change Settings
 * *** Plugin Parameters Added: Message Tail Settings
 * 
 * Version 1.07: March 3, 2022
 * * Compatibility Update
 * ** Added better compatibility functionality with other plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Message Button Console > Auto-Size Hide?
 * **** Hide the button console when using auto-size text codes?
 * 
 * Version 1.06: November 18, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: November 4, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by Archeia:
 * *** Plugin Parameters > Message Button Console > Background Images
 * **** Adds a background image to this button instead of using a window skin.
 * **** This will disable the window skin.
 * **** Various images can be used for "Disabled", "Enabled", and "Toggled".
 * **** Offset X and Y positions.
 * 
 * Version 1.04: October 14, 2021
 * * Feature Update!
 * ** Added an alert requirement for those who are using very old versions of
 *    the Message Core that cannot sustain the requirements of this plugin.
 *    Added by Irina.
 * 
 * Version 1.03: September 3, 2021
 * * Bug Fixes!
 * ** Pause sprite, for the Message Window, will no longer show multiple copies
 *    if the message cursor sprite is disabled. Fix made by Irina.
 * 
 * Version 1.02: August 6, 2021
 * * Documentation Update!
 * ** Plugin URL now updated to most recent one.
 * 
 * Version 1.01: July 30, 2021
 * * Feature Update!
 * ** Added graphic pre-loading for save/load menu preparation. Added by Irina.
 * 
 * Version 1.00 Official Release Date: August 2, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExtFastFwdDisallow
 * @text Fast Forward: Allow/Disallow
 * @desc Change whether or not Fast Forward is allowed/disallowed.
 * Must be enabled by the Plugin Parameters.
 *
 * @arg Allow:eval
 * @text Allow?
 * @parent General
 * @type boolean
 * @on Allow
 * @off Disallow
 * @desc Allow or disallow the Extended Fast Forward feature?
 * Must be enabled by the Plugin Parameters.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MsgButtonConsole
 * @text Message Button Console: Show/Hide
 * @desc Determine if the Message Button Console is visible or hidden.
 * Only appears on the map. Does not appear in battle.
 *
 * @arg Visible:eval
 * @text Visible?
 * @parent General
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Show or hide the Message Button Console feature?
 * Only appears on the map. Does not appear in battle.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageCursorSettings
 * @text Message Cursor: Change Settings
 * @desc Change the Message Cursor settings used.
 *
 * @arg MsgCursor:struct
 * @text Change Settings
 * @type struct<MsgCursor>
 * @desc Change the Message Cursor settings.
 * @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command MessageTailSettings
 * @text Message Tail: Change Settings
 * @desc Change the Message Tail settings.
 *
 * @arg Settings:struct
 * @text Message Tail Settings
 * @type struct<MsgTail>
 * @desc Message Tail settings used for Message Windows.
 * Requires images and text codes to appear.
 * @default {"AutoPosition":"","autoPositionTail:eval":"true","autoPositionLeft:eval":"true","autoPositionOffsetX:num":"+0","autoPositionOffsetY:num":"+0","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","UpperLeft":"","upperLeftFilename:str":"","upperLeftAnchorX:num":"0.5","upperLeftAnchorY:num":"1.0","upperLeftOffsetX:num":"+0","upperLeftOffsetY:num":"+0","UpperRight":"","upperRightFilename:str":"","upperRightAnchorX:num":"0.5","upperRightAnchorY:num":"1.0","upperRightOffsetX:num":"+0","upperRightOffsetY:num":"+0"}
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
 * @param ExtMessageFunc
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Auto:struct
 * @text Auto-Forward Settings
 * @type struct<Auto>
 * @desc Auto-Forward settings used for this game.
 * @default {"WaitPerChar:num":"6","MinimumWait:num":"300"}
 *
 * @param FastFwd:struct
 * @text Fast Forward (Extended)
 * @type struct<FastFwd>
 * @desc Extended Fast Forward settings used for this game.
 * @default {"Enable:eval":"true","Speed:num":"8","SceneChangeReset:eval":"true"}
 *
 * @param MsgButtonConsole:struct
 * @text Message Button Console
 * @type struct<MsgButtonConsole>
 * @desc Message Button Console settings used for this game.
 * @default {"General":"","ShowDefault:eval":"true","Position:str":"bottom","Appearance":"","WindowSkin:str":"Window","FontFace:str":"Arial","FontSize:num":"18","TextColors":"","NormalColor:str":"0","ToggledColor:str":"24","DisabledColor:str":"7","Visuals":"","ButtonWidth:num":"86","ButtonHeight:num":"36","ButtonBuffer:num":"6"}
 *
 * @param Buttons:struct
 * @text Button Settings
 * @parent MsgButtonConsole:struct
 * @type struct<Buttons>
 * @desc Settings for which buttons appear and how they appear.
 * @default {"General":"","List:arraystr":"[\"auto\",\"fastFwd\",\"log\",\"hide\",\"save\",\"load\",\"options\",\"gameEnd\"]","AutoKey:str":"none","Shortcuts":"","SaveKey:str":"none","LoadKey:str":"none","OptionsKey:str":"none","GameEndKey:str":"none","Vocab":"","Auto:str":"AUTO","FastFwd:str":"FAST","Save:str":"SAVE","Load:str":"LOAD","Options:str":"CONFIG","GameEnd:str":"TITLE"}
 *
 * @param MsgCursor:struct
 * @text Message Cursor Settings
 * @type struct<MsgCursor>
 * @desc Message Cursor settings used for this game.
 * @default {"General":"","Enable:eval":"true","GraphicType:str":"icon","Icon":"","IconIndex:str":"188","FlipMultiplier:str":"0.125","Image":"","Filename:str":"","Rows:num":"1","Cols:num":"1","FrameDelay:num":"4","Appearance":"","AnchorX:num":"0.5","AnchorY:num":"1","OffsetX:num":"+0","OffsetY:num":"-4"}
 *
 * @param MsgTail:struct
 * @text Message Tail Settings
 * @type struct<MsgTail>
 * @desc Message Tail settings used for Message Windows.
 * Requires images and text codes to appear.
 * @default {"AutoPosition":"","autoPositionTail:eval":"true","autoPositionLeft:eval":"true","autoPositionOffsetX:num":"+0","autoPositionOffsetY:num":"+0","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","UpperLeft":"","upperLeftFilename:str":"","upperLeftAnchorX:num":"0.5","upperLeftAnchorY:num":"1.0","upperLeftOffsetX:num":"+0","upperLeftOffsetY:num":"+0","UpperRight":"","upperRightFilename:str":"","upperRightAnchorX:num":"0.5","upperRightAnchorY:num":"1.0","upperRightOffsetX:num":"+0","upperRightOffsetY:num":"+0"}
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
 * Auto-Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Auto:
 *
 * @param WaitPerChar:num
 * @text Wait per Character
 * @parent General
 * @type number
 * @min 1
 * @desc How many frames should the game wait per character?
 * Average: 60 frames per second.
 * @default 6
 *
 * @param MinimumWait:num
 * @text Minimum Wait
 * @parent General
 * @type number
 * @min 1
 * @desc What is the minimum amount of frames to wait?
 * Average: 60 frames per second.
 * @default 300
 *
 */
/* ----------------------------------------------------------------------------
 * Extended Fast Forward Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~FastFwd:
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the Extended Fast Forward feature?
 * @default true
 *
 * @param Speed:num
 * @text Speed
 * @parent General
 * @type number
 * @min 2
 * @desc What is the speed at which Extended Fast Forward works at?
 * Higher numbers are faster.
 * @default 8
 *
 * @param SceneChangeReset:eval
 * @text Reset on Scene Change?
 * @parent General
 * @type boolean
 * @on Reset
 * @off Keep
 * @desc Reset Fast Forward setting on scene changes (ie battle, menu, or map transfers)?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Message Button Console Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgButtonConsole:
 *
 * @param General
 *
 * @param ShowDefault:eval
 * @text Show by Default?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show or hide the Message Button Console by default?
 * @default true
 *
 * @param Position:str
 * @text Position
 * @parent General
 * @type select
 * @option Top of Message Window
 * @value top
 * @option Bottom of Message Window
 * @value bottom
 * @desc Where do you wish to display the Message Button Console?
 * @default bottom
 *
 * @param AutoSizeHide:eval
 * @text Auto-Size Hide?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Hide the button console when using auto-size text codes?
 * @default false
 *
 * @param Appearance
 *
 * @param WindowSkin:str
 * @text Window Skin
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @require 1
 * @desc What is the window skin used for the buttons?
 * Ignore if using Background Images.
 * @default Window
 *
 * @param FontFace:str
 * @text Font Name
 * @parent Appearance
 * @desc What font do you wish to use for the Message Button Console?
 * @default Arial
 *
 * @param FontSize:num
 * @text Font Size
 * @parent FontFace:str
 * @type number
 * @min 1
 * @desc What font size do you wish to use for the Message Button Console?
 * @default 18
 * 
 * @param TextColors
 * @text Text Colors
 * @parent Appearance
 *
 * @param NormalColor:str
 * @text Normal Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ToggledColor:str
 * @text Toggled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param DisabledColor:str
 * @text Disabled Color
 * @parent TextColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param Visuals
 * @text Button Visuals
 * @parent Appearance
 *
 * @param ButtonOffsetX:num
 * @text Offset X
 * @parent Visuals
 * @desc Offsets the buttons x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ButtonOffsetY:num
 * @text Offset Y
 * @parent Visuals
 * @desc Offsets the buttons y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param ButtonWidth:num
 * @text Width
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the width of each button?
 * @default 86
 *
 * @param ButtonHeight:num
 * @text Height
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the height of each button?
 * @default 36
 *
 * @param ButtonBuffer:num
 * @text Buffer
 * @parent Visuals
 * @type number
 * @min 1
 * @desc What is the buffer between each button?
 * @default 6
 *
 * @param Images
 * @text Background Images
 * @parent Appearance
 *
 * @param ImgDisabled:str
 * @text Disabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is disabled.
 * @default 
 *
 * @param ImgDisabledOffsetX:num
 * @text Offset X
 * @parent ImgDisabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgDisabledOffsetY:num
 * @text Offset Y
 * @parent ImgDisabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgEnabled:str
 * @text Enabled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is enabled.
 * @default 
 *
 * @param ImgEnabledOffsetX:num
 * @text Offset X
 * @parent ImgEnabled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgEnabledOffsetY:num
 * @text Offset Y
 * @parent ImgEnabled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 * @param ImgToggled:str
 * @text Toggled Image
 * @parent Images
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the background image when the button is toggled.
 * @default 
 *
 * @param ImgToggledOffsetX:num
 * @text Offset X
 * @parent ImgToggled:str
 * @desc Offsets the X position of this image.
 * Negative: left; Positive: right
 * @default +0
 *
 * @param ImgToggledOffsetY:num
 * @text Offset Y
 * @parent ImgToggled:str
 * @desc Offsets the Y position of this image.
 * Negative: up; Positive: down
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Buttons:
 *
 * @param General
 *
 * @param List:arraystr
 * @text List
 * @parent General
 * @type combo[]
 * @option auto
 * @option log
 * @option fastFwd
 * @option gameEnd
 * @option hide
 * @option load
 * @option options
 * @option save
 * @desc Which buttons appear and in what order?
 * Some commands require certain plugins installed.
 * @default ["auto","fastFwd","log","hide","save","load","options","gameEnd"]
 * 
 * @param Shortcuts
 * @text Shortcut Keys
 *
 * @param AutoKey:str
 * @text Auto-Forward Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for auto-forwarding messages.
 * @default none
 * 
 * @param SaveKey:str
 * @text Save Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick saving.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param LoadKey:str
 * @text Load Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quick load.
 * Requires VisuMZ_1_SaveCore!
 * @default none
 * 
 * @param OptionsKey:str
 * @text Options Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening options.
 * Requires VisuMZ_1_OptionsCore!
 * @default none
 * 
 * @param GameEndKey:str
 * @text Game End Key
 * @parent Shortcuts
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for ending the game.
 * @default none
 *
 * @param Vocab
 * @text Vocabulary
 *
 * @param Auto:str
 * @text Auto-Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default AUTO
 *
 * @param FastFwd:str
 * @text Fast Forward
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default FAST
 *
 * @param Save:str
 * @text Save Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default SAVE
 *
 * @param Load:str
 * @text Load Game
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_SaveCore!
 * @default LOAD
 *
 * @param Options:str
 * @text Options
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_1_OptionsCore!
 * @default CONFIG
 *
 * @param GameEnd:str
 * @text Game End
 * @parent Vocab
 * @desc How is this option's text displayed in-game?
 * @default TITLE
 *
 */
/* ----------------------------------------------------------------------------
 * Message Cursor Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgCursor:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable or disable the message cursor?
 * @default true
 *
 * @param GraphicType:str
 * @text Graphic Type
 * @parent General
 * @type select
 * @option Icon - From img/system/IconSet.png
 * @value icon
 * @option Image - An animated image from img/system/
 * @value image
 * @option Window Skin - Use the default Window Skin cursor
 * @value windowskin
 * @desc What is the cursor's graphic type?
 * @default icon
 * 
 * @param Icon
 *
 * @param IconIndex:str
 * @text Icon Index
 * @parent Icon
 * @desc This is icon used for the Message Cursor.
 * @default 188
 *
 * @param FlipMultiplier:str
 * @text Flip Speed Multiplier
 * @parent Icon
 * @desc What is the flip speed multiplier for the Message Cursor?
 * Use 0 for no flipping.
 * @default 1
 * 
 * @param Image
 *
 * @param Filename:str
 * @text Filename
 * @parent Image
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the image found inside the img/system/ folder.
 * @default 
 *
 * @param Rows:num
 * @text Image Rows
 * @parent Image
 * @type number
 * @min 1
 * @desc How many rows are there for the image?
 * @default 1
 *
 * @param Cols:num
 * @text Image Columns
 * @parent Image
 * @type number
 * @min 1
 * @desc How many columns are there for the image?
 * @default 1
 *
 * @param FrameDelay:num
 * @text Frame Delay
 * @parent Image
 * @type number
 * @min 1
 * @desc How many frames delayed are there per animated cell?
 * @default 4
 * 
 * @param Appearance
 *
 * @param AnchorX:num
 * @text Anchor X
 * @parent Appearance
 * @desc Determine the Message Cursor's X position.
 * Use a number between 0 and 1 for best results.
 * @default 0.5
 *
 * @param AnchorY:num
 * @text Anchor Y
 * @parent Appearance
 * @desc Determine the Message Cursor's Y position.
 * Use a number between 0 and 1 for best results.
 * @default 1
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Appearance
 * @desc Offset the Message Cursor's X position by how many pixels?
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Appearance
 * @desc Offset the Message Cursor's Y position by how many pixels?
 * @default -8
 *
 */
/* ----------------------------------------------------------------------------
 * Message Tail Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MsgTail:
 *
 * @param AutoPosition
 * @text Auto-Position
 *
 * @param autoPositionTail:eval
 * @text Enable?
 * @parent AutoPosition
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Show Message Tails with Auto-Position text codes?
 * @default true
 *
 * @param autoPositionLeft:eval
 * @text Face Left?
 * @parent AutoPosition
 * @type boolean
 * @on Face Left
 * @off Face Right
 * @desc Which direction does the Message Tail point to?
 * @default true
 *
 * @param autoPositionOffsetX:num
 * @text Offset X
 * @parent AutoPosition
 * @desc Message Window's X offset with auto-position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param autoPositionOffsetY:num
 * @text Offset Y
 * @parent AutoPosition
 * @desc Message Window's Y offset with auto-position.
 * Negative: up. Positive: down.
 * @default +0
 * 
 * @param TailDir
 * @text Tail Directions
 *
 * @param BottomLeft
 * @text Bottom Left
 * @parent TailDir
 *
 * @param bottomLeftFilename:str
 * @text Filename
 * @parent BottomLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the bottom left.
 * @default 
 *
 * @param bottomLeftAnchorX:num
 * @text Anchor X
 * @parent BottomLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomLeftAnchorY:num
 * @text Anchor Y
 * @parent BottomLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomLeftOffsetX:num
 * @text Offset X
 * @parent BottomLeft
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomLeftOffsetY:num
 * @text Offset Y
 * @parent BottomLeft
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BottomRight
 * @text Bottom Right
 * @parent TailDir
 *
 * @param bottomRightFilename:str
 * @text Filename
 * @parent BottomRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the bottom right.
 * @default 
 *
 * @param bottomRightAnchorX:num
 * @text Anchor X
 * @parent BottomRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomRightAnchorY:num
 * @text Anchor Y
 * @parent BottomRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomRightOffsetX:num
 * @text Offset X
 * @parent BottomRight
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomRightOffsetY:num
 * @text Offset Y
 * @parent BottomRight
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UpperLeft
 * @text Upper Left
 * @parent TailDir
 *
 * @param upperLeftFilename:str
 * @text Filename
 * @parent UpperLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the upper left.
 * @default 
 *
 * @param upperLeftAnchorX:num
 * @text Anchor X
 * @parent UpperLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param upperLeftAnchorY:num
 * @text Anchor Y
 * @parent UpperLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param upperLeftOffsetX:num
 * @text Offset X
 * @parent UpperLeft
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param upperLeftOffsetY:num
 * @text Offset Y
 * @parent UpperLeft
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UpperRight
 * @text Upper Right
 * @parent TailDir
 *
 * @param upperRightFilename:str
 * @text Filename
 * @parent UpperRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Message Tail graphic going towards
 * the upper right.
 * @default 
 *
 * @param upperRightAnchorX:num
 * @text Anchor X
 * @parent UpperRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param upperRightAnchorY:num
 * @text Anchor Y
 * @parent UpperRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 1.0
 *
 * @param upperRightOffsetX:num
 * @text Offset X
 * @parent UpperRight
 * @desc Offset the Message Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param upperRightOffsetY:num
 * @text Offset Y
 * @parent UpperRight
 * @desc Offset the Message Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 */
//=============================================================================

const _0x3068b8=_0x4c69;(function(_0x2405bd,_0x67c15b){const _0x13642a=_0x4c69,_0x4f31bf=_0x2405bd();while(!![]){try{const _0x4595a4=parseInt(_0x13642a(0xe5))/0x1+parseInt(_0x13642a(0xc0))/0x2+parseInt(_0x13642a(0x199))/0x3+-parseInt(_0x13642a(0xe9))/0x4*(-parseInt(_0x13642a(0xbb))/0x5)+-parseInt(_0x13642a(0x1d1))/0x6*(-parseInt(_0x13642a(0xeb))/0x7)+-parseInt(_0x13642a(0x148))/0x8*(parseInt(_0x13642a(0x19a))/0x9)+-parseInt(_0x13642a(0xe4))/0xa;if(_0x4595a4===_0x67c15b)break;else _0x4f31bf['push'](_0x4f31bf['shift']());}catch(_0x1a6f14){_0x4f31bf['push'](_0x4f31bf['shift']());}}}(_0x3910,0xa350f));var label=_0x3068b8(0x1dc),tier=tier||0x0,dependencies=[_0x3068b8(0x1e0)],pluginData=$plugins[_0x3068b8(0x181)](function(_0x2a9355){const _0x552ffe=_0x3068b8;return _0x2a9355[_0x552ffe(0x18e)]&&_0x2a9355['description'][_0x552ffe(0xb9)]('['+label+']');})[0x0];function _0x4c69(_0x378b09,_0x2c02b2){const _0x391089=_0x3910();return _0x4c69=function(_0x4c69fa,_0x369d8c){_0x4c69fa=_0x4c69fa-0x96;let _0x4d373c=_0x391089[_0x4c69fa];return _0x4d373c;},_0x4c69(_0x378b09,_0x2c02b2);}VisuMZ[label][_0x3068b8(0xc8)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x3d57f6,_0x25db7e){const _0x21718f=_0x3068b8;for(const _0x3075fd in _0x25db7e){if(_0x3075fd[_0x21718f(0x1be)](/(.*):(.*)/i)){const _0x134284=String(RegExp['$1']),_0x103105=String(RegExp['$2'])[_0x21718f(0xa7)]()[_0x21718f(0x1f5)]();let _0x2de089,_0x30c285,_0xf40462;switch(_0x103105){case _0x21718f(0x13b):_0x2de089=_0x25db7e[_0x3075fd]!==''?Number(_0x25db7e[_0x3075fd]):0x0;break;case'ARRAYNUM':_0x30c285=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):[],_0x2de089=_0x30c285[_0x21718f(0x9e)](_0xfc2d1b=>Number(_0xfc2d1b));break;case'EVAL':_0x2de089=_0x25db7e[_0x3075fd]!==''?eval(_0x25db7e[_0x3075fd]):null;break;case'ARRAYEVAL':_0x30c285=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):[],_0x2de089=_0x30c285['map'](_0x19662f=>eval(_0x19662f));break;case _0x21718f(0xcb):_0x2de089=_0x25db7e[_0x3075fd]!==''?JSON['parse'](_0x25db7e[_0x3075fd]):'';break;case _0x21718f(0x1eb):_0x30c285=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):[],_0x2de089=_0x30c285['map'](_0x3a7243=>JSON['parse'](_0x3a7243));break;case _0x21718f(0x118):_0x2de089=_0x25db7e[_0x3075fd]!==''?new Function(JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd])):new Function(_0x21718f(0xb2));break;case _0x21718f(0x129):_0x30c285=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):[],_0x2de089=_0x30c285[_0x21718f(0x9e)](_0x19661b=>new Function(JSON[_0x21718f(0xdb)](_0x19661b)));break;case _0x21718f(0x1c0):_0x2de089=_0x25db7e[_0x3075fd]!==''?String(_0x25db7e[_0x3075fd]):'';break;case _0x21718f(0x117):_0x30c285=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):[],_0x2de089=_0x30c285[_0x21718f(0x9e)](_0x3c1cab=>String(_0x3c1cab));break;case _0x21718f(0x1a9):_0xf40462=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):{},_0x2de089=VisuMZ[_0x21718f(0x1f2)]({},_0xf40462);break;case _0x21718f(0x17f):_0x30c285=_0x25db7e[_0x3075fd]!==''?JSON[_0x21718f(0xdb)](_0x25db7e[_0x3075fd]):[],_0x2de089=_0x30c285[_0x21718f(0x9e)](_0x26e29e=>VisuMZ['ConvertParams']({},JSON[_0x21718f(0xdb)](_0x26e29e)));break;default:continue;}_0x3d57f6[_0x134284]=_0x2de089;}}return _0x3d57f6;},(_0x2066b7=>{const _0x24eb8d=_0x3068b8,_0x5ad37a=_0x2066b7['name'];for(const _0x6476e0 of dependencies){if(!Imported[_0x6476e0]){alert(_0x24eb8d(0x1ee)[_0x24eb8d(0x194)](_0x5ad37a,_0x6476e0)),SceneManager[_0x24eb8d(0x13f)]();break;}}const _0x4580ac=_0x2066b7[_0x24eb8d(0xb7)];if(_0x4580ac[_0x24eb8d(0x1be)](/\[Version[ ](.*?)\]/i)){const _0x36a5e2=Number(RegExp['$1']);_0x36a5e2!==VisuMZ[label][_0x24eb8d(0xa5)]&&(alert(_0x24eb8d(0x1f8)[_0x24eb8d(0x194)](_0x5ad37a,_0x36a5e2)),SceneManager[_0x24eb8d(0x13f)]());}if(_0x4580ac[_0x24eb8d(0x1be)](/\[Tier[ ](\d+)\]/i)){const _0x43262f=Number(RegExp['$1']);_0x43262f<tier?(alert(_0x24eb8d(0x1ad)[_0x24eb8d(0x194)](_0x5ad37a,_0x43262f,tier)),SceneManager['exit']()):tier=Math[_0x24eb8d(0x130)](_0x43262f,tier);}VisuMZ[_0x24eb8d(0x1f2)](VisuMZ[label][_0x24eb8d(0xc8)],_0x2066b7[_0x24eb8d(0xe6)]);})(pluginData),PluginManager[_0x3068b8(0x1ae)](pluginData[_0x3068b8(0x116)],_0x3068b8(0x1a5),_0x145e77=>{const _0x26edcf=_0x3068b8;VisuMZ[_0x26edcf(0x1f2)](_0x145e77,_0x145e77);const _0x4e8d88=!_0x145e77[_0x26edcf(0x10e)];$gameSystem[_0x26edcf(0x1cc)](_0x4e8d88);}),PluginManager[_0x3068b8(0x1ae)](pluginData['name'],_0x3068b8(0x1b3),_0x1c0686=>{const _0x180126=_0x3068b8;VisuMZ['ConvertParams'](_0x1c0686,_0x1c0686);const _0x1704c8=_0x1c0686[_0x180126(0x13a)];$gameSystem[_0x180126(0x186)](_0x1704c8);}),PluginManager['registerCommand'](pluginData[_0x3068b8(0x116)],_0x3068b8(0x1cd),_0x50efd3=>{const _0x410374=_0x3068b8;VisuMZ[_0x410374(0x1f2)](_0x50efd3,_0x50efd3);const _0x4c306d=_0x50efd3['MsgCursor'];$gameSystem[_0x410374(0xc3)](_0x4c306d);const _0xf8c13e=SceneManager[_0x410374(0x1d3)][_0x410374(0x123)];_0xf8c13e&&(_0xf8c13e[_0x410374(0x109)](),_0xf8c13e['_refreshPauseSign']());}),PluginManager['registerCommand'](pluginData['name'],'MessageTailSettings',_0x1305cb=>{const _0x5d5db4=_0x3068b8;VisuMZ[_0x5d5db4(0x1f2)](_0x1305cb,_0x1305cb),$gameSystem[_0x5d5db4(0x11d)](_0x1305cb[_0x5d5db4(0xc8)]);}),TextManager[_0x3068b8(0xb8)]=function(_0x40f2f1){const _0x4474b5=_0x3068b8;if(Window_ButtonConsole['VOCAB'][_0x40f2f1])return Window_ButtonConsole['VOCAB'][_0x40f2f1];return _0x40f2f1[_0x4474b5(0xa7)]()[_0x4474b5(0x1f5)]();},ColorManager[_0x3068b8(0xf9)]=function(_0x32efdc){const _0x2be968=_0x3068b8;return _0x32efdc=String(_0x32efdc),_0x32efdc['match'](/#(.*)/i)?_0x2be968(0x1f1)[_0x2be968(0x194)](String(RegExp['$1'])):this['textColor'](Number(_0x32efdc));},SceneManager[_0x3068b8(0x15f)]=function(){const _0xab1366=_0x3068b8;return this[_0xab1366(0x1d3)]&&this[_0xab1366(0x1d3)]['constructor']===Scene_Battle;},SceneManager[_0x3068b8(0x1fe)]=function(){const _0x3255ac=_0x3068b8;return this[_0x3255ac(0x1d3)]&&this['_scene'][_0x3255ac(0x132)]===Scene_Map;},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xd3)]=SceneManager[_0x3068b8(0x1b9)],SceneManager['push']=function(_0x5d5eb2){const _0x45a9ff=_0x3068b8;VisuMZ[_0x45a9ff(0x1dc)][_0x45a9ff(0xd3)][_0x45a9ff(0x1cf)](this,_0x5d5eb2),[Scene_SaveButtonConsole,Scene_Save,Scene_Load][_0x45a9ff(0xb9)](_0x5d5eb2)&&this['loadPartyGraphics']();},SceneManager[_0x3068b8(0x1f9)]=function(){const _0x20459c=_0x3068b8;for(const _0x4d0136 of $gameParty['members']()){_0x4d0136[_0x20459c(0xd8)]()&&ImageManager[_0x20459c(0x12b)](_0x4d0136['faceName']()),_0x4d0136[_0x20459c(0x1ef)]()&&ImageManager[_0x20459c(0x11c)](_0x4d0136[_0x20459c(0x1ef)]()),_0x4d0136[_0x20459c(0x164)]()&&ImageManager['loadSvActor'](_0x4d0136[_0x20459c(0x164)]());}},Game_Temp[_0x3068b8(0x1b0)]['isMessageAutoForwardMode']=function(){const _0x130572=_0x3068b8;return this[_0x130572(0x14f)];},Game_Temp[_0x3068b8(0x1b0)][_0x3068b8(0xfa)]=function(_0x101032){const _0x5e634e=_0x3068b8;this['_messageAutoForwardMode']=_0x101032,$gameMessage[_0x5e634e(0x208)]();},Game_Temp[_0x3068b8(0x1b0)][_0x3068b8(0x18b)]=function(){const _0x578424=_0x3068b8;return this[_0x578424(0xe7)];},Game_Temp[_0x3068b8(0x1b0)][_0x3068b8(0x138)]=function(_0x5bb97c){const _0x32ada7=_0x3068b8;this[_0x32ada7(0xe7)]=_0x5bb97c,$gameMessage[_0x32ada7(0x208)]();},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x1a2)]=Game_Temp[_0x3068b8(0x1b0)][_0x3068b8(0x18a)],Game_Temp[_0x3068b8(0x1b0)][_0x3068b8(0x18a)]=function(_0x448f09,_0x4fca24,_0x50fdf5){const _0x38b3c5=_0x3068b8;if(this[_0x38b3c5(0x104)]())return;VisuMZ[_0x38b3c5(0x1dc)][_0x38b3c5(0x1a2)]['call'](this,_0x448f09,_0x4fca24,_0x50fdf5);},Game_Temp['prototype']['isSceneUsingExFastForward']=function(){const _0x29b2bd=_0x3068b8,_0x26f180=SceneManager[_0x29b2bd(0x1d3)];return _0x26f180&&_0x26f180[_0x29b2bd(0x18b)]&&_0x26f180['isExtendedFastForwardMode']();},VisuMZ['ExtMessageFunc'][_0x3068b8(0xc7)]=Game_System[_0x3068b8(0x1b0)][_0x3068b8(0xdc)],Game_System[_0x3068b8(0x1b0)][_0x3068b8(0xdc)]=function(){const _0x13b9c4=_0x3068b8;VisuMZ[_0x13b9c4(0x1dc)][_0x13b9c4(0xc7)]['call'](this),this['initMessageButtonConsole'](),this[_0x13b9c4(0x1af)](),this[_0x13b9c4(0x16f)]();},Game_System[_0x3068b8(0x1b0)][_0x3068b8(0x201)]=function(){const _0x9406d3=_0x3068b8;this[_0x9406d3(0x1d6)]=Window_ButtonConsole['DEFAULT_SHOW'];},Game_System[_0x3068b8(0x1b0)][_0x3068b8(0x183)]=function(){const _0x19e31f=_0x3068b8;return this[_0x19e31f(0x1d6)]===undefined&&this[_0x19e31f(0x201)](),this[_0x19e31f(0x1d6)];},Game_System[_0x3068b8(0x1b0)]['setMessageButtonConsoleVisible']=function(_0x92f5d1){const _0xf70a6=_0x3068b8;this[_0xf70a6(0x1d6)]===undefined&&this[_0xf70a6(0x201)](),this[_0xf70a6(0x1d6)]=_0x92f5d1;},Game_System['prototype'][_0x3068b8(0x1af)]=function(){const _0x2c0373=_0x3068b8;this[_0x2c0373(0x10f)]=![];},Game_System[_0x3068b8(0x1b0)]['isExtendedFastForwardDisallowed']=function(){const _0x2d6aa6=_0x3068b8;return this[_0x2d6aa6(0x10f)]===undefined&&this[_0x2d6aa6(0x1af)](),this[_0x2d6aa6(0x10f)];},Game_System[_0x3068b8(0x1b0)][_0x3068b8(0x1cc)]=function(_0x1d2eae){const _0x113787=_0x3068b8;this[_0x113787(0x10f)]===undefined&&this[_0x113787(0x1af)](),this[_0x113787(0x10f)]=_0x1d2eae;},Game_System[_0x3068b8(0x1b0)][_0x3068b8(0x16f)]=function(){const _0x23e1d9=_0x3068b8;this['_msgCursorSettings']=JsonEx[_0x23e1d9(0x178)](VisuMZ['ExtMessageFunc'][_0x23e1d9(0xc8)][_0x23e1d9(0x15e)]);},Game_System[_0x3068b8(0x1b0)][_0x3068b8(0x153)]=function(){const _0x46368c=_0x3068b8;return this[_0x46368c(0x1d7)]===undefined&&this[_0x46368c(0x16f)](),this['_msgCursorSettings'];},Game_System[_0x3068b8(0x1b0)]['setMessageCursorSettings']=function(_0x167cf4){const _0x3a38c3=_0x3068b8;this[_0x3a38c3(0x1d7)]===undefined&&this['initMessageCursorSettings'](),this['_msgCursorSettings']=JsonEx[_0x3a38c3(0x178)](_0x167cf4);},Game_System[_0x3068b8(0x1b0)][_0x3068b8(0x122)]=function(){const _0x56885b=_0x3068b8;if(this['_messageTailSettings']===undefined){const _0x4a2cd0=VisuMZ['ExtMessageFunc'][_0x56885b(0xc8)][_0x56885b(0x15a)];this['_messageTailSettings']=JsonEx['makeDeepCopy'](_0x4a2cd0);}return this[_0x56885b(0xfd)];},Game_System[_0x3068b8(0x1b0)]['setMessageTailSettings']=function(_0x33569a){const _0x742f91=_0x3068b8;this[_0x742f91(0xfd)]=JsonEx[_0x742f91(0x178)](_0x33569a);},Game_Message['prototype']['refreshButtonConsole']=function(){const _0x156ffb=_0x3068b8,_0x3cd9c5=SceneManager['_scene'];if(!_0x3cd9c5)return;const _0x43e04c=_0x3cd9c5[_0x156ffb(0x123)];if(!_0x43e04c)return;_0x43e04c[_0x156ffb(0x208)]();},VisuMZ['ExtMessageFunc'][_0x3068b8(0x133)]=Scene_Boot[_0x3068b8(0x1b0)][_0x3068b8(0x96)],Scene_Boot[_0x3068b8(0x1b0)][_0x3068b8(0x96)]=function(){const _0x2d2750=_0x3068b8;VisuMZ[_0x2d2750(0x1dc)]['Scene_Boot_loadSystemImages']['call'](this),this['loadSystemImagesForExtMessageFunc']();},Scene_Boot[_0x3068b8(0x1b0)][_0x3068b8(0x1ac)]=function(){const _0x4d6d4c=_0x3068b8,_0x18a0fe=VisuMZ[_0x4d6d4c(0x1dc)][_0x4d6d4c(0xc8)][_0x4d6d4c(0x1b3)],_0x559c36=[_0x4d6d4c(0x98),_0x4d6d4c(0x161),'ImgToggled'];for(const _0x3d1b37 of _0x559c36){_0x18a0fe[_0x3d1b37]=_0x18a0fe[_0x3d1b37]??'',_0x18a0fe[_0x3d1b37]!==''&&ImageManager[_0x4d6d4c(0x157)](_0x18a0fe[_0x3d1b37]);}},Scene_Message[_0x3068b8(0x1a4)]=VisuMZ[_0x3068b8(0x1dc)]['Settings'][_0x3068b8(0xa9)][_0x3068b8(0xe8)],Scene_Message['EXT_FAST_FORWARD_LOOPS']=VisuMZ[_0x3068b8(0x1dc)]['Settings'][_0x3068b8(0xa9)][_0x3068b8(0xef)],Scene_Message[_0x3068b8(0x1d9)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0xa9)][_0x3068b8(0x102)]??!![],VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x188)]=Scene_Message[_0x3068b8(0x1b0)][_0x3068b8(0xfb)],Scene_Message[_0x3068b8(0x1b0)]['createAllWindows']=function(){const _0x5ee98b=_0x3068b8;VisuMZ['ExtMessageFunc'][_0x5ee98b(0x188)]['call'](this),Scene_Message[_0x5ee98b(0x1d9)]&&$gameTemp['setExtendedFastForwardMode'](![]);},Scene_Message['prototype'][_0x3068b8(0x18b)]=function(){const _0x40f769=_0x3068b8;if(!Scene_Message[_0x40f769(0x1a4)])return![];if($gameSystem[_0x40f769(0x154)]())return![];if(this[_0x40f769(0xe2)]())return![];return this[_0x40f769(0x180)]();},Scene_Message[_0x3068b8(0x1b0)][_0x3068b8(0x180)]=function(){const _0x354d2d=_0x3068b8;if(Imported['VisuMZ_2_FurnitureSystem']&&$gameMap[_0x354d2d(0x1e5)]())return![];if(Imported[_0x354d2d(0x1a8)]){if(SceneManager[_0x354d2d(0x1bd)]())return![];if(SceneManager[_0x354d2d(0x11b)])return![];}if(!this[_0x354d2d(0xe2)]()){if(Input[_0x354d2d(0x17d)](VisuMZ['MessageCore']['Settings'][_0x354d2d(0x1ec)][_0x354d2d(0xf5)]))return!![];}return $gameTemp[_0x354d2d(0x18b)]();},Scene_Message[_0x3068b8(0x1b0)]['anyActiveMessageInputWindows']=function(){const _0x150fe6=_0x3068b8;if(this[_0x150fe6(0x1c7)]&&this[_0x150fe6(0x1c7)][_0x150fe6(0xad)])return!![];if(this['_numberInputWindow']&&this[_0x150fe6(0x196)][_0x150fe6(0xad)])return!![];if(this[_0x150fe6(0xfe)]&&this['_eventItemWindow'][_0x150fe6(0xad)])return!![];return![];},Scene_Message[_0x3068b8(0x1b0)][_0x3068b8(0x101)]=function(){const _0x1bfd50=_0x3068b8;return Input['isTriggered'](_0x1bfd50(0x1f0))||TouchInput['isCancelled']()?($gameTemp[_0x1bfd50(0x138)](![]),!![]):![];},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x16b)]=Scene_Map[_0x3068b8(0x1b0)]['updateMainMultiply'],Scene_Map[_0x3068b8(0x1b0)]['updateMainMultiply']=function(){const _0x290daf=_0x3068b8;this['isExtendedFastForwardMode']()?this[_0x290daf(0xb6)]():VisuMZ[_0x290daf(0x1dc)][_0x290daf(0x16b)][_0x290daf(0x1cf)](this);},Scene_Map[_0x3068b8(0x1b0)][_0x3068b8(0x18b)]=function(){const _0x10b4c3=_0x3068b8;return Scene_Message[_0x10b4c3(0x1b0)][_0x10b4c3(0x18b)][_0x10b4c3(0x1cf)](this)&&$gameMap[_0x10b4c3(0x1e6)]();},Scene_Map['prototype'][_0x3068b8(0xb6)]=function(){const _0x66f85c=_0x3068b8;let _0x293e17=Scene_Message['EXT_FAST_FORWARD_LOOPS'];while(_0x293e17--&&$gameMap[_0x66f85c(0x1e6)]()&&!this[_0x66f85c(0xe2)]()){this[_0x66f85c(0x1d4)](),this[_0x66f85c(0x16e)](),this[_0x66f85c(0xc5)](),SceneManager[_0x66f85c(0x1ea)]();if(this['updateExtendedFastForwardCancel']())break;}};function Scene_SaveButtonConsole(){const _0x518f46=_0x3068b8;this[_0x518f46(0xdc)](...arguments);}Scene_SaveButtonConsole[_0x3068b8(0x1b0)]=Object[_0x3068b8(0x141)](Scene_Save['prototype']),Scene_SaveButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x132)]=Scene_SaveButtonConsole,Scene_SaveButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x20c)]=function(){const _0x578927=_0x3068b8;this[_0x578927(0xa4)]=0x0;let _0x3b7435=$gameMap[_0x578927(0x103)];for(;;){if(_0x3b7435[_0x578927(0x151)])_0x3b7435=_0x3b7435[_0x578927(0x151)];else{this['_cachedIndex']=_0x3b7435[_0x578927(0x1a0)],_0x3b7435[_0x578927(0x1a0)]=_0x3b7435['_lastExtMsgFuncIndex'];break;}}Scene_Save[_0x578927(0x1b0)][_0x578927(0x20c)]['call'](this),_0x3b7435[_0x578927(0x1a0)]=this['_cachedIndex'];},Scene_SaveButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0xd4)]=function(_0x39c455){const _0x289cfc=_0x3068b8;return Scene_Save[_0x289cfc(0x1b0)]['getCustomBackgroundSettings'][_0x289cfc(0x1cf)](this,_0x289cfc(0x1a3));},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x139)]=Game_Interpreter[_0x3068b8(0x1b0)][_0x3068b8(0x9b)],Game_Interpreter['prototype']['command101']=function(_0x5ee27f){const _0x224189=_0x3068b8;return this[_0x224189(0xd6)]=this[_0x224189(0x1a0)],VisuMZ[_0x224189(0x1dc)][_0x224189(0x139)][_0x224189(0x1cf)](this,_0x5ee27f);},VisuMZ[_0x3068b8(0x1dc)]['Scene_Battle_update']=Scene_Battle[_0x3068b8(0x1b0)][_0x3068b8(0x172)],Scene_Battle[_0x3068b8(0x1b0)][_0x3068b8(0x172)]=function(){const _0x4181d3=_0x3068b8;VisuMZ[_0x4181d3(0x1dc)][_0x4181d3(0xb3)][_0x4181d3(0x1cf)](this);if(this[_0x4181d3(0x18b)]())this[_0x4181d3(0xb6)]();},Scene_Battle[_0x3068b8(0x1b0)][_0x3068b8(0x18b)]=function(){const _0x255f0f=_0x3068b8;return![];return Scene_Message[_0x255f0f(0x1b0)][_0x255f0f(0x18b)][_0x255f0f(0x1cf)](this)&&$gameTroop[_0x255f0f(0x1e6)]()&&!this[_0x255f0f(0x11a)];},Scene_Battle[_0x3068b8(0x1b0)][_0x3068b8(0xb6)]=function(){const _0x44c787=_0x3068b8;this[_0x44c787(0x11a)]=!![];let _0x7c3450=Scene_Message[_0x44c787(0x190)];while(_0x7c3450--&&$gameTroop[_0x44c787(0x1e6)]()&&!this['anyActiveMessageInputWindows']()){this[_0x44c787(0x172)](),SceneManager['updateEffekseer']();if(this['updateExtendedFastForwardCancel']())break;}this[_0x44c787(0x11a)]=![];},VisuMZ['ExtMessageFunc'][_0x3068b8(0x97)]=WindowLayer['prototype'][_0x3068b8(0x172)],WindowLayer[_0x3068b8(0x1b0)][_0x3068b8(0x172)]=function(){const _0xad9721=_0x3068b8;if(SceneManager[_0xad9721(0x1d3)][_0xad9721(0x11a)])return;VisuMZ[_0xad9721(0x1dc)][_0xad9721(0x97)][_0xad9721(0x1cf)](this);},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x167)]=Window_Base[_0x3068b8(0x1b0)][_0x3068b8(0xd2)],Window_Base['prototype']['flushTextState']=function(_0x1e10d9){const _0x1c64b2=_0x3068b8;this['constructor']['name']===_0x1c64b2(0x1f7)&&this[_0x1c64b2(0x156)](_0x1e10d9),VisuMZ['ExtMessageFunc'][_0x1c64b2(0x167)]['call'](this,_0x1e10d9),this['constructor']['name']===_0x1c64b2(0x1f7)&&this[_0x1c64b2(0x19d)](_0x1e10d9);},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x127)]=Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xdc)],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xdc)]=function(_0x5869dc){const _0x75d6c=_0x3068b8;VisuMZ['ExtMessageFunc']['Window_Message_initialize'][_0x75d6c(0x1cf)](this,_0x5869dc),this['createMessageTailSprite']();},VisuMZ['ExtMessageFunc'][_0x3068b8(0x9f)]=Window_Message[_0x3068b8(0x1b0)]['update'],Window_Message['prototype'][_0x3068b8(0x172)]=function(){const _0xb4506f=_0x3068b8;VisuMZ['ExtMessageFunc'][_0xb4506f(0x9f)][_0xb4506f(0x1cf)](this),this['updateExtMsgFuncResetTimers'](),this[_0xb4506f(0x1c8)]();},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x11f)]=function(){const _0x4bffa1=_0x3068b8;if(!this['meetExtMsgFuncResetRequirements']())return;$gameTemp[_0x4bffa1(0x147)]()&&$gameTemp[_0x4bffa1(0xfa)](![]),$gameTemp[_0x4bffa1(0x18b)]()&&$gameTemp[_0x4bffa1(0x138)](![]);},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x17b)]=function(){const _0x4e5bda=_0x3068b8;if(SceneManager[_0x4e5bda(0x1fe)]()&&$gameMap&&!$gameMap['isEventRunning']())return!![];else{if(SceneManager[_0x4e5bda(0x15f)]()&&!$gameMap['isEventRunning']())return!![];}return![];},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x19f)]=Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x146)],Window_Message['prototype'][_0x3068b8(0x146)]=function(){const _0x4b868d=_0x3068b8;if(SceneManager['_scene'][_0x4b868d(0x18b)]())return!![];else{if(Input[_0x4b868d(0x146)](Window_ButtonConsole[_0x4b868d(0x1aa)][_0x4b868d(0x143)]))return this[_0x4b868d(0x10a)](),![];else{if(Input['isTriggered'](Window_ButtonConsole[_0x4b868d(0x1aa)][_0x4b868d(0xba)]))return this['processButtonShortcut']('save'),![];else{if(Input[_0x4b868d(0x146)](Window_ButtonConsole['SHORTCUT_KEY'][_0x4b868d(0x14c)]))return this[_0x4b868d(0xbf)](_0x4b868d(0x14c)),![];else{if(Input[_0x4b868d(0x146)](Window_ButtonConsole[_0x4b868d(0x1aa)]['options']))return this['processButtonShortcut'](_0x4b868d(0x17a)),![];else{if(Input[_0x4b868d(0x146)](Window_ButtonConsole[_0x4b868d(0x1aa)][_0x4b868d(0xce)]))return this[_0x4b868d(0xbf)]('gameend'),![];else return this['pause']&&$gameTemp['isMessageAutoForwardMode']()?this[_0x4b868d(0x1de)]():VisuMZ[_0x4b868d(0x1dc)]['Window_Message_isTriggered'][_0x4b868d(0x1cf)](this);}}}}}},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x142)]=Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1d2)],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1d2)]=function(_0x1a22bc){const _0x4171d6=_0x3068b8;this[_0x4171d6(0x105)](_0x1a22bc),this['resetMessageTailSettings'](),this[_0x4171d6(0x135)](_0x1a22bc),VisuMZ[_0x4171d6(0x1dc)]['Window_Message_newPage'][_0x4171d6(0x1cf)](this,_0x1a22bc),this['_autoForwardCount']=0x0;},Window_Message['prototype'][_0x3068b8(0xa6)]=function(){const _0x473e1b=_0x3068b8,_0x8f2df5=$gameMessage['faceName'](),_0x3ed7f0=$gameMessage[_0x473e1b(0xae)](),_0x1a24bf=$gameMessage[_0x473e1b(0xf2)]();let _0x508dcd=ImageManager[_0x473e1b(0xf4)],_0x4891b9=this['innerHeight'],_0x235961=_0x1a24bf?this[_0x473e1b(0x15b)]-_0x508dcd-0x4:0x4,_0x59a100=0x0;_0x4891b9-=this[_0x473e1b(0x1f6)](),this[_0x473e1b(0x158)](_0x8f2df5,_0x3ed7f0,_0x235961,_0x59a100,_0x508dcd,_0x4891b9);},Window_Message['AUTO_FORWARD_DELAY_PER_CHAR']=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x12d)][_0x3068b8(0xf1)],Window_Message[_0x3068b8(0xd0)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x12d)][_0x3068b8(0x206)],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x156)]=function(_0x17fe40){const _0xfd951f=_0x3068b8;this[_0xfd951f(0x1b7)]=this[_0xfd951f(0x1b7)]||0x0,this['_autoForwardCount']=Math[_0xfd951f(0x130)](this[_0xfd951f(0x1b7)],0x0);const _0x3dffc9=(_0x17fe40[_0xfd951f(0x14b)]||'')[_0xfd951f(0x182)];this[_0xfd951f(0x1b7)]+=_0x3dffc9*Window_Message['AUTO_FORWARD_DELAY_PER_CHAR'];},Window_Message[_0x3068b8(0x1b0)]['toggleAutoForward']=function(){const _0xe46d9c=_0x3068b8;if(this['_hideButtonConsole'])return;if(!$gameSystem[_0xe46d9c(0x183)]())return;let _0xaf328c=!$gameTemp['isMessageAutoForwardMode']();$gameTemp[_0xe46d9c(0xfa)](_0xaf328c),_0xaf328c?this[_0xe46d9c(0x1ff)]():SoundManager[_0xe46d9c(0x192)]();},Window_Message['prototype'][_0x3068b8(0x1de)]=function(){const _0x279652=_0x3068b8;return this[_0x279652(0x1b7)]=this[_0x279652(0x1b7)]||0x0,VisuMZ[_0x279652(0x1dc)][_0x279652(0x19f)][_0x279652(0x1cf)](this)?(SoundManager[_0x279652(0x192)](),$gameTemp[_0x279652(0xfa)](![]),!![]):this['_autoForwardCount']--<=0x0;},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xed)]=Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xf8)],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xf8)]=function(){const _0x55bdf7=_0x3068b8;VisuMZ[_0x55bdf7(0x1dc)][_0x55bdf7(0xed)][_0x55bdf7(0x1cf)](this),this[_0x55bdf7(0x1b7)]=this[_0x55bdf7(0x1b7)]||0x0,this[_0x55bdf7(0x1b7)]=Math['max'](this[_0x55bdf7(0x1b7)],Window_Message['AUTO_FORWARD_MIN_DELAY']);},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x1c4)]=Window_Message['prototype'][_0x3068b8(0x115)],Window_Message['prototype'][_0x3068b8(0x115)]=function(){const _0x45babf=_0x3068b8;VisuMZ['ExtMessageFunc'][_0x45babf(0x1c4)]['call'](this),this['createButtonConsole']();},VisuMZ['ExtMessageFunc'][_0x3068b8(0x15c)]=Window_Base[_0x3068b8(0x1b0)][_0x3068b8(0x14d)],Window_Base[_0x3068b8(0x1b0)][_0x3068b8(0x14d)]=function(_0x2a028e){const _0x20ace5=_0x3068b8;return _0x2a028e=_0x2a028e[_0x20ace5(0x152)](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi,_0x20ace5(0x12c)),_0x2a028e=VisuMZ[_0x20ace5(0x1dc)][_0x20ace5(0x15c)][_0x20ace5(0x1cf)](this,_0x2a028e),_0x2a028e;},Window_Message['prototype'][_0x3068b8(0x105)]=function(_0x5d6064){const _0x12de2f=_0x3068b8;let _0x300a1a=_0x5d6064[_0x12de2f(0x10d)];this['_hideButtonConsole']=![],_0x300a1a=_0x300a1a['replace']('<HIDEBUTTONCONSOLE>',()=>{return this['_hideButtonConsole']=!![],'';}),this[_0x12de2f(0x107)](_0x300a1a)&&(this['_hideButtonConsole']=!![]),_0x5d6064['text']=_0x300a1a;};if(!Window_Message['prototype'][_0x3068b8(0x1f6)]){let text='';text+=_0x3068b8(0x12a),text+=_0x3068b8(0x1ce),text+='the\x20VisuMZ_2_ExtMessageFunc\x20plugin.',alert(text),SceneManager[_0x3068b8(0x13f)]();}function _0x3910(){const _0x5d068d=['call','SaveKey','30dWQRzZ','newPage','_scene','updateFade','BUTTON_BUFFER','_messageButtonConsoleVisible','_msgCursorSettings','skip','EXT_FAST_FORWARD_STOP_ON_SCENE_CHANGE','updateColor','Buttons','ExtMessageFunc','VisuMZ_4_MessageVisibility','autoForwardTriggered','top','VisuMZ_1_MessageCore','scale','BUTTON_HEIGHT','EXT_CURSOR_FOLLOW_TEXT','updateDimensions','isFurnitureSystemMode','isEventRunning','removeExistingPauseSignSprites','GameEnd','_windowskin','updateEffekseer','ARRAYJSON','General','VOCAB','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','characterName','escape','#%1','ConvertParams','onTouchScrollStart','Window_Message_autoPositionOffsetY','trim','addedHeight','Window_Message','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','loadPartyGraphics','bottom','addChild','createContents','OffsetY','isSceneMap','playOkSound','ImgToggled','initMessageButtonConsole','updateImageMessageCursorPauseSignSprites','frameCount','USE_BACK_IMAGE_SPRITES','isCustomMessageCursorEnabled','MinimumWait','anchor','refreshButtonConsole','loadWindowskin','windowskin','visible','onSavefileOk','FONT_FACE','updateMessageTailBitmap','loadSystemImages','WindowLayer_update','ImgDisabled','ToggledColor','showButtonConsole','command101','autoPositionTail','Position','map','Window_Message_update','_pauseSignSprite','%1AnchorY','ButtonOffsetX','image','_cachedIndex','version','drawMessageFace','toUpperCase','_refreshPauseSign','FastFwd','openness','contents','FollowText','active','faceIndex','Rows','removeChild','TEXT_COLOR_DISABLED','return\x200','Scene_Battle_update','isSaveEnabled','ShowDefault','updateExtendedFastForwardMode','description','msgButtonConsole','includes','save','10lgvvEC','OffsetX','addButtonConsoleObject','isClosing','processButtonShortcut','1305078FbbWSP','POSITION','autoPositionOffsetX','setMessageCursorSettings','usesAutoPositionMessageTail','updateMain','log','Game_System_initialize','Settings','_hideButtonConsole','fontSize','JSON','drawing','floor','gameend','ButtonHeight','AUTO_FORWARD_MIN_DELAY','BUTTON_ORDER','flushTextState','SceneManager_push','getCustomBackgroundSettings','FrameDelay','_lastExtMsgFuncIndex','_type','faceName','drawText','iconWidth','parse','initialize','Filename','IconSet','updateIconMessageCursorPauseSignSprites','_heldDownFastFwd','alpha','anyActiveMessageInputWindows','backlog','19478660QwBUfN','18627RKGGMV','parameters','_extendedFastForwardMode','Enable','2120560YcCYBM','createBackImageSprites','508389oIUxGc','%1OffsetX','Window_Message_startPause','refresh','Speed','IconIndex','WaitPerChar','isRTL','FONT_SIZE','faceWidth','FastForwardKey','NormalColor','bottom%1Filename','startPause','getColor','setMessageAutoForwardMode','createAllWindows','FlipMultiplier','_messageTailSettings','_eventItemWindow','isTouchScrollEnabled','%1Filename','updateExtendedFastForwardCancel','SceneChangeReset','_interpreter','isSceneUsingExFastForward','prepareHideButtonConsoleTextCode','textColorID','hideButtonConsoleAutoSize','createCustomMessageCursorPauseSignSprites','_createPauseSignSprites','toggleAutoForward','Load','convertVariableEscapeCharacters','text','Allow','_disallowFastForward','Window_Message_autoPositionOffsetX','upper','_messageTail','backOpacity','TEXT_COLOR_NORMAL','initMembers','name','ARRAYSTR','FUNC','width','_extFastForwardLooping','_afterQteSessionDelay','loadCharacter','setMessageTailSettings','positionX','updateExtMsgFuncResetTimers','updateMessageTailVisibility','Cols','getMessageTailSettings','_messageWindow','padding','updateAutoPosition','updateMessageTailPosition','Window_Message_initialize','_buttonConsoleButtons','ARRAYFUNC','VisuMZ_1_MessageCore\x20is\x20out\x20of\x20date.\x0a','loadFace','<HIDEBUTTONCONSOLE>','Auto','toggleMessageWindowVisibility','bitmap','max','isOpen','constructor','Scene_Boot_loadSystemImages','hide','parseMessageTailTextCodes','_parentWindow','opacity','setExtendedFastForwardMode','Game_Interpreter_command101','Visible','NUM','_contentsSprite','%1OffsetY','_pauseSignAnimationCount','exit','changeTextColor','create','Window_Message_newPage','auto','_buttonConsoleSprites','clamp','isTriggered','isMessageAutoForwardMode','1800XAPmAA','left','setFrame','buffer','load','preConvertEscapeCharacters','LoadKey','_messageAutoForwardMode','itemPadding','_childInterpreter','replace','getMessageCursorSettings','isExtendedFastForwardDisallowed','show','addAutoForwardDelay','loadSystem','drawFace','round','MsgTail','innerWidth','Window_Base_preConvertEscapeCharacters','autoPositionOffsetY','MsgCursor','isSceneBattle','updatePauseSignHeightextMsgFunction','ImgEnabled','center','convertMessageTailEscapeCodes','battlerName','TEXT_COLOR_TOGGLED','Save','Window_Base_flushTextState','Window_Message_updateAutoPosition','lastFile','isMainMenuMessageLogEnabled','Scene_Map_updateMainMultiply','getMessageTailMainKey','fastfwd','updateColorFilter','initMessageCursorSettings','Window_Message_startWait','setupMessageTailSettings','update','VisuMZ_3_MessageLog','Left','updatePadding','Options','GraphicType','makeDeepCopy','Window_Message_addedHeight','options','meetExtMsgFuncResetRequirements','resetMessageTailSettings','isPressed','ButtonWidth','ARRAYSTRUCT','isActivatedExtendedFastForwardMode','filter','length','isMessageButtonConsoleVisible','updateBackImageSpriteVisibility','height','setMessageButtonConsoleVisible','toLowerCase','Scene_Message_createAllWindows','addChildToBack','requestAnimation','isExtendedFastForwardMode','location','ButtonOffsetY','status','DEFAULT_SHOW','EXT_FAST_FORWARD_LOOPS','createMessageTailSprite','playCancel','updateCustomMessageCursorPauseSignSprites','format','clear','_numberInputWindow','createButtonConsole','_updatePauseSign','2457009ttxFPG','11871NILBna','cos','_cache_customMessageCursorFrameCount','moveCustomMessageCursorPauseSign','OptionsKey','Window_Message_isTriggered','_index','%1%2','Game_Temp_requestAnimation','Scene_Save','EXT_FAST_FORWARD_ENABLED','ExtFastFwdDisallow','BUTTON_OFFSET_Y','isAnySavefileExists','VisuMZ_2_QTE_TriggerSys','STRUCT','SHORTCUT_KEY','resetFontSettings','loadSystemImagesForExtMessageFunc','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','registerCommand','initExtendedFastForward','prototype','_messageTailSprite','_currentAutoSize','MsgButtonConsole','AnchorX','Right','VisuMZ_1_SaveCore','_autoForwardCount','BUTTON_WIDTH','push','playBuzzerSound','right','autoPositionLeft','isPlayingQTE','match','SKIN','STR','updateConsoleVisibility','ButtonBuffer','MessageCore','Window_Message_initMembers','checkBackImageSprites','VisuMZ_1_OptionsCore','_choiceListWindow','updateMessageTailSprite','refreshCustomMessageCursorPauseSign','alignButtonConsoleButtons','direction','setExtendedFastForwardDisallowed','MessageCursorSettings','The\x20latest\x20version\x20is\x20required\x20to\x20use\x0a'];_0x3910=function(){return _0x5d068d;};return _0x3910();}Window_Message[_0x3068b8(0x1b0)]['hideButtonConsoleAutoSize']=function(_0x2d2ecf){const _0x30754b=_0x3068b8;if(!VisuMZ[_0x30754b(0x1dc)]['Settings'][_0x30754b(0x1b3)]['AutoSizeHide'])return![];if(_0x2d2ecf[_0x30754b(0x1be)](Window_Message['_autoSizeRegexp']))return!![];if(_0x2d2ecf[_0x30754b(0x1be)](Window_Message['_autoPosRegExp']))return!![];return![];},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x179)]=Window_Message['prototype'][_0x3068b8(0x1f6)],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1f6)]=function(){const _0x1a4086=_0x3068b8;let _0x227686=VisuMZ[_0x1a4086(0x1dc)][_0x1a4086(0x179)][_0x1a4086(0x1cf)](this);if(this[_0x1a4086(0xc9)])return _0x227686;return SceneManager[_0x1a4086(0x1fe)]()&&$gameSystem['isMessageButtonConsoleVisible']()&&([_0x1a4086(0x1df),_0x1a4086(0x1fa)][_0x1a4086(0xb9)](Window_ButtonConsole[_0x1a4086(0xc1)][_0x1a4086(0x187)]()['trim']())&&(_0x227686+=Window_ButtonConsole[_0x1a4086(0x1e2)])),_0x227686;},VisuMZ[_0x3068b8(0x1dc)]['Window_Message_updateDimensions']=Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1e4)],Window_Message[_0x3068b8(0x1b0)]['updateDimensions']=function(){const _0x26fe64=_0x3068b8;VisuMZ[_0x26fe64(0x1dc)]['Window_Message_updateDimensions'][_0x26fe64(0x1cf)](this),this['showButtonConsole'](),this['refreshButtonConsole']();},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x9a)]=function(){const _0x42ff9c=_0x3068b8;if(!SceneManager[_0x42ff9c(0x1fe)]())return;for(const _0x2366f4 of this[_0x42ff9c(0x128)]){!this[_0x42ff9c(0xc9)]&&$gameSystem[_0x42ff9c(0x183)]()?_0x2366f4[_0x42ff9c(0x155)]():_0x2366f4[_0x42ff9c(0x134)]();}this[_0x42ff9c(0x1ca)]();},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x208)]=function(){const _0x787f35=_0x3068b8;for(const _0x4d6f9e of this[_0x787f35(0x128)]){_0x4d6f9e[_0x787f35(0xee)]();}},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x197)]=function(){const _0x1b8ebe=_0x3068b8;this[_0x1b8ebe(0x128)]=[];for(const _0x2baed9 of Window_ButtonConsole['BUTTON_ORDER']){this[_0x1b8ebe(0xbd)](_0x2baed9);}this[_0x1b8ebe(0x1ca)]();},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xbd)]=function(_0x333c59){const _0x5db8b9=_0x3068b8;_0x333c59=_0x333c59['toLowerCase']()[_0x5db8b9(0x1f5)]();switch(_0x333c59){case _0x5db8b9(0x1d8):if(!Scene_Message[_0x5db8b9(0x1a4)])return;break;case _0x5db8b9(0x17a):if(!Imported[_0x5db8b9(0x1c6)])return;break;case'save':case _0x5db8b9(0x14c):if(!Imported[_0x5db8b9(0x1b6)])return;break;case _0x5db8b9(0x134):if(!Imported[_0x5db8b9(0x1dd)])return;break;case _0x5db8b9(0xe3):case _0x5db8b9(0xc6):if(!Imported[_0x5db8b9(0x173)])return;break;}const _0x22cad0=new Window_ButtonConsole(_0x333c59,this);this['_buttonConsoleButtons'][_0x5db8b9(0x1b9)](_0x22cad0),this[_0x5db8b9(0x1fb)](_0x22cad0);},Window_Message['prototype'][_0x3068b8(0x1ca)]=function(){const _0x3a0d99=_0x3068b8;if(!SceneManager['isSceneMap']())return;const _0x28872a=Window_ButtonConsole[_0x3a0d99(0xc1)][_0x3a0d99(0x187)]()['trim'](),_0xda9da7=this[_0x3a0d99(0x128)];this['_contentsSprite']['x']=this[_0x3a0d99(0x13c)]['y']=0x0;if(!$gameSystem[_0x3a0d99(0x183)]())return;if([_0x3a0d99(0x1df),_0x3a0d99(0x1fa)]['includes'](_0x28872a)){let _0xa5df50=_0xda9da7[_0x3a0d99(0x182)]*Window_ButtonConsole['BUTTON_WIDTH'];_0xa5df50+=(_0xda9da7['length']-0x1)*Window_ButtonConsole[_0x3a0d99(0x1d5)];let _0x4d7b16=Math[_0x3a0d99(0xcd)]((this[_0x3a0d99(0x119)]-_0xa5df50)/0x2),_0x17cf25=_0x4d7b16;_0x17cf25+=Window_ButtonConsole['BUTTON_OFFSET_X'];for(const _0xa74b14 of _0xda9da7){_0xa74b14['x']=_0x17cf25,_0x17cf25+=Window_ButtonConsole[_0x3a0d99(0x1b8)]+Window_ButtonConsole[_0x3a0d99(0x1d5)];}}if(_0x28872a===_0x3a0d99(0x1df)){let _0x3c3827=Window_ButtonConsole['BUTTON_BUFFER'];for(const _0x1bca19 of _0xda9da7){_0x1bca19['y']=_0x3c3827;}if(this[_0x3a0d99(0xc9)])return;_0x3c3827=Window_ButtonConsole[_0x3a0d99(0x1e2)],_0x3c3827+=Window_ButtonConsole[_0x3a0d99(0x1a6)],this[_0x3a0d99(0x13c)]['y']=_0x3c3827;};if(_0x28872a===_0x3a0d99(0x1fa)){let _0x4f7cd5=this[_0x3a0d99(0x185)]-Window_ButtonConsole['BUTTON_HEIGHT'];_0x4f7cd5-=Window_ButtonConsole[_0x3a0d99(0x1d5)],_0x4f7cd5+=Window_ButtonConsole[_0x3a0d99(0x1a6)];for(const _0x125064 of _0xda9da7){_0x125064['y']=_0x4f7cd5;}}},Window_Message['prototype'][_0x3068b8(0xbf)]=function(_0x57221e){const _0x5e9c24=_0x3068b8;if(this[_0x5e9c24(0xc9)])return;if(!$gameSystem[_0x5e9c24(0x183)]())return;_0x57221e=_0x57221e[_0x5e9c24(0x187)]()[_0x5e9c24(0x1f5)]();switch(_0x57221e){case _0x5e9c24(0xba):$gameSystem['isSaveEnabled']()&&SceneManager['isSceneMap']()?(this[_0x5e9c24(0x1ff)](),SceneManager[_0x5e9c24(0x1b9)](Scene_SaveButtonConsole)):this[_0x5e9c24(0x1ba)]();break;case _0x5e9c24(0x14c):DataManager[_0x5e9c24(0x1a7)]()&&SceneManager['isSceneMap']()?(this[_0x5e9c24(0x1ff)](),SceneManager[_0x5e9c24(0x1b9)](Scene_Load)):this[_0x5e9c24(0x1ba)]();break;case _0x5e9c24(0x17a):SceneManager[_0x5e9c24(0x1fe)]()?(this[_0x5e9c24(0x1ff)](),SceneManager[_0x5e9c24(0x1b9)](Scene_Options)):this[_0x5e9c24(0x1ba)]();break;case _0x5e9c24(0xce):SceneManager[_0x5e9c24(0x1fe)]()?(this[_0x5e9c24(0x1ff)](),SceneManager[_0x5e9c24(0x1b9)](Scene_GameEnd)):this[_0x5e9c24(0x1ba)]();break;}},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x170)]=Window_Message[_0x3068b8(0x1b0)]['startWait'],Window_Message[_0x3068b8(0x1b0)]['startWait']=function(_0x56cdd3){const _0x20b473=_0x3068b8;if(SceneManager[_0x20b473(0x1d3)]['isExtendedFastForwardMode']())return;VisuMZ['ExtMessageFunc']['Window_Message_startWait']['call'](this,_0x56cdd3);},Window_Message['prototype'][_0x3068b8(0x205)]=function(){const _0x4a642e=_0x3068b8,_0x59fa0c=$gameSystem[_0x4a642e(0x153)]();return _0x59fa0c[_0x4a642e(0xe8)];},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x109)]=function(){const _0x477c6a=_0x3068b8;this[_0x477c6a(0x205)]()?(this[_0x477c6a(0x1e7)](),this[_0x477c6a(0x108)]()):Window_Base['prototype']['_createPauseSignSprites']['call'](this);},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1e7)]=function(){const _0x19184a=_0x3068b8;if(!this[_0x19184a(0xa0)])return;this[_0x19184a(0xb0)](this[_0x19184a(0xa0)]);},Window_Message['prototype'][_0x3068b8(0x108)]=function(){const _0x4eccd2=_0x3068b8,_0x405ed3=$gameSystem[_0x4eccd2(0x153)]();this[_0x4eccd2(0xa0)]=new Sprite(),this[_0x4eccd2(0x1fb)](this[_0x4eccd2(0xa0)]),this[_0x4eccd2(0xa0)][_0x4eccd2(0x207)]['x']=_0x405ed3[_0x4eccd2(0x1b4)],this[_0x4eccd2(0xa0)]['anchor']['y']=_0x405ed3['AnchorY'],this[_0x4eccd2(0x13e)]=0x0;},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xa8)]=function(){const _0x14f20f=_0x3068b8;this['isCustomMessageCursorEnabled']()?this[_0x14f20f(0x1c9)]():(Window_Base[_0x14f20f(0x1b0)][_0x14f20f(0xa8)][_0x14f20f(0x1cf)](this),this['updatePauseSignHeightextMsgFunction']());},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1c9)]=function(){const _0x296cc6=_0x3068b8,_0x503bc8=this[_0x296cc6(0xa0)];if(!_0x503bc8)return;const _0x55c76f=$gameSystem['getMessageCursorSettings'](),_0xf8e206=_0x55c76f[_0x296cc6(0x177)][_0x296cc6(0x187)]()['trim']();if(_0xf8e206===_0x296cc6(0xa3))_0x503bc8[_0x296cc6(0x12f)]=ImageManager[_0x296cc6(0x157)](_0x55c76f[_0x296cc6(0xdd)]);else{if(_0xf8e206==='windowskin'){const _0x9ed9c2=0x90,_0x22ba3a=0x60,_0x25526e=0x18;_0x503bc8['bitmap']=this[_0x296cc6(0x1e9)],_0x503bc8[_0x296cc6(0x14a)](_0x9ed9c2,_0x22ba3a,_0x25526e,_0x25526e);}else _0x503bc8[_0x296cc6(0x12f)]=ImageManager[_0x296cc6(0x157)](_0x296cc6(0xde));}},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x160)]=function(){const _0x4f0d66=_0x3068b8,_0x139e3b=this['_pauseSignSprite'];if(!_0x139e3b)return;if(!$gameSystem[_0x4f0d66(0x183)]())return;if(this[_0x4f0d66(0x1b2)])return;_0x139e3b['y']-=Window_ButtonConsole[_0x4f0d66(0x1e2)];},Window_Message['prototype'][_0x3068b8(0x198)]=function(){const _0xb65cb6=_0x3068b8;this[_0xb65cb6(0x205)]()?this['updateCustomMessageCursorPauseSignSprites']():Window_Base[_0xb65cb6(0x1b0)][_0xb65cb6(0x198)]['call'](this);},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x193)]=function(){const _0x3500ef=_0x3068b8;if(this[_0x3500ef(0x19c)]===Graphics[_0x3500ef(0x203)])return;this[_0x3500ef(0x19c)]=Graphics[_0x3500ef(0x203)];const _0x486fb3=this[_0x3500ef(0xa0)];if(!_0x486fb3)return;const _0x1516ab=_0x486fb3[_0x3500ef(0x12f)];if(_0x1516ab[_0x3500ef(0x119)]<=0x0)return;const _0x490838=$gameSystem[_0x3500ef(0x153)](),_0x22c471=_0x490838[_0x3500ef(0x177)][_0x3500ef(0x187)]()[_0x3500ef(0x1f5)](),_0x1b0a06=this['isAnySubWindowActive']()||this[_0x3500ef(0xbe)]();_0x486fb3['alpha']=_0x1b0a06?0x0:0x1;if(_0x486fb3[_0x3500ef(0xe1)]<=0x0)return;const _0x2dae77=_0x490838[_0x3500ef(0xaf)]*_0x490838[_0x3500ef(0x121)];this[_0x3500ef(0x13e)]++;while(this['_pauseSignAnimationCount']>=_0x2dae77*_0x490838[_0x3500ef(0xd5)]){this['_pauseSignAnimationCount']-=_0x2dae77*_0x490838[_0x3500ef(0xd5)];}if(_0x22c471===_0x3500ef(0xa3))this[_0x3500ef(0x202)]();else _0x22c471===_0x3500ef(0x20a)?Window_Base[_0x3500ef(0x1b0)][_0x3500ef(0x198)]['call'](this):this[_0x3500ef(0xdf)]();},Window_Message['prototype']['updateImageMessageCursorPauseSignSprites']=function(){const _0x4dffce=_0x3068b8,_0x1af3a1=this['_pauseSignSprite'],_0x305344=_0x1af3a1['bitmap'],_0x5641d9=$gameSystem[_0x4dffce(0x153)](),_0x2cf374=Math[_0x4dffce(0xcd)](this[_0x4dffce(0x13e)]/_0x5641d9[_0x4dffce(0xd5)]),_0xd85af5=Math[_0x4dffce(0xcd)](_0x305344[_0x4dffce(0x119)]/_0x5641d9['Cols']),_0x3cdd54=Math['floor'](_0x305344[_0x4dffce(0x185)]/_0x5641d9[_0x4dffce(0xaf)]),_0x1741f7=_0x2cf374%_0x5641d9['Cols']*_0xd85af5,_0x3431c8=Math[_0x4dffce(0xcd)](_0x2cf374/_0x5641d9[_0x4dffce(0x121)])*_0x3cdd54;_0x1af3a1[_0x4dffce(0x14a)](_0x1741f7,_0x3431c8,_0xd85af5,_0x3cdd54),_0x1af3a1[_0x4dffce(0x20b)]=this[_0x4dffce(0x131)]();},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xdf)]=function(){const _0x5df84f=_0x3068b8,_0x15ef73=this[_0x5df84f(0xa0)],_0x2b64a7=$gameSystem['getMessageCursorSettings'](),_0x20602d=_0x2b64a7[_0x5df84f(0xf0)],_0xb81961=ImageManager[_0x5df84f(0xda)],_0x4dc5b4=ImageManager['iconHeight'],_0x3d7876=_0x20602d%0x10*_0xb81961,_0x4afc36=Math[_0x5df84f(0xcd)](_0x20602d/0x10)*_0x4dc5b4;_0x15ef73[_0x5df84f(0x14a)](_0x3d7876,_0x4afc36,_0xb81961,_0x4dc5b4),_0x15ef73['visible']=this['isOpen']();if(_0x2b64a7[_0x5df84f(0xfc)]===0x0)return;_0x15ef73[_0x5df84f(0x1e1)]['x']=Math[_0x5df84f(0x19b)](Graphics[_0x5df84f(0x203)]*_0x2b64a7[_0x5df84f(0xfc)]);},Window_Message[_0x3068b8(0x1e3)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)][_0x3068b8(0x15e)][_0x3068b8(0xac)]??!![],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x19d)]=function(_0x56d133){const _0x27b4af=_0x3068b8;if(!_0x56d133)return;if(!_0x56d133[_0x27b4af(0xcc)])return;if(!this[_0x27b4af(0x205)]())return;const _0x14e790=this[_0x27b4af(0xa0)];if(!_0x14e790)return;const _0xcafca9=$gameSystem[_0x27b4af(0x153)]();_0x14e790['x']=_0x56d133['x']+this['padding']+_0xcafca9[_0x27b4af(0xbc)]+_0x14e790[_0x27b4af(0x119)]/0x2,_0x14e790['x']+=this[_0x27b4af(0x13c)]['x'],_0x14e790['y']=_0x56d133['y']+this[_0x27b4af(0x124)]+_0x56d133[_0x27b4af(0x185)]+_0xcafca9[_0x27b4af(0x1fd)],_0x14e790['y']+=this['_contentsSprite']['y'],_0x14e790['x']=Math[_0x27b4af(0x159)](_0x14e790['x']['clamp'](this[_0x27b4af(0x124)],this[_0x27b4af(0x119)])),_0x14e790['y']=Math['round'](_0x14e790['y'][_0x27b4af(0x145)](this['padding'],this['height']-this[_0x27b4af(0x124)]));},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x191)]=function(){const _0x50e81d=_0x3068b8;this[_0x50e81d(0x1b1)]=new Sprite(),this['_messageTailSprite']['visible']=![],this[_0x50e81d(0x1fb)](this[_0x50e81d(0x1b1)]);},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x17c)]=function(){const _0x3c763e=_0x3068b8;this[_0x3c763e(0x112)]={'visible':![],'lastFile':'','location':'bottom','direction':_0x3c763e(0x149),'positionX':_0x3c763e(0x143)};},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x135)]=function(_0x2e3c9f){const _0x3e514e=_0x3068b8;_0x2e3c9f[_0x3e514e(0x10d)]=this[_0x3e514e(0x10c)](_0x2e3c9f[_0x3e514e(0x10d)]),_0x2e3c9f[_0x3e514e(0x10d)]=this[_0x3e514e(0x163)](_0x2e3c9f[_0x3e514e(0x10d)]);},Window_Message['prototype'][_0x3068b8(0x163)]=function(_0x154a8b){const _0x2eb857=_0x3068b8;return _0x154a8b=_0x154a8b[_0x2eb857(0x152)](/<TAIL (?:BL|BOTTOM LEFT|DL|DOWN LEFT):[ ](\d+)>/gi,(_0x511bab,_0x460620)=>{const _0x5046a2=_0x2eb857;return this[_0x5046a2(0x171)](!![],!![],_0x460620),'';}),_0x154a8b=_0x154a8b[_0x2eb857(0x152)](/<TAIL (?:BR|BOTTOM RIGHT|DL|DOWN RIGHT):[ ](\d+)>/gi,(_0x56fb22,_0x33af80)=>{const _0x49470f=_0x2eb857;return this[_0x49470f(0x171)](!![],![],_0x33af80),'';}),_0x154a8b=_0x154a8b[_0x2eb857(0x152)](/<TAIL (?:UL|UPPER LEFT|UP LEFT):[ ](\d+)>/gi,(_0x21a629,_0x47d916)=>{return this['setupMessageTailSettings'](![],!![],_0x47d916),'';}),_0x154a8b=_0x154a8b['replace'](/<TAIL (?:UR|UPPER RIGHT|UP RIGHT):[ ](\d+)>/gi,(_0x3bd66f,_0x1c9ada)=>{const _0x3473bb=_0x2eb857;return this[_0x3473bb(0x171)](![],![],_0x1c9ada),'';}),_0x154a8b;},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x171)]=function(_0x52a272,_0x21040f,_0x6cef9e){const _0x1c9c33=_0x3068b8;if(!this['_messageTail'])this[_0x1c9c33(0x17c)]();this[_0x1c9c33(0x112)]['visible']=!![],this[_0x1c9c33(0x112)]['location']=_0x52a272?'bottom':_0x1c9c33(0x111),this[_0x1c9c33(0x112)]['direction']=_0x21040f?_0x1c9c33(0x149):_0x1c9c33(0x1bb),this[_0x1c9c33(0x112)][_0x1c9c33(0x11e)]=Number(_0x6cef9e);},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x168)]=Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x125)],Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x125)]=function(){const _0x13bb74=_0x3068b8;VisuMZ[_0x13bb74(0x1dc)][_0x13bb74(0x168)][_0x13bb74(0x1cf)](this);if(!this['_autoPositionTarget'])return;if(!this[_0x13bb74(0x1b1)])return;if(!this['_messageTail'])return;if(this['usesAutoPositionMessageTail']()){const _0x34e5dd=$gameSystem[_0x13bb74(0x122)](),_0x2a6d6f=_0x34e5dd[_0x13bb74(0x1bc)]?_0x13bb74(0x149):_0x13bb74(0x1bb);this[_0x13bb74(0x112)][_0x13bb74(0x20b)]=!![],this['_messageTail'][_0x13bb74(0x169)]='',this['_messageTail'][_0x13bb74(0x18c)]=_0x13bb74(0x1fa),this[_0x13bb74(0x112)][_0x13bb74(0x1cb)]=_0x2a6d6f,this['_messageTail'][_0x13bb74(0x11e)]='auto';}},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0xc4)]=function(){const _0x44b1b9=_0x3068b8,_0xe0315f=$gameSystem[_0x44b1b9(0x122)]();if(!_0xe0315f)return![];if(!_0xe0315f[_0x44b1b9(0x9c)])return![];const _0x597d92=_0xe0315f['autoPositionLeft']?_0x44b1b9(0x174):_0x44b1b9(0x1b5),_0x412161=_0x44b1b9(0xf7)[_0x44b1b9(0x194)](_0x597d92),_0x32baaf=_0xe0315f[_0x412161]||'';return _0x32baaf[_0x44b1b9(0x1f5)]()!=='';},VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0x110)]=Window_Message['prototype'][_0x3068b8(0xc2)],Window_Message['prototype'][_0x3068b8(0xc2)]=function(){const _0x4f0dab=_0x3068b8;let _0x347a4c=VisuMZ[_0x4f0dab(0x1dc)]['Window_Message_autoPositionOffsetX'][_0x4f0dab(0x1cf)](this);const _0x4321fd=$gameSystem[_0x4f0dab(0x122)]();return _0x4321fd&&_0x4321fd['autoPositionTail']&&(_0x347a4c+=_0x4321fd[_0x4f0dab(0xc2)]),_0x347a4c;},VisuMZ['ExtMessageFunc'][_0x3068b8(0x1f4)]=Window_Message['prototype'][_0x3068b8(0x15d)],Window_Message[_0x3068b8(0x1b0)]['autoPositionOffsetY']=function(){const _0x38063e=_0x3068b8;let _0x1e0cd9=VisuMZ['ExtMessageFunc'][_0x38063e(0x1f4)]['call'](this);const _0x308945=$gameSystem['getMessageTailSettings']();return _0x308945&&_0x308945[_0x38063e(0x9c)]&&(_0x1e0cd9+=_0x308945['autoPositionOffsetY']),_0x1e0cd9;},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x1c8)]=function(){const _0x3d67d8=_0x3068b8;if(!this['_messageTailSprite'])return;if(!this[_0x3d67d8(0x112)])return;this[_0x3d67d8(0x20e)](),this[_0x3d67d8(0x120)](),this[_0x3d67d8(0x126)]();},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x16c)]=function(){const _0x3eab88=_0x3068b8,_0x246744=this[_0x3eab88(0x112)],_0x1a53e4=_0x246744[_0x3eab88(0x18c)]==='upper'?'upper':_0x3eab88(0x1fa),_0x125c1f=_0x246744[_0x3eab88(0x1cb)]===_0x3eab88(0x149)?_0x3eab88(0x174):_0x3eab88(0x1b5);return _0x3eab88(0x1a1)['format'](_0x1a53e4,_0x125c1f);},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x20e)]=function(){const _0x2fd10b=_0x3068b8,_0x21ac8b=this[_0x2fd10b(0x1b1)],_0x278be1=this['_messageTail'],_0x3f2452=$gameSystem['getMessageTailSettings'](),_0x39b5dd=this[_0x2fd10b(0x16c)]();if(_0x278be1['lastFile']===_0x3f2452[_0x2fd10b(0x100)['format'](_0x39b5dd)])return;const _0x54b71d=_0x3f2452[_0x2fd10b(0x100)[_0x2fd10b(0x194)](_0x39b5dd)];_0x278be1[_0x2fd10b(0x169)]=_0x54b71d,_0x54b71d?_0x21ac8b[_0x2fd10b(0x12f)]=ImageManager['loadSystem'](_0x54b71d):_0x21ac8b[_0x2fd10b(0x12f)]=new Bitmap(0x1,0x1);},Window_Message[_0x3068b8(0x1b0)]['updateMessageTailVisibility']=function(){const _0x33ec7d=_0x3068b8,_0x1575c9=this[_0x33ec7d(0x1b1)],_0x48a176=this['_messageTail'];_0x1575c9[_0x33ec7d(0x20b)]=_0x48a176[_0x33ec7d(0x20b)]&&this[_0x33ec7d(0xaa)]===0xff;},Window_Message[_0x3068b8(0x1b0)][_0x3068b8(0x126)]=function(){const _0x4aa097=_0x3068b8,_0xe4c18c=this['_messageTailSprite'],_0x50eb52=this['_messageTail'],_0x4bb9f5=$gameSystem[_0x4aa097(0x122)](),_0x3fed00=this['getMessageTailMainKey']();_0xe4c18c[_0x4aa097(0x207)]['x']=_0x4bb9f5['%1AnchorX'[_0x4aa097(0x194)](_0x3fed00)],_0xe4c18c[_0x4aa097(0x207)]['y']=_0x4bb9f5[_0x4aa097(0xa1)[_0x4aa097(0x194)](_0x3fed00)],_0x50eb52[_0x4aa097(0x11e)]===_0x4aa097(0x143)?_0xe4c18c['x']=Math['round'](this[_0x4aa097(0x119)]/0x2):(_0x50eb52[_0x4aa097(0x11e)]=Number(_0x50eb52['positionX']),_0xe4c18c['x']=Math[_0x4aa097(0x159)](_0x50eb52[_0x4aa097(0x11e)])),_0x50eb52['location']===_0x4aa097(0x111)?_0xe4c18c['y']=0x0:_0xe4c18c['y']=this['height'],_0xe4c18c['x']+=_0x4bb9f5[_0x4aa097(0xec)[_0x4aa097(0x194)](_0x3fed00)],_0xe4c18c['y']+=_0x4bb9f5[_0x4aa097(0x13d)['format'](_0x3fed00)];};function Window_ButtonConsole(){this['initialize'](...arguments);}Window_ButtonConsole['prototype']=Object['create'](Window_Scrollable[_0x3068b8(0x1b0)]),Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x132)]=Window_ButtonConsole,Window_ButtonConsole[_0x3068b8(0x18f)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0xb5)],Window_ButtonConsole[_0x3068b8(0xc1)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0x9d)],Window_ButtonConsole[_0x3068b8(0x1bf)]=VisuMZ[_0x3068b8(0x1dc)]['Settings'][_0x3068b8(0x1b3)]['WindowSkin'],Window_ButtonConsole[_0x3068b8(0x20d)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)][_0x3068b8(0x1b3)]['FontFace'],Window_ButtonConsole[_0x3068b8(0xf3)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)]['MsgButtonConsole']['FontSize'],Window_ButtonConsole[_0x3068b8(0x114)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0xf6)],Window_ButtonConsole[_0x3068b8(0x165)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)]['MsgButtonConsole'][_0x3068b8(0x99)],Window_ButtonConsole[_0x3068b8(0xb1)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)][_0x3068b8(0x1b3)]['DisabledColor'],Window_ButtonConsole['BUTTON_OFFSET_X']=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)]['MsgButtonConsole'][_0x3068b8(0xa2)]??0x0,Window_ButtonConsole[_0x3068b8(0x1a6)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0x18d)]??0x0,Window_ButtonConsole[_0x3068b8(0x1b8)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0x17e)],Window_ButtonConsole[_0x3068b8(0x1e2)]=VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0xcf)],Window_ButtonConsole[_0x3068b8(0x1d5)]=VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1b3)][_0x3068b8(0x1c2)],Window_ButtonConsole[_0x3068b8(0xd1)]=VisuMZ[_0x3068b8(0x1dc)]['Settings']['Buttons']['List'],Window_ButtonConsole[_0x3068b8(0x1ed)]={'auto':VisuMZ['ExtMessageFunc']['Settings'][_0x3068b8(0x1db)][_0x3068b8(0x12d)],'fastfwd':VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1db)][_0x3068b8(0xa9)],'save':VisuMZ[_0x3068b8(0x1dc)]['Settings']['Buttons'][_0x3068b8(0x166)],'load':VisuMZ['ExtMessageFunc'][_0x3068b8(0xc8)][_0x3068b8(0x1db)][_0x3068b8(0x10b)],'options':VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1db)][_0x3068b8(0x176)],'gameend':VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1db)][_0x3068b8(0x1e8)]},Window_ButtonConsole['SHORTCUT_KEY']={'auto':VisuMZ[_0x3068b8(0x1dc)]['Settings']['Buttons']['AutoKey'],'save':VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)][_0x3068b8(0x1db)][_0x3068b8(0x1d0)],'load':VisuMZ[_0x3068b8(0x1dc)]['Settings'][_0x3068b8(0x1db)][_0x3068b8(0x14e)],'options':VisuMZ[_0x3068b8(0x1dc)][_0x3068b8(0xc8)]['Buttons'][_0x3068b8(0x19e)],'gameend':VisuMZ['ExtMessageFunc']['Settings'][_0x3068b8(0x1db)]['GameEndKey']},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0xdc)]=function(_0x1be496,_0xeaa433){const _0x662a97=_0x3068b8,_0x5ea901=new Rectangle(0x0,0x0,Window_ButtonConsole['BUTTON_WIDTH'],Window_ButtonConsole[_0x662a97(0x1e2)]);this[_0x662a97(0x136)]=_0xeaa433,Window_Scrollable['prototype'][_0x662a97(0xdc)]['call'](this,_0x5ea901),this[_0x662a97(0xea)](),this[_0x662a97(0xd7)]=_0x1be496[_0x662a97(0x187)]()[_0x662a97(0x1f5)](),this['refresh'](),this[_0x662a97(0x134)]();},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x150)]=function(){return 0x0;},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x209)]=function(){const _0x55fad2=_0x3068b8;this[_0x55fad2(0x20a)]=ImageManager['loadSystem'](Window_ButtonConsole[_0x55fad2(0x1bf)]);},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x175)]=function(){const _0x43ab36=_0x3068b8;this[_0x43ab36(0x124)]=0x0;},Window_ButtonConsole[_0x3068b8(0x1b0)]['updateBackOpacity']=function(){const _0x48250c=_0x3068b8;this[_0x48250c(0x113)]=0xff;},Window_ButtonConsole[_0x3068b8(0x1b0)]['createBackImageSprites']=function(){const _0x573cd3=_0x3068b8;Window_ButtonConsole[_0x573cd3(0x204)]===undefined&&this[_0x573cd3(0x1c5)]();if(!Window_ButtonConsole[_0x573cd3(0x204)])return;this[_0x573cd3(0x137)]=0x0;const _0x21ff19=VisuMZ[_0x573cd3(0x1dc)][_0x573cd3(0xc8)][_0x573cd3(0x1b3)],_0x2da5e6=['ImgDisabled',_0x573cd3(0x161),_0x573cd3(0x200)];this[_0x573cd3(0x144)]={};for(const _0x1f2dad of _0x2da5e6){if(_0x21ff19[_0x1f2dad]!==''){const _0xb818c8=ImageManager[_0x573cd3(0x157)](_0x21ff19[_0x1f2dad]);this[_0x573cd3(0x144)][_0x1f2dad]=new Sprite(_0xb818c8);const _0x3d1d3=this[_0x573cd3(0x144)][_0x1f2dad];this[_0x573cd3(0x189)](_0x3d1d3),_0x3d1d3['x']=_0x21ff19['%1OffsetX'['format'](_0x1f2dad)]||0x0,_0x3d1d3['y']=_0x21ff19['%1OffsetY'[_0x573cd3(0x194)](_0x1f2dad)]||0x0;}}this[_0x573cd3(0x184)]();},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x1c5)]=function(){const _0x23287e=_0x3068b8;Window_ButtonConsole[_0x23287e(0x204)]=![];const _0x4eaa58=VisuMZ['ExtMessageFunc']['Settings'][_0x23287e(0x1b3)],_0x567488=[_0x23287e(0x98),'ImgEnabled',_0x23287e(0x200)];for(const _0x8483a7 of _0x567488){if(_0x4eaa58[_0x8483a7]!==''){Window_ButtonConsole['USE_BACK_IMAGE_SPRITES']=!![];break;}}},Window_ButtonConsole[_0x3068b8(0x1b0)]['resetFontSettings']=function(){const _0x4e5fbd=_0x3068b8;Window_Scrollable[_0x4e5fbd(0x1b0)]['resetFontSettings'][_0x4e5fbd(0x1cf)](this),this['contents']['fontFace']=Window_ButtonConsole['FONT_FACE'],this[_0x4e5fbd(0xab)][_0x4e5fbd(0xca)]=Window_ButtonConsole[_0x4e5fbd(0xf3)];},Window_ButtonConsole[_0x3068b8(0x1b0)]['refresh']=function(){const _0x4ddef9=_0x3068b8;this[_0x4ddef9(0x1fc)](),this[_0x4ddef9(0x1ab)]();const _0x144d28=TextManager[_0x4ddef9(0xb8)](this[_0x4ddef9(0xd7)]),_0x4a7d30=this[_0x4ddef9(0x106)]();this[_0x4ddef9(0x140)](ColorManager['getColor'](_0x4a7d30)),this[_0x4ddef9(0xd9)](_0x144d28,0x0,0x0,this[_0x4ddef9(0x15b)],_0x4ddef9(0x162));},Window_ButtonConsole[_0x3068b8(0x1b0)]['textColorID']=function(){const _0x245575=_0x3068b8;switch(this['_type']){case _0x245575(0x143):if($gameTemp[_0x245575(0x147)]())return Window_ButtonConsole['TEXT_COLOR_TOGGLED'];break;case _0x245575(0x16d):const _0x50fd8a=SceneManager[_0x245575(0x1d3)];if($gameSystem[_0x245575(0x154)]())return Window_ButtonConsole[_0x245575(0xb1)];else{if(_0x50fd8a&&_0x50fd8a['isActivatedExtendedFastForwardMode']&&_0x50fd8a[_0x245575(0x180)]())return Window_ButtonConsole[_0x245575(0x165)];}break;case _0x245575(0xba):if(!$gameSystem[_0x245575(0xb4)]()||!SceneManager['isSceneMap']())return Window_ButtonConsole[_0x245575(0xb1)];break;case'load':if(!DataManager['isAnySavefileExists']()||!SceneManager[_0x245575(0x1fe)]())return Window_ButtonConsole[_0x245575(0xb1)];break;case _0x245575(0x17a):case _0x245575(0xce):if(!SceneManager[_0x245575(0x1fe)]())return Window_ButtonConsole['TEXT_COLOR_DISABLED'];break;case'backlog':case _0x245575(0xc6):if(!$gameSystem[_0x245575(0x16a)]()||!SceneManager[_0x245575(0x1fe)]())return Window_ButtonConsole[_0x245575(0xb1)];break;}return Window_ButtonConsole[_0x245575(0x114)];},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0xff)]=function(){return!![];},Window_ButtonConsole['prototype'][_0x3068b8(0x1f3)]=function(){const _0x2124f0=_0x3068b8;if(this[_0x2124f0(0xaa)]<0xff)return;if(!this['visible'])return;switch(this[_0x2124f0(0xd7)]){case _0x2124f0(0x143):let _0x1639e9=!$gameTemp[_0x2124f0(0x147)]();$gameTemp[_0x2124f0(0xfa)](_0x1639e9);_0x1639e9?this[_0x2124f0(0x1ff)]():SoundManager[_0x2124f0(0x192)]();break;case'fastfwd':if(!$gameSystem[_0x2124f0(0x154)]()){let _0x314389=!$gameTemp[_0x2124f0(0x18b)]();$gameTemp[_0x2124f0(0x138)](_0x314389),_0x314389?this[_0x2124f0(0x1ff)]():SoundManager['playCancel'](),this['refresh']();}else this[_0x2124f0(0x1ba)]();break;case _0x2124f0(0xba):$gameSystem['isSaveEnabled']()&&SceneManager[_0x2124f0(0x1fe)]()?(this[_0x2124f0(0x1ff)](),SceneManager['push'](Scene_SaveButtonConsole)):this[_0x2124f0(0x1ba)]();break;case _0x2124f0(0x14c):DataManager[_0x2124f0(0x1a7)]()&&SceneManager['isSceneMap']()?(this[_0x2124f0(0x1ff)](),SceneManager[_0x2124f0(0x1b9)](Scene_Load)):this[_0x2124f0(0x1ba)]();break;case _0x2124f0(0x17a):SceneManager[_0x2124f0(0x1fe)]()?(this[_0x2124f0(0x1ff)](),SceneManager[_0x2124f0(0x1b9)](Scene_Options)):this['playBuzzerSound']();break;case'gameend':SceneManager[_0x2124f0(0x1fe)]()?(this['playOkSound'](),SceneManager['push'](Scene_GameEnd)):this[_0x2124f0(0x1ba)]();break;case'hide':Imported[_0x2124f0(0x1dd)]&&$gameTemp[_0x2124f0(0x12e)]();break;case'backlog':case'log':Imported[_0x2124f0(0x173)]&&($gameSystem['isMainMenuMessageLogEnabled']()&&SceneManager[_0x2124f0(0x1fe)]()?(this[_0x2124f0(0x1ff)](),SceneManager['push'](Scene_MessageLog)):this['playBuzzerSound']());break;}TouchInput[_0x2124f0(0x195)]();},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x172)]=function(){const _0x449c3f=_0x3068b8;Window_Scrollable[_0x449c3f(0x1b0)][_0x449c3f(0x172)]['call'](this),this['updateConsoleVisibility'](),this['updateColor'](),this[_0x449c3f(0x184)]();},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x1c1)]=function(){const _0x3c72bf=_0x3068b8;if(!this[_0x3c72bf(0x136)])return;this[_0x3c72bf(0xaa)]=this[_0x3c72bf(0x136)][_0x3c72bf(0xaa)];},Window_ButtonConsole['prototype'][_0x3068b8(0x1da)]=function(){const _0x2b7bc6=_0x3068b8;this[_0x2b7bc6(0xd7)]===_0x2b7bc6(0x16d)&&(this[_0x2b7bc6(0xe0)]!==Input[_0x2b7bc6(0x17d)](VisuMZ['MessageCore'][_0x2b7bc6(0xc8)][_0x2b7bc6(0x1ec)][_0x2b7bc6(0xf5)])&&(this[_0x2b7bc6(0xe0)]=Input['isPressed'](VisuMZ[_0x2b7bc6(0x1c3)][_0x2b7bc6(0xc8)]['General'][_0x2b7bc6(0xf5)]),this[_0x2b7bc6(0xee)]()));},Window_ButtonConsole[_0x3068b8(0x1b0)][_0x3068b8(0x184)]=function(){const _0x497911=_0x3068b8;if(!Window_ButtonConsole[_0x497911(0x204)])return;if(this[_0x497911(0x144)][_0x497911(0x98)]){const _0xde39e9=this['_buttonConsoleSprites'][_0x497911(0x98)];_0xde39e9[_0x497911(0x20b)]=this[_0x497911(0x106)]()===Window_ButtonConsole[_0x497911(0xb1)];}if(this['_buttonConsoleSprites'][_0x497911(0x161)]){const _0x2ffcb6=this[_0x497911(0x144)][_0x497911(0x161)];_0x2ffcb6[_0x497911(0x20b)]=this[_0x497911(0x106)]()===Window_ButtonConsole[_0x497911(0x114)];}if(this[_0x497911(0x144)][_0x497911(0x200)]){const _0x49f7ff=this[_0x497911(0x144)][_0x497911(0x200)];_0x49f7ff[_0x497911(0x20b)]=this[_0x497911(0x106)]()===Window_ButtonConsole[_0x497911(0x165)];}};