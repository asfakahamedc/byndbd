import { prisma as db } from '@beyndesh/database';
export async function getAllReviews() {
    return db.review.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getReviewById(id) {
    return db.review.findUnique({ where: { id } });
}
export async function createReview(data) {
    return db.review.create({ data });
}
export async function updateReview(id, data) {
    return db.review.update({ where: { id }, data });
}
export async function deleteReview(id) {
    return db.review.delete({ where: { id } });
}
