// src/data/projectInfo.js

import tags from "./ProjectTagsInfo";

const projectInfo = [
  //Portfolio Web
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Portfolio Web",
      description:
        "Este portfolio muestra mis proyectos y experiencias como informático",
      tags: [
        tags.react,
        tags.typescript,
        tags.css,
        tags.html,
        tags.uxui,
        tags.javascript,
      ],
    },

    details: {
      title: "Portfolio Web",
      content: (
        <>
          <p>
            Desarrollé un portfolio completo con React, TypeScript y CSS
            moderno. Incluye proyectos interactivos, animaciones suaves y
            responsive design.
          </p>

          <img
            src="https://via.placeholder.com/600x300"
            alt="Captura del portfolio"
            style={{ width: "100%", margin: "20px 0", borderRadius: "10px" }}
          />

          <p>
            También integra un sistema modular de componentes para facilitar la
            escalabilidad y permite previsualizar proyectos.
          </p>
        </>
      ),
    },
  },

  //TFG
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Gamificación de Deporte",
      description:
        "En este proyecto se desarrolló una aplicación web y un videojuego para fomentar el deporte de manera divertida",
      tags: [
        tags.Full_stack,
        tags.Unity,
        tags.Csharp,
        tags.php,
        tags.javascript,
        tags.SQL,
        tags.html,
        tags.css,
        tags.uxui,
      ],
      // Unity, C#, APIS, PHP, JavaScript, VR, Full-Stack
    },

    details: {
      title: "Gamificación del deporte con videojuegos",
      content: (
        <>
          <p>
            Proyecto en solitario realizado para fomentar la actividad física en
            jóvenes. Comencé el proyecto con un proceso iterativo de Design
            Thinking que concluyó con la creación de dos prototipos: una
            aplicación web para móviles y un videojuego para realidad virtual,
            interconectados entre sí mediante una base de datos y llamadas apis
            al servidor. App El objetivo de la aplicación era registrar la
            distancia recorrida por el usuario en paseos o carreras, para luego
            pasar dicha información al videojuego y usar el kilometraje como
            recurso en el juego. Para lograrlo, comencé desarrollando una
            aplicación web que registrara desde el front-end de la aplicación
            los movimientos del usuario con ayuda de la librería pública de
            JavaScript “Leaflet”. Para poder guardar los kilómetros recorridos,
            creé una base de datos y un sistema de llamadas a la misma por PHP
            para registrar usuarios, iniciar sesión y guardar lo recorrido en la
            cuenta del usuario. Videojuego El videojuego fue creado en Unity 3D,
            aprovechando su sistema de físicas y raycasting para el lanzado de
            hechizos y el cálculo de efectos. Además de contar con una gran
            cantidad de recursos gratuitos con fácil integración y modificación.
            Para obtener los kilómetros del usuario, creé un sistema de llamadas
            API al servidor, para que al iniciar sesión desde el videojuego, se
            obtuvieran en formato JSON los datos del usuario guardados en la
            base de datos. Para fomentar las actividades físicas, se integraron
            mecánicas de ejercicios físicos en el videojuego. La detección de
            estos ejercicios se realizó con un script de C#, que bebía de los
            sensores de la consola VR en tiempo real y contabilizaba las
            repeticiones de los ejercicios mediante una máquina de estados y las
            transiciones entre estos a través de valores umbral.
          </p>
        </>
      ),
    },
  },
  //Gestor de Tareas y Recordatorio
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "HeyIWantedToDoThat! App",
      description:
        "Proyecto creado para facilitar la organización de las tareas pendientes y ayuda al mantenimiento de objetivos diarios",
      tags: [
        tags.angular,
        tags.css,
        tags.typescript,
        tags.html,
        tags.Front_end,
        tags.uxui,
        tags.javascript,
      ],
      // Angular, Css, TypeScript, HTML, Android, Front-End,
    },

    details: {
      title: "Desarrollo de la Aplicación HeyIWantedToDoThat!",
      content: (
        <>
          <p>
            Aplicación creada con el objetivo de facilitar la gestión de mis
            tareas. La aplicación está desarrollada con Angular y TypeScript y
            permite crear dos tipos de tareas: Tareas individuales: Réplicas de
            las tareas de otras aplicaciones, permiten tener subtareas,
            descripción, fecha límite, etc. Pueden ser completadas o borradas,
            también se puede decidir si la tarea es periódica y por ello tiene
            que volver a salir en el feed más adelante al ser completada o no.
            Reto diario: Un tipo de tarea original, el usuario crea una lista de
            tareas que quiere hacer, una tarea aleatoria le saldrá en el feed de
            tareas, se puede programar si se quiere hacer que completar una
            tarea haga que esta no vuelva a salir elegida o no. Este tipo de
            tareas se pueden usar para recordar al usuario de hacer tareas
            periódicas, como tareas del hogar, trabajar en proyectos personales
            o ver películas. Además de este tipo de tareas, se crean “Triggers”,
            los triggers son un sistema de notificación al usuario al cumplirse
            una serie de reglas. Estas reglas pueden ser cualquier combinación
            de geolocalización, hora o tareas previas completadas. Algunos
            ejemplos de uso de la aplicación: Un dibujante principiante crea una
            lista de retos diarios llamada “Práctica de dibujo”, en la que
            escribe diversos ejercicios y áreas de su arte que quiere practicar.
            Pone un “trigger” para que cada día que esté en casa a las 20 le
            salte una notificación en su teléfono que informe de qué ejercicio
            le toca realizar hoy (elegido aleatoriamente). Un trabajador recibe
            una notificación en cuanto llega al trabajo de que es el cumpleaños
            de un compañero de trabajo.
          </p>
        </>
      ),
    },
  },
  //Whatssapp
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Sistema de mensajería online",
      description:
        "En este proyecto, se desarrolló una arquitectura de cliente-servidor concurrente para un sistema de mensajería",
      tags: [tags.Cplusplus, tags.python, tags.uxui],
      //C++, Python, UX
    },

    details: {
      title: "Sistema de mensajería online tipo WhatsApp",
      content: (
        <>
          <p>
            En este proyecto, se tuvo como objetivo crear un sistema de
            mensajería similar a WhatsApp. Se creó una arquitectura
            cliente-servidor para gestionar los mensajes: El servidor fue
            programado en C++ y permitía la gestión de concurrencia de
            peticiones mediante la creación de hilos y la gestión de
            concurrencia a través de un mutex. Los mensajes eran enviados a
            través de sockets al cliente inmediatamente en un sistema FIFO o
            almacenados en ficheros cuando los usuarios estaban desconectados y
            enviados cuando estos se conectaran. Para el lado del cliente, se
            creó una interfaz gráfica con TKinter, que mostraba las distintas
            conversaciones que el usuario pudiera tener en tiempo real, también
            permitía cerrar/iniciar sesión.
          </p>
        </>
      ),
    },
  },
  //VR Supervivencia
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Juego de Supervivencia",
      description:
        "Videojuego desarrollado para Android VR donde el jugador debe de sobrevivir el máximo tiempo posible oleadas de zombis!",
      tags: [tags.Unity, tags.Csharp],
      //Unity, Android, VR, State Machine, IA
    },

    details: {
      title: "Videojuego de supervivencia VR para Android",
      content: (
        <>
          <p>
            Este videojuego de supervivencia en primera persona desarrollado en
            Unity 3D para ser jugado en un dispositivo Android en realidad
            virtual estuvo centrado en la creación e integración de
            Inteligencias Artificiales. El videojuego estaba focalizado en NPCs
            o “Non-Playable Characters” y en el diseño y programación de sus
            inteligencias artificiales. Estas inteligencias artificiales
            operaban bajo una máquina de estados y la transición de estos
            estados en base a un sistema de percepción, todo ello programado en
            C#. Este sistema de percepción permitía a los personajes “ver”
            utilizando el sistema de Raycasting y “oír” en base a la propagación
            del sonido en ondas, rebotando con objetos sólidos. Además, se creó
            un algoritmo A* para calcular el camino más eficiente a la hora de
            moverse por el mapa. Añadir que funciona por comandos de voz!
          </p>
        </>
      ),
    },
  },
  //Juego
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Blind Date",
      description: "Página web de citas con un giro, te emparejan tus amigos!",
      tags: [tags.Full_stack, tags.SQL, tags.php, tags.css, tags.javascript],
      //PHP, CSS, JavaScript, SQL, Full-Stack,
    },

    details: {
      title: "Blind Date, Porque tus amigos saben más",
      content: (
        <>
          <p>
            En este proyecto, se propuso crear una página web full stack de un
            servicio de citas online. La idea consistía en que en vez de ser el
            usuario el que viera perfiles e indicara si le gustaban o no, fueran
            sus amigos los que lo hicieran. Para el desarrollo de esta
            aplicación se creó una base de datos para almacenar los datos de
            inicio de sesión de los usuarios, enlazar a los usuarios sus
            perfiles de usuarios (hobbies, gustos, descripción) y sus amigos.
            Además, la aplicación utilizaba un algoritmo de comparación para
            mostrar en todo momento el perfil más apropiado para el amigo que el
            usuario estuviera intentando emparejar.
          </p>
        </>
      ),
    },
  },
  //Usuzu
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Chatbot Agenda",
      description: "Chatbot de Telegram que te ayuda a organizar tus estudios",
      tags: [tags.nodered],
      // Low-Code, APIS, Java
    },

    details: {
      title: "Usuzu, el chatbot agenda",
      content: (
        <>
          <p>
            Proyecto realizado para facilitar la organización de los estudios de
            los usuarios, programado con herramientas low code (Node-Red) y la
            inteligencia artificial de IBM Watson. Se creó un chatbot de
            telegram que permitía a los usuarios apuntarse diversos eventos
            académicos como exámenes, presentaciones y lecturas de libros.
            Además, se creó un algoritmo para la recomendación de horas de
            estudio y cuantos días de antelación al examen se debía comenzar a
            estudiar, estas recomendaciones evolucionan a lo largo del curso en
            función de las notas que el usuario saque.
          </p>
        </>
      ),
    },
  },
];

export default projectInfo;
