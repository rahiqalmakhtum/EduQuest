'use client';
import React from 'react';
import Image from 'next/image';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import Slider from '../components/ui/Slider';
import ExpandableList from '../components/ui/ExpandableList';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
const router = useRouter(); // <-- Move this to the top of the component

  const handleRegisterClick = () => {
    router.push('/register'); // <-- Use route path, not file path
  };

  const handleBuyNowClick = (plan: string) => {
    // Handle purchase logic
    console.log(`Buy now clicked for ${plan} plan`);
  };
  return (
    <div className="w-full min-h-screen bg-global-4 flex flex-col">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <div className="w-full h-[599px] bg-global-3 relative">
        <div className="w-full h-full flex flex-row items-center justify-between px-4 sm:px-[142px] py-[96px]">
          <div className="flex flex-col w-[657px] h-[276px]">
            <h1 className="text-6xl font-semibold leading-[76px] text-global-4 font-inter mb-6">
              <span className="text-global-4">Create Smart Exams. </span>
              <span className="text-global-2">Instantly.</span>
            </h1>
            <p className="text-base font-normal leading-5 text-global-5 font-inter mb-6">
              AI-powered quiz creation, automatic grading, real-time analytics.
            </p>
            <Button
              variant="primary"
              onClick={handleRegisterClick}
              className="h-[52px] w-[128px] bg-global-2 text-global-7 text-base font-medium leading-5 rounded"
            >
              Register
            </Button>
          </div>
          <div className="flex items-center">
            <Image
              src="/images/img_illustration.svg"
              alt="EduQuest Illustration"
              width={391}
              height={407}
              className="w-[391px] h-[407px]"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="w-full py-16 px-4 sm:px-[144px]">
        <h2 className="text-4xl font-semibold leading-11 text-global-4 font-inter text-center mb-16">
          Everything You Need to Create Smarter Exams
        </h2>
        <div className="flex flex-row justify-around space-x-8">
          {/* Question Bank Management */}
          <div className="w-[299px] h-[280px] bg-global-4 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src="/images/img_icon.png"
              alt="Question Bank Icon"
              width={65}
              height={56}
              className="w-[65px] h-[56px] mb-6"
            />
            <h3 className="text-2xl font-bold leading-9 text-global-4 font-inter text-center mb-4">
              Question Bank Management
            </h3>
            <p className="text-sm font-normal leading-5 text-global-5 font-inter text-center">
              Organize, tag, and reuse questions effortlessly. Support for MCQ, essay, and more with smart filtering.
            </p>
          </div>
          {/* AI Question Generation */}
          <div className="w-[299px] h-[280px] bg-global-4 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src="/images/img_icon_green_50.svg"
              alt="AI Generation Icon"
              width={65}
              height={56}
              className="w-[65px] h-[56px] mb-6"
            />
            <h3 className="text-2xl font-bold leading-9 text-global-4 font-inter text-center mb-4">
              AI Question Generation
            </h3>
            <p className="text-sm font-normal leading-5 text-global-5 font-inter text-center">
              Generate quality questions instantly by topic and difficulty. Save time with AI-crafted MCQs and essays.
            </p>
          </div>
          {/* Auto Grading & Analytics */}
          <div className="w-[299px] h-[280px] bg-global-4 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <Image
              src="/images/img_icon_green_50_56x65.svg"
              alt="Analytics Icon"
              width={65}
              height={56}
              className="w-[65px] h-[56px] mb-6"
            />
            <h3 className="text-2xl font-bold leading-9 text-global-4 font-inter text-center mb-4">
              Auto Grading & Analytics
            </h3>
            <p className="text-sm font-normal leading-5 text-global-5 font-inter text-center">
              Instant grading for objective questions. Track student progress with clear visual reports.
            </p>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="w-full h-[288px] bg-global-3 flex flex-row justify-between px-4 sm:px-[144px] py-16">
        <div className="flex flex-col w-[469px] h-[144px] mr-16">
          <h2 className="text-4xl font-semibold leading-11 text-global-4 font-inter mb-4">
            <span className="text-global-4">Helping students </span>
            <span className="text-global-2">succeed </span>
            <span className="text-global-4">with</span>
            <span className="text-global-2"> smarter assessments</span>
          </h2>
          <p className="text-base font-normal leading-6 text-global-1 font-inter">
            Our platform empowers learners with instant feedback, clear insights, and fair evaluation.
          </p>
        </div>
        <div className="flex flex-col w-[558px] h-[160px] space-y-8">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center space-x-4">
              <Image
                src="/images/img_icon_green_500.svg"
                alt="Students Icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-8 text-global-4 font-inter">2,245,341</span>
                <span className="text-base font-normal leading-5 text-global-5 font-inter">Students</span>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image
                src="/images/img_icon_green_500_48x48.svg"
                alt="Graded Icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-8 text-global-4 font-inter">46,328</span>
                <span className="text-base font-normal leading-5 text-global-5 font-inter">Answer Sheets Graded</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-8 text-global-4 font-inter">828,867</span>
              <span className="text-base font-normal leading-5 text-global-5 font-inter">Practice Questions</span>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <Image
                src="/images/img_bar_chart.svg"
                alt="Performance Icon"
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-8 text-global-4 font-inter">1,926,436</span>
                <span className="text-base font-normal leading-5 text-global-5 font-inter">Performance Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Section */}
      <div className="w-full py-16 px-4 sm:px-[142px]">
        <h2 className="text-4xl font-semibold leading-11 text-global-4 font-bricolage text-center mb-16">
          Simple Plans, Powerful Features
        </h2>
        <div className="flex flex-row justify-between space-x-8">
          {/* Free Plan */}
          <div className="w-[322px] h-[406px] bg-global-4 rounded-[18px] shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold leading-8 text-global-3 font-inter text-center mb-4">
              Free
            </h3>
            <div className="flex flex-row items-end justify-center mb-6">
              <span className="text-2xl font-bold leading-8 text-global-3 font-inter">$</span>
              <span className="text-5xl font-bold leading-[58px] text-global-3 font-bricolage">0</span>
              <span className="text-sm font-normal leading-[17px] text-global-3 font-inter">/ mo</span>
            </div>
            <div className="flex flex-col space-y-4 mb-8">
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Create 3 quizzes/month</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Basic question bank</p>
            </div>
            <Button
              variant="primary"
              onClick={() => handleBuyNowClick('Free')}
              className="h-[40px] w-full bg-button-1 text-button-1 text-base font-normal leading-5 rounded-lg mt-auto"
            >
              Buy Now
            </Button>
          </div>
          {/* Pro Plan */}
          <div className="w-[322px] h-[406px] bg-global-4 rounded-[18px] shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold leading-8 text-global-3 font-inter text-center mb-4">
              Pro
            </h3>
            <div className="flex flex-row items-end justify-center mb-6">
              <span className="text-2xl font-bold leading-8 text-global-3 font-inter">$</span>
              <span className="text-5xl font-bold leading-[58px] text-global-3 font-bricolage">19</span>
              <span className="text-sm font-normal leading-[17px] text-global-3 font-inter">/ mo</span>
            </div>
            <div className="flex flex-col space-y-4 mb-8">
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Unlimited quizzes</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">AI question generation</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Basic analytics</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Email support</p>
            </div>
            <Button
              variant="primary"
              onClick={() => handleBuyNowClick('Pro')}
              className="h-[40px] w-full bg-button-1 text-button-1 text-base font-normal leading-5 rounded-lg mt-auto"
            >
              Buy Now
            </Button>
          </div>
          {/* Institutional Plan */}
          <div className="w-[322px] h-[406px] bg-global-4 rounded-[18px] shadow-lg p-8 flex flex-col">
            <h3 className="text-2xl font-semibold leading-7 text-global-3 font-bricolage text-center mb-4">
              Institutional
            </h3>
            <div className="flex flex-row items-end justify-center mb-6">
              <span className="text-2xl font-bold leading-8 text-global-2 font-inter">$</span>
              <span className="text-5xl font-bold leading-[58px] text-global-3 font-bricolage">50</span>
              <span className="text-sm font-normal leading-[17px] text-global-2 font-inter">/ mo</span>
            </div>
            <div className="flex flex-col space-y-4 mb-8">
              <p className="text-base font-normal leading-5 text-global-6 font-inter">All Pro features</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Team collaboration</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Full analytics + reports</p>
              <p className="text-base font-normal leading-5 text-global-6 font-inter">Dedicated support</p>
            </div>
            <Button
              variant="primary"
              onClick={() => handleBuyNowClick('Institutional')}
              className="h-[40px] w-full bg-button-1 text-button-1 text-base font-normal leading-5 rounded-lg mt-auto"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="w-full h-[636px] bg-global-3 relative py-16">
        <h2 className="text-4xl font-semibold leading-11 text-global-4 font-bricolage text-center mb-16">
          What Our Clients Are Saying
        </h2>
        <div className="px-4 sm:px-[142px] mb-8">
          <Slider />
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <button className="w-[54px] h-[54px] bg-global-4 rounded-full flex items-center justify-center">
            <Image
              src="/images/img_arrow.svg"
              alt="Previous"
              width={20}
              height={15}
              className="w-5 h-[15px]"
            />
          </button>
          <button className="w-[54px] h-[54px] bg-global-1 rounded-full flex items-center justify-center">
            <Image
              src="/images/img_arrow_white_a700.svg"
              alt="Next"
              width={20}
              height={15}
              className="w-5 h-[15px]"
            />
          </button>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="w-full py-16 px-4 sm:px-[239px]">
        <h2 className="text-4xl font-semibold leading-11 text-global-4 font-bricolage text-center mb-16">
          Some Frequently Asked Questions (FAQs)
        </h2>
        <ExpandableList />
      </div>
      {/* CTA Section */}
      <div className="w-full h-[226px] bg-global-3 flex flex-col items-center justify-center py-16">
        <h2 className="text-6xl font-semibold leading-[78px] text-global-4 font-inter text-center mb-4">
          Be Part of the Future
        </h2>
        <p className="text-base font-normal leading-5 text-global-1 font-inter text-center">
          Join our early users and shape the future of smart assessments.
        </p>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default HomePage;