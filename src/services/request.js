function parseJSON(data) {
  const formData = new FormData();
  for (let [Key, Value] of Object.entries(data)) {
    formData.append(Key, Value);
  }
  return formData;
}

async function request(url, data = null, method = "GET", type = "FORM_DATA") {
  const options = {
    method,
    headers: {
      "Content-Type":
        type === "JSON"
          ? "application/json"
          : "application/x-www-form-urlencoded",
    },
  };

  if (data) {
    options.body = type === "JSON" ? JSON.stringify(data) : parseJSON(data);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Hata oluştu:", error);
    throw error;
  }
}

export const get = (url) => request(url);
export const post = (url, data) => request(url, data, "POST");
export const postJSON = (url, data) => request(url, data, "POST", "JSON");
