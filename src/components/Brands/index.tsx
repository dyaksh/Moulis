import Image from "next/image";
import { Brand } from "@/types/brand";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full h-24 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <div className="relative w-full h-full">
          <Image
            src={imageLight}
            alt={name}
            layout="fill"
            className="hidden dark:block object-contain"
            priority
          />
          <Image
            src={image}
            alt={name}
            layout="fill"
            className="block dark:hidden object-contain"
            priority
          />
        </div>
      </a>
    </div>
  );
};

export default SingleBrand;
