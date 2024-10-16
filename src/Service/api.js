
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    fetchBooks() {
        return apiClient.get('/books');
    },
    updateBook(bookId, data) {
        return apiClient.put(/books/${bookId}, data);
    },
    deleteBook(bookId) {
        return apiClient.delete(/books/${bookId});
    },
};