export type Locale = "en" | "my";

export type SalonCard = {
  name: string;
  rating?: string;
  pill?: string;
  tag?: string;
  meta: string;
  priceStrong: string;
  priceMuted: string;
  image?: "salon" | "barbershop";
  alt?: string;
  placeholder?: "nail" | "spa";
};

export type Slot = {
  time: string;
  desc: string;
  artist?: string;
  status?: string;
  variant: "booked" | "new" | "open";
};

export type Dictionary = {
  header: {
    navAria: string;
    nav: { href: string; label: string }[];
    lang: { label: string; href: string; hreflang: Locale; myFont: boolean };
    login: string;
    getApp: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    titlePre: string;
    titleAccent: string;
    titlePost: string;
    accentScript: boolean;
    sub: string;
    search: {
      treatmentLabel: string;
      treatmentPlaceholder: string;
      whereLabel: string;
      wherePlaceholder: string;
      whenLabel: string;
      whenPlaceholder: string;
      submit: string;
    };
    popularLabel: string;
    popular: string[];
    photoAlt: string;
    cardTitle: string;
    cardSub: string;
  };
  treatments: {
    title: string;
    link: string;
    items: string[];
  };
  deals: {
    badgeEn: string;
    badgeRest: string;
    titlePre: string;
    titleAccent: string;
    titlePost: string;
    textPre: string;
    code: string;
    textPost: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  salons: {
    title: string;
    sub: string;
    link: string;
    cards: SalonCard[];
  };
  how: {
    title: string;
    steps: { num: string; title: string; text: string }[];
  };
  partners: {
    eyebrow: string;
    title: string;
    benefits: string[];
    cta: string;
    panelTitle: string;
    slots: Slot[];
  };
  app: {
    title: string;
    sub: string;
    stores: { hint: string; name: string }[];
  };
  footer: {
    tagline: string;
    cols: { title: string; links: string[] }[];
    copyright: string;
    privacy: string;
    terms: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    header: {
      navAria: "Main",
      nav: [
        { href: "#treatments", label: "Treatments" },
        { href: "#salons", label: "Salons" },
        { href: "#deals", label: "Deals" },
        { href: "#partners", label: "For salons" },
      ],
      lang: { label: "မြန်မာ", href: "/my", hreflang: "my", myFont: true },
      login: "Log in",
      getApp: "Get the app",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      eyebrow: "SALONS · SPAS · LASH & NAIL STUDIOS",
      titlePre: "Book your ",
      titleAccent: "glow-up",
      titlePost: " in a few taps.",
      accentScript: true,
      sub: "Find top-rated beauty pros near you, see real-time availability and book instantly — no calls, no waiting.",
      search: {
        treatmentLabel: "Treatment",
        treatmentPlaceholder: "Lashes, nails, facial…",
        whereLabel: "Where",
        wherePlaceholder: "Near me",
        whenLabel: "When",
        whenPlaceholder: "Any day",
        submit: "Search",
      },
      popularLabel: "Popular:",
      popular: ["Lash extensions", "Gel nails", "Hair colour", "Thai massage"],
      photoAlt: "Bright salon with styling chairs and lit mirrors",
      cardTitle: "Lilac Lash Studio · ★ 4.92",
      cardSub: "Next free slot today, 14:30",
    },
    treatments: {
      title: "Browse by treatment",
      link: "See all treatments",
      items: ["Lashes", "Nails", "Hair", "Facial", "Spa & massage", "Brows"],
    },
    deals: {
      badgeEn: "BLACK FRIDAY",
      badgeRest: " · 27–30 NOV",
      titlePre: "Glam up to ",
      titleAccent: "50% off",
      titlePost: "",
      textPre:
        "Lashes −30% · Nails −40% · Hair −20% · Facials −50% at participating salons. Use code ",
      code: "GLAMFRIDAY",
      textPost: " at checkout.",
      ctaPrimary: "Shop the deals",
      ctaSecondary: "Set a reminder",
    },
    salons: {
      title: "Trending salons & spas",
      sub: "Loved by Glamicious guests this month",
      link: "View all salons",
      cards: [
        {
          name: "Lilac Lash Studio",
          rating: "★ 4.92",
          tag: "Glam favourite",
          meta: "Lashes & brows · Siam Square",
          priceStrong: "฿890",
          priceMuted: "from",
          image: "salon",
          alt: "Bright salon with styling chairs and lit mirrors",
        },
        {
          name: "Burman Barbershop",
          rating: "★ 4.9",
          tag: "921 reviews",
          meta: "Barber · 6.5 Mile, Yangon",
          priceStrong: "MMK 20,000",
          priceMuted: "from",
          image: "barbershop",
          alt: "Barbershop with leather barber chairs and arched mirrors",
        },
        {
          name: "THE SOIL Nail & Glam Studio",
          pill: "New",
          meta: "Nail salon · Mingalar Taungnyunt, Yangon",
          priceStrong: "MMK 35,000",
          priceMuted: "UV gel extensions",
          placeholder: "nail",
        },
        {
          name: "St. Gregory Spa",
          pill: "Hotel spa",
          meta: "Pan Pacific Yangon · Pabedan, Yangon",
          priceStrong: "Open daily",
          priceMuted: "9:00–22:00",
          placeholder: "spa",
        },
      ],
    },
    how: {
      title: "How Glamicious works",
      steps: [
        {
          num: "1",
          title: "Find your treatment",
          text: "Search by service, area or date and compare salons, prices and real guest reviews.",
        },
        {
          num: "2",
          title: "Pick a time & artist",
          text: "See live availability, choose your favourite specialist and book in seconds.",
        },
        {
          num: "3",
          title: "Show up & glow",
          text: "Get reminders before your visit, pay at the salon and leave a review after.",
        },
      ],
    },
    partners: {
      eyebrow: "FOR SALON OWNERS",
      title: "Fill your chairs with new guests",
      benefits: [
        "Take bookings 24/7, even while you’re busy with a client",
        "Manage every specialist’s calendar in one place",
        "Join campaigns like Black Friday to reach more guests",
      ],
      cta: "Join as a partner",
      panelTitle: "Today at Lilac Lash Studio",
      slots: [
        { time: "10:00", desc: "Classic lash", artist: "Nok", status: "Booked", variant: "booked" },
        { time: "11:30", desc: "Brow lamination", artist: "Ploy", status: "Booked", variant: "booked" },
        { time: "14:30", desc: "Lash lift & tint", artist: "Nok", status: "New", variant: "new" },
        { time: "16:00", desc: "Open slot", variant: "open" },
      ],
    },
    app: {
      title: "Your glow-up, in your pocket",
      sub: "Book, reschedule and save favourites in the Glamicious app.",
      stores: [
        { hint: "Download on the", name: "App Store" },
        { hint: "Get it on", name: "Google Play" },
      ],
    },
    footer: {
      tagline: "Beauty and wellness bookings, made glam.",
      cols: [
        { title: "Explore", links: ["Lashes", "Nails", "Hair", "Spa & massage"] },
        { title: "Company", links: ["About us", "For salons", "Careers"] },
        { title: "Support", links: ["Help centre", "Cancellation policy", "Contact"] },
      ],
      copyright: "© 2026 Glamicious",
      privacy: "Privacy",
      terms: "Terms",
    },
  },

  my: {
    header: {
      navAria: "ပင်မ",
      nav: [
        { href: "#treatments", label: "ဝန်ဆောင်မှုများ" },
        { href: "#salons", label: "ဆိုင်များ" },
        { href: "#deals", label: "ပရိုမိုးရှင်း" },
        { href: "#partners", label: "ဆိုင်ပိုင်ရှင်များအတွက်" },
      ],
      lang: { label: "EN", href: "/", hreflang: "en", myFont: false },
      login: "ဝင်ရန်",
      getApp: "အက်ပ် ရယူရန်",
      menuOpen: "မီနူး ဖွင့်ရန်",
      menuClose: "မီနူး ပိတ်ရန်",
    },
    hero: {
      eyebrow: "အလှပြင်ဆိုင် · Spa · မျက်တောင်နှင့် လက်သည်း စတူဒီယို",
      titlePre: "သင့်",
      titleAccent: "အလှ",
      titlePost: "အတွက် အချိန်ကို လွယ်ကူစွာ ဘိုကင်လုပ်ပါ",
      accentScript: false,
      sub: "သင့်အနီးရှိ အကောင်းဆုံး အလှပြင်ဆိုင်များကို ရှာပါ။ အားလပ်ချိန်ကို ချက်ချင်းကြည့်ပြီး ဖုန်းဆက်စရာမလိုဘဲ ဘိုကင်လုပ်နိုင်ပါသည်။",
      search: {
        treatmentLabel: "ဝန်ဆောင်မှု",
        treatmentPlaceholder: "မျက်တောင်၊ လက်သည်း…",
        whereLabel: "နေရာ",
        wherePlaceholder: "ရန်ကုန်",
        whenLabel: "အချိန်",
        whenPlaceholder: "မည်သည့်နေ့မဆို",
        submit: "ရှာရန်",
      },
      popularLabel: "လူကြိုက်များ –",
      popular: [
        "မျက်တောင်ဆက်ခြင်း",
        "Gel လက်သည်း",
        "ဆံပင်ဆိုးခြင်း",
        "မြန်မာ့ရိုးရာ နှိပ်နယ်ခြင်း",
      ],
      photoAlt: "အလှပြင်ဆိုင်အတွင်း မှန်များနှင့် ကုလားထိုင်များ",
      cardTitle: "Lilac Lash Studio · ★ 4.92",
      cardSub: "ယနေ့ ၁၄:၃၀ တွင် အားသည်",
    },
    treatments: {
      title: "ဝန်ဆောင်မှုအလိုက် ရှာဖွေပါ",
      link: "အားလုံး ကြည့်ရန်",
      items: [
        "မျက်တောင်",
        "လက်သည်း",
        "ဆံပင်",
        "မျက်နှာအလှ",
        "Spa နှင့် နှိပ်နယ်ခြင်း",
        "မျက်ခုံး",
      ],
    },
    deals: {
      badgeEn: "BLACK FRIDAY",
      badgeRest: " · နိုဝင်ဘာ ၂၇–၃၀",
      titlePre: "အလှပြင်ဈေး ",
      titleAccent: "50%",
      titlePost: " အထိ လျှော့",
      textPre:
        "ပါဝင်သော ဆိုင်များတွင် မျက်တောင် −၃၀% · လက်သည်း −၄၀% · ဆံပင် −၂၀% · မျက်နှာအလှ −၅၀%။ ငွေချေရာတွင် ",
      code: "GLAMFRIDAY",
      textPost: " ကုဒ်ကို သုံးပါ။",
      ctaPrimary: "ပရိုမိုးရှင်းများ ကြည့်ရန်",
      ctaSecondary: "သတိပေးချက် ထားရန်",
    },
    salons: {
      title: "လူကြိုက်များသော ဆိုင်များနှင့် Spa များ",
      sub: "ဒီလ Glamicious အသုံးပြုသူများ နှစ်သက်ကြသည်",
      link: "ဆိုင်အားလုံး ကြည့်ရန်",
      cards: [
        {
          name: "Lilac Lash Studio",
          rating: "★ 4.92",
          tag: "လူကြိုက်အများဆုံး",
          meta: "မျက်တောင်နှင့် မျက်ခုံး · ဗဟန်း၊ ရန်ကုန်",
          priceStrong: "၂၅,၀၀၀ ကျပ်",
          priceMuted: "မှစ၍",
          image: "salon",
          alt: "အလှပြင်ဆိုင်အတွင်း မှန်များနှင့် ကုလားထိုင်များ",
        },
        {
          name: "Burman Barbershop",
          rating: "★ 4.9",
          tag: "သုံးသပ်ချက် ၉၂၁",
          meta: "ဆံသဆိုင် · ၆ မိုင်ခွဲ၊ ရန်ကုန်",
          priceStrong: "၂၀,၀၀၀ ကျပ်",
          priceMuted: "မှစ၍",
          image: "barbershop",
          alt: "ဆံသဆိုင်အတွင်း ကုလားထိုင်များနှင့် မှန်များ",
        },
        {
          name: "THE SOIL Nail & Glam Studio",
          pill: "အသစ်",
          meta: "လက်သည်းဆိုင် · မင်္ဂလာတောင်ညွန့်၊ ရန်ကုန်",
          priceStrong: "၃၅,၀၀၀ ကျပ်",
          priceMuted: "· UV gel ဆက်ခြင်း",
          placeholder: "nail",
        },
        {
          name: "St. Gregory Spa",
          pill: "ဟိုတယ် Spa",
          meta: "Pan Pacific Yangon · ပန်းဘဲတန်း၊ ရန်ကုန်",
          priceStrong: "နေ့စဉ်ဖွင့်",
          priceMuted: "· ၉:၀၀–၂၂:၀၀",
          placeholder: "spa",
        },
      ],
    },
    how: {
      title: "Glamicious အသုံးပြုပုံ",
      steps: [
        {
          num: "၁",
          title: "ဝန်ဆောင်မှု ရှာပါ",
          text: "ဝန်ဆောင်မှု၊ နေရာ သို့မဟုတ် ရက်စွဲဖြင့် ရှာဖွေပြီး ဆိုင်များ၊ ဈေးနှုန်းများနှင့် သုံးသပ်ချက်များကို နှိုင်းယှဉ်ပါ။",
        },
        {
          num: "၂",
          title: "အချိန်နှင့် ကျွမ်းကျင်သူ ရွေးပါ",
          text: "အားလပ်ချိန်ကို တိုက်ရိုက်ကြည့်ပြီး နှစ်သက်ရာ ကျွမ်းကျင်သူကို ရွေးကာ စက္ကန့်ပိုင်းအတွင်း ဘိုကင်လုပ်ပါ။",
        },
        {
          num: "၃",
          title: "ရောက်လာပြီး လှပလိုက်ပါ",
          text: "မသွားခင် သတိပေးချက် ရယူပါ။ ဆိုင်တွင် ငွေပေးချေပြီး ပြီးနောက် သုံးသပ်ချက် ရေးပေးပါ။",
        },
      ],
    },
    partners: {
      eyebrow: "ဆိုင်ပိုင်ရှင်များအတွက်",
      title: "ဖောက်သည်အသစ်များဖြင့် သင့်ဆိုင်ကို ပြည့်စေပါ",
      benefits: [
        "ဖောက်သည်နှင့် အလုပ်များနေချိန်မှာတောင် ၂၄ နာရီ ဘိုကင်လက်ခံနိုင်ပါသည်",
        "ဝန်ထမ်းအားလုံး၏ အချိန်ဇယားကို တစ်နေရာတည်းတွင် စီမံပါ",
        "Black Friday ကဲ့သို့ ကမ်ပိန်းများတွင် ပါဝင်ပြီး ဖောက်သည် ပိုမိုရယူပါ",
      ],
      cta: "မိတ်ဖက်အဖြစ် ပါဝင်ရန်",
      panelTitle: "ယနေ့ Lilac Lash Studio တွင်",
      slots: [
        {
          time: "၁၀:၀၀",
          desc: "Classic မျက်တောင်",
          artist: "နန္ဒာ",
          status: "ဘိုကင်ပြီး",
          variant: "booked",
        },
        {
          time: "၁၁:၃၀",
          desc: "မျက်ခုံး ပုံသွင်းခြင်း",
          artist: "ဖြူဖြူ",
          status: "ဘိုကင်ပြီး",
          variant: "booked",
        },
        {
          time: "၁၄:၃၀",
          desc: "Lash lift နှင့် tint",
          artist: "နန္ဒာ",
          status: "အသစ်",
          variant: "new",
        },
        { time: "၁၆:၀၀", desc: "အားလပ်ချိန်", variant: "open" },
      ],
    },
    app: {
      title: "သင့်အလှ၊ သင့်လက်ထဲမှာ",
      sub: "Glamicious အက်ပ်ဖြင့် ဘိုကင်လုပ်ခြင်း၊ အချိန်ပြောင်းခြင်းနှင့် အကြိုက်ဆိုင်များ သိမ်းဆည်းခြင်း ပြုလုပ်နိုင်ပါသည်။",
      stores: [
        { hint: "Download on the", name: "App Store" },
        { hint: "Get it on", name: "Google Play" },
      ],
    },
    footer: {
      tagline: "အလှနှင့် ကျန်းမာရေး ဝန်ဆောင်မှုများကို လွယ်ကူစွာ ဘိုကင်လုပ်ပါ။",
      cols: [
        {
          title: "ရှာဖွေရန်",
          links: ["မျက်တောင်", "လက်သည်း", "ဆံပင်", "Spa နှင့် နှိပ်နယ်ခြင်း"],
        },
        {
          title: "ကုမ္ပဏီ",
          links: ["ကျွန်ုပ်တို့အကြောင်း", "ဆိုင်ပိုင်ရှင်များအတွက်", "အလုပ်အကိုင်"],
        },
        {
          title: "အကူအညီ",
          links: ["အကူအညီစင်တာ", "ပယ်ဖျက်ခြင်း မူဝါဒ", "ဆက်သွယ်ရန်"],
        },
      ],
      copyright: "© ၂၀၂၆ Glamicious",
      privacy: "ကိုယ်ရေးအချက်အလက်",
      terms: "စည်းမျဉ်းများ",
    },
  },
};
