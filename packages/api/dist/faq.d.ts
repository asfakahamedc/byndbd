import type { Prisma } from '@beyndesh/database';
export declare function getAllFaqs(): Promise<any>;
export declare function getFaqById(id: string): Promise<any>;
export declare function createFaq(data: Prisma.CmsFaqCreateInput): Promise<any>;
export declare function updateFaq(id: string, data: Prisma.CmsFaqUpdateInput): Promise<any>;
export declare function deleteFaq(id: string): Promise<any>;
//# sourceMappingURL=faq.d.ts.map
