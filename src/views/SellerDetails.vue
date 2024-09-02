<template>
  <div id="seller-details" class="container">
    <main>
      <section class="hero">

        <h1>ENTER YOUR DETAILS</h1>
        <p>Complete the form below to finalize your seller account setup.</p>
        <div class="form-box">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="userid">User ID:</label>
              <input type="text" id="userid" v-model="formData.userid" required />
            </div>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="formData.name" required />
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="formData.email" required />
            </div>
            <div class="form-group">
              <label for="cellphone">Cellphone Number:</label>
              <input type="tel" id="cellphone" v-model="formData.cellphone" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  </div>
</template>

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
      // Implement form submission logic here
      this.$router.push({ name: 'SellerFunction' });
    },
  },
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
.hero {
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--background-color); /* Added background color for better contrast */
  border-radius: 8px; /* Optional: adds rounded corners */
}

h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.form-box {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--primary-color); /* Consistent with page background */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background-color); /* Consistent with form background */
}

button {
  background-color: var(--secondary-color);
  border: none;
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  text-align: center;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: var(--primary-color);
  color: var(--background-color);
}
</style>
