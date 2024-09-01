const sineCanvas = document.getElementById('sineCanvas');
const noiseCanvas = document.getElementById('noiseCanvas');
const sineCtx = sineCanvas.getContext('2d');
const noiseCtx = noiseCanvas.getContext('2d');

sineCanvas.width = sineCanvas.clientWidth;
sineCanvas.height = sineCanvas.clientHeight;
noiseCanvas.width = noiseCanvas.clientWidth;
noiseCanvas.height = noiseCanvas.clientHeight;

let t = 0;
let amplitude = 75;
let frequency = 0.05;
let speed = 1;

function drawSineWave() {
    sineCtx.clearRect(0, 0, sineCanvas.width, sineCanvas.height);

    sineCtx.beginPath();
    sineCtx.moveTo(0, sineCanvas.height / 2);

    // Algoritmo para representar la onda senoidal
    for (let x = 0; x < sineCanvas.width; x++) {
        const y = sineCanvas.height / 2 + amplitude * Math.sin(frequency * (x + t));
        sineCtx.lineTo(x, y);
    }

    sineCtx.strokeStyle = '#007bff';
    sineCtx.lineWidth = 2;
    sineCtx.stroke();
}

function drawWhiteNoise() {
    noiseCtx.clearRect(0, 0, noiseCanvas.width, noiseCanvas.height);

    noiseCtx.beginPath();
    noiseCtx.moveTo(0, noiseCanvas.height / 2);

    // Algoritmo para representar la onda con ruido blanco
    for (let x = 0; x < noiseCanvas.width; x++) {
        const sineValue = amplitude * Math.sin(frequency * (x + t));
        const noiseValue = (Math.random() - 0.5) * amplitude / 2; // Añadir ruido blanco
        const y = noiseCanvas.height / 2 + sineValue + noiseValue;
        noiseCtx.lineTo(x, y);
    }

    noiseCtx.strokeStyle = '#ff0000';
    noiseCtx.lineWidth = 2;
    noiseCtx.stroke();
}

function animate() {
    drawSineWave();
    drawWhiteNoise();
    t += speed;
    requestAnimationFrame(animate);
}

animate();

const presetValues = {
    "ELF (Extremely Low Frequency): 3 Hz - 30 Hz": { amplitude: 100, frequency: 0.001, speed: 2 },
    "VLF (Very Low Frequency): 30 Hz - 300 Hz": { amplitude: 100, frequency: 0.01, speed: 0.2 },
    "LF (Low Frequency): 300 Hz - 3 kHz": { amplitude: 100, frequency: 0.05, speed: 1 },
    "MF (Medium Frequency): 3 kHz - 30 kHz": { amplitude: 100, frequency: 0.1, speed: 1.5 },
    "HF (High Frequency): 30 kHz - 300 kHz": { amplitude: 100, frequency: 0.2, speed: 2 },
    "VHF (Very High Frequency): 30 MHz - 300 MHz": { amplitude: 100, frequency: 0.5, speed: 2.5 },
    "UHF (Ultra High Frequency): 300 MHz - 3 GHz": { amplitude: 100, frequency: 1, speed: 3 },
    "SHF (Super High Frequency): 3 GHz - 30 GHz": { amplitude: 100, frequency: 2, speed: 3.5 },
    "Infrarrojo: 300 GHz - 400 THz": { amplitude: 100, frequency: 5, speed: 4 },
    "Luz Visible: 400 THz - 800 THz": { amplitude: 100, frequency: 10, speed: 4.5 },
    "Ultravioleta: 800 THz - 30 PHz": { amplitude: 100, frequency: 20, speed: 5 },
    "Rayos X: 30 PHz - 30 EHz": { amplitude: 100, frequency: 50, speed: 5.5 },
    "Rayos Gamma: Más de 30 EHz": { amplitude: 100, frequency: 100, speed: 6 }
};

let lastOpenId = null; 
document.querySelector("nav").addEventListener("click", (f) => {
    if (f.target.tagName == "BUTTON" || f.target.parentElement.tagName == "BUTTON") {
        document.querySelector("nav .active").classList.remove("active");
        const button = f.target.tagName == "BUTTON" ? f.target : f.target.parentElement;
        button.classList.add("active");

        const infoMap = [
            "ELF (Extremely Low Frequency): 3 Hz - 30 Hz",
            "VLF (Very Low Frequency): 30 Hz - 300 Hz",
            "LF (Low Frequency): 300 Hz - 3 kHz",
            "MF (Medium Frequency): 3 kHz - 30 kHz",
            "HF (High Frequency): 30 kHz - 300 kHz",
            "VHF (Very High Frequency): 30 MHz - 300 MHz",
            "UHF (Ultra High Frequency): 300 MHz - 3 GHz",
            "SHF (Super High Frequency): 3 GHz - 30 GHz",
            "Infrarrojo: 300 GHz - 400 THz",
            "Luz Visible: 400 THz - 800 THz",
            "Ultravioleta: 800 THz - 30 PHz",
            "Rayos X: 30 PHz - 30 EHz",
            "Rayos Gamma: Más de 30 EHz"
        ];
    const index = Array.from(document.querySelectorAll("nav button")).indexOf(button);
    const selectedInfo = infoMap[index];
    document.getElementById("info-box").textContent = selectedInfo;
    const preset = presetValues[selectedInfo];
    amplitude = preset.amplitude;
    frequency = preset.frequency;
    speed = preset.speed;
    
    

switch(selectedInfo){
    case "ELF (Extremely Low Frequency): 3 Hz - 30 Hz":
        const elfDetails = document.getElementById("elf-details");
        if (lastOpenId && lastOpenId !== "elf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        elfDetails.open = !elfDetails.open;
        lastOpenId ="elf-details";
        break;
    case "VLF (Very Low Frequency): 30 Hz - 300 Hz":
        const vlfDetails = document.getElementById("vlf-details");
        if (lastOpenId && lastOpenId !== "vlf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        vlfDetails.open = !vlfDetails.open;
        lastOpenId ="vlf-details";
        break;
    case "LF (Low Frequency): 300 Hz - 3 kHz":
        const lfDetails = document.getElementById("lf-details");
        if (lastOpenId && lastOpenId !== "lf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        lfDetails.open = !lfDetails.open;
        lastOpenId ="lf-details";
        break;
    case "MF (Medium Frequency): 3 kHz - 30 kHz":
        const mfDetails = document.getElementById("mf-details");
        if (lastOpenId && lastOpenId !== "mf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        mfDetails.open = !mfDetails.open;
        lastOpenId ="mf-details";
        break;
    case "HF (High Frequency): 30 kHz - 300 kHz":
        const hfDetails = document.getElementById("hf-details");
        if (lastOpenId && lastOpenId !== "hf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        hfDetails.open = !hfDetails.open;
        lastOpenId ="hf-details";
        break;
    case "VHF (Very High Frequency): 30 MHz - 300 MHz":
        const vhfDetails = document.getElementById("vhf-details");
        if (lastOpenId && lastOpenId !== "vhf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        vhfDetails.open = !vhfDetails.open;
        lastOpenId ="vhf-details";
        break;
    case "UHF (Ultra High Frequency): 300 MHz - 3 GHz":
        const uhfDetails = document.getElementById("uhf-details");
        if (lastOpenId && lastOpenId !== "uhf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        uhfDetails.open = !uhfDetails.open;
        lastOpenId ="uhf-details";
        break;
    case "SHF (Super High Frequency): 3 GHz - 30 GHz":
        const shfDetails = document.getElementById("shf-details");
        if (lastOpenId && lastOpenId !== "shf-details") {
            document.getElementById(lastOpenId).open = false;
        }
        shfDetails.open = !shfDetails.open;
        lastOpenId ="shf-details";
        break;
    case "Infrarrojo: 300 GHz - 400 THz":
        const infraredDetails = document.getElementById("infrared-details");
        if (lastOpenId && lastOpenId !== "infrared-details") {
            document.getElementById(lastOpenId).open = false;
        }
        infraredDetails.open = !infraredDetails.open;
        lastOpenId ="infrared-details";
        break;
    case "Luz Visible: 400 THz - 800 THz":
        const visibleLightDetails = document.getElementById("visible-light-details");
        if (lastOpenId && lastOpenId !== "visible-light-details") {
            document.getElementById(lastOpenId).open = false;
        }
        visibleLightDetails.open = !visibleLightDetails.open;
        lastOpenId ="visible-light-details";
        break;
    case "Ultravioleta: 800 THz - 30 PHz":
        const uvDetails = document.getElementById("uv-details");
        if (lastOpenId && lastOpenId !== "uv-details") {
            document.getElementById(lastOpenId).open = false;
        }
        uvDetails.open = !uvDetails.open;
        lastOpenId ="uv-details";
        break;
    case "Rayos X: 30 PHz - 30 EHz":
        const xrayDetails = document.getElementById("xray-details");
        if (lastOpenId && lastOpenId !== "xray-details") {
            document.getElementById(lastOpenId).open = false;
        }
        xrayDetails.open = !xrayDetails.open;
        lastOpenId ="xray-details";
        break;
    case "Rayos Gamma: Más de 30 EHz":
        const gammaDetails = document.getElementById("gamma-details");
        if (lastOpenId && lastOpenId !== "gamma-details") {
            document.getElementById(lastOpenId).open = false;
        }
        gammaDetails.open = !gammaDetails.open;
        lastOpenId ="gamma-details";
        break;
}

    
  }
});

class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector("summary");
    this.content = el.querySelector(".faq-content");
    this.expandIcon = this.summary.querySelector(".expand-icon");
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.summary.addEventListener("click", (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = "hidden";

    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 200,
        easing: "ease-out",
      }
    );

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute("src", "assets/plus.svg");
      return this.onAnimationFinish(false);
    };
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute("src", "assets/plus.svg");
      return (this.isClosing = false);
    };
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;

    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${
      this.summary.offsetHeight + this.content.offsetHeight
    }px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 200,
        easing: "ease-out",
      }
    );

    this.animation.onfinish = () => {
      this.expandIcon.setAttribute("src", "assets/minus.svg");
      return this.onAnimationFinish(true);
    };
    this.animation.oncancel = () => {
      this.expandIcon.setAttribute("src", "assets/minus.svg");
      return (this.isExpanding = false);
    };
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = this.el.style.overflow = "";
  }
}

document.querySelectorAll("details").forEach((el) => {
  new Accordion(el);
});