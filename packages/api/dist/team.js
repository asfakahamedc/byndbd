import { prisma as db } from '@beyndesh/database';
export async function getAllTeamMembers() {
    return db.cmsTeamMember.findMany({ orderBy: { createdAt: 'desc' } });
}
export async function getTeamMemberById(id) {
    return db.cmsTeamMember.findUnique({ where: { id } });
}
export async function createTeamMember(data) {
    return db.cmsTeamMember.create({ data });
}
export async function updateTeamMember(id, data) {
    return db.cmsTeamMember.update({ where: { id }, data });
}
export async function deleteTeamMember(id) {
    return db.cmsTeamMember.delete({ where: { id } });
}
