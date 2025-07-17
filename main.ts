//% color="#FF0080" icon="\uf130" block="Voice Player"
namespace voiceplayer {
    let voiceMap: { [key: string]: music.SoundEffect } = {}

    //% block="set voice $id"
    export function setVoice(id: string, sound: music.SoundEffect) {
        voiceMap[id] = sound
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
