import create from 'zustand';
import { routesGetApi } from '../../Api/api';


//API Function

const postDetails = {
	post: [],
};

//set Details object properties
const storePostDetails = async(set) => {
	
	await routesGetApi("/posts").then(({data}) => {
		console.log("post", data)
	return set({
		post: data
	});
})
};

const postStoreObject = (set, get) => ({
	...postDetails,
	storePost: () => storePostDetails(set),
});

export const postStore = create(postStoreObject);
