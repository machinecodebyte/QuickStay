import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const selectedRoom = roomsDummyData.find(
      (room) => room._id === id
    );

    if (selectedRoom) {
      setRoom(selectedRoom);
      setMainImage(selectedRoom.images[0]);
    }
  }, [id]);

  return (
    room && (
      <div className="py-28 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Room Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}
            <span className="text-sm font-inter ml-2">({room.roomType})</span>
          </h1>
          <span className="text-sm px-3 py-1.5 bg-orange-500 text-white rounded-full">
            20% OFF
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <StarRating />
          <p className="text-sm text-gray-600">200+ reviews</p>
        </div>

        {/* Address */}
        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="" />
          <span>{room.hotel.address}</span>
        </div>

        {/* Images */}
        <div className="flex flex-col lg:flex-row mt-8 gap-6">
          {/* Main Image */}
          <div className="lg:w-1/2">
            <img
              src={mainImage}
              alt="Room"
              className="w-full h-80 md:h-95 rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-4 lg:w-1/2">
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                onClick={() => setMainImage(image)}
                alt=""
                className={`h-37.5 rounded-xl object-cover cursor-pointer shadow-sm ${
                  mainImage === image ? "ring-2 ring-orange-500" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* Highlights + Price */}
        <div className="flex flex-col md:flex-row md:justify-between mt-12 gap-6">
          <div>
            <h2 className="text-3xl font-playfair">
              Experience Luxury Like Never Before
            </h2>

            {/* Amenities */}
            <div className="flex flex-wrap gap-4 mt-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-sm capitalize text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price */}
          <p className="text-2xl font-semibold">${room.pricePerNight}/day</p>
        </div>

        {/* Divider BELOW Amenities */}
        <hr className="my-8 border-gray-200" />

        {/* Booking Form */}

        <form className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white shadow-xl rounded-xl p-6 mt-16 max-w-6xl">
          {/* Left Inputs */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 text-gray-600 w-full">
            {/* Check In */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Check-in</label>
              <input
                type="date"
                className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Check Out */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Check-out</label>
              <input
                type="date"
                className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-12 bg-gray-300"></div>

            {/* Guests */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Guests</label>
              <input
                type="number"
                min={1}
                max={10}
                defaultValue={2}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm outline-none w-28 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-xl bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-md text-sm font-medium max-md:w-full"
          >
            Book Now
          </button>
        </form>

        {/* Extra Info */}
        <div className="mt-12 max-w-3xl space-y-5">
          <div className="flex gap-4">
            <span>🏠</span>
            <div>
              <p className="font-medium">Clean Room</p>
              <p className="text-sm text-gray-500">
                You will have the clean room for you.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span>🛡️</span>
            <div>
              <p className="font-medium">Enhanced Clean</p>
              <p className="text-sm text-gray-500">
                Host committed to enhanced cleaning process.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span>📍</span>
            <div>
              <p className="font-medium">Great Location</p>
              <p className="text-sm text-gray-500">
                90% guests rated location 5-star.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span>⭐</span>
            <div>
              <p className="font-medium">Great Check-in Experience</p>
              <p className="text-sm text-gray-500">
                100% guests loved check-in experience.
              </p>
            </div>
          </div>
        </div>

        {/* Divider ABOVE Description */}
        <hr className="my-10 border-gray-200" />

        {/* Description */}
        <p className="text-sm text-gray-500 mt-10 max-w-3xl leading-relaxed">
          Guests will be allocated on the ground floor according to
          availability. You get a comfortable two-bedroom apartment with a true
          city feeling. The price quoted is for two guests. Please mark the
          number of guests to get the exact price for groups.
        </p>
        {/* Divider BELOW Description */}
        <hr className="my-10 border-gray-200" />

        {/* Location Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-playfair mb-4">
            Where you’ll be staying
          </h2>

          <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
            <img src={assets.locationIcon} alt="" />
            {room.hotel.address}
          </p>

          <div className="w-full h-75 md:h-95 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Hotel Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                room.hotel.address
              )}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
