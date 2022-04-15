import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (payload) => {
    const response = await api.post("/users/signup",payload);
    return response.data;
  }
);
