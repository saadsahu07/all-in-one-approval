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
    guide: `## What the age calculator does

Enter a birth date and the calculator tells you the exact age in years, months, and days — plus useful extras like total days lived, upcoming birthday countdown, and the day of the week you were born. Great for filling in forms that need an exact age, calculating age gaps, or working out how old someone will be on a specific future date.

## Step-by-step

**1. Enter the birth date.** Use the date picker or type the date directly.

**2. Optionally set a target date.** Defaults to today; change it to calculate age at any past or future date (useful for policy eligibility, retirement planning, or "how old will I be in 2030?" questions).

**3. Read the result.** Years, months, days, and total days between the two dates appear immediately.

## Common uses

- **Government forms** that ask for exact age at a specific date.
- **Retirement planning** — how many years, months, and days until you hit 65 (or 60, or whichever milestone matters).
- **Family record-keeping** — the ages of everyone at a wedding photo or reunion.
- **Sports eligibility** where age categories are defined precisely.
- **Insurance premiums** which often depend on age at policy start date to the day.

## Age gap calculations

To find the gap between two people, run the calculator twice against a common reference date (today works fine) and subtract. Or use the target-date field: enter person A's birth date and set the target to person B's birth date — the result is the exact difference between the two.

## Tips

- **Watch time zones** for births near midnight. The calculator uses local time; if the person was born in a different time zone, the calendar date may shift.
- **Leap years are handled correctly.** Someone born on 29 February gets aged one year on 28 February in non-leap years by convention.
- **Copy the result** into any form — total days is often what fitness, insurance, and medical records ask for.

## Privacy

Everything runs in your browser. No dates are stored or logged.`,
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
    guide: `## What BMI is (and isn't)

Body Mass Index divides your weight by the square of your height. It's a rough population-level indicator of whether you're in a healthy weight range for your height. It says nothing about body composition — muscle weighs more than fat, so athletes routinely score in the "overweight" range while being extremely fit. Use BMI as one data point among many, not a verdict.

## What this tool does

Calculates BMI from height and weight in metric or imperial units and shows which of the standard categories you fall into: underweight, healthy, overweight, or obese. Also shows the healthy weight range for your height.

## Step-by-step

**1. Pick units.** Metric (kg, cm) or imperial (lb, in).

**2. Enter height and weight.** Use the values you'd give at a doctor's appointment.

**3. Read the result.** BMI value, category, and healthy weight range for your height.

## The standard categories

- **Under 18.5** — underweight.
- **18.5 – 24.9** — healthy range.
- **25.0 – 29.9** — overweight.
- **30.0 and above** — obese (with sub-categories at 35 and 40 for clinical use).

These bands are based on population studies of white, middle-aged adults. Different ethnic populations have different risk thresholds; people of South Asian descent, for example, face weight-related health risks at lower BMI values than the standard categories suggest.

## What BMI misses

- **Muscle mass.** Bodybuilders and athletes routinely score "overweight" or "obese" while carrying very little fat.
- **Body fat distribution.** Two people with identical BMIs face very different health risks if one carries fat around the waist and the other around the hips.
- **Age.** Older adults often benefit from being at the higher end of "healthy" or slightly into "overweight."
- **Children.** Adult BMI categories don't apply to under-18s; paediatric charts use age-and-sex-specific percentiles.

## Better metrics to pair with BMI

- **Waist circumference.** A waist above 94 cm (37 in) for men or 80 cm (31.5 in) for women indicates elevated risk regardless of BMI.
- **Waist-to-height ratio.** Keep your waist below half your height.
- **Body composition** measured by a scan or a decent smart scale.

## Privacy

Everything runs in your browser. No measurements are stored.`,
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
    guide: `## What the percentage calculator does

Percentages come up constantly — tips, discounts, taxes, tips, grades, growth rates, commissions — and the mental math is easy to get wrong when the numbers aren't round. This calculator handles the three most common percentage questions in a single interface:

- **What is X% of Y?** (e.g. what is 15% of 240)
- **X is what percent of Y?** (e.g. 30 is what percent of 240)
- **What percent has X changed to Y?** (e.g. from 200 to 250 is a 25% increase)

## Step-by-step

**1. Pick which question you're asking.** The tool shows three input rows; use whichever matches your problem.

**2. Type the numbers.** Results update as you type.

**3. Copy the answer** or take a screenshot for reference.

## Everyday examples

- **Tip and service:** 18% of £42.30 = £7.61.
- **Sales tax:** if a receipt shows $87 including 8.5% tax, the pre-tax amount is 87 ÷ 1.085 = $80.18.
- **Test scores:** 47 out of 60 is 78.3%.
- **Growth:** revenue up from £120k to £147k is a 22.5% increase.
- **Discounts:** an item marked from $199 to $149 is 25.1% off.

## Percentage points vs percent

If interest rates go from 4% to 6%, that's a rise of **2 percentage points** — but a **50% increase** relative to the starting value. News headlines mix these up constantly. When a number is expressed as a percentage of another percentage, be explicit about which base you mean.

## Compounding percentages

Two 10% discounts stacked don't give you 20% off. The second discount applies to the already-discounted price, so the effective total is 19%. When you multiply percentages, work them one after another, not by adding.

## Tips

- **Round late, not early.** If you round intermediate results, error accumulates. Keep decimals through the calculation, round only the final answer.
- **Sanity-check the direction.** Percentage-change answers should have the sign you expect. If revenue went from 100 to 80 and the tool says +25%, you asked the wrong question.

## Privacy

All calculations happen in your browser.`,
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
    guide: `## What GST and VAT are

Goods and Services Tax (GST) and Value Added Tax (VAT) are the same idea under different names: a consumption tax added to most goods and services at each stage of production, with the final consumer bearing the cost. Countries use different rates — 5% in Canada, 10% in Australia, 17% in Pakistan, 20% in the UK — but the math is identical.

## What this tool does

Calculates GST or VAT in both directions:

- **Add tax:** enter the pre-tax price and the rate; get the tax amount and the tax-inclusive total.
- **Remove tax:** enter the tax-inclusive price and the rate; get the tax amount and the pre-tax price.

## Step-by-step

**1. Pick a direction.** Adding tax or removing it.

**2. Enter the amount.** Pre-tax if adding, tax-inclusive if removing.

**3. Enter the tax rate.** Whatever applies in your country or state.

**4. Read the two figures** — tax portion and the other price.

## Common uses

- **Invoicing.** Charge a customer $500 excluding tax, add 10% GST, invoice for $550.
- **Expense claims.** A receipt shows £120 including 20% VAT — the deductible tax portion is £20 and the net cost is £100.
- **Product pricing.** Set a shelf price of $99 including 10% GST, so the ex-tax revenue you keep is $90.
- **Cross-border comparison.** Compare a €150 European price (VAT-inclusive) with a $150 US price (tax-added at checkout) on a like-for-like basis.

## The math, in plain English

- **Tax added:** tax = amount × rate ÷ 100. Total = amount + tax.
- **Tax removed:** net = amount ÷ (1 + rate ÷ 100). Tax = amount − net.

The removing-tax formula is the one people most often get wrong. A £120 price at 20% VAT is *not* £96 (which is £120 minus 20% of £120). It's £100 — because the £120 is 120% of the pre-tax amount, so divide by 1.20.

## Tips

- **Match the rate to what applies at the point of sale.** Different regions and product categories have different rates (books at 5%, essentials at 0%, standard goods at the full rate).
- **Keep tax and net figures separate on invoices.** Any accounting system will need both, and combining them makes the return harder to file.
- **For B2B sales, verify tax registration.** In many jurisdictions, sales to registered businesses in the same country are still taxed; sales to businesses in another country may be zero-rated. Rules vary — consult a local guide.

## Privacy

Calculations run in your browser.`,
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
    guide: `## What an EMI is

Equated Monthly Installment (EMI) is the fixed amount you pay each month on a loan — combining principal and interest into one predictable payment. Auto loans, home loans, personal loans, and most consumer credit use EMIs so borrowers know exactly what to budget every month for the entire loan term.

## What this tool does

Given a loan amount, interest rate, and tenure, calculates the monthly EMI, the total interest you'll pay over the life of the loan, and the total amount repaid. Also shows how much of each early payment goes to interest vs principal — a critical detail borrowers rarely see up front.

## Step-by-step

**1. Enter the loan amount.** The principal — how much you're actually borrowing.

**2. Enter the annual interest rate.** Use the nominal APR the lender quoted.

**3. Enter the tenure.** In years or months; the calculator handles both.

**4. Read the results.** Monthly EMI, total interest, total repayment, and a breakdown of principal vs interest across the loan term.

## The math, in plain English

EMI is calculated with the standard amortization formula:

*EMI = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)*

Where **P** is principal, **r** is the monthly interest rate (annual ÷ 12 ÷ 100), and **n** is the number of monthly payments. You don't need to compute this by hand — but understanding what the formula does helps explain why longer tenures cost dramatically more in total interest.

## The hidden cost of long tenures

Extending a $30,000 auto loan from 4 to 7 years cuts the monthly payment noticeably — but nearly doubles the total interest paid. In the first year of a long loan, most of each payment is interest and almost none reduces the principal. Any calculator you use should make this trade-off obvious; use the total-interest number to compare loans, not just the monthly EMI.

## Prepayment can save huge amounts

Paying an extra $100 per month against a $200,000 mortgage at 6% can cut the loan term by five years or more and save tens of thousands in interest. Most lenders allow prepayment without penalty — check your loan agreement.

## Tips for smart borrowing

- **Compare total interest across loan offers**, not just the interest rate. A lower rate with fees or a longer tenure can be more expensive overall.
- **Aim for EMIs under 30–40% of monthly income.** Higher ratios leave no margin for emergencies.
- **Fixed vs floating rate.** Fixed rates are predictable; floating rates are cheaper on average but expose you to hikes. Pick based on how much predictability you value.
- **Refinance if rates drop.** A one-percentage-point drop on a large loan usually pays back the refinance cost within a year.

## Privacy

Calculations run in your browser.`,
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
    guide: `## What the currency converter does

Converts between world currencies using exchange rates that update regularly. Enter an amount in any supported currency, pick a target currency, and read the converted value. Use it for travel budgeting, invoicing international clients, comparing prices across regions, or estimating what a purchase will cost on your bank statement.

## Step-by-step

**1. Enter an amount** in whichever currency you have or are quoted.

**2. Pick the source currency.**

**3. Pick the target currency.**

**4. Read the converted amount** and the exchange rate used.

## What the rate means

The rate shown is the mid-market rate — the middle point between buy and sell prices in the wholesale currency market. It's the fair rate before anyone takes a cut. Banks, cards, and exchange bureaus all charge a margin on top of this. Expect a real-world exchange to cost 0.5%–3% more than the mid-market rate depending on where you exchange.

## Common uses

- **Travel budgeting.** Estimate what a hotel or restaurant price will cost you back home.
- **International invoicing.** Quote a client in their currency using the current rate.
- **Comparing product prices.** A gadget for $299 in the US vs €329 in Germany — which is cheaper today?
- **Salary comparisons** when considering a job in another country.
- **Bank statement decoding** when a foreign transaction posts and you want to check the rate you were charged.

## Where you'll pay more than the shown rate

- **ATMs abroad** — most add a per-withdrawal fee plus a currency margin.
- **Credit cards without a no-foreign-transaction-fee benefit** — typically 2-3% margin.
- **Airport currency booths** — often 5–10% worse than the mid-market rate.
- **PayPal and similar** — sometimes 3–4% margin on top of the market rate.

## Where you'll pay close to the rate

- **Multi-currency accounts** (Wise, Revolut, Payoneer) — typically 0.3-1% margin.
- **Cards marketed as no-foreign-transaction-fee** paired with a bank that uses the interbank rate.
- **Trading platforms** for large transfers.

## Tips

- **Convert at the moment of purchase**, not the day before or after. Rates move minute-by-minute.
- **For large transfers, get a quote in advance** rather than relying on the current mid-market rate — the actual delivered rate for a large sum is usually better than the ATM rate.
- **Round for planning, not for accounting.** A rough conversion is fine for a trip budget; use exact rates for anything you'll file.

## Privacy

Conversions run in your browser using the loaded rate table. No transaction data is captured.`,
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
    guide: `## What the length converter does

Converts between metric and imperial units of length: millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles. Enter a value in any unit and read equivalent values in every other unit at once.

## Step-by-step

**1. Enter a value** in whichever unit you have.

**2. Pick the source unit.**

**3. Read the equivalent** in every supported unit. Copy whichever one you need.

## Everyday conversions worth memorising

- **1 inch = 2.54 cm** (exact by definition).
- **1 foot ≈ 30.48 cm.**
- **1 yard = 3 feet ≈ 0.914 m.**
- **1 mile ≈ 1.609 km.**
- **1 meter ≈ 39.37 inches ≈ 3.28 feet.**
- **1 km ≈ 0.621 miles.**

Rough head-math: multiply miles by 1.6 for km, or divide km by 1.6 for miles. Multiply meters by 3.3 for feet.

## Common uses

- **Buying furniture** from a foreign catalogue — a 60-inch sofa is 1.52 meters.
- **Travel** where road signs use unfamiliar units — a 100 km drive is 62 miles.
- **DIY and construction** projects where plans are in one system and materials are sold in another.
- **Running and cycling** — a 10 km race is 6.2 miles; a marathon is 42.2 km.
- **Aviation and marine** distances traditionally in nautical miles (1 nautical mile = 1.852 km).

## The pitfalls of unit confusion

Unit mix-ups have caused real disasters, from the Mars Climate Orbiter (destroyed in 1999 by a pound-force vs newton mix-up in a small thruster calculation) to smaller-scale construction errors where mixed metric and imperial plans produced parts that didn't fit. When you convert, label the result with the unit. Never write down a bare number and rely on memory to attach the right suffix later.

## Tips

- **Convert once and store the result** with the unit. Rounding twice loses precision.
- **Use the exact definitions** (1 inch = exactly 2.54 cm) when your calculation matters — the approximations are fine for daily life but wrong at engineering precision.
- **For very small or very large distances** switch units accordingly: microns for machining, kilometers or miles for driving, light-years for astronomy.

## Privacy

Conversion happens in your browser.`,
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
    guide: `## What the weight converter does

Converts between the units of mass and weight people actually use day-to-day: milligrams, grams, kilograms, tonnes, ounces, pounds, and stones. Enter a value in any unit and read every equivalent at once. (Technically these are units of mass, not weight — the difference matters in physics but not in the kitchen or the gym.)

## Step-by-step

**1. Enter a value** in whichever unit you have.

**2. Pick the source unit.**

**3. Read the equivalents** in every supported unit.

## Conversions worth memorising

- **1 kg ≈ 2.205 lb.**
- **1 lb ≈ 0.454 kg.**
- **1 oz ≈ 28.35 g.**
- **1 stone = 14 pounds ≈ 6.35 kg** (used in the UK for body weight).
- **1 metric tonne = 1000 kg ≈ 2205 lb.**

Rough head-math: double kg and add 10% for pounds. Halve pounds and subtract 10% for kg.

## Common uses

- **Cooking** where a recipe is in ounces but your scale reads grams.
- **Fitness tracking** where a scale reads one unit and the app you log to expects another.
- **Shipping** where declared weight determines cost — often to the gram.
- **Baby weight** at appointments (kilograms in most of the world, pounds and ounces in the US and UK).
- **Sports** where weight classes are defined in specific units.

## Beware two different pounds

There are historically several definitions of the pound. Modern usage almost always means the international avoirdupois pound (exactly 0.45359237 kg), which is what this tool uses. Recipes and older references occasionally use the troy pound (used for precious metals, 373.24 g) or the pound-force (a unit of force, not mass). Unless you're weighing gold or doing physics, assume avoirdupois.

## Grams vs mL

Weight and volume are different things. 1 mL of water weighs 1 g, but 1 mL of honey weighs about 1.4 g and 1 mL of oil weighs about 0.92 g. Recipes calling for weight (grams) are more precise than those calling for volume (cups, mL) because different ingredients have different densities. Weigh, don't measure by volume, whenever you want consistent baking results.

## Tips

- **Zero (tare) your scale** before each measurement to avoid compounding the weight of the container.
- **Round for cooking, not for shipping.** A gram matters when postage is priced to the ounce.
- **Convert once, store the result** rather than re-converting each time.

## Privacy

Conversion runs in your browser.`,
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
    guide: `## What the temperature converter does

Converts between Celsius, Fahrenheit, and Kelvin — the three temperature scales you'll encounter in daily life, cooking, weather, and science. Enter a value in any scale and read equivalents in the others.

## Step-by-step

**1. Enter a value** in whichever scale you have.

**2. Pick the source scale.**

**3. Read the equivalents.**

## The three scales

- **Celsius (°C).** Water freezes at 0°C, boils at 100°C. Used by every country except the US, the Bahamas, the Cayman Islands, and Liberia.
- **Fahrenheit (°F).** Water freezes at 32°F, boils at 212°F. Used in the US for weather, cooking, and body temperature.
- **Kelvin (K).** Same size step as Celsius, but zero is absolute zero (−273.15°C). Used in science; note no degree sign.

## The formulas

- **°C to °F:** multiply by 9/5, add 32.
- **°F to °C:** subtract 32, multiply by 5/9.
- **°C to K:** add 273.15.
- **K to °C:** subtract 273.15.

Head-math shortcut for weather-range Celsius to Fahrenheit: double the Celsius value and add 30. It's not exact — 20°C is really 68°F, not 70°F — but close enough to tell whether you need a jacket.

## Reference points worth knowing

- **−40** — Celsius and Fahrenheit meet here. The only temperature where the two numbers match.
- **0°C / 32°F** — water freezes.
- **20°C / 68°F** — comfortable room temperature.
- **37°C / 98.6°F** — normal body temperature.
- **100°C / 212°F** — water boils at sea level.
- **180°C / 356°F** — a moderate oven for baking.
- **200°C / 400°F** — a hot oven for roasting.

## Common uses

- **Cooking** where a recipe uses one scale and your oven displays another.
- **Weather** when travelling to or from the US.
- **Body temperature** — the difference between "warm" and "medically feverish" is small, and matters more than the scale you use to describe it.
- **Science homework** where all three scales might appear in one problem.
- **Industrial and lab settings** where a controller or datasheet uses Kelvin.

## Tips

- **Don't over-round oven temperatures.** A recipe calling for 180°C wants a moderate oven; 356°F is precisely equivalent but 350°F is what your oven dial actually reads and works fine.
- **Body temperature precision matters.** A single degree Celsius is nearly two degrees Fahrenheit. When talking about fevers, use the same scale as whoever you're comparing to.

## Privacy

Conversion runs in your browser.`,
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
    guide: `## What binary-to-decimal conversion does

Computers store numbers in binary — base 2, using only 0 and 1. Humans read numbers in decimal — base 10, using 0 through 9. Converting between them lets you read register values, memory dumps, network masks, permission bits, and any other place binary shows up in source code, hardware docs, or debugging output.

## Step-by-step

**1. Enter a value** in either binary or decimal.

**2. Read the converted value** in the other base. Hex and octal are usually shown alongside for reference.

**3. Copy the result** into your code, config, or notes.

## The mechanics, briefly

Each digit in a binary number represents a power of 2. Rightmost bit is 2⁰ (1), next is 2¹ (2), then 2² (4), 2³ (8), and so on. To convert binary to decimal, add up the powers of 2 corresponding to each 1 bit. So *1011* is 8 + 0 + 2 + 1 = 11 in decimal.

Decimal to binary is the reverse: repeatedly divide by 2 and read the remainders bottom-up. 11 ÷ 2 = 5 remainder 1; 5 ÷ 2 = 2 r 1; 2 ÷ 2 = 1 r 0; 1 ÷ 2 = 0 r 1 → binary *1011*.

## Where binary shows up

- **Bitmasks and flags.** A single byte can store 8 boolean values as bits. Reading or setting them requires binary awareness.
- **File permissions on Unix.** 755 in octal is 111 101 101 in binary — read/write/execute for owner, read/execute for group and others.
- **Network masks.** A /24 subnet is 24 leading 1 bits in a 32-bit binary number.
- **Hardware registers.** Datasheets specify individual bits' meaning; you have to read the register value in binary to interpret them.
- **Color values.** #FFAA00 in hex is a bit pattern that also has a meaningful binary form.

## Common bases you'll see beside binary

- **Hexadecimal (base 16)** uses 0–9 and A–F. Each hex digit is exactly 4 binary bits, so hex is a much more compact way to write binary.
- **Octal (base 8)** uses 0–7. Each octal digit is exactly 3 binary bits. Common in Unix file permissions and older systems.
- **Decimal (base 10)** is what humans read by default.

## Tips

- **Group binary in 4-bit chunks** for readability. *10110001* reads more easily as *1011 0001*.
- **Use hex, not binary, for anything longer than a byte.** Human eyes can compare hex faster than binary.
- **Watch for endianness** when reading multi-byte values from memory dumps — a 32-bit integer may appear byte-reversed depending on the platform.

## Privacy

Conversion runs in your browser.`,
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
  "/calculators/area": {
    title: "Area Calculator — Square, Rectangle, Circle & More",
    metaDescription: "Calculate the area of squares, rectangles, triangles, circles, and trapezoids online. Free, instant, no signup — works on any device.",
    keyword: "area calculator",
    intro: [
      "Work out the area of any common shape in seconds. Pick the shape, enter the dimensions, and read the result in square meters, square feet, or any unit you like.",
      "Ideal for flooring, painting, gardening, DIY projects, homework, and any moment you need square footage without pulling out a formula sheet.",
    ],
    features: [
      "Squares, rectangles, triangles, circles, trapezoids, and parallelograms",
      "Mixed units — enter feet or meters, get square feet or square meters",
      "Live result as you type",
      "Works offline once the page loads",
    ],
    guide: `## What the Area Calculator does

Enter dimensions for the shape you're measuring and the calculator returns its area. It supports the six shapes you'll actually encounter in everyday work: squares, rectangles, triangles, circles, trapezoids, and parallelograms. Enter numbers in feet, meters, inches, or centimeters — the answer comes back in the matching square unit.

## When you'll reach for it

- **Flooring and tile.** Multiply length by width to know how many square feet of vinyl, hardwood, or tile you need to order — plus a 10% waste allowance.
- **Painting.** Wall area (minus doors and windows) tells you how much paint to buy. A gallon covers roughly 350 square feet, two coats.
- **Gardening and landscaping.** Lawn area drives seed, fertilizer, and mulch quantities.
- **Real estate.** Room and floor areas for listings or renovation quotes.
- **Homework.** Geometry problems where the formula is the whole point.

## Step-by-step

**1. Pick the shape.** Match your object to the closest supported shape. An L-shaped room is two rectangles — measure each and add.

**2. Enter the dimensions.** Length and width for a rectangle. Base and height for a triangle. Radius for a circle. Both parallel sides plus height for a trapezoid. Any unit works.

**3. Read the area.** The result updates live as you type. Round to a sensible precision for real-world use — you rarely need more than one decimal place for flooring or paint.

## The formulas, briefly

- **Rectangle / square:** length × width.
- **Triangle:** ½ × base × height.
- **Circle:** π × radius².
- **Parallelogram:** base × perpendicular height.
- **Trapezoid:** ½ × (a + b) × height, where a and b are the parallel sides.

## Tips

- **Measure twice.** A 2% measurement error becomes a 4% area error — enough to leave you short on tile.
- **Add a waste allowance** of 10% for flooring and tile, 15% for patterned materials, and 20% for diagonal or complex layouts.
- **Split odd shapes** into rectangles and triangles you can measure, then add.

## Privacy

Calculation runs in your browser. Nothing is uploaded.`,
    faqs: [
      { q: "Which shapes does it support?", a: "Squares, rectangles, triangles, circles, parallelograms, and trapezoids — the six shapes you actually encounter in DIY, flooring, painting, and homework." },
      { q: "Can I use feet and meters together?", a: "Enter every dimension in the same unit. The area comes back in that unit squared — square feet if you entered feet, square meters if you entered meters." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/compound-interest": {
    title: "Compound Interest Calculator — Free Online Growth Tool",
    metaDescription: "Calculate compound interest on savings and investments with monthly contributions. Free online tool with yearly breakdown — no signup.",
    keyword: "compound interest calculator",
    intro: [
      "See how your savings grow with compound interest. Enter your starting balance, monthly contribution, interest rate, and time frame, and the calculator returns the final value plus a year-by-year growth chart.",
      "Perfect for planning retirement savings, education funds, or any long-term investment where compounding is doing most of the heavy lifting.",
    ],
    features: [
      "Initial deposit plus optional monthly contribution",
      "Any compounding frequency: daily, monthly, quarterly, annually",
      "Year-by-year breakdown of principal, interest, and total",
      "Works in any currency",
    ],
    guide: `## What the Compound Interest Calculator does

Enter a starting balance, an annual interest rate, the number of years you'll leave the money invested, and an optional monthly contribution. The calculator returns the final balance and shows how much of that balance is your own contributions versus interest earned on interest.

## Why compound interest matters

Simple interest pays a fixed amount every year based on the original balance. Compound interest pays interest on the interest already earned — so the balance grows faster each year. Over 30 or 40 years, this snowball is the single biggest driver of long-term wealth for most people who invest steadily rather than picking hot stocks.

An example: $10,000 at 7% annual return, no contributions.

- After 10 years: $19,672
- After 20 years: $38,697
- After 30 years: $76,123
- After 40 years: $149,745

Most of the balance after year 20 is interest earned on previously earned interest, not the original $10,000.

## Step-by-step

**1. Enter your starting balance.** The lump sum you're investing today. Zero is fine if you're starting from scratch.

**2. Enter monthly contribution.** How much you'll add every month. Even $100/month compounds into a meaningful number over decades.

**3. Enter the annual interest rate.** Use the expected long-term return of the investment: around 4–5% for a bond portfolio, 7–10% for a diversified stock portfolio in nominal terms.

**4. Enter the number of years.** For retirement planning, use the number of years until you retire.

**5. Read the results.** The final balance shows total value. The chart shows how principal and interest grow year by year — the gap between them widens dramatically after year 15 or so.

## The formula

For an initial balance P with rate r compounded n times per year for t years, the balance is P × (1 + r/n)^(n×t). Adding a monthly contribution modifies this into a future-value-of-annuity calculation. The calculator handles both automatically.

## Tips

- **Start early.** A 25-year-old who saves $200/month until 65 at 7% ends up with roughly the same balance as a 35-year-old saving $450/month until 65.
- **Use real returns for planning.** Subtract expected inflation (~3%) from your nominal rate to plan in today's dollars.
- **Reinvest dividends.** The whole point of compounding requires you to leave every dollar in the account.

## Privacy

All calculations run locally in your browser.`,
    faqs: [
      { q: "What compounding frequency should I use?", a: "For most stock and index-fund investments, monthly compounding is a close approximation. Savings accounts often compound daily. The difference between monthly and daily compounding over decades is small." },
      { q: "Should I use nominal or real interest rate?", a: "Use nominal (pre-inflation) rates for a headline number. Use real (inflation-adjusted, typically 3% lower) rates to plan in today's purchasing power." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/data-storage": {
    title: "Data Storage Converter — Bytes, KB, MB, GB, TB",
    metaDescription: "Convert between bytes, kilobytes, megabytes, gigabytes, and terabytes online. Free data storage calculator — decimal and binary units.",
    keyword: "data storage converter",
    intro: [
      "Convert between bytes, KB, MB, GB, TB, and PB in either decimal (1000-based) or binary (1024-based) units. Enter a value and every unit updates live.",
      "Useful for sizing backups, estimating cloud storage costs, planning file transfers, and translating between the two competing storage conventions.",
    ],
    features: [
      "All common units from bytes to petabytes",
      "Decimal (KB) and binary (KiB) modes",
      "Live conversion in every unit",
      "Copy any result with one click",
    ],
    guide: `## What the Data Storage Converter does

Enter a size in any unit — bytes, kilobytes, megabytes, gigabytes, terabytes, or petabytes — and every other unit updates instantly. Switch between decimal (1 KB = 1000 bytes) and binary (1 KiB = 1024 bytes) modes to match whichever convention the software you're working with uses.

## Why two systems exist

Historically, storage was measured in binary units because computer memory is addressed in powers of 2 (2¹⁰ = 1024 ≈ 1000). Everyone called this "1 KB" for decades. Then hard drive manufacturers standardized on decimal units (1 KB = 1000 bytes) because it made drives sound bigger. Since 1998, IEC has recommended using KiB, MiB, GiB for binary and reserving KB, MB, GB for decimal.

In practice:

- **Storage vendors, network speeds, cloud pricing:** decimal. A "1 TB" hard drive is 1,000,000,000,000 bytes.
- **Operating systems (Windows, sometimes Linux):** binary but labeled with decimal names. Windows says a 1 TB drive is "931 GB" — that's actually 931 GiB.
- **macOS and modern Linux tools:** decimal.
- **RAM:** always binary. "16 GB of RAM" is 16 × 2³⁰ bytes.

This is why your "1 TB" drive shows up as 931 GB in Windows — same bytes, different labels.

## Step-by-step

**1. Pick decimal or binary mode.** Decimal matches storage vendors and cloud bills. Binary matches operating system reporting and RAM.

**2. Enter a value in any unit.** The other units update live.

**3. Copy the result.** One click copies any unit's value to the clipboard.

## Common conversions worth memorizing

- 1 MB ≈ 1 minute of MP3 audio at 128 kbps.
- 1 GB ≈ 4 hours of standard-definition video, 1 hour of HD, or 20 minutes of 4K.
- 1 TB fits roughly 250,000 photos from a modern phone camera.
- Cloud storage typically bills per GB/month in decimal units.

## Tips

- **Match the convention** of whoever you're talking to. Backup software and storage vendors are decimal; OS free-space dialogs are usually binary.
- **When in doubt, quote bytes.** The raw byte count is unambiguous.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "What's the difference between KB and KiB?", a: "1 KB = 1000 bytes (decimal). 1 KiB = 1024 bytes (binary). The distinction matters for large sizes: 1 TB is about 91 GB smaller than 1 TiB." },
      { q: "Why does my 1 TB drive show as 931 GB?", a: "The manufacturer uses decimal (1 TB = 10¹² bytes) but Windows displays binary (931 GiB), keeping the 'GB' label. Same bytes, different convention." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/date-difference": {
    title: "Date Difference Calculator — Days, Weeks, Months Between",
    metaDescription: "Calculate the exact number of days, weeks, months, and years between any two dates. Free online date calculator — instant, no signup.",
    keyword: "date difference calculator",
    intro: [
      "Enter two dates and get the exact time between them: total days, weeks, months, and years. Handles leap years and month-length differences automatically.",
      "Useful for project timelines, age gaps, contract terms, deadlines, and any moment you need to know how far apart two dates really are.",
    ],
    features: [
      "Total days, weeks, months, and years",
      "Handles leap years automatically",
      "Optional include or exclude the end date",
      "Works with any past or future dates",
    ],
    guide: `## What the Date Difference Calculator does

Enter a start date and an end date. The calculator returns the total number of days between them, plus equivalent representations in weeks, months, and years. It correctly handles leap years and the fact that months have different lengths — a common source of manual counting errors.

## When to use it

- **Project management.** How many working days do we have until launch?
- **Contracts and notice periods.** Is the 90-day notice window still open?
- **Age gaps.** Exact years, months, and days between two birthdays.
- **Loan and rental terms.** Number of days between two dates for pro-rating.
- **Travel planning.** Total days between departure and return.
- **Historical trivia.** Days between two events, decades apart.

## Step-by-step

**1. Enter the start date.** Any date in any year — past or future.

**2. Enter the end date.** Same rules. The tool automatically swaps them if the end is before the start.

**3. Read the four numbers.** *Days* is the exact count. *Weeks*, *months*, and *years* are convenient equivalents.

**4. Choose end-date behavior.** Toggle whether to include the end date. Contracts often exclude it ("30 days from today, not including today"); age calculations include it.

## Why manual counting goes wrong

Counting days between April 12 and July 25 in your head is easy to get wrong by one or two — you have to remember that April has 30, May has 31, June has 30, plus the partial days at either end. Add a leap year to the mix and errors multiply. This tool removes that risk entirely.

## Days between vs age

"Days between" and "age in days" can differ by one depending on whether the end date counts. If you were born on Jan 1 and today is Jan 2, you are 1 day old (age) but there is 1 day between your birthday and today either way. The include-end-date toggle handles this.

## Tips

- **Working days.** This calculator counts calendar days. For business days (excluding weekends), subtract about 2/7 of the total; for weekends + public holidays, subtract more depending on country.
- **Time zones.** Dates only — no time-of-day precision. For hour-level differences use a duration calculator.

## Privacy

All calculation happens in your browser.`,
    faqs: [
      { q: "Does it handle leap years?", a: "Yes. Every leap-year rule (divisible by 4, except century years unless divisible by 400) is applied automatically." },
      { q: "Are weekends and holidays excluded?", a: "No — this calculator counts calendar days. For working days only, subtract weekends and public holidays for your country." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/simple-interest": {
    title: "Simple Interest Calculator — Free Online Loan Tool",
    metaDescription: "Calculate simple interest on loans and savings. Enter principal, rate, and time — get interest and total amount instantly. Free, no signup.",
    keyword: "simple interest calculator",
    intro: [
      "Calculate simple interest on any principal amount. Enter the amount, the annual rate, and the time in years, and get the interest earned plus the total.",
      "Useful for short-term personal loans, deposits, and understanding the difference between simple and compound interest.",
    ],
    features: [
      "Principal, rate, time — three inputs, two outputs",
      "Interest earned and total amount",
      "Any currency, any rate, any duration",
      "Instant, browser-side calculation",
    ],
    guide: `## What the Simple Interest Calculator does

Enter a principal amount (the money you're lending or depositing), an annual interest rate, and a time period in years. The calculator returns two numbers: the interest earned over that period, and the total amount (principal plus interest) at the end.

Simple interest is calculated only on the original principal. It never compounds, so the interest earned each year is the same. This makes it easy to reason about — and the reason it's usually a worse deal for savers than compound interest over long periods.

## When to use simple interest

- **Short-term personal loans** between friends or family.
- **Some auto loans and installment plans** that quote a flat interest rate.
- **Certificates of deposit** that don't reinvest interest.
- **Homework problems** where the assignment specifies simple interest.
- **Sanity checks** for how much a loan will cost before running the full amortization.

For most savings accounts, mortgages, credit cards, and long-term investments, use the compound interest calculator instead — the numbers are very different over more than a year or two.

## Step-by-step

**1. Enter the principal.** The starting amount, in any currency.

**2. Enter the annual rate.** As a percentage (5, not 0.05).

**3. Enter the time in years.** Use decimals for partial years — 0.5 for six months.

**4. Read the interest and total.** The interest is what you'd earn (or pay) over the period. The total is principal plus interest.

## The formula

Simple interest = principal × (rate ÷ 100) × time. So $1000 at 5% for 3 years earns $150 in interest, for a total of $1150.

## Simple vs compound: a quick example

$10,000 at 8% for 20 years:

- **Simple interest:** $10,000 × 0.08 × 20 = $16,000 in interest → $26,000 total.
- **Compound interest (annual):** $10,000 × 1.08²⁰ ≈ $46,610 total.

The gap is $20,610 — all from interest earned on previously earned interest. Over long horizons, compound interest wins by a landslide.

## Tips

- **Always ask how a lender calculates interest.** Two loans with the same headline rate can cost very different amounts depending on whether interest compounds and how often.
- **Convert months to years** for the time input: 6 months = 0.5 years, 18 months = 1.5 years.

## Privacy

All calculation runs in your browser.`,
    faqs: [
      { q: "What's the difference between simple and compound interest?", a: "Simple interest is calculated only on the original principal. Compound interest is calculated on principal plus previously earned interest, so it grows faster over time." },
      { q: "How do I calculate interest for months?", a: "Convert months to a fraction of a year. Six months = 0.5 years, 3 months = 0.25 years, 18 months = 1.5 years." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/speed": {
    title: "Speed Converter — mph, km/h, m/s, knots Online Free",
    metaDescription: "Convert between mph, km/h, m/s, knots, and ft/s online. Free speed converter — instant results, no signup, works on any device.",
    keyword: "speed converter",
    intro: [
      "Convert between mph, km/h, m/s, knots, and ft/s in a single view. Enter a value in any unit and every other unit updates live.",
      "Useful for travel, aviation, running pace, cycling, physics homework, and any moment you need to switch between metric and imperial speed units.",
    ],
    features: [
      "mph, km/h, m/s, ft/s, and knots",
      "Live conversion — enter any unit, read every unit",
      "Copy any result with one click",
      "Works on mobile in the car or at the gym",
    ],
    guide: `## What the Speed Converter does

Enter a speed in any common unit and read the equivalent in every other unit. It supports miles per hour (mph), kilometers per hour (km/h), meters per second (m/s), feet per second (ft/s), and knots. The result updates the moment you type.

## When you'll use it

- **Driving abroad.** UK speed limits are in mph; most of Europe is in km/h. Reading a foreign speedometer accurately is easier when you know the conversion by feel.
- **Sailing and aviation.** Knots are standard in maritime and aeronautical contexts.
- **Running and cycling.** Race times often need pace conversion from minutes-per-mile to km/h.
- **Physics and engineering.** SI problems use m/s; imperial problems use ft/s.
- **Weather reports.** Wind speeds are quoted in different units by country.

## Step-by-step

**1. Enter a value in any unit.** Type into the mph field, the km/h field, or any other — the rest update automatically.

**2. Read the other units.** Every unit's live value is visible at once.

**3. Copy the number you need.** One click copies any field.

## Handy conversions to remember

- **60 mph ≈ 97 km/h.** Most US highway limits.
- **100 km/h ≈ 62 mph.** Most European motorway limits.
- **1 knot ≈ 1.15 mph ≈ 1.85 km/h.** Nautical mile per hour.
- **1 m/s ≈ 3.6 km/h.** The SI-to-metric shortcut worth memorizing.
- **Mach 1 ≈ 767 mph at sea level.** For fun.

## Metric ↔ Imperial by feel

- **km/h to mph:** multiply by 0.62, or subtract about 40% and add a bit.
- **mph to km/h:** multiply by 1.6, or add 60%.
- **m/s to km/h:** multiply by 3.6.

## Tips

- **Race pace conversion:** 6-minute miles is 10 mph is 16 km/h. A 5-minute km is 12 km/h is 7.5 mph.
- **Wind speed:** the Beaufort scale is knots; TV weather reports vary by country.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "What's the difference between mph and knots?", a: "1 knot equals 1 nautical mile per hour, which is about 1.15 mph. Knots are standard in maritime and aviation contexts because a nautical mile is one minute of latitude." },
      { q: "How do I convert running pace?", a: "Enter your speed in mph or km/h to see the equivalent m/s. For minutes-per-mile pace, divide 60 by the pace value to get mph." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/time": {
    title: "Time Converter — Seconds, Minutes, Hours, Days, Weeks",
    metaDescription: "Convert between seconds, minutes, hours, days, weeks, months, and years. Free online time converter — instant, no signup required.",
    keyword: "time converter",
    intro: [
      "Convert between seconds, minutes, hours, days, weeks, months, and years. Enter any value and every other unit updates live.",
      "Useful for project estimates, scheduling, unit homework, and any moment you need to translate one time unit into another.",
    ],
    features: [
      "Seconds through years, all in one view",
      "Live conversion — type once, read everything",
      "Copy any value with one click",
      "Handles decimals for partial units",
    ],
    guide: `## What the Time Converter does

Enter a duration in any unit — seconds, minutes, hours, days, weeks, months, or years — and every other unit's equivalent appears live. The calculator uses standard averages for months (30.44 days) and years (365.25 days) so leap years and month-length differences don't skew everyday conversions.

## When you'll reach for it

- **Project estimates.** "This will take about 4000 hours" — is that months, or years? A quick check keeps proposals honest.
- **Contract terms.** 90 days is roughly 12.9 weeks or 3 months.
- **Homework and physics problems.** Especially when a formula wants seconds but the question gives hours.
- **Age calculations.** Approximate age in days, hours, or minutes for a birthday card.
- **API rate limits and cache TTLs.** 604800 seconds is 1 week.

## Step-by-step

**1. Type a value into any field.** All other fields update immediately.

**2. Read the equivalents.** Everything from seconds to years is visible at once.

**3. Copy the number you need.** One click grabs any field.

## Useful equivalences worth memorizing

- **1 hour** = 3,600 seconds.
- **1 day** = 86,400 seconds.
- **1 week** = 604,800 seconds = 168 hours.
- **1 year** ≈ 31.5 million seconds ≈ 8,760 hours ≈ 52 weeks.
- **1 month** ≈ 30.44 days ≈ 730.5 hours (average).
- **1 year of full-time work** ≈ 2,080 hours (40 hours × 52 weeks, no leave).

## Approximate vs exact

Months and years vary. February has 28 or 29 days; a common year has 365 days, a leap year 366. This tool uses averages (30.44 days per month, 365.25 days per year) for smooth conversion — perfect for planning, not exact for calendar arithmetic. For calendar-exact spans between two specific dates, use the Date Difference Calculator instead.

## Tips

- **API caching.** Common TTL values: 60 (1 min), 3600 (1 hour), 86400 (1 day), 604800 (1 week).
- **Work weeks.** A US work year is roughly 2000 hours (2080 - 2 weeks off). Freelancers often bill based on this.

## Privacy

All conversion happens in your browser.`,
    faqs: [
      { q: "How many days is a month?", a: "The calculator uses 30.44 days as an average, which is 365.25 ÷ 12. For calendar-exact differences between two specific dates, use the Date Difference Calculator." },
      { q: "Why is a year 365.25 days?", a: "That's the average length accounting for leap years (one extra day every 4 years). For calendar-exact spans, use the Date Difference Calculator." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/calculators/volume": {
    title: "Volume Converter — Liters, Gallons, Cups, mL Online",
    metaDescription: "Convert between liters, US and UK gallons, cups, milliliters, and fluid ounces. Free online volume converter — instant, no signup.",
    keyword: "volume converter",
    intro: [
      "Convert between liters, milliliters, US and UK gallons, cups, and fluid ounces. Enter any value and every unit updates live.",
      "Perfect for cooking (especially US↔metric recipes), science, and any moment you need to translate a volume between units.",
    ],
    features: [
      "Metric (L, mL) and imperial (gal, qt, pt, cup, fl oz)",
      "Separate US and UK gallons — they differ",
      "Live conversion in every unit",
      "One-click copy",
    ],
    guide: `## What the Volume Converter does

Enter a volume in any unit — liters, milliliters, US gallons, UK (imperial) gallons, quarts, pints, cups, or fluid ounces — and every other unit updates live. US and UK gallons are shown separately because they are different sizes.

## When you'll use it

- **Cooking.** US recipes use cups and fluid ounces; UK recipes use imperial fluid ounces and metric; scientific recipes use grams and mL.
- **Fuel economy.** Converting between MPG (US), MPG (UK), and L/100km.
- **Chemistry.** Scaling reagent volumes from a paper written in mL to a lab that pipettes in µL.
- **Home improvement.** Paint, water tanks, aquariums, and pond volumes are quoted in different units depending on the source.

## The US vs UK gallon trap

- **1 US gallon** = 3.785 liters = 128 US fluid ounces.
- **1 UK gallon** = 4.546 liters = 160 imperial fluid ounces.

The UK gallon is about 20% larger. A UK recipe calling for "1 pint of milk" (568 mL) gives more milk than a US "1 pint" (473 mL). Getting the wrong pint can ruin a bread dough. Even fluid ounces differ: 1 US fl oz = 29.57 mL, 1 UK fl oz = 28.41 mL.

## Step-by-step

**1. Type a value in any field.** Every other unit updates immediately.

**2. Read across.** All metric and imperial equivalents are visible at once.

**3. Copy the number you need.** One click copies any field to your clipboard.

## Handy conversions to memorize

- **1 liter** ≈ 33.8 US fl oz ≈ 4.23 US cups.
- **1 US cup** = 240 mL (US legal cup). Older US recipes may use 236 mL.
- **1 UK cup** = 250 mL (metric cup used in Australia, NZ, UK, Canada).
- **1 US gallon of water** weighs about 8.34 pounds; 1 liter weighs 1 kg.

## Tips

- **Check which "cup" your recipe means.** Australian recipes usually use a 250 mL metric cup. US recipes use 240 mL. Bakers care about the 4% difference.
- **Weigh, don't measure.** For accurate baking, weight beats volume every time.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "Are US and UK gallons the same?", a: "No. 1 US gallon = 3.785 liters. 1 UK gallon = 4.546 liters. The UK gallon is about 20% larger. Fluid ounces differ too (29.57 mL vs 28.41 mL)." },
      { q: "How big is a metric cup?", a: "The metric cup used in Australia, New Zealand, and Canada is 250 mL. The US legal cup is 240 mL. Older US recipes may use 236 mL." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
};
