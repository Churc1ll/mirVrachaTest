import cross from '../styles/Cross.module.css';
const Cross = () => {
  return (
    <span className={cross.cross}>
      <span className={cross['cross-horisontal']}></span>
      <span className={cross['cross-vertical']}></span>
      <span className={cross['cross-vertical_no-border']}></span>
    </span>
  );
};

export default Cross;
