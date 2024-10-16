<template>
  <div class="mx-auto ma-0 pa-0 generic-wrapper">
    <div :class="['navigation-drawer-wrapper', { 'is-open': menu }]">
      <v-navigation-drawer
        v-model="menu"
        absolute
        temporary
        right
        color="#007880"
      >
        <v-list>
          <v-list-item
            link
            :to="{ path: '/', hash: '#about-mobile' }"
            v-text="`회사소개`"
          >
          </v-list-item>
          <v-list-item
            link
            :to="{ path: '/', hash: '#r-and-d' }"
            v-text="`사업영역`"
          >
          </v-list-item>
          <v-list-item
            link
            :to="{ path: '/', hash: '#products' }"
            v-text="`제품소개`"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
    <div class="c-nav-wrapper">
      <img
        class="c-logo"
        src="@/assets/images/resource/logo.png"
        alt="logo"
        @click="$router.push({ path: '/', hash: null })"
      />
      <img
        class="c-logo-mobile"
        src="@/assets/images/resource/mobile/top_logo.png"
        alt="logo"
        @click="$router.push({ path: '/', hash: null })"
      />

      <nav class="c-nav">
        <v-row>
          <v-spacer />
          <v-col>
            <router-link
              :to="{ path: '/', hash: '#about' }"
              v-text="`회사소개`"
            />
          </v-col>
          <v-col>
            <router-link
              :to="{ path: '/', hash: '#r-and-d' }"
              v-text="`사업영역`"
            />
          </v-col>
          <v-col>
            <router-link
              :to="{ path: '/', hash: '#products' }"
              v-text="`제품소개`"
            />
          </v-col>
        </v-row>
      </nav>
      <v-icon
        class="c-nav-mobile-button"
        color="white"
        size="36"
        @click="menu = true"
        >mdi-menu
      </v-icon>
    </div>
    <div class="hero-wrapper">
      <video
        src="@/assets/video/main_banner.mp4"
        autoplay
        muted
        loop
        playsinline
      />
      <div class="hero-message">
        조화를 이루는,<br />
        <p>건강한 미래를 창조합니다.</p>
      </div>
    </div>
    <div class="about-wrapper href-area" id="about">
      <div class="about-header">
        <h3>About Elbio</h3>
        <h2>Essential Life Partner</h2>
        <h4>함께라서 더나은 내일을 만듭니다.</h4>
      </div>
      <div class="about-contents">
        <div class="about-content-img">
          <img src="@/assets/images/resource/about_ring1.jpeg" alt="회사소개" />
        </div>
        <div class="about-content-body">
          <p>
            이엘바이오는 2024년 공공기술 창업사업화 과제로 설립된 바이오
            기업으로,<br />
            마이크로바이옴 기술 기반의 항생제 대체품 개발을 메인 목표로 하는
            R&D<br />
            회사 입니다. 당사는 혁신적인 생명과학 연구와 개발을 기반으로<br />
            발전시키며, 지속 가능한 발전과 환경 보호를 목표로 합니다.
          </p>
        </div>
        <div class="about-content-img">
          <img
            src="@/assets/images/resource/about_ring2.jpeg"
            alt="비젼&미션"
          />
        </div>
        <div class="about-content-body">
          <p>
            생명과학을 통한 동물복지와 자연이 조화를 이루는 건강한 미래를<br />
            창조합니다. 혁신적인 생명과학 기술을 바탕으로 지속 가능한 제품을<br />
            개발하여 전 세계에 건강과 행복을 제공합니다.
          </p>
        </div>
        <div class="about-content-img">
          <img
            src="@/assets/images/resource/about_ring3.jpeg"
            alt="사회적책임"
          />
        </div>
        <div class="about-content-body">
          <p>
            이엘바이오는 환경 보호와 사회적 책임을 중시하며, 지속 가능한 농업
            기술<br />
            개발과 환경 보호 활동을 적극적으로 추진하고 있습니다.
          </p>
        </div>
        <div class="about-content-img">
          <img
            src="@/assets/images/resource/about_ring4.jpeg"
            alt="인증 및 수상"
          />
        </div>
        <div class="about-content-body">
          <p>2024년 공공기술 창업사업화 과제 선정 및 수행</p>
        </div>
      </div>
    </div>
    <div class="about-wrapper-mobile href-area" id="about-mobile">
      <div class="about-header">
        <h3>About Elbio</h3>
        <h2>Essential Life Partner</h2>
        <h4>함께라서 더나은 내일을 만듭니다.</h4>
      </div>
      <v-carousel
        height="250"
        cycle
        :show-arrows="false"
        dark
        hide-delimiter-background
      >
        <v-carousel-item>
          <div class="about-content">
            <div class="about-content-img">
              <img
                src="@/assets/images/resource/mobile/about_ring1.jpg"
                alt="회사소개"
              />
            </div>
            <div class="about-content-body">
              <p>
                이엘바이오는 2024년 공공기술 창업사업화 과제로 설립된 바이오
                기업으로,<br />
                마이크로바이옴 기술 기반의 항생제 대체품 개발을 메인 목표로 하는
                R&D<br />
                회사 입니다. 당사는 혁신적인 생명과학 연구와 개발을 기반으로<br />
                발전시키며, 지속 가능한 발전과 환경 보호를 목표로 합니다.
              </p>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="about-content">
            <div class="about-content-img">
              <img
                src="@/assets/images/resource/mobile/about_ring2.jpg"
                alt="비젼&미션"
              />
            </div>
            <div class="about-content-body">
              <p>
                생명과학을 통한 동물복지와 자연이 조화를 이루는 건강한 미래를<br />
                창조합니다. 혁신적인 생명과학 기술을 바탕으로 지속 가능한
                제품을<br />
                개발하여 전 세계에 건강과 행복을 제공합니다.
              </p>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="about-content">
            <div class="about-content-img">
              <img
                src="@/assets/images/resource/mobile/about_ring3.jpg"
                alt="사회적책임"
              />
            </div>
            <div class="about-content-body">
              <p>
                이엘바이오는 환경 보호와 사회적 책임을 중시하며, 지속 가능한
                농업 기술<br />
                개발과 환경 보호 활동을 적극적으로 추진하고 있습니다.
              </p>
            </div>
          </div>
        </v-carousel-item>
        <v-carousel-item>
          <div class="about-content">
            <div class="about-content-img">
              <img
                src="@/assets/images/resource/mobile/about_ring4.jpg"
                alt="인증 및 수상"
              />
            </div>
            <div class="about-content-body">
              <p>2024년 공공기술 창업사업화 과제 선정 및 수행</p>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="r-and-d-wrapper href-area" id="r-and-d">
      <div class="r-and-d-contents">
        <div class="r-and-d-content">
          <div class="r-and-d-content-title">연구개발 (R&D)</div>
          <div class="r-and-d-content-body">
            <p>이엘바이오는</p>
            <p>마이크로바이옴 기술을 활용하여</p>
            <p>항균 기능의 항생제 대체품을 개발하고 있습니다.</p>
          </div>
        </div>
        <div class="r-and-d-content">
          <div class="r-and-d-content-title">보유 미생물</div>
          <div class="r-and-d-content-body">
            <p>Bifidobacterium pseudocatenulatum</p>
            <p>소화기 건강 증진 및 면역력 강화</p>
            <p>Lactobacillus plantarum</p>
            <p>장내 유익균 증식 및 항균 효과</p>
            <p>Lactobacillus reuteri</p>
            <p>항염증 및 항균 기능</p>
          </div>
        </div>
        <div class="r-and-d-content">
          <div class="r-and-d-content-title">환경 친화적 연구</div>
          <div class="r-and-d-content-body">
            지속 가능한 발전과 환경 보호를 목표로 하는 다양한 연구 및 개발
            활동을 진행하고 있습니다.
          </div>
        </div>
      </div>
    </div>
    <div class="products-wrapper href-area" id="products">
      <div class="products-contents">
        <div class="products-content" @click="dialog = true">
          <div class="products-content-title">제품소개</div>
          <div class="products-content-body">
            <p>마이크로바이옴 기술 기반의 행복하고 편안한,</p>
            <p>" 행복한씬 바이오틱스 "</p>
          </div>
        </div>
        <v-dialog v-model="dialog" max-width="1024">
          <v-card>
            <v-img
              src="@/assets/images/product/biotics.jpg"
              alt="행복한씬 바이오틱스 상세"
            />
          </v-card>
        </v-dialog>
      </div>
    </div>
    <footer class="footer">
      <div class="footer-site-information">
        <div class="footer-site-information-title">Site Information</div>
        <div class="footer-site-information-link">
          <router-link
            :to="{ path: '/', hash: '#about' }"
            v-text="`회사소개`"
          />
          <router-link
            :to="{ path: '/', hash: '#r-and-d' }"
            v-text="`사업영역`"
          />
          <router-link
            :to="{ path: '/', hash: '#products' }"
            v-text="`제품소개`"
          />
        </div>
      </div>
      <div class="footer-contents">
        <img src="@/assets/images/resource/footer_logo.png" alt="footer logo" />
        <div class="footer-copyright">
          상호명: 이엘바이오 대표자: 조성민 사업자등록번호: 862-27-01888<br />
          개인정보보호책임자:조성민(chosungmin15@gmail.com)<br />
          주소: 충북 충주시 갱고개로 147, 5층 C07호(연수동, 스타워크스페이스)(우
          27351) TEL: 043-911-5566 FAX: 0504-213-9367<br />
          Copyright (c) 2024 ELBIO. All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      activeSection: "",
      dialog: false,
      menu: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleScroll() {
      const sections = ["hero", "business", "r-and-d", "products"];
      const scrollPosition = window.scrollY + 200; // Adjust this value for accurate section highlight
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement.offsetTop <= scrollPosition &&
          sectionElement.offsetTop + sectionElement.offsetHeight >
            scrollPosition
        ) {
          this.activeSection = section;
        }
      });
    },
  },
  mounted() {
    const el = document.querySelector(".c-nav-wrapper");
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("stuck", e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(el);
  },
  beforeDestroy() {},
};
</script>
<style scoped lang="scss">
.navigation-drawer-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  &.is-open {
    width: 100vw;
    height: 100vh;
    z-index: 25565;
  }
}

a {
  text-decoration: none;
  color: #ffffff !important;
}

.c-nav-wrapper {
  position: sticky;
  top: -1px;
  display: grid;
  grid-template-columns: calc(118px + 60px) 1fr;
  height: calc(103px - 20px + 1px);
  background-image: linear-gradient(to bottom, #007880, #00788099, #00788033);
  z-index: 1;
  max-width: 1024px;
  transition: background 0.5s ease-in-out;

  &.stuck {
    background-color: #007880;
  }

  .c-nav-mobile-button {
    display: none;
  }

  .c-logo {
    width: calc(118px - 20px);
    height: calc(83px - 20px);
    align-self: center;
    justify-self: right;
  }

  .c-logo-mobile {
    display: none;
  }

  .c-nav {
    align-self: center;
    font-family: NotoSansKR, serif;
    font-weight: bold;
    font-size: 18px;
    color: white;
  }
}

.hero-wrapper {
  position: relative;
  max-width: 1024px;
  margin-top: calc(-103px + 20px);

  video {
    object-fit: cover;
    width: 100%;
  }

  .hero-message {
    position: absolute;
    right: 40px;
    bottom: 90px;
    font-family: Pretendard, NotoSansKR, sans-serif;
    font-size: 45px;
    font-weight: 500;
    text-align: right;
    color: white;

    p {
      font-weight: 800;
    }
  }
}

.href-area {
  margin-top: -83px;
  padding-top: 83px;
}

.about-wrapper {
  background-image: url("@/assets/images/resource/about_bg.jpg");
  background-position: right top;
  margin-bottom: 40px;

  .about-header {
    text-align: center;
    padding-top: 60px;

    h3 {
      font-family: "Titillium Web", system-ui;
      font-size: 25px;
      font-weight: bold;
      color: #007880;
      letter-spacing: 1rem;
    }

    h2 {
      font-family: "Titillium Web", system-ui;
      font-size: 55px;
      font-weight: bold;
      color: #333333;
    }

    h4 {
      font-family: "Titillium Web", system-ui;
      font-size: 30px;
      font-weight: lighter;
      color: #333333;
    }
  }

  .about-contents {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 200px 30rem;
    grid-template-rows: repeat(4, minmax(140px, auto));
    grid-column-gap: 5rem;
    justify-content: center;
    align-items: center;

    font-family: Pretendard, system-ui;
    font-weight: 200;
    color: #333333;
    font-size: 15px;
    font-style: normal;

    img {
      width: 200px;
      height: 104px;
    }
  }
}

@media screen and (max-width: 760px) {
  .about-wrapper {
    .about-contents {
      grid-template-columns: 200px 1fr;
    }
  }
}

.about-wrapper-mobile {
  display: none;
}

.r-and-d-wrapper {
  .r-and-d-contents {
    display: flex;
    justify-content: center;

    .r-and-d-content {
      width: 341px;
      height: 448px;
      flex: 1 1 341px;
      display: grid;
      grid-template-rows: 30% 70%;
      align-items: center;
      justify-items: center;
      grid-row-gap: 2rem;

      &:nth-child(1) {
        background-image: url("@/assets/images/resource/business_1.jpg");
        background-size: cover;
      }

      &:nth-child(2) {
        background-image: url("@/assets/images/resource/business_2.jpg");
        background-size: cover;
      }

      &:nth-child(3) {
        background-image: url("@/assets/images/resource/business_3.jpg");
        background-size: cover;
      }

      .r-and-d-content-title {
        font-family: Pretendard, system-ui;
        font-weight: bold;
        color: #ffffff;
        font-size: 30px;
        font-style: normal;
        align-self: end;
      }

      .r-and-d-content-body {
        font-family: Pretendard, system-ui;
        font-weight: normal;
        color: #ffffff;
        font-size: 16px;
        font-style: normal;
        width: 70%;
        align-self: stretch;
      }
    }
  }
}

@media screen and (max-width: 857px) {
  .r-and-d-wrapper {
    .r-and-d-contents {
      flex-wrap: wrap;

      .r-and-d-content {
        width: 100%;
        flex: 1 1 100%;

        &:nth-child(1) {
          background-image: url("@/assets/images/resource/mobile/business_1.jpg");
          background-size: cover;
        }

        &:nth-child(2) {
          background-image: url("@/assets/images/resource/mobile/business_2.jpg");
          background-size: cover;
        }

        &:nth-child(3) {
          background-image: url("@/assets/images/resource/mobile/business_3.jpg");
          background-size: cover;
        }

        text-align: center;

        .r-and-d-content-title {
          font-family: Pretendard, system-ui;
          font-weight: bold;
          color: #ffffff;
          font-size: 2rem;
          font-style: normal;
          align-self: end;
        }

        .r-and-d-content-body {
          font-family: Pretendard, system-ui;
          font-weight: normal;
          color: #ffffff;
          font-size: 1rem;
          font-style: normal;
          width: 90%;
          align-self: stretch;
        }
      }
    }
  }
}

.products-wrapper {
  z-index: 2;
  .products-contents {
    .products-content {
      position: relative;
      width: 100%;
      height: 344px;
      background-image: url("@/assets/images/resource/product_bg.jpg");
      background-repeat: no-repeat;
      background-position: center center;

      .products-content-title {
        position: absolute;
        left: 86px;
        top: 71px;

        font-family: Pretendard, system-ui;
        font-weight: bold;
        color: #333333;
        font-size: 30px;
        font-style: normal;
      }

      .products-content-body {
        position: absolute;
        left: 90px;
        top: calc(71px + 50px);

        font-family: Pretendard, system-ui;
        font-weight: 500;
        color: #333333;
        font-size: 16px;
      }
    }
  }
}

.footer {
  background-color: #333333;
  color: #ffffff;
  padding-bottom: 2rem;

  a {
    color: #ffffff;
  }

  .footer-site-information {
    padding-left: 40px;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;

    .footer-site-information-title {
      font-family: "Titillium Web", system-ui;
      font-weight: 700;
      font-size: 20px;
    }

    .footer-site-information-link {
      font-family: Pretendard, system-ui;
      font-weight: bold;
      font-size: 15px;
      display: flex;
      grid-gap: 4rem;
    }
  }

  .footer-contents {
    padding-top: 20px;
    padding-left: 40px;
    display: grid;
    grid-template-columns: 20% 80%;
    align-items: center;

    .footer-copyright {
      font-family: Pretendard, system-ui;
      font-weight: 500;
      font-size: 13px;
    }
  }
}

@media screen and (max-width: 480px) {
  .href-area {
    margin-top: -72px;
    padding-top: 72px;
  }
  .c-nav-wrapper {
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 20px;
    padding-left: 10px;
    height: 74px;
    background-color: #007880 !important;

    .c-nav {
      display: none;
    }

    .c-nav-mobile-button {
      display: inline-flex;
    }

    .c-logo {
      display: none;
    }

    .c-logo-mobile {
      display: block;
      width: 84px;
      height: 67px;
      align-self: center;
      justify-self: right;
      padding-top: 5px;
    }
  }
  .hero-wrapper {
    margin-top: 0;

    .hero-message {
      position: absolute;
      right: 40px;
      bottom: 90px;
      font-family: Pretendard, NotoSansKR, sans-serif;
      font-size: 25px;
      font-weight: 500;
      text-align: right;
      color: white;

      p {
        font-weight: 800;
      }
    }
  }
  .about-wrapper {
    display: none;
  }
  .about-wrapper-mobile {
    display: block;
    background-image: url("@/assets/images/resource/mobile/about_bg.jpg");
    background-position: right top;
    margin-bottom: 40px;

    font-family: Pretendard, system-ui;
    font-weight: 200;
    color: #333333;
    font-size: 12px;
    font-style: normal;

    .about-header {
      text-align: center;
      padding-top: 30px;

      h3 {
        font-family: "Titillium Web", system-ui;
        font-size: 25px;
        font-weight: bold;
        color: #007880;
        letter-spacing: 1rem;
      }

      h2 {
        font-family: "Titillium Web", system-ui;
        font-size: 35px;
        font-weight: bold;
        color: #333333;
      }

      h4 {
        font-family: "Titillium Web", system-ui;
        font-size: 20px;
        font-weight: lighter;
        color: #333333;
      }
    }

    .about-content {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    &:deep().theme--dark.v-btn.v-btn--icon {
      color: darkgray;
    }
  }

  .products-wrapper {
    .products-contents {
      .products-content {
        height: 436px;
        background-image: url("@/assets/images/resource/mobile/product_bg.png");

        .products-content-title {
          font-size: 25px;
          left: 2rem;
        }

        .products-content-body {
          font-size: 16px;
          left: 2rem;
        }
      }
    }
  }
  .footer {
    .footer-site-information {
      display: none;
    }

    .footer-contents {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      grid-gap: 20px;
      padding: 20px;

      .footer-copyright {
        font-size: 12px;
      }
    }
  }
}
</style>
