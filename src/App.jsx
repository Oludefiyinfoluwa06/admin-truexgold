import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import AuthLayout from "./layouts/AuthLayout";
import RootLayout from "./layouts/RootLayout";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <AdminProvider>
        <Routes>
          <Route path='/auth' element={<AuthLayout />}>
            <Route path='signin' element={<SignIn />} />
          </Route>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </AdminProvider>
    </Router>
  );
}