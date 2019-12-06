# __Propine Addition Calculator [Test Plan Document]__
## __Document Control Information__
### __Document Information__
```
Document Name       : Test Plan
Application Name    : Propine Addition Calculator
Document Author     : Chaitanya Krishna
Document Version    : 1.0
```

## __1. Introduction__

The Test Plan has been created to communicate the test approach to stakeholders. It includes the objectives, scope, schedule, risks and approach.  This document will clearly identify what the test deliverables will be and what is deemed in and out of scope.

## __2. Objectives__

### __2.1 Purpose__

The following testing tasks are identified in this test plan. 

1.	Feature testing 
2.	Automation
3.	System or Smoke testing
4.	Reporting of problems
5.	Verification of problems
6.	Sign off
 
## __3. Scope__

### __3.1 General__

 ### __3.2 In-Scope__
 Both feature testing and automation testing are in scope to carry out this release. To know more details on feature testing and smoke testing refer section 4

 ### __3.3 Out-of-scope__
 performance testing is out of scope

## 4. Test Strategy
Test strategy is to be followed to achieve the test objective and execution of test types as mentioned below. 

### __4.1 Feature Testing__
As a part of the build provided all the features testing can be carried out to make sure the application is working fine based on calculator addition functionality.

### __4.2 Smoke Testing__
As a part of smoke testing, ensure all the major functionalities are working fine.

###  __4.3 Reporting of problem__
During feature testing and Smoke testing, if any problem has been found then that can be addressed, documented and report it to developer.  Need to create a bug in bug tracking tool. The developers need to start on investigating problems and work on fixing it parallelly.

### __4.4 Verification of problem__
The verification of problem will be done along with the regression/smoke testing.

### __4.5 Automation Testing__
Will be automating the smoke suite, all the positive flows by using protractor, selenium tools which uses typescript as the scripting language.
1.	Creating of base framework with the execution reports.
2.	Writing the test scripts for smoke suite.

### __4.6 Performance and Stress testing__
N.A

### __4.7 User Acceptance Testing__
N.A for this build provided

## __5. Entry and Exit Criteria__
This section contains changes made for testing activities

### __5.1	Entry Criteria__
Functionality delivered to QA must pass in the Application as a part of feature testing and Smoke testing within the timeliness.

### __5.2 Exit Criteria__
All the different phases of testing are completed as per the plan, no high priority or severe bugs are left outstanding, all high-risk areas have been fully tested and Creation of automation scripts and Running the scripts has been completed.

## __6. Risks and Assumptions__

### __Impact__ : High

```
1. All documentation needs to be present to QA in time to complete the test cases in a timely manner.
2. Scope might change and new issues are added to/or removed from the current list.
3. Any change in the date of delivery to QA.
4. No Performance Test capability
5. Environment unavailability
6. smoke Bug fixes
```

### __Impact__ : Medium
```
Code not delivered to QA in one build.
Regression Bug fixes
```

### __Impact__ : Medium-High
```
1. Aspects of the functionality did not pass QA entrance.
```

### __Impact__  : Low
```
Exit Criteria reports

```


## __7. Roles & Responsibilities__
```
QA Resourse     : Chaitanya Krishna
Responsibility  : Testing & Automation
Allocation      : 100%
```
