import axios from 'axios';

export const getSections = async () => {
  try {
    const response = await axios.get("https://my.laphil.com/en/rest-proxy/ReferenceData/Sections?seatMapId=12");
    return response.data;
  } catch (error) {
    console.error('Error fetching sections:', error);
    return null;
  }
};
