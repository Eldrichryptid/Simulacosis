//==========================================================================
// EliMZ_SaveFileManager.js
//==========================================================================

/*:
@target MZ
@base EliMZ_Book

@plugindesc ♦1.2.0♦ Let you delete and copy save files. 
@author Hakuen Studio
@url https://hakuenstudio.itch.io/hakuen-studio-save-file-manager-for-rpg-maker-mz/rate?source=game

@help
★★★★★ Rate the plugin! Please, is very important to me ^^

● Terms of Use
https://www.hakuenstudio.com/terms-of-use-5-0-0

============================================================================
Features
============================================================================

● Delete Current Save File
● Delete All Save files
● Delete specific save files.
● Copy save file to another slots

============================================================================
How to use
============================================================================

https://docs.google.com/document/d/1afVqSMcyzZVxym3MJGBl3vILb_26Qt0_MakiLmPn1OM/edit?usp=sharing

============================================================================

@command cmd_deleteSlot
@text Delete Save File
@desc Deletes specific save files. 

    @arg slots
    @text Slot Ids
    @type text
    @desc List here the save files you want to delete. Use 0 for auto-save slot.
    @default

@command cmd_deleteCurrentSlot
@text Delete Current Save File
@desc Delete the current save file.

@command cmd_deleteAllSlot
@text Delete All Save Slot File
@desc Delete all save slot files.

@command cmd_copySlot
@text Copy Save File
@desc Copy existing save files to another slot.

    @arg subjectId
    @text Save File Id
    @type text
    @desc The save file you want to copy
    @default

    @arg targetSlots
    @text Target Slots
    @type text
    @desc The slots you want to paste the copied save file.
    @default

    @arg overwrite
    @text Overwrite
    @type text
    @desc Set to true if you want to copy the save file and overwrite another existing save file.
    @default true

@command cmd_deleteAllFiles
@text Delete All Slot and other save files
@desc 

    @arg files
    @text Files
    @type text
    @desc Insert here the other save files you want to delete. Separate by comma. Do not use spaces.
    @default config,global

*/

"use strict"

var Eli = Eli || {}
var Imported = Imported || {}
Imported.Eli_SaveFileManager = true

/* ========================================================================== */
/*                                   PLUGIN                                   */
/* ========================================================================== */
Eli.SaveFileManager = {

    initialize(){
        this.initPluginCommands()
    },

    initPluginCommands(){
        const commands = ["cmd_deleteSlot", "cmd_deleteCurrentSlot", "cmd_deleteAllSlot", "cmd_copySlot", "cmd_deleteAllFiles"]
        Eli.PluginManager.registerCommands(this, commands)
    },

    cmd_deleteSlot(args){
        const ids = Eli.PluginManager.createIdList(args.slots)

        for(const id of ids){
            
            if(DataManager.savefileExists(id)){
                const saveName = DataManager.makeSavename(id)
                DataManager._globalInfo[id] = null
                StorageManager.remove(saveName)
            }
        }
        
        DataManager.removeInvalidGlobalInfo()
    },

    cmd_deleteCurrentSlot(args){
        const id = $gameSystem.savefileId()

        if(DataManager.savefileExists(id)){
            const saveName = DataManager.makeSavename(id)
            DataManager._globalInfo[id] = null
            StorageManager.remove(saveName)
        }

        DataManager.removeInvalidGlobalInfo()
    },

    cmd_deleteAllSlot(args){
        for(let i = 0; i < DataManager._globalInfo.length; i++){

            if(DataManager.savefileExists(i)){
                const saveName = DataManager.makeSavename(i)
                DataManager._globalInfo[i] = null
                StorageManager.remove(saveName)
            }
        }

        DataManager.removeInvalidGlobalInfo()
    },

    cmd_copySlot(args){
        const subjectId = Number(Eli.PluginManager.parseVariables(args.subjectId))

        if(DataManager.savefileExists(subjectId)){
            const ids = Eli.PluginManager.createIdList(args.targetSlots)
            
            for(const id of ids){

                if(args.overwrite === "true" || !DataManager.savefileExists(id)){
                    DataManager.copySaveFile(subjectId, id) 
                } 
            }
        }
    },

    cmd_deleteAllFiles(args){
        const files = args.files.replaceAll(" ", "").split(",")
        this.cmd_deleteAllSlot()

        for(const file of files){
            StorageManager.remove(file)
        }
    },

}

Eli.SaveFileManager.initialize()

DataManager.copySaveFile = function(subjectId, targetId) {
    const saveName = this.makeSavename(subjectId)

    return StorageManager.loadObject(saveName).then(contents => {
        const copyName = this.makeSavename(targetId)

        return StorageManager.saveObject(copyName, contents).then(() => {
            this._globalInfo[targetId] = JSON.parse(JSON.stringify(DataManager._globalInfo[subjectId]))
            this.saveGlobalInfo()

            return 0
        })
    })
}