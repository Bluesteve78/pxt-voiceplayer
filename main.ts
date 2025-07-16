//% color="#FF0080" icon="\uf130" block="Voice Player"
namespace voiceplayer {
    let voiceMap: { [key: string]: string } = {}

    //% block="set voice $id to sound $base64"
    export function setVoiceMapping(id: string, base64: string) {
        voiceMap[id] = base64
    }

    //% block="play voice $id"
    export function playVoice(id: string) {
        const data = voiceMap[id]
        if (data) {
            const sound = music.createSoundEffectFromBuffer(hex`${data}`)
            music.playSoundEffect(sound)
        } else {
            console.log(`No voice for ID: ${id}`)
        }
    }

    //% block="stop voice"
    export function stopVoice() {
        music.stopAllSounds()
    }
}
