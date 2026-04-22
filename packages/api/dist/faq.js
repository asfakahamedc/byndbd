import { prisma as db } from '@beyndesh/database';
export async function getAllFaqs() {
    return db.cmsFaq.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getFaqById(id) {
    return db.cmsFaq.findUnique({ where: { id } });
}
export async function createFaq(data) {
    return db.cmsFaq.create({ data });
}
export async function updateFaq(id, data) {
    return db.cmsFaq.update({ where: { id }, data });
}
export async function deleteFaq(id) {
    return db.cmsFaq.delete({ where: { id } });
}
