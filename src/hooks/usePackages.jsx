import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePackages = ({page}) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: createPackage= [],refetch,isLoading:loading,
  } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const result = await axiosPublic.get(`/destination/?per_page=${page}`);
      console.log(result);
      return result?.data?.destinations?.data;
    },
  });

  return [createPackage,refetch,loading];
};

export default usePackages;