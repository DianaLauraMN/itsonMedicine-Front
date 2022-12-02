import { ModalProvider } from "./context/modalContext/ModalContext";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <ModalProvider>
      <AppRouter />
    </ModalProvider>
  );
}

export default App;
