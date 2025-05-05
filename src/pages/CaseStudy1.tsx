import { Gnb } from "../components/Gnb";
import "./CaseStudy1.css";
import case01 from "../assets/casestudy1/case1-01.png";
import case02 from "../assets/casestudy1/case1-02.png";
import case03 from "../assets/casestudy1/case1-03.gif";
import case04 from "../assets/casestudy1/case1-04.png";
import case05 from "../assets/casestudy1/case1-05.png";
import case06 from "../assets/casestudy1/case1-06.png";
import case07 from "../assets/casestudy1/case1-07.png";
import case08 from "../assets/casestudy1/case1-08.png";
import case09 from "../assets/casestudy1/case1-09.png";
import case10 from "../assets/casestudy1/case1-10.png";
import case11 from "../assets/casestudy1/case1-11.gif";
import case12 from "../assets/casestudy1/case1-12.png";
import case13 from "../assets/casestudy1/case1-13.gif";
import case14 from "../assets/casestudy1/case1-14.gif";
import case15 from "../assets/casestudy1/case1-15.png";
import case16 from "../assets/casestudy1/case1-16.png";
import case17 from "../assets/casestudy1/case1-17.png";
import case18 from "../assets/casestudy1/case1-18.png";
import case19 from "../assets/casestudy1/case1-19.png";
import case20 from "../assets/casestudy1/case1-20.png";
import case21 from "../assets/casestudy1/case1-21.png";


export const CaseStudy1 = (): JSX.Element => {
  return (
    <div className="case-study-1">
      <div className="gnb-wrapper">
        <Gnb property1="default" />
      </div>
      <div className="content">
        <div className="header">
          <h1 className="title">How I Reinvented POS UX—and Drove +40% Growth</h1>
          <div className="role">Role: Product Designer</div>
          <div className="team">
            Team: 1 Product Designer, 1 Product Manager, 2 Frontend Engineer, 1 Backend Engineer
          </div>
          <div className="duration">Duration: 2 months</div>
        </div>

        <div className="section">
          <p className="description">
            To win the full-service restaurant market, I led a redesign that tackled their real operational pain points—from table layout migration to fast-paced dine-in workflows. Through targeted research and usability testing, we removed UX blockers and drove a +40.5% spike in adoption—all in just 2 months.
          </p>
          <img className="image" alt="image" src={case01} />
        </div>

        <div className="section">
          <h2 className="section-title">Business Context: A Hidden Opportunity in Full-Service Restaurants</h2>
          <p className="section-content">
            While TossPOS gained strong traction in prepaid settings like cafés and bakeries, it lagged behind in postpaid environments like full-service restaurants and bars. This was a missed opportunity.
          </p>
          <p className="section-content">
            According to market data, restaurants and bars account for 790K businesses, far outnumbering cafés and bakeries (100K). However, only 21.2% of TossPOS users were from the restaurant segment, while 78.8% were from cafés and bakeries.
          </p>
          <p className="section-content">
            To unlock new growth, we needed to win over full-service restaurants.
          </p>
          <img className="images" alt="image" src={case02} />
        </div>

        <div className="section">
          <h2 className="section-title">Identify Target Users: Other POS Users vs. First-time POS Users</h2>
          <h2 className="section-title">Research Phase 1: Why Reputation Was Holding Us Back</h2>
          <p className="section-content">
            At a major expo, I spoke with many first-time POS users. While they liked TossPOS's price and simplicity, most still said they wouldn't use it—because other owners had given it a poor reputation.
          </p>
          <p className="quote">
            "People in the restaurant group say it's good for cafés, but not for restaurants."
          </p>
          <p className="section-content">
            Online communities confirmed this: existing users weren't recommending it, citing a lack of ease for real-world restaurant operations.
          </p>
          <p className="insight">
            💡 Insight: The product had potential—but our reputation was holding us back.
            To bring in new customers, we had to make current users more satisfied, so they could speak positively about it.
          </p>

          <h2 className="section-title">Research Phase 2: User Interviews with Other POS Users</h2>
          <p className="section-content">
            We then conducted user interviews and tests with restaurant owners who had never used TossPOS but had experience with other POS systems.
          </p>
          <img className="images" alt="image" src={case03} />
          <div className="key-findings">
            <h3>Key findings:</h3>
            <p className="section-content">
              Strengths:
              <br />- They appreciated TossPOS's simplicity and pricing.
              <br />- The feature set met most of their needs.
            </p>
            <p className="section-content">
              Switching barriers:
              <br />- Rigid table layout was a major blocker.
              <br />- Switching POS systems would require staff retraining—a major operational risk.
            </p>
            <img className="images" alt="image" src={case04} />
            <img className="images" alt="image" src={case05} />
          </div>
          <p className="insight">
            💡 Insight: There was clear product-market fit potential—but we had to lower switching costs, especially around table layout migration.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Our Goals and Target Users</h2>
          <div className="goals">
            <h3>Product Goal</h3>
            <p className="section-content">
              - Attract new users by easing the transition from legacy POS systems.<br />
              - Increase existing user satisfaction to fuel better word-of-mouth and improve reputation in the restaurant segment.
            </p>
            <h3>Target Users:</h3>
            <img className="images" alt="image" src={case06} />
            <p className="section-content">
              Although existing users weren't our main target, we needed to deep-dive into their pain points to improve our reputation.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Prioritizing Issues from 2,000+ Existing Feedback</h2>
          <p className="section-content">
            We reviewed over 2,000 pieces of user feedback from existing TossPOS restaurant users. I extracted the recurring issues, and personally called each business to dig deeper into the real-world pain points.
          </p>
          <p className="section-content">
            We picked 3 issues based on two criteria:
            <br />- Problems that impacted the largest number of users, and
            <br />- Problems that were most frequently encountered in daily operations.
          </p>
          <h3>1. Hard to See Clearly on All Devices</h3>
          <p className="section-content">Over 55% of users operated TossPOS on low-spec Windows POS devices. In bright environments like window-side seating, these screens suffered from low contrast and poor readability. We needed to improve visibility at the software level, without requiring any hardware upgrades.</p>
          <img className="images" alt="image" src={case07} />
          <img className="images" alt="image" src={case08} />
          <h3>2. Hard to Find the Right Action</h3>
          <p className="section-content">Key actions like moving or merging tables were too hidden. Even experienced staff had to search around to find the right button.</p>
          <img className="images" alt="image" src={case09} />
          <h3>3. Hard to Quickly Find Important Info</h3>
          <p className="section-content">Staff often struggled to spot specific items because orders were hard to scan quickly. Menu names and quantities needed to be more readable.</p>
          <img className="images" alt="image" src={case10} />
        </div>

        <div className="section">
          <h2 className="section-title">Problem Definition</h2>
          <p className="section-content">
            TossPOS had strong fundamentals—competitive pricing and simple UX—but adoption stalled because:
          </p>
          <div className="problem-list">
            <h3>Other POS Users (Prospective Customers)</h3>
            <p className="section-content">
              - Liked TossPOS's price and simplicity.<br />
              - Hesitated to switch because of migration friction (e.g., fixed table layouts, staff retraining burden).
            </p>
            <h3>First-Time POS Users (Prospective Customers)</h3>
            <p className="section-content">
              - Liked TossPOS when trying it.<br />
              - But relied heavily on peer reviews—and poor reputation among existing restaurant users discouraged adoption.
            </p>
            <h3>Existing TossPOS Users</h3>
            <p className="section-content">
              - Faced daily usability pain points (poor screen visibility, slow table operations) that gradually lowered satisfaction.<br />
              - Frustrations piled up, hurting word-of-mouth and future sales.
            </p>
          </div>
          <p className="insight">
            📌 Summary: To grow, TossPOS needed to keep its simplicity, while adding flexibility and removing daily friction—making both new customers and existing customers confident to choose and recommend it.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Design the Solution & User Testing Iteration</h2>
          <h3>1. Flexible Table Layouts for Easy Migration</h3>
          <p>
            I designed a 76×102 structured grid to support easy dragging, resizing, and renaming of tables—without the mess of freeform placement. To determine the right grid size, I analyzed the top 3 legacy POS systems used by over 80% of restaurants in the market. The goal was to let users recreate their existing layouts quickly and confidently. This dense grid structure aligned with all major POS patterns while maintaining Toss's signature simplicity.
          </p>
          <img className="images" alt="image" src={case11} />
          <p>
            While competitors offered color, shape, and size options, I chose to support only color and size. Circular tables were rarely used, and color was a simpler, scalable cue. Rather than launch every option up front, I prioritized focusing on fewer, clearer choices and learning from real usage. We didn't release circle shapes—and no one has asked for them since. This is a real customer setup—showing how diverse restaurant layouts are now possible.
          </p>
          <img className="images" alt="image" src={case12} />
          <h3>2. Customization Panel: Making Setup Intuitive</h3>
          <p>
            We needed a panel for editing table names and colors. At first, I considered a fixed panel on the right(Option A), which felt familiar from other design tools.
            <br />No need to search for settings
            <br />Immediate, context-aware interaction
            <br />Learnable at first glance without training
            <br />Based on this, I chose the inline pop-up panel(Option B), ensuring a smoother and more intuitive setup experience for all users.
          </p>
          <img className="images" alt="image" src={case13} />
          <h3>3. Optimized Colors for Screen Readability</h3>
          <p>
            To support smooth migration from legacy POS systems (which over 80% of restaurants used), I aligned on providing 4 high-contrast table color options—enough to cover the common patterns.
            <br />The colors weren't just aesthetic. I carefully adjusted saturation for better screen visibility, especially on low-spec window POS terminals often affected by glare, while keeping them comfortable on high-end displays.
            <br />I originally tested 5 options, including a teal tone. But after internal testing and user feedback, teal felt unnecessary and underused. So I proposed reducing it to 4.
          </p>
          <img className="images" alt="image" src={case14} />
          <img className="images" alt="image" src={case15} />
          <p>
            The PM pushed back:
            "Shouldn't we offer more choices?"
            <br />I explained:
            "Style options are hard to take back once released. If we ship too many upfront, users may adopt edge cases we can't easily retire. It's better to start lean, then expand based on real usage."
            <br />That reasoning landed well, and we aligned on a focused set of 4—both useful and sustainable.
          </p>
          <img className="images" alt="image" src={case16} />
          <p>
            🔵 Another Insight:
            Dark mode support aging eyes for better comfort
            Despite using bright, high-contrast table colors, some users still struggled to read the screen easily—especially those experiencing age-related vision changes.
            To address this, tested a Dark Mode prototype to improve comfort and legibility.
            User testing showed a strong preference for Dark Mode, with participants saying it was much easier on the eyes.
            Based on this feedback, we officially introduced Dark Mode as a core feature.
          </p>
          <img className="images" alt="image" src={case17} />
          <h3>4. Table Info Visibility: Making It Easier to Spot Key Info</h3>
          <p>
            Made recent orders stand out clearly.<br />
            Added total price right on the table card.<br />
            Made item quantities easier to scan quickly.<br />
            Before, we thought showing the full menu list was helpful. But users told us they mainly needed to spot new orders fast to know which table to go to next.<br />
            During usability tests, tasks like:<br />
            "Which table ordered the Carbonara?"<br />
            "Which table did you just tap?" were completed much faster with the new design.
          </p>
          <img className="images" alt="image" src={case18} />
          <h3>5. Table Actions: Easy to Spot, Easy to Use</h3>
          <p>
            Moved important actions like Move and Join to the top of the screen.<br />
            Before, many didn't even know these features existed. Now, even first-time users can quickly spot and use key actions during busy hours.
          </p>
          <img className="images" alt="image" src={case19} />
        </div>

        <div className="section">
          <h2 className="section-title">Outcome: +40.5% Growth in Just One Month</h2>
          <p className="section-content">
            The redesigned POS launched in early October and drove a remarkable +40.5% increase in restaurant usage by November. This surge played a key role in hitting our Q4 OKRs and proved that improving the dine-in experience was the right bet.<br /><br />
            More importantly, positive feedback began to spread fast among restaurant owner communities:<br />
            "Feels like this was finally built for us."<br /><br />
            This shift was no accident. We focused on:<br />
            Removing common pain points reported by real users.<br />
            Making daily operations faster and easier—even during rush hours.<br />
            Supporting smooth migration from legacy POS systems.<br /><br />
            By addressing real frustrations and designing for speed, visibility, and flexibility, we turned TossPOS into a product that restaurant owners could trust—and recommend.
          </p>
          <img className="images" alt="image" src={case20} />
        </div>

        <div className="section">
          <h2 className="section-title">From One Success to the Next: Expanding the Solution Further</h2>
          <p className="section-content">
            Following the successful launch, we discovered a new barrier:<br />
            Some senior restaurant owners—especially those in their 60s and older—struggled with the migration process due to lower digital literacy.<br /><br />
            At first, our team manually helped store owners one by one. But as the number of requests grew, it became clear we needed a scalable solution that also considered accessibility needs.<br /><br />
            So we built an internal tool that allows our team to:<br />
            - View all stores under a merchant<br />
            - Select the correct location<br />
            - Migrate settings instantly with one click<br /><br />
            Now, even users with little experience using digital devices can switch easily through automated, accurate migration, without extra burden.
          </p>
          <img className="images" alt="image" src={case21} />
        </div>

        <div className="section">
          <h2 className="section-title">Takeaways</h2>
          <p className="section-content">
            1. UX is built in the real world, not just on screens<br />
            Supporting multiple devices isn't enough. I learned the importance of observing users in their actual environments—seeing how lighting, hardware quality, and physical setups all impact usability.<br /><br />
            2. Good UX sometimes means designing behind the scenes<br />
            Some restaurant owners struggled with setting up the system on their own. We first handled it manually, then scaled the solution with an internal migration tool.<br /><br />
            UX doesn't end at the product surface—it often needs to expand into tools, workflows, and operations.<br /><br />
            3. Adding features is easy—keeping simplicity is hard<br />
            It wasn't enough to just add features like other legacy POS systems. The real challenge was expanding capabilities while protecting TossPOS's biggest strength: simplicity.<br /><br />
            I learned that designing to cover complex needs without making the system complicated takes much more skill than simply copying existing solutions.
          </p>
        </div>
      </div>
    </div>
  );
};