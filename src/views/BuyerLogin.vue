<template>
  <div id="sign-in" class="container">
    <main>
      <section class="hero">
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <div class="card-header">Login Form</div>
        <div class="card-body">
          <form @submit.prevent="loginUser">
            <div class="form-group">
              <label>Email</label>
              <input v-model="user.email" class="form-control" type="email" placeholder="Email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="user.password" class="form-control" type="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
          <div class="mt-3">
            <span>Not registered? <router-link to="/register">Register/SignUp Here</router-link></span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import AuthService from '../AuthService';

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    loginUser() {
      AuthService.handleLogin(this.user).then(response => {
        console.log(response.data);
      });
    }
  }
};
</script>

<style scoped>
/* Font imports */
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
