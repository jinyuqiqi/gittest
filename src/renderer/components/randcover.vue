<template>
  <div class="randcover_box">
      <h1>搞一个插槽</h1>
      <header>
      	<h1>大头</h1>
      	<slot name="header"></slot>
      </header>
      <slot></slot> 
	  <footer>
	  	<h1>底部</h1>
	  	<slot name="footer"></slot>
	  </footer>
  </div>
</template>

<script>
export default {
    data () {
      return {

      }
    },

    methods: {
    	
    },

    components: {
    	
    }
}
</script>

<style scoped>
.randcover_box{
	width: 100%;
	height: 480px;
	margin: 0 auto;
}
</style>
