
import { useQuery } from "@tanstack/react-query";
import { fetchProductById, fetchProducts } from "../api/productApi";
import { useInfiniteQuery } from "@tanstack/react-query";



export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],

    queryFn: fetchProducts,

    initialPageParam: 1,

    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;

      if (nextPage <= lastPage.totalPages) {
        return nextPage;
      }

      return undefined;
    },

    staleTime: 5 * 60 * 1000,
  });
};

// Hook for fetching single product
export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id, // Only run if id exists
  });
};