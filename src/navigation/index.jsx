import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/Main";
import { NotFoundPage } from "../pages/404";
import { CategoriesPages } from "../pages/Categories";
import { routeNames } from "./routeNames";
import { InformationPage } from "../pages/Information";
import { ContactsPage } from "../pages/Contacts";
import { BasketPage } from "../pages/Basket";

export const router = createBrowserRouter([
  {
    path: routeNames.main,
    element: <MainPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: routeNames.categories,
    element: <CategoriesPages />,
  },
  {
    path: routeNames.basket,
    element: <BasketPage />,
  },
  {
    path: routeNames.information,
    element: <InformationPage />,
    children: [
      {
        path: routeNames.contacts,
        element: <ContactsPage />,
      },
    ],
  },
]);
