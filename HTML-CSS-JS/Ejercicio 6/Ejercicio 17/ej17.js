 // Definir las filas del teclado como arrays
        const fila1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
        const fila2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
        const fila3 = ["Z", "X", "C", "V", "B", "N", "M"];
        const fila4 = ["Espacio", "Borrar"]; // Eliminamos "Backspace"

        // Array con todas las filas
        const teclado = [fila1, fila2, fila3, fila4];

        // Obtener elementos
        const display = document.getElementById("display");
        const tecladoContainer = document.getElementById("teclado");

        // Función centralizada para mostrar texto en el display
        function mostrarEnDisplay(texto, accion = "agregar") {
            if (accion === "agregar") {
                display.value += texto === "Espacio" ? " " : texto;
            } else if (accion === "borrar") {
                display.value = ""; // Limpia el display
            }
        }

        // Generar el teclado dinámicamente
        teclado.forEach(fila => {
            const filaDiv = document.createElement("div");
            filaDiv.className = "fila";
            fila.forEach(tecla => {
                const boton = document.createElement("button");
                boton.textContent = tecla;
                // Añadir clases específicas para cada botón especial
                if (tecla === "Espacio") {
                    boton.className = "espacio";
                } else if (tecla === "Borrar") {
                    boton.className = "borrar";
                }
                // Añadir evento al botón
                boton.addEventListener("click", () => {
                    if (tecla === "Borrar") {
                        mostrarEnDisplay("", "borrar");
                    } else {
                        mostrarEnDisplay(tecla);
                    }
                });
                filaDiv.appendChild(boton);
            });
            tecladoContainer.appendChild(filaDiv);
        });