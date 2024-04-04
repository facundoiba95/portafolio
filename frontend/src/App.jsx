import { useContext } from "react";
import GlobalStyles from "./GlobalStyles/GlobalStyles"
import ImageViewer from "./components/organisms/ImageViewer/ImageViewer"
import Router from "./routes/Router"
import { GlobalContext } from "./Context/GlobalContext";
import ModalAleatoryContent from "./components/molecules/ModalAleatoryContent/ModalAleatoryContent";

function App() {
  const { isOpenViewer, isOpenModal } = useContext(GlobalContext);

  return (
    <>
    <GlobalStyles isOpen={isOpenViewer || isOpenModal}/>
    <ImageViewer/>
    <Router/>
    <ModalAleatoryContent conditional={true} title={'Desea cerrar sesión?'}/>
    </>
  )
}

export default App
