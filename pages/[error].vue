<template>
    <div class="flex justify-center items-center min-h-screen">
        <div>
          <p class="w l_48 text-3xl">404 not found</p>


            <p class="text-[#95959A80] text-2xl">Looking something we don't serve?</p>
            <p>
                <router-link to="/" class="text-3xl text-[#20CE70]">back to home</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "error"
})
</script>

<style lang="scss" scoped></style>