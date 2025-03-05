//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.52;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.52] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
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
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV file that will contain all of the text used to
 * translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * '''IMPORTANT!''' The separator used for the CSV file must be a semicolon (;)
 * and not a comma (,) as to reduce the amount of punctuation conflicts. Keep
 * this in mind as most CSV editors will default to comma (,) instead of the
 * semicolon (;) for their separator.
 * 
 * ---
 * 
 * === How to Edit the Language CSV ===
 * 
 * The Language CSV is structured as a normal CSV file would be, which also
 * means it can be modified in programs like Microsoft Excel or Google Sheets.
 * We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV file in programs like notepad directly
 * due to the way certain things like commas (,) are handled and how easy it is
 * to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV file via the spreadsheet editor (Excel or Google
 * Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 * 
 * === Naming Weapon Types, Armor Types, Equip Types, Item Categories ===
 * 
 * You might have noticed that if you've decided to use \tl{keyName} for weapon
 * or other database types, other parts of the game will error out. Don't
 * worry, for these, you don't have to change the currently used database name.
 * Go straight to the CSV and insert in a new key for that particular database
 * name. For example, the equip type "Accessory" will use "Accessory" as the
 * automatic key to look for a translated phrase. If there isn't any in the CSV
 * file, then the default database text entry will be used.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Map Name)
 * ------------------   -------------------------------------------------------
 * <left>               Makes map name align to left side of screen.
 * <center>             Makes map name align to horizontally center of screen.
 * <right>              Makes map name align to right side of screen.
 * 
 * <top>                Makes map name align to top of screen.
 * <middle>             Makes map name align to vertically middle of screen.
 * <bottom>             Makes map name align to bottom of screen.
 * 
 * <X: +n>              Adjusts the horizontal position of map name by n.
 * <X: -n>              Adjusts the horizontal position of map name by n.
 * 
 * <Y: +n>              Adjusts the vertical position of map name by n.
 * <Y: -n>              Adjusts the vertical position of map name by n.
 * 
 * Note: All of these text codes require VisuMZ_0_CoreEngine installed and its
 * "Map Name Text Code" plugin parameter enabled.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <Caps>               Makes all text after this capitalized.
 *                      Turns off other auto-text case modes.
 *                      ie: "hello world" becomes "HELLO WORLD"
 * </Caps>              Turns off auto text-casing effects.
 * 
 * <Upper>              Makes the first letter of any word after a space to be
 *                      capitalized. Other letters are left alone.
 *                      Turns off other auto-text case modes.
 *                      ie. "old mcDonald" becomes "Old McDonald"
 * </Upper>             Turns off auto text-casing effects.
 * 
 * <Lower>              Makes all text after this lowercase.
 *                      Turns off other auto-text case modes.
 *                      ie: "THE QUICK BROWN FOX" becomes "the quick brown fox"
 * </Lower>             Turns off auto text-casing effects.
 * 
 * <Alt>                Makes all text after this alternate between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Hello" becomes "HeLlO"
 * </Alt>               Turns off auto text-casing effects.
 * 
 * <Chaos>              Makes all text after this randomize between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Wassup" becomes "waSsUP" or "WasSuP"
 * </Chaos>             Turns off auto text-casing effects.
 * 
 * **Clarity:** In case you're wondering, the text codes </Caps>, </Upper>,
 * </Lower>, </Alt>, and </Chaos> all do the same thing and can be used
 * interchangeably with each other. For example, you can do this:
 * <Caps>hello world</Lower> and it would still accomplish the same effect, but
 * you won't do that because you're not a monster of a developer.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * Note: These text codes only work with the Message Window. Keep in mind that
 *   even if some windows might look like the Message Window, it may not
 *   necessarily be one.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Font Manager
 * ============================================================================
 *
 * Custom fonts that aren't the message or number fonts cannot be used without
 * registration. If you try to use custom fonts in RPG Maker MZ without
 * registering their font family first, you will find out that they will not
 * work. These plugin parameters allow you to register your game's custom fonts
 * here.
 * 
 * ---
 * 
 * Settings:
 * 
 *   Font Family:
 *   - This will be what's used by RPG Maker MZ and plugins to reference this
 *     specific font.
 *   - NO filename extensions!
 * 
 *   Filename:
 *   - What is the filename of the custom font you would like to use?
 *   - Located inside the project's "fonts" folder.
 * 
 * ---
 * 
 * Examples:
 * 
 *   Font Family: WildWords
 *   Filename: WildWords-Regular.ttf
 * 
 * How you would use this in other plugins as a preface to the font face or
 * font family would be to use "WildWords" as the font face/family name. Then
 * RPG Maker MZ will use its own innate FontManager to refer that to the
 * "WildWords-Regular.ttf" file found in the game's "fonts" folder.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Fonts
 * ============================================================================
 *
 * Different default fonts used for different languages. This allows different
 * stylistic choices to be made for different languages in case the current
 * font you're using doesn't have support for other language types.
 * 
 * Keep in mind that players can override this with Options Core if they select
 * a text option other than 'Default' for the 'Text Font' option.
 * 
 * Make sure any new custom fonts used for different languages are registered
 * with the 'Custom Font Manager' found in this plugin's Plugin Parameters.
 *
 * ---
 * 
 * Languages:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - What font face is used for this language?
 *   - Make sure it is registered under Custom Font Manager.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Images
 * ============================================================================
 *
 * Allows different images to be used when different languages are used. This
 * is for images that have text on it that you want to appear in different
 * languages based on the text language selected by the player.
 * 
 * There are two ways this works:
 * 
 *   #1: Folder Name
 *   - The name of the folder containing those images will be named something
 *     like "Scrolls[XX]"
 *   - When a different language is picked, like English, it can reference
 *     the 'Scrolls[EN]' folder instead. If Japanese is used, it can refer to
 *     the 'Scrolls[JP]' folder as well.
 *   - The text used to replace the [XX] in the folder name can be determined
 *     in the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 * 
 *   #2: Filename
 *   - The filename of the image to be translated can be named something like
 *     ReidProfile[XX].png
 *   - When a different language is picked, like English, it will reference the
 *     'ReidProfile[EN].png' image instead. For Japanese, it will reference the
 *     'ReidProfile[JP].png' as well.
 *   - The text used to replace the [XX] in the filename can be determined in
 *     the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 *
 * ---
 * 
 * Settings
 * 
 *   Convert Default?
 *   - ON: Default language uses converted marker.
 *   - OFF: Default languages uses [XX] as marker.
 * 
 * Here's an explanation of what this does:
 * 
 *   - The default language picked is English and the player has English picked
 *     as their desired language.
 *   - If the "Convert Default?" Plugin Parameter is ON, then 'ReidProfile[XX]'
 *     will reference and look for the 'ReidProfile[EN]' image.
 *   - If the "Convert Default?" Plugin Parameter is OFF, 'ReidProfile[XX]' is
 *     then used for the English language instead of 'ReidProfile[EN]'.
 *     - This is to avoid duplicate images and save on file space.
 *   - The reasoning behind the [XX] is that there needs to be an anchor image
 *     used for the RPG Maker MZ client in order to have something to reference
 *     before branching out to different languages.
 * 
 * ---
 * 
 * Languages 
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - This text will replace [XX] with in image folder names and filenames
 *     when this language is selected.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * Version 1.52: December 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Arisu:
 * *** <left>
 * *** <center>
 * *** <right>
 * **** When used in the Map Name, instead of aligning the text which is
 *      centered by default, the text code will align the horizontal position
 *      of the name displayed on the screen.
 * *** <top>
 * *** <middle>
 * *** <bottom>
 * **** When used in the Map Name, the text code will align the vertical
 *      position of the name displayed on the screen.
 * *** <X: +n>
 * *** <X: -n>
 * *** <Y: +n>
 * *** <Y: -n>
 * **** Adjusts the horizontal/vertical position of map name by 'n' value.
 * *** All of these text codes require VisuMZ_0_CoreEngine installed and its
 *     "Map Name Text Code" plugin parameter enabled.
 * 
 * Version 1.51: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a bug where \LastGainObj text code did not work with text language
 *    key codes. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added note to Text Language Information > How to Enable Switching
 * *** IMPORTANT! The separator used for the CSV file must be a semicolon (;)
 *     and not a comma (,) as to reduce the amount of punctuation conflicts.
 *     Keep this in mind as most CSV editors will default to comma (,) instead
 *     of the semicolon (;) for their separator.
 * ** Added note to Text Language Information > Naming Weapon Types, etc:
 * *** You might have noticed that if you've decided to use \tl{keyName} for
 *     weapon or other database types, other parts of the game will error out.
 *     Don't worry, for these, you don't have to change the currently used
 *     database name. Go straight to the CSV and insert in a new key for that
 *     particular database name. For example, the equip type "Accessory" will
 *     use "Accessory" as the automatic key to look for a translated phrase. If
 *     there isn't any in the CSV file, then the default database text entry
 *     will be used.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Text Language Settings > Language Fonts
 * **** Different default fonts used for different languages. This allows
 *      different stylistic choices to be made for different languages in case
 *      the current font you're using doesn't have support for other language
 *      types.
 * **** Keep in mind that players can override this with Options Core if they
 *      select a text option other than 'Default' for the 'Text Font' option.
 * **** Make sure any new custom fonts used for different languages are
 *      registered with the 'Custom Font Manager' found in this plugin's Plugin
 *      Parameters.
 * *** Parameters > Text Language Settings > Language Images
 * **** Allows different images to be used when different languages are used.
 *      This is for images that have text on it that you want to appear in
 *      different languages based on the text language selected by the player.
 * 
 * Version 1.50: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina:
 * *** <Caps> </Caps>
 * *** <Upper> </Upper>
 * *** <Lower> </Lower>
 * **** Auto-text case textcodes will automatically adjust text inserted
 *      between them to respectively be completely capitalized, first-letter
 *      capitalized, or completely lowercase.
 * **** More information in the help file.
 * *** <Alt> </Alt>
 * **** Alternates between uppercase and lowercase for letters.
 * *** <Chaos> </Chaos>
 * **** Randomly uses uppercase and lowercase for letters.
 * 
 * 
 * Version 1.49: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where using text codes to get database object names did
 *    not apply translated text.
 * * Documentation Update!
 * ** Added note for Message Window Only text code effects:
 * *** These text codes only work with the Message Window. Keep in mind that
 *     even if some windows might look like the Message Window, it may not
 *     necessarily be one.
 * * Feature Update!
 * ** Added a failsafe for when Choice List Window doesn't have any viable
 *    options (due to being hidden or disabled). Update made by Irina.
 * ** Added a failsafe for Language CSV when empty rows are added.
 * ** Updated some default Text Code actions in order to make sure they're only
 *    used by the Message Window and not anything else. Update made by Irina.
 * 
 * Version 1.48: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for help description checks parsing from objects without
 *    help descriptions normally. Fix made by Irina.
 * 
 * Version 1.47: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Custom Font Manager
 * **** Register custom fonts here.
 * **** Custom fonts that aren't the message or number fonts cannot be used
 *      without registration.
 * **** See help file for more information.
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
 *
 * Version 1.00: August 20, 2020
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
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @param MessageCore
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
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param CustomFonts:arraystruct
 * @text Custom Font Manager
 * @type struct<CustomFont>[]
 * @desc Register custom fonts here. Custom fonts that aren't the
 * message or number fonts cannot be used without this.
 * @default []
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = data[0].trim();\\\\n        const index = parseInt(data[1] || '0');\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = $gameMessage.faceName();\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing && this.constructor === Window_Message) {\\\\n        this.setTextDelay(delay);\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"heart\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"3\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param LanguageFonts:struct
 * @text Language Fonts
 * @parent Localization:struct
 * @type struct<LanguageFonts>
 * @desc Different default fonts used for different languages.
 * Players can override this with Options Core.
 * @default {"Bengali:str":"rmmz-mainfont","Chinese(Simplified):str":"rmmz-mainfont","Chinese(Traditional):str":"rmmz-mainfont","Czech:str":"rmmz-mainfont","Danish:str":"rmmz-mainfont","Dutch:str":"rmmz-mainfont","English:str":"rmmz-mainfont","Finnish:str":"rmmz-mainfont","French:str":"rmmz-mainfont","German:str":"rmmz-mainfont","Greek:str":"rmmz-mainfont","Hindi:str":"rmmz-mainfont","Hungarian:str":"rmmz-mainfont","Indonesian:str":"rmmz-mainfont","Italian:str":"rmmz-mainfont","Japanese:str":"rmmz-mainfont","Korean:str":"rmmz-mainfont","Norwegian:str":"rmmz-mainfont","Polish:str":"rmmz-mainfont","Portuguese:str":"rmmz-mainfont","Romanian:str":"rmmz-mainfont","Russian:str":"rmmz-mainfont","Slovak:str":"rmmz-mainfont","Spanish:str":"rmmz-mainfont","Swedish:str":"rmmz-mainfont","Tamil:str":"rmmz-mainfont","Thai:str":"rmmz-mainfont","Turkish:str":"rmmz-mainfont"}
 *
 * @param LanguageImages:struct
 * @text Language Images
 * @parent Localization:struct
 * @type struct<LanguageImages>
 * @desc Allows different images to be used when different
 * languages are used. See help for more information.
 * @default {"ConvertDefault:eval":"false","Languages":"","Bengali:str":"[XX]","Chinese(Simplified):str":"[XX]","Chinese(Traditional):str":"[XX]","Czech:str":"[XX]","Danish:str":"[XX]","Dutch:str":"[XX]","English:str":"[XX]","Finnish:str":"[XX]","French:str":"[XX]","German:str":"[XX]","Greek:str":"[XX]","Hindi:str":"[XX]","Hungarian:str":"[XX]","Indonesian:str":"[XX]","Italian:str":"[XX]","Japanese:str":"[XX]","Korean:str":"[XX]","Norwegian:str":"[XX]","Polish:str":"[XX]","Portuguese:str":"[XX]","Romanian:str":"[XX]","Russian:str":"[XX]","Slovak:str":"[XX]","Spanish:str":"[XX]","Swedish:str":"[XX]","Tamil:str":"[XX]","Thai:str":"[XX]","Turkish:str":"[XX]"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Font Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomFont:
 *
 * @param FontFamily:str
 * @text Font Family
 * @desc This will be what's used by RPG Maker MZ and plugins to
 * reference this specific font. NO filename extensions!
 * @default Unnamed
 *
 * @param Filename:str
 * @text Filename
 * @desc What is the filename of the font you would like to use?
 * Located inside the project's "fonts" folder.
 * @default Unnamed.ttf
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Language Fonts Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageFonts:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Czech:str
 * @text Czech
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Danish:str
 * @text Danish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param English:str
 * @text English
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param French:str
 * @text French
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param German:str
 * @text German
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Greek:str
 * @text Greek
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Italian:str
 * @text Italian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Korean:str
 * @text Korean
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Polish:str
 * @text Polish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Russian:str
 * @text Russian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Thai:str
 * @text Thai
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 *
 */
/* ----------------------------------------------------------------------------
 * Language Images Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageImages:
 *
 * @param ConvertDefault:eval
 * @text Convert Default?
 * @type boolean
 * @on Convert
 * @off Don't
 * @desc ON: Default language uses converted marker.
 * OFF: Default languages uses [XX] as marker.
 * @default false
 *
 * @param Languages
 * @text Languages
 *
 * @param Bengali:str
 * @text Bengali
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Czech:str
 * @text Czech
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Danish:str
 * @text Danish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param English:str
 * @text English
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param French:str
 * @text French
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param German:str
 * @text German
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Greek:str
 * @text Greek
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Italian:str
 * @text Italian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Korean:str
 * @text Korean
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Polish:str
 * @text Polish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Russian:str
 * @text Russian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Thai:str
 * @text Thai
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0x53b526=_0x4a83;function _0x1541(){const _0x1f00e2=['messageCoreLocalization','includes','<RIGHT>','up\x20center','setupChoices','isClosed','JSON','erasePicture','outputWidth','terminateMessage','actorName','prepareWordWrapEscapeCharacters','downcenter','_autoPosRegExp','getMessageWindowRows','Window_Base_textSizeEx','\x1bC[%1]%2\x1bPREVCOLOR[0]','_messageCommonEvents','CreateAutoColorFor','Window_Base_changeTextColor','processWrapBreak','path','Привет','FontSmallerCap','AddOption','MsgWindowOffsetY','German','process_VisuMZ_MessageCore_TextMacros','EquipTypeID','displayName','setPictureTextBuffer','setWeaponChoice','convertShowChoiceEscapeCodes','Αντίο','realPictureId','UNDEFINED!','updateBackground','actor','parse','isTriggered','map\x20player','MessageCore','addCommand','stringify','\x1bCASING[4]','drawPictureText','clearPictures','setPositionType','getLanguageAt','ChoiceWindowMaxRows','createContents','cancel','ExtraEnemyDrops','Czech','parseChoiceText','lowerleft','mainFontFace','upright','Please\x20restart\x20the\x20game.','updateBitmap','\x1bTEXTALIGNMENT[3]','adjustShowChoiceDefault','up-left','wtypeId','downleft','_index','FontBiggerCap','remove','ImageManager_loadBitmap','getLocalizedText','loadPicture','quantity','\x5c%1','makeFontSmaller','realignMapName','_nameBoxWindow','<LINE\x20BREAK>','command101','7NHwXph','\x1bWrapBreak[0]','filename','_refreshPauseSign','addChoiceDistance','map\x20party','Do\x20widzenia','autoPositionOffsetX','processAllText','_messageWindow','mainFontSize','test','_wholeMoveDuration','addMessageCoreLocalizationCommand','Hűha','(((','currentCommand','AutoColorRegExp','textSpeed','onNewPageMessageCore','stretchDimmerSprite','name','Window_Options_isVolumeSymbol','convertTextMacros','HIDE','item','\x1bCASING[2]','clearCommandList','system','setChoiceMessageDistance','isChoiceVisible','SkillTypeID','PictureTextRefresh','안녕하세요','Italian','choiceAlignText','convertButtonAssistEscapeCharacters','setupNumInput','BOLD','clampPlacementPosition','_dimmerSprite','lower\x20right','#a186be','হ্যালো','isHelpWindowWordWrap','SortObjectByKeyLength','LineHeight','itemChoiceItypeId','convertCasingEscapeCharacters','inputtingAction','drawSkillCost','LineBreakSpace','Game_Map_refresh','resetFontSettings','exit','battle\x20party','isPressed','EachMessageStart','paintOpacity','setSkillChoice','_itemChoiceActorId','_autoPositionTarget','open\x20.\x5cdata','actorSlotName','refreshWithTextCodeSupport','_messageOffsetY','_itemChoiceVariableId','startX','green','process_VisuMZ_MessageCore_TextCodes_Action','powerUpColor','unshift','TextCodeReplace','Bitmap_drawText','STRUCT','DataManager_loadDatabase','VisuMZ_4_ExtraEnemyDrops','Ciao','getStartingChoiceWidth','applyMoveEasing','inBattle','armor','registerResetRect','statusText','$dataLocalization','MessageTextDelay','updateNameBoxMove','processFontChangeBold','CENTERPICTURE','resetRect','Window_Base_update','ArmorTypeID','needsPictureTextRefresh','You\x20do\x20not\x20have\x20a\x20language\x20CSV\x20set\x20up.\x0a','instantTextSpeed','ConvertParams','scale','processMessageCoreEscapeActions','नमस्ते','\x1bWrapJpBreak[0]','length','blt','textSizeEx','setupShuffleChoices','Ahoj','synchronizeNameBox','_lastPluginCommandInterpreter','isChoiceWindow','outputHeight','createChoiceListHelpWindow','StretchDimmedBg','resetTextColor','onChoice','attachPictureText','setMessageWindowXyOffsets','getMessageWindowWidth','RelativePXPY','drawPictureTextZone','equipSlots','<%1>','prepareShowTextFollowups','setChoiceListMaxRows','Window_NameBox_refresh','ParseClassNotetags','CSV\x20file\x20has\x20not\x20been\x20made.\x0a','ParseStateNotetags','list','#707070','_relativePosition','_choiceIndexArray','Hola','Window_Message_synchronizeNameBox','onload','PictureIDs','height','Weapons','ActorID','currencyUnit','ARRAYJSON','updateTransform','visuMzTextLocaleStatusText','Viszontlátásra','drawItemContents','Вау','Cześć','adjustShowChoiceCancel','refresh','2003948rNOIpL','loadLocalization','getPictureText','_pictureTextBuffer','ওহে','setSpeakerName','easeOut','updatePlacement','setMessageWindowWordWrap','startPause','_textCasingUpperState','Hejdå','_autoSizeCheck','prepareAutoSizeEscapeCharacters','brown','boxWidth','<COLORLOCK>','itemHeight','_wordWrap','messageCoreTextSpeed','Window_Command_addCommand','clearChoiceHelpDescriptions','loadDatabase','floor','MsgWindowOffsetX','down','Danish','close','Window_Base_processAllText','Window_Options_changeVolume','DefaultOutlineWidth','calcWindowHeight','ConfigManager_makeData','_textCasing','ARRAYSTR','WAIT','messageRows','695255WXfGFf','canMove','Armors','French','Window_ItemList_drawItemNumber','processTextAlignmentChange','isSkillHidden','processActorNameAutoColorChanges','பிரியாவிடை','maxFontSizeInLine','postConvertEscapeCharacters','battle\x20actor','move','load','substr','CommonEvent','obtainItem','drawTextEx','clearPictureTextRefresh','Good-bye','open','ARRAYSTRUCT','updateMove','maxShuffleChoices','Game_Party_gainItem','upper\x20right','drawing','maxLines','_pictureTextSprite','upper-center','processAutoSize','itemChoiceStypeId','isClosing','upleft','adjustShowChoiceExtension','colSpacing','_pictureId','अलविदा','Romanian','Sprite_Picture_update','TEXTALIGNMENT','Halo','</RIGHT>','middlecenter','normalColor','apply','itemChoiceEtypeId','textLocale','convertNewPageTextStateMacros','addContinuousShowChoices','index','registerActorNameAutoColorChanges','_moveEasingType','upcenter','_itemChoiceItypeId','AutoColor','textCodeResult','#6dcff6','Ουάου','\x1bTEXTALIGNMENT[1]','changeVolume','setBackground','setWordWrap','convertButtonAssistText','Game_Party_initialize','message','Enemies','followers','_choiceHelpDescriptions','deactivate','surprise','SelectArmor','MessageWidth','Game_Map_initialize','none','start','max','SWITCH','Adiós','Window_Message_isTriggered','lower\x20left','windowPadding','resetWordWrap','processFailsafeChoice','Hungarian','convertEscapeCharacters','every','members','crisis','_resetRect','179400jVKTcB','Guau','command357','code','ParseArmorNotetags','partyMemberName','#c69c6d','Window_ChoiceList','Would\x20you\x20like\x20the\x20plugin\x20to\x20create\x20the\x20base\x20CSV\x20file?\x0a\x0a','_moveTargetX','AddAutoColor','setChoiceListMaxColumns','OffsetX','anchorPictureText','Vau','textCodeCheck','random','pink','Match','WORD_WRAP_PADDING','padding','_itemChoiceEtypeId','_moveTargetY','initialize','Olá','processAutoColorWords','Window_NameBox_updatePlacement','_pictureTextWindow','こんにちは','onLocalizationXhrError','CheckCompatibility','round','midright','getPreservedFontSettings','\x1bTEXTALIGNMENT','Window_MessageLog','setLastPluginCommandInterpreter','processCustomWait','createChoiceListWindow','join','call','etypeId','ChoiceWindowProperties','drawItemNumber','description','parameters','_eventId','reduce','getMessageWindowXyOffsets','Hello','skill','menu','choiceCancelType','setArmorChoice','_currentAutoSize','lineHeight','processDrawCenteredPicture','processPxTextCode','choiceIndexArray','isBusy','setPictureText','battle\x20enemy','_lastGainedItemData','_helpWindow','getLastPluginCommandInterpreter','isOptionValid','_pictureTextRefresh','WordWrap','\x1bi[%1]%2','สวัสดี','setChoices','upper-left','messagePositionReset','maxCommands','processEscapeCharacter','PictureTextErase','isSkill','middleleft','MESSAGE_CORE_PLUGIN_NAME','makeData','getChoiceListLineHeight','\x1bITALIC[1]','isVolumeSymbol','fontSize','Vay','drawChoiceLocationImage','_choices','Enable','substring','processTextCasing','down-left','placeCancelButton','getLanguageName','map','ITALIC','messageWordWrap','</WORDWRAP>','Window_Base_processControlCharacter','வணக்கம்','exec','uppercenter','NameBoxWindowOffsetY','fontFace','DefaultLocale','_indent','makeCommandListScriptCall','Window_Base_processNewLine','registerCommand','charAt','getChoiceListMaxRows','getColor','isInputting','switchOutTextForLocalization','makeCommandListShuffle','Window_Base_initialize','<BR>','Classes','STR','prepareShowTextPluginCommandFollowups','বিদায়','updateDimensions','atypeId','_cancelButton','</CENTER>','choiceListHelpWindowRect','isSceneMap','Korean','launchMessageCommonEvent','ஆஹா','obtainEscapeString','up-right','processColorLock','choiceMinWidth','drawCustomBackgroundColor','isRunning','_action','choiceTextAlign','weapon','down\x20center','_data','windowWidth','processDrawPicture','maxChoiceWidth','MessageWindowXyOffsets','pagedown','_autoSizeRegexp','itemChoiceActor','processFontChangeItalic','responseText','autoPositionOffsetY','TextManager_message','setRelativePosition','_forcedPosition','left','requestChoiceBackgroundImage','drawItem','Localization','_pictureTextCache','calcMoveEasing','Norwegian','Uau','fontBold','contents','Arrivederci','itemPadding','Window_Message_newPage','clearRect','processCharacter','ALL','iconIndex','dirname','Dutch','Filename','bind','defeat','Name','Instant','getSkillTypes','requestPictureTextRefresh','setChoiceListTextAlign','La\x20revedere','Γειά\x20σου','Skills','getPictureTextBuffer','Key','Items','makeItemList','yellow','isVisuMzLocalizationEnabled','_target','changeOutlineColor','ChoiceWindowMaxCols','_moveDuration','setupEvents','crisisColor','numVisibleRows','lastGainedObjectIcon','147guXaSM','_centerMessageWindow','Hallo','easeIn','_textDelayCount','NameBoxWindowDefaultColor','getChoiceListMaxColumns','79120WafTTd','choice','messageCoreWindowX','child_process','faceName','getConfigValue','split','outlineColor','TextCodeActions','EVAL','getChoiceMessageDistance','getTextAlignment','dimColor2','NUM','makeSkillList','Scene_Boot_loadGameFonts','value','choices','Scene_Message_createChoiceListWindow','center','makeDeepCopy','setup','안녕히\x20가세요','Window_Message_needsNewPage','VisuMZ_1_SkillsStatesCore','Hej','toLowerCase','in\x20order\x20for\x20VisuMZ_1_MessageCore\x20to\x20work.','Window_ChoiceList_windowX','Hei','onProcessCharacter','setTextAlignment','Window_Options_statusText','lastGainedObjectName','VisuMZ_4_ExtraEnemyDrops\x20needs\x20to\x20be\x20updated\x20','Scene_Boot_onDatabaseLoaded','moveTo','Bitmap_drawTextTopAligned','ParseEnemyNotetags','loadGameFonts','preFlushTextState','right','Width','Hindi','outLineColor','Turkish','NonSupportedTextCodes','getRandomTextFromPool','<I>','English','applyChoiceHelpDescriptions','setChoiceListLineHeight','innerHeight','SplitJpCnCharacters','_scriptCall','choiceDistance','strokeRect','MinWidth','_colorLock','ParseAddedText','setChoiceListMinChoiceWidth','indexOf','boxHeight','status','shift','isColorLocked','choiceRows','format','itemRect','parseLocalizedText','TextJS','171IGlCeB','purple','Finnish','\x1bBOLD[0]','processTextAlignmentX','convertMessageCoreEscapeReplacements','drawTextTopAligned','loadCustomFontsMessageCore','processCommonEvent','MessageRows','obtainExp','battleActionName','erasePictureTextBuffer','TextColor','ShuffleArray','getPictureTextData','makeCommandList','updateEvents','NameBoxWindowOffsetX','requestPictureTextRefreshAll','process_VisuMZ_MessageCore_AutoColor','convertLockColorsEscapeCharacters','HelpWindow','map\x20event','ParseItemNotetags','callCancelHandler','sort','update','isPlaytest','CreateAutoColorRegExpListEntries','isSkillTypeMatchForUse','_texts','openLocalizationFolder','ENABLE','MaxCols','Swedish','SelectSkill','Undefined','Window_Help_refresh','middleright','return\x20\x27','SelectWeapon','ParseSkillNotetags','convertChoiceMacros','itemChoiceWtypeId','_pictures','unnamed','processNewLine','VisuMZ_3_ActSeqCamera','returnPreservedFontSettings','Game_System_initialize','ParseAllNotetags','bitmap','initMessageCore','refreshDimmerBitmap','textWidth','Window_Base_processEscapeCharacter','clamp','textFont','indent','Distance','isOpen','<CENTER>','updatePictureText','defaultColor','Scene_Options_maxCommands','COMMONEVENT','show','map\x20actor','_MessageCoreSettings','_targets','_macroBypassWordWrap','Hoşça\x20kal','applyDatabaseAutoColor','some','convertMessageCoreEscapeActions','Window_Options_addGeneralOptions','true','gray','Auf\x20Wiedersehen','Wow','choiceLineHeight','addMessageCoreTextSpeedCommand','\x1bTEXTALIGNMENT[0]','itemChoiceActorId','VisuMZ_0_CoreEngine','updateOffsetPosition','_maxShuffleChoices','#7cc576','TextColor%1','isWordWrapEnabled','send','#ffffff','clearFlags','convertBackslashCharacters','violet','Merhaba','Game_Interpreter_setupChoices','choiceCols','Type','processControlCharacter','application/csv','charCodeAt','processPreviousColor','clearAllPictureTexts','data/','addedWidth','ลาก่อน','startWait','drawText','anchor','addedHeight','Actors','isMessageWindowWordWrap','lowerright','windowX','overrideMimeType','TextSpeed','Farvel','\x1bCASING[1]','onerror','white','_textAlignment','[0]','midleft','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','setFaceImage','TextStr','upperright','ParseWeaponNotetags','Bengali','helpWordWrap','</COLORLOCK>','itemBackColor2','_choiceListHelpWindow','match','drawBackPicture','mainModule','VariableID','SHOW','LanguageFonts','_textMacroFound','convertBaseEscapeCharacters','moveBy','onDatabaseLoaded','fontItalic','Tamil','updateMessageCommonEvents','databaseObjectName','processAutoPosition','ConvertDefault','_scene','clearActorNameAutoColor','forEach','isAutoColorAffected','DISABLE','hasPictureText','prepareForcedPositionEscapeCharacters','_itemChoiceWtypeId','requestChoiceForegroundImage','setLastGainedItemData','setWaitMode','innerWidth','trim','%1,\x20does\x20not\x20support\x20attempted\x20text\x20code\x20usage.','prepareShowTextCommand','log','isCommandEnabled','Chinese(Traditional)','pageup','convertVariableEscapeCharacters','resizePictureText','Rows','processFsTextCode','contentsHeight','textSizeExTextAlignment','\x1bCOLORLOCK[1]','isBreakShowTextCommands','Sbohem','_messageOffsetX','hide','ConvertTextAutoColorRegExpFriendly','updateOverlappingY','setHelpWindowWordWrap','Chinese(Simplified)','#fff799','upper\x20center','_pictureText','CsvFilename','10402xAHEfD','<WORDWRAP>','obtainEscapeParam','States','FontChangeValue','messageWidth','escapeStart','default','\x1bCOLORLOCK[0]','applyData','Indonesian','messageWindowRect','text','type','_messagePositionReset','addLoadListener','Zbohom','Ha\x20det','Szia','eraseAllPictureTexts','Settings','preConvertEscapeCharacters','isContinuePrepareShowTextCommands','clear','_autoColorActorNames','startY','follower','itemRectWithPadding','_itemChoiceStypeId','Slovak','itemBackColor1','_moveTargetWidth','COLORLOCK','_textColorStack','updateForcedPlacement','isWeapon','_moveTargetHeight','updateAutoPosition','Greek','prototype','Window_Message_clearFlags','updateAutoSizePosition','MessageWindowProperties','EachMessageEnd','changeTextSpeed','Au\x20revoir','PICTURE','randomInt','addWindow','\x1bCASING[0]','Wauw','skills','Wah','changeTextColor','process_VisuMZ_MessageCore_TextCodes_Replace','getChoiceListTextAlign','updateHelp','upper\x20left','_choiceCancelType','gainItem','setChoiceListHelpWindow','2782158UCrcwl','Game_Map_updateEvents','getLastGainedItemData','TextMacros','Selamat\x20tinggal','changeChoiceBackgroundColor','changePaintOpacity','updateChoiceListHelpWindowPlacement','min','\x1bBOLD[1]','getChoiceListMinChoiceWidth','processPyTextCode','fallbackFonts','addGeneralOptions','_pictureTextWidth','Tot\x20ziens','ceil','event','ChoiceWindowTextAlign','До\x20свидания','visible','drawBackCenteredPicture','commandName','rtl','textColor','VisuMZ_1_EventsMoveCore','ParseLocalizationCsv','Window_EventItem_includes','width','<LEFT>','battleTargetName','gradientFillRect','isRTL','textSizeExWordWrap','EndPadding','resetPositionX','Game_Message_setChoices','replace','_positionType','setTextDelay','convertHardcodedEscapeReplacements','victory','createLocalizationCsvFile','zoomScale','setColorLock','openness','_textDelay','GET','slice','284656vPeShJ','_interpreter','String_format','updateRelativePosition','version','_subject','Window_Message_processEscapeCharacter','CSV\x20file\x20cannot\x20be\x20created.\x0aPlease\x20enter\x20Playtest\x20mode.\x0a','Russian','itemChoiceAtypeId','loadMessageFace','up\x20left','PictureTextChange','postFlushTextState','changeValue','ConfigManager_applyData','_itemChoiceAtypeId','getChoiceIndent','Window_Message_terminateMessage','loadBitmap','currentExt','isSceneBattle','#ffc8e0','processStoredAutoColorChanges','Game_System_mainFontFace','makeFontBigger','Farewell','TightWrap','contentsBack','toUpperCase','getCurrentLanguage','getInputButtonString','Game_Screen_clearPictures','WeaponTypeID','isArmor','constructor','convertFontSettingsEscapeCharacters','Sprite_Picture_updateBitmap','textSpeedStatusText','Game_Screen_erasePicture','_list','Näkemiin','Languages','easeInOut','flushTextState','updateXyOffsets','equipTypes','_lastAltCase','Game_Interpreter_PluginCommand','#acacac','Thai','General','upperleft','CreateAutoColorRegExpLists','_spriteset','needsNewPage','filter','isChoiceEnabled','changeVisuMzTextLocale','registerSelfEvent','lowercenter','\x1bITALIC[0]','setMessageWindowRows','MessageWindow','push','maxCols','newPage','createTextState','onLocalizationXhrLoad','faceWidth','convertTextAlignmentEscapeCharacters','Window_Message_updatePlacement','setMessageWindowWidth','nextEventCode','_pictureTextHeight','addContinuousShowTextCommands','up\x20right','Bonjour'];_0x1541=function(){return _0x1f00e2;};return _0x1541();}(function(_0xd9c8fe,_0x309631){const _0x38fb17=_0x4a83,_0x1c31e3=_0xd9c8fe();while(!![]){try{const _0x1bb456=parseInt(_0x38fb17(0x1b4))/0x1+parseInt(_0x38fb17(0x384))/0x2*(parseInt(_0x38fb17(0x279))/0x3)+-parseInt(_0x38fb17(0x521))/0x4+parseInt(_0x38fb17(0x546))/0x5+parseInt(_0x38fb17(0x3c1))/0x6+-parseInt(_0x38fb17(0x48e))/0x7*(parseInt(_0x38fb17(0x3f2))/0x8)+-parseInt(_0x38fb17(0x2c7))/0x9*(parseInt(_0x38fb17(0x280))/0xa);if(_0x1bb456===_0x309631)break;else _0x1c31e3['push'](_0x1c31e3['shift']());}catch(_0x5215d1){_0x1c31e3['push'](_0x1c31e3['shift']());}}}(_0x1541,0x55790));var label='MessageCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x53b526(0x42a)](function(_0x480f2f){const _0x3ea478=_0x53b526;return _0x480f2f[_0x3ea478(0x2bf)]&&_0x480f2f['description'][_0x3ea478(0x441)]('['+label+']');})[0x0];VisuMZ[label][_0x53b526(0x398)]=VisuMZ[label][_0x53b526(0x398)]||{},VisuMZ['ConvertParams']=function(_0x2a0002,_0x5899e5){const _0x4c3588=_0x53b526;for(const _0x5cd2fd in _0x5899e5){if(_0x5cd2fd['match'](/(.*):(.*)/i)){const _0x43621c=String(RegExp['$1']),_0x391690=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x1ae591,_0x3e69cd,_0xabecb9;switch(_0x391690){case _0x4c3588(0x28d):_0x1ae591=_0x5899e5[_0x5cd2fd]!==''?Number(_0x5899e5[_0x5cd2fd]):0x0;break;case'ARRAYNUM':_0x3e69cd=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):[],_0x1ae591=_0x3e69cd[_0x4c3588(0x211)](_0x5dd67e=>Number(_0x5dd67e));break;case _0x4c3588(0x289):_0x1ae591=_0x5899e5[_0x5cd2fd]!==''?eval(_0x5899e5[_0x5cd2fd]):null;break;case'ARRAYEVAL':_0x3e69cd=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):[],_0x1ae591=_0x3e69cd['map'](_0x1546f6=>eval(_0x1546f6));break;case _0x4c3588(0x446):_0x1ae591=_0x5899e5[_0x5cd2fd]!==''?JSON['parse'](_0x5899e5[_0x5cd2fd]):'';break;case _0x4c3588(0x518):_0x3e69cd=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):[],_0x1ae591=_0x3e69cd[_0x4c3588(0x211)](_0x294ab5=>JSON[_0x4c3588(0x466)](_0x294ab5));break;case'FUNC':_0x1ae591=_0x5899e5[_0x5cd2fd]!==''?new Function(JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd])):new Function('return\x200');break;case'ARRAYFUNC':_0x3e69cd=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):[],_0x1ae591=_0x3e69cd['map'](_0x426dcb=>new Function(JSON['parse'](_0x426dcb)));break;case _0x4c3588(0x229):_0x1ae591=_0x5899e5[_0x5cd2fd]!==''?String(_0x5899e5[_0x5cd2fd]):'';break;case _0x4c3588(0x543):_0x3e69cd=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):[],_0x1ae591=_0x3e69cd[_0x4c3588(0x211)](_0x37ad90=>String(_0x37ad90));break;case _0x4c3588(0x4d8):_0xabecb9=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):{},_0x2a0002[_0x43621c]={},VisuMZ[_0x4c3588(0x4ed)](_0x2a0002[_0x43621c],_0xabecb9);continue;case _0x4c3588(0x55b):_0x3e69cd=_0x5899e5[_0x5cd2fd]!==''?JSON[_0x4c3588(0x466)](_0x5899e5[_0x5cd2fd]):[],_0x1ae591=_0x3e69cd[_0x4c3588(0x211)](_0x436cf7=>VisuMZ['ConvertParams']({},JSON[_0x4c3588(0x466)](_0x436cf7)));break;default:continue;}_0x2a0002[_0x43621c]=_0x1ae591;}}return _0x2a0002;},(_0x4dc9c2=>{const _0x552932=_0x53b526,_0x160f77=_0x4dc9c2[_0x552932(0x4a3)];for(const _0x3f7fda of dependencies){if(!Imported[_0x3f7fda]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x552932(0x2c3)](_0x160f77,_0x3f7fda)),SceneManager[_0x552932(0x4c4)]();break;}}const _0x37c958=_0x4dc9c2[_0x552932(0x1e0)];if(_0x37c958[_0x552932(0x34e)](/\[Version[ ](.*?)\]/i)){const _0x45b051=Number(RegExp['$1']);_0x45b051!==VisuMZ[label][_0x552932(0x3f6)]&&(alert(_0x552932(0x344)[_0x552932(0x2c3)](_0x160f77,_0x45b051)),SceneManager[_0x552932(0x4c4)]());}if(_0x37c958[_0x552932(0x34e)](/\[Tier[ ](\d+)\]/i)){const _0x16dcda=Number(RegExp['$1']);_0x16dcda<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x552932(0x2c3)](_0x160f77,_0x16dcda,tier)),SceneManager[_0x552932(0x4c4)]()):tier=Math['max'](_0x16dcda,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x552932(0x398)],_0x4dc9c2[_0x552932(0x1e1)]);})(pluginData),PluginManager['registerCommand'](pluginData['name'],'ChoiceWindowDistance',_0x238f03=>{const _0x3902f4=_0x53b526;VisuMZ[_0x3902f4(0x4ed)](_0x238f03,_0x238f03);const _0x11b9bb=Number(_0x238f03[_0x3902f4(0x303)])||0x0;$gameSystem[_0x3902f4(0x4ab)](_0x11b9bb);}),PluginManager['registerCommand'](pluginData[_0x53b526(0x4a3)],_0x53b526(0x1de),_0x36cd18=>{const _0x5ce826=_0x53b526;VisuMZ[_0x5ce826(0x4ed)](_0x36cd18,_0x36cd18);const _0xd05108=_0x36cd18[_0x5ce826(0x4bc)]||$gameSystem[_0x5ce826(0x204)]()||0x1,_0x49363f=_0x36cd18[_0x5ce826(0x2b9)]??0x60,_0x13f618=_0x36cd18['MaxRows']||$gameSystem[_0x5ce826(0x221)]()||0x1,_0xead9f9=_0x36cd18[_0x5ce826(0x2e9)]||$gameSystem[_0x5ce826(0x27f)]()||0x1,_0x51378c=_0x36cd18['TextAlign'][_0x5ce826(0x29a)]()||_0x5ce826(0x38b);$gameSystem[_0x5ce826(0x2b3)](_0xd05108),$gameSystem[_0x5ce826(0x2bc)](_0x49363f),$gameSystem[_0x5ce826(0x507)](_0x13f618),$gameSystem[_0x5ce826(0x1bf)](_0xead9f9),$gameSystem[_0x5ce826(0x267)](_0x51378c);}),PluginManager['registerCommand'](pluginData[_0x53b526(0x4a3)],_0x53b526(0x3ae),_0x4b30b0=>{const _0x132f09=_0x53b526;VisuMZ['ConvertParams'](_0x4b30b0,_0x4b30b0);const _0x4ed49d=_0x4b30b0[_0x132f09(0x373)]||$gameSystem[_0x132f09(0x44e)]()||0x1,_0xfdc5ac=_0x4b30b0[_0x132f09(0x2aa)]||$gameSystem[_0x132f09(0x501)]()||0x1;$gameTemp[_0x132f09(0x27a)]=!![];const _0x3032a8=_0x4b30b0[_0x132f09(0x1f7)][_0x132f09(0x29a)]();$gameSystem[_0x132f09(0x430)](_0x4ed49d),$gameSystem['setMessageWindowWidth'](_0xfdc5ac);[_0x132f09(0x314),'false']['includes'](_0x3032a8)&&$gameSystem[_0x132f09(0x529)](eval(_0x3032a8));const _0x48ab19=SceneManager[_0x132f09(0x35e)][_0x132f09(0x497)];_0x48ab19&&(_0x48ab19[_0x132f09(0x1ac)](),_0x48ab19[_0x132f09(0x22c)](),_0x48ab19[_0x132f09(0x472)]());}),PluginManager[_0x53b526(0x21f)](pluginData[_0x53b526(0x4a3)],_0x53b526(0x243),_0x54457e=>{const _0x53166b=_0x53b526;VisuMZ[_0x53166b(0x4ed)](_0x54457e,_0x54457e),$gameSystem[_0x53166b(0x500)](_0x54457e[_0x53166b(0x1c0)],_0x54457e['OffsetY']);const _0x1594ef=SceneManager[_0x53166b(0x35e)][_0x53166b(0x497)];_0x1594ef&&(_0x1594ef[_0x53166b(0x1ac)](),_0x1594ef[_0x53166b(0x22c)](),_0x1594ef[_0x53166b(0x472)]());}),PluginManager[_0x53b526(0x21f)](pluginData[_0x53b526(0x4a3)],_0x53b526(0x2f0),_0x2f2d73=>{const _0xe77095=_0x53b526;VisuMZ['ConvertParams'](_0x2f2d73,_0x2f2d73),$gameMessage['setWeaponChoice'](_0x2f2d73[_0xe77095(0x351)]||0x0,_0x2f2d73['WeaponTypeID']||0x0);const _0x33a04f=$gameTemp[_0xe77095(0x1f4)]();if(_0x33a04f)_0x33a04f[_0xe77095(0x368)](_0xe77095(0x587));}),PluginManager[_0x53b526(0x21f)](pluginData[_0x53b526(0x4a3)],'SelectArmor',_0x518aba=>{const _0x4a80e6=_0x53b526;VisuMZ[_0x4a80e6(0x4ed)](_0x518aba,_0x518aba),$gameMessage[_0x4a80e6(0x1e9)](_0x518aba['VariableID']||0x0,_0x518aba[_0x4a80e6(0x4e9)]||0x0,_0x518aba['EquipTypeID']||0x0);const _0x51a378=$gameTemp[_0x4a80e6(0x1f4)]();if(_0x51a378)_0x51a378[_0x4a80e6(0x368)](_0x4a80e6(0x587));}),PluginManager[_0x53b526(0x21f)](pluginData[_0x53b526(0x4a3)],_0x53b526(0x2eb),_0xb4dcef=>{const _0xceaa6f=_0x53b526;VisuMZ[_0xceaa6f(0x4ed)](_0xb4dcef,_0xb4dcef),$gameMessage['setSkillChoice'](_0xb4dcef[_0xceaa6f(0x351)]||0x0,_0xb4dcef[_0xceaa6f(0x516)]||0x0,_0xb4dcef[_0xceaa6f(0x4ad)]||0x0);const _0x11d531=$gameTemp[_0xceaa6f(0x1f4)]();if(_0x11d531)_0x11d531[_0xceaa6f(0x368)](_0xceaa6f(0x587));}),PluginManager['registerCommand'](pluginData[_0x53b526(0x4a3)],_0x53b526(0x3fe),_0x2ce514=>{const _0x124720=_0x53b526;VisuMZ[_0x124720(0x4ed)](_0x2ce514,_0x2ce514);const _0x1c1e77=_0x2ce514[_0x124720(0x513)]||[],_0x528569=_0x2ce514['Padding']||0x0,_0x18eaf6=[_0x124720(0x426),'up',_0x124720(0x347),_0x124720(0x24d),'center','right',_0x124720(0x477),_0x124720(0x53a),_0x124720(0x339)];for(const _0x36fd39 of _0x1c1e77){$gameScreen[_0x124720(0x45e)](_0x36fd39,_0x528569);for(const _0x1b09d6 of _0x18eaf6){if(_0x2ce514[_0x1b09d6]===undefined)continue;$gameScreen['setPictureText'](_0x36fd39,_0x2ce514[_0x1b09d6],_0x1b09d6);}}}),PluginManager[_0x53b526(0x21f)](pluginData[_0x53b526(0x4a3)],_0x53b526(0x1ff),_0x3ca456=>{const _0x2a3c56=_0x53b526;VisuMZ[_0x2a3c56(0x4ed)](_0x3ca456,_0x3ca456);const _0x498e23=_0x3ca456['PictureIDs']||[];for(const _0x493623 of _0x498e23){$gameScreen[_0x2a3c56(0x397)](_0x493623),$gameScreen[_0x2a3c56(0x2d3)](_0x493623);}}),PluginManager[_0x53b526(0x21f)](pluginData[_0x53b526(0x4a3)],_0x53b526(0x4ae),_0xe2e249=>{const _0x20a9a1=_0x53b526;$gameScreen[_0x20a9a1(0x2da)]();}),VisuMZ[_0x53b526(0x469)][_0x53b526(0x2a3)]=Scene_Boot[_0x53b526(0x3ab)][_0x53b526(0x357)],Scene_Boot[_0x53b526(0x3ab)][_0x53b526(0x357)]=function(){const _0x275710=_0x53b526;VisuMZ['MessageCore'][_0x275710(0x2a3)][_0x275710(0x1dc)](this),VisuMZ['MessageCore'][_0x275710(0x1d2)](),this[_0x275710(0x4d3)](),this[_0x275710(0x3ba)](),this[_0x275710(0x45b)](),this[_0x275710(0x2db)]();},VisuMZ[_0x53b526(0x469)][_0x53b526(0x1d2)]=function(){const _0x5acec2=_0x53b526;if(Imported[_0x5acec2(0x4da)]&&VisuMZ[_0x5acec2(0x474)][_0x5acec2(0x3f6)]<1.09){let _0x1cdcd7='';_0x1cdcd7+=_0x5acec2(0x2a2),_0x1cdcd7+=_0x5acec2(0x29b),alert(_0x1cdcd7),SceneManager[_0x5acec2(0x4c4)]();}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x4bb)]=function(_0x48a8c8){const _0x58c381=_0x53b526,_0x1b3527=VisuMZ[_0x58c381(0x469)][_0x58c381(0x398)][_0x48a8c8];_0x1b3527[_0x58c381(0x2e1)]((_0x5a2d44,_0x425065)=>{const _0x1a3b44=_0x58c381;if(!_0x5a2d44||!_0x425065)return-0x1;return _0x425065[_0x1a3b44(0x1c6)][_0x1a3b44(0x4f2)]-_0x5a2d44[_0x1a3b44(0x1c6)][_0x1a3b44(0x4f2)];});},Scene_Boot[_0x53b526(0x3ab)]['process_VisuMZ_MessageCore_TextCodes_Action']=function(){const _0x542e39=_0x53b526;VisuMZ[_0x542e39(0x469)]['SortObjectByKeyLength'](_0x542e39(0x288));for(const _0x5a89e3 of VisuMZ[_0x542e39(0x469)]['Settings'][_0x542e39(0x288)]){_0x5a89e3['Match']=_0x5a89e3[_0x542e39(0x1c6)][_0x542e39(0x40f)](),_0x5a89e3[_0x542e39(0x1c3)]=new RegExp('\x1b'+_0x5a89e3[_0x542e39(0x1c6)],'gi'),_0x5a89e3[_0x542e39(0x57e)]='\x1b'+_0x5a89e3[_0x542e39(0x1c6)];if(_0x5a89e3['Type']==='')_0x5a89e3[_0x542e39(0x57e)]+=_0x542e39(0x342);}},Scene_Boot[_0x53b526(0x3ab)][_0x53b526(0x3ba)]=function(){const _0x4e91d6=_0x53b526;VisuMZ['MessageCore'][_0x4e91d6(0x4bb)]('TextCodeReplace');for(const _0xb8ac3b of VisuMZ[_0x4e91d6(0x469)]['Settings'][_0x4e91d6(0x4d6)]){_0xb8ac3b[_0x4e91d6(0x1c3)]=new RegExp('\x1b'+_0xb8ac3b[_0x4e91d6(0x1c6)]+_0xb8ac3b['Type'],'gi'),_0xb8ac3b['TextStr']!==''&&_0xb8ac3b['TextStr']!=='Undefined'?_0xb8ac3b[_0x4e91d6(0x57e)]=new Function(_0x4e91d6(0x2ef)+_0xb8ac3b[_0x4e91d6(0x346)]['replace'](/\\/g,'\x1b')+'\x27'):_0xb8ac3b[_0x4e91d6(0x57e)]=_0xb8ac3b[_0x4e91d6(0x2c6)];}},Scene_Boot[_0x53b526(0x3ab)]['process_VisuMZ_MessageCore_TextMacros']=function(){const _0x7c6213=_0x53b526;for(const _0x3a5091 of VisuMZ['MessageCore'][_0x7c6213(0x398)][_0x7c6213(0x3c4)]){_0x3a5091[_0x7c6213(0x1c3)]=new RegExp('\x5c['+_0x3a5091[_0x7c6213(0x1c6)]+'\x5c]','gi');if(_0x3a5091[_0x7c6213(0x346)]!==''&&_0x3a5091[_0x7c6213(0x346)]!==_0x7c6213(0x2ec)){let _0x1acb20=_0x3a5091['TextStr'];_0x1acb20=_0x1acb20['replace'](/\\/g,'\x1b'),_0x1acb20=_0x1acb20[_0x7c6213(0x3e6)]('\x27','\x5c\x27'),_0x1acb20=_0x1acb20['replace']('\x22','\x5c\x22'),_0x3a5091[_0x7c6213(0x57e)]=new Function('return\x20\x27'+_0x1acb20+'\x27');}else _0x3a5091[_0x7c6213(0x57e)]=_0x3a5091[_0x7c6213(0x2c6)];}},Scene_Boot[_0x53b526(0x3ab)]['process_VisuMZ_MessageCore_AutoColor']=function(){const _0x1ee93e=_0x53b526,_0x160d14=VisuMZ[_0x1ee93e(0x469)]['Settings']['AutoColor'];!VisuMZ[_0x1ee93e(0x2fa)]&&(VisuMZ[_0x1ee93e(0x469)][_0x1ee93e(0x1be)]($dataClasses,_0x160d14[_0x1ee93e(0x228)]),VisuMZ[_0x1ee93e(0x469)][_0x1ee93e(0x1be)]($dataSkills,_0x160d14[_0x1ee93e(0x26a)]),VisuMZ[_0x1ee93e(0x469)]['AddAutoColor']($dataItems,_0x160d14[_0x1ee93e(0x26d)]),VisuMZ[_0x1ee93e(0x469)]['AddAutoColor']($dataWeapons,_0x160d14[_0x1ee93e(0x515)]),VisuMZ['MessageCore']['AddAutoColor']($dataArmors,_0x160d14['Armors']),VisuMZ['MessageCore'][_0x1ee93e(0x1be)]($dataEnemies,_0x160d14['Enemies']),VisuMZ[_0x1ee93e(0x469)][_0x1ee93e(0x1be)]($dataStates,_0x160d14['States'])),VisuMZ[_0x1ee93e(0x469)][_0x1ee93e(0x427)]();},VisuMZ['MessageCore']['AutoColorBypassList']=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^','<B>','</B>',_0x53b526(0x2b0),'</I>',_0x53b526(0x3de),'</LEFT>',_0x53b526(0x305),_0x53b526(0x22f),_0x53b526(0x442),_0x53b526(0x570),_0x53b526(0x531),_0x53b526(0x34b),_0x53b526(0x49d),')))',_0x53b526(0x385),_0x53b526(0x214),_0x53b526(0x227),_0x53b526(0x48c),_0x53b526(0x3b2),_0x53b526(0x4e6),_0x53b526(0x309),_0x53b526(0x544),_0x53b526(0x352),_0x53b526(0x4a6),_0x53b526(0x2e8),_0x53b526(0x362),_0x53b526(0x593),'SWITCHES',_0x53b526(0x25c),'ANY'],VisuMZ[_0x53b526(0x469)][_0x53b526(0x1be)]=function(_0x1ddb8b,_0x3719fc){const _0x4cdf4c=_0x53b526;if(_0x3719fc<=0x0)return;const _0x464401=_0x1ddb8b;for(const _0x3d3483 of _0x464401){if(!_0x3d3483)continue;VisuMZ[_0x4cdf4c(0x469)][_0x4cdf4c(0x452)](_0x3d3483,_0x3719fc);}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x427)]=function(){const _0x4165a7=_0x53b526;VisuMZ[_0x4165a7(0x469)][_0x4165a7(0x49f)]=[];for(let _0x150f89=0x1;_0x150f89<=0x1f;_0x150f89++){const _0x41850a=_0x4165a7(0x320)['format'](_0x150f89),_0x34bd43=VisuMZ['MessageCore'][_0x4165a7(0x398)][_0x4165a7(0x57d)][_0x41850a];_0x34bd43[_0x4165a7(0x2e1)]((_0x5014ae,_0x529f09)=>{const _0x40e2be=_0x4165a7;if(!_0x5014ae||!_0x529f09)return-0x1;return _0x529f09[_0x40e2be(0x4f2)]-_0x5014ae[_0x40e2be(0x4f2)];}),this[_0x4165a7(0x2e4)](_0x34bd43,_0x150f89);}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2e4)]=function(_0x527754,_0x220aeb){const _0xd7e257=_0x53b526;for(const _0x4e1c49 of _0x527754){if(_0x4e1c49[_0xd7e257(0x4f2)]<=0x0)continue;if(/^\d+$/[_0xd7e257(0x499)](_0x4e1c49))continue;let _0x4284fa=VisuMZ[_0xd7e257(0x469)][_0xd7e257(0x37c)](_0x4e1c49);if(_0x4e1c49[_0xd7e257(0x34e)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x2a8b87=new RegExp(_0x4284fa,'i');else var _0x2a8b87=new RegExp('\x5cb'+_0x4284fa+'\x5cb','g');VisuMZ[_0xd7e257(0x469)][_0xd7e257(0x49f)]['push']([_0x2a8b87,_0xd7e257(0x450)['format'](_0x220aeb,_0x4e1c49)]);}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x37c)]=function(_0x339302){const _0x6aaf72=_0x53b526;return _0x339302=_0x339302[_0x6aaf72(0x3e6)](/(\W)/gi,(_0x4e24e6,_0x522bb3)=>_0x6aaf72(0x488)[_0x6aaf72(0x2c3)](_0x522bb3)),_0x339302;},VisuMZ[_0x53b526(0x469)]['ParseClassNotetags']=VisuMZ[_0x53b526(0x509)],VisuMZ[_0x53b526(0x509)]=function(_0x8a4b48){const _0x4320bf=_0x53b526;VisuMZ[_0x4320bf(0x469)][_0x4320bf(0x509)]['call'](this,_0x8a4b48);const _0x401851=VisuMZ['MessageCore'][_0x4320bf(0x398)]['AutoColor'];VisuMZ[_0x4320bf(0x469)][_0x4320bf(0x452)](_0x8a4b48,_0x401851['Classes']);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2f1)]=VisuMZ[_0x53b526(0x2f1)],VisuMZ[_0x53b526(0x2f1)]=function(_0x5691be){const _0x4f4394=_0x53b526;VisuMZ[_0x4f4394(0x469)][_0x4f4394(0x2f1)][_0x4f4394(0x1dc)](this,_0x5691be);const _0x2ed453=VisuMZ['MessageCore'][_0x4f4394(0x398)][_0x4f4394(0x57d)];VisuMZ[_0x4f4394(0x469)][_0x4f4394(0x452)](_0x5691be,_0x2ed453[_0x4f4394(0x26a)]);},0x7,VisuMZ['MessageCore'][_0x53b526(0x2df)]=VisuMZ['ParseItemNotetags'],VisuMZ['ParseItemNotetags']=function(_0x2beed9){const _0x41897d=_0x53b526;VisuMZ['MessageCore'][_0x41897d(0x2df)][_0x41897d(0x1dc)](this,_0x2beed9);const _0x2cd1ed=VisuMZ[_0x41897d(0x469)][_0x41897d(0x398)][_0x41897d(0x57d)];VisuMZ[_0x41897d(0x469)]['CreateAutoColorFor'](_0x2beed9,_0x2cd1ed[_0x41897d(0x26d)]);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x348)]=VisuMZ['ParseWeaponNotetags'],VisuMZ[_0x53b526(0x348)]=function(_0x5cea5e){const _0x104720=_0x53b526;VisuMZ[_0x104720(0x469)][_0x104720(0x348)]['call'](this,_0x5cea5e);const _0xd6d79a=VisuMZ[_0x104720(0x469)][_0x104720(0x398)][_0x104720(0x57d)];VisuMZ[_0x104720(0x469)][_0x104720(0x452)](_0x5cea5e,_0xd6d79a[_0x104720(0x515)]);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x1b8)]=VisuMZ[_0x53b526(0x1b8)],VisuMZ[_0x53b526(0x1b8)]=function(_0xe9a05d){const _0x341824=_0x53b526;VisuMZ['MessageCore']['ParseArmorNotetags']['call'](this,_0xe9a05d);const _0x2e5a6a=VisuMZ[_0x341824(0x469)]['Settings'][_0x341824(0x57d)];VisuMZ[_0x341824(0x469)][_0x341824(0x452)](_0xe9a05d,_0x2e5a6a['Armors']);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2a6)]=VisuMZ[_0x53b526(0x2a6)],VisuMZ[_0x53b526(0x2a6)]=function(_0x5b3039){const _0x112e96=_0x53b526;VisuMZ['MessageCore'][_0x112e96(0x2a6)]['call'](this,_0x5b3039);const _0x943d1f=VisuMZ[_0x112e96(0x469)][_0x112e96(0x398)][_0x112e96(0x57d)];VisuMZ[_0x112e96(0x469)][_0x112e96(0x452)](_0x5b3039,_0x943d1f['Enemies']);},VisuMZ[_0x53b526(0x469)]['ParseStateNotetags']=VisuMZ[_0x53b526(0x50b)],VisuMZ[_0x53b526(0x50b)]=function(_0x407402){const _0x164792=_0x53b526;VisuMZ[_0x164792(0x469)]['ParseStateNotetags'][_0x164792(0x1dc)](this,_0x407402);const _0x441992=VisuMZ['MessageCore'][_0x164792(0x398)]['AutoColor'];VisuMZ[_0x164792(0x469)][_0x164792(0x452)](_0x407402,_0x441992[_0x164792(0x387)]);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x452)]=function(_0x4338dc,_0x1ea7ad){const _0x25bad4=_0x53b526;if(_0x1ea7ad<=0x0)return;const _0x36d0c4=VisuMZ[_0x25bad4(0x469)][_0x25bad4(0x398)]['AutoColor'][_0x25bad4(0x2d4)+_0x1ea7ad];let _0x2dee6c=_0x4338dc[_0x25bad4(0x4a3)][_0x25bad4(0x36a)]();if(/^\d+$/[_0x25bad4(0x499)](_0x2dee6c))return;if(VisuMZ['MessageCore']['AutoColorBypassList'][_0x25bad4(0x441)](_0x2dee6c[_0x25bad4(0x40f)]()))return;_0x2dee6c=_0x2dee6c[_0x25bad4(0x3e6)](/\\I\[(\d+)\]/gi,''),_0x2dee6c=_0x2dee6c[_0x25bad4(0x3e6)](/\x1bI\[(\d+)\]/gi,'');if(_0x2dee6c[_0x25bad4(0x4f2)]<=0x0)return;if(_0x2dee6c[_0x25bad4(0x34e)](/-----/i))return;_0x36d0c4[_0x25bad4(0x432)](_0x2dee6c);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x28f)]=Scene_Boot[_0x53b526(0x3ab)][_0x53b526(0x2a7)],Scene_Boot[_0x53b526(0x3ab)][_0x53b526(0x2a7)]=function(){const _0x327e9f=_0x53b526;VisuMZ[_0x327e9f(0x469)][_0x327e9f(0x28f)][_0x327e9f(0x1dc)](this),this[_0x327e9f(0x2ce)]();},Scene_Boot[_0x53b526(0x3ab)][_0x53b526(0x2ce)]=function(){const _0x118078=_0x53b526,_0xc075ed=VisuMZ[_0x118078(0x469)]['Settings']['CustomFonts']||[];for(const _0x575935 of _0xc075ed){if(!_0x575935)continue;const _0x332ce2=_0x575935['FontFamily'];if(_0x332ce2['trim']()==='')continue;if(_0x332ce2[_0x118078(0x29a)]()[_0x118078(0x36a)]()===_0x118078(0x2f5))continue;const _0x4ccaf0=_0x575935[_0x118078(0x260)];if(_0x4ccaf0==='Unnamed.ttf')continue;FontManager[_0x118078(0x553)](_0x332ce2,_0x4ccaf0);}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x4d9)]=DataManager['loadDatabase'],DataManager[_0x53b526(0x537)]=function(){const _0x3ba705=_0x53b526;VisuMZ[_0x3ba705(0x469)][_0x3ba705(0x4d9)][_0x3ba705(0x1dc)](this),this[_0x3ba705(0x522)]();},DataManager[_0x53b526(0x522)]=function(){const _0x1e2bd6=_0x53b526;if(!TextManager[_0x1e2bd6(0x270)]())return;const _0x3a18aa=VisuMZ[_0x1e2bd6(0x469)][_0x1e2bd6(0x398)][_0x1e2bd6(0x250)],_0x573de4=_0x3a18aa[_0x1e2bd6(0x383)]||'';if(!_0x573de4)return;const _0x4704d7=_0x1e2bd6(0x4e2),_0x1dd7c5=new XMLHttpRequest(),_0x49727e=_0x1e2bd6(0x330)+_0x573de4;window[_0x4704d7]=null,_0x1dd7c5['open'](_0x1e2bd6(0x3f0),_0x49727e),_0x1dd7c5[_0x1e2bd6(0x33b)](_0x1e2bd6(0x32c)),_0x1dd7c5[_0x1e2bd6(0x512)]=()=>this[_0x1e2bd6(0x436)](_0x1dd7c5,_0x4704d7),_0x1dd7c5[_0x1e2bd6(0x33f)]=()=>this[_0x1e2bd6(0x1d1)](),_0x1dd7c5[_0x1e2bd6(0x322)]();},DataManager[_0x53b526(0x436)]=function(_0x1991a7,_0x47f21f){const _0x41f082=_0x53b526;if(_0x1991a7['status']>=0x190)return;const _0x4eb813=_0x1991a7[_0x41f082(0x248)];window[_0x47f21f]=VisuMZ[_0x41f082(0x469)][_0x41f082(0x3db)](_0x4eb813);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x3db)]=function(_0x400b66){const _0x5c79dc=_0x53b526,_0x3173fa=_0x400b66[_0x5c79dc(0x286)]('\x0a'),_0xb8d87f=_0x3173fa[0x0][_0x5c79dc(0x286)](';'),_0x475e20={};return _0x3173fa[_0x5c79dc(0x3f1)](0x1)[_0x5c79dc(0x360)](_0x54f324=>{const _0x36e6e3=_0x5c79dc;let _0x3da477=[],_0xd665d4='',_0x14a44c=![];for(let _0x26e2e4=0x0;_0x26e2e4<_0x54f324[_0x36e6e3(0x4f2)];_0x26e2e4++){let _0x447d37=_0x54f324[_0x26e2e4];if(_0x447d37==='\x22')_0x14a44c&&_0x54f324[_0x26e2e4+0x1]==='\x22'?(_0xd665d4+=_0x447d37,_0x26e2e4++):_0x14a44c=!_0x14a44c;else _0x447d37===';'&&!_0x14a44c?(_0x3da477[_0x36e6e3(0x432)](_0xd665d4),_0xd665d4=''):_0xd665d4+=_0x447d37;}if(_0xd665d4)_0x3da477['push'](_0xd665d4);if(!_0x3da477[0x0])_0x3da477[0x0]='';const _0x31e883=_0x3da477[0x0][_0x36e6e3(0x3e6)](/^"|"$/g,'')['toLowerCase']()['trim']();_0x475e20[_0x31e883]=_0xb8d87f[_0x36e6e3(0x3f1)](0x1)[_0x36e6e3(0x1e3)]((_0x481424,_0x4393d2,_0x4e15eb)=>{return _0x481424[_0x4393d2]=(_0x3da477[_0x4e15eb+0x1]||'')['replace'](/^"|"$/g,''),_0x481424;},{});}),_0x475e20;},DataManager[_0x53b526(0x1d1)]=function(){const _0x2198c7=_0x53b526;let _0x54bbee='';_0x54bbee+=_0x2198c7(0x4eb),_0x54bbee+=_0x2198c7(0x1bc),confirm(_0x54bbee)?Utils[_0x2198c7(0x1f5)](_0x2198c7(0x499))?(_0x54bbee='CSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.\x0a',alert(_0x54bbee),this[_0x2198c7(0x3eb)](),this[_0x2198c7(0x2e7)](),_0x54bbee=''):_0x54bbee=_0x2198c7(0x3f9):_0x54bbee=_0x2198c7(0x50a),_0x54bbee+=_0x2198c7(0x47a),alert(_0x54bbee),SceneManager[_0x2198c7(0x4c4)]();},DataManager[_0x53b526(0x3eb)]=function(){const _0x129935=_0x53b526,_0x2ceede=[_0x129935(0x26c),_0x129935(0x2b1),_0x129935(0x349),_0x129935(0x37f),_0x129935(0x36f),_0x129935(0x475),_0x129935(0x53b),_0x129935(0x25f),_0x129935(0x2c9),_0x129935(0x549),_0x129935(0x45a),_0x129935(0x3aa),_0x129935(0x2ab),_0x129935(0x1ae),_0x129935(0x38e),_0x129935(0x4b0),'Japanese',_0x129935(0x232),_0x129935(0x253),'Polish','Portuguese',_0x129935(0x56c),_0x129935(0x3fa),_0x129935(0x3a1),'Spanish',_0x129935(0x2ea),_0x129935(0x359),_0x129935(0x424),_0x129935(0x2ad)],_0x3e3367=['Greeting',_0x129935(0x1e5),_0x129935(0x4b9),'你好','你好','Ahoj','Hej',_0x129935(0x27b),'Hei',_0x129935(0x43f),_0x129935(0x27b),_0x129935(0x269),_0x129935(0x4f0),_0x129935(0x396),_0x129935(0x56f),_0x129935(0x4db),_0x129935(0x1d0),_0x129935(0x4af),_0x129935(0x29d),_0x129935(0x51e),_0x129935(0x1cc),'Salut',_0x129935(0x456),_0x129935(0x4f6),_0x129935(0x510),_0x129935(0x299),_0x129935(0x216),_0x129935(0x1f9),_0x129935(0x327)],_0x359c73=[_0x129935(0x40c),_0x129935(0x559),_0x129935(0x22b),'再见','再見',_0x129935(0x379),_0x129935(0x33d),_0x129935(0x3d0),_0x129935(0x41b),_0x129935(0x3b1),_0x129935(0x316),_0x129935(0x461),_0x129935(0x56b),_0x129935(0x51b),_0x129935(0x3c5),_0x129935(0x257),'さようなら',_0x129935(0x296),_0x129935(0x395),_0x129935(0x494),'Adeus',_0x129935(0x268),_0x129935(0x3d4),_0x129935(0x394),_0x129935(0x594),_0x129935(0x52c),_0x129935(0x54e),_0x129935(0x332),_0x129935(0x30f)],_0x153acd=['Wow',_0x129935(0x317),_0x129935(0x525),'哇','哇','Ó',_0x129935(0x317),_0x129935(0x3b6),_0x129935(0x1c2),'Waouh',_0x129935(0x317),_0x129935(0x580),'वाह',_0x129935(0x49c),_0x129935(0x3b8),_0x129935(0x317),'ワオ','와우','Oi','O',_0x129935(0x254),'Uau',_0x129935(0x51d),'Ó',_0x129935(0x1b5),'Oj',_0x129935(0x234),'ว้าว',_0x129935(0x208)],_0x130971=[_0x2ceede,_0x3e3367,_0x359c73,_0x153acd],_0x196d33=_0x130971['map'](_0xa70151=>_0xa70151[_0x129935(0x1db)](';'))[_0x129935(0x1db)]('\x0a'),_0xec3afe=VisuMZ[_0x129935(0x469)][_0x129935(0x398)]['Localization'],_0x2fd764=_0xec3afe[_0x129935(0x383)]||'Languages.csv',_0x20b71c=require(_0x129935(0x455)),_0x532334=_0x20b71c[_0x129935(0x25e)](process[_0x129935(0x350)][_0x129935(0x490)]),_0x14488a=_0x20b71c[_0x129935(0x1db)](_0x532334,_0x129935(0x330)),_0x13fb7f=_0x14488a+_0x2fd764,_0x19a0cb=require('fs');return _0x19a0cb['writeFileSync'](_0x13fb7f,_0x196d33),_0x13fb7f;},DataManager['openLocalizationFolder']=function(){const _0x325271=_0x53b526,{exec:_0x4ddbce}=require(_0x325271(0x283));_0x4ddbce('start\x20.\x5cdata'),_0x4ddbce(_0x325271(0x4cc));},VisuMZ['MessageCore'][_0x53b526(0x484)]=ImageManager[_0x53b526(0x405)],ImageManager[_0x53b526(0x405)]=function(_0x3421a0,_0x229565){const _0x3d6480=_0x53b526;if(ConfigManager[_0x3d6480(0x575)]!==undefined){const _0x567e2d=VisuMZ[_0x3d6480(0x469)][_0x3d6480(0x398)][_0x3d6480(0x250)]||{},_0x34f2f5=_0x567e2d[_0x3d6480(0x21b)]||_0x3d6480(0x2b1),_0x147fe7=VisuMZ[_0x3d6480(0x469)][_0x3d6480(0x398)]['LanguageImages']||{},_0x175f54=ConfigManager[_0x3d6480(0x575)]||_0x34f2f5;if(_0x175f54===_0x34f2f5&&!_0x147fe7[_0x3d6480(0x35d)]){}else{const _0x1213cd=_0x147fe7[_0x175f54]||'[XX]';_0x3421a0&&_0x3421a0['match'](/\[XX\]/g)&&console[_0x3d6480(0x36d)](_0x3421a0,_0x229565),_0x229565&&_0x229565[_0x3d6480(0x34e)](/\[XX\]/g)&&(_0x229565=_0x229565[_0x3d6480(0x3e6)](/\[XX\]/g,_0x1213cd));}}return VisuMZ['MessageCore'][_0x3d6480(0x484)][_0x3d6480(0x1dc)](this,_0x3421a0,_0x229565);},SceneManager[_0x53b526(0x407)]=function(){const _0x2b49af=_0x53b526;return this[_0x2b49af(0x35e)]&&this[_0x2b49af(0x35e)][_0x2b49af(0x415)]===Scene_Battle;},SceneManager[_0x53b526(0x231)]=function(){const _0x5ab1fe=_0x53b526;return this['_scene']&&this[_0x5ab1fe(0x35e)][_0x5ab1fe(0x415)]===Scene_Map;},ConfigManager[_0x53b526(0x575)]=VisuMZ[_0x53b526(0x469)][_0x53b526(0x398)][_0x53b526(0x250)][_0x53b526(0x21b)]||_0x53b526(0x2b1),ConfigManager[_0x53b526(0x4a0)]=VisuMZ[_0x53b526(0x469)]['Settings']['TextSpeed']['Default'],VisuMZ['MessageCore'][_0x53b526(0x541)]=ConfigManager[_0x53b526(0x203)],ConfigManager[_0x53b526(0x203)]=function(){const _0x1637d4=_0x53b526,_0x5c61f4=VisuMZ[_0x1637d4(0x469)][_0x1637d4(0x541)][_0x1637d4(0x1dc)](this);return TextManager[_0x1637d4(0x270)]()&&(_0x5c61f4[_0x1637d4(0x575)]=this['textLocale']),_0x5c61f4[_0x1637d4(0x4a0)]=this[_0x1637d4(0x4a0)],_0x5c61f4;},VisuMZ['MessageCore'][_0x53b526(0x401)]=ConfigManager[_0x53b526(0x38d)],ConfigManager[_0x53b526(0x38d)]=function(_0x2e1ed7){const _0x3d32b2=_0x53b526;VisuMZ[_0x3d32b2(0x469)]['ConfigManager_applyData']['call'](this,_0x2e1ed7),TextManager[_0x3d32b2(0x270)]()&&('textLocale'in _0x2e1ed7?this[_0x3d32b2(0x575)]=String(_0x2e1ed7[_0x3d32b2(0x575)]):this[_0x3d32b2(0x575)]=VisuMZ[_0x3d32b2(0x469)][_0x3d32b2(0x398)][_0x3d32b2(0x250)][_0x3d32b2(0x21b)]||_0x3d32b2(0x2b1)),_0x3d32b2(0x4a0)in _0x2e1ed7?this['textSpeed']=Number(_0x2e1ed7[_0x3d32b2(0x4a0)])[_0x3d32b2(0x300)](0x1,0xb):this['textSpeed']=VisuMZ['MessageCore'][_0x3d32b2(0x398)][_0x3d32b2(0x33c)]['Default'];},TextManager[_0x53b526(0x440)]=VisuMZ[_0x53b526(0x469)][_0x53b526(0x398)]['Localization'][_0x53b526(0x263)],TextManager['messageCoreTextSpeed']=VisuMZ[_0x53b526(0x469)][_0x53b526(0x398)]['TextSpeed'][_0x53b526(0x263)],TextManager[_0x53b526(0x4ec)]=VisuMZ[_0x53b526(0x469)]['Settings']['TextSpeed'][_0x53b526(0x264)],VisuMZ[_0x53b526(0x469)][_0x53b526(0x24a)]=TextManager['message'],TextManager[_0x53b526(0x587)]=function(_0x4035fd){const _0x573f61=_0x53b526,_0x2e7408=['levelUp','emerge','preemptive',_0x573f61(0x58c),_0x573f61(0x3ea),_0x573f61(0x262),_0x573f61(0x38a),_0x573f61(0x2d1),'obtainGold',_0x573f61(0x556)];let _0x38f5ac=VisuMZ[_0x573f61(0x469)]['TextManager_message'][_0x573f61(0x1dc)](this,_0x4035fd);return _0x2e7408[_0x573f61(0x441)](_0x4035fd)&&(_0x38f5ac=_0x573f61(0x214)+_0x38f5ac),_0x38f5ac;},TextManager['isVisuMzLocalizationEnabled']=function(){const _0x2bd8dc=_0x53b526;return VisuMZ[_0x2bd8dc(0x469)][_0x2bd8dc(0x398)]['Localization'][_0x2bd8dc(0x20b)];},TextManager['parseLocalizedText']=function(_0x12a5f6){const _0x42eeee=_0x53b526;if(!this['isVisuMzLocalizationEnabled']())return _0x12a5f6;return _0x12a5f6=String(_0x12a5f6)[_0x42eeee(0x3e6)](/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x1e08a1,_0x11297b)=>this[_0x42eeee(0x485)](String(_0x11297b))),_0x12a5f6=String(_0x12a5f6)[_0x42eeee(0x3e6)](/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x22aab5,_0x59f26d)=>this[_0x42eeee(0x485)](String(_0x59f26d))),_0x12a5f6=String(_0x12a5f6)[_0x42eeee(0x3e6)](/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x351b20,_0x2535f5)=>this[_0x42eeee(0x485)](String(_0x2535f5))),_0x12a5f6;},TextManager[_0x53b526(0x485)]=function(_0x5b7f74){const _0x3f934a=_0x53b526;if(!$dataLocalization)return'';const _0x13b54d=$dataLocalization[_0x5b7f74[_0x3f934a(0x29a)]()[_0x3f934a(0x36a)]()];if(!_0x13b54d)return;const _0x3a076a=ConfigManager['textLocale']||_0x3f934a(0x2b1);let _0x7c6c10=_0x13b54d[_0x3a076a]||_0x3f934a(0x463);return _0x7c6c10=_0x7c6c10[_0x3f934a(0x3e6)](/\\/g,'\x1b'),_0x7c6c10=_0x7c6c10[_0x3f934a(0x3e6)](/<SEMI(?:|-COLON|COLON)>/gi,';'),_0x7c6c10;},TextManager[_0x53b526(0x210)]=function(_0x3e044f){const _0x3a98cc=_0x53b526;return VisuMZ[_0x3a98cc(0x469)][_0x3a98cc(0x398)]['Localization'][_0x3e044f]||'';},TextManager[_0x53b526(0x410)]=function(){const _0x20c3fd=_0x53b526,_0x552f91=ConfigManager[_0x20c3fd(0x575)]||_0x20c3fd(0x2b1);return this[_0x20c3fd(0x210)](_0x552f91);},TextManager[_0x53b526(0x470)]=function(_0x59cb9f){const _0x14de83=_0x53b526,_0x3ec132=VisuMZ[_0x14de83(0x469)]['Settings'][_0x14de83(0x250)]['Languages']||[];let _0x1e08d1=_0x3ec132[_0x14de83(0x2bd)](ConfigManager[_0x14de83(0x575)]||'English');_0x1e08d1+=_0x59cb9f;const _0x3f82f8=_0x3ec132[_0x1e08d1]||'';return this[_0x14de83(0x210)](_0x3f82f8);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x40a)]=Game_System[_0x53b526(0x3ab)][_0x53b526(0x478)],Game_System['prototype'][_0x53b526(0x478)]=function(){const _0x51c45e=_0x53b526;let _0x1b59cf=VisuMZ[_0x51c45e(0x469)][_0x51c45e(0x40a)][_0x51c45e(0x1dc)](this);if(ConfigManager&&ConfigManager['textFont']!==undefined&&ConfigManager[_0x51c45e(0x301)]>0x0)return _0x1b59cf;else{const _0x47cec0=ConfigManager['textLocale']||_0x51c45e(0x2b1),_0x30d31b=VisuMZ[_0x51c45e(0x469)]['Settings'][_0x51c45e(0x353)];return _0x30d31b[_0x47cec0]!==undefined&&(_0x1b59cf=_0x30d31b[_0x47cec0]+',\x20'+$dataSystem['advanced'][_0x51c45e(0x3cd)]),_0x1b59cf;}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x535)]=Window_Command[_0x53b526(0x3ab)][_0x53b526(0x46a)],Window_Command['prototype']['addCommand']=function(_0x5e5ced,_0x45db58,_0x477482,_0xacc336){const _0x278161=_0x53b526;if(TextManager[_0x278161(0x2c5)]&&TextManager[_0x278161(0x270)]()){const _0x58448b=String(_0x5e5ced)[_0x278161(0x29a)]()[_0x278161(0x36a)]();if($dataLocalization[_0x58448b]&&_0x58448b[_0x278161(0x4f2)]>0x0){const _0x222b8f=ConfigManager[_0x278161(0x575)]||_0x278161(0x2b1);_0x5e5ced=$dataLocalization[_0x58448b][_0x222b8f]||_0x278161(0x463);}}VisuMZ[_0x278161(0x469)][_0x278161(0x535)][_0x278161(0x1dc)](this,_0x5e5ced,_0x45db58,_0x477482,_0xacc336);},Window_StatusBase[_0x53b526(0x3ab)][_0x53b526(0x4cd)]=function(_0x38579b,_0x12ea9f){const _0x381cd0=_0x53b526,_0x12a6ca=_0x38579b[_0x381cd0(0x504)]();let _0x49fb67=$dataSystem[_0x381cd0(0x420)][_0x12a6ca[_0x12ea9f]];if(TextManager[_0x381cd0(0x2c5)]){const _0x241fbd=String(_0x49fb67)[_0x381cd0(0x29a)]()['trim']();if(TextManager[_0x381cd0(0x270)]()&&$dataLocalization[_0x241fbd]){const _0x408fbb=ConfigManager[_0x381cd0(0x575)]||_0x381cd0(0x2b1);_0x49fb67=$dataLocalization[_0x241fbd][_0x408fbb]||'UNDEFINED!';}}return _0x49fb67;},Game_Temp['prototype'][_0x53b526(0x1d8)]=function(_0x11a459){const _0xb50a4=_0x53b526;this[_0xb50a4(0x4f8)]=_0x11a459;},Game_Temp['prototype'][_0x53b526(0x1f4)]=function(){const _0x28cfba=_0x53b526;return this[_0x28cfba(0x4f8)];},VisuMZ['MessageCore'][_0x53b526(0x422)]=Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x1b6)],Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x1b6)]=function(_0x18ec81){const _0xb5953e=_0x53b526;return $gameTemp[_0xb5953e(0x1d8)](this),VisuMZ[_0xb5953e(0x469)][_0xb5953e(0x422)][_0xb5953e(0x1dc)](this,_0x18ec81);},VisuMZ['MessageCore'][_0x53b526(0x2f9)]=Game_System[_0x53b526(0x3ab)][_0x53b526(0x1cb)],Game_System[_0x53b526(0x3ab)][_0x53b526(0x1cb)]=function(){const _0x42be52=_0x53b526;VisuMZ[_0x42be52(0x469)]['Game_System_initialize'][_0x42be52(0x1dc)](this),this[_0x42be52(0x2fc)]();},Game_System[_0x53b526(0x3ab)][_0x53b526(0x2fc)]=function(){const _0x12e324=_0x53b526,_0x3d23fe=VisuMZ[_0x12e324(0x469)][_0x12e324(0x398)][_0x12e324(0x425)],_0x8647d5=VisuMZ[_0x12e324(0x469)][_0x12e324(0x398)][_0x12e324(0x1f7)];this[_0x12e324(0x30c)]={'messageRows':_0x3d23fe[_0x12e324(0x2d0)],'messageWidth':_0x3d23fe[_0x12e324(0x58e)],'messageWordWrap':_0x8647d5[_0x12e324(0x431)],'helpWordWrap':_0x8647d5[_0x12e324(0x2dd)],'choiceLineHeight':_0x3d23fe['ChoiceWindowLineHeight'],'choiceMinWidth':_0x3d23fe['ChoiceWindowMinWidth']??0x60,'choiceRows':_0x3d23fe[_0x12e324(0x471)],'choiceCols':_0x3d23fe[_0x12e324(0x273)],'choiceTextAlign':_0x3d23fe[_0x12e324(0x3d3)],'choiceDistance':0x0},this[_0x12e324(0x37a)]===undefined&&(this[_0x12e324(0x37a)]=_0x3d23fe['MsgWindowOffsetX'],this[_0x12e324(0x4cf)]=_0x3d23fe[_0x12e324(0x459)]);},Game_System[_0x53b526(0x3ab)]['getMessageWindowRows']=function(){const _0x5ee10f=_0x53b526;if(this['_MessageCoreSettings']===undefined)this[_0x5ee10f(0x2fc)]();if(this['_MessageCoreSettings']['messageRows']===undefined)this[_0x5ee10f(0x2fc)]();return this[_0x5ee10f(0x30c)][_0x5ee10f(0x545)];},Game_System[_0x53b526(0x3ab)]['setMessageWindowRows']=function(_0x595f9d){const _0x28ae5d=_0x53b526;if(this[_0x28ae5d(0x30c)]===undefined)this[_0x28ae5d(0x2fc)]();if(this[_0x28ae5d(0x30c)][_0x28ae5d(0x545)]===undefined)this['initMessageCore']();this['_MessageCoreSettings']['messageRows']=_0x595f9d||0x1;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x501)]=function(){const _0xc587cb=_0x53b526;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();if(this[_0xc587cb(0x30c)][_0xc587cb(0x389)]===undefined)this[_0xc587cb(0x2fc)]();return this['_MessageCoreSettings'][_0xc587cb(0x389)];},Game_System[_0x53b526(0x3ab)][_0x53b526(0x43a)]=function(_0x31530d){const _0x5adb0c=_0x53b526;if(this[_0x5adb0c(0x30c)]===undefined)this[_0x5adb0c(0x2fc)]();if(this[_0x5adb0c(0x30c)][_0x5adb0c(0x389)]===undefined)this[_0x5adb0c(0x2fc)]();_0x31530d=Math[_0x5adb0c(0x3d1)](_0x31530d);if(_0x31530d%0x2!==0x0)_0x31530d+=0x1;this[_0x5adb0c(0x30c)]['messageWidth']=_0x31530d||0x2;},Game_System['prototype'][_0x53b526(0x338)]=function(){const _0x35df7e=_0x53b526;if(this['_MessageCoreSettings']===undefined)this[_0x35df7e(0x2fc)]();if(this[_0x35df7e(0x30c)][_0x35df7e(0x213)]===undefined)this[_0x35df7e(0x2fc)]();return this[_0x35df7e(0x30c)][_0x35df7e(0x213)];},Game_System['prototype']['setMessageWindowWordWrap']=function(_0x3e2b85){const _0x1b1b8e=_0x53b526;if(this[_0x1b1b8e(0x30c)]===undefined)this[_0x1b1b8e(0x2fc)]();if(this[_0x1b1b8e(0x30c)][_0x1b1b8e(0x213)]===undefined)this[_0x1b1b8e(0x2fc)]();this['_MessageCoreSettings'][_0x1b1b8e(0x213)]=_0x3e2b85;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x1e4)]=function(){const _0xa327c2=_0x53b526;if(this['_messageOffsetX']===undefined){const _0x10bd0d=VisuMZ[_0xa327c2(0x469)][_0xa327c2(0x398)][_0xa327c2(0x425)];this[_0xa327c2(0x37a)]=_0x10bd0d[_0xa327c2(0x539)],this[_0xa327c2(0x4cf)]=_0x10bd0d['MsgWindowOffsetY'];}return{'x':this[_0xa327c2(0x37a)]||0x0,'y':this['_messageOffsetY']||0x0};},Game_System[_0x53b526(0x3ab)]['setMessageWindowXyOffsets']=function(_0x1b87af,_0x4a80f6){const _0x579f7b=_0x53b526;if(this[_0x579f7b(0x30c)]===undefined)this[_0x579f7b(0x2fc)]();this['_messageOffsetX']=_0x1b87af,this[_0x579f7b(0x4cf)]=_0x4a80f6;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x4ba)]=function(){const _0x1c52e3=_0x53b526;if(this[_0x1c52e3(0x30c)]===undefined)this[_0x1c52e3(0x2fc)]();if(this[_0x1c52e3(0x30c)]['helpWordWrap']===undefined)this[_0x1c52e3(0x2fc)]();return this['_MessageCoreSettings'][_0x1c52e3(0x34a)];},Game_System['prototype'][_0x53b526(0x37e)]=function(_0x8308d6){const _0x1aaf47=_0x53b526;if(this[_0x1aaf47(0x30c)]===undefined)this[_0x1aaf47(0x2fc)]();if(this[_0x1aaf47(0x30c)][_0x1aaf47(0x34a)]===undefined)this[_0x1aaf47(0x2fc)]();this[_0x1aaf47(0x30c)][_0x1aaf47(0x34a)]=_0x8308d6;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x204)]=function(){const _0x11ce03=_0x53b526;if(this[_0x11ce03(0x30c)]===undefined)this[_0x11ce03(0x2fc)]();if(this[_0x11ce03(0x30c)][_0x11ce03(0x318)]===undefined)this[_0x11ce03(0x2fc)]();return this[_0x11ce03(0x30c)][_0x11ce03(0x318)];},Game_System[_0x53b526(0x3ab)]['setChoiceListLineHeight']=function(_0x2ccb11){const _0x1f4a23=_0x53b526;if(this[_0x1f4a23(0x30c)]===undefined)this[_0x1f4a23(0x2fc)]();if(this[_0x1f4a23(0x30c)][_0x1f4a23(0x318)]===undefined)this[_0x1f4a23(0x2fc)]();this[_0x1f4a23(0x30c)]['choiceLineHeight']=_0x2ccb11||0x1;},Game_System['prototype'][_0x53b526(0x3cb)]=function(){const _0xed9a06=_0x53b526;if(this['_MessageCoreSettings']===undefined)this['initMessageCore']();return this[_0xed9a06(0x30c)][_0xed9a06(0x238)]??0x60;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x2bc)]=function(_0x3bccde){const _0x5606bb=_0x53b526;if(this[_0x5606bb(0x30c)]===undefined)this[_0x5606bb(0x2fc)]();this[_0x5606bb(0x30c)]['choiceMinWidth']=_0x3bccde||0x0;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x221)]=function(){const _0x5aff3f=_0x53b526;if(this['_MessageCoreSettings']===undefined)this[_0x5aff3f(0x2fc)]();if(this[_0x5aff3f(0x30c)][_0x5aff3f(0x2c2)]===undefined)this[_0x5aff3f(0x2fc)]();return this[_0x5aff3f(0x30c)][_0x5aff3f(0x2c2)];},Game_System[_0x53b526(0x3ab)][_0x53b526(0x507)]=function(_0x2359bf){const _0x4fd3fa=_0x53b526;if(this[_0x4fd3fa(0x30c)]===undefined)this[_0x4fd3fa(0x2fc)]();if(this[_0x4fd3fa(0x30c)][_0x4fd3fa(0x2c2)]===undefined)this['initMessageCore']();this[_0x4fd3fa(0x30c)][_0x4fd3fa(0x2c2)]=_0x2359bf||0x1;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x27f)]=function(){const _0x48ef38=_0x53b526;if(this[_0x48ef38(0x30c)]===undefined)this['initMessageCore']();if(this[_0x48ef38(0x30c)][_0x48ef38(0x329)]===undefined)this[_0x48ef38(0x2fc)]();return this['_MessageCoreSettings'][_0x48ef38(0x329)];},Game_System[_0x53b526(0x3ab)][_0x53b526(0x1bf)]=function(_0x2ebf3d){const _0x4a580b=_0x53b526;if(this[_0x4a580b(0x30c)]===undefined)this[_0x4a580b(0x2fc)]();if(this[_0x4a580b(0x30c)][_0x4a580b(0x329)]===undefined)this[_0x4a580b(0x2fc)]();this[_0x4a580b(0x30c)][_0x4a580b(0x329)]=_0x2ebf3d||0x1;},Game_System['prototype'][_0x53b526(0x3bb)]=function(){const _0xe6117e=_0x53b526;if(this[_0xe6117e(0x30c)]===undefined)this[_0xe6117e(0x2fc)]();if(this[_0xe6117e(0x30c)][_0xe6117e(0x23c)]===undefined)this['initMessageCore']();return this['_MessageCoreSettings'][_0xe6117e(0x23c)];},Game_System[_0x53b526(0x3ab)]['setChoiceListTextAlign']=function(_0xeddec7){const _0x1fc03a=_0x53b526;if(this['_MessageCoreSettings']===undefined)this[_0x1fc03a(0x2fc)]();if(this[_0x1fc03a(0x30c)][_0x1fc03a(0x23c)]===undefined)this['initMessageCore']();this['_MessageCoreSettings'][_0x1fc03a(0x23c)]=_0xeddec7[_0x1fc03a(0x29a)]();},Game_System[_0x53b526(0x3ab)]['getChoiceMessageDistance']=function(){const _0x2d4791=_0x53b526;if(this[_0x2d4791(0x30c)]===undefined)this[_0x2d4791(0x2fc)]();return this[_0x2d4791(0x30c)]['choiceDistance']||0x0;},Game_System[_0x53b526(0x3ab)][_0x53b526(0x4ab)]=function(_0x3743a1){const _0xdf843c=_0x53b526;if(this[_0xdf843c(0x30c)]===undefined)this[_0xdf843c(0x2fc)]();this[_0xdf843c(0x30c)][_0xdf843c(0x2b7)]=_0x3743a1||0x0;},Game_Message['prototype']['setWeaponChoice']=function(_0x3efb6a,_0x2ae323){const _0x2ebc85=_0x53b526;this['_itemChoiceVariableId']=_0x3efb6a,this['_itemChoiceItypeId']=_0x2ebc85(0x23d),this[_0x2ebc85(0x365)]=_0x2ae323,this[_0x2ebc85(0x1c9)]=0x0;},Game_Message[_0x53b526(0x3ab)][_0x53b526(0x2f3)]=function(){return this['_itemChoiceWtypeId']||0x0;},Game_Message[_0x53b526(0x3ab)][_0x53b526(0x1e9)]=function(_0x2f2d9c,_0x1dcb42,_0x1712d){const _0x3532e1=_0x53b526;this[_0x3532e1(0x4d0)]=_0x2f2d9c,this[_0x3532e1(0x57c)]=_0x3532e1(0x4df),this[_0x3532e1(0x402)]=_0x1dcb42,this[_0x3532e1(0x1c9)]=_0x1712d;},Game_Message['prototype'][_0x53b526(0x3fb)]=function(){const _0x5e10db=_0x53b526;return this[_0x5e10db(0x402)]||0x0;},Game_Message[_0x53b526(0x3ab)][_0x53b526(0x574)]=function(){const _0x1ff69e=_0x53b526;return this[_0x1ff69e(0x1c9)]||0x0;},Game_Message['prototype']['setSkillChoice']=function(_0x2a716d,_0x38c0dd,_0x19b80d){const _0x1c91f1=_0x53b526;this['_itemChoiceVariableId']=_0x2a716d,this[_0x1c91f1(0x57c)]=_0x1c91f1(0x1e6),this[_0x1c91f1(0x4ca)]=_0x38c0dd,this[_0x1c91f1(0x3a0)]=_0x19b80d;},Game_Message[_0x53b526(0x3ab)][_0x53b526(0x31b)]=function(){const _0xe04eaa=_0x53b526;return this[_0xe04eaa(0x4ca)]||0x0;},Game_Message[_0x53b526(0x3ab)][_0x53b526(0x246)]=function(){return $gameActors['actor'](this['itemChoiceActorId']())||$gameParty['leader']()||null;},Game_Message[_0x53b526(0x3ab)][_0x53b526(0x565)]=function(){return this['_itemChoiceStypeId']||0x0;},VisuMZ['MessageCore'][_0x53b526(0x3e5)]=Game_Message[_0x53b526(0x3ab)][_0x53b526(0x1fa)],Game_Message[_0x53b526(0x3ab)][_0x53b526(0x1fa)]=function(_0x2e4fd7,_0x22b3be,_0x42aad2){const _0x2b8bd4=_0x53b526;this[_0x2b8bd4(0x2b6)]=!![],VisuMZ[_0x2b8bd4(0x469)][_0x2b8bd4(0x3e5)][_0x2b8bd4(0x1dc)](this,_0x2e4fd7,_0x22b3be,_0x42aad2);},Game_Message[_0x53b526(0x3ab)]['setupShuffleChoices']=function(){const _0xbbc470=_0x53b526;this[_0xbbc470(0x2b6)]=![],this[_0xbbc470(0x50f)]=[];const _0x60542=this[_0xbbc470(0x20a)]['length'];this[_0xbbc470(0x31e)]=_0x60542;let _0x495f75=![];for(let _0xd0ef14=0x0;_0xd0ef14<_0x60542;_0xd0ef14++){let _0x71e41=this['_choices'][_0xd0ef14];_0x71e41['match'](/<SHUFFLE>/gi)&&(_0x495f75=!![],_0x71e41=_0x71e41[_0xbbc470(0x3e6)](/<SHUFFLE>/gi,'')),_0x71e41[_0xbbc470(0x34e)](/<SHUFFLE:[ ](\d+)>/gi)&&(_0x495f75=!![],this[_0xbbc470(0x31e)]=Math['min'](Number(RegExp['$1']),this[_0xbbc470(0x31e)]),_0x71e41=_0x71e41[_0xbbc470(0x3e6)](/<SHUFFLE:[ ](\d+)>/gi,'')),_0x71e41[_0xbbc470(0x34e)](/<SHUFFLE: VAR[ ](\d+)>/gi)&&(_0x495f75=!![],this[_0xbbc470(0x31e)]=Math[_0xbbc470(0x3c9)]($gameVariables[_0xbbc470(0x290)](Number(RegExp['$1']))||0x1,this['_maxShuffleChoices']),_0x71e41=_0x71e41[_0xbbc470(0x3e6)](/<SHUFFLE:[ ]VAR (\d+)>/gi,'')),this[_0xbbc470(0x50f)][_0xbbc470(0x432)](_0xd0ef14),this['_choices'][_0xd0ef14]=_0x71e41;}if(_0x495f75){this['_choiceIndexArray']=VisuMZ[_0xbbc470(0x469)][_0xbbc470(0x2d5)](this[_0xbbc470(0x50f)]);if(this[_0xbbc470(0x1e8)]()!==-0x2)this[_0xbbc470(0x3be)]=-0x1;}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2d5)]=function(_0x57d810){const _0x205dee=_0x53b526;var _0x1763c0,_0x18b49e,_0xf9be44;for(_0xf9be44=_0x57d810[_0x205dee(0x4f2)]-0x1;_0xf9be44>0x0;_0xf9be44--){_0x1763c0=Math[_0x205dee(0x538)](Math[_0x205dee(0x1c4)]()*(_0xf9be44+0x1)),_0x18b49e=_0x57d810[_0xf9be44],_0x57d810[_0xf9be44]=_0x57d810[_0x1763c0],_0x57d810[_0x1763c0]=_0x18b49e;}return _0x57d810;},Game_Message['prototype'][_0x53b526(0x1ee)]=function(){const _0x5ceb81=_0x53b526;if(!this['_choiceIndexArray'])this[_0x5ceb81(0x4f5)]();return this['_choiceIndexArray'];},Game_Message['prototype']['maxShuffleChoices']=function(){const _0x2797f4=_0x53b526;if(this[_0x2797f4(0x31e)]===undefined)this[_0x2797f4(0x4f5)]();return this['_maxShuffleChoices'];},VisuMZ[_0x53b526(0x469)][_0x53b526(0x412)]=Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x46e)],Game_Screen['prototype'][_0x53b526(0x46e)]=function(){const _0x1d41ad=_0x53b526;VisuMZ[_0x1d41ad(0x469)]['Game_Screen_clearPictures'][_0x1d41ad(0x1dc)](this),this[_0x1d41ad(0x32f)]();},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x32f)]=function(){const _0xe892e2=_0x53b526;this[_0xe892e2(0x382)]=[],this[_0xe892e2(0x524)]=[],this[_0xe892e2(0x1f6)]=[];},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x2d6)]=function(_0x3dc518){const _0x13e2da=_0x53b526;if(this[_0x13e2da(0x382)]===undefined)this[_0x13e2da(0x32f)]();const _0x3ab60e=this[_0x13e2da(0x462)](_0x3dc518);return this[_0x13e2da(0x382)][_0x3ab60e]=this[_0x13e2da(0x382)][_0x3ab60e]||{},this[_0x13e2da(0x382)][_0x3ab60e];},Game_Screen[_0x53b526(0x3ab)]['getPictureText']=function(_0x1ef984,_0xf2fc04){const _0x494cba=_0x53b526;return _0xf2fc04=_0xf2fc04[_0x494cba(0x29a)]()['trim'](),this[_0x494cba(0x2d6)](_0x1ef984)[_0xf2fc04]||'';},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x1f0)]=function(_0x58164f,_0x4262bd,_0x2934c2){const _0x54c84e=_0x53b526;_0x2934c2=_0x2934c2[_0x54c84e(0x29a)]()[_0x54c84e(0x36a)](),this[_0x54c84e(0x2d6)](_0x58164f)[_0x2934c2]=_0x4262bd||'',this[_0x54c84e(0x266)](_0x58164f,!![]);},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x397)]=function(_0x15606b){const _0x4f5a16=_0x53b526;if(this[_0x4f5a16(0x382)]===undefined)this[_0x4f5a16(0x32f)]();const _0x5ab25f=this[_0x4f5a16(0x462)](_0x15606b);this[_0x4f5a16(0x382)][_0x5ab25f]=null,this[_0x4f5a16(0x266)](_0x15606b,!![]);},Game_Screen[_0x53b526(0x3ab)]['getPictureTextBuffer']=function(_0xdcd0ec){const _0x58978c=_0x53b526;if(this[_0x58978c(0x382)]===undefined)this[_0x58978c(0x32f)]();const _0x5e9d2d=this[_0x58978c(0x462)](_0xdcd0ec);return this[_0x58978c(0x524)][_0x5e9d2d]||0x0;},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x45e)]=function(_0x3e2357,_0x5d0c8e){const _0x24fd09=_0x53b526;if(this[_0x24fd09(0x382)]===undefined)this[_0x24fd09(0x32f)]();const _0xe2d220=this[_0x24fd09(0x462)](_0x3e2357);this[_0x24fd09(0x524)][_0xe2d220]=Math[_0x24fd09(0x592)](0x0,_0x5d0c8e);},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x2d3)]=function(_0x1e2ffc){const _0x5a87f2=_0x53b526;if(this[_0x5a87f2(0x382)]===undefined)this[_0x5a87f2(0x32f)]();const _0x15cc01=this[_0x5a87f2(0x462)](_0x1e2ffc);this['_pictureTextBuffer'][_0x15cc01]=undefined;},VisuMZ[_0x53b526(0x469)][_0x53b526(0x419)]=Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x447)],Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x447)]=function(_0x3bbb1e){const _0x1e841d=_0x53b526;VisuMZ[_0x1e841d(0x469)]['Game_Screen_erasePicture'][_0x1e841d(0x1dc)](this,_0x3bbb1e),this[_0x1e841d(0x397)](_0x3bbb1e),this[_0x1e841d(0x2d3)](_0x3bbb1e),this[_0x1e841d(0x266)](_0x3bbb1e,!![]);},Game_Screen[_0x53b526(0x3ab)][_0x53b526(0x2da)]=function(){const _0x217a3e=_0x53b526;for(const _0x51dcbf of this[_0x217a3e(0x2f4)]){if(_0x51dcbf){let _0x4e7a07=this[_0x217a3e(0x2f4)][_0x217a3e(0x2bd)](_0x51dcbf);this[_0x217a3e(0x266)](_0x4e7a07);}}},Game_Screen[_0x53b526(0x3ab)]['requestPictureTextRefresh']=function(_0x46e098,_0x4dee8d){const _0x454051=_0x53b526;this[_0x454051(0x1f6)]=this[_0x454051(0x1f6)]||[],(this[_0x454051(0x363)](_0x46e098)||_0x4dee8d)&&this['_pictureTextRefresh'][_0x454051(0x432)](_0x46e098);},Game_Screen['prototype'][_0x53b526(0x4ea)]=function(_0x30d41c){const _0x407fa3=_0x53b526;return this[_0x407fa3(0x1f6)]=this[_0x407fa3(0x1f6)]||[],this[_0x407fa3(0x1f6)]['includes'](_0x30d41c);},Game_Screen['prototype'][_0x53b526(0x558)]=function(_0x55a5f6){const _0x498bf0=_0x53b526;this[_0x498bf0(0x1f6)]=this['_pictureTextRefresh']||[],this['_pictureTextRefresh']['remove'](_0x55a5f6);},Game_Screen['prototype'][_0x53b526(0x363)]=function(_0x4d4f5d){const _0x10f1b7=_0x53b526,_0x53b23b=['upperleft','up','upperright','left',_0x10f1b7(0x293),_0x10f1b7(0x2a9),_0x10f1b7(0x477),_0x10f1b7(0x53a),'lowerright'];return _0x53b23b['some'](_0x32efb9=>this['getPictureText'](_0x4d4f5d,_0x32efb9)!=='');},VisuMZ[_0x53b526(0x469)][_0x53b526(0x586)]=Game_Party[_0x53b526(0x3ab)][_0x53b526(0x1cb)],Game_Party[_0x53b526(0x3ab)]['initialize']=function(){const _0x3918b2=_0x53b526;VisuMZ[_0x3918b2(0x469)][_0x3918b2(0x586)][_0x3918b2(0x1dc)](this),this[_0x3918b2(0x2fc)]();},Game_Party['prototype']['initMessageCore']=function(){const _0x622bcc=_0x53b526;this[_0x622bcc(0x1f2)]={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party[_0x53b526(0x3ab)][_0x53b526(0x3c3)]=function(){const _0x127415=_0x53b526;if(this[_0x127415(0x1f2)]===undefined)this[_0x127415(0x2fc)]();return this[_0x127415(0x1f2)];},Game_Party[_0x53b526(0x3ab)][_0x53b526(0x367)]=function(_0x38577d,_0x2c7267){const _0x19b31f=_0x53b526;if(this[_0x19b31f(0x1f2)]===undefined)this['initMessageCore']();if(!_0x38577d)return;if(DataManager['isItem'](_0x38577d))this['_lastGainedItemData'][_0x19b31f(0x391)]=0x0;else{if(DataManager[_0x19b31f(0x3a7)](_0x38577d))this[_0x19b31f(0x1f2)][_0x19b31f(0x391)]=0x1;else DataManager[_0x19b31f(0x414)](_0x38577d)&&(this[_0x19b31f(0x1f2)][_0x19b31f(0x391)]=0x2);}this[_0x19b31f(0x1f2)]['id']=_0x38577d['id'],this[_0x19b31f(0x1f2)]['quantity']=_0x2c7267;},VisuMZ[_0x53b526(0x469)][_0x53b526(0x55e)]=Game_Party[_0x53b526(0x3ab)][_0x53b526(0x3bf)],Game_Party['prototype'][_0x53b526(0x3bf)]=function(_0x12f5a2,_0x12af14,_0xde3938){const _0x459563=_0x53b526;VisuMZ[_0x459563(0x469)][_0x459563(0x55e)]['call'](this,_0x12f5a2,_0x12af14,_0xde3938),_0x12af14>0x0&&this[_0x459563(0x367)](_0x12f5a2,_0x12af14);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x58f)]=Game_Map[_0x53b526(0x3ab)][_0x53b526(0x1cb)],Game_Map[_0x53b526(0x3ab)][_0x53b526(0x1cb)]=function(){const _0x34d379=_0x53b526;VisuMZ[_0x34d379(0x469)][_0x34d379(0x58f)][_0x34d379(0x1dc)](this),this['_messageCommonEvents']=[];},VisuMZ[_0x53b526(0x469)]['Game_Map_setupEvents']=Game_Map['prototype'][_0x53b526(0x275)],Game_Map[_0x53b526(0x3ab)][_0x53b526(0x275)]=function(){const _0x37e257=_0x53b526;VisuMZ[_0x37e257(0x469)]['Game_Map_setupEvents'][_0x37e257(0x1dc)](this),this[_0x37e257(0x451)]=[];},VisuMZ[_0x53b526(0x469)]['Game_Map_updateEvents']=Game_Map['prototype']['updateEvents'],Game_Map[_0x53b526(0x3ab)][_0x53b526(0x2d8)]=function(){const _0x42096d=_0x53b526;VisuMZ[_0x42096d(0x469)][_0x42096d(0x3c2)][_0x42096d(0x1dc)](this),this[_0x42096d(0x35a)]();},Game_Map['prototype']['addMessageCommonEvent']=function(_0x673491){const _0x2a5f90=_0x53b526;if(!$dataCommonEvents[_0x673491])return;this[_0x2a5f90(0x451)]=this[_0x2a5f90(0x451)]||[];const _0x800029=this['_interpreter'][_0x2a5f90(0x1e2)],_0x31bc21=new Game_MessageCommonEvent(_0x673491,_0x800029);this[_0x2a5f90(0x451)][_0x2a5f90(0x432)](_0x31bc21);},Game_Map[_0x53b526(0x3ab)][_0x53b526(0x35a)]=function(){const _0x13a913=_0x53b526;this[_0x13a913(0x451)]=this[_0x13a913(0x451)]||[];for(const _0x5489af of this['_messageCommonEvents']){!_0x5489af[_0x13a913(0x3f3)]?this[_0x13a913(0x451)][_0x13a913(0x483)](_0x5489af):_0x5489af[_0x13a913(0x2e2)]();}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x4c2)]=Game_Map[_0x53b526(0x3ab)]['refresh'],Game_Map[_0x53b526(0x3ab)][_0x53b526(0x520)]=function(){const _0x52e00c=_0x53b526;VisuMZ[_0x52e00c(0x469)]['Game_Map_refresh']['call'](this),$gameScreen[_0x52e00c(0x2da)]();},Game_Interpreter[_0x53b526(0x202)]=pluginData[_0x53b526(0x4a3)],Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x48d)]=function(_0x381c62){const _0x2d4f8c=_0x53b526;if($gameMessage[_0x2d4f8c(0x1ef)]())return![];return this['prepareShowTextCommand'](_0x381c62),this[_0x2d4f8c(0x43d)](_0x381c62),this[_0x2d4f8c(0x506)](_0x381c62),this[_0x2d4f8c(0x368)](_0x2d4f8c(0x587)),!![];},Game_Interpreter['prototype'][_0x53b526(0x36c)]=function(_0x3cc446){const _0x577597=_0x53b526;$gameMessage[_0x577597(0x345)](_0x3cc446[0x0],_0x3cc446[0x1]),$gameMessage[_0x577597(0x583)](_0x3cc446[0x2]),$gameMessage[_0x577597(0x46f)](_0x3cc446[0x3]),$gameMessage[_0x577597(0x526)](_0x3cc446[0x4]);},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x43d)]=function(_0xdf9404){const _0x3f8176=_0x53b526;while(this['isContinuePrepareShowTextCommands']()){this['_index']++;if(this['currentCommand']()[_0x3f8176(0x1b7)]===0x191){let _0xfa3781=this['currentCommand']()['parameters'][0x0];_0xfa3781=VisuMZ['MessageCore']['ParseAddedText'](_0xfa3781),$gameMessage['add'](_0xfa3781);}if(this[_0x3f8176(0x378)]())break;}},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x39a)]=function(){return this['nextEventCode']()===0x65&&$gameSystem['getMessageWindowRows']()>0x4?!![]:this['nextEventCode']()===0x191;},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2bb)]=function(_0x1956cd){const _0xa822e4=_0x53b526,_0x3a0a8a=VisuMZ[_0xa822e4(0x469)][_0xa822e4(0x398)][_0xa822e4(0x425)];return _0x1956cd=(_0x3a0a8a[_0xa822e4(0x4c7)]||'')+_0x1956cd+(_0x3a0a8a[_0xa822e4(0x3af)]||''),_0x1956cd=_0x1956cd['replace'](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x1956cd=_0x1956cd[_0xa822e4(0x3e6)](/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi,(_0x380060,_0x35bf86)=>this[_0xa822e4(0x2af)](_0x35bf86)),_0x1956cd;},VisuMZ['MessageCore'][_0x53b526(0x2af)]=function(_0xde7f64){const _0x178589=_0x53b526,_0x14b3af=_0xde7f64[_0x178589(0x286)]('|')['map'](_0x3e7425=>_0x3e7425[_0x178589(0x36a)]())[_0x178589(0x483)]('')[_0x178589(0x483)](null);return _0x14b3af[Math[_0x178589(0x3b3)](_0x14b3af['length'])];},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x378)]=function(){const _0xf0c795=_0x53b526;if(this[_0xf0c795(0x49e)]()&&this[_0xf0c795(0x49e)]()[_0xf0c795(0x1e1)][0x0][_0xf0c795(0x34e)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0xf0c795(0x2e6)][_0xf0c795(0x4f2)]>=$gameSystem[_0xf0c795(0x44e)]()&&this[_0xf0c795(0x43b)]()!==0x191;},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x506)]=function(_0x4958c9){const _0x2f735d=_0x53b526;switch(this['nextEventCode']()){case 0x66:this[_0x2f735d(0x481)]++,this['setupChoices'](this['currentCommand']()[_0x2f735d(0x1e1)]);break;case 0x67:this['_index']++,this[_0x2f735d(0x4b3)](this[_0x2f735d(0x49e)]()[_0x2f735d(0x1e1)]);break;case 0x68:this[_0x2f735d(0x481)]++,this['setupItemChoice'](this['currentCommand']()[_0x2f735d(0x1e1)]);break;case 0x165:const _0x37c193=this['_list'][this[_0x2f735d(0x481)]+0x1],_0x5ca02e=_0x37c193[_0x2f735d(0x1e1)];_0x5ca02e[0x0]===Game_Interpreter['MESSAGE_CORE_PLUGIN_NAME']&&this[_0x2f735d(0x22a)](_0x5ca02e);break;}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x328)]=Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x444)],Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x444)]=function(_0x10e88e){const _0x32f5cf=_0x53b526;_0x10e88e=this['addContinuousShowChoices'](),VisuMZ[_0x32f5cf(0x469)][_0x32f5cf(0x328)][_0x32f5cf(0x1dc)](this,_0x10e88e),$gameMessage[_0x32f5cf(0x4f5)]();},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x577)]=function(){const _0xaea5d2=_0x53b526,_0x934995=this['_index'],_0x5cb236=[];let _0x13b50f=0x0;this[_0xaea5d2(0x481)]++;while(this[_0xaea5d2(0x481)]<this[_0xaea5d2(0x41a)][_0xaea5d2(0x4f2)]){if(this['currentCommand']()[_0xaea5d2(0x302)]===this[_0xaea5d2(0x21c)]){if(this['currentCommand']()['code']===0x194&&this[_0xaea5d2(0x43b)]()!==0x66)break;else{if(this['currentCommand']()[_0xaea5d2(0x1b7)]===0x66)this[_0xaea5d2(0x568)](_0x13b50f,this[_0xaea5d2(0x49e)](),_0x934995),this[_0xaea5d2(0x481)]-=0x2;else this[_0xaea5d2(0x49e)]()['code']===0x192&&(this[_0xaea5d2(0x49e)]()[_0xaea5d2(0x1e1)][0x0]=_0x13b50f,_0x13b50f++);}}this[_0xaea5d2(0x481)]++;}return this[_0xaea5d2(0x481)]=_0x934995,this[_0xaea5d2(0x49e)]()['parameters'];},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x568)]=function(_0x98b486,_0x594814,_0x40a914){const _0x46864d=_0x53b526;this[_0x46864d(0x47d)](_0x98b486,_0x594814,_0x40a914),this[_0x46864d(0x51f)](_0x98b486,_0x594814,_0x40a914),this['addExtraShowChoices'](_0x594814,_0x40a914);},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x47d)]=function(_0x23e843,_0x1f82ce,_0x90359a){const _0x2b2468=_0x53b526;if(_0x1f82ce[_0x2b2468(0x1e1)][0x2]<0x0)return;const _0x53dd6f=_0x1f82ce[_0x2b2468(0x1e1)][0x2]+_0x23e843;this[_0x2b2468(0x41a)][_0x90359a][_0x2b2468(0x1e1)][0x2]=_0x53dd6f;},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x51f)]=function(_0x3cf5c1,_0x42614e,_0x5cf4e6){const _0x24bc21=_0x53b526;if(_0x42614e[_0x24bc21(0x1e1)][0x1]>=0x0){var _0x119da0=_0x42614e[_0x24bc21(0x1e1)][0x1]+_0x3cf5c1;this[_0x24bc21(0x41a)][_0x5cf4e6][_0x24bc21(0x1e1)][0x1]=_0x119da0;}else _0x42614e[_0x24bc21(0x1e1)][0x1]===-0x2&&(this[_0x24bc21(0x41a)][_0x5cf4e6][_0x24bc21(0x1e1)][0x1]=_0x42614e[_0x24bc21(0x1e1)][0x1]);},Game_Interpreter['prototype']['addExtraShowChoices']=function(_0x3c4000,_0x277aaa){const _0x400c46=_0x53b526;for(const _0x453e89 of _0x3c4000[_0x400c46(0x1e1)][0x0]){this['_list'][_0x277aaa][_0x400c46(0x1e1)][0x0][_0x400c46(0x432)](_0x453e89);}this[_0x400c46(0x41a)]['splice'](this[_0x400c46(0x481)]-0x1,0x2);},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x22a)]=function(_0x4e0271){const _0x215fdd=_0x53b526,_0x325b03=_0x4e0271[0x1];if(_0x325b03===_0x215fdd(0x2f0))this['_index']++,this[_0x215fdd(0x45f)](_0x4e0271);else{if(_0x325b03===_0x215fdd(0x58d))this[_0x215fdd(0x481)]++,this[_0x215fdd(0x1e9)](_0x4e0271);else _0x325b03===_0x215fdd(0x2eb)&&Imported[_0x215fdd(0x298)]&&(this[_0x215fdd(0x481)]++,this[_0x215fdd(0x4c9)](_0x4e0271));}},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x45f)]=function(_0x5667d2){const _0x9b39b1=_0x53b526,_0x3b2a00=JSON['parse'](JSON[_0x9b39b1(0x46b)](_0x5667d2[0x3]));VisuMZ[_0x9b39b1(0x4ed)](_0x3b2a00,_0x3b2a00),$gameMessage[_0x9b39b1(0x45f)](_0x3b2a00['VariableID']||0x0,_0x3b2a00[_0x9b39b1(0x413)]||0x0);},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x1e9)]=function(_0x1011ea){const _0x2330b7=_0x53b526,_0x37615f=JSON[_0x2330b7(0x466)](JSON[_0x2330b7(0x46b)](_0x1011ea[0x3]));VisuMZ[_0x2330b7(0x4ed)](_0x37615f,_0x37615f),$gameMessage['setArmorChoice'](_0x37615f[_0x2330b7(0x351)]||0x0,_0x37615f['ArmorTypeID']||0x0,_0x37615f[_0x2330b7(0x45c)]||0x0);},Game_Interpreter[_0x53b526(0x3ab)][_0x53b526(0x4c9)]=function(_0x416150){const _0x5a6fd2=_0x53b526,_0x855d93=JSON[_0x5a6fd2(0x466)](JSON['stringify'](_0x416150[0x3]));VisuMZ[_0x5a6fd2(0x4ed)](_0x855d93,_0x855d93),$gameMessage[_0x5a6fd2(0x4c9)](_0x855d93[_0x5a6fd2(0x351)]||0x0,_0x855d93[_0x5a6fd2(0x516)]||0x0,_0x855d93[_0x5a6fd2(0x4ad)]||0x0);};function _0x4a83(_0x26b6ab,_0x195781){const _0x15419b=_0x1541();return _0x4a83=function(_0x4a83e3,_0x3a0c38){_0x4a83e3=_0x4a83e3-0x1ac;let _0x4509ef=_0x15419b[_0x4a83e3];return _0x4509ef;},_0x4a83(_0x26b6ab,_0x195781);}function Game_MessageCommonEvent(){const _0x471cc0=_0x53b526;this[_0x471cc0(0x1cb)](...arguments);}Game_MessageCommonEvent['prototype'][_0x53b526(0x1cb)]=function(_0x996915,_0x29fdad){const _0x474985=_0x53b526;this['_commonEventId']=_0x996915,this[_0x474985(0x1e2)]=_0x29fdad||0x0,this[_0x474985(0x520)]();},Game_MessageCommonEvent[_0x53b526(0x3ab)][_0x53b526(0x3d2)]=function(){return $dataCommonEvents[this['_commonEventId']];},Game_MessageCommonEvent[_0x53b526(0x3ab)][_0x53b526(0x50c)]=function(){const _0x215c4b=_0x53b526;return this[_0x215c4b(0x3d2)]()[_0x215c4b(0x50c)];},Game_MessageCommonEvent[_0x53b526(0x3ab)][_0x53b526(0x520)]=function(){const _0x572fb3=_0x53b526;this[_0x572fb3(0x3f3)]=new Game_Interpreter(),this[_0x572fb3(0x3f3)][_0x572fb3(0x295)](this[_0x572fb3(0x50c)](),this[_0x572fb3(0x1e2)]);},Game_MessageCommonEvent[_0x53b526(0x3ab)][_0x53b526(0x2e2)]=function(){const _0x3c4ecc=_0x53b526;this[_0x3c4ecc(0x3f3)]&&(this[_0x3c4ecc(0x3f3)][_0x3c4ecc(0x23a)]()?this[_0x3c4ecc(0x3f3)][_0x3c4ecc(0x2e2)]():this[_0x3c4ecc(0x39b)]());},Game_MessageCommonEvent[_0x53b526(0x3ab)][_0x53b526(0x39b)]=function(){const _0x170c6d=_0x53b526;this[_0x170c6d(0x3f3)]=null;},Scene_Message['prototype'][_0x53b526(0x38f)]=function(){const _0x3a7538=_0x53b526,_0x2259b8=Math[_0x3a7538(0x3c9)](Graphics[_0x3a7538(0x3dd)],$gameSystem[_0x3a7538(0x501)]()),_0x446c61=$gameSystem[_0x3a7538(0x44e)](),_0x4dbe1c=this['calcWindowHeight'](_0x446c61,![]),_0x6b7f53=(Graphics[_0x3a7538(0x530)]-_0x2259b8)/0x2,_0xb25d17=0x0;return new Rectangle(_0x6b7f53,_0xb25d17,_0x2259b8,_0x4dbe1c);},VisuMZ['MessageCore'][_0x53b526(0x292)]=Scene_Message[_0x53b526(0x3ab)][_0x53b526(0x1da)],Scene_Message[_0x53b526(0x3ab)][_0x53b526(0x1da)]=function(){const _0x3b3f56=_0x53b526;VisuMZ[_0x3b3f56(0x469)][_0x3b3f56(0x292)][_0x3b3f56(0x1dc)](this),this[_0x3b3f56(0x4fb)]();},Scene_Message[_0x53b526(0x3ab)][_0x53b526(0x4fb)]=function(){const _0x3535c8=_0x53b526,_0xf70471=this['choiceListHelpWindowRect'](),_0x5b556e=new Window_Help(_0xf70471);_0x5b556e['hide'](),this['_choiceListWindow']['setHelpWindow'](_0x5b556e),this[_0x3535c8(0x497)][_0x3535c8(0x3c0)](_0x5b556e),this[_0x3535c8(0x3b4)](_0x5b556e),this[_0x3535c8(0x34d)]=_0x5b556e;},Scene_Message[_0x53b526(0x3ab)][_0x53b526(0x230)]=function(){const _0x2cc694=_0x53b526,_0x21a440=0x0,_0x4842fd=0x0,_0x2510a4=Graphics[_0x2cc694(0x530)],_0x56b09c=this[_0x2cc694(0x540)](0x2,![]);return new Rectangle(_0x21a440,_0x4842fd,_0x2510a4,_0x56b09c);},Window_Message['prototype'][_0x53b526(0x3c0)]=function(_0x29f97e){const _0x230ce4=_0x53b526;this[_0x230ce4(0x34d)]=_0x29f97e;},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x3c8)]=function(){const _0x59204a=_0x53b526;if(!this[_0x59204a(0x34d)])return;const _0x382b4d=this[_0x59204a(0x34d)];_0x382b4d&&(_0x382b4d['y']=this['y']>0x0?0x0:Graphics[_0x59204a(0x2be)]-_0x382b4d[_0x59204a(0x514)]);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x308)]=Scene_Options[_0x53b526(0x3ab)][_0x53b526(0x1fd)],Scene_Options[_0x53b526(0x3ab)][_0x53b526(0x1fd)]=function(){const _0x530df9=_0x53b526;let _0x443815=VisuMZ[_0x530df9(0x469)][_0x530df9(0x308)][_0x530df9(0x1dc)](this);const _0x549a06=VisuMZ[_0x530df9(0x469)][_0x530df9(0x398)];if(_0x549a06['TextSpeed']['AdjustRect']){_0x549a06[_0x530df9(0x250)][_0x530df9(0x458)]&&TextManager[_0x530df9(0x270)]()&&_0x443815++;if(_0x549a06['TextSpeed'][_0x530df9(0x458)])_0x443815++;}return _0x443815;},VisuMZ[_0x53b526(0x469)][_0x53b526(0x417)]=Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x47b)],Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x47b)]=function(){const _0x581bdd=_0x53b526;VisuMZ['MessageCore'][_0x581bdd(0x417)][_0x581bdd(0x1dc)](this),this['createPictureText']();},VisuMZ[_0x53b526(0x469)][_0x53b526(0x56d)]=Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x2e2)],Sprite_Picture[_0x53b526(0x3ab)]['update']=function(){const _0x4c4fc1=_0x53b526;VisuMZ[_0x4c4fc1(0x469)][_0x4c4fc1(0x56d)][_0x4c4fc1(0x1dc)](this),this[_0x4c4fc1(0x306)]();},Sprite_Picture[_0x53b526(0x3ab)]['updatePictureText']=function(){const _0x27e81b=_0x53b526;if(!this[_0x27e81b(0x3d5)])return;this[_0x27e81b(0x372)](),this[_0x27e81b(0x1c1)](),this['drawPictureText'](),this[_0x27e81b(0x4ff)]();},Sprite_Picture[_0x53b526(0x3ab)]['createPictureText']=function(){const _0x54ccb6=_0x53b526;if(this[_0x54ccb6(0x1cf)])return;if(this[_0x54ccb6(0x562)])return;const _0x45fc27=new Rectangle(0x0,0x0,0x0,0x0);this['_pictureTextWindow']=new Window_Base(_0x45fc27),this[_0x54ccb6(0x1cf)]['padding']=0x0,this[_0x54ccb6(0x562)]=new Sprite(),this['addChildAt'](this[_0x54ccb6(0x562)],0x0),this[_0x54ccb6(0x3cf)]=0x0,this['_pictureTextHeight']=0x0,this[_0x54ccb6(0x251)]={};},Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x372)]=function(){const _0x1f4418=_0x53b526;if(!this[_0x1f4418(0x1cf)])return;if(this[_0x1f4418(0x3cf)]===this[_0x1f4418(0x3dd)]&&this[_0x1f4418(0x43c)]===this[_0x1f4418(0x514)])return;this[_0x1f4418(0x3cf)]=this[_0x1f4418(0x3dd)],this[_0x1f4418(0x43c)]=this[_0x1f4418(0x514)],this['_pictureTextCache']={},this[_0x1f4418(0x1cf)][_0x1f4418(0x552)](0x0,0x0,this['width'],this[_0x1f4418(0x514)]);},Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x1c1)]=function(){const _0x29871e=_0x53b526;if(!this['_pictureTextSprite'])return;this[_0x29871e(0x562)][_0x29871e(0x335)]['x']=this[_0x29871e(0x335)]['x'],this['_pictureTextSprite'][_0x29871e(0x335)]['y']=this[_0x29871e(0x335)]['y'];},Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x46d)]=function(){const _0xb9a1c0=_0x53b526;if(!this[_0xb9a1c0(0x1cf)])return;if(!this['anyPictureTextChanges']())return;const _0x1c725a=['upperleft','up',_0xb9a1c0(0x347),'left',_0xb9a1c0(0x293),_0xb9a1c0(0x2a9),'lowerleft',_0xb9a1c0(0x53a),_0xb9a1c0(0x339)];this[_0xb9a1c0(0x1cf)]['createContents']();for(const _0x171eb9 of _0x1c725a){this['drawPictureTextZone'](_0x171eb9);}},Sprite_Picture[_0x53b526(0x3ab)]['anyPictureTextChanges']=function(){const _0x1e1458=_0x53b526;if($gameScreen[_0x1e1458(0x4ea)](this[_0x1e1458(0x56a)]))return!![];const _0x152092=[_0x1e1458(0x426),'up',_0x1e1458(0x347),'left',_0x1e1458(0x293),'right',_0x1e1458(0x477),_0x1e1458(0x53a),_0x1e1458(0x339)];for(const _0x2c15dc of _0x152092){const _0x3aafc8=$gameScreen[_0x1e1458(0x523)](this[_0x1e1458(0x56a)],_0x2c15dc);if(this[_0x1e1458(0x251)][_0x2c15dc]===_0x3aafc8)continue;return!![];}return![];},Sprite_Picture[_0x53b526(0x3ab)][_0x53b526(0x503)]=function(_0x13000c){const _0x18029c=_0x53b526;$gameScreen['clearPictureTextRefresh'](this['_pictureId']);const _0x561195=$gameScreen[_0x18029c(0x523)](this[_0x18029c(0x56a)],_0x13000c);this[_0x18029c(0x251)][_0x13000c]=_0x561195;const _0x5cf622=this['_pictureTextWindow'][_0x18029c(0x4f4)](_0x561195);let _0x5d5805=$gameScreen[_0x18029c(0x26b)](this['_pictureId']),_0x314a72=_0x5d5805,_0x16c1df=_0x5d5805;if(['up',_0x18029c(0x293),_0x18029c(0x53a)]['includes'](_0x13000c))_0x314a72=Math[_0x18029c(0x538)]((this[_0x18029c(0x3dd)]-_0x5cf622[_0x18029c(0x3dd)])/0x2);else[_0x18029c(0x347),_0x18029c(0x2a9),'lowerright'][_0x18029c(0x441)](_0x13000c)&&(_0x314a72=Math[_0x18029c(0x538)](this[_0x18029c(0x3dd)]-_0x5cf622[_0x18029c(0x3dd)]-_0x5d5805));if([_0x18029c(0x24d),_0x18029c(0x293),_0x18029c(0x2a9)]['includes'](_0x13000c))_0x16c1df=Math[_0x18029c(0x538)]((this[_0x18029c(0x514)]-_0x5cf622['height'])/0x2);else[_0x18029c(0x477),'down',_0x18029c(0x339)]['includes'](_0x13000c)&&(_0x16c1df=Math[_0x18029c(0x538)](this[_0x18029c(0x514)]-_0x5cf622[_0x18029c(0x514)]-_0x5d5805));this[_0x18029c(0x1cf)]['drawTextEx'](_0x561195,_0x314a72,_0x16c1df);},Sprite_Picture[_0x53b526(0x3ab)]['attachPictureText']=function(){const _0xa16100=_0x53b526;if(!this[_0xa16100(0x1cf)])return;if(!this[_0xa16100(0x562)])return;this['_pictureTextSprite'][_0xa16100(0x2fb)]=this[_0xa16100(0x1cf)][_0xa16100(0x256)];},VisuMZ[_0x53b526(0x469)][_0x53b526(0x226)]=Window_Base['prototype'][_0x53b526(0x1cb)],Window_Base[_0x53b526(0x3ab)]['initialize']=function(_0xd7012a){const _0xb72a34=_0x53b526;this[_0xb72a34(0x2fc)](_0xd7012a),VisuMZ[_0xb72a34(0x469)]['Window_Base_initialize'][_0xb72a34(0x1dc)](this,_0xd7012a);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2fc)]=function(_0x424495){const _0x3b2c01=_0x53b526;this['initTextAlignement'](),this[_0x3b2c01(0x1ac)](),this['registerResetRect'](_0x424495);},Window_Base[_0x53b526(0x3ab)]['initTextAlignement']=function(){const _0x399843=_0x53b526;this[_0x399843(0x29f)]('default');},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x29f)]=function(_0xab4c06){const _0x5f1df3=_0x53b526;this[_0x5f1df3(0x341)]=_0xab4c06;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x28b)]=function(){const _0x37ed3b=_0x53b526;return this[_0x37ed3b(0x341)];},VisuMZ[_0x53b526(0x469)][_0x53b526(0x44f)]=Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4f4)],Window_Base[_0x53b526(0x3ab)]['textSizeEx']=function(_0x337fde){const _0x31d01c=_0x53b526;return this[_0x31d01c(0x1ac)](),VisuMZ[_0x31d01c(0x469)][_0x31d01c(0x44f)][_0x31d01c(0x1dc)](this,_0x337fde);},Window_Base[_0x53b526(0x3ab)]['textSizeExRaw']=function(_0x252805){const _0x5adb9a=_0x53b526;return VisuMZ[_0x5adb9a(0x469)]['Window_Base_textSizeEx'][_0x5adb9a(0x1dc)](this,_0x252805);},VisuMZ[_0x53b526(0x469)]['Window_Base_processAllText']=Window_Base[_0x53b526(0x3ab)]['processAllText'],Window_Base[_0x53b526(0x3ab)][_0x53b526(0x496)]=function(_0x2e1024){const _0x515366=_0x53b526;VisuMZ[_0x515366(0x469)][_0x515366(0x53d)]['call'](this,_0x2e1024);if(_0x2e1024[_0x515366(0x560)])this[_0x515366(0x29f)](_0x515366(0x38b));},Window_Base[_0x53b526(0x3ab)]['resetWordWrap']=function(){this['setWordWrap'](![]);},Window_Base['prototype'][_0x53b526(0x321)]=function(){const _0x312164=_0x53b526;return this[_0x312164(0x533)];},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x584)]=function(_0x3895aa){return this['_wordWrap']=_0x3895aa,'';},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4e0)]=function(_0x242604){const _0x414df5=_0x53b526;this['_resetRect']=JsonEx[_0x414df5(0x294)](_0x242604);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4c3)]=function(){const _0x1ffafb=_0x53b526;this[_0x1ffafb(0x256)][_0x1ffafb(0x21a)]=$gameSystem[_0x1ffafb(0x478)](),this[_0x1ffafb(0x256)][_0x1ffafb(0x207)]=$gameSystem[_0x1ffafb(0x498)](),this['contents']['fontBold']=![],this[_0x1ffafb(0x256)][_0x1ffafb(0x358)]=![],this[_0x1ffafb(0x542)]=0x0,this[_0x1ffafb(0x52b)]=!![],this[_0x1ffafb(0x4fd)]();},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4fd)]=function(){const _0x53c766=_0x53b526;this[_0x53c766(0x3b9)](ColorManager[_0x53c766(0x572)]()),this[_0x53c766(0x272)](ColorManager[_0x53c766(0x287)]());const _0x2528d9=VisuMZ['MessageCore'][_0x53c766(0x398)][_0x53c766(0x425)];_0x2528d9[_0x53c766(0x53f)]===undefined&&(_0x2528d9[_0x53c766(0x53f)]=0x3),this[_0x53c766(0x256)]['outlineWidth']=_0x2528d9[_0x53c766(0x53f)],this[_0x53c766(0x3ed)](![]);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x3ed)]=function(_0xa54c7c){this['_colorLock']=_0xa54c7c;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2c1)]=function(){const _0x5d17e8=_0x53b526;return this[_0x5d17e8(0x2ba)];},Window_Base[_0x53b526(0x3ab)]['isAutoColorAffected']=function(){return![];},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x1d5)]=function(){const _0x4d166f=_0x53b526,_0x18de14=['fontFace',_0x4d166f(0x207),_0x4d166f(0x255),_0x4d166f(0x358),'textColor',_0x4d166f(0x2ac),'outlineWidth',_0x4d166f(0x4c8)];let _0x53b651={};for(const _0x510584 of _0x18de14){_0x53b651[_0x510584]=this[_0x4d166f(0x256)][_0x510584];}return _0x53b651;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2f8)]=function(_0x5300da){for(const _0x250e88 in _0x5300da){this['contents'][_0x250e88]=_0x5300da[_0x250e88];}},VisuMZ['MessageCore'][_0x53b526(0x4e8)]=Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2e2)],Window_Base['prototype'][_0x53b526(0x2e2)]=function(){const _0x353904=_0x53b526;VisuMZ[_0x353904(0x469)][_0x353904(0x4e8)]['call'](this),this[_0x353904(0x55c)]();},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x547)]=function(){return![];},Window_Base[_0x53b526(0x3ab)]['updateMove']=function(){const _0x303b2f=_0x53b526;this['_moveDuration']>0x0&&(this[_0x303b2f(0x547)]()&&(this['x']=this[_0x303b2f(0x4dd)](this['x'],this[_0x303b2f(0x1bd)]),this['y']=this['applyMoveEasing'](this['y'],this[_0x303b2f(0x1ca)]),this['width']=this[_0x303b2f(0x4dd)](this['width'],this['_moveTargetWidth']),this['height']=this[_0x303b2f(0x4dd)](this[_0x303b2f(0x514)],this['_moveTargetHeight']),this[_0x303b2f(0x4b5)]()),this[_0x303b2f(0x274)]--);},Window_Base[_0x53b526(0x3ab)]['clampPlacementPosition']=function(_0x343b91,_0x5dc179){const _0x1c1097=_0x53b526;!_0x343b91&&(this[_0x1c1097(0x3dd)]=Math[_0x1c1097(0x3c9)](this[_0x1c1097(0x3dd)],Graphics[_0x1c1097(0x3dd)]),this['height']=Math[_0x1c1097(0x3c9)](this[_0x1c1097(0x514)],Graphics['height']));if(!_0x5dc179){const _0x492544=-(Math['floor'](Graphics[_0x1c1097(0x3dd)]-Graphics[_0x1c1097(0x530)])/0x2),_0x248b00=_0x492544+Graphics[_0x1c1097(0x3dd)]-this['width'],_0x5ccb78=-(Math[_0x1c1097(0x538)](Graphics['height']-Graphics['boxHeight'])/0x2),_0x39bf59=_0x5ccb78+Graphics['height']-this[_0x1c1097(0x514)];this['x']=this['x'][_0x1c1097(0x300)](_0x492544,_0x248b00),this['y']=this['y'][_0x1c1097(0x300)](_0x5ccb78,_0x39bf59);}},Window_Base[_0x53b526(0x3ab)]['applyMoveEasing']=function(_0x4f52ed,_0x34c788){const _0x2a20e9=_0x53b526,_0x1c0454=this['_moveDuration'],_0x27f11e=this['_wholeMoveDuration'],_0x23fe88=this[_0x2a20e9(0x252)]((_0x27f11e-_0x1c0454)/_0x27f11e),_0x1676e4=this[_0x2a20e9(0x252)]((_0x27f11e-_0x1c0454+0x1)/_0x27f11e),_0x1fa92e=(_0x4f52ed-_0x34c788*_0x23fe88)/(0x1-_0x23fe88);return _0x1fa92e+(_0x34c788-_0x1fa92e)*_0x1676e4;},Window_Base['prototype']['calcMoveEasing']=function(_0x58b75d){const _0x9b85e2=_0x53b526,_0x38cea0=0x2;switch(this[_0x9b85e2(0x57a)]){case 0x0:return _0x58b75d;case 0x1:return this[_0x9b85e2(0x27c)](_0x58b75d,_0x38cea0);case 0x2:return this[_0x9b85e2(0x527)](_0x58b75d,_0x38cea0);case 0x3:return this[_0x9b85e2(0x41d)](_0x58b75d,_0x38cea0);default:return Imported[_0x9b85e2(0x31c)]?VisuMZ[_0x9b85e2(0x4dd)](_0x58b75d,this['_moveEasingType']):_0x58b75d;}},Window_Base[_0x53b526(0x3ab)]['moveTo']=function(_0x57625d,_0x5d40a2,_0x27587f,_0x1f8ef3,_0x3981d1,_0x4d5162){const _0x3737d2=_0x53b526;this[_0x3737d2(0x1bd)]=_0x57625d,this[_0x3737d2(0x1ca)]=_0x5d40a2,this[_0x3737d2(0x3a3)]=_0x27587f||this['width'],this[_0x3737d2(0x3a8)]=_0x1f8ef3||this[_0x3737d2(0x514)],this[_0x3737d2(0x274)]=_0x3981d1||0x1;if(this[_0x3737d2(0x274)]<=0x0)this[_0x3737d2(0x274)]=0x1;this['_wholeMoveDuration']=this[_0x3737d2(0x274)],this[_0x3737d2(0x57a)]=_0x4d5162||0x0;if(_0x3981d1<=0x0)this[_0x3737d2(0x55c)]();},Window_Base['prototype'][_0x53b526(0x356)]=function(_0x388a40,_0x439a5d,_0x261a88,_0x5e3054,_0x42932b,_0x2fd5d0){const _0x1ef12d=_0x53b526;this[_0x1ef12d(0x1bd)]=this['x']+_0x388a40,this[_0x1ef12d(0x1ca)]=this['y']+_0x439a5d,this[_0x1ef12d(0x3a3)]=this['width']+(_0x261a88||0x0),this['_moveTargetHeight']=this[_0x1ef12d(0x514)]+(_0x5e3054||0x0),this[_0x1ef12d(0x274)]=_0x42932b||0x1;if(this[_0x1ef12d(0x274)]<=0x0)this[_0x1ef12d(0x274)]=0x1;this[_0x1ef12d(0x49a)]=this[_0x1ef12d(0x274)],this[_0x1ef12d(0x57a)]=_0x2fd5d0||0x0;if(_0x42932b<=0x0)this['updateMove']();},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4e7)]=function(_0x16b888,_0xa00d97){const _0x18ed56=_0x53b526;this[_0x18ed56(0x2a4)](this[_0x18ed56(0x1b3)]['x'],this[_0x18ed56(0x1b3)]['y'],this[_0x18ed56(0x1b3)][_0x18ed56(0x3dd)],this[_0x18ed56(0x1b3)][_0x18ed56(0x514)],_0x16b888,_0xa00d97);},VisuMZ['MessageCore'][_0x53b526(0x453)]=Window_Base['prototype'][_0x53b526(0x3b9)],Window_Base[_0x53b526(0x3ab)]['changeTextColor']=function(_0x48d616){const _0x402556=_0x53b526;if(this[_0x402556(0x2c1)]())return;_0x48d616=_0x48d616['replace'](/\,/g,''),this[_0x402556(0x3a5)]=this[_0x402556(0x3a5)]||[],this[_0x402556(0x3a5)][_0x402556(0x4d5)](this[_0x402556(0x256)][_0x402556(0x3d9)]),VisuMZ[_0x402556(0x469)][_0x402556(0x453)][_0x402556(0x1dc)](this,_0x48d616);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x32e)]=function(_0x11251c){const _0x1b53c9=_0x53b526;this[_0x1b53c9(0x386)](_0x11251c);if(this[_0x1b53c9(0x2c1)]())return;_0x11251c[_0x1b53c9(0x560)]&&(this[_0x1b53c9(0x3a5)]=this['_textColorStack']||[],this['contents']['textColor']=this[_0x1b53c9(0x3a5)][_0x1b53c9(0x2c0)]()||ColorManager[_0x1b53c9(0x572)]());},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x1af)]=function(_0x450c35){const _0x381fda=_0x53b526;return _0x450c35=this['convertTextMacros'](_0x450c35),_0x450c35=this[_0x381fda(0x325)](_0x450c35),_0x450c35=this[_0x381fda(0x371)](_0x450c35),_0x450c35=this[_0x381fda(0x4b2)](_0x450c35),_0x450c35=this[_0x381fda(0x399)](_0x450c35),_0x450c35=this['convertShowChoiceEscapeCodes'](_0x450c35),_0x450c35=this[_0x381fda(0x416)](_0x450c35),_0x450c35=this[_0x381fda(0x438)](_0x450c35),_0x450c35=this[_0x381fda(0x2dc)](_0x450c35),_0x450c35=this[_0x381fda(0x4be)](_0x450c35),_0x450c35=this[_0x381fda(0x355)](_0x450c35),_0x450c35=this[_0x381fda(0x3e9)](_0x450c35),_0x450c35=this['convertMessageCoreEscapeActions'](_0x450c35),_0x450c35=this[_0x381fda(0x2cc)](_0x450c35),_0x450c35=this[_0x381fda(0x550)](_0x450c35),_0x450c35=this['convertVariableEscapeCharacters'](_0x450c35),_0x450c35=this[_0x381fda(0x1cd)](_0x450c35),_0x450c35=this[_0x381fda(0x44b)](_0x450c35),_0x450c35;},Window_Base['prototype'][_0x53b526(0x4a5)]=function(_0x54731e){const _0x1d26b7=_0x53b526;this[_0x1d26b7(0x354)]=![];for(const _0x3d2efc of VisuMZ[_0x1d26b7(0x469)][_0x1d26b7(0x398)]['TextMacros']){_0x54731e&&_0x54731e[_0x1d26b7(0x34e)](_0x3d2efc[_0x1d26b7(0x1c3)])&&(this[_0x1d26b7(0x354)]=!![],_0x54731e=_0x54731e[_0x1d26b7(0x3e6)](_0x3d2efc[_0x1d26b7(0x1c3)],_0x3d2efc[_0x1d26b7(0x57e)][_0x1d26b7(0x261)](this)));}return _0x54731e||'';},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x325)]=function(_0x282596){const _0x380629=_0x53b526;return _0x282596=_0x282596[_0x380629(0x3e6)](/\\/g,'\x1b'),_0x282596=_0x282596[_0x380629(0x3e6)](/\x1b\x1b/g,'\x5c'),_0x282596;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x371)]=function(_0x208d31){const _0x2021d2=_0x53b526;for(;;){if(_0x208d31['match'](/\\V\[(\d+)\]/gi))_0x208d31=_0x208d31[_0x2021d2(0x3e6)](/\\V\[(\d+)\]/gi,(_0x214995,_0x32bc58)=>this[_0x2021d2(0x325)](String($gameVariables['value'](parseInt(_0x32bc58)))));else{if(_0x208d31['match'](/\x1bV\[(\d+)\]/gi))_0x208d31=_0x208d31[_0x2021d2(0x3e6)](/\x1bV\[(\d+)\]/gi,(_0x8f1bc2,_0xcc610a)=>this['convertBackslashCharacters'](String($gameVariables[_0x2021d2(0x290)](parseInt(_0xcc610a)))));else break;}}return _0x208d31;},Window_Base[_0x53b526(0x3ab)]['convertButtonAssistEscapeCharacters']=function(_0xa40e37){const _0x4be651=_0x53b526;return Imported[_0x4be651(0x31c)]&&(_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<Up (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)]('up')),_0xa40e37=_0xa40e37['replace'](/<Left (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)](_0x4be651(0x24d))),_0xa40e37=_0xa40e37['replace'](/<Right (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)]('right')),_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<Down (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)]('down')),_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<Ok (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)]('ok')),_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<Cancel (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)](_0x4be651(0x473))),_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<Menu (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)](_0x4be651(0x1e7))),_0xa40e37=_0xa40e37['replace'](/<Shift (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)](_0x4be651(0x2c0))),_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)](_0x4be651(0x370))),_0xa40e37=_0xa40e37[_0x4be651(0x3e6)](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this[_0x4be651(0x585)](_0x4be651(0x244)))),_0xa40e37;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x585)]=function(_0x42a751){const _0x1dd6af=_0x53b526;let _0x520b8a=TextManager[_0x1dd6af(0x411)](_0x42a751)||'';return _0x520b8a=this[_0x1dd6af(0x325)](_0x520b8a),_0x520b8a=this[_0x1dd6af(0x371)](_0x520b8a),_0x520b8a[_0x1dd6af(0x36a)]();},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x399)]=function(_0x33c6c9){const _0x33186b=_0x53b526;return _0x33c6c9=this[_0x33186b(0x224)](_0x33c6c9),this[_0x33186b(0x579)](),_0x33c6c9;},Window_Base[_0x53b526(0x3ab)]['switchOutTextForLocalization']=function(_0x1c5bf8){const _0x421183=_0x53b526;return _0x1c5bf8=TextManager[_0x421183(0x2c5)](_0x1c5bf8),_0x1c5bf8;},VisuMZ[_0x53b526(0x469)][_0x53b526(0x3f4)]=String[_0x53b526(0x3ab)][_0x53b526(0x2c3)],String[_0x53b526(0x3ab)][_0x53b526(0x2c3)]=function(){const _0x5ce0cf=_0x53b526;let _0x26ef80=this;return _0x26ef80=TextManager[_0x5ce0cf(0x2c5)](_0x26ef80),VisuMZ['MessageCore'][_0x5ce0cf(0x3f4)][_0x5ce0cf(0x573)](_0x26ef80,arguments);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x4d7)]=Bitmap[_0x53b526(0x3ab)][_0x53b526(0x334)],Bitmap[_0x53b526(0x3ab)]['drawText']=function(_0x56e2cf,_0x25cdee,_0x3e9826,_0x182c57,_0x4acf22,_0x4fa4cc){const _0x593e57=_0x53b526;_0x56e2cf=TextManager[_0x593e57(0x2c5)](_0x56e2cf),VisuMZ[_0x593e57(0x469)]['Bitmap_drawText'][_0x593e57(0x1dc)](this,_0x56e2cf,_0x25cdee,_0x3e9826,_0x182c57,_0x4acf22,_0x4fa4cc);},VisuMZ['MessageCore'][_0x53b526(0x2a5)]=Bitmap[_0x53b526(0x3ab)][_0x53b526(0x2cd)],Bitmap[_0x53b526(0x3ab)]['drawTextTopAligned']=function(_0x48c852,_0x561c03,_0xe5452d,_0x42262e,_0xbcdc33,_0x816d4a){const _0x25df7d=_0x53b526;_0x48c852=TextManager[_0x25df7d(0x2c5)](_0x48c852),VisuMZ[_0x25df7d(0x469)][_0x25df7d(0x2a5)][_0x25df7d(0x1dc)](this,_0x48c852,_0x561c03,_0xe5452d,_0x42262e,_0xbcdc33,_0x816d4a);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x550)]=function(_0x1f6d33){return _0x1f6d33;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x460)]=function(_0x12ddfe){const _0x4a9a8b=_0x53b526;return this[_0x4a9a8b(0x4f9)]()&&(_0x12ddfe=_0x12ddfe['replace'](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x12ddfe=_0x12ddfe['replace'](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x12ddfe=_0x12ddfe[_0x4a9a8b(0x3e6)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x12ddfe=_0x12ddfe[_0x4a9a8b(0x3e6)](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x12ddfe=_0x12ddfe[_0x4a9a8b(0x3e6)](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x12ddfe=_0x12ddfe['replace'](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,''),_0x12ddfe=_0x12ddfe[_0x4a9a8b(0x3e6)](/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi,''),_0x12ddfe=_0x12ddfe[_0x4a9a8b(0x3e6)](/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi,'')),_0x12ddfe;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4f9)]=function(){const _0x4e288e=_0x53b526,_0x26a83b=[_0x4e288e(0x1bb),_0x4e288e(0x1d7)];return _0x26a83b[_0x4e288e(0x441)](this[_0x4e288e(0x415)][_0x4e288e(0x4a3)]);},Window_Base['prototype'][_0x53b526(0x416)]=function(_0xd3ada){const _0x7b2bea=_0x53b526;return _0xd3ada=_0xd3ada[_0x7b2bea(0x3e6)](/<B>/gi,_0x7b2bea(0x3ca)),_0xd3ada=_0xd3ada['replace'](/<\/B>/gi,_0x7b2bea(0x2ca)),_0xd3ada=_0xd3ada[_0x7b2bea(0x3e6)](/<I>/gi,_0x7b2bea(0x205)),_0xd3ada=_0xd3ada['replace'](/<\/I>/gi,_0x7b2bea(0x42f)),_0xd3ada;},Window_Base[_0x53b526(0x3ab)]['convertTextAlignmentEscapeCharacters']=function(_0x5d4e77){const _0x331aba=_0x53b526;return _0x5d4e77=_0x5d4e77[_0x331aba(0x3e6)](/<LEFT>/gi,_0x331aba(0x581)),_0x5d4e77=_0x5d4e77[_0x331aba(0x3e6)](/<\/LEFT>/gi,_0x331aba(0x31a)),_0x5d4e77=_0x5d4e77[_0x331aba(0x3e6)](/<CENTER>/gi,'\x1bTEXTALIGNMENT[2]'),_0x5d4e77=_0x5d4e77['replace'](/<\/CENTER>/gi,_0x331aba(0x31a)),_0x5d4e77=_0x5d4e77['replace'](/<RIGHT>/gi,_0x331aba(0x47c)),_0x5d4e77=_0x5d4e77[_0x331aba(0x3e6)](/<\/RIGHT>/gi,_0x331aba(0x31a)),_0x5d4e77;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2dc)]=function(_0x43d989){const _0x572eac=_0x53b526;return _0x43d989=_0x43d989[_0x572eac(0x3e6)](/<COLORLOCK>/gi,_0x572eac(0x377)),_0x43d989=_0x43d989[_0x572eac(0x3e6)](/<\/COLORLOCK>/gi,'\x1bCOLORLOCK[0]'),_0x43d989=_0x43d989[_0x572eac(0x3e6)](/\(\(\(/gi,_0x572eac(0x377)),_0x43d989=_0x43d989[_0x572eac(0x3e6)](/\)\)\)/gi,_0x572eac(0x38c)),_0x43d989;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4be)]=function(_0x32ddf1){const _0x1d26bb=_0x53b526;return _0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,_0x1d26bb(0x33e)),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<\/(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,'\x1bCASING[0]'),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x1d26bb(0x4a8)),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<\/(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x1d26bb(0x3b5)),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,'\x1bCASING[3]'),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<\/(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,'\x1bCASING[0]'),_0x32ddf1=_0x32ddf1['replace'](/<(?:ALT|ALTERNATE|ALT CASE)>/gi,_0x1d26bb(0x46c)),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<\/(?:ALT|ALTERNATE|ALT CASE)>/gi,_0x1d26bb(0x3b5)),_0x32ddf1=_0x32ddf1[_0x1d26bb(0x3e6)](/<(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,'\x1bCASING[5]'),_0x32ddf1=_0x32ddf1['replace'](/<\/(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,'\x1bCASING[0]'),_0x32ddf1;},Window_Base['prototype'][_0x53b526(0x355)]=function(_0x2f2376){const _0x27fa3c=_0x53b526;return _0x2f2376=_0x2f2376[_0x27fa3c(0x3e6)](/\x1bN\[(\d+)\]/gi,(_0x20aa00,_0x464bac)=>this[_0x27fa3c(0x44a)](parseInt(_0x464bac))),_0x2f2376=_0x2f2376[_0x27fa3c(0x3e6)](/\x1bP\[(\d+)\]/gi,(_0x25e801,_0xecab4c)=>this[_0x27fa3c(0x1b9)](parseInt(_0xecab4c))),_0x2f2376=_0x2f2376[_0x27fa3c(0x3e6)](/\x1bG/gi,TextManager[_0x27fa3c(0x517)]),_0x2f2376;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x3e9)]=function(_0x2ae3d7){const _0x3f4058=_0x53b526;return _0x2ae3d7=_0x2ae3d7[_0x3f4058(0x3e6)](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x3f4058(0x3df)]()),_0x2ae3d7=_0x2ae3d7[_0x3f4058(0x3e6)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this['battleUserName']()),_0x2ae3d7=_0x2ae3d7[_0x3f4058(0x3e6)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x3f4058(0x2d2)](!![])),_0x2ae3d7=_0x2ae3d7[_0x3f4058(0x3e6)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this[_0x3f4058(0x2d2)](![])),_0x2ae3d7;},Window_Base['prototype'][_0x53b526(0x3df)]=function(){const _0x5aa6d4=_0x53b526;if(!SceneManager[_0x5aa6d4(0x407)]())return'';if(BattleManager[_0x5aa6d4(0x271)])return BattleManager[_0x5aa6d4(0x271)][_0x5aa6d4(0x4a3)]();if(BattleManager[_0x5aa6d4(0x30d)][0x0])return BattleManager[_0x5aa6d4(0x30d)][0x0][_0x5aa6d4(0x4a3)]();return'';},Window_Base[_0x53b526(0x3ab)]['battleUserName']=function(){const _0x374167=_0x53b526;if(!SceneManager[_0x374167(0x407)]())return'';let _0x4e654a=null;return _0x4e654a=BattleManager[_0x374167(0x3f7)],!_0x4e654a&&BattleManager[_0x374167(0x223)]()&&(_0x4e654a=BattleManager[_0x374167(0x465)]()),_0x4e654a?_0x4e654a[_0x374167(0x4a3)]():'';},Window_Base['prototype']['battleActionName']=function(_0x2b26ee){const _0xf5c09f=_0x53b526;if(!SceneManager[_0xf5c09f(0x407)]())return'';let _0x2998b5=BattleManager[_0xf5c09f(0x23b)]||null;!_0x2998b5&&BattleManager[_0xf5c09f(0x223)]()&&(_0x2998b5=BattleManager[_0xf5c09f(0x4bf)]());if(_0x2998b5&&_0x2998b5[_0xf5c09f(0x4a7)]()){let _0xbfa2c9='';if(_0x2b26ee)_0xbfa2c9+='\x1bI[%1]'['format'](_0x2998b5[_0xf5c09f(0x4a7)]()[_0xf5c09f(0x25d)]);return _0xbfa2c9+=_0x2998b5['item']()[_0xf5c09f(0x4a3)],_0xbfa2c9;}return'';},Window_Base['prototype'][_0x53b526(0x312)]=function(_0x2ec1ea){const _0x39a505=_0x53b526;for(const _0x3c40b8 of VisuMZ['MessageCore'][_0x39a505(0x398)][_0x39a505(0x288)]){_0x2ec1ea[_0x39a505(0x34e)](_0x3c40b8['textCodeCheck'])&&(_0x2ec1ea=_0x2ec1ea[_0x39a505(0x3e6)](_0x3c40b8['textCodeCheck'],_0x3c40b8['textCodeResult']),_0x2ec1ea=this['convertVariableEscapeCharacters'](_0x2ec1ea));}return _0x2ec1ea;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2cc)]=function(_0x221118){const _0x83ea81=_0x53b526;for(const _0x4dce8c of VisuMZ[_0x83ea81(0x469)][_0x83ea81(0x398)]['TextCodeReplace']){_0x221118[_0x83ea81(0x34e)](_0x4dce8c[_0x83ea81(0x1c3)])&&(_0x221118=_0x221118['replace'](_0x4dce8c['textCodeCheck'],_0x4dce8c[_0x83ea81(0x57e)][_0x83ea81(0x261)](this)),_0x221118=this[_0x83ea81(0x371)](_0x221118));}return _0x221118;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x44a)]=function(_0x32c385){const _0x262550=_0x53b526,_0x4c1001=_0x32c385>=0x1?$gameActors[_0x262550(0x465)](_0x32c385):null,_0x450aac=_0x4c1001?_0x4c1001[_0x262550(0x4a3)]():'',_0x319c78=Number(VisuMZ['MessageCore']['Settings']['AutoColor'][_0x262550(0x337)]);return this[_0x262550(0x361)]()&&_0x319c78!==0x0?_0x262550(0x450)[_0x262550(0x2c3)](_0x319c78,_0x450aac):_0x450aac;},Window_Base['prototype'][_0x53b526(0x1b9)]=function(_0x4e689b){const _0x272969=_0x53b526,_0x20734f=_0x4e689b>=0x1?$gameParty['members']()[_0x4e689b-0x1]:null,_0x3d9aef=_0x20734f?_0x20734f[_0x272969(0x4a3)]():'',_0x140ae6=Number(VisuMZ['MessageCore'][_0x272969(0x398)][_0x272969(0x57d)][_0x272969(0x337)]);return this['isAutoColorAffected']()&&_0x140ae6!==0x0?_0x272969(0x450)['format'](_0x140ae6,_0x3d9aef):_0x3d9aef;},Window_Base['prototype']['processAutoColorWords']=function(_0x3cbc9a){const _0x53b2a5=_0x53b526;return this[_0x53b2a5(0x361)]()&&(_0x3cbc9a=this[_0x53b2a5(0x409)](_0x3cbc9a),_0x3cbc9a=this[_0x53b2a5(0x54d)](_0x3cbc9a)),_0x3cbc9a;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x409)]=function(_0x4a6707){const _0x21650f=_0x53b526;for(autoColor of VisuMZ[_0x21650f(0x469)][_0x21650f(0x49f)]){_0x4a6707=_0x4a6707[_0x21650f(0x3e6)](autoColor[0x0],autoColor[0x1]);}return _0x4a6707;},Window_Base[_0x53b526(0x3ab)]['clearActorNameAutoColor']=function(){const _0x2f7f78=_0x53b526;this[_0x2f7f78(0x39c)]=[];},Window_Base['prototype'][_0x53b526(0x579)]=function(){const _0x388fa7=_0x53b526;this[_0x388fa7(0x35f)]();const _0x3ae3ed=VisuMZ[_0x388fa7(0x469)][_0x388fa7(0x398)][_0x388fa7(0x57d)],_0x570ded=_0x3ae3ed[_0x388fa7(0x337)];if(_0x570ded<=0x0)return;for(const _0x2baec4 of $gameActors[_0x388fa7(0x23f)]){if(!_0x2baec4)continue;const _0x322697=_0x2baec4[_0x388fa7(0x4a3)]();if(_0x322697[_0x388fa7(0x36a)]()['length']<=0x0)continue;if(/^\d+$/['test'](_0x322697))continue;if(_0x322697[_0x388fa7(0x34e)](/-----/i))continue;let _0x4e6517=VisuMZ[_0x388fa7(0x469)][_0x388fa7(0x37c)](_0x322697);const _0x2b0827=new RegExp('\x5cb'+_0x4e6517+'\x5cb','g'),_0x429f2b=_0x388fa7(0x450)['format'](_0x570ded,_0x322697);this[_0x388fa7(0x39c)]['push']([_0x2b0827,_0x429f2b]);}},Window_Base[_0x53b526(0x3ab)]['processActorNameAutoColorChanges']=function(_0x5314d3){const _0x31a4d3=_0x53b526;this[_0x31a4d3(0x39c)]===undefined&&this[_0x31a4d3(0x579)]();for(autoColor of this[_0x31a4d3(0x39c)]){_0x5314d3=_0x5314d3[_0x31a4d3(0x3e6)](autoColor[0x0],autoColor[0x1]);}return _0x5314d3;},Window_Base['prototype'][_0x53b526(0x35b)]=function(_0x4a8fce,_0x316e0b,_0x4f187d){const _0x54921c=_0x53b526;if(!_0x4a8fce)return'';const _0x19bd95=_0x4a8fce[_0x316e0b];let _0x5fd01a='';if(_0x19bd95&&_0x4f187d&&_0x19bd95['iconIndex']){const _0xeb0932=_0x54921c(0x1f8);_0x5fd01a=_0xeb0932[_0x54921c(0x2c3)](_0x19bd95['iconIndex'],_0x19bd95['name']);}else _0x19bd95?_0x5fd01a=_0x19bd95['name']:_0x5fd01a='';return _0x5fd01a=TextManager['parseLocalizedText'](_0x5fd01a),this[_0x54921c(0x361)]()&&(_0x5fd01a=this[_0x54921c(0x310)](_0x5fd01a,_0x4a8fce)),_0x5fd01a;},Window_Base['prototype'][_0x53b526(0x278)]=function(){const _0x478642=_0x53b526,_0x52ba2c=$gameParty['getLastGainedItemData']();if(_0x52ba2c['id']<0x0)return'';let _0x16fe2c=null;if(_0x52ba2c[_0x478642(0x391)]===0x0)_0x16fe2c=$dataItems[_0x52ba2c['id']];if(_0x52ba2c[_0x478642(0x391)]===0x1)_0x16fe2c=$dataWeapons[_0x52ba2c['id']];if(_0x52ba2c[_0x478642(0x391)]===0x2)_0x16fe2c=$dataArmors[_0x52ba2c['id']];if(!_0x16fe2c)return'';return'\x1bi[%1]'['format'](_0x16fe2c[_0x478642(0x25d)]);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2a1)]=function(_0x1d52e1){const _0x14a37d=_0x53b526,_0x4fac0a=$gameParty[_0x14a37d(0x3c3)]();if(_0x4fac0a['id']<0x0)return'';let _0xd89c67=null;if(_0x4fac0a[_0x14a37d(0x391)]===0x0)_0xd89c67=$dataItems[_0x4fac0a['id']];if(_0x4fac0a[_0x14a37d(0x391)]===0x1)_0xd89c67=$dataWeapons[_0x4fac0a['id']];if(_0x4fac0a[_0x14a37d(0x391)]===0x2)_0xd89c67=$dataArmors[_0x4fac0a['id']];if(!_0xd89c67)return'';let _0x59b642=_0xd89c67['name']||'';return TextManager[_0x14a37d(0x270)]()&&(_0x59b642=TextManager[_0x14a37d(0x2c5)](_0x59b642)),_0x1d52e1?_0x14a37d(0x1f8)[_0x14a37d(0x2c3)](_0xd89c67[_0x14a37d(0x25d)],_0x59b642):_0x59b642;},Window_Base[_0x53b526(0x3ab)]['lastGainedObjectQuantity']=function(){const _0x2977c7=_0x53b526,_0x11fd24=$gameParty['getLastGainedItemData']();if(_0x11fd24['id']<=0x0)return'';return _0x11fd24[_0x2977c7(0x487)];},Window_Base['prototype'][_0x53b526(0x310)]=function(_0x1ef576,_0x339ba7){const _0x5181a4=_0x53b526,_0x3cf199=VisuMZ['MessageCore']['Settings'][_0x5181a4(0x57d)];let _0x3c5633=0x0;if(_0x339ba7===$dataActors)_0x3c5633=_0x3cf199[_0x5181a4(0x337)];if(_0x339ba7===$dataClasses)_0x3c5633=_0x3cf199[_0x5181a4(0x228)];if(_0x339ba7===$dataSkills)_0x3c5633=_0x3cf199[_0x5181a4(0x26a)];if(_0x339ba7===$dataItems)_0x3c5633=_0x3cf199[_0x5181a4(0x26d)];if(_0x339ba7===$dataWeapons)_0x3c5633=_0x3cf199[_0x5181a4(0x515)];if(_0x339ba7===$dataArmors)_0x3c5633=_0x3cf199[_0x5181a4(0x548)];if(_0x339ba7===$dataEnemies)_0x3c5633=_0x3cf199[_0x5181a4(0x588)];if(_0x339ba7===$dataStates)_0x3c5633=_0x3cf199['States'];return _0x3c5633>0x0&&(_0x1ef576=_0x5181a4(0x450)[_0x5181a4(0x2c3)](_0x3c5633,_0x1ef576)),_0x1ef576;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x44b)]=function(_0x9b0d3){const _0x2df757=_0x53b526;if(_0x9b0d3[_0x2df757(0x441)](_0x2df757(0x1d6)))return this[_0x2df757(0x584)](![]),_0x9b0d3=_0x9b0d3['replace'](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x9b0d3=_0x9b0d3['replace'](/<(?:WORDWRAP|WORD WRAP)>/gi,''),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x9b0d3=_0x9b0d3['replace'](/<\/(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x9b0d3;_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x1c1b6f,_0x26235a)=>this[_0x2df757(0x584)](!![])),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x571c27,_0x30f8ba)=>this['setWordWrap'](![])),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x5ae1b2,_0x2d40c6)=>this[_0x2df757(0x584)](![]));if(_0x9b0d3[_0x2df757(0x34e)](Window_Message[_0x2df757(0x245)]))this[_0x2df757(0x584)](![]);else _0x9b0d3['match'](Window_Message[_0x2df757(0x44d)])&&this['setWordWrap'](![]);if(!this[_0x2df757(0x321)]())return _0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x9b0d3;if(_0x9b0d3['length']<=0x0)return _0x9b0d3;return _0x9b0d3[_0x2df757(0x34e)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)&&(_0x9b0d3=VisuMZ[_0x2df757(0x469)][_0x2df757(0x2b5)](_0x9b0d3)['join']('')),VisuMZ[_0x2df757(0x469)][_0x2df757(0x398)][_0x2df757(0x1f7)][_0x2df757(0x4c1)]?(_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/[\n\r]+/g,'\x20'),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/[\n\r]+/g,''),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x9b0d3=this['addWrapBreakAfterPunctuation'](_0x9b0d3),_0x9b0d3=_0x9b0d3['split']('\x20')[_0x2df757(0x1db)](_0x2df757(0x48f)),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x9b0d3=_0x9b0d3[_0x2df757(0x3e6)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x9b0d3;},VisuMZ[_0x53b526(0x469)]['SplitJpCnCharacters']=function(_0xbb8c8e){const _0x1769a0=_0x53b526;let _0x7e389c=[],_0x363e44='';while(_0xbb8c8e[_0x1769a0(0x4f2)]>0x0){const _0x245270=_0xbb8c8e[_0x1769a0(0x220)](0x0);_0xbb8c8e=_0xbb8c8e[_0x1769a0(0x3f1)](0x1),_0x245270[_0x1769a0(0x34e)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)?(_0x363e44[_0x1769a0(0x4f2)]>0x0&&(_0x7e389c[_0x1769a0(0x432)](_0x363e44),_0x363e44=''),_0x7e389c['push'](_0x245270+'\x1bWrapJpBreak[0]')):_0x363e44+=_0x245270;}return _0x363e44[_0x1769a0(0x4f2)]>0x0&&(_0x7e389c['push'](_0x363e44),_0x363e44=''),_0x7e389c;},Window_Base[_0x53b526(0x3ab)]['addWrapBreakAfterPunctuation']=function(_0x97f91d){return _0x97f91d;},VisuMZ['MessageCore']['Window_Base_processNewLine']=Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2f6)],Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2f6)]=function(_0x348166){const _0x3e3167=_0x53b526;VisuMZ[_0x3e3167(0x469)][_0x3e3167(0x21e)][_0x3e3167(0x1dc)](this,_0x348166),this[_0x3e3167(0x2cb)](_0x348166);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x25b)]=function(_0x174670){const _0x3186db=_0x53b526;let _0x1a99b0=_0x174670[_0x3186db(0x390)][_0x174670['index']++];if(_0x1a99b0[_0x3186db(0x32d)](0x0)<0x20)this['flushTextState'](_0x174670),this['processControlCharacter'](_0x174670,_0x1a99b0);else{if(this[_0x3186db(0x542)]===0x1)_0x1a99b0=_0x1a99b0[_0x3186db(0x29a)]();if(this['_textCasing']===0x2){if(this[_0x3186db(0x52b)])_0x1a99b0=_0x1a99b0[_0x3186db(0x40f)]();this['_textCasingUpperState']=/\s/[_0x3186db(0x499)](_0x1a99b0);}if(this[_0x3186db(0x542)]===0x3)_0x1a99b0=_0x1a99b0['toUpperCase']();this['_textCasing']===0x4&&(_0x1a99b0=this[_0x3186db(0x421)]?_0x1a99b0[_0x3186db(0x40f)]():_0x1a99b0[_0x3186db(0x29a)](),this[_0x3186db(0x421)]=!this[_0x3186db(0x421)]),this[_0x3186db(0x542)]===0x5&&(_0x1a99b0=Math[_0x3186db(0x1c4)]()<0.5?_0x1a99b0[_0x3186db(0x40f)]():_0x1a99b0['toLowerCase']()),_0x174670['buffer']+=_0x1a99b0;}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x215)]=Window_Base[_0x53b526(0x3ab)][_0x53b526(0x32b)],Window_Base[_0x53b526(0x3ab)][_0x53b526(0x32b)]=function(_0x11fd15,_0x1569e3){const _0x5e1e8f=_0x53b526;VisuMZ[_0x5e1e8f(0x469)][_0x5e1e8f(0x215)][_0x5e1e8f(0x1dc)](this,_0x11fd15,_0x1569e3);if(_0x1569e3===_0x5e1e8f(0x48f))this[_0x5e1e8f(0x454)](_0x11fd15);else _0x1569e3===_0x5e1e8f(0x4f1)&&this['processWrapBreak'](_0x11fd15,!![]);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x235)]=function(_0x406808){const _0x128d16=_0x53b526;var _0x47c385=/^\<(.*?)\>/['exec'](_0x406808[_0x128d16(0x390)]['slice'](_0x406808[_0x128d16(0x578)]));return _0x47c385?(_0x406808[_0x128d16(0x578)]+=_0x47c385[0x0][_0x128d16(0x4f2)],String(_0x47c385[0x0][_0x128d16(0x3f1)](0x1,_0x47c385[0x0]['length']-0x1))):'';},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2ff)]=Window_Base[_0x53b526(0x3ab)][_0x53b526(0x1fe)],Window_Base[_0x53b526(0x3ab)][_0x53b526(0x1fe)]=function(_0x574360,_0x5e3465){const _0x225fd5=_0x53b526;switch(_0x574360){case'C':_0x5e3465[_0x225fd5(0x560)]?VisuMZ[_0x225fd5(0x469)][_0x225fd5(0x2ff)][_0x225fd5(0x1dc)](this,_0x574360,_0x5e3465):this[_0x225fd5(0x386)](_0x5e3465);break;case'I':case'{':case'}':VisuMZ['MessageCore'][_0x225fd5(0x2ff)][_0x225fd5(0x1dc)](this,_0x574360,_0x5e3465);break;case'FS':this[_0x225fd5(0x374)](_0x5e3465);break;case'PX':this[_0x225fd5(0x1ed)](_0x5e3465);break;case'PY':this[_0x225fd5(0x3cc)](_0x5e3465);break;case _0x225fd5(0x4b4):this[_0x225fd5(0x4e5)](this[_0x225fd5(0x386)](_0x5e3465));break;case'CASING':this[_0x225fd5(0x20d)](_0x5e3465);break;case'CENTERPICTURE':this[_0x225fd5(0x1ec)](_0x5e3465);break;case _0x225fd5(0x3a4):this[_0x225fd5(0x237)](_0x5e3465);break;case _0x225fd5(0x309):this[_0x225fd5(0x2cf)](_0x5e3465);break;case _0x225fd5(0x212):this[_0x225fd5(0x247)](this[_0x225fd5(0x386)](_0x5e3465));break;case _0x225fd5(0x3b2):this[_0x225fd5(0x241)](_0x5e3465);break;case'PREVCOLOR':this[_0x225fd5(0x32e)](_0x5e3465);break;case _0x225fd5(0x56e):this[_0x225fd5(0x54b)](_0x5e3465);break;case _0x225fd5(0x544):this[_0x225fd5(0x1d9)](_0x5e3465);break;case'WRAPBREAK':this[_0x225fd5(0x454)](_0x5e3465);break;case'WRAPJPBREAK':this[_0x225fd5(0x454)](_0x5e3465,!![]);break;default:this[_0x225fd5(0x4ef)](_0x574360,_0x5e3465);}},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4ef)]=function(_0x5d1509,_0x200829){const _0xf3115c=_0x53b526;for(const _0x5b50ff of VisuMZ['MessageCore'][_0xf3115c(0x398)][_0xf3115c(0x288)]){if(_0x5b50ff['Match']===_0x5d1509){if(_0x5b50ff[_0xf3115c(0x32a)]==='')this['obtainEscapeParam'](_0x200829);_0x5b50ff['ActionJS'][_0xf3115c(0x1dc)](this,_0x200829);if(this['constructor']===Window_Message){const _0x35f455=_0x5b50ff[_0xf3115c(0x555)]||0x0;if(_0x35f455>0x0)this[_0xf3115c(0x233)](_0x35f455);}}}},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x40b)]=function(){const _0x318182=_0x53b526;this[_0x318182(0x256)][_0x318182(0x207)]+=VisuMZ['MessageCore'][_0x318182(0x398)][_0x318182(0x425)][_0x318182(0x388)],this[_0x318182(0x256)]['fontSize']=Math[_0x318182(0x3c9)](this[_0x318182(0x256)][_0x318182(0x207)],VisuMZ[_0x318182(0x469)][_0x318182(0x398)]['General'][_0x318182(0x482)]);},Window_Base['prototype']['makeFontSmaller']=function(){const _0x4251ed=_0x53b526;this[_0x4251ed(0x256)]['fontSize']-=VisuMZ[_0x4251ed(0x469)][_0x4251ed(0x398)][_0x4251ed(0x425)][_0x4251ed(0x388)],this[_0x4251ed(0x256)]['fontSize']=Math[_0x4251ed(0x592)](this['contents'][_0x4251ed(0x207)],VisuMZ[_0x4251ed(0x469)][_0x4251ed(0x398)]['General'][_0x4251ed(0x457)]);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x374)]=function(_0x4eacb2){const _0x12c209=_0x53b526,_0x166349=this['obtainEscapeParam'](_0x4eacb2);this[_0x12c209(0x256)][_0x12c209(0x207)]=_0x166349[_0x12c209(0x300)](VisuMZ[_0x12c209(0x469)]['Settings']['General'][_0x12c209(0x457)],VisuMZ[_0x12c209(0x469)]['Settings'][_0x12c209(0x425)][_0x12c209(0x482)]);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x54f)]=function(_0x1c9ad1){const _0x421fad=_0x53b526;let _0x963581=this[_0x421fad(0x256)][_0x421fad(0x207)];const _0x1367cf=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0x2c8de1=_0x1367cf[_0x421fad(0x217)](_0x1c9ad1);if(!_0x2c8de1)break;const _0x509e18=String(_0x2c8de1[0x1])[_0x421fad(0x40f)]();if(_0x509e18==='{')this[_0x421fad(0x40b)]();else{if(_0x509e18==='}')this[_0x421fad(0x489)]();else _0x509e18==='FS'&&(this[_0x421fad(0x256)][_0x421fad(0x207)]=parseInt(_0x2c8de1[0x3])[_0x421fad(0x300)](VisuMZ['MessageCore'][_0x421fad(0x398)][_0x421fad(0x425)][_0x421fad(0x457)],VisuMZ[_0x421fad(0x469)]['Settings'][_0x421fad(0x425)][_0x421fad(0x482)]));}this[_0x421fad(0x256)]['fontSize']>_0x963581&&(_0x963581=this[_0x421fad(0x256)][_0x421fad(0x207)]);}return _0x963581;},Window_Base[_0x53b526(0x3ab)]['processPxTextCode']=function(_0x1c9170){const _0x92f921=_0x53b526;_0x1c9170['x']=this[_0x92f921(0x386)](_0x1c9170),VisuMZ[_0x92f921(0x469)][_0x92f921(0x398)]['General'][_0x92f921(0x502)]&&(_0x1c9170['x']+=_0x1c9170['startX']);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x3cc)]=function(_0x150306){const _0x3c668a=_0x53b526;_0x150306['y']=this[_0x3c668a(0x386)](_0x150306),VisuMZ[_0x3c668a(0x469)][_0x3c668a(0x398)][_0x3c668a(0x425)]['RelativePXPY']&&(_0x150306['y']+=_0x150306[_0x3c668a(0x39d)]);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x4e5)]=function(_0xeb578a){const _0x513149=_0x53b526;this['contents'][_0x513149(0x255)]=!!_0xeb578a;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x247)]=function(_0x314c6f){const _0x4f4523=_0x53b526;this[_0x4f4523(0x256)][_0x4f4523(0x358)]=!!_0x314c6f;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x54b)]=function(_0x29eae4){const _0xfddb5b=_0x53b526,_0xe834c7=this['obtainEscapeParam'](_0x29eae4);if(!_0x29eae4[_0xfddb5b(0x560)])return;switch(_0xe834c7){case 0x0:this[_0xfddb5b(0x29f)](_0xfddb5b(0x38b));return;case 0x1:this[_0xfddb5b(0x29f)](_0xfddb5b(0x24d));break;case 0x2:this[_0xfddb5b(0x29f)](_0xfddb5b(0x293));break;case 0x3:this[_0xfddb5b(0x29f)]('right');break;}this[_0xfddb5b(0x2cb)](_0x29eae4);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x2cb)]=function(_0x367c46){const _0x284c99=_0x53b526;if(!_0x367c46[_0x284c99(0x560)])return;if(_0x367c46[_0x284c99(0x3d8)])return;if(this[_0x284c99(0x28b)]()===_0x284c99(0x38b))return;let _0x6c8bc8=_0x367c46[_0x284c99(0x390)]['indexOf'](_0x284c99(0x1d6),_0x367c46[_0x284c99(0x578)]+0x1),_0x1306a0=_0x367c46[_0x284c99(0x390)]['indexOf']('\x0a',_0x367c46['index']+0x1);if(_0x6c8bc8<0x0)_0x6c8bc8=_0x367c46[_0x284c99(0x390)]['length']+0x1;if(_0x1306a0>0x0)_0x6c8bc8=Math[_0x284c99(0x3c9)](_0x6c8bc8,_0x1306a0);const _0x174589=_0x367c46['text'][_0x284c99(0x20c)](_0x367c46[_0x284c99(0x578)],_0x6c8bc8),_0x50ae5c=this[_0x284c99(0x376)](_0x174589)[_0x284c99(0x3dd)],_0xe6f49e=_0x367c46['width']||this['innerWidth']-0x8,_0x14ef38=this[_0x284c99(0x415)]===Window_Message&&$gameMessage[_0x284c99(0x284)]()!=='';switch(this['getTextAlignment']()){case _0x284c99(0x24d):_0x367c46['x']=_0x367c46[_0x284c99(0x4d1)];break;case _0x284c99(0x293):_0x367c46['x']=_0x367c46[_0x284c99(0x4d1)],_0x367c46['x']+=Math[_0x284c99(0x538)]((_0xe6f49e-_0x50ae5c)/0x2);_0x14ef38&&(_0x367c46['x']-=_0x367c46[_0x284c99(0x4d1)]/0x2);break;case _0x284c99(0x2a9):_0x367c46['x']=_0xe6f49e-_0x50ae5c+_0x367c46[_0x284c99(0x4d1)];_0x14ef38&&(_0x367c46['x']-=_0x367c46['startX']);break;}},Window_Base[_0x53b526(0x3ab)]['textSizeExTextAlignment']=function(_0x1fd725){const _0x56a2e0=_0x53b526;_0x1fd725=_0x1fd725[_0x56a2e0(0x3e6)](/\x1b!/g,''),_0x1fd725=_0x1fd725['replace'](/\x1b\|/g,''),_0x1fd725=_0x1fd725[_0x56a2e0(0x3e6)](/\x1b\./g,'');const _0x5614a3=this[_0x56a2e0(0x435)](_0x1fd725,0x0,0x0,0x0),_0xdc3d02=this['getPreservedFontSettings']();return _0x5614a3[_0x56a2e0(0x560)]=![],this[_0x56a2e0(0x496)](_0x5614a3),this['returnPreservedFontSettings'](_0xdc3d02),{'width':_0x5614a3[_0x56a2e0(0x448)],'height':_0x5614a3[_0x56a2e0(0x4fa)]};},Window_Base['WORD_WRAP_PADDING']=VisuMZ[_0x53b526(0x469)][_0x53b526(0x398)]['WordWrap'][_0x53b526(0x3e3)]||0x0,Window_Base[_0x53b526(0x3ab)][_0x53b526(0x454)]=function(_0x13f8fe,_0x4c91a7){const _0x514916=_0x53b526,_0x2fc29a=(_0x13f8fe[_0x514916(0x3d8)]?-0x1:0x1)*this[_0x514916(0x2fe)]('\x20');if(!_0x4c91a7)_0x13f8fe['x']+=_0x2fc29a;if(this['obtainEscapeParam'](_0x13f8fe)>0x0&&!_0x4c91a7)_0x13f8fe['x']+=_0x2fc29a;if(_0x13f8fe[_0x514916(0x3d8)])return;let _0x2ea40e;_0x4c91a7?_0x2ea40e=_0x13f8fe[_0x514916(0x390)][_0x514916(0x2bd)](_0x514916(0x4f1),_0x13f8fe['index']+0x1):_0x2ea40e=_0x13f8fe['text'][_0x514916(0x2bd)](_0x514916(0x48f),_0x13f8fe[_0x514916(0x578)]+0x1);let _0x30d050=_0x13f8fe[_0x514916(0x390)][_0x514916(0x2bd)]('\x0a',_0x13f8fe[_0x514916(0x578)]+0x1);if(_0x2ea40e<0x0)_0x2ea40e=_0x13f8fe['text']['length']+0x1;if(_0x30d050>0x0)_0x2ea40e=Math[_0x514916(0x3c9)](_0x2ea40e,_0x30d050);const _0x530c02=_0x13f8fe[_0x514916(0x390)][_0x514916(0x20c)](_0x13f8fe[_0x514916(0x578)],_0x2ea40e),_0x22d5bc=this[_0x514916(0x3e2)](_0x530c02)[_0x514916(0x3dd)];let _0xaac9f0=_0x13f8fe[_0x514916(0x3dd)]||this[_0x514916(0x369)];_0xaac9f0-=Window_Base[_0x514916(0x1c7)];if(this[_0x514916(0x415)]===Window_Message){const _0x521da4=$gameMessage[_0x514916(0x284)]()===''?0x0:ImageManager[_0x514916(0x437)]+0x14;_0xaac9f0-=_0x521da4,VisuMZ[_0x514916(0x469)][_0x514916(0x398)]['WordWrap'][_0x514916(0x40d)]&&(_0xaac9f0-=_0x521da4);}let _0x4bdb1b=![];_0x13f8fe['x']+_0x22d5bc>_0x13f8fe[_0x514916(0x4d1)]+_0xaac9f0&&(_0x4bdb1b=!![]),_0x22d5bc===0x0&&(_0x4bdb1b=![]),_0x4bdb1b&&(_0x13f8fe['text']=_0x13f8fe[_0x514916(0x390)][_0x514916(0x3f1)](0x0,_0x13f8fe['index'])+'\x0a'+_0x13f8fe[_0x514916(0x390)][_0x514916(0x554)](_0x13f8fe[_0x514916(0x578)]));},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x3e2)]=function(_0x14c4d6){const _0x378e70=_0x53b526,_0x5317d5=this['createTextState'](_0x14c4d6,0x0,0x0,0x0),_0x1f361f=this['getPreservedFontSettings']();return _0x5317d5[_0x378e70(0x560)]=![],this[_0x378e70(0x584)](![]),this[_0x378e70(0x496)](_0x5317d5),this['setWordWrap'](!![]),this[_0x378e70(0x2f8)](_0x1f361f),{'width':_0x5317d5[_0x378e70(0x448)],'height':_0x5317d5[_0x378e70(0x4fa)]};},Window_Base['prototype'][_0x53b526(0x2cf)]=function(_0x45df71){const _0x1dc94a=_0x53b526;return this[_0x1dc94a(0x386)](_0x45df71);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x241)]=function(_0xbfea51){const _0x1ecda4=_0x53b526,_0x4abd45=this[_0x1ecda4(0x235)](_0xbfea51)[_0x1ecda4(0x286)](',');if(!_0xbfea51[_0x1ecda4(0x560)])return;const _0x4c9801=_0x4abd45[0x0][_0x1ecda4(0x36a)](),_0x2c1540=_0x4abd45[0x1]||0x0,_0x3a78e3=_0x4abd45[0x2]||0x0,_0x284b2d=ImageManager[_0x1ecda4(0x486)](_0x4c9801),_0x394a9e=this[_0x1ecda4(0x256)][_0x1ecda4(0x4c8)];_0x284b2d['addLoadListener'](this[_0x1ecda4(0x34f)][_0x1ecda4(0x261)](this,_0x284b2d,_0xbfea51['x'],_0xbfea51['y'],_0x2c1540,_0x3a78e3,_0x394a9e));},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x34f)]=function(_0x3e8535,_0x621656,_0x15a810,_0x4a10e2,_0x24a095,_0x29c1e3){const _0x8dd372=_0x53b526;_0x4a10e2=_0x4a10e2||_0x3e8535[_0x8dd372(0x3dd)],_0x24a095=_0x24a095||_0x3e8535[_0x8dd372(0x514)],this[_0x8dd372(0x40e)][_0x8dd372(0x4c8)]=_0x29c1e3,this['contentsBack'][_0x8dd372(0x4f3)](_0x3e8535,0x0,0x0,_0x3e8535[_0x8dd372(0x3dd)],_0x3e8535[_0x8dd372(0x514)],_0x621656,_0x15a810,_0x4a10e2,_0x24a095),this[_0x8dd372(0x40e)][_0x8dd372(0x4c8)]=0xff;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x1ec)]=function(_0x5604bc){const _0x251eec=_0x53b526,_0xc34c53=this[_0x251eec(0x235)](_0x5604bc)[_0x251eec(0x286)](',');if(!_0x5604bc[_0x251eec(0x560)])return;const _0x55541f=_0xc34c53[0x0][_0x251eec(0x36a)](),_0x3b75a7=ImageManager[_0x251eec(0x486)](_0x55541f),_0x187683=JsonEx['makeDeepCopy'](_0x5604bc),_0x545b75=this[_0x251eec(0x256)][_0x251eec(0x4c8)];_0x3b75a7['addLoadListener'](this['drawBackCenteredPicture'][_0x251eec(0x261)](this,_0x3b75a7,_0x187683,_0x545b75));},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x3d6)]=function(_0x1a8ff4,_0x563864,_0xc4876){const _0xc60887=_0x53b526,_0x179f47=_0x563864[_0xc60887(0x3dd)]||this[_0xc60887(0x369)],_0x576be4=this[_0xc60887(0x481)]!==undefined?this[_0xc60887(0x532)]():this[_0xc60887(0x2b4)],_0x4ea5e4=_0x179f47/_0x1a8ff4[_0xc60887(0x3dd)],_0x5cf010=_0x576be4/_0x1a8ff4['height'],_0x11a739=Math[_0xc60887(0x3c9)](_0x4ea5e4,_0x5cf010,0x1),_0x14c960=this[_0xc60887(0x481)]!==undefined?(this[_0xc60887(0x39f)](0x0)[_0xc60887(0x514)]-this[_0xc60887(0x1eb)]())/0x2:0x0,_0x1866a5=_0x1a8ff4[_0xc60887(0x3dd)]*_0x11a739,_0x25a6d6=_0x1a8ff4[_0xc60887(0x514)]*_0x11a739,_0x1d9050=Math[_0xc60887(0x538)]((_0x179f47-_0x1866a5)/0x2)+_0x563864[_0xc60887(0x4d1)],_0x141b1d=Math[_0xc60887(0x538)]((_0x576be4-_0x25a6d6)/0x2)+_0x563864[_0xc60887(0x39d)]-_0x14c960*0x2;this[_0xc60887(0x40e)][_0xc60887(0x4c8)]=_0xc4876,this[_0xc60887(0x40e)]['blt'](_0x1a8ff4,0x0,0x0,_0x1a8ff4[_0xc60887(0x3dd)],_0x1a8ff4[_0xc60887(0x514)],_0x1d9050,_0x141b1d,_0x1866a5,_0x25a6d6),this['contentsBack']['paintOpacity']=0xff;},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x237)]=function(_0x1f6673){const _0x54ab8c=_0x53b526,_0x41580e=this['obtainEscapeParam'](_0x1f6673);if(_0x1f6673[_0x54ab8c(0x560)])this['setColorLock'](_0x41580e>0x0);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x1d9)]=function(_0x1b4cb3){const _0x4d8f31=_0x53b526,_0x267076=this[_0x4d8f31(0x386)](_0x1b4cb3);this[_0x4d8f31(0x415)]===Window_Message&&_0x1b4cb3[_0x4d8f31(0x560)]&&this[_0x4d8f31(0x333)](_0x267076);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x20d)]=function(_0x26d957){const _0x152c1f=_0x53b526;this[_0x152c1f(0x542)]=this[_0x152c1f(0x386)](_0x26d957),this['_textCasingUpperState']=!![],this['_lastAltCase']=!![];},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2ae)]=function(_0x3c5a0e){const _0x447ce0=_0x53b526;if($gameTemp[_0x447ce0(0x2e3)]()){let _0x42e51b=_0x447ce0(0x36b)[_0x447ce0(0x2c3)](_0x3c5a0e[_0x447ce0(0x415)]['name']);alert(_0x42e51b),SceneManager[_0x447ce0(0x4c4)]();}},Window_Base['prototype'][_0x53b526(0x3fc)]=function(){VisuMZ['MessageCore']['NonSupportedTextCodes'](this);},Window_Base['prototype']['drawMessageFace']=function(){const _0x120834=_0x53b526;VisuMZ[_0x120834(0x469)][_0x120834(0x2ae)](this);},Window_Base[_0x53b526(0x3ab)][_0x53b526(0x3e8)]=function(){const _0x3d84d1=_0x53b526;VisuMZ[_0x3d84d1(0x469)]['NonSupportedTextCodes'](this);},Window_Help[_0x53b526(0x3ab)][_0x53b526(0x1ac)]=function(){const _0x4f4739=_0x53b526;this[_0x4f4739(0x584)]($gameSystem[_0x4f4739(0x4ba)]());},Window_Help[_0x53b526(0x3ab)][_0x53b526(0x361)]=function(){return!![];},VisuMZ[_0x53b526(0x469)][_0x53b526(0x2ed)]=Window_Help[_0x53b526(0x3ab)]['refresh'],Window_Help[_0x53b526(0x3ab)][_0x53b526(0x520)]=function(){const _0x41de82=_0x53b526;this[_0x41de82(0x35f)](),VisuMZ[_0x41de82(0x469)][_0x41de82(0x2ed)][_0x41de82(0x1dc)](this),this['resetWordWrap']();},VisuMZ[_0x53b526(0x469)][_0x53b526(0x313)]=Window_Options[_0x53b526(0x3ab)][_0x53b526(0x3ce)],Window_Options[_0x53b526(0x3ab)][_0x53b526(0x3ce)]=function(){const _0x16a4ea=_0x53b526;VisuMZ[_0x16a4ea(0x469)]['Window_Options_addGeneralOptions'][_0x16a4ea(0x1dc)](this),this['addMessageCoreCommands']();},Window_Options[_0x53b526(0x3ab)]['addMessageCoreCommands']=function(){const _0x323079=_0x53b526;VisuMZ['MessageCore']['Settings']['Localization'][_0x323079(0x458)]&&TextManager[_0x323079(0x270)]()&&this[_0x323079(0x49b)](),VisuMZ[_0x323079(0x469)][_0x323079(0x398)]['TextSpeed'][_0x323079(0x458)]&&this[_0x323079(0x319)]();},Window_Options[_0x53b526(0x3ab)][_0x53b526(0x49b)]=function(){const _0x497277=_0x53b526,_0xe87bb9=TextManager[_0x497277(0x440)],_0x484fca='textLocale';this[_0x497277(0x46a)](_0xe87bb9,_0x484fca);},Window_Options[_0x53b526(0x3ab)][_0x53b526(0x319)]=function(){const _0x2c32c7=_0x53b526,_0xa2f025=TextManager[_0x2c32c7(0x534)],_0x3126db=_0x2c32c7(0x4a0);this[_0x2c32c7(0x46a)](_0xa2f025,_0x3126db);},VisuMZ['MessageCore'][_0x53b526(0x2a0)]=Window_Options[_0x53b526(0x3ab)][_0x53b526(0x4e1)],Window_Options['prototype']['statusText']=function(_0x5e3887){const _0x5c70da=_0x53b526,_0x327359=this['commandSymbol'](_0x5e3887);if(_0x327359==='textLocale')return this[_0x5c70da(0x51a)]();if(_0x327359==='textSpeed')return this[_0x5c70da(0x418)]();return VisuMZ['MessageCore'][_0x5c70da(0x2a0)][_0x5c70da(0x1dc)](this,_0x5e3887);},Window_Options[_0x53b526(0x3ab)]['visuMzTextLocaleStatusText']=function(){const _0x48ff67=_0x53b526,_0x523b45=ConfigManager[_0x48ff67(0x575)];return TextManager[_0x48ff67(0x210)](_0x523b45);},Window_Options[_0x53b526(0x3ab)][_0x53b526(0x418)]=function(){const _0x89c667=_0x53b526,_0x25227b=this[_0x89c667(0x285)](_0x89c667(0x4a0));return _0x25227b>0xa?TextManager[_0x89c667(0x4ec)]:_0x25227b;},VisuMZ[_0x53b526(0x469)]['Window_Options_isVolumeSymbol']=Window_Options[_0x53b526(0x3ab)][_0x53b526(0x206)],Window_Options['prototype']['isVolumeSymbol']=function(_0x4f404e){const _0xac27f7=_0x53b526;if(_0x4f404e==='textLocale')return!![];if(_0x4f404e===_0xac27f7(0x4a0))return!![];return VisuMZ[_0xac27f7(0x469)][_0xac27f7(0x4a4)][_0xac27f7(0x1dc)](this,_0x4f404e);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x53e)]=Window_Options[_0x53b526(0x3ab)][_0x53b526(0x582)],Window_Options[_0x53b526(0x3ab)][_0x53b526(0x582)]=function(_0x406434,_0x2138c6,_0x791367){const _0x1a5237=_0x53b526;if(_0x406434==='textLocale')return this[_0x1a5237(0x42c)](_0x2138c6,_0x791367);if(_0x406434===_0x1a5237(0x4a0))return this['changeTextSpeed'](_0x406434,_0x2138c6,_0x791367);VisuMZ[_0x1a5237(0x469)][_0x1a5237(0x53e)][_0x1a5237(0x1dc)](this,_0x406434,_0x2138c6,_0x791367);},Window_Options[_0x53b526(0x3ab)][_0x53b526(0x42c)]=function(_0x5dbe35,_0x2eac51){const _0x69bcc0=_0x53b526,_0x30633b=VisuMZ[_0x69bcc0(0x469)]['Settings']['Localization'][_0x69bcc0(0x41c)]||[],_0x5c3c11=ConfigManager[_0x69bcc0(0x575)];let _0x4d5a23=_0x30633b['indexOf'](_0x5c3c11);_0x4d5a23+=_0x5dbe35?0x1:-0x1;if(_0x4d5a23>=_0x30633b['length'])_0x4d5a23=_0x2eac51?0x0:_0x30633b[_0x69bcc0(0x4f2)]-0x1;if(_0x4d5a23<0x0)_0x4d5a23=_0x2eac51?_0x30633b[_0x69bcc0(0x4f2)]-0x1:0x0;this[_0x69bcc0(0x400)](_0x69bcc0(0x575),_0x30633b[_0x4d5a23]);},Window_Options[_0x53b526(0x3ab)][_0x53b526(0x3b0)]=function(_0x23b91e,_0x17d04d,_0x5229b9){const _0x2abca7=_0x53b526,_0x1c5123=this[_0x2abca7(0x285)](_0x23b91e),_0x1b17b7=0x1,_0x392290=_0x1c5123+(_0x17d04d?_0x1b17b7:-_0x1b17b7);_0x392290>0xb&&_0x5229b9?this['changeValue'](_0x23b91e,0x1):this['changeValue'](_0x23b91e,_0x392290[_0x2abca7(0x300)](0x1,0xb));},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x375)]=function(){const _0x3d1109=_0x53b526;let _0x1f9885=Window_Base['prototype'][_0x3d1109(0x375)][_0x3d1109(0x1dc)](this);return _0x1f9885-=this['addedHeight'](),_0x1f9885;},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x2fd)]=function(){const _0x5dc9cc=_0x53b526;Window_Base['prototype']['refreshDimmerBitmap'][_0x5dc9cc(0x1dc)](this),VisuMZ[_0x5dc9cc(0x469)][_0x5dc9cc(0x398)][_0x5dc9cc(0x425)][_0x5dc9cc(0x4fc)]&&this[_0x5dc9cc(0x4a2)]();},Window_Message['prototype']['stretchDimmerSprite']=function(){const _0x1739f2=_0x53b526;this[_0x1739f2(0x4b6)]['x']=Math[_0x1739f2(0x1d3)](this[_0x1739f2(0x3dd)]/0x2),this['_dimmerSprite'][_0x1739f2(0x335)]['x']=0.5,this['_dimmerSprite'][_0x1739f2(0x4ee)]['x']=Graphics[_0x1739f2(0x3dd)];},VisuMZ[_0x53b526(0x469)][_0x53b526(0x3ac)]=Window_Message['prototype'][_0x53b526(0x324)],Window_Message[_0x53b526(0x3ab)][_0x53b526(0x324)]=function(){const _0x1dfcd6=_0x53b526;VisuMZ['MessageCore'][_0x1dfcd6(0x3ac)][_0x1dfcd6(0x1dc)](this),this[_0x1dfcd6(0x35f)](),this['resetWordWrap'](),this[_0x1dfcd6(0x3ed)](![]),this['setTextAlignment'](_0x1dfcd6(0x38b)),this[_0x1dfcd6(0x3e8)](VisuMZ[_0x1dfcd6(0x469)][_0x1dfcd6(0x398)][_0x1dfcd6(0x425)][_0x1dfcd6(0x4e3)]);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x1ac)]=function(){const _0x298083=_0x53b526;this[_0x298083(0x584)]($gameSystem['isMessageWindowWordWrap']());},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x361)]=function(){return!![];},Window_Message[_0x53b526(0x3ab)]['setTextDelay']=function(_0x1d0ac1){const _0x25cbde=_0x53b526,_0x42285a=0xb-ConfigManager[_0x25cbde(0x4a0)];_0x1d0ac1=Math[_0x25cbde(0x1d3)](_0x1d0ac1*_0x42285a),this[_0x25cbde(0x27d)]=_0x1d0ac1,this['_textDelay']=_0x1d0ac1;},VisuMZ['MessageCore'][_0x53b526(0x595)]=Window_Message[_0x53b526(0x3ab)][_0x53b526(0x467)],Window_Message[_0x53b526(0x3ab)]['isTriggered']=function(){const _0xaccac1=_0x53b526;return VisuMZ[_0xaccac1(0x469)]['Window_Message_isTriggered']['call'](this)||Input[_0xaccac1(0x4c6)](VisuMZ[_0xaccac1(0x469)][_0xaccac1(0x398)]['General']['FastForwardKey']);},VisuMZ['MessageCore'][_0x53b526(0x439)]=Window_Message[_0x53b526(0x3ab)][_0x53b526(0x528)],Window_Message[_0x53b526(0x3ab)]['updatePlacement']=function(){const _0x5295a6=_0x53b526;let _0x4ab6b5=this['y'];this['x']=Math[_0x5295a6(0x1d3)]((Graphics[_0x5295a6(0x530)]-this['width'])/0x2),VisuMZ[_0x5295a6(0x469)][_0x5295a6(0x439)]['call'](this);if(this['_autoPositionTarget'])this['y']=_0x4ab6b5;this[_0x5295a6(0x41f)](),this[_0x5295a6(0x3a6)](),this[_0x5295a6(0x4b5)](),this['updateChoiceListHelpWindowPlacement']();},VisuMZ[_0x53b526(0x469)][_0x53b526(0x259)]=Window_Message[_0x53b526(0x3ab)][_0x53b526(0x434)],Window_Message[_0x53b526(0x3ab)][_0x53b526(0x434)]=function(_0x55f146){const _0x1625d0=_0x53b526;this[_0x1625d0(0x576)](_0x55f146),this[_0x1625d0(0x4a1)](_0x55f146),VisuMZ[_0x1625d0(0x469)][_0x1625d0(0x259)][_0x1625d0(0x1dc)](this,_0x55f146),this[_0x1625d0(0x472)]();},Window_Message['prototype'][_0x53b526(0x576)]=function(_0x2e0916){const _0x2369f5=_0x53b526;if(!_0x2e0916)return;this['_macroBypassWordWrap']=![],_0x2e0916[_0x2369f5(0x390)]=this[_0x2369f5(0x4a5)](_0x2e0916[_0x2369f5(0x390)]),this['_textMacroFound']&&(_0x2e0916['text']=this[_0x2369f5(0x44b)](_0x2e0916['text']),this[_0x2369f5(0x30e)]=!![]);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x44b)]=function(_0x3880ef){const _0x3da111=_0x53b526;if(this[_0x3da111(0x30e)])return _0x3880ef;return Window_Base[_0x3da111(0x3ab)][_0x3da111(0x44b)]['call'](this,_0x3880ef);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x4a1)]=function(_0x153be0){const _0x530b9c=_0x53b526;this[_0x530b9c(0x364)](_0x153be0),this[_0x530b9c(0x52e)](_0x153be0),this[_0x530b9c(0x22c)]();},VisuMZ[_0x53b526(0x469)]['Window_Message_terminateMessage']=Window_Message[_0x53b526(0x3ab)][_0x53b526(0x449)],Window_Message[_0x53b526(0x3ab)][_0x53b526(0x449)]=function(){const _0x18ab7c=_0x53b526;VisuMZ['MessageCore'][_0x18ab7c(0x404)][_0x18ab7c(0x1dc)](this),this[_0x18ab7c(0x324)]();if(this['_messagePositionReset'])this[_0x18ab7c(0x1fc)]();},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x22c)]=function(){const _0x7414f4=_0x53b526;this['width']=$gameSystem[_0x7414f4(0x501)]()+this[_0x7414f4(0x331)]();;this['width']=Math['min'](Graphics[_0x7414f4(0x3dd)],this[_0x7414f4(0x3dd)]);const _0x4b5ad8=$gameSystem[_0x7414f4(0x44e)]();this[_0x7414f4(0x514)]=SceneManager[_0x7414f4(0x35e)]['calcWindowHeight'](_0x4b5ad8,![])+this[_0x7414f4(0x336)](),this['height']=Math[_0x7414f4(0x3c9)](Graphics['height'],this[_0x7414f4(0x514)]);if($gameTemp[_0x7414f4(0x27a)])this[_0x7414f4(0x3e4)]();},Window_Message['prototype'][_0x53b526(0x331)]=function(){return 0x0;},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x336)]=function(){return 0x0;},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x3e4)]=function(){const _0x4112d6=_0x53b526;this['x']=(Graphics['boxWidth']-this[_0x4112d6(0x3dd)])/0x2,$gameTemp['_centerMessageWindow']=undefined,this['clampPlacementPosition']();},Window_Message['prototype'][_0x53b526(0x55c)]=function(){const _0x20e9fa=_0x53b526,_0x32b1c9={'x':this['x'],'y':this['y']};Window_Base[_0x20e9fa(0x3ab)]['updateMove']['call'](this),this[_0x20e9fa(0x4e4)](_0x32b1c9);},Window_Message['prototype'][_0x53b526(0x547)]=function(){return!![];},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x4e4)]=function(_0x11e7fc){const _0x20f645=_0x53b526;this[_0x20f645(0x48b)]&&(this['_nameBoxWindow']['x']+=this['x']-_0x11e7fc['x'],this[_0x20f645(0x48b)]['y']+=this['y']-_0x11e7fc['y']);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x4e7)]=function(_0x32dcb1,_0x343bd7){const _0x5a9b35=_0x53b526;this[_0x5a9b35(0x2a4)](this[_0x5a9b35(0x1b3)]['x'],this[_0x5a9b35(0x3e7)]*(Graphics[_0x5a9b35(0x2be)]-this['height'])/0x2,this[_0x5a9b35(0x1b3)][_0x5a9b35(0x3dd)],this[_0x5a9b35(0x1b3)][_0x5a9b35(0x514)],_0x32dcb1,_0x343bd7);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x2cf)]=function(_0xa5536c){const _0x1e684e=_0x53b526,_0x2824aa=Window_Base[_0x1e684e(0x3ab)][_0x1e684e(0x2cf)][_0x1e684e(0x1dc)](this,_0xa5536c);_0xa5536c[_0x1e684e(0x560)]&&this[_0x1e684e(0x233)](_0x2824aa);},Window_Message[_0x53b526(0x3ab)]['launchMessageCommonEvent']=function(_0xf2e5b2){const _0x4369bf=_0x53b526;if($gameParty[_0x4369bf(0x4de)]()){}else $gameMap['addMessageCommonEvent'](_0xf2e5b2);},Window_Message['prototype'][_0x53b526(0x25b)]=function(_0x12613e){const _0x135935=_0x53b526;this[_0x135935(0x27d)]--,this[_0x135935(0x27d)]<=0x0&&(this[_0x135935(0x29e)](_0x12613e),Window_Base[_0x135935(0x3ab)][_0x135935(0x25b)][_0x135935(0x1dc)](this,_0x12613e));},Window_Message['prototype'][_0x53b526(0x29e)]=function(_0x452826){const _0xf61c51=_0x53b526;this[_0xf61c51(0x27d)]=this[_0xf61c51(0x3ef)];if(this[_0xf61c51(0x3ef)]<=0x0)this['_showFast']=!![];},VisuMZ[_0x53b526(0x469)]['Window_Message_processEscapeCharacter']=Window_Message['prototype'][_0x53b526(0x1fe)],Window_Message[_0x53b526(0x3ab)][_0x53b526(0x1fe)]=function(_0xf0139a,_0x45c3ef){const _0x57fc3a=_0x53b526;!_0x45c3ef['drawing']?Window_Base[_0x57fc3a(0x3ab)][_0x57fc3a(0x1fe)][_0x57fc3a(0x1dc)](this,_0xf0139a,_0x45c3ef):VisuMZ[_0x57fc3a(0x469)][_0x57fc3a(0x3f8)][_0x57fc3a(0x1dc)](this,_0xf0139a,_0x45c3ef);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x297)]=Window_Message[_0x53b526(0x3ab)][_0x53b526(0x429)],Window_Message[_0x53b526(0x3ab)][_0x53b526(0x429)]=function(_0x8a8299){const _0x5136cc=_0x53b526;if(this['_currentAutoSize'])return![];return VisuMZ[_0x5136cc(0x469)]['Window_Message_needsNewPage'][_0x5136cc(0x1dc)](this,_0x8a8299);},Window_Message['prototype'][_0x53b526(0x364)]=function(_0x3efab8){const _0x47b78f=_0x53b526;let _0x582460=_0x3efab8[_0x47b78f(0x390)];this['_forcedPosition']={};if(this[_0x47b78f(0x321)]())return _0x582460;_0x582460=_0x582460['replace'](/<POSITION:[ ]*(.*?)>/gi,(_0x57e9c4,_0xc9dafc)=>{const _0x1392a9=_0x47b78f,_0x21817e=_0xc9dafc['split'](',')['map'](_0x19ac2a=>Number(_0x19ac2a)||0x0);if(_0x21817e[0x0]!==undefined)this[_0x1392a9(0x24c)]['x']=Number(_0x21817e[0x0]);if(_0x21817e[0x1]!==undefined)this[_0x1392a9(0x24c)]['y']=Number(_0x21817e[0x1]);if(_0x21817e[0x2]!==undefined)this[_0x1392a9(0x24c)]['width']=Number(_0x21817e[0x2]);if(_0x21817e[0x3]!==undefined)this[_0x1392a9(0x24c)][_0x1392a9(0x514)]=Number(_0x21817e[0x3]);return'';}),_0x582460=_0x582460[_0x47b78f(0x3e6)](/<COORDINATES:[ ]*(.*?)>/gi,(_0x14beae,_0x257e17)=>{const _0x3cafed=_0x47b78f,_0x34b45a=_0x257e17[_0x3cafed(0x286)](',')[_0x3cafed(0x211)](_0x1a34b7=>Number(_0x1a34b7)||0x0);if(_0x34b45a[0x0]!==undefined)this['_forcedPosition']['x']=Number(_0x34b45a[0x0]);if(_0x34b45a[0x1]!==undefined)this[_0x3cafed(0x24c)]['y']=Number(_0x34b45a[0x1]);return'';}),_0x582460=_0x582460[_0x47b78f(0x3e6)](/<DIMENSIONS:[ ]*(.*?)>/gi,(_0x42a0db,_0x19b87e)=>{const _0x1aa903=_0x47b78f,_0xedfcdf=_0x19b87e[_0x1aa903(0x286)](',')['map'](_0x1153eb=>Number(_0x1153eb)||0x0);if(_0xedfcdf[0x0]!==undefined)this[_0x1aa903(0x24c)][_0x1aa903(0x3dd)]=Number(_0xedfcdf[0x2]);if(_0xedfcdf[0x1]!==undefined)this[_0x1aa903(0x24c)][_0x1aa903(0x514)]=Number(_0xedfcdf[0x3]);return'';}),_0x582460=_0x582460[_0x47b78f(0x3e6)](/<OFFSET:[ ]*(.*?)>/gi,(_0x4543b7,_0x10638e)=>{const _0x105674=_0x47b78f,_0x163e32=_0x10638e[_0x105674(0x286)](',')[_0x105674(0x211)](_0x45d02d=>Number(_0x45d02d)||0x0);let _0x5f0072=_0x163e32[0x0]||0x0,_0x45ce77=_0x163e32[0x1]||0x0;return $gameSystem['setMessageWindowXyOffsets'](_0x5f0072,_0x45ce77),'';}),_0x3efab8[_0x47b78f(0x390)]=_0x582460;},Window_Message['prototype'][_0x53b526(0x41f)]=function(){const _0x34d6fc=$gameSystem['getMessageWindowXyOffsets']();this['x']+=_0x34d6fc['x'],this['y']+=_0x34d6fc['y'];},Window_Message[_0x53b526(0x3ab)]['updateForcedPlacement']=function(){const _0x378dee=_0x53b526;this[_0x378dee(0x24c)]=this[_0x378dee(0x24c)]||{};const _0xb56aaa=['x','y','width',_0x378dee(0x514)];for(const _0x5b3a5f of _0xb56aaa){this[_0x378dee(0x24c)][_0x5b3a5f]!==undefined&&(this[_0x5b3a5f]=Number(this[_0x378dee(0x24c)][_0x5b3a5f]));}},Window_Message['prototype'][_0x53b526(0x52e)]=function(_0x485eba){const _0x4511ae=_0x53b526;this['_currentAutoSize']=![];let _0x34d383=_0x485eba[_0x4511ae(0x390)];_0x34d383=_0x34d383[_0x4511ae(0x3e6)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x4f488a=_0x4511ae;return this[_0x4f488a(0x564)](_0x34d383,!![],!![]),this[_0x4f488a(0x35c)]('none'),'';}),_0x34d383=_0x34d383['replace'](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0x57c65a=_0x4511ae;return this[_0x57c65a(0x564)](_0x34d383,!![],![]),this[_0x57c65a(0x35c)]('none'),'';}),_0x34d383=_0x34d383['replace'](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x3e3723=_0x4511ae;return this[_0x3e3723(0x564)](_0x34d383,![],!![]),this['processAutoPosition'](_0x3e3723(0x590)),'';});if(SceneManager[_0x4511ae(0x407)]())_0x34d383=_0x34d383['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x4efcc8,_0x308dc5)=>{const _0x20c3cc=_0x4511ae;return this[_0x20c3cc(0x564)](_0x34d383,!![],!![]),this[_0x20c3cc(0x35c)](_0x20c3cc(0x551),Number(_0x308dc5)||0x1),'';}),_0x34d383=_0x34d383[_0x4511ae(0x3e6)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x14d26b,_0x32387d)=>{const _0xb41295=_0x4511ae;return this['processAutoSize'](_0x34d383,!![],!![]),this['processAutoPosition'](_0xb41295(0x4c5),Number(_0x32387d)||0x0),'';}),_0x34d383=_0x34d383[_0x4511ae(0x3e6)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x244cc8,_0x1f5681)=>{const _0x42b98d=_0x4511ae;return this[_0x42b98d(0x564)](_0x34d383,!![],!![]),this[_0x42b98d(0x35c)]('battle\x20enemy',Number(_0x1f5681)||0x0),'';});else SceneManager['isSceneMap']()&&(_0x34d383=_0x34d383[_0x4511ae(0x3e6)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x1afd84,_0x5eb72f)=>{const _0x385dbd=_0x4511ae;return this['processAutoSize'](_0x34d383,!![],!![]),this['processAutoPosition'](_0x385dbd(0x468),0x0),'';}),_0x34d383=_0x34d383['replace'](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x3bd0f0,_0x1e5142)=>{const _0x859168=_0x4511ae;return this[_0x859168(0x564)](_0x34d383,!![],!![]),this[_0x859168(0x35c)](_0x859168(0x30b),Number(_0x1e5142)||0x1),'';}),_0x34d383=_0x34d383[_0x4511ae(0x3e6)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0xac965,_0x13617b)=>{const _0x55d330=_0x4511ae;return this[_0x55d330(0x564)](_0x34d383,!![],!![]),this['processAutoPosition'](_0x55d330(0x493),Number(_0x13617b)||0x0),'';}),_0x34d383=_0x34d383[_0x4511ae(0x3e6)](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x2dea2c,_0x3c6382)=>{const _0x494f1a=_0x4511ae;return this['processAutoSize'](_0x34d383,!![],!![]),this[_0x494f1a(0x35c)](_0x494f1a(0x2de),Number(_0x3c6382)||0x0),'';}));_0x485eba[_0x4511ae(0x390)]=_0x34d383;},Window_Message[_0x53b526(0x245)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message['_autoPosRegExp']=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message[_0x53b526(0x3ab)][_0x53b526(0x564)]=function(_0x47a7d5,_0x5d0ddc,_0x590184){const _0x2e3ba2=_0x53b526;_0x47a7d5=_0x47a7d5['replace'](Window_Message['_autoSizeRegexp'],''),_0x47a7d5=_0x47a7d5['replace'](Window_Message[_0x2e3ba2(0x44d)],''),this[_0x2e3ba2(0x52d)]=!![],this[_0x2e3ba2(0x1ea)]=!![],this[_0x2e3ba2(0x584)](![]);const _0x57944f=this['textSizeExRaw'](_0x47a7d5);if(_0x5d0ddc){let _0x30d793=_0x57944f[_0x2e3ba2(0x3dd)]+$gameSystem[_0x2e3ba2(0x597)]()*0x2+0x6;const _0x83a0e5=$gameMessage['faceName']()!=='',_0x3bafc5=ImageManager[_0x2e3ba2(0x437)],_0x46d561=0x14;_0x30d793+=_0x83a0e5?_0x3bafc5+_0x46d561:0x4;if(_0x30d793%0x2!==0x0)_0x30d793+=0x1;$gameSystem['setMessageWindowWidth'](_0x30d793);}if(_0x590184){let _0x13c804=Math['ceil'](_0x57944f[_0x2e3ba2(0x514)]/this[_0x2e3ba2(0x1eb)]());$gameSystem[_0x2e3ba2(0x430)](_0x13c804);}this[_0x2e3ba2(0x3ad)](),this[_0x2e3ba2(0x491)](),this[_0x2e3ba2(0x52d)]=![],this[_0x2e3ba2(0x392)]=!![];},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x3ad)]=function(){const _0x61d4d1=_0x53b526;this[_0x61d4d1(0x22c)](),this['updatePlacement'](),this[_0x61d4d1(0x3e4)](),this[_0x61d4d1(0x519)](),this[_0x61d4d1(0x256)][_0x61d4d1(0x39b)](),this[_0x61d4d1(0x472)]();},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x35c)]=function(_0x2189a0,_0x5ce1b9){const _0x4a8b18=_0x53b526;switch(_0x2189a0[_0x4a8b18(0x29a)]()[_0x4a8b18(0x36a)]()){case _0x4a8b18(0x551):this[_0x4a8b18(0x4cb)]=$gameActors[_0x4a8b18(0x465)](_0x5ce1b9);break;case _0x4a8b18(0x4c5):this[_0x4a8b18(0x4cb)]=$gameParty[_0x4a8b18(0x1b1)]()[_0x5ce1b9-0x1];break;case _0x4a8b18(0x1f1):this[_0x4a8b18(0x4cb)]=$gameTroop[_0x4a8b18(0x1b1)]()[_0x5ce1b9-0x1];break;case _0x4a8b18(0x468):this[_0x4a8b18(0x4cb)]=$gamePlayer;break;case _0x4a8b18(0x30b):const _0x179218=$gameActors[_0x4a8b18(0x465)](_0x5ce1b9)[_0x4a8b18(0x578)]();_0x179218===0x0?this[_0x4a8b18(0x4cb)]=$gamePlayer:this['_autoPositionTarget']=$gamePlayer[_0x4a8b18(0x589)]()[_0x4a8b18(0x39e)](_0x179218-0x1);break;case _0x4a8b18(0x493):_0x5ce1b9===0x1?this['_autoPositionTarget']=$gamePlayer:this[_0x4a8b18(0x4cb)]=$gamePlayer[_0x4a8b18(0x589)]()[_0x4a8b18(0x39e)](_0x5ce1b9-0x2);break;case _0x4a8b18(0x2de):this[_0x4a8b18(0x4cb)]=$gameMap['event'](_0x5ce1b9);break;}this[_0x4a8b18(0x4cb)]&&this['updateAutoPosition']();},VisuMZ[_0x53b526(0x469)][_0x53b526(0x511)]=Window_Message[_0x53b526(0x3ab)][_0x53b526(0x4f7)],Window_Message['prototype']['synchronizeNameBox']=function(){const _0x5b71f3=_0x53b526;this['updateAutoPosition'](),VisuMZ[_0x5b71f3(0x469)][_0x5b71f3(0x511)]['call'](this);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x3a9)]=function(){const _0x5f5e3a=_0x53b526;if(!this[_0x5f5e3a(0x4cb)])return;const _0x2ef2bf=SceneManager[_0x5f5e3a(0x35e)];if(!_0x2ef2bf)return;const _0x212be2=_0x2ef2bf[_0x5f5e3a(0x428)];if(!_0x212be2)return;const _0x48081a=_0x212be2['findTargetSprite'](this['_autoPositionTarget']);if(!_0x48081a)return;let _0x1c9a4c=_0x48081a['x'];if(SceneManager['isSceneMap']())_0x1c9a4c*=$gameScreen['zoomScale']();else{if(SceneManager['isSceneBattle']()&&Imported[_0x5f5e3a(0x2f7)]){let _0x1b921b=_0x48081a['x']-Graphics[_0x5f5e3a(0x530)]*_0x212be2['anchor']['x'];_0x1c9a4c+=_0x1b921b*(_0x212be2[_0x5f5e3a(0x4ee)]['x']-0x1);}}_0x1c9a4c-=this['width']/0x2,_0x1c9a4c-=(Graphics[_0x5f5e3a(0x3dd)]-Graphics[_0x5f5e3a(0x530)])/0x2,_0x1c9a4c+=this[_0x5f5e3a(0x495)]();let _0x4d8352=_0x48081a['y'];if(SceneManager[_0x5f5e3a(0x231)]())_0x4d8352-=_0x48081a[_0x5f5e3a(0x514)]+0x8,_0x4d8352*=$gameScreen[_0x5f5e3a(0x3ec)](),_0x4d8352-=this[_0x5f5e3a(0x514)]*$gameScreen[_0x5f5e3a(0x3ec)]();else{if(SceneManager['isSceneBattle']()&&Imported[_0x5f5e3a(0x2f7)]){let _0x47a38c=_0x48081a[_0x5f5e3a(0x514)]*_0x212be2[_0x5f5e3a(0x4ee)]['y'];_0x4d8352-=this[_0x5f5e3a(0x514)]*_0x212be2[_0x5f5e3a(0x4ee)]['y']+_0x47a38c+0x8;let _0xc47415=_0x48081a['y']-Graphics['boxHeight']*_0x212be2[_0x5f5e3a(0x335)]['y'];_0x4d8352+=_0xc47415*(_0x212be2['scale']['y']-0x1);}else _0x4d8352-=_0x48081a[_0x5f5e3a(0x514)]+0x8,_0x4d8352-=this['height'];}_0x4d8352-=(Graphics[_0x5f5e3a(0x514)]-Graphics['boxHeight'])/0x2,_0x4d8352+=this[_0x5f5e3a(0x249)]();const _0x4aa279=$gameSystem['getMessageWindowXyOffsets']();_0x1c9a4c+=_0x4aa279['x'],_0x4d8352+=_0x4aa279['y'],this['x']=Math[_0x5f5e3a(0x1d3)](_0x1c9a4c),this['y']=Math[_0x5f5e3a(0x1d3)](_0x4d8352),this[_0x5f5e3a(0x4b5)](!![],![]),this['_forcedPosition']=this[_0x5f5e3a(0x24c)]||{},this[_0x5f5e3a(0x24c)]['x']=this['x'],this[_0x5f5e3a(0x24c)]['y']=this['y'],this[_0x5f5e3a(0x24c)]['width']=this[_0x5f5e3a(0x3dd)],this[_0x5f5e3a(0x24c)][_0x5f5e3a(0x514)]=this['height'],this[_0x5f5e3a(0x48b)][_0x5f5e3a(0x528)]();},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x495)]=function(){return 0x0;},Window_Message[_0x53b526(0x3ab)]['autoPositionOffsetY']=function(){return 0x0;},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x1fc)]=function(){const _0x189ebd=_0x53b526;this[_0x189ebd(0x392)]=![],this[_0x189ebd(0x4cb)]=undefined,$gameSystem['initMessageCore'](),this[_0x189ebd(0x3ad)](),this['openness']=0x0;},Window_Message[_0x53b526(0x3ab)]['preConvertEscapeCharacters']=function(_0x39228f){const _0x53f5b2=_0x53b526;return Window_Base[_0x53f5b2(0x3ab)][_0x53f5b2(0x399)][_0x53f5b2(0x1dc)](this,_0x39228f);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x550)]=function(_0x18d8c3){const _0x19fd7d=_0x53b526;return Window_Base[_0x19fd7d(0x3ab)][_0x19fd7d(0x550)][_0x19fd7d(0x1dc)](this,_0x18d8c3);},Window_Message[_0x53b526(0x3ab)]['flushTextState']=function(_0x4e35c6){const _0x376bac=_0x53b526;this[_0x376bac(0x2a8)](_0x4e35c6),Window_Base[_0x376bac(0x3ab)][_0x376bac(0x41e)][_0x376bac(0x1dc)](this,_0x4e35c6),this[_0x376bac(0x3ff)](_0x4e35c6);},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x2a8)]=function(_0x564b1b){},Window_Message[_0x53b526(0x3ab)][_0x53b526(0x3ff)]=function(_0xcb3318){},Window_NameBox[_0x53b526(0x3ab)][_0x53b526(0x361)]=function(){return![];},Window_NameBox['prototype']['resetTextColor']=function(){const _0x25fb38=_0x53b526;Window_Base[_0x25fb38(0x3ab)][_0x25fb38(0x4fd)][_0x25fb38(0x1dc)](this),this[_0x25fb38(0x3b9)](this[_0x25fb38(0x307)]());},Window_NameBox[_0x53b526(0x3ab)][_0x53b526(0x307)]=function(){const _0x1febd5=_0x53b526,_0x5febb4=VisuMZ[_0x1febd5(0x469)][_0x1febd5(0x398)][_0x1febd5(0x425)][_0x1febd5(0x27e)];return ColorManager[_0x1febd5(0x3d9)](_0x5febb4);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x1ce)]=Window_NameBox[_0x53b526(0x3ab)][_0x53b526(0x528)],Window_NameBox[_0x53b526(0x3ab)][_0x53b526(0x528)]=function(){const _0x93ab2f=_0x53b526;VisuMZ[_0x93ab2f(0x469)][_0x93ab2f(0x1ce)][_0x93ab2f(0x1dc)](this),this[_0x93ab2f(0x3f5)](),this[_0x93ab2f(0x31d)](),this[_0x93ab2f(0x4b5)](),this['updateOverlappingY']();},Window_NameBox[_0x53b526(0x3ab)]['preConvertEscapeCharacters']=function(_0x2e734c){const _0x136012=_0x53b526;return _0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<LEFT>/gi,this[_0x136012(0x24b)]['bind'](this,0x0)),_0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<CENTER>/gi,this[_0x136012(0x24b)][_0x136012(0x261)](this,0x5)),_0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<RIGHT>/gi,this[_0x136012(0x24b)][_0x136012(0x261)](this,0xa)),_0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<POSITION:[ ](\d+)>/gi,(_0x289c9f,_0x188633)=>this['setRelativePosition'](parseInt(_0x188633))),_0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<\/LEFT>/gi,''),_0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<\/CENTER>/gi,''),_0x2e734c=_0x2e734c[_0x136012(0x3e6)](/<\/RIGHT>/gi,''),_0x2e734c=_0x2e734c[_0x136012(0x36a)](),Window_Base[_0x136012(0x3ab)]['preConvertEscapeCharacters'][_0x136012(0x1dc)](this,_0x2e734c);},Window_NameBox['prototype'][_0x53b526(0x24b)]=function(_0x4c19f4){const _0x2f1c9f=_0x53b526;return this[_0x2f1c9f(0x50e)]=_0x4c19f4,'';},Window_NameBox['prototype'][_0x53b526(0x3f5)]=function(){const _0x120ff9=_0x53b526;if($gameMessage[_0x120ff9(0x3e1)]())return;this[_0x120ff9(0x50e)]=this['_relativePosition']||0x0;const _0x55bdf0=this[_0x120ff9(0x497)],_0x360f30=Math['floor'](_0x55bdf0[_0x120ff9(0x3dd)]*this[_0x120ff9(0x50e)]/0xa);this['x']=_0x55bdf0['x']+_0x360f30-Math[_0x120ff9(0x538)](this[_0x120ff9(0x3dd)]/0x2),this['x']=this['x'][_0x120ff9(0x300)](_0x55bdf0['x'],_0x55bdf0['x']+_0x55bdf0[_0x120ff9(0x3dd)]-this['width']);},Window_NameBox[_0x53b526(0x3ab)]['updateOffsetPosition']=function(){const _0x422b29=_0x53b526;if($gameMessage[_0x422b29(0x3e1)]())return;this[_0x422b29(0x50e)]=this[_0x422b29(0x50e)]||0x0;const _0x3fa6ad=VisuMZ[_0x422b29(0x469)][_0x422b29(0x398)][_0x422b29(0x425)][_0x422b29(0x2d9)],_0x372c0d=VisuMZ['MessageCore'][_0x422b29(0x398)]['General']['NameBoxWindowOffsetY'],_0x46e063=(0x5-this[_0x422b29(0x50e)])/0x5;this['x']+=Math['floor'](_0x3fa6ad*_0x46e063),this['y']+=_0x372c0d;},Window_NameBox['prototype'][_0x53b526(0x37d)]=function(){const _0x1fe3ef=_0x53b526,_0x32ac7c=this['_messageWindow'],_0x36faaf=_0x32ac7c['y'],_0x2b5ad4=VisuMZ['MessageCore'][_0x1fe3ef(0x398)][_0x1fe3ef(0x425)][_0x1fe3ef(0x219)];_0x36faaf>this['y']&&_0x36faaf<this['y']+this['height']-_0x2b5ad4&&(this['y']=_0x32ac7c['y']+_0x32ac7c[_0x1fe3ef(0x514)]);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x508)]=Window_NameBox[_0x53b526(0x3ab)][_0x53b526(0x520)],Window_NameBox[_0x53b526(0x3ab)][_0x53b526(0x520)]=function(){const _0x50bb9f=_0x53b526;this['_relativePosition']=0x0,VisuMZ[_0x50bb9f(0x469)][_0x50bb9f(0x508)][_0x50bb9f(0x1dc)](this);},Window_ChoiceList[_0x53b526(0x3ab)]['isWordWrapEnabled']=function(){return![];},Window_ChoiceList['prototype'][_0x53b526(0x361)]=function(){return!![];},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x532)]=function(){return $gameSystem['getChoiceListLineHeight']()+0x8;},Window_ChoiceList['prototype'][_0x53b526(0x433)]=function(){const _0x188643=_0x53b526;return $gameSystem[_0x188643(0x27f)]();},Window_ChoiceList['prototype'][_0x53b526(0x591)]=function(){const _0x5b4f73=_0x53b526;this['refresh'](),this['selectDefault'](),this[_0x5b4f73(0x55a)](),this['activate'](),this[_0x5b4f73(0x1ad)]();},Window_ChoiceList['prototype']['callOkHandler']=function(){const _0x5089be=_0x53b526;$gameMessage[_0x5089be(0x4fe)](this[_0x5089be(0x406)]()),this[_0x5089be(0x497)][_0x5089be(0x449)](),this[_0x5089be(0x53c)](),this[_0x5089be(0x1f3)]&&(this[_0x5089be(0x1f3)][_0x5089be(0x39b)](),this[_0x5089be(0x1f3)][_0x5089be(0x37b)]());},VisuMZ[_0x53b526(0x469)]['Window_ChoiceList_callCancelHandler']=Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x2e0)],Window_ChoiceList[_0x53b526(0x3ab)]['callCancelHandler']=function(){const _0x18c534=_0x53b526;VisuMZ[_0x18c534(0x469)]['Window_ChoiceList_callCancelHandler']['call'](this),this[_0x18c534(0x1f3)]&&(this[_0x18c534(0x1f3)][_0x18c534(0x39b)](),this['_helpWindow'][_0x18c534(0x37b)]());},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x520)]=function(){const _0x4b8de8=_0x53b526;this[_0x4b8de8(0x4a9)](),this[_0x4b8de8(0x2d7)](),this['_messageWindow']&&(this[_0x4b8de8(0x528)](),this[_0x4b8de8(0x20f)]()),this[_0x4b8de8(0x472)](),this[_0x4b8de8(0x464)](),this[_0x4b8de8(0x2fd)](),Window_Selectable[_0x4b8de8(0x3ab)][_0x4b8de8(0x520)][_0x4b8de8(0x1dc)](this);},Window_ChoiceList[_0x53b526(0x3ab)]['makeCommandList']=function(){const _0x221a3f=_0x53b526;$gameMessage['_scriptCall']?this[_0x221a3f(0x21d)]():this['makeCommandListShuffle'](),this[_0x221a3f(0x536)](),this[_0x221a3f(0x2b2)]();},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x21d)]=function(){const _0x265270=_0x53b526,_0x58bdc8=$gameMessage['choices']();let _0x26eefe=0x0;for(let _0x2b3093 of _0x58bdc8){_0x2b3093=this[_0x265270(0x2f2)](_0x2b3093);if(this[_0x265270(0x4ac)](_0x2b3093)){const _0x1e7768=this[_0x265270(0x476)](_0x2b3093),_0x423406=this[_0x265270(0x42b)](_0x2b3093);this[_0x265270(0x46a)](_0x1e7768,_0x265270(0x281),_0x423406,_0x26eefe);}_0x26eefe++;}},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x225)]=function(){const _0x5b0d50=_0x53b526,_0x2b81b5=$gameMessage[_0x5b0d50(0x291)](),_0x23e7b0=$gameMessage[_0x5b0d50(0x1ee)](),_0xcce9da=$gameMessage[_0x5b0d50(0x55d)](),_0x46559d=_0x2b81b5[_0x5b0d50(0x4f2)];let _0x1dcaf7=0x0;for(let _0x49123a=0x0;_0x49123a<_0x46559d;_0x49123a++){if(this['_list'][_0x5b0d50(0x4f2)]>=_0xcce9da)break;const _0x4a9b60=_0x23e7b0[_0x49123a];let _0x258fc9=_0x2b81b5[_0x4a9b60];if(_0x258fc9===undefined)continue;_0x258fc9=this[_0x5b0d50(0x2f2)](_0x258fc9);if(this[_0x5b0d50(0x4ac)](_0x258fc9)){const _0xc707cd=this[_0x5b0d50(0x476)](_0x258fc9),_0x4ab5e5=this['isChoiceEnabled'](_0x258fc9);this[_0x5b0d50(0x46a)](_0xc707cd,_0x5b0d50(0x281),_0x4ab5e5,_0x4a9b60);}_0x1dcaf7++;}},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x2f2)]=function(_0x1fa5ba){const _0x4aa72c=_0x53b526;return Window_Base['prototype']['convertTextMacros'][_0x4aa72c(0x1dc)](this,_0x1fa5ba);},Window_ChoiceList['prototype'][_0x53b526(0x4ac)]=function(_0x2ea469){const _0xa3816e=_0x53b526;if(Imported[_0xa3816e(0x3da)])$gameMessage[_0xa3816e(0x42d)]();if(_0x2ea469[_0xa3816e(0x34e)](/<HIDE>/i))return![];if(_0x2ea469[_0xa3816e(0x34e)](/<SHOW>/i))return!![];if(_0x2ea469[_0xa3816e(0x34e)](/<SHOW[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x7520ef=RegExp['$1'][_0xa3816e(0x286)](',')[_0xa3816e(0x211)](_0x3d9666=>Number(_0x3d9666)||0x0);if(_0x7520ef[_0xa3816e(0x311)](_0x49c019=>!$gameSwitches[_0xa3816e(0x290)](_0x49c019)))return![];}if(_0x2ea469['match'](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x8e219d=RegExp['$1'][_0xa3816e(0x286)](',')['map'](_0x58161b=>Number(_0x58161b)||0x0);if(_0x8e219d[_0xa3816e(0x1b0)](_0x4ba4f4=>!$gameSwitches[_0xa3816e(0x290)](_0x4ba4f4)))return![];}if(_0x2ea469[_0xa3816e(0x34e)](/<HIDE[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x1902ef=RegExp['$1'][_0xa3816e(0x286)](',')[_0xa3816e(0x211)](_0x245a44=>Number(_0x245a44)||0x0);if(_0x1902ef[_0xa3816e(0x1b0)](_0x1ced57=>$gameSwitches[_0xa3816e(0x290)](_0x1ced57)))return![];}if(_0x2ea469['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x14ab09=RegExp['$1'][_0xa3816e(0x286)](',')[_0xa3816e(0x211)](_0x16cc54=>Number(_0x16cc54)||0x0);if(_0x14ab09[_0xa3816e(0x311)](_0x4b306e=>$gameSwitches[_0xa3816e(0x290)](_0x4b306e)))return![];}return!![];},Window_ChoiceList[_0x53b526(0x3ab)]['parseChoiceText']=function(_0x599e3b){const _0x17d82f=_0x53b526;let _0x921141=_0x599e3b;return _0x921141=_0x921141[_0x17d82f(0x3e6)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x921141=_0x921141[_0x17d82f(0x3e6)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x921141;},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x42b)]=function(_0x537bbc){const _0x64706f=_0x53b526;if(Imported['VisuMZ_1_EventsMoveCore'])$gameMessage[_0x64706f(0x42d)]();if(_0x537bbc['match'](/<DISABLE>/i))return![];if(_0x537bbc[_0x64706f(0x34e)](/<ENABLE>/i))return!![];if(_0x537bbc['match'](/<ENABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x3d75a8=RegExp['$1'][_0x64706f(0x286)](',')['map'](_0x17e2c4=>Number(_0x17e2c4)||0x0);if(_0x3d75a8['some'](_0x48b899=>!$gameSwitches['value'](_0x48b899)))return![];}if(_0x537bbc[_0x64706f(0x34e)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x26f1ed=RegExp['$1'][_0x64706f(0x286)](',')[_0x64706f(0x211)](_0x12c5d7=>Number(_0x12c5d7)||0x0);if(_0x26f1ed[_0x64706f(0x1b0)](_0x11f00b=>!$gameSwitches[_0x64706f(0x290)](_0x11f00b)))return![];}if(_0x537bbc[_0x64706f(0x34e)](/<DISABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x378b1b=RegExp['$1'][_0x64706f(0x286)](',')[_0x64706f(0x211)](_0x1f329b=>Number(_0x1f329b)||0x0);if(_0x378b1b[_0x64706f(0x1b0)](_0x2309e0=>$gameSwitches['value'](_0x2309e0)))return![];}if(_0x537bbc[_0x64706f(0x34e)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x536a3b=RegExp['$1'][_0x64706f(0x286)](',')['map'](_0x37271f=>Number(_0x37271f)||0x0);if(_0x536a3b[_0x64706f(0x311)](_0x3d2111=>$gameSwitches[_0x64706f(0x290)](_0x3d2111)))return![];}return!![];},Window_ChoiceList[_0x53b526(0x3ab)]['clearChoiceHelpDescriptions']=function(){const _0xbaba51=_0x53b526;this['_choiceHelpDescriptions']={},this['_helpWindow']&&(this[_0xbaba51(0x1f3)][_0xbaba51(0x39b)](),this[_0xbaba51(0x1f3)][_0xbaba51(0x37b)]());},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x2b2)]=function(){const _0x1ab800=_0x53b526,_0x4be571=/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;for(const _0x1ca2f of this[_0x1ab800(0x41a)]){if(!_0x1ca2f)continue;const _0x5c7b34=this[_0x1ab800(0x41a)]['indexOf'](_0x1ca2f);if(_0x1ca2f[_0x1ab800(0x4a3)][_0x1ab800(0x34e)](_0x4be571)){const _0x2ac8ce=String(RegExp['$1']);this[_0x1ab800(0x58a)][_0x5c7b34]=_0x2ac8ce[_0x1ab800(0x36a)](),_0x1ca2f[_0x1ab800(0x4a3)]=_0x1ca2f[_0x1ab800(0x4a3)][_0x1ab800(0x3e6)](_0x4be571,'')[_0x1ab800(0x36a)]();}else this['_choiceHelpDescriptions'][_0x5c7b34]='';}},Window_ChoiceList['prototype'][_0x53b526(0x1ad)]=function(){const _0x22f423=_0x53b526;if(this[_0x22f423(0x41a)]['some'](_0x4f9352=>_0x4f9352['enabled']))return;this[_0x22f423(0x58b)](),this[_0x22f423(0x53c)](),$gameMessage[_0x22f423(0x20a)]=[],this[_0x22f423(0x497)][_0x22f423(0x304)]()&&this[_0x22f423(0x497)][_0x22f423(0x52a)]();},VisuMZ['MessageCore']['Window_ChoiceList_updatePlacement']=Window_ChoiceList[_0x53b526(0x3ab)]['updatePlacement'],Window_ChoiceList[_0x53b526(0x3ab)]['updatePlacement']=function(){const _0x471207=_0x53b526;VisuMZ['MessageCore']['Window_ChoiceList_updatePlacement'][_0x471207(0x1dc)](this),this[_0x471207(0x492)](),this[_0x471207(0x4b5)]();},Window_ChoiceList[_0x53b526(0x3ab)]['placeCancelButton']=function(){const _0x11c524=_0x53b526;if(!this[_0x11c524(0x22e)])return;const _0x524920=0x8,_0x481889=this['_cancelButton'],_0xe44062=this['x']+this[_0x11c524(0x3dd)],_0x2f1f10=Math[_0x11c524(0x538)]((Graphics[_0x11c524(0x3dd)]-Graphics[_0x11c524(0x530)])/0x2);_0xe44062>=Graphics[_0x11c524(0x530)]+_0x2f1f10-_0x481889[_0x11c524(0x3dd)]+_0x524920?_0x481889['x']=-_0x481889[_0x11c524(0x3dd)]-_0x524920:_0x481889['x']=this[_0x11c524(0x3dd)]+_0x524920,_0x481889['y']=this[_0x11c524(0x514)]/0x2-_0x481889[_0x11c524(0x514)]/0x2;},VisuMZ[_0x53b526(0x469)][_0x53b526(0x29c)]=Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x33a)],Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x33a)]=function(){const _0x51a7ab=_0x53b526;return this[_0x51a7ab(0x497)]?this[_0x51a7ab(0x282)]():VisuMZ[_0x51a7ab(0x469)]['Window_ChoiceList_windowX'][_0x51a7ab(0x1dc)](this);},Window_ChoiceList['prototype']['messageCoreWindowX']=function(){const _0x1e81d9=_0x53b526,_0x5a29e0=$gameMessage['choicePositionType']();if(_0x5a29e0===0x1)return(Graphics['boxWidth']-this[_0x1e81d9(0x240)]())/0x2;else return _0x5a29e0===0x2?this[_0x1e81d9(0x497)]['x']+this[_0x1e81d9(0x497)][_0x1e81d9(0x3dd)]-this[_0x1e81d9(0x240)]():this[_0x1e81d9(0x497)]['x'];},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x240)]=function(){const _0x4a6382=_0x53b526,_0x35f90b=(this[_0x4a6382(0x242)]()+this[_0x4a6382(0x569)]())*this[_0x4a6382(0x433)]()+this[_0x4a6382(0x1c8)]*0x2;return Math[_0x4a6382(0x3c9)](_0x35f90b,Graphics['width']);},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x277)]=function(){const _0x1c7103=_0x53b526,_0x168006=$gameMessage[_0x1c7103(0x291)]()[_0x1c7103(0x211)](_0x4dfc34=>this['convertChoiceMacros'](_0x4dfc34))[_0x1c7103(0x42a)](_0x342d8d=>this[_0x1c7103(0x4ac)](_0x342d8d));let _0x43b9d0=Math['ceil'](_0x168006[_0x1c7103(0x4f2)]/this[_0x1c7103(0x433)]());if(!$gameMessage[_0x1c7103(0x2b6)]){const _0x59d810=$gameMessage[_0x1c7103(0x55d)]();_0x43b9d0=Math[_0x1c7103(0x3d1)](Math[_0x1c7103(0x3c9)](_0x59d810,_0x168006['length'])/this[_0x1c7103(0x433)]());}return Math[_0x1c7103(0x592)](0x1,Math[_0x1c7103(0x3c9)](_0x43b9d0,this[_0x1c7103(0x561)]()));},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x561)]=function(){const _0x30ef63=_0x53b526,_0x2689fe=this['_messageWindow'],_0x55eac1=_0x2689fe?_0x2689fe['y']:0x0,_0x54203f=_0x2689fe?_0x2689fe['height']:0x0,_0x4765f2=Graphics[_0x30ef63(0x2be)]/0x2;return _0x55eac1<_0x4765f2&&_0x55eac1+_0x54203f>_0x4765f2?0x4:$gameSystem['getChoiceListMaxRows']();},Window_ChoiceList['prototype']['maxChoiceWidth']=function(){const _0x240b33=_0x53b526;let _0x72140b=this[_0x240b33(0x4dc)]();for(const _0x419167 of this[_0x240b33(0x41a)]){const _0x35cdea=_0x419167['name'],_0xe7bda0=this['getChoiceIndent'](_0x35cdea),_0x307686=this[_0x240b33(0x4f4)](_0x35cdea)[_0x240b33(0x3dd)]+_0xe7bda0,_0x2348d8=Math[_0x240b33(0x3d1)](_0x307686)+this[_0x240b33(0x258)]()*0x2;_0x72140b=Math[_0x240b33(0x592)](_0x72140b,_0x2348d8);}return _0x72140b;},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x4dc)]=function(){const _0x314c65=_0x53b526;let _0x3a68b7=$gameSystem[_0x314c65(0x3cb)]();const _0x1cfb16=$gameMessage[_0x314c65(0x291)]();for(const _0x4f9797 of _0x1cfb16){_0x4f9797['match'](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x3a68b7=Math['max'](_0x3a68b7,Number(RegExp['$1'])));}return Math[_0x314c65(0x592)](_0x3a68b7,0x1);},Window_ChoiceList['prototype']['addChoiceDistance']=function(){const _0x821a70=_0x53b526,_0x4b7ed1=$gameSystem[_0x821a70(0x28a)]()||0x0,_0x39ff65=this['_messageWindow']['y'],_0x2263b0=this[_0x821a70(0x497)][_0x821a70(0x514)],_0x59e252=this['_messageWindow'][_0x821a70(0x48b)],_0x48a511=_0x59e252[_0x821a70(0x3ee)]>0x0&&_0x59e252[_0x821a70(0x3dd)]>0x0,_0xcea0f7=_0x48a511?_0x59e252[_0x821a70(0x514)]:0x0;if(_0x4b7ed1<0x0&&(this[_0x821a70(0x497)][_0x821a70(0x445)]()||this[_0x821a70(0x497)][_0x821a70(0x566)]()))this['y']=Math['round']((Graphics['boxHeight']-this['height'])/0x2);else{if(_0x39ff65>=Graphics['boxHeight']/0x2)_0x4b7ed1>=0x0?this['y']-=_0x4b7ed1:this['y']=Math['floor']((_0x39ff65-this[_0x821a70(0x514)]-_0xcea0f7)/0x2);else{if(_0x4b7ed1>=0x0)this['y']+=_0x4b7ed1;else{const _0x5063b6=Graphics[_0x821a70(0x2be)]-(_0x39ff65+_0x2263b0+_0xcea0f7);this['y']+=Math[_0x821a70(0x538)]((_0x5063b6-this[_0x821a70(0x514)])/0x2)+_0xcea0f7;}}}},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x24f)]=function(_0x29a0e9){const _0xa96ca4=_0x53b526,_0x21b01a=this[_0xa96ca4(0x366)](_0x29a0e9);if(_0x21b01a){const _0x387749=ImageManager['loadPicture'](_0x21b01a),_0x2b48db=this['choiceAlignText'](),_0x56bddc=_0x2b48db+this[_0xa96ca4(0x3d7)](_0x29a0e9),_0x18f7ad=this[_0xa96ca4(0x39f)](_0x29a0e9);_0x387749['addLoadListener'](this[_0xa96ca4(0x209)][_0xa96ca4(0x261)](this,_0x29a0e9,!![],_0x56bddc,_0x18f7ad,_0x387749));return;}this['drawItemContents'](_0x29a0e9);},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x51c)]=function(_0x5b20f){const _0x4f1673=_0x53b526,_0x3c1843=this[_0x4f1673(0x39f)](_0x5b20f),_0x3c355a=this[_0x4f1673(0x4b1)](),_0xcddcc2=_0x3c355a+this[_0x4f1673(0x3d7)](_0x5b20f);this[_0x4f1673(0x3c7)](this[_0x4f1673(0x36e)](_0x5b20f));const _0x13611c=this[_0x4f1673(0x4f4)](_0xcddcc2)['height'],_0x4ef157=_0x3c1843['x']+this['getChoiceIndent'](_0xcddcc2),_0x4a7eba=Math[_0x4f1673(0x592)](_0x3c1843['y'],_0x3c1843['y']+Math[_0x4f1673(0x1d3)]((_0x3c1843[_0x4f1673(0x514)]-_0x13611c)/0x2));this[_0x4f1673(0x557)](_0xcddcc2,_0x4ef157,_0x4a7eba,_0x3c1843[_0x4f1673(0x3dd)]),this['changeChoiceBackgroundColor'](_0x5b20f),this[_0x4f1673(0x24e)](_0x5b20f,_0xcddcc2,_0x3c1843);},Window_ChoiceList['prototype']['choiceAlignText']=function(){const _0x17d5ba=_0x53b526;return $gameSystem[_0x17d5ba(0x3bb)]()!==_0x17d5ba(0x38b)?_0x17d5ba(0x505)[_0x17d5ba(0x2c3)]($gameSystem[_0x17d5ba(0x3bb)]()):'';},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x403)]=function(_0x57ae54){const _0x21092d=_0x53b526;let _0x248f34=0x0;return _0x57ae54[_0x21092d(0x34e)](/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)&&(_0x248f34=Number(RegExp['$1'])),_0x248f34;},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x3c6)]=function(_0x73ca52){const _0xf66827=_0x53b526;if(!Imported[_0xf66827(0x31c)])return;const _0x1713bd=this[_0xf66827(0x3d7)](_0x73ca52);let _0xc7ae06=![],_0x3bd68f=![],_0x4e3530=ColorManager['itemBackColor1'](),_0x748b08=ColorManager[_0xf66827(0x34c)]();if(_0x1713bd[_0xf66827(0x34e)](/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi))_0x4e3530=ColorManager['getColor'](RegExp['$1'])[_0xf66827(0x36a)](),_0x748b08=ColorManager[_0xf66827(0x222)](RegExp['$2'])[_0xf66827(0x36a)](),_0xc7ae06=!![];else{if(_0x1713bd['match'](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)){let _0x5d3b86=String(RegExp['$1'])[_0xf66827(0x29a)]()[_0xf66827(0x36a)]();switch(_0x5d3b86){case'red':_0x4e3530=_0x748b08='#f26c4f',_0x3bd68f=!![];break;case'orange':_0x4e3530=_0x748b08='#fbaf5d',_0x3bd68f=!![];break;case _0xf66827(0x26f):_0x4e3530=_0x748b08=_0xf66827(0x380),_0x3bd68f=!![];break;case _0xf66827(0x4d2):_0x4e3530=_0x748b08=_0xf66827(0x31f),_0x3bd68f=!![];break;case'blue':_0x4e3530=_0x748b08=_0xf66827(0x57f),_0x3bd68f=!![];break;case _0xf66827(0x2c8):case _0xf66827(0x326):_0x4e3530=_0x748b08=_0xf66827(0x4b8),_0x3bd68f=!![];break;case _0xf66827(0x52f):_0x4e3530=_0x748b08=_0xf66827(0x1ba),_0x3bd68f=!![];break;case _0xf66827(0x1c5):_0x4e3530=_0x748b08=_0xf66827(0x408),_0x3bd68f=!![];break;case _0xf66827(0x340):_0x4e3530=_0x748b08=_0xf66827(0x323),_0x3bd68f=!![];break;case _0xf66827(0x315):case'grey':_0x4e3530=_0x748b08=_0xf66827(0x423),_0x3bd68f=!![];break;case'black':_0x4e3530=_0x748b08=_0xf66827(0x50d),_0x3bd68f=!![];break;case'yes':_0x4e3530=_0x748b08=ColorManager[_0xf66827(0x4d4)](),_0x3bd68f=!![];break;case'no':_0x4e3530=_0x748b08=ColorManager['powerDownColor'](),_0x3bd68f=!![];break;case _0xf66827(0x4aa):_0x4e3530=_0x748b08=ColorManager['systemColor'](),_0x3bd68f=!![];break;case _0xf66827(0x1b2):_0x4e3530=_0x748b08=ColorManager[_0xf66827(0x276)](),_0x3bd68f=!![];break;default:_0x4e3530=_0x748b08=ColorManager[_0xf66827(0x222)](_0x5d3b86),_0x3bd68f=!![];break;}_0xc7ae06=!![];}}if(!_0xc7ae06)return;const _0x310847=this[_0xf66827(0x2c4)](_0x73ca52);this[_0xf66827(0x40e)][_0xf66827(0x25a)](_0x310847['x'],_0x310847['y'],_0x310847['width'],_0x310847['height']),this[_0xf66827(0x239)](_0x310847,_0x4e3530,_0x748b08,_0x3bd68f);},Window_ChoiceList['prototype']['drawCustomBackgroundColor']=function(_0x687c3,_0x48dbe4,_0x240e59,_0x292fea){const _0x4c3188=_0x53b526,_0x890d63=ColorManager['itemBackColor1'](),_0x360486=ColorManager[_0x4c3188(0x28c)](),_0x5e96ff=_0x48dbe4??ColorManager[_0x4c3188(0x3a2)](),_0x4799df=_0x240e59??_0x48dbe4,_0x576933=_0x687c3['x'],_0x484abe=_0x687c3['y'],_0x4f292d=_0x687c3['width'],_0xe94d90=_0x687c3[_0x4c3188(0x514)];this[_0x4c3188(0x40e)]['gradientFillRect'](_0x576933,_0x484abe,_0x4f292d,_0xe94d90,_0x5e96ff,_0x4799df,!![]),_0x292fea&&this[_0x4c3188(0x40e)][_0x4c3188(0x3e0)](_0x576933,_0x484abe,_0x4f292d,_0xe94d90,_0x890d63,_0x4799df,!![]),this[_0x4c3188(0x40e)][_0x4c3188(0x2b8)](_0x576933,_0x484abe,_0x4f292d,_0xe94d90,_0x890d63);},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x366)]=function(_0x46b020){const _0x4953da=_0x53b526,_0x28f920=this[_0x4953da(0x4b1)](),_0x286a57=_0x28f920+this[_0x4953da(0x3d7)](_0x46b020);let _0x40f36f='';if(_0x286a57[_0x4953da(0x34e)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x40f36f=String(RegExp['$1'])[_0x4953da(0x36a)]();else _0x286a57[_0x4953da(0x34e)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x40f36f=String(RegExp['$2'])[_0x4953da(0x36a)]());return _0x40f36f;},Window_ChoiceList['prototype']['requestChoiceBackgroundImage']=function(_0x4c6bc2,_0x583f93,_0x4eaa69){const _0x599fe6=_0x53b526;let _0x2cd0e5='';if(_0x583f93[_0x599fe6(0x34e)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x2cd0e5=String(RegExp['$1'])[_0x599fe6(0x36a)]();else _0x583f93[_0x599fe6(0x34e)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x2cd0e5=String(RegExp['$2'])[_0x599fe6(0x36a)]());if(_0x2cd0e5){const _0x39a643=ImageManager[_0x599fe6(0x486)](_0x2cd0e5);_0x39a643[_0x599fe6(0x393)](this[_0x599fe6(0x209)]['bind'](this,_0x4c6bc2,![],_0x583f93,_0x4eaa69,_0x39a643));}},Window_ChoiceList[_0x53b526(0x3ab)][_0x53b526(0x209)]=function(_0x398e71,_0x270fe1,_0x332442,_0x139116,_0x3f74b6){const _0x531c4a=_0x53b526,_0x11338b=this[_0x531c4a(0x4b1)](),_0x37a75d=_0x11338b+this['commandName'](_0x398e71);if(_0x332442!==_0x37a75d)return;const _0x4c9ded=this[_0x531c4a(0x39f)](_0x398e71);if(['x','y','width',_0x531c4a(0x514)][_0x531c4a(0x311)](_0x43d50f=>_0x4c9ded[_0x43d50f]!==_0x139116[_0x43d50f]))return;let _0x262134=0x0,_0x3e8f8a='';if(_0x270fe1&&_0x37a75d[_0x531c4a(0x34e)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)){}else{if(_0x270fe1&&_0x37a75d['match'](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i))_0x3e8f8a=String(RegExp['$1'])[_0x531c4a(0x29a)]()[_0x531c4a(0x36a)]();else!_0x270fe1&&_0x37a75d[_0x531c4a(0x34e)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x3e8f8a=String(RegExp['$1'])[_0x531c4a(0x29a)]()[_0x531c4a(0x36a)]());}switch(_0x3e8f8a){case _0x531c4a(0x477):case'lower-left':case _0x531c4a(0x596):case _0x531c4a(0x480):case _0x531c4a(0x20e):case'down\x20left':case'1':_0x262134=0x1;break;case _0x531c4a(0x42e):case'lower-center':case'lower\x20center':case _0x531c4a(0x44c):case'down-center':case _0x531c4a(0x23e):case'down':case'2':_0x262134=0x2;break;case _0x531c4a(0x339):case'lower-right':case _0x531c4a(0x4b7):case'downright':case'down-right':case'down\x20right':case'3':_0x262134=0x3;break;case _0x531c4a(0x343):case _0x531c4a(0x201):case'left':case'4':_0x262134=0x4;break;case'midcenter':case _0x531c4a(0x571):case _0x531c4a(0x293):case'centered':case'5':_0x262134=0x5;break;case _0x531c4a(0x1d4):case _0x531c4a(0x2ee):case _0x531c4a(0x2a9):case'6':_0x262134=0x6;break;case'upperleft':case _0x531c4a(0x1fb):case _0x531c4a(0x3bd):case _0x531c4a(0x567):case _0x531c4a(0x47e):case _0x531c4a(0x3fd):case'7':_0x262134=0x7;break;case _0x531c4a(0x218):case _0x531c4a(0x563):case _0x531c4a(0x381):case _0x531c4a(0x57b):case'up-center':case _0x531c4a(0x443):case'up':case'8':_0x262134=0x8;break;case'upperright':case'upper-right':case _0x531c4a(0x55f):case _0x531c4a(0x479):case _0x531c4a(0x236):case _0x531c4a(0x43e):case'9':_0x262134=0x9;break;}const _0x685dcb=_0x270fe1?this[_0x531c4a(0x256)]:this[_0x531c4a(0x40e)],_0x2c41f4=this[_0x531c4a(0x2c4)](_0x398e71);!_0x270fe1&&_0x685dcb[_0x531c4a(0x25a)](_0x2c41f4['x']-0x1,_0x2c41f4['y']-0x1,_0x2c41f4['width']+0x2,_0x2c41f4[_0x531c4a(0x514)]+0x2);const _0x7984f9=_0x2c41f4['x']+0x2,_0x318005=_0x2c41f4['y']+0x2,_0x1961b8=_0x2c41f4[_0x531c4a(0x3dd)]-0x4,_0x187e05=_0x2c41f4['height']-0x4,_0x46ee09=_0x3f74b6[_0x531c4a(0x3dd)],_0x2c3f45=_0x3f74b6[_0x531c4a(0x514)];let _0x277b48=_0x7984f9,_0x54339a=_0x318005,_0x2858ca=_0x1961b8,_0x1032e8=_0x187e05;const _0x2e9186=_0x1961b8/_0x46ee09,_0x9f8c99=_0x187e05/_0x2c3f45;let _0x130241=Math[_0x531c4a(0x3c9)](_0x2e9186,_0x9f8c99);if(_0x270fe1)_0x130241=Math[_0x531c4a(0x3c9)](_0x130241,0x1);_0x262134!==0x0&&(_0x2858ca=Math[_0x531c4a(0x1d3)](_0x46ee09*_0x130241),_0x1032e8=Math['round'](_0x2c3f45*_0x130241));switch(_0x262134){case 0x1:case 0x4:case 0x7:_0x277b48=_0x7984f9;break;case 0x2:case 0x5:case 0x8:_0x277b48+=Math[_0x531c4a(0x1d3)]((_0x1961b8-_0x2858ca)/0x2);break;case 0x3:case 0x6:case 0x9:_0x277b48+=_0x1961b8-_0x2858ca;break;}switch(_0x262134){case 0x7:case 0x8:case 0x9:_0x54339a=_0x318005;break;case 0x4:case 0x5:case 0x6:_0x54339a+=Math['round']((_0x187e05-_0x1032e8)/0x2);break;case 0x1:case 0x2:case 0x3:_0x54339a+=_0x187e05-_0x1032e8;break;}_0x685dcb[_0x531c4a(0x4f3)](_0x3f74b6,0x0,0x0,_0x46ee09,_0x2c3f45,_0x277b48,_0x54339a,_0x2858ca,_0x1032e8),_0x270fe1&&this[_0x531c4a(0x51c)](_0x398e71);},Window_ChoiceList['prototype'][_0x53b526(0x3bc)]=function(){const _0x26bca2=_0x53b526;this[_0x26bca2(0x1f3)][_0x26bca2(0x39b)]();if(!this['_choiceHelpDescriptions'])return;const _0x35c85e=this['index']();this[_0x26bca2(0x58a)][_0x35c85e]?(this['_helpWindow']['setText'](this[_0x26bca2(0x58a)][_0x35c85e]),this[_0x26bca2(0x1f3)][_0x26bca2(0x30a)]()):(this[_0x26bca2(0x1f3)][_0x26bca2(0x39b)](),this[_0x26bca2(0x1f3)][_0x26bca2(0x37b)]());},Window_EventItem[_0x53b526(0x3ab)][_0x53b526(0x26e)]=function(){const _0x91ec98=_0x53b526,_0x2b6dc1=$gameMessage['itemChoiceItypeId']();_0x2b6dc1==='skill'&&Imported[_0x91ec98(0x298)]?this[_0x91ec98(0x28e)]():Window_ItemList['prototype'][_0x91ec98(0x26e)][_0x91ec98(0x1dc)](this);},Window_EventItem[_0x53b526(0x3ab)][_0x53b526(0x28e)]=function(){const _0x4c1701=_0x53b526,_0x46c508=$gameMessage[_0x4c1701(0x246)]();this['_data']=_0x46c508?_0x46c508[_0x4c1701(0x3b7)]()[_0x4c1701(0x42a)](_0x44de07=>this['includes'](_0x44de07)):[],this[_0x4c1701(0x441)](null)&&this['_data']['push'](null);},VisuMZ[_0x53b526(0x469)][_0x53b526(0x3dc)]=Window_EventItem[_0x53b526(0x3ab)][_0x53b526(0x441)],Window_EventItem[_0x53b526(0x3ab)][_0x53b526(0x441)]=function(_0x526aa3){const _0x3216f3=_0x53b526,_0x10a33e=$gameMessage[_0x3216f3(0x4bd)]();if(_0x10a33e==='weapon'){if(!DataManager[_0x3216f3(0x3a7)](_0x526aa3))return![];const _0x34d4bf=$gameMessage[_0x3216f3(0x2f3)]();if(_0x34d4bf>0x0){if(_0x526aa3[_0x3216f3(0x47f)]!==_0x34d4bf)return![];}return!![];}else{if(_0x10a33e===_0x3216f3(0x4df)){if(!DataManager[_0x3216f3(0x414)](_0x526aa3))return![];const _0x3f67f5=$gameMessage[_0x3216f3(0x3fb)]();if(_0x3f67f5>0x0){if(_0x526aa3[_0x3216f3(0x22d)]!==_0x3f67f5)return![];}const _0x4b4d0c=$gameMessage[_0x3216f3(0x574)]();if(_0x4b4d0c>0x0){if(_0x526aa3[_0x3216f3(0x1dd)]!==_0x4b4d0c)return![];}return!![];}else{if(_0x10a33e===_0x3216f3(0x1e6)){if(!DataManager[_0x3216f3(0x200)](_0x526aa3))return![];const _0x1bd34a=$gameMessage[_0x3216f3(0x246)]();if(_0x1bd34a[_0x3216f3(0x54c)](_0x526aa3))return![];if(!_0x1bd34a[_0x3216f3(0x2e5)](_0x526aa3))return![];const _0x262db9=$gameMessage['itemChoiceStypeId']();if(_0x262db9>0x0){const _0x542100=DataManager[_0x3216f3(0x265)](_0x526aa3);if(!_0x542100[_0x3216f3(0x441)](_0x262db9))return![];}return!![];}else return VisuMZ[_0x3216f3(0x469)]['Window_EventItem_includes'][_0x3216f3(0x1dc)](this,_0x526aa3);}}},VisuMZ[_0x53b526(0x469)][_0x53b526(0x54a)]=Window_ItemList[_0x53b526(0x3ab)][_0x53b526(0x1df)],Window_ItemList[_0x53b526(0x3ab)][_0x53b526(0x1df)]=function(_0x30f67a,_0x17c4ed,_0x4659bf,_0x5a6132){const _0x1b120c=_0x53b526,_0x4723b2=$gameMessage['itemChoiceItypeId']();if(_0x4723b2==='skill'){const _0x518bef=$gameMessage[_0x1b120c(0x246)]();this[_0x1b120c(0x4c0)](_0x518bef,_0x30f67a,_0x17c4ed,_0x4659bf,_0x5a6132);}else VisuMZ[_0x1b120c(0x469)][_0x1b120c(0x54a)][_0x1b120c(0x1dc)](this,_0x30f67a,_0x17c4ed,_0x4659bf,_0x5a6132);},Window_MapName['prototype'][_0x53b526(0x4ce)]=function(){const _0x3f1f99=_0x53b526;this[_0x3f1f99(0x256)][_0x3f1f99(0x39b)]();let _0x34d087=$gameMap[_0x3f1f99(0x45d)]();if(_0x34d087){const _0x22f07e=this[_0x3f1f99(0x369)];this['drawBackground'](0x0,0x0,_0x22f07e,this[_0x3f1f99(0x1eb)]()),_0x34d087=this[_0x3f1f99(0x48a)](_0x34d087);const _0x230844=this[_0x3f1f99(0x4f4)](_0x34d087)['width'];this[_0x3f1f99(0x557)](_0x34d087,Math[_0x3f1f99(0x538)]((_0x22f07e-_0x230844)/0x2),0x0);}},Window_MapName['prototype'][_0x53b526(0x48a)]=function(_0x392144){const _0x46380d=_0x53b526;if(_0x392144[_0x46380d(0x34e)](/<LEFT>/gi))this['x']=0x0;else{if(_0x392144['match'](/<CENTER>/gi))this['x']=Math[_0x46380d(0x538)]((Graphics['boxWidth']-this['width'])/0x2);else _0x392144['match'](/<RIGHT>/gi)&&(this['x']=Graphics[_0x46380d(0x530)]-this[_0x46380d(0x3dd)]);}_0x392144=_0x392144[_0x46380d(0x3e6)](/<(?:LEFT|CENTER|RIGHT)>/gi,''),_0x392144=_0x392144[_0x46380d(0x3e6)](/<\/(?:LEFT|CENTER|RIGHT)>/gi,'');if(_0x392144[_0x46380d(0x34e)](/<TOP>/gi))this['y']=0x0;else{if(_0x392144[_0x46380d(0x34e)](/<MIDDLE>/gi))this['y']=Math[_0x46380d(0x538)]((Graphics['boxHeight']-this[_0x46380d(0x514)])/0x2);else _0x392144[_0x46380d(0x34e)](/<BOTTOM>/gi)&&(this['y']=Graphics[_0x46380d(0x2be)]-this[_0x46380d(0x514)]);}return _0x392144=_0x392144[_0x46380d(0x3e6)](/<(?:TOP|MIDDLE|BOTTOM)>/gi,''),_0x392144=_0x392144[_0x46380d(0x3e6)](/<\/(?:TOP|MIDDLE|BOTTOM)>/gi,''),_0x392144[_0x46380d(0x34e)](/<X:[ ]([\+\-]\d+)>/gi)&&(this['x']+=Number(RegExp['$1']),_0x392144=_0x392144['replace'](/<X:[ ]([\+\-]\d+)>/gi,'')),_0x392144[_0x46380d(0x34e)](/<Y:[ ]([\+\-]\d+)>/gi)&&(this['y']+=Number(RegExp['$1']),_0x392144=_0x392144[_0x46380d(0x3e6)](/<Y:[ ]([\+\-]\d+)>/gi,'')),_0x392144;};