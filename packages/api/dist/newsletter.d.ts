import type { Prisma } from '@beyndesh/database';
export declare function getAllSubscribers(): Promise<any>;
export declare function getSubscriberById(id: string): Promise<any>;
export declare function createSubscriber(data: Prisma.NewsletterSubscriberCreateInput): Promise<any>;
export declare function updateSubscriber(id: string, data: Prisma.NewsletterSubscriberUpdateInput): Promise<any>;
export declare function deleteSubscriber(id: string): Promise<any>;
//# sourceMappingURL=newsletter.d.ts.map