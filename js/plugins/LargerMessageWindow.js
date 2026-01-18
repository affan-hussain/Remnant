//=============================================================================
// Larger Message Window
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Increases message window height to prevent text cutoff
 * @author Auto
 *
 * @help LargerMessageWindow.js
 *
 * This plugin increases the message window height from 4 lines to 6 lines
 * to prevent text from being cut off.
 *
 * No plugin parameters required.
 */

(() => {
    'use strict';

    // Override messageWindowRect to increase height
    const _Scene_Message_messageWindowRect = Scene_Message.prototype.messageWindowRect;
    Scene_Message.prototype.messageWindowRect = function() {
        const ww = Graphics.boxWidth;
        const wh = this.calcWindowHeight(6, false) + 8; // Changed from 4 to 6 lines
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = 0;
        return new Rectangle(wx, wy, ww, wh);
    };

})();
