const Text = {
  data() {
    return {
      "text_1":"",
      "text_2":"",
    }
  },
  mounted() {
    axios.get('vuecms.json')
      .then(response => {
        this.text_1 = response.data.text_1
        this.text_2 = response.data.text_2
      })
      .catch(error => console.log(error))
  }
}

Vue.createApp(Text).mount('#text')
