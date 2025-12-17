const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// SETUP
// Mostro in pagina le cards dei membri del team
const myOutput = document.querySelector(".team-container");

// Richiamo funzione per far spuntare in pagina le cards membri
teamCards(teamMembers, myOutput);

// Seleziono elementi form
const form = document.getElementById("member-form");
const newName = document.getElementById('name');
const newRole = document.getElementById('role');
const newEmail = document.getElementById('email');
const newImage = document.getElementById('image');


// Evento al submit sul form per aggiungere nuovo membro, richiamando la funzione addMember
form.addEventListener("submit", addMember);


// FUNZIONI

// Funzione per mostrare le cards in pagina
function teamCards(myArray, myOutput) {
  let cards = "";
  // Ciclo l'array dei membri
  for (let i = 0; i < myArray.length; i++) {
    // Estrapolo ogni membro presente nell'array
    const myMember = myArray[i];
    // Ad ogni iterazione aggiungendo la singola card membro all'output da mostrare in pagina
    cards += createCard(myMember);
  }
  // Aggiungo le cards all'output
  myOutput.innerHTML = cards;
};


// Funzione che genera la card
function createCard(member) {
  // Genero l'HTML della singola card
  const card = `<div class="team-card">
                <div class="card-image">
                <img src="${member.img}" alt="${member.name}">
                </div>
                <div class="card-text">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <p class="text-info">${member.email}</p>
               </div>
              </div>`;

  return card;
}


// Funzione per aggiungere una nuova cards all'array
function addMember(event) {
  event.preventDefault();

  // Seleziono i valori degli input
  const name = newName.value;
  const role = newRole.value;
  const email = newEmail.value;
  const img = newImage.value;

  // Creo nuovo oggetto del nuovo membro del team
  const newMember = {
    name,
    role,
    email,
    img
  }

  // Aggiungo il nuovo membro all'array
  teamMembers.push(newMember);

  // Richiamo la funzione per far apparire in pagina l'array con il nuovo membro aggiunto
  teamCards(teamMembers, myOutput);

  // Ripulisco il form dopo l'invio dei dati
  form.reset();

}