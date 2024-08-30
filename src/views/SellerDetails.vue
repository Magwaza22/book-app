<script>
export default {
  data() {
    return {
      formData: {
        userid: '',
        name: '',
        email: '',
        cellphone: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ name: 'SellerFunction' });
    },

  },
};
</script>

<template>
  <div class="Buyer-details">
    <h1>Seller Details</h1>
    <div class="form-box">
      <form @submit.prevent="handleSubmit">
        <label for="userid">User ID:</label>
        <input type="text" id="userid" v-model="formData.userid" required>

        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required>

        <label for="cellphone">Cellphone Number:</label>
        <input type="tel" id="cellphone" v-model="formData.cellphone" required>

        <button type="submit">"Submit"></button>>
      </form>
    </div>
  </div>
</template>

<style>
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full height */
}

.Buyer-details {
  text-align: center;
}

.form-box {
  background-color: var(--secondary-color);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 300px; /* Adjust to your liking */
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 0.5rem 0 0.2rem;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="submit"] {
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid var(--text-color);
  border-radius: 5px;
}

input[type="submit"] {
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #765632; /* Darker shade for hover effect */
}
</style>
