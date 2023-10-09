<template>
    <div class="field">
        <img class="jackson" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/259197.png.adapt.265w.png"
             alt="">
        <img class="sterling" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/202652.png.adapt.265w.png"
             alt="">
        <img class="mudryk" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/246340.png.adapt.265w.png"
             alt="">
        <img class="nkunku" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/232411.png.adapt.265w.png"
             alt="">
        <img class="enzo" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/247090.png.adapt.265w.png"
             alt="">
        <img class="caicedo" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/256079.png.adapt.265w.png"
             alt="">
        <img class="james" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/238074.png.adapt.265w.png"
             alt="">
        <img class="axel" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/229942.png.adapt.265w.png"
             alt="">
        <img class="silva" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/164240.png.adapt.265w.png"
             alt="">
        <img class="chilwell" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/229984.png.adapt.265w.png"
             alt="">
        <img class="sanchez" width="100"
             src="https://media.contentapi.ea.com/content/dam/ea/easfc/fc-24/ratings/common/full/player-shields/en/228789.png.adapt.250w.png"
             alt="">
    </div>
</template>

<script>
export default {
    name: "Team"
}
</script>

<style lang="scss" scoped>
.field {
    border-radius: 15px;
  position: relative;
  width: 100%;
  min-height: 712px;
  background-image: url("../assets/field.webp");
  background-size: cover;

  .jackson {
    position: absolute;
    top: 40%;
    left: 15%;
  }

  .sterling {
    position: absolute;
    top: 15%;
    left: 25%;
  }

  .mudryk {
    position: absolute;
    top: 65%;
    left: 25%;
  }

  .nkunku {
    position: absolute;
    top: 40%;
    left: 32%;
  }

  .enzo {
    position: absolute;
    top: 25%;
    left: 45%;
  }

  .caicedo {
    position: absolute;
    top: 50%;
    left: 51%;
  }

  .james {
    position: absolute;
    top: 10%;
    right: 30%;
  }

  .axel {
    position: absolute;
    top: 25%;
    right: 20%;
  }

  .silva {
    position: absolute;
    bottom: 25%;
    right: 20%;
  }

  .chilwell {
    position: absolute;
    bottom: 10%;
    right: 30%;
  }

  .sanchez {
    position: absolute;
    top: 40%;
    right: 11%;
  }
}
</style>