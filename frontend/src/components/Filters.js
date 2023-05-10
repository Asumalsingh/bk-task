import React, { useState } from "react";
import { MdKeyboardArrowDown, MdOutlineClose } from "react-icons/md";

export default function Filters({ filterQuery, setFilterQuery }) {
  const [expand, setExpand] = useState({
    endYear: false,
    topic: false,
    sector: false,
    region: false,
    pestle: false,
    source: false,
    country: false,
  });

  const [endDate, setEndDate] = useState();

  const topics = [
    "gas",
    "oil",
    "market",
    "gdp",
    "car",
    "policy",
    "security",
    "gasoline",
    "food",
  ];

  const sectors = [
    "Energy",
    "Environment",
    "Government",
    "Manufacturing",
    "Retail",
    "Healthcare",
    "Security",
    "Transport",
    "Water",
  ];

  const regions = [
    "Northern America",
    "Central America",
    "Western Africa",
    "Western Asia",
    "Europe",
    "Oceania",
    "Africa",
    "Asia",
    "world",
  ];

  const sources = [
    "EIA",
    "sustainablebrands.com",
    "SBWire",
    "CleanTechnica",
    "Vanguard News",
    "Avi Melamed",
    "WSJ",
    "Abq",
    "Reuters",
  ];

  const pestles = [
    "Environmental",
    "Economic",
    "Political",
    "Healthcare",
    "Social",
    "Lifestyles",
  ];

  const countries = [
    "India",
    "United States of America",
    "Mexico",
    "Nigeria",
    "Lebanon",
    "Russia",
    "Saudi Arabia",
    "Angola",
    "Egypt",
    "South Africa",
  ];

  return (
    <div className="">
      <h2 className="font-bold text-xl">Filters</h2>
      {/* Showing which filters applied */}
      {/* <div className="flex flex-wrap text-xs">
        {filterQuery.price.length > 0 && (
          <div className="flex items-center space-x-2 mr-3 my-1 bg-gray-200 p-1">
            <span>
              ₹{filterQuery.price[0]} - ₹{filterQuery.price[1]}{" "}
            </span>
            <MdOutlineClose
              size={17}
              className="cursor-pointer hover:bg-red-200"
              onClick={() => {}}
            />
          </div>
        )}

        {filterQuery.productType &&
          filterQuery.productType.map((p, index) => {
            return (
              <div
                key={index}
                className="flex items-center space-x-2 mr-3 my-1 bg-gray-200 p-1"
              >
                <span>{p}</span>
                <MdOutlineClose
                  size={17}
                  className="cursor-pointer hover:bg-red-200"
                  onClick={() => {}}
                />
              </div>
            );
          })}

        {filterQuery.size &&
          filterQuery.size.map((s, index) => {
            return (
              <div
                key={index}
                className="flex items-center space-x-2 mr-3 my-1 bg-gray-200 p-1"
              >
                <span>{s}</span>
                <MdOutlineClose
                  size={17}
                  className="cursor-pointer hover:bg-red-200"
                  onClick={() => {}}
                />
              </div>
            );
          })}
      </div> */}
      <hr className="my-2" />
      {/* end year */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => {
            setExpand({ ...expand, endYear: !expand.endYear });
          }}
        >
          <span className="font-semibold text-sm">END YEAR</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.endYear && "rotate-180 duration-300"}`}
          />
        </div>
        {expand.endYear && (
          <div className="flex space-x-4">
            <input
              type="number"
              className="w-1/2 bg-gray-50 px-2 text-sm py-0 rounded-md outline-none border focus:border-gray-300 "
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
            <button
              className="p-2 shadow-sm rounded-md border text-xs"
              onClick={() => {
                setFilterQuery({ ...filterQuery, endYear: endDate });
              }}
            >
              Go
            </button>
          </div>
        )}
      </div>
      <hr className="my-2" />
      {/* Topic */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-1"
          onClick={() => {
            setExpand({ ...expand, topic: !expand.topic });
          }}
        >
          <span className="font-semibold text-sm">TOPICS</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.topic && "rotate-180 duration-300"}`}
          />
        </div>
        {expand.topic && (
          <ul>
            {topics.map((t, index) => {
              return (
                <li key={index} className="flex items-center mb-2">
                  <input
                    id={t}
                    type="checkbox"
                    value={t}
                    onChange={(e) => {
                      if (filterQuery.topic.includes(e.target.value)) {
                        setFilterQuery({
                          ...filterQuery,
                          topic: filterQuery.topic.filter(
                            (prev) => prev !== e.target.value
                          ),
                        });
                      } else {
                        setFilterQuery({
                          ...filterQuery,
                          topic: [...filterQuery.topic, e.target.value],
                        });
                      }
                    }}
                    className="w-4 h-4 text-blue-500 cursor-pointer border-gray-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor={t}
                    className="ml-1 capitalize cursor-pointer text-xs text-gray-900"
                  >
                    {t}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <hr className="my-2" />
      {/* Sectors */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-1"
          onClick={() => {
            setExpand({ ...expand, sector: !expand.sector });
          }}
        >
          <span className="font-semibold text-sm">SECTOR</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.sector && "rotate-180 duration-300"}`}
          />
        </div>

        {expand.sector && (
          <ul>
            {sectors.map((s, index) => {
              return (
                <li key={index} className="flex items-center mb-2">
                  <input
                    id={s}
                    type="checkbox"
                    value={s}
                    onChange={(e) => {
                      if (filterQuery.sector.includes(e.target.value)) {
                        setFilterQuery({
                          ...filterQuery,
                          sector: filterQuery.sector.filter(
                            (prev) => prev !== e.target.value
                          ),
                        });
                      } else {
                        setFilterQuery({
                          ...filterQuery,
                          sector: [...filterQuery.sector, e.target.value],
                        });
                      }
                    }}
                    className="w-4 h-4 text-blue-500 cursor-pointer border-gray-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor={s}
                    className="ml-1 capitalize cursor-pointer text-xs text-gray-900"
                  >
                    {s}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <hr className="my-2" />
      {/* Regions */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-1"
          onClick={() => {
            setExpand({ ...expand, region: !expand.region });
          }}
        >
          <span className="font-semibold text-sm">REGION</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.region && "rotate-180 duration-300"}`}
          />
        </div>

        {expand.region && (
          <ul>
            {regions.map((item, index) => {
              return (
                <li key={index} className="flex items-center mb-2">
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      if (filterQuery.region.includes(e.target.value)) {
                        setFilterQuery({
                          ...filterQuery,
                          region: filterQuery.region.filter(
                            (prev) => prev !== e.target.value
                          ),
                        });
                      } else {
                        setFilterQuery({
                          ...filterQuery,
                          region: [...filterQuery.region, e.target.value],
                        });
                      }
                    }}
                    className="w-4 h-4 text-blue-500 cursor-pointer border-gray-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor={item}
                    className="ml-1 capitalize cursor-pointer text-xs text-gray-900"
                  >
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <hr className="my-2" />
      {/* Pestle */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-1"
          onClick={() => {
            setExpand({ ...expand, pestle: !expand.pestle });
          }}
        >
          <span className="font-semibold text-sm">PESTLE</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.pestle && "rotate-180 duration-300"}`}
          />
        </div>

        {expand.pestle && (
          <ul>
            {pestles.map((item, index) => {
              return (
                <li key={index} className="flex items-center mb-2">
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      if (filterQuery.pestle.includes(e.target.value)) {
                        setFilterQuery({
                          ...filterQuery,
                          pestle: filterQuery.pestle.filter(
                            (prev) => prev !== e.target.value
                          ),
                        });
                      } else {
                        setFilterQuery({
                          ...filterQuery,
                          pestle: [...filterQuery.pestle, e.target.value],
                        });
                      }
                    }}
                    className="w-4 h-4 text-blue-500 cursor-pointer border-gray-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor={item}
                    className="ml-1 capitalize cursor-pointer text-xs text-gray-900"
                  >
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <hr className="my-2" />
      {/* Sources */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-1"
          onClick={() => {
            setExpand({ ...expand, source: !expand.source });
          }}
        >
          <span className="font-semibold text-sm">SOURCES</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.source && "rotate-180 duration-300"}`}
          />
        </div>

        {expand.source && (
          <ul>
            {sources.map((item, index) => {
              return (
                <li key={index} className="flex items-center mb-2">
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      if (filterQuery.source.includes(e.target.value)) {
                        setFilterQuery({
                          ...filterQuery,
                          source: filterQuery.source.filter(
                            (prev) => prev !== e.target.value
                          ),
                        });
                      } else {
                        setFilterQuery({
                          ...filterQuery,
                          source: [...filterQuery.source, e.target.value],
                        });
                      }
                    }}
                    className="w-4 h-4 text-blue-500 cursor-pointer border-gray-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor={item}
                    className="ml-1 capitalize cursor-pointer text-xs text-gray-900"
                  >
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <hr className="my-2" />
      {/* Countries */}
      <div>
        <div
          className="flex items-center justify-between cursor-pointer mb-1"
          onClick={() => {
            setExpand({ ...expand, country: !expand.country });
          }}
        >
          <span className="font-semibold text-sm">COUNTRIES</span>
          <MdKeyboardArrowDown
            size={25}
            className={`${expand.country && "rotate-180 duration-300"}`}
          />
        </div>

        {expand.country && (
          <ul>
            {countries.map((item, index) => {
              return (
                <li key={index} className="flex items-center mb-2">
                  <input
                    id={item}
                    type="checkbox"
                    value={item}
                    onChange={(e) => {
                      if (filterQuery.country.includes(e.target.value)) {
                        setFilterQuery({
                          ...filterQuery,
                          country: filterQuery.country.filter(
                            (prev) => prev !== e.target.value
                          ),
                        });
                      } else {
                        setFilterQuery({
                          ...filterQuery,
                          country: [...filterQuery.country, e.target.value],
                        });
                      }
                    }}
                    className="w-4 h-4 text-blue-500 cursor-pointer border-gray-300 rounded-md focus:ring-0"
                  />
                  <label
                    htmlFor={item}
                    className="ml-1 capitalize cursor-pointer text-xs text-gray-900"
                  >
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <hr className="my-2" />
    </div>
  );
}
