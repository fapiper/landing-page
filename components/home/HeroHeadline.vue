<template>
  <h1
    class="
      whitespace-nowrap
      text-4xl
      2xl:text-6xl
      leading-relaxed
      2xl:leading-relaxed
    "
  >
    <slot></slot>
    <span
      class="
        inline-block
        relative
        align-top
        transition-all
        duration-700
        ease-in-out
        overflow-hidden
      "
      :style="{ width: wrapperWidth + 'px' }"
    >
      <span
        ref="words"
        v-for="(word, index) in words"
        :key="index"
        class="
          inline-block
          h-full
          text-blue
          whitespace-nowrap
          absolute
          top-0
          left-0
          opacity-0
          pr-4
        "
        :class="{ 'relative opacity-100': index === currentWordIndex }"
      >
        {{ word }}
      </span>
      <div class="absolute right-0 top-0 h-full w-px bg-white"></div>
    </span>
  </h1>
</template>

<script>
export default {
  props: {
    words: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      animationDelay: 3200,
      currentWordIndex: 0,
      wrapperWidth: 0,
    }
  },
  mounted() {
    this.show(this.currentWordIndex)
  },
  methods: {
    hide() {
      this.wrapperWidth = 1
      const nextWordIndex =
        this.currentWordIndex < this.words.length - 1
          ? this.currentWordIndex + 1
          : 0
      setTimeout(() => {
        this.show(nextWordIndex)
      }, this.animationDelay / 3)
    },
    show(index) {
      this.wrapperWidth = this.$refs.words[index].scrollWidth
      this.currentWordIndex = index
      setTimeout(() => {
        this.hide()
      }, this.animationDelay * (2 / 3))
    },
  },
}
</script>

<style scoped></style>
