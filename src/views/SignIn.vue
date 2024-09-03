<template>
  <div id="sign-in" class="container">
    <main>
      <section class="hero">
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <p>Enter your credentials to access your account and manage your listings.</p>
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <button type="submit">Login</button>
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
    };
  },
  methods: {
    handleLogin() {
      // Implement login logic here
      this.$router.push({ name: 'SellerFunction' });
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap');


:root {
  --primary-color: #8c7851;
  --secondary-color: #d4c6a9;
  --text-color: #333;
  --background-color: #f8f4ef;
  --light-gray: #f0f0f0;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}


body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--light-gray);
}


.hero {
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--background-color);
  border-radius: 8px;
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

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
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
</style>
