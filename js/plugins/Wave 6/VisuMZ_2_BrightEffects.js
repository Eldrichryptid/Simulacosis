//=============================================================================
// VisuStella MZ - Bright Effects
// VisuMZ_2_BrightEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_BrightEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.BrightEffects = VisuMZ.BrightEffects || {};
VisuMZ.BrightEffects.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.10] [BrightEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Bright_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * This RPG Maker MZ plugin allows you to add various bright effects to your
 * game's maps and battle system. These effects can make the game appear more
 * vivid, light, and gives you control over the color settings of a particular
 * map to make a more distinct feeling, too. The bright effects can be changed
 * midway through events in both maps and battles, too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * A Bloom filter effect that can help soften the feel of a map by giving
 *   objects on the screen a slight hazy glow.
 * * Godrays can be used to show animated sunlight coming down from the sky
 *   above.
 * * The Color Adjustment filter allows you to alter the brightness, contrast,
 *   and saturation levels of your maps and battles.
 * * The Tilt Shift filter creates a blur at the top and bottom sections of the
 *   screen to give a sense of proximity blurring.
 * * Plugin Commands that allow you to adjust these settings on the go.
 * * Notetags for maps to alter the Bloom, Godray, and Color Adjustments
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
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Action Sequence Impact product page. Install it as a
 * Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * New Effects
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Bloom
 * 
 * This filter puts a faint (or large) glow around lighter-colored objects on
 * the map to give them a softer, hazy, brighter feeling.
 * 
 * Properties:
 *
 * Scale: To adjust the strength of the bloom. Higher values is more
 * intense brightness.
 *
 * Brightness: The brightness, lower value is more subtle brightness, higher
 * value is blown-out.
 *
 * Threshold: Defines how bright a color needs to be to affect bloom.
 *
 * ---
 * 
 * Blur
 * 
 * The blur filter makes the screen appear less focused and more fuzzy. Details
 * become harder to distinguish and the like.
 * 
 * Properties:
 * 
 * Blur: Adjusts the blur strength. For best results, use numbers between 0 and
 * 5 where 0 is no blur and higher numbers mean higher blur strength. There are
 * no default Plugin Parameter settings for the Blur strength as it will
 * automatically default to 0 for best results.
 * 
 * ---
 *
 * Godray
 * 
 * The Godray filter puts down rays of light coming from the sky at an angle.
 * This is often used to represent sunlight peaking from above the clouds.
 * 
 * Properties:
 *
 * Visible: If on, the godrays will be visible by default. If off, they won't.
 *
 * Speed: The speed at which the light flickers. Lower for slower rate.
 * Higher for faster speeds.
 *
 * Gain: General intensity of the effect.
 *
 * Lacunarity: The density of the fractal noise.
 *
 * Angle: The angle/light-source direction of the rays.
 *
 * ---
 *
 * Color Adjustment
 * 
 * The Color Adjustment filter allows you to control the colors on the screen
 * to be more/less bright, contrast more/less, and more/less saturated.
 * 
 * Properties:
 *
 * Brightness: Adjusts the overall brightness of the screen. Use lower numbers
 * to make it darker and higher numbers to increase the brightness.
 *
 * Contrast: Increases the separation between dark and bright. Darker colors
 * become darker. Lighter colors become lighter. Increase this number to make
 * the effect more intense or decrease it to lessen it.
 *
 * Saturate: Adjusts the intensity of color on the screen. User higher numbers
 * to make colors more intense and lower numbers to make it less.
 *
 * ---
 * 
 * Tilt Shift
 * 
 * The Tilt Shift filter creates a blur at the upper and lower edges of the
 * screen with varying degrees of pixelation blur and gradient blur.
 * 
 * Properties:
 * 
 * Pixel Blur: What is the default pixel blur amount for tilt shift? Smaller
 * values mean less blur. Higher values mean more blur.
 * 
 * Gradient Blur: What is the default gradient blur amount for tilt shift?
 * Smaller values mean less gradient. Higher values mean more gradient.
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
 * VisuMZ_1_OptionsCore
 * 
 * As of the VisuStella MZ Options Core v1.10 update, both the Bright Effects
 * and Horror Effects plugins will be affected by the "Special Effects" option
 * found under the Options Core's General Settings. If the "Special Effects"
 * option is set to OFF, then the filter effects applied by those plugins will
 * also be disabled. They will be reenabled when the option is set back to ON.
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
 * === Bloom-Related Notetags ===
 * 
 * ---
 *
 * <Bloom Scale: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom scale to x for map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less bloom
 *   - Higher - More bloom
 *
 * ---
 *
 * <Bloom Brightness: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom brightness to x for map/battle
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Bloom Threshold: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes the bloom threshold to x for map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less picky
 *   - Higher - More picky
 *
 * ---
 *
 * <Bloom Horz Scale: x to y>
 * <Bloom Vert Scale: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting scale when traveling left to right on the map
 *   (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less bloom
 *   - Higher - More bloom
 *
 * ---
 *
 * <Bloom Horz Brightness: x to y>
 * <Bloom Vert Brightness: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting brightness when traveling left to right on the
 *   map (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Bloom Horz Threshold: x to y>
 * <Bloom Vert Threshold: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Sets an adjusting threshold when traveling left to right on the
 *   map (Horz) or up to down on the map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less picky
 *   - Higher - More picky
 *
 * ---
 * 
 * === Blur-Related Notetags ===
 * 
 * ---
 * 
 * <Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Changes the blur strength used for the screen to 'x'.
 * - Replace 'x' with a number representing the blur strength. For best
 *   results, use numbers between 0 and 5 where 0 is no blur and higher numbers
 *   mean higher blur strength.
 * 
 * ---
 * 
 * === Godray-Related Notetags ===
 * 
 * ---
 *
 * <Godray>
 * <No Godray>
 *
 * - Used for: Map Notetags and Troop Names
 * - Changes if there will be a godray on the map/battle regardless of the
 *   default settings in the plugin parameters.
 *
 * ---
 *
 * <Godray Speed: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the flickering speed of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Slower
 *   - Higher - Faster
 *
 * ---
 *
 * <Godray Gain: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the gain/intensity of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Lighter
 *   - Higher - Intense
 *
 * ---
 *
 * <Godray Lacunarity: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the lacunarity/density of the rays.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less dense
 *   - Higher - More dense
 *
 * ---
 *
 * <Godray Angle: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Sets the angle of the rays.
 * - Replace 'x' with a number to represent the value. Use a negative or
 *   positive integer value.
 *   - Negative - Coming from the left
 *   - Positive - Coming from the right
 *
 * ---
 *
 * <Godray Horz Speed: x to y>
 * <Godray Vert Speed: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray speed going left to right on a map (Horz) or up
 *   to down on a map (Vert). 
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Slower
 *   - Higher - Faster
 *
 * ---
 *
 * <Godray Horz Gain: x to y>
 * <Godray Vert Gain: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray gain going left to right on a map (Horz) or up to
 *   down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Lighter
 *   - Higher - Intense
 *
 * ---
 *
 * <Godray Horz Lacunarity: x to y>
 * <Godray Vert Lacunarity: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray lacunarity going left to right on a map (Horz) or
 *   up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less dense
 *   - Higher - More dense
 *
 * ---
 *
 * <Godray Horz Angle: x to y>
 * <Godray Vert Angle: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts godray angle going left to right on a map (Horz) or up
 *   to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use a negative or
 *   positive integer values.
 *   - Negative - Coming from the left
 *   - Positive - Coming from the right
 *
 * ---
 * 
 * === Color Adjust-Related Notetags ===
 * 
 * ---
 *
 * <Color Adjust Brightness: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Alters the screen brightness for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Contrast: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the screen contrast for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Less contrast
 *   - Higher - More contrast
 *
 * ---
 *
 * <Color Adjust Saturate: x>
 *
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the screen saturation for the map/battle.
 * - Replace 'x' with a number to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Horz Brightness: x to y>
 * <Color Adjust Vert Brightness: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Alters the screen brightness when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Darker
 *   - Higher - Brighter
 *
 * ---
 *
 * <Color Adjust Horz Contrast: x to y>
 * <Color Adjust Vert Contrast: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts the screen contrast when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less contrast
 *   - Higher - More contrast
 *
 * ---
 *
 * <Color Adjust Horz Saturate: x to y>
 * <Color Adjust Vert Saturate: x to y>
 *
 * - Used for: Map Notetags
 * - Map only. Adjusts the screen saturation when moving left to right on a map
 *   (Horz) or up to down on a map (Vert).
 * - Replace 'x' and 'y' with numbers to represent the value. Use decimals.
 *   - Lower - Less intensity
 *   - Higher - More intensity
 *
 * ---
 * 
 * === Tilt Shift Notetags ===
 * 
 * ---
 * 
 * <Tilt Shift Pixel Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the tilt shift filter's pixel blur amount for the map/battle.
 * - Replace 'x' with a number to represent the blur intensity.
 *   - Lower = less blur
 *   - Higher = more blur
 * 
 * ---
 * 
 * <Tilt Shift Gradient Blur: x>
 * 
 * - Used for: Map Notetags and Troop Names
 * - Adjusts the tilt shift filter's gradient blur amount for the map/battle.
 * - Replace 'x' with a number to represent the gradient blur distance.
 *   - Lower = less gradient
 *   - Higher = more gradient
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
 * === Bloom Plugin Commands ===
 * 
 * ---
 *
 * Bloom: Change Settings
 * - Change the Bloom filter settings for the screen.
 *
 *   Bloom Scale:
 *   - Change bloom scale for the screen.
 *
 *   Bloom Brightness:
 *   - Change bloom brightness for the screen.
 *
 *   Bloom Threshold:
 *   - Change bloom threshold for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *
 * ---
 *
 * Bloom: Reset
 * - Reset the Bloom filter settings for the settings found in the Plugin
 *   Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *
 * ---
 * 
 * === Blur Plugin Commands ===
 * 
 * ---
 * 
 * Blur: Change Settings
 * - Change the Blur filter settings for the screen.
 * 
 *   Blur Strength:
 *   - Change blur strength for the screen.
 *   - For best results, use numbers between 0 and 5  where 0 is no blur and
 *     higher numbers mean higher blur strength.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * Blur: Reset
 * - Clears the Blur filter.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the reset to occur.
 * 
 * ---
 * 
 * === Godray Plugin Commands ===
 * 
 * ---
 *
 * Godray: Change Settings
 * - Change the Godray filter settings for the screen.
 *
 *   Visible?:
 *   - Show godrays on the screen?
 *   - Visibility changes are immediate.
 *
 *   Godray Speed:
 *   - Change godray speed for the screen.
 *
 *   Godray Gain:
 *   - Change godray gain for the screen.
 *
 *   Godray Lacunarity:
 *   - Change godray lacunarity for the screen.
 *
 *   Godray Angle:
 *   - Change godray angle for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *   - Visibility changes are immediate.
 *
 * ---
 *
 * Godray: Reset
 * - Reset the Godray filter settings for the settings found in the Plugin
 *   Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *   - Visibility changes are immediate.
 *
 * ---
 * 
 * === Color Adjust Plugin Commands ===
 * 
 * ---
 *
 * Color Adjust: Change Settings
 * - Change the Color Adjustment filter settings for the screen.
 *
 *   Adjust Brightness:
 *   - Change color adjust brightness for the screen.
 *
 *   Adjust Contrast:
 *   - Change color adjust contrast for the screen.
 *
 *   Adjust Saturation:
 *   - Change color adjust saturation for the screen.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 *
 * ---
 *
 * Color Adjust: Reset
 * - Reset the Color Adjustment filter settings for the settings found in the
 *   Plugin Parameters or map notetags.
 *
 *   Shift Duration:
 *   - The amount of time it takes for the reset to occur.
 *
 * ---
 * 
 * === Tilt Shift Plugin Commands ===
 * 
 * ---
 * 
 * Tilt Shift: Change Settings
 * - Change the Tilt Shift filter settings for the screen.
 * 
 *   Pixel Blur:
 *   - What is the default pixel blur amount for tilt shift?
 *   - Smaller = less blur. Higher = more blur.
 * 
 *   Gradient Blur:
 *   - What is the default gradient blur amount for tilt shift?
 *   - Smaller = less gradient. Higher = more gradient.
 * 
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * Tilt Shift: Reset
 * - Reset the Tilt Shift filter settings for the settings found in the
 *   Plugin Parameters or map notetags.
 * 
 *   Shift Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 * 
 * This section is for the general plugin parameter settings.
 * 
 * ---
 * 
 * General
 * 
 *   Apply Base-Only?
 *   - Base-Only excludes pictures, timers, and weather.
 *   - Whole includes the above.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Bloom Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Bloom Settings
 * 
 *   Bloom Scale:
 *   - Default bloom scale for the screen unless changed through tags.
 * 
 *   Bloom Brightness:
 *   - Default bloom brightness for the screen unless changed through tags.
 * 
 *   Bloom Threshold:
 *   - Default bloom threshold for the screen unless changed through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Godray Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Godray Settings
 * 
 *   Default Visible?:
 *   - Show godrays on all screens by default unless changed through tags?
 * 
 *   Godray Speed:
 *   - Default godray speed for all screens unless changed through tags.
 * 
 *   Godray Gain:
 *   - Default godray gain for all screens unless changed through tags.
 * 
 *   Godray Lacunarity:
 *   - Default godray lacunarity for all screens unless changed through tags.
 * 
 *   Godray Angle:
 *   - Default godray angle for all screens unless changed through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Adjust Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Color Adjust Settings
 * 
 *   Adjust Brightness:
 *   - Default color adjust brightness for all screens unless changed
 *     through tags.
 * 
 *   Adjust Contrast:
 *   - Default color adjust contrast for all screens unless changed
 *     through tags.
 * 
 *   Adjust Saturation:
 *   - Default color adjust saturation for all screens unless changed
 *     through tags.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Tilt Shift Settings
 * ============================================================================
 *
 * There are two versions of these plugin parameters. One of them are for the
 * Map Defaults and the other is for the Battle Defaults. These settings are
 * applied to the map and battle scenes respectively and will serve as the
 * stock setting when no map notetags, troop name tags, or Plugin Commands have
 * been used to alter them.
 *
 * ---
 *
 * Tilt Shift Settings
 * 
 *   Pixel Blur:
 *   - What is the default pixel blur amount for tilt shift?
 *   - Smaller = less blur. Higher = more blur.
 * 
 *   Gradient Blur:
 *   - What is the default gradient blur amount for tilt shift?
 *   - Smaller = less gradient. Higher = more gradient.
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
 * Version 1.10: January 16, 2025
 * * Bug Fixes!
 * ** Fixed bug with Tilt Shift effect not applying correctly when exiting a
 *    menu upon reentering the map scene. Fix made by Olivia.
 * 
 * Version 1.09: October 17, 2024
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: June 13, 2024
 * * Bug Fixes!
 * ** Added a failsafe to prevent crashes when no focus target is found due to
 *    either changing map or a sprite is deleted. Fix made by Olivia.
 * 
 * Version 1.07: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Olivia and sponsored by Archeia:
 * *** Blur
 * **** The blur filter makes the screen appear less focused and more fuzzy.
 *      Details become harder to distinguish and the like.
 * **** Notetags and Plugin Commands added.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: October 13, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Olivia and sponsored by Archeia:
 * *** Tilt Shift
 * **** The Tilt Shift filter creates a blur at the upper and lower edges of
 *      the screen with varying degrees of pixelation blur and gradient blur.
 * **** Plugin Parameters, Notetags, and Plugin Commands added.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.05: April 28, 2022
 * * Bug Fixes!
 * ** No longer crashes with event test play. Fix made by Olivia.
 * 
 * Version 1.04: March 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features:
 * ** New Plugin Parameters added: "Apply Base-Only?"
 * *** Base-Only excludes pictures, timers, and weather.
 * *** Whole includes the above.
 * 
 * Version 1.03: April 2, 2021
 * * Bug Fixes!
 * ** Changing scenes while a filter change is in transition will automatically
 *    load up the changes made to the filter to prevent desynchronization.
 *    Fix made by Olivia.
 * 
 * Version 1.02: March 12, 2021
 * * Compatibility Update!
 * ** Added compatibility with the VisuStella MZ Options Core v1.10 update.
 * *** When the "Special Effects" option is set to OFF, the filters for this
 *     plugin will be shut off. They will be returned to normal when set to ON.
 * * Documentation Update!
 * ** Added the Options Core section to the "Extra Features" list.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Bright effects from battle should no longer carry back over into the
 *    map scene. Fix made by Yanfly.
 *
 * Version 1.00: January 18, 2021
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
 * @command BloomChange
 * @text Bloom: Change Settings
 * @desc Change the Bloom filter settings for the screen.
 *
 * @arg Scale:num
 * @text Bloom Scale
 * @desc Change bloom scale for the screen.
 * @default 0.5
 *
 * @arg Brightness:num
 * @text Bloom Brightness
 * @desc Change bloom brightness for the screen.
 * @default 1.0
 *
 * @arg Threshold:num
 * @text Bloom Threshold
 * @desc Change bloom threshold for the screen.
 * @default 0.5
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BloomReset
 * @text Bloom: Reset
 * @desc Reset the Bloom filter settings for the settings found in
 * the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Blur
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BlurChange
 * @text Blur: Change Settings
 * @desc Change the Blur filter settings for the screen.
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the screen.
 * For best results, use numbers between 0 and 5.
 * @default 2.0
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BlurReset
 * @text Blur: Reset
 * @desc Clears the Blur filter.
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Godray
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GodrayChange
 * @text Godray: Change Settings
 * @desc Change the Godray filter settings for the screen.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show godrays on the screen?
 * Visibility changes are immediate.
 * @default true
 *
 * @arg Speed:num
 * @text Godray Speed
 * @desc Change godray speed for the screen.
 * @default 0.01
 *
 * @arg Gain:num
 * @text Godray Gain
 * @desc Change godray gain for the screen.
 * @default 0.6
 *
 * @arg Lacunarity:num
 * @text Godray Lacunarity
 * @desc Change godray lacunarity for the screen.
 * @default 2.0
 *
 * @arg Angle:num
 * @text Godray Angle
 * @desc Change godray angle for the screen.
 * @default -30
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * Visibility changes are immediate.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GodrayReset
 * @text Godray: Reset
 * @desc Reset the Godray filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * Visibility changes are immediate.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ColorAdjust
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ColorAdjustChange
 * @text Color Adjust: Change Settings
 * @desc Change the Color Adjustment filter settings for the screen.
 *
 * @arg Brightness:num
 * @text Adjust Brightness
 * @desc Change color adjust brightness for the screen.
 * @default 1.0
 *
 * @arg Contrast:num
 * @text Adjust Contrast
 * @desc Change color adjust contrast for the screen.
 * @default 0.0
 *
 * @arg Saturate:num
 * @text Adjust Saturation
 * @desc Change color adjust saturation for the screen.
 * @default 0.0
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ColorAdjustReset
 * @text Color Adjust: Reset
 * @desc Reset the Color Adjustment filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TiltShift
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TiltShiftChange
 * @text Tilt Shift: Change Settings
 * @desc Change the Tilt Shift filter settings for the screen.
 *
 * @arg Blur:num
 * @text Pixel Blur
 * @desc What is the default pixel blur amount for tilt shift?
 * Smaller = less blur. Higher = more blur.
 * @default 24
 *
 * @arg GradientBlur:num
 * @text Gradient Blur
 * @desc What is the default gradient blur amount for tilt shift?
 * Smaller = less gradient. Higher = more gradient.
 * @default 1000
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TiltShiftReset
 * @text Tilt Shift: Reset
 * @desc Reset the Tilt Shift filter settings for the settings
 * found in the Plugin Parameters or map notetags.
 *
 * @arg Duration:num
 * @text Shift Duration
 * @type number
 * @desc The amount of time it takes for the reset to occur.
 * @default 60
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
 * @param BrightEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Map
 * @text Map Defaults
 *
 * @param MapBaseFilter:eval
 * @text Apply Base-Only?
 * @parent Map
 * @type boolean
 * @on Base-Only
 * @off Apply Whole
 * @desc Base-Only excludes pictures, timers, and weather.
 * Whole includes the above.
 * @default true
 *
 * @param MapBloom:struct
 * @text Bloom Settings
 * @parent Map
 * @type struct<Bloom>
 * @desc Default bloom settings for all maps.
 * @default {"Scale:num":"0.5","Brightness:num":"1.0","Threshold:num":"0.5"}
 *
 * @param MapGodray:struct
 * @text Godray Settings
 * @parent Map
 * @type struct<Godray>
 * @desc Default Godray settings for all maps.
 * @default {"Visible:eval":"false","Speed:num":"0.01","Gain:num":"0.6","Lacunarity:num":"2.0","Angle:num":"-30"}
 *
 * @param MapColorAdjust:struct
 * @text Color Adjust Settings
 * @parent Map
 * @type struct<ColorAdjust>
 * @desc Default color adjustment settings for all maps.
 * @default {"Brightness:num":"1.0","Contrast:num":"0.0","Saturate:num":"0.0"}
 *
 * @param MapTiltShift:struct
 * @text Tilt Shift Settings
 * @parent Map
 * @type struct<TiltShift>
 * @desc Default tilt shift adjustment settings for all maps.
 * @default {"Blur:num":"24","GradientBlur:num":"1000"}
 * 
 * @param Battle
 * @text Battle Defaults
 *
 * @param BattleBaseFilter:eval
 * @text Apply Base-Only?
 * @parent Battle
 * @type boolean
 * @on Base-Only
 * @off Apply Whole
 * @desc Base-Only excludes pictures, timers, and weather.
 * Whole includes the above.
 * @default true
 *
 * @param BattleBloom:struct
 * @text Bloom Settings
 * @parent Battle
 * @type struct<Bloom>
 * @desc Default bloom settings for all battles.
 * @default {"Scale:num":"0.5","Brightness:num":"1.0","Threshold:num":"0.5"}
 *
 * @param BattleGodray:struct
 * @text Godray Settings
 * @parent Battle
 * @type struct<Godray>
 * @desc Default Godray settings for all battles.
 * @default {"Visible:eval":"false","Speed:num":"0.01","Gain:num":"0.6","Lacunarity:num":"2.0","Angle:num":"-30"}
 *
 * @param BattleColorAdjust:struct
 * @text Color Adjust Settings
 * @parent Battle
 * @type struct<ColorAdjust>
 * @desc Default color adjustment settings for all battles.
 * @default {"Brightness:num":"1.0","Contrast:num":"0.0","Saturate:num":"0.0"}
 *
 * @param BattleTiltShift:struct
 * @text Tilt Shift Settings
 * @parent Battle
 * @type struct<TiltShift>
 * @desc Default tilt shift adjustment settings for all battles.
 * @default {"Blur:num":"0","GradientBlur:num":"1600"}
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
 * Bloom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Bloom:
 *
 * @param Scale:num
 * @text Bloom Scale
 * @desc Default bloom scale for the screen unless changed through tags.
 * @default 0.5
 *
 * @param Brightness:num
 * @text Bloom Brightness
 * @desc Default bloom brightness for the screen unless changed through tags.
 * @default 1.0
 *
 * @param Threshold:num
 * @text Bloom Threshold
 * @desc Default bloom threshold for the screen unless changed through tags.
 * @default 0.5
 *
 */
/* ----------------------------------------------------------------------------
 * Godray Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Godray:
 *
 * @param Visible:eval
 * @text Default Visible?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show godrays on all screens by default unless changed through tags?
 * @default false
 *
 * @param Speed:num
 * @text Godray Speed
 * @desc Default godray speed for all screens unless changed through tags.
 * @default 0.01
 *
 * @param Gain:num
 * @text Godray Gain
 * @desc Default godray gain for all screens unless changed through tags.
 * @default 0.6
 *
 * @param Lacunarity:num
 * @text Godray Lacunarity
 * @desc Default godray lacunarity for all screens unless changed through tags.
 * @default 2.0
 *
 * @param Angle:num
 * @text Godray Angle
 * @desc Default godray angle for all screens unless changed through tags.
 * @default -30
 *
 */
/* ----------------------------------------------------------------------------
 * Color Adjust Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ColorAdjust:
 *
 * @param Brightness:num
 * @text Adjust Brightness
 * @desc Default color adjust brightness for all screens unless changed through tags.
 * @default 1.0
 *
 * @param Contrast:num
 * @text Adjust Contrast
 * @desc Default color adjust contrast for all screens unless changed through tags.
 * @default 0.0
 *
 * @param Saturate:num
 * @text Adjust Saturation
 * @desc Default color adjust saturation for all screens unless changed through tags.
 * @default 0.0
 *
 */
/* ----------------------------------------------------------------------------
 * Tilt Shift Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TiltShift:
 *
 * @param Blur:num
 * @text Pixel Blur
 * @desc What is the default pixel blur amount for tilt shift?
 * Smaller = less blur. Higher = more blur.
 * @default 24
 *
 * @param GradientBlur:num
 * @text Gradient Blur
 * @desc What is the default gradient blur amount for tilt shift?
 * Smaller = less gradient. Higher = more gradient.
 * @default 1000
 *
 */
//=============================================================================

var _0x5883f0=_0x2fa4;(function(_0x517934,_0x27ba1f){var _0x2af41c=_0x2fa4,_0x422d80=_0x517934();while(!![]){try{var _0x4c75b3=-parseInt(_0x2af41c(0x182))/0x1+parseInt(_0x2af41c(0x1fa))/0x2+-parseInt(_0x2af41c(0x186))/0x3+parseInt(_0x2af41c(0x200))/0x4*(-parseInt(_0x2af41c(0x203))/0x5)+-parseInt(_0x2af41c(0x18a))/0x6+parseInt(_0x2af41c(0x1e8))/0x7*(parseInt(_0x2af41c(0x1a1))/0x8)+parseInt(_0x2af41c(0x1b3))/0x9;if(_0x4c75b3===_0x27ba1f)break;else _0x422d80['push'](_0x422d80['shift']());}catch(_0x48e1be){_0x422d80['push'](_0x422d80['shift']());}}}(_0x20e5,0x5ffcf));function _0x2fa4(_0x50b184,_0x36166e){var _0x20e598=_0x20e5();return _0x2fa4=function(_0x2fa4d0,_0x17cdda){_0x2fa4d0=_0x2fa4d0-0x14a;var _0x53d8a9=_0x20e598[_0x2fa4d0];return _0x53d8a9;},_0x2fa4(_0x50b184,_0x36166e);}function _0x20e5(){var _0x5685b1=['createBrightEffectsAdvBloomFilter','updateBrightEffectsTiltShiftFilter','currentPixelBlur','BlurReset','Spriteset_Base_update','format','BattleTiltShift','prototype','_BrightEffectsTiltShiftSettingsBattle','createBrightEffectsGodrayFilter','specialEffects','MapBloom','GodrayChange','_brightEffectsColorAdjustVertContrast','271032Ufdsey','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Brightness','gain','createBrightEffectsColorAdjustFilter','setupBrightEffectsFilters','_BrightEffectsAdvBloomFilter','exit','ARRAYNUM','setBrightEffectsTiltShiftSettings','setupBrightEffectsTiltShiftFilter','createBrightEffectsBlurFilter','VisuMZ_3_MapCameraZoom','parameters','_brightEffectsBloomHorzThreshold','getMapEnhanceScreenY','_BrightEffectsBlurFilter','ARRAYSTRUCT','983601epWOfd','lacunarity','Spriteset_Base_createOverallFilters','version','_BrightEffectsGodraySettingsBattle','_brightEffectsBloomVertThreshold','createOverallFilters','getBrightEffectsAdvBloomSettings','setBrightEffectsGodraySettings','setupBrightEffectsColorAdjustFilter','_brightEffectsGodrayHorzLacunarity','ColorAdjustChange','_BrightEffectsColorAdjustFilter','BloomReset','BrightEffects','NUM','currentGradientBlur','MapTiltShift','BattleBloom','_brightEffectsBloomVertScale','currentContrast','Game_CharacterBase_locate','updateBrightEffectsColorAdjustFilter','return\x200','JSON','toUpperCase','onDatabaseLoaded','height','getTiltShiftFilter','setMapEnhanceTiltShiftFilterY','_realY','Blur','bloomScale','setBrightEffectsColorAdjustSettings','status','_scene','BattleColorAdjust','constructor','angle','MapGodray','BRIGHT_EFFECTS_BASE_ONLY','blur','getBrightEffectsBlurSettings','_BrightEffectsTiltShiftFilter','Scale','time','note','currentBlur','description','_BrightEffectsBlurSettingsMap','width','_BrightEffectsGodrayFilter','Speed','154oMVYzv','push','map','currentBrightness','contrast','brightEffectsBaseOnly','GradientBlur','shiftY','gradientBlur','getBrightEffectsColorAdjustSettings','updateMapBrightEffectsAdvBloom','Angle','Contrast','Scene_Battle_start','Scene_Boot_onDatabaseLoaded','getBrightEffectsGodraySettings','GodrayReset','update','1079774gaQKFO','_brightEffectsGodrayHorzAngle','mapCameraFocusTarget','ColorAdjustReset','_brightEffectsColorAdjustVertSaturate','_brightEffectsGodrayVertGain','16ZPYmTD','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Game_Player_update','234915iNulTx','match','updateMapBrightEffectsGodray','createBrightEffectsTiltShiftFilter','Settings','STR','_BrightEffectsGodraySettingsMap','updateBrightEffectsFilters','call','setupBrightEffectsGodrayFilter','visible','isSceneMap','max','duration','GodrayFilter','name','registerCommand','_brightEffectsGodrayVertAngle','STRUCT','BattleGodray','EVAL','filters','MapColorAdjust','TiltShiftFilter','screenY','TILT_SHIFT_BATTLE_FILTER','_BrightEffectsColorAdjustSettingsBattle','speed','currentSaturate','_brightEffectsGodrayHorzGain','_BrightEffectsColorAdjustSettingsMap','_brightEffectsBloomVertBrightness','tileHeight','updateMapBrightEffectsColorAdjust','troop','updateMapBrightEffects','start','trim','getBrightEffectsTiltShiftSettings','zoomScale','_baseSprite','createBrightEffectsFilters','_brightEffectsGodrayHorzSpeed','Threshold','saturate','ConvertParams','Lacunarity','_realX','_brightEffectsColorAdjustVertBrightness','updateBrightEffectsGodrayFilter','tileFocus','min','_brightEffectsColorAdjustHorzContrast','_brightEffectsBloomHorzBrightness','_brightEffectsColorAdjustHorzBrightness','brightness','Saturate','Game_Map_setup','ColorMatrixFilter','MapBaseFilter','isSceneBattle','FUNC','updateBrightEffectsTiltShiftFilterProperties','TILT_SHIFT_MAP_FILTER','pixelBlur','setBrightEffectsAdvBloomSettings','_BrightEffectsTiltShiftSettingsMap','_brightEffectsColorAdjustHorzSaturate','filter','setBrightEffectsBlurSettings','updateBrightEffectsBlurFilter','enabled','parse','_brightEffectsGodrayVertLacunarity','AdvancedBloomFilter','BlurChange','Gain','40932ARxrSA','end','_brightEffectsGodrayVertSpeed','Visible','1501761jlRaGT','findTargetSprite','_BrightEffectsBlurSettingsBattle','Duration','1631376IHIGuQ','_BrightEffectsAdvBloomSettingsMap','threshold','locate','includes','_BrightEffectsAdvBloomSettingsBattle','setupBrightEffectsAdvBloomFilter','setupBrightEffectsBlurFilter','_brightEffectsBloomHorzScale'];_0x20e5=function(){return _0x5685b1;};return _0x20e5();}var label=_0x5883f0(0x1c1),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x5883f0(0x179)](function(_0x528ad7){var _0x27849e=_0x5883f0;return _0x528ad7[_0x27849e(0x1d5)]&&_0x528ad7[_0x27849e(0x1e3)][_0x27849e(0x18e)]('['+label+']');})[0x0];VisuMZ[label][_0x5883f0(0x207)]=VisuMZ[label][_0x5883f0(0x207)]||{},VisuMZ[_0x5883f0(0x162)]=function(_0x23bb4a,_0x1b8c72){var _0x3d39da=_0x5883f0;for(const _0x48addc in _0x1b8c72){if(_0x48addc['match'](/(.*):(.*)/i)){const _0x428956=String(RegExp['$1']),_0x2000c8=String(RegExp['$2'])[_0x3d39da(0x1cc)]()[_0x3d39da(0x15a)]();let _0x5dc144,_0x370700,_0x84f851;switch(_0x2000c8){case _0x3d39da(0x1c2):_0x5dc144=_0x1b8c72[_0x48addc]!==''?Number(_0x1b8c72[_0x48addc]):0x0;break;case _0x3d39da(0x1a9):_0x370700=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):[],_0x5dc144=_0x370700[_0x3d39da(0x1ea)](_0x33c5f4=>Number(_0x33c5f4));break;case _0x3d39da(0x217):_0x5dc144=_0x1b8c72[_0x48addc]!==''?eval(_0x1b8c72[_0x48addc]):null;break;case'ARRAYEVAL':_0x370700=_0x1b8c72[_0x48addc]!==''?JSON['parse'](_0x1b8c72[_0x48addc]):[],_0x5dc144=_0x370700[_0x3d39da(0x1ea)](_0x55f7f4=>eval(_0x55f7f4));break;case _0x3d39da(0x1cb):_0x5dc144=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):'';break;case'ARRAYJSON':_0x370700=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):[],_0x5dc144=_0x370700['map'](_0x200fef=>JSON[_0x3d39da(0x17d)](_0x200fef));break;case _0x3d39da(0x172):_0x5dc144=_0x1b8c72[_0x48addc]!==''?new Function(JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc])):new Function(_0x3d39da(0x1ca));break;case'ARRAYFUNC':_0x370700=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):[],_0x5dc144=_0x370700[_0x3d39da(0x1ea)](_0x43e753=>new Function(JSON[_0x3d39da(0x17d)](_0x43e753)));break;case _0x3d39da(0x208):_0x5dc144=_0x1b8c72[_0x48addc]!==''?String(_0x1b8c72[_0x48addc]):'';break;case'ARRAYSTR':_0x370700=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):[],_0x5dc144=_0x370700[_0x3d39da(0x1ea)](_0x250dbc=>String(_0x250dbc));break;case _0x3d39da(0x215):_0x84f851=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):{},_0x5dc144=VisuMZ[_0x3d39da(0x162)]({},_0x84f851);break;case _0x3d39da(0x1b2):_0x370700=_0x1b8c72[_0x48addc]!==''?JSON[_0x3d39da(0x17d)](_0x1b8c72[_0x48addc]):[],_0x5dc144=_0x370700[_0x3d39da(0x1ea)](_0x356319=>VisuMZ[_0x3d39da(0x162)]({},JSON[_0x3d39da(0x17d)](_0x356319)));break;default:continue;}_0x23bb4a[_0x428956]=_0x5dc144;}}return _0x23bb4a;},(_0x1e8232=>{var _0xa811df=_0x5883f0;const _0xbaefb0=_0x1e8232[_0xa811df(0x212)];for(const _0x943982 of dependencies){if(!Imported[_0x943982]){alert(_0xa811df(0x1a2)[_0xa811df(0x198)](_0xbaefb0,_0x943982)),SceneManager[_0xa811df(0x1a8)]();break;}}const _0x9e2563=_0x1e8232[_0xa811df(0x1e3)];if(_0x9e2563[_0xa811df(0x204)](/\[Version[ ](.*?)\]/i)){const _0x489470=Number(RegExp['$1']);_0x489470!==VisuMZ[label][_0xa811df(0x1b6)]&&(alert(_0xa811df(0x201)['format'](_0xbaefb0,_0x489470)),SceneManager[_0xa811df(0x1a8)]());}if(_0x9e2563[_0xa811df(0x204)](/\[Tier[ ](\d+)\]/i)){const _0x478318=Number(RegExp['$1']);_0x478318<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0xa811df(0x198)](_0xbaefb0,_0x478318,tier)),SceneManager[_0xa811df(0x1a8)]()):tier=Math[_0xa811df(0x20f)](_0x478318,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x1e8232[_0xa811df(0x1ae)]);})(pluginData),PluginManager[_0x5883f0(0x213)](pluginData['name'],'BloomChange',_0x13ec32=>{var _0x43b65b=_0x5883f0;VisuMZ['ConvertParams'](_0x13ec32,_0x13ec32);const _0x2ef5bd=$gameScreen[_0x43b65b(0x1ba)]();_0x2ef5bd['bloomScale']=_0x13ec32[_0x43b65b(0x1df)],_0x2ef5bd[_0x43b65b(0x16c)]=_0x13ec32[_0x43b65b(0x1a3)],_0x2ef5bd[_0x43b65b(0x18c)]=_0x13ec32[_0x43b65b(0x160)],_0x2ef5bd[_0x43b65b(0x210)]=_0x13ec32[_0x43b65b(0x189)],!SceneManager['isSceneBattle']()&&($gameMap[_0x43b65b(0x16a)]=undefined,$gameMap[_0x43b65b(0x154)]=undefined);}),PluginManager['registerCommand'](pluginData[_0x5883f0(0x212)],_0x5883f0(0x1c0),_0x1d4405=>{var _0x286b19=_0x5883f0;VisuMZ[_0x286b19(0x162)](_0x1d4405,_0x1d4405);SceneManager[_0x286b19(0x171)]()?$gameTroop['setupBrightEffectsAdvBloomFilter']():$gameMap[_0x286b19(0x190)]();const _0x9beead=$gameScreen[_0x286b19(0x1ba)]();_0x9beead[_0x286b19(0x210)]=_0x1d4405['Duration'];}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],_0x5883f0(0x180),_0x1c765f=>{var _0x10fb0c=_0x5883f0;VisuMZ[_0x10fb0c(0x162)](_0x1c765f,_0x1c765f);const _0x451955=$gameScreen[_0x10fb0c(0x1dd)]();_0x451955['blur']=_0x1c765f[_0x10fb0c(0x1d2)],_0x451955[_0x10fb0c(0x210)]=_0x1c765f[_0x10fb0c(0x189)];}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],_0x5883f0(0x196),_0x1de0ec=>{var _0x3909c3=_0x5883f0;VisuMZ[_0x3909c3(0x162)](_0x1de0ec,_0x1de0ec);SceneManager[_0x3909c3(0x171)]()?$gameTroop[_0x3909c3(0x191)]():$gameMap[_0x3909c3(0x191)]();const _0x4ccfab=$gameScreen['getBrightEffectsBlurSettings']();_0x4ccfab[_0x3909c3(0x210)]=_0x1de0ec[_0x3909c3(0x189)];}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],_0x5883f0(0x19f),_0x12e1d1=>{var _0x589871=_0x5883f0;VisuMZ[_0x589871(0x162)](_0x12e1d1,_0x12e1d1);const _0x4fb34c=$gameScreen[_0x589871(0x1f7)]();_0x4fb34c['visible']=_0x12e1d1[_0x589871(0x185)],_0x4fb34c[_0x589871(0x150)]=_0x12e1d1[_0x589871(0x1e7)],_0x4fb34c['gain']=_0x12e1d1[_0x589871(0x181)],_0x4fb34c['lacunarity']=_0x12e1d1[_0x589871(0x163)],_0x4fb34c[_0x589871(0x1d9)]=_0x12e1d1[_0x589871(0x1f3)],_0x4fb34c[_0x589871(0x210)]=_0x12e1d1[_0x589871(0x189)],!SceneManager['isSceneBattle']()&&($gameMap[_0x589871(0x15f)]=undefined,$gameMap[_0x589871(0x184)]=undefined);}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],_0x5883f0(0x1f8),_0x2d6462=>{var _0x30543c=_0x5883f0;VisuMZ[_0x30543c(0x162)](_0x2d6462,_0x2d6462);SceneManager[_0x30543c(0x171)]()?$gameTroop[_0x30543c(0x20c)]():$gameMap[_0x30543c(0x20c)]();const _0x2412cf=$gameScreen[_0x30543c(0x1f7)]();_0x2412cf['duration']=_0x2d6462[_0x30543c(0x189)];}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],_0x5883f0(0x1be),_0x451e47=>{var _0x390bee=_0x5883f0;VisuMZ[_0x390bee(0x162)](_0x451e47,_0x451e47);const _0x3aeacd=$gameScreen[_0x390bee(0x1f1)]();_0x3aeacd[_0x390bee(0x16c)]=_0x451e47[_0x390bee(0x1a3)],_0x3aeacd['contrast']=_0x451e47[_0x390bee(0x1f4)],_0x3aeacd[_0x390bee(0x161)]=_0x451e47[_0x390bee(0x16d)],_0x3aeacd[_0x390bee(0x210)]=_0x451e47['Duration'],!SceneManager[_0x390bee(0x171)]()&&($gameMap[_0x390bee(0x178)]=undefined,$gameMap['_brightEffectsColorAdjustVertSaturate']=undefined);}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],_0x5883f0(0x1fd),_0x176459=>{var _0x4c15e5=_0x5883f0;VisuMZ[_0x4c15e5(0x162)](_0x176459,_0x176459);SceneManager[_0x4c15e5(0x171)]()?$gameTroop['setupBrightEffectsColorAdjustFilter']():$gameMap[_0x4c15e5(0x1bc)]();const _0x5c6dde=$gameScreen[_0x4c15e5(0x1f1)]();_0x5c6dde[_0x4c15e5(0x210)]=_0x176459[_0x4c15e5(0x189)];}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],'TiltShiftChange',_0x41a9da=>{var _0x139fb5=_0x5883f0;VisuMZ['ConvertParams'](_0x41a9da,_0x41a9da);const _0x1cb096=$gameScreen['getBrightEffectsTiltShiftSettings']();_0x1cb096[_0x139fb5(0x175)]=_0x41a9da[_0x139fb5(0x1d2)],_0x1cb096[_0x139fb5(0x1f0)]=_0x41a9da[_0x139fb5(0x1ee)],_0x1cb096[_0x139fb5(0x210)]=_0x41a9da['Duration'];}),PluginManager[_0x5883f0(0x213)](pluginData[_0x5883f0(0x212)],'TiltShiftReset',_0x592cbe=>{var _0x123f1c=_0x5883f0;VisuMZ[_0x123f1c(0x162)](_0x592cbe,_0x592cbe);SceneManager[_0x123f1c(0x171)]()?$gameTroop[_0x123f1c(0x1ab)]():$gameMap[_0x123f1c(0x1ab)]();const _0x6cdb0e=$gameScreen[_0x123f1c(0x15b)]();_0x6cdb0e['duration']=_0x592cbe[_0x123f1c(0x189)];}),SceneManager[_0x5883f0(0x171)]=function(){var _0x5d1a4e=_0x5883f0;return this['_scene']&&this[_0x5d1a4e(0x1d6)]['constructor']===Scene_Battle;},SceneManager[_0x5883f0(0x20e)]=function(){var _0x96a57c=_0x5883f0;return this[_0x96a57c(0x1d6)]&&this[_0x96a57c(0x1d6)][_0x96a57c(0x1d8)]===Scene_Map;},Game_Screen[_0x5883f0(0x19a)][_0x5883f0(0x176)]=function(_0x4e3e3a,_0x576834,_0x4f414a,_0x51a089){var _0x239596=_0x5883f0;SceneManager['isSceneBattle']()?this['_BrightEffectsAdvBloomSettingsBattle']={'bloomScale':_0x4e3e3a,'brightness':_0x576834,'threshold':_0x4f414a,'duration':_0x51a089||0x0}:this[_0x239596(0x18b)]={'bloomScale':_0x4e3e3a,'brightness':_0x576834,'threshold':_0x4f414a,'duration':_0x51a089||0x0};},Game_Screen['prototype']['getBrightEffectsAdvBloomSettings']=function(){var _0x5345d7=_0x5883f0;return SceneManager[_0x5345d7(0x171)]()?(this[_0x5345d7(0x18f)]===undefined&&$gameTroop[_0x5345d7(0x190)](),this[_0x5345d7(0x18f)]):(this[_0x5345d7(0x18b)]===undefined&&$gameMap['setupBrightEffectsAdvBloomFilter'](),this[_0x5345d7(0x18b)]);},Game_Screen[_0x5883f0(0x19a)][_0x5883f0(0x1bb)]=function(_0x24f474,_0x173792,_0x33fc4d,_0x316bc5,_0x3ec3b9,_0x106e4e){var _0x329c95=_0x5883f0;SceneManager[_0x329c95(0x171)]()?this[_0x329c95(0x1b7)]={'visible':_0x24f474,'speed':_0x173792,'gain':_0x33fc4d,'lacunarity':_0x316bc5,'angle':_0x3ec3b9,'duration':_0x106e4e||0x0}:this['_BrightEffectsGodraySettingsMap']={'visible':_0x24f474,'speed':_0x173792,'gain':_0x33fc4d,'lacunarity':_0x316bc5,'angle':_0x3ec3b9,'duration':_0x106e4e||0x0};},Game_Screen[_0x5883f0(0x19a)][_0x5883f0(0x1f7)]=function(){var _0x227c38=_0x5883f0;return SceneManager['isSceneBattle']()?(this[_0x227c38(0x1b7)]===undefined&&$gameTroop[_0x227c38(0x20c)](),this['_BrightEffectsGodraySettingsBattle']):(this[_0x227c38(0x209)]===undefined&&$gameMap[_0x227c38(0x20c)](),this[_0x227c38(0x209)]);},Game_Screen[_0x5883f0(0x19a)]['setBrightEffectsColorAdjustSettings']=function(_0x9fa577,_0x3a4078,_0x4d210a,_0x44b6a6){var _0x15fe91=_0x5883f0;SceneManager[_0x15fe91(0x171)]()?this['_BrightEffectsColorAdjustSettingsBattle']={'brightness':_0x9fa577,'contrast':_0x3a4078,'saturate':_0x4d210a,'duration':_0x44b6a6||0x0}:this['_BrightEffectsColorAdjustSettingsMap']={'brightness':_0x9fa577,'contrast':_0x3a4078,'saturate':_0x4d210a,'duration':_0x44b6a6||0x0};},Game_Screen['prototype'][_0x5883f0(0x1f1)]=function(){var _0x2862e3=_0x5883f0;return SceneManager[_0x2862e3(0x171)]()?(this[_0x2862e3(0x14f)]===undefined&&$gameTroop[_0x2862e3(0x1bc)](),this[_0x2862e3(0x14f)]):(this[_0x2862e3(0x153)]===undefined&&$gameMap[_0x2862e3(0x1bc)](),this[_0x2862e3(0x153)]);},Game_Screen[_0x5883f0(0x19a)][_0x5883f0(0x1aa)]=function(_0x5038c7,_0x5e55d3,_0x25c668){var _0x5e2aca=_0x5883f0;SceneManager[_0x5e2aca(0x171)]()?this[_0x5e2aca(0x19b)]={'pixelBlur':_0x5038c7,'gradientBlur':_0x5e55d3,'duration':_0x25c668||0x0}:this['_BrightEffectsTiltShiftSettingsMap']={'pixelBlur':_0x5038c7,'gradientBlur':_0x5e55d3,'duration':_0x25c668||0x0};},Game_Screen[_0x5883f0(0x19a)][_0x5883f0(0x15b)]=function(){var _0x5e9151=_0x5883f0;return SceneManager['isSceneBattle']()?(this['_BrightEffectsTiltShiftSettingsBattle']===undefined&&$gameTroop[_0x5e9151(0x1ab)](),this[_0x5e9151(0x19b)]):(this[_0x5e9151(0x177)]===undefined&&$gameMap[_0x5e9151(0x1ab)](),this[_0x5e9151(0x177)]);},Game_Screen[_0x5883f0(0x19a)][_0x5883f0(0x17a)]=function(_0x4a7ea2,_0x2b280e){var _0x591918=_0x5883f0;SceneManager[_0x591918(0x171)]()?this[_0x591918(0x188)]={'blur':_0x4a7ea2||0x0,'duration':_0x2b280e||0x0}:this[_0x591918(0x1e4)]={'blur':_0x4a7ea2||0x0,'duration':_0x2b280e||0x0};},Game_Screen['prototype']['getBrightEffectsBlurSettings']=function(){var _0x5782ea=_0x5883f0;return SceneManager['isSceneBattle']()?(this[_0x5782ea(0x188)]===undefined&&$gameTroop['setupBrightEffectsBlurFilter'](),this[_0x5782ea(0x188)]):(this[_0x5782ea(0x1e4)]===undefined&&$gameMap['setupBrightEffectsBlurFilter'](),this['_BrightEffectsBlurSettingsMap']);},VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x1f5)]=Scene_Battle[_0x5883f0(0x19a)][_0x5883f0(0x159)],Scene_Battle[_0x5883f0(0x19a)][_0x5883f0(0x159)]=function(){var _0x1c89b5=_0x5883f0;VisuMZ['BrightEffects'][_0x1c89b5(0x1f5)]['call'](this),$gameTroop[_0x1c89b5(0x1a6)]();},Game_Troop[_0x5883f0(0x19a)][_0x5883f0(0x1a6)]=function(){var _0x1cde18=_0x5883f0;this[_0x1cde18(0x190)](),this[_0x1cde18(0x20c)](),this[_0x1cde18(0x1bc)](),this[_0x1cde18(0x1ab)](),this['setupBrightEffectsBlurFilter']();},Game_Troop[_0x5883f0(0x19a)][_0x5883f0(0x190)]=function(){var _0x1181c8=_0x5883f0;const _0x2ac277=VisuMZ[_0x1181c8(0x1c1)]['Settings'][_0x1181c8(0x1c5)];var _0x478203=_0x2ac277[_0x1181c8(0x1df)],_0x2319cb=_0x2ac277['Brightness'],_0x39d672=_0x2ac277[_0x1181c8(0x160)];if(!!this['troop']()){var _0x5166fc=this['troop']()[_0x1181c8(0x212)];if(_0x5166fc[_0x1181c8(0x204)](/<BLOOM SCALE: (.*)>/i))var _0x478203=Number(RegExp['$1'])||0x0;if(_0x5166fc[_0x1181c8(0x204)](/<BLOOM BRIGHTNESS: (.*)>/i))var _0x2319cb=Number(RegExp['$1'])||0x0;if(_0x5166fc[_0x1181c8(0x204)](/<BLOOM THRESHOLD: (.*)>/i))var _0x39d672=Number(RegExp['$1'])||0x0;}$gameScreen[_0x1181c8(0x176)](_0x478203,_0x2319cb,_0x39d672,0x0);},Game_Troop['prototype'][_0x5883f0(0x20c)]=function(){var _0x1f7046=_0x5883f0;const _0x1eb43c=VisuMZ[_0x1f7046(0x1c1)][_0x1f7046(0x207)][_0x1f7046(0x216)];var _0x1b5ac0=_0x1eb43c[_0x1f7046(0x185)],_0x2b9a1c=_0x1eb43c[_0x1f7046(0x1e7)],_0x21a621=_0x1eb43c[_0x1f7046(0x181)],_0x255ac3=_0x1eb43c[_0x1f7046(0x163)],_0x1a4f82=_0x1eb43c['Angle'];if(!!this[_0x1f7046(0x157)]()){var _0x2eb283=this[_0x1f7046(0x157)]()['name'];if(_0x2eb283['match'](/<GODRAY>/i))_0x1b5ac0=!![];else _0x2eb283['match'](/<NO GODRAY>/i)&&(_0x1b5ac0=![]);_0x2eb283[_0x1f7046(0x204)](/<GODRAY SPEED: (.*)>/i)&&(_0x2b9a1c=Number(RegExp['$1'])||0x0),_0x2eb283['match'](/<GODRAY GAIN: (.*)>/i)&&(_0x21a621=Number(RegExp['$1'])||0x0),_0x2eb283[_0x1f7046(0x204)](/<GODRAY LACUNARITY: (.*)>/i)&&(_0x255ac3=Number(RegExp['$1'])||0x0),_0x2eb283[_0x1f7046(0x204)](/<GODRAY ANGLE: (.*)>/i)&&(_0x1a4f82=Number(RegExp['$1'])||0x0);}$gameScreen[_0x1f7046(0x1bb)](_0x1b5ac0,_0x2b9a1c,_0x21a621,_0x255ac3,_0x1a4f82,0x0);},Game_Troop[_0x5883f0(0x19a)]['setupBrightEffectsColorAdjustFilter']=function(){var _0x57ede6=_0x5883f0;const _0x5a9305=VisuMZ[_0x57ede6(0x1c1)][_0x57ede6(0x207)][_0x57ede6(0x1d7)];var _0x3247ea=_0x5a9305[_0x57ede6(0x1a3)],_0x36b39f=_0x5a9305[_0x57ede6(0x1f4)],_0x235ec6=_0x5a9305['Saturate'];if(!!this[_0x57ede6(0x157)]()){var _0x13f763=this[_0x57ede6(0x157)]()[_0x57ede6(0x212)];if(_0x13f763[_0x57ede6(0x204)](/<COLOR ADJUST BRIGHTNESS: (.*)>/i))var _0x3247ea=Number(RegExp['$1'])||0x0;if(_0x13f763['match'](/<COLOR ADJUST CONTRAST: (.*)>/i))var _0x36b39f=Number(RegExp['$1'])||0x0;if(_0x13f763[_0x57ede6(0x204)](/<COLOR ADJUST SATURATE: (.*)>/i))var _0x235ec6=Number(RegExp['$1'])||0x0;}$gameScreen[_0x57ede6(0x1d4)](_0x3247ea,_0x36b39f,_0x235ec6,0x0);},Game_Troop[_0x5883f0(0x19a)][_0x5883f0(0x1ab)]=function(){var _0x580d55=_0x5883f0;const _0x4de347=VisuMZ['BrightEffects'][_0x580d55(0x207)][_0x580d55(0x199)];let _0x3eb011=_0x4de347['Blur'],_0x2c8d76=_0x4de347[_0x580d55(0x1ee)];if(!!this[_0x580d55(0x157)]()){const _0x537659=this[_0x580d55(0x157)]()[_0x580d55(0x212)];_0x537659['match'](/<(?:TILTSHIFT|TILT SHIFT) PIXEL BLUR:[ ](\d+)>/i)&&(_0x3eb011=Number(RegExp['$1'])),_0x537659['match'](/<(?:TILTSHIFT|TILT SHIFT) (?:GRAD|GRADIENT) BLUR:[ ](\d+)>/i)&&(_0x2c8d76=Number(RegExp['$1']));}$gameScreen['setBrightEffectsTiltShiftSettings'](_0x3eb011,_0x2c8d76,0x0);},Game_Troop[_0x5883f0(0x19a)][_0x5883f0(0x191)]=function(){var _0x5003df=_0x5883f0;let _0x37259e=0x0;if(!!this[_0x5003df(0x157)]()){const _0x102e4a=this[_0x5003df(0x157)]()[_0x5003df(0x212)];_0x102e4a['match'](/<BLUR:[ ](.*?)>/i)&&(_0x37259e=Number(RegExp['$1']));}$gameScreen[_0x5003df(0x17a)](_0x37259e,0x0);},VisuMZ['BrightEffects'][_0x5883f0(0x16e)]=Game_Map[_0x5883f0(0x19a)]['setup'],Game_Map[_0x5883f0(0x19a)]['setup']=function(_0xe62d45){var _0x2bafcf=_0x5883f0;VisuMZ[_0x2bafcf(0x1c1)][_0x2bafcf(0x16e)]['call'](this,_0xe62d45),!!$dataMap&&this['setupBrightEffectsFilters']();},Game_Map[_0x5883f0(0x19a)][_0x5883f0(0x1a6)]=function(){var _0xb7e8eb=_0x5883f0;this['setupBrightEffectsAdvBloomFilter'](),this[_0xb7e8eb(0x20c)](),this['setupBrightEffectsColorAdjustFilter'](),this[_0xb7e8eb(0x1ab)](),$gamePlayer[_0xb7e8eb(0x158)]();},Game_Map[_0x5883f0(0x19a)][_0x5883f0(0x190)]=function(){var _0x40e4bd=_0x5883f0;const _0x5654fa=VisuMZ[_0x40e4bd(0x1c1)][_0x40e4bd(0x207)][_0x40e4bd(0x19e)];var _0x18c6c9=_0x5654fa[_0x40e4bd(0x1df)],_0x83fe8c=_0x5654fa[_0x40e4bd(0x1a3)],_0x361710=_0x5654fa[_0x40e4bd(0x160)];this[_0x40e4bd(0x192)]=undefined,this[_0x40e4bd(0x1c6)]=undefined,this[_0x40e4bd(0x16a)]=undefined,this[_0x40e4bd(0x154)]=undefined,this['_brightEffectsBloomHorzThreshold']=undefined,this[_0x40e4bd(0x1b8)]=undefined;if($dataMap){var _0xffd075=$dataMap[_0x40e4bd(0x1e1)]||'';if(_0xffd075[_0x40e4bd(0x204)](/<BLOOM SCALE: (.*)>/i))var _0x18c6c9=Number(RegExp['$1'])||0x0;if(_0xffd075[_0x40e4bd(0x204)](/<BLOOM BRIGHTNESS: (.*)>/i))var _0x83fe8c=Number(RegExp['$1'])||0x0;if(_0xffd075[_0x40e4bd(0x204)](/<BLOOM THRESHOLD: (.*)>/i))var _0x361710=Number(RegExp['$1'])||0x0;_0xffd075[_0x40e4bd(0x204)](/<BLOOM (?:HORZ|HORIZONTAL) SCALE: (.*) TO (.*)>/i)&&(this[_0x40e4bd(0x192)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x40e4bd(0x1c6)]=undefined),_0xffd075[_0x40e4bd(0x204)](/<BLOOM (?:VERT|VERTICAL) SCALE: (.*) TO (.*)>/i)&&(this['_brightEffectsBloomHorzScale']=undefined,this['_brightEffectsBloomVertScale']=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0xffd075['match'](/<BLOOM (?:HORZ|HORIZONTAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x40e4bd(0x16a)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x40e4bd(0x154)]=undefined),_0xffd075[_0x40e4bd(0x204)](/<BLOOM (?:VERT|VERTICAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x40e4bd(0x16a)]=undefined,this['_brightEffectsBloomVertBrightness']=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0xffd075['match'](/<BLOOM (?:HORZ|HORIZONTAL) THRESHOLD: (.*) TO (.*)>/i)&&(this[_0x40e4bd(0x1af)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x40e4bd(0x1b8)]=undefined),_0xffd075['match'](/<BLOOM (?:VERT|VERTICAL) THRESHOLD: (.*) TO (.*)>/i)&&(this[_0x40e4bd(0x1af)]=undefined,this[_0x40e4bd(0x1b8)]=[Number(RegExp['$1']),Number(RegExp['$2'])]);}$gameScreen[_0x40e4bd(0x176)](_0x18c6c9,_0x83fe8c,_0x361710,0x0);},Game_Map[_0x5883f0(0x19a)]['setupBrightEffectsGodrayFilter']=function(){var _0x58e610=_0x5883f0;const _0x395e3f=VisuMZ[_0x58e610(0x1c1)][_0x58e610(0x207)][_0x58e610(0x1da)];var _0x132df9=_0x395e3f[_0x58e610(0x185)],_0x5203bb=_0x395e3f[_0x58e610(0x1e7)],_0x195668=_0x395e3f['Gain'],_0x3419b3=_0x395e3f[_0x58e610(0x163)],_0x187d34=_0x395e3f[_0x58e610(0x1f3)];this[_0x58e610(0x15f)]=undefined,this[_0x58e610(0x184)]=undefined,this[_0x58e610(0x152)]=undefined,this[_0x58e610(0x1ff)]=undefined,this[_0x58e610(0x1bd)]=undefined,this[_0x58e610(0x17e)]=undefined,this[_0x58e610(0x1fb)]=undefined,this[_0x58e610(0x214)]=undefined;if($dataMap){var _0x1c600a=$dataMap[_0x58e610(0x1e1)]||'';if(_0x1c600a[_0x58e610(0x204)](/<GODRAY>/i))_0x132df9=!![];else _0x1c600a[_0x58e610(0x204)](/<NO GODRAY>/i)&&(_0x132df9=![]);_0x1c600a[_0x58e610(0x204)](/<GODRAY SPEED: (.*)>/i)&&(_0x5203bb=Number(RegExp['$1'])||0x0),_0x1c600a[_0x58e610(0x204)](/<GODRAY GAIN: (.*)>/i)&&(_0x195668=Number(RegExp['$1'])||0x0),_0x1c600a[_0x58e610(0x204)](/<GODRAY LACUNARITY: (.*)>/i)&&(_0x3419b3=Number(RegExp['$1'])||0x0),_0x1c600a[_0x58e610(0x204)](/<GODRAY ANGLE: (.*)>/i)&&(_0x187d34=Number(RegExp['$1'])||0x0),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:HORZ|HORIZONTAL) SPEED: (.*) TO (.*)>/i)&&(this[_0x58e610(0x15f)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x58e610(0x184)]=undefined),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:VERT|VERTICAL) SPEED: (.*) TO (.*)>/i)&&(this['_brightEffectsGodrayHorzSpeed']=undefined,this[_0x58e610(0x184)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x1c600a['match'](/<GODRAY (?:HORZ|HORIZONTAL) GAIN: (.*) TO (.*)>/i)&&(this[_0x58e610(0x152)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this['_brightEffectsGodrayVertGain']=undefined),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:VERT|VERTICAL) GAIN: (.*) TO (.*)>/i)&&(this[_0x58e610(0x152)]=undefined,this[_0x58e610(0x1ff)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:HORZ|HORIZONTAL) LACUNARITY: (.*) TO (.*)>/i)&&(this[_0x58e610(0x1bd)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x58e610(0x17e)]=undefined),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:VERT|VERTICAL) LACUNARITY: (.*) TO (.*)>/i)&&(this[_0x58e610(0x1bd)]=undefined,this[_0x58e610(0x17e)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:HORZ|HORIZONTAL) ANGLE: (.*) TO (.*)>/i)&&(this[_0x58e610(0x1fb)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x58e610(0x214)]=undefined),_0x1c600a[_0x58e610(0x204)](/<GODRAY (?:VERT|VERTICAL) ANGLE: (.*) TO (.*)>/i)&&(this[_0x58e610(0x1fb)]=undefined,this['_brightEffectsGodrayVertAngle']=[Number(RegExp['$1']),Number(RegExp['$2'])]);}$gameScreen[_0x58e610(0x1bb)](_0x132df9,_0x5203bb,_0x195668,_0x3419b3,_0x187d34,0x0);},Game_Map[_0x5883f0(0x19a)][_0x5883f0(0x1bc)]=function(){var _0x1e9d8e=_0x5883f0;const _0x1d1625=VisuMZ[_0x1e9d8e(0x1c1)][_0x1e9d8e(0x207)][_0x1e9d8e(0x14b)];var _0x54fb96=_0x1d1625[_0x1e9d8e(0x1a3)],_0x105e22=_0x1d1625[_0x1e9d8e(0x1f4)],_0x23844f=_0x1d1625[_0x1e9d8e(0x16d)];this[_0x1e9d8e(0x16b)]=undefined,this[_0x1e9d8e(0x165)]=undefined,this[_0x1e9d8e(0x169)]=undefined,this[_0x1e9d8e(0x1a0)]=undefined,this[_0x1e9d8e(0x178)]=undefined,this['_brightEffectsColorAdjustVertSaturate']=undefined;if($dataMap){var _0xfc4380=$dataMap[_0x1e9d8e(0x1e1)]||'';if(_0xfc4380['match'](/<COLOR ADJUST BRIGHTNESS: (.*)>/i))var _0x54fb96=Number(RegExp['$1'])||0x0;if(_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST CONTRAST: (.*)>/i))var _0x105e22=Number(RegExp['$1'])||0x0;if(_0xfc4380['match'](/<COLOR ADJUST SATURATE: (.*)>/i))var _0x23844f=Number(RegExp['$1'])||0x0;_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x1e9d8e(0x16b)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x1e9d8e(0x165)]=undefined),_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST (?:VERT|VERTICAL) BRIGHTNESS: (.*) TO (.*)>/i)&&(this[_0x1e9d8e(0x16b)]=undefined,this[_0x1e9d8e(0x165)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) CONTRAST: (.*) TO (.*)>/i)&&(this[_0x1e9d8e(0x169)]=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x1e9d8e(0x1a0)]=undefined),_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST (?:VERT|VERTICAL) CONTRAST: (.*) TO (.*)>/i)&&(this['_brightEffectsColorAdjustHorzContrast']=undefined,this[_0x1e9d8e(0x1a0)]=[Number(RegExp['$1']),Number(RegExp['$2'])]),_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST (?:HORZ|HORIZONTAL) SATURATE: (.*) TO (.*)>/i)&&(this['_brightEffectsColorAdjustHorzSaturate']=[Number(RegExp['$1']),Number(RegExp['$2'])],this[_0x1e9d8e(0x1fe)]=undefined),_0xfc4380[_0x1e9d8e(0x204)](/<COLOR ADJUST (?:VERT|VERTICAL) SATURATE: (.*) TO (.*)>/i)&&(this['_brightEffectsColorAdjustHorzSaturate']=undefined,this[_0x1e9d8e(0x1fe)]=[Number(RegExp['$1']),Number(RegExp['$2'])]);}$gameScreen[_0x1e9d8e(0x1d4)](_0x54fb96,_0x105e22,_0x23844f,0x0);},Game_Map[_0x5883f0(0x19a)]['setupBrightEffectsTiltShiftFilter']=function(){var _0xb4322d=_0x5883f0;const _0x551962=VisuMZ[_0xb4322d(0x1c1)][_0xb4322d(0x207)][_0xb4322d(0x1c4)];let _0x298925=_0x551962[_0xb4322d(0x1d2)],_0x30d307=_0x551962['GradientBlur'];if($dataMap){const _0x74ed3a=$dataMap['note']||'';_0x74ed3a[_0xb4322d(0x204)](/<(?:TILTSHIFT|TILT SHIFT) PIXEL BLUR:[ ](\d+)>/i)&&(_0x298925=Number(RegExp['$1'])),_0x74ed3a[_0xb4322d(0x204)](/<(?:TILTSHIFT|TILT SHIFT) (?:GRAD|GRADIENT) BLUR:[ ](\d+)>/i)&&(_0x30d307=Number(RegExp['$1']));}$gameScreen['setBrightEffectsTiltShiftSettings'](_0x298925,_0x30d307,0x0);},Game_Map[_0x5883f0(0x19a)][_0x5883f0(0x191)]=function(){var _0x1bbe07=_0x5883f0;let _0x5898ba=0x0;if($dataMap){const _0x4c5d0a=$dataMap[_0x1bbe07(0x1e1)]||'';_0x4c5d0a[_0x1bbe07(0x204)](/<BLUR:[ ](.*?)>/i)&&(_0x5898ba=Number(RegExp['$1']));}$gameScreen[_0x1bbe07(0x17a)](_0x5898ba,0x0);},VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x1c8)]=Game_CharacterBase['prototype'][_0x5883f0(0x18d)],Game_CharacterBase[_0x5883f0(0x19a)][_0x5883f0(0x18d)]=function(_0x214bd7,_0xb36c4a){var _0x15565a=_0x5883f0;VisuMZ['BrightEffects']['Game_CharacterBase_locate'][_0x15565a(0x20b)](this,_0x214bd7,_0xb36c4a),this===$gamePlayer&&this[_0x15565a(0x158)]();},VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x202)]=Game_Player[_0x5883f0(0x19a)]['update'],Game_Player['prototype'][_0x5883f0(0x1f9)]=function(_0x4292fb){var _0x3639e5=_0x5883f0;VisuMZ[_0x3639e5(0x1c1)][_0x3639e5(0x202)][_0x3639e5(0x20b)](this,_0x4292fb),this[_0x3639e5(0x158)]();},Game_Player[_0x5883f0(0x19a)]['updateMapBrightEffects']=function(){var _0x130810=_0x5883f0;if(ConfigManager[_0x130810(0x19d)]===![])return;this[_0x130810(0x1f2)](),this[_0x130810(0x205)](),this['updateMapBrightEffectsColorAdjust']();},Game_Player[_0x5883f0(0x19a)]['updateMapBrightEffectsAdvBloom']=function(){var _0x13e471=_0x5883f0,_0x5f0fe9=$gameScreen['getBrightEffectsAdvBloomSettings'](),_0x30ec4f=_0x5f0fe9[_0x13e471(0x1d3)],_0x589882=_0x5f0fe9[_0x13e471(0x16c)],_0xbe24f4=_0x5f0fe9['threshold'];if($gameMap[_0x13e471(0x192)]!==undefined)var _0x59c8c0=$gameMap[_0x13e471(0x192)][0x0],_0x19a58a=$gameMap['_brightEffectsBloomHorzScale'][0x1]-_0x59c8c0,_0x3bbc6d=$gamePlayer[_0x13e471(0x164)]/$gameMap[_0x13e471(0x1e5)](),_0x30ec4f=_0x59c8c0+_0x19a58a*_0x3bbc6d;else{if($gameMap[_0x13e471(0x1c6)]!==undefined)var _0x59c8c0=$gameMap[_0x13e471(0x1c6)][0x0],_0x19a58a=$gameMap[_0x13e471(0x1c6)][0x1]-_0x59c8c0,_0x3bbc6d=$gamePlayer[_0x13e471(0x1d1)]/$gameMap[_0x13e471(0x1ce)](),_0x30ec4f=_0x59c8c0+_0x19a58a*_0x3bbc6d;}if($gameMap['_brightEffectsBloomHorzBrightness']!==undefined)var _0x59c8c0=$gameMap['_brightEffectsBloomHorzBrightness'][0x0],_0x19a58a=$gameMap[_0x13e471(0x16a)][0x1]-_0x59c8c0,_0x3bbc6d=$gamePlayer[_0x13e471(0x164)]/$gameMap['width'](),_0x589882=_0x59c8c0+_0x19a58a*_0x3bbc6d;else{if($gameMap[_0x13e471(0x154)]!==undefined)var _0x59c8c0=$gameMap[_0x13e471(0x154)][0x0],_0x19a58a=$gameMap[_0x13e471(0x154)][0x1]-_0x59c8c0,_0x3bbc6d=$gamePlayer['_realY']/$gameMap[_0x13e471(0x1ce)](),_0x589882=_0x59c8c0+_0x19a58a*_0x3bbc6d;}if($gameMap[_0x13e471(0x1af)]!==undefined)var _0x59c8c0=$gameMap[_0x13e471(0x1af)][0x0],_0x19a58a=$gameMap['_brightEffectsBloomHorzThreshold'][0x1]-_0x59c8c0,_0x3bbc6d=$gamePlayer[_0x13e471(0x164)]/$gameMap[_0x13e471(0x1e5)](),_0xbe24f4=_0x59c8c0+_0x19a58a*_0x3bbc6d;else{if($gameMap[_0x13e471(0x1b8)]!==undefined)var _0x59c8c0=$gameMap[_0x13e471(0x1b8)][0x0],_0x19a58a=$gameMap[_0x13e471(0x1b8)][0x1]-_0x59c8c0,_0x3bbc6d=$gamePlayer['_realY']/$gameMap['height'](),_0xbe24f4=_0x59c8c0+_0x19a58a*_0x3bbc6d;}$gameScreen['setBrightEffectsAdvBloomSettings'](_0x30ec4f,_0x589882,_0xbe24f4,_0x5f0fe9[_0x13e471(0x210)]);},Game_Player[_0x5883f0(0x19a)][_0x5883f0(0x205)]=function(){var _0x36ffd5=_0x5883f0,_0x4fe4f2=$gameScreen['getBrightEffectsGodraySettings'](),_0x5dfae0=_0x4fe4f2[_0x36ffd5(0x20d)],_0x47842e=_0x4fe4f2[_0x36ffd5(0x150)],_0x44d58a=_0x4fe4f2['gain'],_0x3cda5c=_0x4fe4f2[_0x36ffd5(0x1b4)],_0x2ce92c=_0x4fe4f2[_0x36ffd5(0x1d9)];if($gameMap[_0x36ffd5(0x15f)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x15f)][0x0],_0x50f615=$gameMap[_0x36ffd5(0x15f)][0x1]-_0x284d6c,_0x5576e7=$gamePlayer[_0x36ffd5(0x164)]/$gameMap[_0x36ffd5(0x1e5)](),_0x47842e=_0x284d6c+_0x50f615*_0x5576e7;else{if($gameMap[_0x36ffd5(0x1c6)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x184)][0x0],_0x50f615=$gameMap[_0x36ffd5(0x184)][0x1]-_0x284d6c,_0x5576e7=$gamePlayer[_0x36ffd5(0x1d1)]/$gameMap['height'](),_0x47842e=_0x284d6c+_0x50f615*_0x5576e7;}if($gameMap[_0x36ffd5(0x152)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x152)][0x0],_0x50f615=$gameMap['_brightEffectsGodrayHorzGain'][0x1]-_0x284d6c,_0x5576e7=$gamePlayer[_0x36ffd5(0x164)]/$gameMap[_0x36ffd5(0x1e5)](),_0x44d58a=_0x284d6c+_0x50f615*_0x5576e7;else{if($gameMap[_0x36ffd5(0x1ff)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x1ff)][0x0],_0x50f615=$gameMap[_0x36ffd5(0x1ff)][0x1]-_0x284d6c,_0x5576e7=$gamePlayer[_0x36ffd5(0x1d1)]/$gameMap['height'](),_0x44d58a=_0x284d6c+_0x50f615*_0x5576e7;}if($gameMap[_0x36ffd5(0x1bd)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x1bd)][0x0],_0x50f615=$gameMap[_0x36ffd5(0x1bd)][0x1]-_0x284d6c,_0x5576e7=$gamePlayer[_0x36ffd5(0x164)]/$gameMap[_0x36ffd5(0x1e5)](),_0x3cda5c=_0x284d6c+_0x50f615*_0x5576e7;else{if($gameMap[_0x36ffd5(0x17e)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x17e)][0x0],_0x50f615=$gameMap['_brightEffectsGodrayVertLacunarity'][0x1]-_0x284d6c,_0x5576e7=$gamePlayer['_realY']/$gameMap[_0x36ffd5(0x1ce)](),_0x3cda5c=_0x284d6c+_0x50f615*_0x5576e7;}if($gameMap[_0x36ffd5(0x1fb)]!==undefined)var _0x284d6c=$gameMap[_0x36ffd5(0x1fb)][0x0],_0x50f615=$gameMap[_0x36ffd5(0x1fb)][0x1]-_0x284d6c,_0x5576e7=$gamePlayer['_realX']/$gameMap[_0x36ffd5(0x1e5)](),_0x2ce92c=_0x284d6c+_0x50f615*_0x5576e7;else{if($gameMap[_0x36ffd5(0x214)]!==undefined)var _0x284d6c=$gameMap['_brightEffectsGodrayVertAngle'][0x0],_0x50f615=$gameMap[_0x36ffd5(0x214)][0x1]-_0x284d6c,_0x5576e7=$gamePlayer[_0x36ffd5(0x1d1)]/$gameMap['height'](),_0x2ce92c=_0x284d6c+_0x50f615*_0x5576e7;}$gameScreen[_0x36ffd5(0x1bb)](_0x5dfae0,_0x47842e,_0x44d58a,_0x3cda5c,_0x2ce92c,_0x4fe4f2['duration']);},Game_Player[_0x5883f0(0x19a)][_0x5883f0(0x156)]=function(){var _0x90d053=_0x5883f0,_0x1d6145=$gameScreen['getBrightEffectsColorAdjustSettings'](),_0x4beb48=_0x1d6145[_0x90d053(0x16c)],_0x372611=_0x1d6145[_0x90d053(0x1ec)],_0x557582=_0x1d6145[_0x90d053(0x161)];if($gameMap[_0x90d053(0x16b)]!==undefined)var _0x501b6a=$gameMap[_0x90d053(0x16b)][0x0],_0x49440c=$gameMap['_brightEffectsColorAdjustHorzBrightness'][0x1]-_0x501b6a,_0x4390b0=$gamePlayer['_realX']/$gameMap[_0x90d053(0x1e5)](),_0x4beb48=_0x501b6a+_0x49440c*_0x4390b0;else{if($gameMap[_0x90d053(0x165)]!==undefined)var _0x501b6a=$gameMap[_0x90d053(0x165)][0x0],_0x49440c=$gameMap[_0x90d053(0x165)][0x1]-_0x501b6a,_0x4390b0=$gamePlayer[_0x90d053(0x1d1)]/$gameMap['height'](),_0x4beb48=_0x501b6a+_0x49440c*_0x4390b0;}if($gameMap[_0x90d053(0x169)]!==undefined)var _0x501b6a=$gameMap[_0x90d053(0x169)][0x0],_0x49440c=$gameMap[_0x90d053(0x169)][0x1]-_0x501b6a,_0x4390b0=$gamePlayer[_0x90d053(0x164)]/$gameMap[_0x90d053(0x1e5)](),_0x372611=_0x501b6a+_0x49440c*_0x4390b0;else{if($gameMap['_brightEffectsColorAdjustVertContrast']!==undefined)var _0x501b6a=$gameMap['_brightEffectsColorAdjustVertContrast'][0x0],_0x49440c=$gameMap[_0x90d053(0x1a0)][0x1]-_0x501b6a,_0x4390b0=$gamePlayer[_0x90d053(0x1d1)]/$gameMap['height'](),_0x372611=_0x501b6a+_0x49440c*_0x4390b0;}if($gameMap[_0x90d053(0x178)]!==undefined)var _0x501b6a=$gameMap[_0x90d053(0x178)][0x0],_0x49440c=$gameMap['_brightEffectsColorAdjustHorzSaturate'][0x1]-_0x501b6a,_0x4390b0=$gamePlayer[_0x90d053(0x164)]/$gameMap[_0x90d053(0x1e5)](),_0x557582=_0x501b6a+_0x49440c*_0x4390b0;else{if($gameMap[_0x90d053(0x1fe)]!==undefined)var _0x501b6a=$gameMap[_0x90d053(0x1fe)][0x0],_0x49440c=$gameMap[_0x90d053(0x1fe)][0x1]-_0x501b6a,_0x4390b0=$gamePlayer['_realY']/$gameMap[_0x90d053(0x1ce)](),_0x557582=_0x501b6a+_0x49440c*_0x4390b0;}$gameScreen[_0x90d053(0x1d4)](_0x4beb48,_0x372611,_0x557582,_0x1d6145[_0x90d053(0x210)]);},Spriteset_Base[_0x5883f0(0x1db)]=![],Spriteset_Map[_0x5883f0(0x1db)]=VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x207)][_0x5883f0(0x170)],Spriteset_Battle['BRIGHT_EFFECTS_BASE_ONLY']=VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x207)]['BattleBaseFilter'],Spriteset_Base[_0x5883f0(0x19a)]['brightEffectsBaseOnly']=function(){return Spriteset_Base['BRIGHT_EFFECTS_BASE_ONLY'];},Spriteset_Map[_0x5883f0(0x19a)][_0x5883f0(0x1ed)]=function(){var _0x22a5eb=_0x5883f0;return Spriteset_Map[_0x22a5eb(0x1db)];},Spriteset_Battle['prototype'][_0x5883f0(0x1ed)]=function(){return Spriteset_Battle['BRIGHT_EFFECTS_BASE_ONLY'];},VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x1b5)]=Spriteset_Base['prototype'][_0x5883f0(0x1b9)],Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1b9)]=function(){var _0x595ad4=_0x5883f0;VisuMZ['BrightEffects']['Spriteset_Base_createOverallFilters'][_0x595ad4(0x20b)](this),this['createBrightEffectsFilters']();},VisuMZ[_0x5883f0(0x1c1)][_0x5883f0(0x197)]=Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1f9)],Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1f9)]=function(){var _0x103c09=_0x5883f0;VisuMZ[_0x103c09(0x1c1)][_0x103c09(0x197)][_0x103c09(0x20b)](this),this[_0x103c09(0x20a)]();},Spriteset_Map[_0x5883f0(0x19a)]['getMapEnhanceScreenY']=function(){var _0x215f9c=_0x5883f0;const _0x1a6e0f=$gameScreen[_0x215f9c(0x15c)]();let _0x27a598=0x0;if(Imported[_0x215f9c(0x1ad)]&&$gameScreen['mapCameraSettings']()[_0x215f9c(0x167)])_0x27a598=Graphics['height']/0x2,_0x27a598-=$gameMap[_0x215f9c(0x155)]()*0.5*_0x1a6e0f;else{const _0x3334de=Imported[_0x215f9c(0x1ad)]?$gameScreen[_0x215f9c(0x1fc)](!![]):$gamePlayer,_0xdfc263=this[_0x215f9c(0x187)](_0x3334de);_0xdfc263&&(_0x27a598=_0x3334de[_0x215f9c(0x14d)]()*_0x1a6e0f,_0x27a598-=_0xdfc263[_0x215f9c(0x1ce)]*0.5,_0x27a598-=_0x3334de[_0x215f9c(0x1ef)]()*_0x1a6e0f*0.5);}return _0x27a598;},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1b0)]=function(){var _0x16aa00=_0x5883f0;return Graphics[_0x16aa00(0x1ce)]/0x2;},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x15e)]=function(){var _0x39a07c=_0x5883f0;if(ConfigManager[_0x39a07c(0x19d)]===![])return;this['filters']=this[_0x39a07c(0x14a)]||[],this[_0x39a07c(0x193)](),this[_0x39a07c(0x19c)](),this['createBrightEffectsColorAdjustFilter'](),this[_0x39a07c(0x206)](),this[_0x39a07c(0x1ac)](),this[_0x39a07c(0x20a)]();},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x20a)]=function(){var _0x222e9b=_0x5883f0;this['updateBrightEffectsAdvBloomFilter'](),this['updateBrightEffectsGodrayFilter'](),this[_0x222e9b(0x1c9)](),this['updateBrightEffectsTiltShiftFilter'](),this[_0x222e9b(0x17b)]();},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x193)]=function(){var _0x20aa85=_0x5883f0;if(!PIXI[_0x20aa85(0x14a)][_0x20aa85(0x17f)])return;this[_0x20aa85(0x1a7)]=new PIXI[(_0x20aa85(0x14a))]['AdvancedBloomFilter']();this['brightEffectsBaseOnly']()?this['_baseSprite']['filters'][_0x20aa85(0x1e9)](this[_0x20aa85(0x1a7)]):this[_0x20aa85(0x14a)][_0x20aa85(0x1e9)](this[_0x20aa85(0x1a7)]);var _0x23bd22=$gameScreen[_0x20aa85(0x1ba)]();_0x23bd22&&_0x23bd22[_0x20aa85(0x210)]>0x0&&(this[_0x20aa85(0x1a7)][_0x20aa85(0x1d3)]=_0x23bd22[_0x20aa85(0x1d3)],this[_0x20aa85(0x1a7)][_0x20aa85(0x16c)]=_0x23bd22[_0x20aa85(0x16c)],this['_BrightEffectsAdvBloomFilter'][_0x20aa85(0x18c)]=_0x23bd22['threshold']);},Spriteset_Base[_0x5883f0(0x19a)]['updateBrightEffectsAdvBloomFilter']=function(){var _0x4ae88b=_0x5883f0;if(!!this[_0x4ae88b(0x1a7)]){var _0x25589f=$gameScreen[_0x4ae88b(0x1ba)](),_0xe06182=_0x25589f['duration'];_0xe06182<=0x0?(this[_0x4ae88b(0x1a7)][_0x4ae88b(0x1d3)]=_0x25589f[_0x4ae88b(0x1d3)],this['_BrightEffectsAdvBloomFilter'][_0x4ae88b(0x16c)]=_0x25589f['brightness'],this[_0x4ae88b(0x1a7)]['threshold']=_0x25589f[_0x4ae88b(0x18c)]):(_0x25589f[_0x4ae88b(0x210)]--,this[_0x4ae88b(0x1a7)][_0x4ae88b(0x1d3)]=(this[_0x4ae88b(0x1a7)][_0x4ae88b(0x1d3)]*(_0xe06182-0x1)+_0x25589f['bloomScale'])/_0xe06182,this[_0x4ae88b(0x1a7)][_0x4ae88b(0x16c)]=(this[_0x4ae88b(0x1a7)]['brightness']*(_0xe06182-0x1)+_0x25589f[_0x4ae88b(0x16c)])/_0xe06182,this['_BrightEffectsAdvBloomFilter'][_0x4ae88b(0x18c)]=(this[_0x4ae88b(0x1a7)]['threshold']*(_0xe06182-0x1)+_0x25589f['threshold'])/_0xe06182);}},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x19c)]=function(){var _0x202d8c=_0x5883f0;if(!PIXI[_0x202d8c(0x14a)][_0x202d8c(0x211)])return;this[_0x202d8c(0x1e6)]=new PIXI['filters'][(_0x202d8c(0x211))](),this[_0x202d8c(0x1e6)][_0x202d8c(0x17c)]=![],this[_0x202d8c(0x1e6)]['time']=0x0;this['brightEffectsBaseOnly']()?this['_baseSprite'][_0x202d8c(0x14a)][_0x202d8c(0x1e9)](this[_0x202d8c(0x1e6)]):this[_0x202d8c(0x14a)]['push'](this[_0x202d8c(0x1e6)]);var _0x1b3972=$gameScreen[_0x202d8c(0x1f7)]();_0x1b3972&&_0x1b3972['duration']>0x0&&(this[_0x202d8c(0x1e6)][_0x202d8c(0x150)]=_0x1b3972[_0x202d8c(0x150)],this[_0x202d8c(0x1e6)][_0x202d8c(0x1a4)]=_0x1b3972[_0x202d8c(0x1a4)],this[_0x202d8c(0x1e6)][_0x202d8c(0x1b4)]=_0x1b3972[_0x202d8c(0x1b4)],this[_0x202d8c(0x1e6)]['angle']=_0x1b3972[_0x202d8c(0x1d9)]);},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x166)]=function(){var _0x574f96=_0x5883f0;if(!!this[_0x574f96(0x1e6)]){var _0x2b5737=$gameScreen[_0x574f96(0x1f7)](),_0x33a66b=_0x2b5737[_0x574f96(0x210)];_0x33a66b<=0x0?(this[_0x574f96(0x1e6)][_0x574f96(0x150)]=_0x2b5737[_0x574f96(0x150)],this[_0x574f96(0x1e6)][_0x574f96(0x1a4)]=_0x2b5737['gain'],this[_0x574f96(0x1e6)][_0x574f96(0x1b4)]=_0x2b5737[_0x574f96(0x1b4)],this[_0x574f96(0x1e6)]['angle']=_0x2b5737[_0x574f96(0x1d9)]):(_0x2b5737[_0x574f96(0x210)]--,this[_0x574f96(0x1e6)][_0x574f96(0x150)]=(this[_0x574f96(0x1e6)][_0x574f96(0x150)]*(_0x33a66b-0x1)+_0x2b5737[_0x574f96(0x150)])/_0x33a66b,this[_0x574f96(0x1e6)][_0x574f96(0x1a4)]=(this[_0x574f96(0x1e6)][_0x574f96(0x1a4)]*(_0x33a66b-0x1)+_0x2b5737[_0x574f96(0x1a4)])/_0x33a66b,this[_0x574f96(0x1e6)][_0x574f96(0x1b4)]=(this[_0x574f96(0x1e6)][_0x574f96(0x1b4)]*(_0x33a66b-0x1)+_0x2b5737[_0x574f96(0x1b4)])/_0x33a66b,this['_BrightEffectsGodrayFilter'][_0x574f96(0x1d9)]=(this['_BrightEffectsGodrayFilter'][_0x574f96(0x1d9)]*(_0x33a66b-0x1)+_0x2b5737[_0x574f96(0x1d9)])/_0x33a66b),this['_BrightEffectsGodrayFilter'][_0x574f96(0x1e0)]+=this[_0x574f96(0x1e6)][_0x574f96(0x150)],this[_0x574f96(0x1e6)][_0x574f96(0x17c)]=_0x2b5737[_0x574f96(0x20d)];}},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1a5)]=function(){var _0x5953b3=_0x5883f0;if(!PIXI[_0x5953b3(0x14a)][_0x5953b3(0x16f)])return;this[_0x5953b3(0x1bf)]=new PIXI['filters'][(_0x5953b3(0x16f))]();this['brightEffectsBaseOnly']()?this['_baseSprite'][_0x5953b3(0x14a)][_0x5953b3(0x1e9)](this[_0x5953b3(0x1bf)]):this[_0x5953b3(0x14a)]['push'](this[_0x5953b3(0x1bf)]);var _0x29bcf1=$gameScreen['getBrightEffectsColorAdjustSettings']();_0x29bcf1&&_0x29bcf1['duration']>0x0&&(this['_BrightEffectsColorAdjustFilter']['currentBrightness']=_0x29bcf1[_0x5953b3(0x16c)],this['_BrightEffectsColorAdjustFilter'][_0x5953b3(0x1c7)]=_0x29bcf1[_0x5953b3(0x1ec)],this[_0x5953b3(0x1bf)][_0x5953b3(0x151)]=_0x29bcf1[_0x5953b3(0x161)]);},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1c9)]=function(){var _0x4cc8bc=_0x5883f0;if(!!this['_BrightEffectsColorAdjustFilter']){var _0x5c0179=$gameScreen[_0x4cc8bc(0x1f1)](),_0x13f305=_0x5c0179[_0x4cc8bc(0x210)];_0x13f305<=0x0?(this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x1eb)]=_0x5c0179[_0x4cc8bc(0x16c)],this[_0x4cc8bc(0x1bf)]['currentContrast']=_0x5c0179['contrast'],this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x151)]=_0x5c0179[_0x4cc8bc(0x161)]):(_0x5c0179['duration']--,this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x1eb)]=(this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x1eb)]*(_0x13f305-0x1)+_0x5c0179[_0x4cc8bc(0x16c)])/_0x13f305,this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x1c7)]=(this['_BrightEffectsColorAdjustFilter'][_0x4cc8bc(0x1c7)]*(_0x13f305-0x1)+_0x5c0179[_0x4cc8bc(0x1ec)])/_0x13f305,this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x151)]=(this[_0x4cc8bc(0x1bf)]['currentSaturate']*(_0x13f305-0x1)+_0x5c0179[_0x4cc8bc(0x161)])/_0x13f305),this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x16c)](this['_BrightEffectsColorAdjustFilter'][_0x4cc8bc(0x1eb)]),this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x1ec)](this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x1c7)],!![]),this['_BrightEffectsColorAdjustFilter'][_0x4cc8bc(0x161)](this[_0x4cc8bc(0x1bf)][_0x4cc8bc(0x151)],!![]);}},Spriteset_Base[_0x5883f0(0x174)]=null,Spriteset_Base[_0x5883f0(0x14e)]=null,Spriteset_Base[_0x5883f0(0x19a)]['createBrightEffectsTiltShiftFilter']=function(){var _0x1a6f7d=_0x5883f0;if(!PIXI[_0x1a6f7d(0x14a)][_0x1a6f7d(0x14c)])return;const _0x2074cb=this[_0x1a6f7d(0x1cf)]();this[_0x1a6f7d(0x1de)]=_0x2074cb;this[_0x1a6f7d(0x1ed)]()?this[_0x1a6f7d(0x15d)][_0x1a6f7d(0x14a)]['push'](_0x2074cb):this[_0x1a6f7d(0x14a)][_0x1a6f7d(0x1e9)](_0x2074cb);var _0x2d4cbb=$gameScreen[_0x1a6f7d(0x15b)]();_0x2d4cbb&&(_0x2d4cbb['duration']>0x0&&(_0x2074cb['currentPixelBlur']=_0x2d4cbb['pixelBlur'],_0x2074cb[_0x1a6f7d(0x1c3)]=_0x2d4cbb[_0x1a6f7d(0x1f0)])),this['updateBrightEffectsTiltShiftFilter'](!![]);},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1cf)]=function(){var _0x4a2034=_0x5883f0;return SceneManager[_0x4a2034(0x171)]()?Spriteset_Base[_0x4a2034(0x14e)]:Spriteset_Base[_0x4a2034(0x174)];},VisuMZ[_0x5883f0(0x1c1)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x5883f0(0x19a)][_0x5883f0(0x1cd)],Scene_Boot[_0x5883f0(0x19a)][_0x5883f0(0x1cd)]=function(){var _0x3a4310=_0x5883f0;VisuMZ[_0x3a4310(0x1c1)][_0x3a4310(0x1f6)][_0x3a4310(0x20b)](this);if(!PIXI[_0x3a4310(0x14a)]['TiltShiftFilter'])return;Spriteset_Base['TILT_SHIFT_MAP_FILTER']=new PIXI[(_0x3a4310(0x14a))][(_0x3a4310(0x14c))](),Spriteset_Base[_0x3a4310(0x14e)]=new PIXI[(_0x3a4310(0x14a))]['TiltShiftFilter']();},Spriteset_Battle[_0x5883f0(0x19a)][_0x5883f0(0x1cf)]=function(){var _0x53ce39=_0x5883f0;return new PIXI[(_0x53ce39(0x14a))][(_0x53ce39(0x14c))]();},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x194)]=function(_0x2729b8){var _0x4e2832=_0x5883f0;if(!this[_0x4e2832(0x1de)])return;const _0x138181=this[_0x4e2832(0x1b0)]()+0.5;this[_0x4e2832(0x1d0)](_0x138181,_0x2729b8),this[_0x4e2832(0x173)]();},Spriteset_Base[_0x5883f0(0x19a)][_0x5883f0(0x1d0)]=function(_0x153ccb,_0xa6629f){var _0x5244e1=_0x5883f0;let _0x56bb31=_0xa6629f?0xfa0:0x8;if(this['_BrightEffectsTiltShiftFilter'][_0x5244e1(0x159)]['y']>_0x153ccb)this[_0x5244e1(0x1de)][_0x5244e1(0x159)]={'x':0x0,'y':Math['max'](this[_0x5244e1(0x1de)]['start']['y']-_0x56bb31,_0x153ccb)},this[_0x5244e1(0x1de)][_0x5244e1(0x183)]={'x':0x258,'y':Math[_0x5244e1(0x20f)](this['_BrightEffectsTiltShiftFilter']['end']['y']-_0x56bb31,_0x153ccb)};else this[_0x5244e1(0x1de)][_0x5244e1(0x159)]['y']<_0x153ccb&&(this['_BrightEffectsTiltShiftFilter'][_0x5244e1(0x159)]={'x':0x0,'y':Math[_0x5244e1(0x168)](this['_BrightEffectsTiltShiftFilter']['start']['y']+_0x56bb31,_0x153ccb)},this[_0x5244e1(0x1de)][_0x5244e1(0x183)]={'x':0x258,'y':Math[_0x5244e1(0x168)](this['_BrightEffectsTiltShiftFilter']['end']['y']+_0x56bb31,_0x153ccb)});},Spriteset_Base[_0x5883f0(0x19a)]['updateBrightEffectsTiltShiftFilterProperties']=function(){var _0x181da7=_0x5883f0;const _0x1bfdf4=this['_BrightEffectsTiltShiftFilter'];var _0x27bdf9=$gameScreen[_0x181da7(0x15b)](),_0x1d21ea=_0x27bdf9[_0x181da7(0x210)];_0x1d21ea<=0x0?(_0x1bfdf4[_0x181da7(0x195)]=_0x27bdf9[_0x181da7(0x175)],_0x1bfdf4[_0x181da7(0x1c3)]=_0x27bdf9[_0x181da7(0x1f0)]):(_0x27bdf9['duration']--,_0x1bfdf4[_0x181da7(0x195)]=(_0x1bfdf4[_0x181da7(0x195)]*(_0x1d21ea-0x1)+_0x27bdf9[_0x181da7(0x175)])/_0x1d21ea,_0x1bfdf4[_0x181da7(0x1c3)]=(_0x1bfdf4[_0x181da7(0x1c3)]*(_0x1d21ea-0x1)+_0x27bdf9[_0x181da7(0x1f0)])/_0x1d21ea),_0x1bfdf4[_0x181da7(0x1dc)]=_0x1bfdf4['currentPixelBlur'],_0x1bfdf4[_0x181da7(0x1f0)]=_0x1bfdf4['currentGradientBlur'];},Spriteset_Base['prototype'][_0x5883f0(0x1ac)]=function(){var _0x112b26=_0x5883f0;const _0x1c7646=new PIXI[(_0x112b26(0x14a))]['BlurFilter']();this[_0x112b26(0x1b1)]=_0x1c7646;this['brightEffectsBaseOnly']()?this[_0x112b26(0x15d)][_0x112b26(0x14a)][_0x112b26(0x1e9)](_0x1c7646):this['filters'][_0x112b26(0x1e9)](_0x1c7646);var _0x3546b6=$gameScreen['getBrightEffectsBlurSettings']();_0x3546b6&&_0x3546b6['duration']>0x0&&(_0x1c7646[_0x112b26(0x1e2)]=_0x3546b6[_0x112b26(0x1dc)]);},Spriteset_Base['prototype'][_0x5883f0(0x17b)]=function(){var _0x5ee24c=_0x5883f0;if(!!this[_0x5ee24c(0x1b1)]){var _0x4f1302=$gameScreen[_0x5ee24c(0x1dd)](),_0x403231=_0x4f1302[_0x5ee24c(0x210)];_0x403231<=0x0?this[_0x5ee24c(0x1b1)][_0x5ee24c(0x1e2)]=_0x4f1302[_0x5ee24c(0x1dc)]:(_0x4f1302[_0x5ee24c(0x210)]--,this[_0x5ee24c(0x1b1)][_0x5ee24c(0x1e2)]=(this[_0x5ee24c(0x1b1)]['currentBlur']*(_0x403231-0x1)+_0x4f1302[_0x5ee24c(0x1dc)])/_0x403231),this[_0x5ee24c(0x1b1)][_0x5ee24c(0x1dc)]=this[_0x5ee24c(0x1b1)]['currentBlur'];}};