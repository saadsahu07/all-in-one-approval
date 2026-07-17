import type { ToolSeo } from './types';

export const seo: Record<string, ToolSeo> = {
  "/text-tools/ai-summarizer": {
    title: "AI Text Summarizer — Free Online Summary Tool",
    metaDescription: "Summarize long articles, PDFs, and notes into clear key points with AI. Free, no signup, and works instantly in your browser.",
    keyword: "AI text summarizer",
    intro: [
      "Paste any article, report, or meeting transcript and get a clear, structured summary in seconds. Our AI text summarizer distills the key points so you can decide what actually matters — without wading through thousands of words.",
      "Ideal for students, researchers, writers, and busy professionals. Works with English text of any length and produces a concise paragraph plus bullet points you can copy anywhere.",
    ],
    features: [
      "Powered by modern large language models for accurate summaries",
      "Handles long inputs and multi-paragraph articles",
      "Copy the summary or bullet points with one click",
    ],
    guide: `## What the AI Text Summarizer does\n\nThe summarizer reads the text you paste and returns a much shorter version that keeps the main points, decisions, and numbers intact. It is designed for the kind of reading everyone does every day — long news articles, meeting transcripts, research papers, product docs, and email threads — where the source is far longer than the value you need to extract.\n\n## When to reach for it\n\nUse it whenever a document is longer than you have time to read and skimming feels risky. It is especially useful for:\n\n- Preparing a briefing from a long PDF before a meeting.\n- Turning a raw call transcript into shareable notes.\n- Compressing a research paper down to the parts that matter for your work.\n- Getting the gist of a competitor announcement in a fraction of the time.\n\n## Step-by-step: getting the best summary\n\n**1. Paste your text.** Any length from a few paragraphs up to about 10,000 words works well. If your source is a PDF or web page, copy the readable body text — skip navigation, cookie banners, and footer boilerplate that would waste context.\n\n**2. Choose the shape you want.** A short paragraph is best for a quick sense of the piece. Bullet points are better when you plan to skim later or turn the summary into a slide. An executive summary works when you need something you can forward without editing.\n\n**3. Generate and review.** The summary appears in a few seconds. Read it once against your original goal: does it capture the actionable parts, or has it collapsed the wrong details? If a critical figure is missing, add a sentence noting it and re-run.\n\n**4. Copy and use it.** One click copies the summary. Paste it into your notes, brief, email, or knowledge base. Keep the original around in case you need to double-check anything later.\n\n## Pro tips\n\n- **Split very long content** into two or three logical chunks and summarize each. Models handle focused input better than sprawling documents.\n- **Ask for both formats** by running the tool twice — once for a paragraph, once for bullets — and use whichever fits the audience.\n- **Spot-check names, dates, and numbers.** AI summaries are excellent at structure but occasionally paraphrase specifics; a five-second scan against the original catches this.\n- **Iterate rather than accept.** If the first pass misses the point you cared about, tighten the input to the two or three sections that hold it, and summarize just those.\n\n## Privacy\n\nInput is sent to an AI provider to generate the summary and is not stored on our servers or used to train models. Once the summary is returned, the request is closed. There is no signup, no history, and no shareable log.`,
    faqs: [
      { q: "Is the AI summarizer really free?", a: "Yes. The summarizer is 100% free with no signup, no watermark, and no daily quota for typical use." },
      { q: "What kind of text works best?", a: "Any English prose: articles, essays, blog posts, research papers, meeting notes, or transcripts. For very long content, split it into 3–5 page chunks for the sharpest summary." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/grammar-checker": {
    title: "Free Grammar Checker — Fix Spelling & Punctuation",
    metaDescription: "Check grammar, spelling, and punctuation online for free. Instant suggestions with no signup or install — perfect for essays, emails, and posts.",
    keyword: "grammar checker",
    intro: [
      "Paste your text and our free grammar checker highlights spelling mistakes, missing punctuation, and awkward phrasing in seconds. Fix everything before you hit send.",
      "Great for students polishing an essay, professionals sending important email, or writers self-editing a draft. No account needed — everything runs in your browser.",
    ],
    features: [
      "Catches common grammar, spelling, and punctuation errors",
      "Suggests clearer alternatives you can apply with one click",
      "Works on any length of text, from a sentence to a full article",
    ],
    guide: `## What the Grammar Checker does\n\nThe grammar checker scans your writing for spelling mistakes, missing or misused punctuation, subject-verb disagreement, run-on sentences, and awkward phrasing. It suggests concrete replacements so you can decide whether to accept a fix or leave the original in place. It is not a replacement for a human editor — it is the pass that catches the mechanical mistakes so a human reviewer can focus on style, structure, and substance.\n\n## When it earns its place\n\nUse it before hitting send on anything with even a small audience: a client email, a support reply, a resume, an application essay, a blog post, or a press release. The cost is fifteen seconds; the reward is not being the person who wrote "there manager" in a message that a hundred people will read.\n\n## Step-by-step\n\n**1. Paste your draft.** Any length works — a single sentence, a full article, or a rough outline. The checker treats each sentence in context, so pasting the full paragraph gives sharper suggestions than pasting a fragment.\n\n**2. Read the highlighted suggestions.** Each issue is marked with the type (spelling, punctuation, grammar, or style) and a proposed fix. Take a second to decide before accepting — the tool is right most of the time, but proper nouns, brand names, and intentional stylistic choices will sometimes look like errors.\n\n**3. Apply the fixes you agree with.** Click through to accept the good ones and skip the ones you disagree with. You are always in control of the final draft.\n\n**4. Read the result aloud.** Even after every suggestion is resolved, a quick read-through catches the last few clunky sentences — the ones that are grammatically correct but still awkward. This is where a human beats any tool.\n\n## Common issues it catches\n\n- **Homophones** like *their / there / they're*, *its / it's*, and *your / you're*.\n- **Comma splices** where two independent clauses share a comma.\n- **Subject-verb mismatch** in long sentences where the verb sits far from its subject.\n- **Missing articles** (*a*, *an*, *the*) in translated or non-native writing.\n- **Double spaces**, doubled words, and stray capitalization.\n\n## Tips for cleaner writing\n\n- Prefer short sentences. If a sentence has more than three commas, consider splitting it.\n- Read the first and last sentence of each paragraph on their own. If they don't stand up alone, the paragraph is doing too many jobs.\n- Cut hedges — *just*, *very*, *really*, *I think that* — after the fact. They almost always make the sentence weaker.\n\n## Privacy\n\nYour text stays private. Nothing you paste is stored, logged, or used to train any model.`,
    faqs: [
      { q: "Do I need to install anything?", a: "No. The grammar checker runs in your browser — no download, no Word plugin, no signup." },
      { q: "Does it replace a human editor?", a: "No tool does, but it catches the great majority of typos and mechanical errors so a human reviewer can focus on style and substance." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/paraphraser": {
    title: "Free Paraphrasing Tool — Rewrite Text Online",
    metaDescription: "Paraphrase sentences and paragraphs in fresh words while keeping the meaning. Free online rewriter with instant results — no signup required.",
    keyword: "paraphrasing tool",
    intro: [
      "Rewrite any sentence or paragraph in fresh, natural words while keeping the original meaning. Our free paraphrasing tool is perfect for beating writer's block, avoiding accidental repetition, and adapting content for a different audience.",
      "Useful for essays, blog posts, product descriptions, and social copy. Paste in a passage and get a rewritten version you can edit and use immediately.",
    ],
    features: [
      "Rewrites text naturally without changing meaning",
      "Works for essays, blog posts, product descriptions, and emails",
      "One-click copy of the paraphrased result",
    ],
    guide: `## What the Paraphrasing Tool does\n\nThe paraphraser takes a sentence or paragraph and rewrites it in fresh words while keeping the underlying meaning intact. It is useful for beating writer's block, adapting the tone of a piece for a different audience, cleaning up an awkward draft, and cutting accidental repetition inside a longer article.\n\nParaphrasing is not translation and it is not summarization. The output stays roughly the same length as the input, but the vocabulary, sentence structure, and rhythm change. If you need something shorter, run the summarizer instead; if you need it in another language, use a translator.\n\n## Good and bad reasons to paraphrase\n\nParaphrase when you have said something and want to say it better, or when you need to explain the same idea to a different reader. Do not paraphrase to pass off someone else's work as your own — that is plagiarism whether a tool is involved or not. Rewriting a source without a citation does not make the ideas yours.\n\n## Step-by-step\n\n**1. Paste the passage.** A sentence or a paragraph both work. Longer inputs will be handled one paragraph at a time to keep the meaning tight.\n\n**2. Pick a tone if one is offered.** *Standard* is the safest default. *Formal* is right for reports, applications, and business email. *Simple* is best when you need the same idea for a broader or younger audience.\n\n**3. Generate and compare.** The rewritten version appears alongside the original so you can spot anything that drifted. If a technical term or brand name got swapped for a synonym you don't want, edit it back in a few seconds.\n\n**4. Copy and use it.** One click copies the result. Always give the output a final human pass — the tool is a first draft, not a finished sentence.\n\n## Tips for a natural rewrite\n\n- **Feed one paragraph at a time.** Very long inputs produce more generic output; single paragraphs keep the rewrite grounded.\n- **Watch for jargon.** Technical vocabulary is where rewrites most often drift. Keep a mental list of terms that must survive intact.\n- **Trust your ear.** If the paraphrased version reads worse than your original, the original was already fine — you don't have to change it just because the tool produced something.\n- **Run it twice.** If the first pass isn't right, run it again on the original for a completely different rewrite; you now have three options to choose from.\n\n## Privacy\n\nText is sent to an AI provider for rewriting and is not stored or used to train models on our side. Everything closes when you leave the page.`,
    faqs: [
      { q: "Is the paraphrased text unique?", a: "Yes — the rewriter produces fresh phrasing. Always proofread for accuracy before publishing." },
      { q: "Will it fool plagiarism detectors?", a: "The intent of this tool is rewriting for clarity or tone, not evading detection. Always credit sources when using someone else's ideas." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/word-counter": {
    title: "Word Counter — Free Online Word & Character Count",
    metaDescription: "Count words, characters, sentences, paragraphs, and reading time instantly. Free online word counter — no signup, works offline in your browser.",
    keyword: "word counter",
    intro: [
      "Paste text or start typing and see a live count of words, characters, sentences, paragraphs, and estimated reading time. Perfect for essay limits, blog SEO, tweets, and academic assignments.",
      "The word counter updates instantly as you type and works on any device. All text stays in your browser — nothing is uploaded.",
    ],
    features: [
      "Live word, character, sentence, and paragraph counts",
      "Estimated reading and speaking time",
      "Works with any language and any length of text",
    ],
    guide: `## What the Word Counter does\n\nThe word counter tracks words, characters, sentences, paragraphs, and estimated reading and speaking time as you type or paste. It is the fastest way to check whether an essay, blog post, tweet, or presentation script fits its target length — and it works entirely in your browser, so nothing you write is uploaded.\n\n## Who reaches for it\n\nStudents check assignment length. Bloggers and SEO writers hit the word count their content plan calls for. Marketers make sure product copy fits a card, a hero, or a metadata field. Public speakers and video creators use the speaking-time estimate to plan a script that actually fits the slot they have. The counter is deliberately general so it works for all of them.\n\n## Step-by-step\n\n**1. Paste or type into the input box.** Counts update live as you edit — there is no button to press.\n\n**2. Watch the count that matters.** If you have a strict word target, focus on the word count. If you're writing for a platform with a character limit, watch the character count. If you're writing a script, watch the speaking time.\n\n**3. Trim or expand.** When you're over, cut hedge words (*just*, *very*, *really*) and combine short sentences that share the same subject. When you're under, add examples or specifics — never filler.\n\n**4. Copy when you're happy.** One click copies the cleaned-up text.\n\n## How the numbers are calculated\n\n- **Words** are counted as whitespace-separated runs of characters. Hyphenated compounds like *state-of-the-art* count as one word.\n- **Characters** are shown twice: with and without spaces. Emoji and multi-byte characters count as one character each, matching most social platforms.\n- **Sentences** are counted by terminal punctuation (a period, question mark, or exclamation). Abbreviations like *Mr.* and *e.g.* can occasionally throw the count off by one — normal for any counter.\n- **Reading time** assumes an average adult silent reading speed of about 230 words per minute.\n- **Speaking time** assumes a conversational pace of about 130 words per minute, which fits most presentations and voiceovers.\n\n## Common length targets to keep in mind\n\n- Tweet: 280 characters.\n- Meta description: about 155 characters before Google truncates.\n- SMS segment: 160 characters (standard) or 70 (unicode).\n- School essay: whatever your teacher said — read the brief.\n- SEO blog post: 800–2,000 words is a common sweet spot.\n\n## Privacy\n\nEverything is counted inside your browser. Nothing is sent anywhere, so you can safely paste in unpublished drafts, contracts, or confidential notes.`,
    faqs: [
      { q: "Does the word counter work offline?", a: "Yes. Once the page loads, counting happens entirely in your browser — no internet connection required." },
      { q: "How accurate is the reading time?", a: "Reading time uses an average of ~230 words per minute, which matches typical adult silent reading speed for prose." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/character-counter": {
    title: "Character Counter — Count Letters & Symbols Free",
    metaDescription: "Count characters with and without spaces for tweets, meta descriptions, and SMS. Free online character counter — instant, no signup, private.",
    keyword: "character counter",
    intro: [
      "Count characters with or without spaces for tweets, SMS, SEO meta descriptions, Instagram captions, and any input that has a strict limit. Live updates as you type.",
      "Perfect for social media managers, SEO writers, and developers writing form validation. Everything runs in your browser — nothing is sent to a server.",
    ],
    features: [
      "Live count with and without spaces",
      "Shows platform-friendly limits (tweet, meta description, SMS)",
      "Works with emoji and non-ASCII characters",
    ],
    guide: `## What the Character Counter does\n\nThe character counter tracks the length of your text in real time — with and without spaces — as you type. It is the tool you want any time there is a hard cap on how long a piece of text can be: a tweet, a search meta description, an Instagram caption, an SMS, an HTML meta title, or a form field with a max-length attribute.\n\n## Why bother counting characters\n\nPlatforms that truncate text mid-sentence make your writing look sloppy. Search engines cut meta descriptions at around 155 characters and replace the rest with an ellipsis, so a message that keeps going past that limit simply disappears from the result page. Twitter cuts posts at 280 characters. An SMS bursts into two billed messages at 161 characters. Knowing the exact count before you hit publish avoids all of that.\n\n## Step-by-step\n\n**1. Paste or type into the input.** The count updates on every keystroke.\n\n**2. Watch both counts.** *With spaces* is the number the platform will enforce. *Without spaces* is the "dense" character count, useful when the platform ignores whitespace (rare) or when you want to compare two rewrites.\n\n**3. Rewrite if you need to trim.** Cutting characters is a craft — remove connector words first (*and*, *that*, *just*), then compress phrases (*in order to* → *to*), and only then start dropping meaning.\n\n**4. Copy when you're under the limit.** One click copies the cleaned-up text ready for the target platform.\n\n## Common limits worth memorizing\n\n- Tweet: 280 characters.\n- YouTube title: 100 characters (about 70 render before it truncates).\n- YouTube description: 5,000 characters (the first 150 are what shows in search).\n- SEO meta title: about 60 characters before Google truncates.\n- SEO meta description: about 155 characters.\n- Instagram caption: 2,200 characters.\n- LinkedIn post: 3,000 characters (the first 210 show before the "see more").\n- SMS: 160 characters standard, 70 characters for messages containing any non-GSM character (including many emoji).\n- Facebook headline in ads: 40 characters.\n\n## Tips for tight writing\n\n- Front-load the point. If the message gets truncated, the important part should be safe.\n- Prefer numerals over spelled-out numbers (*10* not *ten*).\n- Cut hedges — *just*, *really*, *very*, *actually* — before you cut nouns and verbs.\n- Emoji are one character each on most platforms, but on SMS they force the shorter 70-character segment. Use with intent.\n\n## Privacy\n\nCounting runs entirely in your browser. Nothing is sent to a server, so drafts of confidential messages are safe.`,
    faqs: [
      { q: "Does it count spaces?", a: "It shows both counts side by side — with spaces and without — so you always know what you're at." },
      { q: "Are emoji counted correctly?", a: "Yes. Emoji and multi-byte characters are counted as one character each, matching how most social platforms count them." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/case-converter": {
    title: "Case Converter — UPPER, lower, Title & Sentence Case",
    metaDescription: "Convert text to uppercase, lowercase, title case, or sentence case in one click. Free online case converter — no signup, works instantly.",
    keyword: "case converter",
    intro: [
      "Convert any text between UPPERCASE, lowercase, Title Case, and Sentence case with a single click. Perfect for cleaning up copy-pasted headlines, article titles, or shouty comments.",
      "Great for writers, editors, and developers. Paste your text, pick a case, and copy the result — nothing is uploaded and everything runs in your browser.",
    ],
    features: [
      "Uppercase, lowercase, Title Case, and Sentence case",
      "Preserves punctuation and line breaks",
      "One-click copy of the converted output",
    ],
    guide: `## What the Case Converter does\n\nThe case converter transforms text between UPPERCASE, lowercase, Title Case, and Sentence case in one click. It is the fastest way to clean up copy-pasted headlines, fix a document someone typed in all caps, prepare a heading for a style guide, or normalize a spreadsheet column of names before importing it somewhere.\n\n## The four cases in plain English\n\n- **UPPERCASE** turns every letter into a capital: THE QUICK BROWN FOX. Useful for acronyms, short shouted headings, and legal warnings.\n- **lowercase** turns every letter into its lowercase form: the quick brown fox. Useful for lowercased brand styles, URLs, and file names.\n- **Title Case** capitalizes the first letter of each major word: The Quick Brown Fox. Useful for article titles, book titles, section headings, and product names. Small connector words like *and*, *of*, *the*, *in* stay lowercase in the middle.\n- **Sentence case** capitalizes only the first letter of the sentence and any proper noun: The quick brown fox. Useful for body copy, blog subheadings, and modern UI labels.\n\n## Step-by-step\n\n**1. Paste your text into the input.** It can be a single line or the entire contents of a document.\n\n**2. Click the case you want.** The output appears immediately. Line breaks and punctuation are preserved, so a paragraph or list keeps its shape.\n\n**3. Read the result.** Automated case conversion cannot detect proper nouns perfectly. If your text contains brand names (*iPhone*, *McDonald's*, *WordPress*), quickly restore the correct capitalization by hand.\n\n**4. Copy and paste it wherever you need it.** One click copies the transformed text.\n\n## When to pick which case\n\n- Article title on a magazine-style site → **Title Case**.\n- Blog subheading in a modern minimalist theme → **Sentence case**.\n- URL slug, file name, hashtag → **lowercase** (usually).\n- Warning banner, badge, or micro-CTA → **UPPERCASE** (sparingly).\n\n## Tips\n\n- If you receive an email typed entirely in caps, one round through *Sentence case* makes it readable in three seconds.\n- For a list of product names, apply **Title Case** first and then patch a few known exceptions like brand names by hand.\n- If you're not sure whether Title Case or Sentence case fits your site, check three neighboring headings; consistency matters more than the specific choice.\n\n## Privacy\n\nCase conversion is done entirely in your browser. Nothing is uploaded, logged, or stored — the text never leaves your device.`,
    faqs: [
      { q: "What is the difference between title case and sentence case?", a: "Title case capitalizes the first letter of each major word (My New Article). Sentence case only capitalizes the first word and proper nouns (My new article)." },
      { q: "Does it work for long text?", a: "Yes. It handles any length instantly since conversion happens in your browser." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/remove-duplicate-lines": {
    title: "Remove Duplicate Lines — Free Online Deduplicator",
    metaDescription: "Delete duplicate lines from any list or text instantly. Free online tool with case-sensitive option — no signup, works in your browser.",
    keyword: "remove duplicate lines",
    intro: [
      "Paste any list — emails, URLs, keywords, log lines — and remove duplicates in one click. Order is preserved and the result is ready to copy back into your spreadsheet, script, or document.",
      "Perfect for cleaning email lists, deduping keyword research, tidying up logs, or preparing data for import. All processing happens in your browser.",
    ],
    features: [
      "Removes duplicate lines while preserving original order",
      "Optional case-sensitive matching",
      "Handles thousands of lines instantly",
    ],
    guide: `## What the Remove Duplicate Lines tool does\n\nThe deduplicator takes any block of text where each row is on its own line and removes any line that already appeared above it. The original order of the first occurrences is preserved, so lists that were carefully ordered stay ordered. It handles email lists, keyword lists, URLs, log lines, CSV data, and any other line-oriented content you can paste into a text box.\n\n## When to use it\n\n- Combining two email lists exported from different tools and cleaning the overlap.\n- Preparing a keyword list for research after merging exports from Ahrefs, SEMrush, and your own brainstorm.\n- Cleaning up a copy-paste of URLs from a spreadsheet before you feed them into a crawler.\n- Removing repeated stack traces from a noisy log while you look for the unique errors.\n- Deduping a list of names before mailmerging.\n\n## Step-by-step\n\n**1. Paste your list.** Anything from a few lines to tens of thousands works. Very large lists may briefly pause the tab while they are processed.\n\n**2. Choose your matching options.** Case-sensitive matching treats *Apple* and *apple* as different lines. Case-insensitive matching treats them as the same. Trimming whitespace at both ends of each line makes sure "  example.com" and "example.com" collapse to one row.\n\n**3. Run the dedupe.** The output appears immediately. You will usually see a count of how many duplicates were removed, which is a useful sanity check.\n\n**4. Copy the clean list.** One click copies the result. Paste it back into your spreadsheet, CRM, script, or document.\n\n## Common gotchas\n\n- **Invisible whitespace.** A line ending in a stray space or tab looks identical to a "clean" version but the deduper treats them as different unless you trim whitespace.\n- **Different quote characters.** Curly quotes (") and straight quotes (") are different characters. A copy-paste from a Word doc will not dedupe against a copy-paste from a plain text file unless you normalize the quotes first.\n- **Mixed case.** If you don't care about capitalization (usernames, tag names, hashtags), choose case-insensitive; otherwise you'll be surprised how many "duplicates" survive.\n- **Empty lines.** Multiple blank rows collapse into one blank row by default. If you need blank rows preserved (for grouping), skip the dedupe.\n\n## Tips\n\n- **Sort first** if the exact order doesn't matter — sorted output is far easier to eyeball for accuracy.\n- **Keep your source file** until you've verified the deduped list. If something looks wrong, you can always regenerate.\n- **For CSV data with a header row**, dedupe the body only. The header will otherwise appear once and everything looks fine, but the semantics are cleaner if you handle the header separately.\n\n## Privacy\n\nEverything runs in your browser. Your list is never sent to a server, so it is safe to paste email addresses, customer records, or any other sensitive line-oriented data.`,
    faqs: [
      { q: "Is order preserved?", a: "Yes. The first occurrence of each unique line is kept in its original position." },
      { q: "Is this safe for sensitive data?", a: "Yes. Deduplication happens entirely in your browser — the text never leaves your device." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/text-sorter": {
    title: "Text Sorter — Sort Lines Alphabetically Online Free",
    metaDescription: "Sort lines alphabetically, reverse-alphabetically, or by length. Free online text sorter — no signup, works instantly in your browser.",
    keyword: "text sorter",
    intro: [
      "Sort lines A–Z, Z–A, or by length in one click. Perfect for tidying lists of names, keywords, URLs, or CSV data.",
      "The sorter handles any number of lines and preserves special characters. All processing is local — your text is never uploaded.",
    ],
    features: [
      "A–Z, Z–A, and by-length sort modes",
      "Preserves special characters and whitespace",
      "Optional case-insensitive sort",
    ],
    guide: `## What the Text Sorter does\n\nThe text sorter reorders lines of text alphabetically (A–Z), reverse alphabetically (Z–A), by length (shortest to longest or the reverse), or randomly. Each row of your input becomes one item in the sort. Nothing else changes — punctuation, capitalization, and spaces inside the lines are preserved exactly.\n\nSorted lists are easier to scan, easier to spot duplicates in, and easier to compare against another list. If you're going to look at data more than once, sorting it first almost always saves time.\n\n## When to use it\n\n- Alphabetizing a bibliography, glossary, or contact list.\n- Ordering a stack of URLs before you dedupe or compare them.\n- Ranking short titles by length to spot outliers that don't fit a design constraint.\n- Randomizing a list of names for pair-programming, drawings, or seating.\n- Preparing keyword research for a spreadsheet where lexical order makes overlap obvious.\n\n## Step-by-step\n\n**1. Paste your list.** Each item on its own line.\n\n**2. Choose a sort mode.** A–Z is the default and usually correct. Z–A is useful when you want the newest entries (often timestamps or reverse-dated slugs) at the top. Sort-by-length is best for design work. Random is a one-tap draw.\n\n**3. Choose case sensitivity.** Case-sensitive sort places all capitalized items before lowercase ones (uppercase letters have lower code points). Case-insensitive sort keeps *Apple* and *apple* next to each other. For anything human-readable, case-insensitive is usually what you want.\n\n**4. Copy the sorted result.** One click. Paste it back into your spreadsheet, document, or code.\n\n## Sort order surprises\n\n- **Numbers as text.** A pure lexical sort orders *1, 10, 2, 20, 3* — not what you probably want. If every line is a plain number, the tool switches to numeric sort. If lines mix words and numbers, it falls back to lexical order.\n- **Accented characters** sort after unaccented ones in most locales. If you need a locale-aware sort, do it in a spreadsheet with locale settings applied.\n- **Leading whitespace** matters. Lines that start with a space sort before every letter unless you trim first.\n\n## Tips\n\n- **Combine with the deduper.** Sort first, then remove duplicates — the two together turn any messy list into a canonical one.\n- **For CSV columns**, extract the column into its own list first. Sorting a full CSV by line will re-order rows in ways you didn't intend.\n- **When ordering matters for people**, run a quick human eyeball before you publish. Alphabetization looks arbitrary in a few edge cases (*A&W* vs *AAA*, for instance).\n\n## Privacy\n\nSorting is instant and happens in your browser. Nothing is uploaded — safe for contact lists, private data, or unpublished drafts.`,
    faqs: [
      { q: "Can I sort numbers?", a: "Numeric lines sort numerically when the whole line parses as a number; otherwise sorting is lexical." },
      { q: "Is my data private?", a: "Yes. All sorting happens in your browser — nothing is uploaded or logged." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/text-reverser": {
    title: "Text Reverser — Reverse Words & Lines Online Free",
    metaDescription: "Reverse text by character, word, or line in one click. Free online text reverser — no signup, works instantly in your browser.",
    keyword: "text reverser",
    intro: [
      "Reverse any text character-by-character, word-by-word, or line-by-line. Handy for puzzles, palindrome checks, quick obfuscation, and creative writing.",
      "Paste your text, pick a mode, and copy the reversed result. Everything runs in your browser.",
    ],
    features: [
      "Reverse by character, word, or line",
      "Handles multi-line input",
      "One-click copy of the reversed output",
    ],
    guide: `## What the Text Reverser does\n\nThe text reverser flips your input backwards in one of three ways: character by character (*hello* → *olleh*), word by word (*the quick fox* → *fox quick the*), or line by line (the last row becomes the first). It is a small, focused tool with a surprising number of real uses.\n\n## When to reach for it\n\n- Checking whether a word or phrase is a palindrome (a character-reverse that equals the original).\n- Solving word puzzles, crosswords, and cipher games.\n- Creating a mirror-writing effect for design or social copy.\n- Reversing a list so the newest items appear first without re-sorting.\n- Producing a stress-test string for a text renderer that needs to handle right-to-left rendering.\n\n## Step-by-step\n\n**1. Paste your text.** Any length works, from a single word to a full essay.\n\n**2. Pick the reverse mode.** *Character* is the classic — every letter is flipped. *Word* keeps letters intact but reverses their order. *Line* keeps whole lines intact but flips the row order.\n\n**3. Read the result.** In character mode you'll see immediately whether the input was a palindrome. In line mode you'll get a list that reads bottom-to-top.\n\n**4. Copy and use it.** One click copies the reversed text.\n\n## What the reverser does not do\n\n- It does not translate text into right-to-left languages. To display Arabic or Hebrew correctly you need proper Unicode rendering, not a character reverse.\n- It does not decode anything. Reversed text is trivially readable — it is not a cipher.\n- It does not preserve *visual* reading order. A character-reversed string looks strange to the eye but the underlying bytes are simply in reverse order.\n\n## Unicode and emoji\n\nModern text often includes multi-byte characters — accented letters, emoji, and combining marks. A naive reverse would split a single emoji into two halves. The reverser is Unicode-aware: emoji and multi-byte characters flip as one atomic unit, so a heart still looks like a heart in the reversed string.\n\n## Un-reversing\n\nRunning the reverse operation a second time on the output restores the original text. This makes the tool safe to experiment with — you cannot accidentally destroy the original.\n\n## Tips\n\n- **For palindrome checks**, character-reverse the input and compare it side by side with the original. If they match ignoring spaces and case, it's a palindrome.\n- **For "latest first" lists**, line-reverse a sorted list instead of resorting descending — it is faster and preserves the internal grouping.\n- **For creative writing**, word-reverse a sentence to see whether the mirror phrasing is more evocative than the straight version. Sometimes the reversed order reads like poetry.\n\n## Privacy\n\nReversing happens entirely in your browser. The text you paste is never sent to a server, logged, or stored.`,
    faqs: [
      { q: "Will it break emoji?", a: "The reverser is unicode-aware and keeps multi-byte characters like emoji intact." },
      { q: "Can I un-reverse text?", a: "Yes — running the reverse operation a second time on the output restores the original text." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/lorem-ipsum": {
    title: "Lorem Ipsum Generator — Free Placeholder Text",
    metaDescription: "Generate lorem ipsum placeholder text by word, sentence, or paragraph. Free online lorem ipsum generator — no signup, instant copy.",
    keyword: "lorem ipsum generator",
    intro: [
      "Generate the exact amount of lorem ipsum placeholder text you need — by words, sentences, or paragraphs. Perfect for design mockups, wireframes, template previews, and CMS demo content.",
      "The generator uses classic Lorem Ipsum starting from the traditional first paragraph, so your mockups look professional.",
    ],
    features: [
      "Generate by words, sentences, or paragraphs",
      "Option to start with the classic 'Lorem ipsum dolor sit amet'",
      "One-click copy to clipboard",
    ],
    guide: `## What the Lorem Ipsum Generator does\n\nThe lorem ipsum generator produces placeholder text of exactly the length you need — measured in words, sentences, or paragraphs. It is the standard way to fill a design mockup, wireframe, template, or empty CMS entry with realistic-looking prose so viewers can focus on the layout instead of getting distracted by the actual content.\n\n## What lorem ipsum actually is\n\nLorem ipsum is a scrambled excerpt from *De Finibus Bonorum et Malorum*, a 1st-century BC Latin text by Cicero. Because the letter distribution and word lengths roughly match natural English, it renders convincingly in most typefaces — the eye reads shapes and rhythms, not meaning. That's why it has been the industry-standard filler since the 1500s, when a printer scrambled the passage to create a specimen sheet.\n\n## When (and when not) to use it\n\nUse lorem ipsum whenever real content is not ready and you need to show what a page will look like: for a client mockup, a landing page comp, a component library sample, or a CMS admin screenshot. It signals *not real yet*, which is a feature — nobody will accidentally think the copy is finished.\n\nAvoid lorem ipsum when the mockup is going through legal review, when a stakeholder can't tell it's placeholder ("the copy is terrible!"), or when you need to demonstrate content that behaves realistically (long words, edge-case punctuation, non-Latin characters). In those cases, drafted real content or targeted "greeked" content is safer.\n\n## Step-by-step\n\n**1. Decide the unit.** Words for micro-copy (buttons, labels, subtitles). Sentences for paragraphs and long form. Paragraphs when you need multiple stacked blocks.\n\n**2. Pick a count.** Type the number you need. Any reasonable amount is fine — the generator can produce enough for a full article.\n\n**3. Choose whether to start with the classic opening.** *Lorem ipsum dolor sit amet, consectetur adipiscing elit* is the traditional first sentence. Keeping it makes your mockup instantly recognizable as placeholder; turning it off gives a more varied result.\n\n**4. Generate and copy.** One click. Paste into your design tool, CMS, or code sample.\n\n## Tips\n\n- **Match paragraph length to reality.** If real content will be short paragraphs, generate short paragraphs — long lorem paragraphs make a design look denser than the final result.\n- **Include realistic characters.** For UI copy that will contain apostrophes, hyphens, and long words, edit a few sentences of the output to include them, so your typography stress-tests too.\n- **Swap for real copy early.** The longer lorem ipsum stays in a design, the more baked-in the wrong assumptions become about length, tone, and structure. Replace it as soon as you have real drafts.\n- **Consider alternatives for cultural fit.** If the site's audience is not English-reading, non-Latin placeholder scripts (Cyrillic, Devanagari, Arabic, Hangul, or CJK) will represent the actual visual density much more honestly.\n\n## Privacy\n\nGeneration happens entirely in your browser. Nothing is uploaded — but there is nothing sensitive in the output anyway.`,
    faqs: [
      { q: "Is lorem ipsum real Latin?", a: "It's a scrambled excerpt of a 1st-century BC Latin text by Cicero. It looks like Latin but doesn't mean anything coherent — that's the point." },
      { q: "Why use placeholder text instead of real copy?", a: "Placeholder text lets viewers focus on layout and typography without being distracted by content — the standard practice in design mockups." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/slugify": {
    title: "Slug Generator — Convert Text to URL-Friendly Slugs Free",
    metaDescription: "Turn any title into a clean, URL-friendly slug — lowercased, ASCII-only, with dash or underscore separators. Free online slug generator, no signup.",
    keyword: "slug generator",
    intro: [
      "Turn any title, headline, or phrase into a clean, URL-friendly slug in one click. The slugifier lowercases the text, strips accents and punctuation, and joins the words with a dash or underscore of your choice.",
      "Perfect for blog authors, developers, marketers, and anyone who needs safe URLs, file names, or database keys generated from human-friendly text.",
    ],
    features: [
      "Lowercases and ASCII-normalizes the input",
      "Handles accents, apostrophes, and Unicode gracefully",
      "Choose dash (-) or underscore (_) as the separator",
      "Live preview and one-click copy",
    ],
    guide: `## What a URL slug is\n\nA URL slug is the human-readable tail end of a web address — the part that comes after the domain and category, like *my-first-post* in *example.com/blog/my-first-post*. Good slugs are short, lowercase, ASCII-only, and joined with dashes. Bad slugs are long, mixed-case, riddled with punctuation, and full of query-string junk.\n\nThe slug is the part of a URL that both humans and search engines actually read. A well-crafted slug tells a reader what the page is about before they click, and gives search engines a strong signal about the page's topic. Getting this right is one of the cheapest, longest-lasting SEO wins available.\n\n## What the Slug Generator does\n\nThe tool takes any string and returns a URL-safe slug by doing four things: it lowercases the text, strips accents (é becomes e), removes punctuation and symbols, and replaces runs of whitespace or non-alphanumeric characters with a single separator of your choice.\n\nSo *"10 Best Practices for Web Design!"* becomes *10-best-practices-for-web-design* — safe to drop straight into a URL, a file name, a database key, or a cache key.\n\n## Step-by-step\n\n**1. Paste your text.** Anything — an article title, a product name, a session ID, a translated phrase with accents.\n\n**2. Pick the separator.** Dashes (a dash) are the standard for URLs and are what search engines expect. Underscores (an underscore) are common in file names and some code identifiers, but avoid them in web URLs.\n\n**3. Copy the slug.** One click. Paste it into your CMS, code, spreadsheet, or bucket key.\n\n## Guidelines for good slugs\n\n- **Keep them short.** Three to six words is usually enough. If your title is *"How to bake the perfect chocolate chip cookies from scratch at home"*, a slug of *bake-chocolate-chip-cookies* is fine.\n- **Use real words.** Slugs like *?id=4821* are opaque; slugs like *chocolate-chip-cookies* are readable. Real words help SEO, sharing, and debugging.\n- **Skip stopwords.** *a*, *an*, *the*, *and*, *of*, *to* rarely add meaning to a slug. Cutting them reads sharper.\n- **Lowercase everything.** Mixed-case slugs work but confuse users who type by hand and can cause 404s on case-sensitive servers.\n- **Never change a published slug** if you can avoid it. The slug is part of the URL, and every change requires a redirect. Get it right the first time.\n\n## Advanced use cases\n\n- **File and image names.** *my-hero-photo.jpg* is far easier to work with than *IMG_2934.JPG*.\n- **S3 keys and CDN paths.** Slugs guarantee your keys are portable and don't require URL encoding.\n- **Database identifiers.** For human-facing IDs (course codes, room names, room slugs), a slugified name is much friendlier than an auto-increment ID.\n- **Kubernetes labels, GitHub repos, Notion databases.** All of these have "no spaces, lowercase, dashes only" rules that the slug generator satisfies automatically.\n\n## Privacy\n\nEverything runs in your browser. Nothing you paste is uploaded, logged, or stored.`,
    faqs: [
      { q: "Should I use dashes or underscores in URLs?", a: "Dashes. Search engines treat dashes as word separators inside a slug; underscores are treated as part of the word. Use underscores in file names or code identifiers, but dashes in URLs." },
      { q: "Can I change a slug after publishing?", a: "You can, but you should add a 301 redirect from the old slug to the new one — otherwise every existing link, share, and search result will break." },
      { q: "Are slugs limited in length?", a: "There is no hard limit, but under 60 characters is a good target. Long slugs are truncated in social shares and look messy in search results." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
    ],
  },
  "/text-tools/add-line-numbers": {
    title: "Add Line Numbers to Text — Free Online Tool",
    metaDescription: "Add line numbers to any text or code online. Free, instant, private — no signup. Perfect for code reviews, logs, and reference.",
    keyword: "add line numbers to text",
    intro: [
      "Prefix every line of your text with a line number. Perfect for code snippets in tutorials, log analysis, book quotations, and any moment you need to reference specific lines.",
      "Runs entirely in your browser — the text is never uploaded.",
    ],
    features: [
      "Any starting number (usually 1)",
      "Padded or unpadded numbering",
      "Custom separator (space, colon, pipe)",
      "Instant and private",
    ],
    guide: `## What the Line Numbers tool does

Take any block of text and prefix each line with a sequential number. Configure the starting number, the width of padding, and the separator between the number and the line. Copy the result and paste it wherever you need line-numbered text.

## When to add line numbers

- **Code snippets in tutorials.** Numbered lines make it easy to reference "line 12 does X" in the explanation.
- **Log analysis.** Adding line numbers before pasting into a bug report gives everyone a common reference.
- **Book or scripture quotations.** Numbered lines help discussion when different people have different editions.
- **Legal documents.** Deposition transcripts and court documents are typically line-numbered by convention.
- **Reviewing writing.** Line numbers make critique easier when reviewers want to point to specific lines.

## Step-by-step

**1. Paste your text.** Any length works.

**2. Pick your options.** Starting number, padding width (2 for up to 99 lines, 3 for up to 999, 4 for larger files), and separator.

**3. Copy the numbered result.** One click.

## Padding and separator choices

- **Padding** aligns numbers so all lines start at the same column. \`  1\` vs \` 42\` vs \`999\` — all three characters wide.
- **Space separator** \`  1 my line\` reads cleanly for prose.
- **Colon separator** \`  1: my line\` is common in code comments and terminal output.
- **Pipe separator** \`  1| my line\` mimics editor sidebar styling.

## Prose vs code

- **For prose:** number every sentence or every paragraph, depending on granularity. This tool numbers every line as written, which for prose usually means every paragraph if lines aren't hard-wrapped.
- **For code:** number every physical line, blanks included. This is what code editors and IDEs do by convention.

## Removing line numbers

To strip line numbers from text (e.g. when pasting a code snippet from a numbered source), use a find-replace on the leading pattern — typically \`^\\s*\\d+[\\s:|]\\s*\` — or paste into a tool that only accepts unnumbered code.

## Tips

- **Match the separator to your context.** Tutorials and blog posts often use colon; forums and pastes often use pipe.
- **Set start number to 0** for arrays or 0-indexed content.

## Privacy

All numbering happens in your browser.`,
    faqs: [
      { q: "Does it number blank lines?", a: "Yes. Every physical line, including blanks, gets a number — matching how code editors work." },
      { q: "Can I start from a number other than 1?", a: "Yes. Set the starting number to anything you like — useful for continuing from a previous snippet." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/binary-to-text": {
    title: "Binary to Text Converter — Free Online Decoder",
    metaDescription: "Convert binary code (0s and 1s) to text online. Free binary decoder — instant, private, no signup. Supports ASCII and UTF-8.",
    keyword: "binary to text",
    intro: [
      "Convert binary code (8-bit or space-separated bytes of 0s and 1s) into readable text. Supports ASCII and UTF-8.",
      "Perfect for coursework, puzzles, and decoding messages embedded in binary. Runs entirely in your browser.",
    ],
    features: [
      "Handles space-separated or continuous 8-bit chunks",
      "UTF-8 and ASCII",
      "Instant conversion",
      "Private, browser-based",
    ],
    guide: `## What the Binary to Text tool does

Take binary code — sequences of 0s and 1s — and convert them into readable text. Each 8-bit group represents one character. The tool accepts binary with spaces between bytes (\`01001000 01101001\`) or as a continuous string (\`0100100001101001\`), and decodes them into text.

## When to use it

- **Coursework.** Computer science exercises often ask students to decode binary strings by hand and verify with a tool.
- **Puzzles and escape rooms.** Binary-encoded messages are a classic puzzle format.
- **CTF challenges.** Capture-the-flag competitions frequently include binary-encoded flags or hints.
- **Debugging.** When reading raw byte-level data, converting selected bytes back to text can confirm what a message contains.
- **Understanding character encoding.** Watching text turn into 1s and 0s (and back) is the fastest way to grasp how computers represent characters.

## Step-by-step

**1. Paste your binary.** Either space-separated bytes or one long string of 0s and 1s (in 8-bit chunks).

**2. Read the decoded text.** Instant.

**3. Copy the result.** One click.

## About character encoding

- **ASCII** covers 128 basic characters — English letters, digits, punctuation. Each character is 7 bits (padded to 8 with a leading 0).
- **Extended ASCII / Latin-1** covers 256 characters in 8 bits, including some European accents.
- **UTF-8** is a modern variable-width encoding. English characters use 8 bits; accented Latin characters use 16 bits; other scripts (Cyrillic, Greek, Arabic, CJK) use 24–32 bits.

This tool handles all of them — it decodes the byte stream and lets the browser interpret it as UTF-8, which is a superset of ASCII.

## Common gotchas

- **Missing or extra zeros.** Each byte must be exactly 8 bits. A rogue 7-bit or 9-bit chunk breaks alignment and produces garbage from that point on.
- **Wrong grouping.** If bytes are separated by tabs, newlines, or non-standard delimiters, strip them first so the tool can group into 8-bit chunks correctly.
- **Reverse endianness.** Rare in text encoding, but some low-level puzzles use least-significant-bit-first byte order.

## Tips

- **Combine with Text to Binary** to encode a message, then decode it back — a good way to verify a puzzle you're building.
- **For hex, not binary**, use a hex-to-text tool instead.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "Does it support UTF-8?", a: "Yes. The tool decodes byte streams as UTF-8, which handles all languages, emoji, and special characters correctly." },
      { q: "Why is my output garbled?", a: "Usually because the bytes aren't 8 bits each. Every character needs exactly 8 binary digits — a stray extra or missing bit throws off the entire stream." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/find-replace": {
    title: "Find and Replace Text Online — Free Bulk Tool",
    metaDescription: "Find and replace text online — case-sensitive or regex, whole-word or partial. Free text replacer with instant preview. No signup.",
    keyword: "find and replace text",
    intro: [
      "Find and replace text in bulk. Case-sensitive matching, whole-word matching, and regular expressions supported. Preview the replacement live before copying.",
      "Runs entirely in your browser — the text is never uploaded.",
    ],
    features: [
      "Case-sensitive or case-insensitive",
      "Regular expressions supported",
      "Whole-word matching",
      "Live preview before copying",
    ],
    guide: `## What the Find and Replace tool does

Search for a pattern in your text and replace every occurrence with something else. Choose case-sensitivity, whole-word matching, or use full regular expressions for advanced patterns. See the replaced text in real time before copying.

## When to use bulk find and replace

- **Renaming variables** across a code snippet.
- **Standardizing terminology.** Replace all "colour" with "color" (or the reverse) in a document.
- **Cleaning up scraped text.** Remove stray HTML tags, unwanted timestamps, or duplicate whitespace.
- **Anonymizing.** Replace real names or emails with placeholders before sharing.
- **Reformatting** with regex: turn dates like \`2024-03-15\` into \`March 15, 2024\`, or reformat markdown lists into HTML.

## Step-by-step

**1. Paste your text.** Any length.

**2. Enter the find pattern.** A literal string, or a regex if you enable Regex mode.

**3. Enter the replacement.** Blank replaces with nothing (deletion). Regex mode supports capture groups like \`$1\`.

**4. Toggle options** — case-sensitivity, whole-word matching, regex mode.

**5. Copy the result.** One click.

## Regex quick reference

- **\`.\`** — any single character
- **\`\\d\`** — a digit; **\`\\w\`** — a word character; **\`\\s\`** — whitespace
- **\`*\`** — 0 or more; **\`+\`** — 1 or more; **\`?\`** — 0 or 1
- **\`^\`** and **\`$\`** — start and end of a line
- **\`( )\`** — capture group; reference as **\`$1\`** in replacement
- **\`[abc]\`** — any character in the set; **\`[^abc]\`** — any character not in the set

Example: replace \`(\\d{4})-(\\d{2})-(\\d{2})\` with \`$2/$3/$1\` to convert YYYY-MM-DD to MM/DD/YYYY.

## Case-sensitive vs insensitive

- **Case-sensitive:** \`Apple\` doesn't match \`apple\`. Use when you need exact matches (e.g. renaming a specific variable in code).
- **Case-insensitive:** \`apple\` matches \`Apple\` and \`APPLE\`. Use when tidying prose where casing varies.

## Whole word matching

Whole-word mode matches only when the pattern is a full word — not part of a larger word. Replacing "cat" as a whole word ignores "cathedral" and "concatenate". Skip whole-word mode when you want partial matches.

## Tips

- **Preview before committing.** Always compare the output to the input before copying.
- **For complex regex**, test on a small snippet first, then run on the full document.
- **Chain operations.** Do multiple find-replaces sequentially — each one takes the previous result as input.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "Does it support regular expressions?", a: "Yes. Toggle Regex mode to use full regex, including capture groups (referenced as $1, $2 in the replacement)." },
      { q: "How do I delete matching text?", a: "Leave the replacement field empty. Every match will be removed." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/remove-line-breaks": {
    title: "Remove Line Breaks from Text Online — Free",
    metaDescription: "Remove or replace line breaks in text online. Free, instant, private. Choose to strip all breaks or keep paragraph breaks. No signup.",
    keyword: "remove line breaks",
    intro: [
      "Strip all line breaks from your text, or keep only paragraph breaks (double line breaks). Perfect for cleaning up copy-pasted text from PDFs, articles, and emails.",
      "Runs entirely in your browser.",
    ],
    features: [
      "Remove every line break",
      "Keep paragraph breaks (double newlines)",
      "Replace breaks with a chosen character",
      "Instant, private, browser-based",
    ],
    guide: `## What the Remove Line Breaks tool does

Strip line breaks from your text — either every break or only the "wrap" breaks within paragraphs, keeping true paragraph breaks intact. Perfect for cleaning up text copied from PDFs, articles, and emails where the source hard-wrapped every line at a fixed column.

## When to remove line breaks

- **PDF copy-paste.** PDFs often wrap text at column boundaries. Pasting into a normal document leaves ugly breaks mid-sentence.
- **Emails.** Older email tools hard-wrapped at 72 columns. Modern email doesn't need this, and the wrapping looks broken.
- **Web articles copied to a doc.** Sites sometimes insert \`<br>\` for visual layout; the resulting paste has one break per visual line.
- **AI input.** Feeding text to an AI works best when paragraphs are single continuous blocks.
- **Reformatting for a new column width.** Remove old wrapping so the text can re-flow naturally.

## Step-by-step

**1. Paste your text.** Any length.

**2. Pick your mode:**
   - **Remove all breaks** — every newline becomes a space.
   - **Keep paragraph breaks** — single line breaks become spaces; double breaks (paragraph separators) stay.
   - **Replace with custom** — choose what to put in place of each break.

**3. Copy the cleaned text.** One click.

## The difference between line and paragraph breaks

In most word processors:

- **Line break** — a newline within a paragraph (Shift+Enter in Word).
- **Paragraph break** — a full paragraph terminator (Enter in Word). In plain text, this is a blank line, or two consecutive newlines.

When you copy from a PDF, the reader inserts a line break at every visual line — which is *not* what the author meant. Removing these while preserving paragraph breaks restores the intended structure.

## Tips

- **Read the result.** Some paragraphs may have quirky spacing where the source used unusual break patterns. Fix by hand.
- **For code**, do NOT remove line breaks — code structure depends on them.
- **For hyphenated line-end words** (like "recon-\\nfigure"), you may need a separate find-replace to rejoin the halves before removing breaks.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "Will it destroy my paragraph structure?", a: "Not if you choose 'Keep paragraph breaks'. Only within-paragraph line breaks are removed; paragraph separators (blank lines) stay." },
      { q: "Can I replace line breaks with something other than a space?", a: "Yes. Use the custom replacement option to substitute any character — a comma, a pipe, an em-dash — for each removed break." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/rot13": {
    title: "ROT13 Encoder & Decoder Online — Free Cipher Tool",
    metaDescription: "Encode and decode ROT13 text online. Free ROT13 tool — instant, private, no signup. Classic Caesar cipher for puzzles and mild obfuscation.",
    keyword: "rot13 encoder decoder",
    intro: [
      "Encode or decode ROT13 text — the classic Caesar cipher that shifts every letter by 13 places. Because 26 ÷ 2 = 13, the same operation encodes and decodes.",
      "Perfect for puzzles, forum spoilers, and mild obfuscation. Runs entirely in your browser.",
    ],
    features: [
      "Same operation encodes and decodes",
      "Handles upper and lower case",
      "Non-letters pass through unchanged",
      "Instant, private, browser-based",
    ],
    guide: `## What ROT13 does

ROT13 is a simple substitution cipher that shifts every letter of the alphabet by 13 positions. A becomes N, B becomes O, C becomes P, and so on. Because there are 26 letters and 13 is exactly half, applying ROT13 twice returns the original text — the same operation encodes and decodes.

Only letters are affected. Digits, punctuation, spaces, and non-Latin characters pass through unchanged.

## When to use ROT13

- **Forum spoilers.** Hiding a movie twist or puzzle answer so casual readers don't accidentally see it.
- **Puzzles.** ROT13 is a favorite in escape rooms, riddles, and cryptography intros.
- **Mild obfuscation.** Preventing a simple text search from finding a term — for example, hiding a word in a comment thread.
- **Coursework.** Introducing students to substitution ciphers.
- **Nostalgia.** Usenet, IRC, and early web forums used ROT13 constantly for spoiler tags.

## Step-by-step

**1. Paste your text** — either plaintext (to encode) or ROT13 ciphertext (to decode).

**2. Read the result** immediately.

**3. Copy the output** with one click.

## ROT13 is NOT encryption

ROT13 is not secure and never has been. Anyone can decode it in seconds — that's the entire point of using it as a spoiler tag. Never use ROT13 to hide passwords, personal data, or anything that shouldn't be trivially reversible.

For real encryption, use AES or another modern algorithm through a proper security tool. ROT13 is for social conventions (spoilers, casual obfuscation), not confidentiality.

## Variants

- **ROT13** shifts letters only. Most common.
- **ROT47** shifts printable ASCII characters (letters, digits, punctuation) by 47 positions — obscures more than ROT13 but is still trivially reversible.
- **Caesar cipher** is the general form: shift by any number 1–25. ROT13 is Caesar shift 13.

## Tips

- **Test round-trip.** Encode a phrase and decode the result to confirm you get the original.
- **Non-Latin scripts** (Cyrillic, Greek, Arabic, CJK) pass through unchanged — ROT13 is defined only over the 26-letter Latin alphabet.

## Privacy

All transformation runs in your browser.`,
    faqs: [
      { q: "Is ROT13 secure?", a: "No. ROT13 is trivially reversible — anyone can decode it in seconds. Use it for spoilers and puzzles, never for real privacy or security." },
      { q: "Do I need to choose encode or decode?", a: "No. Because 26 ÷ 2 = 13, applying ROT13 twice returns the original text. The same button encodes and decodes." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/text-repeater": {
    title: "Text Repeater Online — Repeat Text N Times Free",
    metaDescription: "Repeat any text or word N times online. Free text repeater with custom separator. Instant, private, no signup — works in your browser.",
    keyword: "text repeater",
    intro: [
      "Repeat any word, phrase, or block of text as many times as you like, with your choice of separator between each repetition. Perfect for filler text, test data, and playful posts.",
      "Runs entirely in your browser.",
    ],
    features: [
      "Repeat any text 1 to 100,000 times",
      "Custom separator (newline, comma, space, or anything)",
      "Instant output for large counts",
      "Private, browser-based",
    ],
    guide: `## What the Text Repeater does

Type any text and pick how many times to repeat it. Choose a separator — newline, space, comma, or any custom string — to control what goes between each repetition. Copy the result to your clipboard.

## When to use it

- **Test data.** Generating N copies of a form field, a database row, or an API payload for load testing.
- **CSS and layout mockups.** Creating placeholder content to see how a design handles repetition.
- **Playful social posts.** "Happy birthday" repeated 30 times, one per line, for someone's 30th.
- **Filler text.** Padding out a mockup with real-shaped content rather than lorem ipsum.
- **Rate-limit testing.** Sending N identical requests to check server behavior.
- **Educational demos.** Illustrating loops, arrays, or the concept of repetition to a beginner.

## Step-by-step

**1. Enter the text to repeat.** A word, a phrase, or a full paragraph.

**2. Choose the count.** 1 to 100,000. Very large counts (over 10,000) may take a moment to render.

**3. Pick a separator.**
   - **Newline** produces N stacked lines.
   - **Space** produces a horizontal stream.
   - **Comma + space** produces a CSV-style list.
   - **Custom** — any string, including \`|\` or \`---\` for visual dividers.

**4. Copy the output.** One click.

## Choosing the right separator

- **Newlines** for lists, form entries, and test data (one per line).
- **Commas** for CSV, database seeding, and comma-separated arguments.
- **Spaces** for filler paragraphs or "keyword stuffing" test text.
- **Custom** for creative uses — dividers, code separators, or emoji strings.

## Watch out for extremes

Extremely large counts (over 100,000) can freeze the browser tab briefly while rendering. If you need millions of repetitions, use a script (\`for\` loop in Python, JavaScript, or shell) — this tool is optimized for human-sized repetition tasks.

## Tips

- **Repeat and then find-replace.** Use the Repeater to generate a template, then use Find & Replace to swap in per-item values (a counter, a random name, etc.).
- **Combine with Line Numbers** to produce numbered filler test data quickly.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "What's the maximum repeat count?", a: "The tool supports up to 100,000 repetitions. For larger volumes, a scripting language will be faster than any browser tool." },
      { q: "Can I use special characters as the separator?", a: "Yes. Use the custom separator field to enter any string — spaces, tabs, pipes, emoji, or multi-character dividers like ' --- '." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/text-to-binary": {
    title: "Text to Binary Converter — Free Online Encoder",
    metaDescription: "Convert text to binary code online. Free text-to-binary encoder supporting ASCII and UTF-8. Instant, private, no signup required.",
    keyword: "text to binary",
    intro: [
      "Convert any text into binary code — 8 bits per byte, space-separated for readability. Supports full UTF-8, so emoji and non-Latin scripts work correctly.",
      "Perfect for puzzles, coursework, and understanding character encoding. Runs entirely in your browser.",
    ],
    features: [
      "Full UTF-8 support (emoji, all scripts)",
      "Space-separated 8-bit groups by default",
      "Optional continuous output (no spaces)",
      "Instant, private, browser-based",
    ],
    guide: `## What the Text to Binary tool does

Convert any text into its binary representation. Each character becomes one or more bytes (depending on the character), and each byte becomes 8 bits of 0s and 1s. By default, bytes are separated by spaces to keep the output readable; you can also produce continuous output for compact storage.

## When to use it

- **Coursework.** Understand how computers store text at the byte level.
- **Puzzles.** Create binary-encoded messages for escape rooms, riddles, or CTF challenges.
- **Debugging.** Convert a suspicious character to binary to see its exact byte pattern.
- **Illustration.** Show non-technical audiences the "under the hood" reality of digital text.
- **Data prep.** Generate byte sequences for low-level programming exercises.

## Step-by-step

**1. Paste your text.** Any length; any language, including emoji.

**2. Choose spacing.** Space-separated for readability, continuous for compact output.

**3. Copy the binary.** One click.

## Character encoding, briefly

- **ASCII characters** (A-Z, a-z, 0-9, common punctuation): 1 byte = 8 bits each.
- **Latin-1 extended** (é, ñ, ü, etc. in UTF-8): 2 bytes each.
- **Cyrillic, Greek, Hebrew, Arabic**: 2 bytes each.
- **CJK (Chinese, Japanese, Korean)**: 3 bytes each.
- **Emoji and rare symbols**: 4 bytes each.

This tool always uses UTF-8, which is the modern standard for text encoding on the web and in most operating systems.

## Reverse operation

Use the Binary to Text tool to decode any binary string back into readable text. Round-tripping text through both tools should return the exact input — a good sanity check for a puzzle you're building.

## Tips

- **Emoji are big.** A single emoji like 🎉 is 4 bytes = 32 bits. A short message with emoji can produce much more binary than expected.
- **For hex output instead**, use a text-to-hex tool — hex is more compact and easier for humans to read than binary.

## Privacy

All conversion runs in your browser.`,
    faqs: [
      { q: "Does it support emoji and Chinese characters?", a: "Yes. The tool uses UTF-8, which encodes every character in any language. Emoji are typically 4 bytes each; CJK characters are 3 bytes." },
      { q: "Why is my output so long?", a: "Every character in UTF-8 is 8, 16, 24, or 32 bits. A single emoji is 32 bits. Non-ASCII text produces much more binary than plain English." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/whitespace-remover": {
    title: "Remove Extra Whitespace Online — Free Text Cleaner",
    metaDescription: "Remove extra spaces, tabs, and blank lines from any text online. Free whitespace cleaner — instant, private, no signup required.",
    keyword: "remove extra whitespace",
    intro: [
      "Clean up messy text by removing extra spaces, tabs, and blank lines. Choose how aggressive to be — from just trimming line ends to collapsing every whitespace run into a single space.",
      "Runs entirely in your browser.",
    ],
    features: [
      "Trim leading/trailing spaces on every line",
      "Collapse multiple spaces into one",
      "Remove blank lines",
      "Instant, private, browser-based",
    ],
    guide: `## What the Whitespace Remover does

Clean up messy text by controlling exactly how whitespace is normalized. Options range from a gentle trim of line ends to an aggressive collapse of every run of spaces, tabs, and blank lines into single spaces.

## When to use it

- **Cleaning copied text.** Text from PDFs, emails, or old documents often has stray tabs, doubled spaces, and inconsistent indentation.
- **Preparing form input.** Trimming user-submitted text before saving prevents "  bob  " and "bob" from appearing as different names.
- **Normalizing data for import.** CSV or TSV files with inconsistent spacing import cleaner when whitespace is normalized first.
- **Word count accuracy.** Extra whitespace inflates word counts and confuses text-analysis tools.
- **Compact formatting.** Removing all runs of whitespace makes text compact for storage or transmission.

## Step-by-step

**1. Paste your text.** Any length.

**2. Pick your cleaning options:**
   - **Trim lines** — strip leading and trailing spaces from every line.
   - **Collapse spaces** — replace every run of 2+ spaces with a single space.
   - **Remove blank lines** — collapse multiple blank lines into one, or remove them entirely.
   - **Normalize all whitespace** — the aggressive option: every run of any whitespace becomes one space.

**3. Copy the cleaned text.** One click.

## Whitespace characters to know

- **Regular space** — what the space bar produces.
- **Tab** — a horizontal tab character. Often mixed with spaces in copied code.
- **Non-breaking space** (\`\\u00A0\`) — looks like a space but doesn't break at line ends. Common in HTML paste.
- **Line breaks** — newline (\`\\n\`), carriage return (\`\\r\`), or CRLF (\`\\r\\n\`) depending on the source OS.
- **Zero-width space** (\`\\u200B\`) — invisible but present. Sometimes used for obfuscation.

The most aggressive normalization option handles all of these.

## Careful with code

Code structure depends on whitespace. Never run "collapse all spaces" on Python or YAML — indentation is meaningful. For code, use only "trim trailing whitespace" and skip the more aggressive options.

## Tips

- **Preview before committing.** Compare the cleaned output to the original to catch cases where you've stripped meaningful whitespace.
- **Chain tools.** Use Remove Line Breaks first to normalize paragraph structure, then Whitespace Remover to clean within-line spacing.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "Will it remove tabs?", a: "Yes if you choose 'collapse spaces' or 'normalize all whitespace'. The 'trim lines' option only touches leading and trailing whitespace." },
      { q: "Is it safe for code?", a: "Only 'trim trailing whitespace' is safe for indented languages like Python or YAML. More aggressive options destroy meaningful indentation." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
  "/text-tools/word-frequency": {
    title: "Word Frequency Counter Online — Free Text Analyzer",
    metaDescription: "Count word frequency in any text online. Free word frequency analyzer — instant, private, no signup. Ideal for writing analysis and SEO.",
    keyword: "word frequency counter",
    intro: [
      "Analyze any text and see which words appear most often. Ranks every word by frequency, ignores case, and can skip common stop words for cleaner results.",
      "Perfect for writing analysis, keyword research, and understanding what a document is really about.",
    ],
    features: [
      "Ranks every word by count",
      "Case-insensitive matching",
      "Optional stop-word filter",
      "Instant, private, browser-based",
    ],
    guide: `## What the Word Frequency Counter does

Analyze any block of text and list every unique word along with how often it appears, sorted from most to least frequent. Case is ignored (\`The\` and \`the\` count together) and you can optionally skip stop words — the common filler like \`the\`, \`a\`, \`and\` that dominate any text — for a cleaner picture of what the content is actually about.

## When to use it

- **Writing analysis.** Discover which words you overuse in your own writing.
- **SEO keyword extraction.** See which terms carry the most weight in a competitor's page.
- **Content editing.** Identify repetitive vocabulary and vary your word choice.
- **Language learning.** Find the most common words in a text you're translating.
- **Text summarization sanity check.** Confirm that a document's top words match its actual topic.
- **Academic analysis.** Word frequency is a core tool in stylometry and authorship attribution.

## Step-by-step

**1. Paste your text.** Any length; longer text gives more meaningful frequencies.

**2. Toggle stop-word removal.** On for topic-focused analysis; off for full unfiltered counts.

**3. Read the ranked list** — most-used words at the top.

**4. Copy or download** the list for further analysis in a spreadsheet.

## About stop words

Stop words are the most common words in a language that carry little meaning on their own: \`the\`, \`and\`, \`is\`, \`in\`, \`of\`, \`to\`, \`a\`, \`for\`, etc. In any text, these dominate the top of a frequency list — which is technically true but not useful if you want to know the topic.

Removing stop words is a classical NLP preprocessing step. This tool uses a standard English stop-word list; the result surfaces the words that actually characterize the document.

## Interpreting the results

- **Top 5 words** (with stop words filtered) usually reveal the main topic.
- **A long tail** of words used exactly once is normal — most vocabulary is rare.
- **Repetition is a style signal.** A word appearing 20 times in a 500-word essay is a candidate for variety.
- **Compare two texts** by running each and comparing the top words.

## Limitations

- **Word-boundary rules** are simple — punctuation is stripped and words are split on whitespace. Compound terms like "New York" are treated as two words.
- **English focus.** The stop-word list is English. Non-English text still counts words correctly but stop-word removal only helps for English.
- **Case-folding, not stemming.** \`run\` and \`running\` count separately. For grouping word forms, use a stemming tool.

## Privacy

All processing runs in your browser.`,
    faqs: [
      { q: "What are stop words?", a: "Very common words like 'the', 'and', 'is', 'of' that carry little meaning on their own. Removing them from a frequency count reveals the terms that actually describe the topic." },
      { q: "Does it group different forms of the same word?", a: "No. 'run' and 'running' count separately. For word-form grouping, use a stemming or lemmatization tool." },
      { q: "Is this tool really free?", a: "Yes. Every ToolsHive tool is completely free with no signup, no watermark, and no daily limit for typical use." },
      { q: "Do I need an account?", a: "No. Nothing on ToolsHive requires signup — open the tool and start using it immediately." },
    ],
  },
};
