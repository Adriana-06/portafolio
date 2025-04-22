// JS/script.js

function toggleModoOscuro() {
                   document.body.classList.toggle("modo-oscuro");
               
                   // Guardar la preferencia del usuario en el almacenamiento local
                   if (document.body.classList.contains("modo-oscuro")) {
                       localStorage.setItem("modo", "oscuro");
                   } else {
                       localStorage.setItem("modo", "claro");
                   }
               }
               
               // Verificar si el usuario ya tenía activado el modo oscuro
               window.addEventListener("DOMContentLoaded", () => {
                   const modoGuardado = localStorage.getItem("modo");
                   if (modoGuardado === "oscuro") {
                       document.body.classList.add("modo-oscuro");
                   }
               });
               

               function mostrarDetalles(proyecto) {
                   const detalles = {
                       acv: `
                           <h2>ACV Web</h2>
                           <p>Plataforma para alquilar casas vacacionales. Público meta: familias.</p>
                           <ul>
                               <li>Filtros de búsqueda</li>
                               <li>Galería</li>
                               <li>Reservas online</li>
                           </ul>
                       `,
                       homely: `
                           <h2>HOMELY</h2>
                           <p>Ecommerce de productos para el hogar con entregas rápidas.</p>
                           <ul>
                               <li>Carrito de compras</li>
                               <li>Diseño limpio y responsivo</li>
                           </ul>
                       `,
                       nayuribe: `
                           <h2>Nayuribe</h2>
                           <p>Gestor de reservas de salas en bibliotecas.</p>
                           <ul>
                               <li>Estadísticas de uso</li>
                               <li>Formulario de reserva</li>
                           </ul>
                       `
                   };
               
                   document.getElementById("contenido-detalles").innerHTML = detalles[proyecto];
                   document.getElementById("modal-detalles").classList.remove("oculto");
               }
               
               function cerrarModal() {
                   document.getElementById("modal-detalles").classList.add("oculto");
               }
               