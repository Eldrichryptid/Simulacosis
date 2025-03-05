//=============================================================================
// VisuStella MZ - State Tooltips
// VisuMZ_3_StateTooltips.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_StateTooltips = true;

var VisuMZ = VisuMZ || {};
VisuMZ.StateTooltips = VisuMZ.StateTooltips || {};
VisuMZ.StateTooltips.version = 1.09;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.09] [StateTooltips]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/State_Tooltips_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_MessageCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds a tooltip window in battle (and other scenes) whenever the
 * player's mouse cursor is hovered over specific areas of the screen. The
 * tooltip window will display a list of the states, buffs, and debuffs the
 * hovered battler has along with a description of the entities and their
 * remaining duration.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Tooltip window displays when hovering over battlers and specific windows
 *   to display their states, buffs, and debuffs.
 * * Adjust the text format in which information is displayed inside the
 *   tooltip window.
 * * Modify the descriptions for states, buffs, and debuffs to your liking.
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
 * * VisuMZ_1_BattleCore
 * * VisuMZ_1_MessageCore
 * * VisuMZ_1_SkillsStatesCore
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_2_PartySystem
 * 
 * VisuMZ_2_ClassChangeSystem
 *
 * These plugins have scenes that also support tooltips if this plugin is also
 * installed while those are active in your game's project.
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
 * VisuMZ_1_ElementStatusCore
 * 
 * The updated Status Menu currently does not contain tooltip support for the
 * "General" pages that may display the actor's states. This is due to the
 * customization aspect for the various Status Menu pages. There will be a
 * future update where we will adapt this feature.
 * 
 * ---
 *
 * VisuMZ_2_DragonbonesUnion
 *
 * If you are using a Dragonbones Battler and want to apply a state tooltip to
 * it, the access area of the battler will be based on the hitbox size you
 * declare for the Dragonbones Battler with notetags. This is because all
 * Dragonbones battlers do not have innate automatically calculated hitbox
 * sizes as a result of their dynamically animated nature.
 * 
 * Please refer to the notetag section of the Dragonbones Union plugin for
 * Dragonbones Battler hitboxes to learn how to apply hitbox sizes.
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
 * === Description-Related Notetags ===
 * 
 * ---
 *
 * <Help Description>
 *  text
 *  text
 * </Help Description>
 *
 * - Used for: State Notetags
 * - Assigns a help description for the state.
 * - Replace 'text' with text you want displayed for the tooltip window.
 * - This best works with one line.
 * - If this notetag is not used, the help description will default to the
 *   setting found in the plugin's Plugin Parameters.
 * - Insert %1 into the help description to show any data that would otherwise
 *   be shown as the state display, such as Absorption Barrier count.
 * - This is used as a common notetag between Battle Core's state descriptions
 *   and State Tooltips' state descriptions.
 *
 * ---
 *
 * <State Tooltip Description>
 *  text
 *  text
 * </State Tooltip Description>
 *
 * - Used for: State Notetags
 * - Assigns a help description for the state.
 * - Replace 'text' with text you want displayed for the tooltip window.
 * - This best works with one line.
 * - If this notetag is not used, the help description will default to the
 *   setting found in the plugin's Plugin Parameters.
 * - Insert %1 into the help description to show any data that would otherwise
 *   be shown as the state display, such as Absorption Barrier count.
 * - If both <Help Description> and <State Tooltip Description> notetags
 *   exist in the same state, priority will be given to this one for the
 *   state tooltips window.
 *
 * ---
 * 
 * <Exclude From Tooltips>
 * 
 * - Used for: State Notetags
 * - Excludes the state from being displayed in the state tooltips.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tooltip Settings
 * ============================================================================
 *
 * General settings for the State Tooltips Window.
 *
 * ---
 *
 * Appearance
 * 
 *   Scale:
 *   - What scale size do you want for the tooltip?
 *   - Use 1.0 for normal size.
 * 
 *   Centered?:
 *   - Center the state tooltip when shown through hovering?
 * 
 *   Skin Filename:
 *   - What window skin do you want to use for the tooltip?
 * 
 *   Skin Opacity:
 *   - What opacity setting is used for the tooltip?
 *   - Use a number between 0 and 255.
 *
 * ---
 *
 * Offset
 * 
 *   Offset X:
 *   - Offset the tooltip X position from the mouse?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the tooltip Y position from the mouse?
 *   - Negative: up. Positive: down.
 *
 * ---
 * 
 * Keyboard-Select Show:
 * 
 * This allows showing enemy tooltips when selecting targets during battle
 * while using the keyboard. Tooltip will appear after a brief pause while
 * selecting the enemy.
 *   
 *   Enabled?:
 *   - Show state tooltips when selecting targets using keyboard? 
 *   
 *   Centered?:
 *   - Center the state tooltip when shown through keyboard? 
 *   
 *   Hover Delay (MS):
 *   - How many milliseconds (ms) to delay the tooltip from showing as to not
 *     clutter up target selection screen.
 *   
 *   Offset X:
 *   - Offset the tooltip X position from target's base?
 *   - Negative: left. Positive: right.
 * 
 *     Actor Frontview X:
 *     - Additional Offset X when selecting actors in frontview.
 *     - Negative: left. Positive: right.
 *   
 *     Weakness Display X:
 *     - Additional Offset X when using VisuMZ_3_WeaknessDisplay.
 *     - Negative: left. Positive: right.
 *   
 *   Offset Y:
 *   - Offset the tooltip Y position from target's base?
 *   - Negative: up. Positive: down.
 * 
 *     Actor Frontview Y:
 *     - Additional Offset Y when selecting actors in frontview.
 *     - Negative: up. Positive: down.
 *   
 *     Weakness Display Y:
 *     - Additional Offset Y when using VisuMZ_3_WeaknessDisplay.
 *     - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * Vocabulary settings for the State Tooltips Window.
 *
 * ---
 *
 * General
 * 
 *   Default Description:
 *   - This is the default description that appears for a state without a
 *     declared description. %1 - State's Name
 *   - Can use text codes.
 *
 * ---
 *
 * Entries
 * 
 *   Enemy Aspect Format:
 *   -  Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Description, %4 - Aspect Color
 * 
 *   State Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Description, %4 - Duration, %5 - State Color
 * 
 *   Buff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Buff Color
 * 
 *   Debuff Format:
 *   - Can use text codes.
 *   - %1 - Icon, %2 - Name, %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * 
 *   Replace Whites?:
 *   - If state, buff, debuff names are white, replace them?
 * 
 *     Replacement Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 *
 * ---
 *
 * Turns Remaining
 * 
 *   Action End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Turn End Format:
 *   - Can use text codes.
 *   - %1 - Remaining, %2 - State/Buff/Debuff Color
 * 
 *   Passive Text:
 *   - Can use text codes.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Choose which windows to enable tooltip support for.
 *
 * ---
 *
 * Settings
 * 
 *   Window_BattleStatus:
 *   Window_ClassStatus:
 *   Window_EquipStatus:
 *   Window_MenuActor:
 *   Window_MenuStatus:
 *   Window_PartyStatus:
 *   Window_SkillStatus:
 *   Window_Status:
 *   - Enable State Tooltips for this window?
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
 * Version 1.09: November 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated <Help Description> notetag documentation:
 * *** This is used as a common notetag between Battle Core's state
 *     descriptions and State Tooltips' state descriptions.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <State Tooltip Description>
 * **** A prioritized help description used to separate from the common help
 *      description notetag shared with Battle Core's In-Battle Status.
 * 
 * Version 1.08: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Keyboard-Select Show added by Arisu.
 * *** This allows showing enemy tooltips when selecting targets during battle
 *     while using the keyboard. Tooltip will appear after a brief pause while
 *     selecting the enemy.
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Tooltip Settings > Appearance > Centered?
 * **** Center the state tooltip when shown through hovering?
 * *** Parameters > Tooltip Settings > Keyboard-Select Show
 * **** See help file for more information.
 * *** Parameters > Vocabulary > Entries > Enemy Aspect Format
 * **** Used to support the Battle Core's new Enemy Aspect feature.
 * 
 * Version 1.07: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where state tooltips showed through skill and item windows
 *    with the VisuMZ_3_FrontviewBattleUI layout. Fix made by Olivia.
 * 
 * Version 1.06: September 14, 2023
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_FrontviewBattleUI!
 * 
 * Version 1.05: February 24, 2022
 * * Feature Update!
 * ** When the Choice List Window is hovered over, the State Tooltip window
 *    will hide itself. Update made by Irina.
 * 
 * Version 1.04: October 21, 2021
 * * Documentation Update!
 * ** Added a section for VisuMZ_1_ElementStatusCore in the "VisuStella MZ
 *    Compatibility" section since we received a very good question on it.
 * *** The updated Status Menu currently does not contain tooltip support for
 *     the "General" pages that may display the actor's states. This is due to
 *     the customization aspect for the various Status Menu pages. There will
 *     be a future update where we will adapt this feature.
 * 
 * Version 1.03: October 7, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.02: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Irina.
 * *** <Exclude From Tooltips>
 * **** Excludes the state from being displayed in the state tooltips.
 * 
 * Version 1.01: April 2, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_2_DragonbonesUnion plugin.
 * 
 * Version 1.00 Official Release Date: February 24, 2021
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
 * @param StateTooltips
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Tooltip:struct
 * @text Tooltip Settings
 * @type struct<Tooltip>
 * @desc General settings for the State Tooltips Window.
 * @default {"Appearance":"","Scale:num":"0.6","WindowSkin:str":"Window","WindowOpacity:num":"240","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0","KeySelectShow":"","SelectShowEnabled:eval":"true","SelectShowCenter:eval":"true","SelectShowDelay:num":"1500","SelectShowOffsetX:num":"+0","SelectShowActorFrontviewOffsetX:num":"+0","SelectShowWeaknessDisplayOffsetX:num":"+0","SelectShowOffsetY:num":"+0","SelectShowActorFrontviewOffsetY:num":"-4","SelectShowWeaknessDisplayOffsetY:num":"+20"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc Vocabulary settings for the State Tooltips Window.
 * @default {"General":"","HelpDescription:json":"\"-\"","Entries":"","StateFmt:str":"\\C[%5]%1%2:\\C[0] %3 %4","BuffFmt:str":"\\C[%5]%1%2▲:\\C[0] Increases unit's %2 to \\C[%5]%3%\\C[0] %4","DebuffFmt:str":"\\C[%5]%1%2▼:\\C[0] Decreases unit's %2 to \\C[%5]%3%\\C[0] %4","ReplaceWhite:eval":"true","WhiteReplaceColor:str":"5","Turns":"","ActionsFmt:str":"\\C[6](Actions \\C[%2]%1\\C[6])\\C[0]","TurnsFmt:str":"\\C[5](Turns \\C[%2]%1\\C[5])\\C[0]","PassiveText:str":"\\C[4](Passive)\\C[0]"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Choose which windows to enable tooltip support for.
 * @default {"Window_BattleStatus:eval":"true","Window_ClassStatus:eval":"true","Window_EquipStatus:eval":"true","Window_MenuActor:eval":"true","Window_MenuStatus:eval":"true","Window_PartyStatus:eval":"true","Window_SkillStatus:eval":"true","Window_Status:eval":"true"}
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
 * Tooltip Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Tooltip:
 *
 * @param Appearance
 *
 * @param Scale:num
 * @text Scale
 * @parent Appearance
 * @desc What scale size do you want for the tooltip?
 * Use 1.0 for normal size.
 * @default 0.6
 *
 * @param BaseShowCenter:eval
 * @text Centered?
 * @parent Appearance
 * @type boolean
 * @on Centered
 * @off Upper Left
 * @desc Center the state tooltip when shown through hovering?
 * @default false
 *
 * @param WindowSkin:str
 * @text Skin Filename
 * @parent Appearance
 * @type file
 * @dir img/system/
 * @desc What window skin do you want to use for the tooltip?
 * @default Window
 *
 * @param WindowOpacity:num
 * @text Skin Opacity
 * @parent Appearance
 * @type number
 * @min 0
 * @max 255
 * @desc What opacity setting is used for the tooltip?
 * Use a number between 0 and 255.
 * @default 240
 *
 * @param Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offset the tooltip X position from the mouse?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offset the tooltip Y position from the mouse?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param KeySelectShow
 * @text Keyboard-Select Show
 *
 * @param SelectShowEnabled:eval
 * @text Enabled?
 * @parent KeySelectShow
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Show state tooltips when selecting targets using keyboard?
 * @default true
 *
 * @param SelectShowCenter:eval
 * @text Centered?
 * @parent KeySelectShow
 * @type boolean
 * @on Centered
 * @off Upper Left
 * @desc Center the state tooltip when shown through keyboard?
 * @default true
 *
 * @param SelectShowDelay:num
 * @text Hover Delay (MS)
 * @parent KeySelectShow
 * @type number
 * @min 1
 * @desc How many milliseconds (ms) to delay the tooltip from
 * showing as to not clutter up target selection screen.
 * @default 1500
 *
 * @param SelectShowOffsetX:num
 * @text Offset X
 * @parent KeySelectShow
 * @desc Offset the tooltip X position from target's base?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SelectShowActorFrontviewOffsetX:num
 * @text Actor Frontview X
 * @parent SelectShowOffsetX:num
 * @desc Additional Offset X when selecting actors in frontview.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SelectShowWeaknessDisplayOffsetX:num
 * @text Weakness Display X
 * @parent SelectShowOffsetX:num
 * @desc Additional Offset X when using VisuMZ_3_WeaknessDisplay.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param SelectShowOffsetY:num
 * @text Offset Y
 * @parent KeySelectShow
 * @desc Offset the tooltip Y position from target's base?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param SelectShowActorFrontviewOffsetY:num
 * @text Actor Frontview Y
 * @parent SelectShowOffsetY:num
 * @desc Additional Offset Y when selecting actors in frontview.
 * Negative: up. Positive: down.
 * @default -4
 *
 * @param SelectShowWeaknessDisplayOffsetY:num
 * @text Weakness Display Y
 * @parent SelectShowOffsetY:num
 * @desc Additional Offset Y when using VisuMZ_3_WeaknessDisplay.
 * Negative: up. Positive: down.
 * @default +20
 *
 */
/* ----------------------------------------------------------------------------
 * Vocab Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param General
 *
 * @param HelpDescription:json
 * @text Default Description
 * @parent General
 * @type note
 * @desc This is the default description that appears for a state
 * without a declared description. %1 - State's Name
 * @default "-"
 * 
 * @param Entries
 *
 * @param EnemyAspectFmt:str
 * @text Enemy Aspect Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Description, %4 - Aspect Color
 * @default \C[%4]%1%2:\C[0] %3
 *
 * @param StateFmt:str
 * @text State Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Description, %4 - Duration, %5 - State Color
 * @default \C[%5]%1%2:\C[0] %3 %4
 *
 * @param BuffFmt:str
 * @text Buff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Buff Color
 * @default \C[%5]%1%2▲:\C[0] Increases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param DebuffFmt:str
 * @text Debuff Format
 * @parent Entries
 * @desc Can use text codes. %1 - Icon, %2 - Name,
 * %3 - Percentage, %4 - Duration, %5 - Debuff Color
 * @default \C[%5]%1%2▼:\C[0] Decreases unit's %2 to \C[%5]%3%\C[0] %4
 *
 * @param ReplaceWhite:eval
 * @text Replace Whites?
 * @parent Entries
 * @type boolean
 * @on Replace
 * @off Don't Replace
 * @desc If state, buff, debuff names are white, replace them?
 * @default true
 *
 * @param WhiteReplaceColor:str
 * @text Replacement Color
 * @parent ReplaceWhite:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 5
 * 
 * @param Turns
 * @text Turns Remaining
 *
 * @param ActionsFmt:str
 * @text Action End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[6](Actions \C[%2]%1\C[6])\C[0]
 *
 * @param TurnsFmt:str
 * @text Turn End Format
 * @parent Turns
 * @desc Can use text codes.
 * %1 - Remaining, %2 - State/Buff/Debuff Color
 * @default \C[5](Turns \C[%2]%1\C[5])\C[0]
 *
 * @param PassiveText:str
 * @text Passive Text
 * @parent Turns
 * @desc Can use text codes.
 * @default \C[4](Passive)\C[0]
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param Window_BattleStatus:eval
 * @text Window_BattleStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_ClassStatus:eval
 * @text Window_ClassStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_EquipStatus:eval
 * @text Window_EquipStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuActor:eval
 * @text Window_MenuActor
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_MenuStatus:eval
 * @text Window_MenuStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_PartyStatus:eval
 * @text Window_PartyStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_SkillStatus:eval
 * @text Window_SkillStatus
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 * @param Window_Status:eval
 * @text Window_Status
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable State Tooltips for this window?
 * @default true
 *
 */
//=============================================================================

const _0x2ba630=_0x1163;(function(_0x52ed90,_0x396de5){const _0x299239=_0x1163,_0x25ba0e=_0x52ed90();while(!![]){try{const _0x57d5a6=parseInt(_0x299239(0x203))/0x1+parseInt(_0x299239(0x1de))/0x2+-parseInt(_0x299239(0x1dd))/0x3*(parseInt(_0x299239(0x227))/0x4)+parseInt(_0x299239(0x193))/0x5*(-parseInt(_0x299239(0x242))/0x6)+parseInt(_0x299239(0x1f3))/0x7*(parseInt(_0x299239(0x1ac))/0x8)+parseInt(_0x299239(0x1f8))/0x9+parseInt(_0x299239(0x263))/0xa*(parseInt(_0x299239(0x259))/0xb);if(_0x57d5a6===_0x396de5)break;else _0x25ba0e['push'](_0x25ba0e['shift']());}catch(_0x11321c){_0x25ba0e['push'](_0x25ba0e['shift']());}}}(_0x570d,0xac380));function _0x1163(_0xda7d38,_0x5586a8){const _0x570dbe=_0x570d();return _0x1163=function(_0x116348,_0x47d9c5){_0x116348=_0x116348-0x186;let _0x2bd139=_0x570dbe[_0x116348];return _0x2bd139;},_0x1163(_0xda7d38,_0x5586a8);}var label=_0x2ba630(0x269),tier=tier||0x0,dependencies=['VisuMZ_1_BattleCore'],pluginData=$plugins[_0x2ba630(0x21a)](function(_0x24e1a0){const _0x4964ea=_0x2ba630;return _0x24e1a0[_0x4964ea(0x1b2)]&&_0x24e1a0[_0x4964ea(0x266)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x2ba630(0x244)]=VisuMZ[label][_0x2ba630(0x244)]||{},VisuMZ['ConvertParams']=function(_0x23dc52,_0xfb04d4){const _0x4a6459=_0x2ba630;for(const _0x28114d in _0xfb04d4){if(_0x28114d['match'](/(.*):(.*)/i)){const _0x38a86d=String(RegExp['$1']),_0x533d2d=String(RegExp['$2'])[_0x4a6459(0x1d6)]()[_0x4a6459(0x18d)]();let _0x3ec6f3,_0x350c88,_0x5c8909;switch(_0x533d2d){case'NUM':_0x3ec6f3=_0xfb04d4[_0x28114d]!==''?Number(_0xfb04d4[_0x28114d]):0x0;break;case _0x4a6459(0x1fc):_0x350c88=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):[],_0x3ec6f3=_0x350c88[_0x4a6459(0x1b6)](_0x15793b=>Number(_0x15793b));break;case _0x4a6459(0x1ee):_0x3ec6f3=_0xfb04d4[_0x28114d]!==''?eval(_0xfb04d4[_0x28114d]):null;break;case'ARRAYEVAL':_0x350c88=_0xfb04d4[_0x28114d]!==''?JSON['parse'](_0xfb04d4[_0x28114d]):[],_0x3ec6f3=_0x350c88[_0x4a6459(0x1b6)](_0x4f3460=>eval(_0x4f3460));break;case'JSON':_0x3ec6f3=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):'';break;case _0x4a6459(0x254):_0x350c88=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):[],_0x3ec6f3=_0x350c88[_0x4a6459(0x1b6)](_0x5b2118=>JSON[_0x4a6459(0x274)](_0x5b2118));break;case'FUNC':_0x3ec6f3=_0xfb04d4[_0x28114d]!==''?new Function(JSON['parse'](_0xfb04d4[_0x28114d])):new Function('return\x200');break;case _0x4a6459(0x1a9):_0x350c88=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):[],_0x3ec6f3=_0x350c88[_0x4a6459(0x1b6)](_0x3b7ddb=>new Function(JSON[_0x4a6459(0x274)](_0x3b7ddb)));break;case'STR':_0x3ec6f3=_0xfb04d4[_0x28114d]!==''?String(_0xfb04d4[_0x28114d]):'';break;case'ARRAYSTR':_0x350c88=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):[],_0x3ec6f3=_0x350c88[_0x4a6459(0x1b6)](_0x319c52=>String(_0x319c52));break;case _0x4a6459(0x237):_0x5c8909=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):{},_0x3ec6f3=VisuMZ[_0x4a6459(0x18a)]({},_0x5c8909);break;case _0x4a6459(0x24c):_0x350c88=_0xfb04d4[_0x28114d]!==''?JSON[_0x4a6459(0x274)](_0xfb04d4[_0x28114d]):[],_0x3ec6f3=_0x350c88[_0x4a6459(0x1b6)](_0x491851=>VisuMZ[_0x4a6459(0x18a)]({},JSON[_0x4a6459(0x274)](_0x491851)));break;default:continue;}_0x23dc52[_0x38a86d]=_0x3ec6f3;}}return _0x23dc52;},(_0x45ff41=>{const _0x332d21=_0x2ba630,_0x356b02=_0x45ff41[_0x332d21(0x27e)];for(const _0x56bc14 of dependencies){if(!Imported[_0x56bc14]){alert(_0x332d21(0x19e)[_0x332d21(0x1c5)](_0x356b02,_0x56bc14)),SceneManager[_0x332d21(0x1fb)]();break;}}const _0xe2cb1b=_0x45ff41[_0x332d21(0x266)];if(_0xe2cb1b[_0x332d21(0x222)](/\[Version[ ](.*?)\]/i)){const _0x1bc8a8=Number(RegExp['$1']);_0x1bc8a8!==VisuMZ[label][_0x332d21(0x21e)]&&(alert(_0x332d21(0x248)[_0x332d21(0x1c5)](_0x356b02,_0x1bc8a8)),SceneManager[_0x332d21(0x1fb)]());}if(_0xe2cb1b[_0x332d21(0x222)](/\[Tier[ ](\d+)\]/i)){const _0x156757=Number(RegExp['$1']);_0x156757<tier?(alert(_0x332d21(0x1b7)[_0x332d21(0x1c5)](_0x356b02,_0x156757,tier)),SceneManager[_0x332d21(0x1fb)]()):tier=Math[_0x332d21(0x1a1)](_0x156757,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x332d21(0x244)],_0x45ff41[_0x332d21(0x24d)]);})(pluginData),VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x1c1)]={'HelpDescription':/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i,'TooltipDescription':/<(?:STATE |)TOOLTIP DESCRIPTION>\s*([\s\S]*)\s*<\/(?:STATE |)TOOLTIP DESCRIPTION>/i,'Exclude':/<EXCLUDE FROM (?:TOOLTIP|TOOLTIPS)>/i},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x1a7)]=Scene_Boot[_0x2ba630(0x1b5)][_0x2ba630(0x247)],Scene_Boot[_0x2ba630(0x1b5)][_0x2ba630(0x247)]=function(){const _0x1496f7=_0x2ba630;VisuMZ['StateTooltips'][_0x1496f7(0x1a7)]['call'](this),this[_0x1496f7(0x1cb)]();},Scene_Boot[_0x2ba630(0x1b5)][_0x2ba630(0x1cb)]=function(){const _0x54b8f0=_0x2ba630;this[_0x54b8f0(0x210)]();},Scene_Boot['prototype'][_0x2ba630(0x210)]=function(){const _0x5a2d7d=_0x2ba630;if(VisuMZ['ParseAllNotetags'])return;for(const _0x5800a4 of $dataStates){if(!_0x5800a4)continue;VisuMZ[_0x5a2d7d(0x269)][_0x5a2d7d(0x18c)](_0x5800a4);}},VisuMZ[_0x2ba630(0x269)]['ParseStateNotetags']=VisuMZ[_0x2ba630(0x20e)],VisuMZ[_0x2ba630(0x20e)]=function(_0x4efe4f){const _0x4394d6=_0x2ba630;VisuMZ[_0x4394d6(0x269)]['ParseStateNotetags'][_0x4394d6(0x25e)](this,_0x4efe4f),VisuMZ[_0x4394d6(0x269)][_0x4394d6(0x18c)](_0x4efe4f);},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x18c)]=function(_0x5b297d){const _0xbce326=_0x2ba630;_0x5b297d[_0xbce326(0x266)]=VisuMZ[_0xbce326(0x269)][_0xbce326(0x244)]['Vocab'][_0xbce326(0x1ef)];const _0x1ef989=VisuMZ['StateTooltips'][_0xbce326(0x1c1)],_0x1b9a62=_0x5b297d[_0xbce326(0x1e0)];_0x1b9a62[_0xbce326(0x222)](_0x1ef989[_0xbce326(0x1ef)])&&(_0x5b297d[_0xbce326(0x266)]=String(RegExp['$1'])[_0xbce326(0x18d)]()),_0x1b9a62[_0xbce326(0x222)](_0x1ef989[_0xbce326(0x1e5)])&&(_0x5b297d[_0xbce326(0x275)]=String(RegExp['$1'])[_0xbce326(0x18d)]()),_0x1b9a62[_0xbce326(0x222)](_0x1ef989[_0xbce326(0x189)])&&(_0x5b297d[_0xbce326(0x265)]=!![]);},ColorManager[_0x2ba630(0x240)]=function(_0x33b96e){const _0x3aa348=_0x2ba630;return _0x33b96e=String(_0x33b96e),_0x33b96e[_0x3aa348(0x222)](/#(.*)/i)?_0x3aa348(0x277)[_0x3aa348(0x1c5)](String(RegExp['$1'])):this[_0x3aa348(0x216)](Number(_0x33b96e));},SceneManager[_0x2ba630(0x1bd)]=function(){const _0x16157c=_0x2ba630;return this[_0x16157c(0x1b9)]&&this[_0x16157c(0x1b9)]['constructor']===Scene_Battle;},SceneManager[_0x2ba630(0x1b0)]=function(){const _0x3aeec1=_0x2ba630,_0x270a48=SceneManager[_0x3aeec1(0x1b9)]['_stateTooltipWindow'];if(!_0x270a48)return null;return _0x270a48[_0x3aeec1(0x22d)];},SceneManager[_0x2ba630(0x270)]=function(_0x5882f5){const _0x59009d=_0x2ba630;if(_0x5882f5&&!_0x5882f5[_0x59009d(0x208)]())return;if(_0x5882f5&&_0x5882f5[_0x59009d(0x26c)]())return;const _0x4c29f4=SceneManager[_0x59009d(0x1b9)][_0x59009d(0x202)];if(!_0x4c29f4)return;_0x4c29f4[_0x59009d(0x1c9)](_0x5882f5);},SceneManager[_0x2ba630(0x1d2)]=function(_0x50da93){const _0x6609f9=_0x2ba630;if(_0x50da93&&!_0x50da93['isAppeared']())return;const _0x14d201=SceneManager[_0x6609f9(0x1b9)][_0x6609f9(0x202)];if(!_0x14d201)return;if(_0x14d201[_0x6609f9(0x22d)]!==_0x50da93)return;_0x14d201['requestRefresh']();},VisuMZ[_0x2ba630(0x269)]['Game_Battler_refresh']=Game_Battler[_0x2ba630(0x1b5)][_0x2ba630(0x249)],Game_Battler[_0x2ba630(0x1b5)][_0x2ba630(0x249)]=function(){const _0x41c680=_0x2ba630;VisuMZ['StateTooltips'][_0x41c680(0x22c)]['call'](this),SceneManager[_0x41c680(0x1d2)](this);},VisuMZ[_0x2ba630(0x269)]['Scene_Base_createWindowLayer']=Scene_Base['prototype']['createWindowLayer'],Scene_Base[_0x2ba630(0x1b5)]['createWindowLayer']=function(){const _0x184e46=_0x2ba630;VisuMZ[_0x184e46(0x269)][_0x184e46(0x253)][_0x184e46(0x25e)](this),this[_0x184e46(0x251)]();},Scene_Base[_0x2ba630(0x1b5)][_0x2ba630(0x251)]=function(){const _0x5343d5=_0x2ba630;this[_0x5343d5(0x202)]=new Window_StateTooltip(),this[_0x5343d5(0x20d)](this[_0x5343d5(0x202)]);},VisuMZ['StateTooltips']['Scene_Battle_commandSkill']=Scene_Battle['prototype'][_0x2ba630(0x258)],Scene_Battle[_0x2ba630(0x1b5)][_0x2ba630(0x258)]=function(){const _0x423b88=_0x2ba630,_0x592378=VisuMZ[_0x423b88(0x269)][_0x423b88(0x231)]();VisuMZ[_0x423b88(0x269)]['Scene_Battle_commandSkill'][_0x423b88(0x25e)](this),!_0x592378&&VisuMZ['StateTooltips'][_0x423b88(0x231)]()&&SceneManager[_0x423b88(0x270)](null);},VisuMZ['StateTooltips']['Scene_Battle_commandItem']=Scene_Battle[_0x2ba630(0x1b5)]['commandItem'],Scene_Battle[_0x2ba630(0x1b5)][_0x2ba630(0x1a6)]=function(){const _0x2acee5=_0x2ba630,_0x493c20=VisuMZ[_0x2acee5(0x269)][_0x2acee5(0x231)]();VisuMZ[_0x2acee5(0x269)]['Scene_Battle_commandItem'][_0x2acee5(0x25e)](this),!_0x493c20&&VisuMZ['StateTooltips']['IsBattlerCoveredByWindow']()&&SceneManager['setStateTooltipBattler'](null);},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x215)]=Sprite_Clickable[_0x2ba630(0x1b5)][_0x2ba630(0x267)],Sprite_Clickable[_0x2ba630(0x1b5)][_0x2ba630(0x267)]=function(){const _0x5a4555=_0x2ba630;VisuMZ['StateTooltips'][_0x5a4555(0x215)]['call'](this),this['onMouseEnterStateTooltips']();},VisuMZ['StateTooltips'][_0x2ba630(0x24f)]=Sprite_Clickable['prototype'][_0x2ba630(0x1f0)],Sprite_Clickable[_0x2ba630(0x1b5)][_0x2ba630(0x1f0)]=function(){const _0x1ceac8=_0x2ba630;VisuMZ[_0x1ceac8(0x269)][_0x1ceac8(0x24f)][_0x1ceac8(0x25e)](this),this['onMouseExitStateTooltips']();},Sprite_Clickable['prototype'][_0x2ba630(0x239)]=function(){const _0x458d74=_0x2ba630;this[_0x458d74(0x270)]();},Sprite_Clickable[_0x2ba630(0x1b5)]['onMouseExitStateTooltips']=function(){const _0x2ca3b4=_0x2ba630,_0x1939c6=this['getStateTooltipBattler']();_0x1939c6&&SceneManager[_0x2ca3b4(0x1b0)]()===_0x1939c6&&SceneManager[_0x2ca3b4(0x270)](null);},Sprite_Clickable[_0x2ba630(0x1b5)][_0x2ba630(0x270)]=function(){const _0x2757d2=_0x2ba630,_0x1c01ed=this[_0x2757d2(0x1e8)]();_0x1c01ed&&SceneManager[_0x2757d2(0x270)](_0x1c01ed);},Sprite_Clickable[_0x2ba630(0x1b5)][_0x2ba630(0x1e8)]=function(){return null;},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x1f4)]=Sprite_Battler[_0x2ba630(0x1b5)][_0x2ba630(0x267)],Sprite_Battler[_0x2ba630(0x1b5)][_0x2ba630(0x267)]=function(){const _0x4fc6da=_0x2ba630;VisuMZ['StateTooltips'][_0x4fc6da(0x1f4)][_0x4fc6da(0x25e)](this);if(this[_0x4fc6da(0x1fd)]())return;this['setStateTooltipBattler']();},Sprite_Battler[_0x2ba630(0x1b5)][_0x2ba630(0x1fd)]=function(){const _0x31cc97=_0x2ba630,_0x3d74ae=SceneManager[_0x31cc97(0x1b9)];if(_0x3d74ae&&_0x3d74ae['_inBattleStatusMode'])return!![];const _0x111927=this['_battler'][_0x31cc97(0x1e7)]();if(_0x111927){if(VisuMZ[_0x31cc97(0x269)][_0x31cc97(0x231)]())return!![];}return![];},VisuMZ[_0x2ba630(0x269)]['IsBattlerCoveredByWindow']=function(){const _0x4be841=_0x2ba630,_0x52a710=SceneManager['_scene'];if(Imported[_0x4be841(0x235)]&&BattleManager[_0x4be841(0x279)]()){if(_0x52a710[_0x4be841(0x22a)][_0x4be841(0x212)]()&&_0x52a710[_0x4be841(0x22a)][_0x4be841(0x27a)])return!![];if(_0x52a710['_skillWindow'][_0x4be841(0x212)]()&&_0x52a710[_0x4be841(0x26d)]['visible'])return!![];}return![];},Sprite_Battler['prototype'][_0x2ba630(0x1e8)]=function(){const _0x3f2f5c=_0x2ba630;return this[_0x3f2f5c(0x22d)];},Window_Base[_0x2ba630(0x1b5)]['isMouseHovered']=function(){const _0x1cfef7=_0x2ba630,_0x2e3154=new Point(TouchInput['x'],TouchInput['y']),_0xede994=this[_0x1cfef7(0x221)][_0x1cfef7(0x230)](_0x2e3154);return this[_0x1cfef7(0x243)]()[_0x1cfef7(0x190)](_0xede994['x'],_0xede994['y']);},Window_Base[_0x2ba630(0x1b5)]['dimensionRect']=function(){const _0x2faf12=_0x2ba630;return new Rectangle(0x0,0x0,this['width'],this[_0x2faf12(0x276)]);},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x1e6)]=Window_Selectable[_0x2ba630(0x1b5)][_0x2ba630(0x260)],Window_Selectable[_0x2ba630(0x1b5)]['processTouch']=function(){const _0x4a34ab=_0x2ba630;VisuMZ[_0x4a34ab(0x269)][_0x4a34ab(0x1e6)][_0x4a34ab(0x25e)](this);if(this['constructor']['name']['match'](/Debug/i))return;this[_0x4a34ab(0x204)]();},Window_Selectable[_0x2ba630(0x1b5)][_0x2ba630(0x204)]=function(){const _0x1770ec=_0x2ba630;if(!this[_0x1770ec(0x1a8)]())return;if(SceneManager[_0x1770ec(0x1b9)][_0x1770ec(0x202)][_0x1770ec(0x1fe)])return;this[_0x1770ec(0x1d5)]=this[_0x1770ec(0x1d5)]||{};if(!this[_0x1770ec(0x212)]()){this[_0x1770ec(0x1d5)][_0x1770ec(0x252)]&&this[_0x1770ec(0x1d4)]();return;}else this[_0x1770ec(0x1d5)][_0x1770ec(0x252)]=!![];if(!this[_0x1770ec(0x27a)]){this[_0x1770ec(0x1d5)][_0x1770ec(0x27a)]&&this[_0x1770ec(0x1d4)]();return;}else this[_0x1770ec(0x1d5)]['visible']=!![];(this[_0x1770ec(0x1d5)]['x']!==this['x']||this[_0x1770ec(0x1d5)]['y']!==this['y']||this[_0x1770ec(0x1d5)][_0x1770ec(0x234)]!==TouchInput['x']||this[_0x1770ec(0x1d5)][_0x1770ec(0x234)]!==TouchInput['y'])&&(this[_0x1770ec(0x1d5)]['x']=this['x'],this['_cache_StateTooltips']['y']=this['y'],this[_0x1770ec(0x1d5)][_0x1770ec(0x234)]=TouchInput['x'],this[_0x1770ec(0x1d5)][_0x1770ec(0x27d)]=TouchInput['y'],this[_0x1770ec(0x1d1)]()?(this[_0x1770ec(0x1d5)][_0x1770ec(0x1ed)]=!![],this['openTouchStateTooltips']()):this['_cache_StateTooltips'][_0x1770ec(0x1ed)]&&this[_0x1770ec(0x1d4)]());},Window_Selectable[_0x2ba630(0x1b5)][_0x2ba630(0x1a8)]=function(){const _0x2a7e18=_0x2ba630;return VisuMZ[_0x2a7e18(0x269)][_0x2a7e18(0x244)][_0x2a7e18(0x25d)][this['constructor'][_0x2a7e18(0x27e)]];},Window_Selectable[_0x2ba630(0x1b5)]['isStateTooltipTouched']=function(){const _0xd08540=_0x2ba630;return this[_0xd08540(0x1f2)]()>=0x0;},Window_Selectable[_0x2ba630(0x1b5)]['isStateTooltipHovered']=function(){const _0x7257ec=_0x2ba630,_0x2c9ddf=new Point(TouchInput['x'],TouchInput['y']),_0x54e21b=this[_0x7257ec(0x221)][_0x7257ec(0x230)](_0x2c9ddf),_0x3ca71f=new Rectangle(0x0,0x0,this[_0x7257ec(0x18b)],this[_0x7257ec(0x276)]);return _0x3ca71f[_0x7257ec(0x190)](_0x54e21b['x'],_0x54e21b['y']);},Window_Selectable[_0x2ba630(0x1b5)][_0x2ba630(0x24e)]=function(){const _0x20e76d=_0x2ba630,_0x597392=this[_0x20e76d(0x1e8)]();_0x597392?(this[_0x20e76d(0x1d5)][_0x20e76d(0x25a)]=_0x597392,SceneManager['setStateTooltipBattler'](_0x597392)):this[_0x20e76d(0x1d4)]();},Window_Selectable[_0x2ba630(0x1b5)][_0x2ba630(0x1e8)]=function(){return null;},Window_Selectable[_0x2ba630(0x1b5)][_0x2ba630(0x1d4)]=function(){const _0x3e728e=_0x2ba630;this['_cache_StateTooltips'][_0x3e728e(0x252)]=![],this[_0x3e728e(0x1d5)][_0x3e728e(0x27a)]=![],this[_0x3e728e(0x1d5)][_0x3e728e(0x1ed)]=![],this[_0x3e728e(0x1d5)][_0x3e728e(0x25a)]&&(SceneManager[_0x3e728e(0x270)](null),this[_0x3e728e(0x1d5)][_0x3e728e(0x25a)]=null);},Window_MenuStatus[_0x2ba630(0x1b5)][_0x2ba630(0x1e8)]=function(){const _0x567e84=_0x2ba630,_0x41f523=this[_0x567e84(0x1f2)](),_0x269426=this[_0x567e84(0x25c)](_0x41f523);return _0x269426;},Window_SkillStatus[_0x2ba630(0x1b5)][_0x2ba630(0x1d1)]=function(){return this['isStateTooltipHovered']();},Window_SkillStatus[_0x2ba630(0x1b5)][_0x2ba630(0x1e8)]=function(){const _0x1cdcc0=_0x2ba630;return this[_0x1cdcc0(0x255)];},Window_EquipStatus[_0x2ba630(0x1b5)]['isStateTooltipTouched']=function(){const _0x79e924=_0x2ba630;return this[_0x79e924(0x198)]();},Window_EquipStatus['prototype']['getStateTooltipBattler']=function(){const _0x22af0e=_0x2ba630;return this[_0x22af0e(0x255)];},Window_Status['prototype'][_0x2ba630(0x1d1)]=function(){const _0x5eb969=_0x2ba630;return this[_0x5eb969(0x198)]();},Window_Status['prototype']['getStateTooltipBattler']=function(){return this['_actor'];},Window_BattleStatus[_0x2ba630(0x1b5)][_0x2ba630(0x1e8)]=function(){const _0x30062d=_0x2ba630,_0x5a88dc=this[_0x30062d(0x1f2)](),_0x3bad30=this[_0x30062d(0x25c)](_0x5a88dc);return _0x3bad30;},Window_BattleStatus['prototype'][_0x2ba630(0x1a8)]=function(){const _0x3a20ba=_0x2ba630;if(Imported[_0x3a20ba(0x235)]&&BattleManager[_0x3a20ba(0x279)]()){if(VisuMZ[_0x3a20ba(0x188)][_0x3a20ba(0x21e)]<1.09){let _0x232ed7='';_0x232ed7+=_0x3a20ba(0x199),_0x232ed7+=_0x3a20ba(0x23d),alert(_0x232ed7),SceneManager[_0x3a20ba(0x1fb)]();}return![];}return Window_StatusBase[_0x3a20ba(0x1b5)]['isStateTooltipEnabled'][_0x3a20ba(0x25e)](this);},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x18e)]=Window_BattleActor[_0x2ba630(0x1b5)][_0x2ba630(0x1ad)],Window_BattleActor[_0x2ba630(0x1b5)][_0x2ba630(0x1ad)]=function(_0x12b27e){const _0x4a49e6=_0x2ba630;VisuMZ['StateTooltips']['Window_BattleActor_select'][_0x4a49e6(0x25e)](this,_0x12b27e);if(this[_0x4a49e6(0x21f)]())this[_0x4a49e6(0x214)]();},Window_BattleActor[_0x2ba630(0x1b5)][_0x2ba630(0x21f)]=function(){const _0x4dc18d=_0x2ba630;if(!Window_StateTooltip[_0x4dc18d(0x26f)])return![];if(!this[_0x4dc18d(0x1ba)])return![];if(!this[_0x4dc18d(0x224)]())return![];return[_0x4dc18d(0x195),_0x4dc18d(0x24b),'up',_0x4dc18d(0x1da),'ok']['some'](_0x47e281=>Input[_0x4dc18d(0x1be)]===_0x47e281&&Input[_0x4dc18d(0x217)]<=0x2);},Window_BattleActor['prototype'][_0x2ba630(0x214)]=function(){const _0x2b08b4=_0x2ba630,_0x47da7b=this['targetActor']();SceneManager[_0x2b08b4(0x270)](null),SceneManager['moveStateTooltipToBattler'](_0x47da7b);},Window_BattleActor[_0x2ba630(0x1b5)]['targetActor']=function(){const _0x5bd095=_0x2ba630;return this[_0x5bd095(0x25c)](this[_0x5bd095(0x19a)]());},VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x1d8)]=Window_BattleEnemy[_0x2ba630(0x1b5)]['select'],Window_BattleEnemy[_0x2ba630(0x1b5)][_0x2ba630(0x1ad)]=function(_0x51a83a){const _0x57f009=_0x2ba630;VisuMZ[_0x57f009(0x269)]['Window_BattleEnemy_select'][_0x57f009(0x25e)](this,_0x51a83a);if(this['canSelectShowStateTooltips']())this[_0x57f009(0x214)]();},Window_BattleEnemy[_0x2ba630(0x1b5)][_0x2ba630(0x21f)]=function(){const _0x4f01c8=_0x2ba630;if(!Window_StateTooltip[_0x4f01c8(0x26f)])return![];if(!this[_0x4f01c8(0x1ba)])return![];if(!this[_0x4f01c8(0x23b)]())return![];return['left',_0x4f01c8(0x24b),'up',_0x4f01c8(0x1da),'ok'][_0x4f01c8(0x26a)](_0x11dea7=>Input[_0x4f01c8(0x1be)]===_0x11dea7&&Input[_0x4f01c8(0x217)]<=0x2);},Window_BattleEnemy['prototype']['selectShowStateTooltips']=function(){const _0x1cda3a=_0x2ba630,_0x10635e=this[_0x1cda3a(0x23b)]();SceneManager['setStateTooltipBattler'](null),SceneManager['moveStateTooltipToBattler'](_0x10635e);},SceneManager['moveStateTooltipToBattler']=function(_0x5f4edf){const _0x1a4127=_0x2ba630,_0x18bf7e=SceneManager[_0x1a4127(0x1b9)][_0x1a4127(0x202)];if(!_0x18bf7e)return;_0x18bf7e[_0x1a4127(0x1a3)](_0x5f4edf);};Imported[_0x2ba630(0x20b)]&&(Window_ClassStatus[_0x2ba630(0x1b5)][_0x2ba630(0x1d1)]=function(){const _0x587fc6=_0x2ba630;return this[_0x587fc6(0x198)]();},Window_ClassStatus[_0x2ba630(0x1b5)]['getStateTooltipBattler']=function(){const _0x167fb2=_0x2ba630;return this[_0x167fb2(0x255)];});;Imported['VisuMZ_2_PartySystem']&&(Window_PartyStatus[_0x2ba630(0x1b5)]['isStateTooltipTouched']=function(){return this['isStateTooltipHovered']();},Window_PartyStatus[_0x2ba630(0x1b5)]['getStateTooltipBattler']=function(){const _0x5da996=_0x2ba630;return this[_0x5da996(0x255)];});;function Window_StateTooltip(){this['initialize'](...arguments);}Window_StateTooltip['prototype']=Object[_0x2ba630(0x201)](Window_Base[_0x2ba630(0x1b5)]),Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x20c)]=Window_StateTooltip,Window_StateTooltip[_0x2ba630(0x1c2)]=VisuMZ['StateTooltips'][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x1aa)],Window_StateTooltip['WINDOW_CENTER']=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)]['BaseShowCenter']??![],Window_StateTooltip['WINDOW_SKIN_FILENAME']=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x1c4)],Window_StateTooltip['WINDOW_SKIN_OPACITY']=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x1f9)],Window_StateTooltip[_0x2ba630(0x1a5)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x228)]['EnemyAspectFmt']??_0x2ba630(0x1e1),Window_StateTooltip[_0x2ba630(0x1df)]=VisuMZ[_0x2ba630(0x269)]['Settings'][_0x2ba630(0x228)][_0x2ba630(0x191)],Window_StateTooltip[_0x2ba630(0x19f)]=VisuMZ[_0x2ba630(0x269)]['Settings'][_0x2ba630(0x228)][_0x2ba630(0x26b)],Window_StateTooltip[_0x2ba630(0x1cc)]=VisuMZ[_0x2ba630(0x269)]['Settings'][_0x2ba630(0x228)][_0x2ba630(0x261)],Window_StateTooltip['ACTIONS_FMT']=VisuMZ[_0x2ba630(0x269)]['Settings'][_0x2ba630(0x228)]['ActionsFmt'],Window_StateTooltip[_0x2ba630(0x27f)]=VisuMZ['StateTooltips'][_0x2ba630(0x244)][_0x2ba630(0x228)][_0x2ba630(0x18f)],Window_StateTooltip['PASSIVE_TEXT']=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x228)][_0x2ba630(0x1dc)],Window_StateTooltip[_0x2ba630(0x1cf)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x228)]['ReplaceWhite'],Window_StateTooltip[_0x2ba630(0x1e2)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x228)][_0x2ba630(0x25b)],Window_StateTooltip[_0x2ba630(0x209)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)]['OffsetX'],Window_StateTooltip[_0x2ba630(0x1c6)]=VisuMZ['StateTooltips'][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x1e3)],Window_StateTooltip['SELECT_SHOW_TOOLTIPS']=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)]['Tooltip'][_0x2ba630(0x207)]??!![],Window_StateTooltip[_0x2ba630(0x223)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x226)]??!![],Window_StateTooltip[_0x2ba630(0x1b4)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)]['Tooltip']['SelectShowDelay']??0x5dc,Window_StateTooltip[_0x2ba630(0x1ce)]=VisuMZ[_0x2ba630(0x269)]['Settings'][_0x2ba630(0x241)][_0x2ba630(0x20f)]??0x0,Window_StateTooltip[_0x2ba630(0x273)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x1b8)]??-0x4,Window_StateTooltip['SELECT_SHOW_OFFSET_X_WEAKNESS_DISPLAY']=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)]['SelectShowWeaknessDisplayOffsetX']??0x14,Window_StateTooltip[_0x2ba630(0x1c7)]=VisuMZ[_0x2ba630(0x269)][_0x2ba630(0x244)][_0x2ba630(0x241)][_0x2ba630(0x238)]??0x0,Window_StateTooltip['SELECT_SHOW_OFFSET_Y_ACTOR_FRONTVIEW']=VisuMZ[_0x2ba630(0x269)]['Settings'][_0x2ba630(0x241)][_0x2ba630(0x1a4)]??-0x4,Window_StateTooltip['SELECT_SHOW_OFFSET_Y_WEAKNESS_DISPLAY']=VisuMZ['StateTooltips'][_0x2ba630(0x244)][_0x2ba630(0x241)]['SelectShowWeaknessDisplayOffsetY']??0x14,Window_StateTooltip[_0x2ba630(0x1b5)]['initialize']=function(){const _0x32b8d9=_0x2ba630,_0x24e63a=new Rectangle(0x0,0x0,Graphics[_0x32b8d9(0x18b)],Graphics[_0x32b8d9(0x276)]);Window_Base[_0x32b8d9(0x1b5)][_0x32b8d9(0x1db)]['call'](this,_0x24e63a),this['scale']['x']=this[_0x32b8d9(0x1d9)]['y']=Window_StateTooltip[_0x32b8d9(0x1c2)],this[_0x32b8d9(0x196)](),this[_0x32b8d9(0x22d)]=null;},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x25f)]=function(){const _0x483d20=_0x2ba630;this['windowskin']=ImageManager[_0x483d20(0x21c)](Window_StateTooltip[_0x483d20(0x1f1)]);},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x187)]=function(){this['backOpacity']=Window_StateTooltip['WINDOW_SKIN_OPACITY'];},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1c9)]=function(_0x55fd3e){const _0x15e718=_0x2ba630;if(this[_0x15e718(0x22d)]===_0x55fd3e)return;this[_0x15e718(0x22d)]=_0x55fd3e,this[_0x15e718(0x22d)]?this['refresh']():this[_0x15e718(0x196)]();},Window_StateTooltip[_0x2ba630(0x1b5)]['refresh']=function(){const _0x1d784f=_0x2ba630;this[_0x1d784f(0x1ff)]['clear'](),this[_0x1d784f(0x20a)]();if(this[_0x1d784f(0x1bc)][_0x1d784f(0x225)]>0x0){this['resizeWindow']();const _0x56fdef=this[_0x1d784f(0x19c)]();this[_0x1d784f(0x245)](this[_0x1d784f(0x1bc)],_0x56fdef['x'],_0x56fdef['y'],_0x56fdef[_0x1d784f(0x18b)]),this[_0x1d784f(0x1c3)]();}else this[_0x1d784f(0x196)]();},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1e4)]=function(_0x4109a6){return _0x4109a6;},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x232)]=function(){return![];},Window_StateTooltip[_0x2ba630(0x1b5)]['setupText']=function(){const _0x4dff6f=_0x2ba630;this[_0x4dff6f(0x1bc)]='';if(!this[_0x4dff6f(0x22d)])return;this['setupEnemyAspectsText'](),this[_0x4dff6f(0x192)](),this['setupBuffText'](),this[_0x4dff6f(0x1ea)](),this[_0x4dff6f(0x1bc)]=this[_0x4dff6f(0x1bc)][_0x4dff6f(0x18d)]();},Window_StateTooltip['prototype'][_0x2ba630(0x1b1)]=function(){const _0xe8e692=_0x2ba630;if(!this[_0xe8e692(0x22d)][_0xe8e692(0x1e7)])return;if(!this[_0xe8e692(0x22d)][_0xe8e692(0x1e7)]())return;if(!this['_battler'][_0xe8e692(0x23f)])return;if(!this[_0xe8e692(0x22d)][_0xe8e692(0x23f)]())return;const _0x5b33d2=Window_StateTooltip[_0xe8e692(0x1a5)];if(_0x5b33d2[_0xe8e692(0x225)]<=0x0)return;const _0x2a1da1=this[_0xe8e692(0x22d)][_0xe8e692(0x1d3)]()[_0xe8e692(0x27e)],_0x3bb998=_0xe8e692(0x218)[_0xe8e692(0x1c5)](this[_0xe8e692(0x22d)]['getAspectData']()[_0xe8e692(0x205)]),_0x567972=this[_0xe8e692(0x22d)][_0xe8e692(0x1d3)]()[_0xe8e692(0x250)],_0x30160b=this['_battler'][_0xe8e692(0x1d3)]()['description'],_0x6ef701=_0x5b33d2['format'](_0x3bb998,_0x2a1da1,_0x30160b,_0x567972)[_0xe8e692(0x18d)]();_0x6ef701&&(this[_0xe8e692(0x1bc)]+=_0x6ef701+'\x0a');},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x192)]=function(){const _0x499e4e=_0x2ba630,_0x1bad36=Window_StateTooltip[_0x499e4e(0x1df)],_0xef6527=this['_battler'][_0x499e4e(0x200)]();for(const _0x29471b of _0xef6527){if(!_0x29471b)continue;if(!_0x29471b[_0x499e4e(0x27e)][_0x499e4e(0x18d)]())continue;if(_0x29471b[_0x499e4e(0x27e)][_0x499e4e(0x222)](/-----/i))continue;if(_0x29471b[_0x499e4e(0x205)]<=0x0)continue;if(_0x29471b[_0x499e4e(0x265)])continue;const _0x414217=VisuMZ['StateTooltips'][_0x499e4e(0x1c1)];if(_0x29471b[_0x499e4e(0x1e0)][_0x499e4e(0x222)](_0x414217[_0x499e4e(0x189)]))continue;const _0x23b127=_0x499e4e(0x218)[_0x499e4e(0x1c5)](_0x29471b['iconIndex']),_0x18186f=_0x29471b[_0x499e4e(0x27e)][_0x499e4e(0x18d)]();let _0x27c606=_0x29471b[_0x499e4e(0x275)]||_0x29471b['description'];const _0x47c499=_0x27c606[_0x499e4e(0x1c5)](this['_battler'][_0x499e4e(0x219)](_0x29471b['id'])),_0x14e8da=this['setupStateTurnText'](_0x29471b),_0x1b2751=ColorManager[_0x499e4e(0x27c)](_0x29471b),_0x13c448=_0x1bad36[_0x499e4e(0x1c5)](_0x23b127,_0x18186f,_0x47c499,_0x14e8da,_0x1b2751)[_0x499e4e(0x18d)]();_0x13c448&&(this[_0x499e4e(0x1bc)]+=_0x13c448+'\x0a');}},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x27b)]=function(_0x5b79a8){const _0x5d61db=_0x2ba630;if(_0x5b79a8['autoRemovalTiming']===0x0)return'';if(this[_0x5d61db(0x22d)]['passiveStates']()['includes'](_0x5b79a8))return Window_StateTooltip['PASSIVE_TEXT'];let _0x3c212c=_0x5b79a8[_0x5d61db(0x278)]===0x1?Window_StateTooltip[_0x5d61db(0x21b)]:Window_StateTooltip[_0x5d61db(0x27f)];const _0x97716=this[_0x5d61db(0x22d)]['stateTurns'](_0x5b79a8['id'])||0x0,_0x1b5b32=ColorManager[_0x5d61db(0x27c)](_0x5b79a8);return _0x3c212c['format'](_0x97716,_0x1b5b32)[_0x5d61db(0x18d)]();},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x21d)]=function(){const _0x44a9bd=_0x2ba630,_0x2690bf=Window_StateTooltip['BUFF_FMT'],_0x37389f=Window_StateTooltip[_0x44a9bd(0x1cc)];for(let _0x278d56=0x0;_0x278d56<0x8;_0x278d56++){if(!this[_0x44a9bd(0x22d)]['isBuffOrDebuffAffected'](_0x278d56))continue;const _0x3f8916=this[_0x44a9bd(0x22d)]['isBuffAffected'](_0x278d56),_0x57fa39=_0x3f8916?_0x2690bf:_0x37389f,_0x339e2f=this[_0x44a9bd(0x22d)]['buffIconIndex'](this[_0x44a9bd(0x22d)][_0x44a9bd(0x233)][_0x278d56],_0x278d56),_0x1681f5=_0x44a9bd(0x218)[_0x44a9bd(0x1c5)](_0x339e2f),_0x365c8d=TextManager[_0x44a9bd(0x194)](_0x278d56),_0x20d872=Math[_0x44a9bd(0x23e)](this[_0x44a9bd(0x22d)]['paramBuffRate'](_0x278d56)*0x64),_0x37fd70=this['setupBuffTurnText'](_0x278d56),_0x33dbd3=_0x3f8916?ColorManager[_0x44a9bd(0x256)]():ColorManager[_0x44a9bd(0x280)](),_0x47bca3=_0x57fa39[_0x44a9bd(0x1c5)](_0x1681f5,_0x365c8d,_0x20d872,_0x37fd70,_0x33dbd3)[_0x44a9bd(0x18d)]();_0x47bca3&&(this['_text']+=_0x47bca3+'\x0a');}},Window_StateTooltip['prototype'][_0x2ba630(0x24a)]=function(_0x86df2d){const _0xc463ec=_0x2ba630,_0x1dd465=Window_StateTooltip[_0xc463ec(0x27f)],_0x1a1d01=this[_0xc463ec(0x22d)]['buffTurns'](_0x86df2d),_0x3ebb59=this['_battler'][_0xc463ec(0x1ca)](_0x86df2d),_0x4c8825=_0x3ebb59?ColorManager['buffColor']():ColorManager[_0xc463ec(0x280)]();return _0x1dd465['format'](_0x1a1d01,_0x4c8825)[_0xc463ec(0x18d)]();},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1ea)]=function(){const _0x36dd1a=_0x2ba630,_0x1ed2d3=/\\C\[#(.*?)\]/g;this[_0x36dd1a(0x1bc)]=this[_0x36dd1a(0x1bc)][_0x36dd1a(0x1a0)](_0x1ed2d3,(_0x3bb852,_0xc73bb5)=>{const _0x8f1835=_0x36dd1a;if(_0xc73bb5===_0x8f1835(0x220)){const _0x2dcf91=ColorManager[_0x8f1835(0x240)](Window_StateTooltip['NONWHITE_COLOR']);_0xc73bb5=_0x2dcf91[_0x8f1835(0x1a0)](/#/g,'');}return _0x8f1835(0x268)[_0x8f1835(0x1c5)](_0xc73bb5);});},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x264)]=function(_0x2abf78,_0x243c01){const _0x4fe62b=_0x2ba630;switch(_0x2abf78){case _0x4fe62b(0x1ae):const _0x1fd6c5=this['obtainEscapeString'](_0x243c01);!this['isColorLocked']()&&_0x243c01[_0x4fe62b(0x1eb)]&&this[_0x4fe62b(0x206)](_0x1fd6c5);break;default:Window_Base[_0x4fe62b(0x1b5)]['processEscapeCharacter']['call'](this,_0x2abf78,_0x243c01);}},Window_StateTooltip['prototype']['resizeWindow']=function(){const _0x19b6d1=_0x2ba630,_0x3c1945=this['textSizeEx'](this[_0x19b6d1(0x1bc)]);this[_0x19b6d1(0x18b)]=_0x3c1945[_0x19b6d1(0x18b)]+(this[_0x19b6d1(0x19b)]()+this['padding'])*0x2,this['height']=_0x3c1945[_0x19b6d1(0x276)]+this[_0x19b6d1(0x262)]*0x2,this[_0x19b6d1(0x26e)](),this[_0x19b6d1(0x1f6)]();},Window_StateTooltip['prototype'][_0x2ba630(0x22e)]=function(){const _0x2ddcbf=_0x2ba630;Window_Base[_0x2ddcbf(0x1b5)][_0x2ddcbf(0x22e)]['call'](this),this['_requestRefresh']&&(this[_0x2ddcbf(0x1d0)]=![],this['refresh']()),this[_0x2ddcbf(0x22f)](),this[_0x2ddcbf(0x22b)](),this[_0x2ddcbf(0x1ec)](),this[_0x2ddcbf(0x1bb)]();},Window_StateTooltip['prototype'][_0x2ba630(0x272)]=function(){this['_requestRefresh']=!![];},Window_StateTooltip[_0x2ba630(0x1b5)]['updatePosition']=function(_0x2db5c5){const _0x54aab7=_0x2ba630;if(!this[_0x54aab7(0x27a)])return;if(this[_0x54aab7(0x1f5)]===TouchInput['x']&&this[_0x54aab7(0x1bf)]===TouchInput['y'])return;this[_0x54aab7(0x1f5)]=TouchInput['x'],this[_0x54aab7(0x1bf)]=TouchInput['y'];if(!_0x2db5c5)this[_0x54aab7(0x1fe)]=![];this['x']=TouchInput['x']+Window_StateTooltip[_0x54aab7(0x209)],this['y']=TouchInput['y']+Window_StateTooltip[_0x54aab7(0x1c6)],!this['_touchMoveClose']&&Window_StateTooltip[_0x54aab7(0x1e9)]&&(this['x']-=Math[_0x54aab7(0x23e)](this[_0x54aab7(0x18b)]*this[_0x54aab7(0x1d9)]['x']/0x2)),this['clampPosition']();},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1af)]=function(){const _0x40b797=_0x2ba630,_0x2e89eb=this[_0x40b797(0x18b)]*(Window_StateTooltip[_0x40b797(0x1c2)]||0.01),_0x75a1f0=this[_0x40b797(0x276)]*(Window_StateTooltip['WINDOW_SCALE']||0.01);this['x']=Math[_0x40b797(0x1ab)](this['x'][_0x40b797(0x1cd)](0x0,Graphics[_0x40b797(0x18b)]-_0x2e89eb)),this['y']=Math[_0x40b797(0x1ab)](this['y'][_0x40b797(0x1cd)](0x0,Graphics[_0x40b797(0x276)]-_0x75a1f0));},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1ec)]=function(){const _0x5150e5=_0x2ba630;this[_0x5150e5(0x22d)]&&this[_0x5150e5(0x22d)][_0x5150e5(0x26c)]()&&this['setBattler'](null);},Window_StateTooltip['prototype'][_0x2ba630(0x1bb)]=function(){const _0x578180=_0x2ba630,_0xdf88ae=this[_0x578180(0x186)]();this[_0x578180(0x257)]=this[_0x578180(0x23a)]=_0xdf88ae;},Window_StateTooltip['prototype']['targetOpacity']=function(){const _0xb30c89=_0x2ba630;if(SceneManager[_0xb30c89(0x1bd)]()){const _0x496f22=[];_0x496f22['push'](SceneManager[_0xb30c89(0x1b9)][_0xb30c89(0x1c0)]),_0x496f22[_0xb30c89(0x1c8)](SceneManager[_0xb30c89(0x1b9)][_0xb30c89(0x22a)]),_0x496f22[_0xb30c89(0x1c8)](SceneManager[_0xb30c89(0x1b9)]['_skillWindow']),_0x496f22['push'](SceneManager[_0xb30c89(0x1b9)]['_choiceListWindow']);for(const _0x5be1f3 of _0x496f22){if(_0x5be1f3&&_0x5be1f3[_0xb30c89(0x212)]()&&_0x5be1f3[_0xb30c89(0x1ba)]&&_0x5be1f3[_0xb30c89(0x211)]())return 0x0;}}return 0xff;},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1a3)]=function(_0x52ba72){const _0x4e25ed=_0x2ba630,_0xfbe8f8=Window_StateTooltip[_0x4e25ed(0x1b4)];setTimeout(this[_0x4e25ed(0x197)][_0x4e25ed(0x229)](this,_0x52ba72,TouchInput['x'],TouchInput['y']),_0xfbe8f8);},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x197)]=function(_0x2241a7,_0x22e98a,_0x470747){const _0x5d7161=_0x2ba630;if(TouchInput['x']!==_0x22e98a)return;if(TouchInput['y']!==_0x470747)return;const _0x178e6a=this['getShowSelectStateTooltipBattler']();if(_0x2241a7!==_0x178e6a)return;if(!_0x178e6a['battler']())return;this['setBattler'](_0x178e6a);let _0x544b86=this[_0x5d7161(0x22d)][_0x5d7161(0x25a)]()['x'],_0x31fd2a=this[_0x5d7161(0x22d)][_0x5d7161(0x25a)]()['y'];if(this[_0x5d7161(0x22d)][_0x5d7161(0x213)]()&&!$gameSystem[_0x5d7161(0x1a2)]()){const _0x2bc144=SceneManager[_0x5d7161(0x1b9)]['_statusWindow'];_0x31fd2a=_0x2bc144['y'],_0x544b86+=_0x2bc144['x'],_0x31fd2a-=Math[_0x5d7161(0x23e)](this[_0x5d7161(0x276)]*this[_0x5d7161(0x1d9)]['y']),_0x544b86+=Window_StateTooltip[_0x5d7161(0x273)],_0x31fd2a+=Window_StateTooltip['SELECT_SHOW_OFFSET_Y_ACTOR_FRONTVIEW'];}_0x544b86+=Math[_0x5d7161(0x23e)]((Graphics[_0x5d7161(0x18b)]-Graphics['boxWidth'])/0x2),_0x31fd2a+=Math[_0x5d7161(0x23e)]((Graphics[_0x5d7161(0x276)]-Graphics['boxHeight'])/0x2),Window_StateTooltip['SELECT_SHOW_CENTERED']&&(_0x544b86-=Math[_0x5d7161(0x23e)](this[_0x5d7161(0x18b)]*this['scale']['x']/0x2)),_0x544b86+=Window_StateTooltip[_0x5d7161(0x1ce)],_0x31fd2a+=Window_StateTooltip[_0x5d7161(0x1c7)],Imported[_0x5d7161(0x246)]&&this['_battler'][_0x5d7161(0x1e7)]()&&(_0x544b86+=Window_StateTooltip[_0x5d7161(0x1b3)],_0x31fd2a+=Window_StateTooltip[_0x5d7161(0x1fa)]),TouchInput['_x']=_0x544b86,TouchInput['_y']=_0x31fd2a,this['_lastTouchInputX']=undefined,this[_0x5d7161(0x1bf)]=undefined,this['setupTouchMoveClose'](),this[_0x5d7161(0x22b)](!![]);},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1f7)]=function(){const _0x380120=_0x2ba630;if(!SceneManager[_0x380120(0x1b9)][_0x380120(0x23c)]&&!SceneManager[_0x380120(0x1b9)]['_actorWindow'])return null;if(SceneManager[_0x380120(0x1b9)][_0x380120(0x23c)][_0x380120(0x1ba)]){const _0x483eb2=SceneManager[_0x380120(0x1b9)][_0x380120(0x23c)];return _0x483eb2[_0x380120(0x23b)]();}else{if(SceneManager[_0x380120(0x1b9)][_0x380120(0x236)]['active']){const _0x27c1e3=SceneManager[_0x380120(0x1b9)][_0x380120(0x236)];return _0x27c1e3['targetActor']();}}return null;},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x1d7)]=function(){const _0x266af2=_0x2ba630;this[_0x266af2(0x1fe)]=!![],this[_0x266af2(0x19d)]=TouchInput['x'],this[_0x266af2(0x271)]=TouchInput['y'];},Window_StateTooltip[_0x2ba630(0x1b5)][_0x2ba630(0x22f)]=function(){const _0x383dec=_0x2ba630;if(!this[_0x383dec(0x1fe)])return;let _0x28bca1=![];if(this[_0x383dec(0x19d)]!==TouchInput['x'])_0x28bca1=!![];if(this[_0x383dec(0x271)]!==TouchInput['y'])_0x28bca1=!![];if(!SceneManager[_0x383dec(0x1b9)][_0x383dec(0x23c)][_0x383dec(0x1ba)]&&!SceneManager[_0x383dec(0x1b9)][_0x383dec(0x236)][_0x383dec(0x1ba)])_0x28bca1=!![];if(!_0x28bca1)return;this[_0x383dec(0x1fe)]=![],this['setBattler'](null);};function _0x570d(){const _0x1501c2=['ACTIONS_FMT','loadSystem','setupBuffText','version','canSelectShowStateTooltips','ffffff','worldTransform','match','SELECT_SHOW_CENTERED','targetActor','length','SelectShowCenter','428eiSXSk','Vocab','bind','_itemWindow','updatePosition','Game_Battler_refresh','_battler','update','updateTouchMoveClose','applyInverse','IsBattlerCoveredByWindow','isSupportMessageKeywords','_buffs','touchX','VisuMZ_3_FrontviewBattleUI','_actorWindow','STRUCT','SelectShowOffsetY','onMouseEnterStateTooltips','contentsOpacity','enemy','_enemyWindow','in\x20order\x20for\x20VisuMZ_3_StateTooltips\x20to\x20work.','floor','hasAspectData','getColor','Tooltip','35862SSaQWz','dimensionRect','Settings','drawTextEx','VisuMZ_3_WeaknessDisplay','onDatabaseLoaded','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','refresh','setupBuffTurnText','right','ARRAYSTRUCT','parameters','openTouchStateTooltips','Sprite_Clickable_onMouseExit','nameColor','createStateTooltipWindow','open','Scene_Base_createWindowLayer','ARRAYJSON','_actor','buffColor','opacity','commandSkill','737MxTeud','battler','WhiteReplaceColor','actor','Window','call','loadWindowskin','processTouch','DebuffFmt','padding','53170vIEPId','processEscapeCharacter','excludeListing','description','onMouseEnter','\x5cHEXCOLOR<#%1>','StateTooltips','some','BuffFmt','isDead','_skillWindow','createContents','SELECT_SHOW_TOOLTIPS','setStateTooltipBattler','_lastTouchMoveCloseY','requestRefresh','SELECT_SHOW_OFFSET_X_ACTOR_FRONTVIEW','parse','tooltipDescription','height','#%1','autoRemovalTiming','isUsingFrontviewUiLayout','visible','setupStateTurnText','stateColor','touchY','name','TURNS_FMT','debuffColor','targetOpacity','updateBackOpacity','FrontviewBattleUI','Exclude','ConvertParams','width','Parse_Notetags_Description','trim','Window_BattleActor_select','TurnsFmt','contains','StateFmt','setupStateText','205ohdbpT','param','left','hide','processShowSelectStateTooltipBattler','isStateTooltipHovered','VisuMZ_3_FrontviewBattleUI\x20needs\x20to\x20be\x20updated\x20','index','itemPadding','baseTextRect','_lastTouchMoveCloseX','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','BUFF_FMT','replace','max','isSideView','moveStateTooltipToBattler','SelectShowActorFrontviewOffsetY','ASPECT_FMT','commandItem','Scene_Boot_onDatabaseLoaded','isStateTooltipEnabled','ARRAYFUNC','Scale','round','56vogUIR','select','HEXCOLOR','clampPosition','currentTooltipBattler','setupEnemyAspectsText','status','SELECT_SHOW_OFFSET_X_WEAKNESS_DISPLAY','SELECT_DELAY_BEFORE_SHOW','prototype','map','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','SelectShowActorFrontviewOffsetX','_scene','active','updateOpacity','_text','isSceneBattle','_latestButton','_lastTouchInputY','_actorCommandWindow','RegExp','WINDOW_SCALE','show','WindowSkin','format','MOUSE_OFFSET_Y','SELECT_SHOW_OFFSET_Y','push','setBattler','isBuffAffected','process_VisuMZ_StateTooltips','DEBUFF_FMT','clamp','SELECT_SHOW_OFFSET_X','REPLACE_WHITE','_requestRefresh','isStateTooltipTouched','refreshStateTooltipBattler','getAspectData','closeTouchStateTooltips','_cache_StateTooltips','toUpperCase','setupTouchMoveClose','Window_BattleEnemy_select','scale','down','initialize','PassiveText','32109hOXVdP','1729084AIPhmH','STATE_FMT','note','\x5cC[%4]%1%2:\x5cC[0]\x20%3','NONWHITE_COLOR','OffsetY','convertMessageKeywords','TooltipDescription','Window_Selectable_processTouch','isEnemy','getStateTooltipBattler','WINDOW_CENTER','replaceHexColors','drawing','updateDeath','hitTest','EVAL','HelpDescription','onMouseExit','WINDOW_SKIN_FILENAME','hitIndex','124873CVKtAp','Sprite_Battler_onMouseEnter','_lastTouchInputX','resetFontSettings','getShowSelectStateTooltipBattler','4566375WbkNSL','WindowOpacity','SELECT_SHOW_OFFSET_Y_WEAKNESS_DISPLAY','exit','ARRAYNUM','isBattlerCoveredByWindow','_touchMoveClose','contents','states','create','_stateTooltipWindow','242657EuYCpd','processTouchStateTooltips','iconIndex','changeTextColor','SelectShowEnabled','isAppeared','MOUSE_OFFSET_X','setupText','VisuMZ_2_ClassChangeSystem','constructor','addChild','ParseStateNotetags','SelectShowOffsetX','process_VisuMZ_StateTooltips_Notetags','isMouseHovered','isOpen','isActor','selectShowStateTooltips','Sprite_Clickable_onMouseEnter','textColor','_pressedTime','\x5cI[%1]','getStateDisplay','filter'];_0x570d=function(){return _0x1501c2;};return _0x570d();}