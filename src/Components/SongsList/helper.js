import { API_URL } from "../../Constants/endPoints";
import { getAPI } from '../../_lib/getAPI';

export const getSongsData = async (filterData) => {
    try {
		const {searchTerm = '', offset = 0, limit} = filterData;
		let url;
		if (offset && limit) {
			url = `${API_URL}term=${searchTerm}&offset=${offset}&limit=${limit}`;
		} else if (offset) {
			url = `${API_URL}term=${searchTerm}&offset=${offset}`;
		} else if (limit) {
			url = `${API_URL}term=${searchTerm}&limit=${limit}`;
		} else {
			url = `${API_URL}term=${searchTerm}`;
		}
        const res = await getAPI(url);
        return res;
    } catch (error) {
        return error;
    }
};
