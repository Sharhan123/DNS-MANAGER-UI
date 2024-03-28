import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element, ...rest }) => {
    const token = useSelector((state) => state.token.token);

    const isAuthenticated = !!token;

    return (
        <Route
            {...rest}
            element={token ? element : <Navigate to="/signin" />}
        />
    );
};

export default ProtectedRoute;
