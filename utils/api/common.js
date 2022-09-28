import axios from "axios" 
export const getTopCategories = async () => {
    const response = await axios.get("/api/super-store/top-categories");
    return response.data;
  };