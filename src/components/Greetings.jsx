const Greetings = ({ lang, children }) => {
    return (
      <div className="greetigs-card">
        <Greetings lang="de">Ludwig</Greetings> 
        <Greetings lang="fr">François</Greetings>
      </div>
    );
  };
  
  export default Greetings;