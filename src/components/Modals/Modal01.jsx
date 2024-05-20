import { Box, Button, TextField, Typography, IconButton, Stack, Grid } from "@mui/material";
import { createModal01Schema } from "../../utils/YupSchemas";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalStyle } from "../../styles/ModalStyles";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import { useForm } from "react-hook-form";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { hideModal } from "../../store/modal/modalSlice";
import animationData from "../../../public/json/Task.json";

const Modal01 = () => {
    const [progress, setProgress] = useState(false);
    const dispatch = useDispatch();
    const { open, type, updateShema } = useSelector((state) => state.modal);

    // console.log("open", open);
    // console.log("type", type);
    // console.log("updateShema", updateShema);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createModal01Schema),
    });

    const onSubmit = async (data) => {
        console.log(data);
        setProgress(true);
        setTimeout(() => {
            setProgress(false);
        }, 2000);
    };

    useEffect(() => {
        if (type === "MODAL01" && updateShema !== null) {
            reset({
                title: updateShema?.title,
                description: updateShema?.description,
            });
        }
    }, [type, updateShema, reset]);

    return (
        <Box>
            <Modal
                aria-labelledby="create-notes-modal-title"
                aria-describedby="create-notes-modal-description"
                open={open && type === "MODAL01"}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle} width={"50%"}>
                        <Box className="flex justify-between items-center">
                            <Typography
                                id="create-notes-modal-title"
                                variant="h6"
                                component="h2"
                                color={"primary"}
                            >
                                Modal 01
                            </Typography>
                            <IconButton
                                aria-label="exit"
                                size="large"
                                onClick={() => dispatch(hideModal())}
                                color="error"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                            {progress ? <LinearProgress color="primary" /> : null}
                        </Stack>
                        <Box
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            sx={{ mt: 1, width: "100%" }}
                        >
                            <Grid container>
                                <Grid
                                    item
                                    xs={12}
                                    sm={4}
                                    className="flex justify-center items-center"
                                >
                                    <Lottie
                                        animationData={animationData}
                                        style={{ width: "160px", height: "160px" }}
                                        aria-labelledby="use lottie animation"
                                        loop={false}
                                        autoplay={true}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Box className="flex flex-col gap-4">
                                        <TextField
                                            margin="dense"
                                            size="small"
                                            fullWidth
                                            id="title"
                                            label="Note Başlığı"
                                            name="title"
                                            autoComplete="title"
                                            autoFocus
                                            {...register("title")}
                                            error={!!errors.title}
                                            helperText={errors?.title?.message}
                                        />
                                        <TextField
                                            margin="dense"
                                            size="small"
                                            fullWidth
                                            id="description"
                                            label="Not Açıklaması"
                                            name="description"
                                            autoComplete="description"
                                            multiline
                                            rows={4}
                                            {...register("description")}
                                            error={!!errors.description}
                                            helperText={errors?.description?.message}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ my: 1 }}
                                color="primary"
                                disabled={progress}
                            >
                                {progress ? "Ekleme İşlemi Devam Ediyor..." : "Not Ekle"}
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default Modal01;
