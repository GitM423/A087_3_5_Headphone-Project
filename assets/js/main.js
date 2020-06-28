let subEmail = document.getElementById('sub-email')
let conEmail = document.getElementById('con-email')
let conSubject = document.getElementById('con-subject')
let conForm = document.getElementById('con-form')

function subscribe() {
    console.log("Newsletter subscription email: " + subEmail.value)
    alert("\n You subscribed to our newsletter with the email: \n\n" + subEmail.value)
}

function contact() {
    console.log("Contact email: " + conEmail.value)
    console.log("Contact subject: " + conSubject.value)
    console.log("Contact message: \n " + conForm.value)
    alert("\n The email you contacted us with: \n\n" + conEmail.value +
        "\n\n\n The subject of your message: \n\n" + conSubject.value +
        "\n\n\n The message you sent us: \n\n" + conForm.value)
}

subEmail.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("sub-submit").click()
    }
})
