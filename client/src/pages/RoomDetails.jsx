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
            <img src={assets.homeIcon} alt="home-icon" />
            <div>
              <p className="font-medium">Clean Room</p>
              <p className="text-sm text-gray-500">
                You will have the clean room for you.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src={assets.badgeIcon} alt="badge-icon" />
            <div>
              <p className="font-medium">Enhanced Clean</p>
              <p className="text-sm text-gray-500">
                Host committed to enhanced cleaning process.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src={assets.locationFilledIcon} alt="location-icon" />
            <div>
              <p className="font-medium">Great Location</p>
              <p className="text-sm text-gray-500">
                90% guests rated location 5-star.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src={assets.heartIcon} alt="heart-icon" />
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

        {/* Divider BELOW MAP */}
        <hr className="my-14 border-gray-200" />

        {/* Hosted By Section */}
        <div className="mt-12 max-w-3xl">
          <div className="flex items-center gap-5">
            {/* Host Image */}
            <img
              // src={room.hotel.owner?.image || assets.profilePlaceholder}
              src="data:image/jpeg;base64,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"
              alt="Host"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border"
            />

            {/* Host Info */}
            <div>
              <p className="text-lg md:text-xl font-medium">
                Hosted by {room.hotel.owner?.name || room.hotel.name}
              </p>

              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                <StarRating />
                <span>200+ reviews</span>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <button
            className="mt-6
    inline-flex
    items-center
    justify-center
    px-7
    py-3
    rounded-sm
    text-sm
    font-semibold
    text-white
    bg-blue-600
    hover:bg-blue-700
    transition-all
    shadow-sm"
          >
            Contact Host
          </button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
