import Axios from "axios";
import history from '../history';

export const getAPI = async (endpoint) => {
	const res = await Axios.get(endpoint).then(response => {
		return response;
	}).catch(error => {
		if (error.response.status === 401) {
			history.push("/?unauthorized");
			history.go(0);
		}
		return error;
	});
	return await res;
}
