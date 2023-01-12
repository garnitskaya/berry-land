import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
