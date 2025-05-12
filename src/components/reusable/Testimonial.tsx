import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";

type testimonial = {
  name: string;
  review: string;
};

function Testimonial(props: testimonial) {
  return (
    <div className="w-full sm:w-2/3 md:w-1/2 h-auto rounded-xl shadow-xl px-4 py-8 mx-auto animate-appear">
      <article className="flex flex-col gap-3">
        <p className="text-xs md:text-base text-black-50">
          {" "}
          <span className="flex text-primary mb-1">
            <BiSolidQuoteSingleLeft
              style={{ fontSize: "25px" }}
              className="-mr-3"
            />
            <BiSolidQuoteSingleLeft style={{ fontSize: "25px" }} />
          </span>
          {props.review}
          <span className="flex text-primary rotate-180">
            <BiSolidQuoteSingleLeft
              style={{ fontSize: "25px" }}
              className="-mr-3"
            />
            <BiSolidQuoteSingleLeft style={{ fontSize: "25px" }} />
          </span>
        </p>
        <h1 className="font-medium text-black-75 md:text-lg">{props.name}</h1>
      </article>
    </div>
  );
}

export default Testimonial;
