import axios from "axios";

export const RestApi = axios.create({
	baseURL: "http://116.193.191.1:10201",
});
