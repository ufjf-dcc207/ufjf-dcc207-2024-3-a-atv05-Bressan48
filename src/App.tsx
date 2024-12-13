import "./App.css";
import dados from "./assets/ufjf-dcc207-2024-3-a-atv05.json";
import Funcionario from "./Funcionarios";

function App() {
  


  return (
    <div className="app">
      {dados.funcionarios.map((f) => (
        <Funcionario funcionario={f} />
      ))}
    </div>
  );
}

export default App;
