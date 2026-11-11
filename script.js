const TEST_DATE = null;

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


function updateCountdown() {
    const now = new Date();

    const elfArrival = new Date(2026, 11, 1);
    const christmasDay = new Date(2026, 11, 25);

    let targetDate;
    let countdownTitle;

    if (now < elfArrival) {
        targetDate = elfArrival;
        countdownTitle = "🧝 The Elf Is Coming in...";
    } else if (now < christmasDay) {
        targetDate = christmasDay;
        countdownTitle = "🎅 Santa Is Coming in...";
    } else {
        targetDate = christmasDay;
        countdownTitle = "🎄 Merry Christmas!";
    }

    const difference = Math.max(0, targetDate - now);

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference / 3600000) % 24);
    const minutes = Math.floor((difference / 60000) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    const titleElement = document.getElementById("countdown-title");

    if (titleElement) {
        titleElement.textContent = countdownTitle;
    }
}


updateCountdown();
setInterval(updateCountdown, 1000);


// ===================================
// POSTALES DEL POLO NORTE
// ===================================

// ===================================
// CALENDARIO DE CARTAS NAVIDEÑAS
// ===================================

const christmasLetters = [
    {
        id: "santa-01",
        sender: "santa",
        date: "2026-11-13",
        title: "Santa's First Secret Mission",
        mission: "The Christmas Voices",
        greeting: "Dear Senior Green,",
        text: `HO HO HO!
Greetings from the North Pole!
Something very exciting is happening in my workshop.
The elves are wrapping presents, the reindeer are practising their flying, and Mrs Claus is baking delicious Christmas cookies!
But I have a little problem...
One of my elves has been behaving very strangely!
Yesterday, I found candy canes in my boots and a rubber duck in my sleigh!
I think he might be planning something...
I have a feeling he might be coming to visit you very soon!
But before that happens, I have a very important xmas mission for you!
I have heard that Senior Green is preparing a wonderful Christmas concert!
And I love Christmas concerts!
Rudolph is so excited that he has been practising his singing all morning!
Unfortunately, he sounds like a squeaky door!
HO HO HO!

Mission numbre 1:

🎄The xmas voices!
I need you to practise your Christmas songs every day! 
sing with your biggest voices, learn all the words and don't forget your lovely smiles! and remember, the most important thing is to try your best and have Fun!
I'll be checking in soon to see how my Christmas helpers are getting on.
And keep your eyes open...
That cheeky elf might be closer than you think!`,
        goodbye: "With lots of Christmas magic,",
        signature: "Santa Claus 🎅"
    },

    {
        id: "elf-01",
        sender: "elf",
        date: "2026-11-17",
        title: "A Secret Message from the Travelling Elf",
        mission: null,
        greeting: "Hellooooo, Senior Green!",
        text: `It's me! Your Christmas Elf!

Guess what? I'm on a SECRET mission!
Santa thinks I'm helping to wrap presents...
But SHHHHH! I'm actually travelling around the world!
I've already seen so much snow that I nearly turned into a snowman!
And yesterday, I accidentally put my hat on a reindeer. He didn't look very happy.
Oopsie!
I'm getting closer to you every day!
THE ELF'S SECRET CHALLENGE!
Can you find out where I've been travelling?
Open my magical map and look for my adventures!
Maybe you can find the places on a big map in your classroom too!
I wonder if you can guess where I'm going next...
Hehehe!
Keep checking my magical map.
You never know where I'll pop up!`,
        goodbye: "Jingle bells and jellybeans!",
        signature: "Your very cheeky Elf 🧝"
    },

    
{
    id: "santa-02",
    sender: "santa",
    date: "2026-11-23",
    title: "Operation: Welcome the Elf!",
    mission: "Welcome the Elf",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
I have some very important news from the North Pole!
Remember that cheeky elf I told you about?
Well, he has disappeared from my workshop!
I found his little suitcase missing, a trail of glitter on the floor and a note that said: "Adventure time!"
I think he might be on his way to Ireland!
But we must make sure he feels welcome when he arrives.

Mission Number 2:
🎄 Operation: Welcome the Elf!
I need you to prepare a special little corner in your classroom for our travelling elf.
You can make Christmas decorations, draw some pictures and create a big "Welcome Elf!" sign!
I wonder what he will think when he sees everything you have made!
Keep checking his travel map. He might be getting closer!
Ho ho ho!`,
    goodbye: "With Christmas magic,",
    signature: "Santa Claus 🎅"
},
{
    id: "elf-02",
    sender: "elf",
    date: "2026-11-30",
    title: "Tomorrow!!!",
    mission: "The Elf Welcome Surprise",
    greeting: "Hellooooo, Senior Green!",
    text: `Guess what? Guess what? Guess what?
I'm coming tomorrow!!!
My suitcase is packed, my hat is ready and I have eaten approximately one million Christmas cookies!
Well... maybe just seven.
I've been travelling for so long, and now I'm almost at your classroom!
I hope Santa hasn't told you about the little accident with the reindeer food...
Oops!

Mission Number 3:
🎄 The Elf Welcome Surprise!
Can you prepare a special welcome surprise for me?
Maybe a beautiful picture, a Christmas song or something magical for my new home!
I can't wait to meet you all!
See you tomorrow!
Hehehe!`,
    goodbye: "Jingle bells and jellybeans!",
    signature: "Your very cheeky Elf 🧝"
},
{
    id: "santa-03",
    sender: "santa",
    date: "2026-12-02",
    title: "Official Elf Arrival Report!",
    mission: "The Elf Classroom Rules",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
I have received some very exciting news!
My travelling elf has finally arrived in Senior Green!
I hope he has been behaving himself.
Although... knowing that little rascal, I wouldn't be too sure!
Yesterday I found a Christmas pudding inside my hat!
I suspect he had something to do with it before leaving.
Now that he is staying in your classroom, I need your help with something very important.

Mission Number 4:
🎄 The Elf Classroom Rules!
Can you think of three special rules for your Christmas elf?
What should he do to be a good classroom visitor?
Make a beautiful poster with your three rules and put it somewhere he can see it.
Let's see if he manages to follow them!
Ho ho ho!`,
    goodbye: "With lots of Christmas magic,",
    signature: "Santa Claus 🎅"
},
{
    id: "santa-04",
    sender: "santa",
    date: "2026-12-04",
    title: "The Christmas Decoration Emergency!",
    mission: "Christmas Concert Decorations",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
We have a Christmas emergency at the North Pole!
The elves have been decorating my workshop, but something has gone terribly wrong!
One elf has covered the Christmas tree in socks!
Another has put a giant bow on Rudolph's antlers!
And someone has decorated my chair with spaghetti!
Oh dear!
I think I need some proper Christmas decoration experts.
And I know exactly where to find them!

Mission Number 5:
🎄 Christmas Concert Decorations!
Your Christmas concert is getting closer!
Can you make some beautiful Christmas decorations to make your classroom look extra magical?
You could create stars, snowflakes, Christmas trees or anything your wonderful imaginations can think of!
I can't wait to hear about your creations!
Ho ho ho!`,
    goodbye: "With Christmas wishes,",
    signature: "Santa Claus 🎅"
},
{
    id: "santa-05",
    sender: "santa",
    date: "2026-12-10",
    title: "The Final Concert Inspection!",
    mission: "The Final Christmas Rehearsal",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
Tomorrow is the big day!
Your Christmas concert is almost here!
Everyone at the North Pole is getting very excited.
Rudolph has been practising his singing again.
Unfortunately, he still sounds like a squeaky door!
But he is trying his very best, and that is what matters.
I have one final concert mission for you!

Mission Number 6:
🎄 The Final Christmas Rehearsal!
Practise your Christmas songs one more time.
Remember the words, use your beautiful singing voices and give everyone your biggest smiles!
But most importantly, have lots and lots of fun!
You have worked so hard, and I am very proud of you.
Tomorrow, let your Christmas magic shine!
Ho ho ho!`,
    goodbye: "Good luck, my little Christmas stars!",
    signature: "Santa Claus 🎅"
},
{
    id: "santa-06",
    sender: "santa",
    date: "2026-12-14",
    title: "A Very Special Visitor...",
    mission: "A Magical Christmas Welcome",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
Greetings from the North Pole!
What a wonderful Christmas concert! I have heard that you have been practising so hard, and I am very proud of you all!
But today, something rather strange has happened in my workshop...
I was getting ready to collect all the Christmas letters when one of my elves came running into my office shouting:
"Santa! Santa! We have a BIG problem!"
Oh dear! What could it be?
Well, it turns out that I have no special mailbox for collecting letters from Senior Green!
How am I going to receive your Christmas wishes?
Rudolph suggested carrying them in his antlers, but I don't think that would work very well!
Ho ho ho!
Luckily, I know some very clever Christmas helpers who could solve this problem!

Mission Number 7:
🎄 The Magical Christmas Mailbox!
I need you to work together to build a very special Christmas mailbox for your classroom!
You can use cardboard, paint, glitter, ribbons or anything else you can find to make it look magical!
Make sure it has a little opening where you can post your letters.
And don't forget to give it a very special Christmas name!
Keep your mailbox safe and ready, because I have a feeling you might need it very soon...
Ho ho ho!`,
    goodbye: "With a little Christmas mystery,",
    signature: "Santa Claus 🎅"
},
{
    id: "santa-07",
    sender: "santa",
    date: "2026-12-17",
    title: "Santa's Christmas Wish List Emergency!",
    mission: "Our Letter to Santa",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
Oh my goodness! Christmas is almost here!
I haven't received your Christmas wish lists yet!

Mission Number 8:
🎄 Our Letter to Santa!
I would love each of you to write or draw a special Christmas letter telling me what you would like for Christmas!

Ho ho ho!`,
    goodbye: "With a sack full of Christmas wishes,",
    signature: "Santa Claus 🎅"
},

{
    id: "santa-08",
    sender: "santa",
    date: "2026-12-21",
    title: "One Last Christmas Mission!",
    mission: "The Christmas Kindness Challenge",
    greeting: "Dear Senior Green,",
    text: `Ho ho ho!
Christmas is nearly here!
The reindeer are getting ready, the presents are being wrapped and Mrs Claus has made enough cookies to feed the entire North Pole!
I have been thinking about all the wonderful things you have done this Christmas.
You have practised your songs, made beautiful decorations and helped welcome our cheeky little elf!
You have been fantastic Christmas helpers!
But there is one last mission I would love you to complete.

Mission Number 9:
🎄 The Christmas Kindness Challenge!
Can you do something kind for someone today?
You could help a friend, share a toy, give someone a lovely compliment or make somebody smile!
Remember, Christmas magic isn't only about presents.
It's also about kindness, friendship and making other people happy!
When you have finished, say together:
"Mission complete, Santa!"
Ho ho ho!`,
    goodbye: "With lots of love and Christmas magic,",
    signature: "Santa Claus 🎅"
},
{
    id: "santa-09",
    sender: "santa",
    date: "2026-12-23",
    title: "Merry Christmas, Senior Green!",
    mission: null,
    greeting: "My wonderful Senior Green friends,",
    text: `Ho ho ho!
Christmas is almost here!
And before the big day arrives, I wanted to send you one very special message.
Thank you for all the wonderful Christmas magic you have shared this year!
You have been amazing singers, brilliant artists, fantastic friends and the most helpful little Christmas team I could ever wish for!
Even my cheeky travelling elf has told me how much fun he has had with you.
Although I think he might have forgotten to mention a few of his naughty adventures!
Ho ho ho!
I am so proud of every single one of you.
You have officially earned a very special title:

🎄 Santa's Super Christmas Helpers! 🎄

Keep being kind, keep helping each other and never stop believing in a little Christmas magic.
I hope you have the most wonderful Christmas filled with laughter, happiness and lovely surprises!
Merry Christmas, Senior Green!`,
    goodbye: "With all my love,",
    signature: "Santa Claus 🎅"
}

];

// ===================================
// CARTAS DISPONIBLES SEGÚN LA FECHA
// ===================================

const LETTER_TEST_DATE = null;

// Para probar una fecha futura:
// const LETTER_TEST_DATE = "2026-12-10";

function getChristmasDate() {

    if (LETTER_TEST_DATE) {
        return LETTER_TEST_DATE;
    }

    const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Dublin",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    const parts = formatter.formatToParts(new Date());

    const year = parts.find(part => part.type === "year").value;
    const month = parts.find(part => part.type === "month").value;
    const day = parts.find(part => part.type === "day").value;

    return `${year}-${month}-${day}`;
}

function getAvailableLetters(sender) {

    const today = getChristmasDate();

    return christmasLetters.filter(letter =>
        letter.sender === sender &&
        letter.date <= today
    );
}


// ===================================
// MAGIC MAILBOX NOTIFICATIONS
// ===================================

function updateMailboxNotifications() {

    ["santa", "elf"].forEach(function (sender) {

        const notification = document.getElementById(
            sender + "-notification"
        );

        if (!notification) return;

        const availableLetters = getAvailableLetters(sender);

        const hasUnreadLetters = availableLetters.some(function (letter) {
            return localStorage.getItem("read-letter-" + letter.id) !== "true";
        });

        notification.hidden = !hasUnreadLetters;
    });
}

// Comprobar novedades al cargar la página
updateMailboxNotifications();


const santaButton = document.getElementById("santa-button");
const elfButton = document.getElementById("elf-button");

const messageOverlay = document.getElementById("message-overlay");
const postcardBody = document.getElementById("postcard-body");
const messageCard = document.querySelector(".message-card");

const letterGreeting = document.getElementById("letter-greeting");
const messageText = document.getElementById("message-text");
const letterGoodbye = document.getElementById("letter-goodbye");
const letterSignature = document.getElementById("letter-signature");

const closeMessageButton = document.getElementById("close-message");

// ===================================
// HISTORIAL Y MISIONES
// ===================================

const letterNavigation = document.getElementById("letter-navigation");
const previousLetterButton = document.getElementById("previous-letter");
const nextLetterButton = document.getElementById("next-letter");
const letterCounter = document.getElementById("letter-counter");

const missionStamp = document.getElementById("mission-stamp");
const missionControls = document.getElementById("mission-controls");
const completeMissionButton = document.getElementById("complete-mission");

let currentLetters = [];
let currentLetterIndex = 0;

function showCurrentLetter() {

    const letter = currentLetters[currentLetterIndex];

    if (!letter) return;

    // Marcar la carta como leída al mostrarla
    localStorage.setItem("read-letter-" + letter.id, "true");
    updateMailboxNotifications();

    const sender = letter.sender;

    // Mantener el diseño de Santa o del elfo
    messageCard.classList.remove("santa-postcard", "elf-postcard");
    messageCard.classList.add(sender + "-postcard");

    postcardBody.classList.remove("santa-letter", "elf-letter");
    postcardBody.classList.add(sender + "-letter");

    // Contenido de la carta
    letterGreeting.textContent = letter.greeting;
    messageText.textContent = letter.text;
    letterGoodbye.textContent = letter.goodbye;
    letterSignature.textContent = letter.signature;

    messageText.style.whiteSpace = "pre-line";

    // Navegación entre cartas
    letterNavigation.hidden = currentLetters.length <= 1;

    letterCounter.textContent =
        `Letter ${currentLetterIndex + 1} of ${currentLetters.length}`;

    previousLetterButton.disabled = currentLetterIndex === 0;
    nextLetterButton.disabled =
        currentLetterIndex === currentLetters.length - 1;

    // Sello y estado de la misión
    const hasMission = Boolean(letter.mission);

    missionStamp.hidden = !hasMission;
    missionControls.hidden = !hasMission;

    if (hasMission) {

        const completedMissions = JSON.parse(
            localStorage.getItem("completedChristmasMissions") || "[]"
        );

        const isCompleted = completedMissions.includes(letter.id);

        missionStamp.textContent = isCompleted
            ? "✓ Mission Complete!"
            : "✦ Official North Pole Mission ✦";

        completeMissionButton.textContent = isCompleted
            ? "✓ Mission Completed"
            : "✓ Mark Mission Complete";

        completeMissionButton.disabled = isCompleted;
    }
}

// Botones Previous y Next
previousLetterButton.addEventListener("click", function () {
    if (currentLetterIndex > 0) {
        currentLetterIndex--;
        showCurrentLetter();
    }
});

nextLetterButton.addEventListener("click", function () {
    if (currentLetterIndex < currentLetters.length - 1) {
        currentLetterIndex++;
        showCurrentLetter();
    }
});

// Completar misión
completeMissionButton.addEventListener("click", function () {

    const letter = currentLetters[currentLetterIndex];

    if (!letter || !letter.mission) {
      return;
    }

    const completedMissions = JSON.parse(
        localStorage.getItem("completedChristmasMissions") || "[]"
    );

    if (!completedMissions.includes(letter.id)) {
        completedMissions.push(letter.id);

        localStorage.setItem(
            "completedChristmasMissions",
            JSON.stringify(completedMissions)
        );
    }

    showCurrentLetter();
});

function openMessage(sender) {

    currentLetters = getAvailableLetters(sender);

    if (currentLetters.length === 0) {
        alert("No letters yet! Keep checking your mailbox!");
        return;
    }

    // Ordenar por fecha y abrir la más reciente
    currentLetters.sort((a, b) => a.date.localeCompare(b.date));
    currentLetterIndex = currentLetters.length - 1;

    showCurrentLetter();

    messageOverlay.hidden = false;
    closeMessageButton.focus();
}

// ===================================
// APERTURA DE SOBRES MÁGICOS
// ===================================

const envelopeOverlay = document.getElementById("envelope-overlay");
const magicEnvelope = document.getElementById("magic-envelope");
const openEnvelopeButton = document.getElementById("open-envelope");
const closeEnvelopeButton = document.getElementById("close-envelope");

let currentSender = null;
let envelopeTimer = null;

function showEnvelope(sender) {
    currentSender = sender;

    envelopeOverlay.classList.remove(
        "santa-envelope",
        "elf-envelope"
    );

    envelopeOverlay.classList.add(sender + "-envelope");

    magicEnvelope.classList.remove("opening");
    openEnvelopeButton.disabled = false;

    envelopeOverlay.hidden = false;
    closeEnvelopeButton.focus();
}

santaButton.addEventListener("click", function () {
    showEnvelope("santa");
});

elfButton.addEventListener("click", function () {
    showEnvelope("elf");
});

openEnvelopeButton.addEventListener("click", function () {
    if (magicEnvelope.classList.contains("opening")) {
        return;
    }

    magicEnvelope.classList.add("opening");
    openEnvelopeButton.disabled = true;

    envelopeTimer = setTimeout(function () {
        envelopeOverlay.hidden = true;
        envelopeTimer = null;
        openMessage(currentSender);
    }, 2300);
});

function closeEnvelope() {
    clearTimeout(envelopeTimer);
    envelopeTimer = null;

    envelopeOverlay.hidden = true;
    magicEnvelope.classList.remove("opening");
    currentSender = null;
}

closeEnvelopeButton.addEventListener("click", closeEnvelope);

envelopeOverlay.addEventListener("click", function (event) {
    if (event.target === envelopeOverlay) {
        closeEnvelope();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !envelopeOverlay.hidden) {
        closeEnvelope();
    }
});


function closeMessage() {
    messageOverlay.hidden = true;
}

closeMessageButton.addEventListener("click", closeMessage);

messageOverlay.addEventListener("click", function (event) {
    if (event.target === messageOverlay) {
        closeMessage();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !messageOverlay.hidden) {
        closeMessage();
    }
});


// ===================================
// NIEVE MÁGICA DEL POLO NORTE
// ===================================

const snowContainer = document.getElementById("snow-container");

const numberOfSnowflakes = 45;

function createSnowflakes() {

    // Evitamos duplicar copitos
    snowContainer.innerHTML = "";

    for (let i = 0; i < numberOfSnowflakes; i++) {

        // Crear un nuevo elemento HTML
        const snowflake = document.createElement("div");

        snowflake.classList.add("snowflake");

        // Tamaño aleatorio entre 2 y 7 píxeles
        const size = Math.random() * 5 + 2;

        // Duración de caída entre 9 y 19 segundos
        const duration = Math.random() * 10 + 9;

        // Posición horizontal aleatoria
        const position = Math.random() * 100;

        // Movimiento lateral
        const drift = Math.random() * 120 - 60;

        // Opacidad aleatoria
        const opacity = Math.random() * 0.5 + 0.3;

        // Retraso negativo para que ya haya nieve
        // distribuida por la pantalla al cargar
        const delay = Math.random() * -20;

        // Aplicar propiedades
        snowflake.style.left = position + "%";

        snowflake.style.setProperty("--size", size + "px");
        snowflake.style.setProperty("--duration", duration + "s");
        snowflake.style.setProperty("--drift", drift + "px");
        snowflake.style.setProperty("--opacity", opacity);
        snowflake.style.setProperty("--delay", delay + "s");

        // Añadir el copito al contenedor
        snowContainer.appendChild(snowflake);
    }
}

// Activar la nieve
if (snowContainer) {
    createSnowflakes();
}
 

/* TRACK THE ELF */

const trackSection = document.getElementById("track-elf");
const closeTrackButton = document.getElementById("close-track");

let elfMap = null;


const elfStops = [
  {
    name: "Lapland, Finland",
    coordinates: [66.5039, 25.7294],
    date: "2026-11-12"
  },
  {
    name: "Norway",
    coordinates: [69.6492, 18.9553],
    date: "2026-11-16"
  },
  {
    name: "Spain",
    coordinates: [40.4168, -3.7038],
    date: "2026-11-27"
  },
  {
    name: "Scotland",
    coordinates: [55.9533, -3.1883],
    date: "2026-11-29"
  },
  {
    name: "Dublin, Ireland",
    coordinates: [53.3498, -6.2603],
    date: "2026-12-01"
  }
];



function initElfMap() {
  if (elfMap) {
    elfMap.remove();
    elfMap = null;
  }

  elfMap = L.map("elf-map").setView([54, 0], 4);

  // Nuestro mapa satelital
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      maxZoom: 18,
      attribution: "Tiles &copy; Esri and its imagery providers"
    }
  ).addTo(elfMap);

  // Fecha actual en Irlanda
  const today = getElfDate();

  ///TEMPORAL
  console.log("Fecha del elfo:", today);
console.log("Paradas:", elfStops);
console.log("Mapa Leaflet:", elfMap);

  const route = elfStops.map(stop => stop.coordinates);

  // Ruta completa pendiente
  L.polyline(route, {
    color: "#ffffff",
    weight: 3,
    dashArray: "6, 10",
    opacity: 0.8
  }).addTo(elfMap);

  // Paradas ya visitadas
  const visitedStops = elfStops.filter(stop => stop.date <= today);

  // Ruta recorrida
  if (visitedStops.length > 1) {
    L.polyline(
      visitedStops.map(stop => stop.coordinates),
      {
        color: "#ffd700",
        weight: 5,
        opacity: 0.95
      }
    ).addTo(elfMap);
  }

  // Marcadores de las paradas
  elfStops.forEach(stop => {
    const visited = stop.date <= today;

    const icon = L.divIcon({
      html: `<span class="map-marker">${visited ? "⭐" : "❓"}</span>`,
      className: "custom-elf-marker",
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });

    
const marker = L.marker(stop.coordinates, { icon }).addTo(elfMap);

if (visited) {
  marker.bindPopup(`
    <strong>${stop.name}</strong><br>
    Click the star to see my adventure! ✨
  `);

  marker.on("click", () => {
    const adventure = elfAdventures.find(
      item => item.date === stop.date
    );

    if (adventure) {
      openElfAdventure(adventure);
    }
  });

} else {
  marker.bindPopup("A secret destination awaits... ✨");
}

  });

  // Posición actual del elfo
  if (visitedStops.length > 0) {
    const currentStop = visitedStops[visitedStops.length - 1];

    
const movingElfIcon = L.divIcon({
  html: '<img src="assets/images/travelling-elf.gif" class="travelling-elf-gif" alt="">',
  className: "custom-elf-marker",
  iconSize: [150, 150],
  iconAnchor: [65, 100]
});


    L.marker(currentStop.coordinates, {
      icon: movingElfIcon,
      zIndexOffset: 1000
    })
      .addTo(elfMap)
      .bindPopup("I'm here! Ho ho ho!");
  }

  elfMap.fitBounds(route, {
    padding: [35, 35]
  });
}

console.log("Mapa del elfo inicializado correctamente");

function openTrackElf() {
  trackSection.hidden = false;

  markMapAsSeen();

  // Dibujar el mapa
  initElfMap();

  // Mostrar las aventuras del diario
  renderElfDiary();

  setTimeout(() => {
    if (elfMap) {
      elfMap.invalidateSize();
      elfMap.fitBounds(
        elfStops.map(stop => stop.coordinates),
        { padding: [35, 35] }
      );
    }
  }, 200);
}



const trackElfButton = document.getElementById("track-elf-button");

trackElfButton.addEventListener("click", openTrackElf);


/* =====================================
   ELF'S TRAVEL DIARY
===================================== */

const elfAdventures = [
  {
    id: "lapland",
    date: "2026-11-12",
    location: "Lapland, Finland",
    title: "My First Adventure!",
    type: "video",
    cover: "assets/images/lapland-cover.png",
    files: [
      "assets/videos/lapland-adventure.mp4"
    ]
  },
  {
    id: "norway",
    date: "2026-11-16",
    location: "Norway",
    title: "A Snowy Surprise!",
    type: "photo",
    cover: "assets/images/norway-cover.png",
    files: [
      "assets/images/norway-adventure.png"
    ]
  },
  {
    id: "spain",
    date: "2026-11-27",
    location: "Spain",
    title: "Three Spanish Adventures!",
    type: "photo",
    cover: "assets/images/spain-cover.png",
    files: [
      "assets/images/spain-ponferrada.png",
      "assets/images/spain-sevilla.png",
      "assets/images/spain-jaen.png"
    ]
  },
  {
    id: "scotland",
    date: "2026-11-29",
    location: "Scotland",
    title: "Almost There!",
    type: "photo",
    cover: "assets/images/scotland-cover.png",
    files: [
      "assets/images/scotland-adventure.png"
    ]
  },


{
  id: "dublin",
  date: "2026-12-01",
  location: "Dublin, Ireland",
  title: "I've Arrived!",
  type: "photo",
  cover: "assets/images/dublin-cover.png",
  files: [
    "assets/images/dublin-adventure.png"
  ]
}

];


function getDublinDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Dublin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}



function getElfDate() {
  return TEST_DATE || getDublinDate();
}


/* =====================================
   ELF MAP & DIARY NOTIFICATIONS
===================================== */

const mapNotification = document.getElementById("map-notification");
const diaryNotification = document.getElementById("diary-notification");

function updateElfNotifications() {

    const today = getElfDate();

    // Destinos nuevos que todavía no se han consultado
    const newDestinations = elfStops.some(stop =>
        stop.date <= today &&
        localStorage.getItem("seen-map-" + stop.date) !== "true"
    );

    // Aventuras nuevas que todavía no se han consultado
    const newAdventures = elfAdventures.some(adventure =>
        adventure.date <= today &&
        localStorage.getItem("seen-diary-" + adventure.id) !== "true"
    );

    if (mapNotification) {
        mapNotification.hidden = !newDestinations;
    }

    if (diaryNotification) {
        diaryNotification.hidden = !newAdventures;
    }
}

function markMapAsSeen() {

    const today = getElfDate();

    elfStops.forEach(stop => {
        if (stop.date <= today) {
            localStorage.setItem("seen-map-" + stop.date, "true");
        }
    });

    updateElfNotifications();
}

function markDiaryAsSeen() {

    const today = getElfDate();

    elfAdventures.forEach(adventure => {
        if (adventure.date <= today) {
            localStorage.setItem(
                "seen-diary-" + adventure.id,
                "true"
            );
        }
    });

    updateElfNotifications();
}

// Comprobar notificaciones al cargar la web
updateElfNotifications();

// Comprobar novedades periódicamente
setInterval(() => {
    updateElfNotifications();
    updateMailboxNotifications();
}, 60000);

// Actualizar también al regresar a la pestaña
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        updateElfNotifications();
        updateMailboxNotifications();
    }
});

function renderElfDiary() {
  const diaryContainer = document.getElementById("elf-diary-entries");

  if (!diaryContainer) return;

  diaryContainer.innerHTML = "";

  const today = getElfDate();

  const unlockedAdventures = elfAdventures.filter(
    adventure => adventure.date <= today
  );

  if (unlockedAdventures.length === 0) {
    diaryContainer.innerHTML = `
      <p class="diary-empty">
        Shhh... The elf's first adventure is coming soon! ✨
      </p>
    `;
    return;
  }

  unlockedAdventures.forEach(adventure => {
    const card = document.createElement("button");

    card.type = "button";
    card.className =
      adventure.type === "video"
        ? "diary-card diary-film"
        : "diary-card diary-polaroid";

    
card.innerHTML = `
  <div class="diary-preview">
    <img
      src="${adventure.cover}"
      alt="${adventure.title}"
      class="diary-cover"
    >

    ${adventure.type === "video"
      ? '<span class="diary-play-icon">▶</span>'
      : ''}
  </div>

  <h4>${adventure.title}</h4>
  <p>${adventure.location}</p>
`;


    card.addEventListener("click", () => {
      openElfAdventure(adventure);
    });

    diaryContainer.appendChild(card);
  });
}


/* OPEN ELF ADVENTURES */

const adventureOverlay = document.getElementById("adventure-overlay");
const adventureTitle = document.getElementById("adventure-title");
const adventureContent = document.getElementById("adventure-content");
const adventureLocation = document.getElementById("adventure-location");
const closeAdventureButton = document.getElementById("close-adventure");

function openElfAdventure(adventure) {

  adventureTitle.textContent = adventure.title;
  adventureLocation.textContent = adventure.location;
  adventureContent.innerHTML = "";

  adventure.files.forEach(file => {
    if (adventure.type === "video") {
      const frame = document.createElement("div");
      frame.className = "adventure-video";

      const video = document.createElement("video");
      video.src = file;
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      frame.appendChild(video);
      adventureContent.appendChild(frame);

    } else {
      const frame = document.createElement("div");
      frame.className = "adventure-photo";

      
      const photo = document.createElement("img");
      photo.src = file;
      photo.alt = adventure.title;
      photo.title = "Click to enlarge";

      photo.addEventListener("click", () => {
        openFullscreenPhoto(file, adventure.title);
      });

      frame.appendChild(photo);

        if (adventure.id === "spain") {
            const cityNames = ["Ponferrada", "Sevilla", "Jaén"];
            const cityName = document.createElement("p");

            cityName.className = "polaroid-city";
            cityName.textContent = cityNames[adventure.files.indexOf(file)];

            frame.appendChild(cityName);
        }

      adventureContent.appendChild(frame);
    }
  });

  adventureOverlay.hidden = false;
  closeAdventureButton.focus();
}

function closeElfAdventure() {
  adventureContent.querySelectorAll("video").forEach(video => {
    video.pause();
  });

  adventureOverlay.hidden = true;
  adventureContent.innerHTML = "";
}

closeAdventureButton.addEventListener("click", closeElfAdventure);

adventureOverlay.addEventListener("click", event => {
  if (event.target === adventureOverlay) {
    closeElfAdventure();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !adventureOverlay.hidden) {
    closeElfAdventure();
  }
});


/* FULLSCREEN PHOTO VIEWER */

const photoViewer = document.getElementById("photo-viewer");
const fullscreenPhoto = document.getElementById("fullscreen-photo");
const closePhotoViewerButton = document.getElementById("close-photo-viewer");

function openFullscreenPhoto(src, alt) {
  fullscreenPhoto.src = src;
  fullscreenPhoto.alt = alt;
  photoViewer.hidden = false;
  closePhotoViewerButton.focus();
}

function closeFullscreenPhoto() {
  photoViewer.hidden = true;
  fullscreenPhoto.removeAttribute("src");
}

closePhotoViewerButton.addEventListener("click", closeFullscreenPhoto);

photoViewer.addEventListener("click", event => {
  if (event.target === photoViewer) {
    closeFullscreenPhoto();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !photoViewer.hidden) {
    closeFullscreenPhoto();
  }
});


// =====================================
// TRACK THE ELF - NAVIGATION BUTTONS
// =====================================

// Botón: ir al diario
const goToDiaryButton = document.getElementById("go-to-diary");

if (goToDiaryButton) {
  goToDiaryButton.addEventListener("click", () => {
    document.getElementById("elf-diary-title").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Botón: volver al Polo Norte
const backToNorthPoleButton = document.getElementById("back-to-north-pole");

if (backToNorthPoleButton) {
  backToNorthPoleButton.addEventListener("click", () => {
    trackSection.hidden = true;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// =====================================
// HOME - ELF'S TRAVEL DIARY
// =====================================

const diaryHomeButton = document.getElementById("diary-home-button");

if (diaryHomeButton) {
  diaryHomeButton.addEventListener("click", () => {
    openTrackElf();
    markDiaryAsSeen();

    setTimeout(() => {
      document.getElementById("elf-diary-title")
        .scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
    }, 250);
  });
}


/* =====================================
   CHRISTMAS CONCERT MODAL
===================================== */

const concertHomeButton = document.getElementById("concert-home-button");
const concertModal = document.getElementById("concert-modal");
const closeConcertModal = document.getElementById("close-concert-modal");

if (concertHomeButton && concertModal && closeConcertModal) {

  // Abrir el cartel
  concertHomeButton.addEventListener("click", () => {
    concertModal.hidden = false;
  });

  // Cerrar con la X
  closeConcertModal.addEventListener("click", () => {
    concertModal.hidden = true;
  });

  // Cerrar pulsando Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      concertModal.hidden = true;
    }
  });
}


/* =====================================
   ELF ARRIVAL SURPRISE
   1 DECEMBER 2026
===================================== */

const elfArrivalModal = document.getElementById("elf-arrival-modal");
const closeElfArrivalButton = document.getElementById("close-elf-arrival");
const findElfButton = document.getElementById("find-elf-button");

const ELF_ARRIVAL_DATE = "2026-12-01";
const ELF_ARRIVAL_SEEN_KEY = "elf-arrival-surprise-seen";

function openElfArrival() {
  if (!elfArrivalModal) return;

  elfArrivalModal.hidden = false;
  closeElfArrivalButton?.focus();
}

function closeElfArrival() {
  if (!elfArrivalModal) return;

  elfArrivalModal.hidden = true;
  localStorage.setItem(ELF_ARRIVAL_SEEN_KEY, "true");
}

function checkElfArrival() {
  const today = getDublinDate();

  if (
    today >= ELF_ARRIVAL_DATE &&
    localStorage.getItem(ELF_ARRIVAL_SEEN_KEY) !== "true"
  ) {
    openElfArrival();
  }
}

closeElfArrivalButton?.addEventListener("click", closeElfArrival);
findElfButton?.addEventListener("click", closeElfArrival);

elfArrivalModal?.addEventListener("click", event => {
  if (event.target === elfArrivalModal) {
    closeElfArrival();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !elfArrivalModal?.hidden) {
    closeElfArrival();
  }
});

/* =====================================
   MAGICAL GIFT - FIRST TEST
===================================== */

const magicGift = document.getElementById("magic-gift");
const openMagicGiftButton = document.getElementById("open-magic-gift");

// Mostrar el regalo a partir del 1 de diciembre
function updateMagicGiftVisibility() {
    if (!magicGift) return;

    const today = getDublinDate();

    magicGift.hidden = today < "2026-12-01";
}

updateMagicGiftVisibility();

// Comprobar la fecha periódicamente
setInterval(updateMagicGiftVisibility, 60000);

// Abrir la sorpresa al pulsar el regalo
openMagicGiftButton?.addEventListener("click", () => {
    openElfArrival();
});