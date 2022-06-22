import "normalize.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PageShop from "./pages/shop";
import PageProduct from "./pages/product";
import ComponentHeader from "./common/components/header";
import GlobalStyle from "./common/foundation/globalStyle";
import PageCart from "./pages/cart";
import Page404 from "./pages/404";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <ComponentHeader/>
      <Routes>
        <Route path="/" element={<PageShop/>}/>
        <Route path="/:id" element={<PageProduct/>}/>
        <Route path="/cart" element={<PageCart/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
