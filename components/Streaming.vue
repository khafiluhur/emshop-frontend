<template>
  <div>
    <div class="desktop">
      <div class="mx-12 my-20 text-center">
        <img class="my-2" src="../static/coming_soon.svg" />
        <p class="font-bold">Coming Soon</p>
        <p class="my-2">
          Streaming Saat ini belum tersedia silahkan kembali nanti.
        </p>
      </div>
      <div class="mb-5 mx-12 2xl:mx-96">
        <div class="striped-border"></div>
      </div>
    </div>
    <div class="mobile">
      <div class="mx-12 my-20 text-center">
        <img class="my-2" src="../static/coming_soon.svg" />
        <p class="font-bold title-coming">Coming Soon</p>
        <p class="my-2 title-text-coming">
          Streaming Saat ini belum tersedia silahkan kembali nanti.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Streaming',
}
</script>

<style>
.title-coming {
  font-size: 20px;
}
.title-text-coming {
  font-size: 14px;
}
</style>
