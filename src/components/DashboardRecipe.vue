<template>
  <div style="width: 80%" class="mx-auto">
    <h3 class="my-3 text-start">Resepku</h3>
    <div v-if="Object.keys(recipes).length === 0" class="text-muted">
      Kamu masih belum punya resep nih, yuk mulai berbagi resep kesukaanmu!
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardRecipe",
  data() {
    return {
      recipes: {},
    };
  },
};
</script>
