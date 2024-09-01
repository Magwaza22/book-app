<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Mock data for the sake of example; replace with your data source
const books = ref([
  {
    bookId: '1',
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Rockford',
    condition: 'Good',
    price: 25.99,
    status: 'Available'
  },
  {
    bookId: '2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    condition: 'Like New',
    price: 32.99,
    status: 'Sold'
  }
  // Add more books as needed
]);

const editedBooks = ref(books.value.map(book => ({ ...book }))); // Create a copy for editing
const router = useRouter();

const updateBook = (bookId, newDetails) => {
  const book = editedBooks.value.find(b => b.bookId === bookId);
  if (book) {
    Object.assign(book, newDetails);
  }
};

const deleteBook = (bookId) => {
  editedBooks.value = editedBooks.value.filter(book => book.bookId !== bookId);
};

const saveChanges = () => {
  // Save changes logic; typically, you would send this data to a server
  console.log('Changes saved', editedBooks.value);
  // Example redirect after saving changes
  router.push({ name: 'BookListing' });
};
</script>

<template>
  <div class="container">
    <h1>Your Books</h1>
    <div v-for="book in editedBooks" :key="book.bookId" class="book-item">
      <h2>{{ book.title }}</h2>
      <p><strong>Author:</strong> {{ book.author }}</p>
      <p><strong>Condition:</strong>
        <select v-model="book.condition">
          <option>New</option>
          <option>Like New</option>
          <option>Good</option>
          <option>Fair</option>
          <option>Poor</option>
        </select>
      </p>
      <p><strong>Price:</strong> <input type="number" v-model.number="book.price" step="0.01" /></p>
      <p><strong>Status:</strong> {{ book.status }}</p>
      <button @click="deleteBook(book.bookId)" class="delete-button">Delete</button>
    </div>
    <button @click="saveChanges" class="save-button">Save Changes</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #d4c6a9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.book-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  margin-bottom: 20px;
}

.book-item h2 {
  margin: 0 0 10px;
}

.book-item p {
  margin: 5px 0;
}

.book-item select,
.book-item input[type="number"] {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  background-color: #f0efeb;
}

.delete-button,
.save-button {
  background-color: #8c7851;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.delete-button:hover,
.save-button:hover {
  background-color: #444444;
}
</style>
