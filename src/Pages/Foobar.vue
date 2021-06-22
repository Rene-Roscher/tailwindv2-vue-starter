<template>
  <frontend>
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <img src="https://play.tailwindcss.com/img/logo.svg" class="h-7 sm:h-8" />
          </div>
          <div class="divide-y divide-gray-200">
            <div class="flex justify-between pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>
                <router-link :to="{name: 'foo'}"> Foo &rarr; </router-link>
              </p>
              <p>
                <router-link :to="{name: 'bar'}"> Bar &rarr; </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </frontend>
</template>

<script>
import Frontend from "../Layout/Frontend";
export default {
  name: "Foobar",
  components: {Frontend}
}
</script>

<style scoped>

</style>