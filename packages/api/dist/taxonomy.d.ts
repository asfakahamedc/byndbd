import type { Prisma } from '@beyndesh/database';
export declare function getAllTaxonomys(): Promise<any>;
export declare function getTaxonomyById(id: string): Promise<any>;
export declare function createTaxonomy(data: Prisma.CmsTaxonomyCreateInput): Promise<any>;
export declare function updateTaxonomy(id: string, data: Prisma.CmsTaxonomyUpdateInput): Promise<any>;
export declare function deleteTaxonomy(id: string): Promise<any>;
//# sourceMappingURL=taxonomy.d.ts.map
