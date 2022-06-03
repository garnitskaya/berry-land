import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './../header/Header';
import CardsPage from './../../pages/cardsPage/CardsPage';
import CartPage from './../../pages/cartPage/CartPage';
import DeliveryPage from './../../pages/deliveryPage/DeliveryPage';
import PaymentPage from './../../pages/paymentPage/PaymentPage';
import RecipesPage from './../../pages/recipesPage/RecipesPage';
import Footer from './../footer/Footer';

function App() {
    return (
        <BrowserRouter >
            <Header />
            <Routes>
                <Route path="/" element={<CardsPage />} />
                <Route path="/all" element={<CardsPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/delivery" element={<DeliveryPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;