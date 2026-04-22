import { prisma as db } from '@beyndesh/database';
export async function getAllTaxonomys() {
    return db.cmsTaxonomy.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getTaxonomyById(id) {
    return db.cmsTaxonomy.findUnique({ where: { id } });
}
export async function createTaxonomy(data) {
    return db.cmsTaxonomy.create({ data });
}
export async function updateTaxonomy(id, data) {
    return db.cmsTaxonomy.update({ where: { id }, data });
}
export async function deleteTaxonomy(id) {
    return db.cmsTaxonomy.delete({ where: { id } });
}
