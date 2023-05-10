import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import Filters from "./Filters";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogData, setBlogData] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const host = process.env.REACT_APP_BACKEND_URL;

  const [filterQuery, setFilterQuery] = useState({
    endYear: "",
    topic: [],
    sector: [],
    region: [],
    pestle: [],
    source: [],
    country: [],
  });

  useEffect(() => {
    const { endYear, topic, sector, region, pestle, source, country } =
      filterQuery;

    let query = "";
    if (endYear) {
      query += `end_year=${endYear}`;
    }

    if (topic.length > 0) {
      query += topic.map((e) => `&topic=${e}`).join("");
    }
    if (sector.length > 0) {
      query += sector.map((e) => `&sector=${e}`).join("");
    }
    if (region.length > 0) {
      query += region.map((e) => `&region=${e}`).join("");
    }
    if (pestle.length > 0) {
      query += pestle.map((e) => `&pestle=${e}`).join("");
    }
    if (source.length > 0) {
      query += source.map((e) => `&source=${e}`).join("");
    }
    if (country.length > 0) {
      query += country.map((e) => `&country=${e}`).join("");
    }

    // console.log("inside query : ", query);
    axios
      .get(`${host}/getData?${query}&page=${page}`)
      .then((response) => {
        setBlogData(response.data.result);
        setTotalPage(response.data.totalPage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page, filterQuery]);

  const handlePageChange = (event, value) => {
    setBlogData(null);
    setPage(value);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <Sidebar />
      <section className="pl-[250px]">
        <div className="fixed top-0 left-[250px] right-0 backdrop-blur-lg text-center py-4 shadow-sm">
          <h2 className="text-4xl font-bold">Blogs</h2>
        </div>
        <>
          <div className="px-5 grid grid-cols-5 space-x-10 py-20">
            {blogData ? (
              <div className="col-span-4">
                {blogData &&
                  blogData.map((data) => {
                    return (
                      <Link to={data.title}>
                        <div
                          key={data._id}
                          className="rounded border px-4 py-2 mb-2 cursor-pointer hover:shadow-md"
                        >
                          <p className="text-sm">
                            <span className="font-medium text-base">
                              title :{" "}
                            </span>{" "}
                            {data.title}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium text-base">
                              topic :{" "}
                            </span>{" "}
                            {data.topic}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium text-base">
                              sector :{" "}
                            </span>{" "}
                            {data.sector}
                          </p>
                          <p className="text-sm">
                            <span className="font-medium text-base">
                              country :{" "}
                            </span>{" "}
                            {data.country}
                          </p>
                        </div>
                      </Link>
                    );
                  })}

                <div className="my-8">
                  <Pagination
                    count={totalPage}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                    onChange={handlePageChange}
                    defaultPage={page}
                  />
                </div>
              </div>
            ) : (
              <div className=" col-span-4 text-center pt-40">
                <h2 className="text-xl font-medium">Loading. . .</h2>
              </div>
            )}

            <div className="col-span-1">
              <div className="fixed w-52 rounded-md border px-4 pb-44 top-20 bottom-1 scrollbar-thin overflow-y-auto">
                <Filters
                  filterQuery={filterQuery}
                  setFilterQuery={setFilterQuery}
                />
              </div>
            </div>
          </div>
        </>
      </section>
      ;
    </>
  );
}
