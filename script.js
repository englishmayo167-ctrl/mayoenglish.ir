function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function googleLogin() {
    document.getElementById("loginMessage").innerText =
        "ورود با Google در مرحله اتصال حساب کاربری فعال می‌شود.";
}

function normalLogin() {
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    if (email === "" || password === "") {
        document.getElementById("loginMessage").innerText =
            "لطفاً ایمیل و رمز عبور را وارد کنید.";
        return;
    }

    document.getElementById("loginMessage").innerText =
        "اطلاعات وارد شد. سیستم احراز هویت در مرحله بعد متصل می‌شود.";
}

window.onclick = function(event) {

    const modal = document.getElementById("loginModal");

    if (event.target === modal) {
        closeLogin();
    }

};
function submitSurvey() {

    const selected = document.querySelector(
        'input[name="survey"]:checked'
    );

    const message = document.getElementById("surveyMessage");

    if (!selected) {

        message.innerText =
            "لطفاً یکی از گزینه‌ها را انتخاب کنید.";

        return;
    }

    message.innerText =
        "ممنون از نظر شما 🌹";

}