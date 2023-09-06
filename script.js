document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById('btn');
        const url = 'https://jsonplaceholder.typicode.com/users';
    
        btn.addEventListener("click", (event) => {
            event.preventDefault();
    
            // Obtén los valores de los campos del formulario
            const name = document.getElementById('name').value;
            const lastname = document.getElementById('lastname').value;
            const date = document.getElementById('date').value;
    
            // Genera un objeto con los datos del formulario
            const data = {
                nombre: name,
                apellido: lastname,
                date: date
            };
    
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(function (response) {
                if (response.status === 201) {
                    alert("Datos enviados correctamente.");
                } else {
                    alert("Error al enviar los datos.");
                }
            })
            .catch(function (error) {
                console.error("Error: " + error);
            });
        });
    });


