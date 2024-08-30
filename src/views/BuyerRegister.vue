<template>
  <div class="registration-container">
    <h1>Register as a Buyer</h1>
    <form @submit.prevent="registerBuyer">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="buyer.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="buyer.email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="buyer.password" required />
      </div>
      <div class="form-group">
        <label for="phoneNumber">Phone Number:</label>
        <input type="text" id="phoneNumber" v-model="buyer.phoneNumber" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  name: 'BuyerRegistration',
  setup() {
    // Reactive state for buyer details
    const buyer = ref({
      name: '',
      email: '',
      password: '',
      phoneNumber: ''
    });

    const message = ref('');

    // Function to register a new buyer
    const registerBuyer = async () => {
      try {
        const response = await axios.post('/buyer', buyer.value);
        if (response.status === 201) {
          message.value = 'Registration successful!';
          // Reset buyer details after successful registration
          buyer.value = {
            name: '',
            email: '',
            password: '',
            phoneNumber: ''
          };
        }
      } catch (error) {
        message.value = 'Registration failed. Please try again.';
        console.error(error);
      }
    };

    return { buyer, message, registerBuyer };
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
