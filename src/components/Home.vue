<template>
  <v-layout>

    <v-layout row wrap>
      <v-flex xs12>
        <div><p> Hola mundo</p></div>
        <div>{{nuevoMensaje}}</div>
      </v-flex>
    <v-flex xs12>
      <div v-text="message"></div>
    </v-flex>
    <v-flex xs12>
      <v-btn color="primary" v-on:click="reply">Reply</v-btn>
    </v-flex>
  </v-layout>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Por aqui todo anda de maravilla',
      nuevoMensaje: 'Hola arturito,',
    };
  },
  methods: {
    reply() {
      this.message = "I'm doing great. Thank You!";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
