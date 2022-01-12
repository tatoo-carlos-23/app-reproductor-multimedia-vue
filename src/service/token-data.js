import jwt_decode from "jwt-decode";

class token_data {

    data_token(value) {
        let token = localStorage.getItem('token')
        let decoded = jwt_decode(token);
        switch (value) {
            case 1:
                return decoded.data.names

            case 2:
                return decoded.data.surnames

            case 3:
                return decoded.data.email

            case 4:
                return decoded.data.id_user

            case 5:
                return decoded.exp

            case 6:
                return decoded.iat

            default:
                break;
        }
    }

}

export default new token_data()