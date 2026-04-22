import { prisma as db } from '@beyndesh/database';
export async function getAllPages() {
    return db.cmsPage.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getPageById(id) {
    return db.cmsPage.findUnique({ where: { id } });
}
export async function createPage(data) {
    return db.cmsPage.create({ data });
}
export async function updatePage(id, data) {
    return db.cmsPage.update({ where: { id }, data });
}
export async function deletePage(id) {
    return db.cmsPage.delete({ where: { id } });
}
