import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import DeleteModal from "../Modal/DeleteModal";
import UserModal from "../Modal/UserModal";
import { deleteUser, getAllUsers } from "../../store/actions/dashboard";
const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setmodalData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const users = useSelector((states) => states.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  const toggleModal = () => {
    setmodalData(null);
    setShowModal(true);
  };
  const toggleEdit = (user) => {
    setmodalData(user);
    setShowModal(true);
  };
  const toggleDelete = (user) => {
    setmodalData(user);
    setDeleteModal(true);
  };
  const renderRows = () => {
    return users.results.map((user) => (
      <TableRow key={user._id}>
        <TableBodyItem data-title="ROLE">{user.role}</TableBodyItem>
        <TableBodyItem data-title="NAME">{user.name}</TableBodyItem>
        <TableBodyItem data-title="EMAIL">{user.email}</TableBodyItem>
        <TableBodyItem data-title="DATE">
          {dayjs(`${user.createdAt}`).format("DD MMM YYYY")}
        </TableBodyItem>
        <TableBodyItem>
          <ActionButton onClick={() => toggleEdit(user)}>Edit</ActionButton>
          <ActionButton onClick={() => toggleDelete(user)}>Delete</ActionButton>
        </TableBodyItem>
      </TableRow>
    ));
  };
  return (
    <TableContainer>
      <TableHeading>Users</TableHeading>
      <TableAction>
        <TableSearch>
          <SearchIcon />
          <SearchInput placeholder="Search User Email" width="30rem" />
        </TableSearch>
        <TableAdd onClick={() => toggleModal(true)}>
          <AddIcon />
        </TableAdd>
      </TableAction>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadItem>ID</TableHeadItem>
            <TableHeadItem>NAME</TableHeadItem>
            <TableHeadItem>EMAIL</TableHeadItem>
            <TableHeadItem>DATE</TableHeadItem>
            <TableHeadItem></TableHeadItem>
          </TableRow>
        </TableHead>
        <TableBody>{renderRows()}</TableBody>
      </Table>
      {showModal && (
        <UserModal data={modalData ? modalData : null} onClose={setShowModal} />
      )}
      {deleteModal && (
        <DeleteModal
          name={modalData.email}
          id={modalData._id}
          onClose={setDeleteModal}
          deleteItem={deleteUser}
        />
      )}
    </TableContainer>
  );
};

export default Users;
