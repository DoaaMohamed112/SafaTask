import { AnonymousSubject } from 'rxjs/internal/Subject';

export class Data {
    user_full_name: string;
    user_email: string;
    user_password: string;
    user_position ='the position';
    user_nationality = 20;
    user_status:any;
    user_is_admin:1;
    user_extra_data = [];
    user_password_confirmation: string;
    lang='ar';
    created_by:string;
    user_phone: string;
    country: string;
    company_name:string;
    company_address: string;
    company_business_email:string;
    company_avatar:any;
    company_phone:string;
    company_extra_data:any;
    company_country_id:any;
    company_city_id:any;
    constructor(){
        this.user_full_name = "";
        this.user_email="";
        this.user_password="";
        this.user_phone="";
        this.country="";
        this.company_name="";
        this.company_address="";
        this.company_business_email="";
        this.company_phone="";
        this.company_extra_data=[];
        this.company_country_id=20;
        this.company_city_id=5;   
    }
}
