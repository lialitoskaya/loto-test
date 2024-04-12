import axios from "axios";

const axiosPostResult = async (result) => {
  try {
    await axios.post("/results", result);
  } catch (e) {
    throw Error('Ошибка сети, попробуйте позже.');
  }
};

export default axiosPostResult;
