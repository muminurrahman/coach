let voice;

function setup() {
  voice = new p5.Speech();
  voice.setLang("en-US");
  voice.setRate(1.0);
  call();
}

function draw() {}

function call() {
  const direction = ["Left", "Right"];
  const boxingMoves = ["Jab", "Cross", "Hook", "Uppercut", "Slip", "Roll", "Horizontal Elbow", "Hook Elbow", "Downward Elbow", "Uppercut Elbow", "Hook Elbow", "Spinning Elbow", "High kick", "Low kick", "Kick", "Teep", "Knee"];

  const sessionDuration = 60 * 1000; // 60 seconds
  const intervalMin = 500; // Minimum interval in milliseconds
  const intervalMax = 3000; // Maximum interval in milliseconds

  const startTime = Date.now();
  let endTime = startTime + sessionDuration;

  const boxingInterval = () => {
    const currentTime = Date.now();
    if (currentTime < endTime) {
      const randomDirection = direction[Math.floor(Math.random() * direction.length)];
      const randomMove = boxingMoves[Math.floor(Math.random() * boxingMoves.length)];
      voice.speak(randomDirection + " " + randomMove);
      console.log(randomDirection + " " + randomMove);

      const randomInterval = Math.random() * (intervalMax - intervalMin) + intervalMin;
      setTimeout(boxingInterval, randomInterval);
    } else {
      console.log("Session complete.");
    }
  };

  // Start the first boxing callout
  boxingInterval();
}
