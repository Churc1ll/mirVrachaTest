const Header = ({ header, text }:{header: string, text: string}) => {
  return (
    <header>
      <h3>{header}</h3>
      <p>{text}</p>
    </header>
  );
};

export default Header;
