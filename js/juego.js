// js/juego.js

let categoriasElegidas = [];
let nombresJugadores = ["Jugador 1", "Jugador 2", "Jugador 3"];

try {
    const catGuardadas = JSON.parse(localStorage.getItem('impostor_categorias'));
    if (Array.isArray(catGuardadas)) categoriasElegidas = catGuardadas;
} catch (e) { console.error("Error leyendo categorias", e); }

try {
    const jugGuardados = JSON.parse(localStorage.getItem('impostor_jugadores'));
    if (Array.isArray(jugGuardados)) nombresJugadores = jugGuardados;
} catch (e) { console.error("Error leyendo jugadores", e); }

// Filtrar categorías que ya no existen en la base de datos
if (typeof baseDeDatosPalabras !== 'undefined') {
    categoriasElegidas = categoriasElegidas.filter(cat => baseDeDatosPalabras.hasOwnProperty(cat));
}

let rolesAsignados = [];
let palabraSecretaDelJuego = "";
let pistaImpostorDelJuego = "";
let usarPistaDelJuego = false;
let jugadorActual = 0;
let totalJugadoresSorteo = 0;
let intervaloCronometro = null;
let tarjetaBloqueada = false;

// ==========================================
// SISTEMA TOAST
// ==========================================
function mostrarToast(mensaje, tipo = "info", duracion = 3000) {
    const contenedor = document.getElementById('contenedor-toast');
    if (!contenedor) return alert(mensaje);

    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${tipo}`);
    toast.innerText = mensaje;
    contenedor.appendChild(toast);

    toast.offsetHeight; 
    toast.classList.add('toast-visible');

    setTimeout(() => {
        toast.classList.remove('toast-visible');
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, duracion);
}

// ==========================================
// NAVEGACIÓN
// ==========================================
function cambiarPantalla(idActual, idNueva) {
    document.getElementById(idActual).classList.remove('activa');
    document.getElementById(idActual).classList.add('oculta');
    
    document.getElementById(idNueva).classList.remove('oculta');
    document.getElementById(idNueva).classList.add('activa');
}

// ==========================================
// LÓGICA DE JUGADORES
// ==========================================
function renderizarJugadores() {
    const contenedor = document.getElementById('lista-jugadores');
    contenedor.innerHTML = "";
    
    nombresJugadores.forEach((nombre, index) => {
        const div = document.createElement('div');
        div.className = 'item-jugador';
        
        const span = document.createElement('span');
        span.textContent = `${index + 1}. ${nombre}`;
        
        const btn = document.createElement('button');
        btn.className = 'btn-eliminar';
        btn.onclick = () => eliminarJugador(index);
        btn.innerHTML = `<i data-lucide="trash-2" style="width: 18px; height: 18px;"></i>`;
        
        div.appendChild(span);
        div.appendChild(btn);
        contenedor.appendChild(div);
    });
    
    const maxImpostores = Math.floor(nombresJugadores.length / 2);
    const inputImpostores = document.getElementById('rango-impostores');
    inputImpostores.max = maxImpostores < 1 ? 1 : maxImpostores;
    
    if (parseInt(inputImpostores.value) > parseInt(inputImpostores.max)) {
        inputImpostores.value = inputImpostores.max;
    }
    actualizarRangoImpostores();
    lucide.createIcons();
}

function agregarJugador() {
    const input = document.getElementById('input-nuevo-jugador');
    const nombre = input.value.trim();
    
    if (nombre === "") return mostrarToast("Escribe un nombre válido", "warning");
    if (nombre.length > 15) return mostrarToast("El nombre es muy largo (máx 15 caracteres)", "warning");
    
    const nombreMinusculas = nombre.toLowerCase();
    const existe = nombresJugadores.some(j => j.toLowerCase() === nombreMinusculas);
    if (existe) return mostrarToast("Ese jugador ya existe", "warning");
    
    if (nombresJugadores.length >= 15) return mostrarToast("Máximo 15 jugadores", "warning");
    
    nombresJugadores.push(nombre);
    localStorage.setItem('impostor_jugadores', JSON.stringify(nombresJugadores));
    input.value = "";
    renderizarJugadores();
}

// Permite borrar jugadores de la lista
function eliminarJugador(index) {
    nombresJugadores.splice(index, 1);
    localStorage.setItem('impostor_jugadores', JSON.stringify(nombresJugadores));
    renderizarJugadores();
}

function volverDeJugadores() {
    if (nombresJugadores.length < 3) {
        mostrarToast("Recuerda: Necesitas al menos 3 jugadores para jugar.", "warning");
    }
    document.getElementById('jugadores-seleccionados-texto').innerText = `${nombresJugadores.length} Jugadores listos`;
    cambiarPantalla('pantalla-jugadores', 'pantalla-configuracion');
}

document.getElementById('input-nuevo-jugador').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') agregarJugador();
});

// ==========================================
// RENDER DE CATEGORÍAS
// ==========================================
function cargarCategorias() {
    const contenedor = document.getElementById('lista-categorias');
    contenedor.innerHTML = "";

    if (categoriasElegidas.length === 0 && Object.keys(baseDeDatosPalabras).length > 0) {
        categoriasElegidas.push(Object.keys(baseDeDatosPalabras)[0]);
        localStorage.setItem('impostor_categorias', JSON.stringify(categoriasElegidas));
    }

    for (const nombreCategoria in baseDeDatosPalabras) {
        const datos = baseDeDatosPalabras[nombreCategoria];
        const boton = document.createElement('button');
        boton.className = 'btn-categoria';
        
        if (categoriasElegidas.includes(nombreCategoria)) boton.classList.add('seleccionada');
        
        boton.innerHTML = `
            <i data-lucide="check-circle-2" class="icono-check"></i>
            <i data-lucide="${datos.icono}" class="icono-cat"></i>
            <span class="nombre-cat">${nombreCategoria}</span>
            <span class="contador-cat">${datos.palabras.length} palabras</span>
        `;
        
        boton.onclick = () => {
            boton.classList.toggle('seleccionada');
            if (categoriasElegidas.includes(nombreCategoria)) {
                categoriasElegidas = categoriasElegidas.filter(cat => cat !== nombreCategoria);
            } else {
                categoriasElegidas.push(nombreCategoria);
            }
            localStorage.setItem('impostor_categorias', JSON.stringify(categoriasElegidas));
        };
        contenedor.appendChild(boton);
    }
}

let pantallaAnteriorCategorias = 'pantalla-menu';

function irACategorias(origen) {
    pantallaAnteriorCategorias = origen;
    cambiarPantalla(origen, 'pantalla-categorias');
}

function volverDeCategorias() {
    if (categoriasElegidas.length === 0) return mostrarToast("Debes dejar seleccionada al menos una categoría.", "warning");
    
    if (pantallaAnteriorCategorias === 'pantalla-configuracion') {
        let textoCat = categoriasElegidas.length === 1 ? categoriasElegidas[0] : `${categoriasElegidas.length} categorías mezcladas`;
        document.getElementById('categoria-seleccionada-texto').innerText = textoCat;
    }
    
    cambiarPantalla('pantalla-categorias', pantallaAnteriorCategorias);
}

function irAConfiguracion() {
    if (categoriasElegidas.length === 0) return mostrarToast("Ve a Categorías y selecciona al menos una.", "warning");
    
    let textoCat = categoriasElegidas.length === 1 ? categoriasElegidas[0] : `${categoriasElegidas.length} categorías mezcladas`;
    document.getElementById('categoria-seleccionada-texto').innerText = textoCat;
    document.getElementById('jugadores-seleccionados-texto').innerText = `${nombresJugadores.length} Jugadores listos`;
    
    cambiarPantalla('pantalla-menu', 'pantalla-configuracion');
}

// ==========================================
// CONTROLES
// ==========================================
function actualizarRangoImpostores() {
    document.getElementById('valor-impostores').innerText = document.getElementById('rango-impostores').value;
}
function toggleTiempo() {
    const check = document.getElementById('toggle-tiempo').checked;
    const slider = document.getElementById('contenedor-slider-tiempo');
    if (check) slider.classList.remove('oculta'); else slider.classList.add('oculta');
}
function actualizarRangoTiempo() {
    document.getElementById('valor-tiempo').innerText = document.getElementById('rango-tiempo').value;
}

// ==========================================
// FASE 1: SORTEO LÓGICO MODIFICADA
// ==========================================
function iniciarSorteo(origen = 'pantalla-configuracion') {
    if (categoriasElegidas.length === 0) return mostrarToast("Selecciona al menos una categoría.", "warning");
    if (nombresJugadores.length < 3) return mostrarToast("Necesitas al menos 3 jugadores para empezar.", "warning");

    totalJugadoresSorteo = nombresJugadores.length;
    const numImpostores = parseInt(document.getElementById('rango-impostores').value);
    usarPistaDelJuego = document.getElementById('toggle-pista').checked;

    const catAleatoria = categoriasElegidas[Math.floor(Math.random() * categoriasElegidas.length)];
    const datosCat = baseDeDatosPalabras[catAleatoria];
    palabraSecretaDelJuego = datosCat.palabras[Math.floor(Math.random() * datosCat.palabras.length)];
    pistaImpostorDelJuego = datosCat.pistaImpostor;

    rolesAsignados = Array(totalJugadoresSorteo).fill("Local");
    for (let i = 0; i < numImpostores; i++) {
        rolesAsignados[i] = "Impostor";
    }
    
    // Algoritmo Fisher-Yates para barajar los roles equitativamente
    for (let i = rolesAsignados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rolesAsignados[i], rolesAsignados[j]] = [rolesAsignados[j], rolesAsignados[i]];
    }

    jugadorActual = 0;
    prepararTarjetaOculta();
    
    // ¡Aquí está el truco! Limpia dinámicamente la pantalla que lo llamó
    cambiarPantalla(origen, 'pantalla-roles');
}

// ==========================================
// FASE 2: MOSTRAR ROLES (3D FLIP)
// ==========================================
function prepararTarjetaOculta() {
    tarjetaBloqueada = true;
    document.getElementById('turno-jugador-texto').innerText = `Turno de ${nombresJugadores[jugadorActual]}`;
    document.getElementById('contenedor-tarjeta').classList.remove('volteada');
    document.getElementById('btn-siguiente-jugador').classList.add('oculta');
    
    // Desbloquear la tarjeta después de que termine la animación CSS (600ms)
    setTimeout(() => {
        tarjetaBloqueada = false;
    }, 600);
}

function revelarRol() {
    if (tarjetaBloqueada) return;
    const tarjeta = document.getElementById('contenedor-tarjeta');
    if (tarjeta.classList.contains('volteada')) return;

    const titulo = document.getElementById('rol-titulo');
    const palabra = document.getElementById('rol-palabra');
    const pista = document.getElementById('rol-pista');

    if (rolesAsignados[jugadorActual] === "Impostor") {
        titulo.innerText = "Eres el";
        palabra.innerText = "IMPOSTOR";
        palabra.style.color = "#e74c3c"; 
        if (usarPistaDelJuego) {
            pista.innerText = `Pista: ${pistaImpostorDelJuego}`;
            pista.classList.remove('oculta');
        } else {
            pista.classList.add('oculta');
        }
    } else {
        titulo.innerText = "La palabra es:";
        palabra.innerText = palabraSecretaDelJuego;
        palabra.style.color = "var(--color-primario)"; 
        pista.classList.add('oculta');
    }

    tarjeta.classList.add('volteada');
    
    setTimeout(() => {
        document.getElementById('btn-siguiente-jugador').classList.remove('oculta');
    }, 400);
}

function siguienteTurno() {
    jugadorActual++;
    if (jugadorActual < totalJugadoresSorteo) {
        prepararTarjetaOculta();
    } else {
        iniciarFaseDebate();
    }
}

// ==========================================
// FASE 3: DEBATE Y CRONÓMETRO
// ==========================================
function iniciarFaseDebate() {
    cambiarPantalla('pantalla-roles', 'pantalla-debate');
    const usaTiempo = document.getElementById('toggle-tiempo').checked;
    
    if (usaTiempo) {
        document.getElementById('contenedor-cronometro').classList.remove('oculta');
        document.getElementById('mensaje-debate').innerText = "Encuentren al impostor antes de que acabe el tiempo.";
        const minutos = parseInt(document.getElementById('rango-tiempo').value);
        iniciarCronometro(minutos * 60);
    } else {
        document.getElementById('contenedor-cronometro').classList.add('oculta');
        document.getElementById('mensaje-debate').innerText = "¡Debatan sin límite de tiempo! Elijan quién empieza.";
    }
}

function iniciarCronometro(segundosTotales) {
    let tiempoRestante = segundosTotales;
    const display = document.getElementById('tiempo-display');
    display.style.color = "var(--color-acento)";
    
    const actualizarDisplay = () => {
        let m = Math.floor(tiempoRestante / 60).toString().padStart(2, '0');
        let s = (tiempoRestante % 60).toString().padStart(2, '0');
        display.innerText = `${m}:${s}`;
    };
    
    actualizarDisplay();

    intervaloCronometro = setInterval(() => {
        tiempoRestante--;
        actualizarDisplay();

        if (tiempoRestante <= 10) display.style.color = "#e74c3c";

        if (tiempoRestante <= 0) {
            clearInterval(intervaloCronometro);
            mostrarToast("¡EL TIEMPO SE ACABÓ!", "error", 5000);
        }
    }, 1000);
}

// ==========================================
// FASE 4: FINAL DEL JUEGO (REVELACIÓN EXTENDIDA)
// ==========================================
function finalizarJuego() {
    if (intervaloCronometro) clearInterval(intervaloCronometro);
    
    // 1. Escaneamos los roles para encontrar el o los nombres de los impostores
    let impostoresDeLaRonda = [];
    rolesAsignados.forEach((rol, index) => {
        if (rol === "Impostor") {
            impostoresDeLaRonda.push(nombresJugadores[index]);
        }
    });
    
    // 2. Inyectamos la palabra secreta en la pantalla final
    document.getElementById('palabra-revelada-final').innerText = palabraSecretaDelJuego;
    
    // 3. Formulamos el texto dependiendo de si hay 1 o más impostores configurados
    const contenedorImpostor = document.getElementById('impostor-revelado-final');
    if (impostoresDeLaRonda.length > 1) {
        contenedorImpostor.innerText = `Los impostores eran: ${impostoresDeLaRonda.join(', ')} 🕵️‍♂️`;
    } else {
        contenedorImpostor.innerText = `El impostor era: ${impostoresDeLaRonda[0]} 🕵️‍♂️`;
    }
    
    // 4. Cambiamos a la pantalla de resultados
    cambiarPantalla('pantalla-debate', 'pantalla-final');
}

function volverAlMenuFinal() {
    cambiarPantalla('pantalla-final', 'pantalla-menu');
}

window.onload = () => {
    cargarCategorias();
    renderizarJugadores();
    lucide.createIcons();
};