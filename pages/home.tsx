import React from "react";
import RoutineForm from "../components/form/routines/RegisterRoutineForm";
import useMe from "../hooks/me/useMe";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Dashboard from "../components/dashboard/Dashboard";
export default Home;

function Home() {
   const { data: me, isFetching } = useMe();

   if (isFetching) {
      return (
         <div className="flex flex-col justify-center items-center w-full min-h-[100vh] bg-slate-900 p-20">
            <AiOutlineLoading3Quarters size={100} color="blue" />;
         </div>
      );
   }
   const { user } = me;
   const { routines } = user;
   return routines && routines?.length === 0 ? (
      <RoutineForm />
   ) : (
      <Dashboard user={user} />
   );
}
