import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Components/Main/main";
import Go from "./Components/GO/go";
import Iphone from "./Components/Iphone/iphone";
import IphonePage from "./Components/Iphone/IphonePage"



function App() {
  return (
<Routes>
  <Route path={"/"} element={<Main/>}/>
  <Route path={"/Iphone"} element={<IphonePage/>}/>
  <Route path={"/MacBook"} element={<Iphone/>}/>
  <Route path={"/Samsung"} element={<Iphone/>}/>
  <Route path={"/Xiaomi"} element={<Iphone/>}/>
</Routes>
  );
}

export default App;
