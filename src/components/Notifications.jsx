import { hideNotification } from "../store/notifications/notificationSlice";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

const Notifications = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const dispatch = useDispatch();
    const { open, message, variant } = useSelector((state) => state.notifications);

    useEffect(() => {
        if (open) {
            enqueueSnackbar(message, {
                variant,
                action: (key) => (
                    <button
                        onClick={() => {
                            closeSnackbar(key);
                        }}
                    >
                        <CloseIcon />
                    </button>
                ),
                anchorOrigin: {
                    vertical: "top",
                    horizontal: "right",
                },
            });
            dispatch(hideNotification());
        }
    }, [open, message, variant, enqueueSnackbar, closeSnackbar, dispatch]);

    return null;
};

export default Notifications;
