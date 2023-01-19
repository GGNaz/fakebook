import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function PublicRoute() {
	let userid = localStorage.getItem('token');
	
	return <>{userid ? <Navigate to={`/`} /> : <Outlet />}</>;
}
