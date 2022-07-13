const Age = ({ age, img, tips }: {age: string; img: string; tips: string[] }) => {
  return (
    <div className='age-container'>
      <p className='choose-age-text'>{age}</p>
      <img src={`/static/images/${img}.png`} />
      <div className='tips-container'>
        {tips.map((tip) => (
          <p className='tips'>{tip}</p>
        ))}
      </div>
    </div>
  );
};

export default Age;
