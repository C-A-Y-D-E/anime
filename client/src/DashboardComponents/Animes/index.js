import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { searchAnimes } from "../../store/actions/animes";
import {
  TableRow,
  ActionButton,
  TableHeading,
  TableAction,
  TableSearch,
  SearchInput,
  TableAdd,
  SearchIcon,
  AddIcon,
  TableContainer,
  Table,
  TableHead,
  TableHeadItem,
  TableBody,
  TableBodyItem,
} from "../TableStyle";
import dayjs from "dayjs";
import AnimeModal from "../Modal/AnimeModal";
import DeleteModal from "../Modal/DeleteModal";
import { getAnimes, deleteAnime } from "../../store/actions/dashboard";

const Animes = () => {
  const animes = useSelector((states) => states.animes);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getAnimes();
  // }, []);

  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalData, setmodalData] = useState(null);

  useEffect(() => {
    dispatch(getAnimes());
  }, [dispatch]);
  const toggleModal = () => {
    setmodalData(null);
    setShowModal(true);
  };
  const toggleEdit = (anime) => {
    setmodalData(anime);
    setShowModal(true);
  };
  const toggleDelete = (anime) => {
    setmodalData(anime);
    setDeleteModal(true);
  };

  const renderRows = () => {
    return animes.results.map((anime) => (
      <TableRow key={anime._id}>
        <TableBodyItem data-title="ID">{anime._id}</TableBodyItem>
        <TableBodyItem data-title="NAME">{anime.title}</TableBodyItem>
        <TableBodyItem data-title="DATE">
          {dayjs(`${anime.postedAt}`).format("DD MMM YYYY")}
        </TableBodyItem>
        <TableBodyItem>
          <ActionButton onClick={() => toggleEdit(anime)}>Edit</ActionButton>
          <ActionButton onClick={() => toggleDelete(anime)}>
            Delete
          </ActionButton>
        </TableBodyItem>
      </TableRow>
    ));
  };

  return (
    <TableContainer>
      <TableHeading>Animes</TableHeading>
      <TableAction>
        <TableSearch>
          <SearchIcon />
          {/* <SearchInput placeholder="Search Animes" width="20rem" /> */}
          <Formik
            initialValues={{
              search: "",
            }}
            onSubmit={(values) => {
              dispatch(searchAnimes(values.search));
            }}
          >
            <Form>
              <Field
                placeholder="Search Animes"
                as={SearchInput}
                width="20rem"
                name="search"
              />
            </Form>
          </Formik>
        </TableSearch>
        <TableAdd onClick={() => toggleModal()}>
          <AddIcon />
        </TableAdd>
      </TableAction>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadItem>ID</TableHeadItem>
            <TableHeadItem>NAME</TableHeadItem>
            <TableHeadItem>DATE</TableHeadItem>
            <TableHeadItem></TableHeadItem>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows()}</TableBody>
      </Table>
      {showModal && (
        <AnimeModal
          data={modalData ? modalData : null}
          onClose={setShowModal}
        />
      )}
      {deleteModal && (
        <DeleteModal
          name={modalData.title}
          id={modalData._id}
          onClose={setDeleteModal}
          deleteItem={deleteAnime}
        />
      )}
    </TableContainer>
  );
};

export default Animes;
