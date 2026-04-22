import { prisma as db } from '@beyndesh/database';
export async function getAllDestinations() {
    return db.cmsDestination.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getDestinationById(id) {
    return db.cmsDestination.findUnique({ where: { id } });
}
export async function createDestination(data) {
    return db.cmsDestination.create({ data });
}
export async function updateDestination(id, data) {
    return db.cmsDestination.update({ where: { id }, data });
}
export async function deleteDestination(id) {
    return db.cmsDestination.delete({ where: { id } });
}
