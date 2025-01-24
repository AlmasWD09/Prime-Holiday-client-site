import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import axios from "axios";

const useDestination = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: destinationData = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["destination"],
    queryFn: async () => {
      const res = await axiosPublic.get("/country?per_page");
      return res?.data.countries?.data;
    },
  });

  return [destinationData, refetch, loading];
};

export default useDestination;