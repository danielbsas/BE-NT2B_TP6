<template>
  <section class="src-components-board">
    <div id="container">
      <div
        class="square"
        v-for="(square, index) in $store.state.squares"
        :key="index"
        :style="square.style"
        @click="getStyle(square.style)"
      ></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-board",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    getStyle(squareStyle) {
      let  {backgroundColor}  = squareStyle;
      console.warn(backgroundColor)
      console.log(this.$store.state.pickedColor)
      
      if (backgroundColor === this.$store.state.pickedColor) {
        this.$store.dispatch("setMessage", "You Picked Right!");
        this.$store.dispatch("setButtonLabel", "Play Again!");
        document.querySelector("#header").style.backgroundColor =
          this.$store.state.pickedColor;
        this.setAllColorsTo(this.$store.state.pickedColor);
      } else {
        this.$store.dispatch("setMessage", "Try Again!");
        squareStyle.backgroundColor = "#232323";
      }
    },
    setAllColorsTo(pickedColor) {
      this.$store.state.squares.forEach(function (square) {
        square.style.backgroundColor = pickedColor;
      });
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}

#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
