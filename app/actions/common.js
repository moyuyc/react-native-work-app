/**
 * Created by moyu on 2017/2/26.
 */
import {_t} from '../helpers';
import * as $ from '../constant'

export const setCommonModalIsOpen = (isOpen) => _t($.SET_COMMON_MODAL_OPEN, {isOpen})
export const setCommonModalType = (_type) => _t($.SET_COMMON_MODAL_TYPE, {_type})

export const refererModalOpen = () => (emit) => emit([setCommonModalIsOpen(true), setCommonModalType('referer')])
export const discountModalOpen = () => (emit) => emit([setCommonModalIsOpen(true), setCommonModalType('discount')])
export const abroadExpertBuyFormModalOpen = () => (emit) => emit([setCommonModalIsOpen(true), abroadExpertFormModalSelect(0), setCommonModalType('abroadExpertBuy')])
export const abroadExpertCartFormModalOpen = () => (emit) => emit([setCommonModalIsOpen(true), abroadExpertFormModalSelect(0), setCommonModalType('abroadExpertCart')])
export const simplePayModalOpen = () => (emit) => emit([setCommonModalIsOpen(true), abroadExpertFormModalSelect(0), setCommonModalType('simplePay')])

export const abroadExpertFormModalSelect = (index) => _t($.ABROAD_EXPERT_FORM_SELECT, {index});
