from gtts import gTTS
import os

# Step 1: Ask user for input
text = input("What should I say? ")

# Step 2: Turn text into speech
tts = gTTS(text)

# Step 3: Save it as an MP3
tts.save("output.mp3")

# Step 4: Play the sound (Windows/Mac/Linux)
try:
    os.system("start output.mp3")      # Windows
except:
    try:
        os.system("afplay output.mp3")  # macOS
    except:
        os.system("xdg-open output.mp3")  # Linux
