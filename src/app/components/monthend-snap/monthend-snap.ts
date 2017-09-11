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
  }

  export class FlsaStatus {
    flsa_stat_desc: string;
  }
