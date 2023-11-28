import "./App.css";
import BoxColor from "./components/BoxColor.jsx";
import CreditCard from "./components/CreditCard.jsx";
import DriveCard from "./components/DriveCard.jsx";
import Greetings from "./components/Greetings.jsx";
import IdCard from './components/IdCard.jsx'
import Random from "./components/Random.jsx";
import Rating from "./components/Rating.jsx";

function App() {
  return (
    <div>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
    
  );
};

export default App;
