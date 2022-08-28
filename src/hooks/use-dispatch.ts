import { useDispatch } from "react-redux";
import { AppReduxDispatch } from "@/typings/web/redux-store";

const useAppDispatch: () => AppReduxDispatch = useDispatch;

export default useAppDispatch;
