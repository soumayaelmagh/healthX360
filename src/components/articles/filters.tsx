"use client";
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateSearch, updateSortingMethod } from "@/redux/rasSlice";
import { useEffect, useState } from "react";

function ArticlesFilters() {
  const dispatch = useDispatch();
  const filterData = useSelector((state: any) => state.ras);
  const [filterState, setFilterState] = useState<{
    sortingMethod: string;
    searchInput: string;
  }>(filterData);

  // useEffect(() => {
  //   dispatch(updateSearch(filterState.searchInput));
  //   dispatch(updateSortingMethod(filterState.sortingMethod));
  // }, [filterState]);

  return (
    <form className="relative top-24 lg:top-[120px] pl-6 md:pl-16 lg:pl-20 xl:pl-24 flex items-center gap-3 md:gap-6 w-full overflow-x-auto z-[100]  max-w-[1700px] mx-auto ">
      <div className="relative w-auto lg:w-2/5 flex gap-1 md:gap-2 items-center">
        <input
          type="text"
          className="w-[50vw] max-w-48 lg:max-w-none lg:w-full rounded-full bg-black bg-opacity-5 border border-black placeholder:text-xs px-2 lg:px-4 py-[3px]"
          placeholder="search article"
          onChange={(e) =>
            setFilterState({
              ...filterState,
              searchInput: e.target.value,
            })
          }
        />
        <button
          className="text-black"
          onClick={(e) => {
            e?.preventDefault();
            dispatch(updateSearch(filterState.searchInput));
          }}
        >
          <FaSearch className="text-xl" />
        </button>
      </div>
      <div className="relative w-auto flex gap-1 md:gap-2 items-center bg-primary px-2 py-[3px] rounded-full">
        <label
          htmlFor="sorting_method"
          className="text-xs md:text-sm xl:text-base whitespace-nowrap text-white"
        >
          sorted by:
        </label>
        <select
          id="sorting_method"
          name="sortedBy"
          className="bg-primary text-white outline-none rounded-full"
          onChange={(e) => {
            e?.preventDefault();
            dispatch(updateSortingMethod(e?.target?.value));
          }}
        >
          <option value="MOST_RECENT">most recent</option>
          <option value="ALPHABETICAL">A-Z</option>
        </select>
      </div>
    </form>
  );
}

export default ArticlesFilters;
