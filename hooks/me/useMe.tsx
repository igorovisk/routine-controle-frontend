import { useQuery } from "@tanstack/react-query";
import Api from "../../services/api";
import { TypeUser } from "../../types";
import { useRouter } from "next/router";

type MeResponse = {
   user: TypeUser;
   isLoggedIn: boolean;
};

// export async function getMe(): Promise<MeResponse> {
//    try {
//       const response = await Api.get("/me");
//       const user = response.data as TypeUser;
//       return { user, isLoggedIn: true };
//    } catch {
//       return { user: null, isLoggedIn: false };
//    }
// }

// export function useMe() {
//    return useQuery(["me"], async () => getMe(), {
//       staleTime: 20000,
//    });
// }

export async function getMe(): Promise<MeResponse> {
   const response = await Api.get("/me");
   const user = response.data as TypeUser;
   return { user, isLoggedIn: true };
}

export function useMe() {
   const router = useRouter();
   return useQuery(["me"], async () => getMe(), {
      onError: () => {
         return { user: null, isLoggedIn: false };
      },
      retry: false,
   });
}

export default useMe;
