<template>
  <div>
    <div class="questionnaire-box">
      <div class="questionnaire-box-header">
        <span>STEP2</span>
        <h4>以下にお答えください</h4>
      </div>

      <form class="question-box">
        <p>現在、生命保険に加入されていますか？</p>
        <input type="radio" name="question" value="はい" id="a" v-on:click="openQuestion2nd" v-model="question"/>
        <label for="a">はい</label>
        <input type="radio" name="question" value="いいえ" id="b" v-on:click="openQuestion2nd" v-model="question"/>
        <label for="b">いいえ</label>
      </form>

        <form class="question-box" v-if="isOpen2ndQuestion">
          <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <input type="radio" name="question" value="はい" id="c" v-on:click="openQuestion3rd" v-model="question2nd" />
          <label for="c">はい</label>
          <input type="radio" name="question" value="いいえ" id="d" v-on:click="openQuestion3rd" v-model="question2nd" />
          <label for="d">いいえ</label>
        </form>

      <form class="question-box" v-if="isOpen3rdQuestion">
        <p>過去５年以内に、病気やけがで、手術をうけたことまたは、継続して７日以上の入院をしたことがありますか？</p>
        <input type="radio" name="question" value="はい" id="e" v-model="question3rd" />
        <label for="e">はい</label>
        <input type="radio" name="question" value="いいえ" id="f" v-model="question3rd" />
        <label for="f">いいえ</label>
      </form>
    </div>

    <div class="page-transition-button">
<button><router-link to="/First">前へ戻る</router-link></button> 
<button><router-link to="/Third">次に進む</router-link></button> 
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        isOpen2ndQuestion:false,
        isOpen3rdQuestion:false
    };
  },
  methods: {
      openQuestion2nd:function() {
          this.isOpen2ndQuestion = true;
      },
      openQuestion3rd:function(){
        this.isOpen3rdQuestion = true;
      }},

computed: {
       question:{
         get(){
           return this.$store.getters.getQuestion;
         },
         set(val){
             this.$store.dispatch('setQuestion',val);
           }},
           question2nd:{
         get(){
           return this.$store.getters.getQuestion2nd;
         },
         set(val){
             this.$store.dispatch('setQuestion2nd',val);
           }},
            question3rd:{
         get(){
           return this.$store.getters.getQuestion3rd;
         },
         set(val){
             this.$store.dispatch('setQuestion3rd',val);
           }}
           }};
</script>