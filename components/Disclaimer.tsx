const Disclaimer = ({ text } :{text:string}) => {
  return (
    <div className='disclaimer'>
      <p>
        {text}
        <span> (нажмите на любую иконку и узнайте больше)</span>
      </p>
    </div>
  );
};

export default Disclaimer;
