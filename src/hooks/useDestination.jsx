import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import axios from "axios";

const useDestination = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: destinationData = [],refetch,isLoading:loading,
  } = useQuery({
    queryKey: ["destination"],
    queryFn: async () => {
      const res = await axiosPublic.get("/country");
      return res?.data.countries?.data;
    },
    staleTime: 0,
    cacheTime: 0,
  });

  return [destinationData,refetch,loading];
};

export default useDestination;