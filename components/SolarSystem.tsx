import Satelites from './Satelites';
const SolarSystem = () => {
  return (
    <section className='solar-system'>
      <div className='sun'>
        <p className='sun-text'>Взрослый</p>
        <div className='sun-center'>
          <Satelites />
        </div>
      </div>
    </section>
  );
};

export default SolarSystem;
