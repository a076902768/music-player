<template>
  <div class="lower-panel">
    <div class="lower-panel__container">
      <Header />
      <div class="lower-panel__container__content">
        <Collection />
        <List />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/LowerPanel/header'
import Collection from '@/components/LowerPanel/collection'
import List from '@/components/LowerPanel/list'

export default {
  components: {
    Header,
    Collection,
    List
  }
}
</script>

<style lang="scss" scoped>
.lower-panel {
  width: 100%;
  height: calc(100% - #{$upper-panel-height});
  background-image: linear-gradient(to bottom, $lower-panel-background-color1, $upper-panel-background-color2);
  border-radius: $main-radius;
  padding: 2%;
  box-sizing: border-box;

  &__container {
    width: 100%;
    height: 100%;
    background-color: $main-color;

    &__content {
      display: flex;
      padding: 0.5rem 0.5rem 0 0.5rem;
    }
  }
}
</style>
