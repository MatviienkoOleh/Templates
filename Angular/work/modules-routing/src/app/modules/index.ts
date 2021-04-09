import { AccessoriesModule } from "./accessories/accessories.module";
import { AccountModule } from "./account/account.module";
import { FAQModule } from "./faq/faq.module";
import { FormModule } from "./form/form.module";
import { FuguModule } from "./fugu/fugu.module";
import { HomeModule } from "./home/home.module";
import { McDonaldsModule } from "./mc-donalds/mc-donalds.module";
import { OrganisationAccountModule } from "./organisation-account/organisation-account.module";
import { OrganisationFormRegistrationModule } from "./organisation-form-registration/organisation-form-registration.module";
import { OrganisationFormModule } from "./organisation-form/organisation-form.module";
import { RegistrationModule } from "./registration/registration.module";
import { ServicesModule } from "./services/services.module";

export const modules = [
    AccessoriesModule,
    AccountModule,
    HomeModule,
    FormModule,
    ServicesModule,
    FAQModule,
    RegistrationModule,
    OrganisationAccountModule,
    OrganisationFormModule,
    OrganisationFormRegistrationModule,
    FuguModule,
    McDonaldsModule
];