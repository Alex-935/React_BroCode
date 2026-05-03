import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import MyButton from "./MyButton/MyButton.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import ListProps from "./ListProps.jsx";
import Button from "./Button.jsx"
import ProfilePicture from './ProfilePicture.jsx'
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx"
import OnChangeComponent from "./OnChangeComponent.jsx";
import ColourPicker from "./ColourPicker.jsx";
import MyComponentUpdater from "./MyComponentUpdater.jsx";
import MyComponentUpdateObjects from "./MyComponentUpdateObjects.jsx";
import MyCompontentUpdateArray from "./MyComponentUpdateArray.jsx";
import MyComponentUpdateArrayOfObjects from "./MyComponentUpdateArrayOfObjects.jsx";
import ToDoList from "./ToDoList/ToDoList.jsx";
import UseEffect from "./UseEffect.jsx";
import UseEffectWithReturn from "./UseEffectWithReturn.jsx";
import DigitalClock from "./DigitalClock/DigitalClock.jsx";

// cd into my-react-app,  npm run dev

// props: <Student name="Spongebob" age={30} isStudent={true}/>
function App() {

  const fruits = [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159},
                    {id: 5, name: "pineapple", calories: 37}]; 
    
  const vegetables = [{id: 6, name: "potatoes", calories: 110},
                    {id: 7, name: "celery", calories: 15},
                    {id: 8, name: "carrots", calories: 25},
                    {id: 9, name: "sweetcorn", calories: 63},
                    {id: 10, name: "broccoli", calories: 50}]; 

  return(
    
    /*<>
      {fruits.length > 0 ? <ListProps items={fruits} category="Fruits"/> : null}
      {vegetables.length > 0 && <ListProps items={vegetables} category="Vegetables"/>}
    </>*/

    <>
      <DigitalClock />
    </>
  );
}

export default App
