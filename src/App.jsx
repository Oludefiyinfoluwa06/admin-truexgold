import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import AuthLayout from "./layouts/AuthLayout";
import RootLayout from "./layouts/RootLayout";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import UserActivity from "./pages/UserActivity";
import TransactionMonitoring from "./pages/TransactionMonitoring";
import CreateTask from './pages/CreateTask';
import AllTasks from './pages/AllTasks';
import SetLimit from './pages/SetLimit';
import UsersWallet from './pages/UsersWallet';
import { PrivateRoute, ProtectedRoute } from './PrivateRoute';
import ForgotPassword from './pages/ForgotPassword';

export default function App() {
  return (
    <Router>
      <AdminProvider>
        <Routes>
          <Route path='/auth' element={<PrivateRoute>
            <AuthLayout />
          </PrivateRoute>}>
            <Route path='signin' element={<SignIn />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
          </Route>
          <Route path='/' element={<ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path='user-activity' element={<UserActivity />} />
            <Route path='transaction-monitoring' element={<TransactionMonitoring />} />
            <Route path='create-task' element={<CreateTask />} />
            <Route path='tasks' element={<AllTasks />} />
            <Route path='set-limit' element={<SetLimit />} />
            <Route path='users-wallet' element={<UsersWallet />} />
          </Route>
        </Routes>
      </AdminProvider>
    </Router>
  );
}