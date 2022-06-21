<template>
  <section>
    <div id="app">
      <HeaderComp />
    </div>
  </section>
</template>

<script>
import HeaderComp from "./components/Header.vue";
export default {
  name: "App",
  components: {
    HeaderComp,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}

</style>
