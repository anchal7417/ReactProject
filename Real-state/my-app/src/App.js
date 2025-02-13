import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/' element={<Contact/>}/>
</Routes>

</BrowserRouter>
  );
}
export default App;

