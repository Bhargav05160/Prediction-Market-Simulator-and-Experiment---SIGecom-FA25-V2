## Coin Flip Prediction Market AMM (Skeleton Only)

> **Note**: This repository intentionally contains **comments and structure only**. There is **no executable code**; all logic is described in comments so that implementation details can be added later.

### Overview

- This project is a simple **prediction market** for a **binary outcome** (a fair coin flip with outcomes "Heads" or "Tails").
- The market is powered by an **automatic market maker (AMM)** that:
  - Maintains **liquidity** in a pool for both outcomes.
  - Quotes **prices/probabilities** for "Heads" and "Tails".
  - Allows users to **buy and sell shares** in each outcome.
  - Pays out to holders of the **winning outcome** once the result is known.

### High-Level Design (Conceptual)

- **Outcomes**
  - Exactly two outcomes: `"HEADS"` and `"TAILS"`.
  - Each outcome has:
    - A current **price** (interpreted as probability).
    - A number of **outcome shares** in circulation.

- **Liquidity Pool**
  - A pool that holds:
    - **Collateral** (e.g., a stable asset or base currency).
    - **Virtual balances** of outcome shares for "HEADS" and "TAILS".
  - The AMM uses these balances to:
    - Quote **bid/ask prices** for each outcome.
    - Determine how the price moves when users trade.

- **Pricing Mechanism (AMM)**
  - The AMM can be modeled using a simple **constant product**, **constant sum**, or **logarithmic market scoring rule (LMSR)** style mechanism.
  - The choice of mechanism determines:
    - **Price sensitivity** to trade size.
    - How much **capital** is required to bootstrap the market.
    - Whether there is a **maximum loss** for the liquidity provider.

- **Users and Positions**
  - Users can:
    - **Buy shares** of "HEADS" or "TAILS" from the AMM.
    - Potentially **sell shares back** (close or reduce their position).
  - User positions are tracked as:
    - Balance of "HEADS" outcome shares.
    - Balance of "TAILS" outcome shares.
    - Total collateral deposited/withdrawn over time.

- **Resolution**
  - After the coin is flipped and the outcome is known:
    - One outcome is marked as **winning**, the other as **losing**.
    - Holders of the winning outcome's shares can **redeem** them for collateral.
    - Losing outcome shares become **worthless**.

### Repository Layout

- `README.md`
  - This document. Explains the concept and intended implementation.
- `requirements.txt`
  - Placeholder dependency file (for a possible Python implementation).
  - May include comments (and optionally suggested libraries) but no AMM logic.
- `src/`
  - Contains placeholder source files with **comments only**, describing:
    - Data structures.
    - Intended functions/methods.
    - Algorithms and invariants.
- `tests/`
  - Placeholder test files with **comments only**, describing:
    - Expected behavior.
    - Edge cases and scenarios to test once code is implemented.

### Potential Implementation Approach (Python Example, Concept Only)

- **Data Model (Conceptual)**
  - Market-level fields:
    - Initial liquidity parameters (e.g., funding for LMSR).
    - Current **outcome share supplies** for "HEADS" and "TAILS".
    - Current **prices** for each outcome.
    - **Total collateral** held by the AMM.
  - User-level fields:
    - Mapping from user ID to:
      - Number of "HEADS" shares.
      - Number of "TAILS" shares.
      - Collateral balance or P&L metrics (depending on design).

- **Core Operations (Conceptual)**
  - `create_market`:
    - Sets up the coin-flip market with initial parameters.
  - `get_prices`:
    - Returns the current quoted prices/probabilities for "HEADS" and "TAILS".
  - `buy_shares(user, outcome, collateral_in)`:
    - Takes collateral from the user.
    - Uses the AMM curve to determine how many outcome shares to issue.
    - Updates pool balances and user balances accordingly.
  - `sell_shares(user, outcome, shares_in)` (if supported):
    - Takes outcome shares from the user.
    - Uses the AMM curve to determine how much collateral to pay out.
    - Updates pool balances and user balances accordingly.
  - `resolve(outcome)`:
    - Marks the market as resolved to `outcome`.
    - Locks trading.
  - `redeem_winnings(user)`:
    - Allows a user to exchange winning outcome shares for collateral.

> Implementation details for these operations will be placed in source files as **comments only** in this skeleton repository.

### How to Use This Skeleton

- **For developers**
  - Use the comments in the `src/` directory as a **blueprint**.
  - Replace comments with actual code in your chosen language or framework.
  - Keep the **interfaces and invariants** described in comments in mind to maintain consistency.

- **For reviewers or learners**
  - Read through the comments to understand:
    - How a basic prediction market AMM might be structured.
    - What data needs to be tracked.
    - Which functions are needed to support trading and settlement.

### Notes on "No Code" Requirement

- All implementation files in this repository are designed to:
  - Contain **comments only** (no function definitions, no executable logic).
  - Avoid import statements or any executable top-level statements.
- This makes the repo ideal as:
  - A **design document in code form**.
  - A **starting point** where you can implement the logic step by step.

