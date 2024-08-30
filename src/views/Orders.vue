<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center">Your Order</h2>
    <div v-if="books.length > 0">
      <!-- Order List -->
      <div class="card mb-3" v-for="(book, index) in books" :key="book.id">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">Price: ${{ book.price }}</p>
            <p class="card-text">Amount: {{ book.amount }}</p>
            <p class="card-text">Details: {{ book.details }}</p>
          </div>
          <button class="btn btn-danger" @click="removeBook(index)">Remove</button>
        </div>
      </div>

      <!-- Confirm Button -->
      <div class="text-center mt-4">
        <button class="btn btn-primary" @click="confirmOrder">Confirm</button>
      </div>
    </div>
    <div v-else>
      <p class="text-center">No books in your order.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPage',
  data() {
    return {
      books: [
        { id: 1, title: 'Book Title 1', price: 15.99, amount: 2, details: 'Good condition, hardcover' },
        { id: 2, title: 'Book Title 2', price: 9.99, amount: 1, details: 'Like new, paperback' },
        // Add more books as needed
      ]
    };
  },
  methods: {
    removeBook(index) {
      this.books.splice(index, 1);
    },
    confirmOrder() {
      this.$router.push({ name: 'BuyerAppointment' }); // Use Vue Router to navigate
    }
  }
};
</script>

<style scoped>
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

/* CSS variables */
:root {
  --primary-color: #8c7851;
  --secondary-color: #d4c6a9;
  --text-color: #333;
  --background-color: #f8f4ef;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}

/* General styles */
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--background-color);
}
/* Buy a Book page specific styles */
/* Main content styles */
.hero {
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slogan {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.buttons button {
  background-color: var(--secondary-color);
  border: none;
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

</style>

<script setup lang="ts">
</script>