const serviceList = [

  // ===== 動画配信 =====

  {
    name: "Netflix",
    plans: [
      { name: "広告つきスタンダード", type: "monthly", price: 890 },
      { name: "スタンダード", type: "monthly", price: 1590 },
      { name: "プレミアム", type: "monthly", price: 2290 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "Disney+",
    plans: [
      { name: "スタンダード(月)", type: "monthly", price: 1140 },
      { name: "スタンダード(年)", type: "yearly", price: 11400 },
      { name: "プレミアム(月)", type: "monthly", price: 1520 },
      { name: "プレミアム(年)", type: "yearly", price: 15200 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "Hulu",
    plans: [
      { name: "通常", type: "monthly", price: 1026 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "U-NEXT",
    plans: [
      { name: "通常", type: "monthly", price: 2189 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "Amazon Prime Video",
    plans: [
      { name: "月額", type: "monthly", price: 600 },
      { name: "年額", type: "yearly", price: 5900 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "ABEMAプレミアム",
    plans: [
      { name: "広告つき", type: "monthly", price: 580 },
      { name: "プレミアム", type: "monthly", price: 1080 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "DMM TV",
    plans: [
      { name: "通常", type: "monthly", price: 550 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
    name: "FODプレミアム",
    plans: [
      { name: "通常", type: "monthly", price: 976 },
      { name: "自分で入力", type: "custom", price: 0 }
    ]
  },

  {
  name: "dアニメストア",
  plans: [
    { name: "通常", type: "monthly", price: 550 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "Apple TV+",
  plans: [
    { name: "通常", type: "monthly", price: 900 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "WOWOWオンデマンド",
  plans: [
    { name: "通常", type: "monthly", price: 2530 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "NHKオンデマンド",
  plans: [
    { name: "まるごと見放題パック", type: "monthly", price: 990 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "バンダイチャンネル",
  plans: [
    { name: "見放題", type: "monthly", price: 1100 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},




{
  name: "Apple Music",
  plans: [
    { name: "学生", type: "monthly", price: 580 },
    { name: "個人", type: "monthly", price: 1080 },
    { name: "ファミリー", type: "monthly", price: 1680 },
    { name: "学生(年)", type: "yearly", price: 5800 },
    { name: "個人(年)", type: "yearly", price: 10800 },
    { name: "ファミリー(年)", type: "yearly", price: 16800 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "YouTube Music",
  plans: [
    { name: "Free", type: "monthly", price: 0 },
    { name: "Premium Student", type: "monthly", price: 580 },
    { name: "Premium Individual", type: "monthly", price: 1080 },
    { name: "Premium Family", type: "monthly", price: 1680 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "Amazon Music",
  plans: [
　　{ name: "Prime Music（Prime会員特典）", type: "included", price: 0 },
    { name: "Unlimited Individual", type: "monthly", price: 1080 },
    { name: "Unlimited Individual(Prime)", type: "monthly", price: 980 },
    { name: "Unlimited Family", type: "monthly", price: 1680 },
    { name: "Unlimited Student", type: "monthly", price: 580 },
    { name: "Unlimited Single Device", type: "monthly", price: 580 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "LINE MUSIC",
  plans: [
    { name: "一般", type: "monthly", price: 1080 },
    { name: "学生", type: "monthly", price: 580 },
    { name: "ファミリー", type: "monthly", price: 1680 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},





{
  name: "Nintendo Switch Online",
  plans: [
    { name: "個人(月)", type: "monthly", price: 306 },
    { name: "個人(3か月)", type: "custom", price: 815 },
    { name: "個人(年)", type: "yearly", price: 2400 },
    { name: "ファミリー(年)", type: "yearly", price: 4500 },
    { name: "追加パック(個人)", type: "yearly", price: 4900 },
    { name: "追加パック(ファミリー)", type: "yearly", price: 8900 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "PlayStation Plus",
  plans: [
    { name: "Essential", type: "monthly", price: 850 },
    { name: "Extra", type: "monthly", price: 1300 },
    { name: "Premium", type: "monthly", price: 1550 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "Xbox Game Pass",
  plans: [
    { name: "Core", type: "monthly", price: 842 },
    { name: "Standard", type: "monthly", price: 1100 },
    { name: "PC Game Pass", type: "monthly", price: 990 },
    { name: "Ultimate", type: "monthly", price: 1450 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "FINAL FANTASY XIV",
  plans: [
    { name: "エントリー", type: "monthly", price: 1408 },
    { name: "スタンダード", type: "monthly", price: 1628 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},



{
  name: "ChatGPT",
  plans: [
    { name: "Free", type: "monthly", price: 0 },
    { name: "Plus", type: "monthly", price: 3000 },
    { name: "Pro", type: "monthly", price: 30000 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "Gemini",
  plans: [
    { name: "Free", type: "monthly", price: 0 },
    { name: "Google AI Pro", type: "monthly", price: 2900 },
    { name: "Google AI Ultra", type: "monthly", price: 36000 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},

{
  name: "iCloud+",
  plans: [
    { name: "50GB", type: "monthly", price: 150 },
    { name: "200GB", type: "monthly", price: 450 },
    { name: "2TB", type: "monthly", price: 1500 },
    { name: "6TB", type: "monthly", price: 4500 },
    { name: "12TB", type: "monthly", price: 9000 },
    { name: "自分で入力", type: "custom", price: 0 }
  ]
},
];
