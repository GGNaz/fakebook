import create from 'zustand';
import { routesGetApi } from '../Api/api';

//API Function

const accountDetails = {
	userInfomation: [],
};

//set Details object properties
const storeAcc = async(set) => {
	await routesGetApi("/users/token").then(({data}) => {
	return set({
		userInfomation: data
	});
})
};

const accountLoginStoreObject = (set, get) => ({
	...accountDetails,
	storeAccDetails: () => storeAcc(set),
});

export const accountLoginDetailsStore = create(accountLoginStoreObject);
