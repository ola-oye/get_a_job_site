// import { useState } from "react";
// import ArrowBtn from "./ArrowBtn";

// const UsePagination = ({
//   allCardData,
//   cardsPerPage = 1,
//   children,
//   cardStyle,
//   paginationBtnStyle,
// }) => {
//   // Pagination state
//   console.log(className);
//   const [currentPage, setCurrentPage] = useState(1);
//   //   const cardsPerPage = 4; // Number of cards to display per page

//   // Calculate total number of pages
//   const totalPages = Math.ceil(allCardData.length / cardsPerPage);

//   // Get current cards
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentcards = allCardData.slice(indexOfFirstCard, indexOfLastCard);

//   // Change page
//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <>
//       <div>
//         {currentcards.map((card, index) => (
//           <div key={index} className={cardStyle}>
//             {cloneElement(children, { cardData: card, index })}
//             {/* <div className="card-type-badge">{card.type}</div>
//             <cardCard
//               logo={card.logo}
//               title={card.title}
//               company={card.company}
//               location={card.location}
//               type={card.type}
//             /> */}
//           </div>
//         ))}
//       </div>

//       <div className={paginationBtnStyle}>
//         <button
//           className={`pagination-button prev-button ${
//             currentPage === 1 ? "disabled" : ""
//           }`}
//           onClick={goToPreviousPage}
//           disabled={currentPage === 1}
//         >
//           <ArrowBtn
//             transform={"matrix(-1, 0, 0, -1, 0, 0)"}
//             fill={currentPage >= 1 && "#06942A"}
//           />
//         </button>
//         <span className="pagination-info">
//           {currentPage} of {totalPages}
//         </span>
//         <button
//           className={`pagination-button next-button ${
//             currentPage === totalPages ? "disabled" : ""
//           }`}
//           onClick={goToNextPage}
//           disabled={currentPage === totalPages}
//         >
//           <ArrowBtn fill={currentPage >= 1 && "#06942A"} />
//         </button>
//       </div>
//     </>
//   );
// };

// export default UsePagination;
