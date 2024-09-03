<template>
  <div class="contact-page">
    <h1>Contact Us</h1>

    <div class="contact-info">
      <p><strong>Email:</strong> <a href="mailto:bookjunction@gmail.com">bookjunction@gmail.com</a></p>
      <p><strong>Phone:</strong> +123-456-7890</p>
      <p><strong>Address:</strong> 123 Bookstore Lane, CapeTown, South Africa</p>
    </div>

    <h2>Connect with us on Social Media</h2>
    <div class="social-icons">
      <a :href="facebookLink" target="_blank" aria-label="Facebook">
        <img src="@/assets/Facebook.png" alt="Facebook" class="icon-image" />
      </a>
      <a :href="twitterLink" target="_blank" aria-label="Twitter">
        <img src="@/assets/x.png" alt="Twitter" class="icon-image" />
      </a>
      <a :href="instagramLink" target="_blank" aria-label="Instagram">
        <img src="@/assets/insta.jpg" alt="Instagram" class="icon-image" />
      </a>
    </div>

    <h2>Send Us a Message</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      facebookLink: "https://www.facebook.com/yourpage",
      twitterLink: "https://www.twitter.com/yourpage",
      instagramLink: "https://www.instagram.com/yourpage",
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {

      alert(`Thank you for your message, ${this.form.name}! We will get back to you shortly.`);
      // Reset form
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.contact-page {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 50px;
}

.contact-info {
  margin-bottom: 30px;
}

.social-icons {
  margin-bottom: 30px;
}

.social-icons a {
  margin: 0 15px;
  display: inline-block;
}

.icon-image {
  width: 40px;
  height: 40px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
