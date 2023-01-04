const predios = [
    {
        id: 'card1',
        type:'House',
        city:'Medellin Colombia',
        imgBackground: './images/PropertyImage.png',
        direccion: 'Barrio el poblado'
    },
    {
        type:'Apartment',
        id: 'card2',
        city:'Los Angeles',
        imgBackground: './images/PropertyImage2.png',
        direccion:'ChinaTown Center'
    },
    {
        type:'House',
        id: 'card3',
        city:'New York',
        imgBackground: './images/PropertyImage3.png',
        direccion:'Street 48 #23B-C'
    },
    {
        type:'House',
        id: 'card4',
        city:'El Cabo',
        imgBackground: "./images/PropertyImage4.png",
        direccion:'Diagonal sexta, via a la playa'
    },
    {
        type:'Apartment',
        id: 'card5',
        city:'Bogotá',
        imgBackground: './images/PropertyImage5.png',
        direccion:'Calle 30 #58C-22'
    },
    {
        type:'Apartment',
        id: 'card6',
        city:'Ciudad de México',
        imgBackground: './images/PropertyImage6.png',
        direccion:'Barrio los Mariachis, Sur'
    }

]
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

const renderCards = () => {
    predios.forEach(predio => {
        containerCards.innerHTML += `
        <main>
        <section class="card" id="${predio.id}">
        <div class="top" style="background-image: url(${predio.imgBackground});">
            <div class="infoTop">
                <p class="infoImg" id="textHouse">${predio.type}</p>
                <p class="infoImg" id="textSale">FOR SALE</p>
            </div>
            <div class="infoPrice">
                <p class="infoImg" id="price"><strong>$320,000.00</strong> </p>
            </div>
        </div>


        <div class="infoBottom">
            <a id="city">${predio.city}</a>
            <p>${predio.direccion}</p>
            <div class="agent">
                <figure class="infoAgent">
                    <img src="./images/agent-1-3-60x60.png" alt="icon" id="agentIcon">
                    <a id="nameAgent"> Hellen Mattis</a>
                </figure>
                <a id="months"> 4 months ago</a>
            </div>
            <div class="iconsBottom">
                <figure>
                    <img src="./images/Area Icon.png" alt="areaIcon">
                    <a><strong>2400</strong> Sq Ft</a>
                </figure>
                <figure class="iconsBottomRight">
                    <img src="./images/Garage Icon.png" alt="garageIcon">
                    <a>2</a>
                    <img src="./images/Bathroom Icon.png" alt="bathroomsIcon" class="iconRight">
                    <a>3</a>
                    <img src="./images/Bedroom Icon.png" alt="bedroomsIcon" class="iconRight">
                    <a>3</a>
                </figure>
            </div>
        </div>



    </section>

        </main>
       
    `

    });
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

renderCards();
renderCardAgent();



const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');
const closeModal = document.querySelector('.modal__close');


card1.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('allModal').innerHTML=`
    <div class="allModal" id="allModal">
                <img src="./images/PropertyImage.png" class="modal__img" id="modal__img">
                <p id="p1Modal">$320,000.00 </p>
                <p id="p2Modal">FOR SALE</p>
                <p id="p3Modal">Medellin Colombia</p>
                <p id="p4Modal">Barrio el Poblado</p>
            </div>`
    modal.classList.add('modal--show');
})

card2.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('allModal').innerHTML=`
    <div class="allModal" id="allModal">
                <img src="./images/PropertyImage2.png" class="modal__img" id="modal__img">
                <p id="p1Modal">$320,000.00 </p>
                <p id="p2Modal">FOR SALE</p>
                <p id="p3Modal">Los Angeles</p>
                <p id="p4Modal">ChinaTown Center</p>
            </div>`
    modal.classList.add('modal--show');
})
card3.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('allModal').innerHTML=`
    <div class="allModal" id="allModal">
                <img src="./images/PropertyImage3.png" class="modal__img" id="modal__img">
                <p id="p1Modal">$320,000.00 </p>
                <p id="p2Modal">FOR SALE</p>
                <p id="p3Modal">New York</p>
                <p id="p4Modal">Street 48 #23B-C</p>
            </div>`
    modal.classList.add('modal--show');
})
card4.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('allModal').innerHTML=`
    <div class="allModal" id="allModal">
                <img src="./images/PropertyImage4.png" class="modal__img" id="modal__img">
                <p id="p1Modal">$320,000.00 </p>
                <p id="p2Modal">FOR SALE</p>
                <p id="p3Modal">El Cabo</p>
                <p id="p4Modal">Diagonal sexta, via a la playa</p>
            </div>`
    modal.classList.add('modal--show');
})
card5.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('allModal').innerHTML=`
    <div class="allModal" id="allModal">
                <img src="./images/PropertyImage5.png" class="modal__img" id="modal__img">
                <p id="p1Modal">$320,000.00 </p>
                <p id="p2Modal">FOR SALE</p>
                <p id="p3Modal">Bogotá</p>
                <p id="p4Modal">Calle 30 #58C-22</p>
            </div>`
    modal.classList.add('modal--show');
})
card6.addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById('allModal').innerHTML=`
    <div class="allModal" id="allModal">
                <img src="./images/PropertyImage6.png" class="modal__img" id="modal__img">
                <p id="p1Modal">$320,000.00 </p>
                <p id="p2Modal">FOR SALE</p>
                <p id="p3Modal">Ciudad de México</p>
                <p id="p4Modal">Barrio los Mariachis, Sur</p>
            </div>`
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
})