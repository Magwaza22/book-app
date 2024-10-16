<template>
  <div class="container">
    <h1>Book Listing</h1>
    <form @submit.prevent="submitForm">
      <div v-for="(books, category) in categorizedBooks" :key="category" class="category-section">
        <h2>{{ category }}</h2>
        <div class="book-list">
          <div v-for="book in books" :key="book.bookId" class="book-item">
            <img :src="book.imageUrl" :alt="book.title" class="book-image" />
            <h3>{{ book.title }}</h3>
<!--            <p><strong>Author:</strong> {{ book.author }}</p>-->
            <p><strong>Edition:</strong> {{ book.edition }}</p>
            <p><strong>Price:</strong> ${{ book.price }}</p>
            <label>
              <input type="checkbox" v-model="selectedBooks" :value="book.bookId" />
              Select this book
            </label>
          </div>
        </div>
      </div>
      <button type="submit" class="submit-button">Go to Orders Page</button>
    </form>
    <button @click="fetchBooks" class="update-button button"><i class="fa fa-pencil"></i> Edit Profile</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      books: [],
      selectedBooks: []
    };
  },
  computed: {
    categorizedBooks() {
      return this.books.reduce((acc, book) => {
        if (!acc[book.category]) {
          acc[book.category] = [];
        }
        acc[book.category].push(book);
        return acc;
      }, {});
    }
  },
  methods: {
    submitForm() {
      // Navigate to the Orders page with selected books as query parameters
      this.$router.push({
        name: 'Orders', // Ensure this matches the route name in your router
        query: {books: this.selectedBooks.join(',')}
      });
    },
    fetchBooks(){
      axios
          .get(`http://localhost:8080/book/getall`,)
          .then(response => {
            this.books = response.data;
            console.log(this.books);
          })
          .catch(error => {
            console.error(error);
          });
    }
  }

};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.category-section {
  margin-bottom: 40px;
}

h2 {
  color: #444;
  margin-bottom: 20px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.book-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
}

.book-image {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 15px;
}

label {
  display: block;
  margin-top: 10px;
}

.submit-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #8c7851;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #755d3f;
}
</style>
