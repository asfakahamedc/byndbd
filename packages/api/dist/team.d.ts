import type { Prisma } from '@beyndesh/database';
export declare function getAllTeamMembers(): Promise<any>;
export declare function getTeamMemberById(id: string): Promise<any>;
export declare function createTeamMember(data: Prisma.CmsTeamMemberCreateInput): Promise<any>;
export declare function updateTeamMember(id: string, data: Prisma.CmsTeamMemberUpdateInput): Promise<any>;
export declare function deleteTeamMember(id: string): Promise<any>;
//# sourceMappingURL=team.d.ts.map
