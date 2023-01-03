function getReportTable(companyId){
    sql = `
    create table openidl_ep_${companyId}.ho_doi_report as
     SELECT policy_form,
     		reporting_form,
        	openidl_ep_${companyId}.Tmp_ho_written_premium(policy_form) written_premium,
        	openidl_ep_${companyId}.Tmp_ho_paid_loss(policy_form) paid_loss,
        	round(openidl_ep_${companyId}.Tmp_ho_paid_loss(policy_form) * 100 / openidl_ep_${companyId}.Tmp_ho_written_premium(policy_form), 2) loss_ratio,
        	openidl_ep_${companyId}.tmp_ho_earned_premium( '2002-08-15'::DATE, '2003-08-15'::DATE, policy_form) ep,
        	openidl_ep_${companyId}.tmp_ho_incurred_loss(policy_form) incurred_loss,
        	round(openidl_ep_${companyId}.tmp_ho_incurred_loss(policy_form) * 100 / openidl_ep_${companyId}.tmp_ho_earned_premium( '2002-08-15', '2003-08-15', policy_form), 2) ep_loss_ratio
   FROM 	openidl_ep_${companyId}.tmp_ho_reporting_ref;
   GROUP BY reporting_category, reporting_form, policy_form;
   `
}

module.exports = getReportTable