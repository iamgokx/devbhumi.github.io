let navbar = document.getElementById('nav')
let navbtn = document.getElementById('navbtn')

flag = 0

function togglenav() {
    if( flag == 0){
        navbar.style.height = "15rem"
        flag = 1
    }else if(flag == 1){
        navbar.style.height = "4rem"
        flag = 0
    }
}

