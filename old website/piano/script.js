
// Define all scales
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
  {
    name: "D Major",
    notes: [
      { name: "Sa", frequency: 293.66 }, // D
      { name: "Re", frequency: 329.63 }, // E
      { name: "Ga", frequency: 369.99 }, // F#
      { name: "Ma", frequency: 392.00 }, // G
      { name: "Pa", frequency: 440.00 }, // A
      { name: "Dha", frequency: 493.88 }, // B
      { name: "Ni", frequency: 554.37 }, // C#
      { name: "Sa", frequency: 587.33 }, // High D
    ],
  },
  {
    name: "E Minor",
    notes: [
      { name: "Sa", frequency: 329.63 }, // E
      { name: "Re", frequency: 349.23 }, // F
      { name: "Ga", frequency: 392.00 }, // G
      { name: "Ma", frequency: 440.00 }, // A
      { name: "Pa", frequency: 493.88 }, // B
      { name: "Dha", frequency: 523.25 }, // High C
      { name: "Ni", frequency: 587.33 }, // High D
      { name: "Sa", frequency: 659.25 }, // High E
    ],
  },
];

let currentScaleIndex = 0;

// Create a Tone.js Synth
const synth = new Tone.Synth().toDestination();

// Generate piano keys
function generatePiano() {
  const piano = document.getElementById("piano");
  piano.innerHTML = ""; // Clear existing keys

  const notes = scales[currentScaleIndex].notes;
  notes.forEach((note, i) => {
    const key = document.createElement("div");
    key.className = `key ${i % 2 === 1 ? "black" : ""}`;
    key.innerHTML = `<span>${note.name}</span>`;
    key.addEventListener("click", () => playSound(note.frequency));
    piano.appendChild(key);
  });
}

// Change scale
function changeScale(direction) {
  currentScaleIndex = (currentScaleIndex + direction + scales.length) % scales.length;
  document.getElementById("currentScale").innerText = scales[currentScaleIndex].name;
  generatePiano();
}

// Play a tone
function playSound(frequency) {
  synth.triggerAttackRelease(frequency, "8n"); // Play tone for an eighth note duration
}

// Initialize the piano
generatePiano();
