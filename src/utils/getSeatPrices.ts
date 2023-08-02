import axios from 'axios';

export const getPrices = async () => {
    try {
      const response = await axios.get("https://my.laphil.com/en/rest-proxy/TXN/Packages/1195/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=26&priceTypeId=&sourceId=30885");
      return response.data;
    } catch (error) {
      console.error('Error fetching sections:', error);
      return null;
    }
  };