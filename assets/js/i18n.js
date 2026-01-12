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
      'sidebar.contactUs': 'Contact Us',
      'sidebar.language': 'Language',
      'sidebar.arabic': 'Arabic',
      'sidebar.english': 'English',
      'sidebar.userPages': 'User Pages',
      'sidebar.login': 'Login',
      'sidebar.signUp': 'Sign Up',
      
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
      
      // Footer
      'footer.copyright': 'Copyright © 2025 OpticoreAI.com',
      
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
      'sidebar.contactUs': 'اتصل بنا',
      'sidebar.language': 'اللغة',
      'sidebar.arabic': 'العربية',
      'sidebar.english': 'الإنجليزية',
      'sidebar.userPages': 'صفحات المستخدم',
      'sidebar.login': 'تسجيل الدخول',
      'sidebar.signUp': 'التسجيل',
      
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
      
      // Footer
      'footer.copyright': 'حقوق النشر © 2025 OpticoreAI.com',
      
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

      // Update HTML lang attribute (but don't change dir for navbar/sidebar)
      $('html').attr('lang', currentLang);
      
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
      // Apply basic language attribute immediately
      if (document.documentElement) {
        document.documentElement.setAttribute('lang', currentLang);
        if (currentLang === 'ar' && document.body) {
          document.body.classList.add('rtl-body');
        }
      }
    }
  } catch (e) {
    // localStorage not available, will use cookie fallback in init()
  }

  // Initialize i18n system
  initializeI18n();

  // Expose i18n globally
  window.i18n = i18n;

})();

