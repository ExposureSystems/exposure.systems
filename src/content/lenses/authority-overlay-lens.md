\---  
layer: lens  
slug: authority-overlay-lens  
title: Authority Overlay Lens  
status: stable  
\---

\# Authority Overlay Lens

\#\# Definition

Maps declared authority hierarchies onto observed structure to detect absence, override, or conflict.

\#\# Structural Transform

Input:  
\- Structural graph  
\- Declared authority hierarchy

Operation:  
\- Map authority declarations to structural regions  
\- Identify overlap or absence

Output:  
\- Authority alignment classification  
\- Conflict regions (if present)

\#\# Input Requirements

\- Explicit authority definitions

\#\# Structural Signature of Failure

Failure exists when structural regions lack declared authority or contain overlapping unresolved authority.

\#\# Structural Limits

Evaluates authority alignment only.  
Does not resolve authority conflicts.