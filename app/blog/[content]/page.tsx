import Image from "next/image";
import React from "react";
import imageUrl from "@/app/assets/image3.jpg";
import { Button } from "@/components/ui/button";
import Blog_Card from "@/components/Blog Components/Blog_Card";
import getbase64 from "@/lib/getbase64";
import { Blog_Card_Avatar } from "@/components/Blog Components/Blog_Card_Avatar";
import { BackButton } from "@/components/common/BackButton";

type Props = {};

// BLOG CONTENT PAGE
const BlogContent = async  (props: Props) => {
  const remoteImg = 'https://tabodozo.sirv.com/image3.jpg'
  const base64 = await getbase64(remoteImg)
  return (
    <div className="flex sm:max-w-screen-3xl px-4 sm:px-0  w-full flex-col items-center justify-center gap-8 sm:gap-16 ">
      <BackButton />
      {/* CONVERT THIS COMPONENT TO IT'S OWN CLIENT COMPONENT */}
      <div className="  sm:px-0  w-full max-w-screen-lg rounded-lg bg-white ">
        <div className="relative py-4 h-[15rem] sm:h-[20rem] w-full rounded-lg">
          <Image
            className="rounded-lg object-cover"
            fill
            src={imageUrl}
            alt=""
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full items-end justify-start rounded-lg bg-black/30 px-4  ">
            <div className="px- flex h-full w-full  items-start justify-between  text-white">
              <div className="mt-6 flex items-end justify-end sm:items-center sm:justify-center rounded-lg bg-[#1A1A1A] px-2 py-1 font-bold text-white">
                4 Mins
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  w-full  justify-between rounded-lg  sm:px-6 py-8">
          <div className="flex px-3 flex-col bg w-full sm:w-auto items-start sm:items-center justify-center sm:justify-start gap-8 m:gap-4">
            <h3 className="text-2xl sm:text-4xl font-bold ">
              Diversify Your Real Estate <br /> Investments with Rea
            </h3>
          </div>
        <Blog_Card_Avatar/>
        </div>
      </div>

      <div className=" px-3 px-0 flex w-full max-w-screen-lg items-center justify-center rounded-lg bg-white">
        <div className="flex w-full flex-col items-center justify-center  xs:px-12 ">
          <div className="w-full py-10 font-bold">
            <h3 className="text-4xl">Title</h3>
          </div>

          <div className="flex  w-full flex-col gap-16 text-lg ">
            <p className=''>
              Lorem ipsum dolor sit amet consectetur. Amet ultrices malesuada ut
              suspendisse ac non vel sed. At facilisis magnis adipiscing nunc.
              Maecenas tincidunt tincidunt lectus dictum suspendisse. Sagittis
              integer sagittis dui varius mauris. Faucibus convallis aenean ut
              ut arcu integer. Massa pulvinar tellus amet semper. A orci odio
              aliquet leo donec feugiat. Feugiat mauris accumsan integer
              suscipit morbi dui at dignissim. Duis purus pellentesque at sed
              quis aliquet. Aliquet lobortis et viverra tortor fermentum
              eleifend suspendisse aliquam in. Enim ullamcorper mauris euismod
              a. Malesuada lacus molestie quis fermentum urna ullamcorper. Magna
              sapien lectus non lacus tempor vitae auctor ut blandit. Elit justo
              orci ut risus netus rutrum vitae porttitor condimentum.
            </p>

            <p className=''>
              Lorem ipsum dolor sit amet consectetur. Amet ultrices malesuada ut
              suspendisse ac non vel sed. At facilisis magnis adipiscing nunc.
              Maecenas tincidunt tincidunt lectus dictum suspendisse. Sagittis
              integer sagittis dui varius mauris. Faucibus convallis aenean ut
              ut arcu integer. Massa pulvinar tellus amet semper. A orci odio
              aliquet leo donec feugiat. Feugiat mauris accumsan integer
              suscipit morbi dui at dignissim. Duis purus pellentesque at sed
              quis aliquet. Aliquet lobortis et viverra tortor fermentum
              eleifend suspendisse aliquam in. Enim ullamcorper mauris euismod
              a. Malesuada lacus molestie quis fermentum urna ullamcorper. Magna
              sapien lectus non lacus tempor vitae auctor ut blandit. Elit justo
              orci ut risus netus rutrum vitae porttitor condimentum.
            </p>
            <div className=" w-full max-w-screen-lg rounded-lg bg-white font-semibold ">
              <div className="relative h-[25rem] w-full rounded-lg">
                <Image
                  className="rounded-lg object-cover"
                  fill
                  src={imageUrl}
                  alt=""
                />
              </div>
              <div className="flex w-full items-center justify-center py-2">
                Pic Image (2024)
              </div>
            </div>

            <div className="flex items-center justify-center  gap-6">
              <div className="h-[6.6rem] w-6 rounded-full bg-[#4E23CB]">
                <p className="hidden">s</p>
              </div>
              <p className=" text-2xl text-[#4E23CB] italic">
                Lorem ipsum dolor sit amet consectetur. Amet ultrices malesuada
                ut suspendisse ac non vel sed. At facilisis magnis adipiscing
                nunc. Maecenas tincidunt tincidunt lectus dictum suspendisse
              </p>
            </div>

            <div className="mt-12 w-full  items-center justify-center">
              <div className="py-6">
                <h3 className="text-3xl font-semibold"> Subtitle Header</h3>
              </div>

              <div className="flex w-full flex-col items-center justify-center gap-16">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Amet ultrices
                  malesuada ut suspendisse ac non vel sed. At facilisis magnis
                  adipiscing nunc. Maecenas tincidunt tincidunt lectus dictum
                  suspendisse. Sagittis integer sagittis dui varius mauris.
                  Faucibus convallis aenean ut ut arcu integer. Massa pulvinar
                  tellus amet semper. A orci odio aliquet leo donec feugiat.
                  Feugiat mauris accumsan integer suscipit morbi dui at
                  dignissim. Duis purus pellentesque at sed quis aliquet.
                  Aliquet lobortis et viverra tortor fermentum eleifend
                  suspendisse aliquam in. Enim ullamcorper mauris euismod a.
                  Malesuada lacus molestie quis fermentum urna ullamcorper.
                  Magna sapien lectus non lacus tempor vitae auctor ut blandit.
                  Elit justo orci ut risus netus rutrum vitae porttitor
                  condimentum.
                </p>
                <div className="flex w-full  flex-col items-center justify-center gap-12 sm:flex-row">
                  <div className=" relative h-[23rem] sm:h-[18rem] w-full sm:w-1/2">
                    <Image
                      className="rounded-lg object-cover"
                      fill
                      src={imageUrl}
                      alt=""
                    />
                  </div>
                  <div className=" relative h-[23rem]  sm:h-[18rem] w-full sm:w-1/2">
                    <Image
                      className="rounded-lg object-cover"
                      fill
                      src={imageUrl}
                      alt=""
                    />
                  </div>
                </div>
                <p className="pb-12">
                  Lorem ipsum dolor sit amet consectetur. Amet ultrices
                  malesuada ut suspendisse ac non vel sed. At facilisis magnis
                  adipiscing nunc. Maecenas tincidunt tincidunt lectus dictum
                  suspendisse. Sagittis integer sagittis dui varius mauris.
                  Faucibus convallis aenean ut ut arcu integer. Massa pulvinar
                  tellus amet semper. A orci odio aliquet leo donec feugiat.
                  Feugiat mauris accumsan integer suscipit morbi dui at
                  dignissim. Duis purus pellentesque at sed quis aliquet.
                  Aliquet lobortis et viverra tortor fermentum eleifend
                  suspendisse aliquam in. Enim ullamcorper mauris euismod a.
                  Malesuada lacus molestie quis fermentum urna ullamcorper.
                  Magna sapien lectus non lacus tempor vitae auctor ut blandit.
                  Elit justo orci ut risus netus rutrum vitae porttitor
                  condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button className="   self-center border-2 border-[#4E23CB]  bg-white text-lg font-semibold text-[#4E23CB] hover:bg-transparent">
        View Properties
      </Button>

      <div className="flex  px-3 sm:px-0  w-full flex-col items-center justify-center  xs:px-12 ">
        <div className="w-full text-center xs:text-start py-10 font-bold">
          <h3 className="text-4xl">More Stories</h3>
        </div>
        <div className="flex  flex-col gap-y-[37px] sm:grid w-full grid-cols-12 gap-12">
          <Blog_Card imageUrl={imageUrl} blurDataUrl={base64} />
          <Blog_Card imageUrl={imageUrl} blurDataUrl={base64} />
          <Blog_Card imageUrl={imageUrl} blurDataUrl={base64} />
          <Blog_Card imageUrl={imageUrl} blurDataUrl={base64} />
          <Blog_Card imageUrl={imageUrl} blurDataUrl={base64} />
          <Blog_Card imageUrl={imageUrl} blurDataUrl={base64} />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
