function sendMail() {
    emailjs.send("gmail","dionis",{
        from_name: "Anton",
        message: "Make it",
        email_name: "dionismaximus@i.ua",
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}