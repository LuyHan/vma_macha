<template>
    <button class="action-button">
      {{ text }}
      <span v-if="badge !== null" class="badge">{{ badge }}</span>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      text: String,
      badge: {
        type: Number,
        default: null
      }
    }
  };
  </script>
  
  <style scoped>
  .action-button {
    background-color: #00c17d;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    position: relative;
  }
  .badge {
    background-color: red;
    color: white;
    font-size: 12px;
    border-radius: 12px;
    padding: 2px 8px;
    margin-left: 8px;
  }
  </style>
  