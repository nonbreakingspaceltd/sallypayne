export interface PaginationPage {
  content: string | number;
  page: number;
  show: boolean;
  disable?: boolean;
}

export interface PaginationProps {
  basePath?: string;
  totalPage: number;
  currentPage?: number;
  myData?: any;
  pageRange?: number;
  showNextPrev?: boolean;
}
