<template>
  <div>
    <h1>Nuxt News</h1>

    <div>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <ul v-for="headline in headlines" :key="headline.id">
      <li>{{ headline }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const topHeadlines = await app.$axios.$get(
      "/api/top-headlines?country=us"
    );

    return { headlines: topHeadlines.articles };
  }
};
</script>