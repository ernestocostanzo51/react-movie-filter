import { useState } from 'react'
import { useEffect } from 'react'


function App() {
 


  const films  = [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

 const [genere, setGenere] = useState()
 console.log(genere)
 
 const [filmFiltrati, setFilmFiltrati] = useState("all")  

 useEffect(() => {
  if (genere) {
    const filtrati = films.filter(film => film.genre === genere);
    setFilmFiltrati(filtrati);
  }
}, [genere]);

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Lista film</h1>
          <p>Seleziona il genere che vuoi visionare</p>
          <select className="form-select" aria-label="Default select example" onChange={(e) => setGenere(e.target.value)}>
               <option>Fantascienza</option>
               <option>Thriller</option>
               <option>Romantico</option>
               <option>Azione</option>
          </select>
        </div>
      </div>
    </div>
     <div className='container'>
      <div className='row'>
        <div className='col'>
          <ul className="list-group">
            <h3>Titoli</h3>
            {
              films.map(film =>(
                <li className='list-group-item'>Titolo: {film.title} Genere:{film.genre}</li>
              ))
            }
          </ul>
        </div>
         
        
      </div>
     </div>
    </>
  )
}

export default App
