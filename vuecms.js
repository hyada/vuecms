const Text = {
  data() {
    return {
      "text_1":"",
      "text_2":"",
      "link":"",
      "ref_link":"",
      "arget_link":"",
    }
  },
  mounted() {
    axios.get('vuecms.json')
      .then(response => {
        this.text_1 = response.data.text_1
        this.text_2 = response.data.text_2
        this.link = response.data.link
        this.ref_link = response.data.ref_link
        this.arget_link = response.data.arget_link
      })
      .catch(error => console.log(error))
  }
}

Vue.createApp(Text).mount('#text')
