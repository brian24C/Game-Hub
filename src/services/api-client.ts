import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0cede78c85984ceca136ad2d6458df03",
  },
});
