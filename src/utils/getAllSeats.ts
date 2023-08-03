import axios, { AxiosResponse } from 'axios';
import { seatsJsonType } from "../schemas/seatsJsonType";
import { Request } from 'express'; 

export async function fetchAllSeats(req: Request): Promise<seatsJsonType[]> {
  try {
    const id = req.query.id; 

    const response: AxiosResponse<seatsJsonType[]> = await axios.get(
      `https://my.laphil.com/en/rest-proxy/TXN/Packages/${id}/Seats?constituentId=0&modeOfSaleId=26&packageId=${id}`
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch allSeats data.");
  }
}
