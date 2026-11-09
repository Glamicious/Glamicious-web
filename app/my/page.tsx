import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import HtmlLang from "@/components/HtmlLang";

export const metadata: Metadata = {
  title: "Glamicious — သင့်အလှအတွက် အချိန်ကို လွယ်ကူစွာ ဘိုကင်လုပ်ပါ",
  description:
    "သင့်အနီးရှိ အကောင်းဆုံး အလှပြင်ဆိုင်များကို ရှာပါ။ အားလပ်ချိန်ကို ချက်ချင်းကြည့်ပြီး ဖုန်းဆက်စရာမလိုဘဲ ဘိုကင်လုပ်နိုင်ပါသည်။",
};

export default function HomeMyanmar() {
  return (
    <>
      <HtmlLang lang="my" />
      <HomePage locale="my" />
    </>
  );
}
