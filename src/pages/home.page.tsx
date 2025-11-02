import { useEffect, useState } from "react"
import type { BrainRotType } from "../types/brainrot.type"
import { getBrainRots, getBrainRotsByName } from "../services/api";
import BrainrotTile from "../components/brainrot-tile";
import '../App.css'


const Home = () => {
  const [brainRots, setBrainRots] = useState<BrainRotType[]>();
  const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    if (searchInput.length !== 0) {
      getBrainRotsByName(searchInput).then(response => {
        if (response){

          setBrainRots(response.data);
        }else{
          setBrainRots([]);
        }
      })
    } else {
      getBrainRots().then(response => {
        setBrainRots(response.data)
      })
    }
  }, [searchInput])

  return (
    <section className="home-container">
      <header className="home-header" >
        <section className="home-description">
          <h3>Personajes de Brainrot</h3>
          <p>Los personajes más populares de internet</p>
        </section>
        <div className="form-group">
          <label htmlFor="name">Buscar por nombre:</label>
          <input type="text" name="brainrotName" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        </div>
      </header >

      {
        brainRots && (
          <ul className="list-brainrots">
            {brainRots.map(b => (
              <BrainrotTile key={b.id} brainRot={b} />
            ))}
          </ul>

        )
      }
    </section>
  )
}

export default Home