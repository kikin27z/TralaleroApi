import React, { useEffect, useState } from 'react'
import type { StatsBrainRotType } from '../types/brainrot.type';
import { getStats } from '../services/api';

const StatsPage = () => {
  const [stats, setStats] = useState<StatsBrainRotType | null>(null);

  useEffect(()=>{
    getStats().then(response => {
      setStats(response.data);
    });
  },[]);
  return (
    <section className='stats-container'>
      <h3 className='stats-title'>Estadistiscas</h3>
      <article className='stats-section'>
        <h4>Total de personajes {stats?.totalPersonajes}</h4>
        <ul className='stats-list'>
          {stats?.origenes.map((origin, i)=>(
            <li key={i}>{origin}</li>
          ))}
        </ul>
      </article>
      <article className='stats-section'>
        <h4>Niveles de Popularidad</h4>
        <ul className='stats-list'>
          {stats?.nivelesPopularidad.map((popularidad, i)=>(
            <li key={i}>{popularidad}</li>
          ))}
        </ul>
      </article>
      <article className='stats-grid-double stats-section'>
        <h4>Totales de memes {stats?.totalMemes}</h4>
      </article>

    </section>
  )
}

export default StatsPage;