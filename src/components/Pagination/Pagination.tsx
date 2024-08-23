import next from "next";
import {
  PaginationEndLink,
  PaginationNumberLink,
  PaginationPlaceholder,
  Wrapper,
} from "./styles";
import { DOTS, usePagination } from "./usePagination";

export interface PaginationProps {
  currentPage: number;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  baseUrl: string;
  currentUrl: string;
}

const Pagination = (props: PaginationProps) => {
  const {
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
    baseUrl,
    currentUrl,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })!;

  let lastPage = paginationRange[paginationRange.length - 1];

  const previousPage: number = currentPage - 1;
  const nextPage: number = currentPage + 1;

  const updatePageNumberInUrl = (url: string, pageNumber: number | string) => {
    const pageRegex = /([?&])page=\d+/;
    const pageParam = `page=${pageNumber}`;

    if (url.match(pageRegex)) {
      return url.replace(pageRegex, `$1${pageParam}`);
    } else {
      const delimiter = url.includes("?") ? "&" : "?";
      return `${url}${delimiter}${pageParam}`;
    }
  };

  return (
    <Wrapper>
      {currentPage === 1 ? (
        <PaginationPlaceholder />
      ) : (
        <PaginationEndLink
          href={
            previousPage === 1
              ? updatePageNumberInUrl(currentUrl, 1)
              : updatePageNumberInUrl(currentUrl, previousPage)
          }
        >
          {"<"}
        </PaginationEndLink>
      )}

      {paginationRange.map((pageNumber: string | number) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationPlaceholder key="dots">&#8230;</PaginationPlaceholder>
          );
        }

        return (
          <PaginationNumberLink
            key={pageNumber}
            href={
              pageNumber === 1
                ? updatePageNumberInUrl(currentUrl, 1)
                : updatePageNumberInUrl(currentUrl, pageNumber)
            }
            $currentPage={currentPage === pageNumber}
          >
            {pageNumber}
          </PaginationNumberLink>
        );
      })}
      {currentPage === lastPage ? (
        <PaginationPlaceholder />
      ) : (
        <PaginationEndLink href={updatePageNumberInUrl(currentUrl, nextPage)}>
          {">"}
        </PaginationEndLink>
      )}
    </Wrapper>
  );
};

export default Pagination;
