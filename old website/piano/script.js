const scales = [
  {
    name: "C Major",
    notes: [
      { name: "Sa", frequency: 261.63 }, // C
      { name: "Re", frequency: 293.66 }, // D
      { name: "Ga", frequency: 329.63 }, // E
      { name: "Ma", frequency: 349.23 }, // F
      { name: "Pa", frequency: 392.00 }, // G
      { name: "Dha", frequency: 440.00 }, // A
      { name: "Ni", frequency: 493.88 }, // B
      { name: "Sa", frequency: 523.25 }, // High C
    ],
  },
];

const keyboard = [
  { name: "C", type: "white", frequency: 261.63 },
  { name: "C#", type: "black", frequency: 277.18 },
  { name: "D", type: "white", frequency: 293.66 },
  { name: "D#", type: "black", frequency: 311.13 },
  { name: "E", type: "white", frequency: 329.63 },
  { name: "F", type: "white", frequency: 349.23 },
  { name: "F#", type: "black", frequency: 369.99 },
  { name: "G", type: "white", frequency: 392.00 },
  { name: "G#", type: "black", frequency: 415.30 },
  { name: "A", type: "white", frequency: 440.00 },
  { name: "A#", type: "black", frequency: 466.16 },
  { name: "B", type: "white", frequency: 493.88 },
  { name: "C", type: "white", frequency: 523.25 },
];

const synth = new Tone.Synth().toDestination();

function generatePiano() {
  const piano = document.getElementById("piano");
  piano.innerHTML = "";

  keyboard.forEach((key) => {
    const keyDiv = document.createElement("div");
    keyDiv.className = `key ${key.type}`;
    keyDiv.innerHTML = `<span>${key.name}</span>`;
    keyDiv.addEventListener("click", () => playSound(key.frequency));
    piano.appendChild(keyDiv);
  });
}

function playSound(frequency) {
  synth.triggerAttackRelease(frequency, "8n");
}

// Initialize the piano
generatePiano();
