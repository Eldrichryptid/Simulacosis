//==========================================================================
// EliMZ_SampleProject.js
//==========================================================================

/*:
@target MZ

@plugindesc ♦5.0.0♦ This is for use only in the sample project.
@author Hakuen Studio
@url https://hakuenstudio.itch.io/

@help
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
If you like my work, please consider supporting me on Patreon!
Patreon      → https://www.patreon.com/hakuenstudio
Terms of Use → https://www.hakuenstudio.com/terms-of-use-5-0-0
Facebook     → https://www.facebook.com/hakuenstudio
Instagram    → https://www.instagram.com/hakuenstudio
Twitter      → https://twitter.com/hakuen_studio
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
*/

"use strict"

{

const Alias = {}

/* -------------------------------- SCENE MAP ------------------------------- */
Scene_Map.prototype.updateEncounterEffect = function() {
    if (this._encounterEffectDuration > 0) {
        this._encounterEffectDuration--;
        const speed = this.encounterEffectSpeed();
        const n = speed - this._encounterEffectDuration;
        const p = n / speed;
        const q = ((p - 1) * 20 * p + 5) * p + 1;
        const zoomX = $gamePlayer.screenX();
        const zoomY = $gamePlayer.screenY() - 24;
        if (n === 2) {
            $gameScreen.setZoom(zoomX, zoomY, 1);
            this.snapForBattleBackground();
            //this.startFlashForEncounter(speed / 2);
        }
        $gameScreen.setZoom(zoomX, zoomY, q);
        if (n === Math.floor(speed / 6)) {
            //this.startFlashForEncounter(speed / 2);
        }
        if (n === Math.floor(speed / 2)) {
            BattleManager.playBattleBgm();
            this.startFadeOut(this.fadeSpeed());
        }
    }
}

/* ----------------------------- WINDOW MAP NAME ---------------------------- */
Window_MapName.prototype.updateFadeIn = function() {
    this.contentsOpacity += 16
    this.opacity += $gameMap.displayName() ? 16 : 0
}

Window_MapName.prototype.updateFadeOut = function() {
    this.contentsOpacity -= 16
    this.opacity -= $gameMap.displayName() ? 16 : 0
}

Window_MapName.prototype.refresh = function() {
    this.contents.clear()
    if($gameMap.displayName()) {
        const width = this.textSizeEx($gameMap.displayName().substring(0)).width
        this.move(0, 0, (width + this.padding * 2), this.height)
        //this.drawBackground(0, 0, width, this.lineHeight());
        this.drawText($gameMap.displayName(), 0, 0, width, "left")
    }
}

/* ----------------------------- SPRITE BATTLER ----------------------------- */
Sprite_Actor.prototype.setActorHome = function(index) {
    this.setHome(900 + index * 32, Graphics.height/2 + index * 48);
};

}