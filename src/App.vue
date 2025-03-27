<template>
  <div id="app">
    <header>
      <h1>Budgeting App</h1>
      <nav>
        <router-link to="/">Dashboard</router-link>
        <router-link to="/expenses">Track Expenses</router-link>
        <router-link to="/budget">Manage Budget</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #10002B; /* Darkest color */
  color: #E0AAFF; /* Lightest color for text */
}

/* Main container */
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
}

/* Header styling */
header {
  background-color: #240046; /* Dark purple */
  color: #E0AAFF;
  padding: 20px 40px;
  width: 100%;
  text-align: center;
  border-radius: 8px;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

/* Navigation */
nav {
  margin-top: 10px;
}

nav a {
  color: #C77DFF; /* Soft lavender for links */
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.1rem;
}

nav a:hover {
  color: #5A189A; /* Vibrant purple for hover */
  text-decoration: underline;
}

/* Main content area */
main {
  padding: 20px;
  width: 80%;
  max-width: 900px;
  background-color: #3C096C; /* Medium purple for background */
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

/* Button styles */
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
  background-color: #7B2CBF; /* Lighter purple for hover effect */
}

.buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}
</style>



