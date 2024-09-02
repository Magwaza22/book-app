
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8081', // Replace with your backend URL
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