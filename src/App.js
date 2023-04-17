import Login from "./pages/login.js"
import {AuthProvider} from "./contexts/authContext.js"


function App() {
  return(
    <AuthProvider>
      <Login></Login>
    </AuthProvider>

  );
}

export default App;
