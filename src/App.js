import './App.css';
import { Person } from './Person';

function App() {
  return (
    <div className="App">
       <Person 
          name="abdelkarim"
          email="abdelkarim@gmail.com"
          age="28"
          isMarried={false}
          friends={["mohamed", "billel"]}
       />
    </div>
  );
}

export default App;
