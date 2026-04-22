import { prisma as db } from '@beyndesh/database';
export async function getAllSubscribers() {
    return db.newsletterSubscriber.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getSubscriberById(id) {
    return db.newsletterSubscriber.findUnique({ where: { id } });
}
export async function createSubscriber(data) {
    return db.newsletterSubscriber.create({ data });
}
export async function updateSubscriber(id, data) {
    return db.newsletterSubscriber.update({ where: { id }, data });
}
export async function deleteSubscriber(id) {
    return db.newsletterSubscriber.delete({ where: { id } });
}
