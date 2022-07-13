import { satelitesArray } from '../data/satelites';

const SatelitesList = () => {
  return (
    <section className='satelites-list'>
      {satelitesArray.map(({ coordinates, message }) => (
        <div className='satelites-list_satelite'>
          <img src={`/static/images/${coordinates}.png`} />
          <p>{message}</p>
        </div>
      ))}
    </section>
  );
};

export default SatelitesList;
