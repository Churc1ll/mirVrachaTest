import Age from './Age';
import { oldTips, youngTips } from '../data/tips';
import Disclaimer from './Disclaimer';
const ChooseAge = () => {
  return (
    <>
      <section className='choose'>
        <Age age='Взрослый' img='old' tips={oldTips} />
        <Age age='Ребенок' img='young' tips={youngTips} />
      </section>
      <Disclaimer text='Сообщает ли один из ваших пациентов о следующих симптомах?' />
    </>
  );
};

export default ChooseAge;
