import axios from "axios";
import { BASE_URL, TOKEN } from "../../utils/constants";

export async function getList(controller) {
  try {
    const config = {
      signal: controller.signal,
      headers: {
        Authorization: TOKEN,
      },
    };
    const response = await axios.get(`/notes`, config);

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getById(controller, id) {
  try {
    const config = {
      signal: controller.signal,
      headers: {
        Authorization: TOKEN,
      },
    };
    const response = await axios.get(`/notes/${id}`, config);

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteById(controller, id) {
  try {
    const config = {
      signal: controller.signal,
      headers: {
        Authorization: TOKEN,
      },
    };
    const response = await axios.delete(`/notes/${id}`, config);

    if (response.status === 204) {
      return true;
    }
    return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function updateById(controller, id, data) {
  try {
    const config = {
      signal: controller.signal,
      headers: {
        Authorization: TOKEN,
      },
    };
    const response = await axios.patch(`/notes/${id}`, data, config);

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function create(controller, data) {
  try {
    const config = {
      signal: controller.signal,
      headers: {
        Authorization: TOKEN,
      },
    };
    const response = await axios.post(`/notes`, data, config);
    if (response.status === 201) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
