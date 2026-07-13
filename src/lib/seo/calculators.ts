import type { ToolSeo } from './types';

export const seo: Record<string, ToolSeo> = {
  "/calculators/age": {
    title: "Age Calculator — Exact Age in Years, Months, Days",
    metaDescription: "Calculate your exact age in years, months, and days from your date of birth. Free online age calculator — instant, no signup.",
    keyword: "age calculator",
    intro: [
      "Find out your exact age in years, months, and days from your date of birth. Also shows total days, weeks, and hours lived — great for milestones and birthday planning.",
      "Everything runs in your browser — your date of birth is never stored or transmitted.",
    ],
    features: [
      "Years, months, and days breakdown",
      "Total days, weeks, and hours lived",
      "Next birthday countdown",
    ],
    faqs: [
      { q: "How is the age calculated?", a: "The calculator computes the difference between today and your date of birth using calendar-accurate year and month lengths." },
      { q: "Is my date of birth stored?", a: "No. The calculation happens entirely in your browser." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/bmi": {
    title: "BMI Calculator — Body Mass Index Free Online",
    metaDescription: "Calculate your BMI (Body Mass Index) from height and weight in metric or imperial. Free online BMI calculator with WHO category breakdown.",
    keyword: "BMI calculator",
    intro: [
      "Calculate your Body Mass Index (BMI) from your height and weight in metric (cm, kg) or imperial (ft/in, lb). The result includes the standard WHO category — underweight, healthy, overweight, or obese.",
      "BMI is a general screening tool, not a diagnosis. Consult a health professional for personalized advice.",
    ],
    features: [
      "Metric and imperial units",
      "WHO category with color coding",
      "Instant, no signup",
    ],
    faqs: [
      { q: "What is a healthy BMI?", a: "The WHO defines healthy adult BMI as 18.5 to 24.9. Anything outside is worth discussing with a doctor." },
      { q: "Is BMI accurate for everyone?", a: "BMI is a rough population measure. It can misclassify athletes with high muscle mass and doesn't account for body composition. Use it as a starting point, not a verdict." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/percentage": {
    title: "Percentage Calculator — Solve % Problems Free",
    metaDescription: "Calculate percentages, percentage change, and percent of a number instantly. Free online percentage calculator — no signup.",
    keyword: "percentage calculator",
    intro: [
      "Solve the three most common percentage problems in seconds: what is X% of Y, X is what percent of Y, and what's the percent change from X to Y. Perfect for discounts, tips, grades, and taxes.",
      "Everything runs in your browser — instant results as you type.",
    ],
    features: [
      "What is X% of Y",
      "X is what % of Y",
      "Percent change from X to Y",
    ],
    faqs: [
      { q: "How do I calculate a discount?", a: "For a 20% off $50 item: 20% of 50 = $10 off, final price $40. Use the 'X% of Y' mode." },
      { q: "How is percent change calculated?", a: "Percent change = ((new − old) / old) × 100. A negative result means a decrease." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/gst-vat": {
    title: "GST / VAT Calculator — Add or Remove Tax Free",
    metaDescription: "Add GST or VAT to any price, or remove it from a gross amount. Free online GST/VAT calculator — supports any rate, no signup.",
    keyword: "GST VAT calculator",
    intro: [
      "Add GST or VAT to a net price, or remove it from a gross price, at any rate. Useful for invoicing, receipts, and quick shopping math in the UK, EU, Australia, India, and beyond.",
      "Runs entirely in your browser with instant results.",
    ],
    features: [
      "Add or remove tax at any rate",
      "Shows net, tax amount, and gross side by side",
      "Works for GST, VAT, and any sales-tax percentage",
    ],
    faqs: [
      { q: "What's the difference between GST and VAT?", a: "GST (Goods and Services Tax) and VAT (Value Added Tax) work the same way — a consumption tax added at each stage. The name just varies by country." },
      { q: "Can I use it for any country's rate?", a: "Yes. Enter the rate that applies to your country (e.g. 20% UK VAT, 10% Australian GST, 18% Indian GST)." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/emi": {
    title: "EMI Calculator — Loan Payment & Interest Free",
    metaDescription: "Estimate monthly loan payments (EMI), total interest, and total repayment. Free online EMI calculator for home, car, and personal loans.",
    keyword: "EMI calculator",
    intro: [
      "Estimate your monthly loan payment (EMI), total interest, and total repayment for any loan. Works for home loans, car loans, personal loans, and student loans.",
      "Enter the principal, annual interest rate, and tenure — you'll see a clear amortization summary instantly.",
    ],
    features: [
      "Monthly EMI and interest breakdown",
      "Total interest and total repayment",
      "Works for any loan type and currency",
    ],
    faqs: [
      { q: "What is EMI?", a: "EMI stands for Equated Monthly Installment — the fixed monthly payment that covers both principal and interest until the loan is fully repaid." },
      { q: "How is EMI calculated?", a: "Using the standard formula: EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is principal, r is monthly interest rate, and n is number of months." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/currency-converter": {
    title: "Currency Converter — Live Exchange Rates Free",
    metaDescription: "Convert between world currencies with live exchange rates. Free online currency converter — no signup, updated daily.",
    keyword: "currency converter",
    intro: [
      "Convert between 150+ world currencies using up-to-date exchange rates. Perfect for travel budgeting, invoicing international clients, and comparing prices.",
      "Rates refresh regularly from public data sources.",
    ],
    features: [
      "150+ world currencies",
      "Live daily exchange rates",
      "Fast, mobile-friendly interface",
    ],
    faqs: [
      { q: "How current are the exchange rates?", a: "Rates refresh daily from a public rate source. For live-market trading rates, use a professional platform." },
      { q: "Are there any fees?", a: "No — this is a reference converter and does not process transactions or charge fees." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/length": {
    title: "Length Converter — Metric to Imperial Free",
    metaDescription: "Convert lengths between meters, feet, inches, kilometers, miles, and more. Free online length converter — instant, no signup.",
    keyword: "length converter",
    intro: [
      "Convert lengths between any common metric and imperial units — meters, kilometers, feet, inches, yards, miles, and more. Instant, precise, and mobile-friendly.",
      "All conversions run in your browser.",
    ],
    features: [
      "Metric ↔ imperial",
      "Includes mm, cm, m, km, in, ft, yd, mi",
      "Precise to many decimal places",
    ],
    faqs: [
      { q: "How accurate are the conversions?", a: "Conversions use exact factors (e.g. 1 inch = 25.4 mm) and are precise to the decimal you choose to display." },
      { q: "Can I convert historic units?", a: "The converter covers modern SI and imperial units. For obscure historic units, check a dedicated reference." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/weight": {
    title: "Weight Converter — kg, lb, oz, g Free Online",
    metaDescription: "Convert weight between kilograms, pounds, ounces, grams, and stones. Free online weight converter — instant results, no signup.",
    keyword: "weight converter",
    intro: [
      "Convert weight between kilograms, grams, pounds, ounces, and stones. Perfect for cooking, fitness, shipping, and everyday conversions.",
      "All conversions happen in your browser with high precision.",
    ],
    features: [
      "kg ↔ lb ↔ oz ↔ g ↔ st",
      "Precise, real-time results",
      "Works on any device",
    ],
    faqs: [
      { q: "How many pounds in a kilogram?", a: "One kilogram equals about 2.2046 pounds. This tool uses the exact factor." },
      { q: "Is this for weight or mass?", a: "In everyday use, weight and mass are treated the same. This converter uses mass units and the standard g / lb definitions." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/temperature": {
    title: "Temperature Converter — °C, °F, K Free Online",
    metaDescription: "Convert temperature between Celsius, Fahrenheit, and Kelvin. Free online temperature converter — instant, mobile-friendly, no signup.",
    keyword: "temperature converter",
    intro: [
      "Convert temperatures between Celsius, Fahrenheit, and Kelvin instantly. Perfect for cooking, science homework, weather, and international recipes.",
      "All conversions run in your browser.",
    ],
    features: [
      "°C ↔ °F ↔ K in real time",
      "Precise to any decimal you need",
      "Works on phone, tablet, and desktop",
    ],
    faqs: [
      { q: "How do I convert Celsius to Fahrenheit?", a: "Fahrenheit = (Celsius × 9/5) + 32. This tool does it automatically." },
      { q: "What is absolute zero?", a: "Absolute zero is 0 Kelvin, which equals −273.15°C or −459.67°F — the theoretical lowest possible temperature." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/binary-to-decimal": {
    title: "Binary to Decimal Converter — Free Online",
    metaDescription: "Convert binary numbers to decimal and back, plus hex and octal. Free online binary to decimal converter — instant, no signup.",
    keyword: "binary to decimal",
    intro: [
      "Convert numbers between binary, decimal, hexadecimal, and octal in one place. Great for computer science students, developers, and anyone learning number systems.",
      "All conversions happen in your browser — instant and precise.",
    ],
    features: [
      "Binary, decimal, hex, and octal",
      "Instant conversion as you type",
      "Handles large numbers accurately",
    ],
    faqs: [
      { q: "How do I convert binary to decimal by hand?", a: "Each binary digit represents a power of 2. Multiply each digit by its place value (from right: 1, 2, 4, 8, ...) and sum the results." },
      { q: "Is there a size limit?", a: "The tool handles very large numbers using arbitrary-precision arithmetic — well beyond what a 32- or 64-bit register can hold." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/tip": {
    title: "Tip Calculator — Split a Bill and Tip Fast Online",
    metaDescription: "Calculate tip and split any bill between people. Free online tip calculator with per-person total — instant, no signup, works on mobile.",
    keyword: "tip calculator",
    intro: [
      "Work out the tip on any bill and split the total between any number of people in seconds. Enter the bill, pick a tip percentage, choose how many people are paying, and you'll see the tip amount, the total, and each person's share.",
      "Perfect for restaurants, food delivery, bars, taxis, and any group outing where the math has to be done at the table.",
    ],
    features: [
      "Any tip percentage, common presets, and a slider",
      "Split between any number of people",
      "Per-person total updates live",
      "Works on any phone at the table",
    ],
    guide: `## What the Tip Calculator does\n\nThe tip calculator takes a bill amount, a tip percentage, and a number of people, and returns three numbers: the tip amount, the grand total (bill plus tip), and each person's share when the total is split evenly. Every field updates live, so you can adjust the tip up or down and watch the per-person total change immediately.\n\n## When to use it\n\n- Restaurants, especially when the group is larger than four and mental math starts to get error-prone.\n- Food delivery apps that don't calculate tip automatically.\n- Bars and cafés where you want to leave a specific dollar amount but figure the equivalent percentage.\n- Taxis and rideshares in countries where tipping is expected.\n- Any group activity where one person paid and the rest owe them.\n\n## Step-by-step\n\n**1. Enter the bill amount.** Include tax if the tip is calculated on the total; exclude tax if you tip on the pre-tax amount only (see the tipping conventions section below).\n\n**2. Pick a tip percentage.** Common defaults: 15% for adequate service, 18% for good service, 20% for great service in the US. Use the slider or type an exact figure for anything else.\n\n**3. Enter the number of people.** The default is one; increase it to split the total evenly across the group.\n\n**4. Read the three numbers.** Tip amount, grand total, per-person share. Copy or note the per-person figure and settle up.\n\n## Tipping conventions around the world\n\nTipping norms vary dramatically by country. A few useful starting points:\n\n- **United States, Canada.** 15–20% expected at sit-down restaurants; 10% on delivery; 15–20% on taxis. Servers depend on tips as a large share of income.\n- **United Kingdom, Ireland.** 10–15% at restaurants if service charge isn't already on the bill. Check before adding — many restaurants pre-add 12.5% for larger tables.\n- **Continental Europe.** 5–10% is generous; round up the bill to the next round number for casual service.\n- **Japan, South Korea.** No tipping. Attempting to tip is often awkward or refused.\n- **Australia, New Zealand.** Tipping is optional. 10% for exceptional service in nicer restaurants is generous.\n\n## Tip on pre-tax or post-tax?\n\nIt depends where you are. In the US, tipping on the pre-tax subtotal is technically the norm but tipping on the after-tax total is common and unremarkable. In countries where the bill includes VAT, most people tip on the total as shown. If in doubt, tip on the whole bill — the extra amount is small and generosity is rarely regretted.\n\n## Splitting unevenly\n\nThis calculator splits evenly. When the group ate very different amounts and wants to pay proportionally, the fair approach is: each person pays their own subtotal, then tip and tax are split proportionally (each person's share of the subtotal is their share of the tip). Do the subtotal split by hand and use the calculator for each person's share of the tip.\n\n## Tips\n\n- **Round up** the per-person share to the nearest whole number if the group is settling in cash. Servers appreciate the tidier tip.\n- **Add a couple of extra dollars** for excellent service on a small bill — 20% of a $10 breakfast is $2, which is often too little for a barista who was actually great.\n- **Share the calculator** by handing your phone around the table — it's the fastest way for everyone to agree on the numbers.\n\n## Privacy\n\nNothing is uploaded. All math runs in your browser.`,
    faqs: [
      { q: "What is a standard tip percentage?", a: "In the US, 15–20% is standard for sit-down service. In much of Europe, 5–10% is generous; in Japan and South Korea, tipping is not expected." },
      { q: "Should I tip on the pre-tax or post-tax total?", a: "Both are common. In the US, tipping on the pre-tax subtotal is the technical norm but many people tip on the post-tax total — the difference is small and either is polite." },
      { q: "Can I split the bill unevenly?", a: "This calculator splits the total evenly across the number of people. For uneven splits, calculate each person's subtotal first, then use the calculator on each individual amount." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
    ],
  },
  "/calculators/discount": {
    title: "Discount Calculator — Sale Price & Savings Online Free",
    metaDescription: "Work out the final price and how much you save on any discount percentage. Free online discount calculator — instant results, no signup.",
    keyword: "discount calculator",
    intro: [
      "Work out the sale price of any item and see exactly how much you save. Enter the original price and the discount percentage — the calculator returns the amount saved and the final price you'll actually pay.",
      "Perfect for shopping, retail pricing, coupon stacking, and any moment when you want to know whether a sale is actually a good deal.",
    ],
    features: [
      "Original price, discount %, final price, savings — all live",
      "Works for any currency",
      "Optional stacking to combine multiple discounts",
      "Mobile-friendly for use in-store",
    ],
    guide: `## What the Discount Calculator does\n\nThe discount calculator takes an original price and a discount percentage and returns two things: the amount you save, and the final price after the discount is applied. It works with any currency, any percentage from 0 to 100, and updates live as you type — perfect for evaluating a sale before you decide to buy.\n\n## When to use it\n\n- Comparing "20% off" against "25% off" on two competing items.\n- Working out a coupon's real value when the sticker price is already discounted.\n- Deciding whether a bundle deal beats the sum of individual sale prices.\n- Setting retail prices with a target margin after a promotional discount.\n- Checking that a "buy one get one 50% off" actually delivers the discount the sign promises.\n\n## Step-by-step\n\n**1. Enter the original price.** The pre-discount sticker price of the item, without tax.\n\n**2. Enter the discount percentage.** Any number between 0 and 100.\n\n**3. Read the two numbers.** *Savings* shows how much money the discount takes off. *Final price* shows what you'll actually pay before tax.\n\n**4. Compare offers.** Repeat the calculation for each candidate item and pick the one with the lowest final price — not the highest headline discount.\n\n## The math, in plain English\n\n- **Savings** = original price × (discount percentage ÷ 100).\n- **Final price** = original price − savings.\n\nSo a $80 shirt with 25% off saves you $20 and costs you $60. Easy to do in your head with round numbers; awkward with real-world prices like $47.99 at 37% off. That's what the calculator is for.\n\n## Stacked discounts\n\nWhen two discounts stack (a store-wide 20% sale plus a 10% coupon), they don't simply add to 30%. The second discount applies to the *already-discounted* price. So $100 with 20% off is $80; another 10% off is $8 more, for a final price of $72 — a total effective discount of 28%, not 30%. Whenever two or more discounts stack, calculate them one at a time in sequence, not by adding the percentages.\n\n## Discount versus markup — different math\n\nDiscount and markup use the same word "percent" but different bases. A 50% markup on a $10 wholesale item is $15 retail. A 50% discount off a $15 retail item is $7.50 — not $10. Retailers care about this because they set prices by markup and advertise them by discount, and the two calculations don't cancel out. If you're pricing, use a markup calculator, not this one.\n\n## Tips for smarter shopping\n\n- **Compare final prices, not discount percentages.** A 40% discount on a jacket that started 30% overpriced still leaves you paying more than the honest competitor's 10% off.\n- **Check the reference price.** "Was $200" is only a real anchor if the item ever actually sold at $200. Search the item to spot inflated "original" prices.\n- **Watch for minimum spend.** A "20% off orders over $100" coupon is worthless if you're spending $80 — unless the extra item is something you actually want.\n\n## Privacy\n\nAll calculations run in your browser. Nothing is uploaded, and no purchase data is captured.`,
    faqs: [
      { q: "How do stacked discounts work?", a: "They don't add. A 20% discount plus a 10% coupon on a $100 item costs $72, not $70 — the second discount applies to the already-discounted price. Always calculate them one at a time in sequence." },
      { q: "Should I include tax in the original price?", a: "Enter the pre-tax price. Discounts almost always apply before tax, and mixing them in makes the math wrong." },
      { q: "What's the difference between discount and markup?", a: "Markup is applied to the wholesale cost to get the retail price. Discount is applied to the retail price to get the sale price. The two use the same word 'percent' but different starting points." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
    ],
  },
};
