import { Link } from "react-router-dom";
import Navbar from "./component/Navbar";
import MyRouter from "./pages/router/index";


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Link to='/login'>Login</Link>
      <Link to='/registration'>Registrtion</Link> */}

      <MyRouter/>
    </div>
  );
}

export default App;
