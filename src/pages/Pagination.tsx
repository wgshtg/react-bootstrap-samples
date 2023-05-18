import { useState } from 'react';
import { Pagination as BasePagination } from 'react-bootstrap';

export const Pagination = () => {
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pageRange = 1;

  // 當前頁數前後範圍
  let rangeStart = currentPage - pageRange;
  let rangeEnd = currentPage + pageRange;

  if (rangeEnd > totalPage) {
    rangeEnd = totalPage;
    rangeStart = totalPage - pageRange * 2;
    rangeStart = rangeStart < 1 ? 1 : rangeStart;
  }

  if (rangeStart <= 1) {
    rangeStart = 1;
    rangeEnd = Math.min(pageRange * 2 + 1, totalPage);
  }

  const next = () => setCurrentPage(currentPage + 1 > totalPage ? totalPage : currentPage + 1);
  const prev = () => setCurrentPage(currentPage - 1 <= 0 ? 1 : currentPage - 1);
  const go = (page: number) => () => setCurrentPage(page);

  return (
    <BasePagination>
      <BasePagination.Prev onClick={prev} />
      {Array.from({ length: totalPage }, (_, k) => k + 1).map((index) => {
        // 當前頁數前後範圍外與第一和最後一頁用 ••• 顯示
        if (index === rangeStart - 1 || index === rangeEnd + 1) {
          return <BasePagination.Ellipsis key={index} onClick={go(index)} />;
        }

        // 當前頁數前後範圍內顯示一般數字按鈕，active 表示當前頁數
        if (
          index === currentPage ||
          (index >= rangeStart && index <= rangeEnd) ||
          index === 1 ||
          index === totalPage
        ) {
          return (
            <BasePagination.Item key={index} active={index === currentPage} onClick={go(index)}>
              {index}
            </BasePagination.Item>
          );
        }

        return null;
      })}
      <BasePagination.Next onClick={next} />
    </BasePagination>
  );
};
