import { Route } from 'react-router-dom';

export const getAllComponentsRoutes = (componentData, componentIndex) => {
	return (
		<>
			{componentData.component ? (
				<Route
					path={componentData.path}
					key={componentIndex}
					element={componentData.component}
				/>
			) : (
				<>
					{componentData.navigationChild.map((item, index) => {
						return <>{getAllComponentsRoutes(item, index)}</>;
					})}
				</>
			)}
		</>
	);
};
