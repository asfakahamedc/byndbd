import type { Prisma } from '@beyndesh/database';
export declare function getAllPages(): Promise<any>;
export declare function getPageById(id: string): Promise<any>;
export declare function createPage(data: Prisma.CmsPageCreateInput): Promise<any>;
export declare function updatePage(id: string, data: Prisma.CmsPageUpdateInput): Promise<any>;
export declare function deletePage(id: string): Promise<any>;
//# sourceMappingURL=pages.d.ts.map
