<template>
  <div class="swiper-container oneq">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/300.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/378.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/379.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/380.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/381.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/382.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/376.jpg" alt="">
        </div>
        <div class="swiper-slide">
            <img src="../../../../public/huawei/img/377.jpg" alt="">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name:"xhuawei-one",
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