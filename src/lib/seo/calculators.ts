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
};
