import { FiltersOrigin } from "./filter-origin";

type FiltersControlCategoryProps = {
  setFilterOrigin: (origin: string) => void;
};

export const FiltersControlsCategory = (props: FiltersControlCategoryProps) => {
  const { setFilterOrigin, } = props;

  return (
    <div className="sm:w-[350px] sm:mt-5 p-6 ">
      <FiltersOrigin setFilterOrigin={setFilterOrigin} />
      

    </div>
  );
};
