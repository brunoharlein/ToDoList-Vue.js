new Vue({
  el: '#app',
  data: {
    // v-model
    nouvelleTache: '',
    // tableau vide
    tasks: []
  },
  methods: {
    // method ajout 
    ajout() {
      this.tasks.push(this.nouvelleTache)
      this.nouvelleTache = "";
    }
  }
})
