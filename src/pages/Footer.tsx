export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    // 使用 margin-top: auto 把 footer 推到 bottom
    <div className='d-flex flex-column min-vh-100'>
      <footer className='mt-auto bg-dark  py-3 text-center'>
        <span className='text-muted'>© {year} Company Name, Inc.</span>
      </footer>
    </div>
  );
};
