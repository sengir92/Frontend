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

// Counter İşlemleri (Fonksiyonlar Bölüm Sonu Egzersizi) ve (Local Storage Bölüm Sonu Egzersizi)

// let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0
// let counterDOM = document.querySelector("#counter")
// let increaseDOM = document.querySelector("#increase")
// let decreaseDOM = document.querySelector("#decrease")

// counterDOM.innerHTML = counter

// increaseDOM.addEventListener("click",clickEvent)
// decreaseDOM.addEventListener("click",clickEvent)

// function clickEvent() {
//     this.id == "increase" ? counter +=1 : counter -=1
//     localStorage.setItem('counter',counter)
//     counterDOM.innerHTML = counter
// }

//Local Storage İşlemleri

// //Kompleks yapıyı Json'la stringe çevirme
// let user = {userName: "onurşengir", isActive: true}
// localStorage.setItem('userInfo',JSON.stringify(user))

// //Stringe döndürülmüş yapıyı tekrar geri alma
// let userInfo = localStorage.getItem("userInfo")
// userInfo = JSON.parse(userInfo)
// console.log(userInfo)

//Form İşlemleri

// let formDom = document.querySelector("#userForm")
// formDom.addEventListener('submit', formSubmit)


// function formSubmit(event) {
//     event.preventDefault() //default işlemi engelleme
//     console.log("islem gerçekleşti")

//     let scoreInputDOM = document.querySelector('#score')
//     console.log(scoreInputDOM.value)
//     localStorage.setItem('score', scoreInputDOM.value)
// }

//Form Bölüm Sonu Egzersizi 

// let userFormDOM = document.querySelector('#userForm')
// userFormDOM.addEventListener('submit', formHandler)
// const alertDOM = document.querySelector('#alert')

// const alertFunction = (title,message, className = "warning") => `
// <div class="alert alert-${className} alert-dismissible fade show" role="alert">
//   <strong>${title}</strong> ${message}
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
// `

// function formHandler(event) {
//     event.preventDefault()
//     const USER_NAME = document.querySelector("#username")
//     const SCORE = document.querySelector("#score")
   
//     if(USER_NAME.value && SCORE.value ) {
//     addItem(USER_NAME.value, SCORE.value) //gönderdikten sonra sıfırladık
//     USER_NAME.value = ""
//     SCORE.value = ""
//     } else {
//         alertDOM.innerHTML = alertFunction(
//             "Head info",
//             "Enter incomplete information",
//             "danger")
//     }
// }

// let userListDOM = document.querySelector('#userList')


// const addItem = (userName, score) => {
//     let liDOM = document.createElement('li')
//     liDOM.innerHTML = `${userName} 
//                     <span class="badge bg-primary rounded-pill">${score} </span>`
//     liDOM.classList.add('list-group-item' , 'd-flex' , 'justify-content-between' , 'align-items-center')
//     userListDOM.append(liDOM)
// }


//Array İşlemleri

// //sona öge eklemek -> push
// items.push(50)
// console.log("50 : " , items)

// //başa öge eklemek -> unshift
// items.unshift(5)
// console.log("5 : " , items)

// //sondaki ögeyi çıkarma -> pop
// let lastItem = items.pop() // son elemani lastItem içerisine ekledik
// console.log(lastItem,items)

// //baştaki ögeyi çıkarma -> shift
// let firstItem = items.shift() // ilk elemani firstItem içerisine ekledik
// console.log(firstItem,items)

// let items = [1, 2, 3, 4, 5]

// let femaleUsers = ["Ayse", "Hulya", "Merve"]
// let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

// items.unshift(femaleUsers)

// items.push(maleUsers)
// console.log(items)

// //Array içinde öge ayırmak ->splice
// let newItems = items.splice(1,5)
// console.log(newItems)

// //indeks bulma
// items.unshift("lorem")
// items.push("ipsum")
// console.log(items.indexOf("ipsum"))

// //Array Kopyalamak ->slice
// let copyItems = items.slice()

// let es6Items = [...items] //es6 ve sonrasinda gelen kopyalama işlemi
// console.log(es6Items)

// //Arrayleri Birleştirme
// let allUsers = [...femaleUsers,...maleUsers] //es6 array birleştirme
// console.log(allUsers)

// let users = maleUsers.concat(femaleUsers) //concat() birleştirme
// console.log(users)


// allUsers.splice(allUsers.length - 1,0,"Melisa") //istediğimiz index bilgisine öge eklemek
// console.log(allUsers)

// //Arrayleri Sıralama

// console.log(allUsers.sort()) //sıralama yapmak için

// console.log(newItems.reverse()) //tersten sıralama yapmak için

// let numbArr = [8, 26, 100 , 4, -10, -1000]
// console.log(numbArr.sort((a,b) => {return a-b})) // sayılar içeren bir arrayde doğru sıralama yapmak için içerdeki fonk. gerekli yoksa olmuyor 


// let userArr = [
//     {id: 2, username : "rainman"},
//     {id: 3, username : "white_pearl"},
//     {id: 1, username : "Excalibur45"}
// ]
// console.log(userArr.sort((a,b) => {return a.id-b.id})) //içerdeki fonk idye göre sıralar
// console.log(userArr.sort((a,b) => {return a.username.localeCompare(b.username)})) //içerdeki. fonk. username göre sıralar

//REDUCE() METHODU -> reduce dizi içindeki her elemanı tek bir sonuç değerine indirger

// let numbers = [1 ,2, 3, 5]
// let total = numbers.reduce(function(acc,number) {return acc+number})
// console.log(total)

// let basket = [
//     {
//         name : "iPhone 8",
//         price: 7000
//     },
//     {
//         name: "Macbook Pro",
//         price: 14000
//     },
//     {
//         name: "Harman/Kardon",
//         price: 2500
//     }
// ]

// let sum = basket.reduce((acc,item) => acc+item.price, 0)
// console.log(sum) 

// let names = ["Tayfun", "Mehmet", "Ahmet", "Gökhan", "Tayfun", "Ahmet", "Tayfun"]
// let countedNames = names.reduce((allNames,name) => {
//         if(name in allNames) {
//             allNames[name]++
//         }else{
//             allNames[name] = 1
//         }
//         return allNames
//     }, {})

//     console.log(countedNames)

//(...) OPERATÖRÜ

// let numbers = [10,20,30,40]
// function add(a,b,c,d) {
//     console.log(a+b+c+d)
// }
// add(...numbers)

//DÖNGÜLER

//FOR DÖNGÜSÜ

// let users = ["Lorem", "Ipsum", "Dolor",]

// const userListDOM  = document.querySelector('#userList')

// for(let index = 0; index<users.length; index++) {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML = users[index]
//     userListDOM.appendChild(liDOM)
// }

//BREAK VE CONTINUE

// const LOREM_LIST = ["lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"]

// let counter = 0

// for(;counter < 10; counter++) {
//     if(counter === 5) {break}
//     console.log(counter)
// }

// for(;counter < 10; counter++) {
//     if(counter === 5) {continue}
//     console.log(counter)
// }

// const UL_DOM = document.querySelector('#userList')

// let index = 0

// for(; index < LOREM_LIST.length;index++) {
//     if(LOREM_LIST[index] === "dolor") {continue}
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }

//FOR EACH

// const PRODUCTS = ["Laptop","Phone","Speaker","PC","Server","Mouse","Keyboard"]

// PRODUCTS.forEach((product,index,array) => console.log(array[index]))

// const userListDOM = document.querySelector('#userList')
// PRODUCTS.forEach((item) => {
//     const liDOM = document.createElement('li')
//     liDOM.innerHTML=item
//     userListDOM.append(liDOM)
// })

//Filter Kullanımı

// const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"]

// const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
// console.log(NEW_PRODUCTS)

// const USERS = [
//     {fullName: "Ayse Sumer", isActive:false},
//     {fullName: "Ahmet Urgan", isActive:true},
//     {fullName: "Asya Basar", isActive:true},
//     {fullName: "Aksel Durmaz", isActive:false}
// ]

// const ACTIVE_USERS = USERS.filter(user => user.isActive)
// console.log(ACTIVE_USERS)

//Map Kullanımı

// const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// const NEW_USERS = USERS.map(user => user.toLowerCase())
// console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item => 
//     {
//         return {userName : item, shortName : `${item[0]}.`,newName :`${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` 
//     }
//     }
// )

// console.log(USERS_OBJ)


//Fetch API
// fetch("settings.json").then(
//     response => {return response.json()}
// ).then(responseJson => {
//     console.log(responseJson)
//     console.log(responseJson.userName)
// })

