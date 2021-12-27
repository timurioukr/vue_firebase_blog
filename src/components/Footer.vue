<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <ul>
            <li>
              <a href="#"><youTube class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><instagram class="svg-icon"/></a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon"/></a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <router-link class="header" :to="{ name: 'Home' }">Fireblogs</router-link>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { SocialIcons } from "../constants/icon";


export default {
  name: 'footer-vue',
  components: {
    ...SocialIcons,
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 10px;
  background-color: #000e58;
  .container {
    display: flex;
    flex-direction: column;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: rosybrown;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        text-align: center;
        font-size: 24px;
        color: ivory;
        text-decoration: none;
        font-weight: 600;
        @media (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        display: flex;
        flex: 1;
      }

      .col-1 {
        flex-direction: column;
        h2 {
          text-align: center;
          @media (min-width: 800px) {
            text-align: initial;
          }
        }
        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;
            .svg-icon {
              width: 24px;
              height: auto;
              color: white;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 16px;
            font-weight: 500;
            color: white;
            text-decoration: none;
          }
        }
      }
    }

    .right {
      gap: 32px;
      color: aliceblue;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
  }
}


</style>