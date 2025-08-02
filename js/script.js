// DOM Elements
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('#sidebar a');
const articlesContainer = document.querySelector('.articles');
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');
const modalCloseBtn = document.getElementById('modal-close');
const goTopBtn = document.getElementById('goTop');

const baseTitle = 'Joslina Fernandes';
let lastSection = 'ABOUT';

// → Manually defined demo articles
// Manually defined demo articles with extended content
const articles = [
  {
    id: 1,
    title: 'Getting Started with SQL',
    date: 'Coming Soon',
    readTime: '-',
    aboutcontent: 'In this tutorial, I\'ll be explaining the basics of SQL in simple, beginner-friendly terms using clear examples and analogies to help someone new to SQL understand how databases and tables work.',
    img: 'assets/images/sql.png',
    content: `
      <h2 class="papertitle">
        <center>
          Getting Started with SQL
        </center>
      </h2><br>
      <h3>
        <center>
          Coming Soon...
        </center>
      </h3><br>
      `
  },
  {
    id: 2,
    title: 'Data Gaps and Blind Spots: <br>Why Quality Local Businesses Go Unrecognized on AI Searches',
    date: 'July 26, 2025',
    readTime: '25 mins read',
    aboutcontent: 'This study examines offline-first businesses in Goa, highlighting the gap between digital visibility and real-world reputation and suggesting ways to make AI-driven discovery more inclusive.',
    img: 'assets/images/ai.jpg',
    content: `
      <h1 class="papertitle">
        <center>
          Data Gaps and Blind Spots:<br>
          Why Quality Local Businesses Go Unrecognized on AI Searches
        </center>
      </h1><br>
      <h2 class="paperheader1">
        <center>
          Abstract
        </center>
      </h2>
      <p class="ptextintro">
        AI-powered search tools, such as ChatGPT, Perplexity, Microsoft Copilot, and Google’s AI 
        Overviews (Gemini), are rapidly replacing traditional search engines for information discovery. 
        While these tools excel at interpreting queries, delivering quick and contextually accurate 
        answers, these platforms consistently fall short in identifying and recommending high-quality 
        local businesses that have a minimal or non-existent online footprint. 
        To demonstrate the issue, this study examines two offline-first businesses in Goa, India, 
        including a tailor and a beauty salon, based on a small, locally gathered dataset. The study 
        highlights the disconnect between digital visibility and real-world reputation and proposes 
        strategies to make AI-driven discovery more inclusive of offline and underrepresented 
        businesses. 
      </p><br>
      <h2 class="paperheader1">
        <center>
          Keywords
        </center>
      </h2>
      <p class="ptextintro">
        AI Search • Local Business • Digital Exclusion • Discoverability • 
        Large Language Models (LLM) • Offline Businesses • Digital Footprint • 
        Search Engine Bias • Structured Data • Schema Markup • Rural Entrepreneurship • 
        MSME Digitalization • ONDC • Business Directories • Technology Adoption • 
        AI Recommendations • Digital Visibility
      </p><br>
      <h2 class="paperheader1">
          1. Introduction
      </h2>
      <p class="ptextlevel1">
        AI-powered search tools are rapidly transforming how people find and consume information. 
        Unlike traditional keyword-based search engines, AI systems use large language models (LLMs) 
        to understand and generate text like a human, in addition to other forms of content, based on the 
        vast amount of data used to train them <sup><a class="cite" href="#ref1">[1]</a></sup>. These tools are increasingly relied upon not just for 
        general knowledge but also for making everyday decisions such as where to eat, what to buy, 
        or what service to trust.<br><br>

        However, this shift has surfaced a critical blind spot in AI-assisted search: its inability to discover 
        or recommend high-quality local businesses that lack an active online presence. While AI 
        engines perform exceptionally with businesses that are well-represented in the digital 
        ecosystems, many small, traditional, or regionally known businesses remain virtually invisible.<br><br>

        This problem is particularly pronounced in regions where the digital infrastructure is uneven or 
        where small business owners lack the resources, awareness, or technical skills to establish and 
        maintain an online footprint. As AI tools govern public visibility, the exclusion of digitally absent 
        businesses can lead to an incomplete representation of local economies, favouring those who 
        are digitally savvy. This paper explores the roots and implications of this emerging disparity. 
      </p><br>
      <h2 class="paperheader1">
          2. Evolution of Search Technologies
      </h2>
      <p class="ptextlevel1">
        Search engines have progressed significantly over the past decades from simple keyword
        matching tools to sophisticated, AI-driven platforms. This evolution has directly influenced how 
        information is retrieved, ranked, and interpreted in the digital age <sup><a class="cite" href="#ref2">[2]</a></sup>.<br><br>
        <ul class="ptextlevel2">
          <li>
            Early search engines focused on matching exact keywords in web pages, often without 
            understanding user intent. 
          </li>
          <li>
            Link analysis algorithms, like Google’s PageRank, improved relevance by ranking pages 
            based on backlinks and authority. 
          </li>
          <li>
            Semantic search introduced contextual understanding, helping search engines 
            interpret the meaning behind queries rather than focus on literal terms. 
          </li>
          <li>
            The integration of Natural Language Processing (NLP) allowed for better handling of 
            conversational or complex user inputs. 
          </li>
          <li>
            Today, Large Language Models (LLMs) further enhance search by generating context
            aware responses drawn from multiple sources. 
          </li>
          <li>
            However, these advanced tools still rely heavily on structured and well-indexed digital 
            content—such as schema markup, business listings, and user reviews—for effective 
            discovery and ranking.
          </li>
          <li>
            While innovation continues, critical gaps remain in including businesses or knowledge
            sources that lack a machine-readable or consistent online presence.
          </li>
        </ul>
      </p><br>
      <h2 class="paperheader1">
          3. What AI Search Engines Depend On
      </h2>
      <p class="ptextlevel1">
        AI tools, especially those powered by Large Language Models (LLMs), generate results by 
        analysing vast amounts of online data. These include <sup><a class="cite" href="#ref3">[3]</a></sup>:
        <ul class="ptextlevel2">
          <li>
            <b>Web-indexed content:</b> Websites, blogs, news articles.
          </li>
          <li>
            <b>Structured data:</b> Schema tags, business directories, product listings.
          </li>
          <li>
            <b>User reviews:</b> From Google, TripAdvisor, etc. 
          </li>
          <li>
            <b>Knowledge bases:</b> Wikipedia, Wikidata, public business databases. 
          </li>
          <li>
            <b>Social media data:</b> Posts and trends from platforms like Instagram, Twitter, Facebook, and others. 
          </li>
          <li>
            <b>Query trends and search patterns:</b> Data from search engine analytics such as Google Trends. 
          </li>
          <li>
            <b>Official records and public datasets:</b> Government statistics, open data portals, and specialized repositories. 
          </li>
          <li>
            <b>Sentiment and news signals:</b> News media, press releases, etc. 
          </li>
          <li>
            <b>Real-time sources:</b> Recently updated or live information streams for accuracy and timeliness. 
          </li>
        </ul>
        <p class="ptextlevel1">
          In short, if a business has not created an online footprint, or if that footprint isn’t machine
          readable, it likely won’t appear in AI-generated search results. This excludes many small, 
          traditional, or rural businesses that operate entirely offline or rely solely on word-of-mouth.
        </p>
      </p><br>
      <h2 class="paperheader1">
        4. Case Illustration: Real-Life Examples of AI Missing Local Businesses 
      </h2><br>
      <h2 class="paperheader2">
        4.1. Case Example 1: Beauty and Style, Colem, Goa 
      </h2>
      <h2 class="paperheader3">
        4.1.1. Case Overview 
      </h2>
      <p class="ptextlevel2">
        Reshma Khandeparkar runs a small salon cum tailor shop - Beauty and Style, in Colem, Goa, with a 
        strong local clientele. Her shop is known for quality stitching of Indian traditional garments, 
        primarily attracting customers through personal recommendations and community reputation. 
        However, unlike many newer businesses, Reshma’s shop has no online presence. It does not 
        appear on Google, Justdial, or any other online platform.<br>
        Despite being well-regarded offline, Reshma’s tailor shop remains completely invisible to AI
        powered search tools and online directories. Consequently, potential new customers searching 
        online for tailoring services in Colem or nearby areas cannot find or discover her business.<br>
      </p>
      <h2 class="paperheader3">
        4.1.2. Factors Causing Digital Exclusion 
      </h2>
      <ul class="ptextlevel3">
        <li>
          <b>No Online Presence:</b> The tailor shop lacks any website, social media profile, or listing on 
          business directories or local search engines. 
        </li>
        <li>
          <b>Absence of Structured Data:</b> Since the business is not digitally registered, AI and search 
          algorithms have no structured information like schema markup or verified contact details to 
          index or rank it. 
        </li>
        <li>
          <b>Offline-First Business Model:</b> Operating chiefly through word-of-mouth within the local 
          community, Reshma’s business model has not adopted digital marketing or online visibility 
          practices.
        </li>
      </ul>
      <h2 class="paperheader3">
        4.1.3. Impact on Discoverability 
      </h2>
      <p class="ptextlevel2">
        The complete absence of digital footprints means that AI-powered search tools treat Reshma’s 
        shop as non-existent online. This exclusion limits her ability to attract new, especially non-local 
        or younger customers who rely heavily on online searches and AI recommendations. It also 
        places her at a competitive disadvantage compared to tailors who maintain any level of digital 
        presence.
      </p><br>
      <h2 class="paperheader2">
        4.2. Case Example 2: Shahnaz Beauty Salon & Mehendi Studio
      </h2>
      <h2 class="paperheader3">
        4.2.1. Case Overview 
      </h2>
      <p class="ptextlevel2">
        Shahnaz Beauty Salon & Mehendi Studio, located in Margao, Goa, is a well-established 
        business with over two decades of experience. The salon is very famous for its intricate 
        mehendi (henna) designs and has built a clientele primarily through word-of-mouth and local 
        reputation rather than a comprehensive digital presence.<br>
        Despite its longevity and strong local brand, Shahnaz Beauty Salon & Mehendi Studio remains 
        frequently absent from AI-generated lists and online directories of mehendi parlours in Margao. 
        Searches for “Mehendi parlours in Margao” via popular AI-powered search tools rarely mention 
        it alongside newer or more digitally visible salons in the area. <br>
      </p>
      <h2 class="paperheader3">
        4.2.2. Factors Causing Digital Exclusion 
      </h2>
      <ul class="ptextlevel3">
        <li>
          <b>Partial Online Presence:</b> Shahnaz Beauty Salon & Mehendi Studio appears once on a consumer listing platform – 
          Justdial. However, it lacks a dedicated website, Google Business profile, or active social 
          media handles <sup><a class="cite" href="#ref4">[4]</a></sup>.  
        </li>
        <li>
          <b>Limited Structured Data:</b> The Justdial listing contains basic information but does not 
          include metadata that AI platforms typically rely on, such as schema markup, service 
          descriptions, or verified customer reviews. 
        </li>
        <li>
          <b>Name Confusion with a Closed Business:</b> Google search results often show “Shahnaz 
          Husain’s Beauty Parlour”, which is listed as permanently closed on Google, creating brand 
          confusion. This confusion may result in misclassification by AI systems that the still
          operational salon is no longer active <sup><a class="cite" href="#ref5">[5]</a></sup>. 
        </li>
      </ul>
      <h2 class="paperheader3">
        4.2.3. Impact on Discoverability 
      </h2>
      <p class="ptextlevel2">
        The combined effects of a limited online footprint and naming conflict highlights how high-quality, 
        long-standing local businesses can remain invisible in AI-powered search 
        environments, despite its real-world success and reputation. 
      </p><br>
      <h2 class="paperheader1">
          5. Findings
      </h2>
      <p class="ptextlevel1">
        This study identifies a critical gap in the ability of AI-powered search tools to recognize 
        and recommend high-quality local businesses with limited digital presence. The key 
        findings are summarized below:
      </p>
      <h2 class="paperheader3">
        5.1. AI Systems Prioritize Digital Footprints 
      </h2>
      <p class="ptextlevel2">
        AI-driven platforms rely heavily on structured, machine-readable online content such 
        as websites, schema markup, business directories, and user reviews for indexing and 
        ranking. As a result, businesses without such digital assets are largely excluded from 
        AI-generated search results, regardless of their real-world reputation 
        <sup><a class="cite" href="#ref6">[6]</a></sup>. 
      </p>
      <h2 class="paperheader3">
        5.2. Digital Visibility ≠ Service Quality
      </h2>
      <p class="ptextlevel2">
        The likelihood of appearing in AI search outcomes is more closely linked to a business’s 
        digital optimization than to its actual quality of service, local trust, or operational 
        longevity. This creates a misleading representation of business excellence that favors 
        marketing reach over community reputation <sup><a class="cite" href="#ref7">[7]</a></sup>.
      </p>
      <h2 class="paperheader3">
        5.3. Naming Conflicts and Incomplete Listings Reduce Visibility
      </h2>
      <p class="ptextlevel2">
        Businesses that share names with competitors or that have partial listings, often are omitted in 
        AI search results. In such cases, incomplete digital data leads to confusion and exclusion, even 
        when the business is fully operational.
      </p>
      <h2 class="paperheader3">
        5.4. AI Search Tools Mirror Digital Inequities
      </h2>
      <p class="ptextlevel2">
        Because AI relies on digital data, it often leaves out businesses in rural or low-income areas 
        that don’t have the resources or support to be online. Over time, this could widen the gap 
        between digitally connected businesses and those that still rely on word-of-mouth or walk-in 
        customers.
      </p><br>      
      <h2 class="paperheader1">
        6. Proposed Solution
      </h2>
      <p class="ptextlevel1">
        To address the challenge of quality local businesses going unrecognized on AI-powered search 
        platforms, the following proposed solutions emerge from current research and practical 
        insights: 
      </p>
      <h2 class="paperheader3">
        6. 1. Facilitating Transition of Businesses from Offline to Online
      </h2>
      <p class="ptextlevel2">
        Encourage and support small and traditional businesses to establish a comprehensive digital 
        presence, including websites, verified business listings (Google Business Profile), and social 
        media engagement. According to a study by Vi Business, almost 60% of Micro, Small, and 
        Medium Enterprises (MSMEs) in India plan to digitize their business processes by 2025, with 
        43% intending to increase their digitalization budget <sup><a class="cite" href="#ref8">[8]</a></sup>.
      </p>
      <h2 class="paperheader3">
        6.2. Using AI Tools to Help Small Businesses Go Digital 
      </h2>
      <p class="ptextlevel2">
        Small businesses can use AI tools to make their work easier and grow their business, even if 
        they don’t have much digital experience. AI can help with online marketing, writing personal 
        messages to send to customers, and improving daily operations. Tools like ready-made 
        templates, chatbots, and simple dashboards can make it easier for small businesses to get 
        started online <sup><a class="cite" href="#ref9">[9]</a></sup>.
      </p>
      <h2 class="paperheader3">
        6.3. Government Support and Local Campaigns 
      </h2>
      <p class="ptextlevel2">
        Governments should run local digitization drives through panchayats, municipal offices, and 
        trade departments. India's ONDC (Open Network for Digital Commerce) is one such initiative 
        that helps small, offline vendors plug into a shared e-commerce platform 
        <sup><a class="cite" href="#ref10">[10]</a></sup>.
      </p>
      <h2 class="paperheader3">
        6.4. Involving Students and Youth Volunteers
      </h2>
      <p class="ptextlevel2">
        Colleges and local youth networks can organize campaigns, where students help list and 
        review local businesses on platforms like Google Maps or Justdial. This not only promotes 
        digital inclusion but builds civic-tech awareness among students.
      </p>
      <h2 class="paperheader3">
        6.5. Trade Chambers and Business Associations Sharing Data with AI Platforms
      </h2>
      <p class="ptextlevel2">
        Local chambers of commerce and business groups often have membership directories or 
        verified contact lists. Sharing these in open, structured formats (CSV, APIs) can help AI tools 
        better index trustworthy local businesses.
      </p><br>
      <h2 class="paperheader1">
        7. Research Methodology
      </h2>
      <p class="ptextlevel1">
        This study employs a research methodology focused on understanding the digital visibility 
        challenges of local businesses in Goa, and the implications for AI-powered search 
        discoverability.
      </p><br>
      <h2 class="paperheader3">
        7.1. Data Collection
      </h2>
      <p class="ptextlevel2">
        Two detailed case examples, a tailor shop and a beauty salon with minimal or partial online 
        presence, were selected as representative instances to illustrate the broader patterns of digital 
        exclusion.
      </p>
      <h2 class="paperheader4">
        7.1.1. Case Example 1
      </h2>
      <p class="ptextlevel3">
        Primary data were gathered through on-ground observations and informal interviews 
        with local business owner- Reshma Khandeparker (Beauty and Style, Colem-Goa). 
        Exploratory search done using regular google search, and AI-powered tools – ChatGPT, 
        Perplexity and Google AI. <br>
        Keywords used for AI search – “Tailors in Colem Goa” 
      </p>
      <h2 class="paperheader4">
       7.1.2. Case Example 2
      </h2>
      <p class="ptextlevel3">
        Primary data were gathered through on-ground observations and supplemented by 
        exploratory searches using AI-powered tools – ChatGPT, Perplexity and Google AI, to examine 
        whether and how these businesses appear in AI search results.<br>
        Keywords used for AI search – “Mehendi Artists in Margao Goa” and “Mehendi Salons in Margao 
        Goa”
      </p><br>
      <h2 class="paperheader3">
        7.2. Literature Review
      </h2>
      <p class="ptextlevel2">
        A systematic review of academic and industry literature was conducted to contextualize 
        findings within existing knowledge about AI search technologies. The review focused on three 
        key areas:
      </p>
      <h2 class="paperheader4">
        7.2.1. AI Search and Data Dependency
      </h2>
      <p class="ptextlevel3">
        My findings show that AI systems rely heavily on structured and machine-readable data such as 
        schema markup, verified listings, and user reviews for indexing and ranking results.
      </p>
      <h2 class="paperheader4">
        7.2.2. Digital Exclusion of Small and Traditional Businesses
      </h2>
      <p class="ptextlevel3">
        Studies indicate that small enterprises, particularly in rural or semi-urban areas, often lack the 
        resources or digital literacy to build a strong online footprint. 
      </p>
      <h2 class="paperheader4">
        7.2.3. Efforts to Bridge the Gap
      </h2>
      <p class="ptextlevel3">
        Literature highlights the potential of platforms like ONDC, government-led digital literacy 
        programs, and AI-assisted onboarding tools to reduce entry barriers for businesses.
      </p><br>
      <h2 class="paperheader1">
        8. Limitations and Scope
      </h2>
      <p class="ptextlevel1">
        This study concentrates on a small geographic and demographic sample within Goa, primarily 
        focused on offline-first local businesses. The methodology is exploratory and qualitative, 
        providing insights rather than statistically generalizable outcomes and several key limitations 
        are worth noting: 
      </p>
      <h2 class="paperheader3">
        8.1. Geographic Focus
      </h2>
      <p class="ptextlevel2">
        The study is limited to a small region in Goa, India, which may not represent conditions in other 
        parts of the world like urbanized cities or underserved rural areas. 
      </p>
      <h2 class="paperheader3">
        8.2. Context-Specific Results 
      </h2>
      <p class="ptextlevel2">
        Cultural, infrastructural, and economic variables in Goa may not mirror those in other global 
        settings. 
      </p>
      <h2 class="paperheader3">
        8.3 Small Sample Size
      </h2>
      <p class="ptextlevel2">
        For representation, only two case studies (tailoring and beauty services) were used, limiting the 
        diversity of business types being analysed.
      </p>
      <h2 class="paperheader3">
        8.4. Qualitative and Exploratory Approach 
      </h2>
      <p class="ptextlevel2">
        The research offers insights but not generalizable trends.
      </p>
      <h2 class="paperheader3">
        8.5. Time-Bound Observations
      </h2>
      <p class="ptextlevel2">
        AI models and search trends evolve rapidly, so findings represent a snapshot of conditions as of 
        July 2025.
      </p>
      <h2 class="paperheader3">
        8.6. Opaque AI Mechanisms 
      </h2>
      <p class="ptextlevel2">
        The proprietary nature of most AI search algorithms limits the ability to pinpoint the exact 
        causes of business invisibility. 
      </p>
      <h2 class="paperheader3">
        8.7. Excludes Alternative Digital Channels
      </h2>
      <p class="ptextlevel2">
        The study focuses on AI search tools and does not assess discoverability via social media, 
        WhatsApp, or hyperlocal apps.
      </p><br>
      <h2 class="paperheader1">
        9. Conclusion 
      </h2>
      <p class="ptextlevel1">
        AI search has made information discovery faster and smoother, but it is not immune to bias,
        especially when it comes to businesses that operate beyond the boundaries of the internet. 
        Reliable AI based local recommendations depend not only on algorithmic power but also on human 
        context, inclusivity, and representation. As AI search grows, it must evolve to recognize 
        excellence that exists beyond data, and users must be aware of the hidden gems AI still cannot 
        see.
      </p><br>
      <h2 class="paperheader1">
        10. References
      </h2>
      <ol class="ptextlevel3">
        <li>
          IBM. <b>"What Are Large Language Models (LLMs)?"</b>, <i>IBM</i>, 2 Nov. 2023, <br>
          <a id="ref1" class="reflink" href="https://www.ibm.com/think/topics/large-language-models" target="_blank" rel="noopener noreferrer">
            www.ibm.com/think/topics/large-language-models
          </a><br>
          <i>Accessed 20 July 2025</i>
        </li>
        <li>
          Schultheis, Jayne. <b>"The Evolution of Search Engines: From Archie to AI-Powered Tools"</b>, <i>Rellify</i>, 27 Sept. 2024,<br>
          <a id="ref2" class="reflink" href="https://rellify.com/blog/evolution-of-search-engines" target="_blank" rel="noopener noreferrer">
            www.rellify.com/blog/evolution-of-search-engines
          </a><br>
          <i>Accessed 20 July 2025</i>
        </li>
        <li>
          Chawre, Huzefa. <b>"Prominent Data Collection Methods and Tools for LLMs"</b>, <i>Turing</i>, 2 Apr. 2025,<br>
          <a id="ref3" class="reflink" href="https://www.turing.com/resources/data-collection-methods-and-tools-for-llms" target="_blank" rel="noopener noreferrer">
            www.turing.com/resources/data-collection-methods-and-tools-for-llms
          </a><br>
          <i>Accessed 21 July 2025</i>
        </li>
        <li>
          <b>Shahnaz Beauty Salon & Mehendi Studio</b>, <i>Justdial,</i><br>
          <a id="ref4" class="reflink" href="https://jsdl.in/DT-26YEIR8R" target="_blank" rel="noopener noreferrer">
            www.jsdl.in/DT-26YEIR8R
          </a><br>
          <i>
            Accessed 21 July 2025
          </i>
        </li>
        <li>
          <b>Shahnaz Husains Beauty Parlour</b>, Google Listing status: <i>"Permanently closed"</i> as of Jul. 2025,<br>
          Archived at 
          <a id="ref5" class="reflink" href="https://g.co/kgs/jzUGEvP" target="_blank" rel="noopener noreferrer">
            https://g.co/kgs/jzUGEvP
          </a><br>
          <i>
            Accessed 22 July 2025
          </i>
        </li>
        <li>
          Wolman, James. <b>"Why Isn’t My Brand Appearing In AI Search Tools?"</b>, <i>Found</i>, 28 Apr. 2025,<br>
          <a id="ref6" class="reflink" href="https://www.found.co.uk/blog/why-isnt-my-brand-appearing-in-ai-search-tools" target="_blank" rel="noopener noreferrer">
            www.found.co.uk/blog/why-isnt-my-brand-appearing-in-ai-search-tools
          </a><br>
          <i>
            Accessed 22 July 2025
          </i>
        </li>
        <li>
          de Rosen, Tim. <b>"The New Digital Blind Spot: Why Your Business Is Invisible to AI (And How to Fix It)"</b>, <i>Medium</i>, 7 Jul. 2025,<br>
          <a id="ref7" class="reflink" href="https://www.medium.com/@tim_62250/the-new-digital-blind-spot-why-your-business-is-invisible-to-ai-and-how-to-fix-it-6e9c1b506ca0" target="_blank" rel="noopener noreferrer">
            medium.com/@tim_62250/the-new-digital-blind-spot-why-your-business-is-invisible-to-ai-and-how-to-fix-it-6e9c1b506ca0
          </a><br>
          <i>
            Accessed 22 July 2025
          </i>
        </li>
        <li>
          Sharma, Swapnil. <b>"Digital Transformation of SMEs in India: Key Technologies and Trends"</b>, <i>Times Tech</i>, 10 Mar. 2025,<br>
          <a id="ref8" class="reflink" href="https://timestech.in/digital-transformation-of-smes-in-india-key-technologies-and-trends/" target="_blank" rel="noopener noreferrer">
            www.timestech.in/digital-transformation-of-smes-in-india-key-technologies-and-trends/
          </a><br>
          <i>
            Accessed 24 July 2025
          </i>
        </li>
        <li>
          Radley, Blaise. <b>"How Small Businesses Can Benefit From Artificial Intelligence"</b>, <i>Workday Blog</i>, 28 Apr. 2025,<br>
          <a id="ref9" class="reflink" href="https://blog.workday.com/en-us/how-small-businesses-can-benefit-from-artificial-intelligence.html" target="_blank" rel="noopener noreferrer">
            https://blog.workday.com/en-us/how-small-businesses-can-benefit-from-artificial-intelligence.html
          </a><br>
          <i>
            Accessed 21 July 2025
          </i>
        </li>
        <li>
          Open Network for Digital Commerce (ONDC). <b>"All About Open Network for Digital Commerce"</b>,<br>
          <a id="ref10" class="reflink" href="https://ondc.org/about-ondc/" target="_blank" rel="noopener noreferrer">
            https://ondc.org/about-ondc/
          </a><br>
          <i>
            Accessed 26 July 2025
          </i>
        </li>
      </ol><br>`
  },
  {
    id: 3,
    title: 'Seat 14A',
    date: 'July 15, 2025',
    readTime: '10 min read',
    aboutcontent: 'Seat 14A is a short-form fiction piece that delves into the bittersweet and introspective realms of memory, chance encounters, and the quiet, often overlooked intersections of everyday lives.',
    img: 'assets/images/passengers-flight.jpg',
    content: `
      <h2 class="papertitle">
        <center>
          Seat 14A
        </center>
      </h2><br>
      <fieldset class="fieldsetbox">
        <legend class="legendtitle">
          <center>
            About This Story
          </center>
        </legend>
        <p class="legendtext">
          I’ve always loved short stories. Seat 14A is my exploration of short-form fiction.
          Its a bittersweet, introspective tale about memory, chance encounters, 
          and the quiet intersections of everyday lives.
        </p>
      </fieldset><br>
      <p class="ptextintro">
        The boarding gate at Chhatrapati Shivaji International Airport buzzed with
        gentle chaos in the early hours: kids half-asleep in their parents' arms,
        passengers clutching their boarding passes, the soft rolling of luggage 
        wheels on the carpet, and the low hum of multiple languages mingling with 
        the occasional announcement over the PA system.<br><br>
        Passengers often checking their phones and watches, 
        eyes flicking toward the thinning boarding queue. A few of them darting toward the 
        restrooms for last-minute bathroom breaks before the flight ahead. Others 
        stood silently, shoulders slouched, swaying slightly under the weight of their backpacks.<br><br>
        The air carried a mix of everything - duty-free body sprays, the musty 
        scent of suitcases, and the bitter aroma of airport coffee, occasionally 
        combined with the warmth of buttery pastries from nearby cafés.
      </P><br>
      <h2 class="paperheader1">
        Part 1: Mira
      </h2>
      <p class="ptextintro">
        As Mira glanced at her phone, a message from her husband lit up the screen:
        "I’ve kept your phone charger in your laptop bag. Don’t forget to text when
        you land. Safe journey, Darling. I love you."<br><br>
        
        She smiled, her fingers moving swiftly over the screen: "Thank you Hubbs. 
        Take care of yourself and Rashi. Don't let her eat Maggi every night. Love you too."<br><br>

        Even a quick, three-day business trip felt much longer when there was a teenage 
        daughter and a loving husband waiting at home. But this wasn’t her first trip. 
        She worked for a prominent IT company and often travelled for work.<br><br>

        As the boarding call for Zone 3 echoed through the speakers, Mira stood up, 
        picked up her bag, and took a last big sip of masala chai from her paper cup. 
        Tossing the empty cup into the bin, she made her way towards the gate, pausing
        to glance through the large glass window. The aircraft stood waiting, runway 
        lights shimmering like tiny stars strewn across the dark sky.<br><br>

        As she boarded, she stowed her handbag in the overhead compartment and 
        adjusted her sweatshirt, settling into her window seat, 14A. She liked 
        looking out during take-off and landing, even if there was little to see, 
        especially on mornings like this.<br><br>

        A few moments later, a man arrived and paused beside her row, glancing 
        at his boarding pass before taking the middle seat. He wore a comfortable 
        hoodie and relaxed jeans. He settled into seat 14B as the safety announcements 
        played over the Emirates flight’s entertainment system and the plane took off for Dubai.<br><br>

        As the seatbelt signs blinked above her, Mira pulled out her phone and 
        glanced through her hotel details, mentally mapping out her plans for the days ahead.<br><br>

        The passenger beside her was busy browsing through the movie selection. Only minutes 
        later did he look at her, his tone casual as he broke the silence. <br><br>

        "Sorry, do I know you?"<br><br>

        She turned and paused in shock.<br><br>

        <i>No. It couldn’t be. Not here, not now. What were the odds?</i>, she thought.<br><br>

        The face had changed. His once thick, black hair had thinned. Lines feathered
        his eyes. The voice, deeper now but with the same rhythm, bridged the gap of two 
        and a half decades in an instant.<br><br>

        "I don't think so, Rahul," she said gently. The name had slipped out before she 
        could stop it. <i>Why did I say his name?</i>, she thought, annoyed at herself. 
        <i>I could have said nothing, let it slide</i>, she thought. <i>But no, of course my 
        mouth remembered his name before my mind had the chance to shut it down.</i><br><br>

        His head tilted, a faint smile flickering across his face, not delight, 
        but the quiet astonishment of memory resurfacing.<br><br>

        Mira instantly looked out at the dark, empty sky. Her mind wandered, her heart 
        racing just as it had when she was fifteen, meeting Rahul for the first time. 
        He had been in the year above hers, known for his mischievous grin and his love 
        for football. She remembered the note he’d passed her during recess: “You look 
        beautiful! Can we be friends?” He’d folded it into a square no bigger than a coin.<br><br>

        <i>Who wrote things like that at fifteen?</i>, she wondered. <i>Does he remember 
        the note, or is it just me?</i><br><br>

        She could still picture herself, nervously hiding the note from her mother, 
        pressing it between the pages of her science textbook. <i>I must have read it at 
        least thirty times before I finally saw him face to face</i>, she mused, 
        remembering that first awkward encounter in the corridor outside class 9C.<br><br>

        He was the first boy she had ever given her heart to. For a moment, she remembered 
        the first time they made out behind the school canteen, a memory she quickly brushed 
        aside as her eyes drifted to his hands. A wedding band. <i>Did he marry Smita?</i>, 
        she wondered.<br><br>

        Mira’s chest tightened at the memory. <i>How deeply I hated her back then!</i>
        The sting surprised her. Their relationship hadn’t lasted long, but she’d 
        fallen hard enough to believe it would last forever. Hard enough for it to hurt 
        when she got to know that he started dating Smita.<br><br>

        Sadness washed over her, heavy and relentless as her trust was shattered. 
        In her diary, she’d cursed him: <i>He is 
        a snake. A very charming, betrayal-capable snake. The worst part was that 
        there was no apology, no explanation,</i> she thought to herself, <i>just an awkward 
        silence stretching across twenty-five years.</i><br><br>

        <i>At fifteen everything felt so enormous</i>, she thought. 
        The years had blurred the edges, but sitting beside him now, she was gripped 
        by memories of the past, not for what had happened, but for how easily he 
        had forgotten her and moved on.<br><br>
      </p><br>
      <h2 class="paperheader1">
        Part 2: Rahul
      </h2>
      <p class="ptextintro">
        He scrolled absently through the endless carousel of movies on the 
        in-flight entertainment system, not really seeing any of them. 
        His mind was already drifting. The vacation was over; now it was back
        to work in Dubai. His wife, Jhanvi, and their young kids were seated 
        a few rows behind, and the dull ache of sleeplessness tugged at him after 
        the early morning rush to the airport.<br><br>
        
        Then, out of the corner of his eye, he caught a familiar profile. 
        Something in the way she tucked a strand of hair behind her ear as she 
        glanced out of the window looking at the vast nothingness. A memory 
        flickered, so faint he almost dismissed it.<br><br>

        <i>No. It can’t be</i>, he hesitated, suddenly feeling self-conscious.
        <i>Should I say something? What if I’m wrong?</i><br><br>

        He cleared his throat, trying to keep his tone light and casual, 
        as if this was just another stranger.<br><br>

        “Sorry, do I know you?”<br><br>

        As she turned, he saw the shock in her eyes, a mirror of his own disbelief. 
        In that instant, the past rushed up to meet him, sharp and unexpected.<br><br>

        <i>It really is her. Mira!</i> His heart raced as he tried to steady his breathing, 
        suddenly aware of the weight of all the years that had passed between them.<br><br>

        He waited, heart pounding, for her reply. She stared for a second. "I don't think so, 
        Rahul" she said. He felt something loosen and tighten in his chest at the same time. 
        Her voice carried recognition, but her words kept him at a distance.<br><br>

        Rahul shifted in his seat, glancing sideways at Mira. <i>She remembers. Of course 
        she does. How could she not?</i>, he smiled. A mixture of relief and regret 
        flickering across his face.<br><br>

        The years had changed her. Her hair was longer now, and her skin carried 
        the quiet grace of maturity. <br><br>

        He remembered the note he’d written so long ago, his awkward scrawl, 
        the trembling hope behind those simple words, asking her to be friends 
        when he’d wanted so much more. <i>Did she keep it? Or did she throw it 
        away after everything that happened?</i><br><br>

        He looked down at his hands, the gold band on his finger catching the dim 
        cabin light. <i>Does she notice the ring? Does she remember Smita?</i> 
        He couldn’t help but think of Smita, the girl who had laughed at all 
        his jokes, who had tried so hard to get his attention, and eventually, succeeded.<br><br>

        <i>But it wasn’t really Smita’s fault</i>, Rahul thought. 
        <i>She was just there, persistent and kind. I was the one who drifted away, 
        too unsure to say what I really felt. I was sixteen, too young maybe, 
        to know what I wanted.</i><br><br>

        He studied her face, wondering if she still carried any of the hurt 
        he’d left behind. <i>But that was twenty-five years ago,</i> he reminded 
        himself. Still, he searched her face for a sign, anger, hurt, anything 
        that might reveal what lingered beneath the surface.<br><br>

        A faint ache pulsed in his chest. <i>God, I was such a coward back then. 
        I never even said sorry. Just disappeared. What could I have said?</i><br><br>

        He stole another glance at her face and, unbidden, the memory of their 
        first kiss surfaced. They were taking refuge from an unexpected downpour, 
        and he had leaned in, guided more by instinct than by intent. She hadn’t 
        pulled away, her stillness was a quiet yes, unspoken but certain.<br><br>
        
        Their lips met briefly as he nervously placed his hands on her waist pulling 
        her closer. The moment had felt electric. And then there was an uncertain silence, 
        just two breaths and two hearts pounding loudly. He remembered the way she stood 
        next to him, blushing as he looked into her eyes, the faint perfume of her hair 
        oil mingling with the scent of her talcum powder.<br><br>

        He almost smiled at the thought, but it faded quickly as he remembered how 
        he’d drifted, wordless, out of her life as if what they’d shared had 
        never really mattered.
      </p><br>
      <h2 class="paperheader1">
        Part 3: Both
      </h2>
      <p class="ptextintro">
        “Sir, what would you like to have for breakfast? We have idli 
        with sambar and chutney, and scrambled eggs with sausage.”<br><br>

        The flight attendant’s words broke the silence, snapping both 
        Rahul and Mira out of the tangle of memories. The attendant’s 
        polite smile hovered between them, waiting.<br><br>

        Rahul blinked, as if surfacing from deep water. “Um… idli, please,” 
        he said, forcing his voice steady. Mira nodded, barely meeting the 
        attendant’s eyes. “Same for me,” she murmured.<br><br>

        As the attendant moved on, the silence returned, but it felt different 
        now—thinner, more fragile, as if the present was finally asserting 
        itself over the past.<br><br>

        Rahul glanced at his tray, then at Mira. <i>Should I say something? 
        Ask about her family, her work? Or would that just make things worse?</i><br><br>

        Neither of them spoke. The clink of cutlery, the faint aroma of the food, 
        the low hum of the cabin—all filled the space where conversation might have been.<br><br>

        Rahul focused on his breakfast, though he barely tasted it. <i>Maybe it’s 
        better this way</i>, he thought. <i>Some silences are easier than the 
        risk of saying too much, or not enough.</i><br><br>

        <i>After all this time, what could we possibly say?</i>, she wondered. 
        <i>There’s too much history, and yet nothing left to explain.</i><br><br>

        Outside, the sky brightened, and the sprawling cityscape of Dubai 
        began to emerge beneath the clouds. Inside, the silence between 
        them settled—no longer awkward, just quietly acknowledged, 
        like a shared secret.<br><br>

        They sat in silence, two lives briefly intersecting again, each lost in 
        their own memories, letting the present pass gently by. Rahul looked out 
        the window, wondering, </i>Would it matter if I apologized now? 
        Twenty-five years is a long time for silence.</i><br><br>

        As he looked at her for the last time, his eyes caught the glimpse of 
        her wedding band. A quiet realization settled over him, <i>She had moved 
        on</i>. Infact, they both had. He turned away, carrying the weight 
        of unspoken words, thinking, <i>Maybe some things are better left unsaid.</i><br><br>

        A part of her wanted to call out, to speak to him one last time, 
        to fill the silence with something, but the moment had already passed. 
        <i>Some memories</i>, she thought, <i>are whole because they 
        were never meant to be finished.</i><br><br>

        As they walked away, they carried each other, not in longing, 
        but in memory, not in regret, but in the soft ache of what almost was.<br><br>
      </p>
      `
  },
  {
    id: 4,
    title: 'My Big Fat Career Break:<br>A Journey from Uncertainty to Growth',
    date: 'June 28, 2025',
    readTime: '12 min read',
    aboutcontent: 'This heartfelt piece, is a deeply personal reflection on my long career break — a journey shaped by motherhood, unexpected challenges, and the quiet strength I discovered along the way.',
    img: 'assets/images/break-time.jpg',
    content: `
      <h2 class="papertitle">
        <center>
          My Big Fat Career Break: A Journey from Uncertainty to Growth
        </center>
      </h2><br>
      <fieldset class="fieldsetbox">
        <legend class="legendtitle">
          <center>
            A Note Before You Read
          </center>
        </legend>
        <p class="legendtext">
          This isn’t just another sample writing, it’s a piece of my heart.
          It holds years of quiet battles, tender moments, and hard-won strength. 
          For the first time, I’m putting this part of my journey into words. 
          I hope this blog-style writing brings comfort to anyone who’s ever hit 
          pause and wondered if they’d find their way forward.
        </p>
      </fieldset><br>
      <p class="ptextintro">
        Some moments in life never fade. No matter how much time passes, 
        they stay clear, vivid, untouched by the blur of everyday life. 
        Like the first time I heard my son’s heartbeat on the ultrasound, 
        fast, steady, and full of life. Tears rolled down my cheeks as joy 
        flooded my heart, mixed with the quiet disbelief that this tiny bub 
        was growing inside me. In that instant, I made a promise to keep him 
        safe, to nurture him with unwavering love, and to be the best mother 
        I could possibly be.<br><br>
        
        That day also marked the beginning of my “planned” career break. 
        I chose to stay home, care for myself, and embrace the journey of 
        motherhood wholeheartedly until I was ready to restart my career.<br><br>

        Even though I initially planned to take a two-year break, life had other 
        plans. What started as a short pause soon turned into a longer journey, one 
        filled with unexpected challenges and moments that reshaped my understanding 
        of strength, patience, and purpose.<br><br>

        First came COVID. I was in Qatar at that time, far from extended family and 
        familiar support systems. That added another layer of uncertainty to an already 
        fragile time, especially with a tiny baby. As the world was grappling with fear 
        and isolation, I focused on what mattered to me the most: keeping my family safe.<br><br>

        Still, I held onto hope. My son was healthy, my husband and I were safe, and my 
        heart remained filled with the passion to do something meaningful. I believed 
        that once things settled, I would return to job hunting, pick up where I left 
        off, and rebuild my career.<br><br>

        But life had something else in store, something I wasn’t prepared for.<br><br>

        My son, once meeting all his milestones, started losing some of the skills 
        he had already learned. The regression was subtle at first, then more 
        noticeable. Worry crept in, slowly at first, then all at once. Days grew 
        heavy with anxiety, and nights stretched endlessly, filled with the 3 a.m. 
        Google searches as we tried to make sense of what was happening to our son.<br><br>

        As the uncertainty became too overwhelming to bear alone, we sought professional 
        help, hoping not to get the answer we most feared. After a series of evaluations, 
        tests, and tearful consultations, we received the diagnosis—Autism. 
        It felt like the ground shifted beneath me.<br><br>

        Even when you think you're prepared, you’re never truly ready for moments like 
        these. The weight of the word “Autism” lands, quietly yet heavily. Nothing 
        can equip you for the heartbreak of watching your child’s smile slowly fade. 
        The joyful babbling that once filled our home became quieter. 
        My heart longed so deeply to hear the word “Mama”. That simple, powerful 
        word my son once spoke while looking into my eyes.<br><br>

        And over the months, I grieved for the future I had imagined. I grieved 
        for the version of motherhood I had pictured. I grieved for the milestones 
        that might be delayed. But even in that pain, love remained constant, 
        fierce, unwavering, and redefining everything I thought I knew about being a mother.<br><br>

        But I realized that my son’s need for support was far greater than the 
        pain I was carrying. He needed me, present, patient, and strong, even 
        when I felt anything but strong. And then I made a tough decision: I 
        left it all behind and moved back to my hometown in Goa, India, with my son, 
        while my husband stayed behind to continue working and providing for us. <br><br>
        
        While Qatar had an excellent healthcare system and great doctors, 
        I needed the familiar comforts of home in Goa to help us through this journey.<br><br>

        I enrolled my child in therapy, found a supportive school, and slowly 
        began to build a routine around his needs. It wasn’t just about appointments 
        and schedules. It was about learning to celebrate the little things: a spoken 
        word, a moment of eye contact, or even a shared smile.<br><br>

        Little by little, I’m learning to celebrate the good moments. Each one 
        reminds me that progress is happening, in its own time and in its own way. 
        Moving back home with my son continues to be one of the best decisions I’ve ever made.<br><br>

        It gives us the space to breathe, and to grow together. And while the journey
        is far from over, I’ve spent the past few years working on myself, to grow, to 
        heal, and to rediscover my strength. Today, I return with more wisdom, deeper 
        empathy, and a renewed sense of purpose. I’m ready to step back into the job 
        market with resilience in my spirit.<br><br>

        So, when life hands your lemons, sometimes it’s okay to not know what to do 
        with them right away. I’ve had mine sitting on the shelf, collecting dust, 
        for over six years. But now, I’m ready. Ready to dust them off, squeeze out 
        every drop of experience, and turn it into something meaningful. Maybe not 
        just lemonade, maybe a refreshing sorbet, a zesty key lime pie, a silky lemon 
        tart, or even a fiery Indian lemon pickle.<br><br>

        Because this time, I’m choosing what to make of it. And I’m just getting started!
      </p><br>
    `
  }
];


// → Render articles list (with image, date, read time)
function renderArticles() {
  articlesContainer.innerHTML = articles.map(a => `
    <div class="article-card" data-id="${a.id}">
      <img class="article-img" src="${a.img}" alt="${a.title}">
      <div>
        <h3>${a.title}</h3>
        <p class="sampledatetime">${a.date} • ${a.readTime}</p>
        <p class="sampledescription"> ${a.aboutcontent}</p>
      </div>
      <div style="clear:both;"></div>
    </div>
  `).join('');
}

// → Modal open/close
function openModal(id) {
  const a = articles.find(x => x.id === id);
  modalContent.innerHTML = `${a.content}`;

  modalContainer.classList.add('visible');
  document.body.style.overflow = 'hidden';
  document.title = a.title;

  // Scroll the actual scrollable modal container
  const modalBox = document.getElementById('article-modal');
  if (modalBox) modalBox.scrollTop = 0;

  //document.getElementById('btn-back').onclick = closeModal;
}



function closeModal() {
  modalContainer.classList.remove('visible');
  document.body.style.overflow = '';
  setTimeout(() => {
    document.title = `${lastSection} | ${baseTitle}`;
    modalContent.innerHTML = '';
  }, 300);
}

// → Sidebar & mobile menu handlers
function toggleMenu() {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('show');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('visible');
  }
}
function closeMenu() {
  sidebar.classList.remove('show');
  hamburger.classList.remove('open');
  overlay.classList.remove('visible');
}

function scrollToSection(sectionId, linkText = null) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const offset = window.innerWidth <= 768 ? 80 : 20;
  const targetY = el.getBoundingClientRect().top + window.pageYOffset - offset;
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const duration = 700;
  let startTime = null;

  // Easing: iOS-like "easeOutQuart"
  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);

  if (linkText) {
    lastSection = linkText;
    document.title = `${linkText} | ${baseTitle}`;
    history.replaceState(null, '', 'index.html');
  }
}


// → Event bindings
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

sidebarLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    sidebarLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    scrollToSection(link.dataset.section, link.textContent.trim());
    if (window.innerWidth <= 768) closeMenu();
  });
});

articlesContainer.addEventListener('click', e => {
  const card = e.target.closest('.article-card');
  if (card) openModal(parseInt(card.dataset.id, 10));
});

modalCloseBtn.addEventListener('click', closeModal);
modalContainer.addEventListener('click', e => {
  if (e.target === modalContainer) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (modalContainer.classList.contains('visible')) closeModal();
    else if (window.innerWidth <= 768) closeMenu();
  }
});

window.addEventListener('scroll', () => {
  goTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
goTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// → Initialization
window.addEventListener('load', () => {
  renderArticles();
  if (window.innerWidth <= 768) closeMenu();

  const first = document.querySelector('#sidebar a[data-section="about"]');
  first?.classList.add('active');
  lastSection = 'About';
  document.title = `ABOUT | ${baseTitle}`;
  scrollToSection('about');
});
