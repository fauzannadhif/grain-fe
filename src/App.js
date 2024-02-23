import { useQuery } from "@apollo/client";
import { getAllMenus } from "./queries";

const App = () => {
  const { loading, error, data } = useQuery(getAllMenus)

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  )
}

export default App;
