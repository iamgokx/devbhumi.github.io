// if(window.innerWidth > 1000){
// imgtwo()
// }else{
// imgone()
// }

// function imgone(){
//     document.getElementById('footerimg').setAttribute("src","layered-waves-mobile.svg");

// }

// function imgtwo(){
//     document.getElementById('footerimg').setAttribute("src","layered-waves.svg");

// }

let navbar = document.getElementById('nav')
let navbtn = document.getElementById('navbtn')

flag = 0

function togglenav() {
    if (flag == 0) {
        navbar.style.height = "15rem"
        flag = 1
    } else if (flag == 1) {
        navbar.style.height = "4rem"
        flag = 0
    }
}



let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')
let box4 = document.getElementById('box4')

box1.addEventListener('mouseenter', () => {
    box1.style.scale = "1.1"
})

box1.addEventListener('mouseleave', () => {
    box1.style.scale = "1"
})


box2.addEventListener('mouseenter', () => {
    box2.style.scale = "1.1"
})

box2.addEventListener('mouseleave', () => {
    box2.style.scale = "1"
})

box3.addEventListener('mouseenter', () => {
    box3.style.scale = "1.1"
})

box3.addEventListener('mouseleave', () => {
    box3.style.scale = "1"
})

box4.addEventListener('mouseenter', () => {
    box4.style.scale = "1.1"
})

box4.addEventListener('mouseleave', () => {
    box4.style.scale = "1"
})

let message="Sent successfully"

function sendEmail(){
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "lekhwargokul@gmail.com",
        Password: "4742368EE210B4186663AC03727F709AF887",
        To: 'iamgokx@gmail.com',
        From: "iamgokx@gmail.com",
        Subject: "Subject",
        Body: document.getElementById('message').value
    }).then(
        message => alert(message)
    ).catch(
        alert("Not sent")
    )
}

