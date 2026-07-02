// js/palabras.js

const baseDeDatosPalabras = {
    "Animales": {
        icono: "dog",
        pistaImpostor: "Ser",
        palabras: [
            "Perro", "Gato", "León", "Tigre", "Elefante", "Caballo", "Vaca", "Cerdo", "Oveja", "Cabra",
            "Gallina", "Pato", "Pavo", "Águila", "Halcón", "Búho", "Loro", "Paloma", "Cuervo", "Cisne",
            "Avestruz", "Pingüino", "Delfín", "Ballena", "Tiburón", "Pulpo", "Calamar", "Cangrejo", "Langosta", "Camarón",
            "Medusa", "Estrella de mar", "Tortuga", "Cocodrilo", "Caimán", "Iguana", "Camaleón", "Serpiente", "Rana", "Sapo",
            "Salamandra", "Mosca", "Mosquito", "Abeja", "Avispa", "Hormiga", "Mariposa", "Polilla", "Escarabajo", "Araña",
            "Escorpión", "Ciempiés", "Caracol", "Lombriz", "Oso", "Lobo", "Zorro", "Venado", "Ciervo", "Alce",
            "Jirafa", "Cebra", "Hipopótamo", "Rinoceronte", "Mono", "Gorila", "Chimpancé", "Murciélago", "Ardilla", "Ratón",
            "Rata", "Castor", "Mapache", "Tejón", "Nutria", "Foca", "Morsa", "Pájaro carpintero", "Colibrí", "Pavo real",
            "Flamenco", "Tucán", "Guacamaya", "Ajolote", "Jaguar", "Tlacuache", "Xoloitzcuintle", "Coyote", "Armadillo", "Perezoso"
        ]
    },
    "Frutas": {
        icono: "apple",
        pistaImpostor: "Fruta",
        palabras: [
            "Manzana", "Plátano", "Naranja", "Uva", "Fresa", "Mango", "Piña", "Sandía", "Melón", "Papaya",
            "Limón", "Lima", "Toronja", "Mandarina", "Durazno", "Ciruela", "Cereza", "Pera", "Kiwi", "Coco",
            "Aguacate", "Tomate", "Guayaba", "Tamarindo", "Granada", "Higo", "Frambuesa", "Zarzamora", "Arándano", "Mora",
            "Mamey", "Guanábana", "Zapote", "Pitaya", "Tuna", "Capulín", "Tejocote", "Carambola", "Litchi", "Maracuyá",
            "Chirimoya", "Níspero", "Chabacano", "Mora azul", "Fruta del dragón", "Nectarina", "Uva pasa", "Dátil", "Mandarina", "Tamarindo"
        ]
    },
    "Comida y Bebidas": {
        icono: "utensils",
        pistaImpostor: "Alimento",
        palabras: [
            "Tacos", "Enchiladas", "Pozole", "Tamales", "Chilaquiles", "Quesadillas", "Sopes", "Huaraches", "Gorditas", "Flautas",
            "Tostadas", "Tortas", "Pambazos", "Mole", "Barbacoa", "Carnitas", "Birria", "Menudo", "Pancita", "Cochinita pibil",
            "Ceviche", "Aguachile", "Pescado frito", "Mojarra", "Caldo de res", "Sopa de tortilla", "Sopa de fideo", "Arroz", "Frijoles", "Guacamole",
            "Pico de gallo", "Salsa verde", "Salsa roja", "Chiles rellenos", "Chiles en nogada", "Milanesa", "Carne asada", "Fajitas", "Burritos", "Nachos",
            "Hot dog", "Hamburguesa", "Pizza", "Sushi", "Espagueti", "Lasaña", "Ensalada", "Sándwich", "Pan dulce", "Concha",
            "Bolillo", "Churros", "Flan", "Gelatina", "Arroz con leche", "Pastel", "Helado", "Paleta de hielo", "Cerveza", "Tequila",
            "Mezcal", "Pulque", "Aguas frescas", "Horchata", "Jamaica", "Tamarindo", "Refresco", "Café", "Chocolate", "Atole", "Jugo"
        ]
    },
    "Objetos": {
        icono: "package",
        pistaImpostor: "Cosa",
        palabras: [
            "Silla", "Mesa", "Cama", "Sofá", "Televisión", "Refrigerador", "Estufa", "Microondas", "Licuadora", "Lavadora",
            "Plancha", "Teléfono", "Computadora", "Laptop", "Tablet", "Reloj", "Lentes", "Zapatos", "Tenis", "Calcetines",
            "Pantalon", "Camisa", "Playera", "Chamarra", "Suéter", "Abrigo", "Bufanda", "Guantes", "Sombrero", "Gorra",
            "Bolsa", "Mochila", "Cartera", "Llaves", "Dinero", "Moneda", "Billete", "Tarjeta", "Libro", "Cuaderno",
            "Lápiz", "Pluma", "Goma", "Sacapuntas", "Regla", "Tijeras", "Pegamento", "Espejo", "Peine", "Cepillo",
            "Maquillaje", "Perfume", "Desodorante", "Jabón", "Champú", "Toalla", "Papel de baño", "Cepillo de dientes", "Pasta dental", "Vaso",
            "Taza", "Plato", "Tenedor", "Cuchara", "Cuchillo", "Sartén", "Olla", "Escoba", "Trapeador", "Bote de basura",
            "Martillo", "Desarmador", "Pinzas", "Clavo", "Tornillo", "Foco", "Lámpara", "Vela", "Cerillos", "Encendedor",
            "Batería", "Cargador", "Audífonos", "Bocina", "Control remoto", "Cámara", "Ventilador", "Almohada", "Cobija", "Maceta"
        ]
    },
    "Celebridades": {
        icono: "star",
        pistaImpostor: "Famoso",
        palabras: [
            "Luis Miguel", "Vicente Fernández", "Pedro Infante", "Cantinflas", "Chespirito", "Thalía", "Paulina Rubio", "Salma Hayek", "Gael García", "Diego Luna",
            "Guillermo del Toro", "Alfonso Cuarón", "Alejandro Iñárritu", "Eugenio Derbez", "Juan Gabriel", "Shakira", "Ricky Martin", "Chayanne", "Bad Bunny", "J Balvin",
            "Maluma", "Rosalía", "Karol G", "Peso Pluma", "Christian Nodal", "Ángela Aguilar", "Belinda", "Danna Paola", "Carlos Rivera", "Yuri",
            "Gloria Trevi", "Alejandra Guzmán", "Maná", "Messi", "Cristiano Ronaldo", "Maradona", "Pelé", "Checo Pérez", "Canelo Álvarez", "Julio César Chávez",
            "Hugo Sánchez", "Rafa Márquez", "Chicharito", "Guillermo Ochoa", "Michael Jackson", "Madonna", "Elvis Presley", "The Beatles", "Freddie Mercury", "Justin Bieber",
            "Taylor Swift", "Beyoncé", "Rihanna", "Lady Gaga", "Ariana Grande", "Selena Gomez", "Miley Cyrus", "Leonardo DiCaprio", "Brad Pitt", "Tom Cruise",
            "Johnny Depp", "Will Smith", "Dwayne Johnson", "Chris Hemsworth", "Robert Downey Jr", "Scarlett Johansson", "Jennifer Aniston", "Zendaya", "Tom Holland", "Keanu Reeves"
        ]
    },
    "Ciudades": {
        icono: "building-2",
        pistaImpostor: "Ubicación",
        palabras: [
            "Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Tijuana", "León", "Juárez", "Zapopan", "Nezahualcóyotl", "Chihuahua",
            "Mérida", "Cancún", "Acapulco", "Aguascalientes", "Hermosillo", "Saltillo", "Mexicali", "Culiacán", "Querétaro", "Morelia",
            "Reynosa", "Torreón", "Tuxtla Gutiérrez", "Tlaquepaque", "Toluca", "Veracruz", "Xalapa", "Tepic", "Irapuato", "Cuernavaca",
            "Mazatlán", "Nuevo Laredo", "Celaya", "Ensenada", "Villahermosa", "Tampico", "Pachuca", "Uruapan", "Tehuacán", "Coatzacoalcos",
            "Oaxaca", "Campeche", "La Paz", "Chetumal", "Zacatecas", "Colima", "Tlaxcala", "Guanajuato", "San Miguel de Allende", "Puerto Vallarta",
            "Los Cabos", "Playa del Carmen", "Tulum", "Cozumel", "Nueva York", "Los Ángeles", "Chicago", "Miami", "Houston", "Las Vegas",
            "Orlando", "San Francisco", "Washington", "Londres", "París", "Madrid", "Barcelona", "Roma", "Berlín", "Tokio",
            "Pekín", "Seúl", "Sídney", "Buenos Aires", "São Paulo", "Río de Janeiro", "Bogotá", "Lima", "Santiago", "Caracas"
        ]
    },
    "Países": {
        icono: "globe-2",
        pistaImpostor: "Territorio",
        palabras: [
            "México", "Estados Unidos", "Canadá", "Guatemala", "Belice", "Honduras", "El Salvador", "Nicaragua", "Costa Rica", "Panamá",
            "Cuba", "República Dominicana", "Puerto Rico", "Colombia", "Venezuela", "Ecuador", "Perú", "Bolivia", "Chile", "Argentina",
            "Uruguay", "Paraguay", "Brasil", "España", "Portugal", "Francia", "Italia", "Alemania", "Reino Unido", "Irlanda",
            "Suiza", "Austria", "Bélgica", "Países Bajos", "Suecia", "Noruega", "Dinamarca", "Finlandia", "Rusia", "Polonia",
            "Grecia", "Turquía", "China", "Japón", "Corea del Sur", "India", "Pakistán", "Arabia Saudita", "Israel", "Egipto",
            "Marruecos", "Sudáfrica", "Nigeria", "Australia", "Nueva Zelanda", "Filipinas", "Indonesia", "Tailandia", "Vietnam", "Malasia"
        ]
    },
    "Cuerpo y Salud": {
        icono: "heart-pulse",
        pistaImpostor: "Biología",
        palabras: [
            "Cabeza", "Cabello", "Frente", "Cejas", "Ojos", "Pestañas", "Orejas", "Nariz", "Boca", "Labios",
            "Dientes", "Lengua", "Barbilla", "Mejillas", "Cuello", "Hombros", "Brazos", "Codos", "Muñecas", "Manos",
            "Dedos", "Uñas", "Pecho", "Espalda", "Abdomen", "Ombligo", "Cintura", "Cadera", "Piernas", "Muslos",
            "Rodillas", "Pantorrillas", "Tobillos", "Pies", "Talones", "Piel", "Huesos", "Músculos", "Sangre", "Corazón",
            "Pulmones", "Estómago", "Hígado", "Riñones", "Intestinos", "Cerebro", "Venas", "Salud", "Enfermedad", "Dolor",
            "Fiebre", "Tos", "Resfriado", "Gripe", "Alergia", "Asma", "Infección", "Herida", "Cicatriz", "Moretón",
            "Fractura", "Esguince", "Quemadura", "Mareo", "Náusea", "Diarrea", "Pastilla", "Jarabe", "Inyección", "Vacuna",
            "Termómetro", "Curita", "Venda", "Yeso", "Muletas", "Hospital", "Clínica", "Médico", "Enfermera", "Dentista"
        ]
    },
    "Marcas": {
        icono: "shopping-bag",
        pistaImpostor: "Empresa",
        palabras: [
            "Coca-Cola", "Pepsi", "Bimbo", "Sabritas", "Barcel", "Marinela", "Ricolino", "Gamesa", "Lala", "Alpura",
            "Nestlé", "Danone", "Kellogg's", "Hershey's", "Nutella", "Knorr", "Maggi", "La Costeña", "Herdez", "Jumex",
            "Boing", "Corona", "Victoria", "Modelo", "Tecate", "Indio", "Bacardí", "José Cuervo", "Telcel", "Movistar",
            "AT&T", "Izzi", "Totalplay", "Telmex", "CFE", "Pemex", "Oxxo", "7-Eleven", "Bodega Aurrera", "Walmart",
            "Soriana", "Chedraui", "Liverpool", "Palacio de Hierro", "Sears", "Suburbia", "Coppel", "Elektra", "Nike", "Adidas",
            "Puma", "Reebok", "Vans", "Converse", "Levis", "Zara", "Apple", "Samsung", "Huawei", "Motorola",
            "Xiaomi", "Sony", "LG", "Nintendo", "PlayStation", "Xbox", "Ford", "Chevrolet", "Nissan", "Volkswagen",
            "Toyota", "Honda", "Mazda", "BMW", "Mercedes-Benz", "Uber", "Didi", "Rappi", "Mercado Libre", "Amazon"
        ]
    },
    "Hollywood y Cine": {
        icono: "clapperboard",
        pistaImpostor: "Película",
        palabras: [
            "Actor", "Actriz", "Director", "Productor", "Guionista", "Cámara", "Micrófono", "Claqueta", "Guion", "Escenario",
            "Set", "Estudio", "Iluminación", "Maquillaje", "Vestuario", "Efectos especiales", "CGI", "Doble de riesgo", "Extra", "Protagonista",
            "Antagonista", "Villano", "Héroe", "Audición", "Casting", "Estreno", "Alfombra roja", "Premios Oscar", "Globos de Oro", "Taquilla",
            "Cine", "Pantalla", "Proyector", "Palomitas", "Refresco", "Butaca", "Boleto", "Cartelera", "Tráiler", "Secuela",
            "Precuela", "Trilogía", "Saga", "Franquicia", "Remake", "Reboot", "Spin-off", "Cameo", "Spoiler", "Blockbuster",
            "Animación", "Acción", "Comedia", "Drama", "Terror", "Suspenso", "Romance", "Ciencia ficción", "Fantasía", "Musical",
            "Documental", "Western", "Superhéroes", "Zombies", "Vampiros", "Extraterrestres", "Robots", "Monstruos", "Explosión", "Final feliz"
        ]
    },
    "Juegos": {
        icono: "gamepad-2",
        pistaImpostor: "Entretenimiento",
        palabras: [
            "Mario Bros", "Zelda", "Pokémon", "Minecraft", "Roblox", "Fortnite", "Free Fire", "Call of Duty", "GTA", "FIFA",
            "Madden", "Halo", "Gears of War", "God of War", "Spider-Man", "Resident Evil", "Silent Hill", "Mortal Kombat", "Street Fighter", "Smash Bros",
            "Mario Kart", "Animal Crossing", "Tetris", "Pac-Man", "Sonic", "Crash Bandicoot", "Donkey Kong", "Tomb Raider", "The Last of Us", "Red Dead Redemption",
            "Assassin's Creed", "Far Cry", "Skyrim", "Cyberpunk", "Overwatch", "League of Legends", "Valorant", "Apex Legends", "Among Us", "Fall Guys",
            "Rocket League", "Los Sims", "Age of Empires", "Clash Royale", "Candy Crush", "Angry Birds", "Plantas vs Zombies", "Ajedrez", "Damas", "Dominó",
            "Cartas", "Poker", "Uno", "Monopoly", "Jenga", "Twister", "Turista", "Rompecabezas", "Trompo", "Yoyo",
            "Balero", "Canicas", "Escondidas", "Traes", "Resorte", "Cuerda", "Lotería", "Serpientes y Escaleras", "Bingo", "Ruleta"
        ]
    },
    "Lugares": {
        icono: "map-pin",
        pistaImpostor: "Ubicación",
        palabras: [
            "Escuela", "Hospital", "Policía", "Bomberos", "Banco", "Correos", "Biblioteca", "Museo", "Teatro", "Cine",
            "Restaurante", "Cafetería", "Bar", "Cantina", "Antro", "Parque", "Plaza", "Zócalo", "Iglesia", "Catedral",
            "Mercado", "Tianguis", "Supermercado", "Centro comercial", "Farmacia", "Panadería", "Carnicería", "Tortillería", "Ferretería", "Papelería",
            "Zapatería", "Juguetería", "Peluquería", "Estética", "Gimnasio", "Deportivo", "Alberca", "Estadio", "Arena", "Plaza de toros",
            "Estacionamiento", "Gasolinera", "Taller", "Lavadero", "Fábrica", "Oficina", "Casa", "Departamento", "Edificio", "Rascacielos",
            "Castillo", "Ruinas", "Pirámides", "Playa", "Río", "Lago", "Laguna", "Cascada", "Cenote", "Montaña",
            "Volcán", "Bosque", "Selva", "Desierto", "Cueva", "Isla", "Aeropuerto", "Terminal", "Metro", "Teleférico"
        ]
    },
    "Películas": {
        icono: "film",
        pistaImpostor: "Cine",
        palabras: [
            "Titanic", "Avatar", "Avengers", "Harry Potter", "Star Wars", "Señor de los Anillos", "Jurassic Park", "Spider-Man", "Batman", "Superman",
            "Iron Man", "Capitán América", "Thor", "Hulk", "X-Men", "Deadpool", "Matrix", "Terminator", "Volver al Futuro", "Indiana Jones",
            "E.T.", "Tiburón", "Alien", "Depredador", "Rambo", "Rocky", "Misión Imposible", "Rápido y Furioso", "Transformers", "Piratas del Caribe",
            "Crepúsculo", "Juegos del Hambre", "Shrek", "Toy Story", "Buscando a Nemo", "El Rey León", "Frozen", "Mi Villano Favorito", "Minions", "Intensa Mente",
            "Coco", "Up", "Monsters Inc", "Los Increíbles", "Cars", "Aladdín", "La Bella y la Bestia", "La Sirenita", "Mulán", "Tarzán",
            "Shrek", "El Padrino", "Pulp Fiction", "Forrest Gump", "Gladiador", "Corazón Valiente", "Sexto Sentido", "El Exorcista", "El Resplandor", "El Conjuro",
            "Chicas Pesadas", "Scary Movie", "El Día de la Independencia", "Hombres de Negro", "Godzilla", "King Kong", "John Wick", "Los Juegos del Destino", "Joker", "Barbie"
        ]
    },
    "Anime": {
        icono: "tv",
        pistaImpostor: "Animación",
        palabras: [
            "Dragon Ball", "Naruto", "One Piece", "Bleach", "Death Note", "Attack on Titan", "My Hero Academia", "Demon Slayer", "Jujutsu Kaisen", "Tokyo Ghoul",
            "Fullmetal Alchemist", "Evangelion", "Sailor Moon", "Caballeros del Zodiaco", "Supercampeones", "Ranma 1/2", "Inuyasha", "Yu-Gi-Oh", "Pokémon", "Digimon",
            "Doraemon", "Shin-chan", "Heidi", "Candy Candy", "Mazinger Z", "Astroboy", "Akira", "Cowboy Bebop", "Hunter x Hunter", "Jojo's Bizarre Adventure",
            "Fairy Tail", "Black Clover", "Sword Art Online", "Re:Zero", "Konosuba", "One Punch Man", "Mob Psycho 100", "Spy x Family", "Chainsaw Man", "Dr. Stone",
            "Haikyuu", "Slam Dunk", "Food Wars", "Your Name", "El Viaje de Chihiro", "Mi Vecino Totoro", "Castillo Vagabundo", "Princesa Mononoke", "Ponyo", "Akame Ga Kill"
        ]
    },
    "Profesiones": {
        icono: "briefcase",
        pistaImpostor: "Ocupación",
        palabras: [
            "Médico", "Enfermera", "Dentista", "Veterinario", "Psicólogo", "Abogado", "Juez", "Policía", "Bombero", "Soldado",
            "Piloto", "Azafata", "Marinero", "Chofer", "Mecánico", "Ingeniero", "Arquitecto", "Albañil", "Carpintero", "Plomero",
            "Electricista", "Pintor", "Jardinero", "Conserje", "Cocinero", "Chef", "Mesero", "Barman", "Panadero", "Carnicero",
            "Agricultor", "Ganadero", "Pescador", "Minero", "Cajero", "Vendedor", "Gerente", "Director", "Empresario", "Secretaria",
            "Contador", "Administrador", "Recepcionista", "Programador", "Informático", "Diseñador", "Escultor", "Músico", "Cantante", "Actor",
            "Bailarín", "Escritor", "Periodista", "Reportero", "Fotógrafo", "Locutor", "Profesor", "Maestro", "Científico", "Investigador",
            "Biólogo", "Químico", "Físico", "Matemático", "Historiador", "Político", "Alcalde", "Gobernador", "Presidente", "Sacerdote"
        ]
    },
    "Escuela y Educación": {
        icono: "graduation-cap",
        pistaImpostor: "Estudio",
        palabras: [
            "Maestro", "Alumno", "Estudiante", "Director", "Prefecto", "Conserje", "Salón", "Aula", "Pizarrón", "Borrador",
            "Plumones", "Escritorio", "Silla", "Banca", "Pupitre", "Cuaderno", "Libreta", "Libro", "Lápiz", "Pluma",
            "Goma", "Sacapuntas", "Regla", "Escuadra", "Compás", "Tijeras", "Pegamento", "Resistol", "Colores", "Crayolas",
            "Acuarelas", "Mochila", "Estuchera", "Lonchera", "Uniforme", "Credencial", "Boleta", "Calificación", "Examen", "Tarea",
            "Proyecto", "Exposición", "Ensayo", "Resumen", "Mapa", "Maqueta", "Recreo", "Patio", "Cooperativa", "Honores a la bandera",
            "Ceremonia", "Graduación", "Diploma", "Kínder", "Primaria", "Secundaria", "Preparatoria", "Universidad", "Carrera", "Licenciatura",
            "Tesis", "Beca", "Vacaciones", "Puente", "Asistencia", "Falta", "Retardo", "Expulsión", "Citatorio", "Clausura"
        ]
    },
    "Deportes": {
        icono: "trophy",
        pistaImpostor: "Actividad",
        palabras: [
            "Fútbol", "Básquetbol", "Béisbol", "Voleibol", "Tenis", "Golf", "Natación", "Atletismo", "Gimnasia", "Boxeo",
            "Lucha libre", "Artes marciales", "Karate", "Taekwondo", "Judo", "Esgrima", "Ciclismo", "Automovilismo", "Motociclismo", "Equitación",
            "Charrería", "Polo", "Rugby", "Fútbol americano", "Hockey", "Patinaje", "Esquí", "Snowboard", "Surf", "Buceo",
            "Remo", "Tiro con arco", "Halterofilia", "Levantamiento de pesas", "Triatlón", "Maratón", "Salto de longitud", "Salto de altura", "Lanzamiento de jabalina", "Gimnasia rítmica",
            "Clavados", "Nado sincronizado", "Waterpolo", "Bádminton", "Ping pong", "Squash", "Frontón", "Billar", "Boliche", "Dardos",
            "Ajedrez", "Escalada", "Alpinismo", "Senderismo", "Parkour", "Skateboarding", "BMX", "Crossfit", "Zumba", "Pilates"
        ]
    }
};