<template>
  <header class="w-full container mx-auto">
    <div class="flex flex-col justify-center items-center pt-12 pb-5">
      <div>
        <img
          alt="Its me"
          src="@/assets/img/me.jpg"
          class="w-20 h-20 rounded-full shadow-md"
        />
      </div>
      <div class="mt-4 px-4 text-center">
        <p class="text-md">Welcome to my Blog 😎</p>
        <p class="text-md mt-2">I am web developer with stackoverflow and wibu without stackoverflow</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>