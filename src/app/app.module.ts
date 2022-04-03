import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';  
import { NgSelectModule} from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { TopLawyersComponent } from './top-lawyers/top-lawyers.component';
import { LawyerListComponent } from './lawyer-list/lawyer-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LawyerProfileComponent } from './lawyer-profile/lawyer-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BookingSucessfullyComponent } from './booking-sucessfully/booking-sucessfully.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserProfileSettingComponent } from './user-profile-setting/user-profile-setting.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { UserFavouriteComponent } from './user-favourite/user-favourite.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { ChatConsultationComponent } from './chat-consultation/chat-consultation.component';
import { UserReferEarnComponent } from './user-refer-earn/user-refer-earn.component';
import { UserMyOrderComponent } from './user-my-order/user-my-order.component';
import { UserEmailBoxComponent } from './user-email-box/user-email-box.component';
import { UserEmailComposeComponent } from './user-email-compose/user-email-compose.component';
import { LawyerSidebarComponent } from './lawyer-sidebar/lawyer-sidebar.component';
import { LawyerDashboardComponent } from './lawyer-dashboard/lawyer-dashboard.component';
import { LawyerChangePasswordComponent } from './lawyer-change-password/lawyer-change-password.component';
import { LawyerEmailBoxComponent } from './lawyer-email-box/lawyer-email-box.component';
import { LawyerEmailComposeComponent } from './lawyer-email-compose/lawyer-email-compose.component';
import { LawyerProfileSettingComponent } from './lawyer-profile-setting/lawyer-profile-setting.component';
import { LawyerReviewComponent } from './lawyer-review/lawyer-review.component';
import { LawyerInvoiceComponent } from './lawyer-invoice/lawyer-invoice.component';
import { LawyerScheduleTimeComponent } from './lawyer-schedule-time/lawyer-schedule-time.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAddDiscountCouponComponent } from './admin-add-discount-coupon/admin-add-discount-coupon.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminLawyerComponent } from './admin-lawyer/admin-lawyer.component';
import { AdminOrderInvoiceComponent } from './admin-order-invoice/admin-order-invoice.component';
import { AdminReferEarnComponent } from './admin-refer-earn/admin-refer-earn.component';
import { AdminRefundComponent } from './admin-refund/admin-refund.component';
import { AdminShippingComponent } from './admin-shipping/admin-shipping.component';
import { AdminAppointmentsComponent } from './admin-appointments/admin-appointments.component';
import { AdminClientComponent } from './admin-client/admin-client.component';
import { AdminManagePaymentComponent } from './admin-manage-payment/admin-manage-payment.component';
import { AdminManageServiceComponent } from './admin-manage-service/admin-manage-service.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { AdminBlogEditComponent } from './admin-blog-edit/admin-blog-edit.component';
import { AdminServiceListComponent } from './admin-service-list/admin-service-list.component';
import { AdminGrandRoleComponent } from './admin-grand-role/admin-grand-role.component';
import { AdminRoleAssignComponent } from './admin-role-assign/admin-role-assign.component';
import { ServiceMainComponent } from './service-main/service-main.component';
import { ServiceSidebarComponent } from './service-sidebar/service-sidebar.component';
import { ServiceInnerPageComponent } from './service-inner-page/service-inner-page.component';
import { BlogComponent } from './blog/blog.component';
import { BlogInnerComponent } from './blog-inner/blog-inner.component';
import { LawyerChatWidgetComponent } from './lawyer-chat-widget/lawyer-chat-widget.component';
import { SigninOtpComponent } from './signin-otp/signin-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    TopLawyersComponent,
    LawyerListComponent,
    ContactUsComponent,
    LawyerProfileComponent,
    CheckoutComponent,
    BookingSucessfullyComponent,
    InvoiceComponent,
    PrivacyPolicyComponent,
    DisclaimerComponent,
    TermsOfServiceComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    UserProfileSettingComponent,
    UserReviewComponent,
    UserFavouriteComponent,
    UserChangePasswordComponent,
    ChatConsultationComponent,
    UserReferEarnComponent,
    UserMyOrderComponent,
    UserEmailBoxComponent,
    UserEmailComposeComponent,
    LawyerSidebarComponent,
    LawyerDashboardComponent,
    LawyerChangePasswordComponent,
    LawyerEmailBoxComponent,
    LawyerEmailComposeComponent,
    LawyerProfileSettingComponent,
    LawyerReviewComponent,
    LawyerInvoiceComponent,
    LawyerScheduleTimeComponent,
    AdminSidebarComponent,
    AdminDashboardComponent,
    AdminAddDiscountCouponComponent,
    AdminBlogComponent,
    AdminLawyerComponent,
    AdminOrderInvoiceComponent,
    AdminReferEarnComponent,
    AdminRefundComponent,
    AdminShippingComponent,
    AdminAppointmentsComponent,
    AdminClientComponent,
    AdminManagePaymentComponent,
    AdminManageServiceComponent,
    AdminUserComponent,
    SigninSignupComponent,
    AdminBlogEditComponent,
    AdminServiceListComponent,
    AdminGrandRoleComponent,
    AdminRoleAssignComponent,
    ServiceMainComponent,
    ServiceSidebarComponent,
    ServiceInnerPageComponent,
    BlogComponent,
    BlogInnerComponent,
    LawyerChatWidgetComponent,
    SigninOtpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
