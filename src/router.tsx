import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
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
import LoginPage from "./pages/loginPage/LoginPage";
import Private from "./hoc/Private";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<CardsPage />} />
      {/*<Route path="all" element={<CardsPage />} />*/}
      <Route path="all" element={<Navigate to="/" replace />} />
      <Route path=":id" element={<CardItemPage />} />
      {/*<Route path="all/:id" element={<CardItemPage />} />*/}
      <Route path="all/:id" element={<Navigate to="/:id" replace />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="delivery" element={<DeliveryPage />} />
      <Route
        path="payment"
        element={
          <Private>
            <PaymentPage />
          </Private>
        }
      />
      <Route path="recipes" element={<RecipesPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
