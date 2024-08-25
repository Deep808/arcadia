"use client";

import React from "react";
import { useStore } from "@/store/useStore";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import Trailer from "@/components/Trailer";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

const Page = () => {
  const { fav } = useStore();

  return (
    <div className={`px-4 ${fav.length > 0 && "my-[8em]"}`}>
      {fav.length > 0 ? (
        fav.map((f: any) => (
          <>
            <Link href={`/movie/${f.id}`}>
              <div
                className="flex mt-[1em] md:mt-[2em] lg:mt-[8em] md:justify-center lg:max-w-[60%] mx-auto"
                key={f.id}
              >
                <Image
                  className="w-32 lg:w-64 object-contain lg:-mb-16 rounded-lg"
                  layout="intrinsic"
                  width={288}
                  height={288}
                  src={getImagePath(f.poster_path)}
                  alt=""
                />
                <div className="p-4 max-w-[60%] ml-4">
                  <p className="font-bold lg:text-2xl">{f.original_title}</p>
                  <p className="mt-6 text-white/70 text-[0.8em] line-clamp-2 lg:line-clamp-4">
                    {f.overview}
                  </p>
                  <div className="mt-4">
                    <Trailer title={f.title} />
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))
      ) : (
        <div className="flex flex-col space-y-6 justify-center items-center min-h-screen">
          <p className="text-xl lg:text-[3em] text-center font-bold dark:text-white/30">
            Add your Favourites Now!
          </p>
          <Link href={"/"}>
            <CiCirclePlus className="w-10 h-10 lg:w-12 lg:h-12" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Page;
