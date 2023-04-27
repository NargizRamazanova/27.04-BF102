const API_URL = 'https://jsonplaceholder.typicode.com/users';

(async function getData() {
    const row = document.querySelector(".row");
    const select = document.querySelector("select");

    try{
        const res = await fetch(API_URL)
        const data = await res.json()

        data.forEach(element => {
            let newCard = createCard(element);
            row.append(newCard);
        });
    
        select.addEventListener("change", function () {
            row.innerHTML = "";
    
            if (this.value == "id") {
                data.sort((a, b) => a.id - b.id)
                data.forEach(elem => {
                    row.append(createCard(elem))
                })
            } else if (this.value == "username") {
                data.sort((a, b) => a.username.localeCompare(b.username))
                data.forEach(elem => {
                    row.append(createCard(elem))
                })
            } else {
                row.innerHTML = "adam ol"
            }
    
    
        })
    }catch(err){
        console.log(err)
    }

    

})();

// fetch(API_URL)
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data)
//         data.forEach(element => {
//             let newCard = createCard(element);
//             row.append(newCard);
//         });

//         select.addEventListener("change", function(){
//             row.innerHTML = "";

//             if(this.value == "id"){
//                 data.sort((a, b) => a.id - b.id)
//                 data.forEach(elem => {
//                     row.append(createCard(elem))
//                 })
//             }else if(this.value == "username"){
//                 data.sort((a, b)=> a.username.localeCompare(b.username))
//                 data.forEach(elem => {
//                     row.append(createCard(elem))
//                 })
//             }else{
//                 row.innerHTML = "adam ol"
//             }


//         })
//     })





function createCard(user) {
    let col = document.createElement("div");
    col.classList.add("col-3");
    col.classList.add("mb-3");

    let card = document.createElement("div");
    card.classList.add("card");

    let image = document.createElement("img");
    image.setAttribute("src", "https://tse4.mm.bing.net/th?id=OIP._S6CWPvqlA5exNtObCij-QAAAA&pid=Api&P=0");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = `${user.name} - ${user.username}`;

    let companyName = document.createElement("p");
    companyName.classList.add("card-list");
    companyName.innerText = user.company.name;

    let address = document.createElement("p");
    address.classList.add("card-list");
    address.innerText = `${user.address.city} - ${user.address.street}`;

    let phone = document.createElement("p");
    phone.classList.add("card-list");
    phone.innerText = user.phone;

    let email = document.createElement("a");
    email.setAttribute("href", `mailto:${user.email}`);
    email.innerText = user.email;

    cardBody.append(title, companyName, address, phone, email);
    card.append(image, cardBody);
    col.append(card);

    return col;
}

