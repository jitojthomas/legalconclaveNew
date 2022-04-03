import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { UserProfileSettingComponent } from './user-profile-setting/user-profile-setting.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { UserFavouriteComponent } from './user-favourite/user-favourite.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { ChatConsultationComponent } from './chat-consultation/chat-consultation.component';
import { UserReferEarnComponent } from './user-refer-earn/user-refer-earn.component';
import { UserMyOrderComponent } from './user-my-order/user-my-order.component';
import { UserEmailBoxComponent } from './user-email-box/user-email-box.component';
import { UserEmailComposeComponent } from './user-email-compose/user-email-compose.component';
import { LawyerDashboardComponent } from './lawyer-dashboard/lawyer-dashboard.component';
import { LawyerChangePasswordComponent } from './lawyer-change-password/lawyer-change-password.component';
import { LawyerEmailBoxComponent } from './lawyer-email-box/lawyer-email-box.component';
import { LawyerEmailComposeComponent } from './lawyer-email-compose/lawyer-email-compose.component';
import { LawyerProfileSettingComponent } from './lawyer-profile-setting/lawyer-profile-setting.component';
import { LawyerReviewComponent } from './lawyer-review/lawyer-review.component';
import { LawyerInvoiceComponent } from './lawyer-invoice/lawyer-invoice.component';
import { LawyerScheduleTimeComponent } from './lawyer-schedule-time/lawyer-schedule-time.component';
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
import { ServiceInnerPageComponent } from './service-inner-page/service-inner-page.component';
import { BlogComponent } from './blog/blog.component';
import { BlogInnerComponent } from './blog-inner/blog-inner.component';
import { LawyerChatWidgetComponent } from './lawyer-chat-widget/lawyer-chat-widget.component';
import { SigninOtpComponent } from './signin-otp/signin-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin',component:SigninSignupComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'signin-otp',component:SigninOtpComponent},
  {path:'lawyer-sign',component:SigninSignupComponent},
  {path:'service-main',component:ServiceMainComponent},
  {path:'service-inner',component:ServiceInnerPageComponent},
  {path:'blog',component:BlogComponent},
  {path:'blog-inner',component:BlogInnerComponent},

  {path:'lawyer',component:LawyerListComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'lawyer-profile',component:LawyerProfileComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'booking-sucess',component:BookingSucessfullyComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'disclaimer',component:DisclaimerComponent},
  {path:'terms-of-service',component:TermsOfServiceComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'user-profile-setting',component:UserProfileSettingComponent},
  {path:'user-review',component:UserReviewComponent},
  {path:'user-favourite',component:UserFavouriteComponent},
  {path:'user-change-password',component:UserChangePasswordComponent},
  {path:'chat-widget',component:ChatConsultationComponent},
  {path:'user-refer-earn',component:UserReferEarnComponent},
  {path:'user-my-order',component:UserMyOrderComponent},
  {path:'user-email-box',component:UserEmailBoxComponent},
  {path:'user-email-compose',component:UserEmailComposeComponent},

  //Lawyer Links   
  {path:'lawyer-dashboard',component:LawyerDashboardComponent},
  {path:'lawyer-change-password',component:LawyerChangePasswordComponent},
  {path:'lawyer-email-box',component:LawyerEmailBoxComponent},
  {path:'lawyer-email-compose',component:LawyerEmailComposeComponent},
  {path:'lawyer-profile-setting',component:LawyerProfileSettingComponent},
  {path:'lawyer-review',component:LawyerReviewComponent},
  {path:'lawyer-invoice',component:LawyerInvoiceComponent},//need to remove
  {path:'lawyer-schedule-time',component:LawyerScheduleTimeComponent},
  {path:'lawyer-chat-widget',component:LawyerChatWidgetComponent},

  //Admin Links
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-add-coupon',component:AdminAddDiscountCouponComponent},
  {path:'admin-blog',component:AdminBlogComponent},
  {path:'admin-lawyer',component:AdminLawyerComponent},
  {path:'admin-order-invoice',component:AdminOrderInvoiceComponent},
  {path:'admin-refer-earn',component:AdminReferEarnComponent},
  {path:'admin-refund',component:AdminRefundComponent},
  {path:'admin-shipping',component:AdminShippingComponent},
  {path:'admin-appointment',component:AdminAppointmentsComponent},
  {path:'admin-client',component:AdminClientComponent},
  {path:'admin-manage-payment',component:AdminManagePaymentComponent},
  {path:'admin-manage-service',component:AdminManageServiceComponent},
  {path:'admin-user',component:AdminUserComponent},
  {path:'admin-blog-edit',component:AdminBlogEditComponent},
  {path:'admin-service-list',component:AdminServiceListComponent},
  {path:'admin-grand-role',component:AdminGrandRoleComponent},
  {path:'admin-role-assign',component:AdminRoleAssignComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
