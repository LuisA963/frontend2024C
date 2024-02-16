import ListItem from "./Listitem"
const persona = [
  {
    nombre:'Luis Angel',
    telefono:'285555555',
    email: 'luisangel@gmail.com'
  },
  
  {
    nombre:'Benito',
    telefono:'5556666666',
    email: 'benito@gmail.com'
  },
  {
    nombre:'zayco',
    telefono:'255563352222',
    email: 'zayco@gmail.com'
  },
 

]

function App() {
  

  return (
    <div>
      <h1>Agenda</h1>
      <hr/>
    <ul>
    {
      persona.map((persona) => (
        <ListItem
        key={persona.email}
        nombre={persona.nombre}
        telefono={persona.telefono}
        email={persona.email}
        ></ListItem>
      ))
    }
    </ul>
    </div>
  )
}

export default App
