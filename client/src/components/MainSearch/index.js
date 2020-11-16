import React, { useState, useRef, useEffect } from "react";
import { searchAnimes } from "../../store/actions/animes";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import {
  Search,
  SearchIcon,
  SearchImage,
  SearchItem,
  SearchList,
  Input,
  ItemTitle,
} from "./SearchStyle";
import { Link } from "react-router-dom";
const MainSearch = ({ searchResults, showSearch, setShowSearch }) => {
  const dispatch = useDispatch();
  const content = useRef();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (searchResults) setHeight(showSearch ? content.current.scrollHeight : 0);
  }, [showSearch, searchResults]);

  return (
    <>
      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values) => {
          setShowSearch(false);
          dispatch(searchAnimes(values.search));
          setShowSearch(true);
        }}
      >
        <Form autoComplete="off">
          <Field name="search" placeholder="Search..." as={Input} />
          <Search>
            <SearchIcon />
          </Search>
        </Form>
      </Formik>
      {showSearch && (
        <SearchList ref={content} style={{ maxHeight: `${height}px` }}>
          {searchResults &&
            searchResults.map((anime) => (
              <Link key={anime._id} to={`/view/${anime._id}`}>
                <SearchItem>
                  <SearchImage>
                    <LazyLoad style={{ height: "100%" }}>
                      <img
                        height="100%"
                        width="100%"
                        src={anime.image_url}
                        alt={anime.title}
                      />
                    </LazyLoad>
                  </SearchImage>
                  <ItemTitle>{anime.title}</ItemTitle>
                </SearchItem>
              </Link>
            ))}
        </SearchList>
      )}
    </>
  );
};

export default MainSearch;
