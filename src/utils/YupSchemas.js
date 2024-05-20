import * as yup from "yup";

export const createModal01Schema = yup.object({
    title: yup.string().required("Not başlığı gerekli*"),
    description: yup.string().required("Not açıklaması gerekli*"),
});
