// Begin Celebration Button

function startCelebration() {

    alert("🎉 Ganpati Bappa Morya! 🙏 Welcome to Ganpati Utsav 2026!");

}


// Modak Recipe Button

function showRecipe() {

    let recipe = document.getElementById("recipe");

    if (recipe.style.display === "block") {

        recipe.style.display = "none";

    } else {

        recipe.style.display = "block";

    }

}


// Eco-Friendly Pledge

function takePledge() {

    alert(
        "🌱 Thank you for taking the Green Pledge!\n\n" +
        "I promise to celebrate Ganesh Chaturthi responsibly, " +
        "reduce plastic waste and respect nature. 🌍🙏"
    );

}

