import axios from "axios";

const API_URL = "http://localhost:3000/api";

// Lister tous les genres
// GET /api/admin/genre
//genreRoute.get('/admin/genre', genresController.getAllGenres)

export function getAllGenres() {
    return axios
        .get(`${API_URL}/admin/genre`)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log( error);
        });
}

// Ajouter un genre
// POST /api/admin/genre
//genreRoute.post('/admin/genre', genresController.addAGenre)

export function addAGenre(label) {
    return axios
        .post(`${API_URL}/admin/genre`, { label })
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log( error);
        });
}

// Modifier un genre
// PATCH /api/genre/:idGenre
//genreRoute.patch('/admin/genre/:id', genresController.updateGenre)

export function updateGenre(id,) {
    return axios
        .patch(`${API_URL}/admin/genre/${id}`)
        .then(function (res) {
            console.log(res.data);
            return res.data;
        })
        .catch(function (error) {
            console.log( error);
        });
}

// Supprimer un genre
// DELETE /api/genre/:idCGenre
//genreRoute.delete('/admin/genre/:id', genresController.deleteGenre)

export function deleteGenre(id) {
    return axios
    .delete(`${API_URL}/admin/genre/${id}`)
    .then(function(res) {
        console.log(res.data);
        return res.data;
    })
    .catch(function(error) {
        console.log( error);
    });
}


