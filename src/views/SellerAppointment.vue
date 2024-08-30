<template>
  <div class="container">
    <h1>BookJunction Appointments</h1>

    <!-- Appointment Form for Delivery -->
    <div class="appointment-form">
      <h2>Appointment to Deliver Book</h2>
      <form @submit.prevent="bookAppointment" class="form">
        <input type="hidden" v-model="form.bookID" value="12345">
        <input type="hidden" v-model="form.userID" value="67890">
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="form.description"></textarea>
        </div>
        <div class="form-group">
          <label for="date">Date:</label>
          <input type="date" id="date" v-model="form.date">
        </div>
        <div class="form-group">
          <label for="time">Time:</label>
          <input type="time" id="time" v-model="form.time">
        </div>
        <div class="form-group">
          <label>Location:</label>
          <p>{{ form.location }}</p> <!-- Display static address -->
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
export default {
  data() {
    return {
      form: {
        bookID: '12345',
        userID: '67890',
        description: '',
        date: '',
        time: '',
        location: 'Hanover St, District Six, Cape Town, 7925, Library' // Live static address
      },
      showPopup: false,
      popupMessage: ''
    };
  },
  methods: {
    bookAppointment() {
      // Logic for booking the appointment
      this.popupMessage = 'Delivery appointment booked successfully!';
      this.showPopup = true;
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

textarea,
input[type="date"],
input[type="time"] {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #a69e9e;
  border-radius: 4px;
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