import store from './redux/store';
import './App.css';
import Personas from "./components/Personas"
import {Provider} from "react-redux"
import FormPersona from './components/FormPersona';
function App() {
  console.log(store.getState())
  return (
    <Provider store={store}>
      <div className="App">
            <FormPersona/>
            <div>
            Cantidad personas: 30
            <Personas/>
            </div> 
            <div>
            Cantidad prnoductos: 20
            </div>
      </div>
    </Provider>
    
  );
}

export default App;
