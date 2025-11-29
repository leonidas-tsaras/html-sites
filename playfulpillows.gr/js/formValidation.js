function validateContactForm(event) {
    event.preventDefault();
    let form = document.querySelector("form#form-contact")
    let par = form.querySelector("p#form-message")

    let fullname = form.querySelector("input[name='fullname']").value.trim()
    if(fullname.length < 5) {
        //alert("oops, full name is not valid, must be at least 5 chars")
        par.textContent = "oops, full name is not valid, must be at least 5 chars"
        return
    }

    let email = form.querySelector("input[name='email']").value.trim()
    const regex = /^(?![_.-])[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)) {
        //alert("oops, email is not valid")
        par.textContent = "oops, email is not valid"
        return
    }

    let subject = form.querySelector("input[name='subject']").value.trim()
    if(subject.length < 3) {
        //alert("oops, subject name is not valid, must be at least 3 chars")
        par.textContent = "oops, subject name is not valid, must be at least 3 chars"
        return
    }

    let message = form.querySelector("textarea[name='message']").value.trim()
    if(message.length < 3) {
        //alert("oops, message name is not valid, must be at least 3 chars")
        par.textContent = "oops, message name is not valid, must be at least 3 chars"
        return
    }

    form.submit();
}