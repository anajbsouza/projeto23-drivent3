import { prisma } from '@/config';

async function getHotels() {
    return prisma.event.findMany();
}

async function getHotelsWithRooms(hotelId: number) {
    return prisma.hotel.findUnique({
        where: {id: hotelId},
        include: {Rooms: true}
    })
}

export const hotelRepository = {
    getHotels, getHotelsWithRooms
};
