---
id: survey
title: Survey Overview
sidebar_label: Overview
---

import ReactPlayer from 'react-player/lazy';

## Overview
To create a new survey, click **Add Design**.

Surveys are built using **Pages**. To add a new Page, click **Add Page**.

To add an item to a survey, click the Add button within a Page.

### Field Types
- **Information** - Static display text
- **Text** - Single-line input field
- **Date** 
- **Email**
- **URL** - Website link
- **File** - File upload
- **Paragraph** - Multi-line input field
- **Yes or No** choice - Yes/No response
- **Choice** - Single or multi selection
- **List** - A grouped list of fields

### Conditions
Conditions are built using a **Source** and **Target** framework. This means that you can decide whether to *show* or *hide* your target field based on a given response.

- Or, if this, then that.
 
#### Field
This allows you to specify a source field or trigger.
   
#### Condition
This is the specific operator that will be performed on the response to your selected source field.

#### Value
This is where you can specify the response value on which to trigger an action.

**Example**:
If [Field #1] [contains] [Yes], then display the current target field. 
