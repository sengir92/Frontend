let fullName = prompt("Please enter your name")
let nameQuery = document.querySelector("#myName")
nameQuery.innerHTML = `${fullName}`

function updateTime() {
    let element = document.getElementById("myClock");
    let now = new Date();
    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
    let day = days[now.getDay()-1];
    let date = now.toLocaleDateString();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let resultTime = `${day} - ${hour} : ${minute} : ${second} `
    element.innerHTML = resultTime
}
updateTime();
setInterval(updateTime, 1000);