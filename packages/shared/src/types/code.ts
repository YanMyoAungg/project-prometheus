// packages/shared/src/types/core.ts
export interface User {
  id: string;
  name: string;
  email: string;
  expertise: string[];
}

export interface Post {
  id: string;
  content: string;
  authorId: string;
  isEducational: boolean;
  qualityScore: number;
}
