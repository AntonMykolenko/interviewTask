import axios, { AxiosResponse } from 'axios';
import { pricesJsonType } from '../schemas/pricesJsonType';
import { Request } from 'express'; 

export async function getPrices(req: Request): Promise<pricesJsonType[]> {
  const id = req.query.id;
  try {
    const response: AxiosResponse<pricesJsonType[]> = await axios.get(
      `https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Prices?expandPerformancePriceType=&includeOnlyBasePrice=&modeOfSaleId=26&priceTypeId=&sourceId=30885`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch allSeats data.");
  }
};