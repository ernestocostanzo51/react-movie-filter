import { useState } from 'react'


function App() {
 
  const films = [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

  

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Lista film</h1>
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
