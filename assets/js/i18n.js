/**
 * i18n (Internationalization) Module
 * Supports English and Arabic languages
 * Navbar and Sidebar positions are preserved (no RTL changes)
 */

(function() {
  'use strict';

  // Translation dictionary
  const translations = {
    en: {
      // Navbar
      'navbar.notifications': 'Notifications',
      'navbar.settings': 'Settings',
      'navbar.logout': 'Logout',
      'navbar.applicationError': 'Application Error',
      'navbar.privateMessage': 'Private message',
      'navbar.newUserRegistration': 'New user registration',
      'navbar.justNow': 'Just now',
      'navbar.daysAgo': 'days ago',
      
      // Sidebar
      'sidebar.dashboard': 'Dashboard',
      'sidebar.monthlyPayment': 'Monthly Payment',
      'sidebar.paymentReceived': 'Payment Received',
      'sidebar.memberRegister': 'Member Register',
      'sidebar.membersList': 'Members List',
      'sidebar.membersSchedule': 'Members Schedule',
      'sidebar.termsAndConditions': 'Terms & Conditions',
      'sidebar.FeeCalculator': 'Fee Calculator',
      'sidebar.contactUs': 'Contact Us',
      'sidebar.language': 'Language',
      'sidebar.arabic': 'Arabic',
      'sidebar.english': 'English',
      'sidebar.userPages': 'User Pages',
      'sidebar.login': 'Login',
      'sidebar.signUp': 'Sign Up',
      
      // Login Page
      'login.hello': 'Hello! let\'s get started',
      'login.signInToContinue': 'Sign in to continue.',
      'login.username': 'Username',
      'login.password': 'Password',
      'login.keepMeSignedIn': 'Keep me signed in',
      'login.forgotPassword': 'Forgot password?',
      'login.dontHaveAccount': 'Don\'t have an account?',
      'login.create': 'Create',
      'login.signIn': 'SIGN IN',
      
      // Signup Page
      'signup.title': 'New Users Signup here',
      'signup.subtitle': 'Signing up is easy. It only takes a few steps',
      'signup.username': 'Username',
      'signup.email': 'Email',
      'signup.phoneNumber': 'Phone Number',
      'signup.nationalId': 'National ID',
      'signup.password': 'Password',
      'signup.confirmPassword': 'Confirm Password',
      'signup.agreeTerms': 'I agree to all Terms & Conditions',
      'signup.signUp': 'SIGN UP',
      'signup.alreadyHaveAccount': 'Already have an account?',
      'signup.login': 'Login',
      
      // Dashboard - Control Panel
      'dashboard.controlPanel': 'Control Panel',
      'dashboard.monthly200OMR': 'Monthly 200 OMR',
      'dashboard.youAnswer': 'You answer',
      'dashboard.total2000OMR': 'Total 2000 OMR',
      'dashboard.savingsStatus': 'Savings Status',
      'dashboard.savingsCompletionRate': 'Savings Completion Rate',
      'dashboard.aliPaidThisMonth': 'Ali - Paid for this month',
      'dashboard.saraPaidLastMonth': 'Sara - Paid last month',
      'dashboard.saadThirdMonth': 'Saad - Third month',
      'dashboard.lailaFourthMonth': 'Laila - Fourth month',
      'dashboard.completed': 'Completed',
      
      // Monthly Payment Page
      'payment.payMonthlyInstallment': 'Pay Your Monthly Installment',
      'payment.amountDue': 'Amount Due',
      'payment.totalAmount': 'Total Amount:',
      'payment.debitCard': 'Debit Card',
      'payment.securePaymentGateway': 'Secure Payment Gateway',
      'payment.fillCardDetails': 'Fill in the card details',
      'payment.cardNumber': 'Card Number',
      'payment.cardInfoSecure': 'Your card information is secure and encrypted',
      'payment.expiryDate': 'Expiry Date',
      'payment.cvv': 'CVV',
      'payment.paymentMethods': 'Payment Methods',
      'payment.recommended': 'Recommended',
      'payment.creditCardVisa': 'Credit Card / Visa',
      'payment.bankTransfer': 'Bank Transfer',
      'payment.directBankTransfer': 'Direct bank transfer',
      'payment.sslEncryption': '256-bit SSL Encryption',
      'payment.payNow': 'Pay Now',
      'payment.agreeTerms': 'By clicking "Pay Now", you agree to our terms and conditions',
      
      // Payment Received Page
      'paymentReceived.successTitle': 'Your payment has been successfully received',
      'paymentReceived.amountTransferred': 'Amount Transferred:',
      'paymentReceived.remainingBalance': 'Remaining Balance:',
      'paymentReceived.dateReceived': 'Date Received:',
      'paymentReceived.contactGroup': 'Contact Group',
      'paymentReceived.shareMyTurn': 'Share My Turn',
      
      // Member Register Page
      'member.registerNewMember': 'Register New Member',
      'member.fillMemberInformation': 'Fill in the member information below',
      'member.fullName': 'Full Name',
      'member.phoneNumber': 'Phone Number',
      'member.phoneNumberFormat': 'Format: +968XXXXXXXX',
      'member.nationalId': 'National ID',
      'member.emailAddress': 'Email Address',
      'member.password': 'Password',
      'member.confirmPassword': 'Confirm Password',
      'member.status': 'Status',
      'member.statusActive': 'Active',
      'member.statusWithdrawn': 'Withdrawn',
      'member.statusCompleted': 'Completed',
      'member.saveMember': 'Save Member',
      'member.cancel': 'Cancel',
      
      // Member List Page
      'memberList.membersManagement': 'Members Management',
      'memberList.membersManagementDescription': 'Manage and view all registered members',
      'memberList.searchMembers': 'Search members...',
      'memberList.allStatus': 'All Status',
      'memberList.name': 'Name',
      'memberList.phoneNumber': 'Phone Number',
      'memberList.nationalId': 'National ID',
      'memberList.status': 'Status',
      'memberList.groups': 'Groups',
      'memberList.created': 'Created',
      'memberList.actions': 'Actions',
      'memberList.edit': 'Edit',
      'memberList.delete': 'Delete',
      'memberList.view': 'View',
      'memberList.noMembersFound': 'No members found',
      'memberList.showingEntries': 'Showing _START_ to _END_ of _TOTAL_ entries',
      'memberList.showingEntriesEmpty': 'Showing 0 to 0 of 0 entries',
      'memberList.showingEntriesFiltered': '(filtered from _MAX_ total entries)',
      'memberList.lengthMenu': 'Show _MENU_ entries',
      'memberList.search': 'Search:',
      'memberList.loadingRecords': 'Loading...',
      'memberList.processing': 'Processing...',
      'memberList.zeroRecords': 'No matching records found',
      'memberList.first': 'First',
      'memberList.last': 'Last',
      'memberList.next': 'Next',
      'memberList.previous': 'Previous',
      
      // Members Schedule Page
      'schedule.membersSchedule': 'Members Schedule',
      'schedule.month': 'Month',
      'schedule.member': 'Member',
      'schedule.status': 'Status',
      'schedule.amountReceived': 'Amount Received',
      
      // Footer
      'footer.copyright': 'Copyright © 2025 OpticoreAI.com',
      
      // Terms and Conditions Page
      'terms.title': 'Terms of Service',
      'terms.lastUpdated': 'Last updated: 10 December 2025',
      'terms.eligibility': 'Eligibility',
      'terms.eligibility.omaniNational': 'Be an Omani national, residing in Oman',
      'terms.eligibility.age18': 'Be at least 18 years old',
      'terms.eligibility.income': 'Have a clear source of income',
      'terms.eligibility.bankAccount': 'Have an Omani bank account under your name',
      'terms.eligibility.kyc': 'Fill out Know Your Customer forms',
      'terms.eligibility.authorize': 'Authorize Daira to access your credit report and personal details through the Oman Credit and Financial Information Centre',
      'terms.circleApplication': 'Circle Application Confirmation',
      'terms.circleApplication.text': 'Your application to join a money circle will only be processed after agreeing to the terms and conditions, privacy policy and successful payment of the admission fee.',
      'terms.approval': 'Approval of Circle Membership Applications',
      'terms.approval.text': 'Applications to join circles undergo a comprehensive evaluation process conducted by Daira, which combines the data users have personally provided and the data they have authorized Daira to retrieve from other approved sources. Daira reserves the right to reject any membership request based on the result of the assessment. If Daira determines that a membership cannot be approved for any reason, a full refund of the admission fee paid by the user will be issued.',
      'terms.monthlyContribution': 'Monthly Contribution Collection',
      'terms.monthlyContribution.text': 'Daira collects member contributions via recurring payments, offering a convenient and secure transaction method. Upon joining a money circle, members are required to authorize Daira to pull their monthly contributions from their bank account. Payments must originate from an account in the member\'s name, and payments from third-party accounts are not accepted. The registered card used to join Daira has to be valid for at least the first 3 months of the circle duration.',
      'terms.latePayment': 'Late Payment Policy and Fees Associated',
      'terms.latePayment.text': 'The member commits to donating 1% as a fixed rate of the overdue installment for each day of delay if they fail to make payments on time. It is important to note that these donated amounts will not go to Daira, but will be directed towards charitable purposes under the supervision of the Sharia committee. Therefore, the client acknowledges that they have agreed to commit to donating the overdue amounts in case of delayed payment, and that they are obligated to pay them to Daira for charitable purposes under the supervision of the Sharia committee. In the event of repeated delays, in addition to the imposed penalty, the circle membership may be revoked.',
      'terms.receivingPayout': 'Receiving Payout',
      'terms.receivingPayout.text': 'Daira will send the payout amount on the agreed time to the member\'s bank account, provided the member has no pending payments.',
      'terms.nonPayment': 'Non Payment after Receiving Payout',
      'terms.nonPayment.text': 'Daira reserves the right to pursue legal action for recovery and report members to the concerned authorities if they fail to pay their monthly contribution for more than 10 days without prior approval from Daira. Members agree to bear all costs associated and may be banned from using Daira services in the future.',
      'terms.financialRewards': 'Financial Rewards and Referral Program',
      'terms.financialRewards.text1': 'From time to time, Daira may assign specific financial rewards to certain roles within money circles. These rewards will be clearly displayed before the user enrolls in the circle. If a user selects a role that includes a financial reward, the details of the reward will also be clearly displayed on their dashboard after joining the circle. However, Daira reserves the right to withhold the financial reward in any case it deems appropriate or necessary including, but not limited to, delays in the payment of monthly installments as per the circle\'s terms.',
      'terms.financialRewards.text2': 'With respect to the referral program, the following conditions apply: The inviter must remain fully committed to timely payments and must not exceed a delay of more than two (2) days in any installment, and must have successfully paid at least one (1) installment on time in order to be eligible for the referral reward. The invitee may not use a referral code if they have already paid more than one (1) installment or if they have previously delayed any installment by more than two (2) days.',
      'terms.financialRewards.text3': 'The referral reward becomes payable to both the inviter and the invitee only after the invitee successfully pays at least one (1) monthly installment on time within forty-five (45) days from the date of entering the referral code. Once this condition is fulfilled, the reward shall be applied to the subsequent installment that does not already have another reward or discount applied to it.',
      'terms.termination': 'Termination',
      'terms.termination.text': 'Daira may terminate or suspend a member\'s account at any time for a violation of these Terms or for any other reason. Members may deactivate their account by contacting Daira\'s support team.',
      'terms.memberExclusion': 'Member Exclusion',
      'terms.memberExclusion.intro': 'Daira reserves the right to exclude any member from participating in a money circle under any of the following circumstances:',
      'terms.memberExclusion.repeatedDelays': 'Repeated delays or failure to make installment payments on time.',
      'terms.memberExclusion.falsifiedInfo': 'Submitting falsified or misleading personal or financial information, or using the platform for unlawful purposes — including but not limited to fraud, deception, or money laundering. This also includes any violation of, or attempt to manipulate, Daira\'s terms, conditions, or platform rules.',
      'terms.memberExclusion.harmfulParticipation': 'Following a fair internal review, Daira\'s management may exclude any member whose continued participation is deemed harmful to the interests of the money circle or the integrity of the platform.',
      'terms.memberExclusion.nonRefundable': 'If a member is excluded for any of the above reasons, any fees paid to the platform will be non-refundable.',
      'terms.prohibitedActivities': 'Prohibited Activities',
      'terms.prohibitedActivities.text': 'Members must not engage in any activities that are illegal, fraudulent, or violate the rights of others while using Daira\'s platform and services. Prohibited activities include, but are not limited to, money laundering, terrorism financing, unauthorized access to Daira\'s systems, and any activity that could harm Daira\'s reputation. Members are encouraged to report any unauthorized transaction, security concern, and beliefs of breaches to this agreement immediately through the available support channels.',
      'terms.amendments': 'Amendments',
      'terms.amendments.text': 'Daira reserves the right to modify or update these Terms at any time without prior notice. Members are responsible for regularly reviewing the Terms for any changes.',
      'terms.acceptTerms': 'I accept the Terms and Conditions',
      'terms.continue': 'Continue',
      
      // Admission Fee Calculator Page
      'calculator.monthlyContribution': 'Monthly Contribution (OMR)',
      'calculator.duration': 'Duration (months)',
      'calculator.payoutMonth': 'Payout Month',
      'calculator.youWillReceive': 'You will receive:',
      'calculator.month': 'Month',
      'calculator.admissionFee': 'Admission Fee',
      'calculator.paidOnce': 'Paid only once before the circle starts',
      'calculator.joinNow': 'Join Now',
      
      // Contact Us Page
      'contact.title': 'Contact Us',
      'contact.subtitle': 'Get in touch with us. We\'d love to hear from you.',
      'contact.form.name': 'Full Name',
      'contact.form.email': 'Email Address',
      'contact.form.phone': 'Phone Number',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Message',
      'contact.form.submit': 'Send Message',
      'contact.info.title': 'Contact Information',
      'contact.info.address': 'Address',
      'contact.info.address.value': 'Salalah, Sultanate of Oman',
      'contact.info.phone': 'Phone',
      'contact.info.email': 'Email',
      'contact.info.hours': 'Business Hours',
      'contact.info.hours.value': '24/7',
      'contact.form.namePlaceholder': 'Enter your full name',
      'contact.form.emailPlaceholder': 'Enter your email address',
      'contact.form.phonePlaceholder': 'Enter your phone number',
      'contact.form.subjectPlaceholder': 'Enter subject',
      'contact.form.messagePlaceholder': 'Enter your message',
      'contact.form.fillRequired': 'Please fill in all required fields.',
      'contact.form.validEmail': 'Please enter a valid email address.',
      'contact.form.success': 'Thank you for contacting us! We will get back to you soon.',
      
      // Common
      'common.view': 'View',
      'common.edit': 'Edit',
      'common.delete': 'Delete',
      'common.save': 'Save',
      'common.cancel': 'Cancel',
      'common.search': 'Search',
      'common.filter': 'Filter',
      'common.noResults': 'No results found',
      'common.loading': 'Loading...',
      'common.confirm': 'Are you sure?',
      'common.success': 'Success',
      'common.error': 'Error'
    },
    ar: {
      // Navbar
      'navbar.notifications': 'الإشعارات',
      'navbar.settings': 'الإعدادات',
      'navbar.logout': 'تسجيل الخروج',
      'navbar.applicationError': 'خطأ في التطبيق',
      'navbar.privateMessage': 'رسالة خاصة',
      'navbar.newUserRegistration': 'تسجيل مستخدم جديد',
      'navbar.justNow': 'الآن',
      'navbar.daysAgo': 'أيام مضت',
      
      // Sidebar
      'sidebar.dashboard': 'لوحة التحكم',
      'sidebar.monthlyPayment': 'الدفع الشهري',
      'sidebar.paymentReceived': 'الدفع المستلم',
      'sidebar.memberRegister': 'تسجيل عضو',
      'sidebar.membersList': 'قائمة الأعضاء',
      'sidebar.membersSchedule': 'جدول الأعضاء',
      'sidebar.termsAndConditions': 'الشروط والأحكام',
      'sidebar.FeeCalculator': 'حاسبة الرسوم',
      'sidebar.contactUs': 'اتصل بنا',
      'sidebar.language': 'اللغة',
      'sidebar.arabic': 'العربية',
      'sidebar.english': 'الإنجليزية',
      'sidebar.userPages': 'صفحات المستخدم',
      'sidebar.login': 'تسجيل الدخول',
      'sidebar.signUp': 'التسجيل',
      
      // Login Page
      'login.hello': 'مرحباً! هيا نبدأ',
      'login.signInToContinue': 'قم بتسجيل الدخول للمتابعة.',
      'login.username': 'اسم المستخدم',
      'login.password': 'كلمة المرور',
      'login.keepMeSignedIn': 'ابقني مسجلاً',
      'login.forgotPassword': 'نسيت كلمة المرور؟',
      'login.dontHaveAccount': 'ليس لديك حساب؟',
      'login.create': 'إنشاء',
      'login.signIn': 'تسجيل الدخول',
      
      // Signup Page
      'signup.title': 'تسجيل مستخدمين جدد هنا',
      'signup.subtitle': 'التسجيل سهل. يستغرق بضع خطوات فقط',
      'signup.username': 'اسم المستخدم',
      'signup.email': 'البريد الإلكتروني',
      'signup.phoneNumber': 'رقم الهاتف',
      'signup.nationalId': 'الهوية الوطنية',
      'signup.password': 'كلمة المرور',
      'signup.confirmPassword': 'تأكيد كلمة المرور',
      'signup.agreeTerms': 'أوافق على جميع الشروط والأحكام',
      'signup.signUp': 'التسجيل',
      'signup.alreadyHaveAccount': 'لديك حساب بالفعل؟',
      'signup.login': 'تسجيل الدخول',
      
      // Dashboard - Control Panel
      'dashboard.controlPanel': 'لوحة التحكم',
      'dashboard.monthly200OMR': 'شهري 200 ريال عماني',
      'dashboard.youAnswer': 'أنت تجيب',
      'dashboard.total2000OMR': 'إجمالي 2000 ريال عماني',
      'dashboard.savingsStatus': 'حالة الادخار',
      'dashboard.savingsCompletionRate': 'معدل إتمام الادخار',
      'dashboard.aliPaidThisMonth': 'علي - دفع هذا الشهر',
      'dashboard.saraPaidLastMonth': 'سارة - دفعت الشهر الماضي',
      'dashboard.saadThirdMonth': 'سعد - الشهر الثالث',
      'dashboard.lailaFourthMonth': 'ليلى - الشهر الرابع',
      'dashboard.completed': 'مكتمل',
      
      // Monthly Payment Page
      'payment.payMonthlyInstallment': 'ادفع قسطك الشهري',
      'payment.amountDue': 'المبلغ المستحق',
      'payment.totalAmount': 'المبلغ الإجمالي:',
      'payment.debitCard': 'بطاقة الخصم',
      'payment.securePaymentGateway': 'بوابة دفع آمنة',
      'payment.fillCardDetails': 'املأ تفاصيل البطاقة',
      'payment.cardNumber': 'رقم البطاقة',
      'payment.cardInfoSecure': 'معلومات بطاقتك آمنة ومشفرة',
      'payment.expiryDate': 'تاريخ الانتهاء',
      'payment.cvv': 'رمز CVV',
      'payment.paymentMethods': 'طرق الدفع',
      'payment.recommended': 'موصى به',
      'payment.creditCardVisa': 'بطاقة ائتمان / فيزا',
      'payment.bankTransfer': 'تحويل بنكي',
      'payment.directBankTransfer': 'تحويل بنكي مباشر',
      'payment.sslEncryption': 'تشفير SSL 256 بت',
      'payment.payNow': 'ادفع الآن',
      'payment.agreeTerms': 'بالنقر على "ادفع الآن"، أنت توافق على الشروط والأحكام',
      
      // Payment Received Page
      'paymentReceived.successTitle': 'تم استلام دفعتك بنجاح',
      'paymentReceived.amountTransferred': 'المبلغ المحول:',
      'paymentReceived.remainingBalance': 'الرصيد المتبقي:',
      'paymentReceived.dateReceived': 'تاريخ الاستلام:',
      'paymentReceived.contactGroup': 'اتصل بالمجموعة',
      'paymentReceived.shareMyTurn': 'شارك دوري',
      
      // Member Register Page
      'member.registerNewMember': 'تسجيل عضو جديد',
      'member.fillMemberInformation': 'املأ معلومات العضو أدناه',
      'member.fullName': 'الاسم الكامل',
      'member.phoneNumber': 'رقم الهاتف',
      'member.phoneNumberFormat': 'التنسيق: +968XXXXXXXX',
      'member.nationalId': 'رقم الهوية الوطنية',
      'member.emailAddress': 'البريد الإلكتروني',
      'member.password': 'كلمة المرور',
      'member.confirmPassword': 'تأكيد كلمة المرور',
      'member.status': 'الحالة',
      'member.statusActive': 'نشط',
      'member.statusWithdrawn': 'انسحب',
      'member.statusCompleted': 'مكتمل',
      'member.saveMember': 'حفظ العضو',
      'member.cancel': 'إلغاء',
      
      // Member List Page
      'memberList.membersManagement': 'إدارة الأعضاء',
      'memberList.membersManagementDescription': 'إدارة وعرض جميع الأعضاء المسجلين',
      'memberList.searchMembers': 'البحث عن الأعضاء...',
      'memberList.allStatus': 'جميع الحالات',
      'memberList.name': 'الاسم',
      'memberList.phoneNumber': 'رقم الهاتف',
      'memberList.nationalId': 'رقم الهوية الوطنية',
      'memberList.status': 'الحالة',
      'memberList.groups': 'المجموعات',
      'memberList.created': 'تاريخ الإنشاء',
      'memberList.actions': 'الإجراءات',
      'memberList.edit': 'تعديل',
      'memberList.delete': 'حذف',
      'memberList.view': 'عرض',
      'memberList.noMembersFound': 'لم يتم العثور على أعضاء',
      'memberList.showingEntries': 'عرض _START_ إلى _END_ من _TOTAL_ إدخال',
      'memberList.showingEntriesEmpty': 'عرض 0 إلى 0 من 0 إدخال',
      'memberList.showingEntriesFiltered': '(مفلتر من _MAX_ إدخال إجمالي)',
      'memberList.lengthMenu': 'عرض _MENU_ إدخال',
      'memberList.search': 'بحث:',
      'memberList.loadingRecords': 'جاري التحميل...',
      'memberList.processing': 'جاري المعالجة...',
      'memberList.zeroRecords': 'لم يتم العثور على سجلات مطابقة',
      'memberList.first': 'الأول',
      'memberList.last': 'الأخير',
      'memberList.next': 'التالي',
      'memberList.previous': 'السابق',
      
      // Members Schedule Page
      'schedule.membersSchedule': 'جدول الأعضاء',
      'schedule.month': 'الشهر',
      'schedule.member': 'العضو',
      'schedule.status': 'الحالة',
      'schedule.amountReceived': 'المبلغ المستلم',
      
      // Footer
      'footer.copyright': 'حقوق النشر © 2025 OpticoreAI.com',
      
      // Terms and Conditions Page
      'terms.title': 'شروط الخدمة',
      'terms.lastUpdated': 'آخر تحديث: 10 ديسمبر 2025',
      'terms.eligibility': 'شروط الإنضمام',
      'terms.eligibility.omaniNational': 'أن يكون عُمانيًا مقيمًا في سلطنة عُمان',
      'terms.eligibility.age18': 'أن يكون عمرك 18 عامًا على الأقل',
      'terms.eligibility.income': 'أن تمتلك مصدر دخل واضح',
      'terms.eligibility.bankAccount': 'أن تمتلك حسابًا مصرفيًا عمانيًا باسمك',
      'terms.eligibility.kyc': 'ملء استمارات "اعرف عميلك"',
      'terms.eligibility.authorize': 'تفويض دائرة للحصول على تقريرك الائتماني وبياناتك الشخصية عبر مركز عمان للمعلومات الائتمانية والمالية',
      'terms.circleApplication': 'تأكيد طلب الانضمام لجمعيات دائرة',
      'terms.circleApplication.text': 'يتم مراجعة طلب الانضمام إلى جمعيات دائرة فقط بعد موافقة العميل على شروط وأحكام المنصة وسياسة الخصوصية وسداد الرسوم الإدارية بنجاح.',
      'terms.approval': 'الموافقة على طلبات الانضمام لجمعيات دائرة',
      'terms.approval.text': 'تقوم دائرة بتقييم جميع طلبات الانضمام إلى الجمعيات باستخدام البيانات المقدمة من قبل المستخدمين والمصادر الأخرى المفوضة من قبلهم. تحتفظ دائرة بالحق في رفض أي طلب للانضمام بناءًا على نتيجة التقييم. إذا لم تتم الموافقة على طلب انضمامك من قبل دائرة لأي سبب من الأسباب، ستقوم دائرة بإرجاع رسوم التسجيل المدفوعة من قبل المستخدم.',
      'terms.monthlyContribution': 'تحصيل المساهمات الشهرية للجمعية',
      'terms.monthlyContribution.text': 'تقوم دائرة بأتمتة عملية تحصيل مساهمات الأعضاء لضمان معاملات مالية مريحة وآمنة. عند الانضمام إلى الجمعية، يُطلب من الأعضاء تفويض دائرة لسحب مساهماتهم الشهرية مباشرة من حساباتهم المصرفية. يجب أن تكون المساهمات مدفوعة من حساب بنكي خاص بالمشترك، ولا يتم قبول المساهمات من حساب طرف آخر. كما يجب أن تكون البطاقة البنكية المستخدمة للانضمام صالحة لمدة ثلاثة أشهر على الأقل من بداية الجمعية.',
      'terms.latePayment': 'سياسة المدفوعات المتأخرة والرسوم المرتبطة بها',
      'terms.latePayment.text': 'يلتزم المشترك بدفع نسبة 1% كحد ثابت من القسط المتأخر عن كل يوم تأخير في حالة عدم سداد المبالغ المستحقة في الوقت المحدد. ستوجه المبالغ المدفوعة للتبرع بها لأغراض خيرية تحت إشراف اللجنة الشرعية. بالإضافة إلى ذلك، تحتفظ دائرة بحق إلغاء عضوية الجمعية في حالة تكرار التأخير.',
      'terms.receivingPayout': 'استلام مبلغ الجمعية',
      'terms.receivingPayout.text': 'ستقوم دائرة بإرسال مبلغ الجمعية في الوقت المتفق عليه إلى الحساب البنكي للعضو شرطا ألا يكون لدى العضو أي دفعات معلقة أو غير مدفوعة.',
      'terms.nonPayment': 'عدم سداد باقي المساهمات الشهرية بعد استلام مبلغ الجمعية',
      'terms.nonPayment.text': 'يحق لـ دائرة اتباع الإجراءات القانونية اللازمة لتحصيل المبالغ وإبلاغ السلطات المعنية في حالة تخلف عضو في دفع مساهمته الشهرية لأكثر من 10 أيام دون موافقة مسبقة من دائرة. يتحمل العضو المعني جميع التكاليف المترتبة عليه. تحتفظ دائرة بحق منع العضو المعني من استخدام خدمات دائرة في المستقبل.',
      'terms.financialRewards': 'المكافآت المالية وبرنامج الدعوة',
      'terms.financialRewards.text1': 'قد تقوم منصة دائرة، من وقت لآخر، بتحديد مكافآت مالية خاصة لبعض الأدوار ضمن الجمعيات المالية، وفي حال اختيار المستخدم لأحد هذه الأدوار فستظهر تفاصيل المكافأة بوضوح في لوحة التتبع الخاصة به على المنصة بعد انضمامه إلى الجمعية. ومع ذلك، تحتفظ شركة دائرة بالحق في الامتناع عن صرف المكافأة المالية للمستخدم في أي حالة تراها مناسبة أو تستدعي ذلك، بما في ذلك على سبيل المثال لا الحصر التأخر في سداد المساهمات الشهرية وفقًا لجدول دفع الأقساط.',
      'terms.financialRewards.text2': 'فيما يخص برنامج رمز الدعوة: يجب على الداعي الالتزام بسداد الأقساط في مواعيدها، بحيث يكون قد سدد قسطًا واحدًا (1) على الأقل في الوقت المحدد وأن لا يكون قد تأخر لمدة تزيد عن (2) يومين في سداد أي قسط. ولا يحق للشخص المدعو استخدام رمز الدعوة إذا كان قد سدد أكثر من قسط واحد (1) مسبقًا، أو إذا تأخر في في سداد أي قسط سابق لمدة تزيد عن (2) يومين.',
      'terms.financialRewards.text3': 'يستحق كل من الداعي والمدعو مكافأة الدعوة بعد أن يقوم المدعو بسداد قسط شهري واحد (1) على الأقل في الوقت المحدد، وذلك خلال خمسة وأربعين (45) يومًا من تاريخ إدخال رمز الدعوة. وبعد استيفاء جميع الشروط، تُطبَّق المكافأة على القسط القادم الذي لم يُطبق عليه أي خصم أو مكافأة أخرى.',
      'terms.termination': 'إلغاء الحساب',
      'terms.termination.text': 'يجوز لـ دائرة إلغاء أو تعليق حساب العضو في أي وقت بسبب انتهاك هذه الشروط أو لأي سبب آخر. يمكن للأعضاء الجمعية إلغاء تنشيط حساباتهم عن طريق الاتصال بفريق الدعم لـ دائرة.',
      'terms.memberExclusion': 'استبعاد المشتركين',
      'terms.memberExclusion.intro': 'تحتفظ منصة دائرة بحق استبعاد أي مشترك، بما في ذلك على سبيل المثال لا الحصر الحالات التالية:',
      'terms.memberExclusion.repeatedDelays': 'الإخلال بالالتزامات المالية: يشمل ذلك التأخر المتكرر أو الامتناع عن سداد الأقساط في الوقت المحدد.',
      'terms.memberExclusion.falsifiedInfo': 'تقديم معلومات غير صحيحة أو مخالفة للأنظمة: مثل الإدلاء ببيانات شخصية أو مالية مزوّرة أو مضللة، أو استخدام الحساب في أغراض غير مشروعة كالغش أو الاحتيال أو غسل الأموال أو انتهاك قواعد وشروط المنصة ويتضمن ذلك خرق الشروط والأحكام أو محاولة التلاعب بها بأي شكل.',
      'terms.memberExclusion.harmfulParticipation': 'قرار إداري من المنصة: يحق لإدارة دائرة استبعاد أي مشترك إذا تبين، بعد تقييم داخلي عادل، أن استمراره يضر بمصلحة الجمعية أو نزاهة المنصة.',
      'terms.memberExclusion.nonRefundable': 'في حال استبعاد المشترك من الجمعية لأي من الأسباب أعلاه، لا تُسترد أي رسوم دُفِعَت للمنصة.',
      'terms.prohibitedActivities': 'الأنشطة المحظورة',
      'terms.prohibitedActivities.text': 'يجب على المشتركين عدم الانخراط في أي أنشطة غير قانونية أو احتيالية أو انتهاك حقوق الآخرين أثناء استخدام منصة دائرة وخدماتها. تشمل الأنشطة المحظورة على سبيل المثال لا الحصر غسيل الأموال وتمويل الإرهاب والوصول الغير المصرح به إلى أنظمة دائرة وأي نشاط يمكن أن يضر بسمعة دائرة. تشجع دائرة الأعضاء على الإبلاغ عن أي معاملة غير مصرح بها أو مخاوف أمنية أو معتقدات تتعلق بانتهاك هذه الاتفاقية فورا من خلال قنوات الدعم المتاحة.',
      'terms.amendments': 'التحديثات',
      'terms.amendments.text': 'يحق لمنصة دائرة تعديل أو تحديث شروط وأحكام المنصة في أي وقت دون إشعار مسبق. يتحمل المشاركون مسؤولية مراجعة الشروط والأحكام بانتظام.',
      'terms.acceptTerms': 'أوافق على الشروط والأحكام',
      'terms.continue': 'متابعة',
      
      // Admission Fee Calculator Page
      'calculator.monthlyContribution': 'المساهمة الشهرية (ريال عماني)',
      'calculator.duration': 'المدة (أشهر)',
      'calculator.payoutMonth': 'شهر الدفع',
      'calculator.youWillReceive': 'ستحصل على:',
      'calculator.month': 'شهر',
      'calculator.admissionFee': 'رسوم التسجيل',
      'calculator.paidOnce': 'تدفع مرة واحدة فقط قبل بدء الجمعية',
      'calculator.joinNow': 'انضم الآن',
      
      // Contact Us Page
      'contact.title': 'اتصل بنا',
      'contact.subtitle': 'تواصل معنا. نحن سعداء للتواصل معك.',
      'contact.form.name': 'الاسم الكامل',
      'contact.form.email': 'البريد الإلكتروني',
      'contact.form.phone': 'رقم الهاتف',
      'contact.form.subject': 'الموضوع',
      'contact.form.message': 'الرسالة',
      'contact.form.submit': 'إرسال الرسالة',
      'contact.info.title': 'معلومات الاتصال',
      'contact.info.address': 'العنوان',
      'contact.info.address.value': 'صلالة, سلطنة عمان',
      'contact.info.phone': 'الهاتف',
      'contact.info.email': 'البريد الإلكتروني',
      'contact.info.hours': 'ساعات العمل',
      'contact.info.hours.value': '24/7',
      'contact.form.namePlaceholder': 'أدخل اسمك الكامل',
      'contact.form.emailPlaceholder': 'أدخل عنوان بريدك الإلكتروني',
      'contact.form.phonePlaceholder': 'أدخل رقم هاتفك',
      'contact.form.subjectPlaceholder': 'أدخل الموضوع',
      'contact.form.messagePlaceholder': 'أدخل رسالتك',
      'contact.form.fillRequired': 'يرجى ملء جميع الحقول المطلوبة.',
      'contact.form.validEmail': 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
      'contact.form.success': 'شكراً لتواصلك معنا! سنعود إليك قريباً.',
      
      // Common
      'common.view': 'عرض',
      'common.edit': 'تعديل',
      'common.delete': 'حذف',
      'common.save': 'حفظ',
      'common.cancel': 'إلغاء',
      'common.search': 'بحث',
      'common.filter': 'تصفية',
      'common.noResults': 'لا توجد نتائج',
      'common.loading': 'جاري التحميل...',
      'common.confirm': 'هل أنت متأكد؟',
      'common.success': 'نجح',
      'common.error': 'خطأ'
    }
  };

  // Current language (default: English)
  let currentLang = 'en';

  // Storage helper functions
  const storage = {
    get: function() {
      // Try localStorage first (more reliable)
      try {
        const lang = localStorage.getItem('jameya_lang');
        if (lang && (lang === 'en' || lang === 'ar')) {
          return lang;
        }
      } catch (e) {
        // localStorage not available, fallback to cookie
      }
      
      // Fallback to cookie
      if (typeof $.cookie !== 'undefined') {
        const lang = $.cookie('jameya_lang');
        if (lang && (lang === 'en' || lang === 'ar')) {
          return lang;
        }
      }
      
      return null;
    },
    set: function(lang) {
      // Save to localStorage (primary)
      try {
        localStorage.setItem('jameya_lang', lang);
      } catch (e) {
        // localStorage not available, use cookie only
      }
      
      // Also save to cookie as backup
      if (typeof $.cookie !== 'undefined') {
        $.cookie('jameya_lang', lang, { expires: 365 });
      }
    }
  };

  // i18n Object
  const i18n = {
    /**
     * Initialize i18n system
     */
    init: function() {
      // Get saved language preference from storage (localStorage or cookie)
      const savedLang = storage.get();
      if (savedLang) {
        currentLang = savedLang;
      }
      
      // Apply translations immediately
      this.translate();
      
      // Set up language switcher
      this.setupLanguageSwitcher();
    },

    /**
     * Get current language
     */
    getCurrentLang: function() {
      return currentLang;
    },

    /**
     * Set language
     */
    setLanguage: function(lang) {
      if (lang !== 'en' && lang !== 'ar') {
        console.warn('Invalid language:', lang);
        return;
      }
      
      currentLang = lang;
      
      // Save to storage (localStorage and cookie)
      storage.set(lang);
      
      // Apply translations
      this.translate();
      
      // Trigger custom event for other scripts
      $(document).trigger('languageChanged', [lang]);
    },

    /**
     * Get translation for a key
     */
    t: function(key) {
      const translation = translations[currentLang] && translations[currentLang][key];
      return translation || key;
    },

    /**
     * Translate all elements with data-i18n attribute
     */
    translate: function() {
      // Translate elements with data-i18n attribute
      $('[data-i18n]').each(function() {
        const $el = $(this);
        const key = $el.attr('data-i18n');
        const translation = i18n.t(key);
        
        // Check if it's a placeholder or value attribute
        if ($el.is('input[placeholder], textarea[placeholder]')) {
          $el.attr('placeholder', translation);
        } else if ($el.is('input[value]') && $el.attr('data-i18n-value') === 'true') {
          $el.val(translation);
        } else if ($el.attr('data-i18n-html') === 'true') {
          $el.html(translation);
        } else {
          $el.text(translation);
        }
      });

      // Translate placeholder attributes
      $('[data-i18n-placeholder]').each(function() {
        const $el = $(this);
        const key = $el.attr('data-i18n-placeholder');
        const translation = i18n.t(key);
        $el.attr('placeholder', translation);
      });

      // Update HTML lang attribute and ensure notranslate class is present
      $('html').attr('lang', currentLang).addClass('notranslate');
      
      // Prevent Google Translate from interfering
      document.documentElement.setAttribute('class', 'notranslate');
      
      // Apply RTL only to content area, not navbar/sidebar
      if (currentLang === 'ar') {
        $('.main-panel, .content-wrapper').addClass('rtl-content');
        $('body').addClass('rtl-body');
      } else {
        $('.main-panel, .content-wrapper').removeClass('rtl-content');
        $('body').removeClass('rtl-body');
      }
    },

    /**
     * Setup language switcher in sidebar
     */
    setupLanguageSwitcher: function() {
      // Update language menu items
      $('[data-lang="en"]').off('click').on('click', function(e) {
        e.preventDefault();
        i18n.setLanguage('en');
      });
      
      $('[data-lang="ar"]').off('click').on('click', function(e) {
        e.preventDefault();
        i18n.setLanguage('ar');
      });
    }
  };

  // Initialize i18n when DOM and jQuery are ready
  function initializeI18n() {
    // Wait for jQuery to be available
    function tryInit() {
      if (typeof $ !== 'undefined' && typeof jQuery !== 'undefined') {
        // jQuery is available, initialize
        $(document).ready(function() {
          i18n.init();
        });
      } else {
        // jQuery not ready yet, try again
        setTimeout(tryInit, 50);
      }
    }
    
    // Start trying to initialize
    if (document.readyState === 'loading') {
      // DOM is still loading, wait for it
      document.addEventListener('DOMContentLoaded', tryInit);
    } else {
      // DOM is already ready
      tryInit();
    }
  }

  // Try to get saved language immediately (before DOM ready) for faster rendering
  // Use localStorage directly (no jQuery dependency)
  try {
    const savedLang = localStorage.getItem('jameya_lang');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      currentLang = savedLang;
      // Apply basic language attribute immediately and prevent translation
      if (document.documentElement) {
        document.documentElement.setAttribute('lang', currentLang);
        document.documentElement.setAttribute('class', 'notranslate');
        if (currentLang === 'ar' && document.body) {
          document.body.classList.add('rtl-body');
        }
      }
    } else {
      // Ensure notranslate class is always present even if no saved language
      if (document.documentElement) {
        document.documentElement.setAttribute('class', 'notranslate');
      }
    }
  } catch (e) {
    // localStorage not available, will use cookie fallback in init()
    // Still ensure notranslate class is present
    if (document.documentElement) {
      document.documentElement.setAttribute('class', 'notranslate');
    }
  }

  // Prevent Google Translate from interfering
  // Remove any Google Translate widgets that might appear
  function removeGoogleTranslateWidget() {
    // Remove Google Translate widget if it exists
    const googteTranslator = document.getElementById('google_translate_element');
    if (googteTranslator) {
      googteTranslator.remove();
    }
    
    // Remove any Google Translate iframes
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(function(iframe) {
      if (iframe.src && iframe.src.indexOf('translate.googleapis.com') !== -1) {
        iframe.remove();
      }
    });
    
    // Remove any Google Translate script tags
    const scripts = document.querySelectorAll('script');
    scripts.forEach(function(script) {
      if (script.src && script.src.indexOf('translate.googleapis.com') !== -1) {
        script.remove();
      }
    });
  }
  
  // Run immediately to prevent translation widgets
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeGoogleTranslateWidget);
  } else {
    removeGoogleTranslateWidget();
  }
  
  // Also run periodically to catch any late-loading widgets
  setInterval(removeGoogleTranslateWidget, 1000);

  // Initialize i18n system
  initializeI18n();

  // Expose i18n globally
  window.i18n = i18n;

})();

