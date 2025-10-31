import api_axios from "./axiosConfig";


// POST /api/message-contact
// messageContactRoute.post('/message-contact', messageContactController.create);


export async function create(contactData) {
    return api_axios
        .post(`/message-contact`, contactData)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log( error);
        });
}