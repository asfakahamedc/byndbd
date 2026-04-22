import { prisma as db } from '@beyndesh/database';
export async function getAllBookings() {
    return db.booking.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getBookingById(id) {
    return db.booking.findUnique({ where: { id } });
}
export async function createBooking(data) {
    return db.booking.create({ data });
}
export async function updateBooking(id, data) {
    return db.booking.update({ where: { id }, data });
}
export async function deleteBooking(id) {
    return db.booking.delete({ where: { id } });
}
