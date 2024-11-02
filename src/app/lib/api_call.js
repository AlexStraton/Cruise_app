import axios from "axios";

export async function fetchAdventures() {
  try {
    const res = await axios.get("https://jjzl6.wiremockapi.cloud/adventures");
    const adventures = res.data;
    console.log(adventures);
    return adventures;
  } catch (error) {
    console.error("An error has occured. Try again:", error);
    return {
      props: {
        adventures: [],
      },
    };
  }
}

export const fetchCruises = async () => {
  try {
    const res = await axios.get("https://jjzl6.wiremockapi.cloud/cruises");
    const cruises = res.data;
    return cruises;
  } catch (error) {
    console.error("An error has occured. Try again:", error);
    throw error;
  }
};
