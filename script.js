// Updated JavaScript (script.js)
const containerEl = document.getElementById("container");
let selectedRating = "";

// Initialize event listeners
initializeEventListeners();

function initializeEventListeners() {
    const btnEl = document.getElementById("btn");
    const goBackBtnEl = document.getElementById("goBackBtn");

    if (btnEl) {
        btnEl.addEventListener("click", handleSendReviewClick);
    }

    if (goBackBtnEl) {
        goBackBtnEl.addEventListener("click", goBack);
    }

    const ratingEls = document.querySelectorAll(".rating");
    ratingEls.forEach((ratingEl) => {
        ratingEl.addEventListener("click", handleRatingClick);
    });
}

function handleRatingClick(event) {
    removeActive();
    selectedRating =
        event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
}

function handleSendReviewClick() {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
            <strong>Thank You!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
            <button class="btn" id="goBackBtn">Go Back</button>
        `;
        initializeEventListeners(); // Re-initialize event listeners for new UI
    }
}

function goBack() {
    resetFeedbackUI();
    initializeEventListeners();
}

function resetFeedbackUI() {
    containerEl.innerHTML = `
        <h1 class="heading">Feedback UI</h1>
        <div class="ratings-container" id="ratings-container">
            <div class="rating">
                <img src="https://cdn-icons-png.flaticon.com/512/725/725099.png"/>
                <small>Unhappy</small>
            </div>
            <div class="rating">
                <img src="https://cdn-icons-png.flaticon.com/512/725/725085.png"/>
                <small>Neutral</small>
            </div>
            <div class="rating">
                <img src="https://cdn-icons-png.flaticon.com/512/10851/10851235.png"/>
                <small>Happy</small>
            </div>
        </div>
        <button class="btn" id="btn">Send Review</button>
    `;
    selectedRating = "";
    removeActive();
}

function removeActive() {
    const ratingEls = document.querySelectorAll(".rating");
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    });
}
