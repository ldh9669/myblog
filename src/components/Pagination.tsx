// components/Pagination.tsx
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => (
  <div className="flex justify-center items-center mt-6">
    {/* 이전 버튼 */}
    <button
      className={`px-4 py-2 text-blue-500 rounded-lg ${
        currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      ←
    </button>

    {/* 페이지 번호 */}
    {[...Array(totalPages)].map((_, index) => {
      const page = index + 1;
      return (
        <button
          key={page}
          className={`mx-2 px-3 py-1 rounded-lg ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-blue-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      );
    })}

    {/* 다음 버튼 */}
    <button
      className={`px-4 py-2 text-blue-500 rounded-lg ${
        currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      →
    </button>
  </div>
);

export default Pagination;
