<template>
  <div class="home">
    <blog-post :post='welcomeScreen'/>
    <blog-post v-for="(post, index) in blogPostsFeed" :key="index" :post='post'/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card :post='post' v-for='(post, index) in blogPostsCards' :key='index'/>
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Lorem ipsum set amet dolorem</h2>
        <router-link class="router-button" to='#'>
          If you want to contact, please send me message<Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue'
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCard,
    Arrow
  },
  data () {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost: 'This blog was created with Vue and Firebase',
        welcomeScreen: true,
        photo: 'coding'
      },
    }
  },
  computed: {
    blogPostsCards() {
      return this.$store.getters.blogPostsCards
    },
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed
    },
    user() {
      return this.$store.state.user
    }
  }
};
</script>

<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>