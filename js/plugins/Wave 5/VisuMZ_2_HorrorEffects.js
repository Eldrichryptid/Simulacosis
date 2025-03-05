//=============================================================================
// VisuStella MZ - Horror Effects
// VisuMZ_2_HorrorEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_HorrorEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.HorrorEffects = VisuMZ.HorrorEffects || {};
VisuMZ.HorrorEffects.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.04] [HorrorEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Horror_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * 
 * This is a plugin for RPG Maker MZ that will allow you to add visual horror
 * effects to your game's title screen, maps, events, pictures, battle, etc.
 * You can turn on individual effects at a time or multiple simultaneously. The
 * effects include a noise effect, a glitch effect, and a TV effect, which is
 * commonly seen used in most horror films. Now, you can use these effects in
 * RPG Maker MZ, too!
 *
 * Features include all (but not limited to) the following:
 * 
 * * A noise effect filter which creates specks of dots on the screen that
 *   can obscure it at various intensity rates.
 * * A glitch effect that will cause the screen to tear at custom intervals of
 *   varying frequency and strength.
 * * A TV effect that imitates the display of a cathode ray tube television
 *   with animated lines that travel across the screen at a determined speed.
 * * Apply these effects to the map screen, battle screen, title screen, and/or
 *   various entities on the screen such as events, pictures, actors, and
 *   enemies.
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
 * Noise
 * 
 * The noise effect will cause specks of light that obscure the image the
 * filter is applied to. The intensity rate of the noise will make the image
 * more obscure and harder to see.
 *
 * ---
 *
 * Glitch
 * 
 * The glitch effect will cause bits of the screen to break up into various
 * pieces. These can be tied to a frequency and strength level that can control
 * how often the glitch effect occurs on screen.
 *
 * ---
 *
 * TV
 * 
 * This will create TV lines akin to a cathode ray tube television. The lines
 * will move vertically across the screen. These lines can have their thickness
 * levels changed and the speed at which the lines travel can also be altered.
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
 * The Horror Effects will also be available as Action Sequences in the
 * Battle Core's Action Sequence Plugin Commands. The Horror Action Sequences
 * will make use of the Battle Core's targeting system for more accurate
 * control over who and what to apply the Horror Effects for.
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
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Battle Plugin Commands ===
 * 
 * ---
 *
 * Battle: Clear All Filters
 * - Clear all Horror Effects filters on the main battle screen.
 *
 * ---
 * 
 * Battle: Color Effect Create
 * - Creates the color effect on the main battle screen.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Battle: Color Effect Remove
 * - Removes the color effect on the main battle screen.
 * 
 * ---
 *
 * Battle: Glitch Create
 * - Creates the glitch effect on the main battle screen.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Battle: Glitch Remove
 * - Removes the glitch effect on the main battle screen.
 *
 * ---
 *
 * Battle: Noise Create
 * - Creates the noise effect on the main battle screen.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Battle: Noise Remove
 * - Removes the noise effect on the main battle screen.
 *
 * ---
 *
 * Battle: TV Create
 * - Creates the TV effect on the main battle screen.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Battle: TV Remove
 * - Removes the TV effect on the main battle screen.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 *
 * Map: Clear All Filters
 * - Clear all Horror Effects filters on the main map screen.
 *
 * ---
 * 
 * Map: Color Effect Create
 * - Creates the color effect on the main map screen.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Map: Color Effect Remove
 * - Removes the color effect on the main map screen.
 * 
 * ---
 *
 * Map: Glitch Create
 * - Creates the glitch effect on the main map screen.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Map: Glitch Remove
 * - Removes the glitch effect on the main map screen.
 *
 * ---
 *
 * Map: Noise Create
 * - Creates the noise effect on the main battle screen.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Map: Noise Remove
 * - Removes the noise effect on the main map screen.
 *
 * ---
 *
 * Map: TV Create
 * - Creates the TV effect on the main map screen.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Map: TV Remove
 * - Removes the TV effect on the main map screen.
 *
 * ---
 * 
 * === Event Plugin Commands ===
 * 
 * ---
 *
 * Event: Clear All Filters
 * - Clear all Horror Effects filters on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to clear horror effects from.
 *   - Use "0" for "this" event.
 *
 * ---
 * 
 * Event: Color Effect Create
 * - Creates the color effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to create the horror effects for.
 *   - Use "0" for "this" event.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Event: Color Effect Remove
 * - Removes the color effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to the horror effect from.
 *   - Use "0" for "this" event.
 * 
 * ---
 *
 * Event: Glitch Create
 * - Creates the glitch effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to create the horror effects for.
 *   - Use "0" for "this" event.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Event: Glitch Remove
 * - Removes the glitch effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to the horror effect from.
 *   - Use "0" for "this" event.
 *
 * ---
 *
 * Event: Noise Create
 * - Creates the noise effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to create the horror effects for.
 *   - Use "0" for "this" event.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Event: Noise Remove
 * - Removes the noise effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to the horror effect from.
 *   - Use "0" for "this" event.
 *
 * ---
 *
 * Event: TV Create
 * - Creates the TV effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to create the horror effects for.
 *   - Use "0" for "this" event.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Event: TV Remove
 * - Removes the TV effect on the target event(s).
 * 
 *   Event ID(s):
 *   - The ID of the event to the horror effect from.
 *   - Use "0" for "this" event.
 *
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 *
 * Picture: Clear All Filters
 * - Clear all Horror Effects filters on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to clear horror effects from.
 *   - The ID is a number from 1 to 100.
 *
 * ---
 * 
 * Picture: Color Effect Create
 * - Creates the color effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to create the horror effects for.
 *   - The ID is a number from 1 to 100.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Picture: Color Effect Remove
 * - Removes the color effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to the horror effect from.
 *   - The ID is a number from 1 to 100.
 * 
 * ---
 *
 * Picture: Glitch Create
 * - Creates the glitch effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to create the horror effects for.
 *   - The ID is a number from 1 to 100.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Picture: Glitch Remove
 * - Removes the glitch effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to the horror effect from.
 *   - The ID is a number from 1 to 100.
 *
 * ---
 *
 * Picture: Noise Create
 * - Creates the noise effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to create the horror effects for.
 *   - The ID is a number from 1 to 100.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Picture: Noise Remove
 * - Removes the noise effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to the horror effect from.
 *   - The ID is a number from 1 to 100.
 *
 * ---
 *
 * Picture: TV Create
 * - Creates the TV effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to create the horror effects for.
 *   - The ID is a number from 1 to 100.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Picture: TV Remove
 * - Removes the TV effect on the target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID of the picture to the horror effect from.
 *   - The ID is a number from 1 to 100.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Clear All Filters
 * - Clear all Horror Effects filters on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to clear horror effects from.
 *
 * ---
 * 
 * Actor: Color Effect Create
 * - Creates the color effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to create the horror effects for.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Actor: Color Effect Remove
 * - Removes the color effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to the horror effect from.
 * 
 * ---
 *
 * Actor: Glitch Create
 * - Creates the glitch effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to create the horror effects for.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Actor: Glitch Remove
 * - Removes the glitch effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to the horror effect from.
 *
 * ---
 *
 * Actor: Noise Create
 * - Creates the noise effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to create the horror effects for.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Actor: Noise Remove
 * - Removes the noise effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to the horror effect from.
 *
 * ---
 *
 * Actor: TV Create
 * - Creates the TV effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to create the horror effects for.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Actor: TV Remove
 * - Removes the TV effect on the target actor(s).
 * 
 *   Actor ID(s):
 *   - The ID of the actor to the horror effect from.
 *
 * ---
 * 
 * === Party Plugin Commands ===
 * 
 * ---
 *
 * Party: Clear All Filters
 * - Clear all Horror Effects filters on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to clear horror effects from.
 *   - Index values start at 0.
 *
 * ---
 * 
 * Party: Color Effect Create
 * - Creates the color effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to create the horror effects for.
 *   - Index values start at 0.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Party: Color Effect Remove
 * - Removes the color effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to the horror effect from.
 *   - Index values start at 0.
 * 
 * ---
 *
 * Party: Glitch Create
 * - Creates the glitch effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to create the horror effects for.
 *   - Index values start at 0.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Party: Glitch Remove
 * - Removes the glitch effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to the horror effect from.
 *   - Index values start at 0.
 *
 * ---
 *
 * Party: Noise Create
 * - Creates the noise effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to create the horror effects for.
 *   - Index values start at 0.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Party: Noise Remove
 * - Removes the noise effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to the horror effect from.
 *   - Index values start at 0.
 *
 * ---
 *
 * Party: TV Create
 * - Creates the TV effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to create the horror effects for.
 *   - Index values start at 0.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Party: TV Remove
 * - Removes the TV effect on the target party member(s).
 * 
 *   Party ID(s):
 *   - The index of the party member to the horror effect from.
 *   - Index values start at 0.
 *
 * ---
 * 
 * === Enemy Plugin Commands ===
 * 
 * ---
 *
 * Enemy: Clear All Filters
 * - Clear all Horror Effects filters on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to create the horror effects for.
 *   - Index values start at 0.
 *
 * ---
 * 
 * Enemy: Color Effect Create
 * - Creates the color effect on the target enemy(ies).
 * 
 *   Party ID(s):
 *   - The index of the party member to create the horror effects for.
 *   - Index values start at 0.
 * 
 *   Type:
 *   - Select the Color Effect type.
 *   - Normal, Bizarro, BlackAndWhite, Browni, Desaturate, Greyscale,
 *     Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *     and Vintage
 * 
 * ---
 * 
 * Enemy: Color Effect Remove
 * - Removes the color effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to the horror effect from.
 *   - Index values start at 0.
 * 
 * ---
 *
 * Enemy: Glitch Create
 * - Creates the glitch effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to create the horror effects for.
 *   - Index values start at 0.
 *
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 *
 *   Glitch Offset:
 *   - Default offset value.
 *
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 *
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 *
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * Enemy: Glitch Remove
 * - Removes the glitch effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to the horror effect from.
 *   - Index values start at 0.
 *
 * ---
 *
 * Enemy: Noise Create
 * - Creates the noise effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to create the horror effects for.
 *   - Index values start at 0.
 *
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 *
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Enemy: Noise Remove
 * - Removes the noise effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to the horror effect from.
 *   - Index values start at 0.
 *
 * ---
 *
 * Enemy: TV Create
 * - Creates the TV effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to create the horror effects for.
 *   - Index values start at 0.
 *
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 *
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 *
 *   TV Animated:
 *   - Animate the TV?
 *
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
 *
 * ---
 *
 * Enemy: TV Remove
 * - Removes the TV effect on the target enemy(ies).
 * 
 *   Enemy ID(s):
 *   - The index of the enemy to the horror effect from.
 *   - Index values start at 0.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Image Settings
 * ============================================================================
 *
 * These settings will allow you to apply Horror Effects to each of the title
 * images that you can set in Database > System 1 > Title Screen Images.
 * The settings for each of them can be applied differently from one another,
 * You can apply any of the Noise, Glitch, and/or TV effects.
 *
 * ---
 *
 * Noise
 * 
 *   Noise Effect?:
 *   - Apply the target with a noise effect?
 * 
 *   Noise Rate:
 *   - Noise rate to be used with the target.
 * 
 *   Noise Animated:
 *   - Animate the noise for the target?
 *
 * ---
 *
 * Glitch
 * 
 *   Glitch Effect?:
 *   - Apply the target with a glitch effect?
 * 
 *   Glitch Slices:
 *   - Glitch slices to be used with the target.
 * 
 *   Glitch Offset:
 *   - Default offset value.
 * 
 *   Glitch Animated?:
 *   - Animate the glitch effect?
 * 
 *   Glitch Frequency:
 *   - If animated, how frequent to make the glitch effect?
 *   - Lower = often     Higher = rarer
 * 
 *   Glitch Strength:
 *   - If animated, how strong is the glitch effect?
 *   - Lower = weaker     Higher = stronger
 *
 * ---
 *
 * TV Lines
 * 
 *   TV Effect?:
 *   - Apply the target with a TV effect?
 * 
 *   TV Line Thickness:
 *   - Default TV line thickness
 *   - Lower = thinner     Higher = thicker
 * 
 *   TV Corner Size:
 *   - Default TV line corner size
 *   - Lower = smaller     Higher = bigger
 * 
 *   TV Animated:
 *   - Animate the TV?
 * 
 *   TV Speed:
 *   - Speed used to animate the TV if animated
 *   - Lower = slower     Higher = faster
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
 * Version 1.04: November 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where some horror effects would reset upon leaving the screen
 *    and/or exiting the menu. Fix made by Olivia.
 * 
 * Version 1.03: October 17, 2024
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: October 20, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Irina and sponsored by Archeia:
 * *** Color Effect
 * **** Color effects allow for manipulation of color effects to produce horror
 *      esque effects that are otherwise unavailable or troublesome to
 *      replicate with vanilla RPG Maker MZ.
 * **** Includes: Bizarro, Black and White, Browni, Desaturate, Greyscale,
 *      Kodachrome, LSD, Negative, Polaroid, Predator, Sepia, Technicolor,
 *      and Vintage.
 * **** Available as Plugin Commands for Battle, Map, Event, Picture, Actors,
 *      Party Members, and Enemies.
 * 
 * Version 1.01: March 12, 2021
 * * Compatibility Update!
 * ** Added compatibility with the VisuStella MZ Options Core v1.10 update.
 * *** When the "Special Effects" option is set to OFF, the filters for this
 *     plugin will be shut off. They will be returned to normal when set to ON.
 * * Documentation Update!
 * ** Added the Options Core section to the "Extra Features" list.
 *
 * Version 1.00: December 7, 2020
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
 * @command BattleClear
 * @text Battle: Clear All Filters
 * @desc Clear all Horror Effects filters on the main battle screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleColorCreate
 * @text Battle: Color Effect Create
 * @desc Creates the color effect on the main battle screen.
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleColorRemove
 * @text Battle: Color Effect Remove
 * @desc Removes the color effect on the main battle screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleGlitchCreate
 * @text Battle: Glitch Create
 * @desc Creates the glitch effect on the main battle screen.
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleGlitchRemove
 * @text Battle: Glitch Remove
 * @desc Removes the glitch effect on the main battle screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleNoiseCreate
 * @text Battle: Noise Create
 * @desc Creates the noise effect on the main battle screen.
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleNoiseRemove
 * @text Battle: Noise Remove
 * @desc Removes the noise effect on the main battle screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleTVCreate
 * @text Battle: TV Create
 * @desc Creates the TV effect on the main battle screen.
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleTVRemove
 * @text Battle: TV Remove
 * @desc Removes the TV effect on the main battle screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapClear
 * @text Map: Clear All Filters
 * @desc Clear all Horror Effects filters on the main map screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapColorCreate
 * @text Map: Color Effect Create
 * @desc Creates the color effect on the main map screen.
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapColorRemove
 * @text Map: Color Effect Remove
 * @desc Removes the color effect on the main map screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapGlitchCreate
 * @text Map: Glitch Create
 * @desc Creates the glitch effect on the main map screen.
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapGlitchRemove
 * @text Map: Glitch Remove
 * @desc Removes the glitch effect on the main map screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapNoiseCreate
 * @text Map: Noise Create
 * @desc Creates the noise effect on the main map screen.
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapNoiseRemove
 * @text Map: Noise Remove
 * @desc Removes the noise effect on the main map screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapTVCreate
 * @text Map: TV Create
 * @desc Creates the TV effect on the main map screen.
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapTVRemove
 * @text Map: TV Remove
 * @desc Removes the TV effect on the main map screen.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Event
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventClear
 * @text Event: Clear All Filters
 * @desc Clear all Horror Effects filters on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to clear horror effects from.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventColorCreate
 * @text Event: Color Effect Create
 * @desc Creates the color effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to create the horror effects for.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventColorRemove
 * @text Event: Color Effect Remove
 * @desc Removes the color effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to remove this horror effect from.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventGlitchCreate
 * @text Event: Glitch Create
 * @desc Creates the glitch effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to create the horror effects for.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventGlitchRemove
 * @text Event: Glitch Remove
 * @desc Removes the glitch effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to remove this horror effect from.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventNoiseCreate
 * @text Event: Noise Create
 * @desc Creates the noise effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to create the horror effects for.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventNoiseRemove
 * @text Event: Noise Remove
 * @desc Removes the noise effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to remove this horror effect from.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTVCreate
 * @text Event: TV Create
 * @desc Creates the TV effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to create the horror effects for.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventTVRemove
 * @text Event: TV Remove
 * @desc Removes the TV effect on the target event(s).
 *
 * @arg EventId:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc The ID of the event to remove this horror effect from.
 * Use "0" for "this" event.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureClear
 * @text Picture: Clear All Filters
 * @desc Clear all Horror Effects filters on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to clear horror effects from.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureColorCreate
 * @text Picture: Color Effect Create
 * @desc Creates the color effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to create the horror effects for.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureColorRemove
 * @text Picture: Color Effect Remove
 * @desc Removes the color effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to remove this horror effect from.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureGlitchCreate
 * @text Picture: Glitch Create
 * @desc Creates the glitch effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to create the horror effects for.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureGlitchRemove
 * @text Picture: Glitch Remove
 * @desc Removes the glitch effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to remove this horror effect from.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureNoiseCreate
 * @text Picture: Noise Create
 * @desc Creates the noise effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to create the horror effects for.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureNoiseRemove
 * @text Picture: Noise Remove
 * @desc Removes the noise effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to remove this horror effect from.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTVCreate
 * @text Picture: TV Create
 * @desc Creates the TV effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to create the horror effects for.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTVRemove
 * @text Picture: TV Remove
 * @desc Removes the TV effect on the target picture(s).
 *
 * @arg PictureId:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID of the picture to remove this horror effect from.
 * The ID is a number from 1 to 100.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Actor
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorClear
 * @text Actor: Clear All Filters
 * @desc Clear all Horror Effects filters on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to clear horror effects from.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorColorCreate
 * @text Actor: Color Effect Create
 * @desc Creates the color effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to create the horror effects for.
 * @default ["1"]
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorColorRemove
 * @text Actor: Color Effect Remove
 * @desc Removes the color effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to remove this horror effect from.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorGlitchCreate
 * @text Actor: Glitch Create
 * @desc Creates the glitch effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to create the horror effects for.
 * @default ["1"]
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorGlitchRemove
 * @text Actor: Glitch Remove
 * @desc Removes the glitch effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to remove this horror effect from.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorNoiseCreate
 * @text Actor: Noise Create
 * @desc Creates the noise effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to create the horror effects for.
 * @default ["1"]
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorNoiseRemove
 * @text Actor: Noise Remove
 * @desc Removes the noise effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to remove this horror effect from.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorTVCreate
 * @text Actor: TV Create
 * @desc Creates the TV effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to create the horror effects for.
 * @default ["1"]
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorTVRemove
 * @text Actor: TV Remove
 * @desc Removes the TV effect on the target actor(s).
 *
 * @arg ActorId:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc The ID of the actor to remove this horror effect from.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Party
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyClear
 * @text Party: Clear All Filters
 * @desc Clear all Horror Effects filters on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to clear horror effects from. Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyColorCreate
 * @text Party: Color Effect Create
 * @desc Creates the color effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to create the horror effects for. Index values start at 0.
 * @default ["0"]
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyColorRemove
 * @text Party: Color Effect Remove
 * @desc Removes the color effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to remove this horror effect from. Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyGlitchCreate
 * @text Party: Glitch Create
 * @desc Creates the glitch effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to create the horror effects for. Index values start at 0.
 * @default ["0"]
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyGlitchRemove
 * @text Party: Glitch Remove
 * @desc Removes the glitch effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to remove this horror effect from. Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyNoiseCreate
 * @text Party: Noise Create
 * @desc Creates the noise effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to create the horror effects for. Index values start at 0.
 * @default ["0"]
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyNoiseRemove
 * @text Party: Noise Remove
 * @desc Removes the noise effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to remove this horror effect from. Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyTVCreate
 * @text Party: TV Create
 * @desc Creates the TV effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to create the horror effects for. Index values start at 0.
 * @default ["0"]
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PartyTVRemove
 * @text Party: TV Remove
 * @desc Removes the TV effect on the target party member(s).
 *
 * @arg PartyIndex:arraynum
 * @text Party ID(s)
 * @type number[]
 * @desc The index of the party member to remove this horror effect from. Index values start at 0.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Enemy
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyClear
 * @text Enemy: Clear All Filters
 * @desc Clear all Horror Effects filters on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to clear horror effects from.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyColorCreate
 * @text Enemy: Color Effect Create
 * @desc Creates the color effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to create the horror effects for.
 * @default ["0"]
 *
 * @arg type:str
 * @text Effect Type
 * @type combo
 * @option Normal
 * @option Bizarro
 * @option BlackAndWhite
 * @option Browni
 * @option Desaturate
 * @option Greyscale
 * @option Kodachrome
 * @option LSD
 * @option Negative
 * @option Polaroid
 * @option Predator
 * @option Sepia
 * @option Technicolor
 * @option Vintage
 * @desc Select the Color Effect type.
 * @default Normal
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyColorRemove
 * @text Enemy: Color Effect Remove
 * @desc Removes the color effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to remove this horror effect from.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyGlitchCreate
 * @text Enemy: Glitch Create
 * @desc Creates the glitch effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to create the horror effects for.
 * @default ["0"]
 *
 * @arg slices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @arg offset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @arg animated:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @arg aniFrequency:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @arg aniStrength:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyGlitchRemove
 * @text Enemy: Glitch Remove
 * @desc Removes the glitch effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to remove this horror effect from.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyNoiseCreate
 * @text Enemy: Noise Create
 * @desc Creates the noise effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to create the horror effects for.
 * @default ["0"]
 *
 * @arg noise:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @arg animated:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyNoiseRemove
 * @text Enemy: Noise Remove
 * @desc Removes the noise effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @desc The index of the enemy to remove this horror effect from.
 * @default ["0"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyTVCreate
 * @text Enemy: TV Create
 * @desc Creates the TV effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to create the horror effects for.
 * @default ["0"]
 *
 * @arg lineWidth:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @arg vignetting:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @arg animated:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @arg aniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EnemyTVRemove
 * @text Enemy: TV Remove
 * @desc Removes the TV effect on the target enemy(ies).
 *
 * @arg EnemyIndex:arraynum
 * @text Enemy ID(s)
 * @type number[]
 * @max 7
 * @desc The index of the enemy to remove this horror effect from.
 * @default ["0"]
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
 * @param HorrorEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Title1Settings:struct
 * @text Title 1 Settings
 * @type struct<Title>
 * @desc Horror Effect Settings for the Title 1 image.
 * @default {"FilterNoise":"","Noise:eval":"true","NoiseRate:num":"0.3","NoiseAni:eval":"true","FilterGlitch":"","Glitch:eval":"true","GlitchSlices:num":"10","GlitchOffset:num":"100","GlitchAni:eval":"true","GlitchAniFreq:num":"300","GlitchAniStr:num":"30","FilterTV":"","TV:eval":"true","TVLineThickness:num":"5","TVCorner:num":"0.3","TVAni:eval":"true","TVAniSpeed:num":"0.25"}
 *
 * @param Title2Settings:struct
 * @text Title 2 Settings
 * @type struct<Title>
 * @desc Horror Effect Settings for the Title 2 image.
 * @default {"FilterNoise":"","Noise:eval":"true","NoiseRate:num":"0.3","NoiseAni:eval":"true","FilterGlitch":"","Glitch:eval":"true","GlitchSlices:num":"10","GlitchOffset:num":"100","GlitchAni:eval":"true","GlitchAniFreq:num":"300","GlitchAniStr:num":"30","FilterTV":"","TV:eval":"true","TVLineThickness:num":"5","TVCorner:num":"0.3","TVAni:eval":"true","TVAniSpeed:num":"0.25"}
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
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param FilterNoise
 * @text Noise
 *
 * @param Noise:eval
 * @text Noise Effect?
 * @parent FilterNoise
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Apply the target with a noise effect?
 * @default true
 *
 * @param NoiseRate:num
 * @text Noise Rate
 * @parent FilterNoise
 * @desc Noise rate to be used with the target.
 * @default 0.3
 *
 * @param NoiseAni:eval
 * @text Noise Animated
 * @parent FilterNoise
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the noise for the target?
 * @default true
 *
 * @param FilterGlitch
 * @text Glitch
 *
 * @param Glitch:eval
 * @text Glitch Effect?
 * @parent FilterGlitch
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Apply the target with a glitch effect?
 * @default true
 *
 * @param GlitchSlices:num
 * @text Glitch Slices
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Glitch slices to be used with the target.
 * @default 10
 *
 * @param GlitchOffset:num
 * @text Glitch Offset
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc Default offset value.
 * @default 100
 *
 * @param GlitchAni:eval
 * @text Glitch Animated?
 * @parent FilterGlitch
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the glitch effect?
 * @default true
 *
 * @param GlitchAniFreq:num
 * @text Glitch Frequency
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how frequent to make the glitch effect?
 * Lower = often     Higher = rarer
 * @default 300
 *
 * @param GlitchAniStr:num
 * @text Glitch Strength
 * @parent FilterGlitch
 * @type number
 * @min 1
 * @desc If animated, how strong is the glitch effect?
 * Lower = weaker     Higher = stronger
 * @default 30
 *
 * @param FilterTV
 * @text TV Lines
 *
 * @param TV:eval
 * @text TV Effect?
 * @parent FilterTV
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Apply the target with a TV effect?
 * @default true
 *
 * @param TVLineThickness:num
 * @text TV Line Thickness
 * @parent FilterTV
 * @type number
 * @min 1
 * @desc Default TV line thickness
 * Lower = thinner     Higher = thicker
 * @default 5
 *
 * @param TVCorner:num
 * @text TV Corner Size
 * @parent FilterTV
 * @desc Default TV line corner size
 * Lower = smaller     Higher = bigger
 * @default 0.3
 *
 * @param TVAni:eval
 * @text TV Animated
 * @parent FilterTV
 * @type boolean
 * @on Animate
 * @off Static
 * @desc Animate the TV?
 * @default true
 *
 * @param TVAniSpeed:num
 * @text TV Speed
 * @parent FilterTV
 * @desc Speed used to animate the TV if animated
 * Lower = slower     Higher = faster
 * @default 0.25
 *
 */
//=============================================================================

const _0x9e0d75=_0x2833;function _0x2833(_0x3581bd,_0x37d48b){const _0x3245be=_0x3245();return _0x2833=function(_0x28331f,_0x540fb3){_0x28331f=_0x28331f-0xc5;let _0xf85630=_0x3245be[_0x28331f];return _0xf85630;},_0x2833(_0x3581bd,_0x37d48b);}function _0x3245(){const _0x45991c=['549897YocpYA','844242VorXdq','createHorrorGlitch','match','normal','EnemyIndex','desaturate','sliceMax','vignetting','PictureGlitchCreate','command357','refreshRequest','createHorrorFilter','erase','setHorrorTVSpeed','EnemyTVCreate','ARRAYEVAL','createHorrorColor','Sprite_initialize','ActorColorRemove','makeDeepCopy','return\x200','splice','12152SsGuML','Game_Follower_refresh','ARRAYJSON','updateHorrorEffects','length','color','Game_Picture_erase','setHorrorEffectToValue','BattleGlitchCreate','BattleGlitchRemove','setHorrorGlitchFrequency','updateHorrorGlitchEffect','_horrorFiltersSource','trim','Spriteset_Battle_initialize','aniFrequency','removeHorrorFilter','EventId','filters','greyscale','createHorrorTV','PartyNoiseRemove','updateBitmap','colorFilter','needUpdate','removeHorrorNoise','Glitch','seed','createBackground','BattleTVCreate','Game_Interpreter_PluginCommand','picture','setHorrorEffectSettings','specialEffects','sepia','MapGlitchRemove','_horrorFilters','TVAniSpeed','description','setBattler','Scene_Title_createBackground','negative','updateHorrorNoise','sliceMin','Settings','actor','randomInt','glitch','PartyNoiseCreate','indexOf','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Sprite_Picture_initialize','lsd','PictureGlitchRemove','toUpperCase','removeHorrorColor','updateHorrorTV','PartyIndex','ConvertParams','Game_System_initialize','Title1Settings','polaroid','112945hUuuvW','HorrorEffects','STR','PictureNoiseCreate','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','tvFilter','Game_CharacterBase_initMembers','version','PictureId','update','setHorrorGlitchAnimated','ARRAYFUNC','prototype','Sprite_Battler_setBattler','GlitchAniStr','createHorrorEffect','MapClear','setHorrorGlitchOffset','GlitchFilter','createHorrorNoise','refresh','BattleNoiseRemove','ActorTVCreate','ActorClear','Spriteset_Map_initialize','CRTFilter','MapTVRemove','ARRAYNUM','includes','event','EnemyClear','PictureTVCreate','PartyGlitchRemove','PartyTVRemove','MapColorRemove','Sprite_update','toBGR','status','GlitchAniFreq','setHorrorTVAnimated','ActorColorCreate','EVAL','EventTVCreate','frameCount','exit','registerCommand','bizarro','ActorId','removeHorrorEffect','STRUCT','map','synchronizeHorrorEffects','EventTVRemove','kodachrome','PictureTVRemove','PictureClear','EventColorRemove','updateHorrorColor','ColorMatrixFilter','parse','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','PartyClear','4xtgiiS','BattleColorCreate','Game_Screen_clear','13041htyrog','setHorrorGlitchStrength','NoiseRate','animated','push','initMembers','type','Game_Player_refresh','noiseFilter','browni','ActorTVRemove','setHorrorGlitchSlices','ActorGlitchRemove','PartyGlitchCreate','toLowerCase','lineWidth','_horrorFiltersGlitchSpecial','aniStrength','setLastPluginCommandInterpreter','removeHorrorGlitch','leader','EnemyGlitchCreate','random','_lastPluginCommandInterpreter','Filter','_backSprite2','setHorrorNoiseRate','getLastPluginCommandInterpreter','Game_Picture_initialize','ceil','BattleTVRemove','technicolor','slices','MapNoiseRemove','blackAndWhite','412875sQaSbi','synchronizeHorrorFiltersWithSource','vintage','Noise','Sprite_Picture_updateBitmap','format','MapNoiseCreate','MapGlitchCreate','PartyColorRemove','EventClear','NoiseAni','noise','MapTVCreate','ActorNoiseCreate','RemoveHorrorEffects','clear','call','setHorrorTVLineThickness','Title2Settings','PictureNoiseRemove','_backSprite1','EventColorCreate','GlitchOffset','EnemyColorCreate','applyTitleHorrorEffects','members','GlitchSlices','name','reset','EventNoiseCreate','2RHRJmR','GlitchAni','time','offset','_eventId','NoiseFilter','filter','setHorrorTVCornerSize','removeHorrorTV','ActorGlitchCreate','updateHorrorGlitch','90499hreYZX','clearHorrorEffects','Sprite_Character_initialize','initialize','visible','EventNoiseRemove','Game_BattlerBase_initialize','aniSpeed','glitchFilter','predator','PartyTVCreate'];_0x3245=function(){return _0x45991c;};return _0x3245();}(function(_0x3f9b60,_0x547c41){const _0x1ecd1c=_0x2833,_0x4bdbff=_0x3f9b60();while(!![]){try{const _0x2c0463=parseInt(_0x1ecd1c(0x133))/0x1*(parseInt(_0x1ecd1c(0x128))/0x2)+parseInt(_0x1ecd1c(0x13e))/0x3*(parseInt(_0x1ecd1c(0xe4))/0x4)+parseInt(_0x1ecd1c(0x193))/0x5+-parseInt(_0x1ecd1c(0x13f))/0x6+-parseInt(_0x1ecd1c(0xe7))/0x7+parseInt(_0x1ecd1c(0x155))/0x8+-parseInt(_0x1ecd1c(0x10a))/0x9;if(_0x2c0463===_0x547c41)break;else _0x4bdbff['push'](_0x4bdbff['shift']());}catch(_0x56d31f){_0x4bdbff['push'](_0x4bdbff['shift']());}}}(_0x3245,0x1ab95));var label=_0x9e0d75(0x194),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x9e0d75(0x12e)](function(_0x27acd0){const _0x1a8ee5=_0x9e0d75;return _0x27acd0[_0x1a8ee5(0xcb)]&&_0x27acd0[_0x1a8ee5(0x17b)][_0x1a8ee5(0x1af)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x9e0d75(0x181)]||{},VisuMZ[_0x9e0d75(0x18f)]=function(_0x539118,_0x124206){const _0xe7cc03=_0x9e0d75;for(const _0x1f1765 in _0x124206){if(_0x1f1765[_0xe7cc03(0x141)](/(.*):(.*)/i)){const _0x5ba8ca=String(RegExp['$1']),_0x3afbe4=String(RegExp['$2'])[_0xe7cc03(0x18b)]()[_0xe7cc03(0x162)]();let _0x38d7e2,_0x71fccc,_0x194f72;switch(_0x3afbe4){case'NUM':_0x38d7e2=_0x124206[_0x1f1765]!==''?Number(_0x124206[_0x1f1765]):0x0;break;case _0xe7cc03(0x1ae):_0x71fccc=_0x124206[_0x1f1765]!==''?JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765]):[],_0x38d7e2=_0x71fccc['map'](_0x54cee7=>Number(_0x54cee7));break;case _0xe7cc03(0xcf):_0x38d7e2=_0x124206[_0x1f1765]!==''?eval(_0x124206[_0x1f1765]):null;break;case _0xe7cc03(0x14e):_0x71fccc=_0x124206[_0x1f1765]!==''?JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765]):[],_0x38d7e2=_0x71fccc[_0xe7cc03(0xd8)](_0x508918=>eval(_0x508918));break;case'JSON':_0x38d7e2=_0x124206[_0x1f1765]!==''?JSON['parse'](_0x124206[_0x1f1765]):'';break;case _0xe7cc03(0x157):_0x71fccc=_0x124206[_0x1f1765]!==''?JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765]):[],_0x38d7e2=_0x71fccc[_0xe7cc03(0xd8)](_0x4c2fd4=>JSON[_0xe7cc03(0xe1)](_0x4c2fd4));break;case'FUNC':_0x38d7e2=_0x124206[_0x1f1765]!==''?new Function(JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765])):new Function(_0xe7cc03(0x153));break;case _0xe7cc03(0x19e):_0x71fccc=_0x124206[_0x1f1765]!==''?JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765]):[],_0x38d7e2=_0x71fccc[_0xe7cc03(0xd8)](_0x3daef1=>new Function(JSON[_0xe7cc03(0xe1)](_0x3daef1)));break;case _0xe7cc03(0x195):_0x38d7e2=_0x124206[_0x1f1765]!==''?String(_0x124206[_0x1f1765]):'';break;case'ARRAYSTR':_0x71fccc=_0x124206[_0x1f1765]!==''?JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765]):[],_0x38d7e2=_0x71fccc[_0xe7cc03(0xd8)](_0x1eb278=>String(_0x1eb278));break;case _0xe7cc03(0xd7):_0x194f72=_0x124206[_0x1f1765]!==''?JSON['parse'](_0x124206[_0x1f1765]):{},_0x38d7e2=VisuMZ['ConvertParams']({},_0x194f72);break;case'ARRAYSTRUCT':_0x71fccc=_0x124206[_0x1f1765]!==''?JSON[_0xe7cc03(0xe1)](_0x124206[_0x1f1765]):[],_0x38d7e2=_0x71fccc[_0xe7cc03(0xd8)](_0x56a1f5=>VisuMZ['ConvertParams']({},JSON[_0xe7cc03(0xe1)](_0x56a1f5)));break;default:continue;}_0x539118[_0x5ba8ca]=_0x38d7e2;}}return _0x539118;},(_0x489d4b=>{const _0x3d9940=_0x9e0d75,_0x887b7d=_0x489d4b[_0x3d9940(0x125)];for(const _0x39ba01 of dependencies){if(!Imported[_0x39ba01]){alert(_0x3d9940(0x197)[_0x3d9940(0x10f)](_0x887b7d,_0x39ba01)),SceneManager[_0x3d9940(0xd2)]();break;}}const _0x4ec06a=_0x489d4b[_0x3d9940(0x17b)];if(_0x4ec06a['match'](/\[Version[ ](.*?)\]/i)){const _0x4ffbb8=Number(RegExp['$1']);_0x4ffbb8!==VisuMZ[label][_0x3d9940(0x19a)]&&(alert(_0x3d9940(0xe2)[_0x3d9940(0x10f)](_0x887b7d,_0x4ffbb8)),SceneManager['exit']());}if(_0x4ec06a['match'](/\[Tier[ ](\d+)\]/i)){const _0x2469a8=Number(RegExp['$1']);_0x2469a8<tier?(alert(_0x3d9940(0x187)[_0x3d9940(0x10f)](_0x887b7d,_0x2469a8,tier)),SceneManager[_0x3d9940(0xd2)]()):tier=Math['max'](_0x2469a8,tier);}VisuMZ[_0x3d9940(0x18f)](VisuMZ[label][_0x3d9940(0x181)],_0x489d4b['parameters']);})(pluginData),VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x118)]=function(_0x10efea){const _0x2e191c=_0x9e0d75;if(!_0x10efea)return;_0x10efea[_0x2e191c(0xd6)](_0x2e191c(0x115)),_0x10efea['removeHorrorEffect']('glitch'),_0x10efea[_0x2e191c(0xd6)]('tv'),_0x10efea[_0x2e191c(0xd6)](_0x2e191c(0x15a)),_0x10efea[_0x2e191c(0x134)]();},PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],'BattleClear',_0x1196e6=>{const _0xf74daa=_0x9e0d75,_0x4f79df=[$gameSystem];for(const _0x562d84 of _0x4f79df){if(!_0x562d84)continue;VisuMZ[_0xf74daa(0x194)][_0xf74daa(0x118)](_0x562d84);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xe5),_0x4d0819=>{const _0x56e0ba=_0x9e0d75;VisuMZ[_0x56e0ba(0x18f)](_0x4d0819,_0x4d0819);const _0x528151=[$gameSystem],_0x319f46=_0x56e0ba(0x15a);for(const _0x272948 of _0x528151){if(!_0x272948)continue;_0x272948[_0x56e0ba(0x175)](_0x319f46,_0x4d0819);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],'BattleColorRemove',_0x48a6d6=>{const _0x184c9f=_0x9e0d75,_0x3b91cf=[$gameSystem];for(const _0x4517d6 of _0x3b91cf){if(!_0x4517d6)continue;_0x4517d6[_0x184c9f(0xd6)](_0x184c9f(0x15a));}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x15d),_0x26ce3f=>{const _0x539fdc=_0x9e0d75;VisuMZ[_0x539fdc(0x18f)](_0x26ce3f,_0x26ce3f);const _0x547610=[$gameSystem],_0x5dbd9e=_0x539fdc(0x184);_0x26ce3f['sliceMin']=Math[_0x539fdc(0x104)](_0x26ce3f[_0x539fdc(0x107)]/0x2),_0x26ce3f[_0x539fdc(0x145)]=_0x26ce3f['slices'],_0x26ce3f[_0x539fdc(0x149)]=!![];for(const _0x1a4fc1 of _0x547610){if(!_0x1a4fc1)continue;_0x1a4fc1[_0x539fdc(0x175)](_0x5dbd9e,_0x26ce3f);}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x15e),_0x1bb47e=>{const _0x2d90ea=_0x9e0d75,_0x33c108=[$gameSystem];for(const _0x4133cf of _0x33c108){if(!_0x4133cf)continue;_0x4133cf[_0x2d90ea(0xd6)](_0x2d90ea(0x184));}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],'BattleNoiseCreate',_0x5e2b13=>{const _0x18689a=_0x9e0d75;VisuMZ['ConvertParams'](_0x5e2b13,_0x5e2b13);const _0x10b83b=[$gameSystem],_0x4e737c=_0x18689a(0x115);for(const _0x3e2c1b of _0x10b83b){if(!_0x3e2c1b)continue;_0x3e2c1b[_0x18689a(0x175)](_0x4e737c,_0x5e2b13);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x1a8),_0x510467=>{const _0x38c255=_0x9e0d75,_0x3be098=[$gameSystem];for(const _0x1945f5 of _0x3be098){if(!_0x1945f5)continue;_0x1945f5[_0x38c255(0xd6)](_0x38c255(0x115));}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x172),_0x319269=>{const _0x423a92=_0x9e0d75;VisuMZ[_0x423a92(0x18f)](_0x319269,_0x319269);const _0x14d3c9=[$gameSystem],_0x22012e='tv';for(const _0x41a181 of _0x14d3c9){if(!_0x41a181)continue;_0x41a181['setHorrorEffectSettings'](_0x22012e,_0x319269);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x105),_0x1f259b=>{const _0x5ee63f=_0x9e0d75,_0x3d716b=[$gameSystem];for(const _0x359258 of _0x3d716b){if(!_0x359258)continue;_0x359258[_0x5ee63f(0xd6)]('tv');}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x1a3),_0x1192c2=>{const _0x125bab=_0x9e0d75,_0xee5327=[$gameScreen];for(const _0x24bf1e of _0xee5327){if(!_0x24bf1e)continue;VisuMZ[_0x125bab(0x194)][_0x125bab(0x118)](_0x24bf1e);}}),PluginManager['registerCommand'](pluginData['name'],'MapColorCreate',_0x5eef92=>{const _0x3885d2=_0x9e0d75;VisuMZ[_0x3885d2(0x18f)](_0x5eef92,_0x5eef92);const _0x46d8c3=[$gameScreen],_0x21e251=_0x3885d2(0x15a);for(const _0x342bb7 of _0x46d8c3){if(!_0x342bb7)continue;_0x342bb7['setHorrorEffectSettings'](_0x21e251,_0x5eef92);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xc8),_0xd506ab=>{const _0x2cdbbb=_0x9e0d75,_0x381169=[$gameScreen];for(const _0x5f5e77 of _0x381169){if(!_0x5f5e77)continue;_0x5f5e77[_0x2cdbbb(0xd6)]('color');}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x111),_0xfea98=>{const _0x228edc=_0x9e0d75;VisuMZ[_0x228edc(0x18f)](_0xfea98,_0xfea98);const _0x1181eb=[$gameScreen],_0x14cf6f=_0x228edc(0x184);_0xfea98['sliceMin']=Math[_0x228edc(0x104)](_0xfea98[_0x228edc(0x107)]/0x2),_0xfea98[_0x228edc(0x145)]=_0xfea98[_0x228edc(0x107)],_0xfea98[_0x228edc(0x149)]=!![];for(const _0x4f79ef of _0x1181eb){if(!_0x4f79ef)continue;_0x4f79ef[_0x228edc(0x175)](_0x14cf6f,_0xfea98);}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x178),_0x25ed50=>{const _0x5e5070=_0x9e0d75,_0x1e4c1f=[$gameScreen];for(const _0x39de12 of _0x1e4c1f){if(!_0x39de12)continue;_0x39de12[_0x5e5070(0xd6)](_0x5e5070(0x184));}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0x110),_0x679a12=>{const _0x5be326=_0x9e0d75;VisuMZ[_0x5be326(0x18f)](_0x679a12,_0x679a12);const _0x2b662c=[$gameScreen],_0xeb4a55=_0x5be326(0x115);for(const _0x236c08 of _0x2b662c){if(!_0x236c08)continue;_0x236c08[_0x5be326(0x175)](_0xeb4a55,_0x679a12);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x108),_0x59073f=>{const _0x274665=_0x9e0d75,_0x38f06c=[$gameScreen];for(const _0x8c9864 of _0x38f06c){if(!_0x8c9864)continue;_0x8c9864['removeHorrorEffect'](_0x274665(0x115));}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x116),_0x237de1=>{const _0x3b4ae0=_0x9e0d75;VisuMZ[_0x3b4ae0(0x18f)](_0x237de1,_0x237de1);const _0x319f30=[$gameScreen],_0x2080a3='tv';for(const _0x1d5b78 of _0x319f30){if(!_0x1d5b78)continue;_0x1d5b78[_0x3b4ae0(0x175)](_0x2080a3,_0x237de1);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x1ad),_0x163873=>{const _0x183b89=_0x9e0d75,_0x23a8e9=[$gameScreen];for(const _0x458d1a of _0x23a8e9){if(!_0x458d1a)continue;_0x458d1a[_0x183b89(0xd6)]('tv');}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x113),_0x41cb8b=>{const _0x40b804=_0x9e0d75;VisuMZ['ConvertParams'](_0x41cb8b,_0x41cb8b);const _0x348876=$gameTemp[_0x40b804(0x102)](),_0x55e5c5=_0x41cb8b[_0x40b804(0x166)][_0x40b804(0xd8)](_0x4650ea=>$gameMap[_0x40b804(0x1b0)](_0x4650ea>0x0?_0x4650ea:_0x348876['_eventId']));for(const _0x41d458 of _0x55e5c5){if(!_0x41d458)continue;VisuMZ[_0x40b804(0x194)][_0x40b804(0x118)](_0x41d458);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x11f),_0x3a35ab=>{const _0x2532c7=_0x9e0d75;VisuMZ['ConvertParams'](_0x3a35ab,_0x3a35ab);const _0x2e589e=$gameTemp[_0x2532c7(0x102)](),_0x27b9fb=_0x3a35ab[_0x2532c7(0x166)]['map'](_0x42bb01=>$gameMap[_0x2532c7(0x1b0)](_0x42bb01>0x0?_0x42bb01:_0x2e589e['_eventId'])),_0xbe8d11=_0x2532c7(0x15a);for(const _0x12d8da of _0x27b9fb){if(!_0x12d8da)continue;_0x12d8da[_0x2532c7(0x175)](_0xbe8d11,_0x3a35ab);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xde),_0xd6fe00=>{const _0x560512=_0x9e0d75,_0x4cb54b=$gameTemp[_0x560512(0x102)](),_0xca8ec8=_0xd6fe00[_0x560512(0x166)][_0x560512(0xd8)](_0x11d137=>$gameMap['event'](_0x11d137>0x0?_0x11d137:_0x4cb54b[_0x560512(0x12c)]));for(const _0x62802a of _0xca8ec8){if(!_0x62802a)continue;_0x62802a[_0x560512(0xd6)](_0x560512(0x15a));}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],'EventGlitchCreate',_0x171bb1=>{const _0x41485d=_0x9e0d75;VisuMZ[_0x41485d(0x18f)](_0x171bb1,_0x171bb1);const _0x3c35d8=$gameTemp[_0x41485d(0x102)](),_0x584d3e=_0x171bb1[_0x41485d(0x166)]['map'](_0x7575b9=>$gameMap[_0x41485d(0x1b0)](_0x7575b9>0x0?_0x7575b9:_0x3c35d8[_0x41485d(0x12c)])),_0x66dbfb=_0x41485d(0x184);_0x171bb1[_0x41485d(0x180)]=Math[_0x41485d(0x104)](_0x171bb1[_0x41485d(0x107)]/0x2),_0x171bb1[_0x41485d(0x145)]=_0x171bb1[_0x41485d(0x107)],_0x171bb1['refreshRequest']=!![];for(const _0x3ddbe2 of _0x584d3e){if(!_0x3ddbe2)continue;_0x3ddbe2[_0x41485d(0x175)](_0x66dbfb,_0x171bb1);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],'EventGlitchRemove',_0x268ed0=>{const _0x745a60=_0x9e0d75;VisuMZ[_0x745a60(0x18f)](_0x268ed0,_0x268ed0);const _0x353e21=$gameTemp['getLastPluginCommandInterpreter'](),_0x157e91=_0x268ed0['EventId'][_0x745a60(0xd8)](_0x3c91a2=>$gameMap['event'](_0x3c91a2>0x0?_0x3c91a2:_0x353e21[_0x745a60(0x12c)]));for(const _0x4fabf9 of _0x157e91){if(!_0x4fabf9)continue;_0x4fabf9['removeHorrorEffect']('glitch');}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x127),_0x1b6ba0=>{const _0x186797=_0x9e0d75;VisuMZ[_0x186797(0x18f)](_0x1b6ba0,_0x1b6ba0);const _0x5811c3=$gameTemp['getLastPluginCommandInterpreter'](),_0x361dcb=_0x1b6ba0['EventId'][_0x186797(0xd8)](_0x20ae1d=>$gameMap['event'](_0x20ae1d>0x0?_0x20ae1d:_0x5811c3[_0x186797(0x12c)])),_0x222b19=_0x186797(0x115);for(const _0x4305d5 of _0x361dcb){if(!_0x4305d5)continue;_0x4305d5['setHorrorEffectSettings'](_0x222b19,_0x1b6ba0);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0x138),_0xef0a46=>{const _0x53a97b=_0x9e0d75;VisuMZ[_0x53a97b(0x18f)](_0xef0a46,_0xef0a46);const _0x43481c=$gameTemp[_0x53a97b(0x102)](),_0x77f6fb=_0xef0a46[_0x53a97b(0x166)][_0x53a97b(0xd8)](_0x1c5ddf=>$gameMap[_0x53a97b(0x1b0)](_0x1c5ddf>0x0?_0x1c5ddf:_0x43481c['_eventId']));for(const _0x475b24 of _0x77f6fb){if(!_0x475b24)continue;_0x475b24[_0x53a97b(0xd6)](_0x53a97b(0x115));}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xd0),_0x13eec2=>{const _0x2b1bb7=_0x9e0d75;VisuMZ['ConvertParams'](_0x13eec2,_0x13eec2);const _0x431b71=$gameTemp['getLastPluginCommandInterpreter'](),_0x65cf5d=_0x13eec2[_0x2b1bb7(0x166)]['map'](_0x3ec9c7=>$gameMap[_0x2b1bb7(0x1b0)](_0x3ec9c7>0x0?_0x3ec9c7:_0x431b71[_0x2b1bb7(0x12c)])),_0xfebfaf='tv';for(const _0x3c34ba of _0x65cf5d){if(!_0x3c34ba)continue;_0x3c34ba[_0x2b1bb7(0x175)](_0xfebfaf,_0x13eec2);}}),PluginManager['registerCommand'](pluginData['name'],_0x9e0d75(0xda),_0x4ecbe6=>{const _0x4f410a=_0x9e0d75;VisuMZ['ConvertParams'](_0x4ecbe6,_0x4ecbe6);const _0x4d1f29=$gameTemp[_0x4f410a(0x102)](),_0x1c1e0f=_0x4ecbe6[_0x4f410a(0x166)][_0x4f410a(0xd8)](_0x3a065d=>$gameMap[_0x4f410a(0x1b0)](_0x3a065d>0x0?_0x3a065d:_0x4d1f29[_0x4f410a(0x12c)]));for(const _0x21d610 of _0x1c1e0f){if(!_0x21d610)continue;_0x21d610[_0x4f410a(0xd6)]('tv');}}),PluginManager['registerCommand'](pluginData['name'],_0x9e0d75(0xdd),_0x483bea=>{const _0x31cbce=_0x9e0d75;VisuMZ[_0x31cbce(0x18f)](_0x483bea,_0x483bea);const _0x569f60=_0x483bea['PictureId'][_0x31cbce(0xd8)](_0x5ab578=>$gameScreen[_0x31cbce(0x174)](_0x5ab578));for(const _0x2cce72 of _0x569f60){if(!_0x2cce72)continue;VisuMZ[_0x31cbce(0x194)][_0x31cbce(0x118)](_0x2cce72);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],'PictureColorCreate',_0xf5a656=>{const _0x39dea8=_0x9e0d75;VisuMZ[_0x39dea8(0x18f)](_0xf5a656,_0xf5a656);const _0x20d4ef=_0xf5a656[_0x39dea8(0x19b)]['map'](_0x38cd53=>$gameScreen[_0x39dea8(0x174)](_0x38cd53)),_0x5c7765=_0x39dea8(0x15a);for(const _0x411cc2 of _0x20d4ef){if(!_0x411cc2)continue;_0x411cc2[_0x39dea8(0x175)](_0x5c7765,_0xf5a656);}}),PluginManager['registerCommand'](pluginData['name'],'PictureColorRemove',_0x14464a=>{const _0x267ebd=_0x9e0d75,_0x2b914e=_0x14464a['PictureId'][_0x267ebd(0xd8)](_0x43edf2=>$gameScreen['picture'](_0x43edf2));for(const _0x1ff32a of _0x2b914e){if(!_0x1ff32a)continue;_0x1ff32a[_0x267ebd(0xd6)](_0x267ebd(0x15a));}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x147),_0x3028d8=>{const _0x3bf4dd=_0x9e0d75;VisuMZ[_0x3bf4dd(0x18f)](_0x3028d8,_0x3028d8);const _0x1f48c1=_0x3028d8[_0x3bf4dd(0x19b)][_0x3bf4dd(0xd8)](_0xa49949=>$gameScreen[_0x3bf4dd(0x174)](_0xa49949)),_0x5e19dd=_0x3bf4dd(0x184);_0x3028d8[_0x3bf4dd(0x180)]=Math[_0x3bf4dd(0x104)](_0x3028d8[_0x3bf4dd(0x107)]/0x2),_0x3028d8[_0x3bf4dd(0x145)]=_0x3028d8[_0x3bf4dd(0x107)],_0x3028d8[_0x3bf4dd(0x149)]=!![];for(const _0x4123f2 of _0x1f48c1){if(!_0x4123f2)continue;_0x4123f2['setHorrorEffectSettings'](_0x5e19dd,_0x3028d8);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x18a),_0x39a265=>{const _0x170215=_0x9e0d75;VisuMZ[_0x170215(0x18f)](_0x39a265,_0x39a265);const _0x5dc9db=_0x39a265[_0x170215(0x19b)]['map'](_0x45b5ac=>$gameScreen[_0x170215(0x174)](_0x45b5ac));for(const _0x2508e2 of _0x5dc9db){if(!_0x2508e2)continue;_0x2508e2[_0x170215(0xd6)]('glitch');}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0x196),_0x4b45d3=>{const _0x1ffd41=_0x9e0d75;VisuMZ['ConvertParams'](_0x4b45d3,_0x4b45d3);const _0x2d837d=_0x4b45d3[_0x1ffd41(0x19b)][_0x1ffd41(0xd8)](_0x19af0b=>$gameScreen[_0x1ffd41(0x174)](_0x19af0b)),_0x1c4bc3=_0x1ffd41(0x115);for(const _0x15afa2 of _0x2d837d){if(!_0x15afa2)continue;_0x15afa2['setHorrorEffectSettings'](_0x1c4bc3,_0x4b45d3);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0x11d),_0x2a48c1=>{const _0x13edf3=_0x9e0d75;VisuMZ['ConvertParams'](_0x2a48c1,_0x2a48c1);const _0x286180=_0x2a48c1[_0x13edf3(0x19b)][_0x13edf3(0xd8)](_0x55ba8a=>$gameScreen[_0x13edf3(0x174)](_0x55ba8a));for(const _0x5c7d07 of _0x286180){if(!_0x5c7d07)continue;_0x5c7d07['removeHorrorEffect'](_0x13edf3(0x115));}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xc5),_0x1bb0e6=>{const _0x4ccb90=_0x9e0d75;VisuMZ[_0x4ccb90(0x18f)](_0x1bb0e6,_0x1bb0e6);const _0x21bbef=_0x1bb0e6[_0x4ccb90(0x19b)][_0x4ccb90(0xd8)](_0x1bba81=>$gameScreen[_0x4ccb90(0x174)](_0x1bba81)),_0x5ba485='tv';for(const _0x522b71 of _0x21bbef){if(!_0x522b71)continue;_0x522b71[_0x4ccb90(0x175)](_0x5ba485,_0x1bb0e6);}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xdc),_0x424796=>{const _0x45a92c=_0x9e0d75;VisuMZ[_0x45a92c(0x18f)](_0x424796,_0x424796);const _0x1c3fc8=_0x424796[_0x45a92c(0x19b)][_0x45a92c(0xd8)](_0x1d7025=>$gameScreen[_0x45a92c(0x174)](_0x1d7025));for(const _0x4b0b42 of _0x1c3fc8){if(!_0x4b0b42)continue;_0x4b0b42['removeHorrorEffect']('tv');}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x1aa),_0x3864b4=>{const _0x36a9f1=_0x9e0d75;VisuMZ[_0x36a9f1(0x18f)](_0x3864b4,_0x3864b4);const _0x9c795d=_0x3864b4[_0x36a9f1(0xd5)][_0x36a9f1(0xd8)](_0x353a68=>$gameActors[_0x36a9f1(0x182)](_0x353a68));for(const _0x221764 of _0x9c795d){if(!_0x221764)continue;VisuMZ[_0x36a9f1(0x194)][_0x36a9f1(0x118)](_0x221764);}$gamePlayer[_0x36a9f1(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xce),_0x3acba5=>{const _0x37daf2=_0x9e0d75;VisuMZ[_0x37daf2(0x18f)](_0x3acba5,_0x3acba5);const _0x2ef910=_0x3acba5[_0x37daf2(0xd5)][_0x37daf2(0xd8)](_0x2af441=>$gameActors[_0x37daf2(0x182)](_0x2af441)),_0x106dd2='color';for(const _0x347b3e of _0x2ef910){if(!_0x347b3e)continue;_0x347b3e[_0x37daf2(0x175)](_0x106dd2,_0x3acba5);}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x151),_0x5f29b9=>{const _0xd4790b=_0x9e0d75,_0x1f6064=_0x5f29b9['ActorId'][_0xd4790b(0xd8)](_0x399734=>$gameActors['actor'](_0x399734));for(const _0x55590f of _0x1f6064){if(!_0x55590f)continue;_0x55590f['removeHorrorEffect'](_0xd4790b(0x15a));}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x131),_0x38d4fd=>{const _0x230d5f=_0x9e0d75;VisuMZ[_0x230d5f(0x18f)](_0x38d4fd,_0x38d4fd);const _0x459c28=_0x38d4fd[_0x230d5f(0xd5)][_0x230d5f(0xd8)](_0x5d1591=>$gameActors['actor'](_0x5d1591)),_0x3f5823=_0x230d5f(0x184);_0x38d4fd[_0x230d5f(0x180)]=Math[_0x230d5f(0x104)](_0x38d4fd['slices']/0x2),_0x38d4fd[_0x230d5f(0x145)]=_0x38d4fd[_0x230d5f(0x107)],_0x38d4fd[_0x230d5f(0x149)]=!![];for(const _0x4bf608 of _0x459c28){if(!_0x4bf608)continue;_0x4bf608[_0x230d5f(0x175)](_0x3f5823,_0x38d4fd);}$gamePlayer[_0x230d5f(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xf3),_0x14ad98=>{const _0x4419cb=_0x9e0d75;VisuMZ[_0x4419cb(0x18f)](_0x14ad98,_0x14ad98);const _0xfa0bbe=_0x14ad98[_0x4419cb(0xd5)][_0x4419cb(0xd8)](_0x5e5a44=>$gameActors[_0x4419cb(0x182)](_0x5e5a44));for(const _0x3239c9 of _0xfa0bbe){if(!_0x3239c9)continue;_0x3239c9[_0x4419cb(0xd6)](_0x4419cb(0x184));}$gamePlayer['refresh']();}),PluginManager['registerCommand'](pluginData['name'],_0x9e0d75(0x117),_0x5f0683=>{const _0xfdd9bd=_0x9e0d75;VisuMZ[_0xfdd9bd(0x18f)](_0x5f0683,_0x5f0683);const _0x1d0f47=_0x5f0683[_0xfdd9bd(0xd5)][_0xfdd9bd(0xd8)](_0x3717c4=>$gameActors[_0xfdd9bd(0x182)](_0x3717c4)),_0x5ec6d9='noise';for(const _0x19e76b of _0x1d0f47){if(!_0x19e76b)continue;_0x19e76b[_0xfdd9bd(0x175)](_0x5ec6d9,_0x5f0683);}$gamePlayer[_0xfdd9bd(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],'ActorNoiseRemove',_0x34bf79=>{const _0x961bd2=_0x9e0d75;VisuMZ[_0x961bd2(0x18f)](_0x34bf79,_0x34bf79);const _0x189fe6=_0x34bf79[_0x961bd2(0xd5)][_0x961bd2(0xd8)](_0x178d14=>$gameActors[_0x961bd2(0x182)](_0x178d14));for(const _0x5e7151 of _0x189fe6){if(!_0x5e7151)continue;_0x5e7151[_0x961bd2(0xd6)](_0x961bd2(0x115));}$gamePlayer[_0x961bd2(0x1a7)]();}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x1a9),_0x2d1a69=>{const _0x154edc=_0x9e0d75;VisuMZ['ConvertParams'](_0x2d1a69,_0x2d1a69);const _0xb4d401=_0x2d1a69[_0x154edc(0xd5)][_0x154edc(0xd8)](_0x26cd2c=>$gameActors[_0x154edc(0x182)](_0x26cd2c)),_0xb9f53d='tv';for(const _0x4e1ba3 of _0xb4d401){if(!_0x4e1ba3)continue;_0x4e1ba3[_0x154edc(0x175)](_0xb9f53d,_0x2d1a69);}$gamePlayer['refresh']();}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xf1),_0x28c51d=>{const _0x1fb251=_0x9e0d75;VisuMZ[_0x1fb251(0x18f)](_0x28c51d,_0x28c51d);const _0x62d51b=_0x28c51d[_0x1fb251(0xd5)][_0x1fb251(0xd8)](_0x161f58=>$gameActors[_0x1fb251(0x182)](_0x161f58));for(const _0x3eb1d1 of _0x62d51b){if(!_0x3eb1d1)continue;_0x3eb1d1[_0x1fb251(0xd6)]('tv');}$gamePlayer['refresh']();}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xe3),_0x2fe35b=>{const _0x220fb5=_0x9e0d75;VisuMZ[_0x220fb5(0x18f)](_0x2fe35b,_0x2fe35b);const _0x357009=_0x2fe35b[_0x220fb5(0x18e)][_0x220fb5(0xd8)](_0x516b00=>$gameParty[_0x220fb5(0x123)]()[_0x516b00]);for(const _0x2d0f57 of _0x357009){if(!_0x2d0f57)continue;VisuMZ[_0x220fb5(0x194)][_0x220fb5(0x118)](_0x2d0f57);}$gamePlayer[_0x220fb5(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],'PartyColorCreate',_0x5f1be0=>{const _0x56222b=_0x9e0d75;VisuMZ[_0x56222b(0x18f)](_0x5f1be0,_0x5f1be0);const _0xa2bbca=_0x5f1be0['PartyIndex'][_0x56222b(0xd8)](_0x948a11=>$gameParty[_0x56222b(0x123)]()[_0x948a11]),_0x4a66f2=_0x56222b(0x15a);for(const _0x48bf4d of _0xa2bbca){if(!_0x48bf4d)continue;_0x48bf4d[_0x56222b(0x175)](_0x4a66f2,_0x5f1be0);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x112),_0x4484b0=>{const _0x280019=_0x9e0d75,_0x5d3b04=_0x4484b0[_0x280019(0x18e)][_0x280019(0xd8)](_0x1fe33c=>$gameParty[_0x280019(0x123)]()[_0x1fe33c]);for(const _0x5933a1 of _0x5d3b04){if(!_0x5933a1)continue;_0x5933a1['removeHorrorEffect'](_0x280019(0x15a));}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xf4),_0x3985e2=>{const _0x578b31=_0x9e0d75;VisuMZ[_0x578b31(0x18f)](_0x3985e2,_0x3985e2);const _0x3b9bef=_0x3985e2[_0x578b31(0x18e)][_0x578b31(0xd8)](_0x56a26a=>$gameParty['members']()[_0x56a26a]),_0x43f52f=_0x578b31(0x184);_0x3985e2[_0x578b31(0x180)]=Math[_0x578b31(0x104)](_0x3985e2[_0x578b31(0x107)]/0x2),_0x3985e2[_0x578b31(0x145)]=_0x3985e2['slices'],_0x3985e2[_0x578b31(0x149)]=!![];for(const _0x185080 of _0x3b9bef){if(!_0x185080)continue;_0x185080['setHorrorEffectSettings'](_0x43f52f,_0x3985e2);}$gamePlayer['refresh']();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xc6),_0x11b6f7=>{const _0x2d776a=_0x9e0d75;VisuMZ[_0x2d776a(0x18f)](_0x11b6f7,_0x11b6f7);const _0x570358=_0x11b6f7[_0x2d776a(0x18e)][_0x2d776a(0xd8)](_0x374955=>$gameParty[_0x2d776a(0x123)]()[_0x374955]);for(const _0x5d7556 of _0x570358){if(!_0x5d7556)continue;_0x5d7556[_0x2d776a(0xd6)]('glitch');}$gamePlayer[_0x2d776a(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x185),_0x1f5bba=>{const _0x684a6a=_0x9e0d75;VisuMZ[_0x684a6a(0x18f)](_0x1f5bba,_0x1f5bba);const _0x9c86ce=_0x1f5bba[_0x684a6a(0x18e)][_0x684a6a(0xd8)](_0x19d00f=>$gameParty[_0x684a6a(0x123)]()[_0x19d00f]),_0x526ee4=_0x684a6a(0x115);for(const _0x3ae3bc of _0x9c86ce){if(!_0x3ae3bc)continue;_0x3ae3bc[_0x684a6a(0x175)](_0x526ee4,_0x1f5bba);}$gamePlayer[_0x684a6a(0x1a7)]();}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x16a),_0x3f8b9b=>{const _0xde72f0=_0x9e0d75;VisuMZ[_0xde72f0(0x18f)](_0x3f8b9b,_0x3f8b9b);const _0x2b787e=_0x3f8b9b[_0xde72f0(0x18e)][_0xde72f0(0xd8)](_0x123b52=>$gameParty[_0xde72f0(0x123)]()[_0x123b52]);for(const _0x4037b8 of _0x2b787e){if(!_0x4037b8)continue;_0x4037b8[_0xde72f0(0xd6)]('noise');}$gamePlayer['refresh']();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x13d),_0x59afdc=>{const _0x1ecfa7=_0x9e0d75;VisuMZ[_0x1ecfa7(0x18f)](_0x59afdc,_0x59afdc);const _0xe3ca05=_0x59afdc[_0x1ecfa7(0x18e)][_0x1ecfa7(0xd8)](_0x4f7ef9=>$gameParty[_0x1ecfa7(0x123)]()[_0x4f7ef9]),_0x31972d='tv';for(const _0x269bfb of _0xe3ca05){if(!_0x269bfb)continue;_0x269bfb['setHorrorEffectSettings'](_0x31972d,_0x59afdc);}$gamePlayer[_0x1ecfa7(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0xc7),_0x179f06=>{const _0x18bc3b=_0x9e0d75;VisuMZ[_0x18bc3b(0x18f)](_0x179f06,_0x179f06);const _0x13e921=_0x179f06['PartyIndex'][_0x18bc3b(0xd8)](_0x5bd4ce=>$gameParty[_0x18bc3b(0x123)]()[_0x5bd4ce]);for(const _0x4a8303 of _0x13e921){if(!_0x4a8303)continue;_0x4a8303[_0x18bc3b(0xd6)]('tv');}$gamePlayer[_0x18bc3b(0x1a7)]();}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x1b1),_0x308d05=>{const _0x31e01f=_0x9e0d75;VisuMZ[_0x31e01f(0x18f)](_0x308d05,_0x308d05);const _0x2aa6b6=_0x308d05[_0x31e01f(0x143)][_0x31e01f(0xd8)](_0x27e2f0=>$gameTroop[_0x31e01f(0x123)]()[_0x27e2f0]);for(const _0x4b889c of _0x2aa6b6){if(!_0x4b889c)continue;VisuMZ['HorrorEffects'][_0x31e01f(0x118)](_0x4b889c);}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x121),_0x491b56=>{const _0x4912cf=_0x9e0d75;VisuMZ['ConvertParams'](_0x491b56,_0x491b56);const _0xe25c80=_0x491b56[_0x4912cf(0x143)]['map'](_0x4910eb=>$gameTroop[_0x4912cf(0x123)]()[_0x4910eb]),_0x5019c4=_0x4912cf(0x15a);for(const _0x4eca8d of _0xe25c80){if(!_0x4eca8d)continue;_0x4eca8d['setHorrorEffectSettings'](_0x5019c4,_0x491b56);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],'EnemyColorRemove',_0x51a134=>{const _0x124d54=_0x9e0d75,_0x384894=_0x51a134[_0x124d54(0x143)]['map'](_0x2abf33=>$gameTroop[_0x124d54(0x123)]()[_0x2abf33]);for(const _0x43e9cd of _0x384894){if(!_0x43e9cd)continue;_0x43e9cd[_0x124d54(0xd6)](_0x124d54(0x15a));}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],_0x9e0d75(0xfc),_0xafb8f=>{const _0x530d85=_0x9e0d75;VisuMZ[_0x530d85(0x18f)](_0xafb8f,_0xafb8f);const _0x337209=_0xafb8f[_0x530d85(0x143)][_0x530d85(0xd8)](_0x1ea607=>$gameTroop[_0x530d85(0x123)]()[_0x1ea607]),_0xa532cb='glitch';_0xafb8f[_0x530d85(0x180)]=Math[_0x530d85(0x104)](_0xafb8f[_0x530d85(0x107)]/0x2),_0xafb8f['sliceMax']=_0xafb8f[_0x530d85(0x107)],_0xafb8f[_0x530d85(0x149)]=!![];for(const _0x32d164 of _0x337209){if(!_0x32d164)continue;_0x32d164[_0x530d85(0x175)](_0xa532cb,_0xafb8f);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],'EnemyGlitchRemove',_0x30c5e9=>{const _0x19b88a=_0x9e0d75;VisuMZ[_0x19b88a(0x18f)](_0x30c5e9,_0x30c5e9);const _0x323cee=_0x30c5e9['EnemyIndex'][_0x19b88a(0xd8)](_0x39c62a=>$gameTroop[_0x19b88a(0x123)]()[_0x39c62a]);for(const _0x4d9149 of _0x323cee){if(!_0x4d9149)continue;_0x4d9149[_0x19b88a(0xd6)](_0x19b88a(0x184));}}),PluginManager[_0x9e0d75(0xd3)](pluginData[_0x9e0d75(0x125)],'EnemyNoiseCreate',_0x274b7c=>{const _0x4add20=_0x9e0d75;VisuMZ[_0x4add20(0x18f)](_0x274b7c,_0x274b7c);const _0x199de1=_0x274b7c[_0x4add20(0x143)]['map'](_0x519433=>$gameTroop[_0x4add20(0x123)]()[_0x519433]),_0xe1f644=_0x4add20(0x115);for(const _0x5bff74 of _0x199de1){if(!_0x5bff74)continue;_0x5bff74[_0x4add20(0x175)](_0xe1f644,_0x274b7c);}}),PluginManager[_0x9e0d75(0xd3)](pluginData['name'],'EnemyNoiseRemove',_0x2dd878=>{const _0x5a6105=_0x9e0d75;VisuMZ[_0x5a6105(0x18f)](_0x2dd878,_0x2dd878);const _0x4a01ec=_0x2dd878[_0x5a6105(0x143)]['map'](_0x17df0b=>$gameTroop[_0x5a6105(0x123)]()[_0x17df0b]);for(const _0x132f69 of _0x4a01ec){if(!_0x132f69)continue;_0x132f69[_0x5a6105(0xd6)](_0x5a6105(0x115));}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],_0x9e0d75(0x14d),_0x4f9d21=>{const _0x11e21d=_0x9e0d75;VisuMZ[_0x11e21d(0x18f)](_0x4f9d21,_0x4f9d21);const _0x27b254=_0x4f9d21['EnemyIndex']['map'](_0x5f57c4=>$gameTroop[_0x11e21d(0x123)]()[_0x5f57c4]),_0x543630='tv';for(const _0x557606 of _0x27b254){if(!_0x557606)continue;_0x557606[_0x11e21d(0x175)](_0x543630,_0x4f9d21);}}),PluginManager['registerCommand'](pluginData[_0x9e0d75(0x125)],'EnemyTVRemove',_0x23247d=>{const _0x24d35d=_0x9e0d75;VisuMZ[_0x24d35d(0x18f)](_0x23247d,_0x23247d);const _0x32bc0b=_0x23247d[_0x24d35d(0x143)][_0x24d35d(0xd8)](_0x31cad0=>$gameTroop[_0x24d35d(0x123)]()[_0x31cad0]);for(const _0xc836e7 of _0x32bc0b){if(!_0xc836e7)continue;_0xc836e7[_0x24d35d(0xd6)]('tv');}}),Game_Temp[_0x9e0d75(0x19f)][_0x9e0d75(0xf9)]=function(_0x23bb8a){const _0x4b7861=_0x9e0d75;this[_0x4b7861(0xfe)]=_0x23bb8a;},Game_Temp[_0x9e0d75(0x19f)][_0x9e0d75(0x102)]=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ['HorrorEffects'][_0x9e0d75(0x190)]=Game_System[_0x9e0d75(0x19f)][_0x9e0d75(0x136)],Game_System['prototype']['initialize']=function(){const _0x2e7f35=_0x9e0d75;VisuMZ[_0x2e7f35(0x194)][_0x2e7f35(0x190)][_0x2e7f35(0x11a)](this),this['clearHorrorEffects']();},Game_System[_0x9e0d75(0x19f)][_0x9e0d75(0x134)]=function(){const _0x16821d=_0x9e0d75;this[_0x16821d(0x179)]={};},Game_System[_0x9e0d75(0x19f)][_0x9e0d75(0x1a2)]=function(_0x496d0e){const _0x1cfd1e=_0x9e0d75;this[_0x1cfd1e(0x179)]===undefined&&this[_0x1cfd1e(0x134)]();if(_0x496d0e[_0x1cfd1e(0x141)](/noise/i)&&!this[_0x1cfd1e(0x179)][_0x1cfd1e(0xef)])this[_0x1cfd1e(0x179)][_0x1cfd1e(0xef)]={},this[_0x1cfd1e(0x179)][_0x1cfd1e(0xef)][_0x1cfd1e(0x115)]=0.3,this[_0x1cfd1e(0x179)]['noiseFilter'][_0x1cfd1e(0xea)]=!![],this['_horrorFilters'][_0x1cfd1e(0xef)][_0x1cfd1e(0x16d)]=!![];else{if(_0x496d0e[_0x1cfd1e(0x141)](/glitch/i)&&!this[_0x1cfd1e(0x179)][_0x1cfd1e(0x13b)])this[_0x1cfd1e(0x179)]['glitchFilter']={},this[_0x1cfd1e(0x179)][_0x1cfd1e(0x13b)][_0x1cfd1e(0x107)]=0xa,this[_0x1cfd1e(0x179)]['glitchFilter'][_0x1cfd1e(0x12b)]=0x64,this['_horrorFilters'][_0x1cfd1e(0x13b)][_0x1cfd1e(0x180)]=0x5,this['_horrorFilters'][_0x1cfd1e(0x13b)][_0x1cfd1e(0x145)]=0xa,this[_0x1cfd1e(0x179)][_0x1cfd1e(0x13b)][_0x1cfd1e(0xea)]=!![],this[_0x1cfd1e(0x179)]['glitchFilter'][_0x1cfd1e(0x164)]=0x12c,this[_0x1cfd1e(0x179)][_0x1cfd1e(0x13b)]['aniStrength']=0x1e,this['_horrorFilters'][_0x1cfd1e(0x13b)][_0x1cfd1e(0x16d)]=!![];else{if(_0x496d0e[_0x1cfd1e(0x141)](/tv/i)&&!this['_horrorFilters']['tvFilter'])this[_0x1cfd1e(0x179)][_0x1cfd1e(0x198)]={},this[_0x1cfd1e(0x179)][_0x1cfd1e(0x198)]['lineWidth']=0x5,this[_0x1cfd1e(0x179)][_0x1cfd1e(0x198)][_0x1cfd1e(0x146)]=0.3,this[_0x1cfd1e(0x179)][_0x1cfd1e(0x198)][_0x1cfd1e(0xea)]=!![],this[_0x1cfd1e(0x179)][_0x1cfd1e(0x198)][_0x1cfd1e(0x13a)]=0.25,this[_0x1cfd1e(0x179)][_0x1cfd1e(0x198)][_0x1cfd1e(0x16d)]=!![];else _0x496d0e[_0x1cfd1e(0x141)](/color/i)&&!this[_0x1cfd1e(0x179)][_0x1cfd1e(0x16c)]&&(this[_0x1cfd1e(0x179)][_0x1cfd1e(0x16c)]={},this[_0x1cfd1e(0x179)][_0x1cfd1e(0x16c)][_0x1cfd1e(0xed)]=_0x1cfd1e(0x142),this[_0x1cfd1e(0x179)]['colorFilter'][_0x1cfd1e(0x16d)]=!![]);}}},Game_System['prototype'][_0x9e0d75(0xd6)]=function(_0x40f86b){const _0x476594=_0x9e0d75;this['_horrorFilters']===undefined&&this[_0x476594(0x134)](),_0x40f86b+=_0x476594(0xff),this[_0x476594(0x179)][_0x40f86b]=undefined;},Game_System[_0x9e0d75(0x19f)][_0x9e0d75(0x15c)]=function(_0x479459,_0xe51bab,_0xa92a38){const _0x5e1ab1=_0x9e0d75;this[_0x5e1ab1(0x179)]===undefined&&this[_0x5e1ab1(0x134)](),_0x479459+=_0x5e1ab1(0xff),!!this[_0x5e1ab1(0x179)][_0x479459]&&(this['_horrorFilters'][_0x479459][_0xe51bab]=_0xa92a38,this['_horrorFilters'][_0x479459]['needUpdate']=!![]);},Game_System[_0x9e0d75(0x19f)][_0x9e0d75(0x175)]=function(_0x264284,_0x146cca){const _0x5a9881=_0x9e0d75;this[_0x5a9881(0x179)]===undefined&&this['clearHorrorEffects'](),_0x264284+=_0x5a9881(0xff),this[_0x5a9881(0x179)][_0x264284]=JsonEx[_0x5a9881(0x152)](_0x146cca),this[_0x5a9881(0x179)][_0x264284][_0x5a9881(0x16d)]=!![];},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0xe6)]=Game_Screen['prototype'][_0x9e0d75(0x119)],Game_Screen[_0x9e0d75(0x19f)][_0x9e0d75(0x119)]=function(){const _0x1377c2=_0x9e0d75;VisuMZ[_0x1377c2(0x194)][_0x1377c2(0xe6)]['call'](this),this[_0x1377c2(0x134)]();},Game_Screen[_0x9e0d75(0x19f)][_0x9e0d75(0x134)]=function(){const _0x5e8beb=_0x9e0d75;Game_System[_0x5e8beb(0x19f)][_0x5e8beb(0x134)][_0x5e8beb(0x11a)](this);},Game_Screen[_0x9e0d75(0x19f)]['createHorrorEffect']=function(_0x3586f9){const _0x855bc2=_0x9e0d75;Game_System['prototype'][_0x855bc2(0x1a2)]['call'](this,_0x3586f9);},Game_Screen[_0x9e0d75(0x19f)][_0x9e0d75(0xd6)]=function(_0x3caa0c){const _0x18c195=_0x9e0d75;Game_System[_0x18c195(0x19f)][_0x18c195(0xd6)]['call'](this,_0x3caa0c);},Game_Screen[_0x9e0d75(0x19f)][_0x9e0d75(0x15c)]=function(_0x1d50dc,_0x4d76ce,_0x45317f){const _0x1e08ba=_0x9e0d75;Game_System[_0x1e08ba(0x19f)][_0x1e08ba(0x15c)][_0x1e08ba(0x11a)](this,_0x1d50dc,_0x4d76ce,_0x45317f);},Game_Screen[_0x9e0d75(0x19f)]['setHorrorEffectSettings']=function(_0x1663cc,_0x14c79b){const _0x332d15=_0x9e0d75;Game_System[_0x332d15(0x19f)]['setHorrorEffectSettings'][_0x332d15(0x11a)](this,_0x1663cc,_0x14c79b);},VisuMZ['HorrorEffects'][_0x9e0d75(0x103)]=Game_Picture[_0x9e0d75(0x19f)]['initialize'],Game_Picture['prototype'][_0x9e0d75(0x136)]=function(){const _0x28e33c=_0x9e0d75;VisuMZ['HorrorEffects']['Game_Picture_initialize'][_0x28e33c(0x11a)](this),this[_0x28e33c(0x179)]=this['_horrorFilters']||{};},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x15b)]=Game_Picture['prototype'][_0x9e0d75(0x14b)],Game_Picture[_0x9e0d75(0x19f)]['erase']=function(){const _0x5adfc7=_0x9e0d75;VisuMZ[_0x5adfc7(0x194)][_0x5adfc7(0x15b)][_0x5adfc7(0x11a)](this),this[_0x5adfc7(0x134)]();},Game_Picture['prototype'][_0x9e0d75(0x134)]=function(){const _0x131cf0=_0x9e0d75;Game_System['prototype'][_0x131cf0(0x134)][_0x131cf0(0x11a)](this);},Game_Picture['prototype'][_0x9e0d75(0x1a2)]=function(_0x30f3c0){const _0x5134b4=_0x9e0d75;Game_System[_0x5134b4(0x19f)][_0x5134b4(0x1a2)][_0x5134b4(0x11a)](this,_0x30f3c0);},Game_Picture['prototype']['removeHorrorEffect']=function(_0x470061){const _0x1c6021=_0x9e0d75;Game_System[_0x1c6021(0x19f)][_0x1c6021(0xd6)]['call'](this,_0x470061);},Game_Picture[_0x9e0d75(0x19f)][_0x9e0d75(0x15c)]=function(_0x274d7f,_0x41856a,_0x44c985){const _0x37418d=_0x9e0d75;Game_System[_0x37418d(0x19f)][_0x37418d(0x15c)][_0x37418d(0x11a)](this,_0x274d7f,_0x41856a,_0x44c985);},Game_Picture[_0x9e0d75(0x19f)][_0x9e0d75(0x175)]=function(_0x8f8f4f,_0x42e2fa){const _0xcb9712=_0x9e0d75;Game_System[_0xcb9712(0x19f)][_0xcb9712(0x175)][_0xcb9712(0x11a)](this,_0x8f8f4f,_0x42e2fa);},VisuMZ['HorrorEffects'][_0x9e0d75(0x139)]=Game_BattlerBase['prototype'][_0x9e0d75(0x136)],Game_BattlerBase[_0x9e0d75(0x19f)][_0x9e0d75(0x136)]=function(){const _0x585c8a=_0x9e0d75;VisuMZ[_0x585c8a(0x194)]['Game_BattlerBase_initialize'][_0x585c8a(0x11a)](this),this[_0x585c8a(0x134)]();},Game_BattlerBase[_0x9e0d75(0x19f)]['clearHorrorEffects']=function(){const _0x133435=_0x9e0d75;Game_System[_0x133435(0x19f)][_0x133435(0x134)][_0x133435(0x11a)](this);},Game_BattlerBase[_0x9e0d75(0x19f)][_0x9e0d75(0x1a2)]=function(_0x2eedc3){const _0x159391=_0x9e0d75;Game_System[_0x159391(0x19f)][_0x159391(0x1a2)][_0x159391(0x11a)](this,_0x2eedc3);},Game_BattlerBase['prototype'][_0x9e0d75(0xd6)]=function(_0x662c9e){const _0x3a0cba=_0x9e0d75;Game_System['prototype'][_0x3a0cba(0xd6)][_0x3a0cba(0x11a)](this,_0x662c9e);},Game_BattlerBase[_0x9e0d75(0x19f)][_0x9e0d75(0x15c)]=function(_0x366a12,_0x131ef0,_0x551e19){const _0x233b4e=_0x9e0d75;Game_System[_0x233b4e(0x19f)][_0x233b4e(0x15c)][_0x233b4e(0x11a)](this,_0x366a12,_0x131ef0,_0x551e19);},Game_BattlerBase[_0x9e0d75(0x19f)][_0x9e0d75(0x175)]=function(_0x4a9b57,_0x516a50){const _0x4fd948=_0x9e0d75;Game_System[_0x4fd948(0x19f)]['setHorrorEffectSettings'][_0x4fd948(0x11a)](this,_0x4a9b57,_0x516a50);},VisuMZ['HorrorEffects'][_0x9e0d75(0x199)]=Game_CharacterBase[_0x9e0d75(0x19f)]['initMembers'],Game_CharacterBase['prototype'][_0x9e0d75(0xec)]=function(){const _0x34eb13=_0x9e0d75;VisuMZ[_0x34eb13(0x194)][_0x34eb13(0x199)][_0x34eb13(0x11a)](this),this[_0x34eb13(0x134)]();},Game_CharacterBase[_0x9e0d75(0x19f)][_0x9e0d75(0x134)]=function(){const _0x54db4f=_0x9e0d75;Game_System['prototype'][_0x54db4f(0x134)][_0x54db4f(0x11a)](this);},Game_CharacterBase['prototype']['createHorrorEffect']=function(_0x4e9e83){const _0xc63fb3=_0x9e0d75;Game_System[_0xc63fb3(0x19f)][_0xc63fb3(0x1a2)][_0xc63fb3(0x11a)](this,_0x4e9e83);},Game_CharacterBase[_0x9e0d75(0x19f)][_0x9e0d75(0xd6)]=function(_0x1c62e1){const _0x54a1c1=_0x9e0d75;Game_System[_0x54a1c1(0x19f)][_0x54a1c1(0xd6)][_0x54a1c1(0x11a)](this,_0x1c62e1);},Game_CharacterBase[_0x9e0d75(0x19f)][_0x9e0d75(0x15c)]=function(_0x1cb9a0,_0x471f93,_0x346f47){const _0x4f5549=_0x9e0d75;Game_System['prototype'][_0x4f5549(0x15c)][_0x4f5549(0x11a)](this,_0x1cb9a0,_0x471f93,_0x346f47);},Game_CharacterBase[_0x9e0d75(0x19f)][_0x9e0d75(0x175)]=function(_0x2345ac,_0x51e1f0){const _0x6471d5=_0x9e0d75;Game_System[_0x6471d5(0x19f)][_0x6471d5(0x175)][_0x6471d5(0x11a)](this,_0x2345ac,_0x51e1f0);},VisuMZ[_0x9e0d75(0x194)]['Game_Player_refresh']=Game_Player['prototype'][_0x9e0d75(0x1a7)],Game_Player[_0x9e0d75(0x19f)][_0x9e0d75(0x1a7)]=function(){const _0x356b44=_0x9e0d75;VisuMZ['HorrorEffects'][_0x356b44(0xee)][_0x356b44(0x11a)](this),!!$gameParty[_0x356b44(0xfb)]()&&this[_0x356b44(0xd9)]();},Game_Player[_0x9e0d75(0x19f)][_0x9e0d75(0x134)]=function(){const _0x288875=_0x9e0d75;!!$gameParty[_0x288875(0xfb)]()&&(Game_System[_0x288875(0x19f)][_0x288875(0x134)][_0x288875(0x11a)]($gameParty[_0x288875(0xfb)]()),this[_0x288875(0xd9)]());},Game_Player['prototype']['createHorrorEffect']=function(_0x4de8af){const _0x5d668d=_0x9e0d75;!!$gameParty['leader']()&&(Game_System[_0x5d668d(0x19f)][_0x5d668d(0x1a2)]['call']($gameParty[_0x5d668d(0xfb)](),_0x4de8af),this[_0x5d668d(0xd9)]());},Game_Player[_0x9e0d75(0x19f)][_0x9e0d75(0xd6)]=function(_0x3a254b){const _0x2cf2bb=_0x9e0d75;!!$gameParty['leader']()&&(Game_System[_0x2cf2bb(0x19f)][_0x2cf2bb(0xd6)][_0x2cf2bb(0x11a)]($gameParty['leader'](),_0x3a254b),this[_0x2cf2bb(0xd9)]());},Game_Player[_0x9e0d75(0x19f)]['setHorrorEffectToValue']=function(_0x4aecbd,_0x45067a,_0x145a26){const _0x465a67=_0x9e0d75;!!$gameParty[_0x465a67(0xfb)]()&&(Game_System['prototype']['setHorrorEffectToValue'][_0x465a67(0x11a)]($gameParty[_0x465a67(0xfb)](),_0x4aecbd,_0x45067a,_0x145a26),this[_0x465a67(0xd9)]());},Game_Player[_0x9e0d75(0x19f)]['setHorrorEffectSettings']=function(_0x1ccfb0,_0x33cda6){const _0x4effe3=_0x9e0d75;!!$gameParty[_0x4effe3(0xfb)]()&&(Game_System[_0x4effe3(0x19f)][_0x4effe3(0x175)][_0x4effe3(0x11a)]($gameParty['leader'](),_0x1ccfb0,_0x33cda6),this[_0x4effe3(0xd9)]());},Game_Player[_0x9e0d75(0x19f)][_0x9e0d75(0xd9)]=function(){const _0x34ee0d=_0x9e0d75;this[_0x34ee0d(0x179)]=JsonEx['makeDeepCopy']($gameParty['leader']()[_0x34ee0d(0x179)]);},VisuMZ[_0x9e0d75(0x194)]['Game_Follower_refresh']=Game_Follower[_0x9e0d75(0x19f)][_0x9e0d75(0x1a7)],Game_Follower[_0x9e0d75(0x19f)][_0x9e0d75(0x1a7)]=function(){const _0x5c8280=_0x9e0d75;VisuMZ['HorrorEffects'][_0x5c8280(0x156)][_0x5c8280(0x11a)](this),!!this[_0x5c8280(0x182)]()&&this[_0x5c8280(0xd9)]();},Game_Follower[_0x9e0d75(0x19f)][_0x9e0d75(0x134)]=function(){const _0x1411e9=_0x9e0d75;!!this[_0x1411e9(0x182)]()&&(Game_System['prototype'][_0x1411e9(0x134)][_0x1411e9(0x11a)](this['actor']()),this[_0x1411e9(0xd9)]());},Game_Follower[_0x9e0d75(0x19f)]['createHorrorEffect']=function(_0x2c75ea){const _0x5a7e20=_0x9e0d75;!!this[_0x5a7e20(0x182)]()&&(Game_System[_0x5a7e20(0x19f)][_0x5a7e20(0x1a2)][_0x5a7e20(0x11a)](this[_0x5a7e20(0x182)](),_0x2c75ea),this[_0x5a7e20(0xd9)]());},Game_Follower[_0x9e0d75(0x19f)][_0x9e0d75(0xd6)]=function(_0x2c6ce8){const _0x360f6b=_0x9e0d75;!!this[_0x360f6b(0x182)]()&&(Game_System[_0x360f6b(0x19f)][_0x360f6b(0xd6)]['call'](this[_0x360f6b(0x182)](),_0x2c6ce8),this[_0x360f6b(0xd9)]());},Game_Follower['prototype'][_0x9e0d75(0x15c)]=function(_0x375139,_0xe5aa34,_0x1c4c2f){const _0x42698e=_0x9e0d75;!!this[_0x42698e(0x182)]()&&(Game_System[_0x42698e(0x19f)][_0x42698e(0x15c)][_0x42698e(0x11a)](this[_0x42698e(0x182)](),_0x375139,_0xe5aa34,_0x1c4c2f),this[_0x42698e(0xd9)]());},Game_Follower[_0x9e0d75(0x19f)][_0x9e0d75(0x175)]=function(_0x2c2db8,_0x326e63){const _0xd580eb=_0x9e0d75;!!this[_0xd580eb(0x182)]()&&(Game_System['prototype'][_0xd580eb(0x175)][_0xd580eb(0x11a)](this['actor'](),_0x2c2db8,_0x326e63),this['synchronizeHorrorEffects']());},Game_Follower[_0x9e0d75(0x19f)]['synchronizeHorrorEffects']=function(){const _0x362066=_0x9e0d75;this[_0x362066(0x179)]=JsonEx[_0x362066(0x152)](this[_0x362066(0x182)]()[_0x362066(0x179)]);},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x173)]=Game_Interpreter[_0x9e0d75(0x19f)]['command357'],Game_Interpreter[_0x9e0d75(0x19f)][_0x9e0d75(0x148)]=function(_0xe7fc04){const _0x188ae7=_0x9e0d75;return $gameTemp['setLastPluginCommandInterpreter'](this),VisuMZ['HorrorEffects'][_0x188ae7(0x173)][_0x188ae7(0x11a)](this,_0xe7fc04);},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x17d)]=Scene_Title[_0x9e0d75(0x19f)][_0x9e0d75(0x171)],Scene_Title[_0x9e0d75(0x19f)][_0x9e0d75(0x171)]=function(){const _0x4aa022=_0x9e0d75;VisuMZ['HorrorEffects']['Scene_Title_createBackground']['call'](this);if(ConfigManager[_0x4aa022(0x176)]===![])return;this[_0x4aa022(0x122)](this[_0x4aa022(0x11e)],VisuMZ[_0x4aa022(0x194)]['Settings'][_0x4aa022(0x191)]),this[_0x4aa022(0x122)](this[_0x4aa022(0x100)],VisuMZ[_0x4aa022(0x194)]['Settings'][_0x4aa022(0x11c)]);},Scene_Title[_0x9e0d75(0x19f)][_0x9e0d75(0x122)]=function(_0x2fa3e4,_0x36130c){const _0xee6579=_0x9e0d75;!!_0x2fa3e4&&!!_0x36130c&&(!!_0x36130c[_0xee6579(0x10d)]&&(_0x2fa3e4['createHorrorNoise'](),_0x2fa3e4[_0xee6579(0x101)](_0x36130c[_0xee6579(0xe9)]),_0x2fa3e4['setHorrorNoiseAnimated'](_0x36130c[_0xee6579(0x114)])),!!_0x36130c[_0xee6579(0x16f)]&&(_0x2fa3e4[_0xee6579(0x140)](),_0x2fa3e4[_0xee6579(0xf2)](_0x36130c[_0xee6579(0x124)]),_0x2fa3e4[_0xee6579(0x1a4)](_0x36130c[_0xee6579(0x120)]),_0x2fa3e4[_0xee6579(0x19d)](_0x36130c[_0xee6579(0x129)]),_0x2fa3e4[_0xee6579(0x15f)](_0x36130c[_0xee6579(0xcc)]),_0x2fa3e4['setHorrorGlitchStrength'](_0x36130c[_0xee6579(0x1a1)])),!!_0x36130c['TV']&&(_0x2fa3e4[_0xee6579(0x169)](),_0x2fa3e4[_0xee6579(0x11b)](_0x36130c['TVLineThickness']),_0x2fa3e4[_0xee6579(0x12f)](_0x36130c['TVCorner']),_0x2fa3e4[_0xee6579(0xcd)](_0x36130c['TVAni']),_0x2fa3e4[_0xee6579(0x14c)](_0x36130c[_0xee6579(0x17a)])));},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x150)]=Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x136)],Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x136)]=function(_0x1df89c){const _0x3ddd53=_0x9e0d75;this[_0x3ddd53(0x179)]={},this[_0x3ddd53(0x161)]=this[_0x3ddd53(0x161)]||null,VisuMZ[_0x3ddd53(0x194)][_0x3ddd53(0x150)]['call'](this,_0x1df89c);},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0xc9)]=Sprite['prototype'][_0x9e0d75(0x19c)],Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x19c)]=function(){const _0x47c663=_0x9e0d75;this['synchronizeHorrorFiltersWithSource'](),VisuMZ[_0x47c663(0x194)][_0x47c663(0xc9)][_0x47c663(0x11a)](this),this['updateHorrorEffects']();},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x158)]=function(){const _0x5464d6=_0x9e0d75;this[_0x5464d6(0x17f)](),this[_0x5464d6(0x132)](),this[_0x5464d6(0x18d)](),this[_0x5464d6(0xdf)]();},Sprite['prototype'][_0x9e0d75(0x14a)]=function(_0xf161d4){const _0x31cf41=_0x9e0d75;this[_0x31cf41(0x167)]=this['filters']||[],this[_0x31cf41(0x167)][_0x31cf41(0xeb)](_0xf161d4);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x165)]=function(_0x4212f4){const _0x4f99fd=_0x9e0d75;var _0x15dee9=this[_0x4f99fd(0x167)][_0x4f99fd(0x186)](_0x4212f4);this[_0x4f99fd(0x167)][_0x4f99fd(0x154)](_0x15dee9,0x1),this[_0x4f99fd(0x167)]['length']===0x0&&(this[_0x4f99fd(0x167)]=null);},Sprite['prototype'][_0x9e0d75(0x10b)]=function(){const _0x366062=_0x9e0d75;if(ConfigManager[_0x366062(0x176)]===![])return;if(!PIXI[_0x366062(0x167)]['NoiseFilter'])return;if(!PIXI[_0x366062(0x167)]['GlitchFilter'])return;if(!PIXI['filters'][_0x366062(0x1ac)])return;if(!!this[_0x366062(0x161)]&&!!this[_0x366062(0x161)][_0x366062(0x179)]){var _0x3727e1=this['_horrorFiltersSource']['_horrorFilters'];if(!!_0x3727e1[_0x366062(0xef)]){!this['_horrorFilters'][_0x366062(0xef)]&&(this['createHorrorNoise'](),_0x3727e1[_0x366062(0xef)]['needUpdate']=!![]);if(_0x3727e1[_0x366062(0xef)][_0x366062(0x16d)]){_0x3727e1[_0x366062(0xef)]['needUpdate']=![];var _0x12021a=[_0x366062(0x115),_0x366062(0xea)];for(var _0x5e5351=0x0;_0x5e5351<_0x12021a[_0x366062(0x159)];_0x5e5351++){var _0x3a70a7=_0x12021a[_0x5e5351];this[_0x366062(0x179)][_0x366062(0xef)][_0x3a70a7]=_0x3727e1[_0x366062(0xef)][_0x3a70a7];}}}else!!this[_0x366062(0x179)][_0x366062(0xef)]&&this[_0x366062(0x16e)]();if(!!_0x3727e1[_0x366062(0x13b)]){!this['_horrorFilters'][_0x366062(0x13b)]&&(this[_0x366062(0x140)](),_0x3727e1[_0x366062(0x13b)][_0x366062(0x16d)]=!![]);if(_0x3727e1[_0x366062(0x13b)][_0x366062(0x16d)]){_0x3727e1['glitchFilter']['needUpdate']=![];var _0x12021a=[_0x366062(0x107),_0x366062(0x12b),'sliceMin',_0x366062(0x145),_0x366062(0xea),_0x366062(0x164),'aniStrength',_0x366062(0x149)];for(var _0x5e5351=0x0;_0x5e5351<_0x12021a[_0x366062(0x159)];_0x5e5351++){var _0x3a70a7=_0x12021a[_0x5e5351];this[_0x366062(0x179)]['glitchFilter'][_0x3a70a7]=_0x3727e1[_0x366062(0x13b)][_0x3a70a7],_0x3a70a7===_0x366062(0x149)&&(_0x3727e1['glitchFilter'][_0x3a70a7]=![]);}}}else!!this['_horrorFilters'][_0x366062(0x13b)]&&this['removeHorrorGlitch']();if(!!_0x3727e1[_0x366062(0x198)]){!this[_0x366062(0x179)][_0x366062(0x198)]&&(this['createHorrorTV'](),_0x3727e1[_0x366062(0x198)]['needUpdate']=!![]);if(_0x3727e1['tvFilter'][_0x366062(0x16d)]){_0x3727e1[_0x366062(0x198)][_0x366062(0x16d)]=![];var _0x12021a=[_0x366062(0xf6),_0x366062(0x146),'animated','aniSpeed'];for(var _0x5e5351=0x0;_0x5e5351<_0x12021a[_0x366062(0x159)];_0x5e5351++){var _0x3a70a7=_0x12021a[_0x5e5351];this['_horrorFilters']['tvFilter'][_0x3a70a7]=_0x3727e1[_0x366062(0x198)][_0x3a70a7];}}}else!!this['_horrorFilters'][_0x366062(0x198)]&&this['removeHorrorTV']();if(!!_0x3727e1[_0x366062(0x16c)]){!this[_0x366062(0x179)]['colorFilter']&&(this[_0x366062(0x14f)](),_0x3727e1['colorFilter'][_0x366062(0x16d)]=!![]);if(_0x3727e1[_0x366062(0x16c)][_0x366062(0x16d)]){_0x3727e1[_0x366062(0x16c)]['needUpdate']=![];var _0x12021a=[_0x366062(0xed)];for(var _0x5e5351=0x0;_0x5e5351<_0x12021a[_0x366062(0x159)];_0x5e5351++){var _0x3a70a7=_0x12021a[_0x5e5351];this[_0x366062(0x179)][_0x366062(0x16c)][_0x3a70a7]=_0x3727e1[_0x366062(0x16c)][_0x3a70a7];}}}else!!this[_0x366062(0x179)]['colorFilter']&&this[_0x366062(0x18c)]();}},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x1a6)]=function(){const _0x3699ed=_0x9e0d75;if(!PIXI[_0x3699ed(0x167)]['NoiseFilter'])return;!this[_0x3699ed(0x179)]['noiseFilter']&&(this[_0x3699ed(0x179)][_0x3699ed(0xef)]=new PIXI[(_0x3699ed(0x167))][(_0x3699ed(0x12d))](),this[_0x3699ed(0x14a)](this[_0x3699ed(0x179)][_0x3699ed(0xef)])),this['_horrorFilters']['noiseFilter'][_0x3699ed(0x115)]=0.3,this[_0x3699ed(0x179)]['noiseFilter'][_0x3699ed(0xea)]=!![];},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x16e)]=function(){const _0x5276c2=_0x9e0d75;!!this[_0x5276c2(0x179)]['noiseFilter']&&(this[_0x5276c2(0x165)](this[_0x5276c2(0x179)][_0x5276c2(0xef)]),this['_horrorFilters']['noiseFilter']=undefined);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x17f)]=function(){const _0x3cd112=_0x9e0d75;if(!PIXI[_0x3cd112(0x167)][_0x3cd112(0x12d)])return;!!this[_0x3cd112(0x179)][_0x3cd112(0xef)]&&(this[_0x3cd112(0x179)][_0x3cd112(0xef)][_0x3cd112(0xea)]&&(this['_horrorFilters'][_0x3cd112(0xef)][_0x3cd112(0x170)]=Math[_0x3cd112(0xfd)]()*0x3));},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x101)]=function(_0x518665){const _0x22a4cd=_0x9e0d75;!!this[_0x22a4cd(0x179)][_0x22a4cd(0xef)]&&(this['_horrorFilters'][_0x22a4cd(0xef)][_0x22a4cd(0x115)]=_0x518665);},Sprite['prototype']['setHorrorNoiseAnimated']=function(_0x265420){const _0x37c36f=_0x9e0d75;!!this[_0x37c36f(0x179)][_0x37c36f(0xef)]&&(this['_horrorFilters'][_0x37c36f(0xef)][_0x37c36f(0xea)]=_0x265420);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x140)]=function(){const _0x57895e=_0x9e0d75;if(!PIXI[_0x57895e(0x167)][_0x57895e(0x1a5)])return;!this[_0x57895e(0x179)][_0x57895e(0x13b)]&&(this[_0x57895e(0x179)]['glitchFilter']=new PIXI['filters'][(_0x57895e(0x1a5))](),this[_0x57895e(0x14a)](this[_0x57895e(0x179)][_0x57895e(0x13b)])),this[_0x57895e(0x179)][_0x57895e(0x13b)][_0x57895e(0x107)]=0xa,this['_horrorFilters']['glitchFilter']['offset']=0x64,this[_0x57895e(0x179)][_0x57895e(0x13b)]['sliceMin']=0x5,this['_horrorFilters']['glitchFilter'][_0x57895e(0x145)]=0xa,this[_0x57895e(0x179)]['glitchFilter'][_0x57895e(0xea)]=!![],this[_0x57895e(0x179)]['glitchFilter']['aniFrequency']=0x12c,this[_0x57895e(0x179)]['glitchFilter'][_0x57895e(0xf8)]=0x1e;},Sprite['prototype'][_0x9e0d75(0xfa)]=function(){const _0x58a256=_0x9e0d75;!!this['_horrorFilters'][_0x58a256(0x13b)]&&(this[_0x58a256(0x165)](this[_0x58a256(0x179)][_0x58a256(0x13b)]),this[_0x58a256(0x179)][_0x58a256(0x13b)]=undefined);},Sprite[_0x9e0d75(0x19f)]['updateHorrorGlitch']=function(){const _0x1f5604=_0x9e0d75;if(!PIXI[_0x1f5604(0x167)][_0x1f5604(0x1a5)])return;if(!!this[_0x1f5604(0x179)][_0x1f5604(0x13b)]){if(this[_0x1f5604(0xf7)]&&this[_0x1f5604(0x179)][_0x1f5604(0x13b)][_0x1f5604(0xea)]){var _0x4f716b=new PIXI[(_0x1f5604(0x167))][(_0x1f5604(0x1a5))](),_0x4675ef=['slices',_0x1f5604(0x12b),_0x1f5604(0x180),_0x1f5604(0x145),_0x1f5604(0xea),_0x1f5604(0x164),_0x1f5604(0xf8),_0x1f5604(0x149)];this[_0x1f5604(0x179)][_0x1f5604(0x13b)][_0x1f5604(0x149)]=![];for(var _0x5780a2=0x0;_0x5780a2<_0x4675ef[_0x1f5604(0x159)];_0x5780a2++){var _0x76773c=_0x4675ef[_0x5780a2];_0x4f716b[_0x76773c]=this[_0x1f5604(0x179)][_0x1f5604(0x13b)][_0x76773c];}var _0x50ce0d=this['filters'][_0x1f5604(0x186)](this[_0x1f5604(0x179)][_0x1f5604(0x13b)]);this[_0x1f5604(0x167)][_0x50ce0d]=this['updateHorrorGlitchEffect'](_0x4f716b),this[_0x1f5604(0x179)][_0x1f5604(0x13b)]=this[_0x1f5604(0x167)][_0x50ce0d];}if(this[_0x1f5604(0xf7)]&&this[_0x1f5604(0x179)]['glitchFilter'][_0x1f5604(0x149)]){this['_horrorFilters'][_0x1f5604(0x13b)][_0x1f5604(0x149)]=![],this['_horrorFilters'][_0x1f5604(0x13b)][_0x1f5604(0xea)]=![];var _0x4f716b=new PIXI[(_0x1f5604(0x167))][(_0x1f5604(0x1a5))](),_0x4675ef=['slices','offset',_0x1f5604(0x180),_0x1f5604(0x145),_0x1f5604(0xea),_0x1f5604(0x164),_0x1f5604(0xf8),_0x1f5604(0x149)];for(var _0x5780a2=0x0;_0x5780a2<_0x4675ef[_0x1f5604(0x159)];_0x5780a2++){var _0x76773c=_0x4675ef[_0x5780a2];_0x4f716b[_0x76773c]=this[_0x1f5604(0x179)][_0x1f5604(0x13b)][_0x76773c],_0x76773c===_0x1f5604(0x149)&&(this['_horrorFilters'][_0x1f5604(0x13b)][_0x76773c]=![]);}var _0x50ce0d=this[_0x1f5604(0x167)]['indexOf'](this[_0x1f5604(0x179)]['glitchFilter']);_0x4f716b[_0x1f5604(0x1a7)](),this[_0x1f5604(0x167)][_0x50ce0d]=this['updateHorrorGlitchEffect'](_0x4f716b),this[_0x1f5604(0x179)]['glitchFilter']=this[_0x1f5604(0x167)][_0x50ce0d];}else this[_0x1f5604(0x160)](this[_0x1f5604(0x179)][_0x1f5604(0x13b)]);}},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x160)]=function(_0x187ae9){const _0xed9cc0=_0x9e0d75;if(_0x187ae9['animated']){var _0x2788a9=Graphics[_0xed9cc0(0xd1)]%_0x187ae9[_0xed9cc0(0x164)],_0x2dbf46=_0x187ae9[_0xed9cc0(0xf8)];if(_0x2788a9<Math['randomInt'](_0x2dbf46)+0x1){var _0x16454e=_0x187ae9[_0xed9cc0(0x145)]-_0x187ae9[_0xed9cc0(0x180)],_0xa54439=Math[_0xed9cc0(0x183)](_0x16454e)+_0x187ae9[_0xed9cc0(0x145)];_0x187ae9[_0xed9cc0(0x107)]=_0xa54439;}else _0x187ae9[_0xed9cc0(0x107)]=0x0;}else{if(_0x187ae9[_0xed9cc0(0x107)]===0x0){var _0x16454e=_0x187ae9['sliceMax']-_0x187ae9[_0xed9cc0(0x180)],_0xa54439=Math[_0xed9cc0(0x183)](_0x16454e)+_0x187ae9['sliceMax'];_0x187ae9['slices']=_0xa54439;}else _0x187ae9[_0xed9cc0(0x149)]&&(_0x187ae9['refreshRequest']=undefined,_0x187ae9[_0xed9cc0(0x1a7)]());}return _0x187ae9;},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0xf2)]=function(_0x120643,_0x5d4570,_0x32d8e2){const _0x1f0ecc=_0x9e0d75;!!this[_0x1f0ecc(0x179)][_0x1f0ecc(0x13b)]&&(_0x5d4570===undefined&&(_0x5d4570=Math['ceil'](_0x120643/0x2)),_0x32d8e2===undefined&&(_0x32d8e2=_0x120643),this[_0x1f0ecc(0x179)][_0x1f0ecc(0x13b)]['sliceMin']=_0x5d4570,this[_0x1f0ecc(0x179)][_0x1f0ecc(0x13b)]['sliceMax']=_0x32d8e2,this[_0x1f0ecc(0x179)][_0x1f0ecc(0x13b)]['slices']=_0x120643,this[_0x1f0ecc(0x179)][_0x1f0ecc(0x13b)][_0x1f0ecc(0x1a7)]());},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x1a4)]=function(_0xe76fe0){const _0x246e0a=_0x9e0d75;!!this[_0x246e0a(0x179)][_0x246e0a(0x13b)]&&(this['_horrorFilters'][_0x246e0a(0x13b)][_0x246e0a(0x12b)]=_0xe76fe0);},Sprite['prototype'][_0x9e0d75(0x19d)]=function(_0xd21b57){const _0x3de5e5=_0x9e0d75;!!this[_0x3de5e5(0x179)][_0x3de5e5(0x13b)]&&(this[_0x3de5e5(0x179)][_0x3de5e5(0x13b)][_0x3de5e5(0xea)]=_0xd21b57);},Sprite[_0x9e0d75(0x19f)]['setHorrorGlitchFrequency']=function(_0x4b2f0f){const _0x5bedc9=_0x9e0d75;!!this['_horrorFilters'][_0x5bedc9(0x13b)]&&(this[_0x5bedc9(0x179)]['glitchFilter']['aniFrequency']=_0x4b2f0f);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0xe8)]=function(_0x3b862d){const _0x15042f=_0x9e0d75;!!this['_horrorFilters']['glitchFilter']&&(this['_horrorFilters'][_0x15042f(0x13b)][_0x15042f(0xf8)]=_0x3b862d);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x169)]=function(){const _0x179990=_0x9e0d75;if(!PIXI[_0x179990(0x167)][_0x179990(0x1ac)])return;!this['_horrorFilters'][_0x179990(0x198)]&&(this[_0x179990(0x179)][_0x179990(0x198)]=new PIXI[(_0x179990(0x167))][(_0x179990(0x1ac))](),this[_0x179990(0x14a)](this[_0x179990(0x179)]['tvFilter'])),this[_0x179990(0x179)][_0x179990(0x198)][_0x179990(0xf6)]=0x5,this['_horrorFilters'][_0x179990(0x198)][_0x179990(0x146)]=0.3,this[_0x179990(0x179)][_0x179990(0x198)][_0x179990(0xea)]=!![],this['_horrorFilters'][_0x179990(0x198)][_0x179990(0x13a)]=0.25;},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x130)]=function(){const _0xa28f50=_0x9e0d75;!!this[_0xa28f50(0x179)][_0xa28f50(0x198)]&&(this[_0xa28f50(0x165)](this['_horrorFilters'][_0xa28f50(0x198)]),this['_horrorFilters'][_0xa28f50(0x198)]=undefined);},Sprite['prototype'][_0x9e0d75(0x18d)]=function(){const _0x816af9=_0x9e0d75;if(!PIXI[_0x816af9(0x167)][_0x816af9(0x1ac)])return;!!this[_0x816af9(0x179)][_0x816af9(0x198)]&&(this[_0x816af9(0x179)][_0x816af9(0x198)]['animated']&&(this[_0x816af9(0x179)]['tvFilter'][_0x816af9(0x12a)]+=this[_0x816af9(0x179)][_0x816af9(0x198)][_0x816af9(0x13a)]));},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x11b)]=function(_0x1420b3){const _0x28085f=_0x9e0d75;!!this[_0x28085f(0x179)][_0x28085f(0x198)]&&(this[_0x28085f(0x179)]['tvFilter'][_0x28085f(0xf6)]=_0x1420b3);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x12f)]=function(_0x132615){const _0x40d918=_0x9e0d75;!!this[_0x40d918(0x179)]['tvFilter']&&(this[_0x40d918(0x179)]['tvFilter']['vignetting']=_0x132615);},Sprite[_0x9e0d75(0x19f)]['setHorrorTVAnimated']=function(_0x7e24a6){const _0x264409=_0x9e0d75;!!this[_0x264409(0x179)][_0x264409(0x198)]&&(this[_0x264409(0x179)][_0x264409(0x198)][_0x264409(0xea)]=_0x7e24a6);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0x14c)]=function(_0xb1f06c){const _0x3ed72f=_0x9e0d75;!!this[_0x3ed72f(0x179)][_0x3ed72f(0x198)]&&(this[_0x3ed72f(0x179)][_0x3ed72f(0x198)][_0x3ed72f(0x13a)]=_0xb1f06c);},Sprite[_0x9e0d75(0x19f)]['createHorrorColor']=function(){const _0x48b574=_0x9e0d75;if(!PIXI[_0x48b574(0x167)]['ColorMatrixFilter'])return;!this[_0x48b574(0x179)]['colorFilter']&&(this[_0x48b574(0x179)]['colorFilter']=new PIXI[(_0x48b574(0x167))][(_0x48b574(0xe0))](),this[_0x48b574(0x14a)](this[_0x48b574(0x179)]['colorFilter']));},Sprite['prototype'][_0x9e0d75(0x18c)]=function(){const _0x29f889=_0x9e0d75;!!this[_0x29f889(0x179)]['colorFilter']&&(this[_0x29f889(0x165)](this[_0x29f889(0x179)]['colorFilter']),this[_0x29f889(0x179)]['colorFilter']=undefined);},Sprite[_0x9e0d75(0x19f)][_0x9e0d75(0xdf)]=function(){const _0xab3195=_0x9e0d75;if(!PIXI[_0xab3195(0x167)]['ColorMatrixFilter'])return;if(!!this[_0xab3195(0x179)][_0xab3195(0x16c)]){const _0x4af65e=this['_horrorFilters'][_0xab3195(0x16c)];if(_0x4af65e['lastType']!==_0x4af65e[_0xab3195(0xed)]){_0x4af65e[_0xab3195(0x126)](),_0x4af65e['lastType']=_0x4af65e[_0xab3195(0xed)];const _0x350a6a=_0x4af65e['type'];switch(_0x350a6a[_0xab3195(0xf5)]()[_0xab3195(0x162)]()){case _0xab3195(0xd4):_0x4af65e[_0xab3195(0xca)]();break;case'blackandwhite':_0x4af65e[_0xab3195(0x109)]();break;case _0xab3195(0xf0):_0x4af65e[_0xab3195(0xf0)](!![]);break;case _0xab3195(0x144):_0x4af65e[_0xab3195(0x144)]();break;case'greyscale':_0x4af65e[_0xab3195(0x168)](0.5,!![]);break;case _0xab3195(0xdb):_0x4af65e[_0xab3195(0xdb)](!![]);break;case _0xab3195(0x189):_0x4af65e[_0xab3195(0x189)]();break;case _0xab3195(0x17e):_0x4af65e[_0xab3195(0x17e)]();break;case _0xab3195(0x192):_0x4af65e['polaroid']();break;case _0xab3195(0x13c):_0x4af65e[_0xab3195(0x13c)](0x32);break;case'sepia':_0x4af65e[_0xab3195(0x177)]();break;case _0xab3195(0x106):_0x4af65e[_0xab3195(0x106)](!![]);break;case'vintage':_0x4af65e[_0xab3195(0x10c)](!![]);break;default:_0x4af65e[_0xab3195(0x126)]();break;}}}},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x135)]=Sprite_Character[_0x9e0d75(0x19f)][_0x9e0d75(0x136)],Sprite_Character['prototype']['initialize']=function(_0x489857){const _0x1c24b2=_0x9e0d75;VisuMZ[_0x1c24b2(0x194)]['Sprite_Character_initialize'][_0x1c24b2(0x11a)](this,_0x489857),this[_0x1c24b2(0x161)]=_0x489857,this[_0x1c24b2(0xf7)]=!![];},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x1a0)]=Sprite_Battler[_0x9e0d75(0x19f)][_0x9e0d75(0x17c)],Sprite_Battler['prototype'][_0x9e0d75(0x17c)]=function(_0x2cf26f){const _0x5bf4d0=_0x9e0d75;VisuMZ[_0x5bf4d0(0x194)]['Sprite_Battler_setBattler']['call'](this,_0x2cf26f),this['_horrorFiltersSource']=_0x2cf26f,this[_0x5bf4d0(0xf7)]=!![];},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x188)]=Sprite_Picture[_0x9e0d75(0x19f)]['initialize'],Sprite_Picture['prototype'][_0x9e0d75(0x136)]=function(_0xba855d){const _0x5ae3fd=_0x9e0d75;VisuMZ[_0x5ae3fd(0x194)][_0x5ae3fd(0x188)][_0x5ae3fd(0x11a)](this,_0xba855d);},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x10e)]=Sprite_Picture[_0x9e0d75(0x19f)][_0x9e0d75(0x16b)],Sprite_Picture[_0x9e0d75(0x19f)][_0x9e0d75(0x16b)]=function(){const _0x188fea=_0x9e0d75;VisuMZ[_0x188fea(0x194)][_0x188fea(0x10e)][_0x188fea(0x11a)](this),this[_0x188fea(0x137)]&&!this[_0x188fea(0x161)]?this[_0x188fea(0x161)]=this['picture']():this[_0x188fea(0x161)]=undefined;},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x1ab)]=Spriteset_Map[_0x9e0d75(0x19f)]['initialize'],Spriteset_Map[_0x9e0d75(0x19f)]['initialize']=function(){const _0x522aba=_0x9e0d75;VisuMZ['HorrorEffects'][_0x522aba(0x1ab)][_0x522aba(0x11a)](this),this['_horrorFiltersSource']=$gameScreen;},VisuMZ[_0x9e0d75(0x194)][_0x9e0d75(0x163)]=Spriteset_Battle[_0x9e0d75(0x19f)][_0x9e0d75(0x136)],Spriteset_Battle[_0x9e0d75(0x19f)][_0x9e0d75(0x136)]=function(){const _0x27ff77=_0x9e0d75;VisuMZ[_0x27ff77(0x194)][_0x27ff77(0x163)][_0x27ff77(0x11a)](this),this[_0x27ff77(0x161)]=$gameSystem;};