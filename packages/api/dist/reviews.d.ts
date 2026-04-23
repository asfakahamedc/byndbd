import type { Prisma } from '@beyndesh/database';
export declare function getAllReviews(): Promise<any>;
export declare function getReviewById(id: string): Promise<any>;
export declare function createReview(data: Prisma.ReviewCreateInput): Promise<any>;
export declare function updateReview(id: string, data: Prisma.ReviewUpdateInput): Promise<any>;
export declare function deleteReview(id: string): Promise<any>;
//# sourceMappingURL=reviews.d.ts.map
