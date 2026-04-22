import { prisma as db } from '@beyndesh/database';
export async function getAllMedias() {
    return db.cmsMedia.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getMediaById(id) {
    return db.cmsMedia.findUnique({ where: { id } });
}
export async function createMedia(data) {
    return db.cmsMedia.create({ data });
}
export async function updateMedia(id, data) {
    return db.cmsMedia.update({ where: { id }, data });
}
export async function deleteMedia(id) {
    return db.cmsMedia.delete({ where: { id } });
}
