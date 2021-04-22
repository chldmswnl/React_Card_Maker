import styles from "./app.module.css";
import Login from "./components/login/login";
import Maker from "./components/maker/maker";
import { BrowserRouter, Route } from "react-router-dom";
import { useState } from "react";

function App({ authService }) {
  const [login, setLogin] = useState(false);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Route
          path="/"
          render={() => <Login authService={authService} onLogout={login} />}
          exact
        />
        <Route path="/maker" render={() => <Maker onLogout={login} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
