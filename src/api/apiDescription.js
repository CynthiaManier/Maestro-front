import api_axios from "./axiosConfig.js";


export async function getAllDescription() {
    return api_axios
        .get(`/description`)
        .then(function (res) {
            console.log("api description :", res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}