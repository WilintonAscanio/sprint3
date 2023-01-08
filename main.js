let predios = []
const agents = [
    {
        img: './images/agent1.png',
        name: 'JOHN DOE'
    },
    {
        img: './images/agent2.png',
        name: 'JANE DOE'
    },
    {
        img: './images/agent3.png',
        name: 'JOHN DOE'
    }
]

const containerCards = document.getElementById('mainContainer');

const modalContainer = document.getElementById('modal__container')

const cardAgentsCards = document.getElementById('cardAgents');

const nav = document.querySelector('.navBar');

const card = document.getElementById('card');

const modal = document.querySelector('.modal');

const response = fetch('api.json');

const btnProperties = document.getElementById('btn3');

const select1 = document.getElementById('select1');

const select2 = document.getElementById('select2');

const userSearch = document.getElementById('userSearch');

const allProperties = document.getElementById('btnBottom');

const lessProperties = document.getElementById('lessProperties');




userSearch.addEventListener('input', (e) => {
    let arrayFiltered = predios.filter(key => key.place.toLowerCase().startsWith(e.target.value))

    renderCards(arrayFiltered);
})

btnProperties.addEventListener('click', () => {

    if (select1.value == "" || select2.value == "") {

        alert('Seleccione ambas opciones')

    } else {
        let opc1 = select1.value == "1" ? "APARTMENT" : "HOUSE";
        let opc2 = select2.value == "1" ? true : false;

        let arrayFilter = predios.filter(house => house.apartment == opc1 && house.status == opc2);
        renderCards(arrayFilter);
    }

})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.getElementById('navBar').classList.remove('navBarTop');
        document.getElementById('navBar').classList.add('scrol');
    }
    else {
        document.getElementById('navBar').classList.remove('scrol');
        document.getElementById('navBar').classList.add('navBarTop');

    }
});

const renderCards = (predios) => {
    containerCards.innerHTML = "";
    if (predios.length == 0) {
        containerCards.innerHTML = `
        <h1 style ="text-align: center"> Whithout Results</h1>`
    }
    else {
        predios.forEach((predio) => {
            containerCards.innerHTML += `
            <section class="card" id="${predio.id}">
            <div class="top" style="background-image: url(${predio.url});">
                <div class="infoTop">
                    <p class="infoImg" id="textHouse">${predio.apartment}</p>
                    <p class="infoImg ${predio.status ? 'forSale': 'sold'}" id="textSale">${predio.status == true ? 'FOR SALE' : 'SOLD'}</p>
                </div>
                <div class="infoPrice">
                    <p class="infoImg" id="price"><strong>$${predio.priceHouse}</strong> </p>
                </div>
            </div>
            <div class="infoBottom">
                <a id="city">${predio.place}</a>
                <p>${predio.PlaceDescription}</p>
                <div class="agent">
                    <figure class="infoAgent">
                        <img src="./images/agent-1-3-60x60.png" alt="icon" id="agentIcon">
                        <a id="nameAgent">${predio.nameLessee}</a>
                    </figure>
                    <a id="months">${predio.time}</a>
                </div>
                <div class="iconsBottom">
                    <figure>
                        <img src="./images/Area Icon.png" alt="areaIcon">
                        <a><strong>${predio.area}</strong> Sq Ft</a>
                    </figure>
                    <figure class="iconsBottomRight">
                        <img src="./images/Garage Icon.png" alt="garageIcon">
                        <a>${predio.garage}</a>
                        <img src="./images/Bathroom Icon.png" alt="bathroomsIcon" class="iconRight">
                        <a>${predio.bathroom}</a>
                        <img src="./images/Bedroom Icon.png" alt="bedroomsIcon" class="iconRight">
                        <a>${predio.beedroom}</a>
                    </figure>
                </div>
            </div>
        </section>  
        `
        });


    }

}
const renderCardAgent = () => {
    agents.forEach(agent => {
        cardAgentsCards.innerHTML += `
            <div class="cardAgent">
                <figure>
                    <img src="${agent.img}" alt="photoAgent" id="photoAgent">
                </figure>
                <a class="cargo info">Real Estate Broker</a>
                <a class="nameAgent">${agent.name}</a>
                <a class="celAgent info">123 456 7890</a>
                <a class="mailAgent info">agent@gmail.com</a>
                <div class="redes">
                    <a></a>
                    <a></a>
                    <a></a>
                </div>
            </div>
        </section>`

    })
}





response.then((result) => {
    return result.json();
}).then((data) => {
    predios = data;
    let minPredios = predios.slice(0, 6)
    renderCards(minPredios);
})

renderCardAgent();

containerCards.addEventListener('click', (e) => {
    if (e.target.classList.contains('top')) {
        let arrayModal = predios.filter(predio => predio.id == e.path[1].id)
        arrayModal.forEach(e => {
            modalContainer.innerHTML = `
            <div class="allModal" id="allModal">
            <img src="${e.url}" class="modal__img" id="modal__img">
            <p id="p1Modal">$${e.priceHouse} </p>
            <p id="p2Modal">${e.status == true ? 'FOR SALE' : 'SOLD'}</p>
            <p id="p3Modal">${e.place}</p>
            <p id="p4Modal">${e.PlaceDescription}</p>
        </div>
        <div class="rightModal">
            <figure>
                <div>
                    <img src="./images/Area Icon.png" alt="areaIcon">
                    <a><strong>${e.area}</strong> Sq Ft</a>
                </div>
                <div>
                    <img src="./images/Garage Icon.png" alt="garageIcon" class="figureModal">
                    <a>${e.garage}</a>
                </div>
                <div>
                    <img src="./images/Bathroom Icon.png" alt="bathroomsIcon" class="figureModal">
                    <a>${e.bathroom}</a>
                </div>
                <div>
                    <img src="./images/Bedroom Icon.png" alt="bedroomsIcon" class="figureModal">
                    <a>${e.beedroom}</a>
                </div>
            </figure>
            <div class="agentModal">
                <figure class="infoAgentModal">
                    <img src="./images/agent-1-3-60x60.png" alt="icon" id="agentIconModal">
                    <a id="nameAgentModal">${e.nameLessee}</a>
                </figure>
                <a id="monthsModal">${e.time}</a>
            </div>
        </div>
        <a href="#" class="modal__close">Cerrar</a>
    `
            modal.classList.add('modal--show');
        })
    }
})

modalContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('modal__close')) {
        modal.classList.remove('modal--show');
    }
})

allProperties.addEventListener('click', () => {
  renderCards(predios);
  allProperties.classList.add('hidden');
  lessProperties.classList.remove('hidden')

lessProperties.addEventListener('click', () => {
    let minPredios = predios.slice(0, 6)
    renderCards(minPredios);
    allProperties.classList.remove('hidden');
    lessProperties.classList.add('hidden')
  })
})


