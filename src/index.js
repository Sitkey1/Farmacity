import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routeNames } from "./navigation/routeNames";
import { MainPage } from "./pages/Main";
import { BasketPage } from "./pages/Basket";
import { InformationPage } from "./pages/Information";
import { ContactsPage } from "./pages/Contacts";
import { PolicyPage } from "./pages/Policy";
import { NewsPage } from "./pages/News";
import { CategoryPage } from "./pages/Category";
import { Layout } from "./components/Layout";
import { ProductPage } from "./pages/Product";
import { OrderPage } from "./pages/Order";
import { AboutPage } from "./pages/About";
import { ThanksPage } from "./pages/Thanks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={routeNames.main} element={<Layout />}>
          <Route index path={routeNames.main} element={<MainPage />} />
          {/* <Route path={routeNames.categories} element={<CategoriesPages />} /> */}
          <Route path={routeNames.category} element={<CategoryPage />} />
          {/* <Route
            path={`${routeNames.categories}/:id`}
            element={<CategoryPage />}
          /> */}
          <Route
            path={`${routeNames.category}/:id`}
            element={<ProductPage />}
          />

          <Route path={":id"} element={<ProductPage />} />
          <Route path={routeNames.basket} element={<BasketPage />} />
          <Route path={routeNames.information} element={<InformationPage />} />
          <Route path={routeNames.contacts} element={<ContactsPage />} />
          <Route path={routeNames.about} element={<AboutPage />} />
          <Route path={routeNames.order} element={<OrderPage />} />
          <Route path={routeNames.policy} element={<PolicyPage />} />
          <Route path={routeNames.news} element={<NewsPage />} />
          <Route path={routeNames.thanks} element={<ThanksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
