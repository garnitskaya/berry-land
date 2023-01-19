import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ICard, IData } from "./types";

export const fetchDate = createAsyncThunk<ICard[], string, { rejectValue: string }>(
  "main /fetchDate",
  async (group, { rejectWithValue }) => {
    try {
      const filter = `group=${group}`;
      const response = await axios.get<ICard[]>(`/cards?${group && filter}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка, что то пошло не так...");
    }
  });

export const fetchDateItem = createAsyncThunk<ICard, number, { rejectValue: string }>(
  "main /fetchDateItem",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get<ICard>(`/cards/${id}`);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка, получения данных...");
    }
  });

export const postDate = createAsyncThunk<IData[], IData, { rejectValue: string }>(
  "main /postDate",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post<IData[]>("/data", data);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка, отправки данных...");
    }
  });