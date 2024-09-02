<template>
  <div class="container">
    <div class="header">
      <img src="../assets/logo.jpg" alt="Reviews Header" />
      <h1>Your feedback matters to me</h1>
    </div>

    <div class="reviews-list">
      <div v-for="review in reviews" :key="review.id" class="review-item">
        <div class="review-content">
          <p><strong>Customer:</strong> {{ review.customerName }}</p>
          <p><strong>Rating:</strong> {{ review.rating }} / 5</p>
          <p><strong>Review:</strong> {{ review.content }}</p>
        </div>
        <div class="reply-section">
          <textarea v-model="replyTexts[review.id]" placeholder="Write your reply here..." rows="3"></textarea>
          <button @click="submitReply(review.id)" class="reply-button">Reply</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Dummy data for reviews
const reviews = ref([
  { id: 1, customerName: 'Alice', rating: 4, content: 'Great service, very helpful!' },
  { id: 2, customerName: 'Bob', rating: 5, content: 'Fantastic experience, will definitely return.' },
  // Add more reviews as needed
]);

const replyTexts = ref({});

const submitReply = (reviewId) => {
  const replyText = replyTexts.value[reviewId];
  if (replyText) {
    // Handle reply submission logic here
    console.log(`Replying to review ${reviewId}: ${replyText}`);
    // Clear the reply field after submission
    replyTexts.value[reviewId] = '';
  } else {
    alert('Please enter a reply.');
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #d4c6a9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header {
  text-align: center;
  margin-bottom: 30px;
}
.header img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.header h1 {
  color: #333;
  margin-top: 10px;
}
.reviews-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.review-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
}
.review-content {
  margin-bottom: 10px;
}
.reply-section {
  margin-top: 10px;
}
.reply-section textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f0efeb;
}
.reply-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #8c7851;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.reply-button:hover {
  background-color: #6f5f40;
}
</style>
