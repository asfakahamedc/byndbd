import type { Prisma } from '@beyndesh/database';
export declare function getAllStorys(): Promise<any>;
export declare function getStoryById(id: string): Promise<any>;
export declare function createStory(data: Prisma.CmsStoryCreateInput): Promise<any>;
export declare function updateStory(id: string, data: Prisma.CmsStoryUpdateInput): Promise<any>;
export declare function deleteStory(id: string): Promise<any>;
//# sourceMappingURL=stories.d.ts.map