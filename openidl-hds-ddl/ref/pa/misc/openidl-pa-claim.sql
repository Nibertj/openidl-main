create table openidl_base_1234.personal_auto_claim
    (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    annual_statement_line VARCHAR, -- aslob varchar
    record_type VARCHAR ,
    transaction_type VARCHAR ,
    transaction_code VARCHAR ,
    openidl_lob VARCHAR,  --56? currently both CA & PA are 56, maybe we make 2 new ones?
    subline_name VARCHAR ,
    subline_code VARCHAR ,
    subline_category VARCHAR,
    accounting_date DATE ,
    company_code VARCHAR ,
    company_id VARCHAR ,
    state VARCHAR ,
    state_code varchar,
    territory VARCHAR ,
    optional_zip_code_indicator VARCHAR ,
    program VARCHAR ,
    program_code varchar,
    effective_date DATE,
    expiration_date DATE,
    nc_program_enhancement VARCHAR ,
    zip_code VARCHAR ,
    zip_code_suffix VARCHAR ,
    coverage_category VARCHAR ,
    coverage VARCHAR ,
    coverage_code VARCHAR ,
    deductible_amount VARCHAR ,
    deductible_code VARCHAR ,
    terrorism VARCHAR ,
    packaging VARCHAR ,
    pool_affiliation VARCHAR ,
    umuim_stacking VARCHAR ,
    passive_restraint_discount VARCHAR ,
    anti_lock_brakes_discount VARCHAR ,
    defensive_driver_discount VARCHAR ,
    operator_age VARCHAR ,
    operator_age_code VARCHAR ,
    gender VARCHAR ,
    marital_status VARCHAR ,
    marital_status_code VARCHAR ,
    principal_secondary VARCHAR ,
    drivers_training VARCHAR ,
    good_student_discount VARCHAR ,
    penalty_points varchar,
    vehicle_use VARCHAR ,
    vehicle_use_operator VARCHAR ,
    commute_distance VARCHAR ,
    annual_distance VARCHAR ,
    vehicle_performance VARCHAR ,
    model_year VARCHAR ,
    symbol VARCHAR ,
    loss_amount Numeric (20,6),
    claim_count Numeric (20,6),
    cause_of_loss VARCHAR ,
    cause_of_loss_code varchar,
    accident_date DATE,
    occurrence_identifier VARCHAR ,
    claim_identifier VARCHAR ,
    limited_coding_loss_transaction VARCHAR ,
    limited_coding_loss_transaction_code VARCHAR ,
    created_time VARCHAR ,
    );