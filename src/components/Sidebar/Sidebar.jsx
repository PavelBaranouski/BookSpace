// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import styles from "../../styles/Sidebar.module.css";
// import { useSelector } from "react-redux";

// const Sidebar = () => {
//   const { list } = useSelector(({ categories }) => categories);

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [selectedImage, setSelectedImage] = useState(null);

//   if (!Array.isArray(list.books)) {
//     return <div>Loading...</div>;
//   }

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % list.books.length);
//     setSelectedImage(null); // Reset selectedImage when changing to the next image
//   };

//   const handlePrevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? list.books.length - 1 : prevIndex - 1
//     );
//     setSelectedImage(null); // Reset selectedImage when changing to the previous image
//   };

//   const handleImageClick = (image) => {
//     setSelectedImage(image); // Set selectedImage to the clicked image
//   };

//   const { isbn13, image } = list.books[currentImageIndex];

//   return (
//     <section className={styles.sidebar}>
//       <div className={styles.title}>SpaceBook IT</div>
//       <nav>
//         <div className={styles.imageContainer}>
//           {/* Используйте NavLink для навигации */}
//           <NavLink to={`/book/${isbn13}`}>
//             <img
//               src={selectedImage || image}
//               alt="IMGBOOKS"
//               onClick={() => handleImageClick(image)}
//             />
//           </NavLink>
//         </div>
//         <div className={styles.controls}>
//           <button onClick={handlePrevImage}>Previous</button>
//           <button onClick={handleNextImage}>Next</button>
//         </div>
//       </nav>
//       <div className={styles.footer}>
//         <a href="/help" target="_blank" className={styles.link}>
//           Help
//         </a>
//         <a
//           href="/terms"
//           target="_blank"
//           className={styles.link}
//           style={{ textDecoration: "underline" }}
//         >
//           Terms & Conditions
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Sidebar;
