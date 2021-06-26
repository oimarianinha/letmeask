// React
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Componentes, Contextos, Hooks e Pages
import { AuthContextProvider } from "./contexts/AuthContext";
import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { Room } from "./pages/Room";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
