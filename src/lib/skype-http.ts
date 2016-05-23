export {connect} from "./connect";

import * as api from "./api";
import * as apiInterface from "./interfaces/api";

export type Api = api.Api;
export namespace Api {
  export type NewMessage = apiInterface.NewMessage;
}

export type Contact = apiInterface.Contact;
export namespace Contact {
  export type Phone = apiInterface.Phone;
  export type Location = apiInterface.Location;
}