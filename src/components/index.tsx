// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import { Cart } from "./Cart";
// // import { Link } from "react-router-dom";
// // import { Cart } from "./Cart";

// const afData = [
//   {
//     name: "Открытие фестиваля",
//     date: "20 сентября, 19:00",
//     place: "ЦДРА им. Фрунзе",
//     link: "opening",
//     description: "Описание",
//     performers: ["ЦКОО ВМФ им. Римского-Корсакова"],
//     src: "https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13",
//     placeLink: "https://yandex.ru/maps/-/CDceJILg",
//   },
//   {
//     name: "“Двойная трость”",
//     date: "23 сентября, 18:00",
//     place: "Библиотека иностранной литературы",
//     link: "double-cane",
//     description: "Описание",
//     performers: [""],
//     src: "https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13",
//     placeLink: "https://yandex.ru/maps/-/CDceJU6d",
//   },
//   {
//     name: "“Царство Флейты”",
//     date: "27 сентября, 18:00",
//     place: "ГБУДО им. С. С. Прокофьева",
//     link: "flute",
//     description: "Описание",
//     performers: [""],
//     src: "https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13",
//     placeLink: "https://yandex.ru/maps/-/CDcEIDzD",
//   },
//   {
//     name: "“Царство Флейты”",
//     date: "27 сентября, 18:00",
//     place: "ГБУДО им. С. С. Прокофьева",
//     link: "flute",
//     description: "Описание",
//     performers: [""],
//     src: "https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13",
//     placeLink: "https://yandex.ru/maps/-/CDcEIDzD",
//   },
// ];
// export function Carousel() {
//   return (
//     <div>
//       <Swiper
//         // install Swiper modules
//         modules={[EffectCoverflow, Navigation, Pagination]}
//         // slidesPerView={2}
//         // navigation
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         pagination={{ clickable: true }}
//         loop={true}
//         slidesPerView={2}
//         coverflowEffect={{
//           rotate: 5,
//           stretch: 0,
//           depth: 100,
//           scale: 1,
//           modifier: 3,
//           slideShadows: false,
//         }}
//         // pagination={{el: '', clickable: true}}
//         // scrollbar={{ draggable: true }}
//         // onSwiper={(swiper) => console.log(swiper)}
//         // onSlideChange={() => console.log("slide change")}
//       >
//         {afData.map((el, index) => (
//           <SwiperSlide key={index}>
//             {/* <Link style={{width: '320px'}} to="https://avatars.mds.yandex.net/i?id=c77d01c5f4104fcacb6940f5968cc700_l-5291751-images-thumbs&n=13z"> */}
//             <Cart
//               key={index}
//               name={el.name}
//               date={el.date}
//               place={el.place}
//               link={el.link}
//               description={el.description}
//               performers={el.performers}
//               src={el.src}
//               placeLink={el.placeLink}
//               imgWidth={300}
//             />
//             {/* </Link> */}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
