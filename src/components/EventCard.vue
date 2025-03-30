<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="event-card">
    <RouterLink :to="{ name: 'event-details', params: { id: event.id } }" class="event-card__link">
      <h2>{{ event.title }}</h2>
    </RouterLink>
    <span>@{{ event.location }} on {{ event.date }}</span>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39485c;
  margin-bottom: 18px;
  position: relative;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-card__link {
  text-decoration: none;
  color: inherit;
}

.event-card__link::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
