//% color="#FF0080" icon="\uf130" block="Voice Player"
namespace voiceplayer {
    let voiceMap: { [key: string]: music.SoundEffect } = {}

    //% block="set voice $id"
    export function setVoice(id: string, sound: music.SoundEffect) {
    game.showLongText(text, DialogLayout.Bottom)
    for (let i = 0; i < text.length; i++) {
        // Simulate a syllable for each character
        music.playTone(400 + (i % 3) * 100, 80)
        pause(60)
    }
}

    }

    //% block="play voice $id"
    export function playVoice(id: string) {
        const sfx = voiceMap[id]
        if (sfx) {
            music.playSoundEffect(sfx, SoundExpressionPlayMode.UntilDone)
        } else {
            console.log(`Voice '${id}' not found`)
        }
    }

    //% block="stop voice"
    export function stopVoice() {
        music.stopAllSounds()
    }
}
