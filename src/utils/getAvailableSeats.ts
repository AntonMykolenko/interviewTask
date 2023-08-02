import { seatsJsonType } from "../schemas/seatsJsonType";
import { fetchAllSeats } from "./getAllSeats";
import { Request } from 'express'; 

export async function availableSeats(req: Request) {
    try {
        const allSeats = await fetchAllSeats(req);
        if (!Array.isArray(allSeats)) {
            throw new Error("fetchAllSeats() did not return an array.");
        }

        const availableSeats = allSeats.filter((obj: seatsJsonType) => obj.SeatStatusId === 0);
        return availableSeats;
    } catch (error) {
        console.error("Error in availableSeats():", error);
        return []; 
    }
}
