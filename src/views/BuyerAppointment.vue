<template>
  <div class="container">
    <h1>BookJunction Appointments</h1>

    <div class="appointment-form">
      <h2>Appointment to Collect Book</h2>
      <form @submit.prevent="bookAppointment">
        <input type="hidden" v-model="form.orderID">
        <input type="hidden" v-model="form.buyerID">
        <div class="form-group">
          <label for="buyername">Buyer Name:</label>
          <input type="text" id="buyername" v-model="form.buyername">
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email">
        </div>
        <div class="form-group">
          <label for="phonenumber">Phone Number:</label>
          <input type="tel" id="phonenumber" v-model="form.phonenumber">
        </div>
        <div class="form-group">
          <label for="location">Location:</label>
          <select id="location" v-model="form.location">
            <option v-for="location in locations" :key="location.id" :value="location.address">
              {{ location.address }}
            </option>
          </select>
        </div>
        <button type="submit" class="submit-btn">Book Appointment</button>
      </form>
    </div>

    <!-- Pop-up Modal -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="close-btn" @click="closePopup">&times;</span>
        <p>{{ popupMessage }}</p>
      </div>
    </div>
  </div>
</template>



<script>
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        orderID: uuidv4(),
        buyerID: uuidv4(),
        buyername: '',
        email: '',
        phonenumber: '',
        location: '' // Initialized as empty
      },
      locations: [], // Array to store fetched locations
      showPopup: false,
      popupMessage: ''
    };
  },
  mounted() {
    this.fetchLocations(); // Fetch locations when component mounts
  },
  methods: {
    fetchLocations() {
      axios
          .get('http://localhost:8080/location/getall') // Adjust the endpoint as necessary
          .then(response => {
            this.locations = response.data;
          })
          .catch(error => {
            console.error(error);
          });
    },
    bookAppointment() {
      // Logic to book the appointment
      this.popupMessage = 'Collection appointment booked successfully!';
      this.showPopup = true;
      this.$router.push({ name: 'Ratings' });
    },
    closePopup() {
      this.showPopup = false;
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
  border: 1px solid #a69e9e;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
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
  margin-bottom: 10px;
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
  border-radius: 8px;
  text-align: center;
  position: relative;
  border: 1px solid #a69e9e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
