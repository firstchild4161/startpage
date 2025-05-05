import { links } from "./links2.js";

// for (let category in links) {
//     console.log(`-------------${category}-------------`)
//     for (let link of links[category]) {
//         console.log(`title: ${link.title}\turl: ${link.url}`)
//     }
// }

// create a card element
const createCard = (cardTitle) => {
    const card = document.createElement('div')
    const title = document.createElement('h1')
    
    card.classList.add('card')
    title.classList.add('card-title')
    title.innerText = cardTitle;
    
    card.appendChild(title)
    
    return card;
}

const addLinksToCard = (card, links) => {
    // :param links is an array of objects containing different links (along with their title) of a particular category. 
    let list = document.createElement('ul')
    list.classList.add('links')

    for (let link of links) {
        const listNode = document.createElement('li');
        const linkNode = document.createElement('a');
    
        linkNode.classList.add('link');
        linkNode.href = link.url;
        linkNode.innerText = link.title;
    
        listNode.appendChild(linkNode);
    
        list.appendChild(listNode)
    }
    card.appendChild(list)
    
    return card;
}

const main = () => {
    // go through the links
    // make card for each category
    // populate it with links
    // add the card to the card container. 
    const cardContainer = document.getElementsByClassName('card-container')[0];
    
    for (let category in links) {
        let card = createCard(category);
        addLinksToCard(card, links[category])
        cardContainer.appendChild(card)
    }

}

main()