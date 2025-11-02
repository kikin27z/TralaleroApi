import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import '../style/detail.css';
import { getBrainRotsById } from '../services/api';
import type { BrainRotType } from '../types/brainrot.type';



const DetailBrainrot = () => {
  let { idBrainrot } = useParams();
  const [brainRot, setBrainRot] = useState<BrainRotType | null>(null)

  useEffect(() => {
    if (!idBrainrot) return;
    getBrainRotsById(idBrainrot).then(response => {
      setBrainRot(response.data);
    })

  }, []);

  return (
    <div className='center'>
      <section className='detail-container'>
        <img className='detail-img' src={brainRot?.imagen} alt={`${brainRot?.nombre} imagen`} />
        <section className='detail-info'>
          <h3 className='detail-title'>{brainRot?.nombre}</h3>
          <p className='detail-description'>{brainRot?.descripcion}</p>
          <article>
            <h4 className='detail-subtitle'>Origen:</h4>
            <p className='detail-description'>{brainRot?.origen}</p>
          </article>
          <article>
            <h4 className='detail-subtitle'>Popularidad</h4>
            <p className='detail-description'>{brainRot?.popularidad}</p>
          </article>
          <article>
            <h4 className='detail-subtitle'>Memes populares:</h4>
            <ul className='detail-memes'>
              {brainRot?.memes.map((meme, i) => (
                <li key={i}>{meme}</li>
              ))}
            </ul>
          </article>
        </section>
      </section>
    </div>
  )
}

export default DetailBrainrot;