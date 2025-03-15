import { testsService } from "@/entities/test";
import { TestsList } from "@/features/test";
import { useQuery } from "@/shared/lib";

export const HomeTestsList = () => {
   const { data, isError, isLoading } = useQuery({
      queryFn: () => testsService.fetchTests(),
   });

   if (isLoading) {
      return <p>Загрузка...</p>;
   }

   if (isError || !data) {
      return <p>Произошла ошибка</p>;
   }

   return <TestsList tests={data} />;
};
