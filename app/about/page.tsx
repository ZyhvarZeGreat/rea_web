import Image from "next/image";
import Logo from "@/app/assets/linkedin.svg";
import CTA from "@/components/common/CTA/CTA";
import Link from "next/link";
import { generateBlurData } from "@/lib/generateBlurData";


const About = async () => {

  const aboutMainImgURL = "https://tabodozo.sirv.com/about-2.jpg";
  const aboutBlurImgURL = "https://tabodozo.sirv.com/property.jpg";
  const aboutTeamURL = "https://tabodozo.sirv.com/team.jpg";
  const base64Main = await generateBlurData(aboutMainImgURL);
  const base64Teams = await generateBlurData(aboutTeamURL);
  const base64Blur = await generateBlurData(aboutBlurImgURL);
  return (
    <div className="flex w-full flex-col ">

      <div className=" flex w-full flex-col items-center  justify-center">
        <div className="relative flex w-full flex-col  items-start  px-8  sm:h-[40rem] lg:flex-row lg:justify-between xl:mx-auto xl:items-center xl:pl-[6rem] ">
          <div
            className=" mt-8  sm:h-full gap-16 sm:gap-0 flex w-full flex-col justify-around  sm:mt-0 xl:h-2/3 xl:w-1/2 ">
            <h1 className=" font-jakarta text-2xl font-bold leading-tight  text-[#4E23CB] sm:text-4xl  lg:text-5xl xl:w-[80%]">
              Empowering everyone to own and build wealth through Real Estate
            </h1>
            <div className=" flex flex-col sm:flex-row  w-full items-start sm:items-center gap-10 sm:gap-16 sm:w-auto">
              <h3 className=" text-lg font-bold text-[#696969] sm:text-2xl">
                Associated Partners:{" "}
              </h3>
              <div className="flex items-center justify-center gap-12">
                {/* <Metro />
                <Gotham /> */}
              </div>
            </div>
          </div>
          <div className="relative hidden h-[80%] lg:block lg:w-1/2 xl:h-full xl:w-2/5 ">
            <Image
              placeholder='blur'
              priority
              className="rounded-2xl object-cover object-top blur-lg "
              height={400}
              width={400}
              blurDataURL={base64Blur}
              src={aboutBlurImgURL}
              alt=""
            />
          </div>
          <div
            className="relative flex mx-auto lg:mx-none lg:block items-center justify-center h-[25rem] z-50 w-full top-[3rem] block xs:h-[513px] xs:w-[644px] sm:w-[518px]  lg:mr-[13rem] lg:absolute lg:bottom-[6rem] lg:right-[4rem] lg:z-[100px] lg:mr-0 lg:w-[20rem] xl:right-[10rem] xl:h-[75%] xl:w-[40rem] ">
            <Image
              placeholder='blur'
              className=" h-full w-full object-cover rounded-xl object-top  xs:px-8 sm:rounded-2xl  sm:px-0"
              src={aboutMainImgURL}
              fill
              blurDataURL={aboutMainImgURL}
              alt=""
            />
          </div>
        </div>

        <div
          className=" mt-32 md:mt-12 flex w-full flex-col px-8 lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-3xl   lg:px-12 md:px-12 xl:px-0  ">
          <div className="flex w-full flex-col items-center justify-between gap-12 py-6 lg:flex-row lg:gap-0">
            <div className=" w-full lg:w-2/5">
              <p className=" text-sm sm:text-lg">
                At REA, we&apos;re on a mission to democratize real estate investment, making it accessible to all. We believe that everyone deserves the opportunity to grow their wealth through property ownership. Whether you&apos;re a seasoned investor or just starting out, we&apos;re here to guide you on your journey to financial success.
                Our team of experts brings years of experience in real estate investment, ensuring that every decision we make is backed by industry knowledge and insight. We carefully select premium properties that offer lucrative returns, giving our investors the opportunity to earn passive income and build long-term wealth.
              </p>
            </div>
            <div className="w-full lg:w-2/5">
              <h3 className=" text-center text-lg sm:text-3xl font-bold text-[#4E23CB]">
                Investing in real estate has never been easier or more rewarding. With REA, you can unlock the potential of property ownership.
              </h3>
            </div>
          </div>
        </div>

        <div
          className=" mt-32 md:mt-16 flex w-full lg:max-w-screen-xl xl:max-w-screen-2xl 2xl:max-w-screen-3xl   flex-col items-center justify-center gap-6 ">
          <div className="py-12 text-center">
            <h3 className="text-4xl font-bold">The Team</h3>
          </div>

          <div className=" flex flex-col  items-center justify-center gap-y-12 sm:grid w-full grid-cols-12 gap-12 px-8 lg:px-0 ">
            <div className="relative w-full xs:col-span-10 h-[26rem] sm:col-span-6 lg:h-[30rem] xl:col-span-3 ">
              <Image
                className="rounded-xl object-cover object-top"
                 placeholder='blur'
                fill
                src={aboutTeamURL}
                blurDataURL={aboutTeamURL}

                alt="team"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-between rounded-xl bg-black/30 ">
                <div className="mt-6 w-full px-6 ">
                 <Link href='https://linkedin.com'>
                    <Logo />
                 </Link>
                </div>
                <div className="flex h-[6rem] w-full   items-center justify-center rounded-b-xl bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 ">
                  <div className=" flex w-full  flex-col items-center  justify-center gap-1  text-xl text-white">
                    <h3 className="font-semibold"> Name and Surname</h3>
                    <h3 className=" font-normal">Position held</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full xs:col-span-10 h-[26rem] sm:col-span-6 lg:h-[30rem] xl:col-span-3 ">
              <Image
                className="rounded-xl object-cover object-top"
                 placeholder='blur'
                fill
                src={aboutTeamURL}
                blurDataURL={aboutTeamURL}

                alt="team"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-between rounded-xl bg-black/30 ">
                <div className="mt-6 w-full px-6 ">
                 <Link href='https://linkedin.com'>
                    <Logo />
                 </Link>
                </div>
                <div className="flex h-[6rem] w-full   items-center justify-center rounded-b-xl bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 ">
                  <div className=" flex w-full  flex-col items-center  justify-center gap-1  text-xl text-white">
                    <h3 className="font-semibold"> Name and Surname</h3>
                    <h3 className=" font-normal">Position held</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full xs:col-span-10 h-[26rem] sm:col-span-6 lg:h-[30rem] xl:col-span-3 ">
              <Image
                className="rounded-xl object-cover object-top"
                 placeholder='blur'
                fill
                src={aboutTeamURL}
                blurDataURL={aboutTeamURL}

                alt="team"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-between rounded-xl bg-black/30 ">
                <div className="mt-6 w-full px-6 ">
                 <Link href='https://linkedin.com'>
                    <Logo />
                 </Link>
                </div>
                <div className="flex h-[6rem] w-full   items-center justify-center rounded-b-xl bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 ">
                  <div className=" flex w-full  flex-col items-center  justify-center gap-1  text-xl text-white">
                    <h3 className="font-semibold"> Name and Surname</h3>
                    <h3 className=" font-normal">Position held</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full xs:col-span-10 h-[26rem] sm:col-span-6 lg:h-[30rem] xl:col-span-3 ">
              <Image
                className="rounded-xl object-cover object-top"
                 placeholder='blur'
                fill
                src={aboutTeamURL}
                blurDataURL={aboutTeamURL}

                alt="team"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col items-center justify-between rounded-xl bg-black/30 ">
                <div className="mt-6 w-full px-6 ">
                 <Link href='https://linkedin.com'>
                    <Logo />
                 </Link>
                </div>
                <div className="flex h-[6rem] w-full   items-center justify-center rounded-b-xl bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 ">
                  <div className=" flex w-full  flex-col items-center  justify-center gap-1  text-xl text-white">
                    <h3 className="font-semibold"> Name and Surname</h3>
                    <h3 className=" font-normal">Position held</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-24 w-full lg:my-32">
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
