import { getLocalItem } from '../../../shared/get-local';
import { userKey } from '../../../shared/const';

export const initialUserStatus: boolean = getLocalItem(userKey) || false;
