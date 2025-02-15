import { BehaviorSubject, debounceTime } from "rxjs";
import { useObservableState } from "observable-hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSearch } from "#/store/filters-slice.ts";

const debounce$ = new BehaviorSubject("");
const searchInput$ = debounce$.pipe(debounceTime(1000));

export const SearchBar = () => {
  const searchInput = useObservableState(searchInput$, "");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSearch(searchInput));
  }, [searchInput]);

  return (
    <input
      placeholder={"Search"}
      className={
        "border border-[#C9CDD1] rounded-sm pt-0.5 pb-0.5 pl-1.5 pr-1.5 font-normal text-[14px] leading-[22px] min-w-25"
      }
      type="text"
      onChange={(e) => debounce$.next(e.target.value)}
    />
  );
};
