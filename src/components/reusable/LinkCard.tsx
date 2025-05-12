import { MdArrowOutward } from "react-icons/md";

type linkCardProps = {
  step?: number;
  title: string;
  link?: string;
};

function LinkCard(props: linkCardProps) {
  return (
    <div className="my-2 p-2 pt-1 bg-black-05 w-2/3 max-w-[200px] h-full mx-auto rounded-md">
      <div className="w-full flex justify-between items-center gap-8">
        {props.step ? (
          <h1 className="text-lg md:text-xl xl:text-2xl font-semibold">
            0{props.step}
          </h1>
        ) : null}
        <MdArrowOutward
          style={{ fontSize: "150%" }}
          className="p-[1px] bg-antiflash rounded-full"
        />
      </div>
      <h1 className="text-sm lg:text-base xl:text-lg font-medium">
        {props.title}
      </h1>
    </div>
  );
}

export default LinkCard;
