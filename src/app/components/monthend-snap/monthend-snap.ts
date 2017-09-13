import { Validators } from '@angular/forms';
export let Mesnap  = {
    'onDate': [null],
    'associate_type': [null, Validators.required],
    'flsa': [null],
    'job_lvl': [null],
    'emp_status': [null],
    'country': [null],
    'state': [null],
    'city': [null],
    'building': [null],
    'fName': [null],
    'lName': [null],
    'emp_id': [null],
    'reports_to_1': [null],
    'reports_to_2': [null],
    'reports_to_3': [null],
    'reports_to_4': [null],
    'org_lvl1': [null],
    'org_lvl2': [null],
    'org_lvl3': [null],
    'org_lvl4': [null],
    'org_lvl5': [null],
    'org_lvl6': [null],
    'org_lvl7': [null],
    'org_lvl8': [null],
    'org_lvl9': [null],
    'org_lvl10': [null],
    'org_lvl11': [null],
    'org_lvl12': [null],
    'dept': [null]
  };

  export class AssocType {
    assoc_type_desc: string;
    flsa_stat_desc: string;
    job_lvl_desc: string;
    job_lvl_cd: number;
    emp_status_desc: string;
    work_cntry_nm: string;
    work_st_cd: string;
    work_city_nm: string;
    loc_cd: string;
    loc_nm: string;
    finc_lvl_1_desc: string;
    finc_lvl_2_desc: string;
    finc_lvl_3_desc: string;
    finc_lvl_4_desc: string;
    finc_lvl_5_desc: string;
    finc_lvl_6_desc: string;
    finc_lvl_7_desc: string;
    finc_lvl_8_desc: string;
    finc_lvl_9_desc: string;
    finc_lvl_10_desc: string;
    finc_lvl_11_desc: string;
    finc_lvl_12_desc: string;
  }

  export class RestOfForm {
    dept_nm: string;
    dept_id: number;
    ec1_nm: string;
    ec2_nm: string;
    ec3_nm: string;
    ec4_nm: string;
  }
