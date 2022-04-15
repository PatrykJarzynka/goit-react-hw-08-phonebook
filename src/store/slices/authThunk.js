import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await api.post("/login", payload);
  return response.data;
});

export const signOut = createAsyncThunk("auth/signOut", async () => {});
