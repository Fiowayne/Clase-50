console.log('Hola soy el script');

document.getElementById('form').addEventListener("submit", createPerson);

// C-R-U-D

// READ-RETRIEVE
function renderList() {
  const lista = document.getElementById('lista');
  lista.innerHTML = '';

  const persons = JSON.parse(localStorage.getItem('persons')) || [];

  persons.forEach((person, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
            <td>${index + 1} </td>
            <td>${person.id}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>
                <button>Modificar</button>
                <button onclick="deletePerson('${person.id}')"> Eliminar </button>
            </td>
        `;

    lista.appendChild(row);
  });

  console.log(persons);
}

renderList();

// CREATE
function createPerson(e) {
  e.preventDefault();
  console.log('VAMOS A CREAR UNA PERSONA...');
  const name = document.getElementById('nombre').value.trim();
  const age = document.getElementById('edad').value.trim();
  console.log(age)
  const id = `${Math.floor(Math.random() * 100000).toString()}`;
  const form = document.getElementById('form');

  const persons = JSON.parse(localStorage.getItem('persons')) || [];

  persons.push({ id, name, age });

  console.log(persons);
  localStorage.setItem("persons", JSON.stringify(persons));

  renderList();

  form.reset();
}

function deletePerson(personid) {
  const arrayPersons = JSON.parse(localStorage.getItem('persons')) || [];
  console.log(personid);

  const nuevoArray = arrayPersons.filter((person) => person.id !== personid); // Corregido: Filtrar por IDs diferentes
  console.log(nuevoArray);
  localStorage.setItem("persons", JSON.stringify(nuevoArray)); // Corregido: Usar nuevoArray
  renderList();
}

// UPDATE
// DELETE