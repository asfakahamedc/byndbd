import type { Prisma } from '@beyndesh/database';
export declare function getAllMedias(): Promise<any>;
export declare function getMediaById(id: string): Promise<any>;
export declare function createMedia(data: Prisma.CmsMediaCreateInput): Promise<any>;
export declare function updateMedia(id: string, data: Prisma.CmsMediaUpdateInput): Promise<any>;
export declare function deleteMedia(id: string): Promise<any>;
//# sourceMappingURL=media.d.ts.map
