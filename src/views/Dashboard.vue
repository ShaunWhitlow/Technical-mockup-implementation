<template>
  <div>
    <h2>Welcome to Your Dashboard!</h2>
    <p>Total Balance: <strong>$1,200</strong></p>
    <div class="buttons">
      <router-link to="/expenses" class="btn">Track Expenses</router-link>
      <router-link to="/budget" class="btn">Manage Budget</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #E0AAFF; /* Lightest lavender for title */
}

p {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #C77DFF; /* Soft lavender for text */
}

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: #fff;
  background-color: #5A189A; /* Vibrant purple */
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #7B2CBF; /* Lighter purple for hover */
}
</style>



