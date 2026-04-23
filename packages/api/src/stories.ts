import { prisma as db } from '@beyndesh/database';
import type { Prisma } from '@beyndesh/database';

export async function getAllStorys() {
  return db.cmsStory.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getStoryById(id: string) {
  return db.cmsStory.findUnique({ where: { id } });
}

export async function createStory(data: Prisma.CmsStoryCreateInput) {
  return db.cmsStory.create({ data });
}

export async function updateStory(id: string, data: Prisma.CmsStoryUpdateInput) {
  return db.cmsStory.update({ where: { id }, data });
}

export async function deleteStory(id: string) {
  return db.cmsStory.delete({ where: { id } });
}
