import logo from './logo.svg';
import './App.css';
import GetJson from './components/share/getJson';
import GetJsonClick from './components/share/getJsonClick';//se sigue usando la logica de reactNative que todo lo que queramos mostrar en app hay que importarlo y todo lo que vallamos usar hay que importarlo
import GetEjerciceClick from './components/share/ejerciceJson';

function App() {
  return (//aca los div funcionan como si fueran los view de reactNative y tenemos que ponerles un className para indicarle la clase,supongo hace referencia a clases de javaScript 
    <div className="App">
      <GetEjerciceClick />
    </div>
  );
}

export default App;
