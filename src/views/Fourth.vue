<template>
  <div class="Fourth">
        <span>STEP4</span>
        <h4>以下の内容をご確認ください</h4>
        <label for="gender">-性別-</label>
        <br>
        <div>{{ gender }}</div>
        <br>
        <label for="birthday">-生年月日-</label>
        <br>
        <div>{{ birthday }}</div>
        <br>
        <label for="question">-現在、生命保険に加入されていますか？-</label>
        <br>
        <div>{{ question }}</div>
        <br>
        <label for="question">-現在、入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</label>
        <br>
        <div>{{ question2nd }}</div>
        <br>
        <label for="question">-過去５年以内に、病気やけがで、手術をうけたことまたは、継続して７日以上の入院をしたことがありますか？-</label>
        <br>
        <div>{{ question3rd }}</div>
        <br>
        <label for="consultation">-相談内容-</label>
        <br>
        <div>{{ consultation }}</div>  
		
 <div class="button">
<button><router-link to="/Third">前へ戻る</router-link></button> 
<button>送信</button> <br>
</div>
  </div>
</template>
 <script>
  export default {
     computed: {
       gender(){
         return this.$store.state.gender
       },
       birthday(){
         return this.$store.state.birthday
       },
       question(){
         return this.$store.state.question
       },
       question2nd(){
         return this.$store.state.question2nd
       },
       question3rd(){
         return this.$store.state.question3rd
       },
       consultation(){
         return this.$store.state.consultation
       }
       }};



</script>