import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/SignIn";

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        { path: 'signin', element: <SignIn /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}