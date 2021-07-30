<template>
  <div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP2</span>
        <h4>以下にお答えください</h4>
      </div>

      <form class="question-box">
        <p>現在、生命保険に加入されていますか？</p>
        <input type="radio" name="question" value="ok" id="a" v-on:click="change"/>
        <label for="a">はい</label>
        <input type="radio" name="question" value="no" id="b" v-on:click="change"/>
        <label for="b">いいえ</label>
      </form>

        <form class="question-box" v-if="show">
          <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <input type="radio" name="question" value="ok" id="c" v-on:click="change2" />
          <label for="c">はい</label>
          <input type="radio" name="question" value="no" id="d" v-on:click="change2" />
          <label for="d">いいえ</label>
        </form>

      <form class="question-box" v-if="show">
        <p>過去５年以内に、病気やけがで、手術をうけたことまたは、継続して７日以上の入院をしたことがありますか？</p>
        <input type="radio" name="question" value="ok" id="e" />
        <label for="e">はい</label>
        <input type="radio" name="question" value="no" id="f" />
        <label for="f">いいえ</label>
      </form>
    </div>

    <div class="page-transition-button">
      <button id="back-btn" class="back-btn">前へ戻る</button>
      <button id="next-btn" class="next-btn">次へ進む</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        show:false
    };
  },
  methods: {
      change:function() {
          this.show = true;
      }
      }
};

</script>