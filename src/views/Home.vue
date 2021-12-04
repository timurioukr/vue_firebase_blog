<template>
  <div class="home">
    <blog-post :post='welcomeScreen'/>
    <blog-post v-for="(post, index) in sampleBlogPost" :key="index" :post='post'/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-cards :post='post' v-for='(post, index) in sampleBlogCards' :key='index'/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCards from '../components/BlogCard.vue'

export default {
  name: "Home",
  components: {BlogPost, BlogCards},
  data () {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost: 'Lorem ipsum set amet dolorem',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
        {
          title: 'This is a Filler Title!',
          blogHTML: 'This is a Filler blog post title!',
          blogCovewrPhoto: 'beautiful-stories'
        },
        {
          title: 'This is a Filler Title2!',
          blogHTML: 'This is a Filler blog post title!',
          blogCovewrPhoto: 'designed-for-everyone'
        }
      ],
      sampleBlogCards: [
        { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'May 1, 2021' },
        { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'May 2, 2021' },
        { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'May 3, 2021' },
        { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'May 4, 2021' },
      ]
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
</style>
