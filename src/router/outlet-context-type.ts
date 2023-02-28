import { SortPayload } from "../shared/types";
import { Film } from "../shared/types";

export interface OutletContextType {
    changeFavoritesType: (firstValue: string, secondValue: SortPayload) => void;
    isLoading: boolean;
    currentList: Film[];
    resetFilters: () => void;
    changeSortType: (firstValue: string, secondValue: SortPayload) => void;
  }