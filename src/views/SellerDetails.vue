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
  <div id="seller-details" class="container">
    <main>
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
        <button type="submit">"Submit"</button>
      </form>

      </div>
    </main>
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
  --light-gray: #f0f0f0;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}

/* General styles */
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--light-gray);
}

/* Main content styles */

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 3px solid #D4D4D4;
  border-radius: 4px;
  background-color: #F0EFEB;
}

@keyframes fadeIn {
  0% { opacity: 0.5; }
  100% { opacity: 1; }
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
