// document.getElementById("count-people").innerText = 6
let count_people = document.getElementById("count-people")
console.log(count_people)

let count = 0
console.log(count);

function increment() {
    count += 1
    count_people.innerText = count
}

function decrement() {
    count -= 1
    count_people.innerText = count
}

function save() {
    console.log(count)
}

let welcomeEL = document.getElementById("welcome-el")
let uname = "AJ"
let greeting = "Welcome Back Per"

welcome_msg = greeting + ", " + uname
welcomeEL.innerText = welcome_msg

welcomeEL += "👋"