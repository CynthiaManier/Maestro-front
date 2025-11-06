import api_axios from "./axiosConfig.js";

// Voir la liste des descriptions
export async function getAllDescription() {
    return api_axios
    // utilisation de api_axios pour faire une requête GET
    // vers l'endpoint "/description" de l'API
        .get(`/description`)
        .then(function (res) {
            console.log("api description :", res.data);
            // renvoie les données reçues
            return res.data;
        })
        .catch(function (error) {
            // affiche l'erreur
            console.log(error);
        });
}

// créer la liste des description
// POST /api/admin/description
//descriptionRoute.post('/admin/description', imageUpload.single('image'), descriptionController.create)

export async function create(description) {
    return api_axios
        .post('/admin/description', description, {
    /*         header: {
                'Content-Type': 'multipart/form-data'
            } */
        })
        .then(function (res) {
            console.log("res.data : ", res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}