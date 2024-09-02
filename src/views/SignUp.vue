<template>
  <div id="sign-up" class="container">
    <main>
      <section class="hero">
        <h1>SIGN UP FOR AN ACCOUNT</h1>
        <p>Fill in the form below to create your account and start managing your listings.</p>
        <form @submit.prevent="handleSignUp" class="signup-form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" v-model="email" id="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" required />
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" v-model="confirmPassword" id="confirmPassword" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleSignUp() {
      // Implement signup logic here, e.g., validation and API call
      if (this.password === this.confirmPassword) {
        this.$router.push({ name: 'SellerDetails' });
      } else {
        alert('Passwords do not match.');
      }
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

.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px; /* Ensures the form doesn't stretch too wide */
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--background-color);
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
