import Cross from './Cross';
import { satelitesArray } from '../data/satelites';
import satelite from '../styles/Satelites.module.css';
const Satelites = () => {
  return (
  <>
  {satelitesArray.map(({ coordinates, message }) => {
    return (
      <div className={satelite['satelite_' + coordinates]}>
        <img src={`/static/images/${coordinates}.png`} />
        <span
          className={`${satelite['satelite-messages']} ${
            satelite['satelite-message_' + coordinates]
          }`}
        >
          {message}
        </span>
        <Cross />
      </div>
    );
  })
}
</>
)
};
export default Satelites;
