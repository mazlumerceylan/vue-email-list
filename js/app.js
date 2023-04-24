const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      loading: false,
    };
  },
  methods: {
    generateEmails() {
      this.loading = true;
      for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(response => response.json())
          .then(data => {
            this.emails.push(data.response);
            if (this.emails.length === 10) {
              this.loading = false;
            }
          })
          .catch(error => {
            console.error('Errore durante la generazione delle email', error);
            this.loading = false;
          });
      }
    },
  },
}).mount('#app');
