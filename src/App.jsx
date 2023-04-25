
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ListaTarea } from './components/ListaTarea';
import { AgregarTarea } from './components/AgregarTarea';
import { useLista } from './hooks/useLista';
function App() {
  
  const {listas,
    
    handleNuevaLista,
    handleBorrarLista,
    handleCompleteLista,
    handleEditarLista} = useLista()

  return (
    <>
    <div className="card-lista">
      <h1>Lista de Tareas</h1>
      <div className="contador-lista">
        
      </div>
      <div className="agregar-tarea">
        
        <AgregarTarea handleNuevaLista = {handleNuevaLista} />
      </div>
      <ListaTarea
        listas={listas}
        handleBorrarLista ={handleBorrarLista}
        handleCompleteLista = {handleCompleteLista}
        handleEditarLista = {handleEditarLista}
      />
    </div>
    </>
  );
}

export default App;
