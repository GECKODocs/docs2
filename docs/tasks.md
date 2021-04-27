---
id: tasks
title: Tasks Overview
sidebar_label: Overview
---

import ReactPlayer from 'react-player/lazy';

## Task Filter

You can filter and search for tasks across a range of criteria, which include:

- **Workspace** 
A multi-select field whereby tasks across all selected workspaces will be displayed. All workspaces selected when field is empty.
- **Stage**
A multi-select field whereby tasks across all selected stages will be displayed. All stages selected when field is empty.
- **User**
A multi-select field whereby tasks where the selected user is an assignee will be displayed. All users selected when field is empty.
- **Title**
A search field where you can type all or a portion of a task title to find tasks.
- **Tags**
A multi-select field whereby tasks labelled with selected tags will be displayed. All tags selected when field is empty.
- **Status**
A multi-select filter whereby tasks with the selected status will be displayed. Tasks of all statuses displayed by default.
- **Period**
A multi-select field whereby tasks with the selected period will be displayed. All periods selected when field is empty.
- **Due Date from**
A date-picker whereby tasks with a due date on or after the selected date will be displayed.
- **Due Date to**
A date-picker whereby tasks with a due date on or before the selected date will be displayed.
- **Tasks with comments**
A checkbox allowing the option to only display tasks with comments.
- **Tasks with files**
A checkbox allowing the option to only display tasks with files attached.

#### Tasks Filter

  <ReactPlayer 
  url='https://vimeo.com/540603871/2fa62e56b2'
  width="100%"
  controls="true"/>    

<br/>
<br/>

## Task Search

Task search results are displayed on the Table tab.

Click on a task title to navigate to that task.

If a task has been marked Complete – a timestamp will display the date and time of completion, along with the person who completed the task.

:::tip tip
Use the multi-select Period dropdown to search for tasks within a specific quarter. i.e. Q1 - Jan, Feb, Mar.
:::

#### Tasks Activity

  <ReactPlayer 
  url='https://vimeo.com/473805527/205de15129'
  width="100%"
  controls="true"/>    

<br/>
<br/>

## Summary Tab
#### Display
By default, the Summary tab displays all tasks returned in the Table tab, sorted by task status.

In the Display dropdown, you can choose to view all tasks sorted by Status or by User. 

#### Group
By default, the Group dropdown is set to None.

Selecting an option in the **Group dropdown** will group the results of the Display dropdown.

Without selecting any high level filters, sort by Status in the Display dropdown and group by Project in Group dropdown.

A set of graphs of all tasks by status, across all projects will be displayed.


## Filter Sets

If you find yourself often returning to search for tasks using the same criteria, you can create a filter set. Each filter set will be **updated in real time** with tasks that meet your specified criteria.

To **create** a filter set, simply enter your search criteria and click **Save**.

To view the retrieved tasks, click on a filter set.


:::tip Tip
Filter sets are at the core of what makes up the Reporting Engine and Dashboard KPIs. The filter sets you create can be added to the dashboard or used to build up sections of a report.
:::
