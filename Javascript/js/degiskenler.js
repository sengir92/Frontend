// var serverName = "kodluyoruz.org"
// console.log(serverName)

// let serverName;
// console.log(serverName)
// serverName = "https://kodluyoruz.org"
// console.log(serverName)

// let password = "1234";
// console.log(password)

// let fullName = "Onur Şengir";
// fullName += " Yeni Eklenen Bilgi"
// console.log(fullName + " Test Bilgisi") 

// const SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)

// let price = 100
// let tax = 0.18
// let priceTax = price * tax
// console.log(price, tax, priceTax)

// console.log(Math.floor(1.9)) //Math kütüphanesi kullanarak aşağı yuvarlama

// let stringNumber = "11"
// let newNumber = Number(stringNumber) // string to int
// console.log(newNumber)

// let price = 111
// console.log(typeof(price)) // type of veri tipine öğrenmek için

//Template Literals:

// let username = "Onur"
// const DOMAIN = "kodluyoruz.org"
// let email = username + "@" + DOMAIN

// let info = `
// Merhaba ${username} sitemize hoşgeldin ..
// mail adresin : ${email}
// mail adresinin uzunluğu: ${email.length}
// gunun saat bilgisi: ${new Date().getHours()}
// `

// console.log(info)

//Dom İşlemleri

// let title =document.getElementById('title')
// title.innerHTML = "Degisen Bilgi"
// console.log(title.innerHTML)

// let link = document.querySelector("#kodluyoruzLink")
// link.innerHTML += " degisti"
// link.style.color = "red"

//Promt İşlemleri ile Kullanıcıdan Bilgi Alma

// let fullName = prompt("Lutfen Adinizi Giriniz")
// let greeting = document.querySelector("#greeting")
// greeting.innerHTML = `${greeting.innerHTML} <small style = color:red>${fullName}</small>`

// Liste İşlemleri

// let lastChild = document.querySelector("ul#list>li:last-child")
// console.log(lastChild)

// let ulDom = document.querySelector("ul#list")
// let liDom = document.createElement('li')
// liDom.innerHTML = "Kendi Olsutrdugumuz Oge"

// ulDom.append(liDom) // en sona ekler
// ulDom.prepend(liDom) // en başa ekler

// Doma Class Ekleme Çıkarma
//  let greeting = document.querySelector("#greeting")
// greeting.classList.add("text-primary")
// greeting.classList.remove("text-primary")
// console.log(greeting.classList)

// const SMILE = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
//   <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
// </svg>
// `
// const SAD = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
//   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
//   <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
// </svg>
// `

// let examGrade = prompt("Puani Girin")
// let textInfo;
// let info = document.querySelector("#info")

// if(examGrade >= 0 && examGrade <= 100) {
//     textInfo = SMILE
//     info.classList.add('text-primary')

//     if(examGrade>=90) {
//         textInfo += " AA"
//     } else if (examGrade >=85) {
//         textInfo += " BA"
//     }else if (examGrade >=80) {
//         textInfo += " BB"
//     }else if (examGrade >=75) {
//         textInfo += " CB"
//     }else if (examGrade >=70) {
//         textInfo += " CC"
//     }else if (examGrade >=65) {
//         textInfo += " DC"
//     }else if (examGrade >=60) {
//         textInfo += " DD"
//     }else if (examGrade >=50) {
//         textInfo += " FD"
//     }else if (examGrade <50) {
//         textInfo = `${SAD} FF`

//         info.classList.remove('text-primary')
//         info.classList.add('text-danger')
//     }
// } else {
//     textInfo = "Bilgiler Doğru Değil"
// }

// info.innerHTML = `${textInfo} -> ${examGrade}`

// function greeting(firstName, lastName) {
//     let info = `Merhaba ${firstName} ${lastName}`
//     return info
// }

// let greetingInfo =  greeting("Ad", "Soyad")
// console.log(greetingInfo)

// function domIdWriteInfo(id, info) {
//     let domObject = document.querySelector(`#${id}`)
//     domObject.innerHTML = info
// }

// let htmlInfo = `<span style="color:red"> Color REDDD </span>`

// domIdWriteInfo('greeting', htmlInfo)
// domIdWriteInfo('info', greeting("Lorem", "Ipsum"))

// let counter = 0
// let counterDOM = document.querySelector("#counter")
// let increaseDOM = document.querySelector("#increase")
// let decreaseDOM = document.querySelector("#decrease")


// counterDOM.innerHTML = counter

// increaseDOM.addEventListener("click",clickEvent)
// decreaseDOM.addEventListener("click",clickEvent)

// function clickEvent() {
//     console.log(this.id)
//     if(this.id == "increase") {
//         counterDOM.innerHTML = counter +=1
//     }else {
//         counterDOM.innerHTML = counter -=1
//     }
// }