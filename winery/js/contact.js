function formValidation(event) {
    event.preventDefault();
    const form = event.target;

    // check Full Name
    const fullName = form.querySelector("[name='fullName']");
    if (fullName.value.trim() == "") {
        fullName.focus();
        alert("Παρακαλώ συμπληρώστε όνομα");
        return;
    }

    // check e-mail
    const email = form.querySelector("[name='email']");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value.match(emailPattern)) {
        alert("Please enter a valid email address.");
        email.focus();
        return;
    }

    // check subject
    const subject = form.querySelector("[name='subject']");
    if (subject.value.trim() == "") {
        subject.focus();
        alert("Παρακαλώ συμπληρώστε subject");
        return;
    }

    // check message
    const message = form.querySelector("[name='message']");
    if (message.value.trim() == "") {
        message.focus();
        alert("Παρακαλώ συμπληρώστε message");
        return;
    }

    form.submit();
}
