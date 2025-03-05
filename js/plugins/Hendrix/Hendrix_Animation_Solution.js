/*:
 * @target MZ
 * @plugindesc A new animation system that supports both separate image files and spritesheets. It also makes it easy for events and players to perform actions!
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io/
 * 
 * @help
 * Verion 1.2.3
 * ----------------------------------------------------------------------------
 * This plugin for RPG Maker MZ offers a complete solution for displaying animations. 
 * Whether using a spritesheet or separate files, it provides flexibility and comes 
 * packed with a variety of animation-related features. Additionally, it allows users 
 * to make characters perform actions seamlessly.
 * ----------------------------------------------------------------------------
 * FEATURES
 * - Display animations to your game with just a few clicks, using either separate files or spritesheets
 * - Make characters do custom actions/animation with just one script call
 * - Extend character spritesheet from 3 frames (RPG maker default) to any amount
 * - Control everything about your animations - FPS, loops, position, scale, rotation, 
 *   random effects, colors, blend modes, layers, bloom effects, and more
 * - Auto walk/Idle animation support for the player
 * - Preload all files for maximum performance
 * - An awesome dev who will support you 24/7
 * - An awesome dev to support you 24/7
 * ----------------------------------------------------------------------------
 * CHANGELOG
 * [ver 1.2.2] - Adjustment: toFrame and playFrames will now start the first
 *               frame as index 1 instead of 0. This is to make it more friendly to use.
 *             - Adjustment: Instead of this.toFrame and this.playFrames, you can
 *               now just simple call toFrame and playFrames (without this.).
 * [ver 1.2.0] - New feature: Preload files and keep them in memory forever
 *             - New feature: Check cache memory
 *             - New adjustment: If Hendrix RPG Maker Action Combat is on then
 *               the custom animation will auto rotate along with rotating events.
 * [ver 1.1.1] - New feature: Origin - Set origin/anchor of your animation
 *             - New adjustment: Z Index now support "auto", which it uses its event
 *               z-index. "auto" is also now set as default instead of 8.
 * [ver 1.1.0] - New feature: Support for idle/walk for player
 * [ver 1.0.6] - New feature: Play custom animation in reversed 
 *               (the option is inside visual setting)
 * [ver 1.0.5] - New Adjustment: this.playFrames now can play in reverse!
 *             - Bug fix: this.playFrames now should stick at last frame after finished playing
 * [ver 1.0.4] - New Feature: An option to display animations in nearest mode,
 *             it's best for pixel art
 *             - Bug fixes: Stick Mode now takes account of offset
 *             - Bug fixes: Making this.toFrame(x) feature to work more smoothly
 * [ver 1.0.2] Added a plugin command to erase an on-going animation on an event.
 * [ver 1.0.1] Fixed a bug where, when using an 8-spritesheet setup (4 characters),
 * rapidly changing the character's direction would cause the walking animation to stop.
 * ----------------------------------------------------------------------------
 * MOVEMENT ROUTE SCRIPT CALL
 * -> toFrame(x)
 * Set the character image to frame index x (start from 1)
 * 
 * -> playFrames(first frame index, last frame index, speed)
 * Example: playFrames(1, 6, 3)
 * This play 6 frames. Each frame wait 3 frames (speed frame)
 * The lower the speed, the faster the animation
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * Use plugin command Show Animation to play animation.
 * For seperate files animation method, put your files inside pictures/frames folder.
 * Create the folder if you don't have it.
 * 
 * To play character animation, you'll need:
 * 1. A spritesheet with keyword fx in filename. x is the amount of frame.
 * Example: $player_attack_f8. Meaning this animation will have 8 frames.
 * 2. Set Movement Route, change graphic to $player_attack_f8
 * 3. Use the script call above playFrames(1, 8, 3)
 * ----------------------------------------------------------------------------
 * PRELOAD
 * Console command to see cache size in case you use preload feature:
 * PermanentImageCache.logDetailedCacheStatus();
 * 
 * The larger the dimmension of the file, the higher mb it costs.
 * This cache will never be cleared to guarenteed a smooth gameplay
 * and fixed blinking issue when you change characters' images with
 * the cost of memory. On PC, most machine has above 8GB RAM, but on
 * mobiles it's still not common so pay attention to it.
 * 
 * To summarize, put important stuff to subfolders and preload those
 * subfolders (best use for mobile optimization).
 * 
 * ----------------------------------------------------------------------------
 * For feedback or feature request, please dm me on X or Facebook:
 * https://x.com/sanghendrix96
 * Discord: Sang Hendrix #3505
 * 
 * @param -----------s--s---s-------
 * @text -----------------------
 * @default ---------------------
 * 
 * @param PRELOAD
 * 
 * @param -------------s--s--------
 * @text -----------------------
 * @default ---------------------
 * 
 * @param Enable Preload
 * @text Enable Preload System
 * @desc Preload images. Improve performance and fix blinking issues when changing sprites (RPG Maker problem).
 * @type boolean
 * @default true
 * 
 * @param Preload Folders
 * @text Image Preload Settings
 * @type struct<PreloadFolderList>
 * @desc Folders to preload. Only support preloading characters and pictures folder.
 * @default {"folders":"[\"img/pictures/Animation\",\"img/pictures/frames\",\"img/characters\"]"}
 * 
 * @param -----------s--s----------
 * @text -----------------------
 * @default ---------------------
 * 
 * @param BASIC SETTINGS
 * 
 * @param -------------s----------
 * @text -----------------------
 * @default ---------------------
 * 
 * @param Frame Speed
 * @text Frame Speed Modifier
 * @default 1.1
 * @desc For files with extended frames (filename_fx). The higher the number, the quicker the character frames play. Leave 1.1 if confused.
 * 
 * @param Nearest
 * @text Render Animation in Nearest
 * @desc True is best for pixel art, False is rendered for other type of arts
 * @type boolean
 * @default true
 * 
 * @param -----------------------
 * @text -----------------------
 * @default ---------------------
 * 
 * @param IDLE/MOVE GRAPHIC
 * 
 * @param -----------------z------
 * @text -----------------------
 * @default ---------------------
 * 
 * @param Enable Switch
 * @desc If the switch is on, disable this feature
 * @type switch
 * 
 * @param Idle Character
 * @text Idle Graphic
 * @desc The filename of the character graphic used when the player is not moving.
 * @type file
 * @dir img/characters
 * 
 * @param Moving Character
 * @text Moving Graphic
 * @desc The filename of the character graphic used when the player is moving.
 * @type file
 * @dir img/characters
 * 
 * 
 * @command showAnimatedPicture
 * @text Show Animation
 * @desc Displays an animation on an event or the player.
 * 
 * @arg note
 * @text Note
 * @desc Does nothing. It's just a note incase you need it
 * @type string
 * @default 
 * 
 * @arg fps
 * @text FPS
 * @desc Speed of the animation in frames per second.
 * @type number
 * @min 1
 * @default 60
 * 
 * @arg loopCount
 * @text Loop Count
 * @desc Number of times the animation should loop. Default is 1 (play once and animation).
 * @type number
 * @min 1
 * @default 1
 * 
 * @arg -----------------
 * @text ------------------
 * @type string
 * @default ------------------
 * 
 * @arg animationSettings
 * @text Use Seperated Frames
 * @type struct<AnimationSettings>
 * @desc Display animation using seperate frame files. Leave empty if use Spritesheet.
 * @default
 * 
 * @arg spritesheetSettings
 * @text Use Spritesheet
 * @type struct<SpritesheetSettings>
 * @desc Display animation using a spritesheet files. Leave empty if use Seperated Frames.
 * @default
 * 
 * @arg ------------------
 * @text ------------------
 * @type string
 * @default ------------------
 * 
 * @arg positionSettings
 * @text Position Settings
 * @type struct<PositionSettings>
 * @desc Settings for positioning the animation on events.
 * @default
 * 
 * @arg visualSettings
 * @text Visual Settings
 * @type struct<VisualSettings>
 * @desc Visual properties like scale, opacity, and blend mode.
 * @default
 * 
 * @arg transformSettings
 * @text Transform Settings
 * @type struct<FlipSettings>
 * @desc Settings for randomize property like rotating, mirror.
 * @default
 * 
 * @arg bloomSettings
 * @text Bloom Settings
 * @type struct<BloomSettings>
 * @desc Settings for the bloom post-processing effect.
 * @default
 * 
 * @arg soundSettings
 * @text Sound Settings
 * @type struct<SoundSettings>
 * @desc Settings for frame-specific sound effects. Most of the time you won't use this.
 * @default
 * 
 * @command removeAnimation
 * @text Remove Animation
 * @desc Removes all animations from a specific event or character.
 * 
 * @arg eventId
 * @text Event ID
 * @desc The event ID to remove animations from. Use  this  for current event. Use  player  for game player.
 * @type string
 * @default this
 * 
 * @arg notetag
 * @text Note
 * @desc If specified, only removes animations with this note. Leave empty to remove all animations.
 * @type string
 * @default
 */
/*~struct~AnimationSettings:
* @param baseFilename
* @text Base Filename
* @desc The base filename of the frames (e.g., 'Windy_').
* @type string
*
* @param frameCount
* @text Frame Count
* @desc The amount of frames (e.g., if 40 then the plugin will understand there are files Windy_1, Windy_2,... Windy_40).
* @type number
* @min 1
* @default 1
*/
/*~struct~SpritesheetSettings:
 * @param spritesheetFile
 * @text Spritesheet File
 * @desc Select spritesheet file
 * @type file
 * @dir img/pictures/
 * @default 
 *
 * @param row
 * @text Number of Rows
 * @desc Number of rows in spritesheet.
 * @type number
 * @min 1
 * @default 1
 *
 * @param column
 * @text Number of Columns
 * @desc Number of columns in spritesheet. 
 * @type number
 * @min 1
 * @default 1
 */

/*~struct~PositionSettings:
 * @param eventId
 * @text Event to Display
 * @desc The event ID to show the animation picture on. Special case: player = player, 0 = current event.
 * @type string
 * @default 0
 *
 * @param offsetX
 * @text Offset X
 * @desc Horizontal offset for the animation relative to the target's position.
 * @type number
 * @default 0
 * @min -9999
 *
 * @param offsetY
 * @text Offset Y
 * @desc Vertical offset for the animation relative to the target's position.
 * @type number
 * @default 0
 * @min -9999
 *
 * @param zIndex
 * @text Z-Index Layer
 * @desc 0-3: Below characters. 4-8: above characters. 9: above everything. Use  auto  to use event's z-index.
 * @type string
 * @default auto
 * 
 * @param origin
 * @text Origin Point
 * @desc Sets the origin point of the animation.
 * @type select
 * @option Center
 * @value center
 * @option Top Middle
 * @value top
 * @option Bottom Center
 * @value bottom
 * @default center
 * 
 * @param stickMode
 * @text Stick Mode
 * @desc If true, animation will stay fixed at initial position instead of following the target.
 * @type boolean
 * @default false
 */

/*~struct~VisualSettings:
 * @param scalePercent
 * @text Scale Percentage
 * @desc Scale of the animation in percentage.
 * @type number
 * @default 100
 * @min 0
 * @max 999
 *
 * @param opacity
 * @text Opacity
 * @desc Opacity of the animation (0-255).
 * @type number
 * @default 255
 * @min 0
 * @max 255
 *
 * @param hue
 * @text Hue
 * @desc Hue adjustment for the animation (-180 to 180).
 * @type number
 * @min -180
 * @max 180
 * @default 0
 *
 * @param blendMode
 * @text Blend Mode
 * @desc Blend mode for the animation.
 * @type select
 * @option Normal
 * @value Normal
 * @option Screen
 * @value Screen
 * @option Add
 * @value Add
 * @option Multiply
 * @value Multiply
 * @default Normal
 * 
 * @param playInReverse
 * @text Play in Reverse
 * @desc If true, the animation will play backwards from end to start.
 * @type boolean
 * @default false
 */

/*~struct~FlipSettings:
 * @param flip
 * @text Flip X
 * @desc If true, the animation will be mirrored horizontally.
 * @type boolean
 * @default false
 *
 * @param flipY
 * @text Flip Y
 * @desc If true, the animation will be mirrored vertically.
 * @type boolean
 * @default false
 *
 * @param randomFlipX
 * @text Random Flip X
 * @desc If true, the animation will be randomly mirrored horizontally.
 * @type boolean
 * @default false
 *
 * @param randomFlipY
 * @text Random Flip Y
 * @desc If true, the animation will be randomly mirrored vertically.
 * @type boolean
 * @default false
 * 
 * @param rotation
 * @text Rotation
 * @desc Rotation of the animation in degrees.
 * @type number
 * @default 0
 * 
 * @param randomRotation
 * @text Random Rotation
 * @desc If true, applies a random rotation to the animation.
 * @type boolean
 * @default false
 */

/*~struct~BloomSettings:
 * @param bloomEffect
 * @text Bloom Effect
 * @desc Apply a bloom effect to the animation.
 * @type boolean
 * @default false
 *
 * @param blurAmount
 * @text Blur Amount
 * @desc Amount of blur. Control how far the blur spread.
 * @type number
 * @min 1
 * @default 15
 * 
 * @param intensity
 * @text Intensity
 * @desc Intensity of the bloom effect.
 * @type number
 * @min 0
 * @default 255
 *
 * @param tintColor
 * @text Tint Color
 * @desc Tint color (hex code). Leave default if don't know what to do.
 * @type text
 * @default #FFFFFF
 */

/*~struct~SoundSettings:
 * @param sfxSettings
 * @text SFX Settings
 * @type struct<SFXSetting>[]
 * @desc Settings for playing sound effects at specific frames.
 * @default []
 */
/*~struct~SFXSetting:
 * @param frame
 * @text Frame Number
 * @type number
 * @desc The frame number at which the sound effect will play.
 * @default 1
 * @min 1
 *
 * @param sfxFile
 * @text SFX File
 * @type file
 * @dir audio/se
 * @desc The sound effect file to play.
 *
 * @param volume
 * @text Volume
 * @type number
 * @desc Volume of the sound effect (0-100).
 * @default 90
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect (50-150).
 * @default 100
 * @min 50
 * @max 150
 */
/*~struct~PreloadFolderList:
 * @param folders
 * @text Folders to Preload
 * @type string[]
 * @desc e.g. img/characters or img/pictures or img/pictures/frames (must have if use Show Animation seperate files method)
 * @default []
 */

var Imported = Imported || {};
Imported.Hendrix_Animation_Solution = true;

(function () {
    const pluginName = "Hendrix_Animation_Solution";
    const parameters = PluginManager.parameters(pluginName);
    const SPEED = parameters["Frame Speed"] || 1.1;
    const isNearest = parameters["Nearest"] === 'true';
    const enableSwitch = Number(parameters['Enable Switch']);
    const movingCharacter = String(parameters['Moving Character']);
    const idleCharacter = String(parameters['Idle Character']);
    const enablePreload = parameters["Enable Preload"] === 'true';
    const preloadSettings = parameters['Preload Folders'] ? JSON.parse(parameters['Preload Folders']) : { folders: [] };
    let preloadFolders = [];
    let sharedBloomFilter = null;
    let sharedHueFilter = null;

    const BLEND_MODES = {
        "Screen": PIXI.BLEND_MODES.SCREEN,
        "Add": PIXI.BLEND_MODES.ADD,
        "Multiply": PIXI.BLEND_MODES.MULTIPLY,
        "Normal": PIXI.BLEND_MODES.NORMAL
    };

    try {
        preloadFolders = JSON.parse(preloadSettings.folders || '[]');
    } catch (e) {
        console.error('Error parsing preload folders:', e);
        preloadFolders = [];
    }

    class PermanentImageCache {
        static _permanentCache = {};
        static _preloadedPaths = new Set();
        static _loadingStatus = {
            total: 0,
            loaded: 0,
            failed: 0
        };

        static load(folder, filename) {
            if (!filename) {
                return ImageManager._emptyBitmap;
            }

            filename = filename.replace(/\\/g, '/'); // Convert Windows backslashes to forward slashes
            const url = this._makePath(folder, filename);

            if (!enablePreload) {
                return ImageManager.loadBitmap(folder, filename);
            }

            if (!this._permanentCache[url]) {
                this._loadingStatus.total++;
                const bitmap = Bitmap.load(url);

                bitmap.addLoadListener(() => {
                    if (bitmap.isError()) {
                        this._loadingStatus.failed++;
                        //if (Utils.isOptionValid('test')) {
                        //    console.warn(`Failed to load image: ${url}`);
                        //}
                        // Remove from cache if failed
                        delete this._permanentCache[url];
                        this._preloadedPaths.delete(url);
                    } else {
                        this._loadingStatus.loaded++;
                        //if (Utils.isOptionValid('test')) {
                        //    console.log(`Loaded image: ${url}`);
                        //}
                    }
                    this._updateLoadingProgress();
                });

                //if (Utils.isOptionValid('test')) {
                //    console.log(`Adding to cache: ${url}`);
                //}

                this._permanentCache[url] = bitmap;
                this._preloadedPaths.add(url);
            } else {
                //if (Utils.isOptionValid('test')) {
                //    console.log(`Serving from cache: ${url}`);
                //}
            }

            return this._permanentCache[url];
        }

        static _makePath(folder, filename) {
            return folder + Utils.encodeURI(filename) + ".png";
        }

        static isPreloaded(folder, filename) {
            const url = this._makePath(folder, filename);
            return this._preloadedPaths.has(url);
        }

        static _updateLoadingProgress() {
            const total = this._loadingStatus.total;
            const loaded = this._loadingStatus.loaded;
            const failed = this._loadingStatus.failed;
            const progress = ((loaded + failed) / total * 100).toFixed(1);

            if (Utils.isOptionValid('test')) {
                console.log(`Preload progress: ${progress}% (${loaded} loaded, ${failed} failed, ${total} total)`);
            }

            // If all images are processed, log final status
            if (loaded + failed === total) {
                console.log(`Preload complete! Successfully loaded ${loaded}/${total} images.`);
                if (failed > 0) {
                    console.warn(`Failed to load ${failed} images.`);
                }
            }
        }

        static getLoadingStatus() {
            return { ...this._loadingStatus };
        }

        static cleanInvalidImages() {
            for (const url in this._permanentCache) {
                const bitmap = this._permanentCache[url];
                if (bitmap.isError()) {
                    delete this._permanentCache[url];
                    this._preloadedPaths.delete(url);
                    console.warn(`Removed invalid image from permanent cache: ${url}`);
                }
            }
        }

        static getDetailedCacheInfo() {
            const details = {
                totalMemoryMB: 0,
                files: [],
                summary: {
                    totalFiles: 0,
                    bySize: {
                        huge: { count: 0, size: 0 },    // > 16MB
                        large: { count: 0, size: 0 },   // 4-16MB
                        medium: { count: 0, size: 0 },  // 1-4MB
                        small: { count: 0, size: 0 }    // < 1MB
                    }
                }
            };

            for (const url in this._permanentCache) {
                const bitmap = this._permanentCache[url];
                if (bitmap && bitmap.baseTexture) {
                    const width = bitmap.width;
                    const height = bitmap.height;
                    const memoryMB = (width * height * 4) / (1024 * 1024);

                    details.totalMemoryMB += memoryMB;

                    const fileInfo = {
                        url: url,
                        dimensions: `${width}x${height}`,
                        memoryMB: memoryMB.toFixed(2)
                    };
                    details.files.push(fileInfo);

                    // Categorize by size
                    if (memoryMB > 16) {
                        details.summary.bySize.huge.count++;
                        details.summary.bySize.huge.size += memoryMB;
                    } else if (memoryMB > 4) {
                        details.summary.bySize.large.count++;
                        details.summary.bySize.large.size += memoryMB;
                    } else if (memoryMB > 1) {
                        details.summary.bySize.medium.count++;
                        details.summary.bySize.medium.size += memoryMB;
                    } else {
                        details.summary.bySize.small.count++;
                        details.summary.bySize.small.size += memoryMB;
                    }
                }
            }

            details.summary.totalFiles = details.files.length;

            // Sort files by memory usage
            details.files.sort((a, b) => parseFloat(b.memoryMB) - parseFloat(a.memoryMB));

            return details;
        }

        static logDetailedCacheStatus() {
            const details = this.getDetailedCacheInfo();
            console.log(`=== Cache Analysis ===`);
            console.log(`Total Memory Usage: ${details.totalMemoryMB.toFixed(2)} MB`);
            console.log(`Total Files: ${details.summary.totalFiles}`);

            console.log('\n=== Size Categories ===');
            console.log('Huge (>16MB):',
                `${details.summary.bySize.huge.count} files, ` +
                `${details.summary.bySize.huge.size.toFixed(2)} MB`);
            console.log('Large (4-16MB):',
                `${details.summary.bySize.large.count} files, ` +
                `${details.summary.bySize.large.size.toFixed(2)} MB`);
            console.log('Medium (1-4MB):',
                `${details.summary.bySize.medium.count} files, ` +
                `${details.summary.bySize.medium.size.toFixed(2)} MB`);
            console.log('Small (<1MB):',
                `${details.summary.bySize.small.count} files, ` +
                `${details.summary.bySize.small.size.toFixed(2)} MB`);

            console.log('\n=== Top 10 Largest Files ===');
            details.files.slice(0, 10).forEach(file => {
                console.log(`${file.url}: ${file.dimensions} - ${file.memoryMB} MB`);
            });
        }
    }

    class ImagePreloader {
        static async generateManifest() {
            if (!Utils.isNwjs()) {
                console.warn("Manifest can't be generated on mobile. It'll load the generated file from Windows tho.");
                return;
            }

            const fs = require('fs');
            const path = require('path');
            const manifest = {};

            const getAllFiles = (dirPath, arrayOfFiles = []) => {
                const files = fs.readdirSync(dirPath);

                files.forEach(file => {
                    const fullPath = path.join(dirPath, file);
                    if (fs.statSync(fullPath).isDirectory()) {
                        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
                    } else {
                        // Only add image files
                        if (file.toLowerCase().match(/\.(png|jpg|webp)$/)) {
                            // Store relative path from the base folder
                            const relativePath = path.relative(process.cwd(), fullPath);
                            arrayOfFiles.push(relativePath);
                        }
                    }
                });

                return arrayOfFiles;
            };

            // Generate for each preload folder
            for (const folderPath of preloadFolders) {
                const basePath = path.join(process.cwd(), folderPath);

                try {
                    if (!fs.existsSync(basePath)) {
                        console.warn(`Folder not found: ${basePath}`);
                        continue;
                    }

                    // Get all files including those in subfolders
                    const files = getAllFiles(basePath);
                    manifest[folderPath] = files.map(file => {
                        // Remove the base folder path and file extension
                        const relativePath = path.relative(folderPath, file);
                        return relativePath.replace(/\.[^/.]+$/, "");
                    });
                } catch (error) {
                    console.error(`Error processing folder ${folderPath}:`, error);
                }
            }

            // Save manifest
            try {
                const manifestPath = path.join(process.cwd(), 'manifest.json');
                fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
                console.log("Manifest generated successfully at: " + manifestPath);
            } catch (error) {
                console.error("Error saving manifest:", error);
            }
        }

        static async preloadFolder(folderPath) {
            if (Utils.isNwjs()) {
                const fs = require('fs');
                const path = require('path');
                const base = path.join(process.cwd(), folderPath);

                const getAllFiles = (dirPath, arrayOfFiles = []) => {
                    const files = fs.readdirSync(dirPath);

                    files.forEach(file => {
                        const fullPath = path.join(dirPath, file);
                        if (fs.statSync(fullPath).isDirectory()) {
                            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
                        } else {
                            if (file.toLowerCase().match(/\.(png|jpg|webp)$/)) {
                                arrayOfFiles.push(path.relative(base, fullPath));
                            }
                        }
                    });

                    return arrayOfFiles;
                };

                try {
                    if (!fs.existsSync(base)) {
                        console.warn(`Folder not found: ${base}`);
                        return;
                    }

                    const files = getAllFiles(base);
                    for (const file of files) {
                        const filename = file.replace(/\.[^/.]+$/, ""); // Remove extension
                        if (!PermanentImageCache.isPreloaded(folderPath + '/', filename)) {
                            PermanentImageCache.load(folderPath + '/', filename);
                        }
                    }
                } catch (error) {
                    console.error(`Error preloading folder ${folderPath}:`, error);
                }
            } else {
                try {
                    const response = await fetch('manifest.json');
                    const manifest = await response.json();

                    const folderFiles = manifest[folderPath] || [];

                    for (const filename of folderFiles) {
                        if (!PermanentImageCache.isPreloaded(folderPath + '/', filename)) {
                            PermanentImageCache.load(folderPath + '/', filename);
                        }
                    }
                } catch (error) {
                    console.error(`Error loading manifest or preloading files:`, error);
                }
            }
        }

        static preloadAllConfiguredFolders() {
            for (const folder of preloadFolders) {
                this.preloadFolder(folder);
            }
        }
    }

    // Override ImageManager methods
    const _ImageManager_loadPicture = ImageManager.loadPicture;
    ImageManager.loadPicture = function (filename) {
        if (enablePreload) {
            const folder = filename.split('/')[0];
            if (preloadFolders.includes(folder)) {
                return PermanentImageCache.load('img/pictures/', filename);
            }
        }
        return _ImageManager_loadPicture.call(this, filename);
    };

    // Basically just override ImageManager loadPicture and Character. Preload from other folder doesn't do anything.
    const _ImageManager_loadCharacter = ImageManager.loadCharacter;
    ImageManager.loadCharacter = function (filename) {
        if (enablePreload && preloadFolders.includes('img/characters')) {
            return PermanentImageCache.load('img/characters/', filename);
        }
        return _ImageManager_loadCharacter.call(this, filename);
    };

    const _Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
    Scene_Boot.prototype.loadSystemImages = function () {
        _Scene_Boot_loadSystemImages.call(this);
        if (enablePreload) {
            ImagePreloader.preloadAllConfiguredFolders();
            ImagePreloader.generateManifest();
            if (Utils.isOptionValid('test')) {
                console.log('Starting image preload...');
            }
        }
    };

    const _Scene_Boot_isReady = Scene_Boot.prototype.isReady;
    Scene_Boot.prototype.isReady = function () {
        // Make sure preloaded images are ready
        if (enablePreload) {
            // Check preload statu
            const status = PermanentImageCache.getLoadingStatus();
            if (status.total > 0 && status.loaded + status.failed < status.total) {
                return false;
            }
        }
        return _Scene_Boot_isReady.call(this);
    };

    PluginManager.registerCommand(pluginName, "showAnimatedPicture", function (args) {
        const animation = JSON.parse(args.animationSettings || '{"baseFilename":"","frameCount":1}');
        const spritesheet = JSON.parse(args.spritesheetSettings || '{"spritesheetFile":"","row":1,"column":1}');
        const position = JSON.parse(args.positionSettings || '{"eventId":"0","offsetX":0,"offsetY":0,"zIndex":8,"origin":"center","stickMode":false}');
        const visual = JSON.parse(args.visualSettings || '{"scalePercent":100,"opacity":255,"hue":0,"blendMode":"Normal","playInReverse":false}');
        const transform = JSON.parse(args.transformSettings || '{"flip":false,"flipY":false,"randomFlipX":false,"randomFlipY":false,"rotation":0,"randomRotation":false}');
        const bloom = JSON.parse(args.bloomSettings || '{"bloomEffect":false,"blurAmount":15,"intensity":255,"tintColor":"#FFFFFF"}');
        const sound = JSON.parse(args.soundSettings || '{"sfxSettings":[]}');

        const note = args.note || '';

        let frames = [];
        let bitmap = null;

        // Handle animation frames
        if (enablePreload) {
            if (!spritesheet.spritesheetFile) {
                const baseFilename = String(animation.baseFilename);
                const frameCount = Number(animation.frameCount);
                for (let i = 1; i <= frameCount; i++) {
                    frames.push(PermanentImageCache.load('img/pictures/', `frames/${baseFilename}${i}`));
                }
            } else {
                bitmap = PermanentImageCache.load('img/pictures/', spritesheet.spritesheetFile);
            }
        } else {
            if (!spritesheet.spritesheetFile) {
                const baseFilename = String(animation.baseFilename);
                const frameCount = Number(animation.frameCount);
                for (let i = 1; i <= frameCount; i++) {
                    frames.push(ImageManager.loadPicture(`frames/${baseFilename}${i}`));
                }
            } else {
                bitmap = ImageManager.loadPicture(spritesheet.spritesheetFile);
            }
        }

        // Handle event targeting
        let eventId = position.eventId;
        let targets = [];
        if (eventId === '0') {
            eventId = this.eventId();
            targets.push($gameMap.event(eventId));
        } else if (eventId.toLowerCase() === 'player') {
            eventId = 'player';
            targets.push($gamePlayer);
        } else {
            eventId = Number(eventId);
            if (!$gameMap.event(eventId)) {
                return;
            }
            targets.push($gameMap.event(eventId));
        }

        let zIndex = position.zIndex;
        if (zIndex === 'auto' && targets.length > 0) {
            // Get the z-index from the target event/player
            const target = targets[0];
            if (target instanceof Game_Event || target instanceof Game_Player) {
                zIndex = target.screenZ();
            } else {
                zIndex = 3; // Fallback just incase it acts up
            }
        } else {
            zIndex = Number(position.zIndex);
        }

        const commonParams = {
            fps: Number(args.fps || 60),
            loopCount: Number(args.loopCount || 1),
            offsetX: Number(position.offsetX),
            offsetY: Number(position.offsetY),
            stickMode: String(position.stickMode) === 'true',
            scalePercent: Number(visual.scalePercent),
            opacity: Number(visual.opacity),
            flip: String(transform.flip) === 'true',
            flipY: String(transform.flipY) === 'true',
            randomFlipX: String(transform.randomFlipX) === 'true',
            randomFlipY: String(transform.randomFlipY) === 'true',
            rotation: transform.randomRotation === 'true' ? Math.random() * 360 : Number(transform.rotation),
            blendMode: BLEND_MODES[visual.blendMode] || PIXI.BLEND_MODES.NORMAL,
            zIndex: zIndex,
            bloomEffect: String(bloom.bloomEffect) === 'true',
            blurAmount: Number(bloom.blurAmount),
            tintColor: bloom.tintColor,
            intensity: Number(bloom.intensity),
            hue: Number(visual.hue),
            playInReverse: String(visual.playInReverse) === 'true',
            sfxSettings: Array.isArray(sound.sfxSettings) ? sound.sfxSettings : [],
            origin: position.origin || "center"
        };

        const handleAnimation = (frames) => {
            targets.forEach(target => {
                const animatedPicture = new AnimatedPicture(
                    frames, commonParams.fps, target, commonParams.loopCount,
                    commonParams.offsetX, commonParams.offsetY, commonParams.sfxSettings,
                    commonParams.scalePercent, commonParams.opacity, commonParams.flip, commonParams.flipY,
                    commonParams.randomFlipX, commonParams.randomFlipY, commonParams.rotation,
                    commonParams.blendMode, commonParams.zIndex, commonParams.bloomEffect,
                    commonParams.blurAmount, commonParams.tintColor, commonParams.intensity, commonParams.hue,
                    () => AnimatedPictureManager.decrementAnimationCount(eventId), bitmap, commonParams.stickMode, note, commonParams.playInReverse, commonParams.origin
                );

                if (SceneManager._scene instanceof Scene_Map) {
                    SceneManager._scene.addAnimatedPicture(animatedPicture);
                    AnimatedPictureManager.addAnimatedPicture(animatedPicture);
                }
            });
        };

        if (spritesheet.spritesheetFile) {
            bitmap.addLoadListener(() => {
                const frames = AnimatedPictureManager.createSpritesheetFrames(bitmap, Number(spritesheet.row), Number(spritesheet.column));
                handleAnimation(frames);
            });
        } else {
            handleAnimation(frames);
        }
    });

    PluginManager.registerCommand(pluginName, "removeAnimation", function (args) {
        let targetEventId;

        if (args.eventId.toLowerCase() === 'this') {
            targetEventId = this._eventId;
        } else if (args.eventId.toLowerCase() === 'player') {
            targetEventId = $gamePlayer;
        } else {
            targetEventId = Number(args.eventId);
        }

        const animationsToRemove = AnimatedPictureManager._animatedPictures.filter(pic => {
            const targetMatches = pic.target === (targetEventId === $gamePlayer ? $gamePlayer : $gameMap.event(targetEventId));

            if (args.notetag) {
                return targetMatches && pic.note === args.notetag;
            }

            return targetMatches;
        });

        animationsToRemove.forEach(animation => {
            animation.dispose();
        });
    });

    class AnimatedPicture {
        constructor(frames, fps, target, loopCount = 1, offsetX = 0, offsetY = 0, sfxSettings = [],
            scalePercent = 100, opacity = 255, flip = false, flipY = false,
            randomFlipX = false, randomFlipY = false, rotation = 0,
            blendMode = PIXI.BLEND_MODES.NORMAL, zIndex = 8,
            bloomEffect = false, blurAmount = 4, tintColor = "#FFFFFF",
            intensity = 0.5, hue = 0, onCompletion, bitmap = null, stickMode = false, note = "", playInReverse = false, origin = "center") {

            // Create base sprite
            this.sprite = new Sprite();
            this.setOrigin(origin);
            if (this.sprite.texture && isNearest) {
                this.sprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
            }

            // Animation properties
            this.frames = frames;
            this.fps = fps;
            this.currentFrameIndex = playInReverse ? this.frames.length - 1 : 0;
            this.frameTime = 1000 / fps;
            this.elapsedTime = 0;
            this.completedLoops = 0;
            this.loopCount = loopCount;
            this.playInReverse = playInReverse;
            this.note = note;

            // Position and target properties
            this.target = target;
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.lastKnownX = null;
            this.lastKnownY = null;
            this.stickMode = stickMode;

            // Get initial sprite dimensions
            const sprite = SceneManager._scene._spriteset.findCharacterSprite(this.target);
            this.initialSpriteWidth = sprite ? sprite.width : $gameMap.tileWidth();
            this.initialSpriteHeight = sprite ? sprite.height : $gameMap.tileHeight();

            // Visual properties
            this.bitmap = bitmap;
            this.flip = randomFlipX ? Math.random() < 0.5 : flip;
            this.flipY = randomFlipY ? Math.random() < 0.5 : flipY;
            this.rotation = rotation * (Math.PI / 180);
            this.sprite.blendMode = blendMode;
            this._z = zIndex;
            this.zIndex = zIndex;
            this.sfxSettings = sfxSettings;
            this.onCompletion = onCompletion;

            // Bloom effect properties
            this.bloomEffect = bloomEffect;
            this.blurAmount = blurAmount;
            this.tintColor = tintColor;
            this.intensity = intensity;
            this.hue = hue;

            // Apply visual effects
            if (this.bloomEffect) {
                this.createBloomSprite();
            }

            this.applyOpacity(opacity);
            this.applyScale(scalePercent);
            this.applyRotation();
            this.applyHueEffect();
            this.updateFrame();
            this.updatePosition();
        }

        setOrigin(origin) {
            switch (origin) {
                case "top":
                    this.sprite.anchor.set(0.5, 0);  // Top middle
                    break;
                case "bottom":
                    this.sprite.anchor.set(0.5, 1.0);  // Bottom center
                    break;
                case "center":
                default:
                    this.sprite.anchor.set(0.5, 0.5);  // Center
                    break;
            }

            if (this.bloomSprite) {
                this.bloomSprite.anchor = this.sprite.anchor;
            }
        }

        applyHueEffect() {
            if (this.hue !== 0) {
                if (!sharedHueFilter) {
                    sharedHueFilter = new PIXI.filters.ColorMatrixFilter();
                }
                sharedHueFilter.hue(this.hue);

                this.sprite.filters = this.sprite.filters || [];
                this.sprite.filters.push(sharedHueFilter);

                if (this.bloomSprite) {
                    this.bloomSprite.filters = this.bloomSprite.filters || [];
                    this.bloomSprite.filters.push(sharedHueFilter);
                }
            }
        }

        createBloomSprite() {
            if (!this.bloomSprite) {
                this.bloomSprite = new Sprite();
            }
            this.bloomSprite.anchor = this.sprite.anchor;
            this.bloomSprite.blendMode = PIXI.BLEND_MODES.SCREEN;

            if (!sharedBloomFilter) {
                sharedBloomFilter = new PIXI.filters.BlurFilter(this.blurAmount);
            } else {
                sharedBloomFilter.blur = this.blurAmount;
            }
            this.bloomSprite.filters = [sharedBloomFilter];

            const color = PIXI.utils.string2hex(this.tintColor);
            this.bloomSprite.tint = color;
            this.bloomSprite.alpha = this.intensity / 255;
            this.bloomSprite.z = this.sprite.z + 1;

            if (this.bitmap) {
                this.bloomSprite.bitmap = this.bitmap;
                if (this.frames && this.frames[this.currentFrameIndex]) {
                    const frame = this.frames[this.currentFrameIndex];
                    if (typeof frame === 'object' && 'x' in frame) {
                        this.bloomSprite.setFrame(frame.x, frame.y, frame.width, frame.height);
                    }
                }
            }
        }

        removeBloomSprite() {
            if (this.bloomSprite && this.bloomSprite.parent) {
                this.bloomSprite.parent.removeChild(this.bloomSprite);
            }
            this.bloomSprite = null;
        }

        applyOpacity(opacity) {
            this.sprite.opacity = opacity;
        }

        applyScale(scalePercent) {
            const scale = scalePercent / 100;
            this.sprite.scale.set(this.flip ? -scale : scale, this.flipY ? -scale : scale);
        }

        applyRotation() {
            this.sprite.rotation = this.rotation;
        }

        updateFrame() {
            if (this.frames && this.frames.length > 0 && this.currentFrameIndex < this.frames.length) {
                const frame = this.frames[this.currentFrameIndex];

                if (this.bitmap) {
                    // Spritesheet animation
                    this.sprite.bitmap = this.bitmap;
                    if (this.sprite.bitmap && this.sprite.bitmap.baseTexture && isNearest) {
                        this.sprite.bitmap.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
                    }
                    this.sprite.setFrame(frame.x, frame.y, frame.width, frame.height);
                    if (this.bloomEffect && this.bloomSprite) {
                        this.bloomSprite.bitmap = this.bitmap;
                        if (this.bloomSprite.bitmap && this.bloomSprite.bitmap.baseTexture && isNearest) {
                            this.bloomSprite.bitmap.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
                        }
                        this.bloomSprite.setFrame(frame.x, frame.y, frame.width, frame.height);
                    }
                } else {
                    // Frame-by-frame animation
                    this.sprite.bitmap = frame;
                    if (this.sprite.bitmap && this.sprite.bitmap.baseTexture && isNearest) {
                        this.sprite.bitmap.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
                    }
                    if (this.bloomEffect && this.bloomSprite) {
                        this.bloomSprite.bitmap = frame;
                        if (this.bloomSprite.bitmap && this.bloomSprite.bitmap.baseTexture && isNearest) {
                            this.bloomSprite.bitmap.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
                        }
                    }
                }

                if (this.bloomEffect && this.bloomSprite) {
                    this.bloomSprite.alpha = this.intensity / 255;
                }
            }

            // Play SFX if set for this frame
            for (const sfx of this.sfxSettings) {
                if (sfx.frame === this.currentFrameIndex + 1) {
                    AudioManager.playSe({ name: sfx.sfxFile, volume: sfx.volume, pitch: sfx.pitch });
                }
            }
        }

        updatePosition() {
            if (this.stickMode) {
                if (this.lastKnownX === null || this.lastKnownY === null) {
                    if (Imported.Hendrix_Action_Engine) {
                        const sprite = SceneManager._scene._spriteset.findCharacterSprite(this.target);
                        if (sprite && sprite.rotation !== 0) {
                            let offsetX = this.offsetX * 2;
                            let offsetY = this.offsetY * 2;
                            offsetY -= (this.initialSpriteHeight / 2);

                            const angle = sprite.rotation;
                            const rotatedX = offsetX * Math.cos(angle) - offsetY * Math.sin(angle);
                            const rotatedY = offsetX * Math.sin(angle) + offsetY * Math.cos(angle);

                            this.lastKnownX = (this.target._realX * $gameMap.tileWidth()) + rotatedX;
                            this.lastKnownY = (this.target._realY * $gameMap.tileHeight()) + rotatedY;
                        } else {
                            this.lastKnownX = (this.target._realX * $gameMap.tileWidth()) + this.offsetX * 2;
                            this.lastKnownY = (this.target._realY * $gameMap.tileHeight()) + this.offsetY * 2;
                        }
                    } else {
                        this.lastKnownX = (this.target._realX * $gameMap.tileWidth()) + this.offsetX * 2;
                        this.lastKnownY = (this.target._realY * $gameMap.tileHeight()) + this.offsetY * 2;
                    }
                }

                const mapDisplayX = $gameMap.displayX() * $gameMap.tileWidth();
                const mapDisplayY = $gameMap.displayY() * $gameMap.tileHeight();
                const displayX = this.lastKnownX - mapDisplayX + $gameMap.tileWidth() / 2;
                const displayY = this.lastKnownY - mapDisplayY + $gameMap.tileHeight() / 2;

                this.sprite.x = Math.round(displayX);
                this.sprite.y = Math.round(displayY);

                if (Imported.Hendrix_Action_Engine) {
                    const sprite = SceneManager._scene._spriteset.findCharacterSprite(this.target);
                    if (sprite && sprite.rotation !== 0) {
                        this.sprite.rotation = this.rotation + sprite.rotation;
                    }
                }

                if (this.bloomEffect && this.bloomSprite) {
                    this.bloomSprite.x = this.sprite.x;
                    this.bloomSprite.y = this.sprite.y;
                    this.bloomSprite.scale.set(this.sprite.scale.x, this.sprite.scale.y);
                    this.bloomSprite.rotation = this.sprite.rotation;
                }
                return;
            }

            if (this.target) {
                const screenX = this.target.screenX();
                const screenY = this.target.screenY();
                const sprite = SceneManager._scene._spriteset.findCharacterSprite(this.target);

                let newX, newY;

                if (Imported.Hendrix_Action_Engine && sprite && sprite.rotation !== 0) {
                    let offsetX = this.offsetX * 2;
                    let offsetY = this.offsetY * 2;

                    if (sprite.scale.x !== 1 || sprite.scale.y !== 1) {
                        const actualWidth = sprite.width * sprite.scale.x;
                        const actualHeight = sprite.height * sprite.scale.y;
                        offsetX *= (actualWidth / this.initialSpriteWidth);
                        offsetY *= (actualHeight / this.initialSpriteHeight);
                    }

                    offsetY -= (this.initialSpriteHeight / 2);

                    const angle = sprite.rotation;
                    const rotatedX = offsetX * Math.cos(angle) - offsetY * Math.sin(angle);
                    const rotatedY = offsetX * Math.sin(angle) + offsetY * Math.cos(angle);

                    newX = screenX + rotatedX;
                    newY = screenY + rotatedY;

                    this.sprite.rotation = this.rotation + sprite.rotation;
                } else {
                    // Non-rotating logic
                    if (sprite && (sprite.scale.x !== 1 || sprite.scale.y !== 1)) {
                        const actualWidth = sprite.width * sprite.scale.x;
                        const actualHeight = sprite.height * sprite.scale.y;

                        const adjustedOffsetX = this.offsetX * (actualWidth / this.initialSpriteWidth);
                        const adjustedOffsetY = this.offsetY * (actualHeight / this.initialSpriteHeight);

                        newX = screenX + adjustedOffsetX;
                        newY = screenY - (actualHeight / 2) + adjustedOffsetY;
                    } else {
                        newX = screenX + this.offsetX * 2;
                        newY = screenY - (this.initialSpriteHeight / 2) + this.offsetY * 2;
                    }
                }

                if (Math.abs(this.sprite.x - newX) > 1 || Math.abs(this.sprite.y - newY) > 1) {
                    this.sprite.x = newX;
                    this.sprite.y = newY;
                    this.lastKnownX = newX;
                    this.lastKnownY = newY;
                }
            }

            if (this.bloomEffect && this.bloomSprite) {
                this.bloomSprite.x = this.sprite.x;
                this.bloomSprite.y = this.sprite.y;
                this.bloomSprite.scale = this.sprite.scale;
                this.bloomSprite.rotation = this.sprite.rotation;
            }
        }

        checkTargetValidity() {
            if (this.target === $gamePlayer) return true;
            if (!this.target) return false;

            // Check if the target event still exists on the map
            return !!$gameMap.event(this.target._eventId);
        }

        update(deltaTime) {
            if (!this.sprite || !this.sprite.parent || !this.checkTargetValidity()) {
                this.dispose();
                return;
            }

            this.elapsedTime += deltaTime;

            while (this.elapsedTime >= this.frameTime) {
                if (this.playInReverse) {
                    this.currentFrameIndex--;
                    if (this.currentFrameIndex < 0) {
                        this.completedLoops++;
                        if (this.completedLoops >= this.loopCount) {
                            this.dispose();
                            if (this.onCompletion) this.onCompletion();
                            return;
                        }
                        this.currentFrameIndex = this.frames.length - 1;
                    }
                } else {
                    this.currentFrameIndex++;
                    if (this.currentFrameIndex >= this.frames.length) {
                        this.completedLoops++;
                        if (this.completedLoops >= this.loopCount) {
                            this.dispose();
                            if (this.onCompletion) this.onCompletion();
                            return;
                        }
                        this.currentFrameIndex = 0;
                    }
                }
                this.elapsedTime -= this.frameTime;
                this.updateFrame();
            }

            if (this.shouldUpdatePosition()) {
                this.updatePosition();
            }
        }

        shouldUpdatePosition() {
            // Check if the target has moved significantly
            if (!this.lastKnownX || !this.lastKnownY) return true;
            const dx = this.target.screenX() - this.lastKnownX;
            const dy = this.target.screenY() - this.lastKnownY;
            return Math.abs(dx) > 1 || Math.abs(dy) > 1;
        }

        dispose() {
            if (this.sprite?.parent) {
                this.sprite.parent.removeChild(this.sprite);
                this.sprite.destroy();
            }

            if (this.bloomSprite?.parent) {
                this.bloomSprite.parent.removeChild(this.bloomSprite);
                this.bloomSprite.destroy();
            }

            AnimatedPictureManager.removeAnimatedPicture(this);
        }
    }

    Spriteset_Map.prototype.findCharacterSprite = function (character) {
        return this._characterSprites.find(sprite => sprite._character === character) || null;
    };

    Scene_Map.prototype.addAnimatedPicture = function (animatedPicture) {
        const spritesetMap = this._spriteset;
        if (!spritesetMap) return;

        let container = spritesetMap._tilemap;
        if (!container) return;

        if (animatedPicture.sprite) {
            animatedPicture.sprite.z = animatedPicture.zIndex;
            container.addChild(animatedPicture.sprite);
        }

        if (animatedPicture.bloomEffect && animatedPicture.bloomSprite) {
            animatedPicture.bloomSprite.z = animatedPicture.zIndex + 1;
            container.addChild(animatedPicture.bloomSprite);
        }
    };

    class AnimatedPictureManager {
        static _animationCountByEventId = new Map();
        static _animatedPicturesByEventId = new Map();
        static _animatedPictures = [];
        static _lastUpdateTime = 0;

        static showAnimatedPicture(eventId, frames, fps, target, loopCount, offsetX, offsetY, sfxSettings,
            scalePercent, opacity, flip, flipY, randomFlipX, randomFlipY, rotation,
            blendMode, zIndex, bloomEffect, blurAmount, tintColor, intensity, hue, stickmode, note, playInReverse = false) {

            const origin = "center";

            const alwaysPlaySFX = PluginManager.parameters(pluginName)["alwaysPlaySFX"] === "true";
            loopCount = Math.max(1, loopCount);
            let animationCount = this._animationCountByEventId.get(eventId) || 0;

            if (alwaysPlaySFX) {
                sfxSettings.forEach(sfx => {
                    AudioManager.playSe({ name: sfx.sfxFile, volume: sfx.volume, pitch: sfx.pitch });
                });
            }

            const animatedPicture = new AnimatedPicture(
                frames, fps, target, loopCount, offsetX, offsetY, sfxSettings,
                scalePercent, opacity, flip, flipY, randomFlipX, randomFlipY, rotation,
                blendMode, zIndex, bloomEffect, blurAmount, tintColor, intensity, hue, stickmode,
                () => this.decrementAnimationCount(eventId), null, note, playInReverse, origin
            );

            if (!animatedPicture.checkTargetValidity()) {
                animatedPicture.dispose();
                return;
            }

            if (SceneManager._scene instanceof Scene_Map) {
                SceneManager._scene.addAnimatedPicture(animatedPicture);
            }

            this.addAnimatedPicture(animatedPicture);
            this._animationCountByEventId.set(eventId, animationCount + 1);
            this._animatedPicturesByEventId.set(eventId, animatedPicture);
        }

        static createSpritesheetFrames(bitmap, rows, columns) {
            const frameWidth = Math.floor(bitmap.width / columns);
            const frameHeight = Math.floor(bitmap.height / rows);
            const frames = [];

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < columns; col++) {
                    const x = col * frameWidth;
                    const y = row * frameHeight;
                    frames.push({ x, y, width: frameWidth, height: frameHeight });
                }
            }
            return frames;
        }

        static decrementAnimationCount(eventId) {
            let animationCount = this._animationCountByEventId.get(eventId) || 0;
            if (animationCount > 0) {
                this._animationCountByEventId.set(eventId, animationCount - 1);
            }
        }

        static addAnimatedPicture(animatedPicture) {
            this._animatedPictures.push(animatedPicture);
            const scene = SceneManager._scene;
            if (scene instanceof Scene_Map) {
                scene.addAnimatedPicture(animatedPicture);
                scene._spriteset._needsSorting = true;
            }
        }

        static removeAnimatedPicture(animatedPicture) {
            const index = this._animatedPictures.indexOf(animatedPicture);
            if (index !== -1) {
                this._animatedPictures[index] = this._animatedPictures[this._animatedPictures.length - 1];
                this._animatedPictures.pop();
                const scene = SceneManager._scene;
                if (scene instanceof Scene_Map) {
                    scene._spriteset._needsSorting = true;
                }
            }
            if (sharedBloomFilter && this._animatedPictures.length === 0) {
                sharedBloomFilter.destroy();
                sharedBloomFilter = null;
            }
        }

        static removeAllAnimatedPictures() {
            this._animatedPictures.forEach(picture => picture.dispose());
            this._animatedPictures = [];
            this._animationCountByEventId.clear();
            this._animatedPicturesByEventId.clear();
        }

        static update(currentTime) {
            if (this._lastUpdateTime === 0) {
                this._lastUpdateTime = currentTime;
                return;
            }

            const deltaTime = currentTime - this._lastUpdateTime;
            this._lastUpdateTime = currentTime;

            for (const animatedPicture of this._animatedPictures) {
                animatedPicture.update(deltaTime);
            }
        }
    }

    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        AnimatedPictureManager.update(performance.now());
        _Scene_Map_update.call(this);
    };

    const _Scene_Map_terminate = Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate = function () {
        AnimatedPictureManager.removeAllAnimatedPictures();
        _Scene_Map_terminate.call(this);
    };

    window.AnimatedPictureManager = AnimatedPictureManager;

    // ================================================================
    // EVENT/PLAYER ACTION SYSTEM
    // ================================================================

    window.changeCharacterGraphicByVariable = function (varId, eventId = null) {
        const path = $gameVariables.value(varId);
        const char = eventId ? $gameMap.event(eventId) : $gamePlayer;
        const match = path.match(/^(.+?)(?:_([0-9]+))?$/);
        const dir = char.direction();
        char.setImage(match[1], Number(match[2]) || 0);
        char.setDirection(dir);
    };

    // Frame control
    Game_Character.prototype.toFrame = function (pattern) {
        togglePatternReset.call(this, true);
        this._originalPattern = this._pattern = pattern - 1;
        this._patternUpdated = true;
        this._stepAnime = false;
    };

    Game_Character.prototype.playFrames = function (start, end, wait) {
        this._isPlayingFrames = true;
        this._frameWait = wait;
        this._frameCount = 0;
        this._endFrame = end - 1;
        this._startFrame = start - 1;
        this._isReverse = start > end;
        this.toFrame(start);
    };

    // Pattern reset control
    window.togglePatternReset = function (disable, eventId = null) {
        const char = eventId ? $gameMap.event(eventId) : $gamePlayer;
        char._disablePatternReset = disable;
        if (!disable) char._patternUpdated = false;
    };

    // Extending base classes
    const _GameBase_initMembers = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function () {
        _GameBase_initMembers.call(this);
        this._frames = 3;
        this._columnIndex = 1;
        this._frameSpeed = 0;
    };

    Game_CharacterBase.prototype.pattern = function () {
        return this._pattern < this._frames ? this._pattern : this._columnIndex;
    };

    Game_CharacterBase.prototype.updatePattern = function () {
        if (this._patternUpdated) {
            return; // Skip pattern update if use toFrame to set to a certain frame
        }
        if (!this.hasStepAnime() && this._stopCount > 0) {
            this.resetPattern();
        } else {
            this._pattern = (this._pattern + 1) % (this._frames + this._columnIndex);
        }
    };

    const _resetPattern = Game_CharacterBase.prototype.resetPattern;
    Game_CharacterBase.prototype.resetPattern = function () {
        if (this._isBigCharacter) {
            if (!this._disablePatternReset) this._pattern = this._originalPattern;
        } else {
            _resetPattern.call(this);
        }
    };

    // Adjust the Change Image command from Set Movement Route to set pattern to 0
    // only if the filename has f<x>
    const _Game_CharacterBase_setImage = Game_CharacterBase.prototype.setImage;
    Game_CharacterBase.prototype.setImage = function (characterName, characterIndex) {
        _Game_CharacterBase_setImage.call(this, characterName, characterIndex);

        if (characterName.match(/f\d+$/)) {
            // For fx characters, set pattern to 0
            this._pattern = 0;
            this._originalPattern = 0;
        } else {
            // For normal characters, reset everything (normal rpg maker behavior)
            this._patternUpdated = false;
            this._disablePatternReset = false;
            this._pattern = 1;
            this._originalPattern = 1;
        }

        if (this === $gamePlayer) {
            // Clean the filenames for comparison
            const cleanNewChar = characterName.split('/').pop();
            const cleanIdleChar = idleCharacter.split('/').pop();
            const cleanMovingChar = movingCharacter.split('/').pop();

            if (cleanNewChar === cleanIdleChar || cleanNewChar === cleanMovingChar) {
                this._autoGraphicsEnabled = true;
                // Reset animation flags to allow normal walking animation
                this._patternUpdated = false;
                this._disablePatternReset = false;

            } else {
                this._autoGraphicsEnabled = false;
            }
        }
    };
    //__________________________________________________________________________

    const _Game_update = Game_Character.prototype.update;
    Game_Character.prototype.update = function () {
        _Game_update.call(this);
        if (this._isPlayingFrames && ++this._frameCount >= this._frameWait) {
            this._frameCount = 0;

            if (this._isReverse) {
                // Reverse playback (counting down)
                if (this._pattern >= this._endFrame) {
                    if (this._pattern === this._endFrame) {
                        this._isPlayingFrames = false;
                        togglePatternReset.call(this, true);
                    } else {
                        this.toFrame(this._pattern);
                    }
                }
            } else {
                // Forward playback (counting up)
                if (this._pattern <= this._endFrame) {
                    if (this._pattern === this._endFrame) {
                        this._isPlayingFrames = false;
                        togglePatternReset.call(this, true);
                    } else {
                        this.toFrame(this._pattern + 2);
                    }
                }
            }
        }
    };

    const _Game_updateRoutineMove = Game_Character.prototype.updateRoutineMove;
    Game_Character.prototype.updateRoutineMove = function () {
        return this._isPlayingFrames ? false : _Game_updateRoutineMove.call(this);
    };

    // Animation timing
    const _GameBase_animationWait = Game_CharacterBase.prototype.animationWait;
    Game_CharacterBase.prototype.animationWait = function () {
        return _GameBase_animationWait.call(this) - this._frameSpeed;
    };

    // Direction handling
    const _GameBase_setDirection = Game_CharacterBase.prototype.setDirection;
    Game_CharacterBase.prototype.setDirection = function (d) {
        if (this instanceof Game_Player) {
            if (!this.isDirectionFixed() && d) this._direction = d;
            if (this._disablePatternReset && this._patternUpdated) this.updatePattern();
        } else {
            _GameBase_setDirection.call(this, d);
        }
    };

    // Sprite handling
    const _spriteChar_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
    Sprite_Character.prototype.setCharacterBitmap = function () {
        if (this._characterName) {
            // Use our cache instead of ImageManager
            this.bitmap = PermanentImageCache.load('img/characters/', this._characterName);
        } else {
            this.bitmap = null;
        }
        const frameMatch = this._characterName.match(/f(\d+)$/);
        if (frameMatch) {
            const frames = Number(frameMatch[1]);
            this._character._frames = frames;
            this._character._columnIndex = 0;
            this._character._frameSpeed = SPEED * frames;
        } else {
            this._character._frames = 3;
            this._character._columnIndex = 1;
            this._character._frameSpeed = 0;
        }
        _spriteChar_setCharacterBitmap.call(this);
    };

    Sprite_Character.prototype.characterBlockX = function () {
        if (this._isBigCharacter) return 0;
        const index = this._character.characterIndex();
        return index % 4 * this._character._frames;
    };

    Sprite_Character.prototype.patternWidth = function () {
        if (this._tileId > 0) return $gameMap.tileWidth();
        const frames = this._character._frames;
        return this._isBigCharacter ? this.bitmap.width / frames : this.bitmap.width / (frames * 4);
    };

    // ================================================================
    // EVENT/PLAYER ACTION SYSTEM
    // ================================================================

    const alias_Game_Player_initMembers = Game_Player.prototype.initMembers;
    Game_Player.prototype.initMembers = function () {
        alias_Game_Player_initMembers.call(this);
        this._lastRealX = this._realX;
        this._lastRealY = this._realY;
        this._isMoving = false;
        this._isImageChanged = false;
    };

    const alias_Game_Player_update = Game_Player.prototype.update;
    Game_Player.prototype.update = function (sceneActive) {
        alias_Game_Player_update.call(this, sceneActive);
        this.updateMovingState();
        if ($gameSwitches.value(enableSwitch) && this._autoGraphicsEnabled) {
            this.updateGraphics();
        }
    };

    Game_Player.prototype.updateMovingState = function () {
        if (this._realX !== this._lastRealX || this._realY !== this._lastRealY) {
            this._isMoving = true;
        } else {
            this._isMoving = false;
        }
        this._lastRealX = this._realX;
        this._lastRealY = this._realY;
    };

    Game_Player.prototype.updateGraphics = function () {
        if (!this._isImageChanged) {
            const currentPattern = this.pattern();
            if (this._isMoving) {
                // When moving, use moving character graphic
                this.setImage(movingCharacter, 0);
                this._stepAnime = false;
            } else {
                // When idle, use idle character graphic
                this.setImage(idleCharacter, 0);
                this._stepAnime = true;
            }
            this.setPattern(currentPattern);
        }
        this._isImageChanged = false;
    };

    const _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
    Game_Character.prototype.processMoveCommand = function (command) {
        if (command.code === Game_Character.ROUTE_SCRIPT) {
            const script = command.parameters[0];
            if (script.match(/^(playFrames|toFrame)/)) {
                eval(`this.${script}`);
                return;
            }
        }
        _Game_Character_processMoveCommand.call(this, command);
    };

    window.PermanentImageCache = PermanentImageCache;
    window.ImagePreloader = ImagePreloader;
})();