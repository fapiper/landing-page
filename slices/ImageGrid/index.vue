<template>
  <section class="image-grid" :id="slice.primary.slug">
    <div class="container px-4 mx-auto">
      <div
        class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
        v-animate:children
      >
        <div
          class="w-full overflow-hidden"
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
        >
          <img
            v-lazy
            v-simple-parallax
            class="w-full"
            :data-src="item.image.url"
            :alt="item.image.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ImageGrid',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
