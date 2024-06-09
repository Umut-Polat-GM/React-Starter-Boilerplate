import { Box } from "@mui/material";
import Modal01 from "../components/Modals/Modal01";
import { useDispatch } from "react-redux";
import { showModal } from "../store/modal/modalSlice";

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
    return (
        <Box>
            Home Page
            <Modal01 />
            <button onClick={handleOpen01}>Open Modal01</button>
            <br />
            <button onClick={handleOpen02}>Update Modal01</button>
        </Box>
    );
};

export default Home;
