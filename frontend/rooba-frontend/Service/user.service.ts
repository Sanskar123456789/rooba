import { User } from "@/Modals/UserModal";
import axios from "axios";
const BASE_URL = 'http://localhost:3000/api' + '/user';

export const newUser = async (user: User) => {
    try {
        axios.post(`${BASE_URL}/new`, user).then((response) => response.data.data);
    } catch (err) {
        return err
    }
}