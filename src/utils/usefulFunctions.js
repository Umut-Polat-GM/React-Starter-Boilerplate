export const timeFormatter = (time) => {
    return new Date(time).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
