import map from "./img/map.jpg"

export function Contactpage (){
    const content = document.querySelector("#content");
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container"

    // CONTACT TEXT
    const contactText = document.createElement("div");
    contactText.className = "contact-text"
    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "CONTACT US"
    const contactPara = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    const contactNo = document.createElement("h3");
    const linkDiv = document.createElement("div");
    linkDiv.className ="link"
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    const link3 = document.createElement("a");

    span1.textContent = "Lorem ipsum street";
    span2.textContent = "lorem ipsum town"
    span3.textContent = "123434, LI"
    contactNo.textContent = "090-4035-4692"
    link1.href = "#";
    link2.href = "#";
    link3.href = "#";
    link1.textContent = "X"
    link2.textContent = "F"
    link3.textContent = "Y"

    contactPara.appendChild(span1)
    contactPara.appendChild(span2)
    contactPara.appendChild(span3)
    linkDiv.appendChild(link1)
    linkDiv.appendChild(link2)
    linkDiv.appendChild(link3)

    contactText.appendChild(contactHeader)
    contactText.appendChild(contactPara)
    contactText.appendChild(contactNo)
    contactText.appendChild(linkDiv)

    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container"
    const mapImg = document.createElement("img");
    
    mapImg.src = map;

    imgContainer.appendChild(mapImg)

    contactContainer.appendChild(contactText)
    contactContainer.appendChild(imgContainer)
    content.appendChild(contactContainer);
    
}