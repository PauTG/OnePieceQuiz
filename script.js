const questions = [
    {
        question: "¿Qué hacés cuando te enojas?",
        options: [
            { text: "Grito y choco con la acción sin pensarlo dos veces", character: "Luffy" },
            { text: "Pienso en alguna estrategia para que las cosas salgan como espero", character: "Nami" },
            { text: "Defiendo a mis amigos con todo lo que tengo, incluso si tengo que arriesgar mi vida", character: "Zoro" },
            { text: "Pongo la mente en otra, cosas como cocinar me ayudan a descomprimir", character: "Sanji" },
            { text: "Me escondo y espero a que todo pase, pero estoy listo para ayudar si lo necesitan", character: "Chopper" },
            { text: "Hago una broma o una canción para descomprimir el ambiente", character: "Brook" },
            { text: "Me conservo en calma y observo bien antes de tomar una decisión", character: "Robin" },
            { text: "Directamente pongo la cabeza en otra cosa para liberar la tensión", character: "Franky" },
            { text: "Busco alguna forma creativa de canalizar mi enojo y animar a los demás", character: "Usopp" }
        ]
    },
    {
        question: "¿Cómo te relajas después de un día largo?",
        options: [
            { text: "Como mi comida favorita hasta no dar más", character: "Luffy" },
            { text: "Tomo un baño caliente y disfruto del momento", character: "Nami" },
            { text: "Me pongo a entrenar o a meditar", character: "Zoro" },
            { text: "Preparo una comida que me guste mucho", character: "Sanji" },
            { text: "Me acurruco en un lugar cómodo y descanso", character: "Chopper" },
            { text: "Me refugio en la música que me ayuda a descomprimir", character: "Brook" },
            { text: "Me pongo a leer en un lugar tranquilo", character: "Robin" },
            { text: "Me entretengo pensando en las cosas que me gusta hacer", character: "Franky" },
            { text: "Recuento alguno de mis recuerdos para relajarme", character: "Usopp" }
        ]
    },
    {
        question: "¿Qué tipo de líder serías en un equipo?",
        options: [
            { text: "Inspiro a otros con un increíble entusiasmo y nunca me doy por vencido", character: "Luffy" },
            { text: "Planifico cuidadosamente y me aseguro de que todos sigan el plan", character: "Nami" },
            { text: "Guío con el ejemplo y siempre protejo al equipo", character: "Zoro" },
            { text: "Cuido de todos y me aseguro de que estén bien alimentados", character: "Sanji" },
            { text: "Soy el apoyo emocional del equipo y los mantengo saludables", character: "Chopper" },
            { text: "Mantengo un buen humor y pongo música", character: "Brook" },
            { text: "Investigo y analizo toda la información para tomar decisiones sabias", character: "Robin" },
            { text: "Lidero con creatividad, asegurándome de que todos tengan lo que necesitan para hacer su trabajo", character: "Franky" },
            { text: "Motivo a mi equipo con historias y nunca dejo de animarlos", character: "Usopp" }
        ]
    },
    {
        question: "¿Cuál es tu filosofía de vida?",
        options: [
            { text: "No importa lo difícil que sea, siempre hay que ir para adelante", character: "Luffy" },
            { text: "El dinero y la seguridad son importantes, también los amigos", character: "Nami" },
            { text: "La lealtad y el honor son lo primero, no importa a qué costo", character: "Zoro" },
            { text: "El amor mueve al mundo y hay que protegerlo a toda costa", character: "Sanji" },
            { text: "Hay que ayudar a los demás, especialmente a aquellos que lo necesitan", character: "Chopper" },
            { text: "La vida es un real espectáculo, así que hay que disfrutarlo al máximo", character: "Brook" },
            { text: "El conocimiento es poder, y siempre hay algo nuevo que aprender", character: "Robin" },
            { text: "Ser innovador y hacer cosas “SUPER” es lo que da sentido a la vida", character: "Franky" },
            { text: "La creatividad y el ingenio para enfrentar lo desconocido es lo que nos mueve", character: "Usopp" }
        ]
    },
    {
        question: "¿Cómo enfrentas un desafío?",
        options: [
            { text: "No lo pienso mucho y voy de frente confiando en mi instinto", character: "Luffy" },
            { text: "Analizo bien la situación y busco la manera más eficiente de superarlo", character: "Nami" },
            { text: "Acepto el desafío sin dudar y lo enfrento con toda mi fuerza", character: "Zoro" },
            { text: "Uso mis habilidades para superar el desafío con estilo", character: "Sanji" },
            { text: "Me preocupo un poco al principio, pero luego lo enfrento", character: "Chopper" },
            { text: "Trato de relajarme y ver el lado cómico o artístico de la situación", character: "Brook" },
            { text: "Busco toda la información disponible antes de tomar una decisión", character: "Robin" },
            { text: "Encuentro una solución creativa o invento algo para superar el desafío", character: "Franky" },
            { text: "Me inspiro en encontrar la solución a las cosas", character: "Usopp" }
        ]
    },
    {
        question: "¿Qué tipo de comida preferís?",
        options: [
            { text: "Carne, sobre todos los alimentos", character: "Luffy" },
            { text: "Frutas frescas y platos que sean livianos", character: "Nami" },
            { text: "Platos simples pero llenadores, como el arroz", character: "Zoro" },
            { text: "Comida gourmet y sofisticada", character: "Sanji" },
            { text: "Dulces y golosinas", character: "Chopper" },
            { text: "Algo simple, pero con una buena copa de vino", character: "Brook" },
            { text: "Algo que pueda comer mientras hago cosas, como leer", character: "Robin" },
            { text: "Comida que puedo preparar rápido para seguir haciendo mi trabajo", character: "Franky" },
            { text: "Comida que pueda compartir mientras cuento de momentos de mi vida", character: "Usopp" }
        ]
    },
    {
        question: "¿Cuál de todos estos consideras tu mayor miedo?",
        options: [
            { text: "Perder a mis amigos", character: "Luffy" },
            { text: "Quedarme sin dinero", character: "Nami" },
            { text: "No poder cumplir con mi deber", character: "Zoro" },
            { text: "No poder proteger a quienes amo", character: "Sanji" },
            { text: "No ser lo suficientemente fuerte para ayudar a mis amigos", character: "Chopper" },
            { text: "Quedarme solo de nuevo", character: "Brook" },
            { text: "Que mi pasado me atrape", character: "Robin" },
            { text: "Que mi trabajo no sea suficiente", character: "Franky" },
            { text: "No poder cumplir con mis objetivos", character: "Usopp" }
        ]
    },
    {
        question: "¿Cómo te llevas con los demás?",
        options: [
            { text: "Soy muy sociable y hago amigos fácilmente", character: "Luffy" },
            { text: "Soy amigable pero también soy muy independiente", character: "Nami" },
            { text: "Tengo pocos amigos, pero soy muy leal a ellos", character: "Zoro" },
            { text: "Me encanta cuidar de los demás, especialmente si necesitan ayuda", character: "Sanji" },
            { text: "Soy tímido al principio, pero después me vuelvo muy cercano", character: "Chopper" },
            { text: "Hago amigos a través de la música y el humor", character: "Brook" },
            { text: "Soy reservado, pero muy protector con mis amigos", character: "Robin" },
            { text: "Me llevo bien con todos, me gusta la gente que entiende el humor", character: "Franky" },
            { text: "Soy muy sociable y me gusta compartir mi vida", character: "Usopp" }
        ]
    },
    {
        question: "¿Qué haces en tu tiempo libre?",
        options: [
            { text: "Busco nuevas experiencias", character: "Luffy" },
            { text: "Me relajo y disfruto del día", character: "Nami" },
            { text: "Entreno", character: "Zoro" },
            { text: "Cocino o pienso en qué cocinar a lo largo del día", character: "Sanji" },
            { text: "Estudio medicina y aprendo nuevas técnicas", character: "Chopper" },
            { text: "Compongo música", character: "Brook" },
            { text: "Estudio o leo temas que me interesan", character: "Robin" },
            { text: "Trabajo en nuevos proyectos", character: "Franky" },
            { text: "Contar cosas de mi vida que entretengan a los demás", character: "Usopp" }
        ]
    },
    {
        question: "¿Cuál consideras tu mayor motivación?",
        options: [
            { text: "Intento convertirme en el mejor en lo que hago", character: "Luffy" },
            { text: "Asegurarme de que nunca me falte nada", character: "Nami" },
            { text: "Proteger a mis amigos y cumplir con mi palabra", character: "Zoro" },
            { text: "Hacer feliz a la persona que amo", character: "Sanji" },
            { text: "Ayudar y acompañar a los demás", character: "Chopper" },
            { text: "Recuperar cosas que extraño", character: "Brook" },
            { text: "Descubrir los secretos del mundo", character: "Robin" },
            { text: "Crear algo que me motive", character: "Franky" },
            { text: "Ser reconocido por mi historia de vida", character: "Usopp" }
        ]
    },
    {
        question: "¿Cómo te prepararías para una batalla?",
        options: [
            { text: "Me lanzo de inmediato, confío en mi instinto", character: "Luffy" },
            { text: "Hago un plan y me aseguro de que todos sepan qué hacer", character: "Nami" },
            { text: "Me concentro y me preparo mental y físicamente", character: "Zoro" },
            { text: "Me aseguro de que todos estén bien alimentados y en forma", character: "Sanji" },
            { text: "Preparo medicamentos por si se necesitan", character: "Chopper" },
            { text: "Hago una broma para aliviar la tensión", character: "Brook" },
            { text: "Recojo toda la información posible sobre el enemigo", character: "Robin" },
            { text: "Preparo mis mejores armas y herramientas", character: "Franky" },
            { text: "Planifico una estrategia ingeniosa y me aseguro de tener todo mi plan listo", character: "Usopp" }
        ]
    }
];

let currentQuestionIndex = 0;
let scores = {};

const getElement = (id) => document.getElementById(id);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const characterImages = {
    Luffy: './img/luffyg.gif',
    Nami: './img/nami.gif',
    Zoro: './img/zoro.gif',
    Sanji: './img/sanji.gif',
    Chopper: './img/chopper.gif',
    Brook: './img/brook.gif',
    Robin: './img/robin.gif',
    Franky: './img/franky.gif',
    Usopp: './img/usopp.gif'
};

const characterDescriptions = {
    Luffy: "Para que te toque Luffy tenés que estar un poco demente pero sos un tipazo que persevera por lo que quiere. No importa cuán difícil sea, lo hacés con mucho optimismo",
    Nami: "Para que te toque Nami sos alguien que sabe cómo manejar cada situación muchas situaciones complicadas de la vida. Te gusta tener todo bajo control y siempre estás buscando la mejor manera de conseguir lo que necesitas. Tenés una habilidad especial para resolver problemas y obtener lo que querés",
    Zoro: "Para que te toque Zoro tenés que ser una persona apasionada por las cosas que hace y con un fuerte sentido del honor. Los desafios te parecen una materia interesante de enfrentar. La lealtad y la determinación te caracterizan",
    Sanji: "Para que te toque Sanji tenés que ser una persona que pone a los demás antes que a vos mismo y siempre encuentra alegría en el cuidado de los demás. Sos una persona que siempre busca hacer feliz a los demás, con un toque especial en todo lo que haces",
    Chopper: "Para que te toque Chopper sos un alma amable y preocupada por los demás. Te preocupás profundamente por el bienestar del otro y tenés una capacidad increible para dar apoyo, en todos sus sentidos",
    Brook: "Para que te toque Brook sos una persona que ve la vida con mucho humor y alegría, a los problemas le das la entidad necesaria, no más. Te gusta alegrar el día a los demás y tu actitud positiva destaca entre muchos",
    Robin: "Para que te toque Robin tenés que ser persona que valora mucho el conocimiento y la sabiduría de los demás. Siempre estás buscando aprender más y entender de todo. Tu tranquilidad y tu habilidad para observar y analizar te caracterizan",
    Franky: "Para que te toque Franky tenés que ser una persona creativa y entusiasta por lo que hacés, siempre buscando mejorar las cosas que te rodean. Sos innovador y te encanta trabajar en proyectos que consideres desafiante para tu ingenio",
    Usopp: "Para que te toque Usopp debés ser una persona con una intensa imaginacion y con habilidad de recordar y contar chismes. Sos un increible amigo y aunque ciertas situaciones te den miedo siempre estás dispuesto a hacer lo necesario para ayudar a los demás"
};

function showQuestion() {
    const questionElement = getElement('question');
    const optionsElement = getElement('options');
    
    optionsElement.innerHTML = ''; 
    const buttons = optionsElement.querySelectorAll('.option-button');
    buttons.forEach(button => button.classList.remove('selected')); 
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    shuffleArray(currentQuestion.options);

    currentQuestion.options.forEach(({ text, character }) => {
        const button = document.createElement('button');
        button.innerText = text;
        button.classList.add('option-button');
        button.onclick = () => selectOption(character); 
        optionsElement.appendChild(button);
    });
    
    questionElement.classList.add('fade-in');
    optionsElement.classList.add('fade-in');
    
    setTimeout(() => {
        questionElement.classList.remove('fade-in');
        optionsElement.classList.remove('fade-in');
    }, 500);
}

function selectOption(character) {
    scores[character] = (scores[character] || 0) + 1;
    
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    console.log('showResult() called');

    const resultElement = getElement('result');

    if (Object.keys(scores).length === 0) {
        resultElement.innerHTML = `<p>No has seleccionado ninguna opción.</p>`;
        return;
    }

    const highestScore = Math.max(...Object.values(scores));
    const topCharacters = Object.keys(scores).filter(character => scores[character] === highestScore);
    const character = topCharacters[Math.floor(Math.random() * topCharacters.length)];
    
    console.log(`Highest score: ${highestScore}`);
    console.log(`Top characters: ${topCharacters}`);
    console.log(`Selected character: ${character}`);

    resultElement.innerHTML = `
        <img src="${characterImages[character]}" alt="${character}" style="max-width: 200px; display: block; margin: 0 auto;">
        <div class="text" style="text-align: center; overflow: hidden;">
            <strong>¡Sos ${character} de One Piece!</strong><br>
            <p>${characterDescriptions[character]}</p>
            <button id="restart-btn" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">Volver al inicio</button>
        </div>
    `;
    
    getElement('quiz-container').style.display = 'none';
    resultElement.style.display = 'block';

    const restartButton = getElement('restart-btn');
    restartButton.addEventListener('click', () => {
        resetQuiz();
    });
}


function resetQuiz() {
    scores = {};
    currentQuestionIndex = 0;
    getElement('quiz-container').style.display = 'block';
    getElement('result').innerHTML = '';
    showQuestion();
    
    window.scrollTo(0, 0);
}

const startButton = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const quizContainer = document.getElementById('quiz-container');


function startQuiz() {
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block'; 
    showQuestion();
}

startButton.addEventListener('click', startQuiz);