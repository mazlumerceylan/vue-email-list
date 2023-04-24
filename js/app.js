const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      loading: false,
    };
  }
}).mount('#app')