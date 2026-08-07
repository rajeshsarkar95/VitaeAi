"use client";

import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export function useAuth() {
  const { user, accessToken } = useSelector((state: RootState) => state.auth);
  return { user, accessToken, isAuthenticated: Boolean(accessToken) };
}
