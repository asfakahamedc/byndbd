import { prisma as db } from '@beyndesh/database';
export async function getAllStorys() {
    return db.story.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getStoryById(id) {
    return db.story.findUnique({ where: { id } });
}
export async function createStory(data) {
    return db.story.create({ data });
}
export async function updateStory(id, data) {
    return db.story.update({ where: { id }, data });
}
export async function deleteStory(id) {
    return db.story.delete({ where: { id } });
}
