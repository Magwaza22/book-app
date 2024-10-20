<template>
  <div class="container">
    <h1>Enter Book Details</h1>
    <div class="book-form">
    <form @submit.prevent="handleSubmit">

      <div class="form-group">
      <label for="bookPhoto">Book Photo</label>
      <input type="file" id="bookPhoto" @change="handleFileUpload" />
      </div>

      <div class="form-group">
      <!-- ISBN -->
      <label for="isbn">ISBN</label>
      <input type="text" id="isbn" v-model="bookDetails.ISBN" placeholder="Enter ISBN" />
      </div>

      <div class="form-group">
      <!-- Title -->
      <label for="title">Title</label>
      <input type="text" id="title" v-model="bookDetails.title" placeholder="Enter Book Title" />
      </div>

      <div class="form-group">
      <!-- Edition -->
      <label for="edition">Edition</label>
      <input type="text" id="edition" v-model="bookDetails.edition" placeholder="Enter Edition" />
      </div>

      <div class="form-group">
      <!-- Author First Name -->
      <label for="authorFirstName">Author First Name</label>
      <input type="text" id="authorFirstName" v-model="bookDetails.authorFirstName" placeholder="Enter Author's First Name" />
      </div>

      <div class="form-group">
      <!-- Author Last Name -->
      <label for="authorLastName">Author Last Name</label>
      <input type="text" id="authorLastName" v-model="bookDetails.authorLastName" placeholder="Enter Author's Last Name" />
      </div>

      <div class="form-group">
      <!-- Price -->
      <label for="price">Price</label>
      <input type="number" id="price" v-model="bookDetails.price" placeholder="Enter Price" />
      </div>

      <button type="submit">Submit</button>

    </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookDetails: {
        bookPhoto: null, // Will hold the uploaded file as byte[]
        ISBN: '',
        title: '',
        edition: '',
        authorFirstName: '',
        authorLastName: '',
        price: null
      }
    };
  },
  methods: {
    async saveBook() {
      try {
        // Send a POST request to the backend API to save book details
        const response = await fetch('http://localhost:8080/book/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.bookDetails)
        });

        if (!response.ok) {
          throw new Error('Error saving book details');
        }

        const data = await response.json();
        console.log('Book details saved:', data);

        // Navigate to a different page upon success
        this.navigateTo('SellerAppointment');
      } catch (error) {
        console.error('Failed to save book details:', error);
      }
    },
    navigateTo(pageName) {
      this.$router.push({ name: pageName });
    },
    handleSubmit() {
      this.saveBook();
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #F0EFEB;
  color: #283618;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #B7B7A4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0);
}

h1 {
  text-align: center;
  color:#283618;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #283618;
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

button {
  width: 100%;
  padding: 12px;
  background-color: #8c7851;
  color: #F0EFEB;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #D4D4D4;
  color: #8c7851;
}
</style>
