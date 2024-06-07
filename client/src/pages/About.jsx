import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to JobFinder, your premier destination for connecting talent with 
          opportunity. Our mission is to streamline the job search process, making 
          it easier for job seekers to find their dream positions and for companies 
          to discover the best candidates. At JobFinder, we understand that the job 
          market is constantly evolving, which is why we are dedicated to providing 
          a platform that is not only user-friendly but also adaptable to the 
          ever-changing demands of the workforce. Whether you are a recent graduate 
          looking to start your career or an experienced professional seeking new 
          challenges, JobFinder is here to support you every step of the way.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        Since our inception, we have been committed to creating a space where both 
        job seekers and employers can thrive. Our team of experts works tirelessly 
        to curate a diverse range of job listings across various industries, 
        ensuring that our users have access to the latest opportunities. In addition 
        to our robust job search engine, we offer a wealth of resources designed to 
        help individuals enhance their skills and improve their employability. From 
        resume-building tools to interview preparation guides, JobFinder is more than 
        just a job board; it is a comprehensive career development platform. Join us 
        today and take the next step towards a brighter future with JobFinder.
        </p>
      </div>
    </div>
  );
};

export default About;
