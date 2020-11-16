<template>
  <h2 class="mb-4">Gyakorlás</h2>
  <Solution v-if="actualAnswer" :expectedAnswer="expectedAnswer" :actualAnswer="actualAnswer" :fixedIndex="fixedIndex"/>
  <Score v-if="total" :total="total" :correct="correct"/>
  <Question :form="form" :formIndex="formIndex" @answer-submitted="checkAnswer"/>
</template>

<script>

import Solution from './Solution.vue'
import Score from './Score.vue'
import Question from './Question.vue'

export default {
  components: {
    Solution,
    Score,
    Question
  },
  name: 'Practice',
  props: {
    words: Object
  },
  data() {

    this.wordIndex = Math.floor(Math.random() * this.words.length)
    this.formIndex = Math.floor(Math.random() * 4)
    let availableForms = this.words[this.wordIndex][this.formIndex]
    this.form = availableForms[Math.floor(Math.random() * availableForms.length)]

    return {
      wordIndex: this.wordIndex,
      form: this.form,
      formIndex: this.formIndex,
      total: 0,
      correct: 0,
      expectedAnswer: null,
      actualAnswer: null,
      fixedIndex: 0
    }
  },
  methods: {
    checkAnswer(answer) {
      this.expectedAnswer = this.words[this.wordIndex]
      this.actualAnswer = answer
      this.fixedIndex = this.formIndex

      this.total += 1
      if (this.answerIsCorrect()) {
        this.correct += 1
      }

      this.wordIndex = Math.floor(Math.random() * this.words.length)
      this.formIndex = Math.floor(Math.random() * 4)
      this.form = this.words[this.wordIndex][this.formIndex][0]
    },
    answerIsCorrect() {
      return this.expectedAnswer[0].includes(this.actualAnswer[0]) &&
        this.expectedAnswer[1].includes(this.actualAnswer[1]) &&
        this.expectedAnswer[2].includes(this.actualAnswer[2]) &&
        this.expectedAnswer[3].includes(this.actualAnswer[3])
    }
  },
  updated() {
    if (this.actualAnswer) {
      window.$([document.documentElement, document.body]).animate({
        scrollTop: window.$("#solution").offset().top - 20
      }, 500);
    }
  }
}
</script>

<style scoped>
</style>
