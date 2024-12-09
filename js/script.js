// Create Course
const courseContainer = document.querySelector(".row");

const course = [
  {
    image: "images/cousres/ai.webp",
    title: "دوره هوش مصنوعی",
    teacherName: "المیرا اجدیان",
    countStudents: 450,
    price: 1000000,
  },
  {
    image: "images/cousres/istockphoto-1389287506-612x612.webp",
    title: "دوره صفر تا صد react",
    teacherName: "المیرا امجدیان",
    countStudents: 400,
    price: 2000000,
  },
  {
    image: "images/cousres/javascript-736400_1280.png",
    title: "دوره صفر تا صد جاوا اسکریپت",
    teacherName: "المیرا امجدیان",
    countStudents: 850,
    price: 2500000,
  },
  {
    image: "images/cousres/node-js-736399_1280.png",
    title: "دوره صفر تا صد node js",
    teacherName: "المیرا امجدیان",
    countStudents: 950,
    price: 3000000,
  },
  {
    image: "images/cousres/npm.webp",
    title: "دوره صفر تا صد npm",
    teacherName: "المیرا امجدیان",
    countStudents: 1050,
    price: 400000,
  },
  {
    image: "images/cousres/sql.webp",
    title: "دوره صفر تا صد sql",
    teacherName: "المیرا امجدیان",
    countStudents: 50,
    price: 250000,
  },
];

course.forEach((courseItem) => {
  courseContainer.insertAdjacentHTML(
    "beforeend",
    `
        <div class="col-lg-4 col-md-6 col-sm-12 course-box__container">
                  <!-- Cart Items -->
                  <div class="course-box">
                    <a href="#">
                      <img
                        src=${courseItem.image}
                        alt=${courseItem.title}
                        class="course-box__image"
                      />
                    </a>
                    <!-- Body Course Box -->
                    <div class="course-box__main">
                      <a href="#" class="course-box__title">${courseItem.title}</a>
                      <!-- Course Box Teacher -->
                      <div class="course-box__rating-teacher">
                        <div class="course-box__teacher">
                          <i
                            class="fas fa-chalkboard-teacher course-box__teacher-icon"
                          ></i>
                          <a href="#" class="course-box__teacher-link"
                            >${courseItem.teacherName}</a
                          >
                        </div>

                         <!-- Course Box Rating -->
                      <div class="course-box__rating">
                        <img
                          src="./images/svg/star.svg"
                          alt="star rating"
                          class="course-box__star"
                        />
                        <img
                          src="./images/svg/star_fill.svg"
                          alt="star rating"
                          class="course-box__star"
                        />
                        <img
                          src="./images/svg/star_fill.svg"
                          alt="star rating"
                          class="course-box__star"
                        />
                        <img
                          src="./images/svg/star_fill.svg"
                          alt="star rating"
                          class="course-box__star"
                        />
                        <img
                          src="./images/svg/star_fill.svg"
                          alt="star rating"
                          class="course-box__star"
                        />
                      </div>
                      </div>
                     

                      <!-- Course Status -->
                      <div class="course-box__status">
                        <div class="course-box__users">
                          <i class="fas fa-users course-box__users-icon"></i>
                          <span class="course-box__users-text">${courseItem.countStudents}</span>
                        </div>
                        <span class="course-box__price">${courseItem.price}</span>
                      </div>
                    </div>
                    <!-- Course Box Footer -->
                    <div class="course-box__footer">
                      <a href="#" class="course-box__footer-link">
                        مشاهده اطلاعات
                        <i
                          class="fas fa-arrow-left course-box__footer-icon"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
    `
  );
});

// Create About Us
const aboutUsContainer = document.querySelector(".about-us__container");
const aboutInfo = [
  {
    id: 1,
    title: "دوره های اختصاصی",
    text: "لورم ایپسوم متن ساختگی بالورم ایپسوم متن ساختگی",
    icon: "far fa-copyright about-us__icon",
  },
  {
    id: 2,
    title: "در کد لرن",
    text: "لورم ایپسوم متن ساختگی بالورم ایپسوم متن ساختگی",
    icon: "fa fa-leaf",
  },
  {
    id: 3,
    title: "دوره پولی و رایگان",
    text: "لورم ایپسوم متن ساختگی بالورم ایپسوم متن ساختگی",
    icon: "fa fa-database",
  },
  {
    id: 4,
    title: "اهمیت به دانشجوها",
    text: "لورم ایپسوم متن ساختگی بالورم ایپسوم متن ساختگی",
    icon: "fa fa-graduation-cap",
  },
];

aboutInfo.forEach((info) => {
  aboutUsContainer.insertAdjacentHTML(
    "beforeend",
    `
      <div class="col-lg-6 col-sm-12">
    <!-- About Us Box -->
<div class="about-us__box">
  <!-- Right Elements -->
<div class="about-us__box-right">
  <i class="${info.icon} about-use__icon"></i>
</div>
<!-- Left Elements -->
<div class="about-us__box-left">
  <span class="about-us__box-title">${info.title}</span>
  <span class="about-us__box-text">${info.text}</span>
</div>
</div>
  </div>
    `
  );
});

const sliderContainer = document.querySelector('.swiper-wrapper')
course.forEach((courseItem) => {
  sliderContainer.insertAdjacentHTML('beforeend',
   `
    <div class="swiper-slide">
          <div class="col-lg-4 col-md-6 col-sm-12 course-box__container">
            <!-- محتویات هر اسلاید -->
            <div>
              <a href="#">
                <img src="${courseItem.image}" alt="${courseItem.title}" class="course-box__image" />
              </a>
              <div class="course-box__main">
                <a href="#" class="course-box__title">${courseItem.title}</a>
                <div class="course-box__rating-teacher">
                  <div class="course-box__teacher">
                    <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
                    <a href="#" class="course-box__teacher-link">${courseItem.teacherName}</a>
                  </div>
                  <div class="course-box__rating">
                    <img src="./images/svg/star.svg" alt="star rating" class="course-box__star" />
                    <img src="./images/svg/star_fill.svg" alt="star rating" class="course-box__star" />
                    <img src="./images/svg/star_fill.svg" alt="star rating" class="course-box__star" />
                    <img src="./images/svg/star_fill.svg" alt="star rating" class="course-box__star" />
                    <img src="./images/svg/star_fill.svg" alt="star rating" class="course-box__star" />
                  </div>
                </div>
                <div class="course-box__status">
                  <div class="course-box__users">
                    <i class="fas fa-users course-box__users-icon"></i>
                    <span class="course-box__users-text">${courseItem.countStudents}</span>
                  </div>
                  <span class="course-box__price">${courseItem.price}</span>
                </div>
              </div>
              <div class="course-box__footer">
                <a href="#" class="course-box__footer-link">
                  مشاهده اطلاعات
                  <i class="fas fa-arrow-left course-box__footer-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
   `
       
  );
});