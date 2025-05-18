export type categoryType = {
  category: string;
};

export type RecordType = {
  _id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category?: string | string[];
  kind?: "learning" | "daily";
  tags?: string[];
  author?: string;
  readTime?: number;
  slug?: string;
};

export type PaginatedResponse<T> = {
  data: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}; 