function showAlert() {
    const messages = [
        "Thank you for visiting the webpage!",
        "Glad you stopped by!",
        "Your visit made this page brighter!",
        "Thanks for checking out my site!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
