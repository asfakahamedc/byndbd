import type { Prisma } from '@beyndesh/database';
export declare function getAllBookings(): Promise<any>;
export declare function getBookingById(id: string): Promise<any>;
export declare function createBooking(data: Prisma.BookingCreateInput): Promise<any>;
export declare function updateBooking(id: string, data: Prisma.BookingUpdateInput): Promise<any>;
export declare function deleteBooking(id: string): Promise<any>;
//# sourceMappingURL=bookings.d.ts.map
