import "./CaseStudy1.css";
import case01 from "../assets/casestudy2/case2-01.png";
import case02 from "../assets/casestudy2/case2-02.png";
import case03 from "../assets/casestudy2/case2-03.png";
import case04 from "../assets/casestudy2/case2-04.png";
import case05 from "../assets/casestudy2/case2-05.png";
import case06 from "../assets/casestudy2/case2-06.png";
import case07 from "../assets/casestudy2/case2-07.png";
import case08 from "../assets/casestudy2/case2-08.png";
import case09 from "../assets/casestudy2/case2-09.png";
import case10 from "../assets/casestudy2/case2-10.png";
import case11 from "../assets/casestudy2/case2-11.png";
import case12 from "../assets/casestudy2/case2-12.gif";
import case13 from "../assets/casestudy2/case2-13.png";
import case14 from "../assets/casestudy2/case2-14.png";
import case15 from "../assets/casestudy2/case2-15.png";
import case16 from "../assets/casestudy2/case2-16.png";
import case17 from "../assets/casestudy2/case2-17.gif";

export const CaseStudy2 = (): JSX.Element => {
  return (
    <div className="case-study-1">
      <div className="content">
        <div className="header">
          <h1 className="title">Franchise-Ready Admin: From MVP to Growth Driver</h1>
          <div className="role">Role: Product Designer</div>
          <div className="team">Team: 1 Product Designer, 1 Product Manager, 2 Frontend Engineer, 1 Backend Engineer</div>
          <div className="duration">Duration: 3 weeks</div>
        </div>

        <div className="section">
          <p className="description">
            The product had the right features—but users weren't using them. By simplifying flows, surfacing the right context, and helping users trust the system, I turned a confusing admin into a tool franchise teams could actually rely on.
          </p>
          <img className="image" alt="image" src={case01} />
        </div>

        <div className="section">
          <h2 className="section-title">Business Context: Scaling for Franchises</h2>
          <p className="section-content">
            Franchise growth was a top priority. While 87% of our users were small-scale brands, franchises offered the most leverage—because a single deal could bring in dozens or even hundreds of stores.
          </p>
          <p className="section-content">
            In Korea, the food franchise industry has continued to grow even after COVID-19, and today, franchise brands lead market trends. That's why becoming "the POS trusted by top franchises" became a strategic goal.
          </p>
          <p className="section-content">
            To support this shift, our company formed a dedicated Franchise Sales Team and launched the Franchise Admin Team, where I led the redesign of our admin system that had stayed in MVP form for too long.
          </p>
          <img className="image" alt="image" src={case02} />
        </div>

        <div className="section">
          <h2 className="section-title">Understanding the Sales Challenge</h2>
          <p className="section-content">
            At the pilot stage, many large franchises did not move forward to full contracts. It wasn't clear whether this was due to POS, admin tools, business timing, or other factors—each case was complex.
          </p>
          <p className="section-content">
            However, one consistent signal stood out:<br />
            When franchise HQ staff evaluated the admin, their reactions were lukewarm. Comments like "It only covers the basics" suggested that the current admin experience wasn't impressing decision-makers.
          </p>
          <p className="section-content">
            Sales teams, based on their own judgment, suggested building features like real-time store POS mirroring to make a stronger impact. But at this point, it was still unclear what users actually needed—we knew we had to validate it properly.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Identify Target Users: What Franchise HQ Teams Really Needed</h2>
          <p className="section-content">
            To understand what truly mattered, we conducted in-depth interviews with actual franchise HQ users—the people who use the admin every day.
          </p>
          <p className="section-content">
            We identified three key roles:
            <ul>
              <li>Accountants: Reviewed sales by payment method</li>
              <li>Marketers: Focused on sales by menu item</li>
              <li>Store Managers: Managed daily menu updates and seasonal product launches across stores</li>
            </ul>
            <img className="image" alt="image" src={case03} />
            Even within a single company, each team used the admin very differently.
          </p>
          <p className="section-content">
            Accountants and marketers said the current export features were "good enough"—even though the admin didn't offer much functionality, they could download the raw Excel data and analyze it themselves. For them, limited features weren't a blocker.
          </p>
          <p className="section-content">
            But store managers had a completely different workflow. Their job involved managing menus across locations, not analyzing data. That meant they needed usable tools, not raw files. Because the admin was hard to use for these tasks, they were still relying on external POS agencies—third-party partners who handled installations and menu updates on their behalf.
          </p>
          <img className="image" alt="image" src={case04} />
          <div className="insight">
            🔵 Insight:<br />
            The store managers had low expectations for admin tools—not just because they had never seen one that truly supported their workflow, but because they had tried the previous TossPOS admin and found it confusing and unhelpful. After that experience, they gave up and kept relying on third-party agencies instead.
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Analyze Product Usage: Redefining What "Active" Really Means</h2>
          <p className="section-content">
            Our data analyst initially reported that 60% of users were actively using the menu management feature. But based on our field interviews, that number felt too optimistic—most HQ store management teams weren't using the tool at all.
          </p>
          <p className="section-content">
            So I looked closer at how "active use" was defined.<br />
            It turned out the metric only counted users who visited the menu page, not those who actually uploaded or edited menus. After syncing with the analyst, we refined the definition to include meaningful actions—like importing data or making changes. The real usage rate dropped to just 30%.
          </p>
          <p className="section-content">
            This matched what we heard in interviews: menu work was still being outsourced to external POS agencies, often through Excel sheets and multi-day handoffs. It was an industry norm—but clearly not ideal.
          </p>
          <img className="image" alt="image" src={case05} />
        </div>

        <div className="section">
          <h2 className="section-title">Run Usability Testing with New Users: Revealing Unexpected UX Gaps</h2>
          <p className="section-content">
            This usability testing wasn't to validate a new feature, but to uncover critical UX issues in a live product that had already been used in the field. I ran sessions with two prospective franchise clients, each with over 15 years of industry experience.
          </p>
          <p className="section-content">
            The result: they couldn't complete even the most basic tasks without help.
          </p>
          <h3>1. Hard to Tell Where to Start</h3>
          <p className="section-content">
            Users landed on this page but had no idea what to do first.
            <br />They overlooked the key "Import Item" button entirely, and assumed "Add Item" meant they'd need to upload everything manually, one by one—which felt too burdensome.
            <br />Even though this was the main entry point for product setup, the page didn't clearly communicate its purpose or guide the first action.
          </p>
          <img className="image" alt="image" src={case06} />
          <p className="section-content">
            <b>Import Item button</b><br />By clicking the button and selecting their existing POS, users could pull in their entire menu in under 3 seconds—no manual work required.
          </p>
          <h3>2. Unclear What Will Happen After Clicking</h3>
          <p className="section-content">
            When asked to apply changes, users were unsure what the button would actually do. The label showed "(3) Apply to Store" but they didn't know what the "3" meant, which stores would be affected, or what exactly would be updated.
            <br />A yellow banner appeared above—but the message felt vague and a bit alarming, making users even more hesitant to proceed.
          </p>
          <img className="image" alt="image" src={case07} />
          <h3>3. Confusing Choices at the Final Step</h3>
          <p className="section-content">
            Clicking "Apply" triggered a modal with two options: apply to the new store or to all stores. But users couldn't tell which stores counted as "existing" or "all", and felt unsure about the result of either action.
            <br />They said the options were too vague—and wished there was just one clear button to finish the task.
          </p>
          <img className="image" alt="image" src={case08} />
          <p className="section-content">
            <b>"Apply to existing stores only" button</b><br />Sometimes when a new store opens, the HQ wants to test things first before adding menus to the POS—so they need an option to apply updates to existing stores only.
          </p>
          <h3>4. Users Unsure About Final Result</h3>
          <p className="section-content">
            Even after clicking "Apply" and seeing a success message, users still felt uncertain. They weren't confident the update had reached all locations—especially when prices differed by store.
            <br />One user said they needed clearer feedback: "I'm still not sure if the right stores got the right changes."
          </p>
          <p className="section-content">
            The product worked, but the experience didn't feel complete.
          </p>
          <img className="image" alt="image" src={case09} />
        </div>

        <div className="section">
          <h2 className="section-title">Define the Core Problem: It Wasn't the Feature, It Was the UX</h2>
          <p className="section-content">
            I confirmed that the underlying server logic worked well, but the UX blocked adoption.
          </p>
          <p className="section-content">
            Users didn't struggle because the system lacked capabilities—they just couldn't figure out how to use them. From start to finish, key actions like importing, applying, and verifying changes felt unclear, disconnected, or risky. Once explained, users loved the concept and expressed relief at being able to manage updates without an agency.
          </p>
          <p className="section-content">
            Many were even surprised this kind of POS admin control was possible, saying:<br />
            "I didn't know I could do this myself."
          </p>
          <p className="section-content">
            The product didn't need more features—it needed clearer guidance, better mental model alignment, and stronger feedback loops.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Prioritize Problems</h2>
          <p className="section-content">
            I mapped out 7 candidate improvements and selected 4 to develop based on impact vs dev difficulty:<br />
          </p>
          <img className="image" alt="image" src={case10} />
          <p className="section-content">
            Remaining ideas—Excel upload, tracking log, POS screen mirroring—were parked in the backlog.
          </p>
          <p className="section-content">
            Sales initially pushed for flashier features like POS screen mirroring, assuming that's what clients wanted. But once I shared insights from usability testing, it became clear that prospects weren't looking for more powerful tools—they just didn't understand the current ones.
          </p>
          <p className="section-content">
            With that, sales aligned with our UX-first approach and stopped pushing for "innovative" features.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Design the Solution & User Testing Iteration</h2>
          <h3>1. Simplified First-Time Menu Setup</h3>
          <p className="section-content">
            Previously, the empty state was cluttered with tabs, alerts, and buttons—none of which made sense to a user seeing this screen for the first time. It felt more like a broken page than a starting point.
          </p>
          <p className="section-content">
            To fix this, we replaced the empty state with a simple landing screen that briefly explains the feature and offers just one clear CTA: "Start Now."
          </p>
          <p className="section-content">
            We tested multiple labels like Import POS and Sync Store, but "Start Now" performed best—it felt friendly, light, and action-oriented. The result? Users instantly understood what to do next and moved forward without hesitation.
          </p>
          <img className="image" alt="image" src={case11} />
          <img className="image" alt="image" src={case12} />
          <h3>2. Separated New Store Setup from HQ Menu Updates to Eliminate Confusion</h3>
          <p className="section-content">
            Previously, the same button applied both HQ-wide updates and new store setup, which confused users and made them hesitate. They couldn't tell what would be applied—and where.
          </p>
          <p className="section-content">
            We separated the flows into two distinct buttons & UX:<br />
            <ul>
              <li>One for updating newly added stores</li>
              <li>One for updating existing store menus</li>
            </ul>
            Although the backend logic already supported this, we had never surfaced the difference in the UI. After this change, all users instantly understood the alert and next steps—reducing hesitation and risk of misapplication during testing.
          </p>
          <img className="image" alt="image" src={case13} />
          <img className="image" alt="image" src={case14} />
          <h3>3. Built a Lightweight Preview to Boost Confidence</h3>
          <p className="section-content">
            Initially, I proposed Option A, which displayed detailed changes such as:<br />
            "Price: $5 → $6, Name: 'Meats' → 'Meat'.".<br />
            This approach aimed to give users full transparency before applying updates.
          </p>
          <p className="section-content">
            However, during design reviews, our backend engineer explained that supporting this level of granularity would require significant logic changes and couldn't be delivered quickly. He suggested dropping the idea entirely until we could build the full logic.
          </p>
          <p className="section-content">
            But I believed that even a lightweight summary could ease user hesitation. So I quickly mocked up Option B—a simpler version that only showed the names of items that would change (e.g., "Sparkling Water – Edited").
          </p>
          <p className="section-content">
            We tested Option B in usability sessions. The result? Users felt reassured, even without exact details. And our backend engineer, who joined the sessions, was convinced by the feedback and agreed to move forward with the lightweight version.
          </p>
          <img className="image" alt="image" src={case15} />
          <p className="section-content">
            To ensure alignment, I invited the backend engineer to observe the UT. Seeing users gain confidence and proceed without hesitation, even with limited info, helped us align quickly.
          </p>
          <div className="insight">
            → Even a basic preview gave users the reassurance they needed.
          </div>
          <h3>4. Added Store-Level Filters for Clearer Confirmation</h3>
          <p className="section-content">
            Even after applying changes, users weren't sure if updates were correctly reflected—especially for store-specific pricing.
          </p>
          <p className="section-content">
            To close this feedback gap, we introduced a store-by-store menu view. HQ managers could now:
            <ul>
              <li>Filter by store to see what was applied where</li>
              <li>Check price and display settings at the store level</li>
              <li>Quickly spot and fix inconsistencies between stores</li>
            </ul>
            This feature was especially well-received by existing users with many franchise locations, who needed precise control and verification across their network.
          </p>
          <img className="image" alt="image" src={case16} />
          <img className="image" alt="image" src={case17} />
        </div>

        <div className="section">
          <h2 className="section-title">Outcome: Adoption Across the Board</h2>
          <p className="section-content">
            The redesigned admin was well received by all key user groups:
            <ul>
              <li>HQ Store Managers gained confidence and control over menu updates for each location</li>
              <li>POS agencies experienced fewer manual requests and smoother collaboration</li>
              <li>Sales teams used the improved UX as a compelling selling point during demos</li>
            </ul>
          </p>
          <p className="section-content">
            Before the official release, I ran a final usability test with new users. For the first time, participants were able to complete product setup and menu publishing from start to finish without guidance—a clear sign that the redesign had successfully removed critical usability blockers.
          </p>
          <p className="section-content">
            While I left the team shortly after launch and couldn't track long-term metrics, I would be eager to see whether active usage increased as expected. Given the positive feedback and smooth handoff, I'm optimistic the adoption metrics improved significantly.
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">What I Learned: My Key Takeaways</h2>
          <p className="section-content">
            The feature wasn't broken—users just didn't understand it.<br />
            Once they got it, they loved it. A great product still fails if people don't know how to use it.<br /><br />
            Confidence is part of UX.<br />
            Even when things worked, users still worried. Good UX means removing that doubt.<br /><br />
            A minimal solution is better than none.<br />
            Even without full backend support, a simplified preview helped users move forward—and helped devs buy in.
          </p>
        </div>
      </div>
    </div>
  );
}; 