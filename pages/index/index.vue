<template>
  <div class="box">
    <div class="a"></div>
    <div class="b"></div>
    <div class="c"></div>
    <div class="d"></div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: var(--change-transition);

  .a {
    background: orange;
    width: var(--width);
    height: var(--height);
    transition: var(--change-transition);
  }
  .b {
    background: aqua;
    width: var(--width);
    height: var(--height);
    transition: var(--change-transition);
  }
  .c {
    background: blanchedalmond;
    width: var(--width);
    height: var(--height);
    transition: var(--change-transition);
  }
  .d {
    background: brown;
    width: var(--width);
    height: var(--height);
    transition: var(--change-transition);
  }
}
</style>
