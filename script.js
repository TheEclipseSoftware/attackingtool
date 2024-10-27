document.getElementById("attackButton").addEventListener("click", function() {
    const ipInput = document.getElementById("ipInput").value.trim();
    const selectedCheckboxes = document.querySelectorAll(".attack-checkbox:checked");
    const messageDiv = document.getElementById("message");
    const randomAttacks = ["Spectral Strike", "Cyber Warp", "Nexus Overload", "Dark Pulse", "Storm Surge"];
    let defendedAttacks = new Set();

    // Check if the input is the specific address
    if (ipInput !== "addictivestrikes") {
        alert("Please enter the valid address: addictivestrikes!");
        return;
    }

    if (selectedCheckboxes.length === 0) {
        messageDiv.innerText = "No attack selected!";
        return;
    }

    messageDiv.innerText = "Attacks initiated!";

    // Start defense attempts with random attack messages
    setInterval(() => {
        const randomAttack = randomAttacks[Math.floor(Math.random() * randomAttacks.length)];
        const isDefended = Math.random() < 0.5; // 50% chance of defense

        if (!isDefended) {
            const effectType = Math.floor(Math.random() * 4); // Randomly choose between 4 effects

            // Black screen effect
            if (effectType === 0) {
                const blackScreen = document.createElement("div");
                blackScreen.classList.add("black-screen");
                blackScreen.innerText = "System Malfunction..."; // Updated text
                document.body.appendChild(blackScreen);
                setTimeout(() => blackScreen.remove(), 1000);

            // Full-screen glitch effect
            } else if (effectType === 1) {
                const glitchScreen = document.createElement("div");
                glitchScreen.classList.add("glitch-screen");
                glitchScreen.innerText = `Attack not defended: ${randomAttack}`; // Updated text
                document.body.appendChild(glitchScreen);
                setTimeout(() => glitchScreen.remove(), 500);

            // PC Access Granted/Denied effect
            } else if (effectType === 2) {
                const blackScreen = document.createElement("div");
                blackScreen.classList.add("black-screen");
                const accessMessage = Math.random() < 0.5 ? "Addictive has your PC Access" : "Addictive installing PC Destroyer "; // Random message
                blackScreen.innerText = accessMessage;
                document.body.appendChild(blackScreen);
                setTimeout(() => blackScreen.remove(), 1000);

            // Blur effect across the whole screen
            } else {
                document.body.classList.add("blur-overlay");
                setTimeout(() => document.body.classList.remove("blur-overlay"), 1000);
            }

            messageDiv.innerText = `Attack not defended: ${randomAttack}`;
        } else {
            messageDiv.innerText = `Attack defended: ${randomAttack}`;
        }
    }, 1500);
});
