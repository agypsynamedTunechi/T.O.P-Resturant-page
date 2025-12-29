import burgerImg from "./img/burger.png"
import saladImg from "./img/salad.png"
import drinkImg from "./img/coconut-drink.png"

export function MenuPage() {
    const content = document.querySelector("#content")
    const container = document.createElement("div");
    container.className = "container"
    const menuImg = document.createElement("div");
    menuImg.className = "menu-img"

    const burgersDiv = document.createElement("div")
    const burgerIcon = document.createElement("img");
    const burgersText = document.createElement("h2")
    burgerIcon.src = burgerImg;
    burgerIcon.alt = "burger";
    burgersText.textContent = "BURGERS"
    burgersDiv.appendChild(burgerIcon)
    burgersDiv.appendChild(burgersText)

    const saladDiv = document.createElement("div")
    const saladIcon = document.createElement("img");
    const saladText = document.createElement("h2")
    saladIcon.src = saladImg;
    saladIcon.alt = "salad";
    saladText.textContent = "SALADS"
    saladDiv.appendChild(saladIcon)
    saladDiv.appendChild(saladText)

    const drinkDiv = document.createElement("div")
    const drinkIcon = document.createElement("img");
    const drinkText = document.createElement("h2")
    drinkIcon.src = drinkImg;
    drinkIcon.alt = "drink";
    drinkText.textContent = "DRINKS"
    drinkDiv.appendChild(drinkIcon)
    drinkDiv.appendChild(drinkText)

    menuImg.appendChild(burgersDiv);
    menuImg.appendChild(saladDiv);
    menuImg.appendChild(drinkDiv);
    container.appendChild(menuImg)
    content.appendChild(container)


    const menuContainer = document.createElement("div")
    menuContainer.className = "menu-container"
    const menu = document.createElement("div");
    menu.className = "menu";
    const sideA = document.createElement("div");
    sideA.className = "side-a"
    const sideB = document.createElement("div");
    sideB.className = "side-b"
    
    const sideAHeader = document.createElement("h2");
    sideAHeader.textContent = "BEEF BURGERS"
    sideA.appendChild(sideAHeader)

    const div1 = document.createElement("div")
    const namePara1 = document.createElement("p");
    namePara1.textContent = "Classic Beef Cheeseburger"
    const pricePara1 = document.createElement("p");
    pricePara1.textContent = "₦2,800"
    div1.appendChild(namePara1);
    div1.appendChild(pricePara1);
    sideA.appendChild(div1)

     const div2 = document.createElement("div")
    const namePara2 = document.createElement("p");
    namePara2.textContent = "Plain Hamburger"
    const pricePara2 = document.createElement("p");
    pricePara2.textContent = "₦2,500"
    div2.appendChild(namePara2);
    div2.appendChild(pricePara2);
    sideA.appendChild(div2)

     const div3 = document.createElement("div")
    const namePara3 = document.createElement("p");
    namePara3.textContent = "Gourmet Beef Burger"
    const pricePara3 = document.createElement("p");
    pricePara3.textContent = "₦7,800"
    div3.appendChild(namePara3);
    div3.appendChild(pricePara3);
    sideA.appendChild(div3)

     const div4 = document.createElement("div")
    const namePara4 = document.createElement("p");
    namePara4.textContent = "Classic Beef Burger"
    const pricePara4 = document.createElement("p");
    pricePara4.textContent = "₦8,950"
    div4.appendChild(namePara4);
    div4.appendChild(pricePara4);
    sideA.appendChild(div4)

    const div5 = document.createElement("div")
    const namePara5 = document.createElement("p");
    namePara5.textContent = "Bacon-and-Beef Burger"
    const pricePara5 = document.createElement("p");
    pricePara5.textContent = "₦8,950"
    div5.appendChild(namePara5);
    div5.appendChild(pricePara5);
    sideA.appendChild(div5)

     const div6 = document.createElement("div")
    const namePara6 = document.createElement("p");
    namePara6.textContent = "Double-patty Premium Burger (beef)"
    const pricePara6 = document.createElement("p");
    pricePara6.textContent = "₦10,250"
    div6.appendChild(namePara6);
    div6.appendChild(pricePara6);
    sideA.appendChild(div6)

    const div7 = document.createElement("div")
    const namePara7 = document.createElement("p");
    namePara7.textContent = "“American” Double-patty Premium Burger (beef, cheese, deluxe bun)"
    const pricePara7 = document.createElement("p");
    pricePara7.textContent = "₦12,750"
    div7.appendChild(namePara7);
    div7.appendChild(pricePara7);
    sideA.appendChild(div7)

    const div8 = document.createElement("div")
    const namePara8 = document.createElement("p");
    namePara8.textContent = "Spicy / Sauce-topped Beef Burger"
    const pricePara8 = document.createElement("p");
    pricePara8.textContent = "₦13,500"
    div8.appendChild(namePara8);
    div8.appendChild(pricePara8);
    sideA.appendChild(div8)

    const sideBHeader = document.createElement("h2");
    sideBHeader.textContent = "CHICKEN BURGERS"
    sideB.appendChild(sideBHeader)

     const div9 = document.createElement("div")
    const namePara9 = document.createElement("p");
    namePara9.textContent = "Grilled Chicken Burger"
    const pricePara9 = document.createElement("p");
    pricePara9.textContent = "₦11,500"
    div9.appendChild(namePara9);
    div9.appendChild(pricePara9);
    sideB.appendChild(div9)

    const div10 = document.createElement("div")
    const namePara10 = document.createElement("p");
    namePara10.textContent = "Single-patty Chicken Burger"
    const pricePara10 = document.createElement("p");
    pricePara10.textContent = "₦4,500"
    div10.appendChild(namePara10);
    div10.appendChild(pricePara10);
    sideB.appendChild(div10)

    const div11 = document.createElement("div")
    const namePara11 = document.createElement("p");
    namePara11.textContent = "Double-patty Chicken Burger"
    const pricePara11 = document.createElement("p");
    pricePara11.textContent = "₦7,000"
    div11.appendChild(namePara11);
    div11.appendChild(pricePara11);
    sideB.appendChild(div11)
    
    const div12 = document.createElement("div")
    const namePara12 = document.createElement("p");
    namePara12.textContent = "Basic Chicken Burger Meal"
    const pricePara12 = document.createElement("p");
    pricePara12.textContent = "₦3,100"
    div12.appendChild(namePara12);
    div12.appendChild(pricePara12);
    sideB.appendChild(div12)



    menu.appendChild(sideA);
    menu.appendChild(sideB)
    menuContainer.appendChild(menu);
    container.appendChild(menuContainer)

}