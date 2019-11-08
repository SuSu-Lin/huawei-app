<template>
  <div class="swiper-container two">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/390.png" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/351.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/377.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/378.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/379.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/376.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/391.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/honour/img/392.jpg" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:"xhonour-two",
    mounted () {
    new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
  })        
    }
}
</script>

<style>

</style>