CREATE TABLE openidl_base_9998.ho_policy
    (
        id SERIAL PRIMARY KEY,
        line_of_business VARCHAR,
        accounting_date DATE,
        company_code VARCHAR,
        annual_statement_line VARCHAR,
        state_code VARCHAR,
        county_code VARCHAR,
        area_indicator VARCHAR,
        territory VARCHAR,
        record_type VARCHAR,
        transaction_type VARCHAR,
        transaction_code VARCHAR,
        premium_amount Numeric (20,6),
        monthly_premium_amount Numeric (20,6),
        exposure Numeric (20,6),
        program VARCHAR,
        effective_date DATE,
        expiration_date DATE,
        accounting_term_expiration DATE,
        policy_form VARCHAR,
        policy_category VARCHAR,
        policy_type VARCHAR,
        reporting_form VARCHAR,
        reporting_category VARCHAR,
        primary_property_amount Numeric (20,6),
        deductible_type VARCHAR,
        deductible_amount VARCHAR,
        wind_hail_deductible VARCHAR,
        class_code VARCHAR,
        class_code_name VARCHAR,
        class_code_type VARCHAR,
        class_code_category VARCHAR,
        class_code_subcategory VARCHAR,
        class_code_watercraft_size VARCHAR,
        class_code_engine_size VARCHAR,
        construction_code VARCHAR,
        construction_code_name VARCHAR,
        construction_code_type VARCHAR,
        fire_code VARCHAR,
        fire_code_name VARCHAR,
        fire_code_type VARCHAR,
        year_of_construction VARCHAR,
        liability_limit VARCHAR,
        medical_payments VARCHAR,
        es_liq_fuel_prop VARCHAR,
        es_liq_fuel_prop_name VARCHAR,
        es_liq_fuel_prop_type VARCHAR,
        es_liq_fuel_liab VARCHAR,
        es_liq_fuel_liab_name VARCHAR,
        es_liq_fuel_liab_type VARCHAR,
        occupancy_code VARCHAR,
        occupancy_code_type VARCHAR,
        occupancy_code_name VARCHAR,
        hbb_indicator VARCHAR,
        number_of_families_code VARCHAR,
        number_of_families VARCHAR,
        dwelling_type VARCHAR,
        ordinance_or_law_coverage VARCHAR,
        theft_deductible_amount VARCHAR,
        sec_prop_amt_of_insurance VARCHAR,
        nc_program_enhancement VARCHAR,
        mold_damage_coverage VARCHAR,
        mold_damage_coverage_property VARCHAR,
        mold_damage_coverage_liability VARCHAR,
        mold_damage_coverage_notes VARCHAR,
        pool_code VARCHAR,
        months_covered Numeric (20,6),
        zip_code VARCHAR,
        zip_code_suffix VARCHAR,
        building_code_effect_grade_code VARCHAR,
        building_code_effect_grade VARCHAR,
        small_premium_indicator VARCHAR,
        policy_number VARCHAR
    );