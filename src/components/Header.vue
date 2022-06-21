<template>
  <section class="src-components-home">
    <div id="header">
      <h1>
        The Great <br />
        <span id="colorDisplay">{{ $store.state.pickedColor }} </span>
        <br />
        Guessing Game
      </h1>
    </div>
    <Navigator />
  </section>
</template>

<script>
import Navigator from "./Navigator.vue";

export default {
  name: "src-components-home",
  props: [],
  components: {
    Navigator,
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
#colorDisplay {
  font-size: 200%;
}
</style>
