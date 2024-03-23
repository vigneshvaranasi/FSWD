// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice face
function updateDice(number) {
    const diceElement = document.getElementById('dice');
    diceElement.textContent = number;
}

// Function to show permission message
function showPermissionMessage() {
    const permissionMessage = document.getElementById('permissionMessage');
    permissionMessage.style.display = 'block';
}

// Shake event initialization
if (window.DeviceMotionEvent) {
    const sensitivity = 25; // Adjust this value to set sensitivity of shake
    let lastAcceleration = { x: null, y: null, z: null };
    let shakeCount = 0;

    // Function to calculate the absolute acceleration
    function calculateAcceleration(acceleration) {
        return Math.sqrt(
            acceleration.x * acceleration.x +
            acceleration.y * acceleration.y +
            acceleration.z * acceleration.z
        );
    }

    // Event listener for device motion
    window.addEventListener('devicemotion', function(e) {
        const acceleration = e.accelerationIncludingGravity;
        const currentAcceleration = calculateAcceleration(acceleration);

        if (lastAcceleration.x !== null) {
            const deltaX = Math.abs(currentAcceleration - lastAcceleration.x);
            const deltaY = Math.abs(currentAcceleration - lastAcceleration.y);
            const deltaZ = Math.abs(currentAcceleration - lastAcceleration.z);
            const maxDelta = Math.max(deltaX, deltaY, deltaZ);

            if (maxDelta > sensitivity) {
                shakeCount++;
                if (shakeCount >= 2) { // Adjust this value to set how many shakes trigger the roll
                    const result = rollDice();
                    updateDice(result);
                    shakeCount = 0;
                }
            }
        }
        lastAcceleration.x = currentAcceleration;
    });
} else {
    // Show permission message if device motion events are not supported
    showPermissionMessage();
}
