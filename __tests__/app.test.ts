import * as request from 'supertest';
import server from '../src/app';

describe('GraphQL API', () => {
    it('should return all tickets', async () => {
        const response = await request(server)  
            .post('/allTickets')
            .send({
                query: `
            {
              allTickets {
                Section
                Row
                SeatNumber
                Price
              }
            }
          `,
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data.allTickets');
        expect(response.body.data.allTickets).toBeInstanceOf(Array);
    });
});

