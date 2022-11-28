const subscribeInput = document.querySelector(".subscribe-input")
const subscribeButton = document.querySelector(".sub-btn")
const showMessage = document.querySelector(".show-message")
const subscribeInputBox = document.querySelector(".subscribe-input-box")

const subscribe = () => {
    subscribeButton.addEventListener("click", (e) => {
        e.preventDefault()
        const email = subscribeInput.value
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z]+(\.[a-z]{2,3})*$/
        if(email.match(mailFormat)) {   
            showMessage.innerHTML = "Thank you for subscribing!"
            subscribeInputBox.style.display = "none"
        } else {
            showMessage.innerHTML = "Please enter a valid email address!"
        }
    })
}

subscribe()