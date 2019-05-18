var taskList = new Vue({
  el: "#app",
  data: {
    items: [],
    newItem: ""
  },
  methods: {
    addItem: function() {
      var text = this.newItem;
      if (text) {
        this.items.push({
          text: text,
          done: false
        });
        this.newItem = "";
      }
    }
  }
});
