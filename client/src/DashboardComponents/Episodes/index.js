import React, { useState } from "react";
import {
  TableRow,
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
  ActionButton,
} from "../TableStyle";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import EpisodeModal from "../Modal/EpisodeModal";
import { Formik, Form, Field } from "formik";
import { getEpisodes, deleteEpisode } from "../../store/actions/dashboard";
import DeleteModal from "../Modal/DeleteModal";
const Episodes = () => {
  const episodes = useSelector((states) => states.episodes);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalData, setmodalData] = useState(null);

  const toggleModal = () => {
    setmodalData(null);
    setShowModal(true);
  };
  const toggleEdit = (episode) => {
    setmodalData(episode);
    setShowModal(true);
  };
  const toggleDelete = (episode) => {
    setmodalData(episode);
    setDeleteModal(true);
  };

  const renderRows = () => {
    return episodes.results.map((episode) => (
      <TableRow key={episode._id}>
        <TableBodyItem data-title="ID">{episode._id}</TableBodyItem>
        <TableBodyItem data-title="Name">{episode.title}</TableBodyItem>
        <TableBodyItem data-title="DATE">
          {dayjs(`${episode.postedAt}`).format("DD MMM YYYY")}
        </TableBodyItem>
        <TableBodyItem>
          <ActionButton onClick={() => toggleEdit(episode)}>Edit</ActionButton>
          <ActionButton onClick={() => toggleDelete(episode)}>
            Delete
          </ActionButton>
        </TableBodyItem>
      </TableRow>
    ));
  };
  return (
    <TableContainer>
      <TableHeading>Episodes</TableHeading>
      <TableAction>
        <TableSearch>
          <SearchIcon />
          {/* <SearchInput
            placeholder="Paste Anime Id for Episodes"
            width="30rem"
          /> */}
          <Formik
            initialValues={{
              search: "",
            }}
            onSubmit={(values) => {
              dispatch(getEpisodes(values.search));
            }}
          >
            <Form>
              <Field
                placeholder="Paste Anime Id for Episodes"
                as={SearchInput}
                width="30rem"
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
        <EpisodeModal
          data={modalData ? modalData : null}
          onClose={setShowModal}
        />
      )}
      {deleteModal && (
        <DeleteModal
          name={modalData.title}
          id={modalData._id}
          onClose={setDeleteModal}
          deleteItem={deleteEpisode}
        />
      )}
    </TableContainer>
  );
};

export default Episodes;
