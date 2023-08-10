import { Fragment, useState } from "react";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styled/global";


function App() {
  const initialUserState = localStorage.getItem("user") === "true";
  const [user, setUser] = useState(initialUserState);
  const handleLogin = () => {
  localStorage.setItem("user", "true");t
    setUser(true);
  };
  return (
    <Fragment>
    <GlobalStyle />
<AppRoutes user= {user} onAuthButtonClick={handleLogin}/>

</Fragment>
  )
}
export default App;
