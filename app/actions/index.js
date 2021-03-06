/**
 * Created by moyu on 2017/2/26.
 */



export default {
    ...require('./my_collections'),
    ...require('./common'),
    ...require('./recent_skim'),
    ...require('./my_total_order'),
    ...require('./cart'),
    ...require('./entry'),
    ...require('./reset_pwd_by_phone'),
    ...require('./reset_pwd_by_mail'),
    ...require('./foreign_teacher_detail'),
    ...require('./foreign_teacher'),
    ...require('./abroad_expert_detail'),
    ...require('./abroad_expert'),
    ...require('./order_confirm'),
    ...require('./home'),
    ...require('./weekly_day'),
    ...require('./sub_service_detail'),
    ...require('./service_test'),
    ...require('./mine'),
    // onestep_sub_service_detail: require('./onestep_sub_service_detail'),
}

export const group = {
    service_detail: require('./service_detail'),
    onestep_detail: require('./onestep_detail'),
    service_text_detail: require('./service_text_detail'),
    service_text_package_detail: require('./service_text_package_detail'),
    service_text_resume_detail: require('./service_text_resume_detail'),
}
