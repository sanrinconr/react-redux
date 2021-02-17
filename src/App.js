import store from './redux/store';
import './App.css';
import Personas from "./components/Personas"
import {Provider} from "react-redux"
function App() {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <div className="App">
            <div>
            Cantidad personas: 30
            <Personas personas={[{nombre:"carlos",apellido:"juan",edad:15},]}></Personas>
            </div> 
            <div>
            Cantidad productos: 20
            </div>
      </div>
    </Provider>
    
  );
}

export default App;
