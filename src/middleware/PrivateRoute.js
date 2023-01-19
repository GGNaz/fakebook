import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
	let userid = localStorage.getItem('token');

	return <>{userid ? <Outlet /> : <Navigate to='/login' />}</>;
}
