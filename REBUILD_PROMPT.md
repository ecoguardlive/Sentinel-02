# MASTER PROMPT — REBUILD THE OSINT PLATFORM AS A REALISTIC INVESTIGATION SYSTEM

You are a **senior full-stack software engineer, cybersecurity architect, OSINT platform engineer, data engineer, and UI/UX designer**.

You are working on an existing OSINT investigation web application prototype.

The current application contains demo UI, simulated searches, placeholder data, mock statistics, fake investigation results, and prototype interactions.

Your task is **NOT to lightly modify the existing demo**.

Your task is to **rebuild the application architecture and user experience so that it looks and behaves like a serious OSINT investigation platform that is actively being developed for authorized government, law-enforcement, compliance, and security organizations.**

The application must feel like a real product under development rather than a static dashboard or fake demonstration.

---

# 1. CORE OBJECTIVE

Transform the current prototype into:

> **A professional, evidence-driven, authorization-aware OSINT investigation platform for collecting, organizing, correlating, analyzing, and reporting on lawfully accessible public-source information.**

The platform should support investigations involving identifiers such as:

- email addresses
- phone numbers
- usernames
- domains
- URLs
- public social-media profiles
- organizations
- publicly available documents
- publicly available websites
- other lawful public-source indicators

The system must **never imply that it can magically access private accounts, private databases, passwords, protected systems, live phone locations, or restricted information.**

Where real external APIs or collectors are unavailable, implement realistic **service interfaces, mock adapters, loading states, result schemas, and clearly identified development fixtures** rather than pretending that fabricated information is real.

---

# 2. IMPORTANT — DO NOT SIMPLY ADD MORE UI

Do NOT solve this task by:

- adding random dashboard cards
- changing colors
- adding fake statistics
- adding buttons that only show alerts
- creating fake "AI found this person" results
- hardcoding imaginary government data
- making every search automatically return results
- pretending integrations exist when they don't
- keeping the existing demo architecture underneath a redesigned UI

The application should feel as if it has been **architected from the ground up**.

Replace prototype behavior wherever practical.

---

# 3. APPLICATION ARCHITECTURE

Create a clear separation between:

```text
Frontend
      ↓
API Layer
      ↓
Authentication / Authorization
      ↓
Investigation Service
      ↓
Search / Collection Service
      ↓
Normalization
      ↓
Entity Resolution
      ↓
Evidence Management
      ↓
Analysis / Intelligence
      ↓
Reporting
```

Structure the codebase professionally.

Use modular services/components rather than one giant JavaScript file.

If the current stack is appropriate, improve it rather than unnecessarily replacing everything.

If a frontend framework is already present, preserve it unless there is a compelling technical reason to migrate.

---

# 4. REALISTIC PRODUCT IDENTITY

Give the platform a professional identity.

Use a name such as:

**SentinelOSINT**

or another serious neutral intelligence-platform name.

The branding should communicate:

- intelligence
- investigation
- evidence
- security
- professionalism

Avoid stereotypical "hacker" aesthetics.

Do NOT use:

- skulls
- Matrix rain
- excessive neon
- hacker clichés
- fake classified stamps everywhere
- purple cyberpunk themes

The visual language should resemble a modern professional security/intelligence product.

---

# 5. AUTHENTICATION

Remove the concept of:

> Local investigator

as the main authentication mechanism.

Create a realistic authentication architecture.

Implement:

```text
Login
 ↓
Authentication
 ↓
MFA-ready architecture
 ↓
Session
 ↓
Role
 ↓
Organization
 ↓
Permissions
 ↓
Investigation workspace
```

Support roles such as:

### Administrator
System configuration and user management.

### Investigator
Creates investigations and performs authorized searches.

### Analyst
Analyzes entities, evidence, relationships, and timelines.

### Supervisor
Reviews investigations, authorizations, and reports.

### Auditor
Read-only access to evidence and audit history.

For the prototype, development accounts may be used, but clearly label them as development fixtures.

---

# 6. ORGANIZATION MODEL

Create multi-tenant architecture.

An organization should contain:

```text
Organization
├── Users
├── Investigations
├── Evidence
├── Search Jobs
├── Reports
├── Audit Events
└── Configuration
```

Example development organization:

**National Security Analysis Division — DEV**

Do not imply that this is an actual government system or that real government data is connected.

---

# 7. INVESTIGATION MANAGEMENT

This should become the center of the application.

Create a real investigation lifecycle:

```text
Draft
 ↓
Authorization Review
 ↓
Active
 ↓
Analysis
 ↓
Supervisor Review
 ↓
Closed
```

Each investigation should contain:

```text
Case ID
Title
Description
Priority
Status
Investigator
Assigned Analysts
Created Date
Updated Date
Authorization
Targets
Search Jobs
Entities
Relationships
Evidence
Timeline
Notes
Tasks
Reports
Audit History
```

Example case IDs:

```text
INV-2026-00142
INV-2026-00143
INV-2026-00144
```

Generate realistic-looking development data, but clearly label it as synthetic.

---

# 8. CASE DASHBOARD

When an investigator opens an investigation, show:

```text
INV-2026-00142

Investigation Status: ACTIVE
Priority: HIGH
Authorization: VALID
Last Activity: 4 minutes ago
```

Then display:

```text
Targets       4
Entities     17
Relationships 23
Evidence     46
Search Jobs  12
Open Tasks    5
```

These numbers must come from application state/database fixtures rather than being hardcoded visual decoration.

---

# 9. TARGET MANAGEMENT

Create a proper target interface.

Targets should have:

```text
Type
Value
Label
Source
Date Added
Added By
Verification Status
Notes
```

Target types:

```text
EMAIL
PHONE
USERNAME
DOMAIN
URL
PROFILE
ORGANIZATION
DOCUMENT
```

Example:

```text
TARGET-00027

Type:
EMAIL

Value:
example@domain.test

Status:
UNVERIFIED

Added:
13 Sep 2026
```

Use `.test` domains and synthetic identifiers for demo data.

---

# 10. SEARCH SYSTEM

Replace simple search links with an actual search-job workflow.

When a user starts a search:

```text
Create Search Job
        ↓
Validate Target
        ↓
Check Authorization
        ↓
Select Approved Sources
        ↓
Queue Collection
        ↓
Execute Connectors
        ↓
Normalize Results
        ↓
Deduplicate
        ↓
Create Entities
        ↓
Create Evidence References
        ↓
Update Investigation
```

Show a realistic progress interface.

Example:

```text
SEARCH JOB
JOB-2026-00921

Target:
example@domain.test

Status:
RUNNING

Source discovery       ✓
Public web search      ✓
Domain correlation     ✓
Profile discovery      RUNNING
Evidence normalization QUEUED
```

Do NOT make it instantly complete.

---

# 11. SOURCE CONNECTORS

Create an adapter architecture.

Example:

```text
connectors/
├── public-web/
├── search-engine/
├── github/
├── dns/
├── certificate-transparency/
├── public-social/
└── archives/
```

Each connector should have a consistent interface:

```text
validate()
search()
normalize()
getEvidence()
healthCheck()
```

If an actual API isn't configured:

```text
STATUS: NOT CONFIGURED
```

instead of fake success.

Example:

```text
GitHub Connector
Status: CONFIGURED

Public Web Connector
Status: AVAILABLE

Social Platform Connector
Status: NOT CONFIGURED
```

This makes the application look like a real system.

---

# 12. SEARCH RESULTS

Search results should contain:

```text
Source
Title
URL
Discovery time
Result type
Relevance
Confidence
Evidence ID
Verification status
```

Example:

```text
PUBLIC WEB RESULT

Source:
Example Public Website

Result:
Public profile reference

Discovered:
02:14:38 UTC

Confidence:
72%

Status:
UNVERIFIED
```

Never present an inference as an established fact.

---

# 13. ENTITY RESOLUTION

Build an entity system.

Entities can include:

```text
Person
Organization
Domain
Email
Phone
Username
Website
Document
Public Profile
Location
```

An entity should have:

```text
Entity ID
Type
Known identifiers
Sources
Confidence
Relationships
Evidence
Verification status
```

Example:

```text
ENTITY-PERSON-0007

Type:
PERSON

Identifiers:
username_x
public-email@example.test

Confidence:
78%

Status:
REQUIRES REVIEW
```

---

# 14. ENTITY CORRELATION

Create a correlation engine.

It should compare public-source observations and identify possible relationships.

Example:

```text
Observation A
username = "example123"

Observation B
public profile username = "example123"

Observation C
website references example123
```

System output:

```text
POSSIBLE RELATIONSHIP

Entity:
PERSON-0007

Relationship:
associated_with

Confidence:
84%

Supporting observations:
3

Status:
REQUIRES HUMAN VERIFICATION
```

The investigator must be able to:

```text
CONFIRM
REJECT
MARK UNCERTAIN
```

Never automatically identify a person with certainty.

---

# 15. INTELLIGENCE GRAPH

Build a proper interactive graph.

Nodes:

```text
Person
Email
Phone
Username
Domain
Website
Organization
Document
Profile
```

Edges:

```text
associated_with
mentions
references
owns
uses
linked_to
appears_on
```

Every relationship should be traceable back to evidence.

Clicking a relationship should show:

```text
Relationship
Confidence
Sources
Evidence
Created
Last Updated
Verification status
```

---

# 16. EVIDENCE VAULT

Create a dedicated evidence-management module.

Evidence records:

```text
Evidence ID
Case ID
Source
URL
Collected At
Collected By
Content Type
SHA-256
Verification Status
Description
```

Example:

```text
EVD-2026-00481

Source:
Public Website

Collected:
13 Sep 2026 02:18 UTC

SHA-256:
[generated hash]

Integrity:
VERIFIED
```

For uploaded/generated development evidence, calculate actual hashes.

Do not fake hashes.

---

# 17. CHAIN OF CUSTODY

Implement an evidence event history:

```text
Evidence Created
       ↓
Collected
       ↓
Hash Generated
       ↓
Reviewed
       ↓
Verified
       ↓
Referenced in Report
```

Display:

```text
13 Sep 2026 02:18
Evidence collected

13 Sep 2026 02:20
Integrity hash generated

13 Sep 2026 02:31
Analyst reviewed

13 Sep 2026 02:42
Evidence marked verified
```

---

# 18. AUDIT LOG

Every sensitive action should generate an audit event.

Examples:

```text
USER_LOGIN
INVESTIGATION_CREATED
TARGET_ADDED
SEARCH_STARTED
SEARCH_COMPLETED
EVIDENCE_CREATED
EVIDENCE_VIEWED
ENTITY_CONFIRMED
ENTITY_REJECTED
REPORT_GENERATED
REPORT_EXPORTED
PERMISSION_CHANGED
```

Display:

```text
AUDIT EVENT

Actor:
INV-0042

Action:
EVIDENCE_VIEWED

Case:
INV-2026-00142

Timestamp:
13 Sep 2026 02:44 UTC

IP:
development environment

Result:
SUCCESS
```

Do not expose unnecessary personal information.

---

# 19. AUTHORIZATION SYSTEM

Do not use a simple checkbox such as:

> Authorized

Create an authorization record:

```text
Authorization ID
Investigation
Purpose
Scope
Approved By
Approval Date
Expiration Date
Permitted Collection Types
Status
```

Example:

```text
AUTH-2026-0088

Status:
VALID

Purpose:
Public-source investigation

Scope:
Email + domain + public web sources

Expires:
30 Sep 2026
```

Expired authorization should prevent collection jobs from starting.

---

# 20. AI ANALYST

Add an AI assistant, but do not make it an autonomous investigator.

The AI should analyze evidence already collected.

Capabilities:

```text
Summarize investigation
Summarize evidence
Identify possible relationships
Find contradictions
Build timeline
Detect duplicate entities
Suggest investigative leads
Generate report draft
Identify evidence gaps
```

Every AI-generated conclusion must be labeled:

```text
AI-GENERATED ANALYSIS
REQUIRES HUMAN REVIEW
```

The AI must cite the evidence IDs supporting its conclusions.

---

# 21. AI ANALYSIS EXAMPLE

Instead of:

> "The target owns this account."

Use:

```text
AI ASSESSMENT

The available public-source evidence suggests a possible
association between ENTITY-0007 and PROFILE-0031.

Confidence:
81%

Supporting evidence:
EVD-00481
EVD-00482
EVD-00487

Reasoning:
The identifiers are consistent across three independent
public sources.

Assessment:
REQUIRES HUMAN VERIFICATION
```

---

# 22. TIMELINE

Create a chronological intelligence timeline.

Example:

```text
13 SEP 2026

02:01
Investigation created

02:04
Target added

02:07
Search job initiated

02:10
Public result discovered

02:12
Entity created

02:18
Evidence captured

02:31
Analyst verification started
```

Allow filtering by:

```text
All
Searches
Evidence
Entities
Analyst actions
System events
```

---

# 23. INVESTIGATIVE NOTES

Allow analysts to create notes.

Each note should include:

```text
Author
Timestamp
Investigation
Content
Referenced entities
Referenced evidence
```

Support:

```text
Important
Hypothesis
Finding
Question
Follow-up
```

---

# 24. TASK MANAGEMENT

Add investigation tasks.

Example:

```text
TASK-0028

Verify relationship between ENTITY-0007
and DOMAIN-0012

Assigned to:
Analyst-02

Priority:
HIGH

Status:
OPEN
```

Statuses:

```text
OPEN
IN PROGRESS
BLOCKED
COMPLETED
```

---

# 25. REPORT GENERATION

Build a real report system.

Report structure:

```text
Investigation Report

Case Information

Authorization

Executive Summary

Investigation Objective

Methodology

Targets

Key Findings

Entity Relationships

Timeline

Evidence Summary

Confidence Assessment

Analyst Assessment

Limitations

Recommendations

Appendices
```

Reports should reference actual case data.

Support:

```text
Draft
Under Review
Approved
Final
```

Do not allow an unapproved report to appear as an official final report.

---

# 26. DASHBOARD

Create a realistic command dashboard.

Show metrics from application state:

```text
ACTIVE INVESTIGATIONS
PENDING REVIEWS
OPEN TASKS
EVIDENCE ITEMS
RUNNING SEARCH JOBS
UNVERIFIED FINDINGS
```

Include useful visualizations:

```text
Investigations over time
Evidence by source
Case status
Search activity
Confidence distribution
Investigator workload
```

Do not use meaningless charts.

Every chart must represent an actual dataset.

---

# 27. SYSTEM HEALTH

Create an administrator system-health page.

Display:

```text
API                 OPERATIONAL
DATABASE            OPERATIONAL
AUTHENTICATION      OPERATIONAL
SEARCH QUEUE        OPERATIONAL
EVIDENCE STORE      OPERATIONAL
AI SERVICE          NOT CONFIGURED
GITHUB CONNECTOR    OPERATIONAL
PUBLIC WEB          OPERATIONAL
```

Show:

```text
Last health check
Response time
Version
Environment
```

---

# 28. DEVELOPMENT MODE

Since this project is being developed and may be deployed publicly through GitHub, clearly distinguish:

```text
DEVELOPMENT ENVIRONMENT
```

from:

```text
PRODUCTION
```

Use a visible but professional development indicator.

All synthetic data should be clearly marked.

Never imply that the public GitHub deployment contains real government investigations.

---

# 29. GITHUB DEPLOYMENT

The frontend must be deployable to GitHub Pages if technically appropriate.

However:

**GitHub Pages must never contain secrets.**

Never place:

```text
API keys
Database passwords
JWT secrets
Private credentials
Service-account keys
```

in:

```text
HTML
CSS
JavaScript
.env committed to repository
```

If a backend is required, document the required architecture and environment variables.

---

# 30. SECURITY

Apply professional security practices:

- input validation
- output encoding
- secure authentication architecture
- RBAC
- authorization checks
- rate limiting
- CSRF protection where applicable
- secure headers
- audit logging
- secret management
- encrypted transport
- database access controls
- file validation
- upload restrictions
- error handling without leaking secrets
- dependency hygiene

Never store passwords in plaintext.

Never expose API credentials in frontend code.

---

# 31. PRIVACY AND SAFETY

This is an authorized public-source intelligence system.

The application must explicitly communicate:

> Collection is limited to lawfully accessible public information and approved integrations.

Do not implement features intended to:

- bypass authentication
- access private accounts
- obtain passwords
- track someone's live location
- circumvent platform security
- access stolen credential databases
- deanonymize people automatically
- scrape protected/private content

The platform should focus on lawful OSINT and evidence management.

---

# 32. REALISTIC EMPTY STATES

Real applications do not always have results.

Create excellent empty states.

Examples:

```text
No verified relationships yet.

Run an approved search or add evidence
to begin entity correlation.
```

Or:

```text
No connector is configured for this source.

Configure an approved API integration
to enable collection.
```

This is much more realistic than always displaying fake results.

---

# 33. REALISTIC ERROR STATES

Implement:

```text
Search failed
Connector unavailable
Authorization expired
Rate limit reached
Evidence unavailable
AI service unavailable
Permission denied
Session expired
Invalid target
```

Each should provide a useful explanation.

---

# 34. LOADING STATES

Create realistic loading interfaces:

```text
Validating target...
Checking authorization...
Creating search job...
Querying approved sources...
Normalizing results...
Resolving entities...
Updating investigation...
```

Do not use a generic spinner everywhere.

---

# 35. UI/UX

The UI should feel like a serious enterprise intelligence platform.

Use:

- dark professional interface
- restrained accent colors
- high information density
- clear typography
- consistent spacing
- accessible contrast
- responsive layout
- keyboard-friendly navigation
- searchable tables
- filtering
- sorting
- pagination
- side panels
- drawers
- modal confirmations

Avoid excessive animations.

Use animation only when it communicates system state.

---

# 36. NAVIGATION

Use a structure similar to:

```text
COMMAND CENTER

Investigations
Targets
Search
Entities
Graph
Evidence
Timeline
Tasks
Reports
Audit
Connectors
System Health
Settings
```

The active investigation should remain visible in the navigation context.

---

# 37. GLOBAL SEARCH

Add a global search bar.

It should search across the user's authorized workspace:

```text
Cases
Targets
Entities
Evidence
Reports
Notes
Tasks
```

Example:

```text
Search investigations, entities, evidence...
```

Results should be grouped by category.

---

# 38. NOTIFICATIONS

Create a notification center.

Examples:

```text
Search job completed
Evidence requires verification
Supervisor review requested
Authorization expiring
Connector unavailable
AI analysis ready
Task assigned
```

---

# 39. DATA MODEL

Create sensible database models/interfaces for:

```text
User
Organization
Role
Investigation
Authorization
Target
SearchJob
SearchResult
Connector
Entity
Relationship
Evidence
EvidenceEvent
TimelineEvent
Note
Task
Report
AuditEvent
Notification
```

Use IDs and timestamps consistently.

---

# 40. SEED DATA

Create a development seed dataset.

All records must be synthetic.

Use domains such as:

```text
example.test
agency.test
research.test
```

Use clearly fictional names.

Create enough interconnected data to make the graph, timeline, evidence, dashboard, and reports useful.

But include a clear:

```text
SYNTHETIC DEVELOPMENT DATA
```

indicator.

---

# 41. REMOVE PROTOTYPE LIES

Search the existing project for things such as:

```text
mock
demo
fake
placeholder
simulated
sample
coming soon
alert("...")
hardcoded statistics
fake report
fake AI
```

Do not blindly delete all of them.

Replace prototype behavior with:

- real application state
- service abstractions
- database-backed state
- realistic development fixtures
- proper loading/error states
- configuration status

If something genuinely cannot work without an external service, clearly communicate:

```text
NOT CONFIGURED
```

rather than pretending it worked.

---

# 42. IMPORTANT DATA INTEGRITY RULE

Never create fake investigative conclusions merely to make the dashboard look impressive.

For example, NEVER automatically display:

> "Target is connected to Organization X"

unless that relationship is actually represented in the development dataset/evidence.

Use:

```text
Possible association
Requires verification
```

where appropriate.

---

# 43. PERFORMANCE

Optimize the application for:

- large investigation lists
- hundreds/thousands of evidence records
- graph visualization
- filtering
- search
- pagination
- asynchronous jobs

Avoid rendering huge datasets unnecessarily.

---

# 44. ACCESSIBILITY

Support:

- keyboard navigation
- semantic HTML
- accessible labels
- focus states
- sufficient contrast
- screen-reader-friendly controls
- reduced-motion preference

---

# 45. RESPONSIVE DESIGN

The application should work on:

```text
Desktop
Laptop
Tablet
```

The primary experience should be desktop because this is an investigation/analysis platform.

Do not simply shrink the desktop UI.

Create responsive layouts deliberately.

---

# 46. CODE QUALITY

Write production-quality code.

Use:

- reusable components
- clear naming
- modular services
- typed interfaces where appropriate
- error boundaries
- centralized configuration
- environment configuration
- validation
- comments only where useful

Remove dead code.

Remove unused assets.

Remove duplicate functions.

Remove unnecessary dependencies.

---

# 47. TESTING

Create tests for:

### Authentication

Unauthorized users cannot access protected resources.

### Authorization

Users cannot access investigations outside their organization/permission scope.

### Investigation lifecycle

Draft → Active → Review → Closed.

### Evidence

Evidence gets a real integrity hash.

### Search jobs

Jobs transition correctly through:

```text
QUEUED
RUNNING
COMPLETED
FAILED
```

### Entity resolution

Possible relationships are created with confidence and evidence references.

### Audit

Sensitive actions create audit records.

### Reports

Reports correctly reference investigation data.

---

# 48. FINAL EXPERIENCE

When I open the application, I should feel like I am entering:

> **A real intelligence investigation platform currently under development.**

I should be able to:

1. Log in.
2. See my organization.
3. Open an investigation.
4. Review authorization.
5. Add targets.
6. Start an approved search.
7. Watch a search job execute.
8. Review discovered public-source results.
9. Create or review entities.
10. Explore relationships in the graph.
11. Examine evidence.
12. Review the timeline.
13. Create analyst notes.
14. Assign investigation tasks.
15. Ask the AI analyst to summarize evidence.
16. Review AI-generated assessments.
17. Verify/reject relationships.
18. Generate a draft intelligence report.
19. Submit the report for review.
20. View the complete audit trail.

The application should **not feel like a collection of demo screens**.

It should feel like a coherent product where every module is connected to the same underlying investigation.

---

# 49. DO NOT BREAK EXISTING FUNCTIONALITY

Before making changes:

1. Inspect the entire repository.
2. Understand the existing architecture.
3. Identify reusable components.
4. Identify broken functionality.
5. Identify prototype-only functionality.
6. Create a migration plan.
7. Implement incrementally.
8. Test after each major subsystem.
9. Preserve useful existing functionality.
10. Do not overwrite working components without understanding them.

---

# 50. IMPLEMENTATION ORDER

Build in this order:

### PHASE 1
Application architecture and data models.

### PHASE 2
Authentication, organizations, roles and permissions.

### PHASE 3
Investigation management.

### PHASE 4
Target management.

### PHASE 5
Search-job architecture.

### PHASE 6
Connector architecture.

### PHASE 7
Entities and entity resolution.

### PHASE 8
Evidence vault and chain of custody.

### PHASE 9
Interactive intelligence graph.

### PHASE 10
Timeline, notes and tasks.

### PHASE 11
AI analyst.

### PHASE 12
Reporting.

### PHASE 13
Audit and system health.

### PHASE 14
Dashboard and UX refinement.

### PHASE 15
Security hardening.

### PHASE 16
Testing and deployment documentation.

---

# 51. FINAL REQUIREMENT

Do not stop after making the UI look better.

The objective is to transform:

```text
DEMO OSINT DASHBOARD
```

into:

```text
INVESTIGATION PLATFORM
```

The difference should be visible in both:

### USER EXPERIENCE

and

### APPLICATION ARCHITECTURE.

Every major screen should connect to the investigation data model.

Every important action should have a state.

Every finding should have provenance.

Every relationship should have evidence.

Every AI conclusion should be reviewable.

Every sensitive action should be auditable.

Every external integration should have a real connector abstraction.

Every unavailable service should clearly indicate its configuration state.

Every development record should be identifiable as synthetic.

---

# SUCCESS CRITERIA

Consider the rebuild successful only when the application can demonstrate this complete development workflow:

```text
LOGIN
  ↓
COMMAND CENTER
  ↓
CREATE INVESTIGATION
  ↓
AUTHORIZATION
  ↓
ADD TARGET
  ↓
START SEARCH JOB
  ↓
COLLECT PUBLIC-SOURCE RESULTS
  ↓
NORMALIZE
  ↓
CREATE ENTITIES
  ↓
CORRELATE
  ↓
BUILD GRAPH
  ↓
STORE EVIDENCE
  ↓
HASH + CHAIN OF CUSTODY
  ↓
ANALYST REVIEW
  ↓
AI-ASSISTED ANALYSIS
  ↓
HUMAN VERIFICATION
  ↓
TIMELINE
  ↓
REPORT DRAFT
  ↓
SUPERVISOR REVIEW
  ↓
FINAL REPORT
  ↓
AUDIT TRAIL
```

The final result should be **credible, coherent, secure, professional, extensible, and realistic**, while remaining clearly a development system using synthetic data unless real authorized integrations are explicitly configured.