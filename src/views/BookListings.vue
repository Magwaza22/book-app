<template>
  <div class="container">
    <h1>Book Listing</h1>
    <div v-for="(books, category) in categorizedBooks" :key="category" class="category-section">
      <h2>{{ category }}</h2>
      <div class="book-list">
        <div v-for="book in books" :key="book.bookId" class="book-item">
          <img :src="require(`@/assets/${book.imageUrl}`)" :alt="book.title" class="book-image" />
          <h3>{{ book.title }}</h3>
          <p><strong>Author:</strong> {{ book.author }}</p>
          <p><strong>Edition:</strong> {{ book.edition }}</p>
          <p><strong>Price:</strong> ${{ book.price }}</p>
          <label>
            <input type="checkbox" v-model="selectedBooks" :value="book.bookId" />
            Select this book
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      books: [
        {
          bookId: '1',
          category: 'Programming',
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Rockford',
          edition: '1st',
          price: 25.99,
          imageUrl: 'CJava.jpg'
        },
        {
          bookId: '2',
          category: 'Programming',
          title: 'Clean Code',
          author: 'Robert C. Martin',
          edition: '1st',
          price: 32.99,
          imageUrl: 'python.jpg'
        },
        {
          bookId: '3',
          category: 'Programming',
          title: 'You Don’t Know JS',
          author: 'Kyle Simpson',
          edition: '1st',
          price: 22.99,
          imageUrl: 'java.jpg'
        },
        {
          bookId: '4',
          category: 'Programming',
          title: 'The Pragmatic Programmer',
          author: 'Andrew Hunt, David Thomas',
          edition: '2nd',
          price: 45.99,
          imageUrl: 'pragmatic_programmer.jpg'
        },
        {
          bookId: '5',
          category: 'Marketing',
          title: 'Contagious: How to Build Word of Mouth in the Digital Age',
          author: 'Jonah Berger',
          edition: '1st',
          price: 18.99,
          imageUrl: 'markerting.jpg'
        }
        // Additional books if needed
      ],
      selectedBooks: []
    };
  },
  computed: {
    categorizedBooks() {
      return this.books.reduce((acc, book) => {
        if (!acc[book.category]) {
          acc[book.category] = [];
        }
        acc[book.category].push(book);
        return acc;
      }, {});
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align the content */
}
h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}
.category-section {
  margin-bottom: 40px;
  width: 100%; /* Ensure category sections take full width */
}
h2 {
  color: #444;
  margin-bottom: 20px;
}
.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center align book items */
  gap: 20px;
}
.book-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
}
.book-image {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 15px;
}
label {
  display: block;
  margin-top: 10px;
}
</style>
