import { seatsJsonType } from "../schemas/seatsJsonType";
import { sectionsJsonType } from "../schemas/sectionsJsonType";
import { ticketDataJsonType } from "../schemas/ticketDataJsonType";
import { availableSeats } from "../utils/getAvailableSeats";
import { getSections } from "../utils/getSections";
import { getPrices } from "../utils/getSeatPrices";
import { pricesJsonType } from "../schemas/pricesJsonType";
import { Request } from "express";

export async function compileAll(req: Request) {
    try {
        const [allSeats, allSections, allPrices] = await Promise.all([
            availableSeats(req),
            getSections(),
            getPrices(req)
        ]);

        const compiledData: ticketDataJsonType[] = [];

        allSeats.forEach((seat: seatsJsonType) => {
            const { SectionId, SeatRow, ZoneId, SeatNumber } = seat;
            const sectionName = allSections.find((section: sectionsJsonType) => section.Id === SectionId)?.Description;
            const price = allPrices.find((price: pricesJsonType) => price.ZoneId === ZoneId && price.PerformanceId === 0)?.Price;
            if (sectionName && price) {
                compiledData.push({ Section: sectionName, Row: SeatRow, SeatNumber, Price: price });
            }
        });
        console.log(compiledData.length)
        return compiledData;
    } catch (error) {
        console.error('Error compiling data:', error);
        throw new Error('Internal Server Error');
    }
}



