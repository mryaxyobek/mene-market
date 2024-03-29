import React from "react";
import { useSelector } from "react-redux";

// images
import search from "../assets/images/svg/search-icon-white.svg";
import { Link } from "react-router-dom";
const Statistics = () => {
  const { userData } = useSelector((store) => store.userData);

  return (
    <div className="w-full">
      <div className="admin_page-body">
        {/* contenyt header */}
        <div className="flex-center-between mb-6">
          <h1 className="text-medium-18">Statistika</h1>
          <div className="admin_page-body_input-wrapper">
            <input
              placeholder="Qidirish"
              type="text"
              className="admin_page-body_input"
            />
            <img
              width={24}
              height={24}
              src={search}
              alt="search icon"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* main content */}
        <table className="block">
          <thead>
            <tr>
              <th className="w-[16%] !px-2">Oqim</th>
              <th className="w-[7%] !px-2">Tashrif</th>
              <th className="w-[7%] !px-2">Yangi</th>
              <th className="w-[10%] !px-2">Qabul Qilindi</th>
              <th className="w-[11%] !px-2">Yetkazilmoqda</th>
              <th className="w-[8%] !px-2">Yetkazildi</th>
              <th className="w-[11%] !px-2">Qayta Qo'ngiroq</th>
              <th className="w-[7%] !px-2">Spam</th>
              <th className="w-[9%] !px-2">Qaytib Keldi</th>
              <th className="w-[7%] !px-2">HOLD</th>
              <th className="w-[7%] !px-2">Arxivlandi</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
            userData.offerLinks &&
            userData.offerLinks.length > 0 ? (
              <tr>
                <td className="w-[16%] !px-2">Chopper</td>
                <td className="w-[7%] !px-2">105</td>
                <td className="w-[7%] !px-2">96</td>
                <td className="w-[10%] !px-2">65</td>
                <td className="w-[11%] !px-2">14</td>
                <td className="w-[8%] !px-2">14</td>
                <td className="w-[11%] !px-2">12</td>
                <td className="w-[7%] !px-2">10</td>
                <td className="w-[9%] !px-2">5</td>
                <td className="w-[7%] !px-2">5</td>
                <td className="w-[7%] !px-2">1</td>
              </tr>
            ) : (
              <tr>
                <td className="block space-x-2">
                  <span className="text-primary-gray-500">
                    Siz hali hech qanday oqim yaratmadingiz. Oqim yaratish uchun
                  </span>
                  <Link
                    to="/admin/market"
                    className="underline text-primary-blue-700"
                  >
                    Market
                  </Link>
                  <span className="text-primary-gray-500">
                    sahifasiga kiring
                  </span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
