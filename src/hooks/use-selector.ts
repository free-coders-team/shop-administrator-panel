import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppReduxState } from "@/typings/redux-store";

const useAppSelector: TypedUseSelectorHook<AppReduxState> = useSelector;

export default useAppSelector;
