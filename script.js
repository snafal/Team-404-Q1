document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    let usernameError = document.getElementById("username-error");
    let passwordError = document.getElementById("password-error");
    let confirmPasswordError = document.getElementById("confirm-password-error");
    let successMessage = document.getElementById("signup-success");

    
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMessage.textContent = "";

   
    if (username.length < 8) {
        usernameError.textContent = "Username must be at least 8 characters.";
        return;
    }


    let passwordStrength = checkPasswordStrength(password);
    if (passwordStrength === "weak") {
        passwordError.textContent = "Password must contain uppercase, lowercase, and special characters.";
        return;
    }

   
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return;
    }

    try {
        let response = await fetch("http://localhost:5500/signup", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        let result = await response.json();

        if (response.ok) {
            successMessage.textContent = "Signup successful! Redirecting...";
            setTimeout(() => { window.location.href = "login.html"; }, 2000);
        } else {
            usernameError.textContent = result.message || "Signup failed. Try again.";
        }
    } catch (error) {
        console.error("Signup Error:", error);
        usernameError.textContent = "Server error. Please try again later.";
    }
});


document.getElementById("password").addEventListener("input", function () {
    let strengthBar = document.getElementById("password-strength");
    let strength = checkPasswordStrength(this.value);
    strengthBar.className = strength;
});


function checkPasswordStrength(password) {
    if (password.length >= 6 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[^a-zA-Z0-9]/.test(password)) {
        return "strong";
    } else if (password.length >= 6) {
        return "medium";
    }
    return "weak";
}


const handleSignup = async () => {
    try {
        const response = await fetch("http://localhost:5500/signup", {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: "imasha",
                password: "password123",
            }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            alert("Signup successful!");
        } else {
            alert(data.message || "Signup failed.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Server error. Try again later.");
    }
}; 
