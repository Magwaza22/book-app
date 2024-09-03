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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.appointment-form {
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #a69e9e; /* Border color */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for a subtle 3D effect */
  background-color: #ffffff; /* Background color */
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="tel"] {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #a69e9e;
  border-radius: 4px;
  margin-bottom: 10px; /* Spacing between input and label */
}

p {
  margin: 0;
  padding: 10px 0;
  font-size: 14px;
  color: #333;
}

.submit-btn {
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #966a6a;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #b7b7a4;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  text-align: center;
  position: relative;
  border: 1px solid #a69e9e; /* Border color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for a subtle 3D effect */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>