//=============================================================================
// VisuStella MZ - Visual Cutin Effect
// VisuMZ_3_VisualCutinEffect.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualCutinEffect = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualCutinEffect = VisuMZ.VisualCutinEffect || {};
VisuMZ.VisualCutinEffect.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.01] [VisualCutinEffect]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Cutin_Effect_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * A good Visual Cutin Effect can add more impact to a scene, allude to a
 * different character focus, or add hype to an action sequence in battle.
 * This plugin allows you to create Visual Cutin Effects of your choosing, with
 * a plethora of types to pick from. Their different visual appearances each
 * fit a variety of situations for your game.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Pick from 20 different cutin styles of all shapes and sizes that have
 *   variations of their own for more than 60+ total cutin choices.
 * * Select a background color to use, a parallax to go with it, and a portrait
 *   to represent a character in specific.
 * * Create custom masks and outlines to determine how cutins will be shaped.
 * * Various options allow for more versatility when creating a cutin effect.
 * * Animate the cutins via their styles, entrance and exit coordinates, as
 *   well as how the portraits and parallaxes animate.
 * * Cutins are controlled completely by their Plugin Commands from when they
 *   start to their properties to changing the portraits and parallaxes midway
 *   to the moment they end.
 * * Additional features with the Battle Core where Action Sequences can create
 *   a Visual Cutin Effect using Battle Portraits for both actors and enemies.
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
 * Understanding Visual Cutin Effects
 * ============================================================================
 *
 * This section will explain various properties of this plugin.
 *
 * ---
 *
 * Visual Cutin Effect Layer
 * 
 * For the purpose of making cutins visible enough, they will appear over all
 * spriteset objects (ie tilesets, events, battlebacks, battlers, pictures,
 * battle animations) but will appear under the majority of windows.
 *
 * ---
 * 
 * One of Each Type
 * 
 * Although you can bring out cutins at practically any time during the map (or
 * battle as long as you have the VisuMZ Battle Core), you can only bring out
 * one cutin of each type. For example, only one "LeftMajor" cutin-type can be
 * used at a time and the existing "LeftMajor" cutin must be ended before using
 * another "LeftMajor" cutin.
 * 
 * The type-restriction does NOT apply to its variations. For example, you can
 * use "LeftMajor" with "RightMajor" simultaneously without any problems.
 * Likewise, you can use "TwelvePack1" with "TwelvePack2" and "TwelvePack3".
 * 
 * What the "One of Each Type" rule means is that you cannot use multiple
 * "LeftMajor" cutins together. Not that it'd make much sense either since they
 * would just overlap each other.
 * 
 * ---
 * 
 * Order They Start
 * 
 * Cutins are layered in the order they are started with the most recent cutin
 * at the top and the oldest cutin at the back. This means if you have two
 * cutins "LeftHorzSlash" and "RightVertSlash", they will overlap each other
 * based on who has more recently started, with the more recent one on top.
 * 
 * ---
 * 
 * Visual Cutin Masking
 * 
 * Visual Cutin Effects will utilize Pixi JS's masking functions to keep their
 * contents contained within specific boundaries. All the Visual Cutin Effect's
 * individual parts (ie the portrait, parallax, outline, and background color)
 * are all affected by the mask and will not appear outside of it.
 * 
 * ---
 * 
 * Plugin-Generated Masks and Outlines
 * 
 * If you do not provide custom files for masks and outlines (don't worry, it's
 * not required), then the plugin will automatically generate them for you.
 * Each of the 20 different styles and their many variations will have a
 * generated mask and outline that can be used without the need of custom image
 * files, especially for those unfamiliar with how Pixi JS masking works.
 * 
 * ---
 * 
 * There is NO One-Size-Fits-All
 * 
 * The plugin-generated masks and outlines are of many different shapes and
 * sizes. And as images used as portraits and parallaxes can be of many varying
 * shapes and sizes as well, there's not going to be a perfect setting for
 * everything. Different cutin-types need to be experimented with different
 * settings in order to find out what works best.
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
 * In order to use Visual Cutin Effects in battle, the VisuMZ Battle Core must
 * be used in order to properly utilize them. You will also be able to utilize
 * specific battle portrait-related Action Sequence Plugin Commands found in
 * the Battle Core, too.
 * 
 * There will be some Battle Core specific notetags that can be used from this
 * plugin as well.
 * 
 * ---
 * 
 * VisuMZ_4_AnimatedPictures
 * 
 * Animated Pictures can also be used as a portrait for a Visual Cutin Effect.
 * The looping and delay information is set up via the Plugin Command settings.
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
 * === Enemy-Related Notetags ===
 * 
 * ---
 *
 * <Cutin Portrait: filename>
 *
 * - Used for: Enemy Notetags
 * - Gives the enemy a portrait to use when using Visual Cutin Effects.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 *
 * <Cutin Flip Horz>
 * <Cutin Flip Horzontal>
 * <Cutin Flip Horzontally>
 *
 * - Used for: Enemy Notetags
 * - Flips the enemy's portrait horizontally.
 * - There are no differences between the variations in notetags. The one you
 *   use is entirely up to your own personal preferences.
 *
 * ---
 *
 * <Cutin Flip Vert>
 * <Cutin Flip Vertical>
 * <Cutin Flip Vertically>
 *
 * - Used for: Enemy Notetags
 * - Flips the enemy's portrait vertically.
 * - There are no differences between the variations in notetags. The one you
 *   use is entirely up to your own personal preferences.
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
 * === Cutin Add - Plugin Commands ===
 * 
 * ---
 *
 * Cutin Add: Add Visual Cutin Effect
 * - Adds the Visual Cutin Effect using these desired settings.
 * - Only one of each cutin-style type can be present at a time.
 *
 *   Basic Settings:
 * 
 *     Cutin Style Type:
 *     - What Visual Cutin Effect style type do you wish to use?
 *     - Refer to VisuMZ wiki for visuals on styles.
 *
 *     Portrait Filename:
 *     - Pick a portrait to use for the Visual Cutin Effect.
 *     - Pick (None) to not use a portrait.
 *
 *     Parallax Filename:
 *     - Pick a parallax to use for the Visual Cutin Effect.
 *     - Pick (None) to not use a parallax.
 *
 *     Background Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 *   Extra Settings:
 *   - Extra Plugin Command settings pertaining to this Visual Cutin Effect.
 *   - These settings will be displayed in a later section.
 * 
 *   Wait for Entrance:
 *   - Wait until cutin entrance is finished before performing the next
 *     event command?
 *
 * ---
 * 
 * === Cutin Change - Plugin Commands ===
 * 
 * ---
 *
 * Cutin Change: Portrait Swap
 * - Changes target cutin-type's portrait with a different image.
 *
 *   Basic Settings:
 *
 *     Cutin Style Type:
 *     - What Visual Cutin Effect style type to update?
 *     - This determines which existing cutin-type to change.
 *
 *     Portrait Filename:
 *     - Pick a portrait to swap for the Visual Cutin Effect.
 *     - Pick (None) to not use a portrait.
 *
 *   Extra Settings:
 *   - Extra Plugin Command settings pertaining to this Visual Cutin Effect's
 *     portrait only.
 *   - These settings will be displayed in a later section.
 *   - This Plugin Command will only have the Portrait-related settings.
 *
 * ---
 *
 * Cutin Change: Parallax Swap
 * - Changes target cutin-type's parallax with a different image.
 *
 *   Basic Settings:
 *
 *     Cutin Style Type:
 *     - What Visual Cutin Effect style type to update?
 *     - This determines which existing cutin-type to change.
 *
 *     Parallax Filename:
 *     - Pick a parallax to swap for the Visual Cutin Effect.
 *     - Pick (None) to not use a parallax.
 *
 *   Extra Settings:
 *   - Extra Plugin Command settings pertaining to this Visual Cutin Effect's
 *     parallax only.
 *   - These settings will be displayed in a later section.
 *   - This Plugin Command will only have the Parallax-related settings.
 *
 * ---
 * 
 * === Cutin End - Plugin Commands ===
 * 
 * ---
 *
 * Cutin End: End Visual Cutin Effect (All)
 * - Ends all Visual Cutin Effects currently present.
 * 
 *   Wait for Exit:
 *   - Wait until cutin exit is finished before performing the next
 *     event command?
 *
 * ---
 *
 * Cutin End: End Visual Cutin Effect (Type)
 * - Ends the Visual Cutin Effect with the matching type.
 *
 *   Cutin Style Type:
 *   - What Visual Cutin Effect style type do you wish to end?
 * 
 *   Wait for Exit:
 *   - Wait until cutin exit is finished before performing the next
 *     event command?
 *
 * ---
 * 
 * === Cutin Wait - Plugin Commands ===
 * 
 * ---
 * 
 * Cutin Wait: Wait for Entrance
 * - Wait until all cutin entrances are finished before performing the next
 *   event command.
 * 
 * ---
 * 
 * Cutin Wait: Wait for Exit
 * - Wait until all cutin exits are finished before performing the next
 *   event command.
 * 
 * ---
 * 
 * === Extra Settings ===
 * 
 * ---
 * 
 * These are the settings found in the "Extra Settings" for various cutin
 * Plugin Commands.
 * 
 * ---
 * 
 * Transition
 * 
 *   Entrance Duration:
 *   - How many frames does it take to fully enter?
 *   - Used when a Visual Cutin Effect starts.
 * 
 *   Exit Duration:
 *   - How many frames does it take to fully exit?
 *   - Used when a Visual Cutin Effect ends.
 * 
 * ---
 * 
 * Cutin Settings
 * 
 *   Show BG Color?:
 *   - Add a background color for this cutin?
 *   - Background colors appear behind the parallax.
 * 
 *   Show Outline?:
 *   - Show the cutin outline?
 * 
 * ---
 * 
 * Portrait Settings > Base Properties
 * 
 *   Anchor X:
 *   - Determines the sprite anchor X alignment.
 *   - 0.0: Left, 0.5: Center, 1.0: Right.
 * 
 *   Anchor Y:
 *   - Determines the sprite anchor Y alignment.
 *   - 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's portrait hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's portrait?
 * 
 *   Offset X:
 *   - Offsets the cutin portrait's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin portrait's Y location.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Portrait Settings > Entrance Properties
 * 
 *   Entrance X:
 *   - Sets the cutin portrait's X entrance.
 *   - Negative: from left. Positive: from right.
 * 
 *   Entrance Y:
 *   - Sets the cutin portrait's Y entrance.
 *   - Negative: from up. Positive: from down.
 * 
 *   Entrance Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Exit Properties
 * 
 *   Exit X:
 *   - Sets the cutin portrait's X exit.
 *   - Negative: to left. Positive: to right.
 * 
 *   Exit Y:
 *   - Sets the cutin portrait's Y exit.
 *   - Negative: to up. Positive: to down.
 * 
 *   Exit Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Flip Properties
 * 
 *   Flip Horizontally?:
 *   - Flip the cutin portrait horizontally?
 * 
 *   Flip Vertically?:
 *   - Flip the cutin portrait vertically?
 * 
 * ---
 *
 * Portrait Settings > Scaling Properties
 * 
 *   Forced Scaling:
 *   - Do you want to force a scaling ratio?
 *   - Leave as 0 for none.
 *   - Disables "Fit to Scale?".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *   Fit to Scale?:
 *   - Scale the cutin portrait to fit the cutin style?
 *   - Cannot be used with "Forced Scaling".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *     Scale Max?:
 *     - Scale the cutin portrait to the maximum fit or scale the cutin
 *       portrait to the minimum fit.
 *     - There is NO one size fits all setting for this. Different cutin sizes
 *       will look better with different settings for this parameter.
 * 
 * ---
 * 
 * Portrait Settings > Animated Portraits
 * 
 *   Loop?:
 *   - Will loop back to beginning once ended.
 *   - Requires VisuMZ_4_AnimatedPictures!
 * 
 *   Wait Frames:
 *   - Frames to wait before moving to next cell.
 *   - Requires VisuMZ_4_AnimatedPictures!
 *
 * ---
 *
 * Parallax Settings > Base Settings
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the cutin?
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's parallax hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's parallax?
 * 
 * ---
 * 
 * Parallax Settings > Scrolling Settings
 * 
 *   Offset X:
 *   - Offsets the cutin parallax's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin parallax's Y location.
 *   - Negative: up. Positive: down.
 * 
 *   Scroll X:
 *   - How many pixels does the parallax scroll horizontally?
 *   - Negative: Scroll to right. Positive: Scroll to left.
 * 
 *   Scroll Y:
 *   - How many pixels does the parallax scroll vertically?
 *   - Negative: Scroll to down. Positive: Scroll to up.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Cutin Style Settings
 * ============================================================================
 *
 * The settings used for each of the various cutin styles. These adjust the
 * ways cutins appear in-game.
 *
 * ---
 *
 * Insert Style Name
 * 
 *   Insert Style Variations:
 *   - The settings used for this specific cutin style.
 *   - Each of them will contain the following sub-settings.
 *
 * ---
 *
 * Cutin
 * 
 *   Offset X:
 *   - Offsets the cutin overall's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin overall's Y location.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Entrance Movement
 * 
 *   Entrance X:
 *   - Sets the whole cutin's X entrance.
 *   - Negative: from left. Positive: from right.
 * 
 *   Entrance Y:
 *   - Sets the whole cutin's Y entrance.
 *   - Negative: from up. Positive: from down.
 * 
 *   Entrance Easing:
 *   - Select which easing type you wish to apply.
 *
 * ---
 * 
 * Exit Movement
 * 
 *   Exit X:
 *   - Sets the whole cutin's X entrance.
 *   - Negative: to left. Positive: to right.
 * 
 *   Exit Y:
 *   - Sets the whole cutin's Y entrance.
 *   - Negative: to up. Positive: to down.
 * 
 *   Exit Easing:
 *   - Select which easing type you wish to apply.
 *
 * ---
 *
 * Mask
 * 
 *   Filename:
 *   - Filename used for a custom cutin mask.
 *   - Leave empty for plugin-generated mask.
 * 
 * ---
 * 
 * Outline
 * 
 *   Filename:
 *   - Filename used for a custom cutin outline.
 *   - Leave empty for plugin-generated outline.
 * 
 *   Offset X:
 *   - Offsets the cutin outline's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin outline's Y location.
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Outline Settings
 * ============================================================================
 *
 * The settings used for plugin-generated outlines.
 *
 * ---
 *
 * Outer Layer
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Line Width:
 *   - What is the width of the line?
 *
 * ---
 *
 * Middle Layer
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Line Width:
 *   - What is the width of the line?
 *
 * ---
 *
 * Inner Layer
 * 
 *   Line Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Line Width:
 *   - What is the width of the line?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: "Extra Settings" Defaults
 * ============================================================================
 *
 * Default "Extra Settings" values if the "Extra Settings" Plugin Command
 * parameter is left untouched. In other words, if you just want the various
 * Plugin Commands to use a global set of settings, leave it empty and it will
 * draw from these instead.
 * 
 * For those wondering, yes, these are replica plugin parameters of the
 * "Extra Settings" found for the Plugin Commands.
 * 
 * With all that said, keep in mind that there is no one-size-fits all set of
 * "Extra Settings" that you can set as the default. The plugin-generated masks
 * and outlines are of many different shapes and sizes. And as images used as
 * portraits and parallaxes can be of many varying shapes and sizes as well,
 * there's not going to be a perfect setting for everything. Different
 * cutin-types need to be experimented with different settings in order to find
 * out what works best.
 *
 * ---
 * 
 * Transition
 * 
 *   Entrance Duration:
 *   - How many frames does it take to fully enter?
 *   - Used when a Visual Cutin Effect starts.
 * 
 *   Exit Duration:
 *   - How many frames does it take to fully exit?
 *   - Used when a Visual Cutin Effect ends.
 * 
 * ---
 * 
 * Cutin Settings
 * 
 *   Show BG Color?:
 *   - Add a background color for this cutin?
 *   - Background colors appear behind the parallax.
 * 
 *   Show Outline?:
 *   - Show the cutin outline?
 * 
 * ---
 * 
 * Portrait Settings > Base Properties
 * 
 *   Anchor X:
 *   - Determines the sprite anchor X alignment.
 *   - 0.0: Left, 0.5: Center, 1.0: Right.
 * 
 *   Anchor Y:
 *   - Determines the sprite anchor Y alignment.
 *   - 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's portrait hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's portrait?
 * 
 *   Offset X:
 *   - Offsets the cutin portrait's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin portrait's Y location.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Portrait Settings > Entrance Properties
 * 
 *   Entrance X:
 *   - Sets the cutin portrait's X entrance.
 *   - Negative: from left. Positive: from right.
 * 
 *   Entrance Y:
 *   - Sets the cutin portrait's Y entrance.
 *   - Negative: from up. Positive: from down.
 * 
 *   Entrance Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Exit Properties
 * 
 *   Exit X:
 *   - Sets the cutin portrait's X exit.
 *   - Negative: to left. Positive: to right.
 * 
 *   Exit Y:
 *   - Sets the cutin portrait's Y exit.
 *   - Negative: to up. Positive: to down.
 * 
 *   Exit Easing:
 *   - Select which easing type you wish to apply.
 * 
 * ---
 * 
 * Portrait Settings > Flip Properties
 * 
 *   Flip Horizontally?:
 *   - Flip the cutin portrait horizontally?
 * 
 *   Flip Vertically?:
 *   - Flip the cutin portrait vertically?
 * 
 * ---
 *
 * Portrait Settings > Scaling Properties
 * 
 *   Forced Scaling:
 *   - Do you want to force a scaling ratio?
 *   - Leave as 0 for none.
 *   - Disables "Fit to Scale?".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *   Fit to Scale?:
 *   - Scale the cutin portrait to fit the cutin style?
 *   - Cannot be used with "Forced Scaling".
 *   - There is NO one size fits all setting for this. Different cutin sizes
 *     will look better with different settings for this parameter.
 * 
 *     Scale Max?:
 *     - Scale the cutin portrait to the maximum fit or scale the cutin
 *       portrait to the minimum fit.
 *     - There is NO one size fits all setting for this. Different cutin sizes
 *       will look better with different settings for this parameter.
 * 
 * ---
 * 
 * Portrait Settings > Animated Portraits
 * 
 *   Loop?:
 *   - Will loop back to beginning once ended.
 *   - Requires VisuMZ_4_AnimatedPictures!
 * 
 *   Wait Frames:
 *   - Frames to wait before moving to next cell.
 *   - Requires VisuMZ_4_AnimatedPictures!
 *
 * ---
 *
 * Parallax Settings > Base Settings
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the cutin?
 * 
 *   Hue:
 *   - Do you wish to adjust this cutin's parallax hue?
 * 
 *   Opacity:
 *   - What is the opacity level of this cutin's parallax?
 * 
 * ---
 * 
 * Parallax Settings > Scrolling Settings
 * 
 *   Offset X:
 *   - Offsets the cutin parallax's X location.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the cutin parallax's Y location.
 *   - Negative: up. Positive: down.
 * 
 *   Scroll X:
 *   - How many pixels does the parallax scroll horizontally?
 *   - Negative: Scroll to right. Positive: Scroll to left.
 * 
 *   Scroll Y:
 *   - How many pixels does the parallax scroll vertically?
 *   - Negative: Scroll to down. Positive: Scroll to up.
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
 * Version 1.01: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a crash where clearing cutins under certain conditions would cause
 *    an error. Fix made by Arisu.
 * 
 * Version 1.00 Official Release Date: March 1, 2023
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
 * @command CutinStart_VisualCutinEffect
 * @text Cutin Add: Add Visual Cutin Effect
 * @desc Adds the Visual Cutin Effect using these desired settings.
 * Only one of each cutin-style type can be present at a time.
 * 
 * @arg Basic
 * @text Basic Settings
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @parent Basic
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type do you wish to use?
 * Refer to VisuMZ wiki for visuals on styles.
 * @default CenterHorzSpan
 *
 * @arg portraitFilename:str
 * @text Portrait Filename
 * @parent Basic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Pick a portrait to use for the Visual Cutin Effect.
 * Pick (None) to not use a portrait.
 * @default >>>ATTENTION<<<
 *
 * @arg parallaxFilename:str
 * @text Parallax Filename
 * @parent Basic
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Pick a parallax to use for the Visual Cutin Effect.
 * Pick (None) to not use a parallax.
 * @default >>>ATTENTION<<<
 *
 * @arg bgColor:str
 * @text Background Color
 * @parent Basic
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #888888
 *
 * @arg ExtraSettings:struct
 * @text Extra Settings
 * @type struct<Command>
 * @desc Extra Plugin Command settings pertaining to this Visual Cutin Effect.
 * @default {}
 * 
 * @arg WaitForEntrance:eval
 * @text Wait For Entrance
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until cutin entrance is finished before performing
 * the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CutinChange
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinChange_PortraitSwap
 * @text Cutin Change: Portrait Swap
 * @desc Changes target cutin-type's portrait with a different image.
 * 
 * @arg Basic
 * @text Basic Settings
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @parent Basic
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type to update?
 * This determines which existing cutin-type to change.
 * @default CenterHorzSpan
 *
 * @arg portraitFilename:str
 * @text Portrait Filename
 * @parent Basic
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Pick a portrait to swap for the Visual Cutin Effect.
 * Pick (None) to not use a portrait.
 * @default >>>ATTENTION<<<
 *
 * @arg ExtraSettings:struct
 * @text Extra Settings
 * @type struct<Portrait>
 * @desc Extra Plugin Command settings pertaining to this Visual
 * Cutin Effect's portrait only.
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinChange_ParallaxSwap
 * @text Cutin Change: Parallax Swap
 * @desc Changes target cutin-type's parallax with a different image.
 * 
 * @arg Basic
 * @text Basic Settings
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @parent Basic
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type to update?
 * This determines which existing cutin-type to change.
 * @default CenterHorzSpan
 *
 * @arg parallaxFilename:str
 * @text Parallax Filename
 * @parent Basic
 * @type file
 * @dir img/parallaxes/
 * @require 1
 * @desc Pick a parallax to swap for the Visual Cutin Effect.
 * Pick (None) to not use a parallax.
 * @default >>>ATTENTION<<<
 *
 * @arg ExtraSettings:struct
 * @text Extra Settings
 * @type struct<Parallax>
 * @desc Extra Plugin Command settings pertaining to this Visual
 * Cutin Effect's parallax only.
 * @default {}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_CutinEnd
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinEnd_VisualCutinEffectAll
 * @text Cutin End: End Visual Cutin Effect (All)
 * @desc Ends all Visual Cutin Effects currently present.
 * 
 * @arg WaitForExit:eval
 * @text Wait For Exit
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until cutin exit is finished before performing
 * the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinEnd_VisualCutinEffectType
 * @text Cutin End: End Visual Cutin Effect (Type)
 * @desc Ends the Visual Cutin Effect with the matching type.
 * 
 * @arg type:str
 * @text Cutin Style Type
 * @type select
 * @option -
 * @option Whole
 * @option -
 * @option Showcase
 * @option -
 * @option LeftHorzSpan
 * @option CenterHorzSpan
 * @option RightHorzSpan
 * @option -
 * @option LeftHorzSlash
 * @option RightHorzSlash
 * @option -
 * @option LeftVertSlash
 * @option RightVertSlash
 * @option -
 * @option LeftMajor
 * @option RightMajor
 * @option -
 * @option LeftMinor
 * @option CenterMinor
 * @option RightMinor
 * @option -
 * @option LeftDiamond
 * @option CenterDiamond
 * @option RightDiamond
 * @option -
 * @option LeftGemstone
 * @option CenterGemstone
 * @option RightGemstone
 * @option -
 * @option TopLeftQuad
 * @option TopRightQuad
 * @option BottomLeftQuad
 * @option BottomRightQuad
 * @option -
 * @option TopLeftCorner
 * @option TopRightCorner
 * @option BottomLeftCorner
 * @option BottomRightCorner
 * @option -
 * @option Row1stThird
 * @option Row2ndThird
 * @option Row3rdThird
 * @option -
 * @option Row1stFourth
 * @option Row2ndFourth
 * @option Row3rdFourth
 * @option Row4thFourth
 * @option -
 * @option Row1stFifth
 * @option Row2ndFifth
 * @option Row3rdFifth
 * @option Row4thFifth
 * @option Row5thFifth
 * @option -
 * @option Col1stThird
 * @option Col2ndThird
 * @option Col3rdThird
 * @option -
 * @option Col1stFourth
 * @option Col2ndFourth
 * @option Col3rdFourth
 * @option Col4thFourth
 * @option -
 * @option Col1stFifth
 * @option Col2ndFifth
 * @option Col3rdFifth
 * @option Col4thFifth
 * @option Col5thFifth
 * @option -
 * @option SixPack1
 * @option SixPack2
 * @option SixPack3
 * @option SixPack4
 * @option SixPack5
 * @option SixPack6
 * @option -
 * @option EightPack1
 * @option EightPack2
 * @option EightPack3
 * @option EightPack4
 * @option EightPack5
 * @option EightPack6
 * @option EightPack7
 * @option EightPack8
 * @option -
 * @option TwelvePack1
 * @option TwelvePack2
 * @option TwelvePack3
 * @option TwelvePack4
 * @option TwelvePack5
 * @option TwelvePack6
 * @option TwelvePack7
 * @option TwelvePack8
 * @option TwelvePack9
 * @option TwelvePack10
 * @option TwelvePack11
 * @option TwelvePack12
 * @option -
 * @desc What Visual Cutin Effect style type do you wish to end?
 * @default CenterHorzSpan
 * 
 * @arg WaitForExit:eval
 * @text Wait For Exit
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until cutin exit is finished before performing
 * the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wait
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinWait_WaitForEntrance
 * @text Cutin Wait: Wait for Entrance
 * @desc Wait until all cutin entrances are finished before performing the next event command.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CutinWait_WaitForExit
 * @text Cutin Wait: Wait for Exit
 * @desc Wait until all cutin exits are finished before performing the next event command.
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
 * @param VisualCutinEffect
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Styles:struct
 * @text Cutin Style Settings
 * @type struct<Styles>
 * @desc The settings used for each of the various cutin styles.
 * @default {"WholeStyles":"","whole:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ShowcaseStyles":"","showcase:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","HorzSpanStyles":"","lefthorzspan:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centerhorzspan:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","righthorzspan:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","HorzSlashStyles":"","lefthorzslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","righthorzslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","VertSlashStyles":"","leftvertslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightvertslash:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","MajorStyles":"","leftmajor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightmajor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","MinorStyles":"","leftminor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centerminor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightminor:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","DiamondStyles":"","leftdiamond:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centerdiamond:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightdiamond:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","GemstoneStyles":"","leftgemstone:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","centergemstone:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","rightgemstone:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+96\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+96\",\"exitY:num\":\"+96\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","QuadStyles":"","topleftquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","toprightquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomleftquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomrightquad:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","CornerStyles":"","topleftcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","toprightcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomleftcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","bottomrightcorner:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","RowThirdStyles":"","row1stthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-36\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+36\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row2ndthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-36\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+36\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row3rdthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-36\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+36\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","RowFourthStyles":"","row1stfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row2ndfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row3rdfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row4thfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","RowFifthStyles":"","row1stfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row2ndfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row3rdfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row4thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","row5thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-24\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+24\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ColThirdStyles":"","col1stthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col2ndthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col3rdthird:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ColFourthStyles":"","col1stfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col2ndfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col3rdfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col4thfourth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","ColFifthStyles":"","col1stfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col2ndfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col3rdfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col4thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","col5thfifth:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+96\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-96\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","PackSixStyles":"","sixpack1:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack2:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack3:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack4:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack5:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+0\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+0\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","sixpack6:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","PackEightStyles":"","eightpack1:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack2:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack3:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack4:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack5:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack6:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack7:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","eightpack8:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","PackTwelveStyles":"","twelvepack1:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack2:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack3:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack4:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"-48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"-48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack5:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack6:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack7:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack8:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+0\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+0\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack9:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack10:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"-24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"-24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack11:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+24\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+24\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","twelvepack12:struct":"{\"Cutin\":\"\",\"cutinOffsetX:num\":\"+0\",\"cutinOffsetY:num\":\"+0\",\"Enter\":\"\",\"enterX:num\":\"+48\",\"enterY:num\":\"+48\",\"enterEasingType:str\":\"InOutSine\",\"Exit\":\"\",\"exitX:num\":\"+48\",\"exitY:num\":\"+48\",\"exitEasingType:str\":\"InOutSine\",\"Mask\":\"\",\"maskFilename:str\":\"\",\"Outline\":\"\",\"outlineFilename:str\":\"\",\"outlineOffsetX:num\":\"+0\",\"outlineOffsetY:num\":\"+0\"}","End":""}
 *
 * @param Outline:struct
 * @text Outline Settings
 * @type struct<Outline>
 * @desc The settings used for plugin-generated outlines.
 * @default {"Outer":"","outerOutlineColor:str":"#000000","outerOutlineWeight:num":"4","Middle":"","middleOutlineColor:str":"#ffffff","middleOutlineWeight:num":"8","Inner":"","innerOutlineColor:str":"#000000","innerOutlineWeight:num":"4"}
 *
 * @param ExtraDefaults:struct
 * @text "Extra Settings" Defaults
 * @type struct<Command>
 * @desc Default "Extra Settings" values if the "Extra Settings"
 * Plugin Command parameter is left untouched.
 * @default {"Transition":"","enterDuration:num":"12","exitDuration:num":"12","Cutin":"","bgShow:eval":"true","outlineShow:eval":"true","Portrait":"","PortraitBase":"","portraitAnchorX:num":"0.5","portraitAnchorY:num":"0.5","portraitHue:num":"0","portraitOpacity:num":"255","portraitOffsetX:num":"+0","portraitOffsetY:num":"+0","PortraitEnter":"","portraitEnterX:num":"+0","portraitEnterY:num":"+0","portraitEnterEasingType:str":"InOutSine","PortraitExit":"","portraitExitX:num":"+0","portraitExitY:num":"+0","portraitExitEasingType:str":"InOutSine","PortraitFlip":"","portraitFlipHorz:eval":"false","portraitFlipVert:eval":"false","PortraitScale":"","portraitForcedScale:num":"0.0","portraitScaleToFit:eval":"true","portraitScaleMax:eval":"false","PortraitAni":"","animatedPortraitLooping:eval":"true","animatedPortraitWaitFrames:num":"4","Parallax":"","ParallaxBase":"","parallaxBlendMode:num":"0","parallaxHue:num":"0","parallaxOpacity:num":"255","ParallaxScroll":"","parallaxOffsetX:num":"+0.0","parallaxOffsetY:num":"+0.0","parallaxScrollX:num":"+0.0","parallaxScrollY:num":"+0.0"}
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
 * Styles Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Styles:
 *
 * @param WholeStyles
 * @text ---Whole Style---
 *
 * @param whole:struct
 * @text Whole
 * @parent WholeStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param ShowcaseStyles
 * @text ---Showcase Style---
 *
 * @param showcase:struct
 * @text Showcase
 * @parent ShowcaseStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param HorzSpanStyles
 * @text ---Horizontal Span---
 *
 * @param lefthorzspan:struct
 * @text LeftHorzSpan
 * @parent HorzSpanStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centerhorzspan:struct
 * @text CenterHorzSpan
 * @parent HorzSpanStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param righthorzspan:struct
 * @text RightHorzSpan
 * @parent HorzSpanStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param HorzSlashStyles
 * @text ---Horizontal Slash---
 *
 * @param lefthorzslash:struct
 * @text LeftHorzSlash
 * @parent HorzSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param righthorzslash:struct
 * @text RightHorzSlash
 * @parent HorzSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param VertSlashStyles
 * @text ---Vertical Slash---
 *
 * @param leftvertslash:struct
 * @text LeftVertSlash
 * @parent VertSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightvertslash:struct
 * @text RightVertSlash
 * @parent VertSlashStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param MajorStyles
 * @text ---Major Styles---
 *
 * @param leftmajor:struct
 * @text LeftMajor
 * @parent MajorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightmajor:struct
 * @text RightMajor
 * @parent MajorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param MinorStyles
 * @text ---Minor Styles---
 *
 * @param leftminor:struct
 * @text LeftMinor
 * @parent MinorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centerminor:struct
 * @text CenterMinor
 * @parent MinorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightminor:struct
 * @text RightMinor
 * @parent MinorStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param DiamondStyles
 * @text ---Diamond Styles---
 *
 * @param leftdiamond:struct
 * @text LeftDiamond
 * @parent DiamondStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centerdiamond:struct
 * @text CenterDiamond
 * @parent DiamondStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightdiamond:struct
 * @text RightDiamond
 * @parent DiamondStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param GemstoneStyles
 * @text ---Gemstone Styles---
 *
 * @param leftgemstone:struct
 * @text LeftGemstone
 * @parent GemstoneStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param centergemstone:struct
 * @text CenterGemstone
 * @parent GemstoneStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param rightgemstone:struct
 * @text RightGemstone
 * @parent GemstoneStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+96","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+96","exitY:num":"+96","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param QuadStyles
 * @text ---Quadrant Styles---
 *
 * @param topleftquad:struct
 * @text TopLeftQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param toprightquad:struct
 * @text TopRightQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomleftquad:struct
 * @text BottomLeftQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomrightquad:struct
 * @text BottomRightQuad
 * @parent QuadStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param CornerStyles
 * @text ---Corner Styles---
 *
 * @param topleftcorner:struct
 * @text TopLeftCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param toprightcorner:struct
 * @text TopRightCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 0.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomleftcorner:struct
 * @text BottomLeftCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param bottomrightcorner:struct
 * @text BottomRightCorner
 * @parent CornerStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 1.0, 1.0
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param RowThirdStyles
 * @text ---Row Thirds---
 *
 * @param row1stthird:struct
 * @text Row1stThird
 * @parent RowThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-36","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+36","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row2ndthird:struct
 * @text Row2ndThird
 * @parent RowThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-36","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+36","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row3rdthird:struct
 * @text Row3rdThird
 * @parent RowThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-36","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+36","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param RowFourthStyles
 * @text ---Row Fourths---
 *
 * @param row1stfourth:struct
 * @text Row1stFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row2ndfourth:struct
 * @text Row2ndFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row3rdfourth:struct
 * @text Row3rdFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row4thfourth:struct
 * @text Row4thFourth
 * @parent RowFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param RowFifthStyles
 * @text ---Row Fifths---
 *
 * @param row1stfifth:struct
 * @text Row1stFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row2ndfifth:struct
 * @text Row2ndFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row3rdfifth:struct
 * @text Row3rdFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row4thfifth:struct
 * @text Row4thFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param row5thfifth:struct
 * @text Row5thFifth
 * @parent RowFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-24","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+24","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 * 
 * @param ColThirdStyles
 * @text ---Column Thirds---
 *
 * @param col1stthird:struct
 * @text Col1stThird
 * @parent ColThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col2ndthird:struct
 * @text Col2ndThird
 * @parent ColThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col3rdthird:struct
 * @text Col3rdThird
 * @parent ColThirdStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param ColFourthStyles
 * @text ---Column Fourths---
 *
 * @param col1stfourth:struct
 * @text Col1stFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col2ndfourth:struct
 * @text Col2ndFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col3rdfourth:struct
 * @text Col3rdFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col4thfourth:struct
 * @text Col4thFourth
 * @parent ColFourthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param ColFifthStyles
 * @text ---Column Fifths---
 *
 * @param col1stfifth:struct
 * @text Col1stFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col2ndfifth:struct
 * @text Col2ndFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col3rdfifth:struct
 * @text Col3rdFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col4thfifth:struct
 * @text Col4thFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param col5thfifth:struct
 * @text Col5thFifth
 * @parent ColFifthStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+96","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-96","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param PackSixStyles
 * @text ---Six Pack---
 *
 * @param sixpack1:struct
 * @text SixPack1
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack2:struct
 * @text SixPack2
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack3:struct
 * @text SixPack3
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack4:struct
 * @text SixPack4
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack5:struct
 * @text SixPack5
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+0","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+0","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param sixpack6:struct
 * @text SixPack6
 * @parent PackSixStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param PackEightStyles
 * @text ---Eight Pack---
 *
 * @param eightpack1:struct
 * @text EightPack1
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack2:struct
 * @text EightPack2
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack3:struct
 * @text EightPack3
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack4:struct
 * @text EightPack4
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack5:struct
 * @text EightPack5
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack6:struct
 * @text EightPack6
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack7:struct
 * @text EightPack7
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param eightpack8:struct
 * @text EightPack8
 * @parent PackEightStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param PackTwelveStyles
 * @text ---Twelve Pack---
 *
 * @param twelvepack1:struct
 * @text TwelvePack1
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack2:struct
 * @text TwelvePack2
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack3:struct
 * @text TwelvePack3
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack4:struct
 * @text TwelvePack4
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"-48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"-48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack5:struct
 * @text TwelvePack5
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack6:struct
 * @text TwelvePack6
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack7:struct
 * @text TwelvePack7
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack8:struct
 * @text TwelvePack8
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+0","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+0","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack9:struct
 * @text TwelvePack9
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack10:struct
 * @text TwelvePack10
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"-24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"-24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack11:struct
 * @text TwelvePack11
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+24","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+24","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param twelvepack12:struct
 * @text TwelvePack12
 * @parent PackTwelveStyles
 * @type struct<StyleData>
 * @desc The settings used for this specific cutin style.
 * Anchor X/Y: 0.5, 0.5
 * @default {"Cutin":"","cutinOffsetX:num":"+0","cutinOffsetY:num":"+0","Enter":"","enterX:num":"+48","enterY:num":"+48","enterEasingType:str":"InOutSine","Exit":"","exitX:num":"+48","exitY:num":"+48","exitEasingType:str":"InOutSine","Mask":"","maskFilename:str":"","Outline":"","outlineFilename:str":"","outlineOffsetX:num":"+0","outlineOffsetY:num":"+0"}
 *
 * @param End
 * @text --------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Style Data Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StyleData:
 *
 * @param Cutin
 * 
 * @param cutinOffsetX:num
 * @text Offset X
 * @parent Cutin
 * @desc Offsets the cutin overall's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param cutinOffsetY:num
 * @text Offset Y
 * @parent Cutin
 * @desc Offsets the cutin overall's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Enter
 * @text Entrance Movement
 * 
 * @param enterX:num
 * @text Entrance X
 * @parent Enter
 * @desc Sets the whole cutin's X entrance.
 * Negative: from left. Positive: from right.
 * @default +0
 * 
 * @param enterY:num
 * @text Entrance Y
 * @parent Enter
 * @desc Sets the whole cutin's Y entrance.
 * Negative: from up. Positive: from down.
 * @default +0
 *
 * @param enterEasingType:str
 * @text Entrance Easing
 * @parent Enter
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param Exit
 * @text Exit Movement
 * 
 * @param exitX:num
 * @text Exit X
 * @parent Exit
 * @desc Sets the whole cutin's X exit.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param exitY:num
 * @text Exit Y
 * @parent Exit
 * @desc Sets the whole cutin's Y exit.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param exitEasingType:str
 * @text Exit Easing
 * @parent Exit
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param Mask
 *
 * @param maskFilename:str
 * @text Filename
 * @parent Mask
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a custom cutin mask.
 * Leave empty for plugin-generated mask.
 * @default 
 *
 * @param Outline
 *
 * @param outlineFilename:str
 * @text Filename
 * @parent Outline
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for a custom cutin outline.
 * Leave empty for plugin-generated outline.
 * @default 
 * 
 * @param outlineOffsetX:num
 * @text Offset X
 * @parent Outline
 * @desc Offsets the cutin outline's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param outlineOffsetY:num
 * @text Offset Y
 * @parent Outline
 * @desc Offsets the cutin outline's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Outline Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Outline:
 *
 * @param Outer
 * @text Outer Layer
 *
 * @param outerOutlineColor:str
 * @text Line Color
 * @parent Outer
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #000000
 * 
 * @param outerOutlineWeight:num
 * @text Line Width
 * @parent Outer
 * @type number
 * @desc What is the width of the line?
 * @default 4
 *
 * @param Middle
 * @text Middle Layer
 *
 * @param middleOutlineColor:str
 * @text Line Color
 * @parent Middle
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 * 
 * @param middleOutlineWeight:num
 * @text Line Width
 * @parent Middle
 * @type number
 * @desc What is the width of the line?
 * @default 8
 *
 * @param Inner
 * @text Inner Layer
 *
 * @param innerOutlineColor:str
 * @text Line Color
 * @parent Inner
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #000000
 * 
 * @param innerOutlineWeight:num
 * @text Line Width
 * @parent Inner
 * @type number
 * @desc What is the width of the line?
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Command Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Transition
 * 
 * @param enterDuration:num
 * @text Entrance Duration
 * @parent Transition
 * @type number
 * @desc How many frames does it take to fully enter?
 * Used when a Visual Cutin Effect starts.
 * @default 12
 * 
 * @param exitDuration:num
 * @text Exit Duration
 * @parent Transition
 * @type number
 * @desc How many frames does it take to fully exit?
 * Used when a Visual Cutin Effect ends.
 * @default 12
 *
 * @param Cutin
 * @text Cutin Settings
 *
 * @param bgShow:eval
 * @text Show BG Color?
 * @parent Cutin
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add a background color for this cutin?
 * Background colors appear behind the parallax.
 * @default true
 *
 * @param outlineShow:eval
 * @text Show Outline?
 * @parent Cutin
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the cutin outline?
 * @default true
 *
 * @param Portrait
 * @text Portrait Settings
 *
 * @param PortraitBase
 * @text Base Properties
 * @parent Portrait
 * 
 * @param portraitAnchorX:num
 * @text Anchor X
 * @parent PortraitBase
 * @desc Determines the sprite anchor X alignment.
 * 0.0: Left, 0.5: Center, 1.0: Right.
 * @default 0.5
 * 
 * @param portraitAnchorY:num
 * @text Anchor Y
 * @parent PortraitBase
 * @desc Determines the sprite anchor Y alignment.
 * 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * @default 0.5
 *
 * @param portraitHue:num
 * @text Hue
 * @parent PortraitBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's portrait hue?
 * @default 0
 * 
 * @param portraitOpacity:num
 * @text Opacity
 * @parent PortraitBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's portrait?
 * @default 255
 * 
 * @param portraitOffsetX:num
 * @text Offset X
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param portraitOffsetY:num
 * @text Offset Y
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param PortraitEnter
 * @text Entrance Properties
 * @parent Portrait
 * 
 * @param portraitEnterX:num
 * @text Entrance X
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's X entrance.
 * Negative: from left. Positive: from right.
 * @default +0
 * 
 * @param portraitEnterY:num
 * @text Entrance Y
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's Y entrance.
 * Negative: from up. Positive: from down.
 * @default +0
 *
 * @param portraitEnterEasingType:str
 * @text Entrance Easing
 * @parent PortraitEnter
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitExit
 * @text Exit Properties
 * @parent Portrait
 * 
 * @param portraitExitX:num
 * @text Exit X
 * @parent PortraitExit
 * @desc Sets the cutin portrait's X exit.
 * Negative: to left. Positive: to right.
 * @default +0
 * 
 * @param portraitExitY:num
 * @text Exit Y
 * @parent PortraitExit
 * @desc Sets the cutin portrait's Y exit.
 * Negative: to up. Positive: to down.
 * @default +0
 *
 * @param portraitExitEasingType:str
 * @text Exit Easing
 * @parent PortraitExit
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitFlip
 * @text Flip Properties
 * @parent Portrait
 *
 * @param portraitFlipHorz:eval
 * @text Flip Horizontally?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait horizontally?
 * @default false
 *
 * @param portraitFlipVert:eval
 * @text Flip Vertically?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait vertically?
 * @default false
 *
 * @param PortraitScale
 * @text Scaling Properties
 * @parent Portrait
 * 
 * @param portraitForcedScale:num
 * @text Forced Scaling
 * @parent PortraitScale
 * @desc Do you want to force a scaling ratio?
 * Leave as 0 for none. Disables "Fit to Scale?".
 * @default 0.0
 *
 * @param portraitScaleToFit:eval
 * @text Fit to Scale?
 * @parent PortraitScale
 * @type boolean
 * @on Fit to Scale
 * @off Don't Scale
 * @desc Scale the cutin portrait to fit the cutin style?
 * Cannot be used with "Forced Scaling".
 * @default true
 *
 * @param portraitScaleMax:eval
 * @text Scale Max?
 * @parent portraitScaleToFit:eval
 * @type boolean
 * @on Scale Maximum
 * @off Scale Minimum
 * @desc Scale the cutin portrait to the maximum fit or
 * scale the cutin portrait to the minimum fit.
 * @default false
 *
 * @param PortraitAni
 * @text Animated Portraits
 * @parent Portrait
 *
 * @param animatedPortraitLooping:eval
 * @text Loop?
 * @parent PortraitAni
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Will loop back to beginning once ended.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default true
 *
 * @param animatedPortraitWaitFrames:num
 * @text Wait Frames
 * @parent PortraitAni
 * @type number
 * @min 1
 * @desc Frames to wait before moving to next cell.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default 4
 *
 * @param Parallax
 * @text Parallax Settings
 *
 * @param ParallaxBase
 * @text Base Settings
 * @parent Parallax
 *
 * @param parallaxBlendMode:num
 * @text Blend Mode
 * @parent ParallaxBase
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the cutin?
 * @default 0
 *
 * @param parallaxHue:num
 * @text Hue
 * @parent ParallaxBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's parallax hue?
 * @default 0
 * 
 * @param parallaxOpacity:num
 * @text Opacity
 * @parent ParallaxBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's parallax?
 * @default 255
 *
 * @param ParallaxScroll
 * @text Scrolling Settings
 * @parent Parallax
 * 
 * @param parallaxOffsetX:num
 * @text Offset X
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's X location.
 * Negative: left. Positive: right.
 * @default +0.0
 * 
 * @param parallaxOffsetY:num
 * @text Offset Y
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's Y location.
 * Negative: up. Positive: down.
 * @default +0.0
 * 
 * @param parallaxScrollX:num
 * @text Scroll X
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll horizontally?
 * Negative: Scroll to right. Positive: Scroll to left.
 * @default +0.0
 * 
 * @param parallaxScrollY:num
 * @text Scroll Y
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll vertically?
 * Negative: Scroll to down. Positive: Scroll to up.
 * @default +0.0
 *
 */
/* ----------------------------------------------------------------------------
 * Portrait Change Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Portrait:
 *
 * @param Portrait
 * @text Portrait Settings
 *
 * @param PortraitBase
 * @text Base Properties
 * @parent Portrait
 * 
 * @param portraitAnchorX:num
 * @text Anchor X
 * @parent PortraitBase
 * @desc Determines the sprite anchor X alignment.
 * 0.0: Left, 0.5: Center, 1.0: Right.
 * @default 0.5
 * 
 * @param portraitAnchorY:num
 * @text Anchor Y
 * @parent PortraitBase
 * @desc Determines the sprite anchor Y alignment.
 * 0.0: Top, 0.5: Middle, 1.0: Bottom.
 * @default 0.5
 *
 * @param portraitHue:num
 * @text Hue
 * @parent PortraitBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's portrait hue?
 * @default 0
 * 
 * @param portraitOpacity:num
 * @text Opacity
 * @parent PortraitBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's portrait?
 * @default 255
 * 
 * @param portraitOffsetX:num
 * @text Offset X
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's X location.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param portraitOffsetY:num
 * @text Offset Y
 * @parent PortraitBase
 * @desc Offsets the cutin portrait's Y location.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param PortraitEnter
 * @text Entrance Properties
 * @parent Portrait
 * 
 * @param portraitEnterX:num
 * @text Entrance X
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's X entrance.
 * Negative: from left. Positive: from right.
 * @default +0
 * 
 * @param portraitEnterY:num
 * @text Entrance Y
 * @parent PortraitEnter
 * @desc Sets the cutin portrait's Y entrance.
 * Negative: from up. Positive: from down.
 * @default +0
 *
 * @param portraitEnterEasingType:str
 * @text Entrance Easing
 * @parent PortraitEnter
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitExit
 * @text Exit Properties
 * @parent Portrait
 * 
 * @param portraitExitX:num
 * @text Exit X
 * @parent PortraitExit
 * @desc Sets the cutin portrait's X exit.
 * Negative: to left. Positive: to right.
 * @default +0
 * 
 * @param portraitExitY:num
 * @text Exit Y
 * @parent PortraitExit
 * @desc Sets the cutin portrait's Y exit.
 * Negative: to up. Positive: to down.
 * @default +0
 *
 * @param portraitExitEasingType:str
 * @text Exit Easing
 * @parent PortraitExit
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default InOutSine
 *
 * @param PortraitFlip
 * @text Flip Properties
 * @parent Portrait
 *
 * @param portraitFlipHorz:eval
 * @text Flip Horizontally?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait horizontally?
 * @default false
 *
 * @param portraitFlipVert:eval
 * @text Flip Vertically?
 * @parent PortraitFlip
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip the cutin portrait vertically?
 * @default false
 *
 * @param PortraitScale
 * @text Scaling Properties
 * @parent Portrait
 * 
 * @param portraitForcedScale:num
 * @text Forced Scaling
 * @parent PortraitScale
 * @desc Do you want to force a scaling ratio?
 * Leave as 0 for none. Disables "Fit to Scale?".
 * @default 0.0
 *
 * @param portraitScaleToFit:eval
 * @text Fit to Scale?
 * @parent PortraitScale
 * @type boolean
 * @on Fit to Scale
 * @off Don't Scale
 * @desc Scale the cutin portrait to fit the cutin style?
 * Cannot be used with "Forced Scaling".
 * @default true
 *
 * @param portraitScaleMax:eval
 * @text Scale Max?
 * @parent portraitScaleToFit:eval
 * @type boolean
 * @on Scale Maximum
 * @off Scale Minimum
 * @desc Scale the cutin portrait to the maximum fit or
 * scale the cutin portrait to the minimum fit.
 * @default true
 *
 * @param PortraitAni
 * @text Animated Portraits
 * @parent Portrait
 *
 * @param animatedPortraitLooping:eval
 * @text Loop?
 * @parent PortraitAni
 * @type boolean
 * @on ON
 * @off OFF
 * @desc Will loop back to beginning once ended.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default true
 *
 * @param animatedPortraitWaitFrames:num
 * @text Wait Frames
 * @parent PortraitAni
 * @type number
 * @min 1
 * @desc Frames to wait before moving to next cell.
 * Requires VisuMZ_4_AnimatedPictures!
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parallax Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Parallax:
 *
 * @param Parallax
 * @text Parallax Settings
 *
 * @param ParallaxBase
 * @text Base Settings
 * @parent Parallax
 *
 * @param parallaxBlendMode:num
 * @text Blend Mode
 * @parent ParallaxBase
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the cutin?
 * @default 0
 *
 * @param parallaxHue:num
 * @text Hue
 * @parent ParallaxBase
 * @type number
 * @min 0
 * @max 360
 * @desc Do you wish to adjust this cutin's parallax hue?
 * @default 0
 * 
 * @param parallaxOpacity:num
 * @text Opacity
 * @parent ParallaxBase
 * @type number
 * @max 255
 * @desc What is the opacity level of this cutin's parallax?
 * @default 255
 *
 * @param ParallaxScroll
 * @text Scrolling Settings
 * @parent Parallax
 * 
 * @param parallaxOffsetX:num
 * @text Offset X
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's X location.
 * Negative: left. Positive: right.
 * @default +0.0
 * 
 * @param parallaxOffsetY:num
 * @text Offset Y
 * @parent ParallaxScroll
 * @desc Offsets the cutin parallax's Y location.
 * Negative: up. Positive: down.
 * @default +0.0
 * 
 * @param parallaxScrollX:num
 * @text Scroll X
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll horizontally?
 * Negative: Scroll to right. Positive: Scroll to left.
 * @default +0.0
 * 
 * @param parallaxScrollY:num
 * @text Scroll Y
 * @parent ParallaxScroll
 * @desc How many pixels does the parallax scroll vertically?
 * Negative: Scroll to down. Positive: Scroll to up.
 * @default +0.0
 *
 */
//=============================================================================

const _0x26d5fa=_0x20cc;(function(_0x12f67d,_0x4cd5eb){const _0x48b52e=_0x20cc,_0x143acf=_0x12f67d();while(!![]){try{const _0x2cceee=parseInt(_0x48b52e(0x25a))/0x1+-parseInt(_0x48b52e(0x351))/0x2+parseInt(_0x48b52e(0x311))/0x3*(-parseInt(_0x48b52e(0x367))/0x4)+parseInt(_0x48b52e(0x29a))/0x5*(parseInt(_0x48b52e(0x2d0))/0x6)+parseInt(_0x48b52e(0x32d))/0x7+-parseInt(_0x48b52e(0x37a))/0x8*(parseInt(_0x48b52e(0x2e3))/0x9)+-parseInt(_0x48b52e(0x245))/0xa*(-parseInt(_0x48b52e(0x31e))/0xb);if(_0x2cceee===_0x4cd5eb)break;else _0x143acf['push'](_0x143acf['shift']());}catch(_0x2af5b3){_0x143acf['push'](_0x143acf['shift']());}}}(_0x4321,0xbdc77));var label=_0x26d5fa(0x2d2),tier=tier||0x0,dependencies=[_0x26d5fa(0x32c)],pluginData=$plugins[_0x26d5fa(0x1f5)](function(_0x787f46){const _0x6f8c52=_0x26d5fa;return _0x787f46[_0x6f8c52(0x240)]&&_0x787f46[_0x6f8c52(0x374)][_0x6f8c52(0x2a2)]('['+label+']');})[0x0];VisuMZ[label][_0x26d5fa(0x2c0)]=VisuMZ[label][_0x26d5fa(0x2c0)]||{},VisuMZ[_0x26d5fa(0x305)]=function(_0xfa57e8,_0x292ec1){const _0x2de01e=_0x26d5fa;for(const _0x11f687 in _0x292ec1){if(_0x11f687[_0x2de01e(0x21b)](/(.*):(.*)/i)){const _0x278155=String(RegExp['$1']),_0x5241a4=String(RegExp['$2'])[_0x2de01e(0x317)]()['trim']();let _0x5e340e,_0x5f2ad1,_0x20cbda;switch(_0x5241a4){case'NUM':_0x5e340e=_0x292ec1[_0x11f687]!==''?Number(_0x292ec1[_0x11f687]):0x0;break;case _0x2de01e(0x218):_0x5f2ad1=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):[],_0x5e340e=_0x5f2ad1[_0x2de01e(0x1f2)](_0x3e066d=>Number(_0x3e066d));break;case _0x2de01e(0x270):_0x5e340e=_0x292ec1[_0x11f687]!==''?eval(_0x292ec1[_0x11f687]):null;break;case'ARRAYEVAL':_0x5f2ad1=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):[],_0x5e340e=_0x5f2ad1[_0x2de01e(0x1f2)](_0x4b2a3e=>eval(_0x4b2a3e));break;case'JSON':_0x5e340e=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):'';break;case'ARRAYJSON':_0x5f2ad1=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):[],_0x5e340e=_0x5f2ad1[_0x2de01e(0x1f2)](_0x16fc33=>JSON[_0x2de01e(0x26f)](_0x16fc33));break;case _0x2de01e(0x35a):_0x5e340e=_0x292ec1[_0x11f687]!==''?new Function(JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687])):new Function('return\x200');break;case _0x2de01e(0x232):_0x5f2ad1=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):[],_0x5e340e=_0x5f2ad1[_0x2de01e(0x1f2)](_0x4c9512=>new Function(JSON[_0x2de01e(0x26f)](_0x4c9512)));break;case _0x2de01e(0x2bd):_0x5e340e=_0x292ec1[_0x11f687]!==''?String(_0x292ec1[_0x11f687]):'';break;case'ARRAYSTR':_0x5f2ad1=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):[],_0x5e340e=_0x5f2ad1[_0x2de01e(0x1f2)](_0x376de5=>String(_0x376de5));break;case'STRUCT':_0x20cbda=_0x292ec1[_0x11f687]!==''?JSON['parse'](_0x292ec1[_0x11f687]):{},_0x5e340e=VisuMZ[_0x2de01e(0x305)]({},_0x20cbda);break;case'ARRAYSTRUCT':_0x5f2ad1=_0x292ec1[_0x11f687]!==''?JSON[_0x2de01e(0x26f)](_0x292ec1[_0x11f687]):[],_0x5e340e=_0x5f2ad1[_0x2de01e(0x1f2)](_0x37c9ac=>VisuMZ[_0x2de01e(0x305)]({},JSON[_0x2de01e(0x26f)](_0x37c9ac)));break;default:continue;}_0xfa57e8[_0x278155]=_0x5e340e;}}return _0xfa57e8;},(_0x61b934=>{const _0x106825=_0x26d5fa,_0x3d7bc3=_0x61b934[_0x106825(0x20c)];for(const _0x479e6f of dependencies){if(!Imported[_0x479e6f]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x3d7bc3,_0x479e6f)),SceneManager['exit']();break;}}const _0x1ddca9=_0x61b934[_0x106825(0x374)];if(_0x1ddca9[_0x106825(0x21b)](/\[Version[ ](.*?)\]/i)){const _0x4685aa=Number(RegExp['$1']);_0x4685aa!==VisuMZ[label][_0x106825(0x206)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x3d7bc3,_0x4685aa)),SceneManager['exit']());}if(_0x1ddca9[_0x106825(0x21b)](/\[Tier[ ](\d+)\]/i)){const _0x18c121=Number(RegExp['$1']);_0x18c121<tier?(alert(_0x106825(0x27e)[_0x106825(0x2b6)](_0x3d7bc3,_0x18c121,tier)),SceneManager[_0x106825(0x362)]()):tier=Math[_0x106825(0x2cc)](_0x18c121,tier);}VisuMZ[_0x106825(0x305)](VisuMZ[label][_0x106825(0x2c0)],_0x61b934[_0x106825(0x2cd)]);})(pluginData),VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x2a7)]=function(_0x1034ef){const _0x4c0d16=_0x26d5fa,_0x3e6277={};_0x1034ef[_0x4c0d16(0x227)]!==undefined?(_0x3e6277[_0x4c0d16(0x2ed)]=String(_0x1034ef[_0x4c0d16(0x227)]()||'whole')[_0x4c0d16(0x2e8)]()[_0x4c0d16(0x299)](),_0x3e6277[_0x4c0d16(0x22a)]=String(_0x1034ef['bgColorJS']),_0x3e6277['parallaxFilename']=String(_0x1034ef[_0x4c0d16(0x20a)]()||'')[_0x4c0d16(0x299)](),_0x3e6277[_0x4c0d16(0x2fd)]=String(_0x1034ef[_0x4c0d16(0x29d)]()||'')['trim']()):(_0x3e6277['type']=_0x1034ef[_0x4c0d16(0x2ed)][_0x4c0d16(0x2e8)]()['trim'](),_0x3e6277[_0x4c0d16(0x22a)]=_0x1034ef[_0x4c0d16(0x22a)]||_0x4c0d16(0x201),_0x3e6277[_0x4c0d16(0x288)]=_0x1034ef['parallaxFilename'][_0x4c0d16(0x299)](),_0x3e6277[_0x4c0d16(0x2fd)]=_0x1034ef[_0x4c0d16(0x2fd)][_0x4c0d16(0x299)]());_0x3e6277[_0x4c0d16(0x288)][_0x4c0d16(0x2e8)]()===_0x4c0d16(0x2d1)&&(_0x3e6277[_0x4c0d16(0x288)]='');_0x3e6277[_0x4c0d16(0x2fd)]['toLowerCase']()===_0x4c0d16(0x2d1)&&(_0x3e6277[_0x4c0d16(0x2fd)]='');const _0x1e000c=VisuMZ[_0x4c0d16(0x2d2)][_0x4c0d16(0x2c0)]['ExtraDefaults'],_0x2eccf7=_0x1034ef[_0x4c0d16(0x368)]||{},_0x2b03ff=['enterDuration',_0x4c0d16(0x303),_0x4c0d16(0x25b),_0x4c0d16(0x226),_0x4c0d16(0x267),_0x4c0d16(0x355),_0x4c0d16(0x28e),'portraitOffsetX',_0x4c0d16(0x2b0),_0x4c0d16(0x220),_0x4c0d16(0x2ce),'portraitEnterEasingType',_0x4c0d16(0x21f),_0x4c0d16(0x2cb),_0x4c0d16(0x281),_0x4c0d16(0x215),_0x4c0d16(0x290),_0x4c0d16(0x364),'portraitScaleMax',_0x4c0d16(0x326),_0x4c0d16(0x2f9),_0x4c0d16(0x347),_0x4c0d16(0x22b),_0x4c0d16(0x1e8),'parallaxOpacity','parallaxOffsetX',_0x4c0d16(0x2a5),_0x4c0d16(0x30b),_0x4c0d16(0x300),_0x4c0d16(0x370)];for(const _0x4bb516 of _0x2b03ff){_0x3e6277[_0x4bb516]=_0x2eccf7[_0x4bb516]??_0x1e000c[_0x4bb516]??0x0;}return _0x3e6277;},PluginManager[_0x26d5fa(0x261)](pluginData[_0x26d5fa(0x20c)],_0x26d5fa(0x348),_0xcc78d0=>{const _0x4c7953=_0x26d5fa;if(SceneManager[_0x4c7953(0x249)]()&&!Imported[_0x4c7953(0x2bf)])return;VisuMZ[_0x4c7953(0x305)](_0xcc78d0,_0xcc78d0);const _0x5e2f92=VisuMZ[_0x4c7953(0x2d2)][_0x4c7953(0x2a7)](_0xcc78d0);SceneManager[_0x4c7953(0x269)][_0x4c7953(0x262)](_0x5e2f92);const _0x26e2e0=$gameTemp['getLastPluginCommandInterpreter']();_0x26e2e0&&_0xcc78d0[_0x4c7953(0x318)]&&_0x26e2e0[_0x4c7953(0x22c)](_0x4c7953(0x354));}),PluginManager[_0x26d5fa(0x261)](pluginData[_0x26d5fa(0x20c)],_0x26d5fa(0x297),_0x9a50f7=>{const _0x30c850=_0x26d5fa;if(SceneManager[_0x30c850(0x249)]()&&!Imported['VisuMZ_1_BattleCore'])return;VisuMZ[_0x30c850(0x305)](_0x9a50f7,_0x9a50f7);const _0x2cc962=VisuMZ[_0x30c850(0x2d2)][_0x30c850(0x2a7)](_0x9a50f7);SceneManager['_scene'][_0x30c850(0x262)](_0x2cc962);}),PluginManager[_0x26d5fa(0x261)](pluginData['name'],_0x26d5fa(0x345),_0x191982=>{const _0x1094c2=_0x26d5fa;if(SceneManager[_0x1094c2(0x249)]()&&!Imported[_0x1094c2(0x2bf)])return;VisuMZ[_0x1094c2(0x305)](_0x191982,_0x191982);const _0x175c3a=_0x191982['type']['toLowerCase']()[_0x1094c2(0x299)]();let _0xa42e0d=_0x191982[_0x1094c2(0x2fd)]['trim']();if(_0xa42e0d[_0x1094c2(0x2e8)]()[_0x1094c2(0x299)]()===_0x1094c2(0x2d1))_0xa42e0d='';const _0x106727=_0x191982[_0x1094c2(0x368)]??{};SceneManager[_0x1094c2(0x269)]['changeVisualCutinPortrait'](_0x175c3a,_0xa42e0d,_0x106727);}),PluginManager[_0x26d5fa(0x261)](pluginData[_0x26d5fa(0x20c)],_0x26d5fa(0x33c),_0x204364=>{const _0x496c5e=_0x26d5fa;if(SceneManager[_0x496c5e(0x249)]()&&!Imported[_0x496c5e(0x2bf)])return;VisuMZ['ConvertParams'](_0x204364,_0x204364);const _0x1f493b=_0x204364[_0x496c5e(0x2ed)][_0x496c5e(0x2e8)]()[_0x496c5e(0x299)]();let _0x42a6dc=_0x204364[_0x496c5e(0x288)][_0x496c5e(0x299)]();if(_0x42a6dc['toLowerCase']()[_0x496c5e(0x299)]()==='>>>attention<<<')_0x42a6dc='';const _0x5d760a=_0x204364[_0x496c5e(0x368)]??{};SceneManager[_0x496c5e(0x269)]['changeVisualCutinParallax'](_0x1f493b,_0x42a6dc,_0x5d760a);}),PluginManager['registerCommand'](pluginData[_0x26d5fa(0x20c)],_0x26d5fa(0x30a),_0x6a811b=>{const _0x591c27=_0x26d5fa;if(SceneManager['isSceneBattle']()&&!Imported[_0x591c27(0x2bf)])return;VisuMZ[_0x591c27(0x305)](_0x6a811b,_0x6a811b),SceneManager[_0x591c27(0x269)][_0x591c27(0x2b1)]();const _0x5bae1c=$gameTemp['getLastPluginCommandInterpreter']();_0x5bae1c&&_0x6a811b[_0x591c27(0x2e4)]&&_0x5bae1c[_0x591c27(0x22c)]('cutinExit');}),PluginManager[_0x26d5fa(0x261)](pluginData['name'],_0x26d5fa(0x1f4),_0x1ca960=>{const _0x3fe230=_0x26d5fa;if(SceneManager[_0x3fe230(0x249)]()&&!Imported[_0x3fe230(0x2bf)])return;VisuMZ[_0x3fe230(0x305)](_0x1ca960,_0x1ca960);const _0x52b363=_0x1ca960[_0x3fe230(0x2ed)][_0x3fe230(0x2e8)]()[_0x3fe230(0x299)]();SceneManager[_0x3fe230(0x269)][_0x3fe230(0x340)](_0x52b363);const _0x3b07ab=$gameTemp[_0x3fe230(0x23b)]();_0x3b07ab&&_0x1ca960[_0x3fe230(0x2e4)]&&_0x3b07ab[_0x3fe230(0x22c)](_0x3fe230(0x334));}),PluginManager['registerCommand'](pluginData[_0x26d5fa(0x20c)],_0x26d5fa(0x20f),_0x3e8c92=>{const _0x3754f1=_0x26d5fa;if(SceneManager[_0x3754f1(0x249)]()&&!Imported[_0x3754f1(0x2bf)])return;const _0x510ed6=$gameTemp[_0x3754f1(0x23b)]();_0x510ed6[_0x3754f1(0x22c)](_0x3754f1(0x354));}),PluginManager['registerCommand'](pluginData['name'],'CutinWait_WaitForExit',_0x407433=>{const _0x5f54f0=_0x26d5fa;if(SceneManager[_0x5f54f0(0x249)]()&&!Imported[_0x5f54f0(0x2bf)])return;const _0x1507c6=$gameTemp['getLastPluginCommandInterpreter']();_0x1507c6['setWaitMode'](_0x5f54f0(0x334));}),VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x280)]={'EnemyCutinPortraitName':/<CUTIN (?:PORTRAIT|PICTURE|IMAGE|IMG):[ ](.*?)>/i,'EnemyCutinFlipHorz':/<CUTIN FLIP (?:HORZ|HORIZONTAL|HORIZONTALLY)>/i,'EnemyCutinFlipVert':/<CUTIN FLIP (?:VERT|VERTICAL|VERTICALLY)>/i},Bitmap[_0x26d5fa(0x225)][_0x26d5fa(0x21e)]=function(_0x59922f,_0x4e0554,_0x576ce0,_0x1948ec,_0x4dbc0c,_0x16bb35){const _0x73f4d7=_0x26d5fa,_0x2c3060=this[_0x73f4d7(0x315)];_0x2c3060['save'](),_0x2c3060[_0x73f4d7(0x1f1)](),_0x2c3060[_0x73f4d7(0x234)](_0x59922f[0x0],_0x59922f[0x1]);for(var _0x56432a=0x2;_0x56432a<_0x59922f[_0x73f4d7(0x349)];_0x56432a+=0x2){_0x2c3060[_0x73f4d7(0x216)](_0x59922f[_0x56432a],_0x59922f[_0x56432a+0x1]);}_0x2c3060['lineTo'](_0x59922f[0x0],_0x59922f[0x1]),_0x2c3060[_0x73f4d7(0x2ec)]=_0x4e0554,_0x2c3060[_0x73f4d7(0x28b)]=_0x1948ec,_0x16bb35&&_0x2c3060['stroke'](),_0x2c3060[_0x73f4d7(0x34e)]=_0x4dbc0c,_0x2c3060[_0x73f4d7(0x1f7)]=_0x576ce0,_0x2c3060[_0x73f4d7(0x295)](),_0x2c3060[_0x73f4d7(0x34e)]=0x1,_0x2c3060['restore'](),this[_0x73f4d7(0x2f3)]['update']();},ImageManager[_0x26d5fa(0x1df)]={'outerOutlineColor':VisuMZ['VisualCutinEffect'][_0x26d5fa(0x2c0)]['Outline'][_0x26d5fa(0x214)],'outerOutlineWeight':VisuMZ['VisualCutinEffect'][_0x26d5fa(0x2c0)][_0x26d5fa(0x379)][_0x26d5fa(0x260)],'middleOutlineColor':VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x2c0)][_0x26d5fa(0x379)][_0x26d5fa(0x1e7)],'middleOutlineWeight':VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x2c0)]['Outline']['middleOutlineWeight'],'innerOutlineColor':VisuMZ[_0x26d5fa(0x2d2)]['Settings'][_0x26d5fa(0x379)][_0x26d5fa(0x2f5)],'innerOutlineWeight':VisuMZ[_0x26d5fa(0x2d2)]['Settings'][_0x26d5fa(0x379)][_0x26d5fa(0x1fe)],'styles':VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x2c0)]['Styles']},(ImageManager['VISUAL_CUTIN_EFFECT'][_0x26d5fa(0x2c2)]={'cutinOffsetX':0x0,'cutinOffsetY':0x0,'enterX':0x0,'enterY':0x0,'enterEasingType':'Linear','exitX':0x0,'exitY':0x0,'exitEasingType':_0x26d5fa(0x236),'maskFilename':'','outlineFilename':'','outlineOffsetX':0x0,'outlineOffsetY':0x0},ImageManager[_0x26d5fa(0x1df)][_0x26d5fa(0x1e5)]=ImageManager[_0x26d5fa(0x1df)][_0x26d5fa(0x260)]+ImageManager['VISUAL_CUTIN_EFFECT']['middleOutlineWeight']+ImageManager[_0x26d5fa(0x1df)][_0x26d5fa(0x1fe)]),ImageManager['getVisualCutinStyleData']=function(_0x1f58ac){const _0x4ac5ac=_0x26d5fa;_0x1f58ac=_0x1f58ac[_0x4ac5ac(0x2e8)]()[_0x4ac5ac(0x299)]();!ImageManager[_0x4ac5ac(0x1df)][_0x4ac5ac(0x1ef)][_0x1f58ac]&&(ImageManager[_0x4ac5ac(0x1df)][_0x4ac5ac(0x1ef)][_0x1f58ac]=JSON['parse'](JSON[_0x4ac5ac(0x34b)](ImageManager[_0x4ac5ac(0x1df)][_0x4ac5ac(0x2c2)])));const _0xfa7894=ImageManager[_0x4ac5ac(0x1df)][_0x4ac5ac(0x1ef)][_0x1f58ac];if(_0xfa7894[_0x4ac5ac(0x231)]===undefined)_0xfa7894[_0x4ac5ac(0x231)]='';if(_0xfa7894[_0x4ac5ac(0x307)]===undefined)_0xfa7894[_0x4ac5ac(0x307)]='';if(_0xfa7894[_0x4ac5ac(0x26c)]===undefined)_0xfa7894['outlineOffsetX']=0x0;if(_0xfa7894[_0x4ac5ac(0x2c8)]===undefined)_0xfa7894[_0x4ac5ac(0x2c8)]=0x0;if(_0xfa7894[_0x4ac5ac(0x27b)]===undefined)_0xfa7894[_0x4ac5ac(0x27b)]=0x0;if(_0xfa7894[_0x4ac5ac(0x23a)]===undefined)_0xfa7894[_0x4ac5ac(0x23a)]=0x0;if(_0xfa7894[_0x4ac5ac(0x2f1)]===undefined)_0xfa7894[_0x4ac5ac(0x2f1)]=0x0;if(_0xfa7894[_0x4ac5ac(0x335)]===undefined)_0xfa7894['enterY']=0x0;if(_0xfa7894[_0x4ac5ac(0x36e)]===undefined)_0xfa7894[_0x4ac5ac(0x36e)]='Linear';if(_0xfa7894['exitX']===undefined)_0xfa7894[_0x4ac5ac(0x287)]=0x0;if(_0xfa7894[_0x4ac5ac(0x235)]===undefined)_0xfa7894[_0x4ac5ac(0x235)]=0x0;if(_0xfa7894[_0x4ac5ac(0x21d)]===undefined)_0xfa7894[_0x4ac5ac(0x21d)]=_0x4ac5ac(0x236);return _0xfa7894;},ImageManager[_0x26d5fa(0x2e6)]=function(_0xdfe6f){const _0x52a686=_0x26d5fa;return _0xdfe6f=_0xdfe6f[_0x52a686(0x2e8)]()['trim'](),ImageManager[_0x52a686(0x312)](_0xdfe6f)['maskFilename']!==''&&ImageManager['getVisualCutinStyleData'](_0xdfe6f)[_0x52a686(0x307)];},ImageManager[_0x26d5fa(0x375)]=function(_0x3d035d){const _0x24fad1=_0x26d5fa;if(this[_0x24fad1(0x2e6)](_0x3d035d)){const _0x3c0845=ImageManager['getVisualCutinStyleData'](_0x3d035d)['maskFilename'];return ImageManager[_0x24fad1(0x342)](_0x3c0845);}_0x3d035d=_0x3d035d['toLowerCase']()[_0x24fad1(0x299)](),this[_0x24fad1(0x2dd)]=this[_0x24fad1(0x2dd)]||{};if(this[_0x24fad1(0x2dd)][_0x3d035d])return this[_0x24fad1(0x2dd)][_0x3d035d];const _0x254d11=this[_0x24fad1(0x257)](_0x3d035d,!![]);return _0x254d11[_0x24fad1(0x27d)]=![],this[_0x24fad1(0x2dd)][_0x3d035d]=_0x254d11,this['_cached_VisualCutinEffect_Mask'][_0x3d035d];},ImageManager[_0x26d5fa(0x24c)]=function(_0x391a8b){const _0xc39e2e=_0x26d5fa;if(this[_0xc39e2e(0x2e6)](_0x391a8b)){const _0x2823a3=ImageManager[_0xc39e2e(0x312)](_0x391a8b)[_0xc39e2e(0x307)];return ImageManager[_0xc39e2e(0x342)](_0x2823a3);}_0x391a8b=_0x391a8b[_0xc39e2e(0x2e8)]()[_0xc39e2e(0x299)](),this[_0xc39e2e(0x337)]=this[_0xc39e2e(0x337)]||{};if(this[_0xc39e2e(0x337)][_0x391a8b])return this[_0xc39e2e(0x337)][_0x391a8b];const _0x38dc20=this[_0xc39e2e(0x257)](_0x391a8b,![]);return _0x38dc20[_0xc39e2e(0x27d)]=![],this[_0xc39e2e(0x337)][_0x391a8b]=_0x38dc20,this[_0xc39e2e(0x337)][_0x391a8b];},ImageManager[_0x26d5fa(0x257)]=function(_0x56e58e,_0x2e92cb){const _0x46d2a4=_0x26d5fa;switch(_0x56e58e){case'whole':return ImageManager['create_VisualCutinEffect_Bitmap_Whole'](_0x2e92cb);case'showcase':return ImageManager['create_VisualCutinEffect_Bitmap_Showcase'](_0x2e92cb);case _0x46d2a4(0x1ea):return ImageManager[_0x46d2a4(0x217)](_0x2e92cb,0x0);case _0x46d2a4(0x25c):return ImageManager['create_VisualCutinEffect_Bitmap_HorzSpan'](_0x2e92cb,0x1);case'righthorzspan':return ImageManager['create_VisualCutinEffect_Bitmap_HorzSpan'](_0x2e92cb,0x2);case _0x46d2a4(0x2e5):return ImageManager[_0x46d2a4(0x325)](_0x2e92cb,0x0);case _0x46d2a4(0x2e7):return ImageManager[_0x46d2a4(0x325)](_0x2e92cb,0x1);case _0x46d2a4(0x20b):return ImageManager['create_VisualCutinEffect_Bitmap_VertSlash'](_0x2e92cb,0x0);case _0x46d2a4(0x369):return ImageManager['create_VisualCutinEffect_Bitmap_VertSlash'](_0x2e92cb,0x1);case'leftmajor':case'rightmajor':return ImageManager[_0x46d2a4(0x32a)](_0x2e92cb,0x2,1.5);case _0x46d2a4(0x2b7):case _0x46d2a4(0x2aa):case'rightminor':return ImageManager[_0x46d2a4(0x32a)](_0x2e92cb,0x3,1.5);case _0x46d2a4(0x2d9):case'centerdiamond':case _0x46d2a4(0x2fe):return ImageManager[_0x46d2a4(0x1e0)](_0x2e92cb);case'leftgemstone':case'centergemstone':case'rightgemstone':return ImageManager[_0x46d2a4(0x1eb)](_0x2e92cb);case _0x46d2a4(0x1ec):return ImageManager[_0x46d2a4(0x338)](_0x2e92cb,0x0);case _0x46d2a4(0x319):return ImageManager[_0x46d2a4(0x338)](_0x2e92cb,0x1);case _0x46d2a4(0x34c):return ImageManager[_0x46d2a4(0x338)](_0x2e92cb,0x2);case'bottomrightquad':return ImageManager[_0x46d2a4(0x338)](_0x2e92cb,0x3);case'topleftcorner':return ImageManager[_0x46d2a4(0x2df)](_0x2e92cb,0x0);case'toprightcorner':return ImageManager[_0x46d2a4(0x2df)](_0x2e92cb,0x1);case _0x46d2a4(0x2eb):return ImageManager[_0x46d2a4(0x2df)](_0x2e92cb,0x2);case'bottomrightcorner':return ImageManager[_0x46d2a4(0x2df)](_0x2e92cb,0x3);case'row1stthird':case _0x46d2a4(0x2f8):case _0x46d2a4(0x350):return ImageManager[_0x46d2a4(0x328)](_0x2e92cb,0x3);case _0x46d2a4(0x2c4):case _0x46d2a4(0x28a):case'row3rdfourth':case _0x46d2a4(0x23c):return ImageManager[_0x46d2a4(0x328)](_0x2e92cb,0x4);case _0x46d2a4(0x273):case _0x46d2a4(0x35f):case _0x46d2a4(0x213):case _0x46d2a4(0x2a8):case _0x46d2a4(0x274):return ImageManager[_0x46d2a4(0x328)](_0x2e92cb,0x5);case _0x46d2a4(0x2a4):case _0x46d2a4(0x292):case _0x46d2a4(0x316):return ImageManager['create_VisualCutinEffect_Bitmap_Cols'](_0x2e92cb,0x3);case _0x46d2a4(0x33d):case'col2ndfourth':case'col3rdfourth':case _0x46d2a4(0x2c5):return ImageManager[_0x46d2a4(0x28c)](_0x2e92cb,0x4);case _0x46d2a4(0x2a3):case _0x46d2a4(0x2ff):case'col3rdfifth':case'col4thfifth':case _0x46d2a4(0x26a):return ImageManager[_0x46d2a4(0x28c)](_0x2e92cb,0x5);case _0x46d2a4(0x32f):case _0x46d2a4(0x1f3):case _0x46d2a4(0x279):case'sixpack4':case _0x46d2a4(0x306):case'sixpack6':return ImageManager['create_VisualCutinEffect_Bitmap_Pack'](_0x2e92cb,0x3,0x2);case _0x46d2a4(0x250):case _0x46d2a4(0x2ef):case _0x46d2a4(0x2b2):case'eightpack4':case _0x46d2a4(0x313):case _0x46d2a4(0x2be):case _0x46d2a4(0x1f8):case _0x46d2a4(0x346):return ImageManager['create_VisualCutinEffect_Bitmap_Pack'](_0x2e92cb,0x4,0x2);case _0x46d2a4(0x202):case _0x46d2a4(0x277):case _0x46d2a4(0x21c):case _0x46d2a4(0x30e):case _0x46d2a4(0x1dc):case _0x46d2a4(0x327):case _0x46d2a4(0x205):case _0x46d2a4(0x258):case _0x46d2a4(0x353):case _0x46d2a4(0x30c):case _0x46d2a4(0x253):case _0x46d2a4(0x209):return ImageManager['create_VisualCutinEffect_Bitmap_Pack'](_0x2e92cb,0x4,0x3);default:return ImageManager[_0x46d2a4(0x310)](_0x2e92cb);}},ImageManager[_0x26d5fa(0x33a)]=function(_0x418cd1,_0x2aff48,_0xcc4aec,_0x3ac4e7){const _0x39afe4=_0x26d5fa;if(_0xcc4aec)_0x418cd1[_0x39afe4(0x21e)](_0x2aff48,_0x39afe4(0x23e),_0x39afe4(0x376),0x0,0xff,![]);else{const _0x1941f7=ImageManager['VISUAL_CUTIN_EFFECT'],_0x28e11d='rgba(0,0,0,0)',_0x3f8194=_0x3ac4e7;{const _0x45a88f=ColorManager[_0x39afe4(0x20d)](_0x1941f7['outerOutlineColor']),_0x163268=_0x1941f7[_0x39afe4(0x260)]*_0x3f8194+_0x1941f7[_0x39afe4(0x331)]*_0x3f8194+_0x1941f7[_0x39afe4(0x1fe)]*_0x3f8194;_0x418cd1[_0x39afe4(0x21e)](_0x2aff48,_0x45a88f,_0x28e11d,_0x163268,0xff,!![]);}{const _0x3c5caf=ColorManager['getColor'](_0x1941f7['middleOutlineColor']),_0x2ce84d=_0x1941f7[_0x39afe4(0x331)]*_0x3f8194+_0x1941f7[_0x39afe4(0x1fe)]*_0x3f8194;_0x418cd1[_0x39afe4(0x21e)](_0x2aff48,_0x3c5caf,_0x28e11d,_0x2ce84d,0xff,!![]);}{const _0x33eacf=ColorManager[_0x39afe4(0x20d)](_0x1941f7[_0x39afe4(0x2f5)]),_0x28a558=_0x1941f7[_0x39afe4(0x1fe)]*_0x3f8194;_0x418cd1['drawOutlinePolygon'](_0x2aff48,_0x33eacf,_0x28e11d,_0x28a558,0xff,!![]);}}return _0x418cd1;},ImageManager['create_VisualCutinEffect_Bitmap_Whole']=function(_0x477a04){const _0x484070=_0x26d5fa,_0x2e7be1=Graphics[_0x484070(0x259)],_0xa7bcb9=Graphics[_0x484070(0x23d)],_0x3e5d8d=new Bitmap(_0x2e7be1,_0xa7bcb9),_0x2670f9=[0x0,0x0,_0x2e7be1,0x0,_0x2e7be1,_0xa7bcb9,0x0,_0xa7bcb9];return this['fill_VisualCutinEffect_Bitmap'](_0x3e5d8d,_0x2670f9,_0x477a04,0x2);},ImageManager[_0x26d5fa(0x2bb)]=function(_0x575fd2){const _0x22a66d=_0x26d5fa,_0x2e7193=Math[_0x22a66d(0x219)](Graphics[_0x22a66d(0x259)]-0x50,0x330),_0x4c68c9=Graphics[_0x22a66d(0x23d)]-Sprite_VisualCutin[_0x22a66d(0x225)]['statusWindowHeight']()-0x50,_0x3341be=new Bitmap(_0x2e7193,_0x4c68c9),_0x2e591d=0x3c,_0x140f3b=[_0x2e591d,0x0,_0x2e7193-_0x2e591d,0x0,_0x2e7193,_0x2e591d,_0x2e7193,_0x4c68c9-_0x2e591d,_0x2e7193-_0x2e591d,_0x4c68c9,_0x2e591d,_0x4c68c9,0x0,_0x4c68c9-_0x2e591d,0x0,_0x2e591d];return this[_0x22a66d(0x33a)](_0x3341be,_0x140f3b,_0x575fd2,0x2);},ImageManager[_0x26d5fa(0x217)]=function(_0x37abb4,_0x45e303){const _0x115770=_0x26d5fa,_0x277eb0=Graphics['width']+0x28,_0x5a8372=ImageManager['faceHeight']*0x2,_0xdf4931=new Bitmap(_0x277eb0,_0x5a8372),_0x5bb733=[[0x0,0x0,_0x277eb0,Math[_0x115770(0x2f4)](_0x5a8372*0x1/0x8),_0x277eb0,Math[_0x115770(0x371)](_0x5a8372*0x7/0x8),0x0,_0x5a8372],[0x0,0x0,_0x277eb0,0x0,_0x277eb0,_0x5a8372,0x0,_0x5a8372],[0x0,Math[_0x115770(0x2f4)](_0x5a8372*0x1/0x8),_0x277eb0,0x0,_0x277eb0,_0x5a8372,0x0,Math[_0x115770(0x371)](_0x5a8372*0x7/0x8)]];return this[_0x115770(0x33a)](_0xdf4931,_0x5bb733[_0x45e303],_0x37abb4,0x1);},ImageManager[_0x26d5fa(0x325)]=function(_0x46f43b,_0x58a679){const _0x4dc92b=_0x26d5fa,_0x45ce9a=Graphics[_0x4dc92b(0x259)]+0x28,_0x165a2a=ImageManager[_0x4dc92b(0x1e1)]*0x3,_0x5b4519=new Bitmap(_0x45ce9a,_0x165a2a),_0x4796a1=[[0x0,Math[_0x4dc92b(0x1e6)](_0x165a2a*0x3/0x5),_0x45ce9a,0x0,_0x45ce9a,Math[_0x4dc92b(0x1e6)](_0x165a2a*0x3/0x4),0x0,_0x165a2a],[0x0,0x0,_0x45ce9a,Math[_0x4dc92b(0x1e6)](_0x165a2a*0x3/0x5),_0x45ce9a,_0x165a2a,0x0,Math['round'](_0x165a2a*0x3/0x4)]];return this['fill_VisualCutinEffect_Bitmap'](_0x5b4519,_0x4796a1[_0x58a679],_0x46f43b,0x2);},ImageManager[_0x26d5fa(0x293)]=function(_0x556b2b,_0x41f9a0){const _0x5177a4=_0x26d5fa,_0x378523=Math[_0x5177a4(0x371)](Graphics[_0x5177a4(0x259)]/0x2),_0x2d65ad=Graphics['height']+0x28,_0x539552=new Bitmap(_0x378523,_0x2d65ad),_0x27625d=[[0x0,0x0,_0x378523,0x0,Math['round'](_0x378523*0x3/0x4),_0x2d65ad,Math['round'](_0x378523*0x1/0x2),_0x2d65ad],[0x0,0x0,_0x378523,0x0,Math[_0x5177a4(0x1e6)](_0x378523*0x1/0x2),_0x2d65ad,Math['round'](_0x378523*0x1/0x4),_0x2d65ad]];return this['fill_VisualCutinEffect_Bitmap'](_0x539552,_0x27625d[_0x41f9a0],_0x556b2b,0x2);},ImageManager[_0x26d5fa(0x2d8)]=function(_0x1024f3,_0x27e688){const _0x5d39b0=_0x26d5fa,_0x5c444b=[0x1,0x2,0x1][_0x27e688],_0x31a6ac=Math[_0x5d39b0(0x371)](Graphics['width']*_0x5c444b/0x3),_0x216839=Math[_0x5d39b0(0x2f4)](Graphics['width']*0x1/0x3),_0x4c63d2=Graphics[_0x5d39b0(0x23d)],_0x24c0e6=new Bitmap(_0x31a6ac,_0x4c63d2),_0x30f62c=[[0x0,0x0,_0x31a6ac,0x0,Math[_0x5d39b0(0x2f4)](_0x31a6ac/0x2),_0x4c63d2,0x0,_0x4c63d2],[0x0,_0x4c63d2,_0x31a6ac,_0x4c63d2,_0x31a6ac-Math[_0x5d39b0(0x1e6)](_0x216839/0x2),0x0,Math[_0x5d39b0(0x1e6)](_0x216839/0x2),0x0],[0x0,0x0,_0x31a6ac,0x0,_0x31a6ac,_0x4c63d2,Math[_0x5d39b0(0x2f4)](_0x31a6ac/0x2),_0x4c63d2]];return this[_0x5d39b0(0x33a)](_0x24c0e6,_0x30f62c[_0x27e688],_0x1024f3,0x2);},ImageManager[_0x26d5fa(0x1e0)]=function(_0x3cc32b){const _0x1f0385=_0x26d5fa,_0x27d860=Math[_0x1f0385(0x371)](Graphics[_0x1f0385(0x23d)]*0x1/0x2)+0x14,_0x55e369=Math[_0x1f0385(0x371)](Graphics[_0x1f0385(0x23d)]*0x1/0x2)+0x14,_0x1b3110=new Bitmap(_0x27d860,_0x55e369),_0x4d8708=[Math['round'](_0x27d860/0x2),0x0,_0x27d860,Math[_0x1f0385(0x1e6)](_0x55e369/0x2),Math[_0x1f0385(0x1e6)](_0x27d860/0x2),_0x55e369,0x0,Math[_0x1f0385(0x1e6)](_0x55e369/0x2)];return this[_0x1f0385(0x33a)](_0x1b3110,_0x4d8708,_0x3cc32b,0x2);},ImageManager[_0x26d5fa(0x1eb)]=function(_0x2f9e3c){const _0x574edf=_0x26d5fa,_0x22c76f=Math['ceil'](Graphics[_0x574edf(0x259)]/0x4)+0x28,_0x218525=Math[_0x574edf(0x371)](Graphics['height']*0x3/0x5),_0x5805a1=new Bitmap(_0x22c76f,_0x218525),_0x4d2f96=[Math[_0x574edf(0x1e6)](_0x22c76f*0x2/0x5),0x0,Math[_0x574edf(0x1e6)](_0x22c76f*0x7/0x8),Math['round'](_0x218525*0x1/0x5),_0x22c76f,Math[_0x574edf(0x1e6)](_0x218525*0x3/0x5),Math['round'](_0x22c76f*0x3/0x5),_0x218525,Math[_0x574edf(0x1e6)](_0x22c76f*0x1/0x8),Math[_0x574edf(0x1e6)](_0x218525*0x4/0x5),0x0,Math[_0x574edf(0x1e6)](_0x218525*0x2/0x5)];return this['fill_VisualCutinEffect_Bitmap'](_0x5805a1,_0x4d2f96,_0x2f9e3c,0x2);},ImageManager[_0x26d5fa(0x338)]=function(_0x2ca9c6,_0x1009d1){const _0x518cb1=_0x26d5fa,_0x3f5807=ImageManager[_0x518cb1(0x1df)][_0x518cb1(0x1e5)],_0x321996=ImageManager[_0x518cb1(0x1df)]['outerOutlineWeight'],_0x2ae65e=Math[_0x518cb1(0x371)](Graphics[_0x518cb1(0x259)]*0x1/0x2)+_0x3f5807/0x2+Math[_0x518cb1(0x2f4)](_0x321996/0x2),_0x1e7f25=Math[_0x518cb1(0x371)](Graphics[_0x518cb1(0x23d)]*0x1/0x2)+_0x3f5807/0x2+Math[_0x518cb1(0x2f4)](_0x321996/0x2),_0x504e20=new Bitmap(_0x2ae65e,_0x1e7f25),_0xf340ab=[[0x0,0x0,_0x2ae65e,0x0,_0x2ae65e,_0x1e7f25,0x0,_0x1e7f25],[_0x2ae65e,0x0,0x0,0x0,0x0,_0x1e7f25,_0x2ae65e,_0x1e7f25],[0x0,_0x1e7f25,_0x2ae65e,_0x1e7f25,_0x2ae65e,0x0,0x0,0x0],[_0x2ae65e,_0x1e7f25,0x0,_0x1e7f25,0x0,0x0,_0x2ae65e,0x0]];return this[_0x518cb1(0x33a)](_0x504e20,_0xf340ab[_0x1009d1],_0x2ca9c6,0x2);},ImageManager[_0x26d5fa(0x2df)]=function(_0x23e4c6,_0x4215ce){const _0x45fa7b=_0x26d5fa,_0x26be46=ImageManager['VISUAL_CUTIN_EFFECT'][_0x45fa7b(0x1e5)],_0x347419=Math[_0x45fa7b(0x371)](Graphics[_0x45fa7b(0x259)]/0x3)+_0x26be46,_0x5e66b6=Math[_0x45fa7b(0x371)](Graphics[_0x45fa7b(0x23d)]/0x2)+_0x26be46,_0x139547=new Bitmap(_0x347419,_0x5e66b6),_0x1898a7=[[0x0,0x0,_0x347419,0x0,Math['round'](_0x347419*0x5/0x6),Math[_0x45fa7b(0x1e6)](_0x5e66b6*0x5/0x6),0x0,_0x5e66b6],[_0x347419,0x0,0x0,0x0,Math[_0x45fa7b(0x1e6)](_0x347419*0x1/0x6),Math['round'](_0x5e66b6*0x5/0x6),_0x347419,_0x5e66b6],[0x0,_0x5e66b6,_0x347419,_0x5e66b6,Math[_0x45fa7b(0x1e6)](_0x347419*0x5/0x6),Math[_0x45fa7b(0x1e6)](_0x5e66b6*0x1/0x6),0x0,0x0],[_0x347419,_0x5e66b6,0x0,_0x5e66b6,Math['round'](_0x347419*0x1/0x6),Math[_0x45fa7b(0x1e6)](_0x5e66b6*0x1/0x6),_0x347419,0x0]];return this[_0x45fa7b(0x33a)](_0x139547,_0x1898a7[_0x4215ce],_0x23e4c6,0x2);},ImageManager['create_VisualCutinEffect_Bitmap_Rows']=function(_0x21df81,_0x2afd71){const _0x57a061=_0x26d5fa,_0x30a127=Graphics['width']+0x28,_0xab8b07=Math['ceil'](Graphics[_0x57a061(0x23d)]/_0x2afd71),_0x5ea8c6=new Bitmap(_0x30a127,_0xab8b07),_0x509ee5=0x5,_0x4cb98c=[0x0,Math[_0x57a061(0x371)](_0xab8b07*0x1/_0x509ee5),_0x30a127,Math[_0x57a061(0x371)](_0xab8b07*0x0/_0x509ee5),_0x30a127,Math['ceil'](_0xab8b07*(_0x509ee5-0x1)/_0x509ee5),0x0,Math['ceil'](_0xab8b07*_0x509ee5/_0x509ee5)];return this[_0x57a061(0x33a)](_0x5ea8c6,_0x4cb98c,_0x21df81,0.5);},ImageManager[_0x26d5fa(0x28c)]=function(_0x2041ff,_0xe1d0e9){const _0x36d623=_0x26d5fa,_0x5eeb89=Math[_0x36d623(0x371)](Graphics[_0x36d623(0x259)]/_0xe1d0e9),_0x5005b7=Graphics[_0x36d623(0x23d)]+0x28,_0x392e2c=new Bitmap(_0x5eeb89,_0x5005b7),_0xd45505=0x5,_0x8bc9d4=[Math[_0x36d623(0x371)](_0x5eeb89*0x1/_0xd45505),0x0,_0x5eeb89,0x0,Math[_0x36d623(0x371)](_0x5eeb89*(_0xd45505-0x1)/_0xd45505),_0x5005b7,0x0,_0x5005b7];return this[_0x36d623(0x33a)](_0x392e2c,_0x8bc9d4,_0x2041ff,0x1);},ImageManager[_0x26d5fa(0x32a)]=function(_0x53bd11,_0x6ce3ad,_0x4b7c7c){const _0x32002e=_0x26d5fa,_0x10f6d1=Math[_0x32002e(0x371)](Graphics[_0x32002e(0x259)]/_0x6ce3ad)-0x14,_0x18326f=Math[_0x32002e(0x371)](Graphics[_0x32002e(0x23d)]/_0x4b7c7c)-0x14,_0x500969=new Bitmap(_0x10f6d1,_0x18326f),_0x412abb=0x5,_0x2dece3=[Math[_0x32002e(0x371)](_0x10f6d1*0x1/_0x412abb),0x0,_0x10f6d1,0x0,Math['ceil'](_0x10f6d1*(_0x412abb-0x1)/_0x412abb),_0x18326f,0x0,_0x18326f];return this[_0x32002e(0x33a)](_0x500969,_0x2dece3,_0x53bd11,0x1);},ColorManager[_0x26d5fa(0x20d)]=function(_0x3d07fb){const _0x426a47=_0x26d5fa;return _0x3d07fb=String(_0x3d07fb),_0x3d07fb['match'](/#(.*)/i)?_0x426a47(0x244)[_0x426a47(0x2b6)](String(RegExp['$1'])):this[_0x426a47(0x1fa)](Number(_0x3d07fb));},Game_Temp['prototype']['testMask']=function(_0x5c0322){const _0x428e42=_0x26d5fa;let _0xde4478={};_0xde4478[_0x428e42(0x2ed)]=_0x5c0322['toLowerCase']()[_0x428e42(0x299)](),_0xde4478[_0x428e42(0x28f)]=0xc,_0xde4478[_0x428e42(0x303)]=0xc,_0xde4478[_0x428e42(0x25b)]=!![],_0xde4478['portraitFilename']='Actor1_2',_0xde4478['portraitOpacity']=0xff,_0xde4478[_0x428e42(0x215)]=![],_0xde4478[_0x428e42(0x290)]=![],_0xde4478[_0x428e42(0x364)]=!![],_0xde4478[_0x428e42(0x23f)]=![],_0xde4478['portraitForcedScale']=0x0,_0xde4478[_0x428e42(0x212)]=0x0,_0xde4478[_0x428e42(0x2b0)]=0x0,_0xde4478[_0x428e42(0x2f9)]=!![],_0xde4478['animatedPortraitWaitFrames']=0x4,_0xde4478['parallaxFilename']='Space',_0xde4478['parallaxOpacity']=0xff,_0xde4478[_0x428e42(0x30b)]=0x1,_0xde4478[_0x428e42(0x300)]=0x0,_0xde4478[_0x428e42(0x370)]=!![],_0xde4478['bgColor']=_0x428e42(0x309),SceneManager[_0x428e42(0x269)][_0x428e42(0x262)](_0xde4478);},VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x272)]=Game_Screen[_0x26d5fa(0x225)][_0x26d5fa(0x26e)],Game_Screen[_0x26d5fa(0x225)][_0x26d5fa(0x26e)]=function(){const _0x3092d2=_0x26d5fa;VisuMZ[_0x3092d2(0x2d2)][_0x3092d2(0x272)][_0x3092d2(0x2e1)](this),this[_0x3092d2(0x356)]();},Game_Screen[_0x26d5fa(0x225)][_0x26d5fa(0x356)]=function(){this['_visualCutinEffect']={'order':{'map':[],'battle':[]},'settings':{'map':{},'battle':{}}};},Game_Screen[_0x26d5fa(0x225)][_0x26d5fa(0x2e9)]=function(_0x212d7b){const _0x43eb43=_0x26d5fa;if(this[_0x43eb43(0x33e)]===undefined)this['initVisualCutinEffect']();if(!_0x212d7b)return;if(!_0x212d7b[_0x43eb43(0x2ed)])return;if(_0x212d7b[_0x43eb43(0x2ed)]['trim']()==='')return;const _0x490257=_0x212d7b[_0x43eb43(0x2ed)][_0x43eb43(0x2e8)]()['trim'](),_0x3a7501=this['_visualCutinEffect'],_0x5610da=_0x3a7501[_0x43eb43(0x24f)][SceneManager[_0x43eb43(0x249)]()?'battle':_0x43eb43(0x1f2)],_0x10083d=_0x3a7501[_0x43eb43(0x1f9)][SceneManager[_0x43eb43(0x249)]()?_0x43eb43(0x203):_0x43eb43(0x1f2)];if(_0x5610da['includes'](_0x490257))return;_0x5610da['push'](_0x490257),_0x10083d[_0x490257]=JSON['parse'](JSON[_0x43eb43(0x34b)](_0x212d7b));},Game_Screen['prototype'][_0x26d5fa(0x2a0)]=function(_0x3d1461,_0x9efb43,_0x13f09b){const _0x411496=_0x26d5fa;if(this[_0x411496(0x33e)]===undefined)this['initVisualCutinEffect']();if(!_0x3d1461)return;if(_0x3d1461['trim']()==='')return;_0x3d1461=_0x3d1461[_0x411496(0x2e8)]()[_0x411496(0x299)]();const _0x58082f=this[_0x411496(0x296)](_0x3d1461);_0x58082f[_0x411496(0x2fd)]=_0x9efb43,_0x58082f['portraitType']='';for(const _0x3264fe in _0x13f09b){_0x58082f[_0x3264fe]=_0x13f09b[_0x3264fe];}},Game_Screen['prototype'][_0x26d5fa(0x2d5)]=function(_0x52c9b3,_0x1d0777,_0x7eabb1){const _0x20487e=_0x26d5fa;if(this['_visualCutinEffect']===undefined)this[_0x20487e(0x356)]();if(!_0x52c9b3)return;if(_0x52c9b3[_0x20487e(0x299)]()==='')return;_0x52c9b3=_0x52c9b3[_0x20487e(0x2e8)]()['trim']();const _0x3e3a18=this['getVisualCutinEffectSettings'](_0x52c9b3);_0x3e3a18[_0x20487e(0x288)]=_0x1d0777;for(const _0x46cf71 in _0x7eabb1){_0x3e3a18[_0x46cf71]=_0x7eabb1[_0x46cf71];}},Game_Screen['prototype'][_0x26d5fa(0x294)]=function(_0x2d1054){const _0x44b5bb=_0x26d5fa;if(this['_visualCutinEffect']===undefined)this[_0x44b5bb(0x356)]();if(!_0x2d1054)return;if(_0x2d1054['trim']()==='')return;_0x2d1054=_0x2d1054['toLowerCase']()['trim']();const _0x570d52=this[_0x44b5bb(0x33e)],_0x40d48f=_0x570d52['order'][SceneManager[_0x44b5bb(0x249)]()?_0x44b5bb(0x203):_0x44b5bb(0x1f2)],_0x35fedb=_0x570d52[_0x44b5bb(0x1f9)][SceneManager[_0x44b5bb(0x249)]()?_0x44b5bb(0x203):_0x44b5bb(0x1f2)];_0x40d48f[_0x44b5bb(0x28d)](_0x2d1054),_0x35fedb[_0x2d1054]=undefined;},Game_Screen['prototype'][_0x26d5fa(0x2c9)]=function(){const _0x367ed3=_0x26d5fa;if(this[_0x367ed3(0x33e)]===undefined)this[_0x367ed3(0x356)]();const _0x359f45=this['_visualCutinEffect'],_0x385b79=_0x359f45[_0x367ed3(0x24f)][SceneManager[_0x367ed3(0x249)]()?_0x367ed3(0x203):'map'];return _0x385b79;},Game_Screen[_0x26d5fa(0x225)][_0x26d5fa(0x296)]=function(_0x29c04b){const _0x152aa9=_0x26d5fa;if(this[_0x152aa9(0x33e)]===undefined)this[_0x152aa9(0x356)]();if(!_0x29c04b)return;if(_0x29c04b[_0x152aa9(0x299)]()==='')return;_0x29c04b=_0x29c04b[_0x152aa9(0x2e8)]()[_0x152aa9(0x299)]();const _0x20a939=this['_visualCutinEffect'],_0x53db38=_0x20a939[_0x152aa9(0x1f9)][SceneManager[_0x152aa9(0x249)]()?_0x152aa9(0x203):_0x152aa9(0x1f2)];return _0x53db38[_0x29c04b]||null;},Game_Actor[_0x26d5fa(0x225)]['visualCutinPortraitFilename']=function(){const _0x16bc0d=_0x26d5fa;if(this[_0x16bc0d(0x2c7)]()!=='')return this[_0x16bc0d(0x2c7)]();return this[_0x16bc0d(0x320)]();},Game_Actor[_0x26d5fa(0x225)][_0x26d5fa(0x285)]=function(){const _0x479f51=_0x26d5fa;if(this[_0x479f51(0x2c7)]()!=='')return 0x0;return this['faceIndex']();},Game_Actor[_0x26d5fa(0x225)][_0x26d5fa(0x276)]=function(){return 0x0;},Game_Actor[_0x26d5fa(0x225)][_0x26d5fa(0x366)]=function(){const _0x51c745=_0x26d5fa;if(this[_0x51c745(0x2c7)]()!=='')return'';return _0x51c745(0x24a);},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x2fb)]=function(){const _0x3d2bc3=_0x26d5fa;if(this['hasCustomVisualCutinPortrait']())return this[_0x3d2bc3(0x2de)]();if(this['hasSvBattler']())return this[_0x3d2bc3(0x34f)]();return this['battlerName']();},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x285)]=function(){return 0x0;},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x276)]=function(){const _0x38cab8=_0x26d5fa;if(this[_0x38cab8(0x22f)]())return 0x0;return this[_0x38cab8(0x343)]();},Game_Enemy['prototype'][_0x26d5fa(0x366)]=function(){const _0x286a42=_0x26d5fa;if(this[_0x286a42(0x241)]())return'';if(this[_0x286a42(0x22f)]())return _0x286a42(0x2ac);if($gameSystem[_0x286a42(0x230)]())return _0x286a42(0x25d);return'enemy';},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x241)]=function(){const _0x1f7f2a=_0x26d5fa;return this[_0x1f7f2a(0x2de)]()!=='';},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x2de)]=function(){const _0x3ca024=_0x26d5fa;if(this[_0x3ca024(0x239)]===undefined){this[_0x3ca024(0x239)]='';const _0x3a900e=VisuMZ['VisualCutinEffect']['RegExp'],_0x2785e8=this['enemy']()[_0x3ca024(0x31a)];_0x2785e8[_0x3ca024(0x21b)](_0x3a900e[_0x3ca024(0x1dd)])&&(this[_0x3ca024(0x239)]=String(RegExp['$1'])[_0x3ca024(0x299)]()),_0x2785e8['match'](_0x3a900e['EnemyCutinFlipHorz'])&&(this[_0x3ca024(0x255)]=!![]),_0x2785e8[_0x3ca024(0x21b)](_0x3a900e[_0x3ca024(0x26b)])&&(this[_0x3ca024(0x2db)]=!![]);}return this[_0x3ca024(0x239)];},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x29b)]=function(){const _0x44096f=_0x26d5fa;return(this[_0x44096f(0x222)]()[_0x44096f(0x31a)]||'')[_0x44096f(0x21b)](VisuMZ['VisualCutinEffect'][_0x44096f(0x280)][_0x44096f(0x254)]);},Game_Enemy[_0x26d5fa(0x225)][_0x26d5fa(0x2e0)]=function(){const _0x38a697=_0x26d5fa;return(this[_0x38a697(0x222)]()[_0x38a697(0x31a)]||'')['match'](VisuMZ[_0x38a697(0x2d2)][_0x38a697(0x280)][_0x38a697(0x26b)]);},VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x238)]=Game_Interpreter[_0x26d5fa(0x225)][_0x26d5fa(0x352)],Game_Interpreter[_0x26d5fa(0x225)][_0x26d5fa(0x352)]=function(){const _0x3c1c87=_0x26d5fa;switch(this[_0x3c1c87(0x2b9)]){case'cutinEnter':if(SceneManager[_0x3c1c87(0x269)]&&SceneManager[_0x3c1c87(0x269)][_0x3c1c87(0x29e)]())return!![];this['_waitMode']='';break;case _0x3c1c87(0x334):if(SceneManager[_0x3c1c87(0x269)]&&SceneManager['_scene'][_0x3c1c87(0x314)]())return!![];this['_waitMode']='';break;}return VisuMZ['VisualCutinEffect'][_0x3c1c87(0x238)][_0x3c1c87(0x2e1)](this);},Scene_Message[_0x26d5fa(0x225)][_0x26d5fa(0x304)]=function(){const _0x4c6857=_0x26d5fa;this[_0x4c6857(0x336)](),this[_0x4c6857(0x2fc)]();},Scene_Message[_0x26d5fa(0x225)]['createVisualCutinContainer']=function(){const _0x3a5d08=_0x26d5fa;this[_0x3a5d08(0x308)]=this[_0x3a5d08(0x308)]||{},this['_visualCutinContainer']=new Sprite();const _0x3ab505=this[_0x3a5d08(0x1db)][_0x3a5d08(0x2ad)](this[_0x3a5d08(0x33b)]);this[_0x3a5d08(0x35e)](this['_visualCutinContainer'],_0x3ab505+0x1);},Scene_Message[_0x26d5fa(0x225)][_0x26d5fa(0x2fc)]=function(){const _0x41e39f=_0x26d5fa,_0x4af7d7=$gameScreen[_0x41e39f(0x2c9)]();for(const _0x2771a3 of _0x4af7d7){const _0xa9ee43=$gameScreen['getVisualCutinEffectSettings'](_0x2771a3);_0xa9ee43&&this[_0x41e39f(0x262)](_0xa9ee43);}this[_0x41e39f(0x2d4)][_0x41e39f(0x2b5)]();},Scene_Message[_0x26d5fa(0x225)]['startVisualCutin']=function(_0x1baeb9){const _0x32ae1b=_0x26d5fa;if(!_0x1baeb9)return;if(!_0x1baeb9[_0x32ae1b(0x2ed)])return;if(_0x1baeb9['type'][_0x32ae1b(0x299)]()==='')return;const _0x3414f2=_0x1baeb9[_0x32ae1b(0x2ed)][_0x32ae1b(0x2e8)]()['trim']();if(this[_0x32ae1b(0x308)][_0x3414f2]){if($gameTemp[_0x32ae1b(0x37b)]()){const _0x5efb9b=_0x32ae1b(0x35d)+'Only\x20one\x20cutin\x20of\x20each\x20type\x20can\x20be\x20visible\x20at\x20a\x20time.';console[_0x32ae1b(0x282)](_0x5efb9b);}return;}$gameScreen[_0x32ae1b(0x2e9)](_0x1baeb9);const _0x127ef1=new Sprite_VisualCutin(_0x1baeb9);this['_visualCutins'][_0x3414f2]=_0x127ef1,this['_visualCutinContainer'][_0x32ae1b(0x24e)](_0x127ef1);},Scene_Message['prototype'][_0x26d5fa(0x27c)]=function(_0x30ec86,_0x5a2ed5,_0x287810){const _0x3cddf3=_0x26d5fa;if(_0x30ec86[_0x3cddf3(0x299)]()==='')return;if(!this[_0x3cddf3(0x308)][_0x30ec86])return;$gameScreen[_0x3cddf3(0x2a0)](_0x30ec86,_0x5a2ed5,_0x287810);const _0x496f9b=this[_0x3cddf3(0x308)][_0x30ec86];_0x496f9b[_0x3cddf3(0x200)]();},Scene_Message[_0x26d5fa(0x225)]['changeVisualCutinParallax']=function(_0x30c88c,_0x12e624,_0xf299ba){const _0x2e6f78=_0x26d5fa;if(_0x30c88c[_0x2e6f78(0x299)]()==='')return;if(!this['_visualCutins'][_0x30c88c])return;$gameScreen['changeVisualCutinEffectParallax'](_0x30c88c,_0x12e624,_0xf299ba);const _0x28f058=this['_visualCutins'][_0x30c88c];_0x28f058[_0x2e6f78(0x378)]();},Scene_Message[_0x26d5fa(0x225)][_0x26d5fa(0x340)]=function(_0x5d0988){const _0x386292=_0x26d5fa;_0x5d0988=_0x5d0988['toLowerCase']()[_0x386292(0x299)]();if(!this['_visualCutins'][_0x5d0988])return;this[_0x386292(0x308)][_0x5d0988]['startExit']();},Scene_Message['prototype']['removeVisualCutin']=function(_0x180eb9){const _0x5104f9=_0x26d5fa;_0x180eb9=_0x180eb9['toLowerCase']()['trim']();if(!this[_0x5104f9(0x308)][_0x180eb9])return;$gameScreen['removeVisualCutinEffect'](_0x180eb9);const _0x324182=this['_visualCutins'][_0x180eb9];this[_0x5104f9(0x2d4)][_0x5104f9(0x339)](_0x324182),_0x324182[_0x5104f9(0x1ed)](),this[_0x5104f9(0x308)][_0x180eb9]=undefined;},Scene_Message[_0x26d5fa(0x225)][_0x26d5fa(0x2b1)]=function(){const _0x4b1f4e=_0x26d5fa,_0x7b0161=$gameScreen[_0x4b1f4e(0x2c9)]();for(const _0x10cf26 of _0x7b0161){this['endVisualCutin'](_0x10cf26);}},Scene_Message['prototype'][_0x26d5fa(0x29e)]=function(){const _0x2efd5c=_0x26d5fa;if(this['_visualCutinContainer'])return this[_0x2efd5c(0x2d4)]['children'][_0x2efd5c(0x1fd)](_0x19ba77=>_0x19ba77[_0x2efd5c(0x263)]);return![];},Scene_Message['prototype'][_0x26d5fa(0x314)]=function(){const _0x22479b=_0x26d5fa;if(this[_0x22479b(0x2d4)])return this[_0x22479b(0x2d4)][_0x22479b(0x1db)][_0x22479b(0x1fd)](_0x445019=>_0x445019[_0x22479b(0x321)]);return![];},VisuMZ['VisualCutinEffect'][_0x26d5fa(0x31b)]=Scene_Map[_0x26d5fa(0x225)][_0x26d5fa(0x372)],Scene_Map[_0x26d5fa(0x225)][_0x26d5fa(0x372)]=function(){const _0x11fb93=_0x26d5fa;VisuMZ['VisualCutinEffect'][_0x11fb93(0x31b)][_0x11fb93(0x2e1)](this),this[_0x11fb93(0x304)]();},VisuMZ[_0x26d5fa(0x2d2)][_0x26d5fa(0x204)]=Scene_Battle['prototype']['createSpriteset'],Scene_Battle[_0x26d5fa(0x225)]['createSpriteset']=function(){const _0x52dd43=_0x26d5fa;VisuMZ[_0x52dd43(0x2d2)][_0x52dd43(0x204)]['call'](this),this['createVisualCutins']();};function _0x20cc(_0x3bfd07,_0x4f65c8){const _0x432198=_0x4321();return _0x20cc=function(_0x20ccb9,_0x1fd5b3){_0x20ccb9=_0x20ccb9-0x1db;let _0x4631fa=_0x432198[_0x20ccb9];return _0x4631fa;},_0x20cc(_0x3bfd07,_0x4f65c8);}function Sprite_VisualCutin(){const _0x206e91=_0x26d5fa;this[_0x206e91(0x26e)](...arguments);}Sprite_VisualCutin[_0x26d5fa(0x225)]=Object[_0x26d5fa(0x2ae)](Sprite[_0x26d5fa(0x225)]),Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x1e9)]=Sprite_VisualCutin,Sprite_VisualCutin['prototype'][_0x26d5fa(0x26e)]=function(_0x1b44e1){const _0x16d9c8=_0x26d5fa;this[_0x16d9c8(0x341)]=_0x1b44e1[_0x16d9c8(0x2ed)]['toLowerCase']()[_0x16d9c8(0x299)]();;Sprite[_0x16d9c8(0x225)][_0x16d9c8(0x26e)][_0x16d9c8(0x2e1)](this),this[_0x16d9c8(0x1f0)](),this['initPosition'](),this['filters']=this[_0x16d9c8(0x223)]||[],this['loadAllBitmaps']();},Sprite_VisualCutin[_0x26d5fa(0x225)]['settings']=function(){const _0x2dd20f=_0x26d5fa;return $gameScreen[_0x2dd20f(0x296)](this[_0x2dd20f(0x341)]);},Sprite_VisualCutin['prototype']['initMembers']=function(){const _0x355f23=_0x26d5fa;this[_0x355f23(0x1de)]=0x0,this[_0x355f23(0x33f)]=0x0,this[_0x355f23(0x263)]=!![],this[_0x355f23(0x321)]=![],this[_0x355f23(0x36d)]=0x0,this[_0x355f23(0x1fc)]=0x0;},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x330)]=function(){const _0x584bd8=_0x26d5fa,_0x2f55f2=this['settings']()['type'],_0x3f3cef=this[_0x584bd8(0x31f)]();switch(_0x2f55f2){case _0x584bd8(0x1ec):case _0x584bd8(0x34c):case _0x584bd8(0x24b):case _0x584bd8(0x2eb):this[_0x584bd8(0x278)]['x']=0x0;break;case _0x584bd8(0x365):case'showcase':case'leftmajor':case'rightmajor':case _0x584bd8(0x2b7):case _0x584bd8(0x2aa):case'rightminor':case'lefthorzspan':case _0x584bd8(0x25c):case'righthorzspan':case _0x584bd8(0x2e5):case'righthorzslash':case _0x584bd8(0x20b):case _0x584bd8(0x369):case _0x584bd8(0x2d9):case _0x584bd8(0x1f6):case'rightdiamond':case _0x584bd8(0x332):case _0x584bd8(0x2dc):case _0x584bd8(0x2d3):case _0x584bd8(0x344):case _0x584bd8(0x2f8):case _0x584bd8(0x350):case _0x584bd8(0x2c4):case _0x584bd8(0x28a):case'row3rdfourth':case _0x584bd8(0x23c):case _0x584bd8(0x273):case'row2ndfifth':case'row3rdfifth':case _0x584bd8(0x2a8):case'row5thfifth':case _0x584bd8(0x2a4):case _0x584bd8(0x292):case _0x584bd8(0x316):case'col1stfourth':case _0x584bd8(0x2cf):case _0x584bd8(0x1e2):case'col4thfourth':case _0x584bd8(0x2a3):case'col2ndfifth':case'col3rdfifth':case _0x584bd8(0x323):case _0x584bd8(0x26a):case _0x584bd8(0x32f):case _0x584bd8(0x1f3):case _0x584bd8(0x279):case _0x584bd8(0x286):case _0x584bd8(0x306):case _0x584bd8(0x34d):case _0x584bd8(0x250):case _0x584bd8(0x2ef):case _0x584bd8(0x2b2):case _0x584bd8(0x2a6):case _0x584bd8(0x313):case'eightpack6':case'eightpack7':case _0x584bd8(0x346):case'twelvepack1':case _0x584bd8(0x277):case _0x584bd8(0x21c):case _0x584bd8(0x30e):case'twelvepack5':case'twelvepack6':case _0x584bd8(0x205):case _0x584bd8(0x258):case _0x584bd8(0x353):case _0x584bd8(0x30c):case _0x584bd8(0x253):case _0x584bd8(0x209):this[_0x584bd8(0x278)]['x']=0.5;break;case'toprightquad':case _0x584bd8(0x2ca):case'toprightcorner':case _0x584bd8(0x27f):this[_0x584bd8(0x278)]['x']=0x1;break;}switch(_0x2f55f2){case'topleftquad':case _0x584bd8(0x319):case _0x584bd8(0x24b):case _0x584bd8(0x2c3):this[_0x584bd8(0x278)]['y']=0x0;break;case _0x584bd8(0x365):case'showcase':case _0x584bd8(0x301):case _0x584bd8(0x26d):case _0x584bd8(0x2b7):case'centerminor':case _0x584bd8(0x377):case _0x584bd8(0x1ea):case _0x584bd8(0x25c):case _0x584bd8(0x246):case _0x584bd8(0x2e5):case _0x584bd8(0x2e7):case'leftvertslash':case _0x584bd8(0x369):case _0x584bd8(0x2d9):case _0x584bd8(0x1f6):case _0x584bd8(0x2fe):case _0x584bd8(0x332):case _0x584bd8(0x2dc):case _0x584bd8(0x2d3):case'row1stthird':case _0x584bd8(0x2f8):case _0x584bd8(0x350):case'row1stfourth':case _0x584bd8(0x28a):case'row3rdfourth':case _0x584bd8(0x23c):case _0x584bd8(0x273):case'row2ndfifth':case _0x584bd8(0x213):case _0x584bd8(0x2a8):case'row5thfifth':case _0x584bd8(0x2a4):case _0x584bd8(0x292):case _0x584bd8(0x316):case _0x584bd8(0x33d):case _0x584bd8(0x2cf):case _0x584bd8(0x1e2):case _0x584bd8(0x2c5):case _0x584bd8(0x2a3):case _0x584bd8(0x2ff):case'col3rdfifth':case _0x584bd8(0x323):case _0x584bd8(0x26a):case _0x584bd8(0x32f):case'sixpack2':case _0x584bd8(0x279):case _0x584bd8(0x286):case'sixpack5':case _0x584bd8(0x34d):case _0x584bd8(0x250):case _0x584bd8(0x2ef):case'eightpack3':case _0x584bd8(0x2a6):case _0x584bd8(0x313):case _0x584bd8(0x2be):case _0x584bd8(0x1f8):case _0x584bd8(0x346):case'twelvepack1':case _0x584bd8(0x277):case _0x584bd8(0x21c):case _0x584bd8(0x30e):case _0x584bd8(0x1dc):case'twelvepack6':case'twelvepack7':case _0x584bd8(0x258):case _0x584bd8(0x353):case'twelvepack10':case _0x584bd8(0x253):case _0x584bd8(0x209):this[_0x584bd8(0x278)]['y']=0.5;break;case _0x584bd8(0x34c):case _0x584bd8(0x2ca):case _0x584bd8(0x2eb):case _0x584bd8(0x27f):this['anchor']['y']=0x1;break;}switch(_0x2f55f2){case _0x584bd8(0x1ec):case _0x584bd8(0x34c):case _0x584bd8(0x24b):case _0x584bd8(0x2eb):this['x']=-ImageManager[_0x584bd8(0x1df)][_0x584bd8(0x1e5)];break;case _0x584bd8(0x2d6):this['x']=0x0;break;case _0x584bd8(0x365):case _0x584bd8(0x224):case _0x584bd8(0x1ea):case'centerhorzspan':case _0x584bd8(0x246):case _0x584bd8(0x2e5):case _0x584bd8(0x2e7):case _0x584bd8(0x20b):case _0x584bd8(0x369):case _0x584bd8(0x1f6):case _0x584bd8(0x2dc):case _0x584bd8(0x344):case _0x584bd8(0x2f8):case'row3rdthird':case'row1stfourth':case _0x584bd8(0x28a):case _0x584bd8(0x329):case _0x584bd8(0x23c):case'row1stfifth':case'row2ndfifth':case _0x584bd8(0x213):case _0x584bd8(0x2a8):case _0x584bd8(0x274):this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]/0x2);break;case _0x584bd8(0x2d9):case _0x584bd8(0x332):this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*0x1/0x6)+0x28;break;case _0x584bd8(0x2fe):case _0x584bd8(0x2d3):this['x']=Math[_0x584bd8(0x1e6)](Graphics['width']*0x5/0x6)-0x28;break;case _0x584bd8(0x229):this['x']=Graphics[_0x584bd8(0x259)];break;case _0x584bd8(0x319):case'bottomrightquad':case _0x584bd8(0x2c3):case'bottomrightcorner':this['x']=Graphics['width']+ImageManager['VISUAL_CUTIN_EFFECT'][_0x584bd8(0x1e5)];break;case _0x584bd8(0x301):this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*(0x1-0.5)/0x2);break;case'rightmajor':this['x']=Math['round'](Graphics['width']*(0x2-0.5)/0x2);break;case'leftminor':case _0x584bd8(0x2a4):case _0x584bd8(0x32f):case _0x584bd8(0x286):this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*(0x1-0.5)/0x3);break;case _0x584bd8(0x2aa):case'col2ndthird':case _0x584bd8(0x1f3):case _0x584bd8(0x306):this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*(0x2-0.5)/0x3);break;case _0x584bd8(0x377):case'col3rdthird':case _0x584bd8(0x279):case'sixpack6':this['x']=Math[_0x584bd8(0x1e6)](Graphics['width']*(0x3-0.5)/0x3);break;case _0x584bd8(0x33d):case _0x584bd8(0x250):case _0x584bd8(0x313):case _0x584bd8(0x202):case _0x584bd8(0x1dc):case _0x584bd8(0x353):this['x']=Math[_0x584bd8(0x1e6)](Graphics['width']*(0x1-0.5)/0x4);break;case _0x584bd8(0x2cf):case'eightpack2':case'eightpack6':case _0x584bd8(0x277):case _0x584bd8(0x327):case'twelvepack10':this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*(0x2-0.5)/0x4);break;case _0x584bd8(0x1e2):case _0x584bd8(0x2b2):case'eightpack7':case _0x584bd8(0x21c):case _0x584bd8(0x205):case _0x584bd8(0x253):this['x']=Math[_0x584bd8(0x1e6)](Graphics['width']*(0x3-0.5)/0x4);break;case'col4thfourth':case'eightpack4':case _0x584bd8(0x346):case _0x584bd8(0x30e):case _0x584bd8(0x258):case _0x584bd8(0x209):this['x']=Math['round'](Graphics[_0x584bd8(0x259)]*(0x4-0.5)/0x4);break;case'col1stfifth':this['x']=Math['round'](Graphics[_0x584bd8(0x259)]*(0x1-0.5)/0x5);break;case'col2ndfifth':this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*(0x2-0.5)/0x5);break;case _0x584bd8(0x1ee):this['x']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x259)]*(0x3-0.5)/0x5);break;case _0x584bd8(0x323):this['x']=Math['round'](Graphics[_0x584bd8(0x259)]*(0x4-0.5)/0x5);break;case _0x584bd8(0x26a):this['x']=Math[_0x584bd8(0x1e6)](Graphics['width']*(0x5-0.5)/0x5);break;}switch(_0x2f55f2){case'topleftquad':case _0x584bd8(0x319):case _0x584bd8(0x24b):case _0x584bd8(0x2c3):this['y']=-ImageManager[_0x584bd8(0x1df)]['OutlineThickness'];break;case _0x584bd8(0x2c6):this['y']=0x0;break;case _0x584bd8(0x224):case _0x584bd8(0x1ea):case _0x584bd8(0x25c):case'righthorzspan':case _0x584bd8(0x2e5):case'righthorzslash':case'leftmajor':case _0x584bd8(0x26d):case _0x584bd8(0x2b7):case'centerminor':case _0x584bd8(0x377):case _0x584bd8(0x2d9):case _0x584bd8(0x1f6):case'rightdiamond':case _0x584bd8(0x332):case _0x584bd8(0x2dc):case _0x584bd8(0x2d3):const _0x4b6680=Graphics[_0x584bd8(0x23d)]-_0x3f3cef;this['y']=Math['floor'](_0x4b6680/0x2);break;case _0x584bd8(0x365):case _0x584bd8(0x20b):case'rightvertslash':case _0x584bd8(0x2a4):case _0x584bd8(0x292):case _0x584bd8(0x316):case _0x584bd8(0x33d):case _0x584bd8(0x2cf):case _0x584bd8(0x1e2):case _0x584bd8(0x2c5):case'col1stfifth':case _0x584bd8(0x2ff):case'col3rdfifth':case _0x584bd8(0x323):case _0x584bd8(0x26a):this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]/0x2);break;case'bottom':this['y']=Graphics[_0x584bd8(0x23d)];break;case'bottomleftquad':case'bottomrightquad':case _0x584bd8(0x2eb):case'bottomrightcorner':this['y']=Graphics[_0x584bd8(0x23d)]+ImageManager[_0x584bd8(0x1df)][_0x584bd8(0x1e5)];break;case'sixpack1':case _0x584bd8(0x1f3):case _0x584bd8(0x279):case _0x584bd8(0x250):case _0x584bd8(0x2ef):case _0x584bd8(0x2b2):case _0x584bd8(0x2a6):this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x1-0.5)/0x2);break;case'sixpack4':case _0x584bd8(0x306):case _0x584bd8(0x34d):case _0x584bd8(0x313):case _0x584bd8(0x2be):case _0x584bd8(0x1f8):case'eightpack8':this['y']=Math[_0x584bd8(0x1e6)](Graphics['height']*(0x2-0.5)/0x2);break;case'row1stthird':case _0x584bd8(0x202):case _0x584bd8(0x277):case _0x584bd8(0x21c):case'twelvepack4':this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x1-0.5)/0x3);break;case _0x584bd8(0x2f8):case _0x584bd8(0x1dc):case _0x584bd8(0x327):case _0x584bd8(0x205):case'twelvepack8':this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x2-0.5)/0x3);break;case _0x584bd8(0x350):case'twelvepack9':case'twelvepack10':case'twelvepack11':case _0x584bd8(0x209):this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x3-0.5)/0x3);break;case _0x584bd8(0x2c4):this['y']=Math['round'](Graphics[_0x584bd8(0x23d)]*(0x1-0.5)/0x4);break;case _0x584bd8(0x28a):this['y']=Math[_0x584bd8(0x1e6)](Graphics['height']*(0x2-0.5)/0x4);break;case _0x584bd8(0x329):this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x3-0.5)/0x4);break;case'row4thfourth':this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x4-0.5)/0x4);break;case'row1stfifth':this['y']=Math[_0x584bd8(0x1e6)](Graphics['height']*(0x1-0.5)/0x5);break;case _0x584bd8(0x35f):this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x2-0.5)/0x5);break;case'row3rdfifth':this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x3-0.5)/0x5);break;case _0x584bd8(0x2a8):this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x4-0.5)/0x5);break;case'row5thfifth':this['y']=Math[_0x584bd8(0x1e6)](Graphics[_0x584bd8(0x23d)]*(0x5-0.5)/0x5);break;}},Sprite_VisualCutin[_0x26d5fa(0x225)]['statusWindowHeight']=function(){const _0xec1bff=_0x26d5fa;if(Imported[_0xec1bff(0x2bf)]&&SceneManager[_0xec1bff(0x249)]()){if(Imported[_0xec1bff(0x2ab)]&&BattleManager[_0xec1bff(0x333)]())return 0x0;if(SceneManager[_0xec1bff(0x269)]['_statusWindow'])return SceneManager[_0xec1bff(0x269)]['_statusWindow'][_0xec1bff(0x23d)];}return SceneManager[_0xec1bff(0x269)][_0xec1bff(0x2ea)](0x4,SceneManager[_0xec1bff(0x249)]());},Sprite_VisualCutin['prototype']['startEntrance']=function(){const _0x1a42d6=_0x26d5fa,_0x5254f5=ImageManager[_0x1a42d6(0x312)](this[_0x1a42d6(0x1f9)]()[_0x1a42d6(0x2ed)]);this[_0x1a42d6(0x263)]=!![],this['_fadeDuration']=this[_0x1a42d6(0x1f9)]()[_0x1a42d6(0x28f)]||0x1,this[_0x1a42d6(0x2da)]=0xff,this['_fadeRemove']=![],this[_0x1a42d6(0x22d)]=this[_0x1a42d6(0x1de)],this['_moveWholeDuration']=this[_0x1a42d6(0x1de)],this[_0x1a42d6(0x264)]=_0x5254f5[_0x1a42d6(0x36e)]||_0x1a42d6(0x236),this['x']+=_0x5254f5[_0x1a42d6(0x27b)]??0x0,this['y']+=_0x5254f5[_0x1a42d6(0x23a)]??0x0,this[_0x1a42d6(0x2b8)]=this['x'],this[_0x1a42d6(0x302)]=this['y'],this['x']+=_0x5254f5[_0x1a42d6(0x2f1)]??0x0,this['y']+=_0x5254f5[_0x1a42d6(0x335)]??0x0,this[_0x1a42d6(0x2af)]=this[_0x1a42d6(0x1de)],this['_movePortraitWholeDuration']=this[_0x1a42d6(0x1de)],this[_0x1a42d6(0x361)]=this[_0x1a42d6(0x1f9)]()[_0x1a42d6(0x31c)]||'Linear',this[_0x1a42d6(0x207)]&&(this[_0x1a42d6(0x283)]=this[_0x1a42d6(0x207)]['x'],this[_0x1a42d6(0x271)]=this['_portraitSprite']['y'],this['_portraitSprite']['x']+=this[_0x1a42d6(0x1f9)]()['portraitEnterX'],this[_0x1a42d6(0x207)]['y']+=this[_0x1a42d6(0x1f9)]()[_0x1a42d6(0x2ce)]);},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x2b4)]=function(){const _0x585da3=_0x26d5fa,_0xb86181=ImageManager[_0x585da3(0x312)](this[_0x585da3(0x1f9)]()[_0x585da3(0x2ed)]);this['_exiting']=!![],this[_0x585da3(0x1de)]=this[_0x585da3(0x1f9)]()['exitDuration']||0x1,this[_0x585da3(0x2da)]=0x0,this[_0x585da3(0x29c)]=!![],this['_moveDuration']=this[_0x585da3(0x1de)],this[_0x585da3(0x289)]=this[_0x585da3(0x1de)],this['_moveEasingType']=_0xb86181['exitEasingType']||_0x585da3(0x236),this[_0x585da3(0x2b8)]=this['x']+_0xb86181[_0x585da3(0x287)]??0x0,this[_0x585da3(0x302)]=this['y']+_0xb86181[_0x585da3(0x235)]??0x0,this[_0x585da3(0x207)]&&(this['_movePortraitDuration']=this[_0x585da3(0x1de)],this['_movePortraitWholeDuration']=this[_0x585da3(0x1de)],this[_0x585da3(0x361)]=this[_0x585da3(0x1f9)]()[_0x585da3(0x281)]||_0x585da3(0x236),this[_0x585da3(0x283)]=this[_0x585da3(0x207)]['x']+this['settings']()['portraitExitX'],this[_0x585da3(0x271)]=this[_0x585da3(0x207)]['y']+this['settings']()[_0x585da3(0x2cb)]);},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x1ed)]=function(){const _0x484c39=_0x26d5fa;Sprite[_0x484c39(0x225)][_0x484c39(0x1ed)][_0x484c39(0x2e1)](this),this[_0x484c39(0x31d)]&&this[_0x484c39(0x31d)][_0x484c39(0x1ed)]();},Sprite_VisualCutin[_0x26d5fa(0x225)]['loadAllBitmaps']=function(){const _0x53d5db=_0x26d5fa;this['_loadingBitmaps']=[];if(ImageManager[_0x53d5db(0x2e6)](this[_0x53d5db(0x1f9)]()[_0x53d5db(0x2ed)])){const _0x1c87d4=this[_0x53d5db(0x1f9)]()['type']||'',_0x145892=ImageManager[_0x53d5db(0x375)](_0x1c87d4);this['_loadingBitmaps'][_0x53d5db(0x2ee)](_0x145892);const _0x20b346=ImageManager[_0x53d5db(0x24c)](_0x1c87d4);this[_0x53d5db(0x324)][_0x53d5db(0x2ee)](_0x20b346);}if((this[_0x53d5db(0x1f9)]()[_0x53d5db(0x288)]||'')!==''){const _0x4760b0=ImageManager[_0x53d5db(0x252)](this['settings']()['parallaxFilename']);if(_0x4760b0[_0x53d5db(0x237)]===_0x53d5db(0x2a9))this['_loadingBitmaps']['push'](_0x4760b0);}if((this['settings']()[_0x53d5db(0x2fd)]||'')!==''){const _0x349742=this[_0x53d5db(0x284)]();if(_0x349742[_0x53d5db(0x237)]===_0x53d5db(0x2a9))this[_0x53d5db(0x324)]['push'](_0x349742);}if(this[_0x53d5db(0x324)][_0x53d5db(0x349)]<=0x0)this[_0x53d5db(0x360)]();else for(const _0x56690e of this[_0x53d5db(0x324)]){_0x56690e[_0x53d5db(0x211)](this[_0x53d5db(0x373)][_0x53d5db(0x359)](this,_0x56690e));}},Sprite_VisualCutin['prototype'][_0x26d5fa(0x373)]=function(_0x7615ba){const _0x4642a1=_0x26d5fa;this[_0x4642a1(0x324)][_0x4642a1(0x28d)](_0x7615ba);if(this[_0x4642a1(0x324)]['length']<=0x0)this[_0x4642a1(0x360)]();},Sprite_VisualCutin['prototype'][_0x26d5fa(0x360)]=function(){const _0x1597d4=_0x26d5fa;this[_0x1597d4(0x32b)](),this[_0x1597d4(0x2b3)](),this['createBgColorSprite'](),this['createParallaxSprite'](),this[_0x1597d4(0x256)](),this['createOutlineSprite'](),this[_0x1597d4(0x25e)]();},Sprite_VisualCutin[_0x26d5fa(0x225)]['createMaskContainers']=function(){const _0x58a325=_0x26d5fa;this[_0x58a325(0x36f)]=new Sprite(),this[_0x58a325(0x20e)]=new Sprite();const _0x17e1c5=[this[_0x58a325(0x36f)],this['_foregroundContainer']];for(const _0x27e93e of _0x17e1c5){this[_0x58a325(0x24e)](_0x27e93e),_0x27e93e[_0x58a325(0x223)]=_0x27e93e[_0x58a325(0x223)]||[],_0x27e93e[_0x58a325(0x278)]['x']=this[_0x58a325(0x278)]['x'],_0x27e93e[_0x58a325(0x278)]['y']=this['anchor']['y'];}},Sprite_VisualCutin['prototype'][_0x26d5fa(0x2b3)]=function(){const _0x1f4efd=_0x26d5fa,_0x52920f=this[_0x1f4efd(0x1f9)]()['type']||'';this[_0x1f4efd(0x248)]=new Sprite(),this['_maskSprite']['bitmap']=ImageManager['cached_VisualCutinEffect_Mask'](_0x52920f),this[_0x1f4efd(0x24e)](this[_0x1f4efd(0x248)]),this[_0x1f4efd(0x248)][_0x1f4efd(0x278)]['x']=this['anchor']['x'],this[_0x1f4efd(0x248)]['anchor']['y']=this['anchor']['y'],this[_0x1f4efd(0x36a)]=new PIXI[(_0x1f4efd(0x1fb))](this[_0x1f4efd(0x248)]),this['_backgroundContainer'][_0x1f4efd(0x223)][_0x1f4efd(0x2ee)](this['_backgroundMaskFilter']),this[_0x1f4efd(0x2f0)]=new PIXI[(_0x1f4efd(0x1fb))](this[_0x1f4efd(0x248)]),this[_0x1f4efd(0x20e)]['filters'][_0x1f4efd(0x2ee)](this[_0x1f4efd(0x2f0)]);},Sprite_VisualCutin[_0x26d5fa(0x225)]['createBgColorSprite']=function(){const _0x54e746=_0x26d5fa;this[_0x54e746(0x31d)]=new Sprite(),this[_0x54e746(0x36f)]['addChild'](this[_0x54e746(0x31d)]);if(this[_0x54e746(0x1f9)]()[_0x54e746(0x370)]){const _0x498140=this[_0x54e746(0x248)][_0x54e746(0x266)],_0x2ffd7f=ColorManager['getColor'](this[_0x54e746(0x1f9)]()['bgColor']||'#000000');this[_0x54e746(0x31d)][_0x54e746(0x266)]=new Bitmap(_0x498140[_0x54e746(0x259)],_0x498140['height']),this[_0x54e746(0x31d)][_0x54e746(0x266)][_0x54e746(0x1ff)](0x0,0x0,_0x498140[_0x54e746(0x259)],_0x498140[_0x54e746(0x23d)],_0x2ffd7f);}this[_0x54e746(0x31d)]['anchor']['x']=this[_0x54e746(0x278)]['x'],this['_bgSprite'][_0x54e746(0x278)]['y']=this[_0x54e746(0x278)]['y'];},Sprite_VisualCutin['prototype'][_0x26d5fa(0x21a)]=function(){const _0x5f4227=_0x26d5fa,_0x4709ad=this[_0x5f4227(0x1f9)]()[_0x5f4227(0x288)]||'';if(_0x4709ad[_0x5f4227(0x299)]()==='')return;this['_parallaxSprite']=new TilingSprite(),this[_0x5f4227(0x36f)]['addChild'](this['_parallaxSprite']);const _0x25b8de=ImageManager['loadParallax'](_0x4709ad);this[_0x5f4227(0x247)](_0x25b8de);},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x247)]=function(_0x4a5e79){const _0x32de75=_0x26d5fa;this[_0x32de75(0x322)][_0x32de75(0x266)]=_0x4a5e79;const _0x3cf619=this['_maskSprite']['bitmap'];this[_0x32de75(0x322)]['move'](0x0,0x0,_0x3cf619[_0x32de75(0x259)],_0x3cf619['height']),this[_0x32de75(0x322)]['opacity']=this[_0x32de75(0x1f9)]()[_0x32de75(0x2fa)]??0xff,this['_backgroundMaskFilter'][_0x32de75(0x36c)]=this[_0x32de75(0x1f9)]()[_0x32de75(0x22b)]??0x0,this['_parallaxSprite']['anchor']['x']=this[_0x32de75(0x278)]['x'],this[_0x32de75(0x322)][_0x32de75(0x278)]['y']=this[_0x32de75(0x278)]['y'],this['_parallaxSprite'][_0x32de75(0x210)]['x']+=this[_0x32de75(0x1f9)]()[_0x32de75(0x233)],this[_0x32de75(0x322)][_0x32de75(0x210)]['y']+=this[_0x32de75(0x1f9)]()[_0x32de75(0x2a5)],this[_0x32de75(0x25f)]=new ColorFilter(),this['_parallaxSprite'][_0x32de75(0x223)]=this['_parallaxSprite'][_0x32de75(0x223)]||[],this[_0x32de75(0x322)][_0x32de75(0x223)]['push'](this['_parallaxColorFilter']),this['_parallaxColorFilter']['setHue'](this[_0x32de75(0x1f9)]()[_0x32de75(0x1e8)]??0x0);},Sprite_VisualCutin[_0x26d5fa(0x225)]['loadPortraitBitmap']=function(){const _0x599c2e=_0x26d5fa,_0x31bb41=this['settings']()[_0x599c2e(0x2fd)];if(this['settings']()[_0x599c2e(0x2c1)]!==undefined){if(this['settings']()['portraitType']==='enemy')return ImageManager[_0x599c2e(0x1e3)](_0x31bb41);else{if(this[_0x599c2e(0x1f9)]()[_0x599c2e(0x2c1)]===_0x599c2e(0x25d))return ImageManager[_0x599c2e(0x22e)](_0x31bb41);else{if(this[_0x599c2e(0x1f9)]()[_0x599c2e(0x2c1)]===_0x599c2e(0x2ac))return ImageManager[_0x599c2e(0x298)](_0x31bb41);else{if(this[_0x599c2e(0x1f9)]()[_0x599c2e(0x2c1)]===_0x599c2e(0x24a))return ImageManager[_0x599c2e(0x36b)](_0x31bb41);}}}}return ImageManager[_0x599c2e(0x342)](_0x31bb41);},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x256)]=function(){const _0x124759=_0x26d5fa,_0x3395da=this[_0x124759(0x1f9)]()[_0x124759(0x2fd)]||'';if(_0x3395da[_0x124759(0x299)]()==='')return;this['_portraitSprite']=new Sprite(),this[_0x124759(0x20e)][_0x124759(0x24e)](this[_0x124759(0x207)]);const _0x5a8156=this['loadPortraitBitmap']();this[_0x124759(0x357)](_0x5a8156);},Sprite_VisualCutin[_0x26d5fa(0x225)]['applyPortraitBitmap']=function(_0x183871){const _0x2ca7f3=_0x26d5fa;this[_0x2ca7f3(0x207)][_0x2ca7f3(0x266)]=_0x183871,this[_0x2ca7f3(0x207)][_0x2ca7f3(0x24d)](this['settings']()[_0x2ca7f3(0x226)]??0x0),this[_0x2ca7f3(0x207)][_0x2ca7f3(0x33f)]=this['settings']()[_0x2ca7f3(0x35b)]??0xff,this[_0x2ca7f3(0x207)][_0x2ca7f3(0x278)]['x']=this[_0x2ca7f3(0x1f9)]()['portraitAnchorX']??0.5,this[_0x2ca7f3(0x207)][_0x2ca7f3(0x278)]['y']=this[_0x2ca7f3(0x1f9)]()[_0x2ca7f3(0x28e)]??0.5;const _0x24b5a2=this[_0x2ca7f3(0x248)][_0x2ca7f3(0x266)];this[_0x2ca7f3(0x207)]['x']=_0x24b5a2[_0x2ca7f3(0x259)]*(this[_0x2ca7f3(0x207)][_0x2ca7f3(0x278)]['x']-this[_0x2ca7f3(0x278)]['x']),this['_portraitSprite']['y']=_0x24b5a2[_0x2ca7f3(0x23d)]*(this['_portraitSprite'][_0x2ca7f3(0x278)]['y']-this[_0x2ca7f3(0x278)]['y']),this[_0x2ca7f3(0x207)]['x']+=this[_0x2ca7f3(0x1f9)]()[_0x2ca7f3(0x212)],this[_0x2ca7f3(0x207)]['y']+=this[_0x2ca7f3(0x1f9)]()[_0x2ca7f3(0x2b0)],this['applyPortraitFrame']();if(this[_0x2ca7f3(0x1f9)]()[_0x2ca7f3(0x326)]!==0x0){const _0x5925bf=this[_0x2ca7f3(0x1f9)]()[_0x2ca7f3(0x326)];this[_0x2ca7f3(0x207)][_0x2ca7f3(0x251)]['x']=_0x5925bf,this[_0x2ca7f3(0x207)][_0x2ca7f3(0x251)]['y']=_0x5925bf;}else{if(this['settings']()['portraitScaleToFit']){const _0x41c59f=_0x24b5a2[_0x2ca7f3(0x259)]/this[_0x2ca7f3(0x207)][_0x2ca7f3(0x259)],_0x36220e=_0x24b5a2['height']/this['_portraitSprite']['height'],_0x5b10a4=this['settings']()[_0x2ca7f3(0x23f)]?Math[_0x2ca7f3(0x2cc)](_0x41c59f,_0x36220e):Math[_0x2ca7f3(0x219)](_0x41c59f,_0x36220e);this[_0x2ca7f3(0x207)][_0x2ca7f3(0x251)]['x']=_0x5b10a4,this[_0x2ca7f3(0x207)][_0x2ca7f3(0x251)]['y']=_0x5b10a4;}}if(this['settings']()[_0x2ca7f3(0x215)])this[_0x2ca7f3(0x207)][_0x2ca7f3(0x251)]['x']*=-0x1;if(this[_0x2ca7f3(0x1f9)]()[_0x2ca7f3(0x290)])this[_0x2ca7f3(0x207)]['scale']['y']*=-0x1;},Sprite_VisualCutin[_0x26d5fa(0x225)]['applyPortraitFrame']=function(){const _0x548682=_0x26d5fa;if(this[_0x548682(0x32e)]()){this[_0x548682(0x36d)]=0x0,this[_0x548682(0x1fc)]=0x0,this[_0x548682(0x265)]();return;}const _0x313f1b=this[_0x548682(0x207)][_0x548682(0x266)],_0x4fd2c0=this[_0x548682(0x1f9)]()[_0x548682(0x2c1)];if(_0x4fd2c0!==undefined){if(_0x4fd2c0===_0x548682(0x24a)){const _0x3d0d9d=this[_0x548682(0x1f9)]()[_0x548682(0x358)],_0x30b6bc=ImageManager[_0x548682(0x363)],_0xf4aaaa=ImageManager[_0x548682(0x1e1)],_0x2f73b8=Math['floor'](_0x3d0d9d%0x4*_0x30b6bc/0x2),_0x4f12b0=Math[_0x548682(0x2f4)](Math['floor'](_0x3d0d9d/0x4)*_0xf4aaaa/0x2);this['_portraitSprite'][_0x548682(0x242)](_0x2f73b8,_0x4f12b0,_0xf4aaaa,_0xf4aaaa);return;}else{if(_0x4fd2c0===_0x548682(0x2ac)){const _0x38b514=this[_0x548682(0x1f9)]()[_0x548682(0x2fd)][_0x548682(0x21b)](/\$/i),_0x502b24=_0x38b514?0x1:ImageManager['svActorHorzCells'],_0x3d48a0=_0x38b514?0x1:ImageManager[_0x548682(0x291)],_0x5b7ab9=_0x313f1b[_0x548682(0x259)]/_0x502b24,_0xbdf170=_0x313f1b[_0x548682(0x23d)]/_0x3d48a0;this[_0x548682(0x207)][_0x548682(0x242)](0x0,0x0,_0x5b7ab9,_0xbdf170);return;}}}this['_portraitSprite'][_0x548682(0x242)](0x0,0x0,_0x313f1b[_0x548682(0x259)],_0x313f1b[_0x548682(0x23d)]);},Sprite_VisualCutin['prototype'][_0x26d5fa(0x221)]=function(){const _0x5048b4=_0x26d5fa;if(!this[_0x5048b4(0x1f9)]()['outlineShow'])return;const _0x491e49=this[_0x5048b4(0x1f9)]()[_0x5048b4(0x2ed)]||'';this[_0x5048b4(0x208)]=new Sprite(),this[_0x5048b4(0x20e)]['addChild'](this[_0x5048b4(0x208)]),this[_0x5048b4(0x208)][_0x5048b4(0x266)]=ImageManager[_0x5048b4(0x24c)](_0x491e49),this[_0x5048b4(0x208)]['anchor']['x']=0.5,this[_0x5048b4(0x208)][_0x5048b4(0x278)]['y']=0.5;const _0x5eddfd=this[_0x5048b4(0x248)]['bitmap'],_0x445d59=ImageManager[_0x5048b4(0x312)](_0x491e49);this[_0x5048b4(0x208)]['x']=_0x5eddfd[_0x5048b4(0x259)]*(0.5-this[_0x5048b4(0x278)]['x']),this[_0x5048b4(0x208)]['x']+=_0x445d59[_0x5048b4(0x26c)],this[_0x5048b4(0x208)]['y']=_0x5eddfd[_0x5048b4(0x23d)]*(0.5-this['anchor']['y']),this[_0x5048b4(0x208)]['y']+=_0x445d59[_0x5048b4(0x2c8)];},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x2b5)]=function(){const _0x55b619=_0x26d5fa;Sprite[_0x55b619(0x225)][_0x55b619(0x2b5)][_0x55b619(0x2e1)](this);if(!this[_0x55b619(0x1f9)]())return![];this[_0x55b619(0x2d7)](),this['updateParallaxSprite'](),this[_0x55b619(0x243)](),this[_0x55b619(0x35c)](),this[_0x55b619(0x275)]();},Sprite_VisualCutin[_0x26d5fa(0x225)]['updateParallaxSprite']=function(){const _0x3186ef=_0x26d5fa;if(!this[_0x3186ef(0x322)])return;this[_0x3186ef(0x1f9)]()['parallaxX']!==0x0&&(this[_0x3186ef(0x322)][_0x3186ef(0x210)]['x']+=this['settings']()['parallaxScrollX']),this[_0x3186ef(0x1f9)]()[_0x3186ef(0x228)]!==0x0&&(this[_0x3186ef(0x322)]['origin']['y']+=this[_0x3186ef(0x1f9)]()[_0x3186ef(0x300)]);},Sprite_VisualCutin['prototype'][_0x26d5fa(0x243)]=function(){const _0x4d3ca0=_0x26d5fa;if(this[_0x4d3ca0(0x22d)]===undefined)return;if(this[_0x4d3ca0(0x22d)]<=0x0)return;const _0xfe8114=this['_moveDuration'],_0x3ab16b=this[_0x4d3ca0(0x289)],_0x3c5e7a=this[_0x4d3ca0(0x264)];this['_moveTargetX']!==undefined&&(this['x']=this[_0x4d3ca0(0x2a1)](this['x'],this[_0x4d3ca0(0x2b8)]??this['x'],_0xfe8114,_0x3ab16b,_0x3c5e7a));this[_0x4d3ca0(0x302)]!==undefined&&(this['y']=this['applyEasing'](this['y'],this[_0x4d3ca0(0x302)]??this['y'],_0xfe8114,_0x3ab16b,_0x3c5e7a));this['_moveDuration']--;if(this['_moveDuration']<=0x0){if(this['_moveTargetX']!==undefined)this['x']=this['_moveTargetX']??this['x'];if(this[_0x4d3ca0(0x302)]!==undefined)this['y']=this[_0x4d3ca0(0x302)]??this['y'];}},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x35c)]=function(){const _0x2ff80e=_0x26d5fa;if(this[_0x2ff80e(0x2af)]===undefined)return;if(this[_0x2ff80e(0x2af)]<=0x0)return;if(!this[_0x2ff80e(0x207)])return;const _0xcd8591=this[_0x2ff80e(0x2af)],_0x720ef5=this[_0x2ff80e(0x2bc)],_0x5bfc50=this[_0x2ff80e(0x361)];this['_portraitSprite']['x']=this[_0x2ff80e(0x2a1)](this[_0x2ff80e(0x207)]['x'],this['_portraitTargetX'],_0xcd8591,_0x720ef5,_0x5bfc50),this[_0x2ff80e(0x207)]['y']=this['applyEasing'](this[_0x2ff80e(0x207)]['y'],this[_0x2ff80e(0x271)],_0xcd8591,_0x720ef5,_0x5bfc50),this[_0x2ff80e(0x2af)]--,this[_0x2ff80e(0x2af)]<=0x0&&(this[_0x2ff80e(0x207)]['x']=this['_portraitTargetX'],this[_0x2ff80e(0x207)]['y']=this[_0x2ff80e(0x271)]);},Sprite_VisualCutin[_0x26d5fa(0x225)]['applyEasing']=function(_0x2445cf,_0x36dd13,_0x630640,_0x4f0ff5,_0x5905d5){const _0x2088bb=_0x26d5fa,_0x2c6476=VisuMZ[_0x2088bb(0x27a)]((_0x4f0ff5-_0x630640)/_0x4f0ff5,_0x5905d5||_0x2088bb(0x236)),_0x271a4c=VisuMZ[_0x2088bb(0x27a)]((_0x4f0ff5-_0x630640+0x1)/_0x4f0ff5,_0x5905d5||_0x2088bb(0x236)),_0x3e7fa4=(_0x2445cf-_0x36dd13*_0x2c6476)/(0x1-_0x2c6476);return _0x3e7fa4+(_0x36dd13-_0x3e7fa4)*_0x271a4c;},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x275)]=function(){const _0xee5d89=_0x26d5fa;if(this[_0xee5d89(0x1de)]<=0x0)return;const _0x2a4668=this['_fadeDuration'],_0x148022=this[_0xee5d89(0x2da)];this[_0xee5d89(0x33f)]=(this[_0xee5d89(0x33f)]*(_0x2a4668-0x1)+_0x148022)/_0x2a4668,this[_0xee5d89(0x1de)]--,this[_0xee5d89(0x1de)]<=0x0&&(this['settings']()[_0xee5d89(0x28f)]=0x1,this[_0xee5d89(0x33f)]=_0x148022,this[_0xee5d89(0x263)]=![],this[_0xee5d89(0x321)]=![],this[_0xee5d89(0x29c)]&&SceneManager[_0xee5d89(0x269)]['removeVisualCutin'](this['settings']()[_0xee5d89(0x2ed)]));},Sprite_VisualCutin['prototype'][_0x26d5fa(0x32e)]=function(){const _0x2af3bc=_0x26d5fa;if(!this['settings']())return![];if(this[_0x2af3bc(0x34a)])return!![];if(Imported[_0x2af3bc(0x2e2)]&&this[_0x2af3bc(0x207)]){const _0x1f094e=this[_0x2af3bc(0x1f9)]()[_0x2af3bc(0x2fd)]||'';if(_0x1f094e[_0x2af3bc(0x21b)](/\[ANI\]\[(\d+)x(\d+)\]/i))return this[_0x2af3bc(0x34a)]=!![],this[_0x2af3bc(0x29f)]=Math[_0x2af3bc(0x2cc)](0x1,parseInt(RegExp['$1'])),this[_0x2af3bc(0x30f)]=Math['max'](0x1,parseInt(RegExp['$2'])),this[_0x2af3bc(0x2f7)]=this[_0x2af3bc(0x29f)]*this[_0x2af3bc(0x30f)],!![];}return![];},Sprite_VisualCutin[_0x26d5fa(0x225)]['updateAnimatedPortrait']=function(){const _0x196217=_0x26d5fa;if(!this[_0x196217(0x32e)]())return;this[_0x196217(0x2f6)]();},Sprite_VisualCutin[_0x26d5fa(0x225)]['updateAnimatedPictureCount']=function(){const _0x5a98d8=_0x26d5fa;this[_0x5a98d8(0x36d)]+=0x1,this[_0x5a98d8(0x36d)]>=this[_0x5a98d8(0x30d)]()&&(this[_0x5a98d8(0x36d)]=0x0,this[_0x5a98d8(0x1fc)]+=0x1,this[_0x5a98d8(0x1fc)]>=this[_0x5a98d8(0x2f7)]&&(this[_0x5a98d8(0x268)]()?this[_0x5a98d8(0x1fc)]=0x0:this[_0x5a98d8(0x1fc)]=this[_0x5a98d8(0x2f7)]-0x1),this[_0x5a98d8(0x265)]());},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x265)]=function(){const _0x1e9b84=_0x26d5fa,_0x15a2db=this[_0x1e9b84(0x207)]['bitmap'],_0x25b87b=_0x15a2db[_0x1e9b84(0x259)]/this[_0x1e9b84(0x29f)],_0x2ac9da=_0x15a2db[_0x1e9b84(0x23d)]/this[_0x1e9b84(0x30f)],_0x46c89c=this['_animationIndex']%this[_0x1e9b84(0x29f)]*_0x25b87b,_0x70fe66=Math[_0x1e9b84(0x2f4)](this['_animationIndex']/this[_0x1e9b84(0x29f)])*_0x2ac9da;this[_0x1e9b84(0x207)][_0x1e9b84(0x242)](_0x46c89c,_0x70fe66,_0x25b87b,_0x2ac9da);},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x268)]=function(){const _0x59a5f5=_0x26d5fa;return this['settings']()[_0x59a5f5(0x2f9)]??VisuMZ[_0x59a5f5(0x2f2)][_0x59a5f5(0x2c0)][_0x59a5f5(0x1e4)];},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x30d)]=function(){const _0x46e933=_0x26d5fa;return this[_0x46e933(0x1f9)]()[_0x46e933(0x347)]??VisuMZ[_0x46e933(0x2f2)][_0x46e933(0x2c0)][_0x46e933(0x2ba)];},Sprite_VisualCutin[_0x26d5fa(0x225)][_0x26d5fa(0x200)]=function(){const _0x3169b7=_0x26d5fa,_0x28ab97=this[_0x3169b7(0x1f9)]()[_0x3169b7(0x2fd)];if(_0x28ab97==='')this[_0x3169b7(0x207)][_0x3169b7(0x266)]=new Bitmap(0x1,0x1);else{const _0x3f117d=this[_0x3169b7(0x284)]();_0x3f117d[_0x3169b7(0x211)](this[_0x3169b7(0x357)][_0x3169b7(0x359)](this,_0x3f117d));}},Sprite_VisualCutin['prototype'][_0x26d5fa(0x378)]=function(){const _0x3fa379=_0x26d5fa,_0x21341c=this[_0x3fa379(0x1f9)]()[_0x3fa379(0x288)];if(_0x21341c==='')this[_0x3fa379(0x322)][_0x3fa379(0x266)]=new Bitmap(0x1,0x1);else{const _0x7f3da3=ImageManager['loadParallax'](_0x21341c);_0x7f3da3[_0x3fa379(0x211)](this[_0x3fa379(0x247)][_0x3fa379(0x359)](this,_0x7f3da3));}};function _0x4321(){const _0x38758b=['styleData','toprightcorner','row1stfourth','col4thfourth','top','getBattlePortraitFilename','outlineOffsetY','getVisualCutinEffectSpriteOrder','bottomrightquad','portraitExitY','max','parameters','portraitEnterY','col2ndfourth','6hDwSiW','>>>attention<<<','VisualCutinEffect','rightgemstone','_visualCutinContainer','changeVisualCutinEffectParallax','farleft','updateAnimatedPortrait','create_VisualCutinEffect_Bitmap_Minor','leftdiamond','_fadeTarget','_customVisualCutinPortraitFlipVert','centergemstone','_cached_VisualCutinEffect_Mask','getCustomVisualCutinPortraitFilename','create_VisualCutinEffect_Bitmap_Corner','flipVisualCutinVert','call','VisuMZ_4_AnimatedPictures','99uLiXbP','WaitForExit','lefthorzslash','hasCustomCutinMaskAndOutline','righthorzslash','toLowerCase','addVisualCutinEffect','calcWindowHeight','bottomleftcorner','strokeStyle','type','push','eightpack2','_foregroundMaskFilter','enterX','AnimatedPictures','_baseTexture','floor','innerOutlineColor','updateAnimatedPictureCount','_animationMaxCells','row2ndthird','animatedPortraitLooping','parallaxOpacity','visualCutinPortraitFilename','createExistingVisualCutinSprites','portraitFilename','rightdiamond','col2ndfifth','parallaxScrollY','leftmajor','_moveTargetY','exitDuration','createVisualCutins','ConvertParams','sixpack5','outlineFilename','_visualCutins','#cccccc','CutinEnd_VisualCutinEffectAll','parallaxScrollX','twelvepack10','animationWaitFrames','twelvepack4','_animationVertCells','create_VisualCutinEffect_Bitmap_Whole','45726CVYHwD','getVisualCutinStyleData','eightpack5','isAnyCutinExiting','_context','col3rdthird','toUpperCase','WaitForEntrance','toprightquad','note','Scene_Map_createSpriteset','portraitEnterEasingType','_bgSprite','140778FHnIpL','statusWindowHeight','faceName','_exiting','_parallaxSprite','col4thfifth','_loadingBitmaps','create_VisualCutinEffect_Bitmap_HorzSlash','portraitForcedScale','twelvepack6','create_VisualCutinEffect_Bitmap_Rows','row3rdfourth','create_VisualCutinEffect_Bitmap_Pack','createMaskContainers','VisuMZ_0_CoreEngine','580979cRqgxc','isAnimatedPortrait','sixpack1','initPosition','middleOutlineWeight','leftgemstone','isUsingSideviewUiLayout','cutinExit','enterY','createVisualCutinContainer','_cached_VisualCutinEffect_Outline','create_VisualCutinEffect_Bitmap_Quad','removeChild','fill_VisualCutinEffect_Bitmap','_spriteset','CutinChange_ParallaxSwap','col1stfourth','_visualCutinEffect','opacity','endVisualCutin','_type','loadPicture','battlerHue','row1stthird','CutinChange_PortraitSwap','eightpack8','animatedPortraitWaitFrames','CutinStart_VisualCutinEffect','length','_isAnimatedPicture','stringify','bottomleftquad','sixpack6','globalAlpha','svBattlerName','row3rdthird','2565030rwIOrF','updateWaitMode','twelvepack9','cutinEnter','portraitAnchorX','initVisualCutinEffect','applyPortraitBitmap','portraitIndex','bind','FUNC','potraitOpacity','updatePortraitMovement','A\x20Visual\x20Cutin\x20Effect\x20for\x20this\x20type\x20already\x20exists.\x0a','addChildAt','row2ndfifth','createAllSprites','_movePortraitEasingType','exit','faceWidth','portraitScaleToFit','whole','visualCutinPortraitType','36SVjXCb','ExtraSettings','rightvertslash','_backgroundMaskFilter','loadFace','blendMode','_animationCount','enterEasingType','_backgroundContainer','bgShow','ceil','createSpriteset','checkAllBitmapsLoaded','description','cached_VisualCutinEffect_Mask','white','rightminor','prepareNewParallax','Outline','948952fMQhWv','isPlaytest','children','twelvepack5','EnemyCutinPortraitName','_fadeDuration','VISUAL_CUTIN_EFFECT','create_VisualCutinEffect_Bitmap_Diamond','faceHeight','col3rdfourth','loadEnemy','Loop','OutlineThickness','round','middleOutlineColor','parallaxHue','constructor','lefthorzspan','create_VisualCutinEffect_Bitmap_Gemstone','topleftquad','destroy','col3rdfifth','styles','initMembers','beginPath','map','sixpack2','CutinEnd_VisualCutinEffectType','filter','centerdiamond','fillStyle','eightpack7','settings','textColor','SpriteMaskFilter','_animationIndex','some','innerOutlineWeight','fillRect','prepareNewPortrait','#000000','twelvepack1','battle','Scene_Battle_createSpriteset','twelvepack7','version','_portraitSprite','_outlineSprite','twelvepack12','parallaxFilenameJS','leftvertslash','name','getColor','_foregroundContainer','CutinWait_WaitForEntrance','origin','addLoadListener','portraitOffsetX','row3rdfifth','outerOutlineColor','portraitFlipHorz','lineTo','create_VisualCutinEffect_Bitmap_HorzSpan','ARRAYNUM','min','createParallaxSprite','match','twelvepack3','exitEasingType','drawOutlinePolygon','portraitExitX','portraitEnterX','createOutlineSprite','enemy','filters','showcase','prototype','portraitHue','typeJS','parallaxY','farright','bgColor','parallaxBlendMode','setWaitMode','_moveDuration','loadSvEnemy','hasSvBattler','isSideView','maskFilename','ARRAYFUNC','parallaxOffsetX','moveTo','exitY','Linear','_loadingState','Game_Interpreter_updateWaitMode','_customVisualCutinPortraitFilename','cutinOffsetY','getLastPluginCommandInterpreter','row4thfourth','height','black','portraitScaleMax','status','hasCustomVisualCutinPortrait','setFrame','updateCutinMovement','#%1','1510HJqIFR','righthorzspan','applyParallaxBitmap','_maskSprite','isSceneBattle','face','topleftcorner','cached_VisualCutinEffect_Outline','setHue','addChild','order','eightpack1','scale','loadParallax','twelvepack11','EnemyCutinFlipHorz','_customVisualCutinPortraitFlipHorz','createPortraitSprite','create_VisualCutinEffect_Bitmap','twelvepack8','width','641453kbSiQM','outlineShow','centerhorzspan','svEnemy','startEntrance','_parallaxColorFilter','outerOutlineWeight','registerCommand','startVisualCutin','_entering','_moveEasingType','updateAnimatedPictureFrame','bitmap','portraitOpacity','isAnimationLooping','_scene','col5thfifth','EnemyCutinFlipVert','outlineOffsetX','rightmajor','initialize','parse','EVAL','_portraitTargetY','Game_Screen_initialize','row1stfifth','row5thfifth','updateOpacity','visualCutinPortraitHue','twelvepack2','anchor','sixpack3','ApplyEasing','cutinOffsetX','changeVisualCutinPortrait','_customModified','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','bottomrightcorner','RegExp','portraitExitEasingType','log','_portraitTargetX','loadPortraitBitmap','visualCutinPortraitIndex','sixpack4','exitX','parallaxFilename','_moveWholeDuration','row2ndfourth','lineWidth','create_VisualCutinEffect_Bitmap_Cols','remove','portraitAnchorY','enterDuration','portraitFlipVert','svActorVertCells','col2ndthird','create_VisualCutinEffect_Bitmap_VertSlash','removeVisualCutinEffect','fill','getVisualCutinEffectSettings','CutinStart_VisualCutinEffectJS','loadSvActor','trim','4224445AYeIDd','flipVisualCutinHorz','_fadeRemove','portraitFilenameJS','isAnyCutinEntering','_animationHorzCells','changeVisualCutinEffectPortrait','applyEasing','includes','col1stfifth','col1stthird','parallaxOffsetY','eightpack4','CreateCutinSettings','row4thfifth','loading','centerminor','VisuMZ_3_SideviewBattleUI','svActor','indexOf','create','_movePortraitDuration','portraitOffsetY','clearAllVisualCutins','eightpack3','createMaskSprites','startExit','update','format','leftminor','_moveTargetX','_waitMode','WaitFrames','create_VisualCutinEffect_Bitmap_Showcase','_movePortraitWholeDuration','STR','eightpack6','VisuMZ_1_BattleCore','Settings','portraitType'];_0x4321=function(){return _0x38758b;};return _0x4321();}