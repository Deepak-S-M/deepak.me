import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content, link, message } = review;
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <Image width={60} height={50} className="" src={image} alt={name} />
      </div>
      
      <div className="content-wrapper h-[220px] md:h-[210px] lg:h-[120px] overflow-y-auto">
        <p>{content}</p>
      </div>
      {link === "" ? (
        <span className="text-red-300">{message}</span> // Adjust color as needed
      ) : ( 
        link && (
          <div className="text-right">
            <a href={link} className="text-blue-500 hover:underline">Click Here</a>
          </div>
        )
      )}
    </div>
  );
};

export default SingleTestimonial;
