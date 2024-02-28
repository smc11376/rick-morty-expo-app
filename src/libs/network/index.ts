import * as Api from "@/libs/network/handler";
import { useQuery } from "react-query";

export function useGetApiService<Response>(url: string) {
  return useQuery([url], () => Api.get<Response>(url));
}
