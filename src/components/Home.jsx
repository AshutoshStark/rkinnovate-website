import heroimg from "../../public/hero-img.png";
import { motion } from "framer-motion";
import {
  FaAppStoreIos,
  FaLock,
  FaUsers,
  FaTelegramPlane,
} from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import dots from "../../public/dot.svg";
import user from "../../public/user.png";
import officeview from "../../public/office-view.jpg";
// certificate icons
import cert1 from "../../public/cert-1.png";
import cert2 from "../../public/cert-2.png";
import cert3 from "../../public/cert-3.png";
import cert4 from "../../public/cert-4.png";
import cert5 from "../../public/cert-5.png";
// card icons
import icon1 from "../../public/android.svg";
import icon2 from "../../public/apple.svg";
import icon3 from "../../public/cube.svg";
import icon4 from "../../public/smartwatch.svg";
import icon5 from "../../public/ux-interface.svg";
import icon6 from "../../public/app-development.svg";

// arrow btn
import { MdDoubleArrow } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";

// tech stack
import python from "../../public/python.png";
import node from "../../public/node.png";
import flutter from "../../public/fluttor.svg";
import react from "../../public/react.png";
import reactnative from "../../public/native.svg";
import wordpress from "../../public/wordpress.png";
import django from "../../public/django.png";
import flask from "../../public/flask.png";
import swift from "../../public/swift.svg";
import kotlin from "../../public/kotlin.png";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils/motion";

function Home() {
  return (
    <div className="bg-white">
      {/* section 1 */}
      <section className="max-w-[1140px] m-[100px]  mx-auto  flex gap-[2rem] justify-between items-start">
        {/* left */}
        <motion.div
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true}} 
         className=" relative">
          {/* dots img */}
          <div className="circle  absolute left-0 top-0 bg-[#ffece4] w-[200px] h-[200px] z-10 rounded-full">
            <img src={dots} className=" absolute  left-0 top-0" alt="" />
          </div>
          <h1 className=" font-semibold text-[35px] sm:text-[45px] leading-[55px] z-20 relative text-heading px-3">
            Top Mobile App
            <br /> Development
            <br /> Company in India
          </h1>
          <p className=" text-[15px] sm:text-[21px] font-roboto text-para mt-[30px] px-3">
            We solve the world&apos;s biggest problems with Expertise.
            <br />
            We helps global brand with digital products on web,
            <br /> mobile and connected platforms.
          </p>
          {/* icon */}
          <div className="flex flex-wrap sm:flex gap-5 mt-8 justify-center sm:justify-normal">
            <div className="flex items-center  bg-[#e7e9ff] p-3  rounded-[14px]  gap-3">
              <FaUsers size={40} color="#838ae0" />
              <span className=" text-purple">100k User Engagement</span>
            </div>
            <div className="flex items-center bg-[#ffefe8] rounded-[14px] p-3 gap-3">
              <FaAppStoreIos size={40} color="#ec7c47" />
              <span className=" text-[#ec7c47]">100+ Featured App</span>
            </div>
            <div className="flex items-center bg-[#fff7df] rounded-[14px] p-3 gap-3">
              <BsAndroid2 size={40} color="#8c8265" />
              <span className=" text-darkGreen">600+ App Published</span>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex items-center gap-10 px-3 mt-8 justify-center sm:justify-normal">
            <button className=" bg-primary text-white px-10 py-5 rounded-[30px] font-semibold">
              Talk to Our Expert →
            </button>
            {/* user */}
            <div className="flex items-center gap-3">
              <img src={user} alt="" className=" rounded-full gap-5 w-[70px]" />
              <span>
                <h4 className=" font-semibold text-xl">Ravindra</h4>
                <p>Technical Lead</p>
              </span>
            </div>
          </div>
        </motion.div>
        {/* right */}
        <motion.div
        variants={slideInFromRight(0.3)}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true}} 
        className="">
          <img src={heroimg} className=" w-[100%] hidden sm:block" alt="" />
        </motion.div>
      </section>
      {/* section 2 */}
      <section className=" bg-lightGrey  m-auto py-10 sm:py-[120px]">
        {/* container-1 */}
        <motion.div
        variants={slideInFromTop}
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true}}  className="max-w-[1140px] m-auto text-center">
          <span className=" text-primary text-xl uppercase">
            We Are RK Innovate
          </span>
          <h1 className=" text-3xl sm:text-[40px] text-heading font-bold mb-[12px]">
            Award Winning App Development Company
          </h1>
          <h3 className="mb-[15px] text-xl sm:text-[22px] font-bold text-heading">
            #1 Mobile App Company, Awarded for its Top Features/Editor Apps
            Delivered.
          </h3>
          <p className=" font-roboto text-[18px] text-para px-6 sm:px-28">
            RK Innovate started its operation in the year 2023. We are
            Worldwide, based Web, App and Digital Marketing Company. Our main
            Domain is Web Design, App Development, Digital Marketing, Product
            Design and Cloud Services. Customer Satisfaction and the Highest
            rate of Customer Repeatability make us one of the pioneers in the
            field. So, what are you waiting for? Let us discuss your ideas and
            our innovation in detail because catering your requirement and
            converting it into a final product is our main goal.
          </p>
        </motion.div>
        {/* container-2 */}
        <div className=" flex  justify-center mt-6 sm:mt-[100px] ">
          <img src={officeview} alt="" />
        </div>
        {/* container-3 */}
        <div className="w-screen sm:max-w-[1140px] flex flex-wrap sm:flex h-[326px] sm:m-auto justify-center sm:justify-between sm:mt-[-150px] ">
          {/* btn-container */}
          <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:true}} 
          className=" flex justify-center items-center sm:justify-start sm:items-end h-1/3 sm:h-full">
            <button className=" bg-white text-primary py-3 px-2 sm:px-8 sm:py-5 capitalize text-lg sm:text-[17px] font-semibold border-[1px] border-primary rounded-[100px]">
              know more about us
            </button>
          </motion.div>
          {/* card-container */}
          <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView={"visible"}
          viewport={{once:true}} 
          className=" bg-primary flex w-full sm:w-[60%] justify-center sm:justify-between rounded-2xl p-4 sm:p-[60px]">
            <div className=" grid grid-cols-2 grid-rows-2 gap-6 ">
              <span className="text-[35px] sm:text-[45px] font-bold text-white ">
                <span>7500 +</span>
                <p className="text-[10px] sm:text-[18px] text-white">Project Delivered</p>
              </span>

              <span className="text-[35px] sm:text-[45px] font-bold text-white ">
                3500 +{" "}
                <p className="text-[10px] sm:text-[18px] text-white">Enterprise Clients</p>
              </span>

              <span className="text-[35px] sm:text-[45px] font-bold text-white ">
                540 + <p className="text-[10px] sm:text-[18px] text-white">Experts Team</p>
              </span>

              <span className="text-[35px] sm:text-[45px] font-bold text-white ">
                20 % <p className="text-[10px] sm:text-[18px] text-white">Success Years</p>
              </span>
            </div>
            {/* right */}
            <div className=" flex items-center justify-center  w-[30%]">
              <h1 className=" text-5xl font-bold text-white">RK</h1>
            </div>
          </motion.div>
        </div>
        {/* container- 4 */}
        <motion.div
        initial="hidden"
        whileInView={"visible"}
        viewport={{once:true}} 
         className=" max-w-[1140px] flex justify-center sm:justify-normal flex-wrap sm:flex m-auto  mt-28 sm:mt-8 gap-10  ">
          <motion.span variants={slideInFromLeft(0.2)} className=" text-center flex items-center flex-col">
            <img src={cert1} alt="" className=" w-[80%]" />
            <p>Top App Developer Genuine Quality</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.3)} className=" text-center flex items-center flex-col">
            <img src={cert2} alt="" className=" w-[80%]" />
            <p>Top App Developer Genuine Quality</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.4)} className=" text-center flex items-center flex-col">
            <img src={cert3} alt="" className=" w-[80%]" />
            <p>Top App Developer Genuine Quality</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.5)} className=" text-center flex items-center flex-col">
            <img src={cert4} alt="" className=" w-[80%]" />
            <p>Top App Developer Genuine Quality</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.6)} className=" text-center flex items-center flex-col">
            <img src={cert5} alt="" className=" w-[80%]" />
            <p>Top App Developer Genuine Quality</p>
          </motion.span>
        </motion.div>
      </section>
      {/* /section-3 */}
      <section className="max-w-[1140px] bg-white text-center m-auto py-[120px]">
        <span className=" text-primary text-xl uppercase">Our Services</span>
        <h1 className=" text-[35px] sm:text-[40px] text-heading font-bold mb-[12px] px-3">
          We build modern creative mobile experiences.
        </h1>

        {/* card cotnainer */}
        <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{once:true}} 
            className=" grid sm:grid-cols-3 mt-20 sm:grid-rows-2 gap-10 px-3 sm:px-0">
          {/* 1 */}
          <motion.div
            variants={slideInFromLeft(0.2)}
            className=" bg-[#f7f7f7] relative flex shadow-lg flex-col text-start  items-start justify-between   px-[30px]  pb-[40px] pt-[79px] rounded-[14px]">
            <span className="absolute shadow-md top-[-20px] left-5 bg-white  rounded-[14px] p-3">
              <img src={icon1} className="  w-[50px] h-[50px]" alt="" />
            </span>
            {/* content*/}
            <div>
              <h3 className=" text-heading text-[28px] font-bold leading-[38px] mb-3">
                <a href="#">Android Development</a>
              </h3>
              <p className=" font-roboto text-[18px] text-para leading-[28px]">
                Our software house has been recognised by google for outstanding
                android application quality.
              </p>
            </div>
            {/* link */}
            <a href="#" className=" flex items-center mt-5  text-[18px] gap-1">
              Read More <MdDoubleArrow color="#110a32" />
            </a>
          </motion.div>
          {/* 2 */}
          <motion.div variants={slideInFromTop} className=" bg-[#f7f7f7] relative shadow-lg flex flex-col text-start  items-start justify-between px-[30px]  pb-[40px] pt-[79px] rounded-[14px]">
            <span className="absolute shadow-md top-[-20px] left-5 bg-white  rounded-[14px] p-3">
              <img src={icon2} className="  w-[50px] h-[50px]" alt="" />
            </span>
            {/* content*/}
            <div>
              <h3 className=" text-heading text-[28px] font-bold leading-[38px] mb-3">
                <a href="#">iOS Development</a>
              </h3>
              <p className=" font-roboto text-[18px] text-para leading-[28px]">
                At Rk Innovate, We offer pixel perfect responsive website design
                services which are built around aesthetics and usability.
              </p>
            </div>
            {/* link */}
            <a href="#" className=" flex items-center mt-5  text-[18px] gap-1">
              Read More <MdDoubleArrow color="#110a32" />
            </a>
          </motion.div>
          {/* 3 */}
          <motion.div variants={slideInFromRight(0.2)} className=" bg-[#f7f7f7] relative flex shadow-lg flex-col text-start  items-start justify-between px-[30px]  pb-[40px] pt-[79px] rounded-[14px]">
            <span className="absolute shadow-md top-[-20px] left-5 bg-white  rounded-[14px] p-3">
              <img src={icon3} className="  w-[50px] h-[50px]" alt="" />
            </span>
            {/* content*/}
            <div>
              <h3 className=" text-heading text-[28px] font-bold leading-[38px] mb-3">
                <a href="#">Hybrid App Development </a>
              </h3>
              <p className=" font-roboto text-[18px] text-para leading-[28px]">
                Our product design services cover entire product design
                lifecycle, From prototyping to fully functional design.
              </p>
            </div>
            {/* link */}
            <a href="#" className=" flex items-center mt-5  text-[18px] gap-1">
              Read More <MdDoubleArrow color="#110a32" />
            </a>
          </motion.div>
          {/* 4 */}
          <motion.div variants={slideInFromLeft(0.2)} className=" bg-[#f7f7f7] relative flex flex-col shadow-lg text-start  items-start justify-between px-[30px]  pb-[40px] pt-[79px] rounded-[14px]">
            <span className="absolute shadow-md top-[-20px] left-5 bg-white  rounded-[14px] p-3">
              <img src={icon4} className="  w-[50px] h-[50px]" alt="" />
            </span>
            {/* content*/}
            <div>
              <h3 className=" text-heading text-[28px] font-bold leading-[38px] mb-3">
                <a href="#">Desktop App Development</a>
              </h3>
              <p className=" font-roboto text-[18px] text-para leading-[28px]">
                Increase conversions. Increase leads. Increase sales. Increase
                revenue. That&apos;s digital marketing services from us.
              </p>
            </div>
            {/* link */}
            <a href="#" className=" flex items-center mt-5  text-[18px] gap-1">
              Read More <MdDoubleArrow color="#110a32" />
            </a>
          </motion.div>
          {/* 5 */}
          <motion.div variants={slideInFromBottom} className=" bg-[#f7f7f7] relative flex flex-col shadow-lg text-start  items-start justify-between px-[30px]  pb-[40px] pt-[79px] rounded-[14px]">
            <span className="absolute shadow-md top-[-20px] left-5 bg-white  rounded-[14px] p-3">
              <img src={icon5} className="  w-[50px] h-[50px]" alt="" />
            </span>
            {/* content*/}
            <div>
              <h3 className=" text-heading text-[28px] font-bold leading-[38px] mb-3">
                <a href="#">UI/UX Designing</a>
              </h3>
              <p className=" font-roboto text-[18px] text-para leading-[28px]">
                Our highly experienced designers comprehend your vision and
                business objectives in order to create the designs.
              </p>
            </div>
            {/* link */}
            <a href="#" className=" flex items-center mt-5  text-[18px] gap-1">
              Read More <MdDoubleArrow color="#110a32" />
            </a>
          </motion.div>
          {/* 6 */}
          <motion.div variants={slideInFromRight(0.2)} className=" bg-[#f7f7f7] relative flex flex-col shadow-lg text-start  items-start justify-between px-[30px]  pb-[40px] pt-[79px] rounded-[14px]">
            <span className="absolute shadow-md top-[-20px] left-5 bg-white  rounded-[14px] p-3">
              <img src={icon6} className="  w-[50px] h-[50px]" alt="" />
            </span>
            {/* content*/}
            <div>
              <h3 className=" text-heading text-[28px] font-bold leading-[38px] mb-3">
                <a href="#">Web App Development</a>
              </h3>
              <p className=" font-roboto text-[18px] text-para leading-[28px]">
                Our highly experienced designers comprehend your vision and
                business objectives in order to create the designs.
              </p>
            </div>
            {/* link */}
            <a href="#" className=" flex items-center mt-5  text-[18px] gap-1">
              Read More <MdDoubleArrow color="#110a32" />
            </a>
          </motion.div>
        </motion.div>

        {/* hire container */}
        <div className="flex flex-wrap sm:flex mt-20 items-center justify-center gap-5">
          <h1 className=" text-heading text-[34px] font-bold">
            Hire World-Class Developers
          </h1>
          <button className=" bg-primary text-white px-10 flex items-center  gap-3 py-5 rounded-[30px] font-semibold">
            Hire Now <MdDoubleArrow color="white" />
          </button>
        </div>
      </section>
      {/* section-4 carausel */}
      <section className=" bg-lightGrey  text-center m-auto py-[120px]">
        <h1 className=" text-heading text-[34px] font-bold mb-20">
          Happy Client Works
        </h1>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            900: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          autoplay={{ delay: 30000, disableOnInteraction: false }} // Slide changes every 3 seconds
          loop={true} // Enable infinite loop
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              {/* content container */}
              <div className=" relative">
                <h1>
                  <strong>{"{"}</strong>We partnered with Rk innovate to develop
                  a custom web application for our business. Their team
                  exhibited exceptional technical expertise and was always
                  available to provide support and guidance throughout the
                  project. The end product not only met our expectations but
                  exceeded them in terms of functionality and design. Highly
                  recommended for any software needs!<strong>&nbsp;"</strong>
                </h1>
              </div>
              <div className="  mt-8 flex items-center justify-center gap-5">
                <img src={user} alt="" className=" w-[10px] h-[10px]" />
                <h4 className=" font-semibold">
                  — John D., CTO, Tech Innovations
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              {/* content container */}
              <div className="relative">
                <h1 className="">
                  Our experience with RK innovate has been nothing short of
                  excellent. They completed our project ahead of schedule while
                  maintaining a high standard of quality. The development team
                  understood our business requirements perfectly and implemented
                  all features seamlessly. We’re extremely satisfied with their
                  work and will continue to collaborate in the future.
                </h1>
              </div>
              <div className="  mt-8 flex items-center justify-center gap-5">
                <img src={user} alt="" className=" w-[10px] h-[10px]" />
                <h4 className=" font-semibold">
                  — Sarah M., Operations Manager, FinTech Solutions
                </h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              {/* content container */}
              <div className=" relative">
                <h1>
                  Our experience with RK innovate has been nothing short of
                  excellent. They completed our project ahead of schedule while
                  maintaining a high standard of quality. The development team
                  understood our business requirements perfectly and implemented
                  all features seamlessly. We’re extremely satisfied with their
                  work and will continue to collaborate in the future.
                </h1>
              </div>
              <div className="  mt-8 flex items-center justify-center gap-5">
                <img src={user} alt="" className=" w-[10px] h-[10px]" />
                <h4 className=" font-semibold">
                  — Sarah M., Operations Manager, FinTech Solutions
                </h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="flex flex-wrap sm:flex mt-20 items-center justify-center gap-5">
          <h1 className=" text-heading text-[34px] font-bold">
            Take a look of our quality work
          </h1>
          <button className=" bg-primary text-white px-10 flex items-center  gap-3 py-5 rounded-[30px] font-semibold">
            View All Work <MdDoubleArrow color="white" />
          </button>
        </div>
      </section>

      {/* section-5 tech stack */}
      <motion.section
      initial="hidden"
      whileInView={"visible"}
      viewport={{once:true}} 
       className="max-w-[1140px] bg-white  text-center m-auto py-[120px]">
        <h1 className=" text-[40px] text-heading font-bold mb-[12px]">
          Technologies we work with
        </h1>
        {/* stack container */}
        <div className=" grid grid-cols-2 sm:grid-cols-5 grid-rows-2 justify-items-center mt-24 sm:px-20 gap-y-8 ">
          <motion.span variants={slideInFromLeft(0.3)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={python} className=" w-[70px] h-[70px]" alt="" />
            <p>Python</p>
          </motion.span>

          <motion.span variants={slideInFromLeft(0.4)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={node} className=" w-[70px] h-[70px]" alt="" />
            <p>Node.js</p>
          </motion.span>

          <motion.span variants={slideInFromLeft(0.5)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={flutter} className=" w-[70px] h-[70px]" alt="" />
            <p>Flutter</p>
          </motion.span>

          <motion.span variants={slideInFromLeft(0.6)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={react} className=" w-[70px] h-[70px]" alt="" />
            <p>React.js</p>
          </motion.span>

          <motion.span variants={slideInFromLeft(0.7)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={reactnative} className=" w-[70px] h-[70px]" alt="" />
            <p>React Native</p>
          </motion.span>

          <motion.span variants={slideInFromLeft(0.3)} className="shadow-md flex flex-col px-[40px] py-[20px]   rounded-[14px] bg-grey items-center justify-center">
            <img src={swift} className=" w-[70px] h-[70px]" alt="" />
            <p>Swift</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.4)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={kotlin} className=" w-[70px] h-[70px]" alt="" />
            <p>Kotlin</p>
          </motion.span>

          <motion.span variants={slideInFromLeft(0.5)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={django} className=" w-[70px] h-[70px]" alt="" />
            <p>Djano</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.6)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={flask} className=" w-[70px] h-[70px]" alt="" />
            <p>Flask</p>
          </motion.span>
          <motion.span variants={slideInFromLeft(0.7)} className="shadow-md flex flex-col px-[40px] py-[20px]    rounded-[14px] bg-grey items-center justify-center">
            <img src={wordpress} className=" w-[70px] h-[70px]" alt="" />
            <p>Wordpress</p>
          </motion.span>
        </div>
      </motion.section>
      {/* section -6  */}
      <section className="relative bg-form-bg bg-center bg-no-repeat bg-cover bg-fixed  sm:m-auto py-[120px]">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className=" relative z-30  gap-7 sm:gap-[10rem]   flex flex-wrap sm:flex  justify-center  h-[100%] max-w-[1240px]   m-auto px-[10] items-center">
          {/* 1 */}
          <div className="">
            <h1 className="  text-white text-[40px] px-3 sm:px-0 sm:text-[50px] uppercase font-bold">
              have a project? <br />
              we would love <br /> to help.
            </h1>
          </div>
          {/* form */}
          <div className=" w-[90%] sm:w-[40%] rounded-[50px] bg-white " id="contact-us">
            <form
              className=" py-8 px-8"
              action="https://formspree.io/f/mpwzarqb"
              method="POST"
            >
              <p className="font-semibold text-heading text-3xl sm:text-[34px] mb-5 flex items-center gap-3">
                {" "}
                <FaTelegramPlane />
                Get in Touch
              </p>
              <div>
                <input
                  type="text"
                  id="name"
                  className=" w-full border-2 p-3 sm:p-5 rounded-[14px]"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className=" mt-5">
                <input
                  type="email"
                  id="name"
                  className=" w-full border-2  p-3 sm:p-5 rounded-[14px]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className=" mt-5">
                <input
                  type="text"
                  id="name"
                  className=" w-full p-3 sm:p-5 border-2  rounded-[14px]"
                  placeholder="Phone Number"
                  maxLength={10}
                  min={10}
                  required
                />
              </div>
              <div className=" mt-5 ">
                <textarea
                  className="rounded-[14px] placeholder:capitalize sm:h-[200px] border-2  w-full p-3 sm:p-5"
                  name="about "
                  id=""
                  placeholder="tell us about your project"
                  required
                ></textarea>
              </div>
              <button className=" mt-5 w-full bg-white text-primary px-5 sm:px-8 py-3 sm:py-5 capitalize  text-[17px] font-semibold border-[1px] border-primary rounded-[100px] hover:bg-primary hover:text-white transition-all duration-500">
                Submit
              </button>

              <span className="flex items-center gap-2 mt-5 justify-center">
                <FaLock />
                We hate spam, and we respect your privacy.
              </span>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
