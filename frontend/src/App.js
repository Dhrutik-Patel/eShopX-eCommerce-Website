import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Container } from "react-bootstrap";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentScreen from "./pages/PaymentScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
