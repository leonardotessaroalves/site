<template>
  <div class="font-ubuntu text-[#858585] text-center w-full max-w-xs mx-auto">
    <figure class="inline-block border rounded-lg p-4 mb-5 mx-auto border-[#858585]">
      <img src="/me.png" alt="">      
    </figure>
    <h1 class="text-2xl">Leonardo Tessaro Alves</h1>
    <h2 class="text-xl">Desenvolvedor Front-End</h2>
    <ul class="mt-6 mb-[10px] list-skills flex justify-center">
      <li>
        <figure>
          <img src="/svgs/js.svg" alt="">
          <figcaption>javascript</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/svgs/vue.svg" alt="">
          <figcaption>Vue.js</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/svgs/nuxt.svg" alt="">
          <figcaption>nuxt</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/svgs/sass.svg" alt="">
          <figcaption>sass</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/svgs/html5.svg" alt="">
          <figcaption>html</figcaption>
        </figure>
      </li>
    </ul>
    <h5><a class="text-xs" href="mailto:leonardotessaroalves@gmail.com">leonardotessaroalves@gmail.com</a></h5>
    <h5><a class="text-xs" href="https://github.com/leonardotessaroalves">github</a></h5>
  </div>
</template>

<style lang="postcss">
.list-skills {
  @apply p-4 border-[#858585] border rounded-lg;
  li {
    @apply flex flex-col justify-center items-center grow;    
    &:not(:first-child) {
      @apply ml-2;
    }
    figure {
      @apply flex flex-col grow;
    }
    img {
      @apply flex mx-auto mb-2;
    }
    figcaption {
      @apply text-sm mb-0 mt-auto text-inherit;
    }
  }
}
</style>
