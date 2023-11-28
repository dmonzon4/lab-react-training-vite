
export default function Random({min, max}) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div>
      Random Number between {min} and {max}: {randomNumber}
    </div>
  )
}
