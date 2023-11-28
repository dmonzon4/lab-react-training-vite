const IdCard = ({picture, firstName, lastName, gender, height, birth }) => {
    return (
      <div className="id-card">
        <img src={picture} alt="" />
        <div>
          <p><strong>Last Name:</strong> {lastName}</p>
          <p><strong>First Name:</strong> {firstName}</p>
          <p><strong>Gender:</strong> {gender}</p>
          <p><strong>Height:</strong> {height} cm</p>
          <p><strong>Birth:</strong> {birth.toDateString()}</p>
        </div>
      </div>
    );
  };
  
  export default IdCard;