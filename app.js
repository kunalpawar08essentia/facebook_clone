const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false
    };
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxASelected = !this.boxASelected;
      } 
    }
  }
});

app.mount('#styling');
