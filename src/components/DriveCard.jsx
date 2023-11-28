export default function DriveCard({ name, rating, img, car }) {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      padding: "15px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      margin: "10px 0",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      marginRight: "20px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <div style={styles.container}>
      <img src={img} alt="Driver" style={styles.image} />
      <div style={styles.info}>
        <h2>{name}</h2>
        <div>
          {Array.from({ length: Math.round(rating) }, (_, index) => (
            <span key={index}>★</span>
          ))}
          {Array.from({ length: Math.round(5 - rating) }, (_, index) => (
            <span key={index}>☆</span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
