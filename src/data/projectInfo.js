// src/data/projectInfo.js

const projectInfo = [
  //Portfolio Web
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Portfolio Web",
      description: "Un portfolio moderno hecho con React y TypeScript.",
      tags: [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "📘" },
        { name: "CSS", icon: "🎨" },
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
  //Gestor de tareas
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Gestor de tareas",
      description: "Aplicación simple de tareas con almacenamiento local.",
      tags: [
        { name: "JavaScript", icon: "🟨" },
        { name: "CSS", icon: "🎨" },
      ],
    },

    details: {
      title: "Gestor de tareas",
      content: (
        <>
          <p>
            App de gestión de tareas con almacenamiento local, filtros por
            prioridad y drag & drop.
          </p>

          <img
            src="https://via.placeholder.com/500x300"
            alt="Vista del gestor de tareas"
            style={{ width: "100%", margin: "20px 0", borderRadius: "10px" }}
          />

          <p>
            Incluye un sistema modular de componentes y pruebas unitarias
            básicas.
          </p>
        </>
      ),
    },
  },
  //Juego
  {
    card: {
      image: "https://via.placeholder.com/400x250",
      title: "Juego",
      description: "Hice un videojuego.",
      tags: [
        { name: "C#", icon: "🟨" },
        { name: "Unity", icon: "🎨" },
      ],
    },

    details: {
      title: "Juego",
      content: (
        <>
          <p>Hice un super videojuego, super chulo</p>
          <h2>
            Pero de verdad que estaba super chulo, tendrías que haberlo visto!!
            Osea increíble
          </h2>

          <img
            src="https://via.placeholder.com/500x300"
            alt="Vista del gestor de tareas"
            style={{ width: "100%", margin: "20px 0", borderRadius: "10px" }}
          />

          <p>Mira, te enseño otra foto!!!</p>

          <img
            src="https://via.placeholder.com/500x300"
            alt="Vista del gestor de tareas"
            style={{ width: "100%", margin: "20px 0", borderRadius: "10px" }}
          />
          <h2>
            Pero de verdad que estaba super chulo, tendrías que haberlo visto!!
            Osea increíble
          </h2>
          <h2>
            Pero de verdad que estaba super chulo, tendrías que haberlo visto!!
            Osea increíble
          </h2>
          <h2>
            Pero de verdad que estaba super chulo, tendrías que haberlo visto!!
            Osea increíble
          </h2>
          <h2>
            Pero de verdad que estaba super chulo, tendrías que haberlo visto!!
            Osea increíble
          </h2>
        </>
      ),
    },
  },
];

export default projectInfo;
