import { Link, useNavigate } from "react-router"
import type { BrainRotType } from "../types/brainrot.type"

interface Props{
  brainRot: BrainRotType;
}

const BrainrotTile = (props: Props) => {
  let navigate = useNavigate();
  const {brainRot} = props;
  return (
    <li className="list-brainrot-item">
      <img src={brainRot.imagen} alt={`${brainRot?.nombre} imagen`} />
      <article className="list-brainrot-info">
        <h4>{brainRot.nombre}</h4>
        <p>{brainRot.descripcion}</p>
        <div className="list-brainrot-origin">
          {brainRot.origen}
        </div>
        <button className="list-brain-btn" onClick={() => navigate(`brainrot/${brainRot.id}`)}>
          Ver detalles
        </button>
      </article>
    </li>
  )
}

export default BrainrotTile;