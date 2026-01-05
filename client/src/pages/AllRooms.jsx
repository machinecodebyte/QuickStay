import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";

// CheckBox component
const CheckBox = ({ lable, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, lable)}
      />
      <span className="font-light text-gray-700 select-none">{lable}</span>
    </label>
  );
};

const RadioButton = ({ lable, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(lable)}
      />
      <span className="font-light text-gray-700 select-none">{lable}</span>
    </label>
  );
};

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Room", "Family Suite"];

  const priceRange = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortedOptions = [
    "Price Low To High",
    "Price High To Low",
    "Newest First",
    ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start gap-10 justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* LEFT : ROOMS */}
      <div className="flex-1">
        <h1 className="font-playfair text-4xl md:text-[40px]">
          Hotel Rooms
        </h1>

        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-3xl">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-8 gap-5 border-b border-gray-300 last:border-0"
          >
            {/* Image */}
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              className="max-h-52 md:w-[40%] rounded-lg shadow-md object-cover cursor-pointer"
            />

            {/* Content */}
            <div className="md:w-[60%] flex flex-col gap-1.5">
              <p className="text-sm text-gray-500">{room.hotel.city}</p>

              <p
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-2xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>

              <div className="flex items-center text-sm">
                <StarRating />
                <p className="ml-2 text-gray-600">200+ reviews</p>
              </div>

              <div className="flex items-center gap-1 text-gray-500 text-sm">
                <img src={assets.locationIcon} alt="" />
                <span>{room.hotel.address}</span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap mt-2 mb-4 gap-3">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-[#F5F5FF]/70"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-4 h-4"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg font-medium text-gray-700">
                ${room.pricePerNight}/night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT : FILTERS */}
      <div className="bg-white w-72 border border-gray-300 text-gray-700 max-lg:mb-8 lg:mt-16 lg:ml-4">
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300">
          <p className="text-base font-semibold text-gray-900">
            FILTERS
          </p>

          <span
            onClick={() => setOpenFilters(!openFilters)}
            className="text-xs cursor-pointer lg:hidden"
          >
            {openFilters ? "HIDE" : "SHOW"}
          </span>
        </div>

        <div
          className={`${
            openFilters ? "h-auto" : "h-0 lg:h-auto"
          } overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="text-sm font-semibold text-gray-900 pb-2">
              Popular filters
            </p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} lable={room} />
            ))}
          </div>

          <div className="px-5 pt-5">
            <p className="text-sm font-semibold text-gray-900 pb-2">
              Price Range
            </p>
            {priceRange.map((range, index) => (
              <CheckBox key={index} lable={`$ ${range}`} />
            ))}
          </div>

          <div className="px-5 pt-5 pb-5">
            <p className="text-sm font-semibold text-gray-900 pb-2">
              Sort By
            </p>
            {sortedOptions.map((option, index) => (
              <RadioButton key={index} lable={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
