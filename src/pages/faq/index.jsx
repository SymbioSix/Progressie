import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Accordion from "../../components/accordion";
import "../../assets/css/faq.css";

const dataGeneral = [
  {
    title: "What is Self-ie?",
    desc:
      "Self-ie is an online platform dedicated to self-improvement and personal development. We offer courses, forums, and other resources to help individuals enhance their skills and achieve their personal and professional goals.",
  },
  {
    title: "How do I create an account?",
    desc:
      "Click on the 'Sign Up' button on the top right corner of our homepage. Fill in the required information and follow the instructions to complete your registration.",
  },
  {
    title: "Is there a membership fee?",
    desc:
      "We offer both free and premium memberships. Our free membership provides access to basic courses and forums, while our premium membership offers additional features, advanced courses, and exclusive content.",
  },
];

const dataCourse = [
  {
    title: "What types of courses are available?",
    desc:
      "We offer a variety of courses in social etiquette, personal wellness, and financial education. Each course is designed to provide practical knowledge and skills that you can apply in your daily life.",
  },
  {
    title: "How can I enroll in a course?",
    desc:
      "Once you have created an account, browse our course catalog and select the course you are interested in. Click the 'Enroll' button and follow the prompts to begin the course.",
  },
  {
    title: "Are the courses self-paced?",
    desc:
      "Yes, all our courses are self-paced. You can start and complete them at your convenience.",
  },
];

const dataForum = [
  {
    title: "What can I do in the forum?",
    desc:
      "Our forum is a space for members to share experiences, ask questions, and engage in discussions related to self-improvement and personal development. It is a supportive community where you can learn from others and contribute your knowledge.",
  },
  {
    title: "How do I participate in the forum?",
    desc:
      "After logging in, navigate to the forum section. You can browse existing topics or start a new discussion by posting a question or comment.",
  },
];

const dataRank = [
  {
    title: "How does the Rank Leaderboard work?",
    desc:
      "The Rank Leaderboard tracks your progress as you complete courses and participate in community activities. You earn points and badges for various achievements, and your rank is updated accordingly.",
  },
  {
    title: "What are the benefits of participating in the Rank Leaderboard?",
    desc:
      "Participating in the Rank Leaderboard helps keep you motivated and engaged. It also allows you to see how you compare with other members, fostering a sense of healthy competition and community.",
  },
];

const dataTech = [
  {
    title: "I forgot my password. What should I do?",
    desc:
      "Click on the 'forgot Password' link on the login page. Enter your registered email address, and we will send you instructions to reset your password.",
  },
  {
    title: "How can I contact customer support?",
    desc:
      "If you have any questions or need assistance, please contact our customer support team through the 'Contact Us' page on our website. We are here to help you.",
  },
];


export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main className="w-full h-auto">
        <section
          id="hero"
          className="w-full h-[500px] bg-cover bg-[url('/src/assets/images/about-hero.png')]"
        >
          <div className="container h-full">
            <div className="flex items-center justify-center w-full h-full">
              <p className="text-[70px] font-bold text-white">FAQ</p>
            </div>
          </div>
        </section>
        <section id="list-menu" className="w-full h-auto py-[60px]">
          <div className="container w-full h-full">
            <ul className="flex flex-wrap items-center justify-between w-full h-full">
              <li className="text-base font-black sm:text-xl md:text-4xl">
                <a href="#general">General</a>
              </li>
              <li className="text-base font-black sm:text-xl md:text-4xl">
                <a href="#course">Courses</a>
              </li>
              <li className="text-base font-black sm:text-xl md:text-4xl">
                <a href="#forum">Forum</a>
              </li>
              <li className="text-base font-black sm:text-xl md:text-4xl">
                <a href="#rank">Rank</a>
              </li>
              <li
                id="last-item-menu"
                className="pt-3 text-base font-black text-center sm:text-xl md:text-4xl sm:pt-0"
              >
                <a href="#technical">Technical Support</a>
              </li>
            </ul>
          </div>
        </section>
        <section id="general" className="w-full h-auto !pt-[10px] py-[30px] sm:py-[50px]">
          <h3 className="pb-10 text-3xl font-black text-center sm:text-5xl">
            General
          </h3>
          <div className="container sm:px-10 lg:px-[100px] 2xl:px-[300px] w-full h-auto">
            <Accordion items={dataGeneral} />
          </div>
        </section>
        <section id="course" className="w-full h-auto py-[50px]">
          <h3 className="pb-10 text-3xl sm:text-5xl font-black text-center mt-[20px] sm:mt-[100px]">
            Courses
          </h3>
          <div className="container sm:px-10 lg:px-[100px] 2xl:px-[300px] w-full h-auto">
            <Accordion items={dataCourse} />
          </div>
        </section>
        <section id="forum" className="w-full h-auto py-[50px]">
          <h3 className="pb-10 text-3xl sm:text-5xl font-black text-center mt-[20px] sm:mt-[100px]">
            Forum
          </h3>
          <div className="container sm:px-10 lg:px-[100px] 2xl:px-[300px] w-full h-auto">
            <Accordion items={dataForum} />
          </div>
        </section>
        <section id="rank" className="w-full h-auto py-[50px]">
          <h3 className="pb-10 text-3xl sm:text-5xl font-black text-center mt-[20px] sm:mt-[100px]">
            Rank Leaderbord
          </h3>
          <div className="container sm:px-10 lg:px-[100px] 2xl:px-[300px] w-full h-auto">
            <Accordion items={dataRank} />
          </div>
        </section>
        <section id="technical" className="w-full h-auto py-[50px]">
          <h3 className="pb-10 text-3xl sm:text-5xl font-black text-center mt-[20px] sm:mt-[100px]">
            Technical Support
          </h3>
          <div className="container sm:px-10 lg:px-[100px] 2xl:px-[300px] w-full h-auto">
            <Accordion items={dataTech} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}