<template>
  <div class="not-found">
    <h1>Oops! This page doesn't exist.</h1>
    <RouterLink :to="{ name: 'event-list' }">Go back to the home page</RouterLink>
  </div>
</template>
