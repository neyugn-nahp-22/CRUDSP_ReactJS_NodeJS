import { Helpers } from "../utils";
import Api from "./scheme";

export const itemApi = {
  getItem: Helpers.createApi(Api.ITEM.GET_ITEM),
  addItem: Helpers.createApi(Api.ITEM.POST_ITEM),
  delItem: Helpers.createApi(Api.ITEM.DELETE_ITEM),
  putItem: Helpers.createApi(Api.ITEM.PUT_ITEM),
  searchItem: Helpers.createApi(Api.ITEM.SEARCH_ITEM),
};
