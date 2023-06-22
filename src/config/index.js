import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ConnectedGuestContainer, { GuestContainerContainer } from "../container/GuestContainer";
import AppShell from "../layout/AppShell";
import CartList from "../pages/CartsList";

export const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: '/login',
            element:<ConnectedGuestContainer>
            <Login />
          </ConnectedGuestContainer>
        },
        {
            path: '/',
            element: <AppShell />,
            children: [
              {
                index: true,
                element: <Navigate to='dashboard' replace={true} />,
              },
              {
                path: '/dashboard',
                element: <Dashboard />,
              },
              {
                path: '/cart',
                element: <CartList />,
              }

            ]}
    ]);
    return routes
}
export default AppRoutes;