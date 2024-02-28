/*
 * =====================================================================================
 * DISCLAIMER:
 * =====================================================================================
 * This localization file is a community contribution and is not officially maintained
 * by Clerk. It has been provided by the community and may not be fully aligned
 * with the current or future states of the main application. Clerk does not guarantee
 * the accuracy, completeness, or timeliness of the translations in this file.
 * Use of this file is at your own risk and discretion.
 * =====================================================================================
 */

import type { LocalizationResource } from '@clerk/types';

export const plPL: LocalizationResource = {
  locale: 'pl-PL',
  backButton: 'Powrót',
  badge__default: 'Domyślny',
  badge__otherImpersonatorDevice: 'Inne urządzenie osobiste',
  badge__primary: 'Podstawowy',
  badge__requiresAction: 'Wymaga działania',
  badge__thisDevice: 'To urządzenie',
  badge__unverified: 'Niezweryfikowany',
  badge__userDevice: 'Urządzenie użytkownika',
  badge__you: 'Ty',
  createOrganization: {
    formButtonSubmit: 'Utwórz organizację',
    invitePage: {
      formButtonReset: 'Pomiń',
    },
    title: 'Utwórz organizację',
  },
  dates: {
    lastDay: "Wczoraj o godzinie {{ date | timeString('pl-PL') }}",
    next6Days: "{{ date | weekday('pl-PL','long') }} o godzinie {{ date | timeString('pl-PL') }}",
    nextDay: "Jutro o godzinie {{ date | timeString('pl-PL') }}",
    numeric: "{{ date | numeric('pl-PL') }}",
    previous6Days: "Ostatni(a) {{ date | weekday('pl-PL','long') }} o godzinie {{ date | timeString('pl-PL') }}",
    sameDay: "Dzisiaj o godzinie {{ date | timeString('pl-PL') }}",
  },
  dividerText: 'lub',
  footerActionLink__useAnotherMethod: 'Użyj innej metody',
  footerPageLink__help: 'Pomoc',
  footerPageLink__privacy: 'Prywatność',
  footerPageLink__terms: 'Warunki',
  formButtonPrimary: 'Kontynuuj',
  formButtonPrimary__verify: 'Verify',
  formFieldAction__forgotPassword: 'Zapomniałem/am hasła',
  formFieldError__matchingPasswords: 'Passwords match.',
  formFieldError__notMatchingPasswords: "Passwords don't match.",
  formFieldError__verificationLinkExpired: 'The verification link expired. Please request a new link.',
  formFieldHintText__optional: 'Opcjonalne',
  formFieldHintText__slug: 'A slug is a human-readable ID that must be unique. It’s often used in URLs.',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__confirmDeletionUserAccount: 'Delete account',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__emailAddresses:
    'Wprowadź lub wklej jeden lub więcej adresów e-mail, oddzielonych spacjami lub przecinkami',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldLabel__automaticInvitations: 'Enable automatic invitations for this domain',
  formFieldLabel__backupCode: 'Kod zapasowy',
  formFieldLabel__confirmDeletion: 'Confirmation',
  formFieldLabel__confirmPassword: 'Potwierdź hasło',
  formFieldLabel__currentPassword: 'Obecne hasło',
  formFieldLabel__emailAddress: 'Adres e-mail',
  formFieldLabel__emailAddress_username: 'Adres e-mail lub nazwa użytkownika',
  formFieldLabel__emailAddresses: 'Adresy e-mail',
  formFieldLabel__firstName: 'Imię',
  formFieldLabel__lastName: 'Nazwisko',
  formFieldLabel__newPassword: 'Nowe hasło',
  formFieldLabel__organizationDomain: 'Domain',
  formFieldLabel__organizationDomainDeletePending: 'Delete pending invitations and suggestions',
  formFieldLabel__organizationDomainEmailAddress: 'Verification email address',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Enter an email address under this domain to receive a code and verify this domain.',
  formFieldLabel__organizationName: 'Nazwa organizacji',
  formFieldLabel__organizationSlug: 'Slug URL',
  formFieldLabel__password: 'Hasło',
  formFieldLabel__phoneNumber: 'Numer telefonu',
  formFieldLabel__role: 'Rola',
  formFieldLabel__signOutOfOtherSessions: 'Wyloguj się ze wszystkich innych urządzeń',
  formFieldLabel__username: 'Nazwa użytkownika',
  impersonationFab: {
    action__signOut: 'Wyloguj',
    title: 'Zalogowano jako {{identifier}}',
  },
  membershipRole__admin: 'Administrator',
  membershipRole__basicMember: 'Użytkownik',
  membershipRole__guestMember: 'Gość',
  organizationList: {
    action__createOrganization: 'Create organization',
    action__invitationAccept: 'Join',
    action__suggestionsAccept: 'Request to join',
    createOrganization: 'Create Organization',
    invitationAcceptedLabel: 'Joined',
    subtitle: 'to continue to {{applicationName}}',
    suggestionsAcceptedLabel: 'Pending approval',
    title: 'Choose an account',
    titleWithoutPersonal: 'Choose an organization',
  },
  organizationProfile: {
    badge__automaticInvitation: 'Automatic invitations',
    badge__automaticSuggestion: 'Automatic suggestions',
    badge__manualInvitation: 'No automatic enrollment',
    badge__unverified: 'Unverified',
    createDomainPage: {
      subtitle:
        'Add the domain to verify. Users with email addresses at this domain can join the organization automatically or request to join.',
      title: 'Add domain',
    },
    invitePage: {
      detailsTitle__inviteFailed: 'Nie udało się wysłać zaproszeń. Napraw poniższe problemy i spróbuj ponownie:',
      formButtonPrimary__continue: 'Wyślij zaproszenia',
      selectDropdown__role: 'Select role',
      subtitle: 'Zaproś nowych użytkowników do tej organizacji',
      successMessage: 'Zaproszenia zostały pomyślnie wysłane',
      title: 'Zaproś użytkowników',
    },
    membersPage: {
      action__invite: 'Zaproś',
      activeMembersTab: {
        menuAction__remove: 'Usuń użytkownika',
        tableHeader__actions: '',
        tableHeader__joined: 'Dołączył',
        tableHeader__role: 'Rola',
        tableHeader__user: 'Użytkownik',
      },
      detailsTitle__emptyRow: 'Brak użytkowników do wyświetlenia',
      invitationsTab: {
        autoInvitations: {
          headerSubtitle:
            'Invite users by connecting an email domain with your organization. Anyone who signs up with a matching email domain will be able to join the organization anytime.',
          headerTitle: 'Automatic invitations',
          primaryButton: 'Manage verified domains',
        },
        table__emptyRow: 'No invitations to display',
      },
      invitedMembersTab: {
        menuAction__revoke: 'Anuluj zaproszenie',
        tableHeader__invited: 'Zaproszony',
      },
      requestsTab: {
        autoSuggestions: {
          headerSubtitle:
            'Users who sign up with a matching email domain, will be able to see a suggestion to request to join your organization.',
          headerTitle: 'Automatic suggestions',
          primaryButton: 'Manage verified domains',
        },
        menuAction__approve: 'Approve',
        menuAction__reject: 'Reject',
        tableHeader__requested: 'Requested access',
        table__emptyRow: 'No requests to display',
      },
      start: {
        headerTitle__invitations: 'Invitations',
        headerTitle__members: 'Members',
        headerTitle__requests: 'Requests',
      },
    },
    navbar: {
      description: 'Manage your organization.',
      general: 'General',
      members: 'Members',
      title: 'Organization',
    },
    profilePage: {
      dangerSection: {
        deleteOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1: 'Are you sure you want to delete this organization?',
          messageLine2: 'This action is permanent and irreversible.',
          successMessage: 'You have deleted the organization.',
          title: 'Delete organization',
        },
        leaveOrganization: {
          actionDescription: 'Type "{{organizationName}}" below to continue.',
          messageLine1:
            'Czy na pewno chcesz opuścić tę organizację? Stracisz dostęp do tej organizacji i jej aplikacji.',
          messageLine2: 'Ta akcja jest trwała i nieodwracalna.',
          successMessage: 'Opuściłeś organizację.',
          title: 'Opuść organizację',
        },
        title: 'Zagrożenie',
      },
      domainSection: {
        menuAction__manage: 'Manage',
        menuAction__remove: 'Delete',
        menuAction__verify: 'Verify',
        primaryButton: 'Add domain',
        subtitle:
          'Allow users to join the organization automatically or request to join based on a verified email domain.',
        title: 'Verified domains',
      },
      successMessage: 'Organizacja została zaktualizowana.',
      title: 'Profil organizacji',
    },
    removeDomainPage: {
      messageLine1: 'The email domain {{domain}} will be removed.',
      messageLine2: 'Users won’t be able to join the organization automatically after this.',
      successMessage: '{{domain}} has been removed.',
      title: 'Remove domain',
    },
    start: {
      headerTitle__general: 'General',
      headerTitle__members: 'Członkowie',
      profileSection: {
        primaryButton: '',
        title: 'Organization Profile',
        uploadAction__title: 'Logo',
      },
    },
    verifiedDomainPage: {
      dangerTab: {
        calloutInfoLabel: 'Removing this domain will affect invited users.',
        removeDomainActionLabel__remove: 'Remove domain',
        removeDomainSubtitle: 'Remove this domain from your verified domains',
        removeDomainTitle: 'Remove domain',
      },
      enrollmentTab: {
        automaticInvitationOption__description:
          'Users are automatically invited to join the organization when they sign-up and can join anytime.',
        automaticInvitationOption__label: 'Automatic invitations',
        automaticSuggestionOption__description:
          'Users receive a suggestion to request to join, but must be approved by an admin before they are able to join the organization.',
        automaticSuggestionOption__label: 'Automatic suggestions',
        calloutInfoLabel: 'Changing the enrollment mode will only affect new users.',
        calloutInvitationCountLabel: 'Pending invitations sent to users: {{count}}',
        calloutSuggestionCountLabel: 'Pending suggestions sent to users: {{count}}',
        manualInvitationOption__description: 'Users can only be invited manually to the organization.',
        manualInvitationOption__label: 'No automatic enrollment',
        subtitle: 'Choose how users from this domain can join the organization.',
      },
      start: {
        headerTitle__danger: 'Danger',
        headerTitle__enrollment: 'Enrollment options',
      },
      subtitle: 'The domain {{domain}} is now verified. Continue by selecting enrollment mode.',
      title: 'Update {{domain}}',
    },
    verifyDomainPage: {
      formSubtitle: 'Enter the verification code sent to your email address',
      formTitle: 'Verification code',
      resendButton: "Didn't receive a code? Resend",
      subtitle: 'The domain {{domainName}} needs to be verified via email.',
      subtitleVerificationCodeScreen: 'A verification code was sent to {{emailAddress}}. Enter the code to continue.',
      title: 'Verify domain',
    },
  },
  organizationSwitcher: {
    action__createOrganization: 'Utwórz organizację',
    action__invitationAccept: 'Join',
    action__manageOrganization: 'Zarządzaj organizacją',
    action__suggestionsAccept: 'Request to join',
    notSelected: 'Nie wybrano organizacji',
    personalWorkspace: 'Przestrzeń osobista',
    suggestionsAcceptedLabel: 'Pending approval',
  },
  paginationButton__next: 'Następny',
  paginationButton__previous: 'Poprzedni',
  paginationRowText__displaying: 'Wyświetlanie',
  paginationRowText__of: 'z',
  signIn: {
    accountSwitcher: {
      action__addAccount: 'Add account',
      action__signOutAll: 'Sign out of all accounts',
      subtitle: 'Select the account with which you wish to continue.',
      title: 'Choose an account',
    },
    alternativeMethods: {
      actionLink: 'Uzyskaj pomoc',
      actionText: 'Don’t have any of these?',
      blockButton__backupCode: 'Użyj kodu zapasowego',
      blockButton__emailCode: 'Wyślij kod do {{identifier}}',
      blockButton__emailLink: 'Wyślij link do {{identifier}}',
      blockButton__password: 'Zaloguj się za pomocą hasła',
      blockButton__phoneCode: 'Wyślij kod do {{identifier}}',
      blockButton__totp: 'Użyj aplikacji uwierzytelniającej',
      getHelp: {
        blockButton__emailSupport: 'Wyślij e-mail do pomocy technicznej',
        content:
          'Jeśli masz problem z zalogowaniem się do swojego konta, wyślij do nas e-mail, a postaramy się jak najszybciej przywrócić dostęp.',
        title: 'Uzyskaj pomoc',
      },
      subtitle: 'Facing issues? You can use any of these methods to sign in.',
      title: 'Użyj innego sposobu',
    },
    backupCodeMfa: {
      subtitle: 'aby przejść do {{applicationName}}',
      title: 'Wprowadź kod zapasowy',
    },
    emailCode: {
      formTitle: 'Kod weryfikacyjny',
      resendButton: 'Wyślij kod ponownie',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Sprawdź swoją pocztę e-mail',
    },
    emailLink: {
      expired: {
        subtitle: 'Powróć do oryginalnej karty, aby kontynuować.',
        title: 'Ten link weryfikacyjny wygasł',
      },
      failed: {
        subtitle: 'Powróć do oryginalnej karty, aby kontynuować.',
        title: 'Ten link weryfikacyjny jest nieprawidłowy',
      },
      formSubtitle: 'Użyj linku weryfikacyjnego wysłanego na Twój adres e-mail',
      formTitle: 'Link weryfikacyjny',
      loading: {
        subtitle: 'Zostaniesz przekierowany wkrótce',
        title: 'Logowanie...',
      },
      resendButton: 'Wyślij link ponownie',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Sprawdź swoją pocztę e-mail',
      unusedTab: {
        title: 'Możesz zamknąć tę kartę',
      },
      verified: {
        subtitle: 'Zostaniesz przekierowany wkrótce',
        title: 'Pomyślnie zalogowano',
      },
      verifiedSwitchTab: {
        subtitle: 'Powróć do oryginalnej karty, aby kontynuować',
        subtitleNewTab: 'Powróć do nowo otwartej karty, aby kontynuować',
        titleNewTab: 'Zalogowano na innej karcie',
      },
    },
    forgotPassword: {
      formTitle: 'Reset password code',
      resendButton: "Didn't receive a code? Resend",
      subtitle: 'to reset your password',
      subtitle_email: 'First, enter the code sent to your email ID',
      subtitle_phone: 'First, enter the code sent to your phone',
      title: 'Reset password',
    },
    forgotPasswordAlternativeMethods: {
      blockButton__resetPassword: 'Reset your password',
      label__alternativeMethods: 'Or, sign in with another method',
      title: 'Forgot Password?',
    },
    noAvailableMethods: {
      message: 'Nie można kontynuować logowania. Brak dostępnych czynników uwierzytelniających.',
      subtitle: 'Wystąpił błąd',
      title: 'Nie można się zalogować',
    },
    password: {
      actionLink: 'Użyj innego sposobu',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Wprowadź swoje hasło',
    },
    phoneCode: {
      formTitle: 'Kod weryfikacyjny',
      resendButton: 'Resend code',
      subtitle: 'aby przejść do {{applicationName}}',
      title: 'Sprawdź swój telefon',
    },
    phoneCodeMfa: {
      formTitle: 'Kod weryfikacyjny',
      resendButton: 'Resend code',
      subtitle: '',
      title: 'Sprawdź swój telefon',
    },
    resetPassword: {
      formButtonPrimary: 'Reset Password',
      requiredMessage:
        'An account already exists with an unverified email address. Please reset your password for security.',
      successMessage: 'Your password was successfully changed. Signing you in, please wait a moment.',
      title: 'Set new password',
    },
    resetPasswordMfa: {
      detailsLabel: 'We need to verify your identity before resetting your password.',
    },
    start: {
      actionLink: 'Zarejestruj się',
      actionLink__use_email: 'Użyj adresu e-mail',
      actionLink__use_email_username: 'Użyj adresu e-mail lub nazwy użytkownika',
      actionLink__use_phone: 'Użyj numeru telefonu',
      actionLink__use_username: 'Użyj nazwy użytkownika',
      actionText: 'Nie masz konta?',
      subtitle: 'aby przejść do {{applicationName}}',
      title: 'Zaloguj się',
    },
    totpMfa: {
      formTitle: 'Kod weryfikacyjny',
      subtitle: '',
      title: 'Weryfikacja dwustopniowa',
    },
  },
  signInEnterPasswordTitle: 'Wprowadź swoje hasło',
  signUp: {
    continue: {
      actionLink: 'Zaloguj się',
      actionText: 'Masz już konto?',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Uzupełnij brakujące pola',
    },
    emailCode: {
      formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na Twój adres e-mail',
      formTitle: 'Kod weryfikacyjny',
      resendButton: 'Wyślij ponownie',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Zweryfikuj swój adres e-mail',
    },
    emailLink: {
      formSubtitle: 'Użyj linku weryfikacyjnego wysłanego na Twój adres e-mail',
      formTitle: 'Link weryfikacyjny',
      loading: {
        title: 'Rejestrowanie...',
      },
      resendButton: 'Wyślij ponownie',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Zweryfikuj swój adres e-mail',
      verified: {
        title: 'Pomyślnie zarejestrowano',
      },
      verifiedSwitchTab: {
        subtitle: 'Powróć do nowo otwartej karty, aby kontynuować',
        subtitleNewTab: 'Powróć do poprzedniej karty, aby kontynuować',
        title: 'Adres e-mail został pomyślnie zweryfikowany',
      },
    },
    phoneCode: {
      formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na Twój numer telefonu',
      formTitle: 'Kod weryfikacyjny',
      resendButton: 'Wyślij ponownie',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Zweryfikuj swój numer telefonu',
    },
    start: {
      actionLink: 'Zaloguj się',
      actionText: 'Masz już konto?',
      subtitle: 'aby kontynuować w {{applicationName}}',
      title: 'Utwórz swoje konto',
    },
  },
  socialButtonsBlockButton: 'Kontynuuj z {{provider|titleize}}',
  unstable__errors: {
    captcha_invalid:
      'Sign up unsuccessful due to failed security validations. Please refresh the page to try again or reach out to support for more assistance.',
    captcha_unavailable:
      'Sign up unsuccessful due to failed bot validation. Please refresh the page to try again or reach out to support for more assistance.',
    form_code_incorrect: '',
    form_identifier_exists: '',
    form_identifier_not_found: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'Email address must be a valid email address.',
    form_param_format_invalid__phone_number: 'Phone number must be in a valid international format',
    form_param_max_length_exceeded__first_name: 'First name should not exceed 256 characters.',
    form_param_max_length_exceeded__last_name: 'Last name should not exceed 256 characters.',
    form_param_max_length_exceeded__name: 'Name should not exceed 256 characters.',
    form_param_nil: '',
    form_password_incorrect: '',
    form_password_length_too_short: '',
    form_password_not_strong_enough: 'Your password is not strong enough.',
    form_password_pwned: '',
    form_password_size_in_bytes_exceeded:
      'Your password has exceeded the maximum number of bytes allowed, please shorten it or remove some special characters.',
    form_password_validation_failed: 'Podane hasło jest nieprawidłowe',
    form_username_invalid_character: '',
    form_username_invalid_length: '',
    identification_deletion_failed: 'You cannot delete your last identification.',
    not_allowed_access: '',
    passwordComplexity: {
      maximumLength: 'mniej niż {{length}} znaków',
      minimumLength: '{{length}} lub więcej znaków',
      requireLowercase: 'małą literę',
      requireNumbers: 'cyfrę',
      requireSpecialCharacter: 'znak specjalny',
      requireUppercase: 'wielką literę',
      sentencePrefix: 'Twoje hasło musi zawierać',
    },
    phone_number_exists: 'This phone number is taken. Please try another.',
    zxcvbn: {
      couldBeStronger: 'Your password works, but could be stronger. Try adding more characters.',
      goodPassword: 'Your password meets all the necessary requirements.',
      notEnough: 'Your password is not strong enough.',
      suggestions: {
        allUppercase: 'Capitalize some, but not all letters.',
        anotherWord: 'Add more words that are less common.',
        associatedYears: 'Avoid years that are associated with you.',
        capitalization: 'Capitalize more than the first letter.',
        dates: 'Avoid dates and years that are associated with you.',
        l33t: "Avoid predictable letter substitutions like '@' for 'a'.",
        longerKeyboardPattern: 'Use longer keyboard patterns and change typing direction multiple times.',
        noNeed: 'You can create strong passwords without using symbols, numbers, or uppercase letters.',
        pwned: 'If you use this password elsewhere, you should change it.',
        recentYears: 'Avoid recent years.',
        repeated: 'Avoid repeated words and characters.',
        reverseWords: 'Avoid reversed spellings of common words.',
        sequences: 'Avoid common character sequences.',
        useWords: 'Use multiple words, but avoid common phrases.',
      },
      warnings: {
        common: 'This is a commonly used password.',
        commonNames: 'Common names and surnames are easy to guess.',
        dates: 'Dates are easy to guess.',
        extendedRepeat: 'Repeated character patterns like "abcabcabc" are easy to guess.',
        keyPattern: 'Short keyboard patterns are easy to guess.',
        namesByThemselves: 'Single names or surnames are easy to guess.',
        pwned: 'Your password was exposed by a data breach on the Internet.',
        recentYears: 'Recent years are easy to guess.',
        sequences: 'Common character sequences like "abc" are easy to guess.',
        similarToCommon: 'This is similar to a commonly used password.',
        simpleRepeat: 'Repeated characters like "aaa" are easy to guess.',
        straightRow: 'Straight rows of keys on your keyboard are easy to guess.',
        topHundred: 'This is a frequently used password.',
        topTen: 'This is a heavily used password.',
        userInputs: 'There should not be any personal or page related data.',
        wordByItself: 'Single words are easy to guess.',
      },
    },
  },
  userButton: {
    action__addAccount: 'Dodaj konto',
    action__manageAccount: 'Zarządzaj kontem',
    action__signOut: 'Wyloguj',
    action__signOutAll: 'Wyloguj ze wszystkich kont',
  },
  userProfile: {
    backupCodePage: {
      actionLabel__copied: 'Skopiowane!',
      actionLabel__copy: 'Skopiuj wszystkie',
      actionLabel__download: 'Pobierz .txt',
      actionLabel__print: 'Drukuj',
      infoText1: 'Kody zapasowe zostaną włączone dla tego konta.',
      infoText2:
        'Przechowuj kody zapasowe w tajemnicy i bezpiecznie. Możesz wygenerować nowe kody, jeśli podejrzewasz, że zostały skompromitowane.',
      subtitle__codelist: 'Przechowuj je bezpiecznie i zachowaj w tajemnicy.',
      successMessage:
        'Kody zapasowe są teraz włączone. Możesz użyć jednego z tych kodów do zalogowania się na swoje konto, jeśli utracisz dostęp do urządzenia uwierzytelniającego. Każdy kod można użyć tylko raz.',
      successSubtitle:
        'Możesz użyć jednego z tych kodów do zalogowania się na swoje konto, jeśli utracisz dostęp do urządzenia uwierzytelniającego.',
      title: 'Dodaj weryfikację kodem zapasowym',
      title__codelist: 'Kody zapasowe',
    },
    connectedAccountPage: {
      formHint: 'Wybierz dostawcę, aby połączyć konto.',
      formHint__noAccounts: 'Nie ma dostępnych zewnętrznych dostawców kont.',
      removeResource: {
        messageLine1: '{{identifier}} zostanie usunięte z tego konta.',
        messageLine2:
          'Nie będziesz już mógł korzystać z tego połączonego konta i wszystkie zależne funkcje przestaną działać.',
        successMessage: '{{connectedAccount}} został usunięty z Twojego konta.',
        title: 'Usuń połączone konto',
      },
      socialButtonsBlockButton: 'Połącz konto {{provider|titleize}}',
      successMessage: 'Dostawca został dodany do Twojego konta.',
      title: 'Dodaj połączone konto',
    },
    deletePage: {
      actionDescription: 'Type "Delete account" below to continue.',
      confirm: 'Delete account',
      messageLine1: 'Are you sure you want to delete your account?',
      messageLine2: 'This action is permanent and irreversible.',
      title: 'Delete account',
    },
    emailAddressPage: {
      emailCode: {
        formHint: 'E-mail zawierający kod weryfikacyjny zostanie wysłany na ten adres e-mail.',
        formSubtitle: 'Wprowadź kod weryfikacyjny wysłany na adres {{identifier}}',
        formTitle: 'Kod weryfikacyjny',
        resendButton: 'Wyślij ponownie kod',
        successMessage: 'Adres e-mail {{identifier}} został dodany do twojego konta.',
      },
      emailLink: {
        formHint: 'E-mail zawierający link weryfikacyjny zostanie wysłany na ten adres e-mail.',
        formSubtitle: 'Kliknij w link weryfikacyjny w e-mailu wysłanym na adres {{identifier}}',
        formTitle: 'Link weryfikacyjny',
        resendButton: 'Wyślij ponownie link',
        successMessage: 'Adres e-mail {{identifier}} został dodany do twojego konta.',
      },
      removeResource: {
        messageLine1: '{{identifier}} zostanie usunięty z tego konta.',
        messageLine2: 'Nie będzie już możliwe zalogowanie się za pomocą tego adresu e-mail.',
        successMessage: '{{emailAddress}} został usunięty z twojego konta.',
        title: 'Usuń adres e-mail',
      },
      title: 'Dodaj adres e-mail',
      verifyTitle: 'Verify email address',
    },
    formButtonPrimary__add: 'Add',
    formButtonPrimary__continue: 'Kontynuuj',
    formButtonPrimary__finish: 'Zakończ',
    formButtonPrimary__remove: 'Remove',
    formButtonPrimary__save: 'Save',
    formButtonReset: 'Anuluj',
    mfaPage: {
      formHint: 'Wybierz metodę dodania.',
      title: 'Dodaj weryfikację dwuetapową',
    },
    mfaPhoneCodePage: {
      backButton: 'Use existing number',
      primaryButton__addPhoneNumber: 'Dodaj numer telefonu',
      removeResource: {
        messageLine1: '{{identifier}} nie będzie już otrzymywał kodów weryfikacyjnych podczas logowania.',
        messageLine2: 'Twoje konto może być mniej bezpieczne. Czy na pewno chcesz kontynuować?',
        successMessage:
          'Weryfikacja kodem SMS w dwustopniowym procesie uwierzytelniania została usunięta dla {{mfaPhoneCode}}',
        title: 'Usuń dwustopniową weryfikację',
      },
      subtitle__availablePhoneNumbers:
        'Wybierz numer telefonu, aby zarejestrować weryfikację kodem SMS w dwustopniowym procesie uwierzytelniania.',
      subtitle__unavailablePhoneNumbers:
        'Brak dostępnych numerów telefonów do zarejestrowania weryfikacji kodem SMS w dwustopniowym procesie uwierzytelniania.',
      successMessage1:
        'When signing in, you will need to enter a verification code sent to this phone number as an additional step.',
      successMessage2:
        'Save these backup codes and store them somewhere safe. If you lose access to your authentication device, you can use backup codes to sign in.',
      successTitle: 'SMS code verification enabled',
      title: 'Dodaj weryfikację kodem SMS',
    },
    mfaTOTPPage: {
      authenticatorApp: {
        buttonAbleToScan__nonPrimary: 'Zamiast tego zeskanuj kod QR',
        buttonUnableToScan__nonPrimary: 'Nie można zeskanować kodu QR?',
        infoText__ableToScan:
          'Ustaw nową metodę logowania w swojej aplikacji autentykacyjnej i zeskanuj następujący kod QR, aby połączyć go z Twoim kontem.',
        infoText__unableToScan:
          'Ustaw nową metodę logowania w swojej aplikacji autentykacyjnej i wprowadź poniższy klucz.',
        inputLabel__unableToScan1:
          'Upewnij się, że włączona jest opcja jednorazowe hasła lub hasła oparte na czasie, a następnie zakończ łączenie konta.',
        inputLabel__unableToScan2:
          'Alternatywnie, jeśli Twoja aplikacja autentykacyjna obsługuje URI TOTP, możesz również skopiować pełny URI.',
      },
      removeResource: {
        messageLine1: 'Kody weryfikacyjne z tej aplikacji autentykacyjnej nie będą już wymagane podczas logowania.',
        messageLine2: 'Twoje konto może być mniej bezpieczne. Czy na pewno chcesz kontynuować?',
        successMessage: 'Weryfikacja dwuetapowa za pomocą aplikacji autentykacyjnej została usunięta.',
        title: 'Usuń weryfikację dwuetapową',
      },
      successMessage:
        'Weryfikacja dwuetapowa jest teraz włączona. Przy logowaniu będziesz musiał wprowadzić kod weryfikacyjny z tej aplikacji jako dodatkowy krok.',
      title: 'Dodaj aplikację autentykacyjną',
      verifySubtitle: 'Wprowadź kod weryfikacyjny wygenerowany przez Twoją aplikację autentykacyjną',
      verifyTitle: 'Kod weryfikacyjny',
    },
    mobileButton__menu: 'Menu',
    navbar: {
      account: 'Profile',
      description: 'Manage your account info.',
      security: 'Security',
      title: 'Account',
    },
    passwordPage: {
      checkboxInfoText__signOutOfOtherSessions:
        'It is recommended to sign out of all other devices which may have used your old password.',
      readonly: 'Your password can currently not be edited because you can sign in only via the enterprise connection.',
      successMessage__set: 'Twoje hasło zostało ustawione.',
      successMessage__signOutOfOtherSessions: 'Wylogowano z wszystkich innych urządzeń.',
      successMessage__update: 'Twoje hasło zostało zaktualizowane.',
      title__set: 'Ustaw hasło',
      title__update: 'Zmień hasło',
    },
    phoneNumberPage: {
      infoText: 'Wiadomość tekstowa zawierająca link weryfikacyjny zostanie wysłana na ten numer telefonu.',
      removeResource: {
        messageLine1: '{{identifier}} zostanie usunięty z tego konta.',
        messageLine2: 'Nie będzie już możliwe zalogowanie się za pomocą tego numeru telefonu.',
        successMessage: '{{phoneNumber}} został usunięty z twojego konta.',
        title: 'Usuń numer telefonu',
      },
      successMessage: '{{identifier}} został dodany do twojego konta.',
      title: 'Dodaj numer telefonu',
      verifySubtitle: 'Enter the verification code sent to {{identifier}}',
      verifyTitle: 'Verify phone number',
    },
    profilePage: {
      fileDropAreaHint: 'Prześlij zdjęcie w formacie JPG, PNG, GIF lub WEBP mniejsze niż 10 MB',
      imageFormDestructiveActionSubtitle: 'Usuń zdjęcie',
      imageFormSubtitle: 'Prześlij zdjęcie',
      imageFormTitle: 'Zdjęcie profilowe',
      readonly: 'Your profile information has been provided by the enterprise connection and cannot be edited.',
      successMessage: 'Twój profil został zaktualizowany.',
      title: 'Edytuj profil',
    },
    start: {
      activeDevicesSection: {
        destructiveAction: 'Wyloguj z urządzenia',
        title: 'Aktywne urządzenia',
      },
      connectedAccountsSection: {
        actionLabel__connectionFailed: 'Spróbuj ponownie',
        actionLabel__reauthorize: 'Autoryzuj teraz',
        destructiveActionTitle: 'Odłącz',
        primaryButton: 'Połącz konto',
        subtitle__reauthorize:
          'The required scopes have been updated, and you may be experiencing limited functionality. Please re-authorize this application to avoid any issues',
        title: 'Połączone konta',
      },
      dangerSection: {
        deleteAccountButton: 'Usuń konto',
        title: 'Niebezpieczeństwo',
      },
      emailAddressesSection: {
        destructiveAction: 'Usuń adres email',
        detailsAction__nonPrimary: 'Ustaw jako główny',
        detailsAction__primary: 'Zakończ weryfikację',
        detailsAction__unverified: 'Zakończ weryfikację',
        primaryButton: 'Dodaj adres email',
        title: 'Adresy email',
      },
      enterpriseAccountsSection: {
        title: 'Enterprise accounts',
      },
      headerTitle__account: 'Konto',
      headerTitle__security: 'Bezpieczeństwo',
      mfaSection: {
        backupCodes: {
          actionLabel__regenerate: 'Wygeneruj kody',
          headerTitle: 'Kody zapasowe',
          subtitle__regenerate:
            'Otrzymaj nowy zestaw bezpiecznych kodów zapasowych. Poprzednie kody zapasowe zostaną usunięte i nie będą działać.',
          title__regenerate: 'Wygeneruj nowe kody zapasowe',
        },
        phoneCode: {
          actionLabel__setDefault: 'Ustaw jako domyślny',
          destructiveActionLabel: 'Usuń numer telefonu',
        },
        primaryButton: 'Dodaj weryfikację dwuetapową',
        title: 'Weryfikacja dwuetapowa',
        totp: {
          destructiveActionTitle: 'Usuń',
          headerTitle: 'Aplikacja autoryzacyjna',
        },
      },
      passwordSection: {
        primaryButton__setPassword: 'Ustaw hasło',
        primaryButton__updatePassword: 'Zmień hasło',
        title: 'Hasło',
      },
      phoneNumbersSection: {
        destructiveAction: 'Usuń numer telefonu',
        detailsAction__nonPrimary: 'Ustaw jako główny',
        detailsAction__primary: 'Zakończ weryfikację',
        detailsAction__unverified: 'Zakończ weryfikację',
        primaryButton: 'Dodaj numer telefonu',
        title: 'Numery telefonów',
      },
      profileSection: {
        primaryButton: '',
        title: 'Profil',
      },
      usernameSection: {
        primaryButton__setUsername: 'Ustaw nazwę użytkownika',
        primaryButton__updateUsername: 'Zmień nazwę użytkownika',
        title: 'Nazwa użytkownika',
      },
      web3WalletsSection: {
        destructiveAction: 'Usuń portfel',
        primaryButton: 'Portfele Web3',
        title: 'Portfele Web3',
      },
    },
    usernamePage: {
      successMessage: 'Twoja nazwa użytkownika została zaktualizowana.',
      title__set: 'Zmień nazwę użytkownika',
      title__update: 'Zmień nazwę użytkownika',
    },
    web3WalletPage: {
      removeResource: {
        messageLine1: '{{identifier}} zostanie usunięty z tego konta.',
        messageLine2: 'Nie będziesz już mógł się zalogować za pomocą tego portfela web3.',
        successMessage: '{{web3Wallet}} został usunięty z Twojego konta.',
        title: 'Usuń portfel web3',
      },
      subtitle__availableWallets: 'Wybierz portfel web3 do połączenia z Twoim kontem.',
      subtitle__unavailableWallets: 'Nie ma dostępnych portfeli web3.',
      successMessage: 'Portfel został dodany do Twojego konta.',
      title: 'Dodaj portfel web3',
    },
  },
} as const;
