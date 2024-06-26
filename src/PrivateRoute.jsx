import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('admin-token');
    const currentUser = localStorage.getItem('admin');

    if (!currentUser && !token) {
        return <Navigate to='/auth/signin' replace />
    }
    
    return children;
}

export const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('admin-token');
    const currentUser = localStorage.getItem('admin');

    if (!currentUser && !token) {
        return children;
    }
    
    return <Navigate to='/' replace />
}