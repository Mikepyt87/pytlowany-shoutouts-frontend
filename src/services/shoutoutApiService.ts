import axios from "axios";
import Shoutout from "../models/Shoutouts";

const baseUrl: string = process.env.REACT_APP_API_BASE_URL || "";

export const getAllShoutouts = (): Promise<Shoutout[]> => {
  return axios.get(`${baseUrl}/shoutouts`).then((res) => res.data);
};
