export function Homepage(){
    const content = document.querySelector("#content");

    const brandName = document.createElement("div");
    const brandNameHeader = document.createElement("h1")
    const brandNamePara = document.createElement("p")
    brandName.className = "brand-name";
    brandNameHeader.textContent = "BURGERS & MORE"
    brandNamePara.textContent = "HEALTHY AND RAW"
    brandName.appendChild(brandNameHeader);
    brandName.appendChild(brandNamePara)
    content.appendChild(brandName)

    const aboutDiv = document.createElement("div");
    const aboutText = document.createElement("div")
    const aboutHeader = document.createElement("h2");
    const aboutPara = document.createElement("p");
    const aboutImg = document.createElement("img");
    aboutDiv.className = "about"
    aboutText.className = "about-text"
    aboutImg.className = "about-img"
    aboutHeader.textContent = "ABOUT US"
    aboutPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illo a dolorum natus, quod voluptas sequi? Natus accusamus maxime consectetur necessitatibus magnam. Dignissimos neque, quia temporibus id quidem ipsum mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure debitis vitae libero esse, vel optio, et illo nihil atque qui minima deleniti? Aliquid laborum ea quisquam delectus iure eius."
    aboutText.appendChild(aboutHeader)
    aboutText.appendChild(aboutPara)
    aboutDiv.appendChild(aboutText)
    aboutDiv.appendChild(aboutImg)
    content.appendChild(aboutDiv)
}

