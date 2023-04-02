import { useDispatch, useSelector } from "react-redux";
import { ItemAction } from "../actions/ItemActions";

export const UseItem = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.listData);
  const isLoading = useSelector((state) => state.items.isFetching);
  const nameSearch = useSelector((state) => state.items.nameSearch);

  const handleGetItem = () => dispatch(ItemAction.getRequest());
  const handleAddItem = (data) => dispatch(ItemAction.addRequest(data));
  const handleDelItem = (data) => dispatch(ItemAction.delRequest(data));
  const handlePutItem = (data) => dispatch(ItemAction.putRequest(data));
  const handleSearchItem = (data) => dispatch(ItemAction.searchRequest(data));

  return {
    items,
    isLoading,
    nameSearch,
    handleGetItem,
    handleAddItem,
    handleDelItem,
    handlePutItem,
    handleSearchItem,
  };
};
