import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "./components";
import CardItemPage from "./pages/cardItemPage/CardItemPage";
import CardsPage from "./pages/cardsPage/CardsPage";
import CartPage from "./pages/cartPage/CartPage";
import DeliveryPage from "./pages/deliveryPage/DeliveryPage";
import PaymentPage from "./pages/paymentPage/PaymentPage";
import RecipesPage from "./pages/recipesPage/RecipesPage";
import NotFound from "./pages/notFound/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      {/*<Route index element={<CardsPage />} />*/}
      <Route path="all" element={<CardsPage />} />
      {/*<Route path=":id" element={<CardItemPage />} />*/}
      <Route path="all/:id" element={<CardItemPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="delivery" element={<DeliveryPage />} />
      <Route path="payment" element={<PaymentPage />} />
      <Route path="recipes" element={<RecipesPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
