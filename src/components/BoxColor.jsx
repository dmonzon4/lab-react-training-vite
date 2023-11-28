
export default function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '200px',
    height: '100px',
    border: '1px solid #000',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };

  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b})
    </div>
  )
}
