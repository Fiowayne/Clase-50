console.log('Hola soy el script');

document.getElementById('form').addEventListener("submit", createPerson);

// C-R-U-D
// CREATE

// JSON.stringify
// JSON.PARSE
function renderlist() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  const persons = JSON.parse(localStorage.getItem('persons')) || [];

  if (persons === null) {
    return;
  }

  persons.forEach((person, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${index + 1} </td>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.edad}</td>
            <td>
                <button>Modificar</button>
                <button>Eliminar</button>
            </td>
        `;

    lista.appendChild(row);
  });

  console.log(persons);
}

renderlist();

function createPerson(e) { // Paréntesis agregado aquí
  e.preventDefault();
  console.log('VAMOS A CREAR UNA PERSONA...');
  const name = document.getElementById('nombre').value.trim();
  const age = document.getElementById('edad').value.trim();
  const id = "2"
  const form = document.getElementById('form');


const persons = JSON.parse(localStorage.getItem('persons')) || [];


persons.push({id, name, age})

localStorage.setItem

}