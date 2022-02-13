import './components/Sidebar.css';
import Sidebar from "./components/Sidebar";
import MiddleComponent from "./components/middleComponent"
import RightComponent from './components/rightComponent';

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <MiddleComponent></MiddleComponent> 
      <RightComponent></RightComponent>
    </div>
  );
}

export default App;
