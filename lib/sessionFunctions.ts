import { companyT } from '@/store/interfaces/cell'
import { setCompanyPopup } from '@/store/reducers/session'

export const setCompanyPopupHelper = (dispatch: Function, company: companyT | undefined) => {
  if (!company) return
	dispatch(setCompanyPopup(company))
}
