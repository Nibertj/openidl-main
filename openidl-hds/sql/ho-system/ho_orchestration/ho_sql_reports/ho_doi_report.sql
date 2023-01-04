--drop table openidl_ep_9999.ho_doi_report;
CREATE TABLE openidl_ep_9999.ho_doi_report as
    SELECT policy_form,
     		reporting_form,
        	openidl_ep_9999.Tmp_ho_written_premium(policy_form) written_premium,
        	openidl_ep_9999.Tmp_ho_paid_loss(policy_form) paid_loss,
        	round(openidl_ep_9999.Tmp_ho_paid_loss(policy_form) * 100 / openidl_ep_9999.Tmp_ho_written_premium(policy_form), 2) loss_ratio,
        	openidl_ep_9999.tmp_ho_earned_premium( '2002-08-15', '2003-08-15', policy_form) ep,
        	openidl_ep_9999.tmp_ho_incurred_loss(policy_form) incurred_loss,
        	round(openidl_ep_9999.tmp_ho_incurred_loss(policy_form) * 100 / openidl_ep_9999.tmp_ho_earned_premium( '2002-08-15', '2003-08-15', policy_form), 2) ep_loss_ratio
    FROM 	openidl_ep_9999.tmp_ho_reporting_ref;
    GROUP BY reporting_category, reporting_form, policy_form;