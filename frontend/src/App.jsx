import { useContext } from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles"
import ImageViewer from "./components/organisms/ImageViewer/ImageViewer"
import Router from "./routes/Router"
import { GlobalContext } from "./Context/GlobalContext";

function App() {
  const { isOpenViewer } = useContext(GlobalContext);

  return (
    <>
    <GlobalStyles isOpenViewer={isOpenViewer}/>
    <ImageViewer/>
    <Router/>
    </>
  )
}

export default App
