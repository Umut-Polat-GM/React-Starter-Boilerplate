import { Box } from "@mui/material";
import Modal01 from "../components/Modals/Modal01";
import { useDispatch } from "react-redux";
import { showModal } from "../store/modal/modalSlice";
import { showNotification } from "../store/notifications/notificationSlice";

const Home = () => {
    const dispatch = useDispatch();
    const handleOpen01 = () => {
        dispatch(
            showModal({
                type: "MODAL01",
                // updateSchema: {
                //     title: "deneme",
                //     description: "description",
                // },
            })
        );
    };
    const handleOpen02 = () => {
        dispatch(
            showModal({
                type: "MODAL01",
                updateSchema: {
                    title: "deneme",
                    description: "description",
                },
            })
        );
    };

    const handleOpenNotify01 = () => {
        dispatch(
            showNotification({
                message: "This is a success message",
                variant: "success",
            })
        );
    };

    const handleOpenNotify02 = () => {
        dispatch(
            showNotification({
                message: "This is an error message",
                variant: "error",
            })
        );
    };

    return (
        <Box>
            Home Page
            <Modal01 />
            <button onClick={handleOpen01}>Open Modal01</button>
            <br />
            <button onClick={handleOpen02}>Update Modal01</button>
            <br />
            <button onClick={handleOpenNotify01}>Notify01</button>
            <br />
            <button onClick={handleOpenNotify02}>Notify02</button>
        </Box>
    );
};

export default Home;
