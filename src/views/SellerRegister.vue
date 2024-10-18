<template>
  <div id="sign-up" class="container">
    <main>
      <section class="hero">
        <h1>SIGN UP FOR AN ACCOUNT</h1>
        <p>Fill in the form below to create your account and start managing your listings.</p>
        <form @submit.prevent="handleSignUp" class="signup-form">
            <div class="form-group">
              <label>First Name</label>
              <input v-model="user.firstName" class="form-control" type="text" placeholder="Enter first name" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input v-model="user.lastName" class="form-control" type="text" placeholder="Enter last name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input v-model="user.email" class="form-control" type="email" placeholder="Enter email address" />
            </div>
            <div class="form-group">
              <label>Phone Number</label> <!-- Changed the label to "Phone Number" for consistency -->
              <input v-model="user.phoneNumber" class="form-control" type="number" placeholder="Enter phone number" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="user.password" class="form-control" type="password" placeholder="Enter password" />
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
          </form>
          <div class="mt-3">
            <span>Already registered? <router-link to="/login">Login here</router-link></span>
          </div>
      </section>
    </main>
  </div>
</template>

<script>
import AuthService from '@/service/AuthService';

export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '', // Corrected phone number variable name
        password: ''
      }
    };
  },
  methods: {
    handleSignUp() {
      AuthService.register(this.user).then(response => {
        console.log(response.data);
      });
    }
  }
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

.signup-form {
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
