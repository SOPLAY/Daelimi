import axios from "axios";

export const messgaeApi = async (body) => {
  return await axios.post(process.env.NEXT_PUBLIC_API_SERVER_URL, body);
};
export const issueApi = async (body) => {
  return await axios.post(process.env.NEXT_PUBLIC_ISSUE_SERVER_URL, body);
};