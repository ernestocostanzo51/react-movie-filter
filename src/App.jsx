import { useState } from 'react'
import { useEffect } from 'react'


function App() {
 


  const films  = [
   { title: 'Inception', genre: 'Fantascienza', id:1 },
   { title: 'Il Padrino', genre: 'Thriller', id:2 },
   { title: 'Titanic', genre: 'Romantico', id:3 },
   { title: 'Batman', genre: 'Azione', id:4 },
   { title: 'Interstellar', genre: 'Fantascienza', id:5 },
   { title: 'Pulp Fiction', genre: 'Thriller', id:6 },
 ]

 const [genere, setGenere] = useState()
 
 
 const [filmFiltrati, setFilmFiltrati] = useState(films)  

 useEffect(() => {
  if (genere === ("tutti")) {
      setFilmFiltrati(filtrati);
      }
      else{
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
          <select className="form-select" aria-label="Default select example" value={genere} onChange={(e) => setGenere(e.target.value)}>
               <option>tutti</option>
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
                filmFiltrati !== "tutti" && filmFiltrati.map(film =>(
                <li className='list-group-item' key={film.id}>Titolo: {film.title} Genere: {film.genre}</li>
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
